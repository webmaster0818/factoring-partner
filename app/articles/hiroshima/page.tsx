import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 広島のおすすめ業者5選｜中国地方対応",
  description:
    "広島でおすすめのファクタリング会社5社を徹底比較。広島駅周辺で対面相談可能な業者やオンライン完結型サービスを紹介。中国地方全域対応の会社も含め、手数料・入金スピードで厳選。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/hiroshima/",
  },
  openGraph: {
    title: "ファクタリング 広島のおすすめ業者5選｜中国地方対応",
    description: "広島・中国地方のファクタリング会社5社を手数料・スピードで比較。",
    url: "https://factoring-partner.pages.dev/articles/hiroshima/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const hiroshimaFeatures = [
  {
    title: "中国地方最大の経済圏",
    description:
      "広島は中国地方5県（広島・岡山・山口・島根・鳥取）の経済の中心地です。自動車産業を筆頭に製造業が盛んで、ファクタリングの需要も高いエリアです。大手ファクタリング会社の中国地方拠点も広島に集中しています。",
  },
  {
    title: "自動車・造船など重工業の集積",
    description:
      "マツダの本社がある広島は自動車関連産業の一大拠点です。また瀬戸内海沿いには造船業や鉄鋼業も集積しており、大型の売掛金が発生する業種が多いのが特徴です。",
  },
  {
    title: "オンライン完結で全国の会社を利用可能",
    description:
      "広島に拠点を持つファクタリング会社は限られますが、東京・大阪の大手がオンラインで全国対応しています。地場の会社と全国展開の会社を併用して見積もりを比較するのが賢い方法です。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    area: "東京本社（オンライン対応）",
    features:
      "業界最大手級。累計買取額1,300億円超。2社間・3社間対応。最短2時間入金。法人・個人事業主対応。中国地方の取引実績も豊富。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "大手ならではの安定感と高額対応力。製造業・建設業の取引実績が豊富。広島からオンラインで手軽に利用可能。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "2%〜",
    speed: "最短即日",
    merit:
      "審査通過率の高さが魅力。赤字決算・税金滞納でも柔軟対応。広島からオンラインで即日入金が可能。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "業界最安水準の手数料。書類が少なく手続きが簡単。中国地方全域から来店不要で利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利法人ゆえの低手数料。認定機関の安心感。広島・中国地方の中小企業にもおすすめ。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "超少額から利用可能。土日祝も振込対応。手数料一律で分かりやすい。広島のフリーランスに最適。",
  },
];

const chugokuIndustries = [
  {
    industry: "自動車関連製造業",
    description:
      "マツダを中心とした自動車産業のサプライチェーンが広島に集積しています。部品メーカーの入金サイトは60〜90日と長く、材料費の先行投資にファクタリングを活用する企業が多いです。",
  },
  {
    industry: "造船・重工業",
    description:
      "瀬戸内海沿いの造船業や鉄鋼業は大型案件が多く、1件あたりの売掛金額が大きいのが特徴です。工期が長い案件の中間資金をファクタリングで確保するニーズがあります。",
  },
  {
    industry: "建設業",
    description:
      "広島市の再開発プロジェクトや中国地方の公共工事に携わる建設業者のファクタリング需要は高いです。工事完了から入金までの期間を短縮し、次の現場への着手資金に充てるケースが多くあります。",
  },
  {
    industry: "観光・飲食業",
    description:
      "宮島・平和公園など観光地を有する広島では、観光業や飲食業の事業者もファクタリングを活用しています。旅行代理店からの入金待ちや、法人宴会の売掛金を早期現金化するニーズがあります。",
  },
];

const faqs = [
  {
    question: "広島でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "広島で選ぶ際は、①オンラインで完結できるか②手数料が相場範囲内（2社間5〜18%、3社間1〜9%）か③製造業・建設業など地元の主要業種に対応しているか④即日入金に対応しているか⑤実績と口コミが豊富かの5点を確認しましょう。東京・大阪の大手もオンラインで利用できるため、広く比較することが重要です。",
  },
  {
    question: "中国地方の他県（岡山・山口など）からも利用できますか？",
    answer:
      "はい、オンライン完結型のファクタリング会社であれば、岡山・山口・島根・鳥取など中国地方全域から利用可能です。書類提出もオンラインで完結するため、地理的な制約はありません。",
  },
  {
    question: "広島のファクタリング手数料の相場は？",
    answer:
      "広島のファクタリング手数料は、2社間で5%〜18%、3社間で1%〜9%程度で、東京・大阪とほぼ同水準です。オンライン対応の全国展開型会社を利用することで、地域差なく競争力のある手数料で利用できます。",
  },
  {
    question: "広島で即日入金は可能ですか？",
    answer:
      "はい、可能です。オンライン完結型のビートレーディング、QuQuMo、アクセルファクターなどは即日入金に対応しています。午前中に申し込みと書類提出を完了させることで、当日中の入金が実現しやすくなります。",
  },
  {
    question: "自動車部品メーカーでもファクタリングを利用できますか？",
    answer:
      "はい、自動車部品メーカーの売掛金もファクタリングの対象になります。大手自動車メーカーやTier1メーカーへの売掛金は、売掛先の信用力が高いため、比較的低い手数料で利用できることが多いです。ただし、売掛先への通知なしで利用したい場合は2社間ファクタリングを選びましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリング 広島のおすすめ業者5選｜中国地方対応",
  description: "広島・中国地方のファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/hiroshima/" },
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
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "広島のファクタリング会社", item: "https://factoring-partner.pages.dev/articles/hiroshima/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function HiroshimaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "広島のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 広島のおすすめ業者5選
            <br className="hidden md:block" />
            中国地方対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            広島・中国地方で利用できるファクタリング会社を厳選紹介。対面相談可能な会社から、オンライン完結型の大手まで、手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 広島でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 広島のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 中国地方の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 広島での業者選びのポイント</a></li>
            <li><a href="#chugoku-finance" className="hover:underline">5. 中国地方の資金調達事情</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">広島でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">広島は中国地方の経済の中心地であり、製造業を中心にファクタリングの需要が高いエリアです。</p>
          <div className="space-y-4">
            {hiroshimaFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">広島のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">広島・中国地方で利用できるファクタリング会社を厳選して5社紹介します。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">中国地方の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">中国地方の主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {chugokuIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">広島での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">広島・中国地方でファクタリング会社を選ぶ際のポイントを解説します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">製造業に強い会社を優先する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                広島は自動車・造船・鉄鋼など製造業が盛んなエリアです。製造業の売掛金は金額が大きく、入金サイトも長い傾向があるため、高額案件に対応でき、製造業への理解がある会社を選びましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">東京・大阪の大手も検討に入れる</h3>
              <p className="text-sm leading-relaxed text-text-light">
                広島に拠点を持つファクタリング会社は限られるため、東京・大阪の大手をオンラインで利用することで選択肢が広がります。手数料の比較幅も広がるため、最低3社以上の見積もりを取りましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">高額案件への対応力を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                造船業や大型建設工事の売掛金は数千万円〜数億円になることがあります。高額案件に対応できる資本力のある会社を選ぶことが重要です。買取上限額を事前に確認しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">継続利用の条件を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングを定期的に利用する場合、2回目以降の手数料が下がる会社もあります。継続利用を前提にする場合は、リピーター割引や優遇条件のある会社を選ぶとコストを抑えられます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 中国地方の資金調達事情 ─── */}
        <section id="chugoku-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">中国地方の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            中国地方は製造業を中心とした産業構造で、大手メーカーの下請け企業が多いエリアです。入金サイトの長さに悩む事業者にとって、ファクタリングは重要な資金調達手段となっています。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">広島銀行・もみじ銀行の活用</strong>：地方銀行との取引がある場合、銀行系ファクタリングや融資サービスも検討価値があります。ファクタリングと銀行融資の使い分けが効果的です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">広島県の制度融資</strong>：広島県の中小企業向け制度融資は利率が低いですが審査に時間がかかります。急ぎの資金にはファクタリングが適しています</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">瀬戸内エリアの産業クラスター</strong>：広島・岡山・山口にまたがる製造業クラスターでは、サプライチェーン内での資金繰り改善にファクタリングが有効に活用されています</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 広島の経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">広島の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            広島市は人口約118万人の政令指定都市であり、中国・四国地方最大の都市圏を形成しています。製造業を軸に多様な産業が発展しており、さまざまな場面でファクタリングが活用されています。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">自動車部品サプライチェーン</h3>
              <p className="text-sm leading-relaxed text-text-light">
                マツダの生産拠点がある広島では、Tier2・Tier3の部品サプライヤーが多数存在します。大手メーカーへの納品後、入金まで2〜3ヶ月かかることが一般的で、その間の運転資金をファクタリングで確保する需要が高いです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">瀬戸内の造船・海運業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                呉市や尾道市などでは造船業が盛んです。大型船舶の建造は工期が長く、中間支払いがあっても材料費・人件費の先行支出が大きいため、売掛金のファクタリングで資金繰りを補う企業があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">広島市の再開発と建設業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                広島駅周辺の再開発事業や広島高速道路の整備など、大型建設プロジェクトが進行中です。これらに携わる建設業者は、工事完了から入金までの資金ギャップをファクタリングで解消しています。
              </p>
            </div>
          </div>
        </section>

        {/* ── 中国地方の支援機関 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">中国地方の中小企業支援機関</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、中国地方の支援機関を紹介します���</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">広島県中小企業支援センター</h3>
              <p className="text-sm text-text-light">広島県の中小企業向け経営相談窓口。資金調達・経営改善の無料相談が可能。専門家による個別支援も利用できます。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">広島県信用保証協会</h3>
              <p className="text-sm text-text-light">銀行融資の保証を担う公的機関。保証付き融資とファクタリングの併用が可能です。製造業向けの特別保証制度もあります。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">広島商工会議所</h3>
              <p className="text-sm text-text-light">経営相談・融資あっせん・補助金情報の提供。自動車関連産業に強い支援体制を持ってい��す。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">中国経済産業局</h3>
              <p className="text-sm text-text-light">各種補助金の窓口。ものづくり補助金やIT導入補助金の申請支援も行っています。補助金入金待ちにはファクタリングを活用。</p>
            </div>
          </div>
        </section>

        {/* ── 利用手順 ──��� */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">広島でファクタリングを利用する手順</h2>
          <div className="space-y-3">
            {[
              { step: "オンラインで複数社に見積もり依頼", description: "東京・大阪の大手を含め最低3社以上に見積もりを依頼。オンラインで全国の会社と比較できます。" },
              { step: "必要書類をオンラインで提出", description: "請求書・通帳コピー・身分証明書などをスマホやPCでアップロード。来店不要で手続きが完結します。" },
              { step: "審査・見積もり比較", description: "各社の手数料と条件を比較。手数料の総額で比較し、最も有利な会社を選びましょう。" },
              { step: "オンラインで契約・入金", description: "電子契約でオンライン完結。最短即日で指定口座に入金されます。" },
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：広島でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">東京・大阪の大手もオンラインで利用可能</strong>：広島に拠点がある会社は限られるが、オンライン完結型なら全国の大手を利用できる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">製造業に強い会社を選ぶ</strong>：自動車・造船・鉄鋼など広島の主要業種に対応できる会社を選ぶと審査がスムーズ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">高額案件対応力を確認</strong>：造船業など大型案件は数千万円〜数億円規模。買取上限額が十分な会社を選ぶ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">最低3社以上の見積もりを比較</strong>：手数料の総額で比較し、最も条件の良い会社を選ぶ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">地域の支援機関も活用</strong>：広島銀行・信用保証協会・公庫など��併用して資金繰りを安定させる。</span></li>
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
            <Link href="/articles/osaka/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">大阪のファクタリング会社8選</p>
              <p className="mt-1 text-sm text-text-light">関西エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/manufacturing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">製造業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">下請け企業の資金繰り改善</p>
            </Link>
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">おすすめ5選と活用事例</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">中国地方のファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で広島・中国地方のファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
