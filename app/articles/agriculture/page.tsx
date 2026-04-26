import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "農業向けファクタリング｜補助金・売掛金の資金繰り改善",
  description:
    "農業向けファクタリングを徹底解説。JA・卸売市場への売掛金の早期現金化、補助金の入金待ち期間の資金繰り対策、農業経営の資金調達方法、おすすめサービス、活用事例を紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/agriculture/",
  },
  openGraph: {
    title: "農業向けファクタリング｜補助金・売掛金の資金繰り改善",
    description: "農業の資金繰り課題とファクタリング活用法。補助金・売掛金の早期現金化を解説。",
    url: "https://factoring-partner.pages.dev/articles/agriculture/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "収穫・出荷から入金まで時間がかかる",
    description:
      "農産物をJA（農業協同組合）や卸売市場に出荷した場合、実際の入金まで30日〜90日かかることがあります。JAの場合は共販（共同販売）の精算が月1回で、出荷から入金まで1〜3ヶ月の開きがあることも珍しくありません。",
  },
  {
    title: "季節による収入の変動が大きい",
    description:
      "農業は季節に依存する産業であり、収穫期に売上が集中します。一方、種苗費・肥料代・農薬代・人件費（パート・アルバイト）などの経費は通年で発生するため、端境期の資金繰りが特に厳しくなります。",
  },
  {
    title: "設備投資の負担が大きい",
    description:
      "トラクター、コンバイン、ビニールハウス、冷蔵設備などの農業機械・設備は高額で、更新や新規導入に多額の資金が必要です。融資の審査に時間がかかると、作付けシーズンに間に合わないリスクがあります。",
  },
  {
    title: "補助金の入金が遅い",
    description:
      "農林水産省や各自治体の農業補助金は、申請から入金まで数ヶ月〜半年以上かかることがあります。補助金を見込んで先行投資したものの、入金が遅れて資金繰りに困るケースは少なくありません。",
  },
];

const applicableReceivables = [
  {
    title: "JAへの共販売上金",
    description: "JAに出荷した農産物の販売代金（共販精算金）は、JAからの入金予定額としてファクタリングの対象となります。JAの信用力が高いため、手数料が安くなる傾向にあります。",
  },
  {
    title: "卸売市場・仲卸業者への売掛金",
    description: "青果市場や花卉市場などの卸売市場、仲卸業者への売掛金もファクタリングの対象です。市場の規模や仲卸業者の信用力によって手数料が変動します。",
  },
  {
    title: "直販先（スーパー・飲食店）への売掛金",
    description: "スーパーマーケット、飲食店チェーン、食品加工会社などの法人への直接販売の売掛金はファクタリングに適しています。大手チェーンの場合は信用力が高く、好条件が期待できます。",
  },
  {
    title: "補助金の入金予定額",
    description: "交付決定済みの農業補助金も、ファクタリングの対象となる場合があります。ただし、対応しているファクタリング会社は限られるため、事前に確認が必要です。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "業界最大手級。農業を含む幅広い業種に対応。2社間・3社間対応。最短2時間入金。法人・個人事業主対応。オンライン完結可能。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "多様な業種の審査ノウハウが豊富。農業法人・個人農家の両方に対応。高額案件にも対応可能。",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。少額（30万円〜）対応。オンライン完結型。個人事業主対応。赤字決算でも柔軟対応。",
    fee: "2%〜",
    speed: "最短即日",
    merit: "審査通過率が高く、個人農家でも利用しやすい。少額からの利用が可能で、小規模農家にも対応。",
  },
  {
    name: "日本中小企業金融サポート機構",
    features: "一般社団法人が運営する非営利型。経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit: "非営利法人のため手数料が安い。農業事業者の利用にも対応。認定機関の安心感。",
  },
];

const useCases = [
  {
    title: "事例1：収穫前の運転資金を確保",
    problem: "水稲農家（個人事業主）。秋の収穫期に向けて肥料・農薬・パート雇用費で200万円が必要だが、前年の米の精算金（JA共販）の入金は3ヶ月先。銀行融資は審査に2週間かかる。",
    solution: "前期分のJA共販売上金（精算予定額）300万円をファクタリングで早期現金化。手数料5%で285万円を1週間で調達。",
    result: "必要な資材を適時に調達でき、作付けスケジュールに支障が出なかった。収穫後にJAからの精算金で手数料分のコストも回収。",
  },
  {
    title: "事例2：ビニールハウスの増設資金",
    problem: "野菜農家（農業法人）。需要増に対応するためビニールハウスを2棟増設したいが、設備費800万円のうち補助金（400万円）の入金が6ヶ月先。銀行融資と合わせても資金が不足。",
    solution: "大手スーパーチェーンへの野菜の売掛金（月200万円×3ヶ月分）をファクタリングで早期現金化。手数料4%で576万円を調達。",
    result: "ビニールハウスの増設を予定通り完了。生産量が1.5倍に増加し、年間売上が40%増加。補助金入金後にファクタリングのコストを回収。",
  },
];

const faqs = [
  {
    question: "農業でファクタリングは利用できますか？",
    answer:
      "はい、農業でもファクタリングは利用可能です。JAへの共販売上金、卸売市場・仲卸業者への売掛金、スーパーや飲食店チェーンへの直販の売掛金などがファクタリングの対象となります。農業法人だけでなく、個人農家（個人事業主）でも利用できるファクタリング会社が増えています。",
  },
  {
    question: "JAの共販売上金はファクタリングに使えますか？",
    answer:
      "はい、JAの共販売上金（精算予定額）はファクタリングの対象となります。JAは信用力が高い組織であるため、手数料が比較的安くなる傾向にあります。ただし、JAとの取引契約に債権譲渡禁止条項がないか事前に確認する必要があります。2社間ファクタリングであればJAへの通知は不要です。",
  },
  {
    question: "農業補助金の入金待ちにファクタリングは使えますか？",
    answer:
      "交付決定済みの農業補助金をファクタリングの対象にできる会社もありますが、対応している会社は限られます。補助金は公的機関からの入金のため信用力は高いですが、補助金の性質上、ファクタリング対象外とする会社もあるため事前確認が必要です。補助金待ちの期間は、既存の売掛金をファクタリングして資金繰りを改善する方法が一般的です。",
  },
  {
    question: "個人農家でもファクタリングは利用できますか？",
    answer:
      "はい、個人農家（個人事業主）でもファクタリングは利用可能です。アクセルファクター、ラボルなど個人事業主に対応したファクタリング会社を選びましょう。必要書類は身分証明書・請求書（または出荷伝票）・通帳コピーが基本です。確定申告書の提出を求められる場合もあります。",
  },
  {
    question: "農業向けファクタリングの手数料相場は？",
    answer:
      "農業向けファクタリングの手数料は、2社間で5%〜18%、3社間で1%〜9%程度が相場で、一般的なファクタリングと同水準です。売掛先がJAや大手スーパーチェーンなど信用力の高い先の場合は、手数料が安くなる傾向にあります。複数社の見積もりを比較して最も有利な条件を選びましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "農業向けファクタリング｜補助金・売掛金の資金繰り改善",
  description: "農業の資金繰り課題とファクタリング活用法。補助金・売掛金の早期現金化を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/agriculture/" },
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
    { "@type": "ListItem", position: 3, name: "農業向けファクタリング", item: "https://factoring-partner.pages.dev/articles/agriculture/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function AgriculturePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "農業向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種特化ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            農業向けファクタリング
            <br className="hidden md:block" />
            補助金・売掛金の資金繰り改善
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            JA共販の精算待ちや補助金の入金遅延など、農業特有の資金繰り課題をファクタリングで解決。売掛金の早期現金化の仕組みとおすすめサービスを紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. 農業の資金繰り課題</a></li>
            <li><a href="#receivables" className="hover:underline">2. ファクタリングに使える農業の売掛金</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社3選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用事例</a></li>
            <li><a href="#other-funding" className="hover:underline">5. 農業の他の資金調達方法との比較</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">農業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">農業は他の業種にはない独特の資金繰り課題を抱えています。季節性の高さと入金サイクルの長さが主な原因です。</p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 使える売掛金 ─── */}
        <section id="receivables" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリングに使える農業の売掛金</h2>
          <p className="mb-8 leading-relaxed text-text-light">農業では多様な取引先への売掛金がファクタリングの対象となります。自分の取引形態に合った売掛金を活用しましょう。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {applicableReceivables.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ3選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">おすすめファクタリング会社3選</h2>
          <p className="mb-8 leading-relaxed text-text-light">農業事業者のファクタリングに対応している会社を厳選して3社紹介します。</p>
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
          <p className="mb-8 leading-relaxed text-text-light">実際に農業事業者がファクタリングを活用したケースを紹介します。</p>
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
                    <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                    <p className="text-sm text-text-light">{uc.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 他の資金調達方法との比較 ─── */}
        <section id="other-funding" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">農業の他の資金調達方法との比較</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリング以外にも農業で利用できる資金調達方法があります。それぞれの特徴を理解し、最適な方法を選びましょう。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary px-4 py-3 text-left">調達方法</th>
                  <th className="border border-primary px-4 py-3 text-left">スピード</th>
                  <th className="border border-primary px-4 py-3 text-left">金利/手数料</th>
                  <th className="border border-primary px-4 py-3 text-left">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border px-4 py-3 font-medium text-text-main">ファクタリング</td>
                  <td className="border border-border px-4 py-3 text-text-light">即日〜1週間</td>
                  <td className="border border-border px-4 py-3 text-text-light">1%〜18%</td>
                  <td className="border border-border px-4 py-3 text-text-light">担保不要・審査が早い</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border px-4 py-3 font-medium text-text-main">日本政策金融公庫</td>
                  <td className="border border-border px-4 py-3 text-text-light">2〜4週間</td>
                  <td className="border border-border px-4 py-3 text-text-light">0.3%〜2%</td>
                  <td className="border border-border px-4 py-3 text-text-light">農業向け低金利融資が充実</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border px-4 py-3 font-medium text-text-main">JAの融資</td>
                  <td className="border border-border px-4 py-3 text-text-light">1〜3週間</td>
                  <td className="border border-border px-4 py-3 text-text-light">1%〜3%</td>
                  <td className="border border-border px-4 py-3 text-text-light">農業に精通した審査</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border px-4 py-3 font-medium text-text-main">農業補助金</td>
                  <td className="border border-border px-4 py-3 text-text-light">数ヶ月〜半年</td>
                  <td className="border border-border px-4 py-3 text-text-light">返済不要</td>
                  <td className="border border-border px-4 py-3 text-text-light">申請と入金に時間がかかる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ファクタリングは急ぎの資金調達に最適です。中長期的には日本政策金融公庫やJAの低金利融資を活用し、ファクタリングはつなぎ資金として位置づけるのが賢い使い方です。
          </p>
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

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/for-sole-proprietor/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">個人事業主向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">個人事業主の資金調達ガイド</p>
            </Link>
            <Link href="/articles/vs-subsidy/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリング vs 補助金</p>
              <p className="mt-1 text-sm text-text-light">資金調達方法の比較と使い分け</p>
            </Link>
            <Link href="/articles/cashflow-tips/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">資金繰り改善方法7選</p>
              <p className="mt-1 text-sm text-text-light">ファクタリング以外の選択肢も解説</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツも紹介</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">農業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            農業の売掛金に対応するファクタリング会社を手数料・入金スピードで比較。あなたの農業経営に最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
