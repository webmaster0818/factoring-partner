import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "警備業向けファクタリング｜警備料金の売掛債権を早期現金化",
  description:
    "警備業向けファクタリングを徹底解説。月末締め翌月末〜翌々月末払いが多い警備料金の入金待ちと人件費の先行負担を、売掛債権の早期現金化で解消する方法、活用シーン、おすすめ3社を紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/security/",
  },
  openGraph: {
    title: "警備業向けファクタリング｜警備料金の売掛債権を早期現金化",
    description: "警備業の資金繰り課題とファクタリング活用法。人件費先行と入金サイトのギャップ解消を解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/security/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "警備料金の入金サイトが長い",
    description:
      "警備業務の請負契約では、月末締め・翌月末払い〜翌々月末払いといった支払条件が多く見られます。業務を提供してから警備料金が入金されるまでに1〜2ヶ月程度の期間が空くため、その間の運転資金を自社で立て替える必要があります。",
  },
  {
    title: "人件費の先行負担が大きい",
    description:
      "警備業は労働集約型の業種であり、コストの中心は警備員の人件費です。給与は毎月決まった日に支払う必要がある一方、警備料金の入金は後払いのため、隊員数が多いほど「支払いが先・入金が後」のギャップが大きくなります。",
  },
  {
    title: "受注拡大時に立替負担が増える",
    description:
      "施設警備や交通誘導警備などの新規契約を受注すると、初月から警備員の配置・制服や装備品の手当てが必要になります。売上が増えるほど先行支出も増えるため、成長期ほど手元資金が不足しやすい構造です。",
  },
  {
    title: "イベント警備など繁忙期の資金需要",
    description:
      "イベント警備や年末年始などの繁忙期には、スポットでの増員対応が発生します。臨時の人件費や応援要請の費用は先に出ていくのに対し、その分の警備料金の入金は締め日・支払サイトの後になるため、一時的な資金需要が生じやすくなります。",
  },
];

const useScenes = [
  {
    title: "シーン1：新規の大型契約を受注したとき",
    situation: "施設警備・常駐警備などの大型契約を受注し、初月から警備員の人件費や装備品の費用が先行して発生する。入金は締め日から1〜2ヶ月先。",
    approach: "既存契約分の確定した売掛債権をファクタリングで早期現金化し、新規契約の立ち上げ資金に充てる方法があります。借入ではないため、負債を増やさずに受注拡大に対応できます。",
  },
  {
    title: "シーン2：給与支払日と入金日のずれを埋めたいとき",
    situation: "警備員の給与支払日が警備料金の入金日より先に来る月があり、手元資金が一時的に不足する。",
    approach: "入金待ちの売掛債権を売却して現金化すれば、給与支払いのタイミングに資金を合わせられます。2社間ファクタリングなら取引先（警備の発注元）への通知なしで利用できます。",
  },
  {
    title: "シーン3：イベント警備などスポット案件の増員資金",
    situation: "イベント警備の依頼が集中し、臨時の増員・応援費用が先行して発生する。",
    approach: "確定済みの売掛債権を早期現金化して繁忙期のつなぎ資金とする使い方です。必要な月だけスポットで利用できる点が、継続的な借入との違いです。",
  },
  {
    title: "シーン4：銀行融資を待てないとき・審査に通らなかったとき",
    situation: "納税や社会保険料の支払いが重なり急ぎで資金が必要だが、銀行融資は審査に時間がかかる、または断られた。",
    approach: "ファクタリングの審査は利用者自身より売掛先の信用力を重視するため、融資とは別の選択肢になります。最短即日で入金に対応する会社もあります。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "業界最大手級。2社間・3社間対応。最短2時間入金。",
    fee: "2%〜",
    speed: "最短2時間",
    merit: "高額案件にも対応しており、常駐警備など月々の請求額が大きい契約の債権も相談しやすい。全国から利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    features: "一般社団法人が運営する非営利型。経済産業大臣認定。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit: "非営利法人のため手数料が業界最安水準。人件費比率が高くコストを抑えたい警備会社に向く。認定機関の安心感。",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。少額（30万円〜）対応。オンライン完結型。最短即日入金。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit: "審査通過率が高く、設立間もない警備会社でも相談しやすい。交通誘導警備など少額の売掛金にも対応。",
  },
];

const faqs = [
  {
    question: "警備会社でもファクタリングを利用できますか？",
    answer:
      "はい、利用できます。警備業務の請負契約に基づく警備料金の売掛債権（請求済み・金額確定済みのもの）はファクタリングの対象になります。警備業は月末締め翌月末〜翌々月末払いといった後払いの商習慣が多く、人件費が先行しやすいため、入金サイトのギャップを埋める手段としてファクタリングが活用されています。",
  },
  {
    question: "警備業のファクタリング手数料の相場は？",
    answer:
      "一般的な相場は2社間ファクタリングで8〜18%、3社間ファクタリングで1〜9%程度です（あくまで目安であり、実際の手数料は会社や売掛先の信用力、契約内容により異なります）。売掛先が官公庁や大手企業の場合は信用力が高く評価され、手数料が低くなる傾向があります。複数社から見積もりを取って比較することをおすすめします。",
  },
  {
    question: "取引先（警備の発注元）に知られずに利用できますか？",
    answer:
      "2社間ファクタリングであれば、取引先への通知や承諾なしで利用できます。警備業務の発注元（施設オーナー・建設会社・イベント主催者など）との取引関係に影響を与えたくない場合は2社間が選ばれています。3社間ファクタリングは取引先の承諾が必要な代わりに、手数料が低くなる傾向があります。",
  },
  {
    question: "設立間もない警備会社や個人事業主でも利用できますか？",
    answer:
      "利用できる可能性があります。ファクタリングの審査では利用者自身の業歴や財務状況よりも、売掛先の信用力が重視されるためです。なお、警備業は警備業法に基づき都道府県公安委員会の認定を受けて営む事業ですが、ファクタリングは借入ではなく債権の売買（債権譲渡）であるため、負債を増やさずに資金を調達できる点も特徴です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "警備業向けファクタリング｜警備料金の売掛債権を早期現金化",
  description: "警備業の資金繰り課題とファクタリング活用法。人件費先行と入金サイトのギャップ解消を解説。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/security/" },
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
    { "@type": "ListItem", position: 3, name: "警備業向けファクタリング", item: "https://hyogo-shihoushoshi.jp/articles/security/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SecurityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "警備業向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種特化ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            警備業向けファクタリング
            <br className="hidden md:block" />
            警備料金の売掛債権を早期現金化
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            月末締め翌月末〜翌々月末払いの入金待ちと、毎月先行する警備員の人件費。警備業特有の資金繰り課題をファクタリングで解決する方法と、おすすめのサービスを紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. 警備業の資金繰り課題</a></li>
            <li><a href="#scenes" className="hover:underline">2. 警備業のファクタリング活用シーン</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社3選</a></li>
            <li><a href="#flow" className="hover:underline">4. 利用の流れ</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">警備業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">警備業は請負契約による後払いの商習慣と、労働集約型ゆえの人件費先行という構造から、資金繰りの課題を抱えやすい業種です。</p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg border border-accent/30 bg-orange-50 p-6">
                <h3 className="mb-3 font-bold text-accent">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 活用シーン ─── */}
        <section id="scenes" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">警備業のファクタリング活用シーン</h2>
          <p className="mb-8 leading-relaxed text-text-light">警備業でファクタリングが活用されやすい代表的なシーンを紹介します。いずれも「確定した売掛債権を早期現金化する」という基本の使い方です。</p>
          <div className="space-y-6">
            {useScenes.map((scene) => (
              <div key={scene.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-4 text-lg font-bold text-primary">{scene.title}</h3>
                <div className="space-y-3">
                  <div className="rounded-lg bg-orange-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-accent">状況</p>
                    <p className="text-sm text-text-light">{scene.situation}</p>
                  </div>
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="mb-1 text-sm font-semibold text-secondary">活用の考え方</p>
                    <p className="text-sm text-text-light">{scene.approach}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ3選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">おすすめファクタリング会社3選</h2>
          <p className="mb-8 leading-relaxed text-text-light">警備業の売掛債権の現金化に利用しやすい会社を厳選して3社紹介します。</p>
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

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用の流れ</h2>
          <p className="mb-8 leading-relaxed text-text-light">警備会社がファクタリングを利用する際の一般的な流れを解説します。</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">1</span>
              <div>
                <h3 className="font-bold text-text-main">ファクタリング会社に相談・申し込み</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">電話またはWebで問い合わせ。売却したい売掛債権の金額、希望入金日を伝えます。複数社に同時に相談して見積もりを比較することをおすすめします。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">2</span>
              <div>
                <h3 className="font-bold text-text-main">必要書類の提出</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">身分証明書、警備業務の請負契約書や請求書、通帳コピーなどを提出します。取引先との継続的な入金実績が確認できると審査がスムーズです。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">売掛先（警備の発注元）の信用力や取引の継続性を中心に審査されます。見積もりで手数料率と受取額を必ず確認しましょう。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">4</span>
              <div>
                <h3 className="font-bold text-text-main">契約・入金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">見積もりに同意したら契約を締結。3社間の場合は取引先の承諾手続きも行います。契約後、最短即日〜数日で指定口座に入金されます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 警備業で利用する際のポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">警備業でファクタリングを利用する際のポイント</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            警備業の売掛債権をファクタリングで現金化する際に、押さえておきたいポイントをまとめます。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">対象となる債権</strong>：警備業務の請負契約に基づく、請求済み・金額確定済みの警備料金の売掛債権</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">手数料の目安</strong>：2社間8〜18%・3社間1〜9%程度（目安であり会社・契約内容により異なる）。売掛先が官公庁・大手企業だと有利になりやすい</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">審査のポイント</strong>：売掛先の信用力と取引の継続性が重視される。継続的な請負契約が多い警備業はこの点で相性が良い</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">注意点</strong>：契約書に債権の譲渡制限特約がないか事前に確認を。なお民法上、譲渡制限特約があっても債権譲渡自体は原則有効です（民法466条）が、取引先との関係に配慮した進め方をファクタリング会社に相談しましょう</span>
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

                {/* ── 関連ツール・データ ─── */}
                <section className="mb-12">
                  <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
                    <p className="mb-3 font-bold text-primary">あなたの業種・状況に合う会社を探す</p>
                    <ul className="space-y-2 text-sm text-text-light">
                    <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
                    <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
                    <li><Link href="/articles/industry-hub/" className="font-medium text-primary underline">業種別ファクタリングガイド</Link>｜他の業種の傾向や、業種を問わない選び方もまとめています。</li>
                    <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
                    <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
                    </ul>
                  </div>
                </section>

{/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/construction/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">入金サイトが長い建設業の資金繰り改善</p>
            </Link>
            <Link href="/articles/staffing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">人材派遣業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">人件費先行型ビジネスの資金調達ガイド</p>
            </Link>
            <Link href="/articles/manufacturing/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">製造業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">長い支払サイトへの対応方法を解説</p>
            </Link>
            <Link href="/articles/what-is-factoring/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリングとは</p>
              <p className="mt-1 text-sm text-text-light">仕組み・種類・注意点を基礎から解説</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">警備業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピードで各社を徹底比較。人件費先行の資金繰りに合うサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
