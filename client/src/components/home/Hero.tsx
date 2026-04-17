import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src="/images/hero-bg.jpg" 
            alt="Traditional Korean Dessert" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1 border border-white/30 rounded-full text-sm font-medium tracking-widest uppercase mb-6 backdrop-blur-sm">
            Premium Korean Dessert
          </span>
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
            style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.4)' }}
          >
            정성, <br className="md:hidden"/>새로운 시작을 빚다
          </h1>
          <p 
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
            style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.3)' }}
          >
            일상에 스며든, 당신을 위한 프리미엄 다과.<br/>
            마시떡이 정성을 담아 전합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <a className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-2 justify-center">
                제품 보러가기 <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
            <a 
              href="https://pf.kakao.com" 
              target="_blank"
              rel="noreferrer" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2 justify-center"
            >
               견적 문의하기
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
