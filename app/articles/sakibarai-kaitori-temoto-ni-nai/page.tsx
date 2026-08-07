import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "商品が手元にないのに先払い買取は使える？仕組みの危険性を解説【2026年】",
  description:
    "「先払い買取 手元にない」と検索している方へ。商品が手元にないのに現金だけを先に受け取れるという取引は、売買の実体を欠き、貸付を仮装したスキームの典型例として金融庁・消費者庁・警察庁・財務局・日本貸金業協会が連名で注意喚起する形態にあたりうるものです。なぜ手元にない商品で申し込めてしまうのか、起こりうるトラブル、公的機関の注意喚起の内容、お金が必要なときの正規の選択肢を一次情報にもとづいて解説します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-temoto-ni-nai/",
  },
  openGraph: {
    title:
      "商品が手元にないのに先払い買取は使える？仕組みの危険性を解説【2026年】",
    description:
      "商品が手元にないのに現金だけ先に受け取れる取引は、貸付を仮装したスキームの典型例として公的機関が注意喚起する形態にあたりうるものです。危険性と正規の選択肢を一次情報で解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-temoto-ni-nai/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const troubles = [
  {
    title: "商品を送らない（送れない）場合の違約金・キャンセル料請求",
    description:
      "先払い買取は、商品を発送しなかった場合に契約解除（キャンセル）となり、違約金やキャンセル料名目の金銭を請求される形態が典型とされています。そもそも手元に商品がない状態で申し込めば、期日までに商品を送れず、受け取った代金の返還に加えて上乗せの金銭を求められる展開になりやすい構造です。一般論として、受け取った額より多くを支払う結果になり得ます。",
  },
  {
    title: "実質的な高コスト（受け取った額より多くを返す構造）",
    description:
      "「買取代金」として受け取る額に対し、違約金・キャンセル料を含めて支払う額が上回るなら、それは経済的には借金の元本と利息に相当する構造です。利用を繰り返すほど負担が膨らみ、かえって資金繰り・生活が悪化するおそれがあります。目先の現金が得られても、資金不足の解決にはなりません。",
  },
  {
    title: "個人情報を提出することのリスク",
    description:
      "申し込みの過程で、本人確認書類・口座情報・連絡先などの個人情報を業者に提出することになります。取引の実態に問題があるスキームに個人情報を渡すことは、その後の執拗な連絡や情報の悪用といったトラブルにつながるおそれがあります。一度提出した情報は取り戻せません。",
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
    question: "商品が手元になくても、本当にお金を受け取れるのですか？",
    answer:
      "「手元にない商品でも申し込める」「画像だけでよい」とうたう業者は存在します。しかし、売る商品がないのに現金だけ先に受け取れるという時点で、その取引は商品売買の実体を欠いています。金融庁・消費者庁・警察庁・財務局・日本貸金業協会は連名で、商品売買を装いつつ実態として金銭の授受を行う先払い買取現金化への注意喚起を出しており、実態が貸付と判断される場合には無登録の貸金業（ヤミ金融）にあたりうる形態です。「受け取れるかどうか」ではなく「受け取った後に何を請求されるか」を考える必要があります。",
  },
  {
    question: "手元にない商品で申し込むと、利用者側も違法になりますか？",
    answer:
      "利用者の責任の有無は個別の事情によるため、当サイトが断定することはできません。公的機関の注意喚起で問題とされているのは、主に業者側の行為（実態が貸付であれば無登録貸金業にあたりうること）です。ただし、利用者側も高額な違約金の請求や個人情報の提出といったトラブルに巻き込まれるおそれが大きいため、「違法かどうか」にかかわらず、この形態の取引に関わらないことを強くおすすめします。不安がある場合は消費者ホットライン（188）に相談してください。",
  },
  {
    question: "「商品画像を送るだけでOK」と案内されました。問題ありませんか？",
    answer:
      "商品の現物を確認せず、画像のやり取りだけで「買取」が成立するのは、商品の受け渡しが形骸化しているサインです。通常の買取であれば、商品の状態を確認したうえで査定・売買が行われます。現物の確認を省略してでも現金を先に渡そうとする取引は、売買ではなく金銭の貸し借りが目的である可能性を疑うべき形態であり、公的機関が注意喚起する先払い買取現金化の典型的な特徴と重なります。",
  },
  {
    question:
      "すでに申し込んでしまい、商品を送れずに違約金を請求されています。",
    answer:
      "一人で抱え込まず、支払う前に公的な窓口へ相談してください。消費者ホットライン（188）、警察相談専用電話（#9110）、財務局の多重債務相談窓口（0570-016811）、日本貸金業協会（0570-051051）、法テラス（0570-078374）が利用できます。業者とのやり取りや振込記録は証拠として消さずに残しておきましょう。対処の進め方は、当サイトの「先払い買取の代金が支払えない場合の対処法」で詳しく解説しています。",
  },
  {
    question: "お金が必要なだけなのですが、正規の方法はありますか？",
    answer:
      "立場によって選択肢が異なります。事業者（法人・個人事業主・フリーランス）で売掛金（請求書）があるなら、民法にもとづく債権譲渡である正規のファクタリングで資金化できます。個人の生活資金の場合は、危険な現金化に頼る前に、消費者ホットライン（188）や市区町村の窓口で公的な支援制度・債務整理を含めた選択肢を確認してください。「商品が手元にないのに現金を受け取る」形の取引は、正規の選択肢には含まれません。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "商品が手元にないのに先払い買取は使える？仕組みの危険性を解説【2026年】",
  description:
    "商品が手元にないのに現金だけ先に受け取れる取引は、貸付を仮装したスキームの典型例として公的機関が注意喚起する形態にあたりうるものです。危険性と正規の選択肢を一次情報で解説。",
  datePublished: "2026-08-07",
  dateModified: "2026-08-07",
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
      "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-temoto-ni-nai/",
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
      name: "商品が手元にないのに先払い買取は使える？仕組みの危険性を解説",
      item: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-temoto-ni-nai/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SakibaraiKaitoriTemotoNiNaiPage() {
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
          { label: "商品が手元にないのに先払い買取は使える？" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            注意喚起・資金調達ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            商品が手元にないのに
            <br className="hidden md:block" />
            先払い買取は使える？仕組みの危険性
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            「売る商品が手元にないけれど、先払い買取なら現金を受け取れるのでは」と調べている方へ。結論からお伝えすると、商品がないのに現金だけ先に受け取れるという取引は、売買の体をなしておらず、貸付を仮装したスキームの典型例として公的機関が注意喚起する形態にあたりうるものです。仕組みと危険性、正規の選択肢を一次情報にもとづいて解説します。
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
                  「商品が手元にないのに現金だけ先に受け取れる」という取引は、商品売買の体をなしていません
                </strong>
                。貸付を仮装したスキームの典型例として、金融庁・消費者庁・警察庁・財務局・日本貸金業協会が連名で注意喚起する形態にあたりうるものです
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                手元にない商品で申し込めば、期日までに商品を送れず、
                <strong className="text-text-main">
                  違約金・キャンセル料名目で受け取った額より多くを請求される
                </strong>
                展開になりやすい構造です。目先の現金が得られても、資金不足の解決にはなりません
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                お金が必要なら、事業者は
                <strong className="text-text-main">
                  売掛金を正規のファクタリングで資金化する
                </strong>
                、個人は
                <strong className="text-text-main">
                  消費者ホットライン（188）など公的窓口で支援制度を確認する
                </strong>
                のが先です
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
                1. 結論｜「手元にないのに現金を受け取る」は買取の体をなしていない
              </a>
            </li>
            <li>
              <a href="#why" className="hover:underline">
                2. なぜ「手元にない」商品でも申し込めてしまうのか
              </a>
            </li>
            <li>
              <a href="#trouble" className="hover:underline">
                3. 起こりうるトラブル
              </a>
            </li>
            <li>
              <a href="#warning" className="hover:underline">
                4. 公的機関の注意喚起｜5者連名の警告と検挙事例
              </a>
            </li>
            <li>
              <a href="#alternatives" className="hover:underline">
                5. お金が必要なときの正規の選択肢
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問
              </a>
            </li>
            <li>
              <a href="#consult" className="hover:underline">
                7. 相談窓口一覧
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
            結論｜「手元にないのに現金を受け取る」は買取の体をなしていない
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            通常の買取は、「売りたい商品がある人」が商品を渡し、その対価として代金を受け取る取引です。ところが「商品が手元にないのに現金だけ先に受け取れる」となると、
            <strong className="text-text-main">
              渡す商品が存在しない時点で、商品売買という取引の実体がありません
            </strong>
            。残るのは「業者からお金を受け取り、後からより多くのお金を返す」という金銭のやり取りだけです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            このように商品売買を装って金銭を渡す形態は、
            <strong className="text-text-main">
              貸付を仮装したスキームの典型例として、金融庁・消費者庁・警察庁・財務局・日本貸金業協会の5者が連名で注意喚起している「先払い買取」現金化
            </strong>
            にあたりうるものです。実態が貸付と判断される場合、業者の行為は貸金業法上の無登録営業（10年以下の懲役もしくは3,000万円以下の罰金またはその併科）にあたりうる、違法なヤミ金融です。
          </p>
          <p className="leading-relaxed text-text-light">
            つまり「手元にない商品でも使えるか？」という問いへの答えは、「申し込めてしまう場合はあるが、
            <strong className="text-text-main">
              それは買取ではなく、危険な借金の入口である可能性が高い
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

        {/* ── なぜ申し込めてしまうのか ─── */}
        <section id="why" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            なぜ「手元にない」商品でも申し込めてしまうのか
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            先払い買取の最大の特徴は、その名のとおり
            <strong className="text-text-main">
              商品が業者に到着する前に「買取代金」が支払われる
            </strong>
            ことです。通常の買取（店頭買取・宅配買取）では、業者が商品の現物を査定してから代金を支払うため、手元に商品がなければそもそも取引が始まりません。支払いの順序が逆になっているからこそ、「商品がまだ手元にない」状態でも申し込みが成立してしまう余地が生まれます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            さらに、この形態の取引では、
            <strong className="text-text-main">
              商品の受け渡しそのものが形骸化しうる
            </strong>
            という構造上の問題があります。現物を確認せず画像のやり取りだけで「買取」が成立する、商品が送られてこないことを織り込んだうえで違約金・キャンセル料の条件があらかじめ用意されている——といった形になっている場合、業者の関心は商品ではなく、
            <strong className="text-text-main">
              現金を渡した後に回収する金銭
            </strong>
            にあると考えられます（個別の取引の性質は実態により判断されるため、一般論としての説明です）。
          </p>
          <p className="leading-relaxed text-text-light">
            「手元にない商品でもOK」という案内は、利用者への親切ではなく、
            <strong className="text-text-main">
              商品の存在がそもそも重要でない取引である
            </strong>
            ことを示すサインとして受け止めるべきものです。
          </p>
        </section>

        {/* ── 起こりうるトラブル ─── */}
        <section id="trouble" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            起こりうるトラブル
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            商品が手元にない状態でこの種の取引に申し込んだ場合、一般論として次のようなトラブルが起こり得ます。
          </p>
          <div className="space-y-6">
            {troubles.map((item, index) => (
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
            すでに申し込んでしまい、商品を送れずに違約金・キャンセル料を請求されている場合の対処は、姉妹記事の
            <Link
              href="/articles/sakibarai-kaitori-shiharaenai/"
              className="font-medium text-primary underline"
            >
              先払い買取の代金が支払えない場合の対処法
            </Link>
            で詳しく解説しています。支払う前に、まず相談窓口へ連絡してください。
          </p>
        </section>

        {/* ── 公的機関の注意喚起 ─── */}
        <section id="warning" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            公的機関の注意喚起｜5者連名の警告と検挙事例
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            先払い買取現金化については、
            <strong className="text-text-main">
              金融庁・消費者庁・警察庁・財務局・日本貸金業協会の5者が連名で注意喚起
            </strong>
            を出しています。特定の業者ではなく、商品売買を装って金銭を渡すスキームそのものが警告の対象です。
          </p>
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-6">
            <p className="mb-2 font-bold text-red-700">
              実態が貸付なら「無登録貸金業」にあたりうる
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              取引の実態が貸付と判断される場合、貸金業登録を受けずにこれを業として行うことは貸金業法上の無登録営業にあたりうる行為であり、
              <strong className="text-text-main">
                10年以下の懲役もしくは3,000万円以下の罰金またはその併科
              </strong>
              の対象となります。また、警察庁の生活経済事犯統計では、先払い買取を仮装した無登録貸金業について
              <strong className="text-text-main">全国初の検挙事例</strong>
              が公表されており、この形態が実際に摘発の対象となっていることが示されています。
            </p>
          </div>
          <p className="leading-relaxed text-text-light">
            なお、商品の代金を後払いにして現金を得る「後払い現金化」も、商品を介して金銭をやり取りする類似の形態です。詳しくは
            <Link
              href="/articles/atobarai-genkinka/"
              className="font-medium text-primary underline"
            >
              後払い現金化の仕組みと危険性
            </Link>
            で解説しています。
          </p>
        </section>

        {/* ── 正規の選択肢 ─── */}
        <section id="alternatives" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            お金が必要なときの正規の選択肢
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「手元に売る物がないのに現金化を調べている」ということは、いま現金が必要な状況のはずです。その必要性自体は否定しません。だからこそ、危険なスキームではなく正規の選択肢を確認してください。立場によって取れる手段が異なります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                事業者（法人・個人事業主・フリーランス）｜売掛金があるなら正規のファクタリング
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                事業で発行した請求書（売掛金）があるなら、それを売却して資金化する
                <strong className="text-text-main">
                  ファクタリング（民法にもとづく債権譲渡・貸金業登録不要の合法取引）
                </strong>
                が使えます。借入ではないため負債にならず、最短即日の資金化も可能です。
                <Link
                  href="/ranking/"
                  className="font-medium text-primary underline"
                >
                  おすすめファクタリング会社ランキング
                </Link>
                で手数料を公式確認した各社を比較できるほか、
                <Link
                  href="/diagnosis/"
                  className="font-medium text-primary underline"
                >
                  無料診断（7つの質問・30秒）
                </Link>
                で自分に合う1社を絞り込めます。
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

        {/* ── 関連ツール・データ ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">
              事業者の方へ｜正規の資金調達に使えるツール・データ
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li>
                <Link
                  href="/articles/company-directory/"
                  className="font-medium text-primary underline"
                >
                  審査済み業者データベース（49社+）
                </Link>
                ｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。
              </li>
              <li>
                <Link
                  href="/diagnosis/"
                  className="font-medium text-primary underline"
                >
                  無料診断（7つの質問・30秒）
                </Link>
                ｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。
              </li>
              <li>
                <Link
                  href="/simulator/"
                  className="font-medium text-primary underline"
                >
                  手数料シミュレーター
                </Link>
                ｜売掛金額から手数料・入金額の目安を計算できます。
              </li>
              <li>
                <Link
                  href="/ranking/"
                  className="font-medium text-primary underline"
                >
                  おすすめファクタリング会社ランキング
                </Link>
                ｜編集部が厳選した順位で比較できます。
              </li>
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

        {/* ── 相談窓口 ─── */}
        <section id="consult" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            相談窓口一覧
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            先払い買取に関して不安がある場合、すでに申し込んでしまった場合は、一人で抱え込まず次の窓口へ相談してください。いずれも公的機関・公的団体の窓口です。
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
              <li>
                ・警察庁「生活経済事犯の検挙状況等について（令和6年）」（先払い買取を仮装した無登録貸金業の全国初の検挙事例を掲載）
                <a
                  href="https://www.npa.go.jp/publications/statistics/safetylife/R06_nennpou_teisei.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 break-all text-primary underline"
                >
                  npa.go.jp（PDF）
                </a>
              </li>
            </ul>
            <p className="mt-3 text-xs text-text-light">
              いずれも2026年8月にリンク先への到達を確認。制度・注意喚起の内容は変更される場合があるため、最新情報は各機関の公式サイトをご確認ください。本記事は一般的な情報提供であり、個別の事案に対する法的助言ではありません。
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
                スキームの3ステップ・危険サイン・相談窓口を一次情報で解説したメイン記事
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
            事業の売掛金があるなら、危険な現金化に頼る必要はありません
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
