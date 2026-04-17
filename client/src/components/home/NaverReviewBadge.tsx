import { Star, ExternalLink } from "lucide-react";

export default function NaverReviewBadge() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Naver Logo */}
              <div className="flex-shrink-0">
                <div className="bg-[#03C75A] text-white font-bold text-2xl px-5 py-3 rounded-lg">
                  NAVER
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-sm text-[#03C75A] font-semibold mb-1">용인 처인구 인증 맛집</p>
                <h3 className="text-xl font-bold text-foreground mb-2">마시떡</h3>
                <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-lg font-bold text-foreground">4.9</span>
                  <span className="text-muted-foreground">/ 5.0</span>
                </div>
                
                {/* Review Stats */}
                <div className="flex items-center justify-center md:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">방문자 리뷰</span>
                    <span className="font-bold text-[#03C75A] text-lg">739+</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">블로그 리뷰</span>
                    <span className="font-bold text-[#03C75A] text-lg">113+</span>
                  </div>
                </div>
              </div>
              
              {/* Button */}
              <div className="flex-shrink-0">
                <a 
                  href="https://map.naver.com/p/search/%EB%A7%88%EC%8B%9C%EB%96%A1/place/1498829262?c=15.00,0,0,0,dh&placePath=/home" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#03C75A] hover:bg-[#02b351] text-white font-medium px-5 py-3 rounded-lg transition-colors shadow-md"
                >
                  네이버 플레이스에서 보기
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
