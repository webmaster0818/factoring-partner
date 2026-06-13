import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリング記事一覧｜基礎知識・手数料・審査・業種別ガイドまとめ",
  description:
    "ファクタリングパートナーの記事一覧ページです。ファクタリングの基礎知識、対象者別ガイド、手数料・審査、即日・スピード、業種別、エリア別、お悩み・トラブル、会社比較・ランキングまで115記事をカテゴリ別に整理しています。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/",
  },
  openGraph: {
    title:
      "ファクタリング記事一覧｜基礎知識・手数料・審査・業種別ガイドまとめ",
    description:
      "ファクタリングの基礎知識から手数料・審査・業種別・エリア別・会社比較まで、115記事をカテゴリ別に整理した記事一覧ページです。",
    url: "https://factoring-partner.pages.dev/articles/",
    type: "website",
  },
};

/* ── Data ─────────────────────────────────────────── */

type ArticleLink = { slug: string; label: string };
type Category = { id: string; title: string; description: string; articles: ArticleLink[] };

const categories: Category[] = [
  {
    id: "basics",
    title: "基礎知識・仕組み",
    description: "ファクタリングの仕組み・種類・法律・用語など、まず知っておきたい基本を解説します。",
    articles: [
      { slug: "what-is-factoring", label: "ファクタリングとは？仕組み・種類・メリット・デメリット" },
      { slug: "beginners-guide", label: "初めてのファクタリング完全ガイド（超初心者向け）" },
      { slug: "2sha-vs-3sha", label: "2社間と3社間ファクタリングの違い" },
      { slug: "guarantee-type", label: "保証型ファクタリングとは？買取型との違い" },
      { slug: "non-recourse", label: "ノンリコースとウィズリコースの違い" },
      { slug: "reverse", label: "リバースファクタリングとは？" },
      { slug: "international", label: "国際ファクタリングとは？貿易・輸出入の売掛金を現金化" },
      { slug: "purchase-order", label: "注文書ファクタリングとは？請求書発行前でも資金化" },
      { slug: "legal-basis", label: "ファクタリングの法的根拠（民法466条）" },
      { slug: "is-it-legal", label: "ファクタリングは違法？やばい？安全な利用方法" },
      { slug: "subcontract-law", label: "ファクタリングと下請法の関係" },
      { slug: "credit-guarantee", label: "ファクタリングと信用保証協会の関係" },
      { slug: "payment-site", label: "支払いサイトとは？短縮方法と関係を解説" },
      { slug: "glossary", label: "ファクタリング用語集50選" },
      { slug: "faq-all", label: "ファクタリングのよくある質問50選（総合FAQ）" },
    ],
  },
  {
    id: "target",
    title: "対象者別ガイド（法人・個人事業主・フリーランス）",
    description: "あなたの立場に合ったファクタリングの選び方・おすすめサービスを紹介します。",
    articles: [
      { slug: "for-corporation", label: "法人向けファクタリングおすすめ5選" },
      { slug: "for-sole-proprietor", label: "個人事業主向けファクタリングおすすめ5選" },
      { slug: "for-freelance", label: "フリーランス向けファクタリング5選" },
      { slug: "individual-clients", label: "個人間取引でも使えるファクタリング" },
      { slug: "startup", label: "起業直後・創業期のファクタリング" },
      { slug: "before-incorporation", label: "個人事業主が法人成りする前の活用法" },
    ],
  },
  {
    id: "fee",
    title: "手数料・コスト",
    description: "手数料の相場・計算方法・内訳から、コストを下げる交渉術まで解説します。",
    articles: [
      { slug: "fee-guide", label: "手数料の相場と計算方法｜安くするコツ5選" },
      { slug: "fee-breakdown", label: "手数料の内訳を徹底解説（買取・事務・登記費用）" },
      { slug: "fee-negotiation", label: "手数料を下げる交渉術5選" },
      { slug: "low-fee", label: "手数料が安いファクタリング会社ランキング10選" },
      { slug: "annual-rate", label: "手数料を年利換算すると？銀行融資との比較" },
      { slug: "consumption-tax", label: "ファクタリングの消費税の取り扱い" },
    ],
  },
  {
    id: "screening",
    title: "審査・必要書類",
    description: "審査基準・通過率を上げるコツ・必要書類の準備まで、審査対策をまとめました。",
    articles: [
      { slug: "screening-criteria", label: "ファクタリングの審査基準を徹底解説" },
      { slug: "screening-failure", label: "審査落ちの原因5選と通過するための対策" },
      { slug: "easy-screening", label: "審査が通りやすいファクタリング会社8選" },
      { slug: "deficit-ok", label: "赤字でも使えるファクタリング" },
      { slug: "tax-arrears", label: "税金滞納中でもファクタリングは利用可能？" },
      { slug: "document-preparation", label: "審査に必要な書類の準備ガイド" },
      { slug: "required-documents", label: "必要書類一覧｜請求書のみでOKな会社は？" },
      { slug: "documents-by-industry", label: "必要書類一覧｜業種別チェックリスト" },
      { slug: "invoice-only", label: "請求書のみで申し込めるファクタリング5選" },
    ],
  },
  {
    id: "speed",
    title: "即日・スピード重視",
    description: "急ぎの資金需要に応える、即日・最短入金・休日対応のサービスを紹介します。",
    articles: [
      { slug: "instant-factoring", label: "即日ファクタリング10選（最短10分〜当日入金）" },
      { slug: "emergency-funding", label: "即日の資金調達方法6選" },
      { slug: "online-factoring", label: "オンライン完結ファクタリング8選" },
      { slug: "no-interview", label: "面談なし・電話なしのファクタリング5選" },
      { slug: "weekend-factoring", label: "土日祝日対応のファクタリング会社5選" },
      { slug: "small-amount", label: "少額ファクタリング完全ガイド（1万円〜）" },
      { slug: "large-amount", label: "大口ファクタリング（1億円超に対応）" },
      { slug: "amount-hub", label: "金額別ファクタリングガイド（少額〜大口まで）" },
    ],
  },
  {
    id: "industry",
    title: "業種別ガイド",
    description: "建設・運送・医療・IT・飲食など、業界特有の資金繰り課題に合わせた活用法を紹介します。",
    articles: [
      { slug: "industry-hub", label: "業種別ファクタリングガイド一覧" },
      { slug: "construction", label: "建設業向けファクタリング完全ガイド" },
      { slug: "transport", label: "運送業向けファクタリングガイド" },
      { slug: "logistics", label: "物流・倉庫業向けファクタリング" },
      { slug: "manufacturing", label: "製造業向けファクタリングガイド" },
      { slug: "it-industry", label: "IT業界向けファクタリング完全ガイド" },
      { slug: "saas", label: "システム開発・SaaS企業向けファクタリング" },
      { slug: "medical", label: "医療・介護ファクタリングガイド" },
      { slug: "nursing-care", label: "介護事業向けファクタリング" },
      { slug: "dental", label: "歯科医院向けファクタリング" },
      { slug: "pharmacy", label: "薬局向けファクタリング" },
      { slug: "restaurant", label: "飲食業向けファクタリング" },
      { slug: "beauty", label: "美容・エステ業向けファクタリング" },
      { slug: "ec-commerce", label: "EC・通販業向けファクタリング" },
      { slug: "creative", label: "広告・クリエイティブ業向けファクタリング" },
      { slug: "printing", label: "印刷業向けファクタリング" },
      { slug: "staffing", label: "人材派遣向けファクタリング" },
      { slug: "consulting", label: "コンサル・士業向けファクタリング" },
      { slug: "agriculture", label: "農業向けファクタリング" },
      { slug: "real-estate", label: "不動産業向けファクタリング" },
    ],
  },
  {
    id: "area",
    title: "エリア別ガイド",
    description: "全国の主要エリアに対応したファクタリング会社をエリア別に紹介します。",
    articles: [
      { slug: "area-hub", label: "エリア別ファクタリング会社一覧" },
      { slug: "tokyo", label: "ファクタリング 東京のおすすめ業者10選" },
      { slug: "osaka", label: "ファクタリング 大阪のおすすめ業者8選" },
      { slug: "nagoya", label: "ファクタリング 名古屋のおすすめ業者5選" },
      { slug: "yokohama", label: "ファクタリング 横浜のおすすめ業者5選" },
      { slug: "fukuoka", label: "ファクタリング 福岡のおすすめ業者5選" },
      { slug: "sapporo", label: "ファクタリング 札幌のおすすめ業者5選" },
      { slug: "sendai", label: "ファクタリング 仙台のおすすめ業者5選" },
      { slug: "hiroshima", label: "ファクタリング 広島のおすすめ業者5選" },
    ],
  },
  {
    id: "troubles",
    title: "お悩み・トラブル・安全性",
    description: "悪質業者の見分け方・詐欺手口・契約トラブルなど、安全に利用するための注意点を解説します。",
    articles: [
      { slug: "is-it-legal", label: "ファクタリングは違法？やばい？" },
      { slug: "salary-factoring-illegal", label: "給与ファクタリングが違法な理由" },
      { slug: "scam-detection", label: "悪質業者の見分け方チェックリスト10項目" },
      { slug: "fraud-patterns", label: "ファクタリング詐欺の手口一覧" },
      { slug: "troubles", label: "ファクタリングのトラブル事例7選" },
      { slug: "contract-checklist", label: "契約書チェックリスト｜契約前に確認すべき10項目" },
      { slug: "double-assignment", label: "ファクタリングの二重譲渡とは？" },
      { slug: "debt-registration", label: "債権譲渡登記とは？費用・必要性" },
      { slug: "bankruptcy-risk", label: "売掛先が倒産したらどうなる？" },
      { slug: "prevent-bankruptcy", label: "ファクタリングを使った黒字倒産の防ぎ方" },
    ],
  },
  {
    id: "compare",
    title: "他の資金調達方法との比較",
    description: "銀行融資・ビジネスローン・手形割引など、他の資金調達手段との違いを比較します。",
    articles: [
      { slug: "vs-bank-loan", label: "ファクタリング vs 銀行融資" },
      { slug: "vs-business-loan", label: "ファクタリング vs ビジネスローン" },
      { slug: "vs-bill-discount", label: "ファクタリング vs 手形割引" },
      { slug: "vs-densai", label: "ファクタリング vs でんさい（電子記録債権）" },
      { slug: "vs-abl", label: "ABL（動産担保融資）vs ファクタリング" },
      { slug: "vs-card-payment", label: "ファクタリング vs 請求書カード払い" },
      { slug: "vs-crowdfunding", label: "ファクタリング vs クラウドファンディング" },
      { slug: "vs-subsidy", label: "ファクタリング vs 補助金・助成金" },
      { slug: "funding-methods", label: "中小企業の資金調達手段一覧（15の方法）" },
      { slug: "no-guarantee", label: "経営者保証なしの資金調達方法5選" },
      { slug: "subsidy-bridge", label: "補助金入金待ちの資金繰りに使う方法" },
    ],
  },
  {
    id: "ranking",
    title: "会社比較・ランキング",
    description: "おすすめ会社のランキングや、人気サービス同士の徹底比較を掲載しています。",
    articles: [
      { slug: "how-to-choose", label: "ファクタリング会社の選び方完全ガイド" },
      { slug: "company-directory", label: "ファクタリング会社一覧49社+（比較DB）" },
      { slug: "2sha-ranking", label: "2社間ファクタリングおすすめ10選" },
      { slug: "bulk-estimate", label: "一括見積もりサイト比較" },
      { slug: "switching", label: "ファクタリング乗り換えガイド" },
      { slug: "accel-vs-best", label: "アクセルファクター vs ベストファクター" },
      { slug: "paytner-vs-labol", label: "ペイトナー vs ラボル比較" },
      { slug: "betrading-vs-pmg", label: "ビートレーディング vs PMG比較" },
      { slug: "betrading-vs-ququmo", label: "ビートレーディング vs QuQuMo比較" },
      { slug: "ennavi-vs-betrading", label: "えんナビ vs ビートレーディング比較" },
      { slug: "ququmo-vs-olta", label: "QuQuMo vs OLTA比較" },
    ],
  },
  {
    id: "accounting",
    title: "会計・税務・資金繰り",
    description: "仕訳・勘定科目・確定申告など、ファクタリングの経理処理と資金繰り改善を解説します。",
    articles: [
      { slug: "accounting", label: "ファクタリングの会計処理・仕訳方法" },
      { slug: "expense", label: "ファクタリング手数料は経費になる？" },
      { slug: "tax-return", label: "ファクタリングの確定申告ガイド" },
      { slug: "cashflow-sheet", label: "資金繰り表への反映方法" },
      { slug: "cashflow-statement", label: "キャッシュフロー計算書への影響と記載方法" },
      { slug: "cashflow-tips", label: "中小企業の資金繰り改善方法7選" },
      { slug: "ar-management", label: "売掛金管理の基本とファクタリング活用術" },
      { slug: "receivables-management", label: "売掛金の回収サイト改善方法" },
    ],
  },
  {
    id: "trends",
    title: "市場動向・ケーススタディ",
    description: "市場規模や将来性の最新動向、業種別の実際の資金調達事例を紹介します。",
    articles: [
      { slug: "market-trends", label: "ファクタリング市場規模と2026年の最新動向" },
      { slug: "future-outlook", label: "ファクタリングの将来性（2030年の市場予測）" },
      { slug: "case-studies", label: "資金調達事例集｜業種別成功事例10選" },
    ],
  },
];

const totalCount = categories.reduce((sum, c) => sum + c.articles.length, 0);

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "ファクタリング記事一覧",
  description:
    "ファクタリングの基礎知識・手数料・審査・業種別・エリア別・会社比較まで網羅した記事一覧ページです。",
  url: "https://factoring-partner.pages.dev/articles/",
  isPartOf: {
    "@type": "WebSite",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
};

/* ── Component ────────────────────────────────────── */

export default function ArticlesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "記事一覧" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            記事一覧
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング記事一覧
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングの基礎知識から手数料・審査・業種別・エリア別・会社比較まで、全{totalCount}記事をカテゴリ別に整理しました。気になるテーマからお選びください。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── カテゴリ目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">カテゴリから探す</p>
          <ul className="grid gap-2 text-sm text-primary sm:grid-cols-2">
            {categories.map((cat) => (
              <li key={cat.id}>
                <a href={`#${cat.id}`} className="hover:underline">
                  {cat.title}（{cat.articles.length}）
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── 各カテゴリ ─── */}
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="mb-14">
            <h2 className="mb-3 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
              {cat.title}
            </h2>
            <p className="mb-6 leading-relaxed text-text-light">{cat.description}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {cat.articles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/articles/${a.slug}/`}
                  className="block rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
                >
                  <p className="text-sm font-semibold text-primary">
                    {a.label}
                    <span className="ml-1 text-text-light">→</span>
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            最適なファクタリング会社を見つけましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            記事で知識を深めたら、次はあなたに合ったファクタリング会社を探しましょう。49社以上を手数料・入金速度・審査通過率で徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめ比較ランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
