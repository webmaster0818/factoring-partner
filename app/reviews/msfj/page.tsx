import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "MSFJの口コミ・評判｜手数料の安さと柔軟審査を検証",
  description:
    "MSFJの口コミ・評判を徹底調査。手数料1.8%〜の低コストファクタリング「MSFJ」の審査・入金スピード・メリット・デメリットを利用者の声で検証します。法人・個人事業主対応。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/reviews/msfj/",
  },
  openGraph: {
    title:
      "MSFJの口コミ・評判｜手数料の安さと柔軟審査を検証",
    description:
      "手数料1.8%〜のMSFJの口コミ・評判を徹底調査。低コストと柔軟審査の実力を検証。",
    url: "https://factoring-partner.pages.dev/reviews/msfj/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "MSFJ" },
  { label: "手数料", value: "1.8%〜9.8%" },
  { label: "入金スピード", value: "最短即日" },
  { label: "買取可能額", value: "10万円〜5,000万円" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "契約方式", value: "2社間・3社間" },
  { label: "オンライン対応", value: "○（オンライン手続き可）" },
  { label: "プラン", value: "クイックファクタリング / プレミアムファクタリング" },
  { label: "運営会社", value: "MSFJ株式会社" },
];

const goodReviews = [
  {
    title: "手数料が安い",
    detail:
      "「他社と比較して手数料が安かった」「1.8%からという手数料に惹かれて申し込んだ」という声が複数見られます。特にプレミアムファクタリングプランでは、手数料1.8%〜6.8%と業界でも低水準の設定が評価されています。",
  },
  {
    title: "審査が柔軟",
    detail:
      "「赤字決算だったが審査に通った」「他社で断られたが、MSFJでは対応してもらえた」という口コミが見られます。売掛先の信用力を重視する審査基準で、利用者の財務状況が厳しくても柔軟に対応する姿勢が評価されています。",
  },
  {
    title: "対応が迅速で丁寧",
    detail:
      "「問い合わせからの返答が早い」「担当者が親切に対応してくれた」「初めてのファクタリングでも安心して利用できた」という声があり、サポート体制の充実が伺えます。",
  },
  {
    title: "少額からでも対応してくれる",
    detail:
      "「10万円という少額でも対応してくれた」「個人事業主で小さな案件だったが問題なく利用できた」という口コミがあり、少額案件にも積極的に対応している姿勢が評価されています。",
  },
];

const badReviews = [
  {
    title: "買取上限が5,000万円",
    detail:
      "「大口案件では5,000万円の上限がネックになった」という声があります。5,000万円を超える売掛金のファクタリングが必要な場合は、ビートレーディングなどの金額無制限のサービスを検討する必要があります。",
  },
  {
    title: "プランの選択が分かりにくい",
    detail:
      "「クイックとプレミアムの違いが最初わかりにくかった」「どちらのプランが自分に合うか判断に迷った」という声があります。プラン選択は担当者に相談することで適切な提案を受けられます。",
  },
  {
    title: "知名度がやや低い",
    detail:
      "「ビートレーディングやOLTAと比較すると知名度が低く、口コミ情報が少ない」という意見があります。大手と比較すると情報量が限られるため、判断材料を集めにくい面があります。",
  },
];

const plans = [
  {
    name: "クイックファクタリング",
    fee: "3.8%〜9.8%",
    amount: "10万〜300万円",
    speed: "最短即日",
    description: "少額・即日対応を重視するプラン。手数料はやや高めですが、スピード重視の方に最適です。",
  },
  {
    name: "プレミアムファクタリング",
    fee: "1.8%〜6.8%",
    amount: "30万〜5,000万円",
    speed: "最短翌日",
    description: "手数料の安さを重視するプラン。審査にやや時間がかかりますが、コストを抑えたい方に最適です。",
  },
];

const merits = [
  {
    title: "業界最安水準の手数料1.8%〜",
    description:
      "MSFJのプレミアムファクタリングプランは手数料1.8%〜6.8%と、業界でもトップクラスの低水準です。手数料を重視する事業者にとって大きなメリットであり、大口案件では数十万円〜数百万円のコスト差が生まれます。クイックプランでも3.8%〜9.8%と、2社間ファクタリングとしては競争力のある設定です。",
  },
  {
    title: "2つのプランで柔軟に対応",
    description:
      "MSFJはクイックファクタリング（少額・即日対応）とプレミアムファクタリング（大口・低手数料）の2つのプランを提供しています。利用者のニーズに合わせてプランを選べるため、急ぎの場合はクイック、コスト重視ならプレミアムと使い分けが可能です。",
  },
  {
    title: "10万円からの少額対応",
    description:
      "クイックファクタリングプランは10万円から利用可能で、少額の売掛金にも対応しています。個人事業主やフリーランスの小規模な案件でも利用でき、資金調達のハードルが低い点が特徴です。",
  },
  {
    title: "柔軟な審査基準",
    description:
      "MSFJの審査は売掛先の信用力を重視するため、利用者の財務状況が厳しくても審査に通る可能性があります。赤字決算、税金滞納、銀行融資を断られた方でも利用できたという口コミが見られ、審査の柔軟性が評価されています。",
  },
];

const demerits = [
  {
    title: "買取上限が5,000万円",
    description:
      "MSFJの買取上限は5,000万円です。大型案件で5,000万円を超える売掛金のファクタリングが必要な場合は、ビートレーディングやPMGなどの金額制限のないサービスを検討する必要があります。ただし、多くの中小企業にとっては5,000万円の上限で十分対応できる範囲です。",
  },
  {
    title: "プレミアムプランは即日入金が難しい",
    description:
      "手数料が安いプレミアムファクタリングプランは、審査にやや時間がかかるため即日入金が難しい場合があります。急ぎの場合はクイックプランを選ぶ必要があり、その場合は手数料が3.8%〜9.8%と高くなります。スピードとコストのトレードオフがある点に注意が必要です。",
  },
  {
    title: "大手と比較すると知名度が低い",
    description:
      "ビートレーディングやOLTAなどの大手と比較すると、MSFJの知名度はやや低めです。口コミ情報も大手ほど豊富ではないため、利用を検討する際は公式サイトの情報や直接の問い合わせで判断材料を集める必要があります。",
  },
];

const steps = [
  { step: "1", title: "無料相談・申込", description: "電話またはWebフォームから申込。プラン選択のアドバイスも受けられます。" },
  { step: "2", title: "必要書類の提出", description: "請求書・通帳コピー・本人確認書類・決算書等をオンラインで提出。" },
  { step: "3", title: "審査", description: "売掛先の信用調査を実施。クイックは即日、プレミアムは翌日以降に結果通知。" },
  { step: "4", title: "契約・入金", description: "審査通過後、契約を締結。クイックは最短即日、プレミアムは最短翌日で入金。" },
];

const faqs = [
  {
    question: "MSFJの手数料は本当に1.8%から利用できますか？",
    answer:
      "はい、プレミアムファクタリングプランの手数料は1.8%〜6.8%です。ただし、1.8%が適用されるのは売掛先の信用力が高く、金額が大きい案件に限られます。多くの場合、実際の手数料は3%〜6%程度になることが多いです。正確な手数料は見積もりを取って確認してください。",
  },
  {
    question: "クイックプランとプレミアムプランはどちらを選べばいいですか？",
    answer:
      "急ぎの場合や300万円以下の少額案件はクイックプラン（手数料3.8%〜9.8%、最短即日）、手数料を抑えたい場合や300万円以上の案件はプレミアムプラン（手数料1.8%〜6.8%、最短翌日）がおすすめです。迷った場合は担当者に相談すると、案件に応じた最適なプランを提案してもらえます。",
  },
  {
    question: "MSFJは個人事業主でも利用できますか？",
    answer:
      "はい、MSFJは法人だけでなく個人事業主でも利用可能です。クイックプランは10万円から対応しているため、少額の売掛金を持つ個人事業主やフリーランスでも利用しやすい設計になっています。",
  },
  {
    question: "赤字決算でもMSFJの審査に通りますか？",
    answer:
      "ファクタリングの審査は利用者ではなく売掛先の信用力が重視されるため、赤字決算でも審査に通る可能性はあります。口コミでも「赤字決算だったが審査に通った」という声が見られます。ただし、売掛先の信用力が低い場合は審査に通らないこともあるため、まずは無料相談で確認することをおすすめします。",
  },
  {
    question: "MSFJの入金は即日可能ですか？",
    answer:
      "クイックファクタリングプランであれば最短即日入金に対応しています。ただし、書類の不備や審査状況によっては翌営業日以降になる場合もあります。プレミアムプランは手数料が安い分、即日入金は基本的にできません。急ぎの場合はクイックプランを選択してください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MSFJの口コミ・評判｜手数料の安さと柔軟審査を検証",
  description:
    "手数料1.8%〜のMSFJの口コミ・評判を徹底調査。低コストと柔軟審査の実力を検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/msfj/",
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
      name: "業者レビュー",
      item: "https://factoring-partner.pages.dev/reviews/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "MSFJ",
    },
  ],
};

const comparisonData = [
  { name: "MSFJ（クイック）", fee: "3.8%〜9.8%", speed: "最短即日", amount: "10万〜300万円", online: "○" },
  { name: "MSFJ（プレミアム）", fee: "1.8%〜6.8%", speed: "最短翌日", amount: "30万〜5,000万円", online: "○" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "QuQuMo", fee: "1%〜14.8%", speed: "最短2時間", amount: "制限なし", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function MsfjReviewPage() {
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
          { label: "MSFJ" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            MSFJの口コミ・評判
            <br className="hidden md:block" />
            手数料の安さと柔軟審査を検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            手数料1.8%〜の低コストファクタリング「MSFJ」の口コミ・評判を徹底調査。クイック・プレミアムの2プラン制、審査の柔軟性、入金スピードを利用者の声で検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. MSFJの基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. MSFJの会社概要と特徴</a></li>
            <li><a href="#plans" className="hover:underline">3. 2つのプラン比較</a></li>
            <li><a href="#reviews" className="hover:underline">4. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">5. MSFJのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">6. MSFJのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">7. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">8. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">9. 他社との比較表</a></li>
            <li><a href="#summary" className="hover:underline">10. 総合評価</a></li>
            <li><a href="#faq" className="hover:underline">11. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            MSFJの基本情報
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
            MSFJの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            MSFJは、MSFJ株式会社が運営するファクタリングサービスです。手数料1.8%〜という業界最安水準の料金設定と、2つのプランによる柔軟なサービス提供が特徴です。法人・個人事業主の両方に対応しており、10万円の少額案件から5,000万円の大口案件まで幅広くカバーしています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            MSFJの最大の特徴は、「クイックファクタリング」と「プレミアムファクタリング」の2つのプランを提供している点です。スピード重視のクイックプランと、手数料の安さ重視のプレミアムプランを、利用者のニーズに合わせて選択できます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            2社間・3社間の両方に対応しており、取引先に知られずに利用したい場合は2社間、手数料を最小限に抑えたい場合は3社間と、状況に応じた使い分けが可能です。審査は売掛先の信用力を重視するため、利用者の財務状況が厳しい場合でも柔軟に対応しています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">MSFJの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料1.8%〜の業界最安水準（プレミアムプラン）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>スピード or コスト重視の2プラン制</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>10万円〜5,000万円の幅広い買取額</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── プラン比較 ─── */}
        <section id="plans" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            2つのプラン比較
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            MSFJは「クイックファクタリング」と「プレミアムファクタリング」の2つのプランを提供しています。それぞれの特徴を比較します。
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {plans.map((plan, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-4 text-lg font-bold text-primary">{plan.name}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-semibold text-text-main">手数料</span>
                    <span className="text-text-light">{plan.fee}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-semibold text-text-main">買取額</span>
                    <span className="text-text-light">{plan.amount}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-semibold text-text-main">入金速度</span>
                    <span className="text-text-light">{plan.speed}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-light">{plan.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg bg-primary-light p-4">
            <p className="text-sm leading-relaxed text-text-light">
              <strong className="text-primary">選び方のポイント：</strong>急ぎなら「クイック」、コスト重視なら「プレミアム」。300万円以下の少額案件はクイック、300万円以上はプレミアムを検討しましょう。
            </p>
          </div>
        </section>

        {/* ── 口コミ傾向調査 ─── */}
        <section id="reviews" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            口コミ傾向調査結果
          </h2>

          {/* Disclaimer */}
          <div className="mb-8 rounded-lg border border-border bg-section-bg p-4 text-xs text-text-light leading-relaxed">
            ※掲載している口コミは、Google口コミ・みん評・ヒカカク・ファクログ等の投稿を参考に要約・再構成したものです。出典元の原文とは異なります。
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/factor/msfj" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://minhyo.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">みん評</a></p>
          </div>

          {/* Good reviews */}
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

          {/* Bad reviews */}
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
            MSFJのメリット4つ
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
            MSFJのデメリット3つ
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
            MSFJの利用の流れ
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
                  <span>手数料を最小限に抑えたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>少額（10万円〜）から利用したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>赤字決算や税金滞納があるが資金調達が必要な方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>スピードとコストの使い分けをしたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>2社間・3社間のどちらも検討したい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>5,000万円超の大口利用を希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>大手の知名度・実績を重視する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>即日入金と低手数料の両方を同時に求める方</span>
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
          <p className="mb-6 leading-relaxed text-text-light">
            MSFJと主要なファクタリング会社を比較しました。MSFJは2つのプランそれぞれの条件を記載しています。
          </p>
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
                  <tr key={i} className={`${i % 2 === 0 ? "bg-section-bg" : "bg-white"} ${i <= 1 ? "font-semibold text-primary" : ""}`}>
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

        {/* ── 手数料を安くするコツ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            MSFJで手数料を安くするコツ
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">1. プレミアムプランを選ぶ</p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料を最優先する場合は、プレミアムファクタリングプラン（1.8%〜6.8%）を選びましょう。クイックプラン（3.8%〜9.8%）と比較して手数料が大幅に安くなります。入金まで翌日以降になりますが、コスト面のメリットは大きいです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">2. 売掛先の信用力が高い案件を優先する</p>
              <p className="text-sm leading-relaxed text-text-light">
                上場企業や大手企業が売掛先の案件は、信用リスクが低いため手数料が下がる傾向にあります。複数の売掛金がある場合は、売掛先の信用力が高い案件を優先してファクタリングに出しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">3. 3社間ファクタリングを検討する</p>
              <p className="text-sm leading-relaxed text-text-light">
                取引先にファクタリングの利用を知られても問題ない場合は、3社間ファクタリングを検討しましょう。3社間はファクタリング会社のリスクが低いため、2社間よりも手数料が安くなる傾向にあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">4. 相見積もりを取る</p>
              <p className="text-sm leading-relaxed text-text-light">
                MSFJだけでなく、他のファクタリング会社からも見積もりを取ることで、手数料の交渉材料になります。同じ売掛債権で複数社から見積もりを取り、最も条件の良い会社を選びましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            MSFJの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            MSFJは、手数料1.8%〜という業界最安水準の料金設定が最大の強みです。プレミアムファクタリングプランで手数料を最小限に抑えつつ、クイックファクタリングプランで急ぎの資金需要にも対応できる、柔軟な2プラン制が特徴です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            審査の柔軟性も大きなメリットで、赤字決算や税金滞納がある事業者でも利用できたという口コミが見られます。10万円からの少額対応は、個人事業主やフリーランスにとっても利用しやすい設計です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、買取上限5,000万円の制限、プレミアムプランでの即日入金の難しさ、大手と比較した知名度の低さは課題として認識しておく必要があります。
          </p>
          <p className="leading-relaxed text-text-light">
            総合的に見て、MSFJは手数料の安さを最優先する事業者にとって有力な選択肢です。特にプレミアムプランの1.8%〜6.8%という手数料は、業界でもトップクラスの競争力です。まずは無料見積もりを取り、他社と比較した上で判断することをおすすめします。
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
            MSFJの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料1.8%〜の低コストファクタリング。まずは無料見積もりでプランと手数料を確認しましょう。
          </p>
          <a
            href="https://msfj.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            MSFJ公式サイトで無料見積もり
          </a>
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
              <p className="mt-1 text-sm text-text-light">累計9.1万社の大手を検証</p>
            </Link>
            <Link
              href="/reviews/olta/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTAの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">AI審査のクラウドファクタリングを検証</p>
            </Link>
            <Link
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング手数料ガイド</p>
              <p className="mt-1 text-sm text-text-light">手数料の相場と安くするコツ</p>
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
