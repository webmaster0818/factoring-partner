import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "コンサル・士業向けファクタリング｜報酬の早期入金",
  description:
    "コンサルティング会社・士業（税理士・弁護士・社労士など）向けのファクタリングを徹底解説。プロジェクト報酬・顧問料の入金サイトの長さを解消し、事務所運営費の支払いに対応する方法を紹介。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/consulting/",
  },
  openGraph: {
    title: "コンサル・士業向けファクタリング｜報酬の早期入金",
    description: "コンサル・士業の報酬を早期入金。ファクタリング活用法と注意点を解説。",
    url: "https://factoring-partner.pages.dev/articles/consulting/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const challenges = [
  {
    title: "プロジェクト完了後の入金サイトが長い",
    description:
      "コンサルティング業では、プロジェクト完了後に成果物を納品し、検収を経て入金される流れが一般的です。着手から入金まで3〜6ヶ月かかるケースも珍しくなく、その間の人件費や事務所経費の支払いが負担になります。",
  },
  {
    title: "顧問契約の月額報酬が後払い",
    description:
      "税理士・社労士・弁護士などの士業は、顧問契約の月額報酬が翌月末払い・翌々月末払いであることが多いです。複数の顧問先を抱えていても、入金タイミングが遅れると資金繰りが厳しくなります。",
  },
  {
    title: "スタッフ採用・育成の先行投資",
    description:
      "事業拡大のためにスタッフを採用すると、売上が立つまでの間、給与が先行して発生します。コンサル業は人材が命であるため、優秀な人材を確保するための先行投資が必要です。",
  },
  {
    title: "大型案件受注時の資金需要",
    description:
      "大手企業からの大型コンサルティング案件を受注した際、チーム編成やツール導入などの初期投資が発生します。案件報酬が入金されるまでの資金繰りにファクタリングが活用されます。",
  },
];

const recommendedCompanies = [
  {
    name: "ビートレーディング",
    features: "業界最大手級。コンサル・士業の利用実績あり。高額案件にも上限なし対応。最短2時間入金。",
    fee: "2%〜",
    speed: "最短2時間",
  },
  {
    name: "アクセルファクター",
    features: "審査通過率93%以上。少額（30万円〜）対応。個人事業主の士業もOK。即日入金対応。",
    fee: "2%〜",
    speed: "最短即日",
  },
  {
    name: "QuQuMo（ククモ）",
    features: "手数料1%〜。請求書と通帳のみで審査。オンライン完結で忙しいコンサルタントに最適。",
    fee: "1%〜",
    speed: "最短2時間",
  },
  {
    name: "日本中小企業金融サポート機構",
    features: "非営利法人運営。経済産業大臣認定。低手数料で安心。2社間・3社間対応。",
    fee: "1.5%〜",
    speed: "最短即日",
  },
  {
    name: "ラボル",
    features: "フリーランスコンサルタント向け。1万円〜対応。24時間365日振込。手数料一律10%。",
    fee: "10%固定",
    speed: "最短60分",
  },
];

const useCases = [
  {
    title: "大手企業向けコンサル報酬の早期入金",
    situation: "大手メーカーから3ヶ月間のコンサルティング案件を受注。報酬500万円はプロジェクト完了後の検収から2ヶ月後に入金予定。その間のスタッフ給与250万円の支払いが厳しい。",
    solution: "コンサル報酬の請求書をファクタリングで買取。手数料4%（20万円）で480万円を受取。5ヶ月先の入金を前倒しし、安定したプロジェクト運営を実現。",
  },
  {
    title: "税理士事務所の繁忙期対応",
    situation: "確定申告シーズンで臨時スタッフを3名採用。人件費120万円が先行して必要だが、顧問料の入金は翌月末。手元資金だけでは賄えない。",
    solution: "既存顧問先への確定済み請求書をファクタリングで現金化。臨時スタッフの人件費を賄い、繁忙期の業務をスムーズに遂行。",
  },
  {
    title: "弁護士事務所の成功報酬待ち期間の資金繰り",
    situation: "訴訟案件で着手金は受領済みだが、成功報酬は判決確定後の支払い。事務所の固定費（家賃・スタッフ給与）の支払いが圧迫されている。",
    solution: "他の顧問契約の売掛金をファクタリングで現金化し、固定費の支払いに充当。訴訟案件に集中できる環境を整備。",
  },
];

const targetProfessions = [
  {
    profession: "経営コンサルタント",
    description: "戦略コンサルティングやDX支援など、プロジェクト期間が長い案件で入金サイトも長くなりがちです。チーム体制の維持費をファクタリングでカバーできます。",
  },
  {
    profession: "税理士・公認会計士",
    description: "月次顧問料、決算業務、確定申告業務の報酬を早期に受け取ることで、事務所の安定運営が可能になります。繁忙期の臨時スタッフ採用にも活用できます。",
  },
  {
    profession: "弁護士",
    description: "顧問料や着手金以外に、訴訟の成功報酬は入金時期が不確定です。確定している顧問料の売掛金をファクタリングすることで、安定的な事務所経営が可能です。",
  },
  {
    profession: "社会保険労務士",
    description: "給与計算代行・助成金申請代行などの月額報酬を早期に現金化することで、事務所の資金繰りを安定させられます。繁忙期（年度末・社会保険算定時期）の対応にも有効です。",
  },
];

const faqs = [
  {
    question: "コンサルティング報酬もファクタリングの対象になりますか？",
    answer:
      "はい、コンサルティング報酬もファクタリングの対象になります。クライアント企業に対して発行した請求書（業務委託料・コンサルティング報酬）が対象です。ただし、まだ業務が完了していない案件の将来の売掛金は対象外です。納品・検収が完了し、請求書を発行済みの報酬が対象となります。",
  },
  {
    question: "個人事業主の士業でもファクタリングを利用できますか？",
    answer:
      "はい、個人事業主の士業でも利用可能です。ラボル、アクセルファクター、QuQuMoなどは個人事業主にも対応しています。税理士や社労士として独立開業している方も、顧問先への請求書をもとにファクタリングを利用できます。",
  },
  {
    question: "クライアントにファクタリングの利用が知られますか？",
    answer:
      "2社間ファクタリングを選べば、クライアントに通知されません。コンサル・士業は信用が重要なため、取引先に知られたくないという方は2社間ファクタリングを選びましょう。ただし3社間より手数料は高めです。",
  },
  {
    question: "コンサル業のファクタリング手数料の相場は？",
    answer:
      "コンサル業の手数料は、2社間で5%〜15%、3社間で1%〜8%程度です。大手企業向けの売掛金は信用力が高いため、比較的低い手数料で利用できます。フリーランスコンサルタントの場合はやや高めになる傾向がありますが、複数社の見積もりで条件を比較しましょう。",
  },
  {
    question: "顧問料の分割払い（毎月）でもファクタリングできますか？",
    answer:
      "はい、毎月発生する顧問料もファクタリングの対象です。当月分の顧問料の請求書を発行した時点で、その売掛金をファクタリングで現金化できます。継続的な利用で2回目以降の手数料が下がる会社も多いため、毎月利用するケースにも対応できます。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "コンサル・士業向けファクタリング｜報酬の早期入金",
  description: "コンサル・士業の報酬を早期入金。ファクタリング活用法と注意点を解説。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/consulting/" },
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
    { "@type": "ListItem", position: 3, name: "コンサル・士業向けファクタリング", item: "https://factoring-partner.pages.dev/articles/consulting/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "コンサル・士業向けファクタリング" }]} />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">業種別ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            コンサル・士業向けファクタリング
            <br className="hidden md:block" />
            報酬の早期入金
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            コンサルティング会社・士業事務所の資金繰り課題をファクタリングで解決。プロジェクト報酬・顧問料の入金待ちを解消する方法を詳しく解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#challenges" className="hover:underline">1. コンサル・士業の資金繰り課題</a></li>
            <li><a href="#professions" className="hover:underline">2. 対象となる業種と活用シーン</a></li>
            <li><a href="#recommended" className="hover:underline">3. おすすめファクタリング会社5選</a></li>
            <li><a href="#cases" className="hover:underline">4. 活用事例</a></li>
            <li><a href="#tips" className="hover:underline">5. 利用時のポイントと注意点</a></li>
            <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 課題 ─── */}
        <section id="challenges" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">コンサル・士業の資金繰り課題</h2>
          <p className="mb-8 leading-relaxed text-text-light">コンサルティング業界や士業は、知的サービスを提供する業種ゆえに、売上の入金タイミングと経費の支出タイミングにギャップが生じやすい特徴があります。</p>
          <div className="space-y-4">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
                <h3 className="mb-3 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 対象業種 ─── */}
        <section id="professions" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">対象となる業種と活用シーン</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリングが活用できるコンサル・士業の具体的な業種と、それぞれの活用シーンを紹介します。</p>
          <div className="grid gap-4 md:grid-cols-2">
            {targetProfessions.map((item) => (
              <div key={item.profession} className="rounded-lg border border-accent/30 bg-orange-50 p-5">
                <h3 className="mb-3 font-bold text-accent">{item.profession}</h3>
                <p className="text-sm leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">コンサル・士業におすすめのファクタリング会社5選</h2>
          <p className="mb-8 leading-relaxed text-text-light">コンサル・士業の報酬に対応したおすすめのファクタリング会社を紹介します。</p>
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 活用事例 ─── */}
        <section id="cases" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">コンサル・士業のファクタリング活用事例</h2>
          <p className="mb-8 leading-relaxed text-text-light">実際の活用シーンを3つのケースで紹介します。</p>
          <div className="space-y-6">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 text-lg font-bold text-primary">{item.title}</h3>
                <div className="space-y-3">
                  <div className="rounded-lg bg-section-bg p-4">
                    <p className="text-xs font-semibold text-text-light">状況</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-main">{item.situation}</p>
                  </div>
                  <div className="rounded-lg bg-teal-50 p-4">
                    <p className="text-xs font-semibold text-secondary">解決策</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-main">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── コンサル・士業の資金繰り改善方法 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">コンサル・士業の資金繰り改善方法</h2>
          <p className="mb-8 leading-relaxed text-text-light">ファクタリング以外にも活用できる、コンサル・士業の資金繰り改善方法を紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">着手金・中間金を設定する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                プロジェクト型のコンサルティングでは、着手金（プロジェクト開始時）と中間金（中間レビュー時）を設定することで、入金のタイミングを分散させ、資金繰りを安定させることができます。新規案件の契約時から導入を検討しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">月額顧問料の前払い制度</h3>
              <p className="text-sm leading-relaxed text-text-light">
                顧問契約の場合、月額料金を当月分前払い（月初に入金）とする契約条件を提案してみましょう。クライアントにとっても予算管理がしやすいメリットがあり、交渉の余地があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">サブスクリプション型サービスの導入</h3>
              <p className="text-sm leading-relaxed text-text-light">
                コンサルティングサービスの一部をサブスクリプション型（月額固定）に移行することで、安定的な売上と入金が見込めるようになります。オンライン相談やレポート提供など、定型化できるサービスから導入しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">クレジットカード決済の導入</h3>
              <p className="text-sm leading-relaxed text-text-light">
                小規模なコンサル・士業の場合、クレジットカード決済を導入することで即時入金に近い形を実現できます。決済手数料は3〜4%程度ですが、入金サイトが大幅に短縮されるメリットがあります。
              </p>
            </div>
          </div>
        </section>

        {/* ── ポイントと注意点 ─── */}
        <section id="tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">利用時のポイントと注意点</h2>
          <p className="mb-8 leading-relaxed text-text-light">コンサル・士業ならではの注意点を押さえておきましょう。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">守秘義務とファクタリングの関係</h3>
              <p className="text-sm leading-relaxed text-text-light">
                士業は守秘義務がありますが、ファクタリングの審査で開示するのは請求書・契約書・通帳などの財務情報であり、クライアントの機密情報を開示する必要はありません。ただし、気になる場合はファクタリング会社に守秘義務について確認しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">成功報酬型の案件は対象外</h3>
              <p className="text-sm leading-relaxed text-text-light">
                弁護士の成功報酬など、金額が確定していない売掛金はファクタリングの対象外です。金額が確定し、請求書が発行された時点で初めてファクタリングの対象になります。着手金や顧問料など確定済みの報酬を活用しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">継続利用で手数料を下げる</h3>
              <p className="text-sm leading-relaxed text-text-light">
                毎月の顧問料をファクタリングする場合、同じ会社で継続利用することで手数料が下がる傾向にあります。初回は手数料が高めでも、2回目以降に条件交渉してコストを抑えましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 font-bold text-primary">中長期的な資金計画も併せて検討</h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングは短期的な資金繰りには有効ですが、長期的にはコストがかかります。日本政策金融公庫の融資や信用金庫のプロパー融資など、低金利の資金調達手段も並行して検討しましょう。
              </p>
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

        {/* ── まとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：コンサル・士業がファクタリングを活用するポイント</h2>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">確定済みの報酬・顧問料が対象</strong>：業務完了後に請求書を発行した確定売掛金がファクタリングの対象。成功報酬など未確定のものは対象外。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">2社間でクライアントに知られずに利用</strong>：信用が重要なコンサル・士業は、2社間ファクタリングを選んでクライアントに通知されない形を推奨。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">継続利用で手数料を下げる</strong>：月額顧問料を毎月ファクタリングする場合、同じ会社で継続利用することで手数料交渉が可能。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">守秘義務と両立可能</strong>：ファクタリングの審査で開示するのは財務情報のみ。クライアントの機密情報は不要。</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 text-primary">&#9679;</span><span><strong className="text-text-main">中長期的には融資にシフト</strong>：ファクタリングは短期のつなぎ。中長期的には日本政策金融公庫や信用金庫の融資を活用してコストを抑える。</span></li>
            </ul>
          </div>
        </section>

        {/* ── コンサル・士業の利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">コンサル・士業のファクタリング利用の流れ</h2>
          <div className="space-y-3">
            {[
              { step: "業務完了・請求書発行", description: "コンサルティング業務の完了後���または月次顧問料の請求書を発行した時点で、ファクタリングの対象になります。" },
              { step: "ファクタリング会社に見積もり依頼", description: "請求書の金額・クライアン���企業名・入金予定日を伝え、3社以上に見積もりを依頼します。" },
              { step: "必要書類の提出", description: "請求書・通帳コピー・身分証明書・業務委託契約書などをオンラインで提出します。" },
              { step: "審査・契約", description: "クライアント企業の信用力を中心に審査。通過後、ノンリコースの契約書を確認し���締結。" },
              { step: "即日入金", description: "契約完了後、最短即日で指定口座に入金。スタッフの給与や事務所経費の支払いに活用。" },
              { step: "クライアントからの入金後に送金", description: "入金予定日にクライアン���から入金があったら、ファクタリング会社に送金して完了です。" },
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

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/for-freelance/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">フリーランス向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">個人で活動する方向けガイド</p>
            </Link>
            <Link href="/articles/saas/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">SaaS・システム開発向け</p>
              <p className="mt-1 text-sm text-text-light">月額課金の資金繰り改善</p>
            </Link>
            <Link href="/articles/for-sole-proprietor/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">個人事業主向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">少額から利用できるサービス</p>
            </Link>
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリング手数料ガイド</p>
              <p className="mt-1 text-sm text-text-light">相場と安くする方法</p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">コンサル・士業に最適なファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            報酬・顧問料の売掛金に対応したファクタリング会社を一括比較。手数料・入金スピードであなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
