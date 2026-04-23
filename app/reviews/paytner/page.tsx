import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ペイトナーの口コミ・評判｜最短10分のフリーランス向けファクタリングを検証",
  description:
    "ペイトナー（旧yup）の口コミ・評判を徹底調査。みずほ銀行Innovation Award受賞、累計申込50万件のフリーランス向けファクタリングの手数料・審査・入金スピードを検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/paytner/",
  },
  openGraph: {
    title:
      "ペイトナーの口コミ・評判｜最短10分のフリーランス向けファクタリングを検証",
    description:
      "ペイトナーの口コミ・評判を徹底調査。累計申込50万件のフリーランス向けファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/paytner/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "一律10%" },
  { label: "入金スピード", value: "最短10分" },
  { label: "買取可能額", value: "初回：1万〜25万円 / 2回目以降：上限300万円" },
  { label: "対象", value: "フリーランス・個人事業主" },
  { label: "オンライン対応", value: "◎（完全オンライン・電話面談不要）" },
  { label: "累計申込件数", value: "50万件以上" },
  { label: "受賞歴", value: "みずほ銀行Innovation Award受賞" },
  { label: "運営会社", value: "ペイトナー株式会社" },
];

const goodReviews = [
  {
    title: "AI審査で最短20分完了",
    detail:
      "「申し込みから20分程度で審査結果が出た」「AIによる自動審査なので待ち時間が短い」という声が多数。人的審査がないため、深夜や早朝の申込でも迅速に審査が進むと好評です。",
  },
  {
    title: "必要書類が少なくて手軽",
    detail:
      "「請求書と本人確認書類だけで申し込めた」「通帳コピーなどの面倒な書類が不要で助かった」という口コミが目立ちます。フリーランスの手軽な資金調達手段として評価されています。",
  },
  {
    title: "電話面談不要で気軽に使える",
    detail:
      "「電話が苦手なので全てオンラインで完結するのが良い」「営業電話がかかってこない」という点が、特にフリーランス層から高く評価されています。",
  },
  {
    title: "振込が非常に早い",
    detail:
      "「審査通過後すぐに振り込まれた」「最短10分の入金は本当だった」という声があり、急ぎの資金需要に対応できる点が評価されています。",
  },
];

const badReviews = [
  {
    title: "初回は25万円までの上限がある",
    detail:
      "「初回25万円では足りなかった」「もう少し初回から高額を利用できると嬉しい」という声があります。初回は信用構築のため上限が設けられています。",
  },
  {
    title: "審査基準が変動する",
    detail:
      "「前回は通ったのに今回は審査に落ちた」「利用回数を重ねると審査が厳しくなった印象」という口コミがあり、AI審査の基準が一定ではないとの指摘があります。",
  },
  {
    title: "上限300万円で大口案件に対応できない",
    detail:
      "「法人化して大きな案件を受けると上限に引っかかる」「数百万円単位の資金調達には向かない」という声があります。大口の資金需要がある場合は他社との併用が検討されます。",
  },
];

const merits = [
  {
    title: "業界最速クラスの入金スピード",
    description:
      "AI審査による自動化で、最短10分での入金を実現。審査から入金まで人手を介さないため、24時間いつでもスピーディーな資金化が可能です。急な支払いにも即座に対応できます。",
  },
  {
    title: "フリーランスに特化した設計",
    description:
      "個人事業主・フリーランス向けに設計されたサービスで、少額（1万円）から利用可能。請求書と本人確認書類のみで申込でき、電話面談も不要。フリーランスの働き方に合った手軽さが魅力です。",
  },
  {
    title: "手数料が一律10%でわかりやすい",
    description:
      "手数料は一律10%と明確で、見積もりによって変動することがありません。事前にコストを正確に把握できるため、資金計画が立てやすい点がメリットです。",
  },
  {
    title: "みずほ銀行の受賞歴で信頼性が高い",
    description:
      "みずほ銀行Innovation Awardを受賞しており、大手金融機関からの信頼を得ています。累計申込50万件という実績と合わせて、サービスの信頼性を裏付けています。",
  },
];

const demerits = [
  {
    title: "初回利用は25万円まで",
    description:
      "初回利用時の上限額は25万円に制限されています。まとまった資金が必要な場合、初回では対応しきれない可能性があります。利用実績を積むことで上限が引き上げられます。",
  },
  {
    title: "最大300万円の上限がある",
    description:
      "利用上限額は最大300万円のため、大口の資金調達には対応できません。法人化して取引規模が大きくなった場合は、他社のファクタリングサービスの検討が必要になります。",
  },
  {
    title: "AI審査の基準が不透明",
    description:
      "AI審査の詳細な基準は公開されていないため、なぜ審査に落ちたのか原因がわかりにくいという声があります。前回利用できても今回は審査落ちするケースが報告されています。",
  },
];

const steps = [
  { step: "1", title: "会員登録", description: "メールアドレスで無料会員登録。最短1分で完了します。" },
  { step: "2", title: "請求書のアップロード", description: "請求書の画像またはPDFをアップロードします。" },
  { step: "3", title: "AI審査", description: "AIが自動で審査を実施。最短20分で結果が通知されます。" },
  { step: "4", title: "入金", description: "審査通過後、最短10分で指定口座に入金されます。" },
];

const faqs = [
  {
    question: "ペイトナーの手数料はいくらですか？",
    answer:
      "手数料は一律10%です。売掛金の額面から10%を差し引いた金額が入金されます。例えば10万円の請求書の場合、9万円が入金されます。金額や利用回数による手数料の変動はありません。",
  },
  {
    question: "ペイトナーは法人でも利用できますか？",
    answer:
      "ペイトナーはフリーランス・個人事業主向けのサービスですが、法人でも利用可能です。ただし、上限額が300万円のため、大口の資金調達には向きません。法人向けには他のファクタリングサービスの方が適している場合があります。",
  },
  {
    question: "審査に落ちることはありますか？",
    answer:
      "はい、AI審査の結果、審査に落ちるケースはあります。売掛先の信用力や請求書の内容、過去の利用状況などが審査に影響するとされています。審査に落ちた場合の具体的な理由は開示されません。",
  },
  {
    question: "ペイトナーの上限額を上げるにはどうすれば良いですか？",
    answer:
      "利用実績を積むことで上限額が段階的に引き上げられます。初回は25万円までですが、問題なく利用・返済を繰り返すことで、最大300万円まで上限が上がります。",
  },
  {
    question: "売掛先にファクタリングの利用がバレますか？",
    answer:
      "ペイトナーは2社間ファクタリングのため、売掛先への通知は行われません。取引先にファクタリングの利用が知られることはないので、取引関係に影響を与えずに利用できます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ペイトナーの口コミ・評判｜最短10分のフリーランス向けファクタリングを検証",
  description:
    "ペイトナーの口コミ・評判を徹底調査。累計申込50万件のフリーランス向けファクタリングを検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/paytner/",
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
  { name: "ペイトナー", fee: "一律10%", speed: "最短10分", amount: "1万〜300万円", online: "◎" },
  { name: "ラボル", fee: "一律10%", speed: "最短60分", amount: "1万円〜", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function PaytnerReviewPage() {
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
          { label: "ペイトナー" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ペイトナーの口コミ・評判
            <br className="hidden md:block" />
            最短10分のフリーランス向けファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            みずほ銀行Innovation Award受賞、累計申込50万件のフリーランス特化型ファクタリング「ペイトナー」の口コミ・評判を徹底調査します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. ペイトナーの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. ペイトナーのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. ペイトナーのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ペイトナーの基本情報
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
            ペイトナーの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ペイトナー（旧yup）は、フリーランス・個人事業主に特化したファクタリングサービスを提供するFinTech企業です。2019年のサービス開始以来、累計申込50万件を突破し、フリーランス向けファクタリングの代表的なサービスとして知られています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            最大の特徴はAI審査による圧倒的なスピードです。従来のファクタリングでは人手による審査が一般的でしたが、ペイトナーはAIを活用した自動審査システムを導入し、最短20分での審査完了、最短10分での入金を実現しています。電話面談も不要なため、オンラインで全ての手続きが完結します。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            みずほ銀行Innovation Awardを受賞した実績もあり、大手金融機関からの信頼を獲得しています。フリーランスの資金繰り課題を解決するために設計されたサービスとして、業界での認知度も高まっています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">ペイトナーの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>AI審査で最短20分・入金最短10分の圧倒的スピード</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>電話面談不要・完全オンライン完結のフリーランス特化設計</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>みずほ銀行Innovation Award受賞の信頼性</span>
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
            ペイトナーのメリット4つ
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
            ペイトナーのデメリット3つ
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
            ペイトナーの利用の流れ
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
            ペイトナーが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">月末の生活費がピンチな場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                フリーランスにとって、売掛金の入金サイクルと生活費の支払いタイミングがずれることは珍しくありません。ペイトナーなら最短10分で入金されるため、月末の急な出費にも対応できます。1万円から利用可能なので、少額の資金繰りにも最適です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">新しいクライアントからの初回報酬待ちの場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                新規クライアントとの取引では、支払いサイトが長めに設定されることがあります。初回の報酬入金を待つ間の運転資金としてペイトナーを活用するフリーランスが増えています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">確定申告の納税資金が必要な場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                確定申告後の納税資金が不足している場合、売掛金をペイトナーで現金化して納税に充てるケースがあります。税金の延滞には延滞税がかかるため、ファクタリングの手数料と比較して有利な場合があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">設備投資やスキルアップの資金に</p>
              <p className="text-sm leading-relaxed text-text-light">
                パソコンの買い替えや資格取得の費用など、事業に必要な設備投資やスキルアップの資金が急に必要になった場合にも活用できます。事業の成長投資を売掛金の入金を待たずに実行できます。
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
                  <span>フリーランス・個人事業主の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>少額（1万円〜）の請求書を現金化したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>電話対応なしで完結させたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>最短10分の即時入金が必要な方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手数料を事前に確定させたい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>300万円以上の資金調達が必要な方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>初回から大口の利用をしたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料10%より安い条件を求める方</span>
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

        {/* ── ペイトナーと他の資金調達方法の比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ペイトナーと他の資金調達方法の比較
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            フリーランスが利用できる資金調達方法はファクタリング以外にもあります。ペイトナーのファクタリングと他の方法を比較しました。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">方法</th>
                  <th className="px-4 py-3 text-left font-semibold">コスト</th>
                  <th className="px-4 py-3 text-left font-semibold">スピード</th>
                  <th className="px-4 py-3 text-left font-semibold">審査</th>
                  <th className="px-4 py-3 text-left font-semibold">信用情報</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-section-bg font-semibold text-primary">
                  <td className="px-4 py-3">ペイトナー</td>
                  <td className="px-4 py-3">一律10%</td>
                  <td className="px-4 py-3">最短10分</td>
                  <td className="px-4 py-3">売掛先重視</td>
                  <td className="px-4 py-3">影響なし</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">カードローン</td>
                  <td className="px-4 py-3">年15〜18%</td>
                  <td className="px-4 py-3">最短即日</td>
                  <td className="px-4 py-3">個人信用重視</td>
                  <td className="px-4 py-3">登録される</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="px-4 py-3">日本政策金融公庫</td>
                  <td className="px-4 py-3">年1〜3%</td>
                  <td className="px-4 py-3">2〜4週間</td>
                  <td className="px-4 py-3">事業計画重視</td>
                  <td className="px-4 py-3">登録される</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">クレジットカード</td>
                  <td className="px-4 py-3">年15〜18%</td>
                  <td className="px-4 py-3">即時</td>
                  <td className="px-4 py-3">個人信用重視</td>
                  <td className="px-4 py-3">登録される</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ペイトナーの最大の利点は、信用情報に影響を与えず最短10分で資金調達できる点です。金利コストだけを見れば融資の方が安いですが、スピードと信用情報への影響を考慮すると、短期の資金繰りにはペイトナーが有利な場合があります。
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

        {/* ── 利用時の注意点 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ペイトナーを利用する際の注意点
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ペイトナーはフリーランスにとって非常に便利なサービスですが、利用前に以下の点を理解しておくことが重要です。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">初回利用は上限25万円を理解する</p>
              <p className="text-sm leading-relaxed text-text-light">
                初回の利用上限額は25万円に設定されています。これはサービスとしての信用構築プロセスの一環であり、利用実績を積むことで段階的に上限が引き上げられます。初回で大きな金額が必要な場合は、他のファクタリングサービスとの併用も検討してください。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料一律10%のコスト計算</p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料が一律10%のため、頻繁に利用するとコストが積み重なります。例えば、毎月30万円の請求書をファクタリングする場合、月3万円・年間36万円の手数料が発生します。資金繰りが改善したら銀行融資など他の資金調達手段への切り替えも検討しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">審査落ちの可能性を想定する</p>
              <p className="text-sm leading-relaxed text-text-light">
                AI審査の基準は公開されておらず、前回利用できても今回審査に落ちるケースがあります。確実な資金調達が必要な場合は、ペイトナー以外のファクタリングサービスも候補として準備しておくことをおすすめします。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">請求書の品質に注意する</p>
              <p className="text-sm leading-relaxed text-text-light">
                AI審査では請求書の内容が重要な審査ポイントとなります。請求書には取引内容・金額・支払い期日・売掛先の情報が明確に記載されていることが求められます。あいまいな内容の請求書は審査落ちの原因になる可能性があります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ペイトナーの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ペイトナーは、フリーランス・個人事業主にとって最も手軽に利用できるファクタリングサービスの一つです。AI審査による最短10分入金、電話面談不要、請求書と本人確認書類のみで申込可能という手軽さは、他のサービスにはない大きな強みです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料は一律10%と明確で、見積もりによる変動がないため資金計画が立てやすいメリットがあります。みずほ銀行Innovation Award受賞の実績もあり、信頼性も確保されています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、初回25万円の上限や最大300万円の制限があるため、大口の資金調達には対応できません。また、AI審査の基準が不透明で審査落ちするケースがある点も理解しておく必要があります。
          </p>
          <p className="leading-relaxed text-text-light">
            総合的に見て、少額の売掛金を手軽にスピーディーに現金化したいフリーランスにとっては最適なサービスです。一方、法人や大口案件を扱う事業者は、ビートレーディングやOLTAなどの法人向けサービスを検討する方が適しています。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            ペイトナーの無料登録はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            最短10分で入金。フリーランス向けファクタリングを無料で始められます。
          </p>
          <a
            href="https://paytner.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料登録
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
              <p className="mt-1 text-sm text-text-light">24時間365日即日対応のファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/olta/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTA（オルタ）の口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">AI審査のクラウドファクタリングを検証</p>
            </Link>
            <Link
              href="/articles/for-freelance/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">フリーランス向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">個人事業主に最適なサービスを比較</p>
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
