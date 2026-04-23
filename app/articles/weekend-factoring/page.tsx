import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "土日祝日対応のファクタリング会社5選｜休日でも即日入金",
  description:
    "土日祝日でも即日入金に対応したファクタリング会社5社を徹底比較。ラボルの24時間365日対応やペイトナーの土日審査、休日に即日入金を成功させるコツ、ネット銀行活用術まで解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/weekend-factoring/",
  },
  openGraph: {
    title:
      "土日祝日対応のファクタリング会社5選｜休日でも即日入金",
    description:
      "土日祝日に即日入金できるファクタリング会社5社を比較。休日に資金調達を成功させるコツも解説。",
    url: "https://factoring-partner.pages.dev/articles/weekend-factoring/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const weekendCompanies = [
  {
    rank: 1,
    name: "ラボル",
    weekend: "24時間365日対応",
    speed: "最短30分",
    fee: "一律10%",
    target: "個人・法人",
    online: "完全対応",
    detail:
      "ラボルは東証プライム上場企業・株式会社セレスの100%子会社が運営するファクタリングサービスです。最大の特徴は24時間365日・土日祝日でも最短30分で入金される点。独自の送金システムを採用しており、銀行の営業時間に関係なく即座に入金が可能です。手数料は一律10%と明確で、買取上限に制限がありません。金曜夜や週末に急な資金需要が発生した場合に、最も頼りになるサービスです。フリーランスや個人事業主を中心に利用者が急増しています。",
  },
  {
    rank: 2,
    name: "ペイトナー",
    weekend: "土日も審査対応",
    speed: "最短10分",
    fee: "一律10%",
    target: "個人・法人",
    online: "完全対応",
    detail:
      "ペイトナーは業界最速クラスの「最短10分入金」を実現するファクタリングサービスです。土日祝日でも審査を実施しており、平日と同じスピード感で審査結果が出ます。ただし、振込は銀行の営業時間に依存するため、土日に審査が完了しても実際の入金は翌営業日（月曜日）になる場合があります。ネット銀行（住信SBIネット銀行・楽天銀行など）を振込先に指定すれば、土日でも着金が確認できるケースもあります。初回は25万円まで、実績に応じて100万円まで上限が上がります。",
  },
  {
    rank: 3,
    name: "PAYTODAY",
    weekend: "平日のみ",
    speed: "最短30分",
    fee: "1%〜9.5%",
    target: "個人・法人",
    online: "完全対応",
    detail:
      "PAYTODAYはAI審査による最短30分入金と、業界最安水準の手数料（1%〜9.5%）を両立したサービスです。残念ながら土日祝日の対応はしておらず、平日のみの営業となります。ただし、日曜夜に申し込んでおけば月曜の朝一番で審査が開始されるため、週明け早々に入金を受けることが可能です。手数料の安さを重視するなら、土日に準備を整えて月曜に申し込むのが賢い方法です。",
  },
  {
    rank: 4,
    name: "ビートレーディング",
    weekend: "平日のみ",
    speed: "最短2時間",
    fee: "2%〜12%",
    target: "法人中心",
    online: "対応",
    detail:
      "ビートレーディングは累計買取額1,300億円超の大手ファクタリング会社です。営業時間は平日9:00〜18:00で、土日祝日は対応していません。ただし、法人の大口案件にも柔軟に対応できる点が強みで、専任担当者がつくため初めてのファクタリングでも安心です。週末に申し込みフォームから事前入力しておくと、月曜の営業開始とともにスムーズに手続きが進みます。",
  },
  {
    rank: 5,
    name: "QuQuMo",
    weekend: "平日のみ",
    speed: "最短2時間",
    fee: "1%〜14.8%",
    target: "個人・法人",
    online: "完全対応",
    detail:
      "QuQuMoはオンライン完結型のファクタリングサービスで、手数料1%〜14.8%の低コストが魅力です。土日祝日の対応はしていませんが、完全オンライン完結なので平日であれば全国どこからでもスピーディーに利用できます。必要書類は請求書・通帳・本人確認書類の3点のみで、電子契約に対応。債権譲渡登記も不要なため、追加コストがかかりません。",
  },
];

const weekendSuccessTips = [
  {
    title: "ラボルを第一候補にする",
    description:
      "土日祝日に確実に入金を受けたいなら、24時間365日対応のラボルが最も確実な選択肢です。独自の送金システムにより、銀行の営業時間外でも入金が可能。手数料は一律10%とやや高めですが、休日に確実に資金を手にできる安心感は他に代えがたいものがあります。",
  },
  {
    title: "ネット銀行の口座を用意する",
    description:
      "都市銀行や地方銀行の口座では、土日祝日の振込は翌営業日の反映になります。住信SBIネット銀行、楽天銀行、PayPay銀行などのネット銀行なら、土日でもリアルタイムで着金が反映されるケースがあります。ファクタリング用の口座としてネット銀行を1つ開設しておくと便利です。",
  },
  {
    title: "金曜日の午前中に申し込む",
    description:
      "土日に資金が必要な場合は、金曜日の午前中（できれば10時まで）に申し込むのが確実です。金曜の15時までに審査・契約・振込が完了すれば、当日中に入金を受けられます。銀行振込の締切時間から逆算して、余裕を持って申し込みましょう。",
  },
  {
    title: "必要書類を木曜までに準備する",
    description:
      "書類の不備があると再提出が必要になり、入金が月曜以降に延びてしまいます。木曜日までに請求書・通帳コピー・本人確認書類をデータ化しておき、金曜朝に即座に申し込める状態にしておきましょう。特に初回利用時は書類確認に時間がかかるため、事前準備が重要です。",
  },
  {
    title: "複数社に事前登録しておく",
    description:
      "休日に急な資金需要が発生することに備えて、ラボルとペイトナーの両方にアカウント登録を済ませておくのがおすすめです。初回利用時は本人確認に時間がかかりますが、事前登録しておけば2回目以降はスムーズに利用できます。",
  },
];

const bankingNotes = [
  {
    title: "都市銀行・地方銀行の場合",
    description:
      "三菱UFJ銀行、みずほ銀行、三井住友銀行などの都市銀行や、地方銀行の口座では、土日祝日に振込があっても翌営業日（通常は月曜日）まで残高に反映されません。これはモアタイムシステム（全銀ネット）に対応していても、各銀行の処理タイミングによるものです。",
  },
  {
    title: "ネット銀行の場合",
    description:
      "住信SBIネット銀行、楽天銀行、PayPay銀行、GMOあおぞらネット銀行などのネット銀行は、24時間365日リアルタイムで振込を受け取れる場合があります。ただし、振込元の銀行がモアタイムシステムに対応している必要があります。ファクタリング会社の振込元口座を確認しておくと安心です。",
  },
  {
    title: "ラボルの独自送金システム",
    description:
      "ラボルは銀行振込とは異なる独自の送金システムを採用しています。そのため、銀行の営業時間やモアタイムシステムの制約を受けず、土日祝日・深夜でも最短30分で入金が完了します。受取側の口座の種類に関係なく入金されるため、ネット銀行でなくても利用可能です。",
  },
];

const weekendCautions = [
  {
    title: "「土日対応」の意味を正確に理解する",
    description:
      "「土日対応」とうたっていても、審査対応と入金対応は別物です。土日に審査は行うが振込は翌営業日になるケースが多いため、「土日対応＝土日に入金される」とは限りません。申し込み前に、土日の入金が実際に可能かどうかを必ず確認しましょう。",
  },
  {
    title: "年末年始・GW・お盆は要注意",
    description:
      "大型連休中は通常の土日対応とは異なる場合があります。特に年末年始（12/31〜1/3）やゴールデンウィーク中は、ラボルを除く多くのファクタリング会社が休業します。大型連休前の資金需要には、早めの対応が必要です。",
  },
  {
    title: "手数料が割高になりやすい",
    description:
      "土日祝日に対応しているファクタリング会社は限られるため、競争原理が働きにくく、手数料が割高になる傾向があります。ラボルもペイトナーも手数料は一律10%で、平日に利用すれば5%以下で済むPAYTODAYやQuQuMoと比べると割高です。余裕があるなら平日まで待つことも検討しましょう。",
  },
  {
    title: "悪質業者に注意する",
    description:
      "「土日祝日OK」「24時間即対応」を過剰にアピールする業者の中には、悪質なファクタリング業者（実質的な闇金融）が紛れている場合があります。契約書の内容を確認し、手数料が30%以上であったり、償還請求権（リコース）がついている場合は利用を避けてください。信頼できる大手サービスを選びましょう。",
  },
];

const faqs = [
  {
    question: "土日祝日に即日入金してもらえるファクタリング会社はありますか？",
    answer:
      "はい、ラボルは24時間365日対応で、土日祝日でも最短30分で入金されます。独自の送金システムにより銀行の営業時間に関係なく入金が可能です。ペイトナーも土日に審査を実施しますが、振込は翌営業日になる場合があります。確実に土日に入金を受けたい場合はラボルがおすすめです。",
  },
  {
    question: "土日に振込があった場合、いつ口座に反映されますか？",
    answer:
      "都市銀行や地方銀行の場合、土日の振込は翌営業日（通常は月曜日）に反映されます。ネット銀行（住信SBIネット銀行・楽天銀行・PayPay銀行など）であれば、リアルタイムで反映されるケースがあります。ラボルの独自送金システムを利用する場合は、口座の種類に関係なく即座に反映されます。",
  },
  {
    question: "金曜の夕方に申し込んだ場合、いつ入金されますか？",
    answer:
      "ラボル以外のファクタリング会社の場合、金曜の夕方（15時以降）の申し込みは翌営業日の月曜日に対応されるケースがほとんどです。ラボルなら24時間365日対応のため、金曜の夕方や夜に申し込んでも最短30分で入金されます。週末前に急いで資金が必要な場合は、ラボルの利用を検討してください。",
  },
  {
    question: "土日対応のファクタリング会社は手数料が高いですか？",
    answer:
      "はい、やや高めの傾向があります。土日対応のラボルとペイトナーは手数料一律10%で、平日のみ対応のPAYTODAY（1%〜9.5%）やQuQuMo（1%〜14.8%）と比べると割高です。ただし、手数料10%でも緊急の資金需要に対応できるメリットは大きいため、状況に応じて使い分けるのが賢い方法です。",
  },
  {
    question: "祝日（月曜が振替休日など）でもファクタリングは利用できますか？",
    answer:
      "ラボルは祝日でも24時間対応で即日入金が可能です。ペイトナーも祝日の審査に対応していますが、振込は翌営業日になる可能性があります。その他のファクタリング会社（PAYTODAY・ビートレーディング・QuQuMoなど）は祝日は休業のため、翌営業日の対応となります。祝日に入金が必要な場合は、前営業日までに手続きを済ませるか、ラボルを利用しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "土日祝日対応のファクタリング会社5選｜休日でも即日入金",
  description:
    "土日祝日に即日入金できるファクタリング会社5社を比較。休日に資金調達を成功させるコツも解説。",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
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
      "https://factoring-partner.pages.dev/articles/weekend-factoring/",
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
      name: "土日祝日対応のファクタリング",
      item: "https://factoring-partner.pages.dev/articles/weekend-factoring/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function WeekendFactoringPage() {
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
          { label: "土日祝日対応のファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-white">
            土日祝日対応
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            土日祝日対応のファクタリング会社5選
            <br className="hidden md:block" />
            休日でも即日入金
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            「週末にどうしても資金が必要」「祝日で銀行が閉まっている」そんな時でも即日入金に対応できるファクタリング会社を厳選紹介。土日に入金を成功させるコツや注意点も徹底解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#why-weekend" className="hover:underline">
                1. 土日祝日にファクタリングが必要になる場面
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                2. 土日祝日対応のファクタリング会社5選
              </a>
            </li>
            <li>
              <a href="#comparison-table" className="hover:underline">
                3. 土日対応ファクタリング比較表
              </a>
            </li>
            <li>
              <a href="#success-tips" className="hover:underline">
                4. 土日に即日入金を成功させるコツ
              </a>
            </li>
            <li>
              <a href="#banking" className="hover:underline">
                5. 銀行振込と土日の関係
              </a>
            </li>
            <li>
              <a href="#cautions" className="hover:underline">
                6. 土日ファクタリングの注意点
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── なぜ土日に必要か ─── */}
        <section id="why-weekend" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            土日祝日にファクタリングが必要になる場面
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ビジネスの資金需要は平日だけに発生するわけではありません。特にフリーランスや中小企業では、週末に急な支払いが発生するケースが少なくありません。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            一般的なファクタリング会社は平日のみの営業ですが、近年はオンライン完結型のサービスが増え、土日祝日でも対応できる会社が登場しています。ここでは、土日にファクタリングが必要になる代表的なシーンを紹介します。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">土日に資金が必要になる典型的なケース</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>月末が土日に重なり、月曜の支払いに間に合わない</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>金曜の夕方に取引先から入金遅延の連絡があった</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>週末のイベント出展や仕入れで急な現金が必要</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>クレジットカードの引き落とし日が月曜日で残高不足</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>従業員への給与支払い日が休日明けに迫っている</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>設備故障など予期せぬトラブルで緊急出費が発生した</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 土日対応の会社5選 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            土日祝日対応のファクタリング会社5選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            土日祝日の対応状況をもとに、おすすめのファクタリング会社5社を紹介します。完全対応のラボルを筆頭に、各社の土日対応の実態と特徴を詳しく解説します。
          </p>
          <div className="space-y-8">
            {weekendCompanies.map((company) => (
              <div
                key={company.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white ${company.rank <= 2 ? "bg-accent" : "bg-primary"}`}>
                    {company.rank}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{company.name}</h3>
                    <p className="text-sm font-bold text-accent">{company.weekend}</p>
                  </div>
                </div>
                <div className="mb-4 grid gap-2 text-sm md:grid-cols-4">
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">入金速度</p>
                    <p className="font-semibold text-primary">{company.speed}</p>
                  </div>
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">手数料</p>
                    <p className="font-semibold text-primary">{company.fee}</p>
                  </div>
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">対象</p>
                    <p className="font-semibold text-primary">{company.target}</p>
                  </div>
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">オンライン</p>
                    <p className="font-semibold text-primary">{company.online}</p>
                  </div>
                </div>
                <p className="leading-relaxed text-text-light">{company.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison-table" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            土日対応ファクタリング比較表
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            5社の土日対応状況・入金速度・手数料を一覧で比較します。スマートフォンの方は横スクロールでご覧ください。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold">会社名</th>
                  <th className="px-3 py-3 font-semibold">土日対応</th>
                  <th className="px-3 py-3 font-semibold">入金速度</th>
                  <th className="px-3 py-3 font-semibold">手数料</th>
                  <th className="px-3 py-3 font-semibold">対象</th>
                </tr>
              </thead>
              <tbody>
                {weekendCompanies.map((company, idx) => (
                  <tr
                    key={company.name}
                    className={idx % 2 === 0 ? "bg-white" : "bg-hover-bg"}
                  >
                    <td className="px-3 py-3 font-medium text-text-main">
                      {company.name}
                    </td>
                    <td className="px-3 py-3 text-text-light">{company.weekend}</td>
                    <td className="px-3 py-3 font-semibold text-accent">
                      {company.speed}
                    </td>
                    <td className="px-3 py-3 text-text-light">{company.fee}</td>
                    <td className="px-3 py-3 text-text-light">{company.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg border border-accent/30 bg-orange-50 p-4">
            <p className="text-sm leading-relaxed text-text-light">
              <span className="font-bold text-accent">ポイント：</span>
              土日祝日に実際に入金まで完了できるのはラボルのみです。ペイトナーは土日に審査が進みますが、入金は翌営業日になる場合があります。その他の3社は平日のみの対応ですが、手数料の安さや大口対応など別のメリットがあります。
            </p>
          </div>
        </section>

        {/* ── 土日に即日入金を成功させるコツ ─── */}
        <section id="success-tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            土日に即日入金を成功させる5つのコツ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            土日祝日でも確実に資金を手にするために、以下の5つのコツを押さえておきましょう。事前準備が成功のカギです。
          </p>
          <div className="space-y-6">
            {weekendSuccessTips.map((tip, idx) => (
              <div
                key={tip.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {idx + 1}. {tip.title}
                </h3>
                <p className="leading-relaxed text-text-light">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 銀行振込と土日の関係 ─── */}
        <section id="banking" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            銀行振込と土日の関係｜ネット銀行なら着金可能？
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            土日のファクタリングで見落としがちなのが、銀行振込の制約です。ファクタリング会社が土日に対応していても、振込先の銀行によっては着金が翌営業日になる場合があります。銀行の種類ごとの違いを理解しておきましょう。
          </p>
          <div className="space-y-6">
            {bankingNotes.map((note) => (
              <div
                key={note.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-primary">{note.title}</h3>
                <p className="leading-relaxed text-text-light">{note.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">モアタイムシステムとは？</p>
            <p className="text-sm leading-relaxed text-text-light">
              モアタイムシステムとは、2018年に稼働した全銀ネットの新システムで、従来は平日15時までだった銀行間送金を24時間365日可能にするものです。対応銀行同士であれば、土日祝日でもリアルタイムで送金・着金ができます。ただし、すべての銀行が対応しているわけではなく、対応していても処理が遅れるケースがあるため、確実な着金にはネット銀行の利用が推奨されます。
            </p>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="cautions" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            土日ファクタリングの注意点
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            土日祝日にファクタリングを利用する際は、以下の注意点を把握しておきましょう。知らずに利用すると「入金されると思ったのに月曜まで待たされた」といったトラブルになりかねません。
          </p>
          <div className="space-y-6">
            {weekendCautions.map((caution, idx) => (
              <div
                key={caution.title}
                className="rounded-lg border border-accent/30 bg-orange-50 p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-accent">
                  {idx + 1}. {caution.title}
                </h3>
                <p className="leading-relaxed text-text-light">{caution.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめパターン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            状況別おすすめパターン
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            土日に資金が必要な状況に応じて、最適なファクタリングの利用方法を紹介します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">土曜・日曜に確実に入金が必要な場合</h3>
              <p className="leading-relaxed text-text-light">
                ラボル一択です。24時間365日対応で、独自送金システムにより土日でも最短30分で入金されます。手数料は一律10%ですが、休日に確実に資金を手にできる唯一のサービスです。事前にアカウント登録を済ませておくと、申し込みから入金まで30分程度で完了します。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">月曜の朝一番に入金があればOKな場合</h3>
              <p className="leading-relaxed text-text-light">
                ペイトナーで土曜・日曜に申し込み・審査を完了させておき、月曜の朝に入金を受けるパターンが効率的です。最短10分で審査が完了するため、月曜の始業前に入金が反映されます。手数料は一律10%で、初回25万円・最大100万円まで対応。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">手数料を抑えたい場合</h3>
              <p className="leading-relaxed text-text-light">
                急ぎでなければ、金曜の午前中にPAYTODAY（手数料1%〜9.5%）やQuQuMo（手数料1%〜14.8%）に申し込むのがベストです。平日対応のため土日は利用できませんが、手数料が大幅に安くなります。100万円のファクタリングなら、10%と5%の差額は5万円にもなります。
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
              href="/articles/instant-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">即日ファクタリング10選</p>
              <p className="mt-1 text-sm text-text-light">
                最短10分〜当日入金のおすすめ会社を紹介
              </p>
            </Link>
            <Link
              href="/articles/online-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">オンライン完結ファクタリング8選</p>
              <p className="mt-1 text-sm text-text-light">
                来店不要で即日資金化できるサービスを紹介
              </p>
            </Link>
            <Link
              href="/articles/for-freelance/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">フリーランス向けファクタリング5選</p>
              <p className="mt-1 text-sm text-text-light">
                請求書を即日現金化する方法を解説
              </p>
            </Link>
            <Link
              href="/articles/required-documents/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングの必要書類一覧</p>
              <p className="mt-1 text-sm text-text-light">
                請求書のみでOKな会社も紹介
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            土日対応のファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            休日でも即日入金に対応したファクタリング会社を徹底比較。あなたの状況に最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
