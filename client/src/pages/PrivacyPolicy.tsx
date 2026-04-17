import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-16 bg-[#F5F1E8] text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">개인정보처리방침</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            마시떡은 고객의 개인정보 보호를 최우선으로 합니다.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-stone max-w-none">
            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-primary">제1조 (개인정보의 처리 목적)</h2>
              <p className="mb-4">마시떡(이하 '회사')은 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>고객 문의 및 상담 응대</li>
                <li>주문 및 배송 서비스 제공</li>
                <li>마케팅 및 광고 활용 (사전 동의 시)</li>
                <li>서비스 개선 및 신규 서비스 개발</li>
                <li>법령상 의무 이행</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-primary">제2조 (개인정보의 처리 및 보유기간)</h2>
              <p className="mb-4">회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>고객 문의 및 상담:</strong> 문의 완료 후 3년</li>
                <li><strong>주문 및 배송:</strong> 주문 완료 후 5년</li>
                <li><strong>마케팅 정보:</strong> 동의 철회 시까지</li>
                <li><strong>계약 또는 청약철회 등에 관한 기록:</strong> 5년</li>
                <li><strong>대금결제 및 재화 등의 공급에 관한 기록:</strong> 5년</li>
                <li><strong>소비자의 불만 또는 분쟁처리에 관한 기록:</strong> 3년</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-primary">제3조 (개인정보의 제3자 제공)</h2>
              <p className="mb-4">회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-primary">제4조 (개인정보처리의 위탁)</h2>
              <p className="mb-4">회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-2 text-left">위탁업무</th>
                      <th className="px-4 py-2 text-left">수탁자</th>
                      <th className="px-4 py-2 text-left">위탁기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2">배송 서비스</td>
                      <td className="px-4 py-2">택배업체</td>
                      <td className="px-4 py-2">배송 완료 시까지</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2">결제 처리</td>
                      <td className="px-4 py-2">결제대행사</td>
                      <td className="px-4 py-2">결제 완료 시까지</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-primary">제5조 (개인정보 보호책임자)</h2>
              <div className="bg-muted p-6 rounded-lg">
                <ul className="space-y-2">
                  <li><strong>성명:</strong> 이수현</li>
                  <li><strong>직책:</strong> 대표이사</li>
                  <li><strong>연락처:</strong> 031-334-0015</li>
                  <li><strong>이메일:</strong> leesh7697@naver.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
