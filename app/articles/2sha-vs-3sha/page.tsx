import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "2社間ファクタリングと3社間ファクタリングの違い｜メリット・デメリット比較",
  description:
    "2社間ファクタリングと3社間ファクタリングの違いを徹底比較。仕組みの図解、手数料・速度・審査難易度の比較表、それぞれのメリット・デメリット、選び方の判断チャート、債権譲渡登記について解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/2sha-vs-3sha/",
  },
  openGraph: {
    title:
      "2社間ファクタリングと3社間ファクタリングの違い｜メリット・デメリット比較",
    description:
      "2社間と3社間ファクタリングの違いを図解で解説。比較表・メリデメ・選び方の判断チャートも掲載。",
    url: "https://factoring-partner.pages.dev/articles/2sha-vs-3sha/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const comparisonItems = [
  { item: "契約当事者", two: "利用者 + ファクタリング会社", three: "利用者 + ファクタリング会社 + 売掛先" },
  { item: "手数料", two: "8%〜18%（相場）", three: "1%〜9%（相場）" },
  { item: "入金スピード", two: "最短即日（10分〜）", three: "1〜3営業日" },
  { item: "取引先への通知", two: "不要（知られない）", three: "必要（承諾が要）" },
  { item: "審査難易度", two: "やや厳しい", three: "比較的通りやすい" },
  { item: "債権譲渡登記", two: "必要な場合あり", three: "不要" },
  { item: "回収方法", two: "利用者が売掛先から回収し、ファクタリング会社に支払い", three: "売掛先がファクタリング会社に直接支払い" },
  { item: "利用しやすい業種", two: "全業種（特に取引先に知られたくない場合）", three: "建設業・医療など取引先の理解が得やすい業種" },
];

const twoShaAdvantages = [
  {
    title: "取引先にファクタリングの利用を知られない",
    description:
      "2社間ファクタリングの最大のメリットは、売掛先（取引先）にファクタリングの利用を知られないことです。取引先に「資金繰りが厳しいのでは？」と思われるリスクがなく、取引関係に影響を与えません。特に新規取引先や大手企業との取引では、この秘匿性が重要になります。",
  },
  {
    title: "入金スピードが速い",
    description:
      "2社間ファクタリングは売掛先の承諾を得る必要がないため、手続きがスピーディーです。最短10分（ペイトナー）〜即日で入金されるサービスも多く、急ぎの資金需要に最適です。3社間では売掛先との調整に時間がかかるため、この速度は2社間ならではのメリットです。",
  },
  {
    title: "手続きが簡単",
    description:
      "利用者とファクタリング会社の2者間だけで手続きが完結するため、必要書類や手順が少なくて済みます。オンライン完結型のサービスなら、請求書と本人確認書類だけで申し込めるケースもあります。",
  },
];

const twoShaDisadvantages = [
  {
    title: "手数料が高い",
    description:
      "2社間ファクタリングは、ファクタリング会社が売掛先から直接代金を回収できないため、利用者を通じた間接回収のリスクを負います。このリスクプレミアムが手数料に上乗せされるため、3社間に比べて手数料が高くなります（8%〜18% vs 1%〜9%）。",
  },
  {
    title: "債権譲渡登記が必要な場合がある",
    description:
      "2社間ファクタリングでは、ファクタリング会社が自社の権利を保全するために債権譲渡登記を求めることがあります。登記費用（数万円程度）が追加コストになるだけでなく、登記情報は公開されるため、登記簿を確認すればファクタリングの利用が判明する可能性があります。",
  },
  {
    title: "二重譲渡のリスクがある",
    description:
      "2社間ファクタリングでは売掛先が関与しないため、利用者が同じ売掛金を複数のファクタリング会社に売却する「二重譲渡」のリスクがあります。二重譲渡は違法行為であり、発覚すると法的責任を問われます。ファクタリング会社は債権譲渡登記や入出金確認でこのリスクを管理しています。",
  },
];

const threeShaAdvantages = [
  {
    title: "手数料が大幅に安い",
    description:
      "3社間ファクタリングの最大のメリットは手数料の安さです。売掛先がファクタリング会社に直接支払うため、回収リスクが低く、手数料は1%〜9%と2社間の半分以下になることも珍しくありません。大口案件では手数料の差額が数十万〜数百万円になることもあり、コスト面で大きなアドバンテージがあります。",
  },
  {
    title: "審査に通りやすい",
    description:
      "3社間ファクタリングでは売掛先の承諾を得るため、取引の実在性が確認しやすく、ファクタリング会社のリスクが低くなります。その結果、審査基準が緩やかになり、利用者の財務状況が厳しい場合でも審査に通りやすい傾向があります。",
  },
  {
    title: "債権譲渡登記が不要",
    description:
      "3社間ファクタリングでは売掛先の承諾により債権譲渡が公に認められるため、債権譲渡登記が不要です。登記費用が発生しないため、トータルコストがさらに抑えられます。",
  },
];

const threeShaDisadvantages = [
  {
    title: "取引先にファクタリングの利用が知られる",
    description:
      "3社間ファクタリングでは売掛先の承諾が必要なため、必ず取引先にファクタリングの利用が知られます。取引先によっては「資金繰りに問題があるのでは？」と不安に思われ、取引関係に影響が出る可能性があります。",
  },
  {
    title: "入金までに時間がかかる",
    description:
      "売掛先の承諾を得るプロセスが必要なため、2社間に比べて入金までに時間がかかります。一般的に1〜3営業日、売掛先の対応が遅い場合はそれ以上かかることもあります。即日入金が必要な場合は2社間の方が適しています。",
  },
  {
    title: "売掛先の協力が必要",
    description:
      "3社間ファクタリングは売掛先の承諾なしには成立しません。売掛先がファクタリングに否定的な場合や、手続きに協力してくれない場合は利用できません。取引先との関係性によっては、承諾を得ること自体がハードルになる場合があります。",
  },
];

const decisionChart = [
  { condition: "取引先にファクタリングを知られたくない", recommendation: "2社間", reason: "2社間なら通知不要で秘匿性を保てる" },
  { condition: "即日で入金してほしい", recommendation: "2社間", reason: "2社間は最短即日入金が可能" },
  { condition: "手数料をできるだけ安くしたい", recommendation: "3社間", reason: "3社間は手数料1%〜9%と大幅に安い" },
  { condition: "取引先がファクタリングに理解がある", recommendation: "3社間", reason: "承諾が得やすければ3社間のメリットを享受できる" },
  { condition: "大口案件（数百万〜数千万円）を扱う", recommendation: "3社間", reason: "大口は手数料の差額が大きく、3社間の方がコスパが良い" },
  { condition: "個人事業主・フリーランスとして利用する", recommendation: "2社間", reason: "個人向けサービスは2社間が主流で選択肢が豊富" },
  { condition: "建設業・医療業で利用する", recommendation: "3社間", reason: "業界的にファクタリングの理解が進んでおり、3社間が利用しやすい" },
  { condition: "初めてファクタリングを利用する", recommendation: "2社間", reason: "手続きが簡単で、取引先への影響を気にせず始められる" },
];

const aboutRegistration = [
  {
    title: "債権譲渡登記とは",
    description:
      "債権譲渡登記とは、売掛債権の譲渡（売却）事実を法務局に登録する手続きです。これにより、ファクタリング会社は「この売掛債権は自社が買い取った」という法的な対抗要件を具備できます。主に2社間ファクタリングで行われ、3社間では売掛先の承諾があるため不要です。",
  },
  {
    title: "登記費用の目安",
    description:
      "債権譲渡登記にかかる費用は、登録免許税7,500円（1件あたり）に加え、司法書士報酬として2万〜5万円程度が必要です。合計で3万〜6万円程度のコストが発生します。この費用は通常、利用者が負担します。",
  },
  {
    title: "登記のリスクと注意点",
    description:
      "債権譲渡登記は法務局で閲覧可能なため、取引先や金融機関が登記情報を確認すれば、ファクタリングの利用が判明する可能性があります。ただし、登記を積極的に確認するケースは一般的ではありません。なお、ペイトナーやラボルなど一部のオンライン型サービスでは債権譲渡登記を行わないため、この心配は不要です。",
  },
  {
    title: "登記不要のファクタリング会社",
    description:
      "近年は債権譲渡登記を行わないファクタリング会社が増えています。ペイトナー、ラボル、PAYTODAY、QuQuMoなどのオンライン完結型サービスは、少額・短期の取引が中心のため登記不要で利用できます。登記費用を節約したい場合は、これらのサービスを検討しましょう。",
  },
];

const faqs = [
  {
    question: "2社間と3社間はどちらがおすすめですか？",
    answer:
      "状況によって最適な選択が異なります。取引先に知られたくない場合や急ぎの場合は2社間、手数料を抑えたい場合や取引先の理解が得られる場合は3社間がおすすめです。初めての利用で迷う場合は、まず2社間から始めてファクタリングに慣れてから、条件の良い3社間への切り替えを検討するのも一つの方法です。",
  },
  {
    question: "2社間ファクタリングでも取引先に知られることはありますか？",
    answer:
      "基本的に2社間ファクタリングでは取引先に通知されることはありません。ただし、債権譲渡登記が行われた場合、登記簿を閲覧すれば判明する可能性があります。登記不要のサービス（ペイトナー・ラボルなど）を選べば、取引先に知られるリスクをさらに低減できます。",
  },
  {
    question: "3社間ファクタリングで取引先に承諾を断られることはありますか？",
    answer:
      "はい、断られる可能性はあります。取引先によってはファクタリングに対して否定的な認識を持っている場合があります。ただし、3社間ファクタリングは法的に問題のない正当な取引であり、取引先にとっても支払い先が変わるだけでデメリットはほとんどありません。丁寧に説明すれば承諾を得られるケースが多いです。",
  },
  {
    question: "2社間から3社間に切り替えることはできますか？",
    answer:
      "はい、多くのファクタリング会社では2社間と3社間の両方に対応しているため、切り替えが可能です。初回は2社間で利用し、取引先との関係が安定してきたら3社間に切り替えて手数料を下げるという戦略も有効です。ビートレーディングやPMGなど両方に対応した会社がおすすめです。",
  },
  {
    question: "3社間ファクタリングは個人事業主でも利用できますか？",
    answer:
      "制度上は個人事業主でも3社間ファクタリングは利用可能ですが、実際には2社間が主流です。個人事業主向けのサービス（ペイトナー・ラボル・FREENANCEなど）は基本的に2社間ファクタリングのみの提供です。3社間を利用したい場合は、ビートレーディングやPMGなど法人向けサービスに問い合わせてみましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "2社間ファクタリングと3社間ファクタリングの違い｜メリット・デメリット比較",
  description:
    "2社間と3社間ファクタリングの違いを図解で解説。比較表・メリデメ・選び方の判断チャートも掲載。",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
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
    "@id":
      "https://factoring-partner.pages.dev/articles/2sha-vs-3sha/",
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

/* ── Component ────────────────────────────────────── */

export default function TwoVsThreePage() {
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
          { label: "コラム", href: "/articles/" },
          { label: "2社間vs3社間ファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            比較解説
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            2社間ファクタリングと3社間ファクタリングの違い
            <br className="hidden md:block" />
            メリット・デメリット比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            2社間と3社間ファクタリングの仕組みの違いを図解で解説。手数料・入金スピード・審査難易度の比較表、それぞれのメリット・デメリット、選び方の判断チャートまで徹底的に比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#mechanism" className="hover:underline">
                1. 仕組みの違い（図解）
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                2. 2社間 vs 3社間 比較表
              </a>
            </li>
            <li>
              <a href="#2sha-merits" className="hover:underline">
                3. 2社間ファクタリングのメリット・デメリット
              </a>
            </li>
            <li>
              <a href="#3sha-merits" className="hover:underline">
                4. 3社間ファクタリングのメリット・デメリット
              </a>
            </li>
            <li>
              <a href="#decision" className="hover:underline">
                5. どちらを選ぶべきか - 判断チャート
              </a>
            </li>
            <li>
              <a href="#registration" className="hover:underline">
                6. 債権譲渡登記について
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 仕組みの違い ─── */}
        <section id="mechanism" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            仕組みの違い（図解）
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            2社間ファクタリングと3社間ファクタリングの最も大きな違いは、<strong className="text-text-main">売掛先（取引先）が取引に関与するかどうか</strong>です。それぞれの仕組みを図解で確認しましょう。
          </p>

          {/* 2社間図解 */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-bold text-text-main">2社間ファクタリングの仕組み</h3>
            <div className="rounded-lg border border-border bg-section-bg p-6">
              <p className="mb-4 text-center text-sm font-bold text-text-main">2社間ファクタリングの流れ</p>
              <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
                <div className="flex h-24 w-40 flex-col items-center justify-center rounded-lg border-2 border-primary bg-white p-3">
                  <p className="text-sm font-bold text-primary">利用者（自社）</p>
                  <p className="mt-1 text-xs text-text-light">売掛債権を保有</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-accent font-semibold">(1) 売掛債権を売却</p>
                  <span className="text-xl text-primary">&#8644;</span>
                  <p className="text-xs text-secondary font-semibold">(2) 買取代金を入金</p>
                </div>
                <div className="flex h-24 w-40 flex-col items-center justify-center rounded-lg border-2 border-secondary bg-white p-3">
                  <p className="text-sm font-bold text-secondary">ファクタリング会社</p>
                  <p className="mt-1 text-xs text-text-light">債権を買い取る</p>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-lg text-primary">&#8595;</span>
                  <p className="text-xs text-text-light">(3) 売掛金の入金後、ファクタリング会社に支払い</p>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-primary-light p-4">
              <p className="text-sm leading-relaxed text-text-light">
                <strong className="text-primary">ポイント：</strong>売掛先は取引に関与しないため、ファクタリングの利用を知られません。利用者がファクタリング会社に代金を支払う義務を負います。
              </p>
            </div>
          </div>

          {/* 3社間図解 */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-bold text-text-main">3社間ファクタリングの仕組み</h3>
            <div className="rounded-lg border border-border bg-section-bg p-6">
              <p className="mb-4 text-center text-sm font-bold text-text-main">3社間ファクタリングの流れ</p>
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
                  <div className="flex h-24 w-40 flex-col items-center justify-center rounded-lg border-2 border-primary bg-white p-3">
                    <p className="text-sm font-bold text-primary">利用者（自社）</p>
                    <p className="mt-1 text-xs text-text-light">売掛債権を保有</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-xs text-accent font-semibold">(1) 売掛債権を売却</p>
                    <span className="text-xl text-primary">&#8644;</span>
                    <p className="text-xs text-secondary font-semibold">(2) 買取代金を入金</p>
                  </div>
                  <div className="flex h-24 w-40 flex-col items-center justify-center rounded-lg border-2 border-secondary bg-white p-3">
                    <p className="text-sm font-bold text-secondary">ファクタリング会社</p>
                    <p className="mt-1 text-xs text-text-light">債権を買い取る</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="text-lg text-primary">&#8593;</span>
                  <p className="text-xs text-text-light">(3) 売掛先に債権譲渡を通知・承諾</p>
                  <span className="text-lg text-primary">&#8595;</span>
                </div>
                <div className="flex h-24 w-40 flex-col items-center justify-center rounded-lg border-2 border-accent bg-white p-3">
                  <p className="text-sm font-bold text-accent">売掛先（取引先）</p>
                  <p className="mt-1 text-xs text-text-light">(4) 期日に直接支払い</p>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-primary-light p-4">
              <p className="text-sm leading-relaxed text-text-light">
                <strong className="text-primary">ポイント：</strong>売掛先の承諾を得て取引するため、代金は売掛先からファクタリング会社に直接支払われます。回収リスクが低いため手数料が安くなります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            2社間 vs 3社間 比較表
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            2社間ファクタリングと3社間ファクタリングの主要な違いを一覧表で比較します。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">2社間ファクタリング</th>
                  <th className="px-4 py-3 font-semibold">3社間ファクタリング</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row, index) => (
                  <tr
                    key={row.item}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">{row.item}</td>
                    <td className="px-4 py-3 text-text-light">{row.two}</td>
                    <td className="px-4 py-3 text-text-light">{row.three}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 2社間のメリデメ ─── */}
        <section id="2sha-merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            2社間ファクタリングのメリット・デメリット
          </h2>

          <h3 className="mb-4 text-lg font-bold text-secondary">メリット</h3>
          <div className="mb-8 space-y-4">
            {twoShaAdvantages.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-text-main">{item.title}</h4>
                    <p className="mt-2 leading-relaxed text-text-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mb-4 text-lg font-bold text-accent">デメリット</h3>
          <div className="space-y-4">
            {twoShaDisadvantages.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-text-main">{item.title}</h4>
                    <p className="mt-2 leading-relaxed text-text-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3社間のメリデメ ─── */}
        <section id="3sha-merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            3社間ファクタリングのメリット・デメリット
          </h2>

          <h3 className="mb-4 text-lg font-bold text-secondary">メリット</h3>
          <div className="mb-8 space-y-4">
            {threeShaAdvantages.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-text-main">{item.title}</h4>
                    <p className="mt-2 leading-relaxed text-text-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mb-4 text-lg font-bold text-accent">デメリット</h3>
          <div className="space-y-4">
            {threeShaDisadvantages.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-text-main">{item.title}</h4>
                    <p className="mt-2 leading-relaxed text-text-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 対応会社一覧 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            2社間・3社間に対応したおすすめファクタリング会社
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            2社間と3社間の両方に対応しているファクタリング会社を選べば、状況に応じて最適な方式を柔軟に選択できます。以下は主要なファクタリング会社の対応状況です。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">会社名</th>
                  <th className="px-4 py-3 font-semibold">2社間</th>
                  <th className="px-4 py-3 font-semibold">3社間</th>
                  <th className="px-4 py-3 font-semibold">手数料</th>
                  <th className="px-4 py-3 font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-4 py-3 font-semibold text-text-main">ビートレーディング</td>
                  <td className="px-4 py-3 text-secondary font-bold">対応</td>
                  <td className="px-4 py-3 text-secondary font-bold">対応</td>
                  <td className="px-4 py-3">2%〜12%</td>
                  <td className="px-4 py-3 text-text-light">大手の安心感。両方式に柔軟対応</td>
                </tr>
                <tr className="border-t border-border bg-section-bg">
                  <td className="px-4 py-3 font-semibold text-text-main">PMG</td>
                  <td className="px-4 py-3 text-secondary font-bold">対応</td>
                  <td className="px-4 py-3 text-secondary font-bold">対応</td>
                  <td className="px-4 py-3">1%〜12.8%</td>
                  <td className="px-4 py-3 text-text-light">3社間なら1%台の低手数料も可能</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3 font-semibold text-text-main">日本中小企業金融サポート機構</td>
                  <td className="px-4 py-3 text-secondary font-bold">対応</td>
                  <td className="px-4 py-3 text-secondary font-bold">対応</td>
                  <td className="px-4 py-3">1.5%〜10%</td>
                  <td className="px-4 py-3 text-text-light">非営利法人。手数料が安い</td>
                </tr>
                <tr className="border-t border-border bg-section-bg">
                  <td className="px-4 py-3 font-semibold text-text-main">ペイトナー</td>
                  <td className="px-4 py-3 text-secondary font-bold">対応</td>
                  <td className="px-4 py-3 text-text-light">非対応</td>
                  <td className="px-4 py-3">一律10%</td>
                  <td className="px-4 py-3 text-text-light">2社間特化。最短10分入金</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3 font-semibold text-text-main">ラボル</td>
                  <td className="px-4 py-3 text-secondary font-bold">対応</td>
                  <td className="px-4 py-3 text-text-light">非対応</td>
                  <td className="px-4 py-3">一律10%</td>
                  <td className="px-4 py-3 text-text-light">2社間特化。24時間365日対応</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※ 個人事業主・フリーランス向けのサービス（ペイトナー・ラボル・FREENANCEなど）は2社間のみの対応が一般的です。3社間を利用したい場合は、ビートレーディング・PMG・日本中小企業金融サポート機構などの法人向けサービスをご検討ください。
          </p>
        </section>

        {/* ── 判断チャート ─── */}
        <section id="decision" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            どちらを選ぶべきか - 判断チャート
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            あなたの状況に合わせて、2社間と3社間のどちらが適しているかを判断しましょう。以下の条件に当てはまる方を確認してください。
          </p>

          <div className="space-y-3">
            {decisionChart.map((item) => (
              <div key={item.condition} className="rounded-lg border border-border bg-white p-5">
                <div className="flex items-start gap-4">
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white ${item.recommendation === "2社間" ? "bg-primary" : "bg-secondary"}`}>
                    {item.recommendation}
                  </span>
                  <div>
                    <p className="font-bold text-text-main">{item.condition}</p>
                    <p className="mt-1 text-sm text-text-light">{item.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">迷ったら「2社間」から始めよう</p>
            <p className="text-sm leading-relaxed text-text-light">
              初めてファクタリングを利用する場合や、どちらにするか迷った場合は、まず2社間から始めることをおすすめします。取引先に影響を与えず、手続きも簡単で即日入金にも対応しているため、ファクタリングの仕組みを理解するのに最適です。慣れてきたら、手数料を下げるために3社間への切り替えを検討しましょう。
            </p>
          </div>
        </section>

        {/* ── 法的背景 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            2社間・3社間ファクタリングの法的背景
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリング（債権譲渡）は民法で認められた合法的な取引です。2020年の民法改正（債権法改正）により、ファクタリングの法的基盤がさらに強化されました。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特に重要なのは、<strong className="text-text-main">債権譲渡禁止特約</strong>の扱いの変更です。改正前は、取引先との契約に「債権譲渡禁止」の特約がある場合、その売掛債権のファクタリングは無効になる可能性がありました。しかし改正後は、たとえ債権譲渡禁止特約があっても、債権譲渡自体は有効になりました。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">2020年民法改正のポイント</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>債権譲渡禁止特約があっても譲渡自体は有効（民法466条2項）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>ただし、悪意・重過失の場合は債務者が供託できる（同条3項）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>将来債権の譲渡も明文化された（民法466条の6）</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 債権譲渡登記 ─── */}
        <section id="registration" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            債権譲渡登記について
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            2社間ファクタリングを利用する際に知っておくべき「債権譲渡登記」について解説します。3社間ファクタリングでは基本的に不要ですが、2社間では求められるケースがあります。
          </p>

          <div className="space-y-6">
            {aboutRegistration.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-text-light">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/low-fee/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料が安いファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                手数料相場と節約術をランキング形式で紹介
              </p>
            </Link>
            <Link
              href="/articles/for-corporation/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">法人向けファクタリング5選</p>
              <p className="mt-1 text-sm text-text-light">
                中小企業の資金調達に最適なサービスを比較
              </p>
            </Link>
            <Link
              href="/articles/instant-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">即日ファクタリング10選</p>
              <p className="mt-1 text-sm text-text-light">
                最短10分〜当日入金のおすすめ会社を紹介
              </p>
            </Link>
            <Link
              href="/articles/what-is-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングとは</p>
              <p className="mt-1 text-sm text-text-light">
                仕組み・種類・メリット・デメリットを解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            あなたに合ったファクタリング会社を見つけましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            2社間・3社間に対応したファクタリング会社を手数料・入金スピード・対応エリアで徹底比較。最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
