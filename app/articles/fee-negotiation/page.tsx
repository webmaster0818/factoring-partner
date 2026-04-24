import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリングの手数料を下げる交渉術5選｜コスト削減の方法",
  description:
    "ファクタリングの手数料を下げる交渉術を5つ紹介。複数社への相見積もり、継続利用による信頼構築、売掛先の信用力アピールなど、手数料を安くするための具体的な方法とコスト削減のコツを解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/fee-negotiation/",
  },
  openGraph: {
    title:
      "ファクタリングの手数料を下げる交渉術5選｜コスト削減の方法",
    description:
      "ファクタリングの手数料を下げる交渉術を5つ紹介。コスト削減の具体的な方法を解説。",
    url: "https://factoring-partner.pages.dev/articles/fee-negotiation/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const negotiationTips = [
  {
    title: "複数社から相見積もりを取る",
    description:
      "手数料を下げる最も効果的な方法は、複数のファクタリング会社から見積もりを取ることです。3社以上に見積もりを依頼し、提示された手数料を比較しましょう。他社の見積もり額を交渉材料として提示すれば、競合意識から手数料を引き下げてくれるケースが多くあります。相見積もりは業界の常識であり、失礼にあたることはありません。",
    detail:
      "見積もりを依頼する際は、同じ条件（売掛金額・売掛先情報・支払い期日）で統一することが重要です。条件が異なると正確な比較ができません。また、オンライン完結型のファクタリング会社は人件費が抑えられているため、比較的手数料が安い傾向にあります。",
  },
  {
    title: "継続利用でリピーター割引を狙う",
    description:
      "ファクタリング会社にとって、新規顧客の審査コストは大きな負担です。一方、過去に取引実績があるリピーターは信用リスクが低く、審査も簡略化できます。そのため、多くのファクタリング会社では継続利用者に対して手数料を優遇するリピーター割引を設けています。",
    detail:
      "初回利用時に手数料が高くても、2回目以降は2〜5%程度下がるケースが一般的です。継続利用を前提に「今後も御社を利用したいので、手数料を優遇していただけませんか」と伝えることで、初回から割引を受けられる場合もあります。長期的な取引関係を築く姿勢を見せることがポイントです。",
  },
  {
    title: "売掛先の信用力をアピールする",
    description:
      "ファクタリングの手数料は売掛先の信用力によって大きく変動します。売掛先が上場企業や官公庁など信用力の高い企業であれば、回収リスクが低いため手数料も安くなります。審査時に売掛先の信用力を示す情報を積極的に提供しましょう。",
    detail:
      "売掛先との取引期間の長さ、過去の支払い遅延がないこと、売掛先の業績が安定していることなどをアピールしましょう。売掛先が上場企業であれば決算情報を添付する、公共事業の発注元であれば契約書のコピーを提出するなど、具体的な資料を用意すると効果的です。",
  },
  {
    title: "3社間ファクタリングを検討する",
    description:
      "2社間ファクタリングの手数料は8〜18%程度ですが、3社間ファクタリングなら1〜9%程度に抑えられます。3社間ファクタリングでは売掛先も取引に関与するため、二重譲渡や架空債権のリスクが低く、ファクタリング会社にとって安全性が高いのが手数料が安い理由です。",
    detail:
      "3社間ファクタリングのデメリットは、売掛先にファクタリングの利用を知られることです。しかし、売掛先との関係が良好で理解が得られるなら、手数料を大幅に削減できるメリットは非常に大きいです。特に、定期的にファクタリングを利用する場合は、コスト削減効果が累積して大きな差になります。",
  },
  {
    title: "売掛金の金額と支払い期日を最適化する",
    description:
      "売掛金の金額が大きいほど、ファクタリング会社にとっての収益が増えるため、手数料率を下げてもらいやすくなります。小口の売掛金を複数まとめて一括で依頼するなど、金額を増やす工夫をしましょう。また、支払い期日までの期間が短いほど手数料は安くなります。",
    detail:
      "一般的に、売掛金額が300万円以上になると手数料率が下がる傾向にあります。また、支払い期日が30日以内の売掛金は、60日や90日のものと比べて手数料が安くなります。複数の売掛金がある場合は、支払い期日が近いものを優先的に利用し、手数料の最適化を図りましょう。",
  },
];

const additionalStrategies = [
  {
    title: "契約前に手数料の内訳を確認する",
    description:
      "手数料の内訳を明確にすることで、不要なコストを削減できます。一部のファクタリング会社では、手数料の他に事務手数料・登記費用・振込手数料などの諸費用が加算されるケースがあります。契約前に「手数料以外にかかる費用はありますか？」と確認し、総コストで比較しましょう。",
  },
  {
    title: "オンライン完結型を選ぶ",
    description:
      "対面での面談や紙の書類が不要なオンライン完結型のファクタリング会社は、事務所の賃料や人件費を削減しているため、手数料が安い傾向にあります。特にAI審査を導入している会社は審査コストが低く、手数料に反映されています。",
  },
  {
    title: "債権譲渡登記を不要にする会社を選ぶ",
    description:
      "2社間ファクタリングでは、債権譲渡登記が必要な場合があります。登記費用は通常5〜10万円程度かかりますが、登記不要で対応してくれる会社もあります。少額の売掛金をファクタリングする場合、登記費用の負担が大きくなるため注意しましょう。",
  },
  {
    title: "キャンペーンや初回特典を活用する",
    description:
      "多くのファクタリング会社では、新規顧客向けのキャンペーンや初回特典を実施しています。「初回手数料○%OFF」「乗り換えキャンペーン」など、条件の良いタイミングを狙って利用するのも手数料削減の有効な方法です。各社のWebサイトやメールマガジンをチェックしましょう。",
  },
];

const costExamples = [
  {
    scenario: "相見積もりなし（1社のみ）",
    amount: "500万円",
    rate: "15%",
    fee: "75万円",
    received: "425万円",
  },
  {
    scenario: "相見積もり後（3社比較）",
    amount: "500万円",
    rate: "10%",
    fee: "50万円",
    received: "450万円",
  },
  {
    scenario: "3社間＋リピーター割引",
    amount: "500万円",
    rate: "5%",
    fee: "25万円",
    received: "475万円",
  },
];

const faqs = [
  {
    question: "ファクタリングの手数料は交渉で本当に下がりますか？",
    answer:
      "はい、手数料は交渉次第で下がるケースが多くあります。特に相見積もりを取って他社の手数料を提示する方法は効果的です。ファクタリング会社も顧客獲得のために柔軟に対応してくれることがあり、2〜5%程度の引き下げに成功する事例は珍しくありません。",
  },
  {
    question: "手数料が安すぎるファクタリング会社は危険ですか？",
    answer:
      "手数料が極端に安い場合（1%以下など）は注意が必要です。見積もり段階では低い手数料を提示しながら、契約時に追加費用を請求する悪質な業者が存在します。手数料だけでなく、事務手数料・登記費用・振込手数料などを含めた総コストで比較することが大切です。",
  },
  {
    question: "相見積もりは何社くらいから取るべきですか？",
    answer:
      "最低でも3社から見積もりを取ることをおすすめします。3社以上あれば市場の相場感が把握でき、極端に高い手数料を提示している会社を避けられます。ただし、あまりに多くの会社に見積もりを依頼すると手間がかかるため、5社程度が現実的な目安です。",
  },
  {
    question: "リピーター割引はどのくらい安くなりますか？",
    answer:
      "リピーター割引の幅は会社によって異なりますが、一般的に初回と比べて2〜5%程度の手数料引き下げが期待できます。利用回数が増えるほど割引率が大きくなるケースもあり、5回以上の利用で最大の優遇を受けられる会社もあります。",
  },
  {
    question: "手数料交渉のタイミングはいつが良いですか？",
    answer:
      "手数料交渉は見積もり段階で行うのがベストです。契約後に手数料を下げてもらうのは難しいため、必ず契約前に交渉しましょう。また、月末や期末はファクタリング会社の営業目標達成のために柔軟に対応してもらえる可能性があります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファクタリングの手数料を下げる交渉術5選｜コスト削減の方法",
  description:
    "ファクタリングの手数料を下げる交渉術を5つ紹介。コスト削減の具体的な方法を解説。",
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
      "https://factoring-partner.pages.dev/articles/fee-negotiation/",
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
      name: "手数料交渉術",
      item: "https://factoring-partner.pages.dev/articles/fee-negotiation/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function FeeNegotiationPage() {
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
          { label: "手数料交渉術" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            コスト削減
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングの手数料を下げる交渉術5選
            <br className="hidden md:block" />
            コスト削減の方法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングの手数料は交渉次第で大幅に下げられます。相見積もり・リピーター割引・売掛先の信用力アピールなど、手数料を安くするための5つの具体的な方法を徹底解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#why-high" className="hover:underline">
                1. ファクタリングの手数料が高い理由
              </a>
            </li>
            <li>
              <a href="#market-rate" className="hover:underline">
                2. 手数料の相場を知る
              </a>
            </li>
            <li>
              <a href="#tips" className="hover:underline">
                3. 手数料を下げる交渉術5選
              </a>
            </li>
            <li>
              <a href="#additional" className="hover:underline">
                4. さらにコストを削減する4つの方法
              </a>
            </li>
            <li>
              <a href="#cost-simulation" className="hover:underline">
                5. コスト削減シミュレーション
              </a>
            </li>
            <li>
              <a href="#caution" className="hover:underline">
                6. 手数料交渉の注意点
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 手数料が高い理由 ─── */}
        <section id="why-high" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングの手数料が高い理由
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングの手数料は銀行融資の金利と比べると高く感じるかもしれません。しかし、手数料が高いのにはファクタリング会社側の合理的な理由があります。これを理解することで、どのポイントを交渉すれば手数料が下がりやすいかが見えてきます。
          </p>
          <div className="mb-6 space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">売掛金の未回収リスク</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ノンリコース（償還請求権なし）契約の場合、売掛先が倒産すればファクタリング会社が損失を被ります。このリスクプレミアムが手数料に含まれています。売掛先の信用力が低いほどリスクが高く、手数料も上がります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">二重譲渡・架空債権のリスク</h3>
              <p className="text-sm leading-relaxed text-text-light">
                特に2社間ファクタリングでは、同じ売掛金を複数の会社に売却する二重譲渡や、実在しない売掛金を売却する架空債権のリスクがあります。このリスクへの対策コストが手数料に反映されています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">審査・事務コスト</h3>
              <p className="text-sm leading-relaxed text-text-light">
                売掛先の信用調査、契約書の作成、債権譲渡登記の手続きなど、ファクタリング会社は取引ごとに一定のコストを負担しています。少額の取引では、このコストの割合が相対的に大きくなるため手数料率が高くなる傾向にあります。
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">ポイント</p>
            <p className="text-sm leading-relaxed text-text-light">
              手数料が高い理由を理解すると、ファクタリング会社のリスクや負担を軽減する方法を提案することで、手数料交渉を有利に進められます。次のセクションで具体的な交渉術を紹介します。
            </p>
          </div>
        </section>

        {/* ── 手数料の相場 ─── */}
        <section id="market-rate" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料の相場を知る
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            手数料交渉の前に、まず相場を把握しておくことが重要です。相場を知らなければ、提示された手数料が高いのか安いのか判断できません。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">契約形態</th>
                  <th className="px-4 py-3 font-semibold">手数料相場</th>
                  <th className="px-4 py-3 font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    2社間ファクタリング
                  </td>
                  <td className="px-4 py-3">8%〜18%</td>
                  <td className="px-4 py-3">売掛先に知られない。手数料は高め</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    3社間ファクタリング
                  </td>
                  <td className="px-4 py-3">1%〜9%</td>
                  <td className="px-4 py-3">売掛先の同意が必要。手数料は安い</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    オンライン完結型
                  </td>
                  <td className="px-4 py-3">2%〜12%</td>
                  <td className="px-4 py-3">AI審査で低コスト。手数料は比較的安い</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            上記はあくまで相場であり、売掛先の信用力・売掛金の金額・支払い期日・利用回数などによって実際の手数料は変動します。提示された手数料が相場の範囲内かどうかを確認する目安として活用してください。
          </p>
        </section>

        {/* ── 交渉術5選 ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料を下げる交渉術5選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの手数料は固定ではなく、交渉次第で引き下げることが可能です。以下の5つの交渉術を活用して、コストを最小限に抑えましょう。
          </p>
          <div className="space-y-8">
            {negotiationTips.map((tip, index) => (
              <div
                key={tip.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {tip.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {tip.description}
                    </p>
                    <div className="mt-4 rounded-lg border border-secondary/30 bg-teal-50 p-4">
                      <p className="mb-1 text-sm font-bold text-secondary">
                        実践のポイント
                      </p>
                      <p className="text-sm leading-relaxed text-text-light">
                        {tip.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── さらにコスト削減 ─── */}
        <section id="additional" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            さらにコストを削減する4つの方法
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            交渉術に加えて、ファクタリング会社の選び方や契約方法を工夫することで、さらなるコスト削減が可能です。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {additionalStrategies.map((strategy) => (
              <div
                key={strategy.title}
                className="rounded-lg border border-border bg-white p-5"
              >
                <h3 className="mb-3 font-bold text-primary">{strategy.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── コスト削減シミュレーション ─── */}
        <section id="cost-simulation" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            コスト削減シミュレーション
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            手数料を下げる交渉がどれほどの効果があるか、具体的な数字で確認しましょう。売掛金500万円を例に、交渉前後のコストを比較します。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">シナリオ</th>
                  <th className="px-4 py-3 font-semibold">売掛金額</th>
                  <th className="px-4 py-3 font-semibold">手数料率</th>
                  <th className="px-4 py-3 font-semibold">手数料額</th>
                  <th className="px-4 py-3 font-semibold">受取額</th>
                </tr>
              </thead>
              <tbody>
                {costExamples.map((example) => (
                  <tr key={example.scenario} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                      {example.scenario}
                    </td>
                    <td className="px-4 py-3">{example.amount}</td>
                    <td className="px-4 py-3">{example.rate}</td>
                    <td className="px-4 py-3">{example.fee}</td>
                    <td className="px-4 py-3 font-bold text-primary">
                      {example.received}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg border border-accent/30 bg-orange-50 p-4">
            <p className="mb-1 font-bold text-accent">注目ポイント</p>
            <p className="text-sm leading-relaxed text-text-light">
              交渉なしの場合と、3社間＋リピーター割引を活用した場合では、受取額に<strong className="text-text-main">50万円の差</strong>が生まれます。年間で複数回利用する場合、このコスト差は数百万円規模になる可能性があります。
            </p>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料交渉の注意点
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            手数料を下げることは重要ですが、以下のポイントに注意して交渉を進めましょう。安さだけを追求すると、思わぬトラブルに巻き込まれる可能性があります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">手数料の安さだけで選ばない</h3>
              <p className="text-sm leading-relaxed text-text-light">
                手数料が最も安い会社が必ずしも最良の選択とは限りません。入金スピード、対応の丁寧さ、追加費用の有無、契約内容（ノンリコースかリコースか）なども総合的に判断しましょう。安さの裏には何かしらの理由がある場合もあります。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">見積もり段階と契約時の条件を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                見積もり段階では低い手数料を提示し、契約時に条件を変更する悪質な業者も存在します。見積もりの手数料が契約書に反映されているか必ず確認しましょう。口頭での約束ではなく、書面で確認することが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">無理な交渉は逆効果</h3>
              <p className="text-sm leading-relaxed text-text-light">
                相場を大幅に下回る手数料を要求すると、ファクタリング会社との関係が悪化する可能性があります。長期的な取引を見据えて、双方にとって納得のいく条件を目指しましょう。Win-Winの関係が継続的なコスト削減につながります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 成功事例 ─── */}
        <section id="case-study" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料交渉の成功事例
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            実際に手数料交渉に成功した企業の事例を紹介します。交渉のポイントを参考にしてください。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-2 font-bold text-secondary">事例1：IT企業A社（売掛金800万円）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                初回利用時の手数料は12%でしたが、3社に相見積もりを取った結果、最安値の8%を提示した会社を選択。さらに「今後も継続利用したい」と伝えたところ、初回から7%に引き下げてもらえました。売掛先が上場企業であることも有利に働きました。
              </p>
              <p className="mt-2 text-sm font-bold text-secondary">削減効果：手数料12% → 7%（40万円の削減）</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-2 font-bold text-secondary">事例2：建設業B社（売掛金1,500万円）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                2社間ファクタリングで手数料15%と提示されましたが、売掛先（大手ゼネコン）の同意を得て3社間に切り替えることで手数料を5%に。さらに、半年間の継続利用で4%まで引き下げに成功しました。
              </p>
              <p className="mt-2 text-sm font-bold text-secondary">削減効果：手数料15% → 4%（165万円の削減）</p>
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
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">
                手数料を安くする5つのコツも紹介
              </p>
            </Link>
            <Link
              href="/articles/contract-checklist/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">契約書チェックリスト</p>
              <p className="mt-1 text-sm text-text-light">
                契約前に確認すべき10項目を解説
              </p>
            </Link>
            <Link
              href="/articles/vs-bank-loan/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリング vs 銀行融資</p>
              <p className="mt-1 text-sm text-text-light">
                メリット・デメリットを徹底比較
              </p>
            </Link>
            <Link
              href="/articles/troubles/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">トラブル事例と対策</p>
              <p className="mt-1 text-sm text-text-light">
                悪質業者の見分け方と被害防止策
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            手数料の安いファクタリング会社を比較しましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料交渉のコツを押さえたら、次は実際にファクタリング会社を比較しましょう。15社を手数料・入金速度・審査通過率で徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
