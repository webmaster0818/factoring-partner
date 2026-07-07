import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "保育事業向けファクタリング｜委託費・売掛金の早期現金化",
  description:
    "保育園・保育事業者向けファクタリングを徹底解説。自治体からの委託費・給付費の入金待ちや人件費の先行負担など保育業界特有の資金繰り課題と、おすすめ3社、活用シーンを紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/childcare/",
  },
  openGraph: {
    title: "保育事業向けファクタリング｜委託費・売掛金の早期現金化",
    description: "保育事業の資金繰り課題とファクタリング活用法。委託費・給付費債権の早期現金化を解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/childcare/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "自治体からの委託費・給付費は入金が後日",
    description:
      "認可保育所などの運営費の中心である自治体からの委託費・給付費は、月々の請求・確認手続きを経て後日支払われる仕組みが一般的です。支払時期や手続きの詳細は自治体・制度により異なるため各自治体の公式情報での確認が必要ですが、いずれにしても保育サービスの提供が先・入金が後という構造は変わらず、その間の運転資金を自前で確保する必要があります。",
  },
  {
    title: "補助金・助成金の入金タイミング",
    description:
      "施設整備や処遇改善などの補助金・助成金は、申請から交付決定・入金までに期間がかかり、実績報告後の精算払いとなるものも多くあります。事業に必要な支出が先行し、補助金の入金がその後になるため、つなぎ資金の確保が課題になります。",
  },
  {
    title: "人件費の先行負担が大きい",
    description:
      "保育事業は保育士をはじめとする職員の人件費が支出の大きな割合を占める労働集約型の事業です。給与は毎月確実に発生する一方、委託費や補助金の入金は後になるため、手元資金に余裕がないとキャッシュフローが逼迫します。配置基準を満たす人員確保のための採用費・処遇改善も先行負担になります。",
  },
  {
    title: "施設整備・安全対策の費用負担",
    description:
      "園舎の修繕、遊具や送迎バスの安全対策、ICT化対応など、保育の質と安全を維持するための投資が継続的に必要です。補助金の対象になる場合でも支払いが先行することが多く、開園・増設時には特に大きな初期費用がかかります。",
  },
];

const factoringTypes = [
  {
    title: "委託費・給付費債権のファクタリング",
    description:
      "自治体に対する委託費・給付費などの債権をファクタリング会社に売却して早期現金化する方法です。売掛先が公的機関のため信用力が非常に高く、診療報酬や介護報酬のファクタリングと近い位置づけで、売掛先の承諾を得る3社間ファクタリングが中心になります。対応可否や条件は会社により異なるため、事前に相談しましょう。なお、債権譲渡に関する制度上の取り扱いは自治体・制度により異なるため、必ず各自治体の公式情報で確認してください。",
    merit: "売掛先が公的機関で信用力が高い・手数料が比較的低くなりやすい",
    demerit: "3社間が中心のため売掛先への通知・承諾が必要・入金まで数日かかることがある",
  },
  {
    title: "一般ファクタリング（法人向け売掛金）",
    description:
      "企業主導型保育の企業枠契約、法人向けの一時保育・受託事業など、民間の取引先に対する売掛金をファクタリング会社に売却して現金化します。2社間ファクタリングも可能で、取引先に知られずに利用できます。",
    merit: "2社間で取引先に知られない・最短即日入金",
    demerit: "手数料が公的機関向け債権より高くなりやすい（2社間8%〜18%程度が目安）",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "業界最大手級。幅広い業種の利用実績が豊富。2社間・3社間対応。最短2時間入金。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "公的機関向け債権を含む幅広い債権の審査ノウハウが豊富。高額案件にも対応し、全国の保育事業者から利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    features: "一般社団法人が運営する非営利型。経済産業大臣認定。診療報酬ファクタリングに対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit: "非営利法人のため手数料が業界最安水準。認定機関の安心感があり、公的な入金サイクルに悩む事業者が相談しやすい。",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。少額（30万円〜）対応。オンライン完結型。個人事業主にも対応。最短即日入金。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit: "審査通過率が高く、開園間もない小規模保育事業者でも利用しやすい。少額の売掛金にも対応。",
  },
];

const useCases = [
  {
    title: "シーン1：入金待ち期間の人件費支払い",
    problem: "委託費・給付費の入金前に職員の給与支払日が到来する。保育士の人件費は毎月確実に発生するため、入金サイクルとのずれで月末の資金繰りが厳しい。",
    solution: "自治体に対する委託費・給付費の債権をファクタリングで早期現金化し、給与支払いに充当する。売掛先が公的機関のため審査も進めやすい。",
    result: "給与の支払い遅延を回避し、職員の安心と保育の質を維持できる。借入ではないため負債を増やさずに資金ギャップを埋められる。",
  },
  {
    title: "シーン2：補助金入金までのつなぎ資金",
    problem: "施設の修繕や安全対策の工事を実施したが、補助金は実績報告後の精算払いのため入金までに期間がある。工事代金の支払いが先に必要で手元資金が不足しそう。",
    solution: "保有する売掛債権（委託費・給付費や法人向け売掛金）をファクタリングで現金化し、補助金入金までのつなぎ資金として活用する。",
    result: "工事代金を期日どおり支払い、補助金の入金後は通常の資金繰りに戻す。融資審査を待てない短期の資金ギャップに柔軟に対応できる。",
  },
];

const faqs = [
  {
    question: "保育事業でファクタリングを利用するメリットは？",
    answer:
      "保育事業がファクタリングを利用するメリットは、①委託費・給付費の入金待ち期間の資金ギャップを埋められる②担保・保証人不要③借入ではないため負債にならない④最短即日で資金調達可能⑤売掛先（自治体など）の信用力が重視されるため開園間もない施設でも利用しやすい、の5点です。特に人件費比率が高い保育事業では、入金前の給与支払い対策として有効です。",
  },
  {
    question: "自治体からの委託費・給付費はファクタリングの対象になりますか？",
    answer:
      "自治体に対する委託費・給付費などの債権は、売掛先が公的機関であるため信用力が高く、ファクタリングの対象になり得ます。診療報酬・介護報酬のファクタリングと近い位置づけで、3社間ファクタリングが中心です。ただし、対応可否や条件はファクタリング会社ごとに異なり、債権譲渡に関する制度上の取り扱いも自治体・制度により異なります。ファクタリング会社への相談とあわせて、必ず各自治体の公式情報を確認してください。",
  },
  {
    question: "保育事業向けファクタリングの手数料相場は？",
    answer:
      "手数料の一般的な目安は、2社間ファクタリングで8%〜18%、3社間ファクタリングで1%〜9%程度です（会社により異なります）。売掛先が自治体などの公的機関の場合は回収リスクが低いため、相対的に低い手数料になりやすい傾向がありますが、具体的な料率は債権の内容により異なるため、複数社から見積もりを取って比較しましょう。",
  },
  {
    question: "開園して間もない保育施設でも利用できますか？",
    answer:
      "はい、利用できる可能性があります。ファクタリングは利用者自身の業歴よりも売掛先の信用力を重視するため、売掛先が自治体などの公的機関であれば、開園間もない施設でも審査に通りやすい傾向があります。ただし債権の実在を確認できる書類（支払決定通知・請求書類など）は必要です。詳細は各社に確認しましょう。",
  },
  {
    question: "ファクタリングの利用は保護者や自治体に知られますか？",
    answer:
      "保護者にファクタリングの利用が知られることはありません。委託費・給付費債権の3社間ファクタリングでは売掛先である自治体への通知・承諾手続きが必要ですが、保護者への通知は一切ありません。法人向け売掛金で2社間ファクタリングを利用する場合は、取引先への通知なしで利用可能です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "保育事業向けファクタリング｜委託費・売掛金の早期現金化",
  description: "保育事業の資金繰り課題とファクタリング活用法。委託費・給付費債権の早期現金化を解説。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/childcare/" },
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
    { "@type": "ListItem", position: 3, name: "保育事業向けファクタリング", item: "https://hyogo-shihoushoshi.jp/articles/childcare/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ChildcarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "保育事業向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種特化ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            保育事業向けファクタリング
            <br className="hidden md:block" />
            委託費・売掛金の早期現金化
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            自治体からの委託費・給付費の入金待ちや人件費の先行負担など、保育事業特有の資金繰り課題をファクタリングで解決。債権の早期現金化の仕組みとおすすめサービスを紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. 保育事業の資金繰り課題</a></li>
            <li><a href="#types" className="hover:underline">2. 保育事業で使えるファクタリングの種類</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社3選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用シーン</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">保育事業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">保育園などの保育事業は一般企業とは異なる資金繰りの課題を抱えています。特に委託費・給付費の入金サイクルと人件費の先行負担が大きな問題です。</p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 種類 ─── */}
        <section id="types" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">保育事業で使えるファクタリングの種類</h2>
          <p className="mb-8 leading-relaxed text-text-light">保育事業で利用できるファクタリングは大きく2種類あります。それぞれの特徴を理解して、自園に最適な方法を選びましょう。</p>
          <div className="space-y-6">
            {factoringTypes.map((type) => (
              <div key={type.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 text-lg font-bold text-primary">{type.title}</h3>
                <p className="mb-4 leading-relaxed text-text-light">{type.description}</p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-secondary">メリット</p>
                    <p className="text-sm text-text-light">{type.merit}</p>
                  </div>
                  <div className="rounded-lg bg-orange-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-accent">デメリット</p>
                    <p className="text-sm text-text-light">{type.demerit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ3選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">おすすめファクタリング会社3選</h2>
          <p className="mb-8 leading-relaxed text-text-light">保育事業のファクタリングに対応している会社を厳選して3社紹介します。</p>
          <div className="space-y-6">
            {recommendedCompanies.map((company, index) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
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
                      <strong className="text-text-main">おすすめポイント：</strong>{company.merit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 活用シーン ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">活用シーン</h2>
          <p className="mb-8 leading-relaxed text-text-light">保育事業でファクタリングが活用される一般的なパターン（想定例）を紹介します。</p>
          <div className="space-y-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-4 text-lg font-bold text-primary">{uc.title}</h3>
                <div className="space-y-3">
                  <div className="rounded-lg bg-orange-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                    <p className="text-sm text-text-light">{uc.problem}</p>
                  </div>
                  <div className="rounded-lg bg-primary-light p-4">
                    <p className="mb-1 text-sm font-semibold text-primary">解決策</p>
                    <p className="text-sm text-text-light">{uc.solution}</p>
                  </div>
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-secondary">期待できる効果</p>
                    <p className="text-sm text-text-light">{uc.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用の流れ</h2>
          <p className="mb-8 leading-relaxed text-text-light">保育事業者がファクタリングを利用する際の一般的な流れを解説します。</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">ファクタリング会社に相談・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">電話またはWebで問い合わせ。債権の種類（委託費・給付費か法人向け売掛金か）、金額、希望入金日を伝えます。複数社に同時に相談して見積もりを比較することをおすすめします。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">身分証明書、債権の存在を示す書類（支払決定通知・請求書類・契約書など）、通帳コピーなどを提出します。必要書類は会社や債権の種類により異なるため事前に確認しましょう。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">売掛先の信用力、債権の内容、運営状況などを審査。売掛先が自治体などの公的機関の場合は信用力が評価されやすいです。見積もりで手数料率と受取額を必ず確認しましょう。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">4</span>
              <div>
                <h3 className="font-bold text-text-main">契約・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">見積もりに同意したら契約を締結。3社間の場合は売掛先への通知・承諾手続きも行います。契約後、最短即日〜数日で指定口座に入金されます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 委託費・給付費債権ファクタリングのポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">委託費・給付費債権ファクタリングのポイント</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            保育事業のファクタリングで中心となるのは、自治体に対する委託費・給付費などの債権です。利用前に押さえておきたいポイントをまとめます。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">対象となる債権</strong>：自治体に対する委託費・給付費などの債権が中心。保護者から直接受け取る保育料は対象外が一般的</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">手数料の目安</strong>：一般的な相場は2社間8%〜18%、3社間1%〜9%程度（会社により異なる）。公的機関向け債権は回収リスクが低いため相対的に低くなりやすい</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">審査のポイント</strong>：売掛先（自治体）の支払実績、債権の実在を確認できる書類、施設の運営状況など</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">注意点</strong>：委託費・給付費の債権譲渡に関する制度上の取り扱いは自治体・制度により異なります。ファクタリング会社への相談とあわせて、必ず各自治体の担当窓口や公式情報で確認してください</span>
              </li>
            </ul>
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

                {/* ── 関連ツール・データ ─── */}
                <section className="mb-12">
                  <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
                    <p className="mb-3 font-bold text-primary">あなたの業種・状況に合う会社を探す</p>
                    <ul className="space-y-2 text-sm text-text-light">
                    <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
                    <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
                    <li><Link href="/articles/industry-hub/" className="font-medium text-primary underline">業種別ファクタリングガイド</Link>｜他の業種の傾向や、業種を問わない選び方もまとめています。</li>
                    <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
                    <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
                    </ul>
                  </div>
                </section>

{/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/nursing-care/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">介護事業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">介護報酬の早期現金化ガイド</p>
            </Link>
            <Link href="/articles/medical/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">医療・介護ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">診療報酬・介護報酬の早期現金化</p>
            </Link>
            <Link href="/articles/subsidy-bridge/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">補助金入金待ちのつなぎ資金</p>
              <p className="mt-1 text-sm text-text-light">補助金とファクタリングの併用法</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツも紹介</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">保育事業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            公的機関向け債権に対応する会社を手数料・入金スピードで徹底比較。あなたの施設に最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
