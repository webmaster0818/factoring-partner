import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ラボルの手数料はいくら？一律10%の実質コストと他社比較",
  description:
    "ラボル（labol）の手数料は一律10%（税込・公式サイトにて2026年6月確認）。10万円の請求書なら入金は9万円。一律制のメリット・注意点、実質コストの考え方、他社との比較まで解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/labol/fee/",
  },
  openGraph: {
    title: "ラボルの手数料はいくら？一律10%の実質コストと他社比較",
    description:
      "ラボルの手数料一律10%（税込・2026年6月確認）の実質コストと他社比較を解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/labol/fee/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const feeComparison = [
  { name: "ラボル", fee: "一律10%", note: "24時間365日・1万円〜" },
  { name: "ペイトナー", fee: "一律10%", note: "最短10分入金・フリーランス特化" },
  { name: "OLTA", fee: "2%〜9%", note: "上限明示・AI審査" },
  { name: "FREENANCE（フリーナンス）", fee: "3%〜10%", note: "GMOグループ・補償サービスあり" },
];

const saveTips = [
  {
    title: "コストが確定するメリットを活かして資金計画を立てる",
    detail:
      "ラボルは一律10%のため、見積もりを待たずに手取り額を計算できます。「額面×0.9」が入金額という単純さは、変動制の会社にはない利点です。コストが読める分、必要最小限の金額だけ売却する計画が立てやすくなります。",
  },
  {
    title: "必要な分だけ売却して総コストを抑える",
    detail:
      "手数料率は交渉で下がらない前提のため、コストを抑える最も直接的な方法は売却額そのものを絞ることです。請求書の全額でなく、資金ショートを回避できる最小限の請求書を選んで現金化しましょう。",
  },
  {
    title: "急ぎでないなら変動制の会社と相見積もりする",
    detail:
      "一般に、売掛先の信用力が高い案件では、変動制の会社（OLTA 2%〜9%など）で10%を下回る料率が提示される可能性があります。土日祝や深夜の緊急時はラボル、平日で時間に余裕があるときは相見積もり、という使い分けが合理的です。",
  },
  {
    title: "支払いサイトの短い請求書から売却する",
    detail:
      "一律10%は期日までの残り日数にかかわらず同じです。期日まで7日の請求書も60日の請求書も同じ10%なら、期間あたりのコストは期日が近いものほど割高になります。どの請求書を売るかで実質的な負担感が変わる点を意識しましょう。",
  },
];

const faqs = [
  {
    question: "ラボルの手数料は本当に一律10%だけですか？",
    answer:
      "ラボルの手数料は一律10%（税込）です（公式サイトにて2026年6月確認）。金額や利用回数による料率の変動はなく、見積もり段階と実際の手数料に差異はありません。そのほかの諸費用の有無など最新の条件は公式サイトでご確認ください。",
  },
  {
    question: "10万円の請求書をラボルで現金化するといくら入金されますか？",
    answer:
      "手数料10%（1万円）が差し引かれ、9万円が入金されます。同様に30万円なら27万円、50万円なら45万円です。額面×0.9が手取り額の目安になるため、必要額から逆算して売却する請求書を選べます。",
  },
  {
    question: "ラボルの手数料は交渉で安くなりますか？",
    answer:
      "ラボルは一律10%の料金体系のため、個別交渉による割引は想定されていません。手数料交渉の余地を求める場合は、料率が変動制の会社（OLTAの2%〜9%など）で相見積もりを取る方法が現実的です。一方で、一律制には見積もりのブレがなくコストを事前確定できるメリットがあります。",
  },
  {
    question: "ラボルとペイトナーはどちらも一律10%ですが、何が違いますか？",
    answer:
      "手数料は同じ一律10%ですが、ラボルは24時間365日（土日祝含む）の申込・入金対応、ペイトナーは最短10分入金のスピードが持ち味です。休日・深夜の資金需要にはラボル、平日の最速入金にはペイトナーというように、手数料以外の条件で使い分けるのが一般的です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ラボルの手数料はいくら？一律10%の実質コストと他社比較",
  description:
    "ラボルの手数料一律10%（税込・2026年6月確認）の実質コストと他社比較を解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/labol/fee/",
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

export default function LabolFeePage() {
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
          { label: "ラボル", href: "/reviews/labol/" },
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
            ラボルの手数料はいくら？
            <br className="hidden md:block" />
            一律10%の実質コストと他社比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            見積もり不要でコストが確定する「一律10%」の仕組みと、他社の変動制との使い分けを解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            ラボルの手数料は一律10%（税込）です（公式サイトにて2026年6月確認）。10万円の請求書なら1万円が差し引かれ、9万円が入金されます。金額や利用回数で料率が変わらないため、見積もり前に手取り額が確定するのが最大の特徴です。一方、売掛先の信用力が高い案件では変動制の会社の方が安くなる可能性もあるため、急ぎでなければ相見積もり、土日祝・深夜の緊急時はラボルという使い分けが合理的です。
          </p>
          <p className="mt-3 text-sm">
            <Link href="/reviews/labol/" className="text-primary hover:underline">ラボルの総合レビューを見る</Link>
            <span className="mx-2 text-text-light">／</span>
            <Link href="/ranking/" className="text-primary hover:underline">他社と条件で比較</Link>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#official" className="hover:underline">1. ラボルの公式手数料（確認値）</a></li>
            <li><a href="#real-cost" className="hover:underline">2. 実質コストの考え方</a></li>
            <li><a href="#comparison" className="hover:underline">3. 他社との手数料比較</a></li>
            <li><a href="#save" className="hover:underline">4. 手数料負担を抑えるコツ4つ</a></li>
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
            ラボルの公式手数料（確認値）
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                <tr className="bg-section-bg">
                  <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-40">手数料</th>
                  <td className="px-4 py-3 text-text-light">一律10%（税込）※公式サイトにて2026年6月確認</td>
                </tr>
                <tr className="bg-white">
                  <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-40">買取可能額</th>
                  <td className="px-4 py-3 text-text-light">1万円〜（上限は審査により決定）</td>
                </tr>
                <tr className="bg-section-bg">
                  <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-40">対象</th>
                  <td className="px-4 py-3 text-text-light">フリーランス・個人事業主</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 leading-relaxed text-text-light">
            売掛金の額面から10%を差し引いた金額が入金されます。金額や利用回数による変動はなく、見積もり段階と実際の手数料に差異が生じない明朗な体系です。10万円なら9万円、30万円なら27万円、50万円なら45万円と、「額面×0.9」で手取りを即計算できます。
          </p>
        </section>

        {/* ── 実質コストの考え方 ─── */}
        <section id="real-cost" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            実質コストの考え方（一般解説）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            「一律10%」を高いと見るか妥当と見るかは、次の3つの視点で整理すると判断しやすくなります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">① 変動制の「下限」と比べない</p>
              <p className="text-sm leading-relaxed text-text-light">
                変動制の会社が掲げる「2%〜」などの下限は、信用力の高い大型案件に適用される最良条件であることが一般的です。フリーランスの少額請求書では、変動制でも実際の提示が10%前後になるケースは珍しくないとされます。比べるべきは下限ではなく「自分の案件への提示額」です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">② 不確実性がないこと自体に価値がある</p>
              <p className="text-sm leading-relaxed text-text-light">
                一律制は「見積もりを取ったら想定より高かった」というリスクがゼロです。資金繰りが切迫している場面では、コストが事前確定していること自体が意思決定を速くします。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">③ 期間あたりの負担で考える</p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料は支払期日までの「前倒し」への対価です。同じ10%でも、期日まで60日の請求書と7日の請求書では期間あたりのコストが大きく異なります。ファクタリングは融資と違い継続利息はありませんが、恒常的に使うと利益を圧迫するため、緊急時の手段と位置づけるのが健全です。
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            手数料の構成要素は
            <Link href="/articles/fee-breakdown/" className="text-primary hover:underline">手数料の内訳解説記事</Link>
            で、手取り額の目安は
            <Link href="/simulator/" className="text-primary hover:underline">手数料シミュレーター</Link>
            で確認できます。
          </p>
        </section>

        {/* ── 他社比較 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            他社との手数料比較
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-text-light">
            手数料はいずれも当サイトが2026年6月に各社公式サイトで確認した表記（<Link href="/ranking/" className="text-primary hover:underline">ランキングページ</Link>掲載値の転記）です。変動制の会社の実際の料率は案件により決まります。
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
            同じフリーランス向けでは、ペイトナーも同水準の一律10%です。料率で差がつかない分、ラボルの優位は土日祝含む24時間365日対応にあります。数字の上で10%を下回る可能性があるのはOLTA（2%〜9%）やFREENANCE（3%〜10%）ですが、実際に安くなるかは案件次第のため、時間があれば相見積もりで確かめましょう。
          </p>
        </section>

        {/* ── 手数料を抑えるコツ ─── */}
        <section id="save" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料負担を抑えるコツ4つ
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
            変動制の会社に対する交渉術は
            <Link href="/articles/fee-negotiation/" className="text-primary hover:underline">手数料交渉のコツ記事</Link>
            で解説しています。
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
            <Link href="/reviews/labol/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">ラボルの口コミ・評判（総合レビュー）</p>
              <p className="mt-1 text-sm text-text-light">口コミ傾向・メリット・デメリットを網羅</p>
            </Link>
            <Link href="/reviews/labol/shinsa/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">ラボルの審査は厳しい？</p>
              <p className="mt-1 text-sm text-text-light">通過のコツと落ちたときの対処法</p>
            </Link>
            <Link href="/reviews/labol/documents/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">ラボルの必要書類と入金までの流れ</p>
              <p className="mt-1 text-sm text-text-light">通帳コピー不要の書類と4ステップ</p>
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
            手取り額は「額面×0.9」。迷わず計算できる一律10%
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料一律10%（税込・2026年6月確認）。24時間365日、最短60分で入金されます。
          </p>
          <a
            href="https://labol.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            ラボル公式サイトで無料登録
          </a>
        </section>
      </div>
    </>
  );
}
