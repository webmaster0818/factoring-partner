import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ウィットの口コミ・評判｜小口特化・完全オンラインのファクタリングを検証",
  description:
    "株式会社ウィットのファクタリングの口コミ・評判を徹底調査。最短2時間・審査約30分・買取金額に下限なし・注文書買取対応・LINE申込可の完全オンラインファクタリングを公式情報で検証します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/wit/",
  },
  openGraph: {
    title:
      "ウィットの口コミ・評判｜小口特化・完全オンラインのファクタリングを検証",
    description:
      "株式会社ウィットのファクタリングの口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
    url: "https://hyogo-shihoushoshi.jp/reviews/wit/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "ウィット（株式会社ウィットのファクタリング）" },
  {
    label: "手数料",
    value:
      "具体的な料率は公式表記なし（「業界最安水準」の表現のみ）（公式サイトにて2026年7月確認）",
  },
  {
    label: "入金スピード",
    value:
      "最短2時間・審査開始から約30分で審査結果を連絡（銀行営業時間外は翌営業日入金）（公式サイトにて2026年7月確認）",
  },
  {
    label: "買取可能額",
    value:
      "下限なし（「金額に下限は設けておりません」）・上限は公式表記なし（公式サイトにて2026年7月確認）",
  },
  {
    label: "対象",
    value:
      "法人・個人事業主（中小企業に特化。個人向けの給与ファクタリング・融資は提供なしと明記）",
  },
  {
    label: "契約方式",
    value: "2社間（取引先への通知不要）・3社間の両方に対応",
  },
  {
    label: "対象債権",
    value: "請求書に加えて注文書（受注時）での買取にも対応（公式サイトにて2026年7月確認）",
  },
  {
    label: "オンライン対応",
    value:
      "完全オンライン手続き・スマホのみで完結・全国対応。LINE申込可（オンライン・LINEは24時間365日受付）",
  },
  {
    label: "受付時間",
    value:
      "電話（0120-117-297）は9:00〜18:00、オンライン・LINEは24時間365日（公式サイトにて2026年7月確認）",
  },
  {
    label: "運営会社",
    value:
      "株式会社ウィット（東京都品川区西五反田2-24-4 THE CROSS GOTANDA 4F・代表：佐野俊亮・設立2016年11月4日・仙台支社/福岡支社あり）",
  },
];

const merits = [
  {
    title: "買取金額に下限がなく、少額・小口の売掛金でも相談できる",
    description:
      "ウィットの公式FAQでは「金額に下限は設けておりませんので、他のファクタリング会社では敬遠される小額からのご利用も問題ございません」と明記されています（公式サイトにて2026年7月確認）。ファクタリング会社の中には数十万円未満の少額債権を敬遠するところもあるため、小口の資金需要がある小規模事業者・個人事業主にとって相談しやすいサービスです。中小企業に特化したファクタリング会社であることも公式に明示されています。",
  },
  {
    title: "完全オンライン・スマホ完結で、LINEからも申し込める",
    description:
      "契約手続きはネットで完結し、スマホだけで申し込みから契約まで進められます（公式サイトにて2026年7月確認）。申込は電話・相談フォームに加えてLINEにも対応しており、オンライン・LINEの受付は24時間365日です。来店や対面での面談は不要で、全国どこからでも利用できます。非対面・少ないやり取りで手続きを済ませたい方に向いた設計です。",
  },
  {
    title: "審査結果は約30分・最短2時間で現金化のスピード対応",
    description:
      "公式サイトでは、審査開始から30分程度で審査結果を連絡し、契約完了後すぐに指定口座へ入金、申込から最短2時間程度での振込が可能とされています（公式サイトにて2026年7月確認）。銀行営業時間外の場合は翌営業日の入金になります。当日中の支払いに間に合わせたい場合など、急ぎの資金需要に対応できる体制です。",
  },
  {
    title: "請求書だけでなく注文書での買取にも対応",
    description:
      "ウィットは、入金待ちの請求書に加えて、受注時の注文書での買取にも対応しています（公式サイトにて2026年7月確認）。通常のファクタリングは請求書（確定債権）が対象のため、受注段階で資金化したい場合の選択肢は多くありません。材料費や人件費が先行する建設業・製造業などで、着手前の資金を確保したいケースで相談できる点は特徴です。なお、運営会社の株式会社ウィットは、当サイトでも紹介している建設業特化ファクタリング「けんせつくん」の運営会社でもあります。",
  },
];

const demerits = [
  {
    title: "手数料の具体的な料率が公式サイトに記載されていない",
    description:
      "公式サイトには「業界最安水準の破格の手数料」という表現はあるものの、具体的な料率（下限・上限）は記載されていません（2026年7月確認時点）。実際の手数料は審査・見積もりを経ないと分からないため、コストを事前に比較しにくいのはデメリットです。下限や一律料率を公表している他社と必ず相見積もりを取り、提示された手数料と契約条件（償還請求権の有無・債権譲渡登記の扱い）を書面で確認しましょう。",
  },
  {
    title: "買取可能額の上限が公表されておらず、大口の目安が立てにくい",
    description:
      "買取金額の下限がない一方で、上限も公式サイトに記載がありません（2026年7月確認時点）。公式サイトに掲載されている利用例（自社掲載）は40万円〜830万円の調達額で、小口中心のサービス設計がうかがえます。数千万円規模の大口債権を現金化したい場合は、高額買取を明示している会社も並行して検討するのが確実です。",
  },
  {
    title: "運営会社の情報開示が限定的で、第三者の口コミも少ない",
    description:
      "公式サイトの会社概要には所在地・代表者・設立年月・支社は記載されていますが、資本金の記載はありません（2026年7月確認時点）。また、公式サイトの「お客様の声」は自社掲載コンテンツであり、第三者が検証できる口コミ・評判情報はまだ多くありません。顧客満足度94%という数値も自社公表値である点に留意し、契約前の条件確認を徹底しましょう。",
  },
];

const steps = [
  {
    step: "1",
    title: "申込",
    description:
      "電話（9:00〜18:00）・相談フォーム・LINE（24時間365日）から申込。スマホだけで手続きできます（公式サイトにて2026年7月確認）。",
  },
  {
    step: "2",
    title: "審査（約30分で結果連絡）",
    description:
      "提供した情報をもとに審査が行われ、審査開始から30分程度で結果の連絡があります。信用情報を用いない審査で、売掛金の回収見込みが基準とされています。",
  },
  {
    step: "3",
    title: "契約・入金",
    description:
      "契約完了後、すぐに指定の銀行口座へ買取金額が入金されます（銀行営業時間外の場合は翌営業日）。申込から最短2時間程度です。",
  },
];

const faqs = [
  {
    question: "ウィットのファクタリング手数料はいくらですか？",
    answer:
      "公式サイトには「業界最安水準」という表現はあるものの、具体的な料率は記載されていません（公式サイトにて2026年7月確認）。実際の手数料は審査・見積もりで提示されるため、契約前に必ず金額を確認し、料率を公表している他社とも比較することをおすすめします。",
  },
  {
    question: "ウィットは少額でも利用できますか？",
    answer:
      "はい、公式FAQで「金額に下限は設けておりません」と明記されており、他社では敬遠されがちな少額からの利用も問題ないとされています（公式サイトにて2026年7月確認）。小口の売掛金を現金化したい小規模事業者・個人事業主に向いたサービスです。",
  },
  {
    question: "ウィットは個人事業主でも利用できますか？",
    answer:
      "はい、公式FAQで法人・個人事業主のどちらでも利用できると明記されています（公式サイトにて2026年7月確認）。なお、株式会社ウィットは中小企業に特化したファクタリングサービスを提供しており、個人向けの給与ファクタリングや融資サービスは提供していないと公式に記載されています。",
  },
  {
    question: "ウィットは注文書でも買い取ってもらえますか？",
    answer:
      "はい、公式サイトでは入金待ちの請求書に加えて、発注時の注文書での買取にも対応すると記載されています（公式サイトにて2026年7月確認）。受注段階で資金化したい場合にも相談できます。対象となる注文書の条件は案件により異なるため、申込時に確認してください。",
  },
  {
    question: "ウィットの審査は厳しいですか？赤字や税金滞納でも使えますか？",
    answer:
      "公式FAQでは、回収見込みのある売掛金があれば基本的に利用でき、赤字決算・債務超過・税金滞納・開業間もない場合や、他社の審査に落ちた場合でも相談可能とされています（公式サイトにて2026年7月確認）。審査は信用情報を用いず、売掛金の回収見込みが基準とされています。ただし最終的な可否や条件は個別審査で決まります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ウィットの口コミ・評判｜小口特化・完全オンラインのファクタリングを検証",
  description:
    "株式会社ウィットのファクタリングの口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/wit/",
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
      name: "ウィット",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function WitReviewPage() {
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
          { label: "ウィット" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ウィットの口コミ・評判
            <br className="hidden md:block" />
            小口特化・完全オンラインのファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            株式会社ウィットが提供するファクタリングの手数料・審査・入金スピード・契約方法を、公式サイトで確認できる情報にもとづいて検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            ウィットは、買取金額に下限がなく少額から相談でき、完全オンライン・スマホ完結（LINE申込可）で最短2時間の資金化に対応する、中小企業特化のファクタリングです（公式サイトにて2026年7月確認）。請求書に加えて注文書の買取にも対応し、建設業特化「けんせつくん」と同じ株式会社ウィットが運営しています。一方、手数料の具体的な料率と買取上限は公式に公表されていないため、コストを事前に把握したい方には不向きです。手数料が一律で明確な
            <Link href="/reviews/paytner/" className="text-primary underline hover:no-underline">ペイトナー</Link>
            や
            <Link href="/reviews/labol/" className="text-primary underline hover:no-underline">ラボル</Link>
            （いずれも一律10%）、建設業なら
            <Link href="/reviews/kensetsukun/" className="text-primary underline hover:no-underline">けんせつくん</Link>
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
            <li><a href="#basic-info" className="hover:underline">1. ウィットの基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. ウィットの会社概要と特徴</a></li>
            <li><a href="#reviews" className="hover:underline">3. 口コミ・評判の現状</a></li>
            <li><a href="#merits" className="hover:underline">4. ウィットのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">5. ウィットのデメリット3つ</a></li>
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
            ウィットの基本情報
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
            ウィットの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ウィットは、株式会社ウィットが提供する中小企業特化のファクタリングサービスです。公式サイトの会社概要によると、代表者は佐野俊亮氏、設立は2016年11月、本社は東京都品川区西五反田2-24-4 THE CROSS GOTANDA 4Fで、仙台支社（宮城県仙台市）と福岡支社（福岡県福岡市）を構えています（公式サイトにて2026年7月確認）。当サイトで紹介している建設業特化ファクタリング「けんせつくん」も同社の運営です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            サービスの特徴は「小口×非対面×スピード」です。買取金額に下限を設けておらず、少額の売掛金でも相談できます。手続きは完全オンライン・スマホ完結で、申込は電話・フォーム・LINEに対応（オンライン・LINEは24時間365日受付）。審査開始から約30分で結果連絡、申込から最短2時間での振込が可能とされています（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            契約形態は2社間・3社間の両方に対応し、2社間なら取引先への通知はありません。対象債権は請求書に加えて受注時の注文書にも対応します。審査は信用情報を用いず売掛金の回収見込みを基準とし、開業間もない方・赤字決算・税金滞納・他社で断られた方も相談可能とされています。なお、個人向けの給与ファクタリングや融資サービスは提供していないと公式に明記されています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">ウィットの3つの強み（公式サイトの表記より）</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>買取金額に下限なし＝少額・小口の売掛金でも相談可</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>完全オンライン・スマホ完結＋LINE申込（24時間365日受付）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>審査約30分・最短2時間＋請求書だけでなく注文書買取にも対応</span>
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
              ウィットについては、大手口コミサイトやレビューサイトにおける第三者の投稿がまだ少なく、当サイトの調査時点（2026年7月）では、利用者の生の声から傾向を判断できるだけの十分な口コミ情報を確認できませんでした。そのため、本ページでは架空の口コミや体験談を掲載せず、公式サイトで確認できる事実のみにもとづいて解説しています。
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              公式サイトには工務店・運送業・軽配送業などの「お客様の声」（調達額40万円〜830万円・即日入金の事例）が掲載されていますが、これらは公式サイト上の自社掲載コンテンツであり、第三者による検証可能な口コミではない点に留意してください。顧客満足度94%という数値も自社公表値です。利用を検討する際は、必ず見積もりを取り、手数料・契約条件（償還請求権の有無・債権譲渡登記の扱い）を書面で確認したうえで、複数社と比較することをおすすめします。
            </p>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ウィットのメリット4つ
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
            ウィットのデメリット3つ
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
            ウィットの利用の流れ
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
                  <span>数十万円規模など、少額・小口の売掛金を現金化したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>スマホ・LINEだけで非対面で手続きを完結したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>受注段階の注文書で早めに資金化したい方（建設業・製造業など）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>開業間もない・赤字・税金滞納などで他社に断られた経験のある方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料の水準を申込前に把握してから比較したい方（料率非公表）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>数千万円規模の大口債権を確実に現金化したい方（上限非公表）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>担当者と対面で相談してから契約したい方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ウィットの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ウィットは、買取金額に下限を設けない小口対応と、完全オンライン・スマホ完結（LINE申込可・24時間365日受付）の手軽さ、審査約30分・最短2時間のスピードを兼ね備えた、中小企業特化のファクタリングサービスです（公式サイトにて2026年7月確認）。請求書に加えて注文書の買取にも対応しており、受注段階での資金化を相談できる点も特徴です。運営会社の株式会社ウィットは2016年設立で、建設業特化の「けんせつくん」も手がけています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、手数料の具体的な料率と買取上限が公式サイトに記載されていないため、コスト・金額面の目安を事前に立てにくいのが最大の注意点です。公式掲載の利用例は40万円〜830万円と小口中心のため、大口の資金調達には高額買取を明示する他社の併用が現実的です。顧客満足度94%などの数値は自社公表値であり、第三者の口コミもまだ少ないため、契約条件は必ず書面で確認しましょう。
          </p>
          <p className="leading-relaxed text-text-light">
            少額・非対面・スピードを重視する方には検討しやすいサービスですが、手数料水準を確かめるためにも相見積もりは必須です。手数料が一律で明確な
            <Link href="/reviews/paytner/" className="text-primary underline hover:no-underline">ペイトナー</Link>
            ・
            <Link href="/reviews/labol/" className="text-primary underline hover:no-underline">ラボル</Link>
            （いずれも一律10%）、建設業なら同社運営の
            <Link href="/reviews/kensetsukun/" className="text-primary underline hover:no-underline">けんせつくん</Link>
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
            ウィットの無料相談はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            少額から相談可。スマホ・LINEで完結、最短2時間の資金化。
          </p>
          <a
            href="https://witservice.co.jp/factoring/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            ウィット公式サイトで無料相談
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/kensetsukun/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">けんせつくんの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">同じ株式会社ウィット運営・建設業特化ファクタリング</p>
            </Link>
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
              <p className="mt-1 text-sm text-text-light">最短60分・少額対応のファクタリングを検証</p>
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
