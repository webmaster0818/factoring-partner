import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリングのキャッシュフロー計算書への影響と記載方法",
  description:
    "ファクタリングがキャッシュフロー計算書（CF計算書）に与える影響と正しい記載方法を解説。営業活動・財務活動のどちらに分類されるか、2社間・3社間での違い、仕訳例を紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/cashflow-statement/",
  },
  openGraph: {
    title: "ファクタリングのキャッシュフロー計算書への影響と記載方法",
    description: "ファクタリングのCF計算書への影響。記載方法と仕訳例を解説。",
    url: "https://factoring-partner.pages.dev/articles/cashflow-statement/",
    type: "article",
  },
};

const cfImpacts = [
  { title: "営業活動によるキャッシュフローへの影響", description: "ファクタリングによる売掛金の現金化は、営業活動によるキャッシュフローに計上されるのが一般的です。売掛金の減少（現金化）は営業CFのプラス要因となり、キャッシュフロー計算書上は資金繰りが改善されているように見えます。ただし、手数料分は営業CFのマイナス要因（支払手数料）となります。" },
  { title: "財務活動との区分", description: "ファクタリングは借入れではないため、財務活動によるキャッシュフローには計上しません。これがファクタリングの大きなメリットのひとつで、負債を増やさずに現金を増やすことができます。銀行融資の場合は財務活動に計上されるため、財務CFが膨らみます。" },
  { title: "オフバランス効果", description: "ファクタリングにより売掛金がバランスシートから除外されるため（オフバランス）、総資産が減少し、ROA（総資産利益率）が改善します。また、負債を増やさないため自己資本比率にも悪影響を与えません。" },
];

const journalEntries = [
  { title: "ファクタリング申込時（売掛金の譲渡）", debit: "未収入金 950万円 / 売掛金 1,000万円\n支払手数料 50万円", credit: "（手数料5%の場合の仕訳例）", note: "売掛金を未収入金（ファクタリング会社からの入金予定）に振り替え、手数料を費用計上します。" },
  { title: "ファクタリング会社からの入金時", debit: "普通預金 950万円 / 未収入金 950万円", credit: "", note: "ファクタリング会社からの入金を受け取り、未収入金を消し込みます。" },
  { title: "2社間の場合：売掛先からの入金→送金", debit: "普通預金 1,000万円 / 売掛金 1,000万円\n未払金 1,000万円 / 普通預金 1,000万円", credit: "", note: "2社間の場合、売掛先からの入金を受け取り、同額をファクタリング会社に送金します。" },
];

const faqs = [
  { question: "ファクタリングはキャッシュフロー計算書のどこに記載しますか？", answer: "ファクタリングによる売掛金の現金化は「営業活動によるキャッシュフロー」に記載するのが一般的です。売掛金の減少は営業CFのプラス要因、手数料は支払手数料として営業CFのマイナス要因に計上されます。借入れではないため「財務活動によるキャッシュフロー」には計上しません。" },
  { question: "ファクタリングの手数料は損益計算書にどう計上しますか？", answer: "ファクタリングの手数料は「支払手数料」または「売上債権売却損」として営業外費用に計上するのが一般的です。手数料の勘定科目は企業の会計方針によりますが、税理士に確認することをおすすめします。" },
  { question: "ファクタリングを利用するとROAは改善しますか？", answer: "はい、改善する可能性があります。ファクタリングにより売掛金がバランスシートから除外されるため総資産が減少し、利益が同じであればROA（総資産利益率）は向上します。これをオフバランス効果と呼びます。ただし、手数料による利益減少も考慮する必要があります。" },
  { question: "ファクタリングは銀行の評価にどう影響しますか？", answer: "ファクタリングは負債を増やさないため、自己資本比率や債務超過の判定に悪影響を与えません。また、売掛金の減少によりキャッシュフローが改善されるため、銀行の融資審査ではプラスに評価される可能性があります。ただし、手数料による利益減少は評価のマイナス要因となります。" },
  { question: "消費税の取り扱いはどうなりますか？", answer: "ファクタリングの手数料は非課税取引です。金銭債権の譲渡は消費税法上の非課税取引に該当するため、ファクタリング手数料に消費税はかかりません。仕訳上も消費税は考慮不要です。" },
];

const articleSchema = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "ファクタリングのキャッシュフロー計算書への影響と記載方法",
  description: "ファクタリングのCF計算書への影響。記載方法と仕訳例を解説。",
  datePublished: "2026-04-26", dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/cashflow-statement/" },
};
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
  { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" },
  { "@type": "ListItem", position: 3, name: "CF計算書への影響", item: "https://factoring-partner.pages.dev/articles/cashflow-statement/" },
] };

export default function CashflowStatementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "CF計算書への影響" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">会計知識</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">ファクタリングのキャッシュフロー計算書への影響と記載方法</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">ファクタリングがCF計算書・貸借対照表・損益計算書に与える影響を、仕訳例付きで分かりやすく解説します。</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#impact" className="hover:underline">1. キャッシュフロー計算書への影響</a></li>
            <li><a href="#journal" className="hover:underline">2. 仕訳例</a></li>
            <li><a href="#bs-pl" className="hover:underline">3. BS・PLへの影響</a></li>
            <li><a href="#comparison" className="hover:underline">4. 銀行融資との会計処理の違い</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        <section id="impact" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">キャッシュフロー計算書への影響</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリングがキャッシュフロー計算書の各区分に与える影響を解説します。</p>
          <div className="space-y-4">
            {cfImpacts.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="journal" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">仕訳例</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリングの各段階における具体的な仕訳例を紹介します。売掛金1,000万円、手数料5%（50万円）の場合の仕訳です。</p>
          <div className="space-y-6">
            {journalEntries.map((entry) => (
              <div key={entry.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-4 font-bold text-primary">{entry.title}</h3>
                <div className="rounded-lg bg-section-bg p-4 font-mono text-sm">
                  <pre className="whitespace-pre-wrap text-text-main">{entry.debit}</pre>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-light">{entry.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="bs-pl" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">BS・PLへの影響</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリングが貸借対照表（BS）と損益計算書（PL）に与える影響を整理します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">貸借対照表（BS）への影響</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>売掛金が減少（オフバランス）</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>現預金が増加</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>負債は増加しない</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>総資産が減少→ROA改善</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>自己資本比率への悪影響なし</span></li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">損益計算書（PL）への影響</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>手数料が営業外費用に計上</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>経常利益が手数料分だけ減少</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>売上高には影響なし</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span>営業利益には影響なし</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">銀行融資との会計処理の違い</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリングと銀行融資では会計処理が大きく異なります。主な違いを比較します。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary px-4 py-3 text-left">項目</th>
                  <th className="border border-primary px-4 py-3 text-left">ファクタリング</th>
                  <th className="border border-primary px-4 py-3 text-left">銀行融資</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white"><td className="border border-border px-4 py-3 font-medium text-text-main">CF計算書の区分</td><td className="border border-border px-4 py-3 text-text-light">営業活動CF</td><td className="border border-border px-4 py-3 text-text-light">財務活動CF</td></tr>
                <tr className="bg-section-bg"><td className="border border-border px-4 py-3 font-medium text-text-main">負債への影響</td><td className="border border-border px-4 py-3 text-text-light">増加しない</td><td className="border border-border px-4 py-3 text-text-light">借入金として増加</td></tr>
                <tr className="bg-white"><td className="border border-border px-4 py-3 font-medium text-text-main">費用の勘定科目</td><td className="border border-border px-4 py-3 text-text-light">支払手数料</td><td className="border border-border px-4 py-3 text-text-light">支払利息</td></tr>
                <tr className="bg-section-bg"><td className="border border-border px-4 py-3 font-medium text-text-main">自己資本比率</td><td className="border border-border px-4 py-3 text-text-light">影響なし</td><td className="border border-border px-4 py-3 text-text-light">低下する</td></tr>
                <tr className="bg-white"><td className="border border-border px-4 py-3 font-medium text-text-main">信用情報</td><td className="border border-border px-4 py-3 text-text-light">記録されない</td><td className="border border-border px-4 py-3 text-text-light">記録される</td></tr>
              </tbody>
            </table>
          </div>
        </section>

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

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/accounting/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"><p className="font-bold text-primary">ファクタリングの会計処理</p><p className="mt-1 text-sm text-text-light">仕訳・勘定科目を解説</p></Link>
            <Link href="/articles/annual-rate/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"><p className="font-bold text-primary">手数料を年利換算すると？</p><p className="mt-1 text-sm text-text-light">銀行融資との比較</p></Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"><p className="font-bold text-primary">手数料の相場と計算方法</p><p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツ</p></Link>
            <Link href="/articles/vs-bank-loan/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"><p className="font-bold text-primary">ファクタリング vs 銀行融資</p><p className="mt-1 text-sm text-text-light">どちらを選ぶべきか比較</p></Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">ファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">手数料・入金スピード・審査通過率で主要ファクタリング会社を徹底比較。</p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
