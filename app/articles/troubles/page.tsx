import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリングのトラブル事例7選｜契約前に知るべき注意点",
  description:
    "ファクタリングで実際に起きたトラブル事例7選を紹介。偽装融資・高額手数料・追加費用請求・契約書不備・売掛先への無断通知など、各トラブルの対処法と安全な業者の見分け方を解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/troubles/",
  },
  openGraph: {
    title:
      "ファクタリングのトラブル事例7選｜契約前に知るべき注意点",
    description:
      "ファクタリングのトラブル事例7選と対処法。安全な業者の見分け方も解説。",
    url: "https://factoring-partner.pages.dev/articles/troubles/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const troubleCases = [
  {
    number: 1,
    title: "偽装ファクタリング（実質的な闇金融）",
    description:
      "ファクタリングを装いながら、実質的には高金利の貸付を行う悪質業者の事例です。形式上は売掛債権の買取を装いますが、契約書をよく読むと「償還請求権あり（リコース契約）」「分割返済」「遅延損害金」などの融資特有の条項が含まれています。",
    impact:
      "年利換算で数百%〜数千%の利息を請求されたり、返済できない場合に脅迫的な取り立てを受けたりするケースがあります。貸金業登録をせずに貸付を行っているため、出資法・貸金業法違反の犯罪行為です。",
    prevention:
      "契約書に「償還請求権」がないことを確認してください。ファクタリングは売掛債権の売買であり、売掛先が支払えなかった場合に利用者が弁済義務を負うのは融資です。また、分割返済を求められる場合も融資に該当するため要注意です。",
  },
  {
    number: 2,
    title: "高額な手数料の請求",
    description:
      "見積もり時には「手数料5%」と提示されたにもかかわらず、契約時に「審査の結果、手数料20%になりました」と大幅に引き上げられるケースです。急いで資金が必要な利用者の足元を見た不当な手数料設定が問題になっています。",
    impact:
      "100万円の売掛金に対して手数料が20%なら、受取額はわずか80万円。急ぎの場合は冷静な判断ができず、割高な手数料で契約してしまいがちです。2社間ファクタリングの相場は8%〜18%程度であり、20%を超える場合は注意が必要です。",
    prevention:
      "必ず複数社から見積もりを取り、手数料を比較してください。見積もりと契約時の手数料が大きく異なる場合は契約を見送りましょう。PAYTODAY（1%〜9.5%）やQuQuMo（1%〜14.8%）など、手数料が明確な会社を選ぶのが安全です。",
  },
  {
    number: 3,
    title: "契約時の追加費用請求",
    description:
      "手数料以外に「事務手数料」「審査費用」「登記費用」「出張費」「印紙代」などの名目で追加費用を請求されるケースです。手数料は安く見せておき、追加費用で利益を確保する手法で、実質的な手数料は表示の2〜3倍になることもあります。",
    impact:
      "手数料10%で契約したつもりが、事務手数料3%、登記費用5万円、印紙代1万円などを加算され、実質的な手数料が15%以上になるケースがあります。少額のファクタリングほど、固定の追加費用が占める割合が大きくなります。",
    prevention:
      "「手数料以外に費用はかかりますか？」と明確に確認し、すべての費用を含めた総コストを把握してから契約してください。オンライン完結型のサービス（QuQuMo・ペイトナー・ラボルなど）は追加費用がかからない透明な料金体系が多いです。",
  },
  {
    number: 4,
    title: "契約書の不備・不当な条項",
    description:
      "契約書を交付しない、または口頭のみで契約を進めようとする業者や、契約書に不当な条項（一方的な解除条件、過大な違約金、情報の無断利用など）が含まれているケースです。",
    impact:
      "契約書がないとトラブル発生時に証拠がなく、泣き寝入りになりかねません。また、不当な条項により利用者に一方的に不利な条件を押し付けられることがあります。後から「契約書にそう書いてある」と主張され、対処が困難になります。",
    prevention:
      "契約書は必ず書面（電子契約含む）で受け取り、署名前に内容をしっかり確認してください。特に「償還請求権の有無」「手数料の金額」「支払方法」「解除条件」「違約金」の5項目は必ずチェックしましょう。不明点があれば契約前に質問し、回答を書面でもらいましょう。",
  },
  {
    number: 5,
    title: "売掛先への無断通知",
    description:
      "2社間ファクタリングでは売掛先にファクタリングの利用を通知しないことが前提ですが、一部の悪質業者が利用者の同意なく売掛先に連絡してしまうケースです。",
    impact:
      "売掛先にファクタリングの利用を知られると、「資金繰りに困っているのでは」と信用不安を抱かれ、取引関係に悪影響を及ぼす可能性があります。最悪の場合、取引停止や契約解除につながることもあります。",
    prevention:
      "契約書に「売掛先への通知を行わない」旨が明記されていることを確認してください。また、口コミや評判を調べ、実際にトラブルが発生していないか確認しましょう。大手のファクタリング会社（ビートレーディング・PAYTODAY・QuQuMoなど）は守秘義務を遵守しています。",
  },
  {
    number: 6,
    title: "債権の二重譲渡トラブル",
    description:
      "同じ売掛債権を複数のファクタリング会社に譲渡してしまう「二重譲渡」のトラブルです。利用者が意図的に行うケースだけでなく、複数社に相見積もりを出した際に誤って二重契約してしまうケースもあります。",
    impact:
      "二重譲渡は民法上の詐欺に該当する可能性があり、刑事罰の対象になることがあります。また、ファクタリング会社から損害賠償を請求されたり、今後ファクタリングが利用できなくなったりするリスクがあります。",
    prevention:
      "売掛債権の管理を徹底し、どの債権をどの会社に譲渡したかを明確に記録してください。複数社に見積もりを依頼する際は、契約締結のタイミングを慎重に管理しましょう。債権譲渡登記が行われている場合、二重譲渡は登記で検知されます。",
  },
  {
    number: 7,
    title: "キャンセル・解約の拒否",
    description:
      "契約後にキャンセルしようとしたら「キャンセルはできない」「キャンセル料が発生する」と言われ、解約を認めてもらえないケースです。契約書にキャンセル条項がない場合や、高額なキャンセル料が設定されている場合があります。",
    impact:
      "やむを得ない事情でキャンセルしたいのに高額なキャンセル料を請求されたり、そもそもキャンセルを受け付けてもらえなかったりします。特に契約直後の冷却期間がないサービスでは、一度契約すると取り消しが困難です。",
    prevention:
      "契約前にキャンセルポリシーを確認してください。見積もりの段階では契約は成立しないため、見積もりに納得できない場合は契約しないことが最善です。また、複数社から見積もりを取ることで、焦って契約してしまうリスクを減らせます。",
  },
];

const safetyChecklist = [
  {
    title: "会社情報の透明性",
    items: [
      "会社名・代表者名・所在地・電話番号が明記されているか",
      "法人登記情報が確認できるか（法人番号検索で確認可能）",
      "ホームページに会社概要ページがあるか",
      "運営実績や取引件数が公開されているか",
    ],
  },
  {
    title: "契約条件の確認",
    items: [
      "手数料率が明確に提示されるか（相場：2社間8〜18%、3社間1〜9%）",
      "手数料以外の費用がないか確認したか",
      "償還請求権なし（ノンリコース）と明記されているか",
      "契約書が書面（電子含む）で交付されるか",
    ],
  },
  {
    title: "サービスの信頼性",
    items: [
      "口コミや評判に重大なトラブル報告がないか",
      "金融庁や消費者庁からの注意喚起に該当していないか",
      "上場企業グループや大手企業が運営しているか",
      "問い合わせ先（電話番号・メール）が明確か",
    ],
  },
];

const consultationContacts = [
  {
    name: "金融庁 金融サービス利用者相談室",
    description:
      "ファクタリングを装った違法な貸付（偽装ファクタリング）の相談ができます。金融庁は「ファクタリングに関する注意喚起」を公表しており、違法業者の情報収集も行っています。",
    contact: "電話：0570-016811（平日10:00〜17:00）",
    url: "https://www.fsa.go.jp/receipt/soudansitu/",
  },
  {
    name: "消費者庁 消費者ホットライン",
    description:
      "消費者トラブル全般について相談できる窓口です。ファクタリングに関するトラブルも対応しています。最寄りの消費生活センターを案内してもらえます。",
    contact: "電話：188（局番なし・土日祝も対応）",
    url: "",
  },
  {
    name: "法テラス（日本司法支援センター）",
    description:
      "弁護士や司法書士への相談を無料で行える制度です。収入等の条件を満たせば、無料法律相談を3回まで利用できます。ファクタリングのトラブルで損害賠償請求を検討する場合に有効です。",
    contact: "電話：0570-078374（平日9:00〜21:00、土9:00〜17:00）",
    url: "https://www.houterasu.or.jp/",
  },
  {
    name: "弁護士（ファクタリング問題に詳しい弁護士）",
    description:
      "高額な被害が発生した場合や、違法な取り立てを受けている場合は、弁護士に相談することをおすすめします。ファクタリングや債権回収に詳しい弁護士を選びましょう。初回相談無料の事務所も多いです。",
    contact: "弁護士会の法律相談窓口を利用するか、ファクタリング問題に詳しい弁護士を検索",
    url: "",
  },
  {
    name: "警察（詐欺・脅迫の場合）",
    description:
      "偽装ファクタリングによる詐欺被害や、脅迫的な取り立てを受けている場合は、警察に相談・被害届を提出しましょう。証拠（契約書、やり取りの記録、振込明細など）を準備しておくとスムーズです。",
    contact: "最寄りの警察署または#9110（警察相談専用電話）",
    url: "",
  },
];

const preventionTips = [
  {
    title: "複数社から見積もりを取る",
    description:
      "焦って1社だけで契約するのは最もリスクが高い行動です。必ず2〜3社から見積もりを取り、手数料や条件を比較しましょう。見積もりは無料で、見積もりの段階で契約は成立しないため、安心して比較検討できます。",
  },
  {
    title: "契約書を隅々まで読む",
    description:
      "急いでいる時ほど契約書を読み飛ばしがちですが、これが最大のトラブル原因です。特に「償還請求権の有無」「手数料率」「追加費用」「解除条件」「違約金」の5項目は必ず確認してください。不明な点は署名前に質問しましょう。",
  },
  {
    title: "大手・実績のある会社を選ぶ",
    description:
      "ビートレーディング（累計買取額1,300億円超）、PAYTODAY（AI審査導入）、ペイトナー（上場企業子会社）、ラボル（東証プライム上場グループ）など、運営実績が豊富で信頼性の高い会社を選びましょう。口コミサイトの評判も参考になります。",
  },
  {
    title: "「即日・誰でも・審査なし」に警戒する",
    description:
      "「審査なし」「ブラックOK」「誰でも即日100%」といった過剰な広告をしている業者は要注意です。正規のファクタリング会社は必ず審査を行い、100%通過を保証することはありません。甘すぎる条件を提示する業者には悪質業者が紛れています。",
  },
  {
    title: "手数料が30%を超えたら契約しない",
    description:
      "2社間ファクタリングの相場は8%〜18%程度です。手数料が30%を超える場合は、偽装ファクタリング（実質的な闇金融）の可能性が高いため、契約を見送ってください。金融庁も高額手数料のファクタリングに対して注意喚起を行っています。",
  },
];

const faqs = [
  {
    question: "ファクタリングで最も多いトラブルは何ですか？",
    answer:
      "最も多いトラブルは「偽装ファクタリング（実質的な闇金融）」です。ファクタリングを装いながら、実際には高金利の貸付を行う悪質業者が問題になっています。見分け方のポイントは「償還請求権の有無」です。契約書に「償還請求権あり」と記載されている場合、それはファクタリングではなく融資です。金融庁も注意喚起を行っています。",
  },
  {
    question: "ファクタリングのトラブルに遭った場合、どこに相談すればいいですか？",
    answer:
      "まずは金融庁の金融サービス利用者相談室（0570-016811）に相談してください。偽装ファクタリングの場合は警察への相談も検討しましょう。また、法テラス（0570-078374）では無料の法律相談が受けられます。高額被害の場合は、ファクタリング問題に詳しい弁護士に相談することをおすすめします。",
  },
  {
    question: "悪質なファクタリング業者の見分け方は？",
    answer:
      "悪質業者の主な特徴は(1)償還請求権がある（リコース契約）、(2)手数料が30%以上と異常に高い、(3)契約書を交付しない、(4)会社情報が不透明、(5)「審査なし・誰でもOK」と過剰に広告している、の5つです。これらに該当する場合は利用を避け、大手や実績のある会社を選びましょう。",
  },
  {
    question: "ファクタリングの契約書で必ず確認すべきポイントは？",
    answer:
      "契約書で必ず確認すべきポイントは(1)償還請求権なし（ノンリコース）と明記されているか、(2)手数料率と総コストが見積もり通りか、(3)手数料以外の追加費用がないか、(4)売掛先への通知条件、(5)キャンセル・解約条件の5つです。これらが明確に記載されていない契約書には署名しないでください。",
  },
  {
    question: "ファクタリングの二重譲渡とは何ですか？どうすれば防げますか？",
    answer:
      "二重譲渡とは、同じ売掛債権を複数のファクタリング会社に譲渡してしまうことです。民法上の詐欺に該当する可能性があり、刑事罰の対象になることがあります。防止するためには、どの債権をどの会社に譲渡したかを管理台帳で記録し、複数社に見積もりを依頼する際は契約締結のタイミングを慎重に管理しましょう。意図しない二重譲渡でも責任を問われる場合があります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファクタリングのトラブル事例7選｜契約前に知るべき注意点",
  description:
    "ファクタリングのトラブル事例7選と対処法。安全な業者の見分け方も解説。",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
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
      "https://factoring-partner.pages.dev/articles/troubles/",
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
      name: "ファクタリングのトラブル事例",
      item: "https://factoring-partner.pages.dev/articles/troubles/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function TroublesPage() {
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
          { label: "ファクタリングのトラブル事例" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-white">
            トラブル対策
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングのトラブル事例7選
            <br className="hidden md:block" />
            契約前に知るべき注意点
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングで実際に起きたトラブル事例を7つ紹介。偽装融資・高額手数料・契約書の不備など、各トラブルの対処法と安全な業者の見分け方を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#trouble-cases" className="hover:underline">
                1. ファクタリングのトラブル事例7選
              </a>
            </li>
            <li>
              <a href="#safety-checklist" className="hover:underline">
                2. 安全な業者の見分け方チェックリスト
              </a>
            </li>
            <li>
              <a href="#prevention" className="hover:underline">
                3. トラブルを未然に防ぐ5つのポイント
              </a>
            </li>
            <li>
              <a href="#contacts" className="hover:underline">
                4. トラブル時の相談先
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                5. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 導入 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングのトラブルが増加している背景
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングは合法的な資金調達手段ですが、近年の市場拡大に伴い、悪質な業者によるトラブルも増加しています。金融庁は2020年に「ファクタリングに関する注意喚起」を公表し、ファクタリングを装った違法な貸付（偽装ファクタリング）に警鐘を鳴らしています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            正規のファクタリングは、売掛債権を売却して早期に資金化する合法的な手法であり、銀行融資が受けられない企業にとって重要な資金調達手段です。しかし、一部の悪質業者がこの仕組みを悪用し、利用者に被害を与えています。
          </p>
          <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="mb-3 font-bold text-accent">金融庁の注意喚起ポイント</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">&#9888;</span>
                <span>ファクタリングを装った高金利の貸付に注意</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">&#9888;</span>
                <span>償還請求権付きの契約は融資に該当する可能性がある</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">&#9888;</span>
                <span>契約書の内容を十分に確認してから契約すること</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">&#9888;</span>
                <span>被害に遭った場合は金融庁や消費者庁に相談すること</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── トラブル事例7選 ─── */}
        <section id="trouble-cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングのトラブル事例7選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            実際に報告されているファクタリングのトラブル事例を7つ紹介します。各トラブルの内容・影響・予防法を詳しく解説しますので、契約前の参考にしてください。
          </p>
          <div className="space-y-8">
            {troubleCases.map((trouble) => (
              <div
                key={trouble.number}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-4 text-lg font-bold text-text-main">
                  <span className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {trouble.number}
                  </span>
                  {trouble.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="mb-1 text-sm font-bold text-primary">事例の概要</p>
                    <p className="leading-relaxed text-text-light">{trouble.description}</p>
                  </div>
                  <div className="rounded bg-red-50 p-4">
                    <p className="mb-1 text-sm font-bold text-red-600">被害・影響</p>
                    <p className="text-sm leading-relaxed text-text-light">{trouble.impact}</p>
                  </div>
                  <div className="rounded bg-teal-50 p-4">
                    <p className="mb-1 text-sm font-bold text-secondary">予防法・対処法</p>
                    <p className="text-sm leading-relaxed text-text-light">{trouble.prevention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 安全な業者の見分け方 ─── */}
        <section id="safety-checklist" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            安全な業者の見分け方チェックリスト
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            安全なファクタリング会社を選ぶために、以下のチェックリストを活用してください。すべての項目に該当する会社であれば、安心して利用できます。
          </p>
          <div className="space-y-6">
            {safetyChecklist.map((category) => (
              <div
                key={category.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-4 text-lg font-bold text-primary">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-light">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border bg-white text-xs text-text-light">
                        &#9744;
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">安心して利用できるファクタリング会社</p>
            <p className="text-sm leading-relaxed text-text-light">
              上記チェックリストを満たす代表的な会社として、ビートレーディング（累計買取額1,300億円超）、PAYTODAY（AI審査導入・手数料1%〜）、ペイトナー（上場企業子会社・最短10分入金）、ラボル（東証プライム上場グループ・24時間対応）、QuQuMo（オンライン完結・手数料1%〜）などが挙げられます。
            </p>
          </div>
        </section>

        {/* ── トラブル予防 ─── */}
        <section id="prevention" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トラブルを未然に防ぐ5つのポイント
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングのトラブルのほとんどは、事前の確認と準備で防ぐことができます。以下の5つのポイントを押さえておきましょう。
          </p>
          <div className="space-y-6">
            {preventionTips.map((tip, idx) => (
              <div
                key={tip.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {idx + 1}. {tip.title}
                </h3>
                <p className="leading-relaxed text-text-light">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 正規ファクタリングと偽装ファクタリングの違い ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            正規ファクタリングと偽装ファクタリングの違い
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            正規のファクタリングと偽装ファクタリング（実質的な闇金融）の違いを一覧表で比較します。契約前にこの違いを理解しておくことが、トラブル防止の第一歩です。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">項目</th>
                  <th className="px-4 py-3 font-semibold">正規ファクタリング</th>
                  <th className="px-4 py-3 font-semibold">偽装ファクタリング</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-text-main">法的性質</td>
                  <td className="px-4 py-3 text-text-light">売掛債権の売買（債権譲渡）</td>
                  <td className="px-4 py-3 text-red-600">実質的な金銭の貸付（融資）</td>
                </tr>
                <tr className="bg-hover-bg">
                  <td className="px-4 py-3 font-medium text-text-main">償還請求権</td>
                  <td className="px-4 py-3 text-text-light">なし（ノンリコース）</td>
                  <td className="px-4 py-3 text-red-600">あり（リコース）</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-text-main">手数料・利息</td>
                  <td className="px-4 py-3 text-text-light">1%〜20%程度</td>
                  <td className="px-4 py-3 text-red-600">年利換算で数百%〜数千%</td>
                </tr>
                <tr className="bg-hover-bg">
                  <td className="px-4 py-3 font-medium text-text-main">返済方法</td>
                  <td className="px-4 py-3 text-text-light">売掛金の一括入金（自動）</td>
                  <td className="px-4 py-3 text-red-600">分割返済を要求される</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-text-main">契約書</td>
                  <td className="px-4 py-3 text-text-light">債権譲渡契約書を交付</td>
                  <td className="px-4 py-3 text-red-600">契約書なし or 金消契約</td>
                </tr>
                <tr className="bg-hover-bg">
                  <td className="px-4 py-3 font-medium text-text-main">貸金業登録</td>
                  <td className="px-4 py-3 text-text-light">不要（債権売買のため）</td>
                  <td className="px-4 py-3 text-red-600">必要（未登録は違法）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 相談先 ─── */}
        <section id="contacts" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トラブル時の相談先
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングのトラブルに遭ってしまった場合は、以下の相談窓口を利用してください。早期に相談することで、被害の拡大を防ぐことができます。
          </p>
          <div className="space-y-6">
            {consultationContacts.map((contact) => (
              <div
                key={contact.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-primary">{contact.name}</h3>
                <p className="mb-3 leading-relaxed text-text-light">{contact.description}</p>
                <div className="rounded bg-section-bg p-3">
                  <p className="text-sm font-medium text-text-main">{contact.contact}</p>
                  {contact.url && (
                    <p className="mt-1 text-sm text-primary">
                      {contact.url}
                    </p>
                  )}
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
              href="/articles/is-it-legal/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングは合法？違法？</p>
              <p className="mt-1 text-sm text-text-light">
                法的根拠と安全な利用方法を解説
              </p>
            </Link>
            <Link
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">
                適正な手数料の見分け方を解説
              </p>
            </Link>
            <Link
              href="/articles/debt-registration/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">債権譲渡登記とは？</p>
              <p className="mt-1 text-sm text-text-light">
                費用・必要性・登記不要の会社を解説
              </p>
            </Link>
            <Link
              href="/articles/required-documents/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングの必要書類一覧</p>
              <p className="mt-1 text-sm text-text-light">
                請求書のみでOKな会社も紹介
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            安全なファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            実績豊富な大手ファクタリング会社を手数料・入金速度・口コミで徹底比較。トラブルなく安心して利用できるサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
