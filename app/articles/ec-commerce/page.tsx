import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "EC・通販業向けファクタリング｜モール売上の早期入金",
  description:
    "EC・通販業向けファクタリングを徹底解説。Amazon・楽天市場などのモール売上の早期入金方法、クレジットカード売掛金のファクタリング、手数料相場、おすすめサービス、活用事例を紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/ec-commerce/",
  },
  openGraph: {
    title: "EC・通販業向けファクタリング｜モール売上の早期入金",
    description: "EC・通販業の資金繰り課題とファクタリング活用法。モール売上の早期入金を解説。",
    url: "https://factoring-partner.pages.dev/articles/ec-commerce/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "モール売上の入金サイクルが長い",
    description:
      "Amazon、楽天市場、Yahoo!ショッピングなどのECモールでは、売上の入金サイクルが14日〜60日と長いです。特に楽天市場は月末締め翌月末払いが基本で、売上発生から最大60日間の入金待ちが発生します。その間にも仕入れ・広告費・送料などの支払いが必要です。",
  },
  {
    title: "仕入れ・在庫投資の資金が必要",
    description:
      "EC事業では商品の仕入れや在庫確保に先行投資が必要です。特にセール期間（楽天スーパーSALE、Amazonプライムデーなど）前には大量仕入れが必要になりますが、前回のセール売上の入金がまだ届いていないケースも多く、資金繰りが逼迫します。",
  },
  {
    title: "広告費の先払いが必要",
    description:
      "ECモール内の広告（楽天RPP広告、Amazon スポンサー広告）やSNS広告、リスティング広告などの広告費は前払いまたは月末一括請求が一般的です。売上が上がる前に広告費の支払いが発生するため、成長期のEC事業者ほど資金繰りが厳しくなります。",
  },
  {
    title: "季節変動が大きい",
    description:
      "EC事業は季節イベント（クリスマス、バレンタイン、お中元・お歳暮など）やセール時期に売上が集中する傾向があります。繁忙期前の仕入れ資金と、閑散期の運転資金のバランスを取ることが資金繰りの重要なポイントです。",
  },
];

const factoringTypes = [
  {
    title: "モール売上のファクタリング",
    description:
      "Amazon・楽天市場・Yahoo!ショッピングなどのECモールからの入金予定額（売上金）をファクタリング会社に売却して早期現金化する方法です。モール運営会社の信用力が高いため、比較的安い手数料で利用できます。",
    merit: "モール運営会社の信用力が高いため手数料が安い傾向",
    demerit: "モール運営会社との規約を確認する必要がある",
  },
  {
    title: "BtoB取引の売掛金ファクタリング",
    description:
      "法人向けのEC事業（卸売サイト運営、法人契約での定期販売など）の場合、取引先法人への売掛金をファクタリングに利用できます。2社間・3社間の両方に対応しており、一般的なファクタリングと同じ仕組みです。",
    merit: "2社間で取引先に知られない・即日入金可能",
    demerit: "手数料は売掛先の信用力により変動（5%〜18%）",
  },
  {
    title: "クレジットカード売上のファクタリング",
    description:
      "自社ECサイトでのクレジットカード決済による売上を、カード会社からの入金前にファクタリングで現金化する方法です。カード会社の信用力が高いため、手数料が安くなる傾向があります。",
    merit: "カード会社の信用力で手数料が安い・審査が通りやすい",
    demerit: "対応しているファクタリング会社が限られる",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "業界最大手級。EC事業者の利用実績が豊富。2社間・3社間対応。最短2時間入金。法人・個人事業主対応。オンライン完結可能。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "EC事業者の審査ノウハウが豊富。高額案件にも対応。モール売上のファクタリング実績あり。",
  },
  {
    name: "QuQuMo（ククモ）",
    features: "完全オンライン対応。必要書類は請求書と通帳の2点のみ。法人・個人事業主対応。少額から利用可能。面談不要。",
    fee: "1%〜",
    speed: "最短2時間",
    merit: "EC事業者にとってなじみのあるオンライン完結型。手数料が安い。手続きが簡単で素早い。",
  },
  {
    name: "ラボル",
    features: "フリーランス・個人事業主特化。1万円から利用可能。24時間365日振込対応。東証プライム上場企業グループ運営。",
    fee: "10%固定",
    speed: "最短60分",
    merit: "小規模EC事業者・個人ショップオーナーに最適。超少額対応。土日祝も振込可能で急ぎに対応。",
  },
];

const useCases = [
  {
    title: "事例1：楽天スーパーSALE前の大量仕入れ",
    problem: "楽天市場でアパレル商品を販売するEC事業者。楽天スーパーSALEに向けて500万円分の在庫を仕入れたいが、前回セールの売上入金は2週間先。手元資金では200万円しか確保できない。",
    solution: "前月の楽天市場売上金（入金予定額）400万円をファクタリングで早期現金化。手数料5%で380万円を即日調達。",
    result: "十分な在庫を確保してセールに臨み、前回比150%の売上を達成。ファクタリング手数料20万円に対して、売上増加分は300万円以上となり、投資効果は抜群だった。",
  },
  {
    title: "事例2：Amazon広告費の捻出",
    problem: "Amazon出品者として急成長中だが、スポンサー広告の費用が月100万円を超えている。広告費は月末一括請求だが、Amazonからの入金は翌月中旬。成長のために広告を止めたくないが、資金が追いつかない。",
    solution: "Amazon売上金の入金予定額をファクタリングで前倒し。手数料3%で毎月200万円程度を早期入金し、広告費の支払いに充当。",
    result: "広告を止めずに運用を継続でき、月商が6ヶ月で2倍に成長。銀行融資の審査も通るようになり、ファクタリングへの依存度を徐々に下げることができた。",
  },
];

const faqs = [
  {
    question: "ECモールの売上金もファクタリングに使えますか？",
    answer:
      "はい、Amazon・楽天市場・Yahoo!ショッピングなどのECモールからの入金予定額（売上金）をファクタリングに利用できます。ただし、すべてのファクタリング会社がモール売上に対応しているわけではないため、事前に確認が必要です。モール運営会社の信用力が高いため、手数料は比較的安くなる傾向にあります。",
  },
  {
    question: "EC事業者のファクタリング手数料の相場は？",
    answer:
      "EC事業者のファクタリング手数料は、モール売上金のファクタリングで3%〜10%程度、BtoB取引の売掛金で5%〜18%程度が相場です。モール運営会社（Amazon、楽天）の信用力が高いため、一般的なファクタリングよりも安い手数料が期待できます。複数社の見積もりを比較しましょう。",
  },
  {
    question: "個人のネットショップ運営者でも利用できますか？",
    answer:
      "はい、個人事業主のネットショップ運営者でも利用できるファクタリング会社はあります。ラボルは1万円から利用可能で、個人事業主に特化しています。ただし、個人消費者への直接販売（CtoC）の売掛金は対象外の場合が多く、モールやBtoB取引の売掛金が対象となります。",
  },
  {
    question: "ECモールの規約でファクタリングは禁止されていませんか？",
    answer:
      "ECモールの利用規約では、売上金の譲渡に関する制約が設けられている場合があります。ファクタリングを利用する前に、各モールの利用規約を確認し、ファクタリング会社にも規約上の問題がないか相談することをおすすめします。2社間ファクタリングであればモール側に通知が不要なため、実質的な影響が少ないケースもあります。",
  },
  {
    question: "セール時期だけの利用も可能ですか？",
    answer:
      "はい、必要な時だけのスポット利用も可能です。楽天スーパーSALEやAmazonプライムデーなどのセール前に仕入れ資金が必要な場合だけ利用するEC事業者は多いです。継続契約の義務がないファクタリング会社がほとんどのため、必要な時だけ柔軟に利用できます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "EC・通販業向けファクタリング｜モール売上の早期入金",
  description: "EC・通販業の資金繰り課題とファクタリング活用法。モール売上の早期入金を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/ec-commerce/" },
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
    { "@type": "ListItem", position: 3, name: "EC・通販業向けファクタリング", item: "https://factoring-partner.pages.dev/articles/ec-commerce/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function EcCommercePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "EC・通販業向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種特化ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            EC・通販業向けファクタリング
            <br className="hidden md:block" />
            モール売上の早期入金
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            Amazon・楽天市場などのモール売上金の入金待ちを解消。仕入れ資金・広告費の確保に最適なファクタリングの活用法を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. EC・通販業の資金繰り課題</a></li>
            <li><a href="#types" className="hover:underline">2. EC事業者が使えるファクタリングの種類</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社3選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用事例</a></li>
            <li><a href="#tips" className="hover:underline">5. EC事業者のファクタリング活用のコツ</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">EC・通販業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">EC・通販業は成長期ほど資金繰りが厳しくなる特徴があります。売上が伸びるほど仕入れ・広告費も増大し、入金前に支出が膨らむ構造です。</p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 種類 ─── */}
        <section id="types" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">EC事業者が使えるファクタリングの種類</h2>
          <p className="mb-8 leading-relaxed text-text-light">EC事業者が利用できるファクタリングは大きく3種類あります。自社のビジネスモデルに合った方法を選びましょう。</p>
          <div className="space-y-6">
            {factoringTypes.map((type) => (
              <div key={type.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 text-lg font-bold text-primary">{type.title}</h3>
                <p className="mb-4 leading-relaxed text-text-light">{type.description}</p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-secondary">メリット</p>
                    <p className="text-sm text-text-light">{type.merit}</p>
                  </div>
                  <div className="rounded-lg bg-orange-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-accent">デメリット</p>
                    <p className="text-sm text-text-light">{type.demerit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ3選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">おすすめファクタリング会社3選</h2>
          <p className="mb-8 leading-relaxed text-text-light">EC事業者のファクタリングに対応している会社を厳選して3社紹介します。</p>
          <div className="space-y-6">
            {recommendedCompanies.map((company, index) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{index + 1}</span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-primary">{company.name}</h3>
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

        {/* ── 活用事例 ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">活用事例</h2>
          <p className="mb-8 leading-relaxed text-text-light">実際にEC事業者がファクタリングを活用したケースを紹介します。</p>
          <div className="space-y-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-4 text-lg font-bold text-primary">{uc.title}</h3>
                <div className="space-y-3">
                  <div className="rounded-lg bg-orange-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-accent">課題</p>
                    <p className="text-sm text-text-light">{uc.problem}</p>
                  </div>
                  <div className="rounded-lg bg-primary-light p-4">
                    <p className="mb-1 text-sm font-semibold text-primary">解決策</p>
                    <p className="text-sm text-text-light">{uc.solution}</p>
                  </div>
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-secondary">結果</p>
                    <p className="text-sm text-text-light">{uc.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 活用のコツ ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">EC事業者のファクタリング活用のコツ</h2>
          <p className="mb-8 leading-relaxed text-text-light">EC事業者がファクタリングを効果的に活用するためのコツを紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">セール前のタイミングで活用する</h3>
              <p className="text-sm leading-relaxed text-text-light">楽天スーパーSALE、Amazonプライムデー、ブラックフライデーなどの大型セール前に仕入れ資金を確保するためにファクタリングを活用しましょう。セールでの売上増加がファクタリング手数料を大幅に上回ることが期待できます。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">広告投資の最大化に使う</h3>
              <p className="text-sm leading-relaxed text-text-light">EC事業では広告費のROAS（広告費用対効果）が把握しやすいため、ファクタリング手数料を含めても黒字になる広告投資に活用するのが効果的です。ROAS 300%以上の広告に対しては、ファクタリング手数料を払っても十分な利益が見込めます。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">銀行融資との併用を検討する</h3>
              <p className="text-sm leading-relaxed text-text-light">ファクタリングは短期的なつなぎ資金として活用し、中長期的には銀行融資（運転資金）の調達を目指しましょう。EC事業が成長して売上実績が積み上がれば、銀行融資の審査も通りやすくなります。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">キャッシュフロー管理を徹底する</h3>
              <p className="text-sm leading-relaxed text-text-light">EC事業では仕入れ・広告費・送料・モール手数料など支出項目が多いため、月次のキャッシュフロー計画を作成しましょう。ファクタリングが必要なタイミングを事前に予測し、計画的に利用することでコストを最小限に抑えられます。</p>
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
            <Link href="/articles/for-freelance/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">フリーランス向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">個人事業主の資金調達ガイド</p>
            </Link>
            <Link href="/articles/startup/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">スタートアップ向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">創業期の資金調達方法</p>
            </Link>
            <Link href="/articles/cashflow-tips/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">資金繰り改善方法7選</p>
              <p className="mt-1 text-sm text-text-light">ファクタリング以外の選択肢も解説</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツも紹介</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">EC事業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            モール売上の早期入金に対応するファクタリング会社を手数料・スピードで比較。あなたのEC事業に最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
