import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクターアソシエイツの口コミ・評判｜注文書対応・最短2時間のファクタリングを検証",
  description:
    "ファクターアソシエイツの口コミ・評判を徹底調査。株式会社ファクターアソシエイツ（福岡市）運営、請求書1.0%〜10.0%・注文書2.0%〜14.9%、最短2時間〜即日のオンライン完結ファクタリングを公式情報で検証します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/factor-associates/",
  },
  openGraph: {
    title:
      "ファクターアソシエイツの口コミ・評判｜注文書対応・最短2時間のファクタリングを検証",
    description:
      "ファクターアソシエイツの口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
    url: "https://hyogo-shihoushoshi.jp/reviews/factor-associates/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "ファクターアソシエイツ（請求書・注文書ファクタリング）" },
  {
    label: "手数料",
    value:
      "請求書：1.0%〜10.0%／注文書：2.0%〜14.9%（公式サイトにて2026年7月確認）",
  },
  {
    label: "入金スピード",
    value:
      "最短2時間〜即日（オンライン完結）（公式サイトにて2026年7月確認）",
  },
  {
    label: "買取可能額",
    value:
      "30万円〜最大5,000万円（請求書は上限なし）（公式サイトにて2026年7月確認）",
  },
  {
    label: "対象",
    value:
      "法人（公式サイトは「法人様」向けの案内で、個人事業主対応の公式表記は確認できず）（2026年7月確認時点）",
  },
  {
    label: "契約方式",
    value:
      "2者間契約に対応（取引先への通知なしで完結と公式FAQに記載）。3社間の公式表記は確認できず",
  },
  {
    label: "対応地域",
    value: "全国（オンライン完結対応）（公式サイトにて2026年7月確認）",
  },
  {
    label: "対象書類",
    value:
      "請求書・注文書・発注書・契約書など（請求書発行前でも相談可）（公式サイトにて2026年7月確認）",
  },
  {
    label: "営業時間",
    value: "平日9:00〜18:00（電話：092-409-3735）",
  },
  {
    label: "運営会社",
    value:
      "株式会社ファクターアソシエイツ（本社：福岡県福岡市博多区博多駅南1-7-14 BOIS博多・資本金3,000万円）",
  },
];

const merits = [
  {
    title: "注文書・発注書ベースの資金化に対応（請求書発行前でも相談可）",
    description:
      "ファクターアソシエイツは請求書だけでなく、注文書・発注書・契約書などの売掛債権も買取対象としています（公式サイトにて2026年7月確認）。公式FAQでは、売掛先・金額・入金予定日が確認できる場合は請求書発行前でも相談可能と記載されており、着工前の材料費や受注後の仕入れなど「入金よりも支払いが先に来る」建設業・製造業・運送業の資金ニーズに対応した設計です。注文書ファクタリングを扱う会社は限られるため、この対応範囲は特徴のひとつです。",
  },
  {
    title: "請求書の手数料下限1.0%〜と低水準",
    description:
      "手数料率は請求書ファクタリングで1.0%〜10.0%、注文書ファクタリングで2.0%〜14.9%と、下限・上限の両方が公式サイトに明示されています（公式サイトにて2026年7月確認）。上限非公表の会社が多いなかで料率レンジを開示している点は、事前にコストの見通しを立てたい事業者にとって比較しやすい情報開示です。買取金額は30万円からで、請求書は上限なしとされています。",
  },
  {
    title: "最短2時間〜即日・オンライン完結で全国対応",
    description:
      "入金スピードは最短2時間〜即日で、オンライン契約により全国どこからでも完結すると公式サイトに記載されています（公式サイトにて2026年7月確認）。AI審査などを採用して提案までの時間を短縮しているとされ、必要書類も「口座の入出金明細（直近3か月分）」と「売掛債権に関する書類」の2点のみです。本社は福岡ですが、地方の会社でもオンラインで即日利用できると公式FAQに明記されています。",
  },
  {
    title: "税金滞納・赤字決算・リスケ中も相談可、担保・保証人不要",
    description:
      "公式FAQでは、税金や社会保険料を滞納している場合でも売掛先の信用力や滞納状況によっては審査対象になり、赤字決算や債務超過でも利用できるケースがあると記載されています（公式サイトにて2026年7月確認）。銀行融資が難しい状況やリスケ中の相談も受け付けており、担保・保証人は不要と明記されています。「無理な提案をしない・利用が難しい場合は正直に伝える」という相談スタンスも公式に掲げられています。",
  },
];

const demerits = [
  {
    title: "法人専門で、個人事業主対応の公式表記がない",
    description:
      "公式サイトの案内は一貫して「法人様」向けで、申込フォームの入力項目も法人名が前提です。個人事業主・フリーランスが利用できるという公式表記は確認できませんでした（2026年7月確認時点）。個人事業主の方は、個人事業主対応を公式に明示しているペイトナーやラボルなどを検討するのが確実です。",
  },
  {
    title: "注文書ファクタリングの手数料上限は14.9%とやや高め",
    description:
      "請求書の手数料は1.0%〜10.0%ですが、注文書ファクタリングは2.0%〜14.9%と上限がやや高めに設定されています（公式サイトにて2026年7月確認）。注文書は入金までの期間が長くリスクが高い分、料率も上がる傾向が一般にあります。実際の料率は審査で決まるため、契約前に必ず見積もりを取り、他社と比較したうえで判断することをおすすめします。",
  },
  {
    title: "運営歴が浅く、第三者の口コミもまだ少ない",
    description:
      "設立はコーポレートサイトで2024年7月、サービスサイトで2023年7月と公式内で表記が分かれていますが、いずれにしても運営歴の浅い会社です（2026年7月確認時点）。大手口コミサイトにおける第三者の投稿もまだ少なく、実績面の情報は限られます。また、3社間ファクタリングや債権譲渡登記の扱いについての公式表記も確認できませんでした。長年の実績を重視する場合は、ビートレーディングなどの大手とも比較しましょう。",
  },
];

const steps = [
  {
    step: "1",
    title: "WEBフォームから無料相談",
    description:
      "公式サイトのフォーム（最短30秒で入力完了）から「利用できるか」を無料で確認。急ぎの場合は電話（092-409-3735・平日9:00〜18:00）でも相談できます。",
  },
  {
    step: "2",
    title: "必要書類の提出",
    description:
      "必要書類は2点のみ。①口座の入出金明細（直近3か月分）②売掛債権に関する書類（請求書・注文書・発注書・契約書など）。提出後、内容を確認して見通しが案内されます。",
  },
  {
    step: "3",
    title: "審査・条件の提示",
    description:
      "AI審査などを活用したスピード審査で買取条件（手数料等）が提示されます。売掛先の信用力が重視されるため、税金滞納中・赤字決算でも審査対象になるケースがあります。",
  },
  {
    step: "4",
    title: "契約・入金",
    description:
      "条件に納得したらオンライン契約を締結し、指定口座へ入金。最短2時間〜即日の入金が可能とされています（公式サイトにて2026年7月確認）。",
  },
];

const faqs = [
  {
    question: "ファクターアソシエイツは個人事業主でも利用できますか？",
    answer:
      "公式サイトの案内は「法人様」向けで、個人事業主が利用できるという公式表記は確認できませんでした（2026年7月確認時点）。個人事業主・フリーランスの方は、個人事業主対応を公式に明示しているペイトナーやラボルなどの検討をおすすめします。最新の対応状況は公式サイトの無料相談で確認してください。",
  },
  {
    question: "ファクターアソシエイツの手数料はいくらですか？",
    answer:
      "公式サイトでは、請求書ファクタリングが1.0%〜10.0%、注文書ファクタリングが2.0%〜14.9%と記載されています（公式サイトにて2026年7月確認）。上限まで公表されているため事前にコストの上振れ範囲を把握できますが、実際の料率は売掛先の信用力などの審査で決まります。見積もりを取り、複数社と比較することをおすすめします。",
  },
  {
    question: "請求書がなくても注文書や発注書だけで利用できますか？",
    answer:
      "はい、公式サイトでは注文書・発注書・契約書などによる早期資金化に対応していると記載されています（公式サイトにて2026年7月確認）。売掛先・金額・入金予定日が確認できる場合は、請求書発行前でも相談可能と公式FAQに明記されており、将来入金予定の債権も内容を確認したうえで買取可否が判断されます。",
  },
  {
    question: "取引先（売掛先）に知られずに利用できますか？",
    answer:
      "はい、公式FAQでは、多くの場合「2者間契約」により取引先への通知なしで完了すると記載されています（公式サイトにて2026年7月確認）。秘密厳守での相談が可能で、連絡方法や進め方にも配慮するとされています。なお、3社間ファクタリングの公式表記は確認できませんでした。",
  },
  {
    question: "ファクターアソシエイツとロコプラス・アソシエイツの関係は？",
    answer:
      "「ロコプラス・アソシエイツ」の公式サイト（loco-plus.com）は、現在ファクターアソシエイツのサービスサイト（lp-factor-assoc.com）へ転送（301リダイレクト）されています（2026年7月確認）。旧ロコプラスのサイトからアクセスした場合も、案内されるのはファクターアソシエイツのファクタリングサービスです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ファクターアソシエイツの口コミ・評判｜注文書対応・最短2時間のファクタリングを検証",
  description:
    "ファクターアソシエイツの口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/factor-associates/",
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
      name: "ファクターアソシエイツ",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function FactorAssociatesReviewPage() {
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
          { label: "ファクターアソシエイツ" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクターアソシエイツの口コミ・評判
            <br className="hidden md:block" />
            注文書対応・最短2時間のファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            株式会社ファクターアソシエイツが運営する請求書・注文書ファクタリングの手数料・審査・入金スピード・対応範囲を、公式サイトで確認できる情報にもとづいて検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            ファクターアソシエイツは、請求書1.0%〜10.0%・注文書2.0%〜14.9%と料率レンジを公表し、注文書・発注書ベースの資金化（請求書発行前の相談も可）に対応する、最短2時間〜即日・オンライン完結のファクタリングです（公式サイトにて2026年7月確認）。一方、案内は法人向けで個人事業主対応の公式表記がなく、運営歴も浅く第三者の口コミはまだ少数です。個人事業主なら
            <Link href="/reviews/paytner/" className="text-primary underline hover:no-underline">ペイトナー</Link>
            や
            <Link href="/reviews/labol/" className="text-primary underline hover:no-underline">ラボル</Link>
            、注文書対応の大手グループなら
            <Link href="/reviews/gmo-btob/" className="text-primary underline hover:no-underline">GMO BtoB早払い</Link>
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
            <li><a href="#basic-info" className="hover:underline">1. ファクターアソシエイツの基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. ファクターアソシエイツの会社概要と特徴</a></li>
            <li><a href="#reviews" className="hover:underline">3. 口コミ・評判の現状</a></li>
            <li><a href="#merits" className="hover:underline">4. ファクターアソシエイツのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">5. ファクターアソシエイツのデメリット3つ</a></li>
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
            ファクターアソシエイツの基本情報
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
            ファクターアソシエイツの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクターアソシエイツは、株式会社ファクターアソシエイツが運営する請求書・注文書ファクタリングサービスです。公式サイトの会社概要によると、代表者は高梨伸治氏、本社は福岡県福岡市博多区博多駅南1-7-14 BOIS博多、資本金は3,000万円で、事業内容としてファクタリング事業のほかコンサルティング事業などを掲げています（公式サイトにて2026年7月確認）。なお、設立はコーポレートサイトで2024年7月、サービスサイトで2023年7月と公式内で表記が分かれています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            サービス面の特徴は、請求書に加えて注文書・発注書・契約書といった幅広い売掛債権を買取対象としている点です。建設業・運送業・製造業向けの専用案内も用意されており、着工前の材料費や燃料費・部品仕入れなど「入金より支払いが先に来る」業種の資金ニーズを想定した設計です。審査は売掛先の信用力を重視し、税金・社会保険料の滞納中や赤字決算・債務超過でも審査対象になるケースがあると公式FAQに記載されています（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            なお、「ロコプラス・アソシエイツ」の公式サイト（loco-plus.com）は、現在ファクターアソシエイツのサービスサイトへ転送（301リダイレクト）されています（2026年7月確認）。旧ロコプラスの情報を探してアクセスした場合も、案内されるのは同社のファクタリングサービスです。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">ファクターアソシエイツの3つの強み（公式サイトの表記より）</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>注文書・発注書・契約書も買取対象（請求書発行前の相談可）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料は請求書1.0%〜10.0%・注文書2.0%〜14.9%と上限まで公表</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>最短2時間〜即日・オンライン完結で全国対応</span>
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
              ファクターアソシエイツについては、大手口コミサイトやレビューサイトにおける第三者の投稿がまだ少なく、当サイトの調査時点（2026年7月）では、利用者の生の声から傾向を判断できるだけの十分な口コミ情報を確認できませんでした。そのため、本ページでは架空の口コミや体験談を掲載せず、公式サイトで確認できる事実のみにもとづいて解説しています。
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              公式サイトには建設業・運送業・IT業などの「導入事例・活用シーン」が掲載されていますが、これらは公式サイト上の自社掲載コンテンツであり、第三者による検証可能な口コミではない点に留意してください。利用を検討する際は、必ず見積もりを取り、手数料・契約条件（償還請求権の有無・債権譲渡登記の扱い）を書面で確認したうえで、複数社と比較することをおすすめします。
            </p>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクターアソシエイツのメリット4つ
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
            ファクターアソシエイツのデメリット3つ
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
            ファクターアソシエイツの利用の流れ
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
                  <span>請求書発行前の注文書・発注書段階で資金化したい建設業・製造業・運送業の法人</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>手数料の上限まで事前に把握して比較したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>オンライン完結で当日中の資金化を急いでいる法人の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>税金滞納中・赤字決算・リスケ中で銀行融資が難しい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>個人事業主・フリーランスの方（対応の公式表記なし）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>3社間ファクタリングを利用したい方（公式表記なし）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>長年の運営実績や豊富な第三者口コミを重視する方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクターアソシエイツの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクターアソシエイツは、注文書・発注書・契約書まで買取対象を広げた対応範囲と、請求書1.0%〜10.0%・注文書2.0%〜14.9%という料率レンジの開示、最短2時間〜即日のオンライン完結対応が特徴のファクタリングサービスです。必要書類は2点のみで、税金滞納中・赤字決算・リスケ中の相談にも応じるなど、銀行融資が使いにくい局面の法人向けに設計されています（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、案内は法人向けで個人事業主対応の公式表記がなく、3社間ファクタリングや債権譲渡登記の扱いも公式には確認できません。運営歴が浅く第三者の口コミが少ない段階のため、利用する場合は見積もりで手数料と契約条件（償還請求権の有無を含む）を書面で確認し、複数社と比較したうえで判断することをおすすめします。
          </p>
          <p className="leading-relaxed text-text-light">
            注文書段階の資金化ニーズがある法人には検討候補になるサービスです。同じく注文書対応で大手グループの安心感を重視するなら
            <Link href="/reviews/gmo-btob/" className="text-primary underline hover:no-underline">GMO BtoB早払い</Link>
            、実績豊富な大手なら
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            、個人事業主なら
            <Link href="/reviews/paytner/" className="text-primary underline hover:no-underline">ペイトナー</Link>
            ・
            <Link href="/reviews/labol/" className="text-primary underline hover:no-underline">ラボル</Link>
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
            ファクターアソシエイツの無料相談はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            請求書1.0%〜・注文書にも対応。最短2時間〜即日、オンライン完結で全国から相談できます。
          </p>
          <a
            href="https://lp-factor-assoc.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            ファクターアソシエイツ公式サイトで無料相談
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/gmo-btob/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">GMO BtoB早払いの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">注文書対応・GMOグループのファクタリング</p>
            </Link>
            <Link
              href="/reviews/betrading/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">全国対応の大手ファクタリングを検証</p>
            </Link>
            <Link
              href="/articles/purchase-order/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">注文書ファクタリングとは</p>
              <p className="mt-1 text-sm text-text-light">受注段階で資金化する仕組みを解説</p>
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
