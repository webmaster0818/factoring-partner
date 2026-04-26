import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "AGビジネスサポートの口コミ・評判｜アイフル系列の信頼性を検証",
  description:
    "AGビジネスサポートの口コミ・評判を徹底調査。旧アイフルビジネスファイナンス、大手金融グループの信頼性と3社間ファクタリングサービスを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/ag-business/",
  },
  openGraph: {
    title:
      "AGビジネスサポートの口コミ・評判｜アイフル系列の信頼性を検証",
    description:
      "AGビジネスサポートの口コミ・評判を徹底調査。大手金融グループの信頼性を検証。",
    url: "https://factoring-partner.pages.dev/reviews/ag-business/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "2%〜" },
  { label: "入金スピード", value: "最短2日" },
  { label: "買取可能額", value: "制限なし（要相談）" },
  { label: "対象", value: "法人" },
  { label: "オンライン対応", value: "○（一部オンライン対応）" },
  { label: "契約方式", value: "3社間ファクタリング" },
  { label: "グループ", value: "アイフルグループ" },
  { label: "運営会社", value: "AGビジネスサポート株式会社（旧アイフルビジネスファイナンス）" },
];

const goodReviews = [
  {
    title: "大手金融グループの安心感がある",
    detail:
      "製造業の利用者からは「アイフルグループという大手の看板があるので安心して利用できた」「他のファクタリング会社と比べて運営元がしっかりしており信頼感がある」という声があります。上場企業グループの信頼性が高く評価されています。",
  },
  {
    title: "手数料が3社間で低めに抑えられた",
    detail:
      "卸売業の利用者からは「3社間ファクタリングのため手数料が2%台で利用できた」「銀行融資の金利と比べても許容範囲内のコストだった」という口コミがあります。3社間方式により低い手数料を実現している点が支持されています。",
  },
  {
    title: "取引実績が豊富で対応が安定している",
    detail:
      "建設業の利用者からは「長年の運営実績があるため対応がスムーズだった」「担当者の知識が豊富で的確なアドバイスをもらえた」という声があります。大手ならではの安定したサービス品質が評価されています。",
  },
  {
    title: "買取額に上限がなく大口にも対応",
    detail:
      "大手建設業の利用者からは「数千万円規模の売掛金でも問題なく対応してもらえた」「大口の案件でも安定して買い取ってくれるのは大手ならでは」という口コミがあります。買取額に制限がないため、大規模な資金調達にも対応可能です。",
  },
];

const badReviews = [
  {
    title: "入金までに時間がかかる",
    detail:
      "サービス業の利用者からは「即日入金を期待していたが最短でも2日かかった」「急ぎの資金調達には向かないと感じた」という声があります。3社間ファクタリングは売掛先の同意取得に時間が必要なため、2社間と比べるとスピード面で劣ります。",
  },
  {
    title: "個人事業主は利用できない",
    detail:
      "フリーランスの利用者からは「法人限定と知らずに問い合わせてしまった」「個人事業主でも利用できるサービスを探す必要があった」という口コミがあります。AGビジネスサポートのファクタリングは法人のみ対応です。",
  },
  {
    title: "手続きがやや複雑で書類が多い",
    detail:
      "中小企業の利用者からは「必要書類が多く準備に時間がかかった」「大手だけにコンプライアンスが厳しく、手続きが煩雑に感じた」という声があります。大手金融グループの審査基準がしっかりしている分、手続きが複雑になる傾向があります。",
  },
];

const merits = [
  {
    title: "アイフルグループの信頼性",
    description:
      "AGビジネスサポートはアイフルグループの一員であり、上場企業グループとしての信頼性と安定性があります。ファクタリング業界には中小企業が多い中、大手金融グループが運営するサービスは安心感が大きなメリットです。",
  },
  {
    title: "3社間ファクタリングで低手数料",
    description:
      "3社間ファクタリングを採用しているため、手数料2%〜という低水準を実現しています。2社間ファクタリングの相場（8〜18%）と比較すると大幅にコストを抑えられるため、手数料を重視する法人にとって魅力的です。",
  },
  {
    title: "買取額に上限がない",
    description:
      "買取可能額に制限がないため、数百万円から数億円規模の大口案件にも対応できます。大手金融グループの資金力を背景に、中小企業から大企業まで幅広い規模の法人に対応しています。",
  },
  {
    title: "コンプライアンス体制が充実",
    description:
      "上場企業グループとしてコンプライアンス体制が整っており、契約内容の透明性が高いです。隠れた費用や不当な条件がないため、安心して取引できます。金融庁の監督下にある金融グループならではの信頼性があります。",
  },
];

const demerits = [
  {
    title: "即日入金ができない",
    description:
      "3社間ファクタリングのため売掛先の同意取得が必要で、最短でも2日程度の時間がかかります。即日で資金が必要な場合は、2社間ファクタリング対応のサービスを利用する必要があります。",
  },
  {
    title: "法人限定で個人事業主は利用不可",
    description:
      "ファクタリングサービスの対象は法人のみで、個人事業主やフリーランスは利用できません。個人事業主の方はペイトナーやラボルなど個人事業主対応のサービスをご検討ください。",
  },
  {
    title: "売掛先への通知が必要",
    description:
      "3社間ファクタリングのため、売掛先への通知と同意取得が必要です。取引先にファクタリングの利用を知られたくない場合は、2社間ファクタリング対応のサービスを選ぶ必要があります。",
  },
];

const steps = [
  { step: "1", title: "問い合わせ・申込", description: "電話またはWebフォームから問い合わせ・申込を行います。" },
  { step: "2", title: "必要書類の提出", description: "決算書・請求書・取引先情報等の必要書類を提出します。" },
  { step: "3", title: "審査・売掛先への通知", description: "審査を実施し、売掛先に対して債権譲渡の同意を取得します。" },
  { step: "4", title: "契約・入金", description: "3社間での契約を締結し、指定口座に入金されます。最短2日。" },
];

const faqs = [
  {
    question: "AGビジネスサポートのファクタリング手数料はいくらですか？",
    answer:
      "手数料は2%〜で、売掛先の信用力・売掛金の金額・支払いサイトなどにより決定されます。3社間ファクタリングのため、2社間と比較して低い手数料が設定されています。具体的な手数料は無料見積もりで確認できます。",
  },
  {
    question: "AGビジネスサポートは旧アイフルビジネスファイナンスですか？",
    answer:
      "はい、AGビジネスサポート株式会社は旧アイフルビジネスファイナンス株式会社が社名変更したものです。アイフルグループの法人向け金融サービス会社として、ビジネスローンやファクタリングなどを提供しています。",
  },
  {
    question: "AGビジネスサポートは個人事業主でも利用できますか？",
    answer:
      "ファクタリングサービスは法人限定となっており、個人事業主は利用できません。個人事業主の方は、ペイトナーやラボル、OLTAなど個人事業主対応のサービスをご検討ください。",
  },
  {
    question: "AGビジネスサポートのファクタリングは即日入金できますか？",
    answer:
      "3社間ファクタリングのため、売掛先の同意取得に時間が必要で即日入金はできません。最短でも2日程度かかります。即日入金を希望する場合は、2社間ファクタリング対応のサービスをご検討ください。",
  },
  {
    question: "AGビジネスサポートで2社間ファクタリングは利用できますか？",
    answer:
      "AGビジネスサポートのファクタリングは基本的に3社間方式です。2社間ファクタリングを希望する場合は、ビートレーディングやOLTA、QuQuMoなどのサービスをご検討ください。3社間は手数料が低い反面、売掛先への通知が必要です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AGビジネスサポートの口コミ・評判｜アイフル系列の信頼性を検証",
  description:
    "AGビジネスサポートの口コミ・評判を徹底調査。大手金融グループの信頼性を検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/ag-business/",
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
    { "@type": "ListItem", position: 3, name: "AGビジネスサポート" },
  ],
};

const comparisonData = [
  { name: "AGビジネスサポート", fee: "2%〜", speed: "最短2日", amount: "制限なし", online: "○" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "QuQuMo", fee: "1%〜14.8%", speed: "最短2時間", amount: "制限なし", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function AgBusinessReviewPage() {
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
          { label: "AGビジネスサポート" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            AGビジネスサポートの口コミ・評判
            <br className="hidden md:block" />
            アイフル系列の信頼性を検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            旧アイフルビジネスファイナンス。大手金融グループの信頼性と3社間ファクタリングサービスを口コミ・評判で徹底検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. AGビジネスサポートの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. AGビジネスサポートのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. AGビジネスサポートのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            AGビジネスサポートの基本情報
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
            AGビジネスサポートの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            AGビジネスサポート株式会社は、旧アイフルビジネスファイナンス株式会社から社名変更した、アイフルグループの法人向け金融サービス会社です。ビジネスローンに加え、3社間ファクタリングサービスも提供しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            最大の特徴は、東証プライム市場に上場するアイフルグループの一員であるという信頼性です。ファクタリング業界には中小規模の企業が多い中、大手金融グループが運営するサービスは、コンプライアンスや契約の透明性において大きな安心感を提供します。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            3社間ファクタリングに特化しているため、手数料2%〜という低水準を実現しています。即日入金には対応していませんが、コストを重視する法人にとっては非常に魅力的な選択肢です。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">AGビジネスサポートの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>アイフルグループ（東証プライム上場）の信頼性</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>3社間ファクタリングで手数料2%〜の低水準</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>買取額に制限なし・大口案件にも対応</span>
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
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://and-g.co.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">GROWTH PARTNERS</a></p>
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
            AGビジネスサポートのメリット4つ
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
            AGビジネスサポートのデメリット3つ
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
            AGビジネスサポートの利用の流れ
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

        {/* ── アイフルグループの信頼性 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            アイフルグループとしての信頼性
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            AGビジネスサポートがアイフルグループに属していることは、ファクタリングサービスを選ぶ上で重要な判断材料です。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">上場企業グループの透明性</p>
              <p className="text-sm leading-relaxed text-text-light">
                アイフルは東証プライム市場に上場しており、財務情報や事業内容が公開されています。グループ企業であるAGビジネスサポートにも、上場企業としてのガバナンスとコンプライアンス基準が適用されるため、契約の透明性と公正性が担保されています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">金融業界での豊富な実績</p>
              <p className="text-sm leading-relaxed text-text-light">
                アイフルグループは消費者金融から事業者向け融資まで、長年にわたり金融サービスを提供してきた実績があります。その経験とノウハウがファクタリングサービスにも活かされており、審査や契約手続きの質が高い水準に保たれています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">資金力による安定したサービス提供</p>
              <p className="text-sm leading-relaxed text-text-light">
                大手金融グループの資金力を背景に、大口の売掛金買取にも安定して対応できます。中小のファクタリング会社では対応が難しい大規模案件でも、安定した資金供給が可能です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 利用シーン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            AGビジネスサポートが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">大手企業との取引で手数料を抑えたい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                売掛先が大手企業の場合、3社間ファクタリングの同意取得が比較的スムーズです。大手企業は債権譲渡に理解があるケースが多く、手数料2%台の低コストでファクタリングを活用できる可能性があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">信頼性の高いファクタリング会社を選びたい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリング業界に不安を感じている方にとって、上場企業グループの運営は大きな安心材料です。契約内容の透明性やコンプライアンスの高さを重視する法人に最適です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">大口の売掛金を一括で買い取ってほしい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                買取額に上限がないため、数千万円〜数億円規模の売掛金でも対応可能です。大手金融グループの資金力を活かし、安定した買取サービスを提供しています。
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
                  <span>大手金融グループの信頼性を重視する法人の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手数料の安さを最優先する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>大口の売掛金を持つ法人の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>売掛先が大手企業で3社間に同意が得やすい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>即日入金を希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>個人事業主・フリーランスの方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>売掛先にファクタリング利用を知られたくない方</span>
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

        {/* ── 他の法人向けサービスとの違い ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            AGビジネスサポートと他の法人向けサービスの違い
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            法人向けファクタリングサービスは複数ありますが、AGビジネスサポートには独自のポジショニングがあります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">ビジネスローンとの併用が可能</p>
              <p className="text-sm leading-relaxed text-text-light">
                AGビジネスサポートはファクタリングだけでなくビジネスローンも提供しているため、資金調達のニーズに応じて最適な方法を提案してもらえます。ファクタリングが適さない場合でも、ビジネスローンで対応できるケースがあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">3社間ファクタリングに特化する強み</p>
              <p className="text-sm leading-relaxed text-text-light">
                多くのファクタリング会社は2社間を主力としていますが、AGビジネスサポートは3社間に特化しています。大手金融グループの信頼性を背景に、売掛先からの同意取得もスムーズに進むケースが多く、低手数料での利用が実現しやすいです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">長期的な取引関係の構築</p>
              <p className="text-sm leading-relaxed text-text-light">
                大手金融グループならではの安定性があり、長期的な取引関係を構築しやすいです。継続利用により手数料の交渉がしやすくなるほか、融資を含む総合的な金融サービスの提案を受けられるメリットもあります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            AGビジネスサポートの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            AGビジネスサポートは、アイフルグループという大手金融グループの信頼性と、3社間ファクタリングによる低手数料が最大の魅力です。コンプライアンス体制が充実しており、契約の透明性と安全性を重視する法人にとって最適な選択肢です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料2%〜という低水準は、定期的にファクタリングを利用する法人にとって年間コストの大幅な削減につながります。買取額に上限がないため、大口案件にも安定して対応できます。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、即日入金ができない点や法人限定のサービスである点、売掛先への通知が必要な3社間方式である点は事前に理解しておく必要があります。信頼性と低コストを最重視する法人には、強くおすすめできるサービスです。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            AGビジネスサポートの無料相談はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            アイフルグループの信頼性。手数料2%〜の3社間ファクタリング。
          </p>
          <a
            href="https://www.aiful-bf.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料相談
          </a>
        </section>

        {/* ── 利用前の確認事項 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            AGビジネスサポートを利用する前の確認事項
          </h2>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-semibold text-text-main">利用前チェックリスト</p>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">1</span>
                <span>法人格を有していること（個人事業主は利用不可）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">2</span>
                <span>売掛先が3社間ファクタリングに同意可能であること</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">3</span>
                <span>最短2日の入金スケジュールが許容できること</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">4</span>
                <span>決算書・請求書・取引先情報などの書類が準備できること</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            3社間ファクタリングでは売掛先への通知が必要です。事前に売掛先との関係性を確認し、通知が問題ないことを確認しておくとスムーズです。売掛先が大手企業の場合は債権譲渡に慣れているケースが多いです。
          </p>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/moneyforward/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">マネーフォワード アーリーペイメントの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">上場企業の安心感を検証</p>
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
