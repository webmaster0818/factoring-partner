import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ビートレーディングの手数料はいくら？実質コストと他社比較",
  description:
    "ビートレーディングの手数料は2社間4%〜12%・3社間2%〜9%（公式サイトにて2026年6月確認）。額面・掛け目・振込手数料まで含めた実質コストの考え方と、QuQuMo・アクセルファクター・OLTAとの比較、手数料を抑えるコツを解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/betrading/fee/",
  },
  openGraph: {
    title:
      "ビートレーディングの手数料はいくら？実質コストと他社比較",
    description:
      "ビートレーディングの手数料（2社間4%〜12%・3社間2%〜9%）の実質コストと他社比較、手数料を抑えるコツを解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/betrading/fee/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const feeTable = [
  { label: "2社間ファクタリング", value: "4%〜12%（公式サイトにて2026年6月確認）" },
  { label: "3社間ファクタリング", value: "2%〜9%（公式サイトにて2026年6月確認）" },
  { label: "買取可能額", value: "制限なし（少額〜大口対応）" },
  { label: "見積もり", value: "無料" },
];

const comparisonData = [
  {
    name: "ビートレーディング",
    fee: "2社間4%〜12% / 3社間2%〜9%",
    speed: "最短2時間",
    amount: "制限なし",
  },
  {
    name: "QuQuMo",
    fee: "1%〜（上限非公表）",
    speed: "最短2時間",
    amount: "制限なし",
  },
  {
    name: "アクセルファクター",
    fee: "3社間0.5%〜10.5% / 2社間1.0%〜12.0%",
    speed: "最短即日",
    amount: "30万円〜1億円",
  },
  {
    name: "OLTA",
    fee: "2%〜9%",
    speed: "最短即日",
    amount: "制限なし",
  },
];

const feeTips = [
  {
    title: "3社間ファクタリングを検討する",
    detail:
      "ビートレーディングの手数料は3社間（2%〜9%）の方が2社間（4%〜12%）より低い設定です。売掛先にファクタリングの利用を知られても問題ない関係であれば、3社間を選ぶことでコストを大きく抑えられる可能性があります。",
  },
  {
    title: "信用力の高い売掛先の債権で申し込む",
    detail:
      "手数料は売掛先の信用力・金額・支払いサイトによって変動します。一般に、上場企業や大手企業が売掛先の案件は回収リスクが低く、レンジの下限に近い手数料が提示されやすいとされます。",
  },
  {
    title: "複数社から相見積もりを取る",
    detail:
      "ビートレーディングは見積もり無料です。他社の見積もりと比較すれば、提示された手数料が適正かを判断でき、交渉材料にもなります。上の比較表の各社などレンジの異なる会社を2〜3社並べるのが基本です。",
  },
  {
    title: "リピート利用で条件改善を狙う",
    detail:
      "口コミでは「2回目以降は手数料が下がった」という声がある一方、案件によっては上がったという報告もあります。継続利用で信頼関係を築きつつ、毎回見積もりの内訳を確認して前回と比較することが重要です。",
  },
];

const faqs = [
  {
    question: "ビートレーディングの手数料は何%ですか？",
    answer:
      "2社間ファクタリングで4%〜12%、3社間ファクタリングで2%〜9%です（公式サイトにて2026年6月確認）。手数料は売掛先の信用力、売掛金の金額、支払いサイトなどにより変動します。見積もりは無料なので、正確な手数料は見積もり依頼で確認するのがおすすめです。",
  },
  {
    question: "手数料以外にかかる費用はありますか？",
    answer:
      "一般にファクタリングでは、買取手数料のほかに振込手数料や、契約内容によっては債権譲渡登記の費用などが発生する場合があります。ビートレーディングで実際にどの費用がかかるかは案件・契約内容によるため、見積もり時に「手数料以外の費用を含めた総額」と「実際の入金額」を確認してください。",
  },
  {
    question: "ビートレーディングの手数料は業界相場と比べて高いですか？",
    answer:
      "当サイトの一般解説では、ファクタリングの手数料の目安を2社間8〜18%・3社間1〜9%（会社により異なる）としています。ビートレーディングの2社間4%〜12%はこの目安より低めのレンジ、3社間2%〜9%は目安と同水準です。ただし実際の手数料は案件ごとの査定で決まるため、相見積もりでの確認が確実です。",
  },
  {
    question: "手数料の見積もりだけでも依頼できますか？",
    answer:
      "はい、ビートレーディングの見積もりは無料です。提示された手数料や条件に納得できなければ契約しなくても問題ありません。他社の見積もりと比較したうえで判断することをおすすめします。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ビートレーディングの手数料はいくら？実質コストと他社比較",
  description:
    "ビートレーディングの手数料（2社間4%〜12%・3社間2%〜9%）の実質コストの考え方と他社比較、手数料を抑えるコツを解説します。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/betrading/fee/",
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

export default function BetradingFeePage() {
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
          { label: "ビートレーディング", href: "/reviews/betrading/" },
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
            ビートレーディングの手数料はいくら？
            <br className="hidden md:block" />
            実質コストと他社比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            公式手数料は2社間4%〜12%・3社間2%〜9%。振込手数料などを含めた実質コストの考え方と、他社との比較・手数料を抑えるコツを解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            ビートレーディングの手数料は2社間4%〜12%・3社間2%〜9%（公式サイトにて2026年6月確認）で、当サイトの一般目安（2社間8〜18%）と比べて低めのレンジです。ただし実際の手数料は売掛先の信用力・金額・支払いサイトで変動し、コストは手数料率だけでなく掛け目や振込手数料等も含めた「実際の入金額」で判断する必要があります。見積もりは無料なので、他社と相見積もりを取って比較するのが確実です。
          </p>
          <p className="mt-3 text-sm text-primary">
            <Link href="/reviews/betrading/" className="hover:underline">ビートレーディングの総合レビューを見る</Link>
            {" ／ "}
            <a href="/simulator/" className="hover:underline">手数料シミュレーターで概算する</a>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#fee" className="hover:underline">1. ビートレーディングの手数料（公式確認値）</a></li>
            <li><a href="#real-cost" className="hover:underline">2. 実質コストの考え方（掛け目・諸費用）</a></li>
            <li><a href="#comparison" className="hover:underline">3. 他社との手数料比較</a></li>
            <li><a href="#tips" className="hover:underline">4. 手数料を抑えるコツ4つ</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、手数料などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 手数料 ─── */}
        <section id="fee" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ビートレーディングの手数料（公式確認値）
          </h2>
          <div className="mb-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {feeTable.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-section-bg" : "bg-white"}>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-48">
                      {item.label}
                    </th>
                    <td className="px-4 py-3 text-text-light">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料は固定ではなく、売掛先の信用力・売掛金の金額・支払いサイトなどによりレンジ内で変動します。同じ利用者でも案件が変われば手数料が変わるため、リピート利用でも毎回見積もりで確認するのが基本です。
          </p>
          <p className="leading-relaxed text-text-light">
            当サイトの一般解説では、ファクタリング手数料の目安を2社間8〜18%・3社間1〜9%（会社により異なる）としています。ビートレーディングの2社間4%〜12%はこの目安より低めのレンジといえます。手数料の内訳の仕組みは
            <Link href="/articles/fee-breakdown/" className="text-primary underline hover:text-accent">ファクタリング手数料の内訳の解説記事</Link>
            をご覧ください。
          </p>
        </section>

        {/* ── 実質コスト ─── */}
        <section id="real-cost" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            実質コストの考え方（掛け目・諸費用）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングのコストを比較するときは、手数料率だけでなく「最終的にいくら入金されるか」で判断することが重要です。一般に、実際の入金額には次の要素が影響します。
          </p>
          <div className="mb-6 space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">1. 債権額面と掛け目</p>
              <p className="text-sm leading-relaxed text-text-light">
                一般に、ファクタリングでは売掛金の額面全額ではなく、額面に「掛け目」（買取対象とする割合）を乗じた金額が買取のベースになる場合があります。掛け目が設定されるかどうか、設定される場合の割合は会社・案件によって異なるため、見積もり時に確認しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">2. 買取手数料</p>
              <p className="text-sm leading-relaxed text-text-light">
                ビートレーディングの場合は2社間4%〜12%・3社間2%〜9%（2026年6月確認）です。例えば額面100万円を2社間・手数料4%で売却した場合、手数料は4万円で入金額の目安は96万円、12%なら手数料12万円で入金額の目安は88万円です（掛け目・諸費用を考慮しない単純計算）。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">3. 振込手数料などの諸費用</p>
              <p className="text-sm leading-relaxed text-text-light">
                一般に、振込手数料のほか、契約内容によっては債権譲渡登記の費用（登記を行う契約の場合）や事務手数料などが発生することがあります。どの費用がかかるかは会社・契約により異なるため、「手数料◯%」の数字だけでなく、諸費用込みの実際の入金額を見積もりで確認してください。
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-text-light">
            金額を入れて概算したい方は
            <Link href="/simulator/" className="text-primary underline hover:text-accent">手数料シミュレーター</Link>
            で2社間・3社間それぞれの目安を計算できます。
          </p>
        </section>

        {/* ── 他社比較 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            他社との手数料比較
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ビートレーディングと、当サイトのランキングに掲載している主要3社の手数料を比較しました（各社とも公式サイトにて2026年6月確認の値）。
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
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            下限だけを見ればより低い会社もありますが、下限は好条件の案件に適用される数字であり、実際の手数料は案件ごとの査定で決まります。レンジの上限・買取額・入金速度も合わせて比較してください。より多くの会社との比較は
            <Link href="/ranking/" className="text-primary underline hover:text-accent">ファクタリング会社おすすめランキング</Link>
            をご覧ください。
          </p>
        </section>

        {/* ── 手数料を抑えるコツ ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ビートレーディングの手数料を抑えるコツ4つ
          </h2>
          <div className="space-y-6">
            {feeTips.map((tip, i) => (
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
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            手数料交渉の進め方は
            <Link href="/articles/fee-negotiation/" className="text-primary underline hover:text-accent">ファクタリング手数料の交渉術の解説記事</Link>
            で詳しくまとめています。
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

        {/* ── 関連記事 ─── */}
        <div className="bg-[#f7f9fc] border border-[#d4dbe6] rounded-lg p-5 my-8">
          <h3 className="text-base font-bold text-[#1e3a5f] mb-3">関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Link href="/articles/fee-breakdown/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} ファクタリング手数料の内訳を解説</Link>
            <Link href="/articles/fee-negotiation/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} ファクタリング手数料の交渉術</Link>
            <Link href="/simulator/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} 手数料シミュレーター（無料）</Link>
            <Link href="/reviews/betrading/shinsa/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} ビートレーディングの審査は厳しい？</Link>
          </div>
        </div>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            ビートレーディングの無料見積もりはこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            2社間4%〜12%・3社間2%〜9%。正確な手数料は無料見積もりで確認できます。
          </p>
          <a
            href="https://betrading.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料見積もり
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/betrading/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">手数料や審査を利用者の声で検証</p>
            </Link>
            <Link
              href="/reviews/betrading/documents/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ビートレーディングの必要書類</p>
              <p className="mt-1 text-sm text-text-light">入金までの流れを4ステップで解説</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">49社以上を徹底比較</p>
            </Link>
            <Link
              href="/diagnosis/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">無料診断ツール</p>
              <p className="mt-1 text-sm text-text-light">7つの質問であなたに合う会社を提案</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
