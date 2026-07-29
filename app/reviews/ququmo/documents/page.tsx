import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "QuQuMo（ククモ）の必要書類と入金までの流れ｜3点だけで最短2時間",
  description:
    "QuQuMo（ククモ）の必要書類は請求書・通帳コピー・本人確認書類の3点のみ。書類準備のポイントと、申込から最短2時間入金までの4ステップをわかりやすく解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/ququmo/documents/",
  },
  openGraph: {
    title: "QuQuMo（ククモ）の必要書類と入金までの流れ｜3点だけで最短2時間",
    description:
      "QuQuMoの必要書類3点（請求書・通帳コピー・本人確認書類）の準備ポイントと入金までの流れを解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/ququmo/documents/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const documents = [
  {
    name: "請求書",
    point:
      "売却したい売掛金の請求書です。宛先（売掛先）・金額・支払期日が明記されたものを用意しましょう。支払期日前の請求書が対象です。",
  },
  {
    name: "通帳コピー",
    point:
      "入金確認用の通帳コピーです。売掛先からの過去の入金履歴が確認できるページを含めると、取引の実在性が伝わりやすくなります。ネットバンキングの入出金明細で代替できるかは公式サイトでご確認ください。",
  },
  {
    name: "本人確認書類",
    point:
      "運転免許証などの本人確認書類です。氏名・住所が最新の情報になっているか、有効期限が切れていないかを提出前に確認しましょう。",
  },
];

const prepTips = [
  {
    title: "画像は「読める状態」でアップロードする",
    detail:
      "スマートフォンで撮影する場合は、金額・日付・名義がはっきり読み取れることを確認しましょう。ピンボケや見切れがあると再提出となり、最短2時間入金のメリットが失われます。",
  },
  {
    title: "請求書と通帳の名義・取引を一致させる",
    detail:
      "請求書の発行者名義と通帳の口座名義、過去入金の売掛先名が一致していることが重要です。屋号と個人名が混在している個人事業主の方は、突合できる資料をあらかじめ整理しておくとスムーズです。",
  },
  {
    title: "決算書・登記簿は申込段階では不要",
    detail:
      "QuQuMoの申込に必要なのは上記3点のみで、決算書や登記簿謄本の準備は不要です。他社で書類の多さに手間取った方でも、最小限の準備で申し込めます。",
  },
];

const steps = [
  {
    step: "1",
    title: "Webから申込",
    description: "公式サイトのフォームから必要情報を入力して申込みます。",
  },
  {
    step: "2",
    title: "書類3点を提出",
    description: "請求書・通帳コピー・本人確認書類をアップロードします。",
  },
  {
    step: "3",
    title: "審査・見積もり",
    description: "提出書類をもとに審査を実施。手数料の見積もりが提示されます。",
  },
  {
    step: "4",
    title: "契約・入金",
    description: "クラウドサインで電子契約を締結。最短2時間で入金されます。",
  },
];

const faqs = [
  {
    question: "QuQuMoの必要書類は本当に3点だけですか？",
    answer:
      "はい、QuQuMoの申込に必要な書類は請求書・通帳コピー・本人確認書類の3点です。決算書や登記簿謄本の提出は申込段階では不要です。ただし、審査の過程で追加の確認資料を求められる可能性はゼロではないため、最新の案内は公式サイトでご確認ください。",
  },
  {
    question: "QuQuMoは申込から入金までどれくらいかかりますか？",
    answer:
      "公式案内では最短2時間で入金とされています。ただし、実際の所要時間は申込のタイミングや審査の混雑状況によって変動し、半日以上かかったという声もあります。急ぎの場合は平日の午前中に書類を揃えて申し込むのがおすすめです。",
  },
  {
    question: "QuQuMoの契約はどのように行いますか？来店は必要ですか？",
    answer:
      "来店は不要です。QuQuMoは申込から契約・入金まで完全オンラインで完結し、契約には弁護士ドットコム株式会社の電子契約サービス「クラウドサイン」を使用します。メールのリンクから電子署名するだけで契約が完了します。",
  },
  {
    question: "土日祝日に申し込んだ場合はいつ入金されますか？",
    answer:
      "QuQuMoは土日祝日には対応していないため、休日の申込は翌営業日以降の対応になります。土日祝日に入金が必要な場合は、24時間365日対応のラボルなど休日対応のサービスを検討してください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "QuQuMo（ククモ）の必要書類と入金までの流れ｜3点だけで最短2時間",
  description:
    "QuQuMoの必要書類3点（請求書・通帳コピー・本人確認書類）の準備ポイントと入金までの流れを解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/ququmo/documents/",
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

export default function QuqumoDocumentsPage() {
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
          { label: "QuQuMo（ククモ）", href: "/reviews/ququmo/" },
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
            QuQuMo（ククモ）の必要書類と
            <br className="hidden md:block" />
            入金までの流れ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            必要書類はわずか3点。申込から最短2時間入金までの4ステップと、書類準備でつまずかないためのポイントを解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            QuQuMoの必要書類は「請求書・通帳コピー・本人確認書類」の3点のみで、決算書や登記簿謄本は申込段階では不要です。流れはWeb申込→書類3点提出→審査・見積もり→クラウドサインで電子契約→最短2時間で入金の4ステップ。完全オンライン完結なので来店の必要もありません。書類の不備は再提出＝入金遅延に直結するため、金額・名義が読み取れる状態で提出することが最大のポイントです。
          </p>
          <p className="mt-3 text-sm">
            <Link href="/reviews/ququmo/" className="text-primary hover:underline">QuQuMoの総合レビューを見る</Link>
            <span className="mx-2 text-text-light">／</span>
            <Link href="/ranking/" className="text-primary hover:underline">他社と条件で比較</Link>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#documents" className="hover:underline">1. QuQuMoの必要書類一覧（3点）</a></li>
            <li><a href="#prep" className="hover:underline">2. 書類準備のポイント</a></li>
            <li><a href="#flow" className="hover:underline">3. 申込から入金までの4ステップ</a></li>
            <li><a href="#speed" className="hover:underline">4. 入金スピードの目安</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、必要書類・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 必要書類一覧 ─── */}
        <section id="documents" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            QuQuMoの必要書類一覧（3点）
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            QuQuMoの申込に必要な書類は次の3点です。他社で求められることの多い決算書・登記簿謄本・納税証明書などは申込段階では不要で、書類準備の負担が小さいのが特徴です。
          </p>
          <div className="space-y-4">
            {documents.map((doc, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  {doc.name}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{doc.point}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ファクタリング全般でどんな書類が求められるかは
            <Link href="/articles/required-documents/" className="text-primary hover:underline">ファクタリングの必要書類まとめ記事</Link>
            で会社ごとの傾向を比較できます。
          </p>
        </section>

        {/* ── 書類準備のポイント ─── */}
        <section id="prep" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            書類準備のポイント
          </h2>
          <div className="space-y-4">
            {prepTips.map((tip, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-5">
                <p className="mb-2 font-semibold text-secondary">{tip.title}</p>
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
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            契約は弁護士ドットコム株式会社の電子契約サービス「クラウドサイン」で締結します。メールのリンクから電子署名するだけで、専用アプリのインストールは不要です。
          </p>
        </section>

        {/* ── 入金スピード ─── */}
        <section id="speed" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            入金スピードの目安
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            QuQuMoの入金スピードは公式案内で「最短2時間」です。ただし「最短」はあくまで最速のケースで、実際は申込のタイミングや審査の混雑状況によって変動し、半日以上かかったという利用者の声もあります。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">当日入金の可能性を高めるには</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>平日の午前中に申し込む（QuQuMoは土日祝非対応）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>書類3点を事前に揃え、不備のない状態で一度に提出する</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>見積もり提示後の確認・契約の対応を早くする</span>
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

        {/* ── 関連リンク ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/reviews/ququmo/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">QuQuMoの口コミ・評判（総合レビュー）</p>
              <p className="mt-1 text-sm text-text-light">基本情報・口コミ傾向・総合評価はこちら</p>
            </Link>
            <Link href="/reviews/ququmo/shinsa/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">QuQuMoの審査は厳しい？</p>
              <p className="mt-1 text-sm text-text-light">通過のコツと落ちたときの対処法</p>
            </Link>
            <Link href="/reviews/ququmo/fee/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">QuQuMoの手数料はいくら？</p>
              <p className="mt-1 text-sm text-text-light">実質コストの考え方と他社比較</p>
            </Link>
            <Link href="/articles/weekend-factoring/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">土日・祝日に使えるファクタリングの探し方</p>
              <p className="mt-1 text-sm text-text-light">休日対応の可否と申込みの注意点</p>
            </Link>
            <Link href="/articles/instant-factoring/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">即日入金を狙う申込みのコツ</p>
              <p className="mt-1 text-sm text-text-light">申込み時間帯と書類準備で入金スピードは変わる</p>
            </Link>
            <Link href="/ranking/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">手数料を公式確認した15社を比較</p>
            </Link>
          </div>
          <p className="mt-4 text-sm text-text-light">
            自分に合う会社がわからない方は
            <Link href="/diagnosis/" className="text-primary hover:underline">無料診断ツール</Link>
            で7つの質問から絞り込めます。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-8 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            書類3点が揃ったら、そのままオンラインで申込
          </h2>
          <p className="mb-6 text-sm text-white/80">
            請求書・通帳コピー・本人確認書類の3点だけ。来店不要・クラウドサイン契約で最短2時間入金。
          </p>
          <a
            href="https://ququmo.net/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            QuQuMo公式サイトで申し込む
          </a>
        </section>
      </div>
    </>
  );
}
