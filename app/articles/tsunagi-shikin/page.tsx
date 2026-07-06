import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "つなぎ資金の調達方法｜入金までの数週間を乗り切る選択肢比較",
  description:
    "つなぎ資金が必要になる典型場面（入金待ち・納税・賞与・仕入先行）と、4つの調達手段（ファクタリング・ビジネスローン・当座貸越・助成金つなぎ）をスピード・コスト・負債計上で比較。期間と金額から選ぶ判断基準を解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/tsunagi-shikin/",
  },
  openGraph: {
    title: "つなぎ資金の調達方法｜入金までの数週間を乗り切る選択肢比較",
    description:
      "つなぎ資金の4つの調達手段をスピード・コスト・負債計上で比較。期間と金額から選ぶ判断基準を解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/tsunagi-shikin/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const scenes = [
  {
    title: "売掛金の入金待ち（支払いサイトのギャップ）",
    description:
      "外注費や仕入代金は今月払うのに、売上の入金は来月末——という入出金のタイムラグは、つなぎ資金が必要になる最も典型的な場面です。特に大型案件を受注した直後は、先行する経費が膨らみやすくなります。",
  },
  {
    title: "納税・社会保険料の支払い",
    description:
      "法人税・消費税・源泉所得税や社会保険料は、支払い期日を動かせません。利益は出ているのに納税のタイミングで手元資金が薄くなる、というのは黒字企業でも起こります。延滞は加算税・延滞金につながるため、短期のつなぎで確実に納付するのが得策です。",
  },
  {
    title: "賞与・給与などの人件費",
    description:
      "賞与月は通常月より支出が大きく跳ねます。給与・賞与の遅配は従業員の信頼に直結するため、数週間のつなぎ資金で乗り切る判断が合理的な場面です。",
  },
  {
    title: "仕入・外注費の先行支払い",
    description:
      "受注が増えるほど仕入や外注費が先に出ていく「増収時の資金繰り悪化」は、成長企業ほど起こりやすい現象です。受注済み案件の入金が確実なら、その入金までの期間限定でつなぐ資金調達が適しています。",
  },
];

const bridgeOptions = [
  {
    name: "ファクタリング（売掛金の売却）",
    speed: "最短即日",
    cost: "手数料（2社間8〜18%・3社間1〜9%が目安）",
    debt: "負債にならない",
    suited: "売掛金があり、数日以内に資金が必要な場合",
    description:
      "入金待ちの売掛金を専門会社に売却して期日前に現金化する方法です。法的には債権譲渡で、借入ではないため負債が増えず、信用情報にも影響しません。「入金までの数週間」という、つなぎ資金の期間と売掛金の期日がそのまま一致するのが特徴です。審査は売掛先の信用力が中心のため、赤字決算でも利用できる場合があります。",
  },
  {
    name: "ビジネスローン",
    speed: "最短即日〜数日",
    cost: "金利 年5〜18%程度",
    debt: "負債になる",
    suited: "売掛金がない支出（納税・賞与など）をつなぐ場合",
    description:
      "ノンバンク系の事業者向けローンです。売掛金の有無に関係なく借りられるため、納税や賞与のように「対応する売掛金がない支出」のつなぎに向きます。年利表示のため短期間の利用なら実負担は小さくなりますが、負債として計上され、返済実績次第では信用情報にも影響します。",
  },
  {
    name: "当座貸越・融資枠（銀行）",
    speed: "枠があれば即日（新規設定は数週間〜）",
    cost: "金利 年1〜5%程度",
    debt: "負債になる",
    suited: "繰り返し発生する資金ギャップに備える場合",
    description:
      "あらかじめ銀行と契約した枠の範囲で、必要なときに借りて余裕があるときに返す方式です。コストは最も低い水準ですが、枠の新規設定には銀行審査（数週間〜）が必要で、業績や担保余力が問われます。毎月のように入出金ギャップが生じる企業は、平時に枠を作っておくのが王道です。",
  },
  {
    name: "助成金・補助金の入金待ちつなぎ",
    speed: "手段による",
    cost: "手段による",
    debt: "手段による",
    suited: "採択済みの助成金・補助金の入金前後をつなぐ場合",
    description:
      "助成金・補助金は原則後払いのため、採択から入金までの期間に立替資金が必要になります。この場面は制度特有の論点（概算払い・つなぎ融資制度・交付決定通知の扱いなど）があるため、専門記事で別途解説しています。",
  },
];

const choosingPoints = [
  {
    title: "「対応する売掛金があるか」で入口を分ける",
    description:
      "つなぐ対象の入金が売掛金なら、期日と金額が確定しているためファクタリングが素直な選択肢です。納税・賞与など売掛金と対応しない支出は、ビジネスローンや当座貸越などの借入系が候補になります。",
  },
  {
    title: "期間で実質コストを比べる",
    description:
      "ファクタリングの手数料は期間に関係なく額面に対して一度かかり、ローンの利息は日割りで積み上がります。たとえば年利15%のローンを30日使った場合の利息は元本の約1.2%相当です。「何日つなぐのか」を先に決めてから、その期間での支払総額で比較しましょう。",
  },
  {
    title: "負債計上の影響を確認する",
    description:
      "今後、銀行融資や補助金の申請を控えている場合、借入の増加が自己資本比率や審査に影響することがあります。ファクタリングは債権の売却のため負債になりません。決算期をまたぐつなぎでは、この違いが効いてきます。",
  },
  {
    title: "「つなぎ」が常態化したら根本対策へ",
    description:
      "毎月つなぎ資金が必要な状態は、支払いサイトのミスマッチや利益率など構造的な問題のサインです。入金サイトの短縮交渉や資金繰り表による予測管理といった根本対策に取り組み、必要に応じて税理士・中小企業診断士や公的な経営相談窓口に相談しましょう。",
  },
];

const services = [
  {
    name: "ビートレーディング",
    type: "ファクタリング",
    fee: "2社間4〜12%・3社間2〜9%",
    speed: "最短2時間",
    note: "買取額に制限なし・法人/個人事業主対応",
  },
  {
    name: "QuQuMo",
    type: "ファクタリング",
    fee: "1%〜（上限非公表）",
    speed: "最短2時間",
    note: "オンライン完結・必要書類は2点",
  },
  {
    name: "PAYTODAY",
    type: "ファクタリング",
    fee: "1%〜9.5%",
    speed: "最短30分",
    note: "AI審査・上限明示で比較しやすい",
  },
  {
    name: "OLTA",
    type: "ファクタリング",
    fee: "2%〜9%",
    speed: "最短即日",
    note: "上限明示・大手金融機関と提携",
  },
  {
    name: "AGビジネスサポート",
    type: "ファクタリング＋ビジネスローン",
    fee: "2%〜9.9%（ファクタリング）",
    speed: "最短2日",
    note: "アイフルグループ。ビジネスローンとの併用も可能",
  },
];

const faqs = [
  {
    question: "つなぎ資金とはどういう意味ですか？",
    answer:
      "入金と支出のタイミングのずれを埋めるために、短期間だけ用意する資金のことです。売掛金の入金待ち、納税、賞与支給、仕入の先行支払いなどの場面で必要になります。恒常的な運転資金の不足とは区別され、「入金のあてが確定していて、それまでの期間をつなぐ」のが本来のつなぎ資金です。",
  },
  {
    question: "数週間のつなぎならどの方法が向いていますか？",
    answer:
      "つなぐ対象によります。売掛金の入金待ちならファクタリング（売掛金の売却・最短即日）が期間と金額がそのまま一致します。納税や賞与など売掛金と対応しない支出なら、ビジネスローンや当座貸越が候補です。日数が短いほど年利型（ローン）の実負担は小さくなるため、「何日つなぐか」を決めてから支払総額で比較してください。",
  },
  {
    question: "銀行融資でつなぎ資金は借りられますか？",
    answer:
      "可能ですが、新規の融資審査には一般に2週間〜2ヶ月かかるため、目前の支払いには間に合わないことが多いのが実情です。繰り返し資金ギャップが生じる企業は、余裕のある平時に当座貸越などの融資枠を設定しておくと、必要なときに即日で引き出せます。",
  },
  {
    question: "赤字でもつなぎ資金は調達できますか？",
    answer:
      "手段によります。銀行の融資・当座貸越は自社の業績が審査されるため赤字だと不利です。一方、ファクタリングは売掛先の信用力を中心に審査されるため、赤字決算や税金滞納があっても売掛先次第で利用できる場合があります。ただし条件は個別審査によるため、複数社への相談をおすすめします。",
  },
  {
    question: "助成金の入金までのつなぎ資金はどうすればいいですか？",
    answer:
      "助成金・補助金は原則後払いのため、採択から入金までの立替期間が生じます。概算払い制度や自治体・公庫のつなぎ融資、ファクタリングの活用可否など制度特有の論点があるため、当サイトの「助成金・補助金のつなぎ資金」解説記事をご覧ください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "つなぎ資金の調達方法｜入金までの数週間を乗り切る選択肢比較",
  description:
    "つなぎ資金の4つの調達手段をスピード・コスト・負債計上で比較。期間と金額から選ぶ判断基準を解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/articles/tsunagi-shikin/",
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
      name: "つなぎ資金の調達方法",
      item: "https://hyogo-shihoushoshi.jp/articles/tsunagi-shikin/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function TsunagiShikinPage() {
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
          { label: "つなぎ資金の調達方法" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            資金調達ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            つなぎ資金の調達方法
            <br className="hidden md:block" />
            入金までの数週間を乗り切る選択肢比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            入金待ち・納税・賞与——期日は動かせないのに手元資金が足りない。そんな数週間をつなぐ4つの手段を、スピード・コスト・負債計上の観点で比較し、選び方の判断基準を解説します。
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
                選び方の入口は<strong className="text-text-main">「つなぐ対象に売掛金があるか」</strong>。入金待ちの売掛金があるならファクタリング、なければビジネスローン・当座貸越が候補
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                コスト比較は<strong className="text-text-main">「何日つなぐか」を決めてから支払総額で</strong>。手数料一括型（ファクタリング）と年利日割り型（ローン）は単純な料率比較ができない
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                繰り返し必要になるなら、平時の<strong className="text-text-main">当座貸越枠の設定と入金サイトの交渉</strong>が根本対策。つなぎの常態化は構造問題のサイン
              </span>
            </li>
          </ul>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-8 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#scenes" className="hover:underline">
                1. つなぎ資金が必要になる4つの場面
              </a>
            </li>
            <li>
              <a href="#options" className="hover:underline">
                2. つなぎ資金の調達手段4つを比較
              </a>
            </li>
            <li>
              <a href="#compare-table" className="hover:underline">
                3. 一覧比較表（スピード・コスト・負債計上）
              </a>
            </li>
            <li>
              <a href="#choosing" className="hover:underline">
                4. 選び方の判断基準4つ
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                5. つなぎ資金に使える主なサービス
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、手数料・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 必要になる場面 ─── */}
        <section id="scenes" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            つなぎ資金が必要になる4つの場面
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            <strong className="text-text-main">つなぎ資金</strong>
            とは、入金と支出のタイミングのずれを埋めるための短期資金です。「入金のあては確定しているが、それより先に支払い期日が来る」場面で必要になります。典型的なのは次の4つです。
          </p>
          <div className="space-y-6">
            {scenes.map((scene, index) => (
              <div
                key={scene.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{scene.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {scene.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 選択肢4つ ─── */}
        <section id="options" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            つなぎ資金の調達手段4つを比較
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            数週間〜数ヶ月の短期資金に現実的に使える手段は、主に次の4つです。それぞれ性質が異なるため、場面との相性で選びます。
          </p>
          <div className="space-y-6">
            {bridgeOptions.map((option, index) => (
              <div
                key={option.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
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
                        <p className="text-sm font-bold text-primary">{option.speed}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">コスト</p>
                        <p className="text-sm font-bold text-accent">{option.cost}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">向いている場面</p>
                        <p className="text-sm text-text-light">{option.suited}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">
              助成金・補助金のつなぎは専門記事へ
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              採択済みの助成金・補助金の入金待ちには、概算払いやつなぎ融資制度など固有の選択肢があります。
              <Link href="/articles/subsidy-bridge/" className="font-medium text-primary underline">
                助成金・補助金のつなぎ資金の調達方法
              </Link>
              で詳しく解説しています。本記事はそれ以外の一般的なつなぎ資金を対象としています。
            </p>
          </div>
        </section>

        {/* ── 比較表 ─── */}
        <section id="compare-table" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            一覧比較表（スピード・コスト・負債計上）
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">比較項目</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">ファクタリング</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">ビジネスローン</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">当座貸越（銀行）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                    資金化スピード
                  </td>
                  <td className="px-4 py-3">最短即日</td>
                  <td className="px-4 py-3">最短即日〜数日</td>
                  <td className="px-4 py-3">枠があれば即日</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                    コストの型
                  </td>
                  <td className="px-4 py-3">手数料一括（額面に対し一度）</td>
                  <td className="px-4 py-3">年利・日割り（年5〜18%程度）</td>
                  <td className="px-4 py-3">年利・日割り（年1〜5%程度）</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                    負債計上
                  </td>
                  <td className="px-4 py-3">なし（債権の売却）</td>
                  <td className="px-4 py-3">あり</td>
                  <td className="px-4 py-3">あり</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                    審査対象
                  </td>
                  <td className="px-4 py-3">売掛先の信用力</td>
                  <td className="px-4 py-3">自社の信用力</td>
                  <td className="px-4 py-3">自社の業績・担保余力</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                    事前準備
                  </td>
                  <td className="px-4 py-3">不要（売掛金があれば申込可）</td>
                  <td className="px-4 py-3">不要</td>
                  <td className="px-4 py-3">必要（枠の設定に数週間〜）</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                    上限額
                  </td>
                  <td className="px-4 py-3">売掛金の額面まで</td>
                  <td className="px-4 py-3">比較的小口</td>
                  <td className="px-4 py-3">契約枠まで</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            借入との違いのより詳しい比較は
            <Link href="/articles/vs-bank-loan/" className="font-medium text-primary underline">
              ファクタリング vs 銀行融資
            </Link>
            を、資金調達手段の全体像は
            <Link href="/articles/cashflow-tips/" className="font-medium text-primary underline">
              資金繰り改善方法7選
            </Link>
            をご覧ください。
          </p>
        </section>

        {/* ── 選び方 ─── */}
        <section id="choosing" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            選び方の判断基準4つ
          </h2>
          <div className="space-y-6">
            {choosingPoints.map((point, index) => (
              <div
                key={point.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{point.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            ファクタリングを選ぶ場合の仕組みは
            <Link href="/articles/what-is-factoring/" className="font-medium text-primary underline">
              ファクタリングとは？
            </Link>
            、手数料の内訳と安くするコツは
            <Link href="/articles/fee-guide/" className="font-medium text-primary underline">
              手数料の相場と計算方法
            </Link>
            で解説しています。
          </p>
        </section>

        {/* ── 対応サービス ─── */}
        <section id="services" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            つなぎ資金に使える主なサービス
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            売掛金の売却（ファクタリング）でつなぐ場合に候補になる主なサービスです。手数料は当サイトが各社公式サイトで確認した値（2026年6月時点）です。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">サービス</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">種類</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">手数料（公式確認値）</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">入金速度</th>
                  <th className="px-4 py-3 font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.name} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                      {service.name}
                    </td>
                    <td className="px-4 py-3 text-text-light whitespace-nowrap">{service.type}</td>
                    <td className="px-4 py-3 text-text-light whitespace-nowrap">{service.fee}</td>
                    <td className="px-4 py-3 text-text-light whitespace-nowrap">{service.speed}</td>
                    <td className="px-4 py-3 text-text-light">{service.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-text-light">
            ※手数料は各社公式サイトにて2026年6月確認。実際の料率・可否は売掛先の信用力・契約形態などによる個別審査で決まります。
          </p>
        </section>

        {/* ── 関連ツール・データ ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">あわせて使いたいツール・データ</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
              <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
              <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
              <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
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
              href="/articles/urikakekin-genkinka/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">売掛金を現金化する方法</p>
              <p className="mt-1 text-sm text-text-light">
                即日での資金化・仕組み・注意点【2026年】
              </p>
            </Link>
            <Link
              href="/articles/subsidy-bridge/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">助成金・補助金のつなぎ資金</p>
              <p className="mt-1 text-sm text-text-light">
                入金までの立替期間を乗り切る方法
              </p>
            </Link>
            <Link
              href="/articles/vs-bank-loan/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリング vs 銀行融資</p>
              <p className="mt-1 text-sm text-text-light">
                借入との違いを徹底比較
              </p>
            </Link>
            <Link
              href="/articles/urikakekin-kaishu-hayameru/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">売掛金の回収を早める方法</p>
              <p className="mt-1 text-sm text-text-light">
                入金サイト短縮の交渉術と資金化
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            つなぎに使える1社を今のうちに把握しておきましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            資金ギャップは急に来ます。手数料を公式確認した15社の比較で、いざという時に頼れるサービスを事前にチェックしておきましょう。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめ15社の比較ランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
