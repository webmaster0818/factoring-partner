import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "印刷業向けファクタリング｜納品後の入金待ちを解消",
  description:
    "印刷業向けファクタリングを徹底解説。チラシ・カタログ・パッケージなどの印刷代金の入金サイトを短縮し、用紙・インク代の支払いに対応する方法を紹介。おすすめのファクタリング会社5選も比較。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/printing/",
  },
  openGraph: {
    title: "印刷業向けファクタリング｜納品後の入金待ちを解消",
    description: "印刷業の資金繰り改善にファクタリングを活用。印刷代金の早期現金化方法を解説。",
    url: "https://factoring-partner.pages.dev/articles/printing/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "納品後の入金サイトが30〜90日",
    description:
      "印刷物の納品後、クライアントからの入金まで30〜90日かかるケースが一般的です。特に大手広告代理店や出版社との取引では支払いサイトが長い傾向にあり、月末締め翌々月末払いも珍しくありません。",
  },
  {
    title: "用紙・インクの材料費が先行する",
    description:
      "印刷に必要な用紙・インク・加工材料は受注時に仕入れる必要があり、材料費の支払いが売上の入金より先行します。大量印刷の案件ほど材料費が高額になり、資金繰りへの影響が大きくなります。",
  },
  {
    title: "印刷機の設備投資・維持費が高額",
    description:
      "印刷機は高額な設備であり、リース料や保守費用が毎月発生します。また、老朽化した印刷機の更新や最新機への入れ替えには多額の投資が必要で、資金計画が重要です。",
  },
  {
    title: "デジタル化への対応投資",
    description:
      "印刷業界はオフセット印刷からオンデマンド印刷への移行が進んでおり、デジタル印刷機への設備投資が求められています。また、Web制作やデジタルマーケティングへの事業拡大にも資金が必要です。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "業界最大手級。印刷業の利用実績あり。高額案件にも対応。最短2時間入金。2社間・3社間対応。",
    fee: "2%〜",
    speed: "最短2時間",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。30万円〜の少額対応。個人事業主の印刷業者もOK。即日入金対応。",
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
    features: "非営利法人運営。経済産業大臣認定。低手数料で中小印刷会社にもおすすめ。",
    fee: "1.5%〜",
    speed: "最短即日",
  },
  {
    name: "ラボル",
    features: "個人経営の印刷所にも対応。1万円〜利用可能。24時間365日振込。手数料一律。",
    fee: "10%固定",
    speed: "最短60分",
  },
];

const useCases = [
  {
    title: "大手広告代理店への印刷代金を早期入金",
    situation: "大手広告代理店からカタログ印刷50万部を受注。印刷代金800万円の入金は納品から90日後。用紙・インク代300万円と外注加工費100万円の支払いが先行する。",
    solution: "納品完了後の請求書をファクタリングで買取。手数料5%（40万円）で760万円を即日受取。材料費・外注費を速やかに支払い、次の案件にも対応可能に。",
  },
  {
    title: "年末の大量受注への対応",
    situation: "年末はカレンダー・年賀状・お歳暮パンフレットの受注が集中。材料費の先行支出が通常月の3倍に膨らむが、入金は翌年1〜2月にならないと見込めない。",
    solution: "10月・11月の確定済み売掛金をファクタリングで現金化。年末の大量受注に必要な材料費を確保し、受注機会を逃さず売上を最大化。",
  },
  {
    title: "デジタル印刷機の導入資金",
    situation: "オンデマンド印刷の需要増加に対応するため、デジタル印刷機（1,500万円）の導入を検討中。銀行融資の審査には2ヶ月かかる見込みで、競合に先を越されるリスク。",
    solution: "既存の売掛金をファクタリングで現金化し、設備導入の頭金に充当。銀行融資と併用して、早期に設備を導入。新規受注の獲得に成功。",
  },
];

const printingTypes = [
  {
    type: "商業印刷",
    description: "チラシ・パンフレット・カタログ・ポスターなどの商業印刷物。広告代理店やデザイン会社からの受注が多く、入金サイトが長い傾向にあります。",
  },
  {
    type: "出版印刷",
    description: "書籍・雑誌・教科書などの出版印刷。出版社との取引は入金サイトが90日以上になることもあり、ファクタリングの活用ニーズが高い分野です。",
  },
  {
    type: "パッケージ印刷",
    description: "食品・化粧品・日用品のパッケージ印刷。大手メーカーとの取引は金額が大きい反面、支払いサイトも長く、材料費の先行支出をファクタリングで対応するケースが多いです。",
  },
  {
    type: "名刺・事務用印刷",
    description: "名刺・封筒・伝票など事務用印刷物の受注。1件あたりの金額は小さいですが、法人向けの定期受注をまとめてファクタリングすることで資金繰りを改善できます。",
  },
];

const faqs = [
  {
    question: "印刷業でファクタリングを利用する際の必要書類は？",
    answer:
      "一般的に必要な書類は、①クライアントへの請求書②印刷受注書（または発注書）③直近3ヶ月分の通帳コピー（クライアントからの入金実績が確認できるもの）④代表者の身分証明書⑤会社の登記簿謄本（法人の場合）です。QuQuMoのように請求書と通帳のみで審査可能な会社もあります。",
  },
  {
    question: "個人経営の印刷所でもファクタリングを利用できますか？",
    answer:
      "はい、個人事業主でも利用可能です。ラボル、アクセルファクター、QuQuMoなどは個人事業主にも対応しています。法人向けの印刷代金の請求書があれば、ファクタリングの対象になります。",
  },
  {
    question: "取引先（広告代理店など）に知られずに利用できますか？",
    answer:
      "はい、2社間ファクタリングを選べば取引先に通知されません。印刷業は受注先との信頼関係が重要なため、2社間ファクタリングを選択する企業が多いです。3社間より手数料は高めですが、取引関係を維持できます。",
  },
  {
    question: "印刷業のファクタリング手数料の相場は？",
    answer:
      "印刷業の手数料は、2社間で5%〜15%、3社間で1%〜8%程度です。大手広告代理店や出版社への売掛金は信用力が高いため、比較的低い手数料で利用できます。複数社の見積もりを取り、最も条件の良い会社を選びましょう。",
  },
  {
    question: "月に複数回ファクタリングを利用できますか？",
    answer:
      "はい、複数回の利用は可能です。納品が完了し請求書を発行するたびにファクタリングを利用できます。継続利用で手数料が下がる会社も多いため、定期的に利用する場合は優遇条件を交渉しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "印刷業向けファクタリング｜納品後の入金待ちを解消",
  description: "印刷業の資金繰り改善にファクタリングを活用。印刷代金の早期現金化方法を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/printing/" },
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
    { "@type": "ListItem", position: 3, name: "印刷業向けファクタリング", item: "https://factoring-partner.pages.dev/articles/printing/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function PrintingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "印刷業向けファクタリング" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種別ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            印刷業向けファクタリング
            <br className="hidden md:block" />
            納品後の入金待ちを解消
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            印刷業の資金繰り課題をファクタリングで解決。印刷代金の入金サイトを短縮し、用紙・インク代の支払いに対応する方法を詳しく解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. 印刷業の資金繰り課題</a></li>
            <li><a href="#printing-types" className="hover:underline">2. 印刷業の種類と活用シーン</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社5選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用事例</a></li>
            <li><a href="#tips" className="hover:underline">5. 利用時のポイントと注意点</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">印刷業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">印刷業界は材料費が先行し、入金サイトが長い業種です。主な資金繰り課題を確認しましょう。</p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="printing-types" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">印刷業の種類と活用シーン</h2>
          <p className="mb-8 leading-relaxed text-text-light">印刷業の種類ごとに、ファクタリングの活用シーンを紹介します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {printingTypes.map((item) => (
              <div key={item.type} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.type}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">印刷業におすすめのファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">印刷代金の売掛金に対応したおすすめのファクタリング会社を紹介します。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">印刷業のファクタリング活用事例</h2>
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

        {/* ── 印刷業の資金繰り改善方法 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">印刷業の資金繰り改善方法</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリング以外にも活用できる、印刷業の資金繰り改善方法を紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">前払い制度・着手金の導入</h3>
              <p className="text-sm leading-relaxed text-text-light">
                大型案件では、受注時に着手金（総額の30〜50%）を請求する契約条件を提案しましょう。材料費の先行支出をカバーでき、資金繰りが大幅に改善します。新規顧客との取引開始時に導入するのが交渉しやすいタイミングです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">用紙メーカーとの支払い条件の交渉</h3>
              <p className="text-sm leading-relaxed text-text-light">
                用紙・インクの仕入れ先との支払いサイトを延長できないか交渉しましょう。仕入れ先の支払いサイトを延ばすことで、売上の入金との時間差を縮小できます。長年の取引実績がある仕入れ先ほど交渉に応じてくれやすいです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">印刷機のリース活用</h3>
              <p className="text-sm leading-relaxed text-text-light">
                高額な印刷機の購入にはリースを活用しましょう。初期費用を抑え、月々のリース料として費用を分散できます。リース料は全額経費計上できるため、税制上のメリットもあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">Web受注によるキャッシュフロー改善</h3>
              <p className="text-sm leading-relaxed text-text-light">
                名刺・チラシなど小ロットのWeb受注を導入し、クレジットカード決済にすることで即時入金に近い形を実現できます。Web受注は前払い・即日決済が一般的なため、キャッシュフローの改善に効果的です。
              </p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用時のポイントと注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">大口案件と小口案件の使い分け</h3>
              <p className="text-sm leading-relaxed text-text-light">
                大型案件（数百万円規模）はファクタリングで対応し、小口案件は自己資金で回すなど、案件の規模に応じて使い分けることでコストを最適化できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">材料費の支払いタイミングを最適化する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                用紙・インクメーカーとの支払い条件を交渉し、入金と支出のタイミングを近づけることで、ファクタリングの利用頻度を減らせます。仕入先との良好な関係構築も重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">デジタル化投資の資金計画を立てる</h3>
              <p className="text-sm leading-relaxed text-text-light">
                オンデマンド印刷やデジタルマーケティングへの投資は、銀行融資とファクタリングを組み合わせて計画的に行いましょう。短期資金はファクタリング、長期投資は融資という使い分けが有効です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">手数料を利益率に織り込む</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料は印刷案件の利益率に直接影響します。見積もり作成時にファクタリング手数料を考慮した価格設定を行い、利益が確保できる水準を維持しましょう。
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：印刷業がファクタリングを活用するポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">大手広告代理店・出版社への売掛金は好条件</strong>：売掛先の信用力が高いほど低手数料で利用可能。大口取引を優先してファクタリング。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">繁忙期の材料費確保に有効</strong>：年末や年度末の大量受注時に、用紙・インクの追加仕入れ資金をファクタリングで確保。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">デジタル化投資にも活用</strong>：オンデマンド印刷機やDTPシステムへの投資資金としてもファクタリングが使える。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">手数料を利益率に織り込む</strong>：見積もり作成時にファクタリング手数料を考慮した価格設定を行い、利益を確保。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">複数社の見積もりを比較</strong>：最低3社以上に見積もりを依頼し、手数料の総額で比較する。継続利用で手数料が下がる会社もある。</span></li>
            </ul>
          </div>
        </section>

        {/* ── 印刷業の利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">印刷業のファクタリング利用の流れ</h2>
          <div className="space-y-3">
            {[
              { step: "印刷物の納品・請求書発行", description: "チラシ・カタログ・パッケージなどの印刷物を納品し、クライアントに請求書を発行した時点でファクタリングの対象に。" },
              { step: "ファクタリング会社に見積もり依頼", description: "請求書の金額・クライアント企業名・入金予定日を伝え、3社以上に見積もりを依頼します。" },
              { step: "必要書類の提出", description: "請求書・通帳コピー・身分証明書・印刷受注書などをオンラインで提出します。" },
              { step: "審査・契約", description: "クライアント企業の信用力を中心に審査。ノンリコースの契約書を確認して締結します。" },
              { step: "即日入金", description: "契約完了後、最短即日で指定口座に入金。用紙・インクの仕入れ費用や外注加工費の支払いに活用。" },
              { step: "クライアントからの入金後に送金", description: "入金予定日にクライアントから入金があったら、ファクタリング会社に送金して完了です。" },
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
            <Link href="/articles/manufacturing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">製造業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">下請け企業の資金繰り改善</p>
            </Link>
            <Link href="/articles/creative/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">クリエイティブ業向け</p>
              <p className="mt-1 text-sm text-text-light">デザイン・制作費の早期入金</p>
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

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">印刷業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            印刷代金の売掛金に対応したファクタリング会社を一括比較。手数料・入金スピードであなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
