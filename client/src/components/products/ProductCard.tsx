import { useState } from "react";
import { Product } from "@/data/products";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const allImages = [product.image, ...(product.images || [])];
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((i) => (i - 1 + allImages.length) % allImages.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((i) => (i + 1) % allImages.length);
  };

  return (
    <Dialog onOpenChange={() => setActiveIndex(0)}>
      <DialogTrigger asChild>
        <div className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-[#EBE5D9] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="aspect-square relative overflow-hidden bg-muted">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <span className="bg-white/90 backdrop-blur text-primary px-4 py-2 rounded-full font-bold text-sm">상세보기</span>
            </div>
          </div>
          <div className="p-5">
            <div className="text-xs text-primary font-medium mb-2 uppercase tracking-wider">{product.category}</div>
            <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{product.description}</p>
            <div className="font-serif font-bold text-foreground text-lg">
              {product.category === "regular" ? "가격 문의" : product.price}
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-3xl bg-[#FDFBF7] p-0 overflow-hidden border-none">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col bg-muted">
            <div className="relative h-64 md:h-80 flex-shrink-0">
              <img
                src={allImages[activeIndex]}
                alt={`${product.name} ${activeIndex + 1}`}
                className="w-full h-full object-cover"
              />
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow transition"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow transition"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {allImages.map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeIndex ? "bg-white" : "bg-white/50"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            {allImages.length > 1 && (
              <div className="flex gap-2 p-2 overflow-x-auto bg-white/50">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`flex-shrink-0 w-14 h-14 rounded overflow-hidden border-2 transition-all ${i === activeIndex ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <img src={img} alt={`thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">{product.category}</span>
            <h2 className="text-3xl font-serif font-bold mb-4">{product.name}</h2>
            <div className="w-12 h-1 bg-primary/20 mb-6"></div>
            <p className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
              {product.description}
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-[#EBE5D9] mb-8">
              <p className="text-sm text-center text-foreground font-medium">
                가격: <span className="text-xl font-serif font-bold ml-2">
                  {product.category === "regular" ? "가격 문의" : product.price}
                </span>
              </p>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => window.open('https://pf.kakao.com', '_blank')}
                className="flex-1 bg-[#FAE100] text-[#371D1E] font-bold py-4 rounded-lg hover:brightness-95 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                카톡 문의하기
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
