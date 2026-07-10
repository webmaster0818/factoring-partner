import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "エーストラストの口コミ・評判｜最短2時間・オンライン完結INBUYSのファクタリングを検証",
  description:
    "エーストラストの口コミ・評判を徹底調査。株式会社エーストラスト運営、手数料1%〜15%（3社間1.0%〜4.9%・2社間5%〜15%）、最短2時間送金、オンライン完結型「INBUYS」を提供するファクタリングを公式情報で検証します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/acetrust/",
  },
  openGraph: {
    title:
      "エーストラストの口コミ・評判｜最短2時間・オンライン完結INBUYSのファクタリングを検証",
    description:
      "エーストラストの口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
    url: "https://hyogo-shihoushoshi.jp/reviews/acetrust/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "エーストラスト（ACE-TRUST）" },
  {
    label: "手数料",
    value:
      "1%〜15%（3社間は1.0%〜4.9%以内・2社間は5%〜15%以内）（公式サイトにて2026年7月確認）",
  },
  {
    label: "入金スピード",
    value:
      "最短2時間で送金（オンライン完結型INBUYSは契約まで最速約1時間）（公式サイトにて2026年7月確認）",
  },
  {
    label: "買取可能額",
    value:
      "売掛先1社に対して5,000万円まで（審査により上限1億円まで対応）（公式サイトにて2026年7月確認）",
  },
  {
    label: "対象",
    value:
      "原則として法人限定（フリーランス・個人事業主は取引内容によっては相談可）・創業1年未満も可（公式サイトにて2026年7月確認）",
  },
  {
    label: "契約方式",
    value: "2社間・3社間（オンライン完結型「INBUYS」は2社間のみ）",
  },
  {
    label: "オンライン対応",
    value:
      "○（オンライン完結型ファクタリング「INBUYS」・クラウドサインによる電子契約）",
  },
  {
    label: "諸経費",
    value:
      "振込手数料は利用者負担。登記費用・印紙代・交通費等の諸経費は不要（公式サイトにて2026年7月確認）",
  },
  {
    label: "営業時間",
    value: "平日9:30〜18:30（メールフォームは24時間受付）",
  },
  {
    label: "運営会社",
    value: "株式会社エーストラスト（本社：東京都港区西新橋）",
  },
];

const merits = [
  {
    title: "最短2時間で送金・オンライン完結型「INBUYS」も選べる",
    description:
      "エーストラストは、申込から最短2時間で送金までの流れを完了するとうたっています（公式サイトにて2026年7月確認）。公式サイトの利用の流れでは、申込15分→仮審査20分→本審査1時間→契約20分→送金15分という時間目安が示されています。また、来店・面談不要のオンライン完結型ファクタリング「INBUYS」も提供しており、クラウドサインによる電子契約で契約までの時間は最速約1時間とされています（INBUYSは2社間のみ）。",
  },
  {
    title: "3社間は1.0%〜4.9%の低水準・諸経費もかからない",
    description:
      "手数料は全体で1%〜15%とされ、契約形態別では3社間ファクタリングが買取対象債権の1.0%〜4.9%以内、2社間が5%〜15%以内と、上限まで含めてレンジを公表しています（公式サイトにて2026年7月確認）。上限を非公表とする会社が多い中で、契約形態別の上限まで明示している点は比較しやすいポイントです。また、登記費用・印紙代・交通費等の諸経費は不要と明記されています（振込手数料のみ利用者負担）。",
  },
  {
    title: "審査通過率90%以上（公式表記）・赤字/税金滞納/リスケ中でも相談可",
    description:
      "公式サイトでは、独自の柔軟な審査基準により「審査通過率90%以上」と表記されています（公式サイトにて2026年7月確認）。赤字決算・税金滞納・融資のリスケ中でも問題なく利用でき、保証人・担保も不要、創業1年未満の企業やベンチャー・スタートアップも契約可能とされています。契約は原則として償還請求権のないノンリコース型で、売掛先が倒産しても利用者に補償を求めることはないと公式Q&Aに明記されています。",
  },
  {
    title: "リースバックやコンサルティングなど資金調達の相談範囲が広い",
    description:
      "エーストラストはファクタリングのほかに、車両・機械設備などを対象とするリースバック、不動産担保の借換見積もり、資金調達・資金繰りに関するコンサルティングも提供しています（公式サイトにて2026年7月確認）。会社概要の事業内容にも債権買取のほか経営・資金調達コンサルティングや企業調査などが掲げられており、ファクタリング以外の選択肢も含めて相談できる体制です。送金は口座振込のほか現金での受け渡しにも対応すると記載されています。",
  },
];

const demerits = [
  {
    title: "原則として法人限定で、個人事業主・フリーランスは使いにくい",
    description:
      "公式Q&Aでは「当社のファクタリングは原則として法人様限定です」と明記されています（公式サイトにて2026年7月確認）。フリーランスや個人事業主も取引内容によっては利用できる場合があるとされていますが、あくまで例外的な扱いです。個人事業主・フリーランスの方は、個人事業主向けを明示しているサービスを第一候補にするのが確実です。",
  },
  {
    title: "2社間の下限は5%〜で、トップページの「1%〜」とは開きがある",
    description:
      "トップページでは「業界最安級の1%〜」と表記されていますが、利用条件のページでは2社間ファクタリングは5%〜15%以内とされており、1%台が狙えるのは実質的に3社間（1.0%〜4.9%以内）です（公式サイトにて2026年7月確認）。売掛先に知られたくない事情から2社間を選ぶ場合、下限でも5%と他社の2社間下限（1〜2%台を掲げる会社もある）より高めになる可能性があるため、必ず見積もりで実際の料率を確認しましょう。",
  },
  {
    title: "INBUYSは2社間のみ・3社間は即日が難しい場合があり、第三者の口コミも少ない",
    description:
      "オンライン完結型のINBUYSで契約できるのは2社間ファクタリングのみで、3社間は売掛先への通知・承諾が必要なため、即日での契約・入金が難しくなる場合があると公式に記載されています（公式サイトにて2026年7月確認）。また、大手と比べると第三者の口コミ・評判情報や取引実績の公開がまだ少なく、判断材料が限られる点にも留意が必要です。",
  },
];

const steps = [
  {
    step: "1",
    title: "問い合わせ・申込（最短15分）",
    description:
      "電話（0120-833-338・平日9:30〜18:30）または申込フォーム（24時間受付）から申込。公式サイトには「強引な営業はいたしません」と記載されており、利用に備えた相談だけでも受け付けています。",
  },
  {
    step: "2",
    title: "仮審査（最短20分）",
    description:
      "担当スタッフが電話で簡単なヒアリングを行い、希望するプラン（2社間か3社間か）・売却希望額などをもとに利用可否を仮審査します。",
  },
  {
    step: "3",
    title: "本審査（最短1時間）",
    description:
      "決算書・請求書（発注書・納品書等含む）・通帳（直近の入金状況がわかるもの）を提出して本審査。結果は速やかに通知されます（公式サイトにて2026年7月確認）。",
  },
  {
    step: "4",
    title: "契約（最短20分）",
    description:
      "契約内容の提示を受け、納得したら契約締結。契約時には履歴事項全部証明書・印鑑証明・住民票が必要です。INBUYSの場合はクラウドサインによる電子契約となります。",
  },
  {
    step: "5",
    title: "送金（最短15分）",
    description:
      "契約締結後、最短15分以内に指定口座へ振込。希望すれば現金での受け渡しも可能と公式サイトに記載されています。",
  },
];

const faqs = [
  {
    question: "エーストラストの手数料はいくらですか？",
    answer:
      "公式サイトでは利用手数料1%〜15%と記載されており、契約形態別では3社間ファクタリングが買取対象債権の1.0%〜4.9%以内、2社間が5%〜15%以内とされています（公式サイトにて2026年7月確認）。実際の料率は売掛先の与信や支払いサイトごとに提示されるため、見積もりで確認してください。なお、登記費用・印紙代・交通費等の諸経費はかからず、振込手数料のみ利用者負担です。",
  },
  {
    question: "エーストラストは個人事業主やフリーランスでも利用できますか？",
    answer:
      "公式Q&Aでは「原則として法人様限定」と明記されています（公式サイトにて2026年7月確認）。ただし、フリーランスや個人事業主でも取引内容によっては利用できる場合があるため、まず相談してほしいという案内です。確実に個人事業主対応をうたうサービスを探す場合は、ラボルやペイトナーなど個人事業主・フリーランス対応を明示する会社の検討をおすすめします。",
  },
  {
    question: "エーストラストはいくらまで買い取ってもらえますか？",
    answer:
      "公式Q&Aでは売掛先1社につき5,000万円までとされ、条件により最大1億円までの買取にも対応すると記載されています（公式サイトにて2026年7月確認）。対象債権は商取引で生じた売掛債権で、工事請負代金債権・運送料債権なども含まれます。",
  },
  {
    question: "オンライン完結型の「INBUYS」とは何ですか？",
    answer:
      "INBUYSは、エーストラストが提供する来店・面談不要のオンライン完結型ファクタリングです。弁護士監修の電子契約サービス「クラウドサイン」を使ってクラウド上で契約を締結し、契約までの時間は最速約1時間とされています（公式サイトにて2026年7月確認）。必要書類は請求書・通帳・代表者の身分証明書の3点で、INBUYSで契約できるのは2社間ファクタリングのみです。",
  },
  {
    question: "売掛先が倒産した場合、支払い義務はありますか？",
    answer:
      "公式Q&Aでは、エーストラストのファクタリングは償還請求権のない契約（ノンリコース）のため、売掛先が倒産しても利用者に補償を求めることはないと明記されています（公式サイトにて2026年7月確認）。保証人・担保も不要です。契約の際は、実際の契約書でも償還請求権の有無を必ず確認しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "エーストラストの口コミ・評判｜最短2時間・オンライン完結INBUYSのファクタリングを検証",
  description:
    "エーストラストの口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/acetrust/",
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
      name: "エーストラスト",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function AcetrustReviewPage() {
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
          { label: "エーストラスト" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            エーストラストの口コミ・評判
            <br className="hidden md:block" />
            最短2時間・オンライン完結INBUYSのファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            株式会社エーストラストが運営するファクタリング「エーストラスト」の手数料・審査・入金スピード・オンライン対応を、公式サイトで確認できる情報にもとづいて検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            エーストラストは、最短2時間の送金と、契約形態別の手数料レンジ（3社間1.0%〜4.9%以内・2社間5%〜15%以内）を上限まで公表している透明性が特徴のファクタリングです（公式サイトにて2026年7月確認）。オンライン完結型「INBUYS」（2社間のみ）や現金渡し、リースバックまで相談でき、売掛先に通知してよい法人が3社間で低コスト調達を狙う場合に向いています。一方、原則法人限定のため、個人事業主・フリーランスの方は
            <Link href="/reviews/labol/" className="text-primary underline hover:no-underline">ラボル</Link>
            や
            <Link href="/reviews/paytner/" className="text-primary underline hover:no-underline">ペイトナー</Link>
            （いずれも一律10%・個人事業主対応）、大口・対面重視の方は
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            とも比較して判断するのがおすすめです。
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
            <li><a href="#basic-info" className="hover:underline">1. エーストラストの基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. エーストラストの会社概要と特徴</a></li>
            <li><a href="#reviews" className="hover:underline">3. 口コミ・評判の現状</a></li>
            <li><a href="#merits" className="hover:underline">4. エーストラストのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">5. エーストラストのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">6. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">7. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#summary" className="hover:underline">8. 総合評価</a></li>
            <li><a href="#faq" className="hover:underline">9. よくある質問</a></li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点（2026年7月）のものであり、手数料・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            エーストラストの基本情報
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
        </section>

        {/* ── 会社概要・特徴 ─── */}
        <section id="about" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            エーストラストの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            エーストラストは、株式会社エーストラストが運営するファクタリングサービスです。公式サイトの会社概要によると、代表者は代表取締役の大橋邦男氏、本社は東京都港区西新橋二丁目6番1号 第二菊家ビル4階（都営三田線・内幸町駅から徒歩1分）で、事業内容として債権の買取・売買とその仲介のほか、在庫商品の買取、経営・資金調達のコンサルティング、企業調査・信用調査、担保不動産の調査などを掲げています（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            サービス面では「迅速対応・最安値の手数料・柔軟な審査基準・秘密厳守」の4つのモットーを掲げ、申込から最短2時間での送金、審査通過率90%以上（公式表記）をうたっています。契約は2社間・3社間の両方に対応し、来店・面談不要のオンライン完結型ファクタリング「INBUYS」（クラウドサイン利用・2社間のみ）も提供しています（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            対象は原則として法人で、創業1年未満やベンチャー・スタートアップも利用できます。赤字決算・税金滞納・リスケ中でも利用可能とされ、契約は原則償還請求権なし（ノンリコース）、保証人・担保も不要です。契約期間は原則最長6ヶ月（延長相談可）と利用条件のページに明記されています。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">エーストラストの3つの強み（公式サイトの表記より）</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>申込から最短2時間で送金（INBUYSは契約まで最速約1時間）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>契約形態別の手数料レンジを上限まで公表（3社間1.0%〜4.9%以内）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>審査通過率90%以上（公式表記）・赤字/税金滞納/リスケ中も相談可</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 口コミ・評判の現状 ─── */}
        <section id="reviews" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            口コミ・評判の現状
          </h2>
          <div className="rounded-lg border border-border bg-section-bg p-6">
            <p className="mb-3 text-sm leading-relaxed text-text-light">
              エーストラストについては、大手口コミサイトやレビューサイトにおける第三者の投稿がまだ少なく、当サイトの調査時点（2026年7月）では、利用者の生の声から傾向を判断できるだけの十分な口コミ情報を確認できませんでした。そのため、本ページでは架空の口コミや体験談を掲載せず、公式サイトで確認できる事実のみにもとづいて解説しています。
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              なお、「審査通過率90%以上」などの数値は公式サイト上の自社表記であり、第三者機関による検証値ではない点に留意してください。利用を検討する際は、必ず見積もりを取り、手数料・契約条件（償還請求権の有無・債権譲渡登記の扱い・契約期間）を書面で確認したうえで、複数社と比較することをおすすめします。
            </p>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            エーストラストのメリット4つ
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
            エーストラストのデメリット3つ
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
            エーストラストの利用の流れ
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
                  <span>売掛先に通知してよく、3社間で手数料1.0%〜4.9%を狙いたい法人の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手数料の上限が明示された会社と契約したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>当日中（最短2時間）の資金化やオンライン完結を求める方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>リースバックなどファクタリング以外の資金調達も併せて相談したい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>個人事業主・フリーランスの方（原則法人限定）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>2社間で1〜2%台の低い下限を狙いたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>豊富な第三者の口コミ・実績開示を重視する方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            エーストラストの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            エーストラストは、契約形態別の手数料レンジを上限まで公表している点が最大の評価ポイントです。3社間1.0%〜4.9%以内・2社間5%〜15%以内という明示があるため、見積もり前におおよそのコスト感を掴めます（公式サイトにて2026年7月確認）。登記費用・印紙代等の諸経費が不要と明記されている点、償還請求権なし・保証人担保不要が公式Q&Aで確認できる点も、契約の透明性という意味で安心材料です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            スピード面も、最短2時間送金・INBUYS（オンライン完結・契約まで最速約1時間）と即日ニーズに対応しています。一方で、原則法人限定のため個人事業主・フリーランスには使いにくく、2社間の下限は5%と、トップページの「1%〜」の印象より高めになる可能性があります。営業時間が平日9:30〜18:30で土日祝は休みのため、休日の資金需要にも不向きです。
          </p>
          <p className="leading-relaxed text-text-light">
            売掛先に通知できる法人が3社間で低コスト調達を狙うなら有力な候補です。個人事業主・フリーランスの方は
            <Link href="/reviews/labol/" className="text-primary underline hover:no-underline">ラボル</Link>
            ・
            <Link href="/reviews/paytner/" className="text-primary underline hover:no-underline">ペイトナー</Link>
            、対面重視・大口なら
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            が比較先の候補になります。
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
            エーストラストの無料相談・見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            最短2時間で送金。いざという時に備えた相談だけでも受け付けています。
          </p>
          <a
            href="https://ace-trust.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            エーストラスト公式サイトで無料相談
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/labol/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ラボルの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">個人事業主・フリーランス対応のファクタリング</p>
            </Link>
            <Link
              href="/reviews/betrading/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">全国対応の大手ファクタリングを検証</p>
            </Link>
            <Link
              href="/articles/2sha-vs-3sha/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">2社間と3社間の違い</p>
              <p className="mt-1 text-sm text-text-light">手数料と通知の有無で比較</p>
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

        {/* 診断への導線 */}
        <p className="mb-8 text-center text-sm">
          <Link href="/diagnosis/" className="font-semibold text-primary hover:underline">
            30秒の無料診断であなたに合うファクタリング会社を絞り込む &rarr;
          </Link>
        </p>
      </div>
    </>
  );
}
