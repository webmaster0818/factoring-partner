import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "QuQuMo（ククモ）の口コミ・評判｜手数料1%〜のオンラインファクタリングを検証",
  description:
    "QuQuMo（ククモ）の口コミ・評判を徹底調査。手数料1〜14.8%、最短2時間入金、必要書類3点のみのオンラインファクタリングを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/ququmo/",
  },
  openGraph: {
    title:
      "QuQuMo（ククモ）の口コミ・評判｜手数料1%〜のオンラインファクタリングを検証",
    description:
      "QuQuMoの口コミ・評判を徹底調査。手数料1〜14.8%のオンラインファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/ququmo/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "1%〜14.8%" },
  { label: "入金スピード", value: "最短2時間" },
  { label: "買取可能額", value: "制限なし（少額〜大口対応）" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "オンライン対応", value: "◎（完全オンライン完結）" },
  { label: "必要書類", value: "請求書・通帳コピー・本人確認書類の3点" },
  { label: "契約方式", value: "2社間ファクタリングのみ" },
  { label: "運営会社", value: "株式会社アクティブサポート" },
];

const goodReviews = [
  {
    title: "担当者の対応が丁寧",
    detail:
      "「初めてのファクタリングで何もわからなかったが、担当者が一から丁寧に説明してくれた」「質問に対して迅速かつ的確に回答してもらえた」という声が多数見られます。",
  },
  {
    title: "初心者でも安心して利用できた",
    detail:
      "「ファクタリングの仕組みから手数料の計算まで詳しく教えてもらえた」「不安なく手続きを進められた」という口コミがあり、初めての方にも使いやすいサービスとして評価されています。",
  },
  {
    title: "手数料が思ったより低かった",
    detail:
      "「1%〜と表示されていたが、実際の見積もりでも比較的低い手数料を提示された」「他社より安かった」という声があります。売掛先が大手企業の場合、手数料の下限に近い条件が提示されるケースもあるようです。",
  },
  {
    title: "必要書類が3点だけで楽",
    detail:
      "「他社では決算書や登記簿なども求められたが、QuQuMoは3点だけで済んだ」「書類準備の手間が少なくて助かった」という口コミがあります。",
  },
];

const badReviews = [
  {
    title: "土日祝日は対応していない",
    detail:
      "「土曜日に急ぎで必要だったが対応してもらえなかった」「平日のみの対応なので休日に困ることがある」という声があります。土日祝日に資金が必要な場合はラボルなど24時間対応のサービスの方が適しています。",
  },
  {
    title: "審査に時間がかかる場合がある",
    detail:
      "「最短2時間とあるが、実際は半日以上かかった」「書類提出後の審査結果の連絡が遅かった」という声が一部見られます。申込のタイミングや審査の混雑状況によって変動するようです。",
  },
  {
    title: "3社間ファクタリングに対応していない",
    detail:
      "「手数料を抑えるため3社間を希望したが対応していなかった」という声があります。QuQuMoは2社間ファクタリング専門のため、3社間を希望する場合は他社を検討する必要があります。",
  },
];

const merits = [
  {
    title: "手数料1%〜の低水準",
    description:
      "手数料の下限が1%と業界でもトップクラスの低水準です。上限14.8%も業界平均と比較して抑えめの設定。売掛先が大手企業で金額が大きい案件ほど、低い手数料が適用される傾向があります。",
  },
  {
    title: "必要書類がわずか3点",
    description:
      "請求書・通帳コピー・本人確認書類の3点のみで申込可能です。決算書や登記簿謄本などが不要なため、書類準備の手間と時間を大幅に削減できます。",
  },
  {
    title: "完全オンライン完結",
    description:
      "申込から契約・入金まで全てオンラインで完結します。来店や出張対応の必要がなく、全国どこからでも利用可能。弁護士ドットコムの電子契約システム「クラウドサイン」を採用しており、契約の安全性も確保されています。",
  },
  {
    title: "買取可能額に制限なし",
    description:
      "少額から大口まで金額制限なく対応しているため、案件の規模を問わず利用できます。少額の請求書から数千万円の案件まで幅広く対応可能です。",
  },
];

const demerits = [
  {
    title: "土日祝日は利用不可",
    description:
      "営業時間が平日のみのため、土日祝日の申込・入金には対応していません。休日に急な資金需要が発生した場合は対応できないため、休日対応が必要な方は24時間対応のサービスとの併用を検討してください。",
  },
  {
    title: "2社間ファクタリングのみ",
    description:
      "3社間ファクタリングには対応しておらず、2社間のみの取り扱いです。3社間を利用して手数料を抑えたい場合は、ビートレーディングやアクセルファクターなど3社間対応の他社を検討する必要があります。",
  },
  {
    title: "審査時間が変動しやすい",
    description:
      "最短2時間を掲げていますが、実際の審査時間は案件の内容や混雑状況によって大きく変動することがあります。確実に即日入金を受けたい場合は、午前中の早い時間に申し込むのが推奨されます。",
  },
];

const steps = [
  { step: "1", title: "Webから申込", description: "公式サイトのフォームから必要情報を入力して申込みます。" },
  { step: "2", title: "書類3点を提出", description: "請求書・通帳コピー・本人確認書類をアップロードします。" },
  { step: "3", title: "審査・見積もり", description: "提出書類をもとに審査を実施。手数料の見積もりが提示されます。" },
  { step: "4", title: "契約・入金", description: "クラウドサインで電子契約を締結。最短2時間で入金されます。" },
];

const faqs = [
  {
    question: "QuQuMo（ククモ）の手数料は実際にいくらですか？",
    answer:
      "手数料は1〜14.8%の範囲で、売掛先の信用力・売掛金の金額・支払いサイトなどにより決まります。売掛先が大手企業で金額が大きいほど低い手数料が適用される傾向があります。正確な手数料は無料見積もりで確認できます。",
  },
  {
    question: "QuQuMoは個人事業主でも利用できますか？",
    answer:
      "はい、法人だけでなく個人事業主も利用可能です。フリーランスの方でも、法人からの売掛金であれば利用対象となります。必要書類は請求書・通帳コピー・本人確認書類の3点のみです。",
  },
  {
    question: "QuQuMoの審査に落ちることはありますか？",
    answer:
      "はい、審査に落ちるケースはあります。ファクタリングの審査では主に売掛先の信用力が重視されるため、売掛先の経営状況や信用情報によっては審査に通らない場合があります。審査落ちした場合は、他の売掛金で再度申し込むことも検討できます。",
  },
  {
    question: "クラウドサインとは何ですか？",
    answer:
      "クラウドサインは弁護士ドットコム株式会社が提供する電子契約サービスです。紙の契約書ではなく、オンラインで電子署名を行い契約を締結できます。法的効力があり、セキュリティも確保されているため安心して利用できます。",
  },
  {
    question: "QuQuMoで3社間ファクタリングは利用できますか？",
    answer:
      "いいえ、QuQuMoは2社間ファクタリング専門のサービスです。3社間ファクタリングには対応していません。3社間ファクタリングを希望する場合は、ビートレーディングやアクセルファクターなどの他社をご検討ください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "QuQuMo（ククモ）の口コミ・評判｜手数料1%〜のオンラインファクタリングを検証",
  description:
    "QuQuMoの口コミ・評判を徹底調査。手数料1〜14.8%のオンラインファクタリングを検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/ququmo/",
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
  { name: "QuQuMo", fee: "1%〜14.8%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "ビートレーディング", fee: "4%〜12%", speed: "最短2時間", amount: "制限なし", online: "◎" },
  { name: "ペイトナー", fee: "一律10%", speed: "最短10分", amount: "1万〜300万円", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function QuqumoReviewPage() {
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
          { label: "QuQuMo（ククモ）" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            QuQuMo（ククモ）の口コミ・評判
            <br className="hidden md:block" />
            手数料1%〜のオンラインファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            手数料1〜14.8%、最短2時間入金、必要書類わずか3点のオンラインファクタリング「QuQuMo」の口コミ・評判を徹底調査します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. QuQuMoの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. QuQuMoのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. QuQuMoのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            QuQuMoの基本情報
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
            QuQuMoの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            QuQuMo（ククモ）は、株式会社アクティブサポートが運営するオンライン完結型のファクタリングサービスです。手数料1〜14.8%という業界でもトップクラスの低水準を実現しており、コストを重視する事業者から支持されています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            最大の特徴は必要書類の少なさです。請求書・通帳コピー・本人確認書類のわずか3点で申込可能で、決算書や登記簿謄本などの準備が不要です。書類の手間を最小限に抑えながら、最短2時間での入金を実現しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            電子契約には弁護士ドットコム株式会社が提供する「クラウドサイン」を採用しており、契約の法的効力とセキュリティを確保しています。買取可能額に制限がなく、少額から大口まで幅広い案件に対応している点も強みです。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">QuQuMoの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料1〜14.8%の業界トップクラスの低水準</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>必要書類わずか3点で書類準備の手間を最小化</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>クラウドサインによる安全な電子契約</span>
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
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/factor/ququmo" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://growth-partners.co.jp/ququmo-reputation/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">GROWTH PARTNERS</a></p>
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
            QuQuMoのメリット4つ
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
            QuQuMoのデメリット3つ
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
            QuQuMoの利用の流れ
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
            QuQuMoが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料コストを最小限に抑えたい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料の下限が1%と業界でもトップクラスの低水準であるため、売掛先が大手企業で信用力が高い案件では非常に有利な条件が期待できます。コスト重視でファクタリングを利用したい事業者に最適です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">書類準備に時間をかけたくない場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                必要書類がわずか3点のため、決算書や登記簿謄本の準備が不要です。忙しい経営者やフリーランスが、最小限の手間でファクタリングを利用したい場合に適しています。OLTAと比較して書類の手間が大幅に少ないのがメリットです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">初めてファクタリングを利用する場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                口コミで「担当者が丁寧」「初心者でも安心」と評価されているように、ファクタリングが初めての方でも安心して利用できます。不明点は担当者に相談でき、手続きの流れを一から説明してもらえます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">取引先に知られたくない場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                QuQuMoは2社間ファクタリング専門のため、取引先にファクタリングの利用が知られることはありません。取引関係に影響を与えずに資金調達したい場合に安心して利用できます。
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
                  <span>手数料の安さを重視する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>書類準備の手間を最小限にしたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>オンラインで完結させたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>ファクタリング初心者の方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>土日祝日に入金が必要な方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>3社間ファクタリングを希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>対面で相談したい方</span>
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

        {/* ── クラウドサイン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            QuQuMoが採用するクラウドサインとは
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            QuQuMoの電子契約に使われている「クラウドサイン」について、その安全性と利便性を解説します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">クラウドサインの概要</p>
              <p className="text-sm leading-relaxed text-text-light">
                クラウドサインは弁護士ドットコム株式会社（東証グロース上場）が提供する電子契約サービスで、国内シェアNo.1を誇ります。紙の契約書と同等の法的効力を持ち、改ざん防止機能や監査ログ機能を備えています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">利用者にとってのメリット</p>
              <p className="text-sm leading-relaxed text-text-light">
                メールのリンクをクリックするだけで電子署名が完了するため、専用アプリのインストールや複雑な操作は不要です。パソコンでもスマートフォンでも利用でき、契約書のPDFは自動的に保管されるため、紛失のリスクもありません。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">セキュリティの安全性</p>
              <p className="text-sm leading-relaxed text-text-light">
                クラウドサインはISO27001やSOC2 Type2の認証を取得しており、高いセキュリティ基準を満たしています。通信は全て暗号化され、契約書の改ざんを検知するタイムスタンプ機能も搭載しています。ファクタリング契約の機密性を確保する上で信頼性の高い仕組みです。
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

        {/* ── OLTAとの比較分析 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            QuQuMoとOLTAの詳細比較
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            オンライン完結型ファクタリングとして比較されることが多いQuQuMoとOLTA。どちらも2社間ファクタリング専門ですが、いくつかの重要な違いがあります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料の違い</p>
              <p className="text-sm leading-relaxed text-text-light">
                QuQuMoは1〜14.8%、OLTAは2〜9%です。下限はQuQuMoの方が低い（1%）ですが、上限はOLTAの方が低い（9%）です。最悪のケースを想定するとOLTAの方がリスクが低く、最良のケースではQuQuMoの方が有利になる可能性があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">必要書類の違い</p>
              <p className="text-sm leading-relaxed text-text-light">
                QuQuMoは3点（請求書・通帳コピー・本人確認書類）のみですが、OLTAは入出金明細（4ヶ月分）や決算書（2期分）が必要です。書類準備の手間はQuQuMoの方が大幅に少なく、手軽に申し込めます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">入金スピードの違い</p>
              <p className="text-sm leading-relaxed text-text-light">
                QuQuMoは最短2時間、OLTAは最短即日です。入金スピードではQuQuMoの方がやや具体的な時間を提示しています。ただし、実際の入金までの時間は案件によって変動します。
              </p>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-text-light">
            結論として、書類準備の手間を最小限にしたい方や手数料の下限を重視する方はQuQuMo、手数料の上限を抑えたい方や金融機関との提携実績を重視する方はOLTAがおすすめです。
          </p>
        </section>

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            QuQuMoの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            QuQuMoは、手数料1〜14.8%の低水準と必要書類3点のみの手軽さを両立したオンラインファクタリングサービスです。担当者の丁寧な対応も口コミで高く評価されており、ファクタリング初心者にも安心して利用できるサービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            クラウドサインを採用した電子契約や、金額制限なしの柔軟な対応も魅力です。オンラインで完結できるため、全国どこからでも利用可能です。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、土日祝日に対応していない点と3社間ファクタリングに非対応の点は注意が必要です。平日のオンライン完結で手数料を抑えたい方にとっては、有力な選択肢の一つといえます。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            QuQuMoの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料1%〜、最短2時間入金。必要書類3点で始められるオンラインファクタリング。
          </p>
          <a
            href="https://ququmo.net/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料見積もり
          </a>
        </section>

        {/* ── 手数料シミュレーション ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            QuQuMoの手数料シミュレーション
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            QuQuMoの手数料（1〜14.8%）が実際にどの程度のコストになるか、シミュレーションしてみましょう。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">売掛金額</th>
                  <th className="px-4 py-3 text-right font-semibold">手数料1%</th>
                  <th className="px-4 py-3 text-right font-semibold">手数料5%</th>
                  <th className="px-4 py-3 text-right font-semibold">手数料10%</th>
                  <th className="px-4 py-3 text-right font-semibold">手数料14.8%</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-section-bg">
                  <td className="px-4 py-3 font-semibold">100万円</td>
                  <td className="px-4 py-3 text-right">1万円</td>
                  <td className="px-4 py-3 text-right">5万円</td>
                  <td className="px-4 py-3 text-right">10万円</td>
                  <td className="px-4 py-3 text-right">14.8万円</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold">300万円</td>
                  <td className="px-4 py-3 text-right">3万円</td>
                  <td className="px-4 py-3 text-right">15万円</td>
                  <td className="px-4 py-3 text-right">30万円</td>
                  <td className="px-4 py-3 text-right">44.4万円</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="px-4 py-3 font-semibold">500万円</td>
                  <td className="px-4 py-3 text-right">5万円</td>
                  <td className="px-4 py-3 text-right">25万円</td>
                  <td className="px-4 py-3 text-right">50万円</td>
                  <td className="px-4 py-3 text-right">74万円</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold">1,000万円</td>
                  <td className="px-4 py-3 text-right">10万円</td>
                  <td className="px-4 py-3 text-right">50万円</td>
                  <td className="px-4 py-3 text-right">100万円</td>
                  <td className="px-4 py-3 text-right">148万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            このように、手数料率によって実際のコストは大きく変わります。見積もりを取ることで正確な手数料がわかるため、複数のファクタリング会社から相見積もりを取って比較検討することをおすすめします。
          </p>
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
              href="/reviews/betrading/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">累計9.1万社の大手ファクタリング会社を検証</p>
            </Link>
            <Link
              href="/articles/low-fee/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">手数料が安いファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">低手数料のサービスを比較</p>
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
