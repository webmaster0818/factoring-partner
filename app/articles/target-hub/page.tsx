import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリングは誰が使える？対象者別ガイド｜法人・個人事業主・フリーランス【2026年】",
  description:
    "ファクタリングは法人だけでなく個人事業主・フリーランスも利用できます。対象者別（法人・個人事業主・フリーランス・個人間取引・起業直後・法人成り前）に、使えるサービス・審査のポイント・注意点をまとめた対象者別ガイドの入口です。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/target-hub/",
  },
  openGraph: {
    title: "ファクタリングは誰が使える？対象者別ガイド｜法人・個人事業主・フリーランス",
    description:
      "法人・個人事業主・フリーランス・個人間取引・起業直後・法人成り前の対象者別に、使えるサービスと審査のポイントをまとめています。",
    url: "https://hyogo-shihoushoshi.jp/articles/target-hub/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

type Target = { slug: string; name: string; description: string; icon: string };

const targets: Target[] = [
  {
    slug: "for-corporation",
    name: "法人",
    description: "高額・大口の売掛金にも対応。3社間や大手ファクタリングも選べる法人向けの選び方とおすすめを解説。",
    icon: "🏢",
  },
  {
    slug: "for-sole-proprietor",
    name: "個人事業主",
    description: "個人事業主でも使えるファクタリング会社を厳選。少額対応・オンライン完結・必要書類の少なさで選ぶポイント。",
    icon: "🧑‍💼",
  },
  {
    slug: "for-freelance",
    name: "フリーランス",
    description: "報酬の前払い・請求書買取に対応したフリーランス向けサービス。最短即日・少額から使える会社を比較。",
    icon: "💻",
  },
  {
    slug: "individual-clients",
    name: "個人間取引・売掛先が個人",
    description: "売掛先が個人・個人間取引の場合の可否と注意点。対応できるケースと難しいケースを正直に整理。",
    icon: "🤝",
  },
  {
    slug: "startup",
    name: "起業直後・創業期",
    description: "創業まもない・実績が浅い事業者がファクタリングを使えるか。審査で見られる点と現実的な選択肢。",
    icon: "🚀",
  },
  {
    slug: "before-incorporation",
    name: "法人成りの前後",
    description: "個人事業主から法人成りするタイミングでのファクタリング活用法と、契約名義の注意点。",
    icon: "📈",
  },
];

const faqs = [
  {
    q: "ファクタリングは個人事業主やフリーランスでも使えますか？",
    a: "使えます。以前は法人向けが中心でしたが、現在は個人事業主・フリーランス向けに、少額・オンライン完結・必要書類が少ないサービスが増えています。ただし「売掛先が事業者（法人・個人事業主）である売掛金」が対象で、給与や個人相手の債権は対象外になることが多い点に注意が必要です。",
  },
  {
    q: "起業したばかり（創業まもない）でも利用できますか？",
    a: "利用できる可能性はあります。ファクタリングの審査で最も重視されるのは、一般に「利用者自身の経営状況」よりも「売掛先の信用力（支払能力）」です。そのため創業まもない・赤字でも、支払能力の高い取引先への売掛金があれば通ることがあります。ただし取引実績が浅いと上限額が低めに設定される傾向があります。",
  },
  {
    q: "売掛先が個人の場合でもファクタリングできますか？",
    a: "多くのファクタリング会社は、売掛先が事業者である売掛金を対象としており、売掛先が一般個人の債権は取り扱わない・審査が難しいことが一般的です。個人間取引・売掛先が個人の場合の可否は会社によって異なるため、申込前に対象範囲を確認しましょう。",
  },
  {
    q: "対象者によって選ぶべき会社は変わりますか？",
    a: "変わります。法人の高額案件は3社間や大手法人向け、個人事業主・フリーランスの少額案件はオンライン完結・少額対応の会社が向いています。まずは事業形態・金額・急ぎ度で絞り込むのが近道です。当サイトの無料診断でも、対象者別に合う会社を絞り込めます。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリングは誰が使える？対象者別ガイド｜法人・個人事業主・フリーランス",
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  author: { "@type": "Organization", name: "ファクタリングパートナー編集部" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/target-hub/" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">対象者別ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングは誰が使える？
            <br className="hidden md:block" />
            対象者別ガイド
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            法人だけでなく、個人事業主・フリーランスも利用できます。あなたの立場に合ったサービスの選び方を、対象者別にまとめました。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <div className="mb-10">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "記事一覧", href: "/articles/" }, { label: "対象者別ガイド" }]} />
        </div>

        <div className="mb-10 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            ファクタリングは<strong>法人・個人事業主・フリーランスのいずれも利用できます</strong>。共通の前提は「売掛先が事業者である売掛金があること」。対象者によって向いているサービス（法人の高額案件は3社間・大手、個人事業主/フリーランスの少額案件はオンライン完結型）が変わるため、まずは自分の立場に合ったガイドから確認しましょう。急ぎで絞り込むなら<Link href="/diagnosis/" className="text-primary underline">無料診断</Link>が便利です。
          </p>
        </div>

        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">あなたの立場から選ぶ</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {targets.map((t) => (
              <Link
                key={t.slug}
                href={`/articles/${t.slug}/`}
                className="block rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
              >
                <p className="text-lg font-bold text-text-main">
                  <span className="mr-2">{t.icon}</span>
                  {t.name}
                </p>
                <p className="mt-2 text-sm text-text-light leading-relaxed">{t.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">対象者別・選び方の早見表</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-section-bg text-left">
                  <th className="border border-border px-3 py-2">立場</th>
                  <th className="border border-border px-3 py-2">向いているサービスの傾向</th>
                  <th className="border border-border px-3 py-2">重視したい点</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-bold">法人（高額・大口）</td>
                  <td className="border border-border px-3 py-2">3社間・法人向け大手・銀行系</td>
                  <td className="border border-border px-3 py-2">手数料の低さ・買取上限・対応スピード</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-bold">個人事業主</td>
                  <td className="border border-border px-3 py-2">オンライン完結・少額対応</td>
                  <td className="border border-border px-3 py-2">必要書類の少なさ・入金の速さ</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-bold">フリーランス</td>
                  <td className="border border-border px-3 py-2">請求書買取・報酬前払い型</td>
                  <td className="border border-border px-3 py-2">少額から使える・スマホ完結</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-bold">起業直後</td>
                  <td className="border border-border px-3 py-2">売掛先の信用力を重視する会社</td>
                  <td className="border border-border px-3 py-2">創業期・実績が浅くても相談可か</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-text-light">
            仕組みの基本は<Link href="/articles/what-is-factoring/" className="text-primary underline">ファクタリングとは</Link>、費用は<Link href="/articles/fee-guide/" className="text-primary underline">手数料の相場ガイド</Link>、会社選びは<Link href="/ranking/" className="text-primary underline">おすすめランキング</Link>をご覧ください。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-bold text-text-main">
                  <span className="pr-4">{f.q}</span>
                  <span className="text-primary transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-light">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">あなたに合う1社を30秒で絞り込む</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90">
            事業形態・金額・急ぎ度に答えるだけで、対象者別に合うファクタリング会社が分かります。
          </p>
          <Link href="/diagnosis/" className="btn-cta mt-6 text-base">無料診断を試す</Link>
        </section>
      </div>
    </>
  );
}
