import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "塗装・防水工事業向けファクタリング｜工事代金の売掛債権を早期現金化",
  description:
    "塗装・防水工事業向けファクタリングを徹底解説。元請からの入金サイトの長さ、材料費・足場費用の先行負担、天候による工期変動など業種特有の資金繰り課題と、ファクタリングの活用方法・おすすめ3社を紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/painting/",
  },
  openGraph: {
    title: "塗装・防水工事業向けファクタリング｜工事代金の売掛債権を早期現金化",
    description: "塗装・防水工事業の資金繰り課題とファクタリング活用法。工事代金の早期現金化を解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/painting/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "元請からの入金サイトが長い",
    description:
      "塗装・防水工事は元請（建設会社・リフォーム会社・管理会社など）からの下請として受注するケースが多く、工事完了後の締め日から支払日までの期間（入金サイト）が長くなりがちです。工事の完了から実際の入金まで時間がかかるため、その間の運転資金を自己資金で賄う必要があります。",
  },
  {
    title: "材料費・足場費用の先行負担",
    description:
      "塗料・シーリング材・防水材などの材料費は着工前に仕入れる必要があります。さらに外壁塗装や屋上防水では足場の設置費用も工事の初期段階で発生します。入金前に大きな支出が先行するため、複数の現場を並行して抱えると手元資金が逼迫しやすくなります。",
  },
  {
    title: "天候による工期変動",
    description:
      "塗装・防水工事は雨天や強風、低温時には施工品質を確保できないため作業を中断せざるを得ません。天候不良が続くと工期が後ろ倒しになり、完工・請求のタイミングも遅れます。請求が遅れればその分入金も遅れるため、支払いスケジュールとのずれが生じやすい業種です。",
  },
  {
    title: "職人の人件費・外注費の先払い",
    description:
      "職人の人件費や協力会社への外注費は、元請からの入金を待たずに毎月支払う必要があります。特に繁忙期に案件が集中すると、人件費・外注費の支払いが先行して積み上がり、キャッシュフローが厳しくなることがあります。",
  },
];

const factoringTypes = [
  {
    title: "2社間ファクタリング",
    description:
      "利用者とファクタリング会社の2社間で契約する方式です。元請（売掛先）への通知や承諾が不要なため、取引先に知られずに工事代金の売掛債権を現金化できます。今後の受注関係に配慮したい下請業者に選ばれやすい方式で、最短即日の入金に対応する会社もあります。",
    merit: "元請に知られない・最短即日入金・手続きがスピーディー",
    demerit: "手数料が3社間より高い（8%〜18%が目安）",
  },
  {
    title: "3社間ファクタリング",
    description:
      "利用者・ファクタリング会社・売掛先（元請）の3社で契約する方式です。元請の承諾が必要になりますが、ファクタリング会社の回収リスクが下がるため手数料は低く抑えられます。元請との関係が良好で、承諾を得られる場合には有力な選択肢です。",
    merit: "手数料が安い（1%〜9%が目安）・審査が通りやすい",
    demerit: "元請への通知・承諾が必要・入金まで日数がかかることがある",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "業界最大手級。建設関連業種の利用実績が豊富。2社間・3社間対応。法人・個人事業主対応。最短2時間入金。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "買取実績が豊富で高額案件にも対応。元請の信用力を重視する審査のため、下請の塗装・防水工事業者でも相談しやすい。全国対応・来店不要。",
  },
  {
    name: "日本中小企業金融サポート機構",
    features: "一般社団法人が運営する非営利型。経済産業大臣認定。法人・個人事業主対応。最短即日入金。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit: "非営利法人のため手数料が業界最安水準。認定機関の安心感。材料費・足場費用の先行負担で資金繰りが厳しい時期の相談先として有力。",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。少額（30万円〜）対応。オンライン完結型。個人事業主にも対応。最短即日入金。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit: "審査通過率が高く、開業間もない塗装店や一人親方でも利用しやすい。小規模な塗装・防水工事の少額売掛金にも対応。",
  },
];

const useScenes = [
  {
    title: "シーン1：足場・材料費の先行支払い",
    problem: "大型の外壁塗装工事を受注したが、着工前に足場の設置費用と塗料の仕入れ費用を支払う必要がある。元請からの入金は工事完了後のため、手持ち資金だけでは複数現場を回せない。",
    solution: "完了済みの別現場の工事代金（発行済みの請求書に基づく売掛債権）をファクタリングで早期現金化し、足場費用・材料費の支払いに充てる、という活用が考えられます。",
    result: "入金サイトを待たずに着工資金を確保できるため、受注機会を逃さずに複数現場を並行して進めやすくなります。",
  },
  {
    title: "シーン2：天候不良による工期遅延で入金がずれた",
    problem: "長雨で防水工事の工期が後ろ倒しになり、完工・請求のタイミングが翌月にずれ込んだ。一方で職人の人件費や外注費の支払日は変わらず到来する。",
    solution: "すでに完了して請求済みの他現場の売掛債権をファクタリングで現金化し、支払いと入金のずれを埋める、という活用が考えられます。",
    result: "借入ではなく保有債権の売却で資金化するため、負債を増やさずに一時的な資金ギャップに対応できます。",
  },
];

const faqs = [
  {
    question: "塗装・防水工事業のファクタリング手数料の相場は？",
    answer:
      "一般的な目安として、2社間ファクタリングで8%〜18%、3社間ファクタリングで1%〜9%程度です（会社により異なる目安）。手数料は売掛先（元請）の信用力、売掛金の金額、支払いサイトの長さなどによって変動します。複数社から見積もりを取って比較することをおすすめします。",
  },
  {
    question: "元請に知られずにファクタリングを利用できますか？",
    answer:
      "はい、2社間ファクタリングであれば元請（売掛先）への通知・承諾は不要のため、取引先に知られずに利用できます。今後の受注関係への影響を避けたい下請の塗装・防水工事業者には2社間が選ばれやすい方式です。手数料を抑えたい場合は、元請の承諾を得て3社間を利用する方法もあります。",
  },
  {
    question: "一人親方・個人事業主の塗装業でも利用できますか？",
    answer:
      "はい、個人事業主（一人親方）に対応しているファクタリング会社は多くあります。ファクタリングは利用者自身の規模や業歴よりも売掛先（元請）の信用力を重視して審査されるため、元請が建設会社や管理会社などの法人であれば、一人親方でも利用しやすいのが特徴です。少額（30万円程度〜）に対応する会社を選ぶとよいでしょう。",
  },
  {
    question: "天候不良で工期が延びて請求前の場合でも資金化できますか？",
    answer:
      "ファクタリングの対象は原則として、工事が完了し請求書を発行した後の確定した売掛債権です。請求前の案件そのものは対象外となるのが一般的ですが、完了済みの他現場の売掛債権を現金化して資金ギャップを埋める方法があります。なお、注文書（受注段階）での資金化に対応する会社も一部あります。",
  },
  {
    question: "建設業許可がなくてもファクタリングは利用できますか？",
    answer:
      "ファクタリングは売掛債権の売買契約であり、利用にあたって建設業許可の有無が直接の要件になるわけではありません。審査で重視されるのは売掛先の信用力と売掛債権の実在性です。なお、塗装工事業・防水工事業として一定規模の工事を請け負うには建設業許可が必要になる場合があるため、許可制度自体は別途確認が必要です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "塗装・防水工事業向けファクタリング｜工事代金の売掛債権を早期現金化",
  description: "塗装・防水工事業の資金繰り課題とファクタリング活用法。工事代金の早期現金化を解説。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/painting/" },
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
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://hyogo-shihoushoshi.jp/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://hyogo-shihoushoshi.jp/articles/" },
    { "@type": "ListItem", position: 3, name: "塗装・防水工事業向けファクタリング", item: "https://hyogo-shihoushoshi.jp/articles/painting/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function PaintingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "塗装・防水工事業向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種特化ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            塗装・防水工事業向けファクタリング
            <br className="hidden md:block" />
            工事代金の売掛債権を早期現金化
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            元請からの入金サイトの長さや材料費・足場費用の先行負担、天候による工期変動など、塗装・防水工事業特有の資金繰り課題をファクタリングで解決。仕組みとおすすめサービスを紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. 塗装・防水工事業の資金繰り課題</a></li>
            <li><a href="#types" className="hover:underline">2. 塗装・防水工事業で使えるファクタリングの種類</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社3選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用シーン</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">塗装・防水工事業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">塗装・防水工事業は建設業の中でも、支出の先行と入金の遅れが重なりやすい業種です。特に下請構造での入金サイトと、材料費・足場費用の先行負担が大きな課題になります。</p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 種類 ─── */}
        <section id="types" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">塗装・防水工事業で使えるファクタリングの種類</h2>
          <p className="mb-8 leading-relaxed text-text-light">塗装・防水工事業で利用できるファクタリングは、元請への通知の有無で大きく2種類に分かれます。それぞれの特徴を理解して、自社に最適な方法を選びましょう。</p>
          <div className="space-y-6">
            {factoringTypes.map((type) => (
              <div key={type.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 text-lg font-bold text-primary">{type.title}</h3>
                <p className="mb-4 leading-relaxed text-text-light">{type.description}</p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-secondary">メリット</p>
                    <p className="text-sm text-text-light">{type.merit}</p>
                  </div>
                  <div className="rounded-lg bg-orange-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-accent">デメリット</p>
                    <p className="text-sm text-text-light">{type.demerit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ3選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">おすすめファクタリング会社3選</h2>
          <p className="mb-8 leading-relaxed text-text-light">塗装・防水工事業のファクタリングに対応している会社を厳選して3社紹介します（手数料は公式サイトにて2026年6月確認）。</p>
          <div className="space-y-6">
            {recommendedCompanies.map((company, index) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">{company.name}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{company.features}</p>
                    <div className="mt-4 grid gap-3 rounded-lg bg-section-bg p-4 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold text-text-light">手数料</p>
                        <p className="font-bold text-primary">{company.fee}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">入金スピード</p>
                        <p className="font-bold text-secondary">{company.speed}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-text-light">
                      <strong className="text-text-main">おすすめポイント：</strong>{company.merit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 活用シーン ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">活用シーン</h2>
          <p className="mb-8 leading-relaxed text-text-light">塗装・防水工事業でファクタリングが活用される一般的なシーン（想定例）を紹介します。</p>
          <div className="space-y-6">
            {useScenes.map((uc) => (
              <div key={uc.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-4 text-lg font-bold text-primary">{uc.title}</h3>
                <div className="space-y-3">
                  <div className="rounded-lg bg-orange-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                    <p className="text-sm text-text-light">{uc.problem}</p>
                  </div>
                  <div className="rounded-lg bg-primary-light p-4">
                    <p className="mb-1 text-sm font-semibold text-primary">活用方法</p>
                    <p className="text-sm text-text-light">{uc.solution}</p>
                  </div>
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-secondary">期待できる効果</p>
                    <p className="text-sm text-text-light">{uc.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用の流れ</h2>
          <p className="mb-8 leading-relaxed text-text-light">塗装・防水工事業者がファクタリングを利用する際の一般的な流れを解説します。</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">ファクタリング会社に相談・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">電話またはWebで問い合わせ。売掛金の金額、元請名、希望入金日を伝えます。複数社に同時に相談して見積もりを比較することをおすすめします。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">身分証明書、請求書、工事請負契約書または注文書、通帳コピーなどを提出します。元請との取引実績がわかる書類があると審査がスムーズです。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">売掛先（元請）の信用力、売掛債権の実在性、取引の継続性などを審査。利用者自身の業歴や決算内容よりも元請の信用力が重視されます。見積もりで手数料率と受取額を確認しましょう。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">4</span>
              <div>
                <h3 className="font-bold text-text-main">契約・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">見積もりに同意したら契約を締結。2社間の場合は元請への通知なしで手続きが完了します。契約後、最短即日〜数日で指定口座に入金されます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 建設業特化型という選択肢 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">建設業特化型ファクタリングという選択肢</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            塗装・防水工事業は建設業の一分野であるため、建設業界の商慣習（下請構造・入金サイト・出来高請求など）を理解した建設業特化型のファクタリングサービスも選択肢になります。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main"><Link href="/reviews/kensetsukun/" className="text-primary underline">けんせつくん</Link></strong>：建設業特化のファクタリング。手数料2%〜（上限非公開・公式サイトにて2026年6月確認）。注文書段階での資金化にも対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main"><Link href="/reviews/dokenkun/" className="text-primary underline">土建くん</Link></strong>：建設・土木業界専門のファクタリング。手数料1.8%〜（上限非公開・公式サイトにて2026年6月確認）。一人親方にも対応</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">選び方のポイント</strong>：特化型は業界理解のある審査が期待できる一方、手数料の上限が非公開の場合は必ず見積もりで実際の料率を確認し、全業種対応の会社とも相見積もりで比較しましょう</span>
              </li>
            </ul>
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

                {/* ── 関連ツール・データ ─── */}
                <section className="mb-12">
                  <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
                    <p className="mb-3 font-bold text-primary">あなたの業種・状況に合う会社を探す</p>
                    <ul className="space-y-2 text-sm text-text-light">
                    <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
                    <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
                    <li><Link href="/articles/industry-hub/" className="font-medium text-primary underline">業種別ファクタリングガイド</Link>｜他の業種の傾向や、業種を問わない選び方もまとめています。</li>
                    <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
                    <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
                    </ul>
                  </div>
                </section>

{/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">建設業全般の資金繰り課題と活用法</p>
            </Link>
            <Link href="/articles/demolition/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">解体工事業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">処分費・重機費用の先行負担への対処法</p>
            </Link>
            <Link href="/articles/vs-bank-loan/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングと銀行融資の違い</p>
              <p className="mt-1 text-sm text-text-light">資金調達手段の使い分けを解説</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツも紹介</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">塗装・防水工事業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            建設関連の売掛債権に対応する会社を手数料・入金スピードで徹底比較。あなたの会社に最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
