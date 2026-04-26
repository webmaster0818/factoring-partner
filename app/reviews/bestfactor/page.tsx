import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ベストファクターの口コミ・評判｜買取額30万〜1億円のファクタリング",
  description:
    "ベストファクターの口コミ・評判を徹底調査。買取額30万〜1億円、最短即日入金、手数料2%〜、法人・個人事業主対応のファクタリングを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/bestfactor/",
  },
  openGraph: {
    title:
      "ベストファクターの口コミ・評判｜買取額30万〜1億円のファクタリング",
    description:
      "ベストファクターの口コミ・評判を徹底調査。買取額30万〜1億円のファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/bestfactor/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "2%〜" },
  { label: "入金スピード", value: "最短即日" },
  { label: "買取可能額", value: "30万円〜1億円" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "契約方式", value: "2社間" },
  { label: "オンライン対応", value: "○（一部オンライン対応）" },
  { label: "審査通過率", value: "92%以上" },
  { label: "運営会社", value: "株式会社アレシア" },
];

const goodReviews = [
  {
    title: "審査通過率が高くて助かった",
    detail:
      "「他社で断られた案件がベストファクターでは通った」「審査通過率92%以上というだけあって、柔軟に対応してくれた」という声があります。審査基準が比較的柔軟で、幅広い事業者が利用できる点が評価されています。",
  },
  {
    title: "手数料が良心的だった",
    detail:
      "「手数料2%〜ということで見積もりを取ったら、実際にかなり低い手数料で対応してもらえた」「他社と比較して手数料が安かった」という口コミがあります。手数料2%〜の設定は2社間ファクタリングとしては低水準です。",
  },
  {
    title: "担当者の対応が丁寧で親切",
    detail:
      "「初めてのファクタリングで不安だったが、担当者が一から丁寧に説明してくれた」「質問にも迅速に回答してくれた」という声が見られます。対応品質の高さが信頼感につながっています。",
  },
  {
    title: "少額案件でも対応してくれる",
    detail:
      "「30万円からの少額でも対応してもらえた」「小規模な売掛金でも問題なく利用できた」という口コミがあります。最低買取額30万円からという設定は、中小企業や個人事業主にとって利用しやすいハードルです。",
  },
];

const badReviews = [
  {
    title: "手数料の上限が不明確",
    detail:
      "「手数料2%〜と書いてあるが上限が記載されていない」「案件によっては手数料が高くなる場合がある」という声があります。手数料の下限は2%と公開されていますが、上限が不明確なため実際の費用が見積もりを取るまでわからない点が指摘されています。",
  },
  {
    title: "完全オンライン完結ではない",
    detail:
      "「一部対面での手続きが必要だった」「完全オンラインを期待していたが、書類の郵送が必要になった」という口コミがあります。OLTAやQuQuMoのような完全オンライン完結型とは異なり、一部で対面・郵送が必要になるケースがあります。",
  },
  {
    title: "大手と比較すると知名度が低い",
    detail:
      "「利用前に口コミを探したが情報が少なかった」「ビートレーディングやOLTAほどの知名度がない」という声があります。サービス自体は充実していますが、口コミや評判の情報量は大手に比べると限られています。",
  },
];

const merits = [
  {
    title: "手数料2%〜の低水準",
    description:
      "ベストファクターの手数料は2%〜で、2社間ファクタリングとしては業界でも低い水準です。一般的な2社間ファクタリングの手数料が8〜18%であることを考えると、大幅にコストを抑えられる可能性があります。",
  },
  {
    title: "審査通過率92%以上の柔軟さ",
    description:
      "審査通過率92%以上を公表しており、業界でも高い通過率です。他社で断られた案件でも対応してくれる可能性があり、資金調達の選択肢が広がります。柔軟な審査基準は中小企業にとって心強い特徴です。",
  },
  {
    title: "30万円の少額から1億円の大口まで対応",
    description:
      "買取可能額が30万円〜1億円と幅広く、少額から大口案件までカバーしています。中小企業の小さな売掛金から、まとまった金額の資金調達まで、さまざまなニーズに対応できます。",
  },
  {
    title: "法人・個人事業主の両方に対応",
    description:
      "法人だけでなく個人事業主やフリーランスの方も利用可能です。個人事業主で30万円以上の売掛金がある方にとっては、手数料2%〜で利用できる有力なサービスです。",
  },
];

const demerits = [
  {
    title: "手数料の上限が非公開",
    description:
      "手数料2%〜の下限は公開されていますが、上限は明示されていません。案件の条件によっては手数料が高くなる可能性があるため、必ず見積もりを取って確認する必要があります。複数社の見積もりを比較することをおすすめします。",
  },
  {
    title: "完全オンライン完結ではない場合がある",
    description:
      "一部の手続きで対面や郵送が必要になるケースがあります。完全オンライン完結を重視する場合は、OLTAやQuQuMoなどの完全オンライン型サービスの方が適している場合があります。",
  },
  {
    title: "口コミ情報が限られている",
    description:
      "ビートレーディングやOLTAなどの大手と比較すると、口コミや評判の情報量が限られています。利用検討の際は公式サイトの情報に加え、直接問い合わせて詳細を確認することをおすすめします。",
  },
];

const steps = [
  { step: "1", title: "お問い合わせ・仮審査", description: "電話またはWebフォームから申込。売掛金の概要を伝えて仮審査を受けます。" },
  { step: "2", title: "必要書類の提出", description: "請求書・通帳コピー・決算書・本人確認書類等を提出します。" },
  { step: "3", title: "本審査・買取条件提示", description: "提出書類をもとに本審査を実施。手数料・買取金額が提示されます。" },
  { step: "4", title: "契約・入金", description: "条件に合意後、契約を締結。最短即日で指定口座に入金されます。" },
];

const faqs = [
  {
    question: "ベストファクターの手数料は実際にいくらですか？",
    answer:
      "ベストファクターの手数料は2%〜です。実際の手数料は、売掛先の信用力、売掛金の金額、支払いサイトなどの条件によって変動します。具体的な手数料は見積もりを取って確認する必要があります。",
  },
  {
    question: "ベストファクターは個人事業主でも利用できますか？",
    answer:
      "はい、ベストファクターは法人だけでなく個人事業主の方も利用可能です。30万円以上の売掛金があれば、個人事業主でも対象となります。",
  },
  {
    question: "ベストファクターの審査に必要な書類は何ですか？",
    answer:
      "主な必要書類は、請求書、通帳のコピー（直近数ヶ月分）、決算書（法人）または確定申告書（個人事業主）、代表者の本人確認書類です。案件により追加書類を求められる場合があります。",
  },
  {
    question: "ベストファクターの審査通過率はどのくらいですか？",
    answer:
      "ベストファクターは審査通過率92%以上を公表しています。他社で審査に落ちた案件でも、ベストファクターでは通過する可能性があります。ただし、全ての案件が通るわけではなく、売掛先の信用力等によっては審査落ちするケースもあります。",
  },
  {
    question: "ベストファクターの買取可能額はいくらですか？",
    answer:
      "ベストファクターの買取可能額は30万円〜1億円です。30万円からの少額案件にも対応しているため、中小企業や個人事業主の方でも利用しやすい設定となっています。1億円を超える案件は個別相談が必要です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ベストファクターの口コミ・評判｜買取額30万〜1億円のファクタリング",
  description:
    "ベストファクターの口コミ・評判を徹底調査。買取額30万〜1億円のファクタリングを検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/bestfactor/",
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
    { "@type": "ListItem", position: 3, name: "ベストファクター" },
  ],
};

const comparisonData = [
  { name: "ベストファクター", fee: "2%〜", speed: "最短即日", amount: "30万〜1億円", online: "○" },
  { name: "アクセルファクター", fee: "2%〜20%", speed: "最短即日", amount: "30万〜1億円", online: "○" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function BestfactorReviewPage() {
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
          { label: "ベストファクター" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ベストファクターの口コミ・評判
            <br className="hidden md:block" />
            買取額30万〜1億円のファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            買取額30万〜1億円、手数料2%〜、審査通過率92%以上のファクタリング「ベストファクター」の口コミ・評判を徹底調査します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. ベストファクターの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. ベストファクターのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. ベストファクターのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ベストファクターの基本情報
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
            ベストファクターの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ベストファクターは、株式会社アレシアが運営するファクタリングサービスです。買取可能額30万円〜1億円という幅広い対応範囲と、手数料2%〜の低水準な料金設定が特徴です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            審査通過率92%以上を公表しており、業界でも高い水準です。他社で審査に落ちた案件でも柔軟に対応してくれる可能性があり、資金調達に困っている事業者の受け皿として機能しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            法人だけでなく個人事業主にも対応しており、30万円からの少額案件にも対応できることから、幅広い事業規模の利用者に支持されています。担当者の丁寧な対応も好評で、初めてファクタリングを利用する方にも安心のサービスです。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">ベストファクターの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料2%〜の低水準な料金設定</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>審査通過率92%以上の柔軟な審査</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>30万円〜1億円の幅広い買取可能額</span>
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
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/factor/bestfactor" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://and-growth.co.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">GROWTH PARTNERS</a></p>
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
            ベストファクターのメリット4つ
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
            ベストファクターのデメリット3つ
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
            ベストファクターの利用の流れ
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
            ベストファクターが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">他社で審査に落ちてしまった場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                審査通過率92%以上という高い通過率は、他社で断られた案件でも受け入れてくれる可能性を示しています。資金調達が急務で他に選択肢がない場合の救世主となり得ます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">少額の売掛金を資金化したい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                30万円からの少額案件に対応しているため、小規模な売掛金でもファクタリングが可能です。個人事業主や小規模法人にとっては、少額対応は大きなメリットです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">初めてファクタリングを利用する場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                担当者の丁寧な対応が口コミで評価されており、ファクタリング初心者でも安心して利用できます。手続きの流れや必要書類について一から説明を受けられるため、不安なく進められます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">個人事業主で手数料を抑えたい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                個人事業主対応で手数料2%〜というのは、業界でも低い水準です。フリーランスや個人事業主でコスト重視の方にとっては、検討価値の高いサービスです。
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
                  <span>他社で審査に落ちて困っている方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>30万円〜の少額ファクタリングを希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手数料の安さを重視する個人事業主の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>丁寧な対応を重視する初心者の方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>完全オンライン完結を重視する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>1億円超の大口案件を希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料上限を事前に確認したい方</span>
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

        {/* ── 審査通過率の高さについて ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査通過率92%以上の意味と注意点
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ベストファクターが公表する審査通過率92%以上は、業界でも高い水準です。この数値の意味と、利用する際の注意点を解説します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">高い通過率が示すもの</p>
              <p className="text-sm leading-relaxed text-text-light">
                審査通過率92%以上は、多くの案件が審査を通過することを意味します。これは審査基準が比較的柔軟であることを示しており、赤字決算や税金の滞納がある事業者でも、売掛先の信用力が十分であれば対応してくれる可能性があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">通過率が高い理由</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングは売掛先の信用力を主に審査するため、利用者自身の財務状況よりも売掛先の支払い能力が重視されます。ベストファクターはこの原則に基づき、売掛先の信用力を適切に評価することで高い通過率を実現していると考えられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">注意点</p>
              <p className="text-sm leading-relaxed text-text-light">
                審査通過率が高いからといって、全ての案件が通るわけではありません。売掛先の信用力が著しく低い場合や、売掛金の実在性に疑義がある場合は審査落ちの可能性があります。また、通過しても手数料が高めに設定されるケースもあるため、条件は必ず確認しましょう。
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
            ベストファクターの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ベストファクターは、手数料2%〜の低水準、審査通過率92%以上の柔軟性、30万〜1億円の幅広い買取可能額を持つ、バランスの良いファクタリングサービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特に他社で審査に落ちてしまった方や、少額からの利用を希望する方にとっては、頼れる選択肢です。担当者の丁寧な対応も口コミで高く評価されており、初めてのファクタリングでも安心して利用できます。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、手数料上限が非公開であることや、完全オンライン完結ではない場合があることは理解しておく必要があります。見積もりは無料なので、まずは気軽に問い合わせてみることをおすすめします。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            ベストファクターの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料2%〜。買取額30万〜1億円・審査通過率92%以上のファクタリング。
          </p>
          <a
            href="https://bestfactor.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料見積もり
          </a>
        </section>

        {/* ── 利用前の準備 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ベストファクターを利用する前の準備
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ベストファクターをスムーズに利用するために、事前に準備しておくべき書類と情報を整理しました。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-semibold text-text-main">事前に用意するもの</p>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">1</span>
                <span>請求書（売掛先に発行済みのもの）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">2</span>
                <span>通帳のコピー（直近数ヶ月分の入出金が確認できるもの）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">3</span>
                <span>決算書（法人）または確定申告書（個人事業主）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">4</span>
                <span>代表者の本人確認書類（運転免許証・マイナンバーカードなど）</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            仮審査の段階では、電話やWebフォームで売掛金の概要を伝えるだけでOKです。本審査時に上記の書類が必要になるため、事前に準備しておくと手続きがスムーズに進みます。
          </p>
        </section>

        {/* ── 少額ファクタリングの活用法 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            少額ファクタリングの活用法
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ベストファクターは30万円からの少額案件に対応しています。少額ファクタリングを効果的に活用するためのポイントを紹介します。
          </p>
          <ul className="space-y-2 text-sm text-text-light">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>手数料率と実際のコストを事前に計算し、利益を圧迫しないか確認する</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>一時的な資金需要に絞って利用し、常態化しないよう注意する</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>複数の少額売掛金をまとめて提出することで、手数料交渉の余地が生まれる場合もある</span>
            </li>
          </ul>
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
              <p className="mt-1 text-sm text-text-light">審査通過率93%のファクタリングを検証</p>
            </Link>
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
