import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { companies, isFeeUndisclosed, type Company } from "../../lib/companies";

export const metadata: Metadata = {
  title:
    "手数料を公式に公表しているファクタリング会社一覧【2026年6月・44社】｜非公開との違い",
  description:
    "ファクタリングの手数料を公式サイトで公表している会社を一覧化しました。当サイト掲載49社のうち手数料を公表しているのは44社、非公開・要相談は5社（2026年6月公式確認）。手数料を公表している会社の一覧（手数料・対象・スピード）と、非公開の会社の理由、手数料レンジの正しい見方を解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/fee-disclosed-companies/",
  },
  openGraph: {
    title: "手数料を公式に公表しているファクタリング会社一覧【2026年6月・44社】",
    description:
      "手数料を公式サイトで公表している44社の一覧と、非公開5社の理由・レンジの読み方を解説（2026年6月公式確認）。",
    url: "https://hyogo-shihoushoshi.jp/articles/fee-disclosed-companies/",
    type: "article",
  },
};

// 手数料下限（数値）でソートするための補助
const feeMin = (f: string) => {
  const m = f.match(/[\d.]+/);
  return m ? parseFloat(m[0]) : 999;
};

const disclosed: Company[] = companies
  .filter((c) => !isFeeUndisclosed(c))
  .sort((a, b) => feeMin(a.fee) - feeMin(b.fee));
const undisclosed: Company[] = companies.filter(isFeeUndisclosed);

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "手数料を公式に公表しているファクタリング会社一覧【2026年6月・44社】",
  description:
    "ファクタリングの手数料を公式サイトで公表している44社の一覧と、非公開5社の理由・手数料レンジの読み方を解説。",
  datePublished: "2026-06-27",
  dateModified: "2026-06-27",
  author: {
    "@type": "Organization",
    name: "ファクタリングパートナー編集部",
    url: "https://hyogo-shihoushoshi.jp/about/",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://hyogo-shihoushoshi.jp/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "手数料を公表しているファクタリング会社はどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "当サイト掲載の49社のうち、手数料を公式サイトで公表しているのは44社です（2026年6月確認）。トップ・マネジメントやアクセルファクター、マネーフォワード アーリーペイメントなどが手数料の下限を公表しています。残る5社は「非公開・要相談」で、見積もりで確認する必要があります。",
      },
    },
    {
      "@type": "Question",
      name: "手数料が非公開のファクタリング会社は避けるべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "非公開＝悪い会社という意味ではありません。非公開の5社はいずれも銀行・大手グループ系で、3社間ファクタリングや大口取引を主に扱い、案件ごとの個別見積もりを前提としているためです。ただし利用前に必ず見積もりで手数料を確認することが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "公表されている手数料の数字をそのまま信じてよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公表されている手数料の多くは「下限（最も条件が良い場合の料率）」です。実際の手数料は売掛先の信用力・金額・契約形態（2社間／3社間）で変動するため、複数社で同じ売掛金の見積もりを取り、実際の手取り額で比較することをおすすめします。",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://hyogo-shihoushoshi.jp/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://hyogo-shihoushoshi.jp/articles/" },
    { "@type": "ListItem", position: 3, name: "手数料を公表している会社一覧", item: "https://hyogo-shihoushoshi.jp/articles/fee-disclosed-companies/" },
  ],
};

function Row({ c }: { c: Company }) {
  return (
    <tr className="border-t border-border">
      <td className="px-4 py-3 font-medium text-text-main">{c.name}</td>
      <td className="px-4 py-3 text-primary">{c.fee}</td>
      <td className="px-4 py-3 text-text-light">{c.target}</td>
      <td className="px-4 py-3 text-center text-text-light">{c.online}</td>
      <td className="px-4 py-3 text-text-light">{c.speed}</td>
    </tr>
  );
}

export default function FeeDisclosedCompaniesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "記事一覧", href: "/articles/" },
          { label: "手数料を公表している会社一覧" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            手数料の透明性で選ぶ
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-3xl">
            手数料を公式に公表している
            <br className="hidden md:block" />
            ファクタリング会社一覧【2026年6月・44社】
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light">
            当サイト掲載の49社のうち、手数料を公式サイトで公表しているのは44社。手数料が明確な会社を一覧で確認できます。
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* 結論 */}
        <div className="mb-12 rounded-lg border border-primary/30 bg-section-bg p-5">
          <p className="text-sm font-bold text-text-main">この記事の結論</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text-light">
            <li>・当サイト掲載49社のうち、手数料を公式で公表しているのは<strong>44社（約90%）</strong>。</li>
            <li>・手数料を<strong>非公開・要相談</strong>としているのは5社（いずれも銀行・大手グループ系）。</li>
            <li>・公表されている手数料の多くは「下限」で、<strong>実際の料率は契約条件で変動</strong>します。</li>
          </ul>
          <p className="mt-3 text-xs text-text-light">
            ※本ページは手数料の<strong>公表状況（透明性）</strong>で会社を整理したものです。「最も手数料が安い会社」を選びたい方は
            <Link href="/articles/low-fee/" className="text-primary underline">手数料が安いファクタリング会社ランキング</Link>
            を、各社の集計データは
            <Link href="/articles/factoring-fee-survey-2026/" className="text-primary underline">手数料 実態調査2026</Link>
            をご覧ください。
          </p>
        </div>

        {/* なぜ重要か */}
        <section className="mb-12">
          <h2 className="mb-5 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            なぜ「手数料の公表」で選ぶのか
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-text-light md:text-base">
            <p>
              ファクタリングの手数料は法律で表示が義務づけられているわけではなく、公式サイトに手数料を載せていない会社もあります。手数料を明示している会社は、<strong>申し込み前にコストの目安を把握でき、他社と比較しやすい</strong>というメリットがあります。
            </p>
            <p>
              一方で「手数料を公表していない＝高い・悪質」とは限りません。大口・3社間を専門とする会社は案件ごとに個別査定するため、あえてレンジを公表していないケースもあります。大切なのは、公表値を入口にしつつ、<strong>最終的には複数社の見積もりで実際の手数料を比較する</strong>ことです。
            </p>
          </div>
        </section>

        {/* 公表44社 */}
        <section className="mb-12">
          <h2 className="mb-5 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料を公表しているファクタリング会社（{disclosed.length}社）
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-text-light">
            手数料を公式サイトで公表している{disclosed.length}社を、<strong>手数料の下限が低い順</strong>に並べています（2026年6月に各社公式サイトで確認）。「〜」は条件により変動することを意味します。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-section-bg text-left text-text-main">
                  <th className="px-4 py-3 font-semibold">会社名</th>
                  <th className="px-4 py-3 font-semibold">手数料</th>
                  <th className="px-4 py-3 font-semibold">対象</th>
                  <th className="px-4 py-3 text-center font-semibold">オンライン</th>
                  <th className="px-4 py-3 font-semibold">入金スピード</th>
                </tr>
              </thead>
              <tbody>
                {disclosed.map((c) => (
                  <Row key={c.name} c={c} />
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-text-light">
            ※手数料は2026年6月に各社公式サイトで確認した表記です。第三者サイトの推定値は採用していません。最新の手数料は各社公式サイトでご確認ください。各社の絞り込み・並び替えは
            <Link href="/articles/company-directory/" className="text-primary underline">審査済み業者データベース</Link>
            で行えます。
          </p>
        </section>

        {/* 非公開5社 */}
        <section className="mb-12">
          <h2 className="mb-5 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料を非公開・要相談としている会社（{undisclosed.length}社）
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-text-light">
            次の{undisclosed.length}社は公式サイトで手数料を明示せず、「非公開」または「要相談」としています。いずれも銀行・大手グループ系で、3社間ファクタリングや大口取引を主に扱い、案件ごとの個別見積もりを前提としています。利用時は見積もりで手数料を確認してください。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-section-bg text-left text-text-main">
                  <th className="px-4 py-3 font-semibold">会社名</th>
                  <th className="px-4 py-3 font-semibold">手数料</th>
                  <th className="px-4 py-3 font-semibold">対象</th>
                  <th className="px-4 py-3 font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody>
                {undisclosed.map((c) => (
                  <tr key={c.name} className="border-t border-border">
                    <td className="px-4 py-3 font-medium text-text-main">{c.name}</td>
                    <td className="px-4 py-3 text-text-light">{c.fee}</td>
                    <td className="px-4 py-3 text-text-light">{c.target}</td>
                    <td className="px-4 py-3 text-text-light">{c.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 読み方 */}
        <section className="mb-12">
          <h2 className="mb-5 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            公表手数料の正しい読み方
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-text-light md:text-base">
            <p>
              公表されている手数料の多くは<strong>「○%〜」という下限表記</strong>で、これは最も条件が良い場合の料率です。実際の手数料は、売掛先の信用力・売掛金額・支払いサイト・契約形態（2社間／3社間）・利用回数などで変わります。一般に、売掛先に通知・承諾を得る3社間は2社間より手数料が低くなる傾向があります。
            </p>
            <p>
              そのため、<strong>「下限が最も低い会社＝自分にとって最も安い会社」とは限りません</strong>。手数料の目安は
              <Link href="/simulator/" className="text-primary underline">手数料シミュレーター</Link>
              で試算し、最終的には複数社の見積もりを比較しましょう。手数料の確認方法は
              <Link href="/verification-policy/" className="text-primary underline">調査・検証ポリシー</Link>
              で公開しています。
            </p>
          </div>
        </section>

        {/* 関連 */}
        <section>
          <h2 className="mb-5 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Link href="/articles/factoring-fee-survey-2026/" className="block rounded-lg border border-border p-4 hover:bg-section-bg">
              <p className="text-sm font-semibold text-text-main">ファクタリング手数料 実態調査2026（49社）</p>
              <p className="mt-1 text-xs text-text-light">公表率・下限の分布など集計データ</p>
            </Link>
            <Link href="/articles/low-fee/" className="block rounded-lg border border-border p-4 hover:bg-section-bg">
              <p className="text-sm font-semibold text-text-main">手数料が安いファクタリング会社ランキング</p>
              <p className="mt-1 text-xs text-text-light">「公表」ではなく「安さ」で選びたい方へ</p>
            </Link>
            <Link href="/articles/company-directory/" className="block rounded-lg border border-border p-4 hover:bg-section-bg">
              <p className="text-sm font-semibold text-text-main">審査済み業者データベース（49社）</p>
              <p className="mt-1 text-xs text-text-light">条件で絞り込み・並び替え</p>
            </Link>
            <Link href="/ranking/" className="block rounded-lg border border-border p-4 hover:bg-section-bg">
              <p className="text-sm font-semibold text-text-main">おすすめファクタリング会社ランキング</p>
              <p className="mt-1 text-xs text-text-light">編集部が6基準で比較した厳選15社</p>
            </Link>
          </div>
        </section>

        <p className="mt-8 text-xs leading-relaxed text-text-light">
          ファクタリングは売掛債権の売買であり、貸付（融資）ではありません。手数料・契約条件は各社・各案件で異なります。本記事は情報提供を目的としたもので、特定の会社・契約を推奨・保証するものではありません。
        </p>
      </article>
    </>
  );
}
