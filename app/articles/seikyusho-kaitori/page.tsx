import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "請求書買取とは？仕組み・手数料相場・おすすめサービス【2026年】",
  description:
    "請求書買取とは、支払い期日前の請求書（売掛債権）を買取会社に売却して早期に資金化するサービスです。法的にはファクタリング（債権譲渡）と同じ仕組み。手数料の考え方・サービスの選び方・対応サービス比較表をわかりやすく解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/seikyusho-kaitori/",
  },
  openGraph: {
    title:
      "請求書買取とは？仕組み・手数料相場・おすすめサービス【2026年】",
    description:
      "請求書買取＝ファクタリング（債権譲渡）の仕組み・手数料の考え方・対応サービスの比較をわかりやすく解説します。",
    url: "https://hyogo-shihoushoshi.jp/articles/seikyusho-kaitori/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const services = [
  {
    name: "ペイトナー",
    href: "/reviews/paytner/",
    fee: "一律10%",
    speed: "最短10分",
    amount: "初回1万〜25万円（2回目以降上限300万円）",
    target: "フリーランス・個人事業主",
  },
  {
    name: "ラボル",
    href: "/reviews/labol/",
    fee: "一律10%（税込）",
    speed: "最短60分",
    amount: "1万円〜（上限は審査により決定）",
    target: "フリーランス・個人事業主",
  },
  {
    name: "QuQuMo",
    href: "/reviews/ququmo/",
    fee: "1%〜（上限非公表）",
    speed: "最短2時間",
    amount: "制限なし",
    target: "法人・個人事業主",
  },
  {
    name: "OLTA",
    href: "/reviews/olta/",
    fee: "2%〜9%",
    speed: "最短即日",
    amount: "制限なし",
    target: "法人・個人事業主",
  },
  {
    name: "FREENANCE",
    href: "/reviews/freenance/",
    fee: "3%〜10%",
    speed: "最短即日",
    amount: "1万円〜（上限は与信次第）",
    target: "フリーランス・個人事業主",
  },
  {
    name: "みんなのファクタリング",
    href: "/reviews/minnano/",
    fee: "7%〜15%",
    speed: "最短3時間",
    amount: "10万円〜",
    target: "法人・個人事業主",
  },
];

const choosePoints = [
  {
    title: "請求書の金額に合ったサービスを選ぶ",
    description:
      "数万円〜数十万円の少額ならペイトナー（初回1万〜25万円）やラボル（1万円〜）のような少額特化型が申し込みやすく、まとまった金額ならQuQuMoやOLTAのような買取額に制限のないサービスが候補になります。買取可能額の範囲外だと審査以前に申し込めないため、最初に確認しましょう。",
  },
  {
    title: "手数料の「下限だけ」で選ばない",
    description:
      "「1%〜」のような表記は最も条件が良い場合の下限であり、実際の料率は請求書の内容や売掛先の信用力で変わります。上限を公表していない会社もあるため、必ず見積もりを取り、可能なら2〜3社を比較して実際の提示額で判断するのが確実です。詳しい考え方は手数料ガイドで解説しています。",
  },
  {
    title: "入金までのスピードを確認する",
    description:
      "当サイトで公式確認した範囲でも、最短10分（ペイトナー）から最短即日（OLTA・FREENANCE）までサービスによって差があります。支払い期限が目前なら申し込みから入金までオンラインで完結するサービスを、数日の余裕があるなら手数料の安さを優先するなど、緊急度で使い分けましょう。",
  },
  {
    title: "取引先に知られたくないかどうかで契約方式を選ぶ",
    description:
      "2社間方式なら取引先（売掛先）への通知なしで利用でき、3社間方式は取引先の承諾が必要な代わりに手数料が安くなる傾向があります。取引関係への影響を避けたい場合は、2社間・オンライン完結型のサービスを選ぶのが基本です。",
  },
  {
    title: "運営会社の実在性と契約内容を確認する",
    description:
      "請求書買取業者には登録制度がないため、業者選びは自己責任になります。運営会社の所在地・代表者が確認できるか、契約書に償還請求権の有無（ノンリコースか）が明記されているかを必ず確認しましょう。悪質業者の見分け方は別記事で詳しく解説しています。",
  },
];

const faqs = [
  {
    question: "請求書買取とファクタリングは何が違うのですか？",
    answer:
      "実質的に同じサービスです。「請求書買取」はサービスの内容をわかりやすく表現した呼び方で、法的にはファクタリング、すなわち民法上の債権譲渡にあたります。請求書そのものではなく、請求書が表す売掛債権（代金を受け取る権利）を売買しています。",
  },
  {
    question: "請求書買取の手数料はどのくらいかかりますか？",
    answer:
      "会社により異なりますが、一般的な目安は2社間方式で8〜18%、3社間方式で1〜9%程度とされます。当サイトで公式確認した個別サービスでは、一律10%（ペイトナー・ラボル）、1%〜（QuQuMo）、2%〜9%（OLTA）など料率体系はさまざまです。実際の料率は請求書の内容や売掛先の信用力で変わるため、見積もりで確認しましょう。",
  },
  {
    question: "個人事業主・フリーランスでも請求書を買い取ってもらえますか？",
    answer:
      "利用できます。ペイトナー・ラボル・FREENANCEなどはフリーランス・個人事業主向けに設計されたサービスで、1万円程度の少額の請求書から申し込めます。ただし、請求書の宛先（売掛先）が法人であることを条件とするサービスが多い点には注意が必要です。",
  },
  {
    question: "どんな請求書でも買い取ってもらえますか？",
    answer:
      "買い取れるのは、すでに商品・サービスの提供が完了して代金が確定している請求書（確定債権）が基本です。支払い期日を過ぎた請求書や、これから作業する分の請求書は対象外となるのが一般的です。また、請求書の実在性を確認するため、取引のエビデンス（契約書・入金履歴など）の提出を求められます。",
  },
  {
    question: "請求書買取は借金になりますか？",
    answer:
      "なりません。請求書買取は債権の売買であり、金銭の貸し借り（融資）ではないため、負債は増えず、信用情報機関にも登録されません。ただし「買取」と称して実質的な貸付を行う違法業者も存在するため、分割返済や利息を求める契約には注意してください。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "請求書買取とは？仕組み・手数料相場・おすすめサービス【2026年】",
  description:
    "請求書買取＝ファクタリング（債権譲渡）の仕組み・手数料の考え方・対応サービスの比較をわかりやすく解説します。",
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
    "@id": "https://hyogo-shihoushoshi.jp/articles/seikyusho-kaitori/",
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

export default function SeikyushoKaitoriPage() {
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
          { label: "請求書買取とは" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            基礎知識
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            請求書買取とは？
            <br className="hidden md:block" />
            仕組み・手数料相場・おすすめサービス【2026年】
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            支払い期日前の請求書を売却して早期に資金化する「請求書買取」の仕組み・手数料の考え方・サービスの選び方を、公式確認済みのデータとともに解説します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。掲載内容は調査時点のものであり、手数料・条件などの最新情報は各公式サイトでご確認ください。
        </p>

        {/* 結論ボックス */}
        <div className="mb-12 rounded-lg border border-secondary/30 bg-teal-50 p-6">
          <p className="mb-3 font-bold text-secondary">この記事の結論</p>
          <ul className="space-y-2 text-sm text-text-light">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                「請求書買取」は、法的には
                <strong className="text-text-main">
                  ファクタリング（債権譲渡）
                </strong>
                と同じ仕組み。民法で認められた合法的な取引です
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                借入ではないため負債にならず、信用情報にも影響しない
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                手数料の一般的な目安は2社間8〜18%・3社間1〜9%（会社により異なる）
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                最短10分〜即日入金のオンライン完結サービスもあり、フリーランスは1万円の請求書から利用可能
              </span>
            </li>
          </ul>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#what-is" className="hover:underline">
                1. 請求書買取とは（正体はファクタリング）
              </a>
            </li>
            <li>
              <a href="#mechanism" className="hover:underline">
                2. 請求書買取の仕組み（2社間・3社間）
              </a>
            </li>
            <li>
              <a href="#fee" className="hover:underline">
                3. 手数料の考え方と相場の目安
              </a>
            </li>
            <li>
              <a href="#choose" className="hover:underline">
                4. 請求書買取サービスの選び方5つ
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                5. 対応サービス比較表
              </a>
            </li>
            <li>
              <a href="#related-topics" className="hover:underline">
                6. 目的別の関連ガイド
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                7. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 請求書買取とは ─── */}
        <section id="what-is" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            請求書買取とは（正体はファクタリング）
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            <strong className="text-text-main">請求書買取</strong>
            とは、取引先に発行した支払い期日前の請求書（売掛債権）を専門の買取会社に売却し、手数料を差し引いた代金を先に受け取るサービスです。「請求書を売ってすぐ現金にする」とイメージすると分かりやすいでしょう。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            重要なのは、
            <strong className="text-text-main">
              「請求書買取」と呼ばれるサービスの多くは、法的にはファクタリング（債権譲渡）という仕組み
            </strong>
            だという点です。買い取られるのは紙やPDFの請求書そのものではなく、請求書が表す「代金を受け取る権利（売掛債権）」であり、これは民法466条で認められた合法的な取引です。呼び方が違うだけで、「ファクタリング」「売掛金の資金化」と同じサービスを指しています。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            ファクタリングという仕組み全体の詳しい解説（メリット・デメリット・種類・銀行融資との違い）は、
            <Link
              href="/articles/what-is-factoring/"
              className="font-medium text-primary underline"
            >
              ファクタリングとは？仕組み・種類をわかりやすく解説
            </Link>
            に譲り、本記事では「請求書買取」という視点で必要なポイントに絞って解説します。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-bold text-text-main">
              呼び方の整理（すべて同じ仕組みを指すことが多い）
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  <strong className="text-text-main">請求書買取</strong>
                  ｜請求書（売掛債権）を売却する行為に着目した呼び方
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  <strong className="text-text-main">請求書の先払い・前払い</strong>
                  ｜入金が早まる効果に着目した呼び方（
                  <Link href="/articles/seikyusho-sakibarai/" className="text-primary underline">
                    詳細記事
                  </Link>
                  ）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  <strong className="text-text-main">請求書・売掛金の現金化</strong>
                  ｜資金化の結果に着目した呼び方（
                  <Link href="/articles/seikyusho-genkinka/" className="text-primary underline">
                    詳細記事
                  </Link>
                  ）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary">&#10003;</span>
                <span>
                  <strong className="text-text-main">ファクタリング</strong>
                  ｜金融サービスとしての正式な呼び方（法的には債権譲渡）
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 仕組み ─── */}
        <section id="mechanism" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            請求書買取の仕組み（2社間・3社間）
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            請求書買取には、契約に関わる当事者の数によって2つの方式があります。どちらを選ぶかで「取引先に知られるかどうか」と「手数料」が大きく変わります。
          </p>
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-primary">
                2社間方式（取引先に知られない）
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                自社と買取会社の2者だけで契約する方式です。取引先（請求書の宛先）への通知や承諾は不要で、請求書の代金は期日どおり自社に入金され、その後に買取会社へ支払います。取引関係に影響を与えずスピーディーに資金化できる一方、買取会社のリスクが高い分、手数料は高め（目安8〜18%）になります。オンライン完結型サービスの多くはこの方式です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-primary">
                3社間方式（手数料が安い）
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                自社・買取会社・取引先の3者で契約する方式です。取引先に債権譲渡を通知して承諾を得たうえで、期日には取引先が買取会社へ直接支払います。買取会社の未回収リスクが低いため手数料は安く（目安1〜9%）なりますが、取引先に利用を知られる点と、承諾手続きの分だけ入金まで時間がかかる点がトレードオフです。
              </p>
            </div>
          </div>
          <p className="leading-relaxed text-text-light">
            2つの方式の流れの図解やメリット・デメリットの詳細な比較は、
            <Link
              href="/articles/what-is-factoring/"
              className="font-medium text-primary underline"
            >
              ファクタリングとは？の記事内「仕組みを図解で解説」
            </Link>
            をご覧ください。
          </p>
        </section>

        {/* ── 手数料 ─── */}
        <section id="fee" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            手数料の考え方と相場の目安
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            請求書買取のコストは「手数料」の一本です。金利のように期間に応じて増えるのではなく、買取時に請求書の額面から一定割合が差し引かれます。たとえば50万円の請求書を手数料10%で売却すると、受取額は45万円です。
          </p>
          <div className="mb-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold">契約方式</th>
                  <th className="px-4 py-3 font-semibold">手数料の目安</th>
                  <th className="px-4 py-3 font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    2社間方式
                  </td>
                  <td className="px-4 py-3">8%〜18%（会社により異なる目安）</td>
                  <td className="px-4 py-3">取引先に知られない・最短即日</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-section-bg px-4 py-3 font-semibold text-text-main">
                    3社間方式
                  </td>
                  <td className="px-4 py-3">1%〜9%（会社により異なる目安）</td>
                  <td className="px-4 py-3">取引先の承諾が必要・手数料が安い</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 leading-relaxed text-text-light">
            実際の料率は、売掛先（請求書の宛先）の信用力・請求書の金額・支払い期日までの期間・利用実績などで決まります。売掛先が上場企業や官公庁であるほど安くなり、逆に個人宛や少額の請求書は高くなる傾向があります。
          </p>
          <p className="leading-relaxed text-text-light">
            手数料の内訳・計算方法・安く抑える交渉のコツは
            <Link
              href="/articles/fee-guide/"
              className="font-medium text-primary underline"
            >
              手数料の相場と計算方法ガイド
            </Link>
            で詳しく解説しています。金額を入れて概算を知りたい方は
            <Link href="/simulator/" className="font-medium text-primary underline">
              手数料シミュレーター
            </Link>
            が便利です。
          </p>
        </section>

        {/* ── 選び方 ─── */}
        <section id="choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            請求書買取サービスの選び方5つ
          </h2>
          <p className="mb-8 leading-relaxed text-text-light">
            請求書買取サービスは数多くありますが、比較すべきポイントは絞られます。以下の5つを順に確認すれば、自分に合わないサービスに申し込んで時間を無駄にすることを避けられます。
          </p>
          <div className="space-y-6">
            {choosePoints.map((point, index) => (
              <div
                key={point.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      {point.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 比較表 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            請求書買取に対応する主なサービス比較表
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            オンラインで請求書買取（ファクタリング）に対応する主なサービスを比較します。手数料はいずれも
            <strong className="text-text-main">
              各社公式サイトにて2026年6月に確認した値
            </strong>
            です（最新の条件は各公式サイトでご確認ください）。
          </p>
          <div className="mb-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-3 py-3 font-semibold">サービス名</th>
                  <th className="px-3 py-3 font-semibold">手数料</th>
                  <th className="px-3 py-3 font-semibold">入金速度</th>
                  <th className="px-3 py-3 font-semibold">買取可能額</th>
                  <th className="px-3 py-3 font-semibold">対象</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr
                    key={service.name}
                    className={`border-t border-border ${index % 2 === 1 ? "bg-section-bg" : ""}`}
                  >
                    <td className="px-3 py-3 font-semibold">
                      <Link href={service.href} className="text-primary underline">
                        {service.name}
                      </Link>
                    </td>
                    <td className="px-3 py-3">{service.fee}</td>
                    <td className="px-3 py-3">{service.speed}</td>
                    <td className="px-3 py-3">{service.amount}</td>
                    <td className="px-3 py-3">{service.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-text-light">
            ※FREENANCEはフリーナンス口座を受取先に設定しない場合は一律10%（公式サイトにて2026年6月確認）。QuQuMoの手数料上限は非公表のため、実際の料率は見積もりでご確認ください。
          </p>
          <p className="leading-relaxed text-text-light">
            より多くの会社から選びたい方は
            <Link href="/ranking/" className="font-medium text-primary underline">
              おすすめファクタリング会社ランキング
            </Link>
            、49社以上を条件で絞り込みたい方は
            <Link
              href="/articles/company-directory/"
              className="font-medium text-primary underline"
            >
              審査済み業者データベース
            </Link>
            をご覧ください。
          </p>
        </section>

        {/* ── 目的別の関連ガイド（ピラーのリンク枠） ─── */}
        <section id="related-topics" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            目的別の関連ガイド
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「請求書買取」と一口に言っても、知りたいことは人によって異なります。目的に合わせて以下の記事をご覧ください。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/seikyusho-kaitori-app/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                請求書買取アプリのおすすめ →
              </p>
              <p className="mt-1 text-sm text-text-light">
                スマホだけで完結するサービスを比較。最短10分入金
              </p>
            </Link>
            <Link
              href="/articles/seikyusho-sakibarai/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                請求書の先払いサービスとは →
              </p>
              <p className="mt-1 text-sm text-text-light">
                「先払い」の実態と給与前払いサービスとの違いを解説
              </p>
            </Link>
            <Link
              href="/articles/seikyusho-genkinka/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                請求書を現金化する方法 →
              </p>
              <p className="mt-1 text-sm text-text-light">
                違法性はない？安全な進め方と危険な業者の見分け方
              </p>
            </Link>
            <Link
              href="/articles/urikakekin-genkinka/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                売掛金を現金化する方法 →
              </p>
              <p className="mt-1 text-sm text-text-light">
                売掛金という切り口から資金化の選択肢を整理
              </p>
            </Link>
          </div>
        </section>

        {/* ── 関連ツール・データ ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">
              あわせて使いたいツール・データ
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li>
                <Link href="/diagnosis/" className="font-medium text-primary underline">
                  無料診断（7つの質問・30秒）
                </Link>
                ｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。
              </li>
              <li>
                <Link href="/simulator/" className="font-medium text-primary underline">
                  手数料シミュレーター
                </Link>
                ｜請求書の金額から手数料・入金額の目安を計算できます。
              </li>
              <li>
                <Link
                  href="/articles/company-directory/"
                  className="font-medium text-primary underline"
                >
                  審査済み業者データベース（49社+）
                </Link>
                ｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。
              </li>
              <li>
                <Link href="/ranking/" className="font-medium text-primary underline">
                  おすすめファクタリング会社ランキング
                </Link>
                ｜編集部が厳選した順位で比較できます。
              </li>
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

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            あなたの請求書に合う買取サービスを見つけましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            手数料・入金スピード・買取可能額はサービスごとに大きく異なります。公式確認済みのデータで比較して、条件の良い1社を選びましょう。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            おすすめファクタリング会社ランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
