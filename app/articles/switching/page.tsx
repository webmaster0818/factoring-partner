import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング乗り換えガイド｜手数料を下げる会社変更の方法",
  description:
    "ファクタリング会社の乗り換え方法を徹底解説。手数料を下げるための会社変更のタイミング、乗り換え手順、注意点、交渉のコツ、おすすめの乗り換え先を紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/switching/",
  },
  openGraph: {
    title: "ファクタリング乗り換えガイド｜手数料を下げる会社変更の方法",
    description: "ファクタリング会社の乗り換えで手数料を下げる方法。タイミング・手順・注意点を解説。",
    url: "https://factoring-partner.pages.dev/articles/switching/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const switchingReasons = [
  {
    title: "手数料が相場より高い",
    description:
      "現在利用しているファクタリング会社の手数料が、2社間で15%以上、3社間で8%以上であれば、乗り換えによって手数料を下げられる可能性が高いです。特に初回利用時に高い手数料で契約してしまい、そのまま継続しているケースは見直しの余地があります。",
  },
  {
    title: "対応・サービスに不満がある",
    description:
      "担当者の対応が遅い、連絡がつきにくい、書類提出の手間が多い、審査に時間がかかるなど、サービス品質に不満がある場合は乗り換えを検討しましょう。近年はオンライン完結型の会社が増えており、手続きの利便性が大幅に向上しています。",
  },
  {
    title: "入金スピードが遅い",
    description:
      "即日入金を希望しているのに、実際には2〜3営業日かかるケースがある場合、より入金スピードの早い会社への乗り換えを検討しましょう。最短2時間で入金可能な会社もあります。",
  },
  {
    title: "買取上限額が足りない",
    description:
      "事業の成長に伴い、ファクタリングで資金化したい売掛金の金額が増えた場合、現在の会社の買取上限額では対応できないことがあります。上限なしで対応できる大手への乗り換えを検討しましょう。",
  },
  {
    title: "契約条件に不透明な点がある",
    description:
      "契約書の内容が分かりにくい、手数料以外の諸費用が不明瞭、償還請求権の有無が明記されていないなど、契約条件に不透明な点がある場合は、より透明性の高い会社への乗り換えが安全です。",
  },
];

const switchingSteps = [
  {
    step: "1",
    title: "現在の契約内容を確認する",
    description: "現在のファクタリング会社との契約書を確認し、手数料率、契約期間、解約条件、違約金の有無などを把握します。特に「乗り換え禁止条項」や「独占契約条項」がないか確認が重要です。",
  },
  {
    step: "2",
    title: "複数の候補先から見積もりを取る",
    description: "乗り換え先の候補を3社以上選び、同じ条件（売掛金の金額・売掛先・希望入金日）で見積もりを依頼します。現在の会社の手数料と比較し、実質的にどれだけコストが下がるかを計算します。",
  },
  {
    step: "3",
    title: "現在の会社に手数料交渉をする（任意）",
    description: "乗り換え前に、現在の会社に手数料の引き下げ交渉をするのも有効です。「他社ではこの手数料を提示された」と伝えることで、条件改善に応じてくれるケースもあります。交渉がうまくいけば、乗り換えの手間なくコスト削減が実現します。",
  },
  {
    step: "4",
    title: "乗り換え先と契約する",
    description: "見積もり比較の結果、最も条件の良い会社と契約します。乗り換え先の会社に「他社から乗り換え」であることを伝えると、乗り換え特別割引が適用される場合があります。",
  },
  {
    step: "5",
    title: "既存の契約を整理する",
    description: "現在の会社との契約が残っている場合は、適切に解約手続きを行います。進行中のファクタリング取引がある場合は、その取引が完了してから乗り換えるのが安全です。",
  },
];

const negotiationTips = [
  {
    title: "他社の見積もりを提示する",
    description: "具体的な数字（他社の手数料率）を提示することで、交渉の説得力が増します。「A社では5%と提示された」と伝えれば、対抗して手数料を下げてくれる可能性が高いです。",
  },
  {
    title: "利用実績をアピールする",
    description: "過去の利用回数、トラブルなく返済した実績、売掛先の信用力の高さなどをアピールしましょう。優良顧客を手放したくないため、条件改善に応じやすくなります。",
  },
  {
    title: "継続利用を条件に交渉する",
    description: "「条件が改善されれば今後も継続利用する」と伝えることで、長期的な取引関係を見据えた手数料引き下げに応じてもらえることがあります。",
  },
  {
    title: "複数の条件で交渉する",
    description: "手数料率だけでなく、事務手数料の免除、入金スピードの改善、買取上限額の引き上げなど、複数の条件で交渉すると全体的な改善が期待できます。",
  },
];

const faqs = [
  {
    question: "ファクタリング会社の乗り換えにペナルティはありますか？",
    answer:
      "一般的なファクタリング契約では、乗り換えに対するペナルティ（違約金）はありません。ファクタリングは取引ごとの契約であり、継続契約の義務がない場合がほとんどです。ただし、契約書に独占条項や解約金の規定がある場合は注意が必要です。契約書の内容を事前に確認しましょう。",
  },
  {
    question: "乗り換えで手数料はどれくらい下がりますか？",
    answer:
      "乗り換えによる手数料の引き下げ幅は状況によりますが、初回利用時に高い手数料（15%以上）で契約していた場合、5%〜10%程度下がるケースもあります。複数社の見積もりを比較し、現在の手数料との差額を計算しましょう。年間のファクタリング利用額が大きいほど、手数料の差が経営に与えるインパクトも大きくなります。",
  },
  {
    question: "乗り換え先の会社でも即日入金は可能ですか？",
    answer:
      "はい、多くのファクタリング会社が初回利用でも即日入金に対応しています。ただし、初回は審査に通常より時間がかかることがあるため、余裕を持ったスケジュールで申し込みましょう。2回目以降は審査が簡略化されるため、よりスピーディーな対応が期待できます。",
  },
  {
    question: "現在の会社に乗り換えの意思を伝える必要がありますか？",
    answer:
      "いいえ、現在の会社に乗り換えの意思を伝える義務はありません。新しい会社と契約して利用を開始し、現在の会社の利用を停止するだけで乗り換えは完了します。ただし、進行中のファクタリング取引がある場合は、その取引が完了するまで現在の会社との関係を維持する必要があります。",
  },
  {
    question: "乗り換え時に特別割引はありますか？",
    answer:
      "多くのファクタリング会社では「乗り換え割引」「他社からの切り替え割引」を提供しています。申し込み時に「他社から乗り換え」であることを伝え、現在の手数料率を提示すると、それを下回る条件を提示してくれることが多いです。乗り換え先の会社に積極的に交渉しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリング乗り換えガイド｜手数料を下げる会社変更の方法",
  description: "ファクタリング会社の乗り換えで手数料を下げる方法。タイミング・手順・注意点を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/switching/" },
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
    { "@type": "ListItem", position: 3, name: "ファクタリング乗り換えガイド", item: "https://factoring-partner.pages.dev/articles/switching/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SwitchingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "ファクタリング乗り換えガイド" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">実践ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング乗り換えガイド
            <br className="hidden md:block" />
            手数料を下げる会社変更の方法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            今のファクタリング会社の手数料が高い？サービスに不満？乗り換えのタイミング・手順・交渉のコツを解説し、手数料を下げる具体的な方法を紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#reasons" className="hover:underline">1. 乗り換えを検討すべき5つのサイン</a></li>
            <li><a href="#steps" className="hover:underline">2. 乗り換えの手順</a></li>
            <li><a href="#negotiation" className="hover:underline">3. 手数料交渉のコツ</a></li>
            <li><a href="#caution" className="hover:underline">4. 乗り換え時の注意点</a></li>
            <li><a href="#comparison" className="hover:underline">5. 乗り換え先の比較ポイント</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 乗り換えのサイン ─── */}
        <section id="reasons" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">乗り換えを検討すべき5つのサイン</h2>
          <p className="mb-8 leading-relaxed text-text-light">以下のいずれかに当てはまる場合は、ファクタリング会社の乗り換えを検討する価値があります。</p>
          <div className="space-y-4">
            {switchingReasons.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 手順 ─── */}
        <section id="steps" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">乗り換えの手順</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリング会社の乗り換えは以下の手順で進めます。計画的に進めることで、スムーズな乗り換えが可能です。</p>
          <div className="space-y-4">
            {switchingSteps.map((item) => (
              <div key={item.step} className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">{item.step}</span>
                <div>
                  <h3 className="font-bold text-text-main">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 交渉のコツ ─── */}
        <section id="negotiation" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">手数料交渉のコツ</h2>
          <p className="mb-8 leading-relaxed text-text-light">乗り換え前に現在の会社と交渉するか、乗り換え先の会社と条件交渉する際のコツを紹介します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {negotiationTips.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">乗り換え時の注意点</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリング会社の乗り換え時に注意すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">進行中の取引の扱い</h3>
              <p className="text-sm leading-relaxed text-text-light">現在の会社で進行中のファクタリング取引がある場合、その取引が完了（売掛先からの入金が完了）するまで現在の会社との関係を維持する必要があります。同じ売掛金を新旧両方の会社に提出することは二重譲渡になるため、絶対に避けてください。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">債権譲渡登記の確認</h3>
              <p className="text-sm leading-relaxed text-text-light">現在の会社が債権譲渡登記を行っている場合、乗り換え時に登記の抹消が必要になることがあります。登記の有無と抹消の手続きについて、現在の会社に確認しておきましょう。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">手数料だけで判断しない</h3>
              <p className="text-sm leading-relaxed text-text-light">手数料率だけでなく、事務手数料・登記費用・振込手数料などの諸費用を含めた「総コスト」で比較しましょう。手数料率が安くても諸費用が高い会社では、トータルコストが変わらないことがあります。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">乗り換え先の信頼性を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">手数料の安さだけに飛びついて悪質な業者と契約しないよう注意が必要です。法人番号の確認、事務所の実在確認、口コミの確認、契約書の内容確認を必ず行いましょう。</p>
            </div>
          </div>
        </section>

        {/* ── 比較ポイント ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">乗り換え先の比較ポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">乗り換え先を選ぶ際に比較すべきポイントを一覧にまとめました。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">手数料率</strong>：現在の手数料と比較して確実に安いか。2社間・3社間それぞれの手数料を確認</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">諸費用</strong>：事務手数料・登記費用・振込手数料などの有無と金額</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">入金スピード</strong>：即日入金に対応しているか。最短何時間で入金可能か</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">買取上限額</strong>：事業規模に合った金額に対応しているか</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">リピーター割引</strong>：2回目以降の手数料引き下げ制度があるか</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">オンライン対応</strong>：来店不要でオンラインで完結するか</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">契約の透明性</strong>：契約書の内容が明確で、不透明な条項がないか</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 乗り換えのメリット ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">乗り換えで得られるメリット</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリング会社の乗り換えは面倒に感じるかもしれませんが、得られるメリットは大きいです。特に継続的にファクタリングを利用している事業者にとって、手数料の引き下げは年間で大きなコスト削減につながります。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <h3 className="mb-3 font-bold text-secondary">具体的なコスト削減シミュレーション</h3>
            <p className="text-sm leading-relaxed text-text-light">
              例えば、月300万円のファクタリングを利用している場合、手数料が15%から8%に下がると、1回あたり21万円のコスト削減になります。年間12回利用すれば、252万円もの削減効果があります。この差額を事業投資に回すことで、さらなる成長が期待できます。
            </p>
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
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツも紹介</p>
            </Link>
            <Link href="/articles/fee-negotiation/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料交渉の方法</p>
              <p className="mt-1 text-sm text-text-light">ファクタリングの手数料を下げるコツ</p>
            </Link>
            <Link href="/articles/contract-checklist/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">契約時のチェックリスト</p>
              <p className="mt-1 text-sm text-text-light">見落としがちな契約条項を確認</p>
            </Link>
            <Link href="/articles/troubles/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングのトラブル事例</p>
              <p className="mt-1 text-sm text-text-light">よくあるトラブルと対処法</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">乗り換え先のファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で主要ファクタリング会社を徹底比較。より良い条件の乗り換え先が見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
