import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリングの資金調達事例集｜業種別成功事例10選",
  description:
    "ファクタリングで資金調達に成功した10の事例を業種別に紹介。建設業・IT・製造業・医療・飲食業など、実際の活用シーンと成果を詳しく解説します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/case-studies/",
  },
  openGraph: {
    title: "ファクタリングの資金調達事例集｜業種別成功事例10選",
    description: "業種別のファクタリング成功事例10選。実際の活用シーンと成果を紹介。",
    url: "https://factoring-partner.pages.dev/articles/case-studies/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const caseStudies = [
  { industry: "建設業", company: "A建設（従業員15名）", amount: "800万円", fee: "5%（40万円）", speed: "即日", situation: "公共工事の元請けからの入金が90日後。下請け業者への支払い800万円が先行して必要だった。", result: "ファクタリングで即日資金調達し、下請けへの支払いを完了。工期通りに工事を完了させ、元請けとの信頼関係を維持。" },
  { industry: "IT・システム開発", company: "B株式会社（従業員30名）", amount: "1,200万円", fee: "3%（36万円）", speed: "2時間", situation: "大手SIerからのシステム開発案件。検収完了後の入金が60日後。エンジニア10名の月額人件費の支払いが厳しい状況。", result: "売掛金1,200万円をファクタリングで即日現金化。エンジニアの給与支払いを安定させ、次期プロジェクトの受注にも成功。" },
  { industry: "製造業", company: "C製作所（従業員8名）", amount: "500万円", fee: "6%（30万円）", speed: "即日", situation: "自動車メーカーからの部品発注が急増。材料の追加仕入れ500万円が必要だが、前月の売掛金がまだ入金されていない。", result: "前月分の売掛金をファクタリングで現金化し、材料を仕入れ。急増する受注に対応でき、売上を前年比30%増加させた。" },
  { industry: "医療（クリニック）", company: "Dクリニック（スタッフ12名）", amount: "600万円", fee: "2%（12万円）", speed: "翌日", situation: "診療報酬の入金は2ヶ月後。新しい医療機器の導入費用600万円が必要だが、手元資金が不足。", result: "診療報酬債権をファクタリング（3社間）で現金化。低手数料で資金を調達し、最新の医療機器を導入。患者満足度が向上。" },
  { industry: "運送業", company: "E運送（車両20台）", amount: "350万円", fee: "7%（24.5万円）", speed: "即日", situation: "燃料費の高騰でコストが増大。大手荷主からの入金は翌月末で、今月の燃料費・人件費の支払いが困難。", result: "確定済みの配送代金をファクタリングで即日現金化。燃料費を確保し、配送サービスを停止することなく事業継続。" },
  { industry: "飲食業", company: "Fレストラン（3店舗）", amount: "200万円", fee: "8%（16万円）", speed: "即日", situation: "法人宴会の売掛金が複数件発生。新店舗オープンの内装工事費200万円の支払いが迫っているが、売掛金の入金は来月。", result: "法人宴会の売掛金をファクタリングで現金化し、内装工事費を支払い。予定通り新店舗をオープンし、売上拡大に成功。" },
  { industry: "介護事業", company: "G介護サービス（スタッフ25名）", amount: "450万円", fee: "2.5%（11.25万円）", speed: "3日", situation: "介護報酬の入金は2ヶ月後。人材不足に対応するため、新たにスタッフ5名を採用する費用が必要。", result: "介護報酬債権を3社間ファクタリングで現金化。低手数料で資金調達し、新規スタッフを採用。サービス品質の維持に成功。" },
  { industry: "広告・クリエイティブ", company: "H広告（従業員5名）", amount: "300万円", fee: "5%（15万円）", speed: "即日", situation: "大手広告代理店からのWebサイト制作案件。納品後の入金は90日後。外注デザイナーへの支払いが先行して必要。", result: "制作費の売掛金をファクタリングで現金化。外注費を速やかに支払い、クリエイターとの良好な関係を維持。" },
  { industry: "農業", company: "I農園（家族経営）", amount: "150万円", fee: "9%（13.5万円）", speed: "即日", situation: "JAへの出荷代金の入金が翌月末。来シーズンの種苗・肥料の購入費用150万円を早急に確保する必要がある。", result: "出荷代金の売掛金をファクタリングで現金化。翌シーズンの準備を遅れなく進め、作付面積を拡大。" },
  { industry: "人材派遣", company: "Jスタッフィング（派遣社員50名）", amount: "1,000万円", fee: "4%（40万円）", speed: "即日", situation: "派遣先企業からの入金は翌月末。派遣社員50名の給与（月額1,000万円）の支払いが毎月先行して必要。", result: "派遣料金の売掛金をファクタリングで毎月現金化。派遣社員への給与支払いを安定させ、新規派遣先の開拓に注力できるようになった。" },
];

const faqs = [
  {
    question: "ファクタリングの成功事例に共通するポイントは？",
    answer:
      "成功事例に共通するのは、①売掛先の信用力が高い（大手企業・官公庁など）②入金サイトが明確に決まっている③ファクタリングの手数料を織り込んだ資金計画がある④急ぎの資金需要に対して迅速に行動した⑤複数社の見積もりを比較して最適な条件を選んだ、という5つのポイントです。",
  },
  {
    question: "ファクタリングで失敗するケースはありますか？",
    answer:
      "失敗するケースとしては、①悪徳業者を利用してしまった②手数料を考慮せずに利用して利益がなくなった③ファクタリングに依存しすぎてコストが膨らんだ④契約内容を確認せずにウィズリコースで契約してしまった、などがあります。事前の情報収集と複数社比較が失敗を防ぐ鍵です。",
  },
  {
    question: "どのくらいの金額からファクタリングを利用できますか？",
    answer:
      "会社によって異なりますが、ラボルは1万円から、アクセルファクターは30万円から対応しています。大手のビートレーディングは上限なしで、数千万円〜数億円規模の案件にも対応可能です。自社の売掛金額に合った会社を選びましょう。",
  },
  {
    question: "業種によって手数料は変わりますか？",
    answer:
      "業種自体で手数料が変わるわけではありませんが、売掛先の信用力によって手数料は変動します。大手企業や官公庁への売掛金は低い手数料で利用でき、小規模企業や個人への売掛金は高めになる傾向があります。業種に関わらず、売掛先の信用力が重要です。",
  },
  {
    question: "事例のような成功を実現するにはどうすればよいですか？",
    answer:
      "まず複数のファクタリング会社に見積もりを依頼し、手数料とサービス内容を比較しましょう。次に、ファクタリングの手数料を含めた資金計画を立て、利益が確保できるか確認します。そして契約内容（ノンリコースか、追加費用はないか）を慎重に確認してから契約しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリングの資金調達事例集｜業種別成功事例10選",
  description: "業種別のファクタリング成功事例10選。実際の活用シーンと成果を紹介。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/case-studies/" },
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
    { "@type": "ListItem", position: 3, name: "ファクタリング資金調達事例集", item: "https://factoring-partner.pages.dev/articles/case-studies/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "ファクタリング資金調達事例集" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">知識ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングの資金調達事例集
            <br className="hidden md:block" />
            業種別成功事例10選
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            建設業・IT・製造業・医療・飲食業など、さまざまな業種でファクタリングを活用して資金調達に成功した事例を紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#cases" className="hover:underline">1. 業種別成功事例10選</a></li>
            <li><a href="#common" className="hover:underline">2. 成功事例に共通するポイント</a></li>
            <li><a href="#faq" className="hover:underline">3. よくある質問</a></li>
          </ol>
        </nav>

        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">業種別成功事例10選</h2>
          <p className="mb-8 leading-relaxed text-text-light">さまざまな業種での実際のファクタリング活用事例を紹介します（企業名は仮名、金額は概算です）。</p>
          <div className="space-y-6">
            {caseStudies.map((cs, index) => (
              <div key={cs.company} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
                  <div className="w-full">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-teal-50 px-2 py-0.5 text-xs font-bold text-secondary">{cs.industry}</span>
                      <h3 className="text-lg font-bold text-primary">{cs.company}</h3>
                    </div>
                    <div className="mt-3 grid gap-2 rounded-lg bg-section-bg p-3 md:grid-cols-3">
                      <div><p className="text-xs text-text-light">調達額</p><p className="font-bold text-primary">{cs.amount}</p></div>
                      <div><p className="text-xs text-text-light">手数料</p><p className="font-bold text-accent">{cs.fee}</p></div>
                      <div><p className="text-xs text-text-light">入金</p><p className="font-bold text-secondary">{cs.speed}</p></div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="rounded-lg bg-orange-50 p-3">
                        <p className="text-xs font-semibold text-accent">課題</p>
                        <p className="mt-1 text-sm text-text-main">{cs.situation}</p>
                      </div>
                      <div className="rounded-lg bg-teal-50 p-3">
                        <p className="text-xs font-semibold text-secondary">成果</p>
                        <p className="mt-1 text-sm text-text-main">{cs.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業種別の手数料・入金実績 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">業種別の手数料・入金実績まとめ</h2>
          <p className="mb-8 leading-relaxed text-text-light">上記10の事例から、業種ごとの手数料と入金スピードの傾向をまとめます。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-primary bg-section-bg">
                  <th className="p-3 text-left font-bold text-text-main">業種</th>
                  <th className="p-3 text-left font-bold text-text-main">手数料の傾向</th>
                  <th className="p-3 text-left font-bold text-text-main">入金スピード</th>
                  <th className="p-3 text-left font-bold text-text-main">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">建設業</td>
                  <td className="p-3 text-primary">4〜8%</td>
                  <td className="p-3 text-secondary">即日〜翌日</td>
                  <td className="p-3 text-text-light">元請けの信用力が高いほど低手数料</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">IT・システム開発</td>
                  <td className="p-3 text-primary">3〜7%</td>
                  <td className="p-3 text-secondary">即日〜2時間</td>
                  <td className="p-3 text-text-light">大手SIer向けは特に好条件</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">製造業</td>
                  <td className="p-3 text-primary">4〜8%</td>
                  <td className="p-3 text-secondary">即日</td>
                  <td className="p-3 text-text-light">大手メーカー向けは低手数料</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">医療・介護</td>
                  <td className="p-3 text-primary">2〜5%</td>
                  <td className="p-3 text-secondary">即日〜3日</td>
                  <td className="p-3 text-text-light">3社間（国保連・社保）で低手数料</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">運送・物流</td>
                  <td className="p-3 text-primary">5〜10%</td>
                  <td className="p-3 text-secondary">即日</td>
                  <td className="p-3 text-text-light">大手荷主向けは好条件</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">飲食・サービス</td>
                  <td className="p-3 text-primary">6〜12%</td>
                  <td className="p-3 text-secondary">即日</td>
                  <td className="p-3 text-text-light">法人売掛金がある場合に限る</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">広告・クリエイティブ</td>
                  <td className="p-3 text-primary">4〜8%</td>
                  <td className="p-3 text-secondary">即日</td>
                  <td className="p-3 text-text-light">大手代理店向けは低手数料</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">農業</td>
                  <td className="p-3 text-primary">7〜12%</td>
                  <td className="p-3 text-secondary">即日</td>
                  <td className="p-3 text-text-light">JA経由の売掛金が対象</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium text-text-main">人材派遣</td>
                  <td className="p-3 text-primary">3〜7%</td>
                  <td className="p-3 text-secondary">即日</td>
                  <td className="p-3 text-text-light">派遣先企業の信用力で判断</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-text-light">
            ※上記は事例に基づく参考値です。実際の手数料は売掛金額・売掛先の信用力・利用回数などにより変動します。必ず複数社の見積もりを比較してください。
          </p>
        </section>

        {/* ── 失敗を避けるために ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリングで失敗しないための注意点</h2>
          <p className="mb-8 leading-relaxed text-text-light">成功事例がある一方で、失敗するケースも存在します。以下の注意点を押さえておきましょう。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">手数料を考慮した利益計算を行う</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリングの手数料は利益を直接減少させます。手数料を差し引いた後の利益がプラスになるか、事前に計算しておきましょう。利益率の低い案件でファクタリングを利用すると赤字になるリスクがあります。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">悪徳業者に注意する</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリングを装った違法な貸金業者が存在します。手数料が極端に安い・高い、契約書を交付しない、償還請求権あり（ウィズリコース）の契約を提案する会社には注意しましょう。実績のある大手を選ぶことが安全です。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">ファクタリングへの依存を避ける</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリングは便利ですが、毎月すべての売掛金をファクタリングすると手数料コストが膨大になります。短期的なつなぎ資金として活用し、中長期的には銀行融資や自己資金の充実を図ることが重要です。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">契約内容を必ず確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">ノンリコース（償還請求権なし）であること、手数料以外の追加費用がないこと、債権譲渡登記の有無などを契約前に確認しましょう。不明点は必ず質問してから契約することが大切です。</p>
            </div>
          </div>
        </section>

        {/* ── ファクタリング利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリング利用の一般的な流れ</h2>
          <p className="mb-8 leading-relaxed text-text-light">事例のような成功を実現するためのファクタリング利用の流れを確認しましょう。</p>
          <div className="space-y-3">
            {[
              { step: "複数社に見積もり依頼", description: "最低3社以上に同条件で見積もりを依頼。手数料・入金スピード・サービス内容を比較。" },
              { step: "必要書類の準備", description: "請求書・通帳コピー・身分証明書・登記簿謄本など。会社によって必要書類は異なります。" },
              { step: "審査", description: "書類提出後、売掛先の信用力を中心に審査が行われます。最短30分〜数時間で結果が出ます。" },
              { step: "契約", description: "審査通過後、契約書の内容を確認してサイン。ノンリコースか、追加費用はないか必ず確認。" },
              { step: "入金", description: "契約完了後、指定口座に振込。最短即日〜2時間で入金されます。" },
              { step: "売掛金の回収", description: "入金予定日に売掛先から入金があったら、ファクタリング会社に送金（2社間の場合）。" },
            ].map((item, index) => (
              <div key={item.step} className="flex items-start gap-4 rounded-lg border border-border bg-white p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</span>
                <div>
                  <h3 className="font-bold text-text-main">{item.step}</h3>
                  <p className="mt-1 text-sm text-text-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="common" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">成功事例に共通するポイント</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">売掛先が信用力の高い企業</h3>
              <p className="text-sm leading-relaxed text-text-light">成功事例の多くは、売掛先が大手企業・官公庁・大手代理店など信用力の高い企業です。売掛先の信用力が高いほど低い手数料で利用でき、審査も通りやすくなります。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">手数料を含めた資金計画がある</h3>
              <p className="text-sm leading-relaxed text-text-light">成功した企業は、ファクタリングの手数料をコストとして織り込んだ上で資金計画を立てています。手数料を差し引いても利益が出る範囲で利用することが重要です。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">複数社を比較して最適な条件を選択</h3>
              <p className="text-sm leading-relaxed text-text-light">成功事例の企業は、最低3社以上の見積もりを比較しています。同じ売掛金でも会社によって手数料が数%異なるため、比較することで大幅にコストを削減できます。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">短期的な利用にとどめている</h3>
              <p className="text-sm leading-relaxed text-text-light">成功した企業はファクタリングを一時的なつなぎ資金として活用し、中長期的には銀行融資や自己資金の充実を図っています。ファクタリングへの依存を避けることが持続的な経営の鍵です。</p>
            </div>
          </div>
        </section>

        {/* ── ファクタリングを使うべき場面 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリングを使うべき場面・使わない方がよい場面</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">使うべき場面</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>即日〜数日で資金が必要な場合</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>銀行融資の審査に落ちた・間に合わない場合</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>赤字決算・税金滞納で融資が困難な場合</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>一時的なつなぎ資金が必要な場合</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>負債を増やしたくない場合</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#9679;</span><span>大口の受注に対応するための先行投資が必要な場合</span></li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">使わない方がよい場面</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>手数料を払うと利益が出ない案件</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>慢性的な資金不足（根本的な経営改善が必要）</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>銀行融資で十分に対応できる場合（低コスト）</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>売掛金が存在しない場合</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>時間に余裕があり低コストの調達が可能な場合</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>ファクタリングに依存する経営体質になっている場合</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── おすすめのファクタリング会社 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">事例で使われたおすすめファクタリング会社</h2>
          <p className="mb-8 leading-relaxed text-text-light">上記の事例で利用された主要なファクタリング会社を紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">ビートレーディング</h3>
              <p className="mt-1 text-sm text-text-light">累計買取額1,300億円超。手数料2%〜。最短2時間入金。高額案件にも上限なし対応。建設業・製造業の実績が豊富。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">アクセルファクター</h3>
              <p className="mt-1 text-sm text-text-light">審査通過率93%以上。手数料2%〜。30万円〜対応。赤字決算・税金滞納でも柔軟対応。即日入金実績多数。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">QuQuMo（ククモ）</h3>
              <p className="mt-1 text-sm text-text-light">手数料1%〜の低コスト。請求書と通帳のみで審査。オンライン完結。最短2時間入金。コスト重視の方に。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">日本中小企業金融サポート機構</h3>
              <p className="mt-1 text-sm text-text-light">非営利法人運営。経済産業大臣認定。手数料1.5%〜。医療・介護の3社間ファクタリングにも対応。</p>
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

        {/* ── 初めて利用する方へ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">初めてファクタリングを利用する方へ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            上記の事例のように資金調達を成功させるために、初めてファクタリングを利用する方が押さえるべきポイントをまとめます。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">必ず複数社の見積もりを比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">同じ売掛金でも会社によって手数料が数%異なることがあります。最低3社、できれば5社以上に見積もりを依頼しましょう。オンラインで簡単に見積もりが取れる時代です。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">ノンリコース（償還請求権なし）を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">契約書に「償還請求権なし」が明記されていることを必ず確認しましょう。ウィズリコースの場合、売掛先が倒産した際に買い戻し義務が発生するリスクがあります。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">手数料の「総額」を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">手数料率だけでなく、事務手数料・登記費用・振込手数料など全てのコストを含めた総額を確認しましょう。見積もり段階で「受取額はいくらになりますか」と明確に質問することが重要です。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">手数料込みの利益計算を行う</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリングの手数料を差し引いた後の利益がプラスになるか、事前に計算しましょう。利益率の低い案件でファクタリングを利用すると赤字になるリスクがあります。</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/how-to-choose/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリング会社の選び方</p>
              <p className="mt-1 text-sm text-text-light">10のチェックポイント</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリング手数料ガイド</p>
              <p className="mt-1 text-sm text-text-light">相場と安くする方法</p>
            </Link>
            <Link href="/articles/beginners-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">初めてのファクタリング完全ガイド</p>
              <p className="mt-1 text-sm text-text-light">仕組みから選び方まで</p>
            </Link>
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">おすすめ5選と活用事例</p>
            </Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">あなたの業種に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            事例のように資金調達を成功させるために。手数料・入金スピード・審査通過率でファクタリング会社を徹底比較。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
