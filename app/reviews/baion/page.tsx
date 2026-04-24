import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "バイオン(AIファクタリング)の口コミ・評判｜AI審査で即日入金を検証",
  description:
    "バイオン(BAION)の口コミ・評判を徹底調査。AI審査24時間365日対応、最短60分入金、オンライン完結のファクタリングサービスを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/baion/",
  },
  openGraph: {
    title:
      "バイオン(AIファクタリング)の口コミ・評判｜AI審査で即日入金を検証",
    description:
      "バイオンの口コミ・評判を徹底調査。AI審査で即日入金のファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/baion/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "10%〜" },
  { label: "入金スピード", value: "最短60分" },
  { label: "買取可能額", value: "5万円〜" },
  { label: "対象", value: "法人・個人事業主・フリーランス" },
  { label: "オンライン対応", value: "◎（完全オンライン完結）" },
  { label: "審査方式", value: "AI審査（24時間365日対応）" },
  { label: "契約方式", value: "2社間ファクタリング" },
  { label: "運営会社", value: "株式会社バイオン" },
];

const goodReviews = [
  {
    title: "24時間365日いつでも申込できる",
    label: "飲食業の経営者",
    detail:
      "AI審査を採用しているため、深夜や土日祝日でも申込みと審査が可能という点が高く評価されています。平日の営業時間内に対応が難しい事業者にとって、時間を選ばずに利用できる点が大きなメリットとして挙げられています。",
  },
  {
    title: "最短60分で入金された",
    label: "Web制作フリーランスの利用者",
    detail:
      "申込から最短60分で入金されるスピード感が好評です。AI審査のため人手を介さず迅速に審査が完了するため、急ぎの資金調達に対応できたという声が多く見られます。",
  },
  {
    title: "必要書類が少なくて楽",
    label: "個人事業主の利用者",
    detail:
      "請求書と身分証明書があれば申込みできるため、決算書や登記簿謄本などの準備が不要で手軽に利用できるという声があります。書類準備の手間が最小限で済む点がフリーランスや個人事業主に支持されています。",
  },
  {
    title: "5万円からの少額対応がありがたい",
    label: "副業フリーランスの利用者",
    detail:
      "買取下限が5万円と非常に低いため、小口の売掛金でも利用できる点が評価されています。他社では10万円以上が条件となることが多い中、少額からの利用に対応している点が副業や小規模事業者に支持されています。",
  },
];

const badReviews = [
  {
    title: "手数料が10%以上と高め",
    label: "IT企業の経営者",
    detail:
      "手数料が10%〜と、OLTA（2〜9%）やPAYTODAY（1〜9.5%）と比較すると高めに設定されているという声があります。利便性やスピードとのトレードオフとして手数料の高さを受け入れるかどうか、慎重に検討する必要があるという指摘があります。",
  },
  {
    title: "AI審査で落ちた理由がわからない",
    label: "建設業の利用者",
    detail:
      "AI審査で審査に通らなかった際、具体的な理由の説明が得られなかったという声があります。AI審査は便利な反面、不透明さがあるため、審査落ちした場合の対処法がわかりにくいという指摘があります。",
  },
  {
    title: "知名度が低く情報が少ない",
    label: "サービス業の利用者",
    detail:
      "大手ファクタリング会社と比較すると口コミや利用者レビューの情報が少なく、初めて利用する際に判断材料が限られるという声があります。実績を確認する手段が少ないことへの不安を指摘する口コミが見られます。",
  },
];

const merits = [
  {
    title: "AI審査で24時間365日対応",
    description:
      "バイオン最大の特徴が、AI審査による24時間365日の対応体制です。平日の営業時間外はもちろん、深夜や土日祝日でも申込・審査が可能です。人手による審査を行うサービスでは営業時間に制限がありますが、バイオンなら時間を気にせずいつでも利用できます。",
  },
  {
    title: "最短60分の高速入金",
    description:
      "AI審査により人手を介さずに審査が完了するため、最短60分での入金を実現しています。緊急の資金需要に対応できるスピード感は、事業運営における安心材料となります。",
  },
  {
    title: "5万円からの業界最小クラスの少額対応",
    description:
      "買取下限5万円は業界でもトップクラスの少額対応です。副業フリーランスや小規模事業者の小口案件でも気軽に利用でき、資金調達の選択肢を大幅に広げてくれます。",
  },
  {
    title: "必要書類が最小限",
    description:
      "請求書と身分証明書という最小限の書類で申込みが可能です。決算書や登記簿謄本、入出金明細などの準備が不要なため、書類準備の手間と時間を大幅に削減できます。",
  },
];

const demerits = [
  {
    title: "手数料10%〜は割高",
    description:
      "手数料が10%以上からの設定は、AI審査型のOLTA（2〜9%）やPAYTODAY（1〜9.5%）と比較すると割高です。24時間365日対応のAI審査という利便性の対価としての手数料設定と考えることもできますが、コスト重視の場合は他社も検討すべきです。",
  },
  {
    title: "3社間ファクタリングに非対応",
    description:
      "バイオンは2社間ファクタリング専門のため、3社間での低手数料ファクタリングは利用できません。取引先の了承を得てさらにコストを下げたい場合は、トップ・マネジメントなどの3社間対応サービスを検討する必要があります。",
  },
  {
    title: "実績・知名度はまだ限定的",
    description:
      "ビートレーディングやOLTAなどの業界大手と比較すると、取引実績や知名度の面ではまだ限定的です。利用者の口コミ情報も少ないため、初回利用時に判断材料が限られる面があります。ただし、AIファクタリングという新しいアプローチで着実にユーザーを獲得しています。",
  },
];

const steps = [
  { step: "1", title: "Web申込", description: "公式サイトから24時間いつでも申込可能。必要情報を入力します。" },
  { step: "2", title: "請求書・身分証のアップロード", description: "請求書と本人確認書類をオンラインでアップロードします。" },
  { step: "3", title: "AI審査", description: "AIが自動で審査を実施。最短数十分で結果が通知されます。" },
  { step: "4", title: "契約・入金", description: "電子契約の締結後、最短60分で指定口座に入金されます。" },
];

const faqs = [
  {
    question: "バイオンの手数料は実際にいくらですか？",
    answer:
      "手数料は10%〜で、売掛先の信用力や売掛金の金額などにより個別に決定されます。最低10%のため、OLTA（2〜9%）やPAYTODAY（1〜9.5%）と比較するとやや高めですが、24時間365日対応のAI審査と最短60分入金の利便性が付加価値として含まれています。",
  },
  {
    question: "バイオンは土日でも利用できますか？",
    answer:
      "はい、バイオンのAI審査は24時間365日対応のため、土日祝日でも申込みと審査が可能です。ただし、入金については銀行の営業時間に依存するため、土日祝日の申込みでは翌営業日の入金になる場合があります。",
  },
  {
    question: "バイオンの審査に必要な書類は何ですか？",
    answer:
      "基本的な必要書類は請求書と本人確認書類（運転免許証など）の2点です。決算書や通帳コピーは原則不要のため、他のファクタリングサービスと比較して書類準備の負担が軽いのが特徴です。",
  },
  {
    question: "バイオンはフリーランスでも利用できますか？",
    answer:
      "はい、法人だけでなくフリーランス・個人事業主も利用可能です。5万円からの少額にも対応しているため、小口案件の多いフリーランスでも気軽に利用できます。",
  },
  {
    question: "バイオンで売掛先にバレることはありますか？",
    answer:
      "いいえ、バイオンは2社間ファクタリングのため、売掛先への通知は一切行われません。利用者とバイオンの間だけで取引が完結するため、取引先に知られることなく資金調達が可能です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "バイオン(AIファクタリング)の口コミ・評判｜AI審査で即日入金を検証",
  description:
    "バイオンの口コミ・評判を徹底調査。AI審査で即日入金のファクタリングを検証。",
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
    "@id": "https://factoring-partner.pages.dev/reviews/baion/",
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
    { "@type": "ListItem", position: 3, name: "バイオン" },
  ],
};

const comparisonData = [
  { name: "バイオン", fee: "10%〜", speed: "最短60分", amount: "5万円〜", online: "◎" },
  { name: "PAYTODAY", fee: "1%〜9.5%", speed: "最短30分", amount: "10万円〜上限なし", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
  { name: "ペイトナー", fee: "一律10%", speed: "最短10分", amount: "1万〜300万円", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function BaionReviewPage() {
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
          { label: "バイオン" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            バイオン(AIファクタリング)の口コミ・評判
            <br className="hidden md:block" />
            AI審査で即日入金を検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            AI審査24時間365日対応・最短60分入金の「バイオン」の口コミ・評判を徹底調査。オンライン完結のAIファクタリングを検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. バイオンの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. バイオンのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. バイオンのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            バイオンの基本情報
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
            バイオンの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            バイオン（BAION）は、株式会社バイオンが運営するAI審査型のファクタリングサービスです。最大の特徴は、AI審査を活用した24時間365日の対応体制で、深夜や土日祝日でも申込・審査が可能です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            最短60分での入金を実現しており、急ぎの資金調達に対応できます。完全オンライン完結型で来店は一切不要。法人だけでなくフリーランスや個人事業主にも対応しており、5万円からの少額利用も可能です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            必要書類が請求書と身分証明書の2点と最小限で、書類準備の手間が少ないのも利点です。AIによる自動審査のため、人的バイアスがなく一貫した基準で審査が行われます。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">バイオンの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>AI審査で24時間365日いつでも利用可能</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>最短60分入金の高速対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>5万円からの業界最少クラスの少額対応</span>
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
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://minhyo.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">みん評</a></p>
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
            バイオンのメリット4つ
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
            バイオンのデメリット3つ
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
            バイオンの利用の流れ
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

        {/* ── AI審査の特徴 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            バイオンのAI審査の特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            バイオンが採用するAI審査は、24時間365日稼働する完全自動の審査システムです。人手による審査と異なり、営業時間に制限されない点が最大の特徴です。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">24時間365日の審査体制</p>
              <p className="text-sm leading-relaxed text-text-light">
                多くのファクタリングサービスは平日の営業時間内のみ審査対応ですが、バイオンのAI審査は曜日や時間帯を問わず稼働しています。深夜に突然の資金需要が発生した場合でも、すぐに申込・審査を進められます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">他社のAI審査との比較</p>
              <p className="text-sm leading-relaxed text-text-light">
                同じくAI審査を採用するOLTAやPAYTODAYは、AI審査自体はあっても入金は平日営業時間内に限られるケースが多いです。バイオンは審査だけでなく契約プロセスも含めて24時間対応としている点が差別化ポイントです。ただし、銀行振込は銀行営業時間に依存します。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">最小限の必要書類</p>
              <p className="text-sm leading-relaxed text-text-light">
                バイオンのAI審査は請求書と身分証明書の2点で審査可能です。OLTA（請求書・入出金明細・決算書）やビートレーディング（請求書・通帳コピー・身分証明書・決算書）と比較すると、圧倒的に少ない書類で申込みできます。
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
                  <span>土日祝日や深夜に資金調達が必要な方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>書類準備を最小限にしたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>5万円程度の少額から利用したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>フリーランス・個人事業主の方</span>
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
                  <span>業界大手の実績を重視する方</span>
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

        {/* ── 利用シーン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            バイオンが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">金曜夜に月曜の支払いが必要になった場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                週末に急な支払い需要が発生した場合、通常のファクタリング会社は営業時間外で対応できません。バイオンの24時間365日対応なら、金曜夜や土日でも申込・審査を進められるため、翌営業日の朝一番での入金を目指すことが可能です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">書類準備の手間を最小限にしたい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                決算書や通帳コピーの準備が面倒で、できるだけ少ない書類で申込みたい場合にバイオンが適しています。請求書と身分証明書の2点だけで申込みできるため、書類準備に時間をかけられない忙しい事業者に最適です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">少額の売掛金を現金化したい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                5万円からの少額対応のため、副業フリーランスの小口案件や、少額の経費の立替払いにも活用できます。他社の最低買取額が10万円以上の中、5万円からという低いハードルは小規模事業者にとって大きなメリットです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">対面や電話が苦手な場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                完全オンライン・AI審査のため、人と話す必要がありません。対面面談や電話が苦手な方でも、Webのフォーム入力と書類アップロードだけで全ての手続きが完了します。
              </p>
            </div>
          </div>
        </section>

        {/* ── 利用前の準備 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            バイオンを利用する前の準備
          </h2>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-semibold text-text-main">必要書類（たった2点）</p>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">1</span>
                <span>請求書（売掛金を証明するもの・PDF/画像可）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">2</span>
                <span>本人確認書類（運転免許証・マイナンバーカード等）</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            この2点さえあれば申込み可能です。決算書・通帳コピー・登記簿謄本などは原則不要のため、他のファクタリングサービスと比較して圧倒的に書類準備の手間が少ないです。スマートフォンで請求書を撮影するだけでも提出可能なため、手軽さは業界トップクラスです。
          </p>
        </section>

        {/* ── 他社との違い ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            バイオンと他のAI審査サービスの違い
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">バイオン vs PAYTODAY</p>
              <p className="text-sm leading-relaxed text-text-light">
                PAYTODAYは手数料1〜9.5%とバイオン（10%〜）より大幅に安く、入金速度も最短30分とより高速です。ただしPAYTODAYは平日のみの対応で、書類も多く必要です。手数料重視ならPAYTODAY、24時間対応と書類の手軽さならバイオンという棲み分けがあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">バイオン vs ペイトナー</p>
              <p className="text-sm leading-relaxed text-text-light">
                ペイトナーは手数料一律10%・最短10分入金で、スピードと料金のシンプルさに優れています。バイオンは手数料10%〜で同水準ですが、買取下限が5万円とペイトナー（1万円〜）より高いです。ただしペイトナーはフリーランス限定に対し、バイオンは法人も利用可能です。
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

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            バイオンの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            バイオンは、AI審査による24時間365日対応と最短60分入金を実現した、利便性に特化したファクタリングサービスです。必要書類が最小限で、5万円からの少額利用にも対応しており、手軽さでは業界トップクラスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料10%〜はOLTAやPAYTODAYと比較するとやや高めですが、24時間対応の利便性と最小限の書類で済む手軽さを考慮すると、十分な価値があるサービスです。特に営業時間外に急ぎの資金調達が必要な場合には、他のサービスにはない強みがあります。
          </p>
          <p className="leading-relaxed text-text-light">
            手数料を最優先する場合はOLTAやPAYTODAYを、24時間対応と手軽さを重視する場合はバイオンを選ぶという使い分けが合理的です。複数のサービスに見積もりを取り、条件を比較検討することをおすすめします。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            バイオンの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            AI審査24時間365日対応。最短60分入金のAIファクタリング。
          </p>
          <a
            href="https://baion.co.jp/"
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
              <p className="font-semibold text-primary">OLTAの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">AI審査のクラウドファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/paytoday/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">PAYTODAYの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">AI審査で最短30分のファクタリングを検証</p>
            </Link>
            <Link
              href="/articles/easy-screening/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">審査が甘いファクタリング</p>
              <p className="mt-1 text-sm text-text-light">審査通過率が高いサービスを比較</p>
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
