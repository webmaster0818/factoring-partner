import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "初めてのファクタリング完全ガイド｜超初心者向けに一から解説",
  description:
    "ファクタリングを初めて利用する方向けの完全ガイド。仕組み・種類・メリット・デメリット・手数料相場・必要書類・利用の流れ・会社の選び方を超初心者にも分かるように一から丁寧に解説します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/beginners-guide/",
  },
  openGraph: {
    title: "初めてのファクタリング完全ガイド｜超初心者向けに一から解説",
    description: "ファクタリング初心者向け完全ガイド。仕組み・種類・手数料・選び方を徹底解説。",
    url: "https://factoring-partner.pages.dev/articles/beginners-guide/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicConcepts = [
  {
    title: "ファクタリングとは？",
    description:
      "ファクタリングとは、企業が保有する売掛金（まだ入金されていない代金の請求権）をファクタリング会社に売却して、入金予定日よりも早く現金を受け取る資金調達方法です。借入れではなく売掛金の売買であるため、負債が増えないのが大きな特徴です。",
  },
  {
    title: "なぜファクタリングが必要なの？",
    description:
      "企業間の取引では、商品やサービスを提供してもすぐに代金がもらえるわけではありません。請求書を発行してから30日〜120日後に入金されるのが一般的です。その間にも人件費・仕入れ費・家賃などの支払いは発生するため、手元の現金が不足することがあります。ファクタリングはこの「入金までの時間差」を解消するための手段です。",
  },
  {
    title: "ファクタリングは合法？",
    description:
      "はい、ファクタリングは完全に合法です。民法466条で認められた「債権譲渡」に基づく取引であり、法律上何ら問題ありません。また、金融庁もファクタリングを正当な資金調達手段として認めています。ただし、ファクタリングを装った違法な貸付を行う悪徳業者には注意が必要です。",
  },
];

const factoringTypes = [
  {
    title: "2社間ファクタリング",
    parties: "利用者 ⇄ ファクタリング会社",
    description: "売掛先（取引先）に通知せずにファクタリングを利用する方式です。利用者とファクタリング会社の2者間で契約します。",
    merits: ["取引先にファクタリングの利用が知られない", "手続きが早い（最短即日）", "取引先の協力が不要"],
    demerits: ["手数料が高い（5%〜18%）", "ファクタリング会社のリスクが高いため審査がやや厳しい"],
  },
  {
    title: "3社間ファクタリング",
    parties: "利用者 ⇄ ファクタリング会社 ⇄ 売掛先",
    description: "売掛先（取引先）にファクタリングの利用を通知し、3者間で契約する方式です。売掛先から直接ファクタリング会社に入金されます。",
    merits: ["手数料が安い（1%〜9%）", "審査が通りやすい", "回収リスクがファクタリング会社に移転"],
    demerits: ["取引先に利用が知られる", "取引先の同意が必要", "手続きに時間がかかることがある"],
  },
];

const meritsDemerits = {
  merits: [
    { title: "最短即日で資金調達できる", description: "銀行融資が2〜4週間かかるのに対し、ファクタリングは最短即日〜数日で入金されます。" },
    { title: "担保・保証人不要", description: "不動産担保や連帯保証人は不要。売掛金そのものが「担保」の代わりになります。" },
    { title: "赤字決算・税金滞納でも利用可能", description: "利用者の信用力よりも売掛先の信用力を重視するため、赤字や税金滞納があっても利用できます。" },
    { title: "負債が増えない", description: "借入れではなく売掛金の売買なので、貸借対照表上の負債が増えません。" },
    { title: "信用情報に影響しない", description: "銀行融資とは異なり、信用情報機関に記録されないため、将来の融資審査に影響しません。" },
  ],
  demerits: [
    { title: "手数料がかかる", description: "2社間で5%〜18%、3社間で1%〜9%の手数料が発生します。銀行融資の金利と比べると割高です。" },
    { title: "売掛金の全額は受け取れない", description: "手数料が差し引かれるため、売掛金の額面全額を受け取ることはできません。" },
    { title: "売掛金がないと利用できない", description: "ファクタリングは売掛金を売却する仕組みなので、売掛金（請求書）が存在しないと利用できません。" },
  ],
};

const requiredDocuments = [
  { document: "身分証明書", detail: "代表者の免許証やマイナンバーカードなど" },
  { document: "請求書", detail: "売掛先に発行した請求書のコピー" },
  { document: "通帳コピー", detail: "売掛先からの入金履歴がある直近3ヶ月分" },
  { document: "登記簿謄本（法人の場合）", detail: "会社によっては不要" },
  { document: "決算書・確定申告書", detail: "直近1〜2期分。会社によっては不要" },
];

const faqs = [
  {
    question: "ファクタリングは誰でも利用できますか？",
    answer:
      "法人・個人事業主のどちらでも利用可能です。ただし、売掛金（請求書）を持っていることが条件です。業種や事業規模に制限はほとんどなく、建設業・製造業・IT業・医療業・サービス業など幅広い業種で利用されています。開業直後でも売掛金があれば利用可能です。",
  },
  {
    question: "ファクタリングと借入れの違いは？",
    answer:
      "ファクタリングは売掛金の「売買」であり、借入れ（融資）ではありません。そのため、①負債が増えない②利息ではなく手数料がかかる③返済義務がない（売掛金の売却なので）④信用情報に記録されない、という違いがあります。法的にはファクタリングは「債権譲渡」、借入れは「金銭消費貸借契約」です。",
  },
  {
    question: "初めてでも即日入金は可能ですか？",
    answer:
      "はい、初めてでも即日入金に対応している会社は多くあります。ただし、初回は審査に時間がかかることがあるため、午前中（10時まで）に申し込みと書類提出を完了させることが重要です。必要書類を事前に準備しておき、オンライン対応の会社を選ぶとスムーズです。",
  },
  {
    question: "悪徳業者の見分け方は？",
    answer:
      "悪徳業者の特徴は、①手数料が極端に安い（1%未満）をうたう②契約書を交付しない③会社の所在地が確認できない④「返済」を求めてくる（ファクタリングなら返済はない）⑤極端な営業電話やDMが多い、などです。必ず契約書を確認し、法人番号の実在確認、事務所の所在確認を行いましょう。",
  },
  {
    question: "ファクタリングを利用すると取引先にバレますか？",
    answer:
      "2社間ファクタリングを選択すれば、取引先（売掛先）にファクタリングの利用が知られることはありません。取引先への通知は一切不要です。3社間ファクタリングの場合は取引先の同意が必要なため、知られることになります。取引先との関係を重視する場合は2社間を選びましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "初めてのファクタリング完全ガイド｜超初心者向けに一から解説",
  description: "ファクタリング初心者向け完全ガイド。仕組み・種類・手数料・選び方を徹底解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/beginners-guide/" },
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
    { "@type": "ListItem", position: 3, name: "初めてのファクタリング完全ガイド", item: "https://factoring-partner.pages.dev/articles/beginners-guide/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function BeginnersGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "初めてのファクタリング完全ガイド" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">初心者ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            初めてのファクタリング完全ガイド
            <br className="hidden md:block" />
            超初心者向けに一から解説
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングって何？仕組みは？手数料は？リスクは？初めて利用を検討する方に向けて、基礎知識から会社の選び方まで一から丁寧に解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basics" className="hover:underline">1. ファクタリングの基本</a></li>
            <li><a href="#types" className="hover:underline">2. 2社間と3社間の違い</a></li>
            <li><a href="#merits-demerits" className="hover:underline">3. メリット・デメリット</a></li>
            <li><a href="#fee" className="hover:underline">4. 手数料の相場</a></li>
            <li><a href="#documents" className="hover:underline">5. 必要書類</a></li>
            <li><a href="#flow" className="hover:underline">6. 利用の流れ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">7. 会社の選び方</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本 ─── */}
        <section id="basics" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリングの基本</h2>
          <p className="mb-8 leading-relaxed text-text-light">まずはファクタリングの基本的な概念を理解しましょう。難しい言葉はできるだけ避けて、分かりやすく解説します。</p>
          <div className="space-y-4">
            {basicConcepts.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2社間と3社間 ─── */}
        <section id="types" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">2社間と3社間の違い</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリングには「2社間」と「3社間」の2つの方式があります。それぞれの違いを理解して、自分に合った方式を選びましょう。</p>
          <div className="space-y-6">
            {factoringTypes.map((type) => (
              <div key={type.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-2 text-lg font-bold text-primary">{type.title}</h3>
                <p className="mb-2 text-sm text-accent font-medium">{type.parties}</p>
                <p className="mb-4 leading-relaxed text-text-light">{type.description}</p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="mb-2 text-sm font-semibold text-secondary">メリット</p>
                    <ul className="space-y-1 text-sm text-text-light">
                      {type.merits.map((m) => (
                        <li key={m} className="flex items-start gap-2">
                          <span className="mt-0.5 text-secondary">&#10003;</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-orange-50 p-4">
                    <p className="mb-2 text-sm font-semibold text-accent">デメリット</p>
                    <ul className="space-y-1 text-sm text-text-light">
                      {type.demerits.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span className="mt-0.5 text-accent">&#9650;</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── メリット・デメリット ─── */}
        <section id="merits-demerits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">メリット・デメリット</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリングにはメリットとデメリットの両方があります。両方を正しく理解した上で、利用を検討しましょう。</p>

          <h3 className="mb-4 text-lg font-bold text-secondary">メリット</h3>
          <div className="mb-8 space-y-3">
            {meritsDemerits.merits.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
                <h4 className="mb-2 font-bold text-secondary">{item.title}</h4>
                <p className="text-sm text-text-light">{item.description}</p>
              </div>
            ))}
          </div>

          <h3 className="mb-4 text-lg font-bold text-accent">デメリット</h3>
          <div className="space-y-3">
            {meritsDemerits.demerits.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h4 className="mb-2 font-bold text-accent">{item.title}</h4>
                <p className="text-sm text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 手数料 ─── */}
        <section id="fee" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">手数料の相場</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリングの手数料は、方式（2社間・3社間）や売掛先の信用力によって変わります。相場を把握しておくことで、不当に高い手数料を回避できます。</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary px-4 py-3 text-left">方式</th>
                  <th className="border border-primary px-4 py-3 text-left">手数料相場</th>
                  <th className="border border-primary px-4 py-3 text-left">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border px-4 py-3 font-medium text-text-main">2社間ファクタリング</td>
                  <td className="border border-border px-4 py-3 text-text-light">5%〜18%</td>
                  <td className="border border-border px-4 py-3 text-text-light">取引先に知られない分、手数料が高い</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border px-4 py-3 font-medium text-text-main">3社間ファクタリング</td>
                  <td className="border border-border px-4 py-3 text-text-light">1%〜9%</td>
                  <td className="border border-border px-4 py-3 text-text-light">手数料が安い分、取引先への通知が必要</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border px-4 py-3 font-medium text-text-main">診療報酬ファクタリング</td>
                  <td className="border border-border px-4 py-3 text-text-light">1%〜5%</td>
                  <td className="border border-border px-4 py-3 text-text-light">売掛先が公的機関のため特に安い</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-lg border border-accent/30 bg-orange-50 p-5">
            <p className="text-sm leading-relaxed text-text-light">
              <strong className="text-accent">注意：</strong>手数料が1%未満など極端に安い場合は、悪徳業者の可能性があります。また、手数料率以外に事務手数料・登記費用・振込手数料が別途かかる場合があるため、「総額でいくら差し引かれるか」を必ず確認しましょう。
            </p>
          </div>
        </section>

        {/* ── 必要書類 ─── */}
        <section id="documents" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">必要書類</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリングの申し込みに必要な書類を紹介します。会社によって異なりますが、基本的な書類は以下の通りです。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary px-4 py-3 text-left">書類</th>
                  <th className="border border-primary px-4 py-3 text-left">詳細</th>
                </tr>
              </thead>
              <tbody>
                {requiredDocuments.map((doc, i) => (
                  <tr key={doc.document} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}>
                    <td className="border border-border px-4 py-3 font-medium text-text-main">{doc.document}</td>
                    <td className="border border-border px-4 py-3 text-text-light">{doc.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            QuQuMoやラボルなどのオンライン完結型サービスでは、請求書と通帳コピーの2点のみで利用可能です。書類の少ない会社を選ぶことで、手続きの手間を減らせます。
          </p>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用の流れ</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリングの申し込みから入金までの流れを、ステップごとに解説します。</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">問い合わせ・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">電話・Web・LINEなどでファクタリング会社に問い合わせ。売掛金の金額、売掛先、希望入金日を伝えます。複数社に問い合わせて見積もりを比較するのがおすすめです。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">身分証明書・請求書・通帳コピーなどの書類を提出します。メール・アップロード・FAXなどで送付可能。事前に準備しておくとスムーズです。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">審査</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">ファクタリング会社が売掛先の信用力、売掛金の内容などを審査します。審査時間は最短30分〜数時間。売掛先が大手企業や官公庁の場合は審査が通りやすいです。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">4</span>
              <div>
                <h3 className="font-bold text-text-main">見積もり確認・契約</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">手数料率、差引額、振込額が記載された見積もりを確認。納得したら契約を締結します。オンラインで電子契約できる会社も多いです。見積もり段階でキャンセルすることも可能です。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">5</span>
              <div>
                <h3 className="font-bold text-text-main">入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">契約後、手数料を差し引いた金額が指定口座に振り込まれます。最短即日〜翌営業日。2社間の場合、後日売掛先からの入金をファクタリング会社に送金します。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 会社の選び方 ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">会社の選び方</h2>
          <p className="mb-8 leading-relaxed text-text-light">初めてファクタリングを利用する方向けに、安心して利用できる会社の選び方を解説します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">複数社から見積もりを取る</h3>
              <p className="text-sm leading-relaxed text-text-light">必ず3社以上から見積もりを取り、手数料を比較しましょう。同じ売掛金でも会社によって手数料が5%以上異なることがあります。見積もりは無料の会社がほとんどです。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">会社の信頼性を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">法人番号の実在確認、事務所の所在確認、口コミ・評判の確認を行いましょう。設立年数が長い会社、買取実績が公開されている会社は信頼性が高いです。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">契約書の内容を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">契約書を必ず交付してもらい、手数料率・償還請求権の有無・その他費用を確認しましょう。契約書を交付しない会社は絶対に利用しないでください。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">実績のある大手から始める</h3>
              <p className="text-sm leading-relaxed text-text-light">初めての利用は、ビートレーディング、日本中小企業金融サポート機構、OLTAなど実績のある大手から始めるのが安心です。大手は審査ノウハウが豊富で、トラブルのリスクも低いです。</p>
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
            <Link href="/articles/what-is-factoring/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングとは？</p>
              <p className="mt-1 text-sm text-text-light">仕組み・種類・メリットを基本から解説</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツも紹介</p>
            </Link>
            <Link href="/articles/required-documents/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングの必要書類</p>
              <p className="mt-1 text-sm text-text-light">準備すべき書類を一覧で紹介</p>
            </Link>
            <Link href="/articles/is-it-legal/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングは合法？</p>
              <p className="mt-1 text-sm text-text-light">違法性の疑問を法的根拠から解説</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">初めてのファクタリング会社選びをサポート</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            初心者でも安心して利用できるファクタリング会社を手数料・実績・口コミで徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
