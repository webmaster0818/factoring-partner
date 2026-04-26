import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "売掛先が倒産したらどうなる？償還請求権とファクタリングの安全性",
  description:
    "ファクタリング利用中に売掛先が倒産した場合のリスクを解説。償還請求権（リコース）の有無による違い、ノンリコース契約の重要性、倒産リスクへの備え方、保証型ファクタリングとの違いを詳しく紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/bankruptcy-risk/",
  },
  openGraph: {
    title: "売掛先が倒産したらどうなる？償還請求権とファクタリングの安全性",
    description:
      "売掛先倒産時のリスクと償還請求権の仕組み。ノンリコース契約の重要性を解説。",
    url: "https://factoring-partner.pages.dev/articles/bankruptcy-risk/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const scenarios = [
  {
    title: "ノンリコース（償還請求権なし）の場合",
    icon: "safe",
    description:
      "正規のファクタリング契約（ノンリコース）では、売掛先が倒産して売掛金が回収できなくなっても、利用者に返金義務は一切ありません。倒産リスクはファクタリング会社が負担します。利用者は既に受け取った買取代金をそのまま保持でき、追加の支払いを求められることはありません。",
    color: "secondary" as const,
    bgColor: "bg-teal-50",
  },
  {
    title: "リコース（償還請求権あり）の場合",
    icon: "danger",
    description:
      "償還請求権ありの契約では、売掛先が倒産して売掛金が回収できなくなった場合、利用者がファクタリング会社に買取代金を返金しなければなりません。これは実質的には「融資」に近い形態であり、正規のファクタリングとは異なります。このような契約は貸金業登録が必要であり、無登録で行っている場合は違法な可能性があります。",
    color: "accent" as const,
    bgColor: "bg-orange-50",
  },
];

const checkPoints = [
  {
    title: "契約書に「償還請求権なし（ノンリコース）」と明記されているか",
    description: "契約書に償還請求権がないことが明確に記載されているか確認します。曖昧な表現や記載がない場合は、ファクタリング会社に確認してください。",
  },
  {
    title: "売掛先の倒産時の取り扱いが明記されているか",
    description: "売掛先が倒産した場合の処理方法が契約書に具体的に記載されているか確認します。「利用者に返金義務はない」旨の記載があるか確認しましょう。",
  },
  {
    title: "遅延損害金や違約金の条項がないか",
    description: "売掛先の支払い遅延時に利用者に遅延損害金が発生する条項がないか確認します。このような条項がある場合は、実質的なリコース契約の可能性があります。",
  },
  {
    title: "担保や保証人を求められていないか",
    description: "正規のファクタリングでは担保や保証人は不要です。これらを求められる場合は、ファクタリングを装った融資（闇金融）の可能性があるため注意してください。",
  },
];

const faqs = [
  {
    question: "ファクタリングを利用中に売掛先が倒産したら、お金を返す必要がありますか？",
    answer:
      "ノンリコース（償還請求権なし）のファクタリング契約であれば、返金する必要はありません。売掛先の倒産リスクはファクタリング会社が負担するため、利用者に返金義務は生じません。ただし、リコース（償還請求権あり）の契約の場合は返金を求められます。契約時に必ず確認してください。",
  },
  {
    question: "償還請求権とは何ですか？",
    answer:
      "償還請求権とは、売掛先が売掛金を支払わなかった場合に、ファクタリング会社が利用者に買取代金の返金を請求できる権利です。この権利がない契約を「ノンリコース」、ある契約を「リコース」と呼びます。正規のファクタリングは原則ノンリコースであり、リコース型は貸金業に該当する可能性があります。",
  },
  {
    question: "すべてのファクタリング会社がノンリコースですか？",
    answer:
      "正規のファクタリング会社はノンリコース（償還請求権なし）を基本としています。ただし、一部の悪質な業者はリコース型の契約を結ばせようとします。契約前に必ず償還請求権の有無を確認し、リコース型の場合は契約を避けることをおすすめします。",
  },
  {
    question: "売掛先の倒産リスクを事前に確認する方法はありますか？",
    answer:
      "帝国データバンクや東京商工リサーチなどの信用調査機関で売掛先の信用情報を確認できます。また、売掛先の支払い遅延が頻繁に発生している場合は倒産リスクが高い兆候です。ファクタリング会社も審査時に売掛先の信用力を調査しますが、自社でも確認しておくと安心です。",
  },
  {
    question: "2社間ファクタリングと3社間ファクタリングで倒産リスクの扱いは異なりますか？",
    answer:
      "どちらもノンリコース契約であれば、売掛先の倒産時に利用者に返金義務はありません。ただし、3社間ファクタリングでは売掛先が直接ファクタリング会社に支払うため、ファクタリング会社が倒産の兆候を早期に察知しやすいメリットがあります。2社間では利用者経由で回収するため、利用者が入金を遅延させるリスクも加味されます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "売掛先が倒産したらどうなる？償還請求権とファクタリングの安全性",
  description: "売掛先倒産時のリスクと償還請求権の仕組み。ノンリコース契約の重要性を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/bankruptcy-risk/" },
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
    { "@type": "ListItem", position: 3, name: "売掛先の倒産リスク", item: "https://factoring-partner.pages.dev/articles/bankruptcy-risk/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function BankruptcyRiskPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "売掛先の倒産リスク" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">リスク管理ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            売掛先が倒産したらどうなる？
            <br className="hidden md:block" />
            償還請求権とファクタリングの安全性
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリング利用中に売掛先が倒産した場合のリスクと対処法。償還請求権の有無で結果が大きく異なります。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#scenarios" className="hover:underline">1. 売掛先倒産時の2つのシナリオ</a></li>
            <li><a href="#recourse" className="hover:underline">2. 償還請求権（リコース）とは</a></li>
            <li><a href="#check" className="hover:underline">3. 契約時の確認ポイント4つ</a></li>
            <li><a href="#prevention" className="hover:underline">4. 倒産リスクへの備え方</a></li>
            <li><a href="#guarantee" className="hover:underline">5. 保証型ファクタリングとの関係</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 2つのシナリオ ─── */}
        <section id="scenarios" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">売掛先倒産時の2つのシナリオ</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリング利用中に売掛先が倒産した場合の結果は、契約の種類によって大きく異なります。</p>
          <div className="space-y-4">
            {scenarios.map((item) => (
              <div key={item.title} className={`rounded-lg border border-${item.color}/30 ${item.bgColor} p-6`}>
                <h3 className={`mb-3 font-bold text-${item.color}`}>{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 償還請求権とは ─── */}
        <section id="recourse" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">償還請求権（リコース）とは</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            償還請求権とは、ファクタリング会社が売掛金を回収できなかった場合に、利用者に対して買取代金の返還を請求できる権利です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-left">ノンリコース（償還請求権なし）</th>
                  <th className="border border-primary p-3 text-left">リコース（償還請求権あり）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">売掛先倒産時</td>
                  <td className="border border-border p-3">利用者に返金義務なし</td>
                  <td className="border border-border p-3">利用者が返金する義務あり</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">リスク負担者</td>
                  <td className="border border-border p-3">ファクタリング会社</td>
                  <td className="border border-border p-3">利用者</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">法的性質</td>
                  <td className="border border-border p-3">債権の売買（合法）</td>
                  <td className="border border-border p-3">実質的な融資（貸金業登録要）</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">手数料の傾向</td>
                  <td className="border border-border p-3">やや高い（リスク分を含む）</td>
                  <td className="border border-border p-3">低い場合がある</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            <strong className="text-accent">重要：</strong>リコース型のファクタリングは、法的には「融資」に該当し、貸金業登録が必要です。登録なしにリコース型ファクタリングを行っている業者は違法業者の可能性があります。
          </p>
        </section>

        {/* ── 確認ポイント ─── */}
        <section id="check" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">契約時の確認ポイント4つ</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリング契約を結ぶ際に、売掛先倒産リスクに関して確認すべきポイントです。</p>
          <div className="space-y-4">
            {checkPoints.map((item, index) => (
              <div key={item.title} className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">{index + 1}</span>
                <div>
                  <h3 className="font-bold text-text-main">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 倒産リスクへの備え ─── */}
        <section id="prevention" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">倒産リスクへの備え方</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">取引先を分散する</h3>
              <p className="text-sm leading-relaxed text-text-light">特定の取引先に売上が集中しないよう、取引先を分散させましょう。1社の倒産で経営が危機に陥るリスクを軽減できます。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">信用調査を定期的に行う</h3>
              <p className="text-sm leading-relaxed text-text-light">主要取引先の信用情報を定期的にチェックしましょう。帝国データバンクや東京商工リサーチの信用レポートを活用すると効果的です。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">保証型ファクタリングを活用する</h3>
              <p className="text-sm leading-relaxed text-text-light">売掛金の未回収リスクに備えたい場合は、保証型ファクタリング（売掛金の保証サービス）の利用も検討しましょう。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">取引信用保険に加入する</h3>
              <p className="text-sm leading-relaxed text-text-light">損害保険会社が提供する取引信用保険に加入すると、売掛先の倒産時に保険金が支払われます。大口取引先がいる場合は検討に値します。</p>
            </div>
          </div>
        </section>

        {/* ── 保証型との関係 ─── */}
        <section id="guarantee" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">保証型ファクタリングとの関係</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            売掛先の倒産リスクに特化した保証を提供するのが「保証型ファクタリング」です。通常の買取型ファクタリングとの違いを確認しましょう。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-left">買取型（通常）</th>
                  <th className="border border-primary p-3 text-left">保証型</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">目的</td>
                  <td className="border border-border p-3">売掛金の早期資金化</td>
                  <td className="border border-border p-3">売掛金の未回収リスク保証</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">資金化のタイミング</td>
                  <td className="border border-border p-3">即日〜数日</td>
                  <td className="border border-border p-3">倒産発生時に保証金支払い</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">コスト</td>
                  <td className="border border-border p-3">手数料2%〜20%</td>
                  <td className="border border-border p-3">保証料1%〜5%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 実際の事例 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">売掛先倒産時の実際の対応事例</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリング利用中に売掛先が倒産した場合の実際の対応事例を紹介します。</p>
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">事例1：ノンリコース契約で安全に対処</h3>
              <p className="mb-4 text-xs text-text-light">業種：IT業（法人）</p>
              <div className="space-y-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">状況</p>
                  <p className="text-sm text-text-light">取引先A社（中堅企業）への売掛金300万円をファクタリング。ファクタリング契約から1ヶ月後にA社が民事再生法を申請し、売掛金の回収が不能に。</p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                  <p className="text-sm text-text-light">ノンリコース（償還請求権なし）の契約だったため、利用者に返金義務は一切発生せず。既に受け取っていた買取代金270万円（手数料10%差引後）をそのまま保持できた。ファクタリング会社がA社の破産管財人に債権届出を行い、回収を試みた。</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">事例2：リコース契約でトラブルに</h3>
              <p className="mb-4 text-xs text-text-light">業種：製造業（法人）</p>
              <div className="space-y-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">状況</p>
                  <p className="text-sm text-text-light">取引先B社への売掛金500万円をファクタリング。手数料の安さで選んだ会社と契約したが、契約書に「償還請求権あり」の条項があった。B社が倒産し、ファクタリング会社から450万円の返金を求められた。</p>
                </div>
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">結果</p>
                  <p className="text-sm text-text-light">契約書に記載されている以上、法的には返金義務がある。弁護士に相談した結果、分割払いで和解。本来のファクタリングはノンリコースであり、リコース契約は「貸金業」に該当する可能性があるとの助言を受けた。</p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 rounded-lg border-2 border-accent bg-orange-50 p-4 text-sm font-semibold text-accent">
            教訓：契約前に必ず「償還請求権の有無」を確認してください。手数料の安さだけで選ぶと、リコース契約に縛られるリスクがあります。
          </p>
        </section>

        {/* ── 倒産の兆候チェックリスト ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">売掛先の倒産兆候チェックリスト</h2>
          <p className="mb-6 leading-relaxed text-text-light">取引先の倒産リスクを早期に察知するためのチェックリストです。</p>
          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="text-sm text-text-light"><strong className="text-text-main">支払い遅延が増えている：</strong>従来は期日通りに支払っていた取引先の入金が遅れるようになった場合、資金繰りが悪化している兆候です。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="text-sm text-text-light"><strong className="text-text-main">値引き交渉が急に増えた：</strong>取引先から急に値引き要求が増えた場合、コスト削減を図っている＝経営が苦しくなっている可能性があります。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="text-sm text-text-light"><strong className="text-text-main">経営陣・担当者が頻繁に変わる：</strong>経営陣の交代や担当者の異動が頻繁に起きている場合、社内で問題が発生している可能性があります。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="text-sm text-text-light"><strong className="text-text-main">業界全体が不況：</strong>取引先の属する業界全体が不況に陥っている場合、連鎖倒産のリスクが高まります。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="text-sm text-text-light"><strong className="text-text-main">噂や報道が出ている：</strong>取引先の経営不振に関する噂や報道があれば、信用調査機関の情報を確認し、取引条件の見直しを検討しましょう。</p>
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
            <Link href="/articles/guarantee-type/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">保証型ファクタリングとは</p>
              <p className="mt-1 text-sm text-text-light">買取型との違いと活用シーン</p>
            </Link>
            <Link href="/articles/contract-checklist/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">契約時のチェックリスト</p>
              <p className="mt-1 text-sm text-text-light">契約前に確認すべきポイント</p>
            </Link>
            <Link href="/articles/is-it-legal/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングは合法？</p>
              <p className="mt-1 text-sm text-text-light">法的根拠と違法業者の見分け方</p>
            </Link>
            <Link href="/articles/troubles/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">トラブル事例と対処法</p>
              <p className="mt-1 text-sm text-text-light">よくあるトラブルを防ぐ方法</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">安全なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">ノンリコース契約で安心のファクタリング会社を手数料・入金速度で比較できます。</p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
