import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "保証型ファクタリングとは？買取型との違い・手数料・活用シーン",
  description:
    "保証型ファクタリングの仕組みを徹底解説。買取型ファクタリングとの違い、保証料の相場、活用シーン（取引先の倒産リスク対策）、メリット・デメリット、おすすめの事業者を紹介。売掛金の未回収リスクに備えたい経営者必見。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/guarantee-type/",
  },
  openGraph: {
    title: "保証型ファクタリングとは？買取型との違い・手数料・活用シーン",
    description: "保証型ファクタリングの仕組み・手数料・活用シーンを解説。買取型との違いも紹介。",
    url: "https://factoring-partner.pages.dev/articles/guarantee-type/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const comparisonItems = [
  { label: "目的", guarantee: "売掛金の未回収リスクの保証", purchase: "売掛金の早期資金化" },
  { label: "資金化タイミング", guarantee: "倒産時に保証金を受け取る", purchase: "即日〜数日で買取代金を受け取る" },
  { label: "コスト", guarantee: "保証料1%〜5%程度", purchase: "手数料2%〜20%程度" },
  { label: "売掛先の通知", guarantee: "不要（売掛先に知られない）", purchase: "2社間は不要、3社間は必要" },
  { label: "利用シーン", guarantee: "倒産リスクが心配な場合", purchase: "すぐに現金が必要な場合" },
  { label: "売掛金の所有権", guarantee: "利用者が保持", purchase: "ファクタリング会社に移転" },
];

const useCases = [
  {
    title: "新規取引先との取引開始時",
    description: "初めて取引する企業の信用力が不明な場合に、保証型ファクタリングを利用して倒産リスクに備えます。信用調査の代わりとしても活用でき、保証審査が通れば取引先の信用力にお墨付きを得られます。",
  },
  {
    title: "大口取引先への依存度が高い場合",
    description: "売上の多くを占める大口取引先が倒産すると経営に甚大な影響を及ぼします。保証型ファクタリングで大口取引先の売掛金を保証しておくことで、万が一の倒産時にも事業を継続できます。",
  },
  {
    title: "取引先の財務状況が悪化している場合",
    description: "取引先の支払い遅延が増えている、業界全体が不況に陥っているなどの状況で、倒産リスクに備えて保証をかけておきます。ただし、すでに経営危機が表面化している取引先は保証審査に通らない場合があります。",
  },
  {
    title: "海外取引（国際ファクタリング）",
    description: "海外の取引先は国内企業以上に信用調査が困難です。国際ファクタリングでは保証型のサービスが多く、輸出先の倒産リスクに備えることができます。",
  },
];

const faqs = [
  {
    question: "保証型ファクタリングとは何ですか？",
    answer: "保証型ファクタリングは、売掛先（取引先）が倒産などで売掛金を支払えなくなった場合に、ファクタリング会社が保証金を支払ってくれるサービスです。売掛金の早期資金化が目的の買取型ファクタリングとは異なり、未回収リスクへの保険的な役割を果たします。保証料は1%〜5%程度で、取引信用保険に似たサービスです。",
  },
  {
    question: "保証型ファクタリングの保証料はどのくらいですか？",
    answer: "保証料は売掛金額の1%〜5%程度が相場です。売掛先の信用力が高いほど保証料は安くなります。上場企業や大手法人が売掛先の場合は1%程度、中小企業の場合は3%〜5%程度が目安です。保証料は売掛金の回収有無にかかわらず返金されません。",
  },
  {
    question: "保証型と取引信用保険の違いは何ですか？",
    answer: "保証型ファクタリングは特定の売掛先・特定の売掛金を選んで保証をかけられるのに対し、取引信用保険は取引先全体を包括的にカバーする保険です。保証型は少数の取引先に絞って利用でき、保証料も個別に設定されます。取引先が少ない場合は保証型、取引先が多い場合は取引信用保険が効率的です。",
  },
  {
    question: "保証型ファクタリングを利用できないケースはありますか？",
    answer: "売掛先がすでに経営破綻している、または破綻が明らかな場合は保証審査に通りません。また、個人の売掛先や設立間もない企業は保証対象外となるケースがあります。保証審査は売掛先の信用力をもとに行われるため、信用力が低い売掛先は保証を受けられない場合があります。",
  },
  {
    question: "保証型と買取型を併用することはできますか？",
    answer: "はい、併用は可能です。例えば、大口取引先の売掛金には保証型ファクタリングで倒産リスクに備え、急ぎの資金調達には別の売掛金で買取型ファクタリングを利用するという使い分けができます。それぞれ目的が異なるサービスなので、状況に応じて使い分けましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "保証型ファクタリングとは？買取型との違い・手数料・活用シーン",
  description: "保証型ファクタリングの仕組み・手数料・活用シーンを解説。買取型との違いも紹介。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/guarantee-type/" },
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
    { "@type": "ListItem", position: 3, name: "保証型ファクタリング", item: "https://factoring-partner.pages.dev/articles/guarantee-type/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function GuaranteeTypePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "保証型ファクタリング" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">知識ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            保証型ファクタリングとは？
            <br className="hidden md:block" />
            買取型との違い・手数料・活用シーン
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            売掛先の倒産リスクに備える保証型ファクタリング。買取型との違い、保証料の相場、活用シーンを解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#what-is" className="hover:underline">1. 保証型ファクタリングとは</a></li>
            <li><a href="#comparison" className="hover:underline">2. 買取型との比較表</a></li>
            <li><a href="#use-cases" className="hover:underline">3. 活用シーン4選</a></li>
            <li><a href="#flow" className="hover:underline">4. 利用の流れ</a></li>
            <li><a href="#caution" className="hover:underline">5. 注意点</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        <section id="what-is" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">保証型ファクタリングとは</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            保証型ファクタリングは、売掛先が倒産や経営破綻によって売掛金を支払えなくなった場合に、ファクタリング会社が保証金を支払うサービスです。<strong className="text-text-main">売掛金の早期資金化ではなく、未回収リスクへの備え</strong>が目的であり、いわば「売掛金の保険」です。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-3 font-bold text-primary">保証型の仕組み</h3>
            <div className="space-y-2 text-sm text-text-light">
              <p>1. 利用者がファクタリング会社に保証を申し込み（売掛先・金額を指定）</p>
              <p>2. ファクタリング会社が売掛先の信用調査を実施</p>
              <p>3. 保証審査を通過すると保証契約を締結し、利用者は保証料を支払う</p>
              <p>4. 売掛先が正常に支払えば、保証は利用されず終了（保証料は返金されない）</p>
              <p>5. 売掛先が倒産した場合、ファクタリング会社が保証金（売掛金の一定割合）を支払い</p>
            </div>
          </div>
        </section>

        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">買取型との比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-left">保証型</th>
                  <th className="border border-primary p-3 text-left">買取型</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, i) => (
                  <tr key={item.label} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}>
                    <td className="border border-border p-3 font-semibold">{item.label}</td>
                    <td className="border border-border p-3">{item.guarantee}</td>
                    <td className="border border-border p-3">{item.purchase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="use-cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">活用シーン4選</h2>
          <div className="space-y-4">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用の流れ</h2>
          <div className="space-y-4">
            {["保証の申し込み（売掛先・保証希望額を伝える）", "ファクタリング会社が売掛先の信用調査を実施", "保証条件の提示（保証限度額・保証料率）", "保証契約の締結・保証料の支払い", "通常通り取引を継続（保証は裏で機能）", "売掛先倒産時→保証金の請求・受取"].map((step, i) => (
              <div key={step} className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">{i + 1}</span>
                <p className="text-sm leading-relaxed text-text-light">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 保証型の会計処理 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">保証型ファクタリングの会計処理</h2>
          <p className="mb-6 leading-relaxed text-text-light">保証型ファクタリングの保証料の会計処理について解説します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">保証料の仕訳</h3>
              <div className="mb-3 grid gap-2 md:grid-cols-2">
                <div className="rounded bg-section-bg p-3">
                  <p className="text-xs font-semibold text-text-light">借方</p>
                  <p className="mt-1 text-sm font-semibold text-text-main">支払保証料 50,000円</p>
                </div>
                <div className="rounded bg-section-bg p-3">
                  <p className="text-xs font-semibold text-text-light">貸方</p>
                  <p className="mt-1 text-sm font-semibold text-text-main">普通預金 50,000円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">保証料は「支払保証料」として営業外費用に計上します。保証期間が決算期をまたぐ場合は、期間按分して前払費用として処理することもあります。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">保証金受取時の仕訳（売掛先倒産時）</h3>
              <div className="mb-3 grid gap-2 md:grid-cols-2">
                <div className="rounded bg-section-bg p-3">
                  <p className="text-xs font-semibold text-text-light">借方</p>
                  <p className="mt-1 text-sm font-semibold text-text-main">普通預金 1,000,000円</p>
                </div>
                <div className="rounded bg-section-bg p-3">
                  <p className="text-xs font-semibold text-text-light">貸方</p>
                  <p className="mt-1 text-sm font-semibold text-text-main">売掛金 1,000,000円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">売掛先が倒産し保証金が支払われた場合、売掛金の回収として処理します。保証限度額が売掛金の100%未満の場合、差額は貸倒損失として計上します。</p>
            </div>
          </div>
        </section>

        {/* ── 保証型と取引信用保険の比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">保証型ファクタリングと取引信用保険の比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-left">保証型ファクタリング</th>
                  <th className="border border-primary p-3 text-left">取引信用保険</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">対象</td>
                  <td className="border border-border p-3">特定の売掛先・売掛金を選択</td>
                  <td className="border border-border p-3">取引先全体を包括的にカバー</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">コスト</td>
                  <td className="border border-border p-3">売掛金額の1%〜5%</td>
                  <td className="border border-border p-3">年間売上の0.1%〜0.5%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">保証範囲</td>
                  <td className="border border-border p-3">倒産・法的整理</td>
                  <td className="border border-border p-3">倒産・法的整理・支払い遅延</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">最低契約金額</td>
                  <td className="border border-border p-3">少額から可能</td>
                  <td className="border border-border p-3">年間保険料の最低額あり</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">向いている企業</td>
                  <td className="border border-border p-3">特定の取引先のリスクが心配</td>
                  <td className="border border-border p-3">多数の取引先がある</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 導入を検討すべきタイミング ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">保証型ファクタリングの導入を検討すべきタイミング</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-2 font-bold text-secondary">大口取引先との取引が増えたとき</h3>
              <p className="text-sm leading-relaxed text-text-light">売上の30%以上を占める大口取引先がいる場合、その取引先の倒産は自社にとって致命的です。保証型ファクタリングで倒産リスクをヘッジしましょう。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-2 font-bold text-secondary">新規取引先の信用力が不明なとき</h3>
              <p className="text-sm leading-relaxed text-text-light">初めて取引する企業の信用力が分からない場合、保証型ファクタリングの審査を信用調査の代わりに活用できます。保証審査が通れば、一定の信用力があると判断できます。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-2 font-bold text-secondary">業界全体が不況に陥っているとき</h3>
              <p className="text-sm leading-relaxed text-text-light">取引先の業界全体が不況に陥っている場合、連鎖倒産のリスクが高まります。不況期こそ保証型ファクタリングの価値が高まります。</p>
            </div>
          </div>
        </section>

        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">保証料は売掛金回収の有無にかかわらず返金されない</h3>
              <p className="text-sm leading-relaxed text-text-light">保証料は保険料と同じ性質であり、売掛金が正常に回収できた場合でも返金されません。コストとして予算に組み込んでおく必要があります。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">保証限度額は売掛金の100%とは限らない</h3>
              <p className="text-sm leading-relaxed text-text-light">保証限度額は売掛金額の80%〜100%に設定されることが一般的です。100%保証でない場合、残りの部分は利用者の自己負担となります。契約前に保証率を確認してください。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">すでに経営危機の取引先は保証審査に通らない</h3>
              <p className="text-sm leading-relaxed text-text-light">保証型ファクタリングは予防的に利用するものです。売掛先の倒産が目前に迫ってから申し込んでも、保証審査に通りません。取引先の経営が安定しているうちに検討しましょう。</p>
            </div>
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
            <Link href="/articles/bankruptcy-risk/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">売掛先の倒産リスク</p>
              <p className="mt-1 text-sm text-text-light">償還請求権とファクタリングの安全性</p>
            </Link>
            <Link href="/articles/what-is-factoring/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングとは</p>
              <p className="mt-1 text-sm text-text-light">基本的な仕組みを解説</p>
            </Link>
            <Link href="/articles/receivables-management/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">売掛金管理の方法</p>
              <p className="mt-1 text-sm text-text-light">未回収リスクを減らす管理術</p>
            </Link>
            <Link href="/articles/international/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">国際ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">海外取引の売掛金保証</p>
            </Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">ファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">保証型・買取型に対応したファクタリング会社を手数料・サービス内容で比較できます。</p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
