import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリング vs 手形割引｜違いとメリット・デメリットを比較",
  description:
    "ファクタリングと手形割引の違いを徹底比較。仕組み・手数料・審査基準・償還請求権・会計処理の違い、それぞれのメリット・デメリット、どちらを選ぶべきかを分かりやすく解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/vs-bill-discount/",
  },
  openGraph: {
    title:
      "ファクタリング vs 手形割引｜違いとメリット・デメリットを比較",
    description:
      "ファクタリングと手形割引の違いを比較表で解説。それぞれのメリット・デメリットも紹介。",
    url: "https://factoring-partner.pages.dev/articles/vs-bill-discount/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const comparisonItems = [
  {
    label: "対象",
    factoring: "売掛債権（請求書）",
    billDiscount: "約束手形・為替手形",
  },
  {
    label: "取引の性質",
    factoring: "債権の売買（譲渡）",
    billDiscount: "手形を担保にした融資",
  },
  {
    label: "コスト",
    factoring: "手数料 2%〜18%（一括）",
    billDiscount: "割引率 年1.5%〜5.5%程度",
  },
  {
    label: "資金化スピード",
    factoring: "最短即日〜数日",
    billDiscount: "即日〜3営業日程度",
  },
  {
    label: "審査基準",
    factoring: "売掛先の信用力が中心",
    billDiscount: "利用者と振出人の信用力",
  },
  {
    label: "償還請求権",
    factoring: "なし（ノンリコースが主流）",
    billDiscount: "あり（不渡り時は買い戻し義務）",
  },
  {
    label: "負債計上",
    factoring: "負債にならない",
    billDiscount: "割引手形として注記が必要",
  },
  {
    label: "信用情報",
    factoring: "影響なし",
    billDiscount: "融資として記録される",
  },
  {
    label: "取扱機関",
    factoring: "ファクタリング会社",
    billDiscount: "銀行・信用金庫・手形割引業者",
  },
  {
    label: "利用条件",
    factoring: "売掛債権があれば利用可能",
    billDiscount: "約束手形を受け取っている必要あり",
  },
];

const factoringMerits = [
  {
    title: "売掛債権（請求書）があれば利用できる",
    description:
      "手形を受け取っていなくても、請求書ベースの売掛金があればファクタリングは利用可能です。手形取引が減少している現代のビジネス環境では、ファクタリングの方が活用場面が広いといえます。",
  },
  {
    title: "償還請求権なし（ノンリコース）でリスクが低い",
    description:
      "ファクタリングはノンリコース（償還請求権なし）が主流です。売掛先が倒産しても、利用者に買い戻し義務はありません。一方、手形割引は不渡りが発生した場合、割引依頼人が手形を買い戻さなければなりません。",
  },
  {
    title: "負債として計上されない",
    description:
      "ファクタリングは債権の売却なので、貸借対照表の負債にはなりません。銀行融資の審査時にもマイナスに働かず、財務状況を健全に保ちやすいのが特徴です。",
  },
  {
    title: "審査のハードルが低い",
    description:
      "ファクタリングの審査は売掛先の信用力が中心のため、利用者自身が赤字決算や税金滞納がある場合でも利用可能です。銀行の手形割引と比べて、審査に通りやすい傾向にあります。",
  },
];

const billDiscountMerits = [
  {
    title: "コストが安い",
    description:
      "手形割引の割引率は年1.5%〜5.5%程度で、ファクタリングの手数料（2%〜18%）と比べて大幅に安いのが最大のメリットです。コストを最優先する場合は手形割引が有利です。",
  },
  {
    title: "銀行取引の実績になる",
    description:
      "手形割引は銀行融資の一種のため、利用実績が銀行との取引履歴として蓄積されます。将来的に大口の融資を受ける際に有利に働く可能性があります。",
  },
  {
    title: "手形の信頼性が高い",
    description:
      "約束手形には法的な強制力があり、不渡りを出すと銀行取引停止処分を受けるため、振出人は手形の支払いを最優先します。そのため、売掛金と比べて回収の確実性が高い傾向にあります。",
  },
];

const faqs = [
  {
    question: "手形割引とファクタリングはどちらが安いですか？",
    answer:
      "コストだけを比較すると、手形割引の方が安いです。手形割引の割引率は年1.5%〜5.5%程度で、ファクタリングの手数料（2%〜18%）を大幅に下回ります。ただし、手形割引には償還請求権があるため、不渡りリスクを考慮すると単純な比較はできません。",
  },
  {
    question: "手形が廃止されるという話は本当ですか？",
    answer:
      "経済産業省は2026年を目途に約束手形の利用を廃止する方針を示しています。手形の電子化（でんさい）への移行が進んでおり、紙の手形は徐々に減少しています。手形取引がなくなれば、資金化の手段としてファクタリングの重要性はさらに高まると予想されます。",
  },
  {
    question: "でんさい（電子記録債権）とファクタリングの違いは何ですか？",
    answer:
      "でんさいは手形に代わる電子的な債権決済手段です。でんさいの割引（ファクタリングに相当する機能）は銀行で行え、コストも手形割引と同程度に安い傾向があります。ただし、でんさいの利用には取引先もでんさいネットに加入している必要があり、対応していない取引先もあります。",
  },
  {
    question: "手形割引で不渡りになったらどうなりますか？",
    answer:
      "手形割引で不渡りが発生した場合、割引依頼人（手形を持ち込んだ企業）が手形を買い戻す義務があります。つまり、割引で受け取った資金に相当する金額を銀行に返済しなければなりません。これが手形割引の最大のリスクであり、ノンリコースのファクタリングとの大きな違いです。",
  },
  {
    question: "フリーランスでも手形割引は利用できますか？",
    answer:
      "フリーランスが手形割引を利用するのは実務上かなり困難です。銀行の手形割引は法人が中心で、フリーランスが審査に通ることは稀です。また、そもそもフリーランスの取引で手形が使われるケースは少ないです。フリーランスの方にはファクタリングの方が適しています。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファクタリング vs 手形割引｜違いとメリット・デメリットを比較",
  description:
    "ファクタリングと手形割引の違いを比較表で解説。それぞれのメリット・デメリットも紹介。",
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
      "https://factoring-partner.pages.dev/articles/vs-bill-discount/",
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
      name: "ファクタリング vs 手形割引",
      item: "https://factoring-partner.pages.dev/articles/vs-bill-discount/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function VsBillDiscountPage() {
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
          { label: "ファクタリング vs 手形割引" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            比較ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング vs 手形割引
            <br className="hidden md:block" />
            違いとメリット・デメリットを比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングと手形割引はどちらも売掛債権を早期に現金化する方法ですが、仕組み・コスト・リスクに大きな違いがあります。両者を比較表で分かりやすく解説します。
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
                1. ファクタリングと手形割引の基本
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                2. 10項目で徹底比較
              </a>
            </li>
            <li>
              <a href="#factoring-merits" className="hover:underline">
                3. ファクタリングのメリット・デメリット
              </a>
            </li>
            <li>
              <a href="#bill-merits" className="hover:underline">
                4. 手形割引のメリット・デメリット
              </a>
            </li>
            <li>
              <a href="#which" className="hover:underline">
                5. どちらを選ぶべきか？
              </a>
            </li>
            <li>
              <a href="#tegata-haishi" className="hover:underline">
                6. 手形廃止の動向とファクタリングの将来
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 基本概要 ─── */}
        <section id="overview" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングと手形割引の基本
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ファクタリングと手形割引は、いずれも将来受け取る予定の代金を前倒しで現金化するサービスですが、対象となる債権や取引の性質が根本的に異なります。まず、それぞれの基本的な仕組みを確認しましょう。
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-primary">ファクタリングとは</h3>
              <p className="mb-3 text-sm leading-relaxed text-text-light">
                ファクタリングは、企業が保有する<strong className="text-text-main">売掛債権（請求書）</strong>をファクタリング会社に売却して、支払い期日前に資金化するサービスです。
              </p>
              <p className="text-sm leading-relaxed text-text-light">
                債権の「売買」であるため負債にはならず、ノンリコース（償還請求権なし）契約が主流です。手形を受け取っていなくても、請求書があれば利用できるのが特徴です。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-secondary">手形割引とは</h3>
              <p className="mb-3 text-sm leading-relaxed text-text-light">
                手形割引は、受け取った<strong className="text-text-main">約束手形</strong>を支払い期日前に銀行や手形割引業者に持ち込み、割引料（利息に相当）を差し引いた金額を受け取るサービスです。
              </p>
              <p className="text-sm leading-relaxed text-text-light">
                法的には手形を担保にした「融資」に分類されます。不渡りが発生した場合は手形を買い戻す義務（償還請求権）があるのが特徴です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング vs 手形割引 10項目で徹底比較
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ファクタリングと手形割引の違いを10項目の比較表で確認しましょう。コスト、リスク、審査基準など、重要なポイントを一覧で比較できます。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">ファクタリング</th>
                  <th className="px-4 py-3 font-semibold">手形割引</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item) => (
                  <tr key={item.label} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                      {item.label}
                    </td>
                    <td className="px-4 py-3">{item.factoring}</td>
                    <td className="px-4 py-3">{item.billDiscount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            最も大きな違いは「償還請求権」の有無です。ファクタリング（ノンリコース）は売掛先の支払い不能リスクをファクタリング会社が負いますが、手形割引は利用者が買い戻し義務を負います。
          </p>
        </section>

        {/* ── ファクタリングのメリット ─── */}
        <section id="factoring-merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングのメリット・デメリット
          </h2>
          <h3 className="mb-4 text-lg font-bold text-primary">メリット</h3>
          <div className="mb-8 space-y-4">
            {factoringMerits.map((merit, index) => (
              <div
                key={merit.title}
                className="rounded-lg border border-border bg-white p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-text-main">{merit.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {merit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="mb-4 text-lg font-bold text-accent">デメリット</h3>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h4 className="mb-2 font-bold text-text-main">手数料が手形割引より高い</h4>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料（2%〜18%）は、手形割引の割引率（年1.5%〜5.5%）と比べると高額です。特に2社間ファクタリングは8%〜18%程度の手数料がかかるため、コスト面では手形割引に劣ります。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h4 className="mb-2 font-bold text-text-main">悪質業者のリスクがある</h4>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリング業界は貸金業のような登録制度がないため、悪質な業者が紛れ込むリスクがあります。手形割引は銀行や登録業者が取り扱うため、比較的安全性が高いといえます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 手形割引のメリット ─── */}
        <section id="bill-merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手形割引のメリット・デメリット
          </h2>
          <h3 className="mb-4 text-lg font-bold text-secondary">メリット</h3>
          <div className="mb-8 space-y-4">
            {billDiscountMerits.map((merit, index) => (
              <div
                key={merit.title}
                className="rounded-lg border border-border bg-white p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-text-main">{merit.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {merit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="mb-4 text-lg font-bold text-accent">デメリット</h3>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h4 className="mb-2 font-bold text-text-main">償還請求権がある（不渡りリスク）</h4>
              <p className="text-sm leading-relaxed text-text-light">
                手形割引最大のデメリットは、不渡りが発生した場合に手形を買い戻す義務があることです。振出人が倒産した場合、利用者が全額を負担しなければなりません。この点はノンリコースのファクタリングと比べて大きなリスクです。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h4 className="mb-2 font-bold text-text-main">手形を受け取っていないと利用できない</h4>
              <p className="text-sm leading-relaxed text-text-light">
                手形割引は約束手形を保有していることが前提です。近年は手形取引を行わない企業が増えており、請求書ベースの取引では手形割引を利用できません。この点ではファクタリングの方が汎用性が高いです。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h4 className="mb-2 font-bold text-text-main">審査が厳しく時間がかかる場合がある</h4>
              <p className="text-sm leading-relaxed text-text-light">
                銀行での手形割引は融資の一種であるため、利用者自身の信用力や財務状況が厳しく審査されます。初回は口座開設から必要な場合もあり、ファクタリングと比べて手続きに時間がかかることがあります。
              </p>
            </div>
          </div>
        </section>

        {/* ── どちらを選ぶべきか ─── */}
        <section id="which" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            どちらを選ぶべきか？ケース別の判断基準
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ファクタリングと手形割引の選択は、保有している債権の種類やコスト意識、リスク許容度によって異なります。以下のケース別にどちらが適しているか解説します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-primary/30 bg-blue-50 p-5">
              <h3 className="mb-2 font-bold text-primary">ファクタリングが向いているケース</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>手形ではなく請求書ベースの売掛金を現金化したい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>売掛先の倒産リスクを回避したい（ノンリコースを希望）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>負債を増やさずに資金調達したい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>赤字決算や税金滞納があり銀行審査に不安がある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>フリーランスや個人事業主</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-2 font-bold text-secondary">手形割引が向いているケース</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>約束手形を保有しており、コストを最優先したい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>振出人（手形の発行者）の信用力が十分に高い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>銀行との取引実績を築きたい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>銀行の審査に通る信用力・財務状況がある</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 手形廃止の動向 ─── */}
        <section id="tegata-haishi" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手形廃止の動向とファクタリングの将来
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            経済産業省は2026年を目途に約束手形の利用廃止を目指す方針を示しています。すでに大手企業を中心に手形取引から請求書ベースの取引への移行が進んでおり、手形の利用は年々減少しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手形に代わる電子的な決済手段として「でんさい（電子記録債権）」の普及が進んでいますが、中小企業への浸透にはまだ時間がかかる見通しです。この過渡期において、請求書ベースで利用できるファクタリングの需要はさらに拡大すると予想されています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手形割引を利用していた企業にとって、手形廃止後の代替手段としてファクタリングを検討することは、早めの資金調達戦略の見直しにつながります。特に、売掛先が手形から請求書ベースの取引に切り替えた場合、ファクタリングがスムーズに利用できる点は大きなメリットです。
          </p>
          <div className="rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">今後の展望</p>
            <p className="text-sm leading-relaxed text-text-light">
              手形取引の縮小に伴い、ファクタリング市場は今後も成長が見込まれます。AI審査やオンライン完結型のサービスが増え、手数料の低下やスピードの向上が期待されています。手形割引を利用している企業は、ファクタリングへの段階的な移行を検討してみましょう。
            </p>
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
              href="/articles/vs-business-loan/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリング vs ビジネスローン</p>
              <p className="mt-1 text-sm text-text-light">
                どちらが有利か徹底比較
              </p>
            </Link>
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
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">
                手数料を安くする5つのコツも紹介
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
            ファクタリングと手形割引の違いを理解したら、次はあなたに合ったファクタリング会社を探しましょう。15社を手数料・入金速度・審査通過率で徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
