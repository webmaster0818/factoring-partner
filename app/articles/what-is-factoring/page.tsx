import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリングとは？仕組み・種類・メリット・デメリットをわかりやすく解説",
  description:
    "ファクタリングとは売掛債権を早期に現金化するサービスです。2社間・3社間の仕組み、メリット5つ・デメリット3つ、種類（買取型・保証型・一括・医療・国際）、銀行融資との違いをわかりやすく解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/what-is-factoring/",
  },
  openGraph: {
    title:
      "ファクタリングとは？仕組み・種類・メリット・デメリットをわかりやすく解説",
    description:
      "ファクタリングの仕組み・種類・メリット・デメリットを図解でわかりやすく解説。銀行融資との比較表も。",
    url: "https://factoring-partner.pages.dev/articles/what-is-factoring/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const merits = [
  {
    title: "最短即日で資金化できる",
    description:
      "ファクタリングの最大のメリットは、売掛金を支払い期日前に現金化できることです。銀行融資では数週間〜数ヶ月かかるのに対し、ファクタリングなら最短10分〜即日で入金されます。急な支払いや資金繰りのピンチに即座に対応できるため、経営の安定に直結します。",
  },
  {
    title: "審査が柔軟で利用しやすい",
    description:
      "ファクタリングの審査では、利用者自身の信用力よりも売掛先（取引先）の信用力が重視されます。そのため、赤字決算や税金滞納がある企業でも、売掛先が信頼できる企業であれば利用可能です。創業間もないスタートアップや、銀行融資の審査に通らなかった企業でも利用できます。",
  },
  {
    title: "負債にならない（バランスシートに影響しない）",
    description:
      "ファクタリングは融資（借入）ではなく、売掛債権の売買（譲渡）です。そのため、貸借対照表の負債が増えることはありません。むしろ売掛金が現金に変わるため、資産の流動性が向上します。銀行融資の審査時にもマイナス評価にならないのは大きな利点です。",
  },
  {
    title: "信用情報に影響しない",
    description:
      "ファクタリングの利用は信用情報機関（CIC・JICC・全銀協）に登録されません。融資のように信用情報に記録が残ることがないため、将来の銀行融資やクレジットカード審査に影響しません。信用情報を傷つけずに資金調達できるのは、事業を成長させる上で重要なポイントです。",
  },
  {
    title: "担保・保証人が不要",
    description:
      "ファクタリングでは、不動産などの担保や連帯保証人は一切不要です。売掛債権そのものが「担保」の代わりとなるため、資産を持たないフリーランスや創業間もない企業でも利用できます。経営者個人のリスクを最小限に抑えながら資金調達が可能です。",
  },
];

const demerits = [
  {
    title: "手数料がかかる",
    description:
      "ファクタリングには手数料がかかります。2社間ファクタリングの場合は8%〜18%、3社間ファクタリングでも1%〜9%程度の手数料が発生します。売掛金の満額を受け取れるわけではないため、手数料分が利益の減少につながります。頻繁に利用する場合は、手数料の累積コストに注意が必要です。",
  },
  {
    title: "売掛先の信用力に依存する",
    description:
      "ファクタリングの審査では売掛先の信用力が最も重要な要素です。そのため、売掛先が中小企業や新興企業で信用力が低い場合、審査に通らない、または手数料が高くなる可能性があります。逆に、売掛先が大手企業や上場企業であれば、有利な条件で利用できます。",
  },
  {
    title: "悪徳業者が存在する",
    description:
      "ファクタリング業界は銀行や消費者金融のような登録制度がないため、中には悪質な業者も存在します。ファクタリングを装って実質的な貸付（ヤミ金）を行う業者や、法外な手数料を請求する業者には注意が必要です。契約前に会社情報を確認し、契約内容（特に償還請求権の有無）を必ず確認しましょう。",
  },
];

const factoringTypes = [
  {
    name: "買取型ファクタリング",
    description:
      "最も一般的なファクタリングの形態です。売掛債権をファクタリング会社に売却（譲渡）し、手数料を差し引いた金額を受け取ります。償還請求権なし（ノンリコース）が原則で、売掛先が倒産しても利用者に返済義務はありません。本記事で紹介している多くのサービスがこの形態です。",
  },
  {
    name: "保証型ファクタリング",
    description:
      "売掛金を売却するのではなく、売掛先の支払いを保証するサービスです。売掛先が倒産や支払い不能になった場合に、ファクタリング会社が保証金を支払います。資金化が目的ではなく、売掛金の未回収リスクを軽減したい場合に利用されます。",
  },
  {
    name: "一括ファクタリング",
    description:
      "売掛先（取引先）が主体となって導入するファクタリングです。大手企業が下請け業者への支払いサイトを短縮するために利用するケースが多く、下請け業者は早期に資金を受け取れます。手形取引の代替手段として普及しています。",
  },
  {
    name: "医療報酬ファクタリング",
    description:
      "病院やクリニック、調剤薬局などの医療機関が、社会保険診療報酬支払基金や国民健康保険団体連合会に対する診療報酬債権を売却するファクタリングです。売掛先が公的機関のため信用リスクが低く、手数料も一般的なファクタリングより安い傾向にあります。",
  },
  {
    name: "国際ファクタリング",
    description:
      "海外企業との取引で発生する売掛債権を対象としたファクタリングです。輸出企業が海外のバイヤーに対する売掛金を早期に現金化したり、代金回収リスクを軽減するために利用されます。国際ファクタリングチェーン（FCI）に加盟する銀行系のファクタリング会社が主に取り扱っています。",
  },
];

const faqs = [
  {
    question: "ファクタリングは違法ではないのですか？",
    answer:
      "ファクタリング（債権譲渡）自体は民法で認められた合法的な取引です。2020年の民法改正で債権譲渡禁止特約がある場合でも譲渡が有効になり、法的にもより利用しやすくなりました。ただし、ファクタリングを装った実質的な貸付（ヤミ金）行為は違法です。",
  },
  {
    question: "ファクタリングの手数料はどのように決まりますか？",
    answer:
      "手数料は主に、売掛先の信用力、売掛金の金額、支払い期日までの期間、2社間か3社間かの契約形態、利用回数（リピート割引）などの要素で決まります。売掛先が上場企業や大手企業であるほど、手数料は安くなる傾向にあります。",
  },
  {
    question: "ファクタリングを利用するとリスクはありますか？",
    answer:
      "ノンリコース（償還請求権なし）契約であれば、売掛先が倒産しても利用者に返済義務はないため、リスクは手数料コストのみです。ただし、リコース（償還請求権あり）契約の場合は、売掛先が支払わない場合に利用者が負担する必要があるため、契約内容をよく確認しましょう。",
  },
  {
    question: "銀行融資とファクタリングはどちらが良いですか？",
    answer:
      "両者は性質が異なるため、状況に応じて使い分けるのが最適です。時間に余裕がある場合や大口の資金調達なら金利の低い銀行融資が有利です。急ぎの資金需要や審査に不安がある場合はファクタリングが適しています。負債を増やしたくない場合もファクタリングがおすすめです。",
  },
  {
    question: "ファクタリングの会計処理はどうなりますか？",
    answer:
      "ファクタリングは売掛金の売却として処理します。売掛金の減少と現金の増加を記帳し、手数料は「売掛債権売却損」として費用計上します。借入金（負債）には計上されないため、バランスシートの改善効果があります。具体的な会計処理は税理士に相談することをおすすめします。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファクタリングとは？仕組み・種類・メリット・デメリットをわかりやすく解説",
  description:
    "ファクタリングの仕組み・種類・メリット・デメリットを図解でわかりやすく解説。銀行融資との比較表も。",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  author: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://factoring-partner.pages.dev/articles/what-is-factoring/",
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

export default function WhatIsFactoringPage() {
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
          { label: "コラム", href: "/articles/" },
          { label: "ファクタリングとは" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            基礎知識
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングとは？
            <br className="hidden md:block" />
            仕組み・種類・メリット・デメリットをわかりやすく解説
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            売掛債権の早期現金化サービス「ファクタリング」について、仕組み・2社間と3社間の違い・メリット・デメリット・種類を初心者にもわかりやすく解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#what-is" className="hover:underline">
                1. ファクタリングとは
              </a>
            </li>
            <li>
              <a href="#mechanism" className="hover:underline">
                2. ファクタリングの仕組みを図解で解説
              </a>
            </li>
            <li>
              <a href="#merits" className="hover:underline">
                3. ファクタリングのメリット5つ
              </a>
            </li>
            <li>
              <a href="#demerits" className="hover:underline">
                4. ファクタリングのデメリット3つ
              </a>
            </li>
            <li>
              <a href="#types" className="hover:underline">
                5. ファクタリングの種類
              </a>
            </li>
            <li>
              <a href="#vs-loan" className="hover:underline">
                6. ファクタリング vs 銀行融資 比較表
              </a>
            </li>
            <li>
              <a href="#suited" className="hover:underline">
                7. ファクタリングが向いている企業・場面
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                8. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── ファクタリングとは ─── */}
        <section id="what-is" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングとは（売掛債権の早期現金化サービス）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">ファクタリング</strong>
            とは、企業やフリーランスが保有する売掛債権（請求書・売掛金）をファクタリング会社に売却し、支払い期日前に資金化するサービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            通常、商品やサービスを提供した後、代金が支払われるまでには30日〜60日程度の支払いサイト（待機期間）があります。この間に人件費や仕入れ代金など、運転資金が必要になるケースは少なくありません。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            ファクタリングを利用すれば、この支払い待ちの期間を解消し、最短即日で売掛金を現金化できます。銀行融資とは異なり「借入」ではないため、負債が増えることはなく、信用情報にも影響しません。
          </p>

          {/* Key points box */}
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">
              ファクタリングの基本ポイント
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  売掛債権（請求書）をファクタリング会社に売却して資金化する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  融資ではなく債権の売買なので、負債にならない
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  最短即日〜数日で資金化できる
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  担保・保証人は不要
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  信用情報機関への登録対象外
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 仕組みを図解で解説 ─── */}
        <section id="mechanism" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングの仕組みを図解で解説
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングには大きく分けて「2社間ファクタリング」と「3社間ファクタリング」の2つの方式があります。それぞれの仕組みと特徴を詳しく解説します。
          </p>

          {/* 2社間 */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-bold text-text-main">
              2社間ファクタリングの仕組み
            </h3>
            <p className="mb-4 leading-relaxed text-text-light">
              2社間ファクタリングは、利用者（自社）とファクタリング会社の2者間で契約を結ぶ方式です。取引先（売掛先）にファクタリングの利用を知らせる必要がないため、取引関係に影響を与えません。
            </p>

            {/* Diagram */}
            <div className="mb-6 rounded-lg border border-border bg-section-bg p-6">
              <p className="mb-4 text-center text-sm font-bold text-text-main">
                2社間ファクタリングの流れ
              </p>
              <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
                <div className="flex h-24 w-40 flex-col items-center justify-center rounded-lg border-2 border-primary bg-white p-3">
                  <p className="text-sm font-bold text-primary">利用者（自社）</p>
                  <p className="mt-1 text-xs text-text-light">
                    売掛債権を保有
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-accent font-semibold">
                    (1) 売掛債権を売却
                  </p>
                  <span className="text-xl text-primary">&#8644;</span>
                  <p className="text-xs text-secondary font-semibold">
                    (2) 買取代金を入金
                  </p>
                </div>
                <div className="flex h-24 w-40 flex-col items-center justify-center rounded-lg border-2 border-secondary bg-white p-3">
                  <p className="text-sm font-bold text-secondary">
                    ファクタリング会社
                  </p>
                  <p className="mt-1 text-xs text-text-light">
                    債権を買い取る
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-lg text-primary">&#8595;</span>
                  <p className="text-xs text-text-light">
                    (3) 売掛金の入金後、ファクタリング会社に支払い
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-4">
              <div className="grid gap-3 text-sm md:grid-cols-3">
                <div>
                  <p className="font-semibold text-text-main">手数料</p>
                  <p className="text-text-light">10%〜30%（相場）</p>
                </div>
                <div>
                  <p className="font-semibold text-text-main">入金速度</p>
                  <p className="text-text-light">最短即日</p>
                </div>
                <div>
                  <p className="font-semibold text-text-main">取引先への通知</p>
                  <p className="text-text-light">不要（知られない）</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3社間 */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-bold text-text-main">
              3社間ファクタリングの仕組み
            </h3>
            <p className="mb-4 leading-relaxed text-text-light">
              3社間ファクタリングは、利用者・ファクタリング会社・売掛先（取引先）の3者間で契約を結ぶ方式です。売掛先の承諾が必要ですが、ファクタリング会社のリスクが低いため、手数料が安くなります。
            </p>

            {/* Diagram */}
            <div className="mb-6 rounded-lg border border-border bg-section-bg p-6">
              <p className="mb-4 text-center text-sm font-bold text-text-main">
                3社間ファクタリングの流れ
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
                  <div className="flex h-24 w-40 flex-col items-center justify-center rounded-lg border-2 border-primary bg-white p-3">
                    <p className="text-sm font-bold text-primary">
                      利用者（自社）
                    </p>
                    <p className="mt-1 text-xs text-text-light">
                      売掛債権を保有
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-xs text-accent font-semibold">
                      (1) 売掛債権を売却
                    </p>
                    <span className="text-xl text-primary">&#8644;</span>
                    <p className="text-xs text-secondary font-semibold">
                      (2) 買取代金を入金
                    </p>
                  </div>
                  <div className="flex h-24 w-40 flex-col items-center justify-center rounded-lg border-2 border-secondary bg-white p-3">
                    <p className="text-sm font-bold text-secondary">
                      ファクタリング会社
                    </p>
                    <p className="mt-1 text-xs text-text-light">
                      債権を買い取る
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="text-lg text-primary">&#8593;</span>
                  <p className="text-xs text-text-light">
                    (3) 売掛先に債権譲渡を通知・承諾
                  </p>
                  <span className="text-lg text-primary">&#8595;</span>
                </div>
                <div className="flex h-24 w-40 flex-col items-center justify-center rounded-lg border-2 border-accent bg-white p-3">
                  <p className="text-sm font-bold text-accent">
                    売掛先（取引先）
                  </p>
                  <p className="mt-1 text-xs text-text-light">
                    (4) 期日に直接支払い
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-4">
              <div className="grid gap-3 text-sm md:grid-cols-3">
                <div>
                  <p className="font-semibold text-text-main">手数料</p>
                  <p className="text-text-light">2%〜20%（相場）</p>
                </div>
                <div>
                  <p className="font-semibold text-text-main">入金速度</p>
                  <p className="text-text-light">数日〜2週間程度</p>
                </div>
                <div>
                  <p className="font-semibold text-text-main">取引先への通知</p>
                  <p className="text-text-light">必要（承諾が必要）</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2社間 vs 3社間 比較表 */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-text-main">
              2社間と3社間の比較表
            </h3>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-left text-white">
                    <th className="px-4 py-3 font-semibold">比較項目</th>
                    <th className="px-4 py-3 font-semibold">2社間ファクタリング</th>
                    <th className="px-4 py-3 font-semibold">3社間ファクタリング</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                      契約当事者
                    </td>
                    <td className="px-4 py-3">利用者 + ファクタリング会社</td>
                    <td className="px-4 py-3">
                      利用者 + ファクタリング会社 + 売掛先
                    </td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                      手数料相場
                    </td>
                    <td className="px-4 py-3">10%〜30%</td>
                    <td className="px-4 py-3">2%〜20%</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                      入金速度
                    </td>
                    <td className="px-4 py-3">最短即日</td>
                    <td className="px-4 py-3">数日〜2週間</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                      取引先への通知
                    </td>
                    <td className="px-4 py-3">不要</td>
                    <td className="px-4 py-3">必要</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                      審査の厳しさ
                    </td>
                    <td className="px-4 py-3">やや厳しい</td>
                    <td className="px-4 py-3">比較的柔軟</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                      メリット
                    </td>
                    <td className="px-4 py-3">
                      取引先に知られない、スピーディ
                    </td>
                    <td className="px-4 py-3">手数料が安い</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                      デメリット
                    </td>
                    <td className="px-4 py-3">手数料が高い</td>
                    <td className="px-4 py-3">
                      取引先の承諾が必要、時間がかかる
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── メリット5つ ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングのメリット5つ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングには銀行融資にはない独自のメリットがあります。特に資金繰りに課題を抱える中小企業やフリーランスにとって、以下の5つのメリットは大きな魅力です。
          </p>
          <div className="space-y-6">
            {merits.map((merit, index) => (
              <div
                key={merit.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {merit.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {merit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── デメリット3つ ─── */}
        <section id="demerits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングのデメリット3つ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングにはメリットだけでなくデメリットも存在します。利用前に以下の3つのデメリットを理解しておくことで、適切な判断ができます。
          </p>
          <div className="space-y-6">
            {demerits.map((demerit, index) => (
              <div
                key={demerit.title}
                className="rounded-lg border border-accent/30 bg-orange-50 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {demerit.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {demerit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ファクタリングの種類 ─── */}
        <section id="types" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングの種類
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングには、取引の形態や対象となる債権の種類によって、いくつかのタイプがあります。それぞれの特徴を理解し、自社のニーズに合ったものを選びましょう。
          </p>
          <div className="space-y-4">
            {factoringTypes.map((type) => (
              <div
                key={type.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-3 text-lg font-bold text-primary">
                  {type.name}
                </h3>
                <p className="leading-relaxed text-text-light">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ファクタリング vs 銀行融資 ─── */}
        <section id="vs-loan" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング vs 銀行融資 比較表
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングと銀行融資はどちらも資金調達の手段ですが、性質は大きく異なります。以下の比較表で両者の違いを確認しましょう。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">ファクタリング</th>
                  <th className="px-4 py-3 font-semibold">銀行融資</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    取引の性質
                  </td>
                  <td className="px-4 py-3">売掛債権の売買（譲渡）</td>
                  <td className="px-4 py-3">金銭の貸借（借入）</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    コスト
                  </td>
                  <td className="px-4 py-3">手数料 1%〜30%</td>
                  <td className="px-4 py-3">金利 年1%〜15%程度</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    資金化までの期間
                  </td>
                  <td className="px-4 py-3">最短即日〜数日</td>
                  <td className="px-4 py-3">2週間〜2ヶ月</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    審査対象
                  </td>
                  <td className="px-4 py-3">売掛先の信用力</td>
                  <td className="px-4 py-3">利用者自身の信用力・財務状況</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    担保・保証人
                  </td>
                  <td className="px-4 py-3">不要</td>
                  <td className="px-4 py-3">必要な場合が多い</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    負債計上
                  </td>
                  <td className="px-4 py-3">負債にならない</td>
                  <td className="px-4 py-3">負債として計上</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    信用情報への影響
                  </td>
                  <td className="px-4 py-3">影響なし</td>
                  <td className="px-4 py-3">記録される</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    返済
                  </td>
                  <td className="px-4 py-3">
                    不要（売掛金の入金で完結）
                  </td>
                  <td className="px-4 py-3">元本+利息を分割返済</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    調達可能額
                  </td>
                  <td className="px-4 py-3">売掛金の範囲内</td>
                  <td className="px-4 py-3">担保・信用力に応じて柔軟</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    向いている場面
                  </td>
                  <td className="px-4 py-3">
                    急ぎの資金需要、短期の資金繰り改善
                  </td>
                  <td className="px-4 py-3">
                    設備投資、長期の運転資金
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ファクタリングは短期的な資金繰り改善に適しており、銀行融資は中長期的な資金需要に適しています。両者を上手く使い分けることで、最適な資金調達が可能になります。
          </p>
        </section>

        {/* ── 向いている企業・場面 ─── */}
        <section id="suited" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングが向いている企業・場面
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングは全ての企業に万能な資金調達手段ではありません。以下のような企業や場面で特に効果を発揮します。
          </p>

          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">
                向いている企業
              </h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>売掛金の支払いサイトが長い企業（建設業・運送業など）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>銀行融資の審査に通らなかった企業</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>創業間もないスタートアップ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>赤字決算や税金滞納がある企業</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>フリーランスや個人事業主</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>負債を増やさずに資金調達したい企業</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">
                向いている場面
              </h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>急な支払いが発生し、すぐに現金が必要な場面</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>大型案件を受注したが、先行投資の資金が不足している場面</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>季節変動による一時的な資金需要がある場面</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>取引先の支払い遅延で資金繰りが悪化した場面</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>決算前にバランスシートを改善したい場面</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>従業員の給与や外注費の支払い期日が迫っている場面</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">
              ファクタリングが向いていないケース
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              売掛債権を持っていない企業（現金取引のみの場合）、長期的・大規模な設備投資のための資金調達、継続的に運転資金が不足しており根本的な経営改善が必要な場合は、ファクタリングよりも他の資金調達手段（銀行融資・出資・助成金など）を検討した方が良いでしょう。
            </p>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-text-light">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            最適なファクタリング会社を見つけましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            ファクタリングの基本を理解したら、次はあなたに合ったファクタリング会社を探しましょう。15社を手数料・入金速度・審査通過率で徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめ15社の比較ランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
