import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "歯科医院向けファクタリング｜自費診療の売掛債権を現金化",
  description:
    "歯科医院向けファクタリングを徹底解説。自費診療の売掛債権や社保・国保のレセプト債権を早期現金化する方法、メリット・デメリット、おすすめ3社、実際の活用事例を紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/dental/",
  },
  openGraph: {
    title: "歯科医院向けファクタリング｜自費診療の売掛債権を現金化",
    description: "歯科医院の資金繰り課題とファクタリング活用法。レセプト債権の早期現金化を解説。",
    url: "https://factoring-partner.pages.dev/articles/dental/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "診療報酬の入金が2ヶ月先",
    description:
      "保険診療の報酬は、レセプト請求後に社会保険診療報酬支払基金（社保）や国民健康保険団体連合会（国保）から入金されますが、診療月の翌々月末の入金が一般的です。約2ヶ月の入金待ちが発生するため、運転資金が不足しがちです。",
  },
  {
    title: "自費診療の未収金リスク",
    description:
      "インプラント・矯正・ホワイトニングなどの自費診療は、治療費が高額になるため分割払いやクレジット決済が多くなります。カード会社からの入金サイクルのずれや、分割払いの未収リスクが資金繰りを圧迫します。",
  },
  {
    title: "設備投資の負担が大きい",
    description:
      "歯科用CT、マイクロスコープ、CAD/CAMシステムなど高額な設備投資が必要です。最新機器の導入は患者獲得の競争力を左右しますが、リース料や借入の返済が経営を圧迫することがあります。",
  },
  {
    title: "人件費・材料費の先払い",
    description:
      "歯科衛生士・歯科助手の人件費、歯科材料（セラミック・レジンなど）の仕入れ費用は毎月確実に発生します。入金前に支出が必要なため、手元資金に余裕がないとキャッシュフローが逼迫します。",
  },
];

const factoringTypes = [
  {
    title: "診療報酬ファクタリング（レセプト債権）",
    description:
      "社保・国保に請求済みの診療報酬（レセプト債権）を売却して早期現金化する方法です。売掛先が公的機関のため信用力が非常に高く、手数料は1%〜5%程度と低水準です。3社間ファクタリングが一般的で、基金・連合会に通知が必要です。",
    merit: "手数料が安い・審査が通りやすい・高額にも対応",
    demerit: "3社間のため通知が必要・入金まで数日かかることがある",
  },
  {
    title: "一般ファクタリング（自費診療の売掛金）",
    description:
      "自費診療の売掛金（法人・企業との契約による歯科検診・企業健診の未収金など）をファクタリング会社に売却して現金化します。2社間ファクタリングも可能で、取引先に知られずに利用できます。",
    merit: "2社間で取引先に知られない・最短即日入金",
    demerit: "手数料が診療報酬ファクタリングより高い（5%〜18%）",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "業界最大手級。医療業界の利用実績が豊富。レセプト債権・一般売掛金の両方に対応。2社間・3社間対応。最短2時間入金。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "医療業界の審査ノウハウが豊富で審査がスムーズ。高額案件にも対応。全国の歯科医院から利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    features: "一般社団法人が運営する非営利型。経済産業大臣認定。診療報酬ファクタリングに対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit: "非営利法人のため手数料が業界最安水準。認定機関の安心感。歯科医院の利用実績あり。",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。少額（30万円〜）対応。オンライン完結型。個人開業医にも対応。最短即日入金。",
    fee: "2%〜",
    speed: "最短即日",
    merit: "審査通過率が高く、開業間もない歯科医院でも利用可能。少額の自費診療売掛金にも対応。",
  },
];

const useCases = [
  {
    title: "事例1：開業直後の運転資金確保",
    problem: "歯科医院を開業して3ヶ月目。診療報酬の入金が2ヶ月遅れで入るため、開業直後は収入がほぼゼロの状態が続く。スタッフの人件費・歯科材料費の支払いに困窮。",
    solution: "1ヶ月目・2ヶ月目のレセプト債権（合計300万円）を診療報酬ファクタリングで早期現金化。手数料3%で291万円を10日で調達。",
    result: "人件費・材料費の支払いを滞りなく行い、安定した医院運営のスタートを切れた。3ヶ月目以降は通常の入金サイクルが回り始め、ファクタリングの利用頻度も低下。",
  },
  {
    title: "事例2：高額設備投資のつなぎ資金",
    problem: "歯科用CTスキャナー（1,500万円）の導入を決定。リース契約を締結したが、初期費用300万円が必要。銀行融資の審査に3週間かかると言われ、納品スケジュールに間に合わない。",
    solution: "直近のレセプト債権500万円をファクタリングで現金化。手数料2.5%で487万5千円を受け取り、設備の初期費用に充当。",
    result: "予定通り歯科用CTを導入でき、インプラント治療の精度が向上。新規患者の獲得にもつながり、月の売上が15%増加。",
  },
];

const faqs = [
  {
    question: "歯科医院でファクタリングを利用するメリットは？",
    answer:
      "歯科医院がファクタリングを利用するメリットは、①診療報酬の入金待ち（約2ヶ月）を解消できる②担保・保証人不要③銀行融資の審査に落ちても利用可能④最短即日で資金調達可能⑤開業直後でも利用可能、の5点です。特に診療報酬ファクタリングは売掛先が公的機関のため、手数料が安く審査も通りやすいです。",
  },
  {
    question: "診療報酬ファクタリングの手数料相場は？",
    answer:
      "診療報酬ファクタリング（レセプト債権）の手数料は1%〜5%程度が相場で、一般的なファクタリングよりも大幅に安いです。売掛先が社会保険診療報酬支払基金や国保連合会という公的機関であるため、回収リスクが極めて低いことが理由です。3社間ファクタリングが一般的です。",
  },
  {
    question: "自費診療の売掛金もファクタリングに使えますか？",
    answer:
      "はい、自費診療の売掛金もファクタリングに利用できます。ただし、個人患者への直接的な治療費の未収金は対象外となることが多いです。法人との契約による企業歯科検診、歯科矯正のローン会社からの入金予定額などが主な対象となります。手数料は5%〜18%程度で、レセプト債権より高くなります。",
  },
  {
    question: "開業直後でもファクタリングは利用できますか？",
    answer:
      "はい、開業直後でも利用可能です。ファクタリングは利用者自身の業歴よりも売掛先の信用力を重視するため、開業直後でもレセプト請求の実績があれば利用できます。開業1ヶ月目からレセプト債権のファクタリングを利用して運転資金を確保する歯科医院もあります。",
  },
  {
    question: "ファクタリングの利用は患者に知られますか？",
    answer:
      "患者にファクタリングの利用が知られることはありません。診療報酬ファクタリング（3社間）の場合、通知先は社保の基金や国保連合会であり、患者への通知は一切ありません。自費診療の売掛金で2社間ファクタリングを利用する場合も、取引先（法人）への通知なしで利用可能です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "歯科医院向けファクタリング｜自費診療の売掛債権を現金化",
  description: "歯科医院の資金繰り課題とファクタリング活用法。レセプト債権の早期現金化を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/dental/" },
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
    { "@type": "ListItem", position: 3, name: "歯科医院向けファクタリング", item: "https://factoring-partner.pages.dev/articles/dental/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function DentalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "歯科医院向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種特化ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            歯科医院向けファクタリング
            <br className="hidden md:block" />
            自費診療の売掛債権を現金化
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            診療報酬の入金待ちや自費診療の未収金など、歯科医院特有の資金繰り課題をファクタリングで解決。レセプト債権の早期現金化の仕組みとおすすめサービスを紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. 歯科医院の資金繰り課題</a></li>
            <li><a href="#types" className="hover:underline">2. 歯科医院で使えるファクタリングの種類</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社3選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用事例</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">歯科医院の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">歯科医院は一般企業とは異なる資金繰りの課題を抱えています。特に診療報酬の入金サイクルと自費診療の未収金が大きな問題です。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">歯科医院で使えるファクタリングの種類</h2>
          <p className="mb-8 leading-relaxed text-text-light">歯科医院で利用できるファクタリングは大きく2種類あります。それぞれの特徴を理解して、自院に最適な方法を選びましょう。</p>
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
          <p className="mb-8 leading-relaxed text-text-light">歯科医院のファクタリングに対応している会社を厳選して3社紹介します。</p>
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

        {/* ── 活用事例 ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">活用事例</h2>
          <p className="mb-8 leading-relaxed text-text-light">実際に歯科医院でファクタリングを活用したケースを紹介します。</p>
          <div className="space-y-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-4 text-lg font-bold text-primary">{uc.title}</h3>
                <div className="space-y-3">
                  <div className="rounded-lg bg-orange-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                    <p className="text-sm text-text-light">{uc.problem}</p>
                  </div>
                  <div className="rounded-lg bg-primary-light p-4">
                    <p className="mb-1 text-sm font-semibold text-primary">解決策</p>
                    <p className="text-sm text-text-light">{uc.solution}</p>
                  </div>
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
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
          <p className="mb-8 leading-relaxed text-text-light">歯科医院が診療報酬ファクタリングを利用する際の一般的な流れを解説します。</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">ファクタリング会社に相談・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">電話またはWebで問い合わせ。レセプト債権の金額、希望入金日を伝えます。複数社に同時に相談して見積もりを比較することをおすすめします。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">身分証明書、レセプト（診療報酬明細書）、通帳コピー、保険医療機関の届出書などを提出します。自費診療の場合は請求書・契約書が必要です。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">レセプト債権の内容、返戻率、過去の実績などを審査。診療報酬ファクタリングは審査通過率が非常に高いです。見積もりで手数料率と受取額を確認しましょう。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">4</span>
              <div>
                <h3 className="font-bold text-text-main">契約・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">見積もりに同意したら契約を締結。3社間の場合は社保・国保への通知手続きも行います。契約後、最短即日〜数日で指定口座に入金されます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 診療報酬ファクタリングの詳細 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">診療報酬ファクタリングの仕組み</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            診療報酬ファクタリングは、歯科医院が社保・国保に請求した診療報酬（レセプト債権）をファクタリング会社に売却し、入金予定日よりも早く現金を受け取る仕組みです。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">対象となる債権</strong>：社会保険診療報酬支払基金（社保）や国民健康保険団体連合会（国保）に対するレセプト請求権</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">手数料の目安</strong>：1%〜5%程度。一般のファクタリング（5%〜18%）と比べて大幅に安い</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">審査のポイント</strong>：レセプトの返戻率（低いほど有利）、過去の請求実績、医院の運営状況など</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">注意点</strong>：返戻（差し戻し）が発生した場合、その分の調整が必要になることがあります</span>
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

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/medical/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">医療業界向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">診療報酬の早期現金化ガイド</p>
            </Link>
            <Link href="/articles/pharmacy/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">薬局向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">調剤報酬の早期現金化ガイド</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツも紹介</p>
            </Link>
            <Link href="/articles/required-documents/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングの必要書類</p>
              <p className="mt-1 text-sm text-text-light">準備すべき書類を一覧で紹介</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">歯科医院に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            診療報酬ファクタリング対応の会社を手数料・入金スピードで徹底比較。あなたの医院に最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
