import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "西日本ファクターの口コミ・評判｜九州・中国地方の地域密着ファクタリングを検証",
  description:
    "西日本ファクターの口コミ・評判を徹底調査。福岡市の株式会社西日本ファクターが運営する地域密着ファクタリング。手数料2.8%〜、最短1日、30万円〜3,000万円対応を公式情報で検証します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/nishinihon-factor/",
  },
  openGraph: {
    title:
      "西日本ファクターの口コミ・評判｜九州・中国地方の地域密着ファクタリングを検証",
    description:
      "福岡の地域密着ファクタリング「西日本ファクター」の口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
    url: "https://hyogo-shihoushoshi.jp/reviews/nishinihon-factor/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "西日本ファクター" },
  {
    label: "手数料",
    value: "2.8%〜（上限は公式表記なし）（公式サイトにて2026年7月確認）",
  },
  {
    label: "入金スピード",
    value: "最短1日（公式サイトにて2026年7月確認）",
  },
  {
    label: "買取可能額",
    value:
      "30万円〜3,000万円（3社間なら3,000万円まで）（公式サイトにて2026年7月確認）",
  },
  {
    label: "対象",
    value: "法人・個人（申込フォームで法人／個人を選択・公式サイトにて2026年7月確認）",
  },
  { label: "契約方式", value: "2社間・3社間" },
  {
    label: "対応エリア",
    value: "福岡を中心に九州・中国地方をカバー（地域密着型・公式表記）",
  },
  {
    label: "オンライン対応",
    value:
      "オンライン完結の公式表記なし（電話・Webフォームでの申込は可、メールは24時間受付）",
  },
  {
    label: "営業時間",
    value: "9:00〜18:00（定休日：日祝）（公式サイトにて2026年7月確認）",
  },
  { label: "運営会社", value: "株式会社西日本ファクター（福岡市中央区薬院）" },
];

const merits = [
  {
    title: "九州・中国地方に強い地域密着型のサービス",
    description:
      "西日本ファクターは福岡市中央区薬院に拠点を置き、公式サイトで「福岡を中心に九州・中国地方をカバーする地域密着型」と明示しているファクタリング会社です（公式サイトにて2026年7月確認）。ファクタリング会社は関東圏に集中しているため、対面で相談したい九州・中国地方の事業者にとって、交通費や移動時間をかけずに利用できる点を強みとして打ち出しています。",
  },
  {
    title: "手数料2.8%〜の明示された下限設定",
    description:
      "公式サイトでは手数料2.8%〜と下限を明示しています（公式サイトにて2026年7月確認）。保証人・担保は不要です。実際の手数料は売掛先の信用力や契約形態（2社間・3社間）により変動するため、正確な費用は見積もりで確認する必要がありますが、下限が公表されていることで比較検討の目安にはなります。",
  },
  {
    title: "2社間・3社間の両方に対応、3社間なら3,000万円まで",
    description:
      "契約形態は2社間・3社間の両方に対応しています。2社間では独自の信用調査のみを行い、取引先への連絡は不要のため、売掛先に知られずに資金調達できるとしています。買取額は30万円から、3社間なら3,000万円までと公式サイトに記載されています（公式サイトにて2026年7月確認）。",
  },
  {
    title: "ノンリコース契約・担保保証人不要",
    description:
      "公式サイトでは「もし売掛金のある取引先が倒産しても支払いの義務はありません（ノンリコース）」と明記されています（公式サイトにて2026年7月確認）。売掛債権の売買契約であるため、担保・保証人も不要です。融資と異なり信用情報や銀行の与信に影響しない点も、公式FAQで説明されています。",
  },
];

const demerits = [
  {
    title: "手数料の上限が非公表",
    description:
      "手数料は2.8%〜と下限のみの公表で、上限は公式サイトに記載がありません（2026年7月確認時点）。実際の手数料は案件ごとの見積もり次第のため、契約前に必ず見積書で確認し、他社とも比較したうえで判断することをおすすめします。",
  },
  {
    title: "オンライン完結の公式表記がなく、遠方の利用メリットは薄い",
    description:
      "電話・Webフォーム（メールは24時間受付）での申込はできますが、オンライン完結（電子契約など）に関する公式表記は確認できませんでした（2026年7月時点）。同社の強みは九州・中国地方での地域密着対応にあるため、関東・関西などの遠方からオンラインで完結させたい場合は、オンライン完結を明示している他社の方が適しています。",
  },
  {
    title: "最低買取額が30万円からで、少額利用や大口には不向き",
    description:
      "買取額は30万円からのため、10万円前後の少額債権は対象外です。また上限も3,000万円（3社間）までのため、それを超える大口の資金調達には対応できません。少額ならオンライン完結型の他社、大口なら大手のファクタリング会社を検討しましょう。また、必要書類として身分証明書・決算書（2期分）・法人通帳の写し・法人登記簿謄本・請求書・受注書/発注書が公式FAQに挙げられており、必要書類3点程度で完結する他社と比べると書類準備の負担はやや大きめです（公式サイトにて2026年7月確認）。",
  },
];

const steps = [
  {
    step: "1",
    title: "問い合わせ",
    description:
      "電話（受付9:00〜18:00・日祝定休）またはメール（24時間受付）で問い合わせ。公式サイトには売掛金額等を入力する資金調達無料診断フォームもあります。",
  },
  {
    step: "2",
    title: "申込",
    description: "担当者が状況をヒアリングし、申込手続きを行います。",
  },
  {
    step: "3",
    title: "審査",
    description:
      "売掛のある取引先を対象に審査。必要書類は身分証明書・決算書（2期分）・法人通帳の写し・法人登記簿謄本・請求書・受注書/発注書です（公式FAQにて2026年7月確認）。",
  },
  {
    step: "4",
    title: "契約・資金化",
    description: "契約後、最短で即日スピーディーに資金化されます（公式表記）。",
  },
];

const faqs = [
  {
    question: "西日本ファクターの手数料はいくらですか？",
    answer:
      "公式サイトでは手数料2.8%〜と記載されています（公式サイトにて2026年7月確認）。上限は公表されていないため、実際の手数料は売掛先の信用力や契約形態（2社間・3社間）に応じた見積もりで確認する必要があります。保証人・担保は不要です。",
  },
  {
    question: "西日本ファクターは九州以外からでも利用できますか？",
    answer:
      "公式サイトの申込フォームでは全都道府県が選択できるようになっていますが、同社は「福岡を中心に九州・中国地方をカバーする地域密着型」を強みとして打ち出しています（公式サイトにて2026年7月確認）。交通費や時間コストを抑えられるという同社のメリットは九州・中国地方の事業者向けのため、遠方の方はオンライン完結型の他社も含めて比較するのがよいでしょう。",
  },
  {
    question: "西日本ファクターは個人事業主でも利用できますか？",
    answer:
      "公式サイトの申込フォームには種別として「法人」「個人」の選択肢があり、個人（屋号）でも申し込める形になっています（公式サイトにて2026年7月確認）。ただし、公式FAQに記載された必要書類には決算書（2期分）や法人登記簿謄本など法人向けの書類が含まれるため、個人事業主の場合に必要な書類は問い合わせ時に確認してください。",
  },
  {
    question: "西日本ファクターを利用すると取引先に知られますか？",
    answer:
      "2社間ファクタリングであれば、同社独自の信用調査のみを行い、取引先企業への連絡は行わないため、取引先に知られずに利用できると公式サイトに記載されています（公式サイトにて2026年7月確認）。手数料を抑えたい場合は、売掛先の承諾を得る3社間ファクタリング（3,000万円まで）も選択できます。",
  },
  {
    question: "売掛先が倒産した場合、支払い義務はありますか？",
    answer:
      "公式サイトでは「もし売掛金のある取引先が倒産しても支払いの義務はありません（ノンリコース）」と明記されています（公式サイトにて2026年7月確認）。償還請求権のない契約のため、売掛先の倒産リスクはファクタリング会社側が負担します。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "西日本ファクターの口コミ・評判｜九州・中国地方の地域密着ファクタリングを検証",
  description:
    "福岡の地域密着ファクタリング「西日本ファクター」の口コミ・評判を徹底調査。手数料・審査・入金スピードを公式情報で検証。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/nishinihon-factor/",
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
      name: "西日本ファクター",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function NishinihonFactorReviewPage() {
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
          { label: "西日本ファクター" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            西日本ファクターの口コミ・評判
            <br className="hidden md:block" />
            九州・中国地方の地域密着ファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            福岡市の株式会社西日本ファクターが運営する地域密着ファクタリング。手数料・審査・入金スピード・対応エリアを、公式サイトで確認できる情報にもとづいて検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            西日本ファクターは、福岡を中心に九州・中国地方をカバーする地域密着型のファクタリング会社で、手数料2.8%〜（上限は公式表記なし）・最短1日・30万円〜3,000万円・2社間/3社間対応です（公式サイトにて2026年7月確認）。地元で対面相談しながら進めたい九州・中国地方の事業者に向いた選択肢です。一方、オンライン完結の公式表記はなく、30万円未満の少額や3,000万円超の大口には対応しないため、遠方の方・少額利用の方・大口調達の方は
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            などの全国系や
            <Link href="/reviews/ququmo/" className="text-primary underline hover:no-underline">QuQuMo</Link>
            などのオンライン完結型との比較をおすすめします。
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
            <li><a href="#basic-info" className="hover:underline">1. 西日本ファクターの基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. 西日本ファクターの会社概要と特徴</a></li>
            <li><a href="#reviews" className="hover:underline">3. 口コミ・評判の現状</a></li>
            <li><a href="#merits" className="hover:underline">4. 西日本ファクターのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">5. 西日本ファクターのデメリット3つ</a></li>
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
            西日本ファクターの基本情報
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
            西日本ファクターの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            西日本ファクターは、株式会社西日本ファクターが運営するファクタリングサービスです。公式サイトの会社概要によると、代表者は代表取締役の後藤広美氏、設立は平成29年（2017年）9月、所在地は福岡市中央区薬院2-2-18大地ビル2Fで、事業内容はファクタリング事業と経営コンサルティング事業、取引銀行は西日本シティ銀行です（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            最大の特徴は「福岡を中心に九州・中国地方をカバーする地域密着型」という立ち位置です。ファクタリング会社の多くは関東圏に集中しており、対面契約のために交通費や移動時間がかかるケースがあります。西日本ファクターは、九州・中国地方の事業者がそうした金銭的・時間的コストをかけずに利用できることを公式に打ち出しています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            契約形態は2社間・3社間の両方に対応し、手数料2.8%〜・買取額30万円〜3,000万円（3社間なら3,000万円まで）・最短1日での資金化・担保保証人不要・ノンリコース契約が公式サイトに明記されています（公式サイトにて2026年7月確認）。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">西日本ファクターの3つの強み（公式サイトの表記より）</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>福岡拠点・九州/中国地方の地域密着型で対面相談しやすい</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>手数料2.8%〜・保証人/担保不要・最短1日の資金化</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>2社間・3社間対応、3社間なら3,000万円まで買取可能</span>
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
              西日本ファクターについては、大手口コミサイトやレビューサイトにおける第三者の投稿がまだ少なく、当サイトの調査時点（2026年7月）では、利用者の生の声から傾向を判断できるだけの十分な口コミ情報を確認できませんでした。そのため、本ページでは架空の口コミや体験談を掲載せず、公式サイトで確認できる事実のみにもとづいて解説しています。
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              公式サイトには建設業・運送業・食品工場などの「お客さまの声」が掲載されていますが、これらは公式サイト上の自社掲載コンテンツであり、第三者による検証可能な口コミではない点に留意してください。利用を検討する際は、必ず見積もりを取り、手数料・契約条件を書面で確認したうえで、複数社と比較することをおすすめします。
            </p>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            西日本ファクターのメリット4つ
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
            西日本ファクターのデメリット3つ
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
            西日本ファクターの利用の流れ
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
                  <span>九州・中国地方（特に福岡近郊）で事業を営む方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>地元の会社と対面で相談しながら進めたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>3社間ファクタリングで手数料を抑えつつ、まとまった額（〜3,000万円）を調達したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>取引先や銀行に知られずに資金調達したい方（2社間）</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>オンライン完結で契約まで済ませたい方・九州/中国地方以外の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>30万円未満の少額債権を現金化したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>3,000万円を超える大口の資金調達をしたい方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section id="summary" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            西日本ファクターの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            西日本ファクターは、関東圏に集中しがちなファクタリング業界の中で「福岡を中心とした九州・中国地方の地域密着」を明確に打ち出している点が最大の特徴です。手数料2.8%〜という下限の明示、2社間・3社間の両対応、最短1日の資金化、ノンリコース契約・担保保証人不要と、公式サイトで確認できる基本条件は標準的なファクタリングサービスの水準を満たしています（公式サイトにて2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、手数料の上限が非公表であること、オンライン完結の公式表記がないこと、買取額が30万円〜3,000万円に限られることには注意が必要です。第三者の口コミもまだ少ないため、条件の妥当性は相見積もりで確かめるのが確実です。
          </p>
          <p className="leading-relaxed text-text-light">
            九州・中国地方で対面相談を重視する事業者にとっては地の利のある選択肢です。比較先としては、全国対応で買取実績を公開している
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            、オンライン完結・手数料1%〜の
            <Link href="/reviews/ququmo/" className="text-primary underline hover:no-underline">QuQuMo</Link>
            あたりと同条件で見積もりを取ると、地域密着のメリットとコストを天秤にかけやすくなります。
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
            九州・中国地方の資金繰りは西日本ファクターに相談
          </h2>
          <p className="mb-6 text-sm text-white/80">
            福岡市薬院の地域密着ファクタリング。メールでの問い合わせは24時間受付です。
          </p>
          <a
            href="https://nishinihonfactor-lp1.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            西日本ファクター公式サイトで無料診断
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/betrading/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">全国対応の大手ファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/ququmo/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">QuQuMoの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料1%〜のオンライン完結ファクタリング</p>
            </Link>
            <Link
              href="/diagnosis/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング無料診断</p>
              <p className="mt-1 text-sm text-text-light">7つの質問であなたに合う会社を提案</p>
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
