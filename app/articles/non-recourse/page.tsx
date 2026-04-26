import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリングのノンリコースとウィズリコースの違いを解説",
  description:
    "ファクタリングのノンリコース（償還請求権なし）とウィズリコース（償還請求権あり）の違いを分かりやすく解説。それぞれのメリット・デメリット、選び方のポイントを紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/non-recourse/",
  },
  openGraph: {
    title: "ファクタリングのノンリコースとウィズリコースの違いを解説",
    description: "ノンリコースとウィズリコースの違いを比較。選び方のポイントも解説。",
    url: "https://factoring-partner.pages.dev/articles/non-recourse/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const comparisonItems = [
  { item: "償還請求権", nonRecourse: "なし（売掛先が倒産してもリスクはファクタリング会社が負担）", withRecourse: "あり（売掛先が支払えない場合、利用者が買い戻す義務あり）" },
  { item: "手数料", nonRecourse: "やや高め（5%〜18%程度）", withRecourse: "低め（1%〜10%程度）" },
  { item: "リスク負担", nonRecourse: "ファクタリング会社", withRecourse: "利用者" },
  { item: "法的性質", nonRecourse: "売掛金の売買（債権譲渡）", withRecourse: "実質的に貸金業に該当する可能性あり" },
  { item: "会計処理", nonRecourse: "売掛金の売却として処理（負債にならない）", withRecourse: "借入金として処理される場合あり" },
  { item: "審査基準", nonRecourse: "売掛先の信用力を重視", withRecourse: "利用者の信用力も重視" },
];

const nonRecourseAdvantages = [
  {
    title: "売掛先の倒産リスクから解放される",
    description:
      "ノンリコースの最大のメリットは、売掛先が倒産・破産しても利用者に買い戻し義務がないことです。売掛金の未回収リスクがファクタリング会社に移転するため、安心して資金調達できます。",
  },
  {
    title: "借入れにならないため負債が増えない",
    description:
      "ノンリコースファクタリングは売掛金の売買であり、法律上の貸付ではありません。そのため貸借対照表上の負債が増えず、銀行融資の審査にも影響しません。オフバランス化のメリットがあります。",
  },
  {
    title: "信用情報に記録されない",
    description:
      "借入れではないため、CICやJICCなどの信用情報機関に記録されません。将来の融資審査に影響しないという大きなメリットがあります。",
  },
  {
    title: "合法なファクタリング",
    description:
      "ノンリコースファクタリングは民法466条に基づく「債権譲渡」として法的に明確な取引です。金融庁もこの形態を正当なファクタリングとして認めています。",
  },
];

const withRecourseRisks = [
  {
    title: "実質的な貸金業に該当するリスク",
    description:
      "ウィズリコース（償還請求権あり）のファクタリングは、金融庁が「実質的に貸付けと同じ」と判断する可能性があります。貸金業登録なしで行うと違法な貸金業に該当するリスクがあります。",
  },
  {
    title: "売掛先の倒産時に買い戻し義務が発生",
    description:
      "売掛先が倒産や破産した場合、利用者がファクタリング会社に売掛金を買い戻す義務があります。既に資金を使ってしまった後に買い戻しを求められると、深刻な資金繰り問題に発展します。",
  },
  {
    title: "借入れとして会計処理される可能性",
    description:
      "償還請求権があるファクタリングは、会計上「金融取引」（借入れ）として処理される場合があります。その場合、負債として計上されるため、財務指標が悪化する可能性があります。",
  },
];

const faqs = [
  {
    question: "ノンリコースとウィズリコースのどちらを選ぶべきですか？",
    answer:
      "基本的にはノンリコース（償還請求権なし）を選ぶことをおすすめします。ノンリコースは売掛先の倒産リスクを負わずに済むため、利用者にとって安全です。また、法的にも「債権譲渡」として明確であり、合法性に疑義が生じません。手数料はやや高めですが、リスク回避のコストとして合理的です。",
  },
  {
    question: "日本のファクタリング会社はどちらが主流ですか？",
    answer:
      "現在の日本のファクタリング市場では、ノンリコース（償還請求権なし）が主流です。金融庁がウィズリコースを「実質的な貸付け」と見なす見解を示して以降、正規のファクタリング会社はノンリコースでのサービス提供に移行しています。ウィズリコースを提案する会社には注意が必要です。",
  },
  {
    question: "ウィズリコースのファクタリングは違法ですか？",
    answer:
      "ウィズリコース自体が即座に違法というわけではありませんが、貸金業登録なしで行うと違法な貸金業に該当する可能性があります。金融庁は償還請求権ありのファクタリングを「実質的に貸付け」と判断するケースがあるため、利用者はノンリコースの会社を選ぶことが安全です。",
  },
  {
    question: "ノンリコースの手数料が高いのはなぜですか？",
    answer:
      "ノンリコースではファクタリング会社が売掛金の未回収リスクを負うため、そのリスクコストが手数料に上乗せされます。ウィズリコースは利用者がリスクを負うため手数料が安いですが、売掛先の倒産時に大きな損失を被る可能性があります。安全性を考えるとノンリコースの手数料は妥当なコストです。",
  },
  {
    question: "契約書でノンリコースかどうか確認する方法は？",
    answer:
      "契約書で「償還請求権」「買戻し義務」「リコース」に関する条項を確認しましょう。「売掛先が支払不能になった場合でも、利用者に買い戻し義務はない」旨が明記されていればノンリコースです。逆に「売掛先が支払えない場合、利用者が買い戻す」旨があればウィズリコースです。不明点は契約前に必ず確認しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリングのノンリコースとウィズリコースの違いを解説",
  description: "ノンリコースとウィズリコースの違いを比較。選び方のポイントも解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/non-recourse/" },
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
    { "@type": "ListItem", position: 3, name: "ノンリコースとウィズリコースの違い", item: "https://factoring-partner.pages.dev/articles/non-recourse/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function NonRecoursePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "ノンリコースとウィズリコースの違い" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">知識ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングのノンリコースと
            <br className="hidden md:block" />
            ウィズリコースの違いを解説
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングの「ノンリコース（償還請求権なし）」と「ウィズリコース（償還請求権あり）」の違いを分かりやすく解説。安全な取引のために知っておくべきポイントをまとめます。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#overview" className="hover:underline">1. ノンリコースとウィズリコースとは</a></li>
            <li><a href="#comparison" className="hover:underline">2. 比較表で違いを確認</a></li>
            <li><a href="#non-recourse-merits" className="hover:underline">3. ノンリコースのメリット</a></li>
            <li><a href="#with-recourse-risks" className="hover:underline">4. ウィズリコースのリスク</a></li>
            <li><a href="#how-to-check" className="hover:underline">5. 契約時の確認ポイント</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        <section id="overview" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ノンリコースとウィズリコースとは</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングには「ノンリコース（Non-Recourse）」と「ウィズリコース（With Recourse）」の2つのタイプがあります。この違いは、売掛先が支払えなくなった場合のリスクを誰が負うかという点にあります。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">ノンリコース（償還請求権なし）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                売掛先が倒産・破産しても、利用者に買い戻し義務がありません。未回収リスクはファクタリング会社が負担します。法律上は「債権譲渡」（売掛金の売買）に該当し、正当なファクタリングの形態です。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">ウィズリコース（償還請求権あり）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                売掛先が支払えない場合、利用者がファクタリング会社に売掛金を買い戻す義務があります。利用者がリスクを負うため手数料は安いですが、金融庁が「実質的な貸付け」と判断する可能性があります。
              </p>
            </div>
          </div>
        </section>

        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">比較表で違いを確認</h2>
          <p className="mb-8 leading-relaxed text-text-light">ノンリコースとウィズリコースの主な違いを一覧表で確認しましょう。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-primary bg-section-bg">
                  <th className="p-3 text-left font-bold text-text-main">比較項目</th>
                  <th className="p-3 text-left font-bold text-secondary">ノンリコース</th>
                  <th className="p-3 text-left font-bold text-accent">ウィズリコース</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row) => (
                  <tr key={row.item} className="border-b border-border">
                    <td className="p-3 font-medium text-text-main">{row.item}</td>
                    <td className="p-3 text-text-light">{row.nonRecourse}</td>
                    <td className="p-3 text-text-light">{row.withRecourse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="non-recourse-merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ノンリコースのメリット</h2>
          <p className="mb-8 leading-relaxed text-text-light">ノンリコースファクタリングが利用者にとって有利な理由を解説します。</p>
          <div className="space-y-4">
            {nonRecourseAdvantages.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="with-recourse-risks" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ウィズリコースのリスク</h2>
          <p className="mb-8 leading-relaxed text-text-light">ウィズリコースファクタリングに潜むリスクを理解しておきましょう。</p>
          <div className="space-y-4">
            {withRecourseRisks.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 実務上の違い ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">実務上の違いと影響</h2>
          <p className="mb-8 leading-relaxed text-text-light">ノンリコースとウィズリコースの違いが実務にどう影響するかを具体的に見てみましょう。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">会計処理の違い</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ノンリコースの場合、売掛金は「売却」として処理されます。仕訳は「売上債権売却損（手数料分）」を費用計上し、売掛金を帳簿から除外します。貸借対照表上の負債は増えません。
                一方、ウィズリコースの場合は、会計上「金融取引」（借入れ）として処理される可能性があります。この場合、受取額は「借入金」として負債に計上され、売掛金は帳簿に残ります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">税務処理の違い</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ノンリコースのファクタリング手数料は「売上債権売却損」として損金算入が可能です。消費税は非課税取引に該当します。ウィズリコースの場合は「支払利息」として処理される場合があり、税務上の取り扱いが異なる可能性があります。顧問税理士に確認しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">銀行融資への影響</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ノンリコースの場合、負債にならないため銀行融資の審査に直接的な影響はありません。しかし、ウィズリコースの場合は借入金として扱われる可能性があり、債務超過や返済負担率の悪化により融資審査にマイナスの影響が出ることがあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">売掛先の倒産時の対応</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ノンリコースでは、売掛先が倒産しても利用者に影響はありません。損失はファクタリング会社が負担します。ウィズリコースでは、売掛先が倒産した場合に利用者がファクタリング会社に対して売掛金相当額を返還する義務があります。この返還義務は利用者にとって大きなリスクです。
              </p>
            </div>
          </div>
        </section>

        {/* ── 具体的なケーススタディ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ケーススタディ：ノンリコースとウィズリコースの違いが出る場面</h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-primary">ケース：売掛先が支払い遅延した場合</h3>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="text-xs font-semibold text-secondary">ノンリコースの場合</p>
                  <p className="mt-1 text-sm text-text-main">売掛先の支払い遅延はファクタリング会社の問題です。利用者は既に資金を受け取っており、追加の負担は一切ありません。安心してビジネスに集中できます。</p>
                </div>
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="text-xs font-semibold text-accent">ウィズリコースの場合</p>
                  <p className="mt-1 text-sm text-text-main">売掛先が支払い遅延すると、ファクタリング会社から利用者に対して遅延損害金や買い戻しを求められる可能性があります。最悪の場合、二重の資金負担が発生します。</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-primary">ケース：売掛先が倒産した場合</h3>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="text-xs font-semibold text-secondary">ノンリコースの場合</p>
                  <p className="mt-1 text-sm text-text-main">売掛先の倒産リスクはファクタリング会社が負担。利用者への影響はゼロです。ファクタリングの最大のメリットであるリスク移転が機能します。</p>
                </div>
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="text-xs font-semibold text-accent">ウィズリコースの場合</p>
                  <p className="mt-1 text-sm text-text-main">利用者がファクタリング会社に対して売掛金全額を返還する義務が発生。既に使ってしまった資金を返す必要があり、自社の倒産にもつながりかねない深刻な事態です。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-to-check" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">契約時の確認ポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリング契約を結ぶ際に必ず確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">「償還請求権」の有無を明確に確認</h3>
              <p className="text-sm leading-relaxed text-text-light">
                契約書に「償還請求権なし」「ノンリコース」と明記されているか確認しましょう。曖昧な表現や、「原則として」「やむを得ない場合を除き」などの但し書きがある場合は、実質的にウィズリコースの可能性があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">「買い戻し条項」がないか確認</h3>
              <p className="text-sm leading-relaxed text-text-light">
                契約書に「売掛先の支払い不能時に買い戻しを求める」条項がないか確認しましょう。このような条項があるとウィズリコースです。正規のファクタリング会社では、売掛先の未払いリスクを会社側が負います。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">手数料以外の費用を確認</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ノンリコースを謳っていても、実質的に手数料以外の名目（遅延損害金・事務手数料・違約金など）で追加請求される場合は注意が必要です。総コストを事前に明確にし、契約書で確認しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">会社の信頼性を確認</h3>
              <p className="text-sm leading-relaxed text-text-light">
                会社の所在地・代表者・設立年月日・登録番号（経済産業大臣認定など）を確認しましょう。実績のある大手ファクタリング会社は基本的にノンリコースで運営しており、安心して利用できます。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：ノンリコースを選ぶべき理由</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <p className="leading-relaxed text-text-light">
              ファクタリングを利用する際は、<strong className="text-primary">必ずノンリコース（償還請求権なし）を選びましょう</strong>。ノンリコースは法的に「債権譲渡」として明確であり、売掛先の倒産リスクから利用者を守ります。手数料はウィズリコースより高めですが、リスク回避のコストとして合理的です。ウィズリコースを提案する会社は、実質的な貸金業に該当する可能性があるため注意が必要です。
            </p>
          </div>
        </section>

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

        {/* ── おすすめのノンリコース会社 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ノンリコースのおすすめファクタリング会社</h2>
          <p className="mb-8 leading-relaxed text-text-light">ノンリコース（償還請求権なし）で運営されている信頼性の高いファクタリング会社を紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">ビートレーディング</h3>
              <p className="mt-1 text-sm text-text-light">累計買取額1,300億円超のノンリコース専門。手数料2%〜。最短2時間入金。高額案件にも上限なし対応。業界最大手級の実績と信頼性で安心して利用可能。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">日本中小企業金融サポート機構</h3>
              <p className="mt-1 text-sm text-text-light">経済産業大臣認定の非営利法人。ノンリコース。手数料1.5%〜。認定機関の安心感と低手数料が魅力。2社間・3社間の両方に対応。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">QuQuMo（ククモ）</h3>
              <p className="mt-1 text-sm text-text-light">ノンリコース。手数料1%〜の業界最安水準。最短2時間入金。請求書と通帳のみで審査可能。オンライン完結で手続きが簡単。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">アクセルファクター</h3>
              <p className="mt-1 text-sm text-text-light">ノンリコース。審査通過率93%以上。手数料2%〜。30万円〜の少額対応。赤字決算でも柔軟対応。年間相談件数15,000件超の実績。</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/contract-checklist/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリング契約チェックリスト</p>
              <p className="mt-1 text-sm text-text-light">契約前に確認すべきポイント</p>
            </Link>
            <Link href="/articles/is-it-legal/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングは合法？</p>
              <p className="mt-1 text-sm text-text-light">法的根拠と注意点を解説</p>
            </Link>
            <Link href="/articles/beginners-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">初めてのファクタリング完全ガイド</p>
              <p className="mt-1 text-sm text-text-light">仕組みから選び方まで</p>
            </Link>
            <Link href="/articles/how-to-choose/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリング会社の選び方</p>
              <p className="mt-1 text-sm text-text-light">10のチェックポイント</p>
            </Link>
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ノンリコースファクタリングの利用の流れ</h2>
          <div className="space-y-3">
            {[
              { step: "見積もり依頼", description: "売掛金の金額・売掛先・入金予定日を伝え、3社以上に見積もりを依頼。ノンリコースであることを事前に確認。" },
              { step: "必要書類の提出", description: "請求書・通帳コピー・身分証明書などをオンラインで提出。会社によって必要書類は異なります。" },
              { step: "審査", description: "売掛先の信用力を中心に審査。ノンリコースの場合、ファクタリング会社がリスクを負うため、売掛先の信用力が特に重視されます。" },
              { step: "契約書の確認", description: "「償還請求権なし」が明記されていることを確認。買い戻し条項がないか、追加費用がないかもチェック。" },
              { step: "契約・入金", description: "ノンリコースの契約を確認して締結。最短即日で指定口座に入金されます。" },
              { step: "売掛金回収・送金", description: "入金予定日に売掛先から入金があったら、ファクタリング会社に送金して完了。売掛先が倒産しても利用者に買い戻し義務はありません。" },
            ].map((item, index) => (
              <div key={item.step} className="flex items-start gap-4 rounded-lg border border-border bg-white p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</span>
                <div>
                  <h3 className="font-bold text-text-main">{item.step}</h3>
                  <p className="mt-1 text-sm text-text-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">ノンリコースのファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            安全なノンリコース型のファクタリング会社を手数料・入金スピードで一括比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
