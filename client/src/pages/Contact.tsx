import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="relative h-[45vh] min-h-[350px]">
        <img 
          src="/images/contact-hero.png" 
          alt="고객센터" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white drop-shadow-lg tracking-tight leading-tight">고객센터</h1>
          <p className="text-white/80 text-sm md:text-base font-sans font-normal tracking-wide max-w-2xl mx-auto">
            궁금하신 점이 있으신가요? 언제든 편하게 문의해주세요.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
               <div>
                 <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                   <span className="w-8 h-1 bg-primary block"></span>
                   연락처 정보
                 </h2>
                 <div className="grid sm:grid-cols-2 gap-6">
                    <a href="tel:031-334-0015" className="block p-6 bg-white border border-border rounded-xl shadow-sm hover:border-primary transition-colors">
                       <Phone className="w-8 h-8 text-primary mb-4" />
                       <h3 className="font-bold mb-2">전화 문의</h3>
                       <p className="text-lg font-bold text-foreground">031-334-0015</p>
                       <p className="text-sm text-muted-foreground mt-1">월~토 05:00~19:00</p>
                    </a>
                    <a href="mailto:leesh7697@naver.com" className="block p-6 bg-white border border-border rounded-xl shadow-sm hover:border-primary transition-colors">
                       <Mail className="w-8 h-8 text-primary mb-4" />
                       <h3 className="font-bold mb-2">이메일</h3>
                       <p className="text-foreground">leesh7697@naver.com</p>
                       <p className="text-sm text-muted-foreground mt-1">24시간 접수 가능</p>
                    </a>
                    <div className="col-span-full p-6 bg-white border border-border rounded-xl shadow-sm hover:border-primary transition-colors">
                       <Clock className="w-8 h-8 text-primary mb-4" />
                       <h3 className="font-bold mb-2">영업시간</h3>
                       <div className="flex justify-between text-sm">
                         <span>월요일 - 토요일</span>
                         <span className="font-bold">05:00 - 19:00</span>
                       </div>
                       <div className="flex justify-between text-sm mt-2 text-red-500">
                         <span>일요일</span>
                         <span className="font-bold">정기 휴무</span>
                       </div>
                    </div>
                 </div>
               </div>

               {/* FAQ */}
               <div>
                 <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                   <span className="w-8 h-1 bg-primary block"></span>
                   자주 묻는 질문
                 </h2>
                 <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>떡은 얼마나 전에 주문해야 하나요?</AccordionTrigger>
                      <AccordionContent>
                        일반 떡은 2-3일 전, 맞춤 떡은 1주일 전 주문을 권장합니다. 급한 경우 전화로 문의해주세요.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>배송이 가능한가요?</AccordionTrigger>
                      <AccordionContent>
                        네, 용인 인근 지역 배송 서비스를 제공하고 있습니다. 배송 지역과 배송비는 주문 시 상담을 통해 안내해드립니다.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>보관 방법은 어떻게 되나요?</AccordionTrigger>
                      <AccordionContent>
                        떡은 당일 드시는 것이 가장 좋으며, 남은 떡은 냉동 보관을 권장합니다. 드시기 전 자연해동 하시면 본연의 맛을 즐기실 수 있습니다.
                      </AccordionContent>
                    </AccordionItem>
                 </Accordion>
               </div>
            </div>

            {/* Map */}
            <div className="h-full min-h-[500px] bg-muted rounded-2xl overflow-hidden shadow-lg relative">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.1234567890123!2d127.185388!3d37.233181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDEzJzU5LjQiTiAxMjfCsDExJzE1LjQiRQ!5e0!3m2!1sko!2skr!4v1234567890123"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Masi Tteok Location"
               ></iframe>
               <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-primary/10">
                  <div className="flex items-start gap-3">
                     <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                     <div>
                       <p className="font-bold text-foreground">마시떡 (Masidduck)</p>
                       <p className="text-sm text-muted-foreground mt-1">경기도 용인시 처인구 명지로16번길 9-24, 진영리더스빌 109-110호</p>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
