import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング 福島市のおすすめ業者5選｜福島県全域対応",
  description:
    "福島市でおすすめのファクタリング会社5社を徹底比較。県北の製造業・果樹農家・建設業でも使えるオンライン完結型サービスを中心に、手数料・入金スピードで厳選。郡山・いわきなど福島県全域から利用できます。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/fukushima-city/",
  },
  openGraph: {
    title: "ファクタリング 福島市のおすすめ業者5選｜福島県全域対応",
    description: "福島市・福島県のファクタリング会社5社を手数料・スピードで比較。",
    url: "https://hyogo-shihoushoshi.jp/articles/fukushima-city/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const fukushimaFeatures = [
  {
    title: "県北の行政・商業の中心地",
    description:
      "福島市は福島県の県庁所在地であり、県北エリアの行政・商業の中心です。官公庁や金融機関の県内拠点が集まる一方、ファクタリング専業会社の店舗は多くないため、オンライン完結型サービスの活用が現実的な選択肢になります。",
  },
  {
    title: "製造業と果樹農業が地域経済の柱",
    description:
      "福島県は電子部品や輸送用機械などの製造業が盛んで、福島市周辺にも工場や協力企業が立地しています。また福島市は桃をはじめとする果樹の産地として全国的に知られ、製造・農業の両面で売掛金や出荷代金の入金待ちに伴う資金需要があります。",
  },
  {
    title: "東北新幹線で東京とつながる立地",
    description:
      "福島駅から東京駅までは東北新幹線で約1時間半。ただし、ファクタリングは対面に行かなくてもオンラインで完結できる時代です。東京の大手ファクタリング会社も福島市からそのまま利用でき、手数料の比較幅を広げられます。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    area: "東京本社（オンライン対応）",
    features:
      "業界最大手級。累計買取額1,300億円超。2社間・3社間対応。最短2時間入金。法人・個人事業主対応。仙台オフィスがあり東北全体をカバー。",
    fee: "2%〜",
    speed: "最短2時間",
    merit:
      "大手ならではの安定感と実績。福島市からはオンラインで完結でき、高額の売掛金にも上限なく対応。製造業・建設業の取引にも慣れています。",
  },
  {
    name: "アクセルファクター",
    area: "東京本社（オンライン対応）",
    features:
      "審査通過率93%以上。年間相談件数15,000件超。少額（30万円〜）対応。個人事業主対応。完全オンライン完結。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit:
      "審査通過率の高さが強み。赤字決算や税金滞納があっても柔軟に相談でき、福島市の中小企業でも即日資金化を狙えます。",
  },
  {
    name: "QuQuMo（ククモ）",
    area: "オンライン完結型",
    features:
      "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit:
      "書類2点で申し込める手軽さが魅力。福島県内のどこからでも来店不要で使え、手数料水準も低めです。",
  },
  {
    name: "日本中小企業金融サポート機構",
    area: "オンライン完結型",
    features:
      "一般社団法人運営の非営利型。関東財務局長・経済産業大臣認定。2社間・3社間対応。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit:
      "非営利法人ならではの低コスト運営。認定支援機関としての安心感があり、初めてファクタリングを使う福島の事業者にも向きます。",
  },
  {
    name: "ラボル",
    area: "オンライン完結型",
    features:
      "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit:
      "1万円からの超少額に対応し、土日祝も振込可能。福島市のフリーランスや一人親方の急な資金需要に使いやすいサービスです。",
  },
];

const fukushimaIndustries = [
  {
    industry: "製造業",
    description:
      "福島県は電子部品・デバイスや輸送用機械などの製造業が集積するエリアです。大手メーカーとの取引は入金サイトが長くなりがちで、材料費や外注費の先行支出とのギャップをファクタリングで埋める使い方が有効です。",
  },
  {
    industry: "農業（果樹）",
    description:
      "福島市は桃・梨・りんごなど果樹栽培が盛んな地域です。出荷代金の入金までの期間や、収穫期前の資材・人件費の支払いに対して、売掛債権を早期資金化して備えるケースがあります。",
  },
  {
    industry: "建設業",
    description:
      "公共工事や住宅関連工事を手がける建設業者は、工事完了から入金まで数十日〜数ヶ月の資金ギャップが生じやすい業種です。外注費や職人への支払いを待たせないために、ファクタリングが活用されています。",
  },
  {
    industry: "医療・介護",
    description:
      "高齢化が進む福島県では医療・介護分野の資金需要も安定的にあります。診療報酬・介護報酬は入金まで約2ヶ月かかるため、その間の人件費や運営費をファクタリングでまかなう事業者がいます。",
  },
];

const faqs = [
  {
    question: "福島市でファクタリング会社を選ぶ際のポイントは？",
    answer:
      "福島市で選ぶ際は、①オンラインで完結できるか②手数料が相場範囲内（2社間8〜18%、3社間1〜9%）か③自社の業種（製造・農業・建設など）への理解があるか④即日入金に対応しているか⑤運営実績が確認できるかの5点をチェックしましょう。市内に店舗を持つ専業会社は少ないため、全国対応のオンライン型を軸に比較するのが現実的です。",
  },
  {
    question: "郡山市やいわき市など福島県内の他市からも利用できますか？",
    answer:
      "はい、利用できます。オンライン完結型のファクタリング会社なら、郡山市・いわき市・会津若松市など福島県内のどこからでも申し込み可能です。書類提出から契約・入金まで全てオンラインで完了するため、地理的な制約はありません。",
  },
  {
    question: "福島市のファクタリング手数料の相場は？",
    answer:
      "福島市でも手数料の目安は全国水準と変わらず、2社間で8%〜18%、3社間で1%〜9%程度です。オンライン対応の全国展開型サービスを使えば、地方だからといって割高になることはありません。必ず複数社から見積もりを取り、手数料の総額で比較しましょう。",
  },
  {
    question: "福島市で即日入金は可能ですか？",
    answer:
      "はい、可能です。ビートレーディングやQuQuMoは最短2時間、ラボルは最短60分での入金に対応しています。オンライン完結型なら福島市に店舗がなくても即日資金化が狙えます。午前中の早い時間に申し込み、書類をすぐ提出できるよう準備しておくのがコツです。",
  },
  {
    question: "農業（果樹）でもファクタリングは使えますか？",
    answer:
      "使える場合があります。JAや卸売市場、加工業者などに対する出荷代金の債権が請求書等で確認できれば、買取対象になり得ます。ただし個人農家の場合は個人事業主対応の会社を選ぶ必要があり、債権の内容によっては断られることもあります。まずは請求書と通帳を用意し、個人事業主対応のオンライン型に相談してみましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "ファクタリング 福島市のおすすめ業者5選｜福島県全域対応",
  description: "福島市・福島県のファクタリング会社5社を手数料・スピードで比較。",
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/fukushima-city/" },
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
    { "@type": "ListItem", position: 3, name: "福島市のファクタリング会社", item: "https://hyogo-shihoushoshi.jp/articles/fukushima-city/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function FukushimaCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "福島市のファクタリング会社" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">エリアガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング 福島市のおすすめ業者5選
            <br className="hidden md:block" />
            福島県全域対応
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            福島市・福島県で利用できるファクタリング会社を厳選紹介。製造業・果樹農家・建設業の資金ギャップに使えるオンライン完結型を中心に、手数料と入金スピードで比較します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#features" className="hover:underline">1. 福島市でファクタリングを利用する特徴</a></li>
            <li><a href="#recommended" className="hover:underline">2. 福島市のおすすめファクタリング会社5選</a></li>
            <li><a href="#industries" className="hover:underline">3. 福島の業種別ニーズ</a></li>
            <li><a href="#how-to-choose" className="hover:underline">4. 福島市での業者選びのポイント</a></li>
            <li><a href="#fukushima-finance" className="hover:underline">5. 福島の資金調達事情</a></li>
            <li><a href="#public-support" className="hover:underline">6. 福島市・福島県で使える公的支援機関・制度</a></li>
            <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 特徴 ─── */}
        <section id="features" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">福島市でファクタリングを利用する特徴</h2>
          <p className="mb-8 leading-relaxed text-text-light">福島市は福島県の県庁所在地。製造業と果樹農業を軸とした地域経済のなかで、オンライン型ファクタリングの活用が広がっています。</p>
          <div className="space-y-4">
            {fukushimaFeatures.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">福島市のおすすめファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">福島市・福島県から利用できるファクタリング会社を厳選して5社紹介します。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">福島の業種別ニーズ</h2>
          <p className="mb-8 leading-relaxed text-text-light">福島市・福島県の主要業種ごとに、ファクタリングの活用方法を解説します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {fukushimaIndustries.map((item) => (
              <div key={item.industry} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.industry}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業者選びのポイント ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">福島市での業者選びのポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">福島市・福島県でファクタリング会社を選ぶ際に確認すべきポイントをまとめます。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">オンライン完結型を軸に比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                福島市内に店舗を構えるファクタリング専業会社は限られます。全国対応のオンライン完結型なら来店不要で、東京の大手とも条件を比較できます。最低3社以上から見積もりを取り、手数料の総額で判断しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">個人事業主・農業への対応可否を確認する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                果樹農家や一人親方など個人事業主の場合、法人専用の会社では申し込めません。ラボルやQuQuMoのように個人事業主対応を明示している会社を選ぶと、審査までスムーズに進みます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">入金スピードと必要書類のバランスを見る</h3>
              <p className="text-sm leading-relaxed text-text-light">
                支払期日が迫っている場合は、必要書類が少なく審査が早い会社が有利です。請求書と通帳だけで申し込める会社なら、書類集めに時間を取られず、当日中の入金も狙えます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">悪徳業者への注意</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングを装って実質的な貸付を行う違法業者に注意が必要です。契約書を渡さない、手数料の内訳を説明しない、償還請求権付きの契約を求めるといった業者は避け、実績を確認できる会社を選びましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── 福島の資金調達事情 ─── */}
        <section id="fukushima-finance" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">福島の資金調達事情とファクタリングの位置づけ</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            福島県の中小企業は地方銀行・信用金庫との取引が資金調達の中心ですが、融資は審査や実行までに時間がかかります。ファクタリングは融資を補完する「つなぎ」の手段として位置づけるのが基本です。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">地銀・信金との関係を大切にする</strong>：東邦銀行など地域金融機関との融資取引は低コストの資金調達手段です。ファクタリングは借入ではないため信用情報に影響せず、融資と併用できます</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">制度融資は時間、ファクタリングはスピード</strong>：県や市の制度融資は低利ですが、申込から実行まで数週間かかることがあります。急ぎの支払いはファクタリング、中長期の運転資金は制度融資と使い分けましょう</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">補助金の入金待ちにも活用できる</strong>：補助金・助成金は交付決定から入金まで期間が空きます。その間の外注費や仕入れ資金を売掛金の早期資金化でまかなう方法があります</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 福島市の経済圏 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">福島市の経済圏とファクタリング活用シーン</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            福島市は人口約27万人、県北エリアの中心都市です。行政機能と商業に加え、製造業の工場や果樹園が市域に広がっており、業種ごとに異なる資金ニーズがあります。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">メーカー協力企業の運転資金</h3>
              <p className="text-sm leading-relaxed text-text-light">
                電子部品や輸送用機械の分野では、大手メーカーの協力企業・下請企業が受注に応じて材料費や人件費を先行負担します。納品から入金までのサイトが長い場合、売掛金を早期資金化して次の受注に備える使い方が有効です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">果樹農家・食品加工の季節資金</h3>
              <p className="text-sm leading-relaxed text-text-light">
                桃や梨などの果樹は収穫期に売上が集中し、その前の時期に資材費・人件費の支出がかさみます。出荷代金や加工品の売掛金を資金化して、季節による資金の波をならす活用が考えられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">建設・リフォーム業の外注費支払い</h3>
              <p className="text-sm leading-relaxed text-text-light">
                住宅関連工事や公共工事では、工事完了から入金まで時間がかかる一方、職人や外注先への支払いは先に発生します。完成・検収済みの工事代金債権をファクタリングすれば、支払いを待たせずに資金繰りを回せます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 福島市・福島県の公的支援機関・制度 ─── */}
        <section id="public-support" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">福島市・福島県で使える公的支援機関・制度</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリングと併せて活用したい、福島市・福島県の公的支援機関と制度を紹介します。相談はいずれも原則無料です。急ぎの資金ギャップはファクタリング、中長期の資金計画は公的支援という使い分けが基本です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">福島県の制度融資（中小企業向け融資制度）</h3>
              <p className="text-sm text-text-light">福島県が金融機関・信用保証協会と連携して行う中小企業者向けの融資制度。低利で事業資金を借りられます。申込から実行まで時間を要するため、急ぎの支払いはファクタリングでつなぎ、中長期の運転資金は制度融資でまかなう使い分けが有効です。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">福島県よろず支援拠点</h3>
              <p className="text-sm text-text-light">国が全都道府県に設置した無料の経営相談所。資金繰り・売上拡大・事業計画など経営全般を何度でも無料で相談できます。ファクタリング利用の前に、資金繰り全体を専門家に整理してもらいたいときの相談先です。</p>
              <p className="mt-2 text-sm"><a href="https://fukushima-yorozu.go.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">福島県よろず支援拠点 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">福島県信用保証協会</h3>
              <p className="text-sm text-text-light">中小企業が金融機関から融資を受ける際の保証を担う公的機関。保証付き融資は低コストですが審査に時間を要するため、入金までのつなぎにファクタリングを併用する使い分けが可能です。</p>
              <p className="mt-2 text-sm"><a href="http://www.fukushima-cgc.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">福島県信用保証協会 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">福島商工会議所</h3>
              <p className="text-sm text-text-light">経営相談・融資あっせん・補助金情報の提供を行う地域総合経済団体。マル経融資（小規模事業者経営改善資金）のあっせんや創業支援も行っています。福島市内の小規模事業者が低利融資の相談をしたいときの窓口です。</p>
              <p className="mt-2 text-sm"><a href="https://www.fukushima-cci.or.jp/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">福島商工会議所 公式サイト</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">日本政策金融公庫（福島支店）</h3>
              <p className="text-sm text-text-light">政府系金融機関の県内窓口。小規模事業者や創業期でも利用しやすい低利融資を扱います。融資実行までの期間を要するため、即日性が必要な場面はファクタリング、恒常的な資金は公庫融資と役割を分けましょう。</p>
              <p className="mt-2 text-sm"><a href="https://www.jfc.go.jp/n/branch/index.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">日本政策金融公庫 店舗案内</a></p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">全国の公的支援窓口を探す</h3>
              <p className="text-sm text-text-light">県外の取引先所在地の窓口や、47都道府県のよろず支援拠点・信用保証協会の一覧は、当サイトの全国マップで確認できます。</p>
              <p className="mt-2 text-sm"><Link href="/articles/zenkoku-shikinguri-shien/" className="font-medium text-primary underline">47都道府県の公的資金繰り支援マップ</Link></p>
            </div>
          </div>
          <p className="mt-4 text-xs text-text-light">※掲載している各機関・制度の情報とリンク先は、2026年7月に公式サイトで確認しています。最新の受付状況・条件は各公式サイトをご確認ください。</p>
        </section>

        {/* ── 利用手順 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">福島市でファクタリングを利用する手順</h2>
          <div className="space-y-3">
            {[
              { step: "複数社に見積もり依頼", description: "オンライン完結型を中心に最低3社以上へ見積もりを依頼。福島市から来店不要で申し込めます。" },
              { step: "必要書類の提出", description: "請求書・通帳コピー・身分証明書などをオンラインでアップロード。書類2点で済む会社もあります。" },
              { step: "審査・見積もり比較", description: "各社の手数料・条件を比較。掛け目や振込手数料も含めた総額で判断しましょう。" },
              { step: "契約・入金", description: "電子契約でオンライン完結。最短即日で指定口座に入金されます。" },
              { step: "売掛金回収後の送金", description: "売掛先からの入金後、ファクタリング会社に送金して取引完了です。" },
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：福島市でファクタリングを選ぶポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">オンライン完結型を軸に比較</strong>：福島市内の店舗にこだわらず、全国対応のオンライン型で選択肢を広げる。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">業種への理解がある会社を選ぶ</strong>：製造業・農業・建設業など、自社の商流を説明しやすい会社だと審査がスムーズ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">最低3社以上の見積もり比較</strong>：手数料の総額で比較し、条件の良い会社を選ぶ。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">公的支援と使い分ける</strong>：よろず支援拠点・信用保証協会・公庫などの低コスト調達と、スピードのファクタリングを併用する。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">ノンリコースを確認</strong>：償還請求権なし（ノンリコース）の契約であることを必ず確認する。</span></li>
            </ul>
          </div>
        </section>

                {/* ── 関連ツール・データ ─── */}
                <section className="mb-12">
                  <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
                    <p className="mb-3 font-bold text-primary">あわせて使いたいツール・データ</p>
                    <ul className="space-y-2 text-sm text-text-light">
                    <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
                    <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
                    <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
                    <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
                    <li><Link href="/articles/area-hub/" className="font-medium text-primary underline">エリア別ファクタリングガイド</Link>｜他の都市や全国対応の会社もまとめて比較できます。</li>
                    </ul>
                  </div>
                </section>

{/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/sendai/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">仙台のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">東北エリア対応の業者を紹介</p>
            </Link>
            <Link href="/articles/utsunomiya/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">宇都宮のファクタリング会社5選</p>
              <p className="mt-1 text-sm text-text-light">栃木県対応の業者を比較</p>
            </Link>
            <Link href="/articles/agriculture/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">農業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">出荷代金の早期資金化を解説</p>
            </Link>
            <Link href="/articles/manufacturing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">製造業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">長い入金サイト対策を解説</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">福島県のファクタリング会社を一括比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・審査通過率で福島市・福島県から使えるファクタリング会社を徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
