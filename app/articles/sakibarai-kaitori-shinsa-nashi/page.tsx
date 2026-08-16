import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "先払い買取に審査がないのはなぜ？「審査なし」の仕組みと危険性【2026年】",
  description:
    "「先払い買取 審査なし」と検索している方へ。先払い買取に審査がないのは、利用者にやさしいからではありません。貸金業の規制（登録制・返済能力の確認・総量規制）の外で実質的な貸付を行っている構造のサインにあたりうるものです。正規の貸付に審査がある理由、「審査なし」と引き換えに失われる利用者保護、審査が不安なときの正規の選択肢を、一次情報にもとづいて解説します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-shinsa-nashi/",
  },
  openGraph: {
    title:
      "先払い買取に審査がないのはなぜ？「審査なし」の仕組みと危険性【2026年】",
    description:
      "先払い買取に審査がないのは利用者にやさしいからではなく、貸金業の規制（登録・審査・総量規制）の外で実質的な貸付を行っている構造のサインにあたりうるものです。失われる利用者保護と正規の選択肢を一次情報で解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-shinsa-nashi/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const losses = [
  {
    title: "上限金利・取り立て規制・総量規制などの利用者保護が及ばないおそれ",
    description:
      "貸金業法や利息制限の規制は、登録を受けた貸金業者との「貸付」を前提に、上限金利、執拗な取り立ての禁止、借りすぎを防ぐ総量規制といった保護を利用者に与えています。先払い買取は形式上「商品売買」であるため、業者側はこれらの規制が及ばない外側で取引を組み立てようとします。審査がないことは、この保護の枠の外にいることの裏返しにあたりうるものです。",
  },
  {
    title: "違約金・キャンセル料による「受け取った額より多く支払う」構造",
    description:
      "先払い買取は、商品を発送しなかった場合に契約解除（キャンセル）となり、違約金やキャンセル料名目の金銭を請求される形態が典型とされています。審査なしで現金を受け取れても、後から受け取った額を上回る支払いを求められるなら、経済的には借金の元本と利息に相当する構造です。利用を繰り返すほど負担が膨らみ、かえって資金繰り・生活が悪化するおそれがあります。",
  },
  {
    title: "個人情報を提出することのリスク",
    description:
      "「審査なし」とうたわれていても、申し込みの過程では本人確認書類・口座情報・連絡先などの個人情報の提出を求められるのが通常です。取引の実態に問題があるスキームに個人情報を渡すことは、その後の執拗な連絡や情報の悪用といったトラブルにつながるおそれがあります。一度提出した情報は取り戻せません。",
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
    question: "先払い買取は本当に審査なしですか？",
    answer:
      "「審査なし」をうたう業者は存在します。これは、先払い買取が形式上「商品売買」であり、貸金業法が貸金業者に義務づける返済能力の調査（審査）の枠外で取引が組み立てられているためと考えられます。ただし、審査がなくても本人確認書類や口座情報などの提出は求められるのが通常で、「何も確認されずにお金だけ受け取れる」わけではありません。そして、貸付の審査がないこと自体が、利用者保護の規制の外で行われている取引であるサインにあたりうるものです。",
  },
  {
    question: "審査なしなら、信用情報には影響しませんか？",
    answer:
      "一般論として、貸金業者やクレジット会社との契約・返済の状況は信用情報機関に登録される一方、商品売買の形式をとる取引はその枠組みの外で行われることがあります。ただし、個別の取引が信用情報にどう扱われるかを当サイトが断定することはできません。より重要なのは、信用情報への影響の有無にかかわらず、違約金・キャンセル料名目で受け取った額より多くを請求されるなど、現実の負担が増えるおそれが大きいという点です。",
  },
  {
    question: "「ブラックでも使える」と聞きました。本当ですか？",
    answer:
      "「ブラックOK」「審査落ちでも大丈夫」といった文言は、返済能力を確認しないまま金銭を渡す意思の表れと受け止めるべきものです。正規の貸金業者は、返済能力の調査を法律で義務づけられているため、このような勧誘は行いません。返済が難しい状況の方にあえて現金を渡し、後からより多くを回収する構造は、ヤミ金融の勧誘とも重なります。借入の審査に通らずお金に困っている状況自体は責められることではありません。だからこそ、こうした勧誘に応じる前に、消費者ホットライン（188）や財務局の多重債務相談窓口（0570-016811）に相談してください。",
  },
  {
    question:
      "総量規制で借りられないので、先払い買取を考えています。問題ありますか？",
    answer:
      "総量規制（貸金業者からの借入れは原則として年収の3分の1を超えることができないという規制）は、借りすぎ・多重債務から利用者を守るための仕組みです。これを回避する形で現金を得る取引は、保護の外側でさらに負担を積み増すことになりかねません。すでに借入れが年収に対して大きい状況であれば、それは追加の資金調達ではなく、返済計画の見直しや債務整理を検討すべきサインです。財務局の多重債務相談窓口（0570-016811）や日本貸金業協会（0570-051051）、法テラス（0570-078374）が利用できます。",
  },
  {
    question: "審査なしのはずなのに、本人確認書類の提出を求められました。",
    answer:
      "「審査なし」とうたう業者でも、本人確認書類・口座情報・連絡先の提出を求めるのが通常です。これは貸付の可否を判断するためではなく、代金を回収するための連絡手段・個人情報を確保する目的である可能性を疑うべきものです。実態に問題があるスキームに個人情報を渡すと、執拗な連絡や情報の悪用につながるおそれがあります。提出前であれば、いったん立ち止まり、消費者ホットライン（188）に相談することをおすすめします。",
  },
  {
    question: "すでに審査なしの先払い買取を利用してしまいました。",
    answer:
      "一人で抱え込まず、請求された金銭を支払う前に公的な窓口へ相談してください。消費者ホットライン（188）、警察相談専用電話（#9110）、財務局の多重債務相談窓口（0570-016811）、日本貸金業協会（0570-051051）、法テラス（0570-078374）が利用できます。業者とのやり取りや振込記録は証拠として消さずに残しておきましょう。対処の進め方は、当サイトの「先払い買取の代金が支払えない場合の対処法」で詳しく解説しています。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "先払い買取に審査がないのはなぜ？「審査なし」の仕組みと危険性【2026年】",
  description:
    "先払い買取に審査がないのは利用者にやさしいからではなく、貸金業の規制（登録・審査・総量規制）の外で実質的な貸付を行っている構造のサインにあたりうるものです。失われる利用者保護と正規の選択肢を一次情報で解説。",
  datePublished: "2026-08-16",
  dateModified: "2026-08-16",
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
      "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-shinsa-nashi/",
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
      name: "先払い買取に審査がないのはなぜ？「審査なし」の仕組みと危険性",
      item: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-shinsa-nashi/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SakibaraiKaitoriShinsaNashiPage() {
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
          { label: "先払い買取に審査がないのはなぜ？" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            注意喚起・資金調達ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            先払い買取に審査がないのはなぜ？
            <br className="hidden md:block" />
            「審査なし」の仕組みと危険性
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            「先払い買取 審査なし」と調べている方へ。審査に通らない、審査を待てない事情があって検索していること自体は、責められることではありません。ただ、結論からお伝えすると、先払い買取に審査がないのは利用者にやさしいからではなく、貸金業の規制（登録・審査・総量規制）の外で実質的な貸付を行っている構造のサインにあたりうるものです。その仕組みと、審査なしと引き換えに失われる利用者保護、正規の選択肢を一次情報にもとづいて解説します。
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
                  「審査なし」は便利さの証ではありません
                </strong>
                。正規の貸付に審査があるのは利用者を守るためであり、審査がないことは、貸金業の規制（登録制・返済能力の確認・総量規制）の外で実質的な貸付が行われている構造のサインにあたりうるものです
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                審査なしと引き換えに、
                <strong className="text-text-main">
                  上限金利・取り立て規制・総量規制といった利用者保護が及ばないおそれ
                </strong>
                があります。違約金・キャンセル料名目で受け取った額より多くを支払う構造になりやすく、資金不足の解決にはなりません
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                お金が必要なら、事業者は
                <strong className="text-text-main">
                  売掛先の信用力が重視される正規のファクタリング
                </strong>
                という道があり、個人は
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
                1. 結論｜「審査なし」は規制の外にいることのサイン
              </a>
            </li>
            <li>
              <a href="#why-legit" className="hover:underline">
                2. 正規の貸付に審査がある理由｜利用者を守る仕組み
              </a>
            </li>
            <li>
              <a href="#how" className="hover:underline">
                3. 先払い買取が「審査なし」を実現できる理由
              </a>
            </li>
            <li>
              <a href="#lose" className="hover:underline">
                4. 「審査なし」と引き換えに失うもの
              </a>
            </li>
            <li>
              <a href="#alternatives" className="hover:underline">
                5. 審査が不安でお金が必要なときの正規の選択肢
              </a>
            </li>
            <li>
              <a href="#consult" className="hover:underline">
                6. すでに利用してしまった場合の対処と相談窓口
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
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。なお、当サイトが先払い買取現金化の利用を推奨することはなく、先払い買取業者との提携・紹介も一切行っていません。また、本記事は一般的な情報提供であり、個別の事案に対する法的助言ではありません。掲載内容は調査時点のものであり、最新情報は各公式サイト・公的機関の発表をご確認ください。
        </p>

        {/* ── 結論 ─── */}
        <section id="conclusion" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            結論｜「審査なし」は規制の外にいることのサイン
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            お金を貸す正規の事業者（貸金業者）は、貸金業法にもとづく登録を受け、利用者の返済能力を確認する審査を行うことを法律で求められています。つまり、
            <strong className="text-text-main">
              「貸付なのに審査がない」という状態は、正規の枠組みの中では本来成り立ちません
            </strong>
            。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            それにもかかわらず先払い買取が「審査なし」をうたえるのは、形式上「商品の売買」という建前をとることで、
            <strong className="text-text-main">
              貸金業の規制（登録・審査・総量規制）が及ばない外側で取引を組み立てようとしている
            </strong>
            ためと考えられます。そして、商品売買を装いつつ実態として金銭の授受を行う「先払い買取」現金化は、金融庁・消費者庁・警察庁・財務局・日本貸金業協会が連名で注意喚起する形態にあたりうるものです。
          </p>
          <p className="leading-relaxed text-text-light">
            つまり「審査なし」は、利用者への配慮ではなく、
            <strong className="text-text-main">
              利用者を守る規制の外側で行われている取引であることの裏返しのサイン
            </strong>
            として受け止めるべきものです。先払い買取のスキーム全体像は、ピラー記事の
            <Link
              href="/articles/sakibarai-kaitori/"
              className="font-medium text-primary underline"
            >
              先払い買取とは？違法性と危険な仕組み
            </Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* ── 正規の貸付に審査がある理由 ─── */}
        <section id="why-legit" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            正規の貸付に審査がある理由｜利用者を守る仕組み
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            審査は、貸す側が損をしないためだけの仕組みではありません。貸金業法は、次のような形で
            <strong className="text-text-main">
              利用者を借りすぎ・悪質業者から守る仕組み
            </strong>
            を用意しており、審査はその中核にあります。
          </p>
          <div className="mb-6 space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">登録制｜誰でも貸金業を営めるわけではない</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                貸金業を営むには、国（財務局）や都道府県への登録が必要です。登録業者は法律のルール（広告・勧誘・取り立ての規制など）に従う義務を負い、違反すれば行政処分の対象になります。登録のない業者による貸付（ヤミ金融）から利用者を切り分けるための入口が、この登録制です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">返済能力の確認（審査）｜返せない貸付をさせない</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                登録を受けた貸金業者は、貸付にあたって利用者の返済能力を調査することを義務づけられています。審査に通らないのはつらい経験ですが、これは「返済によって生活が破綻するおそれのある貸付を、そもそもさせない」ための利用者保護の仕組みでもあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">総量規制｜借りすぎを防ぐ上限</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                日本貸金業協会の解説によれば、
                <strong className="text-text-main">
                  貸金業者からの借入れは、原則として年収の3分の1を超えることができない（総量規制）
                </strong>
                とされています（2026年8月確認）。多重債務を防ぐための上限であり、これも審査（返済能力・借入状況の確認）があってはじめて機能する保護です。
              </p>
            </div>
          </div>
          <p className="leading-relaxed text-text-light">
            このように、
            <strong className="text-text-main">
              登録・審査・総量規制はワンセットの利用者保護
            </strong>
            です。「審査なし」をうたう取引は、このセットの外側にあると考えるのが自然です。
          </p>
        </section>

        {/* ── 審査なしを実現できる理由 ─── */}
        <section id="how" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            先払い買取が「審査なし」を実現できる理由
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            先払い買取は、「商品を売る」という形式をとります。買取（売買）であれば、貸金業法が貸金業者に義務づける返済能力の審査は適用されない——業者側はこの建前によって、
            <strong className="text-text-main">
              「審査なし」で現金を渡す取引を組み立てることができてしまいます
            </strong>
            。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            しかし、商品の受け渡しが形骸化しており、実際には「現金を渡し、後からより多くの金銭を回収する」ことが目的であれば、その実態は売買ではなく貸付です。
          </p>
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-6">
            <p className="mb-2 font-bold text-red-700">
              実態が貸付なら「無登録貸金業」にあたりうる
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              取引の実態が貸付と判断される場合、貸金業登録を受けずにこれを業として行うことは貸金業法上の無登録営業にあたりうる行為であり、
              <strong className="text-text-main">
                10年以下の懲役もしくは3,000万円以下の罰金（またはその両方）
              </strong>
              の対象となります。先払い買取をめぐる摘発の動きは、
              <Link
                href="/articles/sakibarai-kaitori-tekihatsu/"
                className="font-medium text-primary underline"
              >
                先払い買取の摘発事例
              </Link>
              の記事で詳しく解説しています。
            </p>
          </div>
          <p className="leading-relaxed text-text-light">
            つまり「審査なしで使える」という案内は、
            <strong className="text-text-main">
              貸金業の規制を受けない形を装った取引である可能性を示すサイン
            </strong>
            です。「審査がなくて助かった」ではなく、「なぜ審査なしにできるのか」を疑う必要があります。なお、「審査が甘い優良業者」をうたう表示についても、
            <Link
              href="/articles/sakibarai-kaitori-gyosha/"
              className="font-medium text-primary underline"
            >
              先払い買取に「優良・おすすめ業者」は存在するか
            </Link>
            で解説しているとおり、スキーム自体のリスクは解消されません。
          </p>
        </section>

        {/* ── 失うもの ─── */}
        <section id="lose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            「審査なし」と引き換えに失うもの
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            審査がないことは、利用のハードルが下がることを意味すると同時に、規制による保護の外に出ることを意味しかねません。一般論として、次のようなリスクがあります。
          </p>
          <div className="space-y-6">
            {losses.map((item, index) => (
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

        {/* ── 正規の選択肢 ─── */}
        <section id="alternatives" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査が不安でお金が必要なときの正規の選択肢
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「審査なし」を探しているということは、審査に通らない不安や、いますぐ現金が必要な事情があるはずです。その必要性自体は否定しません。だからこそ、規制の外側の取引ではなく、立場に応じた正規の選択肢を確認してください。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                事業者（法人・個人事業主・フリーランス）｜売掛金があるなら正規のファクタリング
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                事業で発行した請求書（売掛金）があるなら、それを売却して資金化する正規のファクタリング（民法にもとづく債権譲渡）が使えます。ファクタリングの審査では、
                <strong className="text-text-main">
                  申込者自身の信用力よりも売掛先の信用力が重視される仕組み
                </strong>
                のため、自身の借入状況に不安がある事業者にも検討の余地があります。先払い買取との違いを含めた全体像は、
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
                個人の生活資金にはファクタリングは使えません（事業の売掛債権が対象のため）。審査のない現金化に頼る前に、
                <strong className="text-text-main">
                  消費者ホットライン（188）や市区町村の相談窓口
                </strong>
                で、公的な支援制度や債務整理を含めた選択肢を確認してください。すでに借金の返済に追われている場合は、財務局の多重債務相談窓口（0570-016811）も利用できます。相談は、状況がこれ以上悪化する前の早い段階ほど選択肢が残ります。
              </p>
            </div>
          </div>
        </section>

        {/* ── すでに利用した場合・相談窓口 ─── */}
        <section id="consult" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            すでに利用してしまった場合の対処と相談窓口
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            すでに「審査なし」の先払い買取を利用し、違約金・キャンセル料などの請求を受けている場合は、支払う前に公的な窓口へ相談してください。業者とのやり取りや振込記録は証拠として残しておきましょう。具体的な対処の進め方は、姉妹記事の
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

        {/* ── 一次情報ソース ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-border bg-section-bg p-6">
            <p className="mb-3 font-bold text-text-main">
              この記事の一次情報（公的機関・公的団体の公表資料）
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
                ・日本貸金業協会「お借入れは年収の3分の1まで（総量規制について）」
                <a
                  href="https://www.j-fsa.or.jp/association/money_lending/law/annual_income.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 break-all text-primary underline"
                >
                  j-fsa.or.jp
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
                「審査が甘い優良業者」表示ではスキームのリスクが解消されない理由
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
                手元にない商品で現金だけ受け取れる取引の構造的な危険性
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            「審査なし」を探す前に、いま置かれた状況を整理しませんか
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            事業の売掛金があるなら正規のファクタリングという道があり、個人の生活資金なら公的窓口（消費者ホットライン 188 など）に相談する道があります。規制の外側の取引に進む前に、まず全体像を確認してください。
          </p>
          <Link href="/articles/sakibarai-kaitori/" className="btn-cta mt-6 text-base">
            先払い買取の仕組みと正規の選択肢を確認する
          </Link>
        </section>
      </div>
    </>
  );
}
