"use client";

import { useState } from "react";
import Link from "next/link";

// サイトに既出の一般的な手数料レンジ（目安）に準拠
const RATES = {
  "2sha": { low: 8, high: 18, label: "2社間ファクタリング" },
  "3sha": { low: 1, high: 9, label: "3社間ファクタリング" },
} as const;

type Method = keyof typeof RATES;

const yen = (n: number) => n.toLocaleString("ja-JP");

export default function Simulator() {
  const [amount, setAmount] = useState<number>(1000000);
  const [method, setMethod] = useState<Method>("2sha");

  const r = RATES[method];
  const valid = amount > 0;
  const feeLow = Math.round((amount * r.low) / 100);
  const feeHigh = Math.round((amount * r.high) / 100);
  // 手数料が低い＝入金が多い
  const payoutHigh = amount - feeLow;
  const payoutLow = amount - feeHigh;

  return (
    <div className="rounded-xl border border-border bg-white p-5 md:p-7">
      {/* 入力 */}
      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-bold text-text-main">
            売掛金（請求書）の金額
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              inputMode="numeric"
              min={0}
              step={10000}
              value={amount || ""}
              onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
              className="w-full rounded-lg border border-border px-4 py-3 text-right text-lg font-bold focus:border-primary focus:outline-none"
              placeholder="1000000"
            />
            <span className="shrink-0 text-sm text-text-light">円</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {[300000, 500000, 1000000, 3000000].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setAmount(v)}
                className="rounded-full border border-border px-3 py-1 text-xs text-text-light hover:border-primary hover:text-primary"
              >
                {yen(v)}円
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-text-main">契約方式</label>
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(RATES) as Method[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMethod(m)}
                className={`rounded-lg border px-4 py-3 text-sm font-bold transition-colors ${
                  method === m
                    ? "border-primary bg-primary-light text-primary"
                    : "border-border text-text-light hover:border-primary"
                }`}
              >
                {RATES[m].label}
                <span className="mt-0.5 block text-xs font-normal">
                  手数料の目安 {RATES[m].low}〜{RATES[m].high}%
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 結果 */}
      <div className="mt-6 rounded-xl bg-primary-light p-5">
        <p className="mb-3 text-sm font-bold text-primary">概算結果（目安）</p>
        {valid ? (
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4">
              <p className="text-xs text-text-light">手数料の目安</p>
              <p className="mt-1 text-lg font-bold text-accent md:text-xl">
                {yen(feeLow)}〜{yen(feeHigh)}円
              </p>
              <p className="mt-1 text-xs text-text-light">
                （{r.low}〜{r.high}%）
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <p className="text-xs text-text-light">入金額の目安（手取り）</p>
              <p className="mt-1 text-lg font-bold text-primary md:text-xl">
                {yen(payoutLow)}〜{yen(payoutHigh)}円
              </p>
              <p className="mt-1 text-xs text-text-light">請求額 − 手数料</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-text-light">金額を入力してください。</p>
        )}
        <p className="mt-4 text-xs leading-relaxed text-text-light">
          ※ 上記はあくまで一般的な手数料レンジにもとづく<strong>概算の目安</strong>です。実際の手数料は、売掛先の信用力・取引状況・契約内容によって変動し、各社の審査・見積もりで確定します。正確な金額は複数社で無料見積もりを取り比較してください。
        </p>
      </div>

      <div className="mt-5 text-center">
        <Link href="/ranking/" className="btn-cta inline-flex">
          条件に合うファクタリング会社を比較する
        </Link>
      </div>
    </div>
  );
}
