import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "ファクタリングパートナーへのお問い合わせ窓口です。掲載情報に関するご指摘・修正のご依頼、提携・取材のご相談などを受け付けています。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/contact/",
  },
  openGraph: {
    title: "お問い合わせ | ファクタリングパートナー",
    description:
      "ファクタリングパートナーへのお問い合わせ窓口です。掲載情報に関するご指摘・修正のご依頼、提携・取材のご相談などを受け付けています。",
    url: "https://hyogo-shihoushoshi.jp/contact/",
    type: "article",
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "お問い合わせ" }]} />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
          お問い合わせ
        </h1>

        <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
          <p>
            ファクタリングパートナーをご覧いただきありがとうございます。当サイトに関するお問い合わせは、本ページの内容をご確認のうえご連絡ください。
          </p>
        </div>

        {/* 受け付けている内容 */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
            お問い合わせ内容について
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>当サイトでは、主に以下のお問い合わせを受け付けています。</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>掲載情報に関するご指摘・修正のご依頼：</strong>
                各ファクタリング会社の手数料・サービス内容・会社情報など、掲載内容に誤りや古い情報がございましたらお知らせください。一次情報を確認のうえ、速やかに訂正いたします。
              </li>
              <li>
                <strong>提携・広告掲載のご相談：</strong>
                ファクタリング会社さま・事業者さまからのサービス掲載や提携に関するご相談を承ります。
              </li>
              <li>
                <strong>取材・記事監修のご相談：</strong>
                専門家・有識者の方による取材協力・記事監修に関するご相談を承ります。
              </li>
              <li>
                <strong>その他、当サイトの運営に関するお問い合わせ：</strong>
                上記以外の運営に関するご連絡もこちらで受け付けています。
              </li>
            </ul>
          </div>
        </section>

        {/* ご利用にあたっての注意 */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
            ご利用にあたっての注意
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>
              当サイトはファクタリング会社の比較情報を提供する独立したメディアであり、ファクタリングサービスの提供事業者ではありません。資金調達のお申し込み・審査・契約・入金時期などに関する個別のお問い合わせには対応いたしかねます。
            </p>
            <p>
              ファクタリングサービスのご利用に関するご質問は、必ず各ファクタリング会社へ直接お問い合わせください。当サイトの編集方針や免責事項については
              <a href="/about/" className="text-blue-600 hover:underline">
                運営者情報
              </a>
              のページをあわせてご確認ください。
            </p>
          </div>
        </section>

        {/* 連絡先 */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
            連絡先
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
            <p>
              お問い合わせは、以下の連絡先までご連絡ください。内容を確認のうえ、担当者より順次ご返信いたします。
            </p>
            {/* TODO: 連絡先メールはMediaXAI確認後に挿入 */}
          </div>
        </section>

        {/* 運営会社 */}
        <section className="mt-10">
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
                    運営サイトについて
                  </th>
                  <td className="px-4 py-3">
                    <a
                      href="/about/"
                      className="text-blue-600 hover:underline"
                    >
                      運営者情報
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </article>
    </>
  );
}
