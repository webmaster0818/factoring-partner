import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ジャパンマネジメントの口コミ・評判｜九州発のファクタリング会社",
  description:
    "ジャパンマネジメントの口コミ・評判を徹底調査。福岡拠点、法人・個人事業主対応、最短即日入金、手数料3%〜の九州発ファクタリング会社を利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/japan-management/",
  },
  openGraph: {
    title:
      "ジャパンマネジメントの口コミ・評判｜九州発のファクタリング会社",
    description:
      "ジャパンマネジメントの口コミ・評判を徹底調査。福岡拠点の九州発ファクタリング会社を検証。",
    url: "https://factoring-partner.pages.dev/reviews/japan-management/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "3%〜" },
  { label: "入金スピード", value: "最短即日" },
  { label: "買取可能額", value: "要相談" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "契約方式", value: "2社間・3社間" },
  { label: "オンライン対応", value: "○（来店不要で対応可）" },
  { label: "対応エリア", value: "全国（福岡・東京に拠点）" },
  { label: "運営会社", value: "株式会社ラインオフィスサービス" },
];

const goodReviews = [
  {
    title: "地方企業でも親身に対応してくれる",
    detail:
      "「福岡に拠点があるので九州エリアでも安心して相談できた」「地方の中小企業にも丁寧に対応してくれた」という声があります。東京だけでなく福岡にも拠点があるため、九州・中四国エリアの企業にとってアクセスしやすいと好評です。",
  },
  {
    title: "手数料3%〜で良心的",
    detail:
      "「3社間ファクタリングで手数料が3%台に収まった」「他社の見積もりと比較して良心的な手数料だった」という口コミがあります。手数料3%〜の設定は業界でも低水準で、コスト面で評価されています。",
  },
  {
    title: "個人事業主でも利用できた",
    detail:
      "「個人事業主だが問題なく利用できた」「法人でなくても丁寧に対応してくれた」という声が見られます。法人だけでなく個人事業主にも対応しているため、幅広い事業者が利用可能です。",
  },
  {
    title: "担当者の対応が迅速で丁寧",
    detail:
      "「問い合わせ後すぐに折り返しがあり、必要書類の説明も丁寧だった」「急ぎの案件でも迅速に対応してくれた」という口コミがあります。担当者の対応品質の高さが信頼感につながっています。",
  },
];

const badReviews = [
  {
    title: "手数料の上限が不明確",
    detail:
      "「手数料3%〜と書いてあるが上限がわからない」「2社間の場合は結構高くなった」という声があります。手数料の下限は公開されていますが、上限が不明確なため、実際の費用が見積もりを取るまでわからないという指摘があります。",
  },
  {
    title: "大手ほどの知名度がない",
    detail:
      "「口コミや情報が少なく、最初は不安だった」「大手に比べると実績情報が少ない」という口コミがあります。ビートレーディングやOLTAなどの大手と比較すると、知名度や口コミ数は限られています。",
  },
  {
    title: "オンライン完結が難しいケースもある",
    detail:
      "「基本的には来店不要だが、案件によっては対面が必要だった」という声があります。完全オンライン完結を希望する場合は、案件内容によって制限がある可能性があります。",
  },
];

const merits = [
  {
    title: "手数料3%〜の低水準",
    description:
      "ジャパンマネジメントの手数料は3%〜で、業界でも低水準の設定です。特に3社間ファクタリングの場合は低い手数料が適用されやすく、コストを重視する事業者にとって魅力的な選択肢です。",
  },
  {
    title: "福岡拠点で九州エリアに強い",
    description:
      "福岡に拠点を持つことで、九州・中四国エリアの事業者が対面で相談できる環境が整っています。東京一極集中のファクタリング業界において、地方拠点を持つサービスは限られており、地方の中小企業にとって大きなメリットです。",
  },
  {
    title: "法人・個人事業主の両方に対応",
    description:
      "法人だけでなく個人事業主やフリーランスの方も利用可能です。幅広い事業形態に対応しているため、事業規模を問わずファクタリングを利用できます。",
  },
  {
    title: "2社間・3社間の両方に対応",
    description:
      "秘密性を重視する場合は2社間、手数料を抑えたい場合は3社間と、状況に応じた柔軟な対応が可能です。担当者が事業の状況をヒアリングした上で、最適な契約方式を提案してくれます。",
  },
];

const demerits = [
  {
    title: "手数料の上限が不明確",
    description:
      "手数料3%〜と下限は公開されていますが、上限は明示されていません。2社間ファクタリングの場合や、信用リスクが高い案件では手数料が高くなる可能性があります。事前に見積もりを取って確認することが重要です。",
  },
  {
    title: "口コミ・評判が少ない",
    description:
      "大手ファクタリング会社と比較すると、利用者の口コミや評判の数が限られています。情報収集しにくい面がありますが、これはサービスの質と直接関係するものではなく、知名度の問題といえます。",
  },
  {
    title: "完全オンライン対応に制限あり",
    description:
      "基本的に来店不要での対応が可能ですが、案件の内容や金額によっては対面での面談が必要になるケースがあります。完全オンライン完結を重視する場合は、OLTAやQuQuMoなどの方が適している場合もあります。",
  },
];

const steps = [
  { step: "1", title: "お問い合わせ", description: "電話またはWebフォームから問い合わせ。売掛金の情報や希望額を伝えます。" },
  { step: "2", title: "ヒアリング・書類提出", description: "担当者が事業内容をヒアリング。請求書・通帳コピー・本人確認書類等を提出します。" },
  { step: "3", title: "審査・見積もり提示", description: "売掛先の信用調査を含む審査後、手数料・買取条件が提示されます。" },
  { step: "4", title: "契約・入金", description: "条件に合意後、契約を締結。最短即日で指定口座に入金されます。" },
];

const faqs = [
  {
    question: "ジャパンマネジメントの手数料はいくらですか？",
    answer:
      "ジャパンマネジメントの手数料は3%〜です。実際の手数料率は、契約方式（2社間・3社間）、売掛先の信用力、売掛金の金額、支払いサイトなどの条件によって異なります。3社間ファクタリングの方が低い手数料が適用される傾向があります。",
  },
  {
    question: "ジャパンマネジメントは個人事業主でも利用できますか？",
    answer:
      "はい、ジャパンマネジメントは法人だけでなく個人事業主の方も利用可能です。フリーランスの方でも、法人からの売掛金があれば利用対象となります。",
  },
  {
    question: "福岡以外の地域でも利用できますか？",
    answer:
      "はい、全国対応しています。福岡本社のほかに東京にも拠点があり、来店不要での手続きも可能です。九州エリアだけでなく、全国の事業者が利用できます。",
  },
  {
    question: "ジャパンマネジメントの審査に必要な書類は何ですか？",
    answer:
      "主な必要書類は、請求書、通帳のコピー（直近数ヶ月分）、決算書（法人）または確定申告書（個人事業主）、代表者の本人確認書類です。案件により追加書類を求められる場合があります。",
  },
  {
    question: "ジャパンマネジメントの入金スピードはどのくらいですか？",
    answer:
      "最短即日での入金に対応しています。ただし、審査の状況や書類の準備状況によっては翌日以降になるケースもあります。急ぎの場合は、事前に必要書類を揃えた上で午前中に申し込むことでスピードアップが期待できます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ジャパンマネジメントの口コミ・評判｜九州発のファクタリング会社",
  description:
    "ジャパンマネジメントの口コミ・評判を徹底調査。福岡拠点の九州発ファクタリング会社を検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/japan-management/",
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
    { "@type": "ListItem", position: 3, name: "ジャパンマネジメント" },
  ],
};

const comparisonData = [
  { name: "ジャパンマネジメント", fee: "3%〜", speed: "最短即日", amount: "要相談", online: "○" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "アクセルファクター", fee: "2%〜20%", speed: "最短即日", amount: "30万〜1億円", online: "○" },
];

/* ── Component ────────────────────────────────────── */

export default function JapanManagementReviewPage() {
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
          { label: "ジャパンマネジメント" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ジャパンマネジメントの口コミ・評判
            <br className="hidden md:block" />
            九州発のファクタリング会社を検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            福岡拠点・手数料3%〜・最短即日入金・法人から個人事業主まで対応の「ジャパンマネジメント」の口コミ・評判を徹底調査します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. ジャパンマネジメントの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. ジャパンマネジメントのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. ジャパンマネジメントのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ジャパンマネジメントの基本情報
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
            ジャパンマネジメントの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ジャパンマネジメントは、株式会社ラインオフィスサービスが運営するファクタリングサービスです。福岡に本社を構え、九州・中四国エリアを中心に全国の事業者にサービスを提供しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料3%〜という業界でも低水準の料金設定が特徴で、法人だけでなく個人事業主にも対応しています。2社間・3社間ファクタリングの両方に対応しており、事業者のニーズに合わせた柔軟なプランを提案しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            九州発のファクタリング会社として、地方の中小企業にも寄り添ったサービスを展開しています。東京にも拠点を持ち、全国の事業者に対応可能な体制を整えています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">ジャパンマネジメントの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料3%〜の低水準な料金設定</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>福岡拠点で九州エリアの企業に強い</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>法人・個人事業主の両方に対応</span>
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
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/factor/japan-management" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://and-growth.co.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">GROWTH PARTNERS</a></p>
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
            ジャパンマネジメントのメリット4つ
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
            ジャパンマネジメントのデメリット3つ
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
            ジャパンマネジメントの利用の流れ
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
            ジャパンマネジメントが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">九州エリアで対面相談したい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                福岡に本社があるため、九州・中四国エリアの事業者は対面での相談がしやすい環境です。ファクタリングの利用が初めてで不安がある場合、直接会って相談できる安心感は大きいです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料を抑えて3社間ファクタリングを利用したい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                取引先の協力が得られるなら、3社間ファクタリングで手数料3%〜の低水準で利用可能です。長期的にファクタリングを活用する予定がある場合、低手数料は年間コストに大きく影響します。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">個人事業主で初めてファクタリングを利用する場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                個人事業主にも対応しており、担当者が丁寧にヒアリングしてくれるため、ファクタリング初心者でも安心して利用できます。必要書類や流れについて詳しく説明を受けられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">急ぎの資金需要に対応したい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                最短即日入金に対応しているため、突発的な資金需要にも対応可能です。事前に必要書類を準備しておくことで、スムーズな手続きが期待できます。
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
                  <span>九州・中四国エリアで対面相談したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手数料3%〜の低コストファクタリングを希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>個人事業主でファクタリングを利用したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>2社間・3社間を選びたい方</span>
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
                  <span>口コミ・評判が豊富なサービスを選びたい方</span>
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

        {/* ── 九州エリアのファクタリング事情 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            九州エリアのファクタリング事情
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリング業界は東京に本社を置く会社が圧倒的に多く、地方の事業者にとってはアクセスしにくい状況がありました。ジャパンマネジメントのように九州に拠点を持つサービスは、地方の事業者にとって貴重な存在です。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">地方企業の資金調達ニーズ</p>
              <p className="text-sm leading-relaxed text-text-light">
                九州エリアには建設業、製造業、農業関連など、入金サイクルが長い業種が多くあります。これらの業種では売掛金の早期資金化ニーズが高く、ファクタリングの活用が広がっています。地元に拠点を持つサービスは相談しやすいという利点があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">オンラインと対面のハイブリッド対応</p>
              <p className="text-sm leading-relaxed text-text-light">
                近年はオンライン完結型のサービスも増えていますが、初めてファクタリングを利用する事業者にとっては対面での説明を受けたいというニーズも根強いです。ジャパンマネジメントはオンラインと対面の両方に対応することで、幅広いニーズに応えています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">地域密着型サービスの価値</p>
              <p className="text-sm leading-relaxed text-text-light">
                地域の経済事情や業界動向を理解した上でのアドバイスは、地域密着型サービスならではの強みです。九州の産業構造を理解した担当者による提案は、事業者にとって実用的で的確なものになりやすいといえます。
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
            ジャパンマネジメントの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ジャパンマネジメントは、九州発のファクタリング会社として、手数料3%〜の低水準な料金設定、福岡拠点での対面相談、法人・個人事業主への幅広い対応を強みとしています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特に九州・中四国エリアの事業者にとっては、地元に拠点を持つファクタリング会社として相談しやすい存在です。担当者の丁寧な対応も好評で、ファクタリング初心者でも安心して利用できるサービスといえます。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、大手ほどの知名度がなく口コミ情報が限られている点や、手数料上限が不明確な点は考慮が必要です。九州エリアで対面相談を重視する方や、手数料を抑えた3社間ファクタリングを検討している方には、検討価値のあるサービスです。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            ジャパンマネジメントの無料相談はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料3%〜。福岡拠点・最短即日入金のファクタリング。
          </p>
          <a
            href="https://www.japanmanagement.jp/"
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
            ジャパンマネジメントを利用する前の準備
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ジャパンマネジメントをスムーズに利用するために、事前に準備しておくべき書類と情報を整理しました。
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
                <span>通帳のコピー（直近数ヶ月分の入出金履歴）</span>
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
            必要書類は案件により異なる場合があります。事前に電話で確認しておくとスムーズです。特に初回利用時は、売掛先の情報（企業名・取引内容・入金予定日）も整理しておくと、ヒアリングが効率的に進みます。
          </p>
        </section>

        {/* ── 契約時の確認ポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング契約時の確認ポイント
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ジャパンマネジメントに限らず、ファクタリング契約時に確認すべきポイントを紹介します。初めてファクタリングを利用する方は特に注意しましょう。
          </p>
          <ul className="space-y-2 text-sm text-text-light">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>手数料率と総額を書面で確認する</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>契約書の内容を隅々まで確認する（特に債権譲渡通知の条件）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>追加費用や事務手数料の有無を確認する</span>
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
              <p className="mt-1 text-sm text-text-light">審査通過率93%のファクタリングを検証</p>
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
