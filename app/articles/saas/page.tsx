import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "システム開発・SaaS企業向けファクタリング｜月額課金の資金繰り",
  description:
    "システム開発会社・SaaS企業向けファクタリングを徹底解説。受託開発費やSaaS利用料の入金サイトの長さを解消し、エンジニア人件費の支払いに対応する方法を紹介。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/saas/",
  },
  openGraph: {
    title: "システム開発・SaaS企業向けファクタリング｜月額課金の資金繰り",
    description: "IT企業の資金繰り改善にファクタリングを活用。開発費・SaaS利用料の早期現金化を解説。",
    url: "https://factoring-partner.pages.dev/articles/saas/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "受託開発の検収・入金サイトが長い",
    description:
      "システム開発は納品後に検収工程があり、さらに検収完了から入金まで1〜2ヶ月かかるのが一般的です。大型プロジェクトでは開発期間も含めると、着手から入金まで半年以上になることもあります。",
  },
  {
    title: "エンジニア人件費の先行支出",
    description:
      "システム開発の最大コストはエンジニアの人件費です。プロジェクト開始時から毎月給与が発生しますが、売上が入金されるのはプロジェクト完了後。この時間差が資金繰りを圧迫します。",
  },
  {
    title: "SaaSの月額課金と入金タイミングのずれ",
    description:
      "BtoB SaaS企業は月額課金モデルですが、法人顧客は請求書払い（月末締め翌月末払い）が一般的です。顧客数が増えるほど売上は伸びますが、入金までの資金ギャップも大きくなります。",
  },
  {
    title: "SES事業の支払いサイト問題",
    description:
      "SES（システムエンジニアリングサービス）事業では、エンジニアへの給与は毎月発生しますが、クライアントからの入金は翌月末〜翌々月末になることが多いです。エンジニアの稼働人数が増えるほど資金ギャップが拡大します。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "業界最大手級。IT企業の利用実績多数。高額案件（数千万円〜）にも対応。最短2時間入金。",
    fee: "2%〜",
    speed: "最短2時間",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。30万円〜の少額対応。スタートアップ企業の利用実績あり。即日入金対応。",
    fee: "2%〜",
    speed: "最短即日",
  },
  {
    name: "QuQuMo（ククモ）",
    features: "手数料1%〜の低コスト。オンライン完結で忙しいエンジニアにも最適。請求書と通帳のみで審査。",
    fee: "1%〜",
    speed: "最短2時間",
  },
  {
    name: "日本中小企業金融サポート機構",
    features: "非営利法人運営。経済産業大臣認定。低手数料で安心。IT企業の利用増加中。",
    fee: "1.5%〜",
    speed: "最短即日",
  },
  {
    name: "ラボル",
    features: "フリーランスエンジニア向け。1万円〜利用可能。24時間365日振込。手数料一律10%。",
    fee: "10%固定",
    speed: "最短60分",
  },
];

const useCases = [
  {
    title: "大手企業向けシステム開発費の早期入金",
    situation: "大手金融機関から基幹システム開発を受注。開発費3,000万円は納品・検収完了後60日後に入金予定。エンジニア10名の月額人件費800万円が毎月発生。",
    solution: "中間成果物の検収を経た確定売掛金をファクタリングで買取。手数料3%で早期に資金を確保し、エンジニアの給与支払いを安定化。",
  },
  {
    title: "SaaS企業の急成長期の資金確保",
    situation: "BtoB SaaSの月間売上が500万円に成長。しかし法人顧客の入金は翌月末〜翌々月末。サーバー費用・開発チームの人件費の支払いが売上入金を上回る状態。",
    solution: "確定済みの月額利用料の請求書をファクタリングで毎月現金化。成長投資（マーケティング・採用）に資金を回し、事業拡大を加速。",
  },
  {
    title: "SES事業のエンジニア稼働増加への対応",
    situation: "SES事業で新規クライアント獲得。エンジニア5名の常駐が決定したが、初月の給与250万円の支払いが先行。クライアントからの入金は翌々月15日。",
    solution: "既存クライアントへの確定売掛金をファクタリングで現金化。新規常駐エンジニアの給与を確保し、受注機会を逃さず売上拡大を実現。",
  },
];

const itBusinessTypes = [
  {
    type: "受託開発会社",
    description: "Webシステム・業務システム・アプリ開発など受託開発を行う企業。プロジェクト完了後の検収・入金待ち期間の資金繰りにファクタリングが有効です。",
  },
  {
    type: "SaaS企業",
    description: "BtoB SaaSを提供する企業。月額課金の入金待ち期間や、急成長期の先行投資（開発・マーケティング・採用）の資金確保にファクタリングが活用されます。",
  },
  {
    type: "SES事業者",
    description: "エンジニアを客先に常駐させるSES事業。エンジニアへの給与が毎月先行する一方、クライアントからの入金は1〜2ヶ月遅れるため、ファクタリングで資金ギャップを解消します。",
  },
  {
    type: "フリーランスエンジニア",
    description: "個人でシステム開発やコンサルティングを行うフリーランス。クライアント企業への請求書をもとにファクタリングを利用し、入金待ちの期間を短縮できます。",
  },
];

const faqs = [
  {
    question: "システム開発費の売掛金もファクタリングの対象になりますか？",
    answer:
      "はい、対象になります。ただし、開発が完了し検収が済んだ確定売掛金が対象です。開発途中の案件や、まだ請求書を発行していない将来の売上は対象外です。マイルストーン（中間成果物）ごとに検収を受ける契約であれば、各マイルストーンの確定売掛金をファクタリングできます。",
  },
  {
    question: "SaaSの月額利用料もファクタリングできますか？",
    answer:
      "はい、SaaSの月額利用料の請求書もファクタリングの対象になります。法人顧客に対して発行した当月分の請求書をもとに、入金前に現金化できます。継続的な利用で手数料が下がる会社もあるため、毎月のファクタリングにも対応可能です。",
  },
  {
    question: "クライアント企業にファクタリングの利用が知られますか？",
    answer:
      "2社間ファクタリングを選べばクライアントに通知されません。IT業界では取引先との信頼関係が重要なため、多くの企業が2社間ファクタリングを選択しています。3社間より手数料は高めですが、取引関係を維持できるメリットがあります。",
  },
  {
    question: "スタートアップでも利用できますか？",
    answer:
      "はい、利用可能です。ファクタリングは利用者の業歴や信用力よりも、売掛先（クライアント企業）の信用力を重視します。設立間もないスタートアップでも、大手企業との取引がある場合は比較的容易に審査を通過できます。",
  },
  {
    question: "IT業界のファクタリング手数料の相場は？",
    answer:
      "IT業界の手数料は、2社間で5%〜15%、3社間で1%〜8%程度です。大手企業やSIer向けの売掛金は信用力が高いため低い手数料で利用できます。スタートアップや小規模企業の場合はやや高めですが、複数社の見積もりで条件を比較しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "システム開発・SaaS企業向けファクタリング｜月額課金の資金繰り",
  description: "IT企業の資金繰り改善にファクタリングを活用。開発費・SaaS利用料の早期現金化を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/saas/" },
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
    { "@type": "ListItem", position: 3, name: "システム開発・SaaS向けファクタリング", item: "https://factoring-partner.pages.dev/articles/saas/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SaasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "システム開発・SaaS向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種別ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            システム開発・SaaS企業向けファクタリング
            <br className="hidden md:block" />
            月額課金の資金繰り
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            システム開発会社・SaaS企業・SES事業者の資金繰り課題をファクタリングで解決。開発費・利用料の入金待ちを解消する方法を詳しく解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. IT企業の資金繰り課題</a></li>
            <li><a href="#business-types" className="hover:underline">2. 対象となるIT事業と活用シーン</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社5選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用事例</a></li>
            <li><a href="#tips" className="hover:underline">5. 利用時のポイントと注意点</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">IT企業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">システム開発・SaaS・SES事業に共通する資金繰りの課題を整理します。</p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="business-types" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">対象となるIT事業と活用シーン</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリングが特に有効なIT事業の種類と、それぞれの活用シーンを紹介します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {itBusinessTypes.map((item) => (
              <div key={item.type} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.type}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">IT企業におすすめのファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">システム開発費・SaaS利用料・SES報酬に対応したおすすめのファクタリング会社を紹介します。</p>
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">IT企業のファクタリング活用事例</h2>
          <p className="mb-8 leading-relaxed text-text-light">実際の活用シーンを3つのケースで紹介します。</p>
          <div className="space-y-6">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 text-lg font-bold text-primary">{item.title}</h3>
                <div className="space-y-3">
                  <div className="rounded-lg bg-section-bg p-4">
                    <p className="text-xs font-semibold text-text-light">状況</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-main">{item.situation}</p>
                  </div>
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="text-xs font-semibold text-secondary">解決策</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-main">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── IT企業の資金繰り改善戦略 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">IT企業の資金繰り改善戦略</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリング以外にも活用できる、IT企業の資金繰り改善方法を紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">マイルストーン請求の導入</h3>
              <p className="text-sm leading-relaxed text-text-light">
                大型開発プロジェクトでは、一括納品・一括請求ではなく、マイルストーン（中間成果物）ごとに請求する契約を提案しましょう。設計完了時、開発完了時、テスト完了時にそれぞれ請求することで、入金タイミングが分散され資金繰りが安定します。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">SaaSの年間契約・前払い割引</h3>
              <p className="text-sm leading-relaxed text-text-light">
                月額課金のSaaS企業は、年間契約の前払い割引を提供することで、まとまった資金を先に確保できます。10〜20%の割引を提供しても、年間の入金を前倒しにできるメリットは大きいです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">SES事業の支払いサイト交渉</h3>
              <p className="text-sm leading-relaxed text-text-light">
                SES事業では、クライアントとの支払いサイト交渉が重要です。月末締め翌月末払いが標準ですが、翌月15日払いに短縮できないか交渉してみましょう。エンジニアの稼働実績が安定していれば交渉の余地があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">政府系のIT企業向け融資制度</h3>
              <p className="text-sm leading-relaxed text-text-light">
                日本政策金融公庫の「IT活用促進資金」やSaaS企業向けの成長融資など、IT企業に特化した融資制度があります。ファクタリングで短期の資金繰りを安定させつつ、中長期的には融資を活用するのが理想的です。
              </p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用時のポイントと注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">マイルストーン契約で売掛金を分割する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                大型開発プロジェクトでは、マイルストーン（中間成果物）ごとに検収・請求を行う契約にすることで、ファクタリングを活用しやすくなります。一括納品・一括入金の契約よりも資金繰りが安定します。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">VCからの資金調達とファクタリングの使い分け</h3>
              <p className="text-sm leading-relaxed text-text-light">
                SaaSスタートアップはVC（ベンチャーキャピタル）からの出資を受けるケースが多いですが、次のラウンドまでのつなぎ資金としてファクタリングを活用する方法もあります。株式の希薄化を避けたい場合に有効です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">ARR（年間経常収益）とファクタリングの関係</h3>
              <p className="text-sm leading-relaxed text-text-light">
                SaaS企業のARRが成長している場合、毎月の確定売掛金をファクタリングすることで、成長速度を維持したまま資金繰りを安定させられます。ただし手数料コストがLTV（顧客生涯価値）に影響しないか検証が必要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">会計処理の確認</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料は「売上債権売却損」として費用計上します。税務上の取り扱いを顧問税理士に確認し、適切な会計処理を行いましょう。特にスタートアップは監査対応も考慮が必要です。
              </p>
            </div>
          </div>
        </section>

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

        {/* ── まとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：IT企業がファクタリングを活用するポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">検収完了後の確定売掛金が対象</strong>：開発途中の案件ではなく、検収が完了し請求書を発行済みの売掛金が対象。マイルストーン契約で分割請求にすると活用しやすい。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">大手SIer・メーカーへの売掛金は好条件</strong>：売掛先の信用力が高いほど低手数料。大手企業との取引がある場合は積極的に活用を。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">SaaS企業は月額請求書をファクタリング</strong>：毎月の確定した利用料請求書をファクタリングで現金化。成長速度を落とさず資金繰りを安定。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">VCとの資金調達の使い分け</strong>：株式の希薄化を避けたい場合のつなぎ資金にファクタリング。ラウンド間のブリッジとしても活用。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">会計処理を顧問税理士に確認</strong>：手数料は「売上債権売却損」で費用計上。監査対応も考慮して適切な処理を行う。</span></li>
            </ul>
          </div>
        </section>

        {/* ── IT企業の利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">IT企業のファクタリング利用の流れ</h2>
          <div className="space-y-3">
            {[
              { step: "検収完了・請求書発行", description: "システム開発の検収完了後、またはSaaS月額利用料の請求書を発行した時点でファクタリングの対象になります。" },
              { step: "複数社に見積もり依頼", description: "請求書の金額・クライアント企業名・入金予定日を伝え、3社以上に見積もりを依頼。オンラインで簡単に完了。" },
              { step: "必要書類のオンライン提出", description: "請求書・通帳コピー・身分証明書・開発契約書などをオンラインでアップロードします。" },
              { step: "AI審査・契約", description: "クライアント企業の信用力を中心にAI審査。最短30分〜数時間で結果が出ます。ノンリコースの契約を確認して締結。" },
              { step: "最短即日入金", description: "契約完了後、最短即日〜2時間で指定口座に入金。エンジニアの給与やサーバー費用の支払いに充当。" },
              { step: "クライアントからの入金後に送金", description: "入金予定日にクライアントから入金があったら、ファクタリング会社に送金して取引完了。" },
            ].map((item, index) => (
              <div key={item.step} className="flex items-start gap-4 rounded-lg border border-border bg-white p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</span>
                <div>
                  <h3 className="font-bold text-text-main">{item.step}</h3>
                  <p className="mt-1 text-sm text-text-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/it-industry/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">IT業界向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">IT企業全般の活用ガイド</p>
            </Link>
            <Link href="/articles/consulting/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">コンサル・士業向け</p>
              <p className="mt-1 text-sm text-text-light">報酬の早期入金方法</p>
            </Link>
            <Link href="/articles/for-freelance/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">フリーランス向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">個人エンジニア向けガイド</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリング手数料ガイド</p>
              <p className="mt-1 text-sm text-text-light">相場と安くする方法</p>
            </Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">IT企業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            開発費・SaaS利用料・SES報酬の売掛金に対応したファクタリング会社を一括比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
