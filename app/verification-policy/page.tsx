import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "情報の調査・検証ポリシー｜手数料は全社公式確認【2026年6月】",
  description:
    "ファクタリングパートナーが掲載情報をどのように調査・確認・更新しているかを公開します。掲載各社の手数料は2026年6月に各社公式サイトで確認し、第三者の推定値は採用していません。掲載・評価の基準、編集体制、広告の開示までを明記します。",
  alternates: { canonical: "https://hyogo-shihoushoshi.jp/verification-policy/" },
  openGraph: {
    title: "情報の調査・検証ポリシー｜手数料は全社公式確認",
    description:
      "掲載情報の調査・確認・更新の方針を公開。手数料は2026年6月に各社公式サイトで確認済み。",
    url: "https://hyogo-shihoushoshi.jp/verification-policy/",
    type: "article",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "情報の調査・検証ポリシー",
  url: "https://hyogo-shihoushoshi.jp/verification-policy/",
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://hyogo-shihoushoshi.jp/",
  },
};

export default function VerificationPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Breadcrumb items={[{ label: "情報の調査・検証ポリシー" }]} />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
          情報の調査・検証ポリシー
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-700">
          ファクタリングパートナーが、掲載しているファクタリング会社の情報を「どこから・どのように集め、どう確認・更新しているか」を公開します。金融に関わる情報を扱うサイトとして、正確性と透明性を最優先しています。
        </p>
        <p className="mt-2 text-xs text-gray-400">最終更新：2026年6月</p>

        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            当サイトの立場
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>
              ファクタリングパートナー（運営：株式会社MediaX）は、ファクタリングに関する情報提供・比較を行う<strong>情報メディア</strong>です。当サイト自身がファクタリングを行う業者ではなく、資金の貸付を行う貸金業者でもありません。詳しくは
              <Link href="/about/" className="text-blue-600 hover:underline">運営者情報</Link>
              をご覧ください。
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            手数料の確認プロセス（最重要）
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>
              当サイトおよび各社レビューに掲載している手数料は、<strong>2026年6月に各社の公式サイトで確認した表記</strong>に統一しています。具体的には次の方針で運用しています。
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>第三者サイトの推定値・伝聞値は採用しません。一次情報（各社公式サイト）で確認できた表記のみを掲載します。</li>
              <li>公式で確認できない上限などは、想像で補わず「非公開」「上限非公表」と明記します。</li>
              <li>各社の確認時点（2026年6月）を明示します。手数料は売掛先の信用力・金額・支払いサイトによって変動するため、最終的な金額は各社の見積もりで確定します。</li>
            </ul>
            <p>
              各社の手数料は
              <Link href="/articles/company-directory/" className="text-blue-600 hover:underline">審査済み業者データベース</Link>
              で一覧・絞り込みできます。
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            掲載・審査の6つの基準
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>掲載にあたっては、各社を次の6つの基準で確認・整理しています。掲載は推奨や提携を意味するものではありません。</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>運営会社の実在性：</strong>運営会社・所在地などが公式・公開情報で確認できること。</li>
              <li><strong>契約形態の明示：</strong>2社間・3社間など契約形態が明示されていること。</li>
              <li><strong>手数料の透明性：</strong>手数料が公式で確認でき、2026年6月確認の表記に統一していること。</li>
              <li><strong>健全な契約：</strong>原則ノンリコース（償還請求権なし）で、実質的な貸付（偽装・給与ファクタリング等）でないこと。</li>
              <li><strong>違法・悪質性がないこと：</strong>相場を著しく超える手数料や強引な取り立て等が確認されないこと。</li>
              <li><strong>実績・利用者の評価：</strong>一定の取引実績や口コミ・評価が確認できること。</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            評価・比較の基準
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>各社のサービスは、手数料／入金スピード／審査・対応のしやすさ／対応金額／対応エリア・事業形態／口コミ・評判の6つの観点で比較しています。広告提携の有無や報酬額が
              <Link href="/ranking/" className="text-blue-600 hover:underline">ランキング</Link>
              の順位・評価に影響することはありません。
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            編集・検証体制と更新
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <ul className="list-disc space-y-2 pl-6">
              <li>各社の公式サイト・公開情報および法令・公的機関（民法の債権譲渡規定、金融庁の注意喚起等）の一次情報をもとに、編集部が作成・確認しています。</li>
              <li>料金・運営会社情報など重要事項の変更は、社内の承認フローを経て反映します。</li>
              <li>手数料・サービス内容は定期的に各社公式で再確認し、変更があれば最終確認日とあわせて更新します。</li>
              <li>法令の解釈や個別契約の適法性に関わる判断は、最新の公的情報や弁護士などの専門家への確認を推奨しています。</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            広告（PR）の開示
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>
              当サイトは一部のファクタリング会社と広告提携を行い、利用者がサービスに申し込んだ場合に広告報酬を受け取ることがあります。ただし、報酬の有無や金額がランキング順位・評価内容に影響を与えることは一切ありません。
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="border-b-2 border-blue-600 pb-2 text-xl font-bold text-gray-800">
            免責事項
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>
              掲載情報は各社公式情報および当社の調査に基づくものであり、完全性・正確性・最新性を保証するものではありません。ご利用に際しては各社に直接お問い合わせのうえ、最新情報をご確認ください。
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
