import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, LogOut } from "lucide-react";

type RiceCake = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  available: boolean;
  sortOrder: number;
};

function getToken() {
  return localStorage.getItem("admin_token");
}
function saveToken(token: string) {
  localStorage.setItem("admin_token", token);
}
function clearToken() {
  localStorage.removeItem("admin_token");
}

async function apiCall<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const res = await fetch(`/api${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers ?? {}),
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "오류가 발생했습니다");
  return data as T;
}

// ─── 로그인 화면 ───────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { token } = await apiCall<{ token: string }>("/admin/login", {
        method: "POST",
        body: JSON.stringify({ password }),
      });
      saveToken(token);
      onLogin();
      toast({ title: "환영합니다 사장님!" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "로그인 실패");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🍡</div>
          <h1 className="font-serif text-2xl text-foreground mb-2">마시떡 관리자</h1>
          <p className="text-muted-foreground text-sm">오늘의 떡을 설정해주세요</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 text-base"
            autoComplete="current-password"
            autoFocus
          />
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <Button
            type="submit"
            className="w-full h-12 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={loading || !password}
          >
            {loading ? "로그인 중..." : "로그인"}
          </Button>
        </form>
      </div>
    </div>
  );
}

// ─── 떡 추가 모달 ───────────────────────────────────────────────────────────────
function AddCakeModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: Partial<RiceCake>) =>
      apiCall<RiceCake>("/rice-cakes", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: (newCake) => {
      queryClient.invalidateQueries({ queryKey: ["riceCakes"] });
      toast({ title: `"${newCake.name}" 추가 완료!` });
      onClose();
    },
    onError: (err: Error) => {
      toast({ title: "오류", description: err.message, variant: "destructive" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    mutation.mutate({
      name: name.trim(),
      description: description.trim(),
      imageUrl: imageUrl.trim(),
      available: true,
      sortOrder: 0,
    });
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-card rounded-t-2xl sm:rounded-2xl w-full max-w-md p-6 space-y-4">
        <h2 className="font-serif text-xl text-foreground">새 떡 추가</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">
              떡 이름 <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="예: 흑임자떡, 쑥인절미"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-11"
              autoFocus
              required
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">설명 (선택)</label>
            <Textarea
              placeholder="예: 고소한 흑임자가 가득한 찹쌀떡"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="resize-none"
              rows={2}
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">이미지 URL (선택)</label>
            <Input
              placeholder="https://..."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="h-11"
              type="url"
            />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="미리보기"
                className="mt-2 w-full h-32 object-cover rounded-lg bg-muted"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            )}
          </div>
          <div className="flex gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1 h-11"
              onClick={onClose}
            >
              취소
            </Button>
            <Button
              type="submit"
              className="flex-1 h-11 bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={mutation.isPending || !name.trim()}
            >
              {mutation.isPending ? "추가 중..." : "추가하기"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── 관리자 패널 ───────────────────────────────────────────────────────────────
function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: cakes = [], isLoading, isError } = useQuery<RiceCake[]>({
    queryKey: ["riceCakes"],
    queryFn: () => apiCall<RiceCake[]>("/rice-cakes"),
    retry: false,
    staleTime: 0,
  });

  const toggleMutation = useMutation({
    mutationFn: ({ id, available }: { id: number; available: boolean }) =>
      apiCall<RiceCake>(`/rice-cakes/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ available }),
      }),
    onMutate: async ({ id, available }) => {
      await queryClient.cancelQueries({ queryKey: ["riceCakes"] });
      const prev = queryClient.getQueryData<RiceCake[]>(["riceCakes"]);
      queryClient.setQueryData<RiceCake[]>(["riceCakes"], (old = []) =>
        old.map((c) => (c.id === id ? { ...c, available } : c))
      );
      return { prev };
    },
    onError: (_err, _vars, context) => {
      if (context?.prev) queryClient.setQueryData(["riceCakes"], context.prev);
      toast({ title: "변경 실패", variant: "destructive" });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["riceCakes"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => apiCall(`/rice-cakes/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["riceCakes"] });
      toast({ title: "삭제 완료" });
    },
    onError: (err: Error) => {
      toast({ title: "오류", description: err.message, variant: "destructive" });
    },
  });

  const handleLogout = () => {
    clearToken();
    onLogout();
  };

  const availableCount = cakes.filter((c) => c.available).length;

  return (
    <div className="min-h-screen bg-background">
      {/* 헤더 */}
      <header className="bg-card border-b border-border px-4 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div>
          <h1 className="font-serif text-xl text-foreground leading-tight">오늘의 떡 관리</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {availableCount > 0
              ? `${availableCount}개 판매 중 · 고객 페이지에 공개됨`
              : "판매 중인 떡 없음 · 고객에게 비공개"}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="text-muted-foreground hover:text-foreground p-2 rounded-xl hover:bg-muted transition-colors"
          aria-label="로그아웃"
        >
          <LogOut size={20} />
        </button>
      </header>

      {/* 컨텐츠 */}
      <main className="p-4 space-y-3 max-w-lg mx-auto pb-24">
        {isLoading ? (
          <div className="space-y-3 mt-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border p-4 h-20 animate-pulse"
              />
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">불러오기 실패. 새로고침해주세요.</p>
          </div>
        ) : cakes.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🍡</div>
            <h2 className="font-serif text-lg text-foreground mb-2">아직 떡이 없어요</h2>
            <p className="text-muted-foreground text-sm mb-6">
              아래 버튼을 눌러 오늘의 떡을 추가해주세요
            </p>
            <Button
              onClick={() => setShowAddModal(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Plus size={16} className="mr-1.5" />
              첫 떡 추가하기
            </Button>
          </div>
        ) : (
          cakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-card rounded-xl border border-border p-4 flex items-center gap-3 transition-opacity"
              style={{ opacity: cake.available ? 1 : 0.6 }}
            >
              {/* 이미지 */}
              {cake.imageUrl ? (
                <img
                  src={cake.imageUrl}
                  alt={cake.name}
                  className="w-14 h-14 rounded-lg object-cover flex-shrink-0 bg-muted"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              ) : (
                <div className="w-14 h-14 rounded-lg bg-accent flex-shrink-0 flex items-center justify-center text-2xl select-none">
                  🍡
                </div>
              )}

              {/* 정보 */}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">{cake.name}</p>
                {cake.description && (
                  <p className="text-sm text-muted-foreground truncate mt-0.5">
                    {cake.description}
                  </p>
                )}
              </div>

              {/* 토글 + 삭제 */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <Switch
                  checked={cake.available}
                  onCheckedChange={(checked) =>
                    toggleMutation.mutate({ id: cake.id, available: checked })
                  }
                  aria-label={`${cake.name} ${cake.available ? "판매 중" : "판매 안함"}`}
                />
                <button
                  onClick={() => {
                    if (window.confirm(`"${cake.name}"을(를) 삭제할까요?`)) {
                      deleteMutation.mutate(cake.id);
                    }
                  }}
                  className="text-muted-foreground hover:text-red-500 p-1.5 rounded-lg hover:bg-muted transition-colors"
                  aria-label={`${cake.name} 삭제`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </main>

      {/* 플로팅 추가 버튼 */}
      {cakes.length > 0 && (
        <div className="fixed bottom-6 right-6 z-20">
          <Button
            onClick={() => setShowAddModal(true)}
            className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
            size="icon"
            aria-label="떡 추가"
          >
            <Plus size={24} />
          </Button>
        </div>
      )}

      {/* 추가 모달 */}
      {showAddModal && <AddCakeModal onClose={() => setShowAddModal(false)} />}
    </div>
  );
}

// ─── 메인 컴포넌트 ─────────────────────────────────────────────────────────────
export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setChecking(false);
      return;
    }
    apiCall<{ ok: boolean }>("/admin/check")
      .then(() => setIsLoggedIn(true))
      .catch(() => clearToken())
      .finally(() => setChecking(false));
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground text-sm">확인 중...</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return <AdminPanel onLogout={() => setIsLoggedIn(false)} />;
}
