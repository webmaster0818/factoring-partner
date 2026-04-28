import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "エリア別ファクタリング会社一覧｜お近くの業者を探す",
  description:
    "東京・大阪・福岡・名古屋・横浜・札幌・仙台・広島の8エリア別にファクタリング会社を紹介。対面相談可能な地域密着型からオンライン完結の全国対応型まで、お近くの業者が見つかります。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/area-hub/",
  },
  openGraph: {
    title: "エリア別ファクタリング会社一覧｜お近くの業者を探す",
    description:
      "8エリア別にファクタリング会社を紹介。対面相談可能な地域密着型からオンライン完結の全国対応型まで。",
    url: "https://factoring-partner.pages.dev/articles/area-hub/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const areas = [
  {
    slug: "tokyo",
    name: "東京",
    region: "関東",
    description: "ファクタリング会社の本社が最も集中するエリア。対面相談も充実し、大手から中小まで選択肢が豊富です。",
    companies: "50社以上",
    icon: "🗼",
  },
  {
    slug: "osaka",
    name: "大阪",
    region: "関西",
    description: "関西圏の中心地。大阪に拠点を持つファクタリング会社が多数あり、対面での契約も可能です。",
    companies: "20社以上",
    icon: "🏯",
  },
  {
    slug: "fukuoka",
    name: "福岡",
    region: "九州",
    description: "九州エリアの中心地。福岡に拠点を持つファクタリング会社や、九州全域をカバーするサービスを紹介。",
    companies: "10社以上",
    icon: "🌉",
  },
  {
    slug: "nagoya",
    name: "名古屋",
    region: "中部",
    description: "製造業が盛んな中部エリアの中心地。名古屋に拠点を持つファクタリング会社や出張対応可能なサービスを紹介。",
    companies: "10社以上",
    icon: "🏙️",
  },
  {
    slug: "yokohama",
    name: "横浜",
    region: "関東",
    description: "神奈川県の中心地。東京の会社も利用しやすく、横浜・川崎エリアに強いファクタリング会社を紹介。",
    companies: "15社以上",
    icon: "🚢",
  },
  {
    slug: "sapporo",
    name: "札幌",
    region: "北海道",
    description: "北海道エリアをカバーするファクタリング会社を紹介。対面対応可能な地元企業とオンライン対応の全国型を比較。",
    companies: "5社以上",
    icon: "❄️",
  },
  {
    slug: "sendai",
    name: "仙台",
    region: "東北",
    description: "東北エリアの中心地。仙台に拠点を持つ会社や東北への出張対応が可能なファクタリング会社を紹介。",
    companies: "5社以上",
    icon: "🌿",
  },
  {
    slug: "hiroshima",
    name: "広島",
    region: "中国",
    description: "中国地方の中心地。広島に拠点を持つファクタリング会社や、中四国エリアをカバーするサービスを紹介。",
    companies: "5社以上",
    icon: "⛩️",
  },
];

const faqs = [
  {
    q: "地方でもファクタリングは利用できますか？",
    a: "はい、オンライン完結型のファクタリング会社を利用すれば、全国どこからでも申し込み可能です。ビートレーディング、OLTA、ペイトナーなど多くの大手がオンライン対応しており、来店不要で契約まで完結します。地方在住でも不利になることはありません。",
  },
  {
    q: "対面相談とオンライン、どちらを選ぶべきですか？",
    a: "初めてファクタリングを利用する場合や、大口の取引（500万円以上）の場合は対面相談がおすすめです。担当者と直接話すことで信頼関係を築けます。少額や急ぎの場合はオンライン完結型が便利です。スピード重視ならオンライン、安心感重視なら対面を選びましょう。",
  },
  {
    q: "近くにファクタリング会社がない場合はどうすればいいですか？",
    a: "オンライン完結型のファクタリング会社を利用しましょう。OLTA、ペイトナー、ラボルなどは全国対応のオンラインサービスです。また、ビートレーディングやPMGなどの大手は出張対応も行っているため、近くに拠点がなくても利用できます。",
  },
  {
    q: "エリアによって手数料は変わりますか？",
    a: "基本的にエリアによって手数料が変わることはありません。手数料は売掛先の信用力・売掛金額・支払いサイトなどで決まります。ただし、地方の中小ファクタリング会社の場合、競争が少ないため手数料が相場より高くなることがあります。相見積もりで比較しましょう。",
  },
  {
    q: "地域密着型と全国対応型、どちらがおすすめですか？",
    a: "地域密着型は対面での丁寧なサポートが受けられるメリットがあります。一方、全国対応型は手数料が低く、オンラインで手軽に利用できます。まずは全国対応型で見積もりを取り、地元の会社とも比較してみるのがベストです。",
  },
];

/* ── Structured Data ──────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "エリア別ファクタリング会社一覧｜お近くの業者を探す",
      datePublished: "2026-04-28",
      dateModified: "2026-04-28",
      author: { "@type": "Organization", name: "ファクタリングパートナー編集部" },
      publisher: {
        "@type": "Organization",
        name: "ファクタリングパートナー",
        url: "https://factoring-partner.pages.dev",
      },
      description:
        "8エリア別にファクタリング会社を紹介。対面相談可能な地域密着型からオンライン完結の全国対応型まで。",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://factoring-partner.pages.dev/articles/area-hub/",
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
        { "@type": "ListItem", position: 3, name: "エリア別ファクタリング会社一覧" },
      ],
    },
  ],
};

/* ── Page ─────────────────────────────────────────── */

export default function AreaHubPage() {
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
            { label: "エリア別ファクタリング会社一覧" },
          ]}
        />

        <h1 className="mb-6 text-2xl font-bold text-[#1e3a5f] md:text-3xl">
          エリア別ファクタリング会社一覧
        </h1>

        <p className="mb-4 text-base leading-relaxed text-gray-700">
          ファクタリング会社を選ぶ際、対面で相談したい方にとってはエリアも重要な判断基準です。東京や大阪には多くのファクタリング会社が集中していますが、地方でもオンライン対応の会社を利用すれば全国どこからでも申し込み可能です。
        </p>
        <p className="mb-8 text-base leading-relaxed text-gray-700">
          このページでは、主要8エリアのファクタリング会社ガイドをまとめています。お近くのエリアを選んで、対面相談が可能な会社やオンライン対応の会社を比較してみてください。
        </p>

        {/* ── オンライン対応の案内 ─── */}
        <div className="mb-10 rounded-lg border-2 border-[#2a7a6e] bg-[#f0faf8] p-6">
          <h2 className="mb-3 text-lg font-bold text-[#2a7a6e]">
            オンライン対応なら全国どこからでも利用可能
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-700">
            近年はオンライン完結型のファクタリングサービスが急増しています。来店不要で、パソコンやスマホから申し込み・契約・入金まですべてオンラインで完結します。地方にお住まいの方や、忙しくて来店できない方にもおすすめです。
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-4 text-center border border-[#d4dbe6]">
              <p className="text-2xl font-bold text-[#2a7a6e]">来店不要</p>
              <p className="mt-1 text-xs text-gray-600">全てオンラインで完結</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center border border-[#d4dbe6]">
              <p className="text-2xl font-bold text-[#2a7a6e]">最短即日</p>
              <p className="mt-1 text-xs text-gray-600">申込みから入金まで</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center border border-[#d4dbe6]">
              <p className="text-2xl font-bold text-[#2a7a6e]">全国対応</p>
              <p className="mt-1 text-xs text-gray-600">47都道府県OK</p>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="/articles/online-factoring/"
              className="text-sm font-semibold text-[#e87c3e] hover:underline"
            >
              オンライン完結ファクタリングの詳細はこちら →
            </Link>
          </div>
        </div>

        {/* ── エリア別カードグリッド ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            主要8エリアのファクタリングガイド
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/articles/${area.slug}/`}
                className="group block rounded-lg border border-[#d4dbe6] bg-white p-5 transition-colors hover:bg-[#f7f9fc] hover:border-[#e87c3e]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{area.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-[#1e3a5f] group-hover:text-[#e87c3e]">
                      {area.name}のファクタリング会社
                    </h3>
                    <span className="text-xs text-gray-500">{area.region}エリア・{area.companies}対応</span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-gray-600">
                  {area.description}
                </p>
                <span className="mt-3 inline-block text-xs font-semibold text-[#e87c3e]">
                  詳しく見る →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── エリア別比較表 ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            エリア別ファクタリング会社数の比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1e3a5f] text-white">
                  <th className="border border-[#d4dbe6] px-3 py-2 text-left">エリア</th>
                  <th className="border border-[#d4dbe6] px-3 py-2 text-left">地域</th>
                  <th className="border border-[#d4dbe6] px-3 py-2 text-left">対応会社数</th>
                  <th className="border border-[#d4dbe6] px-3 py-2 text-left">対面相談</th>
                  <th className="border border-[#d4dbe6] px-3 py-2 text-left">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">東京</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">関東</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">50社以上</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">◎</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">最多の選択肢・大手集中</td>
                </tr>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">大阪</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">関西</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">20社以上</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">◎</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">関西圏の中心・充実の選択肢</td>
                </tr>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">横浜</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">関東</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">15社以上</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">○</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">東京の会社も利用しやすい</td>
                </tr>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">名古屋</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">中部</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">10社以上</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">○</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">製造業に強い</td>
                </tr>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">福岡</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">九州</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">10社以上</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">○</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">九州全域をカバー</td>
                </tr>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">札幌</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">北海道</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">5社以上</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">△</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">オンライン中心</td>
                </tr>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">仙台</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">東北</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">5社以上</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">△</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">出張対応が多い</td>
                </tr>
                <tr className="hover:bg-[#f7f9fc]">
                  <td className="border border-[#d4dbe6] px-3 py-2 font-semibold text-[#1e3a5f]">広島</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">中国</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">5社以上</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">△</td>
                  <td className="border border-[#d4dbe6] px-3 py-2">中四国エリアをカバー</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── エリア選びのポイント ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            エリア別ファクタリング会社の選び方
          </h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-6">
              <h3 className="mb-3 font-bold text-[#2a7a6e]">大都市圏（東京・大阪・横浜）の方</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                大都市圏には多くのファクタリング会社が集中しているため、選択肢が豊富です。対面での相談を希望する場合は、自社から通いやすい場所に拠点を持つ会社を選びましょう。大手の本社が多いエリアなので、手数料の競争が激しく、有利な条件を引き出しやすいのもメリットです。複数社に見積もりを取って比較することをおすすめします。
              </p>
            </div>
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-6">
              <h3 className="mb-3 font-bold text-[#2a7a6e]">地方都市（名古屋・福岡・仙台・広島・札幌）の方</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                地方都市でも対面対応可能なファクタリング会社はあります。ただし選択肢は限られるため、オンライン対応の全国型サービスも併せて検討しましょう。出張対応を行っている大手（ビートレーディング・PMGなど）に依頼すれば、地元でも対面相談が可能です。
              </p>
            </div>
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-6">
              <h3 className="mb-3 font-bold text-[#2a7a6e]">上記以外のエリアの方</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                主要都市以外にお住まいの方は、オンライン完結型のファクタリングサービスがベストです。OLTA・ペイトナー・ラボル・クラウドファクタリングなど、来店不要で全てオンラインで完結するサービスを利用すれば、全国どこからでも同じ条件でファクタリングを利用できます。
              </p>
            </div>
          </div>
        </section>

        {/* ── オンライン完結のメリット ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            オンライン完結型ファクタリングのメリット
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { title: "来店不要で時間を節約", desc: "移動時間や待ち時間が不要。忙しい経営者でも手軽に利用できます。" },
              { title: "全国どこからでも同条件", desc: "地方だからといって手数料が高くなることはありません。都市部と同じ条件で利用可能。" },
              { title: "スピーディーな入金", desc: "書類のやり取りがオンラインで完結するため、最短10分〜即日の入金も可能です。" },
              { title: "24時間申し込み可能", desc: "深夜や早朝でもWebから申し込みが可能。営業時間を気にする必要がありません。" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-[#d4dbe6] bg-white p-4">
                <h3 className="mb-2 font-bold text-[#1e3a5f]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 関連ガイド ─── */}
        <section className="py-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">関連ガイド</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/articles/industry-hub/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">業種別ファクタリングガイド一覧 →</p>
              </Link>
              <Link href="/articles/amount-hub/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">金額別ファクタリングガイド →</p>
              </Link>
              <Link href="/articles/online-factoring/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">オンライン完結ファクタリング →</p>
              </Link>
              <Link href="/ranking/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">ファクタリング会社おすすめランキング →</p>
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
              ファクタリング会社選びでは、エリアも重要な判断基準の一つです。対面相談を希望する場合は、自社から通いやすい場所に拠点を持つ会社を選びましょう。
            </p>
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              ただし、近年はオンライン完結型のサービスが充実しており、全国どこからでも同じ条件でファクタリングを利用できます。エリアに縛られず、手数料やサービス内容で選ぶことも重要です。
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              複数社に見積もりを取って比較し、自社に最適なファクタリング会社を見つけてください。
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
