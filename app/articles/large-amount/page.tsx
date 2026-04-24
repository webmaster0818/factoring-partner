import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "大口ファクタリング｜1億円超の高額取引に対応するおすすめ会社",
  description:
    "1億円超の大口ファクタリングに対応するおすすめ会社5選を徹底比較。大口取引の手数料相場、審査のポイント、活用事例、注意点を解説。建設業・製造業・人材派遣業など大きな売掛金を持つ企業に最適な情報を提供します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/large-amount/",
  },
  openGraph: {
    title: "大口ファクタリング｜1億円超の高額取引に対応するおすすめ会社",
    description: "1億円超対応の大口ファクタリング会社5選。手数料・審査・活用事例を解説。",
    url: "https://factoring-partner.pages.dev/articles/large-amount/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    maxAmount: "上限なし",
    fee: "2%〜",
    speed: "最短2時間",
    features: "累計買取額1,300億円超の実績。買取金額に上限がなく、数億円規模の大口案件にも対応。2社間・3社間の両方に対応し、全国対応・来店不要。",
    merit: "大口案件の実績が豊富。上限なしで柔軟に対応。大手ならではの資金力と安心感。",
  },
  {
    name: "トップ・マネジメント",
    maxAmount: "3億円",
    fee: "0.5%〜",
    speed: "最短即日",
    features: "手数料0.5%〜の業界最安水準。3億円までの大口案件に対応。2社間・3社間の両方に対応。ゼロファク（補助金連携）サービスも特徴的。",
    merit: "3億円までの大口に対応し、手数料が業界最安水準。大口ほど手数料交渉がしやすい。",
  },
  {
    name: "PMG",
    maxAmount: "2億円",
    fee: "1%〜",
    speed: "最短即日",
    features: "法人特化で大口案件に強み。50万円〜2億円の幅広い買取額。専属担当者による丁寧なサポート。建設業・運送業・人材派遣業の大口利用実績が豊富。",
    merit: "専属担当者が大口案件の資金繰りをトータルサポート。法人向けの手厚い対応が魅力。",
  },
  {
    name: "日本中小企業金融サポート機構",
    maxAmount: "上限なし",
    fee: "1.5%〜",
    speed: "最短即日",
    features: "一般社団法人運営の非営利型。買取金額に上限なし。認定経営革新等支援機関としての信頼性。法人・個人事業主ともに対応。",
    merit: "非営利運営で手数料が低い。大口でも上限なしで対応。資金繰り全般のコンサルティングも提供。",
  },
  {
    name: "ベストファクター",
    maxAmount: "1億円",
    fee: "2%〜",
    speed: "最短即日",
    features: "柔軟な審査基準で他社に断られた大口案件にも対応。30万円〜1億円の幅広い買取額。財務コンサルティングサービスも提供。",
    merit: "審査が柔軟で大口案件の受け入れ幅が広い。財務コンサルティングで長期的な資金計画もサポート。",
  },
];

const faqs = [
  {
    question: "1億円以上のファクタリングに対応している会社はありますか？",
    answer:
      "はい、ビートレーディングや日本中小企業金融サポート機構は買取金額に上限がなく、1億円以上の大口案件にも対応しています。トップ・マネジメントは3億円まで、PMGは2億円まで対応しています。大口案件の場合は事前に電話で相談し、対応可能か確認してから申し込むとスムーズです。",
  },
  {
    question: "大口ファクタリングの手数料は安くなりますか？",
    answer:
      "一般的に、ファクタリングの金額が大きいほど手数料率は低くなる傾向があります。数百万円の案件で5%〜10%の手数料が、数千万円〜1億円規模では2%〜5%程度に下がることが多いです。大口案件は交渉の余地があるため、複数社から見積もりを取り、最も有利な条件を引き出しましょう。",
  },
  {
    question: "大口ファクタリングの審査は厳しくなりますか？",
    answer:
      "大口案件は金額が大きいため、通常よりも審査が慎重になる傾向があります。特に売掛先の信用力、売掛金の確実性、過去の取引履歴が重点的にチェックされます。ただし、売掛先が大手上場企業や官公庁であれば、金額が大きくても審査は通りやすいです。",
  },
  {
    question: "大口ファクタリングの入金にはどのくらい時間がかかりますか？",
    answer:
      "大口案件は審査に時間がかかる傾向があり、即日入金が難しい場合があります。一般的には2〜5営業日程度を見込んでおくと安心です。ただし、リピーターで売掛先の情報が既に登録されている場合は、大口でも最短即日対応が可能なケースもあります。",
  },
  {
    question: "大口ファクタリングで3社間を選ぶメリットは？",
    answer:
      "大口案件で3社間ファクタリングを選ぶ最大のメリットは手数料の低さです。数千万円〜1億円規模の案件で2社間の手数料が5%なら500〜5,000万円のコストですが、3社間で2%なら200〜2,000万円と大幅に削減できます。売掛先との関係が良好で通知に問題がなければ、大口案件では3社間を検討する価値があります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "大口ファクタリング｜1億円超の高額取引に対応するおすすめ会社",
  description: "1億円超対応の大口ファクタリング会社5選。手数料・審査・活用事例を解説。",
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/large-amount/" },
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
    { "@type": "ListItem", position: 3, name: "大口ファクタリング", item: "https://factoring-partner.pages.dev/articles/large-amount/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function LargeAmountPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "大口ファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">金額別ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            大口ファクタリング
            <br className="hidden md:block" />
            1億円超の高額取引に対応するおすすめ会社
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            数千万円〜1億円超の大口ファクタリングに対応するおすすめ会社を5社厳選。大口取引の手数料相場、審査のポイント、活用事例を紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#what-is" className="hover:underline">1. 大口ファクタリングとは</a></li>
            <li><a href="#recommended" className="hover:underline">2. 大口対応おすすめ5選</a></li>
            <li><a href="#fee" className="hover:underline">3. 大口ファクタリングの手数料相場</a></li>
            <li><a href="#screening" className="hover:underline">4. 審査のポイント</a></li>
            <li><a href="#cases" className="hover:underline">5. 活用事例</a></li>
            <li><a href="#2sha-vs-3sha" className="hover:underline">6. 大口案件は2社間と3社間どちらが有利か</a></li>
            <li><a href="#caution" className="hover:underline">7. 利用時の注意点</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 大口ファクタリングとは ─── */}
        <section id="what-is" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大口ファクタリングとは</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            大口ファクタリングとは、一般的に1,000万円以上の高額な売掛金を対象としたファクタリングサービスを指します。建設業、製造業、人材派遣業、運送業など、1件あたりの取引額が大きい業種では、数千万円〜数億円規模のファクタリングが必要になることがあります。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            大口ファクタリングは少額に比べて手数料率が低くなる傾向がある一方、審査がより慎重に行われます。対応できるファクタリング会社も限られるため、大口に強い会社を選ぶことが重要です。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            特に1億円を超える超大口案件では、ファクタリング会社自体に十分な資金力が求められます。累計買取実績が1,000億円を超えるビートレーディングや、3億円まで対応するトップ・マネジメントなど、実績のある会社を選びましょう。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">大口ファクタリングの特徴</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>1,000万円〜数億円規模の大口売掛金に対応</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>手数料率は少額より低い傾向（1%〜5%程度）</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>審査はやや慎重（売掛先の信用力が特に重要）</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>専属担当者が付くケースが多い</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>3社間ファクタリングで大幅なコスト削減が可能</span></li>
            </ul>
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大口対応おすすめファクタリング5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">
            1億円超の大口取引に対応できるファクタリング会社を5社厳選しました。買取上限額、手数料の安さ、入金スピード、サポート体制を総合的に評価しています。
          </p>
          <div className="space-y-6">
            {recommendedCompanies.map((company, index) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">{company.name}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{company.features}</p>
                    <div className="mt-4 grid gap-3 rounded-lg bg-section-bg p-4 md:grid-cols-3">
                      <div>
                        <p className="text-xs font-semibold text-text-light">最大買取額</p>
                        <p className="font-bold text-accent">{company.maxAmount}</p>
                      </div>
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

        {/* ── 手数料相場 ─── */}
        <section id="fee" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大口ファクタリングの手数料相場</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            大口案件の手数料は金額が大きいほど低くなる傾向があります。金額帯別の手数料目安を確認しましょう。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            大口案件は手数料率のわずかな差が数百万円のコスト差になるため、複数社からの見積もり比較が特に重要です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">売掛金額</th>
                  <th className="border border-primary p-3 text-left">2社間ファクタリング</th>
                  <th className="border border-primary p-3 text-left">3社間ファクタリング</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">500万円〜1,000万円</td>
                  <td className="border border-border p-3">5%〜12%</td>
                  <td className="border border-border p-3">2%〜7%</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">1,000万円〜5,000万円</td>
                  <td className="border border-border p-3">3%〜8%</td>
                  <td className="border border-border p-3">1%〜5%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">5,000万円〜1億円</td>
                  <td className="border border-border p-3">2%〜5%</td>
                  <td className="border border-border p-3">1%〜3%</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">1億円超</td>
                  <td className="border border-border p-3">1%〜3%</td>
                  <td className="border border-border p-3">0.5%〜2%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-text-light">大口案件は手数料率が低くても金額が大きいため、わずかな手数料率の差が数百万円の差になります。必ず複数社から見積もりを取り、交渉しましょう。</p>
        </section>

        {/* ── 審査のポイント ─── */}
        <section id="screening" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大口ファクタリングの審査ポイント</h2>
          <div className="space-y-4">
            {[
              { title: "売掛先の信用力", desc: "最も重要な審査項目。売掛先が上場企業、大手企業、官公庁であれば非常に有利。帝国データバンクや東京商工リサーチの評点が参考にされます。" },
              { title: "売掛金の確実性", desc: "請求書が発行済みか、納品・検収が完了しているか、過去に同じ売掛先で支払い遅延がないかを確認されます。" },
              { title: "取引の継続性", desc: "長期的な取引関係がある売掛先の方が評価されます。新規取引先への大口売掛金は審査がやや慎重になります。" },
              { title: "利用企業の財務状況", desc: "大口案件では利用企業の決算書も確認されるケースがあります。赤字でも売掛先が優良であれば通過可能ですが、書類準備が必要です。" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 活用事例 ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">活用事例</h2>
          <div className="space-y-6">
            {[
              {
                title: "事例1：建設会社が1.5億円の公共工事に対応",
                industry: "建設業（年商10億円）",
                problem: "地方自治体の大型公共工事（1.5億円）を受注。着工に必要な資材費・外注費5,000万円を調達する必要があったが、既存の銀行融資枠は使い切っていた。",
                solution: "完了済み工事の売掛金8,000万円をビートレーディングで2社間ファクタリング。手数料3%で7,760万円を3営業日で調達。",
                result: "公共工事を予定通り着工。工期内に完了し、追加の公共工事も受注。年商が15億円に成長。",
              },
              {
                title: "事例2：製造業が急な増産要請に対応",
                industry: "自動車部品製造（年商5億円）",
                problem: "大手自動車メーカーから月産量2倍の増産要請。原材料の追加仕入れに3,000万円が必要だが、既存の売掛金（90日サイト）が1億円あり手元資金が不足。",
                solution: "売掛金5,000万円をトップ・マネジメントで3社間ファクタリング。手数料1.5%で4,925万円を5営業日で調達。自動車メーカーにも事前に了承を得た。",
                result: "増産要請に対応し取引量が拡大。3社間のため手数料が低く、コスト負担も最小限。年間取引額が30%増加。",
              },
            ].map((useCase) => (
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

        {/* ── 2社間 vs 3社間 ─── */}
        <section id="2sha-vs-3sha" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大口案件は2社間と3社間どちらが有利か</h2>
          <p className="mb-6 leading-relaxed text-text-light">大口ファクタリングでは2社間と3社間の手数料差が大きくなるため、どちらを選ぶかが重要な判断ポイントです。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">比較項目</th>
                  <th className="border border-primary p-3 text-left">2社間ファクタリング</th>
                  <th className="border border-primary p-3 text-left">3社間ファクタリング</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">手数料（1億円の場合）</td>
                  <td className="border border-border p-3">200〜500万円</td>
                  <td className="border border-border p-3">50〜200万円</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">売掛先への通知</td>
                  <td className="border border-border p-3">不要</td>
                  <td className="border border-border p-3">必要</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">審査スピード</td>
                  <td className="border border-border p-3">早い（即日〜3日）</td>
                  <td className="border border-border p-3">やや遅い（3〜7日）</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">おすすめケース</td>
                  <td className="border border-border p-3">売掛先に知られたくない</td>
                  <td className="border border-border p-3">コスト最優先</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            大口案件では手数料の差額が数百万円になることもあります。売掛先との関係が良好でファクタリングの通知に問題がなければ、3社間を選ぶことで大幅なコスト削減が可能です。
          </p>
        </section>

        {/* ── 大口ファクタリングの利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大口ファクタリングの利用の流れ</h2>
          <p className="mb-6 leading-relaxed text-text-light">大口ファクタリングは少額と比べて審査がやや慎重で、手順も丁寧に進める必要があります。</p>
          <div className="space-y-4">
            {[
              { step: "1", title: "電話で事前相談", desc: "大口案件はまず電話で相談し、対応可能か確認するのがスムーズです。売掛金額、売掛先の企業名、支払い期日、必要な資金額と時期を伝えましょう。" },
              { step: "2", title: "書類を提出", desc: "請求書、本人確認書類、通帳コピー、決算書（直近2期分）、法人登記簿謄本などを提出。大口案件では決算書の提出が求められるケースが多いです。" },
              { step: "3", title: "審査（2〜5営業日）", desc: "売掛先の信用調査、売掛金の確実性確認、利用企業の財務分析が行われます。帝国データバンクや東京商工リサーチのデータも参照されます。" },
              { step: "4", title: "見積もり・条件交渉", desc: "手数料率、事務手数料、入金タイミングの見積もりが提示されます。大口案件は交渉の余地があるため、複数社の見積もりを比較して交渉しましょう。" },
              { step: "5", title: "契約・入金", desc: "見積もりに合意したら契約締結。大口案件は対面での契約が必要な場合もあります。入金は契約後1〜3営業日が一般的です。" },
              { step: "6", title: "売掛金の回収・送金", desc: "売掛先から入金後、ファクタリング会社に送金します。3社間の場合は売掛先から直接送金されます。" },
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

        {/* ── 大口案件に適した業種 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大口ファクタリングが多い業種</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">建設業</h3>
              <p className="text-sm leading-relaxed text-text-light">公共工事や大型民間工事で数千万円〜数億円の売掛金が発生。入金サイトが60〜120日と長く、大口ファクタリングのニーズが最も高い。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">製造業</h3>
              <p className="text-sm leading-relaxed text-text-light">大手メーカーへの部品供給で数千万円規模の売掛金が発生。増産要請への対応で急に仕入れ資金が必要になるケースが多い。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">人材派遣業</h3>
              <p className="text-sm leading-relaxed text-text-light">大手企業への派遣で月間数千万円の売掛金が発生。毎月の給与支払い（先払い）のために大口ファクタリングを定期的に利用するケースが多い。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">運送業・物流業</h3>
              <p className="text-sm leading-relaxed text-text-light">大手荷主との取引で月間数千万円の売掛金が発生。燃料費・人件費が先行して必要なため、ファクタリングで資金繰りを改善するニーズが高い。</p>
            </div>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用時の注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">必ず複数社から見積もりを取る</h3>
              <p className="text-sm leading-relaxed text-text-light">大口案件は手数料率のわずかな差が大きな金額差になります。最低3社から見積もりを取り、手数料率、事務手数料、入金スピードを比較しましょう。交渉次第で手数料が下がる場合もあります。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">契約書の内容を弁護士に確認</h3>
              <p className="text-sm leading-relaxed text-text-light">大口案件は金額が大きいため、契約書の内容を弁護士に確認してもらうことをおすすめします。特に償還請求権（ノンリコース/リコース）、手数料以外の費用、違約金条項を確認しましょう。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">分割ファクタリングも検討する</h3>
              <p className="text-sm leading-relaxed text-text-light">1億円の売掛金を全額ファクタリングするのではなく、必要な金額だけ部分的にファクタリングすることで手数料コストを抑えられます。多くの会社が部分買取に対応しています。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">ファクタリング会社の資金力を確認</h3>
              <p className="text-sm leading-relaxed text-text-light">大口案件に対応するには、ファクタリング会社自体に十分な資金力が必要です。実績（累計買取額）や運営会社の規模を確認し、確実に入金してもらえる会社を選びましょう。</p>
            </div>
          </div>
        </section>

        {/* ── 大口ファクタリングの会計処理 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大口ファクタリングの会計処理</h2>
          <p className="mb-6 leading-relaxed text-text-light">大口ファクタリングは金額が大きいため、会計処理の正確さが特に重要です。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 font-bold text-text-main">仕訳例：売掛金5,000万円を手数料3%でファクタリング</h3>
            <div className="space-y-4">
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-2 text-sm font-semibold text-primary">ファクタリング契約時</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-text-light">
                  <p>（借方）未収入金 48,500,000円</p>
                  <p>（貸方）売掛金 50,000,000円</p>
                  <p>（借方）売掛債権売却損 1,500,000円</p>
                  <p></p>
                </div>
              </div>
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-2 text-sm font-semibold text-primary">入金時</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-text-light">
                  <p>（借方）普通預金 48,500,000円</p>
                  <p>（貸方）未収入金 48,500,000円</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-text-light">
              大口案件では手数料の金額も大きくなります（この例では150万円）。「売掛債権売却損」として適切に費用計上し、決算書に正確に反映させましょう。税理士との連携が必須です。
            </p>
          </div>
        </section>

        {/* ── 大口ファクタリングのよくある質問の前に追加コンテンツ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大口ファクタリングの手数料を下げるコツ</h2>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">3社間ファクタリングを検討する</strong>：売掛先との関係が良好なら3社間を選ぶことで手数料を大幅に削減可能。1億円の案件で2%の差は200万円の違いになります。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">複数社から見積もりを取る</strong>：大口案件は交渉の余地が大きいため、最低3社から見積もりを取り、最も有利な条件を引き出しましょう。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">リピーターとして継続利用する</strong>：同じファクタリング会社を継続利用することでリピート割引が適用される場合があります。初回の取引で信頼関係を構築しましょう。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">売掛先が上場企業の売掛金を優先的に利用</strong>：売掛先の信用力が高いほど手数料は下がります。上場企業や官公庁への売掛金を優先的にファクタリングに使いましょう。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">部分ファクタリングを活用する</strong>：全額ではなく必要な金額だけをファクタリングすることで、手数料の総額を抑えられます。</span></li>
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

        {/* ── 大口ファクタリングの必要書類 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大口ファクタリングの必要書類</h2>
          <p className="mb-6 leading-relaxed text-text-light">大口案件は通常のファクタリングよりも多くの書類が求められる傾向があります。事前に準備しておきましょう。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">請求書</strong>：対象の売掛金に対する請求書の原本またはコピー</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">本人確認書類</strong>：代表者の運転免許証またはマイナンバーカード</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">通帳コピー（3〜6ヶ月分）</strong>：売掛先からの入金履歴を確認するため</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">決算書（直近2期分）</strong>：大口案件では利用企業の財務状況も確認される</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">法人登記簿謄本</strong>：法人の実在確認のため</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">売掛先との契約書</strong>：取引関係の継続性と契約内容の確認</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">納品書・検収書</strong>：売掛金の確実性を証明するため</span></li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            書類を事前に揃えておくと審査がスムーズに進み、入金までの期間を短縮できます。特に決算書は取得に時間がかかる場合があるため、早めに準備しましょう。
          </p>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/small-amount/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">少額ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">1万円から利用できるおすすめ5選</p>
            </Link>
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">おすすめ5選と活用事例</p>
            </Link>
            <Link href="/articles/2sha-vs-3sha/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">2社間 vs 3社間ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">違いと選び方を解説</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツ</p>
            </Link>
          </div>
        </section>

        {/* ── 大口案件で気をつけるべき契約条項 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大口案件で確認すべき契約条項</h2>
          <p className="mb-6 leading-relaxed text-text-light">金額が大きいからこそ、契約内容の確認は慎重に行いましょう。特に以下の条項を確認してください。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">償還請求権（リコース/ノンリコース）</strong>：ノンリコース（償還請求権なし）であれば、売掛先が倒産しても返金義務はありません。大口案件では必ずノンリコースを確認しましょう。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">手数料以外の費用</strong>：事務手数料、印紙代、登記費用（債権譲渡登記）など、手数料以外の費用が発生する場合があります。見積もりの段階で全費用を確認しましょう。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">違約金条項</strong>：売掛先からの入金後にファクタリング会社への送金が遅れた場合の違約金が設定されていることがあります。金額と条件を確認しましょう。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">債権譲渡登記の有無</strong>：大口案件では債権譲渡登記を求められることがあります。登記費用（数万円）と、登記の存続期間を確認しましょう。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">契約書の交付</strong>：正式な契約書が交付されるか必ず確認。契約書を交付しない業者は避けましょう。弁護士によるリーガルチェックも検討する価値があります。</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 大口ファクタリングの成功パターン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">大口ファクタリングを成功させるポイント</h2>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">まず小口で実績を作る</strong>：同じファクタリング会社で先に少額の取引を行い、信頼関係を構築してから大口案件を相談すると、手数料交渉がしやすくなります。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">売掛先の情報を詳しく提供する</strong>：売掛先の会社概要、決算情報（上場企業の場合はIR情報）、過去の取引履歴を積極的に提供すると、審査が有利に進みます。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">複数の売掛先に分散する</strong>：1つの売掛先に集中するよりも、複数の売掛先の売掛金を組み合わせてファクタリングする方がリスク分散になり、審査も通りやすくなります。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">専属担当者との関係を大切にする</strong>：大口案件では専属担当者が付くことが多いです。定期的なコミュニケーションで信頼関係を築くと、急な資金ニーズにも迅速に対応してもらえます。</span></li>
            </ul>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">大口対応のファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            数千万円〜1億円超の大口ファクタリングに対応する会社を手数料・買取上限額で比較。
            建設業・製造業・人材派遣業など大きな売掛金を持つ企業に最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
