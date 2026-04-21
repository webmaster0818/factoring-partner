import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "個人事業主向けファクタリングおすすめ5選｜少額・即日対応を比較",
  description:
    "個人事業主向けファクタリング会社おすすめ5社を徹底比較。1万円〜の少額対応・即日入金・必要書類・審査ポイント・確定申告への影響まで詳しく解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/for-sole-proprietor/",
  },
  openGraph: {
    title:
      "個人事業主向けファクタリングおすすめ5選｜少額・即日対応を比較",
    description:
      "個人事業主向けファクタリング会社おすすめ5社を徹底比較。少額・即日対応・必要書類・確定申告への影響まで解説。",
    url: "https://factoring-partner.pages.dev/articles/for-sole-proprietor/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const top5 = [
  {
    rank: 1,
    name: "ペイトナー",
    fee: "一律10%",
    speed: "最短10分",
    minAmount: "1万円〜",
    maxAmount: "100万円（初回25万円）",
    features: [
      "業界最速クラスの最短10分入金",
      "1万円〜の少額対応",
      "請求書のアップロードだけで完結",
      "アプリ対応でスマホから申請可能",
    ],
    description:
      "ペイトナーは個人事業主・フリーランスに最も人気のファクタリングサービスです。最大の特徴は、請求書をアップロードするだけで最短10分で入金される圧倒的なスピード。手数料は一律10%と明確で、1万円から利用できるため、少額の請求書でも気軽に現金化できます。初回は25万円まで、利用実績に応じて上限が100万円まで引き上がります。",
  },
  {
    rank: 2,
    name: "ラボル",
    fee: "一律10%",
    speed: "最短30分",
    minAmount: "1万円〜",
    maxAmount: "制限なし",
    features: [
      "買取上限額に制限なし",
      "土日祝日も24時間365日対応",
      "独立系フリーランスに強い",
      "東証プライム上場企業の子会社運営",
    ],
    description:
      "ラボルは東証プライム上場企業・株式会社セレスの100%子会社が運営するファクタリングサービスです。手数料一律10%・最短30分入金で、買取上限額に制限がないのが大きな強み。土日祝日を含む24時間365日対応しているため、急な資金需要にも対応できます。運営企業の信頼性も高く、安心して利用できます。",
  },
  {
    rank: 3,
    name: "QuQuMo",
    fee: "1%〜14.8%",
    speed: "最短2時間",
    minAmount: "制限なし",
    maxAmount: "無制限",
    features: [
      "手数料1%〜と業界最安水準",
      "完全オンライン完結",
      "個人事業主の利用実績豊富",
      "弁護士ドットコム監修の安全な電子契約",
    ],
    description:
      "QuQuMo（ククモ）はオンライン完結型のファクタリングサービスで、手数料1%〜14.8%と業界最安水準です。買取金額に上限・下限がなく、少額から大口まで柔軟に対応。弁護士ドットコム監修のクラウドサインを使った電子契約で、安全かつスピーディーに取引できます。個人事業主の利用も多く、使いやすいと評判です。",
  },
  {
    rank: 4,
    name: "アクセルファクター",
    fee: "2%〜20%",
    speed: "最短即日",
    minAmount: "30万円〜",
    maxAmount: "1億円",
    features: [
      "審査通過率93.3%の高い通過率",
      "少額30万円〜対応",
      "対面・電話・オンライン対応",
      "柔軟な審査で個人事業主でも安心",
    ],
    description:
      "アクセルファクターは審査通過率93.3%を誇るファクタリング会社です。個人事業主でも利用しやすい柔軟な審査が特徴で、30万円からの少額案件にも対応。対面・電話・オンラインの複数チャネルから申し込めるため、自分に合った方法を選べます。審査に不安がある個人事業主に特におすすめです。",
  },
  {
    rank: 5,
    name: "FREENANCE（フリーナンス）",
    fee: "3%〜10%",
    speed: "最短即日",
    minAmount: "1万円〜",
    maxAmount: "制限なし",
    features: [
      "GMOグループ運営の信頼性",
      "あんしん補償が無料で付帯",
      "フリーナンス口座で振込手数料無料",
      "請求書買取以外のサービスも充実",
    ],
    description:
      "FREENANCE（フリーナンス）はGMOクリエイターズネットワークが運営する個人事業主・フリーランス向けの金融サービスです。ファクタリング（即日払い）に加え、損害賠償保険「あんしん補償」が無料で付帯するのが最大の特徴。フリーナンス口座を開設すれば振込手数料も無料になり、トータルでお得に利用できます。",
  },
];

const documents = [
  {
    name: "本人確認書類",
    detail: "運転免許証・マイナンバーカード・パスポートなど顔写真付きの証明書",
    note: "すべてのファクタリング会社で必須",
  },
  {
    name: "請求書",
    detail: "売掛先に発行した請求書（金額・支払い期日・売掛先名が記載されたもの）",
    note: "ファクタリングの対象となる書類",
  },
  {
    name: "通帳コピー（入出金明細）",
    detail: "直近3〜6ヶ月分の銀行口座の入出金履歴",
    note: "売掛先からの入金実績を確認するため",
  },
  {
    name: "確定申告書・納税証明書",
    detail: "直近1〜2年分の確定申告書の控え",
    note: "会社によっては不要な場合もある",
  },
  {
    name: "取引先との契約書",
    detail: "業務委託契約書・発注書・注文書など",
    note: "取引の実在性を証明するため",
  },
];

const taxImpact = [
  {
    title: "ファクタリング手数料の会計処理",
    description:
      "ファクタリングの手数料は「売掛債権売却損」として費用計上します。確定申告では事業経費として扱えるため、課税所得を減らす効果があります。勘定科目は「雑損失」や「支払手数料」で処理する場合もあります。",
  },
  {
    title: "消費税の取り扱い",
    description:
      "ファクタリング手数料は金融取引に該当するため、消費税は非課税です。つまり、手数料に消費税は加算されません。確定申告の際に消費税の区分を間違えないよう注意しましょう。",
  },
  {
    title: "帳簿への記帳方法",
    description:
      "売掛金100万円を手数料10%でファクタリングした場合、借方に「普通預金90万円」「売掛債権売却損10万円」、貸方に「売掛金100万円」と記帳します。会計ソフトを利用している場合は、仕訳テンプレートを作成しておくと便利です。",
  },
];

const cautions = [
  {
    title: "手数料の累積コストに注意",
    description:
      "ファクタリングは便利な資金調達手段ですが、毎月継続的に利用すると手数料が累積し、利益を圧迫します。例えば月100万円の売掛金を手数料10%でファクタリングし続けると、年間120万円のコストになります。一時的な利用に留め、根本的な資金繰り改善も並行して進めましょう。",
  },
  {
    title: "悪徳業者に注意",
    description:
      "ファクタリング業界には、ファクタリングを装った闇金業者も存在します。「手数料が異常に高い（30%以上）」「償還請求権ありの契約を求められる」「契約書を渡さない」などの特徴がある業者には要注意です。運営会社の情報（所在地・代表者名・設立年）を必ず確認し、口コミや評判も調べましょう。",
  },
  {
    title: "売掛先への影響を考慮",
    description:
      "2社間ファクタリングであれば取引先に知られることはありませんが、債権譲渡登記が行われる場合、登記簿から判明する可能性があります。債権譲渡登記の有無は契約前に必ず確認しましょう。登記不要のサービス（ペイトナー・ラボルなど）も増えています。",
  },
  {
    title: "利用頻度の管理",
    description:
      "ファクタリングに依存しすぎると、売上が上がっても手元資金が増えない悪循環に陥る可能性があります。ファクタリングは一時的な資金繰りの解決策と位置付け、支払いサイトの交渉や経費の見直しなど根本的な改善も同時に進めることが重要です。",
  },
];

const faqs = [
  {
    question: "個人事業主でもファクタリングは利用できますか？",
    answer:
      "はい、個人事業主でも利用できます。近年は個人事業主・フリーランスに特化したファクタリングサービスが増えており、1万円〜の少額から即日入金に対応しています。ペイトナー・ラボル・FREENANCEなど、個人事業主を主要ターゲットとしたサービスがおすすめです。",
  },
  {
    question: "個人事業主がファクタリングを利用すると確定申告に影響しますか？",
    answer:
      "ファクタリングの手数料は事業経費として計上できるため、確定申告時に課税所得を減らす効果があります。「売掛債権売却損」や「支払手数料」として費用処理します。ファクタリングの利用自体は借入ではないため、負債として申告する必要はありません。",
  },
  {
    question: "開業したばかりの個人事業主でも利用できますか？",
    answer:
      "開業間もない個人事業主でも、売掛金（請求書）があれば利用できる可能性があります。ファクタリングの審査では利用者の事業歴より売掛先の信用力が重視されるため、売掛先が信頼できる企業であれば審査に通りやすいです。ペイトナーやラボルは開業直後でも利用しやすいサービスです。",
  },
  {
    question: "個人事業主向けファクタリングの審査で見られるポイントは？",
    answer:
      "主に(1)売掛先の信用力、(2)請求書の内容（金額・支払い期日）、(3)取引の継続性（過去の入金実績）、(4)本人確認、が審査のポイントです。個人事業主の場合、法人ほど多くの書類は求められません。請求書と通帳コピーだけで審査が完結するサービスもあります。",
  },
  {
    question: "個人事業主が利用できる最低金額はいくらからですか？",
    answer:
      "ペイトナーとラボルは1万円から、FREENANCEも1万円からと、少額に対応しています。QuQuMoは金額制限なしで利用可能です。アクセルファクターは30万円からとなります。少額の請求書を現金化したい場合は、ペイトナーかラボルがおすすめです。",
  },
];

const selectionGuide = [
  {
    priority: "スピード最優先",
    recommended: "ペイトナー",
    reason: "最短10分入金は業界最速。急な支払いに即対応できる。手数料は一律10%で計算しやすい。",
  },
  {
    priority: "手数料の安さ最優先",
    recommended: "QuQuMo",
    reason: "手数料1%〜14.8%と業界最安水準。売掛先が大手企業なら1%台も狙える。",
  },
  {
    priority: "大口案件に対応してほしい",
    recommended: "ラボル",
    reason: "買取上限に制限がなく、大型プロジェクトの請求書も全額現金化可能。",
  },
  {
    priority: "審査に不安がある",
    recommended: "アクセルファクター",
    reason: "審査通過率93.3%。柔軟な審査で個人事業主でも安心して申し込める。",
  },
  {
    priority: "総合的なサポートがほしい",
    recommended: "FREENANCE",
    reason: "ファクタリングに加え、損害賠償保険・専用口座・所得補償など総合的な金融サポートが受けられる。",
  },
];

const flowSteps = [
  {
    step: "1. サービスに会員登録する",
    description: "利用したいファクタリングサービスのWebサイトまたはアプリからアカウントを作成します。メールアドレスと本人確認書類があれば数分で登録完了です。",
  },
  {
    step: "2. 請求書と必要書類をアップロードする",
    description: "ファクタリングの対象となる請求書（PDF・画像）と、通帳コピーなどの必要書類をアップロードします。スマホの写真でOKなサービスがほとんどです。",
  },
  {
    step: "3. 審査結果を待つ",
    description: "ファクタリング会社が審査を行います。最短10分（ペイトナー）〜数時間で結果が通知されます。追加書類を求められる場合もあります。",
  },
  {
    step: "4. 契約・入金",
    description: "審査通過後、手数料率が提示されます。内容に同意すれば電子契約で手続き完了。その後すぐに銀行口座に入金されます。",
  },
  {
    step: "5. 売掛先からの入金後に精算する",
    description: "売掛先から請求書の支払い期日に入金されたら、その金額をファクタリング会社に送金して取引完了です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "個人事業主向けファクタリングおすすめ5選｜少額・即日対応を比較",
  description:
    "個人事業主向けファクタリング会社おすすめ5社を徹底比較。少額・即日対応・必要書類・確定申告への影響まで解説。",
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
    "@id":
      "https://factoring-partner.pages.dev/articles/for-sole-proprietor/",
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

/* ── Component ────────────────────────────────────── */

export default function ForSoleProprietorPage() {
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

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "コラム", href: "/articles/" },
          { label: "個人事業主向けファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            個人事業主向け
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            個人事業主向けファクタリングおすすめ5選
            <br className="hidden md:block" />
            少額・即日対応を比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            個人事業主でも利用できるファクタリング会社5社を厳選。1万円〜の少額対応、最短10分の即日入金、必要書類、確定申告への影響まで詳しく比較・解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#screening" className="hover:underline">
                1. 個人事業主のファクタリング審査ポイント
              </a>
            </li>
            <li>
              <a href="#ranking" className="hover:underline">
                2. 個人事業主向けファクタリングおすすめ5選
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                3. 少額対応ファクタリング比較表
              </a>
            </li>
            <li>
              <a href="#documents" className="hover:underline">
                4. 必要書類一覧
              </a>
            </li>
            <li>
              <a href="#tax" className="hover:underline">
                5. 確定申告への影響と会計処理
              </a>
            </li>
            <li>
              <a href="#caution" className="hover:underline">
                6. 個人事業主がファクタリングを利用する際の注意点
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 審査ポイント ─── */}
        <section id="screening" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            個人事業主のファクタリング審査ポイント
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            「個人事業主だからファクタリングの審査に通らないのでは？」と不安に思う方も多いですが、ファクタリングの審査では利用者自身の信用力よりも<strong className="text-text-main">売掛先の信用力</strong>が最も重視されます。そのため、個人事業主であっても売掛先が信頼できる企業であれば、問題なく利用できます。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            特に近年は、個人事業主・フリーランス専用のファクタリングサービスが充実しており、法人向けとは異なる簡易的な審査プロセスで利用できるようになっています。
          </p>

          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">
              個人事業主の審査で重視されるポイント
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span><strong className="text-text-main">売掛先の信用力</strong> - 大手企業・上場企業との取引は有利</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span><strong className="text-text-main">請求書の内容</strong> - 金額・支払い期日・取引内容が明確であること</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span><strong className="text-text-main">取引の継続性</strong> - 過去に同じ売掛先からの入金実績があるとベター</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span><strong className="text-text-main">本人確認</strong> - 顔写真付きの身分証明書があればOK</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="ranking" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            個人事業主向けファクタリングおすすめ5選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            個人事業主が利用しやすいファクタリングサービス5社を厳選しました。少額対応・手数料の明確さ・入金スピードを重視して選定しています。
          </p>
          <div className="space-y-8">
            {top5.map((company) => (
              <div
                key={company.name}
                className="rounded-lg border border-border bg-white p-6 md:p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {company.rank}
                  </span>
                  <h3 className="text-xl font-bold text-text-main">
                    {company.name}
                  </h3>
                </div>

                <div className="mb-4 grid gap-3 text-sm md:grid-cols-4">
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">手数料</p>
                    <p className="mt-1 font-bold text-primary">{company.fee}</p>
                  </div>
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">入金スピード</p>
                    <p className="mt-1 font-bold text-primary">{company.speed}</p>
                  </div>
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">最低金額</p>
                    <p className="mt-1 font-bold text-primary">{company.minAmount}</p>
                  </div>
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">買取上限</p>
                    <p className="mt-1 font-bold text-primary">{company.maxAmount}</p>
                  </div>
                </div>

                <p className="mb-4 leading-relaxed text-text-light">
                  {company.description}
                </p>

                <div className="rounded-lg bg-section-bg p-4">
                  <p className="mb-2 text-sm font-bold text-text-main">特徴・メリット</p>
                  <ul className="grid gap-1 text-sm text-text-light md:grid-cols-2">
                    {company.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-0.5 text-secondary">&#10003;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            少額対応ファクタリング比較表
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            個人事業主向けファクタリング5社の主要スペックを一覧で比較します。少額対応の可否、手数料、入金スピードを横断的に確認しましょう。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">サービス名</th>
                  <th className="px-4 py-3 font-semibold">手数料</th>
                  <th className="px-4 py-3 font-semibold">入金スピード</th>
                  <th className="px-4 py-3 font-semibold">最低金額</th>
                  <th className="px-4 py-3 font-semibold">買取上限</th>
                </tr>
              </thead>
              <tbody>
                {top5.map((company, index) => (
                  <tr
                    key={company.name}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-4 py-3 font-semibold text-text-main">
                      {company.name}
                    </td>
                    <td className="px-4 py-3">{company.fee}</td>
                    <td className="px-4 py-3">{company.speed}</td>
                    <td className="px-4 py-3">{company.minAmount}</td>
                    <td className="px-4 py-3">{company.maxAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 必要書類 ─── */}
        <section id="documents" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            必要書類一覧
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            個人事業主がファクタリングを利用する際に必要な書類は、法人に比べて少なく済むケースが多いです。以下は一般的に求められる書類の一覧です。
          </p>

          <div className="space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.name}
                className="rounded-lg border border-border bg-white p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-text-main">{doc.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-light">
                      {doc.detail}
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-text-light">
                  <span className="rounded bg-primary-light px-2 py-0.5 font-semibold text-primary">
                    {doc.note}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">
              少ない書類で利用できるサービス
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              ペイトナーやラボルなどの個人事業主特化型サービスでは、「本人確認書類」「請求書」「通帳コピー」の3点だけで申し込めるケースが多いです。確定申告書や契約書が不要な場合もあるため、手軽に利用を開始できます。
            </p>
          </div>
        </section>

        {/* ── 確定申告 ─── */}
        <section id="tax" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            確定申告への影響と会計処理
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            個人事業主がファクタリングを利用する際に気になるのが確定申告への影響です。結論から言うと、ファクタリングは借入ではないため負債として計上する必要はなく、手数料は経費として処理できます。
          </p>

          <div className="space-y-6">
            {taxImpact.map((item, index) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="mb-2 font-bold text-accent">仕訳の具体例</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-3 py-2 text-left font-semibold text-text-main" colSpan={2}>借方</th>
                    <th className="px-3 py-2 text-left font-semibold text-text-main" colSpan={2}>貸方</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 text-text-light">普通預金</td>
                    <td className="px-3 py-2 text-text-light">900,000円</td>
                    <td className="px-3 py-2 text-text-light">売掛金</td>
                    <td className="px-3 py-2 text-text-light">1,000,000円</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-text-light">売掛債権売却損</td>
                    <td className="px-3 py-2 text-text-light">100,000円</td>
                    <td className="px-3 py-2 text-text-light"></td>
                    <td className="px-3 py-2 text-text-light"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-text-light">
              ※ 売掛金100万円を手数料10%でファクタリングした場合の仕訳例
            </p>
          </div>
        </section>

        {/* ── 目的別おすすめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            目的別おすすめサービス
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            個人事業主のニーズはさまざまです。あなたの優先事項に合わせて、最適なサービスを選びましょう。
          </p>
          <div className="space-y-4">
            {selectionGuide.map((item) => (
              <div
                key={item.priority}
                className="rounded-lg border border-border bg-white p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                    {item.priority}
                  </span>
                  <div>
                    <p className="font-bold text-text-main">
                      おすすめ：<span className="text-accent">{item.recommended}</span>
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-light">{item.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            個人事業主がファクタリングを利用する流れ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            個人事業主がファクタリングを初めて利用する場合の具体的な手順を解説します。多くのサービスがオンライン完結で、スマホだけで手続きが完了します。
          </p>
          <div className="space-y-4">
            {flowSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-lg border border-border bg-white p-5"
              >
                <h3 className="mb-2 font-bold text-primary">{item.step}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            個人事業主がファクタリングを利用する際の注意点
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングは個人事業主にとって便利な資金調達手段ですが、以下の注意点を理解した上で賢く利用しましょう。
          </p>
          <div className="space-y-6">
            {cautions.map((caution, index) => (
              <div
                key={caution.title}
                className="rounded-lg border border-accent/30 bg-orange-50 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {caution.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {caution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
              href="/articles/for-freelance/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">フリーランス向けファクタリング5選</p>
              <p className="mt-1 text-sm text-text-light">
                請求書を即日現金化する方法を解説
              </p>
            </Link>
            <Link
              href="/articles/instant-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">即日ファクタリング10選</p>
              <p className="mt-1 text-sm text-text-light">
                最短10分〜当日入金のおすすめ会社を紹介
              </p>
            </Link>
            <Link
              href="/articles/low-fee/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料が安いファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                手数料相場と節約術をランキング形式で紹介
              </p>
            </Link>
            <Link
              href="/articles/easy-screening/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">審査が通りやすいファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                審査基準と通過のコツを解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            個人事業主に最適なファクタリング会社を見つけましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            個人事業主向けファクタリング会社を手数料・入金スピード・少額対応で徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
