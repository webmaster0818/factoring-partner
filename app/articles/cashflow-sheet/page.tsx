import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリングの資金繰り表への反映方法｜経理処理ガイド",
  description:
    "ファクタリングを利用した場合の資金繰り表への反映方法を解説。キャッシュフロー計算書との違い、2社間・3社間別の記載例、資金繰り予測への活用法まで経理担当者向けに詳しく紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/cashflow-sheet/",
  },
  openGraph: {
    title: "ファクタリングの資金繰り表への反映方法｜経理処理ガイド",
    description: "ファクタリング利用時の資金繰り表の記載方法。2社間・3社間別に解説。",
    url: "https://factoring-partner.pages.dev/articles/cashflow-sheet/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const reflectionSteps = [
  {
    title: "ファクタリング入金の記載",
    description: "ファクタリング会社から買取代金が入金されたタイミングで「その他の収入」または「財務収入」として資金繰り表に記載します。通常の売掛金回収とは区別して記載することで、実態を正確に把握できます。",
    example: "（例）売掛金100万円を手数料10%でファクタリング → 入金額90万円を「ファクタリング入金」として記載",
  },
  {
    title: "手数料の記載",
    description: "ファクタリング手数料は「その他の支出」または「財務支出」として記載します。売掛金の額面と実際の入金額の差額が手数料に相当します。",
    example: "（例）手数料10万円を「ファクタリング手数料」として支出に記載",
  },
  {
    title: "売掛金回収予定の修正",
    description: "ファクタリングに出した売掛金は、当初の回収予定日の「売掛金回収」から削除します。この修正を忘れると、資金が二重計上されてしまうため注意が必要です。",
    example: "（例）翌月末に予定していた売掛金100万円の回収を削除",
  },
  {
    title: "2社間の場合：売掛先からの入金と送金を追加",
    description: "2社間ファクタリングでは、売掛先からの入金（一時預かり）とファクタリング会社への送金を追加で記載します。実際の資金移動を正確に反映するためです。",
    example: "（例）売掛先から100万円入金 → ファクタリング会社に100万円送金（相殺で資金影響なし）",
  },
];

const faqs = [
  {
    question: "ファクタリングの入金は資金繰り表のどこに記載しますか？",
    answer: "ファクタリングの入金は「営業収入」ではなく「その他の収入」または「財務収入」に記載するのが一般的です。通常の売掛金回収と区別することで、営業活動による資金の動きを正確に把握できます。ただし、企業の会計方針によっては「売掛金回収」に含める場合もあります。",
  },
  {
    question: "資金繰り表とキャッシュフロー計算書は何が違いますか？",
    answer: "資金繰り表は将来の資金の入出金を予測する「計画表」であり、キャッシュフロー計算書は過去の資金の流れを記録する「実績表」です。資金繰り表はファクタリングの利用を事前に計画に組み込むために使い、キャッシュフロー計算書は実際に利用した結果を記録するために使います。",
  },
  {
    question: "ファクタリングを利用すると資金繰り表上の資金が増えますか？",
    answer: "短期的にはファクタリングの入金で資金が増えますが、当初予定していた売掛金の回収がなくなるため、トータルでは手数料分だけ資金が減少します。資金繰り表には入金の増加と売掛金回収の削除を両方反映し、手数料コストを含めた正確な資金計画を立てることが重要です。",
  },
  {
    question: "毎月ファクタリングを利用する場合、資金繰り表はどう管理しますか？",
    answer: "毎月利用する場合は、資金繰り表にファクタリングの入出金を毎月の定例項目として組み込みましょう。手数料の累計コストも月次で管理し、年間の手数料が利益を圧迫していないかをモニタリングすることが重要です。恒常的な利用は根本的な資金繰り改善も並行して検討してください。",
  },
  {
    question: "ファクタリングの利用を経営判断に活用するには？",
    answer: "資金繰り表にファクタリングの有無を「シナリオ分析」として組み込むと、経営判断に活用できます。「ファクタリングを利用した場合」と「利用しなかった場合」の2パターンを比較し、手数料コストを含めたメリット・デメリットを可視化しましょう。これにより、ファクタリングの利用が経済的合理性を持つかを客観的に判断できます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリングの資金繰り表への反映方法｜経理処理ガイド",
  description: "ファクタリング利用時の資金繰り表の記載方法。2社間・3社間別に解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/cashflow-sheet/" },
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
    { "@type": "ListItem", position: 3, name: "資金繰り表への反映", item: "https://factoring-partner.pages.dev/articles/cashflow-sheet/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function CashflowSheetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "資金繰り表への反映" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">会計・経理ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングの資金繰り表への反映方法
            <br className="hidden md:block" />
            経理処理ガイド
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングを利用した場合の資金繰り表への正しい記載方法を、2社間・3社間別に解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#why" className="hover:underline">1. なぜ資金繰り表への反映が重要か</a></li>
            <li><a href="#steps" className="hover:underline">2. 反映方法4ステップ</a></li>
            <li><a href="#example" className="hover:underline">3. 資金繰り表の記載例</a></li>
            <li><a href="#cf-diff" className="hover:underline">4. キャッシュフロー計算書との違い</a></li>
            <li><a href="#tips" className="hover:underline">5. 資金繰り改善のコツ</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        <section id="why" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">なぜ資金繰り表への反映が重要か</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングを利用すると資金の流れが通常とは異なるため、資金繰り表に正しく反映しないと以下の問題が発生します。
          </p>
          <div className="space-y-3">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-4">
              <p className="text-sm text-text-light"><strong className="text-accent">資金の二重計上：</strong>ファクタリングの入金と売掛金の回収を両方計上してしまうと、実際よりも資金が多く見える「過大計上」になります。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-4">
              <p className="text-sm text-text-light"><strong className="text-accent">手数料コストの見落とし：</strong>手数料を支出に計上しないと、利益が実態より多く見えてしまい、経営判断を誤るリスクがあります。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-4">
              <p className="text-sm text-text-light"><strong className="text-accent">資金ショートの予測が不正確に：</strong>正しい反映がないと、将来の資金残高の予測が狂い、予期しない資金ショートにつながります。</p>
            </div>
          </div>
        </section>

        <section id="steps" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">反映方法4ステップ</h2>
          <div className="space-y-6">
            {reflectionSteps.map((step, i) => (
              <div key={step.title} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-text-main">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">{step.description}</p>
                    <p className="mt-2 rounded bg-section-bg p-2 text-xs text-text-light">{step.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="example" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">資金繰り表の記載例</h2>
          <p className="mb-6 leading-relaxed text-text-light">売掛金100万円を手数料10%（10万円）で3社間ファクタリングした場合の資金繰り表の記載例です。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-right">ファクタリング利用前</th>
                  <th className="border border-primary p-3 text-right">ファクタリング利用後</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border p-3">売掛金回収（当月末予定）</td>
                  <td className="border border-border p-3 text-right">1,000,000円</td>
                  <td className="border border-border p-3 text-right">0円（削除）</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3">ファクタリング入金</td>
                  <td className="border border-border p-3 text-right">-</td>
                  <td className="border border-border p-3 text-right">900,000円</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3">ファクタリング手数料</td>
                  <td className="border border-border p-3 text-right">-</td>
                  <td className="border border-border p-3 text-right">-100,000円</td>
                </tr>
                <tr className="bg-section-bg font-semibold">
                  <td className="border border-border p-3">資金への影響</td>
                  <td className="border border-border p-3 text-right">+1,000,000円</td>
                  <td className="border border-border p-3 text-right">+900,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-text-light">入金タイミングが前倒しになる代わりに、手数料分（10万円）だけ総収入が減少します。このトレードオフを理解したうえで資金計画を立てましょう。</p>
        </section>

        <section id="cf-diff" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">キャッシュフロー計算書との違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-left">資金繰り表</th>
                  <th className="border border-primary p-3 text-left">キャッシュフロー計算書</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">目的</td>
                  <td className="border border-border p-3">将来の資金予測（計画）</td>
                  <td className="border border-border p-3">過去の資金の流れ（実績）</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">時間軸</td>
                  <td className="border border-border p-3">未来（1ヶ月〜1年先）</td>
                  <td className="border border-border p-3">過去（前期・前月）</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">ファクタリングの記載区分</td>
                  <td className="border border-border p-3">その他の収入/支出</td>
                  <td className="border border-border p-3">営業活動CF or 財務活動CF</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 2社間・3社間別の資金繰り表の違い ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">2社間・3社間別の資金繰り表への反映の違い</h2>
          <p className="mb-6 leading-relaxed text-text-light">2社間と3社間ファクタリングでは、資金の流れが異なるため資金繰り表への反映方法も異なります。</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">3社間ファクタリングの場合</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>ファクタリング入金：90万円を「その他の収入」に記載</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>手数料：10万円を「その他の支出」に記載</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>売掛金回収予定：100万円を削除</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>売掛先からの送金：なし（直接ファクタリング会社に支払い）</span></li>
              </ul>
              <p className="mt-3 text-xs text-text-light">3社間では売掛先が直接ファクタリング会社に支払うため、利用者の資金繰り表には売掛先からの入金・送金は記載しません。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">2社間ファクタリングの場合</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>ファクタリング入金：90万円を「その他の収入」に記載</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>手数料：10万円を「その他の支出」に記載</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>売掛金回収予定：100万円を「一時預かり」として記載</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>ファクタリング会社への送金：100万円を「その他の支出」に記載</span></li>
              </ul>
              <p className="mt-3 text-xs text-text-light">2社間では売掛先からの入金が一旦利用者の口座に入るため、その入金と送金の両方を資金繰り表に記載する必要があります。</p>
            </div>
          </div>
        </section>

        {/* ── Excel/スプレッドシートでのテンプレート ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">資金繰り表のテンプレート（ファクタリング対応版）</h2>
          <p className="mb-6 leading-relaxed text-text-light">ファクタリングの入出金を反映した資金繰り表のテンプレート構成を紹介します。ExcelやGoogleスプレッドシートで作成できます。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 font-bold text-primary">推奨する項目構成</h3>
            <div className="space-y-2 text-sm text-text-light">
              <p className="font-semibold text-text-main">【営業収入】</p>
              <p className="pl-4">- 売掛金回収（通常分）</p>
              <p className="pl-4">- 現金売上</p>
              <p className="font-semibold text-text-main mt-2">【その他の収入（財務）】</p>
              <p className="pl-4">- ファクタリング入金</p>
              <p className="pl-4">- 借入金入金</p>
              <p className="font-semibold text-text-main mt-2">【営業支出】</p>
              <p className="pl-4">- 仕入代金支払い</p>
              <p className="pl-4">- 人件費</p>
              <p className="pl-4">- その他経費</p>
              <p className="font-semibold text-text-main mt-2">【その他の支出（財務）】</p>
              <p className="pl-4">- ファクタリング手数料</p>
              <p className="pl-4">- ファクタリング会社への送金（2社間の場合）</p>
              <p className="pl-4">- 借入金返済</p>
              <p className="font-semibold text-text-main mt-2">【月末残高】</p>
              <p className="pl-4">- 前月繰越 + 収入合計 - 支出合計</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ファクタリング関連の入出金を営業収支と分けて記載することで、本業の資金繰り状況とファクタリングの影響を明確に区別できます。
          </p>
        </section>

        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">資金繰り改善のコツ</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">シナリオ分析を行う</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリング利用あり・なしの2パターンで資金繰り表を作成し、手数料コストと資金確保のメリットを比較しましょう。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">手数料の年間コストを可視化</h3>
              <p className="text-sm leading-relaxed text-text-light">月次のファクタリング手数料を累計で管理し、年間コストが利益を圧迫していないかをモニタリングします。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">恒常的な利用の原因を分析</h3>
              <p className="text-sm leading-relaxed text-text-light">毎月ファクタリングが必要な場合、入金サイトの交渉、経費削減、売上拡大など根本的な改善策を検討します。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">複数の資金調達手段を比較</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリング以外にも銀行融資やビジネスローンのコストと比較し、最もコストパフォーマンスの高い手段を選びます。</p>
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
            <Link href="/articles/accounting/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングの会計処理</p>
              <p className="mt-1 text-sm text-text-light">仕訳と勘定科目の完全ガイド</p>
            </Link>
            <Link href="/articles/cashflow-tips/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">資金繰り改善方法7選</p>
              <p className="mt-1 text-sm text-text-light">ファクタリング以外の選択肢も</p>
            </Link>
            <Link href="/articles/expense/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料は経費になる？</p>
              <p className="mt-1 text-sm text-text-light">勘定科目と損金算入の解説</p>
            </Link>
            <Link href="/articles/tax-return/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">確定申告ガイド</p>
              <p className="mt-1 text-sm text-text-light">個人事業主の仕訳と経費計上</p>
            </Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">ファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">手数料を抑えて資金繰りを改善。おすすめ会社を手数料・入金速度で比較できます。</p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
