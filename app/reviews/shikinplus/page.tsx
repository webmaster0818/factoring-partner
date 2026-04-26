import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "SHIKIN+の口コミ・評判｜オンライン完結ファクタリング",
  description:
    "SHIKIN+（シキンプラス）の口コミ・評判を徹底調査。オンライン完結・法人向け・手数料1%〜のファクタリングサービスを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/shikinplus/",
  },
  openGraph: {
    title:
      "SHIKIN+の口コミ・評判｜オンライン完結ファクタリング",
    description:
      "SHIKIN+の口コミ・評判を徹底調査。オンライン完結のファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/shikinplus/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "1%〜" },
  { label: "入金スピード", value: "最短即日" },
  { label: "買取可能額", value: "要相談" },
  { label: "対象", value: "法人向け" },
  { label: "契約方式", value: "2社間" },
  { label: "オンライン対応", value: "◎（完全オンライン完結）" },
  { label: "対応エリア", value: "全国" },
  { label: "運営会社", value: "SHIKIN+運営会社" },
];

const goodReviews = [
  {
    title: "オンラインで全て完結するのが便利",
    detail:
      "「申込から契約・入金まで完全にオンラインで完結した」「来店不要で地方からでも問題なく利用できた」という声があります。完全オンライン対応のため、場所を選ばず利用できる利便性が高く評価されています。",
  },
  {
    title: "手数料1%〜は業界最安クラス",
    detail:
      "「手数料が他社より圧倒的に安かった」「1%台の手数料が適用されてコストを大幅に削減できた」という口コミがあります。手数料1%〜は業界でもトップクラスの低水準として注目されています。",
  },
  {
    title: "手続きがシンプルで分かりやすい",
    detail:
      "「Web上の操作画面がわかりやすく、スムーズに申込できた」「必要書類も最小限で手間が少なかった」という声があります。オンライン完結型ならではのシンプルな手続きが支持されています。",
  },
  {
    title: "審査から入金までが早い",
    detail:
      "「申込から入金まで想像以上に早かった」「急ぎの資金需要にも間に合った」という口コミが見られます。オンライン完結の効率的なプロセスにより、迅速な入金を実現しています。",
  },
];

const badReviews = [
  {
    title: "手数料1%の適用条件が厳しい",
    detail:
      "「1%〜と書いてあるが実際は条件によって高くなる」「売掛先の信用力が高くないと最低手数料は適用されにくい」という声があります。最低手数料1%が適用されるのは好条件の案件に限られるようです。",
  },
  {
    title: "個人事業主は利用できない",
    detail:
      "「個人事業主として問い合わせたが対象外だった」という口コミがあります。SHIKIN+は法人向けのサービスのため、個人事業主やフリーランスは利用対象外です。",
  },
  {
    title: "対面での相談ができない",
    detail:
      "「大口の案件なので直接会って話したかったが、オンラインのみだった」という声があります。完全オンライン型のため、対面での相談を希望する場合は他のサービスを検討する必要があります。",
  },
];

const merits = [
  {
    title: "手数料1%〜の業界最低水準",
    description:
      "SHIKIN+の手数料は1%〜で、業界でもトップクラスの低水準です。特に売掛先の信用力が高い大口案件では、低い手数料が適用される傾向があり、コスト削減効果が大きくなります。2社間ファクタリングでこの水準は非常に競争力があります。",
  },
  {
    title: "完全オンライン完結で全国対応",
    description:
      "申込から審査・契約・入金まで全てオンラインで完結するため、全国どこからでも利用可能です。来店や対面での手続きは一切不要で、時間や場所を問わず手続きを進められます。",
  },
  {
    title: "シンプルで効率的な手続き",
    description:
      "オンライン完結型のメリットを活かし、手続きのプロセスがシンプルに設計されています。煩雑な書類作成や郵送手続きが不要で、Web上で必要書類をアップロードするだけで申込が完了します。",
  },
  {
    title: "最短即日の入金対応",
    description:
      "オンラインでの効率的な審査プロセスにより、最短即日での入金に対応しています。急ぎの資金需要にもスピーディーに対応できるため、資金繰りの改善に即効性があります。",
  },
];

const demerits = [
  {
    title: "最低手数料の適用は限定的",
    description:
      "手数料1%〜と掲げていますが、最低水準が適用されるのは売掛先が大手企業で金額が大きいなど、好条件が揃った場合に限られます。一般的な案件では、手数料がもう少し高くなるケースが多いと考えられます。",
  },
  {
    title: "法人限定で個人事業主は利用不可",
    description:
      "SHIKIN+は法人向けのサービスのため、個人事業主やフリーランスの方は利用できません。個人事業主の方はペイトナーやラボルなど、個人事業主対応のサービスをご検討ください。",
  },
  {
    title: "対面相談ができない",
    description:
      "完全オンライン完結型のため、対面での相談はできません。大口案件で担当者と直接会って話したい場合や、初めてのファクタリングで不安がある場合は、ビートレーディングやアクセルファクターなど対面対応可能なサービスが適しています。",
  },
];

const steps = [
  { step: "1", title: "Web申込", description: "公式サイトから必要情報を入力して申込。オンラインで簡単に手続きできます。" },
  { step: "2", title: "書類アップロード", description: "請求書・決算書・入出金明細等の必要書類をWeb上でアップロードします。" },
  { step: "3", title: "審査・買取条件提示", description: "提出書類をもとに審査を実施。手数料・買取条件が提示されます。" },
  { step: "4", title: "電子契約・入金", description: "条件に合意後、電子契約を締結。最短即日で指定口座に入金されます。" },
];

const faqs = [
  {
    question: "SHIKIN+の手数料は実際にいくらですか？",
    answer:
      "SHIKIN+の手数料は1%〜です。実際の手数料率は、売掛先の信用力、売掛金の金額、支払いサイトなどの条件によって変動します。売掛先が上場企業で金額が大きい案件ほど、低い手数料が適用される傾向があります。",
  },
  {
    question: "SHIKIN+は個人事業主でも利用できますか？",
    answer:
      "いいえ、SHIKIN+は法人向けのサービスです。個人事業主やフリーランスの方は利用対象外となります。個人事業主の方はペイトナー、ラボル、フリーナンスなどの個人事業主対応サービスをご検討ください。",
  },
  {
    question: "SHIKIN+の審査に必要な書類は何ですか？",
    answer:
      "主な必要書類は、請求書（売掛金の証拠書類）、決算書、銀行口座の入出金明細などです。全てWeb上でアップロードする形式のため、郵送は不要です。具体的な必要書類は申込時に案内されます。",
  },
  {
    question: "SHIKIN+はどのくらいの時間で入金されますか？",
    answer:
      "最短即日での入金に対応しています。ただし、審査状況や書類の準備状況によっては翌日以降になるケースもあります。午前中に申込・書類提出を完了することで、当日入金の可能性が高まります。",
  },
  {
    question: "SHIKIN+と他のオンライン完結型ファクタリングの違いは？",
    answer:
      "SHIKIN+の最大の特徴は手数料1%〜という業界最低水準の料金設定です。OLTAは2〜9%、QuQuMoは1〜14.8%であるのに対し、SHIKIN+は1%〜と下限が低く設定されています。ただし、法人限定という制約があります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "SHIKIN+の口コミ・評判｜オンライン完結ファクタリング",
  description:
    "SHIKIN+の口コミ・評判を徹底調査。オンライン完結のファクタリングを検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/shikinplus/",
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
    { "@type": "ListItem", position: 3, name: "SHIKIN+" },
  ],
};

const comparisonData = [
  { name: "SHIKIN+", fee: "1%〜", speed: "最短即日", amount: "要相談", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "QuQuMo", fee: "1%〜14.8%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function ShikinplusReviewPage() {
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
          { label: "SHIKIN+" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            SHIKIN+（シキンプラス）の口コミ・評判
            <br className="hidden md:block" />
            オンライン完結ファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            オンライン完結・手数料1%〜・法人向けファクタリング「SHIKIN+」の口コミ・評判を徹底調査します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. SHIKIN+の基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. SHIKIN+のメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. SHIKIN+のデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            SHIKIN+の基本情報
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
            SHIKIN+の会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            SHIKIN+（シキンプラス）は、法人向けのオンライン完結型ファクタリングサービスです。手数料1%〜という業界最低水準の料金設定と、完全オンライン完結の利便性を両立しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            申込から審査・契約・入金まで全てWeb上で完結するため、来店や対面での手続きは一切不要です。全国どこからでも利用可能で、時間や場所を問わず手続きを進められるのが特徴です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            法人向けに特化することで、売掛先の信用力に基づいた適切な審査と低手数料を実現しています。特に売掛先が上場企業や大手企業の場合、非常に低い手数料が適用される可能性があります。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">SHIKIN+の3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料1%〜の業界最低水準</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>完全オンライン完結で全国対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>最短即日入金のスピード対応</span>
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
            SHIKIN+のメリット4つ
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
            SHIKIN+のデメリット3つ
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
            SHIKIN+の利用の流れ
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
            SHIKIN+が活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料コストを最小限に抑えたい法人の場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料1%〜は業界最低水準です。特に売掛先が上場企業や大手企業の場合、非常に低い手数料が適用される可能性があります。定期的にファクタリングを利用する法人にとっては、年間コストの大幅な削減が期待できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">地方在住で来店が難しい法人の場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                完全オンライン完結のため、全国どこからでも利用可能です。ファクタリング会社の多くが東京に集中している中、地方の法人でも同じクオリティのサービスを受けられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">忙しくて来店の時間が取れない場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                経営者は多忙なため、対面での手続きに時間を割けないことが多いです。SHIKIN+なら、PCやスマートフォンから24時間いつでも申込が可能で、移動時間のロスもありません。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">売掛先が大手企業・上場企業の場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                売掛先の信用力が高いほど低い手数料が適用される傾向があります。大手企業や上場企業への売掛金がある法人は、SHIKIN+の最低手数料1%に近い水準で利用できる可能性があります。
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
                  <span>手数料の安さを最優先で選びたい法人の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>オンライン完結で手間なく利用したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>売掛先が大手企業・上場企業の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>地方在住で来店が難しい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>個人事業主・フリーランスの方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>対面で相談して進めたい方</span>
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

        {/* ── オンライン完結ファクタリングの選び方 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            オンライン完結ファクタリングの選び方
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            オンライン完結型のファクタリングサービスは近年増加しています。SHIKIN+を含めた複数のサービスの中から、自社に最適なサービスを選ぶためのポイントを解説します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料の実質水準を比較する</p>
              <p className="text-sm leading-relaxed text-text-light">
                各サービスが提示する最低手数料だけでなく、実際に適用される手数料水準を複数社に見積もりを依頼して比較しましょう。最低手数料が低くても、実際の案件では高くなるケースがあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">対象者の条件を確認する</p>
              <p className="text-sm leading-relaxed text-text-light">
                法人限定のサービスと個人事業主も利用できるサービスがあります。SHIKIN+は法人限定ですが、OLTAやQuQuMoは個人事業主も対応しています。自分の事業形態に合ったサービスを選びましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">入金スピードと必要書類のバランス</p>
              <p className="text-sm leading-relaxed text-text-light">
                入金スピードが早いサービスほど必要書類が少ない傾向がありますが、手数料が高くなるケースもあります。急ぎの資金需要の有無と手数料のバランスを考えて選択しましょう。
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
            SHIKIN+の総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            SHIKIN+は、手数料1%〜の業界最低水準の料金設定と完全オンライン完結の利便性を兼ね備えた、法人向けファクタリングサービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特に売掛先が上場企業や大手企業の法人にとっては、非常に低い手数料で利用できる可能性があり、コスト面で大きなメリットがあります。オンライン完結のため、来店の手間もなく効率的に利用できます。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、法人限定であること、最低手数料1%の適用が限定的であること、対面相談ができないことは留意が必要です。手数料の安さとオンラインの利便性を重視する法人にとっては、有力な選択肢の一つです。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            SHIKIN+の無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料1%〜。オンライン完結で最短即日入金のファクタリング。
          </p>
          <a
            href="https://shikinplus.jp/"
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
            SHIKIN+を利用する前の準備
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            SHIKIN+をスムーズに利用するために、事前に準備しておくべき書類と情報を整理しました。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-semibold text-text-main">事前に用意するもの</p>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">1</span>
                <span>請求書（売掛先に発行済みのもの、PDF・画像いずれも可）</span>
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
                <span>本人確認書類（代表者の運転免許証・マイナンバーカードなど）</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            全てWeb上でアップロードする形式のため、紙書類の郵送は不要です。書類をデータ化（PDF・画像）しておくとスムーズです。必要書類が揃っていれば、申込から最短即日での入金も可能です。
          </p>
        </section>

        {/* ── 手数料を低く抑えるコツ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング手数料を低く抑えるコツ
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            SHIKIN+のように手数料1%〜を掲げるサービスでも、実際の適用条件はケースバイケースです。手数料を低く抑えるためのポイントを紹介します。
          </p>
          <ul className="space-y-2 text-sm text-text-light">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>売掛先が上場企業・大手企業の案件を優先的に利用する</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>継続利用で実績を積み、信頼関係を構築する</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>複数社から見積もりを取得し、条件を比較検討する</span>
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
              href="/reviews/ququmo/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">QuQuMo（ククモ）の口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料1%〜のオンラインファクタリングを検証</p>
            </Link>
            <Link
              href="/articles/online-factoring/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">オンラインファクタリング</p>
              <p className="mt-1 text-sm text-text-light">完全オンライン対応のサービスを比較</p>
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
