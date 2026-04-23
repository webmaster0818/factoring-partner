import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "日本中小企業金融サポート機構の口コミ・評判｜非営利法人のファクタリングを検証",
  description:
    "日本中小企業金融サポート機構の口コミ・評判を徹底調査。審査通過率95%（公式）、手数料1.5〜10%の一般社団法人が運営するファクタリングを利用者の声で検証します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/reviews/support-org/",
  },
  openGraph: {
    title:
      "日本中小企業金融サポート機構の口コミ・評判｜非営利法人のファクタリングを検証",
    description:
      "日本中小企業金融サポート機構の口コミ・評判を徹底調査。非営利法人のファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/support-org/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "1.5%〜10%" },
  { label: "入金スピード", value: "最短即日（3時間程度）" },
  { label: "買取可能額", value: "制限なし" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "オンライン対応", value: "◎（郵送ファクタリングも可）" },
  { label: "審査通過率", value: "95%（公式発表）" },
  { label: "運営形態", value: "一般社団法人（非営利法人）" },
  { label: "運営", value: "一般社団法人 日本中小企業金融サポート機構" },
];

const goodReviews = [
  {
    title: "非営利法人なので安心感がある",
    detail:
      "「一般社団法人という非営利の運営形態なので信頼できる」「営利目的ではないため手数料が良心的に感じた」という声が多数。民間のファクタリング会社に不安を感じる方から特に支持されています。",
  },
  {
    title: "手数料が安い",
    detail:
      "「1.5%〜10%と他社より安い手数料で利用できた」「非営利法人だけあって手数料が良心的だった」という口コミがあります。手数料の上限が10%に抑えられている点が評価されています。",
  },
  {
    title: "電話対応が丁寧",
    detail:
      "「電話で問い合わせた際、とても丁寧に対応してもらえた」「初めてで不安だったが、電話で詳しく説明してもらえて安心できた」という声が見られます。",
  },
  {
    title: "郵送ファクタリングが便利",
    detail:
      "「オンラインに加えて郵送でも手続きできるのが助かった」「パソコンが苦手なのでFAXと郵送で対応してもらえて助かった」という口コミがあり、IT操作に不慣れな方にも配慮されています。",
  },
];

const badReviews = [
  {
    title: "繁忙期は対応が遅れることがある",
    detail:
      "「月末など繁忙期は電話がつながりにくかった」「即日入金を期待していたが翌日になった」という声があります。申込が集中する時期は対応に遅れが生じるケースがあるようです。",
  },
  {
    title: "想定より手続きに時間がかかる場合がある",
    detail:
      "「簡単に済むと思っていたが、書類確認に時間がかかった」「郵送対応を選んだら入金まで数日かかった」という声があります。郵送の場合は配送にかかる日数も考慮が必要です。",
  },
  {
    title: "対面相談の拠点が限られる",
    detail:
      "「直接相談したかったが近くに拠点がなかった」という声があります。対面での相談は東京の事務所が中心のため、地方在住の方はオンラインまたは郵送での対応が中心となります。",
  },
];

const merits = [
  {
    title: "一般社団法人（非営利法人）の運営で安心",
    description:
      "営利を目的としない一般社団法人が運営しているため、利益最大化のための高額手数料を請求されるリスクが低いです。中小企業の資金繰り支援を目的とした組織であり、事業者に寄り添ったサービスが期待できます。",
  },
  {
    title: "業界最高水準の審査通過率95%",
    description:
      "公式発表の審査通過率95%は業界でもトップクラスの水準です。中小企業の資金繰りを支援するという設立趣旨から、柔軟な審査が行われており、他社で審査落ちした案件でも対応可能なケースがあります。",
  },
  {
    title: "手数料1.5〜10%の低水準",
    description:
      "手数料の上限が10%に設定されており、一般的な2社間ファクタリングの相場（8〜18%）と比較して低水準です。非営利法人ならではの良心的な手数料体系が魅力です。",
  },
  {
    title: "郵送ファクタリングに対応",
    description:
      "オンラインだけでなく、FAXや郵送でも手続きが可能です。パソコンやスマートフォンの操作に不慣れな方でも安心して利用できます。高齢の経営者や地方の事業者にとって利便性の高いサービスです。",
  },
];

const demerits = [
  {
    title: "繁忙期の対応遅延",
    description:
      "月末・月初など申込が集中する時期は、電話がつながりにくい、審査や入金に時間がかかるといった対応遅延が発生するケースがあります。急ぎの場合は繁忙期を避けるか、早めに申し込むことが推奨されます。",
  },
  {
    title: "郵送対応は入金まで時間がかかる",
    description:
      "郵送でのやり取りを選択した場合、書類の配送に数日かかるため、即日入金は難しくなります。急ぎの資金需要がある場合はオンラインでの申込を選択することをおすすめします。",
  },
  {
    title: "対面拠点が東京中心",
    description:
      "対面での相談は東京の事務所が中心となるため、地方在住の方は直接訪問しての相談が難しい場合があります。ただし、オンライン・電話・郵送での対応は全国で利用可能です。",
  },
];

const steps = [
  { step: "1", title: "お問い合わせ", description: "電話・メール・Webフォーム・FAXで問い合わせ。郵送対応も可能です。" },
  { step: "2", title: "必要書類の提出", description: "請求書・通帳コピー・本人確認書類等をオンラインまたは郵送で提出。" },
  { step: "3", title: "審査", description: "審査通過率95%の柔軟な審査を実施。売掛先の信用調査を行います。" },
  { step: "4", title: "契約・入金", description: "契約締結後、最短即日で入金。郵送の場合は数日程度かかります。" },
];

const faqs = [
  {
    question: "日本中小企業金融サポート機構は本当に非営利ですか？",
    answer:
      "はい、一般社団法人として設立されている非営利法人です。中小企業の資金繰り支援を目的として活動しており、株式会社のように株主への利益配当を目的とした運営は行われていません。ただし、事業運営に必要な費用は手数料から賄われています。",
  },
  {
    question: "審査通過率95%は本当ですか？",
    answer:
      "95%は公式サイトで発表されている数値です。中小企業の資金繰り支援という設立趣旨から、柔軟な審査基準が設けられているとされています。ただし、全ての案件が通るわけではなく、売掛先の信用状況によっては審査落ちするケースもあります。",
  },
  {
    question: "郵送でのファクタリングはどのように進みますか？",
    answer:
      "まず電話やFAXで問い合わせ、必要書類を郵送で送付します。書類到着後に審査が行われ、契約書類も郵送でやり取りします。オンラインに比べて数日程度余分に時間がかかりますが、IT機器の操作が不慣れな方でも利用できます。",
  },
  {
    question: "個人事業主でも利用できますか？",
    answer:
      "はい、法人だけでなく個人事業主も利用可能です。フリーランスの方でも、法人からの売掛金があれば利用対象となります。中小企業全般の資金繰り支援を目的としているため、事業規模を問わず利用できます。",
  },
  {
    question: "即日入金は可能ですか？",
    answer:
      "オンラインで申込み、午前中に必要書類が全て揃っている場合は即日入金が可能です。ただし、繁忙期や書類の確認に時間がかかる場合は翌営業日以降になることがあります。郵送対応の場合は即日入金は難しくなります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "日本中小企業金融サポート機構の口コミ・評判｜非営利法人のファクタリングを検証",
  description:
    "日本中小企業金融サポート機構の口コミ・評判を徹底調査。非営利法人のファクタリングを検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/support-org/",
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
  { name: "日本中小企業金融サポート機構", fee: "1.5%〜10%", speed: "最短即日", amount: "制限なし", passRate: "95%" },
  { name: "アクセルファクター", fee: "0.5%〜", speed: "最短即日", amount: "30万〜1億円", passRate: "93.3%" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", passRate: "非公開" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", passRate: "非公開" },
];

/* ── Component ────────────────────────────────────── */

export default function SupportOrgReviewPage() {
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
          { label: "日本中小企業金融サポート機構" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            日本中小企業金融サポート機構の
            <br className="hidden md:block" />
            口コミ・評判を検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            審査通過率95%（公式）、手数料1.5〜10%の一般社団法人が運営するファクタリング「日本中小企業金融サポート機構」の口コミ・評判を徹底調査します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. 日本中小企業金融サポート機構の基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. メリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. デメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            日本中小企業金融サポート機構の基本情報
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
            日本中小企業金融サポート機構の概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            日本中小企業金融サポート機構は、一般社団法人として設立された非営利法人が運営するファクタリングサービスです。中小企業の資金繰り支援を目的とした組織であり、営利企業が運営するファクタリング会社とは異なる立場からサービスを提供しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            審査通過率95%（公式発表）と業界でもトップクラスの通過率を誇り、中小企業の資金調達をより広く支援する姿勢が表れています。手数料も1.5〜10%と低水準で、非営利法人ならではの良心的な料金体系です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            オンラインだけでなくFAX・郵送でも手続き可能な点は、IT操作に不慣れな経営者にとって大きなメリットです。全国の中小企業を支援対象としており、東京の事務所への来店が難しい地方の事業者でも、郵送やオンラインで利用できます。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">日本中小企業金融サポート機構の3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>一般社団法人（非営利法人）運営による安心感と良心的な手数料</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>審査通過率95%の柔軟な審査基準</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>オンライン・FAX・郵送の多様な申込手段</span>
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
            日本中小企業金融サポート機構のメリット4つ
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
            日本中小企業金融サポート機構のデメリット3つ
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
            利用の流れ
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
            日本中小企業金融サポート機構が活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">ファクタリング会社に不安を感じる場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                民間のファクタリング会社に対して「怪しいのではないか」という不安がある方にとって、非営利の一般社団法人が運営するサービスは安心材料になります。利益追求が目的ではないため、利用者に不利な条件を提示されるリスクが低いと考えられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">IT操作が苦手な場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                パソコンやスマートフォンの操作に不慣れな経営者でも、FAXや郵送で手続きができます。電話での丁寧なサポートもあるため、オンライン手続きに不安がある方でも安心して利用できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">他社で審査に通らなかった場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                審査通過率95%と業界トップクラスの通過率のため、他社で審査に落ちた案件でも対応可能な場合があります。中小企業支援を目的とした組織のため、資金繰りに困っている事業者に寄り添った審査が期待できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">資金調達と経営相談を同時にしたい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                一般社団法人として中小企業の経営支援にも取り組んでいるため、ファクタリングの利用だけでなく、資金繰り全般の相談ができる可能性があります。単発の資金調達だけでなく、経営改善のアドバイスも求めたい方に適しています。
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
                  <span>非営利法人の安心感を求める方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>他社で審査に落ちた経験がある方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>IT操作に不慣れで郵送対応を希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手数料の安さを重視する方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>繁忙期でも確実に即日入金が必要な方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>対面相談を希望する地方在住の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>スピードを最優先する方</span>
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

        {/* ── 利用方法の選び方 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            申込方法の選び方（オンライン・電話・郵送）
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            日本中小企業金融サポート機構は、オンライン・電話・FAX・郵送と多様な申込方法に対応しています。状況に応じた最適な方法を選びましょう。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">申込方法</th>
                  <th className="px-4 py-3 text-left font-semibold">入金までの目安</th>
                  <th className="px-4 py-3 text-left font-semibold">おすすめの方</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-section-bg">
                  <td className="px-4 py-3 font-semibold">オンライン</td>
                  <td className="px-4 py-3">最短即日</td>
                  <td className="px-4 py-3 text-text-light">急ぎの方、IT操作に慣れた方</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold">電話</td>
                  <td className="px-4 py-3">最短即日〜翌営業日</td>
                  <td className="px-4 py-3 text-text-light">相談しながら進めたい方</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="px-4 py-3 font-semibold">FAX</td>
                  <td className="px-4 py-3">翌営業日〜2営業日</td>
                  <td className="px-4 py-3 text-text-light">パソコンが苦手でFAXがある方</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold">郵送</td>
                  <td className="px-4 py-3">3〜5営業日</td>
                  <td className="px-4 py-3 text-text-light">IT操作が苦手で時間に余裕がある方</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            急ぎの資金需要がある場合はオンラインまたは電話がおすすめです。郵送の場合は配送にかかる日数も含めて計画的に申し込みましょう。初めての利用で不安がある方は、まず電話で相談してから、オンラインまたは郵送で書類を提出する方法が安心です。
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

        {/* ── 非営利法人の特徴 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            非営利法人が運営するメリットと注意点
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            日本中小企業金融サポート機構は一般社団法人（非営利法人）として運営されています。この点について、メリットと注意点を整理します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">非営利法人のメリット</p>
              <p className="text-sm leading-relaxed text-text-light">
                一般社団法人は株主への配当義務がなく、事業で得た収益を利益として分配することを目的としません。そのため、手数料を必要最低限に抑えたサービス提供が期待できます。実際に手数料は1.5〜10%と業界平均を下回る水準に設定されています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">中小企業支援という設立趣旨</p>
              <p className="text-sm leading-relaxed text-text-light">
                中小企業の資金繰り支援を設立趣旨としているため、営利企業よりも利用者寄りのサービス設計がなされていると考えられます。審査通過率95%の高さも、より多くの中小企業を支援するという方針の表れといえます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">注意すべき点</p>
              <p className="text-sm leading-relaxed text-text-light">
                非営利法人であっても事業運営に必要なコストは発生するため、手数料が無料になるわけではありません。また、非営利だからといって全ての面でサービスが優れているとは限らず、入金スピードやオンライン対応など、営利企業の方が優れている面もあります。サービスの特性を理解した上で利用することが重要です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            日本中小企業金融サポート機構の総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            日本中小企業金融サポート機構は、一般社団法人という非営利の運営形態で安心感があり、審査通過率95%・手数料1.5〜10%と利用者にとって有利な条件を提供するファクタリングサービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特に、民間のファクタリング会社に対して不安を感じる方や、他社で審査に落ちた経験がある方にとって、信頼できる選択肢となっています。郵送ファクタリングにも対応しており、IT操作に不慣れな方でも利用しやすい点も評価できます。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、繁忙期の対応遅延や郵送の場合の入金日数の長さは注意が必要です。スピードを最優先する場合は他社との比較検討が必要ですが、安心感と手数料の安さを重視する方にはおすすめのサービスです。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            日本中小企業金融サポート機構の無料相談はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            審査通過率95%。非営利法人が運営する安心のファクタリングサービスに無料で相談できます。
          </p>
          <a
            href="https://chushokigyo-support.or.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料相談
          </a>
        </section>

        {/* ── 他のファクタリングサービスとの使い分け ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            状況別・ファクタリングサービスの使い分け
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            日本中小企業金融サポート機構と他社のサービスを、状況に応じて使い分けるガイドです。
          </p>
          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="text-sm"><span className="font-semibold text-primary">安心感重視なら →</span> <span className="text-text-light">日本中小企業金融サポート機構（非営利法人の安心感）</span></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="text-sm"><span className="font-semibold text-primary">スピード重視なら →</span> <span className="text-text-light">ビートレーディング（最短2時間）/ ペイトナー（最短10分）</span></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="text-sm"><span className="font-semibold text-primary">手数料重視なら →</span> <span className="text-text-light">OLTA（2〜9%）/ QuQuMo（1〜14.8%）</span></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="text-sm"><span className="font-semibold text-primary">審査に不安があるなら →</span> <span className="text-text-light">日本中小企業金融サポート機構（95%）/ アクセルファクター（93.3%）</span></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="text-sm"><span className="font-semibold text-primary">土日祝日対応なら →</span> <span className="text-text-light">ラボル（24時間365日対応）</span></p>
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
              href="/reviews/accelfactor/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">審査通過率93.3%の実力を検証</p>
            </Link>
            <Link
              href="/reviews/betrading/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">累計9.1万社の大手ファクタリング会社を検証</p>
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
