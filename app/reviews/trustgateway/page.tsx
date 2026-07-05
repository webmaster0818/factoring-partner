import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "トラストゲートウェイの口コミ・評判｜福岡本社・九州のファクタリングを検証",
  description:
    "株式会社トラストゲートウェイ（福岡本社）の評判を公式サイトの一次情報で検証。手数料1.5%〜9.5%（トップページ表記）、10万円〜5,000万円買取、オンライン完結、九州・関西中心の対応を調査しました。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/trustgateway/",
  },
  openGraph: {
    title:
      "トラストゲートウェイの口コミ・評判｜福岡本社・九州のファクタリングを検証",
    description:
      "株式会社トラストゲートウェイ（福岡本社）のファクタリングを公式サイトの一次情報で検証。手数料・入金スピードを調査。",
    url: "https://hyogo-shihoushoshi.jp/reviews/trustgateway/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "トラストゲートウェイ（ファクタリング／売掛金買取）" },
  {
    label: "手数料",
    value:
      "買取手数料1.5%〜9.5%（トップページ表記・※申込審査により上限手数料を超える場合あり）。売掛金買取サービス紹介ページでは「2.0%〜」の表記もあり（いずれも公式サイトにて2026年7月確認）",
  },
  {
    label: "入金スピード",
    value:
      "最短即日振込。振込時間の直近30日平均5時間2分（公式サイト表示・2026年7月確認時点）",
  },
  {
    label: "買取可能額",
    value:
      "売掛先1社に対して10万円〜5,000万円（※審査により上限1億円まで対応可能・公式サイトにて2026年7月確認）",
  },
  {
    label: "対象",
    value:
      "売掛金を持つ法人・個人事業主（新設法人も利用可能と公式表記）。医療系法人向けの診療報酬債権買取もあり",
  },
  {
    label: "契約方式",
    value: "2社間・3社間の両取引に対応（公式サイトにて2026年7月確認）",
  },
  {
    label: "オンライン対応",
    value:
      "◎（非対面・オンライン完結。外部のクラウド契約専門サービスを利用し、スマホのみで完結と公式表記）",
  },
  {
    label: "営業時間",
    value: "平日 9:00〜18:00（土・日・祝・当社休業日を除く）",
  },
  {
    label: "その他費用",
    value:
      "手数料ページでは「買取手数料以外の費用は一切頂いていない」、売掛金買取ページでは「振込手数料・事務手数料/登記費用/印紙代/交通費など実費負担」と公式サイト内で記載に差異あり（2026年7月確認）",
  },
  {
    label: "運営会社",
    value: "株式会社トラストゲートウェイ（設立：平成29年2月、資本金8,000万円）",
  },
  {
    label: "所在地",
    value: "福岡県福岡市中央区大名2丁目2番42号 ケイワン大名402号",
  },
];

const merits = [
  {
    title: "金額帯別の平均手数料を表形式で公開する透明性",
    description:
      "トラストゲートウェイの手数料ページでは、買取金額100万円〜3,000万円の金額帯別に平均的な買取手数料（例：100万円で8〜9.5%、3,000万円で1.5〜4%）が表形式で公開されています（2026年7月確認）。「敢えて現実的な手数料を公開している」と公式に説明しており、下限だけを大きく見せる会社が多い中で、実際に近い水準を事前にイメージできるのは大きな利点です。",
  },
  {
    title: "10万円からの少額対応と審査による上限1億円までの広いレンジ",
    description:
      "買取可能額は売掛先1社に対して10万円〜5,000万円で、審査により上限1億円まで対応可能と公式に明記されています（2026年7月確認）。10万円からの少額に対応するファクタリング会社は限られるため、個人事業主の少額債権から法人の大口債権まで一社で相談できるレンジの広さが特徴です。",
  },
  {
    title: "非対面・クラウド契約でスマホのみで完結",
    description:
      "公式サイトでは「当社のファクタリングは非対面・オンライン完結」「クラウド契約だから、スマホのみで完結」と案内されています（2026年7月確認）。外部のクラウド契約専門サービスを利用した契約で、福岡本社への来店は不要です。申し込みもスマホで撮影した請求書写真を添付するだけで完了すると案内されています。",
  },
  {
    title: "福岡本社で九州・関西の買取実績を多数公開",
    description:
      "トラストゲートウェイは福岡市中央区大名に本社を置き、公式ブログでは福岡・佐賀・長崎・熊本・大分・宮崎・鹿児島など九州各県のほか、大阪・兵庫・京都など関西、広島・岡山・山口など中国地方の買取実績記事を多数公開しています（2026年7月確認）。関西・大阪エリアに特化した公式サイトも別途運営しており、西日本の事業者が地域の事情を相談しやすい体制です。",
  },
];

const demerits = [
  {
    title: "公式サイト内で手数料・費用の表記に差異がある",
    description:
      "トップページ・手数料ページでは「買取手数料1.5%〜9.5%」「買取手数料以外の費用は一切頂いていない」とある一方、売掛金買取サービスページでは「買取手数料2.0%〜」「振込手数料・事務手数料/登記費用/印紙代/交通費など実費負担」と、公式サイト内で記載に差異があります（2026年7月確認）。契約前に見積もりで、手数料率と手数料以外の費用の有無を必ず書面で確認してください。",
  },
  {
    title: "審査により上限手数料（9.5%）を超える場合がある",
    description:
      "トップページの「1.5%〜9.5%」には「※申し込み審査により上限手数料を超える場合が御座います」との注記があります（2026年7月確認）。売掛先の信用力や金額によっては提示条件が想定より高くなる可能性があるため、他社の見積もりと比較したうえで判断することをおすすめします。",
  },
  {
    title: "第三者の口コミがまだ少なく、全国大手ほどの実績開示はない",
    description:
      "公式サイトには審査通過率・平均振込時間や利用事例が掲載されていますが、これらは公式発信の情報です。大手口コミサイトでの中立的な第三者の投稿はまだ少なく、累計買取額などの実績値も確認できません。判断材料を増やすには、見積もり取得と複数社比較が有効です。",
  },
];

const steps = [
  {
    step: "1",
    title: "お問い合わせ",
    description:
      "電話（0120-951-212・平日9:00〜18:00）またはWebフォームから問い合わせ。希望金額や期日、売掛債権額・取引先の概要を確認してもらいます。",
  },
  {
    step: "2",
    title: "正式申込み（スマホで完結）",
    description:
      "送られてくる正式申込みフォームに入力し、スマホで撮影した請求書写真を添付して申し込みます（必要に応じて追加書類あり・公式表記）。",
  },
  {
    step: "3",
    title: "調査・審査",
    description:
      "申込者の経営状況と売掛先について調査・審査が行われます。審査は売掛金の価値（入金の信頼性）が基準で、赤字や税金・社会保険料の未払いは直接影響しないと公式に説明されています。",
  },
  {
    step: "4",
    title: "クラウド契約・入金",
    description:
      "外部のクラウド契約専門サービスにより非対面で契約を締結。手数料を差し引いた買取金額が指定口座に振り込まれます（最短即日・公式表記）。",
  },
];

const faqs = [
  {
    question: "トラストゲートウェイはどんな会社ですか？",
    answer:
      "株式会社トラストゲートウェイは、福岡県福岡市中央区大名2丁目2番42号ケイワン大名402号に本社を置くファクタリング会社です。公式サイトの会社概要によると、設立は平成29年2月、資本金8,000万円で、事業内容はファクタリング事業・経営コンサルティング事業などです（2026年7月確認）。売掛金買取のほか、医療系法人向けの診療報酬債権買取、財務改善プログラムも提供しています。",
  },
  {
    question: "トラストゲートウェイの手数料はいくらですか？",
    answer:
      "公式サイトのトップページでは買取手数料1.5%〜9.5%（※申し込み審査により上限手数料を超える場合あり）と表記されています（2026年7月確認）。手数料ページには金額帯別の平均手数料表（例：買取金額100万円で8〜9.5%、3,000万円で1.5〜4%）も公開されています。なお、売掛金買取サービスページでは「2.0%〜」「事務手数料・登記費用等は実費負担」との記載もあり、公式サイト内で表記に差異があるため、実際の条件は必ず見積もりで確認してください。",
  },
  {
    question: "トラストゲートウェイは福岡以外・九州以外でも利用できますか？",
    answer:
      "利用できると考えられます。トラストゲートウェイは非対面・オンライン完結（クラウド契約）に対応しており、公式サイトの調達可能額診断フォームも全国の都道府県を選択できる仕様です（2026年7月確認）。公式ブログでは九州各県に加え、関西（大阪・兵庫・京都など）や中国地方（広島・岡山・山口）、愛知県の買取実績も公開されており、関西・大阪エリアに特化した公式サイトも運営されています。",
  },
  {
    question: "トラストゲートウェイは個人事業主でも利用できますか？",
    answer:
      "はい。公式サイトの売掛金買取サービスページに、対象事業者として「売掛金をお持ちの法人様」「売掛金をお持ちの個人事業主様」と明記されています（2026年7月確認）。個人事業主利用可能・新設法人利用可能との記載もあります。買取可能額は売掛先1社に対して10万円からのため、少額の売掛金でも相談できます。",
  },
  {
    question: "トラストゲートウェイの審査通過率や入金までの時間はどのくらいですか？",
    answer:
      "公式サイトのトップページには、直近30日平均の審査通過率93.8%、振込時間5時間2分という数値が表示されていました（2026年7月確認時点の公式サイト表示値）。最短即日振込に対応しています。ただしこれらは公式発信の変動値であり、個別の案件で保証されるものではありません。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "トラストゲートウェイの口コミ・評判｜福岡本社・九州のファクタリングを検証",
  description:
    "株式会社トラストゲートウェイ（福岡本社）のファクタリングを公式サイトの一次情報で検証。手数料・入金スピードを調査。",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  author: {
    "@type": "Person",
    name: "ファクタリングパートナー 編集部",
    url: "https://hyogo-shihoushoshi.jp/about/",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://hyogo-shihoushoshi.jp",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://hyogo-shihoushoshi.jp/reviews/trustgateway/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://hyogo-shihoushoshi.jp/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "業者レビュー",
      item: "https://hyogo-shihoushoshi.jp/reviews/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "トラストゲートウェイ",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function TrustgatewayReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "業者レビュー", href: "/reviews/" },
          { label: "トラストゲートウェイ" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            トラストゲートウェイの口コミ・評判
            <br className="hidden md:block" />
            福岡本社・九州のファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            株式会社トラストゲートウェイ（福岡本社）のファクタリングを、公式サイトの一次情報にもとづいて検証。手数料・入金スピード・買取可能額・対応エリアを調査しました（2026年7月調査）。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            トラストゲートウェイは、福岡に本社を置き九州・関西の買取実績を多数公開している、地域密着志向の法人・個人事業主に向いたファクタリング会社です。買取可能額は10万円〜5,000万円（審査により上限1億円）、手数料はトップページ表記で1.5%〜9.5%、非対面・クラウド契約でスマホのみで完結します（いずれも公式サイトにて2026年7月確認）。一方、公式サイト内で手数料・諸費用の表記に差異があるため事前の見積もり確認が必須で、全国大手の実績開示や第三者の口コミの多さを重視する方には
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            、オンラインで手数料を抑えたい方には
            <Link href="/reviews/ququmo/" className="text-primary underline hover:no-underline">QuQuMo</Link>
            との比較をおすすめします。
          </p>
          <p className="mt-3 text-sm font-semibold text-primary">
            <a href="#recommended" className="hover:underline">向き・不向きの詳細</a>
            <span className="mx-2 text-text-light">／</span>
            <a href="/ranking/" className="hover:underline">他社と条件で比較</a>
            <span className="mx-2 text-text-light">／</span>
            <a href="/diagnosis/" className="hover:underline">30秒無料診断</a>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. トラストゲートウェイの基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. トラストゲートウェイの会社概要と特徴</a></li>
            <li><a href="#reviews" className="hover:underline">3. 口コミ・評判の調査結果</a></li>
            <li><a href="#merits" className="hover:underline">4. トラストゲートウェイのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">5. トラストゲートウェイのデメリット・注意点3つ</a></li>
            <li><a href="#flow" className="hover:underline">6. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">7. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#summary" className="hover:underline">8. 総合評価</a></li>
            <li><a href="#faq" className="hover:underline">9. よくある質問</a></li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれる場合があります。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点（2026年7月）のものであり、手数料・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トラストゲートウェイの基本情報
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {basicInfo.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-section-bg" : "bg-white"}>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-40">
                      {item.label}
                    </th>
                    <td className="px-4 py-3 text-text-light">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-text-light">
            出典：株式会社トラストゲートウェイ公式サイト（
            <a href="https://trustgateway.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">trustgateway.co.jp</a>
            ）のトップページ・会社概要・手数料・売掛金買取サービス各ページ（2026年7月確認）。
          </p>
        </section>

        {/* ── 会社概要・特徴 ─── */}
        <section id="about" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トラストゲートウェイの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            株式会社トラストゲートウェイは、福岡県福岡市中央区大名に本社を置くファクタリング会社です。公式サイトの会社概要によると、設立は平成29年（2017年）2月、資本金8,000万円で、事業内容としてファクタリング事業・経営コンサルティング事業などを掲げています（2026年7月確認）。サービスは一般法人・個人事業主向けの売掛金買取に加え、医療系法人向けの診療報酬債権買取、財務改善プログラムを提供しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特徴は「ネット完結型」を掲げるオンライン対応と、地域の買取実績の公開量です。契約は外部のクラウド契約専門サービスを利用した非対面のクラウド契約で、スマホのみで完結します。公式ブログでは福岡をはじめ九州各県、関西、中国地方の買取実績記事が多数公開されており、関西・大阪エリアに特化した公式サイトも別途運営されています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            なお、ファクタリングは売掛債権の売買（債権譲渡）であり、貸金（融資）ではありません。トラストゲートウェイの公式サイトでも「融資とは異なり債権の売買行為となるため、保証人や担保は不要」「融資は返済の義務があるが、ファクタリングは売上の譲渡売買による資金化であり返済義務はない」と説明されています（2026年7月確認）。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">トラストゲートウェイの3つの強み（公式サイトの表記より）</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>10万円〜5,000万円（審査により上限1億円）の広い買取レンジ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>非対面・クラウド契約でスマホのみで完結、最短即日振込</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>福岡本社で九州・関西の買取実績を多数公開する地域密着体制</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 口コミ・評判の調査結果 ─── */}
        <section id="reviews" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            口コミ・評判の調査結果
          </h2>
          <div className="mb-6 rounded-lg border border-border bg-section-bg p-4 text-xs text-text-light leading-relaxed">
            ※当編集部は2026年7月時点で、トラストゲートウェイに関する第三者口コミサイト等の情報を調査しましたが、投稿数がまだ少なく、傾向を客観的にまとめられるだけの中立的な第三者の口コミは確認できませんでした。本ページでは架空の口コミを掲載しない方針のため、公式サイトで確認できる事実のみを紹介します。
          </div>
          <p className="mb-4 leading-relaxed text-text-light">
            トラストゲートウェイの公式サイトには、内装業（福岡県）・システム開発会社（東京都）・スタジオ経営（京都府）などの利用事例や、直近30日平均の審査通過率93.8%・振込時間5時間2分といった数値が掲載されています（2026年7月確認時点の公式サイト表示値）。ただし、これらは運営会社による公式発信の情報であり、中立的な第三者による評価とは性質が異なる点に留意してください。
          </p>
          <p className="leading-relaxed text-text-light">
            第三者の口コミが少ない段階でサービスを検討する場合は、①見積もりを必ず取得して手数料・諸費用・振込額を書面で確認する、②契約書で債権譲渡契約（ノンリコース）であることを確認する、③複数社と条件を比較する、という基本を守ることをおすすめします。比較先は
            <Link href="/ranking/" className="text-primary underline hover:no-underline">おすすめランキング</Link>
            を参考にしてください。
          </p>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トラストゲートウェイのメリット4つ
          </h2>
          <div className="space-y-6">
            {merits.map((merit, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  {merit.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{merit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── デメリット ─── */}
        <section id="demerits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トラストゲートウェイのデメリット・注意点3つ
          </h2>
          <div className="space-y-6">
            {demerits.map((demerit, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  {demerit.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{demerit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トラストゲートウェイの利用の流れ
          </h2>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-border bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-text-main">{s.title}</p>
                  <p className="mt-1 text-sm text-text-light">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            必要書類は、商業登記簿謄本・印鑑証明書・代表者の身分証明書・決算書コピー・取引履歴書類（通帳等）・成因資料（発注書・納品書・請求書等）などが公式に案内されています。「全て揃っていない場合でも柔軟な審査対応をする」との公式表記もあるため、不足がある場合も相談可能です（2026年7月確認）。
          </p>
        </section>

        {/* ── おすすめ / 向いていない人 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            こんな人におすすめ / 向いていない人
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <p className="mb-4 font-bold text-secondary">おすすめの人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>九州・関西など西日本で地域の実績がある会社に相談したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>10万円程度の少額から相談したい法人・個人事業主の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>スマホだけで非対面・オンライン完結させたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>金額帯別の現実的な手数料水準を見てから検討したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>新設法人や、診療報酬債権の買取を相談したい医療系法人の方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料・諸費用を事前に確定させたい方（公式サイト内で表記差異あり・要見積もり）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>全国大手の実績開示や第三者の口コミの多さを重視する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>5,000万円を大きく超える大口案件を確実に進めたい方（上限1億円は審査次第）</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トラストゲートウェイの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            トラストゲートウェイは、福岡本社の地域密着体制とネット完結型のオンライン対応を両立したファクタリング会社です。設立平成29年・資本金8,000万円という会社情報が公開されており、10万円からの少額対応、2社間・3社間両対応、金額帯別の平均手数料の公開など、検討前に確認できる情報が比較的多いのが特徴です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、手数料と諸費用について公式サイト内のページ間で表記に差異がある点は、本レビューで確認した最大の注意点です。トップページの「1.5%〜9.5%」表記には審査により上限を超える場合がある旨の注記もあるため、実際の手数料率と手数料以外の費用（登記費用・印紙代等）の有無は、契約前に必ず見積もり書面で確認してください。
          </p>
          <p className="leading-relaxed text-text-light">
            九州・関西で地域の実績を重視する方には有力な選択肢です。比較対象としては、全国対応で買取実績の公開が手厚い
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            、オンライン完結で手数料1%〜の
            <Link href="/reviews/ququmo/" className="text-primary underline hover:no-underline">QuQuMo</Link>
            などが候補になります。条件に合う会社を探すには
            <Link href="/diagnosis/" className="text-primary underline hover:no-underline">30秒無料診断</Link>
            もご利用ください。
          </p>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-text-main hover:bg-section-bg">
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">Q</span>
                    {faq.question}
                  </span>
                  <span className="ml-4 transition-transform group-open:rotate-180">&#9660;</span>
                </summary>
                <div className="border-t border-border px-6 py-4">
                  <p className="text-sm leading-relaxed text-text-light">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            トラストゲートウェイに無料相談
          </h2>
          <p className="mb-6 text-sm text-white/80">
            10万円〜対応・非対面のクラウド契約でスマホのみで完結（公式サイト表記）。
          </p>
          <a
            href="https://trustgateway.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            トラストゲートウェイ公式サイトで無料相談
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/betrading/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">買取実績の公開が手厚い大手を検証</p>
            </Link>
            <Link
              href="/reviews/ququmo/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">QuQuMoの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料1%〜のオンライン完結型を検証</p>
            </Link>
            <Link
              href="/articles/fukuoka/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">福岡のファクタリング活用ガイド</p>
              <p className="mt-1 text-sm text-text-light">福岡の事業者向け資金繰り情報</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">49社以上を徹底比較</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
