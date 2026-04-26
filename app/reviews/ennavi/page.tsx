import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "えんナビの口コミ・評判｜24時間対応のファクタリングを検証",
  description:
    "えんナビの口コミ・評判を徹底調査。24時間365日対応、最短即日入金、買取額50万〜5,000万円の2社間ファクタリング専門サービスを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/ennavi/",
  },
  openGraph: {
    title:
      "えんナビの口コミ・評判｜24時間対応のファクタリングを検証",
    description:
      "えんナビの口コミ・評判を徹底調査。24時間365日対応の2社間ファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/ennavi/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "5%〜" },
  { label: "入金スピード", value: "最短即日" },
  { label: "買取可能額", value: "50万〜5,000万円" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "オンライン対応", value: "○（電話・メール対応可）" },
  { label: "対応時間", value: "24時間365日" },
  { label: "契約方式", value: "2社間ファクタリング" },
  { label: "運営会社", value: "株式会社インターテック" },
];

const goodReviews = [
  {
    title: "24時間対応で深夜でも相談できた",
    detail:
      "建設業の利用者からは「夜間に急な資金需要が発生し、深夜に電話したところすぐに対応してもらえた」という声があります。24時間365日対応という体制は、業界でも珍しく、時間を気にせず相談できる安心感が高く評価されています。",
  },
  {
    title: "即日入金でスピーディーだった",
    detail:
      "運送業の利用者からは「午前中に申込をして当日中に入金された」「必要書類を揃えておけば、かなりスムーズに手続きが進む」という声があります。急ぎの資金調達にも対応できるスピード感が支持されています。",
  },
  {
    title: "担当者の対応が丁寧",
    detail:
      "IT企業の経営者からは「初めてのファクタリングで不安だったが、仕組みから丁寧に説明してもらえた」「何度質問しても嫌な顔をせず対応してくれた」という口コミがあります。顧客対応の質の高さが評価されています。",
  },
  {
    title: "秘密厳守で取引先に知られなかった",
    detail:
      "製造業の利用者からは「2社間ファクタリングなので取引先に通知されることなく利用できた」「秘密保持について契約前にしっかり説明があり安心した」という声があります。取引先との関係性を気にする方に好評です。",
  },
];

const badReviews = [
  {
    title: "手数料がやや高めに感じた",
    detail:
      "広告業の利用者からは「他社と比較すると手数料がやや高めだった」「2社間ファクタリング専門のため仕方ないが、もう少し安いと助かる」という口コミがあります。24時間対応のサービス品質と手数料のバランスが判断ポイントになります。",
  },
  {
    title: "買取上限が5,000万円で大口には不向き",
    detail:
      "建設業の利用者からは「大きな工事案件で5,000万円を超える売掛金の買取ができなかった」という声があります。高額な売掛金の場合は、上限のないサービスを検討する必要があります。",
  },
  {
    title: "オンライン完結ではない場合がある",
    detail:
      "地方在住の利用者からは「最終的に書類の郵送が必要だった」「完全オンラインを期待していたが対面が必要なケースもあった」という声があります。案件内容によって対応方法が異なるようです。",
  },
];

const merits = [
  {
    title: "24時間365日いつでも対応",
    description:
      "えんナビの最大の特徴は24時間365日の対応体制です。深夜や休日でも電話やメールで相談でき、急な資金ニーズに対応できます。他社では営業時間内のみの対応が一般的なため、時間帯を気にせず利用できるのは大きなメリットです。",
  },
  {
    title: "最短即日で資金調達が可能",
    description:
      "必要書類が揃っていれば、申込当日に入金を受けることが可能です。急な支払いや予想外の出費が発生した場合でも、スピーディーに資金を確保できます。特に建設業や運送業など、急な資金需要が多い業種に適しています。",
  },
  {
    title: "2社間ファクタリングで取引先に秘密",
    description:
      "えんナビは2社間ファクタリング専門のため、売掛先に通知されることなく利用できます。取引先との関係を損なうリスクがなく、ファクタリングを利用していることを知られたくない事業者に最適です。",
  },
  {
    title: "50万円からの少額対応",
    description:
      "買取可能額は50万円からと少額から対応しているため、小規模な事業者やフリーランスでも利用しやすい設定です。少額の売掛金でも相談に乗ってもらえる柔軟さが評価されています。",
  },
];

const demerits = [
  {
    title: "手数料の下限が公開されていない",
    description:
      "公式サイトでは具体的な手数料率の下限が明示されていません。案件ごとに見積もりが必要で、事前に正確な費用感を把握しにくい面があります。他社では手数料1%〜と公開しているサービスもあるため、比較しづらいデメリットがあります。",
  },
  {
    title: "買取上限5,000万円の制限",
    description:
      "買取可能額の上限が5,000万円に設定されているため、大規模な売掛金の買取には対応できません。大口の資金調達が必要な場合は、ビートレーディングやOLTAなど上限なしのサービスを検討する必要があります。",
  },
  {
    title: "3社間ファクタリングに非対応",
    description:
      "2社間ファクタリング専門のため、3社間ファクタリングによる手数料の低減ができません。売掛先の同意が得られるケースで、さらに手数料を抑えたい場合は他社のサービスを検討する必要があります。",
  },
];

const steps = [
  { step: "1", title: "電話・メールで問い合わせ", description: "24時間365日対応。電話またはWebフォームから相談・申込が可能です。" },
  { step: "2", title: "必要書類の提出", description: "請求書・通帳コピー・身分証明書など必要書類を提出します。" },
  { step: "3", title: "審査・見積もり", description: "売掛金の内容をもとに審査が行われ、買取条件が提示されます。" },
  { step: "4", title: "契約・入金", description: "条件に合意後、契約を締結し指定口座に入金されます。最短即日。" },
];

const faqs = [
  {
    question: "えんナビは本当に24時間対応していますか？",
    answer:
      "はい、えんナビは24時間365日の対応体制を整えています。深夜や休日でも電話やメールで相談可能です。ただし、審査や入金は金融機関の営業時間に左右されるため、銀行休業日の即日入金は難しい場合があります。",
  },
  {
    question: "えんナビの手数料はいくらですか？",
    answer:
      "手数料は案件ごとに異なり、売掛先の信用力・金額・支払いサイトなどにより決定されます。2社間ファクタリング専門のため、一般的な2社間の相場（8〜18%）の範囲内となるケースが多いです。事前に無料見積もりで確認することをおすすめします。",
  },
  {
    question: "えんナビは個人事業主でも利用できますか？",
    answer:
      "はい、法人だけでなく個人事業主も利用可能です。業種や事業規模を問わず、50万円以上の売掛金があれば相談できます。フリーランスの方の利用実績もあります。",
  },
  {
    question: "えんナビで売掛先に通知されますか？",
    answer:
      "いいえ、えんナビは2社間ファクタリング専門のため、売掛先に通知されることはありません。利用者とえんナビの間で完結するため、取引先にファクタリングの利用を知られることなく資金調達が可能です。",
  },
  {
    question: "えんナビの審査に必要な書類は何ですか？",
    answer:
      "主な必要書類は、売掛金の請求書、通帳コピー（直近3ヶ月分）、身分証明書（代表者のもの）です。案件によっては追加書類を求められる場合がありますので、詳細は問い合わせ時に確認してください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "えんナビの口コミ・評判｜24時間対応のファクタリングを検証",
  description:
    "えんナビの口コミ・評判を徹底調査。24時間365日対応の2社間ファクタリングを検証。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
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
    "@id": "https://factoring-partner.pages.dev/reviews/ennavi/",
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
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "業者レビュー", item: "https://factoring-partner.pages.dev/reviews/" },
    { "@type": "ListItem", position: 3, name: "えんナビ" },
  ],
};

const comparisonData = [
  { name: "えんナビ", fee: "5%〜", speed: "最短即日", amount: "50万〜5,000万円", online: "○" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "QuQuMo", fee: "1%〜14.8%", speed: "最短2時間", amount: "制限なし", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function EnnaviReviewPage() {
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
          { label: "えんナビ" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            えんナビの口コミ・評判
            <br className="hidden md:block" />
            24時間対応のファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            24時間365日対応、最短即日入金のファクタリング「えんナビ」の口コミ・評判を徹底調査。2社間ファクタリング専門サービスの実態を検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. えんナビの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. えんナビのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. えんナビのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            えんナビの基本情報
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
            えんナビの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            えんナビは、株式会社インターテックが運営するファクタリングサービスです。業界では珍しい24時間365日対応の体制を整えており、深夜や休日でも資金調達の相談ができるのが最大の特徴です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            2社間ファクタリングに特化しており、売掛先への通知なしで利用できます。買取可能額は50万〜5,000万円で、中小企業や個人事業主の資金繰り改善をサポートしています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            最短即日での資金調達が可能で、急な支払いが発生した場合や、銀行融資の審査待ちの間のつなぎ資金としても活用されています。対面だけでなく電話やメールでも手続きが進められるため、全国から利用できます。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">えんナビの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>24時間365日対応で深夜・休日も相談可能</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>2社間ファクタリング専門で秘密厳守</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>最短即日入金の迅速対応</span>
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
            ※掲載している口コミは、Google口コミ・みん評・ヒカカク・ファクログ等の投稿を参考に要約・再構成したものです。出典元の原文とは異なります。サービス内容は調査時点のものであり、変更される場合があります。
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/factor/ennavi" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://minhyo.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">みん評</a></p>
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
            えんナビのメリット4つ
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
            えんナビのデメリット3つ
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
            えんナビの利用の流れ
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

        {/* ── 24時間対応の活用法 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            24時間対応を最大限活用する方法
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            えんナビの24時間365日対応は、他社にはない大きな強みです。この特徴を最大限に活用するためのポイントを解説します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">夜間に事前相談を行う</p>
              <p className="text-sm leading-relaxed text-text-light">
                日中は本業で忙しい経営者でも、夜間に電話で相談できます。事前に条件や必要書類を確認しておくことで、翌営業日にスムーズに手続きを進められます。初めてのファクタリングで不明点が多い場合に特に有効です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">休日の急な資金需要に備える</p>
              <p className="text-sm leading-relaxed text-text-light">
                週末に急な支払い要請が来た場合でも、すぐに相談できる安心感があります。土日祝日でも受付可能なため、月曜の朝一番で入金手続きを進められるよう、休日中に準備を整えることが可能です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">複数案件の見積もり比較</p>
              <p className="text-sm leading-relaxed text-text-light">
                時間を気にせず相談できるため、他社の営業時間外にえんナビの見積もりを取得し、じっくり比較検討する使い方もできます。焦らずに最適な条件を選べるのは大きなメリットです。
              </p>
            </div>
          </div>
        </section>

        {/* ── 利用シーン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            えんナビが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">建設業で急な材料費の支払いが必要な場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                建設業では工事の進捗に応じて材料費や外注費が発生しますが、入金は完工後になることが多く、資金繰りが厳しくなりがちです。えんナビなら24時間相談可能で最短即日入金のため、急な支払いにも対応できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">運送業で燃料費や車両維持費が先行する場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                運送業は燃料費や車両維持費が日常的に発生する一方、運賃の回収までにタイムラグが生じます。少額からの対応が可能なえんナビは、日常的な資金繰りの改善に活用できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">銀行融資の審査待ち期間のつなぎ資金</p>
              <p className="text-sm leading-relaxed text-text-light">
                銀行融資の審査は数週間かかることがありますが、その間にも支払いは発生します。えんナビの即日対応を活用すれば、融資実行までの期間をファクタリングでつなぐことが可能です。
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
                  <span>夜間・休日にも相談したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>2社間ファクタリングで秘密を守りたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>最短即日で資金が必要な方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>50万〜5,000万円の売掛金をお持ちの方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料の安さを最重視する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>5,000万円超の大口案件を検討している方</span>
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
                    <td className="px-4 py-3 text-center">{item.online}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 2社間ファクタリングの特徴 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            えんナビの2社間ファクタリングの仕組み
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            えんナビが採用する2社間ファクタリングは、利用者とえんナビの2者間で契約が完結する取引形態です。売掛先への通知が不要なため、取引先との関係を維持しながら資金調達が可能です。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">2社間ファクタリングのメリット</p>
              <p className="text-sm leading-relaxed text-text-light">
                最大のメリットは秘密保持です。取引先にファクタリングの利用を知られることがないため、「資金繰りが厳しいのではないか」という不安を取引先に与えずに済みます。また、取引先の同意が不要なため、手続きがスピーディーに進みます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料は3社間より高くなる傾向</p>
              <p className="text-sm leading-relaxed text-text-light">
                2社間ファクタリングは、ファクタリング会社がリスクを多く負うため、3社間と比較すると手数料は高くなる傾向があります。一般的に2社間の相場は8〜18%、3社間は1〜9%程度です。えんナビを利用する際は、この点を理解した上で判断しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">償還請求権なし（ノンリコース）</p>
              <p className="text-sm leading-relaxed text-text-light">
                えんナビのファクタリングは償還請求権なし（ノンリコース）のため、万が一売掛先が支払い不能になっても、利用者が代わりに支払う義務は発生しません。売掛先の倒産リスクをファクタリング会社が負担する形となります。
              </p>
            </div>
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

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            えんナビの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            えんナビは、24時間365日対応という業界でも珍しい体制を整えた、2社間ファクタリング専門のサービスです。深夜や休日でも相談可能な点は、急な資金需要が多い事業者にとって大きなメリットです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            最短即日入金のスピード感と、丁寧な顧客対応も口コミで高く評価されています。特にファクタリングの利用が初めての方でも安心して利用できるサポート体制が整っています。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、手数料の具体的な下限が公開されていない点や、買取上限5,000万円の制限はデメリットとして認識しておく必要があります。時間を問わず相談したい方や、2社間ファクタリングで秘密を守りたい方にとっては、有力な選択肢となるでしょう。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            えんナビの無料相談はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            24時間365日対応。最短即日入金の2社間ファクタリング。
          </p>
          <a
            href="https://en-navi.biz/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料相談
          </a>
        </section>

        {/* ── 利用前の注意点 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            えんナビを利用する前に確認すべきポイント
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            えんナビを利用する前に、以下のポイントを確認しておくとスムーズに手続きが進みます。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-semibold text-text-main">確認事項チェックリスト</p>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">1</span>
                <span>売掛金が50万円〜5,000万円の範囲内であること</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">2</span>
                <span>売掛先が法人であること（個人間の取引は対象外の場合あり）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">3</span>
                <span>請求書・通帳コピーなどの書類が準備できること</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">4</span>
                <span>売掛金の支払い期日が到来していないこと</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            初めての利用の場合は、まず電話で相談し、必要書類や手数料の目安を確認してから正式に申込むことをおすすめします。24時間対応なので、営業時間を気にせずいつでも問い合わせが可能です。
          </p>
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
              <p className="mt-1 text-sm text-text-light">累計9.1万社の大手ファクタリング会社を検証</p>
            </Link>
            <Link
              href="/reviews/olta/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTAの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料2〜9%のクラウドファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/no1/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">株式会社No.1の口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">最短即日・手数料1%〜のファクタリング</p>
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
