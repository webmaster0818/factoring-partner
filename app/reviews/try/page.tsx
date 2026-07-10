import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリングのTRYの口コミ・評判｜手数料1.2%〜・24時間受付を検証",
  description:
    "ファクタリングのTRY（トライ）の口コミ・評判を徹底調査。株式会社SKO運営、2社間3%〜・3社間1.2%〜、最短2時間、1億円までの買取、債権譲渡登記不要、24時間365日受付のファクタリングを公式情報で検証します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/try/",
  },
  openGraph: {
    title:
      "ファクタリングのTRYの口コミ・評判｜手数料1.2%〜・24時間受付を検証",
    description:
      "ファクタリングのTRY（トライ）の口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
    url: "https://hyogo-shihoushoshi.jp/reviews/try/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "ファクタリングのTRY（トライ）" },
  {
    label: "手数料",
    value:
      "2社間3%〜・3社間1.2%〜（上限は公式表記なし）（公式サイトにて2026年7月確認）",
  },
  {
    label: "入金スピード",
    value:
      "最短2時間（オンライン契約の場合）・最短即日入金（公式サイトにて2026年7月確認）",
  },
  {
    label: "買取可能額",
    value:
      "1億円まで（それ以上の契約実績もあり要相談と公式に記載）（公式サイトにて2026年7月確認）",
  },
  { label: "対象", value: "法人・個人事業主（公式サイトにて2026年7月確認）" },
  {
    label: "契約方式",
    value: "2社間・3社間（債権譲渡登記不要と公式に記載）",
  },
  {
    label: "オンライン対応",
    value:
      "○（Zoom面談によるオンライン契約・クラウドサイン利用。対面・全国出張にも対応）",
  },
  {
    label: "受付時間",
    value:
      "電話は24時間365日受付。会社の営業時間は9:00〜18:00（土日祝定休）（公式サイトにて2026年7月確認）",
  },
  {
    label: "運営会社",
    value:
      "株式会社SKO（東京都台東区東上野2-21-1-4F ケーワイビル・代表：廣澤悠哉・設立2018年2月5日・資本金1,000万円）",
  },
];

const merits = [
  {
    title: "手数料は2社間3%〜・3社間1.2%〜と下限が低水準",
    description:
      "ファクタリングのTRYの手数料は、2社間ファクタリングで3%〜、3社間ファクタリングで1.2%〜と公表されています（公式サイトにて2026年7月確認）。2社間の下限3%は、5%以上の下限を提示する会社と比べて低い水準です。また公式サイトには、他社からの乗り換えで「手数料3%優遇」との記載もあります（優遇の適用条件は公式サイトに詳細記載がないため、申込時に確認してください）。ただし上限は非公表のため、実際の手数料は見積もりで確認が必要です。",
  },
  {
    title: "オンライン契約で最短2時間・24時間365日受付",
    description:
      "オンライン契約の場合は最短2時間でのスピード契約・最短即日入金に対応するとされています（公式サイトにて2026年7月確認）。電話受付は24時間365日のため、夜間や土日祝にまず相談したい場合でも連絡できるのが特徴です。契約はZoom面談によるオンライン契約と電子契約サービス「クラウドサイン」に対応し、遠方でも契約可能です。対面での契約や全国出張対応も可能と記載されています。",
  },
  {
    title: "債権譲渡登記不要で、1億円までの高額買取に対応",
    description:
      "公式サイトでは、債権譲渡登記不要で契約可能と明記されています（公式サイトにて2026年7月確認）。登記費用がかからず、登記簿から売掛先や取引金融機関に知られるリスクを抑えられる点はメリットです。買取額は1億円までの高額買取が可能とされ、それ以上の契約実績もあるため相談可能と記載されています。少額から大口まで幅広い金額に対応できる体制です。",
  },
  {
    title: "業種制限なし・信用情報機関への照会なし、会社情報の開示も比較的丁寧",
    description:
      "公式サイトでは、業種制限なし・信用情報機関への照会なしで、売掛先に知られない秘密厳守の取引を掲げています（公式サイトにて2026年7月確認）。また会社概要には、代表者名（廣澤悠哉氏）・設立年月日（2018年2月5日）・資本金（1,000万円）・取引銀行（三菱UFJ銀行・三井住友銀行・みずほ銀行）まで明記されており、運営会社の情報開示は比較的丁寧です。",
  },
];

const demerits = [
  {
    title: "手数料の上限が非公表で、実際の料率は見積もり次第",
    description:
      "手数料は2社間3%〜・3社間1.2%〜と下限のみの公表で、上限は公式サイトに記載がありません（2026年7月確認時点）。「業界最低水準」との表現も公式の自社表現であり、実際の手数料は売掛先の信用力や金額に応じた個別見積もりで決まります。契約前に必ず見積もりを取り、他社と比較することをおすすめします。",
  },
  {
    title: "審査通過率97%・累計実績などは自社公表値で、第三者による検証はできない",
    description:
      "公式サイトには審査通過率97%、累計相談件数76,800件・累計買取額528億円、2025年の相談実績10,525件・買取金額92億6,450万円といった数値が掲載されています（公式サイトにて2026年7月確認）。これらは運営会社の自社公表値であり、第三者機関による検証データではない点に留意してください。通過率が高くても、自分の案件が必ず通るわけではありません。",
  },
  {
    title: "利用の流れに「来社もしくは訪社」の記載があり、案件により対面手続きになる場合がある",
    description:
      "公式サイトの取引の流れには「来社もしくは訪社」というステップが記載されており、オンライン契約（Zoom面談・クラウドサイン）と対面手続きが併存しています（公式サイトにて2026年7月確認）。どの案件がオンラインのみで完結できるかは公式サイトに明記されていないため、非対面での完結を希望する場合は申込時に確認が必要です。また、大手と比べると第三者の口コミ・評判情報がまだ少ない点にも留意してください。",
  },
];

const steps = [
  {
    step: "1",
    title: "申込（24時間365日受付）",
    description:
      "電話（24時間365日）・無料相談フォーム・LINEから申込。夜間・土日祝でも受付しています（公式サイトにて2026年7月確認）。",
  },
  {
    step: "2",
    title: "折り返し連絡・書類審査",
    description:
      "担当者から折り返しの連絡があり、提出書類にもとづいて審査が行われます。信用情報機関への照会はないと公式に記載されています。",
  },
  {
    step: "3",
    title: "契約（オンラインまたは対面）",
    description:
      "契約内容の連絡後、Zoom面談によるオンライン契約（クラウドサイン利用）、または来社・訪社（全国出張対応）で契約を締結します。",
  },
  {
    step: "4",
    title: "入金",
    description:
      "契約完了後、指定口座へ入金。オンライン契約なら最短2時間・最短即日入金に対応とされています（公式サイトにて2026年7月確認）。",
  },
];

const faqs = [
  {
    question: "ファクタリングのTRYの手数料はいくらですか？",
    answer:
      "公式サイトでは2社間ファクタリングで3%〜、3社間ファクタリングで1.2%〜と記載されています（公式サイトにて2026年7月確認）。上限は公表されていないため、実際の手数料は売掛先の信用力や契約形態に応じた見積もりで確認する必要があります。他社からの乗り換えで手数料3%優遇との記載もありますが、適用条件は申込時に確認してください。",
  },
  {
    question: "ファクタリングのTRYは本当に即日で入金されますか？",
    answer:
      "公式サイトでは、オンライン契約の場合で最短2時間・最短即日入金が可能とされています（公式サイトにて2026年7月確認）。電話受付は24時間365日ですが、入金は銀行の営業時間に左右されるため、即日を狙う場合は平日の早い時間帯に必要書類を揃えて申し込むのが確実です。",
  },
  {
    question: "ファクタリングのTRYは個人事業主でも利用できますか？",
    answer:
      "はい、公式サイトで法人・個人事業主の両方に対応していることが明記されており、個人事業主向けのファクタリング案内ページも用意されています（公式サイトにて2026年7月確認）。業種制限もないとされています。",
  },
  {
    question: "ファクタリングのTRYは債権譲渡登記が必要ですか？",
    answer:
      "公式サイトでは債権譲渡登記不要で契約可能と明記されています（公式サイトにて2026年7月確認）。登記費用の負担がなく、登記簿を通じて売掛先に知られるリスクを抑えられます。2社間契約であれば売掛先への通知もありません。",
  },
  {
    question: "審査通過率97%とありますが、誰でも審査に通りますか？",
    answer:
      "審査通過率97%は公式サイトに掲載されている運営会社の自社公表値です（公式サイトにて2026年7月確認）。第三者機関による検証データではなく、すべての申込が通るという意味でもありません。ファクタリングの審査は主に売掛先の信用力で判断されるため、売掛先の支払い能力や請求書の内容によっては利用できない場合もあります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ファクタリングのTRYの口コミ・評判｜手数料1.2%〜・24時間受付を検証",
  description:
    "ファクタリングのTRY（トライ）の口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/try/",
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
      name: "ファクタリングのTRY",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function TryReviewPage() {
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
          { label: "ファクタリングのTRY" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングのTRYの口コミ・評判
            <br className="hidden md:block" />
            手数料1.2%〜・24時間受付のファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            株式会社SKOが運営する「ファクタリングのTRY」の手数料・審査・入金スピード・契約方法を、公式サイトで確認できる情報にもとづいて検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            ファクタリングのTRYは、手数料2社間3%〜・3社間1.2%〜という低めの下限と、24時間365日の電話受付、債権譲渡登記不要、1億円までの高額買取が特徴のファクタリングです（公式サイトにて2026年7月確認）。オンライン契約なら最短2時間とスピードにも対応します。一方、手数料の上限は非公表で、審査通過率97%などの数値は自社公表値のため、相見積もりでの確認が前提です。オンライン完結・上限まで公表を重視するなら
            <Link href="/reviews/ququmo/" className="text-primary underline hover:no-underline">QuQuMo</Link>
            や
            <Link href="/reviews/olta/" className="text-primary underline hover:no-underline">OLTA</Link>
            、対面・大口なら
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
            <li><a href="#basic-info" className="hover:underline">1. ファクタリングのTRYの基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. ファクタリングのTRYの会社概要と特徴</a></li>
            <li><a href="#reviews" className="hover:underline">3. 口コミ・評判の現状</a></li>
            <li><a href="#merits" className="hover:underline">4. ファクタリングのTRYのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">5. ファクタリングのTRYのデメリット3つ</a></li>
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
            ファクタリングのTRYの基本情報
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
            ファクタリングのTRYの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングのTRY（トライ）は、株式会社SKOが運営するファクタリングサービスです。公式サイトの会社概要によると、代表者は廣澤悠哉氏、設立は2018年2月5日、資本金は1,000万円、所在地は東京都台東区東上野2-21-1-4F ケーワイビルです（公式サイトにて2026年7月確認）。事業内容はファクタリング事業・営業コンサルティング事業で、取引銀行として三菱UFJ銀行・三井住友銀行・みずほ銀行が記載されています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料は2社間3%〜・3社間1.2%〜で、債権譲渡登記不要・秘密厳守を掲げています。買取額は1億円までの高額買取が可能とされ、それ以上の契約実績もあるため相談可能と記載されています。公式サイトには累計相談件数76,800件・累計買取額528億円、審査通過率97%といった自社公表の実績数値も掲載されています（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            電話受付は24時間365日で、契約はZoom面談によるオンライン契約（電子契約サービス「クラウドサイン」利用）と対面（来社・訪社、全国出張対応）の両方に対応しています。法人・個人事業主のどちらも利用でき、業種制限なし・信用情報機関への照会なしとされています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">ファクタリングのTRYの3つの強み（公式サイトの表記より）</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料2社間3%〜・3社間1.2%〜の低めの下限設定</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>24時間365日受付＋オンライン契約なら最短2時間</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>債権譲渡登記不要・1億円までの高額買取に対応</span>
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
              ファクタリングのTRYについては、大手口コミサイトやレビューサイトにおける第三者の投稿がまだ少なく、当サイトの調査時点（2026年7月）では、利用者の生の声から傾向を判断できるだけの十分な口コミ情報を確認できませんでした。そのため、本ページでは架空の口コミや体験談を掲載せず、公式サイトで確認できる事実のみにもとづいて解説しています。
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              公式サイトには利用事例（ケーススタディ）が掲載されていますが、これらは公式サイト上の自社掲載コンテンツであり、第三者による検証可能な口コミではない点に留意してください。利用を検討する際は、必ず見積もりを取り、手数料・契約条件（償還請求権の有無・債権譲渡登記の扱い）を書面で確認したうえで、複数社と比較することをおすすめします。
            </p>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングのTRYのメリット4つ
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
            ファクタリングのTRYのデメリット3つ
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
            ファクタリングのTRYの利用の流れ
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
                  <span>2社間3%〜という低めの下限で手数料交渉をしたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>夜間・土日祝にまず相談したい方（電話24時間365日受付）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>債権譲渡登記なしで売掛先に知られず資金調達したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>数千万円〜1億円規模の大口債権を現金化したい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料の上限まで公表されている会社で費用を事前に把握したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>面談（Zoomまたは対面）なしで手続きを完結したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>第三者の口コミ・実績データを重視して選びたい方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングのTRYの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングのTRYは、2社間3%〜・3社間1.2%〜という低めの手数料下限と、24時間365日の電話受付、債権譲渡登記不要、1億円までの高額買取対応が特徴のファクタリングサービスです（公式サイトにて2026年7月確認）。会社概要には代表者・設立年月日・資本金・取引銀行まで明記されており、運営会社（株式会社SKO）の情報開示は比較的丁寧です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、手数料の上限は非公表のため、実際のコストは見積もりを取るまで判断できません。審査通過率97%や累計買取額528億円などの数値は自社公表値であり、第三者による検証はできない点も冷静に見る必要があります。利用の流れには「来社もしくは訪社」の記載もあるため、完全非対面で完結したい方は申込時にオンライン契約の可否を確認しましょう。
          </p>
          <p className="leading-relaxed text-text-light">
            低めの下限手数料と受付時間の柔軟さを求める方には検討しやすいサービスですが、相見積もりは必須です。オンライン完結・手数料上限の明示を重視するなら
            <Link href="/reviews/ququmo/" className="text-primary underline hover:no-underline">QuQuMo</Link>
            ・
            <Link href="/reviews/olta/" className="text-primary underline hover:no-underline">OLTA</Link>
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
            ファクタリングのTRYの無料相談はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            24時間365日受付。オンライン契約なら最短2時間で資金化。
          </p>
          <a
            href="https://www.factoring-try-sko.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            ファクタリングのTRY公式サイトで無料相談
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/ququmo/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">QuQuMoの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">オンライン完結・手数料1%〜のファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/olta/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTAの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料2〜9%・上限明示のクラウドファクタリング</p>
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
