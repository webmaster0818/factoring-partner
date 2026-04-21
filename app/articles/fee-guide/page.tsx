import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング手数料の相場と計算方法｜安くするコツ5選",
  description:
    "ファクタリング手数料の相場を2社間（10〜30%）・3社間（2〜20%）別に解説。計算方法の具体例、手数料の内訳（買取手数料・事務手数料・債権譲渡登記費用）、手数料を安くする5つのコツを紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/fee-guide/",
  },
  openGraph: {
    title: "ファクタリング手数料の相場と計算方法｜安くするコツ5選",
    description:
      "ファクタリング手数料の相場を2社間・3社間別に解説。計算例と安くするコツ5選も紹介。",
    url: "https://factoring-partner.pages.dev/articles/fee-guide/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const faqs = [
  {
    question: "ファクタリングの手数料相場はどのくらいですか？",
    answer:
      "2社間ファクタリングの手数料相場は10%〜30%、3社間ファクタリングの手数料相場は2%〜20%が一般的です。売掛先の信用力や利用金額、利用回数によって手数料は変動します。オンライン完結型のサービスを利用すると、比較的安い手数料で利用できる傾向があります。",
  },
  {
    question: "手数料以外にかかる費用はありますか？",
    answer:
      "ファクタリング会社によっては、事務手数料（5,000円〜30,000円程度）、債権譲渡登記費用（2社間の場合、数万円程度）、印紙代（200円〜数千円）、振込手数料などが別途発生する場合があります。見積もり時に総費用を確認することが重要です。",
  },
  {
    question: "手数料は消費税がかかりますか？",
    answer:
      "ファクタリング手数料は「金銭債権の譲渡」に該当するため、消費税は非課税です。ただし、事務手数料や登記費用には消費税がかかる場合があります。契約書に記載された費用項目を確認しましょう。",
  },
  {
    question: "手数料が安すぎる会社は危険ですか？",
    answer:
      "手数料が極端に安い（1%以下など）場合は注意が必要です。後から高額な事務手数料や登記費用を請求されるケースや、実質的に貸付（ヤミ金）である可能性があります。手数料だけでなく、総費用で比較し、契約内容を必ず確認しましょう。",
  },
  {
    question: "手数料を交渉することはできますか？",
    answer:
      "はい、手数料は交渉可能な場合が多いです。特に複数のファクタリング会社から見積もりを取り、競合他社の条件を伝えることで交渉が有利になります。また、継続利用によりリピート割引が適用されるケースもあります。売掛先の信用力が高い場合も交渉材料になります。",
  },
];

const costBreakdown = [
  {
    name: "買取手数料",
    description:
      "ファクタリング手数料のメインとなる費用です。売掛金額に対する一定割合で設定され、2社間では10%〜30%、3社間では2%〜20%が相場です。売掛先の信用力、売掛金額、支払いサイトの長さ、利用実績などによって料率が決まります。",
    range: "2%〜30%",
  },
  {
    name: "事務手数料",
    description:
      "契約手続きや書類審査にかかる費用です。ファクタリング会社によって無料の場合もあれば、5,000円〜30,000円程度かかる場合もあります。オンライン完結型のサービスでは、事務手数料が無料または低額に設定されていることが多い傾向にあります。",
    range: "0円〜30,000円",
  },
  {
    name: "債権譲渡登記費用",
    description:
      "2社間ファクタリングで必要になることがある費用です。法務局への債権譲渡登記にかかる登録免許税（7,500円）と司法書士報酬（数万円）が発生します。3社間ファクタリングでは通常不要です。登記不要のサービスを選ぶことで節約できます。",
    range: "0円〜100,000円",
  },
  {
    name: "印紙代",
    description:
      "契約書に貼付する収入印紙の費用です。契約金額に応じて200円〜数千円程度かかります。電子契約を採用しているファクタリング会社では印紙代が不要になります。",
    range: "200円〜数千円",
  },
  {
    name: "振込手数料",
    description:
      "買取代金の振込にかかる手数料です。通常数百円程度ですが、ファクタリング会社が負担するケースも多くあります。契約時に確認しておきましょう。",
    range: "0円〜880円",
  },
];

const tips = [
  {
    title: "3社間ファクタリングを選択する",
    description:
      "3社間ファクタリングは売掛先の承諾が必要ですが、手数料は2%〜20%と2社間（10%〜30%）よりも大幅に安くなります。売掛先がファクタリングに理解がある場合や、大手企業で取引関係が安定している場合は3社間を検討しましょう。入金までに時間がかかるデメリットはありますが、コスト面では圧倒的に有利です。",
  },
  {
    title: "複数のファクタリング会社から見積もりを取る",
    description:
      "ファクタリングの手数料は会社ごとに大きく異なります。最低でも3社以上から見積もりを取り、手数料率だけでなく事務手数料や登記費用も含めた総コストで比較しましょう。他社の見積もりを交渉材料として使うことで、より有利な条件を引き出せる場合もあります。一括見積もりサービスの活用も有効な手段です。",
  },
  {
    title: "継続利用でリピート割引を活用する",
    description:
      "多くのファクタリング会社では、継続利用による実績に応じてリピート割引を提供しています。初回利用時の手数料が15%でも、2回目以降は10%〜12%程度まで下がるケースがあります。信頼関係が構築されることで審査もスムーズになり、手数料の優遇を受けやすくなります。最初から複数社を併用するより、1〜2社に絞って利用するほうがコスト削減に効果的です。",
  },
  {
    title: "売掛先の信用力が高い債権を利用する",
    description:
      "ファクタリングの手数料は売掛先の信用力に大きく左右されます。上場企業や大手企業、官公庁などの売掛金は信用リスクが低いため、手数料が安くなる傾向があります。複数の売掛先がある場合は、信用力の高い売掛先の債権を優先的にファクタリングに使うことで、手数料を抑えることができます。",
  },
  {
    title: "オンライン完結型のサービスを利用する",
    description:
      "オンライン完結型のファクタリングサービスは、店舗運営コストや人件費が抑えられているため、対面型に比べて手数料が安い傾向にあります。また、事務手数料が無料であったり、電子契約により印紙代が不要になったりと、付随費用も節約できます。クラウドサインやAI審査を導入しているサービスは特にコストパフォーマンスが高い傾向にあります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリング手数料の相場と計算方法｜安くするコツ5選",
  description:
    "ファクタリング手数料の相場を2社間・3社間別に解説。計算例と安くするコツ5選も紹介。",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
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
    "@id": "https://factoring-partner.pages.dev/articles/fee-guide/",
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
      item: "https://factoring-partner.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "コラム",
      item: "https://factoring-partner.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ファクタリング手数料の相場と計算方法",
      item: "https://factoring-partner.pages.dev/articles/fee-guide/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function FeeGuidePage() {
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
          { label: "コラム", href: "/articles/" },
          { label: "手数料の相場と計算方法" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            手数料ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング手数料の相場と計算方法
            <br className="hidden md:block" />
            安くするコツ5選
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングの手数料は2社間で10%〜30%、3社間で2%〜20%が相場です。計算方法の具体例と、手数料を安くするための5つのコツを詳しく解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#market-rate" className="hover:underline">
                1. ファクタリング手数料の相場
              </a>
            </li>
            <li>
              <a href="#calculation" className="hover:underline">
                2. 手数料の計算方法と具体例
              </a>
            </li>
            <li>
              <a href="#breakdown" className="hover:underline">
                3. 手数料の内訳
              </a>
            </li>
            <li>
              <a href="#factors" className="hover:underline">
                4. 手数料を決める要因
              </a>
            </li>
            <li>
              <a href="#tips" className="hover:underline">
                5. 手数料を安くする5つのコツ
              </a>
            </li>
            <li>
              <a href="#caution" className="hover:underline">
                6. 手数料に関する注意点
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 手数料の相場 ─── */}
        <section id="market-rate" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング手数料の相場
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングの手数料は、契約形態（2社間・3社間）によって大きく異なります。まずは各契約形態の手数料相場を把握しましょう。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            手数料は売掛金額に対する割合で設定されるのが一般的です。例えば、100万円の売掛金に対して手数料が10%の場合、10万円が手数料として差し引かれ、90万円を受け取ることになります。
          </p>

          <div className="mb-8 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">項目</th>
                  <th className="px-4 py-3 font-semibold">2社間ファクタリング</th>
                  <th className="px-4 py-3 font-semibold">3社間ファクタリング</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    手数料相場
                  </td>
                  <td className="px-4 py-3 font-bold text-accent">10%〜30%</td>
                  <td className="px-4 py-3 font-bold text-secondary">2%〜20%</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    平均的な手数料
                  </td>
                  <td className="px-4 py-3">15%〜20%</td>
                  <td className="px-4 py-3">5%〜10%</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    契約当事者
                  </td>
                  <td className="px-4 py-3">利用者 + ファクタリング会社</td>
                  <td className="px-4 py-3">利用者 + ファクタリング会社 + 売掛先</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    売掛先への通知
                  </td>
                  <td className="px-4 py-3">不要</td>
                  <td className="px-4 py-3">必要</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    入金スピード
                  </td>
                  <td className="px-4 py-3">最短即日</td>
                  <td className="px-4 py-3">数日〜2週間</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    手数料が高い理由
                  </td>
                  <td className="px-4 py-3">
                    ファクタリング会社のリスクが高いため
                  </td>
                  <td className="px-4 py-3">
                    売掛先の承諾がありリスクが低いため
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">
              2社間と3社間で手数料が異なる理由
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              2社間ファクタリングでは、売掛先にファクタリングの利用が通知されないため、売掛金の回収リスクがファクタリング会社に集中します。利用者が売掛金を受け取った後にファクタリング会社に支払う形式のため、二重譲渡や持ち逃げのリスクもあります。このリスクを手数料に上乗せするため、2社間の方が高くなります。一方、3社間では売掛先が直接ファクタリング会社に支払うため、リスクが低く手数料が抑えられます。
            </p>
          </div>
        </section>

        {/* ── 計算方法と具体例 ─── */}
        <section id="calculation" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料の計算方法と具体例
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの手数料は基本的にシンプルな計算です。具体的な計算例を見てみましょう。手数料率だけでなく、事務手数料などの付随費用も含めた「実質コスト」を把握することが重要です。
          </p>

          {/* 計算例1 */}
          <div className="mb-6 rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 text-lg font-bold text-primary">
              計算例1：2社間ファクタリング（手数料15%）
            </h3>
            <div className="mb-4 rounded-lg bg-section-bg p-4">
              <p className="mb-2 text-sm font-semibold text-text-main">条件</p>
              <ul className="space-y-1 text-sm text-text-light">
                <li>・売掛金額：500万円</li>
                <li>・手数料率：15%</li>
                <li>・事務手数料：10,000円</li>
                <li>・債権譲渡登記費用：50,000円</li>
              </ul>
            </div>
            <div className="rounded-lg bg-primary-light p-4">
              <p className="mb-2 text-sm font-semibold text-primary">計算</p>
              <ul className="space-y-1 text-sm text-text-light">
                <li>
                  買取手数料：500万円 &times; 15% ={" "}
                  <strong className="text-text-main">750,000円</strong>
                </li>
                <li>
                  事務手数料：
                  <strong className="text-text-main">10,000円</strong>
                </li>
                <li>
                  債権譲渡登記費用：
                  <strong className="text-text-main">50,000円</strong>
                </li>
                <li className="border-t border-border pt-2 font-semibold text-text-main">
                  総費用：810,000円　→　受取額：
                  <span className="text-lg text-accent">4,190,000円</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 計算例2 */}
          <div className="mb-6 rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 text-lg font-bold text-primary">
              計算例2：3社間ファクタリング（手数料5%）
            </h3>
            <div className="mb-4 rounded-lg bg-section-bg p-4">
              <p className="mb-2 text-sm font-semibold text-text-main">条件</p>
              <ul className="space-y-1 text-sm text-text-light">
                <li>・売掛金額：500万円</li>
                <li>・手数料率：5%</li>
                <li>・事務手数料：5,000円</li>
                <li>・債権譲渡登記費用：不要</li>
              </ul>
            </div>
            <div className="rounded-lg bg-primary-light p-4">
              <p className="mb-2 text-sm font-semibold text-primary">計算</p>
              <ul className="space-y-1 text-sm text-text-light">
                <li>
                  買取手数料：500万円 &times; 5% ={" "}
                  <strong className="text-text-main">250,000円</strong>
                </li>
                <li>
                  事務手数料：
                  <strong className="text-text-main">5,000円</strong>
                </li>
                <li className="border-t border-border pt-2 font-semibold text-text-main">
                  総費用：255,000円　→　受取額：
                  <span className="text-lg text-secondary">4,745,000円</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 計算例3 */}
          <div className="mb-6 rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 text-lg font-bold text-primary">
              計算例3：少額ファクタリング（手数料20%）
            </h3>
            <div className="mb-4 rounded-lg bg-section-bg p-4">
              <p className="mb-2 text-sm font-semibold text-text-main">条件</p>
              <ul className="space-y-1 text-sm text-text-light">
                <li>・売掛金額：50万円</li>
                <li>・手数料率：20%</li>
                <li>・事務手数料：10,000円</li>
              </ul>
            </div>
            <div className="rounded-lg bg-primary-light p-4">
              <p className="mb-2 text-sm font-semibold text-primary">計算</p>
              <ul className="space-y-1 text-sm text-text-light">
                <li>
                  買取手数料：50万円 &times; 20% ={" "}
                  <strong className="text-text-main">100,000円</strong>
                </li>
                <li>
                  事務手数料：
                  <strong className="text-text-main">10,000円</strong>
                </li>
                <li className="border-t border-border pt-2 font-semibold text-text-main">
                  総費用：110,000円　→　受取額：
                  <span className="text-lg text-accent">390,000円</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="mb-2 font-bold text-accent">注意：実質コストで比較する</p>
            <p className="text-sm leading-relaxed text-text-light">
              手数料率だけで比較すると実際のコストを見誤ることがあります。A社の手数料率が10%でも事務手数料や登記費用が高額な場合、B社の手数料率12%で追加費用なしの方が総コストでは安くなることもあります。必ず「受取額」ベースで比較しましょう。
            </p>
          </div>
        </section>

        {/* ── 手数料の内訳 ─── */}
        <section id="breakdown" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料の内訳
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの「手数料」と一口に言っても、実際にはいくつかの費用項目で構成されています。見積もり時には各項目を確認し、総コストを把握することが重要です。
          </p>
          <div className="space-y-4">
            {costBreakdown.map((item) => (
              <div
                key={item.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{item.name}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {item.description}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-primary-light px-3 py-1 text-sm font-semibold text-primary">
                    {item.range}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 手数料を決める要因 ─── */}
        <section id="factors" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料を決める要因
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの手数料率は一律ではなく、複数の要因によって決定されます。以下の要因を理解しておくと、手数料の交渉や最適なファクタリング会社の選択に役立ちます。
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">売掛先の信用力</h3>
              <p className="text-sm leading-relaxed text-text-light">
                最も手数料に影響する要因です。売掛先が上場企業や大手企業、官公庁であれば支払い不能リスクが低いため手数料は安くなります。逆に、設立間もない中小企業や個人事業主が売掛先の場合は手数料が高くなる傾向にあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">売掛金の金額</h3>
              <p className="text-sm leading-relaxed text-text-light">
                一般的に、売掛金の金額が大きいほど手数料率は低くなる傾向にあります。ファクタリング会社にとって、審査や事務処理のコストは金額に比例しないため、大口取引の方が効率が良いのです。数十万円の少額取引より、数百万円以上の取引の方が有利です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">支払いサイトの長さ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                売掛金の支払い期日までの期間が長いほど、ファクタリング会社のリスクが高まるため手数料も高くなります。支払いサイトが30日と90日では、後者の方が手数料率が高くなるのが一般的です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">利用実績・回数</h3>
              <p className="text-sm leading-relaxed text-text-light">
                初回利用時はファクタリング会社にとってリスクが不透明なため手数料が高めに設定されますが、継続利用により信頼関係が構築されると、リピート割引として手数料率が段階的に下がるケースが多くあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">契約形態（2社間・3社間）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                前述の通り、2社間ファクタリングは3社間よりもリスクが高いため、手数料率も高くなります。売掛先の承諾を得られるのであれば、3社間を選択することで大幅にコストを削減できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">業種・取引の継続性</h3>
              <p className="text-sm leading-relaxed text-text-light">
                継続的な取引関係にある売掛金（毎月定期的に発生する売上など）は、単発の取引よりも手数料が安くなる傾向にあります。また、建設業や運送業など入金サイトが長い業種向けに特化したサービスでは、業種事情を考慮した手数料設定がされています。
              </p>
            </div>
          </div>
        </section>

        {/* ── 手数料を安くする5つのコツ ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料を安くする5つのコツ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの手数料は工夫次第で大幅に削減することができます。以下の5つのコツを実践して、コストを最小限に抑えましょう。
          </p>
          <div className="space-y-6">
            {tips.map((tip, index) => (
              <div
                key={tip.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {tip.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 手数料に関する注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料に関する注意点
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの手数料について、見落としがちな注意点を解説します。トラブルを避けるためにも、以下のポイントは必ず確認しましょう。
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                手数料率だけで比較しない
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                「手数料1%〜」と謳っている場合でも、事務手数料や登記費用、審査料などの名目で別途費用が発生することがあります。必ず総費用（受取額）ベースで比較しましょう。見積書の明細を確認し、不明な費用項目があれば質問することが大切です。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                極端に安い手数料に注意する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                相場よりも極端に安い手数料を提示する業者には注意が必要です。契約後に追加費用を請求されるケースや、実質的に貸付（ヤミ金行為）であるケースがあります。手数料の相場感を把握した上で、適正な範囲内の業者を選びましょう。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                償還請求権（リコース）の有無を確認する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                償還請求権ありの契約の場合、売掛先が支払い不能になったとき利用者が代わりに支払う義務が発生します。手数料が安い場合、償還請求権ありの契約になっていないか必ず確認してください。償還請求権ありの場合は実質的に「融資」と同等であり、貸金業登録が必要になるため、登録なしで行っている業者は違法です。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                手数料の消費税について確認する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリング手数料（買取手数料）自体は非課税取引ですが、一部の業者では手数料に消費税を加算して請求するケースがあります。これは不当な請求に当たるため、見積書や契約書で消費税の取り扱いを必ず確認しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-text-light">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/what-is-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングとは？</p>
              <p className="mt-1 text-sm text-text-light">
                仕組み・種類・メリット・デメリットをわかりやすく解説
              </p>
            </Link>
            <Link
              href="/articles/screening-criteria/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングの審査基準</p>
              <p className="mt-1 text-sm text-text-light">
                審査で見るポイントと通過率を上げる方法を解説
              </p>
            </Link>
            <Link
              href="/articles/low-fee/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料が安いファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                手数料相場と節約術をランキング形式で紹介
              </p>
            </Link>
            <Link
              href="/articles/accounting/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">会計処理・仕訳方法</p>
              <p className="mt-1 text-sm text-text-light">
                勘定科目と税務上の注意点を解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            手数料が安いファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料の相場を理解したら、実際の各社の手数料を比較してみましょう。15社の手数料・入金速度・審査通過率を徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
