import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "マネーフォワード アーリーペイメントの口コミ・評判｜上場企業の安心感",
  description:
    "マネーフォワード アーリーペイメントの口コミ・評判を徹底調査。マネーフォワード連携、手数料1%〜10%、法人向けオンライン完結ファクタリングを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/moneyforward/",
  },
  openGraph: {
    title:
      "マネーフォワード アーリーペイメントの口コミ・評判｜上場企業の安心感",
    description:
      "マネーフォワード アーリーペイメントの口コミ・評判を徹底調査。上場企業の安心感を検証。",
    url: "https://factoring-partner.pages.dev/reviews/moneyforward/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "1%〜10%" },
  { label: "入金スピード", value: "最短2営業日" },
  { label: "買取可能額", value: "数十万〜数億円" },
  { label: "対象", value: "法人" },
  { label: "オンライン対応", value: "◎（完全オンライン完結）" },
  { label: "契約方式", value: "2社間ファクタリング" },
  { label: "連携サービス", value: "マネーフォワード クラウド" },
  { label: "運営会社", value: "マネーフォワードケッサイ株式会社" },
];

const goodReviews = [
  {
    title: "マネーフォワードとの連携が便利",
    detail:
      "IT企業の経営者からは「マネーフォワード クラウドを既に利用していたため、データ連携がスムーズだった」「会計ソフトと連動しているので入力の手間が省ける」という声があります。既存のマネーフォワードユーザーにとっては特に利便性が高いサービスです。",
  },
  {
    title: "上場企業グループで安心感がある",
    detail:
      "製造業の利用者からは「マネーフォワードは上場企業なので安心して取引できた」「知名度のある企業が運営しているため、社内稟議も通しやすかった」という口コミがあります。上場企業グループの信頼性が高く評価されています。",
  },
  {
    title: "手数料が低めで助かった",
    detail:
      "卸売業の利用者からは「手数料1%台で利用できた」「10%を超えることがないので安心して利用できる」という声があります。手数料上限10%は2社間ファクタリングとしては低水準で、コスト面での安心感があります。",
  },
  {
    title: "オンラインで完結して効率的",
    detail:
      "サービス業の利用者からは「全てオンラインで手続きが完了した」「来店不要で忙しい経営者にとってはありがたい」という口コミがあります。完全オンライン完結のため、場所を選ばず利用できる利便性が好評です。",
  },
];

const badReviews = [
  {
    title: "即日入金ができない",
    detail:
      "建設業の利用者からは「最短2営業日では急ぎの資金調達に間に合わなかった」「即日対応を期待していたが対応していなかった」という声があります。即日入金を希望する場合は他のサービスを検討する必要があります。",
  },
  {
    title: "個人事業主は利用できない",
    detail:
      "フリーランスの利用者からは「法人限定と知って利用を断念した」「個人事業主向けのサービスも展開してほしい」という口コミがあります。マネーフォワード アーリーペイメントは法人のみ対応です。",
  },
  {
    title: "審査が厳しめに感じた",
    detail:
      "中小企業の利用者からは「審査基準が厳しく、最初の申込で通らなかった」「上場企業グループだけにコンプライアンスが厳しい印象」という声があります。信頼性の裏返しとして、審査のハードルがやや高い傾向があります。",
  },
];

const merits = [
  {
    title: "手数料1%〜10%の適正水準",
    description:
      "手数料が1%〜10%に設定されており、2社間ファクタリングとしては業界でも低水準です。特に手数料の上限が10%に明確化されているため、予想外の高額手数料を請求されるリスクがなく、安心して利用できます。",
  },
  {
    title: "マネーフォワード クラウドとの連携",
    description:
      "マネーフォワード クラウド会計やクラウド請求書と連携できるため、既存のマネーフォワードユーザーにとっては請求データの連動がスムーズです。経理業務の効率化とファクタリングの利用を同時に実現できます。",
  },
  {
    title: "上場企業グループの信頼性",
    description:
      "マネーフォワードは東証プライム市場に上場している企業で、ガバナンスとコンプライアンスの体制が整っています。契約内容の透明性や顧客情報の管理に関して高い基準が設けられており、安心して取引できます。",
  },
  {
    title: "完全オンライン完結で効率的",
    description:
      "申込から審査・契約・入金まで全てオンラインで完結するため、来店の必要がありません。忙しい経営者でも効率的に資金調達の手続きを進められ、全国どこからでも利用可能です。",
  },
];

const demerits = [
  {
    title: "即日入金に対応していない",
    description:
      "最短でも2営業日の入金となるため、当日中に資金が必要な場合は利用できません。急ぎの資金調達にはペイトナーやQuQuMo、ファクトルなど即日〜数時間対応のサービスが適しています。",
  },
  {
    title: "法人限定で個人事業主は利用不可",
    description:
      "サービスの対象は法人のみで、個人事業主やフリーランスは利用できません。個人事業主の方はペイトナーやラボル、OLTAなど個人事業主対応のサービスをご検討ください。",
  },
  {
    title: "審査基準がやや厳しい",
    description:
      "上場企業グループとしての審査基準が適用されるため、審査のハードルがやや高い傾向があります。創業間もない企業や業績が不安定な企業は審査に通りにくい可能性があります。",
  },
];

const steps = [
  { step: "1", title: "オンライン申込", description: "公式サイトから必要情報を入力して申込。マネーフォワード連携も可能です。" },
  { step: "2", title: "書類アップロード", description: "請求書・決算書・通帳コピー等をオンラインでアップロードします。" },
  { step: "3", title: "審査", description: "売掛金の内容を審査し、買取条件が提示されます。" },
  { step: "4", title: "契約・入金", description: "電子契約を締結し、最短2営業日で指定口座に入金されます。" },
];

const faqs = [
  {
    question: "マネーフォワード アーリーペイメントの手数料はいくらですか？",
    answer:
      "手数料は1%〜10%の範囲で、売掛先の信用力・売掛金の金額・支払いサイトなどにより決定されます。売掛先が上場企業で金額が大きい案件ほど低い手数料が適用される傾向があります。上限10%が明示されているため、想定外の高額手数料のリスクはありません。",
  },
  {
    question: "マネーフォワード クラウドを使っていなくても利用できますか？",
    answer:
      "はい、マネーフォワード クラウドを利用していなくてもファクタリングサービスは利用可能です。ただし、マネーフォワード クラウドのユーザーであれば請求データの連携がスムーズになるため、より効率的に手続きが進みます。",
  },
  {
    question: "マネーフォワード アーリーペイメントは個人事業主でも利用できますか？",
    answer:
      "いいえ、マネーフォワード アーリーペイメントは法人限定のサービスです。個人事業主やフリーランスの方は、ペイトナーやラボル、OLTAなど個人事業主対応のファクタリングサービスをご検討ください。",
  },
  {
    question: "マネーフォワード アーリーペイメントの審査に必要な書類は何ですか？",
    answer:
      "主な必要書類は、請求書、決算書（直近2期分）、銀行口座の入出金明細です。マネーフォワード クラウドと連携している場合は、一部データの連携が自動化されます。",
  },
  {
    question: "マネーフォワード アーリーペイメントは即日入金できますか？",
    answer:
      "いいえ、即日入金には対応しておらず、最短でも2営業日かかります。即日入金を希望する場合は、QuQuMo（最短2時間）やファクトル（最短40分）、ペイトナー（最短10分）など他のサービスをご検討ください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "マネーフォワード アーリーペイメントの口コミ・評判｜上場企業の安心感",
  description:
    "マネーフォワード アーリーペイメントの口コミ・評判を徹底調査。上場企業の安心感を検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/moneyforward/",
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
    { "@type": "ListItem", position: 3, name: "マネーフォワード アーリーペイメント" },
  ],
};

const comparisonData = [
  { name: "マネーフォワード", fee: "1%〜10%", speed: "最短2営業日", amount: "数十万〜数億円", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "QuQuMo", fee: "1%〜14.8%", speed: "最短2時間", amount: "制限なし", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function MoneyforwardReviewPage() {
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
          { label: "マネーフォワード アーリーペイメント" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            マネーフォワード アーリーペイメントの口コミ・評判
            <br className="hidden md:block" />
            上場企業の安心感を検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            マネーフォワードグループが運営するファクタリング「アーリーペイメント」の口コミ・評判を徹底調査。手数料1%〜10%のオンライン完結サービスを検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. マネーフォワード アーリーペイメントの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. マネーフォワード アーリーペイメントのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. マネーフォワード アーリーペイメントのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            マネーフォワード アーリーペイメントの基本情報
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
            マネーフォワード アーリーペイメントの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            マネーフォワード アーリーペイメントは、マネーフォワードケッサイ株式会社が運営する法人向けファクタリングサービスです。東証プライム市場に上場するマネーフォワードグループの一員として、高い信頼性と安全性を持っています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            最大の特徴は、マネーフォワード クラウドとの連携です。既にマネーフォワードの会計ソフトや請求書サービスを利用している法人であれば、請求データの連携がスムーズで、手続きの効率化が図れます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料は1%〜10%で、2社間ファクタリングとしては上限が低めに設定されています。完全オンライン完結のサービスで、来店不要で全国から利用可能です。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">マネーフォワード アーリーペイメントの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>マネーフォワード クラウドとのシームレスな連携</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>東証プライム上場グループの信頼性と安全性</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料上限10%の明確な料金体系</span>
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
            マネーフォワード アーリーペイメントのメリット4つ
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
            マネーフォワード アーリーペイメントのデメリット3つ
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
            マネーフォワード アーリーペイメントの利用の流れ
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

        {/* ── マネーフォワード連携のメリット ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            マネーフォワード クラウド連携のメリット
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            マネーフォワード アーリーペイメントの最大の差別化ポイントは、マネーフォワード クラウドとの連携機能です。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">請求データの自動連携</p>
              <p className="text-sm leading-relaxed text-text-light">
                マネーフォワード クラウド請求書で発行した請求データをそのままファクタリングの申込に利用できます。請求書情報を改めて入力する手間が省け、入力ミスのリスクも軽減されます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">会計処理の効率化</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの取引データがマネーフォワード クラウド会計に自動で反映されるため、仕訳の入力が効率化されます。経理業務の負担軽減につながり、月次決算のスピードアップにも貢献します。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">資金繰り管理の一元化</p>
              <p className="text-sm leading-relaxed text-text-light">
                マネーフォワード クラウドの資金繰り管理機能と連携することで、ファクタリングによる入金を含めた全体の資金繰りを一元管理できます。経営判断に必要な情報をリアルタイムで把握できるメリットがあります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 利用シーン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            マネーフォワード アーリーペイメントが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">マネーフォワード クラウドを既に利用している法人</p>
              <p className="text-sm leading-relaxed text-text-light">
                既にマネーフォワードの会計ソフトを利用している法人であれば、データ連携により最も効率的にファクタリングを活用できます。追加のアカウント登録や複雑な手続きなしで利用を開始できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">信頼性の高いサービスを選びたい法人</p>
              <p className="text-sm leading-relaxed text-text-light">
                上場企業グループの運営によるコンプライアンスの高さは、社内稟議を通す際にも有利です。「マネーフォワードのサービス」という知名度と信頼性は、経営層への説明がしやすいメリットがあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料の予測可能性を重視する場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料上限10%が明確化されているため、コスト計算がしやすく、予算計画に組み込みやすいサービスです。定期的にファクタリングを利用する法人にとって、コストの予測可能性は重要な要素です。
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
                  <span>マネーフォワード クラウドを利用中の法人</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>上場企業グループの信頼性を重視する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手数料上限が明確なサービスを選びたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>経理業務の効率化も同時に実現したい方</span>
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
                  <span>創業間もなく審査に不安がある方</span>
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

        {/* ── 審査を通過するためのポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            マネーフォワード アーリーペイメントの審査を通過するポイント
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            マネーフォワード アーリーペイメントの審査はやや厳しめと言われていますが、以下のポイントを押さえることで通過率を高められます。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">売掛先が法人であることを確認</p>
              <p className="text-sm leading-relaxed text-text-light">
                審査では売掛先の信用力が重要です。売掛先が法人（特に上場企業や大手企業）の場合は審査に通りやすくなります。個人からの売掛金は審査が厳しくなる傾向があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">決算書2期分を準備する</p>
              <p className="text-sm leading-relaxed text-text-light">
                直近2期分の決算書が必要です。設立間もない企業で2期分の決算書がない場合は、審査のハードルが高くなります。少なくとも1期分の決算を終えてからの利用をおすすめします。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">マネーフォワード クラウド連携で信頼度を高める</p>
              <p className="text-sm leading-relaxed text-text-light">
                マネーフォワード クラウドのデータと連携することで、請求データの正確性が担保され、審査がスムーズに進む可能性があります。既にマネーフォワードユーザーであれば、連携を活用しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            マネーフォワード アーリーペイメントの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            マネーフォワード アーリーペイメントは、上場企業グループの信頼性とマネーフォワード クラウドとの連携が最大の魅力です。手数料1%〜10%という明確な料金体系で、コストの予測がしやすい点も法人にとって大きなメリットです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特にマネーフォワード クラウドを既に利用している法人にとっては、請求データの連携や会計処理の効率化など、ファクタリング以外のメリットも享受できます。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、即日入金ができない点や法人限定のサービスである点は事前に理解しておく必要があります。信頼性と業務効率を重視する法人にとっては、最適な選択肢の一つです。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            マネーフォワード アーリーペイメントの無料相談はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            上場企業グループの安心感。手数料1%〜10%のオンラインファクタリング。
          </p>
          <a
            href="https://mfkessai.co.jp/early-payment/"
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
            マネーフォワード アーリーペイメントの利用準備
          </h2>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-semibold text-text-main">事前に用意するもの</p>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">1</span>
                <span>請求書（売掛先に発行済みのもの）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">2</span>
                <span>決算書（直近2期分）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">3</span>
                <span>銀行口座の入出金明細</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">4</span>
                <span>マネーフォワード クラウドのアカウント（連携する場合）</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            マネーフォワード クラウドを既にご利用中の場合は、請求データの連携により書類提出の手間が軽減されます。未利用の場合でも通常の書類提出で申込可能です。
          </p>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/ag-business/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">AGビジネスサポートの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">アイフル系列の信頼性を検証</p>
            </Link>
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
