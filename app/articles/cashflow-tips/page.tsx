import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "中小企業の資金繰り改善方法7選｜ファクタリング以外の選択肢も解説",
  description:
    "中小企業の資金繰り改善方法を7つ紹介。ファクタリング・銀行融資・ビジネスローン・補助金助成金・クラウドファンディング・手形割引・リースバックを比較表で解説。状況別おすすめも紹介。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/cashflow-tips/",
  },
  openGraph: {
    title: "中小企業の資金繰り改善方法7選｜ファクタリング以外の選択肢も解説",
    description:
      "資金繰り改善方法7選を比較表で解説。状況別おすすめも紹介。",
    url: "https://factoring-partner.pages.dev/articles/cashflow-tips/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const methods = [
  {
    name: "ファクタリング",
    description:
      "売掛債権（請求書）をファクタリング会社に売却し、支払い期日前に現金化するサービスです。融資ではなく債権の売買であるため、負債にならず信用情報にも影響しません。最短即日で資金化できるスピードが最大の特徴です。",
    merit: "最短即日で資金化、負債にならない、審査が柔軟、担保不要",
    demerit: "手数料がかかる（2〜30%）、売掛金の範囲内でしか調達できない",
    speed: "最短即日",
    cost: "手数料 2%〜30%",
    suited: "急ぎの資金需要、銀行融資の審査に通らない場合、負債を増やしたくない場合",
  },
  {
    name: "銀行融資",
    description:
      "銀行から資金を借り入れる最も一般的な資金調達方法です。金利が低く、大口の資金調達が可能ですが、審査に時間がかかり、担保や保証人を求められることがあります。日本政策金融公庫の融資制度も含まれます。",
    merit: "金利が低い（年1〜5%）、大口調達可能、長期返済、信用構築できる",
    demerit: "審査に時間がかかる（2週間〜2ヶ月）、赤字だと審査に不利、担保が必要な場合あり",
    speed: "2週間〜2ヶ月",
    cost: "年利 1%〜5%程度",
    suited: "時間に余裕がある場合、大規模な設備投資、長期運転資金",
  },
  {
    name: "ビジネスローン",
    description:
      "ノンバンク（消費者金融系・信販系など）が提供する事業者向けのローンです。銀行融資よりも審査が速く柔軟ですが、金利は高めです。無担保・無保証人で利用できるものが多く、オンラインで申し込めるサービスも増えています。",
    merit: "審査が速い（最短即日）、無担保・無保証人、銀行融資より審査が柔軟",
    demerit: "金利が高い（年5〜18%）、借入限度額が比較的小さい、負債として計上される",
    speed: "最短即日〜数日",
    cost: "年利 5%〜18%",
    suited: "銀行融資が間に合わない場合、少額〜中額の資金需要、つなぎ資金",
  },
  {
    name: "補助金・助成金",
    description:
      "国や地方自治体が提供する返済不要の資金援助です。ものづくり補助金、IT導入補助金、小規模事業者持続化補助金、キャリアアップ助成金など、目的に応じて様々な制度があります。ただし、申請から受給まで時間がかかり、審査があります。",
    merit: "返済不要、金額が大きいものもある（数百万〜数千万円）",
    demerit: "申請手続きが煩雑、審査〜受給まで数ヶ月かかる、後払い（先に自己資金が必要）、採択率は100%ではない",
    speed: "数ヶ月（申請〜受給）",
    cost: "無料（返済不要）",
    suited: "設備投資、新規事業、人材育成など特定の目的がある場合",
  },
  {
    name: "クラウドファンディング",
    description:
      "インターネットを通じて不特定多数の人から資金を集める方法です。購入型（リターン型）、融資型（ソーシャルレンディング）、株式型などがあります。資金調達と同時にプロモーション効果も期待できます。",
    merit: "返済不要（購入型）、プロモーション効果、事業の需要を検証できる",
    demerit: "目標金額に達しない場合あり、手数料がかかる、プロジェクト準備に時間と労力が必要",
    speed: "1〜3ヶ月",
    cost: "プラットフォーム手数料 5%〜20%",
    suited: "新商品・新サービスの立ち上げ、プロモーションを兼ねた資金調達",
  },
  {
    name: "手形割引",
    description:
      "受け取った約束手形を銀行や手形割引業者に買い取ってもらい、満期日前に現金化する方法です。ファクタリングと似ていますが、対象が「手形」である点が異なります。手形取引がある業種（建設業・製造業など）で利用されています。",
    merit: "割引率が比較的低い（年3〜15%程度）、手形があれば利用しやすい",
    demerit: "手形取引が減少傾向、手形が不渡りの場合は返還請求あり（リコース取引）",
    speed: "即日〜数日",
    cost: "割引率 年3%〜15%",
    suited: "手形での取引がある企業、建設業・製造業",
  },
  {
    name: "リースバック",
    description:
      "所有している不動産や設備機器をリース会社に売却し、そのまま賃借（リース）して使い続ける方法です。資産を売却して資金を調達しつつ、事業に必要な資産は引き続き使用できます。",
    merit: "まとまった資金を調達できる、資産を使い続けられる、固定資産税が不要になる",
    demerit: "リース料が発生する、長期的にはコストが高くなる可能性、資産を失う",
    speed: "数週間〜1ヶ月",
    cost: "リース料（月額）",
    suited: "不動産や高額設備を保有している企業、バランスシートの改善が必要な場合",
  },
];

const comparisonTable = [
  {
    label: "資金化スピード",
    values: ["最短即日", "2週間〜2ヶ月", "最短即日", "数ヶ月", "1〜3ヶ月", "即日〜数日", "数週間"],
  },
  {
    label: "コスト",
    values: ["手数料2〜30%", "年利1〜5%", "年利5〜18%", "無料", "5〜20%", "年3〜15%", "リース料"],
  },
  {
    label: "負債計上",
    values: ["なし", "あり", "あり", "なし", "なし", "なし", "なし"],
  },
  {
    label: "審査難易度",
    values: ["低", "高", "中", "中〜高", "なし", "中", "中"],
  },
  {
    label: "返済",
    values: ["不要", "分割返済", "分割返済", "不要", "不要", "不要", "リース料"],
  },
];

const situationRecommendations = [
  {
    situation: "急ぎで現金が必要（今日〜数日以内）",
    recommendation: "ファクタリング or ビジネスローン",
    reason:
      "ファクタリングは最短即日で売掛金を現金化できます。売掛金がない場合はビジネスローン（最短即日融資）が選択肢になります。",
  },
  {
    situation: "大規模な設備投資をしたい",
    recommendation: "銀行融資 + 補助金",
    reason:
      "大口の資金調達には金利の低い銀行融資が最適です。ものづくり補助金やIT導入補助金も活用すれば自己負担を軽減できます。",
  },
  {
    situation: "負債を増やしたくない",
    recommendation: "ファクタリング or 補助金",
    reason:
      "ファクタリングは融資ではないため負債になりません。補助金は返済不要です。どちらもバランスシートに悪影響を与えません。",
  },
  {
    situation: "赤字決算で銀行融資が通らない",
    recommendation: "ファクタリング",
    reason:
      "ファクタリングは売掛先の信用力が審査の中心です。赤字決算や税金滞納があっても、売掛先が大手企業なら審査に通る可能性が高いです。",
  },
  {
    situation: "新商品・新サービスの資金を集めたい",
    recommendation: "クラウドファンディング + 補助金",
    reason:
      "クラウドファンディングで資金調達とプロモーションを同時に行えます。補助金も新規事業向けの制度が充実しています。",
  },
  {
    situation: "毎月の資金繰りを安定させたい",
    recommendation: "銀行融資（運転資金枠）+ ファクタリング",
    reason:
      "銀行の当座貸越枠で日常的な資金繰りを安定させつつ、突発的な需要にはファクタリングで対応するのが効率的です。",
  },
];

const faqs = [
  {
    question: "最も速く資金を調達できる方法は何ですか？",
    answer:
      "最も速いのはファクタリングとビジネスローンです。ファクタリングは最短即日（10分〜数時間）で売掛金を現金化できます。ビジネスローンも最短即日の融資に対応しているサービスがあります。銀行融資は2週間〜2ヶ月かかるため、急ぎの場合は不向きです。",
  },
  {
    question: "返済不要の資金調達方法はありますか？",
    answer:
      "補助金・助成金は返済不要です。また、クラウドファンディング（購入型）も返済ではなくリターン（商品やサービス）で出資者に還元する形式です。ファクタリングも「返済」ではなく「売掛金の売却」であるため、借入の返済義務はありません。",
  },
  {
    question: "ファクタリングと銀行融資はどちらがおすすめですか？",
    answer:
      "状況によって異なります。急ぎの資金需要や審査に不安がある場合はファクタリング、時間に余裕があり大口の資金が必要な場合は銀行融資がおすすめです。両者を併用するのが最も効果的な戦略です。詳しくは「ファクタリング vs 銀行融資」の記事で解説しています。",
  },
  {
    question: "個人事業主でも利用できる資金調達方法は？",
    answer:
      "ファクタリング（個人事業主対応のサービス）、日本政策金融公庫の融資（マル経融資・新規開業資金）、ビジネスローン、小規模事業者持続化補助金、クラウドファンディングなど、個人事業主でも利用できる資金調達方法は多数あります。",
  },
  {
    question: "資金繰りが悪化する原因は何ですか？",
    answer:
      "主な原因は、(1)入金サイトと支払いサイトのミスマッチ（売掛金の入金前に経費の支払いが発生）、(2)売上の急激な増加（仕入れや人件費が先行）、(3)季節変動による売上の波、(4)取引先の支払い遅延、(5)過度な設備投資、(6)借入金の返済負担などです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "中小企業の資金繰り改善方法7選｜ファクタリング以外の選択肢も解説",
  description:
    "資金繰り改善方法7選を比較表で解説。状況別おすすめも紹介。",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
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
    "@id": "https://factoring-partner.pages.dev/articles/cashflow-tips/",
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
      name: "資金繰り改善方法7選",
      item: "https://factoring-partner.pages.dev/articles/cashflow-tips/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function CashflowTipsPage() {
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
          { label: "資金繰り改善方法7選" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            資金調達ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            中小企業の資金繰り改善方法7選
            <br className="hidden md:block" />
            ファクタリング以外の選択肢も解説
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリング・銀行融資・ビジネスローン・補助金など7つの資金調達方法を比較表で解説。状況別のおすすめも紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#methods" className="hover:underline">
                1. 資金繰り改善方法7選
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                2. 7つの方法を比較表で確認
              </a>
            </li>
            <li>
              <a href="#situation" className="hover:underline">
                3. 状況別おすすめ
              </a>
            </li>
            <li>
              <a href="#factoring-best" className="hover:underline">
                4. ファクタリングが最適なケース
              </a>
            </li>
            <li>
              <a href="#fundamental" className="hover:underline">
                5. 根本的な資金繰り改善策
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 資金繰り改善方法7選 ─── */}
        <section id="methods" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            資金繰り改善方法7選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            中小企業が利用できる資金調達・資金繰り改善の方法を7つ紹介します。それぞれの特徴、メリット・デメリット、向いている場面を詳しく解説します。
          </p>
          <div className="space-y-8">
            {methods.map((method, index) => (
              <div
                key={method.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">
                      {method.name}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {method.description}
                    </p>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      <div className="rounded-lg bg-teal-50 p-3">
                        <p className="text-xs font-semibold text-secondary">メリット</p>
                        <p className="mt-1 text-sm text-text-light">{method.merit}</p>
                      </div>
                      <div className="rounded-lg bg-orange-50 p-3">
                        <p className="text-xs font-semibold text-accent">デメリット</p>
                        <p className="mt-1 text-sm text-text-light">{method.demerit}</p>
                      </div>
                    </div>
                    <div className="mt-3 grid gap-3 rounded-lg bg-section-bg p-4 md:grid-cols-3">
                      <div>
                        <p className="text-xs font-semibold text-text-light">
                          資金化スピード
                        </p>
                        <p className="font-bold text-primary">{method.speed}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">コスト</p>
                        <p className="font-bold text-accent">{method.cost}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">
                          向いている場面
                        </p>
                        <p className="text-sm text-text-light">{method.suited}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            7つの方法を比較表で確認
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            7つの資金繰り改善方法を一覧表で比較します。自社の状況に合った方法を見つけてください。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold">比較項目</th>
                  {methods.map((m) => (
                    <th key={m.name} className="px-3 py-3 font-semibold whitespace-nowrap">
                      {m.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row) => (
                  <tr key={row.label} className="border-t border-border">
                    <td className="bg-section-bg px-3 py-3 font-semibold text-text-main whitespace-nowrap">
                      {row.label}
                    </td>
                    {row.values.map((val, i) => (
                      <td key={i} className="px-3 py-3 text-text-light whitespace-nowrap">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 状況別おすすめ ─── */}
        <section id="situation" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            状況別おすすめ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            どの資金調達方法が最適かは、企業の状況によって異なります。以下の状況別におすすめの方法を紹介します。
          </p>
          <div className="space-y-4">
            {situationRecommendations.map((item) => (
              <div
                key={item.situation}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-2 font-bold text-primary">{item.situation}</h3>
                <p className="mb-2 text-sm">
                  <span className="rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-bold text-secondary">
                    おすすめ
                  </span>{" "}
                  <strong className="text-text-main">{item.recommendation}</strong>
                </p>
                <p className="text-sm leading-relaxed text-text-light">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ファクタリングが最適なケース ─── */}
        <section id="factoring-best" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングが最適なケース
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            7つの方法の中でも、以下のケースではファクタリングが最も適した資金調達方法です。
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                今日〜明日中に現金が必要
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                従業員の給与、取引先への支払い、税金の納付期限など、すぐに現金が必要な場合。ファクタリングなら最短即日（10分〜数時間）で資金化できます。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                銀行融資の審査に落ちた
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                赤字決算、税金滞納、創業間もないなどの理由で銀行融資が通らなかった場合。ファクタリングは売掛先の信用力で審査されるため、利用者自身の信用力に不安があっても利用できます。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                借入れを増やしたくない
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                これ以上負債を増やすと自己資本比率が悪化する場合や、今後の融資審査に影響を与えたくない場合。ファクタリングは負債にならないオフバランス取引です。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                入金サイトが長い業種
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                建設業（60〜120日）、運送業（30〜60日）、IT業界（30〜60日）など、売掛金の入金までに時間がかかる業種。ファクタリングで入金サイトを大幅に短縮できます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 根本的な資金繰り改善策 ─── */}
        <section id="fundamental" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            根本的な資金繰り改善策
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングや融資は一時的な資金繰り改善策です。長期的に安定した経営を行うためには、以下のような根本的な改善策も並行して実施しましょう。
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">
                入金サイトの短縮交渉
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                取引先に対して支払い条件の見直しを交渉しましょう。月末締め翌月末払い（60日）を月末締め翌月15日払い（45日）に短縮するだけでも、キャッシュフローは大きく改善します。新規取引先との契約時は、できるだけ短い支払いサイトを設定しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">
                支払いサイトの延長
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                仕入先への支払いサイトを延長できないか交渉しましょう。入金サイトの短縮と支払いサイトの延長を同時に行うことで、資金繰りの余裕を生み出せます。ただし、下請法に抵触しないよう注意が必要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">
                在庫管理の最適化
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                過剰在庫は資金の滞留を招きます。適正在庫の管理、不良在庫の処分、仕入れロットの見直しなどにより、在庫に拘束される資金を削減しましょう。在庫管理システムの導入も効果的です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">
                固定費の見直し
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                賃料、保険料、通信費、サブスクリプション費用など、毎月の固定費を見直しましょう。テレワークの活用によるオフィス縮小、保険の見直し、不要なサービスの解約など、削減できる固定費がないか確認してください。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">
                資金繰り表の作成・管理
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                3ヶ月先、6ヶ月先までの資金繰り予測表を作成し、資金ショートのリスクを事前に把握しましょう。資金が不足する時期を早めに予測できれば、余裕を持って対策を打てます。会計ソフトのキャッシュフロー予測機能も活用しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── 黒字倒産を防ぐキャッシュフロー管理 ─── */}
        <section className="mb-16">
          <h3 className="mb-6 text-lg font-bold text-text-main md:text-xl">
            黒字倒産を防ぐためのキャッシュフロー管理
          </h3>
          <p className="mb-4 leading-relaxed text-text-light">
            J-Net21のデータによると、<strong className="text-text-main">倒産企業の約47%が黒字倒産</strong>です。損益計算書上は利益が出ているにもかかわらず、手元の現金が不足して支払いができなくなるケースは決して珍しくありません。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">1.</span>
                <span><strong className="text-text-main">原因は入金・出金サイクルのギャップ</strong>：売上は計上されていても、入金が2〜3ヶ月先になる一方、仕入れや人件費は毎月発生するため資金ショートが起きます</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">2.</span>
                <span><strong className="text-text-main">資金繰り表を毎月作成</strong>：3ヶ月先までの入出金を予測する資金繰り表を作成し、資金不足のリスクを事前に把握しましょう</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">3.</span>
                <span><strong className="text-text-main">「入金は早く、出金は遅く」が基本原則</strong>：入金サイクルを短縮し、支払い条件を見直すことでキャッシュフローを改善できます</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">4.</span>
                <span><strong className="text-text-main">ファクタリングは最も即効性の高い手段</strong>：入金を早める方法として、ファクタリングは最短即日で売掛金を現金化でき、最も即効性が高い資金繰り改善策です</span>
              </li>
            </ul>
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
                仕組み・種類・メリット・デメリットをわかりやすく解説
              </p>
            </Link>
            <Link
              href="/articles/vs-bank-loan/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリング vs 銀行融資</p>
              <p className="mt-1 text-sm text-text-light">
                メリット・デメリットを徹底比較
              </p>
            </Link>
            <Link
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">
                手数料を安くする5つのコツも紹介
              </p>
            </Link>
            <Link
              href="/articles/screening-criteria/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングの審査基準</p>
              <p className="mt-1 text-sm text-text-light">
                審査で見るポイントと通過率を上げる方法
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            最適なファクタリング会社を見つけましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            ファクタリングが資金繰り改善に最適と判断したら、まずは複数社の比較から。15社を手数料・入金速度・審査通過率で徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
