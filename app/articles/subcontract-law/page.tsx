import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリングと下請法の関係｜下請代金の早期現金化は合法？",
  description:
    "ファクタリングと下請法（下請代金支払遅延等防止法）の関係を徹底解説。下請代金をファクタリングで早期現金化することの合法性、下請法の基本、元請けへの影響、注意点を分かりやすく説明します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/subcontract-law/",
  },
  openGraph: {
    title: "ファクタリングと下請法の関係｜下請代金の早期現金化は合法？",
    description: "下請代金のファクタリングは合法？下請法との関係を法的根拠から解説。",
    url: "https://factoring-partner.pages.dev/articles/subcontract-law/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const subcontractLawBasics = [
  {
    title: "下請法とは？",
    description: "下請代金支払遅延等防止法（下請法）は、親事業者（元請け）が下請事業者に対して不当な行為を行うことを禁止する法律です。親事業者の資本金が1,000万円超で、下請事業者の資本金が一定額以下の場合に適用されます。",
  },
  {
    title: "下請法で禁止されている行為",
    description: "①受領拒否②下請代金の支払遅延（納品から60日以内に支払う義務）③下請代金の減額④返品⑤買いたたき⑥物の購入・サービスの利用強制⑦報復措置⑧有償支給原材料の早期決済⑨割引困難な手形の交付⑩不当な経済上の利益の提供要請⑪不当な給付内容の変更・やり直しの11項目が禁止されています。",
  },
  {
    title: "下請代金の支払期日のルール",
    description: "下請法では、親事業者は下請事業者から物品等を受領した日から60日以内に下請代金を支払わなければなりません。60日を超える支払サイトは下請法違反となります。ただし、実際には60日以上のサイトが設定されているケースもあり、問題となっています。",
  },
];

const legalRelationship = [
  {
    title: "ファクタリングは下請法に抵触しない",
    description: "ファクタリングは下請事業者が自らの意思で売掛金（下請代金の請求権）をファクタリング会社に売却する行為です。親事業者が関与するものではないため、下請法の規制対象外です。2社間ファクタリングであれば、親事業者に一切通知する必要もありません。",
  },
  {
    title: "民法466条に基づく合法的な取引",
    description: "ファクタリングは民法466条で認められた「債権譲渡」に基づく取引です。下請事業者が保有する売掛金（債権）を第三者（ファクタリング会社）に譲渡することは法律上何ら問題ありません。2020年の民法改正により、債権譲渡禁止特約があっても債権譲渡は有効とされています。",
  },
  {
    title: "親事業者によるファクタリング利用の強制は違法",
    description: "注意すべき点として、親事業者が下請事業者に対してファクタリングの利用を強制することは、下請法の「不当な経済上の利益の提供要請」に該当する可能性があります。ファクタリングはあくまで下請事業者の自由意思に基づいて利用されるべきものです。",
  },
];

const practicalPoints = [
  {
    title: "下請代金の入金遅延への対処法としてのファクタリング",
    description: "親事業者からの入金が遅れている場合、ファクタリングで資金繰りを改善する方法が有効です。同時に、入金遅延が60日を超えている場合は下請法違反の可能性があるため、公正取引委員会への相談も検討しましょう。",
  },
  {
    title: "債権譲渡禁止特約がある場合",
    description: "取引先との契約に「債権譲渡禁止特約」がある場合でも、2020年の民法改正（新民法466条）により、債権譲渡は法的に有効です。ただし、3社間ファクタリングで取引先に通知する場合はトラブルの原因になる可能性があるため、2社間ファクタリングの利用が推奨されます。",
  },
  {
    title: "取引先との関係維持",
    description: "2社間ファクタリングを利用すれば、取引先（親事業者）にファクタリングの利用が知られることはありません。取引先との関係に影響を与えずに資金繰りを改善できるのが、2社間ファクタリングの大きなメリットです。",
  },
];

const faqs = [
  {
    question: "下請代金をファクタリングで早期現金化することは合法ですか？",
    answer: "はい、完全に合法です。ファクタリングは民法466条の債権譲渡に基づく取引であり、下請事業者が自らの意思で売掛金を売却する行為は、下請法の規制対象外です。親事業者が関与するものではないため、法律上何ら問題ありません。",
  },
  {
    question: "親事業者にファクタリングの利用がバレることはありますか？",
    answer: "2社間ファクタリングを選択すれば、親事業者にファクタリングの利用が知られることはありません。取引先への通知は不要で、入金後にファクタリング会社に送金する仕組みです。3社間の場合は通知が必要なため、知られることになります。",
  },
  {
    question: "下請法違反で入金が遅延している場合、ファクタリングは使えますか？",
    answer: "はい、入金が遅延している場合でもファクタリングは利用可能です。ただし、売掛金の回収リスクがあるため、遅延の状況によっては審査が厳しくなったり手数料が高くなる可能性があります。同時に、入金遅延が下請法違反に該当する場合は、公正取引委員会への相談も検討してください。",
  },
  {
    question: "債権譲渡禁止特約がある契約でもファクタリングは使えますか？",
    answer: "はい、使えます。2020年4月施行の改正民法（新民法466条）により、債権譲渡禁止特約があっても債権譲渡は法的に有効とされています。ただし、取引先に通知した場合にトラブルになる可能性があるため、2社間ファクタリングの利用が推奨されます。",
  },
  {
    question: "親事業者からファクタリングの利用を強制された場合はどうすべき？",
    answer: "親事業者が下請事業者にファクタリングの利用を強制することは、下請法の「不当な経済上の利益の提供要請」に該当する可能性があります。このような場合は、公正取引委員会の下請法相談窓口（電話：03-3581-3373）に相談してください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリングと下請法の関係｜下請代金の早期現金化は合法？",
  description: "下請代金のファクタリングは合法？下請法との関係を法的根拠から解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/subcontract-law/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "ファクタリングと下請法", item: "https://factoring-partner.pages.dev/articles/subcontract-law/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SubcontractLawPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "ファクタリングと下請法" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">法律知識</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングと下請法の関係
            <br className="hidden md:block" />
            下請代金の早期現金化は合法？
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            下請代金をファクタリングで早期現金化することに法的問題はないのか？下請法の基本と、ファクタリングとの関係を分かりやすく解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basics" className="hover:underline">1. 下請法の基本</a></li>
            <li><a href="#legal" className="hover:underline">2. ファクタリングと下請法の法的関係</a></li>
            <li><a href="#practical" className="hover:underline">3. 実務上のポイント</a></li>
            <li><a href="#cases" className="hover:underline">4. 具体的なケーススタディ</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        <section id="basics" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">下請法の基本</h2>
          <p className="mb-8 leading-relaxed text-text-light">まず、下請法の基本的な内容を理解しましょう。下請法を知ることで、ファクタリングとの関係がより明確になります。</p>
          <div className="space-y-4">
            {subcontractLawBasics.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="legal" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリングと下請法の法的関係</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリングと下請法の関係について、法的な観点から解説します。</p>
          <div className="space-y-4">
            {legalRelationship.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 font-bold text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="practical" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">実務上のポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">下請事業者がファクタリングを利用する際の実務上のポイントを解説します。</p>
          <div className="space-y-4">
            {practicalPoints.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">具体的なケーススタディ</h2>
          <p className="mb-8 leading-relaxed text-text-light">下請事業者がファクタリングを活用した具体的なケースを紹介します。</p>
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-4 text-lg font-bold text-primary">ケース1：入金サイトが60日で運転資金が不足</h3>
              <div className="space-y-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">状況</p>
                  <p className="text-sm text-text-light">建設業の下請事業者。元請けからの入金サイトは60日（下請法の上限ギリギリ）。材料費・外注費の支払いが入金前に発生し、毎月の資金繰りが厳しい。</p>
                </div>
                <div className="rounded-lg bg-primary-light p-4">
                  <p className="mb-1 text-sm font-semibold text-primary">対応</p>
                  <p className="text-sm text-text-light">元請けへの売掛金を2社間ファクタリングで即日現金化。元請けには知られずに資金繰りを改善。手数料8%で、材料費の支払いを滞りなく行えるようになった。</p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                  <p className="text-sm text-text-light">入金サイトの問題を根本的に解決するため、並行して元請けに支払いサイトの短縮を交渉。結果的に45日に短縮され、ファクタリングの利用頻度も減少。</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-4 text-lg font-bold text-primary">ケース2：入金遅延が60日を超えている</h3>
              <div className="space-y-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">状況</p>
                  <p className="text-sm text-text-light">IT業の下請事業者。元請けからの入金が常に90日後で、下請法の60日ルールに違反している疑いがある。しかし、取引関係の悪化を恐れて直接指摘できない。</p>
                </div>
                <div className="rounded-lg bg-primary-light p-4">
                  <p className="mb-1 text-sm font-semibold text-primary">対応</p>
                  <p className="text-sm text-text-light">まず2社間ファクタリングで直近の資金繰りを改善。同時に、公正取引委員会の下請法相談窓口に匿名で相談。公取委から元請けに対して行政指導が行われた。</p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                  <p className="text-sm text-text-light">元請けの入金サイトが60日以内に改善され、下請法に準拠した取引に是正された。資金繰りが安定し、ファクタリングの利用も不要になった。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">相談窓口</h2>
          <p className="mb-4 leading-relaxed text-text-light">下請法に関する疑問や問題がある場合は、以下の窓口に相談できます。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">公正取引委員会</strong>：下請法の相談・申告窓口。匿名での相談も可能です</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">中小企業庁</strong>：下請かけこみ寺（電話：0120-418-618）で下請取引の相談に対応</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">弁護士</strong>：具体的な法的問題については弁護士への相談をおすすめします</span></li>
            </ul>
          </div>
        </section>

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

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/is-it-legal/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングは合法？</p>
              <p className="mt-1 text-sm text-text-light">違法性の疑問を法的根拠から解説</p>
            </Link>
            <Link href="/articles/legal-basis/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングの法的根拠</p>
              <p className="mt-1 text-sm text-text-light">民法466条の債権譲渡を解説</p>
            </Link>
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">おすすめ5選と活用事例</p>
            </Link>
            <Link href="/articles/contract-checklist/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">契約時のチェックリスト</p>
              <p className="mt-1 text-sm text-text-light">見落としがちな契約条項を確認</p>
            </Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">安心して利用できるファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            法律に準拠した安全なファクタリング会社を手数料・実績で比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
