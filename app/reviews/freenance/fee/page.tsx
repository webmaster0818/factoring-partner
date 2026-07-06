import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "FREENANCE(フリーナンス)の手数料はいくら？実質コストと他社比較",
  description:
    "FREENANCE(フリーナンス)即日払いの手数料は3%〜10%（公式サイトにて2026年6月確認）。フリーナンス口座を受取先に設定しない場合は一律10%。実質コストの考え方、ペイトナー・ラボル等との比較、手数料を抑えるコツを解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/freenance/fee/",
  },
  openGraph: {
    title: "FREENANCE(フリーナンス)の手数料はいくら？実質コストと他社比較",
    description:
      "FREENANCEの手数料3%〜10%の仕組み・実質コスト・他社比較・抑えるコツを解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/freenance/fee/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const feeFacts = [
  { label: "手数料", value: "3%〜10%（公式サイトにて2026年6月確認）" },
  { label: "口座未設定の場合", value: "フリーナンス口座を報酬の受取先に設定しない場合は一律10%" },
  { label: "変動要因", value: "フリーナンス口座の利用実績に基づく与信スコア等に応じて3〜10%の間で変動" },
  { label: "振込手数料", value: "無料（GMOあおぞらネット銀行宛）" },
  { label: "契約方式", value: "2社間ファクタリング（売掛先への通知なし）" },
];

const comparisonData = [
  { name: "FREENANCE", fee: "3%〜10%", speed: "最短即日", amount: "1万円〜" },
  { name: "ペイトナー", fee: "一律10%", speed: "最短10分", amount: "1万円〜" },
  { name: "ラボル", fee: "一律10%", speed: "最短60分", amount: "1万円〜" },
  { name: "QuQuMo", fee: "1%〜", speed: "最短2時間", amount: "制限なし" },
];

const saveTips = [
  {
    title: "フリーナンス口座を報酬の受取先に設定する",
    detail:
      "最も基本的なポイントです。フリーナンス口座を受取先に設定しない場合、手数料は一律10%になります。設定していれば与信スコア等に応じて3〜10%の間で変動するため、まず口座を報酬の受取口座として使うことが手数料を下げる前提条件になります。",
  },
  {
    title: "継続利用で与信スコアを育てる",
    detail:
      "FREENANCEの手数料は、フリーナンス口座の利用実績に基づく与信スコアに応じて変動します。初回は上限に近い手数料になりがちですが、口座への入金実績を積み重ねるほど条件が改善していく設計のため、長期利用を前提にすると実質コストを下げやすくなります。",
  },
  {
    title: "振込手数料などの付帯コストも含めて比べる",
    detail:
      "ファクタリングの実質コストは買取手数料だけでは決まりません。FREENANCEはGMOあおぞらネット銀行宛の振込手数料が無料のため、その分の付帯コストを抑えられます。他社と比較する際は、手数料率に加えてこうした周辺コストも合算して判断しましょう。",
  },
  {
    title: "複数社の見積もり・条件と比較する",
    detail:
      "同じ請求書でも、サービスによって提示される条件は異なります。一律10%のシンプルな料金体系（ペイトナー・ラボル）や、下限1%〜のサービス（QuQuMo）など料金設計は様々なので、自分の請求書の金額・急ぎ度に合わせて2〜3社を比較するのが確実です。",
  },
];

const faqs = [
  {
    question: "FREENANCEの手数料は結局何%ですか？",
    answer:
      "公式サイトによると3%〜10%です（公式サイトにて2026年6月確認）。フリーナンス口座を報酬の受取先に設定した場合は与信スコア等に応じて3〜10%の間で変動し、設定しない場合は一律10%が適用されます。実際の適用率は審査を経て個別に決まります。",
  },
  {
    question: "初回利用でも3%になりますか？",
    answer:
      "初回から下限の3%が適用されるとは限りません。手数料はフリーナンス口座の利用実績に基づく与信スコア等で変動する仕組みのため、初回利用時は上限に近い手数料になることが多く、継続利用で与信が積み上がると下がっていく設計です。",
  },
  {
    question: "手数料以外にかかる費用はありますか？",
    answer:
      "GMOあおぞらネット銀行宛の振込手数料は無料と公式に案内されています。会員登録やあんしん補償（損害賠償保険）も無料です。その他の費用の有無や詳細条件は、契約前に公式サイト・契約内容でご確認ください。",
  },
  {
    question: "一律10%のペイトナーやラボルとどちらが安いですか？",
    answer:
      "一概には言えません。FREENANCEはフリーナンス口座を設定し与信を積めば3%台まで下がる余地がある一方、初回や口座未設定では10%となり差がつきません。単発・急ぎならスピードに強い一律10%型、長期継続ならFREENANCEの与信スコア型が有利になりやすい、という整理が現実的です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "FREENANCE(フリーナンス)の手数料はいくら？実質コストと他社比較",
  description:
    "FREENANCEの手数料3%〜10%の仕組み・実質コスト・他社比較・抑えるコツを解説。",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  author: {
    "@type": "Person",
    name: "ファクタリングパートナー 編集部",
    url: "https://hyogo-shihoushoshi.jp/about/",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://hyogo-shihoushoshi.jp",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://hyogo-shihoushoshi.jp/reviews/freenance/fee/",
  },
};

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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://hyogo-shihoushoshi.jp/" },
    { "@type": "ListItem", position: 2, name: "業者レビュー", item: "https://hyogo-shihoushoshi.jp/reviews/" },
    { "@type": "ListItem", position: 3, name: "FREENANCE(フリーナンス)", item: "https://hyogo-shihoushoshi.jp/reviews/freenance/" },
    { "@type": "ListItem", position: 4, name: "手数料" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function FreenanceFeePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "業者レビュー", href: "/reviews/" },
          { label: "FREENANCE(フリーナンス)", href: "/reviews/freenance/" },
          { label: "手数料" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            手数料ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            FREENANCE(フリーナンス)の手数料はいくら？
            <br className="hidden md:block" />
            実質コストと他社比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            FREENANCE「即日払い」の手数料の仕組みと、実際に支払うコストの考え方、フリーランス向け他社サービスとの比較を整理します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            FREENANCEの即日払いの手数料は3%〜10%です（公式サイトにて2026年6月確認）。ただしフリーナンス口座を報酬の受取先に設定しない場合は一律10%となるため、実質的に「口座を使い込んで与信スコアを育てるほど安くなる」料金設計です。振込手数料はGMOあおぞらネット銀行宛なら無料。初回は上限に近くなりがちなので、単発利用なら一律10%型のペイトナー・ラボルと大差なく、長期の継続利用でこそコスト面の強みが出るサービスといえます。
          </p>
          <p className="mt-3 text-sm">
            <Link href="/reviews/freenance/" className="text-primary hover:underline">FREENANCEの総合レビューを見る</Link>
            <span className="mx-2 text-text-light">／</span>
            <Link href="/simulator/" className="text-primary hover:underline">手数料シミュレーターで概算する</Link>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#fee" className="hover:underline">1. FREENANCEの手数料（公式確認値）</a></li>
            <li><a href="#cost" className="hover:underline">2. 実質コストの考え方</a></li>
            <li><a href="#comparison" className="hover:underline">3. 他社との手数料比較</a></li>
            <li><a href="#tips" className="hover:underline">4. 手数料を抑えるコツ4つ</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 手数料 ─── */}
        <section id="fee" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            FREENANCEの手数料（公式確認値）
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {feeFacts.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-section-bg" : "bg-white"}>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-44">
                      {item.label}
                    </th>
                    <td className="px-4 py-3 text-text-light">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ポイントは、手数料の下限3%に近づけるにはフリーナンス口座の活用が前提になっていることです。口座を報酬の受取先に設定しない場合は一律10%が適用されるため、「3%〜」という数字だけを見て申し込むと想定より高くつく可能性があります。最新の条件は必ず公式サイトでご確認ください。
          </p>
        </section>

        {/* ── 実質コスト ─── */}
        <section id="cost" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            実質コストの考え方（一般解説）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングの実質コストを判断するときは、一般に次の3点を合わせて見る必要があります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">1. 受取額ベースで計算する</p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料10%で10万円の請求書を売却すると、受け取れるのは9万円です。「支払いを1〜2か月前倒しするために1万円を支払う」という取引なので、期間の短さに対してコストが大きい点は他のどのサービスでも共通です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">2. 手数料以外の費用も合算する</p>
              <p className="text-sm leading-relaxed text-text-light">
                一般に振込手数料や事務手数料などが別途かかるサービスもあります。FREENANCEの場合、GMOあおぞらネット銀行宛の振込手数料は無料と案内されているため、表面の料率どおりに比較しやすいのが特徴です。費用の内訳は
                <Link href="/articles/fee-breakdown/" className="mx-1 text-primary hover:underline">手数料の内訳解説記事</Link>
                で詳しく整理しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">3. 利用頻度で通算コストを考える</p>
              <p className="text-sm leading-relaxed text-text-light">
                毎月使うのか、資金ショート時だけ使うのかで最適なサービスは変わります。FREENANCEのように継続利用で料率が下がる設計は、単発では強みが出にくく、通算で見ると差がつくタイプです。
              </p>
            </div>
          </div>
        </section>

        {/* ── 他社比較 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            他社との手数料比較
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            フリーランス・個人事業主が使いやすい主要サービスと比較します。手数料はいずれも当サイトの
            <Link href="/ranking/" className="mx-1 text-primary hover:underline">ランキングページ</Link>
            掲載の各社公式確認値（2026年6月に公式サイトで確認）の転記です。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">サービス名</th>
                  <th className="px-4 py-3 text-left font-semibold">手数料</th>
                  <th className="px-4 py-3 text-left font-semibold">入金速度</th>
                  <th className="px-4 py-3 text-left font-semibold">買取額</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-section-bg" : "bg-white"} ${i === 0 ? "font-semibold text-primary" : ""}`}>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.fee}</td>
                    <td className="px-4 py-3">{item.speed}</td>
                    <td className="px-4 py-3">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※QuQuMoの手数料は下限のみ公表（上限非公表）です。実際の適用率は各社とも審査で個別に決まるため、下限値だけで判断せず、必ず見積もりで比較してください。
          </p>
        </section>

        {/* ── 抑えるコツ ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            FREENANCEの手数料を抑えるコツ4つ
          </h2>
          <div className="space-y-6">
            {saveTips.map((tip, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  {tip.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{tip.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            手数料交渉の一般的な進め方は
            <Link href="/articles/fee-negotiation/" className="mx-1 text-primary hover:underline">手数料交渉のコツの記事</Link>
            、概算コストの計算は
            <Link href="/simulator/" className="mx-1 text-primary hover:underline">手数料シミュレーター</Link>
            が便利です。
          </p>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-text-main hover:bg-section-bg">
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">Q</span>
                    {faq.question}
                  </span>
                  <span className="ml-4 transition-transform group-open:rotate-180">&#9660;</span>
                </summary>
                <div className="border-t border-border px-6 py-4">
                  <p className="text-sm leading-relaxed text-text-light">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/freenance/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">FREENANCEの口コミ・評判（総合レビュー）</p>
              <p className="mt-1 text-sm text-text-light">メリット・デメリットの全体像はこちら</p>
            </Link>
            <Link
              href="/reviews/freenance/shinsa/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">FREENANCEの審査は厳しい？</p>
              <p className="mt-1 text-sm text-text-light">通過のコツと落ちたときの対処法</p>
            </Link>
            <Link
              href="/reviews/freenance/documents/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">FREENANCEの必要書類と入金までの流れ</p>
              <p className="mt-1 text-sm text-text-light">申請前に準備するものをチェック</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">手数料・スピードで15社を比較</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-8 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            コストを比べてから決めたい方へ
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料は会社と条件で大きく変わります。無料診断で、あなたの状況に合う会社を絞り込んでから見積もりに進みましょう。
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/diagnosis/" className="btn-cta inline-block">
              30秒無料診断を試す
            </Link>
            <a
              href="https://freenance.net/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block rounded-lg border border-white/60 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              FREENANCE公式サイトを見る
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
