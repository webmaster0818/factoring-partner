import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "FREENANCE(フリーナンス)の審査は厳しい？通過のコツと落ちたときの対処法",
  description:
    "FREENANCE(フリーナンス)即日払いの審査の特徴を解説。フリーランス特化・法人売掛金のみ対象・与信スコア方式という公式情報をもとに、審査通過のコツ、落ちやすいケース、落ちた場合の代替サービスまで紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/freenance/shinsa/",
  },
  openGraph: {
    title:
      "FREENANCE(フリーナンス)の審査は厳しい？通過のコツと落ちたときの対処法",
    description:
      "FREENANCEの審査の特徴・通過のコツ・落ちたときの対処法を公式情報ベースで解説。",
    url: "https://hyogo-shihoushoshi.jp/reviews/freenance/shinsa/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const screeningFeatures = [
  { label: "対象", value: "フリーランス・個人事業主" },
  { label: "買取対象の売掛金", value: "法人からの売掛金のみ（個人クライアントは対象外）" },
  { label: "審査方式", value: "フリーナンス口座の利用実績に基づく独自の与信スコア" },
  { label: "入金スピード", value: "審査通過後、最短即日" },
  { label: "買取可能額", value: "1万円〜（上限は与信次第）" },
  { label: "口座開設時の審査", value: "フリーナンス口座（GMOあおぞらネット銀行）の開設にも審査あり" },
];

const passTips = [
  {
    title: "売掛先が法人の請求書で申し込む",
    detail:
      "FREENANCEの即日払いは法人からの売掛金のみが買取対象です。個人クライアント宛ての請求書は審査以前に対象外となるため、複数の取引先がある場合は法人宛ての請求書を選んで申請しましょう。",
  },
  {
    title: "フリーナンス口座を報酬の受取先として使い込む",
    detail:
      "FREENANCEにはフリーナンス口座の利用実績に基づく独自の与信スコアシステムがあります。普段からクライアントの振込先をフリーナンス口座に設定して入金実績を積むことで与信スコアが育ち、審査面でも手数料面でも有利になる仕組みです。",
  },
  {
    title: "請求書の内容と実際の取引を一致させる",
    detail:
      "一般に、ファクタリングの審査では請求書に記載された取引が実在するかどうかが確認されます。金額・支払期日・振込先などが実際の契約内容と食い違っていると確認に時間がかかったり、審査に不利に働いたりするおそれがあります。発行済みの正確な請求書で申請しましょう。",
  },
  {
    title: "まずは少額の請求書から実績をつくる",
    detail:
      "FREENANCEは1万円からの少額利用に対応しています。利用開始直後は与信枠が低く設定される傾向があるため、最初から高額の請求書を出すのではなく、少額から利用実績を積み重ねて与信枠を広げていくのが現実的です。",
  },
  {
    title: "支払期日が近すぎる・遠すぎる請求書を避ける",
    detail:
      "一般に、支払期日を過ぎた請求書や、期日まで極端に長い請求書は買取対象になりにくいとされます。通常の支払いサイト（月末締め翌月末払いなど）の範囲に収まる請求書で申請するのが無難です。",
  },
];

const failCases = [
  "売掛先が個人（法人でない）の請求書で申請している",
  "請求書の記載内容に不備・不一致がある（金額、期日、振込先など）",
  "利用開始直後に与信枠を大きく超える高額の請求書を申請している",
  "支払期日をすでに過ぎた請求書で申請している",
  "フリーナンス口座の開設審査の段階で条件を満たせていない",
];

const alternatives = [
  {
    name: "ペイトナー",
    href: "/reviews/paytner/",
    detail:
      "同じフリーランス特化型で、手数料一律10%・最短10分入金・1万円から利用可能。料金体系がシンプルで、事業計画書や決算書が不要な点も特徴です。",
  },
  {
    name: "ラボル",
    href: "/reviews/labol/",
    detail:
      "手数料一律10%・最短30分入金・1万円から。土日祝日を含む24時間365日の即日振込に対応しており、FREENANCEで急ぎの資金化がかなわなかった場合の受け皿になります。",
  },
  {
    name: "OLTA",
    href: "/reviews/olta/",
    detail:
      "手数料2%〜9%と上限が明示されたクラウドファクタリング。AI審査を導入しており、買取額に制限がないため、フリーランスの枠を超えた金額を扱いたい場合の選択肢です。",
  },
];

const faqs = [
  {
    question: "FREENANCEの審査にはどのくらい時間がかかりますか？",
    answer:
      "公式サイトでは審査通過後、最短即日で入金されると案内されています。審査自体の所要時間の目安は公式には公開されていないため、急ぎの場合は時間に余裕を持って申請しましょう。なお、即日払いの前提となるフリーナンス口座の開設にも審査があります。",
  },
  {
    question: "FREENANCEの審査では何が重視されますか？",
    answer:
      "審査基準の詳細は公式非公開です。ただし一般に、ファクタリングの審査では申込者自身の信用情報よりも売掛先（請求書の宛先企業）の信用力が重視されるといわれています。FREENANCEの場合はこれに加えて、フリーナンス口座の利用実績に基づく独自の与信スコアが手数料や利用枠に影響する仕組みが公式に案内されています。",
  },
  {
    question: "個人のお客様宛ての請求書でも審査に通りますか？",
    answer:
      "いいえ。FREENANCEの即日払いは法人からの売掛金のみが対象で、個人クライアント宛ての請求書は買取対象外です。個人間取引が中心の方は、他のサービスを含めて資金調達手段を検討する必要があります。",
  },
  {
    question: "FREENANCEの審査に落ちたら再申請できますか？",
    answer:
      "再申請の可否や条件は公式に明示されていません。一般論としては、別の（より信用力の高い法人宛ての）請求書で申請し直す、フリーナンス口座の利用実績を積んでから改めて申請する、といった対処が考えられます。急ぎの場合は当サイトでレビューしているペイトナーやラボルなど他社の利用も選択肢です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "FREENANCE(フリーナンス)の審査は厳しい？通過のコツと落ちたときの対処法",
  description:
    "FREENANCEの審査の特徴・通過のコツ・落ちたときの対処法を公式情報ベースで解説。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/freenance/shinsa/",
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
    { "@type": "ListItem", position: 4, name: "審査" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function FreenanceShinsaPage() {
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
          { label: "審査" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            審査ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            FREENANCE(フリーナンス)の審査は厳しい？
            <br className="hidden md:block" />
            通過のコツと落ちたときの対処法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            フリーランス特化のFREENANCE「即日払い」の審査について、公式に案内されている条件と、通過するための実践的なポイントを整理します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            FREENANCEの即日払いは、フリーランス・個人事業主が対象で、買い取ってもらえるのは法人からの売掛金のみです。審査基準の詳細は公式非公開ですが、フリーナンス口座の利用実績に基づく独自の与信スコアが公式に案内されており、口座を使い込むほど有利になる設計です。審査通過のコツは「法人宛ての正確な請求書で申請すること」と「少額から実績を積むこと」。個人クライアント宛ての請求書しかない場合は、そもそも対象外となる点に注意してください。
          </p>
          <p className="mt-3 text-sm">
            <Link href="/reviews/freenance/" className="text-primary hover:underline">FREENANCEの総合レビューを見る</Link>
            <span className="mx-2 text-text-light">／</span>
            <Link href="/diagnosis/" className="text-primary hover:underline">30秒診断で合う会社を探す</Link>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. FREENANCEの審査の特徴（公式情報）</a></li>
            <li><a href="#criteria" className="hover:underline">2. 審査で重視されるのは売掛先の信用力（一般論）</a></li>
            <li><a href="#tips" className="hover:underline">3. 審査通過のコツ5つ</a></li>
            <li><a href="#fail" className="hover:underline">4. 審査に落ちやすいケース</a></li>
            <li><a href="#alternatives" className="hover:underline">5. 落ちた場合の代替サービス</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 審査の特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            FREENANCEの審査の特徴（公式情報）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            FREENANCE（フリーナンス）の「即日払い」は、GMOクリエイターズネットワーク株式会社が運営するフリーランス・個人事業主向けのファクタリングです。審査に関して公式に案内されている条件を整理すると、次のとおりです。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {screeningFeatures.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-section-bg" : "bg-white"}>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-40">
                      {item.label}
                    </th>
                    <td className="px-4 py-3 text-text-light">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            他社と大きく異なるのは、審査が単発の請求書だけでなく「フリーナンス口座の利用実績」と結びついている点です。口座を報酬の受取先として使い続けることで与信スコアが積み上がり、利用枠や手数料の条件が改善していく仕組みが公式に案内されています。なお、審査通過率などの統計値は公式非公開です。
          </p>
        </section>

        {/* ── 審査で重視されるポイント ─── */}
        <section id="criteria" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査で重視されるのは売掛先の信用力（一般論）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            FREENANCEに限らず、一般にファクタリングの審査で最も重視されるのは、申込者本人の信用情報ではなく「売掛先（請求書の宛先企業）がきちんと支払うかどうか」だといわれています。ファクタリング会社にとっての回収原資は売掛先からの入金だからです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            このため、一般論としては次のような要素が確認されると考えられます。いずれもFREENANCE固有の公表基準ではなく、業界の一般的な傾向である点にご注意ください。
          </p>
          <ul className="mb-4 space-y-2 rounded-lg border border-border bg-white p-6 text-sm text-text-light">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>売掛先の事業規模・支払い実績などの信用力</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>請求書に記載された取引が実在するか（架空請求でないか）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>支払期日までの期間が通常の商慣習の範囲内か</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary font-bold">-</span>
              <span>申込者と売掛先の取引の継続性</span>
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-text-light">
            審査基準の一般的な考え方は
            <Link href="/articles/screening-criteria/" className="mx-1 text-primary hover:underline">ファクタリングの審査基準の解説記事</Link>
            で詳しく整理しています。
          </p>
        </section>

        {/* ── 通過のコツ ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            FREENANCEの審査通過のコツ5つ
          </h2>
          <div className="space-y-6">
            {passTips.map((tip, i) => (
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
        </section>

        {/* ── 落ちやすいケース ─── */}
        <section id="fail" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査に落ちやすいケース
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            公式に「落ちる条件」が公開されているわけではありませんが、公式に案内されている利用条件と一般的な審査の考え方から、次のようなケースは通過が難しいと考えられます。
          </p>
          <ul className="space-y-3 rounded-lg border border-accent/30 bg-orange-50 p-6 text-sm text-text-light">
            {failCases.map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">&#9651;</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            審査に落ちる一般的な原因と立て直し方は
            <Link href="/articles/screening-failure/" className="mx-1 text-primary hover:underline">審査に落ちたときの対処法の記事</Link>
            でも解説しています。
          </p>
        </section>

        {/* ── 代替サービス ─── */}
        <section id="alternatives" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査に落ちた場合の代替サービス
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            FREENANCEで買取に至らなかった場合でも、審査基準はサービスごとに異なるため、他社なら利用できる可能性があります。当サイトでレビュー済みのフリーランス・個人事業主が使いやすいサービスを挙げます。
          </p>
          <div className="space-y-4">
            {alternatives.map((alt, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-5">
                <p className="mb-2 font-semibold text-primary">
                  <Link href={alt.href} className="hover:underline">{alt.name}の口コミ・評判を見る</Link>
                </p>
                <p className="text-sm leading-relaxed text-text-light">{alt.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※手数料・入金スピードはいずれも当サイトが各社公式サイトで確認した値です（詳細は各レビューページの確認日表記をご覧ください）。
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
              <p className="mt-1 text-sm text-text-light">手数料・あんしん補償など全体像はこちら</p>
            </Link>
            <Link
              href="/reviews/freenance/documents/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">FREENANCEの必要書類と入金までの流れ</p>
              <p className="mt-1 text-sm text-text-light">申請前に準備するものをチェック</p>
            </Link>
            <Link
              href="/reviews/freenance/fee/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">FREENANCEの手数料と他社比較</p>
              <p className="mt-1 text-sm text-text-light">3%〜10%の実質コストを検証</p>
            </Link>
            <Link
              href="/articles/weekend-factoring/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">土日・祝日に使えるファクタリングの探し方</p>
              <p className="mt-1 text-sm text-text-light">休日対応の可否と申込みの注意点</p>
            </Link>
            <Link
              href="/articles/instant-factoring/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">即日入金を狙う申込みのコツ</p>
              <p className="mt-1 text-sm text-text-light">申込み時間帯と書類準備で入金スピードは変わる</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">条件別に15社を徹底比較</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-8 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            自分に合うファクタリング会社を探す
          </h2>
          <p className="mb-6 text-sm text-white/80">
            審査に不安がある方は、条件の異なる複数社を比較するのが近道です。無料診断で状況に合う会社を絞り込めます。
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
