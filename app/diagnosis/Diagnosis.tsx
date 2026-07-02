"use client";

import { useState } from "react";
import Link from "next/link";

type Key =
  | "paytner"
  | "ququmo"
  | "labol"
  | "betrading"
  | "accelfactor"
  | "kensetsukun"
  | "olta"
  | "paytoday";

const COMPANIES: Record<
  Key,
  { name: string; tagline: string; href: string; reason: string }
> = {
  paytner: {
    name: "ペイトナー",
    tagline: "最短10分入金・手数料一律10%",
    href: "/reviews/paytner/",
    reason:
      "とにかく早く資金化したいあなたには、最短10分入金のペイトナーが向いています。手数料は一律10%と明快で、少額からスピード重視で使えます（公式表記・2026年6月確認）。",
  },
  ququmo: {
    name: "QuQuMo（ククモ）",
    tagline: "手数料1%〜・完全オンライン完結",
    href: "/reviews/ququmo/",
    reason:
      "手数料をできるだけ抑えたいあなたには、手数料1%〜（上限非公表）で完全オンライン完結のQuQuMoが向いています。見積もりで実際の料率を確認してから判断できます（公式表記・2026年6月確認）。",
  },
  labol: {
    name: "ラボル",
    tagline: "1万円〜・土日祝も24時間即日振込",
    href: "/reviews/labol/",
    reason:
      "フリーランス・個人事業主のあなたには、1万円の少額から使え、土日祝も24時間即日振込に対応するラボルが向いています。手数料は一律10%（税込）と明快です（公式表記・2026年6月確認）。",
  },
  betrading: {
    name: "ビートレーディング",
    tagline: "買取上限なし・累計9.1万社の業界最大手",
    href: "/reviews/betrading/",
    reason:
      "法人で大口の資金調達を考えるあなたには、買取上限がなく累計取引9.1万社の実績を持つビートレーディングが向いています。担当者に相談しながら進めたい方にも適しています（公式表記・2026年6月確認）。",
  },
  accelfactor: {
    name: "アクセルファクター",
    tagline: "審査通過率93.3%を公表",
    href: "/reviews/accelfactor/",
    reason:
      "審査に不安があるあなたには、審査通過率93.3%を公表しているアクセルファクターが向いています。手数料は2社間1.0%〜12.0%・3社間0.5%〜10.5%です（公式表記・2026年6月確認）。",
  },
  kensetsukun: {
    name: "けんせつくん",
    tagline: "建設業特化・手数料2%〜・注文書も対応",
    href: "/reviews/kensetsukun/",
    reason:
      "建設業のあなたには、建設業界に特化し注文書ファクタリングにも対応するけんせつくんが向いています。手数料2%〜で、業界特有の入金サイトの長さに理解があります（公式表記・2026年6月確認）。",
  },
  olta: {
    name: "OLTA（オルタ）",
    tagline: "手数料2%〜9%と上限を明示",
    href: "/reviews/olta/",
    reason:
      "手数料の上限がわからないと不安なあなたには、2%〜9%と上限まで明示しているOLTAが向いています。オンライン完結で、コストの見通しを立てやすいのが特長です（公式表記・2026年6月確認）。",
  },
  paytoday: {
    name: "PAYTODAY",
    tagline: "AI審査・最短30分・手数料1%〜9.5%",
    href: "/reviews/paytoday/",
    reason:
      "オンラインで早く・安く進めたいあなたには、AI審査で最短30分、手数料1%〜9.5%のPAYTODAYが向いています。上限が9.5%と明示されている点も安心材料です（公式表記・2026年6月確認）。",
  },
};

const QUESTIONS: {
  q: string;
  options: { label: string; scores: Partial<Record<Key, number>> }[];
}[] = [
  {
    q: "あなたの事業形態は？",
    options: [
      { label: "法人", scores: { betrading: 2, accelfactor: 1, olta: 1 } },
      { label: "個人事業主・フリーランス", scores: { labol: 2, paytner: 1 } },
      { label: "建設業（法人・一人親方）", scores: { kensetsukun: 2, betrading: 1 } },
    ],
  },
  {
    q: "入金はいつまでに必要ですか？",
    options: [
      { label: "今日〜明日中（最優先で急ぎ）", scores: { paytner: 2, labol: 1, paytoday: 1 } },
      { label: "2〜3日以内", scores: { paytoday: 1, ququmo: 1, betrading: 1 } },
      { label: "1週間以上かけて条件を比較したい", scores: { olta: 1, ququmo: 1, betrading: 1 } },
    ],
  },
  {
    q: "資金化したい売掛金の金額は？",
    options: [
      { label: "〜50万円の少額", scores: { labol: 2, paytner: 1 } },
      { label: "50万〜300万円", scores: { ququmo: 1, paytoday: 1, olta: 1 } },
      { label: "300万円以上の大口", scores: { betrading: 2, accelfactor: 1 } },
    ],
  },
  {
    q: "最も重視するポイントは？",
    options: [
      { label: "手数料の安さ", scores: { ququmo: 2, paytoday: 1 } },
      { label: "手数料上限の明示・コストの見通し", scores: { olta: 2, paytoday: 1 } },
      { label: "入金までのスピード", scores: { paytner: 2, labol: 1 } },
      { label: "審査の通りやすさ", scores: { accelfactor: 2 } },
    ],
  },
  {
    q: "契約までの進め方の希望は？",
    options: [
      { label: "完全オンラインで完結したい", scores: { paytoday: 2, ququmo: 1, olta: 1 } },
      { label: "担当者に相談しながら進めたい", scores: { betrading: 2, accelfactor: 1 } },
      { label: "特にこだわらない", scores: { accelfactor: 1, betrading: 1 } },
    ],
  },
  {
    q: "あなたの業種に近いのは？",
    options: [
      { label: "建設・土木", scores: { kensetsukun: 2 } },
      { label: "IT・Web・サービス", scores: { paytoday: 1, ququmo: 1 } },
      { label: "運送・製造・その他", scores: { betrading: 1, accelfactor: 1 } },
    ],
  },
  {
    q: "申し込みのタイミングは？",
    options: [
      { label: "土日祝にも動きたい", scores: { labol: 2, paytner: 1 } },
      { label: "平日の日中で問題ない", scores: { betrading: 1, olta: 1 } },
      { label: "夜間・早朝でもオンラインで申し込みたい", scores: { labol: 1, paytoday: 1, ququmo: 1 } },
    ],
  },
];

const ZERO: Record<Key, number> = {
  paytner: 0,
  ququmo: 0,
  labol: 0,
  betrading: 0,
  accelfactor: 0,
  kensetsukun: 0,
  olta: 0,
  paytoday: 0,
};

export default function Diagnosis() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<Key, number>>({ ...ZERO });

  const choose = (s: Partial<Record<Key, number>>) => {
    setScores((prev) => {
      const next = { ...prev };
      (Object.keys(s) as Key[]).forEach((k) => (next[k] += s[k] || 0));
      return next;
    });
    setStep((p) => p + 1);
  };

  const reset = () => {
    setScores({ ...ZERO });
    setStep(0);
  };

  const done = step >= QUESTIONS.length;
  const ranked = (Object.keys(scores) as Key[]).sort((a, b) => scores[b] - scores[a]);
  const best = COMPANIES[ranked[0]];
  const second = COMPANIES[ranked[1]];

  if (done) {
    return (
      <div className="rounded-lg border border-border bg-white p-6 md:p-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Your Match</p>
        <p className="mt-3 text-xs text-text-light">あなたの状況と相性が良いのは</p>
        <h3 className="mt-1 text-2xl font-bold text-primary">{best.name}</h3>
        <p className="mt-1 text-sm text-text-light">{best.tagline}</p>
        <p className="mt-4 text-left text-sm leading-relaxed text-text-main">{best.reason}</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={best.href} className="btn-cta text-sm">
            {best.name}の詳細レビューを見る
          </Link>
          <Link href="/ranking/" className="btn-outline text-sm">
            ランキングで全社を比較する
          </Link>
        </div>
        <p className="mt-6 text-left text-xs leading-relaxed text-text-light">
          次点の候補は「{second.name}」（{second.tagline}）です。ファクタリングは
          <strong className="text-text-main">2〜3社に相見積もりを取って条件を比較する</strong>
          のが最も確実です。
          <Link href={second.href} className="ml-1 font-semibold text-primary underline">
            {second.name}のレビューはこちら
          </Link>
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-5 text-xs text-text-light underline hover:text-text-main"
        >
          もう一度診断する
        </button>
        <p className="mt-4 text-left text-xs leading-relaxed text-text-light">
          ※本診断は各社の公式公開情報（手数料は2026年6月に公式サイトで確認）に基づく相性の目安であり、審査結果や実際の手数料を保証するものではありません。手数料は売掛先の信用力・契約内容により変動します。
        </p>
      </div>
    );
  }

  const cur = QUESTIONS[step];
  return (
    <div className="rounded-lg border border-border bg-white p-6 md:p-8">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-bold text-primary">
          質問 {step + 1} / {QUESTIONS.length}
        </p>
        <div className="flex gap-1">
          {QUESTIONS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-6 rounded-full ${i <= step ? "bg-primary" : "bg-border"}`}
            />
          ))}
        </div>
      </div>
      <h3 className="mb-5 text-lg font-bold text-text-main">{cur.q}</h3>
      <div className="space-y-3">
        {cur.options.map((o) => (
          <button
            key={o.label}
            type="button"
            onClick={() => choose(o.scores)}
            className="block w-full rounded-lg border border-border px-5 py-4 text-left text-sm font-medium text-text-main transition-colors hover:border-primary hover:bg-section-bg"
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
