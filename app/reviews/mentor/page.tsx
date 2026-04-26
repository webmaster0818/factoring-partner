import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "メンターキャピタルの口コミ・評判｜300万円以下の小口ファクタリング",
  description:
    "メンターキャピタルの口コミ・評判を徹底調査。小口対応、最短即日入金、手数料5%〜、法人・個人事業主対応のファクタリングを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/mentor/",
  },
  openGraph: {
    title:
      "メンターキャピタルの口コミ・評判｜300万円以下の小口ファクタリング",
    description:
      "メンターキャピタルの口コミ・評判を徹底調査。小口ファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/mentor/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "5%〜" },
  { label: "入金スピード", value: "最短即日" },
  { label: "買取可能額", value: "30万〜1億円" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "オンライン対応", value: "○（電話・メール対応可）" },
  { label: "契約方式", value: "2社間・3社間ファクタリング" },
  { label: "得意分野", value: "300万円以下の小口案件" },
  { label: "運営会社", value: "株式会社メンターキャピタル" },
];

const goodReviews = [
  {
    title: "少額でも丁寧に対応してくれた",
    detail:
      "Web制作フリーランスの利用者からは「100万円以下の小さな売掛金でも嫌な顔一つせず対応してくれた」「他社では少額すぎると断られた案件が通った」という声があります。小口案件への対応力が高く評価されています。",
  },
  {
    title: "即日入金でスピーディーだった",
    detail:
      "建設業の利用者からは「朝に申込をして夕方には入金されていた」「必要書類を事前に準備しておいたらスムーズに進んだ」という口コミがあります。最短即日入金のスピード感が、急ぎの資金需要に対応できると好評です。",
  },
  {
    title: "担当者のアドバイスが的確だった",
    detail:
      "運送業の利用者からは「資金繰りの相談にも乗ってくれて、ファクタリング以外の方法も提案してくれた」「経験豊富な担当者で安心して相談できた」という声があります。単なる売掛金買取にとどまらない、総合的なサポートが評価されています。",
  },
  {
    title: "個人事業主でも利用しやすかった",
    detail:
      "デザイナーの利用者からは「個人事業主として初めてファクタリングを利用したが、手続きの流れを丁寧に説明してもらえた」「少額からでも対応してくれるので個人事業主にとってはありがたい」という口コミがあります。",
  },
];

const badReviews = [
  {
    title: "手数料がやや高めに感じた",
    detail:
      "IT企業の経営者からは「手数料5%〜だが実際は8〜12%程度だった」「オンライン完結型のサービスと比べるとコストが高い」という声があります。対面サポートの手厚さと引き換えに、手数料はやや高めの傾向があります。",
  },
  {
    title: "完全オンラインでは完結しない場合がある",
    detail:
      "地方在住の利用者からは「最終的に来社または書類の郵送が必要だった」「完全オンラインを期待していたが対面が必要だった」という口コミがあります。案件内容によって対面での面談が求められるケースがあります。",
  },
  {
    title: "情報が少なく比較が難しい",
    detail:
      "サービス業の利用者からは「大手と比べて口コミや評判の情報が少なかった」「利用前に十分な情報収集ができなかった」という声があります。大手ファクタリング会社と比較すると、公開情報が限られている面があります。",
  },
];

const merits = [
  {
    title: "300万円以下の小口案件に強い",
    description:
      "メンターキャピタルは300万円以下の小口ファクタリングを得意としています。多くのファクタリング会社が大口案件を優先する中、小口案件にも丁寧に対応する姿勢は、中小企業や個人事業主にとって大きなメリットです。",
  },
  {
    title: "最短即日の迅速な入金",
    description:
      "必要書類が揃っていれば最短即日での入金が可能です。小口案件は審査もスピーディーに進む傾向があり、急な資金需要にも迅速に対応できます。特に少額の支払いが急に発生した場合に重宝します。",
  },
  {
    title: "2社間・3社間の両方に対応",
    description:
      "2社間と3社間の両方のファクタリングに対応しているため、取引先との関係性や手数料のバランスを考慮して最適な方式を選択できます。秘密保持を重視するなら2社間、手数料を重視するなら3社間と使い分けが可能です。",
  },
  {
    title: "手厚いコンサルティングサポート",
    description:
      "ファクタリングの仕組みから資金繰り全般まで、経験豊富な担当者が丁寧にサポートします。初めてのファクタリング利用者でも安心して相談でき、最適な資金調達方法のアドバイスを受けられます。",
  },
];

const demerits = [
  {
    title: "手数料5%〜とやや高め",
    description:
      "手数料が5%からの設定で、OLTAの2%〜やQuQuMoの1%〜と比較するとやや高めです。小口案件は手数料率が高くなる傾向があるため、実際の手数料は8〜15%程度になるケースが多いとされます。",
  },
  {
    title: "完全オンライン完結ではない",
    description:
      "電話やメールでの対応は可能ですが、案件によっては対面での面談や書類の郵送が必要になる場合があります。完全オンラインで手続きを完了させたい方にとっては不便に感じる可能性があります。",
  },
  {
    title: "公開情報が限られる",
    description:
      "大手ファクタリング会社と比較すると、累計取引額や利用者数などの公開情報が限られています。サービスの信頼性を数字で判断したい方にとっては、情報不足に感じる面があります。",
  },
];

const steps = [
  { step: "1", title: "電話・メールで問い合わせ", description: "電話またはWebフォームから相談・申込を行います。" },
  { step: "2", title: "必要書類の提出", description: "請求書・通帳コピー・身分証明書等の必要書類を提出します。" },
  { step: "3", title: "審査・見積もり", description: "売掛金の内容をもとに審査が行われ、手数料を含む買取条件が提示されます。" },
  { step: "4", title: "契約・入金", description: "条件に合意後、契約を締結し指定口座に最短即日で入金されます。" },
];

const faqs = [
  {
    question: "メンターキャピタルの手数料はいくらですか？",
    answer:
      "手数料は5%〜で、売掛先の信用力・売掛金の金額・支払いサイト・2社間か3社間かなどにより決定されます。300万円以下の小口案件では8〜15%程度が一般的です。3社間ファクタリングの場合はより低い手数料が適用される傾向があります。",
  },
  {
    question: "メンターキャピタルは個人事業主でも利用できますか？",
    answer:
      "はい、法人だけでなく個人事業主も利用可能です。30万円以上の売掛金があれば審査対象となります。個人事業主やフリーランスの方の小口案件にも丁寧に対応しています。",
  },
  {
    question: "メンターキャピタルで300万円以上の案件も対応していますか？",
    answer:
      "はい、300万円以上の案件も対応可能で、買取可能額は最大1億円までです。ただし、メンターキャピタルは300万円以下の小口案件を得意としており、大口案件についてはビートレーディングやOLTAなど大手のサービスも合わせて検討することをおすすめします。",
  },
  {
    question: "メンターキャピタルの審査に必要な書類は何ですか？",
    answer:
      "主な必要書類は、請求書（売掛先に発行済みのもの）、銀行口座の通帳コピー（直近3ヶ月分）、代表者の身分証明書です。案件によっては決算書や確定申告書等の追加書類を求められる場合があります。",
  },
  {
    question: "メンターキャピタルで3社間ファクタリングのメリットは何ですか？",
    answer:
      "3社間ファクタリングは売掛先の同意が必要ですが、手数料が大幅に低くなるメリットがあります。5%前後の手数料で利用できるケースもあり、手数料を重視する場合は3社間を検討する価値があります。売掛先が大手企業の場合は特に有利です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "メンターキャピタルの口コミ・評判｜300万円以下の小口ファクタリング",
  description:
    "メンターキャピタルの口コミ・評判を徹底調査。小口ファクタリングを検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/mentor/",
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
    { "@type": "ListItem", position: 3, name: "メンターキャピタル" },
  ],
};

const comparisonData = [
  { name: "メンターキャピタル", fee: "5%〜", speed: "最短即日", amount: "30万〜1億円", online: "○" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "アクセルファクター", fee: "2%〜20%", speed: "最短即日", amount: "30万〜1億円", online: "○" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function MentorReviewPage() {
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
          { label: "メンターキャピタル" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            メンターキャピタルの口コミ・評判
            <br className="hidden md:block" />
            300万円以下の小口ファクタリング
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            小口ファクタリングに強い「メンターキャピタル」の口コミ・評判を徹底調査。手数料5%〜、最短即日入金のサービスを検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. メンターキャピタルの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. メンターキャピタルのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. メンターキャピタルのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            メンターキャピタルの基本情報
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
            メンターキャピタルの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            メンターキャピタルは、株式会社メンターキャピタルが運営するファクタリングサービスです。特に300万円以下の小口案件に強く、中小企業や個人事業主の資金調達をサポートしています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            2社間・3社間の両方のファクタリングに対応しており、取引先との関係性やコストのバランスを考慮した最適な方式を提案してくれます。手数料は5%〜で、最短即日での入金が可能です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            対面でのコンサルティングに力を入れており、ファクタリングの仕組みや資金繰り改善のアドバイスを丁寧に行っています。初めてファクタリングを利用する方でも安心して相談できる環境が整っています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">メンターキャピタルの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>300万円以下の小口案件に特化した対応力</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>2社間・3社間の両方に対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>丁寧なコンサルティングサポート</span>
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
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/factor/mentor-capital" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://and-g.co.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">GROWTH PARTNERS</a></p>
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
            メンターキャピタルのメリット4つ
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
            メンターキャピタルのデメリット3つ
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
            メンターキャピタルの利用の流れ
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

        {/* ── 小口ファクタリングの特徴 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            小口ファクタリングのメリットと注意点
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            メンターキャピタルが得意とする300万円以下の小口ファクタリングには、独自のメリットと注意点があります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">小口ファクタリングのメリット</p>
              <p className="text-sm leading-relaxed text-text-light">
                小口案件は審査が比較的スピーディーに進む傾向があります。また、必要な書類も最小限で済むケースが多く、手続きの負担が少ないです。定期的に小口の資金調達を行いたい中小企業や個人事業主にとっては、使い勝手の良いサービスです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料率への注意</p>
              <p className="text-sm leading-relaxed text-text-light">
                一般的に、ファクタリングは売掛金の金額が小さいほど手数料率が高くなる傾向があります。100万円の売掛金に10%の手数料がかかる場合、実質的な負担は10万円です。少額であっても手数料の実額をしっかり確認し、資金調達のメリットと比較して判断しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">継続利用による手数料低減の可能性</p>
              <p className="text-sm leading-relaxed text-text-light">
                メンターキャピタルでは、継続的に利用することで信頼関係が構築され、手数料が下がる可能性があります。初回は高めの手数料でも、2回目以降は交渉の余地が広がるケースがあります。長期的な利用を視野に入れて関係を築くのも一つの方法です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 利用シーン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            メンターキャピタルが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">個人事業主で少額の資金が必要な場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                30万円からの少額対応で個人事業主も利用可能。クライアントからの入金待ちの間の運転資金として、必要な分だけ売掛金を現金化できます。フリーランスの方にも使いやすいサービスです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">他社で少額すぎると断られた場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                大手ファクタリング会社の中には、100万円以下の小口案件を受け付けないところもあります。メンターキャピタルは小口案件に特化しているため、他社で断られた案件でも対応してもらえる可能性があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">初めてのファクタリングで丁寧なサポートが欲しい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                コンサルティング的な対応に力を入れているため、ファクタリングの仕組みからしっかり説明を受けたい方に適しています。資金繰りの根本的な課題解決に向けたアドバイスも期待できます。
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
                  <span>300万円以下の小口案件を持つ方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>他社で少額すぎると断られた方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>対面で丁寧な説明を受けたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>2社間・3社間を比較検討したい方</span>
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
                  <span>完全オンラインで完結させたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>大手の知名度・実績を重視する方</span>
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

        {/* ── 利用前の準備 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            メンターキャピタルを利用する前の準備
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            メンターキャピタルをスムーズに利用するために、事前に準備しておくべき書類と確認事項を整理しました。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-semibold text-text-main">事前準備チェックリスト</p>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">1</span>
                <span>売掛金の請求書（発行済みで支払い期日が到来していないもの）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">2</span>
                <span>銀行口座の通帳コピー（直近3ヶ月分、売掛先からの入金履歴確認用）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">3</span>
                <span>代表者の身分証明書（運転免許証・マイナンバーカード等）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">4</span>
                <span>2社間と3社間のどちらを希望するか事前に検討しておく</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            初めての利用の場合は、まず電話で相談し、必要書類や手数料の目安を確認してから正式に申込むことをおすすめします。担当者が丁寧に案内してくれるため、不明点があれば遠慮なく質問しましょう。
          </p>
        </section>

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            メンターキャピタルの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            メンターキャピタルは、300万円以下の小口ファクタリングに特化した、中小企業・個人事業主向けのサービスです。他社では対応が難しい少額案件にも丁寧に対応する姿勢が高く評価されています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            2社間・3社間の両方に対応しており、コンサルティング的なサポートも充実しているため、初めてのファクタリング利用者でも安心して相談できます。最短即日入金のスピード感も実務上のメリットです。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、手数料5%〜という設定はオンライン完結型のサービスと比較するとやや高めです。手数料よりも対応の丁寧さや小口案件への柔軟性を重視する方にとっては、最適な選択肢の一つです。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            メンターキャピタルの無料相談はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            300万円以下の小口ファクタリング。最短即日入金対応。
          </p>
          <a
            href="https://mentorcapital.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料相談
          </a>
        </section>

        {/* ── アクセルファクターとの比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            アクセルファクターとの比較
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            小口案件に対応するファクタリング会社として、アクセルファクターとよく比較されます。両社の違いを把握して選択に役立てましょう。
          </p>
          <div className="rounded-lg border border-border bg-white p-5">
            <p className="mb-2 font-semibold text-text-main">手数料と対応範囲</p>
            <p className="text-sm leading-relaxed text-text-light">
              アクセルファクターは手数料2%〜20%で30万〜1億円に対応しています。メンターキャピタルは手数料5%〜で同じく30万〜1億円ですが、300万円以下の小口案件に特化しています。手数料の下限はアクセルファクターが低いですが、小口案件の丁寧さではメンターキャピタルに強みがあります。
            </p>
          </div>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/accelfactor/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料2%〜のファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/no1/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">株式会社No.1の口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料1%〜のファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/minnano/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">みんなのファクタリングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">10万円からの少額対応ファクタリング</p>
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
