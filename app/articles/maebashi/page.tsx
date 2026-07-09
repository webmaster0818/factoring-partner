import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 前橋のおすすめ業者5選｜群馬県全域対応",
  description:
    "前橋市でおすすめのファクタリング会社5社を比較。北関東の製造業・建設業・運送業の下請取引で使えるオンライン完結型サービスを、手数料・入金スピードで厳選。高崎・太田など群馬県全域から利用できます。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/maebashi/",
  },
  openGraph: {
    title: "ファクタリング 前橋のおすすめ業者5選｜群馬県全域対応",
    description: "前橋・群馬県のファクタリング会社5社を手数料・スピードで比較。",
    url: "https://hyogo-shihoushoshi.jp/articles/maebashi/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const maebashiFeatures = [
  {
    title: "群馬県の行政・金融の中心地",
    description:
      "前橋市は群馬県の県庁所在地で、県の行政機関や金融機関の本店が集まる都市です。一方でファクタリング専業会社の店舗網は乏しく、資金化を急ぐ場面ではオンライン完結型サービスを使うのが前橋の標準的な選び方になります。",
  },
  {
    title: "北関東の内陸型工業地帯を後背地に持つ",
    description:
      "群馬県は輸送用機器や電気機械などの製造業が集積する内陸型工業県で、県内には多層的な下請・協力企業のネットワークがあります。納品から入金までのサイトが長い取引が多く、売掛金の早期資金化ニーズが生まれやすい土壌です。",
  },
  {
    title: "交通網の結節点でオンライン利用と好相性",
    description:
      "前橋は関越自動車道・北関東自動車道が交差する交通の要衝で、物流・運送業も活発です。東京へは高崎から新幹線でアクセスできますが、ファクタリングは来店不要のオンライン型を選べば、移動時間ゼロで東京の大手と契約まで完了します。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    area: "東京本社（オンライン対応）",
    features:
      "業界最大手級。累計買取額1,300億円超。2社間・3社間対応。最短2時間入金。法人・個人事業主対応。全国エリアの取引実績が豊富。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "実績量に裏打ちされた安定感が魅力。前橋からオンラインで完結でき、製造業の高額な売掛金でも上限なく相談できます。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "審査通過率の高さはトップクラス。業績に不安がある群馬の中小企業でも、断られにくく即日資金化を目指せます。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "請求書と通帳だけのシンプルな手続きで、前橋の事務所から一歩も出ずに資金化可能。手数料水準の低さも魅力です。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "国の認定を受けた非営利型という安心感。関東圏の中小企業支援に実績があり、初めての利用でも相談しやすい存在です。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "夜間・土日でも振り込まれるスピードが強み。前橋の一人親方や個人ドライバーの「今日中に必要」に応えられます。",
  },
];

const gunmaIndustries = [
  {
    industry: "製造業（輸送用機器・機械）",
    description:
      "群馬県は輸送用機器をはじめとする製造業の集積地で、下請・協力企業が多層的に連なっています。量産対応の材料費や人件費を先に負担する構造のため、支払サイトの長い売掛金をファクタリングで資金化する需要があります。",
  },
  {
    industry: "建設業",
    description:
      "県都・前橋では公共施設や道路の工事、住宅関連工事が継続的にあります。工事代金の入金は完成・検収から数十日先になることが多く、職人への支払いを待たせないための資金化ニーズが安定的にある業種です。",
  },
  {
    industry: "運送・物流業",
    description:
      "関越道・北関東道が交わる群馬は物流拠点の立地が進むエリアです。運送業は燃料費・人件費が先行し運賃入金が翌月以降になるため、運賃請求書の早期資金化と相性が良い業種といえます。",
  },
  {
    industry: "医療・介護",
    description:
      "前橋は大学病院を含む医療機関が集まる医療都市としての性格も持ちます。診療報酬・介護報酬は入金まで約2ヶ月を要するため、開業間もないクリニックや介護事業所の運転資金にファクタリングが活用されます。",
  },
];

const faqs = [
  {
    question: "前橋でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "前橋で選ぶ際は、①オンライン完結できるか②手数料が相場範囲内（2社間8〜18%、3社間1〜9%）か③製造業の下請債権など自社の商流を扱えるか④希望日までに入金できるか⑤運営会社の情報が開示されているかの5点を確認しましょう。市内店舗の有無より、条件と実績で比較するのが失敗しないコツです。",
  },
  {
    question: "高崎市や太田市など群馬県内の他市からも利用できますか？",
    answer:
      "はい、利用できます。オンライン完結型なら高崎市・太田市・伊勢崎市・桐生市など群馬県内のどこからでも申し込み可能です。必要書類の提出も契約もすべて非対面で完結するため、前橋や東京まで出向く必要はありません。",
  },
  {
    question: "前橋のファクタリング手数料の相場は？",
    answer:
      "前橋でも手数料の目安は全国水準と同じで、2社間で8%〜18%、3社間で1%〜9%程度です。全国対応のオンライン型を使えば地方による上乗せはありません。同じ条件でも会社ごとに提示が異なるため、複数社の見積もりを取り、掛け目や諸費用を含めた手取り額で比較しましょう。",
  },
  {
    question: "前橋で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングとQuQuMoは最短2時間、ラボルは最短60分、アクセルファクターも最短即日に対応しています。午前中に申し込み、請求書と通帳のコピーを手元に用意しておけば、当日中の入金が現実的に狙えます。",
  },
  {
    question: "製造業の下請企業でも利用できますか？",
    answer:
      "はい、製造業の下請・協力企業はファクタリングの代表的な利用者層です。メーカーや一次下請への納品後に発行した請求書があれば買取対象になり得ます。売掛先の信用力が審査の中心となるため、大手メーカー系列との取引債権はむしろ好条件が出やすい傾向があります。なお下請代金支払遅延等防止法の対象取引は支払期日に法的ルールがある点も知っておきましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ファクタリング 前橋のおすすめ業者5選｜群馬県全域対応",
  description: "前橋・群馬県のファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/maebashi/" },
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
    { "@type": "ListItem", position: 3, name: "前橋のファクタリング会社", item: "https://hyogo-shihoushoshi.jp/articles/maebashi/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function MaebashiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "前橋のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 前橋のおすすめ業者5選
            <br className="hidden md:block" />
            群馬県全域対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            前橋・群馬県で利用できるファクタリング会社を厳選紹介。製造業の下請取引や建設・運送の資金ギャップに使えるオンライン完結型を中心に、手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 前橋でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 前橋のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 群馬の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 前橋での業者選びのポイント</a></li>
            <li><a href="#gunma-finance" className="hover:underline">5. 群馬の資金調達事情</a></li>
            <li><a href="#public-support" className="hover:underline">6. 前橋・群馬で使える公的支援機関・制度</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">前橋でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">前橋市は群馬県の県庁所在地。内陸型工業県の中枢として、下請取引を中心とした資金化ニーズがあるエリアです。</p>
          <div className="space-y-4">
            {maebashiFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">前橋のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">前橋・群馬県から利用できるファクタリング会社を厳選して5社紹介します。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">群馬の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">前橋・群馬県の主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {gunmaIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">前橋での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">前橋・群馬県でファクタリング会社を選ぶ際に確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">店舗の近さではなく条件で選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                前橋周辺で対面相談できる専業会社は限られますが、対面できることと条件の良さは別問題です。オンライン完結型を含めて最低3社以上から見積もりを取り、手数料・掛け目・入金日を並べて比較しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">下請債権の扱いに慣れた会社を選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                製造業の下請取引では、検収条件や相殺の有無など債権の中身が審査に影響します。製造業の買取実績が豊富な会社なら、注文書・検収書などの提出を求められてもやり取りがスムーズです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">2社間・3社間を使い分ける</h3>
              <p className="text-sm leading-relaxed text-text-light">
                売掛先に知られたくない場合は2社間、手数料を抑えたい場合は3社間が基本です。長年の取引関係がある売掛先なら、3社間の承諾を得て手数料を大きく下げられる可能性もあります。急ぎ度と手数料のバランスで方式を選びましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">悪徳業者への注意</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングと称して貸付を行う違法業者や、法外な手数料を求める業者に注意してください。契約書の交付がない、償還請求権付きを求められる、手数料の内訳が不透明といった場合は契約せず、実績を確認できる会社を選びましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── 群馬の資金調達事情 ─── */}
        <section id="gunma-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">群馬の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            群馬県の中小企業金融は、地方銀行・信用金庫の融資と県・市の制度融資が中核です。ファクタリングは審査基準が融資と異なり売掛先の信用力を重視するため、自社の借入状況にかかわらず使える補完手段として位置づけられます。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">群馬銀行など地域金融機関が基盤</strong>：低コストの調達はメインバンク融資が第一です。ファクタリングは債権譲渡であり借入ではないため、既存融資の返済条件や信用情報に影響を与えずに併用できます</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">制度融資は「時間がかかる低利資金」</strong>：県・市の制度融資は金利面で有利ですが、申込から実行まで数週間単位の時間が必要です。支払期日が迫った場面ではファクタリングでつなぎ、制度融資は計画的な資金に充てましょう</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">受注増加時の増加運転資金に</strong>：製造業では受注が増えるほど材料費の先行負担が膨らみます。増産期の一時的な資金需要を売掛金の資金化でまかない、入金後に平常運転へ戻す使い方が有効です</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 前橋の経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">前橋の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            前橋市は人口約33万人。高崎市と並ぶ群馬の中心都市として行政・商業・医療の機能が集まり、周辺の工業都市（太田・伊勢崎・桐生など）との取引網の中でさまざまな資金ニーズが生まれています。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">自動車関連サプライヤーの資金繰り</h3>
              <p className="text-sm leading-relaxed text-text-light">
                群馬県は輸送用機器産業の集積地で、部品加工・金型・治具などのサプライヤーが県内に広がっています。量産立ち上げ期は材料費・人件費が先行するため、納品済み債権の資金化で次のロットに備える活用が典型的なシーンです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">県都の建設・不動産関連工事</h3>
              <p className="text-sm leading-relaxed text-text-light">
                前橋市内では公共工事に加え、市街地の再開発や住宅関連工事が動いています。工事代金の入金前に外注費・資材費の支払期日が来る場面で、完成済み工事債権のファクタリングが資金繰りの選択肢になります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">物流拠点で働く運送事業者</h3>
              <p className="text-sm leading-relaxed text-text-light">
                高速道路網の結節点である群馬には物流施設の立地が進み、地場の運送会社や軽貨物事業者の仕事量も増えています。燃料費の高止まりで手元資金が薄くなりがちなため、運賃請求書の早期資金化が下支えになります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 前橋・群馬の公的支援機関・制度 ─── */}
        <section id="public-support" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">前橋・群馬で使える公的支援機関・制度</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、前橋・群馬の公的支援機関と制度を紹介します。相談はいずれも原則無料です。急ぎの資金ギャップはファクタリング、中長期の資金計画は公的支援という使い分けが基本です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">群馬県の制度融資（中小企業向け融資制度）</h3>
              <p className="text-sm text-text-light">群馬県が金融機関・信用保証協会と連携して実施する中小企業者向けの融資制度。低利で運転資金・設備資金を調達できます。審査・実行に時間を要するため、目前の支払いはファクタリング、腰を据えた資金は制度融資という組み合わせが有効です。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">群馬県よろず支援拠点</h3>
              <p className="text-sm text-text-light">国が各都道府県に設置する無料の経営相談所。資金繰り改善・売上拡大・事業承継など、経営のあらゆる悩みを何度でも無料で相談できます。ファクタリングの利用可否を含め、資金調達手段を客観的に整理したいときに役立ちます。</p>
              <p className="mt-2 text-sm"><a href="https://www.yorozu-gunma.go.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">群馬県よろず支援拠点 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">群馬県信用保証協会</h3>
              <p className="text-sm text-text-light">中小企業の金融機関借入を保証する公的機関。保証付き融資は低コストで調達できる反面、審査に時間がかかります。入金までの期間をファクタリングでつなぎ、恒常的な資金需要は保証付き融資で対応する使い分けが可能です。</p>
              <p className="mt-2 text-sm"><a href="https://gunma-cgc.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">群馬県信用保証協会 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">前橋商工会議所</h3>
              <p className="text-sm text-text-light">前橋市の地域総合経済団体。経営相談やマル経融資（小規模事業者経営改善資金）のあっせん、補助金申請のサポートを行っています。市内の小規模事業者が低利の公的融資を検討するときの身近な相談窓口です。</p>
              <p className="mt-2 text-sm"><a href="https://maebashi-cci.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">前橋商工会議所 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫（前橋支店）</h3>
              <p className="text-sm text-text-light">政府系金融機関の県内窓口。創業融資や小規模事業者向けの低利融資を扱います。実行までに時間がかかるため、即日性が求められる支払いはファクタリング、まとまった資金は公庫融資と役割を分けて考えましょう。</p>
              <p className="mt-2 text-sm"><a href="https://www.jfc.go.jp/n/branch/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">日本政策金融公庫 店舗案内</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">全国の公的支援窓口を探す</h3>
              <p className="text-sm text-text-light">取引先が県外にある場合の窓口探しには、47都道府県のよろず支援拠点・信用保証協会の公式リンクをまとめた当サイトの全国マップが便利です。</p>
              <p className="mt-2 text-sm"><Link href="/articles/zenkoku-shikinguri-shien/" className="font-medium text-primary underline">47都道府県の公的資金繰り支援マップ</Link></p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-light">※掲載している各機関・制度の情報とリンク先は、2026年7月に公式サイトで確認しています。最新の受付状況・条件は各公式サイトをご確認ください。</p>
        </section>

        {/* ── 利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">前橋でファクタリングを利用する手順</h2>
          <div className="space-y-3">
            {[
              { step: "複数社に見積もり依頼", description: "オンライン完結型を中心に最低3社以上へ依頼。前橋から移動せずに申し込めます。" },
              { step: "必要書類の提出", description: "請求書・通帳コピー・本人確認書類などをアップロード。製造業は注文書・検収書を求められる場合もあります。" },
              { step: "審査・見積もり比較", description: "手数料率だけでなく、掛け目・諸費用込みの手取り額と入金日で比較しましょう。" },
              { step: "契約・入金", description: "電子契約で完結し、最短即日で指定口座へ入金されます。" },
              { step: "売掛金回収後の送金", description: "売掛先からの入金を受けたら、ファクタリング会社へ送金して取引終了です。" },
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：前橋でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">店舗の近さより条件で選ぶ</strong>：オンライン完結型なら前橋から東京の大手と同条件で比較できる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">下請債権に慣れた会社を選ぶ</strong>：製造業の検収・相殺など商流を説明できる会社だと審査が速い。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">2社間・3社間を使い分ける</strong>：急ぎは2社間、手数料重視なら売掛先の承諾を得て3社間を検討する。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">公的支援を併用する</strong>：よろず支援拠点・信用保証協会・公庫の低利調達と、即日性のファクタリングで役割分担する。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">ノンリコースを確認</strong>：償還請求権なしの買取契約であることを契約書で確かめる。</span></li>
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
            <Link href="/articles/utsunomiya/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">宇都宮のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">栃木県対応の業者を比較</p>
            </Link>
            <Link href="/articles/saitama/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">さいたまのファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">埼玉県対応の業者を紹介</p>
            </Link>
            <Link href="/articles/manufacturing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">製造業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">長い支払サイトへの対策を解説</p>
            </Link>
            <Link href="/articles/transport/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">運送業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">運賃債権の早期資金化を解説</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">群馬県のファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で前橋・群馬県から使えるファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
