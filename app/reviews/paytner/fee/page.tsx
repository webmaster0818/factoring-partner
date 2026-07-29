import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ペイトナーの手数料はいくら？一律10%の実質コストと他社比較",
  description:
    "ペイトナーの手数料は一律10%（公式サイトにて2026年6月確認）。10万円の請求書なら9万円が入金される仕組みと実質コストの考え方、ラボル・FREENANCE・OLTAとの手数料比較、コストを抑える使い方を解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/paytner/fee/",
  },
  openGraph: {
    title:
      "ペイトナーの手数料はいくら？一律10%の実質コストと他社比較",
    description:
      "ペイトナーの手数料（一律10%）の実質コストと他社比較、コストを抑える使い方を解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/paytner/fee/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const feeTable = [
  { label: "手数料", value: "一律10%（公式サイトにて2026年6月確認）" },
  { label: "手数料の変動", value: "なし（金額・利用回数による変動なし）" },
  { label: "利用可能額", value: "初回：1万〜25万円 / 2回目以降：上限300万円" },
  { label: "契約形態", value: "2社間ファクタリング（売掛先への通知なし）" },
];

const comparisonData = [
  {
    name: "ペイトナー",
    fee: "一律10%",
    speed: "最短10分",
    amount: "1万円〜（上限300万円）",
  },
  {
    name: "ラボル",
    fee: "一律10%（税込）",
    speed: "最短30分",
    amount: "1万円〜",
  },
  {
    name: "FREENANCE",
    fee: "3%〜10%",
    speed: "最短即日",
    amount: "1万円〜",
  },
  {
    name: "OLTA",
    fee: "2%〜9%",
    speed: "最短即日",
    amount: "制限なし",
  },
];

const feeTips = [
  {
    title: "手数料10%と「間に合わせる価値」を天秤にかける",
    detail:
      "ペイトナーの強みは一律10%という明朗さと最短10分の入金スピードです。支払い期日や納税期限に間に合わせる必要がある場面ではこの速さに価値がありますが、数日待てる状況なら、変動型で下限の低い他社の見積もりと比較する余地があります。",
  },
  {
    title: "頻繁な利用は年間コストで考える",
    detail:
      "毎月30万円の請求書をファクタリングすると、手数料は月3万円・年間36万円になります。一時的なつなぎには便利でも、常態化するとコストが積み重なるため、資金繰りが改善したら銀行融資など他の調達手段への切り替えも検討しましょう。",
  },
  {
    title: "変動型の他社と相見積もりを取る",
    detail:
      "ペイトナーは一律10%で見積もりによる変動がない分、交渉の余地もありません。売掛先の信用力が高い案件であれば、FREENANCE（3%〜10%）やOLTA（2%〜9%）など変動型の会社で10%を下回る提示を受けられる可能性があり、比較する価値があります。",
  },
  {
    title: "少額・短期の利用に絞る",
    detail:
      "一般に、ファクタリングの手数料は借入の金利と違って期間に比例しません。同じ10%でも支払期日まで残りわずかな請求書ほど、期間あたりのコストは割高になります。ペイトナーは1万円から使えるため、本当に必要な金額だけを資金化するのがコストを抑える基本です。",
  },
];

const faqs = [
  {
    question: "ペイトナーの手数料はいくらですか？",
    answer:
      "手数料は一律10%です（公式サイトにて2026年6月確認）。売掛金の額面から10%を差し引いた金額が入金されます。例えば10万円の請求書の場合、9万円が入金されます。金額や利用回数による手数料の変動はありません。",
  },
  {
    question: "手数料10%は高いですか？安いですか？",
    answer:
      "一概には言えません。当サイトの一般解説では2社間ファクタリングの手数料目安を8〜18%（会社により異なる）としており、一律10%はこの範囲内です。変動型の会社では条件次第で10%を下回ることもあれば上回ることもあるため、「事前に確定している」ことをどう評価するかがポイントです。",
  },
  {
    question: "手数料以外にかかる費用はありますか？",
    answer:
      "ペイトナーの手数料は一律10%で、見積もりによる変動はありません。手数料以外の費用（振込に関する費用など）の有無や最新の条件は、公式サイト・利用規約でご確認ください。一般論として、ファクタリングでは「手数料率」だけでなく実際の入金額で総コストを確認するのが基本です。",
  },
  {
    question: "利用額が大きくなると手数料は下がりますか？",
    answer:
      "下がりません。ペイトナーの手数料は金額・利用回数にかかわらず一律10%です。利用実績を積むと上限額（初回25万円→最大300万円）は引き上げられますが、手数料率は変わりません。手数料率の引き下げを重視する場合は、変動型の他社との比較をおすすめします。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ペイトナーの手数料はいくら？一律10%の実質コストと他社比較",
  description:
    "ペイトナーの手数料（一律10%）の実質コストの考え方と他社比較、コストを抑える使い方を解説します。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/paytner/fee/",
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

export default function PaytnerFeePage() {
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
          { label: "ペイトナー", href: "/reviews/paytner/" },
          { label: "手数料" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            手数料ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ペイトナーの手数料はいくら？
            <br className="hidden md:block" />
            一律10%の実質コストと他社比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            公式手数料は一律10%で変動なし。入金額の計算方法と実質コストの考え方、フリーランス向け他社との比較、コストを抑える使い方を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            ペイトナーの手数料は一律10%（公式サイトにて2026年6月確認）で、金額・利用回数による変動はありません。10万円の請求書なら9万円が入金されるという明快な計算で、見積もりを待たずにコストが確定するのが最大の特徴です。一方で交渉による引き下げ余地はないため、売掛先の信用力が高く数日待てる案件なら、変動型のFREENANCE（3%〜10%）やOLTA（2%〜9%）と比較する価値があります。
          </p>
          <p className="mt-3 text-sm text-primary">
            <Link href="/reviews/paytner/" className="hover:underline">ペイトナーの総合レビューを見る</Link>
            {" ／ "}
            <a href="/simulator/" className="hover:underline">手数料シミュレーターで概算する</a>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#fee" className="hover:underline">1. ペイトナーの手数料（公式確認値）</a></li>
            <li><a href="#real-cost" className="hover:underline">2. 実質コストの考え方（入金額の計算）</a></li>
            <li><a href="#comparison" className="hover:underline">3. 他社との手数料比較</a></li>
            <li><a href="#tips" className="hover:underline">4. コストを抑える使い方4つ</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、手数料などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 手数料 ─── */}
        <section id="fee" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ペイトナーの手数料（公式確認値）
          </h2>
          <div className="mb-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {feeTable.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-section-bg" : "bg-white"}>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-40">
                      {item.label}
                    </th>
                    <td className="px-4 py-3 text-text-light">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mb-4 leading-relaxed text-text-light">
            多くのファクタリング会社が「◯%〜◯%」のレンジで案件ごとに査定するのに対し、ペイトナーは<strong className="text-text-main">一律10%で固定</strong>です。見積もりの結果を待たずにコストが確定するため、資金計画が立てやすいのが特徴です。
          </p>
          <p className="leading-relaxed text-text-light">
            手数料がどのような要素で決まるのか、業界全体の仕組みは
            <Link href="/articles/fee-breakdown/" className="text-primary underline hover:text-accent">ファクタリング手数料の内訳の解説記事</Link>
            をご覧ください。
          </p>
        </section>

        {/* ── 実質コスト ─── */}
        <section id="real-cost" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            実質コストの考え方（入金額の計算）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ペイトナーの入金額の計算はシンプルで、<strong className="text-text-main">売掛金の額面から10%を差し引いた金額</strong>が入金されます。
          </p>
          <div className="mb-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">請求書の額面</th>
                  <th className="px-4 py-3 text-left font-semibold">手数料（10%）</th>
                  <th className="px-4 py-3 text-left font-semibold">入金額</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-section-bg">
                  <td className="px-4 py-3">10万円</td>
                  <td className="px-4 py-3">1万円</td>
                  <td className="px-4 py-3 font-semibold text-text-main">9万円</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">25万円（初回上限）</td>
                  <td className="px-4 py-3">2万5,000円</td>
                  <td className="px-4 py-3 font-semibold text-text-main">22万5,000円</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="px-4 py-3">100万円（2回目以降）</td>
                  <td className="px-4 py-3">10万円</td>
                  <td className="px-4 py-3 font-semibold text-text-main">90万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 leading-relaxed text-text-light">
            一般論として、ファクタリングのコストを比較する際は手数料率だけでなく「実際にいくら入金されるか」で見るのが基本です。会社によっては掛け目（額面のうち買取対象とする割合）や振込手数料・事務手数料などが別途かかる場合があり、表面上の率と実質コストがずれることがあるためです。ペイトナーは一律10%と明快ですが、他社と比較する際はこの点も揃えて確認しましょう。
          </p>
          <p className="text-sm leading-relaxed text-text-light">
            金額を変えて他社レンジとの目安を比べたい方は
            <Link href="/simulator/" className="text-primary underline hover:text-accent">手数料シミュレーター</Link>
            が便利です。
          </p>
        </section>

        {/* ── 他社比較 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            他社との手数料比較
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ペイトナーと、フリーランス・個人事業主が利用しやすい主要3社の手数料を比較しました（各社とも公式サイトにて2026年6月確認の値。FREENANCEはフリーナンス口座を受取先に設定しない場合一律10%）。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">サービス名</th>
                  <th className="px-4 py-3 text-left font-semibold">手数料</th>
                  <th className="px-4 py-3 text-left font-semibold">入金速度</th>
                  <th className="px-4 py-3 text-left font-semibold">買取額</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-section-bg" : "bg-white"} ${i === 0 ? "font-semibold text-primary" : ""}`}>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.fee}</td>
                    <td className="px-4 py-3">{item.speed}</td>
                    <td className="px-4 py-3">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            固定型（ペイトナー・ラボル）は事前にコストが確定する安心感、変動型（FREENANCE・OLTA）は条件次第で10%を下回る可能性がそれぞれの強みです。下限の数字は好条件時の値であり、誰にでも適用されるわけではない点に注意してください。より多くの会社は
            <Link href="/ranking/" className="text-primary underline hover:text-accent">ファクタリング会社おすすめランキング</Link>
            で比較できます。
          </p>
        </section>

        {/* ── コストを抑える使い方 ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ペイトナーのコストを抑える使い方4つ
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ペイトナーは一律10%のため「手数料の交渉で下げる」ことはできません。コストを抑えるポイントは、使い方・使いどころの選び方にあります。
          </p>
          <div className="space-y-6">
            {feeTips.map((tip, i) => (
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
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            変動型の会社を使う場合の交渉の進め方は
            <Link href="/articles/fee-negotiation/" className="text-primary underline hover:text-accent">ファクタリング手数料の交渉術の解説記事</Link>
            が参考になります。
          </p>
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
            <Link href="/articles/fee-breakdown/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} ファクタリング手数料の内訳を解説</Link>
            <Link href="/articles/fee-negotiation/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} ファクタリング手数料の交渉術</Link>
            <Link href="/simulator/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} 手数料シミュレーター（無料）</Link>
            <Link href="/reviews/paytner/documents/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} ペイトナーの必要書類と入金までの流れ</Link>
          </div>
        </div>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            ペイトナーの無料登録はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料は一律10%で事前に確定。最短10分入金のファクタリングを無料で始められます。
          </p>
          <a
            href="https://paytner.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料登録
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/paytner/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ペイトナーの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">最短10分のフリーランス向けファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/paytner/documents/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ペイトナーの必要書類</p>
              <p className="mt-1 text-sm text-text-light">入金までの流れを4ステップで解説</p>
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
