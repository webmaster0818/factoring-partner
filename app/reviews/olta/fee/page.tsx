import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "OLTA（オルタ）の手数料はいくら？実質コストと他社比較",
  description:
    "OLTA（オルタ）の手数料は2%〜9%（公式サイトにて2026年6月確認）。上限9%が明示される料金体系の意味、実質コストの考え方、他社との手数料比較、手数料を抑えるコツを解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/olta/fee/",
  },
  openGraph: {
    title: "OLTA（オルタ）の手数料はいくら？実質コストと他社比較",
    description:
      "OLTAの手数料2%〜9%の実態と実質コスト、他社比較、手数料を抑えるコツを解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/olta/fee/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const feeFacts = [
  { label: "手数料", value: "2%〜9%（公式サイトにて2026年6月確認）" },
  { label: "契約方式", value: "2社間ファクタリング専門（3社間非対応）" },
  { label: "買取可能額", value: "制限なし" },
  { label: "入金スピード", value: "最短即日" },
];

/* 比較表の手数料・入金速度・買取額は /ranking/ の現行確認値（2026年6月 各社公式確認）を転記 */
const comparisonData = [
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし" },
  { name: "QuQuMo", fee: "1%〜", speed: "最短2時間", amount: "制限なし" },
  { name: "PAYTODAY", fee: "1%〜9.5%", speed: "最短30分", amount: "制限なし" },
  { name: "ペイトナー", fee: "一律10%", speed: "最短10分", amount: "1万円〜" },
];

const saveTips = [
  {
    title: "信用力の高い売掛先の請求書で申し込む",
    detail:
      "一般に、手数料率は売掛先の信用力に大きく左右されます。上場企業・大手企業向けの売掛金であれば回収リスクが低く評価され、2%〜9%のレンジの下限側が適用されやすくなります。",
  },
  {
    title: "入金実績を積み重ねる",
    detail:
      "一般に、同じサービスを繰り返し利用して問題なく取引を完了していくと、データが蓄積されて条件面で有利になる可能性があります。継続的にファクタリングを使う予定なら、上限9%が明示されているOLTAは年間コストの見通しを立てやすいサービスです。",
  },
  {
    title: "複数社の見積もりを比較する",
    detail:
      "実際の料率は案件ごとの見積もりで決まるため、OLTAの提示額をQuQuMoやPAYTODAYなど他のオンライン完結型と比較してから決めるのが確実です。相見積もりはコストを抑える最も基本的な手段です。",
  },
  {
    title: "手数料以外の費用と振込条件を確認する",
    detail:
      "見積もりの際は、手数料以外に差し引かれる費用がないか、振込手数料の負担がどちらにあるかを確認しましょう。「入金される手取り額」で比較することが、実質コストを正しく把握するポイントです。",
  },
];

const faqs = [
  {
    question: "OLTAの手数料は何%ですか？",
    answer:
      "OLTAの手数料は2%〜9%です（公式サイトにて2026年6月確認）。売掛先の信用力・売掛金の金額・支払いサイトなどにより、この範囲内で案件ごとに決まります。上限が9%と明示されているため、想定外の高率を請求される心配が少ない料金体系です。",
  },
  {
    question: "手数料2%はどんな場合に適用されますか？",
    answer:
      "最低水準の2%が適用されるのは、売掛先が上場企業などで信用力が非常に高く、金額が大きいなど好条件が揃った案件に限られます。一般的な案件ではレンジの中間〜上限側になる場合もあるため、実際の料率は必ず見積もりで確認してください。",
  },
  {
    question: "3社間ファクタリングにすれば手数料は下がりますか？",
    answer:
      "OLTAは2社間ファクタリング専門のため、3社間による手数料引き下げという選択肢はありません。ただし2社間としては上限9%は低水準です。3社間で更に低い料率を狙いたい場合は、ビートレーディングやアクセルファクターなど3社間対応の会社を検討してください。",
  },
  {
    question: "OLTAの手数料は他社より安いですか？",
    answer:
      "2026年6月の各社公式確認値で比べると、公表下限はQuQuMo（1%〜）やPAYTODAY（1%〜9.5%）の方が低い一方、OLTAの2%〜9%は上限が明示された中でも低水準です。一律10%のペイトナーと比べると、条件次第で大きくコストを抑えられる可能性があります。最終的には自社の案件での見積額の比較が確実です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "OLTA（オルタ）の手数料はいくら？実質コストと他社比較",
  description:
    "OLTAの手数料2%〜9%の実態と実質コスト、他社比較、手数料を抑えるコツを解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/olta/fee/",
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

export default function OltaFeePage() {
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
            OLTA（オルタ）の手数料はいくら？
            <br className="hidden md:block" />
            実質コストと他社比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            公式表記2%〜9%（2026年6月確認）の料金体系の特徴と、実質コストの考え方・他社比較・手数料を抑えるコツを解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            OLTAの手数料は2%〜9%（公式サイトにて2026年6月確認）で、上限9%が明示されている点が最大の特徴です。想定外の高率を避けたい方や、継続利用で年間コストの見通しを立てたい方に向いています。一方でOLTAは2社間専門のため、3社間に切り替えて料率を下げる選択肢はありません。実際の料率は売掛先の信用力等で案件ごとに決まるため、他のオンライン完結型との相見積もりでの確認が確実です。
          </p>
          <p className="mt-3 text-sm font-semibold text-primary">
            <a href="#comparison" className="hover:underline">他社との手数料比較</a>
            <span className="mx-2 text-text-light">／</span>
            <a href="/simulator/" className="hover:underline">手数料シミュレーターで概算する</a>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#fee" className="hover:underline">1. OLTAの手数料（公式確認値）</a></li>
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

        {/* ── 手数料 ─── */}
        <section id="fee" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            OLTAの手数料（公式確認値）
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {feeFacts.map((item, i) => (
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
          <p className="mt-4 leading-relaxed text-text-light">
            OLTAの料金体系で注目すべきは「上限9%の明示」です。ファクタリングでは手数料の下限だけを掲げて上限を公表しない会社も少なくない中、上限が明確なため、最悪でも9%を超えないという前提でコスト計画を立てられます。一般に2社間ファクタリングの相場は8%〜18%とされており、上限9%はその相場に対して低水準です。
          </p>
        </section>

        {/* ── 実質コストの考え方 ─── */}
        <section id="real-cost" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            実質コストの考え方
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料率のレンジだけでは、実際にいくら差し引かれるかは判断できません。一般論として、実質コストは次の視点で確認します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">① 自社の案件に適用される料率</p>
              <p className="text-sm leading-relaxed text-text-light">
                2%〜9%のどこに落ち着くかは、一般に売掛先の信用力・金額・支払いサイトで決まります。レンジの下限を前提に資金計画を立てず、見積もりで確定した料率で判断しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">② 手取り額ベースでの比較</p>
              <p className="text-sm leading-relaxed text-text-light">
                比較の基準は「売掛金額 −（手数料＋諸費用）＝手取り額」です。振込手数料などの負担も含め、最終的に口座へ入金される金額で複数社を見比べるのが実質コストの正しい比較方法です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">③ 継続利用時の年間コスト</p>
              <p className="text-sm leading-relaxed text-text-light">
                毎月の資金繰りにファクタリングを組み込む場合、1回あたりの料率の差が年間では大きな金額差になります。上限が明示されているOLTAは、継続利用時のコスト上振れリスクを見積もりやすい点が強みです。
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            手数料の構成要素は
            <Link href="/articles/fee-breakdown/" className="text-primary hover:underline">ファクタリング手数料の内訳</Link>
            、金額を入れた概算は
            <Link href="/simulator/" className="text-primary hover:underline">手数料シミュレーター</Link>
            で確認できます。
          </p>
        </section>

        {/* ── 他社比較 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            他社との手数料比較
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            オンライン完結で利用できる主要サービスとの比較です。手数料は当サイトのランキング掲載の公式確認値（2026年6月に各社公式サイトで確認）を転記しています。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">サービス名</th>
                  <th className="px-4 py-3 text-left font-semibold">手数料</th>
                  <th className="px-4 py-3 text-left font-semibold">入金速度</th>
                  <th className="px-4 py-3 text-left font-semibold">買取額</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-section-bg" : "bg-white"} ${i === 0 ? "font-semibold text-primary" : ""}`}>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.fee}</td>
                    <td className="px-4 py-3">{item.speed}</td>
                    <td className="px-4 py-3">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-text-light">
            ※手数料は2026年6月に当サイト編集部が各社公式サイトで確認した表記です。実際の料率は案件ごとの見積もりで確定します。
          </p>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            公表下限ではQuQuMo・PAYTODAYが低い一方、QuQuMoは上限非公表のため、上限まで含めた見通しの立てやすさではOLTA（2%〜9%）とPAYTODAY（1%〜9.5%）に分があります。速さ最優先なら一律10%のペイトナー（最短10分）という選択もあります。より多くの会社は
            <Link href="/ranking/" className="text-primary hover:underline">ファクタリング会社おすすめランキング</Link>
            で比較できます。
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
            見積もり後に条件を引き出す方法は
            <Link href="/articles/fee-negotiation/" className="text-primary hover:underline">ファクタリング手数料の交渉術</Link>
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
              href="/reviews/olta/shinsa/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTAの審査は厳しい？</p>
              <p className="mt-1 text-sm text-text-light">通過のコツと落ちたときの対処法</p>
            </Link>
            <Link
              href="/reviews/olta/documents/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">OLTAの必要書類と入金までの流れ</p>
              <p className="mt-1 text-sm text-text-light">申込前の準備ガイド</p>
            </Link>
            <Link href="/articles/weekend-factoring/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">土日・祝日に使えるファクタリングの探し方</p>
              <p className="mt-1 text-sm text-text-light">休日対応の可否と申込みの注意点</p>
            </Link>
            <Link href="/articles/instant-factoring/" className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg">
              <p className="font-semibold text-primary">即日入金を狙う申込みのコツ</p>
              <p className="mt-1 text-sm text-text-light">申込み時間帯と書類準備で入金スピードは変わる</p>
            </Link>
            <Link
              href="/diagnosis/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">無料診断ツール</p>
              <p className="mt-1 text-sm text-text-light">7つの質問であなたに合う会社を絞り込み</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-8 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            実際の手数料は無料見積もりで確認を
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料2%〜9%（2026年6月確認）・上限明示で安心。自社の案件での料率は無料見積もりでわかります。
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
