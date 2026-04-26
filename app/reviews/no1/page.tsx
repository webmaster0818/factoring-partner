import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "株式会社No.1の口コミ・評判｜最短即日・手数料1%〜のファクタリング",
  description:
    "株式会社No.1の口コミ・評判を徹底調査。最短即日入金、手数料1%〜15%、買取額50万〜5,000万円で法人・個人事業主対応のファクタリングを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/no1/",
  },
  openGraph: {
    title:
      "株式会社No.1の口コミ・評判｜最短即日・手数料1%〜のファクタリング",
    description:
      "株式会社No.1の口コミ・評判を徹底調査。手数料1%〜15%のファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/no1/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "1%〜15%" },
  { label: "入金スピード", value: "最短即日" },
  { label: "買取可能額", value: "50万〜5,000万円" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "オンライン対応", value: "○（オンライン契約可）" },
  { label: "契約方式", value: "2社間・3社間ファクタリング" },
  { label: "対面対応", value: "○（東京オフィス）" },
  { label: "運営会社", value: "株式会社No.1" },
];

const goodReviews = [
  {
    title: "手数料が思ったより安かった",
    detail:
      "建設業の利用者からは「手数料1%台で利用できた」「上限15%と聞いていたが実際は5%程度で済んだ」という声があります。売掛先の信用力や取引実績によって低い手数料が適用されるケースが多いようです。",
  },
  {
    title: "対応のスピードが速い",
    detail:
      "運送業の利用者からは「朝一で申込んで夕方には入金された」「急ぎの案件でも柔軟に対応してくれた」という口コミがあります。特に緊急性の高い案件への対応力が評価されています。",
  },
  {
    title: "担当者が親身に相談に乗ってくれた",
    detail:
      "製造業の利用者からは「経営状況を理解した上でベストな提案をしてくれた」「ファクタリング以外の資金調達方法も含めてアドバイスをもらえた」という声があります。コンサルティング的な対応が好評です。",
  },
  {
    title: "法人だけでなく個人事業主にも対応",
    detail:
      "フリーランスのデザイナーからは「個人事業主でも問題なく審査に通った」「少額の売掛金でも丁寧に対応してくれた」という口コミがあります。幅広い事業者層に対応している点が評価されています。",
  },
];

const badReviews = [
  {
    title: "手数料の幅が広く事前に把握しにくい",
    detail:
      "サービス業の利用者からは「1%〜15%の幅が広すぎて事前にコストが読めなかった」「見積もりを取るまで手数料がわからないのは不便」という声があります。事前に無料見積もりで確認する必要があります。",
  },
  {
    title: "オンライン完結ではない場合がある",
    detail:
      "地方在住の利用者からは「最終的に対面での面談が必要だった」「オンラインで完結すると思っていたが書類の郵送が発生した」という口コミがあります。案件によって対応方法が異なる場合があります。",
  },
  {
    title: "買取上限が5,000万円で大口には不向き",
    detail:
      "大手建設業の利用者からは「5,000万円超の売掛金に対応できなかった」という声があります。大口の資金調達が必要な場合は、上限のないビートレーディングやOLTAなどを検討する必要があります。",
  },
];

const merits = [
  {
    title: "手数料1%〜の低水準",
    description:
      "手数料が1%からという低水準で、3社間ファクタリングの場合はさらに低い手数料が適用される傾向があります。上限も15%に設定されており、2社間ファクタリングとしても相場（8〜18%）の範囲内で利用できます。",
  },
  {
    title: "2社間・3社間の両方に対応",
    description:
      "2社間と3社間の両方のファクタリングに対応しているため、取引先との関係性や手数料のバランスを考慮して最適な方式を選択できます。手数料を重視するなら3社間、秘密保持を重視するなら2社間と使い分けが可能です。",
  },
  {
    title: "最短即日の迅速な入金",
    description:
      "必要書類が揃っていれば最短即日で入金が可能です。急な資金需要にも対応できるスピード感があり、特に建設業や運送業など、資金繰りの変動が激しい業種の事業者に支持されています。",
  },
  {
    title: "対面でのコンサルティング対応",
    description:
      "東京オフィスでの対面相談が可能で、ファクタリングだけでなく経営全般のアドバイスも受けられます。初めてのファクタリングで不安な方や、資金繰りの根本的な改善を目指す方にとって、対面での丁寧な対応は大きな安心材料です。",
  },
];

const demerits = [
  {
    title: "手数料の幅が広い（1%〜15%）",
    description:
      "手数料が1%〜15%と幅広く設定されているため、実際にいくらになるかは見積もりを取るまでわかりません。1%が適用される条件は限定的で、一般的な案件では5〜10%程度になることが多いとされます。",
  },
  {
    title: "買取上限5,000万円の制限",
    description:
      "買取可能額の上限が5,000万円に設定されているため、大規模な売掛金の買取には対応できません。大口の案件が多い企業にとっては、上限のないサービスの方が適している場合があります。",
  },
  {
    title: "地方からは対面相談が難しい",
    description:
      "東京にオフィスがあるため、地方在住の事業者は対面での相談が難しい場合があります。オンラインや電話での対応も可能ですが、対面での相談を希望する地方の事業者には不便さがあります。",
  },
];

const steps = [
  { step: "1", title: "問い合わせ・申込", description: "電話・Webフォームまたは来社にて相談・申込を行います。" },
  { step: "2", title: "必要書類の提出", description: "請求書・通帳コピー・身分証明書・決算書等を提出します。" },
  { step: "3", title: "審査・見積もり", description: "売掛金の内容を審査し、手数料を含む買取条件が提示されます。" },
  { step: "4", title: "契約・入金", description: "条件合意後に契約を締結し、指定口座に最短即日で入金されます。" },
];

const faqs = [
  {
    question: "株式会社No.1の手数料は実際にいくらですか？",
    answer:
      "手数料は1%〜15%の範囲で、2社間か3社間か、売掛先の信用力、売掛金の金額、支払いサイトなどにより決まります。3社間ファクタリングの場合は1〜5%程度、2社間の場合は5〜15%程度が一般的です。無料見積もりで正確な手数料を確認できます。",
  },
  {
    question: "株式会社No.1は個人事業主でも利用できますか？",
    answer:
      "はい、法人だけでなく個人事業主も利用可能です。フリーランスの方でも、法人からの売掛金があれば審査対象となります。50万円以上の売掛金が必要です。",
  },
  {
    question: "株式会社No.1の審査に落ちることはありますか？",
    answer:
      "はい、売掛先の信用力が低い場合や、売掛金の内容に問題がある場合は審査に通らないことがあります。ただし、審査基準は比較的柔軟で、他社で断られた案件でも対応してもらえるケースがあるという口コミもあります。",
  },
  {
    question: "株式会社No.1で3社間ファクタリングのメリットは何ですか？",
    answer:
      "3社間ファクタリングは売掛先の同意が必要ですが、その分手数料が大幅に低くなります。1〜5%程度の手数料で利用できるため、取引先の理解が得られる場合はコストを大きく抑えられます。売掛先が大手企業の場合は特に有利です。",
  },
  {
    question: "株式会社No.1の対応エリアはどこですか？",
    answer:
      "全国対応しています。東京のオフィスでの対面相談のほか、電話・メール・オンラインでの対応も可能です。地方在住の方でもオンラインで手続きを進められますが、案件によっては来社が求められる場合もあります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "株式会社No.1の口コミ・評判｜最短即日・手数料1%〜のファクタリング",
  description:
    "株式会社No.1の口コミ・評判を徹底調査。手数料1%〜15%のファクタリングを検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/no1/",
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
    { "@type": "ListItem", position: 3, name: "株式会社No.1" },
  ],
};

const comparisonData = [
  { name: "株式会社No.1", fee: "1%〜15%", speed: "最短即日", amount: "50万〜5,000万円", online: "○" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "アクセルファクター", fee: "2%〜20%", speed: "最短即日", amount: "30万〜1億円", online: "○" },
];

/* ── Component ────────────────────────────────────── */

export default function No1ReviewPage() {
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
          { label: "株式会社No.1" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            株式会社No.1の口コミ・評判
            <br className="hidden md:block" />
            最短即日・手数料1%〜のファクタリング
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            手数料1%〜15%、最短即日入金の「株式会社No.1」の口コミ・評判を徹底調査。法人・個人事業主対応のファクタリングサービスを検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. 株式会社No.1の基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. 株式会社No.1のメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. 株式会社No.1のデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            株式会社No.1の基本情報
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
            株式会社No.1の会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            株式会社No.1は、法人・個人事業主向けにファクタリングサービスを提供する会社です。手数料1%〜15%という幅広い料金設定で、2社間・3社間の両方のファクタリングに対応しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特に対面でのコンサルティング対応に力を入れており、単なる売掛金の買取だけでなく、資金繰り全般のアドバイスを行っています。初めてファクタリングを利用する事業者でも安心して相談できる体制が整っています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            買取可能額は50万〜5,000万円で、中小企業から個人事業主まで幅広い層をカバーしています。最短即日での入金が可能で、急な資金需要にも迅速に対応します。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">株式会社No.1の3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料1%〜15%で2社間・3社間の両方に対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>対面でのコンサルティング対応で安心</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>最短即日入金の迅速な対応</span>
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
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/factor/no1" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://minhyo.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">みん評</a></p>
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
            株式会社No.1のメリット4つ
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
            株式会社No.1のデメリット3つ
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
            株式会社No.1の利用の流れ
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

        {/* ── 2社間と3社間の比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            2社間と3社間ファクタリングの選び方
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            株式会社No.1は2社間・3社間の両方に対応しているため、状況に応じて最適な方式を選択できます。それぞれの特徴を理解して選びましょう。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">2社間ファクタリングが向いている場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                取引先にファクタリングの利用を知られたくない場合は2社間がおすすめです。手数料は5〜15%程度と高めになりますが、売掛先への通知が不要で、手続きも比較的スピーディーに進みます。秘密保持を重視する方に最適です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">3社間ファクタリングが向いている場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料を最小限に抑えたい場合は3社間がおすすめです。売掛先の同意が必要ですが、手数料は1〜5%程度と大幅に低くなります。売掛先が大手企業で理解が得やすい場合や、既にファクタリングの利用が取引先に認知されている場合に有利です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">株式会社No.1での相談ポイント</p>
              <p className="text-sm leading-relaxed text-text-light">
                どちらの方式にするか迷った場合は、担当者に相談することをおすすめします。売掛先の業種や規模、取引関係などを踏まえて最適な方式をアドバイスしてくれます。対面でのコンサルティングを活用すれば、より的確な判断ができます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 利用シーン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            株式会社No.1が活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">建設業で工事代金の入金を待てない場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                建設業は完工後の入金サイトが長く、材料費や外注費の先払いが必要です。株式会社No.1なら最短即日入金で、工事期間中の資金繰りを改善できます。3社間ファクタリングを活用すれば手数料も抑えられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">初めてのファクタリングで不安がある場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                対面でのコンサルティング対応が充実しているため、ファクタリングの仕組みからじっくり説明を受けられます。手数料の計算方法や契約内容を十分理解した上で利用を開始できるので、初心者でも安心です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">個人事業主で少額の資金調達をしたい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                50万円からの少額対応で個人事業主も利用可能。フリーランスの方がクライアントへの入金待ちの間の生活費や次の案件の準備費用として活用するケースも多いです。
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
                  <span>2社間・3社間を比較検討したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>対面で相談したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>50万〜5,000万円の売掛金をお持ちの方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>経営全般のアドバイスも受けたい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>オンラインで全て完結させたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>5,000万円超の大口案件を希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>事前に正確な手数料を把握したい方</span>
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

        {/* ── 審査のポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            株式会社No.1の審査で重視されるポイント
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            株式会社No.1の審査では、利用者の信用力よりも売掛先の信用力が重視される傾向があります。審査を通過しやすくするためのポイントを解説します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">売掛先の信用力が最重要</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの審査では、売掛先が確実に支払いを行うかどうかが最も重要な判断基準です。売掛先が上場企業や大手企業の場合は審査に通りやすく、手数料も低く設定される傾向があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">継続的な取引実績があると有利</p>
              <p className="text-sm leading-relaxed text-text-light">
                売掛先との取引が初回ではなく、継続的な取引実績がある場合は審査で有利になります。通帳の入出金明細で過去の入金実績を証明できると、審査通過の確率が上がります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">書類を完全に揃えて申込む</p>
              <p className="text-sm leading-relaxed text-text-light">
                書類の不備があると審査に時間がかかるだけでなく、審査落ちの原因にもなります。請求書、通帳コピー、身分証明書など必要書類を全て揃えた上で申込むことで、スムーズな審査と即日入金の可能性が高まります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            株式会社No.1の総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            株式会社No.1は、2社間・3社間の両方に対応し、手数料1%〜15%の幅広い料金設定で多様なニーズに応えるファクタリングサービスです。特に対面でのコンサルティング対応が充実しており、初めてのファクタリング利用者でも安心して相談できます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            3社間ファクタリングを利用すれば手数料1〜5%程度の低水準で利用でき、コストを重視する事業者にとっても魅力的な選択肢です。最短即日入金のスピード感も評価されています。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、手数料の幅が広く事前にコストが把握しにくい点や、買取上限5,000万円の制限は考慮が必要です。対面相談を重視する方や、2社間・3社間を比較検討したい方にとっては最適なサービスの一つです。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            株式会社No.1の無料相談はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料1%〜。2社間・3社間の両方に対応したファクタリング。
          </p>
          <a
            href="https://no1service.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料相談
          </a>
        </section>

        {/* ── 利用前の準備 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            株式会社No.1を利用する前の準備
          </h2>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-semibold text-text-main">事前に用意するもの</p>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">1</span>
                <span>請求書（売掛先に発行済みのもの）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">2</span>
                <span>通帳コピー（直近3ヶ月分の入出金明細）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">3</span>
                <span>代表者の身分証明書</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">4</span>
                <span>決算書または確定申告書（直近2期分）</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            2社間と3社間のどちらを利用するか迷っている場合は、両方の見積もりを依頼することも可能です。担当者が最適な方式をアドバイスしてくれるため、まずは気軽に相談してみましょう。
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
              href="/reviews/accelfactor/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料2%〜のファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/olta/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTAの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料2〜9%のクラウドファクタリングを検証</p>
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
