import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ビートレーディング vs PMG比較｜法人向け大口ファクタリング",
  description:
    "ビートレーディングとPMGを法人向け大口ファクタリングの観点で徹底比較。手数料・入金速度・買取上限・対応業種・実績など7項目で比較し、大口案件に最適なサービスを紹介します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/betrading-vs-pmg/",
  },
  openGraph: {
    title:
      "ビートレーディング vs PMG比較｜法人向け大口ファクタリング",
    description:
      "ビートレーディングとPMGを7項目で徹底比較。法人向け大口ファクタリングに最適なサービスを判定。",
    url: "https://hyogo-shihoushoshi.jp/articles/betrading-vs-pmg/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const comparisonItems = [
  { item: "手数料", betrading: "2社間：4%〜12% / 3社間：2%〜9%", pmg: "2社間：1%〜12.8% / 3社間：1%〜5%" },
  { item: "入金スピード", betrading: "最短2時間", pmg: "最短即日" },
  { item: "買取可能額", betrading: "制限なし（少額〜大口）", pmg: "制限なし（大口に強い）" },
  { item: "契約方式", betrading: "2社間・3社間", pmg: "2社間・3社間" },
  { item: "対象", betrading: "法人・個人事業主", pmg: "法人中心" },
  { item: "債権譲渡登記", betrading: "不要", pmg: "要確認" },
  { item: "対面対応", betrading: "対面・オンライン対応", pmg: "対面・出張対応可" },
  { item: "得意業種", betrading: "全業種幅広く対応", pmg: "建設・製造・運送・医療など" },
  { item: "累計実績", betrading: "累計9.1万社・買取額1,824億円", pmg: "累計取引社数多数（具体値非公開）" },
  { item: "運営会社", betrading: "株式会社ビートレーディング", pmg: "ピーエムジー株式会社" },
];

const betradingStrengths = [
  {
    title: "業界No.1の累計実績",
    description:
      "ビートレーディングは累計取引9.1万社以上、買取額1,824億円という業界最大級の実績を誇ります。あらゆる業種・規模の企業との取引経験があり、大口案件でも安定した対応が期待できます。実績に裏打ちされた審査ノウハウが強みです。",
  },
  {
    title: "少額から大口まで幅広い対応力",
    description:
      "ビートレーディングは数十万円の少額案件から数億円規模の大口案件まで、金額の制限なく対応しています。成長段階に応じて取引規模を拡大できるため、長期的な取引パートナーとして適しています。",
  },
  {
    title: "最短2時間のスピード入金",
    description:
      "ビートレーディングは最短2時間での入金に対応しています。PMGの「最短即日」と比較して、より具体的な時間目安が示されている点は大口案件の資金計画を立てる上で安心材料です。",
  },
  {
    title: "個人事業主にも対応",
    description:
      "ビートレーディングは法人だけでなく個人事業主にも対応しています。PMGは法人中心の対応であるため、個人事業主の方はビートレーディングが選択肢になります。",
  },
];

const betradingWeaknesses = [
  {
    title: "3社間の手数料がPMGより高め",
    description:
      "ビートレーディングの3社間手数料は2%〜9%で、PMGの1%〜5%と比較するとやや高めです。3社間ファクタリングで手数料を最小限に抑えたい場合は、PMGが有利です。",
  },
  {
    title: "大口特化というわけではない",
    description:
      "ビートレーディングは幅広い金額帯に対応していますが、大口案件に特化しているわけではありません。PMGのように法人向け大口に特化した専門的な対応力という面では、PMGに一日の長がある場合もあります。",
  },
];

const pmgStrengths = [
  {
    title: "3社間手数料1%〜5%は業界最安水準",
    description:
      "PMGの3社間ファクタリング手数料は1%〜5%で、業界最安水準です。大口の法人案件では3社間を利用することで手数料を大幅に抑えられるため、コスト面で大きな優位性があります。数千万円〜数億円の案件では、手数料の差額が数十万〜数百万円になることもあります。",
  },
  {
    title: "法人向け大口案件に強い",
    description:
      "PMGは法人向けの大口ファクタリングに特化しており、建設業・製造業・運送業・医療機関など大型の売掛金が発生する業種での取引実績が豊富です。大口案件特有のニーズや業界事情を理解した対応が期待できます。",
  },
  {
    title: "出張対応で全国をカバー",
    description:
      "PMGは対面での面談を重視しており、全国への出張対応も行っています。地方の大口法人でも、担当者が直接訪問して商談・契約を進めることが可能です。対面でのきめ細かい対応が必要な大口案件に適しています。",
  },
  {
    title: "乗り換え利用にも積極的",
    description:
      "PMGは他社からの乗り換え利用にも積極的に対応しています。現在のファクタリング会社の手数料が高い場合や、サービスに不満がある場合に、PMGへの乗り換えで条件が改善される可能性があります。",
  },
];

const pmgWeaknesses = [
  {
    title: "個人事業主への対応が限定的",
    description:
      "PMGは法人向けのサービスが中心であり、個人事業主への対応は限定的です。個人事業主の方は、ビートレーディングやペイトナー・ラボルなどのサービスを検討する必要があります。",
  },
  {
    title: "累計実績の具体的な公表が少ない",
    description:
      "PMGは取引実績を公表していますが、ビートレーディングの「9.1万社・1,824億円」ほど具体的な数値は公開されていません。実績の透明性という面ではビートレーディングに劣ります。",
  },
  {
    title: "入金スピードの具体的な時間が不明確",
    description:
      "PMGの入金は「最短即日」とされていますが、ビートレーディングの「最短2時間」のような具体的な時間目安は示されていません。大口案件では審査に時間がかかる場合もあります。",
  },
];

const recommendationItems = [
  { scenario: "3社間で手数料を最も安くしたい", recommendation: "PMG", reason: "3社間1%〜5%は業界最安水準" },
  { scenario: "業界最大手の安心感を求める", recommendation: "ビートレーディング", reason: "累計9.1万社・1,824億円の実績" },
  { scenario: "建設業・製造業の大口案件", recommendation: "PMG", reason: "大口業種特化の対応力" },
  { scenario: "少額〜中規模の案件", recommendation: "ビートレーディング", reason: "幅広い金額帯に対応" },
  { scenario: "個人事業主の利用", recommendation: "ビートレーディング", reason: "個人事業主にも対応" },
  { scenario: "最速入金を求める", recommendation: "ビートレーディング", reason: "最短2時間の明確な時間目安" },
  { scenario: "他社からの乗り換え", recommendation: "PMG", reason: "乗り換え利用に積極的" },
  { scenario: "地方の法人で出張対応が必要", recommendation: "PMG", reason: "全国出張対応可能" },
];

const faqs = [
  {
    question: "ビートレーディングとPMGの手数料はどちらが安いですか？",
    answer:
      "3社間ファクタリングではPMG（1%〜5%）がビートレーディング（2%〜9%）より安い傾向にあります。2社間ではPMG（1%〜12.8%）とビートレーディング（4%〜12%）でレンジが重なりますが、PMGの下限1%は業界最安水準です。ただし、実際の手数料は案件ごとに異なるため、両社から見積もりを取って比較することをおすすめします。",
  },
  {
    question: "5,000万円以上の大口案件はどちらが適していますか？",
    answer:
      "5,000万円以上の大口案件では、どちらも対応可能ですが、PMGが法人向け大口に特化している点が強みです。特に3社間ファクタリングで手数料を最小限に抑えたい場合はPMGが有利です。一方、ビートレーディングは累計1,824億円の買取実績があり、大口案件の取り扱い経験も豊富です。大口案件こそ相見積もりが重要です。",
  },
  {
    question: "建設業におすすめなのはどちらですか？",
    answer:
      "建設業はどちらも得意とする業種ですが、PMGは建設業の大口案件に特に強い印象があります。建設業では3社間ファクタリングが利用されることも多く、PMGの3社間手数料1%〜5%は大きなコストメリットになります。ビートレーディングも建設業の取引実績が豊富なため、両社から見積もりを取って条件を比較するのがベストです。",
  },
  {
    question: "個人事業主でもPMGを利用できますか？",
    answer:
      "PMGは法人向けのサービスが中心であり、個人事業主への対応は限定的です。個人事業主の方にはビートレーディング、またはペイトナー・ラボルなど個人事業主特化型のサービスをおすすめします。法人成りを検討している場合は、PMGに事前相談してみるのも一つの方法です。",
  },
  {
    question: "両社の併用は可能ですか？",
    answer:
      "異なる売掛債権であれば両社の併用は可能です。例えば、大口の建設案件はPMGに、それ以外の案件はビートレーディングに、と使い分けることで各社の強みを活かせます。ただし、同一の売掛債権を両社に売却する「二重譲渡」は違法行為ですので絶対に行わないでください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ビートレーディング vs PMG比較｜法人向け大口ファクタリング",
  description:
    "ビートレーディングとPMGを7項目で徹底比較。法人向け大口ファクタリングに最適なサービスを判定。",
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
      "https://hyogo-shihoushoshi.jp/articles/betrading-vs-pmg/",
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
      name: "ビートレーディング vs PMG",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function BetradingVsPmgPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "比較", href: "/articles/" }, { label: "ビートレーディング vs PMG" }]} />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">サービス比較</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ビートレーディング vs PMG比較
            <br className="hidden md:block" />
            法人向け大口ファクタリング
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            累計9.1万社の業界大手ビートレーディングと法人向け大口に強いPMG。手数料・入金速度・買取上限・得意業種など7項目で徹底比較し、大口案件に最適なサービスを紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#comparison" className="hover:underline">1. ビートレーディング vs PMG 比較表</a></li>
            <li><a href="#betrading-strengths" className="hover:underline">2. ビートレーディングの強み・弱み</a></li>
            <li><a href="#pmg-strengths" className="hover:underline">3. PMGの強み・弱み</a></li>
            <li><a href="#recommendation" className="hover:underline">4. シーン別おすすめ判定</a></li>
            <li><a href="#summary" className="hover:underline">5. 総合評価・結論</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ビートレーディング vs PMG 比較表</h2>
          <p className="mb-8 leading-relaxed text-text-light">法人向け大口ファクタリングの代表格である2社の主要スペックを比較します。</p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">ビートレーディング</th>
                  <th className="px-4 py-3 font-semibold">PMG</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row, index) => (
                  <tr key={row.item} className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}>
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">{row.item}</td>
                    <td className="px-4 py-3 text-text-light">{row.betrading}</td>
                    <td className="px-4 py-3 text-text-light">{row.pmg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg bg-primary-light p-4">
            <p className="text-sm leading-relaxed text-text-light">
              <strong className="text-primary">ポイント：</strong>ビートレーディングは業界最大の実績と幅広い対応力。PMGは3社間手数料1%〜5%の安さと法人大口特化が強みです。
            </p>
          </div>
        </section>

        {/* ── ビートレーディングの強み・弱み ─── */}
        <section id="betrading-strengths" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ビートレーディングの強み・弱み</h2>
          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-sm">&#9675;</span>ビートレーディングの強み
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
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-sm">&#9651;</span>ビートレーディングの弱み
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

        {/* ── PMGの強み・弱み ─── */}
        <section id="pmg-strengths" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">PMGの強み・弱み</h2>
          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-sm">&#9675;</span>PMGの強み
            </h3>
            <div className="space-y-4">
              {pmgStrengths.map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <p className="mb-2 font-semibold text-secondary">{item.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-sm">&#9651;</span>PMGの弱み
            </h3>
            <div className="space-y-4">
              {pmgWeaknesses.map((item, i) => (
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">シーン別おすすめ判定</h2>
          <p className="mb-8 leading-relaxed text-text-light">利用シーンごとに、どちらが適しているかを判定しました。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">サービス別おすすめユーザー</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <p className="mb-4 font-bold text-secondary">ビートレーディングがおすすめの人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>業界最大手の安心感を求める方</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>少額〜大口まで柔軟に利用したい方</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>最短2時間の入金を求める方</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>個人事業主の方</span></li>
              </ul>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <p className="mb-4 font-bold text-secondary">PMGがおすすめの人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>3社間で手数料を最小限に抑えたい方</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>建設・製造・運送業の大口案件の方</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>他社からの乗り換えを検討している方</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>出張対応での面談を希望する方</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">総合評価・結論</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">ビートレーディング</strong>は、業界最大の実績と幅広い対応力が強み。初めてのファクタリングから大口案件まで、あらゆるニーズに安定的に対応できる「オールラウンダー」です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">PMG</strong>は、3社間手数料1%〜5%と法人向け大口特化が強み。建設・製造・運送業などの大型案件で、手数料コストを最小限に抑えたい法人に最適な「スペシャリスト」です。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">結論まとめ</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span><strong>実績・安心感・幅広さ重視なら</strong> → ビートレーディング</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span><strong>大口・3社間・手数料最安重視なら</strong> → PMG</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span><strong>迷ったら</strong> → 両社から無料見積もりを取って比較</span></li>
            </ul>
          </div>
        </section>

        {/* ── 大口ファクタリングのポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大口ファクタリングで失敗しないためのポイント</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            1,000万円以上の大口ファクタリングでは、手数料の差額が数十万〜数百万円に達するため、慎重なサービス選びが重要です。以下のポイントを押さえましょう。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">必ず相見積もりを取る</p>
              <p className="text-sm leading-relaxed text-text-light">
                大口案件では手数料1%の差が数十万円のコスト差になります。ビートレーディングとPMGの両社から見積もりを取り、手数料だけでなく諸費用を含めた総コストで比較しましょう。見積もりは無料であり、契約を強制されることはありません。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">3社間ファクタリングの検討</p>
              <p className="text-sm leading-relaxed text-text-light">
                大口案件では3社間ファクタリングの手数料メリットが特に大きくなります。5,000万円の案件で2社間10%と3社間3%の差は350万円です。取引先の理解が得られる場合は、3社間を積極的に検討しましょう。特にPMGの3社間1%〜5%は非常に有利です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">契約条件の詳細確認</p>
              <p className="text-sm leading-relaxed text-text-light">
                大口案件では契約条件の細部が重要になります。手数料以外の費用（登記費用・事務手数料）、契約解除条件、違約金の有無、二重譲渡防止の取り決めなど、すべての条件を書面で確認してから契約しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">リピート利用での手数料交渉</p>
              <p className="text-sm leading-relaxed text-text-light">
                大口案件は定期的に発生することが多いため、リピート利用を前提とした手数料交渉が有効です。ビートレーディングもPMGも、リピート利用者に対して手数料を優遇する傾向があります。初回の条件で長期的なパートナーシップを評価してもらいましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">よくある質問</h2>
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
          </ul>
        </div>
      </section>

        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">まずは無料見積もりで比較してみましょう</h2>
          <p className="mb-6 text-sm text-white/80">大口案件こそ相見積もりが重要。両社の手数料を比較して最適な条件を選びましょう。</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/reviews/betrading/" className="btn-cta inline-block">ビートレーディングの詳細</Link>
            <Link href="/reviews/pmg/" className="btn-cta inline-block">PMGの詳細</Link>
          </div>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連ページ</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/reviews/betrading/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">累計9.1万社の大手を徹底検証</p>
            </Link>
            <Link href="/reviews/pmg/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">PMGの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">法人向け大口ファクタリングを検証</p>
            </Link>
            <Link href="/articles/large-amount/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">大口ファクタリングガイド</p>
              <p className="mt-1 text-sm text-text-light">1億円超の高額取引に対応する会社</p>
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
