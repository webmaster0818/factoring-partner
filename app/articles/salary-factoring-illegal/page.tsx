import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "給与ファクタリングが違法な理由｜金融庁・警視庁の見解と安全な代替手段",
  description:
    "給与ファクタリングが違法とされる理由を金融庁・警視庁の見解を基に解説。貸金業法違反・出資法違反のポイント、被害事例、安全な代替手段（正規のファクタリング・公的融資制度）を紹介します。",
  alternates: {
    canonical:
      "https://factoring-partner.pages.dev/articles/salary-factoring-illegal/",
  },
  openGraph: {
    title:
      "給与ファクタリングが違法な理由｜金融庁・警視庁の見解と安全な代替手段",
    description:
      "給与ファクタリングが違法とされる理由と安全な代替手段を解説。",
    url: "https://factoring-partner.pages.dev/articles/salary-factoring-illegal/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const illegalReasons = [
  {
    title: "貸金業法違反（無登録営業）",
    description:
      "金融庁は2020年3月に「給与ファクタリングは貸金業に該当する」との見解を公表しました。給与債権の買取りを装っていても、経済的な実態は給与を担保とした貸付けであるため、貸金業登録が必要です。無登録で給与ファクタリングを行う業者は貸金業法違反となります。",
    detail:
      "通常のファクタリング（売掛債権の売買）は貸金業に該当しませんが、給与ファクタリングは労働基準法第24条の「賃金直接払いの原則」により、給与債権を第三者に譲渡しても実際の給与は労働者本人に直接支払われます。そのため、業者は給与から返済を受ける形となり、実質的に貸付けと同じ構造になります。",
  },
  {
    title: "出資法違反（超高金利）",
    description:
      "給与ファクタリング業者が請求する「手数料」を年利換算すると、数百%〜数千%に達するケースが大半です。出資法の上限金利（年20%）を大幅に超過しており、出資法違反に該当します。",
    detail:
      "例えば、給料日までの15日間で10万円を利用し、手数料2万円（20%）を差し引いた8万円を受け取るケースでは、年利換算で約487%となります。これは闇金融と同等の金利水準であり、利用者に深刻な経済的ダメージを与えます。",
  },
  {
    title: "金融庁・警視庁の公式見解",
    description:
      "金融庁は公式サイトで「いわゆる『給与ファクタリング』について」という注意喚起を公表し、給与ファクタリングは貸金業に該当すると明記しています。また、警視庁も給与ファクタリング業者を闇金融として摘発する方針を示しています。",
    detail:
      "2020年以降、複数の給与ファクタリング業者が貸金業法違反や出資法違反の容疑で逮捕されています。裁判所も「給与ファクタリングは実質的に貸付けである」との判断を複数の判例で示しており、法的にも違法性が確定しています。",
  },
];

const damageExamples = [
  {
    title: "高額な手数料で借金が雪だるま式に増加",
    description:
      "年利換算で数百%の手数料を支払い続けた結果、元本の何倍もの金額を支払うことになったケース。1回の利用で済むはずが、返済のために再度利用する悪循環に陥り、最終的に多重債務に陥った事例が多数報告されています。",
  },
  {
    title: "勤務先への連絡による脅迫",
    description:
      "返済が遅れると、勤務先に電話をかけられ「給与債権を譲渡されている」と告げると脅された被害事例。実際には給与の直接払いの原則により、勤務先が第三者に給与を支払うことはありませんが、精神的な苦痛を与える目的で行われます。",
  },
  {
    title: "個人情報の悪用",
    description:
      "申し込み時に提出した身分証明書、給与明細、銀行口座情報などの個人情報が、他の闇金融業者に流出・売却された事例。一度個人情報が流出すると、複数の違法業者から勧誘を受けるリスクがあります。",
  },
  {
    title: "法外な遅延損害金の請求",
    description:
      "返済が遅れた場合に、1日あたり数千円〜数万円の遅延損害金を請求された事例。元本を大幅に超える損害金が積み上がり、支払い不能に陥るケースがあります。",
  },
];

const alternatives = [
  {
    title: "正規のファクタリング（事業者向け）",
    description:
      "事業者が保有する売掛債権を売却して資金化する正規のファクタリングは合法です。個人事業主やフリーランスも利用可能で、最短即日で資金化できます。給与ではなく、取引先への請求書（売掛金）が対象となります。",
    suited: "フリーランス・個人事業主で請求書ベースの売掛金がある方",
  },
  {
    title: "生活福祉資金貸付制度",
    description:
      "都道府県の社会福祉協議会が運営する低金利（年1.5%程度）の公的融資制度です。低所得世帯を対象に、10万円〜数十万円の緊急小口資金を無利子で借りられる場合もあります。返済期間も長く設定されており、無理のない返済が可能です。",
    suited: "緊急で少額の資金が必要な方",
  },
  {
    title: "日本政策金融公庫の融資",
    description:
      "政府系金融機関による低金利の事業融資です。創業融資や小規模事業者向けの融資制度があり、民間の金融機関より審査が柔軟です。金利は年1%〜3%程度で、給与ファクタリングの手数料とは比べものにならないほど低コストです。",
    suited: "事業を営んでおり、まとまった資金が必要な方",
  },
  {
    title: "消費者金融（正規の貸金業者）",
    description:
      "大手消費者金融（アコム、プロミス、アイフルなど）は貸金業登録をした正規の業者です。金利は年18%以下で、初回30日間無利息のサービスを提供している会社もあります。給与ファクタリングの手数料（年利換算で数百%）と比較すると、はるかに低コストです。",
    suited: "緊急で個人として資金が必要な方（事業資金以外）",
  },
  {
    title: "勤務先の前払い制度・福利厚生",
    description:
      "勤務先に給与の前払い制度がある場合は、手数料なしまたは低額な手数料で給与の一部を前払いで受け取れます。近年は「前給」「Paymeプレミアム」などの給与前払いサービスを導入する企業も増えています。",
    suited: "勤務先に前払い制度がある会社員",
  },
];

const faqs = [
  {
    question: "給与ファクタリングと通常のファクタリングは何が違いますか？",
    answer:
      "通常のファクタリングは事業者が保有する売掛債権（取引先への請求書）を売却するサービスで合法です。一方、給与ファクタリングは個人の給与債権を対象としており、金融庁から「貸金業に該当する」と判断されています。給与は労働基準法で本人への直接払いが義務付けられているため、債権譲渡の仕組みが成り立たず、実質的に貸付けとなります。",
  },
  {
    question: "すでに給与ファクタリングを利用してしまった場合はどうすればいいですか？",
    answer:
      "まず、返済をやめて弁護士や司法書士に相談してください。給与ファクタリングは違法な貸付けであるため、契約自体が無効となる可能性があります。また、支払い済みの手数料は不当利得として返還請求できるケースもあります。無料相談を実施している法律事務所も多いので、一人で悩まず専門家に相談しましょう。",
  },
  {
    question: "給与ファクタリング業者から脅迫された場合はどうすればいいですか？",
    answer:
      "脅迫行為は刑法上の犯罪です。電話やメールでの脅迫を受けた場合は、記録（通話録音やスクリーンショット）を保存し、最寄りの警察署に被害届を提出しましょう。また、弁護士に依頼して業者に対して受任通知を送ることで、直接の連絡を止められる場合があります。",
  },
  {
    question: "給与ファクタリングの広告を見かけたらどうすればいいですか？",
    answer:
      "金融庁の相談窓口（0570-016811）や各都道府県の消費生活センターに情報提供しましょう。SNSやインターネット上の広告で「給与を前払い」「ブラックOK」「審査なし」などと謳っている業者は、給与ファクタリングや闇金融の可能性が高いです。利用は絶対に避けてください。",
  },
  {
    question: "後払い現金化サービスも同様に危険ですか？",
    answer:
      "はい、「後払い現金化」「ツケ払い現金化」と呼ばれるサービスも、給与ファクタリングと同様の仕組みで違法な貸付けを行っている可能性が高いです。金融庁も注意喚起を行っています。価値のない商品を高額で「購入」させ、キャッシュバックと称して現金を渡す手口が典型的で、年利換算では数百%以上のコストになります。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "給与ファクタリングが違法な理由｜金融庁・警視庁の見解と安全な代替手段",
  description:
    "給与ファクタリングが違法とされる理由と安全な代替手段を解説。",
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
      "https://factoring-partner.pages.dev/articles/salary-factoring-illegal/",
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
      name: "給与ファクタリングが違法な理由",
      item: "https://factoring-partner.pages.dev/articles/salary-factoring-illegal/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SalaryFactoringIllegalPage() {
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
          { label: "給与ファクタリングが違法な理由" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-white">
            注意喚起
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            給与ファクタリングが違法な理由
            <br className="hidden md:block" />
            金融庁・警視庁の見解と安全な代替手段
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            給与ファクタリングは貸金業法違反の違法なサービスです。金融庁・警視庁の公式見解、被害事例、正規のファクタリングとの違い、安全な代替手段を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#warning" className="hover:underline">
                1. 給与ファクタリングは違法です
              </a>
            </li>
            <li>
              <a href="#reasons" className="hover:underline">
                2. 違法とされる3つの理由
              </a>
            </li>
            <li>
              <a href="#damage" className="hover:underline">
                3. 被害事例
              </a>
            </li>
            <li>
              <a href="#difference" className="hover:underline">
                4. 正規のファクタリングとの違い
              </a>
            </li>
            <li>
              <a href="#alternatives" className="hover:underline">
                5. 安全な代替手段5選
              </a>
            </li>
            <li>
              <a href="#consultation" className="hover:underline">
                6. 被害に遭った場合の相談先
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 警告 ─── */}
        <section id="warning" className="mb-16">
          <h2 className="mb-6 border-l-4 border-accent pl-4 text-xl font-bold text-text-main md:text-2xl">
            給与ファクタリングは違法です
          </h2>
          <div className="mb-6 rounded-lg border-2 border-accent bg-orange-50 p-6">
            <p className="mb-3 text-lg font-bold text-accent">重要な警告</p>
            <p className="mb-4 leading-relaxed text-text-light">
              <strong className="text-text-main">給与ファクタリングは貸金業法に違反する違法なサービス</strong>です。金融庁は2020年3月に「給与ファクタリングは貸金業に該当する」との見解を公表しており、無登録で給与ファクタリングを行う業者は闇金融と同等の違法行為を行っています。
            </p>
            <p className="leading-relaxed text-text-light">
              「ファクタリング」という名称を使っていますが、事業者向けの正規のファクタリング（売掛債権の売買）とは全く異なるサービスです。絶対に利用しないでください。
            </p>
          </div>
          <p className="mb-4 leading-relaxed text-text-light">
            給与ファクタリングとは、個人が勤務先から受け取る予定の給与（給与債権）を業者に「売却」し、給料日前に現金を受け取るサービスです。「給与の前払い」「給料ファクタリング」などとも呼ばれます。
          </p>
          <p className="leading-relaxed text-text-light">
            一見すると合法的なサービスに見えますが、金融庁は給与ファクタリングの経済的実態が「貸付け」であると判断しています。以下のセクションで、違法とされる理由を詳しく解説します。
          </p>
        </section>

        {/* ── 違法な理由 ─── */}
        <section id="reasons" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            違法とされる3つの理由
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            給与ファクタリングが違法とされる法的根拠を3つの観点から解説します。
          </p>
          <div className="space-y-8">
            {illegalReasons.map((reason, index) => (
              <div
                key={reason.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {reason.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {reason.description}
                    </p>
                    <div className="mt-4 rounded-lg border border-primary/30 bg-blue-50 p-4">
                      <p className="mb-1 text-sm font-bold text-primary">詳しい解説</p>
                      <p className="text-sm leading-relaxed text-text-light">
                        {reason.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 被害事例 ─── */}
        <section id="damage" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            被害事例
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            給与ファクタリングによる実際の被害事例を紹介します。これらは氷山の一角であり、泣き寝入りしているケースも多数あると推測されています。
          </p>
          <div className="space-y-4">
            {damageExamples.map((example, index) => (
              <div
                key={example.title}
                className="rounded-lg border border-accent/30 bg-orange-50 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-text-main">{example.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-light">
                      {example.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 正規との違い ─── */}
        <section id="difference" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            正規のファクタリングとの違い
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            給与ファクタリングと正規のファクタリング（事業者向け）は、名称こそ似ていますが全く別物です。両者の違いを比較表で確認しましょう。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">比較項目</th>
                  <th className="px-4 py-3 font-semibold">正規のファクタリング</th>
                  <th className="px-4 py-3 font-semibold">給与ファクタリング</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">対象</td>
                  <td className="px-4 py-3">事業者の売掛債権（請求書）</td>
                  <td className="px-4 py-3">個人の給与債権</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">合法性</td>
                  <td className="px-4 py-3 font-bold text-secondary">合法</td>
                  <td className="px-4 py-3 font-bold text-accent">違法（貸金業法違反）</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">取引の実態</td>
                  <td className="px-4 py-3">債権の売買（譲渡）</td>
                  <td className="px-4 py-3">実質的な貸付け</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">手数料</td>
                  <td className="px-4 py-3">2%〜18%程度</td>
                  <td className="px-4 py-3">年利換算で数百%〜数千%</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">利用者</td>
                  <td className="px-4 py-3">法人・個人事業主</td>
                  <td className="px-4 py-3">主に個人（会社員）</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">監督官庁の見解</td>
                  <td className="px-4 py-3">経済産業省が推進</td>
                  <td className="px-4 py-3">金融庁・警視庁が取締り</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 代替手段 ─── */}
        <section id="alternatives" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            安全な代替手段5選
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            給与ファクタリングに頼らなくても、合法的かつ低コストで資金を調達する方法はあります。以下の5つの代替手段を検討してください。
          </p>
          <div className="space-y-6">
            {alternatives.map((alt, index) => (
              <div
                key={alt.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {alt.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {alt.description}
                    </p>
                    <div className="mt-3 rounded-lg border border-secondary/30 bg-teal-50 p-3">
                      <p className="text-sm text-text-light">
                        <strong className="text-secondary">向いている方：</strong>{alt.suited}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 見分け方 ─── */}
        <section id="identify" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            給与ファクタリング業者の見分け方
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            給与ファクタリング業者は巧みに宣伝文句を変えて勧誘してきます。以下のキーワードや特徴がある業者には近づかないでください。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">危険なキーワード</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9888;</span>
                  <span>「給与を即日現金化」「給料の前払い」</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9888;</span>
                  <span>「ブラックOK」「審査なし」</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9888;</span>
                  <span>「借入ではない」「融資ではない」を過度に強調</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9888;</span>
                  <span>「在籍確認なし」「勤務先に連絡しない」</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-5">
              <h3 className="mb-2 font-bold text-accent">危険な業者の特徴</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9888;</span>
                  <span>会社の所在地や代表者名が不明</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9888;</span>
                  <span>貸金業の登録番号が確認できない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9888;</span>
                  <span>SNSやLINEでしか連絡が取れない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9888;</span>
                  <span>手数料の年利換算を明示しない</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 相談先 ─── */}
        <section id="consultation" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            被害に遭った場合の相談先
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            給与ファクタリングの被害に遭った場合や、被害に遭いそうな場合は、以下の窓口に相談してください。相談は無料で行えるものが多いです。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">金融庁 金融サービス利用者相談室</h3>
              <p className="text-sm leading-relaxed text-text-light">
                電話番号：0570-016811（ナビダイヤル）。金融サービスに関する相談・苦情を受け付けています。給与ファクタリング業者の情報提供も行えます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">消費者ホットライン</h3>
              <p className="text-sm leading-relaxed text-text-light">
                電話番号：188（局番なし）。最寄りの消費生活センターにつながります。給与ファクタリングを含む消費者被害の相談が可能です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">法テラス（日本司法支援センター）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                電話番号：0570-078374。収入が一定以下の方は無料で弁護士に相談できます。給与ファクタリングの被害回復（返還請求）についてもアドバイスを受けられます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-primary">警察（最寄りの警察署）</h3>
              <p className="text-sm leading-relaxed text-text-light">
                脅迫や恐喝を受けている場合は、証拠を保全した上で最寄りの警察署に相談・被害届を提出してください。#9110（警察相談専用電話）でも相談可能です。
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
              href="/articles/is-it-legal/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングは合法？</p>
              <p className="mt-1 text-sm text-text-light">
                法的根拠と違法業者の見分け方を解説
              </p>
            </Link>
            <Link
              href="/articles/troubles/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">トラブル事例と対策</p>
              <p className="mt-1 text-sm text-text-light">
                悪質業者の見分け方と被害防止策
              </p>
            </Link>
            <Link
              href="/articles/what-is-factoring/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">ファクタリングとは？</p>
              <p className="mt-1 text-sm text-text-light">
                正規のファクタリングの仕組みを解説
              </p>
            </Link>
            <Link
              href="/articles/for-freelance/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">フリーランス向けファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                個人事業主が安全に利用できるサービス
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            正規のファクタリング会社を見つけましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            事業者向けの正規のファクタリングは合法的な資金調達手段です。信頼できるファクタリング会社を15社厳選して比較しています。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
