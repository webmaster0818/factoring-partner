import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリングの債権譲渡登記とは？費用・必要性・登記不要の会社を解説",
  description:
    "ファクタリングの債権譲渡登記について、仕組み・費用（登録免許税7,500円＋司法書士報酬）・必要性・デメリット・登記不要の会社一覧まで徹底解説。登記が不要なQuQuMo・ペイトナー・ラボル・OLTAも紹介します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/debt-registration/",
  },
  openGraph: {
    title:
      "ファクタリングの債権譲渡登記とは？費用・必要性・登記不要の会社を解説",
    description:
      "債権譲渡登記の仕組み・費用・デメリットと、登記不要のファクタリング会社を解説。",
    url: "https://factoring-partner.pages.dev/articles/debt-registration/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const registrationBasics = [
  {
    title: "債権譲渡登記の定義",
    description:
      "債権譲渡登記とは、法務局に「この売掛債権はA社からB社に譲渡されました」という事実を登録する手続きです。2004年の「動産及び債権の譲渡の対抗要件に関する民法の特例等に関する法律（債権譲渡特例法）」に基づく制度で、債権譲渡の「対抗要件」を備えるために行われます。",
  },
  {
    title: "対抗要件とは",
    description:
      "対抗要件とは、第三者に対して「この債権は自分のものだ」と主張するために必要な法的要件です。債権譲渡の対抗要件には、(1)売掛先への通知または承諾（民法467条）と、(2)債権譲渡登記（債権譲渡特例法）の2つの方法があります。2社間ファクタリングでは売掛先に通知しないため、代わりに債権譲渡登記で対抗要件を備えるケースがあります。",
  },
  {
    title: "なぜファクタリング会社が登記を求めるのか",
    description:
      "ファクタリング会社が債権譲渡登記を求める主な理由は「二重譲渡の防止」です。利用者が同じ売掛債権を複数のファクタリング会社に譲渡した場合、登記が先に行われた会社が優先的に権利を主張できます。これにより、ファクタリング会社は自社の権利を保全できます。",
  },
];

const registrationCosts = [
  {
    name: "登録免許税",
    amount: "7,500円（1件あたり）",
    description:
      "法務局に登記を行う際に国に納める税金です。債権の個数に関係なく、1回の申請につき7,500円です。これは法律で定められた金額のため、どの司法書士に依頼しても同じです。",
  },
  {
    name: "司法書士報酬",
    amount: "3万円〜5万円程度",
    description:
      "債権譲渡登記の申請手続きを司法書士に依頼する場合の報酬です。金額は司法書士事務所によって異なりますが、一般的に3万円〜5万円程度です。ファクタリング会社が提携している司法書士に依頼するケースがほとんどです。",
  },
  {
    name: "登記抹消費用",
    amount: "1,000円＋司法書士報酬1万円〜",
    description:
      "ファクタリングの取引が完了した後、登記を抹消する費用です。登録免許税1,000円に加え、司法書士報酬（1万円〜2万円程度）がかかります。登記を放置すると法人登記簿に記録が残り続けるため、取引完了後は速やかに抹消することが重要です。",
  },
  {
    name: "登記事項証明書",
    amount: "500円程度",
    description:
      "登記の内容を確認するための証明書です。債権譲渡登記がされているかどうかを確認する際に利用します。法務局のオンラインサービスで取得可能です。",
  },
];

const registrationDemerits = [
  {
    title: "法人登記簿に記載される",
    description:
      "債権譲渡登記を行うと、法人の登記事項証明書（登記簿謄本）に債権譲渡の事実が記載されます。これは誰でも閲覧可能なため、取引先や金融機関が登記簿を確認した際に、ファクタリングの利用を知られてしまうリスクがあります。",
    impact:
      "金融機関が登記簿を確認した場合、「資金繰りに問題がある」と判断され、融資の審査に悪影響を与える可能性があります。特に銀行融資を検討している場合は要注意です。",
  },
  {
    title: "費用が発生する",
    description:
      "登記には登録免許税7,500円と司法書士報酬3万円〜5万円がかかります。さらに取引完了後の抹消費用も必要です。合計で5万円〜8万円程度の費用が発生するため、少額のファクタリングでは手数料に占める割合が大きくなります。",
    impact:
      "例えば50万円のファクタリングで登記費用が5万円かかる場合、実質的な手数料が10%上乗せされることになります。100万円以下の少額取引では特にコスト負担が重くなります。",
  },
  {
    title: "手続きに時間がかかる",
    description:
      "債権譲渡登記の申請から完了まで、通常1〜3営業日程度かかります。即日ファクタリングを利用したい場合、登記の手続きが入ると入金が遅れる可能性があります。ただし、多くのファクタリング会社は登記前に入金を行い、後から登記するケースが一般的です。",
    impact:
      "即日入金を希望する場合は、登記不要の会社を選ぶか、登記は事後処理で行ってくれる会社を選ぶとスムーズです。",
  },
  {
    title: "個人事業主は利用できない",
    description:
      "債権譲渡登記は「法人」のみが利用できる制度です。個人事業主（フリーランス含む）は債権譲渡登記ができないため、登記を必須とするファクタリング会社は利用できません。個人事業主向けのサービスは原則として登記不要です。",
    impact:
      "個人事業主の方は、登記不要の会社（ペイトナー・ラボル・QuQuMoなど）を選べば問題ありません。",
  },
];

const noRegistrationCompanies = [
  {
    name: "QuQuMo",
    fee: "1%〜14.8%",
    speed: "最短2時間",
    target: "個人・法人",
    note: "債権譲渡登記不要を明確にうたっている。オンライン完結型で電子契約対応。登記費用がかからないため、実質的な手数料を低く抑えられる。手数料1%〜の低コストが魅力。",
  },
  {
    name: "ペイトナー",
    fee: "一律10%",
    speed: "最短10分",
    target: "個人・法人",
    note: "個人事業主向けサービスのため債権譲渡登記は不要。請求書をアップロードするだけで最短10分入金。手数料は一律10%で追加費用なし。初回25万円・最大100万円まで。",
  },
  {
    name: "ラボル",
    fee: "一律10%",
    speed: "最短30分",
    target: "個人・法人",
    note: "24時間365日対応で、債権譲渡登記は不要。独自の送金システムにより土日祝日でも入金可能。東証プライム上場グループの安心感。登記費用を気にせず利用できる。",
  },
  {
    name: "OLTA",
    fee: "2%〜9%",
    speed: "最短即日",
    target: "法人中心",
    note: "クラウドファクタリングのパイオニア。債権譲渡登記不要で、オンライン完結型。手数料2%〜9%と低コスト。法人向けのサービスだが、登記費用がかからないため利用しやすい。",
  },
  {
    name: "PAYTODAY",
    fee: "1%〜9.5%",
    speed: "最短30分",
    target: "個人・法人",
    note: "AI審査導入で最短30分入金。債権譲渡登記は原則不要。手数料1%〜9.5%の低コストと高速入金を両立。完全オンライン完結で追加費用も不要。",
  },
  {
    name: "FREENANCE",
    fee: "3%〜10%",
    speed: "最短即日",
    target: "個人中心",
    note: "フリーランス向けのためにサービス設計されており、債権譲渡登記は不要。損害賠償保険が無料付帯される独自のメリットがある。個人事業主の利用に最適。",
  },
];

const threePartyFactoring = [
  {
    title: "3社間ファクタリングでは登記が不要な理由",
    description:
      "3社間ファクタリングでは、売掛先に対して債権譲渡の通知を行い、承諾を得ます。この「売掛先への通知・承諾」が民法467条に基づく対抗要件となるため、わざわざ法務局で債権譲渡登記を行う必要がありません。つまり、3社間ファクタリングでは通知・承諾だけで法的に有効な対抗要件が備わります。",
  },
  {
    title: "3社間ファクタリングのメリット",
    description:
      "登記不要のため登記費用（5万円〜8万円）が不要になります。また、売掛先が支払いに直接関与するため、ファクタリング会社の回収リスクが低くなり、手数料も2社間（8%〜18%）に比べて1%〜9%と大幅に安くなります。コスト面では3社間が圧倒的に有利です。",
  },
  {
    title: "3社間ファクタリングのデメリット",
    description:
      "売掛先にファクタリングの利用を知られてしまうため、「資金繰りに困っている」と思われるリスクがあります。また、売掛先の承諾を得るまでに時間がかかるため、即日入金は基本的に不可能です。取引先との関係性や信頼関係を考慮した上で選択する必要があります。",
  },
];

const registrationVsNoRegistration = [
  {
    item: "登記費用",
    withRegistration: "5万円〜8万円",
    withoutRegistration: "0円",
  },
  {
    item: "法人登記簿への記載",
    withRegistration: "あり（第三者に閲覧される可能性）",
    withoutRegistration: "なし",
  },
  {
    item: "入金スピード",
    withRegistration: "登記手続きで遅れる場合あり",
    withoutRegistration: "影響なし",
  },
  {
    item: "個人事業主の利用",
    withRegistration: "不可（法人のみ）",
    withoutRegistration: "可能",
  },
  {
    item: "二重譲渡防止",
    withRegistration: "登記で保全可能",
    withoutRegistration: "別の方法で確認",
  },
  {
    item: "手数料への影響",
    withRegistration: "登記費用分が上乗せされる場合あり",
    withoutRegistration: "登記費用なしで手数料のみ",
  },
];

const faqs = [
  {
    question: "債権譲渡登記とは何ですか？",
    answer:
      "債権譲渡登記とは、法務局に「この売掛債権はA社からB社に譲渡された」という事実を登録する手続きです。債権譲渡特例法に基づく制度で、第三者に対して債権の帰属を主張するための「対抗要件」を備えるために行われます。ファクタリングでは主に2社間取引で、二重譲渡を防止する目的で利用されます。",
  },
  {
    question: "債権譲渡登記の費用はいくらかかりますか？",
    answer:
      "債権譲渡登記にかかる費用は、登録免許税7,500円＋司法書士報酬3万円〜5万円で、合計4万円〜6万円程度です。さらに取引完了後の登記抹消費用（登録免許税1,000円＋司法書士報酬1万円〜）もかかるため、トータルでは5万円〜8万円程度の費用が発生します。少額のファクタリングでは大きな負担になります。",
  },
  {
    question: "債権譲渡登記が不要なファクタリング会社はありますか？",
    answer:
      "はい、多くのオンライン完結型ファクタリング会社は債権譲渡登記を不要としています。代表的な会社としては、QuQuMo（手数料1%〜）、ペイトナー（最短10分入金）、ラボル（24時間対応）、OLTA（手数料2%〜9%）、PAYTODAY（AI審査）などがあります。登記費用を節約したい場合は、これらの会社を選びましょう。",
  },
  {
    question: "債権譲渡登記をすると金融機関にバレますか？",
    answer:
      "はい、バレる可能性があります。債権譲渡登記は法人の登記事項証明書に記載されるため、銀行などの金融機関が登記簿を確認した際にファクタリングの利用を知られてしまいます。「資金繰りに問題がある」と判断され、融資の審査に悪影響を及ぼす可能性があるため注意が必要です。登記不要の会社を選べば、このリスクを回避できます。",
  },
  {
    question: "個人事業主でも債権譲渡登記はできますか？",
    answer:
      "いいえ、債権譲渡登記は法人のみが利用できる制度です。個人事業主（フリーランス含む）は債権譲渡登記ができないため、登記を必須とするファクタリング会社は利用できません。ただし、ペイトナー・ラボル・QuQuMo・PAYTODAYなど多くのオンライン完結型サービスは登記不要で個人事業主も利用できます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファクタリングの債権譲渡登記とは？費用・必要性・登記不要の会社を解説",
  description:
    "債権譲渡登記の仕組み・費用・デメリットと、登記不要のファクタリング会社を解説。",
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
      "https://factoring-partner.pages.dev/articles/debt-registration/",
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
      name: "債権譲渡登記とは",
      item: "https://factoring-partner.pages.dev/articles/debt-registration/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function DebtRegistrationPage() {
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
          { label: "債権譲渡登記とは" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-white">
            登記ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングの債権譲渡登記とは？
            <br className="hidden md:block" />
            費用・必要性・登記不要の会社を解説
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            債権譲渡登記の仕組み、費用（登録免許税7,500円＋司法書士報酬）、メリット・デメリット、登記が不要なファクタリング会社まで徹底解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#basics" className="hover:underline">
                1. 債権譲渡登記とは
              </a>
            </li>
            <li>
              <a href="#costs" className="hover:underline">
                2. 債権譲渡登記の費用
              </a>
            </li>
            <li>
              <a href="#demerits" className="hover:underline">
                3. 債権譲渡登記のデメリット
              </a>
            </li>
            <li>
              <a href="#no-registration" className="hover:underline">
                4. 登記不要のファクタリング会社一覧
              </a>
            </li>
            <li>
              <a href="#three-party" className="hover:underline">
                5. 3社間ファクタリングなら登記不要
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                6. 登記あり vs 登記なし比較表
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 債権譲渡登記とは ─── */}
        <section id="basics" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            債権譲渡登記とは
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングを利用する際に「債権譲渡登記」という言葉を目にすることがあります。ファクタリング会社によっては登記を求められるケースがあり、費用負担やデメリットを理解しておくことが重要です。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            ここでは、債権譲渡登記の基本的な仕組みと、なぜファクタリングで登記が必要になるのかを解説します。
          </p>
          <div className="space-y-6">
            {registrationBasics.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-primary">{item.title}</h3>
                <p className="leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-2 font-bold text-secondary">ポイント</p>
            <p className="text-sm leading-relaxed text-text-light">
              債権譲渡登記は、ファクタリング会社が自社の権利を保全するための手続きです。利用者側にとってはコストやデメリットが発生するため、可能であれば登記不要の会社を選ぶことをおすすめします。近年はオンライン完結型のファクタリング会社が増え、登記なしでも利用できるサービスが主流になりつつあります。
            </p>
          </div>
        </section>

        {/* ── 費用 ─── */}
        <section id="costs" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            債権譲渡登記の費用
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            債権譲渡登記にかかる費用の内訳を詳しく解説します。登記費用はファクタリングの手数料とは別に発生するため、トータルコストを把握しておくことが重要です。
          </p>
          <div className="space-y-6">
            {registrationCosts.map((cost) => (
              <div
                key={cost.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-text-main">{cost.name}</h3>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-bold text-accent">
                    {cost.amount}
                  </span>
                </div>
                <p className="leading-relaxed text-text-light">{cost.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="mb-2 font-bold text-accent">費用の総額イメージ</p>
            <div className="space-y-2 text-sm text-text-light">
              <p>登録免許税：7,500円</p>
              <p>司法書士報酬（登記）：3万円〜5万円</p>
              <p>登記抹消費用：1万円〜2万円</p>
              <p className="border-t border-accent/30 pt-2 font-bold text-accent">
                合計：約5万円〜8万円
              </p>
            </div>
            <p className="mt-3 text-sm text-text-light">
              ※この費用はファクタリングの手数料とは別にかかります。50万円のファクタリングで登記費用が5万円なら、実質的に手数料が10%上乗せされるのと同じです。
            </p>
          </div>
        </section>

        {/* ── デメリット ─── */}
        <section id="demerits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            債権譲渡登記のデメリット
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            債権譲渡登記にはファクタリング会社側のメリット（権利の保全）がありますが、利用者側にはいくつかのデメリットがあります。登記を求められた場合は、これらのデメリットを理解した上で判断しましょう。
          </p>
          <div className="space-y-6">
            {registrationDemerits.map((demerit, idx) => (
              <div
                key={demerit.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-3 text-lg font-bold text-text-main">
                  <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  {demerit.title}
                </h3>
                <p className="mb-3 leading-relaxed text-text-light">{demerit.description}</p>
                <div className="rounded bg-red-50 p-3">
                  <p className="text-sm text-text-light">
                    <span className="font-bold text-red-600">影響：</span>
                    {demerit.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 登記不要の会社一覧 ─── */}
        <section id="no-registration" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            登記不要のファクタリング会社一覧
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            債権譲渡登記が不要なファクタリング会社を紹介します。登記不要の会社を選ぶことで、登記費用（5万円〜8万円）を節約でき、法人登記簿への記載も回避できます。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            近年はオンライン完結型のファクタリング会社を中心に、登記不要のサービスが増えています。特に少額のファクタリングや、個人事業主の利用では登記不要の会社がおすすめです。
          </p>
          <div className="space-y-6">
            {noRegistrationCompanies.map((company) => (
              <div
                key={company.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-3 text-lg font-bold text-text-main">{company.name}</h3>
                <div className="mb-4 grid gap-2 text-sm md:grid-cols-3">
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">手数料</p>
                    <p className="font-semibold text-primary">{company.fee}</p>
                  </div>
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">入金速度</p>
                    <p className="font-semibold text-accent">{company.speed}</p>
                  </div>
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">対象</p>
                    <p className="font-semibold text-primary">{company.target}</p>
                  </div>
                </div>
                <p className="leading-relaxed text-text-light">{company.note}</p>
              </div>
            ))}
          </div>

          {/* 比較表 */}
          <div className="mt-8 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold">会社名</th>
                  <th className="px-3 py-3 font-semibold">手数料</th>
                  <th className="px-3 py-3 font-semibold">入金速度</th>
                  <th className="px-3 py-3 font-semibold">対象</th>
                  <th className="px-3 py-3 font-semibold">登記</th>
                </tr>
              </thead>
              <tbody>
                {noRegistrationCompanies.map((company, idx) => (
                  <tr
                    key={company.name}
                    className={idx % 2 === 0 ? "bg-white" : "bg-hover-bg"}
                  >
                    <td className="px-3 py-3 font-medium text-text-main">
                      {company.name}
                    </td>
                    <td className="px-3 py-3 text-text-light">{company.fee}</td>
                    <td className="px-3 py-3 font-semibold text-accent">
                      {company.speed}
                    </td>
                    <td className="px-3 py-3 text-text-light">{company.target}</td>
                    <td className="px-3 py-3 font-bold text-secondary">不要</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 3社間ファクタリングなら登記不要 ─── */}
        <section id="three-party" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            3社間ファクタリングなら登記不要
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            2社間ファクタリングでは債権譲渡登記を求められるケースがありますが、3社間ファクタリングでは登記が不要です。その理由とメリット・デメリットを解説します。
          </p>
          <div className="space-y-6">
            {threePartyFactoring.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-primary">{item.title}</h3>
                <p className="leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">2社間と3社間の選び方</p>
            <p className="text-sm leading-relaxed text-text-light">
              売掛先にファクタリングの利用を知られても問題ない場合は、3社間ファクタリングを選ぶことで登記費用を節約でき、手数料も大幅に安くなります。一方、売掛先に知られたくない場合は2社間を選び、その中でも登記不要の会社（QuQuMo・ペイトナー・ラボルなど）を選ぶのがベストです。
            </p>
          </div>
        </section>

        {/* ── 登記あり vs なし 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            登記あり vs 登記なし 比較表
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            債権譲渡登記がある場合とない場合の違いを一覧表で比較します。総合的に見ると、利用者側にとっては登記なしの方がメリットが大きいことがわかります。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">登記あり</th>
                  <th className="px-4 py-3 font-semibold">登記なし</th>
                </tr>
              </thead>
              <tbody>
                {registrationVsNoRegistration.map((row, idx) => (
                  <tr
                    key={row.item}
                    className={idx % 2 === 0 ? "bg-white" : "bg-hover-bg"}
                  >
                    <td className="px-4 py-3 font-medium text-text-main">{row.item}</td>
                    <td className="px-4 py-3 text-text-light">{row.withRegistration}</td>
                    <td className="px-4 py-3 font-semibold text-secondary">{row.withoutRegistration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 登記が必要なケース ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            それでも登記が必要なケースとは
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            登記不要の会社が増えているとはいえ、以下のケースでは債権譲渡登記が必要になることがあります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">大口の取引（1,000万円以上）</h3>
              <p className="leading-relaxed text-text-light">
                取引金額が大きくなると、ファクタリング会社のリスクも大きくなるため、権利保全のために登記を求められるケースがあります。特に1,000万円を超える大口取引では、登記を条件とする会社が多いです。大口取引では登記費用の割合が小さくなるため、コスト面の負担は相対的に軽くなります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">初回取引で信頼関係が構築されていない場合</h3>
              <p className="leading-relaxed text-text-light">
                初めて利用するファクタリング会社の場合、信頼関係がまだ構築されていないため、登記を求められることがあります。継続利用で信頼関係が築かれれば、2回目以降は登記不要になるケースもあります。初回は登記費用を覚悟しておきましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">売掛先の信用力に懸念がある場合</h3>
              <p className="leading-relaxed text-text-light">
                売掛先の信用力に不安がある場合、ファクタリング会社はリスクヘッジとして登記を求めることがあります。売掛先が設立間もない企業や、業績が不安定な企業の場合に登記を条件とされるケースが見られます。
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
              href="/articles/2sha-vs-3sha/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">2社間 vs 3社間ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                違いとメリット・デメリットを比較
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
              href="/articles/troubles/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングのトラブル事例7選</p>
              <p className="mt-1 text-sm text-text-light">
                契約前に知るべき注意点を解説
              </p>
            </Link>
            <Link
              href="/articles/is-it-legal/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングは合法？違法？</p>
              <p className="mt-1 text-sm text-text-light">
                法的根拠と安全な利用方法を解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            登記不要のファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            債権譲渡登記が不要なファクタリング会社を手数料・入金速度で徹底比較。登記費用を節約して、コストを最小限に抑えましょう。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
