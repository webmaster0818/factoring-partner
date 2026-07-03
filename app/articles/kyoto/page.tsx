import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 京都のおすすめ業者5選｜即日対応・公的支援窓口も解説",
  description:
    "京都でおすすめのファクタリング会社5社を徹底比較。観光・伝統産業・研究開発型企業が集積する京都の資金繰りニーズに合わせ、オンライン完結型を中心に手数料・入金スピードで厳選。京都府・京都市の公的支援窓口も紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/kyoto/",
  },
  openGraph: {
    title: "ファクタリング 京都のおすすめ業者5選｜即日対応・公的支援窓口も解説",
    description: "京都で利用できるファクタリング会社5社を手数料・スピードで比較。公的支援窓口も解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/kyoto/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const kyotoFeatures = [
  {
    title: "観光・伝統産業が集積する都市",
    description:
      "京都は世界的な観光都市であり、宿泊・飲食・小売など観光関連の事業者が集積しています。観光業は繁忙期と閑散期の売上変動が大きく、仕入れや人件費の先行支出をファクタリングで平準化するニーズがあります。",
  },
  {
    title: "伝統産業と研究開発型企業の共存",
    description:
      "西陣織・京友禅・清水焼などの伝統産業が受け継がれる一方、大学発ベンチャーや研究開発型の企業も盛んな土地柄です。製作期間や開発期間が長い業種では、納品から入金までの資金ギャップをファクタリングで埋める活用が考えられます。",
  },
  {
    title: "オンライン完結で全国の大手も利用可能",
    description:
      "ファクタリングはオンライン完結が主流となっており、京都からも東京の大手ファクタリング会社にオンラインでアクセスできます。全国対応の会社を選択肢に入れることで、手数料の比較幅が広がります。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    area: "東京本社（オンライン対応）",
    features:
      "業界最大手級。累計買取額1,300億円超。2社間・3社間対応。最短2時間入金。法人・個人事業主対応。全国の取引実績が豊富。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "大手ならではの安定感。オンラインで京都から簡単に利用可能。高額案件にも上限なし。多様な業種への対応実績があります。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "業界トップクラスの審査通過率。赤字決算・税金滞納でも柔軟対応。京都からオンラインで即日入金も可能。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "手数料の安さが魅力。書類が少なく手続きが簡単。京都府内どこからでも来店不要で利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利法人ゆえの低手数料。認定機関の安心感。京都の中小企業にもおすすめ。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "超少額から利用可能。土日祝も振込対応。手数料一律で明瞭。京都のフリーランス・職人系個人事業主に最適。",
  },
];

const kyotoIndustries = [
  {
    industry: "観光・宿泊業",
    description:
      "京都は国内外から観光客が訪れる観光都市で、宿泊・飲食・土産物などの事業者が多いエリアです。繁忙期前の仕入れ・人件費の先行支出や、閑散期の運転資金確保にファクタリングを活用するケースが考えられます。",
  },
  {
    industry: "伝統産業・ものづくり",
    description:
      "西陣織・京友禅・清水焼など、京都には伝統工芸のものづくり事業者が集積しています。製作期間が長く納品から入金までのサイトも長くなりがちなため、売掛金の早期資金化ニーズがあります。",
  },
  {
    industry: "IT・受託開発",
    description:
      "京都には大学発ベンチャーや研究開発型企業、IT関連の事業者も盛んです。受託開発は検収から入金までの期間が長い契約が多く、その間の人件費・外注費の支払いにファクタリングが活用されています。",
  },
  {
    industry: "医療・介護",
    description:
      "医療・介護事業者のファクタリング需要は全国的に高まっています。診療報酬・介護報酬は入金まで約2ヶ月かかるため、その間の人件費や運営費の支払いにファクタリングが活用されています。",
  },
];

const faqs = [
  {
    question: "京都でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "京都で選ぶ際は、①オンラインで完結できるか②手数料が相場範囲内（2社間8〜18%、3社間1〜9%が目安・会社により異なる）か③自社の業種の商習慣に対応しているか④即日入金に対応しているか⑤実績と口コミが豊富かの5点を確認しましょう。ファクタリングはオンライン完結が主流のため、東京の大手を含めて選択肢を広く持つことが重要です。",
  },
  {
    question: "京都に店舗がない会社でも利用できますか？",
    answer:
      "はい、利用できます。現在のファクタリングはオンライン完結が主流で、申し込みから書類提出・契約・入金まですべてオンラインで完結します。京都市内はもちろん、宇治市・亀岡市・福知山市など京都府内のどこからでも来店不要で利用可能です。",
  },
  {
    question: "京都のファクタリング手数料の相場は？",
    answer:
      "手数料の目安は2社間で8%〜18%、3社間で1%〜9%程度とされますが、実際の料率は会社や売掛先の信用力・契約内容によって異なります。オンライン対応の全国展開型の会社を利用すれば地域による差はほとんどありません。複数社の見積もりを必ず比較しましょう。",
  },
  {
    question: "京都で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングやQuQuMoでは最短2時間、ラボルでは最短60分での入金に対応しています。オンライン完結型のサービスを利用すれば、京都にいながら即日入金が実現できます。午前中の申し込みがポイントです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ファクタリング 京都のおすすめ業者5選｜即日対応・公的支援窓口も解説",
  description: "京都で利用できるファクタリング会社5社を手数料・スピードで比較。公的支援窓口も解説。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/kyoto/" },
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
    { "@type": "ListItem", position: 3, name: "京都のファクタリング会社", item: "https://hyogo-shihoushoshi.jp/articles/kyoto/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function KyotoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "京都のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 京都のおすすめ業者5選
            <br className="hidden md:block" />
            即日対応・公的支援窓口も解説
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            京都で利用できるファクタリング会社を厳選紹介。オンライン完結型の大手を中心に、手数料と入金スピードで比較します。京都府・京都市の公的支援窓口もあわせて解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 京都でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 京都のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 京都の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 京都での業者選びのポイント</a></li>
            <li><a href="#kyoto-finance" className="hover:underline">5. 京都の資金調達事情</a></li>
            <li><a href="#public-support" className="hover:underline">6. 京都で使える公的支援機関・制度</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">京都でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">京都は観光・伝統産業・研究開発型企業が共存する都市。業種ごとに資金繰りの課題が異なり、ファクタリングの活用シーンも多様です。</p>
          <div className="space-y-4">
            {kyotoFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">京都のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">京都から利用できるファクタリング会社を厳選して5社紹介します。ファクタリングはオンライン完結が主流のため、全国対応の会社を中心に選定しています。</p>
          <div className="space-y-6">
            {recommendedCompanies.map((company, index) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">{company.name}</h3>
                    <p className="mt-1 text-xs text-text-light">拠点：{company.area}</p>
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

        {/* ── 業種別ニーズ ─── */}
        <section id="industries" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">京都の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">京都の主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {kyotoIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">京都での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">京都でファクタリング会社を選ぶ際に確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">全国対応の大手とオンラインで比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングはオンライン完結が主流で、東京の大手も京都から問題なく利用できます。地場の会社に限定せず、手数料やサービス内容を広く比較し、最も条件の良い会社を選びましょう。最低3社以上の見積もりを取ることが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">自社の業種・商習慣に理解のある会社を選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                観光・宿泊業の季節変動、伝統産業の長い製作サイト、受託開発の検収払いなど、京都の主要業種には固有の商習慣があります。自社の業種の売掛金の性質を理解してくれる会社を選ぶと審査がスムーズに進みます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">入金スピードを重視する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                急ぎの資金需要が多い場合は、即日入金に対応した会社を優先的に選びましょう。オンライン完結型は審査が早く、午前中に申し込めば当日中の入金が期待できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">悪徳業者への注意</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングを装った違法な貸金業者には注意が必要です。契約書を交付しない、手数料が極端に安い・高い、会社の所在地が不明確といった特徴がある場合は利用を避けましょう。実績のある大手を選ぶことが安全です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 京都の資金調達事情 ─── */}
        <section id="kyoto-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">京都の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            京都には地域金融機関や公的支援機関が揃っており、中小企業の資金調達手段は比較的豊富です。ファクタリングは融資と異なり負債にならない資金調達手段として、これらを補完する位置づけで活用できます。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">京都銀行・京都信用金庫など地域金融機関の活用</strong>：地域金融機関との取引がある場合は、融資やビジネスマッチングなどの支援も受けられます。まずはメインバンクに相談してみましょう</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">京都府・京都市の制度融資</strong>：制度融資は低利ですが申込から実行まで時間がかかります。急ぎの支払いはファクタリングで対応し、中長期的には制度融資を活用するのが賢い方法です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">補助金との併用</strong>：各種補助金の入金待ち期間にファクタリングを活用することで、事業を止めることなく資金繰りを維持できます</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 京都の経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">京都の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            京都は観光・伝統産業に加え、研究開発型の企業や大学発ベンチャーの活動が盛んな都市です。多様な業種でのファクタリング活用シーンを紹介します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">観光・インバウンド関連</h3>
              <p className="text-sm leading-relaxed text-text-light">
                宿泊・飲食・小売・観光サービスなど、観光関連の事業者は季節による売上変動が大きい業種です。繁忙期前の仕入れ・人件費の先行支出に対して、売掛金のファクタリングで資金を確保する活用が考えられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">伝統産業・ものづくり</h3>
              <p className="text-sm leading-relaxed text-text-light">
                西陣織・京友禅などの伝統産業では、製作期間が長く、納品から入金までのサイトも長くなりがちです。問屋・小売への売掛金を早期資金化することで、材料仕入れや職人への支払いを安定させられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">研究開発型企業・受託開発</h3>
              <p className="text-sm leading-relaxed text-text-light">
                京都には研究開発型の企業やIT関連事業者が集積しています。受託開発・受託研究は検収から入金までの期間が長い契約が多いため、その間の人件費・外注費の支払いにファクタリングが活用されています。
              </p>
            </div>
          </div>
        </section>

        {/* ── 京都の公的支援機関・制度 ─── */}
        <section id="public-support" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">京都で使える公的支援機関・制度</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、京都の公的支援機関と制度を紹介します。相談はいずれも原則無料です。急ぎの資金ギャップはファクタリング、中長期の資金計画は公的支援という使い分けが基本です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">京都府中小企業制度融資</h3>
              <p className="text-sm text-text-light">京都府・金融機関・京都信用保証協会が協調して行う中小企業者向けの融資制度。低利で事業資金を借りられます。申込から実行まで時間がかかるため、急ぎの支払いはファクタリングでつなぎ、中長期の運転資金は制度融資でまかなうのが有効です。</p>
              <p className="mt-2 text-sm"><a href="https://www.pref.kyoto.jp/kinyu/seido.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">京都府公式サイト：中小企業制度融資一覧</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">京都信用保証協会</h3>
              <p className="text-sm text-text-light">中小企業が金融機関から融資を受ける際の保証を担う公的機関（本所：京都市下京区）。保証付き融資は低コストですが審査に時間を要するため、入金までのつなぎにファクタリングを併用する使い分けが可能です。</p>
              <p className="mt-2 text-sm"><a href="https://kyosinpo.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">京都信用保証協会 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">京都府よろず支援拠点</h3>
              <p className="text-sm text-text-light">国が全都道府県に設置した無料の経営相談所。資金繰り・売上拡大など経営全般を何度でも無料で相談できます。ファクタリング利用の前に資金繰り全体を専門家に整理してもらいたいときの相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://kyotoyorozu.go.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">京都府よろず支援拠点 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫（京都府内の支店）</h3>
              <p className="text-sm text-text-light">政府系金融機関で、京都府内にも支店窓口があります。小規模事業者や創業期でも利用しやすい低利融資を扱います。融資実行までの期間を要するため、即日性が必要な場面はファクタリング、恒常的な資金は公庫融資と役割を分けましょう。</p>
              <p className="mt-2 text-sm"><a href="https://www.jfc.go.jp/n/branch/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">日本政策金融公庫 店舗案内</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">京都市中小企業融資制度</h3>
              <p className="text-sm text-text-light">京都市が金融機関・京都信用保証協会と協調して行う市内中小企業向けの融資制度。市内の事業者が低利の運転資金・設備資金を調達したい場合の選択肢です。実行までの待ち期間のつなぎにはファクタリングを併用できます。</p>
              <p className="mt-2 text-sm"><a href="https://www.city.kyoto.lg.jp/sankan/page/0000119631.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">京都市公式サイト：京都市中小企業融資制度</a></p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-light">※掲載している各機関・制度の情報とリンク先は、2026年7月に公式サイトで確認しています。最新の受付状況・条件は各公式サイトをご確認ください。</p>
        </section>

        {/* ── 利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">京都でファクタリングを利用する手順</h2>
          <div className="space-y-3">
            {[
              { step: "複数社に見積もり依頼", description: "東京の大手とオンライン完結型を含め最低3社以上に見積もりを依頼。オンラインで簡単に申し込めます。" },
              { step: "必要書類の提出", description: "請求書・通帳コピー・身分証明書などをオンラインでアップロード。来店不要で手続きが完結します。" },
              { step: "審査・見積もり比較", description: "各社の手数料・条件を比較。手数料の総額で判断し、最も条件の良い会社を選びましょう。" },
              { step: "契約・入金", description: "電子契約でオンライン完結。最短即日で指定口座に入金されます。" },
              { step: "売掛金回収後の送金", description: "売掛先からの入金後、ファクタリング会社に送金して完了です。" },
            ].map((item, index) => (
              <div key={item.step} className="flex items-start gap-4 rounded-lg border border-border bg-white p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</span>
                <div>
                  <h3 className="font-bold text-text-main">{item.step}</h3>
                  <p className="mt-1 text-sm text-text-light">{item.description}</p>
                </div>
              </div>
            ))}
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

        {/* ── まとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：京都でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">オンライン完結が主流</strong>：東京の大手も京都から来店不要で利用可能。地場に限定せず広く比較する。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">業種の商習慣に理解のある会社を選ぶ</strong>：観光の季節変動・伝統産業の長い製作サイト・受託開発の検収払いなど、自社の売掛金の性質に合う会社を。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">最低3社以上の見積もりを比較</strong>：手数料の総額で比較し、最も条件の良い会社を選ぶ。オンラインで簡単に見積もりが取れる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">公的支援機関も併用</strong>：ファクタリングに加え、京都府・京都市の制度融資・信用保証協会・公庫なども活用して資金繰りを安定させる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">ノンリコースを確認</strong>：償還請求権なし（ノンリコース）の会社を選び、安全な取引を心がける。</span></li>
            </ul>
          </div>
        </section>

                {/* ── 関連ツール・データ ─── */}
                <section className="mb-12">
                  <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
                    <p className="mb-3 font-bold text-primary">あわせて使いたいツール・データ</p>
                    <ul className="space-y-2 text-sm text-text-light">
                    <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
                    <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
                    <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
                    </ul>
                  </div>
                </section>

{/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/osaka/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">大阪のファクタリング会社8選</p>
              <p className="mt-1 text-sm text-text-light">関西エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/kobe/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">神戸のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">港湾・ものづくりの街の資金調達</p>
            </Link>
            <Link href="/articles/tokyo/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">東京のファクタリング会社10選</p>
              <p className="mt-1 text-sm text-text-light">即日対応の会社を比較</p>
            </Link>
            <Link href="/articles/medical/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">医療機関向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">診療報酬の早期資金化</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">京都で使えるファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で京都から利用できるファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
