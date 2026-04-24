import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "PAYTODAYの口コミ・評判｜AI審査で最短30分のファクタリングを検証",
  description:
    "PAYTODAY(ペイトゥデイ)の口コミ・評判を徹底調査。AI審査で最短30分入金、手数料1〜9.5%、オンライン完結のファクタリングサービスを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/paytoday/",
  },
  openGraph: {
    title:
      "PAYTODAYの口コミ・評判｜AI審査で最短30分のファクタリングを検証",
    description:
      "PAYTODAYの口コミ・評判を徹底調査。AI審査で最短30分入金のファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/paytoday/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "1%〜9.5%" },
  { label: "入金スピード", value: "最短30分" },
  { label: "買取可能額", value: "10万円〜上限なし" },
  { label: "対象", value: "法人・個人事業主・フリーランス" },
  { label: "オンライン対応", value: "◎（完全オンライン完結）" },
  { label: "審査方式", value: "AI審査" },
  { label: "契約方式", value: "2社間ファクタリング" },
  { label: "運営会社", value: "Dual Life Partners株式会社" },
];

const goodReviews = [
  {
    title: "入金までのスピードが非常に早い",
    label: "IT企業の経営者",
    detail:
      "申込から最短30分で入金されるスピード感が高く評価されています。必要書類を事前に準備しておけば、午前中の申込で当日中に資金調達が完了するケースが多いとの声があります。",
  },
  {
    title: "手数料が業界最安水準",
    label: "広告代理店の利用者",
    detail:
      "手数料1〜9.5%は2社間ファクタリングとしては業界トップクラスの低さです。特に売掛先が上場企業の場合、1〜3%台の手数料が適用されたという口コミが複数見られます。",
  },
  {
    title: "AI審査で手続きがシンプル",
    label: "フリーランスエンジニアの利用者",
    detail:
      "AI審査のため面談や電話が不要で、Web上で必要書類を提出するだけで審査が完了するという声があります。対面が苦手な方や忙しい事業者からも操作性が良いと好評です。",
  },
  {
    title: "オンラインで全て完結する",
    label: "地方在住の事業者",
    detail:
      "申込から契約、入金まで全てオンラインで完結するため、地方在住でも問題なく利用できるという口コミがあります。来店や郵送が一切不要な点が利便性として評価されています。",
  },
];

const badReviews = [
  {
    title: "審査落ちの理由がわからない",
    label: "建設業の利用者",
    detail:
      "AI審査で審査に通らなかった際、具体的な理由の説明がなかったという声があります。AI審査は迅速な反面、個別の事情を考慮してもらう余地が少ないという指摘があります。",
  },
  {
    title: "土日祝日は対応していない",
    label: "飲食業の経営者",
    detail:
      "営業時間が平日のみのため、土日祝日に急ぎの資金調達が必要な場合は対応できないという声があります。週末の資金需要には事前の準備が必要です。",
  },
  {
    title: "電話相談ができない",
    label: "製造業の利用者",
    detail:
      "完全オンライン型のため、電話での個別相談ができない点を不便に感じるという口コミがあります。初めてファクタリングを利用する方にとっては、相談窓口がないことに不安を感じるケースもあるようです。",
  },
];

const merits = [
  {
    title: "手数料1〜9.5%の業界最安水準",
    description:
      "PAYTODAYの手数料は1〜9.5%と、2社間ファクタリングとしては業界トップクラスの低水準です。手数料上限が9.5%に設定されているため、他社で15%以上の手数料を提示された案件でも、PAYTODAYなら大幅にコストを抑えられる可能性があります。",
  },
  {
    title: "AI審査で最短30分入金",
    description:
      "独自開発のAI審査システムにより、従来数時間から数日かかっていた審査が最短30分で完了します。緊急の資金需要に対応できる圧倒的なスピード感が強みです。必要書類が揃っていれば、申込当日の入金が高い確率で実現します。",
  },
  {
    title: "完全オンライン完結で全国対応",
    description:
      "申込・審査・契約・入金の全プロセスがオンラインで完結します。来店や対面面談は一切不要で、全国どこからでも利用可能です。クラウドサインを活用した電子契約に対応しており、印紙代も不要です。",
  },
  {
    title: "買取金額の上限なし",
    description:
      "10万円以上であれば買取金額に上限が設定されておらず、数千万円〜数億円規模の大口案件にも対応可能です。事業規模が大きい法人でも、必要な金額を一括で資金化できます。",
  },
];

const demerits = [
  {
    title: "AI審査のため個別相談が難しい",
    description:
      "AI審査に特化しているため、電話や対面での個別相談の機会が限られます。複雑な事情がある案件や、審査落ちした場合の再審査交渉など、人間の担当者と直接やり取りしたい場合には不便を感じる可能性があります。",
  },
  {
    title: "3社間ファクタリングに非対応",
    description:
      "PAYTODAYは2社間ファクタリング専門のサービスです。3社間ファクタリングでさらに手数料を下げたい場合は、ビートレーディングなど3社間対応のサービスを検討する必要があります。",
  },
  {
    title: "設立間もない会社のため実績は発展途上",
    description:
      "Dual Life Partners株式会社は比較的新しい企業であり、ビートレーディングやOLTAのような長年の実績はまだありません。ただし、AI審査による効率化と低手数料で着実に利用者を伸ばしています。",
  },
];

const steps = [
  { step: "1", title: "Web申込", description: "公式サイトの申込フォームから必要情報を入力します。24時間受付対応。" },
  { step: "2", title: "必要書類の提出", description: "請求書・身分証明書・入出金明細等をオンラインでアップロードします。" },
  { step: "3", title: "AI審査", description: "独自AIが売掛債権を審査。最短30分で結果が通知されます。" },
  { step: "4", title: "電子契約・入金", description: "クラウドサインで電子契約を締結後、指定口座に即日入金されます。" },
];

const faqs = [
  {
    question: "PAYTODAYの手数料は実際にいくらですか？",
    answer:
      "手数料は1〜9.5%の範囲で、売掛先の信用力・売掛金の金額・支払いサイトなどにより決まります。売掛先が上場企業で金額が大きい場合は1〜3%台、中小企業向けの一般的な案件では5〜8%程度が多いとされます。手数料上限が9.5%のため、10%を超えることはありません。",
  },
  {
    question: "PAYTODAYは個人事業主でも利用できますか？",
    answer:
      "はい、法人だけでなく個人事業主・フリーランスも利用可能です。個人事業主の場合は確定申告書や開業届が必要書類となります。10万円以上の法人向け売掛金があれば、事業規模を問わず申込みできます。",
  },
  {
    question: "PAYTODAYの審査に必要な書類は何ですか？",
    answer:
      "主な必要書類は、請求書（売掛金の証明）、代表者の身分証明書、直近の入出金明細（通帳やネットバンキング画面）、決算書または確定申告書です。書類をオンラインでアップロードするだけで審査が開始されます。",
  },
  {
    question: "PAYTODAYで売掛先にバレることはありますか？",
    answer:
      "いいえ、PAYTODAYは2社間ファクタリングのため、売掛先への通知は一切ありません。利用者とPAYTODAYの間で完結するため、取引先に知られることなく資金調達が可能です。",
  },
  {
    question: "PAYTODAYの入金は本当に30分で届きますか？",
    answer:
      "最短30分は全ての書類が事前に揃っており、審査に問題がない場合の最速ケースです。実際の入金時間は書類の準備状況や審査内容によって異なり、当日中の入金が一般的です。初回利用時はやや時間がかかる場合もあります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "PAYTODAYの口コミ・評判｜AI審査で最短30分のファクタリングを検証",
  description:
    "PAYTODAYの口コミ・評判を徹底調査。AI審査で最短30分入金のファクタリングを検証。",
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
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
    "@id": "https://factoring-partner.pages.dev/reviews/paytoday/",
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
    { "@type": "ListItem", position: 3, name: "PAYTODAY" },
  ],
};

const comparisonData = [
  { name: "PAYTODAY", fee: "1%〜9.5%", speed: "最短30分", amount: "10万円〜上限なし", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "QuQuMo", fee: "1%〜14.8%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function PaytodayReviewPage() {
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
          { label: "PAYTODAY" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            PAYTODAYの口コミ・評判
            <br className="hidden md:block" />
            AI審査で最短30分のファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            AI審査で最短30分入金、手数料1〜9.5%の「PAYTODAY」の口コミ・評判を徹底調査。オンライン完結の2社間ファクタリングを検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. PAYTODAYの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. PAYTODAYのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. PAYTODAYのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            PAYTODAYの基本情報
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
            PAYTODAYの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            PAYTODAY（ペイトゥデイ）は、Dual Life Partners株式会社が運営するAI審査型のオンラインファクタリングサービスです。AI（人工知能）による自動審査を核としており、申込から入金まで最短30分という業界最速水準のスピードを実現しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料1〜9.5%は2社間ファクタリングとしては非常に低い水準で、OLTAの2〜9%と並んで業界トップクラスの低手数料を実現しています。完全オンライン完結型のため、全国どこからでも利用でき、対面での面談は一切不要です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            法人だけでなくフリーランスや個人事業主にも対応しており、10万円以上の売掛金があれば幅広い事業者が利用できます。クラウドサインによる電子契約を採用しており、ペーパーレスで手続きが完了します。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">PAYTODAYの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>AI審査で最短30分の業界最速入金</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料1〜9.5%の業界最安水準</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>完全オンライン完結で全国対応</span>
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
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://and-heroes.com/media/growth-partners/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">GROWTH PARTNERS</a></p>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-sm">&#9675;</span>
              良い口コミの傾向
            </h3>
            <div className="space-y-4">
              {goodReviews.map((review, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-block rounded bg-secondary/10 px-2 py-0.5 text-xs text-secondary">{review.label}</span>
                  </div>
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
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-block rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">{review.label}</span>
                  </div>
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
            PAYTODAYのメリット4つ
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
            PAYTODAYのデメリット3つ
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
            PAYTODAYの利用の流れ
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

        {/* ── AI審査の仕組み ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            PAYTODAYのAI審査の仕組み
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            PAYTODAYが採用するAI審査は、売掛先の信用情報や取引実績を人工知能が自動分析することで、従来の人手による審査を大幅に効率化しています。これにより最短30分という圧倒的なスピードを実現しています。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">スピードと精度の両立</p>
              <p className="text-sm leading-relaxed text-text-light">
                AIが企業の信用情報データベースや過去の取引パターンを瞬時に分析するため、人間が数時間かけて行う審査を数十分で完了できます。過去の取引データの蓄積により、審査精度は継続的に向上しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">審査で重視されるポイント</p>
              <p className="text-sm leading-relaxed text-text-light">
                AI審査では主に売掛先の信用力（企業規模・業績・設立年数など）、売掛金の金額と支払いサイト、過去の取引継続性、申込者の入出金明細パターンなどが総合的に判定されます。申込者自身の業績よりも売掛先の信用力が重視される傾向があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">OLTAのAI審査との違い</p>
              <p className="text-sm leading-relaxed text-text-light">
                同じくAI審査を採用するOLTAと比較すると、PAYTODAYは入金スピードに優位性があります（OLTA：最短即日 vs PAYTODAY：最短30分）。手数料はOLTA（2〜9%）とPAYTODAY（1〜9.5%）で下限はPAYTODAYが低く、上限はOLTAが低い設計です。
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
                  <span>とにかく早く資金調達したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手数料をできるだけ抑えたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>オンラインで全て完結させたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>対面不要でシンプルに利用したい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>電話や対面で相談したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>3社間ファクタリングを希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>土日祝日に急ぎの資金調達が必要な方</span>
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

        {/* ── 利用シーン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            PAYTODAYが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">急な仕入れ資金が必要な場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                取引先から大口の受注が入ったが、仕入れ資金が不足しているケースでPAYTODAYの最短30分入金が役立ちます。午前中に申し込めばお昼前には入金されるスピード感で、ビジネスチャンスを逃しません。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">月末の支払いに間に合わせたい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                月末に給与や外注費の支払いが重なるが、売掛金の入金が翌月以降の場合に活用できます。AI審査のため書類準備さえ整っていれば当日中に資金を確保できる可能性が高く、資金繰りのストレスを軽減できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">銀行融資の審査を待てない場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                銀行融資は審査に数週間から数ヶ月かかることがありますが、PAYTODAYなら最短30分で資金を確保できます。融資の審査待ちの間のつなぎ資金としても活用でき、資金ショートを防ぐことができます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料コストを抑えたい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料1〜9.5%は2社間ファクタリングとしては業界最安水準です。定期的にファクタリングを利用する事業者にとって、手数料の差は年間で大きなコスト差になります。他社で10%以上の手数料を提示された場合は、PAYTODAYで見積もりを取る価値があります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 利用前の準備 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            PAYTODAYを利用する前の準備
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            PAYTODAYの最短30分入金を実現するには、事前の書類準備が鍵となります。以下の書類を事前に準備しておくことで、スムーズに手続きを進められます。
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
                <span>代表者の身分証明書（運転免許証・マイナンバーカード等）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">3</span>
                <span>入出金明細（直近の通帳コピーまたはネットバンキング画面）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">4</span>
                <span>決算書または確定申告書</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            書類をPDFまたは画像形式で事前にデータ化しておくと、申込時のアップロードがスムーズです。初回利用時は全書類が必要ですが、2回目以降は一部の書類が省略できる場合があります。
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

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            PAYTODAYの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            PAYTODAYは、AI審査による最短30分入金と手数料1〜9.5%の低水準を両立させた、スピードとコストの両面で優れたファクタリングサービスです。完全オンライン完結型で全国対応しており、忙しい事業者でも手軽に利用できます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特に入金スピードは業界トップクラスで、緊急の資金需要に対応できる点が最大の強みです。手数料上限9.5%も2社間ファクタリングとしては非常に競争力のある水準で、他社で10%以上の手数料を提示されたケースでも検討する価値があります。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、AI審査特化のため個別相談の機会が限られる点や、比較的新しいサービスであるため実績面ではまだ発展途上である点は理解しておく必要があります。スピードと低手数料を最優先する方にとっては、有力な選択肢の一つです。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            PAYTODAYの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            AI審査で最短30分入金。手数料1〜9.5%のオンラインファクタリング。
          </p>
          <a
            href="https://paytoday.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料見積もり
          </a>
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
              <p className="mt-1 text-sm text-text-light">AI審査のクラウドファクタリングを検証</p>
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
