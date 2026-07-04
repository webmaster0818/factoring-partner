import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "タクシー・旅客運送業向けファクタリング｜チケット・法人契約売掛金を現金化",
  description:
    "タクシー・旅客運送業向けファクタリングを徹底解説。タクシーチケットや法人契約の売掛金、キャッシュレス決済の入金待ちを早期現金化する方法、メリット・デメリット、おすすめ3社を紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/taxi/",
  },
  openGraph: {
    title: "タクシー・旅客運送業向けファクタリング｜チケット・法人契約売掛金を現金化",
    description: "タクシー・旅客運送業の資金繰り課題とファクタリング活用法。チケット精算・法人契約売掛金の早期現金化を解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/taxi/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "タクシーチケット・法人契約の後払い精算",
    description:
      "タクシーチケットや法人・ホテル・旅行会社との送迎契約は、月末締め翌月払いなどの後払い精算が一般的です。乗務員の運行は日々発生するのに、売上の入金は締め日以降になるため、その間の運転資金を立て替える必要があります。",
  },
  {
    title: "キャッシュレス決済の入金サイト",
    description:
      "クレジットカード・交通系IC・QRコード決済の普及により、現金売上の比率が下がっています。キャッシュレス決済は決済代行会社やカード会社を経由して後日入金されるため、売上計上から入金までのタイムラグが資金繰りを圧迫する要因になります。",
  },
  {
    title: "燃料費・車両維持費の先行支出",
    description:
      "LPガス・ガソリンなどの燃料費、車検・整備・タイヤ交換などの車両維持費、任意保険料は、売上の入金を待たずに支払いが発生します。燃料価格の変動もあり、支出が先行しやすいコスト構造です。",
  },
  {
    title: "人件費と車両更新の負担",
    description:
      "乗務員の給与は毎月確実に発生する固定的な支出です。加えて、車両の入れ替えや福祉車両・配車システムの導入など、まとまった投資が必要になる場面もあり、手元資金に余裕がないとキャッシュフローが逼迫します。",
  },
];

const factoringTypes = [
  {
    title: "2社間ファクタリング",
    description:
      "タクシーチケットの精算金や法人・ホテル・旅行会社との契約に基づく売掛金を、取引先に通知せずファクタリング会社に売却して現金化する方法です。利用者とファクタリング会社の2社間で完結するため、取引先との関係に影響を与えずに利用できます。",
    merit: "取引先に知られない・最短即日入金",
    demerit: "3社間より手数料が高い（8%〜18%程度が目安）",
  },
  {
    title: "3社間ファクタリング",
    description:
      "売掛先（チケット発行元・法人契約先など）の承諾を得て債権を譲渡する方法です。売掛先が直接ファクタリング会社に支払うため回収リスクが低く、手数料は2社間より大幅に安くなります。継続的な法人契約が多い事業者に向いています。",
    merit: "手数料が安い（1%〜9%程度が目安）・高額にも対応しやすい",
    demerit: "売掛先への通知・承諾が必要・入金まで数日かかることがある",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "業界最大手級。2社間・3社間対応。法人・個人事業主対応。最短2時間入金。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "高額案件にも対応でき、法人契約の売掛金が大きいタクシー事業者でも相談しやすい。全国の事業者から利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    features: "一般社団法人が運営する非営利型。経済産業大臣認定。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit: "非営利法人のため手数料が業界最安水準。認定機関の安心感があり、コストを抑えて資金化したい運送事業者に向く。",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。少額（30万円〜）対応。オンライン完結型。個人事業主にも対応。最短即日入金。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit: "審査通過率が高く、開業間もない事業者や個人タクシーでも相談しやすい。チケット精算などの少額売掛金にも対応。",
  },
];

const useCases = [
  {
    title: "活用イメージ1：チケット精算までのつなぎ資金",
    problem: "法人向けのタクシーチケット利用が増えたが、精算入金は翌月以降。燃料費や乗務員の給与支払いが入金より先に来るため、月末の資金繰りが毎月きつくなる。",
    solution: "チケット発行元・法人契約先に対する売掛金をファクタリングで早期現金化し、入金予定日を待たずに支払い原資を確保する。",
    result: "入金サイトのずれによる立て替え負担が軽減され、燃料費・人件費の支払いを予定どおり行いやすくなる。継続契約の売掛金であれば計画的に利用できる。",
  },
  {
    title: "活用イメージ2：車両整備・車検費用の先行支出への対応",
    problem: "複数台の車検・整備時期が重なり、まとまった支出が必要に。売上はキャッシュレス決済比率が高く、入金待ちの売上が積み上がっている状態。",
    solution: "入金待ちの売掛債権の一部をファクタリングで現金化し、車検・整備費用に充当する。必要な分だけ売却すれば手数料負担も抑えられる。",
    result: "車両の稼働を止めずに整備を進められ、営業機会の損失を避けやすくなる。融資と異なり負債にならないため、後日の借入余力にも影響しにくい。",
  },
];

const faqs = [
  {
    question: "タクシー会社でファクタリングを利用するメリットは？",
    answer:
      "タクシー・旅客運送業がファクタリングを利用するメリットは、①タクシーチケットや法人契約の入金待ちを解消できる②担保・保証人不要③借入ではないため負債にならない④最短即日で資金調達可能⑤2社間なら取引先に知られない、の5点です。燃料費・人件費など先行支出の多い業種のため、入金サイトのずれを埋める手段として活用できます。",
  },
  {
    question: "タクシー・旅客運送業のファクタリング手数料の相場は？",
    answer:
      "手数料の相場は2社間ファクタリングで8%〜18%、3社間ファクタリングで1%〜9%が目安です（会社により異なります）。売掛先がチケット発行元や大手法人など信用力の高い相手であれば、手数料は低くなりやすい傾向があります。複数社から見積もりを取って比較することをおすすめします。",
  },
  {
    question: "タクシーチケットの精算金はファクタリングの対象になりますか？",
    answer:
      "法人（チケット発行元・契約企業）に対する売掛債権であれば、ファクタリングの対象になり得ます。タクシーチケットの精算金や法人・ホテル・旅行会社との送迎契約の請求書などが該当します。一方、乗客個人からの現金・カード売上そのものは対象外となるのが一般的です。対象可否は債権の内容によるため、事前に各社へ確認しましょう。",
  },
  {
    question: "個人タクシーでもファクタリングは利用できますか？",
    answer:
      "個人事業主に対応しているファクタリング会社であれば利用可能です。ただし、対象となるのは法人相手の売掛債権（チケット精算・法人契約など）で、一定額以上の請求書が必要になる場合があります。個人事業主対応・少額対応をうたう会社（アクセルファクターなど）を選ぶとスムーズです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "タクシー・旅客運送業向けファクタリング｜チケット・法人契約売掛金を現金化",
  description: "タクシー・旅客運送業の資金繰り課題とファクタリング活用法。チケット精算・法人契約売掛金の早期現金化を解説。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/taxi/" },
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
    { "@type": "ListItem", position: 3, name: "タクシー・旅客運送業向けファクタリング", item: "https://hyogo-shihoushoshi.jp/articles/taxi/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function TaxiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "タクシー・旅客運送業向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種特化ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            タクシー・旅客運送業向けファクタリング
            <br className="hidden md:block" />
            チケット・法人契約売掛金を現金化
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            タクシーチケットの後払い精算やキャッシュレス決済の入金待ちなど、タクシー・旅客運送業特有の資金繰り課題をファクタリングで解決。売掛金の早期現金化の仕組みとおすすめサービスを紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. タクシー・旅客運送業の資金繰り課題</a></li>
            <li><a href="#types" className="hover:underline">2. タクシー・旅客運送業で使えるファクタリングの種類</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社3選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用イメージ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">タクシー・旅客運送業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">タクシー・旅客運送業は、日々の売上がある一方で、後払い精算やキャッシュレス化により入金が遅れやすく、燃料費・人件費など先行する支出が多い業種です。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">タクシー・旅客運送業で使えるファクタリングの種類</h2>
          <p className="mb-8 leading-relaxed text-text-light">タクシー・旅客運送業で利用できるファクタリングは大きく2種類あります。それぞれの特徴を理解して、自社に最適な方法を選びましょう。</p>
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
          <p className="mb-8 leading-relaxed text-text-light">タクシー・旅客運送業の売掛金の資金化に利用しやすい会社を厳選して3社紹介します。</p>
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

        {/* ── 活用イメージ ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">活用イメージ</h2>
          <p className="mb-8 leading-relaxed text-text-light">タクシー・旅客運送業でファクタリングが活用される一般的なパターンを紹介します（特定の事例ではなく、想定される利用シーンです）。</p>
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
          <p className="mb-8 leading-relaxed text-text-light">タクシー・旅客運送業がファクタリングを利用する際の一般的な流れを解説します。</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">ファクタリング会社に相談・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">電話またはWebで問い合わせ。売掛金の金額、売掛先（チケット発行元・法人契約先など）、希望入金日を伝えます。複数社に同時に相談して見積もりを比較することをおすすめします。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">身分証明書、請求書・契約書（チケット精算書や法人契約書など）、通帳コピーなどを提出します。会社によっては決算書や事業許可関連の書類を求められることもあります。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">審査では利用者自身よりも売掛先の信用力が重視されます。チケット発行元や大手法人との継続取引の売掛金は評価されやすい傾向があります。見積もりで手数料率と受取額を確認しましょう。</p>
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

        {/* ── タクシー売掛金の資金化のポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">タクシー・旅客運送業の売掛金を資金化するポイント</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            タクシー・旅客運送業の売上には、現金売上のほかに後払いで入金される債権が複数あります。ファクタリングを検討する際は、どの債権が対象になり得るかを整理しておくとスムーズです。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">対象になりやすい債権</strong>：タクシーチケットの精算金、法人・ホテル・旅行会社との送迎契約や貸切運送の請求書など、法人相手の売掛債権</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">手数料の目安</strong>：2社間8%〜18%・3社間1%〜9%程度（会社により異なる）。売掛先の信用力が高いほど低くなりやすい</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">審査のポイント</strong>：売掛先の信用力、取引の継続性、請求書・契約書などの裏付け資料の有無</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">注意点</strong>：乗客個人からの現金・カード売上そのものは対象外が一般的。カード決済の入金予定額の扱いは会社により異なるため事前確認を</span>
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
            <Link href="/articles/transport/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">運送業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">燃料費・人件費の資金繰り改善ガイド</p>
            </Link>
            <Link href="/articles/logistics/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">物流・倉庫業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">配送代金の早期現金化ガイド</p>
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
          <h2 className="text-xl font-bold md:text-2xl">タクシー・旅客運送業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            チケット精算・法人契約売掛金の資金化に使える会社を手数料・入金スピードで徹底比較。あなたの会社に最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
