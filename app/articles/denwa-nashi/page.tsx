import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリングを電話なし・ヒアリングなしで完結する方法｜対応サービスと注意点【2026年】",
  description:
    "ファクタリングを電話なし・ヒアリングなしで完結させたい方向けのガイド。電話連絡が発生する理由、AI審査・チャットサポート・電子契約で完結しやすいサービスの特徴、公式に「電話面談不要」と確認できる会社、電話を減らす申込のコツと注意点を解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/denwa-nashi/",
  },
  openGraph: {
    title: "ファクタリングを電話なし・ヒアリングなしで完結する方法｜対応サービスと注意点【2026年】",
    description:
      "電話なし・ヒアリングなしで完結しやすいファクタリングの条件と対応サービス。電話連絡が発生する理由と減らすコツ、注意点を解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/denwa-nashi/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

// 各社の値は当サイトの各レビューページに掲載している公式確認値の転記です（手数料は公式サイトにて2026年6月確認）
const companies = [
  {
    name: "ペイトナーファクタリング",
    phone: "電話面談不要（公式確認値）",
    phoneNote: "完全オンライン・電話面談不要。AI審査で手続きが進む",
    fee: "一律10%",
    speed: "最短10分",
    target: "個人事業主・フリーランス",
    source: "/reviews/paytner/",
    sourceLabel: "ペイトナーのレビュー",
  },
  {
    name: "ラボル（labol）",
    phone: "電話面談不要（レビュー確認値）",
    phoneNote: "完全オンライン完結で来店・電話面談は不要。24時間365日対応",
    fee: "一律10%（税込）",
    speed: "最短60分",
    target: "個人事業主・フリーランス",
    source: "/reviews/labol/",
    sourceLabel: "ラボルのレビュー",
  },
  {
    name: "QuQuMo（ククモ）",
    phone: "電話面談不要の明示なし",
    phoneNote: "完全オンライン完結。クラウドサインによる電子契約",
    fee: "1%〜（上限非公表）",
    speed: "最短2時間",
    target: "法人・個人事業主",
    source: "/reviews/ququmo/",
    sourceLabel: "QuQuMoのレビュー",
  },
  {
    name: "OLTA（オルタ）",
    phone: "電話面談不要の明示なし",
    phoneNote: "完全オンライン完結・AI審査。来店や対面での手続きは不要",
    fee: "2%〜9%",
    speed: "最短即日",
    target: "法人・個人事業主",
    source: "/reviews/olta/",
    sourceLabel: "OLTAのレビュー",
  },
  {
    name: "みんなのファクタリング",
    phone: "電話面談不要の明示なし",
    phoneNote: "完全オンライン完結。スマホのみでも手続き可能",
    fee: "7%〜15%",
    speed: "最短3時間",
    target: "法人・個人事業主",
    source: "/reviews/minnano/",
    sourceLabel: "みんなのファクタリングのレビュー",
  },
  {
    name: "FREENANCE（フリーナンス）",
    phone: "電話面談不要の明示なし",
    phoneNote: "完全オンライン完結。GMOグループ運営の即日払い",
    fee: "3%〜10%（口座未設定時は一律10%）",
    speed: "最短即日",
    target: "フリーランス・個人事業主",
    source: "/reviews/freenance/",
    sourceLabel: "FREENANCEのレビュー",
  },
];

const whyReasons = [
  {
    title: "本人確認（なりすまし防止）",
    description:
      "ファクタリングは売掛債権の売買契約であり、申込者が本人かどうかの確認は契約の大前提です。多くのオンライン型サービスはeKYC（オンライン本人確認）で代替していますが、提出書類だけでは確認しきれない場合に、電話で本人確認を行う会社があります。",
  },
  {
    title: "申込内容・請求書の確認",
    description:
      "請求書の金額と入力内容が食い違っている、入金予定日が不明確、書類の一部が不鮮明——といった不備があると、担当者が電話で事実確認を行うのが一般的です。逆に言えば、申込内容と書類が最初から揃っていれば、電話で確認すべきことが減ります。",
  },
  {
    title: "与信判断（売掛先・取引実態の確認）",
    description:
      "ファクタリング会社は「その売掛金が実在し、期日に支払われるか」を審査します。取引実態のヒアリングを電話で行う会社もあれば、AIが請求書・入出金データから機械的に判断する会社もあります。後者を選ぶほど、電話ヒアリングの余地は小さくなります。",
  },
];

const features = [
  {
    title: "AI審査（人手のヒアリングを介さない）",
    description:
      "AIが請求書や入出金データをもとに買取可否を自動判定する方式なら、担当者による電話ヒアリングの工程自体がありません。当サイトのレビューでは、ペイトナー（AI審査・最短10分入金）、OLTA（AI審査のクラウドファクタリング）がこの方式です。",
  },
  {
    title: "チャット・メール中心のサポート",
    description:
      "疑問点の確認手段がチャットやメールに設計されているサービスなら、「質問したら電話がかかってくる」という状況になりにくく、記録も文面で残ります。やり取りの履歴が残ることは、契約条件の確認・トラブル防止の面でも利点です。",
  },
  {
    title: "電子契約（クラウドサイン等）",
    description:
      "契約手続きが電子契約なら、対面での契約説明や電話での読み合わせが不要になります。QuQuMoは弁護士ドットコムの電子契約システム「クラウドサイン」を採用しており、契約まで含めてオンラインで完結します。電子署名法により、電子契約は紙の契約書と同等の法的効力を持ちます。",
  },
];

const tips = [
  {
    title: "書類の不備をなくして提出する",
    description:
      "確認電話の最も多い原因は書類の不備・不鮮明です。請求書は金額・支払期日・売掛先名が読み取れる状態で、本人確認書類は四隅まで写った鮮明な画像でアップロードしましょう。必要書類が最少のサービスを選ぶのも有効です（例：ペイトナーは請求書と本人確認書類のみで申込可能）。詳しくは「ペイトナーの必要書類・入金までの流れ」も参考にしてください。",
  },
  {
    title: "申込フォームの入力と請求書の記載を一致させる",
    description:
      "申込金額・売掛先名・入金予定日がフォームと請求書で食い違うと、事実確認の連絡が入る典型パターンです。提出前に突き合わせて、齟齬をゼロにしておきましょう。",
  },
  {
    title: "連絡手段の希望を伝えられる場合は明記する",
    description:
      "備考欄や登録情報で連絡手段を選べるサービスでは、「連絡はメール・チャット希望」と伝えておくと、電話以外の手段で連絡してもらえる可能性が高まります。ただし、確認事項の内容によっては電話になる場合もあります。",
  },
  {
    title: "審査で電話を使わない設計の会社を選ぶ",
    description:
      "そもそも審査工程に電話ヒアリングがない（AI審査・完全オンライン設計の）サービスを選ぶのが、最も確実に電話を減らす方法です。どの会社が合うかは無料診断（30秒）でも絞り込めます。",
  },
];

const faqs = [
  {
    question: "電話が一切かかってこないことは保証されますか？",
    answer:
      "いいえ、どのサービスでも保証はされません。公式に「電話面談不要」と案内している会社（例：ペイトナー）でも、申込内容や提出書類に確認が必要な事項が生じた場合には、電話連絡が入る可能性があります。電話を最小限にしたい場合は、書類不備をなくすこと・AI審査型のサービスを選ぶことが現実的な対策です。",
  },
  {
    question: "「ヒアリングなし」と「本人確認の電話なし」は同じ意味ですか？",
    answer:
      "別のものです。ヒアリング（電話面談）は、事業内容や売掛金の取引実態を担当者が聞き取る審査工程を指します。一方、本人確認や申込内容の確認電話は、審査とは別に事務手続きとして発生し得る連絡です。「電話面談不要」のサービスでも、事務的な確認連絡が入る場合はあります。",
  },
  {
    question: "電話なしのファクタリングでも、売掛先（取引先）に電話や通知はいきますか？",
    answer:
      "2社間ファクタリングであれば、原則として売掛先への通知・連絡は行われません。利用者とファクタリング会社の2者だけで契約が完結するためです。3社間ファクタリングは売掛先の承諾を得る仕組みのため、売掛先への連絡が必ず発生します。取引先に知られたくない場合は2社間を選びましょう。",
  },
  {
    question: "電話が苦手な場合、どのサービスを選べばよいですか？",
    answer:
      "当サイトのレビューで確認した範囲では、ペイトナー（完全オンライン・電話面談不要、AI審査で最短10分入金）とラボル（完全オンライン完結で来店・電話面談不要、24時間365日対応）が、電話を前提としない設計のサービスです。いずれも個人事業主・フリーランス向けのため、法人はQuQuMoやOLTAなど完全オンライン完結型を検討してください。",
  },
  {
    question: "申込後に電話がかかってきた場合、出ないとどうなりますか？",
    answer:
      "申込内容の確認や本人確認のための連絡である場合、応答しないと審査・手続きが止まってしまう可能性があります。電話に出られない場合は、折り返すか、チャット・メールで「確認事項があれば文面でお願いしたい」と連絡するのが現実的です。確認事項が解消されない限り入金まで進まない点は理解しておきましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ファクタリングを電話なし・ヒアリングなしで完結する方法｜対応サービスと注意点【2026年】",
  description:
    "電話なし・ヒアリングなしで完結しやすいファクタリングの条件と対応サービス。電話連絡が発生する理由と減らすコツ、注意点を解説。",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/denwa-nashi/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://hyogo-shihoushoshi.jp/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://hyogo-shihoushoshi.jp/articles/" },
    { "@type": "ListItem", position: 3, name: "電話なし・ヒアリングなしファクタリング", item: "https://hyogo-shihoushoshi.jp/articles/denwa-nashi/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function DenwaNashiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "電話なし・ヒアリングなしファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">条件から選ぶ</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリングを電話なし・ヒアリングなしで
            <br className="hidden md:block" />
            完結する方法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            「営業電話が嫌」「電話ヒアリングに時間を取られたくない」という方向けに、電話連絡が発生する理由と、電話なしで完結しやすいサービスの選び方・申込のコツを解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── PR開示 ─── */}
        <p className="mb-8 rounded-lg border border-border bg-section-bg p-4 text-xs leading-relaxed text-text-light">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、手数料・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 結論ボックス ─── */}
        <section id="conclusion" className="mb-12">
          <div className="rounded-lg border-2 border-secondary bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">【結論】電話なし・ヒアリングなしで完結しやすいのはこの条件</p>
            <p className="mb-3 text-sm leading-relaxed text-text-light">
              当サイトのレビューで確認した範囲では、<Link href="/reviews/paytner/" className="font-medium text-primary underline">ペイトナー</Link>（完全オンライン・電話面談不要／AI審査・最短10分入金）と<Link href="/reviews/labol/" className="font-medium text-primary underline">ラボル</Link>（完全オンライン完結で来店・電話面談不要／24時間365日対応）が、電話を前提としない設計のサービスです。共通する条件は「AI審査」「電子契約」「チャット・メール中心のサポート」の3つです。
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              ただし、<strong className="text-text-main">どのサービスでも、申込内容や書類の確認等で電話連絡が入る場合があります</strong>。「電話ゼロ」を保証するサービスは存在しないため、書類不備をなくして確認事項をつくらないことが最も有効な対策です。
            </p>
          </div>
        </section>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#why" className="hover:underline">1. なぜファクタリングで電話・ヒアリングが発生するのか</a></li>
            <li><a href="#features" className="hover:underline">2. 電話なしで完結しやすいサービスの3つの特徴</a></li>
            <li><a href="#comparison" className="hover:underline">3. 対応サービスの比較表（公式確認値）</a></li>
            <li><a href="#tips" className="hover:underline">4. 電話連絡を減らすための申込のコツ</a></li>
            <li><a href="#torihikisaki" className="hover:underline">5. 「自分への電話」と「売掛先への連絡」は別の話</a></li>
            <li><a href="#caution" className="hover:underline">6. 電話なしを希望する際の注意点</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── なぜ電話が発生するのか ─── */}
        <section id="why" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">なぜファクタリングで電話・ヒアリングが発生するのか</h2>
          <p className="mb-8 leading-relaxed text-text-light">
            「オンライン完結」をうたうサービスでも電話がかかってくることがあるのは、ファクタリング会社側に確認しなければならない事項があるためです。電話が発生する理由は、大きく次の3つに整理できます。理由が分かれば、電話を減らす対策も見えてきます。
          </p>
          <div className="space-y-4">
            {whyReasons.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
                  <div>
                    <h3 className="font-bold text-text-main">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            つまり、電話・ヒアリングは「営業のため」だけでなく、契約と審査の安全性を担保するために行われる側面があります。この確認工程をAI・eKYC・電子契約に置き換えているサービスほど、電話なしで完結しやすくなります。
          </p>
        </section>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">電話なしで完結しやすいサービスの3つの特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">
            電話・ヒアリングを前提としないサービスには、共通する設計上の特徴があります。サービス選びの際は、この3点が揃っているかを確認しましょう。
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            オンライン完結型サービスの全体像（必要書類・電子契約の法的効力・AI審査の仕組み）は、<Link href="/articles/online-factoring/" className="font-medium text-primary underline">オンライン完結ファクタリングの解説記事</Link>で詳しく整理しています。
          </p>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">対応サービスの比較表（公式確認値）</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            当サイトの各レビューページに掲載している公式確認値（手数料は公式サイトにて2026年6月確認）を転記した比較表です。「電話面談」の列は、公式・レビューで「不要」と確認できた会社と、明示がない会社（完全オンライン完結ではあるもの）を区別して記載しています。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold">サービス名</th>
                  <th className="px-3 py-3 font-semibold">電話面談</th>
                  <th className="px-3 py-3 font-semibold">手数料</th>
                  <th className="px-3 py-3 font-semibold">入金速度</th>
                  <th className="px-3 py-3 font-semibold">主な対象</th>
                  <th className="px-3 py-3 font-semibold">出典</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, index) => (
                  <tr key={company.name} className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}>
                    <td className="px-3 py-3 font-semibold text-text-main whitespace-nowrap">{company.name}</td>
                    <td className="px-3 py-3">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${company.phone.startsWith("電話面談不要（") ? "bg-secondary text-white" : "bg-section-bg text-text-light"}`}>
                        {company.phone.startsWith("電話面談不要（") ? "不要" : "明示なし"}
                      </span>
                      <p className="mt-1 text-xs text-text-light">{company.phoneNote}</p>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">{company.fee}</td>
                    <td className="px-3 py-3 font-bold text-primary whitespace-nowrap">{company.speed}</td>
                    <td className="px-3 py-3">{company.target}</td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <Link href={company.source} className="text-primary underline">{company.sourceLabel}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-text-light">
            ※「明示なし」は、公式サイト・当サイトレビューで「電話面談不要」の表記を確認できていないことを意味し、電話面談が必須という意味ではありません。※手数料は公式サイトにて2026年6月確認の値です。最新の条件は各公式サイトでご確認ください。※いずれのサービスも、申込内容の確認等で電話連絡が入る場合があります。
          </p>
        </section>

        {/* ── 申込のコツ ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">電話連絡を減らすための申込のコツ</h2>
          <p className="mb-8 leading-relaxed text-text-light">
            電話連絡の多くは「確認しないと先に進めない事項」があるときに発生します。裏を返せば、確認事項をつくらない申込が、電話を減らす最短ルートです。
          </p>
          <div className="space-y-4">
            {tips.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">{index + 1}</span>
                  <div>
                    <h3 className="font-bold text-text-main">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-primary/20 bg-primary-light p-5 text-sm leading-relaxed text-text-light">
            書類まわりの具体的な準備は<Link href="/reviews/paytner/documents/" className="font-medium text-primary underline">ペイトナーの必要書類・入金までの流れ</Link>が参考になります。自分に合うサービスが分からない場合は<Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>で絞り込めます。
          </div>
        </section>

        {/* ── 売掛先への連絡との違い ─── */}
        <section id="torihikisaki" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">「自分への電話」と「売掛先への連絡」は別の話</h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「電話なし」を検索する方の中には、自分への電話ではなく「取引先（売掛先）に連絡がいかないか」を心配している方も少なくありません。この2つは仕組み上、別の問題です。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">2社間ファクタリング</h3>
              <p className="text-sm leading-relaxed text-text-light">
                利用者とファクタリング会社の2者間で契約が完結するため、<strong className="text-text-main">原則として売掛先への通知・連絡は行われません</strong>。取引先にファクタリングの利用を知られたくない場合は、2社間を選びます。本記事の比較表に掲載したオンライン完結型サービスは、いずれも2社間に対応しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-text-main">3社間ファクタリング</h3>
              <p className="text-sm leading-relaxed text-text-light">
                利用者・ファクタリング会社・売掛先の3者で契約する方式で、<strong className="text-text-main">売掛先の承諾を得るための連絡が必ず発生します</strong>。その分手数料は低くなる傾向がありますが、「売掛先に知られず利用したい」というニーズには合いません。
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            つまり「自分への電話を減らしたい」ならAI審査・オンライン完結型のサービス選び、「売掛先への連絡を避けたい」なら2社間ファクタリングの選択、というように対策が異なります。両方を満たしたい場合は、2社間対応のオンライン完結型サービスから選ぶことになります。
          </p>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">電話なしを希望する際の注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">「電話ゼロ」を保証するサービスは存在しない</h3>
              <p className="text-sm leading-relaxed text-text-light">
                公式に「電話面談不要」と案内している会社でも、申込内容の確認・本人確認・書類の不備確認などで電話連絡が入る場合があります。本記事の記載も「電話が一切ないこと」を保証するものではありません。電話が入る可能性を前提に、出られる時間帯に申し込む・折り返せる体制で申し込むのが現実的です。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">確認連絡を放置すると手続きが止まる</h3>
              <p className="text-sm leading-relaxed text-text-light">
                確認事項が解消されない限り、審査・入金は先に進みません。電話を避けたい場合でも、着信に気づいたらチャット・メールで「文面での確認を希望」と返す等、何らかの形で応答しましょう。急ぎの資金需要があるときほど、確認連絡への対応スピードが入金タイミングを左右します。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">「連絡が少ないこと」だけで会社を選ばない</h3>
              <p className="text-sm leading-relaxed text-text-light">
                電話の有無は利便性の一要素にすぎません。手数料・契約条件（償還請求権の有無等）・運営会社の実在性の確認は、電話なしのサービスでも必ず行ってください。非対面だからこそ、契約書は隅々まで自分で確認し、不明点はチャットやメールで質問して回答を記録に残すことが重要です。
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ─── */}
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

        {/* ── 関連ツール・データ ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">あわせて使いたいツール・データ</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
                    <li><Link href="/articles/instant-factoring/" className="font-medium text-primary underline">即日ファクタリングの総まとめ</Link>｜当日入金の条件とおすすめ会社をまとめています。</li>
              <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
              <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
              <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
            </ul>
          </div>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/no-interview/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">面談なしのファクタリング</p>
              <p className="mt-1 text-sm text-text-light">面談不要・来店不要で選ぶならこちら</p>
            </Link>
            <Link href="/articles/online-factoring/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">オンライン完結ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">来店不要の完全Web完結サービスを比較</p>
            </Link>
            <Link href="/reviews/paytner/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ペイトナーの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">電話面談不要・最短10分入金を検証</p>
            </Link>
            <Link href="/reviews/labol/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ラボルの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">24時間365日・オンライン完結を検証</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">電話なしで使えるファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            オンライン完結型のファクタリング会社を手数料・入金スピードで比較。あなたの条件に合うサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
