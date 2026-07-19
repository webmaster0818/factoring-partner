import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "先払い買取の摘発事例と通報先｜何罪で逮捕される？警察庁公表の検挙実例と相談窓口",
  description:
    "先払い買取（現金化）の業者は実際に摘発されています。警察庁が公表した検挙事例（貸金業法違反・出資法違反）、報道された逮捕・判決の実例、摘発の法的根拠（無登録貸金業＝10年以下の懲役等）、#9110・金融庁0570-016811などの通報・情報提供先まで、到達確認済みの一次情報にもとづいて解説します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-tekihatsu/",
  },
  openGraph: {
    title:
      "先払い買取の摘発事例と通報先｜何罪で逮捕される？警察庁公表の検挙実例と相談窓口",
    description:
      "先払い買取業者の摘発は実際に起きている。警察庁公表の検挙事例・報道された逮捕/判決・摘発の法的根拠(貸金業法/出資法)・通報先(#9110/金融庁/貸金業協会)を一次情報で解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-tekihatsu/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const cases = [
  {
    label: "検挙事例（警察庁公表資料より）",
    title:
      "ギフトカードの「代金先払い買取」を仮装した無登録貸付｜8人と1法人を検挙",
    body: "警察庁が公表した「令和6年における生活経済事犯の検挙状況等について」（令和7年3月）に掲載された検挙事例です。会社役員の男（43）らは、貸金業の登録を受けることなく、令和2年5月頃から令和5年4月頃までの間、ネット上で融資を申し込んできた顧客約3,500人に対し、ギフトカードを代金先払いで買い取ったかのように仮装して、法定利息の約23倍から約50倍で金銭を貸し付け、返済のためギフトカードを郵送させて買取店で現金化する方法により、元利金合計約4億9,600万円を受領。令和6年6月までに、同男ら8人と1法人が貸金業法違反（無登録営業）・出資法違反（高金利の脱法行為）等で検挙されました（神奈川県警）。警察庁は同資料で「通常の商取引を仮装して金銭を貸し付けるヤミ金融による被害が全国的に拡大していた」なかで「全国で初めて同種手口の検挙に至った」と説明しています。",
    source: "警察庁「令和6年における生活経済事犯の検挙状況等について」（PDF）",
    sourceUrl:
      "https://www.npa.go.jp/publications/statistics/safetylife/R06_nennpou_teisei.pdf",
  },
  {
    label: "報道された逮捕事例",
    title: "「買取キング」運営者らを逮捕｜不用品買い取りを装ったヤミ金融の疑い",
    body: "日本経済新聞は2024年9月19日、「不用品買い取り装いヤミ金か、『買取キング』運営者ら逮捕」と報じました。不用品の買い取りを装ったヤミ金融（違法な貸付）の疑いで、先払い買取サイトの運営者らが逮捕されたという報道です。※当サイトが2026年7月に到達確認できたのは同記事の見出し部分まで（本文は掲載期間終了）のため、ここでは見出しで確認できる範囲のみを記載しています。",
    source: "日本経済新聞（2024年9月19日）",
    sourceUrl: "https://www.nikkei.com/article/DGXZQOUE1925J0Z10C24A9000000/",
  },
  {
    label: "違法性を認めた民事判決（刑事摘発ではなく民事訴訟）",
    title:
      "スマホの「先払い買い取り」に大阪地裁が賠償命令｜実態は貸金業法上の「貸し付け」と認定",
    body: "日本経済新聞は2025年4月22日、スマートフォンなどの買い取りを装って現金を送り、後から高額な違約金を請求する「先払い買い取り」について、大阪地裁が業者側に73万円の支払いを命じたと報じました。利用者だった男性が「実態は違法なヤミ金融で契約は無効」として約80万円の損害賠償を求めた訴訟で、判決は業者のサービスが貸金業法に違反するとし、違約金の支払いを目的とした貸金業法上の「貸し付け」にあたると判断したと報じられています。刑事事件の摘発ではありませんが、裁判所が先払い買取スキームの違法性を正面から認めた事例です。",
    source: "日本経済新聞（2025年4月22日）",
    sourceUrl: "https://www.nikkei.com/article/DGXZQOUF22C340S5A420C2000000/",
  },
];

const legalPoints = [
  {
    title: "無登録の貸金業（貸金業法違反）",
    description:
      "貸金業を営むには国（財務局）または都道府県の登録が必要です（貸金業法第3条）。商品売買を装っていても、経済的な実態が貸付けであり業として行う場合には貸金業に該当するおそれがあると金融庁が注意喚起しており、登録を受けずに営めば無登録営業（同法第11条第1項違反）として、10年以下の懲役もしくは3,000万円以下の罰金またはその併科（貸金業法第47条第2号）の対象になります。上の検挙事例でも、逮捕容疑の柱は貸金業法違反（無登録営業）でした。",
  },
  {
    title: "出資法の上限金利違反（高金利・脱法行為）",
    description:
      "出資法第5条は、業として金銭を貸し付ける場合に年20％を超える利息の契約・受領等を処罰の対象とし（5年以下の懲役もしくは1,000万円以下の罰金またはその併科）、年109.5％を超える場合はさらに重い罰則（10年以下の懲役もしくは3,000万円以下の罰金またはその併科）を定めています。違約金・キャンセル料・手数料といった名目でも、実質的に利息にあたる金銭は脱法的な高金利として処罰対象になり得ます。警察庁公表の検挙事例では「法定利息の約23倍から約50倍」の貸付が出資法違反（高金利の脱法行為）等として立件されました。",
  },
  {
    title: "「売買契約の形式」では守られない",
    description:
      "ポイントは、契約書の名目が「商品売買」「買取契約」でも、摘発の場面では経済的な実態で判断されることです。①現金が先に渡り、②後からより多くの金銭（代金返還＋違約金）を回収し、③それを反復継続して業として行っていれば、貸金業法・出資法の適用対象となり得ます。実際に、警察庁公表事例・報道された逮捕・民事判決のいずれも「実態は貸付」という認定が共通しています。",
  },
];

const reportWindows = [
  {
    name: "警察相談専用電話",
    tel: "#9110",
    note: "業者に関する情報提供・被害相談。執拗な取り立てや脅迫めいた連絡など緊急性があれば110番・最寄りの警察署へ",
  },
  {
    name: "金融庁 金融サービス利用者相談室",
    tel: "0570-016811",
    note: "無登録貸金業者・ヤミ金融に関する情報提供・相談（平日10:00〜17:00）",
  },
  {
    name: "日本貸金業協会 貸金業相談・紛争解決センター",
    tel: "0570-051051",
    note: "ヤミ金融・借金に関する相談。業界団体としてヤミ金融の手口の注意喚起も実施",
  },
  {
    name: "消費者ホットライン",
    tel: "188（いやや）",
    note: "最寄りの消費生活センターにつながる全国共通番号。契約トラブルの相談・情報提供",
  },
];

const faqs = [
  {
    question: "先払い買取の業者は、実際に摘発（逮捕）されていますか？",
    answer:
      "されています。警察庁が公表した「令和6年における生活経済事犯の検挙状況等について」には、ギフトカードの代金先払い買取を仮装して約3,500人に法定利息の約23倍〜約50倍で貸し付け、元利金約4億9,600万円を受領したとして、8人と1法人が貸金業法違反（無登録営業）・出資法違反等で検挙された事例（神奈川県警）が掲載されています。また日本経済新聞は2024年9月、不用品買い取りを装ったヤミ金融の疑いで先払い買取サイト「買取キング」の運営者らが逮捕されたと報じ、2025年4月には大阪地裁が先払い買取業者に対し「実態は貸金業法上の貸し付け」として賠償を命じた判決も報じられています。",
  },
  {
    question: "先払い買取の業者は何罪に問われるのですか？",
    answer:
      "摘発事例で中心となっているのは、①貸金業法違反（無登録営業）＝登録を受けずに貸金業を営んだ罪（10年以下の懲役もしくは3,000万円以下の罰金またはその併科・貸金業法第47条第2号）と、②出資法違反（高金利・その脱法行為）＝業として年20％を超える利息（違約金等の名目を含む）を契約・受領した罪です。商品売買の形式をとっていても、経済的な実態が貸付けなら適用対象になり得ると金融庁も注意喚起しています。個別の事件でどの罪が適用されるかは、捜査機関・裁判所が実態に即して判断します。",
  },
  {
    question: "利用者（お金を受け取った側）も罪に問われますか？",
    answer:
      "貸金業法の無登録営業や出資法の高金利の罰則は、貸し付けを行う業者側を対象とした規定です。利用者であることだけを理由にこれらの罰則で処罰されるものではありません。ただし、高額な違約金の請求や執拗な取り立てなどの被害に発展しやすいため、利用してしまった場合は一人で抱え込まず、消費者ホットライン（188）・警察相談専用電話（#9110）や、債務問題に詳しい弁護士・司法書士に早めに相談してください。支払う前に相談することが重要です。",
  },
  {
    question: "業者を通報したいのですが、どこに連絡すればよいですか？",
    answer:
      "警察相談専用電話（#9110）、金融庁金融サービス利用者相談室（0570-016811）、日本貸金業協会（0570-051051）、消費者ホットライン（188）が利用できます。業者名・サイトURL・やり取りのスクリーンショット・振込記録など、手元にある情報を整理して伝えるとスムーズです。脅迫めいた連絡や執拗な取り立てなど身の危険を感じる状況であれば、#9110や最寄りの警察署に速やかに相談してください。督促メッセージや振込記録は証拠になるため、消さずに残しておきましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "先払い買取の摘発事例と通報先｜何罪で逮捕される？警察庁公表の検挙実例と相談窓口",
  description:
    "先払い買取業者の摘発は実際に起きている。警察庁公表の検挙事例・報道された逮捕/判決・摘発の法的根拠(貸金業法/出資法)・通報先(#9110/金融庁/貸金業協会)を一次情報で解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-tekihatsu/",
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
      name: "先払い買取の摘発事例と通報先",
      item: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-tekihatsu/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SakibaraiKaitoriTekihatsuPage() {
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
          { label: "先払い買取の摘発事例と通報先" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            注意喚起・資金調達ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            先払い買取の摘発事例と通報先
            <br className="hidden md:block" />
            ｜何罪で逮捕される？検挙実例と相談窓口
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            「先払い買取は摘発されないの？」——実際に摘発されています。警察庁が公表した検挙事例、大手報道機関が報じた逮捕・判決、摘発の法的根拠（貸金業法・出資法）、そして業者を通報・相談できる公的窓口を、リンク先まで到達確認した一次情報にもとづいて解説します。
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
                先払い買取（現金化）型のヤミ金融は<strong className="text-text-main">実際に検挙されている</strong>。警察庁公表資料には、代金先払いの買取を仮装した無登録貸付で8人と1法人が貸金業法違反等で検挙された事例が掲載され、報道でも逮捕・賠償命令判決が確認できる
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                問われるのは主に<strong className="text-text-main">貸金業法違反（無登録営業＝10年以下の懲役もしくは3,000万円以下の罰金またはその併科）と出資法違反（高金利）</strong>。売買契約の形式でも、実態が貸付なら適用され得る
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                通報・相談は<strong className="text-text-main">#9110（警察）・0570-016811（金融庁）・0570-051051（貸金業協会）・188（消費生活センター）</strong>へ。すでに請求を受けている人は、支払う前に相談を
              </span>
            </li>
          </ul>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-8 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#cases" className="hover:underline">
                1. 先払い買取の摘発事例｜到達確認できた検挙・判決の実例
              </a>
            </li>
            <li>
              <a href="#stats" className="hover:underline">
                2. ヤミ金融事犯の検挙状況｜警察庁の公表データ
              </a>
            </li>
            <li>
              <a href="#legal" className="hover:underline">
                3. 摘発の法的根拠｜先払い買取は何罪に問われるのか
              </a>
            </li>
            <li>
              <a href="#report" className="hover:underline">
                4. 通報・情報提供先｜業者を通報できる公的窓口
              </a>
            </li>
            <li>
              <a href="#user" className="hover:underline">
                5. すでに利用してしまった人へ｜今すぐ相談を
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
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。なお、当サイトが先払い買取現金化の利用を推奨することはありません。摘発事例は公的機関の公表資料・報道機関の記事のうち、当サイトが実際にリンク先へ到達確認できたもののみを、記載の範囲内で紹介しています。掲載内容は調査時点のものであり、最新情報は各公式サイト・公的機関の発表をご確認ください。
        </p>

        {/* ── 摘発事例 ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            先払い買取の摘発事例｜到達確認できた検挙・判決の実例
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            先払い買取（
            <Link href="/articles/sakibarai-kaitori/" className="font-medium text-primary underline">
              仕組みと危険性はこちらで解説
            </Link>
            ）は、金融庁・消費者庁・警察庁などが連名で注意喚起する取引ですが、「注意喚起止まりで摘発はされていないのでは」という誤解があります。実際には、警察庁の公表資料と大手報道機関の記事で、検挙・逮捕・違法性を認めた判決を確認できます。以下は、2026年7月に当サイトが出典ページへの到達を確認できた事例のみです（内容は各出典に記載の範囲）。
          </p>
          <div className="space-y-6">
            {cases.map((c) => (
              <div key={c.title} className="rounded-lg border border-border bg-white p-6">
                <p className="mb-2 inline-block rounded bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
                  {c.label}
                </p>
                <h3 className="text-lg font-bold text-text-main">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">{c.body}</p>
                <p className="mt-3 text-xs text-text-light">
                  出典: {c.source}
                  <a
                    href={c.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 break-all text-primary underline"
                  >
                    {new URL(c.sourceUrl).hostname}
                  </a>
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※このほかにも先払い買取業者の摘発は報じられていますが、報道記事は掲載期間の終了で削除されることが多く、当サイトでは出典ページに到達確認できた事例のみを掲載しています。掲載していない＝摘発が無い、という意味ではありません。
          </p>
        </section>

        {/* ── 検挙状況データ ─── */}
        <section id="stats" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ヤミ金融事犯の検挙状況｜警察庁の公表データ
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            警察庁「令和6年における生活経済事犯の検挙状況等について」（令和7年3月公表）によれば、令和6年中のヤミ金融事犯全体の検挙事件数は639事件。うち、先払い買取型の摘発が含まれる<strong className="text-text-main">「無登録・高金利事犯」は70事件と、前年より14事件（25.0％）増加</strong>しました。ヤミ金融事犯に関する相談受理件数は3,825件で、インターネットを含む<strong className="text-text-main">非対面の手口が約9割（87.1％）</strong>を占めています。
          </p>
          <div className="rounded-lg bg-section-bg p-6">
            <p className="text-sm leading-relaxed text-text-light">
              同資料は、ヤミ金融事犯について「社会の変容に伴って新たな犯行手口が次々に発生して」いるとし、ギフトカードの売買を仮装した貸付（先払い買取型）をサイバーパトロールで発見・立件した経緯を検挙事例として紹介しています。商品売買を装う手口も、捜査機関の摘発対象として明確に認識されているということです。
            </p>
            <p className="mt-3 text-xs text-text-light">
              出典: 警察庁「令和6年における生活経済事犯の検挙状況等について」
              <a
                href="https://www.npa.go.jp/publications/statistics/safetylife/R06_nennpou_teisei.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 break-all text-primary underline"
              >
                npa.go.jp（PDF）
              </a>
              （2026年7月確認）
            </p>
          </div>
        </section>

        {/* ── 法的根拠 ─── */}
        <section id="legal" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            摘発の法的根拠｜先払い買取は何罪に問われるのか
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            摘発事例で適用されているのは、主に貸金業法と出資法（出資の受入れ、預り金及び金利等の取締りに関する法律）です。いずれも「貸す側」を規制する法律で、条文ベースの一般的な整理は次のとおりです。
          </p>
          <div className="space-y-6">
            {legalPoints.map((point, index) => (
              <div key={point.title} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{point.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            金融庁の注意喚起（2026年7月確認）も、先払い買取現金化について「商品売買を装っていても、その経済的な実態が貸付けであり、業として行う場合には、貸金業に該当するおそれ」があり、無登録で貸金業を営む者は違法なヤミ金融業者（罰則の対象）だとしています。ファクタリングを装った偽装貸付の違法性判断も同じ「実態基準」です（
            <Link href="/articles/is-it-legal/" className="font-medium text-primary underline">
              ファクタリングは違法？合法？
            </Link>
            で解説）。
          </p>
        </section>

        {/* ── 通報先 ─── */}
        <section id="report" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            通報・情報提供先｜業者を通報できる公的窓口
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            先払い買取業者に関する情報提供・通報・被害相談は、次の公的窓口で受け付けています（いずれも2026年7月確認）。被害に遭っていなくても、危険な業者を見つけた場合の情報提供は摘発・被害防止の手がかりになります。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">窓口</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">電話番号</th>
                  <th className="px-4 py-3 font-semibold">こんなときに</th>
                </tr>
              </thead>
              <tbody>
                {reportWindows.map((w) => (
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
          <div className="mt-6 rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">通報・相談の前に整理しておくとよい情報</p>
            <p className="text-sm leading-relaxed text-text-light">
              業者名・サイトURL・連絡に使われたLINEアカウントや電話番号、やり取りのスクリーンショット、振込記録、案内された違約金の金額と支払時期。督促のメッセージも証拠になるため、消さずに残しておきましょう。脅迫めいた連絡や執拗な取り立てなど身の危険を感じる場合は、#9110や最寄りの警察署へ速やかに相談してください。
            </p>
          </div>
        </section>

        {/* ── 利用者向け ─── */}
        <section id="user" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            すでに利用してしまった人へ｜今すぐ相談を
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            すでに先払い買取を利用して違約金を請求されている場合、<strong className="text-text-main">支払う前に相談すること</strong>が重要です。取引の実態がヤミ金融による貸付と評価される場合、法的な対応の余地があります。上の民事判決のように、裁判所が「実態は違法な貸し付け」と認めた例も報じられています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            先払い買取の仕組み・危険な業者のサイン・相談の準備については、メイン記事の
            <Link href="/articles/sakibarai-kaitori/" className="font-medium text-primary underline">
              先払い買取とは？違法性と危険な仕組み
            </Link>
            で詳しく解説しています。また、名前の似た「後払い現金化・ツケ払い現金化」も同じ構造の危険な取引です（
            <Link href="/articles/atobarai-genkinka/" className="font-medium text-primary underline">
              後払い現金化・ツケ払い現金化の違法性
            </Link>
            で解説）。
          </p>
          <p className="leading-relaxed text-text-light">
            事業者の方が資金繰り目的で現金化を検討していたなら、売掛金（請求書）を正規に資金化する
            <Link href="/articles/urikakekin-genkinka/" className="font-medium text-primary underline">
              売掛金を現金化する方法
            </Link>
            を先に確認してください。民法にもとづく債権譲渡（ファクタリング）なら、貸金業登録が不要な合法の資金調達です。
          </p>
        </section>

        {/* ── 一次情報ソース ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-border bg-section-bg p-6">
            <p className="mb-3 font-bold text-text-main">この記事の一次情報（公的機関の公表資料・報道）</p>
            <ul className="space-y-2 text-sm leading-relaxed text-text-light">
              <li>
                ・警察庁「令和6年における生活経済事犯の検挙状況等について」（令和7年3月）
                <a href="https://www.npa.go.jp/publications/statistics/safetylife/R06_nennpou_teisei.pdf" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">
                  npa.go.jp（PDF）
                </a>
              </li>
              <li>
                ・金融庁「商品の買取りをうたって高額な違約金を請求する悪質な業者にご注意ください！」
                <a href="https://www.fsa.go.jp/ordinary/chuui/cashing_chuui2.html" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">
                  fsa.go.jp
                </a>
              </li>
              <li>
                ・警察庁・金融庁・消費者庁・財務局・日本貸金業協会 連名注意喚起資料「いわゆる『先払い買取』現金化に要注意！」
                <a href="https://www.npa.go.jp/bureau/safetylife/keizai/sakibaraikaitori.pdf" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">
                  npa.go.jp（PDF）
                </a>
              </li>
              <li>
                ・日本経済新聞「不用品買い取り装いヤミ金か、『買取キング』運営者ら逮捕」（2024年9月19日）
                <a href="https://www.nikkei.com/article/DGXZQOUE1925J0Z10C24A9000000/" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">
                  nikkei.com
                </a>
              </li>
              <li>
                ・日本経済新聞「スマホの『先払い買い取り』、大阪地裁が賠償命令 違法性認定」（2025年4月22日）
                <a href="https://www.nikkei.com/article/DGXZQOUF22C340S5A420C2000000/" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">
                  nikkei.com
                </a>
              </li>
            </ul>
            <p className="mt-3 text-xs text-text-light">
              いずれも2026年7月19日にリンク先への到達を確認。報道記事は掲載期間の終了で閲覧できなくなる場合があります。制度・注意喚起の内容は変更される場合があるため、最新情報は各機関の公式サイトをご確認ください。
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
              href="/articles/sakibarai-kaitori/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">先払い買取とは？違法性と危険な仕組み</p>
              <p className="mt-1 text-sm text-text-light">
                仕組み3ステップ・危険な業者のサイン・相談窓口をまとめたメイン記事
              </p>
            </Link>
            <Link
              href="/articles/atobarai-genkinka/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">後払い現金化・ツケ払い現金化の違法性</p>
              <p className="mt-1 text-sm text-text-light">
                現金が「後から回収される」逆パターン。先払い買取との違いと共通点
              </p>
            </Link>
            <Link
              href="/articles/salary-factoring-illegal/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">給与ファクタリングはなぜ違法か</p>
              <p className="mt-1 text-sm text-text-light">
                個人の給与を対象とする現金化の危険性と金融庁の見解
              </p>
            </Link>
            <Link
              href="/articles/urikakekin-genkinka/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">売掛金を現金化する方法</p>
              <p className="mt-1 text-sm text-text-light">
                事業者なら正規の方法で。ファクタリング等4つの資金化手段を比較
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
