import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 名古屋のおすすめ業者5選｜東海エリア対応",
  description:
    "名古屋でおすすめのファクタリング会社5社を徹底比較。名駅・栄エリアの対面対応可能な業者やオンライン完結型サービスを紹介。東海3県（愛知・岐阜・三重）対応の会社も含め手数料・入金スピードで厳選。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/nagoya/",
  },
  openGraph: {
    title: "ファクタリング 名古屋のおすすめ業者5選｜東海エリア対応",
    description: "名古屋・東海エリアのファクタリング会社5社を手数料・スピードで比較。",
    url: "https://factoring-partner.pages.dev/articles/nagoya/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const nagoyaFeatures = [
  {
    title: "製造業の集積地ならではのニーズ",
    description:
      "名古屋・東海エリアはトヨタ自動車をはじめとする製造業の一大集積地です。自動車部品メーカーや工作機械メーカーなど、大手メーカーへの納品後の入金待ち期間が長い中小企業が多く、ファクタリングの需要が高いエリアです。",
  },
  {
    title: "堅実な商習慣と安定した取引先",
    description:
      "東海エリアは堅実な商習慣で知られ、大手メーカーとの安定した取引関係がある中小企業が多いです。売掛先の信用力が高い案件が多いため、ファクタリングの審査が通りやすく、手数料も安くなる傾向にあります。",
  },
  {
    title: "東京・大阪からのアクセスが良好",
    description:
      "名古屋は東京から新幹線で約1時間40分、大阪から約50分とアクセスが良好です。東京・大阪に本社を置くファクタリング会社の出張対応も受けやすく、対面でのコンサルティングを受けられる機会が多いです。",
  },
  {
    title: "オンライン完結型で全国の会社も利用可能",
    description:
      "名古屋に拠点がなくても、東京の大手ファクタリング会社はオンラインで全国対応しています。名古屋の地場企業と東京のオンライン対応会社を併用して見積もり比較することで、より有利な条件を引き出せます。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    area: "名古屋支店あり",
    features: "業界最大手級。名古屋支店で対面相談可能。2社間・3社間対応。最短2時間入金。累計買取額1,300億円超。法人・個人事業主対応。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "名古屋で対面相談ができる大手の安心感。東海エリアの製造業との取引実績が豊富。高額案件にも対応。",
  },
  {
    name: "アクセルファクター",
    area: "オンライン対応（東京本社）",
    features: "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。オンライン完結可能。",
    fee: "2%〜",
    speed: "最短即日",
    merit: "業界トップクラスの審査通過率。赤字決算でも柔軟対応。名古屋からオンラインで手軽に利用可能。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features: "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit: "手数料の安さが魅力。書類が少なく手続きが簡単。東海全域から来店不要で利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features: "一般社団法人が運営する非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit: "非営利法人のため手数料が業界最安水準。認定機関の安心感。東海の製造業にもおすすめ。",
  },
  {
    name: "OLTA（オルタ）",
    area: "オンライン完結型",
    features: "クラウドファクタリングのパイオニア。AI審査で最短即日。銀行提携多数。法人・個人事業主対応。2社間専門。",
    fee: "2%〜9%",
    speed: "最短即日",
    merit: "銀行提携の安心感。AI審査でスピーディー。手数料上限が明確。名古屋の地方銀行とも提携実績あり。",
  },
];

const tokaiIndustries = [
  {
    industry: "自動車関連製造業",
    description: "トヨタ自動車を頂点とするサプライチェーンに属する中小企業が多く、Tier2・Tier3メーカーでは入金サイトが60〜90日になることも。ファクタリングで支払いサイクルのギャップを埋めるケースが多いです。",
  },
  {
    industry: "工作機械・精密機器製造業",
    description: "名古屋は工作機械の一大生産地。受注から製造、納品、入金までのリードタイムが長いため、製造期間中の運転資金としてファクタリングが活用されています。",
  },
  {
    industry: "建設業",
    description: "リニア中央新幹線の建設をはじめ、東海エリアでは大規模な建設プロジェクトが進行中。建設業者の資金需要が高まっており、ファクタリングの利用も増加しています。",
  },
  {
    industry: "物流・運送業",
    description: "東海エリアは製造業の物流拠点でもあり、運送業者の資金繰りニーズが高いです。燃料費・人件費の先払いに対してファクタリングが活用されています。",
  },
];

const faqs = [
  {
    question: "名古屋でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "名古屋で選ぶ際は、①名古屋に拠点があり対面相談が可能か②製造業など東海エリアの業種に精通しているか③手数料が相場（2社間5〜18%、3社間1〜9%）の範囲内か④即日入金に対応しているか⑤売掛先が大手メーカーの場合に好条件を出してくれるか、の5点を確認しましょう。",
  },
  {
    question: "名古屋のファクタリング手数料の相場は？",
    answer:
      "名古屋のファクタリング手数料は2社間で5%〜18%、3社間で1%〜9%程度が相場です。東海エリアは売掛先がトヨタなど信用力の高い大手メーカーであるケースが多いため、審査通過率が高く、手数料も安くなる傾向にあります。複数社の見積もりを比較して交渉しましょう。",
  },
  {
    question: "愛知県以外（岐阜・三重・静岡）からも利用できますか？",
    answer:
      "はい、オンライン完結型のファクタリング会社であれば、岐阜・三重・静岡など東海全域から利用可能です。対面相談を希望する場合は、ビートレーディング名古屋支店が利用可能です。東京のオンライン対応会社も含めて比較することで、より良い条件が見つかります。",
  },
  {
    question: "製造業の売掛金はファクタリングに向いていますか？",
    answer:
      "はい、製造業の売掛金はファクタリングに非常に向いています。理由は、①売掛先（大手メーカー）の信用力が高い②請求書が明確に発行される③取引が継続的で安定している④入金サイトが長い（60〜90日）ため資金化のメリットが大きい、の4点です。特に大手メーカー向けの売掛金は手数料が安くなりやすいです。",
  },
  {
    question: "名古屋で即日入金してもらうにはどうすればいい？",
    answer:
      "即日入金を実現するには、①午前中に申し込みと書類提出を完了する②必要書類を事前に準備する③オンライン対応の会社を選ぶ④売掛先が信用力の高い企業だと審査が早いことを認識する、の4点が重要です。ビートレーディング名古屋支店は最短2時間での入金実績があります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリング 名古屋のおすすめ業者5選｜東海エリア対応",
  description: "名古屋・東海エリアのファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/nagoya/" },
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
    { "@type": "ListItem", position: 3, name: "名古屋のファクタリング会社", item: "https://factoring-partner.pages.dev/articles/nagoya/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function NagoyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "名古屋のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 名古屋のおすすめ業者5選
            <br className="hidden md:block" />
            東海エリア対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            名古屋・東海エリアで利用できるファクタリング会社を厳選紹介。製造業の集積地ならではのニーズに応える会社から、オンライン完結型の大手まで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 名古屋でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 名古屋のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 東海の業種別ファクタリング活用</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 名古屋での業者選びのポイント</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">名古屋でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">名古屋・東海エリアは製造業を中心とした独自の経済圏を形成しており、ファクタリングのニーズも特徴的です。</p>
          <div className="space-y-4">
            {nagoyaFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">名古屋のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">名古屋・東海エリアで利用できるファクタリング会社を厳選して5社紹介します。</p>
          <div className="space-y-6">
            {recommendedCompanies.map((company, index) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">{company.name}</h3>
                    <p className="mt-1 text-xs text-text-light">拠点：{company.area}</p>
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

        {/* ── 業種別活用 ─── */}
        <section id="industries" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">東海の業種別ファクタリング活用</h2>
          <p className="mb-8 leading-relaxed text-text-light">東海エリアの主要業種ごとに、ファクタリングがどのように活用されているかを解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {tokaiIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">名古屋での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">名古屋でファクタリング会社を選ぶ際に押さえておきたいポイントを解説します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">売掛先の信用力を活かす</h3>
              <p className="text-sm leading-relaxed text-text-light">
                東海エリアの製造業は売掛先がトヨタ・デンソー・アイシンなどの大手メーカーであるケースが多いです。売掛先の信用力が高いほど手数料は安くなるため、この強みを活かして複数社に見積もりを依頼し、最も安い手数料を引き出しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">製造業の商慣習に精通した会社を選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                製造業は発注書・納品書・検収書など書類のやり取りが複雑です。製造業の審査ノウハウを持つ会社を選ぶことで、スムーズな手続きが期待できます。ビートレーディングなど実績豊富な大手がおすすめです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">高額案件への対応力を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                製造業の売掛金は1件あたり数百万円〜数千万円と高額になることが多いです。買取上限額が十分にある会社を選びましょう。ビートレーディングやPMGなど大手は上限なしで対応可能です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">継続利用のメリットを活用する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                製造業の資金繰りは継続的な課題であることが多いため、リピーター割引制度のある会社を選ぶと長期的にコストを抑えられます。2回目以降は手数料が2〜3%安くなる会社もあります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 東海エリアの資金調達事情 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">東海エリアの資金調達事情</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            東海エリアは製造業を中心に安定した経済基盤を持つ一方で、中小企業の資金繰り課題も根強く存在します。特に大手メーカーのサプライチェーンに属する中小企業は、入金サイトの長さが経営上の大きな課題です。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">自動車関連の下請構造</strong>：Tier1→Tier2→Tier3と階層が下がるほど入金サイトが長くなり、資金繰りが厳しくなる構造があります</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">設備投資の資金需要</strong>：EV化やDX対応のための設備投資が急務ですが、銀行融資の審査に時間がかかるケースも多いです</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">地方銀行のファクタリング参入</strong>：名古屋銀行や十六銀行などの地方銀行もファクタリング関連サービスを提供し始めており、選択肢が広がっています</span>
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

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/tokyo/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">東京のファクタリング会社10選</p>
              <p className="mt-1 text-sm text-text-light">即日対応の会社を比較</p>
            </Link>
            <Link href="/articles/osaka/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">大阪のファクタリング会社8選</p>
              <p className="mt-1 text-sm text-text-light">関西エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/manufacturing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">製造業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">製造業の資金繰り改善ガイド</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツも紹介</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">東海エリアのファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で名古屋・東海エリアのファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
