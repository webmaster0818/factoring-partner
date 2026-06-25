"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

// 当サイトに詳細レビューがあり、手数料を2026年6月に公式確認した会社 → レビューへ送客＋確認済バッジ
const REVIEW_SLUG: Record<string, string> = {
  "ビートレーディング": "betrading",
  "QuQuMo（ククモ）": "ququmo",
  "ペイトナー": "paytner",
  "ラボル": "labol",
  "アクセルファクター": "accelfactor",
  "日本中小企業金融サポート機構": "support-org",
  "OLTA（オルタ）": "olta",
  "PMG": "pmg",
  "ベストファクター": "bestfactor",
  "トップ・マネジメント": "top-management",
  "FREENANCE（フリーナンス）": "freenance",
  "AGビジネスサポート": "ag-business",
  "みんなのファクタリング": "minnano",
  "GoodPlus": "goodplus",
  "PAYTODAY": "paytoday",
  "メンターキャピタル": "mentor",
  "JTC": "jtc",
  "ジャパンマネジメント": "japan-management",
  "マネーフォワード アーリーペイメント": "moneyforward",
  "GMO BtoB早払い": "gmo-btob",
  "バイオン": "baion",
  "えんナビ": "ennavi",
  "ファクトル": "factoru",
  "株式会社No.1": "no1",
  "けんせつくん": "kensetsukun",
  "土建くん": "dokenkun",
  "SHIKIN+": "shikinplus",
  "MSFJ": "msfj",
};

type Company = {
  name: string;
  fee: string;
  speed: string;
  amount: string;
  target: string;
  online: string;
  feature: string;
};

const feeMin = (f: string) => {
  const m = f.match(/[\d.]+/);
  return m ? parseFloat(m[0]) : 999;
};
const speedRank = (s: string) => {
  if (s.includes("分")) return 0;
  if (s.includes("時間")) return 1;
  if (s.includes("即日")) return 2;
  if (s.includes("営業日") || s.includes("日")) return 3;
  return 4;
};

const TARGETS = ["すべて", "法人", "個人事業主", "フリーランス"];
const SORTS = [
  { v: "default", label: "標準（掲載順）" },
  { v: "fee", label: "手数料が安い順" },
  { v: "speed", label: "入金が速い順" },
  { v: "name", label: "会社名順" },
];

export default function DirectoryTable({ companies }: { companies: Company[] }) {
  const [q, setQ] = useState("");
  const [target, setTarget] = useState("すべて");
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [feeOpenOnly, setFeeOpenOnly] = useState(false);
  const [confirmedOnly, setConfirmedOnly] = useState(false);
  const [feeMax, setFeeMax] = useState("all");
  const [sort, setSort] = useState("default");

  const rows = useMemo(() => {
    let r = companies.filter((c) => {
      if (q && !c.name.toLowerCase().includes(q.toLowerCase())) return false;
      if (target !== "すべて" && !c.target.includes(target)) return false;
      if (onlineOnly && c.online !== "◎") return false;
      if (feeOpenOnly && (c.fee.includes("非公開") || c.fee.includes("要相談") || c.fee.includes("要確認"))) return false;
      if (confirmedOnly && !REVIEW_SLUG[c.name]) return false;
      if (feeMax !== "all" && feeMin(c.fee) > parseFloat(feeMax)) return false;
      return true;
    });
    if (sort === "fee") r = [...r].sort((a, b) => feeMin(a.fee) - feeMin(b.fee));
    else if (sort === "speed") r = [...r].sort((a, b) => speedRank(a.speed) - speedRank(b.speed));
    else if (sort === "name") r = [...r].sort((a, b) => a.name.localeCompare(b.name, "ja"));
    return r;
  }, [companies, q, target, onlineOnly, feeOpenOnly, confirmedOnly, feeMax, sort]);

  return (
    <div>
      {/* 絞り込みコントロール */}
      <div className="mb-4 rounded-lg border border-border bg-section-bg p-4 md:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-end">
          <div className="md:flex-1">
            <label className="mb-1 block text-xs font-semibold text-text-main">会社名で検索</label>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="例：ビートレーディング"
              className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-text-main">対象</label>
            <div className="flex flex-wrap gap-1.5">
              {TARGETS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTarget(t)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                    target === t ? "bg-primary text-white" : "border border-border bg-white text-text-light hover:border-primary"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-text-main">並び替え</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-md border border-border bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.v} value={s.v}>{s.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-text-main">手数料の下限</label>
            <select
              value={feeMax}
              onChange={(e) => setFeeMax(e.target.value)}
              className="rounded-md border border-border bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none"
            >
              <option value="all">すべて</option>
              <option value="1">1%以下</option>
              <option value="2">2%以下</option>
              <option value="3">3%以下</option>
              <option value="5">5%以下</option>
            </select>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-4">
          <label className="flex items-center gap-2 text-xs text-text-light">
            <input type="checkbox" checked={onlineOnly} onChange={(e) => setOnlineOnly(e.target.checked)} className="accent-primary" />
            オンライン完結（◎）のみ
          </label>
          <label className="flex items-center gap-2 text-xs text-text-light">
            <input type="checkbox" checked={feeOpenOnly} onChange={(e) => setFeeOpenOnly(e.target.checked)} className="accent-primary" />
            手数料が公開されている会社のみ
          </label>
          <label className="flex items-center gap-2 text-xs text-text-light">
            <input type="checkbox" checked={confirmedOnly} onChange={(e) => setConfirmedOnly(e.target.checked)} className="accent-primary" />
            手数料 公式確認済みの会社のみ
          </label>
        </div>
      </div>

      <p className="mb-3 text-sm text-text-light">
        <span className="font-bold text-primary">{rows.length}</span> 社 / 全 {companies.length} 社を表示中
      </p>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm whitespace-nowrap">
          <thead className="bg-primary text-white">
            <tr>
              <th className="sticky left-0 z-10 bg-primary px-4 py-3 text-left font-semibold min-w-[160px]">会社名</th>
              <th className="px-4 py-3 text-left font-semibold min-w-[120px]">手数料</th>
              <th className="px-4 py-3 text-left font-semibold min-w-[100px]">入金速度</th>
              <th className="px-4 py-3 text-left font-semibold min-w-[140px]">買取可能額</th>
              <th className="px-4 py-3 text-center font-semibold min-w-[90px]">対象</th>
              <th className="px-4 py-3 text-center font-semibold min-w-[80px]">オンライン</th>
              <th className="px-4 py-3 text-left font-semibold min-w-[220px]">特徴</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((company, i) => (
              <tr key={company.name} className={`${i % 2 === 0 ? "bg-section-bg" : "bg-white"} hover:bg-blue-50/50 transition-colors`}>
                <td className="sticky left-0 z-10 px-4 py-3 font-semibold text-primary" style={{ backgroundColor: i % 2 === 0 ? "#f7f9fc" : "#ffffff" }}>
                  {REVIEW_SLUG[company.name] ? (
                    <Link href={`/reviews/${REVIEW_SLUG[company.name]}/`} className="text-primary hover:underline">
                      {company.name}
                    </Link>
                  ) : (
                    company.name
                  )}
                  {REVIEW_SLUG[company.name] && (
                    <span className="mt-0.5 block text-[10px] font-bold text-secondary">
                      &#10003; 手数料 公式確認済
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-text-light">{company.fee}</td>
                <td className="px-4 py-3 text-text-light">{company.speed}</td>
                <td className="px-4 py-3 text-text-light">{company.amount}</td>
                <td className="px-4 py-3 text-center text-text-light text-xs">{company.target}</td>
                <td className="px-4 py-3 text-center text-text-light">{company.online}</td>
                <td className="px-4 py-3 text-text-light text-xs">{company.feature}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-sm text-text-light">
                  条件に一致する会社が見つかりませんでした。検索条件を変更してください。
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
