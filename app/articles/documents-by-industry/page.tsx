import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリングの必要書類一覧｜業種別チェックリスト",
  description:
    "ファクタリングの必要書類を業種別に徹底解説。建設業・医療業・IT業・製造業・運送業など業種ごとの追加書類、書類を減らすコツ、オンライン提出の方法を紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/documents-by-industry/",
  },
  openGraph: {
    title: "ファクタリングの必要書類一覧｜業種別チェックリスト",
    description: "ファクタリングの必要書類を業種別に解説。チェックリスト付きで準備がスムーズに。",
    url: "https://factoring-partner.pages.dev/articles/documents-by-industry/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicDocuments = [
  { document: "身分証明書（代表者）", detail: "運転免許証・マイナンバーカード・パスポートのいずれか。有効期限内のもの。", required: "必須" },
  { document: "請求書", detail: "売掛先に発行した請求書のコピー。金額・支払期日・売掛先名が明記されたもの。", required: "必須" },
  { document: "通帳コピー（直近3ヶ月分）", detail: "売掛先からの入金履歴が確認できるもの。ネットバンキングの取引明細でも可。", required: "必須" },
  { document: "登記簿謄本（法人の場合）", detail: "法務局で取得。発行から3ヶ月以内のもの。オンラインでも取得可能。", required: "会社による" },
  { document: "決算書・確定申告書", detail: "直近1〜2期分。貸借対照表・損益計算書を含む。", required: "会社による" },
  { document: "印鑑証明書", detail: "法人の場合は法人の印鑑証明書。発行から3ヶ月以内のもの。", required: "会社による" },
  { document: "売掛先との基本契約書", detail: "売掛先との取引を証明する契約書。継続取引の場合は基本取引契約書。", required: "会社による" },
];

const industryDocuments = [
  {
    industry: "建設業",
    additionalDocs: [
      "工事請負契約書",
      "注文書（発注書）",
      "出来高証明書",
      "工事完了報告書",
      "建設業許可証のコピー",
    ],
    note: "建設業特化型のファクタリング会社（けんせつくん等）では、注文書段階でも利用可能です。工事の進捗状況を示す書類が審査のポイントになります。",
  },
  {
    industry: "医療業（病院・クリニック）",
    additionalDocs: [
      "レセプト（診療報酬明細書）",
      "保険医療機関の届出書",
      "社保・国保への請求実績",
    ],
    note: "診療報酬ファクタリングの場合、レセプトの内容と返戻率が審査のポイントです。自費診療の売掛金の場合は通常の請求書でOK。",
  },
  {
    industry: "IT・Web業界",
    additionalDocs: [
      "業務委託契約書・SES契約書",
      "納品書・検収書",
      "プロジェクト管理資料",
    ],
    note: "IT業界は毎月の固定報酬（SES契約等）の場合、継続取引を証明する契約書があると審査がスムーズです。",
  },
  {
    industry: "製造業",
    additionalDocs: [
      "発注書・注文書",
      "納品書・検収書",
      "取引基本契約書",
    ],
    note: "大手メーカーへの売掛金は信用力が高く、審査が通りやすいです。発注書と納品書で取引の実態を証明します。",
  },
  {
    industry: "運送業",
    additionalDocs: [
      "運送契約書",
      "運賃請求書",
      "一般貨物自動車運送事業許可証",
    ],
    note: "運送業は入金サイトが長いケースが多く、ファクタリングの利用頻度が高い業種です。許可証の提出を求められることがあります。",
  },
  {
    industry: "個人事業主・フリーランス",
    additionalDocs: [
      "開業届のコピー",
      "確定申告書（直近1〜2年分）",
      "業務委託契約書",
    ],
    note: "個人事業主の場合、身分証明書と請求書・通帳コピーの3点で利用できる会社も多いです（ラボル、QuQuMo等）。",
  },
];

const documentReductionTips = [
  {
    title: "オンライン完結型の会社を選ぶ",
    description: "QuQuMo（請求書＋通帳の2点のみ）やラボル（請求書＋本人確認書類の2点のみ）など、必要書類が極めて少ない会社を選ぶことで、準備の手間を大幅に減らせます。",
  },
  {
    title: "リピーター利用で書類を省略する",
    description: "多くのファクタリング会社では、2回目以降の利用時に一部の書類提出が不要になります。初回に提出した身分証明書や登記簿謄本などは再提出不要なケースがほとんどです。",
  },
  {
    title: "書類のデジタル化を進める",
    description: "請求書、通帳、契約書などをスマートフォンで撮影またはPDF化しておくと、複数社への同時申し込み時に素早く提出できます。クラウド会計ソフトとの連携も有効です。",
  },
];

const faqs = [
  {
    question: "ファクタリングで最低限必要な書類は何ですか？",
    answer:
      "最低限必要な書類は、①身分証明書（代表者の免許証等）②請求書（売掛先に発行したもの）③通帳コピー（直近3ヶ月分）の3点です。QuQuMoやラボルなどのオンライン完結型サービスでは、請求書と通帳（または本人確認書類）の2点のみで利用可能です。",
  },
  {
    question: "決算書が赤字でもファクタリングは利用できますか？",
    answer:
      "はい、決算書が赤字でも利用可能です。ファクタリングの審査では利用者の業績よりも売掛先の信用力を重視するため、赤字決算であっても審査に通るケースがほとんどです。そもそも決算書の提出を求めない会社も増えています。",
  },
  {
    question: "書類はどのように提出すればいいですか？",
    answer:
      "書類の提出方法は会社によりますが、メール添付、専用アップロードフォーム、FAX、郵送、対面での持参などの方法があります。近年はメールやアップロードフォームでの提出が主流です。スマートフォンで撮影した画像でも受け付けてくれる会社がほとんどです。",
  },
  {
    question: "通帳コピーはなぜ必要ですか？",
    answer:
      "通帳コピーは、売掛先からの過去の入金実績を確認するために必要です。継続的な取引があることを証明する資料であり、売掛金の信頼性を裏付ける重要な書類です。ネットバンキングの取引明細画面のスクリーンショットやPDFでも代用可能な会社が多いです。",
  },
  {
    question: "2回目以降の利用時も同じ書類が必要ですか？",
    answer:
      "いいえ、2回目以降は書類の一部が省略されます。身分証明書・登記簿謄本・決算書などは初回提出のみで、2回目以降は請求書と通帳コピーのみで利用できるケースがほとんどです。リピーター利用のメリットのひとつです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリングの必要書類一覧｜業種別チェックリスト",
  description: "ファクタリングの必要書類を業種別に解説。チェックリスト付きで準備がスムーズに。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/documents-by-industry/" },
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
    { "@type": "ListItem", position: 3, name: "必要書類一覧（業種別）", item: "https://factoring-partner.pages.dev/articles/documents-by-industry/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function DocumentsByIndustryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "必要書類一覧（業種別）" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">実務ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングの必要書類一覧
            <br className="hidden md:block" />
            業種別チェックリスト
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングの申し込みに必要な書類を基本書類と業種別追加書類に分けて解説。チェックリスト形式で、漏れなく準備できます。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic" className="hover:underline">1. 基本の必要書類</a></li>
            <li><a href="#by-industry" className="hover:underline">2. 業種別の追加書類</a></li>
            <li><a href="#tips" className="hover:underline">3. 書類を減らすコツ</a></li>
            <li><a href="#submission" className="hover:underline">4. 書類提出の方法</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本書類 ─── */}
        <section id="basic" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">基本の必要書類</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリングの申し込みに必要な基本書類を一覧にまとめました。会社によって必要・不要が異なりますが、以下の書類を準備しておけば大抵のファクタリング会社に対応できます。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary px-4 py-3 text-left">書類</th>
                  <th className="border border-primary px-4 py-3 text-left">詳細</th>
                  <th className="border border-primary px-4 py-3 text-left">必要度</th>
                </tr>
              </thead>
              <tbody>
                {basicDocuments.map((doc, i) => (
                  <tr key={doc.document} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}>
                    <td className="border border-border px-4 py-3 font-medium text-text-main">{doc.document}</td>
                    <td className="border border-border px-4 py-3 text-text-light">{doc.detail}</td>
                    <td className="border border-border px-4 py-3">
                      <span className={doc.required === "必須" ? "font-bold text-accent" : "text-text-light"}>{doc.required}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 業種別 ─── */}
        <section id="by-industry" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">業種別の追加書類</h2>
          <p className="mb-8 leading-relaxed text-text-light">業種によって、基本書類に加えて追加の書類が求められる場合があります。自分の業種の追加書類を確認しておきましょう。</p>
          <div className="space-y-6">
            {industryDocuments.map((item) => (
              <div key={item.industry} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-4 text-lg font-bold text-primary">{item.industry}</h3>
                <div className="mb-4 rounded-lg bg-section-bg p-4">
                  <p className="mb-2 text-sm font-semibold text-text-main">追加で必要な書類：</p>
                  <ul className="space-y-1 text-sm text-text-light">
                    {item.additionalDocs.map((doc) => (
                      <li key={doc} className="flex items-start gap-2">
                        <span className="mt-0.5 text-primary">&#9679;</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm leading-relaxed text-text-light">
                  <strong className="text-text-main">ポイント：</strong>{item.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 書類を減らすコツ ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">書類を減らすコツ</h2>
          <p className="mb-8 leading-relaxed text-text-light">書類の準備は面倒ですが、以下のコツを押さえることで手間を大幅に減らせます。</p>
          <div className="space-y-4">
            {documentReductionTips.map((tip) => (
              <div key={tip.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{tip.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 提出方法 ─── */}
        <section id="submission" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">書類提出の方法</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリング会社への書類提出方法は複数あります。即日入金を希望する場合は、オンラインでの提出が最速です。</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">メール添付</h3>
              <p className="text-sm text-text-light">最も一般的な方法。スマホで撮影した画像やスキャンしたPDFをメールに添付して送信します。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">専用アップロードフォーム</h3>
              <p className="text-sm text-text-light">オンライン完結型の会社では、専用のアップロードフォームから書類を提出できます。セキュリティが高く安心。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">FAX</h3>
              <p className="text-sm text-text-light">一部の会社ではFAXでの書類提出にも対応しています。紙の書類をそのまま送れるのが便利です。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-bold text-primary">対面での持参</h3>
              <p className="text-sm text-text-light">対面相談の際に書類を直接持参する方法。担当者にその場で確認してもらえるため、不備があればすぐに対応できます。</p>
            </div>
          </div>
        </section>

        {/* ── 書類準備のチェックリスト ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">書類準備チェックリスト</h2>
          <p className="mb-4 leading-relaxed text-text-light">申し込み前に以下のチェックリストで書類の準備状況を確認しましょう。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9744;</span><span>身分証明書（有効期限内か確認）</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9744;</span><span>請求書（金額・支払期日・売掛先名が明記されているか確認）</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9744;</span><span>通帳コピー（直近3ヶ月分・売掛先からの入金履歴があるか確認）</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9744;</span><span>登記簿謄本（法人の場合・発行から3ヶ月以内か確認）</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9744;</span><span>業種別の追加書類（上記の業種別リストを確認）</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9744;</span><span>書類の画像・PDFが鮮明に読めるか確認</span></li>
            </ul>
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
            <Link href="/articles/required-documents/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングの必要書類</p>
              <p className="mt-1 text-sm text-text-light">基本的な必要書類を詳しく解説</p>
            </Link>
            <Link href="/articles/screening-criteria/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">審査基準と通過率</p>
              <p className="mt-1 text-sm text-text-light">審査で見るポイントと通過率を上げる方法</p>
            </Link>
            <Link href="/articles/beginners-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">初めてのファクタリング完全ガイド</p>
              <p className="mt-1 text-sm text-text-light">初心者向けに一から解説</p>
            </Link>
            <Link href="/articles/instant-factoring/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">即日ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">最短即日入金の会社と必要な準備</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">書類が少ないファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            必要書類の少なさ・手数料・入金スピードでファクタリング会社を比較。手続きが簡単な会社が見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
