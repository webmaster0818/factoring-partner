import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリング vs ビジネスローン｜どちらが有利？徹底比較",
  description:
    "ファクタリングとビジネスローンの違いを比較表で徹底解説。審査基準・スピード・金利vs手数料・担保・返済方法の違い、それぞれが向いているケースを詳しく紹介します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/vs-business-loan/",
  },
  openGraph: {
    title:
      "ファクタリング vs ビジネスローン｜どちらが有利？徹底比較",
    description:
      "ファクタリングとビジネスローンを比較表で解説。どちらが有利かケース別に紹介。",
    url: "https://factoring-partner.pages.dev/articles/vs-business-loan/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const comparisonItems = [
  {
    label: "取引の性質",
    factoring: "売掛債権の売買（譲渡）",
    businessLoan: "金銭の貸借（融資）",
  },
  {
    label: "コスト",
    factoring: "手数料 2%〜18%（一括）",
    businessLoan: "金利 年5%〜18%（分割返済）",
  },
  {
    label: "資金化スピード",
    factoring: "最短即日〜数日",
    businessLoan: "最短即日〜1週間程度",
  },
  {
    label: "審査基準",
    factoring: "売掛先の信用力が中心",
    businessLoan: "利用者自身の信用力・業績",
  },
  {
    label: "担保・保証人",
    factoring: "不要",
    businessLoan: "不要（無担保型の場合）",
  },
  {
    label: "返済方法",
    factoring: "不要（売掛金入金で完結）",
    businessLoan: "毎月の分割返済が必要",
  },
  {
    label: "負債計上",
    factoring: "負債にならない",
    businessLoan: "負債として計上される",
  },
  {
    label: "信用情報",
    factoring: "影響なし",
    businessLoan: "信用情報に記録される",
  },
  {
    label: "調達可能額",
    factoring: "売掛金の範囲内",
    businessLoan: "数十万〜数千万円（業者により異なる）",
  },
  {
    label: "利用条件",
    factoring: "売掛債権が必要",
    businessLoan: "事業を営んでいること",
  },
];

const factoringAdvantages = [
  {
    title: "負債が増えない",
    description:
      "ファクタリングは債権の売却であるため、貸借対照表の負債に計上されません。財務状況を悪化させずに資金調達でき、銀行融資の審査にも影響しません。バランスシートの健全性を保ちながら資金繰りを改善できるのが大きなメリットです。",
  },
  {
    title: "返済義務がない",
    description:
      "ファクタリングには毎月の返済義務がありません。売掛先からの入金がファクタリング会社に渡ることで取引が完結します。ビジネスローンのように毎月の返済に追われることがなく、キャッシュフローの管理がシンプルです。",
  },
  {
    title: "赤字でも利用しやすい",
    description:
      "ファクタリングの審査は売掛先の信用力が中心であるため、利用者自身が赤字決算や債務超過の状態でも利用可能です。ビジネスローンでは自社の業績が審査に直結するため、業績不振時には審査に通りにくくなります。",
  },
  {
    title: "信用情報に影響しない",
    description:
      "ファクタリングの利用は信用情報機関に記録されません。将来の融資やクレジットカード審査に影響を与えることなく資金調達が可能です。ビジネスローンは融資のため、信用情報に記録されます。",
  },
];

const businessLoanAdvantages = [
  {
    title: "売掛債権がなくても利用できる",
    description:
      "ビジネスローンは事業を営んでいれば申し込めるため、売掛債権を持っていない業種（小売業、飲食業など現金取引が中心の業種）でも利用可能です。ファクタリングは売掛債権がなければ利用できません。",
  },
  {
    title: "まとまった資金を調達しやすい",
    description:
      "ビジネスローンは売掛金の範囲に縛られず、数百万〜数千万円の融資を受けられる場合があります。ファクタリングは保有する売掛金の範囲内でしか調達できないため、大口の資金需要にはビジネスローンが適しています。",
  },
  {
    title: "実質コストが安い場合がある",
    description:
      "ビジネスローンの金利は年5%〜18%程度ですが、返済期間が長い場合は月々の負担が小さくなります。ファクタリングの手数料は一括で差し引かれるため、年利換算すると高くなるケースがあります。長期的なコスト比較が重要です。",
  },
  {
    title: "繰り返し利用可能な枠がある",
    description:
      "ビジネスローンの中にはカードローン型（極度型）の商品があり、限度額の範囲内で繰り返し借入と返済ができます。ファクタリングは売掛金が発生するたびに都度申し込みが必要なため、利便性ではビジネスローンの方が優れています。",
  },
];

const faqs = [
  {
    question: "ファクタリングとビジネスローンはどちらが審査に通りやすいですか？",
    answer:
      "一般的にファクタリングの方が審査に通りやすいです。ファクタリングは売掛先の信用力が審査の中心であるため、利用者自身が赤字決算や税金滞納がある場合でも利用可能です。ビジネスローンは利用者自身の信用力や業績が重視されるため、業績不振時には審査が厳しくなります。",
  },
  {
    question: "ファクタリングとビジネスローンの併用はできますか？",
    answer:
      "はい、ファクタリングとビジネスローンの併用は可能です。ファクタリングは融資ではないため、ビジネスローンの審査に影響しません。短期的な資金繰りにはファクタリング、中長期的な資金需要にはビジネスローンと使い分けることで、効率的な資金調達が実現できます。",
  },
  {
    question: "ビジネスローンの審査に落ちた場合、ファクタリングは使えますか？",
    answer:
      "はい、ビジネスローンの審査に落ちた場合でもファクタリングは利用できる可能性が高いです。ファクタリングの審査では利用者の信用情報ではなく、売掛先の信用力が重視されるため、ビジネスローンの審査基準とは異なります。売掛先が信頼性の高い企業であれば、問題なく利用できるでしょう。",
  },
  {
    question: "個人事業主はどちらが利用しやすいですか？",
    answer:
      "個人事業主の場合、売掛債権があればファクタリングの方が利用しやすい傾向にあります。ビジネスローンは個人事業主向けの商品もありますが、確定申告書や事業計画書の提出が求められ、審査のハードルが高くなる場合があります。ファクタリングは売掛先の信用力が重視されるため、個人事業主でも利用しやすいです。",
  },
  {
    question: "年利換算するとファクタリングはどのくらいのコストですか？",
    answer:
      "ファクタリングの手数料を年利換算すると非常に高くなるケースがあります。例えば、30日後の売掛金を手数料10%で利用した場合、年利換算では約120%になります。ただし、ファクタリングは融資ではないため単純な年利比較は適切ではありません。あくまで短期的な資金繰り改善手段として捉え、長期的な資金需要にはビジネスローンや銀行融資を検討しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファクタリング vs ビジネスローン｜どちらが有利？徹底比較",
  description:
    "ファクタリングとビジネスローンを比較表で解説。どちらが有利かケース別に紹介。",
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
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
    "@id":
      "https://factoring-partner.pages.dev/articles/vs-business-loan/",
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
      name: "ファクタリング vs ビジネスローン",
      item: "https://factoring-partner.pages.dev/articles/vs-business-loan/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function VsBusinessLoanPage() {
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
          { label: "ファクタリング vs ビジネスローン" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            比較ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング vs ビジネスローン
            <br className="hidden md:block" />
            どちらが有利？徹底比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングとビジネスローンは性質が異なる資金調達手段です。コスト・審査・スピード・返済方法を比較し、あなたのビジネスに最適な方法を見つけましょう。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#overview" className="hover:underline">
                1. ファクタリングとビジネスローンの基本
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                2. 10項目で徹底比較
              </a>
            </li>
            <li>
              <a href="#factoring-advantages" className="hover:underline">
                3. ファクタリングが有利な4つのポイント
              </a>
            </li>
            <li>
              <a href="#loan-advantages" className="hover:underline">
                4. ビジネスローンが有利な4つのポイント
              </a>
            </li>
            <li>
              <a href="#cost-compare" className="hover:underline">
                5. 実質コスト比較シミュレーション
              </a>
            </li>
            <li>
              <a href="#which" className="hover:underline">
                6. ケース別の選び方
              </a>
            </li>
            <li>
              <a href="#combined" className="hover:underline">
                7. 併用という選択肢
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                8. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 基本概要 ─── */}
        <section id="overview" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングとビジネスローンの基本
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ファクタリングとビジネスローンは、どちらも中小企業やフリーランスが利用しやすい資金調達手段ですが、取引の性質が根本的に異なります。それぞれの基本を確認しましょう。
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-primary">ファクタリング</h3>
              <p className="mb-3 text-sm leading-relaxed text-text-light">
                売掛債権（請求書）をファクタリング会社に<strong className="text-text-main">売却</strong>して資金化するサービスです。融資ではなく債権の売買であるため、負債にならず返済義務もありません。
              </p>
              <p className="text-sm leading-relaxed text-text-light">
                審査は売掛先の信用力が中心で、利用者自身が赤字でも利用可能です。最短即日で資金化できるスピードも魅力です。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-secondary">ビジネスローン</h3>
              <p className="mb-3 text-sm leading-relaxed text-text-light">
                ノンバンク（消費者金融系・信販系など）が提供する事業者向けの<strong className="text-text-main">融資</strong>商品です。銀行融資と比べて審査が早く、無担保・無保証で利用できる商品が多いです。
              </p>
              <p className="text-sm leading-relaxed text-text-light">
                売掛債権がなくても申し込め、カードローン型なら限度額内で繰り返し利用できます。ただし金利は年5%〜18%と銀行融資より高めです。
              </p>
            </div>
          </div>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング vs ビジネスローン 10項目で徹底比較
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ファクタリングとビジネスローンの違いを10項目の比較表で確認しましょう。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">ファクタリング</th>
                  <th className="px-4 py-3 font-semibold">ビジネスローン</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item) => (
                  <tr key={item.label} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                      {item.label}
                    </td>
                    <td className="px-4 py-3">{item.factoring}</td>
                    <td className="px-4 py-3">{item.businessLoan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            最大の違いは「負債になるかどうか」です。ファクタリングは売掛債権の売却のため負債にならず、ビジネスローンは融資のため負債として計上されます。
          </p>
        </section>

        {/* ── ファクタリングの利点 ─── */}
        <section id="factoring-advantages" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングが有利な4つのポイント
          </h2>
          <div className="space-y-4">
            {factoringAdvantages.map((item, index) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-white p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-text-main">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ビジネスローンの利点 ─── */}
        <section id="loan-advantages" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ビジネスローンが有利な4つのポイント
          </h2>
          <div className="space-y-4">
            {businessLoanAdvantages.map((item, index) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-white p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-text-main">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── コスト比較シミュレーション ─── */}
        <section id="cost-compare" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            実質コスト比較シミュレーション
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            300万円を調達する場合のコストを、ファクタリングとビジネスローンで比較します。ファクタリングは手数料が一括で差し引かれますが、ビジネスローンは金利が分割返済の期間にわたって発生します。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">項目</th>
                  <th className="px-4 py-3 font-semibold">ファクタリング</th>
                  <th className="px-4 py-3 font-semibold">ビジネスローン</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">調達額</td>
                  <td className="px-4 py-3">300万円</td>
                  <td className="px-4 py-3">300万円</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">コスト率</td>
                  <td className="px-4 py-3">手数料10%</td>
                  <td className="px-4 py-3">年利15%</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">利用期間</td>
                  <td className="px-4 py-3">1回（30日）</td>
                  <td className="px-4 py-3">12ヶ月分割返済</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">総コスト</td>
                  <td className="px-4 py-3 font-bold text-accent">30万円</td>
                  <td className="px-4 py-3 font-bold text-accent">約24.8万円</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">実質受取額</td>
                  <td className="px-4 py-3">270万円（即日）</td>
                  <td className="px-4 py-3">300万円（全額）</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">返済義務</td>
                  <td className="px-4 py-3">なし</td>
                  <td className="px-4 py-3">月約27.1万円 x 12回</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg bg-primary-light p-4">
            <p className="mb-1 font-bold text-primary">コスト比較のポイント</p>
            <p className="text-sm leading-relaxed text-text-light">
              総コストだけを見るとビジネスローンの方が安くなるケースもありますが、ファクタリングは返済義務がなく、負債にもなりません。単純なコスト比較ではなく、キャッシュフローへの影響や財務状況への影響を総合的に判断することが大切です。
            </p>
          </div>
        </section>

        {/* ── ケース別の選び方 ─── */}
        <section id="which" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ケース別の選び方
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ファクタリングとビジネスローンは、状況に応じて使い分けるのが最適です。以下のケース別にどちらが適しているか確認しましょう。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-primary/30 bg-blue-50 p-5">
              <h3 className="mb-2 font-bold text-primary">ファクタリングが適しているケース</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>売掛債権を保有しており、短期の資金繰りを改善したい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>これ以上負債を増やしたくない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>赤字決算や税金滞納があり、ローン審査に不安がある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>毎月の返済負担を避けたい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>信用情報に記録を残したくない</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-2 font-bold text-secondary">ビジネスローンが適しているケース</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>売掛債権がない（現金取引中心の業種）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>売掛金の範囲を超えるまとまった資金が必要</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>設備投資など中長期的な資金需要がある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>繰り返し利用できる借入枠が欲しい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>ある程度の業績と信用力がある</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 併用 ─── */}
        <section id="combined" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            併用という選択肢
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングとビジネスローンは、どちらか一方を選ぶ必要はありません。それぞれの特性を活かして併用することで、最適な資金調達戦略を構築できます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            例えば、急な資金需要にはファクタリングで対応し、計画的な設備投資にはビジネスローンを活用するという使い分けが可能です。ファクタリングは融資ではないため、ビジネスローンの審査に影響しないのもメリットです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            ただし、ビジネスローンの返済中にファクタリングを利用する場合は、キャッシュフローの管理に注意が必要です。返済負担とファクタリング手数料の両方がかかるため、資金繰り表を作成して計画的に利用しましょう。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-2 font-bold text-secondary">併用のベストプラクティス</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>短期・緊急の資金需要 → ファクタリング</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>中長期・計画的な資金需要 → ビジネスローン</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>負債比率を上げたくない場面 → ファクタリング優先</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>売掛債権がない資金需要 → ビジネスローン</span>
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
              href="/articles/vs-bank-loan/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリング vs 銀行融資</p>
              <p className="mt-1 text-sm text-text-light">
                メリット・デメリットを徹底比較
              </p>
            </Link>
            <Link
              href="/articles/vs-bill-discount/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリング vs 手形割引</p>
              <p className="mt-1 text-sm text-text-light">
                違いとメリット・デメリットを比較
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
              href="/articles/fee-negotiation/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料を下げる交渉術5選</p>
              <p className="mt-1 text-sm text-text-light">
                コスト削減の具体的な方法を紹介
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
