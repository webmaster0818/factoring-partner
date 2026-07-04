import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 北九州のおすすめ業者5選｜北九州エリア対応",
  description:
    "北九州でおすすめのファクタリング会社5社を徹底比較。小倉・八幡など北九州の製造業・建設業に対応する業者やオンライン完結型サービスを紹介。手数料・入金スピードで厳選。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/kitakyushu/",
  },
  openGraph: {
    title: "ファクタリング 北九州のおすすめ業者5選｜北九州エリア対応",
    description: "北九州エリアのファクタリング会社5社を手数料・スピードで比較。",
    url: "https://hyogo-shihoushoshi.jp/articles/kitakyushu/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const kitakyushuFeatures = [
  {
    title: "鉄鋼から発展したものづくりのまち",
    description:
      "北九州は官営八幡製鉄所の操業以来、鉄鋼を起点に素材・化学・機械などの製造業が集積してきたものづくりのまちです。製造業は材料仕入れの先行支出と納品後の入金までの期間が長く、売掛金を早期資金化するファクタリングの需要が高い地域です。",
  },
  {
    title: "環境産業・リサイクル分野の集積",
    description:
      "北九州は公害克服の経験を活かした環境産業・リサイクル関連事業の集積地としても知られています。環境関連の設備投資や、受注から入金までの資金ギャップを埋める手段として、ファクタリングが活用されています。",
  },
  {
    title: "福岡市の拠点とオンラインの両方を使える",
    description:
      "北九州からは在来線・新幹線で福岡市へアクセスしやすく、福岡市内に支店を置くファクタリング会社で対面相談も可能です。さらにオンライン完結型なら来店不要で東京の大手も利用でき、手数料の比較幅が広がります。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    area: "東京本社（福岡支店あり・オンライン対応）",
    features:
      "業界最大手級。累計買取額1,300億円超。2社間・3社間対応。最短2時間入金。法人・個人事業主対応。九州エリアの取引実績も豊富。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "大手ならではの安定感。福岡支店での対面相談も、北九州からのオンライン利用も可能。高額案件にも上限なし。製造業・建設業にも多数の実績。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "業界トップクラスの審査通過率。赤字決算・税金滞納でも柔軟対応。北九州からオンラインで即日入金も可能。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "手数料の安さが魅力。書類が少なく手続きが簡単。北九州・京築エリアから来店不要で利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利法人ゆえの低手数料。認定機関の安心感。北九州の中小製造業にもおすすめ。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "超少額から利用可能。土日祝も振込対応。手数料一律で明瞭。北九州のフリーランスに最適。",
  },
];

const kitakyushuIndustries = [
  {
    industry: "製造業（鉄鋼・素材・機械）",
    description:
      "鉄鋼から発展した北九州は素材・化学・機械などの製造業が集積しています。材料費の先行支出と、納品後の入金までの資金ギャップをファクタリングで解消するニーズが高い業種です。",
  },
  {
    industry: "建設業",
    description:
      "公共工事やプラント関連工事を手がける建設業者が多いエリアです。工事完了から入金までのサイトが長いため、外注費・材料費の支払いにファクタリングを活用するケースが多くあります。",
  },
  {
    industry: "環境・リサイクル産業",
    description:
      "北九州は環境産業・リサイクル関連事業の集積地です。処理設備などの先行投資や、受託業務の入金待ち期間の運転資金をファクタリングで確保する活用方法があります。",
  },
  {
    industry: "運送・物流業",
    description:
      "北九州港を擁する北九州は物流の拠点でもあります。燃料費・人件費など先払いの経費が多い運送業では、運送代金の売掛金を早期資金化するファクタリングの需要があります。",
  },
];

const faqs = [
  {
    question: "北九州でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "北九州で選ぶ際は、①オンラインで完結できるか②手数料が相場範囲内（2社間8〜18%、3社間1〜9%が目安・会社により異なる）か③製造業・建設業など北九州の主要業種に対応しているか④即日入金に対応しているか⑤実績と口コミが豊富かの5点を確認しましょう。福岡市に支店を置く会社と東京のオンライン完結型を両方比較するのがおすすめです。",
  },
  {
    question: "北九州市内に拠点がない会社でも利用できますか？",
    answer:
      "はい、利用できます。オンライン完結型のファクタリング会社なら、書類提出から契約・入金まで来店不要で完結します。対面で相談したい場合は、ビートレーディングの福岡支店など福岡市内の拠点を利用する方法もあります。北九州から福岡市へは在来線・新幹線でアクセスしやすい立地です。",
  },
  {
    question: "北九州のファクタリング手数料の相場は？",
    answer:
      "北九州のファクタリング手数料は、一般的な目安として2社間で8%〜18%、3社間で1%〜9%程度とされ、東京・福岡市とほぼ同水準です（実際の料率は会社・契約内容により異なります）。オンライン対応の全国展開型会社を利用すれば地域差なく利用できます。複数社の見積もりを必ず比較しましょう。",
  },
  {
    question: "北九州で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングやQuQuMoでは最短2時間、ラボルでは最短60分での入金実績があります。オンライン完結型のサービスを利用すれば、北九州にいながら即日入金が実現できます。午前中に申し込みと書類提出を完了させることがポイントです。",
  },
  {
    question: "製造業でファクタリングを利用する際の注意点は？",
    answer:
      "製造業の場合、納品・検収が完了した売掛金が対象になるのが原則です。注意点は①検収前の売掛金は対象外となる場合がある②売掛先（納品先）の信用力が審査に大きく影響する③継続取引の請求書は審査で有利になりやすい④支払サイトが長いほど手数料が上がる傾向がある点です。製造業の取引実績が豊富な会社を選びましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ファクタリング 北九州のおすすめ業者5選｜北九州エリア対応",
  description: "北九州エリアのファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/kitakyushu/" },
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
    { "@type": "ListItem", position: 3, name: "北九州のファクタリング会社", item: "https://hyogo-shihoushoshi.jp/articles/kitakyushu/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function KitakyushuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "北九州のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 北九州のおすすめ業者5選
            <br className="hidden md:block" />
            北九州エリア対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            北九州エリアで利用できるファクタリング会社を厳選紹介。福岡市の支店で対面相談できる会社から、オンライン完結型の大手まで、手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 北九州でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 北九州のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 北九州の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 北九州での業者選びのポイント</a></li>
            <li><a href="#kitakyushu-finance" className="hover:underline">5. 北九州の資金調達事情</a></li>
            <li><a href="#public-support" className="hover:underline">6. 北九州で使える公的支援機関・制度</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">北九州でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">北九州は鉄鋼から発展したものづくりのまち。製造業・建設業を中心にファクタリングの活用が広がっているエリアです。</p>
          <div className="space-y-4">
            {kitakyushuFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">北九州のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">北九州エリアで利用できるファクタリング会社を厳選して5社紹介します。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">北九州の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">北九州エリアの主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {kitakyushuIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">北九州での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">北九州でファクタリング会社を選ぶ際に確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">福岡市の拠点とオンライン完結型を比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                北九州市内に拠点を持つファクタリング会社は限られます。対面相談を希望する場合は福岡市内の支店、スピードと比較幅を重視する場合はオンライン完結型と、両方を候補に入れて最低3社以上の見積もりを比較しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">製造業・建設業に強い会社を選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                北九州は製造業・建設業の比率が高いエリアです。検収済み売掛金の扱いや出来高払いなど業種特有の取引形態への理解がある会社を選ぶと、審査がスムーズに進みます。
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

        {/* ── 北九州の資金調達事情 ─── */}
        <section id="kitakyushu-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">北九州の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            北九州は製造業・建設業の中小企業が多く、材料費や外注費の先行支出が発生しやすい産業構造です。ファクタリングは銀行融資を補完する手段として、北九州の中小企業にも浸透しつつあります。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">福岡銀行・西日本シティ銀行・北九州銀行など地銀の活用</strong>：地方銀行との取引がある場合、銀行系のファクタリングサービスや融資を相談できる可能性があります。まずはメインバンクに相談してみましょう</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">制度融資との使い分け</strong>：福岡県や北九州市の制度融資は低利ですが、保証審査を経るため入金まで時間がかかります。急ぎの支払いはファクタリングで対応し、中長期の運転資金は制度融資でまかなうのが賢い方法です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">補助金との併用</strong>：各種補助金は入金までの待ち期間があります。その間の運転資金にファクタリングを活用することで、事業を止めることなく資金繰りを維持できます</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 北九州の経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">北九州の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            北九州市は福岡市と並ぶ九州の政令指定都市であり、官営八幡製鉄所以来のものづくりの伝統を持つ工業都市です。素材・化学・機械などの製造業と、それを支える建設業・物流業で多様なファクタリング活用が広がっています。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">素材・化学・機械などの製造業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                鉄鋼を起点に発展した北九州には、素材・化学・機械関連の製造業が集積しています。材料費・外注費の先行支出に対して、納品後の売掛金をファクタリングで早期資金化するケースが多い業種です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">港湾を核とした物流</h3>
              <p className="text-sm leading-relaxed text-text-light">
                北九州港を核とした物流・運送業が地域経済を支えています。燃料費・人件費など先払い経費の比率が高い業種のため、運送代金の入金待ち期間をファクタリングでつなぐ活用方法があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">環境産業・プラント関連工事</h3>
              <p className="text-sm leading-relaxed text-text-light">
                環境・リサイクル産業やプラント関連工事は、設備投資や工事の先行費用が大きく、入金サイトも長くなりがちです。売掛金の早期資金化で資金繰りを安定させることが重要です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 北九州の公的支援機関・制度 ─── */}
        <section id="public-support" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">北九州で使える公的支援機関・制度</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、北九州の事業者が使える公的支援機関と制度を紹介します。相談はいずれも原則無料です。急ぎの資金ギャップはファクタリング、中長期の資金計画は公的支援という使い分けが基本です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">福岡県中小企業融資制度（制度融資）</h3>
              <p className="text-sm text-text-light">福岡県・福岡県信用保証協会・金融機関が連携して行う中小企業者向けの融資制度。北九州市内の事業者も対象で、低利で事業資金を借りられます。申込から実行まで時間がかかるため、急ぎの支払いはファクタリングでつなぎ、中長期の運転資金は制度融資でまかなうのが有効です。</p>
              <p className="mt-2 text-sm"><a href="https://www.pref.fukuoka.lg.jp/life/4/32/134/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">福岡県庁 中小企業支援・融資制度ページ</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">福岡県信用保証協会</h3>
              <p className="text-sm text-text-light">中小企業が金融機関から融資を受ける際の保証を担う公的機関。北九州市内にも窓口があり、保証付き融資のほか創業・経営支援の相談にも対応しています。保証付き融資は低コストですが審査に時間を要するため、入金までのつなぎにファクタリングを併用する使い分けが可能です。</p>
              <p className="mt-2 text-sm"><a href="https://www.fukuoka-cgc.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">福岡県信用保証協会 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">北九州市中小企業支援センター（公益財団法人北九州産業学術推進機構）</h3>
              <p className="text-sm text-text-light">北九州市内の中小・小規模事業者を支援する窓口（北九州市戸畑区・北九州テクノセンタービル内）。窓口相談や専門家派遣などを通じて、経営・技術の改善を支援しています。資金繰りを含む経営課題を身近に相談したい北九州市内の事業者の相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://www.ktc.ksrp.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">北九州市中小企業支援センター 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">北九州市の中小企業支援体制（北九州市公式）</h3>
              <p className="text-sm text-text-light">北九州市が公式サイトで案内する中小企業支援体制のページ。市の支援施策や相談窓口をまとめて確認できます。北九州市内でどの支援メニューが使えるかをまず把握したいときの入口です。</p>
              <p className="mt-2 text-sm"><a href="https://www.city.kitakyushu.lg.jp/contents/924_10599.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">北九州市公式サイト：北九州市の中小企業支援体制</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫（北九州市内の支店窓口）</h3>
              <p className="text-sm text-text-light">政府系金融機関で、小規模事業者や創業期でも利用しやすい低利融資を扱います。北九州市内の窓口は公式の店舗案内から確認できます。融資実行までの期間を要するため、即日性が必要な場面はファクタリング、恒常的な資金は公庫融資と役割を分けましょう。</p>
              <p className="mt-2 text-sm"><a href="https://www.jfc.go.jp/n/branch/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">日本政策金融公庫 店舗案内</a></p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-light">※掲載している各機関・制度の情報とリンク先は、2026年7月に公式サイトで確認しています。最新の受付状況・条件は各公式サイトをご確認ください。</p>
        </section>

        {/* ── 利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">北九州でファクタリングを利用する手順</h2>
          <div className="space-y-3">
            {[
              { step: "複数社に見積もり依頼", description: "福岡市に支店のある会社とオンライン完結型を含め最低3社以上に見積もりを依頼。オンラインで簡単に申し込めます。" },
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
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            福岡市内の拠点・業者情報を詳しく知りたい方は、<Link href="/articles/fukuoka/" className="font-medium text-primary underline">福岡のファクタリング会社5選</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* ── まとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：北九州でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">福岡市の拠点とオンラインの両にらみ</strong>：対面相談は福岡市内の支店、比較の幅とスピードはオンライン完結型で確保する。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">製造業・建設業に強い会社を選ぶ</strong>：北九州はものづくりのまち。業種特有の取引形態への理解がある会社を選ぶと審査がスムーズ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">最低3社以上の見積もりを比較</strong>：手数料の総額で比較し、最も条件の良い会社を選ぶ。オンラインで簡単に見積もりが取れる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">公的支援機関も併用</strong>：ファクタリングに加え、福岡県の制度融資・信用保証協会・北九州市中小企業支援センター・公庫も活用して資金繰りを安定させる。</span></li>
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
                    </ul>
                  </div>
                </section>

{/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/fukuoka/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">福岡のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">九州エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/hiroshima/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">広島のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">中国地方対応の業者を紹介</p>
            </Link>
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">おすすめ5選と活用事例</p>
            </Link>
            <Link href="/articles/manufacturing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">製造業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">仕入れ資金・設備投資の資金調達</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">北九州エリアのファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で北九州エリアのファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
