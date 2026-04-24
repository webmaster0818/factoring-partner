import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "製造業向けファクタリングガイド｜仕入れ資金・設備投資の資金調達",
  description:
    "製造業向けファクタリングを徹底解説。原材料の仕入れ資金、設備投資、長い入金サイトなど製造業特有の課題、おすすめファクタリング会社5選、活用事例、手数料相場を詳しく紹介します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/manufacturing/",
  },
  openGraph: {
    title:
      "製造業向けファクタリングガイド｜仕入れ資金・設備投資の資金調達",
    description:
      "製造業の資金繰り課題をファクタリングで解決。おすすめ5社と活用事例を紹介。",
    url: "https://factoring-partner.pages.dev/articles/manufacturing/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "原材料・部品の仕入れ資金が先行して必要",
    description:
      "製造業では、製品を作るために原材料や部品を先に仕入れる必要があります。鉄鋼・樹脂・電子部品などの仕入れは現金払いや短期サイト（30日以内）が多い一方、完成品の納品後の入金は60〜90日先。この資金ギャップが常態化し、特に受注が増える時期には運転資金が大幅に不足します。",
  },
  {
    title: "設備投資・メンテナンス費用が大きい",
    description:
      "製造業は工作機械、プレス機、射出成形機などの高額な設備を必要とします。設備の老朽化による突発的な修繕費用や、新規受注に対応するための設備投資は数百万〜数千万円規模になることも。銀行融資の審査を待つ間に受注機会を逃してしまうリスクがあります。",
  },
  {
    title: "入金サイトが60〜120日と長い",
    description:
      "製造業の入金サイトは60〜120日が一般的で、自動車部品や電子機器の下請けでは90日以上になることも珍しくありません。大手メーカーとの取引では手形払いが残っているケースもあり、実質的な入金まで120日以上かかることもあります。",
  },
  {
    title: "季節変動・受注変動が大きい",
    description:
      "製造業は季節要因や景気動向による受注の変動が大きい業種です。繁忙期には材料の大量仕入れが必要ですが、前期の売掛金が未回収のため資金が不足するケースが多発します。逆に閑散期には売上が減少し、固定費（人件費・リース料）の支払いが困難になることもあります。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features:
      "累計取引9.1万社超の業界最大手。製造業の利用実績が豊富で、大口案件にも対応（買取上限なし）。2社間・3社間の両方に対応し、全国対応・来店不要。最短2時間でのスピード入金にも対応しています。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "製造業の取引構造を理解した柔軟な審査。大手メーカーへの売掛金なら低手数料が期待できる。高額案件にも上限なしで対応。",
  },
  {
    name: "PMG",
    features:
      "法人特化のファクタリング会社で、特に大口案件に強み。買取可能額50万円〜2億円。製造業・建設業など大きな売掛金を持つ業種に多く利用されている。専属担当者によるきめ細かいサポートが特徴。",
    fee: "1%〜",
    speed: "最短即日",
    merit:
      "大口の製造業案件に強い。専属担当者が付くため、資金繰りの相談も可能。リピーター割引で継続利用がお得。",
  },
  {
    name: "トップ・マネジメント",
    features:
      "手数料0.5%〜の業界最安水準。買取可能額30万円〜3億円と幅広く対応。2社間・3社間の両方に対応。ゼロファクという補助金申請と組み合わせたサービスも提供しており、製造業の設備投資に活用できます。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "業界最安水準の手数料で利益を圧迫しない。3億円までの大口対応。補助金との併用で設備投資もサポート。",
  },
  {
    name: "アクセルファクター",
    features:
      "審査通過率93.3%を公表。他社で断られた案件にも柔軟に対応。30万円〜1億円の幅広い買取額。最短即日入金に対応し、急な仕入れ資金にも対応できます。",
    fee: "2%〜",
    speed: "最短即日",
    merit:
      "審査通過率の高さで「最後の砦」として知られる。赤字決算でも利用可能。個人事業主の町工場にも対応。",
  },
  {
    name: "日本中小企業金融サポート機構",
    features:
      "一般社団法人運営の非営利型ファクタリング。手数料1.5%〜と業界最安水準。関東財務局長・関東経済産業局長の認定経営革新等支援機関。買取金額に制限なし。法人・個人事業主ともに利用可能。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利団体運営で信頼性が高い。認定経営革新等支援機関として資金繰り全般の相談も可能。低手数料で継続利用にも適している。",
  },
];

const useCases = [
  {
    title: "事例1：自動車部品メーカーが大口受注に対応",
    industry: "自動車部品製造（従業員50名）",
    problem:
      "大手自動車メーカーの1次サプライヤーから増産要請を受け、部品の月産数量を1.5倍に引き上げる必要が生じた。原材料（アルミ・樹脂）の追加仕入れに2,000万円が必要だが、既存の売掛金（90日サイト）が5,000万円あり、手元資金が不足。銀行融資は審査に2週間以上かかる見込み。",
    solution:
      "既存の売掛金3,000万円をビートレーディングで2社間ファクタリング。手数料4%で2,880万円を翌日に調達。原材料の追加仕入れと増産体制の整備に充当した。",
    result:
      "増産要請に予定通り対応し、大手メーカーとの取引量が拡大。年間売上が30%増加。ファクタリングは繁忙期の資金調達手段として定着し、銀行融資と使い分けて活用。",
  },
  {
    title: "事例2：金属加工の町工場が設備故障に緊急対応",
    industry: "金属加工業（従業員8名）",
    problem:
      "主力のCNC旋盤が故障し、修理費用に350万円が必要。修理しないと受注中の部品加工が停止し、納期遅延で取引先からの信用を失う恐れ。銀行からの追加融資は既存借入が多く難しい状況。",
    solution:
      "完了済みの加工案件の売掛金500万円をアクセルファクターで売却。手数料10%で450万円を即日調達。設備修理を翌日に手配した。",
    result:
      "設備修理を3日で完了し、納期遅延は最小限に抑えられた。取引先との信頼関係を維持。以降は設備メンテナンス費用の積立も開始し、突発的な出費への備えを強化。",
  },
  {
    title: "事例3：食品製造業が原材料価格高騰に対応",
    industry: "食品製造業（従業員25名）",
    problem:
      "小麦・食用油などの原材料価格が急騰し、月次の仕入れコストが前年比30%増加。大手小売チェーンとの取引は入金サイト60日で価格転嫁も難しく、運転資金が月500万円不足する状態が続いていた。",
    solution:
      "大手小売チェーンへの売掛金800万円を日本中小企業金融サポート機構で3社間ファクタリング。手数料2%で784万円を調達。小売チェーンにも事前に説明し了承を得た。",
    result:
      "安定した原材料仕入れが可能になり、生産を停止せずに済んだ。3社間のため手数料が低く、継続利用してもコスト負担が軽い。並行して銀行融資の増額交渉も進め、長期的な資金計画を策定。",
  },
];

const faqs = [
  {
    question: "製造業でファクタリングを利用するメリットは何ですか？",
    answer:
      "最大のメリットは、長い入金サイト（60〜120日）を最短即日に短縮し、原材料の仕入れ資金や設備投資の資金を確保できることです。銀行融資と異なり負債にならないため、既に借入が多い製造業でも利用可能です。また、売掛先（大手メーカーなど）の信用力で審査されるため、自社の業績が厳しくても利用しやすい点もメリットです。",
  },
  {
    question: "手形払いの売掛金もファクタリングに使えますか？",
    answer:
      "手形そのものは「手形割引」という別の金融サービスで現金化するのが一般的です。一方、手形が発行される前の段階（請求書ベース）であれば、ファクタリングを利用できます。最近は手形取引を廃止し、請求書ベースの取引に移行する大手メーカーが増えているため、ファクタリングを利用しやすい環境になりつつあります。",
  },
  {
    question: "仕入れ先への支払いが間に合わない場合、ファクタリングは有効ですか？",
    answer:
      "非常に有効です。ファクタリングは最短即日で資金化できるため、仕入れ先への支払い期日に間に合います。特に原材料の仕入れは現金払いや短期サイトが多いため、ファクタリングで素早く資金を確保し、仕入れ先との信頼関係を維持することが重要です。",
  },
  {
    question: "製造業向けファクタリングの手数料相場はどのくらいですか？",
    answer:
      "製造業の手数料相場は、2社間で5%〜18%、3社間で1%〜9%程度です。売掛先が大手メーカー（トヨタ、ソニー、パナソニックなど）や上場企業の場合は信用力が高いため、2%〜5%程度の低い手数料で利用できるケースもあります。手形払いの取引先よりも、請求書ベースの取引先の方がスムーズに利用できます。",
  },
  {
    question: "個人事業主の町工場でもファクタリングは利用できますか？",
    answer:
      "はい、個人事業主の町工場でもファクタリングは利用可能です。アクセルファクター、ベストファクターなど、個人事業主に対応しているファクタリング会社を選びましょう。必要書類は身分証明書・請求書・通帳コピーの3点で済む場合が多く、手続きも簡単です。売掛先が信頼できる企業であれば審査に通りやすいです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "製造業向けファクタリングガイド｜仕入れ資金・設備投資の資金調達",
  description:
    "製造業の資金繰り課題をファクタリングで解決。おすすめ5社と活用事例を紹介。",
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
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
      "https://factoring-partner.pages.dev/articles/manufacturing/",
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
      name: "製造業向けファクタリング",
      item: "https://factoring-partner.pages.dev/articles/manufacturing/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ManufacturingPage() {
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
          { label: "製造業向けファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            業種特化ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            製造業向けファクタリングガイド
            <br className="hidden md:block" />
            仕入れ資金・設備投資の資金調達
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            原材料の仕入れ資金、設備投資、長い入金サイトなど、製造業特有の資金繰り課題をファクタリングで解決する方法を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. 製造業の資金繰り課題</a></li>
            <li><a href="#why-factoring" className="hover:underline">2. 製造業にファクタリングが適している理由</a></li>
            <li><a href="#recommended" className="hover:underline">3. 製造業向けおすすめファクタリング5選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用事例3選</a></li>
            <li><a href="#comparison" className="hover:underline">5. 銀行融資との比較</a></li>
            <li><a href="#caution" className="hover:underline">6. 利用時の注意点</a></li>
            <li><a href="#flow" className="hover:underline">7. ファクタリング利用の流れ</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            製造業の資金繰り課題
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            製造業は「先に仕入れて、作って、売って、後から入金される」という構造上、常に運転資金の確保が課題となります。
          </p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── なぜ製造業にファクタリングが最適か ─── */}
        <section id="why-factoring" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            製造業にファクタリングが適している理由
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            製造業はファクタリングの恩恵を特に受けやすい業種です。その理由を4つ解説します。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">長い入金サイトを即座に短縮</h3>
              <p className="text-sm leading-relaxed text-text-light">
                60〜120日の入金サイトを最短即日に短縮。原材料の仕入れ代金を支払い、生産を止めずに済みます。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">大手メーカーの売掛金は審査に強い</h3>
              <p className="text-sm leading-relaxed text-text-light">
                売掛先が大手メーカーや上場企業であれば審査通過率が高く、手数料も優遇されます。製造業の下請け構造はファクタリングに有利に働きます。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">借入枠を温存できる</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングは負債にならないため、銀行の借入枠を設備投資用に温存できます。バランスシートを改善し、銀行融資の審査にもプラスに働きます。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">受注増加に素早く対応できる</h3>
              <p className="text-sm leading-relaxed text-text-light">
                急な増産要請や大口受注に対応するための仕入れ資金を、最短即日で調達可能。ビジネスチャンスを逃しません。
              </p>
            </div>
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            製造業向けおすすめファクタリング5選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            製造業の資金繰りに強いファクタリング会社を5社厳選しました。大口対応力と手数料の安さを重視して選定しています。
          </p>
          <div className="space-y-6">
            {recommendedCompanies.map((company, index) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">{company.name}</h3>
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
            製造業でファクタリングを活用した具体的なケースを紹介します。
          </p>
          <div className="space-y-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-2 text-lg font-bold text-primary">{useCase.title}</h3>
                <p className="mb-4 text-xs text-text-light">業種：{useCase.industry}</p>
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

        {/* ── 銀行融資との比較 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング vs 銀行融資 製造業向け比較
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            製造業でよく利用される銀行融資とファクタリングの違いを比較します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">比較項目</th>
                  <th className="border border-primary p-3 text-left">ファクタリング</th>
                  <th className="border border-primary p-3 text-left">銀行融資</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">調達スピード</td>
                  <td className="border border-border p-3">最短即日〜2時間</td>
                  <td className="border border-border p-3">2週間〜1ヶ月</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">コスト</td>
                  <td className="border border-border p-3">手数料2%〜18%</td>
                  <td className="border border-border p-3">年利1%〜5%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">審査基準</td>
                  <td className="border border-border p-3">売掛先の信用力重視</td>
                  <td className="border border-border p-3">自社の業績・財務状況重視</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">担保・保証人</td>
                  <td className="border border-border p-3">不要</td>
                  <td className="border border-border p-3">必要な場合が多い</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">バランスシートへの影響</td>
                  <td className="border border-border p-3">負債にならない</td>
                  <td className="border border-border p-3">負債として計上</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">適した用途</td>
                  <td className="border border-border p-3">仕入れ資金・つなぎ資金</td>
                  <td className="border border-border p-3">設備投資・長期運転資金</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            製造業では両方を使い分けるのが最も効果的です。急な仕入れ資金にはファクタリング、計画的な設備投資には銀行融資を活用しましょう。
          </p>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            利用時の注意点
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">手数料が利益率を上回らないか確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                製造業の利益率は業種によって3%〜10%程度と低い場合があります。ファクタリング手数料が製品の利益率を上回ると赤字になるため、案件ごとの採算性を事前に計算しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">取引先との契約内容を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                大手メーカーとの取引契約に債権譲渡禁止特約が含まれていることがあります。民法改正で法的には有効ですが、2社間ファクタリングで通知不要の方式を選ぶのが安全です。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">継続利用のコスト管理を徹底する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                毎月ファクタリングを利用すると手数料が年間で大きな金額になります。一時的なつなぎ資金として活用し、並行して銀行融資や資金繰り改善に取り組みましょう。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">複数社から見積もりを取る</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリング会社によって手数料が大きく異なります。特に大口案件は交渉の余地があるため、必ず2〜3社から見積もりを取り、比較検討しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            製造業でのファクタリング利用の流れ
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "ファクタリング会社に相談・申し込み", desc: "電話またはWebから問い合わせ。売掛金の金額、売掛先の情報、必要な資金額と時期を伝えます。複数社に同時に相談するのがおすすめです。" },
              { step: "2", title: "必要書類の提出", desc: "請求書、本人確認書類、通帳コピー、決算書（法人の場合）を提出。製造業では納品書や受注書を求められる場合もあります。" },
              { step: "3", title: "審査・見積もり", desc: "売掛先の信用力を中心に審査。大手メーカーへの売掛金であれば審査は比較的スムーズです。最短30分〜数時間で結果が出ます。" },
              { step: "4", title: "契約・入金", desc: "見積もり内容に同意したら契約締結。オンラインまたは対面で契約後、最短即日で指定口座に入金されます。" },
              { step: "5", title: "売掛金の回収・送金", desc: "2社間ファクタリングの場合、売掛先からの入金後にファクタリング会社へ送金。3社間の場合は売掛先が直接ファクタリング会社に支払います。" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-text-main">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 製造業の業種別ポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            製造業の業種別：ファクタリング活用ポイント
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">自動車部品製造</h3>
              <p className="text-sm leading-relaxed text-text-light">
                大手自動車メーカーへの売掛金は信用力が高く、手数料が最も低くなりやすい業種です。増産要請時の原材料仕入れ資金にファクタリングが特に有効。入金サイトは60〜90日が一般的で、3社間ファクタリングも活用しやすいです。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">食品製造業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                原材料価格の変動が大きく、仕入れコストの急増に対応する資金需要が高い。大手小売チェーンやコンビニへの売掛金は信用力が高く有利。季節商品（おせち、中元、歳暮など）の製造時期に特にファクタリングのニーズが高まります。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">金属加工・プレス加工</h3>
              <p className="text-sm leading-relaxed text-text-light">
                中小規模の町工場が多く、銀行融資だけでは運転資金が不足しがち。設備の老朽化による突発的な修繕費用にファクタリングが有効。個人事業主にも対応するアクセルファクターやベストファクターがおすすめです。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">電子部品・半導体関連</h3>
              <p className="text-sm leading-relaxed text-text-light">
                半導体不足やサプライチェーンの混乱により、原材料の確保に多額の先行投資が必要。大手電機メーカーへの売掛金を活用したファクタリングで、安定した部品調達を実現できます。
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

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">おすすめ5選と活用事例</p>
            </Link>
            <Link href="/articles/large-amount/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">大口ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">1億円超の高額取引に対応するおすすめ会社</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツも紹介</p>
            </Link>
            <Link href="/articles/vs-bank-loan/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリング vs 銀行融資</p>
              <p className="mt-1 text-sm text-text-light">違いと使い分けを徹底比較</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            製造業に強いファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            仕入れ資金・設備投資の資金繰りに最適なファクタリング会社を手数料・入金速度・買取可能額で徹底比較。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
