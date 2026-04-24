import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "FREENANCE(フリーナンス)の口コミ・評判｜GMO系フリーランス向けファクタリングを検証",
  description:
    "FREENANCE(フリーナンス)の口コミ・評判を徹底調査。GMOクリエイターズネットワーク運営、即日払い、フリーランス特化、損害賠償保険あんしん補償付きのサービスを利用者の声で検証します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/reviews/freenance/",
  },
  openGraph: {
    title:
      "FREENANCE(フリーナンス)の口コミ・評判｜GMO系フリーランス向けファクタリングを検証",
    description:
      "FREENANCEの口コミ・評判を徹底調査。GMO系フリーランス向けファクタリングを検証。",
    url: "https://factoring-partner.pages.dev/reviews/freenance/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const basicInfo = [
  { label: "手数料", value: "3%〜10%" },
  { label: "入金スピード", value: "最短即日" },
  { label: "買取可能額", value: "1万円〜（上限は与信次第）" },
  { label: "対象", value: "フリーランス・個人事業主" },
  { label: "オンライン対応", value: "◎（完全オンライン完結）" },
  { label: "付帯サービス", value: "あんしん補償（損害賠償保険）" },
  { label: "振込手数料", value: "無料（GMOあおぞらネット銀行宛）" },
  { label: "運営会社", value: "GMOクリエイターズネットワーク株式会社" },
];

const goodReviews = [
  {
    title: "フリーランス専用で使いやすい",
    label: "IT系フリーランスの利用者",
    detail:
      "フリーランス向けに特化して設計されているため、登録から請求書の買取までの流れが直感的でわかりやすかったという声があります。法人向けサービスと違い、個人の仕事の流れに合った仕組みになっている点が好評です。",
  },
  {
    title: "あんしん補償が無料で付帯する",
    label: "デザイナーの利用者",
    detail:
      "会員登録するだけで最大5,000万円の損害賠償保険が無料で付帯する点が高く評価されています。仕事中の事故やデータ漏洩など、フリーランスが抱えるリスクをカバーでき、ファクタリング以外のメリットも大きいと好評です。",
  },
  {
    title: "GMOグループの安心感がある",
    label: "Webエンジニアの利用者",
    detail:
      "運営元がGMOインターネットグループの企業であるため、運営母体の信頼性が高いと感じるユーザーが多いです。個人情報やお金を扱うサービスだからこそ、大手グループ運営の安心感が利用のきっかけになっています。",
  },
  {
    title: "少額から利用できる",
    label: "ライターの利用者",
    detail:
      "1万円からの少額利用が可能で、フリーランスの小口案件にも対応している点が評価されています。大きな売掛金がなくても資金調達できるため、副業やスタートアップ段階のフリーランスにも使いやすいと好評です。",
  },
];

const badReviews = [
  {
    title: "手数料が思ったより高い場合がある",
    label: "映像クリエイターの利用者",
    detail:
      "手数料3%〜と案内されているが、実際には初回利用時は上限に近い手数料になるケースがあるという声が見られます。与信が積み上がるまでは高めの手数料が適用される傾向があるようです。",
  },
  {
    title: "法人の売掛先でないと利用できない",
    label: "フリーランスの利用者",
    detail:
      "売掛先が個人の場合は即日払いの対象外となるため、個人クライアントとの取引が多いフリーランスには不便だという声があります。法人からの売掛金のみが買取対象となる点に注意が必要です。",
  },
  {
    title: "買取上限が与信で制限される",
    label: "コンサルタントの利用者",
    detail:
      "利用開始直後は与信枠が低く設定されており、高額の請求書を一度に買い取ってもらえないケースがあるという口コミがあります。継続利用で与信が上がるまでは限定的な利用になることがあるようです。",
  },
];

const merits = [
  {
    title: "あんしん補償で無料の損害賠償保険が付帯",
    description:
      "FREENANCE最大の特徴が、会員登録するだけで自動付帯する「あんしん補償」です。仕事中の事故・情報漏えい・納品物の欠陥など、フリーランスが業務上抱えるリスクに対して最大5,000万円の補償が受けられます。保険料は無料で、ファクタリングを利用しなくても補償が適用されます。",
  },
  {
    title: "GMOグループ運営の高い信頼性",
    description:
      "運営元のGMOクリエイターズネットワーク株式会社は、東証プライム上場のGMOインターネットグループに属する企業です。資本力と実績のある大手グループが運営しているため、個人情報の管理やサービスの継続性について高い安心感があります。",
  },
  {
    title: "フリーランス専用設計で使いやすい",
    description:
      "法人向けファクタリングサービスと異なり、フリーランス・個人事業主の業務フローに最適化された設計になっています。請求書をアップロードするだけで即日払いを申請でき、専門的な知識がなくても直感的に操作できます。",
  },
  {
    title: "1万円からの少額対応",
    description:
      "多くのファクタリングサービスでは数十万円以上の売掛金が対象ですが、FREENANCEは1万円から利用可能です。小口案件が多いフリーランスや、急な出費に対応したい場合にも柔軟に活用できます。",
  },
];

const demerits = [
  {
    title: "法人からの売掛金のみが対象",
    description:
      "即日払いの対象となるのは法人からの売掛金に限られます。個人クライアントからの報酬は買取対象外のため、個人間取引が中心のフリーランスには利用場面が限定されます。",
  },
  {
    title: "初回は手数料が高めになりがち",
    description:
      "手数料3%〜10%の範囲ですが、初回利用時や与信実績が少ない段階では上限に近い手数料が適用されるケースが多いです。継続利用で与信が上がると手数料が下がる仕組みのため、長期的な利用を前提とした設計です。",
  },
  {
    title: "法人向けの大口利用には不向き",
    description:
      "フリーランス・個人事業主に特化したサービスのため、法人が大口の売掛金を現金化したい場合には向いていません。法人が利用する場合はビートレーディングやOLTAなどの法人対応サービスを検討する方がよいでしょう。",
  },
];

const steps = [
  { step: "1", title: "無料会員登録", description: "公式サイトからメールアドレスで会員登録。あんしん補償が自動付帯されます。" },
  { step: "2", title: "フリーナンス口座の開設", description: "GMOあおぞらネット銀行にフリーナンス専用口座を開設。審査があります。" },
  { step: "3", title: "請求書をアップロード", description: "即日払いしたい請求書の画像やPDFをアップロードします。" },
  { step: "4", title: "審査・入金", description: "審査通過後、最短即日でフリーナンス口座に入金されます。" },
];

const faqs = [
  {
    question: "FREENANCEの手数料は実際にいくらですか？",
    answer:
      "手数料は3〜10%の範囲で、売掛先の信用力や利用実績に応じて決まります。初回利用時は上限に近い手数料になることが多いですが、継続利用で与信が積み上がると手数料が低下する仕組みです。一般的に5回以上利用すると3〜5%程度になるケースが報告されています。",
  },
  {
    question: "FREENANCEのあんしん補償とは何ですか？",
    answer:
      "あんしん補償は、FREENANCE会員に無料で付帯する損害賠償保険です。業務中の事故、情報漏えい、納品物の瑕疵、著作権侵害など、フリーランスが業務で発生させる可能性のある損害に対して最大5,000万円まで補償されます。保険料はFREENANCEが負担するため、会員登録だけで無料で利用可能です。",
  },
  {
    question: "FREENANCEは会社員の副業でも利用できますか？",
    answer:
      "はい、開業届を出しているなど個人事業主としての登録があれば、会社員の副業でも利用できます。ただし、即日払いの対象は法人からの売掛金に限られるため、副業先が法人であることが条件です。",
  },
  {
    question: "フリーナンス口座とは何ですか？",
    answer:
      "フリーナンス口座は、GMOあおぞらネット銀行に開設されるFREENANCE専用の振込口座です。クライアントからの報酬をこの口座で受け取ることで、即日払いサービスの利用が可能になります。口座への入金は自動的にメインの銀行口座に振り替えられます。",
  },
  {
    question: "FREENANCEの即日払いで売掛先にバレますか？",
    answer:
      "いいえ、FREENANCEの即日払いは2社間ファクタリングのため、売掛先に通知されることはありません。フリーナンス口座を使っていても、売掛先からは通常の振込先と同じように見えるため、取引先との関係に影響はありません。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "FREENANCE(フリーナンス)の口コミ・評判｜GMO系フリーランス向けファクタリングを検証",
  description:
    "FREENANCEの口コミ・評判を徹底調査。GMO系フリーランス向けファクタリングを検証。",
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
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
    "@id": "https://factoring-partner.pages.dev/reviews/freenance/",
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
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://factoring-partner.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "業者レビュー", item: "https://factoring-partner.pages.dev/reviews/" },
    { "@type": "ListItem", position: 3, name: "FREENANCE(フリーナンス)" },
  ],
};

const comparisonData = [
  { name: "FREENANCE", fee: "3%〜10%", speed: "最短即日", amount: "1万円〜", online: "◎" },
  { name: "ペイトナー", fee: "一律10%", speed: "最短10分", amount: "1万〜300万円", online: "◎" },
  { name: "ラボル", fee: "一律10%", speed: "最短60分", amount: "1万〜", online: "◎" },
  { name: "OLTA", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", online: "◎" },
];

/* ── Component ────────────────────────────────────── */

export default function FreenanceReviewPage() {
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
          { label: "業者レビュー", href: "/reviews/" },
          { label: "FREENANCE(フリーナンス)" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            口コミ・評判
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            FREENANCE(フリーナンス)の口コミ・評判
            <br className="hidden md:block" />
            GMO系フリーランス向けファクタリングを検証
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            GMOクリエイターズネットワーク運営のフリーランス特化ファクタリング「FREENANCE」の口コミ・評判を徹底調査。即日払い・あんしん補償の実態を検証します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#basic-info" className="hover:underline">1. FREENANCEの基本情報</a></li>
            <li><a href="#reviews" className="hover:underline">2. 口コミ傾向調査結果</a></li>
            <li><a href="#merits" className="hover:underline">3. FREENANCEのメリット4つ</a></li>
            <li><a href="#demerits" className="hover:underline">4. FREENANCEのデメリット3つ</a></li>
            <li><a href="#flow" className="hover:underline">5. 利用の流れ</a></li>
            <li><a href="#recommended" className="hover:underline">6. こんな人におすすめ / 向いていない人</a></li>
            <li><a href="#comparison" className="hover:underline">7. 他社との比較表</a></li>
            <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── 基本情報 ─── */}
        <section id="basic-info" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            FREENANCEの基本情報
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {basicInfo.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-section-bg" : "bg-white"}>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-semibold text-text-main w-40">
                      {item.label}
                    </th>
                    <td className="px-4 py-3 text-text-light">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 会社概要・特徴 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            FREENANCEの会社概要と特徴
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            FREENANCE（フリーナンス）は、GMOインターネットグループのGMOクリエイターズネットワーク株式会社が運営するフリーランス向けお金と保険のサービスです。「即日払い」と呼ばれるファクタリング機能に加え、損害賠償保険「あんしん補償」が無料で付帯する点が最大の特徴です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            フリーランス・個人事業主に完全特化した設計で、請求書を発行した後にその売掛金を即日で現金化できます。専用の「フリーナンス口座」を通じて取引を行う仕組みで、振込手数料はGMOあおぞらネット銀行宛であれば無料です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            GMOグループという大手IT企業グループが母体のため、セキュリティやサービスの安定性への信頼も高いです。フリーランス人口の増加に伴い、利用者数を着実に拡大しているサービスの一つです。
          </p>
          <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-3 font-bold text-secondary">FREENANCEの3つの強み</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>あんしん補償（損害賠償保険）が無料で自動付帯</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>GMOインターネットグループ運営の信頼性</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>1万円からの少額利用が可能</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 口コミ傾向調査 ─── */}
        <section id="reviews" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            口コミ傾向調査結果
          </h2>

          <div className="mb-8 rounded-lg border border-border bg-section-bg p-4 text-xs text-text-light leading-relaxed">
            ※掲載している口コミは、Google口コミ・みん評・ヒカカク・ファクログ等の投稿を参考に要約・再構成したものです。出典元の原文とは異なります。サービス内容は調査時点のものであり、変更される場合があります。
            <p className="text-xs text-gray-400 mt-2">出典: <a href="https://faclog.jp/factor/freenance" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">ファクログ</a> / <a href="https://minhyo.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">みん評</a></p>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-sm">&#9675;</span>
              良い口コミの傾向
            </h3>
            <div className="space-y-4">
              {goodReviews.map((review, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-block rounded bg-secondary/10 px-2 py-0.5 text-xs text-secondary">{review.label}</span>
                  </div>
                  <p className="mb-2 font-semibold text-secondary">{review.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{review.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text-main">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-sm">&#9651;</span>
              悪い口コミの傾向
            </h3>
            <div className="space-y-4">
              {badReviews.map((review, i) => (
                <div key={i} className="rounded-lg border border-border bg-white p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-block rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">{review.label}</span>
                  </div>
                  <p className="mb-2 font-semibold text-accent">{review.title}</p>
                  <p className="text-sm leading-relaxed text-text-light">{review.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── メリット ─── */}
        <section id="merits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            FREENANCEのメリット4つ
          </h2>
          <div className="space-y-6">
            {merits.map((merit, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  {merit.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{merit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── デメリット ─── */}
        <section id="demerits" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            FREENANCEのデメリット3つ
          </h2>
          <div className="space-y-6">
            {demerits.map((demerit, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  {demerit.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{demerit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            FREENANCEの利用の流れ
          </h2>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-border bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-text-main">{s.title}</p>
                  <p className="mt-1 text-sm text-text-light">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── あんしん補償について ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            あんしん補償の詳細と補償内容
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            FREENANCEの最大の特徴であるあんしん補償は、フリーランスの業務上のリスクを幅広くカバーする損害賠償保険です。会員登録するだけで自動的に付帯し、保険料は一切かかりません。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">業務遂行中の事故</p>
              <p className="text-sm leading-relaxed text-text-light">
                仕事中にクライアントの機材を破損した場合や、撮影中に第三者にケガをさせた場合など、業務遂行中に発生した事故による損害を補償します。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">情報漏えい・セキュリティ事故</p>
              <p className="text-sm leading-relaxed text-text-light">
                クライアントの個人情報や機密情報が漏えいした場合の損害賠償に対応します。IT系フリーランスにとって特に重要な補償項目です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">納品物の瑕疵</p>
              <p className="text-sm leading-relaxed text-text-light">
                納品したプログラムのバグやデザインの欠陥により、クライアントに損害を与えた場合の賠償に対応します。成果物に対する責任をカバーする補償です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">著作権侵害</p>
              <p className="text-sm leading-relaxed text-text-light">
                意図せず他者の著作権を侵害してしまった場合の損害賠償に対応します。クリエイティブ系のフリーランスにとって心強い補償です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 利用シーン ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            FREENANCEが活躍する利用シーン
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">報酬の支払いサイトが長い場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                月末締め翌月末払いなど、支払いサイトが長い案件を抱えるフリーランスにとって、即日払いは資金繰りの強い味方です。特に大型案件の着手金として先行投資が必要な場合に活用できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">業務上のリスクに備えたい場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                あんしん補償があるため、ファクタリングを使わなくても会員登録するメリットがあります。特にIT系・クリエイティブ系のフリーランスは、情報漏えいや納品物の瑕疵リスクに備えられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">独立したばかりで資金が不安定な場合</p>
              <p className="text-sm leading-relaxed text-text-light">
                独立直後はクライアントとの支払いサイクルが安定しないことが多いです。1万円からの少額利用ができるFREENANCEなら、小さな案件でも即座に資金化でき、キャッシュフローの安定に役立ちます。
              </p>
            </div>
          </div>
        </section>

        {/* ── おすすめ / 向いていない人 ─── */}
        <section id="recommended" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            こんな人におすすめ / 向いていない人
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <p className="mb-4 font-bold text-secondary">おすすめの人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>フリーランス・個人事業主の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>損害賠償保険も同時に確保したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>少額の売掛金から利用したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>大手グループ運営の安心感を重視する方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">向いていない人</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>法人として大口ファクタリングを利用したい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>個人クライアントとの取引が中心の方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>初回から低手数料を求める方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 他社比較 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            他社との比較表
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">サービス名</th>
                  <th className="px-4 py-3 text-left font-semibold">手数料</th>
                  <th className="px-4 py-3 text-left font-semibold">入金速度</th>
                  <th className="px-4 py-3 text-left font-semibold">買取額</th>
                  <th className="px-4 py-3 text-center font-semibold">オンライン</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-section-bg" : "bg-white"} ${i === 0 ? "font-semibold text-primary" : ""}`}>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.fee}</td>
                    <td className="px-4 py-3">{item.speed}</td>
                    <td className="px-4 py-3">{item.amount}</td>
                    <td className="px-4 py-3 text-center">{item.online}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 他のフリーランス向けサービスとの比較 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            他のフリーランス向けファクタリングとの比較
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            フリーランス向けファクタリングサービスは複数存在します。FREENANCEと主要な競合サービスの違いを整理しました。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">FREENANCE vs ペイトナー</p>
              <p className="text-sm leading-relaxed text-text-light">
                ペイトナーは手数料一律10%・最短10分入金と、スピードとシンプルさで優れています。一方FREENANCEは手数料3〜10%（継続利用で低下）とコスト面で有利になる可能性があり、あんしん補償という付加価値もあります。スピード重視ならペイトナー、トータルのメリットならFREENANCEという選び方ができます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">FREENANCE vs ラボル</p>
              <p className="text-sm leading-relaxed text-text-light">
                ラボルは手数料一律10%・24時間365日振込対応で、いつでも入金可能な点が強みです。FREENANCEは手数料が継続利用で下がる可能性がある点と、あんしん補償が付帯する点で差別化されています。24時間振込を重視するならラボル、長期利用と保険を重視するならFREENANCEが適しています。
              </p>
            </div>
          </div>
        </section>

        {/* ── フリーナンス口座の仕組み ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            フリーナンス口座の仕組みと活用法
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            FREENANCEの即日払いを利用するためには、専用の「フリーナンス口座」を開設する必要があります。この口座はGMOあおぞらネット銀行に開設される専用振込口座で、クライアントからの報酬受取口座として使用します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">フリーナンス口座の仕組み</p>
              <p className="text-sm leading-relaxed text-text-light">
                フリーナンス口座に入金された報酬は、毎週自動的にメインの銀行口座に振り替えられます。即日払いを利用する場合は、この口座に入金予定の売掛金を対象に前払いを受ける形となります。クライアントにはフリーナンス口座を振込先として伝えるだけで、特別な手続きは不要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">与信スコアの仕組み</p>
              <p className="text-sm leading-relaxed text-text-light">
                FREENANCEにはフリーナンス口座の利用実績に基づく独自の与信スコアシステムがあります。口座を通じた取引を継続することで与信スコアが上がり、即日払いの手数料が徐々に下がる仕組みです。長期的に利用するほどお得になる設計になっています。
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-text-main hover:bg-section-bg">
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">Q</span>
                    {faq.question}
                  </span>
                  <span className="ml-4 transition-transform group-open:rotate-180">&#9660;</span>
                </summary>
                <div className="border-t border-border px-6 py-4">
                  <p className="text-sm leading-relaxed text-text-light">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── 総合評価 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            FREENANCEの総合評価
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            FREENANCEは、GMOグループが運営するフリーランス特化型のファクタリングサービスとして、独自のポジションを確立しています。最大の強みは、即日払い機能に加えて損害賠償保険「あんしん補償」が無料で付帯する点です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            手数料3〜10%は業界標準の水準ですが、継続利用で与信が上がれば3〜5%程度まで下がる可能性があり、長期的にはコストパフォーマンスの高いサービスです。GMOグループ運営の安心感も大きなメリットです。
          </p>
          <p className="leading-relaxed text-text-light">
            一方で、法人からの売掛金のみが対象である点や、初回利用時の手数料が高めになりがちな点は注意が必要です。フリーランス・個人事業主で、ファクタリングと保険の両方を一括で手に入れたい方には最適なサービスと言えるでしょう。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            FREENANCEの無料会員登録はこちら
          </h2>
          <p className="mb-6 text-sm text-white/80">
            即日払い＋あんしん補償。フリーランスのお金と保険をまとめてカバー。
          </p>
          <a
            href="https://freenance.net/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta inline-block"
          >
            公式サイトで無料登録
          </a>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/reviews/paytner/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ペイトナーの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">最短10分のフリーランス向けファクタリングを検証</p>
            </Link>
            <Link
              href="/reviews/labol/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ラボルの口コミ・評判</p>
              <p className="mt-1 text-sm text-text-light">フリーランス向け即日ファクタリングを検証</p>
            </Link>
            <Link
              href="/articles/for-freelance/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">フリーランス向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">個人事業主が使えるサービスを比較</p>
            </Link>
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">49社以上を徹底比較</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
