import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Quote, Clock, Leaf, Hand, History } from "lucide-react";

export default function BrandStory() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[350px]">
        <img 
          src="/images/brand-story-hero.jpg" 
          alt="부부가 떡을 만드는 모습" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
           <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-lg tracking-tight leading-tight">
             <span className="block">맛의 시작,</span>
             <span className="block">마시떡 이야기</span>
           </h1>
           <p className="text-white/80 text-sm md:text-base font-sans font-normal tracking-wide">
             일상에 스며든, 당신을 위한 프리미엄 수제떡.<br className="hidden md:block" />
             마시떡이 정성을 담아 전합니다.
           </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Intro */}
            <div className="text-center mb-20">
               <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
               <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-8">
                 안녕하세요,<br/>
                 맛과 건강을 함께 빚는<br/>
                 수제떡 전문점, <span className="text-primary">마시떡</span>입니다.
               </h2>
               <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                 마시떡은 전통 떡의 맛과 정성을 현대적으로 재해석하여, 일상의 특별한 순간을 만들어갑니다. 
                 2025년 새로운 매장으로 이전하여 더욱 넓어진 공간에서 고객 여러분을 맞이하고 있습니다.
               </p>
            </div>

            {/* Timeline */}
            <div className="relative border-l border-primary/20 ml-4 md:ml-0 md:pl-0 space-y-12 my-20">
              <div className="md:grid md:grid-cols-2 gap-8 relative items-center">
                <div className="hidden md:block text-right pr-8">
                   <h3 className="text-xl font-bold text-primary">2016</h3>
                   <p className="text-muted-foreground mt-2">마시떡의 시작</p>
                </div>
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white"></div>
                <div className="pl-8 md:pl-8">
                   <span className="md:hidden text-primary font-bold block mb-1">2016</span>
                   <p className="text-foreground">용인에서 작은 떡집으로 시작. 현대인의 입맛에 맞춘 새로운 레시피 개발.</p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-2 gap-8 relative items-center">
                <div className="hidden md:block text-right pr-8">
                   <p className="text-foreground">답례떡 전문점으로 성장, 많은 고객들의 사랑을 받기 시작.</p>
                </div>
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white"></div>
                <div className="pl-8 md:pl-8">
                   <h3 className="text-xl font-bold text-primary">2018</h3>
                   <p className="text-muted-foreground mt-2 hidden md:block">답례떡 전문점으로 성장</p>
                   <p className="text-foreground md:hidden">답례떡 전문점으로 성장, 많은 고객들의 사랑을 받기 시작.</p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-2 gap-8 relative items-center">
                <div className="hidden md:block text-right pr-8">
                   <h3 className="text-xl font-bold text-primary">2020</h3>
                   <p className="text-muted-foreground mt-2">맞춤 제작 시스템 구축</p>
                </div>
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white"></div>
                <div className="pl-8 md:pl-8">
                   <span className="md:hidden text-primary font-bold block mb-1">2020</span>
                   <p className="text-foreground">고객의 요구에 맞춘 맞춤 떡 제작 시스템 구축, 개인화된 서비스 제공.</p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-2 gap-8 relative items-center">
                <div className="hidden md:block text-right pr-8">
                   <p className="text-foreground">더 나은 서비스와 편의를 위해 새로운 매장으로 이전하여 새롭게 개업.</p>
                </div>
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white"></div>
                <div className="pl-8 md:pl-8">
                   <h3 className="text-xl font-bold text-primary">2025</h3>
                   <p className="text-muted-foreground mt-2 hidden md:block">새로운 시작, 새로운 공간</p>
                   <p className="text-foreground md:hidden">더 나은 서비스와 편의를 위해 새로운 매장으로 이전하여 새롭게 개업.</p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="my-20">
               <h3 className="text-2xl font-bold text-center text-foreground mb-12">마시떡의 핵심 가치</h3>
               <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-[#FDFBF7] rounded-xl border border-[#EBE5D9]">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-primary">
                        <History className="w-6 h-6" />
                     </div>
                     <h4 className="font-bold text-lg mb-2">전통의 재해석</h4>
                     <p className="text-sm text-muted-foreground">전통 떡의 맛과 정성을 현대적으로 재해석하여, 마음을 담은 선물을 만듭니다.</p>
                  </div>
                  <div className="text-center p-6 bg-[#FDFBF7] rounded-xl border border-[#EBE5D9]">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-primary">
                        <Leaf className="w-6 h-6" />
                     </div>
                     <h4 className="font-bold text-lg mb-2">건강한 재료</h4>
                     <p className="text-sm text-muted-foreground">국내산 쌀과 자연 재료만을 사용하여 건강과 맛을 동시에 담았습니다.</p>
                  </div>
                  <div className="text-center p-6 bg-[#FDFBF7] rounded-xl border border-[#EBE5D9]">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-primary">
                        <Hand className="w-6 h-6" />
                     </div>
                     <h4 className="font-bold text-lg mb-2">장인의 정성</h4>
                     <p className="text-sm text-muted-foreground">10여년간 쌓아온 노하우로 매일 아침 새롭게 빚는 신선한 떡을 제공합니다.</p>
                  </div>
               </div>
            </div>

            {/* Signature */}
            <div className="text-center pt-12 border-t border-border mt-20">
               <p className="font-serif italic text-xl text-primary">Always with gratitude,</p>
               <p className="font-bold text-foreground mt-2">마시떡 부부 올림</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
