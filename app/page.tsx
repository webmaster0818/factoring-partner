import type { Metadata } from "next";
import Image from "next/image";
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
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="14" width="14" height="22" rx="1" stroke="#1e3a5f" strokeWidth="2" fill="none" />
        <rect x="22" y="6" width="14" height="30" rx="1" stroke="#1e3a5f" strokeWidth="2" fill="none" />
        <rect x="8" y="18" width="3" height="3" rx="0.5" fill="#e87c3e" />
        <rect x="8" y="24" width="3" height="3" rx="0.5" fill="#e87c3e" />
        <rect x="8" y="30" width="3" height="3" rx="0.5" fill="#e87c3e" />
        <rect x="26" y="10" width="3" height="3" rx="0.5" fill="#e87c3e" />
        <rect x="26" y="16" width="3" height="3" rx="0.5" fill="#e87c3e" />
        <rect x="26" y="22" width="3" height="3" rx="0.5" fill="#e87c3e" />
        <rect x="26" y="28" width="3" height="3" rx="0.5" fill="#e87c3e" />
        <rect x="32" y="10" width="3" height="3" rx="0.5" fill="#1e3a5f" opacity="0.3" />
        <rect x="32" y="16" width="3" height="3" rx="0.5" fill="#1e3a5f" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "個人事業主向け",
    description:
      "少額からの利用もOK。個人事業主でも審査に通りやすいファクタリング会社を厳選して紹介しています。",
    href: "/sole-proprietor/",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="14" r="6" stroke="#1e3a5f" strokeWidth="2" fill="none" />
        <path d="M8 36c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#1e3a5f" strokeWidth="2" fill="none" />
        <circle cx="20" cy="14" r="2" fill="#e87c3e" />
      </svg>
    ),
  },
  {
    title: "フリーランス向け",
    description:
      "請求書1枚から利用可能。フリーランス特化型のサービスで手軽に資金調達ができます。",
    href: "/sole-proprietor/",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="28" height="20" rx="2" stroke="#1e3a5f" strokeWidth="2" fill="none" />
        <path d="M6 14h28" stroke="#1e3a5f" strokeWidth="2" />
        <rect x="10" y="18" width="8" height="2" rx="1" fill="#e87c3e" />
        <rect x="10" y="22" width="12" height="2" rx="1" fill="#1e3a5f" opacity="0.3" />
        <rect x="14" y="28" width="12" height="6" rx="1" stroke="#1e3a5f" strokeWidth="2" fill="none" />
      </svg>
    ),
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
    image: "/images/character/pointing.png",
    imageAlt: "比較調査を説明するビジネスマン",
  },
  {
    title: "ニーズ別のおすすめ",
    description:
      "法人・個人事業主・フリーランスなど、利用者のタイプに合わせて最適なファクタリング会社をご紹介。あなたに合ったサービスが見つかります。",
    image: "/images/character/presenting.png",
    imageAlt: "データを提示するビジネスマン",
  },
  {
    title: "最新情報を随時更新",
    description:
      "ファクタリング業界は変化が早い分野です。手数料の改定やサービスの変更など、最新情報をキャッチアップして記事に反映しています。",
    image: "/images/character/thumbsup.png",
    imageAlt: "サムズアップするビジネスマン",
  },
];

const steps = [
  {
    number: 1,
    title: "ニーズを確認",
    description:
      "法人・個人事業主・フリーランスなど、あなたの事業形態に合ったカテゴリを選択します。",
  },
  {
    number: 2,
    title: "比較ランキングを確認",
    description:
      "手数料・入金スピード・審査通過率など6項目で比較したランキングから、条件に合う会社を探します。",
  },
  {
    number: 3,
    title: "最適な会社に申し込み",
    description:
      "詳細ページで口コミや評判を確認し、あなたに最適なファクタリング会社に申し込みましょう。",
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
      <section className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        <Image
          src="/images/character/hero.png"
          alt="ファクタリングパートナー"
          fill
          priority
          className="hero-bg-img"
        />
        {/* PC: gradient from right, SP: gradient from bottom */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-l from-[#1e3a5f]/90 via-[#1e3a5f]/70 to-transparent" />
        <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(to bottom, rgba(30,58,95,0.3) 0%, rgba(30,58,95,0.85) 60%, rgba(30,58,95,0.95) 100%)" }} />
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-6xl items-center justify-end px-4 py-16 md:py-24">
          <div className="max-w-xl text-center md:text-right">
            <p className="mb-3 text-sm font-semibold tracking-wider text-orange-300 uppercase">
              ファクタリング会社 比較・おすすめ【2026年最新】
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              法人ファクタリング、<br />
              最短即日で使える会社を<br />
              <span className="text-accent">30秒診断。</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-blue-100 md:text-lg md:ml-auto">
              請求書の金額・希望入金日・重視する条件を選ぶだけ。あなたの会社に合う候補を探せます。
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-end">
              <a href="#" className="btn-cta text-lg">
                条件に合う会社を無料診断する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="hero-bg py-6">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-accent md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-blue-200 md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="border-b border-border py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "49社+", label: "掲載会社数" },
              { value: "6項目", label: "比較基準" },
              { value: "最短即日", label: "入金対応" },
              { value: "完全無料", label: "サイト利用料" },
            ].map((item) => (
              <div key={item.label} className="stat-card">
                <div className="text-xl font-bold text-primary md:text-2xl">
                  {item.value}
                </div>
                <div className="mt-1 text-xs font-medium text-text-light">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target audience cards */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-text-main md:text-3xl">
            <span className="text-gradient">あなたに合った</span>
            ファクタリング会社を探す
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {targetCards.map((card) => (
              <Link key={card.title} href={card.href} className="card group">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-text-main group-hover:text-primary">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {card.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  詳しく見る
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M6.5 3.5L11 8l-4.5 4.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-light section-diagonal py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-text-main md:text-3xl">
            ファクタリングパートナーが
            <span className="text-gradient">選ばれる理由</span>
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="card text-center">
                <div className="mx-auto mb-4 flex h-[140px] w-[140px] items-center justify-center">
                  <Image
                    src={reason.image}
                    alt={reason.imageAlt}
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                </div>
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

      {/* How it works */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-2xl font-bold text-text-main md:text-3xl">
            ご利用の流れ
          </h2>
          <div className="mt-10 space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-5 pb-10">
                {/* Connector line */}
                {index < steps.length - 1 && <div className="step-connector" />}
                {/* Number */}
                <div className="step-number">{step.number}</div>
                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-text-main">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/ranking/" className="btn-cta">
              おすすめ比較ランキングを見る
            </Link>
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
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M5.5 7.5L10 12l4.5-4.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
      <section className="cta-section py-16 text-center text-white">
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 md:flex-row md:gap-10 md:text-left">
          <div className="mb-6 flex-shrink-0 md:mb-0">
            <Image
              src="/images/character/arms-crossed.png"
              alt="ファクタリングパートナー"
              width={160}
              height={160}
              className="mx-auto w-[120px] drop-shadow-lg md:w-[160px]"
            />
          </div>
          <div className="flex-1">
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
        </div>
      </section>
    </>
  );
}
