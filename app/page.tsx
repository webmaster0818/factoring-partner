import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ファクタリングパートナー | ファクタリング会社おすすめ比較【2026年最新】",
  description:
    "ファクタリング会社49社以上を徹底比較。手数料・入金スピード・審査通過率など6項目で比較し、法人・個人事業主・フリーランスに最適なファクタリング会社が見つかります。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/",
  },
};

const targetCards = [
  {
    title: "法人（中小企業）向け",
    description:
      "資金繰りの改善や急な支払いに対応。銀行融資が間に合わない場面でも最短即日で資金調達が可能です。",
    href: "/corporation/",
    icon: "🏢",
  },
  {
    title: "個人事業主向け",
    description:
      "少額からの利用もOK。個人事業主でも審査に通りやすいファクタリング会社を厳選して紹介しています。",
    href: "/sole-proprietor/",
    icon: "👤",
  },
  {
    title: "フリーランス向け",
    description:
      "請求書1枚から利用可能。フリーランス特化型のサービスで手軽に資金調達ができます。",
    href: "/sole-proprietor/",
    icon: "💻",
  },
];

const stats = [
  { value: "49社+", label: "掲載ファクタリング会社" },
  { value: "多数", label: "利用者の口コミ・評判" },
  { value: "6項目", label: "比較項目で徹底分析" },
];

const reasons = [
  {
    title: "徹底した比較調査",
    description:
      "手数料、入金スピード、審査通過率、対応エリア、オンライン完結の可否、買取可能額の6項目で各社を徹底比較。客観的なデータに基づいた情報を提供します。",
    icon: "📊",
  },
  {
    title: "ニーズ別のおすすめ",
    description:
      "法人・個人事業主・フリーランスなど、利用者のタイプに合わせて最適なファクタリング会社をご紹介。あなたに合ったサービスが見つかります。",
    icon: "🎯",
  },
  {
    title: "最新情報を随時更新",
    description:
      "ファクタリング業界は変化が早い分野です。手数料の改定やサービスの変更など、最新情報をキャッチアップして記事に反映しています。",
    icon: "🔄",
  },
];

const faqs = [
  {
    question: "ファクタリングとは何ですか？",
    answer:
      "ファクタリングとは、企業が保有する売掛債権（請求書）をファクタリング会社に売却し、期日前に資金化するサービスです。融資とは異なり、借入にはならないため、負債を増やさずに資金調達が可能です。",
  },
  {
    question: "ファクタリングの手数料はどれくらいですか？",
    answer:
      "2社間ファクタリングの場合、一般的に8%〜18%程度が相場です。3社間ファクタリングの場合は1%〜9%程度です。売掛先の信用力や取引金額によって手数料は変動します。",
  },
  {
    question: "個人事業主やフリーランスでも利用できますか？",
    answer:
      "はい、利用できます。近年は個人事業主やフリーランス向けのファクタリングサービスが増えており、請求書1枚から数万円の少額でも対応可能な会社があります。",
  },
  {
    question: "即日入金は本当に可能ですか？",
    answer:
      "はい、多くのファクタリング会社が即日入金に対応しています。オンライン完結型のサービスであれば、申し込みから最短2時間で入金されるケースもあります。ただし、初回利用時は審査に時間がかかる場合があります。",
  },
];

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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="section-primary-light py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-3xl font-bold leading-tight text-primary md:text-5xl">
            最適なファクタリング会社が見つかる
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light md:text-xl">
            49社以上のファクタリング会社を手数料・入金スピード・審査通過率など6項目で徹底比較。法人・個人事業主・フリーランスに最適な1社が見つかります。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/ranking/" className="btn-cta text-lg">
              おすすめ比較ランキングを見る
            </Link>
            <Link href="/knowledge/" className="btn-outline">
              ファクタリングの基礎知識
            </Link>
          </div>
        </div>
      </section>

      {/* Target Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-text-main md:text-3xl">
            <span className="text-gradient">あなたに合った</span>
            ファクタリング会社を探す
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {targetCards.map((card) => (
              <Link key={card.title} href={card.href} className="card group">
                <div className="mb-3 text-4xl">{card.icon}</div>
                <h3 className="text-lg font-bold text-text-main group-hover:text-primary">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {card.description}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent">
                  詳しく見る →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-light py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-text-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-text-main md:text-3xl">
            ファクタリングパートナーが
            <span className="text-gradient">選ばれる理由</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="card text-center">
                <div className="mb-4 text-4xl">{reason.icon}</div>
                <h3 className="text-lg font-bold text-text-main">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-light">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-2xl font-bold text-text-main md:text-3xl">
            よくある質問
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-text-light">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">
            あなたに最適なファクタリング会社を見つけましょう
          </h2>
          <p className="mt-4 text-base text-blue-100">
            49社以上のファクタリング会社を徹底比較。手数料・入金スピード・審査通過率など6項目であなたに合った1社が見つかります。
          </p>
          <Link
            href="/ranking/"
            className="btn-cta mt-8 text-lg"
          >
            おすすめ比較ランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
