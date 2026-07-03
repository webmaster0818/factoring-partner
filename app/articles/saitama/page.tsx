import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング さいたまのおすすめ業者5選｜埼玉エリア対応",
  description:
    "さいたま市でおすすめのファクタリング会社5社を徹底比較。首都圏の商業・物流・中小製造業に対応した業者やオンライン完結型サービスを紹介。埼玉全域対応の会社も含め、手数料・入金スピードで厳選。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/saitama/",
  },
  openGraph: {
    title: "ファクタリング さいたまのおすすめ業者5選｜埼玉エリア対応",
    description: "さいたま・埼玉エリアのファクタリング会社5社を手数料・スピードで比較。",
    url: "https://hyogo-shihoushoshi.jp/articles/saitama/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const saitamaFeatures = [
  {
    title: "首都圏の商業・業務拠点としての役割",
    description:
      "さいたま市は埼玉県の県庁所在地であり、大宮・浦和を中心に商業・業務機能が集積する首都圏の主要都市です。新幹線・在来線が集まる交通の結節点でもあり、多様な業種の事業者がファクタリングを活用しています。",
  },
  {
    title: "物流・中小製造業の集積地",
    description:
      "埼玉県は首都圏の物流網の要衝であり、県内には物流施設や中小の製造業が数多く立地しています。運送代金や部品納入代金の入金サイトの長さを埋める手段として、ファクタリングの需要が高いエリアです。",
  },
  {
    title: "東京至近でオンラインも対面も選べる",
    description:
      "さいたま市から東京都心へは電車で短時間でアクセスできます。東京本社の大手ファクタリング会社への訪問も容易なうえ、オンライン完結型なら来店不要で埼玉全域から利用できるため、選択肢を広く持てます。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    area: "東京本社（オンライン対応）",
    features:
      "業界最大手級。累計買取額1,300億円超。2社間・3社間対応。最短2時間入金。法人・個人事業主対応。埼玉エリアの取引実績も豊富。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "大手ならではの安定感。さいたまから東京本社へのアクセスも良好で、オンラインでも完結可能。高額案件にも上限なし。埼玉の建設・物流業者にもおすすめ。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "業界トップクラスの審査通過率。赤字決算・税金滞納でも柔軟対応。さいたまからオンラインで即日入金も可能。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "手数料の安さが魅力。書類が少なく手続きが簡単。埼玉全域から来店不要で利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利法人ゆえの低手数料。認定機関の安心感。埼玉の中小企業にもおすすめ。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "超少額から利用可能。土日祝も振込対応。手数料一律で明瞭。さいたまのフリーランス・一人親方に最適。",
  },
];

const saitamaIndustries = [
  {
    industry: "物流・運送業",
    description:
      "埼玉県は首都圏の物流網の要衝であり、物流施設や運送業者が多く立地しています。燃料費や人件費を先に支払い、運送代金の入金は後になる構造のため、資金繰りのつなぎとしてファクタリングが活用されています。",
  },
  {
    industry: "製造業",
    description:
      "埼玉県内には中小の製造業が数多く集積しています。大手メーカー向けの部品納入は入金サイトが60〜90日と長いケースが多く、材料費の先行支出をファクタリングでカバーする需要が高いです。",
  },
  {
    industry: "建設業",
    description:
      "さいたま市内の再開発や県内の公共工事・住宅関連工事に携わる建設業者は、工事完了から入金までの期間が長く、材料費や外注費の支払いにファクタリングを活用しています。",
  },
  {
    industry: "商業・サービス業",
    description:
      "大宮・浦和を中心に商業・サービス業が集積しています。法人向け取引（BtoB）の売掛金があれば、卸売業や業務支援サービスなどでもファクタリングを利用でき、仕入資金や人件費の支払いに充てられています。",
  },
];

const faqs = [
  {
    question: "さいたま市でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "さいたま市で選ぶ際は、①オンラインで完結できるか②手数料が相場範囲内（2社間5〜18%、3社間1〜9%）か③物流・製造・建設など埼玉の主要業種に対応しているか④即日入金に対応しているか⑤実績と口コミが豊富かの5点を確認しましょう。東京の大手にもアクセスしやすい立地のため、選択肢を広く持つことが重要です。",
  },
  {
    question: "埼玉県の他のエリア（川口・所沢・越谷など）からも利用できますか？",
    answer:
      "はい、オンライン完結型のファクタリング会社であれば、川口・所沢・越谷・川越・熊谷など埼玉県全域から利用可能です。書類提出もオンラインで完結するため、地理的な制約は一切ありません。即日入金にも対応しています。",
  },
  {
    question: "さいたまのファクタリング手数料の相場は？",
    answer:
      "さいたまのファクタリング手数料は、2社間で5%〜18%、3社間で1%〜9%程度で、東京とほぼ同水準です。首都圏エリアのためオンライン対応の会社も含め選択肢が豊富で、複数社の見積もりを比較することで条件を引き出しやすい環境です。最低3社以上の見積もりを取りましょう。",
  },
  {
    question: "さいたまで即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングでは最短2時間、QuQuMoでも最短2時間での入金実績があります。オンライン完結型のサービスを利用すれば、さいたまにいながら即日入金が実現できます。午前中に申し込みと書類提出を完了させることがポイントです。",
  },
  {
    question: "運送業でファクタリングを利用する際の注意点は？",
    answer:
      "運送業の場合、運送委託契約に基づく売掛金が対象になります。注意点は①荷主・元請けの信用力が審査に影響する②燃料費など先行支出が続くため計画的に利用する③手数料が利益を圧迫しないよう複数社を比較する④継続利用が常態化しないよう資金繰り全体を見直す点です。物流・運送業の取り扱い実績が豊富な会社を選びましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ファクタリング さいたまのおすすめ業者5選｜埼玉エリア対応",
  description: "さいたま・埼玉エリアのファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/saitama/" },
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
    { "@type": "ListItem", position: 3, name: "さいたまのファクタリング会社", item: "https://hyogo-shihoushoshi.jp/articles/saitama/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SaitamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "さいたまのファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング さいたまのおすすめ業者5選
            <br className="hidden md:block" />
            埼玉エリア対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            さいたま・埼玉エリアで利用できるファクタリング会社を厳選紹介。物流・製造・建設業のニーズに応える会社から、オンライン完結型の大手まで、手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. さいたまでファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. さいたまのおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 埼玉の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. さいたまでの業者選びのポイント</a></li>
            <li><a href="#saitama-finance" className="hover:underline">5. 埼玉の資金調達事情</a></li>
            <li><a href="#public-support" className="hover:underline">6. さいたま・埼玉で使える公的支援機関・制度</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">さいたまでファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">さいたま市は埼玉県の経済の中心地。東京へのアクセスも良好で、ファクタリングの選択肢が豊富なエリアです。</p>
          <div className="space-y-4">
            {saitamaFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">さいたまのおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">さいたま・埼玉エリアで利用できるファクタリング会社を厳選して5社紹介します。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">埼玉の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">埼玉エリアの主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {saitamaIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">さいたまでの業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">さいたま・埼玉でファクタリング会社を選ぶ際に確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">東京の大手とオンラインで比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                さいたまは東京都心へのアクセスが良好で、東京の大手はオンラインで全国対応しています。手数料やサービス内容を比較し、最も条件の良い会社を選びましょう。最低3社以上の見積もりを取ることが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">物流・製造・建設に強い会社を選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                埼玉は物流・中小製造業・建設業の比率が高いエリアです。運送委託契約の売掛金や出来高払いなど業種特有の形態があるため、これらの業種への理解がある会社を選ぶと審査がスムーズに進みます。
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

        {/* ── 埼玉の資金調達事情 ─── */}
        <section id="saitama-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">埼玉の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            さいたま・埼玉エリアは首都圏の一角として、銀行融資・制度融資・ファクタリングなど資金調達の選択肢が豊富です。一方で、中小企業や創業間もない事業者にとっては銀行融資のハードルが高い場合もあり、ファクタリングが銀行融資を補完する手段として活用されています。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">制度融資との使い分け</strong>：埼玉県やさいたま市の制度融資は低利ですが、申込から実行まで時間がかかります。急ぎの支払いはファクタリングでつなぎ、中長期の運転資金は制度融資でまかなうのが有効です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">信用保証協会の保証付き融資との併用</strong>：保証付き融資とファクタリングは併用可能です。融資枠とは別にファクタリングで資金調達できるため、資金繰りの幅が広がります</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">埼玉りそな銀行など地銀・信金の活用</strong>：地方銀行・信用金庫との取引がある場合、銀行系ファクタリングサービスも検討価値があります。メインバンクに相談してみましょう</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-text-light">
              制度融資・信用保証協会など各機関の詳細と公式サイトは、<a href="#public-support" className="text-primary underline">さいたま・埼玉で使える公的支援機関・制度</a>のセクションにまとめています。
            </p>
          </div>
        </section>

        {/* ── さいたまの経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">さいたまの経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            さいたま市は大宮・浦和を中心に商業・業務機能が集積する政令指定都市であり、新幹線・在来線が集まる首都圏北部の交通の結節点です。多様な業種でのファクタリング活用が広がっています。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">首都圏物流を支える運送・倉庫業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                埼玉県は高速道路網が交差する首都圏物流の要衝で、物流施設・運送業者が集積しています。燃料費・人件費の先行支出に対して運送代金の入金が後になるため、売掛金のファクタリングで資金繰りを安定させる手法が活用されています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">県内各地の中小製造業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                埼玉県内には機械・金属加工・食品などの中小製造業が数多く立地しています。大手メーカーからの受注に対する材料費・外注費の先行支出と、入金サイトの長さのギャップをファクタリングで埋める需要があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">大宮・浦和の商業・サービス業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                大宮・浦和エリアには商業・業務機能が集積し、卸売業や法人向けサービス業も多く活動しています。BtoBの売掛金があれば業種を問わずファクタリングを利用でき、仕入資金や人件費の支払いに充てる事業者が増えています。
              </p>
            </div>
          </div>
        </section>

        {/* ── さいたま・埼玉の公的支援機関・制度 ─── */}
        <section id="public-support" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">さいたま・埼玉で使える公的支援機関・制度</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、さいたま・埼玉の公的支援機関と制度を紹介します。相談はいずれも原則無料です。急ぎの資金ギャップはファクタリング、中長期の資金計画は公的支援という使い分けが基本です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">埼玉県中小企業制度融資（制度融資）</h3>
              <p className="text-sm text-text-light">埼玉県・県内金融機関・埼玉県信用保証協会・商工会議所などが協力して行う中小企業向けの融資制度。低利で事業資金を借りられますが、申込から実行まで時間がかかるため、急ぎの支払いはファクタリングでつなぎ、中長期の運転資金は制度融資でまかなう使い分けが有効です。</p>
              <p className="mt-2 text-sm"><a href="https://www.pref.saitama.lg.jp/a0805/seidoyushi/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">埼玉県公式サイト：中小企業向け制度融資</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">埼玉県信用保証協会</h3>
              <p className="text-sm text-text-light">中小企業が金融機関から融資を受ける際の「公的な保証人」となる公的機関。創業支援・経営支援も行っています。保証付き融資は低コストですが審査に時間を要するため、入金までのつなぎにファクタリングを併用する使い分けが可能です。</p>
              <p className="mt-2 text-sm"><a href="https://www.cgc-saitama.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">埼玉県信用保証協会 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">埼玉県よろず支援拠点</h3>
              <p className="text-sm text-text-light">国が全都道府県に設置した無料の経営相談所（さいたま市大宮区・ソニックシティビル内、運営：埼玉県産業振興公社）。資金繰り・売上拡大など経営全般を何度でも無料で相談できます。ファクタリング利用の前に資金繰り全体を専門家に整理してもらいたいときの相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://saitama-yorozu.go.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">埼玉県よろず支援拠点 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">公益財団法人さいたま市産業創造財団</h3>
              <p className="text-sm text-text-light">さいたま市の中小企業支援機関（さいたま市中央区下落合）。無料の窓口相談のほか、さいたま市の中小企業融資制度やセーフティネット保証認定、補助金獲得支援などを扱っています。さいたま市内の事業者が身近に経営・資金繰りの相談をしたい場合の窓口です。</p>
              <p className="mt-2 text-sm"><a href="https://www.sozo-saitama.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">さいたま市産業創造財団 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫（店舗案内）</h3>
              <p className="text-sm text-text-light">政府系金融機関。小規模事業者や創業期でも利用しやすい低利融資を扱います。融資実行までの期間を要するため、即日性が必要な場面はファクタリング、恒常的な資金は公庫融資と役割を分けましょう。埼玉県内の最寄りの支店は公式の店舗案内から確認できます。</p>
              <p className="mt-2 text-sm"><a href="https://www.jfc.go.jp/n/branch/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">日本政策金融公庫 店舗案内</a></p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-light">※掲載している各機関・制度の情報とリンク先は、2026年7月に公式サイトで確認しています。最新の受付状況・条件は各公式サイトをご確認ください。</p>
        </section>

        {/* ── 利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">さいたまでファクタリングを利用する手順</h2>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：さいたまでファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">東京の大手もオンラインで利用可能</strong>：さいたまは東京都心へのアクセスが良好。オンライン完結型なら来店不要で手続きが早い。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">物流・製造・建設に強い会社を選ぶ</strong>：埼玉は物流・中小製造業・建設業の比率が高い。業種への理解がある会社を選ぶと審査がスムーズ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">最低3社以上の見積もりを比較</strong>：手数料の総額で比較し、最も条件の良い会社を選ぶ。オンラインで簡単に見積もりが取れる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">地域の支援機関も併用</strong>：ファクタリングに加え、埼玉県信用保証協会・さいたま市産業創造財団・公庫なども活用して資金繰りを安定させる。</span></li>
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
            <Link href="/articles/tokyo/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">東京のファクタリング会社10選</p>
              <p className="mt-1 text-sm text-text-light">即日対応の会社を比較</p>
            </Link>
            <Link href="/articles/yokohama/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">横浜のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">神奈川エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/logistics/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">物流・運送業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">運送代金の早期資金化</p>
            </Link>
            <Link href="/articles/manufacturing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">製造業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">下請け企業の資金繰り改善</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">埼玉エリアのファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率でさいたま・埼玉エリアのファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
