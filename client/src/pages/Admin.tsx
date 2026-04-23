import { useState, useEffect, useMemo, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Search, PowerOff, Plus, X } from "lucide-react";

type RiceCake = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  available: boolean;
  sortOrder: number;
};

function getToken() { return localStorage.getItem("admin_token"); }
function saveToken(t: string) { localStorage.setItem("admin_token", t); }
function clearToken() { localStorage.removeItem("admin_token"); }

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

async function compressImage(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objUrl = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(objUrl);
      const MAX = 1200;
      let { width, height } = img;
      if (width > MAX || height > MAX) {
        if (width > height) { height = Math.round((height / width) * MAX); width = MAX; }
        else { width = Math.round((width / height) * MAX); height = MAX; }
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (b) => (b ? resolve(b) : reject(new Error("압축 실패"))),
        "image/jpeg",
        0.85
      );
    };
    img.onerror = () => { URL.revokeObjectURL(objUrl); reject(new Error("이미지 로딩 실패")); };
    img.src = objUrl;
  });
}

async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

// ─── 새 떡 추가 모달 ──────────────────────────────────────────
function AddCakeModal({ onClose, onAdded }: { onClose: () => void; onAdded: () => void }) {
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    return () => { if (preview) URL.revokeObjectURL(preview); };
  }, [preview]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(f));
  };

  const removeFile = () => {
    setFile(null);
    if (preview) URL.revokeObjectURL(preview);
    setPreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    try {
      let imageUrl = "";
      if (file) {
        const compressed = await compressImage(file);
        const base64 = await blobToBase64(compressed);
        const token = getToken();
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ contentType: "image/jpeg", data: base64 }),
        });
        let uploadJson: { url?: string; message?: string } = {};
        try { uploadJson = await uploadRes.json(); } catch { /* non-JSON body */ }
        if (!uploadRes.ok) {
          throw new Error(uploadJson.message || (uploadRes.status === 413 ? "이미지 파일이 너무 커요 (10MB 이하로 줄여주세요)" : "이미지 업로드 실패"));
        }
        imageUrl = uploadJson.url ?? "";
      }

      await apiCall<RiceCake>("/rice-cakes", {
        method: "POST",
        body: JSON.stringify({ name: name.trim(), imageUrl, description: "", available: false, sortOrder: 0 }),
      });

      toast({ title: "추가됐어요!", description: `${name.trim()} 등록 완료` });
      onAdded();
      onClose();
    } catch (err) {
      toast({
        title: "추가 실패",
        description: err instanceof Error ? err.message : "오류가 발생했습니다",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-sm shadow-xl">
        {/* 헤더 */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-border">
          <h2 className="font-serif text-base font-semibold text-foreground">새 떡 추가</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-muted transition-colors"
          >
            <X size={18} className="text-muted-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-5 py-4 space-y-4">
          {/* 이름 */}
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
              떡 이름 <span className="text-red-400">*</span>
            </label>
            <Input
              placeholder="예) 무지개떡, 인절미..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-11"
              autoFocus
              maxLength={50}
            />
          </div>

          {/* 사진 */}
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
              사진 <span className="text-muted-foreground/60">(선택)</span>
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFile}
              className="hidden"
            />
            {preview ? (
              <div className="relative">
                <img
                  src={preview}
                  alt="미리보기"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <button
                  type="button"
                  onClick={removeFile}
                  className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1.5 hover:bg-black/80 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-32 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-2 text-muted-foreground hover:border-primary/40 hover:bg-muted/30 transition-colors active:bg-muted/50"
              >
                <span className="text-3xl select-none">📷</span>
                <div className="text-center">
                  <p className="text-sm font-medium">사진 추가</p>
                  <p className="text-xs opacity-60 mt-0.5">카메라 촬영 또는 갤러리에서 선택</p>
                </div>
              </button>
            )}
          </div>

          {/* 버튼 */}
          <div className="flex gap-2 pt-1 pb-safe pb-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
              className="flex-1 h-11"
            >
              취소
            </Button>
            <Button
              type="submit"
              disabled={!name.trim() || loading}
              className="flex-1 h-11 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {loading ? "추가 중..." : "추가"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── 로그인 화면 ──────────────────────────────────────────────
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
          <div className="text-5xl mb-4 select-none">🍡</div>
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
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
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

// ─── 관리자 패널 ──────────────────────────────────────────────
function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: cakes = [], isLoading } = useQuery<RiceCake[]>({
    queryKey: ["riceCakes"],
    queryFn: () => apiCall<RiceCake[]>("/rice-cakes"),
    retry: false,
    staleTime: 0,
  });

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return cakes;
    return cakes.filter((c) => c.name.toLowerCase().includes(q));
  }, [cakes, search]);

  const availableCount = cakes.filter((c) => c.available).length;

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
    onError: (_err, _vars, ctx) => {
      if (ctx?.prev) queryClient.setQueryData(["riceCakes"], ctx.prev);
      toast({ title: "변경 실패", variant: "destructive" });
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["riceCakes"] }),
  });

  const resetMutation = useMutation({
    mutationFn: () => apiCall("/rice-cakes/reset", { method: "POST" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["riceCakes"] });
      toast({ title: "모두 꺼졌어요", description: "내일 다시 켜주세요 🌙" });
    },
    onError: () => toast({ title: "실패", variant: "destructive" }),
  });

  const handleReset = () => {
    if (availableCount === 0) { toast({ title: "이미 모두 꺼져 있어요" }); return; }
    if (window.confirm(`판매 중인 떡 ${availableCount}개를 모두 끌까요?`)) {
      resetMutation.mutate();
    }
  };

  const handleLogout = () => { clearToken(); onLogout(); };

  return (
    <div className="min-h-screen bg-background">
      {/* 헤더 */}
      <header className="bg-card border-b border-border sticky top-0 z-20 shadow-sm">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-2">
          <div className="flex-1 min-w-0">
            <h1 className="font-serif text-lg text-foreground leading-tight">오늘의 떡 관리</h1>
            <p className="text-xs text-muted-foreground">
              {availableCount > 0 ? `${availableCount}개 판매 중` : "판매 중인 떡 없음"}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAdd(true)}
            className="text-xs h-8 px-3 flex-shrink-0 border-primary/40 text-primary hover:bg-primary/10 hover:text-primary gap-1"
          >
            <Plus size={13} />
            새 떡
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            disabled={resetMutation.isPending}
            className="text-xs h-8 px-3 flex-shrink-0 border-muted-foreground/30 text-muted-foreground hover:text-foreground"
          >
            <PowerOff size={13} className="mr-1" />
            모두 끄기
          </Button>
          <button
            onClick={handleLogout}
            className="text-muted-foreground hover:text-foreground p-2 rounded-lg hover:bg-muted transition-colors flex-shrink-0"
            aria-label="로그아웃"
          >
            <LogOut size={18} />
          </button>
        </div>

        {/* 검색창 */}
        <div className="max-w-lg mx-auto px-4 pb-3">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="떡 이름으로 검색..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 h-9 text-sm bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>
          {search && (
            <p className="text-xs text-muted-foreground mt-1.5 pl-1">
              {filtered.length > 0 ? `${filtered.length}개 검색됨` : "검색 결과 없음"}
            </p>
          )}
        </div>
      </header>

      {/* 목록 */}
      <main className="max-w-lg mx-auto px-4 py-3 pb-12 space-y-1.5">
        {isLoading ? (
          <div className="space-y-1.5 pt-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-16 bg-card rounded-xl border border-border animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground text-sm">
            {search ? "검색 결과가 없어요" : "등록된 떡이 없어요"}
          </div>
        ) : (
          filtered.map((cake) => (
            <div
              key={cake.id}
              className="bg-card rounded-xl border border-border flex items-center gap-3 px-3 py-2.5 transition-opacity"
              style={{ opacity: cake.available ? 1 : 0.55 }}
            >
              {cake.imageUrl ? (
                <img
                  src={cake.imageUrl}
                  alt={cake.name}
                  className="w-11 h-11 rounded-lg object-cover flex-shrink-0 bg-muted"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              ) : (
                <div className="w-11 h-11 rounded-lg bg-accent flex-shrink-0 flex items-center justify-center text-xl select-none">
                  🍡
                </div>
              )}
              <p className="flex-1 text-sm font-medium text-foreground leading-tight min-w-0 truncate">
                {cake.name}
              </p>
              <Switch
                checked={cake.available}
                onCheckedChange={(checked) =>
                  toggleMutation.mutate({ id: cake.id, available: checked })
                }
                aria-label={`${cake.name} ${cake.available ? "판매 중" : "판매 안함"}`}
                className="flex-shrink-0"
              />
            </div>
          ))
        )}
      </main>

      {/* 새 떡 추가 모달 */}
      {showAdd && (
        <AddCakeModal
          onClose={() => setShowAdd(false)}
          onAdded={() => queryClient.invalidateQueries({ queryKey: ["riceCakes"] })}
        />
      )}
    </div>
  );
}

// ─── 메인 ────────────────────────────────────────────────────
export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) { setChecking(false); return; }
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

  return isLoggedIn
    ? <AdminPanel onLogout={() => setIsLoggedIn(false)} />
    : <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
}
