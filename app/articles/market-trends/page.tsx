import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリング市場規模と2026年の最新動向｜今後の展望",
  description:
    "ファクタリングの市場規模と2026年の最新動向を解説。国内市場の成長要因、世界市場との比較、AI審査・オンライン化などの最新トレンド、法整備の動き、今後の市場展望を詳しく紹介します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/market-trends/",
  },
  openGraph: {
    title:
      "ファクタリング市場規模と2026年の最新動向｜今後の展望",
    description:
      "ファクタリング市場の最新動向と今後の展望を解説。",
    url: "https://factoring-partner.pages.dev/articles/market-trends/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const marketData = [
  { year: "2020年", domestic: "約5兆円", global: "約340兆円", note: "コロナ禍で需要増加" },
  { year: "2021年", domestic: "約5.5兆円", global: "約380兆円", note: "経済回復期" },
  { year: "2022年", domestic: "約6兆円", global: "約420兆円", note: "オンライン化が加速" },
  { year: "2023年", domestic: "約6.5兆円", global: "約460兆円", note: "AI審査の普及" },
  { year: "2024年", domestic: "約7兆円", global: "約500兆円", note: "法整備の議論が活発化" },
  { year: "2025年（推定）", domestic: "約7.5兆円", global: "約540兆円", note: "中小企業の利用拡大" },
  { year: "2026年（予測）", domestic: "約8兆円", global: "約580兆円", note: "手形廃止の影響" },
];

const growthFactors = [
  {
    title: "中小企業の資金調達ニーズの増加",
    description:
      "銀行融資の審査基準が厳格化する中、中小企業やスタートアップの間でファクタリングの認知度と利用率が急速に高まっています。特にコロナ禍以降、急な資金需要に対応できるファクタリングの価値が再認識されました。",
  },
  {
    title: "テクノロジーの進化（AI審査・オンライン化）",
    description:
      "AI（人工知能）を活用した審査システムの導入により、審査時間が大幅に短縮され、手数料も低下傾向にあります。オンライン完結型のサービスが増え、地方の企業やフリーランスも気軽に利用できるようになりました。",
  },
  {
    title: "手形取引の縮小・廃止",
    description:
      "経済産業省が2026年を目途に約束手形の利用廃止を推進しており、手形割引に代わる資金化手段としてファクタリングの需要が拡大しています。手形からの移行により、ファクタリング市場はさらなる成長が見込まれます。",
  },
  {
    title: "フリーランス・副業人口の増加",
    description:
      "働き方の多様化により、フリーランスや副業で事業を行う個人が増加しています。これらの個人事業主は銀行融資のハードルが高く、ファクタリングが重要な資金調達手段として活用されています。",
  },
  {
    title: "法整備・規制の動き",
    description:
      "悪質業者の排除に向けた法整備の議論が進んでおり、業界の健全化が期待されています。登録制度の導入や手数料の上限規制などが検討されており、制度が整備されればさらに安心して利用できる環境が整います。",
  },
];

const trends2026 = [
  {
    title: "AI審査の高度化と手数料の低下",
    description:
      "2026年のファクタリング業界で最も注目されるトレンドは、AI審査の高度化です。機械学習や自然言語処理を活用した審査システムにより、売掛先の信用力をより正確に評価できるようになっています。審査精度の向上は手数料の低下につながり、利用者にとってのコスト負担が軽減されています。",
    impact: "手数料率の平均が1〜2%低下する見込み",
  },
  {
    title: "クラウドファクタリングプラットフォームの台頭",
    description:
      "会計ソフト（freee、マネーフォワードなど）やECプラットフォームとAPIで連携し、売掛金のデータを自動連携してファクタリングの申し込みを簡素化するサービスが増えています。請求書を発行するだけでファクタリングの提案を受けられるような、シームレスな資金調達体験が実現しつつあります。",
    impact: "申し込みから入金までの時間がさらに短縮",
  },
  {
    title: "サプライチェーンファイナンスとの融合",
    description:
      "大企業のサプライチェーン全体の資金効率を最適化するサプライチェーンファイナンス（SCF）とファクタリングの融合が進んでいます。大企業が主導してファクタリングプログラムを導入し、下請け企業が低コストで売掛金を早期現金化できる仕組みが広がっています。",
    impact: "下請け企業の資金繰り改善と手数料の低減",
  },
  {
    title: "法規制の整備に向けた動き",
    description:
      "金融庁を中心に、ファクタリング業界の法規制に関する議論が活発化しています。悪質業者の排除を目的とした登録制度の導入、手数料の開示義務、利用者保護のための規制などが検討されています。法整備が進めば、業界の信頼性が向上し、市場のさらなる拡大が期待されます。",
    impact: "業界の信頼性向上と新規参入企業の増加",
  },
  {
    title: "ESG・サステナビリティ連動型ファクタリング",
    description:
      "環境・社会・ガバナンス（ESG）の取り組みに連動したファクタリングが注目されています。サプライチェーンにおけるESG評価が高い企業に対して手数料を優遇する「グリーンファクタリング」や「サステナブルSCF」といった商品が登場し始めています。",
    impact: "ESG対応企業に対する手数料優遇",
  },
];

const faqs = [
  {
    question: "日本のファクタリング市場規模はどのくらいですか？",
    answer:
      "日本のファクタリング市場は2025年時点で約7.5兆円規模と推定されています。世界市場の約540兆円と比較するとまだ小さいですが、年率7〜10%程度で成長しており、2026年には約8兆円に達すると予測されています。特に中小企業やフリーランスの利用拡大が成長を牽引しています。",
  },
  {
    question: "ファクタリング市場は今後も成長しますか？",
    answer:
      "はい、ファクタリング市場は今後も成長が見込まれます。手形取引の廃止、フリーランス人口の増加、AI審査による手数料の低下、法整備による業界の健全化など、複数の成長要因が重なっています。特にオンライン完結型のサービスが普及することで、これまでファクタリングを知らなかった層への浸透が進むと予想されます。",
  },
  {
    question: "ファクタリング業界に法規制はできますか？",
    answer:
      "現在、ファクタリング業界の法規制について議論が進んでいます。悪質業者の排除を目的とした登録制度の導入や、手数料の開示義務などが検討されています。ただし、法規制が導入されるタイミングは未定です。法整備が実現すれば、利用者にとってより安全な環境が整い、市場の信頼性が向上すると期待されています。",
  },
  {
    question: "海外と比較して日本のファクタリング市場はどうですか？",
    answer:
      "日本のファクタリング市場は世界市場の約1.4%程度にとどまっており、欧州や中国と比較すると規模は小さいです。欧州（特にイギリス、フランス、イタリア）は世界市場の約65%を占めており、中国は約15%のシェアを持っています。日本は手形文化や銀行融資への依存が高かった背景がありますが、今後は海外との差が縮まると予想されます。",
  },
  {
    question: "AI審査が普及すると手数料はどのくらい下がりますか？",
    answer:
      "AI審査の普及により、手数料は全体的に1〜3%程度低下すると予測されています。人件費や審査コストの削減が手数料に反映されるためです。特にオンライン完結型のサービスでは、AI審査により2社間ファクタリングでも5%〜10%程度の手数料で利用できるケースが増えています。ただし、手数料は売掛先の信用力や売掛金の条件によって変動するため、一律に下がるわけではありません。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファクタリング市場規模と2026年の最新動向｜今後の展望",
  description:
    "ファクタリング市場の最新動向と今後の展望を解説。",
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
    "@id":
      "https://factoring-partner.pages.dev/articles/market-trends/",
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
      name: "コラム",
      item: "https://factoring-partner.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "市場規模と最新動向",
      item: "https://factoring-partner.pages.dev/articles/market-trends/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function MarketTrendsPage() {
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
          { label: "コラム", href: "/articles/" },
          { label: "市場規模と最新動向" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            業界分析
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング市場規模と2026年の最新動向
            <br className="hidden md:block" />
            今後の展望
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            日本と世界のファクタリング市場の現状、2026年の最新トレンド、AI審査やオンライン化の影響、法整備の動向、今後の市場展望を詳しく解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#market-size" className="hover:underline">
                1. ファクタリング市場の規模
              </a>
            </li>
            <li>
              <a href="#growth-factors" className="hover:underline">
                2. 市場拡大の5つの要因
              </a>
            </li>
            <li>
              <a href="#trends-2026" className="hover:underline">
                3. 2026年の最新トレンド5選
              </a>
            </li>
            <li>
              <a href="#global" className="hover:underline">
                4. 世界市場との比較
              </a>
            </li>
            <li>
              <a href="#outlook" className="hover:underline">
                5. 今後の市場展望
              </a>
            </li>
            <li>
              <a href="#for-users" className="hover:underline">
                6. 利用者にとっての影響
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 市場規模 ─── */}
        <section id="market-size" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング市場の規模
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            日本のファクタリング市場は年々拡大を続けており、2025年時点で約7.5兆円、2026年には約8兆円に達すると予測されています。世界全体では約580兆円規模の市場となっており、日本市場はまだ成長の余地が大きいといえます。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            特にコロナ禍以降、中小企業の資金調達手段としてファクタリングの認知度が急速に向上し、利用企業数も増加傾向にあります。オンライン完結型サービスの登場により、これまでファクタリングを知らなかった層にも浸透が進んでいます。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">年</th>
                  <th className="px-4 py-3 font-semibold">国内市場</th>
                  <th className="px-4 py-3 font-semibold">世界市場</th>
                  <th className="px-4 py-3 font-semibold">トピック</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((data) => (
                  <tr key={data.year} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                      {data.year}
                    </td>
                    <td className="px-4 py-3">{data.domestic}</td>
                    <td className="px-4 py-3">{data.global}</td>
                    <td className="px-4 py-3 text-text-light">{data.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※ 上記の数値は各種業界レポートおよび公開情報を基にした推計値です。実際の市場規模は調査機関によって異なる場合があります。
          </p>
        </section>

        {/* ── 成長要因 ─── */}
        <section id="growth-factors" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            市場拡大の5つの要因
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリング市場が拡大を続けている背景には、以下の5つの要因があります。
          </p>
          <div className="space-y-4">
            {growthFactors.map((factor, index) => (
              <div
                key={factor.title}
                className="rounded-lg border border-border bg-white p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-text-main">{factor.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {factor.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2026年トレンド ─── */}
        <section id="trends-2026" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            2026年の最新トレンド5選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            2026年のファクタリング業界で注目される5つの最新トレンドを紹介します。
          </p>
          <div className="space-y-6">
            {trends2026.map((trend, index) => (
              <div
                key={trend.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {trend.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {trend.description}
                    </p>
                    <div className="mt-3 rounded-lg border border-secondary/30 bg-teal-50 p-3">
                      <p className="text-sm text-text-light">
                        <strong className="text-secondary">期待される影響：</strong>{trend.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 世界市場比較 ─── */}
        <section id="global" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            世界市場との比較
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            日本のファクタリング市場は世界市場の約1.4%にとどまっており、欧州や中国と比較すると規模が小さいのが現状です。各地域のシェアと特徴を確認しましょう。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">地域</th>
                  <th className="px-4 py-3 font-semibold">市場シェア</th>
                  <th className="px-4 py-3 font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">欧州</td>
                  <td className="px-4 py-3">約65%</td>
                  <td className="px-4 py-3">英・仏・伊を中心に最も成熟した市場。法整備も進んでいる</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">中国</td>
                  <td className="px-4 py-3">約15%</td>
                  <td className="px-4 py-3">急速に成長中。フィンテック企業が牽引</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">北米</td>
                  <td className="px-4 py-3">約8%</td>
                  <td className="px-4 py-3">ABL（アセット・ベースト・レンディング）との併用が多い</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">アジア太平洋（日本含む）</td>
                  <td className="px-4 py-3">約10%</td>
                  <td className="px-4 py-3">成長率が最も高い。日本は域内で存在感を増している</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">その他</td>
                  <td className="px-4 py-3">約2%</td>
                  <td className="px-4 py-3">中東・アフリカ・南米。今後の成長が期待される</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg bg-primary-light p-4">
            <p className="mb-1 font-bold text-primary">日本市場の成長ポテンシャル</p>
            <p className="text-sm leading-relaxed text-text-light">
              日本のGDPは世界第4位ですが、ファクタリング市場のシェアは約1.4%にとどまっています。欧州のように市場が成熟すれば、数倍の成長余地があると考えられます。手形廃止やフリーランスの増加が日本市場の拡大を後押ししています。
            </p>
          </div>
        </section>

        {/* ── 今後の展望 ─── */}
        <section id="outlook" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            今後の市場展望
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリング市場は今後も安定的な成長が予想されます。2030年には国内市場が10兆円を超えるとの予測もあり、中小企業の資金調達インフラとしての地位が確立されつつあります。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特に注目すべきは、テクノロジーの進化による手数料の低下と利便性の向上です。AI審査の精度が上がれば、これまで手数料が高かった小口取引や新規利用者向けの手数料も下がる可能性があります。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            また、法整備が進むことで悪質業者が排除され、業界全体の信頼性が向上すると期待されています。現在は「ファクタリング＝怪しい」というイメージを持つ事業者もいますが、法規制の整備により安心して利用できる環境が整うでしょう。
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-primary/30 bg-blue-50 p-5 text-center">
              <p className="text-3xl font-bold text-primary">8兆円</p>
              <p className="mt-2 text-sm text-text-light">2026年国内市場予測</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5 text-center">
              <p className="text-3xl font-bold text-secondary">10兆円+</p>
              <p className="mt-2 text-sm text-text-light">2030年国内市場予測</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5 text-center">
              <p className="text-3xl font-bold text-accent">7-10%</p>
              <p className="mt-2 text-sm text-text-light">年間成長率（予測）</p>
            </div>
          </div>
        </section>

        {/* ── 利用者への影響 ─── */}
        <section id="for-users" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            利用者にとっての影響
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ファクタリング市場の成長は、利用者にとってさまざまなメリットをもたらします。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">手数料の低下</h3>
              <p className="text-sm leading-relaxed text-text-light">
                競争の激化とAI審査の普及により、手数料は全体的に低下傾向にあります。特にオンライン完結型のサービスでは、2社間でも5%以下の手数料で利用できるケースが出てきています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">サービスの多様化</h3>
              <p className="text-sm leading-relaxed text-text-light">
                業界・業種に特化したファクタリングサービスや、少額対応、個人事業主向けサービスなど、ニーズに合わせた多様なサービスが登場しています。選択肢が増えることで、最適なサービスを見つけやすくなります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">利便性の向上</h3>
              <p className="text-sm leading-relaxed text-text-light">
                スマートフォンからの申し込み、AIによる即時審査、電子契約など、利便性が大幅に向上しています。24時間365日申し込みが可能なサービスも増え、土日でも利用できるようになっています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">安全性の向上</h3>
              <p className="text-sm leading-relaxed text-text-light">
                法規制の議論が進むことで、悪質業者の排除が期待されます。大手企業の参入も増えており、業界全体の信頼性が向上しています。利用者が安心してサービスを選べる環境が整いつつあります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 業界の課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング業界の課題
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            成長を続けるファクタリング市場ですが、解決すべき課題も残されています。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">悪質業者の存在</h3>
              <p className="text-sm leading-relaxed text-text-light">
                登録制度がないため、ファクタリングを装った闇金融業者が依然として存在します。給与ファクタリングやツケ払い現金化など、新たな手口も登場しており、利用者の注意が必要です。業界団体や金融庁による規制強化が求められています。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">手数料の透明性</h3>
              <p className="text-sm leading-relaxed text-text-light">
                手数料の表示方法が統一されておらず、事務手数料や登記費用を別途請求する会社もあります。総コストの開示義務がないため、利用者が正確なコスト比較をすることが難しい状況です。手数料の表示基準の統一が課題となっています。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">認知度と偏見</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの認知度は向上しつつあるものの、「怪しい」「危険」というイメージを持つ事業者もまだ多いです。悪質業者のニュースが報道されるたびにイメージが悪化する面もあり、正しい情報発信と業界の健全化が重要です。
              </p>
            </div>
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
              href="/articles/what-is-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングとは？</p>
              <p className="mt-1 text-sm text-text-light">
                仕組み・種類・メリット・デメリットを解説
              </p>
            </Link>
            <Link
              href="/articles/online-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">オンライン完結型ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                来店不要で利用できるサービスを紹介
              </p>
            </Link>
            <Link
              href="/articles/easy-screening/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">審査が甘いファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                審査に通りやすい会社の特徴と選び方
              </p>
            </Link>
            <Link
              href="/articles/is-it-legal/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングは合法？</p>
              <p className="mt-1 text-sm text-text-light">
                法的根拠と違法業者の見分け方を解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            成長市場で最適なファクタリング会社を選びましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            市場の拡大とともにサービスの選択肢も増えています。あなたに最適なファクタリング会社を見つけましょう。15社を手数料・入金速度・審査通過率で徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
