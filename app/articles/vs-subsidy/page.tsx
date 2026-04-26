import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング vs 補助金・助成金｜併用可能？メリットデメリット比較",
  description:
    "ファクタリングと補助金・助成金の違いを徹底比較。コスト、スピード、審査基準、併用の可否、それぞれのメリット・デメリットを解説。資金調達の最適な組み合わせが見つかります。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/vs-subsidy/",
  },
  openGraph: {
    title: "ファクタリング vs 補助金・助成金｜併用可能？メリットデメリット比較",
    description: "ファクタリングと補助金・助成金の違いと併用方法を解説。",
    url: "https://factoring-partner.pages.dev/articles/vs-subsidy/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const comparisonItems = [
  { label: "資金調達スピード", factoring: "最短即日〜数日", subsidy: "数ヶ月〜1年以上" },
  { label: "コスト", factoring: "手数料2%〜20%", subsidy: "無料（返済不要）" },
  { label: "審査基準", factoring: "売掛先の信用力", subsidy: "事業計画の内容・要件適合" },
  { label: "返済義務", factoring: "なし（売掛金の売却）", subsidy: "なし（原則返済不要）" },
  { label: "受給のタイミング", factoring: "契約後即日〜数日", subsidy: "事業実施後の精算（後払い）" },
  { label: "利用できる事業者", factoring: "売掛金があれば誰でも", subsidy: "要件を満たす事業者のみ" },
  { label: "資金使途の制限", factoring: "自由", subsidy: "申請した用途のみ" },
  { label: "手続きの複雑さ", factoring: "比較的シンプル", subsidy: "複雑（申請書・報告書等）" },
];

const faqs = [
  {
    question: "ファクタリングと補助金・助成金は併用できますか？",
    answer: "はい、併用は可能です。ファクタリングは運転資金の調達、補助金・助成金は設備投資や新規事業の資金として使い分けることができます。補助金の入金は事業実施後（後払い）になるため、その間の運転資金をファクタリングで賄うという活用法が効果的です。",
  },
  {
    question: "補助金が入金されるまでの「つなぎ資金」をファクタリングで調達できますか？",
    answer: "はい、可能です。補助金は事業完了後の精算払い（後払い）が一般的で、入金まで数ヶ月〜1年かかることがあります。その間の運転資金が不足する場合、既存の売掛金をファクタリングで資金化してつなぎ資金として活用できます。ただし、補助金自体はファクタリングの対象にはなりません（売掛債権ではないため）。",
  },
  {
    question: "補助金と助成金の違いは何ですか？",
    answer: "補助金は経済産業省系の制度が多く、審査があり採択されないと受給できません。助成金は厚生労働省系の制度が多く、要件を満たせば原則受給できます。どちらも返済不要の資金です。補助金は事業計画のコンペティション型、助成金は条件充足型と捉えるとわかりやすいでしょう。",
  },
  {
    question: "どちらを先に検討すべきですか？",
    answer: "時間に余裕があるなら、まず補助金・助成金を検討しましょう。返済不要で実質的にタダの資金だからです。一方、急ぎの資金需要がある場合はファクタリングを優先してください。理想的には、中長期の設備投資には補助金、短期の運転資金にはファクタリングという使い分けがベストです。",
  },
  {
    question: "ファクタリングの手数料は補助金の対象経費になりますか？",
    answer: "原則として、ファクタリングの手数料は補助金の対象経費にはなりません。補助金は申請した事業に直接必要な経費のみが対象であり、資金調達コスト（ファクタリング手数料や融資の利息）は対象外です。ただし、一部の補助金制度では金融費用が認められる場合もあるため、個別の補助金要項を確認してください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリング vs 補助金・助成金｜併用可能？メリットデメリット比較",
  description: "ファクタリングと補助金・助成金の違いと併用方法を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/vs-subsidy/" },
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
    { "@type": "ListItem", position: 3, name: "vs 補助金・助成金", item: "https://factoring-partner.pages.dev/articles/vs-subsidy/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function VsSubsidyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "vs 補助金・助成金" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">比較ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング vs 補助金・助成金
            <br className="hidden md:block" />
            併用可能？メリットデメリット比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            返済不要の補助金・助成金とスピード重視のファクタリング。それぞれの特徴と併用のメリットを解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#comparison" className="hover:underline">1. 比較表で見る違い</a></li>
            <li><a href="#subsidy-overview" className="hover:underline">2. 補助金・助成金の基本</a></li>
            <li><a href="#merits" className="hover:underline">3. それぞれのメリット・デメリット</a></li>
            <li><a href="#combination" className="hover:underline">4. 併用の活用法</a></li>
            <li><a href="#caution" className="hover:underline">5. 注意点</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">比較表で見る違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-left">ファクタリング</th>
                  <th className="border border-primary p-3 text-left">補助金・助成金</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, i) => (
                  <tr key={item.label} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}>
                    <td className="border border-border p-3 font-semibold">{item.label}</td>
                    <td className="border border-border p-3">{item.factoring}</td>
                    <td className="border border-border p-3">{item.subsidy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="subsidy-overview" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">補助金・助成金の基本</h2>
          <p className="mb-6 leading-relaxed text-text-light">補助金・助成金は国や自治体が提供する返済不要の資金です。ファクタリングと比較するために、基本的な特徴を押さえておきましょう。</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">補助金</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>経済産業省・中小企業庁系が多い</li>
                <li>審査あり（採択率は30%〜50%程度）</li>
                <li>事業計画書の提出が必要</li>
                <li>例：ものづくり補助金、IT導入補助金、小規模事業者持続化補助金</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">助成金</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>厚生労働省系が多い</li>
                <li>要件を満たせば原則受給可能</li>
                <li>雇用関連の制度が中心</li>
                <li>例：キャリアアップ助成金、雇用調整助成金、トライアル雇用助成金</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            <strong className="text-accent">重要：</strong>補助金・助成金は原則「後払い」です。事業を実施し、報告書を提出して審査を受けた後に入金されます。事業実施中の資金は自己負担であり、この間の運転資金が課題になります。
          </p>
        </section>

        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">それぞれのメリット・デメリット</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-bold text-secondary">ファクタリング</h3>
              <div className="space-y-3">
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="text-sm font-semibold text-secondary">メリット</p>
                  <ul className="mt-1 space-y-1 text-sm text-text-light">
                    <li>- 最短即日で資金化</li>
                    <li>- 審査がシンプル</li>
                    <li>- 資金使途が自由</li>
                    <li>- 年間を通じて利用可能</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="text-sm font-semibold text-accent">デメリット</p>
                  <ul className="mt-1 space-y-1 text-sm text-text-light">
                    <li>- 手数料が発生（2%〜20%）</li>
                    <li>- 売掛金の範囲内でしか調達できない</li>
                    <li>- 恒常利用はコスト増</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-bold text-primary">補助金・助成金</h3>
              <div className="space-y-3">
                <div className="rounded-lg bg-primary-light p-4">
                  <p className="text-sm font-semibold text-primary">メリット</p>
                  <ul className="mt-1 space-y-1 text-sm text-text-light">
                    <li>- 返済不要（実質タダ）</li>
                    <li>- 数十万〜数千万円の大型資金</li>
                    <li>- 事業の信用力向上にも寄与</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="text-sm font-semibold text-accent">デメリット</p>
                  <ul className="mt-1 space-y-1 text-sm text-text-light">
                    <li>- 入金まで数ヶ月〜1年</li>
                    <li>- 申請手続きが複雑</li>
                    <li>- 採択されない可能性あり</li>
                    <li>- 資金使途が限定される</li>
                    <li>- 募集期間が限られる</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="combination" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">併用の活用法</h2>
          <p className="mb-6 leading-relaxed text-text-light">ファクタリングと補助金・助成金は併用可能です。具体的な活用法を紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">パターン1：補助金入金までのつなぎ資金</h3>
              <p className="text-sm leading-relaxed text-text-light">補助金は後払いのため、事業実施中の運転資金が不足しがちです。その間の資金をファクタリングで確保し、補助金入金後にファクタリングの利用を停止するパターンです。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">パターン2：設備投資+運転資金の組み合わせ</h3>
              <p className="text-sm leading-relaxed text-text-light">IT導入補助金で業務システムを導入し、導入期間中の既存事業の運転資金をファクタリングで確保。設備投資と日常の資金繰りを両立させるパターンです。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">パターン3：補助金不採択時の代替手段</h3>
              <p className="text-sm leading-relaxed text-text-light">補助金に申請したが不採択だった場合、急ぎの資金需要にはファクタリングで対応。次回の補助金募集まで事業を継続する資金を確保します。</p>
            </div>
          </div>
        </section>

        {/* ── 主要な補助金制度とファクタリングの関係 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">主要な補助金制度とファクタリング併用のポイント</h2>
          <p className="mb-6 leading-relaxed text-text-light">中小企業が活用できる主要な補助金制度と、ファクタリングとの併用のポイントを紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">ものづくり補助金（ものづくり・商業・サービス生産性向上促進補助金）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                補助上限額は750万円〜5,000万円（類型による）。設備投資やシステム導入が対象です。事業実施後の精算払いのため、設備の購入費用は先に自己負担する必要があります。この間の運転資金が不足する場合、売掛金のファクタリングで賄うことが可能です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">小規模事業者持続化補助金</h3>
              <p className="text-sm leading-relaxed text-text-light">
                補助上限額は50万円〜200万円（類型による）。広告宣伝費、展示会出展費、設備導入費などが対象です。少額ですが申請しやすく、小規模事業者にとっては貴重な資金源です。補助金入金は事業実施後3〜6ヶ月かかることもあるため、その間の運転資金にファクタリングが活用できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">IT導入補助金</h3>
              <p className="text-sm leading-relaxed text-text-light">
                補助上限額は5万〜450万円。会計ソフト、受発注システム、ECサイト構築などのIT導入費用が対象です。IT化により業務効率が上がると請求書の発行・管理もスムーズになり、ファクタリングの利用もしやすくなります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">キャリアアップ助成金</h3>
              <p className="text-sm leading-relaxed text-text-light">
                非正規雇用労働者の正社員化や処遇改善に対する助成金。1人あたり最大80万円。人件費の増加による資金繰りへの影響をファクタリングで緩和しつつ、助成金で長期的にコストを回収する戦略が有効です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 資金調達手段の全体マップ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">中小企業の資金調達手段の全体マップ</h2>
          <p className="mb-6 leading-relaxed text-text-light">ファクタリングと補助金・助成金を含む、中小企業が利用できる資金調達手段を「スピード」と「コスト」で整理します。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">手段</th>
                  <th className="border border-primary p-3 text-left">スピード</th>
                  <th className="border border-primary p-3 text-left">コスト</th>
                  <th className="border border-primary p-3 text-left">最適な場面</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">ファクタリング</td>
                  <td className="border border-border p-3">即日〜数日</td>
                  <td className="border border-border p-3">手数料2%〜20%</td>
                  <td className="border border-border p-3">急ぎの運転資金</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">補助金・助成金</td>
                  <td className="border border-border p-3">数ヶ月〜1年</td>
                  <td className="border border-border p-3">無料（返済不要）</td>
                  <td className="border border-border p-3">設備投資・事業拡大</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">銀行融資</td>
                  <td className="border border-border p-3">2週間〜1ヶ月</td>
                  <td className="border border-border p-3">年利1%〜5%</td>
                  <td className="border border-border p-3">計画的な大型資金調達</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">ビジネスローン</td>
                  <td className="border border-border p-3">即日〜1週間</td>
                  <td className="border border-border p-3">年利5%〜18%</td>
                  <td className="border border-border p-3">少額のつなぎ資金</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">クラウドファンディング</td>
                  <td className="border border-border p-3">1〜3ヶ月</td>
                  <td className="border border-border p-3">10%〜20%+リターン</td>
                  <td className="border border-border p-3">新商品の開発・PR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">補助金の受給権はファクタリングの対象外</h3>
              <p className="text-sm leading-relaxed text-text-light">補助金・助成金の受給権（まだ入金されていない補助金）は売掛債権ではないため、ファクタリングの対象にはなりません。ファクタリングで資金化できるのは、あくまで事業活動で発生した売掛金です。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">ファクタリング手数料は補助対象経費にならない</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリングの手数料は、ほとんどの補助金制度で対象経費として認められません。手数料は自己負担となるため、コスト計算に含めて経営判断を行ってください。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">補助金の申請には専門家の支援を活用する</h3>
              <p className="text-sm leading-relaxed text-text-light">補助金の申請書作成は複雑で、初めての方には難しいことがあります。中小企業診断士や行政書士などの専門家の支援を受けると、採択率が上がります。各都道府県の「よろず支援拠点」では無料で相談が可能です。</p>
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
            <Link href="/articles/vs-crowdfunding/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">vs クラウドファンディング</p>
              <p className="mt-1 text-sm text-text-light">資金調達手段を比較</p>
            </Link>
            <Link href="/articles/cashflow-tips/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">資金繰り改善方法7選</p>
              <p className="mt-1 text-sm text-text-light">複数の資金調達手段を解説</p>
            </Link>
            <Link href="/articles/startup/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">創業・スタートアップ向け</p>
              <p className="mt-1 text-sm text-text-light">創業期の資金調達ガイド</p>
            </Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">ファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">補助金入金までのつなぎ資金に最適。おすすめ会社を手数料・入金速度で比較できます。</p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
