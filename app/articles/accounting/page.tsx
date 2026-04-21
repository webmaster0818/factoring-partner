import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリングの会計処理・仕訳方法｜勘定科目と税務上の注意点",
  description:
    "ファクタリングの会計処理・仕訳方法を2社間・3社間別に解説。勘定科目（売上債権売却損）、消費税の扱い（非課税）、決算書への影響、税務上の注意点を初心者にもわかりやすく紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/accounting/",
  },
  openGraph: {
    title: "ファクタリングの会計処理・仕訳方法｜勘定科目と税務上の注意点",
    description:
      "ファクタリングの仕訳を2社間・3社間別に解説。消費税の扱いや決算書への影響も紹介。",
    url: "https://factoring-partner.pages.dev/articles/accounting/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const faqs = [
  {
    question: "ファクタリング手数料の勘定科目は何ですか？",
    answer:
      "ファクタリング手数料の勘定科目は「売上債権売却損」が一般的です。「雑損失」や「支払手数料」で処理する場合もありますが、ファクタリング手数料の性質（売掛債権の売却による損失）を正確に表す「売上債権売却損」の使用が推奨されます。なお、この勘定科目は営業外費用として損益計算書に計上されます。",
  },
  {
    question: "ファクタリング手数料に消費税はかかりますか？",
    answer:
      "ファクタリング手数料は「金銭債権の譲渡」に該当するため、消費税法上は非課税取引です（消費税法第6条、別表第一の二号）。仕訳上は消費税の「非課税仕入」として処理します。ただし、事務手数料や登記費用には消費税がかかる場合があるため、請求明細を確認してください。",
  },
  {
    question: "ファクタリングは貸借対照表にどう影響しますか？",
    answer:
      "ファクタリングを利用すると、貸借対照表の「売掛金」が減少し「現金預金」が増加します。融資と異なり負債は増えないため、自己資本比率や負債比率が悪化しません。むしろ売掛金が現金に変わることで流動比率が改善され、バランスシートのスリム化（オフバランス化）が図れます。",
  },
  {
    question: "ファクタリングは損益計算書にどう影響しますか？",
    answer:
      "手数料分が「売上債権売却損」として営業外費用に計上されるため、経常利益が減少します。ただし、営業利益には影響しません。損益計算書上は「営業外費用」のセクションに表示されます。手数料が大きい場合は経常利益への影響も大きくなるため、コスト管理が重要です。",
  },
  {
    question: "ファクタリングの会計処理は税理士に相談すべきですか？",
    answer:
      "はい、特に初めてファクタリングを利用する場合は税理士に相談することを強くおすすめします。ファクタリングの種類（2社間・3社間）や契約内容によって会計処理が異なる場合があり、消費税の取り扱いや決算書への影響を正確に把握するためには専門家のアドバイスが重要です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファクタリングの会計処理・仕訳方法｜勘定科目と税務上の注意点",
  description:
    "ファクタリングの仕訳を2社間・3社間別に解説。消費税の扱いや決算書への影響も紹介。",
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
    "@id": "https://factoring-partner.pages.dev/articles/accounting/",
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
      name: "会計処理・仕訳方法",
      item: "https://factoring-partner.pages.dev/articles/accounting/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function AccountingPage() {
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
          { label: "会計処理・仕訳方法" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            会計ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングの会計処理・仕訳方法
            <br className="hidden md:block" />
            勘定科目と税務上の注意点
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングの仕訳方法を2社間・3社間別に具体例で解説。手数料の勘定科目（売上債権売却損）、消費税の扱い（非課税）、決算書への影響まで詳しく紹介します。
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
                1. ファクタリングの会計処理の基本
              </a>
            </li>
            <li>
              <a href="#2sha" className="hover:underline">
                2. 2社間ファクタリングの仕訳
              </a>
            </li>
            <li>
              <a href="#3sha" className="hover:underline">
                3. 3社間ファクタリングの仕訳
              </a>
            </li>
            <li>
              <a href="#accounts" className="hover:underline">
                4. 手数料の勘定科目
              </a>
            </li>
            <li>
              <a href="#tax" className="hover:underline">
                5. 消費税の扱い
              </a>
            </li>
            <li>
              <a href="#impact" className="hover:underline">
                6. 決算書への影響
              </a>
            </li>
            <li>
              <a href="#tips" className="hover:underline">
                7. 税務上の注意点
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                8. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 会計処理の基本 ─── */}
        <section id="overview" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングの会計処理の基本
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングは「融資（借入）」ではなく「売掛債権の売却（譲渡）」であるため、会計処理も融資とは異なります。ファクタリングの会計処理は<strong className="text-text-main">「売掛金の消滅」と「現金の増加」</strong>を記帳し、手数料を費用として計上するのが基本です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングの会計処理のポイントは以下の通りです。
          </p>

          <div className="mb-6 rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">
              ファクタリング会計処理のポイント
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  借入金（負債）は計上しない &#8594; バランスシートの負債は増えない
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  売掛金が現金に変わる &#8594; 資産の流動性が向上する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  手数料は「売上債権売却損」として営業外費用に計上する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  消費税は非課税取引として処理する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  2社間と3社間で仕訳の流れが異なる
                </span>
              </li>
            </ul>
          </div>

          <p className="text-sm leading-relaxed text-text-light">
            なお、2社間ファクタリングでは「未収入金」を経由する仕訳が必要になるのに対し、3社間ファクタリングでは売掛金から直接現金への振替が可能です。以下でそれぞれの仕訳を具体例で解説します。
          </p>
        </section>

        {/* ── 2社間ファクタリングの仕訳 ─── */}
        <section id="2sha" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            2社間ファクタリングの仕訳
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            2社間ファクタリングでは、ファクタリング会社への売掛債権の譲渡後、利用者が売掛先から入金を受け取り、それをファクタリング会社に送金するという流れになります。そのため「未収入金」勘定を経由します。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            以下の条件で仕訳例を示します：売掛金100万円、手数料15%（15万円）
          </p>

          {/* Step 1 */}
          <div className="mb-6 rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 text-lg font-bold text-primary">
              STEP 1：売掛債権をファクタリング会社に譲渡した時
            </h3>
            <p className="mb-4 text-sm text-text-light">
              売掛金をファクタリング会社に売却し、手数料を差し引いた金額を受け取ります。
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-left text-white">
                    <th className="px-4 py-2 font-semibold">借方（デビット）</th>
                    <th className="px-4 py-2 font-semibold">金額</th>
                    <th className="px-4 py-2 font-semibold">貸方（クレジット）</th>
                    <th className="px-4 py-2 font-semibold">金額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">現金預金</td>
                    <td className="px-4 py-2">850,000</td>
                    <td className="px-4 py-2">売掛金</td>
                    <td className="px-4 py-2">1,000,000</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">売上債権売却損</td>
                    <td className="px-4 py-2">150,000</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-text-light">
              ※ 即日入金の場合、上記の1仕訳で完結します。入金が翌日以降の場合は「未収入金」を経由します。
            </p>
          </div>

          {/* Step 1 (未収入金経由) */}
          <div className="mb-6 rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 text-lg font-bold text-primary">
              STEP 1（別パターン）：入金が翌日以降の場合
            </h3>
            <p className="mb-2 text-sm font-semibold text-text-main">
              (a) ファクタリング契約時
            </p>
            <div className="mb-4 overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-left text-white">
                    <th className="px-4 py-2 font-semibold">借方</th>
                    <th className="px-4 py-2 font-semibold">金額</th>
                    <th className="px-4 py-2 font-semibold">貸方</th>
                    <th className="px-4 py-2 font-semibold">金額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">未収入金</td>
                    <td className="px-4 py-2">850,000</td>
                    <td className="px-4 py-2">売掛金</td>
                    <td className="px-4 py-2">1,000,000</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">売上債権売却損</td>
                    <td className="px-4 py-2">150,000</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-2 text-sm font-semibold text-text-main">
              (b) ファクタリング会社から入金時
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-left text-white">
                    <th className="px-4 py-2 font-semibold">借方</th>
                    <th className="px-4 py-2 font-semibold">金額</th>
                    <th className="px-4 py-2 font-semibold">貸方</th>
                    <th className="px-4 py-2 font-semibold">金額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">現金預金</td>
                    <td className="px-4 py-2">850,000</td>
                    <td className="px-4 py-2">未収入金</td>
                    <td className="px-4 py-2">850,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-6 rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 text-lg font-bold text-primary">
              STEP 2：売掛先から入金があった時（ファクタリング会社へ送金）
            </h3>
            <p className="mb-4 text-sm text-text-light">
              2社間ファクタリングでは、売掛先はファクタリングの利用を知らないため、通常通り利用者に支払います。利用者はこの入金をファクタリング会社に送金します。
            </p>
            <p className="mb-2 text-sm font-semibold text-text-main">
              (a) 売掛先から入金時
            </p>
            <div className="mb-4 overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-left text-white">
                    <th className="px-4 py-2 font-semibold">借方</th>
                    <th className="px-4 py-2 font-semibold">金額</th>
                    <th className="px-4 py-2 font-semibold">貸方</th>
                    <th className="px-4 py-2 font-semibold">金額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">現金預金</td>
                    <td className="px-4 py-2">1,000,000</td>
                    <td className="px-4 py-2">預り金</td>
                    <td className="px-4 py-2">1,000,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-2 text-sm font-semibold text-text-main">
              (b) ファクタリング会社へ送金時
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-left text-white">
                    <th className="px-4 py-2 font-semibold">借方</th>
                    <th className="px-4 py-2 font-semibold">金額</th>
                    <th className="px-4 py-2 font-semibold">貸方</th>
                    <th className="px-4 py-2 font-semibold">金額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">預り金</td>
                    <td className="px-4 py-2">1,000,000</td>
                    <td className="px-4 py-2">現金預金</td>
                    <td className="px-4 py-2">1,000,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 3社間ファクタリングの仕訳 ─── */}
        <section id="3sha" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            3社間ファクタリングの仕訳
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            3社間ファクタリングでは、売掛先が直接ファクタリング会社に支払うため、利用者の会計処理は2社間よりもシンプルです。売掛金の譲渡時に1回の仕訳で完結します。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            以下の条件で仕訳例を示します：売掛金100万円、手数料5%（5万円）
          </p>

          <div className="mb-6 rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 text-lg font-bold text-primary">
              売掛債権をファクタリング会社に譲渡し、入金を受けた時
            </h3>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-left text-white">
                    <th className="px-4 py-2 font-semibold">借方</th>
                    <th className="px-4 py-2 font-semibold">金額</th>
                    <th className="px-4 py-2 font-semibold">貸方</th>
                    <th className="px-4 py-2 font-semibold">金額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">現金預金</td>
                    <td className="px-4 py-2">950,000</td>
                    <td className="px-4 py-2">売掛金</td>
                    <td className="px-4 py-2">1,000,000</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">売上債権売却損</td>
                    <td className="px-4 py-2">50,000</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-text-light">
              3社間ファクタリングでは、売掛先が直接ファクタリング会社に支払うため、利用者側で「預り金」の処理は不要です。入金と譲渡が同日であれば上記の1仕訳で完結します。
            </p>
          </div>

          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">
              2社間と3社間の仕訳の違い
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              2社間ファクタリングでは「未収入金」や「預り金」を経由する仕訳が必要になりますが、3社間ファクタリングでは売掛金から直接現金への振替で完了します。3社間の方が会計処理がシンプルですが、実際にはどちらの方式を選んでも最終的な損益への影響は手数料率の違いのみです。
            </p>
          </div>
        </section>

        {/* ── 手数料の勘定科目 ─── */}
        <section id="accounts" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料の勘定科目
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリング手数料の勘定科目について、選択肢と推奨される処理方法を解説します。
          </p>

          <div className="mb-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">勘定科目</th>
                  <th className="px-4 py-3 font-semibold">分類</th>
                  <th className="px-4 py-3 font-semibold">推奨度</th>
                  <th className="px-4 py-3 font-semibold">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-4 py-3 font-semibold text-text-main">
                    売上債権売却損
                  </td>
                  <td className="px-4 py-3">営業外費用</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-bold text-secondary">
                      推奨
                    </span>
                  </td>
                  <td className="px-4 py-3 text-text-light">
                    手数料の性質を最も正確に表す。ファクタリング利用が明確に分かる
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3 font-semibold text-text-main">
                    雑損失
                  </td>
                  <td className="px-4 py-3">営業外費用</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-section-bg px-2 py-0.5 text-xs font-bold text-text-light">
                      可
                    </span>
                  </td>
                  <td className="px-4 py-3 text-text-light">
                    少額の場合や、勘定科目を新設したくない場合に使用
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3 font-semibold text-text-main">
                    支払手数料
                  </td>
                  <td className="px-4 py-3">販管費</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent">
                      非推奨
                    </span>
                  </td>
                  <td className="px-4 py-3 text-text-light">
                    手数料の性質が「売掛債権の売却損」であるため、支払手数料は不適切
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3 font-semibold text-text-main">
                    割引料
                  </td>
                  <td className="px-4 py-3">営業外費用</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent">
                      非推奨
                    </span>
                  </td>
                  <td className="px-4 py-3 text-text-light">
                    手形割引に用いる科目。ファクタリングは手形割引とは異なる
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="mb-2 font-bold text-accent">注意</p>
            <p className="text-sm leading-relaxed text-text-light">
              一度決めた勘定科目は継続的に使用してください（継続性の原則）。期中に勘定科目を変更すると、期間比較ができなくなり、税務調査で指摘を受ける可能性があります。初回利用時に税理士と相談して適切な勘定科目を決めることをおすすめします。
            </p>
          </div>
        </section>

        {/* ── 消費税の扱い ─── */}
        <section id="tax" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            消費税の扱い
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリング手数料の消費税の取り扱いは、正しく理解しておくことが重要です。誤った処理をすると、消費税の申告に影響を及ぼす可能性があります。
          </p>

          <div className="mb-6 rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 font-bold text-primary">
              ファクタリング手数料は「非課税取引」
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-text-light">
              ファクタリング手数料は、消費税法上の「金銭債権の譲渡」に該当し、非課税取引です（消費税法第6条、別表第一の二号）。これは手形割引の割引料が非課税であるのと同じ理由です。
            </p>
            <div className="rounded-lg bg-section-bg p-4">
              <p className="mb-2 text-sm font-semibold text-text-main">
                消費税の取り扱いまとめ
              </p>
              <ul className="space-y-1 text-sm text-text-light">
                <li>・買取手数料（ファクタリング手数料）：<strong className="text-secondary">非課税</strong></li>
                <li>・事務手数料：<strong className="text-accent">課税（10%）</strong></li>
                <li>・債権譲渡登記費用（登録免許税）：<strong className="text-secondary">非課税</strong></li>
                <li>・司法書士報酬：<strong className="text-accent">課税（10%）</strong></li>
                <li>・印紙代：<strong className="text-secondary">非課税</strong></li>
                <li>・振込手数料：<strong className="text-accent">課税（10%）</strong></li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="mb-2 font-bold text-accent">
              課税売上割合への影響に注意
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              ファクタリング（金銭債権の譲渡）は非課税売上として計上されるため、課税売上割合の計算に影響を及ぼす可能性があります。ただし、金銭債権の譲渡については、譲渡対価の5%を非課税売上として計算する特例があります（消費税法施行令第48条）。課税売上割合が95%を下回る事業者は、仕入税額控除の計算方法に影響するため、税理士に相談してください。
            </p>
          </div>
        </section>

        {/* ── 決算書への影響 ─── */}
        <section id="impact" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            決算書への影響
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングは融資と異なり、決算書にプラスの影響を与える面があります。ただし、手数料コストによるマイナスの影響もあるため、総合的に判断することが重要です。
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                貸借対照表（B/S）への影響
              </h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>売掛金が減少し、現金預金が増加</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>負債は増えない（オフバランス効果）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>流動比率が改善する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>自己資本比率に悪影響なし</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>総資産の圧縮による ROA 改善</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-3 font-bold text-accent">
                損益計算書（P/L）への影響
              </h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#10007;</span>
                  <span>売上債権売却損が営業外費用として計上</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#10007;</span>
                  <span>経常利益が手数料分だけ減少</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>営業利益には影響なし</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>売上高には影響なし</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#10007;</span>
                  <span>頻繁な利用で経常利益率が低下</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 税務上の注意点 ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            税務上の注意点
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングに関する税務上の注意点をまとめます。適切な処理を行うために、以下のポイントを押さえておきましょう。
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">
                売上債権売却損は損金算入できる
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料（売上債権売却損）は、法人税・所得税の計算上、損金（経費）として認められます。正しく仕訳することで、課税所得の計算に反映されます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">
                期をまたぐ場合の処理
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                決算期末にファクタリングを利用し、入金が翌期になる場合は「未収入金」として当期の決算書に計上します。費用（売上債権売却損）はファクタリング契約が成立した期に計上するのが原則です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">
                証憑書類の保管
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリング契約書、請求書（手数料明細）、入金記録は証憑書類として最低7年間保管する必要があります（法人税法施行規則）。電子データでの保管も認められていますが、電子帳簿保存法の要件を満たす必要があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">
                印紙税について
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの契約書は「債権譲渡契約書」に該当し、印紙税の課税対象となります。契約金額に応じた収入印紙の貼付が必要です（1万円以上10万円以下：200円、10万円超50万円以下：400円など）。電子契約の場合は印紙税がかかりません。
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">
              税理士への相談を推奨
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              ファクタリングの会計処理は、契約内容や利用頻度、事業の規模によって最適な処理方法が異なります。特に初めてファクタリングを利用する場合は、顧問税理士や会計事務所に相談し、自社に適した仕訳方法を確認することをおすすめします。正確な会計処理は、適切な税務申告と経営判断の基盤となります。
            </p>
          </div>
        </section>

        {/* ── 消費税の扱いと決算期末の注意点 ─── */}
        <section className="mb-16">
          <h3 className="mb-6 text-lg font-bold text-text-main md:text-xl">
            消費税の扱いと決算期末の注意点
          </h3>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">ファクタリング手数料は非課税取引</h3>
              <p className="leading-relaxed text-text-light">
                ファクタリングの手数料は、金融商品の売買（債権の譲渡）に該当するため消費税は非課税です。仕訳上も「売上債権売却損」として非課税取引で処理します。消費税の申告時に課税売上に含めないよう注意しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">消費税を上乗せする業者に注意</h3>
              <p className="leading-relaxed text-text-light">
                ファクタリング手数料に消費税を上乗せしてくる業者は、法的に問題がある可能性があります。非課税取引であるにもかかわらず消費税を請求する行為は不当な請求です。契約前に手数料の内訳をしっかり確認しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">決算期末をまたぐ場合の注意</h3>
              <p className="leading-relaxed text-text-light">
                ファクタリングで売掛債権を譲渡した場合、決算期末をまたいでまだ入金されていなくても、譲渡時点で売上債権売却損が発生し課税対象となります。期末にファクタリングを利用する場合は、決算への影響を事前に確認しておきましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">税理士への事前相談を推奨</h3>
              <p className="leading-relaxed text-text-light">
                特に初めてファクタリングを利用する場合は、顧問税理士や会計事務所に事前相談することを強く推奨します。契約内容や利用頻度によって最適な会計処理が異なるため、専門家のアドバイスを受けることで正確な税務申告が可能になります。
              </p>
            </div>
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
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">
                手数料を安くする5つのコツも紹介
              </p>
            </Link>
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
              href="/articles/vs-bank-loan/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリング vs 銀行融資</p>
              <p className="mt-1 text-sm text-text-light">
                メリット・デメリットを徹底比較
              </p>
            </Link>
            <Link
              href="/articles/is-it-legal/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングは違法？</p>
              <p className="mt-1 text-sm text-text-light">
                安全な利用方法と悪徳業者の見分け方
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
            会計処理を理解したら、手数料が安く使いやすいファクタリング会社を比較してみましょう。15社の条件を徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
