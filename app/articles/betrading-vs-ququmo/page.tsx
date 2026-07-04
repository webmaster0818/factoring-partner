import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ビートレーディング vs QuQuMo比較｜大手 vs オンライン型どっち？",
  description:
    "ビートレーディングとQuQuMoを徹底比較。累計9.1万社の大手ビートレーディングと手数料1%〜のオンライン型QuQuMo、手数料・入金速度・審査・実績の7項目で比較し、シーン別おすすめを紹介します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/betrading-vs-ququmo/",
  },
  openGraph: {
    title:
      "ビートレーディング vs QuQuMo比較｜大手 vs オンライン型どっち？",
    description:
      "ビートレーディングとQuQuMoを7項目で徹底比較。大手の信頼性vsオンライン型の手軽さ、どちらが最適か。",
    url: "https://hyogo-shihoushoshi.jp/articles/betrading-vs-ququmo/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const comparisonItems = [
  { item: "手数料", betrading: "2社間：4%〜12% / 3社間：2%〜9%", ququmo: "1%〜・上限非公表（2社間のみ）" },
  { item: "入金スピード", betrading: "最短2時間", ququmo: "最短2時間" },
  { item: "必要書類", betrading: "請求書・通帳・本人確認書類＋決算書", ququmo: "請求書・通帳・本人確認書類の3点" },
  { item: "契約方式", betrading: "2社間・3社間", ququmo: "2社間のみ" },
  { item: "買取可能額", betrading: "制限なし（少額〜大口）", ququmo: "制限なし" },
  { item: "対象", betrading: "法人・個人事業主", ququmo: "法人・個人事業主" },
  { item: "債権譲渡登記", betrading: "不要", ququmo: "不要" },
  { item: "対面対応", betrading: "対面・オンラインどちらも可", ququmo: "オンライン完結のみ" },
  { item: "累計実績", betrading: "累計取引9.1万社・買取額1,824億円", ququmo: "非公開" },
  { item: "運営会社", betrading: "株式会社ビートレーディング", ququmo: "株式会社アクティブサポート" },
];

const betradingStrengths = [
  {
    title: "業界最大級の実績と信頼性",
    description:
      "ビートレーディングは累計取引9.1万社以上、買取額1,824億円という業界トップクラスの実績を誇ります。長年の運営実績と豊富な取引データに基づく安定した審査が特徴で、初めてファクタリングを利用する企業にも安心感があります。Googleマップの口コミでも★4.0（145件以上）と高評価です。",
  },
  {
    title: "2社間・3社間の両方に対応",
    description:
      "ビートレーディングは2社間ファクタリングと3社間ファクタリングの両方に対応しています。取引先に知られたくない場合は2社間（4%〜12%）、手数料を安く抑えたい場合は3社間（2%〜9%）と、ニーズに合わせて選択できます。QuQuMoは2社間のみの対応です。",
  },
  {
    title: "対面・オンラインの柔軟な対応",
    description:
      "ビートレーディングは全国に拠点を持ち、対面での面談にも対応しています。初めてで不安がある方は対面で相談でき、忙しい方はオンラインで完結することも可能です。担当者が丁寧に説明してくれるという口コミも多いです。",
  },
  {
    title: "大口案件にも柔軟に対応",
    description:
      "ビートレーディングは買取額に上限がなく、数百万円から数億円規模の大口案件にも対応しています。累計1,824億円の買取実績があるため、高額案件でも安定した対応が期待できます。",
  },
];

const betradingWeaknesses = [
  {
    title: "手数料の下限がQuQuMoより高い",
    description:
      "ビートレーディングの2社間手数料下限は4%で、QuQuMoの1%と比較すると高めです。売掛先の信用力が非常に高い場合、QuQuMoの方がより安い手数料を提示される可能性があります。",
  },
  {
    title: "初回は書類が多い",
    description:
      "初回利用時は決算書の提出を求められることがあり、QuQuMoの3点（請求書・通帳・本人確認書類）と比較すると書類準備の手間がやや増えます。2回目以降は簡略化されるケースが多いです。",
  },
];

const ququmoStrengths = [
  {
    title: "手数料下限1%は業界最安水準",
    description:
      "QuQuMoの手数料下限は1%で、ビートレーディングの4%と比較して圧倒的に安いです。売掛先が上場企業や大手企業の場合、1%台の手数料が提示されることもあり、コストを最小限に抑えたい事業者にとって最大の魅力です。",
  },
  {
    title: "必要書類が3点で手続きが簡単",
    description:
      "QuQuMoは請求書・通帳コピー・本人確認書類の3点のみで申し込み可能です。決算書が不要なため、書類準備の手間が少なく、スピーディーな手続きにつながっています。特に創業間もない企業や決算書の準備が難しい場合に有利です。",
  },
  {
    title: "完全オンライン完結で手軽",
    description:
      "QuQuMoはすべての手続きがオンラインで完結します。来店不要で、スマホからでも申し込み可能。移動時間やオフィスを離れる時間が不要なため、忙しい経営者にとって利便性が高いサービスです。",
  },
];

const ququmoWeaknesses = [
  {
    title: "手数料の上限が非公表で読みにくい",
    description:
      "QuQuMoは手数料の下限を1%と案内する一方、上限を公表していません。そのため売掛先の信用力が低い案件では、手数料がどこまで上がるか事前に読みにくい面があります。一方ビートレーディングは2社間で上限12%という目安が示されており、コストの見通しを立てやすいのが違いです。",
  },
  {
    title: "3社間ファクタリングに非対応",
    description:
      "QuQuMoは2社間ファクタリングのみの対応で、3社間には対応していません。手数料を最も安く抑えたい場合（3社間の2%〜9%）は、ビートレーディングが選択肢になります。",
  },
  {
    title: "対面での面談ができない",
    description:
      "QuQuMoはオンライン完結型のため、対面での面談ができません。初めてのファクタリングで直接相談したい場合や、複雑な案件で対面で話を聞きたい場合はビートレーディングが適しています。",
  },
];

const recommendationItems = [
  { scenario: "手数料をとにかく安くしたい", recommendation: "QuQuMo", reason: "手数料下限1%は業界最安水準" },
  { scenario: "3社間ファクタリングを利用したい", recommendation: "ビートレーディング", reason: "3社間（2%〜9%）に対応" },
  { scenario: "大手の安心感を重視する", recommendation: "ビートレーディング", reason: "累計9.1万社・1,824億円の実績" },
  { scenario: "書類準備を最小限にしたい", recommendation: "QuQuMo", reason: "3点の必要書類で手続き完了" },
  { scenario: "対面で相談したい", recommendation: "ビートレーディング", reason: "全国に拠点があり対面対応可能" },
  { scenario: "オンラインで完結させたい", recommendation: "どちらもOK", reason: "両社ともオンライン完結に対応" },
  { scenario: "大口案件（1,000万円以上）", recommendation: "ビートレーディング", reason: "大口の実績が豊富" },
  { scenario: "リピート利用で手数料を下げたい", recommendation: "ビートレーディング", reason: "リピート割引の適用例が多い" },
];

const faqs = [
  {
    question: "ビートレーディングとQuQuMoの手数料はどちらが安いですか？",
    answer:
      "一概には言えません。手数料のレンジはビートレーディングが2社間4%〜12%・3社間2%〜9%、QuQuMoが1%〜（上限は非公表）です。下限だけを見るとQuQuMoの1%は低く、売掛先の信用力が非常に高い場合はQuQuMoの方が安くなる可能性があります。ただしQuQuMoは上限を公表していないため、信用力が低い案件ではコストが読みにくい面があります。ビートレーディングは2社間4%〜12%・3社間2%〜9%とレンジが示されており、上限の見通しが立てやすいのが特徴です。正確な比較は両社から見積もりを取ることをおすすめします。",
  },
  {
    question: "初めてのファクタリングならどちらがおすすめですか？",
    answer:
      "初めてファクタリングを利用する場合は、ビートレーディングがおすすめです。累計9.1万社の実績と丁寧な対応が評価されており、対面での面談も可能です。担当者が仕組みを分かりやすく説明してくれるため、安心して利用を始められます。一方、ファクタリングの仕組みを理解していて手数料を重視する場合はQuQuMoが適しています。",
  },
  {
    question: "個人事業主はどちらを選べばいいですか？",
    answer:
      "どちらも個人事業主の利用に対応しています。書類準備の手軽さを重視するならQuQuMo（3点のみ）、サポートの手厚さを重視するならビートレーディング（対面相談可）がおすすめです。少額の売掛金の場合は、ペイトナーやラボルなど個人事業主特化型のサービスも選択肢に入ります。",
  },
  {
    question: "どちらも即日入金に対応していますか？",
    answer:
      "はい、どちらも最短2時間での入金に対応しています。ただし、初回利用時は審査に時間がかかる場合があり、翌営業日になるケースもあります。即日入金を確実にするためには、午前中の早い時間に申し込み、必要書類を事前にすべて準備しておくことが重要です。",
  },
  {
    question: "両社の併用は可能ですか？",
    answer:
      "異なる売掛債権であれば両社の併用は可能です。例えば、大口案件はビートレーディングに、少額でスピード重視の案件はQuQuMoに、と使い分けることで各社の強みを活かせます。ただし、同一の売掛債権を両社に売却する「二重譲渡」は違法行為ですので絶対に行わないでください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ビートレーディング vs QuQuMo比較｜大手 vs オンライン型どっち？",
  description:
    "ビートレーディングとQuQuMoを7項目で徹底比較。大手の信頼性vsオンライン型の手軽さ、どちらが最適か。",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: {
    "@type": "Person",
    name: "ファクタリングパートナー 編集部",
    url: "https://hyogo-shihoushoshi.jp/about/",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://hyogo-shihoushoshi.jp",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://hyogo-shihoushoshi.jp/articles/betrading-vs-ququmo/",
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
      item: "https://hyogo-shihoushoshi.jp/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "比較",
      item: "https://hyogo-shihoushoshi.jp/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ビートレーディング vs QuQuMo",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function BetradingVsQuqumoPage() {
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
          { label: "比較", href: "/articles/" },
          { label: "ビートレーディング vs QuQuMo" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            サービス比較
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ビートレーディング vs QuQuMo比較
            <br className="hidden md:block" />
            大手 vs オンライン型どっち？
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            累計9.1万社の大手ビートレーディングと手数料下限1%のオンライン型QuQuMo。手数料・入金速度・必要書類・審査方法・実績など7項目で徹底比較し、シーン別のおすすめを紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#comparison" className="hover:underline">1. ビートレーディング vs QuQuMo 比較表</a></li>
            <li><a href="#betrading-strengths" className="hover:underline">2. ビートレーディングの強み・弱み</a></li>
            <li><a href="#ququmo-strengths" className="hover:underline">3. QuQuMoの強み・弱み</a></li>
            <li><a href="#recommendation" className="hover:underline">4. シーン別おすすめ判定</a></li>
            <li><a href="#summary" className="hover:underline">5. 総合評価・結論</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ビートレーディング vs QuQuMo 比較表
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            業界最大手のビートレーディングとオンライン完結型のQuQuMoの主要スペックを一覧で比較します。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">ビートレーディング</th>
                  <th className="px-4 py-3 font-semibold">QuQuMo</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row, index) => (
                  <tr
                    key={row.item}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">{row.item}</td>
                    <td className="px-4 py-3 text-text-light">{row.betrading}</td>
                    <td className="px-4 py-3 text-text-light">{row.ququmo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg bg-primary-light p-4">
            <p className="text-sm leading-relaxed text-text-light">
              <strong className="text-primary">ポイント：</strong>ビートレーディングは大手の信頼性と3社間対応が強み。QuQuMoは手数料下限1%と書類の手軽さが強みです。
            </p>
          </div>
        </section>

        {/* ── ビートレーディングの強み・弱み ─── */}
        <section id="betrading-strengths" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ビートレーディングの強み・弱み
          </h2>
          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-sm">&#9675;</span>
              ビートレーディングの強み
            </h3>
            <div className="space-y-4">
              {betradingStrengths.map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <p className="mb-2 font-semibold text-secondary">{item.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-sm">&#9651;</span>
              ビートレーディングの弱み
            </h3>
            <div className="space-y-4">
              {betradingWeaknesses.map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <p className="mb-2 font-semibold text-accent">{item.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QuQuMoの強み・弱み ─── */}
        <section id="ququmo-strengths" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            QuQuMoの強み・弱み
          </h2>
          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-sm">&#9675;</span>
              QuQuMoの強み
            </h3>
            <div className="space-y-4">
              {ququmoStrengths.map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <p className="mb-2 font-semibold text-secondary">{item.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-sm">&#9651;</span>
              QuQuMoの弱み
            </h3>
            <div className="space-y-4">
              {ququmoWeaknesses.map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <p className="mb-2 font-semibold text-accent">{item.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── シーン別おすすめ ─── */}
        <section id="recommendation" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            シーン別おすすめ判定
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            利用シーンごとに、ビートレーディングとQuQuMoのどちらが適しているかを判定しました。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">シーン</th>
                  <th className="px-4 py-3 font-semibold">おすすめ</th>
                  <th className="px-4 py-3 font-semibold">理由</th>
                </tr>
              </thead>
              <tbody>
                {recommendationItems.map((row, index) => (
                  <tr key={index} className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}>
                    <td className="px-4 py-3 text-text-main font-medium">{row.scenario}</td>
                    <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">{row.recommendation}</td>
                    <td className="px-4 py-3 text-text-light">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── おすすめユーザー ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            サービス別おすすめユーザー
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <p className="mb-4 font-bold text-secondary">ビートレーディングがおすすめの人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>初めてファクタリングを利用する方</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>大手の信頼性・実績を重視する方</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>3社間ファクタリングで手数料を抑えたい方</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>対面で相談しながら進めたい方</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>1,000万円以上の大口案件の方</span></li>
              </ul>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <p className="mb-4 font-bold text-secondary">QuQuMoがおすすめの人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>手数料を最小限に抑えたい方</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>書類準備の手間を省きたい方</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>オンラインで手軽に完結させたい方</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>決算書がない創業間もない企業の方</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>コスト重視でリピート利用したい方</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            総合評価・結論
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ビートレーディングとQuQuMoは、それぞれ異なる強みを持つ優良なファクタリングサービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">ビートレーディング</strong>は、業界最大級の実績・3社間対応・対面相談が最大の強み。初めての利用や大口案件、手厚いサポートを求める方に最適です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">QuQuMo</strong>は、手数料下限1%・書類3点のシンプルさ・完全オンライン完結が強み。コストを最小限に抑えたい方や手軽さを重視する方に最適です。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">結論まとめ</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span><strong>信頼性・サポート・3社間重視なら</strong> → ビートレーディング</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span><strong>コスト・手軽さ・スピード重視なら</strong> → QuQuMo</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span><strong>迷ったら</strong> → 両社から無料見積もりを取って比較</span></li>
            </ul>
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

        {/* ── CTA ─── */}
      {/* ── 関連ツール・データ ─── */}
      <section className="mb-12">
        <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
          <p className="mb-3 font-bold text-primary">条件で会社を比較する</p>
          <ul className="space-y-2 text-sm text-text-light">
          <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
          <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
          <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
                    <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
          </ul>
        </div>
      </section>

        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            まずは無料見積もりで比較してみましょう
          </h2>
          <p className="mb-6 text-sm text-white/80">
            ビートレーディング・QuQuMoともに見積もりは無料。同じ売掛債権で両社から見積もりを取り、最適な条件を選びましょう。
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/reviews/betrading/" className="btn-cta inline-block">ビートレーディングの詳細</Link>
            <Link href="/reviews/ququmo/" className="btn-cta inline-block">QuQuMoの詳細</Link>
          </div>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/reviews/betrading/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">累計9.1万社の大手を徹底検証</p>
            </Link>
            <Link href="/reviews/ququmo/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">QuQuMoの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料1%〜のオンライン型を検証</p>
            </Link>
            <Link href="/articles/ququmo-vs-olta/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">QuQuMo vs OLTA比較</p>
              <p className="mt-1 text-sm text-text-light">オンラインファクタリングの比較</p>
            </Link>
            <Link href="/ranking/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">49社以上を徹底比較</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
