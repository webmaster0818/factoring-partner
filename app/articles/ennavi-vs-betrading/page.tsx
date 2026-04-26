import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "えんナビ vs ビートレーディング比較｜どっちがおすすめ？",
  description:
    "えんナビとビートレーディングを手数料・入金速度・買取額・対応時間・審査・特徴の6項目で徹底比較。24時間365日対応のえんナビと最短2時間入金のビートレーディング、どちらが自社に合うか判断できます。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/ennavi-vs-betrading/",
  },
  openGraph: {
    title:
      "えんナビ vs ビートレーディング比較｜どっちがおすすめ？",
    description:
      "えんナビとビートレーディングを6項目で徹底比較。それぞれの強み・弱みとおすすめユーザーを解説。",
    url: "https://factoring-partner.pages.dev/articles/ennavi-vs-betrading/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const comparisonItems = [
  { item: "手数料", ennavi: "5%〜", betrading: "2社間：4%〜12% / 3社間：2%〜9%" },
  { item: "入金スピード", ennavi: "最短即日", betrading: "最短2時間" },
  { item: "買取可能額", ennavi: "50万〜5,000万円", betrading: "制限なし（少額〜大口）" },
  { item: "対応時間", ennavi: "24時間365日", betrading: "平日9:30〜18:00" },
  { item: "契約方式", ennavi: "2社間特化", betrading: "2社間・3社間の両方" },
  { item: "審査通過率", ennavi: "非公開", betrading: "非公開" },
  { item: "対象", ennavi: "法人・個人事業主", betrading: "法人・個人事業主" },
  { item: "オンライン対応", ennavi: "◎（完全オンライン可）", betrading: "◎（完全オンライン可）" },
  { item: "累計実績", ennavi: "非公開", betrading: "9.1万社・買取額1,824億円" },
  { item: "特徴", ennavi: "24h365日対応・2社間特化", betrading: "業界最大級の実績・最短2時間" },
];

const ennaviStrengths = [
  {
    title: "24時間365日対応で深夜・休日でも相談可能",
    description:
      "えんナビの最大の特徴は、24時間365日対応している点です。平日の営業時間外や土日祝日でも電話やWebからの相談が可能で、急な資金需要に柔軟に対応できます。夜間に資金繰りの不安を感じた時や、連休中に緊急の支払いが発生した場合でも、すぐに相談できる安心感があります。",
  },
  {
    title: "2社間ファクタリング特化で秘匿性が高い",
    description:
      "えんナビは2社間ファクタリングに特化しており、取引先に知られずに資金調達ができます。売掛先への通知が不要なため、取引関係に影響を与えるリスクがありません。取引先との関係性を重視する事業者にとって、大きなメリットです。",
  },
  {
    title: "50万円からの少額利用に対応",
    description:
      "買取可能額は50万円から5,000万円までと幅広く対応しています。少額からの利用が可能なため、個人事業主や小規模法人でも気軽に利用できます。初めてファクタリングを利用する方にとっても、少額から試せるのは安心材料となります。",
  },
];

const ennaviWeaknesses = [
  {
    title: "3社間ファクタリングに非対応",
    description:
      "えんナビは2社間ファクタリングに特化しているため、3社間ファクタリングには対応していません。手数料を最小限に抑えたい方や、取引先にファクタリングの利用を伝えても問題ない方には、3社間対応のサービスの方が適している場合があります。",
  },
  {
    title: "買取上限が5,000万円",
    description:
      "買取可能額の上限が5,000万円に設定されているため、大型案件の資金調達には不向きです。数千万円〜数億円規模のファクタリングが必要な場合は、金額制限のない他社を検討する必要があります。",
  },
  {
    title: "累計実績が非公開",
    description:
      "えんナビは累計取引社数や買取額を公開していません。実績を重視して信頼性を判断したい方にとっては、やや不安材料となる可能性があります。",
  },
];

const betradingStrengths = [
  {
    title: "業界最大級の実績で信頼性が高い",
    description:
      "累計取引9.1万社、買取額1,824億円という業界トップクラスの実績を誇ります。Google MAPでも★4.0（145件）と高評価を獲得しており、多くの事業者に選ばれてきた信頼性があります。大手ならではの安心感を重視する方に適しています。",
  },
  {
    title: "最短2時間の入金スピード",
    description:
      "必要書類が揃っていれば、最短2時間で入金が完了します。クラウドサインを活用した電子契約にも対応しており、来店不要で迅速な手続きが可能です。緊急度の高い資金需要に強みを発揮します。",
  },
  {
    title: "買取額に制限がなく柔軟に対応",
    description:
      "買取可能額に上限・下限が設定されていないため、数万円の少額案件から数億円の大口案件まで対応できます。事業の成長に合わせて利用額を拡大できる柔軟性があります。",
  },
  {
    title: "2社間・3社間の両方に対応",
    description:
      "2社間と3社間の両方のファクタリングに対応しているため、案件や状況に応じて最適な契約方式を選べます。取引先との関係性や手数料の優先度に応じた使い分けが可能です。",
  },
];

const betradingWeaknesses = [
  {
    title: "営業時間が平日のみ",
    description:
      "ビートレーディングの営業時間は平日9:30〜18:00です。土日祝日や深夜に急な資金需要が発生した場合、即座に対応してもらうことができません。休日や夜間の対応を重視する方には不向きです。",
  },
  {
    title: "メール対応にムラがある場合がある",
    description:
      "口コミでは「電話対応は迅速だがメールの返信が遅い」という声が見られます。メールでの問い合わせを主に利用したい方は、電話も併用することをおすすめします。",
  },
  {
    title: "手数料が案件ごとに変動する",
    description:
      "手数料は売掛先の信用力・金額・支払いサイトによって変動するため、リピート利用でも前回と同条件になるとは限りません。手数料の固定を求める方には不確実性がある点に注意が必要です。",
  },
];

const recommendationItems = [
  {
    scenario: "24時間365日いつでも相談したい",
    recommendation: "えんナビ",
    reason: "深夜・休日でも対応可能で、急な相談に強い",
  },
  {
    scenario: "取引先に絶対知られたくない",
    recommendation: "えんナビ",
    reason: "2社間特化で秘匿性を重視したサービス設計",
  },
  {
    scenario: "最速で入金してほしい",
    recommendation: "ビートレーディング",
    reason: "最短2時間入金で業界最速水準",
  },
  {
    scenario: "5,000万円以上の大口案件を扱いたい",
    recommendation: "ビートレーディング",
    reason: "買取額の上限がなく大口にも対応",
  },
  {
    scenario: "手数料をとにかく安く抑えたい",
    recommendation: "ビートレーディング",
    reason: "3社間ファクタリング（2〜9%）で手数料を大幅に削減可能",
  },
  {
    scenario: "初めてファクタリングを利用する",
    recommendation: "どちらもおすすめ",
    reason: "えんナビは少額対応・24h相談、ビートレーディングは実績と安心感",
  },
  {
    scenario: "大手の実績ある会社を利用したい",
    recommendation: "ビートレーディング",
    reason: "累計9.1万社・1,824億円の業界最大級の実績",
  },
  {
    scenario: "少額（50万〜300万円程度）を調達したい",
    recommendation: "えんナビ",
    reason: "50万円からの少額利用に特化した柔軟な対応",
  },
];

const faqs = [
  {
    question: "えんナビとビートレーディングの手数料はどちらが安いですか？",
    answer:
      "一概には比較できませんが、ビートレーディングの方が手数料レンジが明確です。えんナビは5%〜と下限のみ公開しているのに対し、ビートレーディングは2社間4〜12%、3社間2〜9%と上限も明示しています。3社間ファクタリングを利用できる場合は、ビートレーディングの方が安くなる可能性が高いです。ただし、実際の手数料は案件ごとに異なるため、両社から見積もりを取ることをおすすめします。",
  },
  {
    question: "入金スピードはどちらが速いですか？",
    answer:
      "入金スピードはビートレーディングの方が優位です。ビートレーディングは最短2時間で入金されるのに対し、えんナビは最短即日対応です。ただし、えんナビは24時間365日対応しているため、休日や夜間に申し込んだ場合の初動はえんナビの方が早くなります。",
  },
  {
    question: "個人事業主はどちらを選べばいいですか？",
    answer:
      "どちらも個人事業主の利用に対応しています。少額（50万〜300万円程度）の利用であればえんナビ、より大きな金額や3社間ファクタリングを検討している場合はビートレーディングがおすすめです。24時間相談できる安心感を重視するならえんナビが適しています。",
  },
  {
    question: "審査はどちらが通りやすいですか？",
    answer:
      "ファクタリングの審査は利用者ではなく売掛先の信用力が重視されるため、どちらのサービスでも売掛先が信用力の高い企業であれば審査に通りやすくなります。両社とも具体的な審査通過率は公開していませんが、赤字決算や税金滞納があっても利用できたという口コミは両社に見られます。",
  },
  {
    question: "えんナビとビートレーディングの両方に見積もりを取ることは可能ですか？",
    answer:
      "はい、可能です。むしろ相見積もりは推奨されます。両社とも見積もりは無料で、見積もりだけで契約を強制されることはありません。同じ売掛債権で両社から見積もりを取り、手数料やサービス内容を比較した上で判断することをおすすめします。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "えんナビ vs ビートレーディング比較｜どっちがおすすめ？",
  description:
    "えんナビとビートレーディングを6項目で徹底比較。それぞれの強み・弱みとおすすめユーザーを解説。",
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
      "https://factoring-partner.pages.dev/articles/ennavi-vs-betrading/",
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
      name: "えんナビ vs ビートレーディング",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function EnnaviVsBetradingPage() {
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
          { label: "えんナビ vs ビートレーディング" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            サービス比較
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            えんナビ vs ビートレーディング比較
            <br className="hidden md:block" />
            どっちがおすすめ？
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            24時間365日対応の「えんナビ」と業界最大級の実績を持つ「ビートレーディング」を手数料・入金速度・買取額・対応時間・審査・特徴の6項目で徹底比較。あなたに合ったファクタリング会社がわかります。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#comparison" className="hover:underline">1. えんナビ vs ビートレーディング 比較表</a></li>
            <li><a href="#ennavi-strengths" className="hover:underline">2. えんナビの強み・弱み</a></li>
            <li><a href="#betrading-strengths" className="hover:underline">3. ビートレーディングの強み・弱み</a></li>
            <li><a href="#recommendation" className="hover:underline">4. シーン別おすすめ判定</a></li>
            <li><a href="#both-estimate" className="hover:underline">5. 相見積もりのすすめ</a></li>
            <li><a href="#summary" className="hover:underline">6. 総合評価・結論</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            えんナビ vs ビートレーディング 比較表
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            まずは、えんナビとビートレーディングの主要スペックを一覧表で比較します。手数料・入金速度・買取額・対応時間・契約方式・実績の6項目に注目してください。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">えんナビ</th>
                  <th className="px-4 py-3 font-semibold">ビートレーディング</th>
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
                    <td className="px-4 py-3 text-text-light">{row.ennavi}</td>
                    <td className="px-4 py-3 text-text-light">{row.betrading}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg bg-primary-light p-4">
            <p className="text-sm leading-relaxed text-text-light">
              <strong className="text-primary">ポイント：</strong>えんナビは24時間365日対応と2社間特化が強み。ビートレーディングは入金スピード・実績・買取額の柔軟性で優位です。
            </p>
          </div>
        </section>

        {/* ── えんナビの強み・弱み ─── */}
        <section id="ennavi-strengths" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            えんナビの強み・弱み
          </h2>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-sm">&#9675;</span>
              えんナビの強み
            </h3>
            <div className="space-y-4">
              {ennaviStrengths.map((item, i) => (
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
              えんナビの弱み
            </h3>
            <div className="space-y-4">
              {ennaviWeaknesses.map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <p className="mb-2 font-semibold text-accent">{item.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ビートレーディングの強み・弱み ─── */}
        <section id="betrading-strengths" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ビートレーディングの強み・弱み
          </h2>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-sm">&#9675;</span>
              ビートレーディングの強み
            </h3>
            <div className="space-y-4">
              {betradingStrengths.map((item, i) => (
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
              ビートレーディングの弱み
            </h3>
            <div className="space-y-4">
              {betradingWeaknesses.map((item, i) => (
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
            利用シーンごとに、えんナビとビートレーディングのどちらが適しているかを判定しました。自社の状況に近いシーンを参考にしてください。
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

        {/* ── 相見積もりのすすめ ─── */}
        <section id="both-estimate" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            相見積もりのすすめ
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            えんナビとビートレーディング、どちらが自社に合っているか迷った場合は、両社から無料見積もりを取ることをおすすめします。ファクタリングの手数料は案件ごとに異なるため、実際に見積もりを比較しないと正確な判断ができません。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            相見積もりのメリットは、手数料の比較ができるだけでなく、担当者の対応やサービスの質も実感できる点です。特にファクタリングは担当者との相性も重要な要素であり、実際にコミュニケーションを取ってみることで判断材料が増えます。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">相見積もりの手順</p>
            <ol className="space-y-2 text-sm text-text-light list-decimal list-inside">
              <li>両社のWebサイトから見積もり依頼を送信（各5分程度）</li>
              <li>必要書類（請求書・通帳コピーなど）を準備・提出</li>
              <li>両社から手数料・条件の提示を受ける</li>
              <li>手数料・入金スピード・担当者の対応を比較</li>
              <li>条件の良い方で契約を締結</li>
            </ol>
          </div>
          <p className="mt-4 leading-relaxed text-text-light">
            相見積もりは無料で、見積もりだけで契約を強制されることはありません。むしろ、複数社から見積もりを取っていることを伝えると、手数料の交渉材料にもなります。初めてファクタリングを利用する方は、まず2〜3社から見積もりを取ることから始めましょう。
          </p>
        </section>

        {/* ── えんナビが向いている事業者 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            えんナビが向いている事業者
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            以下の条件に当てはまる方は、えんナビの利用を検討してみてください。
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <p className="mb-4 font-bold text-secondary">えんナビがおすすめの人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>深夜・休日にも相談したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>取引先に絶対に知られたくない方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>50万〜5,000万円の範囲で調達したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>2社間ファクタリングに限定して利用したい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">えんナビが向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>3社間ファクタリングで手数料を抑えたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>5,000万円超の大口利用を希望する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>実績を重視して会社を選びたい方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── ビートレーディングが向いている事業者 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ビートレーディングが向いている事業者
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            以下の条件に当てはまる方は、ビートレーディングの利用を検討してみてください。
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <p className="mb-4 font-bold text-secondary">ビートレーディングがおすすめの人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>業界大手の実績あるサービスを利用したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>最短2時間の入金スピードを求める方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>金額制限なく柔軟に利用したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>3社間で手数料を抑えたい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">ビートレーディングが向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>深夜・休日にすぐ対応してほしい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>メールのみで完結させたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料の固定料金を求める方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            総合評価・結論
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            えんナビとビートレーディングは、それぞれ異なる強みを持つファクタリング会社です。どちらが優れているということではなく、利用者のニーズによって最適な選択が変わります。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">えんナビ</strong>は、24時間365日対応という業界でも珍しいサポート体制が最大の強みです。深夜や休日に急な資金需要が発生しやすい業種や、営業時間内に電話しにくい多忙な経営者にとって、いつでも相談できる安心感は大きな価値があります。2社間ファクタリングに特化しているため、取引先への秘匿性を重視する方にも適しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">ビートレーディング</strong>は、累計取引9.1万社・買取額1,824億円という圧倒的な実績と、最短2時間の入金スピードが強みです。買取額に制限がなく、2社間・3社間の両方に対応しているため、幅広い事業者のニーズに応えられます。大手ならではの信頼性と安心感を重視する方に適しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            迷った場合は、まず両社から無料見積もりを取り、手数料と担当者の対応を比較した上で判断することをおすすめします。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">結論まとめ</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span><strong>24h対応・2社間特化を重視するなら</strong> → えんナビ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span><strong>実績・入金速度・柔軟性を重視するなら</strong> → ビートレーディング</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span><strong>迷ったら</strong> → 両社から無料見積もりを取って比較</span>
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
            まずは無料見積もりで比較してみましょう
          </h2>
          <p className="mb-6 text-sm text-white/80">
            えんナビ・ビートレーディングともに見積もりは無料。相見積もりで最適な条件を見つけましょう。
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://ennavi.tokyo/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-cta inline-block"
            >
              えんナビ公式サイト
            </a>
            <a
              href="https://betrading.jp/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-cta inline-block"
            >
              ビートレーディング公式サイト
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
              href="/reviews/ennavi/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">えんナビの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">24h365日対応のファクタリング会社を検証</p>
            </Link>
            <Link
              href="/reviews/betrading/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">累計9.1万社の大手を検証</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">49社以上を徹底比較</p>
            </Link>
            <Link
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング手数料ガイド</p>
              <p className="mt-1 text-sm text-text-light">手数料の相場と安くするコツ</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
