import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "GoodPlusの口コミ・評判｜最短90分のオンラインファクタリングを検証",
  description:
    "GoodPlus(グッドプラス)の口コミ・評判を徹底調査。オンライン完結・最短90分入金・法人個人事業主対応のファクタリングサービスを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/goodplus/",
  },
  openGraph: {
    title:
      "GoodPlusの口コミ・評判｜最短90分のオンラインファクタリングを検証",
    description:
      "GoodPlusの口コミ・評判を徹底調査。最短90分入金のオンラインファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/goodplus/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "5%〜15%" },
  { label: "入金スピード", value: "最短90分" },
  { label: "買取可能額", value: "15万円〜5,000万円" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "オンライン対応", value: "◎（完全オンライン完結）" },
  { label: "契約方式", value: "2社間ファクタリング" },
  { label: "対面面談", value: "不要" },
  { label: "運営会社", value: "株式会社GoodPlus" },
];

const goodReviews = [
  {
    title: "90分で入金されたのは驚き",
    label: "運送業の経営者",
    detail:
      "書類を提出してから約90分で口座に入金されたという声があります。午前中に申し込めば昼過ぎには着金するスピード感で、急な資金需要に対応できた点が高く評価されています。",
  },
  {
    title: "オンラインで全て完結できる",
    label: "Web制作会社の利用者",
    detail:
      "申込から契約、入金まで全てオンラインで完結するため、来店する必要が一切ないと好評です。地方在住の事業者や多忙な経営者にとって、時間的なコストを削減できる点が支持されています。",
  },
  {
    title: "少額から利用できるのが助かる",
    label: "フリーランスの利用者",
    detail:
      "15万円からの少額利用に対応しているため、小規模事業者やフリーランスでも気軽に利用できるという声があります。大口案件がなくても資金調達の選択肢が広がる点が評価されています。",
  },
  {
    title: "担当者の対応が丁寧だった",
    label: "小売業の利用者",
    detail:
      "初めてのファクタリング利用で不安があったが、担当者が仕組みや手数料について丁寧に説明してくれたという口コミがあります。Webチャットやメールでの問い合わせ対応が迅速だと好評です。",
  },
];

const badReviews = [
  {
    title: "手数料が他社より高い印象",
    label: "IT企業の経営者",
    detail:
      "手数料5〜15%はOLTAやPAYTODAYと比較するとやや高めで、特に上限15%は他社の9〜10%台に比べて割高に感じるという声があります。急ぎの案件でなければ他社と相見積もりを取ることを推奨する口コミも見られます。",
  },
  {
    title: "知名度が低くて不安だった",
    label: "製造業の利用者",
    detail:
      "ビートレーディングやOLTAと比較すると知名度が低く、最初は不安を感じたという声があります。実際に利用してみると問題なかったという報告が多いものの、初回利用のハードルを感じる方はいるようです。",
  },
  {
    title: "買取上限が5,000万円",
    label: "建設業の経営者",
    detail:
      "買取可能額の上限が5,000万円のため、大規模な案件には対応できないケースがあるという声があります。億単位の売掛金がある場合は、上限なしのビートレーディングやOLTAを検討する必要があります。",
  },
];

const merits = [
  {
    title: "最短90分の高速入金",
    description:
      "申込から入金まで最短90分というスピード対応が可能です。朝に申し込めば午前中のうちに入金されるケースもあり、緊急の資金需要に素早く対応できます。書類が事前に揃っていれば、よりスムーズに手続きが進みます。",
  },
  {
    title: "完全オンライン完結",
    description:
      "申込・審査・契約・入金まで全てオンラインで完結し、来店や対面面談は一切不要です。全国どこからでも利用でき、移動時間やコストを節約できます。スマートフォンからでも手続きが可能です。",
  },
  {
    title: "15万円からの少額対応",
    description:
      "買取下限が15万円と低めに設定されているため、小規模な案件でも利用しやすいです。フリーランスや小規模事業者が少額の売掛金を現金化したい場合にも活用できます。",
  },
  {
    title: "法人・個人事業主の両方に対応",
    description:
      "法人だけでなく個人事業主も利用対象で、幅広い事業者がサービスを利用できます。業種を問わず、15万円以上の法人向け売掛金があれば申込みが可能です。",
  },
];

const demerits = [
  {
    title: "手数料上限15%はやや高め",
    description:
      "手数料5〜15%の設定は、OLTA（2〜9%）やPAYTODAY（1〜9.5%）と比較するとやや高めです。特に上限15%が適用されるケースでは、コスト面で不利になる可能性があります。複数社に見積もりを取って比較検討することをおすすめします。",
  },
  {
    title: "買取上限5,000万円の制限あり",
    description:
      "買取可能額の上限が5,000万円に設定されているため、大口案件には対応できません。数千万円〜数億円規模の売掛金がある場合は、上限なしのサービス（ビートレーディング、OLTAなど）を検討する方がよいでしょう。",
  },
  {
    title: "実績・知名度はまだ発展途上",
    description:
      "業界大手のビートレーディングやOLTAと比較すると、取引実績や知名度の面ではまだ発展途上です。ただし、オンライン完結のスピード対応で着実にユーザーを獲得しており、サービス品質は問題ないとの声が多いです。",
  },
];

const steps = [
  { step: "1", title: "Web申込", description: "公式サイトの申込フォームから会社情報・売掛金情報を入力します。" },
  { step: "2", title: "必要書類の提出", description: "請求書・通帳コピー・本人確認書類等をオンラインでアップロードします。" },
  { step: "3", title: "審査", description: "提出書類に基づいて審査が行われます。最短で申込当日に結果が出ます。" },
  { step: "4", title: "契約・入金", description: "電子契約を締結後、最短90分で指定口座に入金されます。" },
];

const faqs = [
  {
    question: "GoodPlusの手数料は実際にいくらですか？",
    answer:
      "手数料は5〜15%の範囲で、売掛先の信用力や売掛金の金額、支払いサイトなどにより個別に決定されます。初回利用時は10〜15%程度になるケースが多いとされますが、リピート利用で手数料が下がる可能性もあります。",
  },
  {
    question: "GoodPlusは個人事業主でも利用できますか？",
    answer:
      "はい、法人だけでなく個人事業主も利用可能です。15万円以上の法人向け売掛金があれば申込みできます。確定申告書や開業届が必要書類として求められる場合があります。",
  },
  {
    question: "GoodPlusの審査に必要な書類は何ですか？",
    answer:
      "主な必要書類は、請求書（売掛金の証明）、通帳コピーまたは入出金明細、本人確認書類（運転免許証等）、登記簿謄本（法人の場合）です。書類はオンラインでアップロードします。",
  },
  {
    question: "GoodPlusの入金は本当に90分ですか？",
    answer:
      "最短90分は書類が全て揃っており、審査がスムーズに進んだ場合の最速ケースです。実際には2〜3時間程度かかることもありますが、当日中の入金は高い確率で実現します。初回利用時はやや時間がかかる傾向があります。",
  },
  {
    question: "GoodPlusで売掛先にバレることはありますか？",
    answer:
      "いいえ、GoodPlusは2社間ファクタリングのため、売掛先への通知は一切行われません。利用者とGoodPlusの間だけで取引が完結するため、取引先に知られずに資金調達が可能です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "GoodPlusの口コミ・評判｜最短90分のオンラインファクタリングを検証",
  description:
    "GoodPlusの口コミ・評判を徹底調査。最短90分入金のオンラインファクタリングを検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/goodplus/",
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
    { "@type": "ListItem", position: 3, name: "GoodPlus" },
  ],
};

const comparisonData = [
  { name: "GoodPlus", fee: "5%〜15%", speed: "最短90分", amount: "15万〜5,000万円", online: "◎" },
  { name: "PAYTODAY", fee: "1%〜9.5%", speed: "最短30分", amount: "10万円〜上限なし", online: "◎" },
  { name: "QuQuMo", fee: "1%〜14.8%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function GoodplusReviewPage() {
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
          { label: "GoodPlus" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            GoodPlusの口コミ・評判
            <br className="hidden md:block" />
            最短90分のオンラインファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            オンライン完結・最短90分入金の「GoodPlus」の口コミ・評判を徹底調査。法人・個人事業主対応のファクタリングサービスを検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. GoodPlusの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. GoodPlusのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. GoodPlusのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            GoodPlusの基本情報
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
            GoodPlusの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            GoodPlus（グッドプラス）は、株式会社GoodPlusが運営するオンライン完結型のファクタリングサービスです。最短90分という高速入金と、完全オンライン対応で来店不要の利便性が特徴です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            法人だけでなく個人事業主にも対応しており、15万円からの少額利用が可能です。買取上限は5,000万円で、中小企業やフリーランスの資金調達ニーズに幅広く対応しています。2社間ファクタリング専門のため、売掛先に知られることなく資金調達ができます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            近年の完全オンライン型ファクタリングの需要拡大に合わせて、シンプルでわかりやすいサービス設計を打ち出しており、ファクタリング初心者にも使いやすい仕組みを提供しています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">GoodPlusの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>最短90分の高速入金</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>完全オンライン完結で来店不要</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>15万円からの少額利用に対応</span>
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
            GoodPlusのメリット4つ
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
            GoodPlusのデメリット3つ
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
            GoodPlusの利用の流れ
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
            GoodPlusが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">急な仕入れ代金の支払いが必要な場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                取引先からの急な発注に対応するため、仕入れ代金を即座に確保したいケースでGoodPlusの最短90分入金が活用できます。売掛金を待たずに次の仕入れに回せるため、ビジネスチャンスを逃しません。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">小規模事業者で少額の資金が必要な場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                15万円からの少額対応のため、月額の経費支払いや少額の仕入れ代金など、比較的小さな金額の資金調達にも適しています。銀行融資では対応しにくい少額のつなぎ資金として活用できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">対面での面談が難しい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                完全オンライン完結のため、地方在住で都市部のファクタリング会社への来店が困難な方や、日中の業務が忙しく対面の時間が取れない方に最適です。スマートフォンからも手続きできます。
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
                  <span>最短90分で入金してほしい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>来店不要でオンライン完結したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>15万円程度の少額から利用したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>個人事業主やフリーランスの方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料の安さを最優先する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>5,000万円を超える大口案件の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>業界大手の実績を重視する方</span>
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

        {/* ── 他のオンラインファクタリングとの違い ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            他のオンラインファクタリングとの違い
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            GoodPlusと同じくオンライン完結型のファクタリングサービスは複数存在します。それぞれの特徴を理解し、自社のニーズに合ったサービスを選ぶことが重要です。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">GoodPlus vs PAYTODAY</p>
              <p className="text-sm leading-relaxed text-text-light">
                PAYTODAYは手数料1〜9.5%とGoodPlusより低く、入金も最短30分とより高速です。ただしGoodPlusは15万円からの少額対応で、少額利用ではGoodPlusが有利な場合があります。手数料重視ならPAYTODAY、少額利用ならGoodPlusという使い分けが考えられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">GoodPlus vs QuQuMo</p>
              <p className="text-sm leading-relaxed text-text-light">
                QuQuMo（ククモ）は手数料1〜14.8%で買取上限なし。入金速度は最短2時間です。GoodPlusの方が入金は速い（90分 vs 2時間）ですが、手数料下限と買取上限ではQuQuMoに優位性があります。大口案件はQuQuMo、スピード重視ならGoodPlusが向いています。
              </p>
            </div>
          </div>
        </section>

        {/* ── 利用前の準備 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            GoodPlusを利用する前の準備
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            GoodPlusの最短90分入金を実現するために、事前に以下の書類を準備しておくことをおすすめします。書類が全て揃った状態で申込むことで、審査から入金までのスピードが大幅に向上します。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-semibold text-text-main">必要書類チェックリスト</p>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">1</span>
                <span>請求書（売掛先に発行済みのもの・PDF/画像可）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">2</span>
                <span>通帳コピーまたは入出金明細（直近のもの）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">3</span>
                <span>本人確認書類（運転免許証・マイナンバーカード等）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">4</span>
                <span>登記簿謄本（法人の場合・発行3ヶ月以内）</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            書類はオンラインでアップロードするため、スマートフォンで撮影した画像やスキャンしたPDFが利用できます。初回利用時は全書類が必要ですが、リピート利用の場合は一部省略できるケースもあります。
          </p>
        </section>

        {/* ── オンラインファクタリングのメリット ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            オンラインファクタリングのメリット
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            GoodPlusのようなオンライン完結型ファクタリングには、対面型にはない多くのメリットがあります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">時間と移動コストの削減</p>
              <p className="text-sm leading-relaxed text-text-light">
                来店不要のため、移動にかかる時間や交通費が発生しません。忙しい経営者にとって、オフィスから一歩も出ずにファクタリングの手続きが完了する利便性は非常に大きなメリットです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">全国どこからでも利用可能</p>
              <p className="text-sm leading-relaxed text-text-light">
                地方在住でも都市部のファクタリング会社と同じサービスを受けられます。地方にはファクタリング会社が少ないため、オンライン完結型のサービスは地方の事業者にとって特に価値が高いです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">電子契約による印紙代の節約</p>
              <p className="text-sm leading-relaxed text-text-light">
                紙の契約書では収入印紙が必要になる場合がありますが、電子契約では印紙代が不要です。取引金額が大きい場合、この印紙代の節約は無視できないコストメリットになります。
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
            GoodPlusの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            GoodPlusは、最短90分入金と完全オンライン完結を組み合わせた、スピードと利便性に優れたファクタリングサービスです。15万円からの少額対応も魅力で、小規模事業者やフリーランスにとって使いやすい設計になっています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料5〜15%は業界最安とは言えないものの、入金スピードとオンライン完結の利便性を重視する方には十分な選択肢です。特に急ぎの資金需要がある場合に真価を発揮するサービスです。
          </p>
          <p className="leading-relaxed text-text-light">
            手数料の安さを最優先する場合はOLTAやPAYTODAYを、大口案件の場合はビートレーディングを検討しつつ、スピードと少額対応を重視する場合にGoodPlusを選ぶとよいでしょう。複数社に見積もりを取って比較検討することをおすすめします。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            GoodPlusの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            最短90分入金。オンライン完結のファクタリングサービス。
          </p>
          <a
            href="https://good-plus.jp/"
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
              href="/reviews/paytoday/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">PAYTODAYの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">AI審査で最短30分のファクタリングを検証</p>
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
