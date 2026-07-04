import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "宿泊業向けファクタリング｜ホテル・旅館の売掛金を早期現金化",
  description:
    "宿泊業（ホテル・旅館）向けファクタリングを徹底解説。OTA経由の売上の入金待ちや季節変動、改装費の先行負担など宿泊業特有の資金繰り課題と、おすすめ3社、活用シーンを紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/hotel/",
  },
  openGraph: {
    title: "宿泊業向けファクタリング｜ホテル・旅館の売掛金を早期現金化",
    description: "ホテル・旅館の資金繰り課題とファクタリング活用法。OTA売掛金の早期現金化を解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/hotel/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "OTA経由の売上は入金が後日",
    description:
      "楽天トラベルやじゃらん、Booking.comなどのOTA（オンライン旅行代理店）経由の予約は、宿泊者が事前決済しても宿泊施設への入金は後日まとめて行われる仕組みが一般的です。締め日・支払日はOTA各社の規約によって異なるため、売上が立ってから入金までのタイムラグが運転資金を圧迫します。",
  },
  {
    title: "季節変動が大きい",
    description:
      "宿泊業は観光シーズン・大型連休・イベント時期に売上が集中する一方、閑散期は稼働率が大きく落ち込みます。閑散期でも人件費・光熱費・施設維持費などの固定費は発生し続けるため、繁忙期と閑散期の資金ギャップへの備えが欠かせません。",
  },
  {
    title: "改装費・設備投資が先行する",
    description:
      "客室のリニューアル、空調・給湯設備の更新、大浴場の改修など、宿泊業は施設の魅力を維持するための投資が定期的に必要です。改装費用は支払いが先行し、投資回収は稼働率の回復を待つことになるため、手元資金に大きな負担がかかります。",
  },
  {
    title: "人件費・仕入れ費の先払い",
    description:
      "フロント・客室清掃・調理スタッフの人件費、食材やリネン・アメニティの仕入れ費用は毎月確実に発生します。OTAや旅行会社からの入金前に支出が必要なため、手元資金に余裕がないとキャッシュフローが逼迫します。",
  },
];

const factoringTypes = [
  {
    title: "2社間ファクタリング（OTA・法人売掛金）",
    description:
      "OTA運営会社や旅行会社に対する売掛金、法人契約（社員研修・宴会・長期滞在など）の未入金分をファクタリング会社に売却して現金化する方法です。取引先への通知なしで利用でき、最短即日での資金調達も可能です。",
    merit: "取引先に知られない・最短即日入金・繁忙期の売上を先取りできる",
    demerit: "3社間より手数料が高い（8%〜18%程度が目安）",
  },
  {
    title: "3社間ファクタリング",
    description:
      "売掛先（OTA運営会社や旅行会社・法人取引先）の承諾を得て債権を譲渡する方法です。ファクタリング会社が売掛先から直接回収するため回収リスクが低く、手数料は2社間より安くなります。継続的な取引がある売掛先の債権に向いています。",
    merit: "手数料が安い（1%〜9%程度が目安）・高額にも対応しやすい",
    demerit: "売掛先の承諾が必要・入金まで数日かかることがある",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "業界最大手級。幅広い業種の利用実績が豊富。2社間・3社間対応。最短2時間入金。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "幅広い業種の審査ノウハウが豊富で審査がスムーズ。改装費のつなぎなど高額案件にも対応。全国の宿泊施設から利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    features: "一般社団法人が運営する非営利型。経済産業大臣認定。診療報酬ファクタリングに対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit: "非営利法人のため手数料が業界最安水準。認定機関の安心感。家族経営の旅館など個人事業主でも相談しやすい。",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。少額（30万円〜）対応。オンライン完結型。個人事業主にも対応。最短即日入金。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit: "審査通過率が高く、開業間もないホテル・ゲストハウスでも利用しやすい。閑散期の少額調達にも対応。",
  },
];

const useCases = [
  {
    title: "シーン1：閑散期の固定費支払い",
    problem: "観光シーズンが終わり稼働率が低下。売上は減少する一方で、スタッフの人件費や光熱費・施設維持費などの固定費は変わらず発生し、繁忙期の入金を待つ間の資金繰りが厳しい。",
    solution: "繁忙期に発生したOTA・旅行会社への売掛金をファクタリングで早期現金化し、閑散期の固定費支払いに充当する。",
    result: "入金サイクルのずれによる資金ギャップを埋め、閑散期も安定した施設運営を続けられる。借入ではないため負債を増やさずに済む。",
  },
  {
    title: "シーン2：改装・設備更新のつなぎ資金",
    problem: "客室リニューアルや設備更新の支払いが先行し、手元資金が減少。銀行融資は審査に時間がかかり、工事スケジュールに間に合わない恐れがある。",
    solution: "OTA経由の予約で確定している売掛金をファクタリングで現金化し、改装費用の支払いに充てる。融資の実行を待つ間のつなぎ資金として活用する。",
    result: "工事を予定通り進めながら資金繰りを維持できる。改装後の集客強化につなげ、通常の入金サイクルに戻ったらファクタリングの利用を終了する。",
  },
];

const faqs = [
  {
    question: "宿泊業でファクタリングを利用するメリットは？",
    answer:
      "宿泊業がファクタリングを利用するメリットは、①OTAや旅行会社からの入金待ちを解消できる②担保・保証人不要③借入ではないため負債にならない④最短即日で資金調達可能⑤季節変動による資金ギャップに柔軟に対応できる、の5点です。売掛先の信用力が重視されるため、自社の業歴が浅くても利用しやすいのが特徴です。",
  },
  {
    question: "OTA経由の売上もファクタリングの対象になりますか？",
    answer:
      "OTA運営会社や旅行会社に対する売掛債権（入金待ちの売上）は、ファクタリングの対象になり得ます。ただし、対象となる債権の範囲や条件はファクタリング会社ごとに判断が異なります。宿泊者から直接受け取る現金・当日カード決済分は対象外となるのが一般的です。利用前に各社へ売掛先と債権の内容を伝えて確認しましょう。",
  },
  {
    question: "宿泊業向けファクタリングの手数料相場は？",
    answer:
      "手数料の一般的な目安は、2社間ファクタリングで8%〜18%、3社間ファクタリングで1%〜9%程度です（会社により異なります）。売掛先の信用力・債権額・利用実績によって変動するため、複数社から見積もりを取って比較することをおすすめします。",
  },
  {
    question: "閑散期の資金繰り対策として使えますか？",
    answer:
      "はい、活用できます。繁忙期に発生した売掛金（OTA・旅行会社・法人契約分）を早期現金化することで、閑散期の人件費や固定費の支払いに充てられます。ただしファクタリングは売掛金の前倒しであり、継続利用は手数料負担が積み上がるため、季節変動の平準化には融資や公的支援制度との併用も検討しましょう。",
  },
  {
    question: "OTAや旅行会社に知られずに利用できますか？",
    answer:
      "2社間ファクタリングであれば、売掛先（OTA運営会社・旅行会社・法人取引先）への通知なしで利用できます。宿泊客に知られることもありません。一方、3社間ファクタリングは売掛先の承諾が必要な代わりに手数料が安くなります。取引関係への影響と手数料のバランスで選びましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "宿泊業向けファクタリング｜ホテル・旅館の売掛金を早期現金化",
  description: "ホテル・旅館の資金繰り課題とファクタリング活用法。OTA売掛金の早期現金化を解説。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/hotel/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://hyogo-shihoushoshi.jp/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://hyogo-shihoushoshi.jp/articles/" },
    { "@type": "ListItem", position: 3, name: "宿泊業向けファクタリング", item: "https://hyogo-shihoushoshi.jp/articles/hotel/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function HotelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "宿泊業向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種特化ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            宿泊業向けファクタリング
            <br className="hidden md:block" />
            ホテル・旅館の売掛金を早期現金化
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            OTA経由の入金待ちや季節変動、改装費の先行負担など、ホテル・旅館特有の資金繰り課題をファクタリングで解決。売掛金の早期現金化の仕組みとおすすめサービスを紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. 宿泊業の資金繰り課題</a></li>
            <li><a href="#types" className="hover:underline">2. 宿泊業で使えるファクタリングの種類</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社3選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用シーン</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">宿泊業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">ホテル・旅館などの宿泊業は一般企業とは異なる資金繰りの課題を抱えています。特にOTA経由の入金サイクルと季節変動が大きな問題です。</p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 種類 ─── */}
        <section id="types" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">宿泊業で使えるファクタリングの種類</h2>
          <p className="mb-8 leading-relaxed text-text-light">宿泊業で利用できるファクタリングは大きく2種類あります。それぞれの特徴を理解して、自社に最適な方法を選びましょう。</p>
          <div className="space-y-6">
            {factoringTypes.map((type) => (
              <div key={type.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 text-lg font-bold text-primary">{type.title}</h3>
                <p className="mb-4 leading-relaxed text-text-light">{type.description}</p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-secondary">メリット</p>
                    <p className="text-sm text-text-light">{type.merit}</p>
                  </div>
                  <div className="rounded-lg bg-orange-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-accent">デメリット</p>
                    <p className="text-sm text-text-light">{type.demerit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ3選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">おすすめファクタリング会社3選</h2>
          <p className="mb-8 leading-relaxed text-text-light">宿泊業のファクタリングに対応している会社を厳選して3社紹介します。</p>
          <div className="space-y-6">
            {recommendedCompanies.map((company, index) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">{company.name}</h3>
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
                    <p className="mt-3 text-sm leading-relaxed text-text-light">
                      <strong className="text-text-main">おすすめポイント：</strong>{company.merit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 活用シーン ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">活用シーン</h2>
          <p className="mb-8 leading-relaxed text-text-light">宿泊業でファクタリングが活用される一般的なパターン（想定例）を紹介します。</p>
          <div className="space-y-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-4 text-lg font-bold text-primary">{uc.title}</h3>
                <div className="space-y-3">
                  <div className="rounded-lg bg-orange-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                    <p className="text-sm text-text-light">{uc.problem}</p>
                  </div>
                  <div className="rounded-lg bg-primary-light p-4">
                    <p className="mb-1 text-sm font-semibold text-primary">解決策</p>
                    <p className="text-sm text-text-light">{uc.solution}</p>
                  </div>
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-secondary">期待できる効果</p>
                    <p className="text-sm text-text-light">{uc.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用の流れ</h2>
          <p className="mb-8 leading-relaxed text-text-light">宿泊業がファクタリングを利用する際の一般的な流れを解説します。</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">ファクタリング会社に相談・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">電話またはWebで問い合わせ。売掛先（OTA・旅行会社・法人取引先）、売掛金額、希望入金日を伝えます。複数社に同時に相談して見積もりを比較することをおすすめします。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">身分証明書、売掛金の存在を示す書類（OTA管理画面の売上明細・精算書・請求書・契約書など）、通帳コピーなどを提出します。必要書類は会社により異なるため事前に確認しましょう。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">売掛先の信用力、取引実績、債権の内容などを審査。売掛先が大手OTAや旅行会社の場合は信用力が評価されやすいです。見積もりで手数料率と受取額を必ず確認しましょう。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">4</span>
              <div>
                <h3 className="font-bold text-text-main">契約・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">見積もりに同意したら契約を締結。3社間の場合は売掛先への通知・承諾手続きも行います。契約後、最短即日〜数日で指定口座に入金されます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── OTA売掛金ファクタリングのポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">OTA売掛金ファクタリングのポイント</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            宿泊業のファクタリングで中心となるのは、OTA運営会社や旅行会社に対する売掛債権です。利用前に押さえておきたいポイントをまとめます。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">対象となる債権</strong>：OTA運営会社・旅行会社への売掛金、法人契約（研修・宴会・長期滞在など）の未入金分。宿泊客からの直接の現金・当日決済分は対象外が一般的</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">手数料の目安</strong>：2社間8%〜18%、3社間1%〜9%程度（会社により異なる）。売掛先の信用力が高いほど有利になりやすい</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">審査のポイント</strong>：売掛先の信用力、取引の継続性、精算書・売上明細で債権の実在を確認できるかなど</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">注意点</strong>：キャンセルや返金が発生した場合の取り扱いは契約により異なるため、契約前に必ず確認しましょう。OTAとの契約で債権譲渡に関する定めがある場合もあるため、規約の確認も重要です</span>
              </li>
            </ul>
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

                {/* ── 関連ツール・データ ─── */}
                <section className="mb-12">
                  <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
                    <p className="mb-3 font-bold text-primary">あなたの業種・状況に合う会社を探す</p>
                    <ul className="space-y-2 text-sm text-text-light">
                    <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
                    <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
                    <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
                    <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
                    </ul>
                  </div>
                </section>

{/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/restaurant/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">飲食業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">クレジットカード債権で資金調達</p>
            </Link>
            <Link href="/articles/ec-commerce/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">EC・通販業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">モール売上の早期入金ガイド</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツも紹介</p>
            </Link>
            <Link href="/articles/required-documents/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングの必要書類</p>
              <p className="mt-1 text-sm text-text-light">準備すべき書類を一覧で紹介</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">宿泊業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            宿泊業の売掛金に対応する会社を手数料・入金スピードで徹底比較。あなたの施設に最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
