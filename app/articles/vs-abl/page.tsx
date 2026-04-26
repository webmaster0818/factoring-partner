import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ABL（動産担保融資）vs ファクタリング｜違いと使い分けを解説",
  description:
    "ABL（動産担保融資）とファクタリングの違いを徹底比較。法的性質、コスト、審査基準、担保の扱い、メリット・デメリット、それぞれが向いているケースを詳しく解説。最適な資金調達手段の選び方がわかります。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/vs-abl/",
  },
  openGraph: {
    title: "ABL（動産担保融資）vs ファクタリング｜違いと使い分けを解説",
    description: "ABLとファクタリングの違いを比較。どちらが自社に適しているか判断できます。",
    url: "https://factoring-partner.pages.dev/articles/vs-abl/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const comparisonItems = [
  { label: "法的性質", abl: "融資（金銭消費貸借契約）", factoring: "債権の売買（譲渡契約）" },
  { label: "担保", abl: "売掛債権・在庫・設備が担保", factoring: "なし（売掛金の売却）" },
  { label: "返済義務", abl: "あり（元本+利息の返済）", factoring: "なし" },
  { label: "コスト", abl: "年利2%〜8%程度", factoring: "手数料2%〜20%（1回あたり）" },
  { label: "資金調達スピード", abl: "2週間〜1ヶ月", factoring: "最短即日〜数日" },
  { label: "信用情報への影響", abl: "あり（借入として記録）", factoring: "なし" },
  { label: "貸借対照表への影響", abl: "負債が増加", factoring: "負債に計上されない" },
  { label: "継続的な資金調達", abl: "枠内で繰り返し利用可", factoring: "都度契約が必要" },
  { label: "審査基準", abl: "担保物件の評価+企業の信用力", factoring: "売掛先の信用力" },
];

const ablMerits = [
  { title: "金利が低い", description: "年利2%〜8%と、ファクタリングの手数料（1回あたり2%〜20%）と比較して長期的なコストが安くなります。" },
  { title: "枠内で繰り返し利用可能", description: "融資枠が設定されれば、枠内で何度でも引き出しと返済を繰り返せます。恒常的な資金需要に適しています。" },
  { title: "担保の種類が多い", description: "売掛債権だけでなく、在庫、機械設備、車両なども担保にできるため、資金調達の選択肢が広がります。" },
];

const factoringMerits = [
  { title: "即日資金化が可能", description: "ABLの審査に2週間〜1ヶ月かかるのに対し、ファクタリングは最短即日で入金されます。急ぎの資金需要に最適です。" },
  { title: "負債にならない", description: "ファクタリングは借入ではないため、貸借対照表の負債に計上されません。財務バランスを維持したまま資金調達が可能です。" },
  { title: "審査が通りやすい", description: "ファクタリングは売掛先の信用力で審査されるため、自社の財務状況が悪くても利用しやすいです。赤字決算や税金滞納でも利用可能な場合があります。" },
];

const faqs = [
  {
    question: "ABL（動産担保融資）とは何ですか？",
    answer: "ABL（Asset Based Lending）は、企業が保有する売掛債権・在庫・機械設備などの動産を担保にして融資を受ける方法です。不動産担保融資と異なり、不動産を持たない企業でも利用でき、事業資産を活用した柔軟な資金調達が可能です。銀行やノンバンクが提供しています。",
  },
  {
    question: "ABLとファクタリングはどちらがお得ですか？",
    answer: "長期的・継続的な資金需要であればABLのほうがコストが安くなります。ABLの年利2%〜8%は、ファクタリングの手数料（1回あたり2%〜20%）と比較してかなり低いです。一方、短期的・単発の資金需要であればファクタリングのほうがスピーディーで手続きも簡単です。",
  },
  {
    question: "ABLとファクタリングを併用できますか？",
    answer: "同じ売掛債権をABLの担保にしつつファクタリングで売却することは、原則としてできません（二重譲渡に該当する可能性）。ただし、異なる売掛債権を使い分けることは可能です。例えば、大口の安定した売掛債権はABLの担保に、小口や急ぎの売掛債権はファクタリングに使うという使い分けができます。",
  },
  {
    question: "ABLの審査はどのくらい時間がかかりますか？",
    answer: "ABLの審査は通常2週間〜1ヶ月程度かかります。担保物件（売掛債権・在庫等）の評価、企業の財務状況の審査、動産譲渡登記の手続きなどが必要なためです。ファクタリング（最短即日〜数日）と比べると時間がかかりますが、融資枠が設定されれば枠内での引き出しは迅速に行えます。",
  },
  {
    question: "どちらが審査に通りやすいですか？",
    answer: "ファクタリングのほうが審査に通りやすいです。ファクタリングは売掛先の信用力が主な審査基準であるのに対し、ABLは担保物件の評価に加えて企業自身の信用力も審査されます。赤字決算、設立間もない企業、税金滞納がある場合は、ファクタリングのほうが利用しやすいでしょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ABL（動産担保融資）vs ファクタリング｜違いと使い分けを解説",
  description: "ABLとファクタリングの違いを比較。どちらが自社に適しているか判断できます。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/vs-abl/" },
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
    { "@type": "ListItem", position: 3, name: "ABL vs ファクタリング", item: "https://factoring-partner.pages.dev/articles/vs-abl/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function VsAblPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "ABL vs ファクタリング" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">比較ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ABL（動産担保融資）vs ファクタリング
            <br className="hidden md:block" />
            違いと使い分けを解説
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            売掛債権を活用した2つの資金調達方法を比較。コスト・スピード・審査基準の違いから最適な選択肢を見つけましょう。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#what-is-abl" className="hover:underline">1. ABL（動産担保融資）とは</a></li>
            <li><a href="#comparison" className="hover:underline">2. 比較表で見る違い</a></li>
            <li><a href="#abl-merits" className="hover:underline">3. ABLのメリット</a></li>
            <li><a href="#factoring-merits" className="hover:underline">4. ファクタリングのメリット</a></li>
            <li><a href="#which" className="hover:underline">5. どちらを選ぶべきか</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        <section id="what-is-abl" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ABL（動産担保融資）とは</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ABL（Asset Based Lending＝動産担保融資）は、企業が保有する動産（売掛債権、在庫、機械設備など）を担保にして融資を受ける資金調達方法です。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-3 font-bold text-primary">ABLの担保にできる資産</h3>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg bg-section-bg p-4">
                <p className="font-semibold text-text-main">売掛債権</p>
                <p className="mt-1 text-sm text-text-light">取引先への売掛金を担保に融資を受ける</p>
              </div>
              <div className="rounded-lg bg-section-bg p-4">
                <p className="font-semibold text-text-main">在庫</p>
                <p className="mt-1 text-sm text-text-light">商品・原材料・仕掛品を担保に融資を受ける</p>
              </div>
              <div className="rounded-lg bg-section-bg p-4">
                <p className="font-semibold text-text-main">機械設備</p>
                <p className="mt-1 text-sm text-text-light">工作機械・車両・工具を担保に融資を受ける</p>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-text-light">
            ファクタリングと同じく売掛債権を活用する点は共通していますが、ABLは「融資」であり、ファクタリングは「売掛債権の売却」であるという根本的な違いがあります。
          </p>
        </section>

        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">比較表で見る違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-left">ABL（動産担保融資）</th>
                  <th className="border border-primary p-3 text-left">ファクタリング</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, i) => (
                  <tr key={item.label} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}>
                    <td className="border border-border p-3 font-semibold">{item.label}</td>
                    <td className="border border-border p-3">{item.abl}</td>
                    <td className="border border-border p-3">{item.factoring}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="abl-merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ABLのメリット</h2>
          <div className="space-y-4">
            {ablMerits.map((item) => (
              <div key={item.title} className="rounded-lg border border-primary/30 bg-primary-light p-5">
                <h3 className="mb-2 font-bold text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="factoring-merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリングのメリット</h2>
          <div className="space-y-4">
            {factoringMerits.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
                <h3 className="mb-2 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="which" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">どちらを選ぶべきか</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-primary bg-primary-light p-6">
              <h3 className="mb-3 font-bold text-primary">ABLを選ぶべきケース</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>継続的に資金調達が必要</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>コストを長期的に抑えたい</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>在庫や設備も担保にしたい</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>審査に2週間〜1ヶ月の余裕がある</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>財務状況が比較的良好</span></li>
              </ul>
            </div>
            <div className="rounded-lg border border-secondary bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">ファクタリングを選ぶべきケース</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>今すぐ資金が必要（即日〜数日）</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>借入を増やしたくない</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>赤字決算・税金滞納がある</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>単発の資金需要</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>審査に時間をかけられない</span></li>
              </ul>
            </div>
          </div>
          <p className="mt-6 leading-relaxed text-text-light">
            最適な選択は企業の状況によって異なります。急ぎの資金需要にはファクタリング、長期的な資金調達にはABLが適しています。両者は併用も可能なため、異なる売掛債権を使い分けて最適な資金調達ポートフォリオを構築しましょう。
          </p>
        </section>

        {/* ── ABLの仕組み詳細 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ABLの仕組みを詳しく解説</h2>
          <p className="mb-6 leading-relaxed text-text-light">ABLの具体的な仕組みを理解し、ファクタリングとの違いを明確にしましょう。</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">担保物件の評価</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">金融機関が売掛債権、在庫、設備などの動産を評価し、担保として設定可能な価値を算定します。売掛債権の場合は取引先の信用力と回収可能性が評価されます。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">融資枠の設定</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">担保評価額の一定割合（通常60%〜80%）が融資枠として設定されます。例えば売掛債権1,000万円+在庫500万円の場合、融資枠は900万円〜1,200万円程度になります。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">動産譲渡登記</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">担保設定のために動産譲渡登記を行います。登記費用（数万円〜）がかかりますが、担保権の対抗要件を確保するために必要な手続きです。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">4</span>
              <div>
                <h3 className="font-bold text-text-main">モニタリング</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">ABLでは定期的に担保物件の状況をモニタリングします。売掛金の残高報告、在庫の棚卸報告などを金融機関に提出する必要があり、事務負担があります。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── コスト比較シミュレーション ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">コスト比較シミュレーション</h2>
          <p className="mb-6 leading-relaxed text-text-light">売掛金500万円を資金化した場合のABLとファクタリングのコスト比較です。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-right">ABL（年利5%・30日借入）</th>
                  <th className="border border-primary p-3 text-right">ファクタリング（手数料8%）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">調達額</td>
                  <td className="border border-border p-3 text-right">5,000,000円</td>
                  <td className="border border-border p-3 text-right">4,600,000円</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">コスト</td>
                  <td className="border border-border p-3 text-right">20,548円（利息）</td>
                  <td className="border border-border p-3 text-right">400,000円（手数料）</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">年間コスト（毎月利用の場合）</td>
                  <td className="border border-border p-3 text-right">246,575円</td>
                  <td className="border border-border p-3 text-right">4,800,000円</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">審査期間</td>
                  <td className="border border-border p-3 text-right">2週間〜1ヶ月（初回）</td>
                  <td className="border border-border p-3 text-right">即日〜数日</td>
                </tr>
                <tr className="bg-white font-semibold">
                  <td className="border border-border p-3">総合評価</td>
                  <td className="border border-border p-3 text-right">長期的に安い</td>
                  <td className="border border-border p-3 text-right">スピード重視</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            毎月継続的に利用する場合、ABLのコストはファクタリングの約20分の1です。一方、ファクタリングは初回でも即日対応可能なため、急ぎの資金需要ではファクタリングが適しています。
          </p>
        </section>

        {/* ── 使い分けの具体例 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ABLとファクタリングの使い分け具体例</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">パターン1：ABL＋ファクタリングの併用</h3>
              <p className="text-sm leading-relaxed text-text-light">安定した大口取引先の売掛債権はABLの担保として融資枠を設定し、急ぎの少額案件や新規取引先の売掛金はファクタリングで資金化。それぞれの強みを活かした最適な資金調達ポートフォリオを構築します。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">パターン2：ABL審査中のつなぎにファクタリング</h3>
              <p className="text-sm leading-relaxed text-text-light">ABLの審査に2週間〜1ヶ月かかるため、その間の急ぎの資金需要にはファクタリングで対応。ABLの融資枠が設定された後はABLをメインに切り替え、ファクタリングの利用を減らしてコストを削減します。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">パターン3：ABLが利用できない場合のファクタリング</h3>
              <p className="text-sm leading-relaxed text-text-light">設立間もない企業、赤字決算、税金滞納がある場合はABLの審査に通りにくいです。そのような場合はファクタリング（売掛先の信用力で審査）を活用し、経営改善後にABLへの切り替えを検討します。</p>
            </div>
          </div>
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

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/vs-bank-loan/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">vs 銀行融資</p>
              <p className="mt-1 text-sm text-text-light">メリット・デメリットを徹底比較</p>
            </Link>
            <Link href="/articles/vs-business-loan/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">vs ビジネスローン</p>
              <p className="mt-1 text-sm text-text-light">コストとスピードで比較</p>
            </Link>
            <Link href="/articles/debt-registration/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">債権譲渡登記</p>
              <p className="mt-1 text-sm text-text-light">登記の仕組みと費用を解説</p>
            </Link>
            <Link href="/articles/reverse/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">リバースファクタリング</p>
              <p className="mt-1 text-sm text-text-light">買掛金の早期支払いで取引先を支援</p>
            </Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">ファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">即日資金化が可能なファクタリング会社を手数料・入金速度で比較できます。</p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
