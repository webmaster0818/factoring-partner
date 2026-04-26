import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "JTCの口コミ・評判｜法人向け大口ファクタリングを検証",
  description:
    "JTCの口コミ・評判を徹底調査。法人特化・100万円〜の大口対応、最短即日入金、2社間・3社間対応のファクタリングサービスを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/jtc/",
  },
  openGraph: {
    title:
      "JTCの口コミ・評判｜法人向け大口ファクタリングを検証",
    description:
      "JTCの口コミ・評判を徹底調査。法人特化の大口ファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/jtc/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "非公開（要見積もり）" },
  { label: "入金スピード", value: "最短即日" },
  { label: "買取可能額", value: "100万円〜" },
  { label: "対象", value: "法人のみ" },
  { label: "契約方式", value: "2社間・3社間" },
  { label: "オンライン対応", value: "○（一部オンライン可）" },
  { label: "対応エリア", value: "全国（名古屋・東京・大阪に拠点）" },
  { label: "運営会社", value: "株式会社JTC" },
];

const goodReviews = [
  {
    title: "大口案件でも柔軟に対応してくれる",
    detail:
      "「数千万円規模の売掛債権でもスムーズに対応してもらえた」「他社で断られた大口案件をJTCが引き受けてくれた」という声があります。法人特化ならではの大口対応力が高く評価されています。",
  },
  {
    title: "対面での丁寧なヒアリングが安心",
    detail:
      "「名古屋本社に訪問して直接相談できた」「担当者が事業内容を丁寧にヒアリングしてくれて信頼できた」という口コミが見られます。対面での相談体制が信頼感につながっています。",
  },
  {
    title: "2社間・3社間の両方に対応している",
    detail:
      "「3社間ファクタリングで手数料を抑えられた」「取引先に知られたくない案件は2社間で対応してもらえた」という声があります。状況に応じて契約方式を選べる柔軟性が支持されています。",
  },
  {
    title: "土日祝日でも相談を受け付けてくれる",
    detail:
      "「週末に急ぎの資金需要が発生したが、電話で相談に乗ってもらえた」「土曜日に対応してもらい、月曜日には入金された」という口コミがあります。柔軟な対応姿勢が評価されています。",
  },
];

const badReviews = [
  {
    title: "手数料が事前にわかりにくい",
    detail:
      "「手数料率がホームページに記載されていないため見積もりを取るまでわからない」「他社と比較しづらい」という声があります。手数料が非公開のため、事前に費用感が把握しにくい点が指摘されています。",
  },
  {
    title: "個人事業主は利用できない",
    detail:
      "「個人事業主として問い合わせたが対象外と言われた」という口コミがあります。JTCは法人専門のファクタリングサービスのため、フリーランスや個人事業主は利用できません。",
  },
  {
    title: "100万円未満の小口案件は対象外",
    detail:
      "「少額の売掛金で利用したかったが最低100万円からと言われた」という声があります。小規模な案件には対応していないため、少額利用を希望する場合は他社を検討する必要があります。",
  },
];

const merits = [
  {
    title: "法人特化の大口対応",
    description:
      "JTCは法人向けに特化しており、100万円以上の大口案件に強みを持っています。数千万円〜数億円規模の売掛債権にも対応可能で、大手企業や中堅企業の資金調達ニーズに応えています。法人専門だからこそのノウハウと審査体制が整っています。",
  },
  {
    title: "2社間・3社間の両方に対応",
    description:
      "JTCは2社間ファクタリングと3社間ファクタリングの両方に対応しています。取引先に知られたくない場合は2社間、手数料を抑えたい場合は3社間と、ニーズに応じて最適な契約方式を選択できます。",
  },
  {
    title: "最短即日の入金スピード",
    description:
      "急ぎの資金需要にも対応できるよう、最短即日での入金に対応しています。事前準備が整っていれば、午前中の申込で当日中の入金も可能です。大口案件でもスピーディーな対応を実現しています。",
  },
  {
    title: "全国3拠点で対面相談可能",
    description:
      "名古屋本社を中心に、東京・大阪にも拠点を構えており、対面での相談が可能です。オンラインだけでは不安な方や、大口案件で直接説明を受けたい方にとって、対面相談ができる体制は大きな安心材料です。",
  },
];

const demerits = [
  {
    title: "手数料率が非公開",
    description:
      "公式サイトに具体的な手数料率が記載されておらず、見積もりを取らないと費用感がわかりません。複数社を比較したい場合に手間がかかる点は、利用者にとってデメリットといえます。ただし、案件ごとに最適な手数料を提示するためという理由もあります。",
  },
  {
    title: "個人事業主は利用不可",
    description:
      "JTCは法人専門のファクタリングサービスです。個人事業主やフリーランスの方は利用対象外となるため、ペイトナーやラボルなど個人事業主向けのサービスを検討する必要があります。",
  },
  {
    title: "最低買取額が100万円から",
    description:
      "買取可能額の下限が100万円のため、少額の売掛債権しかない場合は利用できません。100万円未満の売掛金をファクタリングしたい場合は、ペイトナー（1万円〜）やラボル（1万円〜）などを検討しましょう。",
  },
];

const steps = [
  { step: "1", title: "お問い合わせ・相談", description: "電話またはWebフォームから問い合わせ。希望額や売掛先の情報を伝えます。" },
  { step: "2", title: "必要書類の提出", description: "請求書・通帳のコピー・決算書・登記簿謄本等を提出します。" },
  { step: "3", title: "審査・見積もり", description: "売掛先の信用調査を含む審査を実施。手数料・買取条件が提示されます。" },
  { step: "4", title: "契約・入金", description: "条件に合意後、契約を締結。最短即日で指定口座に入金されます。" },
];

const faqs = [
  {
    question: "JTCの手数料はいくらですか？",
    answer:
      "JTCの手数料率は公式サイトに記載されておらず、案件ごとの個別見積もりとなります。売掛先の信用力、売掛金の金額、支払いサイト、契約方式（2社間・3社間）などにより異なります。3社間ファクタリングの方が手数料は低くなる傾向があります。",
  },
  {
    question: "JTCは個人事業主でも利用できますか？",
    answer:
      "いいえ、JTCは法人専門のファクタリングサービスです。個人事業主やフリーランスの方は利用できません。個人事業主の方はペイトナー、ラボル、フリーナンスなどのサービスをご検討ください。",
  },
  {
    question: "JTCの最低買取額はいくらですか？",
    answer:
      "JTCの最低買取額は100万円です。100万円未満の少額の売掛債権は対応外となります。少額ファクタリングを希望する場合は、ペイトナー（1万円〜）やラボル（1万円〜）など少額対応のサービスをご利用ください。",
  },
  {
    question: "JTCの審査に必要な書類は何ですか？",
    answer:
      "主な必要書類は、請求書（売掛金の証拠書類）、通帳のコピー（直近数ヶ月分）、決算書、登記簿謄本、代表者の本人確認書類です。案件の規模や内容により追加書類を求められる場合があります。",
  },
  {
    question: "JTCで3社間ファクタリングを利用するメリットは？",
    answer:
      "3社間ファクタリングは、売掛先（取引先）に債権譲渡の通知を行うため、2社間に比べて手数料が低くなる傾向があります。取引先の理解が得られる場合は、3社間を選択することでコストを大幅に抑えられる可能性があります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "JTCの口コミ・評判｜法人向け大口ファクタリングを検証",
  description:
    "JTCの口コミ・評判を徹底調査。法人特化の大口ファクタリングを検証。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
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
    "@id": "https://factoring-partner.pages.dev/reviews/jtc/",
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
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "業者レビュー", item: "https://factoring-partner.pages.dev/reviews/" },
    { "@type": "ListItem", position: 3, name: "JTC" },
  ],
};

const comparisonData = [
  { name: "JTC", fee: "非公開", speed: "最短即日", amount: "100万円〜", online: "○" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "QuQuMo", fee: "1%〜14.8%", speed: "最短2時間", amount: "制限なし", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function JtcReviewPage() {
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
          { label: "JTC" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            JTCの口コミ・評判
            <br className="hidden md:block" />
            法人向け大口ファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            法人特化・100万円以上の大口対応、最短即日入金、2社間・3社間対応のファクタリング「JTC」の口コミ・評判を徹底調査します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. JTCの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. JTCのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. JTCのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            JTCの基本情報
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
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            JTCの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            JTCは、株式会社JTCが運営する法人向けファクタリングサービスです。名古屋を本拠地とし、東京・大阪にも拠点を構えることで、全国の法人顧客に対応しています。法人専門に特化することで、大口案件への対応力と審査の専門性を高めています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            最大の特徴は、100万円以上の大口案件に特化した法人専門のファクタリングサービスである点です。2社間・3社間ファクタリングの両方に対応しており、取引先との関係性や手数料の希望に応じて最適な契約方式を提案してくれます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            対面での丁寧なヒアリングを重視しており、事業内容や資金需要の背景を理解した上で、最適なプランを提示する姿勢が特徴です。大口案件の取り扱いにおいて豊富な経験を持つスタッフが対応するため、初めてファクタリングを利用する法人にとっても安心感があります。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">JTCの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>法人特化の大口ファクタリング（100万円〜）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>2社間・3社間ファクタリングの両方に対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>名古屋・東京・大阪の3拠点で対面相談可能</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 口コミ傾向調査 ─── */}
        <section id="reviews" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            口コミ傾向調査結果
          </h2>

          <div className="mb-8 rounded-lg border border-border bg-section-bg p-4 text-xs text-text-light leading-relaxed">
            ※掲載している口コミは、Google口コミ・みん評・ヒカカク・ファクログ等の投稿を参考に要約・再構成したものです。出典元の原文とは異なります。サービス内容は調査時点のものであり、変更される場合があります。
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/factor/jtc" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://minhyo.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">みん評</a></p>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-sm">&#9675;</span>
              良い口コミの傾向
            </h3>
            <div className="space-y-4">
              {goodReviews.map((review, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <p className="mb-2 font-semibold text-secondary">{review.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{review.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-sm">&#9651;</span>
              悪い口コミの傾向
            </h3>
            <div className="space-y-4">
              {badReviews.map((review, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <p className="mb-2 font-semibold text-accent">{review.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{review.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            JTCのメリット4つ
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
            JTCのデメリット3つ
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
            JTCの利用の流れ
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

        {/* ── 利用シーン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            JTCが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">大型プロジェクトの資金繰りに</p>
              <p className="text-sm leading-relaxed text-text-light">
                建設業やIT業など、大型プロジェクトの完了から入金までのタイムラグが大きい業種では、数千万円規模の資金需要が生じます。JTCの大口対応力は、こうした場面で大きな力を発揮します。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">取引先との関係を維持したまま資金調達</p>
              <p className="text-sm leading-relaxed text-text-light">
                2社間ファクタリングを利用すれば、取引先に知られることなく資金調達が可能です。取引先との信頼関係を損ないたくない場合に、JTCの2社間ファクタリングが有効です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料を最小限に抑えたい法人の場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                取引先の理解が得られるなら、3社間ファクタリングを選択することで手数料を大幅に抑えられます。JTCでは両方の方式に対応しているため、状況に応じた最適な提案を受けることができます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">担当者と直接相談して進めたい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                名古屋・東京・大阪の3拠点で対面相談が可能です。大口の資金調達は金額が大きいだけに、担当者と直接話して信頼関係を築いてから進めたいという法人経営者のニーズに応えます。
              </p>
            </div>
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
                  <span>100万円以上の大口ファクタリングを希望する法人の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>2社間・3社間を状況に応じて使い分けたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>対面で直接相談して進めたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>名古屋・東海エリアで対面利用したい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>個人事業主・フリーランスの方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>100万円未満の少額ファクタリングを希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料率を事前に確認してから申し込みたい方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 他社比較 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            他社との比較表
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">サービス名</th>
                  <th className="px-4 py-3 text-left font-semibold">手数料</th>
                  <th className="px-4 py-3 text-left font-semibold">入金速度</th>
                  <th className="px-4 py-3 text-left font-semibold">買取額</th>
                  <th className="px-4 py-3 text-center font-semibold">オンライン</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-section-bg" : "bg-white"} ${i === 0 ? "font-semibold text-primary" : ""}`}>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.fee}</td>
                    <td className="px-4 py-3">{item.speed}</td>
                    <td className="px-4 py-3">{item.amount}</td>
                    <td className="px-4 py-3 text-center">{item.online}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 法人向け大口ファクタリングの選び方 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            法人向け大口ファクタリングの選び方
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            法人が大口のファクタリングを利用する際には、いくつかの重要なポイントを押さえておく必要があります。JTCのような法人特化サービスを検討する際の判断基準を解説します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">対応可能な金額の上限を確認する</p>
              <p className="text-sm leading-relaxed text-text-light">
                大口案件では、ファクタリング会社の資金力が重要です。数千万円〜数億円規模の案件に対応できるかどうか、事前に確認しましょう。JTCは法人特化で大口案件の実績がありますが、具体的な上限は案件ごとに異なります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">契約方式の選択肢を確認する</p>
              <p className="text-sm leading-relaxed text-text-light">
                2社間と3社間の両方に対応しているサービスであれば、状況に応じた柔軟な選択が可能です。取引先との関係性や手数料コストのバランスを考慮して、最適な契約方式を選びましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">担当者の専門性と対応品質</p>
              <p className="text-sm leading-relaxed text-text-light">
                大口案件は金額が大きいため、担当者の経験と専門知識が重要です。対面での相談が可能なサービスであれば、担当者の知識レベルや提案力を直接確認できます。JTCは3拠点で対面相談に対応しています。
              </p>
            </div>
          </div>
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

        {/* ── JTCの対応エリアと拠点情報 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            JTCの対応エリアと拠点情報
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            JTCは名古屋に本社を構え、東京・大阪にも拠点を持つことで、全国の法人顧客に対応しています。各拠点では対面での相談が可能で、大口案件を直接相談できる体制が整っています。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">名古屋本社</p>
              <p className="text-sm leading-relaxed text-text-light">
                JTCの本社は名古屋に所在しています。東海エリアの法人にとっては最もアクセスしやすい拠点です。中部地方の企業は対面でのスムーズな相談が可能です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">東京・大阪オフィス</p>
              <p className="text-sm leading-relaxed text-text-light">
                首都圏と関西圏にもオフィスを構えており、名古屋以外の法人顧客にも対面で対応可能です。大口案件の場合、担当者が出張対応してくれるケースもあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">オンライン対応も可能</p>
              <p className="text-sm leading-relaxed text-text-light">
                拠点から遠方の法人に対しては、オンラインでの相談・契約にも対応しています。ただし、初回利用時や大口案件では対面での面談を推奨されるケースもあります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            JTCの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            JTCは、法人向けの大口ファクタリングに特化したサービスとして、大口案件への対応力、2社間・3社間の柔軟な契約方式、全国3拠点での対面相談を強みとしています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特に100万円以上の大口売掛債権を迅速に資金化したい法人にとっては、頼りになるパートナーです。担当者との対面ヒアリングを重視する姿勢も、大口案件を任せる際の安心感につながっています。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、手数料が非公開であること、個人事業主は利用できないこと、最低100万円からという条件は理解しておく必要があります。法人で大口のファクタリングを検討している場合は、まず見積もりを取って他社と比較検討することをおすすめします。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            JTCの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            法人特化・100万円〜の大口対応。最短即日入金のファクタリング。
          </p>
          <a
            href="https://www.jtc-biz.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料見積もり
          </a>
        </section>

        {/* ── 利用前の準備 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            JTCを利用する前の準備
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            JTCをスムーズに利用するために、事前に準備しておくべき書類と情報を整理しました。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-semibold text-text-main">事前に用意するもの</p>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">1</span>
                <span>請求書（売掛先に発行済みのもの）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">2</span>
                <span>通帳のコピー（直近数ヶ月分の取引履歴がわかるもの）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">3</span>
                <span>決算書（直近2期分）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">4</span>
                <span>登記簿謄本（法人の場合）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">5</span>
                <span>代表者の本人確認書類</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            大口案件の場合、追加書類を求められるケースがあります。事前に電話で確認しておくと手続きがスムーズです。また、売掛先の情報（企業名・取引内容・支払いサイト）も整理しておくと、見積もりが迅速に進みます。
          </p>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/betrading/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">累計9.1万社の大手ファクタリング会社を検証</p>
            </Link>
            <Link
              href="/reviews/olta/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTAの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料2〜9%のクラウドファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/bestfactor/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ベストファクターの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">買取額30万〜1億円のファクタリングを検証</p>
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
      </div>
    </>
  );
}
