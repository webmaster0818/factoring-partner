import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリング詐欺の手口一覧｜こんな業者には要注意",
  description:
    "ファクタリングを装った詐欺の手口を一覧で解説。偽装ファクタリング・高額手数料詐取・給与ファクタリングなど、悪質業者が使う7つの手口と被害を防ぐための対策を詳しく紹介します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/fraud-patterns/",
  },
  openGraph: {
    title:
      "ファクタリング詐欺の手口一覧｜こんな業者には要注意",
    description:
      "ファクタリング詐欺の手口7パターンを解説。偽装ファクタリング・闇金まがいの業者を避ける方法を紹介。",
    url: "https://hyogo-shihoushoshi.jp/articles/fraud-patterns/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const fraudPatterns = [
  {
    id: 1,
    title: "偽装ファクタリング（実質貸付型）",
    severity: "非常に危険",
    description:
      "ファクタリングを名乗りながら、実態は違法な貸金業を行う手口です。契約書が「金銭消費貸借契約」になっていたり、売掛先からの回収ではなく利用者からの分割返済を求められたりします。金融庁も注意喚起を行っている最も深刻な詐欺手口です。",
    howItWorks: [
      "「ファクタリング」と称して利用者に資金を交付する",
      "契約書の実態は「金銭消費貸借契約」（つまり借入）",
      "売掛先からの回収ではなく利用者に月々の返済を要求する",
      "返済が遅れると延滞金・違約金を請求する",
      "利息を年率換算すると100%超になることもある",
    ],
    prevention: "契約書のタイトルと内容を必ず確認する。「債権譲渡契約」「売買契約」ではなく「金銭消費貸借契約」になっている場合は、契約しない。分割返済を求められた場合も、ファクタリングではないため取引を中止する。",
  },
  {
    id: 2,
    title: "高額手数料の詐取",
    severity: "危険",
    description:
      "法外に高い手数料を請求する手口です。初回は安い手数料を提示して契約させ、2回目以降に手数料を大幅に引き上げる「段階的値上げ」パターンや、手数料は安いが「コンサル料」「調査費」「保証料」などの名目で別途高額な費用を請求するパターンがあります。",
    howItWorks: [
      "「手数料5%」と表示して利用者を誘引する",
      "実際に適用される手数料は30%〜50%と法外に高い",
      "手数料以外に「事務手数料10万円」「調査費用5万円」「保証料3万円」など加算する",
      "総コストの見積書を出さず、契約直前に金額を通知する",
      "初回は安い手数料を適用し、リピート時に大幅値上げする",
    ],
    prevention: "必ず見積書を書面（PDF等）でもらい、総コストを確認する。手数料以外の費用項目がある場合は内訳を確認し、不明な費用は拒否する。相見積もりで相場との比較を行い、2社間で20%以上、3社間で10%以上の手数料は避ける。",
  },
  {
    id: 3,
    title: "給与ファクタリング",
    severity: "違法",
    description:
      "個人の給与（将来もらう給料）を買い取ると称して、給料日前に資金を渡す手口です。金融庁は給与ファクタリングを「実質的に貸金業に該当する」と明確に判断しており、貸金業登録のない業者による給与ファクタリングは違法です。",
    howItWorks: [
      "「給料日まで待てない方に」と個人をターゲットにする",
      "月給の一部を「買取」する形で資金を渡す",
      "給料日に「買取額＋手数料」を回収する",
      "手数料は月利15%〜30%（年率換算で180%〜360%）",
      "返済が遅れると脅迫的な取り立てを行う場合がある",
    ],
    prevention: "給与ファクタリングは絶対に利用しない。個人の資金需要には、消費者金融（登録業者）やカードローン、生活福祉資金貸付制度などの正規の手段を利用する。給与ファクタリングの勧誘を受けた場合は消費者生活センター（188）に相談する。",
  },
  {
    id: 4,
    title: "架空債権の買取を装った詐欺",
    severity: "危険",
    description:
      "利用者側が架空の売掛金を作成してファクタリングに出す「利用者側の詐欺」です。架空の請求書や水増し請求書を提出し、実在しない売掛金を現金化しようとする行為で、詐欺罪に問われます。一部の悪質業者がこの手口を指南するケースもあります。",
    howItWorks: [
      "悪質業者が「請求書を作ればすぐにお金になる」と持ちかける",
      "実際には存在しない取引の請求書を作成させる",
      "架空の請求書でファクタリング契約を結ぶ",
      "支払い期日に売掛先からの入金がないため発覚する",
      "利用者が詐欺罪で刑事責任を問われる可能性がある",
    ],
    prevention: "絶対に架空の請求書や水増し請求書を作成しない。「請求書を作ればいい」と勧める業者は悪質業者であり、関わらない。架空債権のファクタリングは詐欺罪に該当し、10年以下の懲役が科される可能性がある。",
  },
  {
    id: 5,
    title: "個人情報の不正収集",
    severity: "危険",
    description:
      "ファクタリングの申し込みを装って個人情報や企業情報を不正に収集する手口です。実際にはファクタリングサービスを提供する意図はなく、収集した情報を他の闇金業者や詐欺グループに売却します。",
    howItWorks: [
      "魅力的な条件（手数料0.5%、審査なし等）でウェブサイトに誘導する",
      "申込フォームで代表者の個人情報・銀行口座情報・売掛先情報を入力させる",
      "「審査中です」と待たせ、結局はサービスを提供しない",
      "収集した情報を闇金業者やSMS詐欺に転売する",
      "個人情報を使って他の詐欺に利用される",
    ],
    prevention: "聞いたことのないファクタリング会社に申し込む際は、まず法人番号で会社の実在を確認する。不自然に好条件のサービスは疑い、口コミや運営歴を確認する。申込前に会社の固定電話番号に電話して、実在する会社かどうかを確認するのも有効。",
  },
  {
    id: 6,
    title: "二重契約・過剰な囲い込み",
    severity: "要注意",
    description:
      "1つの売掛債権に対して複数の契約を結ばせたり、利用者を囲い込んで他社への乗り換えを妨害したりする手口です。「独占契約」を結ばせ、他社との取引を禁止する条項を入れるケースもあります。",
    howItWorks: [
      "初回の契約で「独占取引条項」を含めた契約書にサインさせる",
      "他のファクタリング会社への乗り換えに高額な違約金を設定する",
      "1つの売掛金に対して複数回の手数料を請求する",
      "「当社以外で取引すると法的措置を取る」と脅迫する",
      "売掛先への通知をちらつかせて利用者を萎縮させる",
    ],
    prevention: "契約書を必ず確認し、独占取引条項や不当な違約金条項がないかチェックする。「他社との取引を禁止する」条項は法的に無効な可能性が高いため、弁護士に相談する。ファクタリング会社の乗り換えは自由であり、正規の会社はそれを妨げない。",
  },
  {
    id: 7,
    title: "売掛先への不当な連絡・情報漏洩",
    severity: "要注意",
    description:
      "2社間ファクタリングにもかかわらず、売掛先に無断でファクタリングの利用を連絡する手口です。利用者への圧力として使われることが多く、「返済が遅れたら売掛先に連絡する」と脅迫材料にされます。",
    howItWorks: [
      "2社間ファクタリングで契約しながら、売掛先に連絡すると脅す",
      "利用者に対して「支払いが遅れたら取引先に通知する」と圧力をかける",
      "実際に売掛先に連絡し、利用者の信用を傷つける",
      "売掛先から直接回収しようとする（2社間の契約違反）",
    ],
    prevention: "契約書に「売掛先への通知に関する条項」がないか確認する。2社間ファクタリングでは、ファクタリング会社が売掛先に連絡することは原則ない。「売掛先に連絡する」と脅された場合は、弁護士または消費者生活センターに相談する。",
  },
];

const realCases = [
  {
    title: "事例1：偽装ファクタリングで年率240%の負担",
    industry: "運送業",
    description:
      "運送業を営むA社は、月額20万円の「ファクタリング手数料」で200万円の資金を調達。しかし実態は、毎月20万円を12ヶ月間返済する貸付であり、年率換算で約240%の暴利でした。契約書は「金銭消費貸借契約」であり、ファクタリングではありませんでした。",
    lesson: "契約書のタイトルと返済条件を必ず確認する。月々の返済がある時点でファクタリングではない。",
  },
  {
    title: "事例2：手数料5%のはずが総コスト40%に",
    industry: "IT企業",
    description:
      "IT企業のB社は「手数料5%」に惹かれて500万円の売掛金をファクタリング。しかし、事務手数料30万円、調査費用20万円、コンサル料50万円が加算され、実質の総コストは200万円（40%）に達しました。",
    lesson: "手数料だけでなく総コストを書面で確認する。手数料以外の不明な費用項目は拒否する。",
  },
  {
    title: "事例3：給与ファクタリングで脅迫的取り立て",
    industry: "個人（会社員）",
    description:
      "会社員のCさんは給与ファクタリングで10万円を手にしたが、給料日に13万円の返済を要求された。返済が遅れると「会社に連絡する」「家族に迷惑をかける」と脅迫的な取り立てを受けた。",
    lesson: "給与ファクタリングは違法であり、絶対に利用しない。被害に遭った場合は警察と消費者生活センターに相談する。",
  },
];

const faqs = [
  {
    question: "ファクタリング詐欺に遭った場合、お金は取り戻せますか？",
    answer:
      "取り戻せる可能性はありますが、ケースバイケースです。偽装ファクタリング（実質貸付）の場合、貸金業法違反や利息制限法違反により契約が無効とされる可能性があり、過払い分の返還請求が可能な場合があります。弁護士に相談し、法的手段での回収を検討してください。早期の相談が重要であり、消費者生活センター（188）や法テラス（0570-078374）に連絡しましょう。",
  },
  {
    question: "ファクタリングと闇金の違いは何ですか？",
    answer:
      "正規のファクタリングは「売掛債権の売買」であり、融資（貸付）ではありません。売掛先からの入金で一括精算され、償還請求権がない（ノンリコース）のが特徴です。一方、闇金がファクタリングを装う場合は、実態は貸付であり、利用者に分割返済を求め、担保や保証人を要求し、法外な手数料（利息）を取ります。契約書が「売買契約」か「金銭消費貸借契約」かが最大の判断基準です。",
  },
  {
    question: "悪質業者を利用してしまった場合の相談先はどこですか？",
    answer:
      "以下の順で相談することをおすすめします。(1)消費者ホットライン（188）：消費者生活センターにつながり、無料で相談できます。(2)金融庁 金融サービス利用者相談室：金融サービスに関する苦情・相談を受付。(3)法テラス（0570-078374）：弁護士への相談が必要な場合。(4)警察：犯罪被害の場合。早期の相談が被害の拡大を防ぐ鍵です。",
  },
  {
    question: "正規のファクタリング会社を見分ける最低限のチェックポイントは？",
    answer:
      "最低限チェックすべき3つのポイントは、(1)契約が「売掛債権の売買契約」であること（金銭消費貸借契約ではないこと）、(2)手数料が書面で事前に明示されること、(3)償還請求権がないこと（ノンリコース）です。この3点が揃っていれば、正規のファクタリングである可能性が高いです。加えて、法人番号の確認と口コミチェックを行えば、より安全です。",
  },
  {
    question: "知人からファクタリング業者を紹介された場合、信頼できますか？",
    answer:
      "知人からの紹介であっても、必ず自分自身で業者を確認してください。悪質業者は紹介料を支払って利用者を集めることがあり、紹介者自身が業者の実態を把握していない場合もあります。紹介されたとしても、法人番号の確認・契約書の内容チェック・相見積もりの取得は必ず行いましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ファクタリング詐欺の手口一覧｜こんな業者には要注意",
  description:
    "ファクタリング詐欺の手口7パターンを解説。偽装ファクタリング・闇金まがいの業者を避ける方法を紹介。",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
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
    "@id":
      "https://hyogo-shihoushoshi.jp/articles/fraud-patterns/",
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
      name: "コラム",
      item: "https://hyogo-shihoushoshi.jp/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ファクタリング詐欺の手口一覧",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function FraudPatternsPage() {
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
          { label: "詐欺の手口一覧" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-white">
            リスク・トラブル
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング詐欺の手口一覧
            <br className="hidden md:block" />
            こんな業者には要注意
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングを装った詐欺の手口7パターンを徹底解説。偽装ファクタリング・給与ファクタリング・高額手数料の詐取など、被害に遭わないための知識と対策をまとめました。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#patterns" className="hover:underline">1. 詐欺の手口7パターン</a></li>
            <li><a href="#real-cases" className="hover:underline">2. 実際の被害事例</a></li>
            <li><a href="#prevention" className="hover:underline">3. 被害を防ぐための5つの対策</a></li>
            <li><a href="#faq" className="hover:underline">4. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 詐欺の手口 ─── */}
        <section id="patterns" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            詐欺の手口7パターン
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリング市場の拡大に伴い、悪質業者による詐欺被害も増加しています。以下の7つの手口を理解しておくことで、被害を未然に防ぐことができます。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            各手口について、仕組みと予防策を詳しく解説します。1つでも心当たりがある場合は、取引を中止して専門家に相談してください。
          </p>

          <div className="space-y-8">
            {fraudPatterns.map((pattern) => (
              <div
                key={pattern.id}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-xl font-bold text-white">
                    {pattern.id}
                  </span>
                  <div className="w-full">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-bold text-text-main">{pattern.title}</h3>
                      <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${pattern.severity === "非常に危険" || pattern.severity === "違法" ? "bg-accent text-white" : pattern.severity === "危険" ? "bg-accent/80 text-white" : "bg-primary-light text-primary"}`}>
                        {pattern.severity}
                      </span>
                    </div>
                    <p className="mt-3 leading-relaxed text-text-light">{pattern.description}</p>

                    <div className="mt-4 rounded-lg bg-section-bg p-4">
                      <p className="mb-2 text-sm font-bold text-text-main">手口の流れ：</p>
                      <ol className="space-y-1">
                        {pattern.howItWorks.map((step, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-light">
                            <span className="mt-0.5 shrink-0 text-accent font-bold">{i + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="mt-4 rounded-lg border border-secondary/30 bg-teal-50 p-4">
                      <p className="mb-1 text-sm font-bold text-secondary">予防策</p>
                      <p className="text-sm leading-relaxed text-text-light">{pattern.prevention}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 実際の被害事例 ─── */}
        <section id="real-cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-accent pl-4 text-xl font-bold text-text-main md:text-2xl">
            実際の被害事例
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            以下は実際に報告されている被害事例をもとに構成したものです（プライバシー保護のため詳細は変更しています）。同様の被害に遭わないための参考にしてください。
          </p>

          <div className="space-y-6">
            {realCases.map((caseItem, index) => (
              <div
                key={caseItem.title}
                className="rounded-lg border-2 border-accent/30 bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{caseItem.title}</h3>
                    <span className="mt-1 inline-block rounded-full bg-section-bg px-3 py-0.5 text-xs text-text-light">{caseItem.industry}</span>
                    <p className="mt-3 leading-relaxed text-text-light">{caseItem.description}</p>
                    <div className="mt-3 rounded-lg bg-primary-light p-3">
                      <p className="text-sm">
                        <span className="font-bold text-primary">教訓：</span>
                        <span className="text-text-light">{caseItem.lesson}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 被害を防ぐ対策 ─── */}
        <section id="prevention" className="mb-16">
          <h2 className="mb-6 border-l-4 border-secondary pl-4 text-xl font-bold text-text-main md:text-2xl">
            被害を防ぐための5つの対策
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリング詐欺の被害を防ぐために、以下の5つの対策を実践してください。
          </p>

          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
                <div>
                  <h3 className="text-lg font-bold text-text-main">契約書を必ず確認する</h3>
                  <p className="mt-2 leading-relaxed text-text-light">
                    契約書が「売掛債権の売買契約」であることを確認。「金銭消費貸借契約」の場合はファクタリングではありません。契約書の控えを必ず受け取り、不明な条項は説明を求めてください。
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
                <div>
                  <h3 className="text-lg font-bold text-text-main">法人番号で会社を確認する</h3>
                  <p className="mt-2 leading-relaxed text-text-light">
                    国税庁の法人番号公表サイトで会社の実在を確認。Googleマップで所在地に実際のオフィスがあるかも確認しましょう。バーチャルオフィスのみの業者は注意が必要です。
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
                <div>
                  <h3 className="text-lg font-bold text-text-main">総コストを書面で確認する</h3>
                  <p className="mt-2 leading-relaxed text-text-light">
                    手数料だけでなく、事務手数料・登記費用・振込手数料などを含めた総コストを書面（見積書）で確認。口頭のみの説明は信用せず、書面での提示を求めましょう。
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">4</span>
                <div>
                  <h3 className="text-lg font-bold text-text-main">相見積もりで比較する</h3>
                  <p className="mt-2 leading-relaxed text-text-light">
                    最低でも2〜3社から見積もりを取り、手数料や条件を比較しましょう。相見積もりを嫌がる業者は、自社の条件に自信がない可能性があります。正規の会社は相見積もりを快く受け入れます。
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">5</span>
                <div>
                  <h3 className="text-lg font-bold text-text-main">実績のある会社を選ぶ</h3>
                  <p className="mt-2 leading-relaxed text-text-light">
                    累計取引実績が公開されている、Googleマップに口コミがある、メディアへの掲載実績がある会社を選びましょう。ビートレーディング（9.1万社）、OLTA（累計1,000億円）、ペイトナーなどは信頼性の高い大手です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border bg-white"
              >
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/scam-detection/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">悪質業者の見分け方チェックリスト10項目</p>
              <p className="mt-1 text-sm text-text-light">
                実践的なチェックリストで危険な業者を見分ける
              </p>
            </Link>
            <Link
              href="/articles/troubles/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングのトラブル事例と対策</p>
              <p className="mt-1 text-sm text-text-light">
                実際に起きたトラブル事例と予防策
              </p>
            </Link>
            <Link
              href="/articles/is-it-legal/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングは合法？</p>
              <p className="mt-1 text-sm text-text-light">
                法的根拠と安全性を解説
              </p>
            </Link>
            <Link
              href="/articles/contract-checklist/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">契約チェックリスト</p>
              <p className="mt-1 text-sm text-text-light">
                契約前に確認すべきポイントをリスト化
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            安全なファクタリング会社を選びましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            実績豊富で透明性の高い大手ファクタリング会社を厳選比較。安心してご利用いただけます。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
