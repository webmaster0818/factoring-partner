import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ビートレーディングの口コミ・評判｜手数料や審査を利用者の声で検証",
  description:
    "ビートレーディングの口コミ・評判を徹底調査。Google MAP★4.0（145件）、累計取引9.1万社の実績を持つ大手ファクタリング会社の手数料・審査・入金スピードを利用者の声で検証します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/reviews/betrading/",
  },
  openGraph: {
    title:
      "ビートレーディングの口コミ・評判｜手数料や審査を利用者の声で検証",
    description:
      "ビートレーディングの口コミ・評判を徹底調査。累計取引9.1万社・買取額1,824億円の大手ファクタリング会社を検証。",
    url: "https://factoring-partner.pages.dev/reviews/betrading/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "2社間：4%〜12% / 3社間：2%〜9%" },
  { label: "入金スピード", value: "最短2時間" },
  { label: "買取可能額", value: "制限なし（少額〜大口対応）" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "オンライン対応", value: "◎（完全オンライン可）" },
  { label: "累計取引社数", value: "9.1万社以上" },
  { label: "累計買取額", value: "1,824億円" },
  { label: "運営会社", value: "株式会社ビートレーディング" },
];

const goodReviews = [
  {
    title: "入金スピードが早い",
    detail:
      "「申し込みから最短2時間で入金された」「急ぎの資金繰りに対応してもらえた」という声が多数。Google口コミでもスピード対応への評価が目立ちます。",
  },
  {
    title: "手数料が思ったより安い",
    detail:
      "2社間4〜12%、3社間2〜9%と業界相場より低めの手数料設定。「他社と比較して安かった」「見積もりで提示された手数料が想定より低かった」という口コミが見られます。",
  },
  {
    title: "リピート利用者が多い",
    detail:
      "累計取引9.1万社という実績は業界トップクラス。「2回目以降は手数料が下がった」「担当者が前回の状況を覚えてくれていた」など、リピーターからの好意的な声が見られます。",
  },
  {
    title: "担当者の対応が丁寧",
    detail:
      "Google口コミ（★4.0 / 145件）では、担当者の説明が丁寧で初めてでも安心できたという評価が複数あります。",
  },
];

const badReviews = [
  {
    title: "メール返信が遅い場合がある",
    detail:
      "「電話対応は早いがメールの返信が遅いことがあった」という声が散見されます。急ぎの場合は電話での連絡が推奨されます。",
  },
  {
    title: "複数回利用で手数料が上がるケースも",
    detail:
      "リピート利用で手数料が下がるケースが多い一方、「売掛先や金額によっては手数料が上がった」という声もあり、案件ごとに条件が異なる点に注意が必要です。",
  },
  {
    title: "売掛先が個人だと審査に通らない",
    detail:
      "「売掛先が個人事業主のため審査に落ちた」という報告があります。法人間取引の売掛金が対象となるため、個人向け売掛金は審査対象外となるケースがあります。",
  },
];

const merits = [
  {
    title: "業界最大級の実績と信頼性",
    description:
      "累計取引9.1万社・買取額1,824億円は業界トップクラスの実績です。Google MAPでも★4.0（145件）と高評価を獲得しており、大手ならではの安心感があります。豊富な取引実績に裏打ちされたノウハウで、幅広い業種・案件に対応可能です。",
  },
  {
    title: "最短2時間の入金スピード",
    description:
      "オンライン申込に対応しており、必要書類が揃っていれば最短2時間で入金されます。急ぎの資金需要にも迅速に対応できるため、緊急時の資金繰りに適しています。",
  },
  {
    title: "業界相場より低い手数料",
    description:
      "2社間ファクタリングで4〜12%、3社間で2〜9%と、業界平均と比較して低水準の手数料設定です。特に売掛先が大手企業の場合、より有利な条件が期待できます。",
  },
  {
    title: "少額から大口まで金額制限なし",
    description:
      "買取可能額に上限・下限の設定がなく、数万円の少額案件から数億円の大口案件まで柔軟に対応。事業規模を問わず利用しやすい体制が整っています。",
  },
];

const demerits = [
  {
    title: "メール対応にムラがある",
    description:
      "電話対応は迅速な一方、メールでの問い合わせに対する返信が遅れるケースが報告されています。急ぎの連絡は電話を利用するのが確実です。",
  },
  {
    title: "個人事業主の売掛先は審査対象外の可能性",
    description:
      "売掛先が個人事業主の場合、審査に通らないケースがあります。法人間取引の売掛金をメインに取り扱っているため、フリーランス同士の取引などでは利用が難しい場合があります。",
  },
  {
    title: "手数料が案件により変動する",
    description:
      "手数料は売掛先の信用力・金額・支払いサイトによって変動するため、リピート利用でも前回と同条件になるとは限りません。見積もり段階で正確な手数料を確認することが重要です。",
  },
];

const steps = [
  { step: "1", title: "無料相談・申込", description: "Webフォームまたは電話で申込。必要情報を入力します。" },
  { step: "2", title: "必要書類の提出", description: "請求書・通帳コピー・本人確認書類などをオンラインで提出。" },
  { step: "3", title: "審査", description: "提出書類をもとに売掛先の信用調査を実施。最短30分で審査完了。" },
  { step: "4", title: "契約・入金", description: "審査通過後、契約を締結。最短2時間で指定口座に入金されます。" },
];

const faqs = [
  {
    question: "ビートレーディングの手数料は何%ですか？",
    answer:
      "2社間ファクタリングで4〜12%、3社間ファクタリングで2〜9%です。手数料は売掛先の信用力、売掛金の金額、支払いサイトなどにより変動します。見積もりは無料なので、正確な手数料を知りたい場合は見積もり依頼をおすすめします。",
  },
  {
    question: "ビートレーディングの審査は厳しいですか？",
    answer:
      "ファクタリングの審査は利用者ではなく売掛先の信用力が重視されるため、赤字決算や税金滞納があっても利用できるケースがあります。ただし、売掛先が個人事業主の場合は審査に通らない可能性があります。",
  },
  {
    question: "個人事業主でも利用できますか？",
    answer:
      "はい、個人事業主でも利用可能です。ただし、売掛先が法人であることが条件となるケースが多いため、個人間取引の売掛金では利用が難しい場合があります。",
  },
  {
    question: "ビートレーディングの入金はどれくらいかかりますか？",
    answer:
      "必要書類が揃っていれば最短2時間で入金されます。ただし、書類の不備や審査状況によっては翌営業日以降になる場合もあります。急ぎの場合は事前に必要書類を確認し、電話で連絡することをおすすめします。",
  },
  {
    question: "取引先にファクタリングの利用がバレますか？",
    answer:
      "2社間ファクタリングを利用すれば、取引先への通知は不要なため知られることはありません。3社間ファクタリングの場合は取引先の承諾が必要となるため、利用が知られます。秘密性を重視する場合は2社間をおすすめします。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ビートレーディングの口コミ・評判｜手数料や審査を利用者の声で検証",
  description:
    "ビートレーディングの口コミ・評判を徹底調査。累計取引9.1万社・買取額1,824億円の大手ファクタリング会社を検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/betrading/",
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
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "QuQuMo", fee: "1%〜14.8%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "アクセルファクター", fee: "0.5%〜", speed: "最短即日", amount: "30万〜1億円", online: "○" },
];

/* ── Component ────────────────────────────────────── */

export default function BetradingReviewPage() {
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
          { label: "ビートレーディング" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ビートレーディングの口コミ・評判
            <br className="hidden md:block" />
            手数料や審査を利用者の声で検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            累計取引9.1万社・買取額1,824億円の大手ファクタリング会社「ビートレーディング」の口コミ・評判を徹底調査。手数料・審査・入金スピードを利用者の声で検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. ビートレーディングの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. ビートレーディングのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. ビートレーディングのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#fee-tips" className="hover:underline">8. 手数料を安くするコツ</a></li>
            <li><a href="#summary" className="hover:underline">9. 総合評価</a></li>
            <li><a href="#faq" className="hover:underline">10. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ビートレーディングの基本情報
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
            ビートレーディングの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ビートレーディングは、2012年に設立されたファクタリング専業の会社です。東京・大阪・福岡に拠点を持ち、全国対応のファクタリングサービスを提供しています。累計取引社数9.1万社、累計買取額1,824億円という業界トップクラスの実績を誇り、法人から個人事業主まで幅広い事業者に利用されています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            2社間・3社間の両方のファクタリングに対応しており、利用者のニーズに合わせた柔軟なサービスを展開しています。特に注力セクターの制限がなく、建設業・IT業・運送業・医療業・飲食業など、あらゆる業種の売掛債権の買取に対応しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            オンラインでの完結にも対応しており、来店不要でスマートフォンからでも申込が可能です。近年はクラウドサインを活用した電子契約も導入しており、最短2時間での入金を実現しています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">ビートレーディングの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>累計取引9.1万社・買取額1,824億円の業界トップクラスの実績</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>2社間（4〜12%）・3社間（2〜9%）の両方に対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>金額制限なし・全業種対応の柔軟なサービス</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 口コミ傾向調査 ─── */}
        <section id="reviews" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            口コミ傾向調査結果
          </h2>

          {/* Disclaimer */}
          <div className="mb-8 rounded-lg border border-border bg-section-bg p-4 text-xs text-text-light leading-relaxed">
            ※当サイトの口コミ傾向調査は、Google口コミ、みん評、ヒカカク、ファクログ等の公開情報をもとに分析したものです。個別の口コミは投稿者個人の意見であり、当サイトがその内容を保証するものではありません。また、口コミは調査時点のものであり、サービス内容は変更される場合があります。
          </div>

          {/* Google MAP rating */}
          <div className="mb-8 flex items-center gap-4 rounded-lg border border-border bg-white p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">4.0</p>
              <p className="text-sm text-text-light">/ 5.0</p>
            </div>
            <div>
              <p className="font-semibold text-text-main">Google MAP 口コミ評価</p>
              <p className="text-sm text-text-light">145件のレビューに基づく（調査時点）</p>
              <div className="mt-1 flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="text-accent">&#9733;</span>
                ))}
                <span className="text-border">&#9733;</span>
              </div>
            </div>
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
            ビートレーディングのメリット4つ
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
            ビートレーディングのデメリット3つ
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
            ビートレーディングの利用の流れ
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
            ビートレーディングが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">急な支払いが発生した場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                取引先への支払い期日が迫っているが、売掛金の入金がまだ先という場合に最適です。最短2時間で入金されるため、急な支払いにも対応できます。特に建設業や運送業など、外注費の立替が多い業種で重宝されています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">銀行融資の審査が間に合わない場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                銀行融資は審査に数週間〜数ヶ月かかるため、緊急の資金需要には対応できません。ビートレーディングなら即日〜数時間で資金調達が可能なため、銀行融資の審査中のつなぎ資金としても活用できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">大型案件の受注資金が必要な場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                新たな大型案件を受注したいが、着手に必要な仕入れ資金や人件費が不足している場合に活用できます。買取可能額に制限がないため、数千万円規模の資金調達にも対応可能です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">決算期の資金繰り調整</p>
              <p className="text-sm leading-relaxed text-text-light">
                決算期に売掛金を現金化することで、キャッシュフローの改善やバランスシートの見栄えを向上させたい場合にも活用されています。ファクタリングは借入ではないため、負債比率を悪化させずに資金を確保できます。
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
                  <span>大手の実績ある会社を利用したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>即日〜2時間以内の入金が必要な方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>少額から大口まで柔軟に対応してほしい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>3社間ファクタリングで手数料を抑えたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>継続利用で手数料優遇を受けたい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>売掛先が個人事業主の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>メールのみで完結させたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料の固定料金を求める方</span>
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
            ビートレーディングと主要なファクタリング会社を比較しました。手数料・入金速度・買取額・オンライン対応の4項目で比較しています。自社のニーズに合ったサービスを選ぶ参考にしてください。
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

        {/* ── 業種別ガイド ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            業種別・ビートレーディング活用ガイド
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ビートレーディングは業種を問わず利用できますが、特に以下の業種での活用事例が多く報告されています。
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-primary">建設業</p>
              <p className="text-sm leading-relaxed text-text-light">
                工期が長く支払いサイトが60〜90日と長い建設業は、ファクタリングのニーズが特に高い業種です。材料費や外注費の立替資金として活用されています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-primary">運送業</p>
              <p className="text-sm leading-relaxed text-text-light">
                燃料費や車両維持費の支払いが先行する運送業では、売掛金の早期現金化が資金繰りの安定に直結します。毎月の固定費が大きい業種に適しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-primary">IT・Web制作業</p>
              <p className="text-sm leading-relaxed text-text-light">
                プロジェクト完了後の検収・請求・入金までの期間が長い場合、次の案件の着手資金としてファクタリングが活用されています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-primary">製造業</p>
              <p className="text-sm leading-relaxed text-text-light">
                原材料の仕入れ資金や人件費の支払いが先行する製造業では、売掛金の回収までのつなぎ資金としてファクタリングが利用されています。
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

        {/* ── 手数料を安くするコツ ─── */}
        <section id="fee-tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ビートレーディングで手数料を安くするコツ
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ビートレーディングの手数料は案件ごとに決まりますが、以下のポイントを押さえることで手数料を抑えられる可能性があります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">1. 3社間ファクタリングを検討する</p>
              <p className="text-sm leading-relaxed text-text-light">
                3社間ファクタリング（2〜9%）は2社間（4〜12%）より手数料が安い傾向にあります。取引先にファクタリングの利用を知られても問題ない場合は、3社間を検討しましょう。特に大手取引先との関係が良好な場合は、3社間が有利です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">2. 売掛先が大手企業の案件を優先する</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料は売掛先の信用力に大きく影響されます。上場企業や大手企業が売掛先の案件は、信用リスクが低いため手数料が下がる傾向にあります。複数の売掛金がある場合は、信用力の高い売掛先の案件を優先的に利用しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">3. リピート利用で信頼関係を構築する</p>
              <p className="text-sm leading-relaxed text-text-light">
                ビートレーディングでは、リピート利用者に対して手数料の優遇がある場合があります。初回利用で良好な関係を築き、継続利用することで手数料交渉が有利に進むケースがあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">4. 支払いサイトが短い案件を選ぶ</p>
              <p className="text-sm leading-relaxed text-text-light">
                支払い期日までの期間が短い売掛金ほど、ファクタリング会社のリスクが低いため手数料が下がる傾向にあります。30日サイトの案件は60日サイトの案件より有利な条件が提示されやすくなります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">5. 複数社から見積もりを取る</p>
              <p className="text-sm leading-relaxed text-text-light">
                ビートレーディングだけでなく、複数のファクタリング会社から見積もりを取ることで、適正な手数料を把握できます。「他社ではこの手数料を提示された」と伝えることで、交渉材料にもなります。相見積もりは手数料を下げる基本的な方法です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ビートレーディングの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ビートレーディングは、累計取引9.1万社・買取額1,824億円という業界トップクラスの実績を持つファクタリング会社です。Google MAPで★4.0（145件）の高評価を獲得しており、利用者からの信頼も厚いことがわかります。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特に強みとなっているのは、最短2時間の入金スピード、金額制限なしの柔軟な対応、そして2社間・3社間の両方に対応している点です。手数料も2社間4〜12%、3社間2〜9%と業界相場より低めに設定されており、コスト面でも競争力があります。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、メール対応のムラや個人事業主の売掛先では審査が通りにくい点は改善の余地があります。ただし、これらは多くのファクタリング会社に共通する課題でもあり、ビートレーディング固有の問題というわけではありません。
          </p>
          <p className="leading-relaxed text-text-light">
            総合的に見て、実績・手数料・入金スピード・対応の柔軟性のバランスが取れた、信頼性の高いファクタリング会社と評価できます。初めてファクタリングを利用する方から、リピート利用を検討している方まで、幅広い事業者におすすめできるサービスです。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            ビートレーディングの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            最短2時間で入金。累計9.1万社の実績を持つ大手ファクタリング会社に無料で見積もり依頼できます。
          </p>
          <a
            href="https://betrading.jp/"
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
              href="/reviews/olta/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTA（オルタ）の口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">AI審査のクラウドファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/accelfactor/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">審査通過率93.3%の実力を検証</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">49社以上を徹底比較</p>
            </Link>
            <Link
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング手数料ガイド</p>
              <p className="mt-1 text-sm text-text-light">手数料の相場と安くするコツ</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
