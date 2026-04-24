import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "トップ・マネジメントの口コミ・評判｜手数料0.5%〜の老舗ファクタリングを検証",
  description:
    "トップ・マネジメントの口コミ・評判を徹底調査。手数料0.5%〜、最短即日入金、累計取引高100億円超の老舗ファクタリング会社を利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/top-management/",
  },
  openGraph: {
    title:
      "トップ・マネジメントの口コミ・評判｜手数料0.5%〜の老舗ファクタリングを検証",
    description:
      "トップ・マネジメントの口コミ・評判を徹底調査。手数料0.5%〜の老舗ファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/top-management/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "0.5%〜12.5%（3社間0.5%〜 / 2社間3.5%〜）" },
  { label: "入金スピード", value: "最短即日" },
  { label: "買取可能額", value: "30万円〜3億円" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "オンライン対応", value: "○（オンライン対応可）" },
  { label: "対応エリア", value: "全国" },
  { label: "累計取引高", value: "100億円超" },
  { label: "運営会社", value: "株式会社トップ・マネジメント" },
];

const goodReviews = [
  {
    title: "手数料が安い",
    label: "製造業の経営者",
    detail:
      "3社間ファクタリングで0.5%〜という業界最安水準の手数料が高く評価されています。2社間でも3.5%〜と、他社と比較して低い手数料を実現しているという声が多いです。大口案件ほど有利な条件が適用される傾向があるとのことです。",
  },
  {
    title: "注文書ファクタリングが利用できる",
    label: "建設業の利用者",
    detail:
      "請求書だけでなく注文書（発注書）の段階でファクタリングが利用できる点が好評です。工事の着手前に資金を確保できるため、建設業や受託開発業など先行投資が必要な業種から特に支持されています。",
  },
  {
    title: "長年の実績で信頼できる",
    label: "卸売業の経営者",
    detail:
      "累計取引高100億円超の実績を持つ老舗企業として、信頼性が高く安心して利用できるという声があります。長年の営業実績に裏打ちされたノウハウで、初めてのファクタリングでも丁寧に対応してくれたという口コミが見られます。",
  },
  {
    title: "柔軟な審査で助かった",
    label: "運送業の利用者",
    detail:
      "赤字決算や税金の滞納がある状態でも審査に通ったという声があります。売掛先の信用力を重視する審査基準のため、自社の財務状態に不安がある場合でも利用できるケースが多いと好評です。",
  },
];

const badReviews = [
  {
    title: "対面面談が必要な場合がある",
    label: "地方在住の事業者",
    detail:
      "初回利用時に対面面談を求められるケースがあるという声があります。東京本社への来社が難しい地方の事業者にとっては、完全オンライン対応のサービスの方が利便性が高いという指摘があります。",
  },
  {
    title: "2社間だと手数料が高めになるケースも",
    label: "小規模事業者",
    detail:
      "0.5%〜は3社間ファクタリングの場合で、2社間の場合は3.5%〜12.5%と幅があるため、実際の手数料が想定より高くなるケースもあるという声があります。条件によっては他のオンライン系サービスの方が安い場合もあるようです。",
  },
  {
    title: "書類準備に時間がかかる",
    label: "IT企業の経営者",
    detail:
      "オンライン完結型のサービスと比較すると、必要書類が多く準備に時間がかかるという声があります。特に初回利用時は登記簿謄本や決算書など多数の書類が求められるため、即日利用のハードルがやや高いと感じる方もいるようです。",
  },
];

const merits = [
  {
    title: "手数料0.5%〜の業界最安水準",
    description:
      "3社間ファクタリングで0.5%〜、2社間で3.5%〜という手数料は業界トップクラスの低水準です。特に3社間で取引先の了承が得られる場合、1%前後の手数料で利用できるケースもあり、大幅にコストを抑えられます。大口案件ほど有利な条件が適用される傾向があります。",
  },
  {
    title: "注文書（発注書）ファクタリング対応",
    description:
      "請求書の発行前、注文書・発注書の段階でファクタリングが利用できます。工事の着手前や商品の仕入れ前に資金を確保できるため、先行投資が必要な業種にとって非常に有用なサービスです。注文書ファクタリングに対応している会社は業界でも限られています。",
  },
  {
    title: "累計取引高100億円超の豊富な実績",
    description:
      "長年にわたりファクタリング事業を展開してきた老舗企業で、累計取引高は100億円を超えています。豊富な取引実績に基づく審査ノウハウがあり、幅広い業種・案件に対応可能です。実績の豊富さは信頼性の重要な指標です。",
  },
  {
    title: "最大3億円までの大口案件に対応",
    description:
      "買取可能額は最大3億円と、大口案件にも十分に対応できる体制を整えています。大型の建設案件や大量仕入れなど、まとまった資金が必要なケースでも一括で資金化が可能です。",
  },
];

const demerits = [
  {
    title: "完全オンライン完結ではない場合がある",
    description:
      "案件の内容や金額によっては、対面面談や書類の郵送が必要になるケースがあります。OLTA・QuQuMoなどの完全オンライン完結型サービスと比較すると、手続きの手間がかかる場合があります。ただし、対面だからこそ柔軟な対応が可能な面もあります。",
  },
  {
    title: "3社間の低手数料は取引先の了承が必要",
    description:
      "手数料0.5%〜の最安水準は3社間ファクタリングの場合であり、取引先にファクタリング利用を通知し了承を得る必要があります。取引先に知られたくない場合は2社間（3.5%〜）となり、手数料は上がります。",
  },
  {
    title: "少額案件には対応していない",
    description:
      "買取下限が30万円のため、10〜20万円程度の少額案件には対応できません。少額利用が必要な場合は、ペイトナー（1万円〜）やGoodPlus（15万円〜）などの少額対応サービスを検討する必要があります。",
  },
];

const steps = [
  { step: "1", title: "電話・Web申込", description: "電話または公式サイトのフォームから申込。概要をヒアリングされます。" },
  { step: "2", title: "必要書類の提出", description: "請求書・注文書・決算書・登記簿謄本・通帳コピー等を提出します。" },
  { step: "3", title: "審査・面談", description: "書類審査を実施。案件によっては対面またはオンラインで面談が行われます。" },
  { step: "4", title: "契約・入金", description: "契約締結後、最短即日で指定口座に入金されます。" },
];

const faqs = [
  {
    question: "トップ・マネジメントの手数料は実際にいくらですか？",
    answer:
      "手数料は3社間で0.5%〜3.5%、2社間で3.5%〜12.5%の範囲です。実際の手数料は売掛先の信用力、売掛金の金額、支払いサイトなどにより個別に決定されます。大口案件や売掛先が大手企業の場合、より低い手数料が適用される傾向があります。",
  },
  {
    question: "注文書ファクタリングとは何ですか？",
    answer:
      "注文書ファクタリングとは、請求書の発行前の段階で、注文書（発注書）を基にファクタリングを利用できるサービスです。工事の着手前や商品の製造前に資金を確保できるため、先行投資が必要な業種に適しています。通常のファクタリングよりも早い段階で資金調達が可能です。",
  },
  {
    question: "トップ・マネジメントは個人事業主でも利用できますか？",
    answer:
      "はい、法人だけでなく個人事業主も利用可能です。30万円以上の売掛金があれば申込みできます。個人事業主の場合は確定申告書が必要書類として求められます。建設業の一人親方なども利用対象です。",
  },
  {
    question: "赤字決算でも利用できますか？",
    answer:
      "はい、トップ・マネジメントは売掛先の信用力を重視して審査するため、申込者自身が赤字決算であっても審査に通る可能性があります。税金の滞納や債務超過の状態でも、売掛先が信頼できる企業であれば利用できるケースがあります。",
  },
  {
    question: "トップ・マネジメントで3社間と2社間はどちらがおすすめですか？",
    answer:
      "手数料を最小限に抑えたい場合は3社間（0.5%〜）がおすすめですが、取引先にファクタリング利用を知られたくない場合は2社間（3.5%〜）を選択します。取引先との関係性や秘密保持の必要性を考慮して選ぶとよいでしょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "トップ・マネジメントの口コミ・評判｜手数料0.5%〜の老舗ファクタリングを検証",
  description:
    "トップ・マネジメントの口コミ・評判を徹底調査。手数料0.5%〜の老舗ファクタリングを検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/top-management/",
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
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "業者レビュー", item: "https://factoring-partner.pages.dev/reviews/" },
    { "@type": "ListItem", position: 3, name: "トップ・マネジメント" },
  ],
};

const comparisonData = [
  { name: "トップ・マネジメント", fee: "0.5%〜12.5%", speed: "最短即日", amount: "30万〜3億円", online: "○" },
  { name: "ビートレーディング", fee: "2%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "アクセルファクター", fee: "2%〜20%", speed: "最短即日", amount: "30万〜1億円", online: "○" },
];

/* ── Component ────────────────────────────────────── */

export default function TopManagementReviewPage() {
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
          { label: "業者レビュー", href: "/reviews/" },
          { label: "トップ・マネジメント" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            トップ・マネジメントの口コミ・評判
            <br className="hidden md:block" />
            手数料0.5%〜の老舗ファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            累計取引高100億円超の老舗「トップ・マネジメント」の口コミ・評判を徹底調査。手数料0.5%〜・注文書ファクタリング対応のサービスを検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. トップ・マネジメントの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. トップ・マネジメントのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. トップ・マネジメントのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トップ・マネジメントの基本情報
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {basicInfo.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-section-bg" : "bg-white"}>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-40">
                      {item.label}
                    </th>
                    <td className="px-4 py-3 text-text-light">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 会社概要・特徴 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トップ・マネジメントの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            トップ・マネジメントは、株式会社トップ・マネジメントが運営する老舗のファクタリング会社です。累計取引高100億円を超える豊富な実績を持ち、業界内での信頼性は高いです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            最大の特徴は手数料の低さで、3社間ファクタリングで0.5%〜、2社間でも3.5%〜と業界トップクラスの低水準を実現しています。さらに注文書（発注書）ファクタリングにも対応しており、請求書の発行前の段階で資金調達が可能です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            買取可能額は30万円〜3億円と幅広く、中小企業から中堅企業まで幅広い規模の事業者に対応しています。対面面談を含む丁寧なサポート体制も特徴で、ファクタリング初心者にもわかりやすく説明してくれると評判です。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">トップ・マネジメントの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料0.5%〜の業界最安水準</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>注文書ファクタリング対応で早期の資金調達が可能</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>累計取引高100億円超の老舗企業としての信頼性</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 口コミ傾向調査 ─── */}
        <section id="reviews" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            口コミ傾向調査結果
          </h2>

          <div className="mb-8 rounded-lg border border-border bg-section-bg p-4 text-xs text-text-light leading-relaxed">
            ※掲載している口コミは、Google口コミ・みん評・ヒカカク・ファクログ等の投稿を参考に要約・再構成したものです。出典元の原文とは異なります。サービス内容は調査時点のものであり、変更される場合があります。
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/factor/top-management" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://and-heroes.com/media/growth-partners/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">GROWTH PARTNERS</a></p>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-sm">&#9675;</span>
              良い口コミの傾向
            </h3>
            <div className="space-y-4">
              {goodReviews.map((review, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-block rounded bg-secondary/10 px-2 py-0.5 text-xs text-secondary">{review.label}</span>
                  </div>
                  <p className="mb-2 font-semibold text-secondary">{review.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{review.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-sm">&#9651;</span>
              悪い口コミの傾向
            </h3>
            <div className="space-y-4">
              {badReviews.map((review, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-block rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">{review.label}</span>
                  </div>
                  <p className="mb-2 font-semibold text-accent">{review.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{review.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トップ・マネジメントのメリット4つ
          </h2>
          <div className="space-y-6">
            {merits.map((merit, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  {merit.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{merit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── デメリット ─── */}
        <section id="demerits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トップ・マネジメントのデメリット3つ
          </h2>
          <div className="space-y-6">
            {demerits.map((demerit, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  {demerit.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{demerit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トップ・マネジメントの利用の流れ
          </h2>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-border bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-text-main">{s.title}</p>
                  <p className="mt-1 text-sm text-text-light">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 注文書ファクタリングの詳細 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            注文書ファクタリングの詳細と活用法
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            トップ・マネジメントの特徴的なサービスが「注文書ファクタリング」です。通常のファクタリングは請求書（売掛金）を基に行いますが、注文書ファクタリングは発注書・注文書の段階で資金化が可能です。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">注文書ファクタリングのメリット</p>
              <p className="text-sm leading-relaxed text-text-light">
                請求書の発行前、つまり仕事を受注した段階で資金を確保できるため、材料の仕入れや人件費の支払いに充てることができます。建設業・製造業・システム開発業など、先行投資が必要な業種で特に威力を発揮します。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">対象となる業種</p>
              <p className="text-sm leading-relaxed text-text-light">
                建設業（工事の着手金）、製造業（材料の仕入れ）、システム開発（開発着手前の人件費）、広告代理業（広告出稿費の先払い）など、受注から納品・請求までの期間が長い業種に適しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">通常のファクタリングとの違い</p>
              <p className="text-sm leading-relaxed text-text-light">
                通常のファクタリングは「仕事完了後に発行した請求書」を基に買取を行いますが、注文書ファクタリングは「仕事の受注が確定した注文書」を基に買取を行います。資金化のタイミングが数週間〜数ヶ月早くなる点が大きな違いです。
              </p>
            </div>
          </div>
        </section>

        {/* ── おすすめ / 向いていない人 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            こんな人におすすめ / 向いていない人
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <p className="mb-4 font-bold text-secondary">おすすめの人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手数料の安さを最優先する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>注文書の段階で資金調達したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>実績豊富な老舗企業を選びたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>大口案件（数千万〜3億円）の方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>完全オンライン完結を求める方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>30万円未満の少額利用をしたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>数時間以内の超スピード入金を求める方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 他社比較 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            他社との比較表
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">サービス名</th>
                  <th className="px-4 py-3 text-left font-semibold">手数料</th>
                  <th className="px-4 py-3 text-left font-semibold">入金速度</th>
                  <th className="px-4 py-3 text-left font-semibold">買取額</th>
                  <th className="px-4 py-3 text-center font-semibold">オンライン</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-section-bg" : "bg-white"} ${i === 0 ? "font-semibold text-primary" : ""}`}>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.fee}</td>
                    <td className="px-4 py-3">{item.speed}</td>
                    <td className="px-4 py-3">{item.amount}</td>
                    <td className="px-4 py-3 text-center">{item.online}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 利用シーン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トップ・マネジメントが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">大型工事の着手資金が必要な場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                建設業で大型工事を受注したが着手に必要な材料費や外注費が不足している場合、注文書ファクタリングを活用して工事開始前に資金を確保できます。買取上限3億円のため、大規模案件にも対応可能です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">3社間ファクタリングで手数料を最小化したい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                取引先の了承が得られるなら、3社間ファクタリングで0.5%〜の最安手数料を適用できます。定期的にファクタリングを利用する場合、年間のコスト差は非常に大きくなります。取引先との関係が良好な場合は積極的に活用すべきです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">赤字決算で銀行融資が難しい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                銀行融資は申込者の財務状態を重視しますが、トップ・マネジメントは売掛先の信用力を中心に審査します。赤字決算や税金の滞納がある場合でも、売掛先が信頼できる企業であれば審査に通る可能性があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">担当者に直接相談したい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                複雑な案件や初めてのファクタリングで不安がある場合、対面での丁寧な説明を受けられるのはトップ・マネジメントの強みです。完全オンライン型では得られない安心感と、経験豊富な担当者による適切なアドバイスが期待できます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 2社間と3社間の違い ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トップ・マネジメントの2社間と3社間の違い
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">項目</th>
                  <th className="px-4 py-3 text-left font-semibold">2社間ファクタリング</th>
                  <th className="px-4 py-3 text-left font-semibold">3社間ファクタリング</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-section-bg">
                  <td className="px-4 py-3 font-semibold">手数料</td>
                  <td className="px-4 py-3">3.5%〜12.5%</td>
                  <td className="px-4 py-3">0.5%〜3.5%</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold">売掛先への通知</td>
                  <td className="px-4 py-3">なし</td>
                  <td className="px-4 py-3">あり（了承が必要）</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="px-4 py-3 font-semibold">秘密性</td>
                  <td className="px-4 py-3">高い</td>
                  <td className="px-4 py-3">取引先に知られる</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold">おすすめケース</td>
                  <td className="px-4 py-3">取引先に知られたくない場合</td>
                  <td className="px-4 py-3">手数料を最小化したい場合</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-lg border border-border bg-white">
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

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トップ・マネジメントの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            トップ・マネジメントは、手数料0.5%〜という業界最安水準と、注文書ファクタリング対応を兼ね備えた老舗のファクタリング会社です。累計取引高100億円超の実績に裏打ちされた審査ノウハウで、幅広い業種・案件に対応できます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特に3社間ファクタリングで0.5%〜の手数料は業界最安クラスで、取引先の了承が得られる場合には大幅にコストを抑えられます。注文書ファクタリングは建設業や製造業など先行投資が必要な業種にとって、非常に価値の高いサービスです。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、完全オンライン完結ではない場合がある点や、少額案件（30万円未満）には対応していない点は注意が必要です。手数料の安さと充実したサポートを重視する中堅企業にとっては、最有力の選択肢の一つです。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            トップ・マネジメントの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料0.5%〜。累計100億円超の老舗ファクタリング会社。
          </p>
          <a
            href="https://top-management.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料見積もり
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/betrading/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">累計9.1万社の大手ファクタリング会社を検証</p>
            </Link>
            <Link
              href="/reviews/accelfactor/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">最短即日入金のファクタリングを検証</p>
            </Link>
            <Link
              href="/articles/purchase-order/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">注文書ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">注文書で資金調達する方法を解説</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">49社以上を徹底比較</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
