import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "利用規約",
  description:
    "ファクタリングパートナーの利用規約です。当サイトをご利用いただく前に、本規約をよくお読みください。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/terms/",
  },
  openGraph: {
    title: "利用規約 | ファクタリングパートナー",
    description:
      "ファクタリングパートナーの利用規約です。当サイトをご利用いただく前に、本規約をよくお読みください。",
    url: "https://factoring-partner.pages.dev/terms/",
    type: "article",
  },
};

const sections = [
  {
    title: "第1条（適用範囲）",
    paragraphs: [
      "本利用規約（以下「本規約」といいます）は、株式会社MediaX（以下「当社」といいます）が運営するファクタリング比較情報サイト「ファクタリングパートナー」（以下「当サイト」といいます）の利用に関する条件を定めるものです。",
      "当サイトをご利用いただいた時点で、利用者は本規約に同意したものとみなします。",
    ],
  },
  {
    title: "第2条（サービスの内容）",
    paragraphs: [
      "当サイトは、ファクタリングサービスに関する情報の比較・紹介を目的とした情報提供サイトです。当サイト自体がファクタリングサービスを提供するものではありません。",
      "当サイトに掲載されている各ファクタリング会社のサービス内容・手数料・審査条件等の情報は、各社の公式情報および当社の調査に基づくものであり、実際のサービス内容と異なる場合があります。",
    ],
  },
  {
    title: "第3条（情報の正確性）",
    paragraphs: [
      "当社は、当サイトに掲載する情報の正確性・最新性の確保に努めておりますが、その完全性、正確性、確実性、有用性等を保証するものではありません。",
      "掲載情報に基づいて利用者が行った判断や行動について、当社は一切の責任を負いません。ファクタリングサービスのご利用に際しては、必ず各ファクタリング会社に直接お問い合わせのうえ、最新の情報をご確認ください。",
    ],
  },
  {
    title: "第4条（禁止事項）",
    paragraphs: [
      "当サイトの利用にあたり、以下の行為を禁止します。",
    ],
    list: [
      "当サイトの内容を無断で複製・転載・改変する行為",
      "当サイトの運営を妨害する行為",
      "他の利用者または第三者に不利益・損害を与える行為",
      "不正アクセスやサーバーに過度な負荷をかける行為",
      "当サイトの情報を営利目的で無断使用する行為",
      "法令または公序良俗に反する行為",
      "その他、当社が不適切と判断する行為",
    ],
  },
  {
    title: "第5条（知的財産権）",
    paragraphs: [
      "当サイトに掲載されている文章、画像、デザイン、ロゴ、その他のコンテンツに関する著作権、商標権その他の知的財産権は、当社または正当な権利者に帰属します。",
      "利用者は、当社の事前の書面による承諾なく、これらのコンテンツを複製、転載、改変、配布、販売その他の二次利用をすることはできません。",
    ],
  },
  {
    title: "第6条（免責事項）",
    paragraphs: [
      "当サイトから各ファクタリング会社のウェブサイトへのリンクを設けている場合がありますが、リンク先のサイトの内容について当社は一切の責任を負いません。",
      "当サイトの利用により生じたいかなる損害（直接損害、間接損害、特別損害、逸失利益を含むがこれに限られない）についても、当社は一切の責任を負いません。",
      "当サイトの掲載情報に基づきファクタリング会社と契約を締結した場合のトラブルについて、当社は当事者とはならず、一切の責任を負いません。",
    ],
  },
  {
    title: "第7条（広告・アフィリエイトについて）",
    paragraphs: [
      "当サイトでは、ファクタリング会社との提携に基づく広告およびアフィリエイトプログラムを利用しています。利用者が当サイト経由でファクタリング会社に申し込みを行った場合、当社が報酬を受け取ることがあります。",
      "なお、広告報酬の有無がランキングや評価に影響を与えることはなく、当社独自の調査・分析に基づき公平な情報提供に努めています。",
    ],
  },
  {
    title: "第8条（サービスの変更・中断・終了）",
    paragraphs: [
      "当社は、利用者への事前の通知なく、当サイトの内容を変更し、または当サイトの提供を中断・終了することができるものとします。",
      "これにより利用者に生じた損害について、当社は一切の責任を負いません。",
    ],
  },
  {
    title: "第9条（規約の変更）",
    paragraphs: [
      "当社は、必要と判断した場合には、利用者への事前の通知なく本規約を変更できるものとします。",
      "変更後の利用規約は、当サイトに掲載した時点で効力を生じるものとします。変更後に当サイトを利用した場合、利用者は変更後の規約に同意したものとみなします。",
    ],
  },
  {
    title: "第10条（準拠法・管轄裁判所）",
    paragraphs: [
      "本規約の解釈にあたっては、日本法を準拠法とします。",
      "当サイトに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "利用規約" },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-8 text-center text-2xl font-bold text-[#1e3a5f] md:text-3xl">
          利用規約
        </h1>

        <p className="mb-10 text-sm leading-relaxed text-gray-700">
          この利用規約（以下「本規約」といいます）は、株式会社MediaX（以下「当社」といいます）が運営するファクタリング比較情報サイト「ファクタリングパートナー」（以下「当サイト」といいます）の利用条件を定めるものです。当サイトをご利用いただくすべての方（以下「利用者」といいます）に適用されます。
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
