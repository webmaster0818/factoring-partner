import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ペイトナー vs ラボル比較｜フリーランスにおすすめはどっち？",
  description:
    "ペイトナーとラボルをフリーランス向けに徹底比較。手数料・入金速度・買取上限・対応時間・審査の5項目で比較。最短10分のペイトナーと24時間365日対応のラボル、どちらが自分に合うか判断できます。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/paytner-vs-labol/",
  },
  openGraph: {
    title:
      "ペイトナー vs ラボル比較｜フリーランスにおすすめはどっち？",
    description:
      "ペイトナーとラボルをフリーランス向けに徹底比較。5項目の比較表とシーン別おすすめを掲載。",
    url: "https://factoring-partner.pages.dev/articles/paytner-vs-labol/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const comparisonItems = [
  { item: "手数料", paytner: "一律10%", labol: "一律10%" },
  { item: "入金スピード", paytner: "最短10分", labol: "最短30分" },
  { item: "買取可能額", paytner: "初回25万円 / 2回目以降最大100万円", labol: "1万円〜上限なし" },
  { item: "対応時間", paytner: "平日10:00〜19:00", labol: "24時間365日" },
  { item: "対象", paytner: "フリーランス・個人事業主", labol: "フリーランス・個人事業主" },
  { item: "契約方式", paytner: "2社間", labol: "2社間" },
  { item: "累計実績", paytner: "累計申請件数50万件突破", labol: "非公開" },
  { item: "必要書類", paytner: "請求書・本人確認書類", labol: "請求書・本人確認書類・通帳" },
  { item: "債権譲渡登記", paytner: "不要", labol: "不要" },
  { item: "運営会社", paytner: "ペイトナー株式会社", labol: "株式会社ラボル（東証上場アセットコーポレーション100%子会社）" },
];

const paytnerStrengths = [
  {
    title: "業界最速クラスの最短10分入金",
    description:
      "ペイトナーの最大の強みは、最短10分という圧倒的な入金スピードです。フリーランス向けファクタリングの中でも最速クラスであり、急な支払いに直面した時に非常に頼りになります。必要書類が揃っていれば、申込から入金までわずか数分で完了するケースもあります。",
  },
  {
    title: "累計申請件数50万件の豊富な実績",
    description:
      "ペイトナーは累計申請件数50万件を突破しており、フリーランス向けファクタリングとしては圧倒的な利用実績を持っています。多くのフリーランスに選ばれている安心感があり、サービスの信頼性を裏付けています。",
  },
  {
    title: "手続きが非常にシンプル",
    description:
      "請求書と本人確認書類だけで申込が可能です。通帳のコピーなどの追加書類が不要なため、手続きの手間が最小限に抑えられています。スマートフォンからでも簡単に申請できるUI設計も評価されています。",
  },
];

const paytnerWeaknesses = [
  {
    title: "初回は25万円までの上限あり",
    description:
      "ペイトナーは初回利用時の買取上限が25万円に設定されています。2回目以降は徐々に上限が上がり最大100万円まで利用可能ですが、初回から大きな金額を調達したい場合には不向きです。",
  },
  {
    title: "買取上限が最大100万円",
    description:
      "利用実績を重ねても買取上限は100万円までです。100万円を超える売掛金のファクタリングが必要な場合は、他のサービスを検討する必要があります。",
  },
  {
    title: "対応時間が平日のみ",
    description:
      "ペイトナーの審査対応は平日10:00〜19:00に限られています。土日祝日や夜間に入金が必要な場合は対応してもらえないため、休日の急な資金需要には不向きです。",
  },
];

const laborStrengths = [
  {
    title: "24時間365日対応で休日・深夜でも入金可能",
    description:
      "ラボルの最大の強みは、24時間365日対応している点です。土日祝日や深夜でも審査・入金に対応しており、曜日や時間を問わず資金調達が可能です。フリーランスは平日に作業に集中していることが多いため、休日に資金調達の手続きができるのは大きなメリットです。",
  },
  {
    title: "1万円から上限なしの柔軟な買取額",
    description:
      "ラボルは最低1万円から利用可能で、買取額の上限がありません。少額の請求書から数百万円規模の案件まで、金額を問わず利用できます。ペイトナーの100万円上限を超える案件にも対応できるため、案件規模が大きいフリーランスに適しています。",
  },
  {
    title: "東証上場グループの信頼性",
    description:
      "ラボルの運営元は、東証プライム上場企業であるアセットコーポレーション（旧セレス）の100%子会社です。上場グループならではのコンプライアンス体制と財務基盤があり、安心して利用できます。",
  },
];

const laborWeaknesses = [
  {
    title: "入金スピードがペイトナーに劣る",
    description:
      "ラボルの入金スピードは最短30分で、ペイトナーの最短10分と比較するとやや遅めです。ただし、30分でも十分に速いスピードであり、多くの利用者にとっては問題にならない範囲です。",
  },
  {
    title: "必要書類がやや多い",
    description:
      "ラボルでは請求書・本人確認書類に加えて通帳のコピーも必要です。ペイトナーより書類が1点多いため、手続きの手間がやや増えます。",
  },
  {
    title: "累計実績が非公開",
    description:
      "ラボルは累計利用件数や取引額を公開していません。ペイトナーの累計50万件という実績と比較すると、サービスの利用実績で判断したい方にはやや不安材料となる可能性があります。",
  },
];

const recommendationItems = [
  {
    scenario: "とにかく最速で入金してほしい",
    recommendation: "ペイトナー",
    reason: "最短10分入金は業界最速クラス",
  },
  {
    scenario: "休日や深夜に資金調達したい",
    recommendation: "ラボル",
    reason: "24時間365日対応で曜日・時間を問わない",
  },
  {
    scenario: "初回から大きめの金額を調達したい",
    recommendation: "ラボル",
    reason: "初回から上限なしで利用可能",
  },
  {
    scenario: "100万円以下の少額利用が中心",
    recommendation: "ペイトナー",
    reason: "最短10分入金・累計50万件の実績で安心",
  },
  {
    scenario: "手続きをできるだけ簡単に済ませたい",
    recommendation: "ペイトナー",
    reason: "請求書と本人確認書類の2点だけでOK",
  },
  {
    scenario: "上場グループの運営元で安心したい",
    recommendation: "ラボル",
    reason: "東証上場アセットコーポレーション100%子会社",
  },
  {
    scenario: "100万円を超える売掛金をファクタリングしたい",
    recommendation: "ラボル",
    reason: "買取額に上限がなく大口にも対応",
  },
  {
    scenario: "初めてファクタリングを利用する",
    recommendation: "どちらもおすすめ",
    reason: "ペイトナーは少額から・ラボルは24h対応で初心者にやさしい",
  },
];

const faqs = [
  {
    question: "ペイトナーとラボルの手数料はどちらが安いですか？",
    answer:
      "どちらも一律10%で同じ手数料設定です。ファクタリング業界の中では明瞭でわかりやすい料金体系であり、見積もりを取らなくても事前に手数料がわかる点が両サービスの共通の強みです。手数料以外の隠れた費用も基本的にありません。",
  },
  {
    question: "フリーランスが初めて使うならどちらがおすすめですか？",
    answer:
      "少額（25万円以下）を素早く調達したい場合はペイトナー、より大きな金額や休日の利用を想定している場合はラボルがおすすめです。どちらもフリーランスに特化したサービスのため、初心者にも使いやすい設計になっています。迷った場合は、まず少額でペイトナーを試してみるのも一つの方法です。",
  },
  {
    question: "ペイトナーの買取上限25万円（初回）は増枠できますか？",
    answer:
      "はい、利用実績を重ねることで上限が引き上げられます。2回目以降は段階的に上限が上がり、最大100万円まで利用可能になります。ただし、100万円を超える利用には対応していないため、大口利用が必要な場合はラボルや他のサービスを検討してください。",
  },
  {
    question: "ラボルは本当に24時間365日入金してもらえますか？",
    answer:
      "はい、ラボルは24時間365日の審査・入金に対応しています。土日祝日や年末年始でも利用可能で、最短30分で入金されます。銀行の営業時間外でも対応できるよう、振込方法が工夫されています。",
  },
  {
    question: "両方を併用して利用することは可能ですか？",
    answer:
      "はい、ペイトナーとラボルを併用することは可能です。ただし、同一の売掛債権を複数のファクタリング会社に売却する「二重譲渡」は違法行為です。異なる売掛債権をそれぞれのサービスで利用する形であれば問題ありません。例えば、少額案件はペイトナー、大口案件はラボルと使い分ける方法が有効です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ペイトナー vs ラボル比較｜フリーランスにおすすめはどっち？",
  description:
    "ペイトナーとラボルをフリーランス向けに徹底比較。5項目の比較表とシーン別おすすめを掲載。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
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
      "https://factoring-partner.pages.dev/articles/paytner-vs-labol/",
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
      item: "https://factoring-partner.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "比較",
      item: "https://factoring-partner.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ペイトナー vs ラボル",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function PaytnerVsLabolPage() {
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
          { label: "比較", href: "/articles/" },
          { label: "ペイトナー vs ラボル" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            サービス比較
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ペイトナー vs ラボル比較
            <br className="hidden md:block" />
            フリーランスにおすすめはどっち？
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            最短10分入金・累計50万件のペイトナーと、24時間365日対応・上限なしのラボル。フリーランス向けファクタリングの2大サービスを手数料・入金速度・買取額・対応時間・審査の5項目で徹底比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#comparison" className="hover:underline">1. ペイトナー vs ラボル 比較表</a></li>
            <li><a href="#paytner-strengths" className="hover:underline">2. ペイトナーの強み・弱み</a></li>
            <li><a href="#labol-strengths" className="hover:underline">3. ラボルの強み・弱み</a></li>
            <li><a href="#recommendation" className="hover:underline">4. シーン別おすすめ判定</a></li>
            <li><a href="#use-case" className="hover:underline">5. 使い分けのポイント</a></li>
            <li><a href="#summary" className="hover:underline">6. 総合評価・結論</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ペイトナー vs ラボル 比較表
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            フリーランス向けファクタリングの2大サービス、ペイトナーとラボルの主要スペックを一覧表で比較します。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">ペイトナー</th>
                  <th className="px-4 py-3 font-semibold">ラボル</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row, index) => (
                  <tr
                    key={row.item}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                      {row.item}
                    </td>
                    <td className="px-4 py-3 text-text-light">{row.paytner}</td>
                    <td className="px-4 py-3 text-text-light">{row.labol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg bg-primary-light p-4">
            <p className="text-sm leading-relaxed text-text-light">
              <strong className="text-primary">ポイント：</strong>手数料は両社とも一律10%で同条件。ペイトナーは入金スピード、ラボルは対応時間と買取額の柔軟性が強みです。
            </p>
          </div>
        </section>

        {/* ── ペイトナーの強み・弱み ─── */}
        <section id="paytner-strengths" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ペイトナーの強み・弱み
          </h2>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-sm">&#9675;</span>
              ペイトナーの強み
            </h3>
            <div className="space-y-4">
              {paytnerStrengths.map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <p className="mb-2 font-semibold text-secondary">{item.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-sm">&#9651;</span>
              ペイトナーの弱み
            </h3>
            <div className="space-y-4">
              {paytnerWeaknesses.map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <p className="mb-2 font-semibold text-accent">{item.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ラボルの強み・弱み ─── */}
        <section id="labol-strengths" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ラボルの強み・弱み
          </h2>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-sm">&#9675;</span>
              ラボルの強み
            </h3>
            <div className="space-y-4">
              {laborStrengths.map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <p className="mb-2 font-semibold text-secondary">{item.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-sm">&#9651;</span>
              ラボルの弱み
            </h3>
            <div className="space-y-4">
              {laborWeaknesses.map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <p className="mb-2 font-semibold text-accent">{item.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── シーン別おすすめ ─── */}
        <section id="recommendation" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            シーン別おすすめ判定
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            フリーランスの利用シーンごとに、ペイトナーとラボルのどちらが適しているかを判定しました。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">シーン</th>
                  <th className="px-4 py-3 font-semibold">おすすめ</th>
                  <th className="px-4 py-3 font-semibold">理由</th>
                </tr>
              </thead>
              <tbody>
                {recommendationItems.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-4 py-3 text-text-main font-medium">{row.scenario}</td>
                    <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">{row.recommendation}</td>
                    <td className="px-4 py-3 text-text-light">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 使い分けのポイント ─── */}
        <section id="use-case" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            使い分けのポイント
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ペイトナーとラボルは、それぞれ異なる強みを持つサービスです。フリーランスの働き方やニーズに応じて使い分けることで、より効率的な資金調達が可能になります。
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">平日の急な資金需要にはペイトナー</p>
              <p className="text-sm leading-relaxed text-text-light">
                平日の営業時間内に「今すぐ」資金が必要な場合は、最短10分入金のペイトナーが最適です。クライアントからの支払いが遅延した時や、急な経費の支払いが発生した時に、即座に対応できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">休日・夜間の資金需要にはラボル</p>
              <p className="text-sm leading-relaxed text-text-light">
                週末や深夜に資金が必要になった場合は、24時間365日対応のラボルが頼りになります。フリーランスは平日に作業に集中し、事務処理は週末にまとめて行うことも多いため、休日対応は大きなメリットです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">少額案件はペイトナー、大口案件はラボル</p>
              <p className="text-sm leading-relaxed text-text-light">
                25万円以下の少額案件はペイトナーの手軽さが光ります。一方、100万円を超える大口案件はラボルの出番です。案件の規模に応じて使い分けることで、両サービスの強みを最大限に活かせます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">両方に登録しておくのがベスト</p>
              <p className="text-sm leading-relaxed text-text-light">
                フリーランスの資金需要はいつ発生するかわかりません。事前に両方のアカウントを作成しておけば、状況に応じて最適なサービスを選べます。登録は無料で、利用しなければ費用は一切発生しません。
              </p>
            </div>
          </div>
        </section>

        {/* ── フリーランスがファクタリングを選ぶ際の注意点 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            フリーランスがファクタリングを選ぶ際の注意点
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            フリーランスがファクタリングを利用する際は、以下の点に注意してください。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料は経費として計上可能</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料は「売上債権売却損」として経費計上できます。確定申告の際に忘れずに計上しましょう。ペイトナー・ラボルともに、取引履歴がマイページから確認でき、確定申告の資料として利用できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">二重譲渡は絶対にNG</p>
              <p className="text-sm leading-relaxed text-text-light">
                同じ請求書（売掛債権）を複数のファクタリング会社に売却することは「二重譲渡」と呼ばれ、違法行為です。ペイトナーとラボルを併用する場合は、必ず異なる売掛債権をそれぞれに売却してください。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">依存しすぎに注意</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングは便利な資金調達手段ですが、毎月の売掛金を常にファクタリングしていると手数料がかさみます。あくまで緊急時や一時的な資金繰りの手段として利用し、根本的なキャッシュフロー改善も並行して進めることが大切です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            総合評価・結論
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ペイトナーとラボルは、どちらもフリーランスに特化した優れたファクタリングサービスです。手数料は同じ10%であり、選択のポイントは入金スピード・対応時間・買取上限の3つに絞られます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">ペイトナー</strong>は、最短10分の圧倒的な入金スピードと累計50万件の実績が強みです。平日の営業時間内に素早く少額の資金を調達したい場合に最適で、手続きもシンプルです。初回25万円の上限がありますが、少額利用がメインのフリーランスにとっては十分な設定です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">ラボル</strong>は、24時間365日対応と買取額無制限が強みです。休日や深夜でも資金調達ができるため、平日は作業に集中したいフリーランスに適しています。100万円を超える大口案件にも対応でき、案件規模が大きいフリーランスの頼りになります。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">結論まとめ</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span><strong>最速入金・少額利用中心なら</strong> → ペイトナー</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span><strong>24h対応・大口利用もしたいなら</strong> → ラボル</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span><strong>最適解</strong> → 両方に無料登録して使い分け</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-text-main hover:bg-section-bg">
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">Q</span>
                    {faq.question}
                  </span>
                  <span className="ml-4 transition-transform group-open:rotate-180">&#9660;</span>
                </summary>
                <div className="border-t border-border px-6 py-4">
                  <p className="text-sm leading-relaxed text-text-light">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            フリーランスの資金調達はペイトナー・ラボルから
          </h2>
          <p className="mb-6 text-sm text-white/80">
            どちらも登録無料。事前に両方登録しておけば、必要な時にすぐ利用できます。
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://paytner.co.jp/factoring"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-cta inline-block"
            >
              ペイトナー公式サイト
            </a>
            <a
              href="https://labol.co.jp/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-cta inline-block"
            >
              ラボル公式サイト
            </a>
          </div>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/paytner/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ペイトナーの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">最短10分入金のフリーランス向けサービスを検証</p>
            </Link>
            <Link
              href="/reviews/labol/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ラボルの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">24h365日対応のフリーランス向けサービスを検証</p>
            </Link>
            <Link
              href="/articles/for-freelance/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">フリーランス向けファクタリングガイド</p>
              <p className="mt-1 text-sm text-text-light">フリーランスが知るべき基礎知識</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">49社以上を徹底比較</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
