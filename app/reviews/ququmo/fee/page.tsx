import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "QuQuMo（ククモ）の手数料はいくら？実質コストと他社比較",
  description:
    "QuQuMo（ククモ）の手数料は1%〜（公式サイトにて2026年6月確認・上限非公表）。実質コストの考え方、他社との手数料比較、手数料を抑えるコツまで整理して解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/ququmo/fee/",
  },
  openGraph: {
    title: "QuQuMo（ククモ）の手数料はいくら？実質コストと他社比較",
    description:
      "QuQuMoの手数料1%〜（2026年6月確認・上限非公表）の読み方と実質コスト、他社比較を解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/ququmo/fee/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const feeComparison = [
  { name: "QuQuMo", fee: "1%〜（上限非公表）", note: "2社間専門・完全オンライン" },
  { name: "アクセルファクター", fee: "0.5%〜", note: "審査通過率93.3%を公表" },
  { name: "OLTA", fee: "2%〜9%", note: "上限明示・AI審査" },
  { name: "ビートレーディング", fee: "2%〜", note: "2社間・3社間の両対応" },
];

const saveTips = [
  {
    title: "信用力の高い売掛先・大きめの金額で申し込む",
    detail:
      "QuQuMoの手数料は売掛金額・売掛先・審査結果により変動します。一般に、売掛先が大手企業で金額が大きい案件ほど低い手数料が提示される傾向があるため、複数の売掛金がある場合は条件の良いものを選びましょう。",
  },
  {
    title: "必ず他社と相見積もりを取る",
    detail:
      "QuQuMoは上限が非公表のため、提示された手数料が妥当かは単独では判断できません。上限を明示しているOLTA（2%〜9%）などと相見積もりを取り、提示額を比較するのが最も確実なコスト管理の方法です。",
  },
  {
    title: "見積書の内訳を確認する",
    detail:
      "手数料率だけでなく、振込手数料などの諸費用が別途かかるかどうかを見積もり段階で確認しましょう。「入金される金額がいくらか」で比較するのが実質コストの正しい見方です。",
  },
  {
    title: "継続利用で条件交渉の余地をつくる",
    detail:
      "一般に、ファクタリングは同じ会社で買取・回収の実績を重ねると、2回目以降の条件が改善される場合があるとされています。初回の手数料だけでなく、継続利用時の条件も含めて付き合う会社を選びましょう。",
  },
];

const faqs = [
  {
    question: "QuQuMoの手数料の上限はいくらですか？",
    answer:
      "QuQuMoの手数料は公式サイトで「1%〜」と案内されており、上限は非公表です（公式サイトにて2026年6月確認）。実際の手数料は売掛先の信用力・売掛金の金額・支払いサイトなどにより個別に決まるため、正確な料率は無料見積もりで確認する必要があります。",
  },
  {
    question: "QuQuMoの手数料1%はどんな場合に適用されますか？",
    answer:
      "適用条件は公式に開示されていませんが、一般に手数料の下限は、売掛先が大手企業など信用力が高く、金額が大きい案件に適用される傾向があるとされています。全ての案件に1%が適用されるわけではない点に注意してください。",
  },
  {
    question: "QuQuMoの手数料以外にかかる費用はありますか？",
    answer:
      "諸費用の有無・内訳は公式サイトで個別に確認が必要です。ファクタリング全般では振込手数料などが別途かかる会社もあるため、見積もり時に「額面からいくら差し引かれ、いくら入金されるのか」を必ず確認しましょう。",
  },
  {
    question: "QuQuMoの手数料を3社間ファクタリングで下げられますか？",
    answer:
      "いいえ、QuQuMoは2社間ファクタリング専門で3社間には対応していません。一般に3社間は2社間より手数料が低い傾向がありますが、QuQuMoで3社間を選ぶことはできないため、3社間で手数料を下げたい場合はビートレーディングなど3社間対応の会社を検討してください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "QuQuMo（ククモ）の手数料はいくら？実質コストと他社比較",
  description:
    "QuQuMoの手数料1%〜（2026年6月確認・上限非公表）の読み方と実質コスト、他社比較を解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/ququmo/fee/",
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

export default function QuqumoFeePage() {
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
          { label: "QuQuMo（ククモ）", href: "/reviews/ququmo/" },
          { label: "手数料" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            手数料ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            QuQuMo（ククモ）の手数料はいくら？
            <br className="hidden md:block" />
            実質コストと他社比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            公式表記「1%〜」の正しい読み方と、上限非公表のサービスで損をしないための実質コストの確認方法を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            QuQuMoの手数料は「1%〜」で、下限は業界トップクラスの低水準です（公式サイトにて2026年6月確認）。ただし上限は非公表のため、自分の案件に何%が適用されるかは無料見積もりを取るまでわかりません。下限1%が全案件に適用されるわけではなく、実際の料率は売掛先の信用力・金額・支払いサイトで変動します。上限を明示する他社（OLTA 2%〜9%など）との相見積もりで実質コストを比較するのが賢い使い方です。
          </p>
          <p className="mt-3 text-sm">
            <Link href="/reviews/ququmo/" className="text-primary hover:underline">QuQuMoの総合レビューを見る</Link>
            <span className="mx-2 text-text-light">／</span>
            <Link href="/ranking/" className="text-primary hover:underline">他社と条件で比較</Link>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#official" className="hover:underline">1. QuQuMoの公式手数料（確認値）</a></li>
            <li><a href="#real-cost" className="hover:underline">2. 実質コストの考え方</a></li>
            <li><a href="#comparison" className="hover:underline">3. 他社との手数料比較</a></li>
            <li><a href="#save" className="hover:underline">4. 手数料を抑えるコツ4つ</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、手数料・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 公式手数料 ─── */}
        <section id="official" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            QuQuMoの公式手数料（確認値）
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                <tr className="bg-section-bg">
                  <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-40">手数料</th>
                  <td className="px-4 py-3 text-text-light">1%〜（公式サイトにて2026年6月確認。上限は非公表のため詳細は公式サイトで）</td>
                </tr>
                <tr className="bg-white">
                  <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-40">契約方式</th>
                  <td className="px-4 py-3 text-text-light">2社間ファクタリングのみ</td>
                </tr>
                <tr className="bg-section-bg">
                  <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-40">買取可能額</th>
                  <td className="px-4 py-3 text-text-light">制限なし（少額〜大口対応）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 leading-relaxed text-text-light">
            下限1%は当サイトが手数料を公式確認した会社の中でも低い水準です。ただし「1%〜」はあくまで最良条件の下限であり、上限が公表されていない以上、実際の料率は案件ごとの見積もりでしか確定しません。第三者サイトには上限の推定値が掲載されていることがありますが、当サイトでは公式に確認できない数値は採用していません。
          </p>
        </section>

        {/* ── 実質コストの考え方 ─── */}
        <section id="real-cost" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            実質コストの考え方（一般解説）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングの実質コストは「手数料率」だけでは決まりません。一般に、次の3つを合わせて見ることで、実際の負担を正しく比較できます。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">① 額面から差し引かれる合計額で見る</p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料のほかに振込手数料などの諸費用がかかる会社もあります。「請求書の額面100万円に対して、最終的にいくら入金されるか」という手取り額ベースで比較しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">② 期間あたりのコストとして捉える</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料は「支払期日までの前倒し」に対するコストです。同じ手数料率でも、期日まで30日の請求書と60日の請求書では期間あたりの負担が異なります。年利換算すると高く見えますが、融資と異なり継続的な利息負担はありません。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">③ 資金ショート回避の価値と比べる</p>
              <p className="text-sm leading-relaxed text-text-light">
                支払い遅延による信用毀損や事業機会の損失と比べて手数料が見合うかという視点も重要です。コストが見合わないと感じたら、無理に契約せず他の調達手段も検討しましょう。
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            手数料の内訳と相場の詳細は
            <Link href="/articles/fee-breakdown/" className="text-primary hover:underline">手数料の内訳解説記事</Link>
            を、概算の手取り額は
            <Link href="/simulator/" className="text-primary hover:underline">手数料シミュレーター</Link>
            で試算できます。
          </p>
        </section>

        {/* ── 他社比較 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            他社との手数料比較
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-text-light">
            手数料はいずれも当サイトが2026年6月に各社公式サイトで確認した表記（<Link href="/ranking/" className="text-primary hover:underline">ランキングページ</Link>掲載値の転記）です。実際の料率は案件により変動します。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">サービス名</th>
                  <th className="px-4 py-3 text-left font-semibold">手数料（2026年6月確認）</th>
                  <th className="px-4 py-3 text-left font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody>
                {feeComparison.map((item, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-section-bg" : "bg-white"} ${i === 0 ? "font-semibold text-primary" : ""}`}>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.fee}</td>
                    <td className="px-4 py-3">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 leading-relaxed text-text-light">
            下限だけを見ればアクセルファクター（0.5%〜）が最も低く、上限の見通しやすさではOLTA（2%〜9%）が優れています。QuQuMoは下限1%と必要書類3点の手軽さのバランスが持ち味です。下限の低さ＝実際の安さではないため、最終的には相見積もりでの比較をおすすめします。
          </p>
        </section>

        {/* ── 手数料を抑えるコツ ─── */}
        <section id="save" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料を抑えるコツ4つ
          </h2>
          <div className="space-y-6">
            {saveTips.map((tip, i) => (
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
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            交渉の進め方は
            <Link href="/articles/fee-negotiation/" className="text-primary hover:underline">手数料交渉のコツをまとめた記事</Link>
            でさらに詳しく解説しています。
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

        {/* ── 関連リンク ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/reviews/ququmo/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">QuQuMoの口コミ・評判（総合レビュー）</p>
              <p className="mt-1 text-sm text-text-light">口コミ傾向・メリット・デメリットを網羅</p>
            </Link>
            <Link href="/reviews/ququmo/shinsa/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">QuQuMoの審査は厳しい？</p>
              <p className="mt-1 text-sm text-text-light">通過のコツと落ちたときの対処法</p>
            </Link>
            <Link href="/reviews/ququmo/documents/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">QuQuMoの必要書類と入金までの流れ</p>
              <p className="mt-1 text-sm text-text-light">書類3点の準備ポイントとSTEP解説</p>
            </Link>
            <Link href="/articles/weekend-factoring/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">土日・祝日に使えるファクタリングの探し方</p>
              <p className="mt-1 text-sm text-text-light">休日対応の可否と申込みの注意点</p>
            </Link>
            <Link href="/articles/instant-factoring/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">即日入金を狙う申込みのコツ</p>
              <p className="mt-1 text-sm text-text-light">申込み時間帯と書類準備で入金スピードは変わる</p>
            </Link>
            <Link href="/diagnosis/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">無料診断ツール</p>
              <p className="mt-1 text-sm text-text-light">7つの質問であなたに合う会社を絞り込み</p>
            </Link>
          </div>
          <p className="mt-4 text-sm text-text-light">
            厳選15社の比較は
            <Link href="/ranking/" className="text-primary hover:underline">おすすめランキング</Link>
            をご覧ください。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-8 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            実際の手数料は無料見積もりで確認
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料1%〜（2026年6月確認・上限非公表）。あなたの請求書に適用される料率は無料見積もりでわかります。
          </p>
          <a
            href="https://ququmo.net/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            QuQuMo公式サイトで無料見積もり
          </a>
        </section>
      </div>
    </>
  );
}
