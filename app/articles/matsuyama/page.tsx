import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 松山のおすすめ業者5選｜愛媛・四国エリア対応",
  description:
    "松山でおすすめのファクタリング会社5社を徹底比較。四国最大の人口を擁し、製造業と観光が支える松山から利用しやすいオンライン完結型サービスを中心に、手数料・入金スピードで厳選。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/matsuyama/",
  },
  openGraph: {
    title: "ファクタリング 松山のおすすめ業者5選｜愛媛・四国エリア対応",
    description: "松山・愛媛エリアのファクタリング会社5社を手数料・スピードで比較。",
    url: "https://hyogo-shihoushoshi.jp/articles/matsuyama/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const matsuyamaFeatures = [
  {
    title: "四国最大の人口を擁する都市",
    description:
      "松山は四国で最も人口の多い都市であり、商業・サービス業の集積が進んでいます。事業者数が多い分、売掛金の入金待ちによる資金繰りの課題も生まれやすく、ファクタリングのニーズがある地域です。",
  },
  {
    title: "製造業と観光が支える経済",
    description:
      "松山を含む愛媛県は化学繊維をはじめとする製造業の集積があり、道後温泉に代表される観光も松山経済の柱です。製造業は材料費の先行支出と長い入金サイト、観光・宿泊・飲食は季節変動と、いずれも資金繰りの波が生じやすい業種構成です。",
  },
  {
    title: "オンライン完結で東京の大手も利用可能",
    description:
      "松山からは東京の大手ファクタリング会社にオンラインでアクセスできます。地場のファクタリング会社は選択肢が限られるため、東京の大手もオンラインで利用することで、手数料の比較幅が広がります。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    area: "東京本社（オンライン対応）",
    features:
      "業界最大手級。累計買取額1,300億円超。2社間・3社間対応。最短2時間入金。法人・個人事業主対応。四国エリアの取引実績も豊富。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "大手ならではの安定感。オンラインで松山から簡単に利用可能。高額案件にも上限なし。松山の製造業・建設業者にも利用しやすい体制。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "業界トップクラスの審査通過率。赤字決算・税金滞納でも柔軟対応。松山からオンラインで即日入金も可能。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "手数料の安さが魅力。書類が少なく手続きが簡単。松山をはじめ愛媛・四国全域から来店不要で利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利法人ゆえの低手数料。認定機関の安心感。松山・愛媛の中小企業にもおすすめ。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "超少額から利用可能。土日祝も振込対応。手数料一律で明瞭。松山のフリーランスに最適。",
  },
];

const matsuyamaIndustries = [
  {
    industry: "製造業",
    description:
      "愛媛県は化学繊維をはじめとする製造業の集積地です。製造業は材料費・外注費の支払いが先行し、納品から入金までのサイトが長くなりがちです。売掛金をファクタリングで早期資金化することで、次の受注に向けた資金を確保できます。",
  },
  {
    industry: "観光・宿泊・飲食業",
    description:
      "道後温泉を擁する松山では、観光関連の宿泊・飲食業が経済の柱の一つです。旅行会社経由の売掛金やカード決済の入金待ち、季節による売上変動への備えとして、ファクタリングが資金繰りの平準化に活用できます。",
  },
  {
    industry: "建設業",
    description:
      "松山でも公共工事や民間建築の受注から入金までの資金ギャップは大きな課題です。工事完了から入金までの期間が長い建設業では、外注費や材料費の支払いに充てる資金をファクタリングで確保する事業者がいます。",
  },
  {
    industry: "医療・介護",
    description:
      "高齢化の進行にともない、医療・介護事業者のファクタリング需要も高まっています。診療報酬・介護報酬は入金まで約2ヶ月かかるため、その間の人件費や運営費の支払いにファクタリングが活用されています。",
  },
];

const faqs = [
  {
    question: "松山でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "松山で選ぶ際は、①オンラインで完結できるか②手数料が相場範囲内（目安として2社間8〜18%、3社間1〜9%）か③製造業・観光業など松山の主要業種に対応しているか④即日入金に対応しているか⑤実績と口コミが豊富かの5点を確認しましょう。東京の大手もオンラインで利用できるため、選択肢を広く持つことが重要です。",
  },
  {
    question: "愛媛県内の他エリア（今治・新居浜・宇和島など）からも利用できますか？",
    answer:
      "はい、オンライン完結型のファクタリング会社であれば、今治・新居浜・西条・宇和島など愛媛県全域から利用可能です。書類提出もオンラインで完結するため、地理的な制約は一切ありません。即日入金にも対応しています。",
  },
  {
    question: "松山のファクタリング手数料の相場は？",
    answer:
      "松山のファクタリング手数料は、目安として2社間で8%〜18%、3社間で1%〜9%程度とされ、東京とほぼ同水準です。実際の手数料は会社や売掛先の信用力によって異なるため、オンライン対応の全国展開型会社を含めて複数社の見積もりを必ず比較しましょう。",
  },
  {
    question: "松山で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングやQuQuMoでは最短2時間での入金実績があります。オンライン完結型のサービスを利用すれば、松山にいながら即日入金が実現できます。午前中の申し込みがポイントです。",
  },
  {
    question: "製造業でファクタリングを利用する際の注意点は？",
    answer:
      "製造業の場合、納品・検収が完了した売掛金が対象になります。注意点は①納品前の受注段階の債権は通常のファクタリングでは対象外（注文書対応の会社は限られる）②売掛先（発注元メーカーなど）の信用力が手数料に影響する③継続取引先の債権は3社間も検討できる点です。製造業の商流に慣れた会社を選びましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ファクタリング 松山のおすすめ業者5選｜愛媛・四国エリア対応",
  description: "松山・愛媛エリアのファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/matsuyama/" },
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
    { "@type": "ListItem", position: 3, name: "松山のファクタリング会社", item: "https://hyogo-shihoushoshi.jp/articles/matsuyama/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function MatsuyamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "松山のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 松山のおすすめ業者5選
            <br className="hidden md:block" />
            愛媛・四国エリア対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            松山・愛媛エリアで利用できるファクタリング会社を厳選紹介。四国最大の人口を擁する松山から使いやすいオンライン完結型を中心に、手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 松山でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 松山のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 松山・愛媛の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 松山での業者選びのポイント</a></li>
            <li><a href="#ehime-finance" className="hover:underline">5. 松山・愛媛の資金調達事情</a></li>
            <li><a href="#public-support" className="hover:underline">6. 松山・愛媛で使える公的支援機関・制度</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">松山でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">松山は四国最大の人口を擁する都市。製造業と観光が経済を支え、多様な業種でファクタリングの活用シーンがあるエリアです。</p>
          <div className="space-y-4">
            {matsuyamaFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">松山のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">松山・愛媛エリアで利用できるファクタリング会社を厳選して5社紹介します。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">松山・愛媛の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">松山・愛媛エリアの主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {matsuyamaIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">松山での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">松山・愛媛でファクタリング会社を選ぶ際に確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">東京の大手とオンラインで比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                松山の地場ファクタリング会社は選択肢が限られます。東京の大手はオンラインで全国対応しているため、手数料やサービス内容を比較し、最も条件の良い会社を選びましょう。最低3社以上の見積もりを取ることが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">製造業・観光業の商流を理解する会社を選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                松山・愛媛は製造業と観光関連が主要業種です。納品・検収ベースの製造業の売掛金や、旅行会社経由・カード決済など観光業特有の債権に慣れた会社を選ぶと、審査や手続きがスムーズに進みます。
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

        {/* ── 松山・愛媛の資金調達事情 ─── */}
        <section id="ehime-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">松山・愛媛の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            愛媛県は中小企業にとって資金調達の選択肢が都市部より限られがちです。ファクタリングは銀行融資を補完する手段として、松山・愛媛の中小企業にも浸透しつつあります。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">伊予銀行・愛媛銀行など地銀の活用</strong>：松山に本店を置く地方銀行との取引がある場合、銀行経由の資金調達も選択肢です。まずはメインバンクに相談してみましょう</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">愛媛県の制度融資</strong>：愛媛県の中小企業向け融資制度は低利ですが、申込から実行まで時間がかかります。急ぎの場合はファクタリングで対応し、中長期的には制度融資を活用するのが賢い方法です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">補助金との併用</strong>：各種補助金の入金待ち期間にファクタリングを活用することで、事業を止めることなく資金繰りを維持できます</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 松山の経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">松山の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            松山は四国最大の人口を擁し、商業・サービス業から製造業・観光まで多様な産業が集まる都市です。業種ごとに資金繰りの課題が異なるため、ファクタリングの活用シーンも多岐にわたります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">化学繊維など製造業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                愛媛県は化学繊維をはじめとする製造業の集積があり、メーカーからの受注に対する材料費・外注費の先行支出が発生します。納品済み売掛金のファクタリングで、次の受注に向けた資金を確保する使い方が有効です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">道後温泉と観光ビジネス</h3>
              <p className="text-sm leading-relaxed text-text-light">
                道後温泉を中心とした観光は松山経済の柱の一つです。宿泊・飲食業では旅行会社経由の売掛金やカード決済の入金待ちが生じるほか、季節による売上変動もあるため、ファクタリングで資金繰りを平準化できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">医療・福祉サービス</h3>
              <p className="text-sm leading-relaxed text-text-light">
                高齢化が進む愛媛では医療・介護施設の需要が増加しています。診療報酬・介護報酬の入金まで約2ヶ月かかるため、その間の運営資金をファクタリングで確保する事業者がいます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 松山・愛媛の公的支援機関・制度 ─── */}
        <section id="public-support" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">松山・愛媛で使える公的支援機関・制度</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、松山・愛媛の公的支援機関と制度を紹介します。相談はいずれも原則無料です。急ぎの資金ギャップはファクタリング、中長期の資金計画は公的支援という使い分けが基本です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">愛媛県の中小企業向け融資制度（制度融資）</h3>
              <p className="text-sm text-text-light">愛媛県・金融機関・愛媛県信用保証協会が連携して行う中小企業者向けの融資制度。低利・固定金利で事業資金を借りられます。申込から実行まで時間がかかるため、急ぎの支払いはファクタリングでつなぎ、中長期の運転資金は制度融資でまかなうのが有効です。</p>
              <p className="mt-2 text-sm"><a href="https://www.pref.ehime.jp/site/madoguchi/59788.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">愛媛県公式サイト：愛媛県の中小企業向け融資制度</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">愛媛県信用保証協会</h3>
              <p className="text-sm text-text-light">中小企業が金融機関から融資を受ける際の保証を担う公的機関（松山市）。保証付き融資は低コストですが審査に時間を要するため、入金までのつなぎにファクタリングを併用する使い分けが可能です。</p>
              <p className="mt-2 text-sm"><a href="https://www.ehime-cgc.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">愛媛県信用保証協会 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">愛媛県よろず支援拠点</h3>
              <p className="text-sm text-text-light">国が全都道府県に設置した無料の経営相談所（松山市）。資金繰り・売上拡大など経営全般を何度でも無料で相談できます。ファクタリング利用の前に資金繰り全体を専門家に整理してもらいたいときの相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://yorozu-ehime.go.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">愛媛県よろず支援拠点 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">松山市中小企業資金融資制度</h3>
              <p className="text-sm text-text-light">松山市が金融機関・信用保証協会と連携して行う市内中小企業者向けの融資制度。市内事業者が身近に利用できる公的融資の窓口です。融資実行までの期間を考慮し、急ぎの資金はファクタリング、恒常的な運転資金は市の融資制度と使い分けましょう。</p>
              <p className="mt-2 text-sm"><a href="https://www.city.matsuyama.ehime.jp/kurashi/sangyo/chusyoukigyou/shikinyuushiseido.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">松山市公式サイト：松山市中小企業資金融資制度</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫 松山支店</h3>
              <p className="text-sm text-text-light">政府系金融機関の愛媛県内窓口（松山市）。小規模事業者や創業期でも利用しやすい低利融資を扱います。融資実行までの期間を要するため、即日性が必要な場面はファクタリング、恒常的な資金は公庫融資と役割を分けましょう。</p>
              <p className="mt-2 text-sm"><a href="https://www.jfc.go.jp/n/branch/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">日本政策金融公庫 店舗案内（松山支店）</a></p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-light">※掲載している各機関・制度の情報とリンク先は、2026年7月に公式サイトで確認しています。最新の受付状況・条件は各公式サイトをご確認ください。</p>
        </section>

        {/* ── 利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">松山でファクタリングを利用する手順</h2>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：松山でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">東京の大手もオンラインで利用可能</strong>：オンライン完結型なら来店不要で、松山から即日入金も狙える。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">製造業・観光業の商流に慣れた会社を選ぶ</strong>：松山・愛媛は製造業と観光が柱。業種特有の債権に理解がある会社だと審査がスムーズ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">最低3社以上の見積もりを比較</strong>：手数料の総額で比較し、最も条件の良い会社を選ぶ。オンラインで簡単に見積もりが取れる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">地域の支援機関も併用</strong>：ファクタリングに加え、伊予銀行など地銀・愛媛県信用保証協会・公庫なども活用して資金繰りを安定させる。</span></li>
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
            <Link href="/articles/hiroshima/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">広島のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">中国エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/kitakyushu/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">北九州のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">北九州エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/manufacturing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">製造業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">長い入金サイトの資金化</p>
            </Link>
            <Link href="/articles/restaurant/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">飲食業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">クレジットカード債権で資金調達</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">愛媛・四国エリアのファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で松山・愛媛エリアのファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
