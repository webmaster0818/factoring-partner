import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリング手数料 実態調査2026｜49社を公式確認した手数料データ【2026年6月】",
  description:
    "ファクタリングパートナーが掲載49社の手数料を2026年6月に各社公式サイトで確認し、集計した独自調査です。手数料を公表しているのは49社中44社（90%）、公表下限の最小は0.5%・中央値は2.0%。会社による手数料の公表状況・下限の分布・対象事業者・入金スピードを、出典と取得日つきで公開します（引用可）。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/factoring-fee-survey-2026/",
  },
  openGraph: {
    title: "ファクタリング手数料 実態調査2026｜49社を公式確認した手数料データ",
    description:
      "掲載49社の手数料を2026年6月に各社公式確認して集計した独自調査。公表率90%・公表下限の中央値2.0%・最小0.5%。出典/取得日つきで公開（引用可）。",
    url: "https://hyogo-shihoushoshi.jp/articles/factoring-fee-survey-2026/",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファクタリング手数料 実態調査2026｜49社を公式確認した手数料データ",
  description:
    "掲載49社の手数料を2026年6月に各社公式サイトで確認し集計した独自調査。手数料の公表状況・下限の分布・対象事業者・入金スピードを出典つきで公開。",
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

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "ファクタリング手数料 実態調査2026（49社・公式確認）",
  description:
    "ファクタリングパートナーが掲載する49社の手数料を2026年6月に各社公式サイトで確認し、公表状況・公表下限の分布・対象事業者・入金スピードを集計した独自データセット。第三者の推定値は不採用、非公開は非公開と明記。",
  creator: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://hyogo-shihoushoshi.jp/",
  },
  dateModified: "2026-06-27",
  temporalCoverage: "2026-06",
  isAccessibleForFree: true,
  license: "https://hyogo-shihoushoshi.jp/articles/factoring-fee-survey-2026/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ファクタリングの手数料は何社が公表していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "本調査の対象49社のうち、手数料を公式サイトで公表しているのは44社（約90%）でした。残る5社は手数料を「非公開」または「要相談」としており、見積もりで確認する必要があります（2026年6月時点）。",
      },
    },
    {
      "@type": "Question",
      name: "公表されている手数料の下限はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "手数料を公表している44社の「下限」を集計すると、最小は0.5%、中央値は2.0%でした。ただし下限は最も条件が良い場合の料率であり、実際の手数料は売掛先の信用力・金額・契約形態（2社間／3社間）によって変動します。",
      },
    },
    {
      "@type": "Question",
      name: "この調査データは引用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "出典（ファクタリングパートナー）と取得時点（2026年6月）を明記いただければ引用・転載いただけます。数値は各社公式サイトで確認した実データのみを掲載しており、第三者の推定値は含みません。",
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
    { "@type": "ListItem", position: 3, name: "ファクタリング手数料 実態調査2026", item: "https://hyogo-shihoushoshi.jp/articles/factoring-fee-survey-2026/" },
  ],
};

export default function FeeSurvey2026Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ファクタリング手数料 実態調査2026" }]} />

      <article className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
          ファクタリング手数料 実態調査2026
          <span className="mt-2 block text-base font-medium text-gray-600 md:text-lg">
            掲載49社の手数料を公式サイトで確認・集計した独自調査
          </span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-700">
          ファクタリングの手数料は「会社によって違う」と言われますが、実際にどれくらいの会社が手数料を公表し、その水準はどの程度なのでしょうか。ファクタリングパートナーでは、当サイトに掲載している<strong>49社の手数料を2026年6月に各社の公式サイトで確認</strong>し、公表状況・下限の分布・対象事業者・入金スピードを集計しました。第三者サイトの推定値は使わず、公式で確認できた実データのみを掲載しています。
        </p>
        <p className="mt-2 text-xs text-gray-400">
          調査主体：ファクタリングパートナー（運営：株式会社MediaX）／データ取得時点：2026年6月
        </p>

        {/* 要点 */}
        <section className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
          <p className="text-sm font-bold text-gray-900">調査の要点</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
            <li>・手数料を<strong>公式で公表しているのは49社中44社（約90%）</strong>。残り5社は「非公開・要相談」。</li>
            <li>・公表44社の<strong>手数料の下限</strong>は、<strong>最小0.5%・中央値2.0%</strong>。</li>
            <li>・下限が<strong>3%以上の会社が18社</strong>と最も多く、<strong>1%未満は4社</strong>のみ。低料率は一部に限られる。</li>
            <li>・<strong>一律料率を明示</strong>している会社は3社（いずれも一律10%）。</li>
            <li>・約半数は<strong>下限のみ公表</strong>で、上限は売掛金の状況に応じた個別査定。</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">
            ※「下限」は最も条件が良い場合の料率です。実際の手数料は売掛先の信用力・金額・契約形態（2社間／3社間）で変動します。本データは特定の手数料を保証するものではありません。
          </p>
        </section>

        {/* 調査概要 */}
        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            調査の概要・方法
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr><th className="w-32 bg-gray-50 px-4 py-3 text-left font-medium text-gray-600">対象</th><td className="px-4 py-3">当サイト掲載のファクタリング会社 49社</td></tr>
                <tr><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-600">確認方法</th><td className="px-4 py-3">各社の公式サイトの表記を確認（第三者サイトの推定値・伝聞値は不採用）</td></tr>
                <tr><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-600">取得時点</th><td className="px-4 py-3">2026年6月</td></tr>
                <tr><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-600">非公開の扱い</th><td className="px-4 py-3">公式で確認できない手数料・上限は「非公開」「上限非公表」と明記し、推測で補わない</td></tr>
                <tr><th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-600">集計対象</th><td className="px-4 py-3">手数料の公表状況、公表会社の「下限」料率、対象事業者、入金スピード</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-700">
            手数料の確認プロセスの詳細は
            <Link href="/verification-policy/" className="text-blue-600 hover:underline">情報の調査・検証ポリシー</Link>
            に、各社の個別データは
            <Link href="/articles/company-directory/" className="text-blue-600 hover:underline">審査済み業者データベース</Link>
            で公開しています。
          </p>
        </section>

        {/* 発見1: 公表状況 */}
        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            1. 手数料を「公表」している会社は9割
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-700">
                  <th className="px-4 py-3 font-semibold">手数料の公表状況</th>
                  <th className="px-4 py-3 font-semibold">会社数</th>
                  <th className="px-4 py-3 font-semibold">割合</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr><td className="px-4 py-3">公式サイトで公表</td><td className="px-4 py-3">44社</td><td className="px-4 py-3">約90%</td></tr>
                <tr><td className="px-4 py-3">非公開・要相談</td><td className="px-4 py-3">5社</td><td className="px-4 py-3">約10%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-700">
            手数料を「非公開・要相談」としていた5社は、いずれも銀行・大手グループ系で3社間ファクタリングや大口取引を主とする会社でした。手数料が高い・低いという話ではなく、案件ごとの個別見積もりを前提としているためで、利用時は見積もりで確認が必要です。
          </p>
        </section>

        {/* 発見2: 下限分布 */}
        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            2. 公表手数料の「下限」の分布
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700">
            手数料を公表している44社について、表記された手数料の<strong>下限（最も条件が良い場合の料率）</strong>を集計しました。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-700">
                  <th className="px-4 py-3 font-semibold">公表下限手数料</th>
                  <th className="px-4 py-3 font-semibold">会社数</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr><td className="px-4 py-3">1%未満（0.5%など）</td><td className="px-4 py-3">4社</td></tr>
                <tr><td className="px-4 py-3">1%台</td><td className="px-4 py-3">11社</td></tr>
                <tr><td className="px-4 py-3">2%台</td><td className="px-4 py-3">11社</td></tr>
                <tr><td className="px-4 py-3">3%以上</td><td className="px-4 py-3">18社</td></tr>
                <tr className="bg-gray-50 font-medium"><td className="px-4 py-3">公表会社 合計</td><td className="px-4 py-3">44社</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-2 text-sm leading-relaxed text-gray-700">
            <p>
              公表された下限の<strong>最小は0.5%、中央値は2.0%</strong>でした。「0.5%〜」など1%未満の下限を掲げる会社は4社にとどまり、<strong>下限が3%以上の会社が18社と最多</strong>です。広告で見かける「0.5%〜」「1%〜」は最も条件が良い場合の数字で、全体としては<strong>下限2〜3%前後が一つの目安</strong>になります。
            </p>
            <p>
              また、約半数の会社は「○%〜」と<strong>下限のみを公表</strong>し、上限を明示していません（売掛金の状況による個別査定のため）。手数料を比較する際は、下限だけでなく見積もりでの実際の料率を確認することが大切です。
            </p>
          </div>
        </section>

        {/* 発見3: 一律料率 */}
        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            3. 「一律料率」を明示する会社は3社
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700">
            手数料を範囲ではなく<strong>「一律」で明示</strong>している会社は3社あり、いずれも一律10%でした。フリーランス・少額の利用者向けに、査定で料率が上下しない分かりやすさを打ち出している会社です。料率が固定のため、少額・短サイトの売掛金では割高に感じる場合もありますが、見積もりのブレがない点が特徴です。
          </p>
        </section>

        {/* 発見4: 対象・スピード */}
        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            4. 対象事業者・入金スピード
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-700">
                  <th className="px-4 py-3 font-semibold">項目</th>
                  <th className="px-4 py-3 font-semibold">会社数（49社中）</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr><td className="px-4 py-3">法人に対応</td><td className="px-4 py-3">44社</td></tr>
                <tr><td className="px-4 py-3">個人事業主に対応（表記あり）</td><td className="px-4 py-3">36社</td></tr>
                <tr><td className="px-4 py-3">オンライン完結に対応（◎表記）</td><td className="px-4 py-3">18社</td></tr>
                <tr><td className="px-4 py-3">最短「即日以内」（分・時間・即日）</td><td className="px-4 py-3">44社</td></tr>
                <tr><td className="px-4 py-3">最短「分単位」での入金を掲げる</td><td className="px-4 py-3">6社</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-700">
            掲載49社の大半（44社）が「最短即日以内」をうたい、うち6社は「最短10分〜90分」と分単位の速さを掲げています。ただし「最短」は条件が整った場合の目安で、初回利用や書類不備があると時間がかかります。スピードと手数料はトレードオフになりやすく、急ぎでない場合は手数料を優先して比較するのが基本です。
          </p>
        </section>

        {/* 読み方の注意 */}
        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            この数字の正しい読み方（重要）
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
            <p>
              本調査の数値は<strong>各社が公式に表示している手数料の集計</strong>であり、利用者が実際に提示される手数料を保証するものではありません。実際の手数料は、<strong>売掛先の信用力・売掛金の金額・支払いサイト・契約形態（2社間／3社間）・初回か継続か</strong>などで大きく変動します。一般に、債務者に通知する3社間は2社間より手数料が低くなる傾向があります。
            </p>
            <p>
              したがって、<strong>「下限の料率が最も低い会社＝自分にとって最も安い会社」とは限りません</strong>。複数社で同じ売掛金の見積もりを取り、実際の手取り額で比較することをおすすめします。概算は
              <Link href="/simulator/" className="text-blue-600 hover:underline">手数料シミュレーター</Link>
              で試算できます。
            </p>
          </div>
        </section>

        {/* 引用・転載 */}
        <section className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h2 className="text-lg font-bold text-gray-800">本データの引用・転載について</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray-700">
            <p>
              本調査のデータは、<strong>出典の明記を条件に引用・転載いただけます</strong>。記事・資料でご利用の際は、次のようにクレジットを記載してください。
            </p>
            <p className="text-xs font-semibold text-gray-700">■ テキストで引用する場合</p>
            <div className="rounded border border-gray-300 bg-white p-3 text-xs text-gray-600">
              出典：ファクタリングパートナー「ファクタリング手数料 実態調査2026（49社・公式確認）」（2026年6月時点）<br />
              https://hyogo-shihoushoshi.jp/articles/factoring-fee-survey-2026/
            </div>
            <p className="text-xs font-semibold text-gray-700">■ Webサイトで引用する場合（HTMLをコピーしてご利用ください）</p>
            <pre className="overflow-x-auto whitespace-pre-wrap break-all rounded border border-gray-300 bg-white p-3 text-xs text-gray-600">{`<p>出典：<a href="https://hyogo-shihoushoshi.jp/articles/factoring-fee-survey-2026/">ファクタリング手数料 実態調査2026（ファクタリングパートナー・2026年6月）</a></p>`}</pre>
            <p className="text-xs text-gray-500">
              数値・図表の引用、リンク付きでの紹介を歓迎します。掲載数値は2026年6月時点で各社公式サイトを確認したもので、手数料は変更される場合があるため、最新の料率は各社公式サイトでご確認ください。本調査は定期的に再確認し、更新時には取得時点を更新します。
            </p>
          </div>
        </section>

        {/* 関連リンク */}
        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            関連ページ
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Link href="/articles/fee-disclosed-companies/" className="block rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
              <p className="text-sm font-semibold text-gray-900">手数料を公表している会社一覧（44社）</p>
              <p className="mt-1 text-xs text-gray-500">手数料が明確な会社と非公開の会社の違い</p>
            </Link>
            <Link href="/articles/company-directory/" className="block rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
              <p className="text-sm font-semibold text-gray-900">審査済み業者データベース（49社）</p>
              <p className="mt-1 text-xs text-gray-500">各社の手数料・対象・スピードを条件で絞り込み</p>
            </Link>
            <Link href="/simulator/" className="block rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
              <p className="text-sm font-semibold text-gray-900">手数料シミュレーター</p>
              <p className="mt-1 text-xs text-gray-500">売掛金額から手数料・入金額の目安を試算</p>
            </Link>
            <Link href="/ranking/" className="block rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
              <p className="text-sm font-semibold text-gray-900">おすすめファクタリング会社ランキング</p>
              <p className="mt-1 text-xs text-gray-500">編集部が6基準で比較した厳選15社</p>
            </Link>
            <Link href="/verification-policy/" className="block rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
              <p className="text-sm font-semibold text-gray-900">情報の調査・検証ポリシー</p>
              <p className="mt-1 text-xs text-gray-500">手数料の公式確認プロセスと掲載基準</p>
            </Link>
          </div>
        </section>

        <p className="mt-8 text-xs leading-relaxed text-gray-400">
          ファクタリングは売掛債権の売買であり、貸付（融資）ではありません。手数料・契約条件は各社・各案件で異なります。本記事は情報提供を目的としたもので、特定の会社・契約を推奨・保証するものではありません。
        </p>
      </article>
    </>
  );
}
