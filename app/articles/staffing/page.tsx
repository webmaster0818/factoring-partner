import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "人材派遣向けファクタリング｜給与支払い資金の調達方法",
  description:
    "人材派遣業向けファクタリングを徹底解説。派遣スタッフへの給与先払い、入金サイトの長さなど人材派遣業特有の資金繰り課題と、おすすめファクタリング会社5選、活用事例、注意点を紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/staffing/",
  },
  openGraph: {
    title: "人材派遣向けファクタリング｜給与支払い資金の調達方法",
    description: "人材派遣業の資金繰り課題をファクタリングで解決。おすすめ5社と活用事例を紹介。",
    url: "https://factoring-partner.pages.dev/articles/staffing/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "派遣スタッフへの給与支払いが先行する",
    description:
      "人材派遣業の最大の課題は、派遣先企業からの入金前に派遣スタッフへの給与を支払わなければならないことです。派遣スタッフの給与は月末締め翌月15日払いや翌月25日払いが一般的ですが、派遣先企業からの入金は翌月末〜翌々月末。この1〜2ヶ月のギャップが資金繰りを圧迫します。派遣スタッフが100名の場合、月間の給与支払い額は3,000万〜5,000万円にも達します。",
  },
  {
    title: "売上の80〜85%が人件費で利益率が低い",
    description:
      "人材派遣業の売上に占める人件費率は80〜85%と極めて高く、営業利益率は2〜5%程度です。わずかな資金繰りの乱れが即座に経営危機につながります。派遣料金の値上げも容易ではなく、コスト削減余地も限られるため、キャッシュフロー管理が経営の生命線です。",
  },
  {
    title: "派遣スタッフの増員で資金需要が急増する",
    description:
      "大口案件の受注や季節的な需要増により、派遣スタッフを急に増員する必要が生じることがあります。20名の増員であれば、初月の給与だけで600〜1,000万円の追加資金が必要です。銀行融資の審査を待つ時間的余裕がないケースが多いです。",
  },
  {
    title: "社会保険料の負担が大きい",
    description:
      "派遣スタッフの社会保険料（健康保険・厚生年金・雇用保険・労災保険）は派遣元企業が負担します。スタッフ数が多いほど社会保険料の負担も大きく、毎月の支出は給与の約15%に相当します。年2回の労働保険料の概算・確定申告時にはまとまった資金が必要です。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features:
      "累計取引9.1万社超の業界最大手。人材派遣業の利用実績も豊富。買取金額に上限がなく、数千万円規模の大口案件にも対応。2社間・3社間の両方に対応し、全国対応・来店不要。最短2時間でのスピード入金。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "人材派遣業の商慣習を理解した審査。大口案件にも上限なしで対応。継続利用でリピート割引の交渉も可能。",
  },
  {
    name: "PMG",
    features:
      "法人特化のファクタリング会社で大口案件に強み。50万円〜2億円の買取に対応。専属担当者によるきめ細かいサポートが特徴。人材派遣業を含む幅広い業種に対応。",
    fee: "1%〜",
    speed: "最短即日",
    merit:
      "大口の人材派遣案件に最適。専属担当者が資金繰りの相談にも対応。手数料1%〜と低コスト。",
  },
  {
    name: "トップ・マネジメント",
    features:
      "手数料0.5%〜の業界最安水準。30万円〜3億円の幅広い買取額。2社間・3社間の両方に対応。対面での丁寧なコンサルティングにも定評あり。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "手数料が業界最安水準で、利益率の低い人材派遣業のコスト負担を最小限に抑えられる。3億円までの大口にも対応。",
  },
  {
    name: "QuQuMo",
    features:
      "完全オンライン完結型で手数料1%〜。必要書類は請求書と通帳の2点のみ。クラウドサインで契約完結。入金も最短2時間。手続きの簡便さが魅力。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "オンラインで即座に手続き完了。忙しい人材派遣会社の経営者に最適。手数料も業界最安水準。",
  },
  {
    name: "アクセルファクター",
    features:
      "審査通過率93.3%を公表。他社で断られた案件にも柔軟に対応。30万円〜1億円の買取に対応。最短即日入金。個人事業主にも対応。",
    fee: "2%〜",
    speed: "最短即日",
    merit:
      "審査通過率の高さで安心感がある。創業間もない派遣会社や赤字決算でも柔軟に対応。",
  },
];

const useCases = [
  {
    title: "事例1：大口案件受注で派遣スタッフ30名を急遽増員",
    industry: "一般人材派遣（従業員50名・派遣スタッフ200名）",
    problem:
      "大手製造メーカーから30名規模の派遣要請を受注。初月の派遣スタッフ給与（約900万円）と社会保険料（約135万円）の合計約1,035万円を、派遣先からの入金前に支払う必要があった。手元資金は500万円で不足。",
    solution:
      "既存の派遣先企業への売掛金2,000万円をビートレーディングで2社間ファクタリング。手数料4%で1,920万円を翌日に調達。増員分の給与・社会保険料に充当。",
    result:
      "30名の派遣を予定通り開始。大手メーカーとの取引実績が評価され、翌月以降も継続受注。年間売上が20%増加し、ファクタリング手数料を大幅に上回る利益を確保。",
  },
  {
    title: "事例2：派遣先の入金遅延でスタッフ給与の支払いが困難に",
    industry: "IT派遣（派遣スタッフ80名）",
    problem:
      "主要派遣先のIT企業から「システムトラブルにより入金が2週間遅延する」との連絡。該当する売掛金は1,500万円で、派遣スタッフ80名分の給与支払い日が迫っていた。",
    solution:
      "別の派遣先への売掛金1,200万円をQuQuMoで2社間ファクタリング。手数料3%で1,164万円を当日中に調達。翌日の給与支払いに充当。",
    result:
      "全スタッフへの給与を遅延なく支払い。スタッフの離職リスクを回避し、派遣先への信頼も維持。入金遅延分は2週間後に入金され、資金繰りは正常化。",
  },
  {
    title: "事例3：創業2年目の派遣会社が成長資金を確保",
    industry: "人材派遣（創業2年目・派遣スタッフ30名）",
    problem:
      "創業2年目で派遣スタッフ数が急成長。毎月の給与支払い額が900万円に達するが、派遣先からの入金サイトは60日。銀行融資は創業間もないため限度額が低く、成長に追いつかない。",
    solution:
      "毎月の売掛金のうち500万円をアクセルファクターで定期的にファクタリング。手数料6%で470万円を即日調達し、給与支払いの原資に充当。",
    result:
      "安定した給与支払いにより派遣スタッフの定着率が向上。新規派遣先の開拓にも積極的に取り組み、3年目には派遣スタッフ50名まで拡大。銀行融資の増額も実現し、ファクタリングへの依存度を段階的に低減。",
  },
];

const faqs = [
  {
    question: "人材派遣業でファクタリングを利用する最大のメリットは？",
    answer:
      "最大のメリットは、派遣先企業からの入金前に派遣スタッフの給与を確実に支払えることです。人材派遣業は売上の80〜85%が人件費であり、入金サイトのギャップが直接的に経営を脅かします。ファクタリングで売掛金を即日現金化すれば、給与遅延による離職リスクを回避し、安定した事業運営が可能になります。",
  },
  {
    question: "派遣先企業にファクタリングの利用が知られますか？",
    answer:
      "2社間ファクタリングを選択すれば、派遣先企業にファクタリングの利用は通知されません。人材派遣業では派遣先企業との信頼関係が極めて重要なため、ほとんどの派遣会社が2社間ファクタリングを選んでいます。3社間の場合は手数料が安い反面、派遣先の承諾が必要です。",
  },
  {
    question: "派遣スタッフの給与日に間に合うスケジュールで利用できますか？",
    answer:
      "はい、最短即日〜翌日入金のファクタリング会社であれば、給与支払日の前日に申し込んでも間に合うケースがあります。ただし、初回利用時は審査に時間がかかる場合があるため、余裕を持って3〜5営業日前に申し込むことをおすすめします。2回目以降はスピーディに対応してもらえます。",
  },
  {
    question: "人材派遣業のファクタリング手数料の相場はどのくらいですか？",
    answer:
      "人材派遣業の手数料相場は、2社間で5%〜15%、3社間で1%〜8%程度です。派遣先が大手企業や上場企業の場合は信用力が高いため、手数料が安くなります。人材派遣業は利益率が低いため、手数料の低いファクタリング会社を選ぶことが重要です。複数社から見積もりを取り比較しましょう。",
  },
  {
    question: "毎月継続してファクタリングを利用しても問題ありませんか？",
    answer:
      "法的には問題ありませんが、手数料が毎月積み重なるためコスト管理が重要です。例えば月間500万円を手数料5%でファクタリングすると、年間のコストは300万円になります。継続利用する場合はリピート割引のある会社を選び、並行して銀行融資の拡大や入金サイトの短縮交渉も進めましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "人材派遣向けファクタリング｜給与支払い資金の調達方法",
  description: "人材派遣業の資金繰り課題をファクタリングで解決。おすすめ5社と活用事例を紹介。",
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/staffing/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "人材派遣向けファクタリング", item: "https://factoring-partner.pages.dev/articles/staffing/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function StaffingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "人材派遣向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種特化ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            人材派遣向けファクタリング
            <br className="hidden md:block" />
            給与支払い資金の調達方法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            派遣スタッフへの給与支払いと派遣先からの入金タイミングのギャップを、ファクタリングで解消。おすすめ5社と活用事例を紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. 人材派遣業の資金繰り課題</a></li>
            <li><a href="#why-factoring" className="hover:underline">2. なぜ人材派遣業にファクタリングが最適か</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社5選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用事例3選</a></li>
            <li><a href="#cost" className="hover:underline">5. 手数料シミュレーション</a></li>
            <li><a href="#caution" className="hover:underline">6. 利用時の注意点</a></li>
            <li><a href="#flow" className="hover:underline">7. 利用の流れ</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">人材派遣業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">人材派遣業は「先に給与を支払い、後から派遣料金を受け取る」という構造上、慢性的な資金繰り課題を抱えています。</p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── なぜファクタリングが最適か ─── */}
        <section id="why-factoring" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">なぜ人材派遣業にファクタリングが最適か</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">給与支払い日に確実に資金を確保</h3>
              <p className="text-sm leading-relaxed text-text-light">派遣先への売掛金を最短即日で現金化し、スタッフの給与支払いに充てられます。給与遅延による離職リスクを防止。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">派遣先が大手企業なら審査に有利</h3>
              <p className="text-sm leading-relaxed text-text-light">派遣先が大手企業や上場企業であれば、ファクタリングの審査に通りやすく手数料も安くなります。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">増員・事業拡大に柔軟に対応</h3>
              <p className="text-sm leading-relaxed text-text-light">売上が増えれば売掛金も増えるため、ファクタリングで調達できる金額も自然と増加。成長に合わせた資金調達が可能。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">負債にならず銀行融資枠を温存</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリングは借入ではないため、銀行の融資枠を設備投資や運転資金に温存できます。</p>
            </div>
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">おすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">人材派遣業の資金繰りに強いファクタリング会社を5社厳選しました。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">活用事例3選</h2>
          <div className="space-y-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-2 text-lg font-bold text-primary">{useCase.title}</h3>
                <p className="mb-4 text-xs text-text-light">業種：{useCase.industry}</p>
                <div className="space-y-3">
                  <div className="rounded-lg bg-orange-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                    <p className="text-sm text-text-light">{useCase.problem}</p>
                  </div>
                  <div className="rounded-lg bg-primary-light p-4">
                    <p className="mb-1 text-sm font-semibold text-primary">解決策</p>
                    <p className="text-sm text-text-light">{useCase.solution}</p>
                  </div>
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                    <p className="text-sm text-text-light">{useCase.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 手数料シミュレーション ─── */}
        <section id="cost" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">手数料シミュレーション</h2>
          <p className="mb-6 leading-relaxed text-text-light">人材派遣業がファクタリングを利用した場合のコストをシミュレーションします。利益率の低い業種だからこそ、手数料の影響を事前に把握することが重要です。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">月間売掛金</th>
                  <th className="border border-primary p-3 text-left">手数料3%</th>
                  <th className="border border-primary p-3 text-left">手数料5%</th>
                  <th className="border border-primary p-3 text-left">手数料10%</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">500万円</td>
                  <td className="border border-border p-3">15万円/月（180万円/年）</td>
                  <td className="border border-border p-3">25万円/月（300万円/年）</td>
                  <td className="border border-border p-3">50万円/月（600万円/年）</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">1,000万円</td>
                  <td className="border border-border p-3">30万円/月（360万円/年）</td>
                  <td className="border border-border p-3">50万円/月（600万円/年）</td>
                  <td className="border border-border p-3">100万円/月（1,200万円/年）</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">3,000万円</td>
                  <td className="border border-border p-3">90万円/月（1,080万円/年）</td>
                  <td className="border border-border p-3">150万円/月（1,800万円/年）</td>
                  <td className="border border-border p-3">300万円/月（3,600万円/年）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-text-light">
            人材派遣業の営業利益率（2〜5%）を考慮すると、手数料10%での継続利用は利益を大きく圧迫します。手数料3%以下のファクタリング会社を選ぶか、必要最小限の金額だけファクタリングを利用することが重要です。
          </p>
        </section>

        {/* ── 派遣業の資金繰りフロー ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">人材派遣業の資金繰りフロー</h2>
          <p className="mb-6 leading-relaxed text-text-light">人材派遣業特有の資金繰りサイクルを理解し、ファクタリングを効果的に活用するポイントを解説します。</p>
          <div className="rounded-lg border border-border bg-section-bg p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">1</span>
                <p className="text-sm text-text-light">派遣スタッフが派遣先で勤務（当月）</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">2</span>
                <p className="text-sm text-text-light"><strong className="text-accent">派遣スタッフへ給与支払い（翌月15日〜25日）← ここで資金が必要</strong></p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">3</span>
                <p className="text-sm text-text-light">派遣先企業へ請求書を発行（翌月初旬）</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">4</span>
                <p className="text-sm text-text-light">派遣先企業から入金（翌月末〜翌々月末）</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">&#10003;</span>
                <p className="text-sm text-text-light"><strong className="text-secondary">ファクタリングで請求書を即日資金化 → 給与支払いに充当</strong></p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            このように、ファクタリングは「給与支払い日」と「派遣料金の入金日」のギャップを埋めるために活用します。請求書を発行した翌日にファクタリングを利用すれば、給与支払い日に確実に資金を確保できます。
          </p>
        </section>

        {/* ── 派遣業特有のリスク管理 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">人材派遣業特有のファクタリングリスク管理</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">派遣先の途中解約リスク</h3>
              <p className="text-sm leading-relaxed text-text-light">
                派遣先が派遣契約を途中で解約した場合、当月の売掛金が減少する可能性があります。ファクタリングで売却した売掛金の元となる派遣契約が途中解約された場合の取り扱いを、事前にファクタリング会社に確認しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">スタッフの急な退職リスク</h3>
              <p className="text-sm leading-relaxed text-text-light">
                派遣スタッフが急に退職した場合、請求金額が当初の見込みより減少することがあります。ファクタリングは請求書（確定済みの売掛金）をベースにするため、請求書発行後に金額変更がないよう、正確な稼働時間を把握してから利用しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">複数派遣先への分散利用</h3>
              <p className="text-sm leading-relaxed text-text-light">
                特定の派遣先への売掛金だけをファクタリングするのではなく、複数の派遣先の売掛金を分散して利用することで、リスクを分散できます。1社への依存度が高すぎると、その派遣先の入金遅延時にリスクが集中します。
              </p>
            </div>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用時の注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">手数料と営業利益率のバランスを管理する</h3>
              <p className="text-sm leading-relaxed text-text-light">人材派遣業の営業利益率は2〜5%と低いため、ファクタリング手数料が利益を上回るリスクがあります。毎月の手数料コストを把握し、採算が合う範囲で利用しましょう。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">派遣先との派遣契約書を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">派遣契約に債権譲渡禁止条項が含まれていないか確認しましょう。2社間ファクタリングなら通知不要ですが、契約上のリスクを事前に把握しておくことが重要です。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">ファクタリング依存からの脱却計画を立てる</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリングはあくまで一時的な資金調達手段です。並行して、銀行融資の拡大、派遣先との入金サイト短縮交渉、自己資本の蓄積に取り組みましょう。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">労働基準法の賃金支払いルールを遵守する</h3>
              <p className="text-sm leading-relaxed text-text-light">派遣スタッフへの給与は労働基準法で「毎月1回以上、一定の期日に支払う」ことが義務付けられています。ファクタリングを活用してでも、給与の支払い遅延は絶対に避けましょう。</p>
            </div>
          </div>
        </section>

        {/* ── 銀行融資との比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">人材派遣業：ファクタリング vs 銀行融資</h2>
          <p className="mb-6 leading-relaxed text-text-light">人材派遣業における資金調達手段として、ファクタリングと銀行融資を比較します。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">比較項目</th>
                  <th className="border border-primary p-3 text-left">ファクタリング</th>
                  <th className="border border-primary p-3 text-left">銀行融資</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">調達スピード</td>
                  <td className="border border-border p-3">最短即日〜翌日</td>
                  <td className="border border-border p-3">2週間〜1ヶ月</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">コスト（1,000万円の場合）</td>
                  <td className="border border-border p-3">30〜100万円/回（手数料3〜10%）</td>
                  <td className="border border-border p-3">20〜50万円/年（年利2〜5%）</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">適した用途</td>
                  <td className="border border-border p-3">毎月の給与支払い・急な増員</td>
                  <td className="border border-border p-3">設備投資・長期運転資金</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">担保・保証人</td>
                  <td className="border border-border p-3">不要</td>
                  <td className="border border-border p-3">必要な場合が多い</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">バランスシート</td>
                  <td className="border border-border p-3">負債にならない</td>
                  <td className="border border-border p-3">負債として計上</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">調達額の柔軟性</td>
                  <td className="border border-border p-3">売掛金額に応じて変動</td>
                  <td className="border border-border p-3">融資枠の範囲内で固定</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            人材派遣業では、銀行融資で基盤となる運転資金を確保し、ファクタリングは給与支払い日前の一時的な資金ニーズに活用するのが最もコスト効率の良い方法です。
          </p>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用の流れ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "ファクタリング会社に相談", desc: "派遣先への売掛金額、入金サイト、必要資金額と時期を伝えます。人材派遣業の実績がある会社を選びましょう。" },
              { step: "2", title: "書類を提出", desc: "請求書、本人確認書類、通帳コピー、派遣契約書などを提出。オンラインでアップロードできる会社が便利です。" },
              { step: "3", title: "審査・見積もり", desc: "派遣先企業の信用力を中心に審査。大手企業への派遣であれば審査はスムーズです。最短30分〜数時間で結果。" },
              { step: "4", title: "契約・入金", desc: "見積もりに同意したら契約締結。最短即日〜翌日で指定口座に入金。給与支払い日に間に合うスケジュールで利用。" },
              { step: "5", title: "派遣先からの入金後に送金", desc: "2社間ファクタリングの場合、派遣先から入金後にファクタリング会社へ送金。3社間の場合は派遣先が直接ファクタリング会社に支払い。" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">{item.step}</span>
                <div>
                  <h3 className="font-bold text-text-main">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 会計処理 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">人材派遣業のファクタリング会計処理</h2>
          <p className="mb-6 leading-relaxed text-text-light">人材派遣業がファクタリングを利用した場合の会計処理を解説します。月次の利用が多い業種のため、正確な仕訳が重要です。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 font-bold text-text-main">仕訳例：派遣先への売掛金500万円を手数料5%でファクタリング</h3>
            <div className="space-y-4">
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-2 text-sm font-semibold text-primary">ファクタリング契約時</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-text-light">
                  <p>（借方）未収入金 4,750,000円</p>
                  <p>（貸方）売掛金 5,000,000円</p>
                  <p>（借方）売掛債権売却損 250,000円</p>
                  <p></p>
                </div>
              </div>
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-2 text-sm font-semibold text-primary">入金時</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-text-light">
                  <p>（借方）普通預金 4,750,000円</p>
                  <p>（貸方）未収入金 4,750,000円</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-text-light">毎月利用する場合、年間の売掛債権売却損が大きくなります。例えば月500万円を手数料5%で12ヶ月利用すると年間300万円のコスト。決算書にも反映されるため、コスト管理を徹底しましょう。</p>
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

        {/* ── 派遣規模別の活用法 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">派遣スタッフ数別のファクタリング活用法</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">小規模（派遣スタッフ10〜30名）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                月間の給与支払い額は300〜900万円程度。QuQuMoやPAYTODAYなどオンライン完結型のサービスが手軽で手数料も安い。必要な月だけスポット利用するのがコスト効率が良いです。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">中規模（派遣スタッフ30〜100名）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                月間の給与支払い額は900〜3,000万円。ビートレーディングやPMGなど大口対応の会社が適しています。継続利用でリピート割引を獲得し、コストを最適化しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">大規模（派遣スタッフ100名以上）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                月間の給与支払い額は3,000万円以上。トップ・マネジメント（3億円まで）やビートレーディング（上限なし）など、大口に強い会社と専属担当者体制で取引。3社間ファクタリングで手数料を最小化することも検討しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/it-industry/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">IT業界向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">SES・受託開発の資金繰り改善</p>
            </Link>
            <Link href="/articles/large-amount/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">大口ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">1億円超の高額取引に対応</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツ</p>
            </Link>
            <Link href="/articles/cashflow-tips/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">資金繰り改善方法7選</p>
              <p className="mt-1 text-sm text-text-light">ファクタリング以外の選択肢も解説</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">人材派遣に強いファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            給与支払い資金の調達に最適なファクタリング会社を手数料・入金速度で徹底比較。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
