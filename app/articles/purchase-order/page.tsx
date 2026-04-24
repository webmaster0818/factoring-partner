import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "注文書ファクタリングとは？請求書発行前でも資金化できる仕組みを解説",
  description:
    "注文書ファクタリング（発注書ファクタリング）の仕組み、通常のファクタリングとの違い、メリット・デメリット、おすすめ会社、活用事例を徹底解説。請求書を発行する前の段階で売掛金を資金化できる仕組みを分かりやすく紹介。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/purchase-order/",
  },
  openGraph: {
    title: "注文書ファクタリングとは？請求書発行前でも資金化できる仕組みを解説",
    description: "注文書（発注書）で請求書前に資金化できるファクタリングの仕組みとおすすめ会社を解説。",
    url: "https://factoring-partner.pages.dev/articles/purchase-order/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const differences = [
  { item: "対象書類", normal: "請求書（納品・検収後）", po: "注文書・発注書（受注段階）" },
  { item: "資金化のタイミング", normal: "納品・検収後", po: "受注時点（作業開始前でも可）" },
  { item: "手数料相場", normal: "2%〜18%", po: "5%〜20%（やや高め）" },
  { item: "審査難易度", normal: "標準", po: "やや厳しい" },
  { item: "対応会社数", normal: "多い", po: "限定的" },
  { item: "主な利用業種", normal: "全業種", po: "建設業・製造業・IT業" },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "注文書ファクタリングにも対応する業界最大手。累計取引9.1万社超の実績。注文書・発注書をもとにした資金化が可能で、建設業やIT業界の利用実績が豊富。買取金額に上限なし。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "大手ならではの柔軟な対応。注文書段階でも審査ノウハウが豊富。大口案件にも対応。",
  },
  {
    name: "トップ・マネジメント",
    features: "注文書ファクタリングにも対応。手数料0.5%〜の業界最安水準。30万円〜3億円の幅広い買取額。ゼロファク（補助金連携）サービスも利用可能。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit: "手数料が低く、注文書ファクタリングのコストを抑えられる。3億円までの大口にも対応。",
  },
  {
    name: "PMG",
    features: "法人特化で大口案件に強い。注文書・発注書をベースにしたファクタリングにも対応。50万円〜2億円の買取に対応。建設業・製造業の利用実績が豊富。",
    fee: "1%〜",
    speed: "最短即日",
    merit: "建設業・製造業の注文書ファクタリングに強み。専属担当者が丁寧にサポート。",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93.3%で柔軟な対応。注文書段階の売掛金にも柔軟に対応するケースあり。30万円〜1億円の買取に対応。最短即日入金。",
    fee: "2%〜",
    speed: "最短即日",
    merit: "審査が柔軟で、他社で断られた注文書案件にも対応できる可能性あり。",
  },
  {
    name: "ベストファクター",
    features: "柔軟な審査基準で注文書ベースの案件にも対応。30万円〜1億円の買取に対応。財務コンサルティングサービスも提供。",
    fee: "2%〜",
    speed: "最短即日",
    merit: "審査基準が柔軟で相談しやすい。初めての注文書ファクタリングにも丁寧に対応。",
  },
];

const faqs = [
  {
    question: "注文書ファクタリングと通常のファクタリングの違いは何ですか？",
    answer:
      "通常のファクタリングは納品・検収後に発行された請求書をもとに売掛金を資金化しますが、注文書ファクタリングは受注段階の注文書・発注書をもとに資金化します。つまり、仕事を完了する前の段階で資金を得られるのが最大の違いです。その分、手数料はやや高くなり、審査も慎重になります。",
  },
  {
    question: "注文書ファクタリングはどのような業種で利用されていますか？",
    answer:
      "主に建設業、製造業、IT業（受託開発）で利用されています。建設業では工事着工前の資材調達費、製造業では原材料の仕入れ資金、IT業では開発着手前のエンジニア確保費用など、受注から納品までに先行投資が必要な業種に適しています。",
  },
  {
    question: "注文書ファクタリングの手数料は通常より高いですか？",
    answer:
      "はい、一般的に通常のファクタリングよりも手数料は高めです。通常のファクタリングが2%〜18%程度なのに対し、注文書ファクタリングは5%〜20%程度が相場です。これは、納品・検収が完了していない段階での買取はリスクが高いためです。売掛先の信用力や注文書の内容によって手数料は変動します。",
  },
  {
    question: "注文書がキャンセルされた場合はどうなりますか？",
    answer:
      "注文書がキャンセルされた場合の取り扱いは契約内容によって異なります。ノンリコース（償還請求権なし）契約であればファクタリング会社がリスクを負いますが、注文書ファクタリングではリコース（償還請求権あり）契約やキャンセル時の返金条項が含まれていることが多いです。契約前に必ずキャンセル時の取り扱いを確認しましょう。",
  },
  {
    question: "注文書ファクタリングに対応している会社は多いですか？",
    answer:
      "通常のファクタリング（請求書ベース）に比べると、注文書ファクタリングに対応している会社は限られています。ビートレーディング、トップ・マネジメント、PMGなど一部の大手・中堅ファクタリング会社が対応しています。事前に「注文書・発注書でのファクタリングに対応しているか」を問い合わせましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "注文書ファクタリングとは？請求書発行前でも資金化できる仕組みを解説",
  description: "注文書（発注書）で請求書前に資金化できるファクタリングの仕組みとおすすめ会社を解説。",
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/purchase-order/" },
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
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "注文書ファクタリング", item: "https://factoring-partner.pages.dev/articles/purchase-order/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function PurchaseOrderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "注文書ファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">金額別ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            注文書ファクタリングとは？
            <br className="hidden md:block" />
            請求書発行前でも資金化できる仕組みを解説
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            注文書（発注書）の段階で売掛金を資金化できる「注文書ファクタリング」の仕組み、通常のファクタリングとの違い、おすすめ会社を詳しく解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#what-is" className="hover:underline">1. 注文書ファクタリングとは</a></li>
            <li><a href="#mechanism" className="hover:underline">2. 仕組みと流れ</a></li>
            <li><a href="#difference" className="hover:underline">3. 通常ファクタリングとの違い</a></li>
            <li><a href="#merit-demerit" className="hover:underline">4. メリット・デメリット</a></li>
            <li><a href="#recommended" className="hover:underline">5. おすすめ会社5選</a></li>
            <li><a href="#cases" className="hover:underline">6. 活用事例</a></li>
            <li><a href="#caution" className="hover:underline">7. 利用時の注意点</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 注文書ファクタリングとは ─── */}
        <section id="what-is" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">注文書ファクタリングとは</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">注文書ファクタリング</strong>（発注書ファクタリング）とは、取引先から受け取った注文書・発注書をもとに、納品・検収前の段階で売掛金を資金化できるファクタリングサービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            通常のファクタリングでは、商品の納品やサービスの提供が完了し、請求書を発行してから売掛金を売却します。しかし注文書ファクタリングでは、受注した時点で注文書を提出することで、作業を開始する前でも資金を調達できます。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            これにより、建設業の着工前の資材調達費、製造業の原材料仕入れ費、IT企業のエンジニア確保費など、受注から納品までに必要な先行投資の資金を確保できるようになります。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">注文書ファクタリングのポイント</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>注文書・発注書の段階で売掛金を資金化</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>納品前・検収前でも利用可能</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>建設業・製造業・IT業など先行投資が必要な業種に最適</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>通常のファクタリングよりも手数料はやや高め</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>対応している会社は限定的</span></li>
            </ul>
          </div>
        </section>

        {/* ── 仕組みと流れ ─── */}
        <section id="mechanism" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">注文書ファクタリングの仕組みと流れ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "取引先から注文書・発注書を受領", desc: "取引先（売掛先）から正式な注文書・発注書を受け取ります。金額、納期、支払い条件が記載されたものが必要です。" },
              { step: "2", title: "ファクタリング会社に注文書を提出", desc: "注文書、本人確認書類、通帳コピーなどをファクタリング会社に提出。取引先との契約書や過去の取引実績も求められる場合があります。" },
              { step: "3", title: "審査・見積もり", desc: "ファクタリング会社が取引先の信用力、注文内容の確実性、過去の取引実績を審査。通常のファクタリングよりも慎重な審査が行われます。" },
              { step: "4", title: "契約・入金", desc: "審査通過後、契約を締結。注文書の金額から手数料を差し引いた金額が指定口座に入金されます。" },
              { step: "5", title: "納品・検収後に取引先が支払い", desc: "商品の納品やサービスの提供を完了し、取引先の検収後に請求書を発行。取引先からの入金をファクタリング会社に送金します。" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">{item.step}</span>
                <div>
                  <h3 className="font-bold text-text-main">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 通常ファクタリングとの違い ─── */}
        <section id="difference" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">通常ファクタリングとの違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">比較項目</th>
                  <th className="border border-primary p-3 text-left">通常ファクタリング</th>
                  <th className="border border-primary p-3 text-left">注文書ファクタリング</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                {differences.map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}>
                    <td className="border border-border p-3 font-semibold text-text-main">{row.item}</td>
                    <td className="border border-border p-3">{row.normal}</td>
                    <td className="border border-border p-3">{row.po}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── メリット・デメリット ─── */}
        <section id="merit-demerit" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">メリット・デメリット</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-4 font-bold text-secondary">メリット</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>受注段階で資金を確保できる</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>着工前・製造前の仕入れ資金に使える</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>大型案件を資金不足で断る必要がなくなる</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>借入ではないため負債にならない</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>担保・保証人不要</span></li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-4 font-bold text-accent">デメリット</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>手数料が通常のファクタリングより高い</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>対応している会社が限られる</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>審査が通常より厳しい</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>注文キャンセル時のリスクがある</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>納品完了までの期間が長いと不利</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">注文書ファクタリングのおすすめ会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">注文書・発注書をベースにしたファクタリングに対応している会社を5社紹介します。</p>
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

        {/* ── 活用事例 ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">活用事例</h2>
          <div className="space-y-6">
            {[
              {
                title: "事例1：建設業が工事着工前の資材費を確保",
                industry: "建設業（下請け）",
                problem: "元請けから3,000万円の工事注文書を受領。着工に必要な資材費800万円と外注費500万円を先に支払う必要があるが、前の工事の売掛金はまだ入金されていない。",
                solution: "注文書をもとにビートレーディングで注文書ファクタリングを利用。3,000万円の注文書から手数料8%を差し引いた2,760万円のうち、必要な1,500万円分を調達。",
                result: "予定通り着工し、工期内に完了。元請けとの信頼関係を維持。以降は通常の請求書ファクタリングと注文書ファクタリングを使い分けて資金繰りを安定化。",
              },
              {
                title: "事例2：製造業が大口受注の原材料を先行調達",
                industry: "電子部品製造",
                problem: "大手メーカーから5,000万円の部品製造の発注書を受領。原材料費2,000万円を先に仕入れる必要があるが、手元資金は500万円のみ。銀行融資は審査に3週間かかる。",
                solution: "発注書をもとにPMGで注文書ファクタリングを利用。手数料6%で必要な2,000万円を5営業日で調達。",
                result: "原材料を予定通り調達し、納期に間に合わせた。大手メーカーとの取引が拡大し、年間の受注量が1.5倍に増加。",
              },
            ].map((useCase) => (
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

        {/* ── 業種別活用法 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">業種別：注文書ファクタリングの活用法</h2>
          <p className="mb-6 leading-relaxed text-text-light">注文書ファクタリングは業種によって活用方法が異なります。主な業種での活用ポイントを解説します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">建設業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                元請けからの工事注文書をもとに、着工前の資材費・外注費を調達。建設業特化型のファクタリング会社（けんせつくん、土建くんなど）は注文書対応に積極的です。工事請負契約書と合わせて提出することで審査がスムーズに進みます。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">製造業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                大手メーカーからの部品製造の発注書をもとに、原材料の仕入れ資金を調達。定期的な取引関係がある売掛先の場合、注文書の信頼性が高く評価されます。量産品の場合は過去の取引実績が審査の重要なポイントになります。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">IT業（受託開発）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                システム開発の発注書をもとに、開発着手前のエンジニア確保費用を調達。長期プロジェクトの場合、マイルストーン単位で注文書を分割してもらうと、段階的にファクタリングを利用しやすくなります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 注文書ファクタリングの審査 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">注文書ファクタリングの審査ポイント</h2>
          <p className="mb-6 leading-relaxed text-text-light">注文書ファクタリングは通常のファクタリングよりも審査が慎重です。審査で重視されるポイントを解説します。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">審査項目</th>
                  <th className="border border-primary p-3 text-left">重要度</th>
                  <th className="border border-primary p-3 text-left">ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">売掛先の信用力</td>
                  <td className="border border-border p-3 font-bold text-accent">最重要</td>
                  <td className="border border-border p-3">上場企業・大手企業・官公庁なら非常に有利</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">注文書の正当性</td>
                  <td className="border border-border p-3 font-bold text-accent">最重要</td>
                  <td className="border border-border p-3">金額・納期・支払い条件が明記された正式な書面</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">過去の取引実績</td>
                  <td className="border border-border p-3 font-bold text-secondary">重要</td>
                  <td className="border border-border p-3">同じ売掛先との過去の取引履歴・入金履歴</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">納品までの期間</td>
                  <td className="border border-border p-3 font-bold text-secondary">重要</td>
                  <td className="border border-border p-3">期間が短いほど有利（リスクが低い）</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">キャンセルリスク</td>
                  <td className="border border-border p-3">参考</td>
                  <td className="border border-border p-3">注文のキャンセル可能性が低いか</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            審査に通りやすくするためには、過去の同じ取引先との取引履歴（通帳のコピー）を提出し、継続的な取引関係があることを示すのが効果的です。
          </p>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用時の注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">注文キャンセル時の取り扱いを確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">注文書ファクタリング最大のリスクは、取引先の都合で注文がキャンセルされるケースです。キャンセル時に返金義務があるのか、ファクタリング会社がリスクを負うのか、契約書で明確に確認しましょう。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">手数料が通常より高いことを認識する</h3>
              <p className="text-sm leading-relaxed text-text-light">注文書ファクタリングは納品前の段階で資金化するため、リスクが高い分、手数料も5%〜20%と通常のファクタリングより高めです。案件の利益率を考慮して利用を判断しましょう。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">対応会社が限られることを理解する</h3>
              <p className="text-sm leading-relaxed text-text-light">注文書ファクタリングに対応している会社は限定的です。事前に「注文書でのファクタリングに対応しているか」を確認してから申し込みましょう。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">正式な注文書・発注書が必要</h3>
              <p className="text-sm leading-relaxed text-text-light">口頭での発注やメールでの簡易的な依頼では注文書ファクタリングは利用できません。金額、納期、支払い条件が明記された正式な注文書・発注書が必要です。</p>
            </div>
          </div>
        </section>

        {/* ── 注文書ファクタリングの会計処理 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">注文書ファクタリングの会計処理</h2>
          <p className="mb-6 leading-relaxed text-text-light">注文書ファクタリングは通常のファクタリングと同様の会計処理を行います。注文書段階では売掛金が正式に発生していないため、一般的には「前受金」的な処理を行うケースもあります。具体的な処理方法は税理士にご確認ください。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 font-bold text-text-main">仕訳例：注文書1,000万円を手数料8%でファクタリング</h3>
            <div className="space-y-4">
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-2 text-sm font-semibold text-primary">ファクタリング契約時</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-text-light">
                  <p>（借方）未収入金 9,200,000円</p>
                  <p>（貸方）売掛金 10,000,000円</p>
                  <p>（借方）売掛債権売却損 800,000円</p>
                  <p></p>
                </div>
              </div>
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-2 text-sm font-semibold text-primary">入金時</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-text-light">
                  <p>（借方）普通預金 9,200,000円</p>
                  <p>（貸方）未収入金 9,200,000円</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-text-light">注文書ファクタリングの手数料80万円は「売掛債権売却損」として費用計上します。金額が大きいため、事前に税理士と処理方法を確認しておきましょう。</p>
          </div>
        </section>

        {/* ── 注文書ファクタリングを利用する前の確認事項 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">注文書ファクタリングを利用する前の確認事項</h2>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">注文書は正式なものか</strong>：正式な社印が押された注文書・発注書であることを確認。メールでの発注依頼だけでは利用できない場合があります。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">金額・納期・支払い条件は明記されているか</strong>：注文書に金額、納期、支払い条件が明確に記載されていることが審査の前提条件です。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">キャンセルリスクはないか</strong>：注文がキャンセルされる可能性がある案件は、注文書ファクタリングよりも通常のファクタリング（納品後）を待つ方が安全です。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">手数料は利益率に見合うか</strong>：注文書ファクタリングの手数料（5%〜20%）を含めても利益が出る案件か、事前に計算しましょう。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">通常のファクタリングで代替できないか</strong>：既存の完了済み案件の売掛金を通常のファクタリングで資金化できるなら、手数料が安い通常方式の方がお得です。</span></li>
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

        {/* ── 注文書ファクタリング vs 通常ファクタリング 使い分け ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">注文書ファクタリングと通常ファクタリングの使い分け</h2>
          <p className="mb-6 leading-relaxed text-text-light">両方のファクタリングを状況に応じて使い分けることで、最適な資金調達が可能になります。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">注文書ファクタリングを使うべきケース</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>大型案件を受注したが、着工前の仕入れ資金が不足している</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>既存の完了済み案件の売掛金がない（全て回収済み）</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>受注から納品までの期間が長く、その間の運転資金が必要</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>売掛先が大手企業で注文書の信頼性が高い</span></li>
              </ul>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">通常ファクタリングを使うべきケース</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>納品済み・検収済みの売掛金がある</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>手数料をできるだけ抑えたい（通常の方が安い）</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>入金サイトのギャップを埋めるためのつなぎ資金</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>毎月定期的にファクタリングを利用したい</span></li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            理想的な使い方は、通常のファクタリングをメインに活用し、注文書ファクタリングは大型案件の受注時など「通常のファクタリングでは対応できない場面」に限定することです。手数料の差を考慮して判断しましょう。
          </p>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">おすすめ5選と活用事例</p>
            </Link>
            <Link href="/articles/manufacturing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">製造業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">仕入れ資金・設備投資の資金調達</p>
            </Link>
            <Link href="/articles/what-is-factoring/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングとは？</p>
              <p className="mt-1 text-sm text-text-light">仕組み・種類・メリットを解説</p>
            </Link>
            <Link href="/articles/required-documents/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングの必要書類</p>
              <p className="mt-1 text-sm text-text-light">準備すべき書類一覧と注意点</p>
            </Link>
          </div>
        </section>

        {/* ── 注文書の準備チェックリスト ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">注文書ファクタリングに必要な書類チェックリスト</h2>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9633;</span><span><strong className="text-text-main">注文書・発注書</strong>：金額、納期、支払い条件が明記された正式な書面（社印付き）</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9633;</span><span><strong className="text-text-main">本人確認書類</strong>：代表者の運転免許証またはマイナンバーカード</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9633;</span><span><strong className="text-text-main">通帳コピー（3ヶ月分）</strong>：同じ取引先からの過去の入金履歴を証明</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9633;</span><span><strong className="text-text-main">取引先との基本契約書</strong>：継続的な取引関係の証明</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9633;</span><span><strong className="text-text-main">法人登記簿謄本</strong>：法人の場合に必要</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9633;</span><span><strong className="text-text-main">決算書</strong>：大口の場合に求められることがある</span></li>
            </ul>
          </div>
        </section>

        {/* ── 注文書ファクタリングのまとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">注文書ファクタリングのまとめ</h2>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">この記事のポイント</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>注文書ファクタリングは受注段階で資金化できる特殊なファクタリング</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料は通常のファクタリングより高め（5%〜20%）だが、先行投資の資金を確保できる</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>対応会社は限定的（ビートレーディング、トップ・マネジメント、PMG等）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>建設業・製造業・IT業（受託開発）に特に適している</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>注文キャンセル時の取り扱いを契約前に必ず確認すること</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>通常のファクタリングで対応できる場合はそちらの方が手数料が安い</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">注文書ファクタリング対応の会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            注文書・発注書段階で資金化できるファクタリング会社を手数料・対応力で比較。受注段階の資金調達を実現。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
