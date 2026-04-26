import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリング会社の選び方完全ガイド｜10のチェックポイント",
  description:
    "ファクタリング会社の選び方を10のチェックポイントで徹底解説。手数料・入金スピード・信頼性・契約条件など、失敗しない会社選びのコツを紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/how-to-choose/",
  },
  openGraph: {
    title: "ファクタリング会社の選び方完全ガイド｜10のチェックポイント",
    description: "ファクタリング会社の選び方を10のチェックポイントで解説。失敗しない選び方のコツ。",
    url: "https://factoring-partner.pages.dev/articles/how-to-choose/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const checkpoints = [
  {
    number: 1,
    title: "手数料の範囲と透明性",
    description: "手数料は2社間で5%〜18%、3社間で1%〜9%が相場です。手数料以外の追加費用（事務手数料・登記費用・出張費用など）がないか確認しましょう。「手数料1%〜」などの最低手数料だけでなく、実際に提示される手数料の範囲を確認することが重要です。",
    checkItem: "見積もり時に総費用（手数料＋その他費用）を明示してくれるか",
  },
  {
    number: 2,
    title: "入金スピード",
    description: "最短即日〜2時間で入金される会社もあれば、数日かかる会社もあります。急ぎの資金需要がある場合は、即日入金に対応した会社を選びましょう。ただし「最短」は最も早いケースの表記であり、実際は書類提出のタイミングや審査状況によって変わります。",
    checkItem: "即日入金の実績があるか、申し込みから入金までの平均所要時間はどれくらいか",
  },
  {
    number: 3,
    title: "償還請求権の有無（ノンリコースか）",
    description: "必ずノンリコース（償還請求権なし）の会社を選びましょう。ウィズリコース（償還請求権あり）は売掛先の倒産時に買い戻し義務が発生し、実質的な貸金業に該当する可能性があります。",
    checkItem: "契約書に「償還請求権なし」が明記されているか",
  },
  {
    number: 4,
    title: "会社の信頼性・実績",
    description: "会社の設立年月日、所在地、代表者名、累計買取額、取引件数などを確認しましょう。実績が公開されている会社や、経済産業大臣認定を受けている会社は信頼性が高いです。",
    checkItem: "累計取引件数・買取額が公開されているか、所在地・代表者が明確か",
  },
  {
    number: 5,
    title: "審査通過率と柔軟性",
    description: "赤字決算・税金滞納・債務超過でも審査に通る会社もあります。審査通過率を公開している会社は、それだけ審査に自信がある証拠です。自社の状況に合った柔軟な審査を行ってくれる会社を選びましょう。",
    checkItem: "審査通過率が公開されているか、赤字・税金滞納でも対応可能か",
  },
  {
    number: 6,
    title: "対応金額の範囲",
    description: "少額（数万円〜）から対応している会社もあれば、最低100万円以上の会社もあります。自社の売掛金額に合った対応範囲の会社を選びましょう。逆に高額案件の場合は、上限金額にも注意が必要です。",
    checkItem: "最低買取額と上限買取額が自社のニーズに合っているか",
  },
  {
    number: 7,
    title: "必要書類の少なさ",
    description: "請求書と通帳のみで審査可能な会社もあれば、決算書・登記簿謄本・各種契約書まで求める会社もあります。書類が少ないほど手続きが早く、利用のハードルが下がります。",
    checkItem: "最低限必要な書類は何か、オンラインで提出可能か",
  },
  {
    number: 8,
    title: "オンライン対応の有無",
    description: "オンライン完結型の会社は来店不要で、全国どこからでも利用可能です。対面相談が必要な場合は、自社のエリアに拠点がある会社を選びましょう。",
    checkItem: "完全オンラインで完結するか、対面が必要な場合は拠点が近いか",
  },
  {
    number: 9,
    title: "個人事業主への対応",
    description: "法人のみ対応の会社と、個人事業主にも対応している会社があります。個人事業主の場合は、事前に対応可否を確認しましょう。フリーランス特化型の会社もあります。",
    checkItem: "個人事業主でも利用可能か、個人事業主向けの実績があるか",
  },
  {
    number: 10,
    title: "口コミ・評判の確認",
    description: "実際に利用した人の口コミや評判は重要な判断材料です。Google Maps、SNS、口コミサイトなどで評判を確認しましょう。ただし、サクラレビューには注意が必要です。",
    checkItem: "複数の情報源で口コミを確認したか、ネガティブな評判もチェックしたか",
  },
];

const dangerSigns = [
  "手数料が極端に安い（1%以下）または極端に高い（20%以上）",
  "会社の所在地が不明確、またはレンタルオフィスのみ",
  "契約書を交付しない、または契約前に全額入金を要求する",
  "償還請求権あり（ウィズリコース）の契約を提案する",
  "担保や保証人を要求する",
  "電話番号が携帯電話のみ、固定電話がない",
  "ホームページに会社概要・代表者情報が掲載されていない",
  "「審査なし」「100%通過」を謳っている",
];

const faqs = [
  {
    question: "ファクタリング会社は何社比較するべきですか？",
    answer:
      "最低3社以上の見積もりを比較することをおすすめします。同じ売掛金でも会社によって手数料が大きく異なることがあります。複数社に見積もりを依頼することで、相場感がつかめ、交渉材料にもなります。5社以上比較できるとより良い条件を引き出しやすくなります。",
  },
  {
    question: "初めての利用で特に注意すべき点は？",
    answer:
      "初めての利用で特に注意すべきは、①ノンリコース（償還請求権なし）であること②手数料の総額を事前に確認すること③契約書の内容を理解してからサインすること④急いでいても複数社を比較すること⑤不明点は契約前に全て質問すること、の5点です。",
  },
  {
    question: "手数料が安い会社を選べばよいですか？",
    answer:
      "手数料の安さだけで選ぶのは危険です。手数料が極端に安い会社は、追加費用がかかったり、ウィズリコース（償還請求権あり）であったり、サービスの質が低かったりする可能性があります。手数料・入金スピード・信頼性・サービス内容を総合的に判断しましょう。",
  },
  {
    question: "大手と中小、どちらのファクタリング会社がよいですか？",
    answer:
      "一概にどちらが良いとは言えません。大手は実績・信頼性・資金力に優れますが、審査が厳格な場合があります。中小は柔軟な対応が期待できますが、信頼性の見極めが重要です。大手と中小を両方含めて比較し、自社のニーズに合った会社を選びましょう。",
  },
  {
    question: "一度利用した会社を変えてもよいですか？",
    answer:
      "はい、いつでも別の会社に変更可能です。ファクタリングは1回ごとの取引であり、継続利用の義務はありません。ただし、同じ会社で継続利用すると手数料が下がる場合もあるため、条件を比較して判断しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ファクタリング会社の選び方完全ガイド｜10のチェックポイント",
  description: "ファクタリング会社の選び方を10のチェックポイントで解説。失敗しない選び方のコツ。",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー", url: "https://factoring-partner.pages.dev" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://factoring-partner.pages.dev/articles/how-to-choose/" },
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
    { "@type": "ListItem", position: 3, name: "ファクタリング会社の選び方", item: "https://factoring-partner.pages.dev/articles/how-to-choose/" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function HowToChoosePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム", href: "/articles/" }, { label: "ファクタリング会社の選び方" }]} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">知識ガイド</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング会社の選び方完全ガイド
            <br className="hidden md:block" />
            10のチェックポイント
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            ファクタリング会社選びで失敗しないための10のチェックポイントを徹底解説。手数料・信頼性・サービス内容を見極める方法をお伝えします。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#checkpoints" className="hover:underline">1. 10のチェックポイント</a></li>
            <li><a href="#danger" className="hover:underline">2. 悪徳業者の見分け方</a></li>
            <li><a href="#comparison" className="hover:underline">3. 複数社比較のコツ</a></li>
            <li><a href="#faq" className="hover:underline">4. よくある質問</a></li>
          </ol>
        </nav>

        <section id="checkpoints" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリング会社選びの10のチェックポイント</h2>
          <p className="mb-8 leading-relaxed text-text-light">以下の10項目をチェックすることで、信頼できるファクタリング会社を選べます。</p>
          <div className="space-y-6">
            {checkpoints.map((cp) => (
              <div key={cp.number} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{cp.number}</span>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{cp.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-light">{cp.description}</p>
                    <div className="mt-3 rounded-lg bg-section-bg p-3">
                      <p className="text-xs font-semibold text-text-main">チェック項目</p>
                      <p className="mt-1 text-sm text-primary">{cp.checkItem}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="danger" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">悪徳業者の見分け方</h2>
          <p className="mb-8 leading-relaxed text-text-light">以下の特徴がある会社は悪徳業者の可能性が高いため、利用を避けましょう。</p>
          <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-text-light">
              {dangerSigns.map((sign) => (
                <li key={sign} className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9888;</span>
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-sm text-text-light">
            上記に該当する場合は、ファクタリングを装った違法な貸金業者の可能性があります。被害に遭った場合は、金融庁の相談窓口や消費生活センターに相談しましょう。
          </p>
        </section>

        {/* ── おすすめの会社タイプ別 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ニーズ別のおすすめ会社タイプ</h2>
          <p className="mb-8 leading-relaxed text-text-light">自社のニーズに合ったタイプのファクタリング会社を選ぶことが重要です。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">即日入金を重視する場合</h3>
              <p className="text-sm leading-relaxed text-text-light">
                オンライン完結型の大手ファクタリング会社がおすすめです。ビートレーディング（最短2時間）、QuQuMo（最短2時間）、ラボル（最短60分）など、即日入金実績のある会社を選びましょう。午前中の申し込みがポイントです。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">手数料の安さを重視する場合</h3>
              <p className="text-sm leading-relaxed text-text-light">
                3社間ファクタリングに対応した会社を検討しましょう。日本中小企業金融サポート機構（1.5%〜）やQuQuMo（1%〜）は低手数料で知られています。売掛先の協力が得られる場合は3社間がコスト面で有利です。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">審査に不安がある場合</h3>
              <p className="text-sm leading-relaxed text-text-light">
                審査通過率が高い会社を選びましょう。アクセルファクター（審査通過率93%以上）は赤字決算・税金滞納でも柔軟に対応。自社の信用力よりも売掛先の信用力を重視する会社は審査が通りやすい傾向にあります。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">少額で利用したい場合</h3>
              <p className="text-sm leading-relaxed text-text-light">
                少額対応の会社を選びましょう。ラボル（1万円〜）は超少額から対応。アクセルファクター（30万円〜）も少額に対応しています。大手は最低数十万円〜の場合が多いため、事前に最低買取額を確認しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">高額案件を依頼したい場合</h3>
              <p className="text-sm leading-relaxed text-text-light">
                資金力のある大手ファクタリング会社を選びましょう。ビートレーディング（上限なし、累計買取額1,300億円超）は数千万円〜数億円規模の案件にも対応可能です。高額案件は手数料交渉の余地も大きいです。
              </p>
            </div>
          </div>
        </section>

        {/* ── 会社選びの失敗例 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">会社選びのよくある失敗例</h2>
          <p className="mb-8 leading-relaxed text-text-light">実際にファクタリング会社選びで失敗したケースから学びましょう。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">失敗例1：最低手数料だけで選んだ</h3>
              <p className="text-sm leading-relaxed text-text-light">
                「手数料1%〜」の表記に惹かれて契約したが、実際に提示された手数料は15%だった。最低手数料は最も条件が良いケースの手数料であり、実際の手数料は売掛金の条件によって大きく異なります。見積もり段階で実際の手数料を確認しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">失敗例2：追加費用を確認しなかった</h3>
              <p className="text-sm leading-relaxed text-text-light">
                手数料5%と聞いて契約したが、事務手数料3万円・登記費用5万円・振込手数料が別途かかり、実質的な手数料が8%を超えた。手数料以外の費用を含めた「総額」を事前に確認することが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">失敗例3：1社だけで決めた</h3>
              <p className="text-sm leading-relaxed text-text-light">
                急いでいたため1社だけで契約したが、後日他社に見積もりを取ったら3%も安かった。急いでいても最低3社は比較することで、数十万円のコスト差が生まれます。オンラインで見積もりを取れば1日で複数社を比較できます。
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <h3 className="mb-3 font-bold text-accent">失敗例4：契約書を読まなかった</h3>
              <p className="text-sm leading-relaxed text-text-light">
                契約書を読まずにサインしたところ、償還請求権あり（ウィズリコース）の契約だった。売掛先が支払い遅延した際に買い戻しを求められ、大きな負担が発生。契約書は必ず全文を読み、不明点は質問してから契約しましょう。
              </p>
            </div>
          </div>
        </section>

        <section id="comparison" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">複数社比較のコツ</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">同条件で見積もりを依頼する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                各社に同じ条件（売掛金額・売掛先・入金希望日など）で見積もりを依頼しましょう。条件が異なると正確な比較ができません。最低3社、できれば5社以上に見積もりを依頼するのが理想です。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">手数料の「総額」で比較する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                手数料率だけでなく、事務手数料・登記費用・振込手数料など全ての費用を含めた「総額」で比較しましょう。手数料率が低くても追加費用が多い会社は、トータルコストが高くなる場合があります。
              </p>
            </div>
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <h3 className="mb-3 font-bold text-secondary">対応の丁寧さも評価する</h3>
              <p className="text-sm leading-relaxed text-text-light">
                見積もり依頼時の対応スピードや説明の丁寧さも重要な判断材料です。質問に明確に答えてくれるか、見積もりの内訳を詳しく説明してくれるかをチェックしましょう。対応が雑な会社は契約後のトラブルリスクも高いです。
              </p>
            </div>
          </div>
        </section>

        {/* ── まとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まとめ：失敗しないファクタリング会社選びのフローチャート</h2>
          <p className="mb-4 leading-relaxed text-text-light">ファクタリング会社を選ぶ際は、以下の流れで進めましょう。</p>
          <div className="space-y-3">
            {[
              { step: "自社のニーズを明確にする", description: "必要な資金額・入金希望日・利用頻度・売掛先の情報を整理。2社間/3社間のどちらが良いかも検討。" },
              { step: "3社以上に見積もりを依頼", description: "大手・中小・オンライン特化型など、異なるタイプの会社を含めて見積もりを取る。同条件で比較することが重要。" },
              { step: "10のチェックポイントで評価", description: "手数料・入金スピード・ノンリコースか・会社の信頼性・審査通過率・対応金額・必要書類・オンライン対応・個人事業主対応・口コミを確認。" },
              { step: "悪徳業者の兆候がないか確認", description: "手数料が極端・契約書不交付・所在地不明確・償還請求権あり・担保要求・「審査なし」の謳い文句など危険信号をチェック。" },
              { step: "契約書を慎重に確認", description: "ノンリコースの明記・追加費用の有無・債権譲渡登記の扱い・契約期間の縛りなどを確認し、不明点は質問してから契約。" },
              { step: "入金確認・取引完了", description: "契約後の入金を確認。問題があれば早期に相談。良い会社であれば継続利用で手数料が下がる可能性も。" },
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

        {/* ── おすすめの会社 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">10のチェックポイントをクリアしたおすすめ会社</h2>
          <p className="mb-8 leading-relaxed text-text-light">上記のチェックポイントを全てクリアした信頼性の高いファクタリング会社を紹介します。</p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">ビートレーディング</h3>
              <p className="mt-1 text-sm text-text-light">累計買取額1,300億円超。手数料2%〜。最短2時間入金。ノンリコース。高額案件にも上限なし。法人・個人事業主対応。オンライン完結可能。業界最大手級の実績と信頼性。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">アクセルファクター</h3>
              <p className="mt-1 text-sm text-text-light">審査通過率93%以上。手数料2%〜。30万円〜対応。ノンリコース。即日入金。赤字決算・税金滞納でも柔軟対応。個人事業主OK。年間相談件数15,000件超。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">QuQuMo（ククモ）</h3>
              <p className="mt-1 text-sm text-text-light">手数料1%〜の低コスト。最短2時間入金。請求書と通帳のみで審査。ノンリコース。完全オンライン完結。法人・個人事業主対応。手続きの簡単さが魅力。</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="font-bold text-primary">日本中小企業金融サポート機構</h3>
              <p className="mt-1 text-sm text-text-light">非営利法人運営。経済産業大臣認定。手数料1.5%〜。ノンリコース。2社間・3社間対応。法人・個人事業主対応。非営利ならではの低手数料と信頼性。</p>
            </div>
          </div>
        </section>

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

        {/* ── 利用の流れ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">ファクタリング利用の一般的な流れ</h2>
          <p className="mb-8 leading-relaxed text-text-light">信頼できる会社を選んだ後の利用の流れを確認しておきましょう。</p>
          <div className="space-y-3">
            {[
              { step: "見積もり依頼・相談", description: "売掛金の金額・売掛先企業名・入金予定日を伝え、見積もりを依頼。電話・メール・Webフォームから申し込み可能。" },
              { step: "必要書類の提出", description: "請求書・通帳コピー（売掛先からの入金実績）・身分証明書・登記簿謄本などを提出。オンラインでアップロード可能な会社が便利。" },
              { step: "審査（最短30分〜数時間）", description: "売掛先の信用力を中心に審査。利用者の業績よりも売掛先の信用力が重視されるのが特徴。AI審査導入の会社は特に早い。" },
              { step: "見積もり提示・条件確認", description: "手数料率・受取額・追加費用の有無を確認。不明点は全て質問し、納得した上で次のステップに進む。" },
              { step: "契約", description: "ノンリコース（償還請求権なし）であること、追加費用がないことを契約書で確認してサイン。電子契約でオンライン完結も可能。" },
              { step: "入金", description: "契約完了後、指定口座に振込。最短即日〜2時間で入金。午前中の申し込みが即日入金のポイント。" },
              { step: "売掛金の回収・送金", description: "売掛先からの入金日に、ファクタリング会社に送金して取引完了。3社間の場合は売掛先から直接送金。" },
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

        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/fee-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリング手数料ガイド</p>
              <p className="mt-1 text-sm text-text-light">相場と安くする方法</p>
            </Link>
            <Link href="/articles/non-recourse/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ノンリコースとウィズリコースの違い</p>
              <p className="mt-1 text-sm text-text-light">安全な契約形態を選ぶ</p>
            </Link>
            <Link href="/articles/contract-checklist/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">契約チェックリスト</p>
              <p className="mt-1 text-sm text-text-light">契約前に確認すべきポイント</p>
            </Link>
            <Link href="/articles/beginners-guide/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">初めてのファクタリング完全ガイド</p>
              <p className="mt-1 text-sm text-text-light">仕組みから選び方まで</p>
            </Link>
          </div>
        </section>

        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">信頼できるファクタリング会社を比較する</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            10のチェックポイントをクリアした優良ファクタリング会社を一括比較。手数料・入金スピードであなたに最適なサービスが見つかります。
          </p>
          <Link href="/ranking/" className="btn-cta mt-6 text-base">おすすめランキングを見る</Link>
        </section>
      </div>
    </>
  );
}
