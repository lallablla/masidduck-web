import { Award, Heart, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const getYearsInBusiness = () => {
  const startYear = 2017;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

export default function Competitiveness() {
  const yearsInBusiness = getYearsInBusiness();
  
  const items = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "매일 새벽 생산",
      desc: `부부가 ${yearsInBusiness}년째 매일 새벽,\n그날 판매할 떡을 직접 빚습니다.\n'당일 생산 당일 판매' 원칙을 고수합니다.`,
      delay: 0.1
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "국가공인 위생 인증",
      desc: "HACCP 인증을 받은 위생적인 시설에서\n안전하게 만듭니다.\n우리 가족이 먹는다는 마음으로\n청결을 최우선합니다.",
      isHaccp: true,
      delay: 0.2
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "엄선된 천연 재료",
      desc: "100% 국내산 쌀과 최고의\n천연 재료만을 고집합니다.\n인공적인 맛이 아닌\n재료 본연의 깊은 맛을 냅니다.",
      delay: 0.3
    }
  ];

  return (
    <section id="haccp-section" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">마시떡의 고집</h2>
          <div className="w-16 h-1 bg-primary mx-auto opacity-30"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5 }}
              className="text-center p-8 rounded-2xl bg-[#FDFBF7] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#F2EBD9]"
            >
              <div className="w-16 h-16 rounded-full bg-[#F2EBD9] flex items-center justify-center mx-auto mb-6 relative group">
                {item.icon}
                {item.isHaccp && (
                   <span className="absolute -top-2 -right-2 bg-green-600 text-[10px] text-white px-2 py-0.5 rounded-full font-bold shadow-sm animate-pulse">
                     HACCP
                   </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
