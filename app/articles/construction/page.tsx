import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "建設業向けファクタリング完全ガイド｜おすすめ5選と活用事例",
  description:
    "建設業向けファクタリングを徹底解説。入金サイトの長さや材料費先払いなど建設業特有の資金繰り課題、おすすめ5社（けんせつくん・土建くん・ビートレーディング・PMG・アクセルファクター）、活用事例3つ、注意点を紹介。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/construction/",
  },
  openGraph: {
    title: "建設業向けファクタリング完全ガイド｜おすすめ5選と活用事例",
    description:
      "建設業の資金繰り課題とファクタリング活用法。おすすめ5社と事例を紹介。",
    url: "https://factoring-partner.pages.dev/articles/construction/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "入金サイトが長い（60〜120日が一般的）",
    description:
      "建設業界では、工事完了後の入金までに60日〜120日かかるのが一般的です。元請けから下請け、孫請けと多層構造になっているため、下位の事業者ほど入金が遅くなります。工事完了から入金までの間に次の現場の資金が必要になるため、常に資金繰りに悩まされる構造的な問題があります。",
  },
  {
    title: "材料費・外注費の先払いが必要",
    description:
      "建材、セメント、鉄筋、足場などの資材は工事着工前に調達する必要があり、多くの場合、仕入先への支払いは即日〜30日以内です。また、専門工事を外注する場合も、外注先への支払いは工事完了後すぐに求められます。入金前に支出が発生するため、手元資金が不足しがちです。",
  },
  {
    title: "工事代金が大きく、キャッシュフローの変動が大きい",
    description:
      "建設業は1件あたりの工事代金が数百万円〜数千万円と高額になることが多く、1件の入金遅延が経営に大きな影響を及ぼします。季節要因（雨天や冬季の工事中断）による売上の変動も大きく、安定したキャッシュフロー管理が難しい業種です。",
  },
  {
    title: "大型案件の受注時に資金が不足する",
    description:
      "大型の公共工事や民間工事を受注した際、着工前に必要な設備投資や人員確保のための資金が不足するケースがあります。銀行融資の審査に時間がかかると、せっかくのビジネスチャンスを逃してしまう可能性があります。",
  },
];

const recommendedCompanies = [
  {
    name: "けんせつくん",
    features: "建設業専門のファクタリングサービス。建設業界の商慣習を熟知しており、注文書・出来高証明書での利用が可能。工事請負契約書に基づく売掛金にも対応。最短即日入金。",
    fee: "5%〜",
    speed: "最短即日",
    merit: "建設業に特化した柔軟な審査基準。注文書段階での利用も可能で、着工前の資金調達に対応。業界知識豊富なスタッフが対応するため、相談もスムーズ。",
  },
  {
    name: "土建くん",
    features: "建設・土木業界専門のファクタリングサービス。元請けへの通知不要（2社間対応）。個人事業主の一人親方にも対応。来店不要のオンライン申し込み。",
    fee: "3%〜",
    speed: "最短即日",
    merit: "一人親方や小規模事業者にも対応。2社間ファクタリングで元請けに知られずに利用可能。少額（30万円〜）からの利用も可能。",
  },
  {
    name: "ビートレーディング",
    features: "業界最大手級の独立系ファクタリング会社。建設業の利用実績が豊富。2社間・3社間に対応。最短2時間での入金実績あり。買取実績は累計1,300億円以上。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "大手ならではの安心感と実績。高額案件にも対応（上限なし）。建設業の審査ノウハウが豊富で、審査通過率が高い。全国対応・来店不要。",
  },
  {
    name: "PMG",
    features: "年間取引実績が豊富な大手ファクタリング会社。建設業を含む幅広い業種に対応。法人・個人事業主ともに利用可能。対面での丁寧なコンサルティングが特徴。",
    fee: "2%〜",
    speed: "最短即日",
    merit: "資金繰りの相談にも対応。リピーター割引制度あり。東京・大阪に拠点があり対面相談も可能。高額案件（数千万円単位）にも対応。",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。年間相談件数15,000件以上の実績。少額（30万円〜）から利用可能。最短即日入金に対応。オンライン完結型で来店不要。",
    fee: "2%〜",
    speed: "最短即日",
    merit: "審査通過率が業界トップクラス。赤字決算・税金滞納があっても柔軟に対応。初回利用でも手数料が比較的安い。個人事業主（一人親方）にも対応。",
  },
];

const useCases = [
  {
    title: "事例1：大型公共工事の受注で材料費が不足",
    industry: "建設業（中規模）",
    problem:
      "地方自治体の公共工事（道路補修工事）を受注したが、着工に必要な資材費3,000万円が不足。銀行融資は審査に3週間かかると言われ、着工日に間に合わない状況。",
    solution:
      "既存の工事（完了済み）の売掛金5,000万円をファクタリングに利用。手数料8%で4,600万円を即日調達し、新規工事の資材を予定通り発注できた。",
    result:
      "公共工事を予定通り着工でき、工期内に完了。銀行融資も並行して申し込み、次の案件の資金は融資で対応。ファクタリングで信用実績を作ったことで、銀行との関係も良好に。",
  },
  {
    title: "事例2：元請けの入金遅延で外注費が支払えない",
    industry: "建設業（小規模・下請け）",
    problem:
      "元請け業者の入金が予定より1ヶ月遅延。外注先への支払い期日が迫っており、500万円の支払いができないと外注先との取引関係が悪化する恐れ。",
    solution:
      "別の元請けへの売掛金600万円を2社間ファクタリングで売却。手数料15%で510万円を2営業日で調達。元請けにはファクタリングの利用は通知されず。",
    result:
      "外注先への支払いを期日通りに完了。外注先との信頼関係を維持でき、以降の工事も安定して外注依頼が可能に。遅延していた元請けからの入金後、ファクタリング会社への支払いも完了。",
  },
  {
    title: "事例3：一人親方が設備投資のため活用",
    industry: "電気工事業（個人事業主）",
    problem:
      "個人で電気工事業を営む一人親方。新しい工具・測定機器の購入に80万円が必要だが、現在施工中の工事の入金は2ヶ月先。銀行融資は個人事業主のため審査が厳しい。",
    solution:
      "前月完了した工事の売掛金120万円を少額対応のファクタリング会社で売却。手数料12%で105万6千円を受け取り、必要な設備投資に充当。",
    result:
      "新しい設備を導入したことで作業効率が向上し、月あたりの施工件数が増加。ファクタリングの手数料コストを上回る売上増を実現。",
  },
];

const faqs = [
  {
    question: "建設業でファクタリングを利用する最大のメリットは何ですか？",
    answer:
      "最大のメリットは、入金サイトの長さ（60〜120日）を解消し、即日〜数日で資金化できることです。建設業は材料費や外注費の先払いが多いため、入金前に資金が必要になるケースが頻繁にあります。ファクタリングを利用すれば、工事完了後すぐに資金を確保でき、次の案件の準備にも支障が出ません。",
  },
  {
    question: "注文書（受注段階）でもファクタリングは利用できますか？",
    answer:
      "一部のファクタリング会社（けんせつくんなど建設業特化型）では、注文書や出来高証明書をもとにしたファクタリングに対応しています。ただし、すべてのファクタリング会社が対応しているわけではないため、事前に確認が必要です。通常は工事完了後の売掛金（請求書発行後）が対象です。",
  },
  {
    question: "元請けにファクタリングの利用が知られることはありますか？",
    answer:
      "2社間ファクタリングを選択すれば、元請けにファクタリングの利用は通知されません。元請けとの取引関係に影響を与えずに資金調達が可能です。ただし、3社間ファクタリングの場合は元請けの承諾が必要なため、知られることになります。",
  },
  {
    question: "一人親方（個人事業主）でもファクタリングは利用できますか？",
    answer:
      "はい、個人事業主（一人親方）でも利用できるファクタリング会社は多くあります。土建くん、アクセルファクターなど、個人事業主にも対応しているサービスを選びましょう。必要書類は身分証明書・請求書・通帳コピーの3点で済む場合が多いです。",
  },
  {
    question: "建設業向けファクタリングの手数料相場はどのくらいですか？",
    answer:
      "建設業向けファクタリングの手数料は、2社間で8%〜20%、3社間で2%〜10%程度が相場です。元請けが大手ゼネコンや官公庁の場合は信用力が高いため、手数料が安くなる傾向にあります。建設業特化型のファクタリング会社は業界事情を理解しているため、一般的な会社より有利な条件を提示してくれることがあります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "建設業向けファクタリング完全ガイド｜おすすめ5選と活用事例",
  description:
    "建設業の資金繰り課題とファクタリング活用法。おすすめ5社と事例を紹介。",
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
    "@id": "https://factoring-partner.pages.dev/articles/construction/",
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
      name: "建設業向けファクタリング",
      item: "https://factoring-partner.pages.dev/articles/construction/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ConstructionPage() {
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
          { label: "建設業向けファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            業種特化ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            建設業向けファクタリング完全ガイド
            <br className="hidden md:block" />
            おすすめ5選と活用事例
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            入金サイトの長さや材料費の先払いなど、建設業特有の資金繰り課題をファクタリングで解決。おすすめ5社と実際の活用事例を紹介します。
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
                1. 建設業の資金繰り課題
              </a>
            </li>
            <li>
              <a href="#why-factoring" className="hover:underline">
                2. なぜ建設業にファクタリングが最適なのか
              </a>
            </li>
            <li>
              <a href="#recommended" className="hover:underline">
                3. 建設業向けおすすめファクタリング5選
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

        {/* ── 建設業の資金繰り課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            建設業の資金繰り課題
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            建設業は他の業種と比べて資金繰りが特に厳しい業種です。その構造的な原因を理解することが、適切な資金調達手段を選ぶ第一歩です。
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

        {/* ── なぜ建設業にファクタリングが最適か ─── */}
        <section id="why-factoring" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            なぜ建設業にファクタリングが最適なのか
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            建設業の資金繰り課題を解決するために、ファクタリングが特に効果的な理由を解説します。
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                入金サイトを短縮できる
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                60〜120日の入金サイトを最短即日に短縮できます。工事完了後すぐに資金化できるため、次の工事の準備に支障が出ません。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                元請けの信用力で審査が通りやすい
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの審査では売掛先（元請け）の信用力が重視されます。元請けが大手ゼネコンや官公庁であれば審査通過率が非常に高く、手数料も安くなります。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                赤字や税金滞納でも利用可能
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                建設業は利益率が低い業種であり、赤字決算になることも珍しくありません。ファクタリングは利用者自身の信用力よりも売掛先を重視するため、赤字でも利用できます。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                担保・保証人が不要
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                銀行融資では不動産担保や保証人が求められることがありますが、ファクタリングでは一切不要です。売掛債権そのものが「担保」となります。
              </p>
            </div>
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            建設業向けおすすめファクタリング5選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            建設業に強いファクタリング会社を厳選して5社紹介します。建設業特化型と大手総合型の両方を含めていますので、自社の状況に合った会社を選びましょう。
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
                    <p className="mt-3 text-sm leading-relaxed text-text-light">
                      <strong className="text-text-main">おすすめポイント：</strong>
                      {company.merit}
                    </p>
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
            実際に建設業でファクタリングを活用したケースを3つ紹介します。自社の状況と照らし合わせて参考にしてください。
          </p>
          <div className="space-y-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {useCase.title}
                </h3>
                <p className="mb-4 text-xs text-text-light">
                  業種：{useCase.industry}
                </p>
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
            建設業でファクタリングを利用する際に注意すべきポイントをまとめます。
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                元請けとの関係に配慮する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                3社間ファクタリングを利用する場合、元請けへの通知が必要です。元請けによっては「資金繰りに困っている」と見なされ、取引関係に悪影響を及ぼす可能性があります。元請けとの関係を重視する場合は、2社間ファクタリングを選択しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                手数料を含めたコスト管理を行う
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                建設業は利益率が低い業種のため、ファクタリング手数料が利益を圧迫する可能性があります。手数料を含めた工事原価を事前に計算し、採算が合うかを確認してから利用しましょう。継続利用する場合はリピート割引の活用も重要です。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                建設業法との関連に注意する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                建設業許可の要件には「財産的基礎」が含まれており、純資産額が500万円以上であることが求められます。ファクタリングの利用自体は建設業法に抵触しませんが、手数料による利益減少が財産的基礎の要件に影響しないよう注意が必要です。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                悪徳業者に注意する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                建設業向けを謳う悪徳ファクタリング業者も存在します。「手数料1%〜」などの極端な謳い文句や、契約書を交付しない業者には注意してください。会社の実在確認、契約書の内容確認、複数社からの見積もり比較を必ず行いましょう。
              </p>
            </div>
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
              href="/articles/transport/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">運送業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                燃料費・人件費の資金繰り改善ガイド
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
              href="/articles/screening-criteria/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングの審査基準</p>
              <p className="mt-1 text-sm text-text-light">
                審査で見るポイントと通過率を上げる方法
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

        {/* ── ファクタリング利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            建設業でのファクタリング利用の流れ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            建設業でファクタリングを利用する場合の一般的な流れを解説します。初めて利用する方でもスムーズに手続きが進むよう、ステップごとに確認しましょう。
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-bold text-text-main">ファクタリング会社に相談・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  電話またはWebから問い合わせ。売掛金の金額、売掛先（元請け）の情報、希望する入金日などを伝えます。建設業特化型の会社なら、工事の内容や進捗状況についても相談できます。複数社に同時に相談して見積もりを比較することをおすすめします。
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
                  身分証明書、請求書（または注文書）、通帳コピー、工事請負契約書などを提出します。建設業特化型の会社では出来高証明書や工事完了報告書の提出を求められる場合もあります。書類はメール、FAX、アップロードフォームで送付できる会社が多いです。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  ファクタリング会社が売掛先（元請け）の信用力、売掛金の確実性、工事の内容などを審査します。審査時間は最短30分〜数時間。見積もりには手数料率、事務手数料、受取額が明記されます。見積もり内容に不明点があれば質問し、納得してから次のステップに進みましょう。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                4
              </span>
              <div>
                <h3 className="font-bold text-text-main">契約・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  見積もりに同意したら契約を締結。オンラインで完結する会社も多くあります。契約後、最短即日で指定口座に入金されます。契約書は必ず保管しておきましょう。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                5
              </span>
              <div>
                <h3 className="font-bold text-text-main">売掛金の回収（2社間の場合）</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  2社間ファクタリングの場合、元請けからの入金後にファクタリング会社へ送金します。3社間の場合は元請けが直接ファクタリング会社に支払うため、この手順は不要です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            建設業に強いファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            建設業の資金繰りに最適なファクタリング会社を手数料・入金速度・審査通過率で徹底比較。あなたに合ったサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
