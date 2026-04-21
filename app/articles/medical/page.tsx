import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "医療・介護ファクタリングガイド｜診療報酬・介護報酬の早期現金化",
  description:
    "医療・介護ファクタリング（診療報酬ファクタリング）を徹底解説。レセプト債権の早期現金化の仕組み、通常ファクタリングとの違い、おすすめ3社（セゾン・AGビジネスサポート・三菱UFJファクター）、メリット、注意点を紹介。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/medical/",
  },
  openGraph: {
    title: "医療・介護ファクタリングガイド｜診療報酬・介護報酬の早期現金化",
    description:
      "診療報酬ファクタリングの仕組みとおすすめ3社。手数料が安い理由も解説。",
    url: "https://factoring-partner.pages.dev/articles/medical/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const differences = [
  {
    label: "対象債権",
    medical: "診療報酬・介護報酬（レセプト債権）",
    general: "一般的な売掛金（請求書）",
  },
  {
    label: "売掛先",
    medical: "社保・国保（公的機関）",
    general: "民間企業",
  },
  {
    label: "手数料相場",
    medical: "0.25%〜3%程度",
    general: "2%〜30%",
  },
  {
    label: "手数料が安い理由",
    medical: "売掛先が公的機関で未回収リスクが極めて低い",
    general: "売掛先の信用力に依存",
  },
  {
    label: "入金サイト",
    medical: "通常2ヶ月 → 最短数日に短縮",
    general: "売掛先の支払い条件に依存",
  },
  {
    label: "契約形態",
    medical: "3社間が主流",
    general: "2社間・3社間の選択肢あり",
  },
  {
    label: "売掛先への通知",
    medical: "必要（支払基金・国保連に通知）",
    general: "2社間なら不要",
  },
  {
    label: "利用対象",
    medical: "病院・クリニック・薬局・介護事業所",
    general: "業種を問わず利用可能",
  },
];

const recommendedCompanies = [
  {
    name: "クレディセゾン（セゾンファンデックス）",
    features: "セゾングループが運営する信頼性の高いファクタリングサービス。診療報酬・介護報酬ファクタリングに対応。大手クレジットカード会社系列ならではの安心感と実績があります。医療機関向けの金融サービスを幅広く提供しており、総合的な資金調達相談も可能です。",
    fee: "0.5%〜",
    speed: "最短数日",
    merit: "大手グループの安心感。医療機関向け金融サービスの実績が豊富。継続利用による手数料優遇あり。全国の医療機関に対応。",
  },
  {
    name: "AGビジネスサポート",
    features: "アイフルグループの事業者向け金融サービス会社。診療報酬・介護報酬ファクタリングに対応。上場企業グループならではの透明性の高い取引。医療機関の資金繰り相談にも対応しています。",
    fee: "0.8%〜",
    speed: "最短数日",
    merit: "上場企業グループの信頼性。医療機関に特化した審査体制。柔軟な対応力。事業融資との併用相談も可能。",
  },
  {
    name: "三菱UFJファクター",
    features: "三菱UFJフィナンシャル・グループの完全子会社。メガバンク系ファクタリング会社として業界最大手。診療報酬ファクタリングの取扱実績が圧倒的。大規模医療機関から中小クリニックまで幅広く対応しています。",
    fee: "0.25%〜",
    speed: "数日〜1週間",
    merit: "メガバンク系の最高レベルの信頼性。手数料が業界最安水準。大規模医療法人の取引実績が豊富。長期契約での手数料優遇あり。",
  },
];

const benefits = [
  {
    title: "手数料が一般ファクタリングより大幅に安い",
    description:
      "診療報酬ファクタリングの手数料は0.25%〜3%程度と、一般的なファクタリング（2%〜30%）に比べて大幅に安くなっています。これは売掛先が社保・国保という公的機関であり、支払い不能リスクが極めて低いためです。日本の公的医療保険制度は財政基盤が安定しており、審査を経たレセプト（診療報酬請求）が不払いになることはほぼありません。",
  },
  {
    title: "入金サイトを約2ヶ月短縮できる",
    description:
      "通常、診療報酬は診療月の翌月10日にレセプト請求し、翌々月の20日頃に入金されます（約2ヶ月のタイムラグ）。ファクタリングを利用すれば、レセプト請求後数日で資金を受け取ることができ、約2ヶ月の入金サイトを大幅に短縮できます。",
  },
  {
    title: "医療機関の信用力に関わらず利用可能",
    description:
      "審査では売掛先（社保・国保）の信用力が最も重視されるため、開業間もないクリニックや、設備投資で一時的に赤字のある医療機関でも利用しやすいのが特徴です。一般的な銀行融資では「業歴2年以上」などの条件がありますが、診療報酬ファクタリングではこのような制約は少ないです。",
  },
  {
    title: "負債にならない（バランスシートに影響しない）",
    description:
      "ファクタリングは融資ではなく債権の売却であるため、貸借対照表の負債が増えません。医療機器のリース審査や、今後の銀行融資審査に悪影響を与えることなく資金調達が可能です。",
  },
  {
    title: "担保・保証人が不要",
    description:
      "診療報酬債権そのものが「担保」の役割を果たすため、不動産担保や連帯保証人は不要です。開業医やクリニック院長の個人保証も不要なケースがほとんどです。",
  },
];

const faqs = [
  {
    question: "診療報酬ファクタリングとは何ですか？",
    answer:
      "診療報酬ファクタリングとは、医療機関が社会保険診療報酬支払基金（社保）や国民健康保険団体連合会（国保連）に対して持つ診療報酬債権（レセプト債権）を、ファクタリング会社に売却して早期に現金化するサービスです。通常約2ヶ月かかる入金を、最短数日に短縮できます。",
  },
  {
    question: "介護報酬もファクタリングの対象になりますか？",
    answer:
      "はい、介護報酬（介護給付費）もファクタリングの対象になります。介護事業所が国保連に請求する介護報酬債権を早期に現金化できます。診療報酬と同様に売掛先が公的機関のため、手数料は安い傾向にあります。デイサービス、訪問介護、老人ホームなどの介護事業所で利用されています。",
  },
  {
    question: "調剤薬局でも利用できますか？",
    answer:
      "はい、調剤薬局の調剤報酬もファクタリングの対象です。処方箋に基づく調剤報酬債権を早期に現金化できます。新規開局時の運転資金確保や、薬品仕入れの支払い資金として活用されています。",
  },
  {
    question: "診療報酬ファクタリングの手数料はなぜ安いのですか？",
    answer:
      "売掛先が社会保険診療報酬支払基金や国民健康保険団体連合会という公的機関であり、支払い不能リスクが極めて低いためです。一般的なファクタリングでは売掛先の倒産リスクを手数料に反映させますが、公的機関が倒産する可能性はほぼないため、手数料を低く設定できます。",
  },
  {
    question: "診療報酬ファクタリングのデメリットはありますか？",
    answer:
      "主なデメリットは、(1)手数料コストが発生すること（安いとはいえゼロではない）、(2)3社間取引のため支払基金・国保連への通知が必要なこと、(3)レセプトの審査で減額査定された場合は入金額が変動する可能性があること、(4)すべてのファクタリング会社が対応しているわけではないことです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "医療・介護ファクタリングガイド｜診療報酬・介護報酬の早期現金化",
  description:
    "診療報酬ファクタリングの仕組みとおすすめ3社。手数料が安い理由も解説。",
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
    "@id": "https://factoring-partner.pages.dev/articles/medical/",
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
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://factoring-partner.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "コラム",
      item: "https://factoring-partner.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "医療・介護ファクタリング",
      item: "https://factoring-partner.pages.dev/articles/medical/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function MedicalPage() {
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
          { label: "コラム", href: "/articles/" },
          { label: "医療・介護ファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            業種特化ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            医療・介護ファクタリングガイド
            <br className="hidden md:block" />
            診療報酬・介護報酬の早期現金化
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            診療報酬ファクタリングは、レセプト債権を早期に現金化するサービスです。通常約2ヶ月の入金サイトを最短数日に短縮。手数料が安い理由やおすすめ3社を紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#what" className="hover:underline">
                1. 診療報酬ファクタリングとは
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:underline">
                2. 診療報酬の入金フローと課題
              </a>
            </li>
            <li>
              <a href="#diff" className="hover:underline">
                3. 通常ファクタリングとの違い
              </a>
            </li>
            <li>
              <a href="#recommended" className="hover:underline">
                4. おすすめ3社
              </a>
            </li>
            <li>
              <a href="#benefits" className="hover:underline">
                5. メリット5つ
              </a>
            </li>
            <li>
              <a href="#caution" className="hover:underline">
                6. 注意点
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 診療報酬ファクタリングとは ─── */}
        <section id="what" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            診療報酬ファクタリングとは
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">診療報酬ファクタリング</strong>
            とは、病院・クリニック・薬局・介護事業所などの医療機関が、社会保険診療報酬支払基金（社保）や国民健康保険団体連合会（国保連）に対して保有する診療報酬債権（レセプト債権）を、ファクタリング会社に売却して早期に現金化するサービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            日本の医療制度では、患者の医療費の7割（高齢者は8〜9割）が保険診療として公的機関から支払われます。この保険診療分の入金には約2ヶ月のタイムラグがあり、その間の運転資金が不足するケースが少なくありません。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            診療報酬ファクタリングを利用すれば、このタイムラグを解消し、最短数日で資金を確保できます。売掛先が公的機関であるため手数料も非常に安く、一般的なファクタリングとは異なる特徴があります。
          </p>

          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">
              対象となる医療機関・事業所
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>病院（総合病院・大学病院・専門病院）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>クリニック（診療所・医院）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>歯科医院</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>調剤薬局</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>介護事業所（デイサービス・訪問介護・老人ホーム・グループホーム等）</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 入金フローと課題 ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            診療報酬の入金フローと課題
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            診療報酬が入金されるまでのフローと、そこから生じる資金繰りの課題を解説します。
          </p>

          <div className="mb-6 rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 font-bold text-primary">
              通常の診療報酬入金フロー
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  1
                </span>
                <p className="text-sm text-text-light">
                  <strong className="text-text-main">診療月：</strong>患者に診療を行う（例：4月中）
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  2
                </span>
                <p className="text-sm text-text-light">
                  <strong className="text-text-main">翌月10日：</strong>レセプト（診療報酬請求書）を社保・国保連に提出（例：5月10日）
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  3
                </span>
                <p className="text-sm text-text-light">
                  <strong className="text-text-main">翌月中：</strong>審査支払機関がレセプトを審査
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  4
                </span>
                <p className="text-sm text-text-light">
                  <strong className="text-text-main">翌々月20日頃：</strong>診療報酬が入金される（例：6月20日頃）
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-orange-50 p-4">
              <p className="text-sm font-semibold text-accent">
                約2ヶ月のタイムラグが発生
              </p>
              <p className="mt-1 text-sm text-text-light">
                4月に行った診療の報酬が入金されるのは6月20日頃。この間、人件費・薬品費・医療機器リース料などの固定費が発生し続けるため、資金繰りが厳しくなります。
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <h3 className="mb-3 font-bold text-secondary">
              ファクタリング利用時の入金フロー
            </h3>
            <p className="text-sm leading-relaxed text-text-light">
              ファクタリングを利用すると、レセプト提出後（STEP 2）の段階でファクタリング会社に債権を売却し、数日以内に資金を受け取れます。その後、社保・国保連からの入金はファクタリング会社に直接支払われるため、医療機関側の手間はほとんどありません。約2ヶ月のタイムラグを数日に短縮できます。
            </p>
          </div>
        </section>

        {/* ── 通常ファクタリングとの違い ─── */}
        <section id="diff" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            通常ファクタリングとの違い
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            診療報酬ファクタリングと一般的なファクタリングには、いくつかの重要な違いがあります。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">診療報酬ファクタリング</th>
                  <th className="px-4 py-3 font-semibold">一般的なファクタリング</th>
                </tr>
              </thead>
              <tbody>
                {differences.map((item) => (
                  <tr key={item.label} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                      {item.label}
                    </td>
                    <td className="px-4 py-3 text-text-light">{item.medical}</td>
                    <td className="px-4 py-3 text-text-light">{item.general}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── おすすめ3社 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            おすすめ3社
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            診療報酬・介護報酬ファクタリングに対応している信頼性の高い3社を紹介します。いずれも大手金融グループ系で、安心して利用できます。
          </p>
          <div className="space-y-6">
            {recommendedCompanies.map((company, index) => (
              <div
                key={company.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">
                      {company.name}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {company.features}
                    </p>
                    <div className="mt-4 grid gap-3 rounded-lg bg-section-bg p-4 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold text-text-light">手数料</p>
                        <p className="font-bold text-primary">{company.fee}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">
                          入金スピード
                        </p>
                        <p className="font-bold text-secondary">{company.speed}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-text-light">
                      <strong className="text-text-main">おすすめポイント：</strong>
                      {company.merit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── メリット5つ ─── */}
        <section id="benefits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            メリット5つ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            診療報酬ファクタリングには、一般的なファクタリングにはない独自のメリットがあります。
          </p>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            注意点
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            診療報酬ファクタリングを利用する際に注意すべきポイントをまとめます。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                レセプトの減額査定リスク
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                レセプト審査で減額査定された場合、実際の入金額がファクタリング契約時の見込み額を下回る可能性があります。多くのファクタリング会社ではこのリスクを考慮して掛目（通常80%〜90%）を設定しています。減額査定が多い医療機関は手数料が高くなる場合があります。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                自由診療分は対象外
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                診療報酬ファクタリングの対象は「保険診療分」のみです。自由診療（美容外科、インプラント、レーシックなど）の報酬は患者から直接受け取るため、診療報酬ファクタリングの対象外です。自由診療分の売掛金がある場合は、一般的なファクタリングの利用を検討してください。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                対応しているファクタリング会社が限定的
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                診療報酬ファクタリングは専門性が高いため、対応している会社は大手金融グループ系を中心に限られています。一般的な独立系ファクタリング会社では取り扱っていないケースが多いです。本記事で紹介した3社を中心に検討してください。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                継続利用時のコスト管理
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                手数料は安いとはいえ、毎月継続的に利用すると年間では相応のコストになります。例えば月間診療報酬が3,000万円で手数料1%の場合、年間のファクタリングコストは360万円になります。経営改善や銀行融資の活用など、中長期的な資金調達策も並行して検討しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── 診療報酬ファクタリングの手数料が安い理由 ─── */}
        <section className="mb-16">
          <h3 className="mb-6 text-lg font-bold text-text-main md:text-xl">
            診療報酬ファクタリングの手数料が安い理由
          </h3>
          <p className="mb-4 leading-relaxed text-text-light">
            診療報酬ファクタリングの手数料は、一般的なファクタリング（2〜20%）と比べて<strong className="text-text-main">圧倒的に低い水準</strong>です。その理由は売掛先の信用力にあります。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-bold text-text-main">手数料が安い理由</p>
            <p className="mb-4 text-sm leading-relaxed text-text-light">
              診療報酬の売掛先は<strong className="text-text-main">社会保険診療報酬支払基金（社保）</strong>や<strong className="text-text-main">国民健康保険団体連合会（国保連）</strong>です。これらは公的機関であり信用力が極めて高く、未払いリスクがほぼゼロのため、手数料は月0.2〜0.8%と非常に低く設定されています。
            </p>
            <p className="mb-3 font-bold text-text-main">主要サービスの手数料比較</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span><strong className="text-text-main">エヌエスパートナーズ</strong>：月0.2〜0.8%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span><strong className="text-text-main">カイポケ</strong>：最大0.8%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span><strong className="text-text-main">アクリーティブ</strong>：月0.25%〜</span>
              </li>
            </ul>
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

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/construction/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                おすすめ5選と活用事例を紹介
              </p>
            </Link>
            <Link
              href="/articles/transport/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">運送業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                燃料費・人件費の資金繰り改善ガイド
              </p>
            </Link>
            <Link
              href="/articles/what-is-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングとは？</p>
              <p className="mt-1 text-sm text-text-light">
                仕組み・種類・メリット・デメリットをわかりやすく解説
              </p>
            </Link>
            <Link
              href="/articles/accounting/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">会計処理・仕訳方法</p>
              <p className="mt-1 text-sm text-text-light">
                勘定科目と税務上の注意点を解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            医療機関に最適なファクタリング会社を見つけましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            診療報酬ファクタリング対応の会社を含め、15社を手数料・入金速度・審査通過率で徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
