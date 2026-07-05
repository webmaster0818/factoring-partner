import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリング会社の口コミ・評判レビュー一覧｜28社を徹底検証",
  description:
    "ファクタリングパートナーが調査したファクタリング会社28社の口コミ・評判レビュー一覧です。フリーランス向け・法人向け大口・オンライン完結・業種特化など、各社の手数料・審査・入金スピードを検証しています。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/",
  },
  openGraph: {
    title:
      "ファクタリング会社の口コミ・評判レビュー一覧｜28社を徹底検証",
    description:
      "ファクタリング会社28社の口コミ・評判レビュー一覧。手数料・審査・入金スピードを各社ごとに検証しています。",
    url: "https://hyogo-shihoushoshi.jp/reviews/",
    type: "website",
  },
};

/* ── Data ─────────────────────────────────────────── */

type ReviewLink = { slug: string; name: string; note: string };
type ReviewGroup = { id: string; title: string; description: string; companies: ReviewLink[] };

const groups: ReviewGroup[] = [
  {
    id: "freelance",
    title: "フリーランス・個人事業主向け",
    description: "少額・即日・オンライン完結で、フリーランスや個人事業主が使いやすいサービスです。",
    companies: [
      { slug: "paytner", name: "ペイトナー", note: "最短10分・フリーランス向け" },
      { slug: "labol", name: "ラボル", note: "24時間365日即日対応" },
      { slug: "freenance", name: "FREENANCE（フリーナンス）", note: "GMO系フリーランス向け" },
    ],
  },
  {
    id: "online",
    title: "オンライン完結・AI審査型",
    description: "来店不要・完全オンラインで申し込めるAI審査型のクラウドファクタリングです。",
    companies: [
      { slug: "olta", name: "OLTA（オルタ）", note: "AI審査のクラウドファクタリング" },
      { slug: "ququmo", name: "QuQuMo（ククモ）", note: "手数料1%〜のオンライン完結" },
      { slug: "paytoday", name: "PAYTODAY", note: "AI審査で最短30分" },
      { slug: "factoru", name: "ファクトル", note: "最短40分のAIファクタリング" },
      { slug: "baion", name: "バイオン", note: "AI審査で即日入金" },
      { slug: "goodplus", name: "GoodPlus", note: "最短90分のオンライン" },
      { slug: "shikinplus", name: "SHIKIN+", note: "オンライン完結" },
      { slug: "minnano", name: "みんなのファクタリング", note: "法人・個人事業主のオンライン" },
    ],
  },
  {
    id: "corporate",
    title: "法人向け・大口対応",
    description: "中小企業の高額取引にも対応する、法人向けの大手・実績豊富なサービスです。",
    companies: [
      { slug: "betrading", name: "ビートレーディング", note: "利用者の声で手数料・審査を検証" },
      { slug: "pmg", name: "PMG", note: "年間取引8,600件の大手" },
      { slug: "jtc", name: "JTC", note: "法人向け大口ファクタリング" },
      { slug: "bestfactor", name: "ベストファクター", note: "買取額30万〜1億円" },
      { slug: "no1", name: "株式会社No.1", note: "最短即日・手数料1%〜" },
      { slug: "top-management", name: "トップ・マネジメント", note: "手数料0.5%〜の老舗" },
    ],
  },
  {
    id: "screening",
    title: "審査通過率・柔軟審査が強み",
    description: "審査通過率の高さや柔軟な審査基準を強みとするサービスです。",
    companies: [
      { slug: "accelfactor", name: "アクセルファクター", note: "審査通過率93.3%" },
      { slug: "ennavi", name: "えんナビ", note: "24時間対応" },
      { slug: "msfj", name: "MSFJ", note: "手数料の安さと柔軟審査" },
      { slug: "mentor", name: "メンターキャピタル", note: "300万円以下の小口" },
    ],
  },
  {
    id: "group",
    title: "大手グループ・上場系の安心感",
    description: "大手金融グループや上場企業が運営する、信頼性の高いサービスです。",
    companies: [
      { slug: "ag-business", name: "AGビジネスサポート", note: "アイフル系列" },
      { slug: "gmo-btob", name: "GMO BtoB早払い", note: "GMOグループ" },
      { slug: "moneyforward", name: "マネーフォワード アーリーペイメント", note: "上場企業の安心感" },
      { slug: "support-org", name: "日本中小企業金融サポート機構", note: "非営利法人" },
    ],
  },
  {
    id: "industry",
    title: "業種・地域特化",
    description: "建設業など特定の業種や地域に特化したファクタリングサービスです。",
    companies: [
      { slug: "kensetsukun", name: "けんせつくん", note: "建設業特化" },
      { slug: "dokenkun", name: "土建くん", note: "建設業特化" },
      { slug: "japan-management", name: "ジャパンマネジメント", note: "九州発のファクタリング会社" },
    ],
  },
];

const totalCount = groups.reduce((sum, g) => sum + g.companies.length, 0);

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "ファクタリング会社の口コミ・評判レビュー一覧",
  description:
    "ファクタリング会社28社の口コミ・評判レビュー一覧ページです。手数料・審査・入金スピードを各社ごとに検証しています。",
  url: "https://hyogo-shihoushoshi.jp/reviews/",
  isPartOf: {
    "@type": "WebSite",
    name: "ファクタリングパートナー",
    url: "https://hyogo-shihoushoshi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://hyogo-shihoushoshi.jp",
  },
};

/* ── Component ────────────────────────────────────── */

export default function ReviewsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "会社レビュー" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            会社レビュー
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング会社の口コミ・評判レビュー一覧
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            当サイトが調査したファクタリング会社{totalCount}社の口コミ・評判レビューをタイプ別にまとめました。手数料は2026年6月に全社の公式サイトで確認した表記のみを掲載し、各レビュー冒頭に「誰に向くか・向かないか」の結論を明記しています。迷ったら、まず自社の事業形態（法人／個人事業主）と急ぎ度で絞り込むのが近道です。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── タイプ目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">タイプから探す</p>
          <ul className="grid gap-2 text-sm text-primary sm:grid-cols-2">
            {groups.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}`} className="hover:underline">
                  {g.title}（{g.companies.length}）
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── 各グループ ─── */}
        {groups.map((g) => (
          <section key={g.id} id={g.id} className="mb-14">
            <h2 className="mb-3 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
              {g.title}
            </h2>
            <p className="mb-6 leading-relaxed text-text-light">{g.description}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {g.companies.map((c) => (
                <Link
                  key={c.slug}
                  href={`/reviews/${c.slug}/`}
                  className="block rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
                >
                  <p className="font-semibold text-primary">
                    {c.name}の口コミ・評判
                    <span className="ml-1 text-text-light">→</span>
                  </p>
                  <p className="mt-1 text-sm text-text-light">{c.note}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            あなたに合う1社を見つけましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            各社のレビューを比較したら、おすすめランキングで総合的な順位もチェック。49社以上を手数料・入金速度・審査通過率で徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめ比較ランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
