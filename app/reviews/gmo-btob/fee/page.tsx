import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "GMO BtoB早払いの手数料はいくら？実質コストと他社比較",
  description:
    "GMO BtoB早払いの手数料は請求書買取1%〜10%・注文書買取2%〜12%（公式サイトにて2026年6月確認）。下限1%が適用される条件、実質コストの考え方、OLTA・ビートレーディング等との比較、手数料を抑えるコツを解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/gmo-btob/fee/",
  },
  openGraph: {
    title: "GMO BtoB早払いの手数料はいくら？実質コストと他社比較",
    description:
      "GMO BtoB早払いの手数料（請求書買取1%〜10%・注文書買取2%〜12%）と実質コスト・他社比較を解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/gmo-btob/fee/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const feeFacts = [
  { label: "請求書買取の手数料", value: "1%〜10%（公式サイトにて2026年6月確認）" },
  { label: "注文書買取の手数料", value: "2%〜12%（公式サイトにて2026年6月確認）" },
  { label: "決まり方", value: "審査のうえ個別に提示（売掛先の信用力・金額・支払いサイト等で変動）" },
  { label: "契約方式", value: "2社間ファクタリング" },
  { label: "入金スピード", value: "最短2営業日" },
];

const comparisonData = [
  { name: "GMO BtoB早払い", fee: "請求書1%〜10%／注文書2%〜12%", speed: "最短2営業日", amount: "要相談（大口対応可）" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし" },
  { name: "ビートレーディング", fee: "2%〜", speed: "最短2時間", amount: "制限なし" },
  { name: "QuQuMo", fee: "1%〜", speed: "最短2時間", amount: "制限なし" },
];

const saveTips = [
  {
    title: "信用力の高い売掛先の請求書で申し込む",
    detail:
      "手数料は審査のうえ個別に提示され、一般に売掛先の信用力が高いほど低い料率が出やすいとされます。上場企業や大手企業宛ての請求書を持っているなら、それを優先して申し込むのが下限1%側に近づく基本戦略です。",
  },
  {
    title: "できるだけ金額の大きい請求書でまとめて利用する",
    detail:
      "一般に、少額案件より大口案件の方が手数料率は下がりやすい傾向があります。GMO BtoB早払いは大口対応可のサービスなので、複数の少額請求書を都度出すより、金額のまとまった請求書で利用する方が料率面で有利になりやすいと考えられます。",
  },
  {
    title: "注文書買取より請求書買取を優先する",
    detail:
      "公式の手数料レンジは請求書買取1%〜10%に対し、注文書買取は2%〜12%と高めに設定されています（公式サイトにて2026年6月確認）。資金化を急がないのであれば、納品・請求まで進めてから請求書買取で申し込む方がコストを抑えられる可能性があります。",
  },
  {
    title: "提示された条件を他社見積もりと比較する",
    detail:
      "GMO BtoB早払いは審査後に手数料・買取条件が提示され、合意してから電子契約に進む流れです。提示額が想定より高い場合は、その場で契約せずOLTAやQuQuMoなど他社の見積もりと並べて判断しましょう。相見積もりは手数料交渉の最も有効な材料になります。",
  },
];

const faqs = [
  {
    question: "GMO BtoB早払いの手数料は何%ですか？",
    answer:
      "公式サイトによると、請求書買取が1%〜10%、注文書買取が2%〜12%です（公式サイトにて2026年6月確認）。実際の料率は審査のうえ個別に提示され、売掛先の信用力、売掛金の金額、支払いサイトなどの条件によって変動します。",
  },
  {
    question: "下限の1%はどんな場合に適用されますか？",
    answer:
      "適用条件の詳細は公式非公開です。ただし一般に、下限料率が適用されるのは売掛先が大手企業で金額が大きいなど好条件が揃った場合に限られる傾向があり、一般的な案件では数%程度になるケースが多いと考えられます。下限値だけで判断せず、審査後に提示される実際の条件で比較してください。",
  },
  {
    question: "手数料以外に費用はかかりますか？",
    answer:
      "公式サイトで手数料以外の費用体系は詳細に公開されていません。一般にファクタリングでは振込手数料等が別途かかる場合があるため、契約前に提示される条件で総コストを確認しましょう。GMO BtoB早払いは契約前に条件が提示されるため、その時点で内訳を確認できます。",
  },
  {
    question: "OLTAやQuQuMoと比べてどちらが安いですか？",
    answer:
      "一概には言えません。公表レンジではGMO BtoB早払い（請求書1%〜10%）とOLTA（2%〜9%）、QuQuMo（1%〜・上限非公表）は下限がいずれも低水準で、実際の料率は案件ごとの審査結果次第です。急ぎなら最短即日〜2時間の2社、大口・計画的な調達ならGMO BtoB早払い、と使い分けたうえで、可能なら複数社の見積もりを比較するのが確実です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "GMO BtoB早払いの手数料はいくら？実質コストと他社比較",
  description:
    "GMO BtoB早払いの手数料（請求書買取1%〜10%・注文書買取2%〜12%）と実質コスト・他社比較を解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/gmo-btob/fee/",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://hyogo-shihoushoshi.jp/" },
    { "@type": "ListItem", position: 2, name: "業者レビュー", item: "https://hyogo-shihoushoshi.jp/reviews/" },
    { "@type": "ListItem", position: 3, name: "GMO BtoB早払い", item: "https://hyogo-shihoushoshi.jp/reviews/gmo-btob/" },
    { "@type": "ListItem", position: 4, name: "手数料" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function GmoBtobFeePage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "業者レビュー", href: "/reviews/" },
          { label: "GMO BtoB早払い", href: "/reviews/gmo-btob/" },
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
            GMO BtoB早払いの手数料はいくら？
            <br className="hidden md:block" />
            実質コストと他社比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            請求書買取と注文書買取で異なるGMO BtoB早払いの手数料レンジと、実際のコストの見積もり方、主要他社との比較を整理します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            GMO BtoB早払いの手数料は、請求書買取が1%〜10%、注文書買取が2%〜12%です（公式サイトにて2026年6月確認）。下限1%は業界でも低い水準ですが、適用されるのは売掛先が大手で金額が大きいなど好条件の案件に限られる傾向があり、実際の料率は審査後に個別提示されます。コストを抑えるなら「信用力の高い売掛先・大きめの金額・請求書買取」で申し込み、提示条件を他社見積もりと比較するのが基本です。入金は最短2営業日のため、スピードよりコストと信頼性を重視する法人向きです。
          </p>
          <p className="mt-3 text-sm">
            <Link href="/reviews/gmo-btob/" className="text-primary hover:underline">GMO BtoB早払いの総合レビューを見る</Link>
            <span className="mx-2 text-text-light">／</span>
            <Link href="/simulator/" className="text-primary hover:underline">手数料シミュレーターで概算する</Link>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#fee" className="hover:underline">1. GMO BtoB早払いの手数料（公式確認値）</a></li>
            <li><a href="#cost" className="hover:underline">2. 実質コストの考え方</a></li>
            <li><a href="#comparison" className="hover:underline">3. 他社との手数料比較</a></li>
            <li><a href="#tips" className="hover:underline">4. 手数料を抑えるコツ4つ</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 手数料 ─── */}
        <section id="fee" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            GMO BtoB早払いの手数料（公式確認値）
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {feeFacts.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-section-bg" : "bg-white"}>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-52">
                      {item.label}
                    </th>
                    <td className="px-4 py-3 text-text-light">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            特徴的なのは、納品前の受注段階で使える「注文書買取」にも対応している点です。ただし手数料レンジは請求書買取より高めに設定されています。注文書ファクタリングの仕組みは
            <Link href="/articles/purchase-order/" className="mx-1 text-primary hover:underline">注文書買取の解説記事</Link>
            も参考にしてください。最新の条件は必ず公式サイトでご確認ください。
          </p>
        </section>

        {/* ── 実質コスト ─── */}
        <section id="cost" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            実質コストの考え方（一般解説）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            「1%〜」という下限だけを見て契約すると、想定とのギャップが生じがちです。一般に、実質コストは次の視点で見積もる必要があります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">1. 下限ではなく「自社の案件で提示される料率」で考える</p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料は売掛先の信用力・金額・支払いサイトで変動し、審査後に個別提示されます。一般的な案件では下限より数%高い料率になるケースが多いと考えられるため、資金計画は保守的な料率で立てておくのが安全です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">2. 期間あたりのコストとして捉える</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料は「支払期日までの1〜2か月を前倒しするための費用」です。仮に手数料5%で支払いサイト2か月の売掛金を資金化した場合、年率に換算するとかなり高い調達コストに相当します。恒常的に使うのではなく、必要な場面に絞るのがコスト管理の基本です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">3. 手数料の内訳・付帯費用を確認する</p>
              <p className="text-sm leading-relaxed text-text-light">
                一般に、ファクタリングでは買取手数料のほかに振込手数料等がかかる場合があります。GMO BtoB早払いは契約前に条件が提示されるため、その段階で総額を確認しましょう。手数料の一般的な内訳は
                <Link href="/articles/fee-breakdown/" className="mx-1 text-primary hover:underline">手数料の内訳解説記事</Link>
                で整理しています。
              </p>
            </div>
          </div>
        </section>

        {/* ── 他社比較 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            他社との手数料比較
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            法人が利用できる主要サービスと比較します。GMO BtoB早払いは公式サイトの確認値（2026年6月確認）、他3社は当サイトの
            <Link href="/ranking/" className="mx-1 text-primary hover:underline">ランキングページ</Link>
            掲載の公式確認値（2026年6月に各社公式サイトで確認）の転記です。
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
            ※ビートレーディング・QuQuMoの手数料は下限のみの表示です（上限は契約形態・案件により異なる）。実際の料率は各社とも審査で個別に決まるため、レンジの比較はあくまで目安とし、見積もりで確定させてください。
          </p>
        </section>

        {/* ── 抑えるコツ ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            GMO BtoB早払いの手数料を抑えるコツ4つ
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
            交渉材料の作り方は
            <Link href="/articles/fee-negotiation/" className="mx-1 text-primary hover:underline">手数料交渉のコツの記事</Link>
            、受取額の概算は
            <Link href="/simulator/" className="mx-1 text-primary hover:underline">手数料シミュレーター</Link>
            で確認できます。
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
              href="/reviews/gmo-btob/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">GMO BtoB早払いの口コミ・評判（総合レビュー）</p>
              <p className="mt-1 text-sm text-text-light">メリット・デメリットの全体像はこちら</p>
            </Link>
            <Link
              href="/reviews/gmo-btob/shinsa/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">GMO BtoB早払いの審査は厳しい？</p>
              <p className="mt-1 text-sm text-text-light">通過のコツと落ちたときの対処法</p>
            </Link>
            <Link
              href="/reviews/gmo-btob/documents/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">GMO BtoB早払いの必要書類と入金までの流れ</p>
              <p className="mt-1 text-sm text-text-light">審査前に揃える5点セットを確認</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">手数料・スピードで15社を比較</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-8 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            最適なコストの1社を見つける
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料は案件と会社の組み合わせで決まります。無料診断で候補を絞り、複数社の見積もりで確定させましょう。
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/diagnosis/" className="btn-cta inline-block">
              30秒無料診断を試す
            </Link>
            <a
              href="https://www.gmo-pg.com/service/hayabarai/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block rounded-lg border border-white/60 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              GMO BtoB早払い公式サイトを見る
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
