import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリングと信用保証協会の関係｜併用は可能？",
  description:
    "ファクタリングと信用保証協会の関係を解説。保証付き融資とファクタリングの併用可否、それぞれのメリット・デメリット、使い分けのポイントを紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/credit-guarantee/",
  },
  openGraph: {
    title: "ファクタリングと信用保証協会の関係｜併用は可能？",
    description: "信用保証協会の保証付き融資とファクタリングの併用について解説。",
    url: "https://factoring-partner.pages.dev/articles/credit-guarantee/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const comparisonItems = [
  { item: "資金調達の仕組み", guarantee: "銀行融資＋信用保証協会の保証", factoring: "売掛金の売却（債権譲渡）" },
  { item: "審査期間", guarantee: "2週間〜1ヶ月程度", factoring: "即日〜数日" },
  { item: "コスト", guarantee: "年利1%〜3%＋保証料0.5%〜2%", factoring: "手数料1%〜18%（1回あたり）" },
  { item: "担保・保証人", guarantee: "原則不要（協会が保証）", factoring: "不要" },
  { item: "負債への影響", guarantee: "借入金として負債に計上", factoring: "負債にならない" },
  { item: "信用情報への影響", guarantee: "記録される", factoring: "記録されない" },
  { item: "利用可能額", guarantee: "保証枠による（最大8,000万円〜）", factoring: "売掛金額による（上限なしの会社も）" },
];

const combinationMethods = [
  {
    title: "短期資金はファクタリング、長期資金は保証付き融資",
    description: "急ぎの資金需要にはファクタリングで即日対応し、設備投資や長期運転資金には保証付き融資を活用する使い分けが最も効果的です。ファクタリングは短期のつなぎ資金、融資は中長期の安定資金として位置づけましょう。",
  },
  {
    title: "融資審査中のつなぎにファクタリングを活用",
    description: "信用保証協会の保証付き融資は審査に2週間〜1ヶ月かかります。融資実行までの間の資金繰りをファクタリングでカバーし、融資が実行されたらファクタリングの利用を終了する方法です。",
  },
  {
    title: "融資枠を温存しながらファクタリングで資金調達",
    description: "銀行融資の枠を緊急時のために温存し、通常の資金繰りにはファクタリングを活用する方法です。融資枠を使い切らないことで、いざという時の資金調達手段を確保できます。",
  },
];

const faqs = [
  {
    question: "ファクタリングと信用保証協会の保証付き融資は併用できますか？",
    answer:
      "はい、併用可能です。ファクタリングは売掛金の売却であり、借入れではないため、信用保証協会の保証枠や融資枠に影響しません。保証付き融資で長期の資金を確保しながら、短期の資金繰りにファクタリングを活用するのは効果的な戦略です。",
  },
  {
    question: "ファクタリングの利用が保証付き融資の審査に影響しますか？",
    answer:
      "基本的に影響しません。ファクタリングは借入れではなく、信用情報機関にも記録されないため、保証付き融資の審査に直接的な影響はありません。ただし、決算書上の「売上債権売却損」が多額の場合、財務状態について質問される可能性はあります。",
  },
  {
    question: "信用保証協会とは何ですか？",
    answer:
      "信用保証協会は、中小企業や小規模事業者が銀行融資を受ける際に保証人の役割を担う公的機関です。全国に52の協会があり、各都道府県に設置されています。企業が融資を返済できない場合、信用保証協会が銀行に代わりに返済します（代位弁済）。",
  },
  {
    question: "信用保証協会の保証付き融資とファクタリング、どちらが有利ですか？",
    answer:
      "長期的なコストでは保証付き融資の方が低コストです（年利1〜3%＋保証料）。しかし審査に時間がかかるため、急ぎの資金には対応できません。即日〜数日で資金が必要な場合はファクタリングが有利です。両者は競合するものではなく、用途に応じて使い分けるのが最善です。",
  },
  {
    question: "ファクタリングを利用すると信用保証協会の保証枠は減りますか？",
    answer:
      "いいえ、減りません。ファクタリングは借入れではないため、信用保証協会の保証枠（一般保証枠8,000万円、セーフティネット保証枠は別枠）に影響しません。保証枠を温存したまま、ファクタリングで別途資金調達できるのがメリットです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリングと信用保証協会の関係｜併用は可能？",
  description: "信用保証協会の保証付き融資とファクタリングの併用について解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/credit-guarantee/" },
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
    { "@type": "ListItem", position: 3, name: "ファクタリングと信用保証協会", item: "https://factoring-partner.pages.dev/articles/credit-guarantee/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function CreditGuaranteePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "ファクタリングと信用保証協会" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">知識ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングと信用保証協会の関係
            <br className="hidden md:block" />
            併用は可能？
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            信用保証協会の保証付き融資とファクタリングは併用できるのか。それぞれの特徴と使い分けのポイントを分かりやすく解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#overview" className="hover:underline">1. 信用保証協会とファクタリングの基本</a></li>
            <li><a href="#comparison" className="hover:underline">2. 比較表で違いを確認</a></li>
            <li><a href="#combination" className="hover:underline">3. 併用の方法と効果的な使い分け</a></li>
            <li><a href="#tips" className="hover:underline">4. 利用時の注意点</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        <section id="overview" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">信用保証協会とファクタリングの基本</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            信用保証協会の保証付き融資とファクタリングは、どちらも中小企業の資金調達手段ですが、仕組みが根本的に異なります。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">信用保証協会の保証付き融資</h3>
              <p className="text-sm leading-relaxed text-text-light">
                銀行から融資を受ける際に、信用保証協会が保証人の役割を担う制度です。中小企業にとって銀行融資のハードルを下げる効果があります。審査に時間がかかりますが、金利・保証料は低コストです。
              </p>
            </div>
            <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
              <h3 className="mb-3 font-bold text-primary">ファクタリング</h3>
              <p className="text-sm leading-relaxed text-text-light">
                売掛金をファクタリング会社に売却して早期に現金化する方法です。借入れではないため負債が増えず、即日〜数日で資金調達が可能です。手数料は融資より高めですがスピードに優れます。
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <h3 className="mb-3 font-bold text-secondary">結論：併用は可能</h3>
            <p className="text-sm leading-relaxed text-text-light">
              ファクタリングは借入れではないため、信用保証協会の保証枠や銀行の融資枠に影響しません。保証付き融資とファクタリングは併用可能であり、用途に応じて使い分けることで資金繰りの安定性が大幅に向上します。
            </p>
          </div>
        </section>

        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">比較表で違いを確認</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-primary bg-section-bg">
                  <th className="p-3 text-left font-bold text-text-main">比較項目</th>
                  <th className="p-3 text-left font-bold text-secondary">保証付き融資</th>
                  <th className="p-3 text-left font-bold text-primary">ファクタリング</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row) => (
                  <tr key={row.item} className="border-b border-border">
                    <td className="p-3 font-medium text-text-main">{row.item}</td>
                    <td className="p-3 text-text-light">{row.guarantee}</td>
                    <td className="p-3 text-text-light">{row.factoring}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="combination" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">併用の方法と効果的な使い分け</h2>
          <p className="mb-8 leading-relaxed text-text-light">保証付き融資とファクタリングを効果的に併用する3つの方法を紹介します。</p>
          <div className="space-y-6">
            {combinationMethods.map((method) => (
              <div key={method.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 text-lg font-bold text-primary">{method.title}</h3>
                <p className="leading-relaxed text-text-light">{method.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 信用保証協会の基本情報 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">信用保証協会の保証制度の基本</h2>
          <p className="mb-8 leading-relaxed text-text-light">信用保証協会の制度を正しく理解した上で、ファクタリングとの併用を検討しましょう。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">一般保証枠</h3>
              <p className="text-sm leading-relaxed text-text-light">
                一般保証の限度額は、普通保証（長期）2億円＋無担保保証8,000万円の合計2億8,000万円です。この枠内で保証付き融資を受けることができます。ファクタリングはこの枠に一切影響しません。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">セーフティネット保証</h3>
              <p className="text-sm leading-relaxed text-text-light">
                売上減少などの要件を満たす中小企業が利用できる別枠の保証制度です。一般保証枠とは別枠で2億8,000万円まで保証を受けられるため、合計5億6,000万円の保証枠が確保できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">保証料の目安</h3>
              <p className="text-sm leading-relaxed text-text-light">
                保証料率は企業の信用リスクに応じて0.45%〜1.90%（9段階）です。業績が良い企業ほど低い保証料率が適用されます。ファクタリングを利用して資金繰りを安定させることで、信用力の維持・向上につながります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">申し込みから実行までの流れ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ①金融機関に相談 → ②保証協会に申込 → ③保証協会が審査（1〜2週間） → ④保証承諾 → ⑤金融機関から融資実行。このプロセスに2〜4週間かかるため、急ぎの資金にはファクタリングでつなぐのが効果的です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 併用シミュレーション ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">併用シミュレーション</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            実際に保証付き融資とファクタリングを併用した場合のシミュレーションを見てみましょう。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-3 font-bold text-primary">ケース：製造業 A社（年商1億円）</h3>
            <div className="space-y-3 text-sm text-text-light">
              <p><strong className="text-text-main">状況：</strong>大口受注（3,000万円）を獲得。材料費1,500万円の支払いが2週間後に迫るが、手元資金は500万円。</p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg bg-section-bg p-4">
                  <p className="font-semibold text-primary">保証付き融資（2,000万円）</p>
                  <p className="mt-1">金利2%＋保証料1% → 年間コスト約60万円</p>
                  <p className="mt-1">審査期間：約3週間 → 支払いに間に合わない</p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="font-semibold text-secondary">ファクタリング（1,000万円・つなぎ）</p>
                  <p className="mt-1">手数料5% → 50万円（1回のみ）</p>
                  <p className="mt-1">即日入金 → 材料費の支払いに対応可能</p>
                </div>
              </div>
              <p className="mt-3"><strong className="text-text-main">結果：</strong>ファクタリングで即日1,000万円を確保し材料費を支払い。3週間後に保証付き融資2,000万円が実行され、運転資金を安定化。ファクタリングの利用は1回のみで、総コスト（融資利息＋ファクタリング手数料）は年間約110万円。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用時の注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">ファクタリングの手数料コストを管理する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                保証付き融資と比べてファクタリングの手数料は高めです。常時ファクタリングに頼るのではなく、融資が実行されるまでのつなぎとして活用し、コストを最小限に抑えましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">決算書への影響を把握する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料は「売上債権売却損」として費用計上されます。この金額が大きいと、保証付き融資の審査時に質問される可能性があります。顧問税理士に適切な会計処理を相談しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">メインバンクとの関係を大切にする</h3>
              <p className="text-sm leading-relaxed text-text-light">
                保証付き融資はメインバンクを通じて申請するのが一般的です。ファクタリングの利用について銀行から質問された場合、「一時的な資金繰り対策として利用している」と正直に説明できるようにしておきましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">中長期的には融資中心にシフトする</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングは短期の資金繰り対策として優れていますが、コスト面では融資の方が有利です。事業が安定したら、保証付き融資やプロパー融資を中心とした資金調達に移行していくのが理想的です。
              </p>
            </div>
          </div>
        </section>

        {/* ── まとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：保証付き融資とファクタリングの最適な使い分け</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">急ぎの資金（即日〜数日）</strong>→ ファクタリングを利用。オンライン完結で即日入金が可能。保証付き融資の審査を待つ余裕がない場合に最適。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">長期の運転資金・設備投資</strong>→ 保証付き融資を利用。年利1〜3%＋保証料で低コスト。審査に2〜4週間かかるが、��ァクタリングよりコスト効率が高い。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">融資審査中のつなぎ</strong>→ ファクタリングでつなぎ、融資実行後にファ���タリングを終了。コストを最小化。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">融資枠の温存</strong>→ 通常の資金繰りにはファクタリングを活用し、保証枠を緊急時のために温存する戦略も有効。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">併用のポイント</strong>→ フ��クタリングは借入れではないため保証枠に影響しない。両者は競合せず補完関係���ある。組み合わせることで資金繰りの安定性が大幅に向上。</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 保証協会を利用した実際の事例 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">保証付き融資とファクタリング併用の活用事例</h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-primary">事例1：建設業 B社（従業員20名）</h3>
              <div className="space-y-2 text-sm text-text-light">
                <p><strong className="text-text-main">状況：</strong>公共工事の受注が増加し運転資金2,000万円が必要。保証付き融資を申請したが審査に3週間かかる。来週の外注費500万円の支払いが迫っている。</p>
                <p><strong className="text-text-main">対応：</strong>まずファクタリングで売掛金500万円を即日現金化（手数料5%＝25万円）し、外注費を支払い。3週間後に保証付き融資2,000万円が実行され、運転資金を安定化。</p>
                <p><strong className="text-text-main">結果：</strong>工事を中断することなく完了。ファクタリングは1回のみの利用で、以降は保証付き融資で資金���りを管理。</p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-primary">事例2：IT企業 C��（従業員10名）</h3>
              <div className="space-y-2 text-sm text-text-light">
                <p><strong className="text-text-main">状況：</strong>SES事業の急拡大で月間売上が500万円から1,500万円に成長。エンジニア給与が先行するため資金繰り���厳しい。保証付き融資の枠を拡大したいが審査中。</p>
                <p><strong className="text-text-main">対応：</strong>毎月の確定売掛金のうち500万円をファクタリングで現金化（手数料4%）。同時に保証協会の枠拡大を申請。1ヶ月後に融資枠が3,000万円に拡大。</p>
                <p><strong className="text-text-main">結果：</strong>融資枠拡大後はファクタリングの利用頻度を減らし、コストを最適化。急成長期の資金ショートを回避。</p>
              </div>
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

        {/* ── 各都道府県の信用保証協会 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">信用保証協会への相談方法</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            信用保証協会は全国52箇所に設置されています。保証付き融資の申し込みは、原則として取引銀行を通じて行いますが、直接信用保証協会に相談することも可能です。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">相談の流れ</h3>
              <div className="space-y-2 text-sm text-text-light">
                <p>1. 最寄りの信用保証協会に電話またはWebで相談予約</p>
                <p>2. 事業内容・資金使途・希望額を伝え、利用可能な保証制度を確認</p>
                <p>3. 取引銀行を通じて正式に申し込み</p>
                <p>4. 保証協会の審査（1〜2週間）→ 保証承諾 → 銀行から融資実行</p>
              </div>
              <p className="mt-3 text-sm text-text-light">
                <strong className="text-text-main">ポイント：</strong>保証協会の審査中にファクタリングでつなぎ資金を確保することで、融資実行までの資金ギャップをカバーできます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">相談時に持参するもの</h3>
              <ul className="space-y-1 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>直近2期分の決算書（確定申告書）</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>試算表（直近のもの）</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>事業計画書（あれば）</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>資金繰り表（あれば）</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>会社概要・登記簿謄本</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/funding-methods/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">中小企業の資金調達手段一覧</p>
              <p className="mt-1 text-sm text-text-light">15の方法を比較</p>
            </Link>
            <Link href="/articles/beginners-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">初めてのファクタリング完全ガイド</p>
              <p className="mt-1 text-sm text-text-light">仕組みから選び方まで</p>
            </Link>
            <Link href="/articles/prevent-bankruptcy/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">黒字倒産の防ぎ方</p>
              <p className="mt-1 text-sm text-text-light">ファクタリングで資金繰り改善</p>
            </Link>
            <Link href="/articles/how-to-choose/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリング会社の選び方</p>
              <p className="mt-1 text-sm text-text-light">10のチェックポイント</p>
            </Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">保証付き融資と併用できるファクタリング会社を比較</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            信用保証協会の保証枠に影響しないファクタリング会社を一括比較。手数料・入金スピードであなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
