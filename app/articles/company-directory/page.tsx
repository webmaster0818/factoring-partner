import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ファクタリング会社一覧49社+｜業界最大級の比較データベース",
  description:
    "ファクタリング会社49社以上を一覧で比較。手数料・入金速度・買取可能額・対象・オンライン対応・特徴を網羅した業界最大級のデータベースで最適な会社を見つけましょう。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/articles/company-directory/",
  },
  openGraph: {
    title:
      "ファクタリング会社一覧49社+｜業界最大級の比較データベース",
    description:
      "ファクタリング会社49社以上を一覧で比較。業界最大級のデータベース。",
    url: "https://factoring-partner.pages.dev/articles/company-directory/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

const companies = [
  { name: "ビートレーディング", fee: "2%〜12%", speed: "最短2時間", amount: "制限なし", target: "法人・個人", online: "◎", feature: "累計9.1万社・買取額1,824億円の業界最大手" },
  { name: "QuQuMo（ククモ）", fee: "1%〜14.8%", speed: "最短2時間", amount: "制限なし", target: "法人・個人", online: "◎", feature: "手数料1%〜・オンライン完結" },
  { name: "ペイトナー", fee: "一律10%", speed: "最短10分", amount: "1万〜300万円", target: "フリーランス", online: "◎", feature: "最短10分・フリーランス特化" },
  { name: "ラボル", fee: "一律10%", speed: "最短60分", amount: "1万円〜", target: "フリーランス", online: "◎", feature: "24時間365日振込・東証プライム上場子会社" },
  { name: "アクセルファクター", fee: "2%〜20%", speed: "最短即日", amount: "30万〜1億円", target: "法人・個人", online: "○", feature: "審査通過率93%・柔軟な審査" },
  { name: "日本中小企業金融サポート機構", fee: "1.5%〜10%", speed: "最短即日", amount: "制限なし", target: "法人・個人", online: "○", feature: "一般社団法人運営・非営利" },
  { name: "OLTA（オルタ）", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", target: "法人・個人", online: "◎", feature: "AI審査・メガバンク提携" },
  { name: "PMG", fee: "2%〜", speed: "最短即日", amount: "50万〜2億円", target: "法人・個人", online: "○", feature: "年間取扱高500億円・大口対応" },
  { name: "ベストファクター", fee: "2%〜20%", speed: "最短即日", amount: "30万〜1億円", target: "法人・個人", online: "○", feature: "審査通過率92%・資金繰りコンサル" },
  { name: "トップ・マネジメント", fee: "0.5%〜12.5%", speed: "最短即日", amount: "30万〜3億円", target: "法人・個人", online: "○", feature: "手数料0.5%〜・注文書ファクタリング対応" },
  { name: "FREENANCE（フリーナンス）", fee: "3%〜10%", speed: "最短即日", amount: "1万円〜", target: "フリーランス", online: "◎", feature: "GMO系・あんしん補償付き" },
  { name: "AGビジネスサポート", fee: "2%〜", speed: "最短即日", amount: "制限なし", target: "法人・個人", online: "○", feature: "アイフルグループ・事業者ローンも" },
  { name: "みんなのファクタリング", fee: "一律10%", speed: "最短60分", amount: "1万〜300万円", target: "法人・個人", online: "◎", feature: "法人売掛金専用・オンライン完結" },
  { name: "GoodPlus", fee: "5%〜15%", speed: "最短90分", amount: "15万〜5,000万円", target: "法人・個人", online: "◎", feature: "最短90分入金・オンライン完結" },
  { name: "PAYTODAY", fee: "1%〜9.5%", speed: "最短30分", amount: "10万円〜上限なし", target: "法人・個人", online: "◎", feature: "AI審査・最短30分入金" },
  { name: "メンターキャピタル", fee: "2%〜", speed: "最短即日", amount: "30万〜2億円", target: "法人・個人", online: "○", feature: "柔軟な審査・幅広い業種対応" },
  { name: "JTC", fee: "1.2%〜10%", speed: "最短即日", amount: "100万〜", target: "法人", online: "○", feature: "法人専門・月間契約100件以上" },
  { name: "ジャパンマネジメント", fee: "3%〜20%", speed: "最短即日", amount: "30万〜5,000万円", target: "法人・個人", online: "○", feature: "福岡・東京2拠点・全国対応" },
  { name: "マネーフォワード アーリーペイメント", fee: "1%〜10%", speed: "最短2営業日", amount: "50万円〜数億円", target: "法人", online: "◎", feature: "マネーフォワード連携・大手企業向け" },
  { name: "GMO BtoB早払い", fee: "1%〜12%", speed: "最短2営業日", amount: "100万円〜1億円", target: "法人", online: "◎", feature: "GMOグループ運営・大企業取引向け" },
  { name: "バイオン", fee: "10%〜", speed: "最短60分", amount: "5万円〜", target: "法人・個人", online: "◎", feature: "AI審査24h365日・少額対応" },
  { name: "えんナビ", fee: "5%〜", speed: "最短即日", amount: "50万〜5,000万円", target: "法人・個人", online: "○", feature: "24時間対応・土日祝日も相談可" },
  { name: "ファクトル", fee: "3%〜", speed: "最短即日", amount: "30万〜1億円", target: "法人・個人", online: "○", feature: "丁寧なサポート・幅広い業種対応" },
  { name: "株式会社No.1", fee: "1%〜15%", speed: "最短即日", amount: "50万〜5,000万円", target: "法人・個人", online: "○", feature: "建設・運送業に強い" },
  { name: "うりかけ堂", fee: "2%〜12%", speed: "最短即日", amount: "30万〜5,000万円", target: "法人・個人", online: "○", feature: "業界経験豊富なスタッフ" },
  { name: "けんせつくん", fee: "5%〜", speed: "最短即日", amount: "制限なし", target: "建設業", online: "○", feature: "建設業特化・注文書ファクタリング" },
  { name: "土建くん", fee: "5%〜", speed: "最短即日", amount: "制限なし", target: "建設業", online: "○", feature: "建設業特化・一人親方OK" },
  { name: "セゾンファンデックス", fee: "非公開", speed: "最短即日", amount: "要相談", target: "法人", online: "○", feature: "クレディセゾングループ・大手信頼性" },
  { name: "三菱UFJファクター", fee: "非公開", speed: "要確認", amount: "要相談", target: "法人", online: "○", feature: "三菱UFJグループ・3社間専門" },
  { name: "電子請求書早払い", fee: "1%〜6%", speed: "最短2営業日", amount: "要相談", target: "法人", online: "◎", feature: "InfoMart×GMO・電子請求書連携" },
  { name: "SHIKIN+", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", target: "法人・個人", online: "◎", feature: "オンライン完結・低手数料" },
  { name: "請求QUICK", fee: "非公開", speed: "最短2営業日", amount: "要相談", target: "法人", online: "◎", feature: "SBI新生銀行グループ・大企業向け" },
  { name: "Next One", fee: "1.5%〜10%", speed: "最短即日", amount: "30万〜上限なし", target: "法人・個人", online: "○", feature: "柔軟審査・全国対応" },
  { name: "JPS", fee: "2%〜10%", speed: "最短即日", amount: "10万〜5,000万円", target: "法人・個人", online: "○", feature: "少額対応・個人事業主歓迎" },
  { name: "Finto", fee: "2%〜", speed: "最短即日", amount: "要相談", target: "法人・個人", online: "◎", feature: "オンライン完結・スタートアップ向け" },
  { name: "エーストラスト", fee: "5%〜", speed: "最短即日", amount: "10万〜1億円", target: "法人・個人", online: "○", feature: "柔軟審査・小口対応" },
  { name: "JBL", fee: "2%〜14.9%", speed: "最短即日", amount: "10万〜1億円", target: "法人・個人", online: "○", feature: "首都圏対応・迅速審査" },
  { name: "アルシエ", fee: "3%〜", speed: "最短即日", amount: "10万〜5,000万円", target: "法人・個人", online: "○", feature: "丁寧な対応・中小企業向け" },
  { name: "トラストゲートウェイ", fee: "3%〜", speed: "最短即日", amount: "10万〜1億円", target: "法人・個人", online: "○", feature: "九州拠点・地域密着" },
  { name: "ライジング", fee: "3%〜10%", speed: "最短即日", amount: "10万〜5,000万円", target: "法人・個人", online: "○", feature: "東北・関東対応" },
  { name: "OTTI（オッティ）", fee: "5%〜", speed: "最短即日", amount: "10万〜5,000万円", target: "法人・個人", online: "○", feature: "少額対応・柔軟審査" },
  { name: "MSFJ", fee: "1.8%〜9.8%", speed: "最短即日", amount: "10万〜5,000万円", target: "法人・個人", online: "○", feature: "プランが豊富・低手数料" },
  { name: "ファクタリングのTRY", fee: "5%〜", speed: "最短即日", amount: "10万〜5,000万円", target: "法人・個人", online: "○", feature: "柔軟対応・初回歓迎" },
  { name: "ファクタリングベスト", fee: "非公開", speed: "最短即日", amount: "要相談", target: "法人・個人", online: "◎", feature: "一括見積もり・比較サービス" },
  { name: "ベストペイ", fee: "5%〜", speed: "最短即日", amount: "100万〜3億円", target: "法人", online: "○", feature: "注文書ファクタリング対応" },
  { name: "ファストファクタリング", fee: "5%〜", speed: "最短即日", amount: "要相談", target: "法人・個人", online: "◎", feature: "オンライン完結・スピード重視" },
  { name: "ファクターズ", fee: "3%〜", speed: "最短即日", amount: "30万〜3,000万円", target: "法人・個人", online: "○", feature: "中小企業向け・迅速対応" },
  { name: "ウィット", fee: "5%〜", speed: "最短即日", amount: "30万〜500万円", target: "法人・個人", online: "○", feature: "小口特化・非対面対応" },
  { name: "ファクタリング見直し本舗", fee: "非公開", speed: "最短即日", amount: "要相談", target: "法人・個人", online: "○", feature: "乗り換え相談・手数料改善" },
];

const faqs = [
  {
    question: "ファクタリング会社はどうやって選べばいいですか？",
    answer:
      "ファクタリング会社を選ぶ際は、手数料・入金スピード・買取可能額・オンライン対応の4つのポイントを重視しましょう。また、業種特化型（建設業向け・フリーランス向け等）のサービスがある場合は、自社の業種に合ったサービスを選ぶと審査もスムーズです。複数社に見積もりを取って比較検討することをおすすめします。",
  },
  {
    question: "手数料が安いファクタリング会社はどこですか？",
    answer:
      "手数料が低い主なサービスとしては、トップ・マネジメント（0.5%〜）、PAYTODAY（1%〜9.5%）、QuQuMo（1%〜14.8%）、マネーフォワード アーリーペイメント（1%〜10%）、日本中小企業金融サポート機構（1.5%〜10%）、OLTA（2%〜9%）などがあります。ただし最低手数料が適用される条件は限られるため、必ず見積もりを取って実際の手数料を確認しましょう。",
  },
  {
    question: "即日入金に対応しているファクタリング会社はどこですか？",
    answer:
      "多くのファクタリング会社が最短即日入金に対応しています。特にスピードが速いのは、ペイトナー（最短10分）、PAYTODAY（最短30分）、ラボル（最短60分）、バイオン（最短60分）、GoodPlus（最短90分）、ビートレーディング（最短2時間）、QuQuMo（最短2時間）などです。",
  },
  {
    question: "個人事業主・フリーランスでも利用できるファクタリング会社はどこですか？",
    answer:
      "個人事業主・フリーランス向けのサービスとしては、ペイトナー、ラボル、FREENANCE、バイオンなどがフリーランス特化型です。また、ビートレーディング、OLTA、QuQuMo、PAYTODAY、アクセルファクターなど多くのサービスが法人・個人事業主の両方に対応しています。",
  },
  {
    question: "ファクタリング会社は何社くらい見積もりを取るべきですか？",
    answer:
      "最低2〜3社からの見積もりを取ることをおすすめします。同じ売掛金でもファクタリング会社によって手数料が大きく異なる場合があるため、複数社を比較することで最適な条件を見つけられます。手数料だけでなく、入金スピード・対応の丁寧さ・追加費用の有無なども含めて総合的に判断しましょう。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファクタリング会社一覧49社+｜業界最大級の比較データベース",
  description:
    "ファクタリング会社49社以上を一覧で比較。業界最大級のデータベース。",
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
    "@id": "https://factoring-partner.pages.dev/articles/company-directory/",
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
    { "@type": "ListItem", position: 2, name: "コラム", item: "https://factoring-partner.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "ファクタリング会社一覧" },
  ],
};

/* ── Component ────────────────────────────────────── */

export default function CompanyDirectoryPage() {
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
          { label: "ファクタリング会社一覧" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
            会社一覧
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング会社一覧49社+
            <br className="hidden md:block" />
            業界最大級の比較データベース
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            日本国内のファクタリング会社49社以上を手数料・入金速度・買取可能額・対象・オンライン対応・特徴で一覧比較。最適なファクタリング会社を見つけましょう。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li><a href="#all-companies" className="hover:underline">1. ファクタリング会社一覧表（49社+）</a></li>
            <li><a href="#how-to-choose" className="hover:underline">2. ファクタリング会社の選び方</a></li>
            <li><a href="#by-type" className="hover:underline">3. タイプ別おすすめファクタリング会社</a></li>
            <li><a href="#caution" className="hover:underline">4. ファクタリング会社を選ぶ際の注意点</a></li>
            <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
          </ol>
        </nav>

        {/* ── イントロ ─── */}
        <section className="mb-16">
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングは、売掛金を早期に現金化できる資金調達方法として、多くの事業者に利用されています。しかし、日本国内にはファクタリング会社が多数存在し、どのサービスを選べばよいのか迷う方も多いのではないでしょうか。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            この記事では、国内の主要ファクタリング会社49社以上を網羅的にリスト化し、手数料・入金速度・買取可能額・対象者・オンライン対応・特徴の6項目で一覧比較しています。この一覧表を参考に、自社のニーズに合ったファクタリング会社を見つけてください。
          </p>
          <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
            <p className="mb-2 font-bold text-accent">本一覧表のご利用にあたって</p>
            <p className="text-sm text-text-light">
              掲載情報は各社の公式サイトや公開情報を基に作成していますが、最新の手数料やサービス内容は各社に直接お問い合わせください。手数料の「〜」表記は条件により変動することを意味し、実際の手数料は見積もりで確認する必要があります。
            </p>
          </div>
        </section>

        {/* ── 全社一覧表 ─── */}
        <section id="all-companies" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング会社一覧表（49社+）
          </h2>
          <p className="mb-6 text-sm text-text-light">
            以下の表は横スクロールに対応しています。スマートフォンの場合は左右にスワイプして全項目をご確認ください。
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm whitespace-nowrap">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="sticky left-0 z-10 bg-primary px-4 py-3 text-left font-semibold min-w-[160px]">会社名</th>
                  <th className="px-4 py-3 text-left font-semibold min-w-[120px]">手数料</th>
                  <th className="px-4 py-3 text-left font-semibold min-w-[100px]">入金速度</th>
                  <th className="px-4 py-3 text-left font-semibold min-w-[140px]">買取可能額</th>
                  <th className="px-4 py-3 text-center font-semibold min-w-[90px]">対象</th>
                  <th className="px-4 py-3 text-center font-semibold min-w-[80px]">オンライン</th>
                  <th className="px-4 py-3 text-left font-semibold min-w-[220px]">特徴</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-section-bg" : "bg-white"} hover:bg-blue-50/50 transition-colors`}>
                    <td className="sticky left-0 z-10 px-4 py-3 font-semibold text-primary" style={{ backgroundColor: i % 2 === 0 ? '#f7f9fc' : '#ffffff' }}>
                      {company.name}
                    </td>
                    <td className="px-4 py-3 text-text-light">{company.fee}</td>
                    <td className="px-4 py-3 text-text-light">{company.speed}</td>
                    <td className="px-4 py-3 text-text-light">{company.amount}</td>
                    <td className="px-4 py-3 text-center text-text-light text-xs">{company.target}</td>
                    <td className="px-4 py-3 text-center text-text-light">{company.online}</td>
                    <td className="px-4 py-3 text-text-light text-xs">{company.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            ※情報は2026年4月時点の公開情報に基づいています。最新情報は各社公式サイトでご確認ください。
          </p>
        </section>

        {/* ── 選び方 ─── */}
        <section id="how-to-choose" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング会社の選び方
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            49社以上のファクタリング会社から最適なサービスを選ぶためには、以下の6つのポイントを押さえることが重要です。
          </p>
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">1</span>
                手数料の水準を比較する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                手数料はファクタリングのコストを左右する最重要項目です。2社間ファクタリングの場合、業界相場は5〜18%程度ですが、OLTA（2〜9%）やPAYTODAY（1〜9.5%）のように低い手数料のサービスも存在します。ただし、最低手数料は好条件の場合のみ適用されるため、必ず見積もりを取って実際の手数料を確認しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">2</span>
                入金スピードを確認する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                緊急の資金調達が必要な場合は、入金スピードが重要です。ペイトナー（最短10分）やPAYTODAY（最短30分）のように超高速対応のサービスから、マネーフォワード アーリーペイメント（最短2営業日）のように数日かかるサービスまであります。自社の緊急度に合わせて選びましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">3</span>
                買取可能額が自社の需要に合っているか
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                売掛金の金額がサービスの買取範囲に入っているか確認しましょう。少額（1万円〜）はペイトナーやラボル、大口（数億円）はビートレーディングやマネーフォワード アーリーペイメントが対応しています。金額の上限・下限の両方をチェックしましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">4</span>
                オンライン完結か対面必要か
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                完全オンライン完結のサービスであれば来店不要で全国どこからでも利用可能です。一方、対面相談ができるサービスは、初めてのファクタリングで不安がある方や複雑な案件の場合に安心感があります。表の「オンライン」欄で◎は完全オンライン完結、○はオンライン対応可能（一部対面の場合あり）を示しています。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">5</span>
                自社の業種・事業形態に合っているか
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                フリーランス向け（ペイトナー・ラボル・FREENANCE）、建設業向け（けんせつくん・土建くん）、法人専門（JTC・マネーフォワード）など、業種や事業形態に特化したサービスがあります。特化型サービスは、業界の事情を理解した審査が行われるため、審査通過率が高くなる傾向があります。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-text-main">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">6</span>
                運営会社の信頼性を確認する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリング業界は新規参入が多く、中には信頼性が不十分な会社も存在します。上場企業グループ（GMO・SBI・セゾン等）、長年の実績がある会社、口コミ評価が高い会社を優先的に選ぶことで、トラブルのリスクを最小化できます。
              </p>
            </div>
          </div>
        </section>

        {/* ── タイプ別おすすめ ─── */}
        <section id="by-type" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            タイプ別おすすめファクタリング会社
          </h2>

          <div className="space-y-8">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-4 text-lg font-bold text-secondary">手数料重視（コスト最優先）</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/10">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold text-text-main">会社名</th>
                      <th className="px-3 py-2 text-left font-semibold text-text-main">手数料</th>
                      <th className="px-3 py-2 text-left font-semibold text-text-main">ポイント</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2 font-semibold text-primary">トップ・マネジメント</td>
                      <td className="px-3 py-2">0.5%〜12.5%</td>
                      <td className="px-3 py-2 text-xs">3社間なら0.5%〜の最安水準</td>
                    </tr>
                    <tr className="border-b border-border bg-section-bg">
                      <td className="px-3 py-2 font-semibold text-primary">PAYTODAY</td>
                      <td className="px-3 py-2">1%〜9.5%</td>
                      <td className="px-3 py-2 text-xs">2社間で上限9.5%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2 font-semibold text-primary">OLTA</td>
                      <td className="px-3 py-2">2%〜9%</td>
                      <td className="px-3 py-2 text-xs">2社間で上限9%の最低クラス</td>
                    </tr>
                    <tr className="bg-section-bg">
                      <td className="px-3 py-2 font-semibold text-primary">日本中小企業金融サポート機構</td>
                      <td className="px-3 py-2">1.5%〜10%</td>
                      <td className="px-3 py-2 text-xs">非営利法人で低手数料</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-4 text-lg font-bold text-secondary">入金スピード重視（緊急の資金調達）</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/10">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold text-text-main">会社名</th>
                      <th className="px-3 py-2 text-left font-semibold text-text-main">入金速度</th>
                      <th className="px-3 py-2 text-left font-semibold text-text-main">ポイント</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2 font-semibold text-primary">ペイトナー</td>
                      <td className="px-3 py-2">最短10分</td>
                      <td className="px-3 py-2 text-xs">業界最速・フリーランス向け</td>
                    </tr>
                    <tr className="border-b border-border bg-section-bg">
                      <td className="px-3 py-2 font-semibold text-primary">PAYTODAY</td>
                      <td className="px-3 py-2">最短30分</td>
                      <td className="px-3 py-2 text-xs">AI審査で超高速</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2 font-semibold text-primary">ラボル</td>
                      <td className="px-3 py-2">最短60分</td>
                      <td className="px-3 py-2 text-xs">24h365日振込対応</td>
                    </tr>
                    <tr className="bg-section-bg">
                      <td className="px-3 py-2 font-semibold text-primary">GoodPlus</td>
                      <td className="px-3 py-2">最短90分</td>
                      <td className="px-3 py-2 text-xs">オンライン完結で高速</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-4 text-lg font-bold text-secondary">フリーランス・個人事業主向け</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/10">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold text-text-main">会社名</th>
                      <th className="px-3 py-2 text-left font-semibold text-text-main">買取下限</th>
                      <th className="px-3 py-2 text-left font-semibold text-text-main">ポイント</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2 font-semibold text-primary">ペイトナー</td>
                      <td className="px-3 py-2">1万円〜</td>
                      <td className="px-3 py-2 text-xs">最短10分・手続き最簡単</td>
                    </tr>
                    <tr className="border-b border-border bg-section-bg">
                      <td className="px-3 py-2 font-semibold text-primary">ラボル</td>
                      <td className="px-3 py-2">1万円〜</td>
                      <td className="px-3 py-2 text-xs">24h365日振込・上場子会社</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2 font-semibold text-primary">FREENANCE</td>
                      <td className="px-3 py-2">1万円〜</td>
                      <td className="px-3 py-2 text-xs">あんしん補償付き・GMO系</td>
                    </tr>
                    <tr className="bg-section-bg">
                      <td className="px-3 py-2 font-semibold text-primary">バイオン</td>
                      <td className="px-3 py-2">5万円〜</td>
                      <td className="px-3 py-2 text-xs">AI審査24h365日</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-4 text-lg font-bold text-secondary">大口案件・法人向け</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/10">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold text-text-main">会社名</th>
                      <th className="px-3 py-2 text-left font-semibold text-text-main">買取上限</th>
                      <th className="px-3 py-2 text-left font-semibold text-text-main">ポイント</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2 font-semibold text-primary">ビートレーディング</td>
                      <td className="px-3 py-2">上限なし</td>
                      <td className="px-3 py-2 text-xs">累計買取額1,824億円の実績</td>
                    </tr>
                    <tr className="border-b border-border bg-section-bg">
                      <td className="px-3 py-2 font-semibold text-primary">マネーフォワード</td>
                      <td className="px-3 py-2">数億円</td>
                      <td className="px-3 py-2 text-xs">大手企業の売掛金に強い</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2 font-semibold text-primary">トップ・マネジメント</td>
                      <td className="px-3 py-2">3億円</td>
                      <td className="px-3 py-2 text-xs">大口でも手数料0.5%〜</td>
                    </tr>
                    <tr className="bg-section-bg">
                      <td className="px-3 py-2 font-semibold text-primary">PMG</td>
                      <td className="px-3 py-2">2億円</td>
                      <td className="px-3 py-2 text-xs">年間取扱高500億円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-4 text-lg font-bold text-secondary">建設業向け</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/10">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold text-text-main">会社名</th>
                      <th className="px-3 py-2 text-left font-semibold text-text-main">注文書対応</th>
                      <th className="px-3 py-2 text-left font-semibold text-text-main">ポイント</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2 font-semibold text-primary">けんせつくん</td>
                      <td className="px-3 py-2">対応</td>
                      <td className="px-3 py-2 text-xs">建設業完全特化</td>
                    </tr>
                    <tr className="border-b border-border bg-section-bg">
                      <td className="px-3 py-2 font-semibold text-primary">土建くん</td>
                      <td className="px-3 py-2">対応</td>
                      <td className="px-3 py-2 text-xs">一人親方に特化</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2 font-semibold text-primary">トップ・マネジメント</td>
                      <td className="px-3 py-2">対応</td>
                      <td className="px-3 py-2 text-xs">全業種対応で注文書OK</td>
                    </tr>
                    <tr className="bg-section-bg">
                      <td className="px-3 py-2 font-semibold text-primary">株式会社No.1</td>
                      <td className="px-3 py-2">要確認</td>
                      <td className="px-3 py-2 text-xs">建設・運送に強い</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ── 注意点 ─── */}
        <section id="caution" className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング会社を選ぶ際の注意点
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-accent">手数料の「〜」表記に注意</p>
              <p className="text-sm leading-relaxed text-text-light">
                多くのファクタリング会社が「手数料○%〜」と表記していますが、これは最も条件の良いケースの数値です。実際の手数料は売掛先の信用力・金額・支払いサイトなどで変動するため、必ず見積もりを取って確認してください。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-accent">隠れたコストがないか確認</p>
              <p className="text-sm leading-relaxed text-text-light">
                手数料以外に、事務手数料・振込手数料・契約書作成費用などの名目で追加費用が発生するケースがあります。契約前に総コストを確認し、「手数料以外に費用はかかりますか？」と明確に質問しましょう。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-accent">償還請求権（リコース）の有無</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングは原則として「ノンリコース（償還請求権なし）」ですが、一部の会社では「ウィズリコース（償還請求権あり）」の契約を提示する場合があります。リコースありの場合、売掛先が支払い不能になると利用者が負担を負うリスクがあるため、必ず契約内容を確認してください。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-accent">悪質業者に注意</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリング業界は登録制ではないため、一部に悪質な業者が存在します。「手数料が異常に高い（20%超）」「契約書の内容が不透明」「保証金や担保を要求される」などの特徴がある場合は利用を避けてください。上場企業グループや長年の実績がある会社を選ぶことでリスクを低減できます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-accent">複数社から見積もりを取る</p>
              <p className="text-sm leading-relaxed text-text-light">
                同じ売掛金でもファクタリング会社によって手数料が大きく異なります。最低2〜3社からの相見積もりを取ることで、最も有利な条件を見つけられます。見積もり自体は無料の会社がほとんどなので、積極的に活用しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── ファクタリングの基礎知識 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリングの基礎知識
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ファクタリング会社を選ぶ前に、ファクタリングの基本的な仕組みを理解しておきましょう。
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">ファクタリングとは</p>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングとは、売掛金（まだ入金されていない売上代金）をファクタリング会社に買い取ってもらい、支払期日前に現金化する資金調達方法です。借入ではないため、負債にならず信用情報にも影響しません。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">2社間ファクタリングと3社間ファクタリング</p>
              <p className="text-sm leading-relaxed text-text-light">
                2社間ファクタリングは利用者とファクタリング会社の2者間で取引が完結し、売掛先には通知されません。手数料はやや高め（5〜18%程度）ですが秘密性が高いです。3社間ファクタリングは売掛先にも通知して3者間で取引を行います。手数料は低め（1〜9%程度）ですが取引先に知られます。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">手数料の相場</p>
              <p className="text-sm leading-relaxed text-text-light">
                2社間ファクタリングの手数料相場は5〜18%、3社間は1〜9%程度です。手数料は売掛先の信用力、売掛金の金額、支払いサイトなどにより変動します。同じ売掛金でもファクタリング会社によって手数料が大きく異なるため、複数社での比較が重要です。
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="mb-2 font-semibold text-text-main">銀行融資との違い</p>
              <p className="text-sm leading-relaxed text-text-light">
                銀行融資は借入のため返済義務がありますが、ファクタリングは売掛金の売却のため返済不要です。審査基準も異なり、銀行は申込者の信用力を重視しますが、ファクタリングは売掛先の信用力を重視します。赤字企業でも売掛先が優良であれば利用可能です。
              </p>
            </div>
          </div>
        </section>

        {/* ── オンライン vs 対面 ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            オンライン完結型 vs 対面型の選び方
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-secondary/30 bg-teal-50 p-6">
              <p className="mb-4 font-bold text-secondary">オンライン完結型がおすすめの方</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>来店する時間がない忙しい経営者</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>地方在住で都市部に行きにくい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary">&#10003;</span>
                  <span>ファクタリングの経験がある方</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-accent/30 bg-orange-50 p-6">
              <p className="mb-4 font-bold text-accent">対面型がおすすめの方</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>初めてファクタリングを利用する方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>複雑な案件で相談が必要な方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">&#9651;</span>
                  <span>担当者の顔が見える安心感を重視する方</span>
                </li>
              </ul>
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

        {/* ── まとめ ─── */}
        <section className="mb-16">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            まとめ
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            本記事では、国内の主要ファクタリング会社49社以上を一覧で紹介しました。手数料・入金速度・買取可能額・対象者・オンライン対応・特徴の6項目で比較することで、自社のニーズに合ったサービスを見つけやすくなります。
          </p>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリング会社を選ぶ際は、手数料だけでなく入金スピード・オンライン対応・運営会社の信頼性・自社の業種との適合性を総合的に判断することが重要です。また、複数社からの相見積もりを取ることで、最も有利な条件を引き出すことができます。
          </p>
          <p className="leading-relaxed text-text-light">
            ファクタリングは正しく利用すれば、事業の資金繰りを大幅に改善できる有効な手段です。この一覧表を参考に、信頼できるファクタリング会社を見つけてください。
          </p>
        </section>

        {/* ── CTA ─── */}
        <section className="mb-16 rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            ファクタリング会社を比較して最適な1社を見つけよう
          </h2>
          <p className="mb-6 text-sm text-white/80">
            手数料・スピード・信頼性で厳選したおすすめランキングはこちら
          </p>
          <Link
            href="/ranking/"
            className="btn-cta inline-block"
          >
            おすすめランキングを見る
          </Link>
        </section>

        {/* ── 関連ページ ─── */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            関連ページ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/ranking/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング会社おすすめランキング</p>
              <p className="mt-1 text-sm text-text-light">厳選した49社以上を徹底比較</p>
            </Link>
            <Link
              href="/articles/fee-guide/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリング手数料ガイド</p>
              <p className="mt-1 text-sm text-text-light">手数料の相場と安くする方法を解説</p>
            </Link>
            <Link
              href="/articles/online-factoring/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">オンラインファクタリング</p>
              <p className="mt-1 text-sm text-text-light">完全オンライン対応のサービスを比較</p>
            </Link>
            <Link
              href="/articles/what-is-factoring/"
              className="rounded-lg border border-border bg-white p-4 transition-colors hover:bg-section-bg"
            >
              <p className="font-semibold text-primary">ファクタリングとは？</p>
              <p className="mt-1 text-sm text-text-light">仕組み・メリット・注意点を初心者向けに解説</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
