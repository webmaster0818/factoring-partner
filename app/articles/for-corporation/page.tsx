import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "法人向けファクタリングおすすめ5選｜中小企業の資金調達を比較",
  description:
    "法人向けファクタリング会社おすすめ5社を徹底比較。中小企業の資金調達に最適なサービスを手数料・入金スピード・買取上限額で比較し、2社間・3社間の使い分けや審査ポイントも解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/for-corporation/",
  },
  openGraph: {
    title:
      "法人向けファクタリングおすすめ5選｜中小企業の資金調達を比較",
    description:
      "法人向けファクタリング会社おすすめ5社を徹底比較。中小企業の資金調達に最適なサービスを手数料・入金スピード・買取上限額で比較します。",
    url: "https://factoring-partner.pages.dev/articles/for-corporation/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const top5 = [
  {
    rank: 1,
    name: "ビートレーディング",
    fee: "2%〜12%",
    speed: "最短2時間",
    maxAmount: "上限なし",
    type: "2社間・3社間",
    features: [
      "累計買取額1,300億円超の実績",
      "法人特化の専任担当制で安心",
      "オンライン完結OK",
      "大口案件にも柔軟に対応",
    ],
    description:
      "ビートレーディングは法人向けファクタリングの最大手の一つです。累計取引社数5.8万社を超える豊富な実績があり、中小企業から大企業まで幅広く対応。専任担当者がつくため、初めてのファクタリングでも安心して利用できます。買取上限がなく、数千万〜億単位の大口案件にも対応可能です。",
  },
  {
    rank: 2,
    name: "PMG",
    fee: "1%〜12.8%",
    speed: "最短即日",
    maxAmount: "2億円",
    type: "2社間・3社間",
    features: [
      "月間300件以上の取引実績",
      "大口案件（2億円まで）に対応",
      "全国対応で出張買取あり",
      "乗り換えで手数料優遇",
    ],
    description:
      "PMGは法人向けに特化したファクタリング会社で、月間300件以上の取引を処理する実力派です。買取上限2億円と大口案件に強く、建設業や製造業など大きな売掛金が発生する業種で多く利用されています。全国対応で出張買取にも応じるため、地方の法人でも安心です。",
  },
  {
    rank: 3,
    name: "AGビジネスサポート",
    fee: "2%〜15%",
    speed: "最短即日",
    maxAmount: "無制限",
    type: "2社間・3社間",
    features: [
      "東証プライム上場グループ企業",
      "運営実績25年以上の信頼性",
      "建設・IT・製造業に強い",
      "対面とオンラインの併用可",
    ],
    description:
      "AGビジネスサポートはアイフルグループの法人向け金融サービス企業です。上場グループならではの信頼性と安定感が最大の魅力で、長期的な取引パートナーとして多くの中小企業に選ばれています。25年以上の運営実績があり、業種ごとの特性を理解した柔軟な対応が可能です。",
  },
  {
    rank: 4,
    name: "日本中小企業金融サポート機構",
    fee: "1.5%〜10%",
    speed: "最短即日",
    maxAmount: "上限なし",
    type: "2社間・3社間",
    features: [
      "一般社団法人が運営する安心感",
      "手数料が業界最安水準",
      "経営コンサルティングも提供",
      "非営利だからこそのコスパ",
    ],
    description:
      "日本中小企業金融サポート機構は、一般社団法人が運営するファクタリングサービスです。非営利法人のため利益追求ではなく、中小企業の支援を目的としており、手数料が業界最安水準の1.5%〜。ファクタリングだけでなく経営コンサルティングも提供しており、資金繰りの根本改善まで相談できます。",
  },
  {
    rank: 5,
    name: "トップ・マネジメント",
    fee: "3.5%〜12.5%",
    speed: "最短即日",
    maxAmount: "3億円",
    type: "2社間・3社間",
    features: [
      "創業15年以上の老舗企業",
      "買取上限3億円の大口対応",
      "見積もり無料・相談無料",
      "リピート率90%以上",
    ],
    description:
      "トップ・マネジメントは創業15年以上の老舗ファクタリング会社で、法人向けサービスに定評があります。買取上限3億円と大口案件に強く、建設業や運送業など大きな売掛金を扱う業種での利用が多いです。リピート率90%以上という高い顧客満足度が、サービス品質の高さを物語っています。",
  },
];

const selectionPoints = [
  {
    title: "手数料率の透明性",
    description:
      "法人向けファクタリングでは手数料率の幅が大きいため、見積もり時に明確な手数料率を提示してくれる会社を選びましょう。「1%〜」という下限だけでなく、上限も確認することが重要です。また、手数料以外の隠れコスト（事務手数料・振込手数料・登記費用など）の有無も必ず確認してください。",
  },
  {
    title: "買取上限額・対応規模",
    description:
      "法人の売掛金は個人事業主に比べて金額が大きくなりがちです。数百万〜数千万円、場合によっては億単位の売掛金を買い取ってもらう必要があるため、買取上限額が十分に高い会社を選びましょう。特に建設業や製造業など大口案件が多い業種では、上限なしの会社がおすすめです。",
  },
  {
    title: "入金スピード",
    description:
      "急ぎの資金需要がある場合は、入金スピードも重要な選定基準です。即日入金に対応している会社でも、初回利用時は審査に時間がかかる場合があります。2回目以降はスムーズに進むケースが多いので、長期的な取引パートナーとして考えることも大切です。",
  },
  {
    title: "契約形態（2社間・3社間）の選択肢",
    description:
      "2社間と3社間の両方に対応している会社を選ぶと、状況に応じて最適な方式を選べます。取引先に知られたくない場合は2社間、手数料を抑えたい場合は3社間など、柔軟に使い分けることができます。",
  },
  {
    title: "業界・業種への理解度",
    description:
      "自社の業種に詳しいファクタリング会社を選ぶことで、スムーズな取引が期待できます。建設業なら出来高払いの理解、IT業なら多段階の請求書への対応など、業種特有の事情を理解している会社は審査もスムーズです。",
  },
];

const industryRecommendations = [
  {
    industry: "建設業",
    reason: "工期が長く支払いサイトが60〜90日になることが多い。出来高払いの請求書にも対応できる会社がおすすめ。",
    recommended: "ビートレーディング、PMG、トップ・マネジメント",
  },
  {
    industry: "製造業",
    reason: "原材料の仕入れ資金が先行するため資金繰りが厳しくなりやすい。大口対応可能な会社が適している。",
    recommended: "ビートレーディング、AGビジネスサポート、PMG",
  },
  {
    industry: "IT・Web業",
    reason: "プロジェクト単位の大型請求が多い。オンライン完結型で効率的に利用できる会社がおすすめ。",
    recommended: "ビートレーディング、日本中小企業金融サポート機構",
  },
  {
    industry: "運送業",
    reason: "燃料費・人件費の支払いが先行し、運賃の回収は後。定期的な利用に向いたリピート割引がある会社が最適。",
    recommended: "PMG、トップ・マネジメント、ビートレーディング",
  },
  {
    industry: "人材派遣業",
    reason: "派遣社員への給与支払いが先行する。毎月の給与資金を確保するため、継続利用しやすい手数料体系の会社が理想的。",
    recommended: "日本中小企業金融サポート機構、ビートレーディング",
  },
];

const faqs = [
  {
    question: "法人向けファクタリングの手数料相場はどのくらいですか？",
    answer:
      "法人向けファクタリングの手数料相場は、2社間ファクタリングで5%〜18%、3社間ファクタリングで1%〜9%程度です。売掛先が上場企業や官公庁の場合はさらに安くなる傾向があります。買取金額が大きいほど手数料率は下がるのが一般的で、1,000万円以上の大口案件では2%〜5%程度になることもあります。",
  },
  {
    question: "法人がファクタリングを利用する際に必要な書類は？",
    answer:
      "一般的に必要な書類は、(1)登記簿謄本、(2)決算書（直近2〜3期分）、(3)売掛先との取引を証明する書類（請求書・契約書・発注書など）、(4)入出金が確認できる通帳コピー（直近3〜6ヶ月分）、(5)代表者の本人確認書類、(6)印鑑証明書です。オンライン完結型の場合は、必要書類が少ないケースもあります。",
  },
  {
    question: "赤字決算や債務超過でも法人ファクタリングは利用できますか？",
    answer:
      "はい、利用できる可能性が高いです。ファクタリングの審査では利用者自身の財務状況よりも、売掛先の信用力が重視されます。そのため、赤字決算や債務超過の状態でも、売掛先が信用力のある企業（大手企業・上場企業・官公庁など）であれば審査に通る可能性が十分にあります。",
  },
  {
    question: "法人向けファクタリングの入金までの流れは？",
    answer:
      "一般的な流れは、(1)申し込み・相談（電話・Web）→ (2)必要書類の提出 → (3)審査（売掛先の信用力を中心に評価）→ (4)見積もり提示・契約 → (5)入金（最短即日〜3営業日）です。初回は審査に時間がかかる場合がありますが、2回目以降は最短数時間で入金されるケースが多いです。",
  },
  {
    question: "ファクタリングの利用は取引先に知られますか？",
    answer:
      "2社間ファクタリングを選べば、取引先に知られることはありません。2社間ファクタリングは利用者とファクタリング会社の2者間で契約するため、売掛先への通知は不要です。一方、3社間ファクタリングでは売掛先の承諾が必要なため、ファクタリングの利用が取引先に知られます。取引関係への影響が心配な場合は2社間を選びましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "法人向けファクタリングおすすめ5選｜中小企業の資金調達を比較",
  description:
    "法人向けファクタリング会社おすすめ5社を徹底比較。中小企業の資金調達に最適なサービスを手数料・入金スピード・買取上限額で比較します。",
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
    "@id":
      "https://factoring-partner.pages.dev/articles/for-corporation/",
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

/* ── Component ────────────────────────────────────── */

export default function ForCorporationPage() {
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

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "コラム", href: "/articles/" },
          { label: "法人向けファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            法人向け
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            法人向けファクタリングおすすめ5選
            <br className="hidden md:block" />
            中小企業の資金調達を比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            中小企業の資金調達に最適なファクタリング会社5社を厳選。手数料・入金スピード・買取上限額・対応業種で徹底比較し、2社間と3社間の使い分けや審査で見られるポイントも解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#why" className="hover:underline">
                1. 法人がファクタリングを利用するメリット
              </a>
            </li>
            <li>
              <a href="#selection" className="hover:underline">
                2. 法人向けファクタリングの選び方5つのポイント
              </a>
            </li>
            <li>
              <a href="#ranking" className="hover:underline">
                3. 法人向けファクタリングおすすめ5選
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                4. おすすめ5社の比較表
              </a>
            </li>
            <li>
              <a href="#2sha-3sha" className="hover:underline">
                5. 2社間と3社間ファクタリングの使い分け
              </a>
            </li>
            <li>
              <a href="#screening" className="hover:underline">
                6. 法人ファクタリングの審査で見られるポイント
              </a>
            </li>
            <li>
              <a href="#industry" className="hover:underline">
                7. 業種別おすすめファクタリング会社
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                8. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 法人がファクタリングを利用するメリット ─── */}
        <section id="why" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            法人がファクタリングを利用するメリット
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            中小企業にとって資金繰りは経営の生命線です。銀行融資は審査に時間がかかり、急な資金需要に対応しにくいという課題があります。ファクタリングは、売掛債権を活用して最短即日で資金化できるため、中小企業の資金調達手段として近年急速に普及しています。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            特に法人向けファクタリングには、個人事業主向けとは異なる以下のようなメリットがあります。大口の売掛金を一度に現金化できること、継続利用で手数料が下がること、3社間ファクタリングが選べることなどが挙げられます。
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">1</span>
                <h3 className="font-bold text-text-main">大口の資金調達が可能</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-light">
                法人向けファクタリングでは数百万〜数億円規模の売掛金を一度に現金化できます。銀行融資では難しい大口の短期資金調達も、売掛債権さえあれば柔軟に対応可能です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">2</span>
                <h3 className="font-bold text-text-main">負債にならずバランスシート改善</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングは借入ではなく債権の売買です。貸借対照表の負債が増えないため、銀行との取引格付けにも影響しません。決算前のバランスシート改善にも活用されています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">3</span>
                <h3 className="font-bold text-text-main">赤字でも利用可能</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの審査は売掛先の信用力が中心です。自社が赤字決算や債務超過であっても、売掛先が信用力のある企業であれば利用できる可能性が高いです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">4</span>
                <h3 className="font-bold text-text-main">3社間で手数料を抑えられる</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-light">
                法人同士の取引では3社間ファクタリングが選択肢に入ります。取引先の理解が得られれば、2社間より大幅に安い手数料（1%〜9%程度）で利用可能です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 選び方 ─── */}
        <section id="selection" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            法人向けファクタリングの選び方5つのポイント
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            法人向けファクタリング会社を選ぶ際は、手数料の安さだけでなく、買取上限額や対応スピード、業種への理解度など複数の観点から比較することが重要です。以下の5つのポイントを押さえて、最適なパートナーを見つけましょう。
          </p>
          <div className="space-y-6">
            {selectionPoints.map((point, index) => (
              <div
                key={point.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {point.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="ranking" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            法人向けファクタリングおすすめ5選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            法人向けに特におすすめのファクタリング会社5社を厳選しました。いずれも法人の大口案件に対応しており、信頼性・実績ともに申し分ないサービスです。
          </p>
          <div className="space-y-8">
            {top5.map((company) => (
              <div
                key={company.name}
                className="rounded-lg border border-border bg-white p-6 md:p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {company.rank}
                  </span>
                  <h3 className="text-xl font-bold text-text-main">
                    {company.name}
                  </h3>
                </div>

                <div className="mb-4 grid gap-3 text-sm md:grid-cols-4">
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">手数料</p>
                    <p className="mt-1 font-bold text-primary">{company.fee}</p>
                  </div>
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">入金スピード</p>
                    <p className="mt-1 font-bold text-primary">{company.speed}</p>
                  </div>
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">買取上限</p>
                    <p className="mt-1 font-bold text-primary">{company.maxAmount}</p>
                  </div>
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">対応形態</p>
                    <p className="mt-1 font-bold text-primary">{company.type}</p>
                  </div>
                </div>

                <p className="mb-4 leading-relaxed text-text-light">
                  {company.description}
                </p>

                <div className="rounded-lg bg-section-bg p-4">
                  <p className="mb-2 text-sm font-bold text-text-main">特徴・メリット</p>
                  <ul className="grid gap-1 text-sm text-text-light md:grid-cols-2">
                    {company.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-0.5 text-secondary">&#10003;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            おすすめ5社の比較表
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            法人向けファクタリング会社5社の主要スペックを一覧で比較します。手数料・入金スピード・買取上限額・対応形態を横断的に確認し、自社に最適なサービスを選びましょう。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">会社名</th>
                  <th className="px-4 py-3 font-semibold">手数料</th>
                  <th className="px-4 py-3 font-semibold">入金スピード</th>
                  <th className="px-4 py-3 font-semibold">買取上限</th>
                  <th className="px-4 py-3 font-semibold">対応形態</th>
                </tr>
              </thead>
              <tbody>
                {top5.map((company, index) => (
                  <tr
                    key={company.name}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-4 py-3 font-semibold text-text-main">
                      {company.name}
                    </td>
                    <td className="px-4 py-3">{company.fee}</td>
                    <td className="px-4 py-3">{company.speed}</td>
                    <td className="px-4 py-3">{company.maxAmount}</td>
                    <td className="px-4 py-3">{company.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※ 手数料は売掛先の信用力や取引金額によって変動します。実際の手数料は各社に見積もりをご依頼ください。
          </p>
        </section>

        {/* ── 2社間と3社間の使い分け ─── */}
        <section id="2sha-3sha" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            2社間と3社間ファクタリングの使い分け
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            法人向けファクタリングでは、2社間と3社間の両方が選択肢になります。それぞれの特徴を理解し、状況に応じて使い分けることで、コストを最適化できます。
          </p>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">2社間ファクタリング</th>
                  <th className="px-4 py-3 font-semibold">3社間ファクタリング</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">手数料</td>
                  <td className="px-4 py-3">10%〜30%</td>
                  <td className="px-4 py-3">1%〜9%</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">入金スピード</td>
                  <td className="px-4 py-3">最短即日</td>
                  <td className="px-4 py-3">1〜3営業日</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">取引先通知</td>
                  <td className="px-4 py-3">不要（知られない）</td>
                  <td className="px-4 py-3">必要（承諾が要）</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">おすすめ場面</td>
                  <td className="px-4 py-3">取引先に知られたくない場合</td>
                  <td className="px-4 py-3">手数料を抑えたい場合</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <p className="mb-2 font-bold text-secondary">2社間が向いているケース</p>
              <ul className="space-y-1 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>取引先との関係を維持したい場合</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>急ぎの資金需要で即日入金が必要な場合</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>取引先がファクタリングに否定的な可能性がある場合</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-primary/30 bg-primary-light p-5">
              <p className="mb-2 font-bold text-primary">3社間が向いているケース</p>
              <ul className="space-y-1 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>手数料をできるだけ抑えたい場合</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>取引先がファクタリング利用に理解がある場合</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>大口案件で手数料の差額が大きくなる場合</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 審査で見られるポイント ─── */}
        <section id="screening" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            法人ファクタリングの審査で見られるポイント
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            法人向けファクタリングの審査では、銀行融資とは異なるポイントが重視されます。以下の項目を理解しておくことで、スムーズに審査を通過できます。
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">1. 売掛先の信用力（最重要）</h3>
              <p className="leading-relaxed text-text-light">
                ファクタリングの審査で最も重視されるのは、売掛先（取引先）の信用力です。売掛先が上場企業や大手企業、官公庁であれば審査に通りやすく、手数料も安くなります。逆に、売掛先が設立間もない企業や財務状況が不安定な企業だと、審査が厳しくなる傾向があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">2. 売掛金の内容・信頼性</h3>
              <p className="leading-relaxed text-text-light">
                売掛金が実在する取引に基づくものかどうかが確認されます。請求書・契約書・発注書・納品書などの書類で取引の実在性を証明する必要があります。継続的な取引があり、過去に遅延なく支払いが行われていれば、より有利な条件で利用できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">3. 支払い期日までの期間</h3>
              <p className="leading-relaxed text-text-light">
                売掛金の支払い期日が近いほど、ファクタリング会社のリスクが低いため、手数料が安くなります。一般的に支払い期日まで30日〜60日程度の売掛金が好まれ、90日以上先の売掛金は手数料が高くなるか、買取対象外になる場合があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">4. 利用者の事業状況</h3>
              <p className="leading-relaxed text-text-light">
                売掛先の信用力が最重要ですが、利用者自身の事業状況も確認されます。ただし、銀行融資ほど厳しくはなく、赤字決算や税金滞納があっても利用できるケースが多いです。事業の継続性や取引の安定性が評価されます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">5. 二重譲渡のリスク確認</h3>
              <p className="leading-relaxed text-text-light">
                同じ売掛金を複数のファクタリング会社に売却する「二重譲渡」は違法行為です。ファクタリング会社は債権譲渡登記や通帳の入出金確認などで、二重譲渡のリスクがないかチェックします。正直に取引情報を開示することが審査通過の近道です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 業種別おすすめ ─── */}
        <section id="industry" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            業種別おすすめファクタリング会社
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            業種によって売掛金の特性や資金繰りの課題は異なります。自社の業種に適したファクタリング会社を選ぶことで、よりスムーズな取引が期待できます。
          </p>

          <div className="space-y-4">
            {industryRecommendations.map((item) => (
              <div
                key={item.industry}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {item.industry}
                </h3>
                <p className="mb-3 leading-relaxed text-text-light">
                  {item.reason}
                </p>
                <div className="rounded bg-section-bg p-3">
                  <p className="text-sm">
                    <span className="font-bold text-text-main">おすすめ：</span>
                    <span className="text-secondary font-semibold">{item.recommended}</span>
                  </p>
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
              href="/articles/2sha-vs-3sha/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">2社間と3社間ファクタリングの違い</p>
              <p className="mt-1 text-sm text-text-light">
                メリット・デメリットを比較し、最適な選び方を解説
              </p>
            </Link>
            <Link
              href="/articles/low-fee/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料が安いファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                手数料相場と節約術をランキング形式で紹介
              </p>
            </Link>
            <Link
              href="/articles/instant-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">即日ファクタリング10選</p>
              <p className="mt-1 text-sm text-text-light">
                最短10分〜当日入金のおすすめ会社を紹介
              </p>
            </Link>
            <Link
              href="/articles/easy-screening/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">審査が通りやすいファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                審査基準と通過のコツを解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            法人向けファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            法人向けファクタリング会社を手数料・入金スピード・買取上限額で徹底比較。あなたの企業に最適なファクタリング会社が見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
