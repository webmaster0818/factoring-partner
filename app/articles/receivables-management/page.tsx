import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "売掛金の回収サイト改善方法｜キャッシュフローを改善する実践術",
  description:
    "売掛金の回収サイトを短縮してキャッシュフローを改善する実践的な方法を解説。回収サイト短縮交渉のコツ、請求業務の効率化、ファクタリングの活用法、売掛金管理のベストプラクティスを紹介します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/receivables-management/",
  },
  openGraph: {
    title:
      "売掛金の回収サイト改善方法｜キャッシュフローを改善する実践術",
    description:
      "売掛金の回収サイトを短縮してキャッシュフローを改善する実践的な方法を解説。",
    url: "https://factoring-partner.pages.dev/articles/receivables-management/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const improvementMethods = [
  {
    title: "取引先との支払い条件を見直す",
    description:
      "最も根本的な方法は、取引先との支払い条件を交渉して回収サイトを短縮することです。新規取引開始時に有利な支払い条件を設定するのが最も効果的ですが、既存取引先との見直しも可能です。",
    steps: [
      "現在の支払い条件を一覧化し、改善余地のある取引先を特定する",
      "業界の標準的な支払いサイトを調査し、交渉材料を準備する",
      "早期支払い割引（2/10 net 30など）を提案し、取引先のメリットも示す",
      "一度に大幅な変更は難しいため、段階的な短縮を提案する",
    ],
  },
  {
    title: "請求書の発行タイミングを早める",
    description:
      "売掛金の回収サイトは「納品〜請求書発行」と「請求書発行〜入金」の2つに分けられます。請求書の発行が遅れると、その分だけ入金も遅れます。納品後すぐに請求書を発行する仕組みを作りましょう。",
    steps: [
      "納品日と同日または翌営業日に請求書を発行するルールを設定する",
      "クラウド請求書サービス（freee、マネーフォワードなど）を導入して自動化する",
      "月末締め翌月末払いを、都度請求に変更できないか検討する",
      "電子請求書を導入し、郵送による遅延を解消する",
    ],
  },
  {
    title: "入金管理と督促を徹底する",
    description:
      "支払い期日を過ぎても入金がない場合、早期に督促を行うことが重要です。入金の確認を自動化し、期日超過があれば翌営業日に連絡する体制を整えましょう。放置すると回収が困難になるリスクがあります。",
    steps: [
      "入金予定日をカレンダーや管理ツールに登録し、消込を毎日実施する",
      "期日超過1日目にメール、3日目に電話で状況を確認する",
      "督促のテンプレートを事前に用意し、迅速に対応できるようにする",
      "繰り返し遅延する取引先は、前払い条件への変更を検討する",
    ],
  },
  {
    title: "ファクタリングを活用する",
    description:
      "売掛金の回収サイトを待てない場合は、ファクタリングを活用して売掛金を早期に現金化できます。特に、回収サイトが60日〜90日と長い場合は、ファクタリングによるキャッシュフロー改善効果が大きくなります。",
    steps: [
      "回収サイトが長い売掛金を優先してファクタリングに出す",
      "複数のファクタリング会社から見積もりを取り、手数料を比較する",
      "継続利用でリピーター割引を活用し、コストを抑える",
      "ファクタリングに頼りすぎず、並行して回収サイト短縮交渉も進める",
    ],
  },
  {
    title: "与信管理を強化する",
    description:
      "売掛金の回収リスクを低減するためには、取引先の与信管理が欠かせません。取引開始前に信用調査を行い、取引開始後も定期的に信用状態をモニタリングしましょう。",
    steps: [
      "新規取引先は信用調査会社（帝国データバンク・東京商工リサーチ）で調査する",
      "取引先ごとの与信限度額を設定し、超過しないよう管理する",
      "年1回は取引先の信用状態を再評価し、必要に応じて条件を変更する",
      "信用リスクの高い取引先には前払いや保証金を求めることも検討する",
    ],
  },
];

const cashflowTips = [
  {
    title: "売掛金回転期間を定期的に計測する",
    description:
      "売掛金回転期間（DSO: Days Sales Outstanding）は、売上が現金化されるまでの平均日数を表す指標です。DSO = 売掛金 / 売上高 x 365 で計算できます。業界平均と比較して自社のDSOが長い場合は、改善の余地があります。",
  },
  {
    title: "支払い条件の多様化を検討する",
    description:
      "クレジットカード決済や口座振替など、取引先が支払いやすい方法を提供することで、入金の遅延を防げます。特にBtoB向けの後払い決済サービス（Paid、NP掛け払いなど）を活用すると、回収リスクの軽減とキャッシュフロー改善を同時に実現できます。",
  },
  {
    title: "売上の季節変動に備える",
    description:
      "季節によって売上が変動する業種では、繁忙期の売掛金増加がキャッシュフローを圧迫するケースがあります。繁忙期前に資金を確保しておくか、ファクタリングを計画的に利用することで、資金繰りの安定化を図りましょう。",
  },
  {
    title: "資金繰り表を作成・更新する",
    description:
      "売掛金の入金予定と買掛金の支払い予定を一覧化した資金繰り表を作成し、最低でも3ヶ月先までの資金の過不足を可視化しましょう。資金ショートのリスクを事前に把握できれば、早めにファクタリングや融資で対応できます。",
  },
];

const faqs = [
  {
    question: "売掛金の回収サイトの平均はどのくらいですか？",
    answer:
      "業界や企業規模によって異なりますが、日本の中小企業の平均的な回収サイトは30〜60日程度です。建設業は60〜120日と長い傾向があり、IT・Web業界は30〜45日程度が一般的です。回収サイトが60日を超える場合は、改善の検討をおすすめします。",
  },
  {
    question: "回収サイトが長いとなぜ問題なのですか？",
    answer:
      "回収サイトが長いと、商品やサービスを提供してから代金を受け取るまでの間に、仕入れ代金や人件費などの支払いが先に発生します。この資金ギャップが資金繰りを圧迫し、最悪の場合は黒字倒産（利益が出ているのに資金ショートで倒産すること）につながります。",
  },
  {
    question: "売掛金の回収サイト短縮を取引先に交渉する際のコツは？",
    answer:
      "交渉のコツは、取引先にもメリットを提示することです。例えば、早期支払い割引（10日以内の支払いで2%割引など）を提案する方法が効果的です。また、新規取引開始時に有利な条件を設定するのが最もスムーズです。一方的に条件変更を要求するのではなく、双方にとってWin-Winの提案を心がけましょう。",
  },
  {
    question: "売掛金の未回収を防ぐにはどうすればいいですか？",
    answer:
      "与信管理を徹底することが最も効果的です。取引開始前に信用調査を行い、与信限度額を設定しましょう。また、入金の消込を毎日実施し、期日超過があればすぐに連絡する体制を整えることも重要です。保証型ファクタリングを利用して回収リスクを保険として軽減する方法もあります。",
  },
  {
    question: "ファクタリングで売掛金を回収サイト前に現金化するメリットは？",
    answer:
      "ファクタリングを利用すれば、支払い期日を待たずに最短即日で売掛金を現金化できます。回収サイトが60〜90日の売掛金をファクタリングすることで、実質的な回収サイトを0日に短縮できます。手数料はかかりますが、資金繰りの安定化や仕入れの早期支払いによる割引獲得など、トータルでメリットが上回るケースもあります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "売掛金の回収サイト改善方法｜キャッシュフローを改善する実践術",
  description:
    "売掛金の回収サイトを短縮してキャッシュフローを改善する実践的な方法を解説。",
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
    "@id":
      "https://factoring-partner.pages.dev/articles/receivables-management/",
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
      name: "売掛金の回収サイト改善",
      item: "https://factoring-partner.pages.dev/articles/receivables-management/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function ReceivablesManagementPage() {
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
          { label: "売掛金の回収サイト改善" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            経営実務
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            売掛金の回収サイト改善方法
            <br className="hidden md:block" />
            キャッシュフローを改善する実践術
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            売掛金の回収サイトが長いと資金繰りが悪化します。回収サイトを短縮する5つの方法と、キャッシュフローを改善するための実践的なテクニックを解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#what-is-site" className="hover:underline">
                1. 回収サイトとは？
              </a>
            </li>
            <li>
              <a href="#impact" className="hover:underline">
                2. 回収サイトが長い場合のリスク
              </a>
            </li>
            <li>
              <a href="#methods" className="hover:underline">
                3. 回収サイトを改善する5つの方法
              </a>
            </li>
            <li>
              <a href="#cashflow-tips" className="hover:underline">
                4. キャッシュフロー改善の実践テクニック
              </a>
            </li>
            <li>
              <a href="#industry" className="hover:underline">
                5. 業界別の回収サイト目安
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 回収サイトとは ─── */}
        <section id="what-is-site" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            回収サイトとは？
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">回収サイト</strong>とは、商品やサービスを納品してから、その代金が実際に入金されるまでの期間のことです。「支払いサイト」とも呼ばれ、通常は日数で表されます。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            例えば「月末締め翌月末払い」の場合、4月1日に納品した商品の代金は5月31日に支払われるため、最大で60日の回収サイトとなります。この間、企業は代金を受け取らずに次の仕入れや人件費を支払わなければなりません。
          </p>
          <div className="rounded-lg border border-primary/30 bg-blue-50 p-6">
            <p className="mb-3 font-bold text-primary">回収サイトの計算例</p>
            <div className="space-y-2 text-sm text-text-light">
              <p><strong className="text-text-main">月末締め翌月末払い：</strong>最大60日（平均約45日）</p>
              <p><strong className="text-text-main">月末締め翌々月末払い：</strong>最大90日（平均約75日）</p>
              <p><strong className="text-text-main">20日締め翌月末払い：</strong>最大41日（平均約30日）</p>
              <p><strong className="text-text-main">納品後30日以内：</strong>最大30日</p>
            </div>
          </div>
        </section>

        {/* ── リスク ─── */}
        <section id="impact" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            回収サイトが長い場合のリスク
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            回収サイトが長いと、以下のようなリスクが発生します。特に中小企業やフリーランスは手元資金が限られているため、回収サイトの長さがそのまま経営リスクに直結します。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">資金ショートのリスク</h3>
              <p className="text-sm leading-relaxed text-text-light">
                売上は立っているのに現金が手元にない状態が続くと、仕入れ代金や給与の支払いができなくなる「資金ショート」のリスクがあります。最悪の場合、黒字倒産につながります。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">成長機会の喪失</h3>
              <p className="text-sm leading-relaxed text-text-light">
                手元資金が不足していると、新規受注や設備投資のチャンスを逃してしまいます。回収サイトが長いほど、事業の成長スピードが制限されます。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">借入依存のリスク</h3>
              <p className="text-sm leading-relaxed text-text-light">
                回収サイトが長いと、つなぎ融資やビジネスローンに頼る必要が生じます。借入が増えると利息負担が増え、さらに資金繰りが悪化する悪循環に陥る可能性があります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 改善方法 ─── */}
        <section id="methods" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            回収サイトを改善する5つの方法
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            売掛金の回収サイトを短縮し、キャッシュフローを改善するための5つの実践的な方法を紹介します。
          </p>
          <div className="space-y-8">
            {improvementMethods.map((method, index) => (
              <div
                key={method.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-text-main">
                      {method.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {method.description}
                    </p>
                    <div className="mt-4 rounded-lg border border-secondary/30 bg-teal-50 p-4">
                      <p className="mb-2 text-sm font-bold text-secondary">実施ステップ</p>
                      <ol className="space-y-1 text-sm text-text-light">
                        {method.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2">
                            <span className="mt-0.5 font-bold text-secondary">{stepIndex + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DSO計算方法 ─── */}
        <section id="dso-calc" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            売掛金回転期間（DSO）の計算と活用法
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            売掛金回転期間（DSO: Days Sales Outstanding）は、売上が現金として回収されるまでの平均日数を示す重要な経営指標です。DSOを定期的に計測・分析することで、回収サイトの改善状況を数値で把握できます。
          </p>
          <div className="mb-6 rounded-lg border border-primary/30 bg-blue-50 p-6">
            <h3 className="mb-3 font-bold text-primary">DSOの計算式</h3>
            <p className="mb-2 text-lg font-bold text-text-main">
              DSO = 売掛金残高 / 売上高 x 対象期間の日数
            </p>
            <p className="text-sm text-text-light">
              例：売掛金残高3,000万円、月間売上高2,000万円の場合
            </p>
            <p className="text-sm font-bold text-primary">
              DSO = 3,000万円 / 2,000万円 x 30日 = 45日
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">DSOが改善（短縮）している場合</h3>
              <p className="text-sm leading-relaxed text-text-light">
                DSOが短くなっている場合は、売掛金の回収が効率化されていることを意味します。回収サイト短縮交渉やファクタリング活用の効果が出ていると考えられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">DSOが悪化（延長）している場合</h3>
              <p className="text-sm leading-relaxed text-text-light">
                DSOが長くなっている場合は、入金の遅延が発生しているか、回収サイトの長い取引先の比率が増えている可能性があります。原因を特定し、督促の強化や取引条件の見直しを検討しましょう。
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            DSOは月次で計測し、3ヶ月移動平均で傾向を把握するのが効果的です。業界平均のDSOと比較することで、自社の回収効率が適切かどうかを客観的に判断できます。
          </p>
        </section>

        {/* ── キャッシュフロー改善テクニック ─── */}
        <section id="cashflow-tips" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            キャッシュフロー改善の実践テクニック
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            回収サイトの短縮に加え、以下のテクニックを活用することで、キャッシュフローをさらに改善できます。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {cashflowTips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-lg border border-border bg-white p-5"
              >
                <h3 className="mb-3 font-bold text-primary">{tip.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業界別目安 ─── */}
        <section id="industry" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            業界別の回収サイト目安
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            回収サイトは業界によって大きく異なります。自社の回収サイトが業界平均と比べてどうかを確認しましょう。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">業界</th>
                  <th className="px-4 py-3 font-semibold">平均回収サイト</th>
                  <th className="px-4 py-3 font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">建設業</td>
                  <td className="px-4 py-3">60〜120日</td>
                  <td className="px-4 py-3">工事完了後の検収に時間がかかるため長い</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">運送業</td>
                  <td className="px-4 py-3">30〜60日</td>
                  <td className="px-4 py-3">月末締め翌月末払いが一般的</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">IT・Web業界</td>
                  <td className="px-4 py-3">30〜45日</td>
                  <td className="px-4 py-3">比較的短いが、大手企業相手は長くなる傾向</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">製造業</td>
                  <td className="px-4 py-3">45〜90日</td>
                  <td className="px-4 py-3">手形取引が残る業界では長い傾向</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">広告・デザイン</td>
                  <td className="px-4 py-3">30〜60日</td>
                  <td className="px-4 py-3">代理店経由の場合は長くなりやすい</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">医療・介護</td>
                  <td className="px-4 py-3">45〜60日</td>
                  <td className="px-4 py-3">保険請求の審査に時間がかかる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            上記はあくまで目安です。取引先の規模や支払い条件によって個別に異なります。自社の回収サイトが業界平均を大幅に上回っている場合は、改善の余地があります。
          </p>
        </section>

        {/* ── 売掛金管理ツール ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            売掛金管理に役立つツール・サービス
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            売掛金の管理を効率化するために、以下のようなツールやサービスの活用を検討しましょう。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">クラウド会計ソフト</h3>
              <p className="text-sm leading-relaxed text-text-light">
                freee会計やマネーフォワードクラウドなどのクラウド会計ソフトは、請求書の発行から入金の消込まで一元管理できます。売掛金の残高やDSOの自動計算機能を備えたものもあり、回収管理の効率化に役立ちます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">請求管理サービス</h3>
              <p className="text-sm leading-relaxed text-text-light">
                請求書の発行・送付・入金管理を自動化するサービスです。入金が確認されない場合の自動督促機能を備えたものもあり、請求業務の工数を大幅に削減できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">BtoB後払い決済サービス</h3>
              <p className="text-sm leading-relaxed text-text-light">
                Paid、NP掛け払いなどのBtoB後払い決済サービスを利用すると、売掛金の回収リスクを決済会社が引き受けてくれます。入金保証がつくため、未回収リスクを大幅に軽減できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">信用調査サービス</h3>
              <p className="text-sm leading-relaxed text-text-light">
                帝国データバンクや東京商工リサーチなどの信用調査サービスを活用して、取引先の信用状態を定期的にモニタリングしましょう。信用情報の変化を早期に把握することで、未回収リスクを最小限に抑えられます。
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
              href="/articles/cashflow-tips/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">資金繰り改善方法7選</p>
              <p className="mt-1 text-sm text-text-light">
                ファクタリング以外の選択肢も解説
              </p>
            </Link>
            <Link
              href="/articles/what-is-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングとは？</p>
              <p className="mt-1 text-sm text-text-light">
                仕組み・種類・メリット・デメリットを解説
              </p>
            </Link>
            <Link
              href="/articles/fee-negotiation/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">手数料を下げる交渉術5選</p>
              <p className="mt-1 text-sm text-text-light">
                コスト削減の具体的な方法を紹介
              </p>
            </Link>
            <Link
              href="/articles/construction/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">建設業向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                建設業の資金繰り改善方法を解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            売掛金の早期現金化で資金繰りを改善しましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            回収サイトの改善と並行して、ファクタリングによる売掛金の早期現金化も検討しましょう。15社を手数料・入金速度・審査通過率で徹底比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
