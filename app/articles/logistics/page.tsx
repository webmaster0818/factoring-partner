import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "物流・倉庫業向けファクタリング｜配送代金の早期現金化",
  description:
    "物流・倉庫業向けファクタリングを徹底解説。配送代金・運送料の入金サイトの長さを解消し、燃料費・人件費の支払いに対応する方法を紹介。おすすめのファクタリング会社5選も比較。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/logistics/",
  },
  openGraph: {
    title: "物流・倉庫業向けファクタリング｜配送代金の早期現金化",
    description: "物流・倉庫業の資金繰り改善にファクタリングを活用。配送代金の早期現金化方法を解説。",
    url: "https://factoring-partner.pages.dev/articles/logistics/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "入金サイトが30〜60日と長い",
    description:
      "物流・運送業界では、配送完了後の入金まで30〜60日かかるのが一般的です。大手荷主企業ほど支払いサイトが長い傾向にあり、月末締め翌月末払い・翌々月払いの条件も珍しくありません。",
  },
  {
    title: "燃料費・人件費の支払いが先行する",
    description:
      "トラックの燃料費・高速道路代・ドライバーの給与など、配送にかかるコストは日々発生します。売上が入金されるまでの間、これらの支払いを自己資金で賄う必要があり、資金繰りが圧迫されがちです。",
  },
  {
    title: "車両の維持・更新費用が高額",
    description:
      "トラックや倉庫設備の維持費・修繕費、新車両の購入費用など、設備投資が常に必要な業界です。急な車両故障の修理費にも対応する必要があり、手元資金の確保が重要です。",
  },
  {
    title: "季節変動と繁忙期の資金需要",
    description:
      "年末年始やECセールの時期など、繁忙期には一時的にドライバーや車両を増やす必要があります。繁忙期の先行投資に対して入金が遅れるため、ファクタリングで資金を確保するニーズがあります。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "業界最大手級。物流業者の利用実績多数。高額案件対応可能。最短2時間入金。",
    fee: "2%〜",
    speed: "最短2時間",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。30万円〜対応。個人事業主の運送業者もOK。即日入金対応。",
    fee: "2%〜",
    speed: "最短即日",
  },
  {
    name: "QuQuMo（ククモ）",
    features: "手数料1%〜の低コスト。請求書と通帳のみで審査。オンライン完結で手続き簡単。",
    fee: "1%〜",
    speed: "最短2時間",
  },
  {
    name: "日本中小企業金融サポート機構",
    features: "非営利法人運営。経済産業大臣認定。低手数料で物流業者にもおすすめ。",
    fee: "1.5%〜",
    speed: "最短即日",
  },
  {
    name: "ラボル",
    features: "個人事業主の軽貨物ドライバーにも対応。1万円〜利用可能。24時間365日振込。",
    fee: "10%固定",
    speed: "最短60分",
  },
];

const useCases = [
  {
    title: "大手荷主への配送代金を早期現金化",
    situation: "大手EC企業との配送契約で月末締め翌々月15日払いの条件。月間配送代金500万円の入金を待つ間、燃料費・人件費の支払いが厳しい。",
    solution: "配送完了後の請求書をファクタリングで買取。手数料5%（25万円）で475万円を即日受取。入金待ちの2.5ヶ月間の資金ギャップを解消。",
  },
  {
    title: "繁忙期の臨時ドライバー確保",
    situation: "年末商戦で配送量が通常の2倍に。臨時ドライバーの人件費200万円が先行して必要だが、繁忙期の売上入金は翌年1月末。",
    solution: "既存の確定売掛金をファクタリングで現金化し、臨時ドライバーの採用費用に充当。繁忙期の受注機会を逃さず売上を最大化。",
  },
  {
    title: "車両の緊急修理対応",
    situation: "主力トラックのエンジントラブルで修理費80万円が突発的に発生。銀行融資は間に合わず、車両が使えないと配送契約に支障が出る。",
    solution: "売掛金をファクタリングで即日現金化し、翌日に修理完了。配送契約の履行を維持し、信用を守ることができた。",
  },
];

const meritPoints = [
  {
    title: "燃料費の高騰に即対応できる",
    description:
      "原油価格の変動により燃料費が急騰することがあります。ファクタリングで売掛金を早期に現金化すれば、燃料費の値上がりにも即座に対応でき、配送サービスを止めることなく事業を継続できます。",
  },
  {
    title: "借入れではないため負債が増えない",
    description:
      "ファクタリングは売掛金の売買であり、借入れではありません。貸借対照表上の負債が増えないため、銀行融資の審査に影響しません。融資枠を温存しながら資金調達できるメリットがあります。",
  },
  {
    title: "荷主の信用力で審査されるため通りやすい",
    description:
      "ファクタリングの審査では、売掛先（荷主企業）の信用力が重視されます。大手荷主との取引がある物流業者は、自社の業績が厳しくても審査に通りやすいのが特徴です。",
  },
  {
    title: "新規車両・設備の導入資金に活用",
    description:
      "車両の入れ替えや倉庫設備の増設など、成長のための設備投資にもファクタリングで資金を確保できます。銀行融資の審査を待たずに投資判断を迅速に行えます。",
  },
];

const faqs = [
  {
    question: "物流業でファクタリングを利用する際の必要書類は？",
    answer:
      "一般的に必要な書類は、①荷主企業への請求書②運送契約書（または業務委託契約書）③直近3ヶ月分の通帳コピー（荷主からの入金実績が確認できるもの）④代表者の身分証明書⑤会社の登記簿謄本（法人の場合）です。ただし会社によっては請求書と通帳のみで審査可能なところもあります。",
  },
  {
    question: "個人事業主の運送業者でもファクタリングを利用できますか？",
    answer:
      "はい、個人事業主の運送業者でも利用可能です。特に軽貨物ドライバーは個人事業主が多いですが、ラボルやアクセルファクターなど個人事業主対応の会社で利用できます。ラボルは1万円から対応しているため、少額の売掛金でも利用可能です。",
  },
  {
    question: "荷主に知られずにファクタリングを利用できますか？",
    answer:
      "はい、2社間ファクタリングを選べば荷主に通知されません。2社間ファクタリングは利用者とファクタリング会社の2者間で契約するため、荷主企業に知られることなく売掛金を現金化できます。ただし3社間ファクタリングより手数料は高めです。",
  },
  {
    question: "物流業のファクタリング手数料の相場は？",
    answer:
      "物流業のファクタリング手数料は、2社間で5%〜15%、3社間で1%〜8%程度が相場です。大手荷主企業への売掛金は信用力が高いため、比較的低い手数料で利用できる傾向にあります。複数社の見積もりを取って比較することが重要です。",
  },
  {
    question: "ファクタリングを定期的に利用してもよいですか？",
    answer:
      "はい、定期的な利用は問題ありません。多くのファクタリング会社では2回目以降の利用で手数料が下がる優遇制度があります。ただし、ファクタリングに依存しすぎるとコストが膨らむため、中長期的には入金サイトの改善や銀行融資の活用も並行して検討しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "物流・倉庫業向けファクタリング｜配送代金の早期現金化",
  description: "物流・倉庫業の資金繰り改善にファクタリングを活用。配送代金の早期現金化方法を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/logistics/" },
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
    { "@type": "ListItem", position: 3, name: "物流・倉庫業向けファクタリング", item: "https://factoring-partner.pages.dev/articles/logistics/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function LogisticsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "物流・倉庫業向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種別ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            物流・倉庫業向けファクタリング
            <br className="hidden md:block" />
            配送代金の早期現金化
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            物流・倉庫業の資金繰り課題をファクタリングで解決。配送代金・運送料の入金待ちを解消し、燃料費・人件費の支払いに対応する方法を詳しく解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. 物流・倉庫業の資金繰り課題</a></li>
            <li><a href="#merits" className="hover:underline">2. ファクタリング活用のメリット</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社5選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用事例</a></li>
            <li><a href="#tips" className="hover:underline">5. 利用時のポイントと注意点</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">物流・倉庫業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">物流・倉庫業界は売上の入金サイトが長い一方で、日々の運営コストが先行する業種です。主な資金繰り課題を見てみましょう。</p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">物流業がファクタリングを活用するメリット</h2>
          <p className="mb-8 leading-relaxed text-text-light">物流・倉庫業にとってファクタリングは特に相性の良い資金調達手段です。その理由を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {meritPoints.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">物流業におすすめのファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">物流・倉庫業の売掛金に対応したおすすめのファクタリング会社を紹介します。</p>
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

        {/* ── 活用事例 ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">物流業のファクタリング活用事例</h2>
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

        {/* ── 物流業の資金繰り改善方法 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">物流業の資金繰り改善方法</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリング以外にも、物流業の資金繰りを改善するための方法を紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">荷主との支払いサイト短縮交渉</h3>
              <p className="text-sm leading-relaxed text-text-light">
                翌々月末払い→翌月末払いへの変更交渉を行いましょう。特に長期取引の荷主とは交渉の余地があります。「支払いサイト短縮による安定的なサービス提供」をメリットとして提案するのが効果的です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">燃料費の前払い制度の活用</h3>
              <p className="text-sm leading-relaxed text-text-light">
                一部の石油元売り会社では、大口契約による燃料費の後払い制度やフリート向けのカード決済を提供しています。支払いサイトを活用して資金繰りの改善に役立てましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">車両リースの活用</h3>
              <p className="text-sm leading-relaxed text-text-light">
                車両を購入する代わりにリースを活用することで、初期費用を抑え、月々の支払いに分散させることができます。リース料は経費として計上でき、資金繰りの安定に寄与します。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">政策金融公庫の物流業向け融資</h3>
              <p className="text-sm leading-relaxed text-text-light">
                日本政策金融公庫は運送業・物流業向けの融資制度を提供しています。低金利で長期返済が可能なため、車両の購入資金や設備投資に適しています。ファクタリングと併用して資金計画を立てましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── ポイントと注意点 ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">物流業がファクタリングを利用する際のポイントと注意点</h2>
          <p className="mb-8 leading-relaxed text-text-light">物流業ならではの利用ポイントと注意すべき点をまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">大手荷主への売掛金は好条件で利用できる</h3>
              <p className="text-sm leading-relaxed text-text-light">
                Amazon、楽天、ヤマト運輸、佐川急便などの大手企業への売掛金は信用力が高いため、低い手数料で利用できることが多いです。売掛先の信用力が高ければ高いほど、条件が良くなる傾向にあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">運送契約書を手元に用意しておく</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの審査では、荷主との契約関係を証明するため運送契約書や業務委託契約書が必要になることがあります。スムーズな審査のために、契約書類は常に整理しておきましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">2024年問題への対応資金にも活用</h3>
              <p className="text-sm leading-relaxed text-text-light">
                物流業界の「2024年問題」（ドライバーの時間外労働規制）への対応として、システム投資やドライバー確保のための費用が増大しています。これらの先行投資資金をファクタリングで調達するケースも増えています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">手数料コストの管理を徹底する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングは便利ですが、手数料は実質的なコストです。利益率の低い配送案件でファクタリング手数料を上乗せすると利益が出なくなる可能性があるため、手数料込みでの収支計算を行いましょう。
              </p>
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

        {/* ── まとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：物流業がファクタリングを活用するポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">大手荷主への売掛金は好条件で利用可能</strong>：荷主の信用力が高いほど低手数料。大手EC企業・メーカーへの配送代金は特に有利。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">燃料費の急騰にも即対応</strong>：ファクタリングで売掛金を即日現金化すれば、燃料費の急な値上がりにも対応可能。配送サービスを止めない。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">2024年問題への投資資金にも活用</strong>：ドライバーの働き方改革に伴うシステム投資・人材確保の費用にファクタリングが使える。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">手数料コストを利益率に織り込む</strong>：低利益率の配送案件でファクタリングを使うと赤字になるリスクあり。手数料込みの収支計算を行う。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">複数社の見積もりを必ず比較</strong>：最低3社以上の見積もりを取り、手数料の総額で比較する。継続利用で手数料が下がる会社もある。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">荷主との支払い条件改善も並行して検討</strong>：ファクタリングだけに頼ら��、荷主との支払いサイト短縮交渉も行い、根本的な資金繰り改善を目指す。</span></li>
            </ul>
          </div>
        </section>

        {/* ── 物流業の利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">物流業のファクタリング利用の流れ</h2>
          <div className="space-y-3">
            {[
              { step: "荷主への配送完了・請求書発行", description: "配送業務が完了し、荷主企業に請求書を発行した時点で、ファクタリングの対象となります。" },
              { step: "ファクタリング会社に見積もり依頼", description: "請求書の金額・荷主企業名・入金予定日を伝え、3社以上に見積もりを依頼します。" },
              { step: "必要書類の提出", description: "請求書���通帳コピー（荷主からの入金実績）・身分証明書・運送契約書などを提出します。" },
              { step: "審査・契約", description: "荷主企業の信用力を中心に審査。通過後、ノンリコースの契約書を確認してサインします。" },
              { step: "即日入金", description: "契約完了後、最短即日〜2時間で指定口座に入金されます。燃料���・人件費の支払いに活用。" },
              { step: "荷��からの入金後に送金", description: "入金予定日に荷主から入金があったら、ファクタリング会社に送金して完了です。" },
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
              <p className="mt-1 text-sm text-text-light">下請け企業の資金繰り改善</p>
            </Link>
            <Link href="/articles/for-sole-proprietor/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">個人事業主向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">少額から利用できるサービス</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリング手数料ガイド</p>
              <p className="mt-1 text-sm text-text-light">相場と安くする方法</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">物流・倉庫業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            配送代金・運送料の売掛金に対応したファクタリング会社を一括比較。手数料・入金スピードであなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
