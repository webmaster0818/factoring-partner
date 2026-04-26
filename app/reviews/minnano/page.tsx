import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "みんなのファクタリングの口コミ・評判｜法人・個人事業主のオンラインファクタリング",
  description:
    "みんなのファクタリングの口コミ・評判を徹底調査。オンライン完結、手数料2%〜、最短3時間入金、10万円からの少額対応ファクタリングを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/minnano/",
  },
  openGraph: {
    title:
      "みんなのファクタリングの口コミ・評判｜法人・個人事業主のオンラインファクタリング",
    description:
      "みんなのファクタリングの口コミ・評判を徹底調査。最短3時間のオンラインファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/minnano/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "2%〜" },
  { label: "入金スピード", value: "最短3時間" },
  { label: "買取可能額", value: "10万円〜" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "オンライン対応", value: "◎（完全オンライン完結）" },
  { label: "契約方式", value: "2社間ファクタリング" },
  { label: "必要書類", value: "請求書・本人確認書類等" },
  { label: "運営会社", value: "株式会社チェンジ" },
];

const goodReviews = [
  {
    title: "少額でも利用できて助かった",
    detail:
      "フリーランスのライターからは「10万円の小さな売掛金でも受け付けてくれた」「少額対応のファクタリングは少ないのでありがたい」という声があります。10万円からの少額対応は、個人事業主やフリーランスにとって大きなメリットです。",
  },
  {
    title: "最短3時間のスピード入金が便利",
    detail:
      "Web制作の個人事業主からは「午前中に申込んで午後には入金されていた」「急ぎの支払いに間に合って助かった」という口コミがあります。最短3時間のスピード入金は、急な資金需要に対応できる迅速さとして評価されています。",
  },
  {
    title: "オンラインで全て完結して楽だった",
    detail:
      "デザイナーの利用者からは「スマホから全ての手続きが完了した」「書類のアップロードも簡単でストレスなく利用できた」という声があります。完全オンライン完結のため、場所や時間を選ばず利用できる点が好評です。",
  },
  {
    title: "手数料が思ったより安かった",
    detail:
      "IT企業の経営者からは「手数料2%台で利用できてコスト的にも満足」「少額でも手数料が高すぎず助かった」という口コミがあります。2%〜という手数料設定は、少額取引でもコストパフォーマンスが良いと評価されています。",
  },
];

const badReviews = [
  {
    title: "知名度が低く情報が少ない",
    detail:
      "サービス業の利用者からは「大手と比べると口コミや情報が少なく不安だった」「実績についてもっと公開してほしい」という声があります。比較的新しいサービスのため、口コミ情報がまだ限られている面があります。",
  },
  {
    title: "手数料の上限が不明確",
    detail:
      "建設業の利用者からは「手数料2%〜とあるが上限がわからない」「実際の手数料は見積もりを取らないと判断できない」という口コミがあります。手数料の上限が明示されていない点は、事前のコスト把握を難しくしています。",
  },
  {
    title: "大口の案件には向かないと感じた",
    detail:
      "製造業の利用者からは「数百万円規模の売掛金には対応してもらえたが、大手と比べるとスムーズさに欠けた」という声があります。少額対応に強い一方、大口案件では大手サービスの方が安心感があるという意見もあります。",
  },
];

const merits = [
  {
    title: "10万円からの業界最低水準の少額対応",
    description:
      "買取可能額が10万円からという業界でも最低水準の少額対応は、個人事業主やフリーランスにとって大きなメリットです。多くのファクタリング会社は最低30万〜50万円からの設定が多いため、少額の売掛金を持つ事業者でも利用しやすいサービスです。",
  },
  {
    title: "最短3時間のスピード入金",
    description:
      "申込から最短3時間での入金に対応しており、急な資金需要にも迅速に応えます。必要書類が揃っていれば午前中の申込で午後の入金も可能で、当日中に資金を確保したい場合に最適です。",
  },
  {
    title: "手数料2%〜の低水準",
    description:
      "手数料が2%からという低水準で設定されており、少額の取引でもコストを抑えられます。少額ファクタリングでは手数料率が高くなりがちですが、みんなのファクタリングは少額でも比較的良心的な手数料で利用可能です。",
  },
  {
    title: "完全オンライン完結で手軽に利用",
    description:
      "申込から審査・契約・入金まで全てオンラインで完結します。来店不要でスマートフォンからも手続きが可能なため、忙しい個人事業主やフリーランスでも手軽に利用できます。全国どこからでもアクセス可能です。",
  },
];

const demerits = [
  {
    title: "運営実績の情報が限られる",
    description:
      "大手ファクタリング会社と比較すると、運営実績や取引件数に関する公開情報が限られています。サービスの信頼性を判断するための材料が少ない面があるため、初めて利用する際は少額から試すことをおすすめします。",
  },
  {
    title: "手数料の上限が明示されていない",
    description:
      "手数料は2%〜と下限は公開されていますが、上限が明示されていません。案件によっては想定より高い手数料が提示される可能性があるため、事前に見積もりを取って確認することが重要です。",
  },
  {
    title: "大口案件への対応力が未知数",
    description:
      "少額対応に強い一方で、数千万円規模の大口案件への対応力については情報が限られています。大口の資金調達が必要な場合は、ビートレーディングやOLTAなど大手のサービスを検討する方が安心です。",
  },
];

const steps = [
  { step: "1", title: "オンライン申込", description: "公式サイトから必要情報を入力して申込。最短数分で完了します。" },
  { step: "2", title: "書類アップロード", description: "請求書・本人確認書類等をオンラインでアップロードします。" },
  { step: "3", title: "審査・見積もり", description: "売掛金の内容をもとに審査が行われ、買取条件が提示されます。" },
  { step: "4", title: "契約・入金", description: "電子契約を締結後、最短3時間で指定口座に入金されます。" },
];

const faqs = [
  {
    question: "みんなのファクタリングの手数料はいくらですか？",
    answer:
      "手数料は2%〜で、売掛先の信用力・売掛金の金額・支払いサイトなどにより決定されます。少額の売掛金でも利用可能で、具体的な手数料は事前の無料見積もりで確認できます。",
  },
  {
    question: "みんなのファクタリングは本当に10万円から利用できますか？",
    answer:
      "はい、買取可能額は10万円からで、少額の売掛金でも利用可能です。多くのファクタリング会社が30万〜50万円を下限としている中、10万円から対応しているのは業界でも珍しい特徴です。",
  },
  {
    question: "みんなのファクタリングは個人事業主でも利用できますか？",
    answer:
      "はい、法人だけでなく個人事業主も利用可能です。フリーランスの方でも、法人からの売掛金があれば審査対象となります。少額から利用できるため、個人事業主の方にも使いやすいサービスです。",
  },
  {
    question: "みんなのファクタリングの審査に必要な書類は何ですか？",
    answer:
      "主な必要書類は、請求書（売掛先に発行済みのもの）と本人確認書類です。案件によっては追加で通帳コピーや確定申告書等を求められる場合があります。必要書類が少ない分、手続きがスムーズです。",
  },
  {
    question: "みんなのファクタリングで売掛先に知られますか？",
    answer:
      "いいえ、みんなのファクタリングは2社間ファクタリングのため、売掛先に通知されることはありません。利用者とみんなのファクタリングの間で完結する取引形態です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "みんなのファクタリングの口コミ・評判｜法人・個人事業主のオンラインファクタリング",
  description:
    "みんなのファクタリングの口コミ・評判を徹底調査。最短3時間のオンラインファクタリングを検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/minnano/",
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
    { "@type": "ListItem", position: 3, name: "みんなのファクタリング" },
  ],
};

const comparisonData = [
  { name: "みんなのファクタリング", fee: "2%〜", speed: "最短3時間", amount: "10万円〜", online: "◎" },
  { name: "ペイトナー", fee: "一律10%", speed: "最短10分", amount: "1万〜300万円", online: "◎" },
  { name: "ラボル", fee: "一律10%", speed: "最短30分", amount: "1万〜制限なし", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function MinnanoReviewPage() {
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
          { label: "みんなのファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            みんなのファクタリングの口コミ・評判
            <br className="hidden md:block" />
            法人・個人事業主のオンラインファクタリング
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            オンライン完結、手数料2%〜、最短3時間入金の「みんなのファクタリング」の口コミ・評判を徹底調査。10万円からの少額対応サービスを検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. みんなのファクタリングの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. みんなのファクタリングのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. みんなのファクタリングのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            みんなのファクタリングの基本情報
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
            みんなのファクタリングの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            みんなのファクタリングは、株式会社チェンジが運営するオンライン完結型のファクタリングサービスです。法人・個人事業主の両方に対応し、10万円からの少額買取が可能な点が大きな特徴です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            最短3時間での入金に対応しており、急な資金需要にもスピーディーに応えます。手数料は2%〜と業界でも低水準の設定で、少額取引でもコストパフォーマンスの良いサービスを提供しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            完全オンライン完結のサービスのため、来店不要で全国から利用可能です。スマートフォンからでも手続きが完了するため、忙しい事業者でも手軽に資金調達ができます。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">みんなのファクタリングの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>10万円からの業界最低水準の少額対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>最短3時間のスピード入金</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料2%〜の低水準で完全オンライン完結</span>
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
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/factor/minnanofactoring" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://minhyo.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">みん評</a></p>
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
            みんなのファクタリングのメリット4つ
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
            みんなのファクタリングのデメリット3つ
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
            みんなのファクタリングの利用の流れ
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

        {/* ── 少額ファクタリングの活用法 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            少額ファクタリングの活用法
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            みんなのファクタリングの10万円からの少額対応は、特に個人事業主やフリーランスにとって有用です。少額ファクタリングを効果的に活用する方法を解説します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">月末の資金ショートを防ぐ</p>
              <p className="text-sm leading-relaxed text-text-light">
                フリーランスは月末に複数の経費支払いが集中することがありますが、クライアントからの入金は翌月末ということも多いです。10万円程度の少額ファクタリングで一時的な資金ショートを防ぐ使い方が有効です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">外注費の先払いに活用する</p>
              <p className="text-sm leading-relaxed text-text-light">
                プロジェクトで外注を使う場合、外注先への支払いがクライアントからの入金より先に来ることがあります。売掛金の一部をファクタリングで早期に現金化し、外注費に充てることで資金繰りを円滑にできます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">新規事業の初期投資に利用する</p>
              <p className="text-sm leading-relaxed text-text-light">
                新しいサービスや商品の開発には初期投資が必要ですが、銀行融資の審査を待つ余裕がないこともあります。少額のファクタリングで必要な初期費用を確保し、ビジネスチャンスを逃さない使い方も可能です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 利用シーン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            みんなのファクタリングが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">フリーランスで入金サイトが長い場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                フリーランスの方は、納品後30〜60日後の入金というケースが多いです。その間の生活費や事業経費をファクタリングで賄うことで、安定した事業運営が可能になります。10万円からの少額対応はフリーランスに最適です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">個人事業主で銀行融資が難しい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                個人事業主は法人と比べて銀行融資のハードルが高い傾向があります。ファクタリングは売掛先の信用力が重視されるため、自社の業績に関わらず利用できる可能性があり、資金調達の選択肢が広がります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">複数の少額売掛金をまとめて現金化したい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                10万円からの少額対応のため、複数の小さな売掛金をそれぞれファクタリングに出すことも可能です。複数のクライアントからの入金を待たずに、必要な分だけ現金化する使い方ができます。
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
                  <span>10万円程度の少額から利用したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>個人事業主・フリーランスの方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>最短3時間で資金が必要な方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>オンラインで全て完結させたい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>大手の知名度・実績を重視する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>数千万円以上の大口案件を検討している方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料の上限を事前に明確に把握したい方</span>
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

        {/* ── ペイトナー・ラボルとの比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ペイトナー・ラボルとの違い
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            少額ファクタリングで比較されやすいペイトナーやラボルとの違いを整理します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料の違い</p>
              <p className="text-sm leading-relaxed text-text-light">
                ペイトナーとラボルは一律10%の手数料ですが、みんなのファクタリングは2%〜と変動制です。売掛先の信用力が高ければ2〜5%程度で利用できる可能性があり、コスト面で有利になるケースがあります。ただし、条件によっては10%を超える場合もあるため、事前の見積もりが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">入金スピードの違い</p>
              <p className="text-sm leading-relaxed text-text-light">
                ペイトナーは最短10分、ラボルは最短30分で入金されますが、みんなのファクタリングは最短3時間です。スピードだけを重視するならペイトナーやラボルが優位ですが、手数料を含めた総合コストで判断することが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">対応範囲の違い</p>
              <p className="text-sm leading-relaxed text-text-light">
                ペイトナーは上限300万円ですが、みんなのファクタリングには明確な上限がなく、法人の大きめの案件にも対応できます。法人として事業規模を拡大していく場合、みんなのファクタリングの方が長く使い続けやすいサービスと言えます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            みんなのファクタリングの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            みんなのファクタリングは、10万円からの少額対応と最短3時間のスピード入金が最大の魅力です。個人事業主やフリーランスなど、少額の売掛金を持つ事業者にとって非常に使いやすいサービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料2%〜の低水準と完全オンライン完結の利便性も高く評価されています。必要書類が比較的少なく、手続きがシンプルな点も、忙しい個人事業主にとっては大きなメリットです。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、運営実績の情報が限られる点や手数料の上限が不明確な点は留意が必要です。少額の資金調達を手軽に行いたい個人事業主やフリーランスには、積極的に検討すべきサービスの一つです。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            みんなのファクタリングの無料相談はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            10万円から利用可能。最短3時間入金のオンラインファクタリング。
          </p>
          <a
            href="https://www.minnano-factoring.com/"
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
            みんなのファクタリングの利用前準備
          </h2>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-semibold text-text-main">事前準備チェックリスト</p>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">1</span>
                <span>請求書（売掛先に発行済みのもの、PDF・画像形式）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">2</span>
                <span>本人確認書類（運転免許証・マイナンバーカード等）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">3</span>
                <span>入金先の銀行口座情報</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">4</span>
                <span>売掛金が10万円以上であること</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            書類をスマートフォンで撮影してアップロードすることも可能です。最短3時間入金を実現するためには、書類に不備がないことが重要です。事前に全ての書類を揃えてから申込みましょう。
          </p>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/paytner/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ペイトナーの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">最短10分入金のフリーランス向けファクタリング</p>
            </Link>
            <Link
              href="/reviews/labol/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ラボルの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">フリーランス向けファクタリングを検証</p>
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
