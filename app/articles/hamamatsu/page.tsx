import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 浜松のおすすめ業者5選｜静岡県西部・遠州エリア対応",
  description:
    "浜松でおすすめのファクタリング会社5社を徹底比較。輸送用機器・楽器などものづくりの街・浜松の中小企業や個人事業主が使いやすいオンライン完結型サービスを、手数料・入金スピードで厳選して紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/hamamatsu/",
  },
  openGraph: {
    title: "ファクタリング 浜松のおすすめ業者5選｜静岡県西部・遠州エリア対応",
    description: "浜松・静岡県西部エリアのファクタリング会社5社を手数料・スピードで比較。",
    url: "https://hyogo-shihoushoshi.jp/articles/hamamatsu/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const hamamatsuFeatures = [
  {
    title: "ものづくり都市・浜松の資金需要",
    description:
      "浜松は輸送用機器・オートバイ・楽器などの製造業が集積する、全国有数のものづくり都市です。大手メーカーを頂点とした下請け・協力企業の裾野が広く、部品加工や金型など中小製造業の運転資金ニーズが恒常的にあるエリアです。",
  },
  {
    title: "下請け取引の入金サイトの長さ",
    description:
      "製造業の下請け取引では、納品から入金まで60〜90日程度の支払サイトが設定されることが珍しくありません。材料費や外注費は先に出ていくため、売掛金を早期資金化できるファクタリングが資金ギャップの解消手段として使われています。",
  },
  {
    title: "オンライン完結で東京の大手も利用可能",
    description:
      "浜松からは東京の大手ファクタリング会社にオンラインでアクセスできます。地場のファクタリング会社は選択肢が限られるため、東京の大手もオンラインで利用することで、手数料の比較幅が広がります。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    area: "東京本社（オンライン対応）",
    features:
      "業界最大手級。累計買取額1,300億円超。2社間・3社間対応。最短2時間入金。法人・個人事業主対応。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "大手ならではの安定感。オンラインで浜松から簡単に利用可能。高額案件にも上限なし。まとまった売掛金を資金化したい製造業にも向いています。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "業界トップクラスの審査通過率。赤字決算・税金滞納でも柔軟対応。浜松からオンラインで即日入金も可能。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "手数料の安さが魅力。書類が少なく手続きが簡単。静岡県西部・遠州エリア全域から来店不要で利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利法人ゆえの低手数料。認定機関の安心感。浜松の中小企業にもおすすめ。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "超少額から利用可能。土日祝も振込対応。手数料一律で明瞭。浜松のフリーランスや一人親方に最適。",
  },
];

const hamamatsuIndustries = [
  {
    industry: "輸送用機器・オートバイ関連の製造業",
    description:
      "浜松は自動車・オートバイなど輸送用機器産業の集積地として知られ、部品加工・金型・表面処理など下請けの中小企業が多いエリアです。納品から入金までのサイトが長い取引が多く、材料費・外注費の先行支出をファクタリングで埋める使い方が典型的です。",
  },
  {
    industry: "楽器・音楽関連産業",
    description:
      "浜松は「音楽の街」として知られ、楽器製造とその関連産業が集積しています。楽器メーカーと取引する部品・部材の製造業や卸売業では、受注から入金までの資金ギャップをファクタリングで解消するケースがあります。",
  },
  {
    industry: "運送業",
    description:
      "浜松は東西の大動脈である東海道の中間に位置し、運送業が盛んな地域です。燃料費・人件費・車両維持費は毎月発生する一方、運賃の入金サイトは長めのため、ファクタリングで資金繰りを平準化する運送業者が多くいます。",
  },
  {
    industry: "建設業",
    description:
      "住宅・工場・インフラ工事など建設需要のあるエリアで、工事完了から入金までの資金ギャップが課題になりがちです。出来高払いの請求書を早期資金化して、職人への支払いや材料費に充てる使い方が広がっています。",
  },
];

const faqs = [
  {
    question: "浜松でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "浜松で選ぶ際は、①オンラインで完結できるか②手数料が相場範囲内（2社間8〜18%、3社間1〜9%が目安・会社により異なる）か③製造業など浜松の主要業種の売掛金に対応しているか④即日入金に対応しているか⑤実績と口コミが豊富かの5点を確認しましょう。東京の大手もオンラインで利用できるため、選択肢を広く持つことが重要です。",
  },
  {
    question: "浜松のファクタリング手数料の相場は？",
    answer:
      "ファクタリング手数料の一般的な目安は、2社間で8%〜18%、3社間で1%〜9%程度です（会社や売掛先の信用力により異なります）。オンライン対応の全国展開型会社を利用することで、浜松でも地域差なく競争力のある手数料で利用できます。複数社の見積もりを必ず比較しましょう。",
  },
  {
    question: "浜松で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングやQuQuMoでは最短2時間、ラボルでは最短60分の入金に対応しています。オンライン完結型のサービスを利用すれば、浜松にいながら即日入金が実現できます。午前中の申し込みがポイントです。",
  },
  {
    question: "製造業の下請けでもファクタリングを利用できますか？",
    answer:
      "はい、利用できます。製造業の下請け取引で発生した売掛金（請求書）が主な対象です。審査では売掛先（発注元メーカーなど）の信用力が重視されるため、大手メーカーとの取引がある場合はむしろ審査に通りやすい傾向があります。なお、下請代金支払遅延等防止法（下請法）の対象取引では支払期日に上限があるため、契約条件も合わせて確認しましょう。",
  },
  {
    question: "磐田・掛川・湖西など静岡県西部の他市からも利用できますか？",
    answer:
      "はい、オンライン完結型のファクタリング会社であれば、磐田・掛川・袋井・湖西など静岡県西部・遠州エリア全域から利用可能です。書類提出もオンラインで完結するため、地理的な制約は一切ありません。即日入金にも対応しています。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ファクタリング 浜松のおすすめ業者5選｜静岡県西部・遠州エリア対応",
  description: "浜松・静岡県西部エリアのファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/hamamatsu/" },
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
    { "@type": "ListItem", position: 3, name: "浜松のファクタリング会社", item: "https://hyogo-shihoushoshi.jp/articles/hamamatsu/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function HamamatsuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "浜松のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 浜松のおすすめ業者5選
            <br className="hidden md:block" />
            静岡県西部・遠州エリア対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            浜松・静岡県西部エリアで利用できるファクタリング会社を厳選紹介。ものづくりの街・浜松の中小企業や個人事業主が使いやすいオンライン完結型サービスを、手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 浜松でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 浜松のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 浜松の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 浜松での業者選びのポイント</a></li>
            <li><a href="#hamamatsu-finance" className="hover:underline">5. 浜松の資金調達事情</a></li>
            <li><a href="#public-support" className="hover:underline">6. 浜松・静岡県で使える公的支援機関・制度</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">浜松でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">浜松は輸送用機器・オートバイ・楽器など製造業が集積する全国有数のものづくり都市。中小製造業の資金需要が大きいエリアです。</p>
          <div className="space-y-4">
            {hamamatsuFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">浜松のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">浜松・静岡県西部エリアで利用できるファクタリング会社を厳選して5社紹介します。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">浜松の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">浜松エリアの主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {hamamatsuIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">浜松での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">浜松・静岡県西部でファクタリング会社を選ぶ際に確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">東京の大手とオンラインで比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                浜松の地場ファクタリング会社は選択肢が限られます。東京の大手はオンラインで全国対応しているため、手数料やサービス内容を比較し、最も条件の良い会社を選びましょう。最低3社以上の見積もりを取ることが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">製造業の売掛金に慣れた会社を選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                浜松は製造業の比率が高いエリアです。下請け取引の請求書や検収書ベースの売掛金など、製造業特有の商流への理解がある会社を選ぶと審査がスムーズに進みます。売掛先が大手メーカーの場合は審査で有利に働くことが多いです。
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

        {/* ── 浜松の資金調達事情 ─── */}
        <section id="hamamatsu-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">浜松の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            浜松は地域金融機関の層が厚い一方、銀行融資は審査・実行までに時間がかかります。ファクタリングは銀行融資を補完する手段として、入金までのつなぎ資金など「速さ」が必要な場面で活用されています。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">静岡銀行・浜松いわた信用金庫など地域金融機関の活用</strong>：地域金融機関との取引がある場合は、融資や銀行系サービスも合わせて検討する価値があります。まずはメインバンクに相談してみましょう</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">制度融資との使い分け</strong>：静岡県や市町の制度融資は低コストですが、申込から実行まで時間がかかります。急ぎの支払いはファクタリングで対応し、中長期的には制度融資を活用するのが賢い方法です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">補助金との併用</strong>：ものづくり補助金など各種補助金は入金までの待ち期間があります。その間の資金ギャップにファクタリングを活用することで、事業を止めることなく資金繰りを維持できます</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 浜松の経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">浜松の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            浜松市は静岡県西部の中心となる政令指定都市で、スズキや河合楽器製作所の本社が立地するほか、ホンダの創業地・ヤマハの発祥地としても知られるものづくりの集積地です。多様な業種でのファクタリング活用が広がっています。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">輸送用機器・オートバイ産業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                自動車・オートバイなど輸送用機器の完成車メーカーと、それを支える部品・金型・加工の中小企業が集積しています。量産に向けた材料費・設備費の先行支出に対して、売掛金のファクタリングで資金を確保するケースが典型的です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">楽器・光電子など特色ある産業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                浜松は楽器産業で世界的に知られるほか、光・電子技術関連の企業も立地する技術集積地です。研究開発型・受注生産型のビジネスは入金までの期間が長くなりがちで、その間の運転資金確保にファクタリングが活用されています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">東西物流の結節点としての運送業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                東名高速道路・新東名高速道路が通る浜松は、首都圏と中京・関西圏を結ぶ物流の要衝です。運送業は燃料費・人件費が先行する業種のため、運賃売掛金の早期資金化ニーズが高いエリアです。
              </p>
            </div>
          </div>
        </section>

        {/* ── 浜松・静岡県の公的支援機関・制度 ─── */}
        <section id="public-support" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">浜松・静岡県で使える公的支援機関・制度</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、浜松・静岡県の公的支援機関と制度を紹介します。相談はいずれも原則無料です。急ぎの資金ギャップはファクタリング、中長期の資金計画は公的支援という使い分けが基本です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">静岡県の中小企業向け制度融資</h3>
              <p className="text-sm text-text-light">静岡県・金融機関・信用保証協会が連携して行う中小企業向けの融資制度。低利で事業資金を借りられます。申込から実行まで時間がかかるため、急ぎの支払いはファクタリングでつなぎ、中長期の運転資金は制度融資でまかなうのが有効です。</p>
              <p className="mt-2 text-sm"><a href="https://www.pref.shizuoka.jp/sangyoshigoto/kigyoshien/seidoyushi/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">静岡県公式サイト：中小企業向け制度融資</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">静岡県信用保証協会</h3>
              <p className="text-sm text-text-light">中小企業が金融機関から融資を受ける際の保証を担う公的機関。浜松支店など県内に拠点があります。保証付き融資は低コストですが審査に時間を要するため、入金までのつなぎにファクタリングを併用する使い分けが可能です。</p>
              <p className="mt-2 text-sm"><a href="https://www.cgc-shizuoka.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">静岡県信用保証協会 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">公益財団法人浜松地域イノベーション推進機構</h3>
              <p className="text-sm text-text-light">浜松地域の中小企業を支援する公的な産業支援機関（浜松市中央区東伊場・浜松商工会議所会館内）。経営相談のほか、補助金・資金調達支援、販路開拓、新事業・創業支援などを行っています。浜松市内の事業者が経営・資金繰りを相談したい場合の身近な窓口です。</p>
              <p className="mt-2 text-sm"><a href="https://www.hai.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">浜松地域イノベーション推進機構 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">静岡県よろず支援拠点</h3>
              <p className="text-sm text-text-light">国が全都道府県に設置した無料の経営相談所。資金繰り・売上拡大など経営全般を何度でも無料で相談できます。ファクタリング利用の前に資金繰り全体を専門家に整理してもらいたいときの相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://shizuoka-yorozu.go.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">静岡県よろず支援拠点 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫 浜松支店</h3>
              <p className="text-sm text-text-light">政府系金融機関の静岡県西部の窓口。小規模事業者や創業期でも利用しやすい低利融資を扱います。融資実行までの期間を要するため、即日性が必要な場面はファクタリング、恒常的な資金は公庫融資と役割を分けましょう。所在地・受付時間は公式の店舗案内から確認できます。</p>
              <p className="mt-2 text-sm"><a href="https://www.jfc.go.jp/n/branch/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">日本政策金融公庫 店舗案内（浜松支店）</a></p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            公的融資は低コストな一方で審査・実行までに時間がかかるため、中長期の資金は公的融資、入金までのつなぎなど急ぎの資金はファクタリング、と使い分けるのが基本です。
          </p>
          <p className="mt-2 text-xs text-text-light">※各機関の情報は2026年7月に公式サイトで確認しています。最新の受付状況・条件は各公式サイトをご確認ください。</p>
        </section>

        {/* ── 利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">浜松でファクタリングを利用する手順</h2>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：浜松でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">東京の大手もオンラインで利用可能</strong>：オンライン完結型なら来店不要で、浜松からでも選択肢を広く比較できる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">製造業の商流に慣れた会社を選ぶ</strong>：浜松は輸送用機器・楽器などものづくりの街。下請け取引の売掛金への理解がある会社を選ぶと審査がスムーズ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">最低3社以上の見積もりを比較</strong>：手数料の総額で比較し、最も条件の良い会社を選ぶ。オンラインで簡単に見積もりが取れる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">公的支援も併用</strong>：ファクタリングに加え、静岡県の制度融資・信用保証協会・よろず支援拠点・公庫なども活用して資金繰りを安定させる。</span></li>
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
            <Link href="/articles/shizuoka/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">静岡のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">静岡県全域対応の業者を紹介</p>
            </Link>
            <Link href="/articles/nagoya/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">名古屋のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">東海エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/manufacturing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">製造業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">下請け取引の資金繰り改善</p>
            </Link>
            <Link href="/articles/transport/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">運送業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">燃料費・人件費の資金繰り改善</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">浜松のファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で浜松・静岡県西部エリアのファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
