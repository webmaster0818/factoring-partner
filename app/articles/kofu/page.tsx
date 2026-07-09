import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 甲府のおすすめ業者5選｜山梨県全域対応",
  description:
    "甲府市でおすすめのファクタリング会社5社を比較。宝飾・機械電子・果樹やワイン関連の事業者が使えるオンライン完結型サービスを、手数料・入金スピードで厳選。山梨県全域から来店不要で利用できます。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/kofu/",
  },
  openGraph: {
    title: "ファクタリング 甲府のおすすめ業者5選｜山梨県全域対応",
    description: "甲府・山梨県のファクタリング会社5社を手数料・スピードで比較。",
    url: "https://hyogo-shihoushoshi.jp/articles/kofu/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const kofuFeatures = [
  {
    title: "宝飾産業が息づくものづくりの県都",
    description:
      "甲府市は山梨県の県庁所在地であり、研磨・貴金属加工の伝統を受け継ぐ国内有数のジュエリー産地として知られています。小規模な工房・製造卸が多い産業構造のため、少額から使える個人事業主対応のファクタリングと親和性が高いエリアです。",
  },
  {
    title: "機械電子産業と果樹・ワインの多彩な産業",
    description:
      "山梨県には産業用機械や電子デバイス関連の製造業が立地し、甲府盆地はぶどう・ももの生産やワイナリーの集積地でもあります。業種ごとに売掛金・出荷代金の入金サイクルが異なり、それぞれに資金化のニーズがあります。",
  },
  {
    title: "首都圏に近くオンライン完結が使いやすい",
    description:
      "甲府から新宿へは中央本線の特急で約1時間半ですが、ファクタリングのために東京へ出向く必要はありません。全国対応のオンライン完結型なら、山梨県内のどこからでも東京の大手と同じ条件で申し込みから入金まで完了します。",
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
      "豊富な買取実績に基づく対応力が強み。甲府からオンラインで利用でき、金額の大きい売掛金も上限なしで相談可能です。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "30万円からの少額に対応し審査通過率も高水準。甲府の小規模事業者が初めて使う場合でも相談しやすい会社です。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "書類が2点だけで面談も不要。工房や畑を離れられない甲府の事業者でも、手を止めずに資金化まで進められます。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利型の運営で手数料を抑えやすく、国の認定支援機関という信頼性も備えます。慎重に会社を選びたい方に向きます。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "1万円からの超少額・365日振込対応。甲府の職人・クリエイター・個人事業主の急な仕入れ資金に使いやすい設計です。",
  },
];

const yamanashiIndustries = [
  {
    industry: "宝飾・貴金属加工業",
    description:
      "甲府のジュエリー産業は企画・加工・卸が分業で成り立ち、小規模事業者が多いのが特徴です。展示会後の受注や百貨店・小売店への納品は入金までの期間が空きやすく、貴金属材料の仕入れ資金を売掛金の資金化でまかなう使い方があります。",
  },
  {
    industry: "製造業（機械・電子）",
    description:
      "山梨県には産業用機械や電子部品関連の工場が立地し、協力企業への発注も活発です。メーカー取引は支払サイトが長期化しやすいため、納品済み債権をファクタリングで早期資金化し、材料費の先行負担を軽くする方法が有効です。",
  },
  {
    industry: "農業（果樹）・ワイン関連",
    description:
      "甲府盆地はぶどう・ももの産地であり、ワイナリーや果実加工の事業者も多いエリアです。収穫・仕込みの時期に支出が集中する一方、出荷代金や卸売代金の入金は後になるため、季節資金の確保に債権の資金化が役立ちます。",
  },
  {
    industry: "建設業",
    description:
      "住宅・店舗の建築や公共インフラの維持工事など、甲府周辺でも建設需要は継続しています。工事完了から入金までのギャップで職人・外注先への支払いが先行するため、工事代金債権のファクタリングが定番の資金繰り手段です。",
  },
];

const faqs = [
  {
    question: "甲府でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "甲府で選ぶ際は、①オンライン完結に対応しているか②手数料が相場範囲内（2社間8〜18%、3社間1〜9%）か③個人事業主や少額債権に対応しているか④入金スピードが希望に合うか⑤運営会社の実態と実績を確認できるかの5点が基本です。小規模事業者が多い甲府では、少額対応の可否が特に重要な比較軸になります。",
  },
  {
    question: "富士吉田市や南アルプス市など山梨県内の他市からも利用できますか？",
    answer:
      "はい、利用できます。オンライン完結型のファクタリング会社なら、富士吉田市・南アルプス市・甲斐市・笛吹市など山梨県内全域から申し込めます。書類提出・契約・入金まで非対面で完結するため、甲府市内や東京の店舗へ行く必要はありません。",
  },
  {
    question: "甲府のファクタリング手数料の相場は？",
    answer:
      "甲府でも手数料の目安は全国水準と同じで、2社間で8%〜18%、3社間で1%〜9%程度です。全国展開のオンライン型なら地域差はありません。同じ請求書でも会社によって提示条件は変わるため、必ず複数社の見積もりを取り、振込手数料等も含めた手取り額で比較しましょう。",
  },
  {
    question: "甲府で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングとQuQuMoは最短2時間、ラボルは最短60分での入金に対応しており、アクセルファクターも最短即日です。甲府に店舗がなくてもオンラインで完結します。午前中に申し込み、請求書と通帳コピーを準備しておくことが当日入金のポイントです。",
  },
  {
    question: "宝飾業のような小規模事業者・個人事業主でも使えますか？",
    answer:
      "はい、使えます。ラボルは1万円から、アクセルファクターは30万円からの少額に対応し、いずれも個人事業主の利用が可能です。取引先（小売店・卸・メーカーなど）宛ての請求書があれば買取対象になり得ます。ただし個人（消費者）への販売代金は対象外のため、事業者間取引の債権であることが前提です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ファクタリング 甲府のおすすめ業者5選｜山梨県全域対応",
  description: "甲府・山梨県のファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/kofu/" },
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
    { "@type": "ListItem", position: 3, name: "甲府のファクタリング会社", item: "https://hyogo-shihoushoshi.jp/articles/kofu/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function KofuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "甲府のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 甲府のおすすめ業者5選
            <br className="hidden md:block" />
            山梨県全域対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            甲府・山梨県で利用できるファクタリング会社を厳選紹介。宝飾・機械電子・果樹やワイン関連まで、小規模事業者も使えるオンライン完結型を中心に手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 甲府でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 甲府のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 山梨の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 甲府での業者選びのポイント</a></li>
            <li><a href="#yamanashi-finance" className="hover:underline">5. 山梨の資金調達事情</a></li>
            <li><a href="#public-support" className="hover:underline">6. 甲府・山梨で使える公的支援機関・制度</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">甲府でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">甲府市は山梨県の県庁所在地。宝飾のまちとして知られる小規模事業者主体の産業構造が、ファクタリング選びにも影響します。</p>
          <div className="space-y-4">
            {kofuFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">甲府のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">甲府・山梨県から利用できるファクタリング会社を厳選して5社紹介します。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">山梨の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">甲府・山梨県の主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {yamanashiIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">甲府での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">甲府・山梨県でファクタリング会社を選ぶ際に確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">少額・個人事業主対応を最初に確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                甲府は工房・小規模製造・個人経営の事業者が多いエリアです。会社によっては法人限定や最低買取額100万円以上といった条件があるため、少額対応（1万円〜・30万円〜）と個人事業主対応を最初のふるいにすると効率的です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">オンライン完結型で相見積もりを取る</h3>
              <p className="text-sm leading-relaxed text-text-light">
                甲府市内に常設店舗を持つ専業会社はほとんどないため、オンライン完結型での比較が前提になります。最低3社以上から見積もりを取り、手数料率だけでなく掛け目・諸費用込みの手取り額で判断しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">売掛先との関係を踏まえて方式を選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                取引先に知られず使いたい場合は2社間方式が基本です。一方、百貨店や大手メーカーなど信用力の高い売掛先で長期取引があるなら、3社間方式の承諾を得て手数料を抑える選択肢もあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">悪徳業者への注意</h3>
              <p className="text-sm leading-relaxed text-text-light">
                小規模事業者は違法業者に狙われやすい層でもあります。ファクタリングを装った高金利貸付、契約書を交付しない業者、分割払いを持ちかける業者は違法の疑いが濃厚です。運営会社の所在地・実績が確認できるサービスのみ利用しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── 山梨の資金調達事情 ─── */}
        <section id="yamanashi-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">山梨の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            山梨県の中小企業・小規模事業者の資金調達は、地方銀行・信用金庫の融資と公的な制度融資が中心です。ファクタリングは借入に頼らず売掛金を前倒しで受け取る手段として、融資の審査を待てない場面を補完します。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">山梨中央銀行など地域金融機関が調達の柱</strong>：金利面では銀行・信金融資が最有利です。ファクタリングは債権譲渡のため負債が増えず、既存の借入枠や信用情報に影響しない点で融資と共存できます</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">制度融資・マル経融資は準備期間が必要</strong>：県・市の制度融資や商工会議所経由のマル経融資は低利ですが、申込から実行まで時間がかかります。支払期日が目前の資金はファクタリング、計画的な資金は公的融資に割り振りましょう</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">季節変動の大きい業種は資金の波をならす</strong>：果樹・ワイン・観光関連など季節性の強い業種では、繁忙期前の仕入れ・仕込み資金が不足しがちです。出荷後の売掛金を早期資金化して支出の山と入金の谷を埋める使い方が有効です</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 甲府の経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">甲府の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            甲府市は人口約19万人、甲府盆地の中央に位置する県内経済の中心地です。伝統の宝飾産業から機械電子、果樹・ワインまで多彩な産業が共存し、事業規模も個人工房から中堅メーカーまで幅があります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">ジュエリー製造卸の仕入れ資金</h3>
              <p className="text-sm leading-relaxed text-text-light">
                貴金属や宝石の仕入れは高額になりやすく、製作から納品・入金までの期間も長くなりがちです。展示会や催事で受注が増えたタイミングで、納品済みの売掛金を資金化して材料仕入れに充てる循環がつくれます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">機械・電子部品サプライヤーの支払サイト対策</h3>
              <p className="text-sm leading-relaxed text-text-light">
                県内の機械・電子関連の協力企業は、メーカーからの受注に対し材料費・加工費を先行負担します。月末締め翌々月払いといった長いサイトの債権を早期資金化すれば、次の受注への投資や賞与資金を確保できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">ワイナリー・果実加工の季節資金</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ぶどうの仕入れ・仕込みが集中する収穫期は支出が膨らむ一方、製品の販売代金は後から入ります。酒販店や飲食店への卸売債権を資金化して、醸造期の運転資金を借入なしで手当てする方法が考えられます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 甲府・山梨の公的支援機関・制度 ─── */}
        <section id="public-support" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">甲府・山梨で使える公的支援機関・制度</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、甲府・山梨の公的支援機関と制度を紹介します。相談はいずれも原則無料です。急ぎの資金ギャップはファクタリング、中長期の資金計画は公的支援という使い分けが基本です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">山梨県の制度融資（中小企業向け融資制度）</h3>
              <p className="text-sm text-text-light">山梨県が金融機関・信用保証協会と連携して行う中小企業者向けの融資制度。低利で事業資金を調達できます。申込から実行までの期間を考慮し、急ぎの支払いはファクタリング、中長期の運転資金・設備資金は制度融資と使い分けるのが有効です。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">山梨県よろず支援拠点</h3>
              <p className="text-sm text-text-light">国が全都道府県に設置した無料の経営相談所。資金繰り・販路開拓・経営改善などを回数の制限なく無料で相談できます。ファクタリングを使うべきか迷う段階で、資金繰り全体を専門家と整理するのに適した窓口です。</p>
              <p className="mt-2 text-sm"><a href="https://yamanashiyorozu.go.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">山梨県よろず支援拠点 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">山梨県信用保証協会</h3>
              <p className="text-sm text-text-light">中小企業が金融機関から融資を受ける際の保証を担う公的機関。保証付き融資は低コストですが、審査には一定の時間がかかります。融資が実行されるまでのつなぎとしてファクタリングを併用する使い分けが可能です。</p>
              <p className="mt-2 text-sm"><a href="https://cgc-yamanashi.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">山梨県信用保証協会 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">甲府商工会議所</h3>
              <p className="text-sm text-text-light">甲府市の地域総合経済団体。経営相談のほか、マル経融資（小規模事業者経営改善資金）のあっせんや補助金情報の提供を行っています。宝飾をはじめとした市内の小規模事業者にとって身近な公的融資の入口です。</p>
              <p className="mt-2 text-sm"><a href="https://kofucci.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">甲府商工会議所 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫（甲府支店）</h3>
              <p className="text-sm text-text-light">政府系金融機関の県内窓口。創業期や小規模事業者向けの低利融資を扱います。融資実行までの期間を要するため、今日明日の支払いはファクタリング、まとまった長期資金は公庫と役割を分けて活用しましょう。</p>
              <p className="mt-2 text-sm"><a href="https://www.jfc.go.jp/n/branch/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">日本政策金融公庫 店舗案内</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">全国の公的支援窓口を探す</h3>
              <p className="text-sm text-text-light">県外取引先の所在地の窓口を調べたいときは、47都道府県のよろず支援拠点・信用保証協会の公式リンクをまとめた当サイトの全国マップをご利用ください。</p>
              <p className="mt-2 text-sm"><Link href="/articles/zenkoku-shikinguri-shien/" className="font-medium text-primary underline">47都道府県の公的資金繰り支援マップ</Link></p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-light">※掲載している各機関・制度の情報とリンク先は、2026年7月に公式サイトで確認しています。最新の受付状況・条件は各公式サイトをご確認ください。</p>
        </section>

        {/* ── 利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">甲府でファクタリングを利用する手順</h2>
          <div className="space-y-3">
            {[
              { step: "複数社に見積もり依頼", description: "少額・個人事業主対応のオンライン型を中心に最低3社以上へ依頼。甲府から来店不要です。" },
              { step: "必要書類の提出", description: "請求書・通帳コピー・本人確認書類などをアップロード。2点のみで申し込める会社もあります。" },
              { step: "審査・見積もり比較", description: "手数料・掛け目・入金予定日を比較し、手取り額が最も多い会社を選びましょう。" },
              { step: "契約・入金", description: "電子契約でオンライン完結。最短即日で指定口座に入金されます。" },
              { step: "売掛金回収後の送金", description: "売掛先から入金があったら、ファクタリング会社に送金して取引完了です。" },
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：甲府でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">少額・個人事業主対応でふるいにかける</strong>：小規模事業者の多い甲府では、1万円〜・30万円〜対応の会社が使いやすい。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">オンライン完結型を前提に比較</strong>：市内店舗の有無にかかわらず、全国対応の会社と同条件で契約できる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">3社以上の相見積もり</strong>：手数料は会社ごとに異なるため、手取り額の総額で比較する。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">公的支援と組み合わせる</strong>：よろず支援拠点・信用保証協会・商工会議所・公庫の低利調達とスピードの資金化を使い分ける。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">ノンリコースを確認</strong>：償還請求権なしの契約であることを契約書で確認し、安全に利用する。</span></li>
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
            <Link href="/articles/tokyo/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">東京のファクタリング会社10選</p>
              <p className="mt-1 text-sm text-text-light">即日対応の会社を比較</p>
            </Link>
            <Link href="/articles/shizuoka/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">静岡のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">静岡県対応の業者を紹介</p>
            </Link>
            <Link href="/articles/for-sole-proprietor/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">個人事業主向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">少額対応の会社と選び方を解説</p>
            </Link>
            <Link href="/articles/agriculture/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">農業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">出荷代金の早期資金化を解説</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">山梨県のファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で甲府・山梨県から使えるファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
