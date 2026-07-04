import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリングの審査落ちの原因5選と通過するための対策",
  description:
    "ファクタリングの審査に落ちる原因5つと、審査を通過するための具体的な対策を徹底解説。売掛先の信用力・請求書の不備・二重譲渡など主要な審査落ち理由と、リカバリー方法を紹介します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/screening-failure/",
  },
  openGraph: {
    title:
      "ファクタリングの審査落ちの原因5選と通過するための対策",
    description:
      "ファクタリング審査落ちの原因5つと通過対策を解説。売掛先の信用力不足・書類不備への具体的な対処法を紹介。",
    url: "https://hyogo-shihoushoshi.jp/articles/screening-failure/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const failureReasons = [
  {
    title: "売掛先の信用力が低い",
    percentage: "最も多い原因",
    description:
      "ファクタリングの審査で最も重視されるのは売掛先（取引先）の信用力です。売掛先が設立間もない企業・個人事業主・財務状況が不安定な企業の場合、「売掛金が期日通りに支払われないリスク」が高いと判断され、審査に落ちることがあります。",
    examples: [
      "売掛先が設立1年未満の法人",
      "売掛先が個人事業主や個人",
      "売掛先が過去に支払い遅延の実績がある",
      "売掛先の業績が大幅に悪化している",
      "売掛先が反社会的勢力との関連が疑われる",
    ],
    solution:
      "信用力の高い別の売掛先（上場企業・大手企業・官公庁）の請求書で再申請しましょう。1社で審査に落ちても、審査基準が異なる他のファクタリング会社では通る可能性もあります。複数の売掛先がある場合は、最も信用力の高い取引先を選んで提出してください。",
  },
  {
    title: "請求書・書類の内容に不備がある",
    percentage: "2番目に多い原因",
    description:
      "請求書の内容が不明確・不正確な場合、売掛金の実在性を確認できず審査に落ちることがあります。特に、金額・支払い期日・取引内容が曖昧な請求書や、取引の裏付けとなる資料が揃っていない場合は審査が通りにくくなります。",
    examples: [
      "請求書に取引内容が詳しく記載されていない",
      "請求金額と契約書の金額が一致しない",
      "支払い期日が記載されていない",
      "通帳に売掛先からの入金履歴がない（新規取引先）",
      "本人確認書類の期限切れや住所不一致",
    ],
    solution:
      "請求書の記載内容を見直し、取引内容・金額・支払い期日を明確にしましょう。可能であれば、契約書・発注書・納品書なども添付し、取引の実在性を証明する材料を増やすと効果的です。過去に同じ売掛先から入金があれば、通帳の該当ページも提出しましょう。",
  },
  {
    title: "二重譲渡の疑いがある",
    percentage: "深刻な原因",
    description:
      "同じ売掛債権を複数のファクタリング会社に売却する「二重譲渡」が疑われた場合、即座に審査に落ちます。二重譲渡は民事上の詐欺行為にあたり、刑事罰の対象にもなります。ファクタリング会社は債権譲渡登記の確認やヒアリングで二重譲渡のチェックを行っています。",
    examples: [
      "他社でもファクタリングを利用していることが判明した",
      "同一の売掛先に対して複数の債権譲渡登記がある",
      "短期間に複数のファクタリング会社に申し込んでいる",
      "申告した売掛金の残高と通帳の入出金が整合しない",
    ],
    solution:
      "二重譲渡は絶対に行わないでください。他社でファクタリングを利用中の場合は、正直にその旨を伝えた上で、異なる売掛債権での申し込みを行いましょう。ファクタリング会社は正直な情報開示を評価します。",
  },
  {
    title: "売掛金の支払い期日に問題がある",
    percentage: "比較的多い原因",
    description:
      "売掛金の支払い期日が極端に遠い（90日以上先）場合や、すでに支払い期日を過ぎている売掛金は審査に通りにくくなります。支払い期日までの期間が長いほどファクタリング会社のリスクが高くなり、期日を過ぎた売掛金は回収の不確実性が大幅に高まるためです。",
    examples: [
      "支払い期日が90日以上先の売掛金",
      "すでに支払い期日を過ぎた不良債権",
      "支払い期日が不明確な売掛金",
      "支払い条件が「翌々月末」など長期の取引",
    ],
    solution:
      "支払い期日が30日〜60日以内の売掛金を選んで申し込みましょう。期日の近い売掛金ほど審査に通りやすく、手数料も安くなります。期日を過ぎた売掛金は、まず売掛先への督促を行い、回収の見込みを確認した上で対応可能な会社に相談してください。",
  },
  {
    title: "利用者自身の問題（稀なケース）",
    percentage: "稀だが注意が必要",
    description:
      "ファクタリングは売掛先の信用力を重視しますが、利用者自身の状況が原因で審査に落ちるケースもゼロではありません。特に2社間ファクタリングでは、利用者が売掛金を回収してファクタリング会社に支払う仕組みのため、利用者の信頼性も一定程度評価されます。",
    examples: [
      "反社会的勢力との関連が疑われる場合",
      "過去にファクタリングの支払いを延滞した履歴がある",
      "事業実態が確認できない（ペーパーカンパニー等）",
      "虚偽の情報を申告した場合",
      "差押えや破産手続き中の場合",
    ],
    solution:
      "利用者側の問題がある場合は、別のファクタリング会社に正直に状況を説明して相談しましょう。赤字決算や税金滞納程度であれば、多くのファクタリング会社で問題なく利用できます。3社間ファクタリングであれば、利用者の信用力への依存度が低いため、通過できる可能性が高まります。",
  },
];

const recoverySteps = [
  {
    step: 1,
    title: "審査落ちの理由を確認する",
    description:
      "ファクタリング会社に審査落ちの理由を問い合わせましょう。多くの会社では具体的な理由を教えてもらえます。理由がわかれば、対策を立てて再申請することが可能です。理由を教えてもらえない場合でも、上記の5つの原因に該当するものがないか自己チェックしてください。",
  },
  {
    step: 2,
    title: "別のファクタリング会社に申し込む",
    description:
      "ファクタリングの審査はCICやJICCなどの信用情報機関を使わないため、1社で審査に落ちても他社には影響しません。審査基準は会社ごとに異なるため、A社で落ちてもB社で通る可能性は十分にあります。少なくとも2〜3社に並行して申し込むことをおすすめします。",
  },
  {
    step: 3,
    title: "売掛先を変えて再申請する",
    description:
      "売掛先の信用力が原因で審査に落ちた場合、信用力の高い別の売掛先の請求書で再申請しましょう。上場企業・大手企業・官公庁向けの売掛金は、ほぼ確実に審査に通ります。複数の取引先がある場合は、最も信用力の高い売掛先を選んでください。",
  },
  {
    step: 4,
    title: "書類を整備して再提出する",
    description:
      "書類の不備が原因だった場合は、請求書の記載内容を修正し、取引の裏付けとなる資料（契約書・発注書・納品書・入金履歴）を追加で準備しましょう。書類が充実しているほど審査がスムーズに進み、手数料も有利になる傾向があります。",
  },
  {
    step: 5,
    title: "審査が柔軟な会社を選ぶ",
    description:
      "審査通過率が高い会社（アクセルファクター93.3%など）や、少額・個人事業主にも対応している会社（ペイトナー・ラボル）は、審査基準が比較的柔軟です。大手のビートレーディングも累計9.1万社の実績があり、多様なケースに対応しています。",
  },
];

const companyByFlexibility = [
  { name: "アクセルファクター", passRate: "93.3%", minAmount: "30万円〜", feature: "業界最高水準の審査通過率。少額から対応" },
  { name: "ペイトナー", passRate: "非公開（高い）", minAmount: "1万円〜", feature: "AI審査で個人事業主・フリーランスにも柔軟" },
  { name: "ラボル", passRate: "非公開（高い）", minAmount: "1万円〜", feature: "24時間365日対応。必要書類が少ない" },
  { name: "ビートレーディング", passRate: "非公開（高い）", minAmount: "制限なし", feature: "累計9.1万社。多様な業種・状況に対応" },
  { name: "QuQuMo", passRate: "非公開", minAmount: "制限なし", feature: "オンライン完結。必要書類3点で手続き簡単" },
];

const dosDonts = {
  dos: [
    "信用力の高い売掛先の請求書を選んで提出する",
    "請求書の記載内容（金額・期日・取引内容）を正確にする",
    "通帳コピーで売掛先からの入金実績を示す",
    "他社でのファクタリング利用状況を正直に伝える",
    "複数のファクタリング会社に並行して申し込む",
    "契約書・発注書・納品書などの裏付け資料を添付する",
    "支払い期日が近い（30日以内）の売掛金を優先する",
  ],
  donts: [
    "架空の売掛金や水増しした請求書を提出する",
    "同じ売掛債権を複数の会社に売却する（二重譲渡）",
    "他社でのファクタリング利用を隠す",
    "虚偽の会社情報や財務情報を申告する",
    "支払い期日を過ぎた不良債権をファクタリングしようとする",
    "審査なしを謳う怪しい業者に申し込む",
  ],
};

const faqs = [
  {
    question: "ファクタリングの審査に落ちたら信用情報に傷がつきますか？",
    answer:
      "いいえ、ファクタリングの審査はCICやJICCなどの信用情報機関を使わないため、審査に落ちても信用情報には一切影響しません。銀行融資やカードローンの審査とは全く別のプロセスであり、何度審査に落ちても信用情報に記録されることはありません。安心して複数社に申し込んでください。",
  },
  {
    question: "1社で審査に落ちたら他社でも落ちますか？",
    answer:
      "いいえ、そのようなことはありません。ファクタリング会社間で審査情報の共有は行われていないため、1社で審査に落ちても他社には影響しません。審査基準は会社ごとに異なるため、A社で落ちてもB社では通るケースは珍しくありません。少なくとも2〜3社に並行して申し込むことをおすすめします。",
  },
  {
    question: "赤字決算でもファクタリングの審査に通りますか？",
    answer:
      "はい、赤字決算でもファクタリングの審査に通る可能性は十分にあります。ファクタリングの審査では利用者の財務状況よりも売掛先の信用力が重視されるため、赤字決算・債務超過・税金滞納・リスケ中であっても、売掛先が信頼できる企業であれば利用できます。実際に赤字企業がファクタリングで資金調達に成功した事例は多数あります。",
  },
  {
    question: "審査に落ちた後、同じ会社に再申請できますか？",
    answer:
      "はい、再申請は可能です。審査落ちの原因を改善した上で再申請すれば、今度は審査に通る可能性があります。例えば、信用力の高い別の売掛先の請求書を提出する、書類の不備を修正する、などの対策を行ってから再申請しましょう。ただし、短期間で改善なく再申請しても結果は変わらない可能性が高いです。",
  },
  {
    question: "個人事業主でも審査に通りやすいファクタリング会社はありますか？",
    answer:
      "はい、個人事業主・フリーランスに特化したサービスがあります。ペイトナー（最短10分・1万円〜）、ラボル（24時間365日・1万円〜）、FREENANCE（GMOグループ・3%〜）が代表的です。これらのサービスはAI審査や簡易審査を採用しており、個人事業主でも審査に通りやすい設計になっています。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ファクタリングの審査落ちの原因5選と通過するための対策",
  description:
    "ファクタリング審査落ちの原因5つと通過対策を解説。売掛先の信用力不足・書類不備への具体的な対処法を紹介。",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
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
    "@id":
      "https://hyogo-shihoushoshi.jp/articles/screening-failure/",
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
      item: "https://hyogo-shihoushoshi.jp/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "コラム",
      item: "https://hyogo-shihoushoshi.jp/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "審査落ちの原因と対策",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ScreeningFailurePage() {
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
          { label: "審査落ちの原因と対策" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-white">
            審査深掘り
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングの審査落ちの原因5選
            <br className="hidden md:block" />
            通過するための対策
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングの審査に落ちてしまった方や、審査に不安がある方へ。審査落ちの原因5つと具体的な対策、リカバリー方法を徹底解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#reasons" className="hover:underline">1. 審査落ちの原因5選</a></li>
            <li><a href="#recovery" className="hover:underline">2. 審査落ち後のリカバリー手順</a></li>
            <li><a href="#flexible-companies" className="hover:underline">3. 審査が柔軟なファクタリング会社</a></li>
            <li><a href="#dos-donts" className="hover:underline">4. 審査通過のDo&apos;s &amp; Don&apos;ts</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 審査落ちの原因5選 ─── */}
        <section id="reasons" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査落ちの原因5選
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングの審査は銀行融資に比べて通過率が高いですが、すべてのケースで審査に通るわけではありません。以下の5つの原因が審査落ちの主なパターンです。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            自社のケースがどの原因に該当するかを確認し、対策を立てましょう。原因が特定できれば、再申請で審査を通過できる可能性が大幅に高まります。
          </p>

          <div className="space-y-8">
            {failureReasons.map((reason, index) => (
              <div
                key={reason.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-xl font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="w-full">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-bold text-text-main">{reason.title}</h3>
                      <span className="rounded-full bg-primary-light px-3 py-0.5 text-xs font-bold text-primary">
                        {reason.percentage}
                      </span>
                    </div>
                    <p className="mt-3 leading-relaxed text-text-light">{reason.description}</p>

                    <div className="mt-4 rounded-lg bg-section-bg p-4">
                      <p className="mb-2 text-sm font-bold text-text-main">こんなケースで発生します：</p>
                      <ul className="space-y-1">
                        {reason.examples.map((example) => (
                          <li key={example} className="flex items-start gap-2 text-sm text-text-light">
                            <span className="mt-0.5 text-accent">&#9679;</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 rounded-lg border border-secondary/30 bg-teal-50 p-4">
                      <p className="mb-1 text-sm font-bold text-secondary">対策</p>
                      <p className="text-sm leading-relaxed text-text-light">{reason.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── リカバリー手順 ─── */}
        <section id="recovery" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査落ち後のリカバリー手順
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            審査に落ちた場合でも、適切な手順を踏めばファクタリングによる資金調達は可能です。以下の5つのステップで対応しましょう。
          </p>

          <div className="space-y-6">
            {recoverySteps.map((item) => (
              <div
                key={item.step}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-primary-light p-4">
            <p className="text-sm leading-relaxed text-text-light">
              <strong className="text-primary">重要：</strong>
              ファクタリング会社間で審査情報が共有されることはありません。1社で落ちても、他社に影響はないため、複数社への並行申し込みが有効です。
            </p>
          </div>
        </section>

        {/* ── 審査が柔軟な会社 ─── */}
        <section id="flexible-companies" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査が柔軟なファクタリング会社
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            審査通過率が高い、または審査基準が柔軟なファクタリング会社を紹介します。審査に不安がある方は、以下の会社への申し込みを検討してください。
          </p>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold whitespace-nowrap">会社名</th>
                  <th className="px-3 py-3 font-semibold whitespace-nowrap">審査通過率</th>
                  <th className="px-3 py-3 font-semibold whitespace-nowrap">最少金額</th>
                  <th className="px-3 py-3 font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody>
                {companyByFlexibility.map((company, index) => (
                  <tr
                    key={company.name}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-3 py-3 font-semibold text-text-main whitespace-nowrap">{company.name}</td>
                    <td className="px-3 py-3 font-bold text-secondary whitespace-nowrap">{company.passRate}</td>
                    <td className="px-3 py-3 text-text-light whitespace-nowrap">{company.minAmount}</td>
                    <td className="px-3 py-3 text-text-light">{company.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-3">
            {companyByFlexibility.map((company) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-4">
                <div className="flex items-center gap-3">
                  <p className="font-semibold text-text-main">{company.name}</p>
                  <span className="rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-bold text-secondary">{company.passRate}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-text-light">{company.feature}。最少金額{company.minAmount}から対応しています。</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Do's & Don'ts ─── */}
        <section id="dos-donts" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査通過のDo&apos;s &amp; Don&apos;ts
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの審査を通過するためにやるべきこと、やってはいけないことをリスト化しました。
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <p className="mb-4 font-bold text-secondary">やるべきこと（Do&apos;s）</p>
              <ul className="space-y-2 text-sm text-text-light">
                {dosDonts.dos.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 text-secondary">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">やってはいけないこと（Don&apos;ts）</p>
              <ul className="space-y-2 text-sm text-text-light">
                {dosDonts.donts.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 text-accent">&#10005;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 審査落ちのよくある誤解 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査落ちに関するよくある誤解
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">誤解1：審査に落ちるとブラックリストに載る</h3>
              <p className="leading-relaxed text-text-light">
                ファクタリングの審査はCIC・JICC・全銀協などの信用情報機関とは無関係です。審査に何度落ちても、信用情報に記録されることはありません。銀行融資やカードローンの審査にも一切影響しません。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">誤解2：1社で落ちたら他社でも必ず落ちる</h3>
              <p className="leading-relaxed text-text-light">
                ファクタリング会社間で審査情報が共有されることはありません。各社の審査基準は異なるため、A社で落ちてもB社・C社では審査に通るケースは珍しくありません。複数社への同時申し込みは有効な戦略です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">誤解3：自社が赤字だから審査に落ちた</h3>
              <p className="leading-relaxed text-text-light">
                ファクタリングの審査では、利用者自身の財務状況はそれほど重視されません。赤字決算・債務超過・税金滞納・リスケ中でも、売掛先の信用力が高ければ審査に通ります。審査落ちの原因は別にある可能性が高いです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">誤解4：審査が甘い会社は危険</h3>
              <p className="leading-relaxed text-text-light">
                審査通過率が高いことと、安全性が低いことは別の問題です。アクセルファクター（93.3%）やペイトナーなどは、効率的なAI審査や明確な審査基準により高い通過率を実現しています。ただし、「審査なし」を謳う業者には注意が必要です。
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border bg-white"
              >
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

                {/* ── 関連ツール・データ ─── */}
                <section className="mb-12">
                  <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
                    <p className="mb-3 font-bold text-primary">あわせて使いたいツール・データ</p>
                    <ul className="space-y-2 text-sm text-text-light">
                    <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
                    <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
                    <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
                    <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
                    </ul>
                  </div>
                </section>

{/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/easy-screening/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">審査が通りやすいファクタリング会社8選</p>
              <p className="mt-1 text-sm text-text-light">
                審査通過率が高い会社をランキング形式で紹介
              </p>
            </Link>
            <Link
              href="/articles/document-preparation/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">審査に必要な書類の準備ガイド</p>
              <p className="mt-1 text-sm text-text-light">
                スムーズに通過するための書類準備のコツ
              </p>
            </Link>
            <Link
              href="/articles/screening-criteria/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングの審査基準を徹底解説</p>
              <p className="mt-1 text-sm text-text-light">
                審査で見られるポイントと通過率を上げる方法
              </p>
            </Link>
            <Link
              href="/articles/deficit-ok/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">赤字でも使えるファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                債務超過でもOKな理由と注意点
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            審査に不安があっても大丈夫
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            審査通過率93.3%のアクセルファクターをはじめ、柔軟な審査の会社を比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
