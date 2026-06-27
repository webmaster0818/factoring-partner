// 掲載ファクタリング会社の単一ソース（company-directory と 手数料公表会社一覧で共用）
// 手数料は2026年6月に各社公式サイトで確認した表記。非公開は「非公開／要相談／要確認」と明記。
export type Company = {
  name: string;
  fee: string;
  speed: string;
  amount: string;
  target: string;
  online: string;
  feature: string;
};

export const companies = [
  { name: "ビートレーディング", fee: "2%〜12%", speed: "最短2時間", amount: "制限なし", target: "法人・個人", online: "◎", feature: "累計9.1万社・買取額1,824億円の業界最大手" },
  { name: "QuQuMo（ククモ）", fee: "1%〜", speed: "最短2時間", amount: "制限なし", target: "法人・個人", online: "◎", feature: "手数料1%〜・オンライン完結" },
  { name: "ペイトナー", fee: "一律10%", speed: "最短10分", amount: "1万〜300万円", target: "フリーランス", online: "◎", feature: "最短10分・フリーランス特化" },
  { name: "ラボル", fee: "一律10%", speed: "最短60分", amount: "1万円〜", target: "フリーランス", online: "◎", feature: "24時間365日振込・東証プライム上場子会社" },
  { name: "アクセルファクター", fee: "0.5%〜12.0%", speed: "最短即日", amount: "30万〜1億円", target: "法人・個人", online: "○", feature: "審査通過率93%・柔軟な審査" },
  { name: "日本中小企業金融サポート機構", fee: "1.5%〜", speed: "最短即日", amount: "制限なし", target: "法人・個人", online: "○", feature: "一般社団法人運営・非営利" },
  { name: "OLTA（オルタ）", fee: "2%〜9%", speed: "最短即日", amount: "制限なし", target: "法人・個人", online: "◎", feature: "AI審査・メガバンク提携" },
  { name: "PMG", fee: "2%〜", speed: "最短即日", amount: "50万〜2億円", target: "法人・個人", online: "○", feature: "年間取扱高500億円・大口対応" },
  { name: "ベストファクター", fee: "2%〜", speed: "最短即日", amount: "30万〜1億円", target: "法人・個人", online: "○", feature: "審査通過率92%・資金繰りコンサル" },
  { name: "トップ・マネジメント", fee: "0.5%〜", speed: "最短即日", amount: "30万〜3億円", target: "法人・個人", online: "○", feature: "手数料0.5%〜・注文書ファクタリング対応" },
  { name: "FREENANCE（フリーナンス）", fee: "3%〜10%", speed: "最短即日", amount: "1万円〜", target: "フリーランス", online: "◎", feature: "GMO系・あんしん補償付き" },
  { name: "AGビジネスサポート", fee: "2%〜9.9%", speed: "最短即日", amount: "制限なし", target: "法人・個人", online: "○", feature: "アイフルグループ・事業者ローンも" },
  { name: "みんなのファクタリング", fee: "7%〜15%", speed: "最短60分", amount: "1万〜300万円", target: "法人・個人", online: "◎", feature: "法人売掛金専用・オンライン完結" },
  { name: "GoodPlus", fee: "5%〜15%", speed: "最短90分", amount: "15万〜5,000万円", target: "法人・個人", online: "◎", feature: "最短90分入金・オンライン完結" },
  { name: "PAYTODAY", fee: "1%〜9.5%", speed: "最短30分", amount: "10万円〜上限なし", target: "法人・個人", online: "◎", feature: "AI審査・最短30分入金" },
  { name: "メンターキャピタル", fee: "2%〜", speed: "最短即日", amount: "30万〜2億円", target: "法人・個人", online: "○", feature: "柔軟な審査・幅広い業種対応" },
  { name: "JTC", fee: "1.2%〜10%", speed: "最短即日", amount: "100万〜", target: "法人", online: "○", feature: "法人専門・月間契約100件以上" },
  { name: "ジャパンマネジメント", fee: "3%〜20%", speed: "最短即日", amount: "30万〜5,000万円", target: "法人・個人", online: "○", feature: "福岡・東京2拠点・全国対応" },
  { name: "マネーフォワード アーリーペイメント", fee: "0.5%〜", speed: "最短2営業日", amount: "50万円〜数億円", target: "法人", online: "◎", feature: "マネーフォワード連携・大手企業向け" },
  { name: "GMO BtoB早払い", fee: "1%〜12%", speed: "最短2営業日", amount: "100万円〜1億円", target: "法人", online: "◎", feature: "GMOグループ運営・大企業取引向け" },
  { name: "バイオン", fee: "一律10%", speed: "最短60分", amount: "5万円〜", target: "法人・個人", online: "◎", feature: "AI審査24h365日・少額対応" },
  { name: "えんナビ", fee: "5%", speed: "最短即日", amount: "50万〜5,000万円", target: "法人・個人", online: "○", feature: "24時間対応・土日祝日も相談可" },
  { name: "ファクトル", fee: "1.5%〜", speed: "最短即日", amount: "30万〜1億円", target: "法人・個人", online: "○", feature: "丁寧なサポート・幅広い業種対応" },
  { name: "株式会社No.1", fee: "0.5%〜15%", speed: "最短即日", amount: "50万〜5,000万円", target: "法人・個人", online: "○", feature: "建設・運送業に強い" },
  { name: "うりかけ堂", fee: "2%〜12%", speed: "最短即日", amount: "30万〜5,000万円", target: "法人・個人", online: "○", feature: "業界経験豊富なスタッフ" },
  { name: "けんせつくん", fee: "2%〜", speed: "最短即日", amount: "制限なし", target: "建設業", online: "○", feature: "建設業特化・注文書ファクタリング" },
  { name: "土建くん", fee: "1.8%〜", speed: "最短即日", amount: "制限なし", target: "建設業", online: "○", feature: "建設業特化・一人親方OK" },
  { name: "セゾンファンデックス", fee: "非公開", speed: "最短即日", amount: "要相談", target: "法人", online: "○", feature: "クレディセゾングループ・大手信頼性" },
  { name: "三菱UFJファクター", fee: "非公開", speed: "要確認", amount: "要相談", target: "法人", online: "○", feature: "三菱UFJグループ・3社間専門" },
  { name: "電子請求書早払い", fee: "1%〜6%", speed: "最短2営業日", amount: "要相談", target: "法人", online: "◎", feature: "InfoMart×GMO・電子請求書連携" },
  { name: "SHIKIN+", fee: "1.0%〜10.0%", speed: "最短即日", amount: "制限なし", target: "法人・個人", online: "◎", feature: "オンライン完結・低手数料" },
  { name: "請求QUICK", fee: "非公開", speed: "最短2営業日", amount: "要相談", target: "法人", online: "◎", feature: "SBI新生銀行グループ・大企業向け" },
  { name: "Next One", fee: "1.5%〜8%", speed: "最短即日", amount: "30万〜上限なし", target: "法人・個人", online: "○", feature: "柔軟審査・全国対応" },
  { name: "JPS", fee: "2%〜10%", speed: "最短即日", amount: "10万〜5,000万円", target: "法人・個人", online: "○", feature: "少額対応・個人事業主歓迎" },
  { name: "Finto", fee: "2%〜", speed: "最短即日", amount: "要相談", target: "法人・個人", online: "◎", feature: "オンライン完結・スタートアップ向け" },
  { name: "エーストラスト", fee: "5%〜", speed: "最短即日", amount: "10万〜1億円", target: "法人・個人", online: "○", feature: "柔軟審査・小口対応" },
  { name: "JBL", fee: "2%〜14.9%", speed: "最短即日", amount: "10万〜1億円", target: "法人・個人", online: "○", feature: "首都圏対応・迅速審査" },
  { name: "アルシエ", fee: "3%〜", speed: "最短即日", amount: "10万〜5,000万円", target: "法人・個人", online: "○", feature: "丁寧な対応・中小企業向け" },
  { name: "トラストゲートウェイ", fee: "3%〜", speed: "最短即日", amount: "10万〜1億円", target: "法人・個人", online: "○", feature: "九州拠点・地域密着" },
  { name: "ライジング", fee: "3%〜10%", speed: "最短即日", amount: "10万〜5,000万円", target: "法人・個人", online: "○", feature: "東北・関東対応" },
  { name: "OTTI（オッティ）", fee: "5%〜", speed: "最短即日", amount: "10万〜5,000万円", target: "法人・個人", online: "○", feature: "少額対応・柔軟審査" },
  { name: "MSFJ", fee: "1.8%〜9.8%", speed: "最短即日", amount: "10万〜5,000万円", target: "法人・個人", online: "○", feature: "プランが豊富・低手数料" },
  { name: "ファクタリングのTRY", fee: "5%〜", speed: "最短即日", amount: "10万〜5,000万円", target: "法人・個人", online: "○", feature: "柔軟対応・初回歓迎" },
  { name: "ファクタリングベスト", fee: "非公開", speed: "最短即日", amount: "要相談", target: "法人・個人", online: "◎", feature: "一括見積もり・比較サービス" },
  { name: "ベストペイ", fee: "5%〜", speed: "最短即日", amount: "100万〜3億円", target: "法人", online: "○", feature: "注文書ファクタリング対応" },
  { name: "ファストファクタリング", fee: "5%〜", speed: "最短即日", amount: "要相談", target: "法人・個人", online: "◎", feature: "オンライン完結・スピード重視" },
  { name: "ファクターズ", fee: "3%〜", speed: "最短即日", amount: "30万〜3,000万円", target: "法人・個人", online: "○", feature: "中小企業向け・迅速対応" },
  { name: "ウィット", fee: "5%〜", speed: "最短即日", amount: "30万〜500万円", target: "法人・個人", online: "○", feature: "小口特化・非対面対応" },
  { name: "ファクタリング見直し本舗", fee: "非公開", speed: "最短即日", amount: "要相談", target: "法人・個人", online: "○", feature: "乗り換え相談・手数料改善" },
];

// 手数料が「非公開・要相談・要確認」の会社か
export const isFeeUndisclosed = (c: Company) =>
  ["非公開", "要相談", "要確認"].some((k) => c.fee.includes(k));
