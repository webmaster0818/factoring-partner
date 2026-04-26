import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "支払いサイトとは？短縮方法とファクタリングの関係を解説",
  description:
    "支払いサイト（入金サイト）の基本を解説。支払いサイトが資金繰りに与える影響、短縮する方法、ファクタリングとの関係を分かりやすく紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/payment-site/",
  },
  openGraph: {
    title: "支払いサイトとは？短縮方法とファクタリングの関係を解説",
    description: "支払いサイトの基本と短縮方法。ファクタリングとの関係を解説。",
    url: "https://factoring-partner.pages.dev/articles/payment-site/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const siteExamples = [
  { pattern: "月末締め翌月末払い", days: "約30日", description: "最も一般的な支払い条件。当月の取引を月末で締め、翌月末に支払い。", common: "多くの業種" },
  { pattern: "月末締め翌々月末払い", days: "約60日", description: "大手企業に多い支払い条件。当月取引の入金が2ヶ月後。", common: "大手メーカー・広告代理店" },
  { pattern: "月末締め翌々々月末払い", days: "約90日", description: "入金サイトが非常に長い条件。建設業や出版業で見られる。", common: "建設業・出版業" },
  { pattern: "20日締め翌月末払い", days: "約40日", description: "月末締めではなく20日締めのパターン。", common: "小売・卸売業" },
  { pattern: "検収後60日払い", days: "60日＋検収期間", description: "検収完了後に起算されるため、実質的な入金サイトが長くなりがち。", common: "IT・システム開発" },
];

const shorteningMethods = [
  {
    title: "取引先との交渉で支払い条件を変更する",
    description: "最も直接的な方法は、取引先と支払い条件を交渉することです。例えば、翌々月末払い→翌月末払いに変更してもらうことで、入金サイトを30日短縮できます。ただし、取引先との力関係や業界慣行があるため、必ずしも交渉が成功するとは限りません。",
    difficulty: "中〜高",
    effect: "根本的な解決",
  },
  {
    title: "ファクタリングで売掛金を即日現金化する",
    description: "取引先との支払い条件を変えずに、入金サイトを実質的にゼロにする方法です。売掛金をファクタリング会社に売却することで、入金予定日を待たずに即日〜数日で現金を受け取れます。手数料はかかりますが、入金サイトの長さに関わらず即時に資金化できます。",
    difficulty: "低",
    effect: "即効性あり",
  },
  {
    title: "早期支払い割引（アーリーペイメントディスカウント）を提案する",
    description: "取引先に対して「早期に支払ってくれたら○%割引します」という条件を提案する方法です。例えば「30日以内に支払えば2%割引」など。取引先にもメリットがあるため、交渉が成立しやすい場合があります。",
    difficulty: "中",
    effect: "双方にメリット",
  },
  {
    title: "手形取引から振込払いに切り替える",
    description: "手形は振出日から支払期日まで60〜120日の期間があるため、入金サイトが非常に長くなります。手形取引を振込払いに切り替えることで、入金サイトを短縮できる場合があります。",
    difficulty: "中",
    effect: "大幅な短縮",
  },
  {
    title: "電子請求書で請求業務を迅速化する",
    description: "紙の請求書は郵送に数日かかり、締め日に間に合わないと翌月回しになることがあります。電子請求書を導入することで、請求業務を迅速化し、締め日に確実に間に合わせることが可能です。",
    difficulty: "低",
    effect: "数日〜1ヶ月短縮",
  },
];

const industryAverage = [
  { industry: "建設業", site: "60〜120日", description: "公共工事は特に長い。出来高払いの場合もあるが、最終入金は工事完了後。" },
  { industry: "製造業", site: "60〜90日", description: "大手メーカーの支払い条件は長め。下請け企業ほど不利な条件になりがち。" },
  { industry: "IT・システム開発", site: "30〜90日", description: "検収後の起算が多く、検収遅延で入金がさらに遅れるリスクあり。" },
  { industry: "広告・クリエイティブ", site: "60〜90日", description: "広告代理店経由の場合、支払いサイトが特に長い傾向。" },
  { industry: "物流・運送", site: "30〜60日", description: "大手荷主ほど支払いサイトが長い。燃料費・人件費の先行支出が課題。" },
  { industry: "医療・介護", site: "約60日", description: "診療報酬・介護報酬は国保連経由で約2ヶ月後の入金。" },
  { industry: "飲食業", site: "0〜30日", description: "現金売上が多いが、法人向けの宴会・ケータリングは入金サイトが発生。" },
  { industry: "小売・卸売", site: "30〜60日", description: "大手小売チェーンへの納品は支払いサイトが長い傾向。" },
];

const faqs = [
  {
    question: "支払いサイトとは何ですか？",
    answer:
      "支払いサイト（入金サイト）とは、商品・サービスの提供から代金が入金されるまでの期間のことです。例えば「月末締め翌月末払い」の場合、当月の取引の入金は翌月末になるため、支払いサイトは約30日です。この期間が長いほど資金繰りが厳しくなります。",
  },
  {
    question: "支払いサイトが長いとなぜ問題なのですか？",
    answer:
      "支払いサイトが長いと、売上は計上されているのに現金が手元にない期間が長くなります。その間も人件費・家賃・仕入れ費用などの支出は発生するため、手元資金が不足しやすくなります。最悪の場合、黒字倒産のリスクにつながります。",
  },
  {
    question: "ファクタリングで支払いサイトを短縮できますか？",
    answer:
      "はい、実質的に短縮できます。ファクタリングは売掛金をファクタリング会社に売却して即日〜数日で現金を受け取る方法です。取引先の支払い条件は変わりませんが、利用者は入金予定日を待たずに資金を確保できるため、実質的に支払いサイトがゼロになります。",
  },
  {
    question: "下請法で支払いサイトに制限はありますか？",
    answer:
      "はい、下請法では支払いサイトの上限が定められています。下請事業者に対する代金の支払いは、受領日から起算して60日以内に行わなければなりません。この規定に違反する場合は公正取引委員会に相談できます。ただし、すべての取引に下請法が適用されるわけではありません。",
  },
  {
    question: "支払いサイトの交渉はいつ行うのが良いですか？",
    answer:
      "新規取引開始時が最も交渉しやすいタイミングです。既存の取引先に対しては、契約更新時や取引量が増えたタイミングで交渉するのが効果的です。「取引量の増加に伴い資金繰りを安定させたい」という理由は相手も理解しやすいです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "支払いサイトとは？短縮方法とファクタリングの関係を解説",
  description: "支払いサイトの基本と短縮方法。ファクタリングとの関係を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/payment-site/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "支払いサイトとは", item: "https://factoring-partner.pages.dev/articles/payment-site/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function PaymentSitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "支払いサイトとは" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">知識ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            支払いサイトとは？
            <br className="hidden md:block" />
            短縮方法とファクタリングの関係を解説
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            支払いサイト（入金サイト）の基本から、業種別の平均、短縮する5つの方法、ファクタリングとの関係まで、資金繰りに直結する知識を分かりやすく解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basics" className="hover:underline">1. 支払いサイトの基本</a></li>
            <li><a href="#examples" className="hover:underline">2. 支払いパターンと日数</a></li>
            <li><a href="#industry" className="hover:underline">3. 業種別の支払いサイト</a></li>
            <li><a href="#shortening" className="hover:underline">4. 支払いサイトの短縮方法</a></li>
            <li><a href="#factoring" className="hover:underline">5. ファクタリングとの関係</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        <section id="basics" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">支払いサイトの基本</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            支払いサイト（Payment Site）とは、商品やサービスを提供してから代金が支払われるまでの期間のことです。「入金サイト」「回収サイト」とも呼ばれます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            企業間取引（BtoB）では、商品・サービスの提供と代金の支払いが同時ではなく、後払いが一般的です。この後払いの期間が支払いサイトであり、この期間が長いほど「売上はあるのに現金がない」状態が長く続きます。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <h3 className="mb-3 font-bold text-secondary">支払いサイトが資金繰りに与える影響</h3>
            <p className="text-sm leading-relaxed text-text-light">
              例えば月間売上1,000万円の会社で支払いサイトが60日の場合、常に約2,000万円の売掛金（未回収の代金）が存在することになります。この2,000万円は帳簿上は資産ですが、現金ではないため支払いには使えません。支払いサイトが30日短縮されれば、手元資金は約1,000万円改善されます。
            </p>
          </div>
        </section>

        <section id="examples" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">支払いパターンと日数</h2>
          <p className="mb-8 leading-relaxed text-text-light">代表的な支払いパターンとそれぞれの入金日数を確認しましょう。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-primary bg-section-bg">
                  <th className="p-3 text-left font-bold text-text-main">支払いパターン</th>
                  <th className="p-3 text-left font-bold text-text-main">日数</th>
                  <th className="p-3 text-left font-bold text-text-main">多い業種</th>
                </tr>
              </thead>
              <tbody>
                {siteExamples.map((ex) => (
                  <tr key={ex.pattern} className="border-b border-border">
                    <td className="p-3 font-medium text-text-main">{ex.pattern}</td>
                    <td className="p-3 text-primary">{ex.days}</td>
                    <td className="p-3 text-text-light">{ex.common}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="industry" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">業種別の支払いサイト</h2>
          <p className="mb-8 leading-relaxed text-text-light">業種によって支払いサイトの平均は大きく異なります。自社の業種の相場を把握しましょう。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {industryAverage.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-accent">{item.industry}</h3>
                  <span className="rounded bg-white px-2 py-0.5 text-sm font-bold text-primary">{item.site}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="shortening" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">支払いサイトの短縮方法</h2>
          <p className="mb-8 leading-relaxed text-text-light">支払いサイトを短縮する5つの方法を難易度と効果で紹介します。</p>
          <div className="space-y-6">
            {shorteningMethods.map((method, index) => (
              <div key={method.title} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">{method.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{method.description}</p>
                    <div className="mt-3 grid gap-2 md:grid-cols-2">
                      <div className="rounded-lg bg-section-bg p-3">
                        <p className="text-xs font-semibold text-text-light">難易度</p>
                        <p className="mt-1 text-sm font-bold text-accent">{method.difficulty}</p>
                      </div>
                      <div className="rounded-lg bg-teal-50 p-3">
                        <p className="text-xs font-semibold text-secondary">効果</p>
                        <p className="mt-1 text-sm font-bold text-secondary">{method.effect}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 支払いサイトの計算方法 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">支払いサイトの計算と資金繰りへの影響</h2>
          <p className="mb-4 leading-relaxed text-text-light">支払いサイトが資金繰りにどの程度影響するかを具体的に計算してみましょう。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-3 font-bold text-primary">計算例：月商1,000万円の会社</h3>
            <div className="overflow-x-auto">
              <table className="mt-3 w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-primary bg-section-bg">
                    <th className="p-3 text-left font-bold text-text-main">支払いサイト</th>
                    <th className="p-3 text-left font-bold text-text-main">常に未回収の売掛金</th>
                    <th className="p-3 text-left font-bold text-text-main">30日短縮した場合の改善額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-text-main">30日</td>
                    <td className="p-3 text-primary">約1,000万円</td>
                    <td className="p-3 text-secondary">-</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-text-main">60日</td>
                    <td className="p-3 text-primary">約2,000万円</td>
                    <td className="p-3 text-secondary">1,000万円の改善</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-text-main">90日</td>
                    <td className="p-3 text-primary">約3,000万円</td>
                    <td className="p-3 text-secondary">1,000万円の改善</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-text-main">120日</td>
                    <td className="p-3 text-primary">約4,000万円</td>
                    <td className="p-3 text-secondary">1,000万円の改善</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-text-light">
              支払いサイトが30日長くなるごとに、月商と同額の運転資金が追加で必要になります。月商1,000万円で支払いサイトが90日の場合、常に3,000万円が未回収の状態。これをファクタリングで30日分（1,000万円）現金化すれば、手元資金が1,000万円改善します。
            </p>
          </div>
        </section>

        {/* ── 下請法と支払いサイト ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">下請法と支払いサイトの関係</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            下請法（下請代金支払遅延等防止法）は、親事業者と下請事業者の取引を規制する法律です。支払いサイトに関する重要な規定があります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">支払い期日の制限（60日ルール）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                下請法では、親事業者は下請事業者からの納品日から起算して60日以内に代金を支払わなければなりません。60日を超える支払いサイトは下請法違反の可能性があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">下請法が適用される条件</h3>
              <p className="text-sm leading-relaxed text-text-light">
                親事業者の資本金が3億円超（または1千万円超〜3億円以下）で、下請事業者の資本金が3億円以下（または1千万円以下）の場合に適用されます。製造委託・修理委託・情報成果物作成委託・役務提供委託が対象です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">違反している場合の対応</h3>
              <p className="text-sm leading-relaxed text-text-light">
                取引先の支払いサイトが60日を超えている場合は、公正取引委員会や中小企業庁に相談できます。ただし、取引関係への影響を考慮し、まずは取引先との交渉を試みることをおすすめします。交渉と並行して、ファクタリングで資金繰りを安定させましょう。
              </p>
            </div>
          </div>
        </section>

        <section id="factoring" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリングとの関係</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングは支払いサイトの長さを「実質的に」解消する最も手軽な方法です。取引先との支払い条件を変更する交渉が不要で、即日〜数日で売掛金を現金化できます。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">ファクタリングなし</h3>
              <p className="text-sm text-text-light">支払いサイト60日の場合</p>
              <p className="mt-2 text-sm text-text-light">売上1,000万円 → 60日後に入金</p>
              <p className="mt-1 text-sm text-text-light">その間の支出は自己資金で賄う必要あり</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">ファクタリングあり</h3>
              <p className="text-sm text-text-light">ファクタリング手数料5%の場合</p>
              <p className="mt-2 text-sm text-text-light">売上1,000万円 → 即日950万円入金</p>
              <p className="mt-1 text-sm text-text-light">手数料50万円で支払いサイトが実質0日に</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-text-light">
            支払いサイトの短縮交渉とファクタリングを組み合わせることで、資金繰りの改善効果はさらに高まります。交渉で支払いサイトを短縮しつつ、残りの期間をファクタリングでカバーするのが理想的です。
          </p>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">&#9660;</span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-text-light">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>

        {/* ── まとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：支払いサイト改善の3つのアプローチ</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ol className="space-y-4 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</span>
                <div>
                  <strong className="text-text-main">短期的：ファクタリングで即座に入金サイトをゼロに</strong>
                  <p className="mt-1">取引先の支払い条件を変えずに、売掛金を即日現金化。急ぎの資金需要や突発的な資金ショートに即効性がある方法です。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</span>
                <div>
                  <strong className="text-text-main">中期的：取引先と支払い条件を交渉</strong>
                  <p className="mt-1">翌々月末払い→翌月末払いなど、支払いサイトの短縮を取引先と交渉。新規取引開始時や契約更新時がチャンス。根本的な改善につながります。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</span>
                <div>
                  <strong className="text-text-main">長期的：ビジネスモデルの見直し</strong>
                  <p className="mt-1">前払い制度の導入、サブスクリプション化、クレジットカード決済の導入など、ビジネスモデル自体を見直して入金サイトを構造的に短縮する方法です。</p>
                </div>
              </li>
            </ol>
          </div>
          <p className="mt-4 text-sm text-text-light">
            これら3つのアプローチを組み合わせることで、支払いサイトの問題を段階的に解消し、安定した資金繰りを実現できます。まずはファクタリングで急場をしのぎ、並行して交渉やビジネスモデルの見直しを進めるのが最適な戦略です。
          </p>
        </section>

        {/* ── おすすめのファクタリング会社 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">支払いサイトの長さを解消するおすすめファクタリング会社</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">ビートレーディング</h3>
              <p className="mt-1 text-sm text-text-light">最短2時間入金。手数料2%〜。入金サイトが60日以上の売掛金でも即日現金化。高額案件にも上限なし対応。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">QuQuMo（ククモ）</h3>
              <p className="mt-1 text-sm text-text-light">手数料1%〜の低コスト。最短2時間入金。入金サイトの長い売掛金を低手数料で現金化。オンライン完結。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">アクセルファクター</h3>
              <p className="mt-1 text-sm text-text-light">審査通過率93%以上。手数料2%〜。即日入金対応。赤字決算でも柔軟対応。支払いサイトに悩む中小企業に最適。</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/prevent-bankruptcy/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">黒字倒産の防ぎ方</p>
              <p className="mt-1 text-sm text-text-light">ファクタリングで資金繰り改善</p>
            </Link>
            <Link href="/articles/cashflow-tips/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">資金繰り改善のコツ</p>
              <p className="mt-1 text-sm text-text-light">中小企業のキャッシュフロー管理</p>
            </Link>
            <Link href="/articles/beginners-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">初めてのファクタリング完全ガイド</p>
              <p className="mt-1 text-sm text-text-light">仕組みから選び方まで</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリング手数料ガイド</p>
              <p className="mt-1 text-sm text-text-light">相場と安くする方法</p>
            </Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">支払いサイトの長さをファクタリングで解消する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            入金サイトの長い売掛金を即日現金化。手数料・入金スピードでファクタリング会社を比較し、あなたに最適なサービスを見つけましょう。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
