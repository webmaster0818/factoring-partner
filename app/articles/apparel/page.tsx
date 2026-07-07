import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "アパレル・縫製業向けファクタリング｜季節仕入れと入金サイトの資金ギャップを解消",
  description:
    "アパレル・縫製業向けファクタリングを解説。季節仕入れの先行負担、百貨店・ECの委託販売による長い入金サイト、返品リスクといった業界特有の資金繰り課題を、売掛債権の早期現金化で解消する方法とおすすめ3社を紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/apparel/",
  },
  openGraph: {
    title: "アパレル・縫製業向けファクタリング｜季節仕入れと入金サイトの資金ギャップを解消",
    description: "アパレル・縫製業の資金繰り課題とファクタリング活用法。売掛債権の早期現金化を解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/apparel/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "季節仕入れ・生産資金の先行負担",
    description:
      "アパレルは春夏・秋冬などシーズン単位で商品を企画・生産する商習慣のため、シーズンが始まる前に生地の仕入れや縫製の費用をまとめて支払う必要があります。販売代金の回収はシーズン中〜シーズン後になるため、支出と入金の間に数ヶ月単位のギャップが生じやすい構造です。",
  },
  {
    title: "小売・EC委託販売の入金サイトが長い",
    description:
      "百貨店・セレクトショップへの卸や委託販売、ECモールへの出店では、「月末締め翌月末払い」「締め後翌々月払い」など入金までのサイト（期間）が長く設定されることが一般的です。売上が立っても現金化まで時間がかかるため、次シーズンの仕入れ資金と重なると資金繰りが厳しくなります。",
  },
  {
    title: "返品・値引きで売上の確定が遅れる",
    description:
      "委託販売では売れ残った商品が返品される条件になっていることが多く、納品時点では売上金額が確定しません。また、シーズン後半のセールでの値引きにより、想定していた回収額を下回ることもあります。売上の確定が遅い・ぶれやすいことが、資金計画を立てにくくする要因です。",
  },
  {
    title: "縫製業はOEM受注で費用が先行する",
    description:
      "縫製業・OEM生産では、発注元のブランドやメーカーから受注した後、生地・副資材の仕入れと人件費を先に負担して生産し、納品後の支払サイトを経てようやく入金されます。受注が増えるほど先行費用も増えるため、成長期ほど運転資金が不足しやすい構造です。",
  },
];

const factoringTypes = [
  {
    title: "買取ファクタリング（納品済みの売掛債権）",
    description:
      "百貨店・小売店・ECモール運営会社・OEM発注元などへの納品・検収が済んだ売掛債権（請求書）をファクタリング会社に売却して現金化する方法です。2社間ファクタリングなら取引先に知られずに利用でき、最短即日で入金されます。取引先の信用力が審査の中心になるため、大手小売やモール運営会社への債権は評価されやすい傾向があります。",
    merit: "2社間で取引先に知られない・最短即日入金・自社の業歴より取引先の信用力で審査",
    demerit: "確定した債権が対象のため、委託販売で返品条件付きの未確定分は対象外となることがある",
  },
  {
    title: "注文書（発注書）ファクタリング",
    description:
      "受注段階の注文書・発注書をもとに、納品前の段階で資金化する方法です。シーズン前の生地仕入れや縫製費用など、生産に入る前の資金需要に対応できるのが特徴です。ただし対応しているファクタリング会社は限られ、納品前の債権を扱うぶん手数料は請求書のファクタリングより高くなる傾向があります。",
    merit: "生産・仕入れ前の資金需要に対応できる・受注拡大期のつなぎに使える",
    demerit: "対応会社が限られる・手数料が請求書ファクタリングより高くなる傾向",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "業界最大手級。幅広い業種の利用実績が豊富。2社間・3社間対応。注文書ファクタリングにも対応。最短2時間入金。全国対応・来店不要。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "シーズン仕入れ前の資金需要に使える注文書ファクタリングにも対応。高額案件にも対応し、卸先が複数ある場合の相談もしやすい。",
  },
  {
    name: "日本中小企業金融サポート機構",
    features: "一般社団法人が運営する非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit: "非営利法人のため手数料が業界最安水準。利益率がシビアなアパレル・縫製業でも手数料負担を抑えやすく、資金繰り相談も含めて頼りやすい。",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。少額（30万円〜）対応。オンライン完結型。個人事業主にも対応。最短即日入金。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit: "審査通過率が高く、小規模な縫製工場や個人事業のデザイナー・D2Cブランドでも利用しやすい。小口の売掛金から柔軟に対応。",
  },
];

const useCases = [
  {
    title: "想定シーン1：次シーズンの仕入れ資金の確保",
    problem: "今シーズンの卸売上は順調でも、入金サイトが長いため手元に現金がなく、次シーズンの生地仕入れ・生産発注の支払時期と重なって資金が不足する、というのはアパレルで典型的な資金繰りパターンです。",
    solution: "納品済みで入金待ちになっている卸先・モール運営会社への売掛債権をファクタリングで早期現金化し、仕入れ・生産資金に充てる方法が考えられます。",
    result: "入金サイトの長さに左右されずに次シーズンの準備を進めやすくなります。手数料はコストになるため、粗利とのバランスを見て利用額を絞ることが重要です。",
  },
  {
    title: "想定シーン2：OEM大口受注時の生産資金のつなぎ",
    problem: "縫製業で大口のOEM受注が入ると、生地・副資材の仕入れと人件費が先行し、納品後の支払サイトを待つ間の運転資金が不足しがちです。受注を断るか資金を工面するかの判断を迫られることもあります。",
    solution: "既存の納品済み売掛債権を現金化して生産資金に充てるほか、対応会社であれば受注段階の注文書ファクタリングで納品前に資金化する方法も考えられます。",
    result: "受注機会を逃さずに生産体制を組みやすくなります。恒常的な資金需要には銀行融資など他の手段との併用も検討し、手数料負担を最小限に抑えましょう。",
  },
];

const faqs = [
  {
    question: "委託販売の売掛金もファクタリングできますか？",
    answer:
      "ファクタリングの対象になるのは、原則として金額が確定した売掛債権です。委託販売では実際に売れた分の金額が締め日後に確定するため、確定後の債権（支払通知・精算書などで金額が確認できるもの）であれば売却できる可能性があります。返品条件付きで金額が未確定の納品分は対象外となることが多いため、精算サイクルと合わせてファクタリング会社に確認しましょう。",
  },
  {
    question: "アパレル・縫製業が使う場合の手数料相場は？",
    answer:
      "ファクタリング手数料の一般的な目安は2社間で8%〜18%、3社間で1%〜9%程度とされますが、実際の料率は会社や売掛先の信用力・契約内容によって異なります。百貨店やECモール運営会社など信用力の高い取引先への債権は、有利な条件になりやすい傾向があります。利益率が限られる業種のため、必ず複数社の見積もりを比較して手数料負担を確認しましょう。",
  },
  {
    question: "生産前の仕入れ資金にもファクタリングは使えますか？",
    answer:
      "納品前の段階では通常の買取ファクタリングは使えませんが、受注段階の注文書・発注書をもとに資金化する「注文書ファクタリング」に対応している会社であれば、シーズン仕入れや生産費用など納品前の資金需要にも対応できます。ただし対応会社は限られ、手数料も請求書のファクタリングより高くなる傾向があるため、条件をよく比較して検討しましょう。",
  },
  {
    question: "取引先の百貨店やブランドに知られずに利用できますか？",
    answer:
      "はい、2社間ファクタリングであれば取引先への通知や承諾は不要のため、百貨店・セレクトショップ・OEM発注元に知られずに利用できます。手数料を抑えたい場合は取引先の承諾を得る3社間ファクタリングも選択肢になります。取引関係への影響と手数料のバランスで選びましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "アパレル・縫製業向けファクタリング｜季節仕入れと入金サイトの資金ギャップを解消",
  description: "アパレル・縫製業の資金繰り課題とファクタリング活用法。売掛債権の早期現金化を解説。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/apparel/" },
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
    { "@type": "ListItem", position: 3, name: "アパレル・縫製業向けファクタリング", item: "https://hyogo-shihoushoshi.jp/articles/apparel/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ApparelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "アパレル・縫製業向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種特化ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            アパレル・縫製業向けファクタリング
            <br className="hidden md:block" />
            季節仕入れと入金サイトのギャップを解消
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            シーズン仕入れの先行負担、委託販売の長い入金サイト、返品リスクなど、アパレル・縫製業特有の資金繰り課題をファクタリングで解決。売掛債権の早期現金化の仕組みとおすすめサービスを紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. アパレル・縫製業の資金繰り課題</a></li>
            <li><a href="#types" className="hover:underline">2. アパレル・縫製業で使えるファクタリングの種類</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社3選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用が想定される場面</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">アパレル・縫製業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">アパレル・縫製業は、シーズン単位の商習慣と委託販売・OEMの取引構造により、支出が先行し回収が遅れやすい業種です。代表的な資金繰り課題を整理します。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">アパレル・縫製業で使えるファクタリングの種類</h2>
          <p className="mb-8 leading-relaxed text-text-light">アパレル・縫製業で利用できるファクタリングは大きく2種類あります。資金が必要なタイミング（納品後か生産前か）で使い分けましょう。</p>
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
          <p className="mb-8 leading-relaxed text-text-light">アパレル・縫製業のファクタリングに対応している会社を厳選して3社紹介します。</p>
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

        {/* ── 活用が想定される場面 ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">活用が想定される場面</h2>
          <p className="mb-8 leading-relaxed text-text-light">アパレル・縫製業でファクタリングの活用が想定される一般的な場面を紹介します（特定の企業の事例ではありません）。</p>
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
                    <p className="mb-1 text-sm font-semibold text-primary">活用方法</p>
                    <p className="text-sm text-text-light">{uc.solution}</p>
                  </div>
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-secondary">ポイント</p>
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
          <p className="mb-8 leading-relaxed text-text-light">アパレル・縫製業がファクタリングを利用する際の一般的な流れを解説します。</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">ファクタリング会社に相談・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">電話またはWebで問い合わせ。売掛先（卸先・モール運営会社・OEM発注元など）、売掛金額、希望入金日を伝えます。委託販売分は精算サイクルも合わせて相談しましょう。複数社の見積もり比較がおすすめです。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">本人確認書類、請求書（委託販売は支払通知・精算書など金額が確定した書類）、取引先との基本契約書、通帳コピーなどを提出します。必要書類は会社により異なるため事前に確認しましょう。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">売掛先の信用力と取引実績を中心に審査されます。百貨店・大手モール運営会社など信用力の高い売掛先への債権は評価されやすい傾向です。見積もりで手数料率と受取額を必ず確認しましょう。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">4</span>
              <div>
                <h3 className="font-bold text-text-main">契約・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">見積もりに同意したら契約を締結。2社間なら取引先への通知なしで、契約後最短即日〜数日で指定口座に入金されます。契約書の債権譲渡の範囲・償還請求権の有無は必ず確認しましょう。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── アパレル・縫製業で使う際のポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">アパレル・縫製業でファクタリングを使う際のポイント</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            アパレル・縫製業には委託販売や返品条件など特有の商習慣があるため、ファクタリングを利用する際は以下の点を押さえておきましょう。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">対象となる債権</strong>：卸先・小売店・百貨店・ECモール運営会社・OEM発注元などの事業者への売掛債権。一般消費者への直販売上（自社ECの都度決済など）は対象外です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">委託販売・返品条件の影響</strong>：金額が確定していない納品分は買取対象外となることが多く、返品・値引きの条件は買取可否や買取率（掛け目）の判断に影響します</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">生産前の資金需要</strong>：シーズン仕入れなど納品前の資金には注文書ファクタリング対応の会社を検討。対応会社が限られる点に注意</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">手数料と粗利のバランス</strong>：手数料は売上から直接差し引かれるコストです。粗利率と比較して採算が合う範囲で利用し、必ず複数社の見積もりを比較しましょう</span>
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
            <Link href="/articles/ec-commerce/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">EC・通販業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">モール売上の早期入金ガイド</p>
            </Link>
            <Link href="/articles/manufacturing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">製造業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">長い支払サイトの資金繰り対策</p>
            </Link>
            <Link href="/articles/payment-site/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">支払いサイトとは</p>
              <p className="mt-1 text-sm text-text-light">短縮方法とファクタリングの関係</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツも紹介</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">アパレル・縫製業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            季節仕入れの先行資金や長い入金サイトに対応できる会社を手数料・入金スピードで徹底比較。あなたの事業に最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
