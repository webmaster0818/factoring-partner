import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "土建くんの口コミ・評判｜建設業特化ファクタリングを検証",
  description:
    "土建くんの口コミ・評判を徹底調査。建設業に特化したファクタリングサービス「土建くん」の手数料・審査・入金スピード・個人事業主対応を利用者の声で検証します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/reviews/dokenkun/",
  },
  openGraph: {
    title:
      "土建くんの口コミ・評判｜建設業特化ファクタリングを検証",
    description:
      "建設業特化ファクタリング「土建くん」の口コミ・評判を徹底調査。手数料・審査・入金スピードを検証。",
    url: "https://factoring-partner.pages.dev/reviews/dokenkun/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "土建くん" },
  { label: "手数料", value: "5%〜" },
  { label: "入金スピード", value: "最短即日" },
  { label: "買取可能額", value: "非公開" },
  { label: "対象業種", value: "建設業特化" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "契約方式", value: "2社間" },
  { label: "オンライン対応", value: "○（相談はオンライン可）" },
  { label: "運営会社", value: "株式会社GROWTH PARTNERS" },
];

const goodReviews = [
  {
    title: "建設業の事情を理解してくれる",
    detail:
      "「建設業に特化しているため、工期の長さや支払いサイトの長さを理解した上で対応してくれた」「一般的なファクタリング会社では説明が必要な業界特有の事情を、最初から理解してもらえた」という声が見られます。建設業の商慣習に精通した対応が高く評価されています。",
  },
  {
    title: "個人事業主の一人親方でも対応してくれた",
    detail:
      "「一人親方として利用できるか不安だったが、問題なく審査を通過できた」「個人事業主だと断られがちだが、土建くんは建設業であれば個人でも柔軟に対応してくれた」という口コミが見られます。",
  },
  {
    title: "対応が丁寧で安心感がある",
    detail:
      "「ファクタリングが初めてで不安だったが、担当者が丁寧に説明してくれた」「急ぎの資金需要に対して親身に対応してもらえた」という声があり、特にファクタリング初心者の建設業者からの評価が高い傾向です。",
  },
];

const badReviews = [
  {
    title: "建設業以外は利用しにくい",
    detail:
      "「建設業以外の事業も行っているが、建設業以外の売掛金は対象外だった」という声があります。建設業に特化したサービスのため、他業種の売掛金には対応していないケースがあります。",
  },
  {
    title: "手数料の上限が不明瞭",
    detail:
      "「手数料5%〜と下限のみ公開されており、実際にどのくらいの手数料になるか事前にわかりにくい」という指摘があります。具体的な手数料は案件ごとに異なるため、見積もりを取るまで正確な費用がわからない点に注意が必要です。",
  },
  {
    title: "知名度がまだ低い",
    detail:
      "「大手と比較すると知名度が低く、口コミ情報が少ないため判断材料が少ない」という声があります。建設業特化という独自のポジションを持つ一方、利用者数や実績の公開が限定的です。",
  },
];

const merits = [
  {
    title: "建設業の商慣習を熟知した審査体制",
    description:
      "土建くんの最大のメリットは、建設業に特化した審査体制です。一般的なファクタリング会社では、工期の長さや重層下請構造、支払いサイトの長さ（60〜120日）が審査のハードルになることがあります。土建くんは建設業の商慣習を理解した上で審査を行うため、業界特有の事情が不利に働きにくいのが特徴です。",
  },
  {
    title: "個人事業主（一人親方）にも対応",
    description:
      "建設業では個人事業主として活動する「一人親方」が多く存在します。土建くんは法人だけでなく個人事業主にも対応しており、一人親方の方でもファクタリングを利用できます。個人事業主を断るファクタリング会社もある中で、建設業の個人事業主に門戸を開いている点は大きなメリットです。",
  },
  {
    title: "最短即日の入金スピード",
    description:
      "必要書類が揃っていれば最短即日で入金に対応しています。建設業は材料費や外注費の支払いが先行するため、急な資金需要が発生しやすい業種です。即日入金に対応していることで、急ぎの支払いにも対応可能です。",
  },
  {
    title: "建設業界の資金繰りに精通したサポート",
    description:
      "土建くんの運営元であるGROWTH PARTNERSは、建設業界の資金繰り支援に特化したサービスを展開しています。ファクタリングだけでなく、建設業の資金繰り全般に関する相談にも対応できる体制があり、単なる資金調達以上のサポートが期待できます。",
  },
];

const demerits = [
  {
    title: "建設業以外の売掛金には対応しにくい",
    description:
      "建設業に特化したサービスのため、建設業以外の売掛金のファクタリングには対応していない場合があります。複数の事業を展開している場合、建設業以外の売掛金は他のファクタリング会社を利用する必要があります。",
  },
  {
    title: "手数料の上限が非公開",
    description:
      "手数料は5%〜と下限のみ公開されており、上限が明示されていません。案件ごとに手数料が異なるため、見積もりを取るまで具体的なコストがわからない点はデメリットです。他社と比較する際は、必ず見積もりを取って実際の手数料を確認しましょう。",
  },
  {
    title: "大手と比較すると実績の公開が限定的",
    description:
      "ビートレーディングやOLTAなどの大手と比較すると、累計取引社数や買取額などの実績を公開していません。建設業特化というニッチな領域に特化しているため、総合型の大手と同じスケールの実績開示は難しい面もありますが、利用者にとっては判断材料が少なくなる点に注意が必要です。",
  },
];

const steps = [
  { step: "1", title: "無料相談・申込", description: "電話またはWebフォームから相談・申込。建設業特有の事情も気軽に相談できます。" },
  { step: "2", title: "必要書類の提出", description: "請求書・注文書・通帳コピー・本人確認書類などを提出。建設業特有の書類にも対応。" },
  { step: "3", title: "審査", description: "建設業の商慣習を理解した審査チームが、売掛先の信用調査を実施。" },
  { step: "4", title: "契約・入金", description: "審査通過後、契約を締結。最短即日で指定口座に入金されます。" },
];

const faqs = [
  {
    question: "土建くんは一人親方でも利用できますか？",
    answer:
      "はい、土建くんは個人事業主（一人親方）でも利用可能です。建設業に特化したサービスのため、一人親方特有の事情（元請からの支払いサイトの長さなど）を理解した上で対応してもらえます。法人格がなくても審査を受けることができます。",
  },
  {
    question: "土建くんの手数料は具体的にいくらですか？",
    answer:
      "土建くんの手数料は5%〜とされていますが、具体的な手数料は案件ごとに異なります。売掛先の信用力（元請・ゼネコンなど）、売掛金の金額、支払いサイトなどによって変動するため、正確な手数料を知るには見積もりを取る必要があります。見積もりは無料です。",
  },
  {
    question: "注文書でもファクタリングは可能ですか？",
    answer:
      "建設業では注文書（受注書）の段階でファクタリングを利用したいケースがありますが、一般的にファクタリングは請求書（売掛債権が確定した段階）が対象です。注文書段階での利用可否については、直接土建くんに相談することをおすすめします。一部のファクタリング会社では注文書ファクタリングに対応しているケースもあります。",
  },
  {
    question: "建設業以外の売掛金も買い取ってもらえますか？",
    answer:
      "土建くんは建設業に特化したファクタリングサービスのため、建設業以外の売掛金については対応が限定的です。建設業以外の売掛金のファクタリングが必要な場合は、ビートレーディングやQuQuMoなどの総合型サービスの利用を検討してください。",
  },
  {
    question: "元請がゼネコンの場合、審査に有利ですか？",
    answer:
      "はい、一般的にゼネコン（大手建設会社）が売掛先の場合、信用力が高いため審査に通りやすく、手数料も低くなる傾向があります。土建くんは建設業に特化しているため、ゼネコンや大手建設会社の売掛金に対する評価ノウハウを持っており、適正な条件を提示してもらえることが期待できます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "土建くんの口コミ・評判｜建設業特化ファクタリングを検証",
  description:
    "建設業特化ファクタリング「土建くん」の口コミ・評判を徹底調査。手数料・審査・入金スピードを検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/dokenkun/",
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
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://factoring-partner.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "業者レビュー",
      item: "https://factoring-partner.pages.dev/reviews/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "土建くん",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function DokenkunReviewPage() {
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
          { label: "土建くん" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            土建くんの口コミ・評判
            <br className="hidden md:block" />
            建設業特化ファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            建設業に特化したファクタリングサービス「土建くん」の口コミ・評判を徹底調査。手数料・審査・入金スピード・個人事業主対応を利用者の声で検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. 土建くんの基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. 土建くんの会社概要と特徴</a></li>
            <li><a href="#reviews" className="hover:underline">3. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">4. 土建くんのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">5. 土建くんのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">6. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">7. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#construction" className="hover:underline">8. 建設業がファクタリングを使うべき理由</a></li>
            <li><a href="#summary" className="hover:underline">9. 総合評価</a></li>
            <li><a href="#faq" className="hover:underline">10. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            土建くんの基本情報
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
        <section id="about" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            土建くんの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            土建くんは、株式会社GROWTH PARTNERSが運営する建設業に特化したファクタリングサービスです。建設業界の資金繰りに精通した専門スタッフが対応し、業界特有の商慣習や支払いサイトの長さを理解した上でサービスを提供しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            建設業は工期が長く、着工から完工・検収・請求・入金までのサイクルが60〜120日以上になることが珍しくありません。その間の材料費・外注費・人件費の支払いが先行するため、慢性的な資金繰りの課題を抱えやすい業種です。土建くんはこうした建設業特有の課題を解決するために設計されたサービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            法人だけでなく個人事業主（一人親方）にも対応しており、建設業で活動するあらゆる事業者が利用できる点が特徴です。2社間ファクタリングに対応しているため、元請に知られずに資金調達が可能です。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">土建くんの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>建設業に特化した審査体制で業界特有の事情に対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>個人事業主（一人親方）でも利用可能</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>最短即日入金で急な支払いにも対応</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 口コミ傾向調査 ─── */}
        <section id="reviews" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            口コミ傾向調査結果
          </h2>

          {/* Disclaimer */}
          <div className="mb-8 rounded-lg border border-border bg-section-bg p-4 text-xs text-text-light leading-relaxed">
            ※掲載している口コミは、Google口コミ・みん評・ヒカカク・ファクログ等の投稿を参考に要約・再構成したものです。出典元の原文とは異なります。
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://growth-partners.co.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">GROWTH PARTNERS公式</a></p>
          </div>

          {/* Good reviews */}
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

          {/* Bad reviews */}
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
            土建くんのメリット4つ
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
            土建くんのデメリット3つ
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
            土建くんの利用の流れ
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
                  <span>建設業（法人・個人事業主）の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>一人親方として活動している方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>元請への秘匿性を重視する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>業界の事情を理解した対応を求める方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>工事代金の支払いサイトが長くて困っている方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>建設業以外の業種の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料の上限を事前に把握したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>大手の実績を重視する方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 建設業がファクタリングを使うべき理由 ─── */}
        <section id="construction" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            建設業がファクタリングを使うべき理由
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            建設業は他業種と比較してファクタリングのニーズが特に高い業種です。その理由を解説します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">支払いサイトが長い</p>
              <p className="text-sm leading-relaxed text-text-light">
                建設業の支払いサイトは60〜120日が一般的で、他業種（30〜60日）と比較して著しく長い傾向にあります。工事完了から入金までの期間が長いため、その間の運転資金の確保が課題となります。ファクタリングで売掛金を早期に現金化することで、この課題を解決できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">重層下請構造による資金繰りの連鎖</p>
              <p className="text-sm leading-relaxed text-text-light">
                建設業は元請→一次下請→二次下請→三次下請という重層下請構造が特徴です。下層の事業者ほど支払いサイトが長くなりやすく、資金繰りが厳しくなります。特に二次下請以降の事業者にとって、ファクタリングは資金繰り改善の有効な手段です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">季節変動による資金需要の波</p>
              <p className="text-sm leading-relaxed text-text-light">
                建設業は天候や季節によって工事量が変動します。繁忙期には材料費・人件費の立替が増える一方、閑散期には売上が減少するため、年間を通じた資金繰りの管理が重要です。ファクタリングは繁忙期の一時的な資金需要に対応するのに適しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">銀行融資が受けにくい場合がある</p>
              <p className="text-sm leading-relaxed text-text-light">
                建設業は業績の変動が大きいため、銀行融資の審査が厳しくなる場合があります。特に個人事業主や小規模法人は融資を受けにくい傾向にあります。ファクタリングは利用者ではなく売掛先の信用力で審査されるため、自社の財務状況に関わらず資金調達が可能です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            土建くんの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            土建くんは、建設業に特化したファクタリングサービスとして、業界特有の課題を理解した対応が最大の強みです。一般的なファクタリング会社では理解されにくい工期の長さ、重層下請構造、支払いサイトの長さといった建設業の商慣習を踏まえた審査・対応を行っています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特に、個人事業主（一人親方）にも対応している点は、建設業で活動する多くの事業者にとって心強いポイントです。元請に知られずに資金調達ができる2社間ファクタリングに対応しており、取引関係に影響を与えるリスクも抑えられます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、手数料の上限が非公開であること、建設業以外には対応しにくいこと、大手と比較すると実績の公開が限定的であることはデメリットとして認識しておく必要があります。利用を検討する際は、まず無料相談で手数料の見積もりを取り、他社とも比較した上で判断することをおすすめします。
          </p>
          <p className="leading-relaxed text-text-light">
            建設業で資金繰りに課題を感じている方、特に支払いサイトの長さに悩んでいる方や、一人親方として活動している方にとって、土建くんは有力な選択肢の一つです。
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

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            建設業の資金繰りは土建くんに無料相談
          </h2>
          <p className="mb-6 text-sm text-white/80">
            建設業に特化したファクタリング。一人親方の方も気軽に相談できます。
          </p>
          <a
            href="https://growth-partners.co.jp/doken/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            土建くん公式サイトで無料相談
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/kensetsukun/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">けんせつくんの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">建設業向けファクタリングを検証</p>
            </Link>
            <Link
              href="/articles/construction/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">建設業向けファクタリングガイド</p>
              <p className="mt-1 text-sm text-text-light">建設業の資金繰り改善に役立つ情報</p>
            </Link>
            <Link
              href="/articles/for-sole-proprietor/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">個人事業主向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">個人事業主が利用できるサービスを紹介</p>
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
