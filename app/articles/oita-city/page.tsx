import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 大分のおすすめ業者5選｜大分県全域対応",
  description:
    "大分市でおすすめのファクタリング会社5社を徹底比較。オンライン完結で大分県内どこからでも利用できるサービスを中心に、手数料・入金スピードで厳選。製造業・温泉観光・建設業の資金繰りにも対応。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/oita-city/",
  },
  openGraph: {
    title: "ファクタリング 大分のおすすめ業者5選｜大分県全域対応",
    description: "大分市・大分県のファクタリング会社5社を手数料・スピードで比較。",
    url: "https://hyogo-shihoushoshi.jp/articles/oita-city/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const oitaFeatures = [
  {
    title: "臨海部の重化学工業が集積",
    description:
      "大分市の臨海部には石油化学や鉄鋼などの大規模な工場が立地し、その周辺に部品・加工・メンテナンス・工事を担う関連事業者が集積しています。大口取引では入金サイトが長くなりがちで、売掛金を早期資金化するファクタリングのニーズがある地域です。",
  },
  {
    title: "温泉観光県としての資金需要",
    description:
      "大分県は別府や由布院など全国的に知られる温泉地を抱える観光県です。宿泊・飲食・交通など観光関連の事業者が多く、季節による売上変動が大きい業種では、繁忙期前の仕入れ・人件費の支払いにファクタリングが活用されています。",
  },
  {
    title: "オンライン完結で東京の大手も利用可能",
    description:
      "大分からは東京の大手ファクタリング会社にオンラインでアクセスできます。地場のファクタリング会社は選択肢が限られるため、東京の大手もオンラインで利用することで、手数料の比較幅が広がります。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    area: "東京本社（オンライン対応）",
    features:
      "業界最大手級。累計買取額1,300億円超。2社間・3社間対応。最短2時間入金。法人・個人事業主対応。九州エリアの取引実績も豊富。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "大手ならではの安定感。大分からオンラインで簡単に利用可能。高額案件にも上限なし。九州エリアの事業者の利用しやすさが魅力。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "業界トップクラスの審査通過率。赤字決算・税金滞納でも柔軟対応。大分からオンラインで即日入金も可能。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "手数料の安さが魅力。書類が少なく手続きが簡単。大分県内どこからでも来店不要で利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利法人ゆえの低手数料。認定機関の安心感。大分の中小企業にもおすすめ。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "超少額から利用可能。土日祝も振込対応。手数料一律で明瞭。大分のフリーランス・個人事業主に最適。",
  },
];

const oitaIndustries = [
  {
    industry: "製造業（石油化学・鉄鋼関連）",
    description:
      "臨海部の大規模工場を核に、部品・加工・メンテナンスなどの関連事業者が集積しています。大手メーカーとの取引は入金サイトが長くなりがちで、材料費や外注費の先行支出をファクタリングでつなぐ活用があります。",
  },
  {
    industry: "観光・宿泊・飲食",
    description:
      "別府・由布院など温泉観光地を抱える大分では、宿泊・飲食・交通など観光関連の事業者が多くいます。季節による売上変動が大きいため、繁忙期前の仕入れや人員確保の支払いにファクタリングが活用されています。",
  },
  {
    industry: "建設業",
    description:
      "公共工事やインフラ整備・民間建築に携わる建設業者にとって、工事完了から入金までの資金ギャップは大きな課題です。外注費や材料費の支払いをファクタリングでつなぐ活用が広がっています。",
  },
  {
    industry: "運送・物流",
    description:
      "臨海工業地帯の資材・製品輸送や県内の物流を担う運送業は、燃料費や人件費が先行する一方で運賃の入金サイトが長くなりがちです。請求書を早期資金化することで、資金繰りを安定させることができます。",
  },
];

const faqs = [
  {
    question: "大分でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "大分で選ぶ際は、①オンラインで完結できるか②手数料が相場範囲内（2社間8〜18%、3社間1〜9%が目安）か③製造・観光・建設など大分の主要業種に対応しているか④即日入金に対応しているか⑤実績と口コミが豊富かの5点を確認しましょう。東京の大手もオンラインで利用できるため、選択肢を広く持つことが重要です。",
  },
  {
    question: "大分県内の他地域（別府・中津・日田など）からも利用できますか？",
    answer:
      "はい、オンライン完結型のファクタリング会社であれば、別府・中津・日田・佐伯・宇佐など大分県内のどこからでも利用可能です。書類提出もオンラインで完結するため、地理的な制約は一切ありません。即日入金にも対応しています。",
  },
  {
    question: "大分のファクタリング手数料の相場は？",
    answer:
      "手数料の一般的な目安は、2社間で8〜18%、3社間で1〜9%程度です（会社により異なります）。オンライン対応の全国展開型会社を利用することで、地域差なく競争力のある手数料で利用できます。複数社の見積もりを必ず比較しましょう。",
  },
  {
    question: "旅館・ホテルなど観光業の売掛金でもファクタリングを利用できますか？",
    answer:
      "はい、事業者間の掛け取引で発生した売掛金（請求書）であれば、旅行会社経由の宿泊代金や法人契約の宴会・宿泊料など観光業の売掛金も対象になります。注意点は、売掛先が法人・事業者であること、請求書と入金実績を確認できる通帳などの書類が必要なことです。個人客からの現金・カード売上は対象外となる点に注意しましょう。",
  },
  {
    question: "大分で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングやQuQuMoでは最短2時間、ラボルでは最短60分での入金実績があります。オンライン完結型のサービスを利用すれば、大分にいながら即日入金が実現できます。午前中の申し込みがポイントです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ファクタリング 大分のおすすめ業者5選｜大分県全域対応",
  description: "大分市・大分県のファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/oita-city/" },
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
    { "@type": "ListItem", position: 3, name: "大分のファクタリング会社", item: "https://hyogo-shihoushoshi.jp/articles/oita-city/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function OitaCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "大分のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 大分のおすすめ業者5選
            <br className="hidden md:block" />
            大分県全域対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            大分市・大分県で利用できるファクタリング会社を厳選紹介。オンライン完結型の大手を中心に、手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 大分でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 大分のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 大分の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 大分での業者選びのポイント</a></li>
            <li><a href="#oita-finance" className="hover:underline">5. 大分の資金調達事情</a></li>
            <li><a href="#public-support" className="hover:underline">6. 大分で使える公的支援機関・制度</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大分でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">大分は臨海部の重化学工業と温泉観光に強みを持つ東九州の中核エリア。オンライン完結型の普及で、ファクタリングの選択肢が広がっています。</p>
          <div className="space-y-4">
            {oitaFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大分のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">大分市・大分県で利用できるファクタリング会社を厳選して5社紹介します。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大分の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">大分エリアの主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {oitaIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大分での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">大分でファクタリング会社を選ぶ際に確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">東京の大手とオンラインで比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                大分の地場ファクタリング会社は選択肢が限られます。東京の大手はオンラインで全国対応しているため、手数料やサービス内容を比較し、最も条件の良い会社を選びましょう。最低3社以上の見積もりを取ることが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">製造・観光の売掛金への理解がある会社を選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                大分は製造業と観光業の比率が高いエリアです。大手メーカーとの取引や法人契約の宿泊料など、業種特有の売掛金の形態に理解がある会社を選ぶと審査がスムーズに進みます。
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

        {/* ── 大分の資金調達事情 ─── */}
        <section id="oita-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大分の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            大分の中小企業にとって、資金調達の中心は地方銀行や信用金庫からの融資、および県・市の制度融資です。ファクタリングは銀行融資を補完する手段として、審査スピードと担保・保証人不要の点で使い分けられています。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">大分銀行など地銀の活用</strong>：地方銀行との取引がある場合、まずはメインバンクに融資や資金繰りの相談をするのが基本です。融資までの時間が課題の場合にファクタリングが選択肢になります</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">制度融資との使い分け</strong>：県・市の制度融資は低利ですが、申込から実行まで時間がかかります。急ぎの支払いはファクタリングで対応し、中長期の運転資金は制度融資を活用するのが賢い方法です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">補助金との併用</strong>：各種補助金の入金待ち期間にファクタリングを活用することで、事業を止めることなく資金繰りを維持できます</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 大分の経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大分の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            大分は臨海部の石油化学・鉄鋼などの重化学工業と、別府・由布院に代表される温泉観光が経済の柱となる東九州の中核都市です。売上の入金サイトが長くなりがちな業種が多く、多様なシーンでファクタリングが活用されています。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">工場関連の加工・メンテナンス・工事</h3>
              <p className="text-sm leading-relaxed text-text-light">
                臨海部の大規模工場と取引する加工・メンテナンス・プラント工事の事業者は、人件費・材料費が先行する一方、検収から入金までのサイトが長くなりがちです。請求書を早期資金化することで、次の案件への支払いを止めずに事業を回せます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">温泉観光・宿泊・飲食</h3>
              <p className="text-sm leading-relaxed text-text-light">
                別府・由布院など温泉観光地を抱える大分では、宿泊・飲食・交通事業者の資金需要に季節変動があります。繁忙期前の仕入れ・改装・人員確保の支払いに、売掛金の早期資金化が活用されています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">建設・インフラ整備</h3>
              <p className="text-sm leading-relaxed text-text-light">
                公共工事や民間建築に携わる建設業者は、工事完了から入金までのサイトが長く、外注費・材料費の支払いが先行します。ファクタリングで資金繰りを安定させることが重要です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 大分の公的支援機関・制度 ─── */}
        <section id="public-support" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大分で使える公的支援機関・制度</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、大分の公的支援機関と制度を紹介します。相談はいずれも原則無料です。急ぎの資金ギャップはファクタリング、中長期の資金計画は公的支援という使い分けが基本です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">大分県よろず支援拠点</h3>
              <p className="text-sm text-text-light">国が全都道府県に設置した無料の経営相談所。資金繰り・売上拡大など経営全般を何度でも無料で相談できます。ファクタリング利用の前に資金繰り全体を専門家に整理してもらいたいときの相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://www.yorozu-oita.go.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">大分県よろず支援拠点 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">大分県信用保証協会</h3>
              <p className="text-sm text-text-light">中小企業が金融機関から融資を受ける際の保証を担う公的機関。保証付き融資は低コストですが審査に時間を要するため、入金までのつなぎにファクタリングを併用する使い分けが可能です。</p>
              <p className="mt-2 text-sm"><a href="http://www.oita-cgc.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">大分県信用保証協会 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">大分商工会議所</h3>
              <p className="text-sm text-text-light">経営相談・融資あっせん・補助金情報の提供を行う地域総合経済団体。マル経融資（小規模事業者経営改善資金）や創業支援も行っています。地域の小規模事業者が低利融資のあっせんを受けたいときの相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://oita-cci.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">大分商工会議所 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫（大分県内店舗）</h3>
              <p className="text-sm text-text-light">政府系金融機関の窓口。小規模事業者や創業期でも利用しやすい低利融資を扱います。融資実行までの期間を要するため、即日性が必要な場面はファクタリング、恒常的な資金は公庫融資と役割を分けましょう。</p>
              <p className="mt-2 text-sm"><a href="https://www.jfc.go.jp/n/branch/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">日本政策金融公庫 店舗案内</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">47都道府県の公的支援窓口マップ</h3>
              <p className="text-sm text-text-light">当サイトでは、全国47都道府県のよろず支援拠点・信用保証協会の公式窓口を一覧化しています。大分県外の取引先や拠点がある場合の窓口探しにもご活用ください。</p>
              <p className="mt-2 text-sm"><Link href="/articles/zenkoku-shikinguri-shien/" className="font-medium text-primary underline">全国の資金繰り支援窓口マップを見る</Link></p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-light">※掲載している各機関・制度の情報とリンク先は、2026年7月に公式サイトで確認しています。最新の受付状況・条件は各公式サイトをご確認ください。</p>
        </section>

        {/* ── 利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大分でファクタリングを利用する手順</h2>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：大分でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">東京の大手もオンラインで利用可能</strong>：オンライン完結型なら来店不要で、大分県内のどこからでも利用できる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">製造・観光・建設への理解がある会社を選ぶ</strong>：大分の主要業種特有の売掛金形態に慣れた会社なら審査がスムーズ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">最低3社以上の見積もりを比較</strong>：手数料の総額で比較し、最も条件の良い会社を選ぶ。オンラインで簡単に見積もりが取れる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">地域の支援機関も併用</strong>：ファクタリングに加え、県・市の制度融資や信用保証協会・よろず支援拠点も活用して資金繰りを安定させる。</span></li>
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
            <Link href="/articles/fukuoka/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">福岡のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">九州エリア対応の業者を比較</p>
            </Link>
            <Link href="/articles/kitakyushu/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">北九州のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">北九州エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/hotel/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">宿泊業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">観光・宿泊業の資金繰りを解説</p>
            </Link>
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">おすすめ5選と活用事例</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">大分県のファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で大分県のファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
