import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリングの必要書類一覧｜請求書のみでOKな会社は？",
  description:
    "ファクタリングに必要な書類を種類別に解説。請求書のみで利用できる会社や書類が少ない会社のランキング、書類準備のチェックリスト、「請求書だけでOK」の本当の意味まで徹底解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/required-documents/",
  },
  openGraph: {
    title:
      "ファクタリングの必要書類一覧｜請求書のみでOKな会社は？",
    description:
      "ファクタリングの必要書類を解説。請求書のみでOKな会社や書類準備のチェックリストも紹介。",
    url: "https://factoring-partner.pages.dev/articles/required-documents/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const generalDocuments = [
  {
    name: "請求書（売掛金の証拠）",
    required: "必須",
    description:
      "売掛先に発行した請求書です。ファクタリング会社が買い取る債権の存在を証明するために必要です。請求書には金額・支払期日・取引先名が明記されていることが条件です。PDFや画像データでの提出がほとんどです。",
    tips: "まだ請求書を発行していない段階（見積もり段階）では利用できません。確定した請求書が必要です。",
  },
  {
    name: "本人確認書類（身分証明書）",
    required: "必須",
    description:
      "運転免許証・マイナンバーカード・パスポートなどの顔写真付き身分証明書です。犯罪収益移転防止法に基づき、本人確認が義務付けられています。スマホで撮影した画像でも可能な会社がほとんどです。",
    tips: "有効期限内のものを準備してください。住所変更がある場合は裏面も撮影が必要です。",
  },
  {
    name: "通帳コピー（入出金明細）",
    required: "ほぼ必須",
    description:
      "直近3〜6ヶ月分の銀行口座の入出金明細です。売掛先からの入金実績を確認するために使用されます。ネットバンキングの明細画面のスクリーンショットでも可能な場合があります。",
    tips: "売掛先からの入金が確認できる口座を提出しましょう。複数の口座がある場合は、メインで取引している口座のものを準備します。",
  },
  {
    name: "登記簿謄本（法人の場合）",
    required: "法人のみ",
    description:
      "法務局で取得できる「履歴事項全部証明書」です。会社の所在地・代表者・設立年月日などを確認するために使用されます。発行から3ヶ月以内のものが求められることが一般的です。",
    tips: "法務局の窓口で600円、オンライン請求で480円で取得できます。法務局のオンラインサービス「登記・供託オンライン申請システム」なら自宅から申請可能です。",
  },
  {
    name: "決算書・確定申告書",
    required: "会社による",
    description:
      "直近1〜2期分の決算書（法人）または確定申告書（個人事業主）です。事業の健全性や売上規模を確認するために求められることがあります。赤字決算でも審査に通るケースは多いですが、提出を求められることがあります。",
    tips: "決算書は直近のものを用意しましょう。設立1年未満で決算書がない場合は、試算表（月次決算）で代用できることもあります。",
  },
  {
    name: "取引基本契約書",
    required: "会社による",
    description:
      "売掛先との取引基本契約書や業務委託契約書です。取引関係の実在性を証明するために求められることがあります。発注書や注文書でも代用できる場合があります。",
    tips: "契約書がない場合は、メールのやり取りや発注書などで取引の実在性を証明できる場合もあります。事前にファクタリング会社に相談しましょう。",
  },
  {
    name: "納税証明書",
    required: "一部の会社",
    description:
      "税金の滞納がないことを証明する書類です。主に3社間ファクタリングや大口案件の場合に求められます。税務署で発行してもらえます。",
    tips: "税金を滞納していてもファクタリング自体は利用できます（2社間の場合）。ただし、手数料が高くなる傾向があります。",
  },
  {
    name: "印鑑証明書",
    required: "一部の会社",
    description:
      "法人の代表印の印鑑証明書です。債権譲渡契約を締結する際に求められることがあります。電子契約に対応している会社では不要です。",
    tips: "法務局で450円で取得できます。電子契約対応の会社を選べば印鑑証明書は不要です。",
  },
];

const fewDocsRanking = [
  {
    rank: 1,
    name: "ペイトナー",
    docs: "請求書のみ（+本人確認書類は初回のみ）",
    docCount: "実質1〜2点",
    fee: "一律10%",
    speed: "最短10分",
    note: "業界で最も書類が少ない。初回登録時に本人確認書類を提出すれば、2回目以降は請求書をアップロードするだけ。審査もAIで自動化されているため、最短10分で入金される。個人事業主・フリーランスに最適。",
  },
  {
    rank: 2,
    name: "ラボル",
    docs: "請求書＋本人確認書類",
    docCount: "2点",
    fee: "一律10%",
    speed: "最短30分",
    note: "請求書と本人確認書類の2点のみで利用可能。24時間365日対応で土日祝日でも入金される。通帳コピーや登記簿謄本は不要。東証プライム上場企業の子会社が運営。",
  },
  {
    rank: 3,
    name: "QuQuMo",
    docs: "請求書＋通帳コピー＋本人確認書類",
    docCount: "3点",
    fee: "1%〜14.8%",
    speed: "最短2時間",
    note: "請求書・通帳コピー（2〜3ヶ月分）・本人確認書類の3点で利用可能。電子契約対応で印鑑証明書は不要。債権譲渡登記も不要なため、追加コストがかからない。手数料1%〜の低コストが魅力。",
  },
  {
    rank: 4,
    name: "PAYTODAY",
    docs: "請求書＋通帳コピー＋本人確認書類＋（決算書）",
    docCount: "3〜4点",
    fee: "1%〜9.5%",
    speed: "最短30分",
    note: "AI審査を活用しているため書類は比較的少なめ。請求書・通帳コピー・本人確認書類の3点が基本で、法人の場合は決算書の提出を求められることがある。手数料が安く、スピードも速い。",
  },
  {
    rank: 5,
    name: "ビートレーディング",
    docs: "請求書＋通帳コピー＋本人確認書類＋登記簿謄本（法人）",
    docCount: "3〜4点",
    fee: "2%〜12%",
    speed: "最短2時間",
    note: "大手のため審査体制がしっかりしている。法人の場合は登記簿謄本も必要になるが、書類が揃えば最短2時間で入金。大口案件にも対応可能で、専任担当者がつくため初めてでも安心。",
  },
];

const invoiceOnlyTruth = [
  {
    title: "「請求書のみ」は完全に書類が1点だけという意味ではない",
    description:
      "「請求書のみでOK」と宣伝しているファクタリング会社でも、実際には初回利用時に本人確認書類（運転免許証など）の提出が必要です。これは犯罪収益移転防止法に基づく義務であり、すべての金融サービスに共通するルールです。「請求書のみ」とは、売掛金を証明する書類が請求書だけで済むという意味であり、通帳コピーや登記簿謄本などの追加書類が不要ということです。",
  },
  {
    title: "2回目以降は本当に請求書だけでOK",
    description:
      "ペイトナーやラボルでは、初回登録時に本人確認を済ませれば、2回目以降の利用では請求書をアップロードするだけで申し込みが完了します。アカウント情報はすでに登録済みのため、再度の本人確認は不要です。リピート利用を前提にすれば、文字通り「請求書のみ」で利用できます。",
  },
  {
    title: "通帳コピーが不要な理由",
    description:
      "一般的なファクタリングでは、売掛先からの入金実績を確認するために通帳コピーの提出を求められます。しかし、ペイトナーやラボルは独自の審査基準で売掛先の信用力を判断しているため、通帳コピーなしでも審査が可能です。その分、手数料が一律10%とやや高めに設定されていますが、書類準備の手間を省けるメリットがあります。",
  },
];

const documentChecklist = [
  {
    category: "基本書類（全員必要）",
    items: [
      "請求書（金額・支払期日・取引先名が記載されたもの）",
      "本人確認書類（運転免許証・マイナンバーカード・パスポートのいずれか）",
    ],
  },
  {
    category: "追加書類（会社によって必要）",
    items: [
      "通帳コピーまたは入出金明細（直近3〜6ヶ月分）",
      "登記簿謄本（法人の場合・発行から3ヶ月以内）",
      "決算書または確定申告書（直近1〜2期分）",
      "取引基本契約書または業務委託契約書",
    ],
  },
  {
    category: "場合によって必要",
    items: [
      "納税証明書（3社間ファクタリング・大口案件の場合）",
      "印鑑証明書（電子契約非対応の会社の場合）",
      "代表者の住民票（一部の会社で求められる場合）",
    ],
  },
];

const documentPreparationTips = [
  {
    title: "請求書は正確な情報で作成する",
    description:
      "請求書には「請求先（売掛先）の正式名称」「請求金額」「支払期日」「請求日」「自社の情報」が正確に記載されている必要があります。記載内容に不備があると審査が遅れたり、買取を拒否されたりする可能性があります。インボイス制度に対応した適格請求書であれば、信頼性がさらに高まります。",
  },
  {
    title: "通帳コピーは取引の流れがわかるものを",
    description:
      "通帳コピーを求められた場合は、売掛先からの入金履歴が確認できるものを準備しましょう。過去に同じ売掛先から定期的に入金があることが確認できると、審査が有利に進みます。ネットバンキングの明細画面のスクリーンショットでもOKな会社が多いです。",
  },
  {
    title: "書類はすべてデータ化しておく",
    description:
      "オンライン完結型のファクタリングでは、書類はPDFまたは画像データで提出します。スマホで撮影する場合は、文字が鮮明に読める角度で撮影しましょう。ピンボケや影がかかっていると再提出を求められることがあります。スキャンアプリを使うと綺麗にデータ化できます。",
  },
  {
    title: "法人は登記簿謄本を事前に取得しておく",
    description:
      "法人でファクタリングを利用する場合、登記簿謄本が必要になるケースが多いです。法務局の窓口では即日取得できますが、オンライン請求の場合は到着まで数日かかることがあります。急ぎの場合に備えて、事前に取得しておくことをおすすめします。",
  },
  {
    title: "初回利用時は余裕を持って準備する",
    description:
      "初めてファクタリングを利用する場合は、書類の確認に通常より時間がかかります。即日入金を希望する場合は特に、すべての書類を事前に揃えておくことが重要です。書類に不備があると再提出が必要になり、入金が翌営業日以降に延びてしまいます。",
  },
];

const faqs = [
  {
    question: "ファクタリングに最低限必要な書類は何ですか？",
    answer:
      "最低限必要な書類は「請求書」と「本人確認書類（運転免許証など）」の2点です。ペイトナーやラボルはこの2点だけで利用可能です。ただし、一般的なファクタリング会社では通帳コピー（入出金明細）も求められるため、3点セットで準備しておくと安心です。法人の場合は登記簿謄本が追加で必要になるケースが多いです。",
  },
  {
    question: "請求書のみで利用できるファクタリング会社はありますか？",
    answer:
      "ペイトナーは2回目以降の利用であれば請求書のアップロードだけで申し込みが完了します。初回利用時は本人確認書類の提出が必要ですが、一度登録すれば以降は請求書のみでOKです。ラボルも請求書と本人確認書類の2点のみで、通帳コピーや登記簿謄本は不要です。",
  },
  {
    question: "通帳コピーはなぜ必要なのですか？",
    answer:
      "通帳コピー（入出金明細）は、売掛先からの入金実績を確認するために必要です。ファクタリング会社は「この売掛先は本当に支払い能力があるか」「過去に入金遅延はなかったか」を通帳の入出金履歴から判断します。ペイトナーやラボルは独自の審査基準で通帳コピーなしでも対応していますが、その分手数料がやや高めに設定されています。",
  },
  {
    question: "決算書が赤字でもファクタリングは利用できますか？",
    answer:
      "はい、決算書が赤字でもファクタリングは利用できます。ファクタリングの審査で最も重視されるのは「売掛先の信用力」であり、利用者自身の財務状況は二次的な判断要素です。そのため、赤字決算・債務超過・税金滞納があっても、売掛先が信用力の高い企業であれば審査に通る可能性が高いです。決算書の提出を求めない会社（ペイトナー・ラボルなど）を選ぶのも一つの方法です。",
  },
  {
    question: "書類の準備にどのくらい時間がかかりますか？",
    answer:
      "ペイトナーやラボルなら、請求書と本人確認書類をスマホで撮影するだけなので5分程度で準備できます。通帳コピーが必要な場合も、ネットバンキングの画面をスクリーンショットすれば10分程度です。登記簿謄本は法務局で取得する場合、窓口なら即日ですがオンライン請求だと2〜3日かかります。事前に準備しておけば、申し込み当日は書類のアップロードだけで済みます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファクタリングの必要書類一覧｜請求書のみでOKな会社は？",
  description:
    "ファクタリングの必要書類を解説。請求書のみでOKな会社や書類準備のチェックリストも紹介。",
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
      "https://factoring-partner.pages.dev/articles/required-documents/",
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
      name: "ファクタリングの必要書類",
      item: "https://factoring-partner.pages.dev/articles/required-documents/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function RequiredDocumentsPage() {
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
          { label: "ファクタリングの必要書類" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-white">
            必要書類ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングの必要書類一覧
            <br className="hidden md:block" />
            請求書のみでOKな会社は？
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングに必要な書類を種類別に解説。書類が少ない会社のランキングや、「請求書のみでOK」の本当の意味、書類準備のチェックリストまで紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#general-docs" className="hover:underline">
                1. ファクタリングの一般的な必要書類
              </a>
            </li>
            <li>
              <a href="#few-docs-ranking" className="hover:underline">
                2. 書類が少ない会社ランキング
              </a>
            </li>
            <li>
              <a href="#invoice-only" className="hover:underline">
                3. 「請求書のみ」の本当の意味
              </a>
            </li>
            <li>
              <a href="#checklist" className="hover:underline">
                4. 書類準備のチェックリスト
              </a>
            </li>
            <li>
              <a href="#preparation-tips" className="hover:underline">
                5. 書類準備のコツ
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 一般的な必要書類 ─── */}
        <section id="general-docs" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングの一般的な必要書類
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングの利用に必要な書類は、会社やサービスによって異なります。ここでは、一般的に求められる書類を必須度順に解説します。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            すべての書類が必要なわけではなく、オンライン完結型のサービスでは書類を大幅に省略できるケースもあります。各書類の目的と準備のコツを理解しておきましょう。
          </p>
          <div className="space-y-6">
            {generalDocuments.map((doc) => (
              <div
                key={doc.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <h3 className="text-lg font-bold text-text-main">{doc.name}</h3>
                  <span className={`rounded-full px-3 py-0.5 text-xs font-bold text-white ${doc.required === "必須" ? "bg-accent" : doc.required === "ほぼ必須" ? "bg-primary" : "bg-gray-400"}`}>
                    {doc.required}
                  </span>
                </div>
                <p className="mb-3 leading-relaxed text-text-light">{doc.description}</p>
                <div className="rounded bg-section-bg p-3">
                  <p className="text-sm text-text-light">
                    <span className="font-bold text-primary">準備のコツ：</span>
                    {doc.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 書類が少ない会社ランキング ─── */}
        <section id="few-docs-ranking" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            書類が少ない会社ランキング
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            必要書類が少ない順にファクタリング会社をランキングしました。書類準備の手間を省きたい方、急ぎで資金が必要な方は、書類が少ない会社を選ぶのがおすすめです。
          </p>
          <div className="space-y-6">
            {fewDocsRanking.map((company) => (
              <div
                key={company.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white ${company.rank <= 2 ? "bg-accent" : "bg-primary"}`}>
                    {company.rank}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{company.name}</h3>
                    <p className="text-sm font-bold text-accent">必要書類：{company.docCount}</p>
                  </div>
                </div>
                <div className="mb-4 grid gap-2 text-sm md:grid-cols-3">
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">必要書類</p>
                    <p className="font-semibold text-primary">{company.docs}</p>
                  </div>
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">手数料</p>
                    <p className="font-semibold text-primary">{company.fee}</p>
                  </div>
                  <div className="rounded bg-section-bg p-2 text-center">
                    <p className="text-xs text-text-light">入金速度</p>
                    <p className="font-semibold text-accent">{company.speed}</p>
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
                  <th className="px-3 py-3 font-semibold">順位</th>
                  <th className="px-3 py-3 font-semibold">会社名</th>
                  <th className="px-3 py-3 font-semibold">書類数</th>
                  <th className="px-3 py-3 font-semibold">手数料</th>
                  <th className="px-3 py-3 font-semibold">入金速度</th>
                </tr>
              </thead>
              <tbody>
                {fewDocsRanking.map((company, idx) => (
                  <tr
                    key={company.name}
                    className={idx % 2 === 0 ? "bg-white" : "bg-hover-bg"}
                  >
                    <td className="px-3 py-3 text-center font-bold text-accent">
                      {company.rank}
                    </td>
                    <td className="px-3 py-3 font-medium text-text-main">
                      {company.name}
                    </td>
                    <td className="px-3 py-3 text-text-light">{company.docCount}</td>
                    <td className="px-3 py-3 text-text-light">{company.fee}</td>
                    <td className="px-3 py-3 font-semibold text-accent">
                      {company.speed}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 「請求書のみ」の本当の意味 ─── */}
        <section id="invoice-only" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            「請求書のみでOK」の本当の意味
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            「請求書のみで利用可能」とうたっているファクタリング会社がありますが、実際にはどこまでが「請求書のみ」なのでしょうか。誤解しやすいポイントを整理します。
          </p>
          <div className="space-y-6">
            {invoiceOnlyTruth.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-accent/30 bg-orange-50 p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-accent">{item.title}</h3>
                <p className="leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-primary-light p-6">
            <p className="mb-2 font-bold text-primary">まとめ</p>
            <p className="text-sm leading-relaxed text-text-light">
              「請求書のみ」は「通帳コピー・登記簿謄本・決算書など追加書類が不要」という意味です。本人確認書類は犯罪防止のため必ず必要ですが、初回登録時に一度提出すれば2回目以降は不要になります。最も書類が少ないのはペイトナーで、リピート利用時は文字通り請求書1点で完結します。
            </p>
          </div>
        </section>

        {/* ── チェックリスト ─── */}
        <section id="checklist" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            書類準備のチェックリスト
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            ファクタリングの申し込み前に、以下のチェックリストで必要書類が揃っているか確認しましょう。利用する会社によって必要な書類は異なりますが、基本書類を揃えておけば多くの会社に対応できます。
          </p>
          <div className="space-y-6">
            {documentChecklist.map((category) => (
              <div
                key={category.category}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-4 text-lg font-bold text-primary">{category.category}</h3>
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
          <div className="mt-6 rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-2 font-bold text-secondary">書類が揃わない場合は？</p>
            <p className="text-sm leading-relaxed text-text-light">
              必要書類が揃わない場合でも、ファクタリング会社に相談すれば代替書類で対応してもらえるケースがあります。例えば、通帳コピーの代わりにネットバンキングの明細、契約書の代わりにメールのやり取りで代用できる場合があります。まずは相談してみましょう。
            </p>
          </div>
        </section>

        {/* ── 書類準備のコツ ─── */}
        <section id="preparation-tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            書類準備のコツ5選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            スムーズにファクタリングの審査を通過するために、書類準備のコツを5つ紹介します。事前準備をしっかり行うことで、即日入金の確率が大幅に上がります。
          </p>
          <div className="space-y-6">
            {documentPreparationTips.map((tip, idx) => (
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

        {/* ── 個人事業主 vs 法人 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            個人事業主と法人で必要書類は違う？
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            個人事業主と法人では、必要書類に一部違いがあります。法人は会社の実在性を証明する書類が追加で必要になりますが、審査のポイントは同じです。
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-4 text-lg font-bold text-primary">個人事業主の場合</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>請求書</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>本人確認書類（運転免許証等）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>通帳コピー（会社による）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>確定申告書（会社による）</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-text-light">
                登記簿謄本は不要です。ペイトナーやラボルなら請求書と本人確認書類の2点のみで利用可能。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-4 text-lg font-bold text-primary">法人の場合</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>請求書</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>代表者の本人確認書類</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>通帳コピー（会社による）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>登記簿謄本（会社による）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>決算書（会社による）</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-text-light">
                法人は登記簿謄本が必要になるケースが多い。ただしQuQuMoやペイトナーは法人でも登記簿謄本不要。
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
              href="/articles/instant-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">即日ファクタリング10選</p>
              <p className="mt-1 text-sm text-text-light">
                最短10分〜当日入金のおすすめ会社を紹介
              </p>
            </Link>
            <Link
              href="/articles/easy-screening/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">審査が通りやすいファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                審査基準と通過のコツを解説
              </p>
            </Link>
            <Link
              href="/articles/for-freelance/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">フリーランス向けファクタリング5選</p>
              <p className="mt-1 text-sm text-text-light">
                請求書を即日現金化する方法を解説
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
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            書類が少ないファクタリング会社を比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            請求書のみでOKな会社から大手まで、必要書類・手数料・入金速度で徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
