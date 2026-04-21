import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "フリーランス向けファクタリング5選｜請求書を即日現金化する方法",
  description:
    "フリーランス向けファクタリング会社おすすめ5社を徹底比較。請求書を即日現金化する方法、手数料比較、確定申告・会計処理、エージェント経由の請求書への対応まで詳しく解説します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/for-freelance/",
  },
  openGraph: {
    title:
      "フリーランス向けファクタリング5選｜請求書を即日現金化する方法",
    description:
      "フリーランス向けファクタリング会社おすすめ5社を徹底比較。請求書の即日現金化・手数料・確定申告まで解説。",
    url: "https://factoring-partner.pages.dev/articles/for-freelance/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const top5 = [
  {
    rank: 1,
    name: "ペイトナー",
    fee: "一律10%",
    speed: "最短10分",
    minAmount: "1万円〜",
    features: [
      "請求書アップロードで最短10分入金",
      "1万円からの少額に対応",
      "スマホアプリで完結",
      "フリーランスエンジニア・デザイナーに人気",
    ],
    description:
      "ペイトナーはフリーランスに最も選ばれているファクタリングサービスです。請求書をアップロードするだけで最短10分で口座に入金される圧倒的なスピードが最大の魅力。手数料は一律10%と明確で、「あと数日で入金されるのに今すぐ現金が必要」という場面で威力を発揮します。スマホアプリにも対応しており、外出先からでも簡単に申請できます。",
  },
  {
    rank: 2,
    name: "ラボル",
    fee: "一律10%",
    speed: "最短30分",
    minAmount: "1万円〜",
    features: [
      "24時間365日・土日祝も対応",
      "買取上限に制限なし",
      "東証プライム上場企業グループ",
      "フリーランスの報酬先払いに最適",
    ],
    description:
      "ラボルは24時間365日対応のファクタリングサービスで、土日祝日でも最短30分で入金されます。東証プライム上場企業・株式会社セレスの100%子会社が運営しているため、信頼性は抜群。買取上限に制限がなく、フリーランスの大型案件にも対応できます。「金曜の夜に急な出費が発生した」という場合でも即座に対応可能です。",
  },
  {
    rank: 3,
    name: "FREENANCE（フリーナンス）",
    fee: "3%〜10%",
    speed: "最短即日",
    minAmount: "1万円〜",
    features: [
      "損害賠償保険が無料で付帯",
      "フリーナンス口座で振込手数料無料",
      "GMOグループの信頼性",
      "フリーランスの総合的な金融サポート",
    ],
    description:
      "FREENANCE（フリーナンス）はGMOクリエイターズネットワークが運営するフリーランス向け金融プラットフォームです。ファクタリング（即日払い）だけでなく、最大5,000万円の損害賠償保険「あんしん補償」が無料で付帯するのが最大の差別化ポイント。フリーナンス口座を使えば振込手数料も無料になり、トータルコストを抑えられます。",
  },
  {
    rank: 4,
    name: "QuQuMo",
    fee: "1%〜14.8%",
    speed: "最短2時間",
    minAmount: "制限なし",
    features: [
      "手数料1%〜と業界最安水準",
      "完全オンラインで来店不要",
      "金額制限なし",
      "弁護士ドットコム監修の電子契約",
    ],
    description:
      "QuQuMo（ククモ）は手数料1%〜14.8%と業界最安水準のファクタリングサービスです。完全オンラインで手続きが完結し、来店不要。弁護士ドットコムのクラウドサインを使った電子契約で安全性も確保されています。手数料を最小限に抑えたいフリーランスに最適で、売掛先が大手企業なら1%台の手数料で利用できる可能性もあります。",
  },
  {
    rank: 5,
    name: "PAYTODAY",
    fee: "1%〜9.5%",
    speed: "最短30分",
    minAmount: "10万円〜",
    features: [
      "AI審査で最短30分入金",
      "手数料1%〜9.5%の低コスト",
      "オンライン完結",
      "IT・Web系フリーランスに人気",
    ],
    description:
      "PAYTODAYはAI審査を導入し、最短30分でのスピード入金を実現したファクタリングサービスです。手数料は1%〜9.5%と業界最安水準で、フリーランスの利益を最大限守れます。特にIT・Web系のフリーランスに人気があり、請求書のデータをアップロードするだけで審査から入金まで完結します。",
  },
];

const cashFlowProblems = [
  {
    title: "支払いサイトが長い",
    description:
      "フリーランスの多くは月末締め翌月末払い（支払いサイト30日）ですが、翌々月払い（60日）のクライアントも少なくありません。仕事を完了してから実際に報酬が振り込まれるまで1〜2ヶ月待たなければならず、その間の生活費や事業経費の支払いに困ることがあります。",
  },
  {
    title: "収入が不安定",
    description:
      "フリーランスは毎月の収入が一定ではないため、繁忙期と閑散期で手元資金に大きな差が生まれます。大型案件の途中で次の案件の着手金が必要になったり、機材の購入やスキルアップのための投資が急に必要になったりするケースも珍しくありません。",
  },
  {
    title: "急な出費への対応が難しい",
    description:
      "PCの故障、健康保険料や税金の支払い、引越し費用など、予期せぬ出費はフリーランスにとって大きな打撃です。会社員のように毎月安定した給与がないため、緊急時の資金確保が課題になります。カードローンは金利が高く、銀行融資は時間がかかります。",
  },
];

const feeComparison = [
  { name: "PAYTODAY", fee: "1%〜9.5%", note: "AI審査で低コスト" },
  { name: "QuQuMo", fee: "1%〜14.8%", note: "大手取引先なら低手数料" },
  { name: "FREENANCE", fee: "3%〜10%", note: "保険付きの総合力" },
  { name: "ペイトナー", fee: "一律10%", note: "明朗会計で安心" },
  { name: "ラボル", fee: "一律10%", note: "24時間365日対応" },
];

const accountingSteps = [
  {
    step: "1. ファクタリング申込時",
    description:
      "請求書をファクタリング会社に提出した時点では、まだ仕訳は不要です。売掛金の所有権が移転するのは契約成立時です。",
  },
  {
    step: "2. 入金時の仕訳",
    description:
      "ファクタリング会社から入金された時点で仕訳を行います。「借方：普通預金（入金額）」「借方：売掛債権売却損（手数料）」「貸方：売掛金（請求書の額面）」と記帳します。",
  },
  {
    step: "3. 確定申告での処理",
    description:
      "売掛債権売却損は「雑損失」または「支払手数料」として経費計上できます。青色申告・白色申告どちらでも経費として認められます。なお、ファクタリング手数料は消費税非課税取引です。",
  },
];

const faqs = [
  {
    question: "フリーランスでもファクタリングは利用できますか？",
    answer:
      "はい、フリーランスでも利用できます。近年はフリーランス専用のファクタリングサービス（ペイトナー・ラボル・FREENANCEなど）が充実しており、1万円からの少額対応、最短10分入金など、フリーランスのニーズに合わせた柔軟なサービスが提供されています。",
  },
  {
    question: "エージェント（仲介会社）経由の請求書でもファクタリングできますか？",
    answer:
      "エージェント経由の案件でも、請求書がフリーランス本人名義で発行されていればファクタリングの対象になります。ただし、エージェントとの契約で債権譲渡禁止特約が含まれている場合は注意が必要です。2020年の民法改正により、債権譲渡禁止特約があっても譲渡自体は有効ですが、トラブル防止のため事前に確認しておくことをおすすめします。",
  },
  {
    question: "フリーランスがファクタリングを利用するデメリットは？",
    answer:
      "主なデメリットは手数料コストです。手数料10%の場合、100万円の請求書から受け取れるのは90万円です。また、毎月継続的に利用すると手数料が累積し、年間で大きなコストになります。ファクタリングは一時的な資金繰りの解決策として利用し、クライアントへの支払いサイト交渉なども並行して進めましょう。",
  },
  {
    question: "フリーランスのファクタリング審査は厳しいですか？",
    answer:
      "フリーランス向けファクタリングの審査は、銀行融資に比べて大幅に緩やかです。審査で最も重視されるのは売掛先の信用力であり、フリーランス自身の年収や事業年数はそれほど重視されません。請求書と本人確認書類、通帳コピーがあれば申し込める場合がほとんどです。",
  },
  {
    question: "ファクタリングの手数料は経費にできますか？",
    answer:
      "はい、ファクタリングの手数料は事業に関連する経費として確定申告で計上できます。勘定科目は「売掛債権売却損」「雑損失」または「支払手数料」で処理します。消費税は非課税取引です。具体的な処理方法は税理士に相談することをおすすめしますが、一般的な経費処理と同様に領収書（明細書）を保管しておきましょう。",
  },
];

const useCases = [
  {
    title: "エンジニアの開発機材購入",
    description:
      "Webエンジニアとして活動するAさんは、高性能なMacBookの購入資金が必要でしたが、前月の報酬がまだ入金されていませんでした。ペイトナーで50万円の請求書を最短10分で現金化し、すぐに機材を購入。生産性の向上につながり、新規案件の受注にもつながりました。",
  },
  {
    title: "デザイナーの税金支払い",
    description:
      "フリーランスデザイナーのBさんは、住民税の支払い期限が迫っていましたが、クライアントからの入金は翌月末。ラボルで30万円の請求書を土曜日に申請し、30分で入金されました。税金の滞納を防ぎ、信用情報を守ることができました。",
  },
  {
    title: "ライターの引越し費用",
    description:
      "フリーランスライターのCさんは、事務所の移転費用が急遽必要になりました。FREENANCEで80万円の請求書を即日現金化。損害賠償保険も無料で付帯しているため、新しい事務所での万が一のトラブルにも備えられました。",
  },
  {
    title: "コンサルタントの外注費支払い",
    description:
      "フリーランスコンサルタントのDさんは、大型プロジェクトで外注パートナーへの支払いが先行していました。QuQuMoで150万円の請求書を手数料3%で現金化。低手数料で外注費を賄い、プロジェクトを円滑に進められました。",
  },
];

const comparisonWithOther = [
  { method: "ファクタリング", speed: "最短10分", cost: "手数料1%〜10%", credit: "影響なし", merit: "借入ではない", demerit: "手数料がかかる" },
  { method: "カードローン", speed: "最短即日", cost: "年利15%〜18%", credit: "記録される", merit: "繰り返し利用可", demerit: "金利が高い・借入になる" },
  { method: "銀行融資", speed: "2週間〜2ヶ月", cost: "年利1%〜5%", credit: "記録される", merit: "金利が安い", demerit: "審査が厳しい・時間がかかる" },
  { method: "クレジットカード", speed: "即時", cost: "年利15%〜18%（リボ）", credit: "記録される", merit: "手軽に使える", demerit: "限度額が低い" },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "フリーランス向けファクタリング5選｜請求書を即日現金化する方法",
  description:
    "フリーランス向けファクタリング会社おすすめ5社を徹底比較。請求書の即日現金化・手数料・確定申告まで解説。",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
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
    "@id":
      "https://factoring-partner.pages.dev/articles/for-freelance/",
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

export default function ForFreelancePage() {
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
          { label: "フリーランス向けファクタリング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            フリーランス向け
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            フリーランス向けファクタリング5選
            <br className="hidden md:block" />
            請求書を即日現金化する方法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            フリーランスの請求書を最短10分で現金化できるファクタリングサービス5社を厳選比較。手数料・入金スピード・確定申告での会計処理・エージェント経由の請求書への対応まで詳しく解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#cashflow" className="hover:underline">
                1. フリーランスの資金繰り問題
              </a>
            </li>
            <li>
              <a href="#mechanism" className="hover:underline">
                2. 請求書買取（ファクタリング）の仕組み
              </a>
            </li>
            <li>
              <a href="#ranking" className="hover:underline">
                3. フリーランス向けファクタリングおすすめ5選
              </a>
            </li>
            <li>
              <a href="#fee-comparison" className="hover:underline">
                4. 手数料比較表
              </a>
            </li>
            <li>
              <a href="#accounting" className="hover:underline">
                5. 確定申告・会計処理の方法
              </a>
            </li>
            <li>
              <a href="#agent" className="hover:underline">
                6. エージェント経由の請求書は対象か
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── フリーランスの資金繰り問題 ─── */}
        <section id="cashflow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            フリーランスの資金繰り問題
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            フリーランスとして独立すると、スキルや営業力だけでなく<strong className="text-text-main">資金繰りの管理</strong>も自分で行う必要があります。会社員時代には気にしなかった「入金までのタイムラグ」が、フリーランスにとっては深刻な問題になることがあります。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            特に独立したばかりの時期は貯蓄が少なく、クライアントからの入金を待つ間に生活費や事業経費が不足するケースが多く見られます。こうした資金繰りの問題を解決する手段の一つが「ファクタリング（請求書の早期現金化）」です。
          </p>

          <div className="space-y-6">
            {cashFlowProblems.map((problem, index) => (
              <div
                key={problem.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {problem.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 請求書買取の仕組み ─── */}
        <section id="mechanism" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            請求書買取（ファクタリング）の仕組み
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングとは、クライアントに発行した<strong className="text-text-main">請求書（売掛債権）をファクタリング会社に売却</strong>し、支払い期日前に現金を受け取る仕組みです。借入ではないため、信用情報に影響せず、返済も不要です。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            フリーランスが利用する場合、基本的に「2社間ファクタリング」が使われます。これはフリーランスとファクタリング会社の2者間で取引するため、クライアントに知られることはありません。
          </p>

          <div className="rounded-lg border border-border bg-section-bg p-6">
            <p className="mb-4 text-center text-sm font-bold text-text-main">
              フリーランスのファクタリングの流れ
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">1</span>
                <p className="text-sm text-text-light">クライアントに納品・請求書を発行する</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">2</span>
                <p className="text-sm text-text-light">請求書をファクタリング会社にアップロードする</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">3</span>
                <p className="text-sm text-text-light">ファクタリング会社が審査し、手数料を差し引いた金額を入金する（最短10分）</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">4</span>
                <p className="text-sm text-text-light">クライアントから支払い期日に入金されたら、ファクタリング会社に送金する</p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-2 font-bold text-secondary">ポイント</p>
            <p className="text-sm leading-relaxed text-text-light">
              ファクタリングは「借金」ではなく「請求書の売却」です。そのため、クレジットカードの審査やローンの審査に影響しません。フリーランスにとって信用情報を守りながら資金調達できる貴重な手段です。
            </p>
          </div>
        </section>

        {/* ── おすすめ5選 ─── */}
        <section id="ranking" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            フリーランス向けファクタリングおすすめ5選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            フリーランスが使いやすいファクタリングサービス5社を厳選しました。入金スピード・手数料の明確さ・少額対応の可否を重視して選定しています。
          </p>
          <div className="space-y-8">
            {top5.map((company) => (
              <div
                key={company.name}
                className="rounded-lg border border-border bg-white p-6 md:p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {company.rank}
                  </span>
                  <h3 className="text-xl font-bold text-text-main">
                    {company.name}
                  </h3>
                </div>

                <div className="mb-4 grid gap-3 text-sm md:grid-cols-3">
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">手数料</p>
                    <p className="mt-1 font-bold text-primary">{company.fee}</p>
                  </div>
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">入金スピード</p>
                    <p className="mt-1 font-bold text-primary">{company.speed}</p>
                  </div>
                  <div className="rounded border border-border bg-section-bg p-3">
                    <p className="text-xs text-text-light">最低金額</p>
                    <p className="mt-1 font-bold text-primary">{company.minAmount}</p>
                  </div>
                </div>

                <p className="mb-4 leading-relaxed text-text-light">
                  {company.description}
                </p>

                <div className="rounded-lg bg-section-bg p-4">
                  <p className="mb-2 text-sm font-bold text-text-main">特徴・メリット</p>
                  <ul className="grid gap-1 text-sm text-text-light md:grid-cols-2">
                    {company.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-0.5 text-secondary">&#10003;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 手数料比較 ─── */}
        <section id="fee-comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料比較表
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            フリーランス向けファクタリング5社の手数料を比較します。手数料率が低いほど受け取れる金額が多くなるため、複数社を比較して最適なサービスを選びましょう。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">サービス名</th>
                  <th className="px-4 py-3 font-semibold">手数料</th>
                  <th className="px-4 py-3 font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody>
                {feeComparison.map((item, index) => (
                  <tr
                    key={item.name}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-4 py-3 font-semibold text-text-main">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 font-bold text-primary">{item.fee}</td>
                    <td className="px-4 py-3 text-text-light">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※ 手数料率は売掛先の信用力や取引金額によって変動します。ペイトナーとラボルは一律料金のため、見積もり不要で利用できる手軽さがメリットです。
          </p>
        </section>

        {/* ── 確定申告・会計処理 ─── */}
        <section id="accounting" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            確定申告・会計処理の方法
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            フリーランスがファクタリングを利用した場合の確定申告での扱い方と、具体的な会計処理の方法を解説します。ファクタリングは借入ではないため、負債として計上する必要はありません。
          </p>

          <div className="space-y-6">
            {accountingSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-primary">{item.step}</h3>
                <p className="leading-relaxed text-text-light">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="mb-2 font-bold text-accent">会計ソフトでの処理方法</p>
            <p className="text-sm leading-relaxed text-text-light">
              freee・マネーフォワード・弥生会計などの会計ソフトでは、「売掛債権売却損」の勘定科目がプリセットされていない場合があります。その場合は「雑損失」や「支払手数料」で代用するか、勘定科目を新規作成してください。年間のファクタリング手数料が把握しやすくなるため、専用の勘定科目を作成することをおすすめします。
            </p>
          </div>
        </section>

        {/* ── エージェント経由の請求書 ─── */}
        <section id="agent" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            エージェント経由の請求書は対象か
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ITフリーランスの多くは、レバテックやPE-BANK、Midworksなどのエージェント（仲介会社）を通じて案件を受注しています。この場合、請求書の宛先はエンドクライアントではなくエージェント会社になるのが一般的です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">結論として、エージェント経由の請求書でもファクタリングは可能です。</strong>
            売掛先がエージェント会社（法人）になるため、むしろエージェント会社の信用力が高ければ審査に通りやすく、手数料も安くなる傾向があります。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            ただし、エージェントとの契約に「債権譲渡禁止特約」が含まれている場合があります。2020年の民法改正により、この特約があっても債権譲渡自体は有効ですが、エージェントとのトラブルを避けるため、事前に確認しておくことをおすすめします。
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-5">
              <p className="mb-2 font-bold text-secondary">対象になるケース</p>
              <ul className="space-y-1 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>フリーランス名義で請求書を発行している</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>エージェント会社からの入金実績がある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>契約書に債権譲渡禁止の制限がない</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <p className="mb-2 font-bold text-accent">注意が必要なケース</p>
              <ul className="space-y-1 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9888;</span>
                  <span>エージェントが請求書を発行する契約形態の場合</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9888;</span>
                  <span>債権譲渡禁止特約がある場合</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9888;</span>
                  <span>まだエージェントからの入金実績がない場合</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 利用事例 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            フリーランスのファクタリング活用事例
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            実際にフリーランスがファクタリングを活用して資金繰りの課題を解決した事例を紹介します。
          </p>
          <div className="space-y-6">
            {useCases.map((item, index) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
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
        </section>

        {/* ── 他の資金調達方法との比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングと他の資金調達方法の比較
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            フリーランスが利用できる資金調達方法はファクタリングだけではありません。他の方法と比較して、それぞれの特徴を理解しましょう。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold">方法</th>
                  <th className="px-3 py-3 font-semibold">速度</th>
                  <th className="px-3 py-3 font-semibold">コスト</th>
                  <th className="px-3 py-3 font-semibold">信用情報</th>
                  <th className="px-3 py-3 font-semibold">メリット</th>
                  <th className="px-3 py-3 font-semibold">デメリット</th>
                </tr>
              </thead>
              <tbody>
                {comparisonWithOther.map((row, index) => (
                  <tr
                    key={row.method}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-3 py-3 font-semibold text-text-main whitespace-nowrap">{row.method}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{row.speed}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{row.cost}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{row.credit}</td>
                    <td className="px-3 py-3 text-text-light">{row.merit}</td>
                    <td className="px-3 py-3 text-text-light">{row.demerit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-2 font-bold text-secondary">フリーランスにファクタリングが最適な理由</p>
            <p className="text-sm leading-relaxed text-text-light">
              フリーランスにとってファクタリングが最適な理由は、(1)信用情報に影響しない、(2)借入ではないため返済不要、(3)売掛先の信用力で審査されるため個人の属性に左右されにくい、の3点です。特にカードローンや銀行融資と異なり、将来の住宅ローン審査やクレジットカード審査に影響しないのは大きなメリットです。
            </p>
          </div>
        </section>

        {/* ── エージェント経由の請求書 ─── */}
        <section className="mb-16">
          <h3 className="mb-6 text-lg font-bold text-text-main md:text-xl">
            エージェント経由の請求書はファクタリング対象になる？
          </h3>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">エージェント経由の請求書もファクタリング可能</h3>
              <p className="leading-relaxed text-text-light">
                レバテックやランサーズなどのエージェント経由で発行した請求書もファクタリングの対象になります。フリーランスエンジニアやデザイナーなど、エージェントを介して案件を受注している方も安心して利用できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">売掛先はエージェント会社になる</h3>
              <p className="leading-relaxed text-text-light">
                エージェント経由の場合、売掛先はエンドクライアントではなくエージェント会社になります。そのため、審査ではエージェント会社の信用力が評価されます。大手エージェント（レバテック、ランサーズ等）経由であれば、売掛先の信用力が高いと判断され審査通過率は高い傾向にあります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">直接契約の方が手数料が安くなることも</h3>
              <p className="leading-relaxed text-text-light">
                直接クライアントと契約している場合、クライアント企業の信用力次第ではエージェント経由よりも手数料が安くなることがあります。特に上場企業や官公庁との直接取引であれば、より有利な条件を引き出せる可能性があります。
              </p>
            </div>
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
              href="/articles/for-sole-proprietor/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">個人事業主向けファクタリング5選</p>
              <p className="mt-1 text-sm text-text-light">
                少額・即日対応の比較と確定申告への影響を解説
              </p>
            </Link>
            <Link
              href="/articles/instant-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">即日ファクタリング10選</p>
              <p className="mt-1 text-sm text-text-light">
                最短10分〜当日入金のおすすめ会社を紹介
              </p>
            </Link>
            <Link
              href="/articles/low-fee/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料が安いファクタリング会社</p>
              <p className="mt-1 text-sm text-text-light">
                手数料相場と節約術をランキング形式で紹介
              </p>
            </Link>
            <Link
              href="/articles/online-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">オンライン完結ファクタリング8選</p>
              <p className="mt-1 text-sm text-text-light">
                来店不要で即日資金化できるサービスを紹介
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            フリーランスに最適なファクタリング会社を見つけましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            フリーランス向けファクタリング会社を手数料・入金スピード・使いやすさで徹底比較。あなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
