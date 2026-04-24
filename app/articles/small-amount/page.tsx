import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "少額ファクタリング完全ガイド｜1万円から利用できるおすすめ5選",
  description:
    "少額ファクタリング（1万円〜）に対応するおすすめ5社を徹底比較。フリーランス・個人事業主向けの少額対応サービスの手数料・入金速度・特徴を解説。少額利用時の注意点やコスト計算方法も紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/small-amount/",
  },
  openGraph: {
    title: "少額ファクタリング完全ガイド｜1万円から利用できるおすすめ5選",
    description: "1万円から利用可能な少額ファクタリングのおすすめ5社を比較。フリーランス・個人事業主に最適。",
    url: "https://factoring-partner.pages.dev/articles/small-amount/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const recommendedCompanies = [
  {
    name: "ペイトナー",
    minAmount: "1万円〜",
    fee: "一律10%",
    speed: "最短10分",
    target: "フリーランス・個人事業主",
    features: "業界最速クラスの最短10分入金。手数料一律10%で明瞭。事業計画書・決算書不要。請求書をアップロードするだけの簡単操作。初回でも利用可能。",
    merit: "とにかく早く少額の資金が必要なフリーランスに最適。10分で入金される圧倒的スピード。1万円からの超少額にも対応。",
  },
  {
    name: "ラボル",
    minAmount: "1万円〜",
    fee: "一律10%",
    speed: "最短30分",
    target: "フリーランス・個人事業主",
    features: "土日祝日も24時間365日即日振込に対応。手数料一律10%。1万円から利用可能。休日でも最短30分で入金される唯一のサービス。",
    merit: "休日でも入金対応。週末に急な出費がある場合に最適。24時間365日対応は業界唯一。",
  },
  {
    name: "FREENANCE（フリーナンス）",
    minAmount: "1万円〜",
    fee: "3%〜10%",
    speed: "最短即日",
    target: "フリーランス・個人事業主",
    features: "GMOグループ運営の信頼性。ファクタリング（即日払い）の他、あんしん補償や収納代行サービスも提供。利用実績に応じて手数料が下がる仕組み。",
    merit: "GMOブランドの安心感。継続利用で手数料が下がるため、リピーターにお得。補償サービスも付帯。",
  },
  {
    name: "QuQuMo",
    minAmount: "制限なし（少額対応）",
    fee: "1%〜",
    speed: "最短2時間",
    target: "法人・個人事業主",
    features: "完全オンライン完結型。手数料1%〜と業界最安水準。必要書類は請求書と通帳の2点のみ。法人の少額利用にも対応。",
    merit: "手数料が業界最安水準のため、少額でもコストを抑えられる。法人・個人事業主の両方に対応。",
  },
  {
    name: "PAYTODAY",
    minAmount: "制限なし（少額対応）",
    fee: "1%〜9.5%",
    speed: "最短30分",
    target: "法人・個人事業主",
    features: "AI審査で最短30分入金。手数料1%〜9.5%と上限明示。完全オンライン完結。スタートアップや小規模事業者にも対応。",
    merit: "AI審査のスピードと手数料上限の透明性。少額でも手数料率が明確で安心。",
  },
];

const costSimulation = [
  { amount: "5万円", fee10: "5,000円", fee5: "2,500円", fee3: "1,500円", received10: "45,000円", received5: "47,500円", received3: "48,500円" },
  { amount: "10万円", fee10: "10,000円", fee5: "5,000円", fee3: "3,000円", received10: "90,000円", received5: "95,000円", received3: "97,000円" },
  { amount: "30万円", fee10: "30,000円", fee5: "15,000円", fee3: "9,000円", received10: "270,000円", received5: "285,000円", received3: "291,000円" },
  { amount: "50万円", fee10: "50,000円", fee5: "25,000円", fee3: "15,000円", received10: "450,000円", received5: "475,000円", received3: "485,000円" },
];

const faqs = [
  {
    question: "1万円の請求書でもファクタリングは利用できますか？",
    answer:
      "はい、ペイトナーやラボル、FREENANCE（フリーナンス）では1万円からファクタリングを利用できます。ただし、手数料が一律10%の場合、1万円の売掛金に対して1,000円の手数料がかかり、受取額は9,000円になります。少額であるほど手数料の割合が大きく感じるため、本当に必要な場合のみ利用しましょう。",
  },
  {
    question: "少額ファクタリングの手数料は高くなりますか？",
    answer:
      "サービスによって異なります。ペイトナーやラボルのような一律10%のサービスでは金額に関わらず手数料率は同じです。一方、手数料が変動するサービス（QuQuMo、OLTA等）では、少額だと手数料率がやや高くなる傾向があります。少額利用では手数料率よりも実際の手数料額（金額ベース）で判断するのがおすすめです。",
  },
  {
    question: "個人事業主・フリーランスでも少額ファクタリングを利用できますか？",
    answer:
      "はい、少額ファクタリングはむしろフリーランスや個人事業主向けに設計されたサービスが多いです。ペイトナー、ラボル、FREENANCEなどはフリーランスに特化しており、事業計画書や決算書不要で利用できます。請求書と本人確認書類だけで申し込み可能です。",
  },
  {
    question: "少額ファクタリングを利用する際の注意点は？",
    answer:
      "主な注意点は3つです。(1)手数料の実額を事前に計算し、受取額を把握する。(2)頻繁な利用はコストが積み重なるため、必要な時だけ利用する。(3)初回利用時は審査に時間がかかる場合があるため、余裕を持って申し込む。また、少額対応していない会社（最低買取額30万円〜など）もあるため、事前に確認しましょう。",
  },
  {
    question: "少額ファクタリングと消費者金融（カードローン）はどちらが良いですか？",
    answer:
      "状況によりますが、事業用の売掛金があるならファクタリングの方が有利です。ファクタリングは信用情報に影響せず、負債にもなりません。一方、カードローンは借入として信用情報に記録され、返済義務も発生します。ファクタリングは売掛金という裏付けがあるため、審査も通りやすい傾向にあります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "少額ファクタリング完全ガイド｜1万円から利用できるおすすめ5選",
  description: "1万円から利用可能な少額ファクタリングのおすすめ5社を比較。フリーランス・個人事業主に最適。",
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/small-amount/" },
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
    { "@type": "ListItem", position: 3, name: "少額ファクタリング", item: "https://factoring-partner.pages.dev/articles/small-amount/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SmallAmountPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "少額ファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">金額別ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            少額ファクタリング完全ガイド
            <br className="hidden md:block" />
            1万円から利用できるおすすめ5選
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            1万円〜の少額売掛金でも利用できるファクタリングサービスを徹底比較。フリーランス・個人事業主の少額資金ニーズに対応するおすすめ5社を紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#what-is" className="hover:underline">1. 少額ファクタリングとは</a></li>
            <li><a href="#who" className="hover:underline">2. 少額ファクタリングが向いている人</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめ5選の比較</a></li>
            <li><a href="#cost" className="hover:underline">4. 手数料シミュレーション</a></li>
            <li><a href="#merit-demerit" className="hover:underline">5. メリット・デメリット</a></li>
            <li><a href="#flow" className="hover:underline">6. 利用の流れ</a></li>
            <li><a href="#caution" className="hover:underline">7. 利用時の注意点</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 少額ファクタリングとは ─── */}
        <section id="what-is" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">少額ファクタリングとは</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            少額ファクタリングとは、数万円〜数十万円程度の小さな売掛金を対象としたファクタリングサービスです。従来のファクタリングは最低買取額が30万円〜100万円以上のものが多く、少額の売掛金しか持たないフリーランスや個人事業主には利用しにくいものでした。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            しかし近年、ペイトナーやラボルなどのフリーランス特化型サービスの登場により、<strong className="text-text-main">1万円から</strong>ファクタリングを利用できるようになりました。手続きもオンラインで完結し、最短10分で入金されるサービスもあります。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">少額ファクタリングの特徴</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>1万円〜の超少額売掛金にも対応</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>オンライン完結で手続きが簡単</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>最短10分〜即日入金のスピード対応</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>事業計画書・決算書不要の簡単審査</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>フリーランス・個人事業主に特化</span></li>
            </ul>
          </div>
        </section>

        {/* ── 向いている人 ─── */}
        <section id="who" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">少額ファクタリングが向いている人</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">フリーランス・個人事業主</h3>
              <p className="text-sm leading-relaxed text-text-light">月間売上が数十万円〜100万円程度のフリーランスでも、入金待ちの期間の生活費や経費に充てるために利用できます。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">急な出費への対応が必要な方</h3>
              <p className="text-sm leading-relaxed text-text-light">設備の故障、急な出張費、税金の支払いなど、少額だが今すぐ必要な資金を確保したい場合に最適です。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">創業間もない小規模事業者</h3>
              <p className="text-sm leading-relaxed text-text-light">まだ取引先が少なく売掛金の金額も小さい創業期の事業者でも、少額ファクタリングなら利用できます。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <h3 className="mb-3 font-bold text-secondary">借入をしたくない方</h3>
              <p className="text-sm leading-relaxed text-text-light">カードローンや消費者金融は信用情報に影響しますが、ファクタリングは影響しません。借入を避けたい方に最適です。</p>
            </div>
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">少額対応おすすめファクタリング5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">1万円〜の少額売掛金に対応するファクタリング会社を5社厳選しました。</p>
          <div className="space-y-6">
            {recommendedCompanies.map((company, index) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">{company.name}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{company.features}</p>
                    <div className="mt-4 grid gap-3 rounded-lg bg-section-bg p-4 md:grid-cols-3">
                      <div>
                        <p className="text-xs font-semibold text-text-light">最低買取額</p>
                        <p className="font-bold text-accent">{company.minAmount}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">手数料</p>
                        <p className="font-bold text-primary">{company.fee}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">入金スピード</p>
                        <p className="font-bold text-secondary">{company.speed}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-text-light">
                      <strong className="text-text-main">おすすめポイント：</strong>{company.merit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 手数料シミュレーション ─── */}
        <section id="cost" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">手数料シミュレーション</h2>
          <p className="mb-6 leading-relaxed text-text-light">少額ファクタリングの手数料と受取額の目安を一覧表で確認しましょう。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">売掛金額</th>
                  <th className="border border-primary p-3 text-left">手数料10%の場合</th>
                  <th className="border border-primary p-3 text-left">手数料5%の場合</th>
                  <th className="border border-primary p-3 text-left">手数料3%の場合</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                {costSimulation.map((row, i) => (
                  <tr key={row.amount} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}>
                    <td className="border border-border p-3 font-semibold text-text-main">{row.amount}</td>
                    <td className="border border-border p-3">手数料{row.fee10}→受取{row.received10}</td>
                    <td className="border border-border p-3">手数料{row.fee5}→受取{row.received5}</td>
                    <td className="border border-border p-3">手数料{row.fee3}→受取{row.received3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-text-light">少額であるほど手数料の金額は小さくなりますが、手数料率は変わりません。手数料率の低いサービスを選ぶことで、受取額を最大化できます。</p>
        </section>

        {/* ── メリット・デメリット ─── */}
        <section id="merit-demerit" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">少額ファクタリングのメリット・デメリット</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-4 font-bold text-secondary">メリット</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>数万円の少額でも即座に資金化可能</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>借入ではないため信用情報に影響なし</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>審査が簡単で最短10分入金</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>担保・保証人不要</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-secondary">&#10003;</span><span>必要書類が少なく手続きが簡便</span></li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-4 font-bold text-accent">デメリット</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>手数料率が大口より高い傾向がある</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>頻繁な利用はコストが積み重なる</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>初回の買取上限額が低い場合がある</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-accent">&#9679;</span><span>対応サービスが限られている</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 少額ファクタリング vs 他の資金調達 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">少額ファクタリング vs 他の少額資金調達</h2>
          <p className="mb-6 leading-relaxed text-text-light">少額の資金が必要な場合の選択肢を比較します。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">比較項目</th>
                  <th className="border border-primary p-3 text-left">少額ファクタリング</th>
                  <th className="border border-primary p-3 text-left">カードローン</th>
                  <th className="border border-primary p-3 text-left">クレジットカードキャッシング</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">必要なもの</td>
                  <td className="border border-border p-3">売掛金（請求書）</td>
                  <td className="border border-border p-3">審査通過</td>
                  <td className="border border-border p-3">既存のキャッシング枠</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">スピード</td>
                  <td className="border border-border p-3">最短10分</td>
                  <td className="border border-border p-3">最短即日</td>
                  <td className="border border-border p-3">即時</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">コスト（10万円の場合）</td>
                  <td className="border border-border p-3">10,000円（手数料10%）</td>
                  <td className="border border-border p-3">約1,500円/月（年利18%）</td>
                  <td className="border border-border p-3">約1,500円/月（年利18%）</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">信用情報への影響</td>
                  <td className="border border-border p-3 font-bold text-secondary">なし</td>
                  <td className="border border-border p-3">あり</td>
                  <td className="border border-border p-3">あり</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">返済義務</td>
                  <td className="border border-border p-3">なし（売掛金の売却）</td>
                  <td className="border border-border p-3">あり</td>
                  <td className="border border-border p-3">あり</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ファクタリングの手数料は一見高く見えますが、1回限りのコストで返済の必要がありません。カードローンは月々の返済が必要で、返済が長期化するとトータルコストがファクタリングを上回ります。信用情報に影響しない点も大きなメリットです。
          </p>
        </section>

        {/* ── 少額ファクタリングの活用シーン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">少額ファクタリングの活用シーン</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">シーン1：フリーランスの月末の資金繰り</h3>
              <p className="text-sm leading-relaxed text-text-light">請求書の入金は翌月末だが、今月末のクラウドサービス利用料、家賃、生活費の支払いに5万円不足。ペイトナーで請求書の一部を売却し、10分で資金を確保。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">シーン2：急な設備の修理費用</h3>
              <p className="text-sm leading-relaxed text-text-light">PCが故障し、修理費用8万円が必要。次の入金は3週間先で手元資金がない。ラボルで土曜日でも即座にファクタリングを利用し、月曜日に修理依頼。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">シーン3：税金の支払い期限</h3>
              <p className="text-sm leading-relaxed text-text-light">消費税の中間納付や住民税の支払い期限が迫っている。売掛金の入金は2週間先。FREENANCEで必要分だけファクタリングし、期限内に納税。</p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">シーン4：交通費・出張費の立替</h3>
              <p className="text-sm leading-relaxed text-text-light">クライアント先への出張が急遽決まり、交通費・宿泊費15万円が必要。手元資金が不足しているため、QuQuMoで売掛金を一部売却して出張費を確保。</p>
            </div>
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用の流れ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "アカウント登録", desc: "サービスのWebサイトでアカウント登録。メールアドレス、本人確認書類、銀行口座情報を入力。" },
              { step: "2", title: "請求書をアップロード", desc: "売掛先に発行した請求書をPDFまたは画像でアップロード。請求先企業名、金額、支払い期日を確認。" },
              { step: "3", title: "AI審査・即時結果", desc: "AI審査で数分〜数十分で結果が出ます。売掛先の信用力を元に手数料率が決定されます。" },
              { step: "4", title: "入金", desc: "審査通過後、最短10分〜即日で指定口座に入金。手数料を差し引いた金額が振り込まれます。" },
              { step: "5", title: "売掛金入金後に送金", desc: "売掛先から入金があったら、ファクタリング会社の指定口座に送金します。" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">{item.step}</span>
                <div>
                  <h3 className="font-bold text-text-main">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 少額ファクタリングの会計処理 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">少額ファクタリングの会計処理</h2>
          <p className="mb-6 leading-relaxed text-text-light">少額であっても会計処理は正確に行いましょう。フリーランスの確定申告時にも必要です。</p>
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="mb-4 font-bold text-text-main">仕訳例：売掛金10万円を手数料10%でファクタリング</h3>
            <div className="space-y-4">
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-2 text-sm font-semibold text-primary">ファクタリング契約時</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-text-light">
                  <p>（借方）未収入金 90,000円</p>
                  <p>（貸方）売掛金 100,000円</p>
                  <p>（借方）売掛債権売却損 10,000円</p>
                  <p></p>
                </div>
              </div>
              <div className="rounded-lg bg-section-bg p-4">
                <p className="mb-2 text-sm font-semibold text-primary">入金時</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-text-light">
                  <p>（借方）普通預金 90,000円</p>
                  <p>（貸方）未収入金 90,000円</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-text-light">手数料10,000円は「売掛債権売却損」として経費計上。確定申告時に所得から差し引けます。会計ソフト（freee、マネーフォワードなど）を活用すると正確な記帳が容易です。</p>
          </div>
        </section>

        {/* ── サービス選びのチェックリスト ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">少額ファクタリングのサービス選びチェックリスト</h2>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">最低買取額は？</strong>：1万円から対応しているか。サービスによって最低額が異なります。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">手数料体系は？</strong>：一律（定率）か変動か。少額の場合は一律10%のサービスが分かりやすくておすすめ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">入金スピードは？</strong>：最短10分のペイトナーから最短2時間のQuQuMoまで。急ぎ度合いに合わせて選択。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">必要書類は？</strong>：請求書と通帳だけで済むか。決算書や事業計画書が必要なサービスもあります。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">土日祝日の対応は？</strong>：ラボルは24時間365日対応。他のサービスは営業日のみ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">初回の買取上限額は？</strong>：初回利用時は上限が低く設定されているサービスもあります。事前に確認しましょう。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">リピート割引はあるか？</strong>：FREENANCEなど、利用実績に応じて手数料が下がるサービスもあります。</span></li>
            </ul>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用時の注意点</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">手数料の実額を事前に確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">少額であっても手数料率は変わらないため、受取額を事前に計算しましょう。例えば5万円の売掛金に手数料10%なら、受取額は4万5千円です。本当にその金額が必要か検討してから利用しましょう。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">初回利用時の買取上限額に注意</h3>
              <p className="text-sm leading-relaxed text-text-light">ペイトナーなどでは初回利用時の買取上限額が設定されています（利用実績に応じて段階的に上がります）。初回に大きな金額を期待していると不足する場合があるので注意。</p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">頻繁な利用は根本的な資金繰り改善を</h3>
              <p className="text-sm leading-relaxed text-text-light">毎月少額ファクタリングを利用している場合、手数料コストが年間で大きくなります。入金サイトの短縮交渉や固定費の見直し、銀行融資の活用など、根本的な対策も検討しましょう。</p>
            </div>
          </div>
        </section>

        {/* ── 少額ファクタリングの5社詳細比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">5社の詳細比較表</h2>
          <p className="mb-6 leading-relaxed text-text-light">少額対応のファクタリング5社を一覧で比較します。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary p-3 text-left">サービス</th>
                  <th className="border border-primary p-3 text-left">最低額</th>
                  <th className="border border-primary p-3 text-left">手数料</th>
                  <th className="border border-primary p-3 text-left">スピード</th>
                  <th className="border border-primary p-3 text-left">土日対応</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">ペイトナー</td>
                  <td className="border border-border p-3">1万円</td>
                  <td className="border border-border p-3">一律10%</td>
                  <td className="border border-border p-3 font-bold text-secondary">最短10分</td>
                  <td className="border border-border p-3">平日のみ</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">ラボル</td>
                  <td className="border border-border p-3">1万円</td>
                  <td className="border border-border p-3">一律10%</td>
                  <td className="border border-border p-3">最短30分</td>
                  <td className="border border-border p-3 font-bold text-secondary">24時間365日</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">FREENANCE</td>
                  <td className="border border-border p-3">1万円</td>
                  <td className="border border-border p-3">3%〜10%</td>
                  <td className="border border-border p-3">最短即日</td>
                  <td className="border border-border p-3">平日のみ</td>
                </tr>
                <tr className="bg-section-bg">
                  <td className="border border-border p-3 font-semibold text-text-main">QuQuMo</td>
                  <td className="border border-border p-3">制限なし</td>
                  <td className="border border-border p-3 font-bold text-secondary">1%〜</td>
                  <td className="border border-border p-3">最短2時間</td>
                  <td className="border border-border p-3">平日のみ</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-border p-3 font-semibold text-text-main">PAYTODAY</td>
                  <td className="border border-border p-3">制限なし</td>
                  <td className="border border-border p-3">1%〜9.5%</td>
                  <td className="border border-border p-3">最短30分</td>
                  <td className="border border-border p-3">平日のみ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            スピード最優先ならペイトナー、土日の対応が必要ならラボル、手数料の安さ重視ならQuQuMoがおすすめです。複数サービスに事前登録しておくと、状況に応じて使い分けられます。
          </p>
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

        {/* ── よくある失敗 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">少額ファクタリングでよくある失敗と対策</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">失敗1：手数料を考慮せず利用して赤字に</h3>
              <p className="text-sm leading-relaxed text-text-light">
                5万円の売掛金に手数料10%でファクタリングすると受取は4万5千円。手数料5千円が案件の利益を上回ると赤字に。対策：手数料を含めた受取額を事前に計算し、利益が確保できる場合のみ利用する。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">失敗2：毎月の利用が常態化してコストが膨らむ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                月10万円を手数料10%で12ヶ月利用すると年間12万円の手数料。年間売上の1%以上がファクタリング手数料に消える。対策：入金サイトの短縮交渉や固定費削減で根本的な資金繰り改善を進める。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">失敗3：初回の買取上限を知らずに大きな金額を期待</h3>
              <p className="text-sm leading-relaxed text-text-light">
                サービスによっては初回の買取上限が低い。30万円の請求書を出したが初回上限が10万円で、必要額に足りなかった。対策：事前に初回上限額を確認し、足りない場合は複数サービスを併用する。
              </p>
            </div>
          </div>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/for-freelance/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">フリーランス向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">個人事業主に最適なサービスを比較</p>
            </Link>
            <Link href="/articles/large-amount/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">大口ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">1億円超の高額取引に対応</p>
            </Link>
            <Link href="/articles/instant-factoring/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">即日ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">最短即日入金のおすすめサービス</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツ</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">少額対応のファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            1万円から利用可能なファクタリング会社を手数料・入金速度で徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
