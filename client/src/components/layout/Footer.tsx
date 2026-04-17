import { Link } from "wouter";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

const getYearsInBusiness = () => {
  const startYear = 2017;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

export default function Footer() {
  const yearsInBusiness = getYearsInBusiness();
  
  return (
    <footer className="bg-[#F5F1E8] pt-16 pb-8 border-t border-[#EBE5D9]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">마시떡</h2>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              부부가 {yearsInBusiness}년째 매일 새벽 직접 빚는 정성의 맛.<br/>
              전통과 현대가 만나는 프리미엄 떡집입니다.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/masidduck/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://open.kakao.com/your-kakao" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#FAE100] flex items-center justify-center text-[#371D1E] hover:scale-105 transition-all shadow-sm font-bold text-sm">
                Ch
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-5">바로가기</h3>
            <ul className="space-y-3">
              <li><Link href="/brand-story"><a className="text-sm text-muted-foreground hover:text-primary transition-colors">브랜드 스토리</a></Link></li>
              <li><Link href="/products"><a className="text-sm text-muted-foreground hover:text-primary transition-colors">전체 제품</a></Link></li>
              <li><Link href="/contact"><a className="text-sm text-muted-foreground hover:text-primary transition-colors">고객센터</a></Link></li>
              <li><a href="https://smartstore.naver.com/masidduck" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">스마트스토어</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-5">문의하기</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm text-foreground font-medium">031-334-0015</span>
                  <span className="block text-xs text-muted-foreground mt-0.5">05:00 - 19:00 (일요일 휴무)</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">leesh7697@naver.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">경기도 용인시 처인구 명지로16번길 9-24<br/>진영리더스빌 109-110호</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E0D8C8] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
          <div className="flex items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Masidduck. All rights reserved.</p>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-200/50 text-gray-500 text-[10px] font-medium rounded">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              HACCP 인증
            </div>
          </div>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-foreground py-2 px-1">이용약관</Link>
            <Link href="/privacy-policy" className="hover:text-foreground py-2 px-1">개인정보처리방침</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
