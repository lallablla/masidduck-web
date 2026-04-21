export default function InstaFeed() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl font-serif font-bold mb-2">@masidduck</h2>
            <p className="text-muted-foreground">마시떡의 일상을 인스타그램에서 만나보세요</p>
          </div>
          <a href="https://instagram.com/masidduck" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">
             Follow Us
          </a>
        </div>

        {/* Instagram Widget Placeholder - 여기에 위젯 코드가 들어갑니다 */}
        {/* Elfsight Instagram Feed 연결 */}
      <div className="w-full">
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div className="elfsight-app-d45f8658-1d42-47d5-aee3-c60f15e07a5e" data-elfsight-app-lazy></div>
      </div>
        </div>
      </div>
    </section>
  );
}
