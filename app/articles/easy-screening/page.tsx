import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "審査が通りやすいファクタリング会社8選｜審査基準と通過のコツ",
  description:
    "審査が通りやすいファクタリング会社8社を審査通過率順に紹介。ファクタリングの審査基準、赤字・債務超過でもOKな会社、審査落ちの原因と対策まで徹底解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/easy-screening/",
  },
  openGraph: {
    title:
      "審査が通りやすいファクタリング会社8選｜審査基準と通過のコツ",
    description:
      "審査が通りやすいファクタリング会社8社を紹介。審査基準・赤字でもOKな会社・審査落ち対策まで解説。",
    url: "https://factoring-partner.pages.dev/articles/easy-screening/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const top8 = [
  { rank: 1, name: "アクセルファクター", passRate: "93.3%", fee: "2%〜20%", speed: "最短3時間", note: "業界最高水準の審査通過率。少額30万円〜対応で間口が広い" },
  { rank: 2, name: "ビートレーディング", passRate: "非公開（高い）", fee: "2%〜12%", speed: "最短2時間", note: "累計5.8万社の実績。柔軟な審査で多くの企業に対応" },
  { rank: 3, name: "ペイトナー", passRate: "非公開（高い）", fee: "一律10%", speed: "最短10分", note: "AI審査で個人事業主・フリーランスにも門戸を広く開放" },
  { rank: 4, name: "ラボル", passRate: "非公開（高い）", fee: "一律10%", speed: "最短30分", note: "24時間365日対応。必要書類が少なく審査ハードルが低い" },
  { rank: 5, name: "QuQuMo", passRate: "非公開", fee: "1%〜14.8%", speed: "最短2時間", note: "オンライン完結で審査がスピーディー" },
  { rank: 6, name: "PMG", passRate: "非公開", fee: "1%〜12.8%", speed: "最短即日", note: "柔軟な審査。乗り換え利用にも積極的に対応" },
  { rank: 7, name: "FREENANCE", passRate: "非公開", fee: "3%〜10%", speed: "最短即日", note: "フリーランス特化。GMOグループの安心感" },
  { rank: 8, name: "日本中小企業金融サポート機構", passRate: "非公開", fee: "1.5%〜10%", speed: "最短即日", note: "非営利法人ならではの柔軟な対応。経営相談もOK" },
];

const screeningPoints = [
  {
    title: "売掛先の信用力（最重要）",
    importance: "非常に高い",
    description:
      "ファクタリングの審査で最も重視されるのは、売掛先（取引先）の信用力です。売掛先が上場企業や大手企業、官公庁であれば審査にほぼ確実に通ります。逆に、売掛先が設立間もない企業や個人事業主だと審査が厳しくなる傾向があります。ファクタリング会社が評価しているのは「売掛金が確実に支払われるかどうか」です。",
  },
  {
    title: "売掛金の実在性",
    importance: "高い",
    description:
      "売掛金が実際の取引に基づくものかどうかが確認されます。架空の請求書や水増し請求は絶対にNGです。請求書・契約書・発注書・納品書などで取引の実在性を証明する必要があります。過去に同じ売掛先から入金実績がある場合は、実在性が認められやすくなります。",
  },
  {
    title: "売掛金の支払い期日",
    importance: "中程度",
    description:
      "支払い期日までの期間が短いほど審査に通りやすく、手数料も安くなります。一般的に30日〜60日以内の売掛金が好まれます。90日以上先の売掛金や、すでに支払い期日を過ぎた売掛金は、審査に通りにくくなる場合があります。",
  },
  {
    title: "利用者自身の状況",
    importance: "低い",
    description:
      "銀行融資とは異なり、ファクタリングでは利用者自身の信用力はそれほど重視されません。赤字決算、債務超過、税金滞納、リスケ中であっても、売掛先の信用力が高ければ利用できるケースが多いです。ただし、利用者の事業継続性は確認されることがあります。",
  },
];

const okCases = [
  { status: "赤字決算", ok: true, detail: "売掛先の信用力が高ければ問題なく利用可能。多くのファクタリング会社が対応している。" },
  { status: "債務超過", ok: true, detail: "貸借対照表上の債務超過でも、ファクタリングは借入ではないため利用可能。" },
  { status: "税金滞納", ok: true, detail: "税金滞納がある場合でも、売掛先の信用力次第で利用できる。ただし差押えリスクがある場合は注意。" },
  { status: "リスケ中", ok: true, detail: "銀行のリスケジュール中でもファクタリングは利用可能。銀行との関係に影響しない。" },
  { status: "創業1年未満", ok: true, detail: "事業開始から間もなくても、売掛先との取引実績があれば利用可能。" },
  { status: "個人事業主・フリーランス", ok: true, detail: "ペイトナー・ラボル・FREENANCEなど、個人事業主専用のサービスが充実。" },
];

const rejectionReasons = [
  {
    reason: "売掛先の信用力が低い",
    detail: "売掛先が設立間もない企業や財務状況が不安定な企業の場合、審査に落ちることがあります。",
    solution: "信用力の高い別の売掛先の請求書で再申請するか、審査が柔軟な会社に申し込む。",
  },
  {
    reason: "請求書の内容に不備がある",
    detail: "金額・支払い期日・取引内容が不明確な請求書は審査に通りにくいです。",
    solution: "請求書を修正し、取引の詳細が明確にわかる形で再提出する。",
  },
  {
    reason: "二重譲渡の疑いがある",
    detail: "同じ売掛金を他社にも売却していると判断された場合、審査に落ちます。",
    solution: "正直に取引状況を開示し、二重譲渡がないことを証明する。",
  },
  {
    reason: "支払い期日が遠すぎるまたは過ぎている",
    detail: "支払い期日まで90日以上先の場合や、すでに期日を過ぎた売掛金は審査に通りにくいです。",
    solution: "支払い期日が近い別の売掛金で申し込むか、対応可能な会社を探す。",
  },
  {
    reason: "売掛先が個人や海外企業",
    detail: "売掛先が個人や海外企業の場合、信用調査が難しいため審査に落ちることがあります。",
    solution: "国内法人向けの売掛金で申し込むか、国際ファクタリングに対応した会社に相談する。",
  },
];

const faqs = [
  {
    question: "ファクタリングの審査通過率はどのくらいですか？",
    answer:
      "審査通過率を公開している会社は少ないですが、アクセルファクターは93.3%と公表しています。一般的にファクタリングの審査通過率は70%〜90%程度と言われており、銀行融資（50%程度）と比べて大幅に高いです。売掛先の信用力が高い請求書であれば、ほぼ確実に審査に通ります。",
  },
  {
    question: "審査に落ちた場合、他のファクタリング会社に申し込めますか？",
    answer:
      "はい、他のファクタリング会社に申し込むことは可能です。ファクタリングの審査はCICやJICCなどの信用情報機関を使わないため、A社で審査に落ちてもB社には影響しません。審査基準は会社によって異なるため、1社で落ちても別の会社では通る可能性が十分にあります。",
  },
  {
    question: "ブラックリストに載っていてもファクタリングは使えますか？",
    answer:
      "はい、利用できる可能性があります。ファクタリングは融資ではなく売掛債権の売買であるため、信用情報機関（CIC・JICC・全銀協）への照会は行いません。個人の信用情報に問題がある場合でも、売掛先の信用力が高ければファクタリングを利用できます。",
  },
  {
    question: "審査が甘いファクタリング会社は安全ですか？",
    answer:
      "「審査が甘い」ことと「安全性が低い」ことは別の問題です。ペイトナーやラボルなど、AIを活用して効率的に審査を行っている会社は、審査のハードルが低くても安全性は高いです。一方で、審査をほぼ行わない業者は悪質な可能性があるため、運営会社の情報や口コミを必ず確認しましょう。",
  },
  {
    question: "審査結果はどのくらいで出ますか？",
    answer:
      "審査結果が出るまでの時間は会社によって異なりますが、ペイトナーは最短10分、ラボルは最短30分、アクセルファクターは最短3時間程度です。オンライン完結型のサービスは審査が早い傾向にあります。対面型のサービスや大口案件は、審査に1〜3営業日かかることもあります。",
  },
];

const bankVsFactoring = [
  { item: "審査対象", bank: "利用者の信用力・財務状況", factoring: "売掛先の信用力" },
  { item: "審査通過率", bank: "約50%", factoring: "約70%〜90%" },
  { item: "赤字決算", bank: "基本的にNG", factoring: "OK（売掛先次第）" },
  { item: "債務超過", bank: "基本的にNG", factoring: "OK（売掛先次第）" },
  { item: "税金滞納", bank: "NG", factoring: "OK（条件付き）" },
  { item: "創業年数", bank: "2年以上が目安", factoring: "制限なし" },
  { item: "必要書類", bank: "決算書・事業計画書等多数", factoring: "請求書・通帳コピー等少数" },
  { item: "審査期間", bank: "2週間〜2ヶ月", factoring: "最短10分〜即日" },
  { item: "信用情報照会", bank: "あり", factoring: "なし" },
];

const approvalStories = [
  {
    industry: "建設業A社",
    situation: "赤字決算2期連続、銀行融資を断られた状態",
    result: "売掛先が大手ゼネコンだったため、ビートレーディングで手数料5%で即日入金。大口工事の着手金を確保できた。",
  },
  {
    industry: "IT系フリーランスBさん",
    situation: "独立直後で確定申告の実績がなく、カードローンも審査落ち",
    result: "エージェント経由の請求書（売掛先は上場企業）をペイトナーに提出し、最短10分で入金。独立初月の生活費を確保。",
  },
  {
    industry: "運送業C社",
    situation: "税金滞納あり、リスケ中で銀行からの追加融資が不可能",
    result: "売掛先が大手物流企業だったため、アクセルファクターで審査通過。毎月の燃料費と人件費を確保し、事業を継続。",
  },
  {
    industry: "人材派遣業D社",
    situation: "債務超過の状態で、派遣社員への給与支払いが困難に",
    result: "売掛先が複数の上場企業だったため、PMGで複数の請求書をまとめてファクタリング。給与の遅配を防ぎ、事業を立て直した。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "審査が通りやすいファクタリング会社8選｜審査基準と通過のコツ",
  description:
    "審査が通りやすいファクタリング会社8社を紹介。審査基準・赤字でもOKな会社・審査落ち対策まで解説。",
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
      "https://factoring-partner.pages.dev/articles/easy-screening/",
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

export default function EasyScreeningPage() {
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
          { label: "審査が通りやすいファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-secondary px-4 py-1 text-sm font-bold text-white">
            審査基準
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            審査が通りやすいファクタリング会社8選
            <br className="hidden md:block" />
            審査基準と通過のコツ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            審査通過率93.3%のアクセルファクターを筆頭に、審査が通りやすいファクタリング会社8社を紹介。審査で見られるポイント、赤字・債務超過でもOKな会社、審査落ちの原因と対策を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#screening-points" className="hover:underline">
                1. ファクタリングの審査で見られるポイント
              </a>
            </li>
            <li>
              <a href="#ranking" className="hover:underline">
                2. 審査が通りやすいファクタリング会社8選
              </a>
            </li>
            <li>
              <a href="#ok-cases" className="hover:underline">
                3. 赤字・債務超過でもOKなファクタリング
              </a>
            </li>
            <li>
              <a href="#rejection" className="hover:underline">
                4. 審査落ちの原因と対策
              </a>
            </li>
            <li>
              <a href="#tips" className="hover:underline">
                5. 審査通過率を上げるコツ
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 審査ポイント ─── */}
        <section id="screening-points" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングの審査で見られるポイント
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングの審査は、銀行融資の審査とは根本的に異なります。銀行融資では利用者自身の信用力（決算書・信用情報・担保）が重視されますが、ファクタリングでは<strong className="text-text-main">売掛先の信用力</strong>が最も重要な審査基準です。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            そのため、自社の財務状況に不安があっても、売掛先が信頼できる企業であれば審査に通る可能性が高いのがファクタリングの大きな特徴です。
          </p>

          <div className="space-y-6">
            {screeningPoints.map((point, index) => (
              <div
                key={point.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-lg font-bold text-text-main">{point.title}</h3>
                      <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${point.importance === "非常に高い" ? "bg-accent text-white" : point.importance === "高い" ? "bg-primary-light text-primary" : "bg-section-bg text-text-light"}`}>
                        重要度：{point.importance}
                      </span>
                    </div>
                    <p className="leading-relaxed text-text-light">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ランキング ─── */}
        <section id="ranking" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査が通りやすいファクタリング会社8選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            審査の柔軟さ、通過率、必要書類の少なさなどを総合的に評価し、審査が通りやすいファクタリング会社8社を厳選しました。
          </p>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold">順位</th>
                  <th className="px-3 py-3 font-semibold">会社名</th>
                  <th className="px-3 py-3 font-semibold">審査通過率</th>
                  <th className="px-3 py-3 font-semibold">手数料</th>
                  <th className="px-3 py-3 font-semibold">入金速度</th>
                </tr>
              </thead>
              <tbody>
                {top8.map((company, index) => (
                  <tr
                    key={company.name}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-3 py-3 font-bold text-accent">{company.rank}</td>
                    <td className="px-3 py-3 font-semibold text-text-main whitespace-nowrap">{company.name}</td>
                    <td className="px-3 py-3 font-bold text-secondary">{company.passRate}</td>
                    <td className="px-3 py-3">{company.fee}</td>
                    <td className="px-3 py-3">{company.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-6">
            {top8.map((company) => (
              <div
                key={company.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white ${company.rank <= 3 ? "bg-accent" : "bg-primary"}`}>
                    {company.rank}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{company.name}</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-sm font-bold text-secondary">{company.passRate}</span>
                      <span className="text-sm text-text-light">/ 手数料 {company.fee}</span>
                    </div>
                  </div>
                </div>
                <p className="leading-relaxed text-text-light">{company.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 赤字・債務超過でもOK ─── */}
        <section id="ok-cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            赤字・債務超過でもOKなファクタリング
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            「赤字でも利用できるのか？」「債務超過でも大丈夫なのか？」という不安を持つ方は多いです。結論として、ファクタリングは利用者の財務状況よりも売掛先の信用力を重視するため、以下のようなケースでも利用可能です。
          </p>

          <div className="space-y-3">
            {okCases.map((item) => (
              <div
                key={item.status}
                className="rounded-lg border border-border bg-white p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                    OK
                  </span>
                  <div>
                    <h3 className="font-bold text-text-main">{item.status}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-light">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-2 font-bold text-secondary">ファクタリングと銀行融資の審査の違い</p>
            <p className="text-sm leading-relaxed text-text-light">
              銀行融資の審査では、決算書の内容（売上・利益・自己資本比率など）、信用情報、担保の有無が重視されます。一方、ファクタリングは売掛債権の「買取」であり、審査の焦点は「売掛先がきちんと支払ってくれるか」です。この違いにより、銀行融資を断られた企業でもファクタリングは利用できるのです。
            </p>
          </div>
        </section>

        {/* ── 銀行融資とファクタリングの審査比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            銀行融資 vs ファクタリング 審査比較表
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            銀行融資とファクタリングの審査基準がどれほど異なるかを一覧で比較します。ファクタリングの審査がいかに柔軟であるかがわかります。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">項目</th>
                  <th className="px-4 py-3 font-semibold">銀行融資</th>
                  <th className="px-4 py-3 font-semibold">ファクタリング</th>
                </tr>
              </thead>
              <tbody>
                {bankVsFactoring.map((row, index) => (
                  <tr
                    key={row.item}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">{row.item}</td>
                    <td className="px-4 py-3 text-text-light">{row.bank}</td>
                    <td className="px-4 py-3 text-text-light">{row.factoring}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 審査通過の事例 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査通過の事例紹介
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            実際にファクタリングの審査に通過した事例を紹介します。銀行融資を断られた状況でも、ファクタリングで資金調達に成功したケースです。
          </p>
          <div className="space-y-6">
            {approvalStories.map((story, index) => (
              <div
                key={story.industry}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{story.industry}</h3>
                    <p className="mt-1 text-sm text-accent font-semibold">状況：{story.situation}</p>
                    <p className="mt-2 leading-relaxed text-text-light">{story.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 審査落ちの原因と対策 ─── */}
        <section id="rejection" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査落ちの原因と対策
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの審査は銀行融資より緩やかですが、すべてのケースで審査に通るわけではありません。以下は審査に落ちる主な原因と、その対策方法です。
          </p>

          <div className="space-y-6">
            {rejectionReasons.map((item, index) => (
              <div
                key={item.reason}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{item.reason}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{item.detail}</p>
                    <div className="mt-3 rounded bg-primary-light p-3">
                      <p className="text-sm">
                        <span className="font-bold text-primary">対策：</span>
                        <span className="text-text-light">{item.solution}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 審査に必要な書類 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査に必要な書類と準備のポイント
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            審査をスムーズに通過するためには、必要書類を正確に準備することが重要です。書類不備は審査遅延の最大の原因です。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">必須</span>
                <div>
                  <h3 className="font-bold text-text-main">請求書</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-light">
                    対象となる売掛金の請求書。金額・支払い期日・売掛先名・取引内容が明確に記載されていること。請求書番号が入っているとより審査がスムーズです。
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">必須</span>
                <div>
                  <h3 className="font-bold text-text-main">本人確認書類</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-light">
                    運転免許証・マイナンバーカード・パスポートなどの顔写真付き証明書。スマホで撮影した画像でOKです。
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">必須</span>
                <div>
                  <h3 className="font-bold text-text-main">通帳コピー（入出金明細）</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-light">
                    直近3〜6ヶ月分の銀行口座の入出金履歴。売掛先からの入金実績が確認できるものが理想的。ネットバンキングのスクリーンショットでも可。
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-full bg-section-bg px-3 py-1 text-xs font-bold text-text-light">場合による</span>
                <div>
                  <h3 className="font-bold text-text-main">決算書・確定申告書</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-light">
                    法人の場合は直近2〜3期分の決算書、個人事業主の場合は確定申告書が求められることがあります。ペイトナー・ラボルなどの簡易型サービスでは不要な場合が多いです。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 審査通過率を上げるコツ ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査通過率を上げるコツ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            以下のコツを押さえることで、ファクタリングの審査通過率を高めることができます。
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-secondary">&#10003;</span>
                <h3 className="font-bold text-text-main">信用力の高い売掛先を選ぶ</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-light">
                複数の売掛金がある場合は、上場企業・大手企業・官公庁向けの売掛金を優先的に提出しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-secondary">&#10003;</span>
                <h3 className="font-bold text-text-main">必要書類を正確に準備する</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-light">
                請求書の内容（金額・期日・取引先名）に不備がないか確認。通帳コピーも最新のものを用意。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-secondary">&#10003;</span>
                <h3 className="font-bold text-text-main">取引実績を証明する</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-light">
                売掛先との過去の取引実績（入金履歴）を通帳コピーで示すと、審査に通りやすくなります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-secondary">&#10003;</span>
                <h3 className="font-bold text-text-main">正直に情報を開示する</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-light">
                虚偽の情報や隠し事はかえって審査に不利に働きます。正直に状況を説明しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-secondary">&#10003;</span>
                <h3 className="font-bold text-text-main">支払い期日が近い売掛金を選ぶ</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-light">
                支払い期日まで30日以内の売掛金は、審査通過率が高く手数料も安くなる傾向があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-secondary">&#10003;</span>
                <h3 className="font-bold text-text-main">複数社に申し込む</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-light">
                1社で審査に落ちても、別の会社では通る可能性があります。2〜3社に同時申し込みしましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── 審査なしは存在しない ─── */}
        <section className="mb-16">
          <h3 className="mb-6 text-lg font-bold text-text-main md:text-xl">
            「審査なし」のファクタリングは存在しない
          </h3>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">完全に審査なしは存在しない</h3>
              <p className="leading-relaxed text-text-light">
                ファクタリングは売掛債権の買取サービスであるため、売掛債権の実在性や売掛先の信用力の確認は必須です。完全に「審査なし」で買取を行うファクタリング会社は存在しません。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">「審査なし」を謳う業者に注意</h3>
              <p className="leading-relaxed text-text-light">
                「審査なし」を全面に打ち出している業者は、悪徳業者やファクタリングを装った闇金業者の可能性が高いため注意が必要です。正規のファクタリング会社は必ず売掛債権の確認プロセスを設けています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">審査通過率が高い ≠ 審査が甘い</h3>
              <p className="leading-relaxed text-text-light">
                審査通過率が高いことと審査が甘いことは異なります。売掛先の信用力が高ければ、誰でも審査に通りやすくなります。JBLは審査通過率97%、アクセルファクターは93.3%と高い通過率を公表していますが、これは審査基準が明確で売掛先重視の審査を行っているためです。
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
              href="/articles/instant-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">即日ファクタリング10選</p>
              <p className="mt-1 text-sm text-text-light">
                最短10分〜当日入金のおすすめ会社を紹介
              </p>
            </Link>
            <Link
              href="/articles/for-sole-proprietor/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">個人事業主向けファクタリング5選</p>
              <p className="mt-1 text-sm text-text-light">
                少額・即日対応のサービスを比較
              </p>
            </Link>
            <Link
              href="/articles/low-fee/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料が安いファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                手数料相場と節約術をランキング形式で紹介
              </p>
            </Link>
            <Link
              href="/articles/online-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">オンライン完結ファクタリング8選</p>
              <p className="mt-1 text-sm text-text-light">
                来店不要で即日資金化できるサービスを紹介
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            審査に通りやすいファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            ファクタリング会社を審査通過率・手数料・入金スピードで徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
