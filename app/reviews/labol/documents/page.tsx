import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ラボルの必要書類と入金までの流れ｜通帳コピー不要・最短60分",
  description:
    "ラボル（labol）の必要書類は請求書と本人確認書類の2点が基本（通帳コピー不要）。会員登録から審査、最短60分入金までの流れと、追加書類を求められたときの対応を解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/labol/documents/",
  },
  openGraph: {
    title: "ラボルの必要書類と入金までの流れ｜通帳コピー不要・最短60分",
    description:
      "ラボルの必要書類（請求書・本人確認書類、通帳コピー不要）と入金までの4ステップを解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/labol/documents/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const documents = [
  {
    name: "請求書",
    point:
      "買取を希望する売掛金の請求書です。取引先名・金額・支払期日が明記された、支払期日前のものを用意します。作業内容や納品物が分かる記載になっていると、取引の実在確認がスムーズです。",
  },
  {
    name: "本人確認書類",
    point:
      "運転免許証やマイナンバーカードなどの本人確認書類です。記載の氏名・住所が現在の情報と一致しているか、有効期限内かを確認してから提出しましょう。",
  },
];

const prepTips = [
  {
    title: "通帳コピーは不要、そのぶん請求書の質が大事",
    detail:
      "ラボルは他社で一般的な通帳コピーの提出が不要です。その分、請求書自体が取引を裏付ける中心資料になるため、金額の根拠や取引内容が読み取れる請求書で申し込むことが重要です。",
  },
  {
    title: "追加書類の依頼に備えておく",
    detail:
      "案件や取引先によっては、契約書などの追加書類を求められるケースがあります（親レビューの口コミ傾向でも報告あり）。業務委託契約書・発注書・納品を示すやり取りなどをすぐに提出できるよう手元に整理しておくと、審査の中断を防げます。",
  },
  {
    title: "画像は鮮明に、情報は最新に",
    detail:
      "スマートフォン撮影やスキャンで文字が潰れていると再提出になり、最短60分入金のメリットが薄れます。本人確認書類の住所変更が済んでいない場合は、先に更新しておきましょう。",
  },
];

const steps = [
  {
    step: "1",
    title: "無料会員登録",
    description: "メールアドレスで会員登録。24時間いつでも登録可能です。",
  },
  {
    step: "2",
    title: "請求書のアップロード",
    description: "請求書と本人確認書類をオンラインで提出します。",
  },
  {
    step: "3",
    title: "審査",
    description: "提出書類をもとに審査を実施。結果はメールで通知されます。",
  },
  {
    step: "4",
    title: "入金",
    description: "審査通過後、最短60分で指定口座に入金されます。土日祝も対応。",
  },
];

const faqs = [
  {
    question: "ラボルの必要書類は何ですか？通帳コピーは要りますか？",
    answer:
      "基本は請求書と本人確認書類（運転免許証やマイナンバーカードなど）の2点で、通帳コピーは不要です。ただし、案件によっては契約書などの追加書類を求められるケースがあります。最新の必要書類は公式サイトでご確認ください。",
  },
  {
    question: "ラボルは申込から入金まで最短でどれくらいですか？",
    answer:
      "審査通過後、最短60分で指定口座に入金されます。ラボルは申込・審査・入金を24時間365日行っているため、土日祝や深夜の申込でも当日中の入金が可能です。ただし、審査状況によっては数時間かかる場合もあります。",
  },
  {
    question: "土日祝に申し込んでも本当に入金されますか？",
    answer:
      "はい、ラボルは土日祝を含む24時間365日の入金に対応しています。ただし、入金がリアルタイムで口座に反映されるかは利用する銀行側の仕様によります。モアタイムシステム対応の銀行であれば、休日でも即時反映が期待できます。",
  },
  {
    question: "追加書類を求められたら審査に不利なのですか？",
    answer:
      "追加書類の依頼は取引の実在性を確認するためのプロセスであり、それ自体が不利というわけではありません。契約書や発注書などを速やかに提出できれば審査は先に進みます。逆に提出できないと審査が止まるため、事前に取引を裏付ける資料を整理しておくことをおすすめします。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ラボルの必要書類と入金までの流れ｜通帳コピー不要・最短60分",
  description:
    "ラボルの必要書類（請求書・本人確認書類、通帳コピー不要）と入金までの4ステップを解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/labol/documents/",
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

export default function LabolDocumentsPage() {
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
          { label: "ラボル", href: "/reviews/labol/" },
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
            ラボルの必要書類と
            <br className="hidden md:block" />
            入金までの流れ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            基本書類は請求書と本人確認書類の2点、通帳コピーは不要。会員登録から最短60分入金までの流れを整理します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            ラボルの必要書類は基本的に「請求書」と「本人確認書類」の2点で、通帳コピーは不要です。流れは無料会員登録→請求書・本人確認書類のアップロード→審査（結果はメール通知）→最短60分で入金の4ステップ。申込から入金まで24時間365日対応なので、土日祝や深夜でも完結します。ただし案件によっては契約書などの追加書類を求められることがあるため、取引を裏付ける資料を手元に用意しておくとスムーズです。
          </p>
          <p className="mt-3 text-sm">
            <Link href="/reviews/labol/" className="text-primary hover:underline">ラボルの総合レビューを見る</Link>
            <span className="mx-2 text-text-light">／</span>
            <Link href="/ranking/" className="text-primary hover:underline">他社と条件で比較</Link>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#documents" className="hover:underline">1. ラボルの必要書類一覧</a></li>
            <li><a href="#prep" className="hover:underline">2. 書類準備のポイント</a></li>
            <li><a href="#flow" className="hover:underline">3. 申込から入金までの4ステップ</a></li>
            <li><a href="#speed" className="hover:underline">4. 入金スピードと土日祝の扱い</a></li>
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
            ラボルの必要書類一覧
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ラボルの申込に必要な基本書類は次の2点です。多くのファクタリング会社で求められる通帳コピーが不要な点が特徴で、書類準備の負担はフリーランス向けサービスの中でも小さい部類です。
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
          <div className="mt-4 rounded-lg border border-accent/30 bg-orange-50 p-5">
            <p className="mb-2 font-bold text-accent">注意：追加書類を求められる場合があります</p>
            <p className="text-sm leading-relaxed text-text-light">
              基本は上記2点ですが、案件や取引先によっては契約書などの追加提出を求められるケースがあります。求められてから探すと時間をロスするため、業務委託契約書や発注書は事前に用意しておきましょう。
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            会社ごとの必要書類の違いは
            <Link href="/articles/required-documents/" className="text-primary hover:underline">ファクタリングの必要書類まとめ記事</Link>
            で横断比較できます。
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
            全ステップがオンラインで完結し、来店や電話面談は不要です。会員登録から始まる方式なので、資金が必要になる前に登録だけ済ませておくと、いざというとき請求書のアップロードから始められます。
          </p>
        </section>

        {/* ── 入金スピード ─── */}
        <section id="speed" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            入金スピードと土日祝の扱い
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ラボルの入金スピードは公式案内で「審査通過後、最短60分」です。申込・審査・入金のすべてを24時間365日行っているため、土日祝・深夜・年末年始などの長期休暇中でも入金まで完結します。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            ただし2点、実務上の注意があります。第一に、「最短」は最速のケースであり、審査状況によっては数時間かかる場合もあります。第二に、休日・夜間の入金が口座に即時反映されるかは受け取る銀行の仕様（モアタイムシステム対応の有無）に依存します。急ぎの場合は、即時反映に対応した口座を振込先に指定しておくと確実です。
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

        {/* ── 関連リンク ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/reviews/labol/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">ラボルの口コミ・評判（総合レビュー）</p>
              <p className="mt-1 text-sm text-text-light">基本情報・口コミ傾向・総合評価はこちら</p>
            </Link>
            <Link href="/reviews/labol/shinsa/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">ラボルの審査は厳しい？</p>
              <p className="mt-1 text-sm text-text-light">通過のコツと落ちたときの対処法</p>
            </Link>
            <Link href="/reviews/labol/fee/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">ラボルの手数料はいくら？</p>
              <p className="mt-1 text-sm text-text-light">一律10%の実質コストと他社比較</p>
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
            どの会社が合うか迷ったら
            <Link href="/diagnosis/" className="text-primary hover:underline">無料診断ツール</Link>
            で7つの質問から絞り込めます。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-8 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            請求書と本人確認書類があれば今すぐ申込OK
          </h2>
          <p className="mb-6 text-sm text-white/80">
            通帳コピー不要・24時間365日受付。審査通過後は最短60分で入金されます。
          </p>
          <a
            href="https://labol.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            ラボル公式サイトで無料登録
          </a>
        </section>
      </div>
    </>
  );
}
