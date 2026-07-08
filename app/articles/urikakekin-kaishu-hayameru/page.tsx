import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "売掛金の回収を早める方法｜入金サイト短縮の交渉術と資金化",
  description:
    "売掛金の回収を早める実務手順を解説。請求サイクルの改善、入金サイト短縮の交渉術（下請法の60日ルール）、早期入金の依頼の仕方、それでも間に合わないときの資金化サービス活用まで、交渉を本筋に据えた実践ガイドです。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/urikakekin-kaishu-hayameru/",
  },
  openGraph: {
    title: "売掛金の回収を早める方法｜入金サイト短縮の交渉術と資金化",
    description:
      "請求サイクル改善・入金サイト交渉・早期入金の依頼・資金化サービスの4段構えで売掛金の回収を早める実務ガイド。",
    url: "https://hyogo-shihoushoshi.jp/articles/urikakekin-kaishu-hayameru/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const invoiceCycleTips = [
  {
    title: "請求書は納品後すぐに発行する",
    description:
      "「月末にまとめて請求」の運用だと、月初の納品分は請求まで最大1ヶ月待つことになります。納品・検収の完了ごとに請求書を発行できないか、取引先と運用を確認しましょう。請求が1週間早まれば、入金も原則1週間早まります。",
  },
  {
    title: "締め日と支払日の関係を把握する",
    description:
      "「20日締め・翌月末払い」の取引先に21日に請求すると、入金は翌々月末になり実質70日待ちです。取引先ごとの締め日を一覧化し、締め日直前の納品・請求を逃さない運用に変えるだけで、回収は大きく早まります。",
  },
  {
    title: "請求書の不備をなくす",
    description:
      "宛名・金額・振込先・インボイス登録番号などの不備は、差し戻しにより入金が丸ごと1サイクル（約1ヶ月）遅れる原因になります。請求書発行時のチェックリスト化や、請求書発行システムの利用でミスを防ぎましょう。",
  },
  {
    title: "入金予定日を管理し、遅延には即日連絡する",
    description:
      "入金予定日を過ぎても連絡しない企業は、支払い優先度を下げられがちです。予定日の翌営業日には確認の連絡を入れる運用を徹底しましょう。単なる担当者の失念や請求書の未達が原因であるケースも少なくありません。",
  },
];

const negotiationSteps = [
  {
    title: "交渉材料を整理する（取引実績・継続性）",
    description:
      "取引年数、取引額の推移、品質・納期の実績など、自社が取引先にとって重要なパートナーである根拠を整理します。「サイト短縮をお願いできる立場か」を客観視することが交渉の出発点です。",
  },
  {
    title: "段階的な短縮を提案する",
    description:
      "「60日を30日に」のような大幅な変更は経理フローの変更を伴うため断られやすいものです。「月末締め翌々月払い→翌月末払い」など1段階の短縮から提案し、新規案件分からの適用を打診すると受け入れられやすくなります。",
  },
  {
    title: "早期支払割引（値引きとの交換）を検討する",
    description:
      "「期日より◯日早い入金なら◯%割引」という提案は、取引先にもメリットがあるため交渉が成立しやすい方法です。ただし割引率は自社の資金調達コスト（ファクタリング手数料や借入金利）と比較して、割に合う水準に設定しましょう。",
  },
  {
    title: "契約書・発注書に支払条件を明記する",
    description:
      "口頭合意はトラブルのもとです。合意したサイトは契約書や注文書・請書に明記し、次回以降の取引の標準条件にします。新規取引先とは、最初の契約時に支払条件を交渉するのが最も簡単です。",
  },
];

const fundingServices = [
  {
    name: "ビートレーディング",
    fee: "2社間4〜12%・3社間2〜9%",
    speed: "最短2時間",
    note: "業界最大手・買取額に制限なし",
  },
  {
    name: "QuQuMo",
    fee: "1%〜（上限非公表）",
    speed: "最短2時間",
    note: "オンライン完結・必要書類2点",
  },
  {
    name: "ペイトナー",
    fee: "一律10%",
    speed: "最短10分",
    note: "フリーランス・個人事業主向け・1万円から",
  },
];

const faqs = [
  {
    question: "入金サイトの短縮交渉で取引を打ち切られませんか？",
    answer:
      "一方的な要求ではなく、段階的な短縮や早期支払割引など取引先のメリットも用意した提案であれば、交渉自体が取引打ち切りに直結することは通常ありません。また、親事業者と下請事業者の関係では、交渉を理由とした不利益な取り扱いは下請法・独占禁止法上問題となり得ます。不安な場合は下請かけこみ寺などの公的相談窓口も利用できます。",
  },
  {
    question: "下請法の60日ルールとは何ですか？",
    answer:
      "下請法が適用される取引では、親事業者は下請事業者への代金を、給付を受領した日から起算して60日以内のできる限り短い期間内に支払わなければならないと定められています。60日を超える支払いサイトの設定はそれ自体が違反となり、支払いが遅延した場合は年率14.6%の遅延利息の対象にもなります。詳しくは当サイトの下請法解説記事をご覧ください。",
  },
  {
    question: "交渉しても入金サイトが縮まらない場合はどうすればいいですか？",
    answer:
      "取引先の支払い条件が変えられない場合、売掛金を期日前に資金化する方法（ファクタリング）が選択肢になります。売掛金を専門会社に売却する債権譲渡の仕組みで、最短即日で現金化できます。手数料がかかるため、恒常的に使うのではなく、資金需要が集中するタイミングに絞って使うのが現実的です。",
  },
  {
    question: "支払いが遅れている売掛金も資金化できますか？",
    answer:
      "すでに支払い期日を過ぎた売掛金（延滞債権）は、原則としてファクタリングの買取対象になりません。ファクタリングが使えるのは期日前の確定した売掛金です。期日超過の債権は、内容証明による督促や、弁護士への相談・支払督促などの法的手段の検討対象になります。回収と資金化は分けて考えましょう。",
  },
  {
    question: "早期支払割引の割引率はどのくらいが妥当ですか？",
    answer:
      "一律の相場はなく、自社の資金調達コストとの比較で決めるのが合理的です。たとえばファクタリングを使った場合の手数料（一般に2社間8〜18%目安）や借入金利より低い割引率で早期入金が実現するなら、割引で早めてもらう方が有利という判断ができます。個別の判断は税理士など専門家への相談をおすすめします。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline: "売掛金の回収を早める方法｜入金サイト短縮の交渉術と資金化",
  description:
    "請求サイクル改善・入金サイト交渉・早期入金の依頼・資金化サービスの4段構えで売掛金の回収を早める実務ガイド。",
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
    "@id":
      "https://hyogo-shihoushoshi.jp/articles/urikakekin-kaishu-hayameru/",
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
      item: "https://hyogo-shihoushoshi.jp/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "コラム",
      item: "https://hyogo-shihoushoshi.jp/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "売掛金の回収を早める方法",
      item: "https://hyogo-shihoushoshi.jp/articles/urikakekin-kaishu-hayameru/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function UrikakekinKaishuHayameruPage() {
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
          { label: "売掛金の回収を早める方法" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            実務ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            売掛金の回収を早める方法
            <br className="hidden md:block" />
            入金サイト短縮の交渉術と資金化
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            回収を早める本筋は「請求の運用改善」と「支払条件の交渉」です。4段構え（請求サイクル改善→サイト交渉→早期入金の依頼→資金化サービス）で、実務の手順を解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 結論box ─── */}
        <div className="mb-12 rounded-lg border border-secondary/30 bg-teal-50 p-6">
          <p className="mb-3 font-bold text-secondary">この記事の結論</p>
          <ul className="space-y-2 text-sm leading-relaxed text-text-light">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                まず取り組むべきは<strong className="text-text-main">請求サイクルの改善</strong>（請求の即時発行・締め日管理・不備ゼロ）。コストをかけずに回収を早められる
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                恒常的な改善は<strong className="text-text-main">入金サイトの短縮交渉</strong>で。下請法適用取引なら「受領から60日以内」の法定ルールが交渉の後ろ盾になる
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                交渉で間に合わない資金需要には、売掛金を期日前に売却して現金化する<strong className="text-text-main">ファクタリング（債権譲渡）が「手段」として使える</strong>。手数料がかかるため常用ではなくスポット利用が基本
              </span>
            </li>
          </ul>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-8 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#why-slow" className="hover:underline">
                1. 売掛金の回収が遅くなる3つの原因
              </a>
            </li>
            <li>
              <a href="#invoice-cycle" className="hover:underline">
                2. まずは請求サイクルの改善から（コストゼロ）
              </a>
            </li>
            <li>
              <a href="#negotiation" className="hover:underline">
                3. 入金サイト短縮の交渉術（下請法の60日ルール）
              </a>
            </li>
            <li>
              <a href="#early-payment" className="hover:underline">
                4. 早期入金を依頼するときのポイント
              </a>
            </li>
            <li>
              <a href="#funding" className="hover:underline">
                5. 交渉で間に合わないときの資金化サービス
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、手数料・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* ── 原因 ─── */}
        <section id="why-slow" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            売掛金の回収が遅くなる3つの原因
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「入金が遅い」と一口に言っても、原因は大きく3つに分かれます。原因によって打ち手が違うため、まず自社がどれに当てはまるかを切り分けましょう。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">
                (1) 自社の請求運用が遅い
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                請求書の発行が月末まとめ・締め日超過・記載不備での差し戻しなど、自社側の運用で入金が1サイクル遅れているケース。もっとも多く、もっとも安く直せる原因です。→ 対策は<a href="#invoice-cycle" className="font-medium text-primary underline">請求サイクルの改善</a>
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">
                (2) 契約上の支払いサイトが長い
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                「月末締め翌々月払い」など、契約条件そのものが長いケース。運用改善では縮まらないため、支払条件の交渉が必要です。→ 対策は<a href="#negotiation" className="font-medium text-primary underline">入金サイト短縮の交渉</a>
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-2 font-bold text-primary">
                (3) 取引先の支払い遅延
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                期日を過ぎても入金されないケース。督促の即応と、繰り返す場合は取引条件の見直し（前払い・分割検収など）が必要です。期日超過の債権はファクタリングの対象外になるため、遅延が常態化する前の対処が重要です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 請求サイクル改善 ─── */}
        <section id="invoice-cycle" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            まずは請求サイクルの改善から（コストゼロ）
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            交渉やサービス利用の前に、自社だけで完結できる改善から着手しましょう。請求の運用を整えるだけで、実質的な回収期間が1週間〜1ヶ月縮まることは珍しくありません。
          </p>
          <div className="space-y-6">
            {invoiceCycleTips.map((tip, index) => (
              <div
                key={tip.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{tip.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            資金繰り全体の管理方法（資金繰り表・月次チェックリスト）は
            <Link href="/articles/cashflow-tips/" className="font-medium text-primary underline">
              中小企業の資金繰り改善方法7選
            </Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* ── サイト交渉 ─── */}
        <section id="negotiation" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            入金サイト短縮の交渉術（下請法の60日ルール）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            契約上のサイトが長い場合、根本解決は取引先との交渉です。感情論ではなく、材料と代替案を用意した「条件交渉」として臨みましょう。
          </p>

          <div className="mb-8 rounded-lg border border-secondary/30 bg-teal-50 p-6">
            <p className="mb-2 font-bold text-secondary">
              交渉の後ろ盾になる「下請法の60日ルール」
            </p>
            <p className="text-sm leading-relaxed text-text-light">
              下請法が適用される取引（親事業者・下請事業者の資本金区分などの要件あり）では、代金の支払期日は
              <strong className="text-text-main">給付の受領から60日以内</strong>
              に定める義務があり、支払い遅延には年率14.6%の遅延利息が課されます。自社の取引が対象かどうかの判定と法定ルールの詳細は
              <Link href="/articles/subcontract-law/" className="font-medium text-primary underline">
                下請法とファクタリング｜支払期日の法定ルール
              </Link>
              をご覧ください。60日を超えるサイトを提示されている下請事業者にとって、これは交渉ではなく法律上の是正要求ができる領域です。
            </p>
          </div>

          <div className="space-y-6">
            {negotiationSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 早期入金の依頼 ─── */}
        <section id="early-payment" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            早期入金を依頼するときのポイント
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            恒常的なサイト変更ではなく、「今回だけ早めてほしい」というスポットの依頼は、条件交渉より心理的なハードルが低い方法です。成功率を上げるポイントは次の3つです。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">1.</span>
                <span>
                  <strong className="text-text-main">理由は簡潔に、依頼は具体的に</strong>：「◯日までに◯円の入金をお願いできないか」と金額と期日を明示する。詳細すぎる窮状説明は信用不安を招くため不要です
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">2.</span>
                <span>
                  <strong className="text-text-main">相手の締め・支払いフローに合わせる</strong>：経理処理の締め日直前に依頼しても対応できません。取引先の支払いサイクルを踏まえ、余裕を持って打診します
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-primary">3.</span>
                <span>
                  <strong className="text-text-main">多用しない</strong>：早期入金の依頼が続くと「資金繰りが危ない会社」という印象になり、取引自体に影響しかねません。繰り返し必要になるなら、サイト交渉か資金化サービスに切り替えるべきサインです
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 資金化サービス ─── */}
        <section id="funding" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            交渉で間に合わないときの資金化サービス
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            「交渉はしているが、今月の支払いには間に合わない」——そんなときの手段が、売掛金を期日前に売却して現金化する
            <strong className="text-text-main">ファクタリング</strong>
            です。法的には民法上の債権譲渡で、借入ではないため負債にならず、2社間契約なら取引先に知られずに利用できます。仕組みの詳細は
            <Link href="/articles/what-is-factoring/" className="font-medium text-primary underline">
              ファクタリングとは？
            </Link>
            を、手数料の目安（2社間8〜18%・3社間1〜9%）は
            <Link href="/articles/fee-guide/" className="font-medium text-primary underline">
              手数料の相場と計算方法
            </Link>
            をご覧ください。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            手数料がかかるため「回収が早まる」というより「早さをコストで買う」手段です。交渉による無償の改善が本筋で、資金化サービスは納税・給与支払いなど期限が動かせない場面に絞って使うのが健全な使い方です。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">サービス</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">手数料（公式確認値）</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">入金速度</th>
                  <th className="px-4 py-3 font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody>
                {fundingServices.map((service) => (
                  <tr key={service.name} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                      {service.name}
                    </td>
                    <td className="px-4 py-3 text-text-light whitespace-nowrap">{service.fee}</td>
                    <td className="px-4 py-3 text-text-light whitespace-nowrap">{service.speed}</td>
                    <td className="px-4 py-3 text-text-light">{service.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-text-light">
            ※手数料は各社公式サイトにて2026年6月確認。実際の料率は売掛先の信用力・契約形態などにより個別に決まります。
          </p>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            現金化の選択肢全体（ABL・手形割引・期日前払い交渉との比較）は
            <Link href="/articles/urikakekin-genkinka/" className="font-medium text-primary underline">
              売掛金を現金化する方法
            </Link>
            で整理しています。
          </p>
        </section>

        {/* ── 関連ツール・データ ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">あわせて使いたいツール・データ</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
              <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
              <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
              <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
                    <li><Link href="/articles/seikyusho-kaitori/" className="font-medium text-primary underline">請求書買取とは（別語彙の基本）</Link>｜呼び方の違いと仕組みをまとめています。</li>
            </ul>
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
              href="/articles/urikakekin-genkinka/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">売掛金を現金化する方法</p>
              <p className="mt-1 text-sm text-text-light">
                即日での資金化・仕組み・注意点【2026年】
              </p>
            </Link>
            <Link
              href="/articles/subcontract-law/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">下請法とファクタリング</p>
              <p className="mt-1 text-sm text-text-light">
                支払期日60日ルールなど法定ルールを解説
              </p>
            </Link>
            <Link
              href="/articles/tsunagi-shikin/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">つなぎ資金の調達方法</p>
              <p className="mt-1 text-sm text-text-light">
                入金までの数週間を乗り切る選択肢比較
              </p>
            </Link>
            <Link
              href="/articles/cashflow-tips/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">資金繰り改善方法7選</p>
              <p className="mt-1 text-sm text-text-light">
                ファクタリング以外の選択肢も比較表で解説
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            資金化サービスを使うなら比較から
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            交渉と並行して資金化の準備をしておくと、いざという時に慌てません。手数料を公式確認した15社の比較で、条件の良い1社を見つけましょう。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめ15社の比較ランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
