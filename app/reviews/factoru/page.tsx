import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクトルの口コミ・評判｜最短40分のAIファクタリングを検証",
  description:
    "ファクトルの口コミ・評判を徹底調査。AI審査で最短40分入金、手数料1%〜のオンライン完結ファクタリングを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/factoru/",
  },
  openGraph: {
    title:
      "ファクトルの口コミ・評判｜最短40分のAIファクタリングを検証",
    description:
      "ファクトルの口コミ・評判を徹底調査。AI審査で最短40分入金のファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/factoru/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "1%〜" },
  { label: "入金スピード", value: "最短40分" },
  { label: "買取可能額", value: "30万〜1億円" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "オンライン対応", value: "◎（完全オンライン完結）" },
  { label: "審査方式", value: "AI審査" },
  { label: "契約方式", value: "2社間ファクタリング" },
  { label: "運営会社", value: "株式会社ファクトル" },
];

const goodReviews = [
  {
    title: "入金までのスピードが驚くほど速い",
    detail:
      "IT企業の経営者からは「書類提出から40分程度で審査完了の連絡が来て驚いた」「午前中に申し込んで昼過ぎには入金されていた」という声があります。AI審査による圧倒的なスピード感が最も高く評価されています。",
  },
  {
    title: "手数料が安くコストを抑えられた",
    detail:
      "建設業の利用者からは「手数料1%台で買い取ってもらえた」「他社では8%と言われた案件が、ファクトルでは3%程度で済んだ」という口コミがあります。AI審査により人件費を削減し、低手数料を実現している点が支持されています。",
  },
  {
    title: "オンラインで全て完結して便利",
    detail:
      "Web制作会社の利用者からは「来店不要で全てスマホから手続きできた」「地方在住だが問題なく利用できた」という声があります。書類のアップロードから契約まで完全オンラインで完結する利便性が好評です。",
  },
  {
    title: "審査が柔軟で通りやすかった",
    detail:
      "広告代理店の利用者からは「創業して間もないが審査に通った」「他社で断られた案件がファクトルでは対応してもらえた」という口コミがあります。AI審査により多角的な審査基準が適用されるため、柔軟な対応が可能になっているようです。",
  },
];

const badReviews = [
  {
    title: "初回は手数料が高めになるケースがある",
    detail:
      "物流業の利用者からは「手数料1%〜と期待したが初回は5%程度だった」「継続利用で下がると説明されたが初回のインパクトは大きかった」という声があります。最低手数料が適用されるのは好条件が揃った場合に限られるようです。",
  },
  {
    title: "電話でのサポートが限られる",
    detail:
      "飲食業の利用者からは「対面での相談ができなかった」「電話よりもチャットでのやり取りが中心で、詳しい説明を聞きたい時に不便を感じた」という口コミがあります。オンライン完結の裏返しとして対面相談は基本的にありません。",
  },
  {
    title: "AI審査で理由なく落ちることがある",
    detail:
      "サービス業の利用者からは「AI審査で落ちたが具体的な理由がわからなかった」「同じ売掛先でも時期によって審査結果が変わった」という声があります。AI審査の判断基準が不透明で予測しにくい面があります。",
  },
];

const merits = [
  {
    title: "業界最速クラスの最短40分入金",
    description:
      "AI審査を活用することで、申込から最短40分での入金を実現しています。一般的なファクタリング会社の即日対応と比較しても圧倒的に速く、急ぎの資金需要に最適です。書類が揃っていれば午前中の申込で午前中の入金も可能です。",
  },
  {
    title: "手数料1%〜の低水準",
    description:
      "手数料が1%からという業界トップクラスの低水準を実現しています。AI審査により人件費を抑え、その分を手数料の低減に反映しています。売掛先が大手企業で金額が大きい案件ほど低い手数料が適用される傾向があります。",
  },
  {
    title: "完全オンライン完結で来店不要",
    description:
      "申込から審査・契約・入金まで全てオンラインで完結します。スマートフォンやパソコンがあれば全国どこからでも利用可能。書類のアップロードも簡単で、デジタルに慣れている事業者であればスムーズに手続きが進みます。",
  },
  {
    title: "AI審査で柔軟な審査基準",
    description:
      "AIが多角的なデータを分析して審査を行うため、従来の人的審査では通りにくかった案件でも対応できるケースがあります。創業間もない企業や、業績に波がある企業でもAIが総合的に判断するため、チャンスが広がります。",
  },
];

const demerits = [
  {
    title: "最低手数料1%の適用条件が限定的",
    description:
      "手数料1%〜を掲げていますが、実際に最低水準が適用されるのは売掛先が上場企業で金額が大きいなど、好条件が揃った場合に限られます。一般的な案件では3〜8%程度になるケースが多く、期待値とのギャップが生じることがあります。",
  },
  {
    title: "対面サポートがない",
    description:
      "完全オンライン完結のサービスのため、対面での相談や説明を受けることができません。ファクタリングの仕組みをじっくり説明してほしい方や、書面での手続きを好む方にとっては不便に感じる可能性があります。",
  },
  {
    title: "AI審査の基準が不透明",
    description:
      "AI審査の具体的な基準は公開されておらず、審査に落ちた場合もその理由が詳しく説明されません。「なぜ落ちたのかわからない」という声があり、改善のための情報が得にくいデメリットがあります。",
  },
];

const steps = [
  { step: "1", title: "オンライン申込", description: "公式サイトから必要情報を入力して申込。最短1分で完了します。" },
  { step: "2", title: "書類アップロード", description: "請求書・本人確認書類・通帳コピーをオンラインでアップロードします。" },
  { step: "3", title: "AI審査", description: "AIが即座に審査を開始。最短40分で結果が通知されます。" },
  { step: "4", title: "契約・入金", description: "電子契約を締結後、指定口座に入金されます。" },
];

const faqs = [
  {
    question: "ファクトルの手数料は実際にいくらですか？",
    answer:
      "手数料は1%〜で、売掛先の信用力・金額・支払いサイトなどにより決まります。初回利用では3〜8%程度が多く、継続利用や好条件の案件では1〜3%程度まで下がるケースがあります。事前に無料見積もりで確認できます。",
  },
  {
    question: "本当に40分で入金されますか？",
    answer:
      "最短40分での入金は、書類が全て揃っている場合の目安です。書類の不備や確認事項がある場合はもう少し時間がかかります。また、銀行の営業時間外に申し込んだ場合は翌営業日の入金となることがあります。",
  },
  {
    question: "ファクトルは個人事業主でも利用できますか？",
    answer:
      "はい、法人だけでなく個人事業主も利用可能です。フリーランスの方でも、法人からの売掛金があれば審査対象となります。買取可能額は30万円からなので、少額の売掛金でも対応しています。",
  },
  {
    question: "ファクトルのAI審査は何を見ていますか？",
    answer:
      "具体的な審査基準は公開されていませんが、一般的に売掛先の信用情報、取引の継続性、売掛金の金額、支払いサイトなどが総合的に分析されます。従来の審査では重視されなかったデータも含め、AIが多角的に判断しています。",
  },
  {
    question: "ファクトルで3社間ファクタリングは利用できますか？",
    answer:
      "ファクトルは基本的に2社間ファクタリングでのサービス提供です。売掛先に通知されずに利用したい方に向いています。3社間ファクタリングを希望する場合は、ビートレーディングやアクセルファクターなどをご検討ください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファクトルの口コミ・評判｜最短40分のAIファクタリングを検証",
  description:
    "ファクトルの口コミ・評判を徹底調査。AI審査で最短40分入金のファクタリングを検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/factoru/",
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
    { "@type": "ListItem", position: 3, name: "ファクトル" },
  ],
};

const comparisonData = [
  { name: "ファクトル", fee: "1%〜", speed: "最短40分", amount: "30万〜1億円", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "QuQuMo", fee: "1%〜14.8%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "ペイトナー", fee: "一律10%", speed: "最短10分", amount: "1万〜300万円", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function FactoruReviewPage() {
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
          { label: "ファクトル" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクトルの口コミ・評判
            <br className="hidden md:block" />
            最短40分のAIファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            AI審査で最短40分入金、手数料1%〜のオンライン完結ファクタリング「ファクトル」の口コミ・評判を徹底調査します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. ファクトルの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. ファクトルのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. ファクトルのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクトルの基本情報
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
            ファクトルの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクトルは、AI技術を活用した次世代型のオンラインファクタリングサービスです。従来のファクタリングでは数日かかっていた審査プロセスをAIで自動化し、最短40分での入金を実現しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料1%〜という業界最低水準の料金設定も大きな特徴です。AI審査により人件費を大幅に削減し、そのコスト削減分を利用者への手数料低減に還元するビジネスモデルを採用しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            完全オンライン完結のサービスのため、来店不要で全国どこからでも利用可能です。スマートフォンからでも手続きが完了するため、忙しい経営者でもスキマ時間に申込ができます。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">ファクトルの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>AI審査で最短40分の業界最速クラスの入金スピード</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料1%〜の業界トップクラスの低水準</span>
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
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/factor/factoru" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://and-g.co.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">GROWTH PARTNERS</a></p>
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
            ファクトルのメリット4つ
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
            ファクトルのデメリット3つ
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
            ファクトルの利用の流れ
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
            ファクトルのAI審査の特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクトルのAI審査は、従来の人手による審査プロセスを自動化し、圧倒的なスピードと精度を両立しています。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">従来の審査との違い</p>
              <p className="text-sm leading-relaxed text-text-light">
                一般的なファクタリング会社では審査に数時間〜数日かかりますが、ファクトルのAI審査は最短40分で完了します。AIが過去の取引データや信用情報を瞬時に分析し、人間では処理しきれない量のデータを基に判断を行います。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">コスト削減のメカニズム</p>
              <p className="text-sm leading-relaxed text-text-light">
                AI審査の導入により審査担当者の人件費を大幅に削減しています。このコスト削減が手数料1%〜という低水準を可能にしています。利用者にとっては、スピードと低コストの両方を享受できるメリットがあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">審査精度の向上</p>
              <p className="text-sm leading-relaxed text-text-light">
                取引データが蓄積されるほどAIの判断精度が向上するため、サービスの継続とともに審査の質も高まっています。また、人間の主観が入らないため、一貫した基準での審査が行われます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 利用シーン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクトルが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">IT・Web業界で急な外注費が発生した場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                IT企業やWeb制作会社では、プロジェクトの急な拡大に伴い外注費が先行して発生することがあります。最短40分のスピード入金なら、午前中に申込んで午後には外注先への支払いが可能です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料コストを最小化したい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングを定期的に利用する場合、手数料の差が年間で大きなコスト差になります。手数料1%〜のファクトルなら、年間の資金調達コストを最小限に抑えられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">地方在住で来店が困難な場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                完全オンライン完結のため、東京や大阪などの大都市にあるファクタリング会社に来店する必要がありません。地方の中小企業や個人事業主でも、同じサービスを同じ条件で利用できます。
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
                  <span>とにかくスピードを重視する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手数料を最小限に抑えたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>オンラインで完結させたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>ITリテラシーが高くデジタル手続きに抵抗がない方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>対面で相談・説明を受けたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>1億円超の大口案件を希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>3社間ファクタリングを利用したい方</span>
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

        {/* ── 他社との違い ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクトルと他社AIファクタリングの違い
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            AI審査を採用するファクタリング会社は増えていますが、ファクトルにはいくつかの独自の特徴があります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">入金スピードの圧倒的な差</p>
              <p className="text-sm leading-relaxed text-text-light">
                OLTAやPAYTODAYなどもAI審査を採用していますが、最短即日〜30分程度が一般的です。ファクトルの最短40分入金は業界最速クラスで、書類さえ揃っていれば商談の合間にも資金調達が完了する可能性があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料の競争力</p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料1%〜はOLTAの2%〜やPAYTODAYの1%〜と同等以上の競争力があります。AI審査による人件費削減を手数料の低減に還元するモデルは共通ですが、ファクトルはスピードと手数料の両面で高い水準を維持しています。
              </p>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクトルの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクトルは、AI審査による最短40分入金と手数料1%〜という、スピードとコストの両面で業界トップクラスの競争力を持つファクタリングサービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            完全オンライン完結のため来店不要で全国対応しており、デジタルに慣れている事業者にとっては非常に使いやすいサービスです。特にIT・Web業界の事業者からの評価が高く、スピード感のある資金調達手段として活用されています。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、対面サポートがない点やAI審査の基準が不透明な点は事前に理解しておく必要があります。スピードと低コストを重視する方にとっては、最有力の選択肢の一つです。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            ファクトルの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            AI審査で最短40分入金。手数料1%〜のオンラインファクタリング。
          </p>
          <a
            href="https://factoru.jp/"
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
            ファクトルを最速で利用するための準備
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            最短40分入金を実現するためには、事前の書類準備が重要です。以下のチェックリストを参考に準備しましょう。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-semibold text-text-main">事前に用意するもの</p>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">1</span>
                <span>請求書（売掛先に発行済みのもの、PDF・画像形式）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">2</span>
                <span>本人確認書類（運転免許証・マイナンバーカードなど）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">3</span>
                <span>銀行口座の通帳コピーまたは入出金明細</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">4</span>
                <span>入金先の銀行口座情報</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            書類をデータ化（PDF・画像）して準備しておくと、オンラインでのアップロードがスムーズです。不備があると確認に時間がかかるため、事前に漏れがないかチェックしておきましょう。
          </p>
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
              href="/reviews/paytoday/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">PAYTODAYの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">最短30分入金のAIファクタリングを検証</p>
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
