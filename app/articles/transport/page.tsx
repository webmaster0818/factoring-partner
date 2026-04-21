import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "運送業向けファクタリングガイド｜燃料費・人件費の資金繰り改善",
  description:
    "運送業向けファクタリングを徹底解説。燃料費高騰・ドライバー不足・入金サイトの長さなど運送業特有の課題、おすすめ5社、活用事例、利用時の注意点を紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/transport/",
  },
  openGraph: {
    title: "運送業向けファクタリングガイド｜燃料費・人件費の資金繰り改善",
    description:
      "運送業の資金繰り課題とファクタリング活用法。おすすめ5社と事例を紹介。",
    url: "https://factoring-partner.pages.dev/articles/transport/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "燃料費の高騰と先払い",
    description:
      "軽油やガソリンの価格高騰が運送業の利益を圧迫しています。燃料費は走行するたびに発生し、多くの場合クレジットカードや月末締め翌月払いで精算されます。荷主からの運賃に燃料サーチャージが反映されるまでにタイムラグがあり、燃料費の上昇分をすぐに転嫁できないのが現状です。車両台数が多い事業者ほど燃料費の負担は重くなります。",
  },
  {
    title: "ドライバーの人件費・採用コスト",
    description:
      "2024年問題（時間外労働の上限規制）により、ドライバーの確保がさらに困難になっています。人手不足を解消するための賃上げや、新規ドライバーの採用費用、研修コストが経営を圧迫します。毎月固定で発生する人件費に対し、荷主からの入金は30〜60日後というタイムラグが資金繰りの悪化を招きます。",
  },
  {
    title: "入金サイトの長さ（30〜60日が一般的）",
    description:
      "運送業の入金サイトは30日〜60日が一般的です。大手荷主の場合は月末締め翌月末払い（60日）が標準的で、さらに長い場合もあります。配送完了から入金までの間に、燃料費・人件費・車両維持費などの固定費が次々と発生するため、資金繰りが厳しくなります。",
  },
  {
    title: "車両の維持費・リース料",
    description:
      "トラックの車検費用、整備費用、保険料、リース料などの固定費が毎月発生します。特にトラックの車検は乗用車よりも費用が高く（1台あたり15万〜30万円程度）、複数台を保有する場合は大きな出費になります。突発的な修理費用も資金繰りを圧迫する要因です。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "累計買取額1,300億円超の業界最大手級。運送業の取引実績も豊富。2社間・3社間に対応。最短2時間入金。オンライン完結・全国対応。",
    fee: "2%〜",
    speed: "最短2時間",
  },
  {
    name: "日本中小企業金融サポート機構",
    features: "一般社団法人が運営する非営利型。運送業を含む幅広い業種に対応。手数料が安い傾向。関東財務局長・関東経済産業局長認定の経営革新等支援機関。",
    fee: "1.5%〜",
    speed: "最短即日",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主のドライバーにも対応。オンライン完結型。",
    fee: "2%〜",
    speed: "最短即日",
  },
  {
    name: "QuQuMo（ククモ）",
    features: "完全オンライン完結型のファクタリングサービス。申し込みから入金まですべてWeb上で完結。必要書類は請求書と通帳の2点のみ。運送業の個人事業主にも人気。",
    fee: "1%〜",
    speed: "最短2時間",
  },
  {
    name: "PMG",
    features: "年間取引実績豊富な大手。運送業含む幅広い業種に対応。高額案件（数千万円単位）にも対応可能。リピーター割引制度あり。東京・大阪に拠点。",
    fee: "2%〜",
    speed: "最短即日",
  },
];

const useCases = [
  {
    title: "事例1：燃料費高騰で月末の資金が不足",
    problem:
      "中規模運送会社（トラック30台保有）。原油価格の高騰により月間燃料費が前年比120%に増加。荷主への運賃値上げ交渉は難航しており、月末の燃料カード支払い500万円が不足する見込み。",
    solution:
      "大手荷主への売掛金800万円を2社間ファクタリングで売却。手数料10%で720万円を2営業日で調達。荷主にはファクタリングの利用を通知せず。",
    result:
      "月末の燃料費支払いを問題なく完了。並行して荷主との運賃交渉を進め、翌月から燃料サーチャージの適用に成功。以降はファクタリングの必要性が低減。",
  },
  {
    title: "事例2：新規大口契約で車両増車が必要",
    problem:
      "新規荷主との大口輸送契約を獲得。契約開始までに中古トラック3台の購入（1,500万円）が必要だが、銀行融資は審査に1ヶ月かかると言われ、契約開始に間に合わない。",
    solution:
      "既存の荷主への売掛金2,000万円を3社間ファクタリングで売却。荷主が大手メーカーのため手数料5%で1,900万円を1週間で調達。荷主もファクタリングに理解を示した。",
    result:
      "予定通り中古トラック3台を購入し、新規契約を開始。新規契約による売上増で、ファクタリング手数料のコストを十分にカバー。銀行融資も後日成立し、次の設備投資に充当。",
  },
  {
    title: "事例3：個人事業主ドライバーの資金繰り改善",
    problem:
      "軽貨物ドライバー（個人事業主）。配送プラットフォームからの支払いが月末締め翌々月10日払いで、入金まで約70日。毎月のリース料・保険料・燃料費で常に資金繰りが苦しい状態。",
    solution:
      "毎月の売掛金50万円のうち40万円をオンライン型ファクタリングで売却。手数料8%で36.8万円を即日受け取り。必要書類は請求書と通帳コピーの2点のみ。",
    result:
      "月初に資金を確保できるようになり、燃料費やリース料の支払いに余裕が生まれた。精神的な負担も軽減し、配送件数を増やすことに集中できるように。",
  },
];

const faqs = [
  {
    question: "運送業でファクタリングを利用するメリットは何ですか？",
    answer:
      "最大のメリットは、入金サイト（30〜60日）を短縮して即日〜数日で資金化できることです。燃料費・人件費など毎月の固定費支払いに充てられます。また、銀行融資と異なり負債にならないため、車両のリース審査にも影響しません。荷主が大手企業であれば手数料も安くなります。",
  },
  {
    question: "個人事業主（軽貨物ドライバー）でも利用できますか？",
    answer:
      "はい、個人事業主のドライバーでも利用できるファクタリング会社は多くあります。アクセルファクター、QuQuMoなど少額（30万円〜）から対応している会社がおすすめです。必要書類は身分証明書・請求書・通帳コピーの3点で済む場合が多いです。",
  },
  {
    question: "荷主にファクタリングの利用が知られることはありますか？",
    answer:
      "2社間ファクタリングを選択すれば、荷主にファクタリングの利用は通知されません。荷主との取引関係に影響を与えずに資金調達が可能です。3社間ファクタリングの場合は荷主の承諾が必要ですが、手数料は安くなります。",
  },
  {
    question: "2024年問題とファクタリングの関係は？",
    answer:
      "2024年4月から施行された時間外労働の上限規制により、ドライバーの労働時間が制限され、1人当たりの輸送量が減少します。その結果、ドライバーの増員や賃上げが必要となり、人件費が増加します。ファクタリングを活用して入金サイトを短縮し、増加する人件費に対応するキャッシュフロー管理が重要になっています。",
  },
  {
    question: "運送業向けファクタリングの手数料相場はどのくらいですか？",
    answer:
      "運送業向けファクタリングの手数料は、2社間で8%〜20%、3社間で2%〜10%程度が相場です。荷主が大手企業や上場企業の場合は信用力が高いため、手数料が安くなります。継続利用によるリピート割引も活用しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "運送業向けファクタリングガイド｜燃料費・人件費の資金繰り改善",
  description:
    "運送業の資金繰り課題とファクタリング活用法。おすすめ5社と事例を紹介。",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  author: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://factoring-partner.pages.dev/articles/transport/",
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
      item: "https://factoring-partner.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "コラム",
      item: "https://factoring-partner.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "運送業向けファクタリング",
      item: "https://factoring-partner.pages.dev/articles/transport/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function TransportPage() {
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
          { label: "コラム", href: "/articles/" },
          { label: "運送業向けファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            業種特化ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            運送業向けファクタリングガイド
            <br className="hidden md:block" />
            燃料費・人件費の資金繰り改善
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            燃料費高騰・ドライバー不足・入金サイトの長さなど、運送業特有の資金繰り課題をファクタリングで解決する方法を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#challenges" className="hover:underline">
                1. 運送業の資金繰り課題
              </a>
            </li>
            <li>
              <a href="#why" className="hover:underline">
                2. 運送業にファクタリングが効果的な理由
              </a>
            </li>
            <li>
              <a href="#recommended" className="hover:underline">
                3. 運送業向けおすすめファクタリング5選
              </a>
            </li>
            <li>
              <a href="#cases" className="hover:underline">
                4. 活用事例3選
              </a>
            </li>
            <li>
              <a href="#caution" className="hover:underline">
                5. 利用時の注意点
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 運送業の資金繰り課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            運送業の資金繰り課題
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            運送業は燃料費・人件費・車両維持費など固定費の比率が高く、資金繰りが厳しくなりやすい業種です。特に近年は以下の課題が深刻化しています。
          </p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-accent/30 bg-orange-50 p-6"
              >
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ファクタリングが効果的な理由 ─── */}
        <section id="why" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            運送業にファクタリングが効果的な理由
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            運送業の資金繰り課題を解決するために、ファクタリングが特に有効な理由を解説します。
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                入金サイトを即日に短縮
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                30〜60日の入金サイトを最短即日に短縮可能。毎月の燃料費・人件費の支払いに間に合うように資金を確保できます。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                荷主の信用力で審査が通りやすい
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                審査では荷主（売掛先）の信用力が重視されます。荷主が大手メーカーや物流会社であれば、審査通過率が高く手数料も安くなります。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                車両リースの審査に影響しない
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングは融資ではないため、負債として計上されません。トラックのリース審査や銀行融資の審査に悪影響を与えません。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                赤字でも利用可能
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                燃料費高騰で赤字決算になっている運送会社でも、荷主の信用力が高ければファクタリングの審査に通る可能性が十分あります。
              </p>
            </div>
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            運送業向けおすすめファクタリング5選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            運送業に強いファクタリング会社を5社厳選しました。入金スピードと手数料の安さを重視して選んでいます。
          </p>
          <div className="space-y-6">
            {recommendedCompanies.map((company, index) => (
              <div
                key={company.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">
                      {company.name}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {company.features}
                    </p>
                    <div className="mt-4 grid gap-3 rounded-lg bg-section-bg p-4 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold text-text-light">手数料</p>
                        <p className="font-bold text-primary">{company.fee}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">
                          入金スピード
                        </p>
                        <p className="font-bold text-secondary">{company.speed}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 活用事例 ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            活用事例3選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            運送業でファクタリングを活用したケースを3つ紹介します。
          </p>
          <div className="space-y-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-4 text-lg font-bold text-primary">
                  {useCase.title}
                </h3>
                <div className="space-y-3">
                  <div className="rounded-lg bg-orange-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                    <p className="text-sm text-text-light">{useCase.problem}</p>
                  </div>
                  <div className="rounded-lg bg-primary-light p-4">
                    <p className="mb-1 text-sm font-semibold text-primary">解決策</p>
                    <p className="text-sm text-text-light">{useCase.solution}</p>
                  </div>
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                    <p className="text-sm text-text-light">{useCase.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            利用時の注意点
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            運送業でファクタリングを利用する際の注意点をまとめます。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                荷主との関係に配慮する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                運送業では荷主との信頼関係が非常に重要です。3社間ファクタリングで荷主に通知が行く場合、「経営が苦しいのでは」と思われるリスクがあります。荷主との関係を重視する場合は2社間ファクタリングを選びましょう。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                手数料と運賃の利益率を比較する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                運送業は利益率が低い業種（営業利益率3〜5%程度）のため、ファクタリング手数料が利益を上回ってしまう可能性があります。手数料を含めた採算計算を必ず行い、コストに見合う利用かどうかを判断しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                根本的な資金繰り改善も並行して進める
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングはあくまで一時的な資金繰り改善策です。運賃の値上げ交渉、燃料サーチャージの導入、経費削減、銀行融資の活用など、根本的な経営改善を並行して進めることが重要です。ファクタリングに依存し続けると、手数料コストが経営を圧迫します。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                複数の荷主の売掛金を活用する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                特定の荷主の売掛金だけでなく、複数の荷主の売掛金をファクタリングに活用できます。信用力の高い荷主の売掛金を優先的に利用することで、手数料を抑えられます。ただし、同じ売掛金を複数のファクタリング会社に売却する「二重譲渡」は違法ですので注意してください。
              </p>
            </div>
          </div>
        </section>

        {/* ── 2024年問題とファクタリング ─── */}
        <section className="mb-16">
          <h3 className="mb-6 text-lg font-bold text-text-main md:text-xl">
            2024年問題とファクタリングの関係
          </h3>
          <p className="mb-4 leading-relaxed text-text-light">
            2024年4月の働き方改革関連法の適用により、ドライバーの時間外労働規制が強化されました。この<strong className="text-text-main">「2024年問題」</strong>は運送業界の資金繰りに大きな影響を与えています。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">売上減少と人件費増加の二重苦</strong>：時間外労働の上限規制により稼働時間が減少する一方、ドライバー確保のための人件費は上昇し、資金繰りがさらに厳しくなっています</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">赤字でも利用可能</strong>：ファクタリングは銀行融資と異なり、赤字決算でも利用できるため、経営改善期の資金繰りに最適な手段です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">燃料費高騰への対応</strong>：燃料費の急騰による一時的な資金不足にも、ファクタリングで迅速に対応できます。入金を待たずに運転資金を確保できるのが強みです</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            2024年問題による経営環境の変化が続く中、ファクタリングは運送業の資金繰り改善に欠かせないツールとなっています。
          </p>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-text-light">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/construction/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                おすすめ5選と活用事例を紹介
              </p>
            </Link>
            <Link
              href="/articles/medical/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">医療・介護ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                診療報酬・介護報酬の早期現金化
              </p>
            </Link>
            <Link
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">
                手数料を安くする5つのコツも紹介
              </p>
            </Link>
            <Link
              href="/articles/cashflow-tips/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">資金繰り改善方法7選</p>
              <p className="mt-1 text-sm text-text-light">
                ファクタリング以外の選択肢も解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── 運送業でのファクタリング利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            運送業でのファクタリング利用の流れ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            運送業でファクタリングを利用する際の具体的な手順を解説します。初めて利用する方でもスムーズに進められるよう、ステップごとに確認しましょう。
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-bold text-text-main">ファクタリング会社に相談・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  WebまたはIDA電話で問い合わせ。売掛金の金額、荷主の情報、希望入金日を伝えます。運送業の取引実績が豊富な会社を選ぶと、業界特有の事情を理解した対応が期待できます。最低3社に見積もりを依頼し、手数料や条件を比較しましょう。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  身分証明書、荷主宛ての請求書、通帳コピー（直近3〜6ヶ月分）を提出します。運送委託契約書や配送伝票なども求められる場合があります。オンライン完結型の会社であれば、スマートフォンで撮影してアップロードするだけで完了します。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり提示</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  荷主（売掛先）の信用力を中心に審査が行われます。荷主が大手物流会社や上場メーカーであれば審査はスムーズです。最短30分〜数時間で審査結果と見積もりが提示されます。手数料率、事務手数料、受取金額を必ず確認しましょう。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                4
              </span>
              <div>
                <h3 className="font-bold text-text-main">契約締結・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  見積もりに納得したら契約を締結します。電子契約に対応している会社であれば、オンラインで完結し印紙代も不要です。契約後、最短即日〜翌営業日で指定口座に入金されます。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                5
              </span>
              <div>
                <h3 className="font-bold text-text-main">荷主からの入金後の処理（2社間の場合）</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  2社間ファクタリングを利用した場合、荷主からの入金を受け取ったらファクタリング会社に送金します。入金日を忘れないようカレンダーに登録しておきましょう。3社間ファクタリングの場合は荷主が直接ファクタリング会社に支払うため、この手順は不要です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            運送業に強いファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            運送業の資金繰りに最適なファクタリング会社を手数料・入金速度・審査通過率で徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
