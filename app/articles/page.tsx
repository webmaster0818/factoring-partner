import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { categories, type Category } from "../lib/articleCategories";

export const metadata: Metadata = {
  title:
    "ファクタリング記事一覧｜基礎知識・手数料・審査・業種別ガイドまとめ",
  description:
    "ファクタリングパートナーの記事一覧ページです。ファクタリングの基礎知識、対象者別ガイド、手数料・審査、即日・スピード、業種別、エリア別、お悩み・トラブル、会社比較・ランキングまで117記事をカテゴリ別に整理しています。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/",
  },
  openGraph: {
    title:
      "ファクタリング記事一覧｜基礎知識・手数料・審査・業種別ガイドまとめ",
    description:
      "ファクタリングの基礎知識から手数料・審査・業種別・エリア別・会社比較まで、117記事をカテゴリ別に整理した記事一覧ページです。",
    url: "https://hyogo-shihoushoshi.jp/articles/",
    type: "website",
  },
};

/* ── Data ─────────────────────────────────────────── */



const totalCount = categories.reduce((sum, c) => sum + c.articles.length, 0);

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "ファクタリング記事一覧",
  description:
    "ファクタリングの基礎知識・手数料・審査・業種別・エリア別・会社比較まで網羅した記事一覧ページです。",
  url: "https://hyogo-shihoushoshi.jp/articles/",
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
            ファクタリングの基礎知識から手数料・審査・業種別（26業種）・エリア別（28都市）・会社比較まで、全{totalCount}記事をカテゴリ別に整理しました。数値・手数料は公式確認値のみ、法制度は一次情報に基づいて執筆しています。初めての方は「ファクタリングとは」→「手数料ガイド」→「業種別・エリア別」の順に読むのがおすすめです。
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
