import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "JBL（日本ビジネスリンクス）の口コミ・評判｜365日対応・最短2時間のファクタリングを検証",
  description:
    "JBL（日本ビジネスリンクス）の口コミ・評判を徹底調査。株式会社JBLが運営する、土日祝含む365日対応・最短2時間・最大1億円のオンラインファクタリングを公式情報で検証します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/jbl/",
  },
  openGraph: {
    title:
      "JBL（日本ビジネスリンクス）の口コミ・評判｜365日対応・最短2時間のファクタリングを検証",
    description:
      "JBL（日本ビジネスリンクス）の口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
    url: "https://hyogo-shihoushoshi.jp/reviews/jbl/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "JBL（ジェイビーエル）" },
  {
    label: "手数料",
    value:
      "2%〜（トップ・オンラインファクタリングのページでは「業界最安水準の2%〜」、即日ファクタリングのページの比較表では「2%〜14.9%」と記載）（公式サイトにて2026年7月確認）",
  },
  {
    label: "入金スピード",
    value:
      "最短2時間（着金までの平均は2〜3日・最短即日）（公式サイトにて2026年7月確認）",
  },
  {
    label: "買取可能額",
    value: "最大1億円まで（それ以上の金額は要相談）（公式サイトにて2026年7月確認）",
  },
  {
    label: "対象",
    value: "法人・個人事業主（設立1年未満の法人も可）（公式サイトにて2026年7月確認）",
  },
  {
    label: "契約方式",
    value: "2社間・3社間（診療報酬・介護報酬・調剤報酬ファクタリングにも対応）",
  },
  {
    label: "オンライン対応",
    value:
      "○（クラウドサインによる電子契約・申込から着金までWeb完結）",
  },
  {
    label: "債権譲渡登記",
    value:
      "公式Q&Aでは「原則必要（事情により留保して契約も相談可）」、即日ファクタリングのページの比較表では「なし」と記載（公式サイトにて2026年7月確認）",
  },
  {
    label: "営業・入金対応",
    value:
      "土・日・祝日を含む365日対応（受付時間9:00〜19:00・休日も同条件で特別料金なし）",
  },
  {
    label: "運営会社",
    value: "株式会社JBL（本社：東京都豊島区南池袋）",
  },
];

const merits = [
  {
    title: "土日祝を含む365日、契約から振込まで対応",
    description:
      "JBLの最大の特徴は、土・日・祝日でも申込から契約・振込までを完結できる点です。公式サイトでは「業界で初めてとなる365日完全対応を実現」と表記されており、休日の受付時間も平日と同じ9時〜19時、手数料の上昇や特別料金も発生しないと公式Q&Aに明記されています（公式サイトにて2026年7月確認）。週明け・祝日明けの支払いに必要な資金を前日の休日中に調達できる点は、他社にはあまり見られない強みです。",
  },
  {
    title: "オンライン完結で最短2時間の資金化",
    description:
      "申込から着金までのすべての手続きをWeb上で進められ、オンラインファクタリングでは最短2時間での着金をうたっています（公式サイトにて2026年7月確認）。契約は弁護士ドットコム株式会社が運営する電子契約サービス「クラウドサイン」を利用し、来店・面談は不要です（審査結果によってはWebカメラでの面談を行う場合があると公式に記載）。申込前に「AIオンライン10秒査定」で概算の資金調達額と手数料を確認できる点も特徴です。",
  },
  {
    title: "手数料2%〜・他社からの乗り換え優遇あり",
    description:
      "手数料は「業界最安水準の2%〜」と公式サイトに表記されています（公式サイトにて2026年7月確認）。また、他社ファクタリングからの乗り換え契約では「現在ご利用中の他社より、1%でも高い買取率をご提示します」と公式に記載されており、既にファクタリングを利用中で条件に不満がある事業者向けの乗り換え査定フォームも用意されています。",
  },
  {
    title: "最大1億円・個人事業主や設立1年未満の法人も対象",
    description:
      "買取可能額は最大1億円までと公式Q&Aに記載されており、小口から大口まで対応します（公式サイトにて2026年7月確認）。即日ファクタリングのページでは「個人事業主様や設立1年未満の法人様でもご利用OK」と明記され、必要書類の決算書も個人事業主は確定申告書で代用できます。診療報酬・介護報酬・調剤報酬ファクタリングも取り扱っており、医療・介護事業者にも門戸を開いています。",
  },
];

const demerits = [
  {
    title: "手数料の上限表記がページによって異なる",
    description:
      "トップページとオンラインファクタリングのページでは「2%〜」と下限のみの表記ですが、即日ファクタリングのページにある他社比較表では「2%〜14.9%」と記載されており、公式サイト内で上限の示し方が一定ではありません（2026年7月確認時点）。実際の手数料は案件ごとの見積もり次第のため、必ず見積もりを取り、他社と比較して判断することをおすすめします。",
  },
  {
    title: "債権譲渡登記の扱いも公式サイト内で表記が揺れている",
    description:
      "公式Q&Aでは債権譲渡登記について「原則必要ですが、支障が生じる可能性がある場合は留保して契約することもできます」と記載されている一方、即日ファクタリングのページの比較表では「債権譲渡登記設定 なし」と記載されており、公式サイト内で説明が一致していません（2026年7月確認時点）。登記の有無は売掛先に知られるリスクや費用に関わるため、契約前に自分のケースでどうなるかを必ず書面で確認しましょう。",
  },
  {
    title: "着金までの平均は2〜3日で、第三者の口コミもまだ少ない",
    description:
      "公式Q&Aでは「着金までの平均は2日〜3日ほど」とされており、最短即日・最短2時間はあくまで必要書類が揃い審査がスムーズに進んだ場合の最短値です（公式サイトにて2026年7月確認）。即日を希望する場合は事前に書類を揃え、午前中の早い時間に申し込む必要があります。また、大手と比べると第三者の口コミ・評判情報がまだ少なく、判断材料が限られる点にも留意が必要です。",
  },
];

const steps = [
  {
    step: "1",
    title: "申込・必要書類の提出",
    description:
      "公式サイトの申込フォームまたは電話（受付9:00〜19:00・土日祝も対応）から申込。請求書・身分証・通帳（過去6ヶ月分、Web明細可）・決算書（個人事業主は確定申告書）・成因資料を、写真やPDFでフォームから同時に送付できます。",
  },
  {
    step: "2",
    title: "審査・ヒアリング",
    description:
      "提出書類をもとに簡単なヒアリングを実施（3社間希望の場合は売掛先の審査も実施）。審査結果によってはWebカメラを使った面談を行う場合があります（公式サイトにて2026年7月確認）。",
  },
  {
    step: "3",
    title: "見積もりの提示",
    description:
      "審査後に買取金額・手数料の見積書が提示されます。公式サイトには「契約の強要は一切いたしません」と記載されており、内容に承諾した場合のみ契約に進みます。",
  },
  {
    step: "4",
    title: "契約・着金",
    description:
      "クラウドサインによる電子契約を締結後、速やかに指定口座へ振込。オンラインファクタリングは最短2時間、土日祝でも同じ流れで進行します。",
  },
];

const faqs = [
  {
    question: "JBLは申込当日に入金してもらえますか？",
    answer:
      "公式Q&Aでは「着金までの平均は2日〜3日ほどですが、最短即日に資金調達が可能」とされています（公式サイトにて2026年7月確認）。即日での契約を希望する場合は、事前に必要書類（請求書・身分証・通帳・決算書・成因資料）を用意し、なるべく早い時間帯に申し込む必要があります。オンラインファクタリングでは最短2時間での着金も可能と公式に表記されています。",
  },
  {
    question: "JBLの手数料はいくらですか？",
    answer:
      "公式サイトでは「業界最安水準の2%〜」と表記されています（公式サイトにて2026年7月確認）。ただし、即日ファクタリングのページの比較表では「2%〜14.9%」と上限を示す記載もあり、公式サイト内で表記が一定ではありません。実際の手数料は売掛先の信用力や契約形態によって変わるため、AI10秒査定や無料見積もりで自分のケースの数字を確認し、他社と比較することをおすすめします。",
  },
  {
    question: "JBLは土日や祝日でも本当に入金されますか？",
    answer:
      "公式サイトでは、土・日・祝日でも申込から契約・振込までを当日中に完結できると表記されています（公式サイトにて2026年7月確認）。公式Q&Aによると、休日でも通常の契約と条件は同じで、手数料の上昇や特別料金も発生しません。受付時間は平日と同じ9時から19時までのため、休日の即日入金を希望する場合も早めの時間帯の申込が推奨されています。",
  },
  {
    question: "JBLは個人事業主でも利用できますか？",
    answer:
      "はい、公式サイトの即日ファクタリングのページに「個人事業主様や設立1年未満の法人様でもご利用OK」と明記されています（公式サイトにて2026年7月確認）。必要書類の決算書は、個人事業主の場合は確定申告書を用意すれば問題ありません。なお、給料（賃金債権）の買取は一切行っていないと公式Q&Aに明記されているため、給与ファクタリング目的では利用できません。",
  },
  {
    question: "JBLと日本ビジネスリンクスは同じ会社ですか？",
    answer:
      "第三者のサイトでは「JBL（日本ビジネスリンクス）」の名称で紹介されることがありますが、現在の公式サイト（jbl.tokyo）の会社概要に記載されている運営会社名は「株式会社JBL」です（2026年7月確認）。株式会社日本ビジネスリンクスの公式ドメインには2026年7月時点でアクセスできず、社名変更等の経緯についての公式表記も確認できませんでした。当ページは現行の公式サイト（jbl.tokyo）の記載にもとづいて解説しています。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "JBL（日本ビジネスリンクス）の口コミ・評判｜365日対応・最短2時間のファクタリングを検証",
  description:
    "JBL（日本ビジネスリンクス）の口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/jbl/",
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
      name: "JBL",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function JblReviewPage() {
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
          { label: "JBL" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            JBL（日本ビジネスリンクス）の口コミ・評判
            <br className="hidden md:block" />
            365日対応・最短2時間のファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            株式会社JBLが運営するファクタリング「JBL」の手数料・審査・入金スピード・土日祝対応を、公式サイトで確認できる情報にもとづいて検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            JBLは、土日祝を含む365日の契約・振込対応と、クラウドサインによるオンライン完結（最短2時間）、最大1億円までの買取が特徴のファクタリングです（公式サイトにて2026年7月確認）。手数料は2%〜で、個人事業主や設立1年未満の法人にも対応します。休日中に資金を確保したい方には数少ない選択肢の一つです。一方、手数料の上限や債権譲渡登記の扱いは公式サイト内で表記が揺れているため、契約前の見積もり確認が必須です。手数料の上限を事前に把握したい方は
            <Link href="/reviews/olta/" className="text-primary underline hover:no-underline">OLTA</Link>
            （2〜9%上限明示）、オンラインで低コストを狙う方は
            <Link href="/reviews/ququmo/" className="text-primary underline hover:no-underline">QuQuMo</Link>
            （1%〜）、大口・対面重視なら
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
            <li><a href="#basic-info" className="hover:underline">1. JBLの基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. JBLの会社概要と特徴</a></li>
            <li><a href="#reviews" className="hover:underline">3. 口コミ・評判の現状</a></li>
            <li><a href="#merits" className="hover:underline">4. JBLのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">5. JBLのデメリット3つ</a></li>
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
            JBLの基本情報
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
            JBLの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            JBLは、株式会社JBL（JBL Inc.）が運営するファクタリングサービスです。公式サイトの会社概要によると、代表者は寺西真悟氏、資本金は1,000万円、本社は東京都豊島区南池袋二丁目33番6号 佐藤ビルディング7階で、事業内容としてファクタリング事業と各種コンサルティング事業（補助金・助成金の受給サポート、融資に向けたアドバイスなど）を掲げています（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            サービス面では、土日祝を含む365日の契約・振込対応を「業界で初めて」と公式に表記しているのが最大の特徴です。契約は弁護士ドットコム株式会社が運営する電子契約サービス「クラウドサイン」を利用したオンライン完結型で、AIによる10秒査定や他社からの乗り換え査定も用意されています。2社間・3社間の両方に対応し、診療報酬・介護報酬・調剤報酬ファクタリングも取り扱っています（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            なお、第三者のサイトでは「JBL（日本ビジネスリンクス）」の名称で紹介されることがありますが、現在の公式サイト（jbl.tokyo）の会社概要に記載されている運営会社名は「株式会社JBL」です。株式会社日本ビジネスリンクスの公式ドメインには2026年7月時点で到達できず、社名変更等の経緯に関する公式表記も確認できなかったため、当ページは現行公式サイトの記載のみにもとづいて解説しています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">JBLの3つの強み（公式サイトの表記より）</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>土日祝を含む365日、契約から振込まで対応（休日も同条件）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>クラウドサインによるオンライン完結・最短2時間で資金化</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>最大1億円まで買取・個人事業主/設立1年未満の法人も対象</span>
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
              JBLについては、大手口コミサイトやレビューサイトにおける第三者の投稿がまだ少なく、当サイトの調査時点（2026年7月）では、利用者の生の声から傾向を判断できるだけの十分な口コミ情報を確認できませんでした。そのため、本ページでは架空の口コミや体験談を掲載せず、公式サイトで確認できる事実のみにもとづいて解説しています。
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              公式サイトには「ご利用事例」が掲載されていますが、これらは公式サイト上の自社掲載コンテンツであり、第三者による検証可能な口コミではない点に留意してください。利用を検討する際は、必ず見積もりを取り、手数料・契約条件（償還請求権の有無・債権譲渡登記の扱い）を書面で確認したうえで、複数社と比較することをおすすめします。
            </p>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            JBLのメリット4つ
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
            JBLのデメリット3つ
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
            JBLの利用の流れ
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
                  <span>土日祝のうちに資金を確保し、週明けの支払いに備えたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>来店せずオンラインだけで契約を完結させたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>数千万円〜1億円規模の大口債権を現金化したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>個人事業主・設立1年未満の法人・他社から乗り換えたい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料や登記の条件を事前に確定した状態で比較したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>担当者と対面（来店・出張）で相談しながら進めたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>豊富な第三者の口コミ・実績開示を重視する方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            JBLの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            JBLは、土日祝を含む365日の契約・振込対応という明確な差別化ポイントを持つファクタリングサービスです。休日でも平日と同じ条件・同じ受付時間（9時〜19時）で利用でき、特別料金も発生しないと公式に明記されているため、「週明け朝イチの支払いに間に合わせたい」といった休日特有の資金需要には特に強い選択肢です（公式サイトにて2026年7月確認）。クラウドサインによるオンライン完結、最大1億円までの買取幅、個人事業主・設立1年未満の法人への対応、診療報酬・介護報酬・調剤報酬への対応など、カバー範囲も広めです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、手数料の上限（2%〜のみの表記と2%〜14.9%の表記が混在）や債権譲渡登記の扱い（原則必要とする記載と「なし」とする記載が混在）について、公式サイト内で表記が一致していない点は気になるところです。実際の条件は案件ごとの見積もりで確定するため、契約前に手数料・登記・償還請求権の有無を必ず書面で確認しましょう。着金までの平均が2〜3日とされている点も、即日を前提にせずスケジュールに余裕を持つのが安全です。
          </p>
          <p className="leading-relaxed text-text-light">
            休日対応とオンライン完結を重視する方には検討価値のあるサービスですが、条件の透明性を重視するなら、手数料上限を明示する
            <Link href="/reviews/olta/" className="text-primary underline hover:no-underline">OLTA</Link>
            （2〜9%）や、オンライン完結で低い下限を掲げる
            <Link href="/reviews/ququmo/" className="text-primary underline hover:no-underline">QuQuMo</Link>
            （1%〜）、大手の実績と対面対応を求めるなら
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
            JBLのAI10秒査定・無料相談はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            土日祝を含む365日対応。オンライン完結で最短2時間の資金化。
          </p>
          <a
            href="https://jbl.tokyo/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            JBL公式サイトで無料相談
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/olta/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTAの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料2〜9%上限明示のオンラインファクタリング</p>
            </Link>
            <Link
              href="/reviews/ququmo/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">QuQuMoの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料1%〜のオンライン完結ファクタリング</p>
            </Link>
            <Link
              href="/articles/weekend-factoring/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">土日・祝日に使えるファクタリング</p>
              <p className="mt-1 text-sm text-text-light">休日の資金調達手段を解説</p>
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
