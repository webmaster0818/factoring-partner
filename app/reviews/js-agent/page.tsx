import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "事業資金エージェントの口コミ・評判｜ANNEX株式会社のファクタリングを検証",
  description:
    "事業資金エージェント（運営：ANNEX株式会社）の評判を公式サイトの一次情報で検証。手数料は3社間1.5%〜9%・2社間5%〜20%（公式FAQ）、500万円まで当日振込対応、非対面OKのファクタリングの実態を調査しました。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/js-agent/",
  },
  openGraph: {
    title:
      "事業資金エージェントの口コミ・評判｜ANNEX株式会社のファクタリングを検証",
    description:
      "事業資金エージェント（ANNEX株式会社）のファクタリングを公式サイトの一次情報で検証。手数料・入金スピードを調査。",
    url: "https://hyogo-shihoushoshi.jp/reviews/js-agent/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "事業資金エージェント" },
  {
    label: "手数料",
    value:
      "3社間取引：1.5%〜9%／2社間取引：5%〜20%（公式サイトFAQにて2026年7月確認）",
  },
  {
    label: "入金スピード",
    value:
      "500万円までは振込で当日対応。1,000万円でも場所に応じて担当者が当日出張。1,000万円超は3社間でも最短3日（公式サイトにて2026年7月確認）",
  },
  {
    label: "買取可能額",
    value:
      "明確な上限・下限の公式表記なし（「1,000万円以下に特化した非対面OK」の公式表記あり。申込フォームの選択肢は〜100万円から5,001万円〜まで）",
  },
  {
    label: "対象",
    value: "法人（個人事業主の利用可否は公式表記なし）",
  },
  { label: "契約方式", value: "2社間・3社間の両方に対応（公式FAQに両取引の手数料記載）" },
  {
    label: "オンライン対応",
    value:
      "○（非対面OK・来店不要。書類はメール・FAXで提出、Web見積もり・オンライン査定は24時間365日受付）",
  },
  {
    label: "営業時間",
    value: "9:00〜19:00（日・祝祭日休み）（公式サイトにて2026年7月確認）",
  },
  { label: "運営会社", value: "ANNEX株式会社" },
  {
    label: "所在地",
    value: "東京都港区新橋4-9-1 新橋プラザビル5F",
  },
];

const merits = [
  {
    title: "手数料のレンジが2社間・3社間ともに公式FAQで明示されている",
    description:
      "事業資金エージェントは、公式FAQで「通常3社間取引で1.5%〜9%、2社間取引で5%〜20%」と、契約方式ごとの手数料レンジを明示しています（2026年7月確認）。下限しか公表しないファクタリング会社が多い中、上限まで示されているため、事前におおよそのコスト上限を把握したうえで検討できます。",
  },
  {
    title: "500万円までは当日振込・1,000万円でも当日出張対応",
    description:
      "公式FAQでは「500万円まででしたらお振込で当日対応いたします。1,000万円でも場所に応じて担当者が当日出張いたします。1,000万円を超える場合、3社間でも最短3日で対応いたします」と、金額帯ごとの対応スピードが具体的に示されています（2026年7月確認）。審査所要時間は概ね1時間程度との公式表記もあり、急ぎの資金需要に対応できる体制です。",
  },
  {
    title: "非対面OK・来店不要で手続きが完結する",
    description:
      "公式サイトでは「1,000万円以下に特化した非対面OK」「事務所に居ながら電話1本で資金調達」と案内されており、必要書類はメールやFAXで提出、契約時もご来店の必要はないと明記されています（2026年7月確認）。Webのスピード見積もり・オンライン査定は24時間365日受け付けています。",
  },
  {
    title: "赤字決算・税金滞納・設立間もない会社でも相談可能",
    description:
      "公式FAQでは、赤字決算は「全く問題ありません」、税金の滞納は「滞納されている金額や期間にもよりますが概ね可能」、設立間もない会社は「売掛金の入金が3ヶ月以上あれば可能」と案内されています（2026年7月確認）。売掛先との取引内容を重視して審査するため、銀行融資を断られた場合でも利用できると明記されています。",
  },
];

const demerits = [
  {
    title: "2社間の手数料上限が20%と高めの水準",
    description:
      "公式FAQに明示された2社間取引の手数料は5%〜20%です（2026年7月確認）。上限まで公表している誠実さはあるものの、20%という上限は、2社間の一般的な目安（8〜18%程度・会社により異なる）と比べて高めになる可能性があります。売掛先との関係が強固な場合は、手数料の低い3社間（1.5%〜9%）を勧める旨も公式に記載されているため、条件に応じて契約方式を検討しましょう。",
  },
  {
    title: "買取可能額や個人事業主対応の明確な公式表記がない",
    description:
      "買取可能額の上限・下限は公式サイトに明記されていません（申込フォームの金額選択肢は〜100万円から5,001万円〜まで）。また、個人事業主が利用できるかどうかも公式サイトでは確認できませんでした（2026年7月確認時点）。該当する方は、申し込み前に電話等で確認するか、個人事業主対応を公式に明記している他社を検討する必要があります。",
  },
  {
    title: "第三者の口コミや実績値の公開が限定的",
    description:
      "累計買取額・取引社数などの実績値は公式サイトで確認できず、大手口コミサイトでの第三者の投稿もまだ少ないのが現状です。判断材料が限られるため、見積もりを取得して条件を書面で確認し、複数社と比較したうえで利用することをおすすめします。",
  },
];

const steps = [
  {
    step: "1",
    title: "お申し込み（ご相談・お問い合わせ）",
    description:
      "電話またはWebフォーム（スピード見積もり・オンライン査定）から申し込み。Web受付は24時間365日対応です（公式表記）。",
  },
  {
    step: "2",
    title: "オンライン審査",
    description:
      "必要書類をメールやFAXで提出し、売掛先の審査を受けます。審査所要時間は概ね1時間程度と公式に案内されています。",
  },
  {
    step: "3",
    title: "最終確認・契約",
    description:
      "審査後に買取条件が提示され、承諾したら契約へ。来店の必要はありません（公式表記）。",
  },
  {
    step: "4",
    title: "実行（入金）",
    description:
      "契約完了後、手数料を差し引いた金額が指定口座に振り込まれます。500万円までは当日振込対応です（公式表記）。",
  },
];

const faqs = [
  {
    question: "事業資金エージェントの運営会社はどこですか？js-agent.netは公式サイトですか？",
    answer:
      "事業資金エージェントはANNEX株式会社（所在地：東京都港区新橋4-9-1 新橋プラザビル5F）が運営するファクタリングサービスです。js-agent.netの会社概要ページに「サービス屋号：事業資金エージェント／法人名：ANNEX株式会社」と明記されており、js-agent.netが公式サイトであることを確認しています（2026年7月確認）。",
  },
  {
    question: "事業資金エージェントの手数料はいくらですか？",
    answer:
      "公式サイトのFAQによると、通常3社間取引で1.5%〜9%、2社間取引で5%〜20%です（2026年7月確認）。売掛先との取引状況により変動します。公式には「お取引先様との関係が強固な会社様は3社間をお勧め、秘密厳守をお考えの方は2社間がお勧め」と案内されています。実際の手数料は見積もりで確認してください。",
  },
  {
    question: "事業資金エージェントは本当に即日で入金されますか？",
    answer:
      "公式FAQでは「500万円まででしたらお振込で当日対応いたします。1,000万円でも場所に応じて担当者が当日出張いたします。1,000万円を超える場合、3社間でも最短3日で対応いたします」と案内されています（2026年7月確認）。審査は概ね1時間程度との公式表記があるため、必要書類を揃えて早い時間帯に申し込むことが当日入金のポイントです。",
  },
  {
    question: "事業資金エージェントは個人事業主でも利用できますか？",
    answer:
      "個人事業主の利用可否について、公式サイトに明確な記載は確認できませんでした（2026年7月確認時点）。申込フォームでは法人名の入力が任意となっていますが、確実な情報ではないため、利用を検討する場合は事前に電話（受付9:00〜19:00・日祝休）等で確認することをおすすめします。個人事業主対応を公式に明記している会社としては、ラボルやペイトナーなどがあります。",
  },
  {
    question: "赤字決算や税金の滞納があっても利用できますか？",
    answer:
      "公式FAQでは、赤字決算は「全く問題ありません」、消費税など税金の滞納は「滞納されている金額や期間にもよりますが概ね可能」と案内されています（2026年7月確認）。ファクタリングは売掛金や取引状況が審査対象となるためです。ただし最終的な可否は個別の審査によります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "事業資金エージェントの口コミ・評判｜ANNEX株式会社のファクタリングを検証",
  description:
    "事業資金エージェント（ANNEX株式会社）のファクタリングを公式サイトの一次情報で検証。手数料・入金スピードを調査。",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/js-agent/",
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
      name: "業者レビュー",
      item: "https://hyogo-shihoushoshi.jp/reviews/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "事業資金エージェント",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function JsAgentReviewPage() {
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
          { label: "業者レビュー", href: "/reviews/" },
          { label: "事業資金エージェント" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            事業資金エージェントの口コミ・評判
            <br className="hidden md:block" />
            ANNEX株式会社のファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            事業資金エージェント（運営：ANNEX株式会社）のファクタリングを、公式サイトの一次情報にもとづいて検証。手数料・入金スピード・非対面対応を調査しました（2026年7月調査）。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            事業資金エージェントは、1,000万円以下の売掛金を非対面・来店不要で当日資金化したい法人に向いたサービスです。手数料は3社間1.5%〜9%・2社間5%〜20%と契約方式ごとに上限まで公式FAQで明示されており（2026年7月確認）、500万円までは当日振込対応です。一方、2社間の手数料上限20%は高めの水準で、個人事業主の利用可否や買取可能額の明確な公式表記がないため、個人事業主の方や手数料を最優先する方は、
            <Link href="/reviews/ququmo/" className="text-primary underline hover:no-underline">QuQuMo</Link>
            ・
            <Link href="/reviews/labol/" className="text-primary underline hover:no-underline">ラボル</Link>
            ・
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            などとの比較をおすすめします。
          </p>
          <p className="mt-3 text-sm font-semibold text-primary">
            <a href="#recommended" className="hover:underline">向き・不向きの詳細</a>
            <span className="mx-2 text-text-light">／</span>
            <a href="/ranking/" className="hover:underline">他社と条件で比較</a>
            <span className="mx-2 text-text-light">／</span>
            <a href="/diagnosis/" className="hover:underline">30秒無料診断</a>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. 事業資金エージェントの基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. 事業資金エージェントの会社概要と特徴</a></li>
            <li><a href="#reviews" className="hover:underline">3. 口コミ・評判の調査結果</a></li>
            <li><a href="#merits" className="hover:underline">4. 事業資金エージェントのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">5. 事業資金エージェントのデメリット・注意点3つ</a></li>
            <li><a href="#flow" className="hover:underline">6. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">7. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#summary" className="hover:underline">8. 総合評価</a></li>
            <li><a href="#faq" className="hover:underline">9. よくある質問</a></li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれる場合があります。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点（2026年7月）のものであり、手数料・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            事業資金エージェントの基本情報
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {basicInfo.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-section-bg" : "bg-white"}>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-40">
                      {item.label}
                    </th>
                    <td className="px-4 py-3 text-text-light">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-text-light">
            出典：事業資金エージェント公式サイト（
            <a href="https://js-agent.net/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">js-agent.net</a>
            ）。同サイトの会社概要ページに「サービス屋号：事業資金エージェント／法人名：ANNEX株式会社」と明記されており、公式サイトであることを確認しています（2026年7月）。
          </p>
        </section>

        {/* ── 会社概要・特徴 ─── */}
        <section id="about" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            事業資金エージェントの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            事業資金エージェントは、ANNEX株式会社（所在地：東京都港区新橋4-9-1
            新橋プラザビル5F）が運営するファクタリングサービスです。「事業資金エージェント」はサービスの屋号で、公式サイトjs-agent.netの会社概要ページに法人名がANNEX株式会社であることが明記されています（2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            サービス面の特徴は「1,000万円以下に特化した非対面OK」という公式の打ち出しです。書類はメール・FAXで提出でき、来店不要で契約まで完結します。金額帯ごとの対応スピードが公式FAQで具体的に示されており、500万円までは当日振込、1,000万円でも場所に応じて担当者が当日出張、1,000万円超は3社間でも最短3日とされています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            なお、ファクタリングは売掛債権の売買（債権譲渡）であり、貸金（融資）ではありません。事業資金エージェントの公式サイトでも「金融機関等からの融資は借入金となりますが、ファクタリングは売掛金売買となるため借入金とはなりません」「売掛先が倒産した場合でも支払いする義務はありません」「担保や保証人等も不要」と説明されています（2026年7月確認）。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">事業資金エージェントの3つの強み（公式サイトの表記より）</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料レンジを2社間（5%〜20%）・3社間（1.5%〜9%）とも上限まで公式FAQで明示</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>500万円まで当日振込・審査は概ね1時間程度のスピード対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>1,000万円以下に特化した非対面OK・来店不要の手続き</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 口コミ・評判の調査結果 ─── */}
        <section id="reviews" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            口コミ・評判の調査結果
          </h2>
          <div className="mb-6 rounded-lg border border-border bg-section-bg p-4 text-xs text-text-light leading-relaxed">
            ※当編集部は2026年7月時点で、事業資金エージェントに関する第三者口コミサイト等の情報を調査しましたが、投稿数がまだ少なく、傾向を客観的にまとめられるだけの中立的な第三者の口コミは確認できませんでした。本ページでは架空の口コミを掲載しない方針のため、公式サイトで確認できる事実のみを紹介します。
          </div>
          <p className="mb-4 leading-relaxed text-text-light">
            事業資金エージェントの公式サイトには「お客様の声」ページが設けられているほか、複数の紹介メディアに掲載された旨の新着情報が掲載されています（2026年7月確認）。ただし、これらは運営会社による公式発信の情報であり、中立的な第三者による評価とは性質が異なる点に留意してください。
          </p>
          <p className="leading-relaxed text-text-light">
            第三者の口コミが少ない段階でサービスを検討する場合は、①見積もりを必ず取得して手数料・振込額を書面で確認する、②契約書で債権譲渡契約（ノンリコース）であることを確認する、③複数社と条件を比較する、という基本を守ることをおすすめします。比較先は
            <Link href="/ranking/" className="text-primary underline hover:no-underline">おすすめランキング</Link>
            を参考にしてください。
          </p>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            事業資金エージェントのメリット4つ
          </h2>
          <div className="space-y-6">
            {merits.map((merit, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  {merit.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{merit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── デメリット ─── */}
        <section id="demerits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            事業資金エージェントのデメリット・注意点3つ
          </h2>
          <div className="space-y-6">
            {demerits.map((demerit, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  {demerit.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{demerit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            事業資金エージェントの利用の流れ
          </h2>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-border bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-text-main">{s.title}</p>
                  <p className="mt-1 text-sm text-text-light">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ / 向いていない人 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            こんな人におすすめ / 向いていない人
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <p className="mb-4 font-bold text-secondary">おすすめの人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>500万円以下の売掛金を当日中に資金化したい法人の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手数料の上限まで事前に把握して検討したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>非対面・来店不要で手続きを完結したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>売掛先との関係が強固で、手数料の低い3社間（1.5%〜9%）を使える方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>赤字決算・税金滞納などで銀行融資が難しい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>個人事業主・フリーランスの方（利用可否の公式表記なし）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>2社間で手数料をできるだけ低く抑えたい方（上限20%）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>大手の実績公開や第三者の口コミの多さを重視する方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            事業資金エージェントの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            事業資金エージェントは、「1,000万円以下に特化・非対面OK」という明確なポジションを持つファクタリングサービスです。手数料を2社間・3社間ともに上限まで公式FAQで明示し、金額帯ごとの対応スピード（500万円まで当日振込など）も具体的に示している点は、事前にコストとスケジュールの見通しを立てやすく、透明性の面で評価できます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、2社間の手数料上限が20%と高めであること、買取可能額や個人事業主対応の明確な公式表記がないこと、第三者の口コミ・実績値の公開が限定的であることは留意点です。特に個人事業主の方は、申し込み前の確認か、個人事業主対応を公式に明記している他社の検討をおすすめします。
          </p>
          <p className="leading-relaxed text-text-light">
            比較対象としては、オンライン完結で手数料1%〜の
            <Link href="/reviews/ququmo/" className="text-primary underline hover:no-underline">QuQuMo</Link>
            、個人事業主・フリーランス対応で一律10%の
            <Link href="/reviews/labol/" className="text-primary underline hover:no-underline">ラボル</Link>
            、買取実績の公開が手厚い
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            などが候補になります。条件に合う会社を探すには
            <Link href="/diagnosis/" className="text-primary underline hover:no-underline">30秒無料診断</Link>
            もご利用ください。
          </p>
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
            事業資金エージェントに無料相談
          </h2>
          <p className="mb-6 text-sm text-white/80">
            500万円まで当日振込対応・非対面OK（公式サイト表記）。Web見積もりは24時間365日受付。
          </p>
          <a
            href="https://js-agent.net/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            事業資金エージェント公式サイトで無料相談
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/ququmo/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">QuQuMoの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料1%〜のオンライン完結型を検証</p>
            </Link>
            <Link
              href="/reviews/labol/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ラボルの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">個人事業主・フリーランス対応の一律10%を検証</p>
            </Link>
            <Link
              href="/diagnosis/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">30秒無料診断</p>
              <p className="mt-1 text-sm text-text-light">7つの質問であなたに合う会社を絞り込み</p>
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
