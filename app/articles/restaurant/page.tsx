import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "飲食業向けファクタリング｜クレジットカード債権で資金調達",
  description:
    "飲食業向けファクタリングを徹底解説。クレジットカード売上債権の活用方法、飲食業特有の資金繰り課題、おすすめ会社5選、活用事例、注意点をわかりやすく紹介。仕入れ費や人件費の支払いに悩む飲食店経営者必見です。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/restaurant/",
  },
  openGraph: {
    title: "飲食業向けファクタリング｜クレジットカード債権で資金調達",
    description:
      "飲食業の資金繰り課題をクレジットカード債権ファクタリングで解決。おすすめ会社と活用事例を紹介。",
    url: "https://factoring-partner.pages.dev/articles/restaurant/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "クレジットカード売上の入金サイトが長い（15〜45日）",
    description:
      "飲食業ではクレジットカード決済比率が高く、売上から入金まで15〜45日かかります。特に月末締め・翌月末払いの決済代行会社の場合、最大60日近く現金化できないこともあり、日々の仕入れや人件費の支払いに支障をきたします。",
  },
  {
    title: "食材の仕入れは即日〜短期での支払いが必要",
    description:
      "生鮮食品・食材は品質管理の関係上、頻繁に仕入れる必要があり、卸売市場では即日現金払いが基本です。食材卸業者への支払いサイトも短いため、手元資金の確保が経営上の最重要課題となります。",
  },
  {
    title: "人件費（アルバイト・パート）の支払いが毎月発生",
    description:
      "飲食業は労働集約型のビジネスモデルであり、人件費が売上の30〜40%を占めます。アルバイト・パートスタッフへの給与は毎月確実に支払わなければならず、売上の変動があっても人件費は固定的に発生します。",
  },
  {
    title: "季節変動・天候による売上のブレが大きい",
    description:
      "飲食業は季節・天候・イベントによる売上の変動が大きい業種です。台風や大雪の日は客足が激減し、逆に年末年始やゴールデンウィークは繁忙期になります。売上の予測が難しく、安定した資金繰りの計画が立てにくいという課題があります。",
  },
];

const cardFactoringMerits = [
  {
    title: "クレジットカード売上を即日現金化",
    description:
      "決済代行会社からの入金を待たずに、クレジットカード売上をファクタリング会社に売却して即日現金化できます。入金サイトを15〜45日から最短即日に短縮可能です。",
  },
  {
    title: "審査に通りやすい",
    description:
      "クレジットカード債権は売掛先がカード会社（VISA・Mastercard等）であるため、売掛先の信用力が非常に高く、ファクタリング審査に通りやすいのが特徴です。開業間もない飲食店でも利用できます。",
  },
  {
    title: "手数料が比較的安い",
    description:
      "カード会社は倒産リスクが極めて低いため、手数料率が2%〜8%程度と一般的なファクタリングよりも低くなる傾向にあります。繰り返し利用しやすいコスト水準です。",
  },
  {
    title: "担保・保証人が不要",
    description:
      "銀行融資と異なり、不動産担保や保証人は一切不要です。売上実績（クレジットカード決済データ）があれば利用でき、個人経営の飲食店でも申し込めます。",
  },
];

const faqs = [
  {
    question: "クレジットカード売上のファクタリングとは何ですか？",
    answer:
      "クレジットカード決済の売上債権（カード会社から入金される予定のお金）をファクタリング会社に売却し、入金予定日より前に現金化する資金調達方法です。飲食店では売上の50〜80%がカード決済であるケースも多く、この売上を早期に現金化することで仕入れ費や人件費の支払いに充てられます。",
  },
  {
    question: "飲食業向けファクタリングの手数料はどのくらいですか？",
    answer:
      "クレジットカード債権のファクタリングは手数料2%〜10%程度が相場です。売掛先がカード会社であるため信用力が高く、一般的な売掛債権より手数料が安い傾向にあります。月間のカード売上額が多いほど手数料が下がる場合もあります。",
  },
  {
    question: "個人経営の飲食店でも利用できますか？",
    answer:
      "はい、個人事業主として経営する飲食店でも利用可能です。法人格がなくても、クレジットカード決済の売上実績があればファクタリングを申し込めます。身分証明書、確定申告書、カード決済の売上明細、通帳コピーなどが必要書類となります。",
  },
  {
    question: "テイクアウト専門店でもファクタリングは利用できますか？",
    answer:
      "テイクアウト専門店でもクレジットカード決済やQRコード決済を導入していれば、それらの売上債権をファクタリングに利用できます。ただし現金決済のみの店舗では利用できないため、キャッシュレス決済の導入が前提です。デリバリープラットフォーム（Uber Eatsなど）からの入金予定額を対象にできる場合もあります。",
  },
  {
    question: "ファクタリングの利用がお客様や取引先に知られることはありますか？",
    answer:
      "クレジットカード債権のファクタリングは基本的に2社間取引であり、カード会社やお客様にファクタリングの利用が通知されることはありません。また、一般的な売掛債権のファクタリングでも2社間契約を選択すれば、取引先に知られずに資金調達が可能です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "飲食業向けファクタリング｜クレジットカード債権で資金調達",
  description:
    "飲食業の資金繰り課題をクレジットカード債権ファクタリングで解決。おすすめ会社と活用事例を紹介。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
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
    "@id": "https://factoring-partner.pages.dev/articles/restaurant/",
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
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://factoring-partner.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "コラム",
      item: "https://factoring-partner.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "飲食業向けファクタリング",
      item: "https://factoring-partner.pages.dev/articles/restaurant/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function RestaurantPage() {
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
          { label: "コラム", href: "/articles/" },
          { label: "飲食業向けファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            業種特化ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            飲食業向けファクタリング
            <br className="hidden md:block" />
            クレジットカード債権で資金調達
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            クレジットカード売上の入金遅れ、食材仕入れの即日払い、人件費の支払い──飲食業特有の資金繰り課題をファクタリングで解決する方法を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#challenges" className="hover:underline">
                1. 飲食業の資金繰り課題
              </a>
            </li>
            <li>
              <a href="#card-factoring" className="hover:underline">
                2. クレジットカード債権ファクタリングとは
              </a>
            </li>
            <li>
              <a href="#merits" className="hover:underline">
                3. 飲食業がファクタリングを使う4つのメリット
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:underline">
                4. 利用の流れと必要書類
              </a>
            </li>
            <li>
              <a href="#cases" className="hover:underline">
                5. 飲食業の活用事例3選
              </a>
            </li>
            <li>
              <a href="#caution" className="hover:underline">
                6. 利用時の注意点
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 飲食業の資金繰り課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            飲食業の資金繰り課題
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            飲食業は売上が発生してから実際に現金を受け取るまでのタイムラグが大きく、日常的に資金繰りの課題を抱えやすい業種です。主な課題を4つ解説します。
          </p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-accent/30 bg-orange-50 p-6"
              >
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── クレジットカード債権ファクタリングとは ─── */}
        <section id="card-factoring" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            クレジットカード債権ファクタリングとは
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            クレジットカード債権ファクタリングとは、飲食店がクレジットカード決済で得た売上（カード会社からの入金予定額）をファクタリング会社に売却し、入金日より前に資金化するサービスです。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 font-bold text-primary">通常の入金フローとの違い</h3>
            <div className="space-y-4">
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-1 text-sm font-semibold text-text-main">通常の場合</p>
                <p className="text-sm text-text-light">
                  お客様がカード決済 → カード会社が決済代行会社に入金（15〜30日後）→ 決済代行会社が飲食店に入金（さらに15〜30日後）＝合計30〜60日
                </p>
              </div>
              <div className="rounded-lg bg-teal-50 p-4">
                <p className="mb-1 text-sm font-semibold text-secondary">ファクタリング利用時</p>
                <p className="text-sm text-text-light">
                  お客様がカード決済 → カード売上債権をファクタリング会社に売却 → 最短即日〜3営業日で入金＝大幅な入金サイト短縮
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-text-light">
            売掛先がクレジットカード会社（VISA、Mastercard、JCB等）であるため信用力が非常に高く、通常の売掛債権ファクタリングよりも審査が通りやすく、手数料も低い傾向にあります。飲食業においてカード決済比率が高い店舗ほど、このサービスの恩恵を受けやすくなります。
          </p>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            飲食業がファクタリングを使う4つのメリット
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            飲食業がクレジットカード債権ファクタリングを活用するメリットを具体的に解説します。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {cardFactoringMerits.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-secondary/30 bg-teal-50 p-5"
              >
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            利用の流れと必要書類
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            飲食業でファクタリングを利用する際の一般的な流れを解説します。
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-bold text-text-main">Webまたは電話で問い合わせ</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  ファクタリング会社に問い合わせ、月間のカード売上高、希望する資金化金額、希望入金日を伝えます。複数社に同時に相談して見積もりを比較するのがおすすめです。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  身分証明書（運転免許証等）、カード決済の売上明細（決済代行会社の管理画面データ）、直近3〜6ヶ月の通帳コピー、確定申告書または決算書を提出します。オンラインでアップロードできる会社が大半です。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  ファクタリング会社が売上実績やカード決済データを確認し、買取可能額と手数料率を提示します。カード債権は売掛先の信用力が高いため、審査は早ければ30分〜数時間で完了します。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                4
              </span>
              <div>
                <h3 className="font-bold text-text-main">契約・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  見積もりに同意したら契約を締結し、最短即日で指定口座に入金されます。オンライン完結型の会社なら、来店や対面手続きは不要です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 活用事例 ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            飲食業の活用事例3選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            実際に飲食業でファクタリングを活用して資金繰りを改善したケースを紹介します。
          </p>
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">
                事例1：居酒屋チェーンの食材仕入れ費を確保
              </h3>
              <p className="mb-4 text-xs text-text-light">業種：居酒屋（3店舗経営・法人）</p>
              <div className="space-y-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                  <p className="text-sm text-text-light">
                    3店舗の月間カード売上が合計800万円あるが、入金は翌月末。一方、食材の仕入れは月600万円を月初に支払う必要があり、毎月の資金ギャップに悩んでいた。
                  </p>
                </div>
                <div className="rounded-lg bg-primary-light p-4">
                  <p className="mb-1 text-sm font-semibold text-primary">解決策</p>
                  <p className="text-sm text-text-light">
                    カード売上債権800万円のうち600万円をファクタリングで早期現金化。手数料4%で576万円を月初に調達し、仕入れ費の支払いに充当した。
                  </p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                  <p className="text-sm text-text-light">
                    食材の仕入れ先と良好な関係を維持し、現金払い割引も受けられるようになった。月間の手数料コスト24万円は仕入れ割引で一部相殺できている。
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">
                事例2：カフェの新規出店資金を調達
              </h3>
              <p className="mb-4 text-xs text-text-light">業種：カフェ（個人事業主）</p>
              <div className="space-y-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                  <p className="text-sm text-text-light">
                    好立地の物件が見つかり2号店を出したいが、保証金と内装工事費で350万円が必要。銀行融資は審査に2週間以上かかり、物件の申込期限に間に合わない。
                  </p>
                </div>
                <div className="rounded-lg bg-primary-light p-4">
                  <p className="mb-1 text-sm font-semibold text-primary">解決策</p>
                  <p className="text-sm text-text-light">
                    1号店のカード売上債権（月間200万円）と取引先法人への仕出し弁当の売掛金150万円を合わせてファクタリング。手数料6%で329万円を3日で調達。
                  </p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                  <p className="text-sm text-text-light">
                    物件の申込期限に間に合い、2号店を無事オープン。開業後は2店舗分のカード売上で月間売上が倍増し、経営基盤が安定した。
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">
                事例3：宴会シーズンの運転資金を確保
              </h3>
              <p className="mb-4 text-xs text-text-light">業種：和食レストラン（法人）</p>
              <div className="space-y-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                  <p className="text-sm text-text-light">
                    年末の忘年会シーズンに備え、食材の大量仕入れと臨時スタッフの雇用に追加で200万円が必要。前月の売上は閑散期で通常の7割程度だった。
                  </p>
                </div>
                <div className="rounded-lg bg-primary-light p-4">
                  <p className="mb-1 text-sm font-semibold text-primary">解決策</p>
                  <p className="text-sm text-text-light">
                    法人宴会の予約分の売掛金（請求書ベース）150万円とカード売上債権100万円をファクタリング。手数料5%で237万5千円を即日調達した。
                  </p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                  <p className="text-sm text-text-light">
                    万全の体制で繁忙期を迎え、前年比120%の売上を達成。臨時スタッフの採用もスムーズに行え、顧客満足度の向上にもつながった。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            利用時の注意点
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            飲食業でファクタリングを利用する際に注意すべきポイントをまとめます。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                手数料が利益を圧迫しないか確認する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                飲食業は原価率30〜35%、人件費率30〜40%と利益率が低い業種です。ファクタリング手数料を含めた総コストが利益を上回らないか、事前にシミュレーションしましょう。特に毎月定期的に利用する場合は、年間の手数料総額を計算してください。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                決済代行会社との契約内容を確認する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                決済代行会社との契約によっては、カード売上債権の譲渡が禁止されている場合があります。ファクタリングを利用する前に契約書を確認し、債権譲渡禁止条項がないか確認してください。禁止条項がある場合でも、2020年の民法改正により譲渡は有効とされますが、トラブル回避のため事前確認が重要です。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                恒常的な利用は根本的な改善にならない
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングはあくまで一時的な資金繰り改善手段です。毎月恒常的に利用すると手数料コストが蓄積し、経営を圧迫します。並行して、メニュー改定による原価率の改善、人件費の適正化、売上向上策の実施など、根本的な経営改善にも取り組みましょう。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                複数社から見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリング会社によって手数料率は大きく異なります。最低3社から見積もりを取り、条件を比較しましょう。手数料率だけでなく、事務手数料の有無、入金スピード、契約の柔軟性なども含めて総合的に判断することが大切です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 飲食業に最適な資金調達手段の比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            飲食業の資金調達手段比較
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            飲食業で利用できる主な資金調達手段を比較し、ファクタリングが適しているケースを明確にします。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-left">カード債権ファクタリング</th>
                  <th className="border border-primary p-3 text-left">銀行融資</th>
                  <th className="border border-primary p-3 text-left">ビジネスローン</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">資金化スピード</td>
                  <td className="border border-border p-3">最短即日</td>
                  <td className="border border-border p-3">2週間〜1ヶ月</td>
                  <td className="border border-border p-3">最短即日〜1週間</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">コスト</td>
                  <td className="border border-border p-3">手数料2%〜10%</td>
                  <td className="border border-border p-3">年利1%〜5%</td>
                  <td className="border border-border p-3">年利5%〜18%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">審査難易度</td>
                  <td className="border border-border p-3">低い（カード会社の信用力で審査）</td>
                  <td className="border border-border p-3">高い</td>
                  <td className="border border-border p-3">中程度</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">担保・保証人</td>
                  <td className="border border-border p-3">不要</td>
                  <td className="border border-border p-3">必要な場合あり</td>
                  <td className="border border-border p-3">不要な場合多い</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">信用情報への影響</td>
                  <td className="border border-border p-3">なし</td>
                  <td className="border border-border p-3">あり</td>
                  <td className="border border-border p-3">あり</td>
                </tr>
              </tbody>
            </table>
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
              href="/articles/beauty/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">美容・エステ業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                運転資金の調達方法を解説
              </p>
            </Link>
            <Link
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">
                手数料を安くする5つのコツも紹介
              </p>
            </Link>
            <Link
              href="/articles/for-sole-proprietor/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">個人事業主向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                個人経営の飲食店でも利用可能
              </p>
            </Link>
            <Link
              href="/articles/instant-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">即日入金ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                最短即日で資金調達する方法
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            飲食業に強いファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            カード債権ファクタリングに対応したおすすめ会社を手数料・入金速度で比較。あなたの飲食店に最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
