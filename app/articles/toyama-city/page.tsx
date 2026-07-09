import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 富山のおすすめ業者5選｜北陸エリア対応",
  description:
    "富山市でおすすめのファクタリング会社5社を徹底比較。医薬品・アルミなどの製造業・建設業など富山の主要業種に対応するオンライン完結型サービスを中心に、手数料・入金スピードで厳選。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/toyama-city/",
  },
  openGraph: {
    title: "ファクタリング 富山のおすすめ業者5選｜北陸エリア対応",
    description: "富山市・富山県エリアのファクタリング会社5社を手数料・スピードで比較。",
    url: "https://hyogo-shihoushoshi.jp/articles/toyama-city/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const toyamaFeatures = [
  {
    title: "富山県の県庁所在地・北陸の産業都市",
    description:
      "富山市は富山県の県庁所在地であり、日本海側有数の産業集積を持つ北陸の中核都市です。製造業を中心に多様な中小企業が事業を営んでおり、売掛金を早期資金化するファクタリングの活用シーンが広いエリアです。北陸新幹線で東京とも直結しています。",
  },
  {
    title: "医薬品・アルミなどの製造業が支える地域経済",
    description:
      "富山県は「くすりの富山」として知られる医薬品産業と、アルミ製品などの金属加工業が盛んな地域です。原材料費・外注費の先行支出が大きく、納品から入金までの期間が空きやすい製造業の商流では、資金繰りを整える手段としてファクタリングが活用できます。",
  },
  {
    title: "オンライン完結で東京の大手も利用可能",
    description:
      "富山市の地場ファクタリング会社は選択肢が限られますが、東京の大手ファクタリング会社にはオンラインでアクセスできます。オンライン完結型を利用することで、来店不要のまま手数料の比較幅が広がります。",
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
      "大手ならではの安定感。オンラインで富山から簡単に利用可能。高額案件にも上限なし。製造業・建設業にも多数の実績。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "業界トップクラスの審査通過率。赤字決算・税金滞納でも柔軟対応。富山からオンラインで即日入金も可能。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "手数料の安さが魅力。書類が少なく手続きが簡単。富山・北陸エリアから来店不要で利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利法人ゆえの低手数料。認定機関の安心感。富山の中小企業にもおすすめ。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "超少額から利用可能。土日祝も振込対応。手数料一律で明瞭。富山のフリーランスに最適。",
  },
];

const toyamaIndustries = [
  {
    industry: "医薬品関連産業",
    description:
      "富山県は「くすりの富山」として知られる医薬品産業の集積地です。製造受託や包装・原材料などの関連企業も多く、納品から入金までの期間が空く取引では、売掛金のファクタリングで資金ギャップを埋める活用方法があります。",
  },
  {
    industry: "アルミ・金属加工業",
    description:
      "富山県はアルミ建材・アルミ製品などの金属加工業が盛んな地域です。材料費の先行支出が大きい業種のため、大口受注時の運転資金や入金待ち期間のつなぎ資金として、売掛金の早期資金化が役立ちます。",
  },
  {
    industry: "建設業",
    description:
      "公共工事やインフラ整備・除雪関連などを担う建設業者が多く、工事完了から入金までのサイトが長い業種です。外注費・材料費の支払いと入金のずれをファクタリングで解消する事業者が多くいます。",
  },
  {
    industry: "運輸・卸売業",
    description:
      "日本海側の物流拠点である富山では、運輸・卸売業も地域経済を支えています。燃料費・人件費など毎月の固定費が先行しやすい業種のため、売掛金の早期資金化で資金繰りを平準化する活用が考えられます。",
  },
];

const faqs = [
  {
    question: "富山でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "富山で選ぶ際は、①オンラインで完結できるか②手数料が相場範囲内（2社間8〜18%、3社間1〜9%が目安・会社により異なる）か③製造業・建設業など富山の主要業種に対応しているか④即日入金に対応しているか⑤実績と口コミが豊富かの5点を確認しましょう。東京の大手もオンラインで利用できるため、選択肢を広く持つことが重要です。",
  },
  {
    question: "富山県内の他の市（高岡・射水・魚津など）からも利用できますか？",
    answer:
      "はい、オンライン完結型のファクタリング会社であれば、高岡・射水・魚津・砺波など富山県全域から利用可能です。書類提出もオンラインで完結するため、地理的な制約は一切ありません。即日入金にも対応しています。",
  },
  {
    question: "富山のファクタリング手数料の相場は？",
    answer:
      "富山のファクタリング手数料は、一般的な目安として2社間で8%〜18%、3社間で1%〜9%程度とされ、東京とほぼ同水準です（実際の料率は会社・契約内容により異なります）。オンライン対応の全国展開型会社を利用することで、地域差なく競争力のある手数料で利用できます。複数社の見積もりを必ず比較しましょう。",
  },
  {
    question: "富山で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングやQuQuMoでは最短2時間、ラボルでは最短60分での入金実績があります。オンライン完結型のサービスを利用すれば、富山にいながら即日入金が実現できます。午前中に申し込みと書類提出を完了させることがポイントです。",
  },
  {
    question: "製造業でファクタリングを利用する際の注意点は？",
    answer:
      "製造業の場合、納品・検収が完了した売掛金（請求書）が対象になるのが原則です。注意点は①検収前の見込み売上は対象外になりやすい②売掛先（発注元）の信用力が審査に大きく影響する③支払サイトが長い取引ほど手数料負担も意識する必要がある点です。継続受注がある場合は、都度の利用条件を複数社で比較しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ファクタリング 富山のおすすめ業者5選｜北陸エリア対応",
  description: "富山市・富山県エリアのファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/toyama-city/" },
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
    { "@type": "ListItem", position: 3, name: "富山のファクタリング会社", item: "https://hyogo-shihoushoshi.jp/articles/toyama-city/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ToyamaCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "富山のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 富山のおすすめ業者5選
            <br className="hidden md:block" />
            北陸エリア対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            富山市・富山県エリアで利用できるファクタリング会社を厳選紹介。医薬品・アルミなどの製造業・建設業など富山の主要業種で使えるオンライン完結型の大手を中心に、手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 富山でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 富山のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 富山の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 富山での業者選びのポイント</a></li>
            <li><a href="#toyama-finance" className="hover:underline">5. 富山の資金調達事情</a></li>
            <li><a href="#public-support" className="hover:underline">6. 富山市・富山県で使える公的支援機関・制度</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">富山でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">富山市は医薬品・アルミなどの製造業が集積する富山県の県庁所在地。オンライン完結型を軸にファクタリングの選択肢を広げられます。</p>
          <div className="space-y-4">
            {toyamaFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">富山のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">富山市・富山県エリアで利用できるファクタリング会社を厳選して5社紹介します。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">富山の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">富山の主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {toyamaIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">富山での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">富山でファクタリング会社を選ぶ際に確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">東京の大手とオンラインで比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                富山の地場ファクタリング会社は選択肢が限られます。東京の大手はオンラインで全国対応しているため、手数料やサービス内容を比較し、最も条件の良い会社を選びましょう。最低3社以上の見積もりを取ることが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">製造業・建設業に理解のある会社を選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                富山は医薬品・アルミなどの製造業と建設業が主要な産業です。検収済み売掛金の扱いや出来高払いなど、業種特有の商習慣への理解がある会社を選ぶと審査がスムーズに進みます。
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

        {/* ── 富山の資金調達事情 ─── */}
        <section id="toyama-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">富山の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            富山は製造業・建設業・運輸業など、仕入れや先行投資が入金に先立つ業種が多い産業構造です。ファクタリングは銀行融資を補完する手段として、富山の中小企業にも浸透しつつあります。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">地銀・信金の活用</strong>：地方銀行や信用金庫との取引がある場合、銀行系のファクタリングサービスや融資を相談できる可能性があります。まずはメインバンクに相談してみましょう</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">制度融資との使い分け</strong>：富山県や富山市の制度融資は低利ですが、保証審査を経るため入金まで時間がかかります。急ぎの支払いはファクタリングで対応し、中長期の運転資金は制度融資でまかなうのが賢い方法です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">補助金との併用</strong>：各種補助金は入金までの待ち期間があります。その間の運転資金にファクタリングを活用することで、事業を止めることなく資金繰りを維持できます</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 富山の経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">富山の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            富山市は北陸新幹線で首都圏と直結する北陸の産業都市であり、医薬品・アルミなどの製造業が集積しています。多様な業種でファクタリングの活用シーンが広がっています。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">医薬品関連産業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                「くすりの富山」として知られる医薬品産業は富山経済の柱のひとつです。製造受託・包装・原材料などの関連企業も多く、納品後の入金待ち期間の資金ギャップをファクタリングで埋める需要があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">アルミ・金属加工業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                アルミ建材・アルミ製品などの金属加工業は富山を代表する産業です。材料費の先行支出が大きいため、大口受注時の運転資金や入金待ち期間のつなぎ資金として売掛金の早期資金化が役立ちます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">建設業・インフラ関連</h3>
              <p className="text-sm leading-relaxed text-text-light">
                公共工事やインフラ整備・除雪関連を担う建設業者が多いエリアです。公共工事は入金サイトが長いため、外注費・材料費の支払いと入金のずれをファクタリングで解消し、資金繰りを安定させることが重要です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 富山市・富山県の公的支援機関・制度 ─── */}
        <section id="public-support" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">富山市・富山県で使える公的支援機関・制度</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、富山市・富山県の公的支援機関と制度を紹介します。相談はいずれも原則無料です。急ぎの資金ギャップはファクタリング、中長期の資金計画は公的支援という使い分けが基本です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">富山県よろず支援拠点</h3>
              <p className="text-sm text-text-light">国が全都道府県に設置した無料の経営相談所。資金繰り・売上拡大など経営全般を何度でも無料で相談できます。ファクタリング利用の前に資金繰り全体を専門家に整理してもらいたいときの相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://toyama-yorozushien.go.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">富山県よろず支援拠点 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">富山県信用保証協会</h3>
              <p className="text-sm text-text-light">中小企業が金融機関から融資を受ける際の保証を担う公的機関。保証付き融資は低コストですが審査に時間を要するため、入金までのつなぎにファクタリングを併用する使い分けが可能です。創業・経営支援の相談にも対応しています。</p>
              <p className="mt-2 text-sm"><a href="https://www.cgc-toyama.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">富山県信用保証協会 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">富山商工会議所</h3>
              <p className="text-sm text-text-light">経営相談・融資あっせん・補助金情報の提供を行う地域総合経済団体。マル経融資（小規模事業者経営改善資金）や創業支援も行っています。富山市内の小規模事業者が低利融資のあっせんを受けたいときの相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://toyama.ccis-toyama.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">富山商工会議所 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫（富山県内の支店窓口）</h3>
              <p className="text-sm text-text-light">政府系金融機関で、小規模事業者や創業期でも利用しやすい低利融資を扱います。富山県内の窓口は公式の店舗案内から確認できます。融資実行までの期間を要するため、即日性が必要な場面はファクタリング、恒常的な資金は公庫融資と役割を分けましょう。</p>
              <p className="mt-2 text-sm"><a href="https://www.jfc.go.jp/n/branch/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">日本政策金融公庫 店舗案内</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">全国の公的支援窓口を一覧で確認する</h3>
              <p className="text-sm text-text-light">よろず支援拠点・信用保証協会の窓口は47都道府県すべてに設置されています。富山県以外の窓口や全国共通の制度は、当サイトの全国マップでまとめて確認できます。</p>
              <p className="mt-2 text-sm"><Link href="/articles/zenkoku-shikinguri-shien/" className="font-medium text-primary underline">47都道府県の公的資金繰り支援窓口マップ</Link></p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-light">※掲載している各機関・制度の情報とリンク先は、2026年7月に公式サイトで確認しています。最新の受付状況・条件は各公式サイトをご確認ください。</p>
        </section>

        {/* ── 利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">富山でファクタリングを利用する手順</h2>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：富山でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">東京の大手もオンラインで利用可能</strong>：オンライン完結型なら来店不要で、富山市・富山県のどこからでも利用できる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">製造業・建設業に理解のある会社を選ぶ</strong>：医薬品・アルミなどの製造業と建設業が主要業種の富山では、業種への理解がある会社を選ぶと審査がスムーズ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">最低3社以上の見積もりを比較</strong>：手数料の総額で比較し、最も条件の良い会社を選ぶ。オンラインで簡単に見積もりが取れる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">公的支援機関も併用</strong>：ファクタリングに加え、よろず支援拠点・信用保証協会・商工会議所・公庫も活用して資金繰りを安定させる。</span></li>
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
            <Link href="/articles/kanazawa/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">金沢のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">北陸エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/niigata/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">新潟のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">日本海側エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/manufacturing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">製造業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">仕入れ資金・設備投資の資金調達</p>
            </Link>
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">おすすめ5選と活用事例</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">北陸エリアのファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で富山市・富山県エリアのファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
