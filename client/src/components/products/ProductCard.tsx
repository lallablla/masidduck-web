import { Product } from "@/data/products";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Dialog>
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
          <div className="h-64 md:h-auto bg-muted">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
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
