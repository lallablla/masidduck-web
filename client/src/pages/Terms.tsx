import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-16 bg-[#F5F1E8] text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">이용약관</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            마시떡 서비스 이용에 관한 규정입니다.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-stone max-w-none">
            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-primary">제1조 (목적)</h2>
              <p className="mb-4">이 약관은 마시떡(이하 "회사")이 제공하는 맞춤 떡 제작 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-primary">제2조 (정의)</h2>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>"서비스"라 함은 회사가 제공하는 맞춤 떡 제작, 배송 및 관련 서비스를 의미합니다.</li>
                <li>"이용자"라 함은 회사의 서비스에 접속하여 이 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 의미합니다.</li>
                <li>"주문"이라 함은 이용자가 회사가 제공하는 서비스를 이용하여 떡을 주문하는 행위를 의미합니다.</li>
              </ol>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-primary">제3조 (서비스의 제공)</h2>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>회사는 다음과 같은 서비스를 제공합니다:
                  <ul className="list-disc pl-5 mt-2">
                    <li>맞춤 떡 제작 서비스</li>
                    <li>답례떡, 이바지떡, 떡케이크 등 다양한 떡 제품 제공</li>
                    <li>배송 서비스</li>
                    <li>고객 상담 서비스</li>
                  </ul>
                </li>
                <li>서비스의 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영을 원칙으로 합니다.</li>
              </ol>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-primary">제4조 (주문 및 결제)</h2>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>이용자는 회사가 제공하는 서비스를 통해 떡을 주문할 수 있습니다.</li>
                <li>결제는 전화, 카카오톡, 이메일 등을 통한 사전 상담 후 진행됩니다.</li>
              </ol>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-primary">제5조 (배송)</h2>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>회사는 이용자가 주문한 떡을 지정된 배송지로 배송합니다.</li>
                <li>배송은 주문일로부터 3-7일 이내에 완료되는 것을 원칙으로 합니다.</li>
                <li>배송 중 발생할 수 있는 문제에 대해서는 회사가 책임을 집니다.</li>
              </ol>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-primary">제6조 (품질 보증 및 환불)</h2>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>회사는 제공하는 떡의 품질에 대해 최선을 다합니다.</li>
                <li>떡의 특성상 제작 완료 후에는 환불이 제한될 수 있습니다.</li>
                <li>배송 중 파손이나 품질 문제가 발생한 경우, 회사는 적절한 보상 조치를 취합니다.</li>
              </ol>
            </div>

            <div className="bg-muted p-8 rounded-lg mt-12 text-center">
              <h3 className="font-bold mb-2">약관 관련 문의</h3>
              <p className="text-muted-foreground mb-4">이용약관에 관한 문의사항이 있으시면 언제든지 연락해주세요.</p>
              <div className="flex justify-center gap-6 text-sm">
                <span className="flex items-center gap-2"><i className="fas fa-phone"></i> 031-334-0015</span>
                <span className="flex items-center gap-2"><i className="fas fa-envelope"></i> leesh7697@naver.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
