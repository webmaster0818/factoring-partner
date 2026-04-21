import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "ファクタリングパートナーのプライバシーポリシーです。個人情報の取り扱いについて定めています。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/privacy-policy/",
  },
  openGraph: {
    title: "プライバシーポリシー | ファクタリングパートナー",
    description:
      "ファクタリングパートナーのプライバシーポリシーです。個人情報の取り扱いについて定めています。",
    url: "https://factoring-partner.pages.dev/privacy-policy/",
    type: "article",
  },
};

const sections = [
  {
    title: "第1条（個人情報の定義）",
    paragraphs: [
      "本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法に定める個人情報を指し、生存する個人に関する情報であって、氏名、メールアドレス、その他の記述等により特定の個人を識別できるものをいいます。",
    ],
  },
  {
    title: "第2条（個人情報の収集方法）",
    paragraphs: [
      "当サイトでは、お問い合わせフォームをご利用いただく際に、氏名・メールアドレス等の個人情報をご提供いただく場合があります。",
      "また、当サイトでは、利用者のアクセス情報（IPアドレス、ブラウザの種類、アクセス日時等）を自動的に取得する場合があります。",
    ],
  },
  {
    title: "第3条（個人情報の利用目的）",
    paragraphs: ["当社は、収集した個人情報を以下の目的で利用いたします。"],
    list: [
      "お問い合わせへの対応・回答",
      "当サイトのサービス改善およびコンテンツの充実",
      "利用状況の統計・分析（個人を特定しない形での集計）",
      "重要なお知らせやメンテナンス情報の通知",
      "不正利用の防止および対応",
    ],
  },
  {
    title: "第4条（個人情報の第三者提供）",
    paragraphs: [
      "当社は、以下の場合を除き、利用者の同意を得ることなく個人情報を第三者に提供することはありません。",
    ],
    list: [
      "法令に基づく場合",
      "人の生命、身体または財産の保護のために必要がある場合で、本人の同意を得ることが困難な場合",
      "国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行するために必要な場合",
    ],
  },
  {
    title: "第5条（個人情報の管理）",
    paragraphs: [
      "当社は、個人情報の正確性および安全性を確保するために、セキュリティ対策を講じ、個人情報の漏洩、滅失、毀損の防止に努めます。",
    ],
  },
  {
    title: "第6条（Cookieの使用について）",
    paragraphs: [
      "当サイトでは、利用者の利便性向上およびアクセス解析のためにCookie（クッキー）を使用しています。Cookieとは、ウェブサイトがブラウザを通じて利用者の端末に保存する小さなテキストファイルです。",
      "利用者は、ブラウザの設定によりCookieの受け取りを拒否することができます。ただし、一部の機能が正常に動作しなくなる場合があります。",
    ],
  },
  {
    title: "第7条（アクセス解析ツールについて）",
    paragraphs: [
      "当サイトでは、Googleが提供するアクセス解析ツール「Googleアナリティクス」を使用しています。Googleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。",
      "Googleアナリティクスの利用規約およびプライバシーポリシーについては、Googleの公式サイトをご確認ください。",
    ],
  },
  {
    title: "第8条（広告配信について）",
    paragraphs: [
      "当サイトでは、第三者配信の広告サービスを利用する場合があります。広告配信事業者は、利用者の興味に応じた広告を表示するためにCookieを使用することがあります。",
      "利用者は、各広告配信事業者のウェブサイトにて、パーソナライズ広告の配信を無効化（オプトアウト）することができます。",
    ],
  },
  {
    title: "第9条（個人情報の開示・訂正・削除）",
    paragraphs: [
      "利用者は、当社に対して自己の個人情報の開示、訂正、追加、削除、利用停止を請求することができます。本人確認を行ったうえで、合理的な期間内に対応いたします。",
      "ご請求はお問い合わせフォームよりご連絡ください。",
    ],
  },
  {
    title: "第10条（プライバシーポリシーの変更）",
    paragraphs: [
      "当社は、法令の変更やサービス内容の変更に伴い、本プライバシーポリシーを予告なく変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点で効力を生じるものとします。",
    ],
  },
  {
    title: "第11条（お問い合わせ窓口）",
    paragraphs: [
      "個人情報の取り扱いに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "プライバシーポリシー" },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-8 text-center text-2xl font-bold text-[#1e3a5f] md:text-3xl">
          プライバシーポリシー
        </h1>

        <p className="mb-10 text-sm leading-relaxed text-gray-700">
          株式会社MediaX（以下「当社」といいます）は、当社が運営するファクタリング比較情報サイト「ファクタリングパートナー」（以下「当サイト」といいます）における利用者の個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 border-l-4 border-[#e87c3e] pl-3 text-lg font-bold text-[#1e3a5f]">
                {section.title}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mb-3 text-sm leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="ml-6 list-disc space-y-1">
                  {section.list.map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-[#d4dbe6] bg-[#f7f9fc] p-6 text-sm text-gray-600">
          <p className="mb-2">
            <span className="font-bold text-[#1e3a5f]">運営者：</span>株式会社MediaX
          </p>
          <p className="mb-2">
            <span className="font-bold text-[#1e3a5f]">所在地：</span>東京都渋谷区
          </p>
          <p>
            <span className="font-bold text-[#1e3a5f]">制定日：</span>2026年4月13日
          </p>
        </div>
      </main>
    </>
  );
}
