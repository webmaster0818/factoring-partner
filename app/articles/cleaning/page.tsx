import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "清掃業向けファクタリング｜清掃料金の売掛債権を早期現金化",
  description:
    "清掃業向けファクタリングを徹底解説。定期清掃契約の後払いによる入金待ちと、人件費・資材費の先行負担を売掛債権の早期現金化で解消する方法、活用シーン、おすすめ3社を紹介します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/cleaning/",
  },
  openGraph: {
    title: "清掃業向けファクタリング｜清掃料金の売掛債権を早期現金化",
    description: "清掃業の資金繰り課題とファクタリング活用法。定期契約の後払いと先行コストのギャップ解消を解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/cleaning/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "定期清掃契約の料金が後払い",
    description:
      "ビル・オフィス・マンションなどの定期清掃契約では、月次で締めて翌月以降に清掃料金が支払われる後払いの商習慣が一般的です。サービスを提供してから入金までに期間が空くため、その間の運転資金を自社で立て替える必要があります。",
  },
  {
    title: "人件費の先行負担が大きい",
    description:
      "清掃業は労働集約型の業種であり、コストの中心は清掃スタッフの人件費です。給与は毎月決まった日に支払う必要がある一方、清掃料金の入金は後になるため、現場数・スタッフ数が増えるほど「支払いが先・入金が後」のギャップが広がります。",
  },
  {
    title: "資材・消耗品費も先に出ていく",
    description:
      "洗剤・ワックスなどの資材や清掃用消耗品は、業務の前に仕入れる必要があります。人件費に加えてこうした資材費も入金より先に発生するため、手元資金に余裕がないとキャッシュフローが逼迫しやすくなります。",
  },
  {
    title: "新規契約・スポット案件の立ち上げ負担",
    description:
      "新しいビルの定期清掃契約を獲得すると、初月から人員配置と機材・資材の手当てが必要になります。年末や引っ越しシーズンのスポット清掃が重なる時期も、臨時の人件費が先行するため一時的な資金需要が生じやすくなります。",
  },
];

const useScenes = [
  {
    title: "シーン1：新規の定期清掃契約を立ち上げるとき",
    situation: "ビルやマンションの定期清掃契約を新たに受注し、初月から人件費・機材・資材の費用が先行して発生する。入金は月次締めの翌月以降。",
    approach: "既存契約分の確定した売掛債権をファクタリングで早期現金化し、新規契約の立ち上げ資金に充てる方法があります。借入ではないため、負債を増やさずに受注拡大に対応できます。",
  },
  {
    title: "シーン2：給与支払日と入金日のずれを埋めたいとき",
    situation: "清掃スタッフの給与支払日が清掃料金の入金日より先に来る月があり、手元資金が一時的に不足する。",
    approach: "入金待ちの売掛債権を売却して現金化すれば、給与支払いのタイミングに資金を合わせられます。2社間ファクタリングなら取引先（管理会社やビルオーナー）への通知なしで利用できます。",
  },
  {
    title: "シーン3：清掃機材の更新・追加が必要なとき",
    situation: "床洗浄機などの清掃機材の更新・追加が必要になったが、入金待ちの売掛金が多く手元資金が足りない。",
    approach: "確定済みの売掛債権を早期現金化して機材購入の資金に充てる使い方です。必要なタイミングでスポットで利用できる点が、継続的な借入との違いです。",
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
    merit: "高額案件にも対応しており、複数現場を抱える清掃会社のまとまった売掛債権も相談しやすい。全国から利用可能。",
  },
  {
    name: "日本中小企業金融サポート機構",
    features: "一般社団法人が運営する非営利型。経済産業大臣認定。法人・個人事業主対応。",
    fee: "1.5%〜",
    speed: "最短即日",
    merit: "非営利法人のため手数料が業界最安水準。人件費比率が高くコストを抑えたい清掃会社に向く。認定機関の安心感。",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。少額（30万円〜）対応。オンライン完結型。最短即日入金。",
    fee: "0.5%〜",
    speed: "最短即日",
    merit: "審査通過率が高く、開業間もない清掃業者や個人事業主でも相談しやすい。少額の清掃料金債権にも対応。",
  },
];

const faqs = [
  {
    question: "清掃業でもファクタリングを利用できますか？",
    answer:
      "はい、利用できます。ビルメンテナンスや定期清掃などの契約に基づく清掃料金の売掛債権（請求済み・金額確定済みのもの）はファクタリングの対象になります。清掃業は月次締め・後払いの商習慣が一般的で、人件費や資材費が先行しやすいため、入金までのギャップを埋める手段としてファクタリングが活用されています。",
  },
  {
    question: "清掃業のファクタリング手数料の相場は？",
    answer:
      "一般的な相場は2社間ファクタリングで8〜18%、3社間ファクタリングで1〜9%程度です（あくまで目安であり、実際の手数料は会社や売掛先の信用力、契約内容により異なります）。売掛先が大手の不動産管理会社や官公庁の場合は信用力が高く評価され、手数料が低くなる傾向があります。複数社から見積もりを取って比較することをおすすめします。",
  },
  {
    question: "毎月発生する定期清掃契約の売掛金も対象になりますか？",
    answer:
      "はい、対象になります。定期清掃契約に基づき月次で確定する清掃料金の債権は、金額と支払期日が明確なためファクタリングに利用しやすい債権です。ただし、将来の未確定分（まだ役務を提供していない月の分）は対象外となるのが一般的で、請求済み・金額確定済みの債権が対象です。",
  },
  {
    question: "取引先（管理会社やビルオーナー）に知られずに利用できますか？",
    answer:
      "2社間ファクタリングであれば、取引先への通知や承諾なしで利用できます。不動産管理会社やビルオーナーとの継続的な取引関係に影響を与えたくない場合は2社間が選ばれています。3社間ファクタリングは取引先の承諾が必要な代わりに、手数料が低くなる傾向があります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "清掃業向けファクタリング｜清掃料金の売掛債権を早期現金化",
  description: "清掃業の資金繰り課題とファクタリング活用法。定期契約の後払いと先行コストのギャップ解消を解説。",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://hyogo-shihoushoshi.jp" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/cleaning/" },
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
    { "@type": "ListItem", position: 3, name: "清掃業向けファクタリング", item: "https://hyogo-shihoushoshi.jp/articles/cleaning/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function CleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "清掃業向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種特化ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            清掃業向けファクタリング
            <br className="hidden md:block" />
            清掃料金の売掛債権を早期現金化
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            定期清掃契約の後払いによる入金待ちと、毎月先行する人件費・資材費。清掃業特有の資金繰り課題をファクタリングで解決する方法と、おすすめのサービスを紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. 清掃業の資金繰り課題</a></li>
            <li><a href="#scenes" className="hover:underline">2. 清掃業のファクタリング活用シーン</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社3選</a></li>
            <li><a href="#flow" className="hover:underline">4. 利用の流れ</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">清掃業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">清掃業は定期契約による後払いの商習慣と、労働集約型ゆえの人件費・資材費の先行負担という構造から、資金繰りの課題を抱えやすい業種です。</p>
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
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">清掃業のファクタリング活用シーン</h2>
          <p className="mb-8 leading-relaxed text-text-light">清掃業でファクタリングが活用されやすい代表的なシーンを紹介します。いずれも「確定した売掛債権を早期現金化する」という基本の使い方です。</p>
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
          <p className="mb-8 leading-relaxed text-text-light">清掃業の売掛債権の現金化に利用しやすい会社を厳選して3社紹介します。</p>
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
          <p className="mb-8 leading-relaxed text-text-light">清掃会社がファクタリングを利用する際の一般的な流れを解説します。</p>
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
                <p className="mt-2 text-sm leading-relaxed text-text-light">身分証明書、清掃業務の契約書や請求書、通帳コピーなどを提出します。定期契約による継続的な入金実績が確認できると審査がスムーズです。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">3</span>
              <div>
                <h3 className="font-bold text-text-main">審査・見積もり</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">売掛先（管理会社・ビルオーナー・法人顧客など）の信用力や取引の継続性を中心に審査されます。見積もりで手数料率と受取額を必ず確認しましょう。</p>
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

        {/* ── 清掃業で利用する際のポイント ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">清掃業でファクタリングを利用する際のポイント</h2>
          <p className="mb-4 leading-relaxed text-text-light">
            清掃業の売掛債権をファクタリングで現金化する際に、押さえておきたいポイントをまとめます。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">対象となる債権</strong>：定期清掃・スポット清掃などの契約に基づく、請求済み・金額確定済みの清掃料金の売掛債権</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">手数料の目安</strong>：2社間8〜18%・3社間1〜9%程度（目安であり会社・契約内容により異なる）。売掛先が大手管理会社・官公庁だと有利になりやすい</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">&#9679;</span>
                <span><strong className="text-text-main">審査のポイント</strong>：売掛先の信用力と取引の継続性が重視される。毎月確定する定期清掃契約の債権が多い清掃業はこの点で相性が良い</span>
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
                    <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
                    <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
                    </ul>
                  </div>
                </section>

{/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/restaurant/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">飲食業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">人件費先行型ビジネスの資金繰り改善</p>
            </Link>
            <Link href="/articles/nursing-care/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">介護事業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">労働集約型サービス業の資金調達ガイド</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">手数料の相場と計算方法</p>
              <p className="mt-1 text-sm text-text-light">手数料を安くする5つのコツも紹介</p>
            </Link>
            <Link href="/articles/small-amount/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">少額ファクタリング</p>
              <p className="mt-1 text-sm text-text-light">少額の売掛金から使える会社を紹介</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">清掃業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピードで各社を徹底比較。人件費・資材費が先行する資金繰りに合うサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
