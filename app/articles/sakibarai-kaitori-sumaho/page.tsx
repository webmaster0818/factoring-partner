import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "スマホ・iPhoneの先払い買取は危険？仕組みとトラブル・対処法を解説【2026年】",
  description:
    "「先払い買取 スマホ」「iPhone 先払い買取」と検索している方へ。手持ちのスマホ・iPhoneを対象に「使いながらでOK」「送らなくてOK」とうたう先払い買取は、商品売買を装った実質貸付スキームの典型例として金融庁・消費者庁・警察庁・財務局・日本貸金業協会が連名で注意喚起する形態にあたりうるものです。なぜスマホが対象にされやすいのか、起こりうるトラブル、分割払い中の端末の注意点、すでに利用してしまった場合の相談先を一次情報にもとづいて解説します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-sumaho/",
  },
  openGraph: {
    title:
      "スマホ・iPhoneの先払い買取は危険？仕組みとトラブル・対処法を解説【2026年】",
    description:
      "手持ちのスマホ・iPhoneを対象に「使いながらでOK」「送らなくてOK」とうたう先払い買取は、貸付を仮装したスキームの典型例として公的機関が注意喚起する形態にあたりうるものです。危険性と対処法を一次情報で解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-sumaho/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const troubles = [
  {
    title: "期日までに端末を送らない場合の違約金・キャンセル料請求",
    description:
      "先払い買取は、商品を発送しなかった場合に契約解除（キャンセル）となり、違約金やキャンセル料名目の金銭を請求される形態が典型とされています。「使いながらでOK」と案内されて申し込んでも、契約上は期日までの発送義務が設定されており、送らなければ受け取った代金の返還に加えて上乗せの金銭を求められる展開になりやすい構造です。",
  },
  {
    title: "受け取った額より多くを支払う構造",
    description:
      "「買取代金」として受け取る額に対し、違約金・キャンセル料を含めて支払う額が上回るなら、それは経済的には借金の元本と利息に相当する構造です。利用を繰り返すほど負担が膨らみ、かえって生活が苦しくなるおそれがあります。目先の現金が得られても、資金不足の解決にはなりません。",
  },
  {
    title: "本人確認書類・口座情報など個人情報を提出するリスク",
    description:
      "申し込みの過程で、本人確認書類・口座情報・連絡先などの個人情報を業者に提出することになります。取引の実態に問題があるスキームに個人情報を渡すことは、その後の執拗な連絡や情報の悪用といったトラブルにつながるおそれがあります。一度提出した情報は取り戻せません。",
  },
  {
    title: "端末内のデータ・アカウント情報が絡む固有のリスク",
    description:
      "スマホは連絡先・写真・各種アプリのログイン情報など、生活のほぼすべての情報が入った機器です。一般論として、端末の受け渡しやアカウントの取り扱いが絡む取引では、データの消去・引き継ぎ・アカウントのロックなどをめぐって通常の物品よりトラブルの論点が増えます。実態に問題のあるスキームでこうした情報が絡むこと自体が、他の商品にはないスマホ固有のリスクです。",
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
    question: "iPhoneでもAndroidでも同じですか？",
    answer:
      "機種による違いはありません。問題とされているのは端末そのものではなく、「商品売買を装って現金を先に渡し、後からより多くの金銭を回収する」というスキームの構造だからです。金融庁・消費者庁・警察庁・財務局・日本貸金業協会は連名で、商品売買を装いつつ実態として金銭の授受を行う先払い買取現金化への注意喚起を出しており、対象がiPhoneでも他のスマホでも、この形態にあたりうる点は変わりません。実態が貸付と判断される場合、無登録で貸金業を営む行為は貸金業法により10年以下の懲役もしくは3,000万円以下の罰金（またはその両方）の対象となります。",
  },
  {
    question: "「スマホを送らなくていい」「使いながらでOK」と言われました。",
    answer:
      "通常の買取は、商品を渡して対価を受け取る取引です。商品を渡さないのに現金だけ受け取れるなら、その取引には売買の実体がなく、残るのは「業者からお金を受け取り、後からより多くのお金を返す」という金銭のやり取りだけです。「送らなくていい」という案内は利用者への親切ではなく、商品の受け渡しが最初から重要でない取引であることを示すサインとして受け止めるべきものです。公的機関が注意喚起する先払い買取現金化の典型的な特徴と重なります。",
  },
  {
    question: "分割払い中（残債がある）のスマホでも申し込めると言われました。",
    answer:
      "分割払い中の端末を売却しても、通信契約や端末代金の割賦契約は売却とは別に残るのが一般的です。契約の条件は契約ごとに異なるため、ご自身の契約内容の確認が必要ですが、少なくとも「端末を手放しても支払いは続く」可能性がある状態で、さらに先払い買取の違約金・キャンセル料リスクを重ねることになります。「残債があってもOK」という案内は、審査のハードルを下げて申し込みやすくするための誘い文句である可能性を疑うべきです。",
  },
  {
    question: "申し込んでしまいましたが、途中でやめられますか？",
    answer:
      "契約の解除・キャンセルができるかどうかは契約内容と個別の事情によるため、当サイトが断定することはできません。ただし、キャンセル時に高額な違約金・キャンセル料を請求される形態が典型とされているため、業者の請求どおりに支払う前に、消費者ホットライン（188）などの公的窓口へ相談することを強くおすすめします。やめ方と注意点は、当サイトの「先払い買取のキャンセル・クーリングオフ」の記事で詳しく解説しています。",
  },
  {
    question: "期日までにスマホを送れず、違約金を請求されています。",
    answer:
      "一人で抱え込まず、支払う前に公的な窓口へ相談してください。消費者ホットライン（188）、警察相談専用電話（#9110）、財務局の多重債務相談窓口（0570-016811）、日本貸金業協会（0570-051051）、法テラス（0570-078374）が利用できます。業者とのやり取りや振込記録は証拠として消さずに残しておきましょう。対処の進め方は、当サイトの「先払い買取の代金が支払えない場合の対処法」で詳しく解説しています。",
  },
  {
    question: "業者からの連絡が続いていて怖いです。",
    answer:
      "執拗な連絡・取り立てや脅迫めいた言動がある場合は、警察相談専用電話（#9110）に相談してください。緊急性がある場合はためらわずに警察へ通報を。あわせて、消費者ホットライン（188）で消費生活センターにも状況を伝えておくと、対応の選択肢を整理できます。連絡の記録（日時・内容・スクリーンショット）は消さずに残しておくことが重要です。利用者を責める窓口ではないので、安心して相談してください。",
  },
  {
    question: "本人確認書類や口座情報をすでに渡してしまいました。",
    answer:
      "提出してしまったこと自体を責める必要はありません。まず消費者ホットライン（188）に相談し、状況を伝えてください。その後の執拗な連絡や、身に覚えのない請求・勧誘につながるおそれがあるため、不審な連絡があった場合は警察相談専用電話（#9110）にも相談を。渡した書類の種類・提出日時・業者とのやり取りを記録として整理しておくと、相談がスムーズに進みます。",
  },
  {
    question: "お金が必要なだけなのですが、正規の方法はありますか？",
    answer:
      "立場によって選択肢が異なります。事業者（法人・個人事業主・フリーランス）で売掛金（請求書）があるなら、民法にもとづく債権譲渡である正規のファクタリングで資金化できます。個人の生活資金の場合は、危険な現金化に頼る前に、消費者ホットライン（188）や市区町村の窓口で公的な支援制度・債務整理を含めた選択肢を確認してください。「スマホを送らずに現金を受け取る」形の取引は、正規の選択肢には含まれません。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "スマホ・iPhoneの先払い買取は危険？仕組みとトラブル・対処法を解説【2026年】",
  description:
    "手持ちのスマホ・iPhoneを対象に「使いながらでOK」「送らなくてOK」とうたう先払い買取は、貸付を仮装したスキームの典型例として公的機関が注意喚起する形態にあたりうるものです。危険性と対処法を一次情報で解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-sumaho/",
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
      name: "スマホ・iPhoneの先払い買取は危険？仕組みとトラブル・対処法を解説",
      item: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-sumaho/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SakibaraiKaitoriSumahoPage() {
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
          { label: "スマホ・iPhoneの先払い買取は危険？" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            注意喚起・資金調達ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            スマホ・iPhoneの先払い買取は危険？
            <br className="hidden md:block" />
            仕組みとトラブル・対処法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            「手持ちのスマホやiPhoneを先払い買取に出せば、すぐ現金を受け取れるのでは」と調べている方、すでに利用して不安になっている方へ。スマホを対象とする先払い買取も、商品売買を装った実質貸付スキームの典型例として公的機関が連名で注意喚起する形態にあたりうるものです。なぜスマホが対象にされやすいのか、起こりうるトラブル、すでに利用してしまった場合の相談先を一次情報にもとづいて解説します。
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
                  スマホ・iPhoneを対象とする先払い買取も、商品売買を装った実質貸付スキームの典型例
                </strong>
                として、金融庁・消費者庁・警察庁・財務局・日本貸金業協会が連名で注意喚起する形態にあたりうるものです。対象がスマホであることで安全になるわけではありません
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                「使いながらでOK」「送らなくてOK」という誘い文句は、
                <strong className="text-text-main">
                  商品の受け渡しが最初から重要でない＝売買の実体がない取引
                </strong>
                であることを示すサインです。期日までに送らなければ、違約金・キャンセル料名目で受け取った額より多くを請求される展開になりやすい構造です
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                すでに利用して支払えない・送れない場合は、業者に支払う前に
                <strong className="text-text-main">
                  消費者ホットライン（188）などの公的窓口へ相談
                </strong>
                してください。お金が必要なら、事業者は売掛金の正規ファクタリング、個人は公的な支援制度の確認が先です
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
                1. 結論｜スマホの先払い買取も注意喚起対象の形態にあたりうる
              </a>
            </li>
            <li>
              <a href="#why" className="hover:underline">
                2. なぜスマホ・iPhoneが対象にされやすいのか
              </a>
            </li>
            <li>
              <a href="#keep-using" className="hover:underline">
                3. 「使っているスマホをそのまま使えます」の意味
              </a>
            </li>
            <li>
              <a href="#trouble" className="hover:underline">
                4. 起こりうるトラブル
              </a>
            </li>
            <li>
              <a href="#installment" className="hover:underline">
                5. 分割払い中・残債がある端末の注意点
              </a>
            </li>
            <li>
              <a href="#already" className="hover:underline">
                6. すでに利用してしまった場合の対処
              </a>
            </li>
            <li>
              <a href="#alternatives" className="hover:underline">
                7. お金が必要なときの正規の選択肢
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                8. よくある質問
              </a>
            </li>
            <li>
              <a href="#consult" className="hover:underline">
                9. 相談窓口一覧
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
            結論｜スマホの先払い買取も注意喚起対象の形態にあたりうる
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            スマホ・iPhoneを対象とする先払い買取は、「手持ちの端末を売るだけ」という体裁のため、他の現金化手段より安全に見えるかもしれません。しかし、
            <strong className="text-text-main">
              問題とされているのは対象商品ではなく、「商品売買を装って現金を先に渡し、後からより多くの金銭を回収する」というスキームの構造
            </strong>
            です。対象がスマホであっても、この構造は変わりません。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            このように商品売買を装って金銭を渡す形態は、
            <strong className="text-text-main">
              貸付を仮装したスキームの典型例として、金融庁・消費者庁・警察庁・財務局・日本貸金業協会の5者が連名で注意喚起している「先払い買取」現金化
            </strong>
            にあたりうるものです。実態が貸付と判断される場合、無登録で貸金業を営む行為は貸金業法上の無登録営業（10年以下の懲役もしくは3,000万円以下の罰金またはその両方）にあたりうる、違法なヤミ金融です。
          </p>
          <p className="leading-relaxed text-text-light">
            つまり「スマホなら安全か？」という問いへの答えは、「
            <strong className="text-text-main">
              対象が何であれ、先払い買取のスキーム構造そのものに危険がある
            </strong>
            」です。スキームの全体像は、ピラー記事の
            <Link
              href="/articles/sakibarai-kaitori/"
              className="font-medium text-primary underline"
            >
              先払い買取とは？違法性と危険な仕組み
            </Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* ── なぜスマホが対象にされやすいのか ─── */}
        <section id="why" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            なぜスマホ・iPhoneが対象にされやすいのか
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            先払い買取の対象としてスマホ・iPhoneが持ち出されやすいのには、一般論として次のような理由が考えられます。
          </p>
          <ul className="mb-4 list-disc space-y-3 pl-6 leading-relaxed text-text-light">
            <li>
              <strong className="text-text-main">ほぼ誰もが持っている</strong>
              ｜「売る商品がない」という人がほとんどいないため、現金が必要な人なら誰でも申し込める間口の広い入口になります。
            </li>
            <li>
              <strong className="text-text-main">
                中古市場があり「買取」の体裁を作りやすい
              </strong>
              ｜スマホには中古売買の市場が実際に存在するため、「買取」という名目に一応のもっともらしさを持たせやすい商品です。
            </li>
            <li>
              <strong className="text-text-main">
                「使いながらでOK」「送らなくてOK」を誘い文句にしやすい
              </strong>
              ｜スマホは生活必需品なので、「手放したくないが現金は欲しい」という心理につけ込み、「今の端末をそのまま使えます」という案内で申し込みのハードルを下げやすい構造があります。
            </li>
          </ul>
          <p className="leading-relaxed text-text-light">
            いずれも、利用者にとって都合が良いように見える特徴が、
            <strong className="text-text-main">
              そのままスキームへの入りやすさとして利用されている
            </strong>
            点に注意が必要です。
          </p>
        </section>

        {/* ── 「そのまま使えます」の意味 ─── */}
        <section id="keep-using" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            「使っているスマホをそのまま使えます」の意味
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            通常の買取は、「売りたい商品がある人」が商品を渡し、その対価として代金を受け取る取引です。ところが「スマホを送らなくていい」「使いながらでOK」となると、
            <strong className="text-text-main">
              商品を渡さないのに現金を受け取る＝商品売買という取引の実体がない
            </strong>
            構造になります。残るのは「業者からお金を受け取り、後からより多くのお金を返す」という金銭のやり取りだけです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            この形態では、商品の受け渡しが最初から形骸化していると考えられます。端末が送られてこないことを織り込んだうえで違約金・キャンセル料の条件があらかじめ用意されている場合、業者の関心はスマホではなく、
            <strong className="text-text-main">
              現金を渡した後に回収する金銭
            </strong>
            にあると考えられます（個別の取引の性質は実態により判断されるため、一般論としての説明です）。
          </p>
          <p className="leading-relaxed text-text-light">
            「そのまま使えます」という案内は、利用者への親切ではなく、
            <strong className="text-text-main">
              商品の存在がそもそも重要でない取引であることを示すサイン
            </strong>
            として受け止めるべきものです。
          </p>
        </section>

        {/* ── 起こりうるトラブル ─── */}
        <section id="trouble" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            起こりうるトラブル
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            スマホ・iPhoneを対象にこの種の取引に申し込んだ場合、一般論として次のようなトラブルが起こり得ます。
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

        {/* ── 分割払い中・残債がある端末 ─── */}
        <section id="installment" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            分割払い中・残債がある端末の注意点
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            スマホは分割払い（割賦契約）で購入している人が多い商品です。一般論として、
            <strong className="text-text-main">
              端末を売却しても、通信契約や端末代金の割賦契約は売却とは別に残る
            </strong>
            のが通常です。つまり「端末を手放しても支払いは続く」可能性がある状態で、さらに先払い買取の違約金・キャンセル料リスクを上乗せすることになります。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            また、分割払い中の端末の取り扱い（売却の可否や条件）は、
            <strong className="text-text-main">
              契約している通信会社・販売店との契約内容によって異なる
            </strong>
            ため、一律に「問題ない」と言える性質のものではありません。ご自身の契約条件の確認が必要です。
          </p>
          <p className="leading-relaxed text-text-light">
            「残債があってもOK」「分割払い中でも大丈夫」といった案内は、こうした確認を飛ばして申し込ませるための誘い文句である可能性を疑うべきものです。業者が「大丈夫」と言うことと、あなたの契約上・経済上のリスクがなくなることは別問題です。
          </p>
        </section>

        {/* ── すでに利用してしまった場合 ─── */}
        <section id="already" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            すでに利用してしまった場合の対処
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            すでに申し込んで現金を受け取り、「期日までにスマホを送れない」「請求された額を支払えない」という状況でも、
            <strong className="text-text-main">
              自分を責める必要はありません。業者の請求どおりに支払う前に、公的な窓口へ相談してください
            </strong>
            。業者とのやり取り・振込記録・スクリーンショットは証拠として消さずに残しておきましょう。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            支払えない場合の具体的な対処の進め方は
            <Link
              href="/articles/sakibarai-kaitori-shiharaenai/"
              className="font-medium text-primary underline"
            >
              先払い買取の代金が支払えない場合の対処法
            </Link>
            で、契約をやめたい場合の考え方は
            <Link
              href="/articles/sakibarai-kaitori-cancel/"
              className="font-medium text-primary underline"
            >
              先払い買取はキャンセルできる？やめ方と注意点
            </Link>
            で詳しく解説しています。相談先は次のとおりです（
            <a href="#consult" className="font-medium text-primary underline">
              相談窓口一覧
            </a>
            にも掲載）。
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

        {/* ── 正規の選択肢 ─── */}
        <section id="alternatives" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            お金が必要なときの正規の選択肢
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「使っているスマホまで現金化を考えている」ということは、いま現金が必要な状況のはずです。その必要性自体は否定しません。だからこそ、危険なスキームではなく正規の選択肢を確認してください。立場によって取れる手段が異なります。
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
                が使えます。先払い買取との違いと正規の資金調達の考え方は、
                <Link
                  href="/articles/sakibarai-kaitori/"
                  className="font-medium text-primary underline"
                >
                  先払い買取とは？違法性と危険な仕組み
                </Link>
                の比較セクションで詳しく解説しています。
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
            スマホの先払い買取に関して不安がある場合、すでに申し込んでしまった場合は、一人で抱え込まず次の窓口へ相談してください。いずれも公的機関・公的団体の窓口です。
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
              2026年8月にリンク先への到達を確認。制度・注意喚起の内容は変更される場合があるため、最新情報は各機関の公式サイトをご確認ください。本記事は一般的な情報提供であり、個別の事案に対する法的助言ではありません。
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
              href="/articles/sakibarai-kaitori-cancel/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                先払い買取はキャンセルできる？やめ方と注意点
              </p>
              <p className="mt-1 text-sm text-text-light">
                申し込み後に契約をやめたい場合の考え方と相談の進め方
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
                手元にない商品で申し込めてしまう仕組みの危険性を解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            スマホを差し出す前に、スキームの全体像を知ってください
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            先払い買取がどのような仕組みで、なぜ公的機関が連名で注意喚起しているのか。危険サインと相談先を、一次情報にもとづいてメイン記事で解説しています。
          </p>
          <Link
            href="/articles/sakibarai-kaitori/"
            className="btn-cta mt-6 text-base"
          >
            先払い買取の仕組みと危険性を確認する
          </Link>
        </section>
      </div>
    </>
  );
}
