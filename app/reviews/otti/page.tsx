import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "オッティ（OTTI）の口コミ・評判｜最短3時間審査・上野のファクタリングを検証",
  description:
    "オッティ（OTTI）の口コミ・評判を徹底調査。株式会社オッティ（東京・上野）運営、手数料5%〜、最短3時間のスピード審査・最短即日振込、最大5,000万円、法人・個人事業主対応のファクタリングを公式情報で検証します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/otti/",
  },
  openGraph: {
    title:
      "オッティ（OTTI）の口コミ・評判｜最短3時間審査・上野のファクタリングを検証",
    description:
      "オッティ（OTTI）の口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
    url: "https://hyogo-shihoushoshi.jp/reviews/otti/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "オッティ（OTTI）" },
  {
    label: "手数料",
    value:
      "5%〜（「業界最低水準の5%から対応」・上限は公式表記なし）（公式サイトにて2026年7月確認）",
  },
  {
    label: "入金スピード",
    value:
      "最短3時間のスピード審査・最短即日振込（※売掛金の金額による）（公式サイトにて2026年7月確認）",
  },
  {
    label: "買取可能額",
    value:
      "最大5,000万円と記載（※申込フォームの金額選択肢は3億円まで存在。公式サイトにて2026年7月確認）",
  },
  { label: "対象", value: "法人・個人事業主（公式サイトにて2026年7月確認）" },
  {
    label: "契約方式",
    value: "2社間（メイン）・3社間",
  },
  {
    label: "オンライン対応",
    value:
      "全国から申込可・審査は来店不要。ただし契約前に面談あり（出張または来店）＝完全オンライン完結の表記はなし",
  },
  {
    label: "営業時間",
    value:
      "9:00〜19:00（定休日：土日祝日・メールのみ365日対応）（公式サイトにて2026年7月確認）",
  },
  {
    label: "運営会社",
    value:
      "株式会社オッティ（東京都台東区東上野三丁目10番5号・代表：小野貢司・設立年は公式表記なし）",
  },
];

const merits = [
  {
    title: "最短3時間のスピード審査で最短即日の資金化",
    description:
      "オッティは、最短3時間のスピード審査と即日対応を掲げるファクタリング会社です（公式サイトにて2026年7月確認）。公式サイトでは「最短即日にてお振込み」と記載されており、急な資金需要にも対応できる体制です。ただし対応スピードは売掛金の金額によるとの注記もあるため、大きな金額の場合は事前に所要時間を確認しておくと安心です。",
  },
  {
    title: "最大5,000万円までの高額買取に対応",
    description:
      "公式サイトには、取引先に知られない2社間ファクタリングで最大5,000万円までの高額売掛金の買取に対応すると記載されています（公式サイトにて2026年7月確認）。少額特化型のオンラインファクタリングでは数百万円が上限のサービスも多い中、まとまった金額の売掛金を現金化したい場合にも相談できる水準です。なお、申込フォームの希望金額の選択肢には3億円までの区分が存在するため、5,000万円超の場合も一度相談してみる価値はあります。",
  },
  {
    title: "法人・個人事業主の両方に対応、赤字・債務超過・税金滞納も相談可",
    description:
      "オッティは法人だけでなく個人事業主にも対応しています（公式サイトにて2026年7月確認）。また公式FAQでは、赤字決算・債務超過・税金滞納があってもファクタリングであれば問題ないとされており、担保・保証人も不要です。ファクタリングは売掛先の信用力を重視する審査のため、自社の財務状況に不安がある事業者でも相談しやすい姿勢が示されています。",
  },
  {
    title: "上野の事務所での対面相談＋全国対応",
    description:
      "オッティの事務所は東京・上野（JR上野駅から徒歩5分・台東区東上野）にあり、来店での面談に加え、出張での面談にも対応しています（公式サイトにて2026年7月確認）。全国どこからでも申込が可能で、審査は来店不要です。担当者と顔を合わせて契約条件を確認したうえで進めたい方にとって、対面の場が用意されているのは安心材料です。",
  },
];

const demerits = [
  {
    title: "手数料の下限5%〜は他社と比べて高めで、上限も非公表",
    description:
      "手数料は「業界最低水準の5%から対応」と下限のみの公表で、上限は公式サイトに記載がありません（2026年7月確認時点）。下限5%は、1〜3%台の下限を公表している他社と比べると高めの水準です。実際の手数料は案件ごとの見積もり次第のため、必ず複数社で相見積もりを取って比較することをおすすめします。",
  },
  {
    title: "契約前に面談があり、完全オンライン完結ではない",
    description:
      "公式サイトの利用の流れでは、審査後に出張または来店での面談を経て契約に進むとされています（公式サイトにて2026年7月確認）。オンライン完結・非対面で契約まで終えたい方には不向きです。また、電話受付は平日9:00〜19:00（土日祝定休・メールのみ365日対応）のため、土日祝に契約まで進めたい場合はスケジュールに注意が必要です。",
  },
  {
    title: "設立年などの会社情報の開示が限定的で、第三者の口コミも少ない",
    description:
      "公式サイトの会社概要には所在地・代表者名・連絡先は記載されていますが、設立年・資本金などの記載はありません（2026年7月確認時点）。また、買取可能額について本文では最大5,000万円とする一方、申込フォームには3億円までの選択肢があるなど、表記に幅があります。第三者による口コミ・評判情報もまだ多くないため、契約条件（手数料・償還請求権の有無・債権譲渡登記の扱い）は必ず書面で確認しましょう。",
  },
];

const steps = [
  {
    step: "1",
    title: "相談・問い合わせ",
    description:
      "電話（平日9:00〜19:00）またはメール（365日体制）で相談・申込。全国どこからでも申込可能です（公式サイトにて2026年7月確認）。",
  },
  {
    step: "2",
    title: "スピード審査（最短3時間）",
    description:
      "必要書類が揃い次第、審査を開始。最短3時間で対応とされています（※売掛金の金額による）。審査は来店不要です。",
  },
  {
    step: "3",
    title: "面談・買取条件の提示",
    description:
      "審査後、買取条件が提示され、必要に応じて出張または来店で面談を行います。公式FAQでは面談は一時間程度で終了とされています。",
  },
  {
    step: "4",
    title: "契約・入金",
    description:
      "契約完了後、指定口座へ振込。最短即日での振込に対応しています（公式サイトにて2026年7月確認）。",
  },
];

const faqs = [
  {
    question: "オッティ（OTTI）の手数料はいくらですか？",
    answer:
      "公式サイトでは「業界最低水準の5%から対応」と記載されています（公式サイトにて2026年7月確認）。上限は公表されていないため、実際の手数料は売掛先の信用力や契約形態に応じた見積もりで確認する必要があります。下限5%は他社と比べて高めの水準のため、相見積もりでの比較をおすすめします。",
  },
  {
    question: "オッティは本当に即日で入金されますか？",
    answer:
      "公式サイトでは最短3時間のスピード審査・最短即日振込と記載されています（公式サイトにて2026年7月確認）。ただし「※売掛金の金額による」との注記があるため、金額が大きい場合は所要時間を事前に確認してください。電話受付は平日9:00〜19:00のため、即日を狙うなら午前中の早い時間の申込が確実です。",
  },
  {
    question: "オッティは個人事業主でも利用できますか？",
    answer:
      "はい、公式サイトで法人・個人事業主の両方に対応していることが明記されています（公式サイトにて2026年7月確認）。個人事業主で資金繰りに困っている場合も相談可能とされています。",
  },
  {
    question: "創業して間もないのですが、オッティを利用できますか？",
    answer:
      "公式FAQでは、売掛先との取引が6ヶ月以上あれば利用可能とされています（公式サイトにて2026年7月確認）。創業からの年数よりも、売掛先との取引実績が判断材料になります。取引期間が浅い場合は、事前に相談して確認しましょう。",
  },
  {
    question: "オッティの利用は売掛先に知られませんか？",
    answer:
      "公式FAQでは、2社間ファクタリングであれば売掛先に知られずに資金調達が可能とされています（公式サイトにて2026年7月確認）。オッティは2社間をメインとしており、3社間にも対応しています。手数料を抑えたい場合は、売掛先の承諾を得て行う3社間も選択肢になります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "オッティ（OTTI）の口コミ・評判｜最短3時間審査・上野のファクタリングを検証",
  description:
    "オッティ（OTTI）の口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/otti/",
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
      name: "オッティ（OTTI）",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function OttiReviewPage() {
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
          { label: "オッティ（OTTI）" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            オッティ（OTTI）の口コミ・評判
            <br className="hidden md:block" />
            最短3時間審査・上野のファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            株式会社オッティ（東京・上野）が運営するファクタリング「OTTI」の手数料・審査・入金スピード・契約方法を、公式サイトで確認できる情報にもとづいて検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            オッティ（OTTI）は、最短3時間のスピード審査・最短即日振込と、最大5,000万円までの高額買取が特徴の東京・上野のファクタリング会社です（公式サイトにて2026年7月確認）。法人・個人事業主の両方に対応し、赤字・債務超過・税金滞納でも相談可とされる一方、手数料は5%〜（上限非公表）と下限が他社より高めで、契約前に面談（出張または来店）があるため完全オンライン完結ではありません。対面重視・大口なら
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            、来店・出張・オンラインから契約方法を選びたいなら
            <Link href="/reviews/sokuderu/" className="text-primary underline hover:no-underline">ソクデル</Link>
            、少額をオンライン完結したいなら
            <Link href="/reviews/paytner/" className="text-primary underline hover:no-underline">ペイトナー</Link>
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
            <li><a href="#basic-info" className="hover:underline">1. オッティの基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. オッティの会社概要と特徴</a></li>
            <li><a href="#reviews" className="hover:underline">3. 口コミ・評判の現状</a></li>
            <li><a href="#merits" className="hover:underline">4. オッティのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">5. オッティのデメリット3つ</a></li>
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
            オッティの基本情報
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
            オッティの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            オッティ（OTTI）は、株式会社オッティが運営するファクタリングサービスです。公式サイトの会社概要によると、所在地は東京都台東区東上野三丁目10番5号（JR山手線・上野駅から徒歩5分／東京メトロ銀座線・稲荷町駅から徒歩5分）、代表者は小野貢司氏です（公式サイトにて2026年7月確認）。設立年・資本金は公式サイトに記載がありません。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            サービスの柱はスピードで、最短3時間のスピード審査・最短即日振込をうたっています（※売掛金の金額による）。買取可能額は最大5,000万円と記載されており、2社間ファクタリングをメインに3社間にも対応します。担保・保証人は不要で、赤字決算・債務超過・税金滞納があっても相談可能とされています（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            申込は全国どこからでも可能で、審査は来店不要です。ただし契約前には出張または来店での面談があるため、完全オンライン完結型のサービスではありません。電話受付は平日9:00〜19:00（土日祝定休）で、メールは365日対応です。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">オッティの3つの強み（公式サイトの表記より）</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>最短3時間のスピード審査・最短即日振込</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>最大5,000万円までの高額買取に対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>法人・個人事業主対応＋赤字・債務超過・税金滞納も相談可</span>
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
              オッティについては、大手口コミサイトやレビューサイトにおける第三者の投稿がまだ少なく、当サイトの調査時点（2026年7月）では、利用者の生の声から傾向を判断できるだけの十分な口コミ情報を確認できませんでした。そのため、本ページでは架空の口コミや体験談を掲載せず、公式サイトで確認できる事実のみにもとづいて解説しています。
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              なお、公式サイトにはメディア掲載記事の転載が掲載されていますが、これらは公式サイト上の自社掲載コンテンツであり、第三者による検証可能な口コミではない点に留意してください。利用を検討する際は、必ず見積もりを取り、手数料・契約条件（償還請求権の有無・債権譲渡登記の扱い）を書面で確認したうえで、複数社と比較することをおすすめします。
            </p>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            オッティのメリット4つ
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
            オッティのデメリット3つ
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
            オッティの利用の流れ
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
                  <span>数千万円規模のまとまった売掛金を現金化したい方（最大5,000万円）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>担当者と対面（来店・出張）で相談してから契約したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>赤字決算・債務超過・税金滞納があり他社で断られた経験のある方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>東京・上野近郊で相談しやすいファクタリング会社を探している方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料の下限水準（1〜3%台）を重視する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>面談なし・完全オンラインで契約まで完結したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>土日祝に電話相談から契約まで進めたい方（電話は平日のみ）</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            オッティの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            オッティ（OTTI）は、最短3時間のスピード審査・最短即日振込と、最大5,000万円までの高額買取が特徴の、東京・上野に事務所を構えるファクタリング会社です（公式サイトにて2026年7月確認）。法人・個人事業主の両方に対応し、赤字決算・債務超過・税金滞納があっても相談可能とされているため、財務状況に不安のある事業者でも門戸が開かれています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、手数料は5%〜と下限が他社より高めで上限も非公表のため、コスト面は見積もりを取るまで判断できません。契約前に出張または来店での面談があるため、完全オンライン完結を求める方には不向きです。また、設立年・資本金など会社情報の開示が限定的で、第三者の口コミもまだ少ないため、契約条件は必ず書面で確認しましょう。
          </p>
          <p className="leading-relaxed text-text-light">
            対面での相談を重視しつつスピードも求める方には検討しやすいサービスですが、手数料水準を確かめるためにも相見積もりは必須です。対面重視・大口なら
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            、契約方法を来店・出張・オンラインから選びたいなら
            <Link href="/reviews/sokuderu/" className="text-primary underline hover:no-underline">ソクデル</Link>
            、少額・オンライン完結なら
            <Link href="/reviews/paytner/" className="text-primary underline hover:no-underline">ペイトナー</Link>
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
            オッティの無料相談はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            最短3時間のスピード審査。法人・個人事業主どちらも相談できます。
          </p>
          <a
            href="https://otti-factoring.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            オッティ公式サイトで無料相談
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
              <p className="mt-1 text-sm text-text-light">全国対応の大手ファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/sokuderu/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ソクデルの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">最短60分・来店/出張/オンライン契約対応を検証</p>
            </Link>
            <Link
              href="/reviews/paytner/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ペイトナーの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">最短10分入金・一律10%のファクタリング</p>
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
