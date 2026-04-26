import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "国際ファクタリングとは？貿易・輸出入の売掛金を現金化する方法",
  description:
    "国際ファクタリングの仕組みを徹底解説。貿易取引（輸出入）の売掛金を現金化する方法、信用状（L/C）との違い、メリット・デメリット、手数料相場、利用の流れを詳しく紹介。海外取引の代金回収リスクに悩む企業必見です。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/international/",
  },
  openGraph: {
    title: "国際ファクタリングとは？貿易・輸出入の売掛金を現金化する方法",
    description: "国際ファクタリングの仕組み・手数料・L/Cとの違いを解説。海外取引の資金調達に。",
    url: "https://factoring-partner.pages.dev/articles/international/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const flowSteps = [
  { title: "輸出者が国内ファクタリング会社に申し込み", description: "輸出者（日本企業）が日本のファクタリング会社（輸出ファクター）に国際ファクタリングを申し込みます。輸入者（海外企業）の情報、取引内容、売掛金額を提出します。" },
  { title: "輸出ファクターが海外ファクターに信用調査を依頼", description: "日本のファクタリング会社が、輸入者の所在国にある提携ファクタリング会社（輸入ファクター）に、輸入者の信用調査を依頼します。" },
  { title: "信用調査の結果と保証限度額の提示", description: "輸入ファクターが輸入者の信用力を調査し、保証可能な限度額を提示します。これにより輸出者は輸入者の支払い能力を把握できます。" },
  { title: "商品の輸出・請求書の送付", description: "輸出者は通常通り商品を輸出し、輸入者に請求書を送付します。同時に、請求書のコピーを輸出ファクターにも送付します。" },
  { title: "輸出ファクターが代金を前払い（任意）", description: "輸出者の希望に応じて、輸出ファクターが売掛金の一部（通常80%程度）を前払いします。これにより輸出者は入金を待たずに資金化できます。" },
  { title: "輸入者が輸入ファクターに支払い", description: "輸入者は支払い期日に輸入ファクターに代金を支払います。輸入ファクターから輸出ファクターを通じて輸出者に残額が支払われます。" },
];

const vsLC = [
  { label: "手続きの簡便さ", international: "比較的シンプル", lc: "複雑（銀行間の手続き）" },
  { label: "コスト", international: "手数料1%〜3%程度", lc: "開設手数料+為替手数料等で2%〜5%" },
  { label: "信用調査", international: "輸入ファクターが実施", lc: "銀行が信用を補完" },
  { label: "支払い保証", international: "輸入ファクターが保証", lc: "発行銀行が保証" },
  { label: "資金化スピード", international: "前払い対応あり", lc: "書類到着後5〜10営業日" },
  { label: "向いている取引", international: "継続的な貿易取引", lc: "大口・新規の貿易取引" },
];

const faqs = [
  {
    question: "国際ファクタリングとは何ですか？",
    answer: "国際ファクタリングは、貿易取引（輸出入）における売掛金の回収保証と早期資金化を行うサービスです。輸出者の国のファクタリング会社（輸出ファクター）と輸入者の国のファクタリング会社（輸入ファクター）が連携し、海外取引の代金回収リスクを軽減します。国際的なファクタリング会社のネットワーク（FCI等）が基盤となっています。",
  },
  {
    question: "国際ファクタリングの手数料はどのくらいですか？",
    answer: "国際ファクタリングの手数料は売掛金額の1%〜3%程度が一般的です。これに加えて、前払いを利用する場合は前払い分に対する金利（年率2%〜5%程度）がかかります。信用状（L/C）と比較すると、手続きの簡便さを考慮するとコスト面でも競争力があります。",
  },
  {
    question: "信用状（L/C）と国際ファクタリングの違いは何ですか？",
    answer: "信用状（L/C）は銀行が支払いを保証する仕組みで、輸入者が銀行にL/Cの開設を依頼する必要があります。国際ファクタリングはファクタリング会社が保証する仕組みで、輸入者の手続き負担が少なく、継続的な取引に適しています。L/Cは大口取引や新規取引先向け、国際ファクタリングは継続取引向けに使い分けるのが一般的です。",
  },
  {
    question: "どのような企業が国際ファクタリングを利用していますか？",
    answer: "海外に商品を輸出している中小企業が主な利用者です。特に、L/Cの取得が困難な取引先との貿易や、送金ベース（D/A・D/P）で取引している企業に適しています。食品、繊維、機械部品、電子部品などの輸出企業での利用が多いです。",
  },
  {
    question: "国際ファクタリングを提供している日本の会社はどこですか？",
    answer: "日本では大手銀行系のファクタリング会社が国際ファクタリングを提供しています。みずほファクター、三菱UFJファクター、SMBCファイナンスサービスなどが代表的です。いずれもFCI（Factors Chain International）に加盟しており、世界各国のファクタリング会社と提携しています。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "国際ファクタリングとは？貿易・輸出入の売掛金を現金化する方法",
  description: "国際ファクタリングの仕組み・手数料・L/Cとの違いを解説。海外取引の資金調達に。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/international/" },
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
    { "@type": "ListItem", position: 3, name: "国際ファクタリング", item: "https://factoring-partner.pages.dev/articles/international/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function InternationalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "国際ファクタリング" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">知識ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            国際ファクタリングとは？
            <br className="hidden md:block" />
            貿易・輸出入の売掛金を現金化する方法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            海外取引の代金回収リスクと資金化の課題を解決する国際ファクタリングの仕組み・メリット・手数料を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#what-is" className="hover:underline">1. 国際ファクタリングとは</a></li>
            <li><a href="#flow" className="hover:underline">2. 利用の流れ</a></li>
            <li><a href="#vs-lc" className="hover:underline">3. 信用状（L/C）との比較</a></li>
            <li><a href="#merits" className="hover:underline">4. メリット・デメリット</a></li>
            <li><a href="#caution" className="hover:underline">5. 注意点</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        <section id="what-is" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">国際ファクタリングとは</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            国際ファクタリングは、貿易取引における海外バイヤー（輸入者）の<strong className="text-text-main">代金回収リスクの保証</strong>と<strong className="text-text-main">売掛金の早期資金化</strong>を提供するサービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            国内のファクタリングとは異なり、輸出者の国のファクタリング会社（輸出ファクター）と輸入者の国のファクタリング会社（輸入ファクター）の2社が連携して、国際取引の安全性を担保します。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-3 font-bold text-primary">国際ファクタリングの3つの機能</h3>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg bg-teal-50 p-4">
                <p className="font-semibold text-secondary">信用調査</p>
                <p className="mt-1 text-sm text-text-light">輸入者の信用力を現地のファクタリング会社が調査</p>
              </div>
              <div className="rounded-lg bg-teal-50 p-4">
                <p className="font-semibold text-secondary">代金回収保証</p>
                <p className="mt-1 text-sm text-text-light">輸入者が倒産しても保証限度額まで保証</p>
              </div>
              <div className="rounded-lg bg-teal-50 p-4">
                <p className="font-semibold text-secondary">早期資金化</p>
                <p className="mt-1 text-sm text-text-light">売掛金の80%程度を前払いで受け取り可能</p>
              </div>
            </div>
          </div>
        </section>

        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用の流れ</h2>
          <div className="space-y-4">
            {flowSteps.map((step, i) => (
              <div key={step.title} className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-text-main">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="vs-lc" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">信用状（L/C）との比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">項目</th>
                  <th className="border border-primary p-3 text-left">国際ファクタリング</th>
                  <th className="border border-primary p-3 text-left">信用状（L/C）</th>
                </tr>
              </thead>
              <tbody>
                {vsLC.map((item, i) => (
                  <tr key={item.label} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}>
                    <td className="border border-border p-3 font-semibold">{item.label}</td>
                    <td className="border border-border p-3">{item.international}</td>
                    <td className="border border-border p-3">{item.lc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">メリット・デメリット</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">海外バイヤーの信用リスクを軽減</h3>
              <p className="text-sm leading-relaxed text-text-light">輸入ファクターが輸入者の支払いを保証するため、海外取引の代金回収リスクが大幅に軽減されます。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">L/Cより手続きがシンプル</h3>
              <p className="text-sm leading-relaxed text-text-light">L/Cのような銀行間の複雑な手続きが不要で、書類のディスクレ（不一致）による支払い拒否のリスクもありません。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-3 font-bold text-accent">利用可能な国・地域が限定される</h3>
              <p className="text-sm leading-relaxed text-text-light">輸入ファクターが存在しない国・地域では国際ファクタリングを利用できません。主要先進国やアジアの主要国はカバーされていますが、発展途上国では対応していない場合があります。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-3 font-bold text-accent">少額取引にはコスト割高</h3>
              <p className="text-sm leading-relaxed text-text-light">国際ファクタリングは一定の手数料がかかるため、少額の取引ではコスト割合が高くなります。継続的な取引がある場合に最も効果的です。</p>
            </div>
          </div>
        </section>

        {/* ── 国際ファクタリングの活用事例 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">国際ファクタリングの活用事例</h2>
          <p className="mb-8 leading-relaxed text-text-light">国際ファクタリングを実際に活用した事例を紹介します。</p>
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">事例1：東南アジア向け食品輸出</h3>
              <p className="mb-4 text-xs text-text-light">業種：食品メーカー（中小法人）</p>
              <div className="space-y-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                  <p className="text-sm text-text-light">ベトナムの食品輸入業者との取引を拡大したいが、L/Cの開設に応じてもらえない。送金ベース（T/T後払い）での取引を求められているが、代金回収リスクが心配。</p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-secondary">解決策</p>
                  <p className="text-sm text-text-light">国際ファクタリングを利用。ベトナムの輸入ファクターが輸入者の信用調査を行い、保証限度額3,000万円を設定。これにより送金ベースでも安全に取引ができるようになった。</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">事例2：欧州向け電子部品輸出</h3>
              <p className="mb-4 text-xs text-text-light">業種：電子部品メーカー（中堅法人）</p>
              <div className="space-y-3">
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                  <p className="text-sm text-text-light">ドイツの取引先との支払い条件がD/A 60日。出荷から入金まで3ヶ月以上かかり、その間の運転資金が不足。</p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-secondary">解決策</p>
                  <p className="text-sm text-text-light">国際ファクタリングの前払い機能を利用。出荷後に売掛金の80%を前払いで受け取り、残り20%は輸入者の支払い後に受領。運転資金の不足を解消し、受注を増やすことができた。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FCI（国際ファクタリング連盟）について ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">FCI（国際ファクタリング連盟）について</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            国際ファクタリングは、FCI（Factors Chain International）という国際的なファクタリング会社のネットワーク組織が基盤となっています。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">設立</strong>：1968年設立。本部はオランダ・アムステルダム</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">加盟会社</strong>：世界90カ国以上、400社以上のファクタリング会社が加盟</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">取引ルール</strong>：加盟会社間で統一的な取引ルール（GRIF：General Rules for International Factoring）を策定</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">日本の加盟会社</strong>：みずほファクター、三菱UFJファクター、SMBCファイナンスサービスなどが加盟</span></li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            FCI加盟会社間では、統一的なルールに基づいて国際ファクタリングが行われるため、安全性と信頼性が担保されています。国際ファクタリングを利用する際は、FCI加盟のファクタリング会社を選ぶことをおすすめします。
          </p>
        </section>

        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">為替リスクは別途管理が必要</h3>
              <p className="text-sm leading-relaxed text-text-light">国際ファクタリングは代金回収リスクを保証しますが、為替変動リスクはカバーされません。為替予約やオプションなどの為替ヘッジ手段を別途検討してください。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">保証限度額には上限がある</h3>
              <p className="text-sm leading-relaxed text-text-light">輸入ファクターが設定する保証限度額には上限があり、取引額のすべてが保証されるわけではありません。保証限度額を超える部分は自己リスクとなります。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">国内ファクタリングとは仕組みが異なる</h3>
              <p className="text-sm leading-relaxed text-text-light">国際ファクタリングは国内のファクタリングとは仕組みや手数料体系が大きく異なります。国内で利用しているファクタリング会社が国際ファクタリングに対応しているとは限らないため、専門の会社に相談してください。</p>
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
            <Link href="/articles/what-is-factoring/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングとは</p>
              <p className="mt-1 text-sm text-text-light">基本的な仕組みを解説</p>
            </Link>
            <Link href="/articles/guarantee-type/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">保証型ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">未回収リスクの保証サービス</p>
            </Link>
            <Link href="/articles/reverse/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">リバースファクタリング</p>
              <p className="mt-1 text-sm text-text-light">買掛金の早期支払いで取引先を支援</p>
            </Link>
            <Link href="/articles/large-amount/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">高額ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">大口案件に対応する会社</p>
            </Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">国内ファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">国内取引の売掛金を即日資金化。おすすめ会社を手数料・入金速度で比較できます。</p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
