import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "請求書を現金化する方法｜違法性はない？安全な進め方",
  description:
    "請求書の現金化は、正規のファクタリング（債権譲渡）会社を利用すれば合法です。違法・怪しいと感じる方の不安に正面から回答し、法的根拠の要点、危険な業者の見分け方、安全に現金化する5ステップを解説します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/seikyusho-genkinka/",
  },
  openGraph: {
    title:
      "請求書を現金化する方法｜違法性はない？安全な進め方",
    description:
      "請求書の現金化は正規のファクタリング会社なら合法。法的根拠・危険な業者の見分け方・安全な進め方5ステップを解説します。",
    url: "https://hyogo-shihoushoshi.jp/articles/seikyusho-genkinka/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const dangerSigns = [
  {
    title: "契約書に「貸付」「返済」「利息」の文言がある",
    description:
      "請求書の現金化（債権譲渡）に利息や分割返済は存在しません。契約書が金銭消費貸借契約になっていたり、返済スケジュールが提示されたりする場合、それは買取を装った貸付です。貸金業登録のない業者の貸付はヤミ金にあたるため、その場で契約を中止してください。",
  },
  {
    title: "手数料が相場からかけ離れて高い・説明されない",
    description:
      "一般的な手数料の目安は2社間で8〜18%、3社間で1〜9%（会社により異なる）です。月利換算で数十%になるような手数料や、内訳を説明しない業者、契約直前に手数料を吊り上げる業者は避けましょう。複数社の見積もりを取れば、異常な料率にはすぐ気づけます。",
  },
  {
    title: "会社情報が確認できない",
    description:
      "所在地がバーチャルオフィスのみ・固定電話がない・運営会社の登記が確認できない・担当者が個人の携帯番号でしか連絡してこない、といった業者は危険です。正規の会社は運営会社名・所在地・代表者を公式サイトで公開しています。",
  },
  {
    title: "「審査なし」「誰でも現金化」をうたう",
    description:
      "正規の請求書買取では、売掛先の信用力と請求書の実在性を必ず審査します。審査なしをうたう業者は、回収リスクを法外な手数料や強引な取り立てで補う前提の可能性が高く、トラブルの温床です。",
  },
];

const safeSteps = [
  {
    step: "STEP1. 現金化したい請求書を選ぶ",
    description:
      "支払い期日前で、商品・サービスの提供が完了している請求書（確定債権）が対象です。売掛先が法人で信用力が高い請求書ほど、審査に通りやすく手数料も下がる傾向があります。期日超過の請求書は対象外が一般的です。",
  },
  {
    step: "STEP2. 正規の会社を2〜3社ピックアップする",
    description:
      "運営会社の実在性・契約形態の明示・手数料の透明性を確認して候補を絞ります。当サイトの審査済み業者データベース（手数料は2026年6月に各社公式確認済み）やランキングを起点にすると、悪質業者を最初から除外できます。",
  },
  {
    step: "STEP3. 相見積もりで手数料を比較する",
    description:
      "同じ請求書でも会社によって提示される手数料は異なります。2〜3社に見積もりを依頼し、手数料と入金タイミングを比較しましょう。見積もり自体は無料の会社がほとんどで、提示額に納得できなければ断って問題ありません。",
  },
  {
    step: "STEP4. 契約内容を確認して締結する",
    description:
      "契約書が「債権譲渡契約」であること、償還請求権がない（ノンリコース＝売掛先が倒産しても返済義務がない）こと、手数料以外の費用の有無を確認します。少しでも貸付の要素（利息・分割返済）があれば締結しないでください。",
  },
  {
    step: "STEP5. 入金確認と期日の精算",
    description:
      "契約後、手数料を差し引いた金額が入金されます（最短10分〜即日のサービスもあります）。2社間方式の場合は、後日売掛先から入金された代金を期日どおりサービス側へ支払って完了です。この精算を遅らせると契約違反になるため注意しましょう。",
  },
];

const genkinkaServices = [
  {
    name: "ペイトナー",
    href: "/reviews/paytner/",
    fee: "一律10%",
    speed: "最短10分",
    target: "フリーランス・個人事業主",
  },
  {
    name: "ラボル",
    href: "/reviews/labol/",
    fee: "一律10%（税込）",
    speed: "最短60分",
    target: "フリーランス・個人事業主",
  },
  {
    name: "QuQuMo",
    href: "/reviews/ququmo/",
    fee: "1%〜（上限非公表）",
    speed: "最短2時間",
    target: "法人・個人事業主",
  },
  {
    name: "OLTA",
    href: "/reviews/olta/",
    fee: "2%〜9%",
    speed: "最短即日",
    target: "法人・個人事業主",
  },
];

const faqs = [
  {
    question: "請求書の現金化は違法ではないですか？",
    answer:
      "正規のファクタリング会社を通じた請求書の現金化は違法ではありません。法的には民法466条で認められた債権譲渡という取引です。ただし、債権譲渡を装って実質的な貸付（利息・分割返済を伴う契約）を行う無登録業者は違法です。契約書が「債権譲渡契約」であることを確認すれば、違法業者を避けられます。",
  },
  {
    question: "請求書の現金化が「怪しい」と言われるのはなぜですか？",
    answer:
      "ファクタリング業界には銀行のような登録制度がなく、過去に悪質業者を装った違法貸付（給与ファクタリングや偽装ファクタリング）が社会問題化したためです。仕組み自体は大手銀行系の会社も提供する正当な金融サービスであり、業者選びを正しく行えば怪しい取引ではありません。",
  },
  {
    question: "請求書を現金化すると、いくら受け取れますか？",
    answer:
      "請求書の額面から手数料を差し引いた金額です。当サイトで公式確認したサービスの例では、手数料一律10%のペイトナーなら50万円の請求書で45万円、2%〜9%のOLTAなら条件次第で45万5,000円〜49万円が目安になります。実際の料率は売掛先の信用力などで変わるため、見積もりで確認してください。",
  },
  {
    question: "取引先に知られずに請求書を現金化できますか？",
    answer:
      "できます。2社間方式を選べば、取引先への通知や承諾なしで現金化でき、取引先からの入金も通常どおり自社口座に入ります。本記事で紹介したオンライン完結型サービスはいずれも2社間方式に対応しています。",
  },
  {
    question: "審査に通りやすい請求書はありますか？",
    answer:
      "売掛先が上場企業・官公庁など信用力の高い法人で、継続取引の実績があり、支払い期日が近い請求書は審査に通りやすく手数料も低くなる傾向があります。審査で見られるのは利用者自身より売掛先の信用力のため、赤字決算や税金滞納があっても利用できる場合があります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "請求書を現金化する方法｜違法性はない？安全な進め方",
  description:
    "請求書の現金化は正規のファクタリング会社なら合法。法的根拠・危険な業者の見分け方・安全な進め方5ステップを解説します。",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
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
    "@id": "https://hyogo-shihoushoshi.jp/articles/seikyusho-genkinka/",
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

export default function SeikyushoGenkinkaPage() {
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
          { label: "請求書の現金化" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            安全な資金調達
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            請求書を現金化する方法
            <br className="hidden md:block" />
            違法性はない？安全な進め方
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            「請求書の現金化って違法じゃないの？」という不安に正面から回答します。合法である法的根拠、危険な業者の見分け方、安全に現金化する5ステップを解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、手数料・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* 結論ボックス */}
        <div className="mb-12 rounded-lg border border-secondary/30 bg-teal-50 p-6">
          <p className="mb-3 font-bold text-secondary">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-light">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                請求書の現金化は、
                <strong className="text-text-main">
                  正規のファクタリング（債権譲渡）会社を使えば合法
                </strong>
                。民法466条に根拠がある
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                違法なのは「買取」を装った実質的な貸付（偽装ファクタリング）と、個人の給与を対象にした給与ファクタリング
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                危険な業者は「貸付・返済・利息の文言」「異常な手数料」「会社情報なし」で見分けられる
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                クレジットカード現金化とはまったく別物。事業の請求書なら正当な資金調達手段
              </span>
            </li>
          </ul>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#legal" className="hover:underline">
                1. 請求書の現金化に違法性はない（法的根拠）
              </a>
            </li>
            <li>
              <a href="#illegal-cases" className="hover:underline">
                2. 違法になるのはどんなケースか
              </a>
            </li>
            <li>
              <a href="#danger" className="hover:underline">
                3. 危険な業者の見分け方4つ
              </a>
            </li>
            <li>
              <a href="#steps" className="hover:underline">
                4. 安全に現金化する5ステップ
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                5. 現金化に対応する主なサービス
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 法的根拠 ─── */}
        <section id="legal" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            請求書の現金化に違法性はない（法的根拠）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            結論から言うと、
            <strong className="text-text-main">
              事業者が発行した請求書を専門会社に売却して現金化することは違法ではありません
            </strong>
            。「現金化」という言葉の響きから怪しい取引を連想する方も多いですが、この取引の正体は
            <strong className="text-text-main">
              ファクタリングと呼ばれる債権譲渡
            </strong>
            で、れっきとした金融サービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            法的根拠の要点は次のとおりです。第一に、債権（請求書が表す代金を受け取る権利）の譲渡は民法466条で明文で認められています。第二に、2020年施行の改正民法により、契約に譲渡禁止特約があっても債権譲渡は原則有効となり、より利用しやすくなりました。第三に、債権の売買は金銭の貸付ではないため、貸金業法や利息制限法の適用外であり、貸金業登録がなくても適法に営めます。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            条文レベルの詳しい解説は
            <Link
              href="/articles/legal-basis/"
              className="font-medium text-primary underline"
            >
              ファクタリングの法的根拠（民法466条）の解説
            </Link>
            を、「違法かどうか」の論点を網羅した解説は
            <Link
              href="/articles/is-it-legal/"
              className="font-medium text-primary underline"
            >
              ファクタリングは違法？合法？の記事
            </Link>
            をご覧ください。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-bold text-text-main">
              クレジットカード現金化との違い
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              同じ「現金化」という言葉でも、クレジットカードのショッピング枠の現金化はカード会社の規約違反であり、強制解約や一括請求のリスクがある行為です。一方、請求書の現金化は自分が正当に保有する売掛債権の売却であり、誰の規約にも法律にも反しません。言葉が似ているだけで、性質はまったく異なります。
            </p>
          </div>
        </section>

        {/* ── 違法になるケース ─── */}
        <section id="illegal-cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            違法になるのはどんなケースか
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「請求書の現金化＝合法」には前提があります。取引が本当に債権の売買である場合です。次の2つのケースは違法であり、「現金化は怪しい」というイメージの原因にもなっています。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-accent">
                偽装ファクタリング（実質的なヤミ金）
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                債権譲渡の形式をとりながら、実態は高利の貸付になっているケースです。売掛先が支払えない場合に利用者へ全額の弁済を求める（償還請求権つき）、分割返済や利息を設定する、債権額に比べて著しく低い買取額を提示するといった契約は、裁判例で貸付と認定されています。貸金業登録のない業者によるこうした契約は違法です。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-accent">
                給与ファクタリング（個人の給与の現金化）
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                会社員の給与を「買い取る」形の現金化は、金融庁の見解や裁判例で貸金業に該当するとされており、無登録業者によるサービスは違法です。本記事で扱う「事業の請求書の現金化」とは対象がまったく異なります。詳しくは
                <Link
                  href="/articles/salary-factoring-illegal/"
                  className="font-medium text-primary underline"
                >
                  給与ファクタリングの違法性の解説
                </Link>
                をご覧ください。
              </p>
            </div>
          </div>
        </section>

        {/* ── 危険な業者の見分け方 ─── */}
        <section id="danger" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            危険な業者の見分け方4つ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリング業界には登録制度がないため、正規の会社と悪質な業者が混在しています。以下の4つのサインのどれか1つでも当てはまる業者は避けてください。より詳しいチェックリストは
            <Link
              href="/articles/scam-detection/"
              className="font-medium text-primary underline"
            >
              悪質業者の見分け方の記事
            </Link>
            にまとめています。
          </p>
          <div className="space-y-6">
            {dangerSigns.map((sign, index) => (
              <div
                key={sign.title}
                className="rounded-lg border border-accent/30 bg-orange-50 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {sign.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {sign.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 安全な進め方 ─── */}
        <section id="steps" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            安全に現金化する5ステップ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            危険な業者を避ける知識を押さえたら、あとは手順どおりに進めるだけです。初めてでも以下の5ステップで安全に現金化できます。
          </p>
          <div className="space-y-4">
            {safeSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-lg border border-border bg-white p-5"
              >
                <h3 className="mb-2 font-bold text-primary">{item.step}</h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 対応サービス ─── */}
        <section id="services" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            現金化に対応する主なサービス
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            当サイトが運営会社・契約形態・手数料の透明性を確認したサービスの例です（手数料は各社公式サイトにて2026年6月確認）。いずれもオンライン完結・2社間方式に対応しており、取引先に知られず現金化できます。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold">サービス名</th>
                  <th className="px-3 py-3 font-semibold">手数料</th>
                  <th className="px-3 py-3 font-semibold">入金速度</th>
                  <th className="px-3 py-3 font-semibold">対象</th>
                </tr>
              </thead>
              <tbody>
                {genkinkaServices.map((service, index) => (
                  <tr
                    key={service.name}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-3 py-3 font-semibold">
                      <Link href={service.href} className="text-primary underline">
                        {service.name}
                      </Link>
                    </td>
                    <td className="px-3 py-3">{service.fee}</td>
                    <td className="px-3 py-3 font-bold text-accent">
                      {service.speed}
                    </td>
                    <td className="px-3 py-3">{service.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            より多くの選択肢から比較したい方は、
            <Link href="/ranking/" className="font-medium text-primary underline">
              おすすめランキング
            </Link>
            や
            <Link
              href="/articles/company-directory/"
              className="font-medium text-primary underline"
            >
              審査済み業者データベース（49社+）
            </Link>
            をご活用ください。
          </p>
        </section>

        {/* ── 関連ツール・データ ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">
              安全な現金化に役立つツール・データ
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li>
                <Link href="/diagnosis/" className="font-medium text-primary underline">
                  無料診断（7つの質問・30秒）
                </Link>
                ｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。
              </li>
              <li>
                <Link
                  href="/articles/company-directory/"
                  className="font-medium text-primary underline"
                >
                  審査済み業者データベース（49社+）
                </Link>
                ｜運営実在性・契約形態・手数料の透明性で審査した業者のみ掲載。
              </li>
              <li>
                <Link href="/ranking/" className="font-medium text-primary underline">
                  おすすめファクタリング会社ランキング
                </Link>
                ｜編集部が厳選した順位で比較できます。
              </li>
              <li>
                <Link href="/simulator/" className="font-medium text-primary underline">
                  手数料シミュレーター
                </Link>
                ｜請求書の金額から手取り額の目安を計算できます。
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

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/seikyusho-kaitori/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">請求書買取とは？基礎ガイド</p>
              <p className="mt-1 text-sm text-text-light">
                仕組み・手数料相場・サービスの選び方を網羅
              </p>
            </Link>
            <Link
              href="/articles/scam-detection/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">悪質業者の見分け方</p>
              <p className="mt-1 text-sm text-text-light">
                契約前に確認すべきチェックポイントを詳しく解説
              </p>
            </Link>
            <Link
              href="/articles/is-it-legal/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングは違法？合法？</p>
              <p className="mt-1 text-sm text-text-light">
                合法性の論点を法的根拠から網羅的に解説
              </p>
            </Link>
            <Link
              href="/articles/urikakekin-genkinka/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">売掛金を現金化する方法</p>
              <p className="mt-1 text-sm text-text-light">
                売掛金という切り口から資金化の選択肢を整理
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            審査済みの会社から安全に選びましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            運営会社の実在性・契約形態・手数料の透明性を確認した会社だけを掲載しています。危険な業者を避けて、安心して請求書を現金化してください。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめファクタリング会社ランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
