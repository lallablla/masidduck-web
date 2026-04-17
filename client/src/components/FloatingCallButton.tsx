import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:031-321-2994"
      className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all active:scale-95"
      aria-label="전화 문의"
    >
      <Phone className="w-6 h-6 text-white" />
    </a>
  );
}
