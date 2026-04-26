import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 横浜のおすすめ業者5選｜神奈川エリア対応",
  description:
    "横浜でおすすめのファクタリング会社5社を徹底比較。横浜駅・みなとみらいエリアで対面相談可能な業者やオンライン完結型サービスを紹介。神奈川全域対応の会社も含め、手数料・入金スピードで厳選。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/yokohama/",
  },
  openGraph: {
    title: "ファクタリング 横浜のおすすめ業者5選｜神奈川エリア対応",
    description: "横浜・神奈川エリアのファクタリング会社5社を手数料・スピードで比較。",
    url: "https://factoring-partner.pages.dev/articles/yokohama/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const yokohamaFeatures = [
  {
    title: "東京に近い首都圏エリアの利便性",
    description:
      "横浜は東京から電車で約30分の距離にあり、東京に本社を構える大手ファクタリング会社への訪問も容易です。東京の会社のサービスをフルに活用しつつ、横浜に拠点を持つ会社と比較できる地理的メリットがあります。",
  },
  {
    title: "製造業・IT企業の集積地",
    description:
      "神奈川県には大手メーカーの工場や研究開発拠点が多く立地しています。また、みなとみらい地区にはIT企業やスタートアップも集積しており、多様な業種からのファクタリング需要が高いエリアです。",
  },
  {
    title: "港湾関連事業の資金ニーズ",
    description:
      "横浜港は日本を代表する貿易港であり、港湾関連の物流・倉庫業・貿易商社などの事業者が集まっています。国際取引に伴う入金サイトの長さをファクタリングで解消するニーズが根強くあります。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    area: "東京本社（横浜からアクセス良好）",
    features:
      "業界最大手級。累計買取額1,300億円超。2社間・3社間対応。最短2時間入金。法人・個人事業主対応。オンライン完結も可能。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "横浜から東京本社へのアクセスが良好。オンラインでも完結可能。高額案件にも上限なしで対応。神奈川エリアの取引実績も豊富。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。来店不要のオンライン完結型。",
    fee: "2%〜",
    speed: "最短即日",
    merit:
      "業界トップクラスの審査通過率。赤字決算・税金滞納でも柔軟対応。横浜からオンラインで手軽に利用できる。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "手数料の安さが最大の魅力。書類が少なく手続きが簡単。神奈川全域から来店不要で利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人が運営する非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利法人のため手数料が業界最安水準。認定機関の安心感。神奈川の中小企業にもおすすめ。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "手数料一律で分かりやすい。超少額から利用可能。土日祝も振込対応。横浜のフリーランスに最適。",
  },
];

const kanagawaIndustries = [
  {
    industry: "製造業",
    description:
      "神奈川県は自動車・電機・精密機器メーカーの拠点が多く、下請け企業のファクタリング需要が高いエリアです。部品納入後の入金サイトが60〜90日と長いケースが多く、資金繰り改善に活用されています。",
  },
  {
    industry: "IT・システム開発",
    description:
      "みなとみらい地区を中心にIT企業が多く集積。プロジェクト完了後の検収・入金待ち期間の資金繰りにファクタリングが利用されています。特にSES事業者の月末締め翌月末払いの売掛金需要が高いです。",
  },
  {
    industry: "物流・倉庫業",
    description:
      "横浜港を拠点とする物流・倉庫業者にとって、輸送代金や倉庫使用料の入金サイトの長さは大きな課題です。燃料費・人件費の先行支出をファクタリングでカバーする事業者が増えています。",
  },
  {
    industry: "建設業",
    description:
      "横浜市内の再開発プロジェクトや神奈川県内の公共工事に携わる建設業者は、工事完了から入金までの期間が長く、材料費や外注費の支払いにファクタリングを活用しています。",
  },
];

const faqs = [
  {
    question: "横浜でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "横浜でファクタリング会社を選ぶ際は、①東京の大手もオンラインで利用可能か②手数料が相場の範囲内か③神奈川の業種（製造業・IT・物流など）に対応しているか④即日入金に対応しているか⑤口コミ・実績が豊富かの5点を確認しましょう。東京の会社へのアクセスが良い横浜の地の利を活かし、対面とオンラインの両方で比較することをおすすめします。",
  },
  {
    question: "神奈川県の他のエリア（川崎・相模原など）からも利用できますか？",
    answer:
      "はい、オンライン完結型のファクタリング会社であれば、川崎・相模原・藤沢・横須賀・小田原など神奈川県全域から利用可能です。対面相談を希望する場合は、東京本社の会社を訪問するか、出張対応してくれる会社を選びましょう。東京まで30分〜1時間圏内のエリアが多いのは横浜・神奈川の強みです。",
  },
  {
    question: "横浜のファクタリング手数料の相場は？",
    answer:
      "横浜のファクタリング手数料は、2社間で5%〜18%、3社間で1%〜9%程度で、東京とほぼ同水準です。首都圏エリアのため、オンライン対応の会社も含め選択肢が豊富で、複数社の見積もりを比較することでより安い手数料を引き出しやすい環境です。最低3社以上の見積もりを取ることをおすすめします。",
  },
  {
    question: "横浜で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングでは最短2時間、QuQuMoでも最短2時間での入金実績があります。オンライン完結型のサービスを利用すれば、横浜にいながら即日入金が可能です。午前中に申し込みと書類提出を完了させることで、当日中の入金確率が大幅に上がります。",
  },
  {
    question: "個人事業主でも横浜でファクタリングを利用できますか？",
    answer:
      "はい、個人事業主でも利用できるファクタリング会社は多くあります。ラボル、アクセルファクター、QuQuMoなどは個人事業主にも対応しています。特にラボルは1万円から利用可能で、横浜のフリーランスや小規模事業者に適しています。みなとみらいエリアのフリーランスエンジニアの利用も増えています。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリング 横浜のおすすめ業者5選｜神奈川エリア対応",
  description: "横浜・神奈川エリアのファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/yokohama/" },
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
    { "@type": "ListItem", position: 3, name: "横浜のファクタリング会社", item: "https://factoring-partner.pages.dev/articles/yokohama/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function YokohamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "横浜のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 横浜のおすすめ業者5選
            <br className="hidden md:block" />
            神奈川エリア対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            横浜・神奈川エリアで利用できるファクタリング会社を厳選紹介。横浜駅・みなとみらいエリアで対面相談可能な会社から、オンライン完結型の大手まで、手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 横浜でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 横浜のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 神奈川の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 横浜での業者選びのポイント</a></li>
            <li><a href="#capital-region" className="hover:underline">5. 首都圏の資金調達事情</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">横浜でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">横浜は首都圏第2の都市であり、東京の大手ファクタリング会社へのアクセスも良好なエリアです。地域ならではの特徴を把握しましょう。</p>
          <div className="space-y-4">
            {yokohamaFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">横浜のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">横浜・神奈川エリアで利用できるファクタリング会社を厳選して5社紹介します。東京の大手もオンラインで気軽に利用できます。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">神奈川の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">神奈川県の主要業種ごとに、ファクタリングがどのように活用されているかを解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {kanagawaIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">横浜での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">横浜でファクタリング会社を選ぶ際に押さえておきたいポイントを解説します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">東京の大手と横浜の地場企業を比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                横浜は東京の大手ファクタリング会社にもアクセスしやすい立地です。東京の大手のオンラインサービスと、地場の会社の対面サービスの両方で見積もりを取り、手数料・サービス内容を比較しましょう。最低3社以上の比較がおすすめです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">業種に合った会社を選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                製造業・IT・物流・建設業など、神奈川県は多様な業種が存在します。自社の業種に対応した審査ノウハウを持つ会社を選ぶことで、審査通過率が上がり、より良い条件での利用が期待できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">手数料の内訳を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                手数料以外に事務手数料・登記費用・出張費用などの名目で追加費用がかかる場合があります。契約前に総コストを確認し、追加費用がない会社を選ぶことが重要です。見積もり段階で「総額でいくらかかるか」を明確にしましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">契約内容を慎重に確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                債権譲渡登記の有無、償還請求権（リコース）の有無、契約期間の縛りなど、契約書の細かい条件を確認しましょう。不明点があれば契約前に質問し、納得してから契約することが大切です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 首都圏の資金調達事情 ─── */}
        <section id="capital-region" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">首都圏の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            横浜・神奈川エリアは首都圏の一角として、銀行融資・ファクタリング・各種制度融資など、資金調達の選択肢が豊富です。しかし、中小企業や創業間もない事業者にとっては銀行融資のハードルが高い場合も多く、ファクタリングが重要な選択肢となっています。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">横浜市の制度融資</strong>：横浜市中小企業融資制度は利率が低いものの審査に1〜2ヶ月かかります。急ぎの場合はファクタリングで対応し、中長期的には制度融資を活用するのが効果的です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">神奈川県の信用保証協会</strong>：信用保証協会の保証付き融資とファクタリングは併用可能です。融資枠とは別にファクタリングで資金調達できるため、資金繰りの幅が広がります</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">横浜銀行・スルガ銀行との関係</strong>：地方銀行との取引がある場合、銀行系ファクタリングサービスを利用できる可能性もあります。メインバンクに相談してみましょう</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 横浜の経済圏とファクタリング活用シーン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">横浜の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            横浜市は人口約370万人を擁する政令指定都市であり、市内総生産は約14兆円と国内有数の経済規模を誇ります。多彩な産業が集積する横浜ならではのファクタリング活用シーンを紹介します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">みなとみらい地区のIT・スタートアップ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                みなとみらい21地区には多数のIT企業が集積しています。受託開発やSES事業では、プロジェクト完了から入金まで1〜2ヶ月のタイムラグが発生するため、エンジニアの給与支払いにファクタリングを活用するケースが増えています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">京浜工業地帯の下請け製造業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                京浜工業地帯に位置する川崎〜横浜エリアの製造業者は、大手メーカーからの受注に対して材料費や加工費を先行して支出する必要があります。入金サイトが60〜120日と長い場合、ファクタリングで資金繰りを安定させることが有効です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">横浜港関連の貿易・物流企業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                国際貿易に関わる企業は、海外取引先の支払条件が厳しいケースがあります。為替リスクや長い入金サイトに対して、国内の売掛金をファクタリングで現金化し、運転資金を確保する手法が活用されています。
              </p>
            </div>
          </div>
        </section>

        {/* ── 横浜のファクタリング利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">横浜でファクタリングを利用する手順</h2>
          <p className="mb-8 leading-relaxed text-text-light">横浜からファクタリングを利用する際の一般的な手順を紹介します。</p>
          <div className="space-y-3">
            {[
              { step: "複数社に見積もり依頼", description: "東京の大手とオンライン完結型の会社を含め、最低3社以上に見積もりを依頼しましょう。オンラインで簡単に見積もりが取れます。" },
              { step: "必要書類の準備", description: "請求書・通帳コピー・身分証明書・登記簿謄本などを準備。会社によって必要書類は異なるため、事前に確認しましょう。" },
              { step: "審査・見積もり比較", description: "各社から提示された手数料・条件を比較します。手数料の総額（追加費用含む）で比較することが重要です。" },
              { step: "契約・入金", description: "最も条件の良い会社と契約。ノンリコース（償還請求権なし）であることを確認してサインしましょう。最短即日で入金されます。" },
              { step: "売掛金の回収・送金", description: "入金予定日に売掛先から入金があったら、ファクタリング会社に送金します（2社間の場合）。3社間の場合は売掛先から直接ファクタリング会社に入金されます。" },
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

        {/* ── 横浜の支援機関 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">横浜・神奈川の中小企業支援機関</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングだけでなく、横浜・神奈川エリアの中小企業が利用できる支援機関も活用しましょう。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">横浜市中小企業支援センター</h3>
              <p className="text-sm text-text-light">横浜市の中小企業向け経営相談窓口。資金調達の相談も可能。無料で中小企業診断士に相談できます。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">神奈川県信用保証協会</h3>
              <p className="text-sm text-text-light">銀行融資の保証を担う公的機関。ファクタリングと保証付き融資の併用も可能です。横浜市に本部があります。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">横浜商工会議所</h3>
              <p className="text-sm text-text-light">会員企業向けの経営相談・融資あっせん・補助金情報の提供を行っています。マル経融資（小規模事業者経営改善資金融資）の窓口にもなっています。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫 横浜支店</h3>
              <p className="text-sm text-text-light">政府系金融機関。低金利の融資が特徴で、創業融資にも積極的です。ファクタリングで急ぎの資金を確保しつつ、中長期的に公庫の融資を活用するのが効果的です。</p>
            </div>
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

        {/* ── 横浜でファクタリングを選ぶまとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：横浜でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">東京の大手もオンラインで利用可能</strong>：横浜は東京へのアクセスが良好。対面相談も可能だが、オンライン完結型なら来店不要で手続きが早い。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">最低3社以上の見積もりを比較</strong>：東京の大手と地場企業を含め、複数社の見積もりを取ることで手数料の比較幅が広がる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">業種に合った会社を選ぶ</strong>：製造業・IT・物流・建設業など、神奈川の主要業種に対応した会社を選ぶと審査がスムーズ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">手数料の総額で比較</strong>：手数料率だけでなく、事務手数料・登記費用など全てのコストを含めた総額で比較する。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">ノンリコースであることを確認</strong>：償還請求権なし（ノンリコース）の会社を選び、安全な取引を心がける。</span></li>
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
            <Link href="/articles/nagoya/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">名古屋のファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">東海エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/it-industry/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">IT業界向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">システム開発・SES事業者向け</p>
            </Link>
            <Link href="/articles/manufacturing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">製造業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">下請け企業の資金繰り改善</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">神奈川エリアのファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で横浜・神奈川エリアのファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
