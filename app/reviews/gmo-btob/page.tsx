import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "GMO BtoB早払いの口コミ・評判｜GMOグループの安心ファクタリング",
  description:
    "GMO BtoB早払いの口コミ・評判を徹底調査。GMOペイメントゲートウェイ運営、法人向け大口対応、手数料1%〜のファクタリングを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/gmo-btob/",
  },
  openGraph: {
    title:
      "GMO BtoB早払いの口コミ・評判｜GMOグループの安心ファクタリング",
    description:
      "GMO BtoB早払いの口コミ・評判を徹底調査。GMOグループのファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/gmo-btob/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "1%〜" },
  { label: "入金スピード", value: "最短2営業日" },
  { label: "買取可能額", value: "要相談（大口対応可）" },
  { label: "対象", value: "法人向け" },
  { label: "契約方式", value: "2社間" },
  { label: "オンライン対応", value: "◎（完全オンライン完結）" },
  { label: "上場区分", value: "東証プライム上場グループ" },
  { label: "運営会社", value: "GMOペイメントゲートウェイ株式会社" },
];

const goodReviews = [
  {
    title: "東証プライム上場グループの安心感",
    detail:
      "「GMOグループという大手企業が運営しているので安心して利用できた」「上場企業のサービスなので怪しさが全くない」という声があります。東証プライム上場のGMOペイメントゲートウェイが運営しているため、信頼性の面で圧倒的な安心感があります。",
  },
  {
    title: "手数料1%〜は業界最安クラス",
    detail:
      "「大手企業だからこそ実現できる低手数料だと感じた」「他社と比較して圧倒的に手数料が安かった」という口コミがあります。手数料1%〜は業界でもトップクラスの低水準で、コスト面での優位性が高く評価されています。",
  },
  {
    title: "大口案件への対応力が高い",
    detail:
      "「数千万円規模の案件もスムーズに対応してもらえた」「GMOグループの資金力を背景に大口も安心」という声が見られます。大手グループの資金力を背景に、大口案件への対応力が高いと評価されています。",
  },
  {
    title: "オンラインで完結できる",
    detail:
      "「全ての手続きがオンラインで完結して便利だった」「ペーパーレスで環境にも配慮されている」という口コミがあります。完全オンライン完結のため、来店不要で全国どこからでも利用できます。",
  },
];

const badReviews = [
  {
    title: "入金まで最短2営業日と即日対応ではない",
    detail:
      "「急ぎの資金需要には間に合わなかった」「即日入金を期待していたが2営業日かかった」という声があります。最短2営業日は即日対応の他社と比べるとやや遅く、緊急の資金需要には不向きな場合があります。",
  },
  {
    title: "個人事業主は利用できない",
    detail:
      "「個人事業主として利用しようとしたが法人限定だった」という口コミがあります。GMO BtoB早払いは法人向けサービスのため、個人事業主やフリーランスは利用できません。",
  },
  {
    title: "手数料1%の適用条件が厳しい",
    detail:
      "「1%〜とあるが実際はもう少し高い手数料になった」「好条件でないと最低手数料は適用されない」という声があります。手数料1%〜の下限が適用されるのは、売掛先が大手企業で金額が大きい案件に限られる傾向があります。",
  },
];

const merits = [
  {
    title: "東証プライム上場グループの信頼性",
    description:
      "GMO BtoB早払いを運営するGMOペイメントゲートウェイは、東証プライム上場企業です。決済代行業界のリーディングカンパニーとして長年の実績があり、サービスの信頼性・安全性は業界トップクラスです。ファクタリング業界への新規参入企業とは一線を画する安心感があります。",
  },
  {
    title: "手数料1%〜の業界最低水準",
    description:
      "手数料1%〜は業界でもトップクラスの低水準です。大手上場企業グループだからこそ実現できるコスト構造により、利用者にとって有利な手数料設定を実現しています。特に大口案件や売掛先が優良企業の場合、非常に低い手数料が期待できます。",
  },
  {
    title: "大口案件への対応力",
    description:
      "GMOペイメントゲートウェイの資金力を背景に、大口案件にも安定して対応できます。中堅・大企業の資金調達ニーズにも応えられる資金力は、独立系のファクタリング会社にはない大きな強みです。",
  },
  {
    title: "完全オンライン完結",
    description:
      "申込から審査・契約・入金まで全てオンラインで完結します。GMOグループが持つIT技術力を活かした効率的なプロセスにより、ペーパーレスで手続きを進められます。全国どこからでも利用可能です。",
  },
];

const demerits = [
  {
    title: "入金まで最短2営業日",
    description:
      "最短入金が2営業日と、即日対応の他社に比べるとやや遅い設定です。急ぎの資金需要がある場合は、ビートレーディング（最短2時間）やQuQuMo（最短2時間）など、即日対応のサービスを検討しましょう。計画的な資金調達には問題ありません。",
  },
  {
    title: "法人限定で個人事業主は利用不可",
    description:
      "GMO BtoB早払いは法人向けサービスのため、個人事業主やフリーランスの方は利用できません。個人事業主の方はペイトナーやラボルなど、個人対応のサービスをご検討ください。",
  },
  {
    title: "最低手数料1%の適用は限定的",
    description:
      "手数料1%〜と掲げていますが、最低水準が適用されるのは売掛先が大手上場企業で金額が大きいなど、好条件が揃った場合に限られます。一般的な案件では数%程度の手数料になるケースが多いと考えられます。",
  },
];

const steps = [
  { step: "1", title: "Web申込・会員登録", description: "公式サイトから必要情報を入力して申込。法人情報と売掛金の概要を登録します。" },
  { step: "2", title: "書類アップロード", description: "請求書・決算書・入出金明細等の必要書類をWeb上でアップロードします。" },
  { step: "3", title: "審査・買取条件提示", description: "GMOペイメントゲートウェイが審査を実施。手数料・買取条件が提示されます。" },
  { step: "4", title: "電子契約・入金", description: "条件に合意後、電子契約を締結。最短2営業日で指定口座に入金されます。" },
];

const faqs = [
  {
    question: "GMO BtoB早払いの手数料は実際にいくらですか？",
    answer:
      "手数料は1%〜です。実際の手数料率は、売掛先の信用力、売掛金の金額、支払いサイトなどの条件によって変動します。売掛先が上場企業や大手企業で金額が大きい案件ほど、低い手数料が適用される傾向があります。",
  },
  {
    question: "GMO BtoB早払いは個人事業主でも利用できますか？",
    answer:
      "いいえ、GMO BtoB早払いは法人向けのサービスです。個人事業主やフリーランスの方は利用対象外となります。個人事業主の方はペイトナー、ラボル、フリーナンスなどのサービスをご検討ください。",
  },
  {
    question: "GMO BtoB早払いの入金スピードはどのくらいですか？",
    answer:
      "最短2営業日での入金に対応しています。即日入金には対応していないため、緊急の資金需要がある場合は他のサービスとの併用も検討しましょう。計画的な資金調達であれば、十分なスピードです。",
  },
  {
    question: "GMOペイメントゲートウェイとは何の会社ですか？",
    answer:
      "GMOペイメントゲートウェイは、東証プライム上場の決済代行会社です。GMOインターネットグループの中核企業の一つで、EC決済やBtoB決済の分野で国内トップクラスのシェアを持っています。その決済インフラのノウハウを活かしてファクタリングサービスを展開しています。",
  },
  {
    question: "GMO BtoB早払いと他のGMOサービスの違いは？",
    answer:
      "GMO BtoB早払いは売掛債権の買取（ファクタリング）に特化したサービスです。GMOグループは決済代行やレンタルサーバーなど多様なサービスを展開していますが、BtoB早払いはファクタリング専門のサービスとして独立して運営されています。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "GMO BtoB早払いの口コミ・評判｜GMOグループの安心ファクタリング",
  description:
    "GMO BtoB早払いの口コミ・評判を徹底調査。GMOグループのファクタリングを検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/gmo-btob/",
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
    { "@type": "ListItem", position: 3, name: "GMO BtoB早払い" },
  ],
};

const comparisonData = [
  { name: "GMO BtoB早払い", fee: "1%〜", speed: "最短2営業日", amount: "大口対応可", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "QuQuMo", fee: "1%〜14.8%", speed: "最短2時間", amount: "制限なし", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function GmoBtobReviewPage() {
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
          { label: "GMO BtoB早払い" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            GMO BtoB早払いの口コミ・評判
            <br className="hidden md:block" />
            GMOグループの安心ファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            東証プライム上場・GMOペイメントゲートウェイ運営、手数料1%〜・大口対応のファクタリング「GMO BtoB早払い」の口コミ・評判を徹底調査します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. GMO BtoB早払いの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. GMO BtoB早払いのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. GMO BtoB早払いのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            GMO BtoB早払いの基本情報
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
            GMO BtoB早払いの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            GMO BtoB早払いは、東証プライム上場のGMOペイメントゲートウェイ株式会社が運営するファクタリングサービスです。GMOインターネットグループの中核企業であり、決済代行業界のリーディングカンパニーとして知られています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料1%〜という業界最低水準の料金設定は、大手上場企業グループだからこそ実現できるコスト構造によるものです。法人向けに特化し、大口案件にも安定して対応できる資金力を持っています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            GMOペイメントゲートウェイは年間の決済処理金額が数兆円規模に達する企業であり、その決済インフラと技術力を活かしたオンライン完結型のファクタリングサービスを提供しています。上場企業が直接運営するファクタリングサービスは業界でも数少なく、信頼性の面で他社を大きくリードしています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">GMO BtoB早払いの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>東証プライム上場企業が直接運営する安心感</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料1%〜の業界最低水準</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>大口案件にも対応できる圧倒的な資金力</span>
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
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://minhyo.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">みん評</a></p>
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
            GMO BtoB早払いのメリット4つ
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
            GMO BtoB早払いのデメリット3つ
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
            GMO BtoB早払いの利用の流れ
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
            GMO BtoB早払いが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">信頼性を最重視する法人の場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                東証プライム上場企業が直接運営するファクタリングサービスは業界でも稀です。「ファクタリング会社は信用できるのか」という不安がある法人にとって、GMOグループという大手企業の安心感は絶大です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">大口の資金調達を検討している法人の場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                GMOペイメントゲートウェイの資金力を背景に、大口案件にも安定して対応できます。数千万円〜数億円規模の資金調達を検討している中堅・大企業にとっては、資金力のある運営会社であることが重要な判断基準になります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料コストを長期的に最小化したい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料1%〜は業界最低水準です。定期的にファクタリングを利用する法人にとって、手数料の差は年間で大きなコスト差になります。長期的な取引でコストを最小化したい法人に適しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">既にGMOの決済サービスを利用している場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                GMOペイメントゲートウェイの決済サービスを既に利用している法人であれば、BtoB早払いとの親和性が高く、スムーズに利用開始できる可能性があります。
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
                  <span>信頼性・安心感を重視する法人の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>大口案件のファクタリングを検討している方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手数料コストを最小化したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>計画的な資金調達を行いたい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>即日入金を必要としている方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>個人事業主・フリーランスの方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>少額の売掛金でファクタリングを利用したい方</span>
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

        {/* ── GMOグループの信頼性 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            GMOグループの信頼性とファクタリング
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            GMO BtoB早払いを運営するGMOペイメントゲートウェイの企業背景と、ファクタリングサービスにおける信頼性について解説します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">GMOペイメントゲートウェイの実績</p>
              <p className="text-sm leading-relaxed text-text-light">
                GMOペイメントゲートウェイは、EC決済代行のパイオニアとして1995年に創業。現在は年間の決済処理金額が数兆円規模に達し、国内有数の決済プラットフォーム企業として成長しています。東証プライム上場企業であり、金融庁の監督下でサービスを運営しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">上場企業運営のメリット</p>
              <p className="text-sm leading-relaxed text-text-light">
                上場企業は有価証券報告書の開示義務、監査法人による会計監査、内部統制報告制度への対応など、厳格なガバナンス体制が求められます。これらの企業統治の仕組みがあることで、サービスの透明性と信頼性が担保されています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">ファクタリング業界における位置づけ</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリング業界には現在、法律上の登録制度や監督官庁が明確に定められていません。そのような環境において、上場企業が直接運営するサービスは、利用者にとって安心材料となります。GMO BtoB早払いは業界の信頼性向上にも貢献しています。
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
            GMO BtoB早払いの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            GMO BtoB早払いは、東証プライム上場のGMOペイメントゲートウェイが直接運営する、業界トップクラスの信頼性を持つファクタリングサービスです。手数料1%〜の低水準と大口対応力は、大手グループの資金力とIT技術力があってこそ実現できるものです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特に信頼性と手数料の安さを重視する法人にとっては、最有力の選択肢です。上場企業が運営しているという事実だけでも、利用者にとって大きな安心材料となります。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、入金まで最短2営業日と即日対応ではない点、法人限定で個人事業主は利用できない点は留意が必要です。即日入金が必要な場合は他のサービスとの併用を検討し、計画的な資金調達にGMO BtoB早払いを活用するのが効果的です。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            GMO BtoB早払いの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料1%〜。東証プライム上場グループ運営の安心ファクタリング。
          </p>
          <a
            href="https://www.gmo-pg.com/service/hayabarai/"
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
            GMO BtoB早払いを利用する前の準備
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            GMO BtoB早払いをスムーズに利用するために、事前に準備しておくべき書類と情報を整理しました。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-semibold text-text-main">事前に用意するもの</p>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">1</span>
                <span>請求書（売掛先に発行済みのもの、PDF形式推奨）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">2</span>
                <span>決算書（直近の決算内容がわかるもの）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">3</span>
                <span>銀行口座の入出金明細（直近数ヶ月分）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">4</span>
                <span>登記簿謄本（法人確認用）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">5</span>
                <span>代表者の本人確認書類</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            全てオンラインでアップロードする形式のため、紙書類の郵送は不要です。事前にPDF化しておくとスムーズです。入金まで最短2営業日のため、余裕を持って手続きを進めることをおすすめします。
          </p>
        </section>

        {/* ── 上場企業運営サービスの選び方 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            上場企業運営のファクタリングを選ぶメリット
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリング業界では、上場企業が直接運営するサービスは限られています。上場企業運営を選ぶメリットを整理します。
          </p>
          <ul className="space-y-2 text-sm text-text-light">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>有価証券報告書で財務状況が公開されており、経営の透明性が高い</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>コンプライアンス体制が整備されており、不正リスクが低い</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>資金力が豊富で、大口案件にも安定して対応できる</span>
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
              href="/reviews/olta/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTAの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料2〜9%のクラウドファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/betrading/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">累計9.1万社の大手ファクタリング会社を検証</p>
            </Link>
            <Link
              href="/reviews/shikinplus/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">SHIKIN+の口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">オンライン完結ファクタリングを検証</p>
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
