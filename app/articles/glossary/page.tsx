import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング用語集｜知っておきたい専門用語50選",
  description:
    "ファクタリングに関する専門用語50語を解説。売掛債権・2社間/3社間・償還請求権・ノンリコース・債権譲渡登記・ABL・でんさい・支払いサイトなど、初心者にもわかりやすく説明します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/glossary/",
  },
  openGraph: {
    title: "ファクタリング用語集｜知っておきたい専門用語50選",
    description:
      "ファクタリングに関する専門用語50語を初心者にもわかりやすく解説します。",
    url: "https://factoring-partner.pages.dev/articles/glossary/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

interface Term {
  term: string;
  reading?: string;
  description: string;
  link?: { href: string; text: string };
}

interface TermCategory {
  title: string;
  id: string;
  terms: Term[];
}

const termCategories: TermCategory[] = [
  {
    title: "ファクタリングの基本用語",
    id: "basic",
    terms: [
      { term: "ファクタリング", description: "企業が保有する売掛債権（請求書）をファクタリング会社に売却して、支払期日前に現金化する資金調達方法。融資ではなく債権の売買取引に分類される。", link: { href: "/articles/what-is-factoring/", text: "詳しく見る" } },
      { term: "売掛債権", reading: "うりかけさいけん", description: "商品やサービスを提供した後、まだ代金を受け取っていない状態の金銭的な請求権。請求書に記載された金額を受け取る権利のこと。ファクタリングではこの権利を売却して現金化する。" },
      { term: "売掛金", reading: "うりかけきん", description: "商品・サービスの提供後、まだ入金されていない代金のこと。貸借対照表の資産の部に計上される。売掛債権の金銭的な価値を示す勘定科目。" },
      { term: "買掛金", reading: "かいかけきん", description: "商品やサービスを受け取った後、まだ支払っていない代金のこと。貸借対照表の負債の部に計上される。売掛金の反対の概念。" },
      { term: "2社間ファクタリング", reading: "にしゃかんファクタリング", description: "利用者（売掛元）とファクタリング会社の2者間で行うファクタリング。売掛先への通知が不要で迅速に利用できるが、手数料は5〜18%と高め。", link: { href: "/articles/2sha-vs-3sha/", text: "詳しく見る" } },
      { term: "3社間ファクタリング", reading: "さんしゃかんファクタリング", description: "利用者（売掛元）・ファクタリング会社・売掛先の3者間で行うファクタリング。売掛先の承諾が必要だが、手数料は1〜9%と低め。", link: { href: "/articles/2sha-vs-3sha/", text: "詳しく見る" } },
      { term: "買取型ファクタリング", description: "ファクタリング会社が売掛債権を買い取る形式。最も一般的なファクタリングの形態で、「ファクタリング」と言えば通常この買取型を指す。" },
      { term: "保証型ファクタリング", description: "売掛先の支払い不能リスクを保証するサービス。売掛債権を売却するのではなく、万が一売掛先が支払えなかった場合に保証金が支払われる仕組み。保証料は1〜4%程度。" },
    ],
  },
  {
    title: "契約・法律用語",
    id: "contract",
    terms: [
      { term: "償還請求権", reading: "しょうかんせいきゅうけん", description: "売掛先が売掛金を支払わなかった場合に、ファクタリング会社が利用者に代金の返還を求める権利。償還請求権ありを「ウィズリコース」、なしを「ノンリコース」と呼ぶ。" },
      { term: "ノンリコース", description: "償還請求権なしのファクタリング契約。売掛先が支払い不能になった場合でも、利用者に返金義務がない。売掛先の倒産リスクはファクタリング会社が負担する。買取型ファクタリングの多くはノンリコースで提供される。" },
      { term: "ウィズリコース", description: "償還請求権ありのファクタリング契約。売掛先が支払い不能になった場合、利用者がファクタリング会社に代金を返還する義務がある。実質的に融資に近い性質を持ち、貸金業登録が必要とされる場合がある。" },
      { term: "債権譲渡", reading: "さいけんじょうと", description: "債権者が持つ債権を第三者に移転すること。ファクタリングでは、利用者が保有する売掛債権をファクタリング会社に譲渡する。民法第466条で認められた合法的な行為。" },
      { term: "債権譲渡登記", reading: "さいけんじょうととうき", description: "債権譲渡の事実を法務局に登記すること。2社間ファクタリングでは、対抗要件を備えるために登記が行われることがある。登記費用は数万円〜10万円程度。", link: { href: "/articles/debt-registration/", text: "詳しく見る" } },
      { term: "債権譲渡通知", reading: "さいけんじょうとつうち", description: "債権の譲渡を売掛先（債務者）に通知すること。3社間ファクタリングでは必ず行われる。内容証明郵便で送付されることが一般的。" },
      { term: "譲渡制限特約", reading: "じょうとせいげんとくやく", description: "契約書に記載される、債権の譲渡を制限する条項。2020年の民法改正により、この特約があっても債権譲渡は原則有効となった。" },
      { term: "対抗要件", reading: "たいこうようけん", description: "権利を第三者に主張するための法律的な要件。債権譲渡の場合、売掛先への通知（確定日付証書）または債権譲渡登記が対抗要件となる。" },
    ],
  },
  {
    title: "手数料・費用関連用語",
    id: "fee",
    terms: [
      { term: "手数料率", description: "売掛金額に対するファクタリング手数料の割合。2社間で5〜18%、3社間で1〜9%が相場。売掛先の信用力や金額によって変動する。", link: { href: "/articles/fee-guide/", text: "詳しく見る" } },
      { term: "掛け目", reading: "かけめ", description: "売掛金額に対して、実際に買取対象となる割合。通常は80〜95%程度。掛け目が90%の場合、100万円の売掛金のうち90万円が買取対象となり、残り10万円は売掛金の入金後に返金される。" },
      { term: "売上債権売却損", reading: "うりあげさいけんばいきゃくそん", description: "ファクタリングの手数料を会計処理する際の勘定科目。営業外費用に分類される。ファクタリング手数料は経費（損金）として計上可能。", link: { href: "/articles/accounting/", text: "詳しく見る" } },
      { term: "年利換算", reading: "ねんりかんさん", description: "ファクタリングの手数料を年利に換算した数値。例えば手数料10%で支払いサイト60日の場合、年利換算は約60%（10% × 365日 ÷ 60日）となる。銀行融資との比較に用いる。", link: { href: "/articles/annual-rate/", text: "詳しく見る" } },
      { term: "事務手数料", description: "ファクタリングの手数料とは別に発生する場合がある事務的な費用。契約書作成費用、振込手数料、書類郵送費など。「手数料のみ」を明記している会社を選ぶと安心。" },
      { term: "登記費用", description: "2社間ファクタリングで債権譲渡登記を行う場合にかかる費用。登録免許税7,500円と司法書士報酬（数万円）が必要。会社によっては手数料に含まれている場合もある。" },
    ],
  },
  {
    title: "金融・会計用語",
    id: "finance",
    terms: [
      { term: "キャッシュフロー", description: "一定期間における現金の収入と支出の流れ。ファクタリングを利用することで、売掛金の入金を前倒しにしてキャッシュフローを改善できる。", link: { href: "/articles/cashflow-tips/", text: "詳しく見る" } },
      { term: "支払いサイト", description: "取引が成立してから代金が支払われるまでの期間。「月末締め翌月末払い」なら支払いサイトは30日、「月末締め翌々月末払い」なら60日。支払いサイトが長いほどファクタリングの活用価値が高い。", link: { href: "/articles/payment-site/", text: "詳しく見る" } },
      { term: "ABL（動産・債権担保融資）", description: "Asset Based Lendingの略。売掛債権や在庫、機械設備などの動産を担保とした融資方法。ファクタリングが債権の売買であるのに対し、ABLは担保融資であるため、負債として計上される。", link: { href: "/articles/vs-abl/", text: "詳しく見る" } },
      { term: "でんさい（電子記録債権）", description: "株式会社全銀電子債権ネットワーク（でんさいネット）が扱う電子記録債権。手形の代替として利用される。でんさいの割引とファクタリングは性質が異なる。", link: { href: "/articles/vs-densai/", text: "詳しく見る" } },
      { term: "手形割引", reading: "てがたわりびき", description: "約束手形を支払期日前に銀行や手形割引業者に売却して現金化すること。ファクタリングと似ているが、手形割引は手形法に基づく取引で、遡求権（裏書人への請求権）がある。", link: { href: "/articles/vs-bill-discount/", text: "詳しく見る" } },
      { term: "流動比率", reading: "りゅうどうひりつ", description: "流動資産を流動負債で割った比率（流動資産÷流動負債×100）。100%以上が望ましいとされる。ファクタリングで売掛金を現金化すると、流動比率が改善する。" },
      { term: "自己資本比率", reading: "じこしほんひりつ", description: "総資産に占める自己資本の割合。ファクタリングは融資と異なり負債が増えないため、自己資本比率に悪影響を与えない。" },
      { term: "オフバランス", description: "資産や負債を貸借対照表から外すこと。ファクタリングで売掛債権を売却すると、売掛金がバランスシートから外れる（オフバランス化）。負債比率の改善に効果がある。" },
    ],
  },
  {
    title: "ファクタリングの種類",
    id: "types",
    terms: [
      { term: "医療ファクタリング", description: "医療機関が保有する診療報酬債権をファクタリングするサービス。売掛先が国保連や社会保険診療報酬支払基金など公的機関のため、手数料が1〜5%と低い。", link: { href: "/articles/medical/", text: "詳しく見る" } },
      { term: "介護ファクタリング", description: "介護事業者が保有する介護報酬債権をファクタリングするサービス。医療ファクタリングと同様に、公的機関が売掛先のため手数料が低い。", link: { href: "/articles/nursing-care/", text: "詳しく見る" } },
      { term: "注文書ファクタリング", description: "納品前の注文書（発注書）段階で資金化できるファクタリング。通常のファクタリングが請求書を対象とするのに対し、受注段階で資金調達が可能。建設業や製造業で需要が高い。", link: { href: "/articles/purchase-order/", text: "詳しく見る" } },
      { term: "一括ファクタリング", description: "売掛先（支払い企業）が主導して導入するファクタリング。支払い企業が手形の代わりにファクタリングを利用し、納入企業（下請け）が早期に資金を受け取れるようにする仕組み。" },
      { term: "国際ファクタリング", description: "海外取引における売掛債権をファクタリングするサービス。輸出企業が海外のバイヤーへの売掛金を現金化するために利用する。国際ファクタリングチェーン（FCI）に加盟する銀行系が主に取り扱う。" },
      { term: "リバースファクタリング", description: "買掛金を持つ企業（支払い側）が主導して、仕入先の資金繰りを支援するファクタリング。サプライチェーンファイナンスとも呼ばれる。大手企業が下請けの資金繰りを改善するために導入するケース。", link: { href: "/articles/reverse/", text: "詳しく見る" } },
      { term: "給与ファクタリング", description: "個人の給与債権を買い取ると称するサービス。金融庁は「実質的に貸付」と判断しており、貸金業登録のない業者による給与ファクタリングは違法。利用は推奨されない。", link: { href: "/articles/salary-factoring-illegal/", text: "詳しく見る" } },
      { term: "診療報酬債権", reading: "しんりょうほうしゅうさいけん", description: "医療機関が国保連や社保基金に対して持つ診療報酬の請求権。通常2ヶ月後に支払われるが、ファクタリングで早期に現金化できる。売掛先の信用力が高いため低手数料で利用可能。" },
      { term: "介護報酬債権", reading: "かいごほうしゅうさいけん", description: "介護事業者が国保連に対して持つ介護報酬の請求権。診療報酬債権と同様に、公的機関が支払い先のため低手数料でファクタリングが可能。" },
    ],
  },
  {
    title: "業界・市場関連用語",
    id: "market",
    terms: [
      { term: "独立系ファクタリング会社", description: "銀行やノンバンクに属さない、独立したファクタリング専業会社。ビートレーディング・OLTA・アクセルファクターなどが代表例。柔軟な審査と迅速な対応が特徴。" },
      { term: "銀行系ファクタリング", description: "銀行やその子会社が提供するファクタリングサービス。みずほファクター・三菱UFJファクターなどが代表例。手数料が低い反面、審査が厳しく時間がかかる。大企業向けのサービスが中心。" },
      { term: "ノンバンク系ファクタリング", description: "消費者金融やクレジット会社など、銀行以外の金融機関が提供するファクタリングサービス。銀行系より柔軟だが、独立系より審査がやや厳しい傾向。" },
      { term: "オンラインファクタリング", description: "申込み・審査・契約・入金まで全てオンラインで完結するファクタリングサービス。来店不要で全国から利用可能。OLTA・ペイトナー・ラボルなどが代表的。", link: { href: "/articles/online-factoring/", text: "詳しく見る" } },
      { term: "クラウドファクタリング", description: "OLTAが提供するオンライン完結型ファクタリングの名称。AIを活用した審査により、申込みから入金まで最短即日で完了する。2社間ファクタリングのみ対応。" },
      { term: "相見積もり", reading: "あいみつもり", description: "複数のファクタリング会社に同時に見積もりを依頼して、手数料や条件を比較すること。相見積もりにより手数料が2〜5%下がることもあり、必ず行うべき基本テクニック。" },
      { term: "審査通過率", description: "ファクタリング会社に申し込んだ案件のうち、審査を通過した割合。アクセルファクターの93%超など、高い通過率を公表している会社がある。" },
      { term: "買取可能額", description: "ファクタリング会社が1件の取引で買い取れる売掛債権の金額範囲。1万円から上限なしまで会社によって大きく異なる。", link: { href: "/articles/amount-hub/", text: "詳しく見る" } },
      { term: "入金スピード", description: "ファクタリングの申し込みから口座に入金されるまでの時間。最短10分（ペイトナー）から数営業日まで会社によって異なる。急ぎの資金調達では重要な比較ポイント。" },
    ],
  },
];

const schemaFaqs = [
  { q: "ファクタリングとは何ですか？", a: "企業が保有する売掛債権（請求書）をファクタリング会社に売却して、支払期日前に現金化する資金調達方法です。" },
  { q: "ノンリコースとは何ですか？", a: "償還請求権なしのファクタリング契約。売掛先が支払い不能になっても、利用者に返金義務がない形式です。" },
  { q: "2社間と3社間ファクタリングの違いは？", a: "2社間は売掛先に通知不要で手数料5〜18%、3社間は売掛先の承諾が必要で手数料1〜9%です。" },
  { q: "支払いサイトとは何ですか？", a: "取引成立から代金支払いまでの期間。30日・60日・90日などがあり、長いほどファクタリングの活用価値が高い。" },
  { q: "ファクタリングの手数料は経費になりますか？", a: "はい、「売上債権売却損」として経費（損金）に計上できます。消費税は非課税です。" },
];

/* ── Structured Data ──────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "ファクタリング用語集｜知っておきたい専門用語50選",
      datePublished: "2026-04-28",
      dateModified: "2026-04-28",
      author: { "@type": "Organization", name: "ファクタリングパートナー編集部" },
      publisher: {
        "@type": "Organization",
        name: "ファクタリングパートナー",
        url: "https://factoring-partner.pages.dev",
      },
      description:
        "ファクタリングに関する専門用語50語を初心者にもわかりやすく解説します。",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://factoring-partner.pages.dev/articles/glossary/",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: schemaFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
        { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" },
        { "@type": "ListItem", position: 3, name: "ファクタリング用語集" },
      ],
    },
  ],
};

/* ── Page ─────────────────────────────────────────── */

export default function GlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Breadcrumb
          items={[
            { href: "/", label: "ホーム" },
            { href: "/articles/", label: "コラム" },
            { label: "ファクタリング用語集" },
          ]}
        />

        <h1 className="mb-6 text-2xl font-bold text-[#1e3a5f] md:text-3xl">
          ファクタリング用語集
        </h1>

        <p className="mb-8 text-base leading-relaxed text-gray-700">
          ファクタリングに関する専門用語を50語厳選し、カテゴリ別にわかりやすく解説します。ファクタリングを初めて利用する方や、契約書の内容を理解したい方の参考にしてください。
        </p>

        {/* ── 目次 ─── */}
        <nav className="mb-10 rounded-lg border border-[#d4dbe6] bg-white p-6">
          <h2 className="mb-4 text-base font-bold text-[#1e3a5f]">カテゴリ別目次</h2>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {termCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex items-center gap-2 rounded-lg border border-[#d4dbe6] px-3 py-2 text-sm font-semibold text-[#1e3a5f] hover:bg-[#f7f9fc] transition-colors"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2a7a6e] text-xs font-bold text-white">
                  {cat.terms.length}
                </span>
                {cat.title}
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            全{termCategories.reduce((sum, c) => sum + c.terms.length, 0)}語の用語を掲載しています。
          </p>
        </nav>

        {/* ── 用語カテゴリ別 ─── */}
        {termCategories.map((cat) => (
          <section key={cat.id} id={cat.id} className="mb-12">
            <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
              {cat.title}（{cat.terms.length}語）
            </h2>
            <div className="space-y-4">
              {cat.terms.map((t, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[#d4dbe6] bg-white p-5"
                >
                  <div className="mb-2 flex items-baseline gap-2">
                    <h3 className="text-base font-bold text-[#1e3a5f]">
                      {t.term}
                    </h3>
                    {t.reading && (
                      <span className="text-xs text-gray-500">（{t.reading}）</span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {t.description}
                  </p>
                  {t.link && (
                    <Link
                      href={t.link.href}
                      className="mt-2 inline-block text-xs font-semibold text-[#e87c3e] hover:underline"
                    >
                      {t.link.text} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* ── よく混同される用語の比較 ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            よく混同される用語の比較
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-5">
              <h3 className="mb-3 font-bold text-[#2a7a6e]">ファクタリング vs 手形割引</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-[#d4dbe6] px-3 py-2 text-left">比較項目</th>
                      <th className="border border-[#d4dbe6] px-3 py-2 text-left">ファクタリング</th>
                      <th className="border border-[#d4dbe6] px-3 py-2 text-left">手形割引</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-[#d4dbe6] px-3 py-2">対象</td><td className="border border-[#d4dbe6] px-3 py-2">売掛債権（請求書）</td><td className="border border-[#d4dbe6] px-3 py-2">約束手形</td></tr>
                    <tr><td className="border border-[#d4dbe6] px-3 py-2">法的性質</td><td className="border border-[#d4dbe6] px-3 py-2">債権売買</td><td className="border border-[#d4dbe6] px-3 py-2">手形の裏書譲渡</td></tr>
                    <tr><td className="border border-[#d4dbe6] px-3 py-2">遡求権</td><td className="border border-[#d4dbe6] px-3 py-2">なし（ノンリコース）</td><td className="border border-[#d4dbe6] px-3 py-2">あり</td></tr>
                    <tr><td className="border border-[#d4dbe6] px-3 py-2">信用情報</td><td className="border border-[#d4dbe6] px-3 py-2">影響なし</td><td className="border border-[#d4dbe6] px-3 py-2">影響あり</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-5">
              <h3 className="mb-3 font-bold text-[#2a7a6e]">ファクタリング vs ABL</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-[#d4dbe6] px-3 py-2 text-left">比較項目</th>
                      <th className="border border-[#d4dbe6] px-3 py-2 text-left">ファクタリング</th>
                      <th className="border border-[#d4dbe6] px-3 py-2 text-left">ABL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-[#d4dbe6] px-3 py-2">取引形態</td><td className="border border-[#d4dbe6] px-3 py-2">債権の売買</td><td className="border border-[#d4dbe6] px-3 py-2">担保融資</td></tr>
                    <tr><td className="border border-[#d4dbe6] px-3 py-2">バランスシート</td><td className="border border-[#d4dbe6] px-3 py-2">負債にならない</td><td className="border border-[#d4dbe6] px-3 py-2">負債になる</td></tr>
                    <tr><td className="border border-[#d4dbe6] px-3 py-2">審査対象</td><td className="border border-[#d4dbe6] px-3 py-2">売掛先の信用力</td><td className="border border-[#d4dbe6] px-3 py-2">利用者の信用力</td></tr>
                    <tr><td className="border border-[#d4dbe6] px-3 py-2">コスト</td><td className="border border-[#d4dbe6] px-3 py-2">手数料（高め）</td><td className="border border-[#d4dbe6] px-3 py-2">金利（低め）</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-5">
              <h3 className="mb-3 font-bold text-[#2a7a6e]">ノンリコース vs ウィズリコース</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-[#d4dbe6] px-3 py-2 text-left">比較項目</th>
                      <th className="border border-[#d4dbe6] px-3 py-2 text-left">ノンリコース</th>
                      <th className="border border-[#d4dbe6] px-3 py-2 text-left">ウィズリコース</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-[#d4dbe6] px-3 py-2">償還請求権</td><td className="border border-[#d4dbe6] px-3 py-2">なし</td><td className="border border-[#d4dbe6] px-3 py-2">あり</td></tr>
                    <tr><td className="border border-[#d4dbe6] px-3 py-2">リスク負担</td><td className="border border-[#d4dbe6] px-3 py-2">ファクタリング会社</td><td className="border border-[#d4dbe6] px-3 py-2">利用者</td></tr>
                    <tr><td className="border border-[#d4dbe6] px-3 py-2">手数料</td><td className="border border-[#d4dbe6] px-3 py-2">やや高い</td><td className="border border-[#d4dbe6] px-3 py-2">やや低い</td></tr>
                    <tr><td className="border border-[#d4dbe6] px-3 py-2">法的分類</td><td className="border border-[#d4dbe6] px-3 py-2">債権売買</td><td className="border border-[#d4dbe6] px-3 py-2">実質的に融資</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ── 用語を理解するためのポイント ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            ファクタリング用語を理解するためのポイント
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-5">
              <h3 className="mb-2 font-bold text-[#1e3a5f]">契約前に必ず確認すべき用語</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                ファクタリングの契約書には専門用語が多く登場します。特に「償還請求権（ノンリコース/ウィズリコース）」「債権譲渡登記」「掛け目」の3つは、契約内容を左右する重要な用語です。契約前にこれらの意味を理解しておくことで、不利な条件での契約を避けられます。
              </p>
            </div>
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-5">
              <h3 className="mb-2 font-bold text-[#1e3a5f]">会計処理で使う用語</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                ファクタリングの会計処理では「売上債権売却損」「オフバランス」などの用語が出てきます。確定申告や決算時に困らないよう、事前に顧問税理士に相談するか、会計処理の記事を参考にしてください。
              </p>
            </div>
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-5">
              <h3 className="mb-2 font-bold text-[#1e3a5f]">比較検討で使う用語</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                ファクタリング会社を比較する際は「手数料率」「審査通過率」「入金スピード」「買取可能額」の4つの指標を確認します。また「2社間/3社間」の違いや「オンラインファクタリング」の有無も重要な比較ポイントです。
              </p>
            </div>
          </div>
        </section>

        {/* ── 五十音索引 ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            五十音順索引
          </h2>
          <div className="rounded-lg border border-[#d4dbe6] bg-white p-6">
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:grid-cols-3">
              {termCategories
                .flatMap((c) => c.terms)
                .map((t) => t.term)
                .sort((a, b) => a.localeCompare(b, "ja"))
                .map((term) => (
                  <p key={term} className="text-gray-700 py-1 border-b border-gray-100">
                    {term}
                  </p>
                ))}
            </div>
          </div>
        </section>

        {/* ── 関連ガイド ─── */}
        <section className="py-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">関連ガイド</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/articles/what-is-factoring/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">ファクタリングとは？ →</p>
              </Link>
              <Link href="/articles/faq-all/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">ファクタリングよくある質問50選 →</p>
              </Link>
              <Link href="/articles/beginners-guide/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">初心者ガイド →</p>
              </Link>
              <Link href="/articles/fee-guide/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">手数料ガイド →</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ── まとめ ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            まとめ
          </h2>
          <div className="rounded-lg bg-[#f7f9fc] p-6">
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              ファクタリングに関する専門用語を理解することで、より安心してサービスを利用できます。特に契約書に出てくる用語（償還請求権・債権譲渡登記・掛け目など）は事前に理解しておくことをおすすめします。
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              不明な用語がある場合は、ファクタリング会社の担当者に遠慮なく質問しましょう。親切に説明してくれない会社は避けた方が無難です。
            </p>
          </div>
        </section>

        {/* ── CTA ─── */}
        <div className="text-center">
          <Link
            href="/ranking/"
            className="inline-block rounded-lg bg-[#e87c3e] px-8 py-4 text-base font-bold text-white shadow-md transition-colors hover:bg-[#d06c2e]"
          >
            ファクタリング会社おすすめランキングを見る
          </Link>
        </div>
      </div>
    </>
  );
}
