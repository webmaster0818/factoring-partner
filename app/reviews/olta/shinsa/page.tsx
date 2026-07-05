import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "OLTA（オルタ）の審査は厳しい？通過のコツと落ちたときの対処法",
  description:
    "OLTA（オルタ）のAI審査を解説。審査の特徴、審査で重視されるポイント、通過率を上げる準備のコツ、落ちやすいケースと落ちた場合の代替候補までまとめました。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/olta/shinsa/",
  },
  openGraph: {
    title:
      "OLTA（オルタ）の審査は厳しい？通過のコツと落ちたときの対処法",
    description:
      "OLTAのAI審査の特徴・通過のコツ・落ちやすいケース・落ちた場合の代替候補を解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/olta/shinsa/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const screeningFacts = [
  { label: "審査方式", value: "AI審査（独自システム）" },
  { label: "審査通過率", value: "公式非公開" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "契約方式", value: "2社間ファクタリング専門（3社間非対応）" },
  { label: "審査結果", value: "最短即日で通知" },
  { label: "手続き", value: "申込〜契約まで完全オンライン完結" },
];

const passTips = [
  {
    title: "書類は最初のアップロードで全て揃える",
    detail:
      "OLTAは書類アップロード後にAI審査が始まる仕組みのため、請求書・入出金明細（直近4ヶ月分）・決算書（直近2期分、個人事業主は確定申告書）が揃っていないと審査が進みません。初回申込時に全書類を揃えることが、審査をスムーズに通す最初のコツです。",
  },
  {
    title: "入金実績のある売掛先の請求書で申し込む",
    detail:
      "一般に、AI審査では入出金明細から取引の継続性やパターンが分析されると考えられています。過去に繰り返し入金がある売掛先の請求書であれば、取引の実在性・継続性をデータで示しやすくなります。",
  },
  {
    title: "信用力の高い売掛先を選ぶ",
    detail:
      "ファクタリング審査の軸が売掛先の信用力であることは、AI審査でも一般論として変わりません。複数の売掛先がある場合は、上場企業・大手企業など支払いの確実性が高い先の債権で申し込みましょう。",
  },
  {
    title: "請求書・明細・決算書の内容に食い違いを作らない",
    detail:
      "AIはデータの整合性を機械的に照合します。請求書の金額・振込口座と入出金明細の内容が食い違っていると、実在性への疑義につながりかねません。提出前に書類間の整合を確認しておきましょう。",
  },
];

const failCases = [
  {
    title: "売掛先からの入金実績を明細で示せない",
    detail:
      "新規取引先への初回請求など、入出金明細に過去の入金記録がないケースでは、取引の継続性をデータで裏付けにくく、審査上不利になり得ます。",
  },
  {
    title: "売掛先の信用力が低いと判断された",
    detail:
      "売掛先の支払い能力に懸念があると判定されれば、AI審査でも通過は難しくなります。これはファクタリング全般に共通する構造です。",
  },
  {
    title: "決算書などの必要書類が用意できない",
    detail:
      "OLTAは決算書（直近2期分、個人事業主は確定申告書）が必要書類に含まれます。創業直後で2期分の決算書がない場合などは、書類要件の軽いサービスの方が向いていることがあります。",
  },
  {
    title: "審査基準は非公開のため、理由がわからない落ち方もある",
    detail:
      "AI審査の具体的な基準は公開されておらず、落ちた場合も理由が詳しく説明されないという声があります。同じ条件でも時期によって結果が変わるケースが報告されており、落ちても再挑戦や他社検討の余地はあります。",
  },
];

const faqs = [
  {
    question: "OLTAの審査は厳しいですか？",
    answer:
      "OLTAは審査通過率を公表していないため、通過率での比較はできません。AI審査は迅速な反面、基準が非公開で落ちた理由がわかりにくいという指摘があります。一般にファクタリング審査は売掛先の信用力が軸となるため、入金実績のある信用力の高い売掛先の請求書で、書類を揃えて申し込むことが通過の近道です。",
  },
  {
    question: "OLTAの審査にはどのくらい時間がかかりますか？",
    answer:
      "書類アップロード後、独自のAIシステムが審査を行い、最短即日で結果が通知されます。入金も最短即日です。ただし書類に不備があると審査が進まないため、請求書・入出金明細・決算書を最初に揃えてアップロードすることが重要です。",
  },
  {
    question: "OLTAの審査に落ちた場合、再申込はできますか？",
    answer:
      "審査基準は非公開ですが、同じ条件でも時期によって結果が変わるケースが報告されています。別の売掛先の請求書に切り替える、入金実績が積み上がってから再挑戦するなどの方法が考えられます。急ぎの場合は、審査基準の異なる他社（ペイトナー、GMO BtoB早払いなど）を並行して検討するのが現実的です。",
  },
  {
    question: "創業1年目でもOLTAの審査に通りますか？",
    answer:
      "OLTAの必要書類には決算書（直近2期分、個人事業主は確定申告書）が含まれるため、2期分の決算資料を用意できない創業直後の事業者はハードルが高くなります。書類要件の軽いサービス（請求書中心で審査するタイプ）の方が向いている場合があります。詳細は公式サイトでご確認ください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "OLTA（オルタ）の審査は厳しい？通過のコツと落ちたときの対処法",
  description:
    "OLTAのAI審査の特徴・通過のコツ・落ちやすいケース・落ちた場合の代替候補を解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/olta/shinsa/",
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

export default function OltaShinsaPage() {
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
          { label: "業者レビュー", href: "/reviews/" },
          { label: "OLTA（オルタ）", href: "/reviews/olta/" },
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
            OLTA（オルタ）の審査は厳しい？
            <br className="hidden md:block" />
            通過のコツと落ちたときの対処法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            AI審査を採用するクラウドファクタリング「OLTA」について、審査の特徴・通過率を上げる準備・落ちやすいケース・落ちた場合の代替候補を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            OLTAの審査は独自のAIシステムによるデータ審査で、審査通過率は公式非公開です。一般にファクタリング審査は売掛先の信用力が軸となるため、入金実績のある信用力の高い売掛先の請求書と、請求書・入出金明細（直近4ヶ月分）・決算書（直近2期分）の揃った書類が通過の土台になります。基準が非公開のため理由のわからない審査落ちもあり得ますが、その場合は別債権での再挑戦や、審査基準の異なる他社の併用が現実的な対処法です。
          </p>
          <p className="mt-3 text-sm font-semibold text-primary">
            <a href="#tips" className="hover:underline">通過のコツを見る</a>
            <span className="mx-2 text-text-light">／</span>
            <a href="#alternatives" className="hover:underline">落ちた場合の代替候補</a>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. OLTAの審査（AI審査）の特徴</a></li>
            <li><a href="#criteria" className="hover:underline">2. 審査で重視されるのは売掛先の信用力</a></li>
            <li><a href="#tips" className="hover:underline">3. 審査通過のコツ4つ</a></li>
            <li><a href="#fail-cases" className="hover:underline">4. 審査に落ちやすいケース</a></li>
            <li><a href="#alternatives" className="hover:underline">5. 落ちた場合の代替候補</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、審査基準・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 審査の特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            OLTAの審査（AI審査）の特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            OLTA（OLTA株式会社）は、クラウドファクタリングのパイオニアとして知られ、独自のAIシステムによる審査を採用しています。申込から審査・契約まで完全オンラインで完結し、審査結果は最短即日で通知されます。対象は法人・個人事業主で、契約方式は2社間ファクタリング専門です。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {screeningFacts.map((item, i) => (
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
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            サービスの全体像（口コミ・メリット・デメリット）は
            <Link href="/reviews/olta/" className="text-primary hover:underline">OLTAの口コミ・評判</Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* ── 審査で重視されるポイント ─── */}
        <section id="criteria" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査で重視されるのは売掛先の信用力
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            OLTAのAI審査の具体的な基準は公開されていません。ただし、ファクタリングが売掛債権の売買である以上、一般に審査の軸は「売掛先が期日どおりに支払えるか」に置かれます。その上で、AI審査では提出データの整合性が機械的に照合されると考えられており、一般に次のような要素が見られるとされています。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">売掛先の信用情報</p>
              <p className="text-sm leading-relaxed text-text-light">
                一般に、売掛先の規模・業歴・支払い履歴などから回収可能性が評価されます。売掛先が大手企業や上場企業であるほど、審査上有利に働きやすいとされます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">入出金明細に表れる取引の継続性</p>
              <p className="text-sm leading-relaxed text-text-light">
                OLTAは直近4ヶ月分の入出金明細を必要書類としています。一般に、同じ売掛先からの定期的な入金パターンは取引の実在性・継続性の裏付けとして評価されると考えられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">書類間のデータ整合性</p>
              <p className="text-sm leading-relaxed text-text-light">
                請求書・明細・決算書の内容が互いに矛盾していないかは、データ審査の基本です。金額や口座情報の食い違いは疑義の原因になるため、提出前の確認が欠かせません。
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ファクタリング審査の一般的な基準は
            <Link href="/articles/screening-criteria/" className="text-primary hover:underline">ファクタリングの審査基準</Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* ── 通過のコツ ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            OLTAの審査通過のコツ4つ
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
        <section id="fail-cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査に落ちやすいケース
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            OLTAの審査基準は非公開のため断定はできませんが、口コミの傾向と必要書類の構成、ファクタリング審査の一般論から、次のようなケースは不利になりやすいと考えられます。
          </p>
          <div className="space-y-4">
            {failCases.map((c, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-5">
                <p className="mb-2 font-semibold text-accent">{c.title}</p>
                <p className="text-sm leading-relaxed text-text-light">{c.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            審査落ちの一般的な原因と立て直し方は
            <Link href="/articles/screening-failure/" className="text-primary hover:underline">ファクタリング審査に落ちる理由と対処法</Link>
            も参考にしてください。
          </p>
        </section>

        {/* ── 落ちた場合の代替 ─── */}
        <section id="alternatives" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            OLTAの審査に落ちた場合の代替候補
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            AI審査と人による審査では見るポイントの運用が異なるため、OLTAで落ちても他社で通るケースはあります。オンライン完結という利便性を保ったまま乗り換えられる、当サイトレビュー済みの候補を紹介します。
          </p>
          <div className="space-y-4">
            <Link
              href="/reviews/paytner/"
              className="block rounded-lg border border-border bg-white p-5 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ペイトナー</p>
              <p className="mt-1 text-sm text-text-light">
                フリーランス・個人事業主特化で最短10分入金。請求書中心のシンプルな申込で、決算書の準備がネックだった方の再挑戦先になります。
              </p>
            </Link>
            <Link
              href="/reviews/gmo-btob/"
              className="block rounded-lg border border-border bg-white p-5 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">GMO BtoB早払い</p>
              <p className="mt-1 text-sm text-text-light">
                GMOグループ運営の法人向けサービス。注文書段階の資金化にも対応しており、審査の切り口が異なるためセカンド候補として有力です。
              </p>
            </Link>
            <Link
              href="/reviews/labol/"
              className="block rounded-lg border border-border bg-white p-5 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ラボル</p>
              <p className="mt-1 text-sm text-text-light">
                土日祝を含む24時間365日対応・最短30分入金。少額から使えるため、急ぎの資金需要で審査をやり直す時間がない場合の選択肢です。
              </p>
            </Link>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            条件を横並びで比べたい方は
            <Link href="/ranking/" className="text-primary hover:underline">ファクタリング会社おすすめランキング</Link>
            、質問に答えて絞り込みたい方は
            <Link href="/diagnosis/" className="text-primary hover:underline">無料診断ツール</Link>
            をご利用ください。
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
              href="/reviews/olta/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTA（オルタ）の口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">サービス全体のレビューはこちら</p>
            </Link>
            <Link
              href="/reviews/olta/documents/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTAの必要書類と入金までの流れ</p>
              <p className="mt-1 text-sm text-text-light">審査前に書類を揃えておきたい方へ</p>
            </Link>
            <Link
              href="/reviews/olta/fee/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTAの手数料はいくら？</p>
              <p className="mt-1 text-sm text-text-light">実質コストと他社比較を解説</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">手数料・入金速度・審査で比較</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-8 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            OLTAのAI審査を試してみる
          </h2>
          <p className="mb-6 text-sm text-white/80">
            完全オンライン完結・審査結果は最短即日。書類を揃えて無料見積もりから始められます。
          </p>
          <a
            href="https://www.olta.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料見積もり
          </a>
        </section>
      </div>
    </>
  );
}
