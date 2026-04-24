import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "IT業界向けファクタリング完全ガイド｜SES・受託開発の資金繰り改善",
  description:
    "IT業界（SES・受託開発・Web制作）向けファクタリングを徹底解説。人件費先行の資金繰り課題、おすすめファクタリング会社5選、活用事例、注意点を紹介。売掛金の早期現金化でキャッシュフローを改善する方法を解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/it-industry/",
  },
  openGraph: {
    title:
      "IT業界向けファクタリング完全ガイド｜SES・受託開発の資金繰り改善",
    description:
      "IT業界の資金繰り課題とファクタリング活用法。SES・受託開発に最適なおすすめ5社を紹介。",
    url: "https://factoring-partner.pages.dev/articles/it-industry/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "人件費が売上の大半を占め、毎月固定で発生する",
    description:
      "IT業界、特にSES（システムエンジニアリングサービス）では、売上の70〜80%がエンジニアの人件費です。売掛金の入金が遅れても、エンジニアへの給与は毎月25日に確実に支払わなければなりません。入金サイトが30〜60日の場合、常に1〜2ヶ月分の人件費を先行して支払う必要があり、資金繰りが逼迫します。",
  },
  {
    title: "入金サイトが30〜60日と長い",
    description:
      "受託開発やSESの業界では、月末締め翌月末払い（30日サイト）や翌々月末払い（60日サイト）が一般的です。大手SIerやメーカー系の案件では60日以上になることも珍しくありません。開発期間中は売上が立たず、検収後に初めて請求できるケースも多いため、キャッシュフローが悪化しやすい構造です。",
  },
  {
    title: "急な増員・プロジェクト拡大に対応する資金が不足",
    description:
      "大型案件を受注した場合、急遽エンジニアを増員する必要があります。パートナー企業への外注費やフリーランスエンジニアへの報酬は、クライアントからの入金前に発生します。案件の規模が大きくなるほど、先行投資としての人件費も膨らみ、成長のボトルネックになります。",
  },
  {
    title: "受託開発では納品・検収まで請求できない",
    description:
      "受託開発では、開発完了後にクライアントの検収を経て初めて請求書を発行できます。開発期間が3〜6ヶ月に及ぶプロジェクトでは、その間の運転資金を自社で賄う必要があります。要件変更や追加開発による工期延長が発生すると、さらに資金繰りが悪化します。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features:
      "累計取引9.1万社超の業界最大手。IT企業の利用実績も豊富で、SES・受託開発の売掛金にも柔軟に対応。2社間・3社間の両方に対応し、オンライン完結も可能。買取金額に上限がなく、大口案件にも対応できます。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "IT業界の商慣習を理解した審査ノウハウ。大手SIerやメーカーへの売掛金なら低手数料が期待できる。全国対応・来店不要。",
  },
  {
    name: "QuQuMo",
    features:
      "完全オンライン完結型で手数料1%〜の業界最安水準。必要書類は請求書と通帳の2点のみ。クラウドサインで契約完結するため、IT企業との相性が抜群。入金も最短2時間と迅速。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "オンラインで全ての手続きが完了するため、忙しいIT企業経営者に最適。手数料が業界最安水準でコスト削減に貢献。",
  },
  {
    name: "OLTA",
    features:
      "AI審査を導入したクラウドファクタリングのパイオニア。手数料2%〜9%と上限が明示されており透明性が高い。三菱UFJ銀行やみずほ銀行などの大手金融機関とも提携。スタートアップやIT企業の利用が多い。",
    fee: "2%〜9%",
    speed: "最短即日",
    merit:
      "AI審査で迅速かつ正確。手数料の上限が明示されているため安心。テック企業との相性が良い。",
  },
  {
    name: "ペイトナー",
    features:
      "フリーランスエンジニア・小規模IT事業者に特化。最短10分入金の圧倒的スピード。手数料は一律10%で分かりやすい。1万円から利用可能で、小規模案件にも対応。事業計画書・決算書不要。",
    fee: "一律10%",
    speed: "最短10分",
    merit:
      "フリーランスエンジニアの月末の資金繰りに最適。10分で入金されるスピード感はIT業界のスピードにマッチ。",
  },
  {
    name: "PAYTODAY",
    features:
      "AI審査で最短30分入金のオンライン完結型。手数料1%〜9.5%と上限明示。スタートアップやIT企業の利用が多く、テクノロジーを活用した先進的なサービス。面談不要で手続きが簡単。",
    fee: "1%〜9.5%",
    speed: "最短30分",
    merit:
      "スタートアップ・IT企業に特に人気。AI審査の透明性とスピードが魅力。完全オンラインで場所を選ばない。",
  },
];

const useCases = [
  {
    title: "事例1：SES企業がエンジニア増員の人件費を確保",
    industry: "SES（従業員30名）",
    problem:
      "大手メーカーから10名規模のSES案件を受注。しかし既存エンジニアだけでは人数が不足し、パートナー企業から5名を調達する必要があった。パートナーへの支払いは翌月末だが、クライアントからの入金は翌々月末の60日サイト。約800万円の資金ギャップが発生。",
    solution:
      "既存案件の売掛金1,200万円を2社間ファクタリングで売却。手数料5%で1,140万円を翌日に調達。パートナーへの支払い資金を確保した。",
    result:
      "大型案件を予定通り稼働開始。パートナー企業との信頼関係も維持でき、以降の案件でも優先的にエンジニアを確保できるようになった。月次の売上が1.5倍に成長。",
  },
  {
    title: "事例2：受託開発会社が検収遅延による資金不足を解消",
    industry: "受託開発（従業員15名）",
    problem:
      "Webシステムの受託開発案件で、クライアントの検収作業が当初予定より1ヶ月遅延。3,000万円の売掛金の入金が遅れる見込みとなり、エンジニア15名分の給与支払い（約1,500万円）が困難に。",
    solution:
      "別のクライアントに対する完了済み案件の売掛金2,000万円をファクタリングで売却。手数料3%で1,940万円を即日調達し、給与支払いに充当。",
    result:
      "全エンジニアへの給与を遅延なく支払い完了。検収遅延は最終的に6週間遅れで解消し、入金を確認。ファクタリングを資金調達の選択肢として認識し、以降も繁忙期に活用。",
  },
  {
    title: "事例3：フリーランスエンジニアが複数案件の谷間を乗り越える",
    industry: "フリーランスエンジニア（個人事業主）",
    problem:
      "前月のSES案件が完了し、次の案件は来月開始。前月分の報酬（60万円）の入金は来月末だが、今月の生活費と経費（35万円）が不足。貯蓄も少なく、カードローンは使いたくない。",
    solution:
      "前月分の売掛金60万円をペイトナーで売却。手数料10%で54万円を申し込みから15分で受け取り。",
    result:
      "生活費と経費を確保し、安心して次の案件に集中。信用情報にも影響なく、翌月から新規案件で安定収入を確保できた。",
  },
];

const faqs = [
  {
    question: "SESの売掛金でもファクタリングは利用できますか？",
    answer:
      "はい、SES（システムエンジニアリングサービス）の売掛金でもファクタリングを利用できます。SESは毎月の稼働に基づいて請求するため、継続的な売掛金が発生します。ファクタリング会社にとっても安定した売掛金として評価されやすく、審査通過率は比較的高いです。売掛先が大手SIerやメーカーであればさらに有利な条件が期待できます。",
  },
  {
    question: "受託開発の場合、検収前でもファクタリングは可能ですか？",
    answer:
      "通常のファクタリングでは、検収済みで請求書が発行されている売掛金が対象です。検収前の段階では、注文書ファクタリング（発注書ファクタリング）を利用する方法があります。ただし、注文書ファクタリングは対応している会社が限られ、手数料も通常より高くなる傾向があります。マイルストーン払いの契約であれば、完了済みフェーズの売掛金をファクタリングに利用する方法も検討できます。",
  },
  {
    question: "IT企業のファクタリング手数料の相場はどのくらいですか？",
    answer:
      "IT企業がファクタリングを利用する場合の手数料相場は、2社間で5%〜15%、3社間で1%〜8%程度です。売掛先が大手企業（NTTグループ、富士通、NECなど）の場合は信用力が高いため、2%〜5%程度の低い手数料で利用できるケースもあります。オンライン完結型のファクタリング会社は中間コストが低いため、比較的安い手数料を提示してくれます。",
  },
  {
    question: "フリーランスエンジニアでもファクタリングは使えますか？",
    answer:
      "はい、フリーランスエンジニアでも利用できるファクタリングサービスは多数あります。ペイトナー、ラボル、FREENANCE（フリーナンス）など、フリーランス・個人事業主に特化したサービスでは1万円から利用可能です。事業計画書や決算書が不要で、請求書と本人確認書類だけで申し込めるサービスも多いです。",
  },
  {
    question: "クライアントにファクタリングの利用がバレることはありますか？",
    answer:
      "2社間ファクタリングを選択すれば、クライアント（売掛先）にファクタリングの利用が通知されることはありません。IT業界ではクライアントとの信頼関係が重要なため、ほとんどのIT企業は2社間ファクタリングを選んでいます。3社間ファクタリングは手数料が安い代わりにクライアントの承諾が必要となるため、利用前に関係性を考慮しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "IT業界向けファクタリング完全ガイド｜SES・受託開発の資金繰り改善",
  description:
    "IT業界の資金繰り課題とファクタリング活用法。SES・受託開発に最適なおすすめ5社を紹介。",
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
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
      "https://factoring-partner.pages.dev/articles/it-industry/",
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
      name: "IT業界向けファクタリング",
      item: "https://factoring-partner.pages.dev/articles/it-industry/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ItIndustryPage() {
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
          { label: "IT業界向けファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            業種特化ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            IT業界向けファクタリング完全ガイド
            <br className="hidden md:block" />
            SES・受託開発の資金繰り改善
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            SES・受託開発・Web制作など、IT業界特有の資金繰り課題をファクタリングで解決。おすすめ5社と実際の活用事例を紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#challenges" className="hover:underline">
                1. IT業界の資金繰り課題
              </a>
            </li>
            <li>
              <a href="#why-factoring" className="hover:underline">
                2. IT業界にファクタリングが最適な理由
              </a>
            </li>
            <li>
              <a href="#recommended" className="hover:underline">
                3. IT業界向けおすすめファクタリング5選
              </a>
            </li>
            <li>
              <a href="#cases" className="hover:underline">
                4. 活用事例3選
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:underline">
                5. IT企業のファクタリング利用の流れ
              </a>
            </li>
            <li>
              <a href="#caution" className="hover:underline">
                6. 利用時の注意点
              </a>
            </li>
            <li>
              <a href="#accounting" className="hover:underline">
                7. ファクタリングの会計処理
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                8. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── IT業界の資金繰り課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            IT業界の資金繰り課題
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            IT業界は成長産業である一方、人件費先行型のビジネスモデルのため、資金繰りに悩む企業が少なくありません。特にSES・受託開発では以下のような課題があります。
          </p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-accent/30 bg-orange-50 p-6"
              >
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── なぜIT業界にファクタリングが最適か ─── */}
        <section id="why-factoring" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            IT業界にファクタリングが最適な理由
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            人件費先行型のIT業界では、迅速な資金調達が経営の生命線です。ファクタリングがIT企業に最適な理由を解説します。
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                毎月の人件費支払いに対応できる
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                SESでは毎月安定して売掛金が発生するため、ファクタリングとの相性が抜群です。月末の請求書を即座に現金化し、翌月の給与支払いに充てることで、資金繰りのサイクルを安定させられます。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                売掛先が大手企業なら審査に通りやすい
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                IT業界の売掛先は大手SIer、メーカー、金融機関など信用力の高い企業が多いため、ファクタリングの審査に通りやすく、手数料も低く抑えられます。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                オンライン完結で手間がかからない
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                IT企業の経営者はデジタルツールに慣れているため、オンライン完結型のファクタリングサービスとの親和性が高いです。申し込みから入金まで、PCやスマホだけで完了します。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">
                成長フェーズの資金調達に最適
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                売上が伸びるほど人件費も増えるIT企業では、成長に伴う資金ギャップをファクタリングで埋めることができます。負債が増えないため、将来のVCからの出資や銀行融資にも影響しません。
              </p>
            </div>
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            IT業界向けおすすめファクタリング5選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            IT業界に強いファクタリング会社を厳選して5社紹介します。オンライン対応や審査スピードを重視して選定しました。
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

        {/* ── 活用事例 ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            活用事例3選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            実際にIT企業がファクタリングを活用したケースを3つ紹介します。自社の状況と照らし合わせて参考にしてください。
          </p>
          <div className="space-y-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {useCase.title}
                </h3>
                <p className="mb-4 text-xs text-text-light">
                  業種：{useCase.industry}
                </p>
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

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            IT企業のファクタリング利用の流れ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            IT企業がファクタリングを利用する際の一般的な手順を解説します。オンライン完結型のサービスであれば、すべてリモートで完了できます。
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-bold text-text-main">Webから申し込み・相談</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  ファクタリング会社のWebフォームから申し込み。売掛金の金額、売掛先の企業名、入金希望日などを入力します。複数社に同時に申し込み、見積もりを比較することをおすすめします。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-bold text-text-main">必要書類をアップロード</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  請求書、本人確認書類、通帳コピー（入出金履歴）をオンラインでアップロード。SES契約書や業務委託契約書を求められる場合もあります。PDF・画像ファイルで提出可能です。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-bold text-text-main">AI審査・見積もり提示</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  ファクタリング会社が売掛先の信用力を審査し、手数料率と買取金額を提示します。AI審査対応の会社なら最短30分〜2時間で結果が出ます。見積もりに納得したら契約に進みます。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                4
              </span>
              <div>
                <h3 className="font-bold text-text-main">電子契約・即日入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  クラウドサインなどの電子契約ツールで契約締結。契約完了後、最短即日で指定口座に入金されます。オンライン完結型なら来店は一切不要です。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                5
              </span>
              <div>
                <h3 className="font-bold text-text-main">売掛金回収後にファクタリング会社へ送金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  2社間ファクタリングの場合、売掛先（クライアント）から入金があったら、ファクタリング会社に送金します。3社間の場合はクライアントが直接ファクタリング会社に支払います。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            利用時の注意点
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            IT企業がファクタリングを利用する際に注意すべきポイントをまとめます。
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                手数料を含めた収益管理を徹底する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                IT業界は利益率が比較的高い業種ですが、ファクタリング手数料が積み重なると利益を圧迫します。月次で手数料コストを把握し、案件ごとの収益性を管理しましょう。継続利用が見込まれる場合は、リピート割引のあるサービスを選ぶとコストを抑えられます。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                クライアントとの契約内容を確認する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                SES契約や業務委託契約の中に、債権譲渡禁止特約が含まれている場合があります。2020年の民法改正により、禁止特約があっても譲渡は有効ですが、トラブルを避けるため事前に確認しましょう。2社間ファクタリングであればクライアントに通知されないため、実務上の問題は起きにくいです。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                ファクタリングに依存しすぎない
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングは便利な資金調達手段ですが、毎月の利用が常態化すると手数料コストが膨らみます。銀行融資や日本政策金融公庫の創業融資など、金利の低い資金調達手段も並行して検討しましょう。ファクタリングは「つなぎ資金」として活用するのが最も効果的です。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">
                複数社から見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料は会社によって大きく異なります。必ず2〜3社から見積もりを取り、手数料率、事務手数料、入金速度を比較した上で判断しましょう。オンラインで簡単に申し込めるため、複数社への同時申し込みも容易です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 会計処理 ─── */}
        <section id="accounting" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングの会計処理
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            IT企業がファクタリングを利用した場合の会計処理について解説します。ファクタリングは売掛債権の売買（譲渡）であり、借入金とは異なる処理が必要です。
          </p>

          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 font-bold text-text-main">仕訳例：売掛金100万円を手数料5%でファクタリングした場合</h3>
            <div className="space-y-4">
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-2 text-sm font-semibold text-primary">ファクタリング契約時</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-text-light">
                  <p>（借方）未収入金 950,000円</p>
                  <p>（貸方）売掛金 1,000,000円</p>
                  <p>（借方）売掛債権売却損 50,000円</p>
                  <p></p>
                </div>
              </div>
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-2 text-sm font-semibold text-primary">入金時</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-text-light">
                  <p>（借方）普通預金 950,000円</p>
                  <p>（貸方）未収入金 950,000円</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-text-light">
              ファクタリング手数料は「売掛債権売却損」として費用計上します。借入金（負債）には計上されないため、貸借対照表上の負債比率に影響しません。具体的な処理方法は顧問税理士にご確認ください。
            </p>
          </div>
        </section>

        {/* ── SES・受託開発の比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            SESと受託開発のファクタリング活用比較
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            IT業界の中でもSESと受託開発では、ファクタリングの活用方法が異なります。それぞれの特徴を比較表で整理します。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">比較項目</th>
                  <th className="border border-primary p-3 text-left">SES</th>
                  <th className="border border-primary p-3 text-left">受託開発</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">売掛金の発生タイミング</td>
                  <td className="border border-border p-3">毎月（月末締め）</td>
                  <td className="border border-border p-3">納品・検収後</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">入金サイト</td>
                  <td className="border border-border p-3">30〜60日</td>
                  <td className="border border-border p-3">30〜90日</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">ファクタリングの活用頻度</td>
                  <td className="border border-border p-3">毎月定期的に利用可能</td>
                  <td className="border border-border p-3">プロジェクト完了時</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">売掛金の予測しやすさ</td>
                  <td className="border border-border p-3">高い（月額×人数）</td>
                  <td className="border border-border p-3">低い（工期変動あり）</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">おすすめのサービス</td>
                  <td className="border border-border p-3">オンライン完結型（QuQuMo、OLTA）</td>
                  <td className="border border-border p-3">大口対応型（ビートレーディング、PMG）</td>
                </tr>
              </tbody>
            </table>
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
              href="/articles/for-freelance/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">フリーランス向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                個人事業主・フリーランスに最適なサービスを比較
              </p>
            </Link>
            <Link
              href="/articles/online-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">オンラインファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                来店不要・Web完結のサービスを比較
              </p>
            </Link>
            <Link
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">
                手数料を安くする5つのコツも紹介
              </p>
            </Link>
            <Link
              href="/articles/screening-criteria/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングの審査基準</p>
              <p className="mt-1 text-sm text-text-light">
                審査で見るポイントと通過率を上げる方法
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            IT業界に強いファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            SES・受託開発・Web制作の資金繰りに最適なファクタリング会社を手数料・入金速度・審査通過率で徹底比較。あなたに合ったサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
