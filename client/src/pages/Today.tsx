import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type RiceCake = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  available: boolean;
};

async function fetchTodaysCakes(): Promise<RiceCake[]> {
  const res = await fetch("/api/today");
  if (!res.ok) throw new Error("불러오기 실패");
  return res.json();
}

function SkeletonCard() {
  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border animate-pulse">
      <div className="aspect-square bg-muted" />
      <div className="p-4 space-y-2">
        <div className="h-5 bg-muted rounded w-2/3" />
        <div className="h-4 bg-muted rounded w-full" />
      </div>
    </div>
  );
}

export default function Today() {
  const {
    data: cakes = [],
    isLoading,
    isError,
  } = useQuery<RiceCake[]>({
    queryKey: ["today"],
    queryFn: fetchTodaysCakes,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12 sm:py-16">
        {/* 헤더 */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-3">
            Today's Special
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
            오늘의 떡
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            오늘 매장에서 만나보실 수 있는 떡이에요
          </p>
          <div className="w-12 h-0.5 bg-primary/40 mx-auto mt-6 rounded-full" />
        </div>

        {/* 상태별 렌더링 */}
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              잠시 후 다시 시도해주세요
            </p>
          </div>
        ) : cakes.length === 0 ? (
          <div className="text-center py-16 sm:py-24">
            <div className="text-6xl sm:text-7xl mb-6 select-none">🍡</div>
            <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
              오늘은 아직 준비 중이에요
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              오늘의 떡 정보가 아직 등록되지 않았어요.<br />
              매장으로 직접 문의해주세요.
            </p>
            <div className="mt-8 inline-block bg-accent rounded-2xl px-6 py-4">
              <p className="text-xs text-muted-foreground mb-1">문의</p>
              <a
                href="tel:010-0000-0000"
                className="font-serif text-lg text-primary hover:underline"
              >
                전화 문의하기
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {cakes.map((cake) => (
              <div
                key={cake.id}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow group"
              >
                {/* 이미지 */}
                {cake.imageUrl ? (
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={cake.imageUrl}
                      alt={cake.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="aspect-square bg-accent flex items-center justify-center select-none">
                    <span className="text-5xl sm:text-6xl">🍡</span>
                  </div>
                )}

                {/* 정보 */}
                <div className="p-3 sm:p-4">
                  <h3 className="font-serif text-base sm:text-lg text-foreground leading-tight">
                    {cake.name}
                  </h3>
                  {cake.description && (
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                      {cake.description}
                    </p>
                  )}
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    오늘 구매 가능
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
