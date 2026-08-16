import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "先払い買取に在籍確認・職場への連絡はある？本当のリスクを解説【2026年】",
  description:
    "「先払い買取 在籍確認」「先払い買取 職場 連絡」と検索している方へ。申し込み時に在籍確認を行わないとされる業者が多い一方、それは安心材料ではなく、返済能力の審査を持たない構造のサインにあたりうるものです。本当の連絡リスクは申し込み時ではなく「支払えなくなったとき」に生じる構造を、公的機関の注意喚起にもとづいて解説します。職場や家族に知られたくない方ほど知っておくべき内容です。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-zaiseki-kakunin/",
  },
  openGraph: {
    title:
      "先払い買取に在籍確認・職場への連絡はある？本当のリスクを解説【2026年】",
    description:
      "先払い買取で在籍確認がないのは安心材料ではなく、返済能力の審査を持たない構造のサインにあたりうるものです。本当の連絡リスクは「支払えなくなったとき」に生じる構造を一次情報で解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-zaiseki-kakunin/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const contactRisks = [
  {
    title: "期日までに商品を送れない・違約金を払えない場合の督促連絡",
    description:
      "先払い買取は、期日までに商品を発送できなかった場合に契約解除（キャンセル）となり、違約金・キャンセル料名目の金銭を請求される形態が典型とされています。この段階になると、支払いを求める電話・メッセージなどの連絡が繰り返されるおそれがあります。申し込み時に連絡が静かでも、支払えなくなった途端に状況が変わりうる構造です。",
  },
  {
    title: "本人確認書類・口座・連絡先を提出済みのため、連絡を断ちにくい",
    description:
      "申し込みの過程で、本人確認書類・銀行口座・電話番号などの個人情報を業者に提出することになります。連絡を無視したり着信拒否をしたりしても、業者側は氏名・住所・連絡先を把握している状態が続きます。一度提出した情報は取り戻せず、「関係を断てばそれで終わり」とはなりにくい点が、この形態の取引の大きなリスクです。",
  },
  {
    title: "執拗な取り立てにあたる連絡は、犯罪被害につながるおそれ",
    description:
      "実態が貸付と判断される取引での執拗な取り立ては、違法な行為にあたりうるものです。深夜・早朝の連絡、脅迫的な文言、勤務先や家族への連絡をほのめかす行為などがあった場合は、一人で対応せず、警察相談専用電話（#9110）へ相談してください。業者とのやり取りの記録は、消さずに残しておくことが重要です。",
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
    question: "先払い買取に申し込むと、勤務先に在籍確認の電話は来ますか？",
    answer:
      "対応は業者により異なるため、一律には断定できません。一般に、先払い買取をうたう業者の多くは申し込み時に在籍確認を行わないとされていますが、それは形式上「売買」であり返済能力の審査をしていないためと考えられます。正規の審査プロセスがないことは安心材料ではなく、実態が貸付であれば規制の外で行われている構造のサインにあたりうるものです。「電話が来るかどうか」よりも、その取引に関わること自体のリスクを確認してください。",
  },
  {
    question: "先払い買取を使うと家族にバレますか？",
    answer:
      "申し込み時点で業者が家族へ連絡する仕組みが一般的とはされていませんが、取引が問題なく完了する保証はどこにもありません。期日までに商品を送れない・違約金を払えないといった事態になれば、督促の連絡が繰り返され、自宅への郵便物や電話をきっかけに家族に知られる展開になるおそれがあります。「知られずに済むか」は業者の運用次第であり、利用者側でコントロールできない点に注意が必要です。",
  },
  {
    question: "支払えなくなったら、職場に連絡されますか？",
    answer:
      "業者により対応は異なり、当サイトが一律に断定することはできません。ただし、実態が貸付と判断される取引で、勤務先への連絡をほのめかして支払いを迫るような行為は、違法な取り立てにあたりうるものです。そうした連絡・示唆があった場合は、要求に応じて支払う前に、警察相談専用電話（#9110）や消費者ホットライン（188）へ相談してください。やり取りの記録は証拠として残しておきましょう。",
  },
  {
    question: "業者からの連絡がしつこくて怖いです。どうすればいいですか？",
    answer:
      "一人で対応し続けないでください。深夜・早朝の連絡、脅迫的な文言、職場や家族への連絡の示唆など、執拗な取り立てにあたる行為は警察相談専用電話（#9110）へ相談できます。あわせて、契約トラブルとしての対処は消費者ホットライン（188）、法的な対応の検討は法テラス（0570-078374）が窓口になります。着信履歴・メッセージ・振込記録は消さずに保全してください。対処の進め方は当サイトの「先払い買取の代金が支払えない場合の対処法」でも解説しています。",
  },
  {
    question: "「在籍確認なし・誰にも知られず現金化」という広告は信用できますか？",
    answer:
      "そのような文言は、職場や家族に知られたくない事情を抱えた人を呼び込むための訴求と考えられます。しかし、申し込み時に確認がないことと、最後まで誰にも知られずに済むことは別の話です。むしろ「知られたくない」という事情そのものが、支払いに窮したときに強い圧力として働くおそれがあります。広告の文言ではなく、取引の構造（実態が貸付なら無登録の貸金業にあたりうること）で判断してください。",
  },
  {
    question: "在籍確認がない業者のほうが、審査が緩くて助かるのでは？",
    answer:
      "在籍確認や審査がないことは、利用者への配慮ではなく、返済能力を確認しないまま金銭を渡す構造であることを意味します。返済能力を見ない取引は、支払えなくなる利用者が出ることを前提に、違約金・キャンセル料などの回収で成り立ちうる構造です。審査がない仕組みの詳細は、姉妹記事「先払い買取に審査がないのはなぜか」で解説しています。「審査がなくて助かる」と感じる状況こそ、公的窓口に相談すべきタイミングです。",
  },
  {
    question: "お金が必要なだけなのですが、正規の方法はありますか？",
    answer:
      "立場によって選択肢が異なります。事業者（法人・個人事業主・フリーランス）で売掛金（請求書）があるなら、民法にもとづく債権譲渡である正規のファクタリングで資金化できます。個人の生活資金の場合は、危険な現金化に頼る前に、消費者ホットライン（188）や市区町村の窓口で公的な支援制度・債務整理を含めた選択肢を確認してください。「在籍確認なし」をうたう現金化は、正規の選択肢には含まれません。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "先払い買取に在籍確認・職場への連絡はある？本当のリスクを解説【2026年】",
  description:
    "先払い買取で在籍確認がないのは安心材料ではなく、返済能力の審査を持たない構造のサインにあたりうるものです。本当の連絡リスクは「支払えなくなったとき」に生じる構造を一次情報で解説。",
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
      "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-zaiseki-kakunin/",
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
      name: "先払い買取に在籍確認・職場への連絡はある？本当のリスクを解説",
      item: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-zaiseki-kakunin/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SakibaraiKaitoriZaisekiKakuninPage() {
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
          { label: "先払い買取に在籍確認・職場への連絡はある？" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            注意喚起・資金調達ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            先払い買取に在籍確認・
            <br className="hidden md:block" />
            職場への連絡はある？本当のリスク
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            「先払い買取は在籍確認があるのか」「職場や家族に知られないか」と調べている方へ。一般に、申し込み時に在籍確認を行わない業者が多いとされますが、それは安心材料ではありません。正規の審査プロセスを持たない構造のサインにあたりうるものであり、本当の連絡リスクは申し込み時ではなく「支払えなくなったとき」に生じます。その構造を、公的機関の注意喚起にもとづいて解説します。
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
                一般に、先払い買取の業者は
                <strong className="text-text-main">
                  申し込み時に在籍確認を行わないとされますが、それは「審査がない」ことの裏返し
                </strong>
                です。形式上は売買のため返済能力を確認しない=実態が貸付なら規制の外で行われている構造のサインにあたりうるものです
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                本当の連絡リスクは申し込み時ではなく、
                <strong className="text-text-main">
                  期日までに商品を送れない・違約金を払えなくなったときの督促連絡
                </strong>
                にあります。本人確認書類・口座・連絡先を提出済みのため、連絡を断ちにくい状態になります
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                職場や家族に知られたくない事情は、
                <strong className="text-text-main">
                  支払いに窮したときに弱みとして働くおそれ
                </strong>
                があります。執拗な取り立てにあたる連絡は警察相談専用電話（#9110）、契約トラブルは
                <strong className="text-text-main">
                  消費者ホットライン（188）
                </strong>
                へ相談してください
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
                1. 結論｜「在籍確認なし」は安心材料ではない
              </a>
            </li>
            <li>
              <a href="#seiki" className="hover:underline">
                2. 正規の貸金業者が行う在籍確認とは
              </a>
            </li>
            <li>
              <a href="#why" className="hover:underline">
                3. 先払い買取で在籍確認がない理由
              </a>
            </li>
            <li>
              <a href="#risk" className="hover:underline">
                4. 本当のリスクは「支払えなくなったとき」の連絡
              </a>
            </li>
            <li>
              <a href="#pressure" className="hover:underline">
                5. 家族・職場に知られたくない人ほど注意が必要な理由
              </a>
            </li>
            <li>
              <a href="#taisho" className="hover:underline">
                6. すでに連絡が来ている場合の対処
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
            結論｜「在籍確認なし」は安心材料ではない
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            「先払い買取 在籍確認」と検索する方の多くは、職場や家族に知られずにお金を用意したい状況にあるはずです。まずその問いに正面から答えると、一般に、
            <strong className="text-text-main">
              先払い買取をうたう業者の多くは、申し込み時に勤務先への在籍確認を行わないとされています
            </strong>
            （対応は業者により異なり、一律には断定できません）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            しかし、これは「知られずに使える安心な仕組み」を意味しません。在籍確認が行われないのは、
            <strong className="text-text-main">
              形式上は商品の売買であり、返済能力を審査するプロセスがそもそも存在しない
            </strong>
            ためと考えられます。そして実態が貸付と判断される取引であれば、それは貸金業法の規制の外で金銭を渡す構造=無登録の貸金業（ヤミ金融）にあたりうるものです。
          </p>
          <p className="leading-relaxed text-text-light">
            さらに重要なのは、
            <strong className="text-text-main">
              本当の連絡リスクは申し込み時ではなく「支払えなくなったとき」に生じる
            </strong>
            という構造です。この記事では、正規の在籍確認との違い・連絡リスクが生じる場面・すでに連絡が来ている場合の対処を順に解説します。先払い買取のスキーム全体像は、ピラー記事の
            <Link
              href="/articles/sakibarai-kaitori/"
              className="font-medium text-primary underline"
            >
              先払い買取とは？違法性と危険な仕組み
            </Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* ── 正規の在籍確認 ─── */}
        <section id="seiki" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            正規の貸金業者が行う在籍確認とは
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            比較のために、正規の貸金業者（登録を受けた消費者金融・カードローン会社など）の在籍確認を確認しておきます。一般論として、正規の貸金業者は
            <strong className="text-text-main">
              返済能力を確認する審査の一環として、申告された勤務先に実際に在籍しているかを確認することがあります
            </strong>
            。これは、返済できる見込みのない人に貸し付けて生活を破綻させないための、法律にもとづく審査プロセスの一部です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            また、一般に正規の業者の在籍確認は、
            <strong className="text-text-main">
              会社名を名乗らない・用件を第三者に伝えないなど、プライバシーに配慮した運用が一般的
            </strong>
            とされています（具体的な運用は各社により異なります）。つまり正規の金融の世界では、「在籍確認がある=利用者を守るための審査が機能している」「配慮した運用でプライバシーも守る」という設計になっています。
          </p>
          <p className="leading-relaxed text-text-light">
            この前提に立つと、「在籍確認が一切ない」という状態の意味が変わって見えるはずです。それは
            <strong className="text-text-main">
              利用者への配慮ではなく、審査そのものが存在しないことのサイン
            </strong>
            として受け止める必要があります。
          </p>
        </section>

        {/* ── なぜ在籍確認がないのか ─── */}
        <section id="why" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            先払い買取で在籍確認がない理由
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            先払い買取は、形式上は「商品を売って代金を受け取る」売買の形をとります。売買であれば、買い手が売り手の勤務先や収入を確認する理由はありません。だからこそ、
            <strong className="text-text-main">
              在籍確認も収入確認もないまま、現金だけが先に渡される
            </strong>
            という取引が成立してしまいます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            しかし、金融庁・消費者庁・警察庁・財務局・日本貸金業協会の5者は連名で、商品売買を装いつつ実態として金銭の授受を行う先払い買取現金化への注意喚起を出しています。実態が貸付と判断される場合、貸金業登録を受けずにこれを業として行うことは
            <strong className="text-text-main">
              貸金業法上の無登録営業にあたりうる行為であり、10年以下の懲役もしくは3,000万円以下の罰金（またはその両方）
            </strong>
            の対象となります。
          </p>
          <p className="leading-relaxed text-text-light">
            つまり「在籍確認がない」のは、
            <strong className="text-text-main">
              返済能力の審査を必要とする正規の貸金の枠組みの外で、貸付に相当する取引が行われている構造
            </strong>
            の表れにあたりうるものです。審査がない仕組みそのものの解説は、姉妹記事の
            <Link
              href="/articles/sakibarai-kaitori-shinsa-nashi/"
              className="font-medium text-primary underline"
            >
              先払い買取に審査がないのはなぜか
            </Link>
            で詳しく扱っています。
          </p>
        </section>

        {/* ── 本当の連絡リスク ─── */}
        <section id="risk" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            本当のリスクは「支払えなくなったとき」の連絡
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            申し込み時に連絡が静かであることと、取引の最後まで静かであることは別の話です。一般論として、連絡リスクが現実になるのは次のような場面です。
          </p>
          <div className="space-y-6">
            {contactRisks.map((item, index) => (
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
            違約金・キャンセル料を請求される仕組みの詳細は、姉妹記事の
            <Link
              href="/articles/sakibarai-kaitori-cancel/"
              className="font-medium text-primary underline"
            >
              先払い買取のキャンセル料・違約金の仕組み
            </Link>
            で解説しています。すでに支払えない状況にある場合は、
            <Link
              href="/articles/sakibarai-kaitori-shiharaenai/"
              className="font-medium text-primary underline"
            >
              先払い買取の代金が支払えない場合の対処法
            </Link>
            を確認し、支払う前に相談窓口へ連絡してください。
          </p>
        </section>

        {/* ── 知られたくない人ほど注意 ─── */}
        <section id="pressure" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            家族・職場に知られたくない人ほど注意が必要な理由
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            「誰にも知られたくない」という事情は、それ自体が責められるものではありません。しかし一般論として、この事情は
            <strong className="text-text-main">
              支払いに窮したときに、交渉上の弱みとして働くおそれ
            </strong>
            があります。「職場に知られたくなければ支払うしかない」という心理的な圧力の下では、本来応じる必要のない要求にも応じてしまいがちです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            「在籍確認なし」「誰にも知られず現金化」といった訴求は、まさにこの事情を抱えた人に向けられたものと考えられます。知られたくない事情を抱えた利用者は、トラブルになっても
            <strong className="text-text-main">
              周囲に相談しにくく、公的窓口への相談も遅れがち
            </strong>
            です。その結果、一人で抱え込んだまま要求に応じ続けてしまう構造的なリスクがあります。
          </p>
          <p className="leading-relaxed text-text-light">
            「優良」「安心」をうたう業者表示についても、それだけでスキーム自体のリスクが解消されるわけではありません。詳しくは
            <Link
              href="/articles/sakibarai-kaitori-gyosha/"
              className="font-medium text-primary underline"
            >
              先払い買取に「優良・おすすめ業者」は存在するか
            </Link>
            で解説しています。
          </p>
        </section>

        {/* ── すでに連絡が来ている場合 ─── */}
        <section id="taisho" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            すでに連絡が来ている場合の対処
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            すでに業者からの督促連絡が来ている、職場や家族への連絡をほのめかされている——そうした状況にある方は、
            <strong className="text-text-main">
              一人で対応せず、支払う前に公的な窓口へ相談してください
            </strong>
            。利用してしまったこと自体を責める窓口ではありません。相談窓口の一覧は
            <a href="#consult" className="font-medium text-primary underline">
              本記事末尾の表
            </a>
            にまとめています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            あわせて、
            <strong className="text-text-main">
              業者とのやり取り（メッセージ・着信履歴・契約画面・振込記録）は消さずに保全
            </strong>
            してください。相談先で状況を正確に伝えるための重要な材料になります。証拠保全の考え方や交渉時の注意点は、
            <Link
              href="/articles/sakibarai-kaitori-cancel/"
              className="font-medium text-primary underline"
            >
              先払い買取のキャンセル料・違約金の仕組み
            </Link>
            と
            <Link
              href="/articles/sakibarai-kaitori-shiharaenai/"
              className="font-medium text-primary underline"
            >
              先払い買取の代金が支払えない場合の対処法
            </Link>
            で詳しく解説しています。
          </p>
          <p className="leading-relaxed text-text-light">
            なお、商品の代金を後払いにして現金を得る「後払い現金化」も、商品を介して金銭をやり取りする類似の形態であり、同様の連絡リスクが指摘されています。詳しくは
            <Link
              href="/articles/atobarai-genkinka/"
              className="font-medium text-primary underline"
            >
              後払い現金化の仕組みと危険性
            </Link>
            をご覧ください。
          </p>
        </section>

        {/* ── 正規の選択肢 ─── */}
        <section id="alternatives" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            お金が必要なときの正規の選択肢
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「在籍確認なしで現金化を調べている」ということは、いま現金が必要で、かつ周囲に知られたくない状況のはずです。その必要性自体は否定しません。だからこそ、危険なスキームではなく正規の選択肢を確認してください。立場によって取れる手段が異なります。
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
                が使えます。取引先に知られたくない場合も、2社間ファクタリングであれば売掛先への通知なしで資金化できる仕組みが一般的です。正規のファクタリングと先払い買取の違いは、
                <Link
                  href="/articles/sakibarai-kaitori/"
                  className="font-medium text-primary underline"
                >
                  先払い買取とは？違法性と危険な仕組み
                </Link>
                の比較表で確認できます。
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
                で、公的な支援制度や債務整理を含めた選択肢を確認してください。借金の返済に追われている場合は、財務局の多重債務相談窓口（0570-016811）も利用できます。公的窓口への相談内容が勤務先に伝えられることは、通常ありません。
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
            先払い買取に関して不安がある場合、すでに申し込んでしまった場合、業者からの連絡に困っている場合は、一人で抱え込まず次の窓口へ相談してください。いずれも公的機関・公的団体の窓口です。
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
              href="/articles/sakibarai-kaitori-shinsa-nashi/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                先払い買取に審査がないのはなぜか
              </p>
              <p className="mt-1 text-sm text-text-light">
                「審査なし」で現金を渡せてしまう構造そのものの危険性を解説
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
                先払い買取のキャンセル料・違約金の仕組み
              </p>
              <p className="mt-1 text-sm text-text-light">
                期日までに商品を送れない場合に請求される金銭の構造と注意点
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
            「知られずに使えるか」ではなく「関わらない」が結論です
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            在籍確認がないことは安心材料ではなく、審査の枠組みの外で金銭が渡される構造のサインにあたりうるものです。先払い買取の仕組み全体と正規の選択肢を、ピラー記事で確認してください。
          </p>
          <Link href="/articles/sakibarai-kaitori/" className="btn-cta mt-6 text-base">
            先払い買取の仕組みと危険性を確認する
          </Link>
        </section>
      </div>
    </>
  );
}
