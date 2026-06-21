import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "運営者情報",
  description:
    "ファクタリングパートナーの運営者情報です。運営会社・編集方針・お問い合わせ先をご確認いただけます。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/about/",
  },
  openGraph: {
    title: "運営者情報 | ファクタリングパートナー",
    description:
      "ファクタリングパートナーの運営者情報です。運営会社・編集方針・お問い合わせ先をご確認いただけます。",
    url: "https://hyogo-shihoushoshi.jp/about/",
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "運営者情報" }]} />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
          運営者情報
        </h1>

        {/* 会社概要 */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
            運営会社
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b">
                  <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700 w-1/3">
                    会社名
                  </th>
                  <td className="px-4 py-3">株式会社MediaX</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700">
                    所在地
                  </th>
                  <td className="px-4 py-3">東京都渋谷区</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700">
                    事業内容
                  </th>
                  <td className="px-4 py-3">
                    Webメディア運営、デジタルマーケティング支援
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="bg-gray-50 px-4 py-3 text-left font-medium text-gray-700">
                    お問い合わせ
                  </th>
                  <td className="px-4 py-3">
                    <a
                      href="/contact/"
                      className="text-blue-600 hover:underline"
                    >
                      お問い合わせフォーム
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* サイトについて */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
            ファクタリングパートナーについて
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>
              ファクタリングパートナーは、ファクタリングサービスの利用を検討している法人・個人事業主・フリーランスの方に向けて、ファクタリング会社49社以上の比較情報を提供する専門メディアです。
            </p>
            <p>
              手数料・入金スピード・審査通過率・対応金額・口コミ評判など、複数の観点から各社のサービスを調査・分析し、利用者が最適なファクタリング会社を選べるよう支援しています。
            </p>
          </div>
        </section>

        {/* 当サイトの位置づけ */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
            当サイトの位置づけ
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>
              ファクタリングパートナーは、ファクタリングに関する情報提供・比較を行う<strong>情報メディア</strong>です。当サイト自身がファクタリングを行う業者ではなく、また資金の貸付を行う貸金業者でもありません。
            </p>
            <p>
              実際のサービス内容・手数料・契約条件は各ファクタリング会社によって異なります。ご契約にあたっては、必ず各社が交付する契約書面と最新の公式情報をご確認のうえ、ご自身の判断でご利用ください。
            </p>
          </div>
        </section>

        {/* 評価・比較の基準 */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
            評価・比較の基準
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>
              当サイトでは、各ファクタリング会社を次の6つの観点から調査・比較しています。
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>手数料：</strong>2社間・3社間それぞれの手数料水準や、諸費用の有無。</li>
              <li><strong>入金スピード：</strong>申し込みから入金までの最短目安と、即日対応の可否。</li>
              <li><strong>審査・対応のしやすさ：</strong>必要書類やオンライン完結の可否、対応のスムーズさ。</li>
              <li><strong>対応金額：</strong>少額（請求書1枚）から高額まで、買取可能額の範囲。</li>
              <li><strong>対応エリア・事業形態：</strong>法人・個人事業主・フリーランスへの対応状況。</li>
              <li><strong>口コミ・評判：</strong>実際の利用者の声や、運営会社の信頼性に関する情報。</li>
            </ul>
            <p>
              これらは各社の公式サイトや公開情報をもとに整理しており、サービス内容の変更にあわせて随時見直しています。
            </p>
          </div>
        </section>

        {/* 情報の参照について */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
            情報の参照について
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>
              ファクタリングの仕組みや法的な位置づけ（債権譲渡に関する民法の規定、金融庁による注意喚起など）については、法令や公的機関が公表する情報を参照しています。各ファクタリング会社のサービス内容・手数料・実績は、各社の公式サイトおよび公開情報にもとづいて記載しています。
            </p>
            <p>
              法令や制度の解釈、個別の契約の適法性に関わる判断については、最新の公的情報や弁護士などの専門家にご確認いただくことをおすすめします。
            </p>
          </div>
        </section>

        {/* 編集方針 */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
            編集方針
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>当サイトでは、以下の方針に基づいてコンテンツを制作しています。</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>正確性の追求：</strong>
                各ファクタリング会社の公式サイトや公開情報を定期的に確認し、最新かつ正確な情報の掲載に努めています。
              </li>
              <li>
                <strong>公平性・中立性：</strong>
                広告提携の有無や報酬額がランキング順位・評価内容に影響を与えることはありません。独自の評価基準に基づいて公平に比較しています。
              </li>
              <li>
                <strong>専門性の担保：</strong>
                ファクタリング業界に精通した編集者が執筆・監修を行い、複数名でのレビュー体制を敷いています。
              </li>
              <li>
                <strong>利用者本位の情報設計：</strong>
                利用者が本当に知りたい情報を優先的に掲載し、意思決定に役立つ比較・解説を心がけています。
              </li>
            </ul>
          </div>
        </section>

        {/* 免責事項 */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
            免責事項
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>
              当サイトに掲載されている情報は、各ファクタリング会社の公式情報および当社の調査に基づくものであり、その完全性・正確性・最新性を保証するものではありません。
            </p>
            <p>
              ファクタリングサービスのご利用に際しては、必ず各社に直接お問い合わせのうえ、最新の情報をご確認ください。当サイトの情報に基づく判断や行動によって生じた損害について、当社は一切の責任を負いません。
            </p>
          </div>
        </section>

        {/* 広告掲載について */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
            広告掲載について
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>
              当サイトは、一部のファクタリング会社と広告提携を行っており、利用者がサービスに申し込んだ場合に広告報酬を受け取ることがあります。
            </p>
            <p>
              ただし、広告報酬の有無や金額がランキング順位・評価内容に影響を与えることは一切ありません。すべての評価は、当サイト独自の調査・分析に基づいています。
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
