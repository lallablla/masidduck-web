import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Competitiveness from "@/components/home/Competitiveness";
import B2BSection from "@/components/home/B2BSection";
import NaverReviewBadge from "@/components/home/NaverReviewBadge";
import InstaFeed from "@/components/home/InstaFeed";
import ProductGrid from "@/components/products/ProductGrid";
import FloatingCallButton from "@/components/FloatingCallButton";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* 오늘의 떡 배너 */}
      <section className="bg-[#F2EBD9] border-b border-[#E2D5BE]">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-4xl select-none" aria-hidden="true">🍡</span>
            <div>
              <p className="font-serif text-lg font-bold text-[#422D22] leading-tight">오늘의 떡</p>
              <p className="text-sm text-[#8B7355] mt-0.5">오늘 매장에서 만날 수 있는 떡을 확인해보세요</p>
            </div>
          </div>
          <Link href="/today">
            <a className="flex items-center gap-2 bg-[#7D4E2F] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#6A3D20] active:scale-95 transition-all whitespace-nowrap shadow-sm">
              오늘의 떡 보기 <ArrowRight className="w-4 h-4" />
            </a>
          </Link>
        </div>
      </section>

      <B2BSection />
      <Competitiveness />
      
      {/* Featured Products Preview */}
      <section className="py-20 bg-[#F9F7F2]">
        <div className="container mx-auto px-6">
           <div className="flex justify-between items-end mb-12">
             <div>
               <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Our Menu</span>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">대표 제품</h2>
             </div>
             <Link href="/products">
               <a className="hidden md:flex items-center gap-2 text-primary font-medium hover:translate-x-1 transition-transform">
                 전체 제품 보기 <ArrowRight className="w-4 h-4" />
               </a>
             </Link>
           </div>
           
           {/* We just show the grid, but in a real app we might limit this to top 4 */}
           <div className="h-[600px] overflow-hidden relative">
              <ProductGrid />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F9F7F2] to-transparent flex items-end justify-center pb-8">
                 <Link href="/products">
                    <a className="btn-secondary bg-white border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all shadow-lg font-medium">
                      더 많은 제품 보기
                    </a>
                 </Link>
              </div>
           </div>
        </div>
      </section>

      <NaverReviewBadge />
      <InstaFeed />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
