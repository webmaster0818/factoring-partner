import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "アクセルファクターの必要書類と入金までの流れ｜最短即日の準備ガイド",
  description:
    "アクセルファクターの必要書類（請求書・通帳コピー・本人確認書類等）と、申込から最短即日（3時間程度）の入金までの流れを解説。通帳が用意できない場合の代替手段もまとめました。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/reviews/accelfactor/documents/",
  },
  openGraph: {
    title:
      "アクセルファクターの必要書類と入金までの流れ｜最短即日の準備ガイド",
    description:
      "アクセルファクターの必要書類と申込から入金までのステップを解説。書類の代替対応についても紹介します。",
    url: "https://hyogo-shihoushoshi.jp/reviews/accelfactor/documents/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const documents = [
  {
    name: "請求書",
    note: "売却したい売掛金の請求書。売掛先に発行済みのものを用意します。",
  },
  {
    name: "通帳のコピー",
    note: "売掛先からの入金実績を確認するための書類。用意できない場合はネットバンキングの画面キャプチャで代替できた事例があります。",
  },
  {
    name: "本人確認書類",
    note: "運転免許証などの本人確認書類。代表者・事業主本人の確認に使われます。",
  },
];

const steps = [
  {
    step: "1",
    title: "問い合わせ・申込",
    description:
      "電話・メール・Webフォームから申込。急ぎの場合は電話がおすすめです。",
  },
  {
    step: "2",
    title: "必要書類の提出",
    description:
      "請求書・通帳コピー・本人確認書類等を提出。書類の代替対応も可能です。",
  },
  {
    step: "3",
    title: "審査・見積もり",
    description:
      "売掛先の信用調査を実施。審査通過率93.3%（公式発表）の柔軟な審査です。",
  },
  {
    step: "4",
    title: "契約・入金",
    description:
      "条件に合意後、契約を締結。最短即日で指定口座に入金されます。",
  },
];

const prepPoints = [
  {
    title: "申込前に3点セットを揃えておく",
    detail:
      "請求書・通帳コピー・本人確認書類の3点を申込前に手元に揃えておくと、提出→審査→入金の流れが止まりません。即日入金を狙う場合は特に重要です。",
  },
  {
    title: "通帳が用意できなくても諦めない",
    detail:
      "アクセルファクターは書類対応の柔軟さに定評があり、通帳のコピーが用意できない場合にネットバンキングの画面キャプチャで対応してもらえたという声があります。用意できない書類がある場合は、申込時に代替手段を相談しましょう。",
  },
  {
    title: "売掛先との取引がわかる資料も準備しておく",
    detail:
      "審査では売掛金の実在性が確認されます。請求書に対応する発注書・契約書・過去の入金履歴など、取引の裏付けになる資料をすぐ出せる状態にしておくと、確認がスムーズです。",
  },
  {
    title: "対面・出張・オンラインから提出方法を選べる",
    detail:
      "アクセルファクターは来店・出張・オンラインの多様な対応が可能です。書類の内容に不安がある場合は、対面で相談しながら提出できるのも同社を選ぶメリットです。",
  },
];

const faqs = [
  {
    question: "アクセルファクターの必要書類は何ですか？",
    answer:
      "基本となるのは請求書・通帳のコピー・本人確認書類等です。通帳のコピーが用意できない場合にネットバンキングの画面キャプチャで代替できた事例があるなど、書類対応は柔軟です。案件によって追加書類を求められる場合があるため、正確な一覧は申込時にご確認ください。",
  },
  {
    question: "決算書は必要ですか？",
    answer:
      "アクセルファクターの基本書類として当サイトで確認しているのは請求書・通帳コピー・本人確認書類等です。ただし、案件の内容や金額によっては追加の資料を求められる可能性があります。決算書の要否は申込時に担当者へ直接確認することをおすすめします。",
  },
  {
    question: "申込から入金までどのくらいかかりますか？",
    answer:
      "公式では最短即日（3時間程度）とされています。ただし、書類の不備や審査の混雑状況によっては翌営業日以降になる場合があります。即日入金を希望する場合は、午前中の早い時間に申込み、必要書類を全て揃えておくことが重要です。",
  },
  {
    question: "オンラインだけで手続きは完結しますか？",
    answer:
      "アクセルファクターはオンライン対応に加えて来店・出張にも対応しています。遠方の方はオンラインでの手続きも可能ですが、完全オンライン完結を最優先する場合は、クラウド型のサービスと比較検討するのも一案です。詳しくは親レビューの「向いていない人」もご参照ください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "アクセルファクターの必要書類と入金までの流れ｜最短即日の準備ガイド",
  description:
    "アクセルファクターの必要書類と申込から入金までのステップを解説。書類の代替対応についても紹介します。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/accelfactor/documents/",
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

export default function AccelfactorDocumentsPage() {
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
          { label: "アクセルファクター", href: "/reviews/accelfactor/" },
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
            アクセルファクターの必要書類と
            <br className="hidden md:block" />
            入金までの流れ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            アクセルファクターに申し込む前に揃えておきたい書類と、申込から最短即日（3時間程度）の入金までのステップをまとめました。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            アクセルファクターの基本書類は「請求書・通帳のコピー・本人確認書類等」で、通帳が用意できない場合はネットバンキングの画面キャプチャで代替できた事例があるなど、書類対応の柔軟さが強みです。流れは「申込→書類提出→審査・見積もり→契約・入金」の4ステップで、入金は最短即日（3時間程度）。即日を狙うなら、午前中の申込と書類の事前準備がカギになります。
          </p>
          <p className="mt-3 text-sm font-semibold text-primary">
            <a href="#documents" className="hover:underline">必要書類の一覧</a>
            <span className="mx-2 text-text-light">／</span>
            <a href="#flow" className="hover:underline">入金までのステップ</a>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#documents" className="hover:underline">1. アクセルファクターの必要書類一覧</a></li>
            <li><a href="#prep" className="hover:underline">2. 書類準備のポイント4つ</a></li>
            <li><a href="#flow" className="hover:underline">3. 申込から入金までのSTEP</a></li>
            <li><a href="#speed" className="hover:underline">4. 入金スピードの目安</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、必要書類・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 必要書類 ─── */}
        <section id="documents" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            アクセルファクターの必要書類一覧
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            当サイトが確認しているアクセルファクターの基本書類は次のとおりです。案件の内容や金額によっては追加資料を求められる場合があるため、正確な一覧は申込時にご確認ください。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold w-44">書類</th>
                  <th className="px-4 py-3 text-left font-semibold">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-section-bg" : "bg-white"}>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main">
                      {doc.name}
                    </th>
                    <td className="px-4 py-3 text-text-light">{doc.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ファクタリング全般で求められる書類の一般論は
            <Link href="/articles/required-documents/" className="text-primary hover:underline">ファクタリングの必要書類ガイド</Link>
            で解説しています。
          </p>
        </section>

        {/* ── 書類準備のポイント ─── */}
        <section id="prep" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            書類準備のポイント4つ
          </h2>
          <div className="space-y-6">
            {prepPoints.map((point, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{point.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 申込から入金までの流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            申込から入金までのSTEP
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
            審査の中身（重視されるポイント・落ちやすいケース）は
            <Link href="/reviews/accelfactor/shinsa/" className="text-primary hover:underline">アクセルファクターの審査は厳しい？</Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* ── 入金スピード ─── */}
        <section id="speed" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            入金スピードの目安
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            アクセルファクターの入金スピードは公式で「最短即日（3時間程度）」とされています。ただし「最短」はあくまで条件が揃った場合の数値であり、書類の不備や審査の混雑状況によっては翌営業日以降になるケースもあります。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">即日入金の可能性を高める3条件</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>午前中の早い時間に申し込む（急ぎなら電話申込）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>必要書類を最初の提出で全て揃える</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>売掛先との取引の裏付け資料をすぐ出せる状態にしておく</span>
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
              href="/reviews/accelfactor/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">サービス全体のレビューはこちら</p>
            </Link>
            <Link
              href="/reviews/accelfactor/shinsa/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの審査は厳しい？</p>
              <p className="mt-1 text-sm text-text-light">通過のコツと落ちたときの対処法</p>
            </Link>
            <Link
              href="/reviews/accelfactor/fee/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの手数料はいくら？</p>
              <p className="mt-1 text-sm text-text-light">実質コストと他社比較を解説</p>
            </Link>
            <Link href="/articles/weekend-factoring/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">土日・祝日に使えるファクタリングの探し方</p>
              <p className="mt-1 text-sm text-text-light">休日対応の可否と申込みの注意点</p>
            </Link>
            <Link href="/articles/instant-factoring/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">即日入金を狙う申込みのコツ</p>
              <p className="mt-1 text-sm text-text-light">申込み時間帯と書類準備で入金スピードは変わる</p>
            </Link>
            <Link
              href="/diagnosis/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">無料診断ツール</p>
              <p className="mt-1 text-sm text-text-light">7つの質問であなたに合う会社を絞り込み</p>
            </Link>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            複数社を条件で見比べたい方は
            <Link href="/ranking/" className="text-primary hover:underline">ファクタリング会社おすすめランキング</Link>
            もご覧ください。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-8 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            書類が揃ったら無料見積もりへ
          </h2>
          <p className="mb-6 text-sm text-white/80">
            最短即日（3時間程度）入金。書類に不安があっても代替手段の相談が可能です。
          </p>
          <a
            href="https://accelfactor.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料見積もり
          </a>
        </section>
      </div>
    </>
  );
}
