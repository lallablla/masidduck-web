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
        <div id="insta-feed-placeholder" className="bg-white rounded-xl border border-dashed border-border min-h-[300px] flex items-center justify-center text-muted-foreground">
          <div className="text-center p-8">
             <p className="mb-2 font-bold text-foreground">Instagram Feed Widget Area</p>
             <p className="text-sm">나중에 여기에 Elfsight 위젯 코드를 붙여넣으세요.</p>
             <code className="block mt-4 bg-muted p-2 rounded text-xs text-left">
               &lt;div class="elfsight-app-..."&gt;&lt;/div&gt;
             </code>
          </div>
        </div>
      </div>
    </section>
  );
}
