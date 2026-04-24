import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "アクセルファクターの口コミ・評判｜審査通過率93.3%の実力を検証",
  description:
    "アクセルファクターの口コミ・評判を徹底調査。審査通過率93.3%（公式発表）、手数料0.5%〜のファクタリング会社の手数料・審査・対応を利用者の声で検証します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/reviews/accelfactor/",
  },
  openGraph: {
    title:
      "アクセルファクターの口コミ・評判｜審査通過率93.3%の実力を検証",
    description:
      "アクセルファクターの口コミ・評判を徹底調査。審査通過率93.3%のファクタリング会社を検証。",
    url: "https://factoring-partner.pages.dev/reviews/accelfactor/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "0.5%〜（2社間：2%〜20% / 3社間：1%〜10%）" },
  { label: "入金スピード", value: "最短即日（3時間程度）" },
  { label: "買取可能額", value: "30万円〜1億円" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "オンライン対応", value: "○（来店・出張対応も可）" },
  { label: "審査通過率", value: "93.3%（公式発表）" },
  { label: "契約方式", value: "2社間・3社間対応" },
  { label: "運営会社", value: "株式会社アクセルファクター" },
];

const goodReviews = [
  {
    title: "赤字決算でも審査に通った",
    detail:
      "「赤字決算で銀行融資を断られたがアクセルファクターでは審査に通った」「税金の滞納がある状態でも利用できた」という声があります。審査通過率93.3%を掲げるだけあり、柔軟な審査が特徴です。",
  },
  {
    title: "書類対応が柔軟",
    detail:
      "「通帳のコピーが用意できなかったがネットバンキングの画面キャプチャで対応してもらえた」「書類の不備があっても代替手段を提案してくれた」という口コミがあります。",
  },
  {
    title: "担当者の対応が親身",
    detail:
      "「初めてのファクタリングで不安だったが担当者が丁寧に説明してくれた」「資金繰りの相談にも乗ってくれた」という声が見られます。",
  },
  {
    title: "少額から利用できる",
    detail:
      "「30万円の小さな案件でも対応してもらえた」「他社では断られた少額案件を引き受けてくれた」という口コミがあり、少額対応の柔軟さが評価されています。",
  },
];

const badReviews = [
  {
    title: "担当者によって対応にムラがある",
    detail:
      "「前回の担当者は詳しかったが、今回の担当者は説明が不十分だった」「担当者がファクタリングの仕組みを十分理解していない印象を受けた」という声が一部見られます。",
  },
  {
    title: "対応が遅い場合がある",
    detail:
      "「最短即日と聞いていたが、実際は翌日になった」「書類提出後の連絡が遅かった」という口コミがあります。繁忙期や書類の状況によって対応が遅れるケースがあるようです。",
  },
  {
    title: "手数料の上限が高い場合がある",
    detail:
      "「0.5%〜と広告されているが実際は10%以上だった」という声もあり、最低手数料の適用条件は限定的であることに注意が必要です。実際の手数料は案件ごとの見積もりで決まります。",
  },
];

const merits = [
  {
    title: "業界トップクラスの審査通過率93.3%",
    description:
      "公式発表の審査通過率93.3%は業界でもトップクラスの水準です。赤字決算や税金滞納がある企業でも、売掛先の信用力に問題がなければ審査に通る可能性が高く、他社で断られた方の受け皿となっています。",
  },
  {
    title: "柔軟な書類対応",
    description:
      "必要書類の代替手段を積極的に提案してくれるため、書類準備が困難な事業者でも利用しやすい環境が整っています。ネットバンキングの画面キャプチャなど、柔軟な対応が可能です。",
  },
  {
    title: "2社間・3社間の両方に対応",
    description:
      "2社間と3社間の両方のファクタリングに対応しており、利用者のニーズに合わせて最適な方式を選択できます。秘密性を重視する場合は2社間、手数料を抑えたい場合は3社間と使い分けが可能です。",
  },
  {
    title: "来店・出張・オンラインの多様な対応",
    description:
      "オンラインだけでなく、来店や出張での対応も可能です。対面で相談しながら進めたい方や、オンライン手続きに不慣れな方でも安心して利用できます。",
  },
];

const demerits = [
  {
    title: "担当者の質にばらつきがある",
    description:
      "担当者によって知識量や対応の質に差があるとの指摘があります。対応に不満がある場合は、担当者の変更を依頼することも検討してみてください。",
  },
  {
    title: "即日入金が保証されない",
    description:
      "「最短即日」を掲げていますが、書類の状況や審査の混雑具合によっては翌営業日以降になるケースがあります。確実に即日入金を受けたい場合は、午前中の早い時間に申し込むことが推奨されます。",
  },
  {
    title: "手数料の幅が広い",
    description:
      "手数料0.5%〜と表示されていますが、実際に最低水準が適用されるケースは限定的です。2社間で2〜20%、3社間で1〜10%と幅が広いため、必ず見積もりで正確な手数料を確認することが重要です。",
  },
];

const steps = [
  { step: "1", title: "問い合わせ・申込", description: "電話・メール・Webフォームから申込。急ぎの場合は電話がおすすめ。" },
  { step: "2", title: "必要書類の提出", description: "請求書・通帳コピー・本人確認書類等を提出。書類の代替対応も可能。" },
  { step: "3", title: "審査・見積もり", description: "売掛先の信用調査を実施。審査通過率93.3%の柔軟な審査。" },
  { step: "4", title: "契約・入金", description: "条件に合意後、契約を締結。最短即日で指定口座に入金。" },
];

const faqs = [
  {
    question: "アクセルファクターの審査通過率は本当に93.3%ですか？",
    answer:
      "93.3%は公式サイトで発表されている数値です。ファクタリングの審査は売掛先の信用力が重視されるため、利用者自身の財務状況が厳しくても売掛先が優良企業であれば審査に通りやすくなります。ただし、全ての案件が通るわけではなく、売掛先の状況によっては審査落ちするケースもあります。",
  },
  {
    question: "赤字決算でも利用できますか？",
    answer:
      "はい、赤字決算でも利用できるケースがあります。ファクタリングの審査では利用者の決算状況よりも売掛先の信用力が重視されるため、赤字決算や債務超過の状態でも、売掛先が信頼できる企業であれば利用可能です。",
  },
  {
    question: "手数料0.5%は実際に適用されますか？",
    answer:
      "手数料0.5%が適用されるのは、3社間ファクタリングで売掛先が非常に信用力の高い大手企業、かつ金額が大きい案件など、条件が揃った場合に限られます。一般的な案件では2社間で5〜15%程度、3社間で2〜8%程度が目安です。正確な手数料は見積もりで確認してください。",
  },
  {
    question: "即日入金は可能ですか？",
    answer:
      "午前中の早い時間に申込み、必要書類が全て揃っている場合は即日入金が可能です。ただし、書類の不備や審査の混雑状況によっては翌営業日以降になる場合があります。急ぎの場合は事前に電話で相談することをおすすめします。",
  },
  {
    question: "出張対応はどのエリアまで可能ですか？",
    answer:
      "アクセルファクターは東京に本社を構えていますが、全国対応が可能です。出張対応のエリアや条件については、直接問い合わせて確認することをおすすめします。オンラインでの契約も可能なため、遠方の方はオンラインの利用も検討できます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "アクセルファクターの口コミ・評判｜審査通過率93.3%の実力を検証",
  description:
    "アクセルファクターの口コミ・評判を徹底調査。審査通過率93.3%のファクタリング会社を検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/accelfactor/",
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

const comparisonData = [
  { name: "アクセルファクター", fee: "0.5%〜", speed: "最短即日", amount: "30万〜1億円", passRate: "93.3%" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", passRate: "非公開" },
  { name: "日本中小企業金融サポート機構", fee: "1.5%〜10%", speed: "最短即日", amount: "制限なし", passRate: "95%" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", passRate: "非公開" },
];

/* ── Component ────────────────────────────────────── */

export default function AccelfactorReviewPage() {
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

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "業者レビュー", href: "/reviews/" },
          { label: "アクセルファクター" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            アクセルファクターの口コミ・評判
            <br className="hidden md:block" />
            審査通過率93.3%の実力を検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            審査通過率93.3%（公式発表）、手数料0.5%〜のファクタリング会社「アクセルファクター」の口コミ・評判を利用者の声で徹底検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. アクセルファクターの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. アクセルファクターのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. アクセルファクターのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            アクセルファクターの基本情報
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
            アクセルファクターの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            アクセルファクターは、株式会社アクセルファクターが運営するファクタリングサービスです。「審査通過率93.3%」を公式に掲げており、他社で審査に落ちた事業者の受け皿としても知られています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            最大の特徴は、赤字決算や税金滞納がある企業でも柔軟に審査を行う点です。ファクタリングの審査では売掛先の信用力が最も重視されますが、アクセルファクターは利用者側の事情も理解した上で、可能な限り対応する姿勢を取っています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            書類対応も柔軟で、通帳のコピーが用意できない場合はネットバンキングの画面キャプチャで代替できるなど、事業者の状況に応じた対応が可能です。来店・出張・オンラインの多様な契約方式に対応しており、対面での相談を希望する方にも利用しやすいサービスです。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">アクセルファクターの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>審査通過率93.3%の柔軟な審査（赤字決算・税金滞納でもOK）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>書類の代替手段を積極提案する柔軟な対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>来店・出張・オンラインの選べる契約方式</span>
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
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/factor/accelfacter" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://growth-partners.co.jp/accelfacter-reputaition/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">GROWTH PARTNERS</a></p>
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
            アクセルファクターのメリット4つ
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
            アクセルファクターのデメリット3つ
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
            アクセルファクターの利用の流れ
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
            アクセルファクターが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">他社で審査に落ちた後の選択肢として</p>
              <p className="text-sm leading-relaxed text-text-light">
                他のファクタリング会社の審査に通らなかった場合でも、アクセルファクターなら審査通過率93.3%の柔軟な基準で対応してもらえる可能性があります。赤字決算や税金滞納があっても、売掛先の信用力が十分であれば利用できるケースがあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">書類の準備が困難な場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                通帳のコピーが用意できない、決算書が手元にないなど、一般的な書類要件を満たせない場合でも、アクセルファクターは代替手段を提案してくれます。ネットバンキングの画面キャプチャなど、柔軟な対応が可能です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">対面で相談しながら進めたい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングが初めてで不安がある方は、来店や出張による対面での相談ができるアクセルファクターが安心です。担当者から直接説明を受けながら手続きを進められるため、オンラインのみの手続きに不安がある方に向いています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">少額案件で他社に断られた場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                30万円からの少額案件にも対応しているため、「金額が小さすぎて他社に断られた」というケースでも利用可能です。特に創業間もない企業やフリーランスの小口案件に対応してくれる点が評価されています。
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
                  <span>他社で審査に落ちた経験がある方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>赤字決算・税金滞納がある方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>対面での相談を希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>書類の準備に不安がある方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>確実に即日入金が必要な方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料の安さを最優先する方</span>
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
                  <th className="px-4 py-3 text-left font-semibold">審査通過率</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-section-bg" : "bg-white"} ${i === 0 ? "font-semibold text-primary" : ""}`}>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.fee}</td>
                    <td className="px-4 py-3">{item.speed}</td>
                    <td className="px-4 py-3">{item.amount}</td>
                    <td className="px-4 py-3">{item.passRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 赤字決算で利用する場合のポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            赤字決算・税金滞納でファクタリングを利用する際のポイント
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            アクセルファクターの強みの一つである「赤字決算でも利用可能」という点について、より詳しく解説します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">なぜ赤字決算でも利用できるのか</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングは融資ではなく売掛債権の売買です。審査で最も重視されるのは利用者の財務状況ではなく、売掛先（お金を払う側）の信用力です。売掛先が上場企業や大手企業であれば、利用者が赤字決算であっても「売掛金が確実に回収される」と判断でき、ファクタリングが成立します。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">税金滞納がある場合の注意点</p>
              <p className="text-sm leading-relaxed text-text-light">
                税金を滞納していると、税務署が売掛債権を差し押さえる可能性があります。差し押さえられた売掛金はファクタリングの対象外となるため、税金滞納が長期間にわたっている場合は、利用が制限されるケースがあります。滞納の状況によっては担当者に事前に相談することが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料への影響</p>
              <p className="text-sm leading-relaxed text-text-light">
                赤字決算や税金滞納がある場合、利用者の信用リスクが考慮され、通常より手数料が高めに設定される可能性があります。審査に通ることと手数料が安いことは別問題であるため、見積もり段階で正確な手数料を確認しましょう。
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

        {/* ── 審査通過率93.3%の意味 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査通過率93.3%の実態と注意点
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            アクセルファクターが掲げる審査通過率93.3%は魅力的な数値ですが、この数値を正しく理解しておくことが重要です。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">審査通過率が高い理由</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの審査は銀行融資と異なり、利用者の信用力よりも売掛先の信用力が重視されます。そのため、利用者自身が赤字決算や税金滞納の状態であっても、売掛先が信頼できる企業であれば審査に通りやすくなります。アクセルファクターはこの審査基準を柔軟に運用し、高い通過率を実現しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">審査に落ちる6.7%のケース</p>
              <p className="text-sm leading-relaxed text-text-light">
                審査通過率93.3%ということは、約6.7%の案件は審査落ちしています。主な審査落ちの原因としては、売掛先の信用力が著しく低い場合、売掛金の存在が確認できない場合、必要書類が揃えられない場合などが考えられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料との関係</p>
              <p className="text-sm leading-relaxed text-text-light">
                審査通過率が高いということは、リスクの高い案件も引き受けているということでもあります。そのため、リスクが高いと判断された案件では手数料が高めに設定される傾向があります。審査に通ることと手数料が安いことは別問題であることを理解しておきましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            アクセルファクターの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            アクセルファクターは、審査通過率93.3%を掲げる柔軟な審査が最大の強みです。銀行融資や他社のファクタリングで審査に落ちた事業者にとって、頼れる選択肢となっています。赤字決算や税金滞納があっても利用できる可能性がある点は、資金繰りに困っている事業者にとって大きな価値があります。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            書類対応の柔軟さや親身な担当者の対応も好評で、初めてファクタリングを利用する方にも安心感のあるサービスです。来店・出張・オンラインの多様な対応も利便性を高めています。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、担当者による対応のムラや手数料の幅の広さは注意が必要です。手数料0.5%〜という表示に過度な期待を持たず、必ず見積もりで正確な手数料を確認することが重要です。審査に不安がある方や、他社で断られた経験がある方に特におすすめのサービスです。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            アクセルファクターの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            審査通過率93.3%。赤字決算でも利用可能なファクタリング会社に無料で見積もり依頼できます。
          </p>
          <a
            href="https://accelfactor.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料見積もり
          </a>
        </section>

        {/* ── 契約前の確認事項 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            アクセルファクター契約前の確認チェックリスト
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            アクセルファクターに限らず、ファクタリング契約を結ぶ前に確認すべきポイントをまとめました。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">&#9744;</span>
                <span>手数料の正確な金額（見積もり書で確認）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">&#9744;</span>
                <span>償還請求権の有無（ノンリコースかリコースか）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">&#9744;</span>
                <span>契約書の内容（特に小さい文字の条項）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">&#9744;</span>
                <span>手数料以外の費用（事務手数料・登記費用等）の有無</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">&#9744;</span>
                <span>入金までの具体的なスケジュール</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">&#9744;</span>
                <span>売掛金の回収方法と期日</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">&#9744;</span>
                <span>解約やキャンセルの条件</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            特に重要なのは「償還請求権の有無」です。ノンリコース（償還請求権なし）であれば、売掛先が倒産しても利用者に返済義務はありません。リコース（償還請求権あり）の場合は、実質的に貸付と同様のリスクが発生するため、注意が必要です。
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
              href="/reviews/support-org/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">日本中小企業金融サポート機構の口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">非営利法人のファクタリングを検証</p>
            </Link>
            <Link
              href="/articles/easy-screening/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">審査が甘いファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">審査通過率が高い会社を比較</p>
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
