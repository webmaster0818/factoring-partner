import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "OLTA（オルタ）の必要書類と入金までの流れ｜オンライン完結ガイド",
  description:
    "OLTA（オルタ）の必要書類は請求書・入出金明細（直近4ヶ月分）・決算書（直近2期分）・本人確認書類の4点。書類準備のポイントと、Web申込からAI審査・最短即日入金までの流れを解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/olta/documents/",
  },
  openGraph: {
    title:
      "OLTA（オルタ）の必要書類と入金までの流れ｜オンライン完結ガイド",
    description:
      "OLTAの必要書類4点と、Web申込からAI審査・最短即日入金までのステップを解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/olta/documents/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const documents = [
  {
    name: "請求書",
    note: "売掛先に発行済みのもの。PDF・画像いずれもアップロード可能です。",
  },
  {
    name: "銀行口座の入出金明細",
    note: "直近4ヶ月分。ネットバンキングの画面キャプチャでも対応可能です。",
  },
  {
    name: "決算書",
    note: "法人は直近2期分。個人事業主は確定申告書の直近2期分で代替します。",
  },
  {
    name: "本人確認書類",
    note: "運転免許証・マイナンバーカードなど。",
  },
];

const steps = [
  {
    step: "1",
    title: "Web申込・会員登録",
    description:
      "公式サイトから必要情報を入力して申込。無料で会員登録できます。",
  },
  {
    step: "2",
    title: "書類アップロード",
    description:
      "請求書・入出金明細・決算書（直近2期分）等をアップロードします。",
  },
  {
    step: "3",
    title: "AI審査",
    description:
      "独自のAIシステムが審査を実施。最短即日で結果が通知されます。",
  },
  {
    step: "4",
    title: "契約・入金",
    description: "電子契約を締結し、指定口座に入金されます。",
  },
];

const prepPoints = [
  {
    title: "入出金明細は先にダウンロードしておく",
    detail:
      "OLTAで最も準備に手間がかかりやすいのが直近4ヶ月分の入出金明細です。ネットバンキングからのダウンロードや画面キャプチャで用意できるため、申込前に取得しておくと審査開始までの時間を短縮できます。",
  },
  {
    title: "決算書2期分（個人は確定申告書）を確認する",
    detail:
      "OLTAは決算書が必要書類に含まれる点が、請求書中心の簡易型サービスとの違いです。法人は直近2期分の決算書、個人事業主は確定申告書を用意します。2期分を揃えられない創業直後の場合は、書類要件の軽い他サービスとの比較も検討しましょう。",
  },
  {
    title: "書類間の内容の整合を確認する",
    detail:
      "AI審査ではデータの照合が行われるため、請求書の金額・売掛先名と入出金明細の記録が食い違っていると確認に時間がかかる可能性があります。アップロード前に書類同士の整合を見直しておきましょう。",
  },
  {
    title: "全てオンラインで完結するので来店準備は不要",
    detail:
      "OLTAは申込から審査・契約・入金まで完全オンライン完結です。書類は全てアップロード提出で、契約も電子契約のため、来店・郵送・対面の準備は一切必要ありません。地方在住でも同じ流れで利用できます。",
  },
];

const faqs = [
  {
    question: "OLTAの必要書類は何ですか？",
    answer:
      "主な必要書類は4点です。①請求書（売掛先に発行済みのもの）②銀行口座の入出金明細（直近4ヶ月分、ネットバンキングの画面キャプチャ可）③決算書（法人は直近2期分、個人事業主は確定申告書）④本人確認書類（運転免許証・マイナンバーカードなど）。全てオンラインでアップロード提出します。",
  },
  {
    question: "なぜOLTAは決算書まで必要なのですか？",
    answer:
      "OLTAは請求書だけの簡易型サービスに比べて必要書類が多めですが、その分手数料が2%〜9%（公式サイトにて2026年6月確認）と低水準に設定されています。詳細な書類でリスクを精緻に評価する代わりに、コストを抑えた条件を提示する設計と考えられます。書類の手間と手数料のバランスで選びましょう。",
  },
  {
    question: "申込から入金までどのくらいかかりますか？",
    answer:
      "OLTAの入金スピードは最短即日です（公式サイトにて2026年6月確認）。書類アップロード後にAI審査が行われ、審査結果は最短即日で通知、電子契約締結後に指定口座へ入金されます。書類が揃っているほど流れが止まらないため、事前準備が入金スピードを左右します。",
  },
  {
    question: "紙の書類しかない場合はどうすればいいですか？",
    answer:
      "OLTAはPDF・画像のアップロードに対応しているため、紙の書類はスキャンまたはスマートフォンでの撮影でデータ化して提出できます。入出金明細は紙の通帳の場合、該当ページを撮影する方法があります。文字が鮮明に読み取れる状態でアップロードすることが確認をスムーズにするコツです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "OLTA（オルタ）の必要書類と入金までの流れ｜オンライン完結ガイド",
  description:
    "OLTAの必要書類4点と、Web申込からAI審査・最短即日入金までのステップを解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/olta/documents/",
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

export default function OltaDocumentsPage() {
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
          { label: "OLTA（オルタ）", href: "/reviews/olta/" },
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
            OLTA（オルタ）の必要書類と
            <br className="hidden md:block" />
            入金までの流れ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            完全オンライン完結のOLTAに申し込む前に用意する書類4点と、Web申込からAI審査・最短即日入金までのステップをまとめました。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            OLTAの必要書類は「請求書・入出金明細（直近4ヶ月分）・決算書（直近2期分、個人事業主は確定申告書）・本人確認書類」の4点です。請求書中心の簡易型サービスより書類は多めですが、その分手数料は2%〜9%（公式サイトにて2026年6月確認）と低水準です。流れは「Web申込→書類アップロード→AI審査→電子契約・入金」の4ステップで、入金は最短即日。入出金明細と決算書を先に揃えておくことがスピードのカギです。
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
            <li><a href="#documents" className="hover:underline">1. OLTAの必要書類一覧（4点）</a></li>
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
            OLTAの必要書類一覧（4点）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            当サイトが確認しているOLTAの必要書類は次の4点です。全てオンラインでのアップロード提出となります。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold w-52">書類</th>
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
          <p className="mt-4 leading-relaxed text-text-light">
            ペイトナーやラボルのような請求書中心のサービスと比べると書類は多めですが、その分OLTAは手数料が2%〜9%（公式サイトにて2026年6月確認）と低く設定されています。書類の手間とコストのトレードオフを理解した上で選ぶのがポイントです。
          </p>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ファクタリング全般の書類の一般論は
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
            AI審査で見られるポイントや落ちやすいケースは
            <Link href="/reviews/olta/shinsa/" className="text-primary hover:underline">OLTAの審査は厳しい？</Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* ── 入金スピード ─── */}
        <section id="speed" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            入金スピードの目安
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            OLTAの入金スピードは公式で「最短即日」とされています（公式サイトにて2026年6月確認）。AI審査の結果も最短即日で通知されるため、書類が揃った状態で申し込めば、当日中の資金化も狙えます。一方で「最短」は条件が揃った場合の数値であり、書類の不備・確認事項の発生などにより日数がかかる場合もあります。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">スムーズに入金まで進める3条件</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>4点の書類を最初のアップロードで全て揃える</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>書類は文字が鮮明に読み取れる状態でデータ化する</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>請求書と入出金明細の内容に食い違いがないか事前確認する</span>
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
              href="/reviews/olta/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTA（オルタ）の口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">サービス全体のレビューはこちら</p>
            </Link>
            <Link
              href="/reviews/olta/shinsa/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTAの審査は厳しい？</p>
              <p className="mt-1 text-sm text-text-light">通過のコツと落ちたときの対処法</p>
            </Link>
            <Link
              href="/reviews/olta/fee/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTAの手数料はいくら？</p>
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
            書類が揃ったらOLTAの無料見積もりへ
          </h2>
          <p className="mb-6 text-sm text-white/80">
            完全オンライン完結・最短即日入金。会員登録・見積もりは無料です。
          </p>
          <a
            href="https://www.olta.co.jp/"
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
