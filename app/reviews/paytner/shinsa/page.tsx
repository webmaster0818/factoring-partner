import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ペイトナーの審査は厳しい？通過のコツと落ちたときの対処法",
  description:
    "ペイトナーのAI審査を解説。最短20分・電話面談不要の審査の仕組み、通過のコツ4つ、審査に落ちやすいケース、落ちた場合のフリーランス向け代替候補（ラボル・FREENANCE等）までまとめました。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/reviews/paytner/shinsa/",
  },
  openGraph: {
    title:
      "ペイトナーの審査は厳しい？通過のコツと落ちたときの対処法",
    description:
      "ペイトナーのAI審査の特徴・通過のコツ・落ちたときの対処法を解説。審査は最短20分・電話面談不要です。",
    url: "https://hyogo-shihoushoshi.jp/reviews/paytner/shinsa/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const shinsaFeatures = [
  { label: "審査方式", value: "AIによる自動審査（人的な電話面談なし）" },
  { label: "審査スピード", value: "最短20分で結果通知" },
  { label: "対象", value: "フリーランス・個人事業主（法人も利用可）" },
  { label: "審査通過率", value: "公式非公開" },
  { label: "審査基準", value: "非公開（落ちた場合の理由も開示されない）" },
  { label: "利用上限", value: "初回：1万〜25万円 / 2回目以降：上限300万円" },
];

const passTips = [
  {
    title: "請求書の記載を明確にする",
    detail:
      "ペイトナーのAI審査では請求書の内容が重要な審査ポイントです。取引内容・金額・支払期日・売掛先の情報が明確に記載されていることが求められ、あいまいな内容の請求書は審査落ちの原因になり得ます。提出前に記載内容を見直しましょう。",
  },
  {
    title: "信用力のある売掛先の請求書を使う",
    detail:
      "一般に、ファクタリングの審査では利用者自身よりも売掛先の信用力が重視されるといわれます。ペイトナーでも売掛先の信用力が審査に影響するとされているため、複数の請求書がある場合は、継続取引のある信頼性の高いクライアント宛のものを選ぶのが有利です。",
  },
  {
    title: "初回は上限25万円の範囲で申し込む",
    detail:
      "ペイトナーの初回利用は1万〜25万円の範囲です。初回から大きな金額を狙うのではなく、上限内の請求書で利用実績を作り、段階的に上限（最大300万円）を引き上げていくのがペイトナーの設計に合った使い方です。",
  },
  {
    title: "支払期日前の有効な請求書で申し込む",
    detail:
      "一般に、ファクタリングの対象になるのは支払期日がまだ到来していない売掛債権です。期日を過ぎた請求書や、既に他社に譲渡した債権での申込は避け、発行済み・期日前の請求書を使いましょう。",
  },
];

const failCases = [
  {
    title: "請求書の内容があいまい・不備がある",
    detail:
      "AI審査は提出された請求書のデータをもとに判断するため、金額や期日の記載が不明瞭な請求書は審査落ちの原因になる可能性があります。ペイトナーの総合レビューでも「請求書の品質」が注意点として挙げられています。",
  },
  {
    title: "売掛先の信用力を確認できない",
    detail:
      "一般に、実在確認や支払い能力の確認が難しい売掛先（取引実績のない個人など）宛の請求書は、審査が慎重になりやすいとされます。法人や継続取引のあるクライアント宛の請求書の方が通りやすい傾向があります。",
  },
  {
    title: "過去の利用状況に懸念がある",
    detail:
      "ペイトナーの審査には過去の利用状況も影響するとされています。口コミでは「前回は通ったのに今回は落ちた」という報告もあり、AI審査の基準は一定ではありません。落ちても理由は開示されない点に注意が必要です。",
  },
  {
    title: "審査基準の変動にあたった",
    detail:
      "ペイトナーのAI審査は基準が公開されておらず、時期や状況によって判断が変わるケースが報告されています。利用者側に落ち度がなくても審査に落ちる可能性はあるため、確実な資金調達が必要な場面では代替手段も準備しておきましょう。",
  },
];

const faqs = [
  {
    question: "ペイトナーの審査は厳しいですか？",
    answer:
      "ペイトナーは審査通過率を公式に公開していないため、通過率での比較はできません。AI審査のため最短20分と速い一方、基準は非公開で、審査に落ちた場合の理由も開示されません。「前回は通ったのに今回は落ちた」という口コミもあり、基準が一定ではない点は理解しておく必要があります。",
  },
  {
    question: "ペイトナーの審査にはどれくらい時間がかかりますか？",
    answer:
      "AIによる自動審査で、最短20分で結果が通知されます。人的審査を介さないため、深夜や早朝の申込でも審査が進みやすいと評価されています。審査通過後の入金は最短10分です。",
  },
  {
    question: "ペイトナーの審査に電話面談はありますか？",
    answer:
      "ありません。ペイトナーは電話面談不要の完全オンライン完結型で、会員登録から請求書のアップロード、AI審査、入金まですべてオンラインで進みます。電話が苦手なフリーランスから高く評価されているポイントです。",
  },
  {
    question: "ペイトナーの審査に落ちたらどうすればいいですか？",
    answer:
      "審査落ちの理由は開示されないため、まずは請求書の記載内容や売掛先を変えて再申込を検討します。それでも難しい場合は、同じフリーランス向けの一律10%・最短60分入金のラボルや、GMOグループ運営のFREENANCE（3%〜10%）など、審査基準の異なる他社を試すのが現実的です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "ペイトナーの審査は厳しい？通過のコツと落ちたときの対処法",
  description:
    "ペイトナーのAI審査の特徴・通過のコツ・落ちやすいケース・落ちた場合の代替候補を解説します。",
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
    "@id": "https://hyogo-shihoushoshi.jp/reviews/paytner/shinsa/",
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

/* ── Component ────────────────────────────────────── */

export default function PaytnerShinsaPage() {
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

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "業者レビュー", href: "/reviews/" },
          { label: "ペイトナー", href: "/reviews/paytner/" },
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
            ペイトナーの審査は厳しい？
            <br className="hidden md:block" />
            通過のコツと落ちたときの対処法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            AI審査・最短20分・電話面談不要のペイトナー。審査の仕組みと通過のコツ、落ちやすいケース、落ちた場合のフリーランス向け代替候補を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論ファースト ─── */}
        <div className="mb-8 rounded-xl border-2 border-primary/30 bg-primary-light/40 p-5 md:p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            ペイトナーの審査はAIによる自動審査で、最短20分・電話面談不要と手軽な一方、審査基準は非公開で、落ちた場合の理由も開示されません。審査通過率も公式非公開です。通過の可能性を高めるには「請求書の記載を明確にする」「信用力のある売掛先の請求書を使う」「初回は上限25万円の範囲で申し込む」のが基本です。落ちた場合は、ラボルやFREENANCEなど審査基準の異なるフリーランス向け他社を検討しましょう。
          </p>
          <p className="mt-3 text-sm text-primary">
            <Link href="/reviews/paytner/" className="hover:underline">ペイトナーの総合レビューを見る</Link>
            {" ／ "}
            <a href="/ranking/" className="hover:underline">他社と条件で比較</a>
          </p>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. ペイトナーのAI審査の特徴</a></li>
            <li><a href="#criteria" className="hover:underline">2. 審査で重視されるのは売掛先と請求書</a></li>
            <li><a href="#tips" className="hover:underline">3. 審査通過のコツ4つ</a></li>
            <li><a href="#fail-cases" className="hover:underline">4. 審査に落ちやすいケース</a></li>
            <li><a href="#alternatives" className="hover:underline">5. 審査に落ちた場合の代替候補</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、審査条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 審査の特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ペイトナーのAI審査の特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ペイトナーはフリーランス・個人事業主に特化したファクタリングサービスで、審査はAIによる自動審査です。人的審査を介さないため、最短20分で結果が通知され、深夜や早朝の申込でも審査が進みやすいのが特徴です。電話面談もありません。
          </p>
          <div className="mb-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {shinsaFeatures.map((item, i) => (
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
          <p className="leading-relaxed text-text-light">
            重要な注意点として、審査通過率・審査基準はいずれも<strong className="text-text-main">公式非公開</strong>です。ネット上で見かける通過率の数字は公式発表ではありません。また、審査に落ちた場合も具体的な理由は開示されないため、本ページでは公式情報と業界の一般論を分けて対策を整理します。
          </p>
        </section>

        {/* ── 審査で重視されるポイント ─── */}
        <section id="criteria" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査で重視されるのは売掛先と請求書
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングは売掛債権の買取であり、一般に審査では利用者自身の信用情報よりも<strong className="text-text-main">売掛先の信用力と売掛金の実在性</strong>が重視されるといわれます。ペイトナーも売掛先の信用力・請求書の内容・過去の利用状況が審査に影響するとしています。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            特にペイトナーはAI審査のため、判断材料は提出された請求書のデータが中心です。人的審査であれば補足説明でカバーできるような曖昧さも、AI審査ではそのまま評価に響く可能性があります。フリーランスにとっては「請求書の品質」がそのまま審査対策になると考えてよいでしょう。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">審査に影響するとされる要素</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>売掛先の信用力（公式が審査に影響すると案内）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>請求書の内容（取引内容・金額・支払期日・売掛先情報の明確さ）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>過去の利用状況</span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-text-light">
              ※具体的な審査基準は非公開です。ファクタリング審査の一般的な仕組みは
              <Link href="/articles/screening-criteria/" className="text-primary underline hover:text-accent">審査基準の解説記事</Link>
              をご覧ください。
            </p>
          </div>
        </section>

        {/* ── 通過のコツ ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ペイトナーの審査通過のコツ4つ
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
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            提出書類の詳細と申込から入金までの手順は
            <Link href="/reviews/paytner/documents/" className="text-primary underline hover:text-accent">ペイトナーの必要書類と入金までの流れ</Link>
            で解説しています。
          </p>
        </section>

        {/* ── 落ちやすいケース ─── */}
        <section id="fail-cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            審査に落ちやすいケース
          </h2>
          <div className="space-y-4">
            {failCases.map((c, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-5">
                <p className="mb-2 font-semibold text-accent">{c.title}</p>
                <p className="text-sm leading-relaxed text-text-light">{c.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            ファクタリング審査に落ちる原因と対策の全体像は
            <Link href="/articles/screening-failure/" className="text-primary underline hover:text-accent">審査に落ちる理由と対策の解説記事</Link>
            でまとめています。
          </p>
        </section>

        {/* ── 落ちた場合の代替 ─── */}
        <section id="alternatives" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ペイトナーの審査に落ちた場合の代替候補
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            審査基準は会社ごとに異なるため、ペイトナーで落ちても他社では通る可能性があります。同じくフリーランス・個人事業主が使いやすい以下のサービスが代替候補です（いずれも当サイトでレビュー済み・手数料は公式サイトにて2026年6月確認）。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">
                ラボル｜24時間365日・最短60分入金
              </p>
              <p className="text-sm leading-relaxed text-text-light">
                ペイトナーと同じフリーランス特化型で、手数料は一律10%（税込）、1万円から利用可能。土日祝を含む24時間365日対応で、必要書類も請求書と本人確認書類のみ（通帳コピー不要）です。詳細は
                <Link href="/reviews/labol/" className="text-primary underline hover:text-accent">ラボルの口コミ・評判</Link>
                をご覧ください。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">
                FREENANCE（フリーナンス）｜GMOグループ運営
              </p>
              <p className="text-sm leading-relaxed text-text-light">
                GMOクリエイターズネットワークが運営するフリーランス向け総合サービスで、手数料は3%〜10%（フリーナンス口座を受取先に設定しない場合は一律10%）、1万円から利用できます。あんしん補償などの付帯サービスも特徴です。詳細は
                <Link href="/reviews/freenance/" className="text-primary underline hover:text-accent">FREENANCEの口コミ・評判</Link>
                をご覧ください。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">
                QuQuMo｜手数料1%〜のオンライン完結型
              </p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料1%〜（上限非公表）・完全オンライン完結で、必要書類は請求書と通帳の2点のみ。法人・個人事業主のどちらも対象で、入金は最短2時間です。詳細は
                <Link href="/reviews/ququmo/" className="text-primary underline hover:text-accent">QuQuMoの口コミ・評判</Link>
                をご覧ください。
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            条件を選ぶだけで候補を絞り込みたい方は
            <Link href="/diagnosis/" className="text-primary underline hover:text-accent">無料診断ツール</Link>
            もご利用ください。
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

        {/* ── 関連記事 ─── */}
        <div className="bg-[#f7f9fc] border border-[#d4dbe6] rounded-lg p-5 my-8">
          <h3 className="text-base font-bold text-[#1e3a5f] mb-3">関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Link href="/articles/screening-criteria/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} ファクタリングの審査基準を徹底解説</Link>
            <Link href="/articles/screening-failure/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} ファクタリング審査に落ちる理由と対策</Link>
            <Link href="/reviews/paytner/documents/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} ペイトナーの必要書類と入金までの流れ</Link>
            <Link href="/reviews/paytner/fee/" className="text-sm text-[#1e3a5f] hover:text-[#e87c3e] transition-colors">{"→"} ペイトナーの手数料はいくら？</Link>
          </div>
        </div>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            ペイトナーの無料登録はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            AI審査は最短20分・入金は最短10分。電話面談なしで請求書をアップロードするだけで審査を受けられます。
          </p>
          <a
            href="https://paytner.co.jp/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料登録
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/paytner/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ペイトナーの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">最短10分のフリーランス向けファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/paytner/fee/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ペイトナーの手数料</p>
              <p className="mt-1 text-sm text-text-light">一律10%の実質コストと他社比較</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">49社以上を徹底比較</p>
            </Link>
            <Link
              href="/diagnosis/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">無料診断ツール</p>
              <p className="mt-1 text-sm text-text-light">7つの質問であなたに合う会社を提案</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
