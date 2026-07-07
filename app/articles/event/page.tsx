import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "イベント・催事業向けファクタリング｜開催後精算の請求書を現金化",
  description:
    "イベント・催事業向けファクタリングを徹底解説。開催後精算の請求書や設営費・人件費の先行支出による資金ギャップを早期現金化で埋める方法、メリット・デメリット、おすすめ3社を紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/event/",
  },
  openGraph: {
    title: "イベント・催事業向けファクタリング｜開催後精算の請求書を現金化",
    description: "イベント・催事業の資金繰り課題とファクタリング活用法。開催後精算の請求書の早期現金化を解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/event/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "開催後精算による入金の遅れ",
    description:
      "イベント運営・催事の請負代金は、開催終了後に請求し、翌月末〜翌々月に入金される後払い精算が一般的です。企画から開催まで数ヶ月かけて費用を投じたうえで、さらに入金を待つ期間が発生するため、資金の回収サイクルが長くなりがちです。",
  },
  {
    title: "設営費・機材費・人件費の先行支出",
    description:
      "会場費、ステージ・ブースの設営費、音響・照明などの機材費、スタッフ・警備の人件費は、開催前から開催当日にかけて支払いが発生します。売上の入金前に大きな支出が集中する、典型的な先行投資型のコスト構造です。",
  },
  {
    title: "単発案件ごとの資金ギャップ",
    description:
      "イベント・催事は単発・スポットの案件が多く、案件ごとに支出と入金のタイミングがずれます。大型案件を受注するほど先行支出も大きくなるため、手元資金が不足していると受注機会を逃す要因になります。",
  },
  {
    title: "季節・時期による売上の波",
    description:
      "イベント需要は季節や時期による繁閑の差が大きい業種です。繁忙期は複数案件の先行支出が重なり、閑散期は固定費の支払いが続くため、年間を通じて資金繰りの平準化が課題になります。",
  },
];

const factoringTypes = [
  {
    title: "2社間ファクタリング",
    description:
      "主催者・広告代理店・自治体などへの請求書（開催後の請負代金）を、取引先に通知せずファクタリング会社に売却して現金化する方法です。利用者とファクタリング会社の2社間で完結するため、発注元との関係に影響を与えずに利用できます。",
    merit: "取引先に知られない・最短即日入金",
    demerit: "3社間より手数料が高い（8%〜18%程度が目安）",
  },
  {
    title: "3社間ファクタリング",
    description:
      "売掛先（主催者・代理店など）の承諾を得て債権を譲渡する方法です。売掛先が直接ファクタリング会社に支払うため回収リスクが低く、手数料は2社間より大幅に安くなります。継続取引のある代理店・法人案件に向いています。なお、受注段階の注文書を資金化できるサービスを提供する会社もありますが、対応会社は限られます。",
    merit: "手数料が安い（1%〜9%程度が目安）・高額にも対応しやすい",
    demerit: "売掛先への通知・承諾が必要・入金まで数日かかることがある",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "業界最大手級。2社間・3社間対応。法人・個人事業主対応。最短2時間入金。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "高額案件にも対応でき、大型イベントの請負代金など金額の大きい売掛金でも相談しやすい。全国の事業者から利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    features: "一般社団法人が運営する非営利型。経済産業大臣認定。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit: "非営利法人のため手数料が業界最安水準。認定機関の安心感があり、利益率を確保したいイベント事業者に向く。",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。少額（30万円〜）対応。オンライン完結型。個人事業主にも対応。最短即日入金。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit: "審査通過率が高く、設立間もない制作会社やフリーランスのイベント業者でも相談しやすい。小規模催事の少額売掛金にも対応。",
  },
];

const useCases = [
  {
    title: "活用イメージ1：開催後精算までのつなぎ資金",
    problem: "イベントは無事終了したが、請負代金の入金は翌々月末。開催のために立て替えた設営費・人件費の支払いが先に到来し、次の案件の準備資金も不足気味になる。",
    solution: "開催後に発行した請求書（主催者・代理店への売掛債権）をファクタリングで早期現金化し、入金予定日を待たずに支払い原資と次案件の準備資金を確保する。",
    result: "支払いサイトの長さによる立て替え負担が軽減され、外注先・スタッフへの支払いを予定どおり行いやすくなる。入金待ちで次の受注をためらう状況を避けやすくなる。",
  },
  {
    title: "活用イメージ2：大型案件受注時の先行費用への対応",
    problem: "これまでより規模の大きい催事を受注。会場費・機材費・設営費の先行支出が従来案件より大きく、既存の入金待ち売掛金だけでは手元資金が足りない。",
    solution: "完了済み案件の入金待ち請求書をファクタリングで現金化し、先行費用に充当する。必要な分だけ売却すれば手数料負担も抑えられる。",
    result: "手元資金を理由に大型案件を断る事態を避けやすくなる。融資と異なり負債にならないため、後日の借入余力にも影響しにくい。",
  },
];

const faqs = [
  {
    question: "イベント会社でファクタリングを利用するメリットは？",
    answer:
      "イベント・催事業がファクタリングを利用するメリットは、①開催後精算による入金待ちを解消できる②設営費・人件費など先行支出の原資を確保できる③担保・保証人不要④最短即日で資金調達可能⑤2社間なら発注元に知られない、の5点です。支出が先行し入金が後になる業種特性と相性の良い資金調達方法です。",
  },
  {
    question: "イベント・催事業のファクタリング手数料の相場は？",
    answer:
      "手数料の相場は2社間ファクタリングで8%〜18%、3社間ファクタリングで1%〜9%が目安です（会社により異なります）。売掛先が大手代理店・自治体など信用力の高い相手であれば、手数料は低くなりやすい傾向があります。複数社から見積もりを取って比較することをおすすめします。",
  },
  {
    question: "開催前（請求書発行前）の段階でも資金化できますか？",
    answer:
      "通常のファクタリングは、業務完了後に発行した請求書（確定した売掛債権）が対象です。開催前の段階では、受注時の注文書・発注書を資金化する「注文書ファクタリング」を提供する会社であれば相談できる場合がありますが、対応会社は限られ、手数料も請求書ファクタリングより高くなる傾向があります。まずは各社に対象可否を確認しましょう。",
  },
  {
    question: "個人事業主のイベント業でもファクタリングは利用できますか？",
    answer:
      "個人事業主に対応しているファクタリング会社であれば利用可能です。対象となるのは法人（主催者・代理店・自治体など）宛ての請求書で、個人客からのチケット代金そのものは対象外となるのが一般的です。個人事業主対応・少額対応をうたう会社（アクセルファクターなど）を選ぶとスムーズです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "イベント・催事業向けファクタリング｜開催後精算の請求書を現金化",
  description: "イベント・催事業の資金繰り課題とファクタリング活用法。開催後精算の請求書の早期現金化を解説。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/event/" },
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
    { "@type": "ListItem", position: 3, name: "イベント・催事業向けファクタリング", item: "https://hyogo-shihoushoshi.jp/articles/event/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function EventPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "イベント・催事業向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種特化ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            イベント・催事業向けファクタリング
            <br className="hidden md:block" />
            開催後精算の請求書を現金化
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            開催後精算による入金待ちや設営費・人件費の先行支出など、イベント・催事業特有の資金繰り課題をファクタリングで解決。売掛金の早期現金化の仕組みとおすすめサービスを紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. イベント・催事業の資金繰り課題</a></li>
            <li><a href="#types" className="hover:underline">2. イベント・催事業で使えるファクタリングの種類</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社3選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用イメージ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">イベント・催事業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">イベント・催事業は、開催前に大きな支出が集中し、売上の入金は開催後になるという、支出先行・入金後払いの構造を持つ業種です。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">イベント・催事業で使えるファクタリングの種類</h2>
          <p className="mb-8 leading-relaxed text-text-light">イベント・催事業で利用できるファクタリングは大きく2種類あります。それぞれの特徴を理解して、自社に最適な方法を選びましょう。</p>
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
          <p className="mb-8 leading-relaxed text-text-light">イベント・催事業の売掛金の資金化に利用しやすい会社を厳選して3社紹介します。</p>
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

        {/* ── 活用イメージ ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">活用イメージ</h2>
          <p className="mb-8 leading-relaxed text-text-light">イベント・催事業でファクタリングが活用される一般的なパターンを紹介します（特定の事例ではなく、想定される利用シーンです）。</p>
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
          <p className="mb-8 leading-relaxed text-text-light">イベント・催事業がファクタリングを利用する際の一般的な流れを解説します。</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">ファクタリング会社に相談・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">電話またはWebで問い合わせ。売掛金の金額、売掛先（主催者・代理店・自治体など）、希望入金日を伝えます。複数社に同時に相談して見積もりを比較することをおすすめします。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">身分証明書、請求書・業務委託契約書（イベント運営・催事請負の契約書など）、通帳コピーなどを提出します。会社によっては決算書や発注書を求められることもあります。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">審査では利用者自身よりも売掛先の信用力が重視されます。大手代理店や自治体宛ての請求書は評価されやすい傾向があります。見積もりで手数料率と受取額を確認しましょう。</p>
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

        {/* ── イベント請求書の資金化のポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">イベント・催事業の請求書を資金化するポイント</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            イベント・催事業の売掛金は単発案件が中心で、案件ごとに金額・売掛先が変わります。ファクタリングを検討する際は、どの債権が対象になり得るかを整理しておくとスムーズです。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">対象になりやすい債権</strong>：主催者・広告代理店・自治体・法人宛てのイベント運営・催事請負・設営業務の請求書（業務完了後の確定債権）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">手数料の目安</strong>：2社間8%〜18%・3社間1%〜9%程度（会社により異なる）。売掛先の信用力が高いほど低くなりやすい</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">審査のポイント</strong>：売掛先の信用力、請求書・契約書・発注書などの裏付け資料の有無、業務完了の確認しやすさ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">注意点</strong>：個人客からのチケット代金そのものは対象外が一般的。開催前の受注段階は注文書ファクタリング対応会社に限られ、手数料も高くなる傾向</span>
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
            <Link href="/articles/creative/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">広告・クリエイティブ業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">制作費の資金繰り改善ガイド</p>
            </Link>
            <Link href="/articles/restaurant/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">飲食業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">クレジットカード債権で資金調達</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツも紹介</p>
            </Link>
            <Link href="/articles/required-documents/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングの必要書類</p>
              <p className="mt-1 text-sm text-text-light">準備すべき書類を一覧で紹介</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">イベント・催事業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            開催後精算の請求書の資金化に使える会社を手数料・入金スピードで徹底比較。あなたの会社に最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
