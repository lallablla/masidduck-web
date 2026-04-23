import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag, ChevronDown, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "홈" },
    { href: "/products", label: "전체 제품" },
    { href: "/contact", label: "고객센터" },
  ];

  const brandSubLinks = [
    { href: "/brand-story", label: "브랜드 스토리" },
    { href: "/brand-identity", label: "로고 & 아이덴티티" },
    { href: "/haccp", label: "HACCP 위생 원칙" },
  ];

  const isBrandActive = location === "/brand-story" || location === "/brand-identity" || location === "/haccp";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans",
        scrolled ? "bg-[#F8F5F0] shadow-sm py-3" : "bg-[#F8F5F0] py-4"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="block">
          <img 
            src="/images/logo.svg" 
            alt="마시떡" 
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className={cn(
              "text-sm tracking-wide hover:text-[#8B7355] transition-colors relative group",
              location === "/" ? "text-[#8B7355] font-medium" : "text-[#5C5145]"
            )}
          >
            홈
            <span className={cn(
              "absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B7355] transition-all duration-300 group-hover:w-full",
              location === "/" ? "w-full" : ""
            )} />
          </Link>

          {/* 오늘의 떡 */}
          <Link
            href="/today"
            className={cn(
              "text-sm tracking-wide hover:text-[#8B7355] transition-colors relative group flex items-center gap-1.5",
              location === "/today" ? "text-[#8B7355] font-medium" : "text-[#5C5145]"
            )}
          >
            오늘의 떡
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]/70 animate-pulse" />
            <span className={cn(
              "absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B7355] transition-all duration-300 group-hover:w-full",
              location === "/today" ? "w-full" : ""
            )} />
          </Link>

          {/* Brand Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setBrandDropdownOpen(true)}
            onMouseLeave={() => setBrandDropdownOpen(false)}
          >
            <button
              className={cn(
                "text-sm tracking-wide hover:text-[#8B7355] transition-colors relative group flex items-center gap-1 py-2",
                isBrandActive ? "text-[#8B7355] font-medium" : "text-[#5C5145]"
              )}
            >
              브랜드
              <ChevronDown className={cn("w-3 h-3 transition-transform", brandDropdownOpen && "rotate-180")} />
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B7355] transition-all duration-300 group-hover:w-full",
                isBrandActive ? "w-full" : ""
              )} />
            </button>
            
            {brandDropdownOpen && (
              <div className="absolute top-full left-0 pt-1 bg-transparent">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[160px]">
                  {brandSubLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "block px-4 py-2 text-sm hover:bg-[#F8F5F0] transition-colors",
                        location === link.href ? "text-[#8B7355] font-medium bg-[#F8F5F0]" : "text-[#5C5145]"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-sm tracking-wide hover:text-[#8B7355] transition-colors relative group",
                location === link.href ? "text-[#8B7355] font-medium" : "text-[#5C5145]"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B7355] transition-all duration-300 group-hover:w-full",
                location === link.href ? "w-full" : ""
              )} />
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          <a 
            href="https://www.instagram.com/masidduck" 
            target="_blank" 
            rel="noreferrer"
            className="p-2.5 rounded-full text-[#5C5145] hover:text-[#E1306C] hover:bg-[#F5F1E8] transition-colors"
            title="인스타그램"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://smartstore.naver.com/masidduck" 
            target="_blank" 
            rel="noreferrer"
            className="p-2.5 rounded-full text-[#5C5145] hover:text-[#03C75A] hover:bg-[#F5F1E8] transition-colors"
            title="스마트스토어"
          >
            <ShoppingBag className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <Link
            href="/"
            className="text-lg font-medium text-foreground py-2 border-b border-border/50"
            onClick={() => setIsOpen(false)}
          >
            홈
          </Link>
          <Link
            href="/today"
            className="text-lg font-medium text-[#8B7355] py-2 border-b border-border/50 flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            오늘의 떡
            <span className="w-2 h-2 rounded-full bg-[#8B7355]/70 animate-pulse" />
          </Link>
          <div className="py-2 border-b border-border/50">
            <p className="text-lg font-medium text-foreground mb-2">브랜드</p>
            <div className="pl-4 space-y-2">
              {brandSubLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.slice(1).map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-lg font-medium text-foreground py-2 border-b border-border/50"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex gap-4 mt-4 justify-center">
            <a 
              href="https://www.instagram.com/masidduck" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-full text-[#5C5145] hover:text-[#E1306C] bg-[#F5F1E8] transition-colors"
              title="인스타그램"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://smartstore.naver.com/masidduck" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-full text-[#5C5145] hover:text-[#03C75A] bg-[#F5F1E8] transition-colors"
              title="스마트스토어"
            >
              <ShoppingBag className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
