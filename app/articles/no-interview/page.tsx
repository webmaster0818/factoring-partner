import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "面談なし・電話なしのファクタリング5選｜完全非対面で資金調達",
  description:
    "面談なし・電話なしで完全非対面のファクタリング会社を5社厳選。オンライン完結で来店不要、電話対応も不要なサービスの特徴、メリット・デメリット、利用の流れを詳しく解説。忙しい事業者や対面が苦手な方に最適な資金調達方法です。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/no-interview/",
  },
  openGraph: {
    title: "面談なし・電話なしのファクタリング5選｜完全非対面で資金調達",
    description:
      "完全非対面のファクタリング会社5選。面談も電話も不要で、オンラインだけで資金調達する方法。",
    url: "https://factoring-partner.pages.dev/articles/no-interview/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const companies = [
  {
    name: "ペイトナーファクタリング",
    noInterview: "面談なし・電話なし",
    features: "申し込みから入金まで完全オンライン。電話連絡は一切なく、チャットのみで手続きが完了。AI審査で最短10分入金。個人事業主・フリーランスに特化。初回25万円まで、実績に応じて上限拡大。",
    fee: "一律10%",
    speed: "最短10分",
  },
  {
    name: "ラボル（labol）",
    noInterview: "面談なし・電話なし",
    features: "24時間365日申し込み可能なオンライン完結型。電話・面談は一切不要で、Web上のやり取りのみで完結。1万円から利用可能。フリーランス・個人事業主向け。土日祝日も入金対応。",
    fee: "一律10%",
    speed: "最短60分",
  },
  {
    name: "QuQuMo（ククモ）",
    noInterview: "面談なし",
    features: "完全オンライン型のファクタリング。クラウドサインによる電子契約で対面手続き不要。法人・個人事業主ともに対応。買取額の上限なし。手数料は業界最安水準の1%〜。",
    fee: "1%〜",
    speed: "最短2時間",
  },
  {
    name: "フリーナンス即日払い",
    noInterview: "面談なし",
    features: "GMOグループ運営のフリーランス向けサービス。フリーナンス口座を開設すれば、請求書を登録するだけで即日払いが利用可能。電話対応は任意で、オンラインのみでも手続き完了。",
    fee: "3%〜10%",
    speed: "最短即日",
  },
  {
    name: "ビートレーディング",
    noInterview: "面談なし（オンライン対応可）",
    features: "業界最大手級。オンライン完結で面談不要。法人・個人事業主対応。必要書類は請求書と通帳コピーの2点のみ。高額案件にも対応（上限なし）。全国対応。",
    fee: "2%〜",
    speed: "最短2時間",
  },
];

const meritItems = [
  {
    title: "時間の節約",
    description:
      "面談や電話のために時間を確保する必要がなく、本業の合間にスマホやPCから申し込めます。営業時間を気にせず24時間いつでも手続きを進められる会社も多いです。",
  },
  {
    title: "場所を選ばない",
    description:
      "来店不要なので、地方在住の事業者でも東京のファクタリング会社を利用できます。出張先や自宅からも手続きが完了するため、移動のコストと手間がかかりません。",
  },
  {
    title: "心理的負担の軽減",
    description:
      "資金繰りの相談を対面で行うことに抵抗を感じる事業者は少なくありません。非対面であれば自分のペースで検討・判断でき、営業トークに押されて不利な契約を結ぶリスクも軽減されます。",
  },
  {
    title: "手続きのスピードアップ",
    description:
      "面談の日程調整が不要なため、申し込みから入金までのリードタイムが大幅に短縮されます。最短10分〜2時間で入金まで完了するサービスもあり、緊急時の資金調達に最適です。",
  },
];

const faqs = [
  {
    question: "面談なしのファクタリングは安全ですか？",
    answer:
      "はい、大手や実績のあるファクタリング会社であれば安全です。ペイトナー（東証上場企業のグループ会社）、フリーナンス（GMOグループ）、ビートレーディング（累計買取実績1,300億円以上）など、信頼性の高い会社が面談なしサービスを提供しています。ただし、会社の実在確認や契約書の内容確認は必ず行ってください。",
  },
  {
    question: "電話が一切かかってこないファクタリング会社はありますか？",
    answer:
      "ペイトナーファクタリングとラボルは、電話連絡なしで完全にオンライン（チャット・メール）のみで手続きが完了します。他の会社も面談は不要ですが、審査の過程で確認電話がかかってくることがあります。電話を避けたい場合は、申し込み時に「連絡はメールのみ希望」と伝えましょう。",
  },
  {
    question: "面談なしだと審査が厳しくなりますか？",
    answer:
      "面談なしだからといって審査が厳しくなることはありません。対面での面談がない分、AIやデータベースを活用した効率的な審査を行っています。むしろ、面談なしの会社はテクノロジーに投資しているため、審査精度が高く、スピーディーな判断が可能です。",
  },
  {
    question: "法人でも面談なしのファクタリングを利用できますか？",
    answer:
      "はい、QuQuMoやビートレーディングは法人でも面談なしで利用できます。ペイトナーやラボルは個人事業主・フリーランスに特化しているため、法人は利用できません。法人で面談なしを希望する場合は、QuQuMo・ビートレーディングがおすすめです。",
  },
  {
    question: "面談なしのファクタリングと面談ありのファクタリング、どちらがおすすめですか？",
    answer:
      "状況によります。スピードを重視する場合や少額の利用の場合は面談なしが便利です。一方、高額の売掛金を扱う場合や、資金繰りの相談もしたい場合は、面談ありの会社のほうが手数料交渉や条件のカスタマイズがしやすいメリットがあります。複数社から見積もりを取り、条件を比較するのがベストです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "面談なし・電話なしのファクタリング5選｜完全非対面で資金調達",
  description:
    "完全非対面のファクタリング会社5選。面談も電話も不要で、オンラインだけで資金調達する方法。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/no-interview/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "面談なしファクタリング", item: "https://factoring-partner.pages.dev/articles/no-interview/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function NoInterviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "面談なしファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">比較ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            面談なし・電話なしのファクタリング5選
            <br className="hidden md:block" />
            完全非対面で資金調達
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            来店不要・面談不要・電話不要。オンラインだけで完結するファクタリングサービスを厳選して比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#merits" className="hover:underline">1. 面談なしファクタリングの4つのメリット</a></li>
            <li><a href="#ranking" className="hover:underline">2. 面談なし・電話なしの会社5選</a></li>
            <li><a href="#comparison" className="hover:underline">3. 5社の比較表</a></li>
            <li><a href="#flow" className="hover:underline">4. オンライン完結の利用の流れ</a></li>
            <li><a href="#caution" className="hover:underline">5. 利用時の注意点</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">面談なしファクタリングの4つのメリット</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {meritItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5選 ─── */}
        <section id="ranking" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">面談なし・電話なしの会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">面談不要で利用できるファクタリング会社を5社紹介します。電話連絡の有無も記載しています。</p>
          <div className="space-y-6">
            {companies.map((company, index) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">{company.name}</h3>
                    <p className="mt-1 inline-block rounded bg-teal-50 px-2 py-0.5 text-sm font-semibold text-secondary">{company.noInterview}</p>
                    <p className="mt-2 leading-relaxed text-text-light">{company.features}</p>
                    <div className="mt-4 grid gap-3 rounded-lg bg-section-bg p-4 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold text-text-light">手数料</p>
                        <p className="font-bold text-primary">{company.fee}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">入金スピード</p>
                        <p className="font-bold text-secondary">{company.speed}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">5社の比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">会社名</th>
                  <th className="border border-primary p-3 text-left">面談</th>
                  <th className="border border-primary p-3 text-left">電話</th>
                  <th className="border border-primary p-3 text-left">手数料</th>
                  <th className="border border-primary p-3 text-left">入金速度</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">ペイトナー</td>
                  <td className="border border-border p-3">なし</td>
                  <td className="border border-border p-3">なし</td>
                  <td className="border border-border p-3">一律10%</td>
                  <td className="border border-border p-3">最短10分</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">ラボル</td>
                  <td className="border border-border p-3">なし</td>
                  <td className="border border-border p-3">なし</td>
                  <td className="border border-border p-3">一律10%</td>
                  <td className="border border-border p-3">最短60分</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">QuQuMo</td>
                  <td className="border border-border p-3">なし</td>
                  <td className="border border-border p-3">任意</td>
                  <td className="border border-border p-3">1%〜</td>
                  <td className="border border-border p-3">最短2時間</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">フリーナンス</td>
                  <td className="border border-border p-3">なし</td>
                  <td className="border border-border p-3">任意</td>
                  <td className="border border-border p-3">3%〜10%</td>
                  <td className="border border-border p-3">最短即日</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">ビートレーディング</td>
                  <td className="border border-border p-3">なし</td>
                  <td className="border border-border p-3">任意</td>
                  <td className="border border-border p-3">2%〜</td>
                  <td className="border border-border p-3">最短2時間</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">オンライン完結の利用の流れ</h2>
          <p className="mb-8 leading-relaxed text-text-light">面談なしファクタリングの一般的な利用の流れを紹介します。</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">Web申し込み・アカウント登録</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">公式サイトからアカウントを作成し、基本情報（氏名・住所・事業内容）を入力します。eKYC（オンライン本人確認）でスマホから身分証明書を撮影して送信します。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">請求書・書類のアップロード</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">ファクタリングしたい売掛金の請求書をアップロードします。通帳コピーが必要な会社は、通帳の写真またはインターネットバンキングのスクリーンショットも添付します。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">AI審査・見積もり提示</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">AIまたは審査担当者が請求書の内容、売掛先の信用力を確認し、買取可能額と手数料率を提示します。審査結果はメールまたはマイページで通知されます。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">4</span>
              <div>
                <h3 className="font-bold text-text-main">電子契約・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">見積もりに同意したら、クラウドサインなどの電子契約で契約を締結。契約完了後、最短10分〜即日で指定口座に入金されます。印鑑や紙の書類は一切不要です。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 面談なしが向いている人・向いていない人 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">面談なしが向いている人・向いていない人</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">面談なしが向いている人</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>日中忙しく面談の時間が取れない事業者</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>地方在住で都市部のファクタリング会社に来店できない</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>少額（100万円以下）のファクタリングを利用したい</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>対面での営業トークに圧力を感じたくない</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>ITリテラシーが高くオンライン手続きに抵抗がない</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>何度もファクタリングを利用しており手続きに慣れている</span></li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">面談ありのほうが良い人</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>初めてファクタリングを利用し、仕組みを詳しく聞きたい</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>数百万円以上の高額な売掛金をファクタリングしたい</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>手数料の交渉をしたい（対面のほうが交渉しやすい）</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>資金繰り全体の相談もしたい</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>契約書の内容を担当者と一緒に確認したい</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>対面のほうが安心できるタイプ</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 面談なしファクタリングの安全な利用法 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">面談なしファクタリングの安全な利用法</h2>
          <p className="mb-6 leading-relaxed text-text-light">非対面でファクタリングを安全に利用するためのポイントを解説します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">ステップ1：ファクタリング会社の実在確認</h3>
              <p className="text-sm leading-relaxed text-text-light">
                法人番号検索（国税庁サイト）でファクタリング会社の法人登記を確認します。所在地、代表者名、設立年月日を確認し、Webサイトの情報と一致しているか照合しましょう。口コミサイトや評判も参考にしてください。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">ステップ2：契約書を必ず確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                電子契約であっても、契約書の内容は隅々まで確認してください。手数料率、償還請求権の有無、遅延損害金、解約条件は特に重要です。不明点はチャットやメールで質問し、回答を記録に残しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">ステップ3：複数社で見積もりを比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                面談なしの会社はオンラインで簡単に見積もりが取れます。最低3社から見積もりを取り、手数料率、事務手数料、入金スピードなどの条件を比較しましょう。面談なしの手軽さを活かして効率的に比較検討ができます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">ステップ4：取引履歴を記録する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                非対面取引では、チャットのやり取り、メール、見積書、契約書などを日付順に保存しておきましょう。万が一のトラブル時に証拠として活用できます。ファクタリング会社のマイページのスクリーンショットも残しておくと安心です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用時の注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">会社の実在確認を必ず行う</h3>
              <p className="text-sm leading-relaxed text-text-light">非対面だからこそ、ファクタリング会社の実在確認は重要です。会社のWebサイト、法人登記情報、代表者情報、所在地などを確認し、不審な点がないか確認してください。口コミや評判も参考にしましょう。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">契約書の内容を隅々まで確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">対面であれば担当者に質問できますが、非対面では自分で契約書を確認する必要があります。手数料率、償還請求権の有無、遅延損害金、解約条件などの重要事項を必ず確認してください。不明点はチャットやメールで質問しましょう。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">高額案件は対面相談も検討する</h3>
              <p className="text-sm leading-relaxed text-text-light">数百万円以上の高額な売掛金をファクタリングする場合は、対面で相談できるファクタリング会社も検討しましょう。対面のほうが手数料の交渉がしやすく、条件をカスタマイズしてもらえる可能性が高くなります。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">セキュリティ対策を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">オンラインで請求書や通帳情報を送信するため、ファクタリング会社のセキュリティ対策（SSL暗号化、プライバシーマーク取得など）を確認してください。不審なメールやリンクには注意し、必ず公式サイトからアクセスしましょう。</p>
            </div>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">&#9660;</span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-text-light">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/invoice-only/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">請求書のみファクタリング</p>
              <p className="mt-1 text-sm text-text-light">必要書類が少ない会社5選</p>
            </Link>
            <Link href="/articles/online-factoring/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">オンライン完結ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">来店不要の完全Web完結サービス</p>
            </Link>
            <Link href="/articles/instant-factoring/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">即日入金ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">最短即日で資金調達</p>
            </Link>
            <Link href="/articles/for-freelance/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">フリーランス向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">個人でも使いやすい会社を紹介</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">面談不要のファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            完全非対面で利用できるファクタリング会社を手数料・入金速度で徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
