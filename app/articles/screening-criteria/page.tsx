import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリングの審査基準を徹底解説｜通過率を上げる方法",
  description:
    "ファクタリングの審査基準・審査で見るポイント（売掛先の信用力が最重要）、必要書類、審査落ちの原因5つ、赤字・税金滞納でもOKな理由、通過率を上げるコツを徹底解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/screening-criteria/",
  },
  openGraph: {
    title: "ファクタリングの審査基準を徹底解説｜通過率を上げる方法",
    description:
      "ファクタリング審査で何を見る？売掛先の信用力・必要書類・審査落ちの原因と通過率アップのコツを解説。",
    url: "https://factoring-partner.pages.dev/articles/screening-criteria/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const screeningPoints = [
  {
    title: "売掛先の信用力（最重要）",
    description:
      "ファクタリング審査で最も重視されるのは売掛先（取引先）の信用力です。売掛先が上場企業、大手企業、官公庁であれば審査通過の可能性が非常に高くなります。ファクタリング会社にとっての最大のリスクは「売掛先が支払い不能になること」であり、売掛先の財務状況や支払い実績が重要な判断材料となります。利用者自身の信用力よりも売掛先の信用力が優先される点は、銀行融資との大きな違いです。",
    importance: "最重要",
  },
  {
    title: "売掛金の信頼性・確実性",
    description:
      "売掛金が実際に存在し、確実に支払われるものかが審査されます。請求書や契約書で売掛金の存在を証明できること、過去に取引実績があること、支払い期日が明確であることが重要です。架空の売掛金や既に支払い済みの売掛金は当然ながら利用できません。また、支払い期日が極端に長い売掛金（6ヶ月以上先など）は審査が厳しくなる傾向にあります。",
    importance: "重要",
  },
  {
    title: "利用者の事業実態",
    description:
      "利用者自身の信用力は銀行融資ほど重視されませんが、事業実態の確認は行われます。実在する企業・個人事業主であること、反社会的勢力に該当しないこと、売掛金の二重譲渡をしていないことなどが確認されます。赤字決算や税金滞納があっても、売掛先の信用力が高ければ審査に通る可能性は十分にあります。",
    importance: "中程度",
  },
  {
    title: "売掛先との取引歴",
    description:
      "売掛先との取引が継続的に行われているかも審査のポイントです。初回取引の売掛金よりも、複数回の取引実績がある売掛先の方が審査に通りやすくなります。過去の入金実績（期日通りに支払われているか）も重要な判断材料です。取引歴が浅い場合は、契約書や発注書など取引の証拠書類をしっかり揃えましょう。",
    importance: "中程度",
  },
  {
    title: "売掛金の金額・支払いサイト",
    description:
      "売掛金の金額がファクタリング会社の取扱い範囲内であることや、支払いサイト（入金までの期間）が適切であることも審査対象です。多くのファクタリング会社では10万円〜数億円の範囲で対応しています。支払いサイトは一般的に30日〜90日程度が審査に通りやすく、180日以上は厳しくなります。",
    importance: "中程度",
  },
];

const requiredDocuments = [
  {
    name: "身分証明書",
    description: "代表者の運転免許証、パスポート、マイナンバーカードなど",
    required: true,
  },
  {
    name: "請求書・売掛金を証明する書類",
    description: "売掛先宛ての請求書、納品書、発注書など",
    required: true,
  },
  {
    name: "通帳のコピー（入出金明細）",
    description: "直近3〜6ヶ月分の入出金履歴。売掛先からの入金実績を確認するため",
    required: true,
  },
  {
    name: "決算書・確定申告書",
    description: "直近1〜2期分。法人は決算書、個人事業主は確定申告書",
    required: false,
  },
  {
    name: "商業登記簿謄本",
    description: "法人の場合。会社の実在証明として使用",
    required: false,
  },
  {
    name: "売掛先との取引基本契約書",
    description: "継続的な取引関係を証明するため",
    required: false,
  },
  {
    name: "印鑑証明書",
    description: "契約時に必要な場合がある",
    required: false,
  },
  {
    name: "納税証明書",
    description: "税金の滞納状況を確認するため。必須ではないケースが多い",
    required: false,
  },
];

const rejectionReasons = [
  {
    title: "売掛先の信用力が低い",
    description:
      "売掛先が設立間もない企業、財務状況が悪い企業、過去に支払い遅延がある企業の場合、審査に落ちる可能性が高くなります。特に売掛先が個人事業主や小規模企業の場合は、審査が厳しくなる傾向にあります。",
    solution:
      "信用力の高い売掛先（大手企業・上場企業・官公庁）の売掛金を利用する。複数の売掛金がある場合は、最も信用力の高い売掛先のものを選びましょう。",
  },
  {
    title: "売掛金の実在性が確認できない",
    description:
      "請求書や契約書が不備である場合や、売掛金の存在を証明する書類が不十分な場合は審査に通りません。また、架空の売掛金や水増しされた売掛金は詐欺行為に該当するため、絶対に行ってはいけません。",
    solution:
      "請求書・納品書・発注書・契約書など、売掛金の存在を証明する書類をしっかり揃える。通帳の入金履歴で過去の取引実績を示すことも有効です。",
  },
  {
    title: "二重譲渡の疑いがある",
    description:
      "同じ売掛金を複数のファクタリング会社に譲渡（二重譲渡）することは違法です。二重譲渡の疑いがある場合は審査に落ちるだけでなく、法的な責任を問われる可能性もあります。",
    solution:
      "二重譲渡は絶対に行わない。過去に別のファクタリング会社を利用した場合は正直に申告しましょう。",
  },
  {
    title: "不良債権や回収困難な売掛金",
    description:
      "支払い期日を大幅に過ぎている売掛金、売掛先が経営破綻している場合の売掛金、訴訟中の売掛金などは審査に通りません。ファクタリングは健全な売掛金を対象としたサービスです。",
    solution:
      "支払い期日内の健全な売掛金を利用する。回収が困難な売掛金は弁護士に相談しましょう。",
  },
  {
    title: "利用者の事業実態に問題がある",
    description:
      "事業実態が確認できない場合、反社会的勢力に該当する場合、過去にファクタリング詐欺の前歴がある場合は審査に落ちます。また、設立直後で売掛金の実績がまだない場合も審査が厳しくなります。",
    solution:
      "必要な書類を漏れなく準備し、事業実態を明確に示す。設立直後の場合は、少額の売掛金から実績を作ることを検討しましょう。",
  },
];

const faqs = [
  {
    question: "赤字決算でもファクタリングの審査に通りますか？",
    answer:
      "はい、赤字決算でも審査に通る可能性は十分あります。ファクタリングの審査で最も重視されるのは「売掛先の信用力」であり、利用者自身の財務状況は銀行融資ほど重視されません。売掛先が大手企業や上場企業であれば、利用者が赤字決算でも審査に通るケースが多くあります。",
  },
  {
    question: "税金を滞納していてもファクタリングは利用できますか？",
    answer:
      "多くのファクタリング会社では、税金滞納があっても利用可能です。ファクタリングは融資ではなく債権の売買であるため、信用情報機関への照会や納税状況の確認が必須ではありません。ただし、一部の会社では納税証明書の提出を求める場合があるため、事前に確認することをおすすめします。",
  },
  {
    question: "個人事業主でもファクタリングの審査に通りますか？",
    answer:
      "はい、個人事業主でも利用可能なファクタリング会社は多くあります。ただし、法人に比べて対応している会社が限定される場合があります。個人事業主の場合は、確定申告書や通帳の入金履歴で売掛金の実績を示すことが重要です。フリーランス向けに特化したファクタリングサービスもあります。",
  },
  {
    question: "ファクタリングの審査にはどのくらい時間がかかりますか？",
    answer:
      "オンライン完結型のファクタリング会社では最短10分〜数時間で審査結果が出ます。対面型の場合は1〜3営業日程度が一般的です。必要書類を事前に揃えておくことで審査時間を短縮できます。AI審査を導入している会社は特に審査が速い傾向にあります。",
  },
  {
    question: "審査に落ちた場合、他の会社に申し込んでも大丈夫ですか？",
    answer:
      "はい、問題ありません。ファクタリングの審査は各社独自の基準で行われるため、A社で審査に落ちてもB社で通るケースは珍しくありません。また、ファクタリングの審査履歴は信用情報機関に記録されないため、複数社に申し込んでも信用情報に影響はありません。ただし、審査落ちの原因を把握し、改善した上で申し込むことをおすすめします。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリングの審査基準を徹底解説｜通過率を上げる方法",
  description:
    "ファクタリング審査で何を見る？売掛先の信用力・必要書類・審査落ちの原因と通過率アップのコツを解説。",
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
    "@id":
      "https://factoring-partner.pages.dev/articles/screening-criteria/",
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
      name: "ファクタリングの審査基準",
      item: "https://factoring-partner.pages.dev/articles/screening-criteria/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ScreeningCriteriaPage() {
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
          { label: "審査基準と通過率を上げる方法" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            審査ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングの審査基準を徹底解説
            <br className="hidden md:block" />
            通過率を上げる方法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングの審査では「売掛先の信用力」が最重要視されます。審査基準・必要書類・審査落ちの原因と通過率を上げるコツを徹底解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#overview" className="hover:underline">
                1. ファクタリング審査の特徴
              </a>
            </li>
            <li>
              <a href="#points" className="hover:underline">
                2. 審査で見る5つのポイント
              </a>
            </li>
            <li>
              <a href="#documents" className="hover:underline">
                3. 審査に必要な書類
              </a>
            </li>
            <li>
              <a href="#rejection" className="hover:underline">
                4. 審査落ちの原因5つと対策
              </a>
            </li>
            <li>
              <a href="#deficit-ok" className="hover:underline">
                5. 赤字・税金滞納でもOKな理由
              </a>
            </li>
            <li>
              <a href="#improve" className="hover:underline">
                6. 通過率を上げるコツ
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 審査の特徴 ─── */}
        <section id="overview" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング審査の特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングの審査は、銀行融資の審査とは大きく異なります。最大の違いは「審査対象」です。銀行融資では利用者自身の信用力や財務状況が審査されますが、ファクタリングでは<strong className="text-text-main">売掛先（取引先）の信用力</strong>が最も重視されます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            これは、ファクタリングが「融資」ではなく「売掛債権の売買」であるためです。ファクタリング会社にとってのリスクは「買い取った売掛金が回収できるかどうか」に集約されるため、売掛先の支払い能力が最重要の判断基準になります。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            そのため、利用者が赤字決算であったり、税金を滞納していたり、銀行融資の審査に落ちた経歴があったりしても、売掛先が信頼できる企業であればファクタリングの審査に通る可能性は十分にあります。この点がファクタリングの大きな利点であり、多くの中小企業やフリーランスに選ばれる理由です。
          </p>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">ファクタリング審査</th>
                  <th className="px-4 py-3 font-semibold">銀行融資審査</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    主な審査対象
                  </td>
                  <td className="px-4 py-3 font-bold text-secondary">
                    売掛先の信用力
                  </td>
                  <td className="px-4 py-3">利用者の信用力・財務状況</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    審査期間
                  </td>
                  <td className="px-4 py-3">最短10分〜即日</td>
                  <td className="px-4 py-3">2週間〜2ヶ月</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    赤字決算
                  </td>
                  <td className="px-4 py-3 text-secondary font-semibold">利用可能</td>
                  <td className="px-4 py-3 text-accent">審査に不利</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    税金滞納
                  </td>
                  <td className="px-4 py-3 text-secondary font-semibold">利用可能</td>
                  <td className="px-4 py-3 text-accent">審査に不利</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    信用情報の照会
                  </td>
                  <td className="px-4 py-3">基本的になし</td>
                  <td className="px-4 py-3">あり</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    担保・保証人
                  </td>
                  <td className="px-4 py-3">不要</td>
                  <td className="px-4 py-3">必要な場合が多い</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 審査で見る5つのポイント ─── */}
        <section id="points" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査で見る5つのポイント
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリング会社が審査で確認する主なポイントを、重要度順に解説します。これらのポイントを事前に把握し、準備しておくことで審査通過の可能性を高められます。
          </p>
          <div className="space-y-6">
            {screeningPoints.map((point, index) => (
              <div
                key={point.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-text-main">
                        {point.title}
                      </h3>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-bold text-white ${
                          point.importance === "最重要"
                            ? "bg-accent"
                            : point.importance === "重要"
                              ? "bg-secondary"
                              : "bg-primary"
                        }`}
                      >
                        {point.importance}
                      </span>
                    </div>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 必要な書類 ─── */}
        <section id="documents" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査に必要な書類
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの審査に必要な書類は会社によって異なりますが、一般的に以下の書類が求められます。事前に準備しておくことで審査がスムーズに進みます。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">書類名</th>
                  <th className="px-4 py-3 font-semibold">内容</th>
                  <th className="px-4 py-3 font-semibold text-center">必須度</th>
                </tr>
              </thead>
              <tbody>
                {requiredDocuments.map((doc) => (
                  <tr key={doc.name} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                      {doc.name}
                    </td>
                    <td className="px-4 py-3 text-text-light">
                      {doc.description}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {doc.required ? (
                        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent">
                          必須
                        </span>
                      ) : (
                        <span className="rounded-full bg-section-bg px-2 py-0.5 text-xs font-bold text-text-light">
                          任意
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※ オンライン完結型のファクタリング会社では、必要書類が最小限（身分証明書・請求書・通帳コピーの3点のみ）で済むケースもあります。
          </p>
        </section>

        {/* ── 審査落ちの原因5つ ─── */}
        <section id="rejection" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査落ちの原因5つと対策
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの審査に落ちてしまう主な原因と、それぞれの対策を解説します。原因を理解し適切に対処すれば、再申し込みで審査に通る可能性があります。
          </p>
          <div className="space-y-6">
            {rejectionReasons.map((reason, index) => (
              <div
                key={reason.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {reason.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {reason.description}
                    </p>
                    <div className="mt-3 rounded-lg bg-primary-light p-3">
                      <p className="text-sm font-semibold text-primary">対策</p>
                      <p className="mt-1 text-sm text-text-light">
                        {reason.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 赤字・税金滞納でもOKな理由 ─── */}
        <section id="deficit-ok" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            赤字・税金滞納でもOKな理由
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            銀行融資では赤字決算や税金滞納は致命的な審査落ちの原因になりますが、ファクタリングでは必ずしもそうではありません。その理由を詳しく解説します。
          </p>

          <div className="mb-6 space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">
                理由1：審査対象が「売掛先」だから
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングは売掛債権の売買取引であり、ファクタリング会社にとってのリスクは「売掛先が支払い不能になるかどうか」です。利用者自身の財務状況よりも、売掛先の信用力が審査の中心となるため、利用者が赤字であっても売掛先が健全であれば審査に通る可能性が高くなります。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">
                理由2：信用情報機関を照会しないから
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングは融資ではないため、CIC・JICC・全銀協などの信用情報機関への照会は基本的に行いません。過去のローン延滞やクレジットカードの事故情報があっても、ファクタリングの審査には影響しないのが一般的です。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">
                理由3：担保・保証人が不要だから
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングでは売掛債権自体が「担保」の代わりとなるため、不動産や設備などの担保、連帯保証人は不要です。銀行融資で担保不足や保証人を確保できないために審査に落ちた企業でも、ファクタリングなら利用できる可能性があります。
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="mb-2 font-bold text-accent">ただし注意が必要なケース</p>
            <p className="text-sm leading-relaxed text-text-light">
              赤字や税金滞納があっても審査に通る可能性はありますが、差し押さえ（税務署による売掛金の差し押さえ）が行われている場合は、ファクタリングの利用が困難になります。税金滞納による差し押さえを受けている場合は、まず税務署に相談して分納計画を立てることをおすすめします。
            </p>
          </div>
        </section>

        {/* ── 通過率を上げるコツ ─── */}
        <section id="improve" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            通過率を上げるコツ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの審査通過率を上げるために、以下のポイントを押さえておきましょう。適切な準備をすることで、より有利な条件で利用できるようになります。
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">
                信用力の高い売掛先を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                複数の売掛先がある場合、上場企業や大手企業の売掛金を優先的に利用しましょう。信用力の高い売掛先であれば、審査通過率が上がるだけでなく、手数料も安くなる傾向にあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">
                必要書類を事前に揃える
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                請求書・通帳コピー・身分証明書など、必要書類を漏れなく準備しましょう。書類不備は審査遅延や審査落ちの原因になります。売掛先との契約書や発注書も用意しておくと審査が有利になります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">
                支払いサイトが短い売掛金を利用する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                支払い期日が近い売掛金の方がリスクが低いため、審査に通りやすくなります。90日以上先の売掛金よりも、30〜60日以内の売掛金を選ぶことをおすすめします。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">
                取引実績を示す証拠を用意する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                売掛先との取引が継続的に行われていることを示す書類（過去の入金履歴・契約書・発注書）を用意しましょう。実績が多いほど審査で有利になります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">
                複数のファクタリング会社に申し込む
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                審査基準は会社ごとに異なるため、1社で審査に落ちても別の会社では通るケースがあります。最低3社程度に見積もりを依頼し、審査通過の可能性を広げましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">
                審査が柔軟な会社を選ぶ
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                「審査通過率90%以上」を掲げる会社や、個人事業主・フリーランスにも対応している会社は、審査基準が比較的柔軟です。自社の状況に合ったファクタリング会社を選びましょう。
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
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">
                手数料を安くする5つのコツも紹介
              </p>
            </Link>
            <Link
              href="/articles/easy-screening/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">審査が通りやすいファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                審査基準と通過のコツを解説
              </p>
            </Link>
            <Link
              href="/articles/is-it-legal/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングは違法？</p>
              <p className="mt-1 text-sm text-text-light">
                安全な利用方法と悪徳業者の見分け方
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            審査通過率の高いファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            審査基準を理解したら、あなたに最適なファクタリング会社を見つけましょう。15社を手数料・入金速度・審査通過率で徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
