import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "GMO BtoB早払いの審査は厳しい？通過のコツと落ちたときの対処法",
  description:
    "GMO BtoB早払いの審査の特徴を解説。法人限定・最短2営業日・完全オンラインという公式情報をもとに、審査で見られる一般的なポイント、通過のコツ、落ちやすいケース、落ちた場合の代替サービスを紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/gmo-btob/shinsa/",
  },
  openGraph: {
    title: "GMO BtoB早払いの審査は厳しい？通過のコツと落ちたときの対処法",
    description:
      "GMO BtoB早払いの審査の特徴・通過のコツ・落ちたときの対処法を公式情報ベースで解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/gmo-btob/shinsa/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const screeningFeatures = [
  { label: "対象", value: "法人のみ（個人事業主・フリーランスは利用不可）" },
  { label: "審査の実施主体", value: "GMOペイメントゲートウェイ株式会社（東証プライム上場）" },
  { label: "契約方式", value: "2社間ファクタリング" },
  { label: "審査に使う書類", value: "請求書・決算書・入出金明細・登記簿謄本・代表者の本人確認書類（Webアップロード）" },
  { label: "入金スピード", value: "審査・契約後、最短2営業日" },
  { label: "買取可能額", value: "要相談（大口対応可）" },
];

const passTips = [
  {
    title: "信用力の高い法人宛ての請求書を選ぶ",
    detail:
      "複数の売掛先がある場合、上場企業・大手企業・取引歴の長い企業宛ての請求書で申し込む方が、一般に審査は通りやすく条件も良くなりやすいとされます。GMO BtoB早払いは手数料が審査で個別に提示されるため、どの請求書を出すかが条件を左右します。",
  },
  {
    title: "決算書・入出金明細などの書類を漏れなく揃える",
    detail:
      "GMO BtoB早払いの審査では請求書のほか、決算書・銀行口座の入出金明細・登記簿謄本・代表者の本人確認書類をWebでアップロードします。不足や不鮮明な書類は審査の停滞要因になるため、事前にPDF化して揃えてから申し込みましょう。",
  },
  {
    title: "請求書と入出金明細の整合性を確認しておく",
    detail:
      "一般に、審査では過去の入金実績と申請中の請求書の整合性（同じ売掛先から継続して入金があるか等）が確認されると考えられます。取引実態を示せる継続取引先の請求書は、単発取引の請求書より審査上有利に働きやすいといわれています。",
  },
  {
    title: "支払期日まで標準的なサイトの請求書で申し込む",
    detail:
      "支払期日をすでに過ぎた請求書や、期日まで極端に長い請求書は、一般に買取対象になりにくいとされます。月末締め翌月末払いなど、標準的な支払いサイトの範囲内の請求書を選ぶのが無難です。",
  },
  {
    title: "スケジュールに余裕を持って申し込む",
    detail:
      "入金は最短2営業日で、即日対応ではありません。資金が必要な期日の直前に申し込むと審査の時間が確保できず選択肢が狭まります。計画的に、数営業日の余裕を持って申請することが結果的に審査・条件の両面でプラスに働きます。",
  },
];

const failCases = [
  "個人事業主・フリーランスとして申し込んでいる（法人限定のため対象外）",
  "売掛先が個人、または信用情報の確認が難しい先である",
  "決算書・入出金明細などの必要書類が不足している、内容が不鮮明である",
  "請求書の記載内容と実際の取引・入金実績に食い違いがある",
  "支払期日をすでに過ぎた請求書で申請している",
];

const alternatives = [
  {
    name: "OLTA",
    href: "/reviews/olta/",
    detail:
      "AI審査のクラウドファクタリング。手数料2%〜9%と上限が明示されており、最短即日入金・買取額の制限なし。オンライン完結型で法人・個人事業主の両方に対応しています。",
  },
  {
    name: "ビートレーディング",
    href: "/reviews/betrading/",
    detail:
      "累計取引実績の豊富な大手ファクタリング会社。最短2時間入金・買取額の制限なしで、他社で断られた案件にも柔軟に対応してくれるケースがあるとされる、駆け込み先の定番です。",
  },
  {
    name: "QuQuMo",
    href: "/reviews/ququmo/",
    detail:
      "手数料1%〜（上限非公表）・最短2時間のオンライン完結型。必要書類が請求書と通帳の2点のみとシンプルで、書類の揃えにくさが原因で審査に進めなかった場合の選択肢になります。",
  },
];

const faqs = [
  {
    question: "GMO BtoB早払いの審査は厳しいですか？",
    answer:
      "審査通過率などの統計値は公式非公開のため、「厳しい・緩い」を断定することはできません。ただし、法人限定であること、決算書・入出金明細まで提出する書類審査型であることから、請求書のみで申請できる簡易型サービスと比べると確認項目は多いといえます。その分、審査を通過すれば請求書買取1%〜10%（公式サイトにて2026年6月確認）という条件が提示される仕組みです。",
  },
  {
    question: "審査ではどこを見られますか？",
    answer:
      "審査基準の詳細は公式非公開です。一般に、ファクタリングの審査では申込企業自身の業績よりも売掛先の信用力（支払い能力）が重視されるといわれており、加えて請求書と入出金明細の整合性など取引の実在性が確認されると考えられます。赤字決算でも売掛先の信用力次第で利用できる可能性があるのがファクタリング全般の特徴です。",
  },
  {
    question: "個人事業主でも審査を受けられますか？",
    answer:
      "いいえ。GMO BtoB早払いは法人向けサービスのため、個人事業主・フリーランスは審査の対象外です。個人事業主の方は、当サイトでレビューしているペイトナー・ラボル・フリーナンスなど個人対応のサービスをご検討ください。",
  },
  {
    question: "審査に落ちた場合はどうすればいいですか？",
    answer:
      "再申請の条件は公式に明示されていません。一般論としては、より信用力の高い売掛先の請求書に変えて申請する、書類の不備を解消して出し直す、といった対処が考えられます。急ぎの場合は、OLTA・ビートレーディング・QuQuMoなど審査基準の異なる他社に並行して見積もりを出すのが現実的です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "GMO BtoB早払いの審査は厳しい？通過のコツと落ちたときの対処法",
  description:
    "GMO BtoB早払いの審査の特徴・通過のコツ・落ちたときの対処法を公式情報ベースで解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/gmo-btob/shinsa/",
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
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://hyogo-shihoushoshi.jp/" },
    { "@type": "ListItem", position: 2, name: "業者レビュー", item: "https://hyogo-shihoushoshi.jp/reviews/" },
    { "@type": "ListItem", position: 3, name: "GMO BtoB早払い", item: "https://hyogo-shihoushoshi.jp/reviews/gmo-btob/" },
    { "@type": "ListItem", position: 4, name: "審査" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function GmoBtobShinsaPage() {
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
          { label: "GMO BtoB早払い", href: "/reviews/gmo-btob/" },
          { label: "審査" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            審査ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            GMO BtoB早払いの審査は厳しい？
            <br className="hidden md:block" />
            通過のコツと落ちたときの対処法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            東証プライム上場のGMOペイメントゲートウェイが審査を行う法人向けファクタリング。公式に案内されている条件と、通過のための実践ポイントを整理します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            GMO BtoB早払いの審査は法人限定で、請求書に加えて決算書・入出金明細・登記簿謄本・代表者の本人確認書類をオンラインで提出する書類審査型です。審査通過率などの統計は公式非公開ですが、一般にファクタリング審査で最重要とされるのは売掛先の信用力なので、信用力の高い法人宛ての請求書を選び、書類の整合性を整えて申し込むのが通過の近道です。入金は最短2営業日のため即日資金化には不向きで、その場合はOLTAやビートレーディングなど即日系の他社が現実的な代替になります。
          </p>
          <p className="mt-3 text-sm">
            <Link href="/reviews/gmo-btob/" className="text-primary hover:underline">GMO BtoB早払いの総合レビューを見る</Link>
            <span className="mx-2 text-text-light">／</span>
            <Link href="/diagnosis/" className="text-primary hover:underline">30秒診断で合う会社を探す</Link>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. GMO BtoB早払いの審査の特徴（公式情報）</a></li>
            <li><a href="#criteria" className="hover:underline">2. 審査で重視されるのは売掛先の信用力（一般論）</a></li>
            <li><a href="#tips" className="hover:underline">3. 審査通過のコツ5つ</a></li>
            <li><a href="#fail" className="hover:underline">4. 審査に落ちやすいケース</a></li>
            <li><a href="#alternatives" className="hover:underline">5. 落ちた場合の代替サービス</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 審査の特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            GMO BtoB早払いの審査の特徴（公式情報）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            GMO BtoB早払いは、東証プライム上場のGMOペイメントゲートウェイ株式会社が運営・審査を行う法人向けファクタリングです。審査まわりの条件を公式案内ベースで整理すると次のとおりです。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {screeningFeatures.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-section-bg" : "bg-white"}>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-44">
                      {item.label}
                    </th>
                    <td className="px-4 py-3 text-text-light">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            流れとしては、Web申込→書類アップロード→審査のうえ手数料・買取条件の提示→電子契約→最短2営業日で入金、という順序です。審査を通過すると、請求書買取1%〜10%・注文書買取2%〜12%（公式サイトにて2026年6月確認）の範囲で個別に条件が提示されます。
          </p>
        </section>

        {/* ── 審査で重視されるポイント ─── */}
        <section id="criteria" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査で重視されるのは売掛先の信用力（一般論）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            GMO BtoB早払いの個別の審査基準は公式非公開です。ただし一般に、ファクタリングは「売掛先が期日どおり支払うか」で回収が決まる取引のため、審査の中心は申込企業の業績よりも売掛先の信用力だといわれています。銀行融資と評価軸が異なるため、自社が赤字決算や創業間もない状態でも、売掛先次第で利用できる可能性があるのがファクタリング全般の特徴です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            そのうえで、GMO BtoB早払いは決算書や入出金明細まで提出する方式のため、一般論としては次の点も確認されると考えられます。
          </p>
          <ul className="mb-4 space-y-2 rounded-lg border border-border bg-white p-6 text-sm text-text-light">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>売掛先の規模・支払い実績・信用情報</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>請求書の取引が実在するか（入出金明細との整合性）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>申込法人の実在性（登記簿謄本・本人確認書類）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>支払いサイトの長さと売掛金の金額</span>
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-text-light">
            ファクタリング審査の一般的な仕組みは
            <Link href="/articles/screening-criteria/" className="mx-1 text-primary hover:underline">審査基準の解説記事</Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* ── 通過のコツ ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            GMO BtoB早払いの審査通過のコツ5つ
          </h2>
          <div className="space-y-6">
            {passTips.map((tip, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  {tip.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{tip.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 落ちやすいケース ─── */}
        <section id="fail" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査に落ちやすいケース
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            公式に不可条件の一覧が公開されているわけではありませんが、公式の利用条件とファクタリング審査の一般的な考え方から、次のケースでは通過が難しいと考えられます。
          </p>
          <ul className="space-y-3 rounded-lg border border-accent/30 bg-orange-50 p-6 text-sm text-text-light">
            {failCases.map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">&#9651;</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            落ちる原因の分析と再チャレンジの手順は
            <Link href="/articles/screening-failure/" className="mx-1 text-primary hover:underline">審査に落ちたときの対処法の記事</Link>
            にまとめています。
          </p>
        </section>

        {/* ── 代替サービス ─── */}
        <section id="alternatives" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査に落ちた場合の代替サービス
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            審査基準はサービスごとに異なるため、GMO BtoB早払いで買取に至らなくても他社で通る可能性は十分あります。当サイトでレビュー済みの法人向けサービスから、性格の異なる3社を挙げます。
          </p>
          <div className="space-y-4">
            {alternatives.map((alt, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-5">
                <p className="mb-2 font-semibold text-primary">
                  <Link href={alt.href} className="hover:underline">{alt.name}の口コミ・評判を見る</Link>
                </p>
                <p className="text-sm leading-relaxed text-text-light">{alt.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※各社の手数料・入金スピードは当サイトが各社公式サイトで確認した値です（確認日は各レビューページに記載）。
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

        {/* ── 関連ページ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/gmo-btob/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">GMO BtoB早払いの口コミ・評判（総合レビュー）</p>
              <p className="mt-1 text-sm text-text-light">メリット・デメリットの全体像はこちら</p>
            </Link>
            <Link
              href="/reviews/gmo-btob/documents/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">GMO BtoB早払いの必要書類と入金までの流れ</p>
              <p className="mt-1 text-sm text-text-light">審査前に揃える5点セットを確認</p>
            </Link>
            <Link
              href="/reviews/gmo-btob/fee/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">GMO BtoB早払いの手数料と他社比較</p>
              <p className="mt-1 text-sm text-text-light">請求書買取1%〜10%の実質コストを検証</p>
            </Link>
            <Link
              href="/articles/weekend-factoring/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">土日・祝日に使えるファクタリングの探し方</p>
              <p className="mt-1 text-sm text-text-light">休日対応の可否と申込みの注意点</p>
            </Link>
            <Link
              href="/articles/instant-factoring/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">即日入金を狙う申込みのコツ</p>
              <p className="mt-1 text-sm text-text-light">申込み時間帯と書類準備で入金スピードは変わる</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">条件別に15社を徹底比較</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-8 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            審査に不安があるなら、まず比較から
          </h2>
          <p className="mb-6 text-sm text-white/80">
            審査基準は会社ごとに異なります。無料診断で自社の状況に合う会社を絞り込み、2〜3社に並行して見積もりを取りましょう。
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/diagnosis/" className="btn-cta inline-block">
              30秒無料診断を試す
            </Link>
            <a
              href="https://www.gmo-pg.com/service/hayabarai/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block rounded-lg border border-white/60 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              GMO BtoB早払い公式サイトを見る
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
