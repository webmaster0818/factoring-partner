import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ネクストワン（Next One）の口コミ・評判｜法人専門・買取上限なしのファクタリングを検証",
  description:
    "ネクストワン（Next One）の口コミ・評判を徹底調査。株式会社ネクストワン運営、2社間5%〜10%・3社間1.5%〜、30万円から買取上限なし、最短即日の法人専門ファクタリングを公式情報で検証します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/nextone/",
  },
  openGraph: {
    title:
      "ネクストワン（Next One）の口コミ・評判｜法人専門・買取上限なしのファクタリングを検証",
    description:
      "ネクストワン（Next One）の口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
    url: "https://hyogo-shihoushoshi.jp/reviews/nextone/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "ネクストワン（Next One）" },
  {
    label: "手数料",
    value:
      "2社間5%〜10%・3社間1.5%〜7%（公式手数料ページ本文）※公式サイト内では3社間について「1.5%〜8%」（比較表・シミュレーターの選択肢）や「平均1.5%〜4%」（Q&A）の表記もあり（公式サイトにて2026年7月確認）",
  },
  {
    label: "入金スピード",
    value:
      "最短即日（必要書類の提出から約1時間ほどで審査）（公式サイトにて2026年7月確認）",
  },
  {
    label: "買取可能額",
    value:
      "30万円〜上限なし（5,000万円を超える場合は審査に日数がかかることあり）（公式サイトにて2026年7月確認）",
  },
  {
    label: "対象",
    value:
      "法人専門（個人事業主は利用不可・風俗業は利用不可・社歴/赤字/債務超過/税金滞納/リスケ中は相談可）（公式Q&Aにて2026年7月確認）",
  },
  {
    label: "契約方式",
    value: "2社間・3社間（償還請求権のないノンリコース契約）",
  },
  {
    label: "契約方法",
    value:
      "面談（来店・訪問）・郵送・電子契約（クラウドサインによるオンライン完結も可）",
  },
  {
    label: "債権譲渡登記",
    value:
      "原則必須（状況により判断・手続きは同社指定の司法書士に依頼）（公式Q&Aにて2026年7月確認）",
  },
  {
    label: "受付時間",
    value: "9:00〜19:00（土日祝休み）※メールでの問い合わせは24時間受付",
  },
  {
    label: "運営会社",
    value: "株式会社ネクストワン（本社：東京都千代田区内神田）",
  },
];

const merits = [
  {
    title: "30万円から買取上限なしまで対応できる買取幅",
    description:
      "ネクストワンは最低取扱金額30万円から、買取上限金額を設けていないと公式Q&Aに明記されています（5,000万円を超える場合は審査に日数がかかることがあるとの注記あり）（公式サイトにて2026年7月確認）。上限を数千万円までとする会社が多い中で、小口から大口まで一社で相談できる買取幅は特徴的です。",
  },
  {
    title: "3社間1.5%〜の低水準・審査費用/更新料なし",
    description:
      "手数料は「業界最安水準」として、3社間取引1.5%〜、2社間取引5%〜10%と公表されています（公式サイトにて2026年7月確認）。また公式Q&Aでは、審査費用・更新料は一切かからない、2社間では留保金も発生しない（3社間は発生する場合あり）と明記されています。他社からの乗り換えキャンペーンも案内されており、公式Q&Aでも「他社と手数料を比べてみてください」と乗り換え相談を受け付けています。",
  },
  {
    title: "経営コンサルティング出身の運営会社によるサポート",
    description:
      "運営会社の株式会社ネクストワンは、経営コンサルタント業を主軸に創業した会社で、代表者挨拶では「経営コンサルタントで行ってきたことを無償で提供することを心掛け」「なるべく早くファクタリングサービスを使用されることなく円滑に資金が回るようにお手伝いさせていただきます」と表明しています（公式サイトにて2026年7月確認）。資金調達だけでなく資金繰り改善の相談まで視野に入れた姿勢は、同社の差別化ポイントです。",
  },
  {
    title: "オンライン完結にも対応し最短即日で資金化",
    description:
      "契約方法は面談（来店・訪問）・郵送・電子契約から選べ、電子契約は弁護士ドットコムが運営する「クラウドサイン」を採用しています（公式サイトにて2026年7月確認）。最短即日ページでは、メールでの問い合わせ・書類提出・オンライン契約により面談不要で手続きでき、必要書類（請求書・通帳）の提出から約1時間ほどで審査されると記載されています。24時間メール受付のため、営業時間外でも申込自体は可能です。",
  },
];

const demerits = [
  {
    title: "個人事業主・フリーランスは利用できない（法人専門）",
    description:
      "公式Q&Aでは「個人事業主でも利用できるのですか？」に対して「申し訳ございません。弊社は法人専門となります」と明記されています（公式サイトにて2026年7月確認）。また風俗業も利用不可です。個人事業主・フリーランスの方は、個人事業主対応を明示しているラボルやペイトナーなどを検討してください。",
  },
  {
    title: "3社間手数料の上限表記が公式サイト内で揺れている",
    description:
      "3社間の手数料は、手数料ページ本文では「1.5%〜7%」、同ページ内の他社比較表では「1.5%〜8%」、公式Q&Aでは「平均1.5%〜4%」、手数料シミュレーターの選択肢は「1.5%〜8%」と、公式サイト内で上限の示し方が一致していません（2026年7月確認時点）。2社間の5%〜10%は各所で一貫していますが、3社間の実際の料率は必ず見積もりで確認しましょう。",
  },
  {
    title: "債権譲渡登記が原則必須で、受付は土日祝休み",
    description:
      "公式Q&Aでは、債権譲渡登記は「原則必須となりますが、お客様の状況により判断させていただきます」とされ、登記手続きは同社指定の司法書士に依頼すると記載されています（公式サイトにて2026年7月確認）。登記を避けたい事情がある場合は事前に相談が必要です。また、電話受付は9:00〜19:00で土日祝は休みのため、休日中の資金化には対応していません。",
  },
];

const steps = [
  {
    step: "1",
    title: "相談・申込",
    description:
      "電話（受付9:00〜19:00・土日祝休み）またはメール（24時間受付）で相談・申込。公式サイトの「簡単査定」フォームからも申し込めます。",
  },
  {
    step: "2",
    title: "面談・必要書類の提出",
    description:
      "来店または訪問での面談（1時間程度）。遠方の場合は郵送・メール・FAXでの書類対応も可能です。身分証明書・会社謄本・決算書（直近2期分）・請求書・成因資料・通帳などを用意します（公式サイトにて2026年7月確認）。",
  },
  {
    step: "3",
    title: "審査・条件の提示",
    description:
      "審査後に買取金額・買取条件が提示されます。即日希望の場合は請求書・通帳の提出で即日条件を提示すると公式Q&Aに記載されています。",
  },
  {
    step: "4",
    title: "契約・入金",
    description:
      "条件を承諾したら契約締結（面談・郵送・クラウドサインによる電子契約から選択、最終確認での来店は不要）。契約完了後、指定口座に売買代金が振り込まれます。",
  },
];

const faqs = [
  {
    question: "ネクストワンは個人事業主でも利用できますか？",
    answer:
      "いいえ、公式Q&Aで「弊社は法人専門となります」と明記されており、個人事業主・フリーランスは利用できません（公式サイトにて2026年7月確認）。また風俗業も利用不可とされています。個人事業主・フリーランスの方は、ラボル（一律10%・最短60分）やペイトナー（一律10%・最短10分）など個人事業主対応を明示するサービスを検討してください。",
  },
  {
    question: "ネクストワンの手数料はいくらですか？",
    answer:
      "公式の手数料ページでは、2社間取引5%〜10%・3社間取引1.5%〜7%と記載されています（公式サイトにて2026年7月確認）。ただし、3社間については公式サイト内で「1.5%〜8%」（比較表・シミュレーター選択肢）や「平均1.5%〜4%」（Q&A）と幅のある表記が混在しているため、実際の料率は見積もりで確認する必要があります。審査費用・更新料はかからないと公式Q&Aに明記されています。",
  },
  {
    question: "ネクストワンは最短でどのくらいで資金化できますか？",
    answer:
      "必要書類が揃っていれば最短当日（即日）に資金化可能と公式Q&Aに記載されています（公式サイトにて2026年7月確認）。即日を希望する場合は、請求書・通帳を提出すれば即日条件が提示され、書類提出から約1時間ほどで審査されます。メール・オンライン契約を使えば面談不要で手続きできるため、遠方からでも利用可能です。",
  },
  {
    question: "ネクストワンでは債権譲渡登記が必要ですか？",
    answer:
      "公式Q&Aでは「原則必須となりますが、お客様の状況により判断させていただきます」と記載されています（公式サイトにて2026年7月確認）。債権譲渡の手続きは、必要書類の提出後に同社指定の司法書士へ依頼する流れです。登記に支障がある場合は、申込時に相談してみましょう。",
  },
  {
    question: "赤字決算や税金滞納があっても利用できますか？",
    answer:
      "公式Q&Aでは、赤字決算・債務超過でも問題なく利用でき、税金滞納中でも問題ないとされています。銀行返済の滞納については「滞納状況により判断」とされ、リスケ中であれば問題ないと記載されています（公式サイトにて2026年7月確認）。担保・保証人・代表者個人の保証も不要で、償還請求権のないノンリコース契約のため、売掛先が倒産しても利用者に支払い義務はありません。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ネクストワン（Next One）の口コミ・評判｜法人専門・買取上限なしのファクタリングを検証",
  description:
    "ネクストワン（Next One）の口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/nextone/",
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
      name: "ネクストワン",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function NextoneReviewPage() {
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
          { label: "ネクストワン" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ネクストワン（Next One）の口コミ・評判
            <br className="hidden md:block" />
            法人専門・買取上限なしのファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            株式会社ネクストワンが運営するファクタリング「ネクストワン」の手数料・審査・入金スピード・契約方法を、公式サイトで確認できる情報にもとづいて検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            ネクストワンは、30万円から買取上限なしまでの買取幅と、3社間1.5%〜の低水準手数料（2社間は5%〜10%）、経営コンサルティング出身の運営会社によるサポートが特徴の法人専門ファクタリングです（公式サイトにて2026年7月確認）。クラウドサインによるオンライン完結・最短即日にも対応します。一方、個人事業主・フリーランスは利用できないため、個人の方は
            <Link href="/reviews/labol/" className="text-primary underline hover:no-underline">ラボル</Link>
            や
            <Link href="/reviews/paytner/" className="text-primary underline hover:no-underline">ペイトナー</Link>
            （いずれも一律10%・個人事業主対応）を、法人で大口・対面重視なら
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            も比較して判断するのがおすすめです。
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
            <li><a href="#basic-info" className="hover:underline">1. ネクストワンの基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. ネクストワンの会社概要と特徴</a></li>
            <li><a href="#reviews" className="hover:underline">3. 口コミ・評判の現状</a></li>
            <li><a href="#merits" className="hover:underline">4. ネクストワンのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">5. ネクストワンのデメリット3つ</a></li>
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
            ネクストワンの基本情報
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
            ネクストワンの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ネクストワンは、株式会社ネクストワンが運営するファクタリングサービスです。公式サイトの会社概要によると、代表者は代表取締役の福田文生氏、資本金は1,000万円、主取引銀行はみずほ銀行、本社は東京都千代田区内神田3-24-4 9STAGEkanda 6階（神田駅から徒歩3分）です（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            同社は経営コンサルタント業を主軸に創業した会社で、代表者挨拶では、銀行融資の使いにくさを経験した問題意識から売掛債権の現金化サービスを自社で取り扱うに至った経緯と、「経営コンサルタントで行ってきたことを無償で提供する」姿勢が述べられています。ファクタリング会社としては、資金繰り改善までを視野に入れたコンサルティング型の立ち位置が特徴です（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            サービスは法人専門（個人事業主不可）で、2社間・3社間の両方に対応。契約は面談（来店・訪問）・郵送・クラウドサインによる電子契約から選択でき、オンライン完結による最短即日の資金化にも対応しています。買取額は30万円から上限なしで、償還請求権のないノンリコース契約、担保・保証人・代表者保証も不要と公式Q&Aに明記されています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">ネクストワンの3つの強み（公式サイトの表記より）</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>30万円〜買取上限なしの買取幅・最短即日の資金化</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>3社間1.5%〜・2社間5%〜10%（業界最安水準と公式表記）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>経営コンサルティングの知見を無償提供する運営姿勢</span>
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
              ネクストワンについては、大手口コミサイトやレビューサイトにおける第三者の投稿がまだ少なく、当サイトの調査時点（2026年7月）では、利用者の生の声から傾向を判断できるだけの十分な口コミ情報を確認できませんでした。そのため、本ページでは架空の口コミや体験談を掲載せず、公式サイトで確認できる事実のみにもとづいて解説しています。
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              公式サイトには「契約事例」が掲載されていますが、これらは公式サイト上の自社掲載コンテンツであり、第三者による検証可能な口コミではない点に留意してください。利用を検討する際は、必ず見積もりを取り、手数料・契約条件（償還請求権の有無・債権譲渡登記・留保金の扱い）を書面で確認したうえで、複数社と比較することをおすすめします。
            </p>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ネクストワンのメリット4つ
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
            ネクストワンのデメリット3つ
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
            ネクストワンの利用の流れ
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
                  <span>5,000万円超の大口債権も含めて相談したい法人の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>3社間で1.5%〜の低い手数料水準を狙いたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>資金繰り改善のコンサルティングまで相談したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>赤字決算・債務超過・リスケ中で銀行融資が難しい法人の方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>個人事業主・フリーランスの方（法人専門のため利用不可）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>債権譲渡登記を避けたい事情がある方（原則必須）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>土日祝に電話相談・資金化したい方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ネクストワンの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ネクストワンは、法人専門に割り切ったうえで、30万円から上限なしという買取幅と3社間1.5%〜の低水準手数料を掲げるファクタリングサービスです。公式Q&Aの情報開示は比較的細かく、審査費用・更新料なし、2社間の留保金なし、代表者保証不要、ノンリコース契約であることまで明文で確認できます（公式サイトにて2026年7月確認）。経営コンサルタント出身の運営会社が「ファクタリングを使わずに資金が回る状態」を目標に掲げている点も、依存リスクを考えるうえで好感できる姿勢です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、個人事業主・フリーランスが利用できない点は明確な制約です。また、3社間手数料の上限が公式サイト内で「7%」「8%」「平均4%」と揺れているため、コストを正確に比較するには見積もりの取得が欠かせません。債権譲渡登記が原則必須である点、受付が土日祝休みである点も、人によっては不向きの要素になります。
          </p>
          <p className="leading-relaxed text-text-light">
            大口も含めて相談できる法人向けの選択肢としては有力ですが、相見積もりは必須です。個人事業主・フリーランスの方は
            <Link href="/reviews/labol/" className="text-primary underline hover:no-underline">ラボル</Link>
            ・
            <Link href="/reviews/paytner/" className="text-primary underline hover:no-underline">ペイトナー</Link>
            、法人で大手の実績を重視するなら
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
            ネクストワンの簡単査定・無料相談はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            法人専門・30万円から上限なし。最短即日で資金化できます。
          </p>
          <a
            href="https://next1-one.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            ネクストワン公式サイトで無料相談
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/labol/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ラボルの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">個人事業主・フリーランス対応のファクタリング</p>
            </Link>
            <Link
              href="/reviews/betrading/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">全国対応の大手ファクタリングを検証</p>
            </Link>
            <Link
              href="/articles/for-corporation/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">法人向けファクタリングガイド</p>
              <p className="mt-1 text-sm text-text-light">法人の資金調達に役立つ情報</p>
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
