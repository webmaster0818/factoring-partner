import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリングの確定申告ガイド｜個人事業主の仕訳と経費計上",
  description:
    "ファクタリングを利用した個人事業主の確定申告方法を解説。仕訳例、手数料の勘定科目（売上債権売却損）、経費計上のルール、消費税の扱い、青色申告・白色申告での処理方法まで詳しく紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/tax-return/",
  },
  openGraph: {
    title: "ファクタリングの確定申告ガイド｜個人事業主の仕訳と経費計上",
    description:
      "ファクタリング利用時の確定申告方法。仕訳例と経費計上のルールを解説。",
    url: "https://factoring-partner.pages.dev/articles/tax-return/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const journalEntries = [
  {
    title: "1. 売掛金の発生時",
    debit: "売掛金 1,000,000円",
    credit: "売上 1,000,000円",
    note: "通常の売上計上と同じです。ファクタリングの利用を予定していても、売掛金の発生時点では通常の仕訳を行います。",
  },
  {
    title: "2. ファクタリング契約時（売掛金の売却）",
    debit: "未収入金 900,000円 / 売上債権売却損 100,000円",
    credit: "売掛金 1,000,000円",
    note: "売掛金をファクタリング会社に売却した時点の仕訳です。手数料10%（10万円）は「売上債権売却損」として計上します。未収入金はファクタリング会社から受け取る予定の金額です。",
  },
  {
    title: "3. ファクタリング会社から入金時",
    debit: "普通預金 900,000円",
    credit: "未収入金 900,000円",
    note: "ファクタリング会社から買取代金が入金された時点の仕訳です。契約時と入金時が同日の場合は、2と3をまとめて処理することもできます。",
  },
];

const taxPoints = [
  {
    title: "手数料は「売上債権売却損」で経費計上",
    description:
      "ファクタリングの手数料は「売上債権売却損」という勘定科目で営業外費用として計上します。「支払手数料」で処理することも認められていますが、一般的には売上債権売却損を使用します。いずれの科目でも経費として認められ、所得から控除できます。",
  },
  {
    title: "消費税は非課税取引",
    description:
      "ファクタリングの手数料は消費税法上の「金銭債権の譲渡」に該当し、非課税取引です。手数料に消費税は課されません。課税売上割合の計算では分母に5%のみ算入されます（消費税法施行令第48条）。",
  },
  {
    title: "収入印紙は不要",
    description:
      "ファクタリング契約は「債権の譲渡」に関する契約であり、印紙税法上の課税文書には該当しません。契約書に収入印紙を貼る必要はありません。ただし、ファクタリング会社によっては事務手数料として印紙代相当額を請求するケースがあるため、契約書の確認が必要です。",
  },
  {
    title: "ファクタリングの利用は借入金に計上しない",
    description:
      "ファクタリングは売掛債権の売却であり、借入ではありません。貸借対照表の「借入金」に計上する必要はなく、負債が増えることもありません。確定申告書の「借入金及び支払利子の内訳書」にも記載は不要です。",
  },
];

const faqs = [
  {
    question: "ファクタリングの手数料は確定申告で経費にできますか？",
    answer:
      "はい、ファクタリングの手数料は事業上の経費として認められ、確定申告で所得から控除できます。勘定科目は「売上債権売却損」または「支払手数料」を使用します。青色申告でも白色申告でも経費計上が可能です。",
  },
  {
    question: "ファクタリングの手数料に消費税はかかりますか？",
    answer:
      "ファクタリングの手数料には消費税はかかりません。金銭債権の譲渡は消費税法上の非課税取引に該当します。ファクタリング会社から提示される手数料額がそのまま支払額となります。",
  },
  {
    question: "白色申告でもファクタリングの手数料を経費にできますか？",
    answer:
      "はい、白色申告でもファクタリングの手数料は経費として計上できます。収支内訳書の「その他の経費」欄に「売上債権売却損」として金額を記載します。ただし、青色申告のほうが節税効果が高いため、ファクタリングを利用する頻度が高い場合は青色申告への切り替えを検討しましょう。",
  },
  {
    question: "ファクタリングを利用すると税務調査で問題になりますか？",
    answer:
      "ファクタリングは合法的な資金調達手段であり、適切に仕訳・申告していれば税務調査で問題になることはありません。ただし、ファクタリング手数料が高額な場合や頻繁に利用している場合は、その理由を説明できるようにしておきましょう。契約書や取引明細は保管しておいてください。",
  },
  {
    question: "法人と個人事業主でファクタリングの会計処理は異なりますか？",
    answer:
      "基本的な仕訳は同じ（売上債権売却損の計上）ですが、法人は法人税申告書、個人事業主は所得税の確定申告書に反映します。法人の場合は「損金算入」として法人税の課税所得から控除でき、個人事業主の場合は「必要経費」として所得から控除できます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリングの確定申告ガイド｜個人事業主の仕訳と経費計上",
  description: "ファクタリング利用時の確定申告方法。仕訳例と経費計上のルールを解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/tax-return/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "確定申告ガイド", item: "https://factoring-partner.pages.dev/articles/tax-return/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function TaxReturnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "確定申告ガイド" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">会計・税務ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングの確定申告ガイド
            <br className="hidden md:block" />
            個人事業主の仕訳と経費計上
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングを利用した際の仕訳方法、勘定科目の選び方、消費税の扱いまで、確定申告に必要な知識をまとめて解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#journal" className="hover:underline">1. ファクタリングの仕訳方法</a></li>
            <li><a href="#tax-points" className="hover:underline">2. 確定申告の4つのポイント</a></li>
            <li><a href="#blue-vs-white" className="hover:underline">3. 青色申告と白色申告での違い</a></li>
            <li><a href="#two-sha-journal" className="hover:underline">4. 2社間ファクタリングの仕訳</a></li>
            <li><a href="#caution" className="hover:underline">5. 注意点</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 仕訳方法 ─── */}
        <section id="journal" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリングの仕訳方法</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリング（売掛金100万円、手数料10%の場合）の仕訳を段階ごとに解説します。</p>
          <div className="space-y-6">
            {journalEntries.map((entry) => (
              <div key={entry.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-4 font-bold text-primary">{entry.title}</h3>
                <div className="mb-3 grid gap-2 md:grid-cols-2">
                  <div className="rounded bg-section-bg p-3">
                    <p className="text-xs font-semibold text-text-light">借方（左）</p>
                    <p className="mt-1 text-sm font-mono font-semibold text-text-main">{entry.debit}</p>
                  </div>
                  <div className="rounded bg-section-bg p-3">
                    <p className="text-xs font-semibold text-text-light">貸方（右）</p>
                    <p className="mt-1 text-sm font-mono font-semibold text-text-main">{entry.credit}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-text-light">{entry.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4つのポイント ─── */}
        <section id="tax-points" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">確定申告の4つのポイント</h2>
          <div className="space-y-4">
            {taxPoints.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 青色申告vs白色 ─── */}
        <section id="blue-vs-white" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">青色申告と白色申告での違い</h2>
          <p className="mb-6 leading-relaxed text-text-light">ファクタリングの手数料は青色申告でも白色申告でも経費計上が可能ですが、申告書への記載方法が異なります。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-left">青色申告（65万円控除）</th>
                  <th className="border border-primary p-3 text-left">白色申告</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">記載書類</td>
                  <td className="border border-border p-3">青色申告決算書（損益計算書）</td>
                  <td className="border border-border p-3">収支内訳書</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">記載欄</td>
                  <td className="border border-border p-3">営業外費用「売上債権売却損」</td>
                  <td className="border border-border p-3">その他の経費「売上債権売却損」</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">仕訳帳</td>
                  <td className="border border-border p-3">複式簿記で記帳（必須）</td>
                  <td className="border border-border p-3">簡易帳簿でOK</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">節税効果</td>
                  <td className="border border-border p-3">65万円の特別控除あり</td>
                  <td className="border border-border p-3">特別控除なし</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ファクタリングを利用する頻度が高い場合は、青色申告に切り替えることで節税効果が高まります。青色申告は事前の届出（「所得税の青色申告承認申請書」の提出）が必要です。
          </p>
        </section>

        {/* ── 2社間ファクタリングの仕訳 ─── */}
        <section id="two-sha-journal" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">2社間ファクタリングの仕訳</h2>
          <p className="mb-6 leading-relaxed text-text-light">
            2社間ファクタリングでは、売掛先から入金された売掛金をファクタリング会社に送金するステップが追加されます。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">売掛先から入金時（2社間の場合）</h3>
              <div className="mb-3 grid gap-2 md:grid-cols-2">
                <div className="rounded bg-section-bg p-3">
                  <p className="text-xs font-semibold text-text-light">借方</p>
                  <p className="mt-1 text-sm font-mono font-semibold text-text-main">普通預金 1,000,000円</p>
                </div>
                <div className="rounded bg-section-bg p-3">
                  <p className="text-xs font-semibold text-text-light">貸方</p>
                  <p className="mt-1 text-sm font-mono font-semibold text-text-main">預り金 1,000,000円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">売掛先から入金された金額はファクタリング会社に帰属するため「預り金」として処理します。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">ファクタリング会社への送金時</h3>
              <div className="mb-3 grid gap-2 md:grid-cols-2">
                <div className="rounded bg-section-bg p-3">
                  <p className="text-xs font-semibold text-text-light">借方</p>
                  <p className="mt-1 text-sm font-mono font-semibold text-text-main">預り金 1,000,000円</p>
                </div>
                <div className="rounded bg-section-bg p-3">
                  <p className="text-xs font-semibold text-text-light">貸方</p>
                  <p className="mt-1 text-sm font-mono font-semibold text-text-main">普通預金 1,000,000円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">ファクタリング会社に売掛金を送金して預り金を精算します。</p>
            </div>
          </div>
        </section>

        {/* ── 確定申告書への記載方法 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">確定申告書への具体的な記載方法</h2>
          <p className="mb-6 leading-relaxed text-text-light">ファクタリングの手数料を確定申告書に記載する具体的な方法を解説します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">青色申告決算書（65万円控除の場合）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                損益計算書の「営業外費用」欄に「売上債権売却損」として手数料の合計額を記載します。複式簿記で記帳している場合は、仕訳帳と総勘定元帳にファクタリング取引のすべてを記録してください。貸借対照表の「売掛金」は、ファクタリングで売却した分を減額して表示します。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">収支内訳書（白色申告の場合）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                「経費」の「その他の経費」欄に「売上債権売却損」として手数料の合計額を記載します。白色申告では貸借対照表の提出は不要ですが、帳簿（簡易帳簿）にファクタリング取引の記録は残しておく必要があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">消費税申告書</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料は消費税の非課税取引です。消費税の申告書において、仕入税額控除の対象にすることはできません。ただし、課税売上割合の計算では、債権譲渡の金額の5%が非課税売上として分母に算入されます。課税売上割合に影響する可能性がある点に注意してください。
              </p>
            </div>
          </div>
        </section>

        {/* ── 決算期をまたぐ場合の処理 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">決算期をまたぐ場合の処理</h2>
          <p className="mb-6 leading-relaxed text-text-light">ファクタリング契約が年度末をまたぐケースでの処理方法を解説します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">原則：契約日が属する年度の経費として計上</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリングの手数料は、売掛債権の譲渡契約が成立した日が属する年度の経費として計上します。実際の入金日ではなく、契約日が基準です。例えば12月25日に契約し、入金が翌年1月4日だった場合でも、手数料は12月の属する年度の経費です。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">2社間で売掛先からの入金が翌年になる場合</h3>
              <p className="text-sm leading-relaxed text-text-light">2社間ファクタリングで、売掛先からの入金（ファクタリング会社への送金）が翌年になる場合でも、売掛債権の譲渡契約が成立した年度で処理します。決算日時点で「預り金」が残高として残ることがあります。</p>
            </div>
          </div>
        </section>

        {/* ── よくある仕訳ミス ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">よくある仕訳ミスと対処法</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">ミス1：売上の二重計上</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリングの入金を「売上」として計上してしまうミスがあります。ファクタリングの入金は「売掛金の回収」であり、新たな売上ではありません。売上は商品・サービスの提供時に既に計上されているため、二重計上に注意してください。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">ミス2：手数料を「借入利息」で処理してしまう</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリングは借入ではないため、手数料を「支払利息」や「借入利息」で処理するのは不適切です。「売上債権売却損」または「支払手数料」で処理してください。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">ミス3：消費税の仕入税額控除を行ってしまう</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリングの手数料は消費税の非課税取引です。仕入税額控除の対象にしてしまうと消費税の過少申告になります。会計ソフトの消費税区分を「非課税仕入」に設定してください。</p>
            </div>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">契約書・取引明細を保管する</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリングの契約書、手数料の明細書、入金の通帳記録などは、確定申告の証拠書類として7年間保管する義務があります（所得税法施行規則第63条）。電子データでの保存も認められています。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">勘定科目は一貫性を保つ</h3>
              <p className="text-sm leading-relaxed text-text-light">「売上債権売却損」と「支払手数料」のどちらを使用しても構いませんが、一度決めた勘定科目は年度を通じて一貫して使用してください。年度途中で変更すると、税務調査で指摘される可能性があります。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">不明な点は税理士に相談する</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリングの取引額が大きい場合や、複数のファクタリング会社を利用している場合は、税理士に相談することをおすすめします。適切な処理を行わないと、税務調査で追徴課税を受ける可能性があります。</p>
            </div>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">&#9660;</span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-text-light">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/expense/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料は経費になる？</p>
              <p className="mt-1 text-sm text-text-light">勘定科目と損金算入の解説</p>
            </Link>
            <Link href="/articles/accounting/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングの会計処理</p>
              <p className="mt-1 text-sm text-text-light">仕訳と勘定科目の完全ガイド</p>
            </Link>
            <Link href="/articles/consumption-tax/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">消費税の取り扱い</p>
              <p className="mt-1 text-sm text-text-light">非課税取引の詳細を解説</p>
            </Link>
            <Link href="/articles/for-sole-proprietor/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">個人事業主向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">個人事業主の資金調達ガイド</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">ファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">手数料・入金速度・必要書類で各社を徹底比較。あなたに最適なファクタリング会社が見つかります。</p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
