import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "補助金入金待ちの資金繰りにファクタリングを使う方法",
  description:
    "補助金・助成金の入金待ち期間の資金繰りにファクタリングを活用する方法を解説。つなぎ資金としての活用法、注意点、おすすめの会社を紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/subsidy-bridge/",
  },
  openGraph: {
    title: "補助金入金待ちの資金繰りにファクタリングを使う方法",
    description: "補助金入金までのつなぎ資金にファクタリングを活用。方法と注意点を解説。",
    url: "https://factoring-partner.pages.dev/articles/subsidy-bridge/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const subsidyTimeline = [
  { step: "申請", period: "随時〜締切", description: "補助金の公募に申請書類を提出" },
  { step: "採択", period: "申請から1〜3ヶ月後", description: "審査を経て採択が決定" },
  { step: "事業実施", period: "採択から数ヶ月〜1年", description: "補助事業を実施し、経費を支出" },
  { step: "実績報告", period: "事業完了後1ヶ月以内", description: "事業の実績と経費を報告" },
  { step: "確定検査", period: "報告から1〜2ヶ月", description: "補助金事務局による検査" },
  { step: "入金", period: "確定検査後1〜2ヶ月", description: "補助金が指定口座に振り込まれる" },
];

const bridgeStrategies = [
  {
    title: "通常の売掛金をファクタリングで資金化",
    description:
      "補助金の入金を待つ間、本業で発生した売掛金をファクタリングで早期に現金化する方法です。補助金そのものをファクタリングするのではなく、既存の事業売掛金を活用して資金繰りを安定させます。",
    merit: "最も一般的で確実な方法。ファクタリング会社の審査も通りやすい。",
    caution: "補助事業の経費と通常事業の経費を明確に区分する必要がある。",
  },
  {
    title: "補助事業で発生した売掛金をファクタリング",
    description:
      "補助事業（新製品開発・設備導入など）の成果として発生した売掛金をファクタリングで現金化する方法です。補助事業で生産した製品の販売代金などが対象になります。",
    merit: "補助事業の成果を早期に資金化できる。",
    caution: "補助事業の経理処理に影響がないか、事務局に確認が必要な場合がある。",
  },
  {
    title: "ファクタリング＋つなぎ融資の併用",
    description:
      "ファクタリングだけでは足りない場合、日本政策金融公庫や信用金庫の「つなぎ融資」と併用する方法です。補助金の採択通知書があれば、つなぎ融資の審査に通りやすくなります。",
    merit: "大型の補助金（数千万円規模）にも対応可能。",
    caution: "つなぎ融資は利息が発生する。審査に1〜2週間かかる場合がある。",
  },
];

const majorSubsidies = [
  {
    name: "ものづくり補助金",
    amount: "最大1,250万円〜4,000万円",
    description: "中小企業の設備投資・試作品開発を支援。採択から入金まで1年以上かかることも。",
  },
  {
    name: "小規模事業者持続化補助金",
    amount: "最大50万円〜200万円",
    description: "小規模事業者の販路開拓を支援。比較的入金が早いが、それでも数ヶ月かかる。",
  },
  {
    name: "IT導入補助金",
    amount: "最大5万円〜450万円",
    description: "ITツール導入を支援。ソフトウェア費用やクラウド利用料が対象。",
  },
  {
    name: "事業再構築補助金",
    amount: "最大100万円〜1.5億円",
    description: "ポストコロナの事業転換を支援。大型の設備投資が対象で入金待ち期間も長い。",
  },
];

const faqs = [
  {
    question: "補助金そのものをファクタリングできますか？",
    answer:
      "補助金の受給権は原則としてファクタリング（債権譲渡）の対象にはなりません。補助金は国や自治体からの給付であり、商取引に基づく売掛金とは性質が異なるためです。ファクタリングは本業の売掛金を対象に行い、その資金を補助金入金待ちのつなぎ資金として活用する形が一般的です。",
  },
  {
    question: "補助金の入金待ち中にファクタリングを使うと補助金に影響はありますか？",
    answer:
      "本業の売掛金をファクタリングすること自体は、補助金の受給に影響しません。ただし、補助事業の経費とファクタリングの取引を混同しないよう、経理処理を明確に区分することが重要です。不安な場合は補助金事務局に確認しましょう。",
  },
  {
    question: "補助金のつなぎ資金としてファクタリングは有効ですか？",
    answer:
      "はい、有効です。特に補助金の入金まで数ヶ月〜1年以上かかる場合、その間の事業運営資金をファクタリングで確保できます。銀行のつなぎ融資と比べて審査が早く、借入れではないため負債が増えないメリットもあります。",
  },
  {
    question: "補助金採択前でもファクタリングを利用できますか？",
    answer:
      "はい、ファクタリングは補助金の採択とは無関係に利用できます。ファクタリングの審査対象は本業の売掛金であり、補助金の採択状況は審査に影響しません。補助金申請中の先行投資資金としてもファクタリングは活用可能です。",
  },
  {
    question: "補助金入金までのつなぎ資金として他にどんな方法がありますか？",
    answer:
      "ファクタリング以外のつなぎ資金としては、①日本政策金融公庫の融資②信用金庫のつなぎ融資③自治体の制度融資④ビジネスローンなどがあります。補助金の採択通知書があれば融資審査で有利になります。ファクタリングと融資を組み合わせることで、大型の補助金にも対応できます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "補助金入金待ちの資金繰りにファクタリングを使う方法",
  description: "補助金入金までのつなぎ資金にファクタリングを活用。方法と注意点を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/subsidy-bridge/" },
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
    { "@type": "ListItem", position: 3, name: "補助金入金待ちのファクタリング活用法", item: "https://factoring-partner.pages.dev/articles/subsidy-bridge/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SubsidyBridgePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "補助金入金待ちのファクタリング活用法" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">活用ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            補助金入金待ちの資金繰りに
            <br className="hidden md:block" />
            ファクタリングを使う方法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            補助金・助成金の採択から入金までの長い待機期間中、事業を止めずに資金繰りを維持する方法としてファクタリングの活用法を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#timeline" className="hover:underline">1. 補助金の入金までのタイムライン</a></li>
            <li><a href="#subsidies" className="hover:underline">2. 主な補助金と入金待ち期間</a></li>
            <li><a href="#strategies" className="hover:underline">3. ファクタリングを使ったつなぎ資金の確保方法</a></li>
            <li><a href="#recommended" className="hover:underline">4. おすすめファクタリング会社</a></li>
            <li><a href="#tips" className="hover:underline">5. 利用時の注意点</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        <section id="timeline" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">補助金の入金までのタイムライン</h2>
          <p className="mb-8 leading-relaxed text-text-light">補助金は申請してからすぐに入金されるわけではありません。一般的な補助金の流れと、各ステップにかかる期間を確認しましょう。</p>
          <div className="space-y-3">
            {subsidyTimeline.map((item, index) => (
              <div key={item.step} className="flex items-start gap-4 rounded-lg border border-border bg-white p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</span>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-text-main">{item.step}</h3>
                    <span className="rounded bg-section-bg px-2 py-0.5 text-xs text-primary">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-text-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="font-bold text-accent">重要ポイント</p>
            <p className="mt-2 text-sm leading-relaxed text-text-light">
              補助金は「後払い」が原則です。事業を実施して経費を支出した後に補助金が入金されるため、事業実施中の資金は自己調達する必要があります。申請から入金まで、早くても半年〜1年、長い場合は1年半以上かかることがあります。
            </p>
          </div>
        </section>

        <section id="subsidies" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">主な補助金と入金待ち期間</h2>
          <p className="mb-8 leading-relaxed text-text-light">中小企業が利用することの多い主な補助金と、それぞれの入金待ち期間の目安を紹介します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {majorSubsidies.map((item) => (
              <div key={item.name} className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
                <h3 className="mb-1 font-bold text-secondary">{item.name}</h3>
                <p className="mb-2 text-sm font-medium text-primary">{item.amount}</p>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="strategies" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリングを使ったつなぎ資金の確保方法</h2>
          <p className="mb-8 leading-relaxed text-text-light">補助金入金待ちの間にファクタリングを活用する3つの方法を解説します。</p>
          <div className="space-y-6">
            {bridgeStrategies.map((strategy) => (
              <div key={strategy.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 text-lg font-bold text-primary">{strategy.title}</h3>
                <p className="mb-4 leading-relaxed text-text-light">{strategy.description}</p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="text-xs font-semibold text-secondary">メリット</p>
                    <p className="mt-1 text-sm text-text-main">{strategy.merit}</p>
                  </div>
                  <div className="rounded-lg bg-orange-50 p-4">
                    <p className="text-xs font-semibold text-accent">注意点</p>
                    <p className="mt-1 text-sm text-text-main">{strategy.caution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">おすすめファクタリング会社</h2>
          <p className="mb-8 leading-relaxed text-text-light">補助金入金待ちのつなぎ資金に適したファクタリング会社を紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">1</span>
                <div>
                  <h3 className="font-bold text-primary">ビートレーディング</h3>
                  <p className="mt-1 text-sm text-text-light">業界最大手級。高額案件にも上限なし。最短2時間入金。手数料2%〜。大型補助金のつなぎにも対応可能な資金力。</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">2</span>
                <div>
                  <h3 className="font-bold text-primary">日本中小企業金融サポート機構</h3>
                  <p className="mt-1 text-sm text-text-light">非営利法人運営。経済産業大臣認定。手数料1.5%〜。補助金活用中の中小企業に安心の選択肢。</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">3</span>
                <div>
                  <h3 className="font-bold text-primary">アクセルファクター</h3>
                  <p className="mt-1 text-sm text-text-light">審査通過率93%以上。30万円〜対応。即日入金対応。赤字決算・税金滞納でも柔軟対応。手数料2%〜。</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">4</span>
                <div>
                  <h3 className="font-bold text-primary">QuQuMo（ククモ）</h3>
                  <p className="mt-1 text-sm text-text-light">手数料1%〜の低コスト。オンライン完結。請求書と通帳のみで審査。最短2時間入金。コストを抑えたい方に。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 補助金活用のスケジュール管理 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">補助金活用のスケジュールと資金計画</h2>
          <p className="mb-8 leading-relaxed text-text-light">補助金を活用する際は、入金までのスケジュールを把握し、資金計画を立てることが重要です。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-3 font-bold text-primary">ものづくり補助金の資金計画例</h3>
            <div className="space-y-3 text-sm text-text-light">
              <p><strong className="text-text-main">補助金額：</strong>1,000万円（補助率2/3、事業費1,500万円）</p>
              <p><strong className="text-text-main">スケジュール：</strong></p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#9679;</span>
                  <span>4月：申請 → 7月：採択決定 → 8月〜翌3月：事業実施 → 4月：実績報告 → 6月：確定検査 → 8月：補助金入金</span>
                </li>
              </ul>
              <p className="mt-3"><strong className="text-text-main">資金ギャップ：</strong>8月から翌年8月まで、約1年間にわたり事業費1,500万円を自己調達する必要があります。</p>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="font-semibold text-secondary">ファクタリングで対応</p>
                  <p className="mt-1">本業の売掛金500万円をファクタリング（手数料5%＝25万円）で毎月現金化し、事業実施中の運転資金を確保。年間コスト約300万円。</p>
                </div>
                <div className="rounded-lg bg-section-bg p-4">
                  <p className="font-semibold text-primary">つなぎ融資で対応</p>
                  <p className="mt-1">日本政策金融公庫のつなぎ融資1,500万円（年利1.5%）を活用。年間利息約22.5万円。ただし審査に2〜4週間必要。</p>
                </div>
              </div>
              <p className="mt-3"><strong className="text-text-main">最適な組み合わせ：</strong>つなぎ融資の審査中はファクタリングでつなぎ、融資実行後はファクタリングを終了。総コスト最小化。</p>
            </div>
          </div>
        </section>

        {/* ── よくある補助金の種類と特徴 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">補助金活用時のファクタリング利用パターン</h2>
          <p className="mb-8 leading-relaxed text-text-light">補助金の種類によって、ファクタリングの活用パターンが異なります。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">小規模事業者持続化補助金の場合</h3>
              <p className="text-sm leading-relaxed text-text-light">
                補助金額が最大50〜200万円と少額のため、ファクタリングの手数料コストとのバランスが重要です。本業の売掛金を1〜2回ファクタリングするだけで、事業実施中の資金をカバーできるケースが多いです。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">IT導入補助金の場合</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ITツールの導入費用が対象で、比較的入金が早い補助金です。ただし、ITツールの利用料（クラウドサービスなど）は月々発生するため、初期費用をファクタリングで確保しつつ、補助金入金後に精算する方法が有効です。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">事業再構築補助金の場合</h3>
              <p className="text-sm leading-relaxed text-text-light">
                補助金額が大きい（最大1.5億円）ため、ファクタリングだけでは資金が不足する場合があります。日本政策金融公庫のつなぎ融資や銀行の保証付き融資と組み合わせ、ファクタリングは緊急のつなぎとして活用するのが効果的です。
              </p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用時の注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">補助金の経費とファクタリングの費用を混同しない</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料は補助金の対象経費にはなりません。補助事業の経費と通常事業の経費を明確に区分し、経理処理を正確に行いましょう。補助金の実績報告で問題にならないよう注意が必要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">補助金の資金計画段階でファクタリングを検討する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                補助金を申請する段階で、事業実施中の資金繰りをどうするか計画しておきましょう。ファクタリングの手数料コストも含めた資金計画を立てることで、資金ショートを防ぐことができます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">つなぎ融資との比較検討</h3>
              <p className="text-sm leading-relaxed text-text-light">
                日本政策金融公庫や信用金庫のつなぎ融資は、ファクタリングより低コストの場合があります。ただし審査に時間がかかるため、急ぎの場合はファクタリング、時間に余裕がある場合は融資という使い分けが有効です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">補助金の不採択リスクも想定する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                補助金が不採択になった場合でも、ファクタリングの返済義務は発生しません（売掛金の売却は完了しているため）。ただし、補助金を前提とした事業計画が頓挫するリスクがあるため、不採択時の代替計画も用意しておきましょう。
              </p>
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

        {/* ── まとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：補助金入金待ちの資金繰り対策</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">補助金は「後払い」が原則</strong>：事業を実施して経費を支出した後に入金される。申請から入金まで半年〜1年以上かかることも。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">本業の売掛金をファクタリングでつなぐ</strong>：補助金そのものはファクタリングできないが、本業の売掛金を現金化してつなぎ資金に充てることは可能。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">つなぎ融資との併用も検討</strong>：大型補助金の場合、ファクタリングだけでは足りない可能性あり。公庫のつなぎ融資と組み合わせてコストを最適化。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">補助金の経費とファクタリングを混同しない</strong>：ファクタリングの手数料は補助金の対象経費にならない。経理処理を明確に区分する。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">申請段階で資金計画を立てる</strong>：補助金を申請する段階で、事業実施中の資金繰りをどうするか計画しておく。</span></li>
            </ul>
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">補助金活用時のファクタリング利用の流れ</h2>
          <div className="space-y-3">
            {[
              { step: "補助金の資金計画を策定", description: "補助金の事業実施期間中に必要な自己負担分と、ファクタリングで調達する金額を計画します。" },
              { step: "ファクタリング会社に事前相談", description: "補助事業の期間と必要資金額を伝え、継続的なファクタリング利用の条件を確認します。" },
              { step: "本業の売掛金をファクタリングで現金化", description: "補助事業の実施期間中、本業で発生する売掛金をファクタリングで即日現金化し、運転資金を確保します。" },
              { step: "補助事業を実施", description: "確保した資金で補助事業を滞りなく実施。経費の支出と売掛金の管理を適切に行います。" },
              { step: "実績報告・確定検査", description: "事業完了後に実績報告を提出し、確定検査を受けます。ファクタリングの取引と補助金の経費を明確に区分。" },
              { step: "補助金入金・ファクタリング利用終了", description: "補助金が入金されたら、ファクタリングの利用を終了（または頻度を減らす）し、コストを最適化します。" },
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

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/cashflow-tips/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">資金繰り改善のコツ</p>
              <p className="mt-1 text-sm text-text-light">中小企業のキャッシュフロー管理</p>
            </Link>
            <Link href="/articles/emergency-funding/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">緊急の資金調達方法</p>
              <p className="mt-1 text-sm text-text-light">即日〜1週間で資金を確保</p>
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
          <h2 className="text-xl font-bold md:text-2xl">補助金入金待ちのつなぎ資金にファクタリングを活用</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            事業を止めずに資金繰りを維持。手数料・入金スピードでファクタリング会社を比較し、あなたに最適なサービスを見つけましょう。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
