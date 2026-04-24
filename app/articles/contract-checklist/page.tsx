import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリングの契約書チェックリスト｜契約前に確認すべき10項目",
  description:
    "ファクタリング契約書で確認すべき10項目をチェックリスト形式で解説。償還請求権・手数料の内訳・債権譲渡登記・契約解除条件など、悪質業者を見抜くためのポイントと注意点を詳しく紹介します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/contract-checklist/",
  },
  openGraph: {
    title:
      "ファクタリングの契約書チェックリスト｜契約前に確認すべき10項目",
    description:
      "ファクタリング契約前に確認すべき10項目をチェックリスト形式で解説。悪質業者を見抜くポイントも紹介。",
    url: "https://factoring-partner.pages.dev/articles/contract-checklist/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const checklistItems = [
  {
    number: 1,
    title: "償還請求権（リコース）の有無",
    description:
      "最も重要な確認項目です。ノンリコース（償還請求権なし）であれば、売掛先が倒産しても利用者に返済義務はありません。リコース（償還請求権あり）の場合、売掛先が支払えなければ利用者が負担する必要があります。",
    warning:
      "リコース契約は実質的に融資と同じです。ファクタリングを装った貸付（ヤミ金）の可能性があるため、リコース契約の場合は貸金業登録の有無を必ず確認しましょう。",
    checkPoint: "契約書に「償還請求権なし」「ノンリコース」と明記されているか確認する",
  },
  {
    number: 2,
    title: "手数料率と総コストの内訳",
    description:
      "手数料率だけでなく、事務手数料・登記費用・振込手数料・消費税など、すべてのコストを確認しましょう。見積もり時の手数料と契約書の手数料が一致しているかも重要なチェックポイントです。",
    warning:
      "「手数料3%」と提示しながら、別途事務手数料10万円や登記費用5万円を請求する業者もあります。必ず総コストで比較してください。",
    checkPoint: "手数料以外の費用（事務手数料・登記費用・振込手数料）が明記されているか確認する",
  },
  {
    number: 3,
    title: "契約形態（2社間 or 3社間）",
    description:
      "2社間ファクタリングは売掛先に知られずに利用できますが手数料が高め、3社間ファクタリングは手数料が安いが売掛先の同意が必要です。どちらの契約形態かを明確に確認しましょう。",
    warning:
      "契約形態によって手数料が大きく異なります。見積もり時と異なる契約形態に変更されていないか注意してください。",
    checkPoint: "2社間・3社間のどちらの契約なのか、契約書に明記されているか確認する",
  },
  {
    number: 4,
    title: "債権譲渡登記の要否と費用負担",
    description:
      "2社間ファクタリングでは、債権譲渡登記が必要な場合があります。登記費用は通常5〜10万円程度で、利用者負担となるケースが一般的です。登記不要で対応してくれる会社もあるため、事前に確認しましょう。",
    warning:
      "登記費用は手数料とは別に請求されることが多いです。少額の売掛金をファクタリングする場合、登記費用の負担が大きくなるため要注意です。",
    checkPoint: "債権譲渡登記の要否、費用負担者、登記の抹消時期が明記されているか確認する",
  },
  {
    number: 5,
    title: "売掛金の支払い方法と期日",
    description:
      "2社間ファクタリングの場合、売掛先からの入金を利用者がファクタリング会社に送金する義務があります。送金期日や送金方法（振込先口座など）を明確に確認し、期日を過ぎた場合のペナルティも確認しましょう。",
    warning:
      "売掛先からの入金を期日内にファクタリング会社へ送金しないと、遅延損害金が発生したり、法的措置を取られる可能性があります。",
    checkPoint: "売掛金の入金後、ファクタリング会社への送金期日と方法が明記されているか確認する",
  },
  {
    number: 6,
    title: "契約解除・キャンセル条件",
    description:
      "契約後にキャンセルが可能かどうか、キャンセル料が発生するかを確認しましょう。また、契約解除の条件（どのような場合に契約が解除されるか）も重要です。",
    warning:
      "「一度契約したらキャンセル不可」「キャンセル料として手数料の50%を請求」といった不当な条件を設定する業者もあります。",
    checkPoint: "契約のキャンセル条件・キャンセル料・解除事由が明記されているか確認する",
  },
  {
    number: 7,
    title: "遅延損害金・違約金の条件",
    description:
      "売掛先からの入金をファクタリング会社に送金する際に遅延した場合の損害金率を確認しましょう。年利14.6%（法定利率）を大幅に超える遅延損害金が設定されている場合は注意が必要です。",
    warning:
      "異常に高い遅延損害金（年利30%以上など）は、実質的な高利貸しの特徴です。契約前に必ず確認してください。",
    checkPoint: "遅延損害金の利率が明記され、法外な金額でないか確認する",
  },
  {
    number: 8,
    title: "秘密保持条項（売掛先への通知）",
    description:
      "2社間ファクタリングの場合、売掛先にファクタリングの利用を知らせないことが前提です。しかし、契約書に「必要に応じて売掛先に通知できる」という条項が含まれていないか確認しましょう。",
    warning:
      "一部の業者は、支払いが遅れた場合に売掛先に直接連絡する権利を契約書に盛り込んでいることがあります。2社間を選んだ意味がなくなる可能性があります。",
    checkPoint: "売掛先への通知条件が明確に定められているか確認する",
  },
  {
    number: 9,
    title: "対象債権の特定",
    description:
      "ファクタリングの対象となる売掛債権が正確に特定されているか確認しましょう。売掛先名、請求書番号、金額、支払い期日などが契約書に明記されている必要があります。",
    warning:
      "対象債権が曖昧な場合、想定していない債権まで譲渡対象に含まれるトラブルが発生する可能性があります。",
    checkPoint: "対象となる売掛債権（売掛先・金額・期日）が正確に記載されているか確認する",
  },
  {
    number: 10,
    title: "契約書の控えの受領",
    description:
      "契約書の控え（コピー）を必ず受け取りましょう。悪質な業者は契約書の控えを渡さず、後から契約内容を変更するケースがあります。電子契約の場合はPDFデータを保存しておきましょう。",
    warning:
      "契約書の控えを渡してくれない業者は信頼性に欠けます。契約書の受け取りを拒否された場合は、その業者との取引を避けることをおすすめします。",
    checkPoint: "契約書の控え（原本・コピー・PDF）を受領できることを確認する",
  },
];

const dangerSigns = [
  {
    title: "契約書がない、または口頭での契約",
    description: "正規のファクタリング会社は必ず書面（電子契約含む）で契約を締結します。口頭だけで取引を進める業者は避けましょう。",
  },
  {
    title: "手数料が異常に高い（30%以上）",
    description: "手数料が30%を超える場合、実質的な高利貸しの可能性があります。2社間でも通常は18%以下が相場です。",
  },
  {
    title: "会社の所在地や代表者情報が不明",
    description: "ホームページや契約書に会社の所在地、代表者名、電話番号が明記されていない業者は信頼性に欠けます。",
  },
  {
    title: "償還請求権ありの契約を強要する",
    description: "リコース（償還請求権あり）契約で貸金業登録がない業者は、ファクタリングを装ったヤミ金の可能性が高いです。",
  },
  {
    title: "担保や保証人を要求する",
    description: "ファクタリングは売掛債権の売買であり、担保や保証人は不要です。これらを求める業者は実質的な貸付を行っている可能性があります。",
  },
];

const faqs = [
  {
    question: "ファクタリングの契約書はどのような形式ですか？",
    answer:
      "ファクタリングの契約書は「債権譲渡契約書」という形式が一般的です。近年はオンライン完結型のサービスも増えており、クラウドサインやDocuSignなどの電子契約サービスを利用するケースも増加しています。紙の契約でも電子契約でも法的効力は同じです。",
  },
  {
    question: "契約書の内容が理解できない場合はどうすればいいですか？",
    answer:
      "契約書の内容が理解できない場合は、弁護士や行政書士に相談することをおすすめします。初回相談無料の法律事務所も多いため、大きな金額の取引の場合は専門家に確認してもらうと安心です。また、契約書の不明点をファクタリング会社に質問し、納得できる回答が得られない場合は契約を見送りましょう。",
  },
  {
    question: "電子契約でも問題ありませんか？",
    answer:
      "はい、電子契約でも法的効力は紙の契約と同等です。電子署名法に基づく電子署名が付されていれば有効です。むしろ、電子契約はPDFで契約書が保管されるため、紛失リスクが低く、後から内容を確認しやすいメリットがあります。",
  },
  {
    question: "契約後にトラブルが発生した場合はどこに相談すべきですか？",
    answer:
      "ファクタリングに関するトラブルは、金融庁の金融サービス利用者相談室、消費者ホットライン（188）、弁護士会の法律相談などに相談できます。ファクタリングを装ったヤミ金被害の場合は、警察への通報も検討してください。",
  },
  {
    question: "契約書に押印は必要ですか？",
    answer:
      "法的には押印がなくても契約は成立しますが、実務上は会社の実印や代表者印を押印するのが一般的です。電子契約の場合は電子署名が押印の代わりとなります。重要な契約書には実印を使用し、印鑑証明書を添付することで、より確実な証拠力を持たせることができます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファクタリングの契約書チェックリスト｜契約前に確認すべき10項目",
  description:
    "ファクタリング契約前に確認すべき10項目をチェックリスト形式で解説。悪質業者を見抜くポイントも紹介。",
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
      "https://factoring-partner.pages.dev/articles/contract-checklist/",
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
      name: "契約書チェックリスト",
      item: "https://factoring-partner.pages.dev/articles/contract-checklist/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ContractChecklistPage() {
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
          { label: "契約書チェックリスト" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            実務ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングの契約書チェックリスト
            <br className="hidden md:block" />
            契約前に確認すべき10項目
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリング契約前に確認すべき重要な10項目を、チェックリスト形式で分かりやすく解説。悪質業者を見抜くポイントも紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#importance" className="hover:underline">
                1. 契約書チェックが重要な理由
              </a>
            </li>
            <li>
              <a href="#checklist" className="hover:underline">
                2. 確認すべき10項目チェックリスト
              </a>
            </li>
            <li>
              <a href="#danger" className="hover:underline">
                3. 悪質業者を見抜く5つのサイン
              </a>
            </li>
            <li>
              <a href="#before-contract" className="hover:underline">
                4. 契約前にやるべきこと
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                5. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 重要性 ─── */}
        <section id="importance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            契約書チェックが重要な理由
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリング業界は銀行や消費者金融のような登録制度（貸金業登録）が必要ないため、参入障壁が低く、中には悪質な業者も存在します。契約書を十分に確認せずに契約すると、以下のようなトラブルに巻き込まれる可能性があります。
          </p>
          <div className="mb-6 space-y-3">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-4">
              <p className="text-sm leading-relaxed text-text-light">
                <strong className="text-accent">トラブル例1：</strong>見積もり時の手数料と契約書の手数料が異なり、想定以上のコストが発生した
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-4">
              <p className="text-sm leading-relaxed text-text-light">
                <strong className="text-accent">トラブル例2：</strong>ノンリコースだと思っていたら、実はリコース契約で売掛先の倒産リスクを負わされた
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-4">
              <p className="text-sm leading-relaxed text-text-light">
                <strong className="text-accent">トラブル例3：</strong>高額な遅延損害金や違約金が設定されており、資金繰りがさらに悪化した
              </p>
            </div>
          </div>
          <p className="leading-relaxed text-text-light">
            こうしたトラブルを防ぐために、契約書の内容を一つひとつ確認することが非常に重要です。以下のチェックリストを活用して、契約前に必ず確認しましょう。
          </p>
        </section>

        {/* ── チェックリスト ─── */}
        <section id="checklist" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            確認すべき10項目チェックリスト
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリング契約書で確認すべき10項目を、重要度順に解説します。各項目のチェックポイントと注意点を確認してください。
          </p>
          <div className="space-y-6">
            {checklistItems.map((item) => (
              <div
                key={item.number}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {item.number}
                  </span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-text-main">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {item.description}
                    </p>
                    <div className="mt-3 rounded-lg border border-accent/30 bg-orange-50 p-3">
                      <p className="text-sm leading-relaxed text-text-light">
                        <strong className="text-accent">注意：</strong>
                        {item.warning}
                      </p>
                    </div>
                    <div className="mt-3 rounded-lg border border-secondary/30 bg-teal-50 p-3">
                      <p className="text-sm leading-relaxed text-text-light">
                        <strong className="text-secondary">チェックポイント：</strong>
                        {item.checkPoint}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 悪質業者 ─── */}
        <section id="danger" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            悪質業者を見抜く5つのサイン
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            以下のような特徴がある業者は、悪質なファクタリング業者やファクタリングを装ったヤミ金の可能性が高いです。一つでも該当する場合は、契約を見送ることを強くおすすめします。
          </p>
          <div className="space-y-4">
            {dangerSigns.map((sign, index) => (
              <div
                key={sign.title}
                className="rounded-lg border border-accent/30 bg-orange-50 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-text-main">{sign.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-light">
                      {sign.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 契約の流れ ─── */}
        <section id="contract-flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング契約の一般的な流れ
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            チェックリストの確認をどのタイミングで行うかを把握するために、ファクタリング契約の一般的な流れを確認しましょう。
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">問い合わせ・見積もり依頼</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-light">
                  ファクタリング会社に問い合わせて見積もりを依頼します。この段階で売掛先の情報、売掛金額、支払い期日などを伝えます。複数社に見積もりを取ることをおすすめします。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出・審査</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-light">
                  本人確認書類、請求書、通帳コピー、決算書などの必要書類を提出し、審査を受けます。審査では主に売掛先の信用力が確認されます。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">審査結果の通知・条件提示</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-light">
                  審査に通過すると、手数料率や買取金額などの条件が提示されます。この段階で見積もり時の条件と相違がないか確認しましょう。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">4</span>
              <div>
                <h3 className="font-bold text-text-main">契約書の確認・締結（チェックリストの出番）</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-light">
                  <strong className="text-accent">ここが最も重要なステップです。</strong>契約書の内容を上記のチェックリストで一つひとつ確認してから署名・押印しましょう。急かされても焦らず、不明点は必ず質問してください。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">5</span>
              <div>
                <h3 className="font-bold text-text-main">入金・売掛金の回収</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-light">
                  契約締結後、手数料を差し引いた金額が指定口座に入金されます。2社間の場合、売掛先から入金があったら速やかにファクタリング会社へ送金します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 契約前にやるべきこと ─── */}
        <section id="before-contract" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            契約前にやるべきこと
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            チェックリストの確認に加え、契約前に以下のことを実施しておくと、トラブルを未然に防ぐことができます。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">会社情報を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                国税庁の法人番号公表サイトで会社の実在を確認しましょう。また、所在地の住所をGoogleマップで確認し、バーチャルオフィスやレンタルスペースではないかチェックすることも有効です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">複数社から見積もりを取る</h3>
              <p className="text-sm leading-relaxed text-text-light">
                3社以上から見積もりを取ることで、手数料の相場感を把握できます。1社だけの見積もりでは、手数料が高いか安いか判断がつきません。相見積もりは交渉の材料にもなります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">口コミ・評判を調べる</h3>
              <p className="text-sm leading-relaxed text-text-light">
                利用者の口コミや評判を確認しましょう。Googleのレビューやビジネス系の口コミサイト、SNSでの評判を調べることで、業者の信頼性をある程度判断できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">不明点は事前に質問する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                契約書の内容で理解できない点は、契約前に必ず質問しましょう。質問に対して明確に回答してくれない、はぐらかされる場合は要注意です。誠実な業者は丁寧に説明してくれます。
              </p>
            </div>
          </div>
        </section>

        {/* ── チェックリスト印刷用まとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            チェックリスト まとめ（一覧）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            契約前に以下の10項目を確認しましょう。一つでも不明確な項目がある場合は、ファクタリング会社に質問し、納得してから契約してください。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm text-text-light">
              {checklistItems.map((item) => (
                <li key={item.number} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-border text-xs font-bold text-primary">
                    {item.number}
                  </span>
                  <span><strong className="text-text-main">{item.title}</strong> - {item.checkPoint}</span>
                </li>
              ))}
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
              href="/articles/troubles/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">トラブル事例と対策</p>
              <p className="mt-1 text-sm text-text-light">
                悪質業者の見分け方と被害防止策
              </p>
            </Link>
            <Link
              href="/articles/fee-negotiation/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料を下げる交渉術5選</p>
              <p className="mt-1 text-sm text-text-light">
                コスト削減の具体的な方法を紹介
              </p>
            </Link>
            <Link
              href="/articles/is-it-legal/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングは合法？</p>
              <p className="mt-1 text-sm text-text-light">
                法的根拠と違法業者の見分け方を解説
              </p>
            </Link>
            <Link
              href="/articles/required-documents/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">必要書類一覧</p>
              <p className="mt-1 text-sm text-text-light">
                申し込みに必要な書類と準備のポイント
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            安心できるファクタリング会社を見つけましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            契約書のチェックポイントを理解したら、信頼できるファクタリング会社を比較しましょう。15社を手数料・入金速度・審査通過率で徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
