import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "請求書買取アプリのおすすめ｜スマホ完結で最短10分入金",
  description:
    "スマホだけで請求書を買い取ってもらえるアプリ・Web完結サービスを比較。ペイトナー（最短10分）・ラボル（24時間365日）・FREENANCE・みんなのファクタリングの手数料と使い方、申し込み前の注意点を解説します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/seikyusho-kaitori-app/",
  },
  openGraph: {
    title:
      "請求書買取アプリのおすすめ｜スマホ完結で最短10分入金",
    description:
      "スマホ完結で請求書を資金化できるサービスを比較。最短10分入金・24時間対応など特徴別に解説します。",
    url: "https://hyogo-shihoushoshi.jp/articles/seikyusho-kaitori-app/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const appServices = [
  {
    name: "ペイトナー",
    href: "/reviews/paytner/",
    fee: "一律10%",
    speed: "最短10分",
    amount: "初回1万〜25万円 / 2回目以降上限300万円",
    target: "フリーランス・個人事業主",
    point:
      "請求書と本人確認書類をアップロードするだけで申し込みが完結し、AI審査により最短10分で入金されます。営業電話がかからない点もスマホ利用者に向いています。初回は25万円までの上限があるため、少額の請求書から試したい人向けです。",
  },
  {
    name: "ラボル",
    href: "/reviews/labol/",
    fee: "一律10%（税込）",
    speed: "最短60分",
    amount: "1万円〜（上限は審査により決定）",
    target: "フリーランス・個人事業主",
    point:
      "土日祝日を含む24時間365日、申込から入金まで対応している点が最大の特徴です。必要書類は請求書と本人確認書類のみで通帳コピーが不要のため、スマホでの申し込みハードルが低いサービスです。週末に急な資金需要が発生したときの選択肢になります。",
  },
  {
    name: "FREENANCE",
    href: "/reviews/freenance/",
    fee: "3%〜10%",
    speed: "最短即日",
    amount: "1万円〜（上限は与信次第）",
    target: "フリーランス・個人事業主",
    point:
      "GMOクリエイターズネットワークが運営するフリーランス向けサービスです。手数料は3%〜10%で、専用のフリーナンス口座を受取先に設定しない場合は一律10%になります（公式サイトにて2026年6月確認）。会員登録で損害賠償保険「あんしん補償」が無料付帯するため、資金化以外のメリットも得られます。",
  },
  {
    name: "みんなのファクタリング",
    href: "/reviews/minnano/",
    fee: "7%〜15%",
    speed: "最短3時間",
    amount: "10万円〜",
    target: "法人・個人事業主",
    point:
      "スマホやPCからオンラインで手続きできるサービスで、法人も対象に含まれる点が上記3社との違いです。買取は10万円からのため、ある程度まとまった請求書を資金化したい個人事業主・小規模法人に向いています。",
  },
];

const steps = [
  {
    step: "STEP1. 請求書を手元に用意する",
    description:
      "取引先に発行済みで、支払い期日前の請求書（PDFまたは画像）を用意します。宛先・金額・支払い期日・取引内容が明記されていることが審査の前提です。あわせて本人確認書類（運転免許証など）もスマホで撮影しておきます。",
  },
  {
    step: "STEP2. アカウント登録・申し込み",
    description:
      "各サービスのサイトまたはアプリからメールアドレスで無料登録し、請求書と本人確認書類をアップロードします。ペイトナーやラボルは入力項目が少なく、申し込み自体は数分で完了します。サービスによっては通帳の入出金明細（スクリーンショット可）を求められます。",
  },
  {
    step: "STEP3. 審査結果と買取条件の確認",
    description:
      "審査では利用者本人よりも売掛先（請求書の宛先）の信用力が重視されます。提示された手数料と入金額を確認し、納得できれば承諾します。金額が想定と違う場合は、この時点で断っても費用はかかりません。",
  },
  {
    step: "STEP4. 入金を受け取る",
    description:
      "承諾後、登録した銀行口座に買取代金が振り込まれます。ペイトナーは最短10分、ラボルは最短60分・24時間365日対応です。その後、売掛先から請求書の代金が入金されたら、期日どおりサービス側へ支払って取引完了です。",
  },
];

const cautions = [
  {
    title: "「アプリ」がなくてもスマホだけで完結するサービスが多い",
    description:
      "「請求書買取アプリ」と検索されますが、実際にはアプリのインストールが不要なWeb完結型のサービスが主流です。スマホのブラウザから申し込み・書類提出・契約・入金確認まで行えるため、アプリの有無で選ぶ必要はありません。本記事では「スマホだけで完結できるか」を基準に紹介しています。",
  },
  {
    title: "少額・スマホ完結型は手数料がやや高めになる",
    description:
      "ペイトナー・ラボルは手数料一律10%で、見積もり交渉の余地はない代わりに金額が明確です。数十万円以上のまとまった請求書なら、2%〜9%のOLTAや1%〜のQuQuMoのようなWeb完結型のほうが手数料を抑えられる可能性があります。金額に応じて使い分けましょう。",
  },
  {
    title: "審査なしをうたうサービスは避ける",
    description:
      "正規の請求書買取（ファクタリング）では、売掛先の信用力や請求書の実在性を必ず審査します。「審査なし」「誰でも買取」をうたう業者は、実質的な貸付（ヤミ金）である危険があります。スマホで手軽に申し込めるからこそ、運営会社の実在性を確認してから利用しましょう。",
  },
  {
    title: "初回は買取上限が低く設定されることがある",
    description:
      "ペイトナーの初回上限は25万円（2回目以降は最大300万円）のように、初回利用時は上限が抑えられるサービスがあります。大きな金額を資金化したい場合は、買取可能額に制限のないサービスを含めて比較してください。",
  },
];

const faqs = [
  {
    question: "請求書買取アプリはどれが一番早く入金されますか？",
    answer:
      "当サイトで公式確認した範囲では、ペイトナーの最短10分が最速クラスです。ラボルは最短60分ですが、土日祝日を含む24時間365日対応しているため、週末や夜間ならラボルが実質的に最速の選択肢になります。いずれも「最短」の表記であり、初回利用や書類不備がある場合は時間がかかることがあります。",
  },
  {
    question: "スマホだけで本当に手続きが完結しますか？",
    answer:
      "本記事で紹介したサービスは、申し込み・書類アップロード・契約・入金確認までスマホで完結できます。必要書類は請求書と本人確認書類が基本で、ラボルは通帳コピーも不要です。対面や郵送の手続きはありません。",
  },
  {
    question: "請求書買取アプリの利用は違法ではありませんか？",
    answer:
      "スマホで完結する請求書買取も、仕組みは法的に認められたファクタリング（債権譲渡）であり、正規の事業者を利用する限り違法ではありません。ただし、買取を装って貸付を行う違法業者も存在するため、分割返済や利息を求められる場合は利用を中止してください。",
  },
  {
    question: "会社員でも請求書買取アプリを使えますか？",
    answer:
      "使えません。請求書買取の対象は、事業として発行した請求書（売掛債権）を持つフリーランス・個人事業主・法人です。会社員の給与を対象とする「給与ファクタリング」は貸金業に該当し、無登録業者の利用は重大なトラブルにつながるため避けてください。",
  },
  {
    question: "手数料以外に費用はかかりますか？",
    answer:
      "本記事で紹介したスマホ完結型サービスは、登録料・月額費用は無料で、利用時の手数料のみが基本です。なお、FREENANCEはフリーナンス口座を受取先に設定するかどうかで手数料（3%〜10%か一律10%か）が変わる点にご注意ください。振込手数料の扱いはサービスにより異なるため、契約前の提示額で確認しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "請求書買取アプリのおすすめ｜スマホ完結で最短10分入金",
  description:
    "スマホ完結で請求書を資金化できるサービスを比較。最短10分入金・24時間対応など特徴別に解説します。",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  author: {
    "@type": "Person",
    name: "ファクタリングパートナー 編集部",
    url: "https://hyogo-shihoushoshi.jp/about/",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://hyogo-shihoushoshi.jp",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://hyogo-shihoushoshi.jp/articles/seikyusho-kaitori-app/",
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

export default function SeikyushoKaitoriAppPage() {
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
          { label: "請求書買取アプリ" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-white">
            スマホ完結
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            請求書買取アプリのおすすめ
            <br className="hidden md:block" />
            スマホ完結で最短10分入金
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            請求書をスマホからアップロードするだけで資金化できるサービスを比較。最短10分入金・土日祝24時間対応など、外出せずに使える4サービスの特徴と注意点を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、手数料・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* 結論ボックス */}
        <div className="mb-12 rounded-lg border border-secondary/30 bg-teal-50 p-6">
          <p className="mb-3 font-bold text-secondary">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-light">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                スピード最優先なら<strong className="text-text-main">ペイトナー（最短10分・手数料一律10%）</strong>、土日祝・夜間なら
                <strong className="text-text-main">ラボル（24時間365日・一律10%税込）</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                「アプリ」のインストールが不要なWeb完結型が主流。スマホのブラウザだけで申し込み〜入金まで進められる
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                これらのサービスの正体はファクタリング（債権譲渡）で、合法的な仕組み
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                まとまった金額なら一律10%型より見積もり型（OLTA 2%〜9%など）が安くなる場合もある
              </span>
            </li>
          </ul>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#about" className="hover:underline">
                1. 請求書買取アプリとは（Web完結型が主流）
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                2. スマホ完結のおすすめサービス4選
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                3. 4サービス比較表
              </a>
            </li>
            <li>
              <a href="#howto" className="hover:underline">
                4. スマホで請求書を資金化する4ステップ
              </a>
            </li>
            <li>
              <a href="#cautions" className="hover:underline">
                5. 申し込み前の注意点4つ
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 請求書買取アプリとは ─── */}
        <section id="about" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            請求書買取アプリとは（Web完結型が主流）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            請求書買取アプリとは、スマホから請求書をアップロードするだけで、支払い期日前の請求書を買い取ってもらい早期に資金化できるサービスの通称です。書類の郵送や対面での面談は不要で、申し込みから入金までオンラインで完結します。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            なお、名前に「アプリ」とありますが、実際にはアプリのインストールを必要としない
            <strong className="text-text-main">Web完結型（ブラウザ完結型）</strong>
            のサービスが主流です。重要なのはアプリの有無ではなく「スマホだけで手続きが終わるか」なので、本記事ではスマホ完結を基準にサービスを選んでいます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            こうしたサービスの正体は、
            <strong className="text-text-main">
              ファクタリング（債権譲渡）と呼ばれる合法的な金融サービス
            </strong>
            です。請求書が表す売掛債権を売却する取引で、借入ではないため負債にならず、信用情報にも影響しません。仕組みの全体像は
            <Link
              href="/articles/what-is-factoring/"
              className="font-medium text-primary underline"
            >
              ファクタリングとは？の解説記事
            </Link>
            を、請求書買取という切り口の基礎知識は
            <Link
              href="/articles/seikyusho-kaitori/"
              className="font-medium text-primary underline"
            >
              請求書買取とは？のガイド
            </Link>
            をご覧ください。
          </p>
        </section>

        {/* ── サービス4選 ─── */}
        <section id="services" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            スマホ完結のおすすめサービス4選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            スマホだけで請求書の買取を申し込めるサービスのうち、当サイトが手数料を公式確認済みの4つを紹介します（手数料はいずれも各社公式サイトにて2026年6月確認）。
          </p>
          <div className="space-y-6">
            {appServices.map((service, index) => (
              <div
                key={service.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-text-main">
                    {service.name}
                  </h3>
                </div>
                <div className="mb-4 grid gap-2 text-sm md:grid-cols-3">
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">手数料</p>
                    <p className="font-semibold text-primary">{service.fee}</p>
                  </div>
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">入金速度</p>
                    <p className="font-semibold text-accent">{service.speed}</p>
                  </div>
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">対象</p>
                    <p className="font-semibold text-primary">{service.target}</p>
                  </div>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-text-light">
                  {service.point}
                </p>
                <Link
                  href={service.href}
                  className="text-sm font-medium text-primary underline"
                >
                  {service.name}の詳しいレビューを見る →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            4サービス比較表
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            手数料は各社公式サイトにて2026年6月に確認した値です。アプリストアの評価やダウンロード数は当サイトでは未確認のため掲載していません。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold">サービス名</th>
                  <th className="px-3 py-3 font-semibold">手数料</th>
                  <th className="px-3 py-3 font-semibold">入金速度</th>
                  <th className="px-3 py-3 font-semibold">買取可能額</th>
                </tr>
              </thead>
              <tbody>
                {appServices.map((service, index) => (
                  <tr
                    key={service.name}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-3 py-3 font-semibold">
                      <Link href={service.href} className="text-primary underline">
                        {service.name}
                      </Link>
                    </td>
                    <td className="px-3 py-3">{service.fee}</td>
                    <td className="px-3 py-3 font-bold text-accent">
                      {service.speed}
                    </td>
                    <td className="px-3 py-3">{service.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※FREENANCEの手数料は、フリーナンス口座を受取先に設定しない場合は一律10%。手数料の考え方そのものを知りたい方は
            <Link
              href="/articles/fee-guide/"
              className="font-medium text-primary underline"
            >
              手数料の相場と計算方法ガイド
            </Link>
            もご覧ください。
          </p>
        </section>

        {/* ── 使い方4ステップ ─── */}
        <section id="howto" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            スマホで請求書を資金化する4ステップ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            どのサービスでも大まかな流れは共通です。事前に流れを知っておくと、審査や入金までの時間を短縮できます。
          </p>
          <div className="space-y-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-lg border border-border bg-white p-5"
              >
                <h3 className="mb-2 font-bold text-primary">{item.step}</h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="cautions" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            申し込み前の注意点4つ
          </h2>
          <div className="space-y-6">
            {cautions.map((caution, index) => (
              <div
                key={caution.title}
                className="rounded-lg border border-accent/30 bg-orange-50 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {caution.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {caution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 関連ツール・データ ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">
              サービス選びに使えるツール・データ
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li>
                <Link href="/diagnosis/" className="font-medium text-primary underline">
                  無料診断（7つの質問・30秒）
                </Link>
                ｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。
              </li>
              <li>
                <Link href="/ranking/" className="font-medium text-primary underline">
                  おすすめファクタリング会社ランキング
                </Link>
                ｜スマホ完結型以外も含めて編集部が厳選した順位で比較できます。
              </li>
              <li>
                <Link href="/simulator/" className="font-medium text-primary underline">
                  手数料シミュレーター
                </Link>
                ｜請求書の金額から手数料・入金額の目安を計算できます。
              </li>
            </ul>
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
              href="/articles/seikyusho-kaitori/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">請求書買取とは？基礎ガイド</p>
              <p className="mt-1 text-sm text-text-light">
                仕組み・手数料相場・サービスの選び方を網羅
              </p>
            </Link>
            <Link
              href="/articles/seikyusho-sakibarai/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">請求書の先払いサービスとは</p>
              <p className="mt-1 text-sm text-text-light">
                「先払い」の実態と給与前払いとの違いを解説
              </p>
            </Link>
            <Link
              href="/articles/online-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">オンライン完結ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                来店不要で資金化できるサービスをさらに広く比較
              </p>
            </Link>
            <Link
              href="/articles/for-freelance/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">フリーランス向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                個人事業主が使いやすいサービスの選び方
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            30秒であなたに合うサービスを絞り込む
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            事業形態・金額・急ぎ度の7つの質問に答えるだけで、スマホ完結型を含む候補からあなたに合う1社を提案します。
          </p>
          <Link href="/diagnosis/" className="btn-cta mt-6 text-base">
            無料診断をはじめる
          </Link>
        </section>
      </div>
    </>
  );
}
