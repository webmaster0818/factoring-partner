import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "売掛金を現金化する方法｜即日での資金化・仕組み・注意点【2026年】",
  description:
    "売掛金を現金化する4つの方法（ファクタリング・ABL・手形割引・期日前払い交渉）を比較。即日で資金化する進め方、手数料の考え方、悪質業者を避ける注意点、対応サービスの公式確認値まで解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/urikakekin-genkinka/",
  },
  openGraph: {
    title:
      "売掛金を現金化する方法｜即日での資金化・仕組み・注意点【2026年】",
    description:
      "売掛金を現金化する4つの方法を比較。即日での進め方・手数料の考え方・注意点を解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/urikakekin-genkinka/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const options = [
  {
    name: "ファクタリング（売掛金の売却）",
    description:
      "売掛金（売掛債権）を専門会社に売却し、手数料を差し引いた代金を受け取る方法です。法的には民法上の債権譲渡にあたり、借入ではありません。最短即日での現金化に対応するサービスが多く、審査では自社よりも売掛先の信用力が重視されます。",
    speed: "最短即日",
    cost: "手数料（2社間8〜18%・3社間1〜9%が目安）",
    point: "負債にならない・信用情報に影響しない",
    link: { href: "/articles/what-is-factoring/", label: "ファクタリングとは（仕組みの詳細）" },
  },
  {
    name: "ABL（売掛債権担保融資）",
    description:
      "売掛債権や在庫を担保にして金融機関から融資を受ける方法です。売掛金を「売る」のではなく「担保に借りる」点がファクタリングとの根本的な違いで、負債として計上され、返済義務があります。金利は低めですが、審査に時間がかかります。",
    speed: "数週間〜1ヶ月程度",
    cost: "金利（融資のため利息制限法の範囲内）",
    point: "低コストだが借入・審査は自社の信用力",
    link: { href: "/articles/vs-abl/", label: "ファクタリングとABLの違い（詳細比較）" },
  },
  {
    name: "手形割引",
    description:
      "取引先から受け取った約束手形を、銀行や割引業者に買い取ってもらい満期前に現金化する方法です。対象が「手形」に限られるため、手形取引がある企業でのみ使えます。不渡り時には買い戻し義務（リコース）があるのが一般的です。",
    speed: "即日〜数日",
    cost: "割引料（年率換算のコスト）",
    point: "手形取引がある企業限定・不渡りリスクは自社負担",
    link: null,
  },
  {
    name: "期日前払いの交渉（早期入金の依頼）",
    description:
      "取引先に対して、支払い期日より早く入金してもらえないか直接交渉する方法です。コストは原則かかりませんが、取引先の資金繰りや社内手続きに依存するため、確実性はありません。早期入金の代わりに若干の値引き（早期支払割引）を提示する交渉もあります。",
    speed: "取引先次第（数日〜不成立もある）",
    cost: "原則無料（割引を提示する場合はその分）",
    point: "コストゼロだが確実性がなく、関係性への配慮が必要",
    link: { href: "/articles/urikakekin-kaishu-hayameru/", label: "売掛金の回収を早める方法（交渉術の詳細）" },
  },
];

const steps = [
  {
    title: "売掛金（請求書）と必要書類を用意する",
    description:
      "現金化したい売掛金の請求書と、入金実績がわかる通帳のコピーなどを準備します。オンライン完結型のサービスでは、請求書と通帳の2〜3点だけで申し込めるところもあります。発行済み・支払い期日前の確定した売掛金が対象です。",
  },
  {
    title: "複数のサービスに見積もりを依頼する",
    description:
      "手数料は会社と案件によって大きく変わるため、1社の提示額だけで決めず、2〜3社から相見積もりを取るのが基本です。オンライン型なら申し込みから見積もり提示までが速く、即日中の比較も可能です。",
  },
  {
    title: "審査（売掛先の信用力が中心）",
    description:
      "審査では、自社の財務状況よりも「売掛先がきちんと支払うか」が重視されます。赤字決算や税金滞納があっても、売掛先の信用力次第で利用できる場合があります。2社間契約なら売掛先に通知されずに手続きが進みます。",
  },
  {
    title: "契約内容を確認して締結・入金",
    description:
      "契約前に、手数料の内訳、償還請求権の有無（ノンリコースか）、債権譲渡登記の要否を必ず確認します。契約締結後、手数料を差し引いた代金が振り込まれます。最短10分〜数時間で入金されるサービスもあります。",
  },
];

const cautions = [
  {
    title: "「売る」のか「借りる」のかを混同しない",
    description:
      "売掛金の現金化と称するサービスの中には、実質的には貸付にあたるものがあります。債権の売買（ファクタリング）であれば貸金業登録は不要ですが、実質貸付なのに登録なく高利を取る業者は違法です。契約書のタイトルだけでなく、償還請求権の有無や「分割払い」「金利」といった文言がないかを確認しましょう。",
  },
  {
    title: "手数料の総額と内訳を確認する",
    description:
      "「手数料◯%〜」という下限表示だけで判断せず、事務手数料・登記費用などを含めた差引後の受取額で比較することが重要です。見積書に内訳の記載がない業者は避けるのが無難です。",
  },
  {
    title: "償還請求権（リコース）の有無を確認する",
    description:
      "ノンリコース契約であれば、売掛先が倒産しても代金の返還義務はありません。リコース付き（買い戻し義務あり）の契約は実質的に貸付に近く、リスクの所在が大きく変わるため、契約書で必ず確認してください。",
  },
  {
    title: "給与ファクタリングは利用しない",
    description:
      "個人の給与を対象とした「給与ファクタリング」は、金融庁の見解で貸金業に該当するとされており、無登録業者の利用は重大なトラブルにつながります。本記事で扱う売掛金の現金化は、事業者間の売掛債権が対象です。",
  },
  {
    title: "判断に迷ったら専門家に相談する",
    description:
      "現金化は資金繰りの一時的な改善策であり、恒常的な資金不足の根本解決にはなりません。財務状況に応じた最適な選択は個々に異なるため、顧問税理士や中小企業診断士、公的な経営相談窓口（よろず支援拠点など）への相談も検討してください。",
  },
];

const services = [
  {
    name: "ビートレーディング",
    fee: "2社間4〜12%・3社間2〜9%",
    speed: "最短2時間",
    target: "法人・個人事業主",
    note: "累計取引9.1万社超の業界最大手。買取額に制限なし",
  },
  {
    name: "QuQuMo",
    fee: "1%〜（上限非公表）",
    speed: "最短2時間",
    target: "法人・個人事業主",
    note: "オンライン完結型。必要書類は請求書と通帳の2点",
  },
  {
    name: "ペイトナー",
    fee: "一律10%",
    speed: "最短10分",
    target: "フリーランス・個人事業主",
    note: "1万円から利用可。請求書アップロードのみの簡単操作",
  },
  {
    name: "ラボル",
    fee: "一律10%",
    speed: "最短60分",
    target: "フリーランス・個人事業主",
    note: "土日祝日を含む24時間365日の即日振込に対応",
  },
  {
    name: "アクセルファクター",
    fee: "3社間0.5%〜10.5%・2社間1.0%〜12.0%",
    speed: "最短即日",
    target: "法人・個人事業主",
    note: "審査通過率93.3%を公表（公式発表値）",
  },
];

const faqs = [
  {
    question: "売掛金の現金化は違法ではありませんか？",
    answer:
      "売掛金の現金化（売掛債権の売却）は、民法で認められた債権譲渡にもとづく合法的な取引で、一般に「ファクタリング」と呼ばれます。ただし、債権売買を装った実質的な貸付を無登録で行う業者は違法です。償還請求権の有無や契約内容を確認し、運営会社の実在性が確認できるサービスを選びましょう。",
  },
  {
    question: "売掛金は本当に即日で現金化できますか？",
    answer:
      "オンライン完結型のサービスでは、最短10分〜数時間での入金に対応するものがあります（ペイトナー最短10分、QuQuMo・ビートレーディング最短2時間など・各社公式サイトにて2026年6月確認）。ただし初回利用時や書類に不備がある場合は時間がかかることがあるため、午前中の早い時間に申し込むのが確実です。",
  },
  {
    question: "現金化にかかる手数料はどのくらいですか？",
    answer:
      "会社と案件により異なりますが、一般的な目安は2社間ファクタリングで8〜18%、3社間で1〜9%です。売掛先の信用力が高い、金額が大きい、支払い期日が近いなどの条件がそろうと低くなる傾向があります。必ず複数社の見積もりを比較してください。",
  },
  {
    question: "取引先に知られずに売掛金を現金化できますか？",
    answer:
      "2社間ファクタリングであれば、売掛先への通知や承諾は不要のため、取引先に知られずに現金化できます。一方、3社間ファクタリングは売掛先の承諾が必要な代わりに手数料が低くなります。取引関係への影響とコストのバランスで選びましょう。",
  },
  {
    question: "赤字決算や税金滞納があっても現金化できますか？",
    answer:
      "可能性はあります。ファクタリングの審査は自社の財務状況よりも売掛先の信用力を重視するためです。ただし最終的な可否や条件は各社の審査によるため、審査基準が柔軟なサービスを含めて複数社に相談するのが現実的です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "売掛金を現金化する方法｜即日での資金化・仕組み・注意点【2026年】",
  description:
    "売掛金を現金化する4つの方法を比較。即日での進め方・手数料の考え方・注意点を解説。",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  author: {
    "@type": "Person",
    name: "ファクタリングパートナー 編集部",
    url: "https://hyogo-shihoushoshi.jp/about/",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://hyogo-shihoushoshi.jp",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://hyogo-shihoushoshi.jp/articles/urikakekin-genkinka/",
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
      item: "https://hyogo-shihoushoshi.jp/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "コラム",
      item: "https://hyogo-shihoushoshi.jp/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "売掛金を現金化する方法",
      item: "https://hyogo-shihoushoshi.jp/articles/urikakekin-genkinka/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function UrikakekinGenkinkaPage() {
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
          { label: "売掛金を現金化する方法" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            資金調達ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            売掛金を現金化する方法
            <br className="hidden md:block" />
            即日での資金化・仕組み・注意点【2026年】
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            入金待ちの売掛金は、支払い期日前に現金に変えられます。4つの現金化手段の比較から、即日で資金化する進め方、手数料の考え方、トラブルを避ける注意点まで解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論box ─── */}
        <div className="mb-12 rounded-lg border border-secondary/30 bg-teal-50 p-6">
          <p className="mb-3 font-bold text-secondary">この記事の結論</p>
          <ul className="space-y-2 text-sm leading-relaxed text-text-light">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                売掛金の現金化には主に4つの方法があり、<strong className="text-text-main">スピード重視ならファクタリング（売掛金の売却）が最有力</strong>。最短即日〜10分で入金されるサービスもある
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                売掛金の売却は、法的には民法にもとづく<strong className="text-text-main">債権譲渡</strong>。借入ではないため負債にならず、信用情報にも影響しない
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                手数料は会社・案件で大きく変わるため<strong className="text-text-main">2〜3社の相見積もりが必須</strong>。償還請求権の有無と手数料の内訳は契約前に必ず確認する
              </span>
            </li>
          </ul>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-8 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#what" className="hover:underline">
                1. 売掛金の現金化とは（＝法的には債権譲渡）
              </a>
            </li>
            <li>
              <a href="#options" className="hover:underline">
                2. 売掛金を現金化する4つの方法を比較
              </a>
            </li>
            <li>
              <a href="#howto" className="hover:underline">
                3. 即日で現金化する進め方（4ステップ）
              </a>
            </li>
            <li>
              <a href="#fee" className="hover:underline">
                4. 現金化にかかる手数料の考え方
              </a>
            </li>
            <li>
              <a href="#caution" className="hover:underline">
                5. 現金化の注意点5つ
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                6. 売掛金の現金化に対応する主なサービス
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、手数料・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 現金化とは ─── */}
        <section id="what" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            売掛金の現金化とは（＝法的には債権譲渡）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">売掛金の現金化</strong>
            とは、取引先からの入金を待たずに、保有する売掛金（売掛債権）を資金に変えることです。商品やサービスを納品してから実際に入金されるまでには、一般に30〜60日程度の支払いサイトがあり、この間も人件費や仕入代金の支払いは待ってくれません。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            現金化の代表的な方法が、売掛金を専門会社に売却する方法です。この「売掛金の売却」は、法的には民法にもとづく
            <strong className="text-text-main">債権譲渡</strong>
            にあたり、金融業界では<strong className="text-text-main">ファクタリング</strong>
            と呼ばれています。呼び名は違っても、「売掛金を現金化する」「請求書を買い取ってもらう」「売掛債権を売却する」は、実務上ほぼ同じ取引を指します。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            債権の売買であって借入ではないため、負債が増えず、信用情報にも記録されません。仕組みの全体像は
            <Link href="/articles/what-is-factoring/" className="font-medium text-primary underline">
              ファクタリングとは？仕組み・種類・メリット・デメリット
            </Link>
            で、債権譲渡の法的な位置づけは
            <Link href="/articles/legal-basis/" className="font-medium text-primary underline">
              ファクタリングの法的根拠
            </Link>
            で詳しく解説しています。
          </p>
          <div className="rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">用語の対応関係</p>
            <p className="text-sm leading-relaxed text-text-light">
              「売掛金の現金化」「請求書の買取」「売掛債権の売却」＝サービス名としては「ファクタリング」。この記事では現金化の選択肢全体を比較し、各手段の詳細は専門記事に譲ります。
            </p>
          </div>
        </section>

        {/* ── 4つの方法比較 ─── */}
        <section id="options" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            売掛金を現金化する4つの方法を比較
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            売掛金を期日前に資金に変える方法は、ファクタリングだけではありません。それぞれ性質・スピード・コストが異なるため、自社の状況に合わせて選びましょう。
          </p>
          <div className="space-y-6">
            {options.map((option, index) => (
              <div
                key={option.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">{option.name}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {option.description}
                    </p>
                    <div className="mt-4 grid gap-3 rounded-lg bg-section-bg p-4 md:grid-cols-3">
                      <div>
                        <p className="text-xs font-semibold text-text-light">スピード</p>
                        <p className="font-bold text-primary">{option.speed}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">コスト</p>
                        <p className="text-sm font-bold text-accent">{option.cost}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">ポイント</p>
                        <p className="text-sm text-text-light">{option.point}</p>
                      </div>
                    </div>
                    {option.link && (
                      <p className="mt-3 text-sm">
                        <Link
                          href={option.link.href}
                          className="font-medium text-primary underline"
                        >
                          {option.link.label} →
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            銀行融資（借入）との根本的な違いは
            <Link href="/articles/vs-bank-loan/" className="font-medium text-primary underline">
              ファクタリング vs 銀行融資
            </Link>
            で詳しく比較しています。「時間があるなら低コストの融資・ABL、急ぎならファクタリング」が大きな使い分けの目安です。
          </p>
        </section>

        {/* ── 即日での進め方 ─── */}
        <section id="howto" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            即日で現金化する進め方（4ステップ）
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            最短即日での現金化を目指す場合の、ファクタリングを使った一般的な流れです。オンライン完結型サービスなら、来店不要で全国どこからでも手続きできます。
          </p>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">即日入金のコツ</p>
            <p className="text-sm leading-relaxed text-text-light">
              午前中に申し込む・書類を事前にそろえる・オンライン完結型を選ぶ、の3点で即日入金の確度が上がります。どのサービスが自社に合うかは
              <Link href="/diagnosis/" className="font-medium text-primary underline">
                無料診断（7つの質問・30秒）
              </Link>
              で絞り込めます。
            </p>
          </div>
        </section>

        {/* ── 手数料の考え方 ─── */}
        <section id="fee" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            現金化にかかる手数料の考え方
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            売掛金を売却して現金化する場合、売掛金の額面から手数料が差し引かれます。一般的な目安は
            <strong className="text-text-main">2社間ファクタリングで8〜18%・3社間で1〜9%</strong>
            ですが、会社と案件によって大きく異なります。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            手数料を左右する主な要素は、(1)売掛先の信用力、(2)売掛金の金額、(3)支払い期日までの期間、(4)2社間か3社間か、(5)利用回数（継続利用で優遇）の5つです。同じ売掛金でも会社によって提示額が変わるため、相見積もりによる比較が最も確実なコスト削減策になります。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-bold text-text-main">手数料をさらに詳しく</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li>
                <Link href="/articles/fee-guide/" className="font-medium text-primary underline">
                  ファクタリング手数料の相場と計算方法
                </Link>
                ｜内訳・安くする5つのコツを解説
              </li>
              <li>
                <Link href="/simulator/" className="font-medium text-primary underline">
                  手数料シミュレーター
                </Link>
                ｜売掛金額から手数料・受取額の目安を試算
              </li>
            </ul>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            現金化の注意点5つ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            売掛金の現金化は合法的な資金調達手段ですが、業界には悪質な業者も存在します。トラブルを避けるために、以下の5点は必ず押さえてください。
          </p>
          <div className="space-y-6">
            {cautions.map((caution, index) => (
              <div
                key={caution.title}
                className="rounded-lg border border-accent/30 bg-orange-50 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {caution.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {caution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 対応サービス ─── */}
        <section id="services" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            売掛金の現金化に対応する主なサービス
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            当サイトが手数料を各社公式サイトで確認した（2026年6月時点）主なファクタリングサービスです。最新の条件は各公式サイトでご確認ください。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">サービス</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">手数料（公式確認値）</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">入金速度</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">対象</th>
                  <th className="px-4 py-3 font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.name} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                      {service.name}
                    </td>
                    <td className="px-4 py-3 text-text-light whitespace-nowrap">{service.fee}</td>
                    <td className="px-4 py-3 text-text-light whitespace-nowrap">{service.speed}</td>
                    <td className="px-4 py-3 text-text-light whitespace-nowrap">{service.target}</td>
                    <td className="px-4 py-3 text-text-light">{service.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-text-light">
            ※手数料は各社公式サイトにて2026年6月確認。実際の料率は売掛先の信用力・契約形態・案件内容により個別に決まります。
          </p>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            15社の詳しい比較は
            <Link href="/ranking/" className="font-medium text-primary underline">
              ファクタリング会社おすすめランキング
            </Link>
            をご覧ください。
          </p>
        </section>

        {/* ── 請求書系ピラーリンク枠 ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">「請求書」から探したい方へ</p>
            <p className="mb-3 text-sm leading-relaxed text-text-light">
              売掛金の現金化は「請求書の買取」と呼ばれることもあります。請求書を起点にした資金化の流れは、以下の記事で解説しています。
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li>
                <Link href="/articles/seikyusho-kaitori/" className="font-medium text-primary underline">
                  請求書買取サービスとは？仕組みと使い方
                </Link>
                ｜請求書1枚から資金化する方法
              </li>
              <li>
                <Link href="/articles/urikake-saiken/" className="font-medium text-primary underline">
                  売掛債権とは？売却できる？
                </Link>
                ｜売掛金・売掛債権の用語と法的性質の入門
              </li>
            </ul>
          </div>
        </section>

        {/* ── 関連ツール・データ ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">あわせて使いたいツール・データ</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
              <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
              <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
              <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
            </ul>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-text-light">
                  {faq.answer}
                </div>
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
            <Link
              href="/articles/what-is-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングとは？</p>
              <p className="mt-1 text-sm text-text-light">
                仕組み・種類・メリット・デメリットをわかりやすく解説
              </p>
            </Link>
            <Link
              href="/articles/urikakekin-kaishu-hayameru/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">売掛金の回収を早める方法</p>
              <p className="mt-1 text-sm text-text-light">
                入金サイト短縮の交渉術と資金化の使い分け
              </p>
            </Link>
            <Link
              href="/articles/tsunagi-shikin/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">つなぎ資金の調達方法</p>
              <p className="mt-1 text-sm text-text-light">
                入金までの数週間を乗り切る選択肢比較
              </p>
            </Link>
            <Link
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">
                手数料を安くする5つのコツも紹介
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            あなたの売掛金に合うサービスを見つけましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            売掛金の現金化は、会社選びで手数料もスピードも大きく変わります。手数料を公式確認した15社を比較して、条件の良い1社を選びましょう。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめ15社の比較ランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
