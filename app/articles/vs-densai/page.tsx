import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング vs でんさい（電子記録債権）の違いと使い分け",
  description:
    "ファクタリングとでんさい（電子記録債権）の違いを徹底比較。仕組み・手数料・メリット・デメリット・利用条件の違い、使い分けの基準を分かりやすく解説します。",
  alternates: { canonical: "https://factoring-partner.pages.dev/articles/vs-densai/" },
  openGraph: { title: "ファクタリング vs でんさい（電子記録債権）の違いと使い分け", description: "ファクタリングとでんさいの違いを比較解説。", url: "https://factoring-partner.pages.dev/articles/vs-densai/", type: "article" },
};

const differences = [
  { item: "仕組み", factoring: "売掛金（債権）をファクタリング会社に売却", densai: "電子記録債権を金融機関で割引・譲渡" },
  { item: "運営主体", factoring: "民間のファクタリング会社", densai: "全銀電子債権ネットワーク（でんさいネット）" },
  { item: "利用条件", factoring: "売掛金があれば利用可能", densai: "取引先もでんさいネットに加入が必要" },
  { item: "手数料/割引料", factoring: "1%〜18%（方式による）", densai: "年利1%〜5%程度（割引料）" },
  { item: "スピード", factoring: "最短即日", densai: "2〜5営業日" },
  { item: "取引先への通知", factoring: "2社間なら不要", densai: "取引先の電子記録が必要" },
  { item: "審査基準", factoring: "売掛先の信用力重視", densai: "利用者の信用力も重視" },
  { item: "対象企業", factoring: "中小企業・個人事業主", densai: "主に中堅〜大企業" },
];

const densaiBasics = [
  { title: "でんさい（電子記録債権）とは？", description: "でんさいとは、全銀電子債権ネットワーク（でんさいネット）が提供する電子記録債権のサービスです。従来の手形に代わるもので、企業間の債権・債務を電子的に記録・管理します。紙の手形と異なり、紛失・盗難のリスクがなく、分割譲渡も可能です。" },
  { title: "でんさいの割引（でんさい割引）とは？", description: "でんさい割引とは、でんさいの支払期日前に金融機関に持ち込んで、割引料（利息相当額）を差し引いた金額を受け取ることです。手形割引の電子版と考えると分かりやすいです。割引料は年利1%〜5%程度で、ファクタリングより安いのが一般的です。" },
  { title: "でんさいの利用条件", description: "でんさいを利用するには、自社と取引先の両方がでんさいネットに加入している必要があります。加入には取引銀行を通じた手続きが必要で、主要な都市銀行・地方銀行が窓口になっています。個人事業主は加入できない場合があります。" },
];

const faqs = [
  { question: "ファクタリングとでんさい割引はどちらが安いですか？", answer: "純粋なコストで比較すると、でんさい割引（年利1%〜5%）の方がファクタリング（手数料1%〜18%）より安いです。ただし、でんさいは取引先もでんさいネットに加入している必要があり、利用条件が限定的です。ファクタリングは売掛金さえあれば利用でき、即日入金に対応しているなどの利便性があります。" },
  { question: "取引先がでんさいに対応していない場合はどうすればいいですか？", answer: "取引先がでんさいネットに加入していない場合は、でんさいを利用できません。その場合はファクタリングが代替手段となります。ファクタリングは取引先のでんさい加入の有無に関係なく、売掛金があれば利用可能です。" },
  { question: "でんさい割引にも審査はありますか？", answer: "はい、でんさい割引にも審査があります。ファクタリングとは異なり、でんさい割引は「利用者自身の信用力」も審査されます。赤字決算や税金滞納がある場合、でんさい割引が利用できないことがあります。その場合はファクタリングが有効な代替手段です。" },
  { question: "でんさいとファクタリングを併用できますか？", answer: "はい、併用可能です。でんさいで支払いを受けている取引先のでんさい割引と、でんさい非対応の取引先へのファクタリングを使い分けることで、効率的な資金調達が可能です。ただし、同一の債権を両方に使うことはできません。" },
  { question: "個人事業主はでんさいを利用できますか？", answer: "でんさいネットへの加入は法人が対象で、個人事業主は加入できない場合があります（金融機関による）。個人事業主の場合は、ファクタリングの方が利用しやすい選択肢です。ラボルやQuQuMoなど個人事業主対応のファクタリング会社を利用しましょう。" },
];

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "ファクタリング vs でんさい（電子記録債権）の違いと使い分け", description: "ファクタリングとでんさいの違いを比較解説。", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" }, publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/vs-densai/" } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" }, { "@type": "ListItem", position: 3, name: "vs でんさい", item: "https://factoring-partner.pages.dev/articles/vs-densai/" }] };

export default function VsDensaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "vs でんさい" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">比較ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">ファクタリング vs でんさい<br className="hidden md:block" />電子記録債権との違いと使い分け</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">ファクタリングとでんさい（電子記録債権）の仕組みの違い、コスト比較、どちらを選ぶべきかの判断基準を解説します。</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#densai-basics" className="hover:underline">1. でんさい（電子記録債権）の基本</a></li>
            <li><a href="#comparison" className="hover:underline">2. ファクタリングとの比較表</a></li>
            <li><a href="#when-factoring" className="hover:underline">3. ファクタリングを選ぶべきケース</a></li>
            <li><a href="#when-densai" className="hover:underline">4. でんさいを選ぶべきケース</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        <section id="densai-basics" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">でんさい（電子記録債権）の基本</h2>
          <p className="mb-8 leading-relaxed text-text-light">まずはでんさいの基本的な仕組みを理解しましょう。</p>
          <div className="space-y-4">
            {densaiBasics.map((item) => (<div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6"><h3 className="mb-3 font-bold text-secondary">{item.title}</h3><p className="text-sm leading-relaxed text-text-light">{item.description}</p></div>))}
          </div>
        </section>

        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリングとの比較表</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリングとでんさい割引の主な違いを一覧で比較します。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-primary text-white"><th className="border border-primary px-4 py-3 text-left">項目</th><th className="border border-primary px-4 py-3 text-left">ファクタリング</th><th className="border border-primary px-4 py-3 text-left">でんさい割引</th></tr></thead>
              <tbody>{differences.map((d, i) => (<tr key={d.item} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}><td className="border border-border px-4 py-3 font-medium text-text-main">{d.item}</td><td className="border border-border px-4 py-3 text-text-light">{d.factoring}</td><td className="border border-border px-4 py-3 text-text-light">{d.densai}</td></tr>))}</tbody>
            </table>
          </div>
        </section>

        <section id="when-factoring" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリングを選ぶべきケース</h2>
          <p className="mb-8 leading-relaxed text-text-light">以下のケースでは、でんさいよりもファクタリングが適しています。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6"><h3 className="mb-3 font-bold text-primary">取引先がでんさいネットに加入していない</h3><p className="text-sm leading-relaxed text-text-light">でんさいは取引先もでんさいネットに加入している必要がありますが、中小企業の加入率はまだ低い状況です。取引先が非対応の場合はファクタリング一択です。</p></div>
            <div className="rounded-lg border border-border bg-white p-6"><h3 className="mb-3 font-bold text-primary">即日入金が必要</h3><p className="text-sm leading-relaxed text-text-light">ファクタリングは最短即日入金に対応していますが、でんさい割引は2〜5営業日かかるのが一般的です。緊急の資金需要にはファクタリングが適しています。</p></div>
            <div className="rounded-lg border border-border bg-white p-6"><h3 className="mb-3 font-bold text-primary">赤字決算・信用力に不安がある</h3><p className="text-sm leading-relaxed text-text-light">でんさい割引は利用者自身の信用力も審査されますが、ファクタリングは売掛先の信用力を重視します。赤字決算や税金滞納がある場合はファクタリングの方が利用しやすいです。</p></div>
            <div className="rounded-lg border border-border bg-white p-6"><h3 className="mb-3 font-bold text-primary">取引先に知られたくない</h3><p className="text-sm leading-relaxed text-text-light">2社間ファクタリングなら取引先への通知は不要です。でんさいは電子記録上で取引が可視化されるため、取引先に知られる可能性があります。</p></div>
          </div>
        </section>

        <section id="when-densai" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">でんさいを選ぶべきケース</h2>
          <p className="mb-8 leading-relaxed text-text-light">以下のケースでは、ファクタリングよりもでんさい割引が有利です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6"><h3 className="mb-3 font-bold text-accent">コストを最小限に抑えたい</h3><p className="text-sm leading-relaxed text-text-light">でんさい割引の割引料は年利1%〜5%程度で、ファクタリングの手数料より大幅に安いです。長期的にコストを抑えたい場合はでんさいが有利です。</p></div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6"><h3 className="mb-3 font-bold text-accent">取引先がでんさいネットに加入済み</h3><p className="text-sm leading-relaxed text-text-light">取引先がすでにでんさいネットに加入している場合、スムーズにでんさい割引を利用できます。大企業との取引が多い場合は対応している可能性が高いです。</p></div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6"><h3 className="mb-3 font-bold text-accent">手形取引の代替手段を探している</h3><p className="text-sm leading-relaxed text-text-light">従来の紙の手形からの移行を検討している場合、でんさいは手形の電子化版として最適です。紛失・盗難のリスクがなく、分割譲渡も可能です。</p></div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：使い分けの基準</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングとでんさいは競合する手段ではなく、補完し合う資金調達手段です。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">でんさい対応の取引先</strong>→でんさい割引（低コスト）を優先</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">でんさい非対応の取引先</strong>→ファクタリング（柔軟・即日対応）を利用</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">緊急時</strong>→即日入金のファクタリングを利用</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">コスト重視</strong>→でんさい割引を優先</span></li>
            </ul>
          </div>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (<details key={faq.question} className="group rounded-lg border border-border bg-white"><summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main"><span>{faq.question}</span><span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">&#9660;</span></summary><div className="px-6 pb-4 text-sm leading-relaxed text-text-light">{faq.answer}</div></details>))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/vs-bill-discount/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"><p className="font-bold text-primary">ファクタリング vs 手形割引</p><p className="mt-1 text-sm text-text-light">違いと使い分けを比較</p></Link>
            <Link href="/articles/vs-card-payment/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"><p className="font-bold text-primary">vs 請求書カード払い</p><p className="mt-1 text-sm text-text-light">UPSIDER等との比較</p></Link>
            <Link href="/articles/vs-bank-loan/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"><p className="font-bold text-primary">ファクタリング vs 銀行融資</p><p className="mt-1 text-sm text-text-light">どちらを選ぶべきか比較</p></Link>
            <Link href="/articles/what-is-factoring/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"><p className="font-bold text-primary">ファクタリングとは？</p><p className="mt-1 text-sm text-text-light">仕組み・種類・メリットを解説</p></Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">ファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">手数料・入金スピード・審査通過率で主要ファクタリング会社を徹底比較。</p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
