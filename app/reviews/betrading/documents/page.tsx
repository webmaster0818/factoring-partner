import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ビートレーディングの必要書類と入金までの流れ｜最短2時間入金の手順",
  description:
    "ビートレーディングの必要書類（請求書・通帳コピー・本人確認書類など）と、申込から最短2時間入金までの4ステップを解説。書類準備のポイントとスムーズに入金を受けるコツをまとめました。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/reviews/betrading/documents/",
  },
  openGraph: {
    title:
      "ビートレーディングの必要書類と入金までの流れ｜最短2時間入金の手順",
    description:
      "ビートレーディングの必要書類と申込から入金までの流れを解説。書類が揃っていれば審査最短30分・入金最短2時間です。",
    url: "https://hyogo-shihoushoshi.jp/reviews/betrading/documents/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const documents = [
  {
    name: "売掛金の請求書",
    point:
      "買い取ってもらう売掛金の請求書。取引内容・金額・支払期日・売掛先の情報が明確に記載されているものを用意します。",
  },
  {
    name: "通帳のコピー",
    point:
      "売掛先からの入金実績を確認するための書類。対象の売掛先との取引が確認できる期間分を用意するとスムーズです。",
  },
  {
    name: "本人確認書類",
    point:
      "運転免許証などの本人確認書類。申込者本人の確認に使われます。",
  },
];

const steps = [
  {
    step: "1",
    title: "無料相談・申込",
    description: "Webフォームまたは電話で申込。必要情報を入力します。",
  },
  {
    step: "2",
    title: "必要書類の提出",
    description: "請求書・通帳コピー・本人確認書類などをオンラインで提出。",
  },
  {
    step: "3",
    title: "審査",
    description: "提出書類をもとに売掛先の信用調査を実施。最短30分で審査完了。",
  },
  {
    step: "4",
    title: "契約・入金",
    description: "審査通過後、契約を締結。最短2時間で指定口座に入金されます。",
  },
];

const prepTips = [
  {
    title: "請求書の記載内容を事前に確認する",
    detail:
      "金額・支払期日・売掛先名が曖昧な請求書は、審査で確認に時間がかかる原因になります。提出前に記載内容が正確か確認しましょう。",
  },
  {
    title: "通帳は入金実績がわかる状態で用意する",
    detail:
      "通帳コピーは売掛先からの入金実績を示す重要な書類です。対象の売掛先からの入金が確認できるページを含めて準備しておくと、審査がスムーズに進みやすくなります。",
  },
  {
    title: "データ化して即提出できるようにしておく",
    detail:
      "ビートレーディングはオンラインでの書類提出に対応しています。スマートフォンでの撮影やスキャンで事前にデータ化しておけば、申込から提出までの時間を短縮できます。",
  },
  {
    title: "急ぎの場合は電話で申し込む",
    detail:
      "電話対応は迅速との評判がある一方、メール返信が遅い場合があるという声も報告されています。当日中の入金を目指す場合は、電話で申し込み、書類提出のタイミングを直接確認するのが確実です。",
  },
];

const faqs = [
  {
    question: "ビートレーディングの必要書類は何ですか？",
    answer:
      "売掛金の請求書、通帳のコピー、本人確認書類などです。オンラインで提出でき、来店は不要です。案件によって追加書類を求められる場合があるため、正確な必要書類は申込時に確認してください。",
  },
  {
    question: "ビートレーディングは申込から入金までどれくらいかかりますか？",
    answer:
      "必要書類が揃っていれば審査は最短30分、入金は最短2時間です。ただし、書類の不備や審査状況によっては翌営業日以降になる場合もあります。急ぎの場合は事前に必要書類を確認し、電話で連絡することをおすすめします。",
  },
  {
    question: "決算書や事業計画書は必要ですか？",
    answer:
      "ビートレーディングの公式に案内されている基本の提出書類は、請求書・通帳コピー・本人確認書類などです。ただし、案件の内容や金額によっては追加の資料を求められる可能性があるため、詳細は申込時に確認してください。",
  },
  {
    question: "書類提出はオンラインで完結できますか？",
    answer:
      "はい、ビートレーディングは完全オンラインでの手続きに対応しており、書類はオンラインで提出できます。契約もクラウドサインを活用した電子契約を導入しているため、来店不要でスマートフォンからでも手続きが可能です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ビートレーディングの必要書類と入金までの流れ｜最短2時間入金の手順",
  description:
    "ビートレーディングの必要書類（請求書・通帳コピー・本人確認書類など）と申込から入金までの4ステップを解説します。",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  author: {
    "@type": "Person",
    name: "ファクタリングパートナー 編集部",
    url: "https://hyogo-shihoushoshi.jp/about/",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://hyogo-shihoushoshi.jp",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://hyogo-shihoushoshi.jp/reviews/betrading/documents/",
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

/* ── Component ────────────────────────────────────── */

export default function BetradingDocumentsPage() {
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

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "業者レビュー", href: "/reviews/" },
          { label: "ビートレーディング", href: "/reviews/betrading/" },
          { label: "必要書類・流れ" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            必要書類・流れ
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ビートレーディングの必要書類と
            <br className="hidden md:block" />
            入金までの流れ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            書類が揃っていれば審査最短30分・入金最短2時間。ビートレーディングで用意すべき書類と、申込から入金までの4ステップを解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            ビートレーディングの基本の必要書類は「売掛金の請求書」「通帳のコピー」「本人確認書類」などで、すべてオンラインで提出できます。流れは、申込→書類提出→審査（最短30分）→契約・入金（最短2時間）の4ステップです。決算書や事業計画書を前提としない書類構成のため、事前に請求書と通帳をデータ化しておけば、当日中の資金化も狙えます。
          </p>
          <p className="mt-3 text-sm text-primary">
            <Link href="/reviews/betrading/" className="hover:underline">ビートレーディングの総合レビューを見る</Link>
            {" ／ "}
            <a href="/ranking/" className="hover:underline">他社と条件で比較</a>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#documents" className="hover:underline">1. ビートレーディングの必要書類一覧</a></li>
            <li><a href="#prep" className="hover:underline">2. 書類準備のポイント4つ</a></li>
            <li><a href="#flow" className="hover:underline">3. 申込から入金までの4ステップ</a></li>
            <li><a href="#speed" className="hover:underline">4. 入金スピードの目安</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、必要書類などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 必要書類一覧 ─── */}
        <section id="documents" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ビートレーディングの必要書類一覧
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ビートレーディングで基本となる提出書類は次の3点です。いずれもオンラインで提出でき、来店の必要はありません。なお、案件の内容によっては追加書類を求められる場合があります。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold w-48">書類</th>
                  <th className="px-4 py-3 text-left font-semibold">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-section-bg" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-text-main">{doc.name}</td>
                    <td className="px-4 py-3 text-text-light">{doc.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ファクタリング全般の必要書類の考え方（契約方式による違いなど）は
            <Link href="/articles/required-documents/" className="text-primary underline hover:text-accent">ファクタリングの必要書類の解説記事</Link>
            で詳しくまとめています。
          </p>
        </section>

        {/* ── 書類準備のポイント ─── */}
        <section id="prep" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            書類準備のポイント4つ
          </h2>
          <div className="space-y-6">
            {prepTips.map((tip, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  {tip.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{tip.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 申込から入金までの流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            申込から入金までの4ステップ
          </h2>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-border bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-text-main">{s.title}</p>
                  <p className="mt-1 text-sm text-text-light">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            審査で何が見られるのか、通過のコツは
            <Link href="/reviews/betrading/shinsa/" className="text-primary underline hover:text-accent">ビートレーディングの審査は厳しい？通過のコツ</Link>
            で解説しています。
          </p>
        </section>

        {/* ── 入金スピード ─── */}
        <section id="speed" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            入金スピードの目安
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ビートレーディングの入金スピードは<strong className="text-text-main">最短2時間</strong>、審査は<strong className="text-text-main">最短30分</strong>です（いずれも必要書類が揃っている場合）。クラウドサインによる電子契約に対応しているため、契約のために来店や郵送を待つ必要がありません。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            ただし、書類の不備や審査状況によっては入金が翌営業日以降になる場合もあります。当日中の入金を目指すなら、「午前中に申込・書類提出を済ませる」「電話で急ぎである旨を伝える」のが現実的な進め方です。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">スピード入金のための3条件</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>請求書・通帳コピー・本人確認書類を申込前にデータ化しておく</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>営業時間内の早い時間帯に申し込む</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>急ぎの場合はメールではなく電話で連絡する</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-text-main hover:bg-section-bg">
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">Q</span>
                    {faq.question}
                  </span>
                  <span className="ml-4 transition-transform group-open:rotate-180">&#9660;</span>
                </summary>
                <div className="border-t border-border px-6 py-4">
                  <p className="text-sm leading-relaxed text-text-light">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── 関連記事 ─── */}
        <div className="bg-[#f7f9fc] border border-[#d4dbe6] rounded-lg p-5 my-8">
          <h3 className="text-base font-bold text-[#1e3a5f] mb-3">関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Link href="/articles/required-documents/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} ファクタリングの必要書類を徹底解説</Link>
            <Link href="/articles/instant-factoring/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} 即日ファクタリング10選</Link>
            <Link href="/reviews/betrading/shinsa/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} ビートレーディングの審査は厳しい？</Link>
            <Link href="/reviews/betrading/fee/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} ビートレーディングの手数料はいくら？</Link>
          </div>
        </div>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            ビートレーディングの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            書類が揃っていれば最短2時間で入金。オンライン完結で全国から相談できます。
          </p>
          <a
            href="https://betrading.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料見積もり
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/betrading/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料や審査を利用者の声で検証</p>
            </Link>
            <Link
              href="/reviews/betrading/shinsa/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの審査</p>
              <p className="mt-1 text-sm text-text-light">通過のコツと落ちたときの対処法</p>
            </Link>
            <Link
              href="/articles/weekend-factoring/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">土日・祝日に使えるファクタリングの探し方</p>
              <p className="mt-1 text-sm text-text-light">休日対応の可否と申込みの注意点</p>
            </Link>
            <Link
              href="/articles/instant-factoring/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">即日入金を狙う申込みのコツ</p>
              <p className="mt-1 text-sm text-text-light">申込み時間帯と書類準備で入金スピードは変わる</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">49社以上を徹底比較</p>
            </Link>
            <Link
              href="/diagnosis/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">無料診断ツール</p>
              <p className="mt-1 text-sm text-text-light">7つの質問であなたに合う会社を提案</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
