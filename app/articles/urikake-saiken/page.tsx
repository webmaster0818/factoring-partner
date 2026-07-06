import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "売掛債権とは？売却できる？仕組みと資金化の方法をわかりやすく解説",
  description:
    "売掛債権とは、商品やサービスの提供後に代金を受け取る権利のこと。売掛金・受取手形との違い、譲渡・売却の法的性質（民法上の債権譲渡）、資金化の方法、会計処理（仕訳）の入口まで、初めての方にもわかりやすく解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/urikake-saiken/",
  },
  openGraph: {
    title:
      "売掛債権とは？売却できる？仕組みと資金化の方法をわかりやすく解説",
    description:
      "売掛債権の定義・売掛金との違い・売却の法的性質・資金化の方法をわかりやすく解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/urikake-saiken/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const receivableTypes = [
  {
    name: "売掛金",
    what: "請求書ベースの信用取引で代金を受け取る権利",
    feature: "最も一般的。支払いサイトは30〜60日程度が多い",
    relation: "売掛債権の代表例",
  },
  {
    name: "受取手形",
    what: "約束手形で支払いを約束された債権",
    feature: "満期日まで現金化されない。手形割引で期日前資金化が可能",
    relation: "広義の売掛債権に含まれる",
  },
  {
    name: "電子記録債権（でんさい）",
    what: "電子債権記録機関に電子的に記録された金銭債権",
    feature: "手形に代わる決済手段として普及。分割譲渡も可能",
    relation: "売掛債権を電子化したもの",
  },
  {
    name: "工事請負代金債権・診療報酬債権など",
    what: "業種特有の役務提供の対価を受け取る権利",
    feature: "建設業の請負代金、医療機関の診療報酬なども債権として譲渡・資金化の対象になる",
    relation: "広義の売掛債権の仲間",
  },
];

const fundingMethods = [
  {
    name: "売却する（ファクタリング）",
    description:
      "売掛債権をファクタリング会社に売却し、手数料を差し引いた代金を受け取る方法です。債権の売買なので借入にならず、最短即日での資金化に対応するサービスもあります。売掛先の信用力が審査の中心のため、自社の財務に不安があっても利用できる場合があります。",
    link: { href: "/articles/what-is-factoring/", label: "ファクタリングとは（仕組みの詳細）" },
  },
  {
    name: "担保にして借りる（ABL）",
    description:
      "売掛債権を担保に金融機関から融資を受ける方法です。債権は手元に残り、低コストで調達できる一方、負債として計上され、審査は自社の信用力が対象になります。審査には数週間かかるのが一般的です。",
    link: { href: "/articles/vs-abl/", label: "ファクタリングとABLの違い" },
  },
  {
    name: "期日を待って回収する（原則）",
    description:
      "資金繰りに余裕があれば、期日どおりの回収が最もコストのかからない方法です。回収を早めたい場合は、請求サイクルの改善や入金サイトの短縮交渉というコストゼロの手段から検討しましょう。",
    link: {
      href: "/articles/urikakekin-kaishu-hayameru/",
      label: "売掛金の回収を早める方法（交渉術）",
    },
  },
];

const faqs = [
  {
    question: "売掛債権と売掛金はどう違いますか？",
    answer:
      "売掛金は会計上の勘定科目（資産の名前）で、売掛債権は「代金を請求できる権利」という法律上の呼び方です。日常の実務ではほぼ同じ意味で使われますが、厳密には売掛債権のほうが広い概念で、受取手形や電子記録債権なども含めて指すことがあります。",
  },
  {
    question: "売掛債権は本当に売却できるのですか？",
    answer:
      "できます。債権の譲渡は民法で認められており、売掛債権を専門会社に売却して期日前に資金化するサービスがファクタリングです。2020年施行の民法改正により、契約に譲渡制限特約があっても債権譲渡自体は原則有効とされ、より利用しやすくなりました。",
  },
  {
    question: "売掛債権を売却したら取引先に知られますか？",
    answer:
      "契約方式によります。利用者とファクタリング会社だけで契約する2社間ファクタリングなら、売掛先への通知・承諾は不要で、取引先に知られずに売却できます。売掛先も契約に加わる3社間ファクタリングでは承諾が必要ですが、その分手数料が低くなる傾向があります。",
  },
  {
    question: "売掛債権を売却したときの仕訳はどうなりますか？",
    answer:
      "基本は「売掛金の減少」と「現金・預金の増加」を記帳し、手数料分は「売掛債権売却損」として費用計上します。借入金には計上されないため、負債は増えません。具体的な処理や消費税の扱い（債権譲渡は非課税取引）は、当サイトの会計処理解説記事を参照のうえ、最終的には税理士への確認をおすすめします。",
  },
  {
    question: "どんな売掛債権でも売却できますか？",
    answer:
      "いくつか条件があります。一般に、(1)実在する確定した債権であること、(2)支払い期日前であること、(3)二重譲渡や差押えがないことが必要です。支払い期日を過ぎた延滞債権や、これから発生する見込みにすぎない債権は原則買取対象外です。将来の請求分を対象にする注文書ファクタリングなど例外的なサービスもあります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "売掛債権とは？売却できる？仕組みと資金化の方法をわかりやすく解説",
  description:
    "売掛債権の定義・売掛金との違い・売却の法的性質・資金化の方法をわかりやすく解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/articles/urikake-saiken/",
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
      name: "売掛債権とは",
      item: "https://hyogo-shihoushoshi.jp/articles/urikake-saiken/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function UrikakeSaikenPage() {
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
          { label: "売掛債権とは" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            基礎知識
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            売掛債権とは？売却できる？
            <br className="hidden md:block" />
            仕組みと資金化の方法をわかりやすく解説
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            売掛債権の定義から、売掛金・受取手形との違い、譲渡・売却の法的性質、期日前に資金化する方法、会計処理の入口まで。初めての方向けにやさしく解説します。
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
                売掛債権とは<strong className="text-text-main">「商品・サービスを提供した後に代金を請求できる権利」</strong>のこと。売掛金や受取手形はその代表例
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                売掛債権は<strong className="text-text-main">売却できる</strong>。法的には民法が認める債権譲渡で、売却による期日前の資金化サービスがファクタリング
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                売却は借入ではないため<strong className="text-text-main">負債にならない</strong>。会計上は売掛金の減少＋手数料を売掛債権売却損として処理する
              </span>
            </li>
          </ul>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-8 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#definition" className="hover:underline">
                1. 売掛債権とは（定義）
              </a>
            </li>
            <li>
              <a href="#difference" className="hover:underline">
                2. 売掛金・受取手形との違い（一覧表）
              </a>
            </li>
            <li>
              <a href="#legal" className="hover:underline">
                3. 売掛債権は売却できる？譲渡の法的性質
              </a>
            </li>
            <li>
              <a href="#funding" className="hover:underline">
                4. 売掛債権を資金化する方法
              </a>
            </li>
            <li>
              <a href="#accounting" className="hover:underline">
                5. 売却したときの会計処理（仕訳の入口）
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 定義 ─── */}
        <section id="definition" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            売掛債権とは（定義）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">売掛債権（うりかけさいけん）</strong>
            とは、商品の販売やサービスの提供を先に行い、その代金を後日受け取ることができる
            <strong className="text-text-main">法律上の権利</strong>のことです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            企業間の取引では、納品のたびに現金で決済するのではなく、「月末締め・翌月末払い」のように後からまとめて支払う信用取引（掛取引）が一般的です。このとき、納品した側の手元には現金の代わりに「後で代金をもらえる権利」が残ります。これが売掛債権です。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            売掛債権はれっきとした資産であり、貸借対照表にも計上されます。そして、不動産や在庫と同じように、
            <strong className="text-text-main">譲渡（売却）したり担保に入れたりできる</strong>
            財産でもあります。この性質を使った資金調達が、後述するファクタリングやABLです。
          </p>
          <div className="rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">具体例</p>
            <p className="text-sm leading-relaxed text-text-light">
              Webデザイン会社A社が、B社のサイト制作を100万円で受注し、6月30日に納品。支払いは「月末締め・翌月末払い」なので、入金は7月31日。この間、A社は「B社に100万円を請求できる権利」＝売掛債権を持っている状態です。
            </p>
          </div>
        </section>

        {/* ── 売掛金との違い ─── */}
        <section id="difference" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            売掛金・受取手形との違い（一覧表）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            「売掛債権」と「売掛金」は日常的にはほぼ同じ意味で使われますが、厳密には
            <strong className="text-text-main">売掛金＝会計上の勘定科目、売掛債権＝法律上の権利の呼び方</strong>
            という関係です。売掛債権はより広い概念で、以下のような種類を含みます。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">種類</th>
                  <th className="px-4 py-3 font-semibold">内容</th>
                  <th className="px-4 py-3 font-semibold">特徴</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">売掛債権との関係</th>
                </tr>
              </thead>
              <tbody>
                {receivableTypes.map((type) => (
                  <tr key={type.name} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                      {type.name}
                    </td>
                    <td className="px-4 py-3 text-text-light">{type.what}</td>
                    <td className="px-4 py-3 text-text-light">{type.feature}</td>
                    <td className="px-4 py-3 text-text-light">{type.relation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            なお、ファクタリングの文脈で「売掛債権の買取」という場合、通常は請求書ベースの売掛金を指します。用語の使い分けに迷ったら
            <Link href="/articles/glossary/" className="font-medium text-primary underline">
              ファクタリング用語集
            </Link>
            もご活用ください。
          </p>
        </section>

        {/* ── 法的性質 ─── */}
        <section id="legal" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            売掛債権は売却できる？譲渡の法的性質
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            結論から言うと、<strong className="text-text-main">売掛債権は売却できます</strong>。
            債権は民法上「譲り渡すことができる」と定められており（債権譲渡自由の原則）、売掛債権を第三者に売却することは法律で認められた正当な取引です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            この債権譲渡の仕組みを使い、売掛債権を専門会社に売却して支払い期日前に資金化するサービスが
            <strong className="text-text-main">ファクタリング</strong>
            です。つまり「売掛債権の売却」と「ファクタリングの利用」は、法的には同じ債権譲渡取引を指しています。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            ポイントは、2020年施行の民法改正で、契約に「譲渡禁止（譲渡制限）特約」がある場合でも、債権譲渡自体は原則として有効とされたことです。これにより売掛債権はいっそう活用しやすい資産になりました。条文レベルの整理（民法466条以下・対抗要件・貸金業法との関係など）は
            <Link href="/articles/legal-basis/" className="font-medium text-primary underline">
              ファクタリングの法的根拠
            </Link>
            に譲ります。
          </p>
          <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="mb-2 font-bold text-accent">1つだけ注意</p>
            <p className="text-sm leading-relaxed text-text-light">
              合法なのは「債権の売買」です。債権の売買を装って実質的にお金を貸し付け、法外な利息に相当する手数料を取る無登録業者は違法です。売却先を選ぶ際は、償還請求権の有無（ノンリコースか）と運営会社の実在性を必ず確認してください。判断に迷う契約は、締結前に弁護士や公的相談窓口に相談することをおすすめします。
            </p>
          </div>
        </section>

        {/* ── 資金化の方法 ─── */}
        <section id="funding" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            売掛債権を資金化する方法
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            保有する売掛債権を資金に変える方法は、大きく「売る」「担保に借りる」「待って回収する」の3つに整理できます。
          </p>
          <div className="space-y-6">
            {fundingMethods.map((method, index) => (
              <div
                key={method.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{method.name}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {method.description}
                    </p>
                    <p className="mt-3 text-sm">
                      <Link
                        href={method.link.href}
                        className="font-medium text-primary underline"
                      >
                        {method.link.label} →
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            売却（ファクタリング）を選ぶ場合の手数料の目安は、2社間で8〜18%・3社間で1〜9%（会社により異なる）です。現金化の実践的な手順と選択肢の比較は
            <Link href="/articles/urikakekin-genkinka/" className="font-medium text-primary underline">
              売掛金を現金化する方法
            </Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* ── 会計処理 ─── */}
        <section id="accounting" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            売却したときの会計処理（仕訳の入口）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            売掛債権を売却した場合の会計処理は、「借入」ではなく「資産の売却」として扱うのが基本です。ポイントは3つあります。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">1.</span>
                <span>
                  <strong className="text-text-main">売掛金が減り、現金・預金が増える</strong>：借入金（負債）は計上されないため、貸借対照表がスリムになる（オフバランス）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">2.</span>
                <span>
                  <strong className="text-text-main">手数料は「売掛債権売却損」</strong>：売却額と額面の差額を費用として計上する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">3.</span>
                <span>
                  <strong className="text-text-main">債権譲渡は消費税の非課税取引</strong>：手数料に消費税は原則かからない
                </span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            2社間ファクタリングで入金を預かって送金する場合の処理や、決算をまたぐ場合のタイミングなど、具体的な仕訳パターンは
            <Link href="/articles/accounting/" className="font-medium text-primary underline">
              ファクタリングの会計処理・仕訳
            </Link>
            で解説しています。自社の状況に応じた最終判断は税理士への確認をおすすめします。
          </p>
        </section>

        {/* ── 関連ツール・データ ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">あわせて使いたいツール・データ</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
              <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
              <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
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
              href="/articles/urikakekin-genkinka/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">売掛金を現金化する方法</p>
              <p className="mt-1 text-sm text-text-light">
                即日での資金化・仕組み・注意点【2026年】
              </p>
            </Link>
            <Link
              href="/articles/legal-basis/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングの法的根拠</p>
              <p className="mt-1 text-sm text-text-light">
                民法466条・債権譲渡の条文レベルの整理
              </p>
            </Link>
            <Link
              href="/articles/accounting/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">会計処理・仕訳の方法</p>
              <p className="mt-1 text-sm text-text-light">
                売掛債権売却損の計上パターンを解説
              </p>
            </Link>
            <Link
              href="/articles/what-is-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングとは？</p>
              <p className="mt-1 text-sm text-text-light">
                仕組み・種類・メリット・デメリットを解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            売掛債権の売却先を比較しましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            仕組みを理解したら、次は売却先選びです。手数料を公式確認した15社を、手数料・入金速度・対象で比較できます。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめ15社の比較ランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
