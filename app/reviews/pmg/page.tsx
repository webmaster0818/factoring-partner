import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "PMGの口コミ・評判｜年間取引8,600件の大手ファクタリングを検証",
  description:
    "PMGの口コミ・評判を徹底調査。年間取引8,600件、Pマーク・ISO27001取得の大手ファクタリング会社の手数料・審査・対応を利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/pmg/",
  },
  openGraph: {
    title:
      "PMGの口コミ・評判｜年間取引8,600件の大手ファクタリングを検証",
    description:
      "PMGの口コミ・評判を徹底調査。年間8,600件の大手ファクタリング会社を検証。",
    url: "https://factoring-partner.pages.dev/reviews/pmg/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "2社間：2%〜15% / 3社間：要相談" },
  { label: "入金スピード", value: "最短即日（2時間程度）" },
  { label: "買取可能額", value: "制限なし（大口案件に強み）" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "オンライン対応", value: "○（来店・出張対応も可）" },
  { label: "年間取引件数", value: "8,600件以上" },
  { label: "認証", value: "プライバシーマーク（Pマーク）/ ISO27001取得" },
  { label: "運営会社", value: "ピーエムジー株式会社" },
];

const goodReviews = [
  {
    title: "買取規模が業界トップクラス",
    detail:
      "「年間8,600件の取引実績は信頼できる」「大口案件にも対応してもらえた」という声があります。取引規模の大きさが安心感につながっていると評価されています。",
  },
  {
    title: "担当者が礼儀正しく丁寧",
    detail:
      "「担当者の対応が非常に丁寧で好感が持てた」「ビジネスマナーがしっかりしている」という口コミが見られます。大手企業ならではの教育が行き届いている印象です。",
  },
  {
    title: "セキュリティ体制が万全",
    detail:
      "「PマークとISO27001を取得しているので情報漏洩の心配が少ない」「個人情報の取り扱いに安心感がある」という声があります。情報セキュリティへの取り組みが評価されています。",
  },
  {
    title: "ゼネラルリサーチで3部門No.1",
    detail:
      "「ゼネラルリサーチ（2019年）の調査で3部門No.1を獲得している実績がある」という点が信頼材料として挙げられています。第三者機関による評価が安心感につながっています。",
  },
];

const badReviews = [
  {
    title: "2社間の手数料が割高になる場合がある",
    detail:
      "「2社間の手数料が2〜15%と幅が広く、実際は10%以上だった」「他社と比較すると手数料が高めだった」という声があります。手数料の下限2%が適用される条件は限定的なようです。",
  },
  {
    title: "アポなし営業の報告がある",
    detail:
      "「利用後にアポなしで営業の電話や訪問があった」「見積もり依頼後の営業が積極的だった」という声が一部あります。営業活動が活発な点を気にする方がいるようです。",
  },
  {
    title: "完全オンライン完結が難しい場合がある",
    detail:
      "「オンラインで完結できると思ったが、電話でのやり取りが複数回必要だった」「対面での契約を求められた」という声があります。案件や金額によってはオンラインのみでの対応が難しいケースがあるようです。",
  },
];

const merits = [
  {
    title: "年間8,600件の圧倒的な取引実績",
    description:
      "年間8,600件以上の取引実績は業界でもトップクラスです。豊富な取引経験に基づくノウハウがあり、多種多様な業種・案件に対応可能。大口案件にも強みを持っています。",
  },
  {
    title: "PマークとISO27001のダブル認証",
    description:
      "プライバシーマーク（Pマーク）とISO27001（情報セキュリティマネジメントシステム）の両方を取得しており、情報管理体制が万全です。ファクタリング業界では珍しい高水準のセキュリティ認証で、企業の機密情報を安心して任せられます。",
  },
  {
    title: "第三者機関による3部門No.1評価",
    description:
      "ゼネラルリサーチ（2019年）の調査で3部門No.1を獲得しています。第三者機関による客観的な評価は、サービス品質の高さを裏付けるものとして信頼材料になります。",
  },
  {
    title: "来店・出張・オンラインの柔軟な対応",
    description:
      "オンラインだけでなく、来店や出張での対応にも応じています。対面での相談を希望する方や、大口案件で詳細な打ち合わせが必要な場合にも柔軟に対応可能です。",
  },
];

const demerits = [
  {
    title: "2社間の手数料上限が15%と高め",
    description:
      "2社間ファクタリングの手数料が2〜15%と、上限が他社と比較してやや高めです。特に少額案件や売掛先の信用力が低い場合は、手数料が上限に近くなる可能性があります。必ず見積もりで正確な手数料を確認しましょう。",
  },
  {
    title: "営業活動が積極的",
    description:
      "見積もり依頼後や利用後に営業の電話や訪問があるとの報告があります。営業活動自体は正当なビジネス行為ですが、積極的な営業を好まない方にとっては気になるポイントです。",
  },
  {
    title: "完全オンライン完結が難しいケースがある",
    description:
      "案件の内容や金額によっては、電話でのヒアリングや対面での契約が必要になるケースがあります。完全にオンラインだけで済ませたい方は、事前に対応方法を確認することをおすすめします。",
  },
];

const steps = [
  { step: "1", title: "問い合わせ・申込", description: "電話・メール・Webフォームから申込。担当者が状況をヒアリングします。" },
  { step: "2", title: "必要書類の提出", description: "請求書・通帳コピー・本人確認書類等を提出します。" },
  { step: "3", title: "審査・見積もり", description: "売掛先の信用調査を実施し、買取条件（手数料等）を提示します。" },
  { step: "4", title: "契約・入金", description: "条件に合意後、契約を締結。最短即日で指定口座に入金されます。" },
];

const faqs = [
  {
    question: "PMGの手数料は実際にいくらですか？",
    answer:
      "2社間ファクタリングの場合、2〜15%の範囲で案件ごとに決まります。手数料は売掛先の信用力、売掛金の金額、支払いサイトなどにより変動します。最低手数料の2%が適用されるのは好条件の案件に限られるため、正確な手数料は見積もりで確認してください。",
  },
  {
    question: "PMGのPマークやISO27001とはどういう認証ですか？",
    answer:
      "Pマーク（プライバシーマーク）は個人情報の適切な管理体制を認証するもの、ISO27001は情報セキュリティマネジメントシステムの国際規格です。いずれも第三者機関の審査を経て取得する認証で、企業の情報管理体制が一定水準以上であることを証明します。",
  },
  {
    question: "PMGは個人事業主でも利用できますか？",
    answer:
      "はい、法人だけでなく個人事業主も利用可能です。ただし、案件によっては法人の方が有利な条件で利用できるケースがあります。個人事業主の方はまず無料で相談してみることをおすすめします。",
  },
  {
    question: "ゼネラルリサーチの3部門No.1とはどの部門ですか？",
    answer:
      "2019年にゼネラルリサーチが実施した調査で、ファクタリング関連の3部門でNo.1を獲得しています。調査の詳細については公式サイトで確認できます。なお、調査は2019年時点のものである点にご留意ください。",
  },
  {
    question: "PMGの営業電話を断ることはできますか？",
    answer:
      "はい、営業連絡が不要な場合はその旨を担当者に伝えることで対応してもらえます。「今後の営業連絡は不要です」と明確に伝えれば、連絡を止めてもらえるケースがほとんどです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "PMGの口コミ・評判｜年間取引8,600件の大手ファクタリングを検証",
  description:
    "PMGの口コミ・評判を徹底調査。年間8,600件の大手ファクタリング会社を検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/pmg/",
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
  { name: "PMG", fee: "2%〜15%", speed: "最短即日", amount: "制限なし", security: "Pマーク/ISO27001" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", security: "-" },
  { name: "アクセルファクター", fee: "0.5%〜", speed: "最短即日", amount: "30万〜1億円", security: "-" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", security: "-" },
];

/* ── Component ────────────────────────────────────── */

export default function PmgReviewPage() {
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
          { label: "PMG" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            PMGの口コミ・評判
            <br className="hidden md:block" />
            年間取引8,600件の大手ファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            年間取引8,600件、Pマーク・ISO27001取得の大手ファクタリング会社「PMG」の口コミ・評判を利用者の声で徹底検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. PMGの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. PMGのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. PMGのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            PMGの基本情報
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
            PMGの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            PMG（ピーエムジー）は、ピーエムジー株式会社が運営する大手ファクタリングサービスです。年間取引件数8,600件以上という業界でもトップクラスの取引量を誇り、法人向けのファクタリングに強みを持っています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            最大の特徴は、プライバシーマーク（Pマーク）とISO27001（情報セキュリティマネジメントシステム）の両方を取得している点です。ファクタリング業界でこの2つの認証をダブルで取得している企業は珍しく、情報管理に対する意識の高さが伺えます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            ゼネラルリサーチ（2019年）の調査で3部門No.1を獲得した実績があり、第三者機関からの客観的な評価も得ています。東京・大阪に拠点を持ち、来店・出張・オンラインの多様な対応方式で全国の事業者にサービスを提供しています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">PMGの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>年間8,600件以上の圧倒的な取引実績</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>Pマーク・ISO27001ダブル取得の万全なセキュリティ体制</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>ゼネラルリサーチ3部門No.1の第三者評価</span>
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
            ※当サイトの口コミ傾向調査は、Google口コミ、みん評、ヒカカク、ファクログ等の公開情報をもとに分析したものです。個別の口コミは投稿者個人の意見であり、当サイトがその内容を保証するものではありません。また、口コミは調査時点のものであり、サービス内容は変更される場合があります。
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
            PMGのメリット4つ
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
            PMGのデメリット3つ
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
            PMGの利用の流れ
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
            PMGが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">大口の売掛金を現金化したい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                年間8,600件の取引実績を持つPMGは、大口案件の取り扱いに強みがあります。数千万円〜数億円規模の売掛金でも対応可能で、大企業との取引が多い法人にとって頼れるパートナーです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">情報セキュリティが重要な業種の場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                IT企業や医療関連企業など、情報管理が特に重要な業種の場合、PマークとISO27001のダブル認証を持つPMGは安心です。取引先情報や財務データの漏洩リスクを最小限に抑えたい場合に最適です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">対面で丁寧な対応を求める場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                口コミで「担当者が礼儀正しい」「丁寧な対応」と評価されているPMGは、対面での相談を重視する方に向いています。来店・出張対応が可能で、ファクタリングの仕組みから契約内容まで詳しく説明してもらえます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">第三者評価を重視して選びたい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                ゼネラルリサーチで3部門No.1を獲得した実績は、自社アピールではない客観的な評価です。ファクタリング会社の選定に際して、第三者機関の評価を重視する方にとって、PMGは信頼できる選択肢となります。
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
                  <span>情報セキュリティを重視する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>大口案件の買取を希望する法人</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>実績のある大手ファクタリング会社を選びたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>対面で丁寧な対応を受けたい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料の安さを最優先する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>営業連絡を一切受けたくない方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>完全オンラインのみで完結させたい方</span>
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
                  <th className="px-4 py-3 text-left font-semibold">セキュリティ認証</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-section-bg" : "bg-white"} ${i === 0 ? "font-semibold text-primary" : ""}`}>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.fee}</td>
                    <td className="px-4 py-3">{item.speed}</td>
                    <td className="px-4 py-3">{item.amount}</td>
                    <td className="px-4 py-3">{item.security}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── ゼネラルリサーチについて ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ゼネラルリサーチ3部門No.1の詳細
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            PMGが獲得したゼネラルリサーチの3部門No.1評価について詳しく解説します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">ゼネラルリサーチとは</p>
              <p className="text-sm leading-relaxed text-text-light">
                ゼネラルリサーチはマーケティングリサーチ会社で、様々な業界のサービス品質調査を実施しています。PMGは2019年の調査でファクタリング関連の3部門でNo.1を獲得しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">調査時点についての注意</p>
              <p className="text-sm leading-relaxed text-text-light">
                この調査は2019年時点のものであり、現在の状況とは異なる可能性があります。ファクタリング業界は近年急速に変化しており、新サービスの登場や既存サービスの改善が進んでいます。2019年の評価は参考情報として捉え、最新のサービス内容や口コミも合わせて判断することをおすすめします。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">第三者評価の意義</p>
              <p className="text-sm leading-relaxed text-text-light">
                自社のアピールとは異なり、第三者機関による客観的な評価は信頼性が高いです。ファクタリング会社を選ぶ際に、公式サイトの情報だけでなく、こうした外部の評価も参考にすることで、よりバランスの取れた判断ができます。ただし、一つの調査結果だけで全てを判断するのではなく、口コミや実績など複数の情報源を総合的に検討することが重要です。
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

        {/* ── セキュリティ認証の詳細 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            PMGのセキュリティ認証が重要な理由
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングを利用する際、売掛先の情報や自社の財務情報などの機密データをファクタリング会社に提供します。そのため、情報管理体制の信頼性は非常に重要な選定基準です。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">プライバシーマーク（Pマーク）とは</p>
              <p className="text-sm leading-relaxed text-text-light">
                プライバシーマークは、一般財団法人日本情報経済社会推進協会（JIPDEC）が認定する個人情報保護の認証制度です。取得には、個人情報保護マネジメントシステム（PMS）の構築、社内規程の整備、従業員教育、内部監査の実施などが求められます。2年ごとの更新審査もあり、継続的な情報保護の取り組みが必要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">ISO27001とは</p>
              <p className="text-sm leading-relaxed text-text-light">
                ISO27001は、情報セキュリティマネジメントシステム（ISMS）の国際規格です。機密性（Confidentiality）、完全性（Integrity）、可用性（Availability）の3つの要素を軸に、組織の情報セキュリティを体系的に管理する仕組みを構築・運用していることを証明します。国際的に認められた規格のため、グローバル基準のセキュリティ体制が整っていることの証明になります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">ファクタリングにおけるセキュリティの重要性</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングでは、売掛先の情報、取引金額、自社の財務状況など、事業の機密情報を共有することになります。万が一これらの情報が漏洩した場合、取引先との関係悪化や競合他社への情報流出など、深刻なビジネスリスクが発生します。PマークとISO27001のダブル認証を持つPMGは、この点において高い安全性を提供しています。
              </p>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            PMGの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            PMGは、年間取引8,600件の圧倒的な実績とPマーク・ISO27001のダブル認証を持つ、信頼性の高い大手ファクタリング会社です。担当者の礼儀正しさや丁寧な対応も好評で、大口案件にも強みを持っています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            情報セキュリティを重視する法人や、実績のある大手ファクタリング会社を選びたい方にとっては最適な選択肢の一つです。ゼネラルリサーチでの3部門No.1評価も、客観的な品質の裏付けとなっています。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、2社間の手数料上限が15%とやや高めな点や、営業活動が積極的な点は事前に理解しておく必要があります。セキュリティと実績を重視し、多少の営業連絡は許容できる方にはおすすめのサービスです。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            PMGの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            年間8,600件の実績。Pマーク・ISO27001取得の大手ファクタリング会社に無料で見積もり依頼できます。
          </p>
          <a
            href="https://p-m-g.tokyo/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料見積もり
          </a>
        </section>

        {/* ── 大口案件の活用法 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            PMGで大口案件を利用する際のポイント
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            PMGは大口案件に強みを持つファクタリング会社です。大口の売掛金をファクタリングする際のポイントを解説します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">大口案件のメリット</p>
              <p className="text-sm leading-relaxed text-text-light">
                一般的に、売掛金の金額が大きいほど手数料率は低くなる傾向があります。数千万円〜数億円規模の案件では、2〜5%程度の低い手数料が適用される可能性があります。PMGの年間8,600件の実績には大口案件も多く含まれており、大口の取り扱いに慣れたノウハウがあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">大口案件で注意すべき点</p>
              <p className="text-sm leading-relaxed text-text-light">
                大口案件の場合、審査がより慎重に行われるため、即日入金が難しくなるケースがあります。また、対面での契約が求められる場合もあります。大口の資金調達を計画する場合は、余裕を持ったスケジュールで申し込むことをおすすめします。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">複数の売掛金をまとめる方法</p>
              <p className="text-sm leading-relaxed text-text-light">
                複数の売掛先への請求書をまとめてファクタリングすることも可能です。複数の案件を一度に依頼することで、手数料の交渉がしやすくなる場合もあります。担当者に相談して最適な方法を検討しましょう。
              </p>
            </div>
          </div>
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
              href="/reviews/accelfactor/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">審査通過率93.3%の実力を検証</p>
            </Link>
            <Link
              href="/articles/for-corporation/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">法人向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">法人に最適なサービスを比較</p>
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
