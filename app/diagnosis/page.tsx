import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import Diagnosis from "./Diagnosis";

export const metadata: Metadata = {
  title: "ファクタリング会社 無料診断｜7つの質問で合う1社を30秒で絞り込み",
  description:
    "7つの質問に答えるだけで、あなたの事業形態・金額・急ぎ度・重視ポイントに合うファクタリング会社を無料で診断。手数料は2026年6月に各社公式サイトで確認した表記に基づきます。登録不要・完全無料。",
  alternates: { canonical: "https://hyogo-shihoushoshi.jp/diagnosis/" },
  openGraph: {
    title: "ファクタリング会社 無料診断｜7つの質問で合う1社を30秒で絞り込み",
    description:
      "7つの質問で、あなたに合うファクタリング会社を無料診断。手数料は各社公式確認値に基づく事実ベースの提案です。",
    url: "https://hyogo-shihoushoshi.jp/diagnosis/",
    type: "website",
    siteName: "ファクタリングパートナー",
    locale: "ja_JP",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "この診断は無料ですか？個人情報の入力は必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "完全無料で、会員登録やメールアドレス等の個人情報の入力は一切不要です。ブラウザ上で7つの質問に答えるだけで結果が表示されます。",
      },
    },
    {
      "@type": "Question",
      name: "診断結果の根拠は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "各社の公式サイトで公開されている事実（手数料は2026年6月に全社公式サイトで確認した表記・入金スピード・対応対象など）に基づいて、あなたの回答との相性を採点しています。広告報酬が診断結果に影響することはありません。詳しくは情報の調査・検証ポリシーをご覧ください。",
      },
    },
    {
      "@type": "Question",
      name: "個人事業主・フリーランスでも診断できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "できます。事業形態の質問で「個人事業主・フリーランス」を選ぶと、個人事業主に対応した会社（1万円の少額から利用できる会社など）を優先して提案します。",
      },
    },
    {
      "@type": "Question",
      name: "診断結果の会社に必ず申し込むべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ。診断結果はあくまで相性の目安です。実際の手数料や審査結果は売掛先の信用力や契約内容によって変わるため、診断結果の会社を含む2〜3社に相見積もりを取って条件を比較することをおすすめします。",
      },
    },
  ],
};

const companyGrid = [
  { name: "ペイトナー", point: "最短10分入金・手数料一律10%" },
  { name: "QuQuMo", point: "手数料1%〜・完全オンライン完結" },
  { name: "ラボル", point: "1万円〜・土日祝も24時間即日振込" },
  { name: "ビートレーディング", point: "買取上限なし・累計9.1万社の業界最大手" },
  { name: "アクセルファクター", point: "審査通過率93.3%を公表" },
  { name: "けんせつくん", point: "建設業特化・手数料2%〜・注文書も対応" },
  { name: "OLTA", point: "手数料2%〜9%と上限を明示" },
  { name: "PAYTODAY", point: "AI審査・最短30分・手数料1%〜9.5%" },
];

export default function DiagnosisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <Breadcrumb items={[{ label: "無料診断" }]} />
      <main className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <h1 className="text-2xl font-bold text-text-main md:text-3xl">
          ファクタリング会社 無料診断
          <span className="mt-2 block text-lg font-semibold text-text-light md:text-xl">
            7つの質問で、あなたに合う1社を30秒で絞り込み
          </span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-text-light">
          事業形態・金額・急ぎ度・重視ポイントを選ぶだけで、当サイトが審査基準で比較している会社の中から相性の良い1社を提案します。登録不要・完全無料。手数料などの根拠は
          <strong className="text-text-main">2026年6月に各社公式サイトで確認した表記</strong>
          のみを使用しています（
          <Link href="/verification-policy/" className="font-semibold text-primary underline">
            調査・検証ポリシー
          </Link>
          ）。
        </p>

        <div className="mt-8">
          <Diagnosis />
        </div>

        <section className="mt-12">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            診断対象の8社と特徴
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {companyGrid.map((c) => (
              <div key={c.name} className="rounded-lg border border-border bg-white p-4">
                <p className="text-sm font-bold text-text-main">{c.name}</p>
                <p className="mt-0.5 text-xs text-text-light">{c.point}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-text-light">
            ※各社の手数料・特徴は2026年6月に公式サイトで確認した表記です。最新の条件は各社公式サイトでご確認ください。
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq) => (
              <details key={faq.name} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-bold text-text-main">
                  <span>
                    <span className="mr-2 text-primary">Q.</span>
                    {faq.name}
                  </span>
                  <span className="text-text-light transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="border-t border-border px-5 pb-4 text-sm leading-relaxed text-text-light">
                  <p className="pt-4">
                    <span className="mr-2 font-bold text-primary">A.</span>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-lg border border-border bg-section-bg p-6 text-center">
          <p className="text-sm font-bold text-text-main">もっと詳しく比較したい方へ</p>
          <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/ranking/" className="btn-cta text-sm">
              おすすめランキング15社を見る
            </Link>
            <Link href="/articles/company-directory/" className="btn-outline text-sm">
              49社+の業者データベースで絞り込む
            </Link>
            <Link href="/simulator/" className="btn-outline text-sm">
              手数料シミュレーターで概算する
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
