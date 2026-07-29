import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ペイトナーの必要書類と入金までの流れ｜請求書と本人確認書類だけでOK",
  description:
    "ペイトナーの必要書類は請求書と本人確認書類のみ（通帳コピー不要）。会員登録から請求書アップロード、AI審査（最短20分）、入金（最短10分）までの4ステップと書類準備のポイントを解説します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/reviews/paytner/documents/",
  },
  openGraph: {
    title:
      "ペイトナーの必要書類と入金までの流れ｜請求書と本人確認書類だけでOK",
    description:
      "ペイトナーの必要書類（請求書・本人確認書類）と申込から最短10分入金までの流れを解説。通帳コピーは不要です。",
    url: "https://hyogo-shihoushoshi.jp/reviews/paytner/documents/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const documents = [
  {
    name: "請求書",
    point:
      "買い取ってもらう売掛金の請求書（画像またはPDF）。取引内容・金額・支払期日・売掛先の情報が明確に記載されていることがAI審査のポイントです。",
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
    title: "会員登録",
    description: "メールアドレスで無料会員登録。最短1分で完了します。",
  },
  {
    step: "2",
    title: "請求書のアップロード",
    description: "請求書の画像またはPDFをアップロードします。",
  },
  {
    step: "3",
    title: "AI審査",
    description: "AIが自動で審査を実施。最短20分で結果が通知されます。",
  },
  {
    step: "4",
    title: "入金",
    description: "審査通過後、最短10分で指定口座に入金されます。",
  },
];

const prepTips = [
  {
    title: "請求書は記載事項が揃ったものを使う",
    detail:
      "ペイトナーはAI審査のため、請求書のデータがほぼ唯一の判断材料です。取引内容・金額・支払期日・売掛先情報が明確に記載された請求書を用意しましょう。あいまいな記載は審査落ちの原因になる可能性があります。",
  },
  {
    title: "鮮明な画像またはPDFで用意する",
    detail:
      "請求書は画像またはPDFでアップロードします。文字が読み取りにくい写真は確認に時間がかかる原因になるため、スキャンデータか、明るい場所で正面から撮影した鮮明な画像を使うのがおすすめです。",
  },
  {
    title: "通帳コピー・決算書は不要",
    detail:
      "ペイトナーでは通帳コピーや事業計画書・決算書の提出は基本不要です。書類集めに時間を取られないため、請求書と本人確認書類さえ手元にあれば、思い立ったその場で申込を完了できます。",
  },
  {
    title: "初回は上限25万円の範囲で準備する",
    detail:
      "初回利用の上限は25万円です（2回目以降は実績に応じて最大300万円）。初回にそれ以上の金額の請求書を出しても全額は資金化できないため、必要額と上限を踏まえて申し込む請求書を選びましょう。",
  },
];

const faqs = [
  {
    question: "ペイトナーの必要書類は何ですか？",
    answer:
      "基本の必要書類は請求書と本人確認書類の2点です。通帳コピーや決算書・事業計画書は基本不要で、フリーランスでも手軽に申し込めるのが特徴です。案件によって追加の確認が入る場合があるため、詳細は公式サイトでご確認ください。",
  },
  {
    question: "ペイトナーは申込から入金までどれくらいかかりますか？",
    answer:
      "会員登録は最短1分、AI審査は最短20分、審査通過後の入金は最短10分です。人的審査を介さない自動審査のため、書類さえ揃っていれば当日中の資金化も十分狙えます。",
  },
  {
    question: "ペイトナーの手続きはすべてオンラインで完結しますか？",
    answer:
      "はい、完結します。会員登録から請求書のアップロード、AI審査、入金まですべてオンラインで進み、電話面談もありません。営業電話がかかってこない点もフリーランスから評価されています。",
  },
  {
    question: "売掛先に通知や連絡はいきますか？",
    answer:
      "ペイトナーは2社間ファクタリングのため、売掛先への通知は行われません。取引先にファクタリングの利用が知られることはなく、取引関係に影響を与えずに利用できます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ペイトナーの必要書類と入金までの流れ｜請求書と本人確認書類だけでOK",
  description:
    "ペイトナーの必要書類（請求書・本人確認書類）と申込から入金までの4ステップを解説します。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/paytner/documents/",
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

export default function PaytnerDocumentsPage() {
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
            ペイトナーの必要書類と
            <br className="hidden md:block" />
            入金までの流れ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            必要書類は請求書と本人確認書類の2点のみ・通帳コピー不要。会員登録から最短10分入金までの流れと、書類準備のポイントを解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            ペイトナーの必要書類は「請求書」と「本人確認書類」の2点のみで、通帳コピーや決算書は基本不要です。流れは、会員登録（最短1分）→請求書アップロード→AI審査（最短20分）→入金（最短10分）の4ステップで、電話面談なしの完全オンライン完結。書類の少なさと速さはフリーランス向けサービスの中でもトップクラスですが、初回は1万〜25万円の上限がある点だけ押さえておきましょう。
          </p>
          <p className="mt-3 text-sm text-primary">
            <Link href="/reviews/paytner/" className="hover:underline">ペイトナーの総合レビューを見る</Link>
            {" ／ "}
            <a href="/ranking/" className="hover:underline">他社と条件で比較</a>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#documents" className="hover:underline">1. ペイトナーの必要書類一覧</a></li>
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
            ペイトナーの必要書類一覧
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ペイトナーで必要な書類は次の2点です。「通帳コピーなどの面倒な書類が不要で助かった」という口コミが目立つとおり、ファクタリングの中でも特に書類が少ないサービスです。
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
                    <td className="px-4 py-3 font-semibold text-text-main">{doc.name}</td>
                    <td className="px-4 py-3 text-text-light">{doc.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            他社を含めたファクタリング全般の必要書類の考え方は
            <Link href="/articles/required-documents/" className="text-primary underline hover:text-accent">ファクタリングの必要書類の解説記事</Link>
            で比較できます。
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
            AI審査で何が見られるのか、落ちやすいケースは
            <Link href="/reviews/paytner/shinsa/" className="text-primary underline hover:text-accent">ペイトナーの審査は厳しい？通過のコツ</Link>
            で解説しています。
          </p>
        </section>

        {/* ── 入金スピード ─── */}
        <section id="speed" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            入金スピードの目安
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ペイトナーの入金は<strong className="text-text-main">最短10分</strong>、AI審査は<strong className="text-text-main">最短20分</strong>です。審査から入金まで人手を介さない自動化された仕組みのため、業界最速クラスのスピードを実現しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            口コミでも「審査通過後すぐに振り込まれた」「最短10分の入金は本当だった」という声があり、月末の急な出費や支払い期日直前の資金需要にも間に合いやすいサービスです。人的審査がないため、深夜や早朝の申込でも審査が進みやすい点も強みです。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">最速で入金を受けるための3条件</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>会員登録を事前に済ませておく（登録自体は最短1分）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>記載事項の揃った請求書を鮮明なデータで用意する</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>初回は上限25万円の範囲内の請求書で申し込む</span>
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
            <Link href="/articles/for-freelance/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} フリーランス向けファクタリング5選</Link>
            <Link href="/reviews/paytner/shinsa/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} ペイトナーの審査は厳しい？</Link>
            <Link href="/reviews/paytner/fee/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} ペイトナーの手数料はいくら？</Link>
          </div>
        </div>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            ペイトナーの無料登録はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            必要書類は請求書と本人確認書類だけ。最短10分入金のファクタリングを無料で始められます。
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
              href="/reviews/paytner/shinsa/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ペイトナーの審査</p>
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
