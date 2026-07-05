import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "買速（カイソク）の口コミ・評判｜最短30分のオンラインファクタリングを検証",
  description:
    "買速（カイソク）の口コミ・評判を徹底調査。株式会社アドプランニング運営、手数料2%〜、最短即日（オンライン契約なら最短30分）、10万円〜5,000万円対応のファクタリングを公式情報で検証します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/kaisoku/",
  },
  openGraph: {
    title:
      "買速（カイソク）の口コミ・評判｜最短30分のオンラインファクタリングを検証",
    description:
      "買速（カイソク）の口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
    url: "https://hyogo-shihoushoshi.jp/reviews/kaisoku/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "買速（かいそく）" },
  {
    label: "手数料",
    value:
      "2%〜（トップページ表記。FAQページでは1%〜10%とも記載・上限は要見積もり）（公式サイトにて2026年7月確認）",
  },
  {
    label: "入金スピード",
    value:
      "最短即日（2社間×オンライン契約で最短30分）（公式サイトにて2026年7月確認）",
  },
  {
    label: "買取可能額",
    value: "10万円〜5,000万円（公式FAQにて2026年7月確認）",
  },
  { label: "対象", value: "法人・個人事業主・フリーランス" },
  {
    label: "契約方式",
    value: "主に2社間（公式FAQにて2026年7月確認）",
  },
  {
    label: "オンライン対応",
    value: "○（zoom面談・クラウドサイン電子契約で来店不要・全国対応）",
  },
  {
    label: "債権譲渡登記",
    value: "留保（登記なし）に対応（公式サイトにて2026年7月確認）",
  },
  {
    label: "営業時間",
    value: "電話受付9:00〜19:00・Webフォームは24時間受付",
  },
  { label: "運営会社", value: "株式会社アドプランニング" },
];

const merits = [
  {
    title: "2社間×オンライン契約で最短30分の入金に対応",
    description:
      "買速は申込から審査・契約・入金までオンラインで完結でき、公式サイトでは2社間ファクタリングとオンライン契約の組み合わせで最短30分での振込が可能とされています（公式サイトにて2026年7月確認）。審査結果は基本的に30分以内に通知、面談が必要な場合もzoomで対応、契約は電子契約サービス「クラウドサイン」を利用するため、来店不要で全国から利用できます。",
  },
  {
    title: "赤字決算・税金滞納中でも相談できる柔軟審査",
    description:
      "公式サイトでは、赤字決算・税金滞納中・銀行融資審査NG・設立間もない事業者でも利用可能と明記されています（公式サイトにて2026年7月確認）。審査で重視されるのは申込者ではなく売掛先の信用力とされており、審査通過率80%（※2022年3月集計・公式表記）を掲げています。他社で断られた売掛金でも相談できるとしています。",
  },
  {
    title: "10万円〜5,000万円まで幅広い買取レンジ",
    description:
      "公式FAQでは買取可能額を10万円から最大5,000万円と案内しています（公式サイトにて2026年7月確認）。少額債権から中規模の資金調達までカバーしており、売掛金の一部だけを買い取ってもらうことも可能とされています。個人事業主・フリーランス向けの少額買取プランも用意されています。",
  },
  {
    title: "債権譲渡登記の留保・償還請求権なしの契約",
    description:
      "買速は債権譲渡登記の留保（登記なしでの契約）に対応しており、登記にかかる日数や費用を抑えられます（公式サイトにて2026年7月確認）。また、契約は償還請求権のないノンリコース契約で、万が一売掛先が倒産して売掛金を回収できなくても、利用者に弁済義務は発生しないと公式に明記されています。",
  },
];

const demerits = [
  {
    title: "手数料の表記がページにより異なり、実際の水準が読みにくい",
    description:
      "公式サイトのトップページ・特徴ページでは「買取手数料2%〜」、FAQページでは「業界最安水準の1%〜10%」と、ページによって手数料の表記が異なります（いずれも公式サイトにて2026年7月確認）。上限を含めた実際の手数料は案件ごとの見積もり次第のため、契約前に必ず見積書で手数料と契約条件を確認し、他社とも比較することをおすすめします。",
  },
  {
    title: "第三者の口コミ・評判情報がまだ少ない",
    description:
      "大手ファクタリング会社と比較すると、口コミサイトやレビューサイトでの第三者による評判情報が少なく、実際の利用者の声から判断できる材料が限られます。公式サイトには審査通過率80%（※2022年3月集計）や前期買取実績56億円（申告金額）といった公式表記の数値がありますが、第三者機関による検証データではない点は理解しておきましょう。",
  },
  {
    title: "3社間ファクタリングの詳細は公式表記なし",
    description:
      "公式FAQでは「買速では主にこの2社間ファクタリングを提供しています」とされており、3社間ファクタリングの手数料や条件に関する具体的な公式表記は確認できませんでした（2026年7月時点）。売掛先の承諾を得て手数料を抑える3社間を希望する場合は、事前に対応可否を問い合わせるか、3社間の条件を公表している他社を検討してください。",
  },
];

const steps = [
  {
    step: "1",
    title: "申込・オンライン査定",
    description:
      "電話（受付9:00〜19:00）またはWebフォーム（24時間受付）から申込。30秒のオンライン査定・乗り換えシミュレーションも利用できます。",
  },
  {
    step: "2",
    title: "オンライン審査",
    description:
      "担当者から電話またはメールで連絡があり、必要書類（原則、身分証・請求書・通帳のコピーの3点）を案内。基本的に30分以内に審査結果が通知されます。",
  },
  {
    step: "3",
    title: "オンライン面談（必要に応じて）",
    description:
      "必要に応じてzoomでオンライン面談を実施。不明点はこの段階で確認できます。",
  },
  {
    step: "4",
    title: "オンライン契約・入金",
    description:
      "手数料・契約条件に同意したらクラウドサインで電子契約を締結し、指定口座へ振込。申込から入金まで最短30分とされています（公式サイトにて2026年7月確認）。",
  },
];

const faqs = [
  {
    question: "買速（カイソク）の手数料はいくらですか？",
    answer:
      "公式サイトのトップページでは買取手数料2%〜、FAQページでは業界最安水準の1%〜10%と記載されています（いずれも公式サイトにて2026年7月確認）。実際の手数料は売掛先の信用力や売掛金の内容により案件ごとに決まるため、正確な費用は無料見積もりで確認してください。公式サイトでは、見積もり料・事務手数料・出張費など手数料以外の費用は一切かからないとされています。",
  },
  {
    question: "買速は本当に即日で入金されますか？",
    answer:
      "公式サイトでは、2社間ファクタリングかつオンライン契約を利用すれば最短30分での入金が可能で、午前中の申込なら当日中の着金が十分可能とされています（公式サイトにて2026年7月確認）。必要書類（身分証・請求書・通帳のコピー）を事前に揃えておくとスムーズです。",
  },
  {
    question: "買速は個人事業主・フリーランスでも利用できますか？",
    answer:
      "はい、公式サイトでは個人事業主・フリーランスも利用可能とされており、個人事業主向けの少額買取プランも用意されています（公式サイトにて2026年7月確認）。ただし対象は事業の売掛債権のみで、給与を受け取る権利を対象とする給料ファクタリングは取り扱っていません。",
  },
  {
    question: "赤字決算や税金滞納があっても買速を利用できますか？",
    answer:
      "公式サイトでは、赤字決算・税金滞納中でも利用可能と明記されています（公式サイトにて2026年7月確認）。ファクタリングの審査では申込者の経営状態よりも売掛先の信用力が重視されるためです。銀行融資やビジネスローンの審査に落ちた場合でも相談できるとしています。",
  },
  {
    question: "買速を利用すると売掛先に知られますか？",
    answer:
      "買速は主に2社間ファクタリングを提供しており、利用者と買速の間だけで契約が完結するため、売掛先への通知や承諾は不要とされています（公式サイトにて2026年7月確認）。債権譲渡登記の留保（登記なし契約）にも対応しています。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "買速（カイソク）の口コミ・評判｜最短30分のオンラインファクタリングを検証",
  description:
    "買速（カイソク）の口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/kaisoku/",
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
      name: "買速",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function KaisokuReviewPage() {
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
          { label: "買速" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            買速（カイソク）の口コミ・評判
            <br className="hidden md:block" />
            最短30分のオンラインファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            株式会社アドプランニングが運営するファクタリング「買速」の手数料・審査・入金スピード・個人事業主対応を、公式サイトで確認できる情報にもとづいて検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            買速は、2社間×オンライン契約（zoom面談・クラウドサイン）で最短30分〜即日の入金に対応し、赤字決算・税金滞納中でも相談できる柔軟審査をうたうサービスです（公式サイトにて2026年7月確認）。買取可能額は10万円〜5,000万円で、個人事業主・フリーランスも対象です。一方、手数料の表記がページにより「2%〜」「1%〜10%」と異なり実際の水準が読みにくいこと、第三者の口コミがまだ少ないことから、条件を重視する方は
            <Link href="/reviews/ququmo/" className="text-primary underline hover:no-underline">QuQuMo</Link>
            や
            <Link href="/reviews/accelfactor/" className="text-primary underline hover:no-underline">アクセルファクター</Link>
            など実績を公開している他社と相見積もりを取ったうえで判断するのがおすすめです。
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
            <li><a href="#basic-info" className="hover:underline">1. 買速の基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. 買速の会社概要と特徴</a></li>
            <li><a href="#reviews" className="hover:underline">3. 口コミ・評判の現状</a></li>
            <li><a href="#merits" className="hover:underline">4. 買速のメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">5. 買速のデメリット3つ</a></li>
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
            買速の基本情報
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
            買速の会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            買速（かいそく）は、株式会社アドプランニングが運営するファクタリングサービスです。公式サイトの会社概要によると、代表取締役は佐藤聖人氏、設立は2019年11月、本社は東京都中央区八重洲2丁目11番7号一新ビル8階で、池袋営業所（東京都豊島区南池袋）と大阪支社（大阪市淀川区西中島）を構えています（公式サイトにて2026年7月確認）。前期買取実績は56億円（申告金額・公式表記）とされています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            サービスの中心は2社間ファクタリングで、zoomによるオンライン面談と電子契約サービス「クラウドサイン」を使ったオンライン完結の契約に対応しています。債権譲渡登記の留保（登記なし契約）や償還請求権のないノンリコース契約を公式に明示しており、赤字決算・税金滞納中の事業者や、他社で断られた売掛金の相談も受け付けるとしています。給料ファクタリング・つけ払いファクタリング等の個人向けサービスは取り扱っていません。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            なお、公式サイトには「創業10年以上の実績」という記載がある一方、会社概要に記載された運営会社の設立は2019年11月です（いずれも公式サイトにて2026年7月確認）。実績年数の数え方については、気になる場合は申込前に直接確認するとよいでしょう。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">買速の3つの強み（公式サイトの表記より）</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>2社間×オンライン契約で最短30分の入金に対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>赤字決算・税金滞納中でも相談できる柔軟審査（審査通過率80%※2022年3月集計・公式表記）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>10万円〜5,000万円・法人から個人事業主/フリーランスまで対応</span>
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
              買速については、大手口コミサイトやレビューサイトにおける第三者の投稿がまだ少なく、当サイトの調査時点（2026年7月）では、利用者の生の声から傾向を判断できるだけの十分な口コミ情報を確認できませんでした。そのため、本ページでは架空の口コミや体験談を掲載せず、公式サイトで確認できる事実のみにもとづいて解説しています。
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              審査通過率80%（※2022年3月集計）や前期買取実績56億円（申告金額）といった数値は公式サイトの自社表記であり、第三者機関の検証データではありません。利用を検討する際は、必ず見積もりを取り、手数料・契約条件（償還請求権の有無・債権譲渡登記の扱い）を書面で確認したうえで、複数社と比較することをおすすめします。
            </p>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            買速のメリット4つ
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
            買速のデメリット3つ
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
            買速の利用の流れ
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
                  <span>オンライン完結で当日中に資金を確保したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>赤字決算・税金滞納などで他社の審査に落ちた方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>10万円程度の少額から相談したい個人事業主・フリーランスの方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>債権譲渡登記なしで売掛先に知られず利用したい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料の上限を含めた条件を事前に明確に把握したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>第三者の口コミ・利用実績の多さを重視する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>3社間ファクタリングを前提に手数料を抑えたい方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            買速の総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            買速は、2社間ファクタリングとオンライン契約（zoom・クラウドサイン）の組み合わせによる最短30分の入金スピードと、赤字決算・税金滞納中でも相談できる柔軟審査を打ち出したサービスです。10万円〜5,000万円という買取レンジの広さ、債権譲渡登記の留保、償還請求権なしのノンリコース契約、手数料以外の費用がかからない点など、公式サイトで確認できる条件は急ぎの資金需要に対応しやすい内容になっています（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、手数料の表記がページにより「2%〜」「1%〜10%」と揺れており、実際の手数料水準は見積もりを取るまでわかりません。また、第三者の口コミ情報がまだ少ないため、条件の妥当性は自分で相見積もりを取って確かめる必要があります。
          </p>
          <p className="leading-relaxed text-text-light">
            即日性と審査の柔軟さを重視しつつ、手数料は複数社比較で確認する——という使い方であれば、買速は候補の一つになり得ます。比較先としては、手数料1%〜のオンライン完結型
            <Link href="/reviews/ququmo/" className="text-primary underline hover:no-underline">QuQuMo</Link>
            や、審査通過率を公表している
            <Link href="/reviews/accelfactor/" className="text-primary underline hover:no-underline">アクセルファクター</Link>
            が同じ土俵で検討しやすいでしょう。
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
            買速のオンライン査定はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            30秒のオンライン査定・乗り換えシミュレーションに対応。Webフォームは24時間受付です。
          </p>
          <a
            href="https://kai-soku.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            買速公式サイトで無料査定
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
              <p className="mt-1 text-sm text-text-light">手数料1%〜のオンライン完結ファクタリング</p>
            </Link>
            <Link
              href="/reviews/accelfactor/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">審査通過率を公表するファクタリングを検証</p>
            </Link>
            <Link
              href="/diagnosis/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング無料診断</p>
              <p className="mt-1 text-sm text-text-light">7つの質問であなたに合う会社を提案</p>
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
