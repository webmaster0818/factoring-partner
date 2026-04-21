import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "即日ファクタリング10選｜最短10分〜当日入金のおすすめ会社",
  description:
    "即日入金に対応したファクタリング会社おすすめ10社を入金スピード順にランキング。最短10分〜当日入金の条件、土日対応の可否、注意点まで徹底解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/instant-factoring/",
  },
  openGraph: {
    title:
      "即日ファクタリング10選｜最短10分〜当日入金のおすすめ会社",
    description:
      "即日入金に対応したファクタリング会社10社を入金スピード順にランキング。最短10分入金の条件や注意点も解説。",
    url: "https://factoring-partner.pages.dev/articles/instant-factoring/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const speedRanking = [
  { rank: 1, name: "ペイトナー", speed: "最短10分", fee: "一律10%", target: "個人・法人", online: "完全対応", note: "業界最速クラス。請求書アップロードだけで完結" },
  { rank: 2, name: "ラボル", speed: "最短30分", fee: "一律10%", target: "個人・法人", online: "完全対応", note: "24時間365日・土日祝も入金対応" },
  { rank: 3, name: "PAYTODAY", speed: "最短30分", fee: "1%〜9.5%", target: "個人・法人", online: "完全対応", note: "AI審査で高速処理。手数料も安い" },
  { rank: 4, name: "QuQuMo", speed: "最短2時間", fee: "1%〜14.8%", target: "個人・法人", online: "完全対応", note: "手数料1%〜の低コスト。電子契約対応" },
  { rank: 5, name: "ビートレーディング", speed: "最短2時間", fee: "2%〜12%", target: "法人中心", online: "対応", note: "大手の安心感。大口案件にも即日対応" },
  { rank: 6, name: "アクセルファクター", speed: "最短3時間", fee: "2%〜20%", target: "個人・法人", online: "対応", note: "審査通過率93.3%。審査に不安がある方向け" },
  { rank: 7, name: "FREENANCE", speed: "最短即日", fee: "3%〜10%", target: "個人中心", online: "完全対応", note: "損害賠償保険が無料付帯のフリーランス向け" },
  { rank: 8, name: "日本中小企業金融サポート機構", speed: "最短即日", fee: "1.5%〜10%", target: "法人中心", online: "対応", note: "一般社団法人運営。手数料が安い" },
  { rank: 9, name: "PMG", speed: "最短即日", fee: "1%〜12.8%", target: "法人中心", online: "対応", note: "大口案件（2億円まで）に即日対応" },
  { rank: 10, name: "トップ・マネジメント", speed: "最短即日", fee: "3.5%〜12.5%", target: "法人中心", online: "対応", note: "老舗の安定感。3億円までの大口も可" },
];

const instantConditions = [
  {
    title: "午前中に申し込みを完了する",
    description:
      "即日入金を確実にするためには、できるだけ午前中（遅くとも14時まで）に申し込みを完了させましょう。銀行の振込処理は15時で締め切られるため、午後の遅い時間だと翌営業日の入金になる可能性があります。ペイトナーやラボルなど24時間対応のサービスなら、時間を気にせず利用できます。",
  },
  {
    title: "必要書類を事前に準備する",
    description:
      "審査に必要な書類（請求書・本人確認書類・通帳コピーなど）を事前に準備しておくと、スムーズに手続きが進みます。書類の不備があると再提出を求められ、入金が遅れる原因になります。特に初回利用時は書類確認に時間がかかるため、余裕を持って準備しましょう。",
  },
  {
    title: "オンライン完結型を選ぶ",
    description:
      "来店や郵送が必要なサービスは、物理的な移動や郵送時間がかかるため即日入金が難しくなります。オンライン完結型のサービスを選べば、自宅やオフィスから申し込みから入金まですべて完結し、最短で資金化できます。",
  },
  {
    title: "売掛金の金額が適正範囲内である",
    description:
      "買取金額が大きすぎると追加の審査が必要になり、即日対応できない場合があります。初回利用の場合は特に、買取上限の範囲内で適正な金額の売掛金を選びましょう。少額（100万円以下）の方が即日入金に対応してもらいやすい傾向があります。",
  },
  {
    title: "売掛先の信用力が高い",
    description:
      "売掛先が上場企業や大手企業、官公庁などの場合、審査がスムーズに進み即日入金の可能性が高まります。逆に、売掛先が設立間もない企業や個人事業主だと、審査に時間がかかることがあります。",
  },
];

const detailedDescriptions = [
  {
    name: "ペイトナー",
    description:
      "ペイトナーは個人事業主・フリーランスに圧倒的な人気を誇るファクタリングサービスです。最大の強みは業界最速クラスの「最短10分入金」で、請求書をスマホアプリからアップロードするだけで審査から入金まで完結します。手数料は一律10%と明確で、見積もり不要の明朗会計が特徴です。初回は25万円まで、利用実績に応じて上限100万円まで引き上がります。急な支払いが発生した際に真っ先に検討したいサービスです。",
  },
  {
    name: "ラボル",
    description:
      "ラボルは24時間365日・土日祝日でも最短30分で入金される唯一無二のファクタリングサービスです。東証プライム上場企業・株式会社セレスの100%子会社が運営しているため、信頼性も抜群。手数料は一律10%で、買取上限に制限がありません。金曜の夜や週末に急な資金需要が発生した場合に、最も頼りになるサービスです。独自の送金システムにより銀行の営業時間に関係なく入金が可能です。",
  },
  {
    name: "PAYTODAY",
    description:
      "PAYTODAYはAI審査を本格導入し、最短30分入金と低手数料（1%〜9.5%）を両立した注目のファクタリングサービスです。AIが売掛先の信用情報や取引データを自動分析するため、人件費を大幅に削減しながらスピーディーな審査を実現。完全オンライン完結で、IT・Web系のフリーランスや法人に特に人気があります。スピードとコストの両方を重視したい方に最適です。",
  },
  {
    name: "ビートレーディング",
    description:
      "ビートレーディングは累計買取額1,300億円超の実績を持つ大手ファクタリング会社です。最短2時間での入金に対応しており、大口案件でも即日対応が可能。専任担当者がつくため、初めてのファクタリングでも安心して利用できます。法人の大口案件から個人事業主の少額案件まで幅広く対応し、オンラインでの手続きにも対応しています。",
  },
  {
    name: "アクセルファクター",
    description:
      "アクセルファクターは審査通過率93.3%を誇る、審査に不安がある方に最適なファクタリング会社です。最短3時間で入金され、30万円からの少額案件にも対応。対面・電話・オンラインの複数チャネルから申し込めるため、自分に合った方法を選べます。審査が柔軟で赤字決算や税金滞納がある場合でも相談可能です。",
  },
];

const instantFlowSteps = [
  {
    step: "1. 事前準備（所要時間：5分）",
    description: "必要書類（請求書・本人確認書類・通帳コピー）をスマホで撮影するか、PDFデータを準備します。オンライン完結型のサービスでは、事前にアカウント登録を済ませておくと手続きがスムーズです。",
  },
  {
    step: "2. 申し込み・書類アップロード（所要時間：5〜10分）",
    description: "Webサイトまたはアプリから申し込みフォームに必要事項を入力し、書類をアップロードします。ペイトナーやラボルは入力項目が少なく、数分で申し込みが完了します。",
  },
  {
    step: "3. 審査（所要時間：10分〜数時間）",
    description: "ファクタリング会社が売掛先の信用力や取引の実在性を審査します。AI審査を導入しているサービスは10〜30分、人的審査のサービスは1〜3時間程度かかります。追加書類を求められる場合もあります。",
  },
  {
    step: "4. 見積もり・契約（所要時間：5〜15分）",
    description: "審査通過後、手数料率と買取金額が提示されます。内容に同意したら電子契約で契約締結。オンライン完結型ならクリック数回で契約が完了します。",
  },
  {
    step: "5. 入金（即時〜当日中）",
    description: "契約締結後、指定の銀行口座に入金されます。ペイトナーは最短10分、ラボルは最短30分で入金。銀行の営業時間内（15時まで）に契約が完了すれば、当日中の入金が期待できます。",
  },
];

const weekendInfo = [
  {
    name: "ラボル",
    weekend: "対応（24時間365日）",
    detail: "土日祝日でも最短30分で入金。フリーランスの急な出費に最適。",
  },
  {
    name: "ペイトナー",
    weekend: "条件付き対応",
    detail: "審査は土日も実施するが、銀行振込は翌営業日になる場合がある。",
  },
  {
    name: "PAYTODAY",
    weekend: "非対応",
    detail: "審査は平日のみ。土日に申し込んだ場合は翌営業日の対応。",
  },
  {
    name: "ビートレーディング",
    weekend: "非対応",
    detail: "平日9:00〜18:00の営業。土日祝は翌営業日の対応。",
  },
];

const faqs = [
  {
    question: "本当に即日で入金されますか？",
    answer:
      "はい、条件を満たせば即日入金が可能です。ペイトナーは最短10分、ラボルは最短30分で入金された実績があります。ただし、初回利用時は審査に時間がかかる場合があり、午後の遅い時間の申し込みは翌営業日になることもあります。確実に即日入金を受けたい場合は、午前中に申し込むことをおすすめします。",
  },
  {
    question: "土日でも即日入金してもらえるファクタリング会社はありますか？",
    answer:
      "ラボルは24時間365日対応しており、土日祝日でも最短30分で入金可能です。ペイトナーも土日の審査に対応していますが、振込は翌営業日になる場合があります。その他の多くのファクタリング会社は平日のみの対応です。",
  },
  {
    question: "即日ファクタリングに必要な書類は何ですか？",
    answer:
      "サービスによって異なりますが、最低限必要なのは(1)請求書、(2)本人確認書類（運転免許証など）、(3)通帳コピー（入出金明細）の3点です。オンライン完結型のサービスでは、これらをスマホで撮影してアップロードするだけで申し込めます。法人の場合は登記簿謄本や決算書が追加で必要になることがあります。",
  },
  {
    question: "即日ファクタリングのデメリットはありますか？",
    answer:
      "スピード重視のサービスは手数料がやや高めになる傾向があります。例えば、ペイトナーとラボルは手数料一律10%で、手数料の安さを売りにするサービス（1%〜）と比べると割高です。また、即日入金を実現するために審査が簡略化されている場合、買取上限額が低く設定されていることもあります。スピードと手数料のバランスを考慮して選びましょう。",
  },
  {
    question: "即日ファクタリングで審査に落ちることはありますか？",
    answer:
      "はい、審査に落ちる可能性はあります。主な原因は(1)売掛先の信用力が低い場合、(2)請求書の内容に不備がある場合、(3)過去にファクタリングでトラブルがあった場合、(4)二重譲渡の疑いがある場合などです。審査に落ちた場合は、別のファクタリング会社に申し込むか、売掛先を変えて再申請することを検討しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "即日ファクタリング10選｜最短10分〜当日入金のおすすめ会社",
  description:
    "即日入金に対応したファクタリング会社10社を入金スピード順にランキング。最短10分入金の条件や注意点も解説。",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
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
    "@id":
      "https://factoring-partner.pages.dev/articles/instant-factoring/",
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

/* ── Component ────────────────────────────────────── */

export default function InstantFactoringPage() {
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

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "コラム", href: "/articles/" },
          { label: "即日ファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-white">
            即日入金
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            即日ファクタリング10選
            <br className="hidden md:block" />
            最短10分〜当日入金のおすすめ会社
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            即日入金に対応したファクタリング会社10社を入金スピード順にランキング。最短10分で入金される条件、土日対応の可否、即日ファクタリングの注意点まで徹底解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#speed-ranking" className="hover:underline">
                1. 入金スピードランキング10選
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                2. 即日ファクタリング比較表
              </a>
            </li>
            <li>
              <a href="#conditions" className="hover:underline">
                3. 即日入金を実現する5つの条件
              </a>
            </li>
            <li>
              <a href="#weekend" className="hover:underline">
                4. 土日対応のファクタリング会社
              </a>
            </li>
            <li>
              <a href="#cautions" className="hover:underline">
                5. 即日ファクタリングの注意点
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 即日ファクタリングとは ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            即日ファクタリングとは
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            即日ファクタリングとは、申し込み当日に売掛金を現金化できるファクタリングサービスのことです。通常のファクタリングでは審査に1〜3営業日かかることもありますが、即日対応のサービスでは最短10分〜数時間で入金されます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            即日ファクタリングが実現できる背景には、AI審査の導入やオンライン完結型の仕組みがあります。従来は担当者が手作業で書類を確認し、売掛先の信用調査を行っていましたが、AIが自動で信用スコアを算出することで審査時間を大幅に短縮。また、電子契約の普及により、対面での契約が不要になったことも高速化に貢献しています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">即日入金が特に必要になる場面</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>月末の給与・外注費の支払い期日が迫っている</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>取引先からの入金が遅れ、資金ショートの危機がある</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>急な大型案件の受注で先行投資が必要</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>税金や社会保険料の支払い期限に間に合わない</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>設備の故障や事故など予期せぬ出費が発生した</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 入金スピードランキング ─── */}
        <section id="speed-ranking" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            入金スピードランキング10選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            即日入金に対応したファクタリング会社10社を、入金スピードが速い順にランキング形式で紹介します。それぞれの特徴を確認し、用途に合ったサービスを選びましょう。
          </p>
          <div className="space-y-6">
            {speedRanking.map((company) => (
              <div
                key={company.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white ${company.rank <= 3 ? "bg-accent" : "bg-primary"}`}>
                    {company.rank}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{company.name}</h3>
                    <p className="text-sm font-bold text-accent">{company.speed}</p>
                  </div>
                </div>
                <div className="mb-3 grid gap-2 text-sm md:grid-cols-4">
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">手数料</p>
                    <p className="font-semibold text-primary">{company.fee}</p>
                  </div>
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">対象</p>
                    <p className="font-semibold text-primary">{company.target}</p>
                  </div>
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">オンライン</p>
                    <p className="font-semibold text-primary">{company.online}</p>
                  </div>
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">入金速度</p>
                    <p className="font-semibold text-accent">{company.speed}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-text-light">{company.note}</p>
              </div>
            ))}
          </div>

          {/* 上位5社の詳細紹介 */}
          <div className="mt-10 space-y-6">
            <h3 className="text-lg font-bold text-text-main">上位5社の詳細紹介</h3>
            {detailedDescriptions.map((item) => (
              <div
                key={item.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h4 className="mb-2 text-lg font-bold text-primary">{item.name}</h4>
                <p className="leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 即日入金の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            即日入金までの具体的な流れ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            即日ファクタリングの申し込みから入金までの具体的なステップを時系列で解説します。事前に流れを把握しておくことで、スムーズに手続きを進められます。
          </p>
          <div className="space-y-4">
            {instantFlowSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-lg border border-border bg-white p-5"
              >
                <h3 className="mb-2 font-bold text-primary">{item.step}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">最速で入金を受けるためのチェックリスト</p>
            <ul className="space-y-1 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>午前中（10時まで）に申し込みを開始する</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>必要書類をすべてデータ化（PDF/画像）しておく</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>請求書の内容に不備がないか事前確認する</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>振込先口座情報を正確に入力する</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>電話に出られる状態にしておく（確認連絡がある場合）</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            即日ファクタリング比較表
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            10社の入金スピード・手数料・対象を一覧で比較します。スマートフォンの方は横スクロールでご覧ください。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold">順位</th>
                  <th className="px-3 py-3 font-semibold">会社名</th>
                  <th className="px-3 py-3 font-semibold">入金速度</th>
                  <th className="px-3 py-3 font-semibold">手数料</th>
                  <th className="px-3 py-3 font-semibold">対象</th>
                </tr>
              </thead>
              <tbody>
                {speedRanking.map((company, index) => (
                  <tr
                    key={company.name}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-3 py-3 font-bold text-accent">{company.rank}</td>
                    <td className="px-3 py-3 font-semibold text-text-main">{company.name}</td>
                    <td className="px-3 py-3 font-bold text-primary">{company.speed}</td>
                    <td className="px-3 py-3">{company.fee}</td>
                    <td className="px-3 py-3">{company.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 即日入金の条件 ─── */}
        <section id="conditions" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            即日入金を実現する5つの条件
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            「最短即日」を謳うファクタリング会社でも、すべてのケースで即日入金が保証されているわけではありません。以下の5つの条件を押さえることで、即日入金の確率を大幅に高められます。
          </p>
          <div className="space-y-6">
            {instantConditions.map((condition, index) => (
              <div
                key={condition.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {condition.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {condition.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 土日対応 ─── */}
        <section id="weekend" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            土日対応のファクタリング会社
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            急な資金需要は土日祝日に発生することもあります。土日でも入金対応しているファクタリング会社はまだ少ないですが、一部のサービスは24時間365日対応しています。
          </p>

          <div className="space-y-4">
            {weekendInfo.map((info) => (
              <div
                key={info.name}
                className="rounded-lg border border-border bg-white p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-text-main">{info.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-light">
                      {info.detail}
                    </p>
                  </div>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${info.weekend.includes("対応（24") ? "bg-secondary text-white" : info.weekend.includes("条件") ? "bg-primary-light text-primary" : "bg-section-bg text-text-light"}`}>
                    {info.weekend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-2 font-bold text-secondary">土日祝に急ぎの資金が必要な場合</p>
            <p className="text-sm leading-relaxed text-text-light">
              土日祝日に確実に入金してもらいたい場合は、<strong className="text-text-main">ラボル</strong>が最も確実です。24時間365日対応で、銀行振込ではなく独自の送金システムを使っているため、土日でも最短30分で入金されます。次点ではペイトナーが審査は土日対応していますが、振込は翌営業日になる場合がある点に注意しましょう。
            </p>
          </div>
        </section>

        {/* ── 業種別の即日対応状況 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            業種別・即日ファクタリングの活用ポイント
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            業種によってファクタリングの活用方法や即日入金の実現しやすさは異なります。以下は主要業種別のポイントです。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">IT・Web業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                プロジェクト単位の請求書が多く、オンライン完結型サービスとの相性が良い。ペイトナーやPAYTODAYでスピーディーに対応可能。売掛先が大手企業なら審査もスムーズ。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">建設業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                出来高払いの請求書や大口案件が多い。ビートレーディングやPMGなど大口対応の会社が即日にも対応。初回は書類が多いため早めに準備を。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">運送業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                燃料費の支払いが先行するため、即日入金のニーズが高い。定期的な売掛金が発生するため、リピート利用で手数料を下げることも可能。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">フリーランス</h3>
              <p className="text-sm leading-relaxed text-text-light">
                少額の請求書が中心。ペイトナー（1万円〜・最短10分）やラボル（24時間対応）が最適。スマホだけで申し込みから入金まで完結。
              </p>
            </div>
          </div>
        </section>

        {/* ── 即日対応のために事前にやっておくこと ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            即日対応のために事前にやっておくこと
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            いざという時にスムーズに即日入金を受けるためには、事前準備が重要です。以下を今のうちに済ませておきましょう。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-text-main">アカウントを事前登録しておく</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ペイトナーやラボルは無料でアカウント登録ができます。急な資金需要が発生してから登録するのではなく、あらかじめ登録と本人確認を済ませておくことで、実際に利用する際の手続き時間を大幅に短縮できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-text-main">通帳コピーを定期的に更新する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                審査で必要な通帳コピー（入出金明細）は直近3〜6ヶ月分が求められます。ネットバンキングのスクリーンショットでOKなサービスが多いため、月に一度は最新の入出金明細を保存しておくと安心です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-text-main">請求書のテンプレートを整備する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                審査で不備が指摘されやすいのが請求書の内容です。「取引先名」「金額」「支払い期日」「取引内容」が明確に記載されたテンプレートを使うことで、書類不備による審査遅延を防げます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="cautions" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            即日ファクタリングの注意点
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            即日ファクタリングは非常に便利ですが、利用にあたって以下の点に注意してください。
          </p>

          <div className="space-y-6">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-accent">1. 「最短」は保証ではない</h3>
              <p className="leading-relaxed text-text-light">
                「最短即日」「最短10分」はあくまで最速の場合であり、すべてのケースで実現するわけではありません。初回利用、大口案件、書類不備がある場合などは、審査に時間がかかることがあります。余裕を持った申し込みを心がけましょう。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-accent">2. スピード重視で手数料が高くなる場合がある</h3>
              <p className="leading-relaxed text-text-light">
                即日入金を優先するあまり、手数料の比較を怠ると余計なコストを支払うことになります。時間に少し余裕がある場合は、複数社から見積もりを取って手数料を比較しましょう。PAYTODAYやQuQuMoなら、スピードと低手数料を両立できます。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-accent">3. 銀行の営業時間に注意</h3>
              <p className="leading-relaxed text-text-light">
                多くのファクタリング会社は銀行振込で入金するため、銀行の営業時間（通常15時まで）を過ぎると翌営業日の入金になります。14時までに審査・契約を完了させることが即日入金の鍵です。ラボルのように独自の送金システムを持つサービスなら、銀行営業時間外でも入金可能です。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-accent">4. 初回と2回目以降でスピードが異なる</h3>
              <p className="leading-relaxed text-text-light">
                初回利用時は本人確認や書類審査に時間がかかるため、2回目以降に比べて入金が遅くなるのが一般的です。急ぎの利用を想定している場合は、あらかじめアカウント登録だけ済ませておくと、実際に利用するときにスムーズです。
              </p>
            </div>
          </div>
        </section>

        {/* ── 即日入金の条件 ─── */}
        <section className="mb-16">
          <h3 className="mb-6 text-lg font-bold text-text-main md:text-xl">
            即日入金を成功させるための3つの条件
          </h3>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">1. 午前中に申込みを完了する</h3>
              <p className="leading-relaxed text-text-light">
                銀行振込の締切時間は一般的に15時です。審査から入金までの時間を逆算すると、午前中（できれば10時まで）に申込みを完了させることが即日入金の大前提となります。午後の申込みでは翌営業日の入金になるケースが多いです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">2. 必要書類を事前に準備する</h3>
              <p className="leading-relaxed text-text-light">
                即日入金を実現するには、請求書・通帳（入出金明細）・身分証明書の3点を事前に準備しておくことが重要です。書類の不備があると再提出が必要になり、その分だけ入金が遅れます。スマホで撮影したものでもOKな会社が多いです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">3. 2社間ファクタリングを選ぶ</h3>
              <p className="leading-relaxed text-text-light">
                3社間ファクタリングは取引先の承諾が必要なため、即日対応は基本的に不可能です。即日入金を希望するなら2社間ファクタリングを選びましょう。なお、土日祝日に即日対応できる会社は限られますが、ラボルは24時間365日即日振込に対応しています。
              </p>
            </div>
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
              href="/articles/online-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">オンライン完結ファクタリング8選</p>
              <p className="mt-1 text-sm text-text-light">
                来店不要で即日資金化できるサービスを紹介
              </p>
            </Link>
            <Link
              href="/articles/low-fee/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料が安いファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                手数料相場と節約術をランキング形式で紹介
              </p>
            </Link>
            <Link
              href="/articles/for-freelance/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">フリーランス向けファクタリング5選</p>
              <p className="mt-1 text-sm text-text-light">
                請求書を即日現金化する方法を解説
              </p>
            </Link>
            <Link
              href="/articles/easy-screening/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">審査が通りやすいファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                審査基準と通過のコツを解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            即日入金のファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            入金スピード・手数料・対応エリアで即日ファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
