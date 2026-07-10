import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ライジングの口コミ・評判｜手数料1.5%〜・個人事業主対応のファクタリングを検証",
  description:
    "ライジングの口コミ・評判を徹底調査。株式会社ライジング・インベストメントマネジメント運営、手数料1.5%〜、30万円〜5,000万円（審査により1億円）、個人事業主にも対応するファクタリングを公式情報で検証します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/rising/",
  },
  openGraph: {
    title:
      "ライジングの口コミ・評判｜手数料1.5%〜・個人事業主対応のファクタリングを検証",
    description:
      "ライジングの口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
    url: "https://hyogo-shihoushoshi.jp/reviews/rising/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "ライジング" },
  {
    label: "手数料",
    value:
      "買取対象債権の1.5%〜（上限は公式表記なし・売掛先や支払いサイトごとに提示）（公式サイトにて2026年7月確認）",
  },
  {
    label: "入金スピード",
    value:
      "最短即日対応可（申込から成約まで通常1〜3営業日）（公式サイトにて2026年7月確認）",
  },
  {
    label: "買取可能額",
    value:
      "売掛先1社に対して30万円〜5,000万円（審査により上限1億円まで対応）（公式サイトにて2026年7月確認）",
  },
  {
    label: "対象",
    value:
      "法人・個人事業主（創業1年未満・ベンチャー企業も可）（公式サイトにて2026年7月確認）",
  },
  {
    label: "契約方式",
    value: "2社間・3社間（償還請求権のないノンリコース契約）",
  },
  {
    label: "対応地域",
    value: "日本全国（出張買取に対応）（公式サイトにて2026年7月確認）",
  },
  {
    label: "オンライン完結",
    value: "公式表記なし（電子契約に関する記載は確認できず）",
  },
  {
    label: "営業時間",
    value: "平日9:30〜18:00（土日祝休み・FAXは24時間受付）",
  },
  {
    label: "運営会社",
    value:
      "株式会社ライジング・インベストメントマネジメント（本社：東京都中野区・設立2013年7月）",
  },
];

const merits = [
  {
    title: "手数料の下限1.5%〜と低水準",
    description:
      "ライジングのファクタリング費用は買取対象債権の1.5%〜と公式サイトに記載されています（公式サイトにて2026年7月確認）。下限だけで見れば業界でも低い水準です。料率は売掛先や支払いサイトごとに提示される仕組みのため、実際のコストは見積もりで確認する必要がありますが、売掛先の信用力が高い場合には低コストでの調達が期待できる設定です。",
  },
  {
    title: "30万円の少額から・個人事業主や創業1年未満でも利用可",
    description:
      "買取金額は売掛先1社に対して30万円から5,000万円まで（審査により上限1億円まで対応）と公式に記載されています（公式サイトにて2026年7月確認）。利用対象は売掛金を持つ法人に加えて個人事業主にも対応しており、創業1年未満・ベンチャー企業も利用可能です。担保・保証人は不要で、代表者保証も不要と公式Q&Aに明記されています。",
  },
  {
    title: "医療・介護報酬債権の買取にも対応",
    description:
      "通常の売掛債権（工事請負代金債権・運送料債権などほぼ全ての売掛債権）に加えて、診療報酬・介護報酬の早期資金化サービスも提供しています（公式サイトにて2026年7月確認）。介護給付費や自立支援事業なども対象とされ、個人経営の医療・介護事業者や新規開設・事業拡大を検討中の事業者も相談できると記載されています。",
  },
  {
    title: "全国出張対応と3社間の売掛先への説明フォロー",
    description:
      "対応地域は日本全国で、忙しい経営者向けに出張買取を行うと公式Q&Aに記載されています（公式サイトにて2026年7月確認）。また、3社間ファクタリングで必要になる売掛先の承諾について、希望があればベテラン社員が利用者に同行し、売掛先に誤解や不安を与えないよう説明するアフターフォローを行うと公式サイトに記載されており、売掛先との関係維持に配慮した運用が特徴です。",
  },
];

const demerits = [
  {
    title: "成約まで通常1〜3営業日で、スピード特化型より遅め",
    description:
      "公式サイトでは最短即日対応可能とされていますが、申込から成約までは「通常1日〜3日（営業日）」、公式Q&Aでも「通常3営業日でご契約完了」と記載されています（公式サイトにて2026年7月確認）。数十分〜数時間単位での入金をうたうスピード特化型のサービスと比べると、時間に余裕を持った申込が前提です。当日中の資金化が最優先の場合は、最短10分のペイトナーや最短60分のラボルなども比較しましょう。",
  },
  {
    title: "手数料の上限が非公表",
    description:
      "手数料は1.5%〜と下限のみの公表で、上限は公式サイトに記載がありません（2026年7月確認時点）。売掛先・支払いサイトごとに提示される仕組みのため、実際の料率は見積もりを取るまでわかりません。契約前に必ず見積もりを取り、他社と比較したうえで判断することをおすすめします。",
  },
  {
    title: "土日祝は休みで、オンライン完結の公式表記もない",
    description:
      "営業時間は平日9:30〜18:00で土日祝は休みです（FAXは24時間受付・18時以降は翌営業日対応）（公式サイトにて2026年7月確認）。また、クラウドサイン等の電子契約によるオンライン完結についての記載は公式サイトで確認できず、成約事例でも担当者の来社による契約の様子が紹介されています。非対面・オンライン完結を希望する方には不向きな可能性があります。第三者の口コミがまだ少ない点にも留意が必要です。",
  },
];

const steps = [
  {
    step: "1",
    title: "無料査定・問い合わせ",
    description:
      "電話（0120-039-456・平日9:30〜18:00）・問い合わせフォーム・FAX（24時間受付）から無料査定を申込。初めての利用者にはメリット・デメリットを詳細に説明したうえで契約する方針が公式に記載されています。",
  },
  {
    step: "2",
    title: "ヒアリング・審査",
    description:
      "希望プラン（2社間・3社間）や売掛金の内容をヒアリング。審査は利用者の決算・借入状況よりも売掛先の信用力が重視されると公式サイトに記載されています（リスケ中・税金/社会保険滞納中・赤字決算でも利用可）。",
  },
  {
    step: "3",
    title: "見積もり・条件の提示",
    description:
      "売掛先・支払いサイトに応じた買取条件（手数料等）が提示されます。売掛先ごとに買取枠が設定され、枠内で継続的に繰り返し利用できる仕組みです。",
  },
  {
    step: "4",
    title: "契約・入金",
    description:
      "条件に納得したら契約を締結し、指定口座へ入金。申込から成約まで通常1〜3営業日、最短即日対応も可能とされています（全国出張対応あり）。",
  },
];

const faqs = [
  {
    question: "ライジングは個人事業主でも利用できますか？",
    answer:
      "はい、公式サイトの利用条件に「個人事業主さまにも対応致しております」と明記されています（公式サイトにて2026年7月確認）。創業1年未満やベンチャー企業も利用可能です。また、医療・介護報酬債権の買取では個人で経営されている方も利用可能と記載されています。",
  },
  {
    question: "ライジングの手数料はいくらですか？",
    answer:
      "公式サイトではファクタリング費用は買取対象債権の1.5%〜と記載されています（公式サイトにて2026年7月確認）。上限は公表されておらず、売掛先や支払いサイトごとに提示される仕組みです。振込手数料は利用者負担と記載されています。実際の料率は無料査定・見積もりで確認し、複数社と比較することをおすすめします。",
  },
  {
    question: "ライジングはどのくらいで資金化できますか？",
    answer:
      "公式サイトでは最短即日対応可能とされ、申込から成約までは通常1〜3営業日と記載されています（公式サイトにて2026年7月確認）。営業時間は平日9:30〜18:00（土日祝休み）のため、急ぎの場合は早めの時間帯・早めの曜日に相談するのが確実です。",
  },
  {
    question: "取引先（売掛先）に知られずに利用できますか？",
    answer:
      "はい、公式Q&Aでは、2社間ファクタリングであれば取引先の承諾なしで利用できると記載されています（公式サイトにて2026年7月確認）。3社間ファクタリングの場合は取引先の債権譲渡承諾が必須ですが、希望があればベテラン社員が同行して取引先に説明するフォローを行うと公式サイトに記載されています。",
  },
  {
    question: "売掛先が倒産した場合や、保証人は必要ですか？",
    answer:
      "ライジングのファクタリングは償還請求権のない（ノンリコース）契約で、売掛金が回収不能になった場合は同社がリスクを負担するため、利用者に支払い義務は発生しないと公式サイトに記載されています（公式サイトにて2026年7月確認）。担保・保証人は不要で、代表者保証も必要ないと公式Q&Aに明記されています。なお、遅延債権・回収不能債権など回収目的の不良債権は買取対象外です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ライジングの口コミ・評判｜手数料1.5%〜・個人事業主対応のファクタリングを検証",
  description:
    "ライジングの口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/rising/",
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
      name: "業者レビュー",
      item: "https://hyogo-shihoushoshi.jp/reviews/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ライジング",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function RisingReviewPage() {
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
          { label: "ライジング" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ライジングの口コミ・評判
            <br className="hidden md:block" />
            手数料1.5%〜・個人事業主対応のファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            株式会社ライジング・インベストメントマネジメントが運営するファクタリング「ライジング」の手数料・審査・入金スピード・対応範囲を、公式サイトで確認できる情報にもとづいて検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            ライジングは、手数料1.5%〜（上限非公表）・30万円の少額から5,000万円（審査により1億円）までの買取・個人事業主対応・全国出張対応が特徴のファクタリングです（公式サイトにて2026年7月確認）。医療・介護報酬債権にも対応し、3社間では売掛先への説明に同行するフォローも掲げています。一方、成約まで通常1〜3営業日かかり、オンライン完結の公式表記もないため、今日中の資金化が最優先なら
            <Link href="/reviews/paytner/" className="text-primary underline hover:no-underline">ペイトナー</Link>
            （最短10分・一律10%）や
            <Link href="/reviews/labol/" className="text-primary underline hover:no-underline">ラボル</Link>
            （最短60分・一律10%）、大口・大手の実績重視なら
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            とも比較して判断するのがおすすめです。
          </p>
          <p className="mt-3 text-sm font-semibold text-primary">
            <a href="#recommended" className="hover:underline">向き・不向きの詳細</a>
            <span className="mx-2 text-text-light">／</span>
            <a href="/ranking/" className="hover:underline">他社と条件で比較</a>
            <span className="mx-2 text-text-light">／</span>
            <a href="/diagnosis/" className="hover:underline">30秒無料診断</a>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. ライジングの基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. ライジングの会社概要と特徴</a></li>
            <li><a href="#reviews" className="hover:underline">3. 口コミ・評判の現状</a></li>
            <li><a href="#merits" className="hover:underline">4. ライジングのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">5. ライジングのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">6. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">7. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#summary" className="hover:underline">8. 総合評価</a></li>
            <li><a href="#faq" className="hover:underline">9. よくある質問</a></li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点（2026年7月）のものであり、手数料・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ライジングの基本情報
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
        <section id="about" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ライジングの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ライジングは、株式会社ライジング・インベストメントマネジメントが運営するファクタリングサービスです。公式サイトの会社概要によると、代表者は代表取締役の吉田博氏、設立は平成25年（2013年）7月、本社は東京都中野区中野三丁目28-23 東建ビル2階（中野駅南口から徒歩3分）で、事業内容としてファクタリング事業のほか、経営・資金調達コンサルタント、担保不動産の調査・評価、経理・財務・経営に関するコンサルティングを掲げています（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            建設業・運送業から卸売業・製造・物販・サービス業まで幅広い業種との取引実績があり、業種別の取引条件・商慣習を理解したうえで対応すると公式サイトに記載されています。審査では利用者の決算状況・負債状況・リスケの有無などよりも売掛先の信用力が重視され、税金・社会保険の滞納中や赤字決算でも利用可能とされています（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            契約は2社間・3社間の両方に対応し、償還請求権のないノンリコース契約です。売掛先ごとに買取枠が設定され、枠内で継続的に繰り返し利用できる仕組みも特徴です。ファクタリング以外にも、在庫買取や不動産関連の相談（売却・競売・任意売却・つなぎ資金）も受け付けています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">ライジングの3つの強み（公式サイトの表記より）</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料1.5%〜・30万円の少額から利用可能</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>個人事業主・創業1年未満対応＋医療・介護報酬債権も買取</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>全国出張対応・3社間では売掛先への説明に同行フォロー</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 口コミ・評判の現状 ─── */}
        <section id="reviews" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            口コミ・評判の現状
          </h2>
          <div className="rounded-lg border border-border bg-section-bg p-6">
            <p className="mb-3 text-sm leading-relaxed text-text-light">
              ライジングについては、大手口コミサイトやレビューサイトにおける第三者の投稿がまだ少なく、当サイトの調査時点（2026年7月）では、利用者の生の声から傾向を判断できるだけの十分な口コミ情報を確認できませんでした。そのため、本ページでは架空の口コミや体験談を掲載せず、公式サイトで確認できる事実のみにもとづいて解説しています。
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              公式サイトには建設業・運送業などの「ご成約事例」が掲載されていますが、これらは公式サイト上の自社掲載コンテンツであり、第三者による検証可能な口コミではない点に留意してください。利用を検討する際は、必ず見積もりを取り、手数料・契約条件（償還請求権の有無・債権譲渡登記の扱い）を書面で確認したうえで、複数社と比較することをおすすめします。
            </p>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ライジングのメリット4つ
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
            ライジングのデメリット3つ
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
            ライジングの利用の流れ
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
                  <span>手数料の下限水準（1.5%〜）を重視し、数日の余裕がある方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>30万円程度の少額から相談したい個人事業主・小規模法人の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>担当者と対面（出張・来社）で相談しながら進めたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>診療報酬・介護報酬の早期資金化を検討している事業者の方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>数時間以内・土日祝の資金化が必要な方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>オンライン完結・非対面での契約を希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料の上限を事前に把握して比較したい方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ライジングの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ライジングは、手数料1.5%〜という低い下限設定と、30万円の少額から審査により1億円までという買取幅、個人事業主・創業1年未満への対応、医療・介護報酬債権の取り扱いなど、カバー範囲の広さが特徴のファクタリングサービスです。運営会社は2013年設立で、ファクタリングのほか財務コンサルタントとしてのサポートも掲げており、資金繰り全般の相談先としても位置づけられます（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            3社間ファクタリングで売掛先の承諾を得る際に、希望すればベテラン社員が同行して説明するというアフターフォローは、売掛先との関係悪化を心配する事業者にとって特色のある対応です。一方で、申込から成約まで通常1〜3営業日かかる点、営業が平日のみの点、オンライン完結（電子契約）の公式表記がない点は、スピード・利便性重視の方には物足りない可能性があります。手数料の上限も非公表のため、相見積もりでの確認は必須です。
          </p>
          <p className="leading-relaxed text-text-light">
            対面での丁寧な対応と低い手数料下限を重視する方には検討しやすいサービスです。当日中の資金化を最優先するなら
            <Link href="/reviews/paytner/" className="text-primary underline hover:no-underline">ペイトナー</Link>
            ・
            <Link href="/reviews/labol/" className="text-primary underline hover:no-underline">ラボル</Link>
            （いずれも一律10%でオンライン完結）、大口・大手の実績重視なら
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            が比較先の候補になります。
          </p>
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

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            ライジングの無料査定はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料1.5%〜・30万円の少額から。全国出張対応で個人事業主も相談できます。
          </p>
          <a
            href="https://rising-tokyo.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            ライジング公式サイトで無料査定
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/paytner/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ペイトナーの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">最短10分入金・一律10%のファクタリング</p>
            </Link>
            <Link
              href="/reviews/betrading/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">全国対応の大手ファクタリングを検証</p>
            </Link>
            <Link
              href="/articles/for-sole-proprietor/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">個人事業主向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">個人事業主が利用できるサービスを紹介</p>
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

        {/* 診断への導線 */}
        <p className="mb-8 text-center text-sm">
          <Link href="/diagnosis/" className="font-semibold text-primary hover:underline">
            30秒の無料診断であなたに合うファクタリング会社を絞り込む &rarr;
          </Link>
        </p>
      </div>
    </>
  );
}
