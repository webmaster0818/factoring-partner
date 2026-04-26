import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング vs クラウドファンディング｜資金調達手段を徹底比較",
  description:
    "ファクタリングとクラウドファンディングの違いを徹底比較。資金調達スピード、コスト、審査基準、適したシーン、メリット・デメリットを解説。どちらを選ぶべきか判断するための完全ガイドです。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/vs-crowdfunding/",
  },
  openGraph: {
    title: "ファクタリング vs クラウドファンディング｜資金調達手段を徹底比較",
    description: "ファクタリングとクラウドファンディングの違いを比較。資金調達に最適な手段を解説。",
    url: "https://factoring-partner.pages.dev/articles/vs-crowdfunding/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const comparisonItems = [
  { label: "資金調達スピード", factoring: "最短即日〜数日", crowdfunding: "1〜3ヶ月（募集期間）" },
  { label: "調達コスト", factoring: "手数料2%〜20%", crowdfunding: "プラットフォーム手数料10%〜20%+リターン費用" },
  { label: "審査・条件", factoring: "売掛金があれば利用可能", crowdfunding: "プロジェクトの魅力が重要" },
  { label: "資金使途", factoring: "運転資金（既存売上の前倒し）", crowdfunding: "新規プロジェクト・商品開発" },
  { label: "返済義務", factoring: "なし（売掛金の売却）", crowdfunding: "購入型はリターン提供、融資型は返済あり" },
  { label: "向いている場面", factoring: "急ぎの資金繰り改善", crowdfunding: "新商品・サービスの立ち上げ" },
  { label: "信用情報への影響", factoring: "なし", crowdfunding: "融資型はあり" },
  { label: "最低調達額", factoring: "1万円〜", crowdfunding: "目標額未達だと調達不可の場合あり" },
];

const factoringMerits = [
  { title: "即日〜数日で資金化", description: "最短即日で入金されるため、急ぎの運転資金の確保に最適です。" },
  { title: "確実に資金を調達できる", description: "売掛金がありファクタリング審査に通れば、確実に資金を調達できます。" },
  { title: "公開不要・秘密性が高い", description: "資金調達の事実を外部に公開する必要がなく、2社間なら取引先にも知られません。" },
];

const crowdfundingMerits = [
  { title: "売掛金がなくても利用可能", description: "まだ売上がない新規プロジェクトでも、アイデアの魅力で資金を集められます。" },
  { title: "マーケティング効果がある", description: "プロジェクトの公開自体が宣伝になり、ファンやリピーターの獲得につながります。" },
  { title: "市場ニーズの検証ができる", description: "支援者の反応から、商品やサービスの市場ニーズを事前に検証できます。" },
];

const faqs = [
  {
    question: "ファクタリングとクラウドファンディングはどちらがおすすめですか？",
    answer: "状況によります。急ぎの運転資金が必要な場合や既存の売掛金を現金化したい場合はファクタリング、新しいプロジェクトや商品の立ち上げ資金が必要で時間に余裕がある場合はクラウドファンディングが適しています。両者は目的が異なるため、単純な比較は難しいですが、多くの中小企業の日常的な資金繰りにはファクタリングのほうが使いやすいでしょう。",
  },
  {
    question: "ファクタリングとクラウドファンディングを併用できますか？",
    answer: "はい、併用可能です。例えば、新商品開発の資金はクラウドファンディングで調達し、開発期間中の運転資金（仕入れ費・人件費等）はファクタリングで賄うという使い分けができます。それぞれの強みを活かした併用が効果的です。",
  },
  {
    question: "クラウドファンディングで目標額に達しなかった場合はどうなりますか？",
    answer: "All-or-Nothing方式の場合、目標額に達しないと調達は成立せず、支援者への返金が行われます。All-in方式の場合は目標額に達しなくても調達が成立しますが、リターンの提供義務は残ります。方式によって結果が大きく異なるため、プロジェクト開始前に確認しましょう。",
  },
  {
    question: "クラウドファンディングの種類にはどのようなものがありますか？",
    answer: "主に「購入型」（商品やサービスをリターンとして提供）、「寄付型」（見返りなし）、「融資型」（金利を付けて返済）、「株式投資型」（株式を発行）の4種類があります。中小企業の資金調達では購入型が最も一般的です。融資型は貸金業法の規制対象となります。",
  },
  {
    question: "どちらが手数料は安いですか？",
    answer: "一概には言えません。ファクタリングの手数料は2%〜20%ですが、クラウドファンディングはプラットフォーム手数料（10%〜20%）に加えてリターンの原価や送料がかかります。購入型クラウドファンディングのトータルコストは20%〜40%になることもあり、コスト面ではファクタリングのほうが安い場合が多いです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリング vs クラウドファンディング｜資金調達手段を徹底比較",
  description: "ファクタリングとクラウドファンディングの違いを比較。資金調達に最適な手段を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/vs-crowdfunding/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "vs クラウドファンディング", item: "https://factoring-partner.pages.dev/articles/vs-crowdfunding/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function VsCrowdfundingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "vs クラウドファンディング" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">比較ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング vs クラウドファンディング
            <br className="hidden md:block" />
            資金調達手段を徹底比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            スピード重視のファクタリングと、新規プロジェクト向けのクラウドファンディング。それぞれの特徴を比較して最適な選択を。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#comparison" className="hover:underline">1. 比較表で見る違い</a></li>
            <li><a href="#factoring-merits" className="hover:underline">2. ファクタリングのメリット</a></li>
            <li><a href="#cf-merits" className="hover:underline">3. クラウドファンディングのメリット</a></li>
            <li><a href="#which" className="hover:underline">4. どちらを選ぶべきか</a></li>
            <li><a href="#combination" className="hover:underline">5. 併用という選択肢</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">比較表で見る違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-left">ファクタリング</th>
                  <th className="border border-primary p-3 text-left">クラウドファンディング</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, i) => (
                  <tr key={item.label} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}>
                    <td className="border border-border p-3 font-semibold">{item.label}</td>
                    <td className="border border-border p-3">{item.factoring}</td>
                    <td className="border border-border p-3">{item.crowdfunding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="factoring-merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリングのメリット</h2>
          <div className="space-y-4">
            {factoringMerits.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
                <h3 className="mb-2 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cf-merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">クラウドファンディングのメリット</h2>
          <div className="space-y-4">
            {crowdfundingMerits.map((item) => (
              <div key={item.title} className="rounded-lg border border-primary/30 bg-primary-light p-5">
                <h3 className="mb-2 font-bold text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="which" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">どちらを選ぶべきか</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">ファクタリングを選ぶべきケース</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>すぐに運転資金が必要</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>既存の売掛金を早く現金化したい</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>資金調達を外部に知られたくない</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>確実に資金を確保したい</span></li>
              </ul>
            </div>
            <div className="rounded-lg border border-primary bg-primary-light p-6">
              <h3 className="mb-3 font-bold text-primary">クラウドファンディングを選ぶべきケース</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>新しい商品やサービスを立ち上げたい</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>資金調達と同時にPRもしたい</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>時間に余裕がある（1〜3ヶ月）</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>ファンコミュニティを作りたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="combination" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">併用という選択肢</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングとクラウドファンディングは目的が異なるため、併用することで互いの弱点を補えます。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-3 font-bold text-primary">併用の具体例</h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">新商品開発</strong>：クラウドファンディングで開発資金を調達しつつ、既存事業の運転資金はファクタリングで確保</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">店舗展開</strong>：クラウドファンディングで新店舗のPRと資金調達を行い、既存店舗の仕入れ資金はファクタリングで賄う</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">つなぎ資金</strong>：クラウドファンディングの募集期間中の運転資金をファクタリングで調達</span></li>
            </ul>
          </div>
        </section>

        {/* ── クラウドファンディングの種類別比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">クラウドファンディングの種類とファクタリングの比較</h2>
          <p className="mb-6 leading-relaxed text-text-light">クラウドファンディングには複数の種類があり、それぞれファクタリングとの相性が異なります。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">種類</th>
                  <th className="border border-primary p-3 text-left">特徴</th>
                  <th className="border border-primary p-3 text-left">ファクタリングとの相性</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">購入型</td>
                  <td className="border border-border p-3">商品・サービスのリターンを提供</td>
                  <td className="border border-border p-3">併用しやすい（運転資金はファクタリング）</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">寄付型</td>
                  <td className="border border-border p-3">見返りなし（社会貢献目的）</td>
                  <td className="border border-border p-3">事業用途には向かない</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">融資型</td>
                  <td className="border border-border p-3">金利を付けて返済（ソーシャルレンディング）</td>
                  <td className="border border-border p-3">ファクタリングと目的が重複しやすい</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">株式投資型</td>
                  <td className="border border-border p-3">株式を発行して資金調達</td>
                  <td className="border border-border p-3">成長期の企業向け（ファクタリングは日常資金）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 具体的な判断フロー ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">資金調達手段の判断フロー</h2>
          <p className="mb-6 leading-relaxed text-text-light">自社の状況に合った資金調達手段を選ぶための判断フローを紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">Q1：今すぐ（即日〜1週間以内に）資金が必要ですか？</h3>
              <p className="text-sm text-text-light"><strong className="text-secondary">はい</strong> → ファクタリングを検討</p>
              <p className="text-sm text-text-light"><strong className="text-primary">いいえ</strong> → Q2へ</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">Q2：新しい商品やサービスの立ち上げ資金ですか？</h3>
              <p className="text-sm text-text-light"><strong className="text-secondary">はい</strong> → クラウドファンディング（購入型）を検討</p>
              <p className="text-sm text-text-light"><strong className="text-primary">いいえ</strong> → Q3へ</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">Q3：売掛金がありますか？</h3>
              <p className="text-sm text-text-light"><strong className="text-secondary">はい</strong> → ファクタリングを検討</p>
              <p className="text-sm text-text-light"><strong className="text-primary">いいえ</strong> → 銀行融資、ビジネスローン、補助金・助成金を検討</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">Q4：マーケティング効果も期待したいですか？</h3>
              <p className="text-sm text-text-light"><strong className="text-secondary">はい</strong> → クラウドファンディング（購入型）を検討</p>
              <p className="text-sm text-text-light"><strong className="text-primary">いいえ</strong> → ファクタリングまたは銀行融資を検討</p>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">&#9660;</span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-text-light">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/vs-bank-loan/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">vs 銀行融資</p>
              <p className="mt-1 text-sm text-text-light">メリット・デメリットを徹底比較</p>
            </Link>
            <Link href="/articles/vs-subsidy/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">vs 補助金・助成金</p>
              <p className="mt-1 text-sm text-text-light">併用可能？メリットデメリット比較</p>
            </Link>
            <Link href="/articles/vs-business-loan/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">vs ビジネスローン</p>
              <p className="mt-1 text-sm text-text-light">コストとスピードで比較</p>
            </Link>
            <Link href="/articles/cashflow-tips/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">資金繰り改善方法7選</p>
              <p className="mt-1 text-sm text-text-light">複数の選択肢を解説</p>
            </Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">最適な資金調達方法を見つける</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">ファクタリングで即日資金化。おすすめ会社を手数料・入金速度で比較できます。</p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
