import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import Simulator from "./Simulator";

export const metadata: Metadata = {
  title:
    "ファクタリング手数料シミュレーター｜2社間・3社間の概算手数料・入金額を無料計算",
  description:
    "売掛金の金額と契約方式（2社間・3社間）を入力するだけで、ファクタリングの概算手数料と入金額の目安を無料で計算できるシミュレーター。手数料が決まる仕組みや、安く抑えるポイントもあわせて解説します。",
  alternates: { canonical: "https://hyogo-shihoushoshi.jp/simulator/" },
  openGraph: {
    title: "ファクタリング手数料シミュレーター｜2社間・3社間の概算を無料計算",
    description:
      "売掛金額と契約方式を入れるだけで概算手数料・入金額の目安を計算。手数料の仕組みと抑え方も解説。",
    url: "https://hyogo-shihoushoshi.jp/simulator/",
    type: "website",
  },
};

const faqs = [
  {
    question: "ファクタリングの手数料の相場はどれくらいですか？",
    answer:
      "一般的に、2社間ファクタリングは8〜18%程度、3社間ファクタリングは1〜9%程度が目安とされています。手数料は売掛先の信用力・取引金額・契約内容によって変動し、最終的には各社の審査・見積もりで確定します。",
  },
  {
    question: "このシミュレーターの金額は正確ですか？",
    answer:
      "本シミュレーターは一般的な手数料レンジにもとづく「概算の目安」を表示するもので、実際の手数料を保証するものではありません。正確な金額を知るには、複数のファクタリング会社で無料見積もりを取り、条件を比較することをおすすめします。",
  },
  {
    question: "手数料を安く抑えるにはどうすればよいですか？",
    answer:
      "手数料を抑えるポイントとして、信用力の高い売掛先の請求書を使う、3社間ファクタリングを検討する、複数社で相見積もりを取る、オンライン完結型を活用する、などが挙げられます。条件は会社ごとに異なるため、比較が重要です。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function SimulatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumb items={[{ label: "手数料シミュレーター" }]} />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold text-text-main md:text-3xl">
          ファクタリング手数料シミュレーター
        </h1>
        <p className="mt-4 leading-relaxed text-text-light">
          売掛金（請求書）の金額と契約方式を入力するだけで、ファクタリングの<strong>概算手数料</strong>と<strong>入金額の目安</strong>がすぐに分かります。手数料の仕組みを理解したうえで、複数社の比較にお役立てください。
        </p>
        <p className="mt-4 rounded-lg border border-accent/40 bg-[#fff8f2] px-4 py-3 text-sm leading-relaxed text-text-light">
          <strong className="text-accent">ご注意：</strong>手数料は<strong>ファクタリング会社ごとに異なります</strong>（「一律◯%」「◯%〜」など各社で設定）。本シミュレーターは一般的な手数料レンジにもとづく<strong>概算の目安</strong>です。各社の正確な手数料は
          <Link href="/ranking/" className="text-primary underline">おすすめ比較ランキング</Link>
          の各社情報や公式サイトでご確認ください。
        </p>

        <div className="mt-8">
          <Simulator />
        </div>

        {/* 手数料の仕組み */}
        <section className="mt-12">
          <h2 className="border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング手数料が決まる仕組み
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-text-light">
            <p>
              ファクタリングの手数料は、主に<strong>契約方式（2社間／3社間）</strong>と<strong>売掛先の信用力</strong>で大きく変わります。一般的な目安は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">契約方式</th>
                    <th className="px-4 py-3 text-left">手数料の目安</th>
                    <th className="px-4 py-3 text-left">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border bg-white">
                    <td className="px-4 py-3 font-bold text-text-main">2社間</td>
                    <td className="px-4 py-3">8〜18%程度</td>
                    <td className="px-4 py-3 text-text-light">売掛先に知られず利用できるが手数料は高め</td>
                  </tr>
                  <tr className="bg-[#f8fafc]">
                    <td className="px-4 py-3 font-bold text-text-main">3社間</td>
                    <td className="px-4 py-3">1〜9%程度</td>
                    <td className="px-4 py-3 text-text-light">売掛先の承諾が必要だが手数料は低め</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              このほか、事務手数料・債権譲渡登記の費用などが別途かかる場合があります。総額で比較することが大切です。詳しくは
              <Link href="/articles/2sha-vs-3sha/" className="text-primary underline">
                2社間・3社間の違い
              </Link>
              や
              <Link href="/articles/fee-guide/" className="text-primary underline">
                手数料の解説記事
              </Link>
              もあわせてご覧ください。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.question}
                className="rounded-lg border border-border bg-white p-4"
              >
                <summary className="cursor-pointer text-sm font-bold text-text-main">
                  {f.question}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-text-light">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 rounded-xl bg-primary-light p-6 text-center">
          <p className="font-bold text-text-main">
            概算をつかめたら、実際の見積もりは複数社で比較を
          </p>
          <p className="mt-2 text-sm text-text-light">
            手数料は会社ごとに大きく異なります。条件に合う会社を比較して、最も有利な1社を見つけましょう。
          </p>
          <Link href="/ranking/" className="btn-cta mt-5 inline-flex">
            おすすめファクタリング会社の比較を見る
          </Link>
        </section>
      </article>
    </>
  );
}
