import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 東京のおすすめ業者10選｜即日対応の会社比較",
  description:
    "東京でおすすめのファクタリング会社10社を徹底比較。即日入金対応・手数料の安さ・審査通過率で厳選。新宿・渋谷・銀座エリアの対面対応可能な業者から、オンライン完結型まで幅広く紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/tokyo/",
  },
  openGraph: {
    title: "ファクタリング 東京のおすすめ業者10選｜即日対応の会社比較",
    description:
      "東京エリアで即日対応可能なファクタリング会社10社を手数料・スピード・実績で比較。",
    url: "https://factoring-partner.pages.dev/articles/tokyo/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const tokyoAdvantages = [
  {
    title: "業者数が圧倒的に多く、競争が激しい",
    description:
      "東京には全国のファクタリング会社の約6割が集中しています。競争が激しいため手数料の価格競争が起こりやすく、利用者にとって有利な条件が提示されやすい環境です。複数社の見積もりを比較することで、より安い手数料での利用が可能になります。",
  },
  {
    title: "対面相談が可能な拠点が多い",
    description:
      "新宿・渋谷・銀座・品川・池袋など主要ターミナル駅の近くにオフィスを構えるファクタリング会社が多く、対面での相談が容易です。初めて利用する場合や、高額案件で不安がある場合は、対面で担当者と話すことで安心感が得られます。",
  },
  {
    title: "即日対応の会社が多い",
    description:
      "東京のファクタリング会社は即日対応を売りにしている会社が多く、午前中の申し込みで当日中の入金が可能なケースが多いです。急な資金需要にも柔軟に対応できます。",
  },
  {
    title: "専門特化型の会社が見つかりやすい",
    description:
      "建設業特化型、医療特化型、IT業界特化型など、業種に特化したファクタリング会社も東京に集中しています。自社の業種に精通した会社を選ぶことで、より適切な審査・条件提示が期待できます。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    area: "東京本社（港区芝大門）",
    features: "累計買取額1,300億円超の業界最大手級。2社間・3社間対応。最短2時間入金の実績あり。法人・個人事業主対応。オンライン完結可。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "圧倒的な実績と信頼性。高額案件にも対応（上限なし）。対面・オンラインどちらでも対応可能。初回から好条件が期待できる大手。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "東京（港区）",
    features: "一般社団法人が運営する非営利型のファクタリングサービス。関東財務局長・経済産業大臣の認定を取得。2社間・3社間に対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit: "非営利法人のため手数料が業界最安水準。認定機関の安心感。リピーター割引制度あり。オンライン完結可能。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型（東京運営）",
    features: "申し込みから入金まで完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。",
    fee: "1%〜",
    speed: "最短2時間",
    merit: "手数料の安さが魅力。書類が少なく手続きが簡単。オンラインで来店不要。面談不要でスピーディーな対応。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（新宿区）",
    features: "審査通過率93%以上。年間相談件数15,000件以上。少額（30万円〜）から対応。法人・個人事業主対応。オンライン完結可能。",
    fee: "2%〜",
    speed: "最短即日",
    merit: "業界トップクラスの審査通過率。赤字決算・税金滞納でも柔軟対応。初回から低手数料。新宿で対面相談も可能。",
  },
  {
    name: "PMG",
    area: "東京本社（新宿区）・大阪支社",
    features: "年間取引実績が豊富な大手。法人・個人事業主対応。2社間・3社間対応。対面コンサルティングが強み。リピーター優遇制度あり。",
    fee: "2%〜",
    speed: "最短即日",
    merit: "資金繰り全体の相談にも対応。新宿本社で対面相談可能。リピート利用で手数料が下がる。高額案件（数千万円単位）にも対応。",
  },
  {
    name: "OLTA（オルタ）",
    area: "東京（港区）",
    features: "クラウドファクタリングのパイオニア。完全オンラインで対面不要。AI審査で最短即日入金。銀行提携多数。法人・個人事業主対応。",
    fee: "2%〜9%",
    speed: "最短即日",
    merit: "銀行と提携しているため安心感が高い。AIによるスピーディーな審査。手数料上限が明確で分かりやすい。2社間専門。",
  },
  {
    name: "ベストファクター",
    area: "東京（新宿区）・大阪",
    features: "対面での丁寧なコンサルティングが特徴。法人・個人事業主対応。2社間・3社間対応。最短即日入金。審査通過率92%。",
    fee: "2%〜",
    speed: "最短即日",
    merit: "担当者との対面面談で安心して利用できる。資金繰りの相談から対応。審査通過率が高い。継続利用で手数料が下がる。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型（東京運営）",
    features: "フリーランス・個人事業主に特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業のグループ会社運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit: "手数料が一律で分かりやすい。超少額から利用可能。土日祝日も振込対応。上場企業グループの安心感。",
  },
  {
    name: "トップ・マネジメント",
    area: "東京（台東区）",
    features: "創業15年以上の老舗。累計取引社数5万社超。2社間・3社間対応。対面・オンラインどちらも対応可能。法人専門。",
    fee: "3.5%〜",
    speed: "最短即日",
    merit: "長年の実績と豊富な審査ノウハウ。高額案件に強い。注文書ファクタリングにも対応。業界知識が豊富で丁寧な対応。",
  },
  {
    name: "ペイトナーファクタリング",
    area: "オンライン完結型（東京運営）",
    features: "フリーランス・個人事業主特化。最短10分審査。初回利用は最大25万円まで。2回目以降は上限アップ。完全オンライン。",
    fee: "10%固定",
    speed: "最短10分",
    merit: "審査スピードが業界最速クラス。手続きが極めて簡単。少額利用に最適。手数料が一律で分かりやすい。",
  },
];

const areaGuide = [
  {
    area: "新宿エリア",
    description:
      "アクセルファクター、PMG、ベストファクターなど大手ファクタリング会社の本社が集中するエリア。JR新宿駅から徒歩圏内に複数の会社があり、1日で複数社を回って見積もり比較することも可能です。",
  },
  {
    area: "銀座・日本橋エリア",
    description:
      "金融機関が集まるエリアにファクタリング会社も点在。法人向けの高額案件に強い会社が多い傾向です。銀行融資の相談と並行してファクタリングの見積もりを取りたい場合に便利なエリアです。",
  },
  {
    area: "渋谷・品川エリア",
    description:
      "IT系・スタートアップ向けのファクタリング会社が多いエリア。テクノロジーを活用したオンライン完結型のサービスを提供する会社が増えています。",
  },
  {
    area: "港区エリア",
    description:
      "ビートレーディング、OLTA、日本中小企業金融サポート機構など大手・信頼性の高い会社が集まるエリア。業界最大手級の会社が揃っており、大口案件の相談にも適しています。",
  },
];

const faqs = [
  {
    question: "東京でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "東京には多くのファクタリング会社がありますが、選ぶ際のポイントは①手数料の安さ（相場：2社間5〜18%、3社間1〜9%）②即日入金の可否③対面相談の可否④業種への理解度⑤口コミ・実績の5点です。東京は競争が激しいため、必ず3社以上の見積もりを比較しましょう。",
  },
  {
    question: "東京のファクタリング会社は地方の企業でも利用できますか？",
    answer:
      "はい、東京のファクタリング会社のほとんどがオンラインまたは郵送での手続きに対応しており、全国どこからでも利用可能です。地方企業が東京の会社を利用するメリットとして、競争環境による低手数料、豊富な審査ノウハウ、多様なサービスラインナップが挙げられます。",
  },
  {
    question: "東京で即日入金してもらうにはどうすればいい？",
    answer:
      "即日入金を希望する場合は、午前中（できれば10時まで）に申し込みと必要書類の提出を完了させることが重要です。身分証明書・請求書・通帳コピーの3点を事前に準備しておき、オンライン対応の会社を選ぶとスムーズです。ビートレーディングやQuQuMoは最短2時間での入金実績があります。",
  },
  {
    question: "東京のファクタリング会社で対面相談できるところは？",
    answer:
      "アクセルファクター（新宿）、PMG（新宿）、ベストファクター（新宿）、ビートレーディング（港区）、トップ・マネジメント（台東区）などが対面相談に対応しています。事前予約制の場合が多いため、電話またはWebで予約してから訪問しましょう。",
  },
  {
    question: "東京のファクタリング手数料の相場は？",
    answer:
      "東京のファクタリング手数料の相場は、2社間で5%〜18%、3社間で1%〜9%程度です。東京は業者間の競争が激しいため、全国平均よりやや安い傾向があります。特に複数社の見積もりを比較交渉することで、さらに有利な条件を引き出せる可能性が高いです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリング 東京のおすすめ業者10選｜即日対応の会社比較",
  description:
    "東京エリアで即日対応可能なファクタリング会社10社を手数料・スピード・実績で比較。",
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
    "@id": "https://factoring-partner.pages.dev/articles/tokyo/",
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
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://factoring-partner.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "コラム",
      item: "https://factoring-partner.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "東京のファクタリング会社",
      item: "https://factoring-partner.pages.dev/articles/tokyo/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function TokyoPage() {
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
          { label: "コラム", href: "/articles/" },
          { label: "東京のファクタリング会社" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            エリアガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 東京のおすすめ業者10選
            <br className="hidden md:block" />
            即日対応の会社比較
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            東京エリアで利用できるファクタリング会社を手数料・入金スピード・実績で徹底比較。対面相談可能な会社からオンライン完結型まで、目的別に最適な会社が見つかります。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#advantages" className="hover:underline">
                1. 東京でファクタリングを利用するメリット
              </a>
            </li>
            <li>
              <a href="#recommended" className="hover:underline">
                2. 東京のおすすめファクタリング会社10選
              </a>
            </li>
            <li>
              <a href="#area-guide" className="hover:underline">
                3. エリア別ガイド
              </a>
            </li>
            <li>
              <a href="#how-to-choose" className="hover:underline">
                4. 東京での業者選びのポイント
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:underline">
                5. 利用の流れ
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 東京でファクタリングを利用するメリット ─── */}
        <section id="advantages" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            東京でファクタリングを利用するメリット
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            東京は日本のファクタリング業界の中心地であり、全国のファクタリング会社の約6割が都内に拠点を置いています。利用者にとって多くのメリットがあります。
          </p>
          <div className="space-y-4">
            {tokyoAdvantages.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-secondary/30 bg-teal-50 p-6"
              >
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ10選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            東京のおすすめファクタリング会社10選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            東京で利用できるファクタリング会社の中から、手数料・入金スピード・審査通過率・実績を総合的に評価し、おすすめ10社を厳選しました。
          </p>
          <div className="space-y-6">
            {recommendedCompanies.map((company, index) => (
              <div
                key={company.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">
                      {company.name}
                    </h3>
                    <p className="mt-1 text-xs text-text-light">
                      拠点：{company.area}
                    </p>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {company.features}
                    </p>
                    <div className="mt-4 grid gap-3 rounded-lg bg-section-bg p-4 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold text-text-light">手数料</p>
                        <p className="font-bold text-primary">{company.fee}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-light">
                          入金スピード
                        </p>
                        <p className="font-bold text-secondary">{company.speed}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-text-light">
                      <strong className="text-text-main">おすすめポイント：</strong>
                      {company.merit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── エリア別ガイド ─── */}
        <section id="area-guide" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            エリア別ガイド
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            東京都内のエリア別にファクタリング会社の特徴をまとめました。対面相談を希望する場合は、アクセスしやすいエリアの会社を選びましょう。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {areaGuide.map((item) => (
              <div
                key={item.area}
                className="rounded-lg border border-accent/30 bg-orange-50 p-5"
              >
                <h3 className="mb-3 font-bold text-accent">{item.area}</h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            東京での業者選びのポイント
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            東京には数多くのファクタリング会社がありますが、すべてが優良とは限りません。以下のポイントを押さえて会社を選びましょう。
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">
                複数社から見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                東京は業者間の競争が激しいため、複数社から見積もりを取ることで手数料を下げられる可能性が高いです。最低でも3社、可能であれば5社程度の見積もりを比較しましょう。同じ売掛金でも会社によって手数料が5%以上異なることがあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">
                会社の実在性を確認する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                東京のオフィスビルに所在地を置いているように見えて、実際にはバーチャルオフィスで実体がない悪徳業者も存在します。国税庁の法人番号公表サイトで法人登録を確認し、可能であれば訪問して実態を確認しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">
                契約内容を細部まで確認する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                手数料以外に事務手数料・登記費用・振込手数料などが発生する場合があります。見積もりの段階で「総額でいくら差し引かれるのか」を明確に確認しましょう。また、償還請求権（リコース）の有無も重要な確認ポイントです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">
                口コミ・評判を調べる
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                Googleの口コミやSNSでの評判を確認しましょう。極端に良い評価ばかりの場合はサクラの可能性もあるため、具体的な利用体験が書かれた口コミを参考にしてください。知人や取引先からの紹介も信頼性の高い情報源です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            利用の流れ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            東京のファクタリング会社を利用する際の一般的な流れを解説します。オンライン完結型と対面型で若干異なりますが、基本的な手順は同じです。
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-bold text-text-main">問い合わせ・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  電話・Web・LINEなどで問い合わせ。売掛金の金額・売掛先・希望入金日を伝えます。この段階で概算の手数料を教えてくれる会社も多いです。複数社に同時に問い合わせて見積もりを比較することをおすすめします。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  身分証明書・請求書・通帳コピーの3点が基本。会社によっては決算書や登記簿謄本が求められる場合もあります。書類はメール・アップロード・FAX・対面で提出可能です。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり提示</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  売掛先の信用力や売掛金の内容を審査。最短30分〜数時間で見積もりが出ます。手数料率・差引額・振込額を確認し、不明点があれば質問しましょう。見積もり段階ではキャンセル可能です。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                4
              </span>
              <div>
                <h3 className="font-bold text-text-main">契約締結・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  見積もりに同意したら契約を締結。電子契約またはオフィスでの対面契約。契約後、最短即日で指定口座に入金されます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 東京の業界動向 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            東京のファクタリング業界動向
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            東京のファクタリング業界は近年、大きく変化しています。特に以下のトレンドが顕著です。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">オンライン完結型の台頭</strong>：コロナ禍以降、対面不要のオンライン完結型サービスが急増。OLTA、QuQuMo、ラボルなどが代表的です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">AI審査の導入</strong>：AIを活用した自動審査システムの導入が進み、審査時間の短縮と手数料の低下が実現しています</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">銀行系サービスの参入</strong>：メガバンクや地方銀行がファクタリングサービスに参入し、銀行の信用力を活かした低手数料サービスが増えています</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">フリーランス向け少額サービス</strong>：1万円〜30万円の少額ファクタリングに対応するサービスが増え、個人事業主でも気軽に利用できるようになっています</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-text-light">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/osaka/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">大阪のファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                関西エリア対応のおすすめ業者8選
              </p>
            </Link>
            <Link
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">
                手数料を安くする5つのコツも紹介
              </p>
            </Link>
            <Link
              href="/articles/instant-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">即日ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                最短即日入金の会社と必要な準備
              </p>
            </Link>
            <Link
              href="/articles/what-is-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングとは？</p>
              <p className="mt-1 text-sm text-text-light">
                仕組み・種類・メリットを基本から解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            東京のファクタリング会社を一括比較する
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で東京のファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
