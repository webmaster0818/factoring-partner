import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "請求書の先払いサービスとは？仕組みと対応サービス比較",
  description:
    "請求書の先払いサービスの実態は、法的にはファクタリング（債権譲渡）です。入金日を待たずに請求書を資金化する仕組み、給与の先払い・前払いサービスとの違い、対応サービスの比較を公式確認済みデータで解説します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/seikyusho-sakibarai/",
  },
  openGraph: {
    title:
      "請求書の先払いサービスとは？仕組みと対応サービス比較",
    description:
      "請求書の先払い＝ファクタリング（債権譲渡）の仕組みと、給与先払いサービスとの違い、対応サービスの比較を解説します。",
    url: "https://hyogo-shihoushoshi.jp/articles/seikyusho-sakibarai/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const sakibaraiServices = [
  {
    name: "ラボル",
    href: "/reviews/labol/",
    fee: "一律10%（税込）",
    speed: "最短60分",
    amount: "1万円〜（上限は審査により決定）",
    feature: "土日祝含む24時間365日対応。必要書類は請求書と本人確認書類のみ",
  },
  {
    name: "ペイトナー",
    href: "/reviews/paytner/",
    fee: "一律10%",
    speed: "最短10分",
    amount: "初回1万〜25万円 / 2回目以降上限300万円",
    feature: "AI審査で最速クラス。フリーランス・個人事業主向け",
  },
  {
    name: "FREENANCE",
    href: "/reviews/freenance/",
    fee: "3%〜10%",
    speed: "最短即日",
    amount: "1万円〜（上限は与信次第）",
    feature: "損害賠償保険「あんしん補償」が無料付帯。フリーナンス口座未設定時は一律10%",
  },
  {
    name: "QuQuMo",
    href: "/reviews/ququmo/",
    fee: "1%〜（上限非公表）",
    speed: "最短2時間",
    amount: "制限なし",
    feature: "法人・個人事業主対応。まとまった金額の請求書にも対応",
  },
  {
    name: "OLTA",
    href: "/reviews/olta/",
    fee: "2%〜9%",
    speed: "最短即日",
    amount: "制限なし",
    feature: "手数料上限9%を明示。法人・個人事業主対応のクラウドファクタリング",
  },
];

const differences = [
  {
    name: "請求書の先払いサービス（本記事のテーマ）",
    who: "フリーランス・個人事業主・法人",
    what: "事業で発行した請求書（売掛債権）",
    legal: "ファクタリング＝債権譲渡（民法466条）。合法",
    note:
      "事業者が取引先宛ての請求書を売却して早期資金化する。借入ではないため負債にならない。",
  },
  {
    name: "給与の前払い・先払いサービス（福利厚生型）",
    who: "会社員（勤務先が制度を導入している場合）",
    what: "働いた分の給与",
    legal: "勤務先の制度として提供される。合法",
    note:
      "企業が福利厚生として導入し、従業員が給与日前に働いた分を受け取れる仕組み。個人が外部業者と直接契約するものではない。",
  },
  {
    name: "給与ファクタリング（個人向け・要注意）",
    who: "会社員個人",
    what: "給与を受け取る権利",
    legal: "貸金業に該当（金融庁見解・裁判例）。無登録業者は違法",
    note:
      "「給与の買取」をうたうが、実質は貸付。無登録業者による違法な高利貸しの被害が多発しており、利用してはいけない。",
  },
  {
    name: "先払い買取・現金化（個人向け・要注意）",
    who: "個人",
    what: "手元にない商品の画像など",
    legal: "実態が貸付なら無登録貸金業のおそれ（金融庁・消費者庁・警察庁等が注意喚起）",
    note:
      "商品売買を装いキャンセル（契約解除）を前提に現金を渡し、高額な違約金名目で回収する手口。事業者向けの請求書先払いとは別物で、利用してはいけない。",
  },
];

const faqs = [
  {
    question: "請求書の先払いサービスは違法ではないのですか？",
    answer:
      "事業者向けの請求書先払いサービスは、法的にはファクタリング（債権譲渡）であり、民法で認められた合法的な取引です。ただし、個人の給与を対象とする「給与ファクタリング」は貸金業に該当し、無登録業者によるサービスは違法です。同じ「先払い」という言葉でも対象がまったく異なるため、混同しないよう注意してください。",
  },
  {
    question: "先払いしてもらえるのは請求書の金額の何割くらいですか？",
    answer:
      "請求書の額面から手数料を差し引いた金額を受け取れます。当サイトで公式確認したサービスでは、手数料は一律10%（ラボル・ペイトナー）、2%〜9%（OLTA）、1%〜（QuQuMo・上限非公表）などです。例えば手数料10%なら、30万円の請求書で27万円が先払いされる計算です。",
  },
  {
    question: "「先払い」と「ファクタリング」はどちらで申し込んでも同じですか？",
    answer:
      "同じです。「先払い」はサービスの分かりやすい愛称・説明であり、申し込むサービスの法的な仕組みはファクタリング（債権譲渡）です。契約時には「債権譲渡契約」を締結することになります。契約書の名目が「金銭消費貸借（貸付）」になっている場合は別物なので、その場では契約しないでください。",
  },
  {
    question: "先払いを受けた後、取引先からの入金はどうなりますか？",
    answer:
      "2社間方式の場合、取引先からの入金は通常どおり自社の口座に入り、それをサービス側へ期日どおり支払って取引完了です。取引先に先払いの利用を知られることはありません。3社間方式の場合は、取引先がサービス側へ直接支払います。",
  },
  {
    question: "会社員が給料日前にお金が必要な場合はどうすればよいですか？",
    answer:
      "まず勤務先に給与前払い制度（福利厚生型）があるか確認してください。制度がない場合でも、SNSや広告で見かける「給与買取」「給与の先払い」業者は利用しないでください。給与ファクタリングは貸金業に該当し、無登録業者は違法なヤミ金です。詳しくは給与ファクタリングの違法性の解説記事をご覧ください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "請求書の先払いサービスとは？仕組みと対応サービス比較",
  description:
    "請求書の先払い＝ファクタリング（債権譲渡）の仕組みと、給与先払いサービスとの違い、対応サービスの比較を解説します。",
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
    "@id": "https://hyogo-shihoushoshi.jp/articles/seikyusho-sakibarai/",
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

export default function SeikyushoSakibaraiPage() {
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
          { label: "請求書の先払いサービス" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            基礎知識
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            請求書の先払いサービスとは？
            <br className="hidden md:block" />
            仕組みと対応サービス比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            取引先からの入金日を待たず、請求書の代金を先に受け取れる「先払いサービス」。その実態と仕組み、混同しやすい給与の先払いとの違い、対応サービスを解説します。
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
                「請求書の先払い」と呼ばれるサービスの実態は、
                <strong className="text-text-main">請求書買取＝ファクタリング（債権譲渡）</strong>
                。合法的な仕組みです
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                手数料を差し引いた金額が先に入金され、取引先からの入金後にサービス側へ支払う流れ
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                <strong className="text-text-main">
                  「給与の先払い（給与ファクタリング）」は別物
                </strong>
                。貸金業に該当し、無登録業者は違法なので利用しない
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                対応サービスは最短10分〜即日入金。1万円の請求書から先払い可能
              </span>
            </li>
          </ul>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#what-is" className="hover:underline">
                1. 請求書の先払いサービスの実態
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:underline">
                2. 先払いの流れとコスト
              </a>
            </li>
            <li>
              <a href="#kyuyo" className="hover:underline">
                3. 給与の先払いサービスとの違い（重要）
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                4. 請求書の先払いに対応するサービス比較
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                5. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 実態 ─── */}
        <section id="what-is" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            請求書の先払いサービスの実態
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">請求書の先払いサービス</strong>
            とは、取引先への請求書の支払い期日（通常30〜60日後）を待たずに、その代金を先に受け取れるサービスの呼び名です。フリーランス・個人事業主向けのサービスを中心に「先払い」という親しみやすい表現が使われています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            ただし「先払い」といっても、取引先が支払いを早めてくれるわけでも、サービス会社がお金を貸してくれるわけでもありません。実態は
            <strong className="text-text-main">
              請求書（売掛債権）をサービス会社に売却して代金を受け取る「請求書買取」であり、法的にはファクタリング（債権譲渡）という仕組み
            </strong>
            です。債権譲渡は民法466条で認められており、貸付ではないため利息も発生せず、信用情報にも影響しません。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            つまり「先払い」「請求書買取」「ファクタリング」は、同じサービスを別の角度から呼んでいるだけです。仕組みそのものの詳しい解説は
            <Link
              href="/articles/what-is-factoring/"
              className="font-medium text-primary underline"
            >
              ファクタリングとは？の記事
            </Link>
            を、合法である法的根拠は
            <Link
              href="/articles/is-it-legal/"
              className="font-medium text-primary underline"
            >
              ファクタリングは違法？の解説
            </Link>
            をご覧ください。
          </p>
        </section>

        {/* ── 流れとコスト ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            先払いの流れとコスト
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            もっとも利用が多い2社間方式（取引先に知られない方式）での流れは次のとおりです。
          </p>
          <div className="mb-6 rounded-lg border border-border bg-section-bg p-6">
            <ol className="space-y-4 text-sm text-text-light">
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  1
                </span>
                <span>
                  <strong className="text-text-main">請求書を提出</strong>
                  ｜取引先に発行済みの支払い期日前の請求書をサービスにアップロードする
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  2
                </span>
                <span>
                  <strong className="text-text-main">審査</strong>
                  ｜サービス側が取引先（売掛先）の信用力と請求書の実在性を審査する
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  3
                </span>
                <span>
                  <strong className="text-text-main">先払い入金</strong>
                  ｜請求書の額面から手数料を差し引いた金額が入金される（最短10分〜即日）
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  4
                </span>
                <span>
                  <strong className="text-text-main">精算</strong>
                  ｜支払い期日に取引先から入金されたら、その金額をサービス側へ支払って完了
                </span>
              </li>
            </ol>
          </div>
          <p className="mb-4 leading-relaxed text-text-light">
            コストは買取時の手数料のみで、一般的な目安は2社間方式で8〜18%、3社間方式で1〜9%（会社により異なる）です。手数料の決まり方や安く抑える方法は
            <Link
              href="/articles/fee-guide/"
              className="font-medium text-primary underline"
            >
              手数料の相場と計算方法ガイド
            </Link>
            で詳しく解説しています。
          </p>
          <div className="rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">先払いが向いているケース</p>
            <p className="text-sm leading-relaxed text-text-light">
              「今月の家賃や外注費の支払いが、取引先からの入金より先に来てしまう」という支払いサイトのズレの解消が典型的な使いどころです。継続的に資金が不足している場合は手数料が累積するため、単発・短期のつなぎとして使うのが健全な使い方です。
            </p>
          </div>
        </section>

        {/* ── 給与先払いとの違い ─── */}
        <section id="kyuyo" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            給与の先払いサービスとの違い（重要）
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「先払いサービス」という言葉は、会社員向けの「給与の前払い・先払い」でも使われるため、混同されがちです。しかし対象も法的な扱いもまったく異なります。特に
            <strong className="text-text-main">
              個人の給与を「買い取る」とうたう給与ファクタリングは、貸金業に該当するとの金融庁見解・裁判例があり、無登録業者の利用は絶対に避けるべき
            </strong>
            です。
          </p>
          <div className="mb-6 space-y-4">
            {differences.map((item) => (
              <div
                key={item.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-3 text-lg font-bold text-primary">{item.name}</h3>
                <div className="mb-3 grid gap-2 text-sm md:grid-cols-3">
                  <div className="rounded bg-section-bg p-2">
                    <p className="text-xs text-text-light">対象者</p>
                    <p className="font-semibold text-text-main">{item.who}</p>
                  </div>
                  <div className="rounded bg-section-bg p-2">
                    <p className="text-xs text-text-light">先払いされるもの</p>
                    <p className="font-semibold text-text-main">{item.what}</p>
                  </div>
                  <div className="rounded bg-section-bg p-2">
                    <p className="text-xs text-text-light">法的な位置づけ</p>
                    <p className="font-semibold text-text-main">{item.legal}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-text-light">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="mb-2 font-bold text-accent">
              給与ファクタリングには手を出さない
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              給与ファクタリングは「買取」の形式をとっていても実質的な貸付とされ、貸金業登録のない業者によるサービスは違法です。法外な手数料や悪質な取り立ての被害も報告されています。違法とされる根拠や被害の実態は
              <Link
                href="/articles/salary-factoring-illegal/"
                className="font-medium text-primary underline"
              >
                給与ファクタリングの違法性の解説記事
              </Link>
              で詳しく説明しています。
            </p>
          </div>
        </section>

        {/* ── 対応サービス比較 ─── */}
        <section id="services" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            請求書の先払いに対応するサービス比較
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            請求書の先払い（＝請求書買取・ファクタリング）に対応する主なオンラインサービスです。手数料はいずれも
            <strong className="text-text-main">各社公式サイトにて2026年6月に確認した値</strong>
            です。
          </p>
          <div className="mb-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold">サービス名</th>
                  <th className="px-3 py-3 font-semibold">手数料</th>
                  <th className="px-3 py-3 font-semibold">入金速度</th>
                  <th className="px-3 py-3 font-semibold">買取可能額</th>
                </tr>
              </thead>
              <tbody>
                {sakibaraiServices.map((service, index) => (
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
                    <td className="px-3 py-3 font-bold text-accent">{service.speed}</td>
                    <td className="px-3 py-3">{service.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            {sakibaraiServices.map((service) => (
              <div
                key={service.name}
                className="rounded-lg border border-border bg-white p-4"
              >
                <p className="text-sm text-text-light">
                  <Link
                    href={service.href}
                    className="font-bold text-primary underline"
                  >
                    {service.name}
                  </Link>
                  ｜{service.feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 関連ツール・データ ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">
              先払いサービス選びに使えるツール・データ
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li>
                <Link href="/diagnosis/" className="font-medium text-primary underline">
                  無料診断（7つの質問・30秒）
                </Link>
                ｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。
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
                ｜請求書の金額から先払いされる金額の目安を計算できます。
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
              href="/articles/seikyusho-kaitori-app/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">請求書買取アプリのおすすめ</p>
              <p className="mt-1 text-sm text-text-light">
                スマホ完結で最短10分入金のサービスを比較
              </p>
            </Link>
            <Link
              href="/articles/salary-factoring-illegal/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">給与ファクタリングの違法性</p>
              <p className="mt-1 text-sm text-text-light">
                個人向け「給与買取」がなぜ危険なのかを解説
              </p>
            </Link>
            <Link
              href="/articles/seikyusho-genkinka/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">請求書を現金化する方法</p>
              <p className="mt-1 text-sm text-text-light">
                違法性の不安に正面から回答。安全な進め方
              </p>
            </Link>
            <Link
              href="/articles/sakibarai-kaitori/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">先払い買取とは？違法性と危険性</p>
              <p className="mt-1 text-sm text-text-light">
                名前が似ていても別物。金融庁等が注意喚起する現金化手口の解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            請求書の先払いに対応するサービスを比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・買取可能額を公式確認済みのデータで比較。入金日までの資金のズレを解消しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめファクタリング会社ランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
