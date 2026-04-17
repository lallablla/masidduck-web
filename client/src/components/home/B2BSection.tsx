import { MessageCircle } from "lucide-react";

export default function B2BSection() {
  return (
    <section className="py-20 bg-[#3E2723] relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-[#4E342E] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-white/10 shadow-2xl">
          <div className="text-white max-w-xl">
            <span className="text-[#BCAAA4] font-medium tracking-[0.2em] text-xs uppercase mb-4 block">For Business</span>
            <h2 className="text-2xl md:text-3xl font-sans font-semibold mb-6 text-white tracking-tight">기업 대량주문 & 답례떡 상담</h2>
            <p className="text-[#BCAAA4] text-base leading-relaxed mb-8 font-normal">
              임직원 선물, 행사 답례품, 거래처 명절 선물 등<br/>
              품격 있는 떡 선물이 필요하신가요?<br/>
              예산과 수량에 맞춰 1:1 맞춤 제안을 드립니다.
            </p>
            <ul className="grid grid-cols-2 gap-3 text-sm text-[#BCAAA4] mb-2">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FFB300] rounded-full"/> 세금계산서 발행 가능</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FFB300] rounded-full"/> 기업 로고 스티커 부착</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FFB300] rounded-full"/> 전국 배송 시스템</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FFB300] rounded-full"/> 예산별 맞춤 구성</li>
            </ul>
          </div>

          <div className="shrink-0">
             <a 
               href="https://pf.kakao.com" 
               target="_blank" 
               rel="noreferrer"
               className="group flex flex-col items-center justify-center w-64 h-64 bg-[#FAE100] rounded-full text-[#371D1E] hover:scale-105 transition-all shadow-[0_0_40px_rgba(250,225,0,0.3)]"
             >
               <MessageCircle className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
               <span className="text-xl font-bold">1:1 채팅 상담하기</span>
               <span className="text-sm font-medium opacity-70 mt-1">카카오톡 채널 바로가기</span>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
