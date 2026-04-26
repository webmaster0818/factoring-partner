import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "美容・エステ業向けファクタリング｜運転資金の調達方法",
  description:
    "美容・エステ業向けファクタリングを徹底解説。クレジットカード売上・法人契約の売掛金を活用した資金調達方法、美容業特有の資金繰り課題、活用事例、注意点をわかりやすく紹介。設備投資や広告費の資金不足に悩むサロン経営者必見です。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/beauty/",
  },
  openGraph: {
    title: "美容・エステ業向けファクタリング｜運転資金の調達方法",
    description:
      "美容・エステ業の資金繰り課題をファクタリングで解決。活用事例と注意点を解説。",
    url: "https://factoring-partner.pages.dev/articles/beauty/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "設備投資・内装費用に多額の初期投資が必要",
    description:
      "美容室・エステサロンの開業や改装には、施術機器・内装工事・家具などの初期投資が数百万〜数千万円必要です。特にエステ業界では高額な美容機器の導入が不可欠であり、リースや分割払いを活用しても月々の支出が経営を圧迫しがちです。",
  },
  {
    title: "カード決済・キャッシュレス決済の入金が遅い",
    description:
      "美容室やエステサロンではカード決済やQRコード決済の利用率が年々増加していますが、入金は15〜45日後になります。施術当日に現金が入らないため、材料費やスタッフの人件費との支払いタイミングにギャップが生じます。",
  },
  {
    title: "広告宣伝費が固定的に発生する",
    description:
      "ホットペッパービューティー等のポータルサイト掲載料、SNS広告費、チラシ制作費など、集客のための広告費が毎月一定額発生します。新規オープンやキャンペーン期間にはさらに増額が必要であり、固定費として経営を圧迫する要因です。",
  },
  {
    title: "スタイリスト・エステティシャンの人件費が高い",
    description:
      "美容業界は技術者の確保が経営の生命線であり、人件費が売上の40〜50%を占めることも珍しくありません。優秀なスタイリストの引き留めには給与水準の維持が不可欠であり、売上が一時的に落ちても人件費を下げにくい構造があります。",
  },
];

const meritItems = [
  {
    title: "カード売上を即日現金化",
    description:
      "クレジットカード売上債権をファクタリングで売却すれば、決済代行会社からの入金を待たずに即日〜3日で現金化できます。材料費の仕入れやスタッフへの給与支払いに充てられます。",
  },
  {
    title: "設備投資のタイミングを逃さない",
    description:
      "人気の美容機器がセール価格で出た場合や、展示会限定の特別価格で購入したい場合に、ファクタリングで迅速に資金を確保できます。設備投資の好機を逃しません。",
  },
  {
    title: "審査に通りやすい",
    description:
      "ファクタリングは売掛先（カード会社や法人顧客）の信用力で審査されるため、開業間もないサロンや赤字経営でも利用可能です。銀行融資が通りにくい個人経営のサロンに最適です。",
  },
  {
    title: "担保・保証人が不要",
    description:
      "美容室やエステサロンが銀行融資を受ける際には保証人を求められるケースがありますが、ファクタリングでは担保も保証人も不要です。売掛債権があれば申し込めます。",
  },
];

const faqs = [
  {
    question: "美容室やエステサロンでもファクタリングを利用できますか？",
    answer:
      "はい、美容室・エステサロン・ネイルサロン・マッサージ店など、美容関連の事業者はファクタリングを利用できます。クレジットカードや電子マネーの売上債権、法人顧客への請求書ベースの売掛金が対象です。個人事業主でも法人でも申し込み可能です。",
  },
  {
    question: "美容業のファクタリング手数料はどのくらいですか？",
    answer:
      "クレジットカード債権のファクタリングは手数料2%〜10%程度が相場です。法人顧客への売掛金の場合は、売掛先の信用力により5%〜15%程度です。複数社から見積もりを取って比較し、最も条件の良い会社を選びましょう。",
  },
  {
    question: "エステサロンの回数券売上はファクタリングの対象ですか？",
    answer:
      "回数券の売上は前受金（サービス未提供分）であるため、通常のファクタリングの対象にはなりにくいです。ファクタリングの対象は「すでに提供したサービスに対する未回収の売掛金」です。ただし、法人契約で月額課金のサービスを提供している場合は、その月額費用の売掛金をファクタリングできます。",
  },
  {
    question: "開業したばかりの美容室でもファクタリングは使えますか？",
    answer:
      "開業直後でも、すでにカード決済の売上実績が数ヶ月分あれば利用できるファクタリング会社があります。ただし、実績が少ない場合は手数料が高くなることがあります。開業時の資金調達は日本政策金融公庫の創業融資なども併せて検討しましょう。",
  },
  {
    question: "お客様にファクタリングの利用が知られることはありますか？",
    answer:
      "2社間ファクタリングを選択すれば、お客様や取引先にファクタリングの利用は通知されません。サロンの信用やブランドイメージに影響を与えずに資金調達が可能です。カード決済の売上をファクタリングする場合も、カード会社やお客様に通知されることは基本的にありません。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "美容・エステ業向けファクタリング｜運転資金の調達方法",
  description:
    "美容・エステ業の資金繰り課題をファクタリングで解決。活用事例と注意点を解説。",
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
    "@id": "https://factoring-partner.pages.dev/articles/beauty/",
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
      name: "美容・エステ業向けファクタリング",
      item: "https://factoring-partner.pages.dev/articles/beauty/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function BeautyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "美容・エステ業向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種特化ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            美容・エステ業向けファクタリング
            <br className="hidden md:block" />
            運転資金の調達方法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            設備投資・広告費・人件費──美容・エステ業特有の資金繰り課題をファクタリングで解決する方法を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. 美容・エステ業の資金繰り課題</a></li>
            <li><a href="#merits" className="hover:underline">2. ファクタリングを使う4つのメリット</a></li>
            <li><a href="#types" className="hover:underline">3. 美容業で利用できるファクタリングの種類</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用事例3選</a></li>
            <li><a href="#caution" className="hover:underline">5. 利用時の注意点</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">美容・エステ業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">美容・エステ業は初期投資が大きく、固定費が高い業種です。主な資金繰りの課題を解説します。</p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリングを使う4つのメリット</h2>
          <p className="mb-8 leading-relaxed text-text-light">美容・エステ業がファクタリングを活用するメリットを解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {meritItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 種類 ─── */}
        <section id="types" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">美容業で利用できるファクタリングの種類</h2>
          <p className="mb-8 leading-relaxed text-text-light">美容・エステ業で活用できるファクタリングの種類とそれぞれの特徴を解説します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">クレジットカード債権ファクタリング</h3>
              <p className="text-sm leading-relaxed text-text-light">
                カード決済の売上（カード会社からの入金予定額）を売却して早期資金化する方法です。売掛先がカード会社のため信用力が高く、手数料2%〜8%と低めです。美容室・エステサロンのカード決済比率が高いほど利用しやすくなります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">法人向け売掛金ファクタリング</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ブライダルサロンの法人契約、ホテル内サロンの委託契約、企業の福利厚生としてのエステ利用など、法人顧客への売掛金がある場合に利用できます。法人相手の取引は債権額が大きくなりやすく、手数料も比較的安くなります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">2社間ファクタリング</h3>
              <p className="text-sm leading-relaxed text-text-light">
                自社とファクタリング会社の2社間で契約する方式です。売掛先（お客様や取引先）への通知が不要で、ファクタリングの利用を知られずに資金調達できます。手数料は5%〜20%程度と3社間より高めですが、サロンのブランドイメージを守りたい場合に適しています。
              </p>
            </div>
          </div>
        </section>

        {/* ── 活用事例 ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">活用事例3選</h2>
          <p className="mb-8 leading-relaxed text-text-light">美容・エステ業でファクタリングを活用した事例を紹介します。</p>
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">事例1：エステサロンの最新美容機器の導入</h3>
              <p className="mb-4 text-xs text-text-light">業種：エステサロン（個人事業主）</p>
              <div className="space-y-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                  <p className="text-sm text-text-light">最新のハイフ（HIFU）美容機器の導入に300万円が必要。メーカーのキャンペーン価格は今月末まで。銀行融資は審査に3週間かかると言われた。</p>
                </div>
                <div className="rounded-lg bg-primary-light p-4">
                  <p className="mb-1 text-sm font-semibold text-primary">解決策</p>
                  <p className="text-sm text-text-light">カード売上債権（月間150万円）の2ヶ月分をファクタリングで早期資金化。手数料5%で285万円を2営業日で調達し、残りは手元資金で補填。</p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                  <p className="text-sm text-text-light">キャンペーン価格で美容機器を購入でき、新メニューの提供で月間売上が30%増加。投資回収期間は8ヶ月で、手数料コストを大幅に上回るリターンを得た。</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">事例2：美容室の2号店オープンの運転資金</h3>
              <p className="mb-4 text-xs text-text-light">業種：美容室（法人・2店舗）</p>
              <div className="space-y-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                  <p className="text-sm text-text-light">2号店オープンの準備中。内装工事費は日本政策金融公庫の融資で賄えたが、オープン直後の運転資金（材料費・スタッフ研修費・広告費）200万円が不足。</p>
                </div>
                <div className="rounded-lg bg-primary-light p-4">
                  <p className="mb-1 text-sm font-semibold text-primary">解決策</p>
                  <p className="text-sm text-text-light">1号店のカード売上債権（月間180万円）とホットペッパービューティー経由の法人請求分50万円をファクタリング。手数料6%で216万円を調達。</p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                  <p className="text-sm text-text-light">潤沢な運転資金で2号店のオープンをスムーズに進め、オープン初月から黒字化。スタッフのモチベーションも高く、リピーター獲得に成功。</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">事例3：ブライダルエステの繁忙期対策</h3>
              <p className="mb-4 text-xs text-text-light">業種：ブライダルエステ（法人）</p>
              <div className="space-y-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                  <p className="text-sm text-text-light">5〜6月の結婚式シーズンに向けて予約が殺到。臨時スタッフの雇用と消耗品の大量仕入れに150万円が必要だが、前月は閑散期で売上が低迷していた。</p>
                </div>
                <div className="rounded-lg bg-primary-light p-4">
                  <p className="mb-1 text-sm font-semibold text-primary">解決策</p>
                  <p className="text-sm text-text-light">結婚式場との法人契約の売掛金200万円を3社間ファクタリング。売掛先（結婚式場）の承諾を得て、手数料3%で194万円を即日調達。</p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                  <p className="text-sm text-text-light">万全の体制で繁忙期を迎え、前年比130%の売上を達成。結婚式場からの評価も上がり、翌年以降の提携枠が拡大した。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用時の注意点</h2>
          <p className="mb-8 leading-relaxed text-text-light">美容・エステ業でファクタリングを利用する際に注意すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">回数券・プリペイドカードの売上は対象外</h3>
              <p className="text-sm leading-relaxed text-text-light">回数券やプリペイドカードの売上は前受金に該当し、ファクタリングの対象にはなりません。ファクタリングの対象はすでにサービスを提供した売掛金です。回数券ビジネスが中心のサロンは、別の資金調達手段も検討しましょう。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">手数料が利益率を圧迫しないか確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">美容業の営業利益率は5〜15%程度です。ファクタリング手数料が利益を圧迫しないか、事前にシミュレーションしてください。毎月利用する場合は年間の手数料総額を計算し、経営への影響を把握しましょう。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">決済代行会社との契約を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">カード決済代行会社との契約に債権譲渡禁止条項が含まれていないか確認してください。条項がある場合でも法律上は債権譲渡は有効ですが、代行会社との関係悪化を避けるため事前に確認するのが望ましいです。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">根本的な経営改善と並行して行う</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリングは一時的な資金調達手段です。恒常的に資金不足が発生している場合は、メニュー単価の見直し、広告費の最適化、人件費の適正化など、根本的な経営改善にも取り組みましょう。</p>
            </div>
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリング利用の流れ</h2>
          <p className="mb-8 leading-relaxed text-text-light">美容・エステ業でファクタリングを利用する際の一般的な流れを解説します。</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">ファクタリング会社に相談・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">電話またはWebから問い合わせ。月間のカード売上高、法人契約の有無、希望する資金化金額を伝えます。美容業界に詳しい会社を選ぶとスムーズです。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">身分証明書、カード決済の売上明細（決済端末の管理画面データ）、直近の通帳コピー、確定申告書または決算書を提出します。法人契約の売掛金がある場合は請求書も提出します。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">ファクタリング会社がカード売上実績や売掛先の信用力を審査し、買取可能額と手数料率を提示します。カード債権は審査が通りやすく、早ければ30分で結果が出ます。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">4</span>
              <div>
                <h3 className="font-bold text-text-main">契約・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">見積もりに同意したら契約を締結。最短即日で指定口座に入金されます。電子契約に対応している会社なら印鑑も不要です。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 美容業の資金調達手段比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">美容業の資金調達手段比較</h2>
          <p className="mb-6 leading-relaxed text-text-light">美容・エステ業で利用できる主な資金調達手段を比較します。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-left">カード債権ファクタリング</th>
                  <th className="border border-primary p-3 text-left">日本政策金融公庫</th>
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
                  <td className="border border-border p-3">年利1%〜3%</td>
                  <td className="border border-border p-3">年利5%〜18%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">審査難易度</td>
                  <td className="border border-border p-3">低い</td>
                  <td className="border border-border p-3">中程度</td>
                  <td className="border border-border p-3">中程度</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">担保・保証人</td>
                  <td className="border border-border p-3">不要</td>
                  <td className="border border-border p-3">不要な場合多い</td>
                  <td className="border border-border p-3">不要な場合多い</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">返済義務</td>
                  <td className="border border-border p-3">なし</td>
                  <td className="border border-border p-3">あり</td>
                  <td className="border border-border p-3">あり</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            開業資金は日本政策金融公庫の創業融資が低金利でおすすめですが、審査に時間がかかります。急ぎの運転資金にはファクタリング、設備投資にはリースや公庫融資と使い分けましょう。
          </p>
        </section>

        {/* ── 美容業特有のポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">美容業特有のファクタリング活用ポイント</h2>
          <p className="mb-6 leading-relaxed text-text-light">美容・エステ業ならではのファクタリング活用のコツを紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">繁忙期・閑散期に合わせた利用</h3>
              <p className="text-sm leading-relaxed text-text-light">
                美容業は3月（卒業式・入学式シーズン）、6〜7月（夏に向けた脱毛・ダイエット需要）、12月（忘年会・年末年始）が繁忙期です。繁忙期前にファクタリングで運転資金を確保し、人材や商材を十分に準備しておくことで、売上の最大化が可能です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">複数の決済手段を導入してファクタリング対象を増やす</h3>
              <p className="text-sm leading-relaxed text-text-light">
                クレジットカードに加えて、QRコード決済（PayPay・楽天ペイ等）、電子マネーなどの決済手段を増やすと、キャッシュレス売上が増加し、ファクタリングの対象となる売上も増えます。決済代行会社を統一すると管理も楽になります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">法人向けサービスを展開して売掛金を作る</h3>
              <p className="text-sm leading-relaxed text-text-light">
                企業の福利厚生としてのエステプログラム、ホテル・結婚式場との提携、出張ヘアメイクの法人契約など、BtoBのサービスを展開すると請求書ベースの売掛金が発生し、ファクタリングの選択肢が広がります。法人の売掛金はカード債権よりも高額になりやすいメリットもあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">リピート利用で手数料交渉を行う</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングを継続的に利用する場合、ファクタリング会社との信頼関係が構築されるため、手数料の引き下げ交渉がしやすくなります。リピーター割引制度のある会社を選ぶのもコスト削減のポイントです。
              </p>
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
            <Link href="/articles/restaurant/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">飲食業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">カード債権で資金調達</p>
            </Link>
            <Link href="/articles/for-sole-proprietor/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">個人事業主向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">個人サロンでも利用可能</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くするコツを紹介</p>
            </Link>
            <Link href="/articles/online-factoring/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">オンライン完結ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">来店不要で手続き可能</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">美容・エステ業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            カード債権対応のおすすめファクタリング会社を手数料・入金速度で徹底比較。あなたのサロンに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
