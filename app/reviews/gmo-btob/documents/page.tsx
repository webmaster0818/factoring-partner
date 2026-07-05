import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "GMO BtoB早払いの必要書類と入金までの流れ｜最短2営業日",
  description:
    "GMO BtoB早払いの必要書類（請求書・決算書・入出金明細・登記簿謄本・本人確認書類）と、Web申込から最短2営業日での入金までの流れを解説。完全オンライン・ペーパーレスで完結する手続きのポイントを紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/gmo-btob/documents/",
  },
  openGraph: {
    title: "GMO BtoB早払いの必要書類と入金までの流れ｜最短2営業日",
    description:
      "GMO BtoB早払いの必要書類5点と申込から入金までの流れを公式情報ベースで解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/gmo-btob/documents/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const documents = [
  { name: "請求書", note: "売掛先に発行済みのもの。PDF形式推奨" },
  { name: "決算書", note: "直近の決算内容がわかるもの" },
  { name: "銀行口座の入出金明細", note: "直近数ヶ月分" },
  { name: "登記簿謄本", note: "法人確認用" },
  { name: "代表者の本人確認書類", note: "運転免許証等" },
];

const steps = [
  {
    step: "1",
    title: "Web申込・会員登録",
    description:
      "公式サイトから必要情報を入力して申込。法人情報と売掛金の概要を登録します。",
  },
  {
    step: "2",
    title: "書類アップロード",
    description:
      "請求書・決算書・入出金明細等の必要書類をWeb上でアップロードします。紙書類の郵送は不要です。",
  },
  {
    step: "3",
    title: "審査・買取条件提示",
    description:
      "GMOペイメントゲートウェイが審査を実施。手数料・買取条件が提示されます。",
  },
  {
    step: "4",
    title: "電子契約・入金",
    description:
      "条件に合意後、電子契約を締結。最短2営業日で指定口座に入金されます。",
  },
];

const prepTips = [
  {
    title: "すべての書類を事前にPDF化しておく",
    detail:
      "GMO BtoB早払いは完全オンラインのアップロード方式で、紙書類の郵送は不要です。決算書や登記簿謄本など枚数の多い書類も、申込前にまとめてPDF化しておくと手続きが一度で済みます。",
  },
  {
    title: "入出金明細は「直近数ヶ月分」を通しで用意する",
    detail:
      "提出するのは直近数ヶ月分の入出金明細です。月をまたいで抜けがあると取引実態の確認に時間がかかる可能性があるため、連続した期間の明細をそろえましょう。ネットバンキングの明細ダウンロード機能を使うと効率的です。",
  },
  {
    title: "入金希望日から逆算して申し込む",
    detail:
      "入金は契約後最短2営業日で、即日対応ではありません。支払い期日が迫ってからでは間に合わないおそれがあるため、審査・契約の時間も含めて数営業日の余裕を持って申し込むのが安全です。",
  },
];

const faqs = [
  {
    question: "GMO BtoB早払いの必要書類は何ですか？",
    answer:
      "事前に用意するのは、請求書（発行済み・PDF推奨）、決算書（直近）、銀行口座の入出金明細（直近数ヶ月分）、登記簿謄本、代表者の本人確認書類の5点です。すべてWeb上でアップロードする形式のため、郵送は不要です。なお、審査の状況により追加書類を求められる可能性はあるため、詳細は公式サイトでご確認ください。",
  },
  {
    question: "書類の提出は郵送ですか？オンラインですか？",
    answer:
      "完全オンラインです。申込から書類アップロード、審査、電子契約、入金まですべてWeb上で完結し、来店や紙書類の郵送は不要です。事前にPDF化しておくとスムーズに進められます。",
  },
  {
    question: "申込から入金までどのくらいかかりますか？",
    answer:
      "電子契約の締結後、最短2営業日で指定口座に入金されます。ただし申込〜審査〜条件提示の時間が別途かかるため、全体では余裕を持ったスケジュールが必要です。即日入金には対応していないため、急ぎの場合は最短2時間対応のビートレーディングやQuQuMoなどの利用も検討しましょう。",
  },
  {
    question: "決算書が赤字でも申し込めますか？",
    answer:
      "赤字決算だと申し込めないという公式案内はありません。一般に、ファクタリングの審査では申込企業の業績よりも売掛先の信用力が重視されるといわれているため、赤字でも売掛先次第で利用できる可能性があります。ただし個別の審査結果は書類提出後の判断となります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "GMO BtoB早払いの必要書類と入金までの流れ｜最短2営業日",
  description:
    "GMO BtoB早払いの必要書類5点と申込から入金までの流れを公式情報ベースで解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/gmo-btob/documents/",
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
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://hyogo-shihoushoshi.jp/" },
    { "@type": "ListItem", position: 2, name: "業者レビュー", item: "https://hyogo-shihoushoshi.jp/reviews/" },
    { "@type": "ListItem", position: 3, name: "GMO BtoB早払い", item: "https://hyogo-shihoushoshi.jp/reviews/gmo-btob/" },
    { "@type": "ListItem", position: 4, name: "必要書類・流れ" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function GmoBtobDocumentsPage() {
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
          { label: "業者レビュー", href: "/reviews/" },
          { label: "GMO BtoB早払い", href: "/reviews/gmo-btob/" },
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
            GMO BtoB早払いの必要書類と
            <br className="hidden md:block" />
            入金までの流れ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            完全オンライン・ペーパーレスで完結するGMO BtoB早払い。事前に揃える書類5点と、Web申込から最短2営業日入金までのステップを整理します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            GMO BtoB早払いで事前に用意するのは「請求書・決算書・入出金明細（直近数ヶ月分）・登記簿謄本・代表者の本人確認書類」の5点です。提出はすべてWebアップロードで、来店・郵送は不要。流れは「Web申込→書類アップロード→審査・条件提示→電子契約」の4ステップで、契約後最短2営業日で入金されます。即日対応ではないため、入金希望日から逆算し、書類をPDF化したうえで余裕を持って申し込むのがポイントです。
          </p>
          <p className="mt-3 text-sm">
            <Link href="/reviews/gmo-btob/" className="text-primary hover:underline">GMO BtoB早払いの総合レビューを見る</Link>
            <span className="mx-2 text-text-light">／</span>
            <Link href="/ranking/" className="text-primary hover:underline">他社と条件で比較する</Link>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#documents" className="hover:underline">1. GMO BtoB早払いの必要書類5点</a></li>
            <li><a href="#prep" className="hover:underline">2. 書類準備のポイント</a></li>
            <li><a href="#flow" className="hover:underline">3. 申込から入金までの流れ（4ステップ）</a></li>
            <li><a href="#speed" className="hover:underline">4. 入金スピードの目安</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 必要書類 ─── */}
        <section id="documents" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            GMO BtoB早払いの必要書類5点
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            法人向けサービスのため、請求書のみで申請できる簡易型サービスと比べると書類は多めですが、その分審査後には請求書買取1%〜10%（公式サイトにて2026年6月確認）の範囲で条件が提示される仕組みです。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">書類</th>
                  <th className="px-4 py-3 text-left font-semibold">備考</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-section-bg" : "bg-white"}>
                    <td className="whitespace-nowrap px-4 py-3 font-semibold text-text-main">{doc.name}</td>
                    <td className="px-4 py-3 text-text-light">{doc.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ファクタリング各社の必要書類の一般的な違いは
            <Link href="/articles/required-documents/" className="mx-1 text-primary hover:underline">必要書類の解説記事</Link>
            で比較できます。
          </p>
        </section>

        {/* ── 書類準備のポイント ─── */}
        <section id="prep" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            書類準備のポイント
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

        {/* ── 流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            申込から入金までの流れ（4ステップ）
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
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            契約は電子契約のため、押印や書類の返送は発生しません。条件提示の段階で手数料と買取金額を確認できるので、納得できない場合はその時点で他社と比較する判断もできます。
          </p>
        </section>

        {/* ── 入金スピード ─── */}
        <section id="speed" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            入金スピードの目安
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            公式サイトによると、入金は電子契約締結後最短2営業日です。即日対応の他社と比べるとやや時間がかかるため、計画的な資金調達に向いたサービスといえます。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">スケジュールのチェックポイント</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>入金は契約後、最短2営業日（即日入金には非対応）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>申込〜審査〜条件提示の時間が別途かかる</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>土日祝を挟む場合は営業日ベースで前倒しの申込が必要</span>
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

        {/* ── 関連ページ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/gmo-btob/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">GMO BtoB早払いの口コミ・評判（総合レビュー）</p>
              <p className="mt-1 text-sm text-text-light">メリット・デメリットの全体像はこちら</p>
            </Link>
            <Link
              href="/reviews/gmo-btob/shinsa/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">GMO BtoB早払いの審査は厳しい？</p>
              <p className="mt-1 text-sm text-text-light">通過のコツと落ちたときの対処法</p>
            </Link>
            <Link
              href="/reviews/gmo-btob/fee/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">GMO BtoB早払いの手数料と他社比較</p>
              <p className="mt-1 text-sm text-text-light">請求書買取1%〜10%の実質コストを検証</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">条件別に15社を徹底比較</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-8 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            書類が揃ったら見積もりへ
          </h2>
          <p className="mb-6 text-sm text-white/80">
            即日入金が必要な方や書類を減らしたい方は、無料診断で他のサービスとの相性も確認できます。
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://www.gmo-pg.com/service/hayabarai/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-cta inline-block"
            >
              GMO BtoB早払い公式サイトへ
            </a>
            <Link
              href="/diagnosis/"
              className="inline-block rounded-lg border border-white/60 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              30秒無料診断を試す
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
