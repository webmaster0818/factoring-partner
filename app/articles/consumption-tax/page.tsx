import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリングの消費税の取り扱い｜非課税の理由と注意点",
  description:
    "ファクタリングの手数料に消費税はかかるのか？非課税となる法的根拠、消費税がかかるケース、インボイス制度との関係、会計処理の注意点を税務の観点から詳しく解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/consumption-tax/",
  },
  openGraph: {
    title:
      "ファクタリングの消費税の取り扱い｜非課税の理由と注意点",
    description:
      "ファクタリングの手数料は消費税非課税。その理由と注意点を解説。",
    url: "https://factoring-partner.pages.dev/articles/consumption-tax/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const taxableItems = [
  {
    item: "ファクタリング手数料",
    taxStatus: "非課税",
    reason: "有価証券等の譲渡に該当（消費税法第6条、別表第一第2号）",
  },
  {
    item: "事務手数料",
    taxStatus: "課税（10%）",
    reason: "役務の提供に該当するため消費税の課税対象",
  },
  {
    item: "債権譲渡登記費用",
    taxStatus: "非課税（登録免許税）",
    reason: "登録免許税は消費税の対象外。ただし司法書士報酬は課税対象",
  },
  {
    item: "振込手数料",
    taxStatus: "課税（10%）",
    reason: "銀行の役務提供に該当するため消費税の課税対象",
  },
  {
    item: "司法書士報酬",
    taxStatus: "課税（10%）",
    reason: "専門家の役務提供に該当するため消費税の課税対象",
  },
];

const accountingExamples = [
  {
    title: "ファクタリング申込時（売掛金の譲渡）",
    entries: [
      { debit: "未収入金 900万円", credit: "売掛金 1,000万円" },
      { debit: "売掛債権売却損 100万円", credit: "" },
    ],
    note: "手数料100万円（10%）は「売掛債権売却損」として計上。消費税は非課税のため仮払消費税は計上しない",
  },
  {
    title: "ファクタリング会社からの入金時",
    entries: [
      { debit: "普通預金 900万円", credit: "未収入金 900万円" },
    ],
    note: "入金を確認したら未収入金を消込する",
  },
  {
    title: "事務手数料が発生した場合",
    entries: [
      { debit: "支払手数料 50,000円", credit: "普通預金 55,000円" },
      { debit: "仮払消費税 5,000円", credit: "" },
    ],
    note: "事務手数料は課税対象のため、仮払消費税を計上する（税込経理の場合は不要）",
  },
];

const faqs = [
  {
    question: "ファクタリングの手数料に消費税がかかるのは違法ですか？",
    answer:
      "ファクタリング手数料は法律上非課税です。もしファクタリング会社が手数料に消費税を上乗せして請求してきた場合、それは誤りであるか、手数料以外の費用（事務手数料など）を含んでいる可能性があります。見積書や契約書で手数料の内訳を確認し、不明な点はファクタリング会社に問い合わせましょう。意図的に消費税を上乗せしている業者は悪質な可能性があります。",
  },
  {
    question: "ファクタリング手数料が非課税だと、消費税の申告にどう影響しますか？",
    answer:
      "ファクタリング手数料は非課税取引のため、消費税の仕入税額控除の対象外です。つまり、手数料分の消費税を仕入税額として差し引くことはできません。一方、課税売上割合の計算においては、非課税売上として扱われる可能性があるため、税理士に確認することをおすすめします。",
  },
  {
    question: "インボイス制度はファクタリングに影響しますか？",
    answer:
      "ファクタリング手数料自体は非課税取引のため、インボイス（適格請求書）の発行は不要です。ただし、事務手数料や司法書士報酬など課税取引に該当するものについては、仕入税額控除を受けるためにインボイスが必要です。ファクタリング会社がインボイス発行事業者であるか確認しておきましょう。",
  },
  {
    question: "売掛債権売却損は損金算入できますか？",
    answer:
      "はい、ファクタリングの手数料に相当する売掛債権売却損は、法人税法上の損金として算入できます。事業に必要な資金調達のためのコストとして認められています。ただし、手数料が不当に高額な場合は税務署から否認される可能性があるため、手数料率が市場相場の範囲内であることを確認しましょう。",
  },
  {
    question: "個人事業主のファクタリング手数料の確定申告での扱いは？",
    answer:
      "個人事業主の場合、ファクタリング手数料は事業所得の必要経費として計上できます。勘定科目は「売掛債権売却損」または「雑損失」として処理するのが一般的です。消費税の申告においては非課税仕入として扱い、仕入税額控除の対象外となります。具体的な処理は確定申告書を作成する際に税理士に相談することをおすすめします。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファクタリングの消費税の取り扱い｜非課税の理由と注意点",
  description:
    "ファクタリングの手数料は消費税非課税。その理由と注意点を解説。",
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
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
    "@id":
      "https://factoring-partner.pages.dev/articles/consumption-tax/",
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
      name: "消費税の取り扱い",
      item: "https://factoring-partner.pages.dev/articles/consumption-tax/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ConsumptionTaxPage() {
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
          { label: "消費税の取り扱い" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            税務・会計
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングの消費税の取り扱い
            <br className="hidden md:block" />
            非課税の理由と注意点
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングの手数料は消費税が非課税です。その法的根拠、消費税がかかるケース、インボイス制度との関係、正しい会計処理を詳しく解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#conclusion" className="hover:underline">
                1. 結論：ファクタリング手数料は消費税非課税
              </a>
            </li>
            <li>
              <a href="#reason" className="hover:underline">
                2. 非課税となる法的根拠
              </a>
            </li>
            <li>
              <a href="#taxable" className="hover:underline">
                3. 消費税がかかるケース・かからないケース
              </a>
            </li>
            <li>
              <a href="#accounting" className="hover:underline">
                4. 正しい会計処理と仕訳例
              </a>
            </li>
            <li>
              <a href="#invoice" className="hover:underline">
                5. インボイス制度との関係
              </a>
            </li>
            <li>
              <a href="#caution" className="hover:underline">
                6. 税務上の注意点
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 結論 ─── */}
        <section id="conclusion" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            結論：ファクタリング手数料は消費税非課税
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングの手数料には<strong className="text-text-main">消費税はかかりません（非課税）</strong>。これはファクタリングが「有価証券等の譲渡」に該当し、消費税法で非課税取引として定められているためです。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            ただし、注意が必要なのは、ファクタリングに関連して発生する「事務手数料」「振込手数料」「司法書士報酬」などは課税対象であるという点です。手数料の内訳を確認し、非課税部分と課税部分を正しく区別することが重要です。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">覚えておくべきポイント</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>ファクタリング手数料（債権譲渡の対価）は消費税非課税</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>事務手数料・振込手数料・司法書士報酬は消費税課税（10%）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料に消費税を上乗せする業者は要注意</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>会計処理では非課税仕入として処理する</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 法的根拠 ─── */}
        <section id="reason" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            非課税となる法的根拠
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリング手数料が消費税非課税となる法的根拠は、消費税法第6条および消費税法別表第一の第2号に規定されています。
          </p>
          <div className="mb-6 rounded-lg border border-border bg-white p-6">
            <h3 className="mb-3 font-bold text-primary">消費税法の規定</h3>
            <p className="mb-4 text-sm leading-relaxed text-text-light">
              消費税法別表第一の第2号では、<strong className="text-text-main">「有価証券等の譲渡」</strong>が非課税取引として列挙されています。ここでいう「有価証券等」には、株式や社債だけでなく、<strong className="text-text-main">金銭債権（売掛債権を含む）</strong>も含まれます。
            </p>
            <p className="mb-4 text-sm leading-relaxed text-text-light">
              ファクタリングは売掛債権（金銭債権）の譲渡取引であるため、この規定により手数料（債権の額面と買取金額の差額）は消費税の非課税取引に該当します。
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              なお、この規定は国内取引に適用されます。国際ファクタリングの場合は、取引の態様に応じて個別に判断が必要です。
            </p>
          </div>
          <div className="rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">なぜ金銭債権の譲渡は非課税なのか？</p>
            <p className="text-sm leading-relaxed text-text-light">
              消費税は「消費」に対して課される税金です。金銭債権の譲渡は「消費」を伴わない金融取引の性質を持つため、消費税の課税対象としてなじまないとされています。同様の理由で、銀行預金の利息や保険料なども消費税非課税取引に該当します。
            </p>
          </div>
        </section>

        {/* ── 課税・非課税の一覧 ─── */}
        <section id="taxable" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            消費税がかかるケース・かからないケース
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ファクタリングに関連する費用のうち、消費税が非課税のものと課税対象のものを一覧で確認しましょう。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">費用項目</th>
                  <th className="px-4 py-3 font-semibold">消費税</th>
                  <th className="px-4 py-3 font-semibold">理由</th>
                </tr>
              </thead>
              <tbody>
                {taxableItems.map((item) => (
                  <tr key={item.item} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                      {item.item}
                    </td>
                    <td className="px-4 py-3">
                      <span className={item.taxStatus === "非課税" ? "font-bold text-secondary" : "font-bold text-accent"}>
                        {item.taxStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3">{item.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg border border-accent/30 bg-orange-50 p-4">
            <p className="mb-1 font-bold text-accent">注意</p>
            <p className="text-sm leading-relaxed text-text-light">
              一部のファクタリング会社は「手数料」の中に事務手数料を含めて一括表示している場合があります。この場合、手数料全体を非課税として処理すると税務上問題になる可能性があるため、内訳を確認して正しく区分しましょう。
            </p>
          </div>
        </section>

        {/* ── 会計処理 ─── */}
        <section id="accounting" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            正しい会計処理と仕訳例
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ファクタリングの会計処理では、手数料が消費税非課税であることを正しく反映する必要があります。以下に具体的な仕訳例を示します。
          </p>
          <div className="space-y-6">
            {accountingExamples.map((example) => (
              <div
                key={example.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-4 font-bold text-primary">{example.title}</h3>
                <div className="overflow-x-auto rounded-lg border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-section-bg">
                        <th className="px-4 py-2 text-left font-semibold text-text-main">借方（デビット）</th>
                        <th className="px-4 py-2 text-left font-semibold text-text-main">貸方（クレジット）</th>
                      </tr>
                    </thead>
                    <tbody>
                      {example.entries.map((entry, index) => (
                        <tr key={index} className="border-t border-border">
                          <td className="px-4 py-2">{entry.debit}</td>
                          <td className="px-4 py-2">{entry.credit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-light">
                  <strong className="text-secondary">ポイント：</strong>{example.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── インボイス制度 ─── */}
        <section id="invoice" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            インボイス制度との関係
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            2023年10月から開始されたインボイス制度（適格請求書等保存方式）は、仕入税額控除の要件としてインボイスの保存を求める制度です。ファクタリングとの関係を整理します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">ファクタリング手数料はインボイス不要</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリング手数料は非課税取引のため、インボイスの対象外です。ファクタリング会社からインボイスを受け取る必要はなく、仕入税額控除の対象にもなりません。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">事務手数料等はインボイスが必要</h3>
              <p className="text-sm leading-relaxed text-text-light">
                事務手数料や振込手数料などの課税取引については、仕入税額控除を受けるためにインボイスの保存が必要です。ファクタリング会社がインボイス発行事業者（適格請求書発行事業者）であることを確認し、インボイスを受け取りましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">売掛先への影響</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングによる債権譲渡自体は、売掛先が発行するインボイスの内容に影響しません。売掛先は従来通り、商品やサービスの対価に対するインボイスを発行します。債権の譲渡先がファクタリング会社に変わっても、インボイスの記載内容は変わりません。
              </p>
            </div>
          </div>
        </section>

        {/* ── 2社間・3社間の消費税処理の違い ─── */}
        <section id="type-difference" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            2社間・3社間ファクタリングの消費税処理の違い
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            2社間ファクタリングと3社間ファクタリングで消費税の取り扱いに違いがあるかを確認しましょう。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-primary/30 bg-blue-50 p-5">
              <h3 className="mb-2 font-bold text-primary">2社間ファクタリングの消費税</h3>
              <p className="text-sm leading-relaxed text-text-light">
                2社間ファクタリングの手数料は非課税です。ただし、2社間では債権譲渡登記が必要になることが多く、登記費用（登録免許税：非課税）と司法書士報酬（課税10%）が追加で発生する可能性があります。これらの費用の消費税区分を正しく処理しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-2 font-bold text-secondary">3社間ファクタリングの消費税</h3>
              <p className="text-sm leading-relaxed text-text-light">
                3社間ファクタリングの手数料も同様に非課税です。3社間では債権譲渡登記が不要な場合が多いため、登記関連の費用が発生しないケースが一般的です。手数料自体の消費税処理は2社間と同じです。
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-primary-light p-4">
            <p className="mb-1 font-bold text-primary">共通のポイント</p>
            <p className="text-sm leading-relaxed text-text-light">
              2社間・3社間いずれの場合も、ファクタリング手数料（債権譲渡の対価）は消費税非課税です。違いが出るのは付随する費用（登記費用・司法書士報酬など）の有無であり、これらの課税区分を正しく処理することが重要です。
            </p>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            税務上の注意点
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ファクタリングの消費税処理で間違いやすいポイントをまとめます。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">手数料に消費税を上乗せする業者に注意</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリング手数料は非課税のため、手数料に消費税10%を上乗せして請求するのは誤りです。もし「手数料10%＋消費税1%で合計11%」と請求された場合、その1%分は不当な請求の可能性があります。手数料の内訳を確認しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">課税売上割合への影響</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリング（債権譲渡）は非課税売上に該当する場合があります。非課税売上が増えると課税売上割合が下がり、仕入税額控除の金額に影響する可能性があります。大口のファクタリングを利用する場合は、税理士に相談して影響を確認しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">免税事業者の場合</h3>
              <p className="text-sm leading-relaxed text-text-light">
                課税売上高が1,000万円以下の免税事業者の場合、そもそも消費税の申告義務がないため、ファクタリング手数料の消費税区分を意識する必要は基本的にありません。ただし、簡易課税を選択している場合は、事業区分に応じた処理が必要です。
              </p>
            </div>
          </div>
        </section>

        {/* ── まとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングの消費税 まとめ
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングの消費税処理について、重要なポイントを改めてまとめます。正しい税務処理のために、以下の点を確認してください。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">1.</span>
                <span>ファクタリング手数料（債権譲渡の対価）は<strong className="text-text-main">消費税非課税</strong>（消費税法別表第一 第2号）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">2.</span>
                <span>事務手数料・振込手数料・司法書士報酬は<strong className="text-text-main">消費税課税（10%）</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">3.</span>
                <span>会計処理では「売掛債権売却損」として計上し、<strong className="text-text-main">仮払消費税は計上しない</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">4.</span>
                <span>インボイスは手数料部分は不要、課税取引部分は<strong className="text-text-main">インボイスの保存が必要</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">5.</span>
                <span>手数料に消費税を上乗せする業者は<strong className="text-accent">要注意</strong></span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            消費税の処理は複雑な面もあるため、不明点がある場合は必ず税理士に相談してください。特に課税売上割合への影響や、簡易課税を選択している場合の処理については、専門家のアドバイスが不可欠です。
          </p>
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
              href="/articles/accounting/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">会計処理・仕訳方法</p>
              <p className="mt-1 text-sm text-text-light">
                勘定科目と税務上の注意点を解説
              </p>
            </Link>
            <Link
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">
                手数料を安くする5つのコツも紹介
              </p>
            </Link>
            <Link
              href="/articles/contract-checklist/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">契約書チェックリスト</p>
              <p className="mt-1 text-sm text-text-light">
                契約前に確認すべき10項目を解説
              </p>
            </Link>
            <Link
              href="/articles/fee-negotiation/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料を下げる交渉術5選</p>
              <p className="mt-1 text-sm text-text-light">
                コスト削減の具体的な方法を紹介
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            最適なファクタリング会社を見つけましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            消費税の取り扱いを理解したら、信頼できるファクタリング会社を比較しましょう。15社を手数料・入金速度・審査通過率で徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
