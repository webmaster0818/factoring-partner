import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "不動産業向けファクタリング｜家賃収入債権の活用ガイド",
  description:
    "不動産業向けファクタリングを徹底解説。家賃収入債権・売買仲介手数料の早期資金化方法、不動産業特有の資金繰り課題、活用事例、注意点をわかりやすく紹介。物件購入・リフォーム費用の調達に悩む不動産事業者必見です。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/real-estate/",
  },
  openGraph: {
    title: "不動産業向けファクタリング｜家賃収入債権の活用ガイド",
    description:
      "不動産業の資金繰り課題を家賃収入債権ファクタリングで解決。活用事例と注意点を解説。",
    url: "https://factoring-partner.pages.dev/articles/real-estate/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "物件取得・リフォームに多額の先行投資が必要",
    description:
      "不動産業では物件の取得やリフォームに数百万〜数千万円の資金が先行して必要です。投資した資金を家賃や売却益で回収するまでに長期間を要するため、資金繰りが逼迫しやすい構造になっています。",
  },
  {
    title: "家賃収入は安定しているが入金サイクルが月1回",
    description:
      "賃貸経営では家賃収入が月1回の入金となるため、月の途中で発生する修繕費や管理費、ローン返済との支払いタイミングのズレが生じやすくなります。空室が発生すると計画通りの収入が得られず、資金計画が狂うこともあります。",
  },
  {
    title: "仲介手数料は取引完了まで受け取れない",
    description:
      "売買仲介・賃貸仲介では、取引が成立し物件引き渡しが完了するまで仲介手数料を受け取れません。大型案件ほど交渉期間が長期化し、その間の人件費や広告宣伝費は自己負担となります。",
  },
  {
    title: "銀行融資は審査が長く物件購入のタイミングに間に合わない",
    description:
      "不動産投資向けの融資は審査が厳格で、2週間〜1ヶ月以上かかることが一般的です。良い物件は競争が激しく、融資審査を待っている間にほかの買い手に先を越されてしまうケースもあります。",
  },
];

const receivableTypes = [
  {
    title: "家賃収入債権",
    description:
      "入居者からの家賃（将来の家賃収入）をファクタリング会社に売却して早期資金化する方法です。安定した家賃収入が見込める物件であれば、審査が通りやすく手数料も比較的低く抑えられます。管理会社経由の家賃回収の場合は、管理会社からの入金予定額が対象となります。",
  },
  {
    title: "仲介手数料債権",
    description:
      "売買・賃貸仲介で発生する仲介手数料の売掛金をファクタリングで資金化する方法です。法人顧客への仲介手数料は請求書発行後に入金されるため、この入金を早めることができます。個人顧客の場合は決済時に受領するため対象外となることがあります。",
  },
  {
    title: "管理委託報酬債権",
    description:
      "不動産管理業務の委託報酬（管理費）も売掛債権としてファクタリングの対象になります。物件オーナーから毎月受け取る管理報酬を早期に資金化し、管理業務に必要な経費に充てることができます。",
  },
];

const faqs = [
  {
    question: "家賃収入をファクタリングで資金化できますか？",
    answer:
      "はい、家賃収入債権はファクタリングの対象になります。入居者または管理会社から受け取る予定の家賃をファクタリング会社に売却し、入金予定日より前に資金化できます。安定した入居率のある物件であれば審査も通りやすく、手数料も低くなる傾向があります。",
  },
  {
    question: "不動産業のファクタリングでは手数料はどのくらいですか？",
    answer:
      "家賃収入債権のファクタリングは手数料3%〜10%程度が相場です。入居者やテナントの属性（法人テナントは信用力が高い）、物件の稼働率、家賃の支払い実績などが審査の判断材料となります。3社間ファクタリングを利用すれば手数料をさらに低く抑えられます。",
  },
  {
    question: "空室が多い物件でもファクタリングを利用できますか？",
    answer:
      "空室がある物件でも、現在入居している部屋の家賃債権についてはファクタリングの対象になります。ただし、空室率が高い物件は安定性が低いと判断され、手数料が高くなったり審査が通りにくくなったりする可能性があります。",
  },
  {
    question: "入居者にファクタリングの利用が知られることはありますか？",
    answer:
      "2社間ファクタリングであれば入居者にファクタリングの利用は通知されません。管理会社経由で家賃を回収している場合も同様です。3社間ファクタリングの場合は管理会社や入居者への通知・承諾が必要になりますが、家賃の振込先変更の形で行われるため心理的な影響は比較的小さいです。",
  },
  {
    question: "不動産投資ローンの返済に充てることはできますか？",
    answer:
      "ファクタリングで調達した資金の使途は自由であり、不動産投資ローンの返済にも充てることができます。ただし、恒常的にファクタリングでローン返済を賄うのはコストが高くなるため、一時的な資金不足の解消手段として利用するのが適切です。根本的な資金繰りの改善も並行して進めましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "不動産業向けファクタリング｜家賃収入債権の活用ガイド",
  description:
    "不動産業の資金繰り課題を家賃収入債権ファクタリングで解決。活用事例と注意点を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://factoring-partner.pages.dev/articles/real-estate/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://factoring-partner.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "コラム",
      item: "https://factoring-partner.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "不動産業向けファクタリング",
      item: "https://factoring-partner.pages.dev/articles/real-estate/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function RealEstatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "コラム", href: "/articles/" },
          { label: "不動産業向けファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            業種特化ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            不動産業向けファクタリング
            <br className="hidden md:block" />
            家賃収入債権の活用ガイド
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            物件取得費・リフォーム費の先行投資、家賃入金のタイミングズレ──不動産業特有の資金繰り課題をファクタリングで解決する方法を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. 不動産業の資金繰り課題</a></li>
            <li><a href="#receivable-types" className="hover:underline">2. ファクタリング対象となる不動産関連債権</a></li>
            <li><a href="#merits" className="hover:underline">3. 不動産業がファクタリングを使うメリット</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用事例3選</a></li>
            <li><a href="#caution" className="hover:underline">5. 利用時の注意点</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 不動産業の資金繰り課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            不動産業の資金繰り課題
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            不動産業は多額の先行投資が必要な一方、収益化までに時間がかかる業種です。主な資金繰りの課題を解説します。
          </p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 対象となる債権 ─── */}
        <section id="receivable-types" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング対象となる不動産関連債権
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            不動産業で発生する売掛債権のうち、ファクタリングの対象となる主な債権の種類を解説します。
          </p>
          <div className="space-y-4">
            {receivableTypes.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 font-bold text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            不動産業がファクタリングを使うメリット
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            不動産業がファクタリングを活用するメリットを4つ解説します。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">物件取得のチャンスを逃さない</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングで即日〜数日で資金化できるため、銀行融資の審査を待つ間に物件を他社に取られるリスクを回避できます。スピード勝負の不動産取引で大きなアドバンテージとなります。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">家賃収入の安定性が高い審査評価に</h3>
              <p className="text-sm leading-relaxed text-text-light">
                家賃収入は安定したキャッシュフローであるため、ファクタリング審査では高く評価されます。法人テナントが入居している物件は特に信用力が高く、手数料も低くなります。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">借入ではないため負債にならない</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングは売掛債権の売却であり借入ではないため、貸借対照表の負債に計上されません。不動産投資で既に多額の借入がある場合でも、財務バランスを悪化させずに資金調達が可能です。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">リフォーム・修繕費用を即時確保</h3>
              <p className="text-sm leading-relaxed text-text-light">
                突発的な設備故障や退去後のリフォーム費用が発生しても、家賃債権をファクタリングすることで迅速に資金を確保できます。空室期間を最小限に抑えることが可能です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 活用事例 ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            活用事例3選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            不動産業でファクタリングを活用した事例を紹介します。
          </p>
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">事例1：収益物件の購入資金を緊急調達</h3>
              <p className="mb-4 text-xs text-text-light">業種：不動産投資（法人）</p>
              <div className="space-y-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                  <p className="text-sm text-text-light">
                    利回り10%の好条件の収益物件（3,000万円）が売りに出されたが、銀行融資の審査に3週間かかると言われた。他の買い手も手を挙げており、1週間以内に手付金500万円を入れる必要があった。
                  </p>
                </div>
                <div className="rounded-lg bg-primary-light p-4">
                  <p className="mb-1 text-sm font-semibold text-primary">解決策</p>
                  <p className="text-sm text-text-light">
                    所有する賃貸マンション（月間家賃収入150万円）の家賃債権4ヶ月分をファクタリング。手数料5%で570万円を3営業日で調達し、手付金を支払った。
                  </p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                  <p className="text-sm text-text-light">
                    好条件の物件を取得成功。銀行融資が通った後にローンに切り替え、ファクタリングの手数料を差し引いても年間利益が大幅に増加した。
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">事例2：空室対策のリフォーム費用を調達</h3>
              <p className="mb-4 text-xs text-text-light">業種：賃貸経営（個人事業主）</p>
              <div className="space-y-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                  <p className="text-sm text-text-light">
                    築20年のアパート（8室）で3室が空室。入居率を上げるために水回りのリフォームが必要だが、費用240万円の手元資金がなかった。
                  </p>
                </div>
                <div className="rounded-lg bg-primary-light p-4">
                  <p className="mb-1 text-sm font-semibold text-primary">解決策</p>
                  <p className="text-sm text-text-light">
                    入居中5室の家賃債権（月間30万円×5室＝150万円）の2ヶ月分をファクタリング。手数料8%で276万円を調達し、リフォームに着手した。
                  </p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                  <p className="text-sm text-text-light">
                    リフォーム完了後2ヶ月で3室すべてに入居者が決まり、満室に。月間家賃収入が30万円増加し、ファクタリングの手数料は3ヶ月で回収できた。
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">事例3：仲介手数料の入金前に広告費を確保</h3>
              <p className="mb-4 text-xs text-text-light">業種：不動産仲介（法人）</p>
              <div className="space-y-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                  <p className="text-sm text-text-light">
                    大型商業施設のテナント仲介案件で仲介手数料500万円が発生するが、入金は引き渡し完了後の翌月末。その間に繁忙期のWeb広告費200万円の支払いが迫っていた。
                  </p>
                </div>
                <div className="rounded-lg bg-primary-light p-4">
                  <p className="mb-1 text-sm font-semibold text-primary">解決策</p>
                  <p className="text-sm text-text-light">
                    仲介手数料の売掛金500万円を3社間ファクタリングで売却。売掛先（法人テナント）の承諾を得て、手数料3%で485万円を即日調達した。
                  </p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                  <p className="text-sm text-text-light">
                    繁忙期のWeb広告を予定通り展開し、新規問い合わせが前年比150%に増加。広告投資のタイミングを逃さなかったことで、年間の仲介件数が大幅に伸びた。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            利用時の注意点
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            不動産業でファクタリングを利用する際に注意すべきポイントをまとめます。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">賃貸借契約の債権譲渡禁止条項を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                賃貸借契約に債権譲渡禁止条項が含まれている場合があります。2020年の民法改正により、債権譲渡禁止条項があっても債権譲渡自体は有効ですが、トラブル防止のため事前に契約内容を確認し、必要に応じて法律の専門家に相談しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">将来債権のファクタリングにはリスクがある</h3>
              <p className="text-sm leading-relaxed text-text-light">
                将来の家賃収入（まだ発生していない家賃債権）をファクタリングする場合、入居者の退去リスクが伴います。空室が発生するとファクタリング会社への支払い原資がなくなるため、償還請求権の有無を確認し、リスクを十分に理解したうえで利用してください。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">手数料と投資利回りのバランスを考慮する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料が不動産投資の利回りを上回ると、投資全体の収益性が低下します。年間の手数料コストと投資リターンを比較し、採算が合うかを事前に検証してから利用しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">不動産担保ローンとの比較も検討する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                不動産を所有している場合、不動産担保ローンのほうが金利が低い場合があります。ファクタリングはスピード重視の場面で有効ですが、時間に余裕がある場合は不動産担保ローンも含めて複数の選択肢を比較検討しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            不動産業でのファクタリング利用の流れ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            不動産業でファクタリングを利用する際の一般的な流れを解説します。
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">ファクタリング会社に相談・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  電話またはWebから問い合わせ。家賃収入の月額、物件の稼働率、売掛先（テナント・管理会社）の情報、希望する資金化金額を伝えます。不動産関連の債権に対応しているかを事前に確認しましょう。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  身分証明書、賃貸借契約書、家賃入金の通帳コピー、物件の登記簿謄本（場合により）、管理委託契約書などを提出します。法人の場合は決算書の提出を求められることもあります。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  ファクタリング会社がテナントの信用力、家賃の支払い実績、物件の稼働率などを審査します。審査結果として買取可能額と手数料率が提示されます。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">4</span>
              <div>
                <h3 className="font-bold text-text-main">契約・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  見積もりに同意したら契約を締結し、最短即日で指定口座に入金されます。契約書には家賃債権の譲渡範囲（何ヶ月分の家賃か）が明記されます。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">5</span>
              <div>
                <h3 className="font-bold text-text-main">家賃の回収と送金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  2社間の場合、テナントから家賃が入金されたらファクタリング会社に送金します。3社間の場合はテナントが直接ファクタリング会社に支払います。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 不動産業の資金調達手段比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            不動産業の資金調達手段比較
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            不動産業で利用できる主な資金調達手段を比較します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-left">ファクタリング</th>
                  <th className="border border-primary p-3 text-left">不動産担保ローン</th>
                  <th className="border border-primary p-3 text-left">銀行融資</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">資金化スピード</td>
                  <td className="border border-border p-3">最短即日</td>
                  <td className="border border-border p-3">1〜2週間</td>
                  <td className="border border-border p-3">2週間〜1ヶ月</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">コスト</td>
                  <td className="border border-border p-3">手数料3%〜15%</td>
                  <td className="border border-border p-3">年利3%〜10%</td>
                  <td className="border border-border p-3">年利1%〜5%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">担保</td>
                  <td className="border border-border p-3">不要（売掛金の売却）</td>
                  <td className="border border-border p-3">不動産が担保</td>
                  <td className="border border-border p-3">必要な場合あり</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">負債への影響</td>
                  <td className="border border-border p-3">なし</td>
                  <td className="border border-border p-3">あり（借入金増加）</td>
                  <td className="border border-border p-3">あり（借入金増加）</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">審査基準</td>
                  <td className="border border-border p-3">テナントの信用力</td>
                  <td className="border border-border p-3">物件の価値</td>
                  <td className="border border-border p-3">企業の財務状況</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            不動産業では物件を担保にしたローンも有力な選択肢ですが、スピードを重視する場合やすでに担保余力がない場合はファクタリングが適しています。状況に応じて最適な手段を選びましょう。
          </p>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">入金サイトの長さを解消するガイド</p>
            </Link>
            <Link href="/articles/for-sole-proprietor/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">個人事業主向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">個人の不動産オーナーにも対応</p>
            </Link>
            <Link href="/articles/large-amount/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">高額ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">大型物件の資金調達に対応</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くするコツを紹介</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            不動産業に強いファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            家賃収入債権のファクタリングに対応したおすすめ会社を手数料・入金速度で比較。あなたの事業に最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
