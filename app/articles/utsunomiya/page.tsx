import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 宇都宮のおすすめ業者5選｜栃木・北関東対応",
  description:
    "宇都宮でおすすめのファクタリング会社5社を徹底比較。北関東の内陸工業都市・宇都宮からオンライン完結で利用できる大手サービスを紹介。栃木県全域対応、手数料・入金スピードで厳選。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/utsunomiya/",
  },
  openGraph: {
    title: "ファクタリング 宇都宮のおすすめ業者5選｜栃木・北関東対応",
    description: "宇都宮・栃木エリアのファクタリング会社5社を手数料・スピードで比較。",
    url: "https://hyogo-shihoushoshi.jp/articles/utsunomiya/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const utsunomiyaFeatures = [
  {
    title: "北関東を代表する内陸工業都市",
    description:
      "宇都宮は栃木県の県庁所在地であり、北関東を代表する内陸工業都市です。市内には工業団地が立地し、機械・金属・食品など製造業の集積が進んでいます。大手メーカーとの取引では入金サイトが長くなりがちで、その資金ギャップを埋める手段としてファクタリングが活用されています。",
  },
  {
    title: "LRT開業で注目される交通・物流",
    description:
      "宇都宮では次世代型路面電車（LRT）が開業し、交通インフラのまちとして全国的に注目されています。東北自動車道・北関東自動車道が交わる物流の要衝でもあり、運輸・物流業の資金需要も高いエリアです。燃料費や人件費の先行支出をファクタリングで賄うケースがあります。",
  },
  {
    title: "オンライン完結で東京の大手も利用可能",
    description:
      "宇都宮は新幹線で東京まで約1時間とアクセスが良好ですが、来店しなくてもオンライン完結型のファクタリング会社を利用できます。地場の選択肢が限られる分、東京の大手をオンラインで比較することで、手数料の比較幅が広がります。",
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
      "大手ならではの安定感。オンラインで宇都宮から簡単に利用可能。高額案件にも上限なし。北関東の製造業・建設業の資金需要にも対応。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "業界トップクラスの審査通過率。赤字決算・税金滞納でも柔軟対応。宇都宮からオンラインで即日入金も可能。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "手数料の安さが魅力。書類が少なく手続きが簡単。宇都宮をはじめ栃木県全域から来店不要で利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利法人ゆえの低手数料。認定機関の安心感。北関東の中小企業にもおすすめ。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "超少額から利用可能。土日祝も振込対応。手数料一律で明瞭。宇都宮のフリーランスに最適。",
  },
];

const tochigiIndustries = [
  {
    industry: "製造業",
    description:
      "宇都宮周辺は機械・金属・食品など製造業の集積地です。大手メーカーからの受注では材料費・外注費の先行支出が発生し、入金サイトが長い取引先との資金ギャップをファクタリングで埋める需要があります。",
  },
  {
    industry: "建設業",
    description:
      "宇都宮では市街地整備やインフラ更新など建設需要が継続しています。工事完了から入金までの60〜120日の資金ギャップや、出来高払いに伴う立替負担をファクタリングで解消する事業者が多くいます。",
  },
  {
    industry: "運輸・物流",
    description:
      "東北自動車道と北関東自動車道が交わる宇都宮は物流の要衝です。運送業は燃料費・人件費の先行支出が大きく、運賃の入金待ち期間をファクタリングでつなぐ活用が広がっています。",
  },
  {
    industry: "農業・食品",
    description:
      "栃木県はいちごをはじめとする農業が盛んなエリアです。出荷代金の入金待ち期間や、加工・販売事業の仕入資金の確保にファクタリングを活用するケースがあります。",
  },
];

const faqs = [
  {
    question: "宇都宮でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "宇都宮で選ぶ際は、①オンラインで完結できるか②手数料が相場範囲内（2社間8〜18%、3社間1〜9%が目安）か③製造業・建設業など地域の主要業種に対応しているか④即日入金に対応しているか⑤実績と口コミが豊富かの5点を確認しましょう。東京の大手もオンラインで利用できるため、選択肢を広く持つことが重要です。",
  },
  {
    question: "栃木県内の他市（小山・栃木・足利・那須塩原など）からも利用できますか？",
    answer:
      "はい、オンライン完結型のファクタリング会社であれば、小山・栃木・足利・佐野・那須塩原など栃木県全域から利用可能です。書類提出もオンラインで完結するため、地理的な制約は一切ありません。即日入金にも対応しています。",
  },
  {
    question: "宇都宮のファクタリング手数料の相場は？",
    answer:
      "手数料は会社ごとに異なりますが、一般的な目安は2社間で8〜18%、3社間で1〜9%程度です。オンライン対応の全国展開型会社を利用することで、宇都宮でも地域差なく競争力のある手数料で利用できます。実際の料率は売掛先の信用力や契約内容で変動するため、複数社の見積もりを必ず比較しましょう。",
  },
  {
    question: "宇都宮で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングでは最短2時間、QuQuMoでも最短2時間での入金実績があります。オンライン完結型のサービスを利用すれば、宇都宮にいながら即日入金が実現できます。午前中の申し込みがポイントです。",
  },
  {
    question: "製造業でファクタリングを利用する際の注意点は？",
    answer:
      "製造業の場合、納品・検収が完了した売掛金が対象になるのが基本です。注意点は①検収前の請求書は対象外になる場合がある②売掛先（発注元メーカー）の信用力が審査に大きく影響する③継続取引の請求書は審査で有利になりやすい④手形取引が残る場合は電子記録債権など他の手段との比較も有効という点です。製造業の取引慣行に理解のある会社を選びましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ファクタリング 宇都宮のおすすめ業者5選｜栃木・北関東対応",
  description: "宇都宮・栃木エリアのファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/utsunomiya/" },
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
    { "@type": "ListItem", position: 3, name: "宇都宮のファクタリング会社", item: "https://hyogo-shihoushoshi.jp/articles/utsunomiya/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function UtsunomiyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "宇都宮のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 宇都宮のおすすめ業者5選
            <br className="hidden md:block" />
            栃木・北関東対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            宇都宮・栃木エリアで利用できるファクタリング会社を厳選紹介。オンライン完結型の大手を中心に、手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 宇都宮でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 宇都宮のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 栃木・北関東の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 宇都宮での業者選びのポイント</a></li>
            <li><a href="#tochigi-finance" className="hover:underline">5. 栃木の資金調達事情</a></li>
            <li><a href="#public-support" className="hover:underline">6. 宇都宮・栃木で使える公的支援機関・制度</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">宇都宮でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">宇都宮は北関東の内陸工業都市。東京へのアクセスも良好で、オンラインを使えばファクタリングの選択肢が豊富なエリアです。</p>
          <div className="space-y-4">
            {utsunomiyaFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">宇都宮のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">宇都宮・栃木エリアで利用できるファクタリング会社を厳選して5社紹介します。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">栃木・北関東の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">栃木・北関東エリアの主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {tochigiIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">宇都宮での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">宇都宮・栃木でファクタリング会社を選ぶ際に確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">東京の大手とオンラインで比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                宇都宮の地場ファクタリング会社は選択肢が限られます。東京の大手はオンラインで全国対応しているため、手数料やサービス内容を比較し、最も条件の良い会社を選びましょう。最低3社以上の見積もりを取ることが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">製造業の取引慣行に理解のある会社を選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                宇都宮周辺は製造業の比率が高いエリアです。メーカーとの取引では検収基準や支払サイトが独特な場合があるため、製造業の売掛金の扱いに慣れた会社を選ぶと審査がスムーズに進みます。
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

        {/* ── 栃木の資金調達事情 ─── */}
        <section id="tochigi-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">栃木の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            栃木県の中小企業にとって、銀行融資は審査・実行までに時間がかかるのが実情です。ファクタリングは銀行融資を補完する手段として、急な資金需要への対応に活用されています。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">足利銀行・栃木銀行など地銀の活用</strong>：地方銀行との取引がある場合、銀行経由の資金調達も検討価値があります。まずはメインバンクに相談してみましょう</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">栃木県の制度融資</strong>：県の制度融資は低利ですが審査・実行に時間がかかります。急ぎの支払いはファクタリングで対応し、中長期的には制度融資を活用するのが賢い方法です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">補助金との併用</strong>：各種補助金の入金待ち期間にファクタリングを活用することで、事業を止めることなく資金繰りを維持できます</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 宇都宮の経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">宇都宮の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            宇都宮市は栃木県の県庁所在地として北関東の経済をけん引する都市です。内陸型の工業集積とLRT開業に象徴される交通インフラの進化を背景に、多様な業種でのファクタリング活用が考えられます。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">内陸工業団地の製造業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                宇都宮周辺には内陸型の工業団地が立地し、機械・金属・食品などの製造業が集積しています。大手メーカーからの受注に伴う材料費・外注費の先行支出に対して、売掛金のファクタリングで運転資金を確保する活用が典型です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">LRT沿線・市街地の開発関連工事</h3>
              <p className="text-sm leading-relaxed text-text-light">
                LRT開業を機に沿線や市街地の整備・開発が進み、建設業の受注機会が広がっています。公共工事や再開発関連工事は入金サイトが長いため、ファクタリングで資金繰りを安定させることが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">高速道路網を活かした運輸・物流</h3>
              <p className="text-sm leading-relaxed text-text-light">
                東北自動車道と北関東自動車道が交わる宇都宮は、首都圏と東北・北関東各地を結ぶ物流拠点です。運送業は燃料費・人件費の先行負担が大きく、運賃入金までのつなぎ資金としてファクタリングが活用されています。
              </p>
            </div>
          </div>
        </section>

        {/* ── 宇都宮・栃木の公的支援機関・制度 ─── */}
        <section id="public-support" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">宇都宮・栃木で使える公的支援機関・制度</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、宇都宮・栃木の公的支援機関と制度を紹介します。相談はいずれも原則無料です。急ぎの資金ギャップはファクタリング、中長期の資金計画は公的支援という使い分けが基本です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">栃木県制度融資（中小企業向け制度融資）</h3>
              <p className="text-sm text-text-light">栃木県・金融機関・信用保証協会が協調して行う中小企業者向けの融資制度。低利で事業資金を借りられます。申込から実行まで時間がかかるため、急ぎの支払いはファクタリングでつなぎ、中長期の運転資金は制度融資でまかなうのが有効です。</p>
              <p className="mt-2 text-sm"><a href="https://www.pref.tochigi.lg.jp/f03/work/shoukougyou/yuushi/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">栃木県公式サイト：中小企業向け制度融資の御案内</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">栃木県信用保証協会</h3>
              <p className="text-sm text-text-light">中小企業が金融機関から融資を受ける際の保証を担う公的機関。保証付き融資は低コストですが審査に時間を要するため、入金までのつなぎにファクタリングを併用する使い分けが可能です。</p>
              <p className="mt-2 text-sm"><a href="https://www.cgc-tochigi.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">栃木県信用保証協会 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">栃木県よろず支援拠点</h3>
              <p className="text-sm text-text-light">国が全都道府県に設置した無料の経営相談所（宇都宮市ゆいの杜・とちぎ産業創造プラザ内）。資金繰り・売上拡大など経営全般を何度でも無料で相談できます。ファクタリング利用の前に資金繰り全体を専門家に整理してもらいたいときの相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://www.tochigi-yorozu.go.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">栃木県よろず支援拠点 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">宇都宮市中小企業者向け融資制度</h3>
              <p className="text-sm text-text-light">宇都宮市が金融機関・信用保証協会と連携して行う市独自の融資制度。設備資金・運転資金・創業資金など複数の資金メニューがあります。市内に事業所を持つ事業者が低利の資金を確保したい場合の選択肢です。</p>
              <p className="mt-2 text-sm"><a href="https://www.city.utsunomiya.lg.jp/sangyo/sangyo/chushokigyo/1006829.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">宇都宮市公式サイト：中小企業者向け融資制度</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫（栃木県内の支店窓口）</h3>
              <p className="text-sm text-text-light">政府系金融機関で、小規模事業者や創業期でも利用しやすい低利融資を扱います。融資実行までの期間を要するため、即日性が必要な場面はファクタリング、恒常的な資金は公庫融資と役割を分けましょう。県内の支店は公式の店舗案内から確認できます。</p>
              <p className="mt-2 text-sm"><a href="https://www.jfc.go.jp/n/branch/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">日本政策金融公庫 店舗案内</a></p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-light">※掲載している各機関・制度の情報とリンク先は、2026年7月に公式サイトで確認しています。最新の受付状況・条件は各公式サイトをご確認ください。</p>
        </section>

        {/* ── 利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">宇都宮でファクタリングを利用する手順</h2>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：宇都宮でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">東京の大手もオンラインで利用可能</strong>：宇都宮から東京へは新幹線で約1時間だが、オンライン完結型なら来店不要。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">製造業・建設業に理解のある会社を選ぶ</strong>：北関東は製造業の集積地。取引慣行に慣れた会社を選ぶと審査がスムーズ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">最低3社以上の見積もりを比較</strong>：手数料の総額で比較し、最も条件の良い会社を選ぶ。オンラインで簡単に見積もりが取れる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">地域の支援機関も併用</strong>：ファクタリングに加え、栃木県制度融資・信用保証協会・公庫なども活用して資金繰りを安定させる。</span></li>
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
            <Link href="/articles/saitama/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">さいたまのファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">埼玉エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/tokyo/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">東京のファクタリング会社10選</p>
              <p className="mt-1 text-sm text-text-light">即日対応の会社を比較</p>
            </Link>
            <Link href="/articles/manufacturing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">製造業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">受注拡大期の資金繰り対策</p>
            </Link>
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">おすすめ5選と活用事例</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">宇都宮・栃木のファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で宇都宮・栃木エリアのファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
