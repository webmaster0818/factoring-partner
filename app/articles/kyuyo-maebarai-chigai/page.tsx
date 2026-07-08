import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "給与前払いサービスと報酬前払い（ファクタリング）の違い｜給与ファクタリングに注意",
  description:
    "「前払い」と名の付く3つのサービスを明確に区別して解説。①会社員向けの給与前払いサービス（勤務先導入型）②フリーランスの報酬前払い（事業債権のファクタリング・合法）③給与ファクタリング（金融庁が注意喚起する違法性の高い取引）。混同による被害を防ぐための見分け方を紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/kyuyo-maebarai-chigai/",
  },
  openGraph: {
    title:
      "給与前払いサービスと報酬前払い（ファクタリング）の違い｜給与ファクタリングに注意",
    description:
      "会社員向け給与前払い・フリーランスの報酬前払い・違法な給与ファクタリング。3つの「前払い」の違いと見分け方。",
    url: "https://hyogo-shihoushoshi.jp/articles/kyuyo-maebarai-chigai/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const threeTypes = [
  {
    label: "①",
    name: "給与前払いサービス（会社員向け）",
    target: "会社員・アルバイトの給与",
    who: "勤務先の企業が福利厚生として導入",
    legal: "合法（勤務先導入が前提）",
    color: "secondary" as const,
    description:
      "働いた分の給与の一部を、給料日前に受け取れる制度です。「前給」「Paymeプレミアム」などのサービスを勤務先の企業が導入する形で提供されます。重要なのは、これは勤務先が導入して初めて使える仕組みだという点です。勤務先が導入していない場合、従業員が個人で申し込んで利用することは基本的にできません。",
  },
  {
    label: "②",
    name: "報酬前払い（フリーランス向けファクタリング）",
    target: "フリーランス・個人事業主の報酬（事業の売掛債権）",
    who: "ファクタリング会社（本人が直接利用できる）",
    legal: "合法（債権の売買）",
    color: "secondary" as const,
    description:
      "フリーランスがクライアントに発行した請求書（事業の売掛債権）をファクタリング会社に売却し、入金日前に報酬相当額を受け取る仕組みです。対象が「給与」ではなく「事業の債権」である点が①③との決定的な違いで、正規の債権売買として合法です。ペイトナー（手数料一律10%・最短10分入金）やラボル（手数料一律10%税込・最短60分・24時間365日対応）などが代表的です（いずれも公式サイトにて2026年6月確認）。",
  },
  {
    label: "③",
    name: "給与ファクタリング（違法性の高い取引）",
    target: "個人（会社員）の給与債権",
    who: "無登録の業者（貸金業登録なし）",
    legal: "貸金業登録なしは違法（金融庁が注意喚起）",
    color: "accent" as const,
    description:
      "個人が勤務先から受け取る予定の給与（給与債権）を業者が「買い取る」形をとる取引です。金融庁は2020年3月に「給与ファクタリングは貸金業に該当する」との見解を公表しており、貸金業登録のない業者が行えば貸金業法違反です。手数料を年利換算すると数百%に達するケースが大半で、闇金融と同等の被害が多数報告されています。①②と名前が似ているだけの全く別物であり、絶対に利用しないでください。",
  },
];

const checkpoints = [
  {
    question: "対象は「給与」か「事業の請求書」か？",
    detail:
      "会社からもらう給与を早く受け取る話なら①か③、自分が事業者として発行した請求書の話なら②です。給与が対象なのに「勤務先の導入不要・個人で申込OK」を謳う業者は、③の可能性が極めて高いです。",
  },
  {
    question: "誰が提供しているか？",
    detail:
      "①は勤務先が契約したサービス経由で利用します。②は事業者向けのファクタリング会社です。SNSやインターネット広告で個人に直接「給与を即日現金化」と勧誘してくるのは③の典型パターンです。",
  },
  {
    question: "「審査なし」「ブラックOK」を強調していないか？",
    detail:
      "正規のサービスには必ず審査があります。「審査なし」「ブラックOK」「在籍確認なし」といった文言は、違法業者が使う典型的な勧誘キーワードです。",
  },
];

const faqs = [
  {
    question: "給与前払いサービスと給与ファクタリングは何が違いますか？",
    answer:
      "給与前払いサービスは勤務先の企業が福利厚生として導入する制度で、働いた分の給与の一部を給料日前に受け取れる合法的な仕組みです。一方、給与ファクタリングは外部の業者が個人の給与債権を「買い取る」形をとる取引で、金融庁が貸金業に該当すると判断しており、貸金業登録のない業者が行えば違法です。提供者が「勤務先」か「外部の無登録業者」かが決定的な違いです。",
  },
  {
    question: "勤務先に給与前払い制度がない場合、個人で似たサービスを使えますか？",
    answer:
      "給与を対象にしたものは使えません。給与前払いサービスは勤務先の導入が前提の仕組みです。勤務先に制度がないからといって、個人に直接「給与の前払い・現金化」を持ちかける業者を利用するのは危険です。それは給与ファクタリングであり、違法な貸付けの被害に遭う可能性が高いためです。",
  },
  {
    question: "フリーランスの報酬前払いはなぜ合法なのですか？",
    answer:
      "フリーランスの報酬前払いは、事業者が発行した請求書（事業の売掛債権）の売買だからです。事業者間の売掛債権の譲渡は民法で認められた正規の取引で、貸付けには該当しません。一方、給与債権は労働基準法の賃金直接払いの原則により本人にしか支払われないため、給与の「買取」は実質的な貸付けと判断されます。この法的な構造の違いが合法・違法を分けています。",
  },
  {
    question: "会社員が給料日前にお金が必要な場合、安全な方法はありますか？",
    answer:
      "まず勤務先に給与前払い制度・前借り制度がないか確認してください。制度がない場合は、正規の貸金業登録業者（大手消費者金融等）や、低金利の公的制度（生活福祉資金貸付制度など）が選択肢になります。年利換算で数百%になる給与ファクタリングや後払い現金化サービスは絶対に避けてください。詳しくは給与ファクタリングの解説記事で代替手段を紹介しています。",
  },
  {
    question: "「前払い」を名乗る業者が違法かどうか見分ける方法はありますか？",
    answer:
      "3点を確認してください。①対象が「給与」なのに勤務先を介さず個人で申し込める、②貸金業の登録番号が確認できない、③「審査なし」「ブラックOK」を強調している——これらに当てはまる場合は違法な給与ファクタリングの可能性が高いです。判断に迷う場合は金融庁の金融サービス利用者相談室（0570-016811）に相談できます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "給与前払いサービスと報酬前払い（ファクタリング）の違い｜給与ファクタリングに注意",
  description:
    "会社員向け給与前払い・フリーランスの報酬前払い・違法な給与ファクタリング。3つの「前払い」の違いと見分け方。",
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
    "@id": "https://hyogo-shihoushoshi.jp/articles/kyuyo-maebarai-chigai/",
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

export default function KyuyoMaebaraiChigaiPage() {
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
          { label: "給与前払いサービスと報酬前払いの違い" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-white">
            混同注意
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            給与前払いサービスと報酬前払い（ファクタリング）の違い
            <br className="hidden md:block" />
            給与ファクタリングに注意
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            「前払い」と名の付くサービスには、合法的な制度と違法性の高い取引が混在しています。会社員向け給与前払い・フリーランスの報酬前払い・給与ファクタリングの3つを明確に区別し、見分け方を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論 ─── */}
        <section className="mb-10 rounded-lg border-2 border-primary bg-blue-50 p-6">
          <p className="mb-2 text-lg font-bold text-primary">この記事の結論</p>
          <p className="leading-relaxed text-text-light">
            「前払い」には3種類あります。<strong className="text-text-main">①会社員向けの給与前払いサービスは勤務先が導入する合法的な制度</strong>（本人が個人で申し込めるものではない）、<strong className="text-text-main">②フリーランスの報酬前払いは事業債権を売却する正規のファクタリングで合法</strong>、<strong className="text-text-main">③給与ファクタリングは個人の給与債権の買取を装った取引で、金融庁が「貸金業に該当」と判断しており、貸金業登録のない業者が行えば違法</strong>です。対象が「給与か、事業の請求書か」「提供者が勤務先か、外部業者か」で見分けられます。
          </p>
        </section>

        {/* ── PR開示 ─── */}
        <p className="mb-10 rounded-lg border border-border bg-section-bg p-4 text-xs leading-relaxed text-text-light">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、手数料・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#three-types" className="hover:underline">
                1. 「前払い」を名乗る3つのサービスの正体
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                2. 3つの違いがひと目でわかる比較表
              </a>
            </li>
            <li>
              <a href="#illegal" className="hover:underline">
                3. 給与ファクタリングはなぜ危険か（要点）
              </a>
            </li>
            <li>
              <a href="#checkpoints" className="hover:underline">
                4. 違法な業者を見分ける3つのチェックポイント
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                5. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 3つの正体 ─── */}
        <section id="three-types" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            「前払い」を名乗る3つのサービスの正体
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            同じ「前払い」という言葉が使われていても、対象・提供者・法的な位置づけはまったく異なります。1つずつ確認しましょう。
          </p>
          <div className="space-y-8">
            {threeTypes.map((type) => (
              <div key={type.name} className="rounded-lg border border-border bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white ${type.color === "accent" ? "bg-accent" : "bg-secondary"}`}
                  >
                    {type.label}
                  </span>
                  <h3 className="text-lg font-bold text-text-main">{type.name}</h3>
                </div>
                <div className="mb-4 grid gap-2 text-sm md:grid-cols-3">
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">対象</p>
                    <p className="mt-1 font-semibold text-text-main">{type.target}</p>
                  </div>
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">提供者</p>
                    <p className="mt-1 font-semibold text-text-main">{type.who}</p>
                  </div>
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">法的な位置づけ</p>
                    <p className={`mt-1 font-bold ${type.color === "accent" ? "text-accent" : "text-secondary"}`}>
                      {type.legal}
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed text-text-light">{type.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            ②の報酬前払いの仕組み・対応サービスの詳細は
            <Link href="/articles/hoshu-maebarai/" className="font-medium text-primary underline">報酬の前払い・先払いサービスとは</Link>
            で解説しています。
          </p>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            3つの違いがひと目でわかる比較表
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">①給与前払いサービス</th>
                  <th className="px-4 py-3 font-semibold">②報酬前払い（ファクタリング）</th>
                  <th className="px-4 py-3 font-semibold">③給与ファクタリング</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">利用者</td>
                  <td className="px-4 py-3">会社員・アルバイト</td>
                  <td className="px-4 py-3">フリーランス・個人事業主・法人</td>
                  <td className="px-4 py-3">主に会社員（個人）</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">対象となるお金</td>
                  <td className="px-4 py-3">働いた分の給与</td>
                  <td className="px-4 py-3">事業の売掛債権（請求書）</td>
                  <td className="px-4 py-3">個人の給与債権</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">利用の前提</td>
                  <td className="px-4 py-3">勤務先がサービスを導入していること</td>
                  <td className="px-4 py-3">発行済みの請求書があること</td>
                  <td className="px-4 py-3">（前提を問わず個人に直接勧誘）</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">法的な位置づけ</td>
                  <td className="px-4 py-3 font-bold text-secondary">合法</td>
                  <td className="px-4 py-3 font-bold text-secondary">合法（債権の売買）</td>
                  <td className="px-4 py-3 font-bold text-accent">貸金業登録なしは違法</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">コスト水準</td>
                  <td className="px-4 py-3">無料〜低額の手数料が一般的</td>
                  <td className="px-4 py-3">手数料（例：一律10%等・会社による）</td>
                  <td className="px-4 py-3">年利換算で数百%に達するケースが大半</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※ ②のコスト例：ペイトナー・ラボルは手数料一律10%（公式サイトにて2026年6月確認）。会社・契約形態により異なります。
          </p>
        </section>

        {/* ── 給与ファクタリングの危険性（要点） ─── */}
        <section id="illegal" className="mb-16">
          <h2 className="mb-6 border-l-4 border-accent pl-4 text-xl font-bold text-text-main md:text-2xl">
            給与ファクタリングはなぜ危険か（要点）
          </h2>
          <div className="mb-6 rounded-lg border-2 border-accent bg-orange-50 p-6">
            <p className="mb-3 font-bold text-accent">要点だけ押さえてください</p>
            <ul className="space-y-2 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">&#9888;</span>
                <span>金融庁は2020年3月に「給与ファクタリングは貸金業に該当する」との見解を公表しており、無登録業者による給与ファクタリングは貸金業法違反です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">&#9888;</span>
                <span>手数料を年利換算すると数百%〜数千%に達するケースが大半で、出資法の上限金利（年20%）を大幅に超えます。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">&#9888;</span>
                <span>勤務先への連絡による脅迫、個人情報の悪用、法外な遅延損害金の請求などの被害事例が報告されています。</span>
              </li>
            </ul>
          </div>
          <p className="leading-relaxed text-text-light">
            違法とされる法的根拠の詳細、実際の被害事例、すでに利用してしまった場合の相談先、安全な代替手段については、
            <Link href="/articles/salary-factoring-illegal/" className="font-medium text-primary underline">給与ファクタリングが違法な理由｜金融庁・警視庁の見解と安全な代替手段</Link>
            で詳しく解説しています。心当たりのある方は必ずお読みください。
          </p>
        </section>

        {/* ── チェックポイント ─── */}
        <section id="checkpoints" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            違法な業者を見分ける3つのチェックポイント
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            「前払い」を名乗るサービスに出会ったら、申し込む前に次の3点を確認してください。
          </p>
          <div className="space-y-6">
            {checkpoints.map((cp, index) => (
              <div key={cp.question} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{cp.question}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{cp.detail}</p>
                  </div>
                </div>
              </div>
            ))}
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

        {/* ── 関連ツール・データ ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">安全な正規サービスを選ぶ</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
                    <li><Link href="/articles/seikyusho-kaitori/" className="font-medium text-primary underline">請求書買取とは（別語彙の基本）</Link>｜呼び方の違いと仕組みをまとめています。</li>
              <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
              <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
              <li><Link href="/verification-policy/" className="font-medium text-primary underline">情報の調査・検証ポリシー</Link>｜当サイトの掲載審査基準と確認プロセス。</li>
            </ul>
          </div>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/salary-factoring-illegal/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">給与ファクタリングが違法な理由</p>
              <p className="mt-1 text-sm text-text-light">
                金融庁・警視庁の見解・被害事例・相談先まで詳しく
              </p>
            </Link>
            <Link
              href="/articles/hoshu-maebarai/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">報酬の前払い・先払いサービスとは</p>
              <p className="mt-1 text-sm text-text-light">
                フリーランスが合法的に報酬を早く受け取る方法
              </p>
            </Link>
            <Link
              href="/articles/is-it-legal/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングは合法？</p>
              <p className="mt-1 text-sm text-text-light">
                正規のファクタリングの法的根拠を解説
              </p>
            </Link>
            <Link
              href="/articles/for-freelance/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">フリーランス向けファクタリング5選</p>
              <p className="mt-1 text-sm text-text-light">
                正規サービスの比較と確定申告での処理方法
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            事業者の方は正規のファクタリングを比較検討できます
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            事業の請求書を対象とした合法的なサービスのみを、2026年6月に公式確認した手数料で掲載しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
