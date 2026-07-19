import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "先払い買取のキャンセル料が払えない場合の対処法｜支払う前に相談すべき公的窓口・法テラス",
  description:
    "先払い買取のキャンセル料（違約金）が払えない・請求されて困っている場合の対処法を解説。なぜ高額な違約金を請求されるのか、実態がヤミ金融の貸付と評価される場合の法的対応の余地、消費者ホットライン188・#9110・法テラス・弁護士/司法書士の使い分け、証拠の残し方まで、金融庁・消費者庁など公的機関の一次情報にもとづいて説明します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-cancel/",
  },
  openGraph: {
    title:
      "先払い買取のキャンセル料が払えない場合の対処法｜支払う前に相談すべき公的窓口・法テラス",
    description:
      "先払い買取のキャンセル料が払えないときは、一人で抱え込まず支払う前に相談を。188・#9110・法テラス・弁護士/司法書士の使い分けと証拠保全を一次情報で解説。",
    url: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-cancel/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const consultWindows = [
  {
    name: "消費者ホットライン",
    tel: "188（いやや）",
    note: "最寄りの消費生活センターにつながる全国共通番号。まずどこに相談すべきか迷ったらここへ。契約トラブル全般に対応",
  },
  {
    name: "警察相談専用電話",
    tel: "#9110",
    note: "執拗な取り立て・脅迫めいた連絡・勤務先や家族への連絡をほのめかされるなど、身の危険や犯罪被害のおそれがある場合",
  },
  {
    name: "金融庁 金融サービス利用者相談室",
    tel: "0570-016811",
    note: "無登録業者・ヤミ金融に関する情報提供・相談（平日10:00〜17:00）",
  },
  {
    name: "日本貸金業協会 貸金業相談・紛争解決センター",
    tel: "0570-051051",
    note: "借金・ヤミ金融に関する相談",
  },
  {
    name: "法テラス（日本司法支援センター）サポートダイヤル",
    tel: "0570-078374",
    note: "弁護士・司法書士への相談を検討する場合の案内窓口（平日9:00〜21:00、土曜9:00〜17:00）。収入等の要件を満たせば無料法律相談・費用立替（民事法律扶助）の制度がある",
  },
];

const evidenceItems = [
  "業者とのやり取り（LINE・メール・SMS・アプリ内メッセージ）のスクリーンショット。督促のメッセージも消さずに残す",
  "振込記録（受け取った「買取代金」の入金履歴、支払ってしまった金銭があればその記録）",
  "申し込み時の画面・契約内容・利用規約（キャンセル料の金額と支払期限が書かれた部分）",
  "業者の名称・サイトURL・電話番号・振込先口座の名義",
  "商品画像のやり取り（業者側から画像が提供された場合はその経緯がわかるもの）",
];

const faqs = [
  {
    question: "キャンセル料は払わなくてもよいのでしょうか？",
    answer:
      "「払わなくてよい」と一律に断定することはできません。支払義務の有無は、個別の契約内容と取引の実態によって判断されるためです。ただし、金融庁は、商品売買を装っていても経済的な実態が貸付けであり業として行う場合には貸金業に該当するおそれがあると注意喚起しており、無登録の貸金業（ヤミ金融）による貸付と評価される場合には法的な対応の余地があります。重要なのは、請求されたまま支払う前に、消費生活センター（188）や法テラス、債務問題を扱う弁護士・司法書士に相談することです。",
  },
  {
    question: "お金がなくて弁護士に相談する費用も払えません。どうすればいいですか？",
    answer:
      "費用がなくても相談できる窓口があります。消費者ホットライン（188）経由の消費生活センターの相談は無料です。また、法テラス（日本司法支援センター）には、収入・資産が一定の基準以下の方を対象に、弁護士・司法書士による無料法律相談（同一問題につき3回まで）や弁護士等費用の立替を行う民事法律扶助の制度があります（法テラス公式サイトで2026年7月確認）。まずはサポートダイヤル（0570-078374）または最寄りの法テラス事務所に問い合わせてみてください。",
  },
  {
    question: "業者から「勤務先や家族に連絡する」と言われています。",
    answer:
      "身の危険や嫌がらせのおそれを感じる連絡を受けている場合は、警察相談専用電話（#9110）に相談してください。緊急の場合は110番です。警察庁等の注意喚起資料は、先払い買取の取引で提供した個人情報が悪用されるなどのトラブル・犯罪被害の危険性を指摘しています。脅迫めいたメッセージは重要な証拠になるため、削除せずスクリーンショットで保全した上で相談しましょう。",
  },
  {
    question: "業者から分割払いを提案されました。応じたほうがいいですか？",
    answer:
      "応じる前に、まず相談することをおすすめします。分割払いに応じると支払いの意思を示したことになり、また取引の実態が無登録貸金業の貸付と評価され得るケースでは、支払いを続けること自体が適切でない可能性もあるためです。どう対応すべきかは個別の事情によるため、消費生活センター（188）や弁護士・司法書士に、契約内容とやり取りの記録を見せた上で判断を仰いでください。",
  },
  {
    question: "弁護士と司法書士のどちらに相談すべきですか？",
    answer:
      "一般に、ヤミ金融対応や債務整理を取り扱う弁護士・司法書士のどちらでも相談先になり得ます。司法書士（認定司法書士）は1件140万円以下の民事事件の代理など取り扱い範囲に制限があるため、請求額が大きい場合や訴訟に発展しそうな場合は弁護士が選択肢になります。どちらに頼むべきか迷う場合は、法テラスのサポートダイヤル（0570-078374）や消費生活センター（188）で状況を伝えると、適切な相談先の案内を受けられます。当サイトが特定の事務所を紹介・推薦することはありません。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://hyogo-shihoushoshi.jp/og-image.png",
  headline:
    "先払い買取のキャンセル料が払えない場合の対処法｜支払う前に相談すべき公的窓口・法テラス",
  description:
    "先払い買取のキャンセル料が払えないときは、一人で抱え込まず支払う前に相談を。188・#9110・法テラス・弁護士/司法書士の使い分けと証拠保全を一次情報で解説。",
  datePublished: "2026-07-19",
  dateModified: "2026-07-19",
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
    "@id": "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-cancel/",
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
      name: "先払い買取のキャンセル料が払えない場合の対処法",
      item: "https://hyogo-shihoushoshi.jp/articles/sakibarai-kaitori-cancel/",
    },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function SakibaraiKaitoriCancelPage() {
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
          { label: "先払い買取のキャンセル料が払えない場合の対処法" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            注意喚起・資金調達ガイド
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            先払い買取のキャンセル料が
            <br className="hidden md:block" />
            払えない場合の対処法
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            先払い買取の違約金（キャンセル料）を請求されて払えない——そんなときに一人で抱え込む必要はありません。なぜ高額な請求が来るのか、どこに相談すればよいのか、支払う前にやるべきことを、金融庁・消費者庁など公的機関の一次情報にもとづいて解説します。
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
                <strong className="text-text-main">一人で抱え込まず、支払う前に相談する</strong>
                こと。消費者ホットライン（188）・警察相談専用電話（#9110）・法テラスなど、無料で使える公的窓口があります
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                金融庁は、先払い買取の実態が貸付けなら<strong className="text-text-main">無登録貸金業（ヤミ金融）に該当するおそれ</strong>があると注意喚起しています。その場合、キャンセル料の請求に対して<strong className="text-text-main">法的な対応の余地</strong>があります（個別の実態によるため、断定はできません）
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-secondary">&#10003;</span>
              <span>
                業者とのやり取り・振込記録などの<strong className="text-text-main">証拠は消さずに保全</strong>し、相談時に提示できるようにしておくことが重要です
              </span>
            </li>
          </ul>
        </div>

        {/* ── 目次 ─── */}
        <nav className="mb-8 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#why" className="hover:underline">
                1. なぜ「キャンセル料を払え」と言われるのか
              </a>
            </li>
            <li>
              <a href="#legal" className="hover:underline">
                2. 実態がヤミ金融の貸付なら、法的対応の余地がある
              </a>
            </li>
            <li>
              <a href="#consult" className="hover:underline">
                3. 相談先の使い分け｜公的窓口・法テラス・弁護士/司法書士
              </a>
            </li>
            <li>
              <a href="#ignore" className="hover:underline">
                4. 放置した場合に起こりうること
              </a>
            </li>
            <li>
              <a href="#evidence" className="hover:underline">
                5. 相談前にやっておくこと｜証拠の保全
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
          ※本ページには広告（アフィリエイトリンク）が含まれます。当サイトは一部の事業者と提携し、リンク経由のお申し込みで報酬を受け取る場合があります。ただし、報酬の有無や金額が評価・順位に影響することはなく、各社の公式・公開情報にもとづいて公平に解説しています。なお、当サイトが先払い買取現金化の利用を推奨することはありません。また、本記事は一般的な情報提供であり、個別の事案に対する法的助言ではありません。具体的な対応は必ず公的窓口や弁護士・司法書士にご相談ください。掲載内容は調査時点のものであり、最新情報は各公式サイト・公的機関の発表をご確認ください。
        </p>

        {/* ── なぜ請求されるのか ─── */}
        <section id="why" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            なぜ「キャンセル料を払え」と言われるのか
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            先払い買取（現金化）は、業者が商品の到着を待たずに「買取代金」を先に振り込み、商品を発送しなかった場合に
            <strong className="text-text-main">
              違約金（キャンセル料）名目で、受け取った代金の返還に加えてより高額な金銭を請求する
            </strong>
            仕組みです。警察庁・金融庁・消費者庁・財務局・日本貸金業協会の連名資料によれば、手元にない商品（ネット上の画像）でも申し込みが成立し、契約の時点でキャンセル料の金額と支払時期が案内されるのが典型で、
            <strong className="text-text-main">最初から契約解除（キャンセル）が前提</strong>
            の取引です。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            つまり「キャンセル料を払え」という請求は、偶然のトラブルではなく、
            <strong className="text-text-main">スキームに最初から組み込まれた回収</strong>
            である場合が多いということです。受け取ったお金より多くを返す構造は、売買ではなく借金の利息と同じ構造だと公的機関が指摘しています。
          </p>
          <p className="leading-relaxed text-text-light">
            仕組みの全体像（3ステップの流れ・危険な業者のサイン・通常の買取との違い）は、メイン記事の
            <Link
              href="/articles/sakibarai-kaitori/"
              className="font-medium text-primary underline"
            >
              先払い買取とは？違法性と危険な仕組み
            </Link>
            で詳しく解説しています。この記事では「すでに請求されて困っている」場合の対処に絞って説明します。
          </p>
        </section>

        {/* ── 法的対応の余地 ─── */}
        <section id="legal" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            実態がヤミ金融の貸付なら、法的対応の余地がある
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            金融庁は先払い買取現金化について、商品売買を装っていても
            <strong className="text-text-main">経済的な実態が貸付け</strong>
            であり業として行う場合には貸金業に該当するおそれがある（個別具体的な実態を踏まえて判断する必要がある）と注意喚起しています。貸金業登録を受けずに貸金業を営む者は違法なヤミ金融業者であり、
            <strong className="text-text-main">
              10年以下の懲役もしくは3,000万円以下の罰金またはその併科（貸金業法第47条第2号）
            </strong>
            の対象です（金融庁注意喚起ページ・2026年7月確認）。
          </p>
          <div className="mb-6 rounded-lg bg-section-bg p-6">
            <p className="text-sm leading-relaxed text-text-light">
              取引の実態が無登録貸金業者（ヤミ金融）による貸付と評価される場合には、請求されている「キャンセル料」についても
              <strong className="text-text-main">法的な対応の余地があります</strong>
              。ただし、支払義務の有無や取り得る対応は契約内容・取引経緯など個別の事情によって異なるため、当サイトが「払わなくてよい」と断定することはできません。だからこそ、
              <strong className="text-text-main">請求されたまま支払う前に</strong>
              、消費生活センターや債務問題を扱う弁護士・司法書士に取引の記録を見せて判断を仰ぐことが重要です。
            </p>
          </div>
          <p className="leading-relaxed text-text-light">
            なお「古物商許可取得済み」の表示は中古品売買の営業許可を意味するにすぎず、貸付行為の適法性を保証するものではありません。許可表示があることは、キャンセル料を支払うべき理由にはなりません。
          </p>
        </section>

        {/* ── 相談先の使い分け ─── */}
        <section id="consult" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            相談先の使い分け｜公的窓口・法テラス・弁護士/司法書士
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            「どこに相談すればいいかわからない」場合は、まず消費者ホットライン（188）で構いません。状況に応じて、次の窓口を使い分けてください。いずれも公的機関・公的団体の窓口です（2026年7月確認）。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">相談窓口</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">電話番号</th>
                  <th className="px-4 py-3 font-semibold">こんなときに</th>
                </tr>
              </thead>
              <tbody>
                {consultWindows.map((w) => (
                  <tr key={w.name} className="border-t border-border">
                    <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">
                      {w.name}
                    </td>
                    <td className="px-4 py-3 font-bold text-primary whitespace-nowrap">{w.tel}</td>
                    <td className="px-4 py-3 text-text-light">{w.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-lg border border-border bg-white p-6">
            <h3 className="font-bold text-primary">
              費用が不安なら｜法テラスの民事法律扶助
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-light">
              法テラス（正式名称: 日本司法支援センター）は、国が設立した法的トラブル解決の総合案内所です。収入・資産が一定の基準以下の方を対象に、
              <strong className="text-text-main">
                弁護士・司法書士による無料法律相談（同一問題につき3回まで・1回30分程度）や、弁護士等費用の立替を行う民事法律扶助の制度
              </strong>
              があります（法テラス公式サイトで2026年7月確認）。「お金がないから弁護士に相談できない」とあきらめる前に、サポートダイヤル（0570-078374）へ問い合わせてみてください。
            </p>
          </div>
          <div className="mt-4 rounded-lg border border-border bg-white p-6">
            <h3 className="font-bold text-primary">
              弁護士・司法書士の探し方
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-light">
              直接専門家に相談する場合は、一般に
              <strong className="text-text-main">
                「ヤミ金融対応」「債務整理」を取り扱っている弁護士・司法書士事務所
              </strong>
              が相談先になります。各地の弁護士会・司法書士会の法律相談窓口や、法テラスのサポートダイヤルから案内を受ける方法もあります。なお、当サイトが特定の事務所を紹介・推薦することはありません。また、相談・依頼の費用は事務所や事案によって異なるため、依頼前に必ず見積もりと費用の説明を受けてください。
            </p>
          </div>
        </section>

        {/* ── 放置した場合 ─── */}
        <section id="ignore" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            放置した場合に起こりうること
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            「怖いから見なかったことにする」のは、おすすめできません。一般論として、請求を放置した場合には次のようなことが起こり得ます。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-text-main">督促・連絡が続く可能性</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                電話・メッセージによる支払いの督促が継続することがあります。警察庁等の注意喚起資料は、先払い買取の取引で提供した個人情報が悪用されるなどの危険性を指摘しており、執拗な取り立てや脅迫めいた連絡に発展した場合は、放置せず警察相談専用電話（#9110）へ相談してください。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-text-main">請求額が膨らむと主張される可能性</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                遅延損害金などの名目で、時間の経過とともに請求額の増額を主張されることがあります。主張される金額が法的に正当かどうかは別問題ですが、対応を先送りするほど交渉・相談の負担は大きくなりがちです。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-text-main">
                「放置」ではなく「相談した上で対応を決める」へ
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                重要なのは、業者への対応（支払う・支払わない・連絡を絶つ）を自己判断で決めるのではなく、
                <strong className="text-text-main">
                  公的窓口や弁護士・司法書士に相談した上で方針を決める
                </strong>
                ことです。相談の結果として「業者への連絡・支払いをどうするか」の適切な進め方が見えてきます。相談自体は188や法テラスなど無料でできる窓口があります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 証拠保全 ─── */}
        <section id="evidence" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            相談前にやっておくこと｜証拠の保全
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            相談を有利に、スムーズに進めるために、取引に関する記録は
            <strong className="text-text-main">消さずにすべて残して</strong>
            ください。怖くなってメッセージやアプリを削除したくなるかもしれませんが、記録は取引の実態（実質的な貸付かどうか）を示す重要な証拠になります。
          </p>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-3 font-bold text-text-main">保全しておきたいもの</p>
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              {evidenceItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 font-bold text-secondary">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            ※スクリーンショットは、日時と相手（アカウント名）がわかる形で保存しておくと、相談時に経緯を説明しやすくなります。
          </p>
        </section>

        {/* ── 一次情報ソース ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-border bg-section-bg p-6">
            <p className="mb-3 font-bold text-text-main">この記事の一次情報（公的機関の公表資料）</p>
            <ul className="space-y-2 text-sm leading-relaxed text-text-light">
              <li>
                ・金融庁「違法な金融業者にご注意！（いわゆる「先払い買取」現金化）」
                <a href="https://www.fsa.go.jp/ordinary/chuui/cashing_chuui2.html" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">
                  fsa.go.jp
                </a>
              </li>
              <li>
                ・消費者庁「いわゆる「先払い買取現金化」に関する注意喚起」（2022年3月公表）
                <a href="https://www.caa.go.jp/policies/policy/consumer_policy/caution/caution_026" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">
                  caa.go.jp
                </a>
              </li>
              <li>
                ・警察庁・金融庁・消費者庁・財務局・日本貸金業協会 連名注意喚起資料「いわゆる『先払い買取』現金化に要注意！」
                <a href="https://www.npa.go.jp/bureau/safetylife/keizai/sakibaraikaitori.pdf" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">
                  npa.go.jp（PDF）
                </a>
              </li>
              <li>
                ・法テラス（日本司法支援センター）公式サイト（サポートダイヤル・民事法律扶助＝無料法律相談・弁護士等費用の立替）
                <a href="https://www.houterasu.or.jp/" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">
                  houterasu.or.jp
                </a>
              </li>
            </ul>
            <p className="mt-3 text-xs text-text-light">
              いずれも2026年7月19日にリンク先への到達を確認。制度・窓口の内容は変更される場合があるため、最新情報は各機関の公式サイトをご確認ください。本記事は一般的な情報提供であり、個別の事案に対する法的助言ではありません。
            </p>
          </div>
        </section>

        {/* ── 関連ツール・データ ─── */}
        <section className="mb-12">
          <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="mb-3 font-bold text-primary">事業者の方へ｜正規の資金調達に使えるツール・データ</p>
            <ul className="space-y-2 text-sm text-text-light">
              <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
              <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
              <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
              <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
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
              href="/articles/sakibarai-kaitori/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">先払い買取とは？違法性と危険な仕組み</p>
              <p className="mt-1 text-sm text-text-light">
                キャンセル料請求の元になっているスキームの全体像を一次情報で解説
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
              href="/articles/hoshu-maebarai/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">報酬の前払い・先払いサービスとは</p>
              <p className="mt-1 text-sm text-text-light">
                フリーランスの報酬を入金前に受け取る正規サービス（＝請求書買取）の仕組み
              </p>
            </Link>
            <Link
              href="/articles/tsunagi-shikin/"
              className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="font-bold text-primary">つなぎ資金の調達方法</p>
              <p className="mt-1 text-sm text-text-light">
                入金までの数週間を乗り切る選択肢をコスト・スピード別に比較
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
