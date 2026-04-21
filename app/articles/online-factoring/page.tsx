import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "オンライン完結ファクタリング8選｜来店不要で即日資金化",
  description:
    "オンライン完結で来店不要のファクタリング会社8社を徹底比較。メリット・必要書類・電子契約の安全性・AI審査の仕組みまで詳しく解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/online-factoring/",
  },
  openGraph: {
    title:
      "オンライン完結ファクタリング8選｜来店不要で即日資金化",
    description:
      "オンライン完結・来店不要のファクタリング会社8社を比較。メリット・必要書類・AI審査の仕組みを解説。",
    url: "https://factoring-partner.pages.dev/articles/online-factoring/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const top8 = [
  {
    rank: 1,
    name: "ペイトナー",
    fee: "一律10%",
    speed: "最短10分",
    online: "完全オンライン",
    aiReview: "あり",
    eContract: "あり",
    features: ["スマホアプリ対応", "請求書アップロードだけで完結", "1万円〜少額対応"],
    description: "ペイトナーは完全オンライン完結のファクタリングサービスの代表格です。スマホアプリから請求書を撮影・アップロードするだけで、最短10分で入金されます。来店・電話・郵送は一切不要で、全国どこからでも利用できます。",
  },
  {
    rank: 2,
    name: "ラボル",
    fee: "一律10%",
    speed: "最短30分",
    online: "完全オンライン",
    aiReview: "あり",
    eContract: "あり",
    features: ["24時間365日対応", "土日祝も入金可能", "Web完結で書類郵送不要"],
    description: "ラボルは24時間365日オンラインで申し込み・入金が可能なファクタリングサービスです。土日祝日でも最短30分で入金されるため、時間を選ばず利用できます。Web上ですべての手続きが完結し、対面や電話でのやり取りは不要です。",
  },
  {
    rank: 3,
    name: "PAYTODAY",
    fee: "1%〜9.5%",
    speed: "最短30分",
    online: "完全オンライン",
    aiReview: "あり（AI審査）",
    eContract: "あり",
    features: ["AI審査で高速・低コスト", "手数料1%〜9.5%", "IT/Web系企業に人気"],
    description: "PAYTODAYはAI審査を本格的に導入したオンライン完結型ファクタリングです。AIが売掛先の信用力や取引データを自動分析するため、人的コストを抑えながら最短30分でのスピード入金を実現。手数料も1%〜9.5%と業界最安水準です。",
  },
  {
    rank: 4,
    name: "QuQuMo",
    fee: "1%〜14.8%",
    speed: "最短2時間",
    online: "完全オンライン",
    aiReview: "一部あり",
    eContract: "あり（クラウドサイン）",
    features: ["弁護士ドットコム監修の電子契約", "金額制限なし", "法人・個人どちらもOK"],
    description: "QuQuMo（ククモ）は完全オンライン完結のファクタリングサービスで、弁護士ドットコムが提供するクラウドサインによる電子契約を採用。法的な安全性が高く、安心して利用できます。金額の上限・下限がなく、少額から大口まで柔軟に対応します。",
  },
  {
    rank: 5,
    name: "ビートレーディング",
    fee: "2%〜12%",
    speed: "最短2時間",
    online: "オンライン対応",
    aiReview: "なし",
    eContract: "あり",
    features: ["大手の実績と信頼性", "大口案件もオンライン対応", "専任担当者付き"],
    description: "ビートレーディングは大手ファクタリング会社ですが、オンライン完結にも対応しています。従来は対面中心でしたが、現在は申し込みから契約・入金まですべてオンラインで完結可能。大口案件でもオンライン対応してくれるため、地方の法人にも便利です。",
  },
  {
    rank: 6,
    name: "FREENANCE",
    fee: "3%〜10%",
    speed: "最短即日",
    online: "完全オンライン",
    aiReview: "一部あり",
    eContract: "あり",
    features: ["GMOグループ運営", "損害賠償保険が無料付帯", "フリーランス向け総合サービス"],
    description: "FREENANCEはGMOクリエイターズネットワークが運営するフリーランス向けのオンラインプラットフォームです。ファクタリング（即日払い）のほか、損害賠償保険や専用口座など、フリーランスの事業をトータルでサポートします。すべてオンラインで完結します。",
  },
  {
    rank: 7,
    name: "日本中小企業金融サポート機構",
    fee: "1.5%〜10%",
    speed: "最短即日",
    online: "オンライン対応",
    aiReview: "なし",
    eContract: "あり",
    features: ["非営利の一般社団法人", "手数料が安い", "経営コンサルティングも提供"],
    description: "日本中小企業金融サポート機構は一般社団法人が運営するファクタリングサービスで、オンラインでの申し込み・契約に対応しています。非営利法人ならではの低手数料が魅力で、ファクタリングだけでなく経営相談にも応じてくれます。",
  },
  {
    rank: 8,
    name: "アクセルファクター",
    fee: "2%〜20%",
    speed: "最短3時間",
    online: "オンライン対応",
    aiReview: "なし",
    eContract: "あり",
    features: ["審査通過率93.3%", "電話・メール・オンライン対応", "柔軟な審査"],
    description: "アクセルファクターは審査通過率93.3%を誇るファクタリング会社で、オンラインでの申し込みに対応しています。電話やメールでのサポートも充実しており、初めてのファクタリングでも安心して利用できます。審査に不安がある方に特におすすめです。",
  },
];

const onlineMerits = [
  {
    title: "全国どこからでも利用できる",
    description:
      "オンライン完結型なら来店不要のため、地方や離島にいても東京の大手ファクタリング会社のサービスを利用できます。従来は都市部に偏りがちだったファクタリングが、オンライン化により全国の中小企業やフリーランスに開放されました。",
  },
  {
    title: "入金スピードが速い",
    description:
      "オンラインで書類提出・審査・契約がすべて完結するため、対面型よりも手続きが大幅に速くなります。ペイトナーの最短10分入金はオンライン完結だからこそ実現できるスピードです。移動時間や郵送時間がゼロになるのは大きなメリットです。",
  },
  {
    title: "手数料が安い傾向にある",
    description:
      "オンライン完結型のファクタリング会社は、店舗の賃料や営業員の人件費を抑えられるため、その分を手数料の低減に還元できます。PAYTODAYの手数料1%〜9.5%はAI審査とオンライン完結の組み合わせで実現している低コストです。",
  },
  {
    title: "24時間申し込みが可能",
    description:
      "オンラインサービスなら、営業時間外でも申し込みが可能です。ラボルは24時間365日の入金対応もしているため、深夜や週末でも資金化できます。忙しい経営者やフリーランスにとって、時間を選ばず利用できるのは大きな利便性です。",
  },
];

const requiredDocuments = [
  { doc: "請求書", detail: "対象となる売掛金の請求書。PDF・画像データでアップロード", required: "必須" },
  { doc: "本人確認書類", detail: "運転免許証・マイナンバーカードなど。スマホ撮影でOK", required: "必須" },
  { doc: "通帳コピー（入出金明細）", detail: "直近3〜6ヶ月分。ネットバンキングのスクリーンショットでもOK", required: "必須" },
  { doc: "確定申告書・決算書", detail: "直近1〜2期分。サービスによっては不要", required: "一部必要" },
  { doc: "取引先との契約書", detail: "業務委託契約書・発注書など。サービスによっては不要", required: "一部必要" },
];

const aiExplanation = [
  {
    title: "AI審査とは",
    description:
      "AI審査とは、人工知能（AI）が売掛先の信用力や取引データを自動的に分析し、買取の可否と手数料率を判定する仕組みです。従来は担当者が手作業で行っていた審査プロセスをAIが代行することで、審査時間を大幅に短縮し、人件費を抑えた低手数料を実現しています。",
  },
  {
    title: "AI審査のメリット",
    description:
      "AI審査の最大のメリットは「スピード」と「コスト削減」です。AIが自動で信用スコアを算出するため、従来数時間かかっていた審査が数分で完了します。また、人的コストが削減される分、手数料が安くなる傾向があります。PAYTODAYの手数料1%〜9.5%はAI審査の恩恵です。",
  },
  {
    title: "AI審査の精度と安全性",
    description:
      "AI審査は膨大な取引データをもとに学習しているため、人間の審査と比較しても高い精度を持っています。ただし、AIだけでは判断できない複雑なケースでは、人間のスタッフが追加審査を行うハイブリッド方式を採用しているサービスが多いです。審査精度と安全性は、オンラインでも対面でも変わりません。",
  },
];

const faqs = [
  {
    question: "オンライン完結のファクタリングは安全ですか？",
    answer:
      "はい、安全です。QuQuMoは弁護士ドットコム監修のクラウドサインを使用し、ペイトナーやラボルも暗号化通信（SSL/TLS）を採用しています。電子契約は紙の契約書と同等の法的効力があり、改ざんも困難です。むしろ対面型より書類管理が厳格なケースもあり、セキュリティ面でも安心して利用できます。",
  },
  {
    question: "オンライン完結型でも対面での相談はできますか？",
    answer:
      "ビートレーディングやアクセルファクターなど、オンラインと対面の両方に対応している会社もあります。初めてで不安な場合は、電話やビデオ通話で相談できるサービスを選ぶとよいでしょう。ペイトナーやラボルはチャットサポートで質問に対応しています。",
  },
  {
    question: "オンラインで契約するのに必要な環境は？",
    answer:
      "スマートフォンまたはパソコンとインターネット接続があれば利用できます。特別なソフトウェアのインストールは不要で、Webブラウザから申し込みから契約まですべて完結します。ペイトナーはスマホアプリもあり、より手軽に利用できます。",
  },
  {
    question: "地方在住ですが、オンラインファクタリングは利用できますか？",
    answer:
      "はい、全国どこからでも利用できます。オンライン完結型の最大のメリットは地理的な制約がないことです。北海道から沖縄まで、インターネット環境があれば同じサービスを同じ条件で利用できます。対面が必要ないため、交通費や移動時間も不要です。",
  },
  {
    question: "電子契約には法的効力がありますか？",
    answer:
      "はい、電子署名法（2001年施行）により、電子契約は紙の契約書と同等の法的効力を持ちます。QuQuMoが採用するクラウドサインは弁護士ドットコムが提供する電子契約サービスで、多くの大企業でも採用されています。電子署名とタイムスタンプにより、改ざんが不可能な安全な契約が可能です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "オンライン完結ファクタリング8選｜来店不要で即日資金化",
  description:
    "オンライン完結・来店不要のファクタリング会社8社を比較。メリット・必要書類・AI審査の仕組みを解説。",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
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
    "@id":
      "https://factoring-partner.pages.dev/articles/online-factoring/",
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

/* ── Component ────────────────────────────────────── */

export default function OnlineFactoringPage() {
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
          { label: "コラム", href: "/articles/" },
          { label: "オンライン完結ファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            オンライン完結
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            オンライン完結ファクタリング8選
            <br className="hidden md:block" />
            来店不要で即日資金化
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            来店不要・オンライン完結のファクタリング会社8社を徹底比較。全国どこからでも利用できるメリット、必要書類、電子契約の安全性、AI審査の仕組みまで解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#merits" className="hover:underline">
                1. オンライン完結ファクタリングのメリット
              </a>
            </li>
            <li>
              <a href="#ranking" className="hover:underline">
                2. オンライン完結ファクタリング8選
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                3. オンライン対応比較表
              </a>
            </li>
            <li>
              <a href="#documents" className="hover:underline">
                4. 必要書類一覧
              </a>
            </li>
            <li>
              <a href="#e-contract" className="hover:underline">
                5. 電子契約の安全性
              </a>
            </li>
            <li>
              <a href="#ai-review" className="hover:underline">
                6. AI審査の仕組み
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            オンライン完結ファクタリングのメリット
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            オンライン完結型のファクタリングサービスが急速に普及しています。従来の対面型と比べて、どのようなメリットがあるのかを確認しましょう。
          </p>

          <div className="space-y-6">
            {onlineMerits.map((merit, index) => (
              <div
                key={merit.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{merit.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{merit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 8選 ─── */}
        <section id="ranking" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            オンライン完結ファクタリング8選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            オンラインで申し込みから入金まで完結するファクタリング会社8社を厳選しました。それぞれの特徴を確認し、自分に合ったサービスを見つけましょう。
          </p>

          <div className="space-y-8">
            {top8.map((company) => (
              <div
                key={company.name}
                className="rounded-lg border border-border bg-white p-6 md:p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {company.rank}
                  </span>
                  <h3 className="text-xl font-bold text-text-main">{company.name}</h3>
                </div>

                <div className="mb-4 grid gap-3 text-sm md:grid-cols-3">
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">手数料</p>
                    <p className="mt-1 font-bold text-primary">{company.fee}</p>
                  </div>
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">入金スピード</p>
                    <p className="mt-1 font-bold text-primary">{company.speed}</p>
                  </div>
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">オンライン対応</p>
                    <p className="mt-1 font-bold text-secondary">{company.online}</p>
                  </div>
                </div>

                <p className="mb-4 leading-relaxed text-text-light">{company.description}</p>

                <div className="rounded-lg bg-section-bg p-4">
                  <p className="mb-2 text-sm font-bold text-text-main">特徴</p>
                  <ul className="grid gap-1 text-sm text-text-light md:grid-cols-3">
                    {company.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-0.5 text-secondary">&#10003;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            オンライン対応比較表
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            8社のオンライン対応状況を一覧で比較します。「完全オンライン」は申し込みから入金まですべてWeb上で完結、「オンライン対応」は一部電話でのやり取りが必要な場合があります。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold">会社名</th>
                  <th className="px-3 py-3 font-semibold">オンライン</th>
                  <th className="px-3 py-3 font-semibold">AI審査</th>
                  <th className="px-3 py-3 font-semibold">電子契約</th>
                  <th className="px-3 py-3 font-semibold">入金速度</th>
                </tr>
              </thead>
              <tbody>
                {top8.map((company, index) => (
                  <tr
                    key={company.name}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-3 py-3 font-semibold text-text-main whitespace-nowrap">{company.name}</td>
                    <td className="px-3 py-3">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${company.online === "完全オンライン" ? "bg-secondary text-white" : "bg-primary-light text-primary"}`}>
                        {company.online}
                      </span>
                    </td>
                    <td className="px-3 py-3">{company.aiReview}</td>
                    <td className="px-3 py-3">{company.eContract}</td>
                    <td className="px-3 py-3 font-bold text-primary">{company.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 必要書類 ─── */}
        <section id="documents" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            必要書類一覧
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            オンライン完結型ファクタリングでは、書類はすべてデータ（PDF・画像）でアップロードします。郵送は不要です。以下は一般的に必要な書類の一覧です。
          </p>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">書類名</th>
                  <th className="px-4 py-3 font-semibold">詳細</th>
                  <th className="px-4 py-3 font-semibold">必要度</th>
                </tr>
              </thead>
              <tbody>
                {requiredDocuments.map((doc, index) => (
                  <tr
                    key={doc.doc}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-4 py-3 font-semibold text-text-main whitespace-nowrap">{doc.doc}</td>
                    <td className="px-4 py-3 text-text-light">{doc.detail}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${doc.required === "必須" ? "bg-accent text-white" : "bg-section-bg text-text-light"}`}>
                        {doc.required}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 電子契約の安全性 ─── */}
        <section id="e-contract" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            電子契約の安全性
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            「オンラインで契約して本当に安全なのか？」と不安に思う方もいるかもしれませんが、電子契約は法的にも技術的にも安全性が高い仕組みです。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            2001年に施行された<strong className="text-text-main">電子署名法</strong>により、電子署名が付された電子文書は、紙の契約書に手書きの署名・押印がされた場合と同等の法的効力を持ちます。
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">法的効力</h3>
              <p className="text-sm leading-relaxed text-text-light">
                電子署名法により、電子契約は紙の契約書と同等の法的効力を持ちます。裁判での証拠能力も認められています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">改ざん防止</h3>
              <p className="text-sm leading-relaxed text-text-light">
                電子署名とタイムスタンプにより、契約後の改ざんが技術的に不可能になります。紙の契約書より安全とも言えます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">通信の暗号化</h3>
              <p className="text-sm leading-relaxed text-text-light">
                SSL/TLS暗号化通信により、書類のアップロードや個人情報のやり取りは第三者に傍受されません。
              </p>
            </div>
          </div>
        </section>

        {/* ── AI審査 ─── */}
        <section id="ai-review" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            AI審査の仕組み
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            近年のオンラインファクタリングでは、AI（人工知能）を活用した審査が増えています。AI審査がどのように機能し、利用者にどんなメリットがあるのかを解説します。
          </p>

          <div className="space-y-6">
            {aiExplanation.map((item, index) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── オンラインと対面の比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            オンライン完結 vs 対面型 - どちらを選ぶべきか
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            オンライン完結型と対面型のファクタリングには、それぞれ向いているケースがあります。自分の状況に合わせて最適な方法を選びましょう。
          </p>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">オンライン完結型</th>
                  <th className="px-4 py-3 font-semibold">対面型</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">手数料</td>
                  <td className="px-4 py-3">安い傾向（1%〜）</td>
                  <td className="px-4 py-3">やや高い傾向（5%〜）</td>
                </tr>
                <tr className="border-t border-border bg-section-bg">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">入金スピード</td>
                  <td className="px-4 py-3">最短10分〜即日</td>
                  <td className="px-4 py-3">即日〜3営業日</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">対応エリア</td>
                  <td className="px-4 py-3">全国対応</td>
                  <td className="px-4 py-3">店舗周辺エリア</td>
                </tr>
                <tr className="border-t border-border bg-section-bg">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">相談のしやすさ</td>
                  <td className="px-4 py-3">チャット・メール中心</td>
                  <td className="px-4 py-3">対面で詳しく相談可能</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">向いている人</td>
                  <td className="px-4 py-3">手続きを効率化したい人、地方在住者</td>
                  <td className="px-4 py-3">初めてで不安がある人、大口案件</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <p className="mb-2 font-bold text-secondary">オンラインが向いている方</p>
              <ul className="space-y-1 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手続きの手間を最小限にしたい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>地方在住で近くにファクタリング会社がない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>少額の請求書を頻繁に現金化したい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手数料をできるだけ抑えたい</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-primary/30 bg-primary-light p-5">
              <p className="mb-2 font-bold text-primary">対面が向いている方</p>
              <ul className="space-y-1 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>初めてのファクタリングで詳しく相談したい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>数千万円以上の大口案件を扱う</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>複雑な取引形態で個別対応が必要</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">&#10003;</span>
                  <span>担当者の顔が見える取引で安心したい</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-text-light">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/instant-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">即日ファクタリング10選</p>
              <p className="mt-1 text-sm text-text-light">
                最短10分〜当日入金のおすすめ会社を紹介
              </p>
            </Link>
            <Link
              href="/articles/for-freelance/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">フリーランス向けファクタリング5選</p>
              <p className="mt-1 text-sm text-text-light">
                請求書を即日現金化する方法を解説
              </p>
            </Link>
            <Link
              href="/articles/low-fee/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料が安いファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                手数料相場と節約術をランキング形式で紹介
              </p>
            </Link>
            <Link
              href="/articles/easy-screening/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">審査が通りやすいファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                審査基準と通過のコツを解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            オンライン完結のファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            来店不要・オンライン完結のファクタリング会社を手数料・入金スピードで徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
