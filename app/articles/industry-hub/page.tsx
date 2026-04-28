import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "業種別ファクタリングガイド一覧｜あなたの業界に最適な会社が見つかる",
  description:
    "建設業・運送業・医療・IT・製造業・介護・人材派遣・クリエイティブ・飲食・不動産・美容・ECなど19業種のファクタリング活用ガイドを網羅。業界特有の資金繰り課題と最適なファクタリング会社が見つかります。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/industry-hub/",
  },
  openGraph: {
    title: "業種別ファクタリングガイド一覧｜あなたの業界に最適な会社が見つかる",
    description:
      "19業種のファクタリング活用ガイドを網羅。業界特有の資金繰り課題と最適なファクタリング会社が見つかります。",
    url: "https://factoring-partner.pages.dev/articles/industry-hub/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const industries = [
  {
    slug: "construction",
    name: "建設業",
    description: "入金サイト60〜120日の長期化に対応。元請け・下請け構造での売掛金早期現金化に最適なファクタリング会社を紹介。",
    icon: "🏗️",
  },
  {
    slug: "transport",
    name: "運送業",
    description: "燃料費・車両維持費の先払い負担を軽減。運送業特有の長い支払いサイトに対応するファクタリングを解説。",
    icon: "🚚",
  },
  {
    slug: "medical",
    name: "医療",
    description: "診療報酬債権ファクタリングの仕組みと活用法。病院・クリニック向けの資金調達を専門的に解説。",
    icon: "🏥",
  },
  {
    slug: "it-industry",
    name: "IT業界",
    description: "SES・受託開発・SaaSなどIT業界特有の支払いサイクルに合わせたファクタリング活用法を紹介。",
    icon: "💻",
  },
  {
    slug: "manufacturing",
    name: "製造業",
    description: "原材料仕入れ・外注費の先行投資を支援。大型受注時の資金繰りをファクタリングで解決する方法を解説。",
    icon: "🏭",
  },
  {
    slug: "nursing-care",
    name: "介護業",
    description: "介護報酬債権の早期現金化で安定経営。国保連からの入金待ちを短縮するファクタリング活用法を紹介。",
    icon: "🤝",
  },
  {
    slug: "staffing",
    name: "人材派遣業",
    description: "給与先払い・社会保険料負担をカバー。人材派遣業の資金繰りを改善するファクタリング活用法を解説。",
    icon: "👥",
  },
  {
    slug: "creative",
    name: "クリエイティブ業",
    description: "広告制作・デザイン・映像制作など、納品から入金まで時間がかかるクリエイティブ業界のファクタリング活用法。",
    icon: "🎨",
  },
  {
    slug: "restaurant",
    name: "飲食業",
    description: "食材仕入れ・人件費の先行負担を軽減。飲食店経営の資金繰りを安定させるファクタリング活用法を紹介。",
    icon: "🍽️",
  },
  {
    slug: "real-estate",
    name: "不動産業",
    description: "仲介手数料・管理費の入金タイミングを改善。不動産業界のキャッシュフロー課題を解決するファクタリング。",
    icon: "🏠",
  },
  {
    slug: "beauty",
    name: "美容業",
    description: "美容室・エステ・ネイルサロンの資金繰りを支援。美容業界特有の設備投資と運転資金の課題を解説。",
    icon: "💇",
  },
  {
    slug: "ec-commerce",
    name: "EC・通販業",
    description: "仕入れ・広告費の先行投資を支援。EC事業の急成長期に必要な運転資金をファクタリングで確保する方法。",
    icon: "🛒",
  },
  {
    slug: "dental",
    name: "歯科",
    description: "歯科診療報酬債権の早期現金化で設備投資・運転資金を確保。歯科医院向けファクタリングの活用法。",
    icon: "🦷",
  },
  {
    slug: "pharmacy",
    name: "調剤薬局",
    description: "調剤報酬債権ファクタリングの仕組みと活用法。薬局経営の資金繰り改善に役立つ情報を網羅。",
    icon: "💊",
  },
  {
    slug: "logistics",
    name: "物流業",
    description: "倉庫管理・配送業務の運転資金を確保。物流業界の大口取引に対応するファクタリング活用法を解説。",
    icon: "📦",
  },
  {
    slug: "consulting",
    name: "コンサルティング業",
    description: "プロジェクト単位の報酬を早期現金化。コンサルティング業界の長い支払いサイトを短縮する方法。",
    icon: "📊",
  },
  {
    slug: "saas",
    name: "SaaS事業",
    description: "サブスクリプション収益の将来売掛を活用。SaaS企業のグロースに必要な資金をファクタリングで調達。",
    icon: "☁️",
  },
  {
    slug: "printing",
    name: "印刷業",
    description: "用紙・インク等の材料費先払いと長い入金サイトに対応。印刷業界向けファクタリング活用法を紹介。",
    icon: "🖨️",
  },
  {
    slug: "agriculture",
    name: "農業",
    description: "収穫・出荷サイクルに合わせた資金調達。農業特有の季節変動に対応するファクタリング活用法を解説。",
    icon: "🌾",
  },
];

const faqs = [
  {
    q: "業種によってファクタリングの手数料は変わりますか？",
    a: "はい、業種によって手数料が変わることがあります。売掛先の信用力や業界の商慣習（支払いサイトの長さ、倒産リスクなど）が審査に影響するためです。一般的に、医療・介護など公的機関が売掛先の場合は手数料が低く、建設業など支払いサイトが長い業種はやや高めになる傾向があります。",
  },
  {
    q: "自分の業種に対応しているファクタリング会社をどう選べばいいですか？",
    a: "まず業種特化型のファクタリング会社を検討しましょう。建設業なら「けんせつくん」、医療なら診療報酬債権対応の会社など専門性の高いサービスがあります。業種特化型がない場合は、ビートレーディングやアクセルファクターなど幅広い業種に対応する大手を選ぶと安心です。",
  },
  {
    q: "特殊な業種でもファクタリングは利用できますか？",
    a: "基本的に売掛債権（請求書）が発生する業種であれば、ほとんどの業種でファクタリングを利用できます。ただし、現金取引がメインの業種（小売業の一部など）や、売掛先が個人消費者の場合は利用が難しいことがあります。",
  },
  {
    q: "業種別で審査に通りやすい・通りにくいはありますか？",
    a: "売掛先が官公庁や大手企業である業種（医療・介護・建設業の公共工事など）は審査に通りやすい傾向があります。一方、売掛先が小規模事業者や個人事業主の場合は審査が厳しくなることがあります。重要なのは自社の業種よりも売掛先の信用力です。",
  },
  {
    q: "業種特化型と総合型、どちらを選ぶべきですか？",
    a: "業種特有の課題がある場合（建設業の出来高払い、医療の診療報酬など）は業種特化型がおすすめです。特殊な商慣習を理解しているため、スムーズに審査が進みます。一般的な売掛金の場合は、手数料や入金スピードで比較して総合型を選んでも問題ありません。",
  },
];

/* ── Structured Data ──────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "業種別ファクタリングガイド一覧｜あなたの業界に最適な会社が見つかる",
      datePublished: "2026-04-28",
      dateModified: "2026-04-28",
      author: { "@type": "Organization", name: "ファクタリングパートナー編集部" },
      publisher: {
        "@type": "Organization",
        name: "ファクタリングパートナー",
        url: "https://factoring-partner.pages.dev",
      },
      description:
        "19業種のファクタリング活用ガイドを網羅。業界特有の資金繰り課題と最適なファクタリング会社が見つかります。",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://factoring-partner.pages.dev/articles/industry-hub/",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
        { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" },
        { "@type": "ListItem", position: 3, name: "業種別ファクタリングガイド一覧" },
      ],
    },
  ],
};

/* ── Page ─────────────────────────────────────────── */

export default function IndustryHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Breadcrumb
          items={[
            { href: "/", label: "ホーム" },
            { href: "/articles/", label: "コラム" },
            { label: "業種別ファクタリングガイド一覧" },
          ]}
        />

        <h1 className="mb-6 text-2xl font-bold text-[#1e3a5f] md:text-3xl">
          業種別ファクタリングガイド一覧
        </h1>

        <p className="mb-4 text-base leading-relaxed text-gray-700">
          ファクタリングは業種によって活用方法や選ぶべき会社が大きく異なります。建設業では入金サイトの長さ、医療では診療報酬債権の特殊性、IT業界ではSES契約の支払いサイクルなど、各業界に固有の課題があります。
        </p>
        <p className="mb-8 text-base leading-relaxed text-gray-700">
          このページでは、19の業種別にファクタリングの活用ガイドをまとめています。あなたの業界に最適なファクタリング会社を見つけるための入口としてご活用ください。
        </p>

        {/* ── 業種選びのポイント ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            業種別にファクタリング会社を選ぶポイント
          </h2>
          <div className="space-y-4 rounded-lg border border-[#d4dbe6] bg-white p-6">
            <div>
              <h3 className="mb-2 font-bold text-[#1e3a5f]">1. 業界の商慣習を理解している会社を選ぶ</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                建設業の出来高払いや、医療業界の診療報酬請求など、業界特有の商慣習を理解しているファクタリング会社を選ぶことが重要です。業種特化型のサービスなら、書類準備や審査がスムーズに進みます。
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-bold text-[#1e3a5f]">2. 売掛先の業種・規模との相性を確認する</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                ファクタリングの審査では、売掛先（取引先）の信用力が重視されます。売掛先が官公庁や大手企業の場合は審査に通りやすく、手数料も低くなる傾向があります。自社の売掛先に対応実績のある会社を選びましょう。
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-bold text-[#1e3a5f]">3. 必要な金額・スピードに対応しているか</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                業種によって必要な資金調達額は大きく異なります。建設業なら数千万円規模、フリーランスなら数万円〜数十万円が中心です。自社の資金ニーズに合った買取金額の範囲と入金スピードを持つ会社を選びましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── 業種一覧カードグリッド ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            全19業種のファクタリングガイド
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/articles/${ind.slug}/`}
                className="group block rounded-lg border border-[#d4dbe6] bg-white p-5 transition-colors hover:bg-[#f7f9fc] hover:border-[#e87c3e]"
              >
                <div className="mb-2 text-2xl">{ind.icon}</div>
                <h3 className="mb-2 text-base font-bold text-[#1e3a5f] group-hover:text-[#e87c3e]">
                  {ind.name}向けファクタリング
                </h3>
                <p className="text-xs leading-relaxed text-gray-600">
                  {ind.description}
                </p>
                <span className="mt-3 inline-block text-xs font-semibold text-[#e87c3e]">
                  詳しく見る →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 業種別の特徴比較表 ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            業種別ファクタリングの特徴比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1e3a5f] text-white">
                  <th className="border border-[#d4dbe6] px-3 py-2 text-left">業種</th>
                  <th className="border border-[#d4dbe6] px-3 py-2 text-left">一般的な支払いサイト</th>
                  <th className="border border-[#d4dbe6] px-3 py-2 text-left">主な課題</th>
                  <th className="border border-[#d4dbe6] px-3 py-2 text-left">おすすめタイプ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">建設業</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">60〜120日</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">材料費先払い・多重下請け構造</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">業種特化型</td>
                </tr>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">運送業</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">30〜60日</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">燃料費・車両維持費の先行支出</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">即日対応型</td>
                </tr>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">医療</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">約2ヶ月</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">診療報酬入金の遅さ</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">診療報酬特化型</td>
                </tr>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">IT業界</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">30〜60日</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">プロジェクト型報酬の入金遅延</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">オンライン完結型</td>
                </tr>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">製造業</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">60〜90日</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">原材料仕入れ・設備投資</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">大口対応型</td>
                </tr>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">介護</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">約2ヶ月</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">介護報酬入金の遅さ・人件費負担</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">介護報酬特化型</td>
                </tr>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">人材派遣</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">30〜60日</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">給与先払い・社会保険料</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">即日対応型</td>
                </tr>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">飲食業</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">即日〜30日</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">食材仕入れ・人件費の先行負担</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">少額対応型</td>
                </tr>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">EC・通販</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">15〜45日</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">仕入れ・広告費の先行投資</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">オンライン完結型</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 業種別選び方ガイド ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            業種タイプ別おすすめファクタリングの選び方
          </h2>

          <div className="space-y-6">
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-[#2a7a6e]">
                公的機関が売掛先の業種（医療・介護・歯科・調剤薬局）
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-700">
                国保連や社会保険診療報酬支払基金が売掛先となるため、信用力が非常に高く、手数料が低めに設定されます。診療報酬債権・介護報酬債権に対応した専門ファクタリング会社を選びましょう。
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/articles/medical/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  医療 →
                </Link>
                <Link href="/articles/nursing-care/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  介護 →
                </Link>
                <Link href="/articles/dental/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  歯科 →
                </Link>
                <Link href="/articles/pharmacy/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  調剤薬局 →
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-[#d4dbe6] bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-[#2a7a6e]">
                支払いサイトが長い業種（建設業・製造業・運送業）
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-700">
                60日〜120日の長い支払いサイトが業界標準の業種では、材料費や外注費の先行支出が経営を圧迫します。大口対応が可能で、業界の商慣習に精通したファクタリング会社がおすすめです。
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/articles/construction/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  建設業 →
                </Link>
                <Link href="/articles/manufacturing/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  製造業 →
                </Link>
                <Link href="/articles/transport/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  運送業 →
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-[#d4dbe6] bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-[#2a7a6e]">
                デジタル・クリエイティブ系（IT・SaaS・クリエイティブ・EC）
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-700">
                オンライン完結型のファクタリングが便利です。請求書のアップロードだけで手続きが完了し、最短数時間で入金されるサービスを選びましょう。少額から対応可能なサービスもフリーランスには重要です。
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/articles/it-industry/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  IT業界 →
                </Link>
                <Link href="/articles/saas/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  SaaS →
                </Link>
                <Link href="/articles/creative/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  クリエイティブ →
                </Link>
                <Link href="/articles/ec-commerce/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  EC・通販 →
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-[#d4dbe6] bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-[#2a7a6e]">
                サービス業（人材派遣・飲食・美容・不動産・コンサルティング）
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-700">
                人件費や仕入れコストが先行する業種です。少額からの利用に対応し、個人事業主でも利用できるファクタリング会社を選ぶのがポイントです。
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/articles/staffing/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  人材派遣 →
                </Link>
                <Link href="/articles/restaurant/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  飲食業 →
                </Link>
                <Link href="/articles/beauty/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  美容業 →
                </Link>
                <Link href="/articles/real-estate/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  不動産 →
                </Link>
                <Link href="/articles/consulting/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  コンサルティング →
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-[#d4dbe6] bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-[#2a7a6e]">
                一次産業・その他（農業・印刷業・物流業）
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-700">
                季節変動が大きい農業や、材料費先行の印刷業など、業種特有の事情に対応できるファクタリング会社を選びましょう。幅広い業種に対応する総合型の大手ファクタリング会社がおすすめです。
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/articles/agriculture/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  農業 →
                </Link>
                <Link href="/articles/printing/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  印刷業 →
                </Link>
                <Link href="/articles/logistics/" className="rounded-full bg-[#f7f9fc] px-3 py-1 text-xs font-semibold text-[#1e3a5f] hover:bg-[#d4dbe6]">
                  物流業 →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── ファクタリング利用の流れ ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            業種を問わないファクタリング利用の基本ステップ
          </h2>
          <div className="space-y-4">
            {[
              { step: "STEP 1", title: "自社の業種に合ったファクタリング会社を選ぶ", desc: "上記のガイドから自社の業種に合った記事を読み、おすすめの会社をチェックしましょう。業種特化型があれば優先的に検討します。" },
              { step: "STEP 2", title: "複数社に見積もりを依頼する", desc: "最低2〜3社に見積もりを依頼し、手数料・入金スピード・対応の丁寧さを比較しましょう。相見積もりで手数料が下がることもあります。" },
              { step: "STEP 3", title: "必要書類を準備して申し込む", desc: "請求書・通帳のコピー・本人確認書類・決算書など必要書類を揃えて申し込みます。業種によって追加書類が必要な場合があります。" },
              { step: "STEP 4", title: "審査・契約・入金", desc: "審査通過後、契約を締結して入金を受けます。最短即日〜翌営業日で入金されるケースがほとんどです。" },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 rounded-lg border border-[#d4dbe6] bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e87c3e] text-xs font-bold text-white">
                  {s.step.replace("STEP ", "")}
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-[#1e3a5f]">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 関連ガイド ─── */}
        <section className="py-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">関連ガイド</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/articles/area-hub/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">エリア別ファクタリング会社一覧 →</p>
              </Link>
              <Link href="/articles/amount-hub/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">金額別ファクタリングガイド →</p>
              </Link>
              <Link href="/articles/faq-all/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">ファクタリングよくある質問50選 →</p>
              </Link>
              <Link href="/articles/glossary/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">ファクタリング用語集 →</p>
              </Link>
              <Link href="/ranking/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">ファクタリング会社おすすめランキング →</p>
              </Link>
              <Link href="/articles/documents-by-industry/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">業種別必要書類ガイド →</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-[#d4dbe6] bg-white"
              >
                <summary className="cursor-pointer px-5 py-4 text-sm font-bold text-[#1e3a5f] group-open:border-b group-open:border-[#d4dbe6]">
                  {faq.q}
                </summary>
                <p className="px-5 py-4 text-sm leading-relaxed text-gray-700">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ── まとめ ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            まとめ
          </h2>
          <div className="rounded-lg bg-[#f7f9fc] p-6">
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              ファクタリングは業種によって最適な会社や活用方法が異なります。自社の業種に特化したガイドを参考にすることで、より有利な条件でファクタリングを利用できます。
            </p>
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              特に重要なのは以下の3点です。
            </p>
            <ul className="mb-4 list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>業界の商慣習を理解しているファクタリング会社を選ぶ</li>
              <li>複数社に見積もりを取って手数料を比較する</li>
              <li>売掛先の信用力に応じた会社を選ぶ</li>
            </ul>
            <p className="text-sm leading-relaxed text-gray-700">
              上記の業種別ガイドをぜひ活用して、あなたの業界に最適なファクタリング会社を見つけてください。
            </p>
          </div>
        </section>

        {/* ── CTA ─── */}
        <div className="text-center">
          <Link
            href="/ranking/"
            className="inline-block rounded-lg bg-[#e87c3e] px-8 py-4 text-base font-bold text-white shadow-md transition-colors hover:bg-[#d06c2e]"
          >
            ファクタリング会社おすすめランキングを見る
          </Link>
        </div>
      </div>
    </>
  );
}
