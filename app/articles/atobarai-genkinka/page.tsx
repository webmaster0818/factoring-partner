import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "後払い現金化・ツケ払い現金化とは？違法性と危険な仕組み【金融庁・消費者庁が注意喚起】",
  description:
    "「後払い（ツケ払い）現金化」は、商品を高額な後払いで購入させ、キャッシュバック等の名目で現金を渡す取引です。金融庁・消費者庁が注意喚起するとおり実態が貸付けなら無登録貸金業（ヤミ金融）のおそれがあります。仕組み、先払い買取との違い、貸金業法・出資法上の違法性、多重債務・個人情報のリスク、相談窓口、事業者が使える正規の資金調達まで一次情報にもとづいて解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/atobarai-genkinka/",
  },
  openGraph: {
    title:
      "後払い現金化・ツケ払い現金化とは？違法性と危険な仕組み【金融庁・消費者庁が注意喚起】",
    description:
      "後払い（ツケ払い）現金化は金融庁・消費者庁が注意喚起する取引。実態が貸付ならヤミ金融のおそれ。仕組み・先払い買取との違い・違法性・相談窓口を一次情報で解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/atobarai-genkinka/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const schemeSteps = [
  {
    title: "商品を「高額な後払い」で購入する契約を結ぶ",
    description:
      "利用者は、業者が指定する商品を後払い（ツケ払い）で購入する契約を結びます。金融庁の注意喚起によれば、商品の価値と販売価格は必ずしも見合っておらず、利用者も商品の入手を目的としていません。契約にあたって業者が行うのは、商品の説明よりも利用者の収入等による審査であることが多い——つまり最初から「商品」は現金を渡す口実です。",
  },
  {
    title: "キャッシュバック等の名目で、先に現金を受け取る",
    description:
      "商品代金を支払う前に、「キャッシュバック」「レビュー投稿の報酬」「宣伝協力金」などの名目で、業者から利用者に金銭が支払われます。金融庁は「商品代金の支払に先立ち、商品の購入者が金銭を受け取る」ことを、この取引の特徴として挙げています。形式は売買でも、お金の流れは「先に現金を受け取る」＝借入と同じです。",
  },
  {
    title: "給料日に、受け取った額より高額な「商品代金」を支払う",
    description:
      "後日（多くは給料日）、利用者は商品代金を後払いで支払います。先に受け取った金銭と商品代金の差額が高額であるため、これが実質的な「利息」にあたります。短期間で年利換算すると、貸金業法・出資法の上限金利（年20％）をはるかに超える高利になるケースが問題視されています。",
  },
];

const comparisonRows = [
  {
    name: "後払い（ツケ払い）現金化",
    flow: "現金を先に受領→後から商品代金名目で回収",
    disguise: "商品の高額後払い購入+キャッシュバック等",
    legal: "実態が貸付なら無登録貸金業（違法）のおそれ",
    verdict: "利用しない",
  },
  {
    name: "先払い買取（現金化）",
    flow: "買取代金名目で現金を先に受領→違約金名目で回収",
    disguise: "手元にない商品の「買取」+キャンセル前提",
    legal: "実態が貸付なら無登録貸金業（違法）のおそれ",
    verdict: "利用しない",
  },
  {
    name: "給与ファクタリング",
    flow: "給与債権の「買取」名目で現金を受領→給料日に回収",
    disguise: "個人の給与（賃金債権）の売買",
    legal: "金融庁見解で貸金業に該当。無登録業者は違法",
    verdict: "利用しない",
  },
  {
    name: "ファクタリング（売掛債権の売却）",
    flow: "事業の売掛債権を売却し、手数料を引いた代金を受領",
    disguise: "偽装なし（実在する債権の譲渡）",
    legal: "民法にもとづく債権譲渡（合法・貸金業登録不要）",
    verdict: "事業者は利用可",
  },
];

const risks = [
  {
    title: "高額な支払いで生活が悪化し、多重債務に陥る",
    description:
      "金融庁は、給料日等に商品代金を支払うことになり、その商品代金と先に受け取った金銭との差額が高額であることから、「かえって経済的生活が悪化し、多重債務に陥る危険性」を指摘しています。一度利用すると翌月の給料が商品代金の支払いで消え、また現金が足りなくなって繰り返し利用する——という悪循環が典型的なパターンです。",
  },
  {
    title: "無登録の貸金業（ヤミ金融）と取引してしまう",
    description:
      "金融庁は「形式的に商品の売買等であっても、その経済的な実態が貸付けであり、業として行う場合には、貸金業に該当するおそれ」があるとし、貸金業登録を受けずに貸金業を営む者は違法なヤミ金融業者（罰則の対象）だと注意喚起しています。無登録貸金業には10年以下の懲役もしくは3,000万円以下の罰金またはその併科（貸金業法第47条第2号）が定められています。ヤミ金融業者との取引は、執拗な取り立てなど深刻な二次被害につながる危険があります。",
  },
  {
    title: "個人情報が悪用・公開される",
    description:
      "申し込み時には、身分証・勤務先・収入・連絡先などの個人情報を業者に渡すことになります。金融庁・消費者庁の注意喚起は、取引で提供した個人情報が悪用されたり、ネット上でさらされるなど、トラブルや犯罪被害に巻き込まれる危険性を指摘しています。支払いが滞った際、勤務先や家族への連絡をほのめかされる圧力の材料にもなり得ます。",
  },
];

const consultWindows = [
  {
    name: "消費者ホットライン",
    tel: "188（いやや）",
    note: "最寄りの消費生活センターにつながる全国共通番号。契約トラブル全般の相談窓口",
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
    question: "後払い現金化はすべて違法ですか？",
    answer:
      "一律に違法と断定されているわけではありませんが、金融庁は「形式的に商品の売買等であっても、その経済的な実態が貸付けであり、業として行う場合には、貸金業に該当するおそれ」があると注意喚起しています。商品の入手が目的でなく、キャッシュバック等の名目で先に現金を受け取り、後からより高額な商品代金を支払う形態は、この「実質貸付」の典型です。無登録で貸金業を営めば、10年以下の懲役もしくは3,000万円以下の罰金またはその併科（貸金業法第47条第2号）の対象となる違法なヤミ金融であり、実際に商取引を仮装した貸付が貸金業法違反等で検挙された事例が警察庁の公表資料に掲載されています。",
  },
  {
    question: "「ツケ払い現金化」と「後払い現金化」は別のものですか？",
    answer:
      "同じ取引を指す呼び方の違いです。金融庁の注意喚起でも「いわゆる後払い（ツケ払い）現金化」と併記されています。「ツケ払い」「後払い」「即日キャッシュバック」など名称が変わっても、①商品を高額な後払いで購入させ、②先にキャッシュバック等の名目で現金を渡し、③後からより高額な商品代金を回収する、という構造は共通で、いずれも実態が貸付けなら無登録貸金業のおそれがあります。",
  },
  {
    question: "先払い買取とはどう違うのですか？",
    answer:
      "現金を渡す口実が「商品の後払い購入＋キャッシュバック」か「商品の先払い買取＋違約金」かの違いで、「先に現金を渡し、後からより多くの金銭を回収する＝実態は貸付」という構造は同じです。後払い現金化は商品代金の後払いで回収し、先払い買取はキャンセル時の違約金・代金返還で回収します。どちらも金融庁等が注意喚起する危険な現金化スキームであり、当サイトはいずれの利用も推奨しません。先払い買取の詳細は別記事で解説しています。",
  },
  {
    question: "すでに利用してしまい、商品代金を支払えません。どうすればいいですか？",
    answer:
      "一人で抱え込まず、支払う前にできるだけ早く公的な窓口へ相談してください。消費者ホットライン（188）、警察相談専用電話（#9110）、金融庁金融サービス利用者相談室（0570-016811）、日本貸金業協会（0570-051051）が利用できます。取引の実態がヤミ金融による貸付と評価される場合、法的な対応の余地があるため、消費生活センターや債務問題に詳しい弁護士・司法書士への相談が重要です。業者とのやり取り・振込記録・督促メッセージは証拠になるため、消さずに残しておきましょう。",
  },
  {
    question: "今すぐ資金が必要な場合、後払い現金化の代わりになる方法はありますか？",
    answer:
      "事業を営んでいて売掛金（請求書）があるなら、正規のファクタリング（民法にもとづく債権譲渡・貸金業登録不要）で最短即日の資金化が可能です。フリーランスは1万円から使えるサービスもあります。事業資金はよろず支援拠点や信用保証協会などの公的窓口でも無料相談できます。個人の生活資金の場合は、危険な現金化に頼る前に、消費者ホットライン（188）や市区町村の相談窓口で、公的な支援制度や債務整理を含めた選択肢を確認することを強くおすすめします。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "後払い現金化・ツケ払い現金化とは？違法性と危険な仕組み【金融庁・消費者庁が注意喚起】",
  description:
    "後払い（ツケ払い）現金化は金融庁・消費者庁が注意喚起する取引。実態が貸付ならヤミ金融のおそれ。仕組み・先払い買取との違い・違法性・相談窓口を一次情報で解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/articles/atobarai-genkinka/",
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
      name: "後払い現金化・ツケ払い現金化の違法性",
      item: "https://hyogo-shihoushoshi.jp/articles/atobarai-genkinka/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function AtobaraiGenkinkaPage() {
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
          { label: "後払い現金化・ツケ払い現金化の違法性" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            注意喚起・資金調達ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            後払い現金化・ツケ払い現金化とは？
            <br className="hidden md:block" />
            違法性と危険な仕組み
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            「商品を後払いで買うだけで即日現金」をうたう後払い（ツケ払い）現金化は、金融庁・消費者庁が注意喚起する取引です。実態が貸付けなら無登録の貸金業＝ヤミ金融のおそれがあります。仕組み、先払い買取との違いと共通点、違法性、トラブル時の相談窓口を、公的機関の一次情報にもとづいて解説します。
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
                後払い（ツケ払い）現金化は、商品の高額な後払い購入を装って<strong className="text-text-main">キャッシュバック等の名目で先に現金を渡し、給料日により高額な商品代金を回収する</strong>取引。実態が貸付なら無登録貸金業＝ヤミ金融のおそれがあると金融庁・消費者庁が注意喚起している
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                先払い買取とは<strong className="text-text-main">現金を渡す口実（後払い購入か先払い買取か）が違うだけで、「実態は貸付」の構造は同じ</strong>。高額な支払いによる生活悪化・多重債務、個人情報悪用の危険がある。すでに請求を受けている場合は188・#9110などの公的窓口へ
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                事業者が資金繰り目的で検討しているなら、<strong className="text-text-main">売掛債権を売却する正規のファクタリング（民法上の債権譲渡・合法）</strong>という別の選択肢がある。個人の生活資金は公的窓口へ
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
                1. 後払い（ツケ払い）現金化とは｜3ステップの仕組み
              </a>
            </li>
            <li>
              <a href="#vs-sakibarai" className="hover:underline">
                2. 先払い買取との違いと共通点（比較表）
              </a>
            </li>
            <li>
              <a href="#legal" className="hover:underline">
                3. 後払い現金化の違法性｜「実態が貸付」なら無登録貸金業のおそれ
              </a>
            </li>
            <li>
              <a href="#risk" className="hover:underline">
                4. 利用してはいけない3つの危険性
              </a>
            </li>
            <li>
              <a href="#consult" className="hover:underline">
                5. すでに利用・請求されている場合の相談窓口
              </a>
            </li>
            <li>
              <a href="#alternatives" className="hover:underline">
                6. 正規の代替手段｜事業者はファクタリング・個人は公的窓口へ
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
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。なお、当サイトが後払い（ツケ払い）現金化の利用を推奨することはありません。特定の現金化業者・サービスの紹介も行いません。掲載内容は調査時点のものであり、最新情報は各公式サイト・公的機関の発表をご確認ください。
        </p>

        {/* ── 後払い現金化とは ─── */}
        <section id="what" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            後払い（ツケ払い）現金化とは｜3ステップの仕組み
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">後払い（ツケ払い）現金化</strong>
            とは、形式的には後払いによる商品売買でありながら、商品代金の支払いに先立って購入者が金銭を受け取る取引です。金融庁が「『今すぐ現金』『手軽に現金』に注意ください！～いわゆる後払い（ツケ払い）現金化に要注意～」として注意喚起しているほか、消費者庁も2021年6月に注意喚起資料を公表しています。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            典型的な流れは次の3ステップです（金融庁・消費者庁の注意喚起にもとづく）。
          </p>
          <div className="space-y-6">
            {schemeSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-6">
            <p className="mb-2 font-bold text-red-700">
              「先に現金を受け取り、後でより多くを支払う」＝実態は借金
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              商品はほとんど価値がない、あるいは利用者にとって不要なものです。実際に動いているのはお金だけ——「先にキャッシュバックで受け取り、給料日により高額な商品代金を支払う」なら、それは商品売買ではなく高利の借金と同じ構造です。金融庁は「即日現金化」「ツケ払い商品売却で即日キャッシュバック」「レビュー投稿で現金報酬GET」といった誘い文句に注意するよう呼びかけています。
            </p>
          </div>
        </section>

        {/* ── 先払い買取との違い ─── */}
        <section id="vs-sakibarai" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            先払い買取との違いと共通点（比較表）
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            後払い現金化とよく似たスキームに
            <Link href="/articles/sakibarai-kaitori/" className="font-medium text-primary underline">
              先払い買取（現金化）
            </Link>
            があります。違いは「現金を渡す口実」だけです。後払い現金化は<strong className="text-text-main">商品を買わせて</strong>キャッシュバック名目で現金を渡し、商品代金名目で回収します。先払い買取は<strong className="text-text-main">商品を（形だけ）買い取って</strong>買取代金名目で現金を渡し、違約金名目で回収します。お金が先に渡り、後からより多くの金銭を回収する——<strong className="text-text-main">「実態は貸付」という構造はまったく同じ</strong>で、どちらも公的機関の注意喚起対象です。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">スキーム</th>
                  <th className="px-4 py-3 font-semibold">お金の流れ</th>
                  <th className="px-4 py-3 font-semibold">売買を装う方法</th>
                  <th className="px-4 py-3 font-semibold">法的評価</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">判断</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.name} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                      {row.name}
                    </td>
                    <td className="px-4 py-3 text-text-light">{row.flow}</td>
                    <td className="px-4 py-3 text-text-light">{row.disguise}</td>
                    <td className="px-4 py-3 text-text-light">{row.legal}</td>
                    <td
                      className={`px-4 py-3 font-semibold whitespace-nowrap ${
                        row.verdict.includes("利用しない") ? "text-red-600" : "text-secondary"
                      }`}
                    >
                      {row.verdict}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-text-light">
            ※後払い現金化・先払い買取現金化への注意喚起、給与ファクタリングが貸金業に該当するとの見解は、いずれも金融庁の公表資料にもとづきます（2026年7月確認）。正規のファクタリングにも偽装業者が紛れることがあるため、契約時は償還請求権の有無など契約内容の確認が必要です。
          </p>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            先払い買取型のスキームで実際に業者が検挙・摘発された事例は、
            <Link href="/articles/sakibarai-kaitori-tekihatsu/" className="font-medium text-primary underline">
              先払い買取の摘発事例と通報先
            </Link>
            で、警察庁の公表資料・報道にもとづいて紹介しています。
          </p>
        </section>

        {/* ── 違法性 ─── */}
        <section id="legal" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            後払い現金化の違法性｜「実態が貸付」なら無登録貸金業のおそれ
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            金融庁は後払い（ツケ払い）現金化について、次のとおり注意喚起しています。
          </p>
          <div className="mb-6 rounded-lg bg-section-bg p-6">
            <p className="text-sm leading-relaxed text-text-light">
              <strong className="text-text-main">形式的に商品の売買等であっても、その経済的な実態が貸付けであり、業として行う場合には、貸金業に該当するおそれ</strong>があります。貸金業登録を受けずに貸金業を営む者は、違法なヤミ金融業者（罰則の対象）です。——無登録で貸金業を営んだ場合の罰則は<strong className="text-text-main">10年以下の懲役もしくは3,000万円以下の罰金またはその併科（貸金業法第47条第2号）</strong>
            </p>
            <p className="mt-3 text-xs text-text-light">
              出典: 金融庁「『今すぐ現金』『手軽に現金』に注意ください！～いわゆる後払い（ツケ払い）現金化に要注意～」（2026年7月確認）
            </p>
          </div>
          <p className="mb-4 leading-relaxed text-text-light">
            あわせて、業として金銭を貸し付ける場合の上限金利は年20％で、これを超える利息の契約・受領は出資法の処罰対象です。「キャッシュバックと商品代金の差額」のように利息と呼ばない名目でも、実質的な利息として扱われ得ます。後払い現金化の差額を短期間の利息として年利換算すると、この上限をはるかに超える高利になるケースが問題視されています。
          </p>
          <p className="leading-relaxed text-text-light">
            契約書の形式が「売買契約」でも、<strong className="text-text-main">経済的な実態で判断される</strong>——これは先払い買取や偽装ファクタリングと共通する判断枠組みです。ファクタリングとの法的な線引きは
            <Link href="/articles/is-it-legal/" className="font-medium text-primary underline">
              ファクタリングは違法？合法？
            </Link>
            で解説しています。
          </p>
        </section>

        {/* ── 危険性 ─── */}
        <section id="risk" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            利用してはいけない3つの危険性
          </h2>
          <div className="space-y-6">
            {risks.map((risk, index) => (
              <div
                key={risk.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{risk.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {risk.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※「後払い現金化 優良店」「即日対応ランキング」といった紹介サイトも存在しますが、スキーム自体の危険性（実質貸付・高額な差額）は「優良」表示では解消されません。当サイトは後払い現金化の利用を推奨せず、特定の業者・サービスの紹介も行いません。
          </p>
        </section>

        {/* ── 相談窓口 ─── */}
        <section id="consult" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            すでに利用・請求されている場合の相談窓口
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            すでに後払い現金化を利用してしまった、商品代金を支払えない、取り立ての連絡が来ている——そんなときは、一人で抱え込まずに公的な窓口へ相談してください。いずれも公的機関・公的団体の窓口です（2026年7月確認）。
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
          <div className="mt-6 rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">相談前に準備しておくとよいもの</p>
            <p className="text-sm leading-relaxed text-text-light">
              業者とのやり取り（LINE・メールのスクリーンショット）、購入した商品と代金・キャッシュバック額がわかるもの、振込記録。督促のメッセージも証拠になるため、消さずに残しておきましょう。取引の実態がヤミ金融による貸付と評価される場合は法的な対応の余地があるため、支払う前に、消費生活センターや債務問題に詳しい弁護士・司法書士への相談を検討してください。
            </p>
          </div>
        </section>

        {/* ── 正規の代替 ─── */}
        <section id="alternatives" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            正規の代替手段｜事業者はファクタリング・個人は公的窓口へ
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「今すぐ現金が必要」という状況でも、危険な現金化に頼らない選択肢があります。立場別に整理します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                ① 事業者（法人・個人事業主・フリーランス）｜売掛金の正規資金化
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                事業で発行した請求書（売掛金）があるなら、正規のファクタリングで最短即日に資金化できます。民法にもとづく債権譲渡のため<strong className="text-text-main">貸金業登録が不要な合法取引</strong>で、借入ではないので負債にならず、信用情報にも影響しません。売掛金を資金化する方法の全体像は
                <Link href="/articles/urikakekin-genkinka/" className="font-medium text-primary underline">
                  売掛金を現金化する方法
                </Link>
                で、仕組みの基礎は
                <Link href="/articles/what-is-factoring/" className="font-medium text-primary underline">
                  ファクタリングとは
                </Link>
                で解説しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                ② 事業資金の相談｜公的な資金繰り支援窓口（無料）
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                全国47都道府県のよろず支援拠点（国が設置する無料経営相談所）や信用保証協会では、資金繰りの相談が無料でできます。当サイトでは
                <Link href="/articles/zenkoku-shikinguri-shien/" className="font-medium text-primary underline">
                  47都道府県の公的資金繰り支援窓口マップ
                </Link>
                として、公式サイトへの到達確認つきで窓口を一覧化しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                ③ 個人の生活資金｜公的な相談窓口・支援制度へ
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                個人の生活資金には、ファクタリングは利用できません（事業の売掛債権が対象のため）。危険な現金化に頼る前に、消費者ホットライン（188）や市区町村の相談窓口で、公的な貸付・支援制度や債務整理を含めた選択肢を確認してください。すでに複数の借入がある場合は、日本貸金業協会（0570-051051）や消費生活センターで多重債務の相談ができます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 一次情報ソース ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-border bg-section-bg p-6">
            <p className="mb-3 font-bold text-text-main">この記事の一次情報（公的機関の公表資料）</p>
            <ul className="space-y-2 text-sm leading-relaxed text-text-light">
              <li>
                ・金融庁「『今すぐ現金』『手軽に現金』に注意ください！～いわゆる後払い（ツケ払い）現金化に要注意～」
                <a href="https://www.fsa.go.jp/ordinary/chuui/cashing_chuui.html" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">
                  fsa.go.jp
                </a>
              </li>
              <li>
                ・消費者庁「いわゆる『後払い現金化』に関する注意喚起資料を公表しました」（2021年6月16日）
                <a href="https://www.caa.go.jp/notice/entry/024625/" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">
                  caa.go.jp
                </a>
              </li>
              <li>
                ・消費者庁「違法な貸付（ファクタリング等）や悪質な金融業者にご注意ください！」
                <a href="https://www.caa.go.jp/policies/policy/consumer_policy/caution/caution_026" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">
                  caa.go.jp
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
              href="/articles/sakibarai-kaitori/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">先払い買取とは？違法性と危険な仕組み</p>
              <p className="mt-1 text-sm text-text-light">
                現金が「先に渡る」同型スキーム。仕組み・危険サイン・相談窓口を解説
              </p>
            </Link>
            <Link
              href="/articles/sakibarai-kaitori-tekihatsu/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">先払い買取の摘発事例と通報先</p>
              <p className="mt-1 text-sm text-text-light">
                警察庁公表の検挙事例・報道された逮捕/判決と、業者を通報できる窓口
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
