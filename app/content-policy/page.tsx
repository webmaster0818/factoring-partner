import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "記事制作ポリシー",
  description:
    "ファクタリングパートナーの記事制作ポリシーです。正確で信頼性の高いファクタリング情報を提供するための編集方針を定めています。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/content-policy/",
  },
  openGraph: {
    title: "記事制作ポリシー | ファクタリングパートナー",
    description:
      "ファクタリングパートナーの記事制作ポリシーです。正確で信頼性の高いファクタリング情報を提供するための編集方針を定めています。",
    url: "https://factoring-partner.pages.dev/content-policy/",
    type: "article",
  },
};

const principles = [
  {
    number: "01",
    title: "正確性の追求",
    description:
      "すべての記事は、各ファクタリング会社の公式サイト・公式資料、金融庁・経済産業省などの公的機関の公表データ、および業界団体の発行する資料を一次情報として参照し執筆しています。手数料・審査条件・入金速度などの数値情報は、定期的に各社の公式情報と照合し、最新の状態を維持するよう努めています。",
  },
  {
    number: "02",
    title: "公平性・中立性の確保",
    description:
      "当サイトでは、ファクタリング会社との広告提携を行っていますが、広告報酬の有無や金額がランキング順位・評価内容に影響を与えることはありません。すべての評価は、手数料・入金速度・審査通過率・買取可能額・オンライン対応・利用者の口コミといった客観的な指標に基づき、独自の評価基準で算出しています。広告提携先であっても、デメリットや注意点がある場合は正直に記載します。",
  },
  {
    number: "03",
    title: "専門性の担保",
    description:
      "ファクタリングは、売掛債権の売買を伴う専門性の高い金融サービスです。当サイトの記事は、ファクタリング業界に精通した編集者が執筆・監修を行い、法的な正確性と実務的な有用性の両立を目指しています。2社間・3社間ファクタリングの仕組み、手数料の相場、審査のポイントなど、利用者が適切な判断を行えるよう、わかりやすく正確な情報提供に努めています。",
  },
  {
    number: "04",
    title: "利用者本位の情報設計",
    description:
      "当サイトは、資金調達に課題を抱える法人・個人事業主・フリーランスの方々が、自身に最適なファクタリングサービスを見つけられるようサポートすることを最大の目的としています。比較表・ランキング・基礎知識コンテンツを通じて、利用者の意思決定を支援する構成を心がけています。過度に不安を煽る表現や、誤解を招く誇張表現は使用しません。",
  },
];

const workflow = [
  {
    step: "STEP 1",
    title: "企画・調査",
    description:
      "利用者のニーズ分析やキーワード調査をもとに記事テーマを決定。各ファクタリング会社の公式サイト、金融庁の公表資料、業界レポートなどの一次情報を収集・整理します。",
  },
  {
    step: "STEP 2",
    title: "執筆・制作",
    description:
      "ファクタリング業界に精通した編集者が、調査データに基づき記事を執筆。数値データの正確性、法的表現の適切性、利用者にとっての分かりやすさを重視して制作します。",
  },
  {
    step: "STEP 3",
    title: "編集・校正",
    description:
      "執筆された原稿を編集部が複数名でレビュー。事実関係の確認、表現の適切性チェック、誤字脱字の修正を行い、品質を担保します。",
  },
  {
    step: "STEP 4",
    title: "公開・更新",
    description:
      "公開後も定期的に掲載情報を見直し、各ファクタリング会社のサービス内容変更・手数料改定などがあった場合は速やかに記事を更新します。情報の鮮度維持に継続的に取り組んでいます。",
  },
];

export default function ContentPolicyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "記事制作ポリシー" },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-8 text-center text-2xl font-bold text-[#1e3a5f] md:text-3xl">
          記事制作ポリシー
        </h1>

        <p className="mb-10 text-sm leading-relaxed text-gray-700">
          ファクタリングパートナーは、ファクタリングサービスの比較・情報提供を行うメディアとして、利用者の皆さまに正確で信頼性の高い情報をお届けすることを最も大切にしています。以下の4つの原則と制作フローに基づき、すべてのコンテンツを制作しています。
        </p>

        {/* 4 Principles */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-xl font-bold text-[#1e3a5f]">
            4つの基本原則
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.number}
                className="rounded-lg border border-[#d4dbe6] bg-white p-6 transition-colors hover:bg-[#f7f9fc]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a5f] text-sm font-bold text-white">
                    {p.number}
                  </span>
                  <h3 className="text-lg font-bold text-[#1e3a5f]">{p.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section className="mb-12">
          <h2 className="mb-8 text-center text-xl font-bold text-[#1e3a5f]">
            記事制作フロー
          </h2>
          <div className="space-y-6">
            {workflow.map((w, i) => (
              <div key={w.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#e87c3e] text-xs font-bold text-[#e87c3e]">
                    {w.step.replace("STEP ", "")}
                  </span>
                  {i < workflow.length - 1 && (
                    <div className="mt-2 h-full w-0.5 bg-[#d4dbe6]" />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="mb-2 text-lg font-bold text-[#1e3a5f]">
                    {w.step}：{w.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {w.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment */}
        <div className="rounded-lg border border-[#d4dbe6] bg-[#f7f9fc] p-6 text-sm leading-relaxed text-gray-700">
          <h2 className="mb-4 text-lg font-bold text-[#1e3a5f]">
            利用者の皆さまへ
          </h2>
          <p className="mb-3">
            ファクタリングパートナーは、資金調達に課題を抱える事業者の皆さまが安心してファクタリングサービスを比較・検討できるよう、透明性の高い情報提供を続けてまいります。
          </p>
          <p>
            掲載情報の誤りや改善のご提案がございましたら、お問い合わせフォームよりお気軽にご連絡ください。皆さまのご意見を参考に、より良いサービスを目指してまいります。
          </p>
        </div>

        <div className="mt-8 text-right text-sm text-gray-500">
          <p>株式会社MediaX</p>
          <p>ファクタリングパートナー編集部</p>
          <p>制定日：2026年4月13日</p>
        </div>
      </main>
    </>
  );
}
