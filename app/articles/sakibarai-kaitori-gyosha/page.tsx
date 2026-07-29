import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "先払い買取に「優良・おすすめ業者」は存在するか｜当サイトが業者を紹介しない理由",
  description:
    "「先払い買取 おすすめ業者」「優良店」を探している方へ。当サイトは先払い買取の業者を一切紹介しません。理由は、金融庁・消費者庁・警察庁などが注意喚起するスキーム自体のリスクが、業者の「優良」表示では解消されないためです。「優良」をうたう紹介サイトの見方と、どうしても現金が必要な場合の正規の選択肢を、一次情報にもとづいて解説します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-gyosha/",
  },
  openGraph: {
    title:
      "先払い買取に「優良・おすすめ業者」は存在するか｜当サイトが業者を紹介しない理由",
    description:
      "当サイトは先払い買取の業者を紹介しません。スキーム自体のリスクは「優良」表示で解消されないため。紹介サイトの見方と正規の選択肢を一次情報で解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-gyosha/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const notSolvedBySeller = [
  {
    title: "「実質的な貸付」という構造は業者を選んでも変わらない",
    description:
      "金融庁は、商品売買を装っていても経済的な実態が貸付けであり業として行う場合には貸金業に該当するおそれがあると注意喚起しています。キャンセル（契約解除）を前提に現金を先払いし、違約金名目で回収するというスキーム自体の構造は、どの業者を選んでも変わりません。「対応が丁寧」「振込が早い」といった評判は、この構造上のリスクを解消しません。",
  },
  {
    title: "「高額な違約金・多重債務」のリスクも業者選びでは消えない",
    description:
      "消費者庁は、高額な違約金名目の金銭の支払いや買取代金との差額により「かえって生活が悪化し、多重債務に陥る危険性」を指摘しています。受け取ったお金より多くを返す構造である以上、利用を繰り返すほど負担が膨らむ点は「優良」とされる業者でも同じです。",
  },
  {
    title: "公的機関による「優良認定」は存在しない",
    description:
      "金融庁・消費者庁・警察庁などの公的機関は、先払い買取現金化について注意喚起を行っている立場であり、特定の業者を「優良」「安全」と認定する制度はありません。ネット上の「優良店」「おすすめランキング」は、公的な裏付けのある評価ではありません。",
  },
];

const consultWindows = [
  {
    name: "消費者ホットライン",
    tel: "188（いやや）",
    note: "最寄りの消費生活センターにつながる全国共通番号。生活資金の悩み・契約トラブル全般の相談窓口",
  },
  {
    name: "警察相談専用電話",
    tel: "#9110",
    note: "執拗な取り立て・脅迫めいた連絡など、犯罪被害につながるおそれがある場合",
  },
  {
    name: "金融庁 金融サービス利用者相談室",
    tel: "0570-016811",
    note: "無登録業者・ヤミ金融に関する情報提供・相談（平日10:00〜17:00）",
  },
  {
    name: "日本貸金業協会 貸金業相談・紛争解決センター",
    tel: "0570-051051",
    note: "借金・ヤミ金融に関する相談",
  },
];

const faqs = [
  {
    question: "先払い買取は絶対に違法なのですか？",
    answer:
      "一律に違法と断定されているわけではありません。金融庁は「個別具体的な実態を踏まえて判断する必要がある」としています。ただし、商品売買を装っていても経済的な実態が貸付けであり業として行う場合には貸金業に該当するおそれがあり、貸金業登録を受けずに貸金業を営めば、10年以下の懲役もしくは3,000万円以下の罰金またはその併科（貸金業法第47条第2号）の対象となる違法なヤミ金融です。キャンセル前提の先払いと高額な違約金という形態は、この「実質貸付」の典型として金融庁・消費者庁・警察庁などが連名で注意喚起しています。",
  },
  {
    question: "「古物商許可あり」「優良店」と表示している業者なら安全ですか？",
    answer:
      "古物商許可（古物営業法）は中古品売買の営業許可であり、貸付行為の適法性を保証するものではありません。実態が貸付にあたる取引を業として行うには、別途、貸金業登録が必要です。また「優良店」「安心」といった表示は業者やサイトの自己申告であり、公的機関が先払い買取業者を優良認定する制度は存在しません。表示の有無にかかわらず、キャンセル前提の先払いで違約金を請求するスキームであれば、無登録貸金業に該当するおそれは残ります。",
  },
  {
    question: "ランキングサイトで上位の業者なら信頼できますか？",
    answer:
      "掲載順位は安全性の裏付けにはなりません。業者を紹介するサイトには、掲載や送客によって収益を得る目的で運営されているものがあり、その場合の「おすすめ順」は利用者のリスクの低さを保証するものではありません。金融庁・消費者庁・警察庁などが注意喚起しているのは特定の業者ではなくスキームそのものであるため、当サイトは順位・評判にかかわらず先払い買取の業者を紹介しない方針です。",
  },
  {
    question: "すでに利用してしまい、キャンセル料を請求されています。",
    answer:
      "一人で抱え込まず、支払う前に公的な窓口へ相談してください。消費者ホットライン（188）、警察相談専用電話（#9110）、金融庁金融サービス利用者相談室（0570-016811）、日本貸金業協会（0570-051051）が利用できます。取引の実態がヤミ金融による貸付と評価される場合は法的な対応の余地があるため、消費生活センターや債務問題を扱う弁護士・司法書士への相談が重要です。業者とのやり取りや振込記録は証拠として消さずに残してください。対処法の詳細は当サイトの「先払い買取のキャンセル料が払えない場合の対処法」で解説しています。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "先払い買取に「優良・おすすめ業者」は存在するか｜当サイトが業者を紹介しない理由",
  description:
    "当サイトは先払い買取の業者を紹介しません。スキーム自体のリスクは「優良」表示で解消されないため。紹介サイトの見方と正規の選択肢を一次情報で解説。",
  datePublished: "2026-07-19",
  dateModified: "2026-07-19",
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
    "@id": "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-gyosha/",
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
      name: "先払い買取に「優良・おすすめ業者」は存在するか",
      item: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-gyosha/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SakibaraiKaitoriGyoshaPage() {
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
          { label: "先払い買取に「優良・おすすめ業者」は存在するか" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            注意喚起・資金調達ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            先払い買取に
            <br className="hidden md:block" />
            「優良・おすすめ業者」は存在するか
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            「先払い買取 おすすめ」「優良店」と検索している方へ。結論からお伝えすると、当サイトは先払い買取の業者を一切紹介しません。なぜ「優良」表示ではリスクが解消されないのか、そしてどうしても現金が必要なときの正規の選択肢を、金融庁など公的機関の一次情報にもとづいて解説します。
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
                <strong className="text-text-main">
                  当サイトは、先払い買取の業者を「優良」「おすすめ」として紹介することはしません
                </strong>
                。理由は、金融庁・消費者庁・警察庁などが注意喚起している<strong className="text-text-main">スキーム自体のリスク（実質的な貸付・高額な違約金・多重債務）が、業者の「優良」表示では解消されない</strong>ためです
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                「優良店」「おすすめランキング」をうたう紹介サイトには送客収益を目的とするものがあり、掲載順位は安全性を保証しない。<strong className="text-text-main">公的機関による先払い買取業者の「優良認定」は存在しない</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                どうしても現金が必要なら、事業者は<strong className="text-text-main">請求書（売掛金）を正規のファクタリングで資金化する</strong>、個人は<strong className="text-text-main">消費者ホットライン（188）など公的窓口で支援制度を確認する</strong>のが先です
              </span>
            </li>
          </ul>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-8 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#policy" className="hover:underline">
                1. 当サイトが先払い買取の業者を紹介しない理由
              </a>
            </li>
            <li>
              <a href="#review-sites" className="hover:underline">
                2. 「優良」「おすすめ」をうたうサイトの見方
              </a>
            </li>
            <li>
              <a href="#alternatives" className="hover:underline">
                3. どうしても現金が必要な場合の正規の選択肢
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                4. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。なお、当サイトが先払い買取現金化の利用を推奨することはなく、先払い買取業者との提携・紹介も一切行っていません。掲載内容は調査時点のものであり、最新情報は各公式サイト・公的機関の発表をご確認ください。
        </p>

        {/* ── 紹介しない理由 ─── */}
        <section id="policy" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            当サイトが先払い買取の業者を紹介しない理由
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            先払い買取（現金化）は、商品売買を装いながらキャンセル（契約解除）を前提に現金を渡し、高額な違約金名目で回収する取引として、
            <strong className="text-text-main">
              金融庁・消費者庁・警察庁・財務局・日本貸金業協会が連名で注意喚起
            </strong>
            している取引です（仕組みの詳細は
            <Link
              href="/articles/sakibarai-kaitori/"
              className="font-medium text-primary underline"
            >
              先払い買取とは？違法性と危険な仕組み
            </Link>
            で解説）。注意喚起の対象は特定の業者ではなく、
            <strong className="text-text-main">スキームそのもの</strong>
            です。だからこそ、「どの業者なら大丈夫か」という問いの立て方自体が成り立ちにくいのです。
          </p>
          <div className="space-y-6">
            {notSolvedBySeller.map((item, index) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-6">
            <p className="mb-2 font-bold text-red-700">
              当サイトの方針
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              以上の理由から、当サイトは先払い買取の業者を「優良」「おすすめ」として紹介することはせず、良い・悪いを問わず特定の業者名の評価も行いません。当サイトが比較・紹介の対象とするのは、事業の売掛債権を対象とする正規のファクタリング（民法上の債権譲渡）のみです。
            </p>
          </div>
        </section>

        {/* ── 紹介サイトの見方 ─── */}
        <section id="review-sites" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            「優良」「おすすめ」をうたうサイトの見方
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            検索すると「先払い買取 優良店◯選」「おすすめランキング」といった紹介サイトが見つかります。こうしたサイトを見るときは、次の点を知っておいてください。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                紹介サイトには送客収益を目的とするものがある
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                業者を紹介するサイトには、掲載料や送客（利用申し込み）によって収益を得る目的で運営されているものがあります。その場合、「おすすめ順」は読者のリスクの低さではなく、
                <strong className="text-text-main">サイト運営者の収益構造を反映している可能性</strong>
                があります。当サイト自身も広告を含むメディアだからこそ、この構造を明示します——紹介する側に収益が入る仕組みの上では、「優良」という言葉を安全性の根拠として受け取るべきではありません。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                公的機関の姿勢は「優良業者の案内」ではなく「注意喚起」
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                金融庁は先払い買取現金化について「違法な金融業者にご注意！」として注意喚起ページを公開しており、消費者庁・警察庁等との連名資料でも繰り返し警告されています（いずれも2026年7月確認）。公的機関が「安全に使える先払い買取業者の一覧」を案内している事実はありません。
                <strong className="text-text-main">
                  「優良認定された業者」という概念自体が、公的には存在しない
                </strong>
                のです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                「古物商許可」「口コミ高評価」も安全の根拠にならない
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                古物商許可は中古品売買の営業許可であり、実態が貸付にあたる行為の適法性を保証しません。また、口コミや体験談は真偽の検証が難しく、「振込が早かった」という評価は、後から高額な違約金を請求される構造とは別の話です。表示や評判ではなく、
                <strong className="text-text-main">取引の構造（キャンセル前提の先払い＋違約金回収かどうか）</strong>
                で判断してください。
              </p>
            </div>
          </div>
        </section>

        {/* ── 正規の選択肢 ─── */}
        <section id="alternatives" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            どうしても現金が必要な場合の正規の選択肢
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「優良業者を探している」ということは、いま現金が必要な状況のはずです。その必要性自体は否定しません。だからこそ、危険なスキームではなく正規の選択肢を確認してください。立場によって取れる手段が異なります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                事業者（法人・個人事業主・フリーランス）｜請求書があるなら正規のファクタリング
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                事業で発行した請求書（売掛金）があるなら、それを売却して資金化する
                <strong className="text-text-main">
                  ファクタリング（民法にもとづく債権譲渡・貸金業登録不要の合法取引）
                </strong>
                が使えます。借入ではないため負債にならず、最短即日の資金化も可能です。フリーランス向けには少額から使える
                <Link href="/articles/hoshu-maebarai/" className="font-medium text-primary underline">
                  報酬の前払い・先払いサービス（＝請求書買取）
                </Link>
                もあります。短期の資金繰り全般は
                <Link href="/articles/tsunagi-shikin/" className="font-medium text-primary underline">
                  つなぎ資金の調達方法
                </Link>
                で選択肢を比較できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                個人（生活資金）｜まず公的窓口で支援制度を確認する
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                個人の生活資金にはファクタリングは使えません（事業の売掛債権が対象のため）。危険な現金化に頼る前に、
                <strong className="text-text-main">消費者ホットライン（188）や市区町村の相談窓口</strong>
                で、公的な支援制度や債務整理を含めた選択肢を確認してください。すでに先払い買取を利用して違約金を請求されている場合の対処は、
                <Link href="/articles/sakibarai-kaitori-cancel/" className="font-medium text-primary underline">
                  先払い買取のキャンセル料が払えない場合の対処法
                </Link>
                で詳しく解説しています。
              </p>
            </div>
          </div>
          <p className="mt-6 mb-4 leading-relaxed text-text-light">
            困ったときに使える公的窓口は次のとおりです（2026年7月確認）。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">相談窓口</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">電話番号</th>
                  <th className="px-4 py-3 font-semibold">こんなときに</th>
                </tr>
              </thead>
              <tbody>
                {consultWindows.map((w) => (
                  <tr key={w.name} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                      {w.name}
                    </td>
                    <td className="px-4 py-3 font-bold text-primary whitespace-nowrap">{w.tel}</td>
                    <td className="px-4 py-3 text-text-light">{w.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 一次情報ソース ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-border bg-section-bg p-6">
            <p className="mb-3 font-bold text-text-main">この記事の一次情報（公的機関の公表資料）</p>
            <ul className="space-y-2 text-sm leading-relaxed text-text-light">
              <li>
                ・金融庁「違法な金融業者にご注意！（いわゆる「先払い買取」現金化）」
                <a href="https://www.fsa.go.jp/ordinary/chuui/cashing_chuui2.html" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">
                  fsa.go.jp
                </a>
              </li>
              <li>
                ・消費者庁「いわゆる「先払い買取現金化」に関する注意喚起」（2022年3月公表）
                <a href="https://www.caa.go.jp/policies/policy/consumer_policy/caution/caution_026" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">
                  caa.go.jp
                </a>
              </li>
              <li>
                ・警察庁・金融庁・消費者庁・財務局・日本貸金業協会 連名注意喚起資料「いわゆる『先払い買取』現金化に要注意！」
                <a href="https://www.npa.go.jp/bureau/safetylife/keizai/sakibaraikaitori.pdf" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">
                  npa.go.jp（PDF）
                </a>
              </li>
            </ul>
            <p className="mt-3 text-xs text-text-light">
              いずれも2026年7月19日にリンク先への到達を確認。制度・注意喚起の内容は変更される場合があるため、最新情報は各機関の公式サイトをご確認ください。
            </p>
          </div>
        </section>

        {/* ── 関連ツール・データ ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">事業者の方へ｜正規の資金調達に使えるツール・データ</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
              <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
              <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
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
              href="/articles/fraud-patterns/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">悪質業者の手口と見分け方</p>
              <p className="mt-1 text-sm text-text-light">
                偽装ファクタリング・詐欺的な勧誘のパターンを具体的に解説
              </p>
            </Link>
            <Link
              href="/articles/sakibarai-kaitori/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">先払い買取とは？違法性と危険な仕組み</p>
              <p className="mt-1 text-sm text-text-light">
                スキームの3ステップ・危険サイン・相談窓口を一次情報で解説したメイン記事
              </p>
            </Link>
            <Link
              href="/articles/sakibarai-kaitori-cancel/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                先払い買取のキャンセル料が払えない場合の対処法
              </p>
              <p className="mt-1 text-sm text-text-light">
                すでに請求されて困っている場合の相談先の使い分けと証拠保全
              </p>
            </Link>
            <Link
              href="/articles/hoshu-maebarai/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">報酬の前払い・先払いサービスとは</p>
              <p className="mt-1 text-sm text-text-light">
                フリーランスの報酬を入金前に受け取る正規サービス（＝請求書買取）の仕組み
              </p>
            </Link>
            <Link
              href="/articles/tsunagi-shikin/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">つなぎ資金の調達方法</p>
              <p className="mt-1 text-sm text-text-light">
                入金までの数週間を乗り切る選択肢をコスト・スピード別に比較
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            売掛金があるなら、危険な現金化に頼る必要はありません
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            事業で発行した請求書は、正規のファクタリングで最短即日に資金化できます。手数料を公式確認した15社から、あなたの状況に合う1社を比較して選びましょう。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            正規のファクタリング15社を比較する
          </Link>
        </section>
      </div>
    </>
  );
}
