import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "障害福祉サービス向けファクタリング｜給付費の早期現金化",
  description:
    "障害福祉サービス事業所向けファクタリングを解説。国保連に請求する障害福祉サービス等給付費の入金待ちと人件費の先行負担という資金繰り課題を、給付費債権の早期現金化で解消する方法とおすすめ3社を紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/welfare/",
  },
  openGraph: {
    title: "障害福祉サービス向けファクタリング｜給付費の早期現金化",
    description: "障害福祉サービス事業所の資金繰り課題とファクタリング活用法。障害福祉サービス等給付費の早期現金化を解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/welfare/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "給付費の入金までタイムラグがある",
    description:
      "就労支援・生活介護・グループホーム・放課後等デイサービスなどの障害福祉サービスでは、報酬の大部分を占める障害福祉サービス等給付費を国民健康保険団体連合会（国保連）経由で請求します。サービス提供月から入金までにはタイムラグがあり、おおむね2ヶ月程度の入金待ちが生じるのが一般的です。具体的な請求・支払スケジュールは、各都道府県の国保連や自治体の公式情報で確認してください。",
  },
  {
    title: "人件費の先行負担が大きい",
    description:
      "障害福祉サービスには人員配置基準があり、サービス管理責任者や支援員など有資格者・専門職の確保が前提となるため、費用に占める人件費の割合が高い事業です。給与は毎月確実に支払う必要がある一方、給付費の入金は後から届くため、支出が先行する構造になっています。",
  },
  {
    title: "利用者数・利用日数の変動で収入がぶれる",
    description:
      "通所系のサービスでは、報酬が利用実績（利用日数）に応じて決まるため、利用者の体調や季節要因による欠席で月々の収入が変動します。固定費（人件費・家賃）は変わらないのに収入がぶれるため、手元資金に余裕がないと資金繰りが不安定になりがちです。",
  },
  {
    title: "報酬改定・加算要件への対応が必要",
    description:
      "障害福祉サービスの報酬は定期的に改定され、加算の要件や単位数も見直されます。改定内容によっては収入構造や必要な体制整備が変わるため、対応のための支出が先行することもあります。最新の報酬・加算の詳細は、厚生労働省や自治体の公式情報を必ず確認しましょう。",
  },
];

const factoringTypes = [
  {
    title: "障害福祉サービス費（給付費）ファクタリング",
    description:
      "国保連に請求済みの障害福祉サービス等給付費の債権をファクタリング会社に売却し、通常の入金予定日より早く現金化する方法です。介護報酬ファクタリングや診療報酬ファクタリングと同じく、売掛先が公的機関のため信用力が非常に高く、手数料は一般のファクタリングより低くなる傾向があります。国保連への通知・承諾を伴う3社間ファクタリングが一般的です。",
    merit: "手数料が低い傾向・審査が通りやすい・毎月の請求分を継続利用しやすい",
    demerit: "3社間のため国保連への通知手続きが必要・入金まで数日かかることがある",
  },
  {
    title: "一般ファクタリング（受託事業などの売掛金）",
    description:
      "自治体や法人から受託した事業の売掛金など、給付費以外の確定した売掛債権をファクタリング会社に売却して現金化する方法です。2社間ファクタリングも選べるため、取引先に知られずに利用できます。",
    merit: "2社間で取引先に知られない・最短即日入金",
    demerit: "手数料が給付費ファクタリングより高くなる傾向がある",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "業界最大手級。介護・医療など国保連請求型の業種の利用実績が豊富。2社間・3社間対応。最短2時間入金。全国対応・来店不要。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "国保連向け債権の取り扱い経験が豊富で、給付費の早期現金化の相談がしやすい。高額案件にも対応し、全国の障害福祉事業所から利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    features: "一般社団法人が運営する非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit: "非営利法人のため手数料が業界最安水準。売掛先が公的機関である給付費債権と相性がよく、資金繰り相談も含めて頼りやすい。",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。少額（30万円〜）対応。オンライン完結型。個人事業主にも対応。最短即日入金。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit: "審査通過率が高く、開設間もない事業所や小規模事業所でも利用しやすい。少額からの利用に対応し、日中支援で多忙でもオンラインで完結できる。",
  },
];

const useCases = [
  {
    title: "想定シーン1：開設直後の運転資金の確保",
    problem: "事業所を開設した直後は、給付費の入金が始まるまで収入がほとんどない期間が続く一方、人員配置基準を満たすためのスタッフの人件費や家賃は初月から発生します。",
    solution: "国保連への請求実績ができた段階で、給付費債権をファクタリングで早期現金化し、入金までの空白期間の運転資金に充てる方法が考えられます。",
    result: "人件費・家賃の支払いを入金サイクルに左右されずに行いやすくなります。入金サイクルが軌道に乗れば、利用を段階的に減らしていくのが一般的です。",
  },
  {
    title: "想定シーン2：職員の増員・処遇改善のつなぎ資金",
    problem: "利用者の受け入れ拡大や加算の体制要件を満たすために職員を増やすと、給付費の増加が入金に反映されるより先に人件費の支払いが発生します。",
    solution: "増員後の請求分の給付費債権を早期現金化し、給与支払いと入金のタイミングのずれを埋める方法が考えられます。",
    result: "手元資金を保ちながら体制を整えやすくなります。恒常的な資金需要には銀行融資など他の手段との併用も検討し、手数料負担を最小限に抑えることが重要です。",
  },
];

const faqs = [
  {
    question: "障害福祉サービス等給付費もファクタリングできますか？",
    answer:
      "はい、可能です。国保連に請求する障害福祉サービス等給付費の債権は、介護報酬や診療報酬と同様に売掛先が公的機関であるため、ファクタリング会社からの信用力評価が高い債権です。国保連への通知・承諾を伴う3社間ファクタリングでの利用が一般的です。対応可否は会社により異なるため、申し込み時に「障害福祉サービス費の債権」であることを伝えて確認しましょう。",
  },
  {
    question: "障害福祉サービス事業所が使う場合の手数料相場は？",
    answer:
      "ファクタリング手数料の一般的な目安は2社間で8%〜18%、3社間で1%〜9%程度とされますが、実際の料率は会社や契約内容によって異なります。障害福祉サービス等給付費のように売掛先が公的機関の債権は回収リスクが低いため、3社間でこの範囲の中でも低い水準になる傾向があります。必ず複数社の見積もりを比較しましょう。",
  },
  {
    question: "利用者や国保連・自治体に知られますか？",
    answer:
      "利用者にファクタリングの利用が知られることはありません。給付費の3社間ファクタリングでは国保連への通知・承諾手続きが必要ですが、これは債権譲渡の事務手続きであり、サービスの指定や運営に直接影響するものではありません。手続きの詳細は利用するファクタリング会社と、必要に応じて各都道府県の国保連に確認してください。",
  },
  {
    question: "開設したばかりの事業所でも利用できますか？",
    answer:
      "はい、利用できる可能性が高いです。ファクタリングの審査では利用者自身の業歴よりも売掛先の信用力が重視されるため、売掛先が国保連である給付費債権は開設間もない事業所でも審査に通りやすい債権です。国保連への請求実績（請求済みの債権）があることが前提になります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "障害福祉サービス向けファクタリング｜給付費の早期現金化",
  description: "障害福祉サービス事業所の資金繰り課題とファクタリング活用法。障害福祉サービス等給付費の早期現金化を解説。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/welfare/" },
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
    { "@type": "ListItem", position: 3, name: "障害福祉サービス向けファクタリング", item: "https://hyogo-shihoushoshi.jp/articles/welfare/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function WelfarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "障害福祉サービス向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種特化ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            障害福祉サービス向けファクタリング
            <br className="hidden md:block" />
            給付費の早期現金化
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            障害福祉サービス等給付費の入金待ちと人件費の先行負担という、障害福祉事業所特有の資金繰り課題をファクタリングで解決。給付費債権の早期現金化の仕組みとおすすめサービスを紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. 障害福祉サービス事業所の資金繰り課題</a></li>
            <li><a href="#types" className="hover:underline">2. 障害福祉事業所で使えるファクタリングの種類</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社3選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用が想定される場面</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">障害福祉サービス事業所の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">障害福祉サービスは報酬の大部分を国保連経由の給付費が占めるため、一般企業とは異なる資金繰りの課題を抱えています。特に給付費の入金サイクルと人件費の先行負担が大きな問題です。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">障害福祉事業所で使えるファクタリングの種類</h2>
          <p className="mb-8 leading-relaxed text-text-light">障害福祉サービス事業所で利用できるファクタリングは大きく2種類あります。それぞれの特徴を理解して、自事業所に最適な方法を選びましょう。</p>
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
          <p className="mb-8 leading-relaxed text-text-light">障害福祉サービス事業所のファクタリングに対応している会社を厳選して3社紹介します。</p>
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

        {/* ── 活用が想定される場面 ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">活用が想定される場面</h2>
          <p className="mb-8 leading-relaxed text-text-light">障害福祉サービス事業所でファクタリングの活用が想定される一般的な場面を紹介します（特定の事業所の事例ではありません）。</p>
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
                    <p className="mb-1 text-sm font-semibold text-primary">活用方法</p>
                    <p className="text-sm text-text-light">{uc.solution}</p>
                  </div>
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-secondary">ポイント</p>
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
          <p className="mb-8 leading-relaxed text-text-light">障害福祉サービス事業所が給付費ファクタリングを利用する際の一般的な流れを解説します。</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">ファクタリング会社に相談・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">電話またはWebで問い合わせ。障害福祉サービス等給付費の債権であること、金額、希望入金日を伝えます。複数社に同時に相談して見積もりを比較することをおすすめします。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">本人確認書類、事業所の指定通知書、国保連への請求書類（請求実績がわかるもの）、通帳コピーなどを提出します。必要書類は会社により異なるため事前に確認しましょう。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">給付費の請求実績や事業所の運営状況を審査。売掛先が国保連（公的機関）のため審査は比較的スムーズです。見積もりで手数料率と受取額を必ず確認しましょう。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">4</span>
              <div>
                <h3 className="font-bold text-text-main">契約・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">見積もりに同意したら契約を締結。3社間の場合は国保連への通知・承諾手続きも行います。契約後、最短即日〜数日で指定口座に入金されます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 給付費ファクタリングの詳細 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">給付費ファクタリングの仕組み</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            給付費ファクタリングは、障害福祉サービス事業所が国保連に請求した障害福祉サービス等給付費の債権をファクタリング会社に売却し、通常の入金予定日よりも早く現金を受け取る仕組みです。介護報酬・診療報酬のファクタリングと同じ枠組みで扱われます。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">対象となる債権</strong>：国民健康保険団体連合会（国保連）に対する障害福祉サービス等給付費の請求権</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">手数料の考え方</strong>：売掛先が公的機関で回収リスクが低いため、一般のファクタリングより低くなる傾向。実際の料率は会社・契約内容により異なるため、必ず見積もりで確認</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">審査のポイント</strong>：国保連への請求実績、返戻・過誤調整の状況、事業所の運営状況など</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">注意点</strong>：請求の返戻や過誤調整が発生した場合、その分の調整が必要になることがあります。請求・支払スケジュールや報酬制度の詳細は、厚生労働省・各都道府県の国保連・自治体の公式情報を確認してください</span>
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
            <Link href="/articles/nursing-care/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">介護事業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">介護報酬の早期現金化ガイド</p>
            </Link>
            <Link href="/articles/medical/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">医療業界向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">診療報酬の早期現金化ガイド</p>
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
          <h2 className="text-xl font-bold md:text-2xl">障害福祉サービス事業所に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            給付費など公的機関向け債権に対応する会社を手数料・入金スピードで徹底比較。あなたの事業所に最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
