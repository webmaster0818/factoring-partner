import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "アクセルファクターの審査は厳しい？通過のコツと落ちたときの対処法",
  description:
    "アクセルファクターの審査を解説。審査通過率93.3%（公式発表）の審査の特徴、審査で重視されるポイント、通過のコツ、落ちやすいケースと落ちた場合の代替候補までまとめました。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/reviews/accelfactor/shinsa/",
  },
  openGraph: {
    title:
      "アクセルファクターの審査は厳しい？通過のコツと落ちたときの対処法",
    description:
      "審査通過率93.3%（公式発表）のアクセルファクターの審査の特徴・通過のコツ・落ちた場合の対処法を解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/accelfactor/shinsa/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const screeningFacts = [
  { label: "審査通過率", value: "93.3%（公式発表）" },
  { label: "対象", value: "法人・個人事業主" },
  { label: "契約方式", value: "2社間・3社間対応" },
  { label: "入金スピード", value: "最短即日（3時間程度）" },
  { label: "買取可能額", value: "30万円〜1億円" },
  { label: "申込方法", value: "来店・出張・オンラインに対応" },
];

const passTips = [
  {
    title: "信用力の高い売掛先の請求書を選ぶ",
    detail:
      "複数の売掛先を持っている場合は、上場企業・大手企業・官公庁など、支払いの確実性が高い売掛先の請求書で申し込むのが基本です。一般に、ファクタリングの審査は利用者よりも売掛先の信用力を軸に判断されるためです。",
  },
  {
    title: "必要書類を最初から揃えて提出する",
    detail:
      "書類の不備は審査の遅れや心証の悪化につながります。請求書・通帳コピー・本人確認書類などを事前に準備しておきましょう。アクセルファクターは通帳コピーが用意できない場合にネットバンキングの画面キャプチャで代替できるなど、書類対応が柔軟な点も特徴です。",
  },
  {
    title: "支払期日が近すぎない売掛金で申し込む",
    detail:
      "一般に、支払期日まで極端に日数が短い売掛金や、逆に期日が遠すぎる売掛金は、回収リスクの観点から評価が分かれやすいとされます。取引の実在性を示しやすい、通常サイクルの売掛金を選ぶのが無難です。",
  },
  {
    title: "取引の継続性を示せる資料を用意する",
    detail:
      "同じ売掛先との過去の入金履歴が通帳等で確認できると、取引の実在性・継続性の裏付けになります。一般に、初回取引の売掛金よりも継続取引の売掛金の方が審査上有利とされます。",
  },
  {
    title: "事情は正直に申告し、相談ベースで進める",
    detail:
      "税金滞納や赤字決算などの事情を隠すと、発覚した際に信頼を損ないます。アクセルファクターは来店・出張・オンラインでの相談に対応しているため、事情がある場合は先に担当者へ正直に伝えて進め方を相談するのが得策です。",
  },
];

const failCases = [
  {
    title: "売掛先の信用力が著しく低い",
    detail:
      "売掛先が支払い遅延を繰り返している、経営状態が極端に悪化しているなどの場合、売掛金の回収可能性が低いと判断され、審査に通らないことがあります。",
  },
  {
    title: "売掛金の実在性が確認できない",
    detail:
      "請求書に対応する取引の裏付け（発注書・契約書・過去の入金履歴など）が確認できない場合は、審査の土俵に乗りません。架空債権や二重譲渡を防ぐため、どの会社でも厳しく確認される部分です。",
  },
  {
    title: "必要書類が最後まで揃わない",
    detail:
      "アクセルファクターは代替書類の提案など柔軟な対応で知られますが、それでも最低限の確認書類が揃わなければ契約はできません。",
  },
  {
    title: "税金滞納で売掛債権が差し押さえられる恐れがある",
    detail:
      "税金の滞納自体は利用を妨げないケースがありますが、滞納が長期化して売掛債権の差し押さえリスクがある状態では、利用が制限される場合があります。",
  },
];

const faqs = [
  {
    question: "アクセルファクターの審査は厳しいですか？",
    answer:
      "アクセルファクターは審査通過率93.3%を公式に発表しており、業界内でも柔軟な審査で知られています。赤字決算や税金滞納があっても、売掛先の信用力に問題がなければ通過するケースがあります。ただし全件が通るわけではなく、売掛先の信用力や売掛金の実在性に問題があれば審査落ちもあり得ます。",
  },
  {
    question: "審査にはどのくらい時間がかかりますか？",
    answer:
      "アクセルファクターは入金まで最短即日（3時間程度）と公式に案内しています。審査自体もこのスピード感の中で行われますが、書類の不備や混雑状況によっては翌営業日以降になる場合があります。急ぎの場合は午前中の早い時間の申込と、書類を事前に揃えておくことが重要です。",
  },
  {
    question: "審査に落ちた理由は教えてもらえますか？",
    answer:
      "ファクタリング会社は一般に、審査落ちの詳細な理由を開示しないことが多いです。売掛先の信用情報が関わるため、具体的な根拠の説明が難しい事情もあります。落ちた場合は、別の売掛先の請求書で再申込するか、審査基準の異なる他社を検討するのが現実的です。",
  },
  {
    question: "個人事業主でも審査に通りますか？",
    answer:
      "アクセルファクターは法人だけでなく個人事業主も対象としています。買取可能額は30万円〜1億円で、少額案件にも対応しています。個人事業主の場合も、審査の軸は売掛先の信用力である点は同じです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "アクセルファクターの審査は厳しい？通過のコツと落ちたときの対処法",
  description:
    "審査通過率93.3%（公式発表）のアクセルファクターの審査の特徴・通過のコツ・落ちた場合の対処法を解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/accelfactor/shinsa/",
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

export default function AccelfactorShinsaPage() {
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
          { label: "アクセルファクター", href: "/reviews/accelfactor/" },
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
            アクセルファクターの審査は厳しい？
            <br className="hidden md:block" />
            通過のコツと落ちたときの対処法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            審査通過率93.3%（公式発表）のアクセルファクターについて、審査の特徴・通過のコツ・落ちやすいケース・落ちた場合の代替候補を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            アクセルファクターの審査は、審査通過率93.3%（公式発表）が示すとおり業界でも柔軟な部類です。一般にファクタリングの審査は利用者自身よりも売掛先の信用力を軸に判断されるため、赤字決算や税金滞納があっても通過するケースがあります。一方で、売掛先の信用力が低い場合や売掛金の実在性を示せない場合は審査落ちがあり得ます。本ページでは通過率を上げる準備と、落ちた場合の具体的な代替候補まで解説します。
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
            <li><a href="#features" className="hover:underline">1. アクセルファクターの審査の特徴</a></li>
            <li><a href="#criteria" className="hover:underline">2. 審査で重視されるのは売掛先の信用力</a></li>
            <li><a href="#tips" className="hover:underline">3. 審査通過のコツ5つ</a></li>
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
            アクセルファクターの審査の特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            アクセルファクター（株式会社アクセルファクター）は、審査通過率93.3%を公式に発表している数少ないファクタリング会社です。法人・個人事業主の両方が対象で、2社間・3社間の両方式に対応しています。申込は来店・出張・オンラインのいずれでも可能で、入金は最短即日（3時間程度）とされています。
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
            <Link href="/reviews/accelfactor/" className="text-primary hover:underline">アクセルファクターの口コミ・評判</Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* ── 審査で重視されるポイント ─── */}
        <section id="criteria" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査で重視されるのは売掛先の信用力
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングは融資ではなく売掛債権の売買です。そのため一般に、審査で最も重視されるのは申込者自身の財務状況ではなく、「売掛金を支払う側＝売掛先」の信用力とされています。売掛先が確実に支払える企業であれば、申込者が赤字決算や税金滞納の状態でも取引が成立し得ます。アクセルファクターの高い審査通過率も、この構造を柔軟に運用していることが背景にあります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">売掛先の支払い能力・信用情報</p>
              <p className="text-sm leading-relaxed text-text-light">
                一般に、売掛先が上場企業・大手企業・官公庁であるほど回収リスクが低いと評価されます。逆に売掛先の経営状態が不安定な場合は、審査落ちや手数料上昇の要因になります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">売掛金の実在性・取引の継続性</p>
              <p className="text-sm leading-relaxed text-text-light">
                請求書に対応する取引が実在するか、過去にも同じ売掛先から入金があるかは、どの会社の審査でも確認される基本項目です。架空債権・二重譲渡の防止のため厳格にチェックされます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">申込者の事業・申告内容の整合性</p>
              <p className="text-sm leading-relaxed text-text-light">
                申込者自身の信用力は売掛先ほど重視されないのが一般的ですが、申告内容と書類の食い違いや事実の隠ぺいは大きなマイナスです。事情がある場合ほど正直に伝えることが重要です。
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            審査基準の一般論は
            <Link href="/articles/screening-criteria/" className="text-primary hover:underline">ファクタリングの審査基準</Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* ── 通過のコツ ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            アクセルファクターの審査通過のコツ5つ
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
            審査通過率93.3%ということは、裏を返せば約6.7%の案件は通過していません。一般に、次のようなケースは審査落ちの原因になりやすいとされます。
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
            審査落ちの原因と再申込の考え方は
            <Link href="/articles/screening-failure/" className="text-primary hover:underline">ファクタリング審査に落ちる理由と対処法</Link>
            でも詳しく解説しています。
          </p>
        </section>

        {/* ── 落ちた場合の代替 ─── */}
        <section id="alternatives" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            アクセルファクターの審査に落ちた場合の代替候補
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            審査基準は会社ごとに異なるため、1社に落ちても別の会社で通過するケースは珍しくありません。別の売掛先の請求書に切り替えて再申込する方法と併せて、当サイトでレビュー済みの他社も検討してみてください。
          </p>
          <div className="space-y-4">
            <Link
              href="/reviews/betrading/"
              className="block rounded-lg border border-border bg-white p-5 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディング</p>
              <p className="mt-1 text-sm text-text-light">
                買取額に制限がなく2社間・3社間の両方に対応する大手。最短2時間入金で、対面相談も可能です。
              </p>
            </Link>
            <Link
              href="/reviews/ququmo/"
              className="block rounded-lg border border-border bg-white p-5 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">QuQuMo（ククモ）</p>
              <p className="mt-1 text-sm text-text-light">
                必要書類が請求書と通帳の2点のみのオンライン完結型。書類がネックで落ちた場合の再挑戦先として検討しやすい1社です。
              </p>
            </Link>
            <Link
              href="/reviews/support-org/"
              className="block rounded-lg border border-border bg-white p-5 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">日本中小企業金融サポート機構</p>
              <p className="mt-1 text-sm text-text-light">
                一般社団法人が運営する非営利型。審査の方針が営利事業者と異なるため、セカンドオピニオン的に相談する選択肢になります。
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
              href="/reviews/accelfactor/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">サービス全体のレビューはこちら</p>
            </Link>
            <Link
              href="/reviews/accelfactor/documents/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの必要書類と入金までの流れ</p>
              <p className="mt-1 text-sm text-text-light">審査前に書類を揃えておきたい方へ</p>
            </Link>
            <Link
              href="/reviews/accelfactor/fee/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの手数料はいくら？</p>
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
            アクセルファクターの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            審査通過率93.3%（公式発表）。他社で断られた方も、まずは無料見積もりで審査可否を確認できます。
          </p>
          <a
            href="https://accelfactor.co.jp/"
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
