import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "請求書のみで申し込めるファクタリング5選｜必要書類が少ない会社",
  description:
    "請求書のみ（または最小限の書類）で申し込めるファクタリング会社を5社厳選して紹介。必要書類が少ないメリット、審査の特徴、利用時の注意点、各社の比較まで詳しく解説します。書類準備の手間を省きたい事業者必見。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/invoice-only/",
  },
  openGraph: {
    title: "請求書のみで申し込めるファクタリング5選｜必要書類が少ない会社",
    description:
      "必要書類が最小限のファクタリング会社5選。請求書だけで申し込める手軽さの秘密を解説。",
    url: "https://factoring-partner.pages.dev/articles/invoice-only/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const companies = [
  {
    name: "ラボル（labol）",
    docs: "請求書・本人確認書類の2点のみ",
    features: "フリーランス・個人事業主向けの即日ファクタリング。AIによる自動審査で最短60分入金。1万円から利用可能で、少額の売掛金にも対応。完全オンライン完結で24時間365日申し込み可能。",
    fee: "一律10%",
    speed: "最短60分",
  },
  {
    name: "ペイトナーファクタリング",
    docs: "請求書・本人確認書類の2点のみ",
    features: "個人事業主・フリーランスに特化。初回利用は最大25万円、実績に応じて上限額が拡大。事業計画書や決算書が不要で、オンラインで簡単に申し込める。Slack連携で審査状況の通知も可能。",
    fee: "一律10%",
    speed: "最短10分",
  },
  {
    name: "フリーナンス即日払い",
    docs: "請求書のみ（フリーナンス口座開設が必要）",
    features: "GMOグループが運営するフリーランス向けサービス。フリーナンス口座を開設すると、請求書を登録するだけで即日払いを利用可能。口座の利用実績に応じて手数料が下がる仕組み。損害賠償保険が無料で付帯。",
    fee: "3%〜10%",
    speed: "最短即日",
  },
  {
    name: "ビートレーディング",
    docs: "請求書・通帳コピーの2点（初回）",
    features: "業界最大手級のファクタリング会社。法人・個人事業主ともに対応。必要書類は請求書と通帳コピーの2点のみで、決算書や確定申告書は不要。買取実績1,300億円以上。最短2時間で入金実績あり。",
    fee: "2%〜",
    speed: "最短2時間",
  },
  {
    name: "QuQuMo（ククモ）",
    docs: "請求書・通帳コピーの2点のみ",
    features: "完全オンライン完結型のファクタリングサービス。クラウドサインによる電子契約で面談不要。買取額に上限がなく、法人の大口案件にも対応可能。手数料は業界最安水準。",
    fee: "1%〜",
    speed: "最短2時間",
  },
];

const minimalDocsMerits = [
  {
    title: "書類準備の手間を大幅に削減",
    description:
      "決算書・確定申告書・登記簿謄本・納税証明書といった書類の準備には時間と手間がかかります。請求書のみで申し込めるファクタリング会社なら、書類を揃える時間を節約し、スピーディーに資金調達を開始できます。",
  },
  {
    title: "申し込みから入金までの期間が短い",
    description:
      "必要書類が少ないぶん審査にかかる時間も短くなります。最短10分〜数時間で審査が完了し、即日入金に対応している会社がほとんどです。緊急の資金需要にも対応できます。",
  },
  {
    title: "開業間もない事業者でも利用しやすい",
    description:
      "確定申告や決算を1期も終えていない開業直後の事業者でも、請求書さえあれば申し込めます。創業期の資金繰りに悩む事業者にとって心強い選択肢です。",
  },
  {
    title: "オンライン完結で来店不要",
    description:
      "書類が少ない会社はオンライン完結型であることが多く、来店も対面面談も不要です。地方在住の事業者や、日中忙しくて時間が取れない事業者でも、スマホやPCから手軽に申し込めます。",
  },
];

const faqs = [
  {
    question: "本当に請求書だけでファクタリングを申し込めますか？",
    answer:
      "請求書のみで申し込めるファクタリング会社は実在しますが、多くの場合は請求書に加えて本人確認書類（運転免許証等）が必要です。また、一部の会社では通帳コピー（入金実績の確認用）も求められます。「請求書のみ」と謳っている会社でも、最低限の本人確認は行われます。",
  },
  {
    question: "書類が少ないと審査が甘いのですか？",
    answer:
      "必要書類が少ないからといって審査が甘いわけではありません。AI審査や独自のデータベースを活用し、請求書の内容、売掛先の信用力、過去の利用実績などから判断しています。むしろテクノロジーの活用により効率的な審査を実現している会社が多いです。",
  },
  {
    question: "請求書のみの場合、手数料は高くなりますか？",
    answer:
      "一概には言えませんが、少額・フリーランス向けのサービスでは手数料が一律10%程度に設定されているケースが多いです。一方、ビートレーディングやQuQuMoのように書類が少なくても手数料が2%〜と低い会社もあります。複数社で見積もりを比較することが重要です。",
  },
  {
    question: "法人でも請求書のみで利用できるファクタリング会社はありますか？",
    answer:
      "はい、ビートレーディングやQuQuMoは法人でも請求書と通帳コピーの2点のみで申し込めます。法人の場合、登記簿謄本や決算書を求められないのは大きなメリットです。ただし、審査の過程で追加書類の提出を求められる場合もあります。",
  },
  {
    question: "請求書がまだ発行前でもファクタリングは使えますか？",
    answer:
      "請求書発行前（まだ納品やサービス提供が完了していない段階）では、通常のファクタリングは利用できません。ただし、一部のファクタリング会社では注文書（発注書）をもとにした注文書ファクタリングに対応しています。建設業やIT業など、納品までに時間がかかる業種では注文書ファクタリングも検討しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "請求書のみで申し込めるファクタリング5選｜必要書類が少ない会社",
  description:
    "必要書類が最小限のファクタリング会社5選。請求書だけで申し込める手軽さの秘密を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://factoring-partner.pages.dev/articles/invoice-only/",
  },
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
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "請求書のみファクタリング", item: "https://factoring-partner.pages.dev/articles/invoice-only/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function InvoiceOnlyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "請求書のみファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">比較ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            請求書のみで申し込めるファクタリング5選
            <br className="hidden md:block" />
            必要書類が少ない会社
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            決算書や確定申告書の提出不要。請求書だけ（または最小限の書類）で申し込めるファクタリング会社を厳選して比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#why" className="hover:underline">1. なぜ必要書類が少ない会社が増えているのか</a></li>
            <li><a href="#merits" className="hover:underline">2. 書類が少ない4つのメリット</a></li>
            <li><a href="#ranking" className="hover:underline">3. 請求書のみで申し込める会社5選</a></li>
            <li><a href="#comparison" className="hover:underline">4. 5社の比較表</a></li>
            <li><a href="#caution" className="hover:underline">5. 利用時の注意点</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── なぜ ─── */}
        <section id="why" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">なぜ必要書類が少ない会社が増えているのか</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            従来のファクタリング会社では、請求書に加えて決算書・確定申告書・登記簿謄本・印鑑証明書・納税証明書など、多くの書類の提出が求められていました。しかし近年、テクノロジーの進化により書類を最小限に抑えたサービスが急増しています。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">AI審査の導入</strong>：AIが請求書の内容や売掛先のデータベース情報から信用力を自動判定し、人手による書類確認を大幅に省力化</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">eKYC（オンライン本人確認）</strong>：スマホで身分証明書を撮影するだけで本人確認が完了し、印鑑証明書や住民票が不要に</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">銀行API連携</strong>：通帳コピーの代わりに銀行口座のAPI連携で入出金履歴を自動取得し、書類提出を不要にするサービスも登場</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">電子契約の普及</strong>：クラウドサインなどの電子契約で印鑑や紙の契約書が不要になり、手続きが大幅にスピードアップ</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">書類が少ない4つのメリット</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {minimalDocsMerits.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5選 ─── */}
        <section id="ranking" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">請求書のみで申し込める会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">必要書類が最小限のファクタリング会社を5社厳選して紹介します。</p>
          <div className="space-y-6">
            {companies.map((company, index) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">{company.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-accent">必要書類：{company.docs}</p>
                    <p className="mt-2 leading-relaxed text-text-light">{company.features}</p>
                    <div className="mt-4 grid gap-3 rounded-lg bg-section-bg p-4 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold text-text-light">手数料</p>
                        <p className="font-bold text-primary">{company.fee}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">入金スピード</p>
                        <p className="font-bold text-secondary">{company.speed}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">5社の比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">会社名</th>
                  <th className="border border-primary p-3 text-left">必要書類</th>
                  <th className="border border-primary p-3 text-left">手数料</th>
                  <th className="border border-primary p-3 text-left">入金速度</th>
                  <th className="border border-primary p-3 text-left">対象</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">ラボル</td>
                  <td className="border border-border p-3">請求書+本人確認書類</td>
                  <td className="border border-border p-3">一律10%</td>
                  <td className="border border-border p-3">最短60分</td>
                  <td className="border border-border p-3">個人事業主</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">ペイトナー</td>
                  <td className="border border-border p-3">請求書+本人確認書類</td>
                  <td className="border border-border p-3">一律10%</td>
                  <td className="border border-border p-3">最短10分</td>
                  <td className="border border-border p-3">個人事業主</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">フリーナンス</td>
                  <td className="border border-border p-3">請求書のみ</td>
                  <td className="border border-border p-3">3%〜10%</td>
                  <td className="border border-border p-3">最短即日</td>
                  <td className="border border-border p-3">個人事業主</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold">ビートレーディング</td>
                  <td className="border border-border p-3">請求書+通帳コピー</td>
                  <td className="border border-border p-3">2%〜</td>
                  <td className="border border-border p-3">最短2時間</td>
                  <td className="border border-border p-3">法人・個人</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold">QuQuMo</td>
                  <td className="border border-border p-3">請求書+通帳コピー</td>
                  <td className="border border-border p-3">1%〜</td>
                  <td className="border border-border p-3">最短2時間</td>
                  <td className="border border-border p-3">法人・個人</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 選び方のポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">書類が少ない会社の選び方</h2>
          <p className="mb-8 leading-relaxed text-text-light">必要書類が少ないファクタリング会社を選ぶ際のポイントを4つ紹介します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">運営会社の信頼性を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">書類が少ないからこそ、運営会社の信頼性は重要です。上場企業のグループ会社か、創業年数は長いか、買取実績はどの程度かを確認しましょう。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">手数料の透明性を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">一律手数料の会社は分かりやすいですが、変動手数料の会社は審査後に手数料が決まります。事前に手数料の範囲と計算方法を確認しましょう。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">利用上限額を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">書類が少ない会社は初回の利用上限額が低い場合があります。自社の資金需要に合った上限額の会社を選びましょう。継続利用で上限が拡大する会社もあります。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">サポート体制を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">チャットサポート、メールサポート、電話サポートなど、問い合わせの手段と対応時間を確認しましょう。書類が少ない分、審査結果や入金に関する連絡がスムーズであることが重要です。</p>
            </div>
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">請求書のみファクタリングの利用の流れ</h2>
          <p className="mb-8 leading-relaxed text-text-light">請求書のみで申し込めるファクタリングの一般的な利用の流れを解説します。</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">アカウント登録・本人確認</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">公式サイトでアカウントを作成し、eKYC（オンライン本人確認）を完了させます。運転免許証やマイナンバーカードをスマホで撮影するだけで完了します。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">請求書のアップロード</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">ファクタリングしたい売掛金の請求書をアップロードします。請求書には売掛先の会社名、金額、支払い期日が記載されている必要があります。PDF、画像、写真のいずれにも対応している会社が多いです。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">AI審査・結果通知</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">AIが請求書の内容と売掛先のデータベースを照合し、買取の可否と手数料を判定します。最短10分で審査結果がメールやアプリで通知されます。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">4</span>
              <div>
                <h3 className="font-bold text-text-main">契約・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">審査結果に同意すれば電子契約で契約を締結。手数料差引後の金額が指定口座に入金されます。土日祝日も入金に対応している会社もあります。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 業種別おすすめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">業種・事業規模別のおすすめ</h2>
          <p className="mb-6 leading-relaxed text-text-light">書類が少ないファクタリング会社は、業種や事業規模によって最適な選択が変わります。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">フリーランス・副業（少額利用）</h3>
              <p className="text-sm leading-relaxed text-text-light">ペイトナーファクタリングやラボルがおすすめです。1万円〜25万円の少額から利用でき、請求書と本人確認書類の2点だけで申し込めます。デザイナー、エンジニア、ライターなどのフリーランスに最適です。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">個人事業主（中額利用）</h3>
              <p className="text-sm leading-relaxed text-text-light">フリーナンスの即日払いがおすすめです。フリーナンス口座の利用実績に応じて手数料が下がるため、継続利用するほどお得になります。損害賠償保険が無料で付帯するのも個人事業主にとって心強いです。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">法人（大口利用）</h3>
              <p className="text-sm leading-relaxed text-text-light">ビートレーディングやQuQuMoがおすすめです。請求書と通帳コピーの2点で申し込め、買取額に上限がないため数百万〜数千万円の大口案件にも対応可能です。手数料も1%〜と業界最安水準です。</p>
            </div>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用時の注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">追加書類を求められる場合がある</h3>
              <p className="text-sm leading-relaxed text-text-light">「請求書のみ」と謳っていても、審査の過程で追加書類の提出を求められることがあります。特に高額の売掛金や初めて取引する売掛先の場合、通帳コピーや契約書の提出が必要になることがあります。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">書類が少ない分、手数料が高めの場合がある</h3>
              <p className="text-sm leading-relaxed text-text-light">書類が少ないファクタリング会社は審査リスクが高いため、手数料が一律10%など比較的高めに設定されている場合があります。書類を多く提出すると手数料が下がる会社もあるため、コストを抑えたい場合は書類を追加提出することも検討しましょう。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">架空請求書の利用は詐欺罪に問われる</h3>
              <p className="text-sm leading-relaxed text-text-light">書類が少ないことを悪用し、実在しない取引の請求書を提出してファクタリングを利用すると、詐欺罪に問われます。ファクタリング会社もAIや独自データベースで架空請求書の検出を行っており、発覚した場合は法的措置が取られます。必ず実在する取引の請求書を使用してください。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">利用上限額が低い場合がある</h3>
              <p className="text-sm leading-relaxed text-text-light">書類が少ないサービスは初回の利用上限額が低めに設定されていることがあります（例：ペイトナーは初回25万円まで）。大口の資金需要がある場合は、書類が多少増えても上限額が高いファクタリング会社を選ぶほうが効率的です。</p>
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

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/required-documents/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングの必要書類</p>
              <p className="mt-1 text-sm text-text-light">一般的に必要な書類を解説</p>
            </Link>
            <Link href="/articles/no-interview/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">面談なし・電話なしファクタリング</p>
              <p className="mt-1 text-sm text-text-light">完全非対面で資金調達</p>
            </Link>
            <Link href="/articles/online-factoring/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">オンライン完結ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">来店不要で手続き可能</p>
            </Link>
            <Link href="/articles/for-freelance/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">フリーランス向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">少額から利用可能な会社を紹介</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">書類が少ないファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            必要書類・手数料・入金スピードで各社を徹底比較。あなたに最適なファクタリング会社が見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
