import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "手数料が安いファクタリング会社ランキング10選｜相場と節約術",
  description:
    "手数料が安いファクタリング会社10社をランキング形式で紹介。2社間・3社間の手数料相場、手数料を下げるコツ5つ、計算方法、隠れコストの注意点まで徹底解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/low-fee/",
  },
  openGraph: {
    title:
      "手数料が安いファクタリング会社ランキング10選｜相場と節約術",
    description:
      "手数料が安いファクタリング会社10社をランキング。手数料相場・計算方法・節約術まで解説。",
    url: "https://factoring-partner.pages.dev/articles/low-fee/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const feeRanking = [
  { rank: 1, name: "日本中小企業金融サポート機構", fee: "1.5%〜10%", type: "2社間・3社間", note: "一般社団法人運営で非営利だからこその低手数料" },
  { rank: 2, name: "PAYTODAY", fee: "1%〜9.5%", type: "2社間", note: "AI審査で人件費を抑え低手数料を実現" },
  { rank: 3, name: "QuQuMo", fee: "1%〜14.8%", type: "2社間", note: "オンライン完結で運営コストを削減" },
  { rank: 4, name: "PMG", fee: "1%〜12.8%", type: "2社間・3社間", note: "3社間なら1%〜の低手数料" },
  { rank: 5, name: "ビートレーディング", fee: "2%〜12%", type: "2社間・3社間", note: "大手の安心感と適正な手数料" },
  { rank: 6, name: "アクセルファクター", fee: "2%〜20%", type: "2社間", note: "審査通過率93.3%。少額でも対応" },
  { rank: 7, name: "FREENANCE", fee: "3%〜10%", type: "2社間", note: "フリーランス向け。保険付きで実質コスパ良し" },
  { rank: 8, name: "トップ・マネジメント", fee: "3.5%〜12.5%", type: "2社間・3社間", note: "大口案件なら手数料交渉が可能" },
  { rank: 9, name: "ペイトナー", fee: "一律10%", type: "2社間", note: "明朗会計。少額ならコスパ良好" },
  { rank: 10, name: "ラボル", fee: "一律10%", type: "2社間", note: "24時間365日対応で利便性は最高" },
];

const feeMarket = [
  {
    type: "2社間ファクタリング",
    range: "8%〜18%（相場）",
    detail: "取引先に通知せず、利用者とファクタリング会社の2者間で契約する方式です。ファクタリング会社が売掛先の倒産リスクを負うため、手数料は3社間より高くなります。",
    factors: "売掛先の信用力が高い、取引金額が大きい、支払い期日が近い場合は手数料が安くなります。",
  },
  {
    type: "3社間ファクタリング",
    range: "1%〜9%（相場）",
    detail: "売掛先を含む3者間で契約する方式です。売掛先から直接ファクタリング会社に支払われるため、回収リスクが低く、手数料が大幅に安くなります。",
    factors: "売掛先の承諾が必要ですが、手数料を大幅に節約できます。取引先の理解が得られる場合は積極的に検討しましょう。",
  },
];

const savingTips = [
  {
    title: "複数社から見積もりを取る",
    description:
      "ファクタリングの手数料は会社によって大きく異なります。必ず2〜3社から見積もりを取り、手数料率を比較しましょう。同じ売掛金でも、会社によって手数料が5%〜10%以上異なることがあります。見積もりは無料で取れるので、面倒でも比較することが節約の第一歩です。",
  },
  {
    title: "3社間ファクタリングを検討する",
    description:
      "取引先に知られても問題ない場合は、3社間ファクタリングを選ぶことで手数料を大幅に下げられます。2社間の手数料が10%〜18%であるのに対し、3社間は1%〜9%と半分以下になるケースも珍しくありません。特に大口案件では手数料の差額が大きくなるため、3社間の検討価値は高いです。",
  },
  {
    title: "売掛先が大手企業の請求書を優先する",
    description:
      "ファクタリングの手数料は売掛先の信用力に大きく左右されます。上場企業や大手企業、官公庁向けの売掛金は審査に通りやすく、手数料も安くなります。複数の売掛金がある場合は、売掛先の信用力が高いものを優先的にファクタリングに出すことで、トータルコストを抑えられます。",
  },
  {
    title: "リピート割引を活用する",
    description:
      "多くのファクタリング会社では、継続利用することで手数料が徐々に下がる「リピート割引」を設けています。初回は10%でも、2回目は8%、3回目以降は5%といった形で手数料が下がるケースがあります。信頼関係を築くことで、より有利な条件を引き出せます。",
  },
  {
    title: "オンライン完結型を選ぶ",
    description:
      "オンライン完結型のファクタリングサービスは、店舗の運営費や人件費を削減できるため、対面型よりも手数料が安い傾向にあります。PAYTODAY、QuQuMo、ペイトナーなどはオンライン完結型で、手数料の安さとスピードを両立しています。",
  },
];

const calculationExamples = [
  {
    title: "基本的な計算方法",
    description: "ファクタリングの手数料は「売掛金の額面 x 手数料率」で計算されます。",
    example: "売掛金100万円 x 手数料率10% = 手数料10万円 → 受取額90万円",
  },
  {
    title: "手数料率による受取額の違い",
    description: "手数料率が数%違うだけで、受取額は大きく変わります。100万円の売掛金の場合：",
    example: "手数料5% → 受取95万円 / 手数料10% → 受取90万円 / 手数料15% → 受取85万円 / 手数料20% → 受取80万円",
  },
  {
    title: "年間コストの計算",
    description: "毎月ファクタリングを利用する場合の年間手数料コストを把握しておきましょう。",
    example: "月100万円 x 手数料10% x 12ヶ月 = 年間120万円のコスト",
  },
];

const hiddenCosts = [
  {
    name: "事務手数料",
    description: "契約時に別途請求される事務手数料。数千円〜数万円程度。手数料率とは別に加算されるため、事前に確認が必要です。",
  },
  {
    name: "振込手数料",
    description: "入金時の振込手数料を利用者が負担するケース。数百円程度ですが、少額案件では割合が大きくなります。",
  },
  {
    name: "債権譲渡登記費用",
    description: "2社間ファクタリングで債権譲渡登記を行う場合の費用。数万円程度。登記不要のサービスもあります。",
  },
  {
    name: "出張費用",
    description: "対面での契約時に出張費用が発生する場合があります。オンライン完結型なら不要です。",
  },
];

const faqs = [
  {
    question: "ファクタリングの手数料相場はどのくらいですか？",
    answer:
      "2社間ファクタリングの手数料相場は8%〜18%、3社間ファクタリングは1%〜9%程度です。ただし、売掛先の信用力、取引金額、支払い期日までの期間、利用回数などによって大きく変動します。上場企業向けの大口案件であれば2%〜5%程度に抑えられることもあります。",
  },
  {
    question: "手数料が安すぎるファクタリング会社は危険ですか？",
    answer:
      "手数料が相場より極端に安い場合は注意が必要です。見積もり時は安い手数料を提示し、契約時に追加費用を請求する悪質な業者も存在します。手数料以外の費用（事務手数料・登記費用・出張費用など）がないか、契約前に必ず総費用を確認しましょう。信頼できる会社であれば、適正な手数料率を提示してくれます。",
  },
  {
    question: "手数料を下げるために交渉はできますか？",
    answer:
      "はい、手数料の交渉は可能です。特に大口案件（500万円以上）や継続利用の場合は、交渉に応じてくれる会社が多いです。他社の見積もりを持って交渉すると効果的です。また、3社間ファクタリングへの切り替えを提案することで、手数料を大幅に下げられるケースもあります。",
  },
  {
    question: "手数料以外にかかる費用はありますか？",
    answer:
      "会社によっては、手数料以外に事務手数料（数千円〜数万円）、振込手数料（数百円）、債権譲渡登記費用（数万円）、出張費用などが別途かかる場合があります。見積もり時に「総費用」を確認し、手数料率だけでなくトータルコストで比較することが重要です。ペイトナーやラボルなど一律料金のサービスは隠れコストがなく安心です。",
  },
  {
    question: "2社間と3社間で手数料が違うのはなぜですか？",
    answer:
      "3社間ファクタリングは売掛先の承諾を得て直接代金を回収できるため、ファクタリング会社の回収リスクが低く、その分手数料が安くなります。2社間は売掛先に知らせずに取引できるメリットがある反面、ファクタリング会社が利用者を通じて代金を回収するリスクを負うため、手数料が高くなります。",
  },
];

const feeByAmount = [
  { amount: "〜50万円", twoSha: "15%〜20%", threeSha: "5%〜9%", note: "少額は手数料率が高くなりがち" },
  { amount: "50万〜100万円", twoSha: "10%〜18%", threeSha: "3%〜8%", note: "個人事業主の多くがこの価格帯" },
  { amount: "100万〜500万円", twoSha: "8%〜15%", threeSha: "2%〜7%", note: "中小企業で最も多い価格帯" },
  { amount: "500万〜1,000万円", twoSha: "5%〜12%", threeSha: "1%〜5%", note: "大口優遇が受けやすい" },
  { amount: "1,000万円以上", twoSha: "2%〜8%", threeSha: "1%〜3%", note: "大口案件は手数料交渉余地が大きい" },
];

const mistakesToAvoid = [
  {
    title: "手数料率だけで判断しない",
    description:
      "手数料率が低くても、事務手数料や登記費用などの追加コストが高い場合、トータルコストでは割高になることがあります。見積もり時に「手数料率」ではなく「受取総額」で比較するのが確実です。",
  },
  {
    title: "初回の手数料だけで長期契約しない",
    description:
      "初回は割引キャンペーンで手数料を下げている会社もあります。2回目以降の手数料率がどうなるか、リピート割引はあるかを事前に確認しておきましょう。",
  },
  {
    title: "スピードとのトレードオフを理解する",
    description:
      "一般的に手数料が安いサービスは審査に時間がかかり、即日入金に対応していない場合があります。スピードが最優先なら、多少手数料が高くても即日対応のサービスを選ぶべきケースもあります。",
  },
  {
    title: "償還請求権の有無を確認する",
    description:
      "手数料が極端に安い場合、「償還請求権あり（ウィズリコース）」の契約になっていることがあります。この場合、売掛先が支払わなければ利用者が返済する義務が発生するため、実質的には貸付と同じです。必ず「償還請求権なし（ノンリコース）」の契約であることを確認しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "手数料が安いファクタリング会社ランキング10選｜相場と節約術",
  description:
    "手数料が安いファクタリング会社10社をランキング。手数料相場・計算方法・節約術まで解説。",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  author: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://factoring-partner.pages.dev/articles/low-fee/",
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

export default function LowFeePage() {
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
          { label: "手数料が安いファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-secondary px-4 py-1 text-sm font-bold text-white">
            手数料比較
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            手数料が安いファクタリング会社ランキング10選
            <br className="hidden md:block" />
            相場と節約術
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            手数料が安いファクタリング会社10社をランキング形式で紹介。2社間・3社間の手数料相場、手数料を下げるコツ5つ、計算方法、隠れコストの見分け方まで徹底解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#market" className="hover:underline">
                1. ファクタリング手数料の相場
              </a>
            </li>
            <li>
              <a href="#ranking" className="hover:underline">
                2. 手数料が安いファクタリング会社ランキング10選
              </a>
            </li>
            <li>
              <a href="#saving" className="hover:underline">
                3. 手数料を下げるコツ5つ
              </a>
            </li>
            <li>
              <a href="#calculation" className="hover:underline">
                4. 手数料の計算方法
              </a>
            </li>
            <li>
              <a href="#hidden" className="hover:underline">
                5. 隠れコストに注意
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 手数料相場 ─── */}
        <section id="market" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング手数料の相場
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの手数料は、主に契約形態（2社間・3社間）によって大きく異なります。まずは相場を把握し、適正価格かどうかを判断できるようにしましょう。
          </p>

          <div className="space-y-6">
            {feeMarket.map((item) => (
              <div
                key={item.type}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-primary">{item.type}</h3>
                  <span className="rounded-full bg-accent px-4 py-1 text-sm font-bold text-white">
                    {item.range}
                  </span>
                </div>
                <p className="mb-3 leading-relaxed text-text-light">{item.detail}</p>
                <div className="rounded bg-section-bg p-3">
                  <p className="text-sm text-text-light">
                    <span className="font-bold text-text-main">手数料が安くなる条件：</span>
                    {item.factors}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="mb-2 font-bold text-accent">注意：相場を大きく外れる業者に要注意</p>
            <p className="text-sm leading-relaxed text-text-light">
              2社間ファクタリングで手数料30%以上を請求する業者は、悪質業者の可能性があります。逆に相場より極端に安い手数料を提示する業者も、契約時に追加費用を請求するケースがあるため要注意です。必ず契約前に総費用を確認しましょう。
            </p>
          </div>
        </section>

        {/* ── 手数料が決まる要因 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング手数料が決まる5つの要因
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの手数料は一律ではなく、複数の要因によって変動します。これらの要因を理解しておくことで、手数料交渉や最適なサービス選びに役立ちます。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">1. 契約形態（2社間・3社間）</h3>
              <p className="text-sm leading-relaxed text-text-light">3社間は回収リスクが低いため、2社間の半分以下の手数料で利用できます。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">2. 売掛先の信用力</h3>
              <p className="text-sm leading-relaxed text-text-light">上場企業・大手企業・官公庁向けの売掛金は手数料が安くなります。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">3. 取引金額</h3>
              <p className="text-sm leading-relaxed text-text-light">買取金額が大きいほど手数料率は低くなる傾向があります。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">4. 支払い期日までの期間</h3>
              <p className="text-sm leading-relaxed text-text-light">支払い期日が近いほどリスクが低く、手数料も安くなります。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">5. 利用回数（リピート）</h3>
              <p className="text-sm leading-relaxed text-text-light">継続利用すると信頼関係が構築され、手数料が段階的に下がります。</p>
            </div>
          </div>
        </section>

        {/* ── ランキング ─── */}
        <section id="ranking" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料が安いファクタリング会社ランキング10選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            手数料の下限値が低い順にランキングしました。ただし、実際の手数料は売掛先の信用力や取引金額によって変動するため、複数社から見積もりを取ることをおすすめします。
          </p>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold">順位</th>
                  <th className="px-3 py-3 font-semibold">会社名</th>
                  <th className="px-3 py-3 font-semibold">手数料</th>
                  <th className="px-3 py-3 font-semibold">形態</th>
                  <th className="px-3 py-3 font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody>
                {feeRanking.map((company, index) => (
                  <tr
                    key={company.name}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-3 py-3 font-bold text-accent">{company.rank}</td>
                    <td className="px-3 py-3 font-semibold text-text-main whitespace-nowrap">{company.name}</td>
                    <td className="px-3 py-3 font-bold text-primary whitespace-nowrap">{company.fee}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{company.type}</td>
                    <td className="px-3 py-3 text-text-light">{company.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-6">
            {feeRanking.slice(0, 5).map((company) => (
              <div
                key={company.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {company.rank}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{company.name}</h3>
                    <p className="text-sm font-bold text-primary">{company.fee}</p>
                  </div>
                </div>
                <p className="leading-relaxed text-text-light">{company.note}</p>
                <div className="mt-3 flex gap-2">
                  <span className="rounded bg-section-bg px-3 py-1 text-xs font-semibold text-text-main">
                    {company.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 手数料を下げるコツ ─── */}
        <section id="saving" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料を下げるコツ5つ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの手数料は工夫次第で下げることができます。以下の5つのコツを実践して、ファクタリングのコストを最小限に抑えましょう。
          </p>
          <div className="space-y-6">
            {savingTips.map((tip, index) => (
              <div
                key={tip.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {tip.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 計算方法 ─── */}
        <section id="calculation" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料の計算方法
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの手数料計算は比較的シンプルです。以下の計算例を参考に、自分のケースでの手数料額を把握しましょう。
          </p>

          <div className="space-y-6">
            {calculationExamples.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-primary">{item.title}</h3>
                <p className="mb-3 leading-relaxed text-text-light">{item.description}</p>
                <div className="rounded bg-primary-light p-4">
                  <p className="text-sm font-semibold text-primary">{item.example}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-2 font-bold text-secondary">手数料の年利換算で比較する</p>
            <p className="text-sm leading-relaxed text-text-light">
              ファクタリングの手数料を年利換算すると、銀行融資との比較がしやすくなります。例えば、支払い期日まで30日の売掛金に手数料10%がかかる場合、年利換算では約120%相当になります。ファクタリングは一時的な利用には適していますが、毎月継続的に利用する場合はコストが大きくなる点に注意しましょう。
            </p>
          </div>
        </section>

        {/* ── 金額別の手数料目安 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            売掛金の金額別・手数料の目安
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの手数料は売掛金の金額によっても変動します。一般的に金額が大きいほど手数料率は低くなる傾向があります。以下は金額帯別の手数料の目安です。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">売掛金の金額</th>
                  <th className="px-4 py-3 font-semibold">2社間</th>
                  <th className="px-4 py-3 font-semibold">3社間</th>
                  <th className="px-4 py-3 font-semibold">備考</th>
                </tr>
              </thead>
              <tbody>
                {feeByAmount.map((row, index) => (
                  <tr
                    key={row.amount}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-4 py-3 font-semibold text-text-main whitespace-nowrap">{row.amount}</td>
                    <td className="px-4 py-3">{row.twoSha}</td>
                    <td className="px-4 py-3">{row.threeSha}</td>
                    <td className="px-4 py-3 text-text-light">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※ 上記は一般的な目安です。実際の手数料は売掛先の信用力や支払い期日によって変動します。
          </p>
        </section>

        {/* ── よくある失敗 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料で失敗しないための注意点
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            手数料の安さだけを追求すると、かえって損をするケースがあります。以下のよくある失敗パターンを把握しておきましょう。
          </p>
          <div className="space-y-6">
            {mistakesToAvoid.map((item, index) => (
              <div
                key={item.title}
                className="rounded-lg border border-accent/30 bg-orange-50 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 隠れコスト ─── */}
        <section id="hidden" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            隠れコストに注意
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの手数料率だけを比較しても、実際の総コストは異なる場合があります。以下の隠れコストに注意し、見積もり時に必ず「総費用」を確認しましょう。
          </p>

          <div className="space-y-4">
            {hiddenCosts.map((cost) => (
              <div
                key={cost.name}
                className="rounded-lg border border-accent/30 bg-orange-50 p-5"
              >
                <h3 className="mb-2 font-bold text-accent">{cost.name}</h3>
                <p className="text-sm leading-relaxed text-text-light">{cost.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">隠れコストがないサービス</p>
            <p className="text-sm leading-relaxed text-text-light">
              ペイトナー（一律10%）、ラボル（一律10%）、PAYTODAY（1%〜9.5%）などのオンライン完結型サービスは、手数料以外の追加費用がないため、見積もりと実際の費用にギャップがありません。「総費用がわかりやすいこと」も、ファクタリング会社選びの重要なポイントです。
            </p>
          </div>
        </section>

        {/* ── 手数料を比較する際のまとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料比較のまとめ - 賢い選び方
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの手数料を最適化するためのポイントを総括します。以下の原則を守ることで、無駄なコストを大幅に削減できます。
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-2 font-bold text-secondary">原則1：複数社比較</h3>
              <p className="text-sm leading-relaxed text-text-light">
                必ず2〜3社から見積もりを取りましょう。同じ売掛金でも会社によって手数料が大きく異なります。見積もりは無料なのでコストはかかりません。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-2 font-bold text-secondary">原則2：総費用で比較</h3>
              <p className="text-sm leading-relaxed text-text-light">
                手数料率だけでなく、事務手数料・登記費用・振込手数料を含めた「受取総額」で比較しましょう。隠れコストに注意が必要です。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-2 font-bold text-secondary">原則3：長期視点で選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                リピート割引がある会社を選べば、継続利用で手数料が徐々に下がります。初回の手数料だけでなく、長期的なコストパフォーマンスを重視しましょう。
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">結論：目的別のおすすめ</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">&#9654;</span>
                <span><strong className="text-text-main">手数料最安を狙うなら</strong> → PAYTODAY（1%〜9.5%）または日本中小企業金融サポート機構（1.5%〜10%）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">&#9654;</span>
                <span><strong className="text-text-main">明朗会計を重視するなら</strong> → ペイトナーまたはラボル（一律10%・追加費用なし）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">&#9654;</span>
                <span><strong className="text-text-main">大口案件で手数料を抑えたいなら</strong> → 3社間対応のビートレーディングまたはPMG</span>
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
              href="/articles/2sha-vs-3sha/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">2社間と3社間ファクタリングの違い</p>
              <p className="mt-1 text-sm text-text-light">
                メリット・デメリットを比較し、最適な選び方を解説
              </p>
            </Link>
            <Link
              href="/articles/instant-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">即日ファクタリング10選</p>
              <p className="mt-1 text-sm text-text-light">
                最短10分〜当日入金のおすすめ会社を紹介
              </p>
            </Link>
            <Link
              href="/articles/for-corporation/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">法人向けファクタリング5選</p>
              <p className="mt-1 text-sm text-text-light">
                中小企業の資金調達に最適なサービスを比較
              </p>
            </Link>
            <Link
              href="/articles/for-sole-proprietor/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">個人事業主向けファクタリング5選</p>
              <p className="mt-1 text-sm text-text-light">
                少額・即日対応のサービスを比較
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            手数料の安いファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            ファクタリング会社を手数料・入金スピード・対応エリアで徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
