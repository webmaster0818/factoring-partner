import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { AlternativesSection, PrimarySources, ToolsSection, RelatedArticles, VerifyCTA } from "../../components/TicketVerifyCommon";

export const metadata: Metadata = {
  title:
    "リセチケットとは？口コミ・評判の前に知る「先払い買取」の仕組みと注意点",
  description:
    "「リセチケット 口コミ」「評判」「安全？」と検索している方へ。リセチケットは商品券を即日買取とうたい、査定後に商品券が手元に届く前でも代金を先に振り込み、商品券は最大30日後までに送る仕組みです。これは金融庁・消費者庁・警察庁が注意喚起する「先払い買取（現金化）」の典型で、経済的には貸付と同じ構造です。公式表記を確認したうえで、注意点と正規の選択肢を一次情報で解説します。",
  alternates: { canonical: "https://hyogo-shihoushoshi.jp/articles/rese-ticket/" },
  openGraph: {
    title:
      "リセチケットとは？口コミ・評判の前に知る「先払い買取」の仕組みと注意点",
    description:
      "リセチケットは「振込が先・商品券は最大30日後」という先払い買取（現金化）です。経済的には貸付と同じ構造。公式表記の確認と正規の選択肢を一次情報で解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/rese-ticket/",
    type: "article",
  },
};

const officialFacts = [
  ["サービス名", "リセチケット"],
  ["うたっている内容", "商品券の即日買取・来店不要買取・最短数分で返答（公式表記）"],
  ["対象商品", "全国百貨店共通商品券・VJAギフトカード・収入印紙（公式表記）"],
  ["申込方法", "申込フォーム入力後、公式LINEに登録。最短15分で査定結果（公式表記）"],
  ["代金と商品の順序", "買取決定後、商品券が届く前でも代金を即日振込。商品券はお約束の期日までに送付（申込のタイミングにより最大30日後まで設定）"],
  ["訴求対象", "「給料日まで手持ちがピンチ」「カードは利用限度額で使えない」「借金はしたくない」層（公式の『こんな方におすすめ』）"],
];

const faqs = [
  {
    question: "リセチケットは違法なのですか？",
    answer:
      "特定の事業者について一律に違法と断定することはできません。ただし、リセチケットの「代金を先に振り込み、商品券は後（最大30日後まで）に送る」仕組みは、金融庁が「先払い買取」現金化として注意喚起している取引の典型です。金融庁は、商品売買を装っていても経済的な実態が貸付けであり業として行う場合には貸金業に該当するおそれがあるとしており、貸金業登録を受けずに貸金業を営めば10年以下の懲役もしくは3,000万円以下の罰金またはその併科（貸金業法第47条第2号）の対象となる違法なヤミ金融です。実態は個別に判断されますが、こうしたスキーム自体が公的機関の注意喚起対象です。",
  },
  {
    question: "代金が先に振り込まれ、商品券を後で送るのはなぜ危険なのですか？",
    answer:
      "「先にお金を受け取り、後で商品券（またはお金）を渡す」という順序は、経済的には『お金を借りて後で返す』のと同じ構造です。実際、リセチケットは「給料日まで手持ちがピンチ」「借金はしたくない」層に向けて訴求しています。買取代金と後から支払う金額の差額が、実質的な利息として機能しうる点が問題で、金融庁・消費者庁は、こうした取引で高額な違約金や差額により「かえって生活が悪化し、多重債務に陥る危険性」があると注意喚起しています。",
  },
  {
    question: "リセチケットの口コミ・評判は信頼できますか？",
    answer:
      "当サイトはリセチケットについて架空の口コミや体験談を掲載しません。「すぐ振り込まれた」という評判は、後から支払う金額や、繰り返し利用したときに負担が膨らむ構造とは別の話であり、口コミの良し悪しはスキーム自体のリスクを解消しません。公的機関が先払い買取業者を「優良」「安全」と認定する制度も存在しません。判断すべきは評判ではなく、取引の構造です。",
  },
  {
    question: "すでに利用してしまい、支払いを求められています。",
    answer:
      "一人で抱え込まず、支払う前に公的な窓口へ相談してください。消費者ホットライン（188）、警察相談専用電話（#9110）、金融庁金融サービス利用者相談室（0570-016811）、日本貸金業協会（0570-051051）が利用できます。取引の実態がヤミ金融による貸付と評価される場合は法的な対応の余地があるため、消費生活センターや債務問題を扱う弁護士・司法書士への相談が重要です。やり取りや振込の記録は証拠として残しておきましょう。詳しくは「先払い買取のキャンセル料が払えない場合の対処法」で解説しています。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "リセチケットとは？口コミ・評判の前に知る「先払い買取」の仕組みと注意点",
  description:
    "リセチケットは「振込が先・商品券は最大30日後」という先払い買取（現金化）です。経済的には貸付と同じ構造。公式表記の確認と正規の選択肢を一次情報で解説。",
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/rese-ticket/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://hyogo-shihoushoshi.jp/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://hyogo-shihoushoshi.jp/articles/" },
    { "@type": "ListItem", position: 3, name: "リセチケットとは？", item: "https://hyogo-shihoushoshi.jp/articles/rese-ticket/" },
  ],
};

export default function ReseTicketPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "リセチケットとは？" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">注意喚起・資金調達ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            リセチケットとは？
            <br className="hidden md:block" />
            口コミ・評判の前に知る「先払い買取」の仕組みと注意点
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            「リセチケット 口コミ」「評判」「安全？」と調べている方へ。リセチケットは「代金を先に振り込み、商品券は後（最大30日後まで）に送る」仕組みで、これは金融庁・消費者庁・警察庁が注意喚起する「先払い買取」の典型です。公式表記を確認したうえで、なぜ経済的に貸付と同じなのか、正規の選択肢は何かを一次情報で解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <div className="mb-12 rounded-lg border border-secondary/30 bg-teal-50 p-6">
          <p className="mb-3 font-bold text-secondary">この記事の結論</p>
          <ul className="space-y-2 text-sm leading-relaxed text-text-light">
            <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>リセチケットは<strong className="text-text-main">「代金が先・商品券は後（最大30日後まで）」</strong>という仕組みで、これは金融庁が注意喚起する「先払い買取」現金化の典型です。<strong className="text-text-main">経済的には『お金を借りて後で返す』のと同じ構造</strong>で、当サイトはおすすめしません</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>公式サイトが「給料日まで手持ちがピンチ」「借金はしたくない」層に訴求している点からも、<strong className="text-text-main">生活資金を得るための実質的な借入</strong>として使われることが想定されています</span></li>
            <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>どうしても現金が必要なら、事業者は<strong className="text-text-main">請求書（売掛金）を正規のファクタリングで資金化</strong>、個人は<strong className="text-text-main">消費者ホットライン（188）など公的窓口で支援制度を確認</strong>するのが先です</span></li>
          </ul>
        </div>

        <nav className="mb-8 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#facts" className="hover:underline">1. リセチケットの公式サイトに書かれていること</a></li>
            <li><a href="#scheme" className="hover:underline">2. なぜ「先払い買取（現金化）」に当たるのか</a></li>
            <li><a href="#reputation" className="hover:underline">3. 口コミ・評判をどう見るか</a></li>
            <li><a href="#alternatives" className="hover:underline">4. どうしても現金が必要な場合の正規の選択肢</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価に影響することはなく、各社の公式・公開情報にもとづいて解説しています。なお、当サイトが先払い買取現金化の利用を推奨することはなく、先払い買取業者との提携・紹介・送客は一切行っていません。掲載内容はリセチケット公式サイトを2026年7月22日に確認した時点のものであり、最新情報は各公式サイト・公的機関の発表をご確認ください。
        </p>

        <section id="facts" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">リセチケットの公式サイトに書かれていること</h2>
          <p className="mb-4 leading-relaxed text-text-light">まず、リセチケットの公式サイトが表記している内容を、事実として整理します（2026年7月22日確認）。とくに「代金と商品の順序」に注目してください。</p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {officialFacts.map(([k, v], i) => (
                  <tr key={k} className={i % 2 === 0 ? "border-t border-border bg-white" : "border-t border-border bg-section-bg"}>
                    <th className="px-4 py-3 text-left font-semibold text-text-main whitespace-nowrap align-top">{k}</th>
                    <td className="px-4 py-3 text-text-light">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">公式サイトは「商品到着前でも代金を即日お振込」「商品はお約束の期日までに送ってください。申し込みのタイミングによって最大30日後まで設定されます」と明記しています。つまり<strong className="text-text-main">利用者は先にお金を受け取り、後で商品券を渡す</strong>という順序です。</p>
        </section>

        <section id="scheme" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">なぜ「先払い買取（現金化）」に当たるのか</h2>
          <p className="mb-4 leading-relaxed text-text-light">「先払い買取」とは、商品券などの売買を装いながら、<strong className="text-text-main">現金を先に渡し、後から商品の送付やキャンセル料・違約金の名目で回収する</strong>取引です。金融庁・消費者庁・警察庁・財務局・日本貸金業協会が連名で注意喚起しています（仕組みの詳細は<Link href="/articles/sakibarai-kaitori/" className="font-medium text-primary underline">先払い買取とは？違法性と危険な仕組み</Link>で解説）。リセチケットの「代金が先・商品券は最大30日後」という設計は、この構造そのものです。</p>
          <div className="rounded-lg border border-red-200 bg-red-50 p-6">
            <p className="mb-2 font-bold text-red-700">「振込が先・商品券は後」＝実質的な貸付（一次情報）</p>
            <p className="text-sm leading-relaxed text-text-light">先にお金を受け取り、後で相当額の商品券を渡す（または支払う）順序は、経済的には『借りて後で返す』のと同じです。金融庁は、商品売買を装っていても経済的な実態が貸付けであり業として行う場合には貸金業に該当するおそれがあると注意喚起しており、無登録で貸金業を営めば<strong className="text-text-main">10年以下の懲役もしくは3,000万円以下の罰金またはその併科（貸金業法第47条第2号）</strong>の対象です。消費者庁も、差額や高額な違約金により「かえって生活が悪化し、多重債務に陥る危険性」を指摘しています。</p>
          </div>
        </section>

        <section id="reputation" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">口コミ・評判をどう見るか</h2>
          <p className="mb-4 leading-relaxed text-text-light">当サイトはリセチケットについて架空の口コミや体験談を掲載しません。そのうえで、評判を見るときの考え方をお伝えします。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">「すぐ振り込まれた」は安全性の証明にならない</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">入金の速さは、後から支払う金額や、繰り返し利用したときに負担が膨らむ構造とは別の話です。「借金はしたくない」という動機で使っても、実態が借入に近ければ同じ負担が発生しうる点に注意が必要です。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">公的機関による「優良認定」は存在しない</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">金融庁・消費者庁・警察庁は先払い買取現金化について注意喚起する立場であり、特定の業者を「優良」「安全」と認定する制度はありません。ネット上の「おすすめ」ランキングは送客収益を目的に運営されているものもあり、安全性の裏付けにはなりません（<Link href="/articles/sakibarai-kaitori-gyosha/" className="font-medium text-primary underline">先払い買取に「優良・おすすめ業者」は存在するか</Link>で解説）。</p>
            </div>
          </div>
        </section>

        <AlternativesSection />
        <PrimarySources />
        <ToolsSection />

        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">&#9660;</span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-text-light">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>

        <RelatedArticles currentSlug="rese-ticket" />
        <VerifyCTA />
      </div>
    </>
  );
}
