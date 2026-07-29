import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 水戸のおすすめ業者5選｜茨城県全域対応",
  description:
    "水戸市でおすすめのファクタリング会社5社を比較。県央の商業・建設業から農業・運送業まで使えるオンライン完結型サービスを、手数料・入金スピードで厳選。つくば・日立など茨城県全域から利用可能です。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/mito/",
  },
  openGraph: {
    title: "ファクタリング 水戸のおすすめ業者5選｜茨城県全域対応",
    description: "水戸・茨城県のファクタリング会社5社を手数料・スピードで比較。",
    url: "https://hyogo-shihoushoshi.jp/articles/mito/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const mitoFeatures = [
  {
    title: "茨城県央の商業・行政の中心都市",
    description:
      "水戸市は茨城県の県庁所在地で、県央エリアの商業・行政・金融の中心です。官公庁や県内企業の本社機能が集まる一方、ファクタリング専業会社の常設店舗は少なく、オンライン完結型サービスが実質的な主戦力となります。",
  },
  {
    title: "農業県・工業県の両面を持つ商圏",
    description:
      "茨城県は全国有数の農業県であると同時に、県北の日立地区や鹿島臨海部に製造業が集積する工業県でもあります。水戸の事業者は農産物の出荷代金からメーカー向けの売掛金まで、多様な債権の資金化ニーズを持っています。",
  },
  {
    title: "東京圏との近さとオンラインの相性",
    description:
      "水戸駅から東京へは常磐線特急で約80分と首都圏に近く、東京の取引先を持つ事業者も多いエリアです。東京の大手ファクタリング会社はオンラインで水戸から利用でき、地場に店舗がなくても条件比較の幅を確保できます。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    area: "東京本社（オンライン対応）",
    features:
      "業界最大手級。累計買取額1,300億円超。2社間・3社間対応。最短2時間入金。法人・個人事業主対応。関東圏の取引実績が豊富。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "大手の安心感に加え、高額債権にも上限なく対応。水戸からオンラインで申し込め、東京の取引先への売掛金もスムーズに資金化できます。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "通過率の高さで、他社で断られた案件の相談先にもなります。水戸の中小企業が赤字決算・税金滞納を抱えていても柔軟に検討してもらえます。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "低めの手数料水準と書類の少なさが特長。面談不要なので、水戸から一度も外出せずに資金化まで完了します。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利運営による低手数料と、国の認定支援機関という信頼性。関東圏の中小企業支援の実績があり、茨城の事業者も利用しやすい窓口です。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "手数料一律で分かりやすく、土日祝も振込対応。水戸の個人事業主や一人親方が少額を急いで用意したい場面に向きます。",
  },
];

const ibarakiIndustries = [
  {
    industry: "建設業",
    description:
      "水戸市周辺では公共工事や宅地開発、道路インフラの維持工事が継続的にあります。工事完了から入金までのサイトが長く、外注費・資材費の先行支払いとのギャップをファクタリングで埋めるニーズが高い業種です。",
  },
  {
    industry: "農業・食品関連",
    description:
      "茨城県は農業産出額で全国上位に位置する農業県です。市場や食品メーカーへの出荷代金は入金までに期間があるため、収穫・出荷が集中する時期の運転資金を売掛債権の資金化で確保するケースがあります。",
  },
  {
    industry: "製造業",
    description:
      "県内には日立地区や鹿島臨海工業地帯など製造業の集積地があり、水戸周辺にも部品加工や関連サービスの企業が立地します。メーカー取引特有の長い支払サイトへの対策としてファクタリングが活用されます。",
  },
  {
    industry: "運送業",
    description:
      "茨城県は高速道路網と港湾を抱え、首都圏向け物流の拠点性が高いエリアです。運送業は燃料費や人件費が先行し、運賃の入金が翌月以降になりがちなため、請求書の早期資金化と相性の良い業種です。",
  },
];

const faqs = [
  { question: "水戸で即日入金は可能ですか？", answer: "オンライン完結型の会社であれば来店不要で、最短即日入金に対応するサービスがあります（対応可否・条件は本ページの比較表と各社公式サイトをご確認ください）。午前中の申込みと、請求書・入出金明細など書類の事前準備が当日入金の実務上の鍵になります。" },
  {
    question: "水戸でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "水戸で選ぶ際は、①オンライン完結に対応しているか②手数料が相場範囲内（2社間8〜18%、3社間1〜9%）か③建設・農業・運送など自社業種の債権に対応できるか④入金スピードが希望に合うか⑤運営会社の実在性と実績を確認できるかの5点が重要です。市内の店舗有無にこだわらず、全国対応のオンライン型を含めて比較しましょう。",
  },
  {
    question: "つくば市や日立市など茨城県内の他市からも利用できますか？",
    answer:
      "はい、可能です。オンライン完結型のファクタリング会社であれば、つくば市・日立市・土浦市・古河市など茨城県内全域から利用できます。申し込みから書類提出・契約・入金まですべて非対面で完結するため、水戸まで出向く必要もありません。",
  },
  {
    question: "水戸のファクタリング手数料の相場は？",
    answer:
      "水戸でも手数料の目安は全国と同水準で、2社間で8%〜18%、3社間で1%〜9%程度です。全国展開のオンライン型を利用すれば地域による割増はありません。同じ売掛金でも会社によって提示条件が変わるため、複数社の見積もりを取って総額で比較することが大切です。",
  },
  {
    question: "水戸で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングとQuQuMoは最短2時間、ラボルは最短60分、アクセルファクターも最短即日の入金に対応しています。即日を狙うなら、午前中に申し込みを済ませ、請求書・通帳コピーなどの書類を事前に揃えておきましょう。",
  },
  {
    question: "運送業の売掛金でも買い取ってもらえますか？",
    answer:
      "はい、運送業は請求書ベースの売掛金が明確なため、ファクタリングと相性の良い業種です。荷主や元請運送会社への運賃請求書があれば買取対象になり得ます。燃料費高騰などで資金繰りが厳しい場合も、借入ではないため信用情報に影響せずに資金化できます。個人の軽貨物ドライバーは個人事業主対応の会社を選びましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ファクタリング 水戸のおすすめ業者5選｜茨城県全域対応",
  description: "水戸・茨城県のファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/mito/" },
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
    { "@type": "ListItem", position: 3, name: "水戸のファクタリング会社", item: "https://hyogo-shihoushoshi.jp/articles/mito/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function MitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "水戸のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 水戸のおすすめ業者5選
            <br className="hidden md:block" />
            茨城県全域対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            水戸・茨城県で利用できるファクタリング会社を厳選紹介。建設・農業・運送など県内の主要業種で使えるオンライン完結型を中心に、手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 水戸でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 水戸のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 茨城の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 水戸での業者選びのポイント</a></li>
            <li><a href="#ibaraki-finance" className="hover:underline">5. 茨城の資金調達事情</a></li>
            <li><a href="#public-support" className="hover:underline">6. 水戸・茨城で使える公的支援機関・制度</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">水戸でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">水戸市は茨城県の県庁所在地。農業と工業の両面を持つ県の中心都市として、幅広い業種で資金化ニーズがあります。</p>
          <div className="space-y-4">
            {mitoFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">水戸のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">水戸・茨城県から利用できるファクタリング会社を厳選して5社紹介します。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">茨城の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">水戸・茨城県の主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {ibarakiIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">水戸での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">水戸・茨城県でファクタリング会社を選ぶ際に確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">全国対応のオンライン型で比較の土俵を広げる</h3>
              <p className="text-sm leading-relaxed text-text-light">
                水戸市内に常設店舗を持つ専業会社は限られるため、店舗の有無で選択肢を狭めないことが第一です。オンライン完結型なら東京の大手も同じ条件で比較でき、最低3社以上の相見積もりが現実的に取れます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">債権の種類に合う会社を選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                建設業の出来高請求、農産物の出荷代金、運送業の運賃請求など、債権の性質は業種で異なります。自社の業種の取り扱い実績がある会社を選ぶと、審査の説明がスムーズで条件も出やすくなります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">スピード要件から逆算する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                支払期日まで数日しかない場合は、最短即日〜2時間の入金実績がある会社を優先しましょう。必要書類が請求書と通帳のみの会社は準備時間も短縮できます。余裕がある場合は3社間方式も含めて手数料の低さで選ぶ手もあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">悪徳業者への注意</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングを名乗る違法な貸金業者が全国で問題になっています。分割返済を求める、契約書の控えを渡さない、手数料の説明が曖昧といった業者は避け、所在地・運営会社が確認できるサービスだけを利用しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── 茨城の資金調達事情 ─── */}
        <section id="ibaraki-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">茨城の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            茨城県の中小企業の資金調達は、地方銀行・信用金庫からの融資と公的な制度融資が中心です。ファクタリングは融資と競合するものではなく、入金待ちの期間を埋めるスピード重視の補完手段として位置づけましょう。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">常陽銀行など地域金融機関が調達の基盤</strong>：メインバンクとの融資取引は最も低コストな調達手段です。ファクタリングは負債にならないため、銀行融資の与信枠を温存したまま併用できます</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">制度融資・保証付き融資は計画資金に</strong>：県・市の制度融資は低利ですが実行まで時間がかかります。設備投資や恒常的な運転資金は制度融資、突発的な支払いはファクタリングと役割分担しましょう</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">補助金・交付金の入金待ち対策</strong>：補助金は精算払いが基本で、入金まで数ヶ月空くことがあります。その間の資金繰りに売掛金の早期資金化を組み合わせる方法があります</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 水戸の経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">水戸の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            水戸市は人口約27万人、県央・県北の商圏を束ねる中核都市です。商業・サービス業の集積に加え、周辺の農業地帯や県内工業地域との取引があり、活用シーンは多岐にわたります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">公共工事・インフラ工事の入金待ち</h3>
              <p className="text-sm leading-relaxed text-text-light">
                県庁所在地である水戸周辺では、道路・河川・公共施設の工事が継続的に発注されます。完成・検収後の工事代金債権は支払いまで期間があるため、職人や外注先への支払い原資をファクタリングで先に確保する使い方が典型的です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">農産物・食品の出荷代金の資金化</h3>
              <p className="text-sm leading-relaxed text-text-light">
                県内の生産者や食品加工業者は、市場・スーパー・食品メーカーへの納品後、入金までのタイムラグを抱えます。出荷が集中する時期に運転資金が不足しやすく、売掛債権の早期資金化で資金の波をならすことができます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">首都圏向け物流・運送の運転資金</h3>
              <p className="text-sm leading-relaxed text-text-light">
                茨城は首都圏向け物流の要衝で、運送事業者は燃料費・人件費・車両費を先に負担しながら運賃の入金を待つ構造です。運賃請求書を資金化すれば、繁忙期の増車や急な修繕費にも借入なしで対応できます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 水戸・茨城の公的支援機関・制度 ─── */}
        <section id="public-support" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">水戸・茨城で使える公的支援機関・制度</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、水戸・茨城の公的支援機関と制度を紹介します。相談はいずれも原則無料です。急ぎの資金ギャップはファクタリング、中長期の資金計画は公的支援という使い分けが基本です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">茨城県の制度融資（中小企業向け融資制度）</h3>
              <p className="text-sm text-text-light">茨城県が金融機関・信用保証協会と協調して行う中小企業者向けの融資制度。低利で運転資金・設備資金を借りられます。実行までに時間を要するため、急な支払いはファクタリングでつなぎ、恒常的な資金は制度融資でまかなう組み合わせが有効です。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">茨城県よろず支援拠点</h3>
              <p className="text-sm text-text-light">国が全都道府県に設置した無料の経営相談所。資金繰り・販路開拓・経営改善などを回数無制限・無料で相談できます。ファクタリングに頼る前に資金繰り全体を見直したいときの最初の相談先に適しています。</p>
              <p className="mt-2 text-sm"><a href="https://www.ibaraki-yorozu.go.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">茨城県よろず支援拠点 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">茨城県信用保証協会</h3>
              <p className="text-sm text-text-light">中小企業が金融機関から融資を受ける際の公的な保証機関。保証付き融資は低コストの調達手段ですが、審査には時間がかかります。融資実行までのつなぎ資金としてファクタリングを併用する使い分けが可能です。</p>
              <p className="mt-2 text-sm"><a href="https://www.icgc.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">茨城県信用保証協会 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">水戸商工会議所</h3>
              <p className="text-sm text-text-light">水戸市の地域総合経済団体。経営相談のほか、マル経融資（小規模事業者経営改善資金）のあっせんや各種補助金の情報提供を行っています。市内の小規模事業者が低利融資を検討する際の身近な窓口です。</p>
              <p className="mt-2 text-sm"><a href="https://mito.inetcci.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">水戸商工会議所 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫（水戸支店）</h3>
              <p className="text-sm text-text-light">政府系金融機関の県内窓口。創業期や小規模事業者向けの低利融資を扱います。融資は実行まで期間を要するため、即日性が必要な支払いはファクタリング、腰を据えた資金調達は公庫と役割を分けるのが賢い使い方です。</p>
              <p className="mt-2 text-sm"><a href="https://www.jfc.go.jp/n/branch/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">日本政策金融公庫 店舗案内</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">全国の公的支援窓口を探す</h3>
              <p className="text-sm text-text-light">県外の取引先エリアの窓口や、47都道府県のよろず支援拠点・信用保証協会の公式リンクは、当サイトの全国マップにまとめています。</p>
              <p className="mt-2 text-sm"><Link href="/articles/zenkoku-shikinguri-shien/" className="font-medium text-primary underline">47都道府県の公的資金繰り支援マップ</Link></p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-light">※掲載している各機関・制度の情報とリンク先は、2026年7月に公式サイトで確認しています。最新の受付状況・条件は各公式サイトをご確認ください。※茨城県よろず支援拠点の公式サイトは、一部環境からアクセス制限がかかる場合があります。</p>
        </section>

        {/* ── 利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">水戸でファクタリングを利用する手順</h2>
          <div className="space-y-3">
            {[
              { step: "複数社に見積もり依頼", description: "オンライン完結型を含め最低3社以上に見積もりを依頼。水戸から来店せずに申し込めます。" },
              { step: "必要書類の提出", description: "請求書・通帳コピー・本人確認書類などをアップロード。会社によっては2点のみで完了します。" },
              { step: "審査・見積もり比較", description: "提示された手数料・掛け目・入金日を比較。名目の料率でなく手取り額で判断しましょう。" },
              { step: "契約・入金", description: "電子契約を締結し、最短即日で指定口座に入金されます。" },
              { step: "売掛金回収後の送金", description: "売掛先から入金があり次第、ファクタリング会社へ送金して取引完了です。" },
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

        {/* ── 即日入金 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">水戸で即日入金を狙うなら</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            水戸からでも、オンライン完結型のファクタリングなら来店不要で申し込めます。本ページの比較表にある「最短即日」対応の会社を選び、<strong className="text-text-main">午前中の早い時間に申し込む・請求書と入出金明細を事前に揃えておく</strong>ことが、当日中の入金可否を分ける実務上のポイントです。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/articles/instant-factoring/" className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-section-bg">即日入金を狙う申込みのコツ</Link>
            <Link href="/articles/weekend-factoring/" className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-section-bg">土日・祝日対応の探し方</Link>
            <Link href="/diagnosis/" className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-section-bg">30秒無料診断で絞り込む</Link>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：水戸でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">オンライン完結型で選択肢を確保</strong>：水戸に店舗がなくても、全国対応の大手・専業会社を同じ土俵で比較できる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">業種の債権特性に合わせる</strong>：建設の出来高、農産物の出荷代金、運送の運賃など、自社の債権に慣れた会社を選ぶ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">相見積もりは3社以上</strong>：手数料は会社ごとに異なるため、手取り額の総額で比較する。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">公的支援との併用</strong>：よろず支援拠点・信用保証協会・公庫の低コスト調達と、スピードのファクタリングを使い分ける。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">ノンリコース契約を確認</strong>：償還請求権なしの契約か、契約書で必ず確認する。</span></li>
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
            <Link href="/articles/chiba/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">千葉のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">千葉県対応の業者を紹介</p>
            </Link>
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">おすすめ5選と活用事例</p>
            </Link>
            <Link href="/articles/transport/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">運送業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">運賃債権の早期資金化を解説</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">茨城県のファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で水戸・茨城県から使えるファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
