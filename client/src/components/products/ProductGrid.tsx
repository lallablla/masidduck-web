import { useState, useEffect } from "react";
import { products, CATEGORIES, GIFT_SUBCATEGORIES } from "@/data/products";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubcategory, setActiveSubcategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Reset page and subcategory when category changes
  useEffect(() => {
    setCurrentPage(1);
    setActiveSubcategory("all");
  }, [activeCategory]);

  // Reset page when subcategory changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeSubcategory]);

  // Tag-based categories (dol, ibaji, event) filter by tags field
  const tagCategories = ["dol", "ibaji", "event"];

  let filteredProducts = activeCategory === "all"
    ? products
    : tagCategories.includes(activeCategory)
      ? products.filter(p => p.tags?.includes(activeCategory))
      : products.filter(p => p.category === activeCategory);

  // Apply subcategory filter for gift products
  if (activeCategory === "gift" && activeSubcategory !== "all") {
    filteredProducts = filteredProducts.filter(p => p.subcategory === activeSubcategory);
  }

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Optional: scroll to top of grid
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }
  };

  return (
    <div className="py-12">
      {/* Category Tabs */}
      <div className={cn("flex flex-wrap justify-center gap-3", activeCategory === "gift" ? "mb-6" : "mb-12")}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === cat.id
                ? "bg-primary text-white shadow-md transform scale-105"
                : "bg-white text-muted-foreground border border-border hover:border-primary hover:text-primary"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Subcategory Tabs for Gift */}
      {activeCategory === "gift" && (
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {GIFT_SUBCATEGORIES.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveSubcategory(sub.id)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300",
                activeSubcategory === sub.id
                  ? "bg-amber-600 text-white shadow-sm"
                  : "bg-amber-50 text-amber-700 border border-amber-200 hover:border-amber-400 hover:bg-amber-100"
              )}
            >
              {sub.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      {currentProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-full hover:bg-muted disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2 mx-4">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    className={cn(
                      "w-10 h-10 rounded-full text-sm font-medium transition-all flex items-center justify-center",
                      currentPage === pageNum
                        ? "bg-primary text-white shadow-md"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full hover:bg-muted disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                aria-label="Next Page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-20 text-muted-foreground bg-muted/30 rounded-2xl">
          <p>해당 카테고리에 제품이 없습니다.</p>
        </div>
      )}
    </div>
  );
}
