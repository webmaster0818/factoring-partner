import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "中小企業の資金調達手段一覧（完全版）｜15の方法を比較",
  description:
    "中小企業が利用できる15の資金調達手段を徹底比較。銀行融資・ファクタリング・補助金・VC・クラウドファンディングなど、それぞれの特徴・メリット・デメリットを解説します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/funding-methods/",
  },
  openGraph: {
    title: "中小企業の資金調達手段一覧（完全版）｜15の方法を比較",
    description: "中小企業の15の資金調達手段を比較。それぞれの特徴と選び方を解説。",
    url: "https://factoring-partner.pages.dev/articles/funding-methods/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const fundingMethods = [
  { category: "売掛金の活用", name: "ファクタリング", speed: "即日〜数日", cost: "手数料1〜18%", difficulty: "低", merit: "即日資金化可能。負債にならない。審査が緩やか。", demerit: "手数料が高め。売掛金が必要。" },
  { category: "銀行系", name: "銀行融資（プロパー）", speed: "2〜4週間", cost: "年利1〜3%", difficulty: "高", merit: "低金利。高額の調達が可能。", demerit: "審査が厳しい。時間がかかる。担保・保証人が必要な場合あり。" },
  { category: "銀行系", name: "信用保証協会の保証付き融資", speed: "2〜4週間", cost: "年利1〜3%＋保証料", difficulty: "中", merit: "プロパーより審査が緩やか。中小企業に適した制度。", demerit: "保証料がかかる。審査に時間がかかる。" },
  { category: "政府系", name: "日本政策金融公庫", speed: "2〜4週間", cost: "年利0.5〜2.5%", difficulty: "中", merit: "低金利。創業融資に強い。無担保・無保証人の制度あり。", demerit: "審査に時間がかかる。書類準備が多い。" },
  { category: "政府系", name: "補助金・助成金", speed: "数ヶ月〜1年", cost: "なし（返済不要）", difficulty: "高", merit: "返済不要。事業の信用力向上。", demerit: "採択率が低い。入金まで時間がかかる。報告義務あり。" },
  { category: "政府系", name: "自治体の制度融資", speed: "2〜6週間", cost: "年利0.5〜2%", difficulty: "中", merit: "低金利。地域の中小企業向け。利子補給制度あり。", demerit: "自治体によって条件が異なる。審査に時間がかかる。" },
  { category: "ノンバンク", name: "ビジネスローン", speed: "即日〜1週間", cost: "年利5〜18%", difficulty: "低", merit: "審査が早い。オンラインで完結。", demerit: "金利が高い。借入金として負債に計上。" },
  { category: "ノンバンク", name: "リース・割賦", speed: "1〜2週間", cost: "リース料率2〜5%/年", difficulty: "中", merit: "設備投資に特化。初期費用を抑えられる。", demerit: "設備以外には使えない。総支払額が購入より高い。" },
  { category: "ノンバンク", name: "手形割引", speed: "即日〜数日", cost: "割引料1〜5%", difficulty: "低", merit: "手形があれば利用可能。即日資金化。", demerit: "手形取引がない場合は利用不可。不渡りリスク。" },
  { category: "出資・投資", name: "ベンチャーキャピタル（VC）", speed: "1〜6ヶ月", cost: "株式の希薄化", difficulty: "高", merit: "大型の資金調達が可能。返済不要。経営支援も受けられる。", demerit: "株式の希薄化。経営への関与。IPO圧力。" },
  { category: "出資・投資", name: "エンジェル投資家", speed: "1〜3ヶ月", cost: "株式の希薄化", difficulty: "中〜高", merit: "創業期でも資金調達可能。メンターとしての支援。", demerit: "株式の希薄化。投資家との関係管理が必要。" },
  { category: "その他", name: "クラウドファンディング", speed: "1〜3ヶ月", cost: "手数料10〜20%", difficulty: "中", merit: "資金調達とマーケティングを同時に。ファンの獲得。", demerit: "目標未達で資金が入らない場合あり。手数料が高い。" },
  { category: "その他", name: "社債発行", speed: "1〜3ヶ月", cost: "年利2〜5%", difficulty: "高", merit: "株式の希薄化なし。比較的大型の調達が可能。", demerit: "返済義務あり。信用力が必要。手続きが複雑。" },
  { category: "その他", name: "売掛債権担保融資（ABL）", speed: "1〜2週間", cost: "年利2〜8%", difficulty: "中", merit: "売掛金を担保にした融資。ファクタリングより低コスト。", demerit: "借入金として負債に計上。売掛金の管理が必要。" },
  { category: "その他", name: "親族・知人からの借入", speed: "即日〜", cost: "利息なし〜低金利", difficulty: "低", merit: "審査不要。柔軟な条件。", demerit: "人間関係のリスク。金額に限界あり。" },
];

const faqs = [
  {
    question: "中小企業の資金調達で最もおすすめの方法は？",
    answer:
      "状況によって異なりますが、一般的には①急ぎの場合はファクタリング②中長期の運転資金は日本政策金融公庫や信用保証協会の保証付き融資③設備投資はリースや設備投資向け融資④返済不要な資金は補助金・助成金、という使い分けがおすすめです。複数の手段を組み合わせるのが最も効果的です。",
  },
  {
    question: "創業間もない企業はどの方法が使えますか？",
    answer:
      "創業間もない企業は、①日本政策金融公庫の新創業融資制度②自治体の創業支援融資③エンジェル投資家やVC④ファクタリング（売掛金がある場合）⑤クラウドファンディング、が利用可能です。特に日本政策金融公庫は創業融資に積極的で、実績がなくても事業計画で審査してくれます。",
  },
  {
    question: "赤字でも利用できる資金調達方法は？",
    answer:
      "赤字でも利用可能な方法として、①ファクタリング（売掛先の信用力を重視するため、自社が赤字でもOK）②ビジネスローン（一部対応）③ファクタリング＋融資の組み合わせ、があります。銀行融資は赤字だと審査が厳しくなりますが、ファクタリングは自社の業績よりも売掛先の信用力を重視するため、赤字でも利用しやすいです。",
  },
  {
    question: "ファクタリングと銀行融資はどちらが良いですか？",
    answer:
      "どちらが良いかではなく、用途に応じて使い分けるのが正解です。即日〜数日で資金が必要→ファクタリング。1ヶ月以上待てる→銀行融資。負債を増やしたくない→ファクタリング。低コストで調達したい→銀行融資。両者は補完関係にあり、併用することで資金繰りの安定性が高まります。",
  },
  {
    question: "補助金とファクタリングの併用は可能ですか？",
    answer:
      "はい、併用可能です。補助金の入金は採択から数ヶ月〜1年以上かかるため、その間の事業運営資金をファクタリングで調達する方法が有効です。ファクタリングは本業の売掛金を対象に行い、補助金の対象経費とは別に資金を確保します。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "中小企業の資金調達手段一覧（完全版）｜15の方法を比較",
  description: "中小企業の15の資金調達手段を比較。それぞれの特徴と選び方を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/funding-methods/" },
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
    { "@type": "ListItem", position: 3, name: "中小企業の資金調達手段一覧", item: "https://factoring-partner.pages.dev/articles/funding-methods/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function FundingMethodsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "中小企業の資金調達手段一覧" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">知識ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            中小企業の資金調達手段一覧（完全版）
            <br className="hidden md:block" />
            15の方法を比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            中小企業が利用できる15の資金調達手段を徹底比較。銀行融資からファクタリング、補助金、出資まで、それぞれの特徴と最適な使い分けを解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#methods" className="hover:underline">1. 15の資金調達手段一覧</a></li>
            <li><a href="#situation" className="hover:underline">2. 状況別おすすめの方法</a></li>
            <li><a href="#faq" className="hover:underline">3. よくある質問</a></li>
          </ol>
        </nav>

        <section id="methods" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">15の資金調達手段一覧</h2>
          <p className="mb-8 leading-relaxed text-text-light">中小企業が利用できる主な資金調達手段を、カテゴリ別に紹介します。</p>
          <div className="space-y-6">
            {fundingMethods.map((method, index) => (
              <div key={method.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
                  <div className="w-full">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-section-bg px-2 py-0.5 text-xs font-bold text-text-light">{method.category}</span>
                      <h3 className="text-lg font-bold text-primary">{method.name}</h3>
                    </div>
                    <div className="mt-3 grid gap-2 rounded-lg bg-section-bg p-3 md:grid-cols-3">
                      <div><p className="text-xs text-text-light">調達スピード</p><p className="font-bold text-secondary">{method.speed}</p></div>
                      <div><p className="text-xs text-text-light">コスト</p><p className="font-bold text-primary">{method.cost}</p></div>
                      <div><p className="text-xs text-text-light">難易度</p><p className="font-bold text-accent">{method.difficulty}</p></div>
                    </div>
                    <div className="mt-3 grid gap-2 md:grid-cols-2">
                      <div className="rounded-lg bg-teal-50 p-3">
                        <p className="text-xs font-semibold text-secondary">メリット</p>
                        <p className="mt-1 text-sm text-text-main">{method.merit}</p>
                      </div>
                      <div className="rounded-lg bg-orange-50 p-3">
                        <p className="text-xs font-semibold text-accent">デメリット</p>
                        <p className="mt-1 text-sm text-text-main">{method.demerit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 資金調達のステップ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">資金調達を成功させるためのステップ</h2>
          <p className="mb-8 leading-relaxed text-text-light">どの方法を選ぶ場合でも、以下のステップを踏むことで成功率が上がります。</p>
          <div className="space-y-3">
            {[
              { step: "必要な資金額と時期を明確にする", description: "「いくら」「いつまでに」必要かを具体的に把握しましょう。資金繰り表を作成し、月ごとの入金・出金を可視化することが第一歩です。" },
              { step: "資金使途を明確にする", description: "運転資金なのか、設備投資なのか、つなぎ資金なのかによって最適な調達手段が異なります。使途に合った方法を選びましょう。" },
              { step: "複数の手段を比較検討する", description: "1つの方法に絞らず、複数の手段を比較しましょう。銀行融資とファクタリング、補助金とビジネスローンなど、組み合わせが有効な場合もあります。" },
              { step: "コスト（金利・手数料）を計算する", description: "各手段のコストを年率換算で比較しましょう。ファクタリングの手数料5%は年率換算すると高く見えますが、1回限りの利用なら合理的な場合もあります。" },
              { step: "必要書類を準備する", description: "どの方法でも書類準備が必要です。決算書・確定申告書・通帳コピー・事業計画書など、基本的な書類は常に整理しておきましょう。" },
              { step: "専門家に相談する", description: "顧問税理士・中小企業診断士・商工会議所の相談員など、専門家のアドバイスを受けることで最適な選択ができます。無料相談を活用しましょう。" },
            ].map((item, index) => (
              <div key={item.step} className="flex items-start gap-4 rounded-lg border border-border bg-white p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</span>
                <div>
                  <h3 className="font-bold text-text-main">{item.step}</h3>
                  <p className="mt-1 text-sm text-text-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── コスト比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">主要な資金調達手段のコスト比較</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            1,000万円を調達した場合の実質コストを比較してみましょう。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-2 font-bold text-secondary">日本政策金融公庫（年利1.5%）</h3>
              <p className="text-sm text-text-light">年間利息：約15万円</p>
              <p className="text-sm text-text-light">5年返済の場合の総利息：約39万円</p>
              <p className="mt-2 text-xs text-text-light">※最も低コストだが審査に2〜4週間</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-2 font-bold text-secondary">信用保証協会の保証付き融資（年利2%＋保証料1%）</h3>
              <p className="text-sm text-text-light">年間コスト：約30万円</p>
              <p className="text-sm text-text-light">5年返済の場合の総コスト：約78万円</p>
              <p className="mt-2 text-xs text-text-light">※プロパーより審査が通りやすい</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">ファクタリング（手数料5%）</h3>
              <p className="text-sm text-text-light">1回のコスト：50万円</p>
              <p className="text-sm text-text-light">毎月利用した場合の年間コスト：600万円</p>
              <p className="mt-2 text-xs text-text-light">※即日対応だが常用するとコスト大。つなぎ利用が最適</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">ビジネスローン（年利12%）</h3>
              <p className="text-sm text-text-light">年間利息：約120万円</p>
              <p className="text-sm text-text-light">3年返済の場合の総利息：約195万円</p>
              <p className="mt-2 text-xs text-text-light">※審査が早いが金利が高い。短期利用向き</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-text-light">
            ※上記は概算です。実際のコストは条件によって異なります。長期の資金は低金利の融資、短期のつなぎはファクタリングと使い分けるのが最もコスト効率が良い方法です。
          </p>
        </section>

        {/* ── 事業ステージ別 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">事業ステージ別のおすすめ資金調達</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">創業期（設立0〜2年）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                日本政策金融公庫の新創業融資制度（最大7,200万円、無担保・無保証人）が最有力。売掛金がある場合はファクタリングも併用可能。エンジェル投資家やクラウドファンディングも選択肢に。自治体の創業支援融資も積極的に活用しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">成長期（設立3〜10年）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                銀行のプロパー融資や信用保証協会の保証付き融資が中心。急な資金需要にはファクタリングを活用。ものづくり補助金やIT導入補助金などの活用も検討。VCからの出資は急成長を目指す場合に有効です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">安定期（設立10年以上）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                メインバンクとの関係を活かしたプロパー融資が最も低コスト。社債発行や私募債も選択肢に。ファクタリングは一時的な資金繰り対策として温存。補助金・助成金も引き続き活用。事業承継に関連する資金需要には専門の融資制度も利用可能です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">経営改善期</h3>
              <p className="text-sm leading-relaxed text-text-light">
                赤字や債務超過の場合は銀行融資が困難。ファクタリング（売掛先の信用力で審査）やビジネスローンが現実的な選択肢。中小企業再生支援協議会の支援も検討。経営改善計画を策定し、段階的に融資へ復帰を目指しましょう。
              </p>
            </div>
          </div>
        </section>

        <section id="situation" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">状況別おすすめの方法</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">今すぐ資金が必要な場合</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリング（即日〜数日）またはビジネスローン（即日〜1週間）が最適です。売掛金がある場合はファクタリング、ない場合はビジネスローンを検討しましょう。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">低コストで調達したい場合</h3>
              <p className="text-sm leading-relaxed text-text-light">日本政策金融公庫や信用保証協会の保証付き融資が最も低コストです。審査に2〜4週間かかるため、時間に余裕がある場合に適しています。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">返済不要の資金が欲しい場合</h3>
              <p className="text-sm leading-relaxed text-text-light">補助金・助成金、またはVC・エンジェル投資家からの出資が返済不要です。補助金は採択率が低いですが、出資は株式の希薄化を伴います。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">負債を増やしたくない場合</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリング（売掛金の売却なので負債にならない）または出資（株式発行）が適しています。銀行融資やビジネスローンは負債として計上されます。</p>
            </div>
          </div>
        </section>

        {/* ── 資金調達の相談先 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">資金調達の相談先一覧</h2>
          <p className="mb-8 leading-relaxed text-text-light">資金調達について専門家に相談することで、最適な方法を選べます。主な相談先を紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">商工会議所・商工会</h3>
              <p className="text-sm text-text-light">無料の経営相談が受けられます。マル経融資（小規模事業者経営改善資金）の窓口にもなっており、年利1%台の低金利融資を紹介してもらえます。補助金情報の提供も。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">中小企業診断士</h3>
              <p className="text-sm text-text-light">資金調達計画の策定、事業計画書の作成支援を行ってくれます。補助金の申請支援にも対応。初回相談無料の事務所も多いです。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">よろず支援拠点</h3>
              <p className="text-sm text-text-light">国が設置する無料の経営相談所。全国47都道府県に設置されており、資金調達を含む経営全般の相談に対応しています。何度でも無料で相談可能。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">顧問税理士</h3>
              <p className="text-sm text-text-light">自社の財務状況を最もよく理解している専門家です。資金調達方法の選択、ファクタリングの会計処理、融資申請のサポートなど、具体的なアドバイスが受けられます。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫の相談窓口</h3>
              <p className="text-sm text-text-light">公庫の融資制度について無料で相談できます。全国に支店があり、事前相談→正式申込の流れで利用可能。創業融資の相談も積極的に受け付けています。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">認定支援機関</h3>
              <p className="text-sm text-text-light">経済産業大臣が認定した支援機関（税理士、公認会計士、金融機関など）で、中小企業の経営改善を支援。認定支援機関の関与が融資条件となる制度もあります。</p>
            </div>
          </div>
        </section>

        {/* ── まとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：最適な資金調達手段の選び方</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">即日〜数日で資金が必要</strong>：ファクタリングが最速の選択肢。売掛金があれば即日入金が可能。手数料はかかるが、スピードを優先する場面では最適。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">低コストで調達したい</strong>：日本政策金融公庫や信用保証協会の保証付き融資が最も低コスト。審査に2〜4週間かかるため、時間に余裕がある場合に。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">返済不要の資金が欲しい</strong>：補助金・助成金を活用。採択率は低いが返済不要。入金待ちのつなぎにはファクタリングを併用。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">負債を増やしたくない</strong>：ファクタリングは借入れではないため負債にならない。銀行融資の審査にも影響しない。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">複数の手段を組み合わせる</strong>：1つの方法に依存せず、短期・中期・長期の資金需要に応じて複数の手段を組み合わせるのが最善。ファクタリング＋融資＋補助金のポートフォリオ型が理想。</span>
              </li>
            </ul>
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

        {/* ── 資金調達の失敗パターン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">資金調達でよくある失敗パターン</h2>
          <p className="mb-8 leading-relaxed text-text-light">中小企業の資金調達で陥りがちな失敗パターンを把握し、事前に対策を立てましょう。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">失敗1：1つの手段に依存する</h3>
              <p className="text-sm leading-relaxed text-text-light">銀行融資だけに頼っていて、審査に落ちた時に他の手段がないケース。ファクタリング・融資・補助金など複数の手段を確保しておくことが重要です。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">失敗2：資金が必要になってから動く</h3>
              <p className="text-sm leading-relaxed text-text-light">「もう支払いができない」段階で初めて資金調達を検討するケース。銀行融資は審査に2〜4週間かかるため手遅れに。資金繰り表で3ヶ月先まで予測し、事前に動きましょう。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">失敗3：コストを考慮しない</h3>
              <p className="text-sm leading-relaxed text-text-light">高金利のビジネスローンを長期間利用し、利息負担で経営が圧迫されるケース。短期の資金にはファクタリング、長期の資金には低金利融資と、コストに応じた使い分けが必要です。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">失敗4：専門家に相談しない</h3>
              <p className="text-sm leading-relaxed text-text-light">自己判断で不適切な資金調達を選んでしまうケース。顧問税理士・商工会議所・よろず支援拠点など、無料で相談できる専門家を活用しましょう。</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/beginners-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">初めてのファクタリング完全ガイド</p>
              <p className="mt-1 text-sm text-text-light">仕組みから選び方まで</p>
            </Link>
            <Link href="/articles/credit-guarantee/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングと信用保証協会</p>
              <p className="mt-1 text-sm text-text-light">併用は可能？</p>
            </Link>
            <Link href="/articles/subsidy-bridge/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">補助金入金待ちのファクタリング活用</p>
              <p className="mt-1 text-sm text-text-light">つなぎ資金の確保方法</p>
            </Link>
            <Link href="/articles/prevent-bankruptcy/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">黒字倒産の防ぎ方</p>
              <p className="mt-1 text-sm text-text-light">ファクタリングで資金繰り改善</p>
            </Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">即日資金調達が可能なファクタリング会社を比較</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            15の資金調達手段の中で最速のファクタリング。手数料・入金スピードで各社を比較し、あなたに最適なサービスを見つけましょう。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
