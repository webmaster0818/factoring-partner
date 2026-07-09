import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "盛岡市のファクタリング会社おすすめ｜即日対応・岩手県の資金調達ガイド【2026年】",
  description:
    "盛岡市でおすすめのファクタリング会社5社を徹底比較。卸売・小売、建設業、南部鉄器などの製造業まで、岩手の主要業種に対応するオンライン完結型サービスを手数料・入金スピードで厳選。岩手県全域から利用できます。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/morioka/",
  },
  openGraph: {
    title: "盛岡市のファクタリング会社おすすめ｜即日対応・岩手県の資金調達ガイド【2026年】",
    description: "盛岡市・岩手県のファクタリング会社5社を手数料・スピードで比較。",
    url: "https://hyogo-shihoushoshi.jp/articles/morioka/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const moriokaFeatures = [
  {
    title: "北東北の商業・サービスの中心都市",
    description:
      "盛岡市は岩手県の県庁所在地で、北東北における商業・サービスの中心的な役割を担う都市です。卸売・小売業やサービス業の事業者が多く、掛け取引で発生する売掛金を早期資金化するファクタリングは、仕入れ資金の確保や支払いサイトのギャップ解消に活用できます。",
  },
  {
    title: "広い県土と分散した商圏",
    description:
      "岩手県は本州で最も面積の広い県として知られ、沿岸部から内陸部まで商圏が分散しています。来店型の金融サービスは移動負担が大きいため、書類提出から契約までオンラインで完結するファクタリングが利用しやすい環境です。",
  },
  {
    title: "オンライン完結で東京の大手も利用可能",
    description:
      "盛岡駅は東北新幹線の主要駅で、秋田新幹線の分岐点でもありますが、ファクタリングはオンライン完結型を選べば移動自体が不要です。地場の選択肢が限られる盛岡でも、東京の大手をオンラインで利用することで手数料の比較幅が広がります。",
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
      "大手ならではの安定感。オンラインで盛岡から簡単に利用可能。高額案件にも上限なし。卸売業・建設業にも多数の実績。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "業界トップクラスの審査通過率。赤字決算・税金滞納でも柔軟対応。盛岡からオンラインで即日入金も可能。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "手数料の安さが魅力。書類が少なく手続きが簡単。岩手県全域から来店不要で利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利法人ゆえの低手数料。認定機関の安心感。岩手の中小企業にもおすすめ。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "超少額から利用可能。土日祝も振込対応。手数料一律で明瞭。盛岡のフリーランス・個人事業主に最適。",
  },
];

const iwateIndustries = [
  {
    industry: "卸売・小売業",
    description:
      "北東北の商業中心である盛岡には卸売・小売の事業者が集積しています。卸売業は仕入れの支払いが先行し、販売先からの入金は後になる業態です。月末締め翌月末払いなどの入金サイトとのギャップを、売掛金の早期資金化で埋める使い方が典型的です。",
  },
  {
    industry: "建設業",
    description:
      "道路・河川など公共インフラの維持や民間工事を担う建設業は、岩手でも主要な業種です。工事完了から入金までのサイトが長くなりがちで、その間の外注費・資材費・人件費の支払いにファクタリングを活用する事業者がいます。",
  },
  {
    industry: "製造業・伝統工芸",
    description:
      "岩手は南部鉄器に代表される伝統工芸のほか、部品加工などの製造業も立地しています。原材料の仕入れが先行する製造業では、納品後の売掛金を早期資金化して次の生産に回すサイクルづくりにファクタリングが役立ちます。",
  },
  {
    industry: "医療・介護",
    description:
      "高齢化が進む岩手では医療・介護事業者の資金需要もあります。診療報酬・介護報酬は入金まで約2ヶ月かかるため、その間の人件費や運営費の支払いにファクタリング（報酬債権の早期資金化）が活用されています。",
  },
];

const faqs = [
  {
    question: "盛岡市でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "盛岡市で選ぶ際は、①オンラインで完結できるか②手数料が相場範囲内（2社間8〜18%、3社間1〜9%）か③卸売・建設・製造など岩手の主要業種に対応しているか④即日入金に対応しているか⑤実績と口コミが豊富かの5点を確認しましょう。地場の選択肢が限られるため、東京の大手も含めてオンラインで比較することが重要です。",
  },
  {
    question: "盛岡市以外（一関・奥州・沿岸部など県内他エリア）からも利用できますか？",
    answer:
      "はい、オンライン完結型のファクタリング会社であれば、一関市・奥州市・花巻市・宮古市・釜石市など岩手県全域から利用可能です。県土が広い岩手でも、書類提出から契約までオンラインで完結するため移動は不要です。即日入金にも対応しています。",
  },
  {
    question: "盛岡のファクタリング手数料の相場は？",
    answer:
      "盛岡のファクタリング手数料は、2社間で8%〜18%、3社間で1%〜9%程度が一般的な目安で、東京とほぼ同水準です。オンライン対応の全国展開型会社を利用することで、地域差なく競争力のある手数料で利用できます。複数社の見積もりを必ず比較しましょう。",
  },
  {
    question: "盛岡市で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングやQuQuMoでは最短2時間、ラボルでは最短60分での入金に対応しています。オンライン完結型のサービスを利用すれば、盛岡市にいながら即日入金が実現できます。午前中の申し込みがポイントです。",
  },
  {
    question: "卸売業でファクタリングを利用する際の注意点は？",
    answer:
      "卸売業は取引先数が多く売掛金の管理が複雑になりやすいため、①どの売掛先の債権を売却するか（信用力の高い売掛先が有利）②請求書・納品書など取引を証明する書類が揃っているか③手数料を上乗せしても利益が残るか（薄利の商材は特に注意）の3点を確認しましょう。売掛先の信用力が高いほど手数料は下がる傾向があります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "盛岡市のファクタリング会社おすすめ｜即日対応・岩手県の資金調達ガイド【2026年】",
  description: "盛岡市・岩手県のファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/morioka/" },
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
    { "@type": "ListItem", position: 3, name: "盛岡市のファクタリング会社", item: "https://hyogo-shihoushoshi.jp/articles/morioka/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function MoriokaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "盛岡市のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            盛岡市のファクタリング会社おすすめ
            <br className="hidden md:block" />
            即日対応・岩手県の資金調達ガイド【2026年】
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            盛岡市・岩手県で利用できるファクタリング会社を厳選紹介。北東北の商業中心である盛岡の産業事情を踏まえ、オンライン完結型の会社を手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 盛岡市でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 盛岡市のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 岩手の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 盛岡市での業者選びのポイント</a></li>
            <li><a href="#iwate-finance" className="hover:underline">5. 岩手の資金調達事情</a></li>
            <li><a href="#public-support" className="hover:underline">6. 盛岡市・岩手県で使える公的支援機関・制度</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">盛岡市でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">盛岡市は岩手県の県庁所在地であり、北東北の商業・サービスをけん引する都市です。商業都市ならではの掛け取引の多さが、ファクタリングの活用場面につながります。</p>
          <div className="space-y-4">
            {moriokaFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">盛岡市のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">盛岡市・岩手県全域から利用できるファクタリング会社を厳選して5社紹介します。いずれもオンライン対応で、来店不要で手続きできます。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">岩手の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">岩手の主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {iwateIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">盛岡市での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">盛岡市・岩手県でファクタリング会社を選ぶ際に確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">東京の大手とオンラインで比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                盛岡の地場ファクタリング会社は選択肢が限られます。東京の大手はオンラインで全国対応しているため、手数料やサービス内容を比較し、最も条件の良い会社を選びましょう。最低3社以上の見積もりを取ることが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">売掛先の信用力を意識して債権を選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                卸売・小売の取引が多い盛岡では、複数の売掛先を持つ事業者が少なくありません。ファクタリングの手数料は売掛先の信用力に大きく左右されるため、信用力の高い売掛先の債権を選んで売却すると条件が良くなりやすいです。
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

        {/* ── 岩手の資金調達事情 ─── */}
        <section id="iwate-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">岩手の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            岩手県の中小企業の資金調達は銀行融資が中心ですが、審査から実行まで時間を要する場面もあります。ファクタリングは融資と異なり負債にならず、入金待ちの短期的なギャップを埋める補完手段として位置づけられます。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">岩手銀行・東北銀行・北日本銀行など地銀の活用</strong>：盛岡には本店を置く地方銀行が複数あります。取引のある金融機関には、まず資金繰りの相談をしてみましょう。制度融資や銀行系サービスの案内を受けられることもあります</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">制度融資とファクタリングの使い分け</strong>：県や市の制度融資は低利ですが、申込から実行まで時間がかかります。急ぎの支払いはファクタリングでつなぎ、中長期の運転資金は制度融資でまかなうのが賢い方法です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">補助金の入金待ち期間への対応</strong>：各種補助金は精算払いが基本で、入金まで期間が空きます。その間の支払いにファクタリングを活用すれば、事業を止めることなく資金繰りを維持できます</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 盛岡の経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">盛岡の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            盛岡市は行政機能と商業機能が集まる岩手県の中心都市で、周辺市町村を含めた都市圏の消費とビジネスを支えています。商業・建設・製造・サービスが混在する経済圏では、業種ごとに異なる資金化ニーズがあります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">卸売・小売の仕入れ資金</h3>
              <p className="text-sm leading-relaxed text-text-light">
                商業都市・盛岡では、仕入れの支払いと販売代金の回収の時間差が資金繰りの悩みになりがちです。販売先への売掛金を早期資金化すれば、季節商戦前の仕入れ強化などの機動的な資金確保ができます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">公共工事・民間工事の建設資金</h3>
              <p className="text-sm leading-relaxed text-text-light">
                インフラ維持・更新の工事を担う建設業者にとって、工事完了から入金までのサイトの長さは慢性的な課題です。外注費や資材費の支払いが先行する局面で、完成済み工事の売掛金をファクタリングで資金化する方法があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">医療・介護サービスの運営資金</h3>
              <p className="text-sm leading-relaxed text-text-light">
                高齢化が進む岩手では医療・介護施設の役割が大きく、診療報酬・介護報酬の入金まで約2ヶ月かかる構造的なギャップがあります。報酬債権のファクタリングは3社間型が使いやすく、手数料も低めになる傾向があります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 盛岡市・岩手県の公的支援機関・制度 ─── */}
        <section id="public-support" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">盛岡市・岩手県で使える公的支援機関・制度</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、盛岡市・岩手県の公的支援機関を紹介します。相談はいずれも原則無料です。急ぎの資金ギャップはファクタリング、中長期の資金計画は公的支援という使い分けが基本です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">岩手県よろず支援拠点</h3>
              <p className="text-sm text-text-light">国が全都道府県に設置した無料の経営相談所。資金繰り・売上拡大など経営全般を何度でも無料で相談できます。ファクタリング利用の前に、資金繰り全体を専門家に整理してもらいたいときの相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://iwate-yorozu.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">岩手県よろず支援拠点 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">岩手県信用保証協会</h3>
              <p className="text-sm text-text-light">中小企業が金融機関から融資を受ける際の保証を担う公的機関。保証付き融資は低コストですが審査に時間を要するため、入金までのつなぎにファクタリングを併用する使い分けが可能です。</p>
              <p className="mt-2 text-sm"><a href="http://www.cgc-iwate.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">岩手県信用保証協会 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">盛岡商工会議所</h3>
              <p className="text-sm text-text-light">経営相談・融資あっせん・補助金情報の提供を行う地域総合経済団体。マル経融資（小規模事業者経営改善資金）の相談や創業支援も行っています。盛岡市内の小規模事業者が低利融資のあっせんを受けたいときの相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://www.ccimorioka.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">盛岡商工会議所 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫（岩手県内店舗）</h3>
              <p className="text-sm text-text-light">政府系金融機関。小規模事業者や創業期でも利用しやすい低利融資を扱います。融資実行までの期間を要するため、即日性が必要な場面はファクタリング、恒常的な資金は公庫融資と役割を分けましょう。</p>
              <p className="mt-2 text-sm"><a href="https://www.jfc.go.jp/n/branch/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">日本政策金融公庫 店舗案内</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">全国の公的支援窓口を探す</h3>
              <p className="text-sm text-text-light">岩手県以外に取引先・拠点がある場合や、他県の窓口も確認したい場合は、47都道府県のよろず支援拠点・信用保証協会をまとめた全国マップが便利です。</p>
              <p className="mt-2 text-sm"><Link href="/articles/zenkoku-shikinguri-shien/" className="font-medium text-primary underline">47都道府県 公的資金繰り支援マップ</Link></p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-light">※掲載している各機関の情報とリンク先は、2026年7月に公式サイトへの到達を確認しています。最新の受付状況・条件は各公式サイトをご確認ください。</p>
        </section>

        {/* ── 利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">盛岡市でファクタリングを利用する手順</h2>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：盛岡市でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">東京の大手もオンラインで利用可能</strong>：盛岡は地場の選択肢が限られる。オンライン完結型なら来店不要で全国の会社と比較できる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">売掛先の信用力を意識する</strong>：卸売・小売の取引が多い盛岡では、信用力の高い売掛先の債権を選ぶと手数料が下がりやすい。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">最低3社以上の見積もりを比較</strong>：手数料の総額で比較し、最も条件の良い会社を選ぶ。オンラインで簡単に見積もりが取れる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">公的支援機関も併用</strong>：よろず支援拠点・信用保証協会・公庫・商工会議所を活用し、中長期の資金計画も整える。</span></li>
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
                    <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
                    <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
                    <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
                    <li><Link href="/articles/area-hub/" className="font-medium text-primary underline">エリア別ファクタリングガイド</Link>｜他の都市や全国対応の会社もまとめて比較できます。</li>
                    </ul>
                  </div>
                </section>

{/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/sendai/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">仙台のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">東北エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/aomori-city/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">青森市のファクタリング会社おすすめ</p>
              <p className="mt-1 text-sm text-text-light">青森県の資金調達ガイド</p>
            </Link>
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">おすすめ5選と活用事例</p>
            </Link>
            <Link href="/articles/medical/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">医療機関向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">診療報酬の早期資金化</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">岩手県のファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で盛岡市・岩手県のファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
