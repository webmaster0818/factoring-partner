import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング手数料は経費になる？勘定科目と損金算入の解説",
  description:
    "ファクタリング手数料が経費（損金）として認められるかを解説。正しい勘定科目（売上債権売却損・支払手数料）の選び方、法人税・所得税での損金算入ルール、消費税の扱い、仕訳例まで詳しく紹介。経理担当者必見です。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/expense/",
  },
  openGraph: {
    title: "ファクタリング手数料は経費になる？勘定科目と損金算入の解説",
    description:
      "ファクタリング手数料の経費計上方法。勘定科目と損金算入ルールを解説。",
    url: "https://factoring-partner.pages.dev/articles/expense/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const accountOptions = [
  {
    name: "売上債権売却損",
    category: "営業外費用",
    description: "最も一般的な勘定科目です。売掛金（売上債権）を額面より安く売却した際の差額を計上します。ファクタリングの本質は「債権の売却」であるため、この科目が最も適切です。",
    merit: "取引の実態を正確に反映しており、税務上も問題ありません。",
  },
  {
    name: "支払手数料",
    category: "販売費及び一般管理費",
    description: "ファクタリングの手数料を「サービスの利用料」として捉える場合に使用します。小規模事業者やフリーランスで、勘定科目を簡潔にしたい場合に選ばれることがあります。",
    merit: "わかりやすく、経理処理が簡単です。",
  },
  {
    name: "割引料",
    category: "営業外費用",
    description: "手形割引に準じた処理として「割引料」を使用するケースもあります。ただし、ファクタリングと手形割引は法的に異なる取引であるため、厳密にはこの科目は適切ではないとの意見もあります。",
    merit: "手形割引の経験がある経理担当者にはなじみやすいです。",
  },
];

const faqs = [
  {
    question: "ファクタリング手数料は経費（損金）として認められますか？",
    answer:
      "はい、ファクタリングの手数料は事業上の経費として認められます。法人の場合は法人税法上の損金として、個人事業主の場合は所得税法上の必要経費として計上できます。勘定科目は「売上債権売却損」または「支払手数料」を使用します。",
  },
  {
    question: "勘定科目は「売上債権売却損」と「支払手数料」のどちらが正しいですか？",
    answer:
      "どちらも認められていますが、「売上債権売却損」のほうがファクタリングの取引実態（債権の売却）を正確に反映しているため推奨されます。ただし、すでに「支払手数料」で処理している場合は、一貫性を保つためにそのまま継続して構いません。年度途中での勘定科目の変更は避けましょう。",
  },
  {
    question: "ファクタリング手数料に消費税はかかりますか？",
    answer:
      "ファクタリングの手数料には消費税はかかりません。金銭債権の譲渡は消費税法上の非課税取引に該当します（消費税法第6条、別表第一第2号）。そのため、ファクタリング会社から提示される手数料額に消費税は含まれていません。",
  },
  {
    question: "ファクタリング手数料が高額な場合、税務署から指摘されることはありますか？",
    answer:
      "ファクタリング手数料が事業の売上や利益に対して著しく高額な場合、税務調査で「経済的合理性」を問われる可能性があります。ファクタリングを利用した理由（緊急の資金需要、銀行融資が間に合わなかった等）を説明できるようにしておくと安心です。契約書や取引の経緯を記録・保管しておきましょう。",
  },
  {
    question: "ファクタリング手数料を分割して計上することはできますか？",
    answer:
      "ファクタリングの手数料は、売掛債権を売却した時点（契約締結時）で全額を経費計上するのが原則です。分割して計上（繰延べ処理）することは通常認められません。これは、ファクタリングが一時点で完結する取引であるためです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリング手数料は経費になる？勘定科目と損金算入の解説",
  description: "ファクタリング手数料の経費計上方法。勘定科目と損金算入ルールを解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/expense/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "手数料の経費計上", item: "https://factoring-partner.pages.dev/articles/expense/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ExpensePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "手数料の経費計上" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">会計・税務ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング手数料は経費になる？
            <br className="hidden md:block" />
            勘定科目と損金算入の解説
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリング手数料の正しい経費計上方法を解説。勘定科目の選び方から法人税・所得税の損金算入ルールまで。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#conclusion" className="hover:underline">1. 結論：手数料は経費になる</a></li>
            <li><a href="#accounts" className="hover:underline">2. 勘定科目の選択肢</a></li>
            <li><a href="#corporate" className="hover:underline">3. 法人税での損金算入</a></li>
            <li><a href="#individual" className="hover:underline">4. 所得税での必要経費</a></li>
            <li><a href="#consumption-tax" className="hover:underline">5. 消費税の扱い</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 結論 ─── */}
        <section id="conclusion" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">結論：手数料は経費になる</h2>
          <div className="rounded-lg border-2 border-secondary bg-teal-50 p-6">
            <p className="text-lg font-bold text-secondary">ファクタリングの手数料は、法人・個人事業主ともに経費（損金・必要経費）として認められます。</p>
            <p className="mt-3 leading-relaxed text-text-light">
              ファクタリングは売掛債権の売却取引であり、手数料は「売掛金の額面と実際に受け取る金額の差額」に相当します。この差額は事業上の費用として経費に算入でき、課税所得から控除されます。
            </p>
          </div>
        </section>

        {/* ── 勘定科目 ─── */}
        <section id="accounts" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">勘定科目の選択肢</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリング手数料に使用できる主な勘定科目を3つ紹介します。</p>
          <div className="space-y-4">
            {accountOptions.map((item) => (
              <div key={item.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-bold text-primary">{item.name}</h3>
                  <span className="rounded bg-section-bg px-2 py-0.5 text-xs font-semibold text-text-light">{item.category}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-light">{item.description}</p>
                <p className="mt-2 text-sm text-text-light"><strong className="text-secondary">ポイント：</strong>{item.merit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 法人税 ─── */}
        <section id="corporate" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">法人税での損金算入</h2>
          <p className="mb-6 leading-relaxed text-text-light">法人がファクタリングを利用した場合の税務処理について解説します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">損金算入のタイミング</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料は、売掛債権の譲渡契約が締結された事業年度の損金として算入します。入金のタイミングではなく、契約の成立時点が基準です。決算期をまたぐ場合は、契約日が属する事業年度の損金となります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">損益計算書への計上</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料は「営業外費用」の「売上債権売却損」として損益計算書に計上します。営業利益には影響しませんが、経常利益からは控除されます。法人税申告書の別表四（所得の金額の計算に関する明細書）での調整は通常不要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">税効果</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリング手数料が100万円で法人税実効税率が30%の場合、実質的な手数料負担は70万円（100万円×（1-30%））となります。経費計上による節税効果を含めたコスト計算を行うと、ファクタリングの実質コストをより正確に把握できます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 所得税 ─── */}
        <section id="individual" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">所得税での必要経費</h2>
          <p className="mb-6 leading-relaxed text-text-light">個人事業主がファクタリングを利用した場合の税務処理について解説します。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-4 leading-relaxed text-text-light">
              個人事業主の場合、ファクタリングの手数料は所得税法第37条の「必要経費」として認められます。事業所得の計算上、売上から差し引くことができます。
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span>青色申告：青色申告決算書の損益計算書に「売上債権売却損」として計上</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span>白色申告：収支内訳書の「その他の経費」に「売上債権売却損」として計上</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span>確定申告書B：事業所得の計算に反映し、所得税を軽減</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 消費税 ─── */}
        <section id="consumption-tax" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">消費税の扱い</h2>
          <div className="rounded-lg border-2 border-primary bg-primary-light p-6">
            <p className="font-bold text-primary">ファクタリングの手数料は消費税の非課税取引です。</p>
            <p className="mt-3 text-sm leading-relaxed text-text-light">
              消費税法第6条および別表第一第2号により、金銭債権の譲渡は非課税取引に該当します。そのため、ファクタリングの手数料に消費税は課されません。消費税の申告において、ファクタリング手数料を課税仕入れとして仕入税額控除の対象にすることはできません。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-light">
              なお、課税売上割合の計算においては、金銭債権の譲渡は非課税売上として分母に5%のみが算入されます（消費税法施行令第48条）。
            </p>
          </div>
        </section>

        {/* ── 仕訳例 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリング手数料の仕訳例</h2>
          <p className="mb-6 leading-relaxed text-text-light">売掛金100万円を手数料10%（10万円）でファクタリングした場合の仕訳例を紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">売掛金売却時の仕訳</h3>
              <div className="mb-3 grid gap-2 md:grid-cols-2">
                <div className="rounded bg-section-bg p-3">
                  <p className="text-xs font-semibold text-text-light">借方（左）</p>
                  <p className="mt-1 text-sm font-semibold text-text-main">普通預金 900,000円</p>
                  <p className="mt-1 text-sm font-semibold text-text-main">売上債権売却損 100,000円</p>
                </div>
                <div className="rounded bg-section-bg p-3">
                  <p className="text-xs font-semibold text-text-light">貸方（右）</p>
                  <p className="mt-1 text-sm font-semibold text-text-main">売掛金 1,000,000円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">売掛金100万円を売却し、手数料10万円を差し引いた90万円が入金されます。手数料10万円は「売上債権売却損」として営業外費用に計上され、経費（損金）として認められます。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">「支払手数料」を使う場合の仕訳</h3>
              <div className="mb-3 grid gap-2 md:grid-cols-2">
                <div className="rounded bg-section-bg p-3">
                  <p className="text-xs font-semibold text-text-light">借方（左）</p>
                  <p className="mt-1 text-sm font-semibold text-text-main">普通預金 900,000円</p>
                  <p className="mt-1 text-sm font-semibold text-text-main">支払手数料 100,000円</p>
                </div>
                <div className="rounded bg-section-bg p-3">
                  <p className="text-xs font-semibold text-text-light">貸方（右）</p>
                  <p className="mt-1 text-sm font-semibold text-text-main">売掛金 1,000,000円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">「支払手数料」を使用する場合も経費として認められます。ただし、「支払手数料」は販管費に計上されるため、営業利益に影響します。</p>
            </div>
          </div>
        </section>

        {/* ── 経費計上による節税効果のシミュレーション ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">経費計上による節税効果のシミュレーション</h2>
          <p className="mb-6 leading-relaxed text-text-light">ファクタリング手数料を経費計上した場合の節税効果をシミュレーションします。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-right">個人事業主（税率20%）</th>
                  <th className="border border-primary p-3 text-right">法人（実効税率30%）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">ファクタリング手数料</td>
                  <td className="border border-border p-3 text-right">100,000円</td>
                  <td className="border border-border p-3 text-right">100,000円</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">節税額（手数料×税率）</td>
                  <td className="border border-border p-3 text-right">20,000円</td>
                  <td className="border border-border p-3 text-right">30,000円</td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-border p-3">実質的な手数料負担</td>
                  <td className="border border-border p-3 text-right">80,000円</td>
                  <td className="border border-border p-3 text-right">70,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ファクタリングの手数料を経費計上することで、税率分だけ実質的な負担が軽減されます。法人のほうが税率が高いため節税効果が大きくなります。ファクタリングのコストを評価する際は、この節税効果も含めて判断しましょう。
          </p>
        </section>

        {/* ── 会計ソフトでの処理方法 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">会計ソフトでの処理方法</h2>
          <p className="mb-6 leading-relaxed text-text-light">主要な会計ソフトでファクタリングの手数料を処理する際のポイントを解説します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">freee（フリー）</h3>
              <p className="text-sm leading-relaxed text-text-light">freeeでは勘定科目に「売上債権売却損」がデフォルトで用意されていない場合があります。「設定」→「勘定科目の追加」から新たに作成するか、「支払手数料」で代用します。消費税区分は「非課税仕入」に設定してください。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">マネーフォワード クラウド</h3>
              <p className="text-sm leading-relaxed text-text-light">マネーフォワードでは「勘定科目の追加」から「売上債権売却損」を営業外費用として新規作成できます。自動仕訳ルールを設定しておくと、ファクタリング会社からの入金を自動で仕訳できます。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">弥生会計</h3>
              <p className="text-sm leading-relaxed text-text-light">弥生会計では「科目設定」から「売上債権売却損」を営業外費用の区分で新規作成します。仕訳入力時に消費税の税区分を「非課税仕入」に設定してください。振替伝票を使うと複合仕訳の入力がスムーズです。</p>
            </div>
          </div>
        </section>

        {/* ── FAQ ─── */}
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

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/tax-return/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">確定申告ガイド</p>
              <p className="mt-1 text-sm text-text-light">仕訳方法と申告書への記載</p>
            </Link>
            <Link href="/articles/accounting/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングの会計処理</p>
              <p className="mt-1 text-sm text-text-light">仕訳と勘定科目の完全ガイド</p>
            </Link>
            <Link href="/articles/consumption-tax/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">消費税の取り扱い</p>
              <p className="mt-1 text-sm text-text-light">非課税取引の詳細を解説</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くするコツ</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">手数料が安いファクタリング会社を見つける</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">手数料は経費になるとはいえ、安いほうがお得。おすすめ会社を手数料で比較できます。</p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
