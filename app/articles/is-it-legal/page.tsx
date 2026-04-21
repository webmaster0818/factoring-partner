import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリングは違法？やばい？安全な利用方法と悪徳業者の見分け方",
  description:
    "ファクタリングは違法？やばい？民法466条で認められた合法取引です。違法になるケース（給与ファクタリング・偽装融資）、悪徳業者の特徴5つ、安全な業者の見分け方、金融庁の見解、トラブル時の相談先を解説します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/is-it-legal/",
  },
  openGraph: {
    title:
      "ファクタリングは違法？やばい？安全な利用方法と悪徳業者の見分け方",
    description:
      "ファクタリングの合法性を民法466条から解説。悪徳業者の見分け方も紹介。",
    url: "https://factoring-partner.pages.dev/articles/is-it-legal/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const illegalCases = [
  {
    title: "給与ファクタリング",
    description:
      "個人の給与（賃金債権）を給料日前に売却して現金化する「給与ファクタリング」は、金融庁が「実質的な貸付に該当する」と判断しています。貸金業登録なしに行えば貸金業法違反（ヤミ金）となり、利用者も被害を受けるリスクがあります。2020年3月に金融庁が正式に見解を示し、実質的に違法と位置づけられました。個人の給与を対象としたファクタリングには絶対に手を出さないようにしましょう。",
    risk: "高",
  },
  {
    title: "偽装ファクタリング（実質的な貸付）",
    description:
      "形式上はファクタリングを装いながら、実質的には金銭の貸付を行っている業者が存在します。具体的には、償還請求権（リコース）付きの契約で売掛先が支払わない場合に利用者に返済義務を課すケースです。これは実質的な貸付であり、貸金業登録なしに行えば貸金業法違反となります。契約書に「償還請求権あり」「買戻し義務」などの記載がないか必ず確認しましょう。",
    risk: "高",
  },
  {
    title: "法外な手数料を徴収するケース",
    description:
      "年利換算で109.5%を超える手数料は出資法違反に該当する可能性があります。例えば、1ヶ月の期間で50%の手数料を徴収する場合、年利換算すると600%となり、明らかに法外です。正規のファクタリング会社であれば、このような極端な手数料を設定することはありません。",
    risk: "高",
  },
  {
    title: "架空債権を利用したファクタリング詐欺",
    description:
      "利用者側が架空の売掛金を作成してファクタリング会社から資金を騙し取る行為は、詐欺罪（刑法246条）に該当します。これは利用者側の犯罪行為であり、発覚した場合は刑事罰の対象となります。二重譲渡（同じ売掛金を複数のファクタリング会社に売却する行為）も同様に詐欺罪に問われる可能性があります。",
    risk: "高",
  },
];

const badCompanySigns = [
  {
    title: "会社情報が不透明",
    description:
      "会社の所在地が不明確（バーチャルオフィスのみ）、代表者名が非公開、法人番号で検索しても出てこない、ウェブサイトに会社概要が掲載されていないなどの場合は要注意です。正規のファクタリング会社であれば、会社情報は必ず公開されています。国税庁の法人番号公表サイトで実在確認ができます。",
  },
  {
    title: "契約書を交付しない・契約内容が不明確",
    description:
      "正規のファクタリング会社は必ず契約書を交付します。契約書なしで取引を進めようとする業者や、契約内容の説明を拒む業者は悪徳業者の可能性が高いです。特に「償還請求権の有無」「手数料の内訳」「支払い条件」が明記されていない契約書は危険です。",
  },
  {
    title: "手数料が極端に安い、または高い",
    description:
      "2社間ファクタリングの相場は10%〜30%、3社間は2%〜20%です。相場から極端に外れた手数料を提示する業者には注意しましょう。極端に安い場合は後から追加費用を請求されるリスク、極端に高い場合は出資法違反の可能性があります。",
  },
  {
    title: "担保や保証人を要求する",
    description:
      "正規のファクタリングでは担保や保証人は不要です。不動産の担保設定や連帯保証人を要求する業者は、ファクタリングを装った実質的な貸付（ヤミ金）の可能性があります。ファクタリングは「売掛債権の売買」であり、担保設定は本来不要なものです。",
  },
  {
    title: "強引な勧誘や急かす営業",
    description:
      "「今日中に契約しないと手遅れになる」「他では対応できない」など、冷静な判断をさせない強引な営業を行う業者は要注意です。正規のファクタリング会社は、利用者に十分な検討時間を与えます。契約を急かされた場合は、一旦持ち帰って冷静に判断しましょう。",
  },
];

const safeCompanyChecks = [
  {
    title: "会社の実在を確認する",
    description:
      "法人番号公表サイト（国税庁）で会社名・所在地を検索し、実在することを確認しましょう。また、オフィスに訪問可能か、固定電話番号があるかも確認ポイントです。",
  },
  {
    title: "口コミ・評判を調べる",
    description:
      "GoogleマップやSNS、口コミサイトで実際の利用者の声を確認しましょう。極端に口コミが少ない場合や、悪評が多い場合は注意が必要です。",
  },
  {
    title: "契約書の内容を精査する",
    description:
      "償還請求権の有無、手数料率・内訳、支払い条件、契約解除条件を必ず確認しましょう。不明な点は契約前に質問し、書面で回答を得ることが重要です。",
  },
  {
    title: "複数社から見積もりを取る",
    description:
      "1社だけの見積もりでは適正な条件か判断できません。最低3社から見積もりを取り、手数料率・総コスト・契約条件を比較しましょう。",
  },
  {
    title: "業界団体への加盟を確認する",
    description:
      "日本ファクタリング業協会などの業界団体に加盟している会社は、一定の基準を満たしている証拠です。また、弁護士や会計士が監修・提携している会社も信頼性が高いと言えます。",
  },
];

const contactPoints = [
  {
    name: "金融庁 金融サービス利用者相談室",
    description: "ファクタリングに関する相談全般。金融トラブルの相談窓口。",
    contact: "0570-016811",
  },
  {
    name: "消費者ホットライン",
    description: "消費者トラブル全般の相談。最寄りの消費生活センターにつながります。",
    contact: "188（局番なし）",
  },
  {
    name: "日本司法支援センター（法テラス）",
    description: "法的トラブルの相談。弁護士の紹介や法律相談を無料で受けられます。",
    contact: "0570-078374",
  },
  {
    name: "日本貸金業協会 相談・紛争解決窓口",
    description:
      "ファクタリングを装ったヤミ金被害の相談。",
    contact: "0570-051-051",
  },
  {
    name: "警察相談専用電話",
    description: "犯罪被害にあった場合、すぐに通報してください。",
    contact: "#9110",
  },
];

const faqs = [
  {
    question: "ファクタリングは法律で認められていますか？",
    answer:
      "はい、ファクタリング（債権譲渡）は民法第466条で認められた合法的な取引です。2020年の民法改正（第466条の2）により、債権譲渡禁止特約がある場合でも債権譲渡は有効とされ、法的にもより利用しやすくなりました。ただし、ファクタリングを装った実質的な貸付（償還請求権付きの取引）は貸金業に該当し、無登録で行えば違法です。",
  },
  {
    question: "給与ファクタリングは違法ですか？",
    answer:
      "金融庁は「給与ファクタリング（賃金債権の買取り）は経済的に貸付と同様の機能を有しているため、貸金業に該当する」との見解を示しています。貸金業登録なしに行う給与ファクタリングは貸金業法違反（ヤミ金）であり、利用者も被害を受けるリスクがあります。給与ファクタリングは絶対に利用しないでください。",
  },
  {
    question: "ファクタリング業者に免許や資格は必要ですか？",
    answer:
      "現時点では、ファクタリング業を営むにあたって特別な免許や登録は不要です。銀行業や貸金業のような業登録制度は存在しません。そのため、参入障壁が低く悪徳業者も存在するのが現状です。利用者自身が業者を見極める目を持つことが重要です。",
  },
  {
    question: "契約書に「償還請求権あり」と書いてある場合はどうすべきですか？",
    answer:
      "償還請求権ありの契約は、売掛先が支払わない場合に利用者に返済義務が生じる契約であり、実質的に「貸付」と同等です。貸金業登録なしの業者がこのような契約を行っている場合は違法の可能性があるため、契約を避け、他のファクタリング会社を検討しましょう。",
  },
  {
    question: "悪徳業者に騙された場合はどこに相談すればよいですか？",
    answer:
      "金融庁の金融サービス利用者相談室（0570-016811）、消費者ホットライン（188）、法テラス（0570-078374）に相談できます。犯罪被害の場合は警察（#9110）にも通報してください。弁護士に相談して法的対応を取ることも有効です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファクタリングは違法？やばい？安全な利用方法と悪徳業者の見分け方",
  description:
    "ファクタリングの合法性を民法466条から解説。悪徳業者の見分け方も紹介。",
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
    "@id": "https://factoring-partner.pages.dev/articles/is-it-legal/",
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
      name: "ファクタリングは違法？安全な利用方法",
      item: "https://factoring-partner.pages.dev/articles/is-it-legal/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function IsItLegalPage() {
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
          { label: "ファクタリングは違法？安全な利用方法" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            安全ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングは違法？やばい？
            <br className="hidden md:block" />
            安全な利用方法と悪徳業者の見分け方
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリング自体は民法で認められた合法な取引です。しかし悪徳業者も存在します。違法になるケースと安全な業者の見分け方を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#legal" className="hover:underline">
                1. ファクタリングは合法（民法466条）
              </a>
            </li>
            <li>
              <a href="#illegal-cases" className="hover:underline">
                2. 違法になるケース
              </a>
            </li>
            <li>
              <a href="#bad-signs" className="hover:underline">
                3. 悪徳業者の特徴5つ
              </a>
            </li>
            <li>
              <a href="#safe-check" className="hover:underline">
                4. 安全な業者の見分け方
              </a>
            </li>
            <li>
              <a href="#fsa" className="hover:underline">
                5. 金融庁の見解
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                6. トラブル時の相談先
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── ファクタリングは合法 ─── */}
        <section id="legal" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングは合法（民法466条）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            結論から言えば、<strong className="text-text-main">ファクタリング（売掛債権の売買・譲渡）は合法</strong>です。ファクタリングの法的根拠は民法第466条にあり、債権は自由に譲渡できることが定められています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            さらに、2020年4月に施行された民法改正（第466条の2）により、契約書に「債権譲渡禁止特約」が付いている場合でも、債権譲渡は有効であると明文化されました。これにより、ファクタリングはより利用しやすい法的環境が整備されました。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            ただし、「ファクタリング」という名称を悪用した違法行為（偽装融資、給与ファクタリング、法外な手数料の徴収など）は存在します。ファクタリング自体が違法なのではなく、一部の悪徳業者の行為が違法なのです。
          </p>

          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">
              民法第466条（債権の譲渡性）
            </p>
            <p className="mb-2 text-sm italic text-text-light">
              「債権は、譲り渡すことができる。ただし、その性質がこれを許さないときは、この限りでない。」
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              この条文により、売掛債権（売掛金）を第三者（ファクタリング会社）に譲渡することは法的に認められています。ファクタリングは民法に基づく正当な商取引です。
            </p>
          </div>
        </section>

        {/* ── 違法になるケース ─── */}
        <section id="illegal-cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            違法になるケース
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリング自体は合法ですが、以下のケースでは違法となります。これらに該当する業者の利用は絶対に避けてください。
          </p>
          <div className="space-y-6">
            {illegalCases.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-accent/30 bg-orange-50 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-accent">{item.title}</h3>
                  <span className="shrink-0 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-white">
                    危険度：{item.risk}
                  </span>
                </div>
                <p className="mt-3 leading-relaxed text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 悪徳業者の特徴5つ ─── */}
        <section id="bad-signs" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            悪徳業者の特徴5つ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            以下の特徴に該当する業者は悪徳業者の可能性が高いため、利用を避けましょう。1つでも当てはまる場合は注意が必要です。
          </p>
          <div className="space-y-6">
            {badCompanySigns.map((sign, index) => (
              <div
                key={sign.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {sign.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {sign.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 安全な業者の見分け方 ─── */}
        <section id="safe-check" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            安全な業者の見分け方
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            安全なファクタリング会社を選ぶために、以下のチェックポイントを確認しましょう。安心して利用できる業者を見極めるための重要な指標です。
          </p>
          <div className="space-y-4">
            {safeCompanyChecks.map((check) => (
              <div
                key={check.title}
                className="rounded-lg border border-secondary/30 bg-teal-50 p-6"
              >
                <h3 className="mb-3 font-bold text-secondary">{check.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {check.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 金融庁の見解 ─── */}
        <section id="fsa" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            金融庁の見解
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            金融庁は、ファクタリングに関して以下のような見解を示しています。正規のファクタリング（売掛債権の売買）自体は問題ないとしつつも、利用者に対して注意喚起を行っています。
          </p>

          <div className="mb-6 rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 font-bold text-primary">
              金融庁の主な見解
            </h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">1.</span>
                <span>
                  一般的なファクタリング（事業者が保有する売掛債権の売買）は、貸金業に該当しない正当な取引である
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">2.</span>
                <span>
                  給与ファクタリング（賃金債権の買取り）は、経済的に貸付と同様の機能を有しており、貸金業に該当する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">3.</span>
                <span>
                  ファクタリングを装い、実質的に貸付を行っている業者はヤミ金融（無登録の貸金業者）であり、違法である
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">4.</span>
                <span>
                  利用者は契約内容をよく確認し、不審な点がある場合は金融庁の相談窓口に相談するよう推奨している
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="mb-2 font-bold text-accent">
              金融庁からの注意喚起
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              金融庁は「ファクタリングに関する注意喚起」をウェブサイトに掲載し、ファクタリングを装ったヤミ金融への注意を呼びかけています。契約内容に「償還請求権」がある場合、担保・保証人を要求される場合は、正規のファクタリングではなく実質的な貸付の可能性があるため、契約前に十分な確認が必要です。
            </p>
          </div>
        </section>

        {/* ── トラブル時の相談先 ─── */}
        <section id="contact" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トラブル時の相談先
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングでトラブルに遭った場合、一人で悩まず以下の相談窓口に連絡しましょう。専門家が無料で相談に応じてくれます。
          </p>
          <div className="space-y-4">
            {contactPoints.map((point) => (
              <div
                key={point.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-primary">{point.name}</h3>
                    <p className="mt-1 text-sm text-text-light">
                      {point.description}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-primary-light px-3 py-1 text-sm font-bold text-primary">
                    {point.contact}
                  </span>
                </div>
              </div>
            ))}
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
              href="/articles/what-is-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングとは？</p>
              <p className="mt-1 text-sm text-text-light">
                仕組み・種類・メリット・デメリットをわかりやすく解説
              </p>
            </Link>
            <Link
              href="/articles/screening-criteria/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングの審査基準</p>
              <p className="mt-1 text-sm text-text-light">
                審査で見るポイントと通過率を上げる方法を解説
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

        {/* ── 安全に利用するためのチェックリスト ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            安全に利用するためのチェックリスト
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングを安全に利用するために、契約前に以下のチェックリストを確認しましょう。すべての項目にチェックが入れば、安全性の高い取引と言えます。
          </p>

          <div className="rounded-lg border border-border bg-white p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-section-bg p-4">
                <span className="mt-0.5 text-secondary font-bold">&#9744;</span>
                <div>
                  <p className="font-semibold text-text-main">
                    会社の実在を確認した
                  </p>
                  <p className="mt-1 text-sm text-text-light">
                    法人番号公表サイトで検索、固定電話番号の確認、所在地の実在確認を行った
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-section-bg p-4">
                <span className="mt-0.5 text-secondary font-bold">&#9744;</span>
                <div>
                  <p className="font-semibold text-text-main">
                    契約書の内容を確認した
                  </p>
                  <p className="mt-1 text-sm text-text-light">
                    償還請求権の有無、手数料率・内訳、支払い条件、契約解除条件が明記されている
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-section-bg p-4">
                <span className="mt-0.5 text-secondary font-bold">&#9744;</span>
                <div>
                  <p className="font-semibold text-text-main">
                    償還請求権が「なし」（ノンリコース）の契約である
                  </p>
                  <p className="mt-1 text-sm text-text-light">
                    「買戻し義務」「返還義務」などの記載がなく、売掛先が支払わない場合でも利用者に返済義務がない
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-section-bg p-4">
                <span className="mt-0.5 text-secondary font-bold">&#9744;</span>
                <div>
                  <p className="font-semibold text-text-main">
                    手数料が相場の範囲内である
                  </p>
                  <p className="mt-1 text-sm text-text-light">
                    2社間：10%〜30%、3社間：2%〜20%の範囲内。極端に安い・高い場合は要注意
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-section-bg p-4">
                <span className="mt-0.5 text-secondary font-bold">&#9744;</span>
                <div>
                  <p className="font-semibold text-text-main">
                    担保や保証人を要求されていない
                  </p>
                  <p className="mt-1 text-sm text-text-light">
                    不動産担保、連帯保証人の要求がない。要求がある場合は実質的な貸付の可能性がある
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-section-bg p-4">
                <span className="mt-0.5 text-secondary font-bold">&#9744;</span>
                <div>
                  <p className="font-semibold text-text-main">
                    複数社から見積もりを取った
                  </p>
                  <p className="mt-1 text-sm text-text-light">
                    最低3社以上から見積もりを取り、手数料率・総コスト・契約条件を比較した
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-section-bg p-4">
                <span className="mt-0.5 text-secondary font-bold">&#9744;</span>
                <div>
                  <p className="font-semibold text-text-main">
                    口コミ・評判を確認した
                  </p>
                  <p className="mt-1 text-sm text-text-light">
                    Googleマップ、SNS、口コミサイトで実際の利用者の声を確認した
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            安全なファクタリング会社を選びましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            安心して利用できる優良ファクタリング会社を厳選。手数料・入金速度・審査通過率で15社を徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
