import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "FREENANCE(フリーナンス)の必要書類と入金までの流れ｜最短即日入金",
  description:
    "FREENANCE(フリーナンス)即日払いの必要書類と申込から入金までの流れを解説。請求書アップロードだけで申請できる仕組み、フリーナンス口座の開設手順、最短即日入金までのSTEPを公式情報ベースで紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/freenance/documents/",
  },
  openGraph: {
    title: "FREENANCE(フリーナンス)の必要書類と入金までの流れ｜最短即日入金",
    description:
      "FREENANCEの必要書類・申込から入金までの流れ・入金スピードを公式情報ベースで解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/freenance/documents/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const steps = [
  {
    step: "1",
    title: "無料会員登録",
    description:
      "公式サイトからメールアドレスで会員登録します。登録するだけで損害賠償保険「あんしん補償」が自動付帯します。",
  },
  {
    step: "2",
    title: "フリーナンス口座の開設",
    description:
      "GMOあおぞらネット銀行にフリーナンス専用口座を開設します。開設には審査があります。この口座が即日払い利用の前提になります。",
  },
  {
    step: "3",
    title: "請求書をアップロード",
    description:
      "即日払いしたい請求書の画像やPDFをアップロードします。オンラインで完結し、来店や郵送は不要です。",
  },
  {
    step: "4",
    title: "審査・入金",
    description:
      "審査通過後、最短即日でフリーナンス口座に入金されます。GMOあおぞらネット銀行宛の振込手数料は無料です。",
  },
];

const prepTips = [
  {
    title: "請求書は「発行済み・法人宛て」のものを用意する",
    detail:
      "即日払いの対象は法人からの売掛金のみです。個人クライアント宛ての請求書は対象外のため、法人宛てに発行済みの請求書を準備しましょう。",
  },
  {
    title: "画像・PDFはそのまま読める状態でアップロードする",
    detail:
      "請求書はアップロード形式で提出します。金額・支払期日・宛先などの記載が鮮明に読み取れる画像またはPDFを用意すると、確認がスムーズに進みます。",
  },
  {
    title: "口座開設を先に済ませておく",
    detail:
      "フリーナンス口座の開設には審査があるため、資金が必要になってから登録を始めると間に合わないおそれがあります。急ぎの資金化を想定するなら、会員登録と口座開設を先に済ませておくのが確実です。",
  },
];

const faqs = [
  {
    question: "FREENANCEの即日払いに必要な書類は何ですか？",
    answer:
      "即日払いの申請時にアップロードするのは、買い取ってほしい請求書（画像またはPDF）です。なお、前提となる会員登録・フリーナンス口座開設の際に必要な本人確認書類等の詳細は、公式サイトの案内に従ってご準備ください。",
  },
  {
    question: "決算書や確定申告書は必要ですか？",
    answer:
      "即日払いの申請フローとして公式に案内されているのは請求書のアップロードで、法人向けファクタリングのように決算書の提出が必須とは案内されていません。ただし、審査状況によって追加の確認が入る可能性は否定できないため、詳細は公式サイトでご確認ください。",
  },
  {
    question: "申込から入金までどのくらいかかりますか？",
    answer:
      "審査通過後、最短即日でフリーナンス口座に入金されます。ただし会員登録とフリーナンス口座の開設（審査あり）が前提のため、初回利用の場合は口座開設の時間も見込んでおく必要があります。2回目以降は請求書のアップロードから始められます。",
  },
  {
    question: "入金はどの口座に振り込まれますか？",
    answer:
      "即日払いの入金先はGMOあおぞらネット銀行のフリーナンス専用口座です。GMOあおぞらネット銀行宛の振込手数料は無料です。フリーナンス口座に入金された資金は、メインの銀行口座に振り替えて使えます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "FREENANCE(フリーナンス)の必要書類と入金までの流れ｜最短即日入金",
  description:
    "FREENANCEの必要書類・申込から入金までの流れ・入金スピードを公式情報ベースで解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/freenance/documents/",
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
    { "@type": "ListItem", position: 3, name: "FREENANCE(フリーナンス)", item: "https://hyogo-shihoushoshi.jp/reviews/freenance/" },
    { "@type": "ListItem", position: 4, name: "必要書類・流れ" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function FreenanceDocumentsPage() {
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
          { label: "FREENANCE(フリーナンス)", href: "/reviews/freenance/" },
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
            FREENANCE(フリーナンス)の必要書類と
            <br className="hidden md:block" />
            入金までの流れ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            請求書のアップロードだけで申請できるFREENANCE「即日払い」。申込前に準備するものと、入金までの4ステップを整理します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            FREENANCEの即日払いで申請時にアップロードするのは、法人宛てに発行した請求書（画像またはPDF）です。ただし利用には無料会員登録と、GMOあおぞらネット銀行のフリーナンス専用口座の開設（審査あり）が前提になります。流れは「会員登録→口座開設→請求書アップロード→審査・入金」の4ステップで、審査通過後は最短即日で入金。完全オンラインで完結し、来店・郵送は不要です。急ぎに備えるなら、口座開設だけでも先に済ませておくのがポイントです。
          </p>
          <p className="mt-3 text-sm">
            <Link href="/reviews/freenance/" className="text-primary hover:underline">FREENANCEの総合レビューを見る</Link>
            <span className="mx-2 text-text-light">／</span>
            <Link href="/ranking/" className="text-primary hover:underline">他社と条件で比較する</Link>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#documents" className="hover:underline">1. FREENANCEの必要書類</a></li>
            <li><a href="#prep" className="hover:underline">2. 書類準備のポイント</a></li>
            <li><a href="#flow" className="hover:underline">3. 申込から入金までの流れ（4ステップ）</a></li>
            <li><a href="#speed" className="hover:underline">4. 入金スピードの目安</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 必要書類 ─── */}
        <section id="documents" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            FREENANCEの必要書類
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            FREENANCEの即日払いは、フリーランス向けに手続きが簡素化されており、申請時に用意するものは非常にシンプルです。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                <tr className="bg-section-bg">
                  <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-48">
                    即日払いの申請時
                  </th>
                  <td className="px-4 py-3 text-text-light">
                    買い取ってほしい請求書（画像またはPDFをアップロード）
                  </td>
                </tr>
                <tr className="bg-white">
                  <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-48">
                    会員登録・口座開設時
                  </th>
                  <td className="px-4 py-3 text-text-light">
                    メールアドレスで会員登録。フリーナンス口座（GMOあおぞらネット銀行）の開設には審査があります。開設時に必要な本人確認書類等の詳細は公式非公開のため、公式サイトの案内に従ってご準備ください。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            法人向けファクタリングで一般的な決算書・登記簿謄本のような書類は、即日払いの申請フローとしては案内されていません。ファクタリング全般の必要書類の相場観は
            <Link href="/articles/required-documents/" className="mx-1 text-primary hover:underline">必要書類の解説記事</Link>
            を参考にしてください。
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
            STEP1〜2は初回のみです。2回目以降はSTEP3の請求書アップロードから始められるため、継続利用するほど資金化までの手間が小さくなります。
          </p>
        </section>

        {/* ── 入金スピード ─── */}
        <section id="speed" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            入金スピードの目安
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            公式サイトでは、審査通過後最短即日での入金と案内されています。入金先はフリーナンス口座（GMOあおぞらネット銀行）で、同行宛の振込手数料は無料です。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">スピード面のチェックポイント</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>審査通過後、最短即日でフリーナンス口座に入金</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>初回はフリーナンス口座の開設（審査あり）の時間が別途必要</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>GMOあおぞらネット銀行宛の振込手数料は無料</span>
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
              href="/reviews/freenance/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">FREENANCEの口コミ・評判（総合レビュー）</p>
              <p className="mt-1 text-sm text-text-light">あんしん補償など全体像はこちら</p>
            </Link>
            <Link
              href="/reviews/freenance/shinsa/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">FREENANCEの審査は厳しい？</p>
              <p className="mt-1 text-sm text-text-light">通過のコツと落ちたときの対処法</p>
            </Link>
            <Link
              href="/reviews/freenance/fee/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">FREENANCEの手数料と他社比較</p>
              <p className="mt-1 text-sm text-text-light">3%〜10%の実質コストを検証</p>
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
              <p className="mt-1 text-sm text-text-light">条件別に15社を徹底比較</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-8 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            準備ができたら申し込みへ
          </h2>
          <p className="mb-6 text-sm text-white/80">
            請求書1枚から申請可能。迷っている方は無料診断で他社との相性も確認できます。
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://freenance.net/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-cta inline-block"
            >
              FREENANCE公式サイトへ
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
