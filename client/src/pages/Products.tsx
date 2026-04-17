import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[350px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/products-hero.png')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white drop-shadow-lg tracking-tight leading-tight">전체 제품</h1>
          <p className="text-white/80 text-sm md:text-base font-sans font-normal tracking-wide max-w-2xl mx-auto">
            마시떡의 정성이 담긴 모든 제품을 만나보세요.<br className="hidden md:block" />
            답례떡부터 이바지, 떡케이크까지 다양한 구성이 준비되어 있습니다.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <ProductGrid />
      </div>

      <Footer />
    </div>
  );
}
