import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング vs 銀行融資｜メリット・デメリットを徹底比較",
  description:
    "ファクタリングと銀行融資の違いを比較表で徹底解説。審査基準・スピード・金利vs手数料・担保・信用情報・会計処理の違い、それぞれが向いているケース、併用という選択肢まで詳しく紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/vs-bank-loan/",
  },
  openGraph: {
    title: "ファクタリング vs 銀行融資｜メリット・デメリットを徹底比較",
    description:
      "ファクタリングと銀行融資の違いを比較表で徹底解説。それぞれが向いているケースも紹介。",
    url: "https://factoring-partner.pages.dev/articles/vs-bank-loan/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const comparisonItems = [
  {
    label: "取引の性質",
    factoring: "売掛債権の売買（譲渡）",
    bankLoan: "金銭の貸借（借入）",
  },
  {
    label: "審査基準",
    factoring: "売掛先の信用力が中心",
    bankLoan: "利用者の信用力・財務状況が中心",
  },
  {
    label: "資金化スピード",
    factoring: "最短即日〜数日",
    bankLoan: "2週間〜2ヶ月",
  },
  {
    label: "コスト",
    factoring: "手数料 2%〜30%（一括）",
    bankLoan: "金利 年1%〜15%（分割返済）",
  },
  {
    label: "担保・保証人",
    factoring: "不要",
    bankLoan: "必要な場合が多い",
  },
  {
    label: "信用情報への影響",
    factoring: "影響なし（記録されない）",
    bankLoan: "記録される",
  },
  {
    label: "負債計上",
    factoring: "負債にならない（オフバランス）",
    bankLoan: "負債として計上",
  },
  {
    label: "返済",
    factoring: "不要（売掛金の入金で完結）",
    bankLoan: "元本＋利息を分割返済",
  },
  {
    label: "調達可能額",
    factoring: "売掛金の範囲内",
    bankLoan: "担保・信用力に応じて柔軟",
  },
  {
    label: "会計処理",
    factoring: "売掛金の売却（売上債権売却損）",
    bankLoan: "借入金の計上（支払利息）",
  },
  {
    label: "赤字決算時の利用",
    factoring: "利用可能",
    bankLoan: "審査に不利",
  },
  {
    label: "創業年数の制限",
    factoring: "制限なし（創業直後でもOK）",
    bankLoan: "2期以上の決算が必要な場合が多い",
  },
];

const factoringCases = [
  {
    title: "急ぎの資金が必要な場合",
    description:
      "従業員の給与支払い、取引先への支払い期日が迫っているなど、すぐに現金が必要な場合はファクタリングが適しています。最短即日で資金化できるため、緊急の資金需要に対応できます。銀行融資では審査に数週間かかるため、急ぎの場面には不向きです。",
  },
  {
    title: "銀行融資の審査に通らない場合",
    description:
      "赤字決算、税金滞納、創業間もない、債務超過など、銀行融資の審査に不安がある場合はファクタリングが有効です。ファクタリングでは利用者自身の信用力よりも売掛先の信用力が重視されるため、銀行融資の審査に落ちた企業でも利用できる可能性があります。",
  },
  {
    title: "負債を増やしたくない場合",
    description:
      "ファクタリングは融資ではなく債権の売買であるため、貸借対照表の負債が増えません。バランスシートをスリム化したい場合や、今後の銀行融資審査に備えて負債比率を低く保ちたい場合に最適です。決算前のオフバランス化にも活用できます。",
  },
  {
    title: "信用情報に影響を与えたくない場合",
    description:
      "ファクタリングの利用は信用情報機関（CIC・JICC・全銀協）に記録されません。将来の住宅ローンやクレジットカード審査に影響を与えずに資金調達したいフリーランスや個人事業主に特に適しています。",
  },
  {
    title: "売掛金の入金サイトが長い業種の場合",
    description:
      "建設業（入金サイト60〜120日）、運送業（入金サイト30〜60日）、IT業（入金サイト30〜60日）など、売掛金の入金までに時間がかかる業種では、ファクタリングで入金サイトを短縮することで資金繰りを大幅に改善できます。",
  },
];

const bankLoanCases = [
  {
    title: "大規模な設備投資を行う場合",
    description:
      "工場の建設、大型機械の購入、店舗の開業など、数千万円〜数億円規模の資金が必要な場合は銀行融資が適しています。ファクタリングは売掛金の範囲内でしか資金調達できないため、大規模投資には不向きです。",
  },
  {
    title: "長期的な運転資金が必要な場合",
    description:
      "数ヶ月〜数年にわたる運転資金を安定的に確保したい場合は、金利の低い銀行融資が有利です。ファクタリングは短期的な資金繰り改善には適していますが、毎月繰り返し利用すると手数料コストが累積します。",
  },
  {
    title: "コストを最小限に抑えたい場合",
    description:
      "銀行融資の金利は年1%〜5%程度（信用保証協会付きの場合）と、ファクタリングの手数料（2%〜30%）に比べて大幅に低コストです。時間に余裕があり、審査に通る見込みがある場合は銀行融資を優先しましょう。",
  },
  {
    title: "信用力を構築したい場合",
    description:
      "銀行融資を利用して期日通りに返済することで、銀行との信用関係が構築され、将来的により良い条件での融資が可能になります。事業の成長に合わせて融資枠を拡大していきたい場合は、銀行融資が有効です。",
  },
  {
    title: "安定した売上のある企業の場合",
    description:
      "業績が安定しており、決算書の内容が良好な企業は銀行融資の審査に通りやすく、低金利で借りられます。無理にファクタリングを利用するよりも、銀行融資の方がコストパフォーマンスが良いでしょう。",
  },
];

const faqs = [
  {
    question: "ファクタリングと銀行融資はどちらがお得ですか？",
    answer:
      "コストだけで比較すると銀行融資の方が安い（年利1%〜5%程度）ですが、審査に通る可能性やスピード、負債への影響を総合的に考える必要があります。急ぎの資金需要や審査に不安がある場合はファクタリング、時間に余裕がある場合は銀行融資が一般的にはお得です。",
  },
  {
    question: "ファクタリングと銀行融資は同時に利用できますか？",
    answer:
      "はい、同時利用は可能です。ファクタリングは融資ではないため、銀行融資の審査に影響しません。急ぎの資金をファクタリングで調達しつつ、中長期的な資金は銀行融資で確保するという併用戦略が効果的です。",
  },
  {
    question: "ファクタリングを利用すると銀行融資の審査に影響しますか？",
    answer:
      "ファクタリングの利用自体は信用情報に記録されないため、直接的な影響はありません。むしろ、ファクタリングによって売掛金を現金化し資金繰りが改善されれば、決算書の内容が良くなり銀行融資の審査にプラスに働く可能性があります。",
  },
  {
    question: "銀行にもファクタリングサービスはありますか？",
    answer:
      "はい、メガバンクや地方銀行の中にはファクタリングサービスを提供しているところがあります。銀行系のファクタリングは手数料が安い傾向にありますが、審査が厳しく時間がかかるのが一般的です。三菱UFJファクターやみずほファクターなどが代表的です。",
  },
  {
    question: "日本政策金融公庫の融資とファクタリングはどちらが良いですか？",
    answer:
      "日本政策金融公庫は低金利（年0.5%〜2%程度）で利用でき、創業融資制度もあるため、時間に余裕がある場合はおすすめです。ただし、審査に2〜4週間程度かかるため、急ぎの場合はファクタリングとの併用を検討しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリング vs 銀行融資｜メリット・デメリットを徹底比較",
  description:
    "ファクタリングと銀行融資の違いを比較表で徹底解説。それぞれが向いているケースも紹介。",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  author: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://factoring-partner.pages.dev/articles/vs-bank-loan/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://factoring-partner.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "コラム",
      item: "https://factoring-partner.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ファクタリング vs 銀行融資",
      item: "https://factoring-partner.pages.dev/articles/vs-bank-loan/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function VsBankLoanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "コラム", href: "/articles/" },
          { label: "ファクタリング vs 銀行融資" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            比較ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング vs 銀行融資
            <br className="hidden md:block" />
            メリット・デメリットを徹底比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングと銀行融資の違いを12項目の比較表で徹底解説。それぞれが向いているケースや併用戦略も紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#comparison" className="hover:underline">
                1. ファクタリングと銀行融資の違い（比較表）
              </a>
            </li>
            <li>
              <a href="#factoring-merits" className="hover:underline">
                2. ファクタリングのメリット・デメリット
              </a>
            </li>
            <li>
              <a href="#loan-merits" className="hover:underline">
                3. 銀行融資のメリット・デメリット
              </a>
            </li>
            <li>
              <a href="#factoring-cases" className="hover:underline">
                4. ファクタリングが向いているケース
              </a>
            </li>
            <li>
              <a href="#loan-cases" className="hover:underline">
                5. 銀行融資が向いているケース
              </a>
            </li>
            <li>
              <a href="#combined" className="hover:underline">
                6. 併用という選択肢
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングと銀行融資の違い（比較表）
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングと銀行融資は、どちらも企業の資金調達手段ですが、その性質は根本的に異なります。ファクタリングは「売掛債権の売買」、銀行融資は「金銭の貸借」です。以下の比較表で12項目にわたる違いを確認しましょう。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">ファクタリング</th>
                  <th className="px-4 py-3 font-semibold">銀行融資</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item) => (
                  <tr key={item.label} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                      {item.label}
                    </td>
                    <td className="px-4 py-3 text-text-light">
                      {item.factoring}
                    </td>
                    <td className="px-4 py-3 text-text-light">
                      {item.bankLoan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── ファクタリングのメリット・デメリット ─── */}
        <section id="factoring-merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングのメリット・デメリット
          </h2>
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">メリット</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>最短即日で資金化できるスピード感</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>赤字決算・税金滞納でも利用可能</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>負債にならない（バランスシート改善）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>信用情報に影響しない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>担保・保証人が不要</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>創業直後でも利用可能</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-3 font-bold text-accent">デメリット</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#10007;</span>
                  <span>手数料が銀行融資の金利より高い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#10007;</span>
                  <span>売掛金の範囲内でしか調達できない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#10007;</span>
                  <span>売掛先の信用力に依存する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#10007;</span>
                  <span>悪徳業者が存在するリスク</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#10007;</span>
                  <span>継続利用すると手数料が累積する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#10007;</span>
                  <span>2社間は取引先に知られるリスクあり</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 銀行融資のメリット・デメリット ─── */}
        <section id="loan-merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            銀行融資のメリット・デメリット
          </h2>
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">メリット</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>金利が低い（年1%〜5%程度）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>大口の資金調達が可能</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>長期の返済計画が立てられる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>銀行との信用関係を構築できる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>政府系金融機関の優遇制度がある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>売掛金がなくても利用可能</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-3 font-bold text-accent">デメリット</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#10007;</span>
                  <span>審査に時間がかかる（2週間〜2ヶ月）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#10007;</span>
                  <span>赤字決算・税金滞納は審査に不利</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#10007;</span>
                  <span>担保・保証人が必要な場合がある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#10007;</span>
                  <span>負債として計上される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#10007;</span>
                  <span>信用情報に記録される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#10007;</span>
                  <span>創業直後は審査が厳しい</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── ファクタリングが向いているケース ─── */}
        <section id="factoring-cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングが向いているケース
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            以下のような状況では、銀行融資よりもファクタリングの方が適しています。自社の状況と照らし合わせて判断しましょう。
          </p>
          <div className="space-y-4">
            {factoringCases.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-secondary/30 bg-teal-50 p-6"
              >
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 銀行融資が向いているケース ─── */}
        <section id="loan-cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            銀行融資が向いているケース
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            以下のような状況では、ファクタリングよりも銀行融資の方が適しています。
          </p>
          <div className="space-y-4">
            {bankLoanCases.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-3 font-bold text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 併用という選択肢 ─── */}
        <section id="combined" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            併用という選択肢
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングと銀行融資は「どちらか一方」ではなく、<strong className="text-text-main">併用する</strong>のが最も効果的な資金調達戦略です。それぞれの長所を活かし、短所を補い合うことで、安定した資金繰りを実現できます。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            実際に多くの中小企業では、銀行融資をメインの資金調達手段としつつ、急な資金需要が発生した際にファクタリングを補助的に活用するという使い方をしています。
          </p>

          <div className="mb-6 rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 text-lg font-bold text-primary">
              おすすめの併用戦略
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-2 font-semibold text-text-main">
                  戦略1：銀行融資＋ファクタリングの二段構え
                </p>
                <p className="text-sm leading-relaxed text-text-light">
                  中長期的な運転資金は銀行融資で確保し、突発的な資金需要にはファクタリングで対応する方法です。銀行融資の審査中にファクタリングでつなぎ資金を調達するケースも多くあります。
                </p>
              </div>
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-2 font-semibold text-text-main">
                  戦略2：ファクタリングで実績を作り、銀行融資へステップアップ
                </p>
                <p className="text-sm leading-relaxed text-text-light">
                  創業直後や赤字決算で銀行融資が難しい場合、まずファクタリングで資金繰りを安定させ、決算書の内容を改善してから銀行融資に申し込む方法です。ファクタリングは負債にならないため、バランスシートを良好に保てます。
                </p>
              </div>
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-2 font-semibold text-text-main">
                  戦略3：季節変動に応じた使い分け
                </p>
                <p className="text-sm leading-relaxed text-text-light">
                  繁忙期の大型受注に対応するためのつなぎ資金をファクタリングで調達し、閑散期の運転資金は銀行融資で賄う方法です。業種によって資金需要の波がある場合に有効な戦略です。
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">
              併用時のポイント
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  ファクタリングの利用は銀行融資の審査に悪影響を与えないため、安心して併用できます
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  ファクタリングで資金繰りを安定させることで、銀行融資の審査時に良好な決算書を提出できます
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  銀行融資のメイン行とファクタリング会社、それぞれ信頼できる取引先を確保しておくことが重要です
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-text-light">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/what-is-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングとは？</p>
              <p className="mt-1 text-sm text-text-light">
                仕組み・種類・メリット・デメリットをわかりやすく解説
              </p>
            </Link>
            <Link
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">
                手数料を安くする5つのコツも紹介
              </p>
            </Link>
            <Link
              href="/articles/cashflow-tips/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">資金繰り改善方法7選</p>
              <p className="mt-1 text-sm text-text-light">
                ファクタリング以外の選択肢も解説
              </p>
            </Link>
            <Link
              href="/articles/accounting/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">会計処理・仕訳方法</p>
              <p className="mt-1 text-sm text-text-light">
                勘定科目と税務上の注意点を解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            最適なファクタリング会社を見つけましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            ファクタリングを検討しているなら、まずは複数社の比較から。15社を手数料・入金速度・審査通過率で徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
