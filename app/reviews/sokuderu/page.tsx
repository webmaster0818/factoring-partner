import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ソクデルの口コミ・評判｜最短60分・専任担当制のファクタリングを検証",
  description:
    "ソクデルの口コミ・評判を徹底調査。株式会社フラップコミュニケーション運営、手数料5%〜、最短60分、即日1,000万円まで、オンライン・来店・出張の3つの契約方法に対応するファクタリングを公式情報で検証します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/sokuderu/",
  },
  openGraph: {
    title:
      "ソクデルの口コミ・評判｜最短60分・専任担当制のファクタリングを検証",
    description:
      "ソクデルの口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
    url: "https://hyogo-shihoushoshi.jp/reviews/sokuderu/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "ソクデル" },
  {
    label: "手数料",
    value: "5%〜（上限は公式表記なし）（公式サイトにて2026年7月確認）",
  },
  {
    label: "入金スピード",
    value:
      "最短60分（契約締結後は最短10分で入金）（公式サイトにて2026年7月確認）",
  },
  {
    label: "買取可能額",
    value:
      "即日1,000万円まで（申込フォームの希望金額は5万円〜1,000万円）（公式サイトにて2026年7月確認）",
  },
  { label: "対象", value: "法人・個人事業主（公式Q&Aにて2026年7月確認）" },
  {
    label: "契約方式",
    value: "2社間・3社間（介護報酬・診療報酬ファクタリングにも対応）",
  },
  {
    label: "契約方法",
    value:
      "オンライン（クラウドサイン）・来店（神田店）・出張の3パターンから選択",
  },
  {
    label: "債権譲渡登記",
    value: "原則なし（公式Q&Aにて2026年7月確認）",
  },
  {
    label: "営業時間",
    value:
      "9:30〜18:30（定休日：土日祝・年末年始）※土日祝・営業時間外用の申込フォームあり",
  },
  {
    label: "運営会社",
    value: "株式会社フラップコミュニケーション（本社：千葉県浦安市）",
  },
];

const merits = [
  {
    title: "最短60分の資金調達・契約締結後は最短10分で入金",
    description:
      "ソクデルは、AIとベテラン専任担当によるハイブリッド審査を採用し、申込から最短60分での資金調達をうたっています（公式サイトにて2026年7月確認）。公式サイトの利用の流れでは、ヒアリング・書類提出20分→審査・見積もり30分→契約後最短10分で入金という時間目安が示されており、即日1,000万円までの買取に対応するとしています。",
  },
  {
    title: "オンライン・来店・出張の3つの契約方法から選べる",
    description:
      "契約方法はオンライン契約（弁護士ドットコム監修の電子契約サービス「クラウドサイン」を利用）、東京・神田店への来店契約、出張契約の3パターンから選択できます（公式サイトにて2026年7月確認）。オンライン完結型と対面型の両方に対応しているため、電子契約に不慣れな方や、担当者と顔を合わせて相談したい方でも利用しやすい体制です。",
  },
  {
    title: "2社間・3社間に加えて介護報酬・診療報酬ファクタリングにも対応",
    description:
      "契約形態は2社間・3社間の両方に対応しています。2社間なら売掛先に知られずに資金調達でき、手数料を抑えたい場合は3社間も選択できます。さらに、介護事業者・医療機関向けの介護報酬・診療報酬ファクタリングにも2社間・3社間で対応していると公式サイトに記載されています（公式サイトにて2026年7月確認）。",
  },
  {
    title: "専任担当制と運営体制の透明性",
    description:
      "ソクデルでは利用者ごとに専任の担当者が付き、担当者との相性が合わない場合は交代も相談できるとしています。また、公式サイトの会社概要には顧問弁護士（みずがき綜合法律事務所）・顧問税理士・適格請求書発行事業者登録番号まで明記されており、運営体制の情報開示は比較的丁寧です（公式サイトにて2026年7月確認）。審査は独自審査で、個人信用情報機関への照会は行わないと公式Q&Aに記載されています。",
  },
];

const demerits = [
  {
    title: "手数料の下限5%〜は他社と比べて高めで、上限も非公表",
    description:
      "買取手数料は5%〜と下限のみの公表で、上限は公式サイトに記載がありません（2026年7月確認時点）。下限5%は、1%〜2%台の下限を公表している他社と比べると高めの設定です。公式サイトは「業界最低水準」とうたっていますが（公式表記）、実際の手数料は案件ごとの見積もり次第のため、必ず他社と相見積もりを取って比較することをおすすめします。",
  },
  {
    title: "買取上限が1,000万円で大口の資金調達には不向き",
    description:
      "公式サイトでは「即日1,000万円まで可能」とされ、申込フォームの希望金額の選択肢も5万円〜1,000万円の範囲です（公式サイトにて2026年7月確認）。数千万円規模の大口債権を現金化したい場合は、買取額に上限を設けていない大手ファクタリング会社を検討する必要があります。",
  },
  {
    title: "税金・社会保険料の未納（分納手続きなし）は買取不可、第三者の口コミも少ない",
    description:
      "公式Q&Aでは、赤字・債務超過だけで断ることはないとする一方、「税金や社会保険料の未納があり、分納手続きをしてない場合は、買取はお断りしてます」と明記されています（公式サイトにて2026年7月確認）。滞納中の方は事前に分納手続きの有無を確認しましょう。また、大手と比べると第三者の口コミ・評判情報がまだ少なく、判断材料が限られる点にも留意が必要です。",
  },
];

const steps = [
  {
    step: "1",
    title: "申込",
    description:
      "電話（9:30〜18:30・土日祝定休)・申込フォーム・LINEから申込。土日祝・営業時間外用の申込フォームも用意されています。",
  },
  {
    step: "2",
    title: "ヒアリング・書類提出（約20分）",
    description:
      "専任担当者がヒアリング。身分証明書・請求書・通帳・決算書等を、メール・LINE・FAXで提出できます（公式サイトにて2026年7月確認）。",
  },
  {
    step: "3",
    title: "無料審査・見積もり（約30分）",
    description:
      "提出情報をもとにAI×専任担当のハイブリッド審査を実施し、審査通過後に見積もりが提示されます。",
  },
  {
    step: "4",
    title: "契約・入金（約10分）",
    description:
      "見積もりに納得したら契約を締結。契約方法は神田店への来店またはクラウドサインによるオンライン契約を選択でき、契約締結後最短10分で指定口座に入金されます。",
  },
];

const faqs = [
  {
    question: "ソクデルの手数料はいくらですか？",
    answer:
      "公式サイトでは買取手数料5%〜と記載されています（公式サイトにて2026年7月確認）。上限は公表されていないため、実際の手数料は売掛先の信用力や契約形態（2社間・3社間）に応じた見積もりで確認する必要があります。無料審査・見積もりの後に金額が提示されるので、納得してから契約するかを判断できます。",
  },
  {
    question: "ソクデルは本当に即日で入金されますか？",
    answer:
      "公式サイトでは最短60分での資金調達が可能とされ、利用の流れではヒアリング・書類提出20分→審査・見積もり30分→契約後最短10分で入金という時間目安が示されています（公式サイトにて2026年7月確認）。即日での買取は1,000万円までです。必要書類を事前に揃えておくとスムーズです。",
  },
  {
    question: "ソクデルは個人事業主でも利用できますか？",
    answer:
      "はい、公式Q&Aで「個人事業主でもファクタリング可能ですか？→はい。問題ありません」と明記されています（公式サイトにて2026年7月確認）。申込フォームの希望金額は5万円からのため、比較的少額の売掛金でも相談できます。",
  },
  {
    question: "ソクデルの審査で信用情報は照会されますか？",
    answer:
      "公式Q&Aでは、個人信用情報機関を利用した情報収集は行っておらず、独自審査であると記載されています（公式サイトにて2026年7月確認）。赤字・債務超過だけで買取を断ることはないとされていますが、税金や社会保険料の未納があり分納手続きをしていない場合は買取不可と明記されています。",
  },
  {
    question: "ソクデルの契約に必要な書類は何ですか？",
    answer:
      "公式Q&Aでは、買取実行に必要な書類として見積書・発注書・請求書・通知書・納品書（検収書）などが挙げられており、利用の流れのページでは身分証明書・請求書・通帳・決算書等を用意するよう案内されています（公式サイトにて2026年7月確認）。書類はメール・LINE・FAXで提出できます。案件により異なるため、詳細は申込時に専任担当者に確認してください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ソクデルの口コミ・評判｜最短60分・専任担当制のファクタリングを検証",
  description:
    "ソクデルの口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/sokuderu/",
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
      name: "ソクデル",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SokuderuReviewPage() {
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
          { label: "ソクデル" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ソクデルの口コミ・評判
            <br className="hidden md:block" />
            最短60分・専任担当制のファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            株式会社フラップコミュニケーションが運営するファクタリング「ソクデル」の手数料・審査・入金スピード・契約方法を、公式サイトで確認できる情報にもとづいて検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            ソクデルは、最短60分の資金調達（契約締結後は最短10分で入金）と、オンライン・来店・出張の3つから選べる契約方法、専任担当制が特徴のファクタリングです（公式サイトにて2026年7月確認）。即日1,000万円まで・個人事業主も対象で、2社間・3社間に加えて介護報酬・診療報酬ファクタリングにも対応します。一方、手数料は5%〜（上限非公表）と下限が他社より高めのため、コスト重視の方はより速い
            <Link href="/reviews/paytner/" className="text-primary underline hover:no-underline">ペイトナー</Link>
            や
            <Link href="/reviews/labol/" className="text-primary underline hover:no-underline">ラボル</Link>
            （いずれも一律10%）、大口や手数料交渉なら
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
            <li><a href="#basic-info" className="hover:underline">1. ソクデルの基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. ソクデルの会社概要と特徴</a></li>
            <li><a href="#reviews" className="hover:underline">3. 口コミ・評判の現状</a></li>
            <li><a href="#merits" className="hover:underline">4. ソクデルのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">5. ソクデルのデメリット3つ</a></li>
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
            ソクデルの基本情報
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
            ソクデルの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ソクデルは、株式会社フラップコミュニケーションが運営するファクタリングサービスです。公式サイトの会社概要によると、代表取締役は髙橋保彦氏、設立は2016年3月14日、本社は千葉県浦安市入船4-9-4-1F、店舗として神田店（東京都千代田区神田鍛冶町3-7-3花瀧ビル2F）を構えています（公式サイトにて2026年7月確認）。会社概要には顧問弁護士（みずがき綜合法律事務所）・顧問税理士・適格請求書発行事業者登録番号も明記されています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            サービス名のとおり「即時・誠実」を掲げたスピード対応が特徴で、AIとベテラン専任担当によるハイブリッド審査により最短60分での資金調達、契約締結後最短10分での入金をうたっています。即日での買取は1,000万円までで、申込フォームの希望金額は5万円〜1,000万円の範囲です（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            契約方法はオンライン（クラウドサイン）・来店（神田店）・出張の3パターンから選択でき、申込は電話・メールフォーム・LINEに対応しています。契約形態は2社間・3社間の両方に対応し、介護報酬・診療報酬ファクタリングも取り扱っています。債権譲渡登記は原則行わないと公式Q&Aに記載されています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">ソクデルの3つの強み（公式サイトの表記より）</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>最短60分の資金調達・契約締結後は最短10分で入金</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>オンライン・来店・出張の3つから選べる契約方法</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>専任担当制＋2社間/3社間・介護報酬/診療報酬にも対応</span>
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
              ソクデルについては、大手口コミサイトやレビューサイトにおける第三者の投稿がまだ少なく、当サイトの調査時点（2026年7月）では、利用者の生の声から傾向を判断できるだけの十分な口コミ情報を確認できませんでした。そのため、本ページでは架空の口コミや体験談を掲載せず、公式サイトで確認できる事実のみにもとづいて解説しています。
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              公式サイトには解体業・造園業・運送業などの「ご利用者様の声」が掲載されていますが、これらは公式サイト上の自社掲載コンテンツであり、第三者による検証可能な口コミではない点に留意してください。利用を検討する際は、必ず見積もりを取り、手数料・契約条件（償還請求権の有無・債権譲渡登記の扱い）を書面で確認したうえで、複数社と比較することをおすすめします。
            </p>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ソクデルのメリット4つ
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
            ソクデルのデメリット3つ
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
            ソクデルの利用の流れ
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
                  <span>当日中（最短60分）に1,000万円以下の資金を確保したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>オンラインだけでなく来店・出張など対面での契約も選びたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>専任担当者に相談しながら進めたい方・個人事業主の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>介護報酬・診療報酬ファクタリングを検討している事業者の方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料の下限水準（1〜2%台）を重視する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>1,000万円を超える大口の資金調達をしたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>税金・社会保険料を滞納中で分納手続きをしていない方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ソクデルの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ソクデルは、最短60分の資金調達スピードと、オンライン・来店・出張から選べる契約方法の柔軟さが特徴のファクタリングサービスです。専任担当制で担当者の交代も相談できる点、会社概要に顧問弁護士・顧問税理士・インボイス登録番号まで明記している点など、スピード一辺倒ではなく相談体制や情報開示にも配慮が見られます（公式サイトにて2026年7月確認）。個人信用情報機関への照会を行わない独自審査で、個人事業主や少額（5万円〜）の相談にも門戸を開いています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、手数料は5%〜と下限が他社より高めで上限も非公表のため、コスト面は見積もりを取るまで判断できません。買取上限も即日1,000万円までのため、大口調達には不向きです。税金・社会保険料の未納（分納手続きなし）は買取不可と公式に明記されている点も、事前に確認しておくべきポイントです。
          </p>
          <p className="leading-relaxed text-text-light">
            スピードと対面相談の両立を求める方には検討しやすいサービスですが、手数料水準を確かめるためにも相見積もりは必須です。少額・スピード重視なら一律10%で手数料が明確な
            <Link href="/reviews/paytner/" className="text-primary underline hover:no-underline">ペイトナー</Link>
            ・
            <Link href="/reviews/labol/" className="text-primary underline hover:no-underline">ラボル</Link>
            、対面重視・大口なら
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
            ソクデルの無料審査・見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            最短60分の資金調達。オンライン・来店・出張から契約方法を選べます。
          </p>
          <a
            href="https://www.sokuderu.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            ソクデル公式サイトで無料相談
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
              href="/reviews/labol/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ラボルの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">最短30分・少額対応のファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/betrading/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">全国対応の大手ファクタリングを検証</p>
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
