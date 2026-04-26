import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "経営者保証なしの資金調達方法5選｜個人保証不要の選択肢",
  description:
    "経営者保証（個人保証）なしで資金調達できる方法5選を解説。ファクタリング・経営者保証免除特例融資・クラウドファンディング・補助金・ABLのメリット・デメリットを比較します。",
  alternates: { canonical: "https://factoring-partner.pages.dev/articles/no-guarantee/" },
  openGraph: { title: "経営者保証なしの資金調達方法5選｜個人保証不要の選択肢", description: "個人保証不要の資金調達方法5選を比較。", url: "https://factoring-partner.pages.dev/articles/no-guarantee/", type: "article" },
};

const methods = [
  { name: "ファクタリング", description: "売掛金をファクタリング会社に売却して現金化する方法。経営者保証は一切不要で、担保も不要です。最短即日で資金調達が可能。", fee: "1%〜18%", speed: "最短即日", merit: "保証不要・即日対応・赤字でもOK", demerit: "手数料が高い・売掛金が必要" },
  { name: "経営者保証免除特例融資", description: "日本政策金融公庫や信用保証協会が提供する、経営者保証なしで利用できる融資制度。一定の財務基準を満たす企業が対象。", fee: "年利1%〜3%", speed: "2〜4週間", merit: "低金利・保証不要・長期返済可能", demerit: "審査が厳しい・時間がかかる" },
  { name: "クラウドファンディング", description: "インターネットを通じて不特定多数から資金を集める方法。購入型・株式型・融資型など複数の種類がある。", fee: "手数料10%〜20%（プラットフォーム）", speed: "1〜3ヶ月", merit: "保証不要・マーケティング効果あり", demerit: "時間がかかる・成功の保証がない" },
  { name: "補助金・助成金", description: "国や自治体が提供する返済不要の資金。事業計画書の提出と審査が必要。採択率は制度によって異なる。", fee: "なし（返済不要）", speed: "数ヶ月〜半年", merit: "返済不要・保証不要", demerit: "採択の保証がない・入金が遅い" },
  { name: "ABL（動産担保融資）", description: "在庫や売掛金、機械設備などの動産を担保にした融資。不動産担保や経営者保証が不要。", fee: "年利2%〜8%", speed: "1〜3週間", merit: "保証不要・不動産不要・低金利", demerit: "動産の評価に時間がかかる" },
];

const guaranteeGuidelines = [
  { title: "経営者保証に関するガイドラインとは？", description: "2014年に策定された「経営者保証に関するガイドライン」は、経営者保証に依存しない融資の促進を目指すものです。一定の要件を満たす企業は、金融機関に対して経営者保証の解除・免除を求めることができます。2023年からは改訂版が適用され、より積極的な保証免除が推進されています。" },
  { title: "保証免除の3要件", description: "ガイドラインでは、①法人と経営者の関係の明確な区分・分離②財務基盤の強化（一定の自己資本比率等）③経営の透明性確保（適時適切な情報開示）の3要件を満たすことで、経営者保証なしの融資を受けられるとされています。" },
  { title: "事業承継時の特例", description: "事業承継時には、後継者に経営者保証を引き継がせない特例制度があります。日本政策金融公庫や信用保証協会の事業承継特別保証制度を活用することで、後継者の個人保証なしで事業を引き継ぐことが可能です。" },
];

const faqs = [
  { question: "ファクタリングに経営者保証は必要ですか？", answer: "いいえ、ファクタリングに経営者保証（個人保証）は不要です。ファクタリングは融資ではなく売掛金の売買であるため、担保も保証人も必要ありません。経営者個人の資産がリスクにさらされることはなく、安心して利用できます。" },
  { question: "銀行融資で経営者保証を外すことは可能ですか？", answer: "はい、経営者保証に関するガイドラインの要件を満たせば可能です。具体的には、法人と個人の分離、十分な自己資本比率、適切な情報開示の3要件を満たす必要があります。取引銀行に相談して、保証免除の可能性を確認しましょう。" },
  { question: "経営者保証なしで最も早く資金調達できる方法は？", answer: "最も早いのはファクタリングで、最短即日での資金調達が可能です。次に早いのがABL（1〜3週間）、銀行の保証免除特例融資（2〜4週間）です。クラウドファンディングや補助金は数ヶ月かかるため、急ぎの場合には向きません。" },
  { question: "個人事業主でも経営者保証なしで資金調達できますか？", answer: "はい、個人事業主でもファクタリングは経営者保証なしで利用できます。ただし、個人事業主の場合は「経営者保証」という概念自体が法人とは異なります。銀行融資では個人事業主本人が債務者になるため、実質的に個人保証と同じ構造になります。ファクタリングならこの問題を回避できます。" },
  { question: "経営者保証に関するガイドラインの改訂内容は？", answer: "2023年の改訂では、①経営者保証に依存しない融資慣行のさらなる推進②保証徴求時の説明義務の強化③保証解除の申出に対する金融機関の対応の明確化が盛り込まれました。金融機関は経営者保証を求める場合に「なぜ保証が必要か」の説明義務が強化されています。" },
];

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "経営者保証なしの資金調達方法5選｜個人保証不要の選択肢", description: "個人保証不要の資金調達方法5選を比較。", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" }, publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/no-guarantee/" } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" }, { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" }, { "@type": "ListItem", position: 3, name: "経営者保証なしの資金調達", item: "https://factoring-partner.pages.dev/articles/no-guarantee/" }] };

export default function NoGuaranteePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "経営者保証なしの資金調達" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">資金調達ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">経営者保証なしの資金調達方法5選<br className="hidden md:block" />個人保証不要の選択肢</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">経営者保証（個人保証）を求められない資金調達方法を5つ紹介。ファクタリングをはじめ、保証免除融資・補助金・ABLなどの選択肢を比較します。</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#methods" className="hover:underline">1. 経営者保証不要の資金調達方法5選</a></li>
            <li><a href="#comparison" className="hover:underline">2. 比較表</a></li>
            <li><a href="#guidelines" className="hover:underline">3. 経営者保証に関するガイドライン</a></li>
            <li><a href="#faq" className="hover:underline">4. よくある質問</a></li>
          </ol>
        </nav>

        <section id="methods" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">経営者保証不要の資金調達方法5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">経営者保証（個人保証）なしで利用できる資金調達方法を5つ紹介します。</p>
          <div className="space-y-6">
            {methods.map((m, i) => (
              <div key={m.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{i + 1}</span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">{m.name}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{m.description}</p>
                    <div className="mt-4 grid gap-3 rounded-lg bg-section-bg p-4 md:grid-cols-2">
                      <div><p className="text-xs font-semibold text-text-light">コスト</p><p className="font-bold text-primary">{m.fee}</p></div>
                      <div><p className="text-xs font-semibold text-text-light">スピード</p><p className="font-bold text-secondary">{m.speed}</p></div>
                    </div>
                    <div className="mt-3 grid gap-3 md:grid-cols-2">
                      <div className="rounded-lg bg-teal-50 p-3"><p className="text-xs font-semibold text-secondary">メリット</p><p className="text-sm text-text-light">{m.merit}</p></div>
                      <div className="rounded-lg bg-orange-50 p-3"><p className="text-xs font-semibold text-accent">デメリット</p><p className="text-sm text-text-light">{m.demerit}</p></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead><tr className="bg-primary text-white"><th className="border border-primary px-4 py-3 text-left">方法</th><th className="border border-primary px-4 py-3 text-left">コスト</th><th className="border border-primary px-4 py-3 text-left">スピード</th><th className="border border-primary px-4 py-3 text-left">難易度</th></tr></thead>
              <tbody>
                {methods.map((m, i) => (<tr key={m.name} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}><td className="border border-border px-4 py-3 font-medium text-text-main">{m.name}</td><td className="border border-border px-4 py-3 text-text-light">{m.fee}</td><td className="border border-border px-4 py-3 text-text-light">{m.speed}</td><td className="border border-border px-4 py-3 text-text-light">{m.name === "ファクタリング" ? "低い" : m.name === "補助金・助成金" ? "高い" : "中程度"}</td></tr>))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="guidelines" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">経営者保証に関するガイドライン</h2>
          <p className="mb-8 leading-relaxed text-text-light">銀行融資で経営者保証を求められない方法として、ガイドラインの活用も重要です。</p>
          <div className="space-y-4">
            {guaranteeGuidelines.map((item) => (<div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6"><h3 className="mb-3 font-bold text-secondary">{item.title}</h3><p className="text-sm leading-relaxed text-text-light">{item.description}</p></div>))}
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
            <Link href="/articles/guarantee-type/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"><p className="font-bold text-primary">ファクタリングの保証型とは</p><p className="mt-1 text-sm text-text-light">保証型ファクタリングの仕組み</p></Link>
            <Link href="/articles/vs-bank-loan/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"><p className="font-bold text-primary">ファクタリング vs 銀行融資</p><p className="mt-1 text-sm text-text-light">どちらを選ぶべきか比較</p></Link>
            <Link href="/articles/vs-abl/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"><p className="font-bold text-primary">ファクタリング vs ABL</p><p className="mt-1 text-sm text-text-light">動産担保融資との違い</p></Link>
            <Link href="/articles/cashflow-tips/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"><p className="font-bold text-primary">資金繰り改善方法7選</p><p className="mt-1 text-sm text-text-light">ファクタリング以外の選択肢も解説</p></Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">保証不要のファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">経営者保証不要・担保不要のファクタリング会社を手数料・スピードで比較。</p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
