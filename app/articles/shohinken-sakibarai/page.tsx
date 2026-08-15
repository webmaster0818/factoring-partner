import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "商品券・ギフト券の先払い買取は違法？仕組みの危険性と対処法【2026年】",
  description:
    "「商品券 先払い買取」「先払い買取 商品券 違法」と検索している方へ。商品券・ギフト券を対象とする先払い買取も、商品売買を装って実質的な貸付を行うスキームの典型例として、金融庁・消費者庁・警察庁・財務局・日本貸金業協会が連名で注意喚起する形態にあたりうるものです。なぜ商品券が使われやすいのか、通常の金券ショップとの違い、「写真だけ」「番号を送るだけ」の危険性、すでに利用して支払えない場合の相談先を一次情報にもとづいて解説します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/shohinken-sakibarai/",
  },
  openGraph: {
    title:
      "商品券・ギフト券の先払い買取は違法？仕組みの危険性と対処法【2026年】",
    description:
      "商品券・ギフト券を対象とする先払い買取も、商品売買を装って実質的な貸付を行うスキームの典型例として公的機関が連名で注意喚起する形態にあたりうるものです。危険性と対処法を一次情報で解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/shohinken-sakibarai/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const reasons = [
  {
    title: "額面が明確で「査定」を装いやすい",
    description:
      "商品券・ギフト券は券面に金額が書かれているため、業者側は現物を細かく調べなくても「査定しました」という体裁を作りやすい商材です。ブランド品や家電のように状態の確認・真贋鑑定の手間が要らないぶん、査定というプロセスが形だけのものになりやすく、「買取」の名目で現金を渡すことが目的のスキームに使われやすい構造があります。",
  },
  {
    title: "写真・番号のやり取りだけで取引が進んでしまう",
    description:
      "「券面の写真を送るだけ」「ギフト券番号を伝えるだけ」で申し込みが完結する案内は、現物確認の省略を意味します。通常の買取であれば、商品の現物を確認したうえで売買が成立するのが原則です。現物を確認しないまま現金を先に渡す取引は、商品の受け渡しが形骸化しているサインであり、業者の関心が商品ではなく金銭のやり取りにあることを疑うべき形態です。",
  },
  {
    title: "電子ギフト券は番号だけで価値が移転してしまう",
    description:
      "電子ギフト券（コード型のギフト券）は、番号（コード）そのものが価値の実体です。番号を相手に伝えた時点で残高を使われうる状態になり、一般論として、一度渡した番号を取り戻すことは極めて困難です。「番号を送るだけで簡単」という手軽さは、裏を返せば、トラブルになったときに取り返しがつきにくいということでもあります。",
  },
];

const consultWindows = [
  {
    name: "消費者ホットライン",
    tel: "188（いやや）",
    note: "最寄りの消費生活センターにつながる全国共通番号。契約トラブル・生活資金の悩み全般で、まずどこに相談すべきか迷ったらここへ",
  },
  {
    name: "警察相談専用電話",
    tel: "#9110",
    note: "執拗な取り立て・脅迫めいた連絡など、犯罪被害につながるおそれがある場合",
  },
  {
    name: "財務局 多重債務相談窓口",
    tel: "0570-016811",
    note: "借金の返済・多重債務に関する相談",
  },
  {
    name: "日本貸金業協会 貸金業相談・紛争解決センター",
    tel: "0570-051051",
    note: "借金・ヤミ金融に関する相談",
  },
  {
    name: "法テラス（日本司法支援センター）サポートダイヤル",
    tel: "0570-078374",
    note: "弁護士・司法書士への相談を検討する場合の案内窓口",
  },
];

const faqs = [
  {
    question: "商品券・ギフト券の先払い買取は違法ですか？",
    answer:
      "対象が商品券・ギフト券であっても、「現金を先に受け取り、商品（金券）を後から送る」という構造は通常の先払い買取と同じです。金融庁・消費者庁・警察庁・財務局・日本貸金業協会は連名で、商品売買を装いつつ実態として金銭の授受を行う先払い買取現金化への注意喚起を出しており、取引の実態が貸付と判断される場合、業者側の行為は無登録の貸金業（ヤミ金融）にあたりうるものです。無登録で貸金業を営んだ場合、貸金業法により10年以下の懲役もしくは3,000万円以下の罰金（またはその両方）の対象となります。利用者側の責任の有無は個別の事情によるため断定できませんが、違法かどうかにかかわらず、トラブルに巻き込まれるおそれが大きい形態です。",
  },
  {
    question:
      "「商品券の写真を送るだけでOK」と案内されました。安全ですか？",
    answer:
      "現物を確認せず、写真のやり取りだけで「買取」が成立するのは、商品の受け渡しが形骸化しているサインです。通常の買取であれば、金券の現物と引き換えに代金が支払われます。現物確認を省略してでも現金を先に渡そうとする取引は、売買ではなく金銭の貸し借りが目的である可能性を疑うべき形態であり、公的機関が注意喚起する先払い買取現金化の典型的な特徴と重なります。安全とは言えません。",
  },
  {
    question: "電子ギフト券の番号をすでに送ってしまいました。取り戻せますか？",
    answer:
      "一般論として、電子ギフト券は番号（コード）そのものが価値の実体であり、番号を相手に伝えた時点で残高を使われうる状態になるため、取り戻すことは極めて困難です。ただし、その後の違約金・キャンセル料の請求など、これから起こりうるトラブルへの備えはできます。業者とのやり取りや振込記録は消さずに残したうえで、消費者ホットライン（188）や警察相談専用電話（#9110）に相談してください。",
  },
  {
    question:
      "商品券を送れず、違約金・キャンセル料を請求されています。どうすればいいですか？",
    answer:
      "一人で抱え込まず、支払う前に公的な窓口へ相談してください。消費者ホットライン（188）、警察相談専用電話（#9110）、財務局の多重債務相談窓口（0570-016811）、日本貸金業協会（0570-051051）、法テラス（0570-078374）が利用できます。業者とのやり取りや振込記録は証拠として残しておきましょう。対処の進め方は、当サイトの「先払い買取の代金が支払えない場合の対処法」で詳しく解説しています。",
  },
  {
    question: "金券ショップで商品券を売るのも危険ですか？",
    answer:
      "通常の金券ショップ・買取店での売却は、手元にある金券の現物と引き換えに代金を受け取る通常の売買であり、先払い買取とは構造が異なります。本記事で注意喚起しているのは、「現金が先・商品は後」という順序で、送れなかった場合の違約金・キャンセル料があらかじめ用意されている先払い買取の形態です。ただし、個別の取引の性質は実態により判断されるため、条件に不自然な点があると感じた場合は契約前に消費者ホットライン（188）へ相談してください。",
  },
  {
    question: "お金が必要なだけなのですが、正規の方法はありますか？",
    answer:
      "立場によって選択肢が異なります。事業者（法人・個人事業主・フリーランス）で売掛金（請求書）があるなら、民法にもとづく債権譲渡である正規のファクタリングで資金化できます。個人の生活資金の場合は、危険な現金化に頼る前に、消費者ホットライン（188）や市区町村の窓口で公的な支援制度・債務整理を含めた選択肢を確認してください。「商品券を後から送る約束で現金を受け取る」形の取引は、正規の選択肢には含まれません。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "商品券・ギフト券の先払い買取は違法？仕組みの危険性と対処法【2026年】",
  description:
    "商品券・ギフト券を対象とする先払い買取も、商品売買を装って実質的な貸付を行うスキームの典型例として公的機関が連名で注意喚起する形態にあたりうるものです。危険性と対処法を一次情報で解説。",
  datePublished: "2026-08-15",
  dateModified: "2026-08-15",
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
    "@id":
      "https://hyogo-shihoushoshi.jp/articles/shohinken-sakibarai/",
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
      name: "商品券・ギフト券の先払い買取は違法？仕組みの危険性と対処法",
      item: "https://hyogo-shihoushoshi.jp/articles/shohinken-sakibarai/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ShohinkenSakibaraiPage() {
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
          { label: "商品券・ギフト券の先払い買取は違法？" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            注意喚起・資金調達ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            商品券・ギフト券の先払い買取は違法？
            <br className="hidden md:block" />
            仕組みの危険性と対処法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            「商品券の先払い買取で現金を受け取れるのでは」と調べている方、すでに利用してしまい不安な方へ。結論からお伝えすると、商品券・ギフト券を対象とする先払い買取も、通常の先払い買取と同じく、商品売買を装って実質的な貸付を行うスキームの典型例として公的機関が連名で注意喚起する形態にあたりうるものです。なぜ商品券が使われやすいのか、通常の金券ショップとの違い、すでに利用してしまった場合の相談先を一次情報にもとづいて解説します。
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
                  商品券・ギフト券を対象とする「先払い買取」も、商品売買を装って実質的な貸付を行うスキームの典型例
                </strong>
                として、金融庁・消費者庁・警察庁・財務局・日本貸金業協会が連名で注意喚起する形態にあたりうるものです。対象が金券であっても構造は変わりません
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                通常の金券ショップは
                <strong className="text-text-main">
                  現物と引き換えに代金を支払う
                </strong>
                のに対し、先払い買取は
                <strong className="text-text-main">
                  現金が先・商品は後、送れなければ違約金・キャンセル料
                </strong>
                という構造です。受け取った額より多くを支払う結果になり得ます
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                すでに利用して支払えず困っている場合は、支払う前に
                <strong className="text-text-main">
                  消費者ホットライン（188）などの公的窓口へ相談
                </strong>
                してください。利用してしまったこと自体を責められる場ではありません
              </span>
            </li>
          </ul>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-8 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#conclusion" className="hover:underline">
                1. 結論｜商品券が対象でも「先払い買取」の構造は同じ
              </a>
            </li>
            <li>
              <a href="#why" className="hover:underline">
                2. なぜ商品券・ギフト券が使われやすいのか
              </a>
            </li>
            <li>
              <a href="#difference" className="hover:underline">
                3. 通常の金券ショップ・買取店との違い
              </a>
            </li>
            <li>
              <a href="#illegal" className="hover:underline">
                4. 「違法ですか？」への回答
              </a>
            </li>
            <li>
              <a href="#photo" className="hover:underline">
                5. 「写真だけでOK」「番号を送るだけ」の危険性
              </a>
            </li>
            <li>
              <a href="#cannot-pay" className="hover:underline">
                6. すでに利用して支払えない場合の対処
              </a>
            </li>
            <li>
              <a href="#expert" className="hover:underline">
                7. 弁護士・司法書士への相談
              </a>
            </li>
            <li>
              <a href="#alternatives" className="hover:underline">
                8. お金が必要なときの正規の選択肢
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                9. よくある質問
              </a>
            </li>
            <li>
              <a href="#consult" className="hover:underline">
                10. 相談窓口一覧
              </a>
            </li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。なお、当サイトが先払い買取現金化の利用を推奨することはなく、先払い買取業者との提携・紹介も一切行っていません。また、本記事は一般的な情報提供であり、個別の事案に対する法的助言ではありません。掲載内容は調査時点のものであり、最新情報は各公式サイト・公的機関の発表をご確認ください。
        </p>

        {/* ── 結論 ─── */}
        <section id="conclusion" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            結論｜商品券が対象でも「先払い買取」の構造は同じ
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            先払い買取とは、業者が「買取代金」名目の現金を先に支払い、利用者が商品を後から送るという順序の取引です。対象がブランド品でもゲーム機でも、そして
            <strong className="text-text-main">
              商品券・ギフト券であっても、「現金が先・商品は後」という構造は変わりません
            </strong>
            。そして商品を送れなかった場合には、契約解除とともに違約金・キャンセル料名目の金銭を請求される形態が典型とされています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            このように商品売買を装って金銭を渡す形態は、
            <strong className="text-text-main">
              実質的な貸付を行うスキームの典型例として、金融庁・消費者庁・警察庁・財務局・日本貸金業協会の5者が連名で注意喚起している「先払い買取」現金化
            </strong>
            にあたりうるものです。受け取った「買取代金」より多くの金銭を違約金・キャンセル料として支払うなら、それは経済的には借金の元本と利息に相当する構造であり、資金不足の解決にはなりません。
          </p>
          <p className="leading-relaxed text-text-light">
            つまり「商品券なら大丈夫では」という期待に対する答えは、「
            <strong className="text-text-main">
              対象が金券に変わっても、注意喚起されているスキームの危険性はそのまま残る
            </strong>
            」です。先払い買取のスキーム全体像は、ピラー記事の
            <Link
              href="/articles/sakibarai-kaitori/"
              className="font-medium text-primary underline"
            >
              先払い買取とは？違法性と危険な仕組み
            </Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* ── なぜ商品券が使われやすいのか ─── */}
        <section id="why" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            なぜ商品券・ギフト券が使われやすいのか
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            先払い買取の対象として商品券・ギフト券が案内されやすいのには、一般論として次のような構造上の理由が考えられます。いずれも「取引が手軽に見える」ことと「売買の実体が薄くなりやすい」ことの裏表です。
          </p>
          <div className="space-y-6">
            {reasons.map((item, index) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 leading-relaxed text-text-light">
            なお、そもそも売る商品券が手元にない状態で「手元になくても申し込める」と案内される場合は、売買の実体がさらに薄い形態です。詳しくは
            <Link
              href="/articles/sakibarai-kaitori-temoto-ni-nai/"
              className="font-medium text-primary underline"
            >
              商品が手元にないのに先払い買取は使える？
            </Link>
            で解説しています。
          </p>
        </section>

        {/* ── 通常の金券ショップとの違い ─── */}
        <section id="difference" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            通常の金券ショップ・買取店との違い
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「商品券を売ってお金にする」こと自体は、通常の金券ショップ・買取店でも行われている一般的な取引です。問題は取引の順序と、送れなかった場合の仕組みにあります。両者を比べると、違いがはっきりします。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">
                    比較項目
                  </th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">
                    通常の金券ショップ・買取店
                  </th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">
                    先払い買取
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                    代金の支払い
                  </td>
                  <td className="px-4 py-3 text-text-light">
                    金券の現物と引き換えに代金を受け取る
                  </td>
                  <td className="px-4 py-3 text-text-light">
                    現金が先に振り込まれ、金券は後から送る
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                    現物の確認
                  </td>
                  <td className="px-4 py-3 text-text-light">
                    現物を確認・査定してから売買が成立する
                  </td>
                  <td className="px-4 py-3 text-text-light">
                    写真・番号のやり取りだけで進み、現物確認が形骸化しやすい
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                    送れなかった場合
                  </td>
                  <td className="px-4 py-3 text-text-light">
                    そもそも現物がなければ取引が始まらない
                  </td>
                  <td className="px-4 py-3 text-text-light">
                    契約解除となり、違約金・キャンセル料名目の金銭を請求されうる
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-relaxed text-text-light">
            通常の買取が「商品の対価」の受け取りで完結するのに対し、先払い買取は
            <strong className="text-text-main">
              「先に受け取った現金＋上乗せの金銭を後から返す」展開になりうる構造
            </strong>
            を最初から含んでいます。なお、商品の代金を後払いにして現金を得る「後払い現金化」も、商品を介して金銭をやり取りする類似の形態です。詳しくは
            <Link
              href="/articles/atobarai-genkinka/"
              className="font-medium text-primary underline"
            >
              後払い現金化の仕組みと危険性
            </Link>
            で解説しています。
          </p>
        </section>

        {/* ── 違法ですか？への回答 ─── */}
        <section id="illegal" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            「違法ですか？」への回答
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            「商品券 先払い買取 違法」と検索している方が知りたいのは、業者側と利用者側それぞれの位置づけだと思います。分けて整理します。
          </p>
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-6">
            <p className="mb-2 font-bold text-red-700">
              業者側｜実態が貸付なら「無登録貸金業」にあたりうる
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              取引の実態が貸付と判断される場合、貸金業登録を受けずにこれを業として行うことは貸金業法上の無登録営業にあたりうる行為であり、
              <strong className="text-text-main">
                10年以下の懲役もしくは3,000万円以下の罰金（またはその両方）
              </strong>
              の対象となります。金融庁・消費者庁・警察庁・財務局・日本貸金業協会の連名注意喚起は、特定の業者ではなく、商品売買を装って金銭を渡すスキームそのものを警告の対象としています。
            </p>
          </div>
          <p className="mb-4 leading-relaxed text-text-light">
            一方、
            <strong className="text-text-main">
              利用者側の責任の有無は個別の事情によるため、当サイトが断定することはできません
            </strong>
            。公的機関の注意喚起で問題とされているのは主に業者側の行為です。ただし、利用者側も高額な違約金の請求、個人情報の提出、執拗な連絡といったトラブルに巻き込まれるおそれが大きいため、「違法かどうか」にかかわらず、この形態の取引に関わらないことを強くおすすめします。
          </p>
          <p className="leading-relaxed text-text-light">
            なお、「優良」「安心」をうたう業者であればリスクが解消されるわけではありません。詳しくは
            <Link
              href="/articles/sakibarai-kaitori-gyosha/"
              className="font-medium text-primary underline"
            >
              先払い買取に「優良・おすすめ業者」は存在するか
            </Link>
            で解説しています。
          </p>
        </section>

        {/* ── 写真だけ・番号だけの危険性 ─── */}
        <section id="photo" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            「写真だけでOK」「番号を送るだけ」の危険性
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            商品券の先払い買取では、「券面の写真を送るだけで査定完了」「ギフト券番号を伝えるだけ」といった手軽さが強調されがちです。しかしこの手軽さは、
            <strong className="text-text-main">
              商品の現物確認という、売買の根幹にあたるプロセスの省略
            </strong>
            を意味します。現物を確認しないまま現金を先に渡す取引は、業者の関心が商品ではなく金銭のやり取りにあることを示すサインとして受け止めるべきものです（個別の取引の性質は実態により判断されるため、一般論としての説明です）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特に注意が必要なのが電子ギフト券です。コード型のギフト券は
            <strong className="text-text-main">
              番号（コード）そのものが価値の実体であり、番号を相手に伝えた時点で残高を使われうる状態になります
            </strong>
            。一般論として、一度渡した番号を取り戻すことは極めて困難です。「査定のために番号を教えてほしい」と言われて番号を送った後、「査定額に納得できなければキャンセルできる」はずが、すでに残高が使われていた——といった展開になっても、取り返しがつきにくいのがこの形態の怖さです。
          </p>
          <p className="leading-relaxed text-text-light">
            すでに番号を送ってしまった場合も、自分を責める必要はありません。業者とのやり取りや振込記録を残したうえで、後述の相談窓口へ連絡してください。
          </p>
        </section>

        {/* ── すでに利用して支払えない場合 ─── */}
        <section id="cannot-pay" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            すでに利用して支払えない場合の対処
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            すでに商品券の先払い買取を利用してしまい、金券を送れない・違約金やキャンセル料を請求されている——という場合、最も避けたいのは
            <strong className="text-text-main">
              別の先払い買取や後払い現金化で支払いをしのごうとして、負担を多重化させること
            </strong>
            です。受け取った額より多くを支払う構造の取引を重ねれば、状況は悪化するおそれが大きくなります。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            支払う前に、まず公的な窓口へ相談してください。業者とのやり取り（メッセージ・契約画面のスクリーンショット）や振込記録は、証拠として消さずに残しておきましょう。具体的な対処の進め方・相談時に伝えることの整理は、姉妹記事の
            <Link
              href="/articles/sakibarai-kaitori-shiharaenai/"
              className="font-medium text-primary underline"
            >
              先払い買取の代金が支払えない場合の対処法
            </Link>
            で詳しく解説しています。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">
                    相談窓口
                  </th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">
                    電話番号
                  </th>
                  <th className="px-4 py-3 font-semibold">こんなときに</th>
                </tr>
              </thead>
              <tbody>
                {consultWindows.map((w) => (
                  <tr key={w.name} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                      {w.name}
                    </td>
                    <td className="px-4 py-3 font-bold text-primary whitespace-nowrap">
                      {w.tel}
                    </td>
                    <td className="px-4 py-3 text-text-light">{w.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 弁護士・司法書士への相談 ─── */}
        <section id="expert" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            弁護士・司法書士への相談
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            違約金・キャンセル料の請求への対応、執拗な連絡への対処、借金全体の整理を含めた解決を考える場合は、
            <strong className="text-text-main">
              弁護士・司法書士といった法律専門家への相談
            </strong>
            が選択肢になります。取引の実態に問題があるスキームかどうかの見立てや、業者への対応を本人に代わって進められるかどうかは、個別の事情によるため、専門家に直接確認するのが確実です。
          </p>
          <p className="leading-relaxed text-text-light">
            どこに相談すればよいか分からない場合は、
            <strong className="text-text-main">
              法テラス（日本司法支援センター）のサポートダイヤル（0570-078374）
            </strong>
            が入口になります。問い合わせ内容に応じて、法制度の情報や相談窓口の案内を受けられます。経済的な状況によって利用できる制度の有無や条件は個別に異なるため、まずは電話で現在の状況を伝えてみてください。
          </p>
        </section>

        {/* ── 正規の選択肢 ─── */}
        <section id="alternatives" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            お金が必要なときの正規の選択肢
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            商品券の先払い買取を調べているということは、いま現金が必要な状況のはずです。その必要性自体は否定しません。だからこそ、危険なスキームではなく正規の選択肢を確認してください。立場によって取れる手段が異なります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                事業者（法人・個人事業主・フリーランス）｜売掛金があるなら正規のファクタリング
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                事業で発行した請求書（売掛金）があるなら、それを売却して資金化する
                <strong className="text-text-main">
                  ファクタリング（民法にもとづく債権譲渡）
                </strong>
                という正規の手段があります。商品売買を装う現金化とは異なり、実在する売掛債権を対象とする取引です。先払い買取との違い・見分け方を含めたスキーム全体の整理は、
                <Link
                  href="/articles/sakibarai-kaitori/"
                  className="font-medium text-primary underline"
                >
                  先払い買取とは？違法性と危険な仕組み
                </Link>
                で解説しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                個人（生活資金）｜まず公的窓口で支援制度を確認する
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                個人の生活資金にはファクタリングは使えません（事業の売掛債権が対象のため）。危険な現金化に頼る前に、
                <strong className="text-text-main">
                  消費者ホットライン（188）や市区町村の相談窓口
                </strong>
                で、公的な支援制度や債務整理を含めた選択肢を確認してください。借金の返済に追われている場合は、財務局の多重債務相談窓口（0570-016811）も利用できます。
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

        {/* ── 相談窓口 ─── */}
        <section id="consult" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            相談窓口一覧
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            商品券・ギフト券の先払い買取に関して不安がある場合、すでに申し込んでしまった場合は、一人で抱え込まず次の窓口へ相談してください。いずれも公的機関・公的団体の窓口です。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">
                    相談窓口
                  </th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">
                    電話番号
                  </th>
                  <th className="px-4 py-3 font-semibold">こんなときに</th>
                </tr>
              </thead>
              <tbody>
                {consultWindows.map((w) => (
                  <tr key={w.name} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                      {w.name}
                    </td>
                    <td className="px-4 py-3 font-bold text-primary whitespace-nowrap">
                      {w.tel}
                    </td>
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
            <p className="mb-3 font-bold text-text-main">
              この記事の一次情報（公的機関の公表資料）
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-text-light">
              <li>
                ・警察庁・金融庁・消費者庁・財務局・日本貸金業協会 連名注意喚起資料「いわゆる『先払い買取』現金化に要注意！」
                <a
                  href="https://www.npa.go.jp/bureau/safetylife/keizai/sakibaraikaitori.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 break-all text-primary underline"
                >
                  npa.go.jp（PDF）
                </a>
              </li>
            </ul>
            <p className="mt-3 text-xs text-text-light">
              リンク先への到達を確認のうえ掲載しています。制度・注意喚起の内容は変更される場合があるため、最新情報は各機関の公式サイトをご確認ください。本記事は一般的な情報提供であり、個別の事案に対する法的助言ではありません。
            </p>
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
              <p className="font-bold text-primary">
                先払い買取とは？違法性と危険な仕組み
              </p>
              <p className="mt-1 text-sm text-text-light">
                スキームの全体像・危険サイン・相談窓口を一次情報で解説したメイン記事
              </p>
            </Link>
            <Link
              href="/articles/sakibarai-kaitori-shiharaenai/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                先払い買取の代金が支払えない場合の対処法
              </p>
              <p className="mt-1 text-sm text-text-light">
                商品を送れず違約金を請求されて困っている場合の相談先と進め方
              </p>
            </Link>
            <Link
              href="/articles/sakibarai-kaitori-temoto-ni-nai/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                商品が手元にないのに先払い買取は使える？
              </p>
              <p className="mt-1 text-sm text-text-light">
                手元にない商品で申し込める取引がなぜ危険なのか、構造から解説
              </p>
            </Link>
            <Link
              href="/articles/sakibarai-kaitori-gyosha/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                先払い買取に「優良・おすすめ業者」は存在するか
              </p>
              <p className="mt-1 text-sm text-text-light">
                「優良」表示ではスキームのリスクが解消されない理由
              </p>
            </Link>
            <Link
              href="/articles/atobarai-genkinka/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                後払い現金化の仕組みと危険性
              </p>
              <p className="mt-1 text-sm text-text-light">
                商品の代金を後払いにして現金を得る類似スキームの注意点
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            不安なときは、契約・支払いの前にまず相談を
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            商品券・ギフト券の先払い買取は、公的機関が連名で注意喚起するスキームにあたりうる形態です。迷ったら消費者ホットライン（188）へ。スキームの全体像と危険サインは、メイン記事で確認できます。
          </p>
          <Link href="/articles/sakibarai-kaitori/" className="btn-cta mt-6 text-base">
            先払い買取の仕組みと危険性を詳しく見る
          </Link>
        </section>
      </div>
    </>
  );
}
