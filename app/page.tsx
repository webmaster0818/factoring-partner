import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ファクタリングパートナー | ファクタリング会社おすすめ比較【2026年最新】",
  description:
    "ファクタリング会社49社以上を徹底比較。手数料・入金スピード・審査通過率など6項目で比較し、法人・個人事業主・フリーランスに最適なファクタリング会社が見つかります。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/",
  },
};

const targetCards = [
  {
    title: "法人（中小企業）向け",
    description:
      "資金繰りの改善や急な支払いに対応。銀行融資が間に合わない場面でも最短即日で資金調達が可能です。",
    href: "/articles/for-corporation/",
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
    href: "/articles/for-sole-proprietor/",
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
    href: "/articles/for-sole-proprietor/",
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
    image: "",
    imageAlt: "",
  },
  {
    title: "ニーズ別のおすすめ",
    description:
      "法人・個人事業主・フリーランスなど、利用者のタイプに合わせて最適なファクタリング会社をご紹介。あなたに合ったサービスが見つかります。",
    image: "",
    imageAlt: "",
  },
  {
    title: "最新情報を随時更新",
    description:
      "ファクタリング業界は変化が早い分野です。手数料の改定やサービスの変更など、最新情報をキャッチアップして記事に反映しています。",
    image: "",
    imageAlt: "",
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
  {
    question: "ファクタリングは借入（融資）になりますか？",
    answer:
      "いいえ。ファクタリングは売掛債権を売却して資金化する「債権の売買」であり、金銭の貸し借り（融資）ではありません。負債として計上されず、保証人や担保も原則不要です。法的にも民法上の債権譲渡（民法第466条等）にもとづく取引で、貸金業には該当しません。ただし「償還請求権あり（買い戻し義務あり）」の契約は実質的な貸付とみなされる場合があるため、契約内容の確認が大切です。",
  },
  {
    question: "2社間ファクタリングと3社間ファクタリングの違いは何ですか？",
    answer:
      "2社間は利用者とファクタリング会社の2者で契約し、売掛先に知られずに利用できますが、手数料はやや高め（目安8〜18%程度）です。3社間は売掛先の承諾・通知を得る方式で、手数料は低め（目安1〜9%程度）ですが、売掛先にファクタリング利用が伝わります。スピードと秘密性を重視するなら2社間、手数料の低さを重視するなら3社間が一般的な選び方です。",
  },
  {
    question: "給与ファクタリングは利用しても大丈夫ですか？",
    answer:
      "個人が給与を対象にする「給与ファクタリング」は、実質的に貸付に当たるとして貸金業法の規制対象になり得ると金融庁が注意喚起しています。高額な手数料や違法な取り立てのトラブルも報告されているため、利用はおすすめしません。事業者向けの売掛債権ファクタリングとは別物ですのでご注意ください。",
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
        {/* PC */}
        <Image
          src="/images/character/hero.png"
          alt="ファクタリングパートナー"
          fill
          priority
          className="hidden md:block"
          style={{ objectFit: "cover", objectPosition: "left center" }}
        />
        {/* SP - same person, cropped for mobile */}
        <Image
          src="/images/character/hero-sp.png"
          alt="ファクタリングパートナー"
          fill
          priority
          className="md:hidden"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
        {/* PC: gradient from right, SP: gradient from bottom */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-l from-[#1e3a5f]/90 via-[#1e3a5f]/70 to-transparent" />
        <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(to bottom, rgba(30,58,95,0.3) 0%, rgba(30,58,95,0.85) 60%, rgba(30,58,95,0.95) 100%)" }} />
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-6xl items-center justify-end px-4 py-16 md:py-24">
          <div className="max-w-2xl text-center md:text-right">
            <p className="mb-3 text-sm font-semibold tracking-wider text-orange-300 uppercase">
              ファクタリング会社 比較・おすすめ【2026年最新】
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              最短即日、<br />
              <span className="md:whitespace-nowrap">
                いますぐ使える<br className="md:hidden" />ファクタリングを
              </span>
              <br />
              <span className="text-accent">30秒で絞り込み。</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-blue-100 md:text-lg md:ml-auto">
              状況・目的を選ぶだけで、あなたの会社に合う候補が見つかります。手数料の概算はシミュレーターで確認できます。
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-end">
              <a href="/diagnosis/" className="btn-cta text-lg">
                30秒無料診断で合う会社を絞り込む
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

      {/* ファクタリングとは（基礎解説） */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl font-bold text-text-main md:text-3xl">
            <span className="text-gradient">ファクタリング</span>とは？
            仕組みをわかりやすく解説
          </h2>
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-text-light md:text-base">
            <p>
              ファクタリングとは、企業や個人事業主が保有する<strong>売掛債権（請求書・未回収の売上）</strong>をファクタリング会社に売却し、支払期日を待たずに資金化する資金調達の方法です。取引先からの入金が1〜2か月先になる場合でも、ファクタリングを使えば早ければ申込当日に現金を受け取れます。
            </p>
            <p>
              最大の特徴は、<strong>融資（借入）ではなく「債権の売買」</strong>である点です。銀行融資のように負債が増えることはなく、原則として保証人や不動産担保も不要。法的には民法上の<strong>債権譲渡（民法第466条ほか）</strong>にもとづく正当な取引で、貸金業（お金の貸し借り）とは異なります。そのため、赤字や税金の滞納があっても、売掛先の信用力が高ければ利用できるケースがあります。
            </p>
          </div>

          {/* 融資との違い */}
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="card">
              <h3 className="text-base font-bold text-primary">ファクタリング</h3>
              <ul className="mt-3 space-y-2 text-sm text-text-light">
                <li>◎ 売掛債権の「売買」で資金化（負債にならない）</li>
                <li>◎ 原則、担保・保証人が不要</li>
                <li>◎ 最短即日のスピード資金化</li>
                <li>◎ 審査は主に「売掛先」の信用力を見る</li>
                <li>△ 手数料は融資の金利より割高になりやすい</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-base font-bold text-text-main">銀行融資</h3>
              <ul className="mt-3 space-y-2 text-sm text-text-light">
                <li>・ 金銭の「借入」（負債として計上される）</li>
                <li>・ 担保・保証人を求められることが多い</li>
                <li>・ 実行までに数週間かかることがある</li>
                <li>・ 審査は主に「自社」の信用力を見る</li>
                <li>・ 金利は低め（長期の資金調達向き）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2社間・3社間の違い */}
      <section className="section-light py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl font-bold text-text-main md:text-3xl">
            2社間・3社間ファクタリングの違い
          </h2>
          <p className="mt-4 text-center text-sm text-text-light">
            契約方式によって、手数料・スピード・売掛先への通知の有無が変わります。
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-semibold">比較項目</th>
                  <th className="px-4 py-3 text-left font-semibold">2社間ファクタリング</th>
                  <th className="px-4 py-3 text-left font-semibold">3社間ファクタリング</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border bg-white">
                  <th className="px-4 py-3 text-left font-medium text-text-main">契約する当事者</th>
                  <td className="px-4 py-3 text-text-light">利用者とファクタリング会社</td>
                  <td className="px-4 py-3 text-text-light">利用者・ファクタリング会社・売掛先</td>
                </tr>
                <tr className="border-b border-border bg-[#f8fafc]">
                  <th className="px-4 py-3 text-left font-medium text-text-main">売掛先への通知</th>
                  <td className="px-4 py-3 text-text-light">不要（知られずに利用できる）</td>
                  <td className="px-4 py-3 text-text-light">必要（承諾・通知が前提）</td>
                </tr>
                <tr className="border-b border-border bg-white">
                  <th className="px-4 py-3 text-left font-medium text-text-main">手数料の目安</th>
                  <td className="px-4 py-3 text-text-light">やや高め（一般に8〜18%程度）</td>
                  <td className="px-4 py-3 text-text-light">低め（一般に1〜9%程度）</td>
                </tr>
                <tr className="border-b border-border bg-[#f8fafc]">
                  <th className="px-4 py-3 text-left font-medium text-text-main">入金スピード</th>
                  <td className="px-4 py-3 text-text-light">速い（最短即日）</td>
                  <td className="px-4 py-3 text-text-light">やや時間がかかる傾向</td>
                </tr>
                <tr className="bg-white">
                  <th className="px-4 py-3 text-left font-medium text-text-main">向いている人</th>
                  <td className="px-4 py-3 text-text-light">取引先に知られたくない・急ぎたい</td>
                  <td className="px-4 py-3 text-text-light">手数料を抑えたい・売掛先の協力を得られる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-text-light">
            ※ 手数料の数値は一般的な目安であり、売掛先の信用力・取引金額・契約条件により変動します。実際の条件は各社にご確認ください。
          </p>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl font-bold text-text-main md:text-3xl">
            ファクタリングのメリット・デメリット
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card border-t-4" style={{ borderTopColor: "#1e3a5f" }}>
              <h3 className="text-lg font-bold text-primary">メリット</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text-light">
                <li><strong>最短即日で資金化できる：</strong>支払期日前の売掛金をすぐ現金化でき、急な支払いにも対応しやすい。</li>
                <li><strong>負債が増えない：</strong>借入ではないため、貸借対照表上の負債が増えず、信用情報にも影響しにくい。</li>
                <li><strong>担保・保証人が原則不要：</strong>自社の業績よりも売掛先の信用力が重視される。</li>
                <li><strong>売掛先の倒産リスクに備えられる：</strong>償還請求権なし（ノンリコース）の契約なら、売掛先が倒産しても買い戻し義務を負わないのが一般的。</li>
              </ul>
            </div>
            <div className="card border-t-4" style={{ borderTopColor: "#e87c3e" }}>
              <h3 className="text-lg font-bold text-accent">デメリット・注意点</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text-light">
                <li><strong>手数料が割高になりやすい：</strong>融資の金利と比べてコストが高く、繰り返し使うと資金繰りを圧迫することも。</li>
                <li><strong>売掛金の範囲でしか調達できない：</strong>保有する請求書の金額が上限になる。</li>
                <li><strong>3社間では取引先に知られる：</strong>取引関係への配慮が必要な場合がある。</li>
                <li><strong>悪質業者に注意：</strong>法外な手数料や、実質貸付の「偽装ファクタリング」を行う業者も存在する（次の項目で解説）。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 違法業者・偽装ファクタリングへの注意 */}
      <section className="section-light py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border border-accent/40 bg-[#fff8f2] p-6 md:p-8">
            <h2 className="text-xl font-bold text-text-main md:text-2xl">
              ⚠ 悪質業者・偽装ファクタリングにご注意ください
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-text-light md:text-base">
              <p>
                正規のファクタリングは売掛債権の売買ですが、なかには<strong>実質的な貸付（融資）をファクタリングと偽る「偽装ファクタリング」</strong>や、法外な手数料を請求する悪質な業者も存在します。金融庁も、こうした取引や個人向けの「給与ファクタリング」について注意喚起を行っています。
              </p>
              <p>次のような業者・契約には特に注意しましょう。</p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>償還請求権あり（買い戻し義務あり）の契約：</strong>売掛先が支払えない場合に利用者へ請求される契約は、実質的な貸付＝貸金業登録が必要な取引の可能性があります。</li>
                <li><strong>「給与ファクタリング」：</strong>個人の給与を対象にする取引は貸金業法の規制対象になり得るとされ、高金利・違法取り立てのトラブルが報告されています。</li>
                <li><strong>契約書を交付しない／手数料が不透明：</strong>契約内容や手数料を書面で明示しない業者は避けましょう。</li>
                <li><strong>分割での支払いを求められる：</strong>売買であるはずのファクタリングで分割返済を求めるのは、貸付の疑いがあります。</li>
              </ul>
              <p className="text-xs">
                ※ 一般的な注意事項をまとめたものです。個別の契約の適法性や具体的なご判断については、金融庁の公表情報や、弁護士などの専門家にご確認ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 選び方のポイント */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl font-bold text-text-main md:text-3xl">
            失敗しないファクタリング会社の選び方
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              { t: "手数料の水準と内訳", d: "提示された手数料に加え、事務手数料・登記費用・出張費などの諸費用が含まれるかを確認。総額で比較しましょう。" },
              { t: "入金スピード", d: "「最短即日」でも、初回や書類不備があると時間がかかります。希望の入金日に間に合うか事前に相談を。" },
              { t: "2社間か3社間か", d: "取引先に知られたくないなら2社間、手数料を抑えたいなら3社間。自社の状況に合う方式を選びます。" },
              { t: "償還請求権の有無", d: "原則は「償還請求権なし（ノンリコース）」が安心。買い戻し義務のある契約は実質貸付の可能性に注意。" },
              { t: "契約内容の明示", d: "手数料・債権譲渡の範囲・支払い条件を書面で明示してくれるか。説明が不透明な業者は避けましょう。" },
              { t: "対応実績・口コミ", d: "事業形態（法人/個人事業主/フリーランス）や業種への対応実績、利用者の評判も判断材料になります。" },
            ].map((p, i) => (
              <div key={p.t} className="card flex gap-4">
                <div className="shrink-0 text-lg font-bold text-accent">{i + 1}</div>
                <div>
                  <h3 className="text-base font-bold text-text-main">{p.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-light">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-text-light">
            当サイトでは、これらの観点をふまえて各社を比較しています。具体的な比較は
            <Link href="/ranking/" className="font-semibold text-primary hover:underline">おすすめ比較ランキング</Link>
            をご覧ください。
          </p>
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

      {/* 重要ページ・ツール（発見性強化＝収益核/検証への内部導線） */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl font-bold text-text-main md:text-3xl">
            ファクタリング会社選びに役立つツール・データ
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-text-light">
            当サイトが2026年6月に全社の手数料を公式確認した比較・検証コンテンツです。目的に合わせてご活用ください。
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/ranking/" className="block rounded-lg border border-border bg-white p-5 transition-colors hover:border-primary">
              <p className="font-bold text-text-main">おすすめ比較ランキング（厳選15社）</p>
              <p className="mt-1 text-sm text-text-light">手数料・入金速度・審査など6項目で比較した編集部の厳選ランキング。</p>
            </Link>
            <Link href="/articles/company-directory/" className="block rounded-lg border border-border bg-white p-5 transition-colors hover:border-primary">
              <p className="font-bold text-text-main">審査済み業者データベース（49社）</p>
              <p className="mt-1 text-sm text-text-light">49社を対象・手数料・オンライン対応などの条件で絞り込み・並び替え。</p>
            </Link>
            <Link href="/simulator/" className="block rounded-lg border border-border bg-white p-5 transition-colors hover:border-primary">
              <p className="font-bold text-text-main">手数料シミュレーター</p>
              <p className="mt-1 text-sm text-text-light">売掛金額から手数料・入金額の目安をその場で試算できます。</p>
            </Link>
            <Link href="/articles/factoring-fee-survey-2026/" className="block rounded-lg border border-border bg-white p-5 transition-colors hover:border-primary">
              <p className="font-bold text-text-main">ファクタリング手数料 実態調査2026</p>
              <p className="mt-1 text-sm text-text-light">49社の手数料を公式確認して集計した独自調査（公表率・下限の分布）。</p>
            </Link>
            <Link href="/articles/fee-disclosed-companies/" className="block rounded-lg border border-border bg-white p-5 transition-colors hover:border-primary">
              <p className="font-bold text-text-main">手数料を公表している会社一覧（44社）</p>
              <p className="mt-1 text-sm text-text-light">手数料が明確な会社と非公開の会社の違いを一覧で確認できます。</p>
            </Link>
            <Link href="/verification-policy/" className="block rounded-lg border border-border bg-white p-5 transition-colors hover:border-primary">
              <p className="font-bold text-text-main">情報の調査・検証ポリシー</p>
              <p className="mt-1 text-sm text-text-light">手数料の公式確認プロセス・掲載基準・編集体制を公開しています。</p>
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
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <div>
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
