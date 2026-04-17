import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Heart, Leaf, History, Star } from "lucide-react";

export default function BrandIdentity() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[350px] bg-[#3E2723]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white drop-shadow-lg tracking-tight leading-tight">브랜드 아이덴티티</h1>
          <p className="text-white/80 text-sm md:text-base font-sans font-normal tracking-wide max-w-2xl mx-auto">
            전통과 현대가 만나는 프리미엄 떡집의 브랜드 철학과 시각적 표현
          </p>
        </div>
      </div>

      {/* Logo Meaning */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <p className="text-sm text-primary tracking-[0.3em] uppercase mb-4">Logo Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">전통의 지붕 아래,<br className="md:hidden" /> 현대의 감각을 담다</h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              마시떡의 로고는 단순한 심볼이 아닌, 우리의 철학과 약속을 담은 이야기입니다.
            </p>
          </div>
          
          {/* Logo Image - Large Display */}
          <div className="max-w-md mx-auto mb-20 md:mb-28">
            <div className="bg-white p-16 md:p-20 rounded-3xl shadow-lg border border-gray-100 flex items-center justify-center">
              <img 
                src="/images/logo-monochrome.png" 
                alt="마시떡 로고" 
                className="max-w-[320px] w-full h-auto"
              />
            </div>
          </div>
          
          {/* 3 Key Points */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Point 1 */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-lg">1</span>
                <span className="text-xs text-primary/60 tracking-[0.2em] uppercase">Roots</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 leading-snug">
                전통의 깊이와<br />따뜻함
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                로고 상단의 묵직한 선은 전통 한옥의 지붕을 상징합니다. 우리의 맛과 문화에 뿌리를 두고, 고객에게 한옥처럼 아늑하고 따뜻한 경험을 드리겠다는 약속입니다.
              </p>
            </div>
            
            {/* Point 2 */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-lg">2</span>
                <span className="text-xs text-primary/60 tracking-[0.2em] uppercase">Texture</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 leading-snug">
                떡의 쫄깃함과<br />부드러움
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                옛 한글과 격자무늬를 모티브로 하되, 글자의 끝을 둥글게 다듬었습니다. 이는 마시떡 특유의 쫄깃한 식감과 고객에게 친근하게 다가가려는 유연한 마음을 시각화한 것입니다.
              </p>
            </div>
            
            {/* Point 3 */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-lg">3</span>
                <span className="text-xs text-primary/60 tracking-[0.2em] uppercase">Vision</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 leading-snug">
                비로소,<br />진정한 맛의 시작
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                '맛 미(米), 비로소 시(始), 떡 병(餠)'. 전통에 대한 존중을 바탕으로 끊임없이 진화하며, 고객에게 새로운 미식 경험을 선사하겠다는 마시떡의 비전을 담았습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color System */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">컬러 시스템</h2>
            <p className="text-muted-foreground">마시떡을 대표하는 브랜드 컬러와 그 의미</p>
          </div>
          
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#F5F1E8] rounded-xl overflow-hidden shadow-md">
              <div className="h-24 bg-[#4f3a2c]"></div>
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-1">Primary Color</h3>
                <p className="text-sm font-mono text-muted-foreground mb-3">#4f3a2c</p>
                <p className="text-sm text-muted-foreground">떡의 자연스러운 갈색을 표현하며, 따뜻하고 신뢰감 있는 브랜드 이미지를 전달합니다.</p>
              </div>
            </div>
            
            <div className="bg-[#F5F1E8] rounded-xl overflow-hidden shadow-md">
              <div className="h-24 bg-[#354a3b]"></div>
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-1">Secondary Color</h3>
                <p className="text-sm font-mono text-muted-foreground mb-3">#354a3b</p>
                <p className="text-sm text-muted-foreground">자연과 건강을 상징하며, 엄선된 재료와 정성스러운 제법을 표현합니다.</p>
              </div>
            </div>
            
            <div className="bg-[#F5F1E8] rounded-xl overflow-hidden shadow-md">
              <div className="h-24 bg-[#f8f6f1] border border-gray-200"></div>
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-1">Accent Color</h3>
                <p className="text-sm font-mono text-muted-foreground mb-3">#f8f6f1</p>
                <p className="text-sm text-muted-foreground">깔끔하고 고급스러운 느낌을 주며, 브랜드의 프리미엄 이미지를 강조합니다.</p>
              </div>
            </div>
            
            <div className="bg-[#F5F1E8] rounded-xl overflow-hidden shadow-md">
              <div className="h-24 bg-[#303030]"></div>
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-1">Monochrome Color</h3>
                <p className="text-sm font-mono text-muted-foreground mb-3">#303030</p>
                <p className="text-sm text-muted-foreground">가독성을 고려한 다크 그레이로, 모든 배경에서 명확하게 읽힙니다.</p>
              </div>
            </div>
            
            <div className="bg-[#F5F1E8] rounded-xl overflow-hidden shadow-md">
              <div className="h-24 bg-white border border-gray-200"></div>
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-1">White Color</h3>
                <p className="text-sm font-mono text-muted-foreground mb-3">#ffffff</p>
                <p className="text-sm text-muted-foreground">깔끔하고 순수한 느낌을 주며, 브랜드의 미니멀하고 현대적인 이미지를 표현합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">브랜드 가치</h2>
            <p className="text-muted-foreground">마시떡이 추구하는 핵심 가치와 철학</p>
          </div>
          
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">정성</h3>
              <p className="text-sm text-muted-foreground">10여년간 이어온 정성과 노하우를 바탕으로, 매일 아침 새롭게 빚는 신선한 떡을 제공합니다.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">건강</h3>
              <p className="text-sm text-muted-foreground">국내산 쌀과 자연에서 나온 재료만을 사용하여, 건강과 맛을 동시에 담았습니다.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <History className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">전통</h3>
              <p className="text-sm text-muted-foreground">한국의 전통 떡 문화를 존중하고, 그 맛과 정신을 현대적으로 계승합니다.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">현대</h3>
              <p className="text-sm text-muted-foreground">전통의 맛을 현대적 감각으로 재해석하여, 새로운 경험을 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Tone */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">브랜드 톤앤매너</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              따뜻하고 신뢰감 있는 커뮤니케이션으로, 고객과의 진정한 연결을 추구합니다.
              마시떡은 단순히 떡을 판매하는 것이 아닌, 고객의 소중한 순간에 함께하는 동반자가 되고자 합니다.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
