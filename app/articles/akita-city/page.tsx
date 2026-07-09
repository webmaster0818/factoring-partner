import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "秋田市のファクタリング会社おすすめ｜即日対応・秋田県の資金調達ガイド【2026年】",
  description:
    "秋田市でおすすめのファクタリング会社5社を徹底比較。建設・農業・運輸・医療介護など秋田の主要業種に対応するオンライン完結型サービスを手数料・入金スピードで厳選。秋田県全域から利用できます。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/akita-city/",
  },
  openGraph: {
    title: "秋田市のファクタリング会社おすすめ｜即日対応・秋田県の資金調達ガイド【2026年】",
    description: "秋田市・秋田県のファクタリング会社5社を手数料・スピードで比較。",
    url: "https://hyogo-shihoushoshi.jp/articles/akita-city/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const akitaFeatures = [
  {
    title: "米どころ・日本海側の港湾都市",
    description:
      "秋田県はあきたこまちで知られる米どころで、日本酒などの食品関連産業も根付いています。秋田市は秋田港を擁する日本海側の港湾都市であり、農業・食品・物流が地域経済の土台です。収穫や出荷のサイクルに収入が左右される業態では、売掛金の早期資金化が資金繰りの平準化に役立ちます。",
  },
  {
    title: "洋上風力など再生可能エネルギー関連の動き",
    description:
      "秋田港・能代港周辺では洋上風力発電の導入が進められてきたことが広く知られており、関連する建設・保守・港湾業務は地域の新しい仕事の分野です。プロジェクト型の仕事は入金サイトが長くなりがちで、外注費や資材費の先行支払いにファクタリングを活用する余地があります。",
  },
  {
    title: "オンライン完結で東京の大手も利用可能",
    description:
      "秋田市からは東京の大手ファクタリング会社にオンラインでアクセスできます。地場のファクタリング会社は選択肢が限られるため、東京の大手もオンラインで利用することで手数料の比較幅が広がります。秋田新幹線で東京と結ばれていますが、来店不要のオンライン完結なら移動も不要です。",
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
      "大手ならではの安定感。オンラインで秋田市から簡単に利用可能。高額案件にも上限なし。建設業・製造業にも多数の実績。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "業界トップクラスの審査通過率。赤字決算・税金滞納でも柔軟対応。秋田市からオンラインで即日入金も可能。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "手数料の安さが魅力。書類が少なく手続きが簡単。秋田県全域から来店不要で利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利法人ゆえの低手数料。認定機関の安心感。秋田の中小企業にもおすすめ。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "超少額から利用可能。土日祝も振込対応。手数料一律で明瞭。秋田のフリーランス・一人親方に最適。",
  },
];

const akitaIndustries = [
  {
    industry: "建設業",
    description:
      "インフラの維持・更新や風力発電関連の工事など、秋田の建設業には多様な仕事があります。工事完了から入金までのサイトが長くなりがちなうえ、冬季は工事が制約される季節性もあるため、売掛金の早期資金化で支払いと入金のずれを埋めるニーズがあります。",
  },
  {
    industry: "農業・食品加工",
    description:
      "米どころ秋田では、米の出荷や日本酒・食品加工の商流が地域経済を支えています。収穫・出荷が特定の時期に集中する一方、資材費や人件費は年間を通じて発生するため、出荷先や卸売業者への売掛金の資金化が運転資金の確保に役立ちます。",
  },
  {
    industry: "運輸・港湾物流",
    description:
      "秋田港を擁する秋田市では、港湾物流や運送業も重要な業種です。燃料費・車両維持費の支出が先行しやすい運送業では、運賃の入金サイトとのギャップをファクタリングで埋め、繁忙期の増車・人員確保に備える使い方が考えられます。",
  },
  {
    industry: "医療・介護",
    description:
      "高齢化が全国でも先行して進む秋田では、医療・介護サービスの担い手の資金繰りも重要なテーマです。診療報酬・介護報酬は入金まで約2ヶ月かかるため、その間の人件費や運営費の支払いに報酬債権のファクタリングが活用されています。",
  },
];

const faqs = [
  {
    question: "秋田市でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "秋田市で選ぶ際は、①オンラインで完結できるか②手数料が相場範囲内（2社間8〜18%、3社間1〜9%）か③建設・農業・医療介護など秋田の主要業種に対応しているか④即日入金に対応しているか⑤実績と口コミが豊富かの5点を確認しましょう。地場の選択肢が限られるため、東京の大手も含めてオンラインで比較することが重要です。",
  },
  {
    question: "秋田市以外（横手・大仙・能代など県内他エリア）からも利用できますか？",
    answer:
      "はい、オンライン完結型のファクタリング会社であれば、横手市・大仙市・由利本荘市・能代市・大館市など秋田県全域から利用可能です。書類提出もオンラインで完結するため、地理的な制約はありません。雪の季節でも移動不要で手続きでき、即日入金にも対応しています。",
  },
  {
    question: "秋田のファクタリング手数料の相場は？",
    answer:
      "秋田のファクタリング手数料は、2社間で8%〜18%、3社間で1%〜9%程度が一般的な目安で、東京とほぼ同水準です。オンライン対応の全国展開型会社を利用することで、地域差なく競争力のある手数料で利用できます。複数社の見積もりを必ず比較しましょう。",
  },
  {
    question: "秋田市で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングやQuQuMoでは最短2時間、ラボルでは最短60分での入金に対応しています。オンライン完結型のサービスを利用すれば、秋田市にいながら即日入金が実現できます。午前中の申し込みがポイントです。",
  },
  {
    question: "介護事業所でもファクタリングを利用できますか？",
    answer:
      "はい、利用できます。介護報酬は国保連への請求から入金まで約2ヶ月かかるため、この報酬債権を早期資金化する介護報酬ファクタリングがあります。支払元が公的機関のため売掛先の信用力が高く、3社間型で手数料が低めになる傾向があります。人件費比率の高い介護事業の資金繰り安定に有効な選択肢です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "秋田市のファクタリング会社おすすめ｜即日対応・秋田県の資金調達ガイド【2026年】",
  description: "秋田市・秋田県のファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/akita-city/" },
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
    { "@type": "ListItem", position: 3, name: "秋田市のファクタリング会社", item: "https://hyogo-shihoushoshi.jp/articles/akita-city/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function AkitaCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "秋田市のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            秋田市のファクタリング会社おすすめ
            <br className="hidden md:block" />
            即日対応・秋田県の資金調達ガイド【2026年】
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            秋田市・秋田県で利用できるファクタリング会社を厳選紹介。建設・農業・物流・医療介護という秋田の産業事情を踏まえ、オンライン完結型の会社を手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 秋田市でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 秋田市のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 秋田の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 秋田市での業者選びのポイント</a></li>
            <li><a href="#akita-finance" className="hover:underline">5. 秋田の資金調達事情</a></li>
            <li><a href="#public-support" className="hover:underline">6. 秋田市・秋田県で使える公的支援機関・制度</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">秋田市でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">秋田市は秋田県の県庁所在地であり、日本海側の港湾都市です。農業・建設・物流を軸にした地域経済の特性が、ファクタリングの使い方にも表れます。</p>
          <div className="space-y-4">
            {akitaFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">秋田市のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">秋田市・秋田県全域から利用できるファクタリング会社を厳選して5社紹介します。いずれもオンライン対応で、来店不要で手続きできます。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">秋田の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">秋田の主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {akitaIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">秋田市での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">秋田市・秋田県でファクタリング会社を選ぶ際に確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">オンライン完結型を軸に比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                秋田の地場ファクタリング会社は選択肢が限られます。オンライン完結型なら東京の大手も含めて比較でき、冬季の移動負担もありません。最低3社以上の見積もりを取り、手数料の総額で判断しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">建設業・季節性のある業種への理解を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                秋田は建設業の仕事に季節の制約があり、農業も収穫期に収入が集中します。売上の波がある業態への理解がある会社を選ぶと、審査や条件の相談がスムーズです。建設業なら出来高払いなど業界特有の商習慣への対応も確認しましょう。
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

        {/* ── 秋田の資金調達事情 ─── */}
        <section id="akita-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">秋田の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            秋田県の中小企業の資金調達は銀行融資が中心ですが、担保・保証や審査期間の面でハードルを感じる場面もあります。ファクタリングは売掛金という資産の売却であり負債にならないため、融資を補完する短期の資金化手段として位置づけられます。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">秋田銀行・北都銀行など地銀の活用</strong>：地元の地方銀行と取引がある場合は、まずメインバンクに資金繰りを相談するのが基本です。制度融資や銀行系サービスの案内を受けられることもあります</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">制度融資とファクタリングの使い分け</strong>：県や市の制度融資は低利ですが、申込から実行まで時間がかかります。急ぎの支払いはファクタリングでつなぎ、中長期の運転資金は制度融資でまかなう使い分けが有効です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">補助金の入金待ち期間への対応</strong>：各種補助金は精算払いが基本で、採択から入金まで期間が空きます。その間の支払いにファクタリングを活用すれば、事業を止めずに資金繰りを維持できます</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 秋田市の経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">秋田市の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            秋田市は県の行政・経済機能が集まる中心都市で、秋田港を通じた物流と、県内各地の農産物・食品の集散を支えています。竿燈まつりに代表される観光資源もあり、業種ごとに異なる資金化ニーズが存在します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">風力発電関連・インフラ工事</h3>
              <p className="text-sm leading-relaxed text-text-light">
                秋田港・能代港周辺で進められてきた洋上風力の導入は広く知られており、建設・保守・港湾関連の業務に地元事業者が関わる場面があります。プロジェクト型の仕事は検収から入金までの期間が長くなりがちで、完成済み業務の売掛金を資金化して次の工程に備える使い方が考えられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">米・日本酒・食品の商流</h3>
              <p className="text-sm leading-relaxed text-text-light">
                米どころ秋田の食品関連事業者は、出荷代金の回収待ちと仕入れ・製造費用の先行支払いが重なる時期があります。卸売業者や販売先への売掛金を早期資金化することで、季節の谷間の運転資金を確保できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">医療・介護サービス</h3>
              <p className="text-sm leading-relaxed text-text-light">
                高齢化が先行して進む秋田では、医療・介護サービスの安定運営が地域の重要課題です。診療報酬・介護報酬の入金まで約2ヶ月のギャップを報酬債権ファクタリングで埋め、人件費や採用費に充てる事業者がいます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 秋田市・秋田県の公的支援機関・制度 ─── */}
        <section id="public-support" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">秋田市・秋田県で使える公的支援機関・制度</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、秋田市・秋田県の公的支援機関を紹介します。相談はいずれも原則無料です。急ぎの資金ギャップはファクタリング、中長期の資金計画は公的支援という使い分けが基本です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">秋田県よろず支援拠点</h3>
              <p className="text-sm text-text-light">国が全都道府県に設置した無料の経営相談所。資金繰り・売上拡大など経営全般を何度でも無料で相談できます。ファクタリング利用の前に、資金繰り全体を専門家に整理してもらいたいときの相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://akita-yorozu.go.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">秋田県よろず支援拠点 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">秋田県信用保証協会</h3>
              <p className="text-sm text-text-light">中小企業が金融機関から融資を受ける際の保証を担う公的機関。保証付き融資は低コストですが審査に時間を要するため、入金までのつなぎにファクタリングを併用する使い分けが可能です。</p>
              <p className="mt-2 text-sm"><a href="https://www.cgc-akita.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">秋田県信用保証協会 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">秋田商工会議所</h3>
              <p className="text-sm text-text-light">経営相談・融資あっせん・補助金情報の提供を行う地域総合経済団体。マル経融資（小規模事業者経営改善資金）の相談や創業支援も行っています。秋田市内の小規模事業者が低利融資のあっせんを受けたいときの相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://www.akitacci.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">秋田商工会議所 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫（秋田県内店舗）</h3>
              <p className="text-sm text-text-light">政府系金融機関。小規模事業者や創業期でも利用しやすい低利融資を扱います。融資実行までの期間を要するため、即日性が必要な場面はファクタリング、恒常的な資金は公庫融資と役割を分けましょう。</p>
              <p className="mt-2 text-sm"><a href="https://www.jfc.go.jp/n/branch/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">日本政策金融公庫 店舗案内</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">全国の公的支援窓口を探す</h3>
              <p className="text-sm text-text-light">秋田県以外に取引先・拠点がある場合や、他県の窓口も確認したい場合は、47都道府県のよろず支援拠点・信用保証協会をまとめた全国マップが便利です。</p>
              <p className="mt-2 text-sm"><Link href="/articles/zenkoku-shikinguri-shien/" className="font-medium text-primary underline">47都道府県 公的資金繰り支援マップ</Link></p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-light">※掲載している各機関の情報とリンク先は、2026年7月に公式サイトへの到達を確認しています。最新の受付状況・条件は各公式サイトをご確認ください。</p>
        </section>

        {/* ── 利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">秋田市でファクタリングを利用する手順</h2>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：秋田市でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">オンライン完結型を軸に比較</strong>：秋田は地場の選択肢が限られるため、東京の大手を含めオンラインで比較。冬季も移動不要。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">季節性・業種への理解を確認</strong>：建設の冬季制約や農業の収穫期集中など、売上に波がある業態への理解がある会社を選ぶ。</span></li>
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
            <Link href="/articles/yamagata-city/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">山形市のファクタリング会社おすすめ</p>
              <p className="mt-1 text-sm text-text-light">山形県の資金調達ガイド</p>
            </Link>
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">おすすめ5選と活用事例</p>
            </Link>
            <Link href="/articles/zenkoku-shikinguri-shien/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">47都道府県 公的資金繰り支援マップ</p>
              <p className="mt-1 text-sm text-text-light">全国のよろず支援拠点・信用保証協会</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">秋田県のファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で秋田市・秋田県のファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
