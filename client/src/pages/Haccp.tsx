import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, CheckCircle, Thermometer, Droplets, Users, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Haccp() {
  const principles = [
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "위해요소 분석",
      desc: "원재료 입고부터 제품 출하까지\n모든 단계의 위험 요소를\n사전에 분석하고 관리합니다.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "중요관리점 설정",
      desc: "식품 안전에 결정적인 공정을\n중점 관리하여 위해 발생을\n사전에 차단합니다.",
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "온도 관리",
      desc: "재료 보관부터 조리, 포장까지\n적정 온도를 철저히 유지하여\n신선도를 보장합니다.",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "위생 관리",
      desc: "작업장, 도구, 용기 등\n모든 설비의 청결을\n매일 점검하고 관리합니다.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "작업자 위생",
      desc: "작업자 건강 관리, 위생복 착용,\n손 세척 등 개인 위생을\n철저히 준수합니다.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "기록 및 검증",
      desc: "모든 위생 관리 활동을\n문서화하고 정기적으로\n검증하여 개선합니다.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[350px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/haccp-hero.png')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white font-medium text-sm">국가공인 식품안전관리인증</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-lg tracking-tight leading-tight">
              HACCP 위생 원칙
            </h1>
            <p className="text-white/80 text-sm md:text-base font-sans font-normal tracking-wide max-w-2xl mx-auto">
              마시떡은 HACCP(해썹) 인증을 받은 시설에서<br className="hidden md:block" />
              엄격한 위생 기준을 준수하여 떡을 만듭니다.
            </p>
          </motion.div>
        </div>
      </div>

      {/* What is HACCP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">About HACCP</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">HACCP이란?</h2>
              <div className="w-16 h-1 bg-primary mx-auto opacity-30 mb-8"></div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                <strong className="text-foreground">HACCP</strong>(Hazard Analysis Critical Control Point)은 
                식품의 원재료부터 제조, 가공, 보존, 유통, 조리 단계를 거쳐 최종 소비자가 섭취하기 전까지의 
                각 단계에서 발생할 수 있는 위해요소를 규명하고, 이를 중점적으로 관리하기 위한 
                <strong className="text-foreground"> 과학적인 위생관리체계</strong>입니다.
              </p>
            </div>

            <div className="bg-[#E8F5E9] rounded-2xl p-8 md:p-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1B5E20] mb-4">마시떡은 HACCP 인증 시설입니다</h3>
              <p className="text-[#2E7D32] leading-relaxed">
                식품의약품안전처로부터 HACCP 인증을 받은 위생적인 시설에서<br/>
                안전하고 깨끗한 떡을 생산하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Principles */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Our Standards</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">마시떡의 위생 관리 원칙</h2>
            <div className="w-16 h-1 bg-primary mx-auto opacity-30"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {principles.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl border border-[#E8F5E9] hover:shadow-lg hover:border-[#1B5E20]/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#E8F5E9] rounded-xl flex items-center justify-center text-[#1B5E20] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-[#1B5E20]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              우리 가족이 먹는다는 마음으로
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              마시떡은 "내 가족이 먹는 떡"이라는 마음으로<br/>
              위생과 품질에 최선을 다하고 있습니다.<br/>
              앞으로도 변함없이 깨끗하고 안전한 떡을 만들겠습니다.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-6 py-3 rounded-full">
              <CheckCircle className="w-5 h-5 text-[#81C784]" />
              <span className="text-white font-medium">HACCP 인증 제 2024-용인처인-0001호</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
