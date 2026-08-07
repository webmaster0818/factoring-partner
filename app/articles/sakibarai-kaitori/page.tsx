import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "先払い買取とは？違法性と危険な仕組み・ファクタリングとの違い【金融庁等が注意喚起】",
  description:
    "「先払い買取」による現金化は、金融庁・消費者庁・警察庁などが連名で注意喚起する取引です。商品売買を装った実質的な貸付（ヤミ金融）のおそれ、高額な違約金・多重債務のリスク、トラブル時の公的相談窓口、事業者が使える正規の資金調達（ファクタリング）との違いまで、一次情報にもとづいて解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori/",
  },
  openGraph: {
    title:
      "先払い買取とは？違法性と危険な仕組み・ファクタリングとの違い【金融庁等が注意喚起】",
    description:
      "先払い買取現金化は金融庁・消費者庁・警察庁等が注意喚起する取引。仕組み・違約金リスク・相談窓口・正規の資金調達との違いを一次情報で解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const schemeSteps = [
  {
    title: "商品画像を送って買取を申し込む",
    description:
      "利用者がスマホやゲーム機などの商品画像を業者に送り、買取を申し込みます。警察庁等の注意喚起資料によれば、ネット上の商品画像など「利用者の手元にない商品」を対象とすることが多く、業者側から商品画像が提供されることさえあります。つまり、最初から実際に商品を売買するつもりのない取引です。",
  },
  {
    title: "「先払い代金」として現金を受け取る",
    description:
      "業者は商品の到着を待たずに「買取代金」を先に振り込みます。このとき、商品を発送しなかった場合の違約金（キャンセル料）の金額と支払時期が案内されるのが典型です。業者は商品の価値にはほとんど関心がなく、契約にあたって行われるのは主に利用者の収入などによる審査です。これは商品売買ではなく、貸付の審査と同じ構造です。",
  },
  {
    title: "発送期限後、代金の返還+高額な違約金を請求される",
    description:
      "商品の発送期限が過ぎると、受け取った買取代金の返還に加えて、違約金（キャンセル料）名目の金銭の支払いを求められます。受け取った金額より多くを返す——この差額が実質的な「利息」にあたり、短期間で年利換算すると極めて高利になるケースが問題視されています。",
  },
];

const risks = [
  {
    title: "高額な違約金で、かえって生活が悪化する",
    description:
      "消費者庁は「後々の高額な違約金名目の金銭の支払いが発生したり、買取代金と商品券購入代金の差額が高額であることにより、かえって生活が悪化し、多重債務に陥る危険性」を指摘しています（2022年3月公表の注意喚起）。一度利用すると翌月も資金が不足し、繰り返し利用して負担が雪だるま式に増えるのが典型的な悪化パターンです。",
  },
  {
    title: "無登録の貸金業（ヤミ金融）に該当するおそれ",
    description:
      "金融庁は、商品売買を装っていても経済的な実態が貸付けであり業として行う場合には「貸金業に該当するおそれ」があるとしています。貸金業登録を受けずに貸金業を営む者は違法なヤミ金融業者であり、10年以下の懲役もしくは3,000万円以下の罰金またはその併科（貸金業法第47条第2号）の対象です。ヤミ金融業者との取引では、執拗な取り立てなど深刻な二次被害につながる危険があります。",
  },
  {
    title: "個人情報が悪用・公開される",
    description:
      "申し込み時には、身分証・勤務先・収入・連絡先などの個人情報を業者に渡すことになります。警察庁等の資料は「取引で提供した個人情報が悪用されたり、ネット上でさらされるなど、トラブルや犯罪に巻き込まれる危険性」を明記しています。支払いが滞った際に、勤務先や家族への連絡をほのめかされるといった圧力の材料にもなり得ます。",
  },
];

const dangerSigns = [
  "手元にない商品（ネット上の画像だけ）でも申し込める、業者側が商品画像を用意してくれる",
  "商品の状態より、収入・勤務先など「支払い能力」の審査が中心",
  "契約の時点で、キャンセル料（違約金）の金額と支払時期が案内される",
  "「発送しなくても即日現金」「ブラックOK」「審査なし」などの誘い文句",
  "買取率が相場より著しく低い（受け取れる現金が商品価値より大幅に少ない）",
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

const comparisonRows = [
  {
    name: "先払い買取（現金化）",
    target: "手元にない商品の画像など",
    legal: "実態が貸付なら無登録貸金業（違法）のおそれ",
    user: "個人（生活資金目的）",
    verdict: "利用しない",
  },
  {
    name: "給与ファクタリング",
    target: "個人の給与（賃金債権）",
    legal: "金融庁見解で貸金業に該当。無登録業者は違法",
    user: "個人（給与の前借り目的）",
    verdict: "利用しない",
  },
  {
    name: "通常の宅配買取・店頭買取",
    target: "実際に手元にある品物",
    legal: "古物営業法にもとづく中古品売買（合法）",
    user: "個人・事業者",
    verdict: "通常の売買として利用可",
  },
  {
    name: "ファクタリング（売掛債権の売却）",
    target: "事業で生じた売掛債権（請求書）",
    legal: "民法にもとづく債権譲渡（合法・貸金業登録不要）",
    user: "法人・個人事業主・フリーランス",
    verdict: "正規の資金調達として利用可",
  },
];

const faqs = [
  {
    question: "先払い買取はすべて違法ですか？",
    answer:
      "一律に違法と断定されているわけではなく、金融庁は「個別具体的な実態を踏まえて判断する必要がある」としています。ただし、商品売買を装っていても経済的な実態が貸付けであり業として行う場合には貸金業に該当するおそれがあり、無登録で貸金業を営めば10年以下の懲役もしくは3,000万円以下の罰金またはその併科（貸金業法第47条第2号）の対象となる違法なヤミ金融です。キャンセル（契約解除）を前提に現金を先払いし、高額な違約金を請求する形態は、この「実質貸付」の典型として金融庁・消費者庁・警察庁などが連名で注意喚起しています。",
  },
  {
    question: "古物商許可のある業者なら安全ですか？",
    answer:
      "古物商許可（古物営業法）は中古品を売買する営業の許可であり、貸付行為の適法性を保証するものではありません。実態が貸付にあたる取引を業として行うには、別途、貸金業登録が必要です。「古物商許可取得済み」の表示があっても、キャンセル前提の先払いで違約金を請求するスキームであれば、無登録貸金業に該当するおそれは残ります。",
  },
  {
    question: "高額なキャンセル料（違約金）を請求されています。どうすればいいですか？",
    answer:
      "一人で抱え込まず、できるだけ早く公的な窓口に相談してください。消費者ホットライン（188）、警察相談専用電話（#9110）、金融庁金融サービス利用者相談室（0570-016811）、日本貸金業協会（0570-051051）が利用できます。取引の実態がヤミ金融による貸付と評価される場合、法的な対応の余地があるため、支払う前に消費生活センターや、債務問題に詳しい弁護士・司法書士へ相談することが重要です。督促のメッセージや振込記録などの証拠は消さずに残しておきましょう。",
  },
  {
    question: "ファクタリングと先払い買取は同じものですか？",
    answer:
      "まったくの別物です。ファクタリングは、事業者が保有する売掛債権（請求書）を売却する民法上の債権譲渡で、貸金業登録が不要な合法的な資金調達手段です。一方、先払い買取現金化は、手元にない商品の売買を装って個人に現金を渡し、違約金名目で回収する取引で、実態が貸付なら無登録貸金業のおそれがあります。対象（事業の売掛債権か、実体のない商品か）と法的性質がまったく異なります。ただしファクタリングを装った偽装業者も存在するため、償還請求権の有無など契約内容の確認は必要です。",
  },
  {
    question: "「請求書の先払い」「報酬の前払い」サービスとは違うのですか？",
    answer:
      "名前は似ていますが別物です。フリーランス向けの「報酬前払い・請求書先払い」サービスは、発行済みの請求書（売掛債権）を買い取るファクタリングであり、正規の事業者向けサービスです。一方、個人の給与を対象とする「給与ファクタリング」は金融庁の見解で貸金業に該当するとされており、無登録業者の利用は避けるべきです。「先払い」という言葉だけで判断せず、対象が事業の売掛債権かどうかを確認してください。",
  },
  {
    question: "スマホやiPhoneの先払い買取なら安全ですか？",
    answer:
      "商材がスマホ・iPhoneであっても、仕組みが同じであればリスクは変わりません。警察庁等の注意喚起資料が示すとおり、問題の本質は「実際には商品を売買せず、キャンセル前提で現金を渡し高額な違約金で回収する」という構造にあります。むしろスマホ・ゲーム機は『ネット上の商品画像』を使った申し込みが典型例として名指しされている商材です。実際に手元にある端末を通常の買取店（店頭・宅配)で売却することとは全く別の取引である点にご注意ください。",
  },
  {
    question: "手元に商品がなくても（無職でも）利用できると聞きましたが本当ですか？",
    answer:
      "「手元に商品がなくてもOK」は、この取引が商品売買ではないことを自ら示すサインです。警察庁等の資料は、業者が商品の価値に関心がなく、契約にあたって主に利用者の収入等による審査を行うことを特徴として挙げています。つまり行われているのは買取の査定ではなく、貸付の審査に近いものです。収入がない方に対しても現金を渡す業者は、その後の高額な違約金の回収を前提としている可能性が高く、生活がさらに悪化する危険があります。利用せず、まず消費者ホットライン（188）等の公的窓口にご相談ください。",
  },
  {
    question: "今すぐ現金が必要です。先払い買取の代わりになる方法はありますか？",
    answer:
      "事業を営んでいて売掛金（請求書）があるなら、正規のファクタリングで最短即日の資金化が可能です（フリーランスは1万円から使えるサービスもあります）。事業資金全般は、よろず支援拠点や信用保証協会などの公的窓口でも相談できます。個人の生活資金の場合は、危険な現金化に頼る前に、まず消費者ホットライン（188）や市区町村の相談窓口で、公的な支援制度や債務整理を含めた選択肢を確認することを強くおすすめします。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "先払い買取とは？違法性と危険な仕組み・ファクタリングとの違い【金融庁等が注意喚起】",
  description:
    "先払い買取現金化は金融庁・消費者庁・警察庁等が注意喚起する取引。仕組み・違約金リスク・相談窓口・正規の資金調達との違いを一次情報で解説。",
  datePublished: "2026-07-15",
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
    "@id": "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori/",
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
      name: "先払い買取とは？違法性と危険な仕組み",
      item: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SakibaraiKaitoriPage() {
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
          { label: "先払い買取とは？違法性と危険な仕組み" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            注意喚起・資金調達ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            先払い買取とは？
            <br className="hidden md:block" />
            違法性と危険な仕組み・ファクタリングとの違い
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            「商品を送らなくても即日現金」をうたう先払い買取（現金化）は、金融庁・消費者庁・警察庁などが連名で注意喚起する取引です。仕組みと危険性、トラブル時の相談窓口、そして名前が似ている正規サービスとの違いを、公的機関の一次情報にもとづいて解説します。
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
                先払い買取（現金化）は、商品売買を装いながら<strong className="text-text-main">キャンセル（契約解除）を前提に現金を渡し、高額な違約金名目で回収する</strong>取引。実態が貸付なら無登録貸金業＝ヤミ金融のおそれがあると金融庁が注意喚起している
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                高額な違約金で<strong className="text-text-main">かえって生活が悪化し多重債務に陥る危険</strong>、個人情報が悪用される危険がある。すでに請求を受けている場合は188・#9110などの公的窓口へ
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                事業者が資金繰り目的で検討しているなら、<strong className="text-text-main">売掛債権を売却する正規のファクタリング（民法上の債権譲渡・合法）</strong>という別の選択肢がある。「先払い」の名前が似ていても両者はまったくの別物
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
                1. 先払い買取（現金化）とは｜3ステップの仕組み
              </a>
            </li>
            <li>
              <a href="#difference" className="hover:underline">
                2. 通常の買取サービスと決定的に違う2つの特徴
              </a>
            </li>
            <li>
              <a href="#legal" className="hover:underline">
                3. 先払い買取の違法性｜「実態が貸付」なら無登録貸金業のおそれ
              </a>
            </li>
            <li>
              <a href="#risk" className="hover:underline">
                4. 利用してはいけない3つの危険性
              </a>
            </li>
            <li>
              <a href="#signs" className="hover:underline">
                5. 危険な業者に共通するサイン
              </a>
            </li>
            <li>
              <a href="#consult" className="hover:underline">
                6. すでに利用・請求されている場合の相談窓口
              </a>
            </li>
            <li>
              <a href="#vs-factoring" className="hover:underline">
                7. ファクタリング・正規サービスとの違い（比較表）
              </a>
            </li>
            <li>
              <a href="#alternatives" className="hover:underline">
                8. 事業者なら正規の資金調達を｜先払い買取に頼らない選択肢
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                9. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。なお、当サイトが先払い買取現金化の利用を推奨することはありません。掲載内容は調査時点のものであり、最新情報は各公式サイト・公的機関の発表をご確認ください。
        </p>

        {/* ── 先払い買取とは ─── */}
        <section id="what" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            先払い買取（現金化）とは｜3ステップの仕組み
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">先払い買取（先払い買取現金化）</strong>
            とは、買取業者が「商品を受け取る前に買取代金を先に振り込む」とうたい、実際には商品の発送を前提とせず、後から
            <strong className="text-text-main">違約金（キャンセル料）名目でより高額な金銭を支払わせる</strong>
            取引です。消費者庁が2022年3月に注意喚起を公表し、金融庁・警察庁・財務局・日本貸金業協会との連名資料でも「いわゆる『先払い買取』現金化に要注意！」と繰り返し警告されています。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            典型的な流れは次の3ステップです（警察庁・金融庁等の注意喚起資料にもとづく）。
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
              「お金を受け取って、より多くを返す」＝実態は借金
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              警察庁等の資料は「高額な違約金（キャンセル料）を支払う前提で、商品買取業者からお金を受け取っていませんか？そのお金、ヤミ金融からの借金かもしれません！」と呼びかけています。商品が動かず、お金だけが「先に受け取り→後でより多く返す」形で動くなら、それは売買ではなく借金と同じ構造です。
            </p>
          </div>
        </section>

        {/* ── 通常の買取との違い ─── */}
        <section id="difference" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            通常の買取サービスと決定的に違う2つの特徴
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「先払い」という支払い方式そのものは、実際に品物を発送する正常な宅配買取にも存在します。問題となる「先払い買取現金化」は、次の2点で通常の買取と決定的に異なります。金融庁・警察庁等の注意喚起資料が挙げる特徴です。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                特徴1｜商品売買を装っているが、契約の解除（キャンセル）が前提
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                業者は実際に商品を買い取るつもりがありません。だからこそ、手元にない商品（ネット上の画像）でも申し込みが成立し、業者側から商品画像が提供されることすらあります。商品の価値には関心がなく、契約にあたって行われるのは主として<strong className="text-text-main">利用者の収入等による審査</strong>——つまり「商品がいくらで売れるか」ではなく「この人からいくら回収できるか」の審査です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                特徴2｜違約金（キャンセル料）名目の金銭が高額
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                発送期限が過ぎると、受け取った買取代金の返還に加えて高額な違約金を請求されます。受け取った現金より多くを短期間で返す構造のため、年利に換算すると貸金業法・出資法の上限金利（年20%）をはるかに超える高利となるケースが問題視されています。商品券などを対象に、一般的な買取価格より著しく低額で先払いする（差額が実質利息になる）変形パターンも消費者庁が注意喚起しています。
              </p>
            </div>
          </div>
        </section>

        {/* ── 違法性 ─── */}
        <section id="legal" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            先払い買取の違法性｜「実態が貸付」なら無登録貸金業のおそれ
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            金融庁は先払い買取現金化について、次のとおり注意喚起しています。
          </p>
          <div className="mb-6 rounded-lg bg-section-bg p-6">
            <p className="text-sm leading-relaxed text-text-light">
              商品売買を装っていても、その<strong className="text-text-main">経済的な実態が貸付け</strong>であり、業として行う場合には、<strong className="text-text-main">貸金業に該当するおそれ</strong>があります（個別具体的な実態を踏まえて判断する必要があります）。貸金業登録を受けずに貸金業を営む者は、違法なヤミ金融業者（罰則の対象）です。——<strong className="text-text-main">10年以下の懲役もしくは3,000万円以下の罰金またはその併科（貸金業法第47条第2号）</strong>
            </p>
            <p className="mt-3 text-xs text-text-light">
              出典: 金融庁「違法な金融業者にご注意！」注意喚起ページ（2026年7月確認）
            </p>
          </div>
          <p className="mb-4 leading-relaxed text-text-light">
            ポイントは、契約書の形式が「売買契約」でも、<strong className="text-text-main">経済的な実態で判断される</strong>ことです。①現金が先に渡り、②後からより多くの金銭（代金返還+違約金）を支払わせ、③それが反復継続的に業として行われていれば、名目にかかわらず貸付＝貸金業と評価されるおそれがあります。無登録であれば、その業者はヤミ金融です。
          </p>
          <p className="leading-relaxed text-text-light">
            なお「古物商許可取得済み」を掲げる業者もありますが、古物営業法の許可は中古品売買の営業許可であって、<strong className="text-text-main">貸付行為の適法性を保証するものではありません</strong>。実態が貸付なら、必要なのは古物商許可ではなく貸金業登録です。ファクタリング業界でも同様に、債権売買を装った偽装貸付業者が問題になっています（
            <Link href="/articles/is-it-legal/" className="font-medium text-primary underline">
              ファクタリングは違法？合法？
            </Link>
            で解説）。
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
        </section>

        {/* ── 危険サイン ─── */}
        <section id="signs" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            危険な業者に共通するサイン
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            公的機関の注意喚起資料に挙げられた手口から、危険な先払い買取業者に共通するサインを整理しました。ひとつでも当てはまる場合、その取引は「商品の売買」ではなく「実質的な貸付」の可能性を疑ってください。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              {dangerSigns.map((sign) => (
                <li key={sign} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 font-bold text-red-600">⚠</span>
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※「先払い買取 おすすめ」「優良店ランキング」といった紹介サイトも存在しますが、上記のスキーム自体の危険性（実質貸付・高額違約金）は業者の「優良」表示では解消されません。当サイトは先払い買取現金化の利用を推奨しません。
          </p>
        </section>

        {/* ── 相談窓口 ─── */}
        <section id="consult" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            すでに利用・請求されている場合の相談窓口
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            すでに先払い買取を利用してしまった、違約金を請求されている、取り立ての連絡が来ている——そんなときは、一人で抱え込まずに公的な窓口へ相談してください。いずれも公的機関・公的団体の窓口です（2026年7月確認）。
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
              業者とのやり取り（LINE・メールのスクリーンショット）、振込記録、案内された違約金の金額・支払時期がわかるもの。督促のメッセージも証拠になるため、消さずに残しておきましょう。取引の実態がヤミ金融による貸付と評価される場合は法的な対応の余地があるため、支払う前に、消費生活センターや債務問題に詳しい弁護士・司法書士への相談を検討してください。
            </p>
          </div>
        </section>

        {/* ── 比較表 ─── */}
        <section id="vs-factoring" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング・正規サービスとの違い（比較表）
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「先払い」「買取」という言葉が入ったサービスには、危険なものと正規のものが混在しています。名前の印象ではなく、<strong className="text-text-main">「何を」買い取るのか（対象）と法的性質</strong>で区別してください。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">サービス</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">買取の対象</th>
                  <th className="px-4 py-3 font-semibold">法的性質</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">主な利用者</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">判断</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.name} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                      {row.name}
                    </td>
                    <td className="px-4 py-3 text-text-light">{row.target}</td>
                    <td className="px-4 py-3 text-text-light">{row.legal}</td>
                    <td className="px-4 py-3 text-text-light whitespace-nowrap">{row.user}</td>
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
            ※給与ファクタリングが貸金業に該当するとの金融庁見解、先払い買取現金化への注意喚起は、いずれも金融庁公表資料にもとづきます（2026年7月確認）。正規のファクタリングにも偽装業者が紛れることがあるため、契約時は償還請求権の有無・手数料の内訳を必ず確認してください。
          </p>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            フリーランス向けの正規の前払いサービスは
            <Link href="/articles/hoshu-maebarai/" className="font-medium text-primary underline">
              報酬の前払い・先払いサービスとは
            </Link>
            、給与前払いとの区別は
            <Link href="/articles/kyuyo-maebarai-chigai/" className="font-medium text-primary underline">
              給与前払いサービスと報酬前払いの違い
            </Link>
            、給与ファクタリングの危険性は
            <Link href="/articles/salary-factoring-illegal/" className="font-medium text-primary underline">
              給与ファクタリングはなぜ違法か
            </Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* ── 事業者向け代替 ─── */}
        <section id="alternatives" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            事業者なら正規の資金調達を｜先払い買取に頼らない選択肢
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            個人事業主やフリーランスの方が「今月の運転資金が足りない」という理由で先払い買取を検討しているなら、その前に確認してほしいことがあります。<strong className="text-text-main">事業で発行した請求書（売掛金）があるなら、それを正規に資金化する方法がある</strong>ということです。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                ① ファクタリング（売掛債権の売却）｜最短即日・合法の資金化
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                発行済みの請求書を専門会社に売却し、手数料を差し引いた代金を受け取る方法です。民法にもとづく債権譲渡のため<strong className="text-text-main">貸金業登録が不要な合法取引</strong>で、借入ではないので負債にならず、信用情報にも影響しません。フリーランス向けには1万円から・最短10分で使えるサービスもあります。仕組みは
                <Link href="/articles/what-is-factoring/" className="font-medium text-primary underline">
                  ファクタリングとは
                </Link>
                、フリーランス向けの使い方は
                <Link href="/articles/for-freelance/" className="font-medium text-primary underline">
                  フリーランスのファクタリング活用ガイド
                </Link>
                をご覧ください。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                ② 公的な資金繰り支援窓口｜無料で相談できる
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
                ③ つなぎ資金の選択肢を比較する
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                入金までの短期間を乗り切る方法はファクタリング以外にもあります。
                <Link href="/articles/tsunagi-shikin/" className="font-medium text-primary underline">
                  つなぎ資金の調達方法
                </Link>
                で、コスト・スピード別に比較しています。
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            なお、個人の生活資金が目的の場合、ファクタリングは利用できません（事業の売掛債権が対象のため）。危険な現金化に頼る前に、消費者ホットライン（188）や市区町村の相談窓口で公的な支援制度・債務整理を含めた選択肢を確認してください。
          </p>
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
              いずれも2026年7月14日にリンク先への到達を確認。制度・注意喚起の内容は変更される場合があるため、最新情報は各機関の公式サイトをご確認ください。
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
              href="/articles/hoshu-maebarai/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">報酬の前払い・先払いサービスとは</p>
              <p className="mt-1 text-sm text-text-light">
                フリーランスの報酬を入金前に受け取る正規サービス（＝請求書買取）の仕組み
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
              href="/articles/seikyusho-sakibarai/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">請求書の先払いサービスとは</p>
              <p className="mt-1 text-sm text-text-light">
                名前が似ていても別物。事業の請求書を先に資金化する正規の仕組み
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
            <Link
              href="/articles/sakibarai-kaitori-cancel/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">キャンセル料が払えない場合の対処法</p>
              <p className="mt-1 text-sm text-text-light">
                法テラス・公的窓口の使い分けと証拠保全。支払う前に読む
              </p>
            </Link>
            <Link
              href="/articles/sakibarai-kaitori-shiharaenai/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">支払えない・遅れそうなときの対処法</p>
              <p className="mt-1 text-sm text-text-light">
                放置も自転車操業もNG。司法書士・弁護士など相談窓口の一覧
              </p>
            </Link>
            <Link
              href="/articles/sakibarai-kaitori-temoto-ni-nai/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">商品が手元にないのに使える？</p>
              <p className="mt-1 text-sm text-text-light">
                「手元にない」前提の買取は貸付仮装の典型。仕組みと危険性
              </p>
            </Link>
            <Link
              href="/articles/sakibarai-kaitori-tekihatsu/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">先払い買取の摘発事例と通報先</p>
              <p className="mt-1 text-sm text-text-light">
                警察庁公表の検挙事例と、何罪に問われるかの法的整理
              </p>
            </Link>
            <Link
              href="/articles/atobarai-genkinka/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">後払い現金化・ツケ払い現金化の違法性</p>
              <p className="mt-1 text-sm text-text-light">
                現金が先か後かが違うだけの兄弟スキーム。金融庁も注意喚起
              </p>
            </Link>
            <Link
              href="/articles/sakibarai-kaitori-gyosha/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">「優良・おすすめ業者」は存在するか</p>
              <p className="mt-1 text-sm text-text-light">
                当サイトが業者を紹介しない理由と、正規の代替
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg border border-border bg-section-bg p-6">
            <p className="mb-3 font-bold text-text-main">商品券・ギフト券の現金化サービスの検証記事</p>
            <p className="mb-4 text-sm leading-relaxed text-text-light">
              「商品券買取」をうたう次のサービスは、いずれも本記事で解説した「先払い買取（現金化）」の仕組みに当たります。それぞれの公式表記を確認したうえで、注意点を一次情報で検証しています。
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <Link href="/articles/sheep-ticket/" className="rounded-lg border border-border bg-white p-4 text-sm font-medium text-primary transition-shadow hover:shadow-md">シープチケット（SHEEP TICKET）の検証</Link>
              <Link href="/articles/turtle-ticket/" className="rounded-lg border border-border bg-white p-4 text-sm font-medium text-primary transition-shadow hover:shadow-md">タートルチケット（TURTLE TICKET）の検証</Link>
              <Link href="/articles/rese-ticket/" className="rounded-lg border border-border bg-white p-4 text-sm font-medium text-primary transition-shadow hover:shadow-md">リセチケットの検証</Link>
              <Link href="/articles/ticket-center/" className="rounded-lg border border-border bg-white p-4 text-sm font-medium text-primary transition-shadow hover:shadow-md">チケットセンターの検証</Link>
            </div>
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
