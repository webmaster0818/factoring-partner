import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "報酬の前払い・先払いサービスとは？フリーランスが今すぐ報酬を受け取る方法【2026年】",
  description:
    "フリーランスの報酬を入金日より前に受け取る「報酬前払い・先払いサービス」の仕組みを解説。実態は請求書買取（ファクタリング）です。ペイトナー・ラボル・FREENANCEなど対応サービスの手数料と受取額の考え方、利用時の注意点まで紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/hoshu-maebarai/",
  },
  openGraph: {
    title:
      "報酬の前払い・先払いサービスとは？フリーランスが今すぐ報酬を受け取る方法【2026年】",
    description:
      "報酬前払い・先払いサービスの仕組み（=請求書買取）と対応サービス、手数料と受取額の考え方を解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/hoshu-maebarai/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const services = [
  {
    name: "ペイトナー",
    fee: "一律10%（公式サイトにて2026年6月確認）",
    speed: "最短10分",
    amount: "初回1万〜25万円 / 2回目以降 上限300万円",
    point:
      "請求書と本人確認書類だけで申し込め、AI審査により最短10分で入金されます。手数料が一律で事前に受取額を確定できるのが特徴です。",
    slug: "/reviews/paytner/",
  },
  {
    name: "ラボル",
    fee: "一律10%（税込・公式サイトにて2026年6月確認）",
    speed: "最短60分",
    amount: "1万円〜（上限は審査により決定）",
    point:
      "土日祝を含む24時間365日の申込・入金に対応。通帳コピー不要で、休日や深夜に報酬を受け取りたい場面に対応できます。",
    slug: "/reviews/labol/",
  },
  {
    name: "FREENANCE（フリーナンス）",
    fee: "3%〜10%（公式サイトにて2026年6月確認。フリーナンス口座を受取先に設定しない場合は一律10%）",
    speed: "最短即日",
    amount: "1万円〜（上限は与信次第）",
    point:
      "GMOクリエイターズネットワーク運営の「即日払い」。会員登録で損害賠償保険「あんしん補償」が無料付帯する点が独自です。",
    slug: "/reviews/freenance/",
  },
  {
    name: "みんなのファクタリング",
    fee: "7%〜15%（公式サイトにて2026年6月確認）",
    speed: "最短3時間",
    amount: "10万円〜",
    point:
      "完全オンラインで最短3時間入金。初期費用・事務手数料などの諸費用はかからず、10万円からの案件に対応します。",
    slug: "/reviews/minnano/",
  },
];

const cautions = [
  {
    title: "前払いのたびに手数料が引かれる",
    description:
      "報酬前払いは「早く受け取れる」代わりに、その都度手数料分だけ受取額が減ります。毎月の固定的な資金繰り手段として常用すると、年間の負担が大きくなります。入金までのつなぎとしてスポットで使うのが基本です。",
  },
  {
    title: "対象は「発行済みの請求書」に限られる",
    description:
      "前払いできるのは、仕事を完了しクライアントに発行した請求書（確定した報酬債権）です。これから受注する案件の見込み報酬や、作業途中の未請求分は対象になりません。",
  },
  {
    title: "会社員の「給与」を対象にした前払いは別物",
    description:
      "同じ「前払い」という言葉でも、会社員の給与を対象にしたサービスはまったく別の制度・規制の話になります。とくに個人の給与債権を業者が買い取る「給与ファクタリング」は金融庁が注意喚起する違法性の高い取引です。違いは後述の関連記事で必ず確認してください。",
  },
];

const faqs = [
  {
    question: "報酬の前払い・先払いサービスとは何ですか？",
    answer:
      "フリーランスがクライアントに発行した請求書（売掛債権）をサービス会社に買い取ってもらい、本来の入金日より前に報酬相当額を受け取る仕組みです。法的にはファクタリング（債権譲渡）にあたり、借入ではないため信用情報に影響せず、返済義務も発生しません。",
  },
  {
    question: "報酬前払いはいくら受け取れますか？",
    answer:
      "請求書の額面から手数料を差し引いた金額を受け取れます。例えば手数料一律10%のサービスで10万円の請求書を前払いすると、受取額は9万円です。手数料率はサービスにより異なるため、額面ではなく「受取額」で比較することが重要です。",
  },
  {
    question: "報酬の前払いに審査はありますか？",
    answer:
      "あります。ただし審査の中心はフリーランス本人の収入ではなく、請求書の宛先であるクライアント（売掛先）の信用力です。請求書と本人確認書類のみで申し込めるサービスが多く、銀行融資のような決算書・事業計画の提出は基本的に不要です。",
  },
  {
    question: "クライアントに前払いの利用を知られますか？",
    answer:
      "フリーランス向けの報酬前払いサービスは基本的に2社間ファクタリングのため、クライアントへの通知や承諾は不要で、利用を知られることはありません。クライアントからの入金後に、利用者がサービス会社へ送金する流れになります。",
  },
  {
    question: "会社員でも報酬前払いサービスを使えますか？",
    answer:
      "使えません。本記事で紹介するサービスの対象は、事業者（フリーランス・個人事業主等）が発行した請求書です。会社員の給与は対象外で、給与を対象にした「給与ファクタリング」は金融庁が貸金業に該当すると判断している違法性の高い取引のため、絶対に利用しないでください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "報酬の前払い・先払いサービスとは？フリーランスが今すぐ報酬を受け取る方法【2026年】",
  description:
    "報酬前払い・先払いサービスの仕組み（=請求書買取）と対応サービス、手数料と受取額の考え方を解説。",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
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
    "@id": "https://hyogo-shihoushoshi.jp/articles/hoshu-maebarai/",
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

export default function HoshuMaebaraiPage() {
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
          { label: "コラム", href: "/articles/" },
          { label: "報酬の前払い・先払いサービスとは" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            フリーランス向け
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            報酬の前払い・先払いサービスとは？
            <br className="hidden md:block" />
            フリーランスが今すぐ報酬を受け取る方法【2026年】
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            「報酬を入金日より前に受け取りたい」に直接答えます。報酬前払い・先払いサービスの正体は請求書買取（ファクタリング）。仕組み・対応サービス・手数料と受取額の考え方・注意点を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論 ─── */}
        <section className="mb-10 rounded-lg border-2 border-primary bg-blue-50 p-6">
          <p className="mb-2 text-lg font-bold text-primary">この記事の結論</p>
          <p className="leading-relaxed text-text-light">
            フリーランスの「報酬前払い・先払いサービス」とは、<strong className="text-text-main">発行済みの請求書をサービス会社に買い取ってもらい、入金日前に報酬相当額を受け取る仕組み（＝ファクタリング）</strong>です。借入ではないため信用情報に影響せず、最短10分〜即日で受け取れます。ただし請求書の額面から手数料（例：一律10%なら10万円→受取9万円）が差し引かれるため、常用ではなく入金待ちのつなぎとして使うのが基本です。
          </p>
        </section>

        {/* ── PR開示 ─── */}
        <p className="mb-10 rounded-lg border border-border bg-section-bg p-4 text-xs leading-relaxed text-text-light">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、手数料・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#what" className="hover:underline">
                1. 報酬の前払い・先払いサービスの仕組み
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                2. 報酬前払いに対応する主なサービス
              </a>
            </li>
            <li>
              <a href="#fee" className="hover:underline">
                3. 手数料と受取額の考え方
              </a>
            </li>
            <li>
              <a href="#caution" className="hover:underline">
                4. 利用前に知っておくべき注意点
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                5. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 仕組み ─── */}
        <section id="what" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            報酬の前払い・先払いサービスの仕組み
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            フリーランスの報酬は「月末締め翌月末払い」など、納品から実際の入金まで1〜2ヶ月のタイムラグがあるのが一般的です。この待ち時間を短縮するのが報酬前払い・先払いサービスです。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            名称は「前払い」「先払い」「即日払い」などサービスごとに異なりますが、<strong className="text-text-main">法的な実態はどれも共通で、発行済みの請求書（売掛債権）の買取＝ファクタリング</strong>です。サービス会社が請求書を買い取り、手数料を差し引いた金額を先に振り込みます。クライアントから期日どおり入金されたら、その金額をサービス会社に送金して完了です。
          </p>
          <div className="mb-6 rounded-lg border border-border bg-section-bg p-6">
            <p className="mb-4 text-center text-sm font-bold text-text-main">
              報酬を前払いで受け取るまでの3ステップ
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">1</span>
                <p className="text-sm text-text-light">クライアントに発行した請求書をサービスに提出（アップロード）する</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">2</span>
                <p className="text-sm text-text-light">売掛先（クライアント）の信用力を中心に審査され、手数料を引いた金額が入金される</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">3</span>
                <p className="text-sm text-text-light">本来の支払期日にクライアントから入金されたら、サービス会社へ送金する</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-2 font-bold text-secondary">借入・ローンとの違い</p>
            <p className="text-sm leading-relaxed text-text-light">
              報酬前払いは債権の売買であり、お金を借りる取引ではありません。信用情報機関に記録されず、金利や毎月の返済も発生しません。ファクタリング全般の仕組み・確定申告での会計処理・エージェント経由の請求書への対応は
              <Link href="/articles/for-freelance/" className="font-medium text-primary underline">フリーランス向けファクタリング解説</Link>
              で詳しくまとめています。
            </p>
          </div>
        </section>

        {/* ── 対応サービス ─── */}
        <section id="services" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            報酬前払いに対応する主なサービス
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            フリーランスの少額請求書（1万円〜）に対応する主要サービスを紹介します。手数料はいずれも各社公式サイトの表記（2026年6月確認）にもとづいています。
          </p>
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-base font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-text-main">{service.name}</h3>
                </div>
                <div className="mb-3 grid gap-2 text-sm md:grid-cols-3">
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">手数料</p>
                    <p className="mt-1 font-bold text-primary">{service.fee}</p>
                  </div>
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">入金スピード</p>
                    <p className="mt-1 font-bold text-primary">{service.speed}</p>
                  </div>
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">買取可能額</p>
                    <p className="mt-1 font-bold text-primary">{service.amount}</p>
                  </div>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-text-light">{service.point}</p>
                <Link href={service.slug} className="text-sm font-bold text-primary underline underline-offset-2 hover:opacity-80">
                  {service.name}の詳しいレビューを見る →
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            スマホアプリ・オンラインで完結する請求書買取サービスの使い方や選び方は、
            <Link href="/articles/seikyusho-kaitori-app/" className="font-medium text-primary underline">請求書買取アプリ・サービスの解説記事</Link>
            も参考にしてください。
          </p>
        </section>

        {/* ── 手数料と受取額 ─── */}
        <section id="fee" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料と受取額の考え方
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            報酬前払いで実際に受け取れるのは「請求書の額面 − 手数料」です。手数料が一律10%のサービスなら、10万円の請求書に対する受取額は9万円になります。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            比較のポイントは2つあります。第一に、<strong className="text-text-main">一律型（ペイトナー・ラボルの一律10%）は見積もり不要で受取額が事前に確定</strong>する一方、<strong className="text-text-main">変動型（FREENANCEの3%〜10%など）は条件次第で一律型より安くなる可能性</strong>があります。第二に、変動型は初回や利用実績が少ない段階では上限寄りの料率になる場合があるため、実際の見積もりで受取額を確認してから決めることが大切です。
          </p>
          <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="mb-2 font-bold text-accent">受取額シミュレーションの例</p>
            <p className="text-sm leading-relaxed text-text-light">
              請求書20万円・手数料10%の場合：受取額は18万円（手数料2万円）。同じ請求書を手数料5%で買い取ってもらえれば受取額は19万円です。売掛金額から手数料・受取額の目安を計算できる
              <Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>
              もあわせてご活用ください。
            </p>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            利用前に知っておくべき注意点
          </h2>
          <div className="space-y-6">
            {cautions.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="mb-2 font-bold text-accent">「給与の前払い」と混同しないでください</p>
            <p className="text-sm leading-relaxed text-text-light">
              会社員向けの給与前払いサービス・フリーランスの報酬前払い・違法な給与ファクタリングの3つの区別は
              <Link href="/articles/kyuyo-maebarai-chigai/" className="font-medium text-primary underline">給与前払いサービスと報酬前払いの違い</Link>
              で、給与ファクタリングの違法性の詳細は
              <Link href="/articles/salary-factoring-illegal/" className="font-medium text-primary underline">給与ファクタリングが違法な理由</Link>
              で解説しています。
            </p>
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

        {/* ── 関連ツール・データ ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">自分に合うサービスを絞り込む</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
              <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
                    <li><Link href="/articles/seikyusho-kaitori/" className="font-medium text-primary underline">請求書買取とは（別語彙の基本）</Link>｜呼び方の違いと仕組みをまとめています。</li>
              <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜請求書の額面から手数料・受取額の目安を計算できます。</li>
              <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
            </ul>
          </div>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/for-freelance/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">フリーランス向けファクタリング5選</p>
              <p className="mt-1 text-sm text-text-light">
                5社比較・確定申告の会計処理・エージェント経由の請求書まで
              </p>
            </Link>
            <Link
              href="/articles/seikyusho-kaitori-app/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">請求書買取アプリ・サービス</p>
              <p className="mt-1 text-sm text-text-light">
                スマホで完結する請求書の資金化サービスを解説
              </p>
            </Link>
            <Link
              href="/articles/kyuyo-maebarai-chigai/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">給与前払いサービスと報酬前払いの違い</p>
              <p className="mt-1 text-sm text-text-light">
                混同されやすい3つの「前払い」を明確に区別
              </p>
            </Link>
            <Link
              href="/articles/salary-factoring-illegal/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">給与ファクタリングが違法な理由</p>
              <p className="mt-1 text-sm text-text-light">
                金融庁・警視庁の見解と安全な代替手段
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            報酬の前払いに使えるサービスを比較しましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・少額対応の可否を公式確認値で比較。入金待ちの報酬を今すぐ資金化できるサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
