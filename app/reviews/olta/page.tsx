import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "OLTA（オルタ）の口コミ・評判｜AI審査のクラウドファクタリングを検証",
  description:
    "OLTA（オルタ）の口コミ・評判を徹底調査。累計申込1,000億円超、事業者10,000社、手数料2〜9%のAI審査クラウドファクタリングを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/olta/",
  },
  openGraph: {
    title:
      "OLTA（オルタ）の口コミ・評判｜AI審査のクラウドファクタリングを検証",
    description:
      "OLTAの口コミ・評判を徹底調査。累計申込1,000億円超のクラウドファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/olta/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "2%〜9%" },
  { label: "入金スピード", value: "最短即日" },
  { label: "買取可能額", value: "制限なし" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "オンライン対応", value: "◎（完全オンライン完結）" },
  { label: "累計申込額", value: "1,000億円超" },
  { label: "利用事業者数", value: "10,000社以上" },
  { label: "運営会社", value: "OLTA株式会社" },
];

const goodReviews = [
  {
    title: "オンラインで全て完結する",
    detail:
      "「来店不要で全てオンラインで手続きが完了した」「地方在住でも問題なく利用できた」という声が多数。対面不要のクラウドファクタリングとして、場所を選ばない利便性が高く評価されています。",
  },
  {
    title: "AI審査でスピーディー",
    detail:
      "「書類をアップロードしたらすぐにAI審査が始まり、想像より早く結果が出た」「人的審査に比べて待ち時間が短い」という口コミがあります。AI活用による審査の効率化が支持されています。",
  },
  {
    title: "手数料が安い",
    detail:
      "「2〜9%は業界でもかなり安い」「他社と比較して手数料の上限が低いのが魅力」という声があります。手数料上限が9%に設定されており、2社間ファクタリングとしては低水準です。",
  },
  {
    title: "提携金融機関が多く信頼できる",
    detail:
      "「メガバンクや地方銀行との提携実績があり安心感がある」「大手金融機関が認めたサービスなので信頼できる」という口コミが見られます。多くの金融機関とのパートナーシップが信頼性を高めています。",
  },
];

const badReviews = [
  {
    title: "審査に落ちるケースがある",
    detail:
      "「AI審査で審査落ちした」「理由が詳しく説明されなかった」という声があります。AI審査は迅速な反面、審査基準が不透明で、落ちた理由がわかりにくいという指摘があります。",
  },
  {
    title: "手数料が上限側（9%）になる場合がある",
    detail:
      "「2%〜と期待したが実際は7〜8%だった」「売掛先や金額によっては上限に近い手数料になる」という口コミがあります。最低手数料の2%が適用されるのは条件が限られるようです。",
  },
  {
    title: "3社間ファクタリングに対応していない",
    detail:
      "「手数料をさらに下げるため3社間を希望したが対応していなかった」という声があります。OLTAは2社間ファクタリング専門のため、3社間での利用はできません。",
  },
];

const merits = [
  {
    title: "手数料2〜9%の低水準",
    description:
      "手数料の上限が9%に設定されており、2社間ファクタリングとしては業界トップクラスの低水準です。一般的な2社間ファクタリングの相場（8〜18%）と比較すると、大幅にコストを抑えられる可能性があります。",
  },
  {
    title: "AI審査による迅速な対応",
    description:
      "独自のAI審査システムにより、従来の人的審査に比べてスピーディーな審査を実現。書類提出後、最短即日で審査結果が出るため、急ぎの資金需要にも対応できます。",
  },
  {
    title: "累計1,000億円超の豊富な実績",
    description:
      "累計申込額1,000億円超、利用事業者10,000社以上という豊富な実績は、サービスの信頼性を裏付けています。多くの金融機関との提携実績もあり、業界での認知度・信頼度は高いです。",
  },
  {
    title: "完全オンラインで全国対応",
    description:
      "申込から審査・契約・入金まで全てオンラインで完結。来店や対面での手続きは一切不要のため、全国どこからでも利用可能です。地方在住の事業者でも問題なく利用できます。",
  },
];

const demerits = [
  {
    title: "AI審査の基準が不透明",
    description:
      "AI審査の具体的な基準は公開されておらず、審査に落ちた場合もその理由が詳しく説明されません。同じ条件でも時期によって結果が変わるケースが報告されており、予測が難しい面があります。",
  },
  {
    title: "最低手数料2%の適用は限定的",
    description:
      "手数料2%〜を掲げていますが、実際に最低水準が適用されるのは売掛先が大手上場企業で金額が大きいなど、好条件が揃った場合に限られます。一般的な案件では5〜9%程度になるケースが多いとされます。",
  },
  {
    title: "2社間ファクタリング専門",
    description:
      "3社間ファクタリングには対応しておらず、取引先の協力を得てさらに手数料を抑えたい場合は他社を検討する必要があります。2社間のみですが、秘密性を重視する方にはメリットでもあります。",
  },
];

const steps = [
  { step: "1", title: "Web申込・会員登録", description: "公式サイトから必要情報を入力して申込。無料で会員登録できます。" },
  { step: "2", title: "書類アップロード", description: "請求書・入出金明細・決算書（直近2期分）等をアップロードします。" },
  { step: "3", title: "AI審査", description: "独自のAIシステムが審査を実施。最短即日で結果が通知されます。" },
  { step: "4", title: "契約・入金", description: "電子契約を締結し、指定口座に入金されます。" },
];

const faqs = [
  {
    question: "OLTAの手数料は実際にいくらですか？",
    answer:
      "手数料は2〜9%の範囲で、売掛先の信用力・売掛金の金額・支払いサイトなどにより決まります。売掛先が上場企業で金額が大きい案件ほど低い手数料が適用される傾向があります。一般的な案件では5〜8%程度が多いとされます。",
  },
  {
    question: "OLTAの審査に必要な書類は何ですか？",
    answer:
      "主な必要書類は、請求書、銀行口座の入出金明細（直近4ヶ月分）、決算書（直近2期分、個人事業主は確定申告書）です。ペイトナーやラボルと比較すると書類は多めですが、その分手数料が低く設定されています。",
  },
  {
    question: "OLTAは個人事業主でも利用できますか？",
    answer:
      "はい、法人だけでなく個人事業主も利用可能です。個人事業主の場合は確定申告書が必要書類となります。フリーランスの方でも、法人からの売掛金があれば利用対象となります。",
  },
  {
    question: "OLTAの提携金融機関はどこですか？",
    answer:
      "OLTAはメガバンク、地方銀行、信用金庫など多数の金融機関と提携しています。提携金融機関を通じてクラウドファクタリングサービスが提供されるケースもあり、金融業界での信頼性が高いことの証明となっています。",
  },
  {
    question: "OLTAで3社間ファクタリングは利用できますか？",
    answer:
      "いいえ、OLTAは2社間ファクタリング専門のサービスです。3社間ファクタリングには対応していません。3社間を希望する場合は、ビートレーディングやアクセルファクターなど他のサービスをご検討ください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "OLTA（オルタ）の口コミ・評判｜AI審査のクラウドファクタリングを検証",
  description:
    "OLTAの口コミ・評判を徹底調査。累計申込1,000億円超のクラウドファクタリングを検証。",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
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
    "@id": "https://factoring-partner.pages.dev/reviews/olta/",
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

const comparisonData = [
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "QuQuMo", fee: "1%〜14.8%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "ペイトナー", fee: "一律10%", speed: "最短10分", amount: "1万〜300万円", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function OltaReviewPage() {
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

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "業者レビュー", href: "/reviews/" },
          { label: "OLTA（オルタ）" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            OLTA（オルタ）の口コミ・評判
            <br className="hidden md:block" />
            AI審査のクラウドファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            累計申込1,000億円超、事業者10,000社以上のクラウドファクタリング「OLTA」の口コミ・評判を徹底調査。手数料2〜9%のAI審査を検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. OLTAの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. OLTAのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. OLTAのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            OLTAの基本情報
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
            OLTAの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            OLTA（オルタ）は、OLTA株式会社が運営するクラウドファクタリングサービスです。2017年の設立以来、「クラウドファクタリング」という概念を日本に定着させたパイオニア的存在として知られています。累計申込額1,000億円超、利用事業者10,000社以上の実績を持っています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            最大の特徴はAI審査による迅速な審査体制と、手数料上限9%の低水準な料金体系です。一般的な2社間ファクタリングの手数料相場が8〜18%であることを考えると、上限9%は非常に競争力のある水準です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            多数のメガバンクや地方銀行、信用金庫との提携実績があり、金融業界からの信頼も厚いです。提携金融機関を通じたクラウドファクタリングサービスも展開しており、従来のファクタリングに対するネガティブなイメージを払拭する取り組みを行っています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">OLTAの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料2〜9%の業界トップクラスの低水準（上限9%）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>メガバンク・地方銀行との豊富な提携実績</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>累計申込1,000億円超の圧倒的な取引実績</span>
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
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/factor/olta" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://minhyo.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">みん評</a></p>
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
            OLTAのメリット4つ
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
            OLTAのデメリット3つ
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
            OLTAの利用の流れ
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
            OLTAが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料を最小限に抑えたい法人の場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料上限9%は2社間ファクタリングとしては業界トップクラスの低さです。特に売掛先が上場企業や大手企業の案件では、2〜5%程度の手数料が適用される可能性があり、コストを大幅に抑えられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">地方在住で来店が難しい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                完全オンライン完結のため、全国どこからでも利用可能です。地方在住の事業者でも、都市部のファクタリング会社に来店する必要がなく、自宅やオフィスからスマートフォンやパソコンで手続きが完了します。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">信頼性の高いサービスを利用したい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                メガバンクや地方銀行との多数の提携実績があり、金融業界からの信頼を得ています。「ファクタリング会社は怪しいのでは」という不安がある方でも、OLTAの提携金融機関の実績を見れば安心して利用できるでしょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">定期的にファクタリングを利用する場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                AI審査によるスピーディーな審査と低手数料は、定期的にファクタリングを利用する事業者にとって大きなメリットです。毎月の資金繰りにファクタリングを組み込む場合、手数料の低さが年間コストに大きく影響します。
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
                  <span>手数料の安さを重視する法人の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>オンラインで完結させたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>大手金融機関と提携している信頼性の高いサービスを選びたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>AI審査でスピーディーに利用したい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>3社間ファクタリングを希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>対面での相談を希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>書類準備を最小限にしたい方（決算書が必要）</span>
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

        {/* ── AI審査の仕組み ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            OLTAのAI審査の仕組みと特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            OLTAが採用するAI審査は、従来の人手による審査とは異なるアプローチで売掛債権の買取可否を判定します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">AI審査のメリット</p>
              <p className="text-sm leading-relaxed text-text-light">
                AI審査の最大のメリットはスピードと一貫性です。人間による審査では担当者の経験や判断にばらつきが出ますが、AIは同じ基準で迅速に審査を行います。また、膨大なデータを短時間で処理できるため、最短即日での審査完了を実現しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">AI審査で重視されるポイント</p>
              <p className="text-sm leading-relaxed text-text-light">
                具体的な審査基準は公開されていませんが、一般的にAI審査では売掛先の信用情報、取引の継続性、入出金明細のパターン、売掛金の金額と支払いサイトなどのデータが総合的に分析されると考えられています。過去の取引データの蓄積により、審査の精度は継続的に向上しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">AI審査の限界</p>
              <p className="text-sm leading-relaxed text-text-light">
                AI審査では、人間の担当者が行うような「事情を汲んだ判断」が難しい面があります。例えば、一時的な売上減少の事情や将来の成長見込みなど、数値データだけでは判断できない要素は考慮されにくい可能性があります。そのような事情がある場合は、対面相談ができるアクセルファクターなどの方が適している場合もあります。
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

        {/* ── 提携金融機関について ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            OLTAの提携金融機関と信頼性
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            OLTAは、メガバンク、地方銀行、信用金庫など多数の金融機関とパートナーシップを結んでいます。これらの提携は、OLTAのサービス品質と企業としての信頼性を裏付ける重要な要素です。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">提携の意義</p>
              <p className="text-sm leading-relaxed text-text-light">
                金融機関がOLTAと提携するためには、OLTAのビジネスモデル・審査体制・セキュリティ・財務状況などが厳しく審査されます。メガバンクを含む複数の金融機関がOLTAを認めているという事実は、サービスの安全性と信頼性の証明といえます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">提携金融機関経由での利用</p>
              <p className="text-sm leading-relaxed text-text-light">
                提携金融機関の取引先企業は、金融機関を通じてOLTAのクラウドファクタリングサービスを利用できるケースがあります。既存の取引銀行がOLTAと提携していれば、銀行から紹介を受けてスムーズに利用開始できる可能性があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">業界のイメージ改善</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリング業界には過去に悪質業者が存在したこともあり、ネガティブなイメージを持つ方もいます。しかし、OLTAのように大手金融機関と提携し、透明性の高いサービスを提供する企業の登場により、業界全体の信頼性が向上しています。
              </p>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            OLTAの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            OLTAは、クラウドファクタリングのパイオニアとして、手数料2〜9%の低水準、AI審査によるスピーディーな対応、そして多数の金融機関との提携実績を持つ、信頼性の高いサービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特に手数料上限9%は2社間ファクタリングとしては業界トップクラスの低さで、コストを重視する事業者にとって大きな魅力です。累計申込1,000億円超の実績も、サービスの安定性を裏付けています。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、AI審査の基準が不透明で審査落ちするケースがある点や、必要書類が他の簡易型サービスに比べて多い点は理解しておく必要があります。手数料の安さと信頼性を重視する法人にとっては、最有力の選択肢の一つです。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            OLTAの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料2〜9%。AI審査で最短即日入金のクラウドファクタリング。
          </p>
          <a
            href="https://www.olta.co.jp/"
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
            OLTAを利用する前の準備
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            OLTAをスムーズに利用するために、事前に準備しておくべき書類と情報を整理しました。
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
                <span>銀行口座の入出金明細（直近4ヶ月分、ネットバンキングの画面キャプチャでも可）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">3</span>
                <span>決算書（法人：直近2期分 / 個人事業主：確定申告書直近2期分）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">4</span>
                <span>本人確認書類（運転免許証・マイナンバーカードなど）</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            書類の準備が整っていれば、申込から入金までスムーズに進みます。特に入出金明細は直近4ヶ月分が必要なため、ネットバンキングからダウンロードしておくと便利です。初回利用時は全ての書類が揃っていることを確認してから申込むことで、審査のスピードアップが期待できます。
          </p>
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
