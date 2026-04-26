import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "2社間ファクタリングおすすめ10選｜取引先に知られず即日資金化",
  description:
    "2社間ファクタリングのおすすめ10社を厳選比較。取引先に通知されず即日資金化できる2社間ファクタリングの仕組み、メリット・デメリット、3社間との違い、選び方のポイントを詳しく解説。手数料相場や注意点も紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/2sha-ranking/",
  },
  openGraph: {
    title: "2社間ファクタリングおすすめ10選｜取引先に知られず即日資金化",
    description:
      "取引先に知られず即日資金化。2社間ファクタリングのおすすめ10社と選び方を解説。",
    url: "https://factoring-partner.pages.dev/articles/2sha-ranking/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const companies = [
  { name: "ビートレーディング", fee: "2%〜12%", speed: "最短2時間", amount: "上限なし", features: "累計買取実績1,300億円以上の業界最大手級。法人・個人事業主対応。オンライン完結で面談不要。審査通過率が高く、幅広い業種に対応。" },
  { name: "日本中小企業金融サポート機構", fee: "1.5%〜10%", speed: "最短即日", amount: "上限なし", features: "一般社団法人が運営する非営利型のファクタリングサービス。手数料が業界最安水準。法人・個人事業主対応。経営コンサルティングも提供。" },
  { name: "QuQuMo（ククモ）", fee: "1%〜14.8%", speed: "最短2時間", amount: "上限なし", features: "完全オンライン完結型。クラウドサインによる電子契約。必要書類は請求書と通帳コピーの2点のみ。法人の大口案件にも対応。" },
  { name: "アクセルファクター", fee: "2%〜20%", speed: "最短即日", amount: "30万〜1億円", features: "審査通過率93%以上。年間相談件数15,000件以上。少額から利用可能。赤字決算・税金滞納でも柔軟に対応。個人事業主OK。" },
  { name: "ペイトナーファクタリング", fee: "一律10%", speed: "最短10分", amount: "1万〜100万円", features: "フリーランス・個人事業主に特化。電話・面談なしで完全オンライン。AI審査で最短10分入金。シンプルな手数料体系。" },
  { name: "ラボル（labol）", fee: "一律10%", speed: "最短60分", amount: "1万〜上限なし", features: "24時間365日対応。土日祝日も入金可能。フリーランス・個人事業主向け。請求書と本人確認書類の2点で申し込み可能。" },
  { name: "OLTA（オルタ）", fee: "2%〜9%", speed: "最短即日", amount: "上限なし", features: "クラウドファクタリングのパイオニア。完全オンラインで手数料が低い。大手銀行との提携実績あり。法人向けサービスに強み。" },
  { name: "PMG", fee: "2%〜", speed: "最短即日", amount: "上限なし", features: "年間取引実績が豊富な大手。対面コンサルティングに強み。高額案件に対応。東京・大阪に拠点。リピーター割引制度あり。" },
  { name: "フリーナンス即日払い", fee: "3%〜10%", speed: "最短即日", amount: "1万〜上限なし", features: "GMOグループ運営。フリーランス向け。フリーナンス口座の利用実績で手数料が下がる仕組み。損害賠償保険が無料付帯。" },
  { name: "トップ・マネジメント", fee: "3.5%〜12.5%", speed: "最短即日", amount: "30万〜3億円", features: "創業15年以上の実績。最大3億円の高額買取に対応。法人専用。対面・オンラインどちらも対応可能。注文書ファクタリングにも対応。" },
];

const twoShaVsThreeSha = [
  { label: "当事者", twoSha: "利用者とファクタリング会社の2社", threeSha: "利用者・ファクタリング会社・売掛先の3社" },
  { label: "取引先への通知", twoSha: "不要（知られない）", threeSha: "必要（承諾が必要）" },
  { label: "手数料相場", twoSha: "5%〜20%", threeSha: "1%〜10%" },
  { label: "資金化スピード", twoSha: "最短即日", threeSha: "数日〜1週間" },
  { label: "審査難易度", twoSha: "やや厳しい", threeSha: "通りやすい" },
  { label: "未回収リスク", twoSha: "ファクタリング会社が負担", threeSha: "ファクタリング会社が負担" },
];

const faqs = [
  {
    question: "2社間ファクタリングとは何ですか？",
    answer: "2社間ファクタリングとは、利用者（売掛金を持つ事業者）とファクタリング会社の2社間だけで行う売掛債権の売買取引です。売掛先（取引先）にファクタリングの利用を通知する必要がないため、取引関係に影響を与えずに資金調達が可能です。売掛先からの入金は一旦利用者の口座に入り、そこからファクタリング会社に支払います。",
  },
  {
    question: "2社間ファクタリングの手数料相場はどのくらいですか？",
    answer: "2社間ファクタリングの手数料は5%〜20%程度が相場です。3社間ファクタリング（1%〜10%）と比べて高めですが、これは売掛先への通知なしで行うため、ファクタリング会社のリスクが高くなるためです。手数料を下げるには、売掛先の信用力が高い債権を選ぶ、複数社で見積もりを比較する、継続利用でリピート割引を受けるなどの方法があります。",
  },
  {
    question: "2社間ファクタリングで取引先に知られるリスクはゼロですか？",
    answer: "基本的に2社間ファクタリングでは取引先に通知されませんが、完全にゼロとは言い切れません。ファクタリング会社が債権譲渡登記を行う場合、登記情報を調べれば債権譲渡の事実が判明する可能性があります。ただし、通常の取引先が登記情報を調べることはほとんどないため、実務上知られるリスクは非常に低いです。",
  },
  {
    question: "2社間ファクタリングは違法ではないですか？",
    answer: "2社間ファクタリングは合法です。2020年の民法改正により、債権譲渡禁止条項がある売掛金でも譲渡が有効と認められるようになりました。ただし、「ファクタリング」を装った実質的な貸金業（手数料が年利換算で極端に高い、償還請求権あり等）は違法となる場合があります。契約内容をしっかり確認しましょう。",
  },
  {
    question: "2社間と3社間、どちらを選ぶべきですか？",
    answer: "取引先との関係を重視する場合や、ファクタリングの利用を知られたくない場合は2社間がおすすめです。一方、手数料を最小限に抑えたい場合や、売掛先の承諾が得られる場合は3社間がお得です。まずは2社間で見積もりを取り、手数料が高いと感じたら3社間も検討するのがよいでしょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "2社間ファクタリングおすすめ10選｜取引先に知られず即日資金化",
  description: "取引先に知られず即日資金化。2社間ファクタリングのおすすめ10社と選び方を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/2sha-ranking/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "2社間ファクタリングおすすめ", item: "https://factoring-partner.pages.dev/articles/2sha-ranking/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function TwoShaRankingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "2社間ファクタリングおすすめ" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">おすすめランキング</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            2社間ファクタリングおすすめ10選
            <br className="hidden md:block" />
            取引先に知られず即日資金化
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            売掛先への通知不要で取引関係に影響なし。2社間ファクタリングに対応したおすすめ10社を手数料・入金速度で比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#what-is" className="hover:underline">1. 2社間ファクタリングとは</a></li>
            <li><a href="#comparison" className="hover:underline">2. 2社間 vs 3社間の比較</a></li>
            <li><a href="#ranking" className="hover:underline">3. おすすめ10選</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 選び方のポイント</a></li>
            <li><a href="#caution" className="hover:underline">5. 利用時の注意点</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 2社間ファクタリングとは ─── */}
        <section id="what-is" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">2社間ファクタリングとは</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            2社間ファクタリングは、利用者とファクタリング会社の2社間だけで完結する売掛債権の売買取引です。最大の特徴は<strong className="text-text-main">売掛先（取引先）にファクタリングの利用を通知する必要がない</strong>ことです。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 font-bold text-primary">2社間ファクタリングの流れ</h3>
            <div className="space-y-2 text-sm text-text-light">
              <p>1. 利用者がファクタリング会社に売掛債権を売却（契約）</p>
              <p>2. ファクタリング会社が利用者に買取代金を入金（手数料差引後）</p>
              <p>3. 売掛先が利用者に通常通り売掛金を支払い</p>
              <p>4. 利用者がファクタリング会社に売掛金を送金</p>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-text-light">
            売掛先は通常通り利用者に支払いを行うため、ファクタリングの利用を知ることはありません。取引関係を維持しながら資金調達できるのが2社間ファクタリングの最大の強みです。
          </p>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">2社間 vs 3社間の比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-left">2社間</th>
                  <th className="border border-primary p-3 text-left">3社間</th>
                </tr>
              </thead>
              <tbody>
                {twoShaVsThreeSha.map((item, i) => (
                  <tr key={item.label} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}>
                    <td className="border border-border p-3 font-semibold">{item.label}</td>
                    <td className="border border-border p-3">{item.twoSha}</td>
                    <td className="border border-border p-3">{item.threeSha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── おすすめ10選 ─── */}
        <section id="ranking" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">おすすめ10選</h2>
          <p className="mb-8 leading-relaxed text-text-light">2社間ファクタリングに対応したおすすめ10社を紹介します。</p>
          <div className="space-y-6">
            {companies.map((company, index) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">{company.name}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{company.features}</p>
                    <div className="mt-4 grid gap-3 rounded-lg bg-section-bg p-4 md:grid-cols-3">
                      <div>
                        <p className="text-xs font-semibold text-text-light">手数料</p>
                        <p className="font-bold text-primary">{company.fee}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">入金スピード</p>
                        <p className="font-bold text-secondary">{company.speed}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">買取額</p>
                        <p className="font-bold text-text-main">{company.amount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 選び方 ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">選び方のポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">2社間ファクタリング会社を選ぶ際のポイントを解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">手数料率で比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">2社間の手数料は5%〜20%と幅が広いため、必ず複数社から見積もりを取りましょう。売掛先の信用力が高ければ下限に近い手数料で利用できます。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">入金スピードを確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">急ぎの場合は最短即日〜2時間で入金される会社を選びましょう。ただし即日入金には午前中の申し込みが必要な場合が多いです。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">償還請求権の有無を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">正規のファクタリングは償還請求権なし（ノンリコース）です。売掛先が倒産しても利用者に返金義務が生じない契約を選びましょう。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">債権譲渡登記の要否を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">2社間ファクタリングでは債権譲渡登記を求められることがあります。登記には費用（数万円）がかかるため、登記不要の会社を選ぶとコストを抑えられます。</p>
            </div>
          </div>
        </section>

        {/* ── 2社間ファクタリングの利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">2社間ファクタリングの利用の流れ</h2>
          <p className="mb-8 leading-relaxed text-text-light">2社間ファクタリングを利用する際の一般的な流れを解説します。</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">ファクタリング会社に相談・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">電話またはWebから問い合わせ。売掛金の金額、売掛先の情報、希望する入金日、2社間を希望する旨を伝えます。複数社に同時に相談して見積もりを比較するのがおすすめです。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">身分証明書（運転免許証等）、請求書、通帳コピー（売掛先からの入金実績の確認用）を提出します。会社によっては決算書や確定申告書が不要で、請求書と通帳の2点のみで済む場合もあります。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">ファクタリング会社が売掛先の信用力や取引実績を審査し、買取可能額と手数料率を提示します。2社間の場合、売掛先への確認が不要なため審査がスピーディーです。最短30分〜数時間で結果が出ます。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">4</span>
              <div>
                <h3 className="font-bold text-text-main">契約締結・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">見積もりに同意したら売掛債権の譲渡契約を締結。オンライン完結の会社なら電子契約で対応。契約後、手数料を差し引いた金額が指定口座に入金されます。最短即日〜2時間で入金される会社もあります。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">5</span>
              <div>
                <h3 className="font-bold text-text-main">売掛先からの入金後にファクタリング会社へ送金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">売掛先から通常通り入金されたら、すみやかにファクタリング会社に全額を送金します。これで取引完了です。送金を遅延すると契約違反となるため注意してください。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 業種別おすすめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">業種・事業規模別のおすすめ2社間ファクタリング</h2>
          <p className="mb-6 leading-relaxed text-text-light">業種や事業規模に応じた2社間ファクタリングの選び方を紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">フリーランス・個人事業主（少額）</h3>
              <p className="text-sm leading-relaxed text-text-light">ペイトナー（最短10分・1万円〜）やラボル（最短60分・1万円〜）がおすすめ。面談不要・書類最小限で、少額の売掛金でも手軽に利用できます。手数料は一律10%とシンプルな料金体系です。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">中小法人（50万〜500万円）</h3>
              <p className="text-sm leading-relaxed text-text-light">ビートレーディング、QuQuMo、OLTAがおすすめ。手数料が2%〜と低く、オンライン完結で面談不要。必要書類も請求書と通帳の2点のみの会社が多く、効率的に利用できます。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">中堅法人（500万円〜数千万円）</h3>
              <p className="text-sm leading-relaxed text-text-light">ビートレーディング、PMG、トップ・マネジメントがおすすめ。高額案件に対応でき、対面でのコンサルティングも受けられます。手数料の交渉もしやすく、大口取引で有利な条件を引き出せます。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">建設業・運送業（業種特化）</h3>
              <p className="text-sm leading-relaxed text-text-light">業種特有の入金サイトや商慣習を理解した会社を選びましょう。建設業はけんせつくん・土建くん、運送業はビートレーディング・アクセルファクターなどが実績豊富です。注文書ファクタリングに対応している会社もあります。</p>
            </div>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用時の注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">売掛金の二重譲渡は詐欺罪になる</h3>
              <p className="text-sm leading-relaxed text-text-light">同じ売掛金を複数のファクタリング会社に売却する「二重譲渡」は詐欺罪に該当します。1つの売掛金は1社にのみ売却してください。債権譲渡登記がある場合は二重譲渡を防止する仕組みがありますが、登記がない場合でも二重譲渡は絶対に行わないでください。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">売掛先からの入金はすみやかにファクタリング会社へ</h3>
              <p className="text-sm leading-relaxed text-text-light">2社間ファクタリングでは、売掛先からの入金は一旦利用者の口座に入ります。この入金をファクタリング会社に送金せずに流用すると契約違反となり、法的措置を取られる可能性があります。入金があったらすみやかに送金してください。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">悪徳業者に注意する</h3>
              <p className="text-sm leading-relaxed text-text-light">2社間ファクタリングを装った実質的な「貸金業」を行う悪徳業者が存在します。手数料が年利換算で極端に高い、償還請求権がある、担保や保証人を求められるなどの場合は違法な貸金業の可能性があります。契約書の内容を必ず確認してください。</p>
            </div>
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

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/2sha-vs-3sha/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">2社間 vs 3社間を徹底比較</p>
              <p className="mt-1 text-sm text-text-light">それぞれのメリット・デメリット</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くするコツも紹介</p>
            </Link>
            <Link href="/articles/instant-factoring/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">即日入金ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">最短即日で資金調達</p>
            </Link>
            <Link href="/articles/is-it-legal/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングは合法？</p>
              <p className="mt-1 text-sm text-text-light">法的根拠と違法業者の見分け方</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">2社間ファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            取引先に知られず即日資金化。2社間ファクタリングのおすすめ会社を手数料・入金速度で徹底比較。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
