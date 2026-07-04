import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリング手数料の内訳を徹底解説｜買取手数料・事務手数料・登記費用",
  description:
    "ファクタリングの手数料内訳を徹底解説。買取手数料・事務手数料・債権譲渡登記費用・振込手数料など全コストを項目別に分解し、2社間・3社間の相場比較と手数料を安くする具体的な方法を紹介します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/fee-breakdown/",
  },
  openGraph: {
    title:
      "ファクタリング手数料の内訳を徹底解説｜買取手数料・事務手数料・登記費用",
    description:
      "ファクタリング手数料の内訳を項目別に分解。買取手数料・事務手数料・登記費用の相場と節約方法を解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/fee-breakdown/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const feeItems = [
  {
    name: "買取手数料（掛け目手数料）",
    range2sha: "8%〜18%",
    range3sha: "1%〜9%",
    description:
      "ファクタリング手数料の中核を成す費用で、売掛債権の額面から差し引かれる割引率です。売掛先の信用力・売掛金の金額・支払いサイト・取引実績によって変動します。2社間は回収リスクが高いため手数料が高く、3社間は売掛先から直接回収できるため安くなります。",
    typical: "全体コストの80%〜90%を占める",
  },
  {
    name: "事務手数料",
    range2sha: "0円〜5万円",
    range3sha: "0円〜3万円",
    description:
      "契約手続きや書類確認に伴う事務的な費用です。ファクタリング会社によって「審査手数料」「契約手数料」「取扱手数料」など名称が異なることがあります。オンライン完結型のサービスでは無料とする会社が増えています。初回利用時のみ発生し、2回目以降は無料になるケースもあります。",
    typical: "無料〜数万円程度",
  },
  {
    name: "債権譲渡登記費用",
    range2sha: "3万円〜8万円",
    range3sha: "不要（原則）",
    description:
      "2社間ファクタリングでは、ファクタリング会社が自社の権利を保全するために債権譲渡登記を求めることがあります。登記費用には、登録免許税（7,500円）と司法書士報酬（2万〜5万円程度）が含まれます。登記の抹消にも費用がかかる場合があります。オンライン完結型のサービスでは登記不要のケースが多いです。",
    typical: "2社間の場合のみ発生する可能性あり",
  },
  {
    name: "振込手数料",
    range2sha: "0円〜880円",
    range3sha: "0円〜880円",
    description:
      "買取金額を利用者の口座に振り込む際の手数料です。多くのファクタリング会社では自社負担としていますが、利用者負担のケースもあります。金額としては少額ですが、複数回利用する場合は積み重なるため確認しておくべきです。",
    typical: "無料〜880円程度",
  },
  {
    name: "出張費・交通費",
    range2sha: "0円〜3万円",
    range3sha: "0円〜3万円",
    description:
      "対面での面談が必要な場合、ファクタリング会社の担当者が出張する際の交通費が請求されることがあります。特に地方の企業がファクタリング会社の本社まで距離がある場合に発生しやすいです。オンライン完結型のサービスでは発生しません。",
    typical: "対面型のみ発生する可能性あり",
  },
  {
    name: "印紙税",
    range2sha: "200円〜",
    range3sha: "200円〜",
    description:
      "契約書に貼付する収入印紙代です。契約金額によって税額が変わり、100万円以下は200円、100万円超〜500万円以下は2,000円、500万円超〜1,000万円以下は1万円です。電子契約の場合は不要です。クラウドサインなどを利用する会社では印紙税がかかりません。",
    typical: "電子契約なら不要",
  },
];

const costExamples = [
  {
    title: "ケース1：2社間ファクタリング（対面・登記あり）",
    amount: "500万円",
    items: [
      { name: "買取手数料（10%）", cost: "50万円" },
      { name: "事務手数料", cost: "3万円" },
      { name: "債権譲渡登記費用", cost: "5万円" },
      { name: "振込手数料", cost: "880円" },
      { name: "印紙税", cost: "2,000円" },
    ],
    total: "約58.3万円",
    receive: "約441.7万円",
    effectiveRate: "約11.7%",
  },
  {
    title: "ケース2：2社間ファクタリング（オンライン・登記なし）",
    amount: "500万円",
    items: [
      { name: "買取手数料（8%）", cost: "40万円" },
      { name: "事務手数料", cost: "無料" },
      { name: "債権譲渡登記費用", cost: "不要" },
      { name: "振込手数料", cost: "無料" },
      { name: "印紙税（電子契約）", cost: "不要" },
    ],
    total: "40万円",
    receive: "460万円",
    effectiveRate: "8.0%",
  },
  {
    title: "ケース3：3社間ファクタリング",
    amount: "500万円",
    items: [
      { name: "買取手数料（3%）", cost: "15万円" },
      { name: "事務手数料", cost: "1万円" },
      { name: "債権譲渡登記費用", cost: "不要" },
      { name: "振込手数料", cost: "440円" },
      { name: "印紙税", cost: "2,000円" },
    ],
    total: "約16.2万円",
    receive: "約483.8万円",
    effectiveRate: "約3.2%",
  },
];

const hiddenCostWarnings = [
  {
    title: "「手数料○%〜」の下限だけで判断しない",
    detail:
      "広告に記載されている手数料は下限値であることが多く、実際に提示される手数料は売掛先の信用力や金額によって大きく変わります。手数料1%〜と記載があっても、初回利用で1%が適用されるケースは極めて稀です。見積もりを取って実際の手数料を確認しましょう。",
  },
  {
    title: "登記費用が手数料に含まれているか確認する",
    detail:
      "「手数料10%」と提示されても、別途で債権譲渡登記費用5万円が加算される場合があります。総コストで比較するために、手数料以外に発生する費用をすべて事前に確認し、見積書に明記してもらうことが重要です。",
  },
  {
    title: "事務手数料の名称に注意する",
    detail:
      "「審査手数料」「コンサル料」「調査費用」「保証料」など、様々な名目で追加費用を請求する業者があります。正規のファクタリング会社であれば、すべての費用を事前に明示してくれます。不明な費用項目がある場合は必ず内訳を確認してください。",
  },
  {
    title: "契約解除時の違約金に注意する",
    detail:
      "一部のファクタリング会社では、契約締結後のキャンセルに対して違約金を設定しています。契約前に解約条件や違約金の有無を確認し、不当な縛りがないか注意しましょう。正規の会社であれば、契約前の見積もり段階でのキャンセルは自由です。",
  },
  {
    title: "年率換算で銀行融資と比較しない",
    detail:
      "ファクタリング手数料は一回きりの費用であり、融資のように年率で計算されるものではありません。手数料10%を年率に換算すると120%以上になることもありますが、ファクタリングは1回の売掛金売却に対する費用であるため、年率換算での比較は適切ではありません。",
  },
];

const reductionTips = [
  {
    title: "信用力の高い売掛先の請求書を選ぶ",
    description:
      "上場企業・大手企業・官公庁向けの売掛金は、回収リスクが低いため手数料が安くなります。複数の売掛金がある場合は、最も信用力の高い売掛先の請求書を優先的に提出しましょう。",
    impact: "手数料が2%〜5%下がる可能性",
  },
  {
    title: "3社間ファクタリングを検討する",
    description:
      "取引先にファクタリングの利用を知られても問題ない場合は、3社間ファクタリングの方が手数料が大幅に安くなります。建設業や医療機関では、3社間が一般的に利用されています。",
    impact: "2社間と比べて手数料が5%〜10%以上安くなる",
  },
  {
    title: "相見積もりを取る",
    description:
      "複数のファクタリング会社から見積もりを取ることで、各社の手数料を比較できます。「他社では○%で提示されている」と伝えることで、交渉材料にもなります。最低でも2〜3社から見積もりを取ることをおすすめします。",
    impact: "1%〜3%の手数料差が出ることが多い",
  },
  {
    title: "リピート利用で手数料を下げる",
    description:
      "多くのファクタリング会社では、2回目以降の利用で手数料が下がる傾向があります。これは利用者の信頼性が確認されたためであり、ビートレーディングやアクセルファクターではリピート割引の適用例が報告されています。",
    impact: "2回目以降は1%〜3%程度の引き下げが一般的",
  },
  {
    title: "オンライン完結型を選ぶ",
    description:
      "オンライン完結型のファクタリングサービスは、対面型に比べて運営コストが低いため、手数料も安く設定されていることが多いです。また、登記費用や出張費用が不要なため、総コストを抑えられます。",
    impact: "登記費用3〜8万円＋事務手数料を節約可能",
  },
  {
    title: "支払いサイトが短い売掛金を選ぶ",
    description:
      "支払いまでの期間が短い売掛金ほど、ファクタリング会社のリスクが低くなるため手数料が安くなります。60日以上の支払いサイトよりも、30日以内の売掛金の方が有利な条件を引き出しやすいです。",
    impact: "支払いサイトが半分になると手数料が1%〜2%下がることも",
  },
];

const companyFees = [
  { name: "ビートレーディング", twoSha: "4%〜12%", threeSha: "2%〜9%", others: "登記不要・事務手数料無料", note: "業界大手。リピート利用で手数料交渉可能" },
  { name: "QuQuMo", twoSha: "1%〜", threeSha: "ー", others: "登記不要・手数料以外の費用なし", note: "下限1%は業界最安水準。オンライン完結" },
  { name: "OLTA", twoSha: "2%〜9%", threeSha: "ー", others: "登記不要・手数料以外の費用なし", note: "上限9%の安心感。AI審査" },
  { name: "ペイトナー", twoSha: "一律10%", threeSha: "ー", others: "登記不要・手数料以外の費用なし", note: "手数料が明瞭で分かりやすい" },
  { name: "ラボル", twoSha: "一律10%", threeSha: "ー", others: "登記不要・手数料以外の費用なし", note: "24時間365日対応" },
  { name: "アクセルファクター", twoSha: "0.5%〜12.0%", threeSha: "ー", others: "登記不要のケースあり", note: "審査通過率93.3%。少額対応" },
  { name: "PMG", twoSha: "1%〜12.8%", threeSha: "1%〜5%", others: "要確認", note: "大口案件に強い。法人向け" },
  { name: "日本中小企業金融サポート機構", twoSha: "1.5%〜", threeSha: "1.5%〜", others: "登記不要・手数料以外の費用なし", note: "非営利法人。手数料が良心的" },
];

const faqs = [
  {
    question: "ファクタリング手数料の相場はどのくらいですか？",
    answer:
      "2社間ファクタリングの手数料相場は8%〜18%、3社間ファクタリングは1%〜9%が一般的です。ただし、売掛先の信用力・売掛金の金額・支払いサイトによって大きく変動します。上場企業や大手企業が売掛先の場合は2社間でも5%〜10%程度に抑えられることがあります。",
  },
  {
    question: "手数料以外にかかる費用はありますか？",
    answer:
      "ファクタリング会社によっては、事務手数料（0円〜5万円）、債権譲渡登記費用（3万〜8万円）、振込手数料（0円〜880円）、出張費用（0円〜3万円）、印紙税（200円〜）が別途発生する場合があります。オンライン完結型のサービスでは手数料以外の費用がかからないケースが多いです。必ず見積もり時に総コストを確認しましょう。",
  },
  {
    question: "手数料が安すぎるファクタリング会社は危険ですか？",
    answer:
      "手数料が1%〜3%と安い場合でも、正規のファクタリング会社であれば問題ありません。ただし、手数料が不自然に安い場合は、別途で高額な事務手数料やコンサル料を請求される可能性があります。手数料の安さだけでなく、総コストと会社の信頼性を総合的に判断しましょう。",
  },
  {
    question: "2社間と3社間で手数料が違うのはなぜですか？",
    answer:
      "2社間ファクタリングでは、ファクタリング会社が売掛先から直接代金を回収できず、利用者を通じた間接回収となるため、回収リスクが高くなります。このリスク分が手数料に上乗せされるため、3社間より手数料が高くなります。3社間では売掛先が直接ファクタリング会社に支払うため、回収リスクが低く、手数料を安く設定できます。",
  },
  {
    question: "手数料の交渉はできますか？",
    answer:
      "はい、多くのファクタリング会社で手数料の交渉は可能です。特に効果的な交渉方法は、(1)他社の見積もりを提示する相見積もり、(2)リピート利用による信頼構築、(3)信用力の高い売掛先の提出、(4)大口の売掛金の提出です。ただし、手数料はリスク評価に基づいて算出されているため、大幅な値下げは難しい場合もあります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ファクタリング手数料の内訳を徹底解説｜買取手数料・事務手数料・登記費用",
  description:
    "ファクタリング手数料の内訳を項目別に分解。買取手数料・事務手数料・登記費用の相場と節約方法を解説。",
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
      "https://hyogo-shihoushoshi.jp/articles/fee-breakdown/",
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
      name: "コラム",
      item: "https://hyogo-shihoushoshi.jp/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ファクタリング手数料の内訳",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function FeeBreakdownPage() {
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
          { label: "手数料の内訳" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-secondary px-4 py-1 text-sm font-bold text-white">
            手数料深掘り
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング手数料の内訳を徹底解説
            <br className="hidden md:block" />
            買取手数料・事務手数料・登記費用
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングの手数料は「買取手数料」だけではありません。事務手数料・債権譲渡登記費用・振込手数料など、全コストを項目別に分解し、実質負担額を正しく把握する方法を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#fee-items" className="hover:underline">1. ファクタリング手数料の内訳6項目</a></li>
            <li><a href="#cost-examples" className="hover:underline">2. 実際のコストシミュレーション</a></li>
            <li><a href="#company-fees" className="hover:underline">3. 主要ファクタリング会社の手数料比較</a></li>
            <li><a href="#hidden-costs" className="hover:underline">4. 隠れたコストに注意</a></li>
            <li><a href="#reduction-tips" className="hover:underline">5. 手数料を安くする6つの方法</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 手数料の内訳 ─── */}
        <section id="fee-items" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング手数料の内訳6項目
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングを利用する際に発生する費用は、主に6つの項目に分かれます。「手数料○%」と表記される買取手数料だけでなく、その他の費用も含めた総コストを把握することが、正しい比較の第一歩です。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            以下の表で各費用項目の内容と相場を確認しましょう。なお、すべての費用が必ず発生するわけではなく、ファクタリング会社やサービス形態によって異なります。
          </p>

          <div className="space-y-6">
            {feeItems.map((item, index) => (
              <div
                key={item.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-text-main">{item.name}</h3>
                    <div className="mt-2 flex flex-wrap gap-3">
                      <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-bold text-primary">
                        2社間：{item.range2sha}
                      </span>
                      <span className="rounded-full bg-section-bg px-3 py-1 text-xs font-bold text-text-light">
                        3社間：{item.range3sha}
                      </span>
                    </div>
                    <p className="mt-3 leading-relaxed text-text-light">{item.description}</p>
                    <p className="mt-2 text-sm font-semibold text-accent">{item.typical}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-2 font-bold text-secondary">ポイント</p>
            <p className="text-sm leading-relaxed text-text-light">
              手数料の大部分を占めるのは買取手数料です。事務手数料や登記費用は、オンライン完結型のサービスでは無料になることが多く、総コストを大幅に抑えられます。見積もりの際は「手数料以外にかかる費用はありますか？」と必ず確認しましょう。
            </p>
          </div>
        </section>

        {/* ── コストシミュレーション ─── */}
        <section id="cost-examples" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            実際のコストシミュレーション
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            売掛金500万円をファクタリングした場合の総コストを、3つのパターンでシミュレーションします。同じ売掛金額でも、利用するサービスの形態によって実質負担額が大きく異なることがわかります。
          </p>

          <div className="space-y-8">
            {costExamples.map((example) => (
              <div
                key={example.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-4 text-lg font-bold text-primary">{example.title}</h3>
                <p className="mb-3 text-sm text-text-light">売掛金額面：{example.amount}</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="px-3 py-2 text-left font-semibold text-text-main">費用項目</th>
                        <th className="px-3 py-2 text-right font-semibold text-text-main">金額</th>
                      </tr>
                    </thead>
                    <tbody>
                      {example.items.map((item) => (
                        <tr key={item.name} className="border-b border-border/50">
                          <td className="px-3 py-2 text-text-light">{item.name}</td>
                          <td className="px-3 py-2 text-right text-text-main">{item.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-primary">
                        <td className="px-3 py-2 font-bold text-text-main">総コスト</td>
                        <td className="px-3 py-2 text-right font-bold text-accent">{example.total}</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-bold text-text-main">受取金額</td>
                        <td className="px-3 py-2 text-right font-bold text-secondary">{example.receive}</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-bold text-text-main">実質手数料率</td>
                        <td className="px-3 py-2 text-right font-bold text-primary">{example.effectiveRate}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-primary-light p-4">
            <p className="text-sm leading-relaxed text-text-light">
              <strong className="text-primary">ポイント：</strong>
              同じ500万円の売掛金でも、ケース1（対面・登記あり）とケース2（オンライン・登記なし）では約18万円の差が出ます。さらに3社間（ケース3）では総コストが16万円台まで抑えられます。
            </p>
          </div>
        </section>

        {/* ── 主要会社の手数料比較 ─── */}
        <section id="company-fees" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            主要ファクタリング会社の手数料比較
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            主要なファクタリング会社の手数料体系と、手数料以外の費用の有無を一覧で比較します。手数料だけでなく総コストで比較することが重要です。
          </p>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold whitespace-nowrap">会社名</th>
                  <th className="px-3 py-3 font-semibold whitespace-nowrap">2社間</th>
                  <th className="px-3 py-3 font-semibold whitespace-nowrap">3社間</th>
                  <th className="px-3 py-3 font-semibold">その他費用</th>
                </tr>
              </thead>
              <tbody>
                {companyFees.map((company, index) => (
                  <tr
                    key={company.name}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-3 py-3 font-semibold text-text-main whitespace-nowrap">{company.name}</td>
                    <td className="px-3 py-3 text-text-light whitespace-nowrap">{company.twoSha}</td>
                    <td className="px-3 py-3 text-text-light whitespace-nowrap">{company.threeSha}</td>
                    <td className="px-3 py-3 text-text-light">{company.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-3">
            {companyFees.map((company) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-4">
                <p className="font-semibold text-text-main">{company.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-text-light">{company.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 隠れたコスト ─── */}
        <section id="hidden-costs" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            隠れたコストに注意
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの手数料比較で見落としがちなポイントを解説します。「思ったより高くなった」を防ぐために、以下の点を必ず確認してください。
          </p>

          <div className="space-y-4">
            {hiddenCostWarnings.map((warning, index) => (
              <div
                key={warning.title}
                className="rounded-lg border border-border bg-white p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    !
                  </span>
                  <div>
                    <h3 className="font-bold text-text-main">{warning.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">{warning.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 手数料を安くする方法 ─── */}
        <section id="reduction-tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料を安くする6つの方法
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの手数料は交渉や工夫で引き下げられる余地があります。以下の6つの方法で総コストの削減を目指しましょう。
          </p>

          <div className="space-y-6">
            {reductionTips.map((tip, index) => (
              <div
                key={tip.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{tip.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{tip.description}</p>
                    <p className="mt-2 text-sm font-semibold text-secondary">{tip.impact}</p>
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
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border bg-white"
              >
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

                {/* ── 関連ツール・データ ─── */}
                <section className="mb-12">
                  <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
                    <p className="mb-3 font-bold text-primary">手数料を試算・比較する</p>
                    <ul className="space-y-2 text-sm text-text-light">
                    <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
                    <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
                    <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
                    <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
                    </ul>
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
              <p className="font-bold text-primary">手数料が安いファクタリング会社ランキング</p>
              <p className="mt-1 text-sm text-text-light">
                手数料相場と節約術をランキング形式で紹介
              </p>
            </Link>
            <Link
              href="/articles/fee-negotiation/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリング手数料の交渉術</p>
              <p className="mt-1 text-sm text-text-light">
                手数料を引き下げる交渉のコツを解説
              </p>
            </Link>
            <Link
              href="/articles/2sha-vs-3sha/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">2社間 vs 3社間ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                仕組み・手数料・速度の違いを比較
              </p>
            </Link>
            <Link
              href="/articles/contract-checklist/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリング契約チェックリスト</p>
              <p className="mt-1 text-sm text-text-light">
                契約前に確認すべきポイントをリスト化
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            手数料の総コストで比較しましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            買取手数料だけでなく、事務手数料・登記費用を含めた総コストで比較。あなたに最適なファクタリング会社が見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
