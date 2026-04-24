import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "けんせつくんの口コミ・評判｜建設業特化ファクタリングを検証",
  description:
    "けんせつくんの口コミ・評判を徹底調査。建設業特化・注文書ファクタリング対応・最短即日入金・個人事業主OKのファクタリングサービスを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/kensetsukun/",
  },
  openGraph: {
    title:
      "けんせつくんの口コミ・評判｜建設業特化ファクタリングを検証",
    description:
      "けんせつくんの口コミ・評判を徹底調査。建設業特化ファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/kensetsukun/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "5%〜" },
  { label: "入金スピード", value: "最短即日" },
  { label: "買取可能額", value: "制限なし（要相談）" },
  { label: "対象", value: "建設業（法人・個人事業主）" },
  { label: "オンライン対応", value: "○（オンライン対応可）" },
  { label: "対応ファクタリング", value: "請求書・注文書ファクタリング" },
  { label: "対応エリア", value: "全国" },
  { label: "運営会社", value: "株式会社ウィット" },
];

const goodReviews = [
  {
    title: "建設業に特化しているので話が早い",
    label: "建設業の一人親方",
    detail:
      "建設業界の商習慣や資金繰りの特徴を理解した上で対応してくれるため、業界の専門用語も通じて説明がスムーズだったという声があります。一般的なファクタリング会社では建設業の案件に不慣れなケースもある中、専門的な対応が高く評価されています。",
  },
  {
    title: "注文書ファクタリングで早期に資金化できた",
    label: "内装工事業の利用者",
    detail:
      "工事の着手前に注文書（発注書）の段階で資金を調達できる点が好評です。材料の仕入れや外注費の先払いに充てることができ、工事の規模が大きくても対応できたという口コミが見られます。",
  },
  {
    title: "個人事業主でも利用できた",
    label: "電気工事の個人事業主",
    detail:
      "法人だけでなく個人事業主（一人親方）でも利用可能で、建設業の個人事業主にとって数少ない選択肢だという声があります。銀行融資が難しい一人親方にとって、売掛金を素早く現金化できるサービスとして重宝されています。",
  },
  {
    title: "急ぎの資金調達に対応してもらえた",
    label: "塗装業の経営者",
    detail:
      "外注費の支払期限が迫っている中、即日で資金を調達できたという声があります。建設業は仕入れや外注費の先払いが多いため、最短即日入金のスピード感が高く評価されています。",
  },
];

const badReviews = [
  {
    title: "建設業以外は利用できない",
    label: "IT企業の経営者",
    detail:
      "建設業に特化しているため、他業種の事業者は原則利用できないという声があります。IT業や小売業など建設業以外の事業者は、業種を問わないファクタリングサービスを利用する必要があります。",
  },
  {
    title: "手数料が具体的にわからない",
    label: "建設業の利用者",
    detail:
      "手数料が5%〜と下限のみ公開されており、上限が明示されていないため、見積もりを取るまで実際のコストがわかりにくいという声があります。透明性の面でやや不安を感じるという指摘があります。",
  },
  {
    title: "口コミ・評判の情報が少ない",
    label: "建設業の経営者",
    detail:
      "大手ファクタリング会社と比較すると利用者の口コミや評判情報が少なく、初めて利用する際の判断材料が限られるという声があります。建設業特化というニッチなポジションのため、情報収集に苦労するケースがあるようです。",
  },
];

const merits = [
  {
    title: "建設業に特化した専門サービス",
    description:
      "建設業界の商習慣、支払いサイクル、季節変動などを熟知した専門スタッフが対応します。工事代金の特殊性（出来高払い・前払い制度など）を理解しているため、建設業者にとってストレスの少ないスムーズな取引が可能です。",
  },
  {
    title: "注文書ファクタリングで早期資金調達",
    description:
      "請求書だけでなく、注文書（発注書）の段階でファクタリングが利用できます。工事の着手前に必要な材料費や外注費を確保でき、工事規模に見合った先行投資が可能になります。建設業では注文から竣工・支払いまでの期間が長いため、この早期資金化の仕組みは非常に有効です。",
  },
  {
    title: "個人事業主（一人親方）にも対応",
    description:
      "法人だけでなく個人事業主（一人親方）も利用対象です。建設業では一人親方として活動する方が多く、銀行融資のハードルが高い個人事業主にとって、売掛金を活用した資金調達手段は貴重な選択肢です。",
  },
  {
    title: "最短即日入金のスピード対応",
    description:
      "建設業は材料の仕入れや外注費の支払いなど、突発的な資金需要が発生しやすい業種です。最短即日入金に対応しているため、急ぎの支払いにも間に合わせることが可能です。",
  },
];

const demerits = [
  {
    title: "建設業以外は利用不可",
    description:
      "建設業に完全特化しているため、IT業・小売業・飲食業など他の業種の事業者は利用できません。建設業以外の方は、ビートレーディング・OLTA・QuQuMoなどの業種を問わないサービスを検討してください。",
  },
  {
    title: "手数料の上限が不明瞭",
    description:
      "手数料は5%〜と下限のみが公開されており、上限が明示されていません。案件ごとに個別見積もりとなるため、事前にコストの目安をつけにくい面があります。見積もりを取る際は、必ず手数料の具体的な数値を確認しましょう。",
  },
  {
    title: "完全オンライン完結ではない場合がある",
    description:
      "オンライン対応は可能ですが、案件の規模や内容によっては対面での面談や書類の郵送が必要になるケースがあります。OLTA・QuQuMoのような完全オンライン完結型と比較すると、手続きの手間がかかる場合があります。",
  },
];

const steps = [
  { step: "1", title: "電話・Web申込", description: "公式サイトのフォームまたは電話で問い合わせ。工事内容や売掛金の概要を伝えます。" },
  { step: "2", title: "必要書類の提出", description: "注文書・請求書・工事契約書・通帳コピー・身分証明書等を提出します。" },
  { step: "3", title: "審査", description: "建設業に精通したスタッフが審査を実施。元請けの信用力を中心に確認されます。" },
  { step: "4", title: "契約・入金", description: "契約締結後、最短即日で指定口座に入金されます。" },
];

const faqs = [
  {
    question: "けんせつくんの手数料は実際にいくらですか？",
    answer:
      "手数料は5%〜で、案件ごとに個別見積もりとなります。元請けの信用力、工事の規模、支払いサイトなどにより手数料が変動します。具体的な手数料は見積もり時に提示されるため、まずは問い合わせて確認することをおすすめします。",
  },
  {
    question: "けんせつくんは一人親方でも利用できますか？",
    answer:
      "はい、法人だけでなく個人事業主（一人親方）も利用可能です。建設業の個人事業主向けに設計されたサービスのため、一人親方の方でも安心して利用できます。確定申告書や開業届が必要書類として求められます。",
  },
  {
    question: "注文書ファクタリングはどの段階で利用できますか？",
    answer:
      "元請けから注文書（発注書）を受け取った段階で利用可能です。工事の着手前でも、注文書があれば資金調達ができるため、材料費や外注費の先払いに活用できます。請求書の発行を待つ必要がないのが大きなメリットです。",
  },
  {
    question: "元請けにファクタリング利用がバレますか？",
    answer:
      "2社間ファクタリングの場合、元請け（売掛先）への通知は行われないため、バレることはありません。3社間ファクタリングを選択した場合は元請けへの通知が必要になりますが、手数料を抑えられるメリットがあります。",
  },
  {
    question: "建設業以外の業種でも利用できますか？",
    answer:
      "けんせつくんは建設業に特化したサービスのため、原則として建設業以外の業種は利用対象外です。他業種の方は、ビートレーディング・OLTA・QuQuMo・アクセルファクターなど、業種を問わないファクタリングサービスをご検討ください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "けんせつくんの口コミ・評判｜建設業特化ファクタリングを検証",
  description:
    "けんせつくんの口コミ・評判を徹底調査。建設業特化ファクタリングを検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/kensetsukun/",
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
    { "@type": "ListItem", position: 3, name: "けんせつくん" },
  ],
};

const comparisonData = [
  { name: "けんせつくん", fee: "5%〜", speed: "最短即日", amount: "制限なし", online: "○", note: "建設業特化" },
  { name: "トップ・マネジメント", fee: "0.5%〜12.5%", speed: "最短即日", amount: "30万〜3億円", online: "○", note: "注文書対応" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎", note: "全業種対応" },
  { name: "アクセルファクター", fee: "2%〜20%", speed: "最短即日", amount: "30万〜1億円", online: "○", note: "全業種対応" },
];

/* ── Component ────────────────────────────────────── */

export default function KensetsukunnReviewPage() {
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
          { label: "けんせつくん" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            けんせつくんの口コミ・評判
            <br className="hidden md:block" />
            建設業特化ファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            建設業特化・注文書ファクタリング対応の「けんせつくん」の口コミ・評判を徹底調査。最短即日入金・個人事業主OKのサービスを検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. けんせつくんの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. けんせつくんのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. けんせつくんのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            けんせつくんの基本情報
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
            けんせつくんの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            けんせつくんは、株式会社ウィットが運営する建設業に特化したファクタリングサービスです。建設業界の商習慣や支払いサイクルを深く理解した専門スタッフが対応するため、建設業者にとってスムーズで理解のある取引が可能です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            最大の特徴は、注文書（発注書）ファクタリングに対応している点です。通常のファクタリングは工事完了後の請求書が必要ですが、けんせつくんなら工事の受注段階で資金を調達できます。これにより材料費や外注費の先払いが可能になり、資金面のボトルネックを解消できます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            法人だけでなく個人事業主（一人親方）にも対応しており、建設業で多い一人親方の資金調達ニーズにも応えています。全国対応で、最短即日入金のスピード感も備えています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">けんせつくんの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>建設業に完全特化した専門サービス</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>注文書ファクタリング対応で早期資金調達</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>個人事業主（一人親方）も利用可能</span>
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
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://and-heroes.com/media/growth-partners/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">GROWTH PARTNERS</a></p>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-sm">&#9675;</span>
              良い口コミの傾向
            </h3>
            <div className="space-y-4">
              {goodReviews.map((review, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-block rounded bg-secondary/10 px-2 py-0.5 text-xs text-secondary">{review.label}</span>
                  </div>
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
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-block rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">{review.label}</span>
                  </div>
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
            けんせつくんのメリット4つ
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
            けんせつくんのデメリット3つ
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
            けんせつくんの利用の流れ
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

        {/* ── 建設業のファクタリング事情 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            建設業のファクタリング事情と活用法
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            建設業は他の業種と比較して、ファクタリングの需要が特に高い業界です。その理由と活用のポイントを解説します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">支払いサイトが長い</p>
              <p className="text-sm leading-relaxed text-text-light">
                建設業では工事完了後に検収・請求を行い、その後30〜60日後に入金されるのが一般的です。工事期間を含めると、受注から入金まで数ヶ月かかることも珍しくありません。この長い支払いサイトが資金繰りを圧迫する最大の要因です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">先行投資が大きい</p>
              <p className="text-sm leading-relaxed text-text-light">
                建設業では工事着手前に材料の仕入れや外注費の支払いが必要です。特に大型案件では数百万〜数千万円の先行投資が必要になることもあり、手持ち資金だけでは対応できないケースが多発します。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">季節変動が大きい</p>
              <p className="text-sm leading-relaxed text-text-light">
                建設業は天候や季節による工事量の変動が大きく、繁忙期と閑散期で売上に大きな差が出ます。閑散期に前期の売掛金をファクタリングで早期回収することで、資金繰りの安定化に活用できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">注文書ファクタリングの活用シーン</p>
              <p className="text-sm leading-relaxed text-text-light">
                元請けから大型工事の発注を受けたが、着手に必要な材料費や外注費が手元にない場合に、注文書ファクタリングが威力を発揮します。注文書を受け取った段階で資金を確保できるため、ビジネスチャンスを逃すことなく工事に着手できます。
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
                  <span>建設業の法人・個人事業主の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>注文書の段階で資金調達したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>建設業の事情を理解した担当者に相談したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>一人親方でファクタリングを利用したい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>建設業以外の業種の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料を事前に明確に知りたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>完全オンライン完結を求める方</span>
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
                  <th className="px-4 py-3 text-left font-semibold">特徴</th>
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
                    <td className="px-4 py-3 text-xs">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 一人親方のファクタリング活用法 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            一人親方のファクタリング活用法
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            建設業の一人親方（個人事業主）は、銀行融資のハードルが高く資金調達に苦労するケースが多いです。けんせつくんは一人親方にも対応しており、以下のような場面で活用できます。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">元請けの支払いサイトが長い場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                一人親方の場合、元請けからの支払いが60日後・90日後ということも珍しくありません。その間の生活費や次の現場の材料費を確保するために、売掛金や注文書をファクタリングで現金化する方法が有効です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">繁忙期に複数案件を並行したい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                複数の現場を同時に請け負いたいが、材料費の先払いが必要で資金が追いつかないケースがあります。ファクタリングで既存の売掛金を現金化することで、新たな案件に着手するための資金を確保できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">工具・機材の購入費用が必要な場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                新しい工具や機材の購入が必要だが手元資金が不足している場合、売掛金のファクタリングで購入資金を確保できます。設備投資のタイミングを逃さないために、ファクタリングを活用する一人親方は増えています。
              </p>
            </div>
          </div>
        </section>

        {/* ── 利用前の準備 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            けんせつくんを利用する前の準備
          </h2>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-semibold text-text-main">事前に用意するもの</p>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">1</span>
                <span>注文書・発注書（注文書ファクタリングの場合）または請求書</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">2</span>
                <span>工事請負契約書（あれば）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">3</span>
                <span>通帳コピー（直近の入出金明細がわかるもの）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">4</span>
                <span>本人確認書類（運転免許証等）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">5</span>
                <span>確定申告書（個人事業主の場合）</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            建設業特化のサービスのため、工事関連の書類（注文書・請負契約書等）が審査のポイントとなります。元請けの信用力が審査で重視されるため、元請けが上場企業や大手ゼネコンの場合は審査が有利に進む傾向があります。
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

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            けんせつくんの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            けんせつくんは、建設業に完全特化した専門ファクタリングサービスとして、業界の事情を深く理解した対応が最大の強みです。注文書ファクタリング対応により、工事着手前の早い段階で資金を確保できる点は、建設業者にとって非常に価値が高いサービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            個人事業主（一人親方）にも対応しており、銀行融資が難しい小規模事業者にとって貴重な資金調達手段となっています。建設業界の商習慣を理解した担当者による丁寧な対応も評価ポイントです。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、手数料の上限が不明瞭な点や、建設業以外は利用できない点は注意が必要です。建設業の方で、業界を理解してくれるファクタリング会社を探している場合には、有力な選択肢の一つです。他社との相見積もりを取って比較検討することをおすすめします。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            けんせつくんの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            建設業特化ファクタリング。注文書でも即日資金調達。
          </p>
          <a
            href="https://kensetsukun.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料見積もり
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/top-management/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">トップ・マネジメントの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料0.5%〜の老舗ファクタリングを検証</p>
            </Link>
            <Link
              href="/articles/construction/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">建設業に最適なファクタリング会社を比較</p>
            </Link>
            <Link
              href="/articles/purchase-order/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">注文書ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">注文書で資金調達する方法を解説</p>
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
