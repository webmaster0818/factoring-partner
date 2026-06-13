import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリング悪質業者の見分け方チェックリスト10項目",
  description:
    "ファクタリングの悪質業者・闇金業者を見分けるためのチェックリスト10項目を解説。手数料の不透明さ・契約内容の問題点・会社情報の確認方法など、安全な業者選びのための実践的なガイドです。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/scam-detection/",
  },
  openGraph: {
    title:
      "ファクタリング悪質業者の見分け方チェックリスト10項目",
    description:
      "ファクタリング悪質業者を見抜くチェックリスト10項目。闇金まがいの業者を避けるための実践的な判断基準を紹介。",
    url: "https://factoring-partner.pages.dev/articles/scam-detection/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const checklist = [
  {
    id: 1,
    title: "会社の所在地・連絡先が確認できるか",
    category: "会社情報",
    danger: "所在地がバーチャルオフィスのみ、固定電話番号がない、法人登記がない",
    safe: "実際のオフィスがある、固定電話番号がある、法人番号が国税庁で確認できる",
    detail:
      "悪質な業者は、バーチャルオフィスの住所だけで営業している場合があります。国税庁の法人番号公表サイト（https://www.houjin-bangou.nta.go.jp/）で法人番号を検索し、実在する法人か確認しましょう。また、所在地をGoogleマップで確認し、実際にオフィスがあるかも重要なチェックポイントです。",
  },
  {
    id: 2,
    title: "手数料が事前に明示されるか",
    category: "手数料",
    danger: "手数料を教えてくれない、契約直前まで金額が不明、口頭のみで書面がない",
    safe: "見積書に手数料が明記されている、書面で提示してくれる、内訳が分かる",
    detail:
      "正規のファクタリング会社は、審査後に手数料を含む見積書を書面（PDF等）で提示します。「契約してみないとわからない」「まず振り込むから後で教える」といった対応は、悪質業者の典型的な手口です。手数料だけでなく、事務手数料・登記費用・振込手数料などの諸費用も事前に確認しましょう。",
  },
  {
    id: 3,
    title: "手数料が相場の範囲内か",
    category: "手数料",
    danger: "2社間で20%以上、3社間で10%以上、年利換算で実質的に法外な金額",
    safe: "2社間で8%〜18%、3社間で1%〜9%の範囲",
    detail:
      "ファクタリングの手数料相場は、2社間で8%〜18%、3社間で1%〜9%です。この範囲を大幅に超える手数料を提示された場合は、悪質業者の可能性があります。逆に「手数料0.5%」など不自然に安い場合も、別の名目で高額な費用を請求される可能性があるため注意が必要です。",
  },
  {
    id: 4,
    title: "契約書の内容が適切か",
    category: "契約",
    danger: "契約書を渡さない、売買契約ではなく金銭消費貸借契約、違約金条項が過大",
    safe: "売掛債権の売買契約書が交付される、内容を説明してくれる、控えがもらえる",
    detail:
      "ファクタリングは「売掛債権の売買」であり、契約は「債権譲渡契約」または「売買契約」です。「金銭消費貸借契約」になっている場合は、ファクタリングを装った闇金業者です。また、契約書を渡さない・説明しない業者も危険です。契約前に必ず契約書の控えをもらい、内容を確認してください。",
  },
  {
    id: 5,
    title: "償還請求権（リコース）の有無",
    category: "契約",
    danger: "売掛先が支払わなかった場合に利用者が全額返済する義務がある（リコース型）",
    safe: "ノンリコース（償還請求権なし）で、売掛先の不払いリスクはファクタリング会社が負う",
    detail:
      "正規のファクタリングは「ノンリコース（償還請求権なし）」が基本です。つまり、売掛先が倒産等で支払わなかった場合、利用者に返済義務はありません。「売掛先が支払わなかったら利用者が全額返済」という条件がある場合、実質的に貸金業であり、貸金業登録がない業者は違法です。",
  },
  {
    id: 6,
    title: "「審査なし」「誰でもOK」を謳っていないか",
    category: "営業手法",
    danger: "審査なし、即日無条件OK、どんな売掛金でも買取可能",
    safe: "売掛先の信用力を確認する審査がある、審査基準を説明してくれる",
    detail:
      "ファクタリングは売掛債権の買取であるため、売掛金の実在性や売掛先の信用力を確認する審査は必ず必要です。「審査なし」「誰でもOK」を全面に打ち出す業者は、ファクタリングを装った闇金業者の可能性が高いです。正規の会社は審査基準を明確に説明してくれます。",
  },
  {
    id: 7,
    title: "担保や保証人を要求されていないか",
    category: "契約",
    danger: "不動産担保・連帯保証人・手形の差し入れを要求される",
    safe: "担保・保証人は一切不要。売掛債権の売買のため必要ない",
    detail:
      "ファクタリングは売掛債権の売買であり、融資ではありません。そのため、担保や保証人は不要です。不動産担保や連帯保証人を要求する業者は、ファクタリングではなく実質的な貸付を行っている可能性があり、貸金業法に違反する恐れがあります。",
  },
  {
    id: 8,
    title: "分割返済を求められていないか",
    category: "契約",
    danger: "売掛金の回収後も分割で支払いを求められる、月々の返済計画を提示される",
    safe: "売掛金の回収時に一括で精算、または3社間で売掛先が直接支払い",
    detail:
      "ファクタリングは売掛金の回収時に一括で精算するものであり、分割返済の概念はありません。分割返済を提案する業者は、ファクタリングを装った違法な貸金業の可能性が極めて高いです。金融庁もこの点について注意喚起を行っています。",
  },
  {
    id: 9,
    title: "口コミ・評判が確認できるか",
    category: "実績",
    danger: "口コミが一切ない、Googleマップの評価がない、運営歴が不明",
    safe: "Googleマップの口コミがある、運営歴が長い、メディアへの掲載実績がある",
    detail:
      "信頼できるファクタリング会社は、Googleマップの口コミや各種メディアへの掲載実績があります。口コミが一切ない業者や、運営歴が極端に短い業者は慎重に検討しましょう。ただし、口コミは操作される可能性もあるため、口コミの内容と数のバランスを確認してください。",
  },
  {
    id: 10,
    title: "強引な営業・契約の催促がないか",
    category: "営業手法",
    danger: "「今日中に契約しないと条件が変わる」「他社に行くと損をする」等の圧力",
    safe: "検討する時間を与えてくれる、相見積もりを推奨してくれる、質問に丁寧に回答する",
    detail:
      "正規のファクタリング会社は、利用者に十分な検討時間を与え、相見積もりも快く受け入れます。「今日中に決めないと」「他に流したら手数料が上がる」などの圧力をかける業者は、冷静な判断を妨げようとしている可能性があります。焦らず複数社で比較しましょう。",
  },
];

const dangerSignals = [
  {
    signal: "契約書が「金銭消費貸借契約」になっている",
    risk: "闇金業者",
    action: "契約を絶対にしない。消費者生活センターに相談。",
  },
  {
    signal: "手数料が30%〜50%と法外に高い",
    risk: "闇金業者の可能性大",
    action: "取引を中止し、金融庁の相談窓口に通報。",
  },
  {
    signal: "分割返済のスケジュールを提示された",
    risk: "違法な貸付",
    action: "ファクタリングではなく貸金業であるため、契約しない。",
  },
  {
    signal: "担保・保証人を要求された",
    risk: "実質的な貸付",
    action: "正規のファクタリングでは不要。他社に切り替える。",
  },
  {
    signal: "給与を対象としたファクタリングを勧められた",
    risk: "給与ファクタリングは違法",
    action: "給与ファクタリングは貸金業に該当。関わらない。",
  },
];

const safeCompanies = [
  {
    name: "ビートレーディング",
    reason: "累計9.1万社・買取額1,824億円の業界最大手。Googleマップ★4.0（145件以上）",
  },
  {
    name: "OLTA",
    reason: "みずほ銀行・三菱UFJ銀行など大手金融機関と提携。累計買取額1,000億円",
  },
  {
    name: "ペイトナー",
    reason: "ペイトナー株式会社（旧yup株式会社）運営。メディア掲載多数",
  },
  {
    name: "ラボル",
    reason: "株式会社ラボル運営（東証プライム上場SBI新生銀行グループのオリックスクレジットと資本提携あり）",
  },
  {
    name: "FREENANCE",
    reason: "GMOクリエイターズネットワーク株式会社運営。東証プライム上場GMOグループ",
  },
  {
    name: "アクセルファクター",
    reason: "株式会社アクセルファクター運営。審査通過率93.3%を公表",
  },
  {
    name: "日本中小企業金融サポート機構",
    reason: "一般社団法人（非営利法人）。経営革新等支援機関として認定済み",
  },
];

const consultationResources = [
  {
    name: "消費者ホットライン（局番なし188）",
    description: "消費者生活センターにつながります。悪質業者とのトラブル全般に対応。",
  },
  {
    name: "金融庁 金融サービス利用者相談室",
    description: "金融サービスに関する相談・苦情を受け付けています。",
  },
  {
    name: "法テラス（0570-078374）",
    description: "弁護士への相談が必要な場合に利用できます。",
  },
  {
    name: "警察 サイバー犯罪相談",
    description: "インターネットを利用した詐欺被害の相談先です。",
  },
];

const faqs = [
  {
    question: "ファクタリングは違法ではないですか？",
    answer:
      "いいえ、ファクタリング自体は合法です。売掛債権の売買は民法上の債権譲渡に基づく正当な取引であり、金融庁もファクタリングが適法な資金調達手段であることを認めています。ただし、ファクタリングを装って実質的な貸付を行う闇金業者は違法です。正規のファクタリング会社を選べば問題ありません。",
  },
  {
    question: "悪質業者に騙された場合はどうすればいいですか？",
    answer:
      "まず消費者ホットライン（188）に相談し、消費者生活センターの支援を受けてください。契約書が「金銭消費貸借契約」になっている場合は、貸金業法違反の可能性があり、契約の無効を主張できます。また、金融庁の相談窓口や警察への相談も検討してください。弁護士が必要な場合は法テラスを利用できます。",
  },
  {
    question: "「給与ファクタリング」は安全ですか？",
    answer:
      "いいえ、給与ファクタリングは安全ではありません。金融庁は、給与ファクタリングは実質的に貸金業に該当するとの見解を示しており、貸金業登録をしていない業者による給与ファクタリングは違法です。給与ファクタリングを勧誘された場合は利用しないでください。",
  },
  {
    question: "手数料が安すぎるファクタリング会社は危険ですか？",
    answer:
      "手数料が1%〜3%でも正規のファクタリング会社であれば問題ありません（QuQuMoは下限1%）。ただし、「手数料0%」「手数料無料」を謳う業者や、手数料は安いが別途で高額な「コンサル料」「調査費」を請求する業者は危険です。総コストで判断し、不明な費用項目がある場合は必ず確認してください。",
  },
  {
    question: "信頼できるファクタリング会社の見分け方を一言で教えてください",
    answer:
      "「契約が売掛債権の売買契約であること」「手数料が事前に書面で明示されること」「償還請求権がないこと（ノンリコース）」の3点を確認すれば、悪質業者をほぼ回避できます。加えて、運営会社の法人番号が確認でき、口コミや実績がある会社を選べば安心です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article", image: "https://factoring-partner.pages.dev/og-image.png",
  headline:
    "ファクタリング悪質業者の見分け方チェックリスト10項目",
  description:
    "ファクタリング悪質業者を見抜くチェックリスト10項目。闇金まがいの業者を避けるための実践的な判断基準を紹介。",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: {
    "@type": "Person",
    name: "ファクタリングパートナー 編集部",
    url: "https://factoring-partner.pages.dev/about/",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://factoring-partner.pages.dev/articles/scam-detection/",
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
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://factoring-partner.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "コラム",
      item: "https://factoring-partner.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "悪質業者の見分け方チェックリスト",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ScamDetectionPage() {
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
          { label: "コラム", href: "/articles/" },
          { label: "悪質業者の見分け方チェックリスト" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-white">
            リスク・トラブル
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング悪質業者の見分け方
            <br className="hidden md:block" />
            チェックリスト10項目
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリングを装った闇金業者や悪質業者が存在します。10項目のチェックリストで危険な業者を見分け、安全にファクタリングを利用するための実践的なガイドです。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#checklist" className="hover:underline">1. 悪質業者チェックリスト10項目</a></li>
            <li><a href="#danger-signals" className="hover:underline">2. 即座に取引を中止すべき危険シグナル</a></li>
            <li><a href="#safe-companies" className="hover:underline">3. 安全なファクタリング会社の特徴</a></li>
            <li><a href="#consultation" className="hover:underline">4. トラブル時の相談先</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── チェックリスト ─── */}
        <section id="checklist" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            悪質業者チェックリスト10項目
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            以下の10項目をチェックすることで、悪質なファクタリング業者をほぼ確実に見分けることができます。1つでも該当する場合は注意が必要であり、複数該当する場合は取引を避けるべきです。
          </p>
          <p className="mb-8 leading-relaxed text-text-light">
            各項目について、危険なサイン（レッドフラグ）と安全な特徴（グリーンフラグ）を併記しているので、契約前に必ず確認してください。
          </p>

          <div className="space-y-8">
            {checklist.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    {item.id}
                  </span>
                  <div className="w-full">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-bold text-text-main">{item.title}</h3>
                      <span className="rounded-full bg-section-bg px-3 py-0.5 text-xs font-bold text-text-light">
                        {item.category}
                      </span>
                    </div>
                    <p className="mt-3 leading-relaxed text-text-light">{item.detail}</p>

                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      <div className="rounded-lg border border-accent/30 bg-orange-50 p-3">
                        <p className="mb-1 text-xs font-bold text-accent">危険なサイン</p>
                        <p className="text-sm text-text-light">{item.danger}</p>
                      </div>
                      <div className="rounded-lg border border-secondary/30 bg-teal-50 p-3">
                        <p className="mb-1 text-xs font-bold text-secondary">安全な特徴</p>
                        <p className="text-sm text-text-light">{item.safe}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 危険シグナル ─── */}
        <section id="danger-signals" className="mb-16">
          <h2 className="mb-6 border-l-4 border-accent pl-4 text-xl font-bold text-text-main md:text-2xl">
            即座に取引を中止すべき危険シグナル
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            以下のシグナルが1つでもあった場合は、その時点で取引を中止してください。これらは悪質業者・闇金業者に共通する特徴であり、契約すると深刻な被害を受ける可能性があります。
          </p>

          <div className="space-y-4">
            {dangerSignals.map((item) => (
              <div
                key={item.signal}
                className="rounded-lg border-2 border-accent/50 bg-white p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    !
                  </span>
                  <div>
                    <h3 className="font-bold text-text-main">{item.signal}</h3>
                    <div className="mt-2 flex flex-wrap gap-3">
                      <span className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-bold text-accent">
                        リスク：{item.risk}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      <strong className="text-primary">対処：</strong>{item.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 安全な会社 ─── */}
        <section id="safe-companies" className="mb-16">
          <h2 className="mb-6 border-l-4 border-secondary pl-4 text-xl font-bold text-text-main md:text-2xl">
            安全なファクタリング会社の特徴
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            以下の特徴を持つファクタリング会社は、安全性が高いと判断できます。実績・信頼性・透明性の観点から、安心して利用できる会社の共通点を解説します。
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-secondary">&#10003;</span>
                <h3 className="font-bold text-text-main">運営歴が長い</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-light">
                運営歴が3年以上あり、一定の実績がある会社は信頼性が高いです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-secondary">&#10003;</span>
                <h3 className="font-bold text-text-main">累計取引実績を公表している</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-light">
                累計取引社数や買取額を公表している会社は、透明性が高いです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-secondary">&#10003;</span>
                <h3 className="font-bold text-text-main">Googleマップで口コミがある</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-light">
                Googleマップに実際のユーザーからの口コミがある会社は信頼できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-secondary">&#10003;</span>
                <h3 className="font-bold text-text-main">手数料を書面で明示する</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-light">
                見積書・契約書で手数料を明示し、不明な費用項目がない会社は安全です。
              </p>
            </div>
          </div>

          <h3 className="mt-8 mb-4 text-lg font-bold text-text-main">信頼できるファクタリング会社一覧</h3>
          <div className="space-y-3">
            {safeCompanies.map((company) => (
              <div key={company.name} className="rounded-lg border border-border bg-white p-4">
                <p className="font-semibold text-text-main">{company.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-text-light">{company.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 相談先 ─── */}
        <section id="consultation" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            トラブル時の相談先
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            悪質なファクタリング業者とのトラブルに遭った場合は、以下の公的機関に相談してください。相談は無料で、専門のスタッフが対応してくれます。
          </p>

          <div className="space-y-4">
            {consultationResources.map((resource) => (
              <div
                key={resource.name}
                className="rounded-lg border border-border bg-white p-5"
              >
                <h3 className="font-bold text-primary">{resource.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-light">{resource.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border bg-white"
              >
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

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/fraud-patterns/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリング詐欺の手口一覧</p>
              <p className="mt-1 text-sm text-text-light">
                こんな業者には要注意な詐欺手口を紹介
              </p>
            </Link>
            <Link
              href="/articles/troubles/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングのトラブル事例と対策</p>
              <p className="mt-1 text-sm text-text-light">
                実際に起きたトラブル事例と予防策
              </p>
            </Link>
            <Link
              href="/articles/contract-checklist/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">契約チェックリスト</p>
              <p className="mt-1 text-sm text-text-light">
                契約前に確認すべきポイントをリスト化
              </p>
            </Link>
            <Link
              href="/articles/is-it-legal/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングは合法？</p>
              <p className="mt-1 text-sm text-text-light">
                法的根拠と安全性を解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            安心・安全なファクタリング会社を選びましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            実績豊富で透明性の高いファクタリング会社を厳選比較。安全な資金調達をサポートします。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
