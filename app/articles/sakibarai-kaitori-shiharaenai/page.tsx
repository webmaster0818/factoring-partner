import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "先払い買取が支払えない・遅れそうなときの対処法｜相談できる窓口一覧【2026年】",
  description:
    "先払い買取の支払いができない・遅れそうなときの対処法を解説。放置や別の現金化での穴埋めがなぜ危険なのか、業者から請求が来たら何が起こりうるのか、司法書士・弁護士に相談する価値、消費者ホットライン188・#9110・財務局・日本貸金業協会・法テラスの相談窓口一覧まで、金融庁・消費者庁・警察庁など公的機関の一次情報にもとづいて説明します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-shiharaenai/",
  },
  openGraph: {
    title:
      "先払い買取が支払えない・遅れそうなときの対処法｜相談できる窓口一覧【2026年】",
    description:
      "先払い買取の支払いが遅れそうでも、放置や別の現金化での穴埋めは危険です。188・#9110・財務局・貸金業協会・法テラスの窓口一覧と、司法書士・弁護士に相談する価値を一次情報で解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-shiharaenai/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const dontItems = [
  {
    title: "別の後払い現金化・先払い買取で穴埋めする",
    description:
      "支払いに充てるお金を、別の先払い買取や後払い（ツケ払い）現金化でつくるのは、最も避けるべき対応です。受け取ったお金より多くを返す構造の取引を重ねることになるため、消費者庁が注意喚起で指摘する「かえって生活が悪化し、多重債務に陥る危険性」の典型的なパターンにつながります。一時的に目の前の支払いをしのげても、次の支払日にはさらに大きな金額が必要になります。",
  },
  {
    title: "業者からの連絡を無視して放置する",
    description:
      "怖いからといって連絡を見なかったことにするのも、おすすめできません。一般論として、放置すると督促の連絡が続いたり、遅延損害金などの名目で請求額の増額を主張されたりすることがあり、対応を先送りするほど相談・交渉の負担は大きくなりがちです。重要なのは「業者と直接やり取りを続ける」ことではなく、「早めに公的窓口や専門家に相談して方針を決める」ことです。",
  },
  {
    title: "「払う」「払わない」を自己判断で決めつける",
    description:
      "請求されるまま支払ってしまうことも、逆に「こんな請求は無視してよい」と自己判断することも、どちらも危険です。支払義務の有無は個別の契約内容と取引の実態によって判断されるものであり、当サイトを含め、専門家以外が一律に断定することはできません。支払う前に、消費生活センター（188）や弁護士・司法書士に取引の記録を見せて判断を仰いでください。",
  },
];

const consultWindows = [
  {
    name: "消費者ホットライン",
    tel: "188（いやや）",
    note: "最寄りの消費生活センターにつながる全国共通番号。どこに相談すべきか迷ったらまずここへ。契約トラブル全般に対応",
  },
  {
    name: "警察相談専用電話",
    tel: "#9110",
    note: "執拗な取り立て・脅迫めいた連絡・勤務先や家族への連絡をほのめかされるなど、身の危険や犯罪被害のおそれがある場合",
  },
  {
    name: "財務局 多重債務相談窓口",
    tel: "0570-016811",
    note: "借金・多重債務に関する相談、無登録業者・ヤミ金融に関する情報提供",
  },
  {
    name: "日本貸金業協会 貸金業相談・紛争解決センター",
    tel: "0570-051051",
    note: "借金・ヤミ金融に関する相談",
  },
  {
    name: "法テラス（日本司法支援センター）サポートダイヤル",
    tel: "0570-078374",
    note: "弁護士・司法書士への相談を検討する場合の案内窓口。収入等の要件を満たせば無料法律相談・費用立替（民事法律扶助）の制度がある",
  },
];

const faqs = [
  {
    question: "支払いが遅れそうです。先に業者へ連絡すべきですか？",
    answer:
      "業者への連絡を完全に無視し続けることはおすすめできませんが、支払時期や分割などの条件について業者と直接約束をする前に、まず公的窓口へ相談することをおすすめします。先払い買取は、実態が貸付けと判断される場合には貸金業法上の無登録営業にあたりうると金融庁・消費者庁・警察庁などが連名で注意喚起している取引であり、どう対応すべきかは契約内容と取引の実態によって異なるためです。消費者ホットライン（188）や法テラス（0570-078374）に、やり取りの記録を手元に置いた状態で相談してください。",
  },
  {
    question: "先払い買取の違約金や返還金は、払わなくてもよいのでしょうか？",
    answer:
      "「払わなくてよい」と一律に断定することはできません。支払義務の有無は、個別の契約内容と取引の実態によって判断されるためです。ただし、警察庁・金融庁・消費者庁・財務局・日本貸金業協会の連名注意喚起は、先払い買取について、実態が貸付けと判断される場合には貸金業法上の無登録営業（10年以下の懲役もしくは3,000万円以下の罰金またはその併科の対象）にあたりうると指摘しています。無登録の貸金業による貸付と評価されるかどうかで取り得る対応が変わるため、請求されたまま支払う前に、消費生活センター（188）や債務問題を扱う弁護士・司法書士に相談して判断を仰いでください。",
  },
  {
    question:
      "別の先払い買取や後払い現金化を使って、今回の支払いに充てようと思っています。",
    answer:
      "やめてください。別の現金化で穴埋めをすると、受け取った金額より多くを返す取引が二重三重に積み重なり、消費者庁が注意喚起する「かえって生活が悪化し、多重債務に陥る危険性」の典型的なパターンに陥ります。支払いが苦しい根本の状況は解決せず、次の支払日にはさらに大きな金額が必要になります。現金化を重ねる前に、消費者ホットライン（188）や財務局の多重債務相談窓口（0570-016811）、法テラス（0570-078374）で、債務整理を含めた選択肢を相談してください。",
  },
  {
    question:
      "シープチケットなど、特定のサービスへの支払いが遅れそうです。どこに相談すればよいですか？",
    answer:
      "当サイトは、特定の業者・サービスが違法かどうかの判断は行いません（個別の実態によって判断されるべきものだからです）。ただ、サービス名を問わず、先払い買取型の取引で支払いに困った場合に相談できる窓口は共通です。消費者ホットライン（188）、警察相談専用電話（#9110・脅迫めいた連絡がある場合）、財務局 多重債務相談窓口（0570-016811）、日本貸金業協会（0570-051051）、法テラス（0570-078374）が利用できます。個別サービスの仕組みについては、当サイトの解説記事も参考にしてください。",
  },
  {
    question: "司法書士と弁護士のどちらに相談すべきですか？",
    answer:
      "一般に、ヤミ金融対応や債務整理を取り扱う弁護士・司法書士のどちらでも相談先になり得ます。両者は取り扱い範囲に違いがあるため、請求額や事案の内容によって適した相談先が変わることがあります。どちらに頼むべきか迷う場合は、法テラスのサポートダイヤル（0570-078374）や消費者ホットライン（188）で状況を伝えると、適切な相談先の案内を受けられます。なお、当サイトは情報メディアであり法律相談は受けられません。また、特定の事務所を紹介・推薦することもありません。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "先払い買取が支払えない・遅れそうなときの対処法｜相談できる窓口一覧【2026年】",
  description:
    "先払い買取の支払いが遅れそうでも、放置や別の現金化での穴埋めは危険です。188・#9110・財務局・貸金業協会・法テラスの窓口一覧と、司法書士・弁護士に相談する価値を一次情報で解説。",
  datePublished: "2026-08-07",
  dateModified: "2026-08-07",
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
      "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-shiharaenai/",
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
      name: "先払い買取が支払えない・遅れそうなときの対処法",
      item: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-shiharaenai/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SakibaraiKaitoriShiharaenaiPage() {
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
          { label: "先払い買取が支払えない・遅れそうなときの対処法" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            注意喚起・資金調達ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            先払い買取が支払えない・
            <br className="hidden md:block" />
            遅れそうなときの対処法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            先払い買取の支払期日に間に合わない、支払えそうにない——そんなときに一人で抱え込む必要はありません。放置や別の現金化での穴埋めがなぜ危険なのか、どこに相談すればよいのかを、金融庁・消費者庁・警察庁など公的機関の一次情報にもとづいて解説します。
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
                <strong className="text-text-main">放置しない</strong>
                こと。連絡を無視して先送りするほど、請求額の増額主張や督促への対応負担が大きくなりがちです
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                <strong className="text-text-main">
                  別の先払い買取・後払い現金化で穴埋めしない
                </strong>
                こと。受け取った額より多くを返す取引を重ねる「多重化」の典型パターンで、状況は確実に悪化します
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                <strong className="text-text-main">
                  支払う前に、早めに公的窓口・専門家へ相談する
                </strong>
                こと。消費者ホットライン（188）・法テラス（0570-078374）など無料で使える窓口があります。支払義務の有無は個別の実態によるため、自己判断で決めつけないでください
              </span>
            </li>
          </ul>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-8 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#what-happens" className="hover:underline">
                1. 支払えない・遅れると、まず何が起こるか
              </a>
            </li>
            <li>
              <a href="#dont" className="hover:underline">
                2. 絶対にやってはいけないこと
              </a>
            </li>
            <li>
              <a href="#expert" className="hover:underline">
                3. 司法書士・弁護士に相談する価値
              </a>
            </li>
            <li>
              <a href="#consult" className="hover:underline">
                4. 相談できる窓口一覧
              </a>
            </li>
            <li>
              <a href="#cancel" className="hover:underline">
                5. 支払いとは別に知っておくべきこと｜キャンセルの扱い
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                6. よくある質問
              </a>
            </li>
            <li>
              <a href="#alternatives" className="hover:underline">
                7. 正規の資金調達への代替｜現金化を繰り返さないために
              </a>
            </li>
          </ol>
        </nav>

        {/* 広告・調査時点の開示 */}
        <p className="mb-10 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-500">
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。なお、当サイトが先払い買取現金化の利用を推奨することはありません。また、本記事は一般的な情報提供であり、個別の事案に対する法的助言ではありません。具体的な対応は必ず公的窓口や弁護士・司法書士にご相談ください。掲載内容は調査時点のものであり、最新情報は各公式サイト・公的機関の発表をご確認ください。
        </p>

        {/* ── まず何が起こるか ─── */}
        <section id="what-happens" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            支払えない・遅れると、まず何が起こるか
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            先払い買取（現金化）は、業者が「買取代金」を先に振り込み、利用者が商品を発送しなかった場合に、契約解除の違約金（キャンセル料）名目で、受け取った代金の返還に加えて金銭を請求される仕組みです。一般論として、支払いができない・遅れると、次のようなことが起こり得ます。
          </p>
          <div className="mb-6 space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-text-main">業者からの連絡・督促</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                電話やメッセージで支払いを求める連絡が来ることがあります。警察庁等の注意喚起資料は、先払い買取の取引で提供した個人情報が悪用されるなどのトラブル・犯罪被害の危険性を指摘しており、執拗な取り立てや、勤務先・家族への連絡をほのめかすような脅迫めいた連絡に発展した場合は、警察相談専用電話（#9110）への相談対象です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-text-main">
                契約にもとづくと称する請求・増額の主張
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                契約時に案内された違約金や、遅延損害金などの名目で、時間の経過とともに請求額の増額を主張されることがあります。ただし、主張される金額の支払義務が法的に認められるかどうかは、契約内容と取引の実態によって判断される別の問題です。だからこそ、自己判断で支払う前に相談することが重要になります。
              </p>
            </div>
          </div>
          <p className="leading-relaxed text-text-light">
            そもそもの仕組み（3ステップの流れ・危険な業者のサイン）は、メイン記事の
            <Link
              href="/articles/sakibarai-kaitori/"
              className="font-medium text-primary underline"
            >
              先払い買取とは？違法性と危険な仕組み
            </Link>
            で解説しています。また、シープチケットなど特定のサービス名で検索してこの記事にたどり着いた方は、
            <Link
              href="/articles/sheep-ticket/"
              className="font-medium text-primary underline"
            >
              シープチケットとは？「先払い買取」の仕組みと注意点
            </Link>
            もあわせて参考にしてください（当サイトが特定の業者を違法と断定するものではありません）。
          </p>
        </section>

        {/* ── やってはいけないこと ─── */}
        <section id="dont" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            絶対にやってはいけないこと
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            支払いに困ったとき、追い詰められた状態で選びがちな次の3つの対応は、いずれも状況を悪化させるおそれがあります。
          </p>
          <div className="space-y-6">
            {dontItems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 leading-relaxed text-text-light">
            とくに「別の現金化での穴埋め」は要注意です。後払い（ツケ払い）現金化も、先払い買取と同様に金融庁・消費者庁が注意喚起している取引です。仕組みとリスクは
            <Link
              href="/articles/atobarai-genkinka/"
              className="font-medium text-primary underline"
            >
              後払い現金化・ツケ払い現金化とは？違法性と危険な仕組み
            </Link>
            で解説しています。
          </p>
        </section>

        {/* ── 司法書士・弁護士に相談する価値 ─── */}
        <section id="expert" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            司法書士・弁護士に相談する価値
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            「先払い買取 司法書士」「先払い買取 弁護士」と検索する方が多いのには理由があります。警察庁・金融庁・消費者庁・財務局・日本貸金業協会の連名注意喚起資料は、先払い買取について、
            <strong className="text-text-main">
              実態が貸付けと判断される場合、貸金業法上の無登録営業（10年以下の懲役もしくは3,000万円以下の罰金またはその併科の対象）にあたりうる
            </strong>
            と指摘しています。つまり、取引の実態によっては「商品の売買契約」という形式どおりには扱われない可能性がある取引だということです。
          </p>
          <div className="mb-6 rounded-lg bg-section-bg p-6">
            <p className="text-sm leading-relaxed text-text-light">
              取引の実態が無登録の貸金業による貸付と評価されるかどうかで、契約の有効性や支払義務についての法的な評価は変わり得ます。これは
              <strong className="text-text-main">
                契約書の形式ではなく個別の実態にもとづいて専門家が判断すべき問題
              </strong>
              であり、当サイトが「この契約は無効」「払わなくてよい」と断定することはできません。だからこそ、請求されたまま支払う前に、債務問題・ヤミ金融対応を扱う司法書士・弁護士に取引の記録を見せて、
              <strong className="text-text-main">
                契約の有効性や支払義務について専門家の判断を仰ぐ価値があります
              </strong>
              。
            </p>
          </div>
          <p className="mb-4 leading-relaxed text-text-light">
            相談の際は、業者とのやり取り（メッセージのスクリーンショット）・振込記録・申し込み時の契約内容など、取引の実態がわかる記録を消さずに手元に揃えておくと、経緯の説明がスムーズになります。
          </p>
          <p className="leading-relaxed text-text-light">
            なお、当サイトはファクタリング・資金調達の情報メディアであり、
            <strong className="text-text-main">
              法律相談を受けることはできません
            </strong>
            。個別の判断は、次に挙げる公的窓口や弁護士・司法書士へ相談してください。費用が不安な場合も、法テラス（日本司法支援センター）に収入等の要件を満たす方向けの無料法律相談・費用立替（民事法律扶助）の制度があります。
          </p>
        </section>

        {/* ── 相談窓口一覧 ─── */}
        <section id="consult" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            相談できる窓口一覧
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「どこに相談すればいいかわからない」場合は、まず消費者ホットライン（188）で構いません。状況に応じて、次の窓口を使い分けてください。いずれも公的機関・公的団体の窓口です。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">
                    相談窓口
                  </th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">
                    電話番号
                  </th>
                  <th className="px-4 py-3 font-semibold">こんなときに</th>
                </tr>
              </thead>
              <tbody>
                {consultWindows.map((w) => (
                  <tr key={w.name} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                      {w.name}
                    </td>
                    <td className="px-4 py-3 font-bold text-primary whitespace-nowrap">
                      {w.tel}
                    </td>
                    <td className="px-4 py-3 text-text-light">{w.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※脅迫めいた連絡など緊急の場合は110番です。相談時は、業者とのやり取りのスクリーンショット・振込記録・契約内容を手元に用意しておくとスムーズです。
          </p>
        </section>

        {/* ── キャンセルの扱い ─── */}
        <section id="cancel" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            支払いとは別に知っておくべきこと｜キャンセルの扱い
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            先払い買取の「支払えない」問題は、多くの場合、契約解除（キャンセル）にともなう違約金の請求と一体で発生します。なぜキャンセル料の請求がスキームに組み込まれているのか、キャンセル料を請求されて払えないときに支払う前にやるべきこと（相談先の使い分け・証拠の保全）は、別記事で詳しく解説しています。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="font-bold text-primary">
              <Link
                href="/articles/sakibarai-kaitori-cancel/"
                className="underline"
              >
                先払い買取のキャンセル料が払えない場合の対処法
              </Link>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-text-light">
              キャンセル料（違約金）を請求されて困っている場合の対処に絞って、相談先の使い分けと証拠の残し方を解説しています。「支払いが遅れそう」という段階の方も、請求の仕組みを知っておくうえで参考になります。
            </p>
          </div>
        </section>

        {/* ── 一次情報ソース ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-border bg-section-bg p-6">
            <p className="mb-3 font-bold text-text-main">
              この記事の一次情報（公的機関の公表資料）
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-text-light">
              <li>
                ・警察庁・金融庁・消費者庁・財務局・日本貸金業協会 連名注意喚起資料「いわゆる『先払い買取』現金化に要注意！」
                <a
                  href="https://www.npa.go.jp/bureau/safetylife/keizai/sakibaraikaitori.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 break-all text-primary underline"
                >
                  npa.go.jp（PDF）
                </a>
              </li>
            </ul>
            <p className="mt-3 text-xs text-text-light">
              2026年8月にリンク先への到達を確認。制度・窓口の内容は変更される場合があるため、最新情報は各機関の公式サイトをご確認ください。本記事は一般的な情報提供であり、個別の事案に対する法的助言ではありません。当サイトは情報メディアであり、法律相談は受けられません。
            </p>
          </div>
        </section>

        {/* ── 関連ツール・データ ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">
              事業者の方へ｜正規の資金調達に使えるツール・データ
            </p>
            <ul className="space-y-2 text-sm text-text-light">
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
                <Link
                  href="/diagnosis/"
                  className="font-medium text-primary underline"
                >
                  無料診断（7つの質問・30秒）
                </Link>
                ｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。
              </li>
              <li>
                <Link
                  href="/simulator/"
                  className="font-medium text-primary underline"
                >
                  手数料シミュレーター
                </Link>
                ｜売掛金額から手数料・入金額の目安を計算できます。
              </li>
              <li>
                <Link
                  href="/ranking/"
                  className="font-medium text-primary underline"
                >
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

        {/* ── 正規の資金調達への代替 ─── */}
        <section id="alternatives" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            正規の資金調達への代替｜現金化を繰り返さないために
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            今回の支払いを乗り切ることと同じくらい重要なのが、
            <strong className="text-text-main">
              先払い買取のような現金化に頼らずに済む状態をつくる
            </strong>
            ことです。事業を営んでいる方（法人・個人事業主・フリーランス）で、取引先に発行した請求書（売掛金）があるなら、それを売却して資金化する正規のファクタリング（民法にもとづく債権譲渡）が使えます。借入ではないため負債にならず、最短即日の資金化も可能です。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                <Link href="/ranking/" className="underline">
                  おすすめファクタリング会社ランキング
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                手数料を公式確認した会社の中から、編集部が厳選した順位で比較できます。相見積もりで条件を比べるのが基本です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">
                <Link href="/diagnosis/" className="underline">
                  無料診断（7つの質問・30秒）
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                事業形態・金額・急ぎ度などの質問に答えるだけで、あなたの状況に合う1社を絞り込めます。
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-text-light">
            ※個人の生活資金にはファクタリングは使えません（事業の売掛債権が対象のため）。個人の方は、消費者ホットライン（188）や市区町村の相談窓口で、公的な支援制度や債務整理を含めた選択肢を確認してください。
          </p>
        </section>

        {/* ── 関連記事 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連記事
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/articles/sakibarai-kaitori/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                先払い買取とは？違法性と危険な仕組み
              </p>
              <p className="mt-1 text-sm text-text-light">
                スキームの3ステップ・危険サイン・相談窓口を一次情報で解説したメイン記事
              </p>
            </Link>
            <Link
              href="/articles/sakibarai-kaitori-cancel/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                先払い買取のキャンセル料が払えない場合の対処法
              </p>
              <p className="mt-1 text-sm text-text-light">
                キャンセル料（違約金）を請求されて困っている場合の相談先と証拠保全
              </p>
            </Link>
            <Link
              href="/articles/sakibarai-kaitori-gyosha/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                先払い買取に「優良・おすすめ業者」は存在するか
              </p>
              <p className="mt-1 text-sm text-text-light">
                「優良」表示ではスキームのリスクが解消されない理由
              </p>
            </Link>
            <Link
              href="/articles/atobarai-genkinka/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                後払い現金化・ツケ払い現金化とは？違法性と危険な仕組み
              </p>
              <p className="mt-1 text-sm text-text-light">
                穴埋めに使ってはいけない「後払い型」現金化の仕組みとリスク
              </p>
            </Link>
            <Link
              href="/articles/sheep-ticket/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">
                シープチケット（SHEEP TICKET）とは？
              </p>
              <p className="mt-1 text-sm text-text-light">
                口コミ・評判の前に知っておきたい「先払い買取」の仕組みと注意点
              </p>
            </Link>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            事業の売掛金があるなら、危険な現金化に頼る必要はありません
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            事業で発行した請求書は、正規のファクタリングで最短即日に資金化できます。手数料を公式確認した15社から、あなたの状況に合う1社を比較して選びましょう。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">
            正規のファクタリング15社を比較する
          </Link>
        </section>
      </div>
    </>
  );
}
