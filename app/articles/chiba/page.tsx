import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 千葉のおすすめ業者5選｜千葉県全域対応",
  description:
    "千葉でおすすめのファクタリング会社5社を徹底比較。京葉工業地域の製造業や港湾物流・建設業の資金繰りに使えるオンライン完結型サービスを紹介。千葉県全域対応の会社を手数料・入金スピードで厳選。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/chiba/",
  },
  openGraph: {
    title: "ファクタリング 千葉のおすすめ業者5選｜千葉県全域対応",
    description: "千葉・千葉県全域のファクタリング会社5社を手数料・スピードで比較。",
    url: "https://hyogo-shihoushoshi.jp/articles/chiba/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const chibaFeatures = [
  {
    title: "東京隣接と京葉工業地域の企業集積",
    description:
      "千葉県は東京に隣接し、東京湾岸には京葉工業地域が広がっています。石油化学・鉄鋼などの素材・エネルギー系の工場が集積しており、設備工事や保守を担う下請け・協力会社の資金需要が大きいエリアです。都内のファクタリング会社へのアクセスも良好です。",
  },
  {
    title: "港湾・空港を核とした物流業のニーズ",
    description:
      "千葉県は千葉港などの港湾や成田国際空港を擁し、運送・倉庫・航空貨物関連の事業者が多い地域です。物流業は燃料費や人件費の先行支出が大きい一方で売掛金の入金サイトが長くなりがちなため、ファクタリングで資金繰りを改善する事業者が多くいます。",
  },
  {
    title: "オンライン完結で東京の大手も利用可能",
    description:
      "千葉から東京の大手ファクタリング会社へは対面での相談も可能ですが、オンライン完結型なら来店不要で利用できます。県内の選択肢に限定せず、東京の大手も含めて比較することで、手数料の比較幅が広がります。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    area: "東京本社（オンライン対応）",
    features:
      "業界最大手級。累計買取額1,300億円超。2社間・3社間対応。最短2時間入金。法人・個人事業主対応。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "大手ならではの安定感。千葉からは都内本社への対面相談もオンライン利用も選べる。高額案件にも上限なし。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "業界トップクラスの審査通過率。赤字決算・税金滞納でも柔軟対応。千葉からオンラインで即日入金も可能。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "手数料の安さが魅力。書類が少なく手続きが簡単。千葉県全域から来店不要で利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利法人ゆえの低手数料。認定機関の安心感。千葉の中小企業にもおすすめ。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "超少額から利用可能。土日祝も振込対応。手数料一律で明瞭。千葉のフリーランスに最適。",
  },
];

const chibaIndustries = [
  {
    industry: "建設業",
    description:
      "千葉県は住宅開発や都市インフラ整備の工事が多く、建設業のファクタリング利用が盛んです。工事完了から入金までの60〜120日の資金ギャップをファクタリングで解消する事業者が多くいます。",
  },
  {
    industry: "製造業",
    description:
      "京葉工業地域には石油化学・鉄鋼などの大規模な工場が集積しており、設備の保守・改修を担う下請け・協力会社が多数あります。大手取引先との入金サイトの長さをファクタリングで埋める需要があります。",
  },
  {
    industry: "運送・物流業",
    description:
      "千葉港や成田国際空港を核に、運送・倉庫・貨物取扱の事業者が多いエリアです。燃料費・人件費・車両費の先行支出に対し、運賃の入金待ち期間をファクタリングでつなぐ活用が広がっています。",
  },
  {
    industry: "医療・介護",
    description:
      "千葉県でも医療・介護事業者のファクタリング需要が高まっています。診療報酬・介護報酬は入金まで約2ヶ月かかるため、その間の人件費や運営費の支払いにファクタリングが活用されています。",
  },
];

const faqs = [
  {
    question: "千葉でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "千葉で選ぶ際は、①オンラインで完結できるか②手数料が相場範囲内（2社間8〜18%、3社間1〜9%が目安）か③自社の業種に対応しているか④即日入金に対応しているか⑤実績と口コミが豊富かの5点を確認しましょう。東京の大手も対面・オンラインの両方で利用できるため、選択肢を広く持つことが重要です。",
  },
  {
    question: "千葉市以外（船橋・柏・市川・成田など）からも利用できますか？",
    answer:
      "はい、オンライン完結型のファクタリング会社であれば、船橋・柏・市川・松戸・成田・木更津など千葉県全域から利用可能です。書類提出もオンラインで完結するため、地理的な制約は一切ありません。即日入金にも対応しています。",
  },
  {
    question: "千葉のファクタリング手数料の相場は？",
    answer:
      "千葉のファクタリング手数料は、2社間で8%〜18%、3社間で1%〜9%程度が一般的な目安で、東京とほぼ同水準です（実際の料率は会社・契約により異なります）。オンライン対応の全国展開型会社を利用することで、地域差なく競争力のある手数料で利用できます。複数社の見積もりを必ず比較しましょう。",
  },
  {
    question: "千葉で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングでは最短2時間、QuQuMoでも最短2時間での入金実績があります。オンライン完結型のサービスを利用すれば、千葉にいながら即日入金が実現できます。午前中の申し込みがポイントです。",
  },
  {
    question: "運送業・物流業でファクタリングを利用する際の注意点は？",
    answer:
      "運送業の場合、運送委託契約に基づく売掛金（運賃）が対象になります。注意点は①役務提供が完了した確定債権が対象②荷主や元請け運送会社の信用力が審査に影響する③下請法の適用がある取引は支払サイトに制限がある④燃料費高騰期は資金計画に余裕を持つ点です。運送業の利用実績がある会社を選ぶとスムーズです。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ファクタリング 千葉のおすすめ業者5選｜千葉県全域対応",
  description: "千葉・千葉県全域のファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/chiba/" },
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
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://hyogo-shihoushoshi.jp/" },
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://hyogo-shihoushoshi.jp/articles/" },
    { "@type": "ListItem", position: 3, name: "千葉のファクタリング会社", item: "https://hyogo-shihoushoshi.jp/articles/chiba/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ChibaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "千葉のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 千葉のおすすめ業者5選
            <br className="hidden md:block" />
            千葉県全域対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            千葉・千葉県全域で利用できるファクタリング会社を厳選紹介。東京で対面相談可能な会社から、オンライン完結型の大手まで、手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 千葉でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 千葉のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 千葉の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 千葉での業者選びのポイント</a></li>
            <li><a href="#chiba-finance" className="hover:underline">5. 千葉の資金調達事情</a></li>
            <li><a href="#public-support" className="hover:underline">6. 千葉県・千葉市で使える公的支援機関・制度</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">千葉でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">千葉は東京に隣接し、京葉工業地域や港湾・空港物流を抱える産業エリア。ファクタリングの選択肢が豊富な地域です。</p>
          <div className="space-y-4">
            {chibaFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">千葉のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">千葉・千葉県全域で利用できるファクタリング会社を厳選して5社紹介します。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">千葉の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">千葉エリアの主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {chibaIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">千葉での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">千葉でファクタリング会社を選ぶ際に確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">東京の大手とオンラインで比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                千葉の地場ファクタリング会社は選択肢が限られます。東京の大手はオンラインで全国対応しているため、手数料やサービス内容を比較し、最も条件の良い会社を選びましょう。最低3社以上の見積もりを取ることが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">建設業・物流業に強い会社を選ぶ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                千葉は建設業や運送・物流業の事業者が多いエリアです。建設業の出来高払い、運送業の運賃債権など業種特有の売掛金形態があるため、自社の業種への理解がある会社を選ぶと審査がスムーズに進みます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">入金スピードを重視する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                急ぎの資金需要が多い場合は、即日入金に対応した会社を優先的に選びましょう。オンライン完結型は審査が早く、午前中に申し込めば当日中の入金が期待できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">悪徳業者への注意</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングを装った違法な貸金業者には注意が必要です。契約書を交付しない、手数料が極端に安い・高い、会社の所在地が不明確といった特徴がある場合は利用を避けましょう。実績のある大手を選ぶことが安全です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 千葉の資金調達事情 ─── */}
        <section id="chiba-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">千葉の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            千葉県は東京に近く金融機関の選択肢が比較的多い一方、中小企業や下請け企業にとっては銀行融資の審査ハードルが課題になりがちです。ファクタリングは銀行融資を補完する手段として、千葉の中小企業に浸透しつつあります。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">千葉銀行・京葉銀行など地銀の活用</strong>：地方銀行との取引がある場合、銀行系の資金調達サービスも検討価値があります。メインバンクに相談してみましょう</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">千葉県の制度融資</strong>：県の中小企業者向け融資制度は低利ですが審査に時間がかかります。急ぎの場合はファクタリングで対応し、中長期的には制度融資を活用するのが賢い方法です</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">補助金との併用</strong>：各種補助金の入金待ち期間にファクタリングを活用することで、事業を止めることなく資金繰りを維持できます</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 千葉の経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">千葉の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            千葉市は県庁所在地であり政令指定都市。幕張新都心をはじめとした業務集積に加え、東京湾岸の京葉工業地域、千葉港・成田国際空港の物流網を背景に、多様な業種でのファクタリング活用が広がっています。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">京葉工業地域の素材・エネルギー産業</h3>
              <p className="text-sm leading-relaxed text-text-light">
                東京湾岸には石油化学・鉄鋼などの大規模プラントが集積しており、設備の建設・保守・改修を担う協力会社が多数あります。大手取引先との取引は入金サイトが長くなりがちなため、売掛金のファクタリングで資金を確保するケースが増えています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">港湾・空港物流</h3>
              <p className="text-sm leading-relaxed text-text-light">
                千葉港や成田国際空港を核に、運送・倉庫・貨物取扱の事業者が集まっています。燃料費や人件費の先行支出が大きい物流業では、運賃の入金待ち期間をファクタリングでつないで資金繰りを安定させることが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">建設・都市開発</h3>
              <p className="text-sm leading-relaxed text-text-light">
                千葉県は住宅開発や都市インフラ整備の工事需要が続くエリアです。公共工事や大型案件は入金サイトが長いため、外注費・材料費の支払いをファクタリングでつなぐ建設業者が多くいます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 千葉県・千葉市の公的支援機関・制度 ─── */}
        <section id="public-support" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">千葉県・千葉市で使える公的支援機関・制度</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、千葉県・千葉市の公的支援機関と制度を紹介します。相談はいずれも原則無料です。急ぎの資金ギャップはファクタリング、中長期の資金計画は公的支援という使い分けが基本です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">千葉県の中小企業者向け融資制度（制度融資）</h3>
              <p className="text-sm text-text-light">千葉県・金融機関・信用保証協会が連携して行う中小企業者向けの融資制度。低利で事業資金を借りられます。申込から実行まで時間がかかるため、急ぎの支払いはファクタリングでつなぎ、中長期の運転資金は制度融資でまかなうのが有効です。</p>
              <p className="mt-2 text-sm"><a href="https://www.pref.chiba.lg.jp/keishi/chuushou-yuushi/yuushiseido/chuushou/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">千葉県公式サイト：県の中小企業者向け融資制度</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">千葉県信用保証協会</h3>
              <p className="text-sm text-text-light">中小企業が金融機関から融資を受ける際の保証を担う公的機関。保証付き融資は低コストですが審査に時間を要するため、入金までのつなぎにファクタリングを併用する使い分けが可能です。</p>
              <p className="mt-2 text-sm"><a href="https://www.chiba-cgc.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">千葉県信用保証協会 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">千葉県よろず支援拠点</h3>
              <p className="text-sm text-text-light">国が全都道府県に設置した無料の経営相談所。資金繰り・売上拡大など経営全般を何度でも無料で相談できます。ファクタリング利用の前に資金繰り全体を専門家に整理してもらいたいときの相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://chibayorozu.go.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">千葉県よろず支援拠点 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">公益財団法人千葉市産業振興財団</h3>
              <p className="text-sm text-text-light">千葉市の中小企業支援機関。経営相談・専門家派遣・創業支援などを行っています。千葉市内の事業者が身近に経営・資金繰りの相談をしたい場合の窓口です。</p>
              <p className="mt-2 text-sm"><a href="https://www.chibashi-sangyo.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">千葉市産業振興財団 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫（千葉県内の店舗）</h3>
              <p className="text-sm text-text-light">政府系金融機関で、小規模事業者や創業期でも利用しやすい低利融資を扱います。融資実行までの期間を要するため、即日性が必要な場面はファクタリング、恒常的な資金は公庫融資と役割を分けましょう。県内の店舗は公式の店舗案内から確認できます。</p>
              <p className="mt-2 text-sm"><a href="https://www.jfc.go.jp/n/branch/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">日本政策金融公庫 店舗案内</a></p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-light">※掲載している各機関・制度の情報とリンク先は、2026年7月に公式サイトで確認しています。最新の受付状況・条件は各公式サイトをご確認ください。</p>
        </section>

        {/* ── 利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">千葉でファクタリングを利用する手順</h2>
          <div className="space-y-3">
            {[
              { step: "複数社に見積もり依頼", description: "東京の大手とオンライン完結型を含め最低3社以上に見積もりを依頼。オンラインで簡単に申し込めます。" },
              { step: "必要書類の提出", description: "請求書・通帳コピー・身分証明書などをオンラインでアップロード。来店不要で手続きが完結します。" },
              { step: "審査・見積もり比較", description: "各社の手数料・条件を比較。手数料の総額で判断し、最も条件の良い会社を選びましょう。" },
              { step: "契約・入金", description: "電子契約でオンライン完結。最短即日で指定口座に入金されます。" },
              { step: "売掛金回収後の送金", description: "売掛先からの入金後、ファクタリング会社に送金して完了です。" },
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

        {/* ── まとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：千葉でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">東京の大手もオンラインで利用可能</strong>：千葉から都内へのアクセスは良好だが、オンライン完結型なら来店不要。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">建設業・物流業に強い会社を選ぶ</strong>：千葉は建設業・運送業の事業者が多い。業種への理解がある会社を選ぶと審査がスムーズ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">最低3社以上の見積もりを比較</strong>：手数料の総額で比較し、最も条件の良い会社を選ぶ。オンラインで簡単に見積もりが取れる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">地域の支援機関も併用</strong>：ファクタリングに加え、千葉県の制度融資・信用保証協会・公庫なども活用して資金繰りを安定させる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">ノンリコースを確認</strong>：償還請求権なし（ノンリコース）の会社を選び、安全な取引を心がける。</span></li>
            </ul>
          </div>
        </section>

                {/* ── 関連ツール・データ ─── */}
                <section className="mb-12">
                  <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
                    <p className="mb-3 font-bold text-primary">あわせて使いたいツール・データ</p>
                    <ul className="space-y-2 text-sm text-text-light">
                    <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
                    <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
                    <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
                    </ul>
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
            <Link href="/articles/yokohama/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">横浜のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">神奈川エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">おすすめ5選と活用事例</p>
            </Link>
            <Link href="/articles/logistics/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">物流・倉庫業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">配送代金の早期現金化</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">千葉のファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で千葉・千葉県全域のファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
