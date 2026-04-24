import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "広告・クリエイティブ業向けファクタリング｜制作費の資金繰り改善",
  description:
    "広告代理店・Web制作・デザイン・映像制作などクリエイティブ業向けファクタリングを解説。外注費の先払い、入金サイトの長さなどの課題とおすすめ5社、活用事例を紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/creative/",
  },
  openGraph: {
    title: "広告・クリエイティブ業向けファクタリング｜制作費の資金繰り改善",
    description: "クリエイティブ業の資金繰り課題をファクタリングで解決。おすすめ5社と活用事例。",
    url: "https://factoring-partner.pages.dev/articles/creative/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "外注費（フリーランスへの報酬）の先払いが必要",
    description:
      "広告・クリエイティブ業界では、デザイナー、コピーライター、カメラマン、映像クリエイターなどのフリーランスに制作を外注するケースが大半です。外注先への支払いは納品後30日以内が一般的ですが、クライアントからの入金は60〜90日先。この資金ギャップが常態化し、大型キャンペーンを受注するほど資金繰りが厳しくなります。",
  },
  {
    title: "広告出稿費の立替が発生する",
    description:
      "広告代理店ではクライアントの代わりにメディアへの広告出稿費を立て替えるケースがあります。テレビCM、Web広告、雑誌広告などの出稿費は数百万〜数千万円に達することもあり、クライアントからの入金まで自社で立て替える必要があります。",
  },
  {
    title: "入金サイトが60〜90日と長い",
    description:
      "クリエイティブ業界の入金サイトは60〜90日が一般的で、大手広告主との取引では90日以上になることも。制作完了から検収、請求、入金まで長期間を要し、その間の人件費や外注費を先に支払う必要があります。",
  },
  {
    title: "プロジェクト単位の収支管理が複雑",
    description:
      "クリエイティブ業界はプロジェクト単位で収支が大きく異なります。利益率の高い案件と低い案件が混在し、大型案件の受注直後は先行投資が膨らむため、全体の資金繰りが複雑になります。案件の追加修正や仕様変更によるコスト増も資金繰りを圧迫します。",
  },
];

const recommendedCompanies = [
  {
    name: "QuQuMo",
    features:
      "完全オンライン完結型で手数料1%〜。必要書類は請求書と通帳の2点のみ。クリエイティブ業界のフリーランスや小規模法人にも使いやすいシンプルさ。最短2時間で入金。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "手続きが簡単でスピーディ。忙しいクリエイティブ業界の経営者やフリーランスに最適。手数料も業界最安水準。",
  },
  {
    name: "ペイトナー",
    features:
      "フリーランスに特化した最短10分入金のサービス。手数料一律10%で明瞭。1万円から利用可能。事業計画書・決算書不要で申し込みが簡単。",
    fee: "一律10%",
    speed: "最短10分",
    merit:
      "フリーランスのデザイナー、ライター、映像クリエイターに最適。圧倒的なスピードで急な支払いにも対応。",
  },
  {
    name: "ビートレーディング",
    features:
      "累計取引9.1万社超の業界最大手。クリエイティブ業界を含む幅広い業種に対応。買取金額に上限なく、数十万円〜数億円まで対応。2社間・3社間対応。来店不要。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "大手ならではの安心感。広告代理店の大口案件にも対応。全国対応でクリエイティブ業界の実績も豊富。",
  },
  {
    name: "FREENANCE（フリーナンス）",
    features:
      "GMOグループ運営のフリーランス向け総合サービス。ファクタリング（即日払い）に加え、あんしん補償や収納代行も提供。1万円からの少額利用に対応。",
    fee: "3%〜10%",
    speed: "最短即日",
    merit:
      "クリエイターに人気のGMOブランド。ファクタリング以外の補償サービスも充実。フリーランスの総合的な金融サポート。",
  },
  {
    name: "ラボル",
    features:
      "土日祝日も24時間即日振込に対応するフリーランス向けサービス。手数料一律10%、1万円から利用可能。365日いつでも入金されるのが最大の特徴。",
    fee: "一律10%",
    speed: "最短30分",
    merit:
      "休日も入金対応で、週末に急な支払いが発生しやすいクリエイティブ業界に最適。24時間365日対応。",
  },
];

const useCases = [
  {
    title: "事例1：広告代理店が大型キャンペーンの外注費を確保",
    industry: "広告代理店（従業員20名）",
    problem:
      "大手食品メーカーの新商品発売キャンペーンを受注（契約額3,000万円）。CM制作、Web制作、グラフィックデザインなどの外注費が1,500万円必要だが、クライアントからの入金は納品後90日。手元資金は500万円で1,000万円不足。",
    solution:
      "既存クライアントへの完了済み案件の売掛金1,500万円をビートレーディングで2社間ファクタリング。手数料5%で1,425万円を翌日に調達。外注先への支払いに充当。",
    result:
      "大型キャンペーンを予定通り実施。クライアントから高い評価を得て、翌年の年間契約（1億円規模）を獲得。ファクタリング手数料75万円に対し、大幅なリターンを実現。",
  },
  {
    title: "事例2：Web制作会社が複数案件の納品ラッシュに対応",
    industry: "Web制作会社（従業員8名）",
    problem:
      "3件のWebサイト制作案件が同時に納品時期を迎え、フリーランスデザイナー・エンジニアへの外注費600万円の支払い期日が迫る。しかしクライアントからの入金は最短でも45日先。銀行口座の残高は100万円。",
    solution:
      "別のクライアントへの完了済み案件の売掛金400万円と、直近で請求した案件の売掛金300万円をQuQuMoでファクタリング。手数料3%で679万円を当日中に調達。",
    result:
      "全フリーランスへの支払いを期日通りに完了。信頼関係を維持し、以降も優先的に制作リソースを確保できるように。資金繰りの見通しが改善し、新規案件の受注にも積極的に。",
  },
  {
    title: "事例3：フリーランスデザイナーが大手案件の入金待ちを乗り越える",
    industry: "フリーランス（グラフィックデザイナー）",
    problem:
      "大手アパレルブランドのカタログデザインを完了し、150万円の請求書を発行。しかし入金は60日後で、翌月の家賃・事務所費用・ソフトウェア利用料（合計30万円）の支払いが困難に。",
    solution:
      "150万円の売掛金をペイトナーで売却。手数料10%で135万円を申し込みから10分で受け取り。",
    result:
      "生活費と事業経費を確保し、次の案件制作に集中。大手ブランドとの取引実績が評価され、以降も継続的に仕事を受注。信用情報に影響なく、将来の融資にも支障なし。",
  },
];

const faqs = [
  {
    question: "広告代理店の広告出稿費の立替分もファクタリングに使えますか？",
    answer:
      "ファクタリングで売却できるのは、クライアントに対する売掛債権（請求書）です。広告出稿費の立替分がクライアントへの請求に含まれていれば、その請求書全体をファクタリングに利用できます。ただし、メディアへの直接の広告出稿費（自社の支出）をファクタリングで資金化することはできません。",
  },
  {
    question: "クリエイティブ業界のフリーランスでもファクタリングは利用できますか？",
    answer:
      "はい、フリーランスのデザイナー、ライター、映像クリエイター、カメラマンなどでも利用可能です。ペイトナー、ラボル、FREENANCE（フリーナンス）など、フリーランスに特化したサービスでは1万円から利用でき、事業計画書や決算書も不要です。請求書と本人確認書類だけで申し込めます。",
  },
  {
    question: "制作途中の案件でもファクタリングは利用できますか？",
    answer:
      "通常のファクタリングは、制作完了後にクライアントの検収を経て請求書が発行された売掛金が対象です。制作途中の段階では利用できません。ただし、マイルストーン払い（分割請求）の契約であれば、完了済みフェーズの請求書をファクタリングに利用できます。",
  },
  {
    question: "クライアント（広告主）にファクタリングの利用が知られますか？",
    answer:
      "2社間ファクタリングを選択すれば、クライアントにファクタリングの利用が知られることはありません。クリエイティブ業界ではクライアントとの関係性が重要なため、2社間ファクタリングを選ぶのが一般的です。",
  },
  {
    question: "広告・クリエイティブ業の手数料相場はどのくらいですか？",
    answer:
      "クリエイティブ業界の手数料相場は、2社間で5%〜15%、3社間で1%〜9%程度です。クライアントが大手広告主や上場企業の場合は信用力が高いため、手数料が安くなります。フリーランスの場合は一律10%程度のサービスが多いです。複数社から見積もりを取り、最も条件の良い会社を選びましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "広告・クリエイティブ業向けファクタリング｜制作費の資金繰り改善",
  description: "クリエイティブ業の資金繰り課題をファクタリングで解決。おすすめ5社と活用事例。",
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/creative/" },
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
    { "@type": "ListItem", position: 3, name: "広告・クリエイティブ業向けファクタリング", item: "https://factoring-partner.pages.dev/articles/creative/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function CreativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "広告・クリエイティブ業向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種特化ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            広告・クリエイティブ業向けファクタリング
            <br className="hidden md:block" />
            制作費の資金繰り改善
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            広告代理店・Web制作・デザイン・映像制作など、クリエイティブ業界の資金繰り課題をファクタリングで解決する方法を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. 広告・クリエイティブ業の資金繰り課題</a></li>
            <li><a href="#why-factoring" className="hover:underline">2. ファクタリングが効果的な理由</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社5選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用事例3選</a></li>
            <li><a href="#freelance" className="hover:underline">5. フリーランスクリエイター向けの活用法</a></li>
            <li><a href="#caution" className="hover:underline">6. 利用時の注意点</a></li>
            <li><a href="#flow" className="hover:underline">7. 利用の流れ</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">広告・クリエイティブ業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">クリエイティブ業界は外注費の先払いや広告出稿費の立替など、特有の資金繰り課題を抱えています。</p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── なぜファクタリングが効果的か ─── */}
        <section id="why-factoring" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリングが効果的な理由</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">外注費の支払い資金を即座に確保</h3>
              <p className="text-sm leading-relaxed text-text-light">クライアントへの売掛金を最短即日で現金化し、フリーランスや外注先への支払いに充てられます。信頼関係の維持に直結。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">大手広告主の売掛金は審査に有利</h3>
              <p className="text-sm leading-relaxed text-text-light">クライアントが大手企業や上場企業であれば、ファクタリングの審査に通りやすく手数料も低い傾向にあります。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">大型案件を積極的に受注できる</h3>
              <p className="text-sm leading-relaxed text-text-light">資金繰りの不安がなくなれば、利益率の高い大型案件にも積極的に挑戦でき、事業の成長を加速させられます。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">オンラインで手軽に利用可能</h3>
              <p className="text-sm leading-relaxed text-text-light">デジタルに強いクリエイティブ業界なら、オンライン完結型のファクタリングサービスとの相性が抜群。時間と手間を最小限に。</p>
            </div>
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">おすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">広告・クリエイティブ業界に適したファクタリング会社を5社厳選しました。法人向けとフリーランス向けの両方を含みます。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">活用事例3選</h2>
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

        {/* ── フリーランス向け ─── */}
        <section id="freelance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">フリーランスクリエイター向けの活用法</h2>
          <p className="mb-6 leading-relaxed text-text-light">フリーランスのデザイナー、ライター、映像クリエイター、イラストレーターなど、クリエイティブ業界のフリーランスにとってファクタリングは強力な資金調達ツールです。</p>

          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 font-bold text-text-main">フリーランスクリエイターにおすすめのサービス</h3>
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">ペイトナー</strong>：最短10分入金で急な支払いに対応。1万円から利用可能。事業計画書不要。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">ラボル</strong>：土日祝日も24時間入金対応。週末の急な出費にも安心。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">FREENANCE（フリーナンス）</strong>：GMOグループ運営で信頼性高い。あんしん補償サービスも付帯。</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">フリーランスがファクタリングを活用するコツ</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>大口案件の入金待ちの期間に限定して利用し、コストを最小限に</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>複数のクライアントから請求書を発行し、分散してファクタリングを利用</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>確定申告時の仕訳を正確に行い、手数料を経費計上（売掛債権売却損）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>入金サイトの短いクライアントを増やし、ファクタリングへの依存度を下げる</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 業種別の活用ポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">業種別のファクタリング活用ポイント</h2>
          <p className="mb-6 leading-relaxed text-text-light">クリエイティブ業界は細かく分類すると業態が異なり、それぞれに最適なファクタリングの活用方法があります。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">業種</th>
                  <th className="border border-primary p-3 text-left">主な資金需要</th>
                  <th className="border border-primary p-3 text-left">入金サイト</th>
                  <th className="border border-primary p-3 text-left">おすすめサービス</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">広告代理店</td>
                  <td className="border border-border p-3">外注費・広告出稿費の立替</td>
                  <td className="border border-border p-3">60〜90日</td>
                  <td className="border border-border p-3">ビートレーディング、PMG</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">Web制作会社</td>
                  <td className="border border-border p-3">デザイナー・エンジニアの外注費</td>
                  <td className="border border-border p-3">30〜60日</td>
                  <td className="border border-border p-3">QuQuMo、PAYTODAY</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">映像制作</td>
                  <td className="border border-border p-3">機材レンタル・スタッフ人件費</td>
                  <td className="border border-border p-3">60〜120日</td>
                  <td className="border border-border p-3">ビートレーディング、トップ・マネジメント</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">フリーランスデザイナー</td>
                  <td className="border border-border p-3">生活費・経費の支払い</td>
                  <td className="border border-border p-3">30〜60日</td>
                  <td className="border border-border p-3">ペイトナー、ラボル、FREENANCE</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">PR・イベント会社</td>
                  <td className="border border-border p-3">会場費・機材費・人件費の先払い</td>
                  <td className="border border-border p-3">30〜90日</td>
                  <td className="border border-border p-3">ビートレーディング、アクセルファクター</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 会計処理 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリングの会計処理（クリエイティブ業向け）</h2>
          <p className="mb-6 leading-relaxed text-text-light">クリエイティブ業でファクタリングを利用した場合の会計処理を解説します。法人・個人事業主ともに正確な記帳が必要です。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 font-bold text-text-main">仕訳例：売掛金50万円を手数料5%でファクタリング</h3>
            <div className="space-y-4">
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-2 text-sm font-semibold text-primary">ファクタリング契約時</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-text-light">
                  <p>（借方）未収入金 475,000円</p>
                  <p>（貸方）売掛金 500,000円</p>
                  <p>（借方）売掛債権売却損 25,000円</p>
                  <p></p>
                </div>
              </div>
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-2 text-sm font-semibold text-primary">入金時</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-text-light">
                  <p>（借方）普通預金 475,000円</p>
                  <p>（貸方）未収入金 475,000円</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-text-light">手数料25,000円は「売掛債権売却損」として費用計上。確定申告時に経費として算入可能です。フリーランスの場合は会計ソフトで正確に管理しましょう。</p>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用時の注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">案件ごとの収益性を把握してから利用する</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリング手数料を含めた案件収支を事前に計算しましょう。手数料を差し引いても利益が出る案件にのみ利用するのが基本です。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">クライアントとの守秘義務に配慮する</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリング申込時に請求書や契約書を提出する際、クライアントの機密情報が含まれていないか確認しましょう。2社間ファクタリングでもファクタリング会社にはクライアント情報が共有されます。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">継続利用のコスト管理</h3>
              <p className="text-sm leading-relaxed text-text-light">毎月ファクタリングを利用する場合は年間のコストを事前に計算しましょう。並行して入金サイトの短縮交渉や、銀行融資の活用も検討してください。</p>
            </div>
          </div>
        </section>

        {/* ── クリエイティブ業の資金繰り改善策 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリング以外の資金繰り改善策</h2>
          <p className="mb-6 leading-relaxed text-text-light">ファクタリングは有効な手段ですが、根本的な資金繰り改善も並行して進めましょう。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">着手金・中間金の交渉</strong>：大型案件では着手金（30〜50%）と中間金の支払いをクライアントに交渉しましょう。制作費の先行負担を大幅に軽減できます。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">入金サイトの短縮交渉</strong>：新規取引時に「月末締め翌月末払い（30日サイト）」を提案し、60日以上のサイトを避けるよう交渉しましょう。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">リテイナー契約（月額定額）の獲得</strong>：月額固定のリテイナー契約を獲得すれば、毎月の売上が安定し、ファクタリングの必要性が減ります。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">外注費の支払い条件を調整</strong>：フリーランスへの外注費を「クライアント入金後30日以内」の条件にすることで、資金ギャップを縮小できます。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">クレジットカード払いの活用</strong>：経費の支払いをクレジットカードにまとめることで、実質的な支払いサイトを1ヶ月延長できます。</span></li>
            </ul>
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用の流れ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "申し込み", desc: "Webフォームから申し込み。売掛金額、クライアント情報、希望入金日を入力。複数社に同時申し込みがおすすめ。" },
              { step: "2", title: "書類提出", desc: "請求書、本人確認書類、通帳コピーをアップロード。フリーランス向けサービスなら請求書と通帳の2点のみ。" },
              { step: "3", title: "審査・見積もり", desc: "クライアントの信用力を審査。大手広告主なら審査はスムーズ。最短10分〜数時間で結果通知。" },
              { step: "4", title: "契約・入金", desc: "見積もりに同意したら電子契約で締結。最短即日で指定口座に入金。全てオンラインで完結。" },
              { step: "5", title: "回収金の送金", desc: "2社間の場合、クライアントから入金後にファクタリング会社へ送金。3社間はクライアントが直接送金。" },
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

        {/* ── 法人 vs フリーランスの比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">法人とフリーランスのファクタリング比較</h2>
          <p className="mb-6 leading-relaxed text-text-light">クリエイティブ業界は法人とフリーランスの両方が活躍する業種です。それぞれでファクタリングの利用条件が異なります。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">比較項目</th>
                  <th className="border border-primary p-3 text-left">法人（広告代理店・制作会社）</th>
                  <th className="border border-primary p-3 text-left">フリーランス（デザイナー・ライター）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">利用可能サービス</td>
                  <td className="border border-border p-3">全サービス（ビートレーディング、QuQuMo等）</td>
                  <td className="border border-border p-3">フリーランス向け（ペイトナー、ラボル、FREENANCE等）</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">手数料相場</td>
                  <td className="border border-border p-3">2%〜15%</td>
                  <td className="border border-border p-3">一律10%が多い</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">必要書類</td>
                  <td className="border border-border p-3">請求書・通帳・決算書など</td>
                  <td className="border border-border p-3">請求書・本人確認書類のみ</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">買取可能額</td>
                  <td className="border border-border p-3">30万円〜数億円</td>
                  <td className="border border-border p-3">1万円〜（上限あり）</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">入金スピード</td>
                  <td className="border border-border p-3">最短2時間〜即日</td>
                  <td className="border border-border p-3">最短10分〜即日</td>
                </tr>
              </tbody>
            </table>
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

        {/* ── クリエイティブ業の手数料目安 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">クリエイティブ業のファクタリング手数料目安</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">売掛金額</th>
                  <th className="border border-primary p-3 text-left">2社間（法人）</th>
                  <th className="border border-primary p-3 text-left">2社間（フリーランス）</th>
                  <th className="border border-primary p-3 text-left">3社間</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">10万円</td>
                  <td className="border border-border p-3">5%〜15%</td>
                  <td className="border border-border p-3">一律10%</td>
                  <td className="border border-border p-3">3%〜9%</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">50万円</td>
                  <td className="border border-border p-3">3%〜12%</td>
                  <td className="border border-border p-3">一律10%</td>
                  <td className="border border-border p-3">2%〜7%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">100万円〜500万円</td>
                  <td className="border border-border p-3">2%〜10%</td>
                  <td className="border border-border p-3">一律10%</td>
                  <td className="border border-border p-3">1%〜5%</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">500万円以上</td>
                  <td className="border border-border p-3">2%〜8%</td>
                  <td className="border border-border p-3">-</td>
                  <td className="border border-border p-3">1%〜3%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            クライアントが大手広告主や上場企業の場合は手数料が安くなります。フリーランス向けサービスは一律10%が多いですが、FREENANCEは利用実績に応じて手数料が下がるため、継続利用するならお得です。
          </p>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/for-freelance/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">フリーランス向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">個人事業主に最適なサービスを比較</p>
            </Link>
            <Link href="/articles/it-industry/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">IT業界向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">SES・受託開発の資金繰り改善</p>
            </Link>
            <Link href="/articles/online-factoring/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">オンラインファクタリング</p>
              <p className="mt-1 text-sm text-text-light">来店不要・Web完結のサービスを比較</p>
            </Link>
            <Link href="/articles/small-amount/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">少額ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">1万円から利用できるおすすめ5選</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">クリエイティブ業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            制作費・外注費の資金繰りに最適なファクタリング会社を手数料・入金速度で比較。法人にもフリーランスにも対応。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
