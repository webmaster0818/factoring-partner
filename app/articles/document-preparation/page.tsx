import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリング審査に必要な書類の準備ガイド｜スムーズに通過するコツ",
  description:
    "ファクタリング審査に必要な書類を完全網羅。請求書・本人確認書類・通帳コピー・決算書など必須書類の準備方法と、審査をスムーズに通過するための書類作成のコツを解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/document-preparation/",
  },
  openGraph: {
    title:
      "ファクタリング審査に必要な書類の準備ガイド｜スムーズに通過するコツ",
    description:
      "ファクタリング審査に必要な書類一覧と準備のコツ。請求書・通帳・本人確認書類の正しい準備方法を解説。",
    url: "https://factoring-partner.pages.dev/articles/document-preparation/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const requiredDocs = [
  {
    name: "請求書（売掛金の証拠書類）",
    importance: "必須",
    description:
      "ファクタリングの対象となる売掛金の請求書です。金額・支払い期日・売掛先の正式名称・取引内容が明確に記載されている必要があります。請求書番号が入っていると、取引の特定がしやすく審査がスムーズです。",
    tips: [
      "金額・支払い期日・取引先名・取引内容を明確に記載する",
      "請求書番号を付番する",
      "PDFまたはクラウド会計ソフトで発行したものが好ましい",
      "手書きの請求書は避ける（または取引実績で補完する）",
      "複数月分の請求書がある場合は直近のものを優先する",
    ],
    commonMistakes: [
      "取引内容が「一式」など曖昧な記載",
      "支払い期日が記載されていない",
      "請求金額と契約書の金額が不一致",
    ],
  },
  {
    name: "本人確認書類",
    importance: "必須",
    description:
      "代表者個人の身分を証明する書類です。運転免許証・マイナンバーカード・パスポートなどの顔写真付き証明書が求められます。法人の場合は代表者の本人確認書類に加えて、登記簿謄本が必要になることもあります。",
    tips: [
      "有効期限内の顔写真付き証明書を使用する",
      "住所・氏名が最新の情報と一致していることを確認する",
      "スマホで撮影する場合は文字が鮮明に読める状態にする",
      "マイナンバーカードの裏面（マイナンバー）は提出不要",
    ],
    commonMistakes: [
      "有効期限が切れている証明書を提出",
      "住所変更の届出をしていないため住所が不一致",
      "画像がぼやけていて文字が読めない",
    ],
  },
  {
    name: "通帳コピー（入出金明細）",
    importance: "必須",
    description:
      "直近3〜6ヶ月分の銀行口座の入出金履歴です。売掛先からの過去の入金実績を確認するために使用されます。売掛先からの入金が確認できれば、取引の実在性が証明され審査に通りやすくなります。",
    tips: [
      "売掛先からの入金が確認できるページを含める",
      "直近3〜6ヶ月分を準備する（長いほど有利）",
      "ネットバンキングのスクリーンショットでも可（明細全体が見えること）",
      "口座名義人が申込者と一致していることを確認する",
    ],
    commonMistakes: [
      "売掛先からの入金実績がない口座の通帳を提出",
      "スクリーンショットが一部しか写っていない",
      "古い期間の明細のみで直近のデータがない",
    ],
  },
  {
    name: "決算書・確定申告書",
    importance: "場合により必要",
    description:
      "法人の場合は直近2〜3期分の決算書（貸借対照表・損益計算書）、個人事業主の場合は確定申告書が求められることがあります。事業の継続性や売上規模を確認するために使用されます。ペイトナー・ラボルなど簡易型のサービスでは不要な場合が多いです。",
    tips: [
      "直近2〜3期分を準備する",
      "税理士の署名入りの正式なものを使用する",
      "赤字決算でも問題ない（売掛先の信用力が重要）",
      "創業1年未満で決算書がない場合はその旨を伝える",
    ],
    commonMistakes: [
      "税務署への提出前の未確定版を出す",
      "1期分しか準備していない",
      "別紙の勘定科目内訳書を添付し忘れる",
    ],
  },
  {
    name: "契約書・発注書・注文書",
    importance: "あると有利",
    description:
      "売掛先との取引契約書や発注書は、取引の実在性を裏付ける重要な証拠書類です。必須ではない場合が多いですが、添付することで審査が有利に進みます。特に初回利用や高額案件では、取引の実態を証明する書類として求められることがあります。",
    tips: [
      "請求書と対応する契約書・発注書を準備する",
      "契約金額と請求金額が一致していることを確認する",
      "売掛先の社印や署名があると信頼性が高い",
      "業務委託契約書・基本取引契約書なども有効",
    ],
    commonMistakes: [
      "契約書の金額と請求書の金額が異なる",
      "有効期限が切れた契約書を提出",
      "口頭契約のため契約書が存在しない（発注メール等で代替可能）",
    ],
  },
  {
    name: "納品書・検収書",
    importance: "あると有利",
    description:
      "商品やサービスの納品が完了したことを証明する書類です。売掛金が確定していること（納品済み・検収済み）を証明できるため、審査通過率が高まります。特に高額案件や新規取引先の場合に重要度が増します。",
    tips: [
      "請求書に対応する納品書を準備する",
      "売掛先の検収印や署名があると信頼性が高い",
      "納品日・検収日が記載されていると好ましい",
      "メールでの納品確認も証拠として活用可能",
    ],
    commonMistakes: [
      "まだ納品が完了していない売掛金をファクタリングしようとする",
      "納品書の日付が請求書の日付と整合しない",
    ],
  },
  {
    name: "登記簿謄本（法人の場合）",
    importance: "場合により必要",
    description:
      "法人の存在と代表者を確認するために使用される書類です。法務局で取得できる「履歴事項全部証明書」が一般的です。発行から3ヶ月以内のものが求められることが多いです。オンライン完結型のサービスでは不要な場合もあります。",
    tips: [
      "発行から3ヶ月以内のものを準備する",
      "法務局の窓口またはオンライン（登記・供託オンラインシステム）で取得可能",
      "代表者の住所変更がある場合は最新のものを取得する",
    ],
    commonMistakes: [
      "発行から3ヶ月以上経過した古い謄本を提出",
      "代表者変更後の更新がされていない",
    ],
  },
];

const docsByCompany = [
  { name: "ペイトナー", docs: "請求書・本人確認書類", level: "最少", note: "AI審査で必要書類を最小限に" },
  { name: "ラボル", docs: "請求書・本人確認書類・通帳", level: "少ない", note: "24時間365日対応" },
  { name: "QuQuMo", docs: "請求書・通帳コピー・本人確認書類", level: "少ない", note: "3点でオンライン完結" },
  { name: "OLTA", docs: "請求書・通帳コピー・本人確認書類＋決算書（場合により）", level: "標準", note: "AI審査のため追加書類あり" },
  { name: "ビートレーディング", docs: "請求書・通帳コピー・本人確認書類＋決算書", level: "標準", note: "初回は決算書推奨" },
  { name: "アクセルファクター", docs: "請求書・通帳コピー・本人確認書類＋決算書", level: "標準", note: "少額の場合は簡略化可能" },
  { name: "PMG", docs: "請求書・通帳コピー・本人確認書類・決算書・登記簿謄本", level: "やや多い", note: "大口案件対応のため詳細な書類が必要" },
  { name: "サポート機構", docs: "請求書・通帳コピー・本人確認書類・決算書", level: "標準", note: "経営相談も含めた総合対応" },
];

const preparationTimeline = [
  {
    timing: "事前に準備しておくもの（常時整備）",
    items: [
      "直近の決算書・確定申告書のコピー",
      "代表者の本人確認書類（有効期限の確認）",
      "法人の登記簿謄本（3ヶ月以内）",
      "基本取引契約書のファイリング",
    ],
  },
  {
    timing: "申込時に準備するもの",
    items: [
      "対象の売掛金の請求書",
      "直近3〜6ヶ月分の通帳コピー（入出金明細）",
      "対応する契約書・発注書",
      "納品書・検収書（あれば）",
    ],
  },
  {
    timing: "追加で求められる可能性があるもの",
    items: [
      "売掛先との取引履歴がわかる資料",
      "税金の納付証明書",
      "事業計画書",
      "代表者の経歴書",
    ],
  },
];

const checklistItems = [
  "請求書の金額・支払い期日・取引先名は正確に記載されているか",
  "請求書と契約書の金額は一致しているか",
  "通帳コピーに売掛先からの入金実績が含まれているか",
  "本人確認書類は有効期限内か",
  "登記簿謄本は発行から3ヶ月以内か",
  "決算書は直近2〜3期分揃っているか",
  "書類の画像は鮮明で文字が読めるか",
  "口座名義と申込者名が一致しているか",
  "請求書の日付が適切か（未来の日付になっていないか）",
  "すべてのファイルがPDF形式で準備されているか",
];

const faqs = [
  {
    question: "請求書だけでファクタリングを利用できますか？",
    answer:
      "請求書のみで利用できるサービスもありますが、多くの場合は本人確認書類と通帳コピーも必要です。ペイトナーは請求書と本人確認書類の2点で申し込み可能です。ただし、審査の過程で追加書類を求められる場合があります。必要書類が少ないサービスは個人事業主やフリーランス向けのものが多く、法人向けでは決算書なども求められるのが一般的です。",
  },
  {
    question: "決算書がない場合はどうすればいいですか？",
    answer:
      "創業1年未満で決算書がない場合でも、ファクタリングは利用可能です。決算書の代わりに、試算表（月次）、売掛先との契約書、通帳の入出金履歴などで事業の実態を証明できます。ペイトナー・ラボルなど決算書不要のサービスを選ぶのも有効です。事前にファクタリング会社に決算書がない旨を伝え、代替書類で対応できるか確認しましょう。",
  },
  {
    question: "書類はスマホで撮影したものでも大丈夫ですか？",
    answer:
      "はい、多くのファクタリング会社ではスマホで撮影した画像を受け付けています。ただし、文字が鮮明に読める品質であることが条件です。ぼやけている、一部が切れている、影がかかっているなどの画像は不備として差し戻される可能性があります。できればスキャナーでPDF化するか、スマホのスキャンアプリを使用して鮮明な画像を準備しましょう。",
  },
  {
    question: "通帳を紛失した場合はどうすればいいですか？",
    answer:
      "紙の通帳を紛失した場合でも、ネットバンキングの入出金明細のスクリーンショットやCSVデータで代替できます。銀行窓口で「取引明細証明書」を発行してもらう方法もあります。ファクタリング会社にはネットバンキングの明細で対応可能か事前に確認しておくとスムーズです。",
  },
  {
    question: "初回と2回目以降で必要書類は変わりますか？",
    answer:
      "はい、多くのファクタリング会社では2回目以降の利用時に必要書類が減ります。初回で提出した決算書・登記簿謄本・本人確認書類は再提出不要となることが多く、対象の請求書と直近の通帳コピーのみで手続きが完了するケースが一般的です。そのため、2回目以降はより迅速に資金調達が可能になります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://factoring-partner.pages.dev/og-image.png",
  headline:
    "ファクタリング審査に必要な書類の準備ガイド｜スムーズに通過するコツ",
  description:
    "ファクタリング審査に必要な書類一覧と準備のコツ。請求書・通帳・本人確認書類の正しい準備方法を解説。",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: {
    "@type": "Person",
    name: "ファクタリングパートナー 編集部",
    url: "https://factoring-partner.pages.dev/about/",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://factoring-partner.pages.dev/articles/document-preparation/",
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
      name: "審査に必要な書類の準備ガイド",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function DocumentPreparationPage() {
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
          { label: "審査に必要な書類の準備ガイド" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-secondary px-4 py-1 text-sm font-bold text-white">
            審査深掘り
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング審査に必要な書類の準備ガイド
            <br className="hidden md:block" />
            スムーズに通過するコツ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングの審査に必要な書類を完全網羅。請求書・本人確認書類・通帳コピーなどの正しい準備方法と、書類不備による審査遅延を防ぐコツを解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#required-docs" className="hover:underline">1. 必要書類一覧と準備のポイント</a></li>
            <li><a href="#docs-by-company" className="hover:underline">2. ファクタリング会社別の必要書類</a></li>
            <li><a href="#timeline" className="hover:underline">3. 書類準備のタイムライン</a></li>
            <li><a href="#checklist" className="hover:underline">4. 提出前チェックリスト</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 必要書類一覧 ─── */}
        <section id="required-docs" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            必要書類一覧と準備のポイント
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングの審査に必要な書類は、主に7種類あります。すべてが必須というわけではなく、ファクタリング会社やサービスの種類によって異なります。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            以下では各書類の内容・準備のポイント・よくあるミスを詳しく解説します。書類の準備が適切であれば審査がスムーズに進み、最短即日での資金化が可能になります。
          </p>

          <div className="space-y-8">
            {requiredDocs.map((doc, index) => (
              <div
                key={doc.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="w-full">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-bold text-text-main">{doc.name}</h3>
                      <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${doc.importance === "必須" ? "bg-accent text-white" : doc.importance === "場合により必要" ? "bg-primary-light text-primary" : "bg-section-bg text-text-light"}`}>
                        {doc.importance}
                      </span>
                    </div>
                    <p className="mt-3 leading-relaxed text-text-light">{doc.description}</p>

                    <div className="mt-4 rounded-lg border border-secondary/30 bg-teal-50 p-4">
                      <p className="mb-2 text-sm font-bold text-secondary">準備のポイント</p>
                      <ul className="space-y-1">
                        {doc.tips.map((tip) => (
                          <li key={tip} className="flex items-start gap-2 text-sm text-text-light">
                            <span className="mt-0.5 text-secondary">&#10003;</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3 rounded-lg bg-section-bg p-4">
                      <p className="mb-2 text-sm font-bold text-accent">よくあるミス</p>
                      <ul className="space-y-1">
                        {doc.commonMistakes.map((mistake) => (
                          <li key={mistake} className="flex items-start gap-2 text-sm text-text-light">
                            <span className="mt-0.5 text-accent">&#10005;</span>
                            <span>{mistake}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 会社別の必要書類 ─── */}
        <section id="docs-by-company" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング会社別の必要書類
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            必要書類の数はファクタリング会社によって大きく異なります。書類準備の手間を減らしたい場合は、必要書類が少ないサービスを選ぶのも一つの方法です。
          </p>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold whitespace-nowrap">会社名</th>
                  <th className="px-3 py-3 font-semibold">必要書類</th>
                  <th className="px-3 py-3 font-semibold whitespace-nowrap">書類量</th>
                </tr>
              </thead>
              <tbody>
                {docsByCompany.map((company, index) => (
                  <tr
                    key={company.name}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-3 py-3 font-semibold text-text-main whitespace-nowrap">{company.name}</td>
                    <td className="px-3 py-3 text-text-light">{company.docs}</td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${company.level === "最少" ? "bg-secondary text-white" : company.level === "少ない" ? "bg-secondary/10 text-secondary" : company.level === "標準" ? "bg-primary-light text-primary" : "bg-accent/10 text-accent"}`}>
                        {company.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-3">
            {docsByCompany.map((company) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-4">
                <div className="flex items-center gap-3">
                  <p className="font-semibold text-text-main">{company.name}</p>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${company.level === "最少" ? "bg-secondary text-white" : company.level === "少ない" ? "bg-secondary/10 text-secondary" : "bg-primary-light text-primary"}`}>
                    {company.level}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-text-light">{company.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 書類準備のタイムライン ─── */}
        <section id="timeline" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            書類準備のタイムライン
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            急な資金需要に備えて、書類を段階的に準備しておくことをおすすめします。常時整備しておくべき書類と、申込時に準備する書類を分けて管理しましょう。
          </p>

          <div className="space-y-6">
            {preparationTimeline.map((phase, index) => (
              <div
                key={phase.timing}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white ${index === 0 ? "bg-secondary" : index === 1 ? "bg-primary" : "bg-accent"}`}>
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{phase.timing}</h3>
                    <ul className="mt-3 space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-text-light">
                          <span className="mt-0.5 text-primary">&#9679;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-primary-light p-4">
            <p className="text-sm leading-relaxed text-text-light">
              <strong className="text-primary">アドバイス：</strong>
              ファクタリングを利用する予定がなくても、決算書・登記簿謄本・通帳コピーは定期的に更新しておくと、急な資金需要に即座に対応できます。特に登記簿謄本は3ヶ月の有効期限があるため、四半期ごとの取得がおすすめです。
            </p>
          </div>
        </section>

        {/* ── 提出前チェックリスト ─── */}
        <section id="checklist" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            提出前チェックリスト
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            書類を提出する前に、以下のチェックリストで最終確認を行いましょう。書類不備は審査遅延の最大の原因であり、1つの不備で1日以上の遅れが生じることもあります。
          </p>

          <div className="rounded-lg border border-border bg-white p-6">
            <div className="space-y-3">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 border-b border-border/50 pb-3 last:border-b-0">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-primary text-xs text-primary">
                    &#10003;
                  </span>
                  <p className="text-sm leading-relaxed text-text-light">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-2 font-bold text-secondary">書類準備のコツまとめ</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>すべての書類をPDF形式で保存し、ファイル名を「請求書_202604_○○株式会社.pdf」のように分かりやすくする</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>クラウドストレージ（Google Drive等）に専用フォルダを作成し、常に最新の書類を保管しておく</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>初回利用時に提出した書類一式のコピーを手元に残しておき、2回目以降の参考にする</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-text-main hover:bg-section-bg">
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">Q</span>
                    {faq.question}
                  </span>
                  <span className="ml-4 transition-transform group-open:rotate-180">&#9660;</span>
                </summary>
                <div className="border-t border-border px-6 py-4">
                  <p className="text-sm leading-relaxed text-text-light">{faq.answer}</p>
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
              href="/articles/screening-failure/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">審査落ちの原因5選と対策</p>
              <p className="mt-1 text-sm text-text-light">
                審査に落ちる原因と通過するための具体的な対策
              </p>
            </Link>
            <Link
              href="/articles/easy-screening/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">審査が通りやすいファクタリング会社8選</p>
              <p className="mt-1 text-sm text-text-light">
                審査通過率が高い会社をランキング形式で紹介
              </p>
            </Link>
            <Link
              href="/articles/screening-criteria/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングの審査基準を徹底解説</p>
              <p className="mt-1 text-sm text-text-light">
                審査で見られるポイントと通過率を上げる方法
              </p>
            </Link>
            <Link
              href="/articles/required-documents/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングの必要書類</p>
              <p className="mt-1 text-sm text-text-light">
                ファクタリングに必要な書類の基本情報
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            書類準備が簡単なファクタリング会社を探す
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            必要書類2点から申し込み可能。手間なく最短即日で資金調達できるサービスを比較しましょう。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
