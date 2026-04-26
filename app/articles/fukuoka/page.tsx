import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 福岡のおすすめ業者5選｜九州エリア対応",
  description:
    "福岡でおすすめのファクタリング会社5社を徹底比較。博多・天神エリアの対面対応可能な業者やオンライン完結型サービスを紹介。九州全域対応の会社も含め、手数料・入金スピードで厳選。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/fukuoka/",
  },
  openGraph: {
    title: "ファクタリング 福岡のおすすめ業者5選｜九州エリア対応",
    description: "福岡・九州エリアのファクタリング会社5社を手数料・スピードで比較。",
    url: "https://factoring-partner.pages.dev/articles/fukuoka/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const fukuokaFeatures = [
  {
    title: "九州経済の中心地としての優位性",
    description:
      "福岡は九州・沖縄エリアの経済の中心地であり、多くのファクタリング会社が福岡に九州拠点を置いています。対面での相談が可能な会社が増えており、地方ならではの親身な対応が期待できます。",
  },
  {
    title: "建設業・製造業のニーズが高い",
    description:
      "九州は建設業や製造業が盛んなエリアで、入金サイトの長さに悩む事業者が多いです。ファクタリングによる資金繰り改善のニーズが高く、これらの業種に対応した会社も増えています。",
  },
  {
    title: "東京の大手もオンラインで利用可能",
    description:
      "福岡に拠点がなくても、東京の大手ファクタリング会社はオンラインで全国対応しています。福岡の地場企業と東京のオンライン対応会社を併用して見積もり比較することが賢い選び方です。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング 福岡支店",
    area: "福岡市博多区",
    features: "業界最大手級。福岡支店で対面相談可能。2社間・3社間対応。最短2時間入金。累計買取額1,300億円超。法人・個人事業主対応。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "福岡で対面相談ができる大手の安心感。九州エリアの企業との取引実績が豊富。高額案件にも上限なしで対応。",
  },
  {
    name: "アクセルファクター",
    area: "オンライン対応（東京本社）",
    features: "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。オンライン完結で来店不要。",
    fee: "2%〜",
    speed: "最短即日",
    merit: "業界トップクラスの審査通過率。赤字決算・税金滞納でも柔軟対応。福岡からオンラインで手軽に利用可能。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features: "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit: "手数料の安さが魅力。書類が少なく手続きが簡単。九州全域から来店不要で利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features: "一般社団法人が運営する非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit: "非営利法人のため手数料が業界最安水準。認定機関の安心感。九州の中小企業にもおすすめ。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features: "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit: "手数料一律で分かりやすい。超少額から利用可能。土日祝も振込対応。福岡のフリーランスに最適。",
  },
];

const kyushuIndustries = [
  {
    industry: "建設業",
    description: "九州の建設業は公共工事の比率が高く、入金サイトが長い傾向にあります。ファクタリングで工事着手前の資金を確保し、材料費・外注費の支払いに充てるケースが多いです。",
  },
  {
    industry: "製造業",
    description: "北九州工業地帯を中心に製造業が盛ん。材料費の仕入れ先への支払いと、完成品の納品後の入金タイミングのずれをファクタリングで解消できます。",
  },
  {
    industry: "農業・水産業",
    description: "九州は農業・水産業も盛んなエリア。収穫・漁獲シーズンと入金のタイミングのずれ、設備投資の資金需要にファクタリングが活用されています。",
  },
  {
    industry: "運送・物流業",
    description: "九州内の物流や本州への長距離輸送を担う運送業者が多く、燃料費・人件費の先払いに対してファクタリングでの資金調達ニーズがあります。",
  },
];

const faqs = [
  {
    question: "福岡でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "福岡で選ぶ際は、①福岡に拠点があり対面相談が可能か②オンラインで完結できるか③手数料が相場の範囲内か④九州の業種（建設・製造・農業など）に対応しているか⑤口コミ・実績が豊富かの5点を確認しましょう。福岡拠点の会社と東京のオンライン対応の会社を両方比較することをおすすめします。",
  },
  {
    question: "九州の他県（熊本・鹿児島など）からも利用できますか？",
    answer:
      "はい、オンライン完結型のファクタリング会社であれば、熊本・鹿児島・大分・宮崎・佐賀・長崎・沖縄など九州全域から利用可能です。対面相談を希望する場合は、ビートレーディング福岡支店など福岡に拠点がある会社を利用するか、出張対応してくれる会社を選びましょう。",
  },
  {
    question: "福岡のファクタリング手数料の相場は？",
    answer:
      "福岡のファクタリング手数料は、2社間で5%〜18%、3社間で1%〜9%程度で、東京・大阪とほぼ同水準です。オンライン対応の全国展開型の会社を利用することで、地域差なく競争力のある手数料で利用できます。複数社の見積もりを比較することで、より安い手数料を引き出しましょう。",
  },
  {
    question: "福岡で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディング福岡支店では最短2時間での入金実績があります。オンライン完結型のQuQuMoやアクセルファクターも即日入金に対応しています。午前中に申し込みと書類提出を完了させることで、当日中の入金が実現しやすくなります。",
  },
  {
    question: "個人事業主でも福岡でファクタリングを利用できますか？",
    answer:
      "はい、個人事業主でも利用できるファクタリング会社は多くあります。ラボル、アクセルファクター、QuQuMoなどは個人事業主にも対応しています。特にラボルは1万円から利用可能で、フリーランスや小規模事業者に適しています。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリング 福岡のおすすめ業者5選｜九州エリア対応",
  description: "福岡・九州エリアのファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/fukuoka/" },
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
    { "@type": "ListItem", position: 3, name: "福岡のファクタリング会社", item: "https://factoring-partner.pages.dev/articles/fukuoka/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function FukuokaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "福岡のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 福岡のおすすめ業者5選
            <br className="hidden md:block" />
            九州エリア対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            福岡・九州エリアで利用できるファクタリング会社を厳選紹介。博多・天神エリアで対面相談可能な会社から、オンライン完結型の大手まで、手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 福岡でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 福岡のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 九州の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 福岡での業者選びのポイント</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">福岡でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">福岡は九州経済の中心地であり、ファクタリング会社の九州拠点が集まるエリアです。地方ならではの特徴を押さえておきましょう。</p>
          <div className="space-y-4">
            {fukuokaFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">福岡のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">福岡・九州エリアで利用できるファクタリング会社を厳選して5社紹介します。</p>
          <div className="space-y-6">
            {recommendedCompanies.map((company, index) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">{company.name}</h3>
                    <p className="mt-1 text-xs text-text-light">拠点：{company.area}</p>
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
                    <p className="mt-3 text-sm leading-relaxed text-text-light">
                      <strong className="text-text-main">おすすめポイント：</strong>{company.merit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業種別ニーズ ─── */}
        <section id="industries" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">九州の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">九州エリアの主要業種ごとに、ファクタリングがどのように活用されているかを解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {kyushuIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">福岡での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">福岡でファクタリング会社を選ぶ際に押さえておきたいポイントを解説します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">福岡拠点の会社とオンライン対応の会社を比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                福岡に拠点がある会社は対面相談のメリットがありますが、選択肢が限られます。東京のオンライン完結型も含めて見積もりを取ることで、手数料の比較幅が広がります。最低3社以上の見積もりを比較しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">九州の業種に対応しているか確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                建設業・農業・水産業など九州特有の業種の場合、その業種に対応した審査ノウハウを持つ会社を選ぶことが重要です。業種特化型の会社は審査が柔軟で、より良い条件が期待できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">振込時間帯を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                東京の会社を利用する場合、審査が東京時間で行われるため、時差は影響しませんが、書類提出のタイミングによっては翌営業日の入金になることがあります。即日入金を希望する場合は、早めの時間帯に申し込みを完了させましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">悪徳業者に注意する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                福岡にも悪質なファクタリング業者は存在します。契約書を交付しない、手数料が極端に安い（または高い）、会社の実態が確認できないなどの特徴がある場合は利用を避けましょう。福岡県の消費生活センターへの相談も有効です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 九州の資金調達事情 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">九州の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            九州エリアは東京・大阪に比べて銀行融資の審査が厳しい傾向があり、特に中小企業や個人事業主にとって資金調達の選択肢が限られがちです。ファクタリングは銀行融資の代替手段として、また銀行融資と併用する資金調達手段として、九州の中小企業に浸透しつつあります。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">政府系金融機関の活用</strong>：日本政策金融公庫の九州支店は融資実績が豊富ですが、審査に2〜3週間かかります。急ぎの場合はファクタリングで対応し、中長期的には政府系融資を活用するのが賢い方法です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">地方銀行との関係</strong>：福岡銀行・西日本シティ銀行などの地方銀行との取引がある場合、銀行系ファクタリングサービスを利用できる可能性があります。取引銀行に相談してみましょう</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">補助金・助成金との併用</strong>：九州各県の補助金・助成金の入金待ち期間にファクタリングを活用することで、資金繰りを円滑にするケースもあります</span>
              </li>
            </ul>
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
            <Link href="/articles/tokyo/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">東京のファクタリング会社10選</p>
              <p className="mt-1 text-sm text-text-light">即日対応の会社を比較</p>
            </Link>
            <Link href="/articles/osaka/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">大阪のファクタリング会社8選</p>
              <p className="mt-1 text-sm text-text-light">関西エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">おすすめ5選と活用事例</p>
            </Link>
            <Link href="/articles/agriculture/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">農業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">補助金・売掛金の資金繰り改善</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">九州エリアのファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で福岡・九州エリアのファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
