import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "アクセルファクターの手数料はいくら？実質コストと他社比較",
  description:
    "アクセルファクターの手数料は0.5%〜（3社間0.5%〜10.5%／2社間1.0%〜12.0%・公式サイトにて2026年6月確認）。最低料率が適用される条件、実質コストの考え方、他社との手数料比較、手数料を抑えるコツを解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/accelfactor/fee/",
  },
  openGraph: {
    title: "アクセルファクターの手数料はいくら？実質コストと他社比較",
    description:
      "アクセルファクターの手数料0.5%〜の実態と実質コスト、他社比較、手数料を抑えるコツを解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/accelfactor/fee/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const feeFacts = [
  {
    label: "手数料",
    value:
      "0.5%〜（3社間：0.5%〜10.5% / 2社間：1.0%〜12.0%）※公式サイトにて2026年6月確認",
  },
  { label: "契約方式", value: "2社間・3社間対応" },
  { label: "買取可能額", value: "30万円〜1億円" },
  { label: "入金スピード", value: "最短即日（3時間程度）" },
];

/* 比較表の手数料・入金速度・買取額は /ranking/ の現行確認値（2026年6月 各社公式確認）を転記 */
const comparisonData = [
  { name: "アクセルファクター", fee: "0.5%〜", speed: "最短即日", amount: "30万円〜1億円" },
  { name: "QuQuMo", fee: "1%〜", speed: "最短2時間", amount: "制限なし" },
  { name: "ビートレーディング", fee: "2%〜", speed: "最短2時間", amount: "制限なし" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし" },
];

const saveTips = [
  {
    title: "3社間ファクタリングを選ぶ",
    detail:
      "アクセルファクターの公式表記は3社間0.5%〜10.5%・2社間1.0%〜12.0%（2026年6月確認）で、3社間の方がレンジ全体で低く設定されています。売掛先に通知しても支障がない取引であれば、3社間を選ぶのがコスト面では有利です。",
  },
  {
    title: "信用力の高い売掛先の債権で申し込む",
    detail:
      "一般に、手数料は売掛先の信用力に応じて決まります。上場企業や大手企業向けの売掛金であれば回収リスクが低いと評価され、レンジの下限側が適用されやすくなります。",
  },
  {
    title: "複数社から見積もりを取って比較する",
    detail:
      "手数料は案件ごとの個別見積もりで確定します。アクセルファクターの見積もりに加えて他社の見積もりも取り、提示条件を見比べることで、割高な料率で契約してしまうリスクを避けられます。",
  },
  {
    title: "手数料以外の費用の有無を確認する",
    detail:
      "実質コストは手数料率だけでは決まりません。事務手数料・登記費用・振込手数料などの諸費用が別途かかるかを見積もり時に確認し、「差し引かれる総額」で比較しましょう。",
  },
];

const faqs = [
  {
    question: "アクセルファクターの手数料は何%ですか？",
    answer:
      "公式サイトの表記は0.5%〜で、内訳は3社間ファクタリングが0.5%〜10.5%、2社間ファクタリングが1.0%〜12.0%です（公式サイトにて2026年6月確認）。実際の料率は売掛先の信用力や金額など案件ごとの見積もりで決まります。",
  },
  {
    question: "手数料0.5%はどんな場合に適用されますか？",
    answer:
      "最低水準の0.5%が適用されるのは、3社間ファクタリングで売掛先の信用力が非常に高く、金額が大きいなど条件が揃った場合に限られます。広告の下限値をそのまま期待せず、必ず見積もりで実際の料率を確認してください。",
  },
  {
    question: "手数料以外にかかる費用はありますか？",
    answer:
      "ファクタリングでは一般に、契約内容によって事務手数料・債権譲渡登記の費用・振込手数料などが発生する場合があります。アクセルファクターで実際にどの費用がかかるかは案件により異なるため、見積もり時に「手数料以外の費用の有無」を必ず確認しましょう。",
  },
  {
    question: "アクセルファクターの手数料は他社と比べて安いですか？",
    answer:
      "公表下限の0.5%は当サイト掲載社の中でも最低水準です（2026年6月の各社公式確認に基づく）。ただし2社間の上限は12.0%まであり、案件によってはOLTA（2%〜9%・上限明示）などの方が結果的に安くなる可能性もあります。下限だけでなく、自社の案件での見積額を複数社で比較することが重要です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "アクセルファクターの手数料はいくら？実質コストと他社比較",
  description:
    "アクセルファクターの手数料0.5%〜の実態と実質コスト、他社比較、手数料を抑えるコツを解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/accelfactor/fee/",
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

export default function AccelfactorFeePage() {
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
            アクセルファクターの手数料はいくら？
            <br className="hidden md:block" />
            実質コストと他社比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            公式表記0.5%〜（3社間0.5%〜10.5%／2社間1.0%〜12.0%・2026年6月確認）の実態と、実質コストの考え方・他社比較・手数料を抑えるコツを解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            アクセルファクターの手数料は0.5%〜で、公式表記の内訳は3社間0.5%〜10.5%・2社間1.0%〜12.0%（公式サイトにて2026年6月確認）です。公表下限0.5%は当サイト掲載社でも最低水準ですが、適用されるのは好条件が揃った場合に限られ、実際の料率は案件ごとの見積もりで決まります。コストを最小化するには、3社間の選択・信用力の高い売掛先の債権・複数社の相見積もりの3点が有効です。
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
            <li><a href="#fee" className="hover:underline">1. アクセルファクターの手数料（公式確認値）</a></li>
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
            アクセルファクターの手数料（公式確認値）
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
            ポイントは、契約方式によってレンジが分かれていることです。売掛先に債権譲渡を通知する3社間は0.5%〜10.5%、通知しない2社間は1.0%〜12.0%と、3社間の方が低く設定されています。下限の0.5%が適用されるのは条件が揃った場合に限られるため、「0.5%〜」の表記だけで判断せず、必ず自社の案件で見積もりを取りましょう。
          </p>
        </section>

        {/* ── 実質コストの考え方 ─── */}
        <section id="real-cost" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            実質コストの考え方
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングの実質コストを判断するときは、手数料率の下限ではなく「手取り額がいくらになるか」で考えるのが基本です。一般に、次の3点を合わせて確認します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">① 実際に適用される手数料率</p>
              <p className="text-sm leading-relaxed text-text-light">
                広告の下限値ではなく、見積もりで提示された料率が実際のコストです。一般に、売掛先の信用力・金額・支払いサイト・契約方式（2社間か3社間か）によって料率は変動します。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">② 手数料以外の諸費用</p>
              <p className="text-sm leading-relaxed text-text-light">
                契約内容によっては、事務手数料・債権譲渡登記の費用・振込手数料などが発生する場合があります。料率が低くても諸費用が重なれば手取りは減るため、「差し引かれる総額」を見積書で確認しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">③ 年率換算での重さ</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料は支払期日までの短期間に対するコストです。例えば支払いサイト1〜2ヶ月の売掛金に対する数%の手数料は、年率に換算するとかなり大きくなります。継続利用する場合ほど、料率の差が資金繰りに効いてきます。
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            手数料の内訳の詳細は
            <Link href="/articles/fee-breakdown/" className="text-primary hover:underline">ファクタリング手数料の内訳</Link>
            、金額を入れて概算したい方は
            <Link href="/simulator/" className="text-primary hover:underline">手数料シミュレーター</Link>
            をご利用ください。
          </p>
        </section>

        {/* ── 他社比較 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            他社との手数料比較
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            当サイトのランキングに掲載している各社の公式確認値（2026年6月に各社公式サイトで確認）との比較です。
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
            公表下限で見ればアクセルファクターの0.5%〜が最も低い一方、上限を明示しているのはOLTA（2%〜9%）です。上限リスクを抑えたいか、下限の低さを狙うかで選択が分かれます。より多くの会社と比較したい方は
            <Link href="/ranking/" className="text-primary hover:underline">ファクタリング会社おすすめランキング</Link>
            をご覧ください。
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
            見積もり後の交渉の進め方は
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
              href="/reviews/accelfactor/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">サービス全体のレビューはこちら</p>
            </Link>
            <Link
              href="/reviews/accelfactor/shinsa/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの審査は厳しい？</p>
              <p className="mt-1 text-sm text-text-light">通過のコツと落ちたときの対処法</p>
            </Link>
            <Link
              href="/reviews/accelfactor/documents/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">アクセルファクターの必要書類と入金までの流れ</p>
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
            手数料0.5%〜（3社間0.5%〜10.5%／2社間1.0%〜12.0%・2026年6月確認）。自社の案件での料率は無料見積もりでわかります。
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
