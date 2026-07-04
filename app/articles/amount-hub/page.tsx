import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "金額別ファクタリングガイド｜少額1万円〜大口1億円超まで",
  description:
    "ファクタリングの買取金額を少額（1万円〜100万円）・中額（100万円〜1000万円）・大口（1000万円〜1億円超）に分けて、最適なファクタリング会社の選び方を解説。注文書ファクタリングも紹介。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/amount-hub/",
  },
  openGraph: {
    title: "金額別ファクタリングガイド｜少額1万円〜大口1億円超まで",
    description:
      "少額1万円から大口1億円超まで、買取金額別にファクタリング会社の選び方を解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/amount-hub/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const amountGuides = [
  {
    slug: "small-amount",
    title: "少額ファクタリング（1万円〜100万円）",
    range: "1万円〜100万円",
    description: "個人事業主やフリーランスに最適。1万円から利用可能なサービスが充実しており、手数料一律型が多いのが特徴です。請求書1枚からの少額買取に対応する会社を比較紹介。",
    target: "フリーランス・個人事業主・少額の売掛金がある方",
    features: ["1万円から利用可能", "手数料一律10%のサービスも", "最短10分で入金", "オンライン完結"],
    color: "#2a7a6e",
  },
  {
    slug: "large-amount",
    title: "大口ファクタリング（1000万円〜1億円超）",
    range: "1000万円〜上限なし",
    description: "中堅企業・大企業向けの大口ファクタリング。数千万円から億単位の売掛金を買い取れるサービスを紹介。手数料交渉のコツや3社間ファクタリングの活用法も解説。",
    target: "中堅企業・大企業・大型案件がある法人",
    features: ["上限なしの会社も", "手数料1%〜の低レート", "対面での丁寧な対応", "3社間ファクタリング対応"],
    color: "#1e3a5f",
  },
  {
    slug: "purchase-order",
    title: "注文書ファクタリング",
    range: "案件規模による",
    description: "納品前・役務提供前でも資金化が可能。注文書（発注書）段階でファクタリングを利用できるサービスを紹介。建設業や製造業など、着工前に資金が必要な業種に最適。",
    target: "建設業・製造業・着工前に資金が必要な方",
    features: ["納品前でも利用可能", "注文書・発注書で申し込み", "建設業に特に人気", "大型案件の資金調達に"],
    color: "#e87c3e",
  },
];

const amountComparison = [
  { range: "1万円〜30万円", service: "ペイトナー・ラボル", fee: "一律10%", speed: "最短10分", target: "フリーランス" },
  { range: "30万円〜100万円", service: "ペイトナー・ラボル・OLTA", fee: "2%〜10%", speed: "最短30分", target: "個人事業主" },
  { range: "100万円〜500万円", service: "OLTA・アクセルファクター", fee: "2%〜9%", speed: "最短即日", target: "小規模法人" },
  { range: "500万円〜1000万円", service: "ビートレーディング・PMG", fee: "2%〜8%", speed: "最短即日", target: "中小企業" },
  { range: "1000万円〜5000万円", service: "ビートレーディング・PMG", fee: "1%〜5%", speed: "最短即日", target: "中堅企業" },
  { range: "5000万円〜1億円", service: "ビートレーディング・日本中小企業金融サポート機構", fee: "1%〜3%", speed: "1〜3営業日", target: "大企業" },
  { range: "1億円超", service: "ビートレーディング・銀行系", fee: "応相談", speed: "応相談", target: "大企業" },
];

const faqs = [
  {
    q: "少額（数万円）のファクタリングは手数料が高くなりますか？",
    a: "少額専門のサービス（ペイトナー・ラボルなど）は手数料一律10%のため、金額に関わらず同じ手数料率です。一般的なファクタリング会社では少額の場合に手数料率が高くなる傾向がありますが、少額特化型サービスなら安心して利用できます。",
  },
  {
    q: "大口のファクタリングで手数料を抑えるコツは？",
    a: "3社間ファクタリングを利用する、複数社に見積もりを取る、継続利用で手数料を交渉する、の3つが効果的です。大口になるほど1%の手数料差が大きな金額になるため、必ず相見積もりを取りましょう。",
  },
  {
    q: "買取金額の上限がない会社は本当にいくらでも対応してくれますか？",
    a: "「上限なし」と謳っている会社でも、実際には案件ごとに審査があり、売掛先の信用力や取引実績によって買取可能額が決まります。億単位の大口案件の場合は、事前に相談して対応可能か確認しましょう。",
  },
  {
    q: "注文書ファクタリングと通常のファクタリングの違いは何ですか？",
    a: "通常のファクタリングは納品・サービス提供後に発行された請求書をもとに行いますが、注文書ファクタリングは納品前の注文書（発注書）段階で資金化できます。手数料は通常より高めですが、着工前や仕入れ前に資金が必要な場合に非常に便利です。",
  },
  {
    q: "金額によって必要書類は変わりますか？",
    a: "少額（100万円以下）のオンラインサービスでは、請求書と本人確認書類だけで利用できることが多いです。大口（500万円以上）の場合は、決算書・試算表・通帳のコピーなど追加書類が必要になることがあります。事前に確認しておきましょう。",
  },
];

/* ── Structured Data ──────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
      headline: "金額別ファクタリングガイド｜少額1万円〜大口1億円超まで",
      datePublished: "2026-04-28",
      dateModified: "2026-04-28",
      author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
      publisher: {
        "@type": "Organization",
        name: "ファクタリングパートナー",
        url: "https://hyogo-shihoushoshi.jp",
      },
      description:
        "少額1万円から大口1億円超まで、買取金額別にファクタリング会社の選び方を解説。",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://hyogo-shihoushoshi.jp/articles/amount-hub/",
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
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://hyogo-shihoushoshi.jp/" },
        { "@type": "ListItem", position: 2, name: "コラム", item: "https://hyogo-shihoushoshi.jp/articles/" },
        { "@type": "ListItem", position: 3, name: "金額別ファクタリングガイド" },
      ],
    },
  ],
};

/* ── Page ─────────────────────────────────────────── */

export default function AmountHubPage() {
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
            { label: "金額別ファクタリングガイド" },
          ]}
        />

        <h1 className="mb-6 text-2xl font-bold text-[#1e3a5f] md:text-3xl">
          金額別ファクタリングガイド
        </h1>

        <p className="mb-4 text-base leading-relaxed text-gray-700">
          ファクタリングは1万円の少額から1億円を超える大口まで、幅広い金額帯に対応しています。ただし、金額によって最適なファクタリング会社は異なります。少額ならオンライン完結型の手軽なサービス、大口なら対面での丁寧な対応と低手数料が重要です。
        </p>
        <p className="mb-8 text-base leading-relaxed text-gray-700">
          このページでは、買取金額別に最適なファクタリング会社の選び方と、各金額帯の詳細ガイドをまとめています。
        </p>

        {/* ── 金額別ガイドカード ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            金額別の詳細ガイド
          </h2>
          <div className="space-y-6">
            {amountGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/articles/${guide.slug}/`}
                className="group block rounded-lg border-2 bg-white p-6 transition-colors hover:bg-[#f7f9fc]"
                style={{ borderColor: guide.color }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold" style={{ color: guide.color }}>
                    {guide.title}
                  </h3>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: guide.color }}
                  >
                    {guide.range}
                  </span>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-gray-700">
                  {guide.description}
                </p>
                <p className="mb-3 text-xs text-gray-500">
                  対象: {guide.target}
                </p>
                <div className="flex flex-wrap gap-2">
                  {guide.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border px-3 py-1 text-xs"
                      style={{ borderColor: guide.color, color: guide.color }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-block text-sm font-semibold text-[#e87c3e]">
                  詳細ガイドを見る →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 金額別比較表 ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            金額帯別のファクタリング会社比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1e3a5f] text-white">
                  <th className="border border-[#d4dbe6] px-3 py-2 text-left">金額帯</th>
                  <th className="border border-[#d4dbe6] px-3 py-2 text-left">おすすめサービス</th>
                  <th className="border border-[#d4dbe6] px-3 py-2 text-left">手数料目安</th>
                  <th className="border border-[#d4dbe6] px-3 py-2 text-left">入金速度</th>
                  <th className="border border-[#d4dbe6] px-3 py-2 text-left">主な対象</th>
                </tr>
              </thead>
              <tbody>
                {amountComparison.map((row) => (
                  <tr key={row.range} className="hover:bg-[#f7f9fc]">
                    <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">{row.range}</td>
                    <td className="border border-[#d4dbe6] px-3 py-2">{row.service}</td>
                    <td className="border border-[#d4dbe6] px-3 py-2">{row.fee}</td>
                    <td className="border border-[#d4dbe6] px-3 py-2">{row.speed}</td>
                    <td className="border border-[#d4dbe6] px-3 py-2">{row.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 金額別の選び方ポイント ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            金額別ファクタリング会社の選び方
          </h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-[#2a7a6e]">少額（1万円〜100万円）の場合</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-[#e87c3e]">1.</span>
                  手数料率が明確なサービスを選ぶ（一律10%など）
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-[#e87c3e]">2.</span>
                  オンライン完結型で手間をかけないサービスが便利
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-[#e87c3e]">3.</span>
                  入金スピード重視なら最短10分のペイトナーがおすすめ
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-[#e87c3e]">4.</span>
                  初回利用は上限が低い場合があるので事前確認を
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-[#2a7a6e]">中額（100万円〜1000万円）の場合</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-[#e87c3e]">1.</span>
                  複数社に見積もりを取って手数料を比較する
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-[#e87c3e]">2.</span>
                  2社間・3社間の使い分けで手数料を最適化
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-[#e87c3e]">3.</span>
                  オンライン型と対面型の両方を検討
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-[#e87c3e]">4.</span>
                  継続利用で手数料が下がるサービスを選ぶ
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-[#2a7a6e]">大口（1000万円〜）の場合</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-[#e87c3e]">1.</span>
                  大手のファクタリング会社を優先（ビートレーディング・PMGなど）
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-[#e87c3e]">2.</span>
                  3社間ファクタリングで手数料を大幅に抑える（1%〜）
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-[#e87c3e]">3.</span>
                  対面での相談・審査を受け、信頼関係を構築する
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-[#e87c3e]">4.</span>
                  手数料の1%差が大きな金額になるため必ず相見積もりを
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 手数料シミュレーション ─── */}
      {/* ── 関連ツール・データ ─── */}
      <section className="mb-12">
        <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
          <p className="mb-3 font-bold text-primary">あわせて使いたいツール・データ</p>
          <ul className="space-y-2 text-sm text-text-light">
          <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
                    <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
          <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
          <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
          </ul>
        </div>
      </section>

        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            手数料シミュレーション
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-700">
            ファクタリングの手数料は売掛金額に対する割合で計算されます。金額別の手数料イメージを見てみましょう。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#2a7a6e] text-white">
                  <th className="border border-[#d4dbe6] px-3 py-2 text-left">売掛金額</th>
                  <th className="border border-[#d4dbe6] px-3 py-2 text-right">手数料2%</th>
                  <th className="border border-[#d4dbe6] px-3 py-2 text-right">手数料5%</th>
                  <th className="border border-[#d4dbe6] px-3 py-2 text-right">手数料10%</th>
                  <th className="border border-[#d4dbe6] px-3 py-2 text-right">手数料15%</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { amount: "10万円", f2: "2,000円", f5: "5,000円", f10: "1万円", f15: "1.5万円" },
                  { amount: "50万円", f2: "1万円", f5: "2.5万円", f10: "5万円", f15: "7.5万円" },
                  { amount: "100万円", f2: "2万円", f5: "5万円", f10: "10万円", f15: "15万円" },
                  { amount: "500万円", f2: "10万円", f5: "25万円", f10: "50万円", f15: "75万円" },
                  { amount: "1000万円", f2: "20万円", f5: "50万円", f10: "100万円", f15: "150万円" },
                  { amount: "5000万円", f2: "100万円", f5: "250万円", f10: "500万円", f15: "750万円" },
                  { amount: "1億円", f2: "200万円", f5: "500万円", f10: "1000万円", f15: "1500万円" },
                ].map((row) => (
                  <tr key={row.amount} className="hover:bg-[#f7f9fc]">
                    <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">{row.amount}</td>
                    <td className="border border-[#d4dbe6] px-3 py-2 text-right">{row.f2}</td>
                    <td className="border border-[#d4dbe6] px-3 py-2 text-right">{row.f5}</td>
                    <td className="border border-[#d4dbe6] px-3 py-2 text-right">{row.f10}</td>
                    <td className="border border-[#d4dbe6] px-3 py-2 text-right">{row.f15}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            ※ 上記は概算です。実際の手数料は売掛先の信用力や契約条件により異なります。
          </p>
        </section>

        {/* ── 関連ガイド ─── */}
        <section className="py-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">関連ガイド</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/articles/fee-guide/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">ファクタリング手数料ガイド →</p>
              </Link>
              <Link href="/articles/industry-hub/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">業種別ファクタリングガイド一覧 →</p>
              </Link>
              <Link href="/articles/for-sole-proprietor/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">個人事業主向けファクタリング →</p>
              </Link>
              <Link href="/articles/for-corporation/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">法人向けファクタリング →</p>
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
              ファクタリングは1万円の少額から1億円を超える大口まで対応していますが、金額帯によって最適な会社は異なります。
            </p>
            <ul className="mb-4 list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>少額（〜100万円）: ペイトナー・ラボルなどオンライン完結型が便利</li>
              <li>中額（100万〜1000万円）: 複数社の見積もり比較で手数料を最適化</li>
              <li>大口（1000万円〜）: 大手に相見積もり・3社間ファクタリングで低手数料に</li>
              <li>注文書: 納品前に資金が必要な建設業・製造業に最適</li>
            </ul>
            <p className="text-sm leading-relaxed text-gray-700">
              自社の金額帯に合ったガイドを参考にして、最適なファクタリング会社を選んでください。
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
