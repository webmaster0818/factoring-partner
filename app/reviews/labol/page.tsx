import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ラボルの口コミ・評判｜24時間365日即日対応のファクタリングを検証",
  description:
    "ラボル（labol）の口コミ・評判を徹底調査。手数料一律10%、最短60分入金、24時間365日対応（土日祝含む）のファクタリングサービスを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/labol/",
  },
  openGraph: {
    title:
      "ラボルの口コミ・評判｜24時間365日即日対応のファクタリングを検証",
    description:
      "ラボルの口コミ・評判を徹底調査。24時間365日対応、手数料一律10%のファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/labol/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "一律10%" },
  { label: "入金スピード", value: "最短60分" },
  { label: "買取可能額", value: "1万円〜（上限は審査により決定）" },
  { label: "対象", value: "フリーランス・個人事業主" },
  { label: "オンライン対応", value: "◎（完全オンライン完結）" },
  { label: "対応時間", value: "24時間365日（土日祝含む）" },
  { label: "必要書類", value: "請求書・本人確認書類（通帳コピー不要）" },
  { label: "運営会社", value: "株式会社ラボル" },
];

const goodReviews = [
  {
    title: "24時間365日対応で土日祝でも使える",
    detail:
      "「土曜日に急な支払いが必要になり利用したが、問題なく対応してもらえた」「深夜でも申し込めるのが助かる」という声が多数。平日に時間が取れないフリーランスから特に好評です。",
  },
  {
    title: "1万円から少額利用できる",
    detail:
      "「数万円の小さな請求書でも対応してもらえた」「少額から使えるので気軽に利用できる」という口コミがあります。小規模案件の多いフリーランスにとって使い勝手が良いと評価されています。",
  },
  {
    title: "通帳コピーが不要で手続きが楽",
    detail:
      "「他社では通帳コピーの提出を求められたがラボルは不要だった」「必要書類が少なくて助かった」という声があります。請求書と本人確認書類のみで申込可能な手軽さが支持されています。",
  },
  {
    title: "手数料が明確でわかりやすい",
    detail:
      "「一律10%なので計算しやすい」「見積もりで手数料が変わらないのが安心」という口コミがあります。手数料の透明性が高く評価されています。",
  },
];

const badReviews = [
  {
    title: "審査に落ちるケースがある",
    detail:
      "「申し込んだが審査に通らなかった」「同じ売掛先なのに前回と結果が違った」という報告があります。全ての申込が通るわけではなく、売掛先の信用状況などにより審査落ちするケースがあります。",
  },
  {
    title: "追加書類を求められることがある",
    detail:
      "「基本書類だけで完了すると思ったが、追加で書類提出を求められた」「審査の過程で契約書の提出を追加要求された」という声があります。案件によっては書類が増える場合もあるようです。",
  },
  {
    title: "入金が60分以上かかる場合もある",
    detail:
      "「最短60分とあるが実際は数時間かかった」という声も見られます。申込のタイミングや審査状況によって入金までの時間は変動する点に注意が必要です。",
  },
];

const merits = [
  {
    title: "業界唯一の24時間365日対応",
    description:
      "土日祝日を含む24時間365日の申込・入金に対応しているのはラボルの最大の特徴です。平日に忙しいフリーランスや、休日に急な資金需要が発生した場合でも即座に対応できます。",
  },
  {
    title: "1万円からの少額利用が可能",
    description:
      "最低買取額が1万円からと非常に低く設定されており、小規模な請求書でも利用可能です。フリーランスの小口案件や、少額の資金繰りに柔軟に対応できます。",
  },
  {
    title: "手数料一律10%の明朗会計",
    description:
      "手数料が一律10%と明確に設定されており、見積もりによる変動がありません。事前にコストを正確に把握できるため、資金計画が立てやすいメリットがあります。",
  },
  {
    title: "必要書類の少なさ",
    description:
      "請求書と本人確認書類のみで申込可能で、通帳コピーの提出が不要です。書類準備の手間が少なく、スピーディーな申込が可能です。",
  },
];

const demerits = [
  {
    title: "審査通過率が非公開",
    description:
      "審査通過率が公表されておらず、実際にどの程度の確率で審査に通るのかが不明です。審査に落ちた場合の理由も開示されないため、事前に通過の見込みを立てにくい面があります。",
  },
  {
    title: "追加書類が必要になる場合がある",
    description:
      "基本的には請求書と本人確認書類のみですが、案件や売掛先によっては追加の書類提出を求められるケースがあります。契約書や取引実績の証明などが追加で必要になることがあります。",
  },
  {
    title: "法人向けの大口案件には不向き",
    description:
      "フリーランス・個人事業主向けのサービスのため、法人の大口資金調達には対応しきれない場合があります。数百万円〜数千万円規模の案件は他社の方が適している可能性があります。",
  },
];

const steps = [
  { step: "1", title: "無料会員登録", description: "メールアドレスで会員登録。24時間いつでも登録可能です。" },
  { step: "2", title: "請求書のアップロード", description: "請求書と本人確認書類をオンラインで提出します。" },
  { step: "3", title: "審査", description: "提出書類をもとに審査を実施。結果はメールで通知されます。" },
  { step: "4", title: "入金", description: "審査通過後、最短60分で指定口座に入金されます。土日祝も対応。" },
];

const faqs = [
  {
    question: "ラボルは土日祝日でも利用できますか？",
    answer:
      "はい、ラボルは24時間365日対応しており、土日祝日でも申込・審査・入金が可能です。年末年始やゴールデンウィークなどの長期休暇期間も対応しています。",
  },
  {
    question: "ラボルの手数料はいくらですか？",
    answer:
      "手数料は一律10%です。売掛金の額面から10%を差し引いた金額が入金されます。金額や利用回数による変動はなく、見積もり段階と実際の手数料に差異はありません。",
  },
  {
    question: "ラボルは法人でも利用できますか？",
    answer:
      "ラボルは主にフリーランス・個人事業主向けのサービスです。法人での利用については、公式サイトで最新の対応状況をご確認ください。法人の大口案件にはビートレーディングやOLTAなどが適している場合があります。",
  },
  {
    question: "ラボルの審査に必要な書類は何ですか？",
    answer:
      "基本的には請求書と本人確認書類（運転免許証やマイナンバーカードなど）の2点です。通帳コピーは不要です。ただし、案件によっては契約書などの追加書類を求められるケースがあります。",
  },
  {
    question: "入金までどれくらいかかりますか？",
    answer:
      "審査通過後、最短60分で入金されます。ただし、申込のタイミングや審査状況によっては数時間かかる場合もあります。書類に不備がないよう事前に確認することで、スムーズな入金が期待できます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ラボルの口コミ・評判｜24時間365日即日対応のファクタリングを検証",
  description:
    "ラボルの口コミ・評判を徹底調査。24時間365日対応、手数料一律10%のファクタリングを検証。",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://factoring-partner.pages.dev/reviews/labol/",
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

const comparisonData = [
  { name: "ラボル", fee: "一律10%", speed: "最短60分", amount: "1万円〜", online: "◎", hours: "24h365日" },
  { name: "ペイトナー", fee: "一律10%", speed: "最短10分", amount: "1万〜300万円", online: "◎", hours: "平日のみ" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎", hours: "平日のみ" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎", hours: "平日のみ" },
];

/* ── Component ────────────────────────────────────── */

export default function LabolReviewPage() {
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
          { label: "ラボル" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ラボルの口コミ・評判
            <br className="hidden md:block" />
            24時間365日即日対応のファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            手数料一律10%、最短60分入金、24時間365日対応のファクタリング「ラボル」の口コミ・評判を徹底調査します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. ラボルの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. ラボルのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. ラボルのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ラボルの基本情報
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {basicInfo.map((item, i) => (
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
        </section>

        {/* ── 会社概要・特徴 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ラボルの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ラボル（labol）は、フリーランス・個人事業主向けにファクタリングサービスを提供する株式会社ラボルが運営するサービスです。最大の特徴は、業界で唯一24時間365日（土日祝含む）の申込・審査・入金に対応している点です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料は一律10%と明確に設定されており、金額や利用回数による変動がありません。最低買取額は1万円からと非常に低く設定されており、小規模なフリーランスの小口案件にも対応しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            必要書類は請求書と本人確認書類のみで、通帳コピーの提出が不要です。書類準備の手間が最小限に抑えられているため、スピーディーな申込が可能です。完全オンライン完結で、来店や電話面談も必要ありません。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">ラボルの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>業界唯一の24時間365日対応（土日祝含む）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>1万円からの少額利用と通帳コピー不要の手軽さ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料一律10%の明朗会計</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 口コミ傾向調査 ─── */}
        <section id="reviews" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            口コミ傾向調査結果
          </h2>

          <div className="mb-8 rounded-lg border border-border bg-section-bg p-4 text-xs text-text-light leading-relaxed">
            ※当サイトの口コミ傾向調査は、Google口コミ、みん評、ヒカカク、ファクログ等の公開情報をもとに分析したものです。個別の口コミは投稿者個人の意見であり、当サイトがその内容を保証するものではありません。また、口コミは調査時点のものであり、サービス内容は変更される場合があります。
          </div>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-sm">&#9675;</span>
              良い口コミの傾向
            </h3>
            <div className="space-y-4">
              {goodReviews.map((review, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <p className="mb-2 font-semibold text-secondary">{review.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{review.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-sm">&#9651;</span>
              悪い口コミの傾向
            </h3>
            <div className="space-y-4">
              {badReviews.map((review, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <p className="mb-2 font-semibold text-accent">{review.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{review.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ラボルのメリット4つ
          </h2>
          <div className="space-y-6">
            {merits.map((merit, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  {merit.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{merit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── デメリット ─── */}
        <section id="demerits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ラボルのデメリット3つ
          </h2>
          <div className="space-y-6">
            {demerits.map((demerit, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  {demerit.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{demerit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ラボルの利用の流れ
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
        </section>

        {/* ── 利用シーン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ラボルが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">土日に急な支払いが必要になった場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                週末に急な出費が発生したが、銀行やほとんどのファクタリング会社が営業していない。ラボルなら土日祝日でも申込・入金に対応しているため、休日でも最短60分で資金を調達できます。フリーランスの不規則な収支サイクルに最適です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">深夜・早朝に資金が必要な場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                夜間作業中に翌日の支払いを思い出した場合でも、24時間対応のラボルなら深夜でも申込が可能です。時間帯を気にせず利用できるのは、不規則な生活リズムのフリーランスにとって大きなメリットです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">少額の請求書を現金化したい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                1万円からの少額利用に対応しているため、「大した金額ではないが今すぐ現金が欲しい」という場面で活躍します。他社では最低買取額が数万円〜数十万円に設定されていることが多い中、1万円からの対応は大きな差別化ポイントです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">年末年始やGWなどの長期休暇中</p>
              <p className="text-sm leading-relaxed text-text-light">
                年末年始やゴールデンウィーク、お盆休みなどの長期休暇中は、多くの金融機関やファクタリング会社が休業します。ラボルは365日対応のため、長期休暇中でも資金調達が可能です。休暇中の緊急時に頼れる存在です。
              </p>
            </div>
          </div>
        </section>

        {/* ── おすすめ / 向いていない人 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            こんな人におすすめ / 向いていない人
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <p className="mb-4 font-bold text-secondary">おすすめの人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>土日祝日に資金が必要になることがある方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>少額（1万円〜）の請求書を現金化したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>書類準備の手間を最小限にしたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手数料を事前に確定させたい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>大口（数百万円以上）の資金調達が必要な法人</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料10%より安い条件を求める方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>3社間ファクタリングを希望する方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 他社比較 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            他社との比較表
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">サービス名</th>
                  <th className="px-4 py-3 text-left font-semibold">手数料</th>
                  <th className="px-4 py-3 text-left font-semibold">入金速度</th>
                  <th className="px-4 py-3 text-left font-semibold">買取額</th>
                  <th className="px-4 py-3 text-left font-semibold">対応時間</th>
                  <th className="px-4 py-3 text-center font-semibold">オンライン</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-section-bg" : "bg-white"} ${i === 0 ? "font-semibold text-primary" : ""}`}>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.fee}</td>
                    <td className="px-4 py-3">{item.speed}</td>
                    <td className="px-4 py-3">{item.amount}</td>
                    <td className="px-4 py-3">{item.hours}</td>
                    <td className="px-4 py-3 text-center">{item.online}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 対応時間の詳細 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ラボルの24時間365日対応の詳細
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ラボルの最大の特徴である24時間365日対応について、具体的な対応内容を整理しました。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">対応内容</th>
                  <th className="px-4 py-3 text-left font-semibold">平日</th>
                  <th className="px-4 py-3 text-left font-semibold">土日祝</th>
                  <th className="px-4 py-3 text-left font-semibold">深夜・早朝</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-section-bg">
                  <td className="px-4 py-3 font-semibold">申込受付</td>
                  <td className="px-4 py-3 text-secondary">対応</td>
                  <td className="px-4 py-3 text-secondary">対応</td>
                  <td className="px-4 py-3 text-secondary">対応</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold">審査実施</td>
                  <td className="px-4 py-3 text-secondary">対応</td>
                  <td className="px-4 py-3 text-secondary">対応</td>
                  <td className="px-4 py-3 text-secondary">対応</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="px-4 py-3 font-semibold">入金処理</td>
                  <td className="px-4 py-3 text-secondary">対応</td>
                  <td className="px-4 py-3 text-secondary">対応</td>
                  <td className="px-4 py-3 text-secondary">対応</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            上記の通り、ラボルは申込・審査・入金の全プロセスを24時間365日対応しています。ただし、入金の反映は利用する銀行口座の仕様によって異なる場合があります。モアタイムシステムに対応した銀行であれば、土日祝日でもリアルタイムの入金反映が期待できます。
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-light">
            なお、土日祝日や深夜帯は混雑が少ないため、むしろ平日の日中より迅速に審査が進むケースもあるとされています。急ぎでない場合でも、時間に余裕のある夜間や休日に申し込むことでスムーズな対応が期待できます。
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

        {/* ── ペイトナーとの比較分析 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ラボルとペイトナーの詳細比較
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            フリーランス向けファクタリングとして比較されることが多いラボルとペイトナー。手数料はどちらも一律10%ですが、いくつかの重要な違いがあります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">対応時間の違い</p>
              <p className="text-sm leading-relaxed text-text-light">
                ラボルは24時間365日対応（土日祝含む）に対し、ペイトナーは基本的に平日対応です。土日祝日に急な資金需要がある場合はラボルが優位です。一方、平日であればペイトナーの方が最短10分と入金スピードが速い傾向にあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">買取可能額の違い</p>
              <p className="text-sm leading-relaxed text-text-light">
                ペイトナーは初回25万円・最大300万円の上限がありますが、ラボルには明確な上限額の公表がなく、審査により決定されます。1万円からの少額利用に対応している点は共通しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">必要書類の違い</p>
              <p className="text-sm leading-relaxed text-text-light">
                両社とも基本的には請求書と本人確認書類で申込可能です。ラボルは通帳コピーが不要な点がメリットですが、案件によっては追加書類を求められるケースがあります。ペイトナーはAI審査のため、書類のアップロードのみで手続きが進みます。
              </p>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-text-light">
            結論として、土日祝日の利用が重要ならラボル、平日のスピードを重視するならペイトナーがおすすめです。両サービスを登録しておき、状況に応じて使い分けるのも効果的な方法です。
          </p>
        </section>

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ラボルの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ラボルは、24時間365日対応という業界唯一の特徴を持つフリーランス向けファクタリングサービスです。土日祝日でも申込・入金ができるため、平日に忙しいフリーランスや急な資金需要に対応したい方にとって、他社にはない価値を提供しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料一律10%の明朗会計、1万円からの少額対応、通帳コピー不要の手軽さなど、フリーランスのニーズに合った設計が魅力です。最短60分での入金も、緊急時の資金調達手段として心強いポイントです。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、審査落ちのリスクや追加書類を求められるケースがある点は理解しておく必要があります。総合的に見て、土日祝日の利用ニーズがあるフリーランスにとっては最適な選択肢の一つといえます。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            ラボルの無料登録はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            24時間365日対応。最短60分入金のファクタリングを無料で始められます。
          </p>
          <a
            href="https://labol.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料登録
          </a>
        </section>

        {/* ── 利用前に知っておくべきこと ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ラボル利用前に知っておくべきこと
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ラボルを初めて利用する方のために、事前に理解しておくべきポイントを整理しました。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary font-bold">&#10003;</span>
                <span>手数料10%は売掛金額面から差し引かれる（10万円の請求書なら9万円が入金）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary font-bold">&#10003;</span>
                <span>売掛金の入金日に、ラボルに全額を返済する必要がある</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary font-bold">&#10003;</span>
                <span>2社間ファクタリングのため、取引先への通知は不要</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary font-bold">&#10003;</span>
                <span>信用情報機関への登録はなく、将来の融資審査に影響しない</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary font-bold">&#10003;</span>
                <span>ファクタリングは融資ではないため、貸借対照表の負債にはならない</span>
              </li>
            </ul>
          </div>
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
              href="/reviews/olta/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTA（オルタ）の口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">AI審査のクラウドファクタリングを検証</p>
            </Link>
            <Link
              href="/articles/for-freelance/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">フリーランス向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">個人事業主に最適なサービスを比較</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">49社以上を徹底比較</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
