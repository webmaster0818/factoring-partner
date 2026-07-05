import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "うりかけ堂の口コミ・評判｜株式会社hs1のファクタリングを公式情報で検証",
  description:
    "うりかけ堂（株式会社hs1）の評判を公式サイトの一次情報で検証。手数料1.5%〜（サービスサイト表記）、買取額30万〜5,000万円、最短90分入金、オンライン契約対応のファクタリングの実態を調査しました。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/urikakedo/",
  },
  openGraph: {
    title:
      "うりかけ堂の口コミ・評判｜株式会社hs1のファクタリングを公式情報で検証",
    description:
      "うりかけ堂（株式会社hs1）のファクタリングを公式サイトの一次情報で検証。手数料・入金スピード・買取可能額を調査。",
    url: "https://hyogo-shihoushoshi.jp/reviews/urikakedo/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "サービス名", value: "うりかけ堂（売掛堂）" },
  {
    label: "手数料",
    value:
      "1.5%〜・上限非公表（サービスサイトurikakedo.comにて2026年7月確認）※会社サイトurikakedo.co.jpの料金目安では2社間2.3%〜と表記に差があります",
  },
  {
    label: "入金スピード",
    value:
      "申込から入金まで最短90分・オンライン契約で最短2時間（公式サイトにて2026年7月確認）",
  },
  {
    label: "買取可能額",
    value: "30万円〜5,000万円（公式サイトにて2026年7月確認）",
  },
  {
    label: "対象",
    value:
      "法人・個人事業主（「個人事業主様から大手企業様まで幅広く対応」と公式表記）",
  },
  {
    label: "契約方式",
    value:
      "2社間対応（売掛先への通知なし）。3社間の取り扱いは公式に明確な表記なし",
  },
  {
    label: "オンライン対応",
    value:
      "○（電子契約サービスCLOUD SIGNによるオンライン契約・来店不要の対応可）",
  },
  {
    label: "営業時間",
    value:
      "平日 9:00〜19:30・土日祝休み（urikakedo.co.jp表記。urikakedo.comの会社概要ではAM9:30〜PM19:30）",
  },
  { label: "対応エリア", value: "一部の離島を除き全国対応（公式会社概要）" },
  { label: "運営会社", value: "株式会社hs1（代表取締役：鈴木博雅）" },
  {
    label: "所在地",
    value: "東京都千代田区神田須田町2-2-7 トーハン須田町ビル10階",
  },
];

const merits = [
  {
    title: "最短90分〜2時間のスピード入金",
    description:
      "公式サイトでは「申し込みから入金まで最短90分」「オンライン契約にて最短2時間で資金調達が可能」と案内されています（2026年7月確認）。電子契約サービスCLOUD SIGNを利用したオンライン契約に対応しており、急ぎの資金需要でも来店せずに手続きを完結できる体制です。",
  },
  {
    title: "30万円〜5,000万円の幅広い買取レンジ",
    description:
      "買取可能額は30万円から5,000万円まで（公式サイトにて2026年7月確認）。少額の売掛金から中規模の案件まで一社で対応できるレンジです。会社サイトのFAQでも「最低30万円から買取」と明記されており、少額利用の可否が事前に分かる点は安心材料です。",
  },
  {
    title: "赤字決算・税金滞納・設立間もない会社でも相談可能",
    description:
      "公式FAQでは、赤字決算が続いている場合も「ご心配いりません（お客様の約5割は赤字決算の方）」、消費税等の税金滞納があっても「売掛先さえあれば基本的に問題ない」、設立間もない会社も「売掛債権をお持ちであれば可能」と案内されています（2026年7月確認）。銀行融資を断られた事業者の受け皿を明確に打ち出しているサービスです。",
  },
  {
    title: "2社間対応で売掛先に知られず利用できる",
    description:
      "2社間ファクタリングでは売掛先への通知は行われず、秘密厳守を徹底すると公式に明記されています。またファクタリングは債権の売買（譲渡）であり貸金（融資）ではないため、公式サイトでも「貸金業ではないので信用情報が外部機関に載ることもない」と説明されています（2026年7月確認）。",
  },
];

const demerits = [
  {
    title: "手数料の上限が非公表で、公式サイト間でも表記に差がある",
    description:
      "サービスサイト（urikakedo.com）では「業界最安の手数料1.5%〜」（公式表記）と下限のみが示され、上限は非公表です。さらに会社サイト（urikakedo.co.jp）の料金目安ページでは「2社間ファクタリング 手数料2.3%〜」と、公式サイト同士でも表記に差があります（いずれも2026年7月確認）。実際の手数料は案件ごとの見積もりで必ず確認し、他社と比較することをおすすめします。",
  },
  {
    title: "3社間ファクタリングの取り扱いが明確でない",
    description:
      "公式サイトには2社間・3社間の違いの解説はあるものの、自社サービスとして3社間ファクタリングを提供している旨の明確な記載は確認できませんでした（2026年7月確認時点）。手数料を抑えやすい3社間を希望する場合は、事前に問い合わせるか、3社間対応を公式に明記している他社を検討する必要があります。",
  },
  {
    title: "第三者の口コミ・実績の公開が大手と比べて限定的",
    description:
      "累計買取額や取引社数などの実績値は公式サイトで確認できず、大手口コミサイトでの投稿もまだ少ないのが現状です。公式サイトには利用者の声が掲載されていますが、これは公式発信の情報であり、中立的な第三者評価とは性質が異なる点に留意が必要です。",
  },
];

const steps = [
  {
    step: "1",
    title: "無料登録・お問い合わせ",
    description:
      "サービスサイトの無料登録（マイページ）から会社情報を登録、またはお問い合わせフォーム・電話で相談します（フォームは24時間対応・公式表記）。",
  },
  {
    step: "2",
    title: "書類提出・審査",
    description:
      "必要書類をアップロードまたは提出して審査を受けます。公式サイトではAIを活用したスピード審査を行うと案内されています。",
  },
  {
    step: "3",
    title: "契約",
    description:
      "電子契約サービスCLOUD SIGNによるオンライン契約に対応。来店不要で契約まで完結できます（公式表記）。",
  },
  {
    step: "4",
    title: "入金",
    description:
      "契約締結後、指定口座に振り込まれます。公式サイトでは最短90分〜2時間での資金調達が可能と案内されています。",
  },
];

const faqs = [
  {
    question: "うりかけ堂の運営会社はどこですか？",
    answer:
      "うりかけ堂は株式会社hs1（代表取締役：鈴木博雅、所在地：東京都千代田区神田須田町2-2-7 トーハン須田町ビル10階）が運営するファクタリングサービスです。うりかけ堂の公式サイトはurikakedo.com（サービスサイト）とurikakedo.co.jp（会社サイト）の2つがあり、両サイトとも会社概要に株式会社hs1の運営であることが明記されています（2026年7月確認）。",
  },
  {
    question: "うりかけ堂の手数料はいくらですか？",
    answer:
      "サービスサイト（urikakedo.com）では手数料1.5%〜と表記され、上限は非公表です。一方、会社サイト（urikakedo.co.jp）の料金目安ページでは2社間ファクタリング手数料2.3%〜と表記されており、公式サイト間で表記に差があります（いずれも2026年7月確認）。実際の手数料は売掛先の信用力や金額などにより案件ごとに決まるため、必ず見積もりで確認し、複数社と比較することをおすすめします。",
  },
  {
    question: "うりかけ堂は個人事業主でも利用できますか？",
    answer:
      "はい。公式サイトには「個人事業主様から大手企業様まで幅広く対応できる体制」と明記されています（2026年7月確認）。買取可能額は30万円からのため、売掛金が30万円以上あることが利用の目安になります。",
  },
  {
    question: "うりかけ堂は赤字決算や税金滞納があっても利用できますか？",
    answer:
      "公式FAQでは、赤字決算については「ご心配いりません（お客様の約5割は赤字決算の方）」、消費税等の税金滞納については「売掛先さえあれば基本的に問題ない」と案内されています（2026年7月確認）。ファクタリングは利用者ではなく売掛先の信用力を重視して審査されるためです。ただし最終的な可否は個別の審査によります。",
  },
  {
    question: "うりかけ堂は来店が必要ですか？地方でも利用できますか？",
    answer:
      "来店不要で利用できます。公式サイトによると、電子契約サービスCLOUD SIGNによるオンライン契約に対応しているほか、営業スタッフの出張や電話・メール・郵送などによる対応で、一部の離島を除き全国をカバーしています（2026年7月確認）。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "うりかけ堂の口コミ・評判｜株式会社hs1のファクタリングを公式情報で検証",
  description:
    "うりかけ堂（株式会社hs1）のファクタリングを公式サイトの一次情報で検証。手数料・入金スピード・買取可能額を調査。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/urikakedo/",
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
      name: "うりかけ堂",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function UrikakedoReviewPage() {
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
          { label: "うりかけ堂" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            うりかけ堂の口コミ・評判
            <br className="hidden md:block" />
            株式会社hs1のファクタリングを公式情報で検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            うりかけ堂（運営：株式会社hs1）のファクタリングを、公式サイトの一次情報にもとづいて検証。手数料・入金スピード・買取可能額・オンライン対応を調査しました（2026年7月調査）。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            うりかけ堂は、30万円〜5,000万円の売掛金を、来店せずオンライン契約（CLOUD
            SIGN）で最短90分〜2時間で現金化したい法人・個人事業主に向いたサービスです。赤字決算・税金滞納・設立間もない会社でも相談可能と公式に明記されています（2026年7月確認）。一方、手数料は下限のみ公表（サービスサイト1.5%〜／会社サイトの料金目安では2社間2.3%〜と表記差あり）で上限が非公表のため、事前にコストを確定したい方や、3社間ファクタリングを明確に使いたい方、大手の実績・第三者の口コミを重視する方には不向きです。その場合は
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            や
            <Link href="/reviews/ququmo/" className="text-primary underline hover:no-underline">QuQuMo</Link>
            などの実績公開が手厚い他社との比較をおすすめします。
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
            <li><a href="#basic-info" className="hover:underline">1. うりかけ堂の基本情報</a></li>
            <li><a href="#about" className="hover:underline">2. うりかけ堂の会社概要と特徴</a></li>
            <li><a href="#reviews" className="hover:underline">3. 口コミ・評判の調査結果</a></li>
            <li><a href="#merits" className="hover:underline">4. うりかけ堂のメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">5. うりかけ堂のデメリット・注意点3つ</a></li>
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
            うりかけ堂の基本情報
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
            出典：うりかけ堂サービスサイト（
            <a href="https://urikakedo.com/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">urikakedo.com</a>
            ）・うりかけ堂会社サイト（
            <a href="https://urikakedo.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">urikakedo.co.jp</a>
            ）。いずれも株式会社hs1が運営する公式サイトであることを両サイトの会社概要ページで確認しています（2026年7月）。
          </p>
        </section>

        {/* ── 会社概要・特徴 ─── */}
        <section id="about" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            うりかけ堂の会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            うりかけ堂は、株式会社hs1（代表取締役：鈴木博雅、所在地：東京都千代田区神田須田町2-2-7
            トーハン須田町ビル10階）が運営するファクタリングサービスです。公式サイトはサービスサイトのurikakedo.comと、会社情報や地域別情報を掲載するurikakedo.co.jpの2ドメインがあり、両方の会社概要ページで株式会社hs1の運営であることが確認できます（2026年7月確認）。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            サービス面の特徴は、AIを活用した審査と電子契約サービスCLOUD
            SIGNによるオンライン契約で、申し込みから入金まで最短90分（オンライン契約では最短2時間）というスピードを打ち出している点です。買取可能額は30万円〜5,000万円で、個人事業主から大手企業まで幅広く対応すると公式に明記されています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            なお、ファクタリングは売掛債権の売買（債権譲渡）であり、貸金（融資）ではありません。うりかけ堂の公式サイトでも「貸金業ではないので信用情報が外部機関に載ることもない」「借入ではないので保証人・担保も不要」と説明されており、個人への給料ファクタリングは行っていない旨も明記されています（2026年7月確認）。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">うりかけ堂の3つの強み（公式サイトの表記より）</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>申し込みから入金まで最短90分・オンライン契約で最短2時間</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>30万円〜5,000万円まで幅広い買取レンジ・全国対応（一部離島を除く）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>赤字決算・税金滞納・設立間もない会社でも相談可能と公式FAQに明記</span>
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
            ※当編集部は2026年7月時点で、うりかけ堂に関する第三者口コミサイト等の情報を調査しましたが、投稿数がまだ少なく、傾向を客観的にまとめられるだけの中立的な第三者の口コミは確認できませんでした。本ページでは架空の口コミを掲載しない方針のため、公式サイトで確認できる事実のみを紹介します。
          </div>
          <p className="mb-4 leading-relaxed text-text-light">
            うりかけ堂の公式サイトには、人材派遣業・IT業・製造業・運送業・介護業などの利用者の声や、売掛金の買取事例（例：売掛金130万円を125万円で買取など）が掲載されています（2026年7月確認）。ただし、これらは運営会社による公式発信の情報であり、中立的な第三者による評価とは性質が異なる点に留意してください。
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
            うりかけ堂のメリット4つ
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
            うりかけ堂のデメリット・注意点3つ
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
            うりかけ堂の利用の流れ
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
                  <span>当日中（最短90分〜2時間）に資金化したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>来店せずオンライン契約で完結したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>赤字決算・税金滞納・創業間もない等で銀行融資が難しい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>30万円程度の少額から相談したい法人・個人事業主の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>売掛先に知られずに（2社間で）資金調達したい方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>手数料の上限を事前に確定させたい方（上限非公表）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>3社間ファクタリングを明確に利用したい方</span>
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
            うりかけ堂の総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            うりかけ堂は、最短90分〜2時間のスピード入金、30万円〜5,000万円の幅広い買取レンジ、CLOUD
            SIGNによるオンライン契約という、即日資金化ニーズに応える体制を公式に打ち出しているファクタリングサービスです。赤字決算・税金滞納・設立間もない会社でも相談可能と明記されており、銀行融資が難しい局面の選択肢になり得ます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            一方で、手数料は下限のみの公表で上限が非公表であり、サービスサイト（1.5%〜）と会社サイトの料金目安（2社間2.3%〜）で表記に差がある点は、利用前に必ず見積もりで確認すべきポイントです。第三者の口コミもまだ少ないため、初回は少額から試す、複数社の見積もりを取って比較する、といった慎重な使い方をおすすめします。
          </p>
          <p className="leading-relaxed text-text-light">
            比較対象としては、買取実績の公開が手厚い
            <Link href="/reviews/betrading/" className="text-primary underline hover:no-underline">ビートレーディング</Link>
            、オンライン完結で手数料1%〜の
            <Link href="/reviews/ququmo/" className="text-primary underline hover:no-underline">QuQuMo</Link>
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
            うりかけ堂に無料相談
          </h2>
          <p className="mb-6 text-sm text-white/80">
            30万円〜5,000万円対応・オンライン契約で最短90分〜2時間の資金調達（公式サイト表記）。
          </p>
          <a
            href="https://urikakedo.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            うりかけ堂公式サイトで無料相談
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
              <p className="mt-1 text-sm text-text-light">買取実績の公開が手厚い大手を検証</p>
            </Link>
            <Link
              href="/reviews/ququmo/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">QuQuMoの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料1%〜のオンライン完結型を検証</p>
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
