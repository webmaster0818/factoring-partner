import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { categories } from "../lib/articleCategories";

export const metadata: Metadata = {
  title: "サイトマップ｜ファクタリングパートナー",
  description:
    "ファクタリングパートナーの全ページ一覧（サイトマップ）です。ランキング・業者データベース・手数料シミュレーター・各社レビュー・全記事をカテゴリ別にまとめています。",
  alternates: { canonical: "https://hyogo-shihoushoshi.jp/sitemap/" },
};

const mainPages: { href: string; label: string }[] = [
  { href: "/ranking/", label: "おすすめファクタリング会社ランキング（厳選15社）" },
  { href: "/articles/company-directory/", label: "審査済み業者データベース（49社）" },
  { href: "/simulator/", label: "手数料シミュレーター" },
  { href: "/articles/factoring-fee-survey-2026/", label: "ファクタリング手数料 実態調査2026（49社公式確認）" },
  { href: "/articles/fee-disclosed-companies/", label: "手数料を公表している会社一覧（44社）" },
  { href: "/verification-policy/", label: "情報の調査・検証ポリシー" },
  { href: "/about/", label: "運営者情報" },
  { href: "/contact/", label: "お問い合わせ" },
  { href: "/articles/", label: "記事一覧（カテゴリ別インデックス）" },
  { href: "/reviews/", label: "ファクタリング会社レビュー一覧" },
];

const reviews: { name: string; slug: string }[] = [
  { name: "ビートレーディング", slug: "betrading" },
  { name: "QuQuMo（ククモ）", slug: "ququmo" },
  { name: "ペイトナー", slug: "paytner" },
  { name: "ラボル", slug: "labol" },
  { name: "アクセルファクター", slug: "accelfactor" },
  { name: "日本中小企業金融サポート機構", slug: "support-org" },
  { name: "OLTA（オルタ）", slug: "olta" },
  { name: "PMG", slug: "pmg" },
  { name: "ベストファクター", slug: "bestfactor" },
  { name: "トップ・マネジメント", slug: "top-management" },
  { name: "FREENANCE（フリーナンス）", slug: "freenance" },
  { name: "AGビジネスサポート", slug: "ag-business" },
  { name: "みんなのファクタリング", slug: "minnano" },
  { name: "GoodPlus", slug: "goodplus" },
  { name: "PAYTODAY", slug: "paytoday" },
  { name: "メンターキャピタル", slug: "mentor" },
  { name: "JTC", slug: "jtc" },
  { name: "ジャパンマネジメント", slug: "japan-management" },
  { name: "マネーフォワード アーリーペイメント", slug: "moneyforward" },
  { name: "GMO BtoB早払い", slug: "gmo-btob" },
  { name: "バイオン", slug: "baion" },
  { name: "えんナビ", slug: "ennavi" },
  { name: "ファクトル", slug: "factoru" },
  { name: "株式会社No.1", slug: "no1" },
  { name: "けんせつくん", slug: "kensetsukun" },
  { name: "土建くん", slug: "dokenkun" },
  { name: "SHIKIN+", slug: "shikinplus" },
  { name: "MSFJ", slug: "msfj" },
];

export default function SitemapPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "サイトマップ" }]} />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">サイトマップ</h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-700">
          ファクタリングパートナーの全ページ一覧です。目的のページを一覧から探せます。
        </p>

        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            主要ページ・ツール
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {mainPages.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-blue-600 hover:underline">{p.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            ファクタリング会社レビュー（{reviews.length}社）
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {reviews.map((r) => (
              <li key={r.slug}>
                <Link href={`/reviews/${r.slug}/`} className="text-blue-600 hover:underline">{r.name}</Link>
              </li>
            ))}
          </ul>
        </section>

        {categories.map((c) => (
          <section key={c.id} className="mt-10">
            <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
              {c.title}
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {c.articles.map((a) => (
                <li key={a.slug}>
                  <Link href={`/articles/${a.slug}/`} className="text-blue-600 hover:underline">{a.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </>
  );
}
