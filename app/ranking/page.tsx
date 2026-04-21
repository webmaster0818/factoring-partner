import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "【2026年最新】ファクタリング会社おすすめ15選を徹底比較！手数料・入金速度・審査で選ぶ",
  description:
    "ファクタリング会社おすすめ15社を手数料・入金速度・審査通過率・買取可能額・オンライン対応の5項目で徹底比較。法人・個人事業主・フリーランスに最適なファクタリング会社をランキング形式で紹介します。",
  alternates: {
    canonical: "https://factoring-partner.pages.dev/ranking/",
  },
  openGraph: {
    title:
      "【2026年最新】ファクタリング会社おすすめ15選を徹底比較！手数料・入金速度・審査で選ぶ",
    description:
      "ファクタリング会社おすすめ15社を手数料・入金速度・審査通過率・買取可能額・オンライン対応の5項目で徹底比較。",
    url: "https://factoring-partner.pages.dev/ranking/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

interface Company {
  rank: number;
  name: string;
  fee: string;
  speed: string;
  amount: string;
  target: string;
  feature: string;
  description: string;
  merits: string[];
  demerits: string[];
  recommended: string;
  online: string;
  passRate: string;
}

const companies: Company[] = [
  {
    rank: 1,
    name: "ビートレーディング",
    fee: "2%〜",
    speed: "最短2時間",
    amount: "制限なし",
    target: "法人・個人事業主",
    feature: "累計取引9.1万社超の業界最大手",
    description:
      "累計取引社数9.1万社、累計買取額1,300億円超の実績を誇る業界最大手のファクタリング会社です。2社間・3社間の両方に対応し、買取金額に上限がないため、数十万円の少額から数億円の大口案件まで幅広く対応可能。オンライン完結にも対応しており、全国どこからでも利用できます。",
    merits: [
      "累計9.1万社超の取引実績で信頼性が高い",
      "買取金額に制限がなく、少額から大口まで対応",
      "最短2時間のスピード入金が可能",
    ],
    demerits: [
      "手数料の上限が公開されていない",
      "個人事業主は法人と比べて手数料が高くなる場合がある",
    ],
    recommended:
      "実績と信頼性を重視したい法人・個人事業主。大口の資金調達を検討している企業。",
    online: "可能",
    passRate: "非公開",
  },
  {
    rank: 2,
    name: "QuQuMo",
    fee: "1%〜",
    speed: "最短2時間",
    amount: "制限なし",
    target: "法人・個人事業主",
    feature: "手数料1%〜のオンライン完結型",
    description:
      "完全オンライン完結型のファクタリングサービスで、業界最安水準の手数料1%〜を実現。必要書類も請求書と通帳の2点のみで手続きが非常にシンプルです。契約はクラウドサインを利用するため、来店不要で全国から利用可能。入金も最短2時間と迅速に対応してくれます。",
    merits: [
      "業界最安水準の手数料1%〜でコストを抑えられる",
      "必要書類が2点のみで手続きが簡単",
      "完全オンライン完結で来店不要",
    ],
    demerits: [
      "2社間ファクタリングのみ対応（3社間は非対応）",
      "電話サポートの対応時間が限られている",
    ],
    recommended:
      "手数料をできるだけ抑えたい方。オンラインで手軽にファクタリングを利用したい方。",
    online: "完全オンライン",
    passRate: "非公開",
  },
  {
    rank: 3,
    name: "ペイトナー",
    fee: "一律10%",
    speed: "最短10分",
    amount: "1万円〜",
    target: "フリーランス・個人事業主",
    feature: "最短10分入金のフリーランス特化型",
    description:
      "フリーランスや個人事業主に特化したファクタリングサービスです。最大の特徴は業界最速クラスの最短10分入金。手数料は一律10%で分かりやすく、初めての方でも安心して利用できます。請求書をアップロードするだけの簡単操作で、1万円から利用可能です。事業計画書や決算書が不要なのも大きなメリットです。",
    merits: [
      "業界最速クラスの最短10分入金",
      "手数料一律10%で分かりやすい料金体系",
      "事業計画書・決算書が不要で申し込みが簡単",
    ],
    demerits: [
      "手数料が一律10%で少額利用時は割高に感じる場合がある",
      "初回利用時の買取上限額が低い",
    ],
    recommended:
      "とにかく早く資金が必要なフリーランス。初めてファクタリングを利用する個人事業主。",
    online: "完全オンライン",
    passRate: "非公開",
  },
  {
    rank: 4,
    name: "ラボル",
    fee: "一律10%",
    speed: "最短30分",
    amount: "1万円〜",
    target: "フリーランス・個人事業主",
    feature: "土日祝日も24時間即日振込に対応",
    description:
      "フリーランス・個人事業主向けのファクタリングサービスです。最大の特徴は土日祝日を含む24時間365日の即日振込対応。他社では営業日しか入金されない中、休日でも最短30分で入金されるのは大きな強みです。手数料は一律10%、1万円から利用可能で、少額の資金調達にも最適です。",
    merits: [
      "土日祝日含む24時間365日の即日振込対応",
      "1万円から利用可能で少額ニーズにも対応",
      "手数料一律10%で明瞭な料金設定",
    ],
    demerits: [
      "手数料が一律10%で大口利用では割高になる",
      "法人向けの大口案件には不向き",
    ],
    recommended:
      "休日でも急ぎで資金が必要なフリーランス。少額の売掛金を現金化したい個人事業主。",
    online: "完全オンライン",
    passRate: "非公開",
  },
  {
    rank: 5,
    name: "アクセルファクター",
    fee: "2%〜",
    speed: "最短即日",
    amount: "30万円〜1億円",
    target: "法人・個人事業主",
    feature: "審査通過率93.3%の高い通過率",
    description:
      "審査通過率93.3%を公表している数少ないファクタリング会社です。他社で審査に落ちた方でも利用できる可能性が高く、「最後の砦」として知られています。手数料は2%〜と業界標準的ですが、審査通過率の高さを考慮すれば、審査に不安がある方にとっては最良の選択肢となります。",
    merits: [
      "業界トップクラスの審査通過率93.3%",
      "他社で断られた案件でも対応可能",
      "少額30万円から利用でき中小企業にも対応",
    ],
    demerits: [
      "手数料の上限が公開されていない",
      "オンライン完結には非対応の場合がある",
    ],
    recommended:
      "審査に不安がある方や他社で断られた経験がある方。確実に資金調達したい中小企業。",
    online: "一部対応",
    passRate: "93.3%",
  },
  {
    rank: 6,
    name: "日本中小企業金融サポート機構",
    fee: "1.5%〜",
    speed: "最短即日",
    amount: "制限なし",
    target: "法人・個人事業主",
    feature: "一般社団法人運営の高い信頼性",
    description:
      "一般社団法人が運営する非営利型のファクタリングサービスです。営利目的ではないため、手数料1.5%〜と業界最安水準を実現。関東財務局長及び関東経済産業局長の認定経営革新等支援機関にも認定されており、公的な信頼性も抜群です。法人だけでなく個人事業主も利用可能で、買取金額に制限もありません。",
    merits: [
      "一般社団法人運営で営利目的ではない信頼性",
      "手数料1.5%〜と業界最安水準",
      "認定経営革新等支援機関としての公的信頼性",
    ],
    demerits: [
      "知名度が大手と比べるとやや低い",
      "対面での手続きが必要な場合がある",
    ],
    recommended:
      "信頼性を最重視する方。できるだけ低い手数料でファクタリングを利用したい方。",
    online: "可能",
    passRate: "非公開",
  },
  {
    rank: 7,
    name: "OLTA",
    fee: "2%〜9%",
    speed: "最短即日",
    amount: "制限なし",
    target: "法人・個人事業主",
    feature: "AI審査でスピーディなオンライン完結型",
    description:
      "AI審査を導入したクラウドファクタリングのパイオニアです。独自のAI審査により、従来のファクタリングよりも迅速かつ正確な審査を実現。手数料は2%〜9%と上限が明示されており、透明性の高い料金体系が特徴です。三菱UFJ銀行やみずほ銀行などの大手金融機関とも提携しており、信頼性も高いです。",
    merits: [
      "AI審査で迅速・正確な審査を実現",
      "手数料2%〜9%と上限が明示で安心",
      "大手金融機関との提携で信頼性が高い",
    ],
    demerits: [
      "2社間ファクタリングのみ対応",
      "AI審査のため柔軟な審査対応が難しい場合がある",
    ],
    recommended:
      "透明性の高い手数料体系を求める方。テクノロジーを活用した先進的なサービスを利用したい方。",
    online: "完全オンライン",
    passRate: "非公開",
  },
  {
    rank: 8,
    name: "PMG",
    fee: "1%〜",
    speed: "最短即日",
    amount: "50万円〜2億円",
    target: "法人",
    feature: "法人特化・大口案件に強い",
    description:
      "法人に特化したファクタリング会社で、特に大口案件に強みを持っています。買取可能額は50万円〜2億円と幅広く、建設業や運送業など大きな売掛金を持つ業種に多く利用されています。手数料は1%〜と業界最安水準で、専属の担当者が付くため、きめ細かいサポートを受けられます。",
    merits: [
      "手数料1%〜で大口案件ほどお得になる",
      "2億円までの大口案件に対応",
      "専属担当者によるきめ細かいサポート",
    ],
    demerits: [
      "個人事業主は利用できない",
      "少額の案件には対応していない場合がある",
    ],
    recommended:
      "大口の売掛金を持つ法人。建設業・運送業など大きな取引を行う企業。",
    online: "可能",
    passRate: "非公開",
  },
  {
    rank: 9,
    name: "ベストファクター",
    fee: "2%〜",
    speed: "最短即日",
    amount: "30万円〜1億円",
    target: "法人・個人事業主",
    feature: "柔軟な審査と丁寧な対応",
    description:
      "柔軟な審査基準と丁寧な顧客対応で定評のあるファクタリング会社です。手数料は2%〜で、買取可能額は30万円〜1億円。他社で断られた案件にも柔軟に対応してくれるケースが多く、初めてファクタリングを利用する方にも分かりやすく説明してくれます。財務コンサルティングサービスも提供しており、資金繰り全般の相談が可能です。",
    merits: [
      "柔軟な審査基準で他社に断られた案件にも対応",
      "財務コンサルティングも受けられる",
      "丁寧な説明で初めての利用でも安心",
    ],
    demerits: [
      "オンライン完結に対応していない場合がある",
      "入金までに1〜2営業日かかるケースもある",
    ],
    recommended:
      "他社で審査に落ちた経験がある方。資金繰り全般の相談もしたい方。",
    online: "一部対応",
    passRate: "非公開",
  },
  {
    rank: 10,
    name: "トップ・マネジメント",
    fee: "0.5%〜",
    speed: "最短即日",
    amount: "30万円〜3億円",
    target: "法人・個人事業主",
    feature: "手数料0.5%〜の業界最安水準",
    description:
      "手数料0.5%〜と業界最安水準を誇るファクタリング会社です。買取可能額は30万円〜3億円と幅広く、2社間・3社間の両方に対応。東京都に本社を構え、対面での丁寧な対応に定評があります。創業以来の豊富な実績を持ち、様々な業種の企業に利用されています。ゼロファクという補助金申請と組み合わせたサービスも特徴的です。",
    merits: [
      "手数料0.5%〜と業界最安水準",
      "3億円までの大口案件に対応可能",
      "2社間・3社間の両方に対応",
    ],
    demerits: [
      "0.5%の手数料は3社間かつ好条件の場合に限られる",
      "対面での契約が必要なケースがある",
    ],
    recommended:
      "手数料を最小限に抑えたい法人。3社間ファクタリングで低コストを実現したい方。",
    online: "可能",
    passRate: "非公開",
  },
  {
    rank: 11,
    name: "FREENANCE（フリーナンス）",
    fee: "3%〜10%",
    speed: "最短即日",
    amount: "1万円〜",
    target: "フリーランス・個人事業主",
    feature: "GMOグループ運営のフリーランス向け総合サービス",
    description:
      "GMOクリエイターズネットワークが運営するフリーランス向けの総合金融サービスです。ファクタリング（即日払い）に加え、あんしん補償や収納代行サービスも提供。GMOグループの信頼性があり、フリーランスの方が安心して利用できます。請求書を登録するだけで最短即日の入金が可能です。",
    merits: [
      "GMOグループ運営で信頼性が高い",
      "ファクタリング以外の補償サービスも充実",
      "1万円からの少額利用が可能",
    ],
    demerits: [
      "手数料が3%〜10%とやや幅がある",
      "法人向けの大口案件には不向き",
    ],
    recommended:
      "GMOブランドの信頼性を求めるフリーランス。ファクタリング以外の補償も必要な方。",
    online: "完全オンライン",
    passRate: "非公開",
  },
  {
    rank: 12,
    name: "AGビジネスサポート",
    fee: "非公開",
    speed: "最短2日",
    amount: "100万円〜",
    target: "法人",
    feature: "旧アイフルビジネスファイナンス・大口対応",
    description:
      "アイフルグループのビジネスローン・ファクタリングサービスです。旧アイフルビジネスファイナンスから社名変更し、法人向けの資金調達を幅広くサポート。大手消費者金融グループならではの資金力と審査ノウハウを活かし、安定したサービスを提供しています。ファクタリングだけでなくビジネスローンとの併用も可能です。",
    merits: [
      "アイフルグループの信頼性と資金力",
      "ビジネスローンとの柔軟な併用が可能",
      "法人向けの大口案件に対応",
    ],
    demerits: [
      "手数料が公開されていない",
      "最短2日と即日対応が難しい",
    ],
    recommended:
      "アイフルグループの信頼性を求める法人。ファクタリングとビジネスローンを柔軟に使い分けたい方。",
    online: "一部対応",
    passRate: "非公開",
  },
  {
    rank: 13,
    name: "PAYTODAY",
    fee: "1%〜9.5%",
    speed: "最短30分",
    amount: "制限なし",
    target: "法人・個人事業主",
    feature: "AI審査で最短30分入金",
    description:
      "AI審査を導入し、最短30分での入金を実現するオンライン完結型ファクタリングサービスです。手数料は1%〜9.5%と上限が明示されており、安心して利用できます。申し込みから入金まで全てオンラインで完結し、面談も不要。スタートアップや中小企業の利用も多く、急な資金ニーズに迅速に対応してくれます。",
    merits: [
      "AI審査で最短30分のスピード入金",
      "手数料1%〜9.5%と上限明示で安心",
      "完全オンライン完結で面談不要",
    ],
    demerits: [
      "サービス開始からの実績がまだ少ない",
      "電話サポートが限られている",
    ],
    recommended:
      "AIによるスピード審査を求める方。手数料の上限が明示されている安心感を求める方。",
    online: "完全オンライン",
    passRate: "非公開",
  },
  {
    rank: 14,
    name: "マネーフォワード アーリーペイメント",
    fee: "1%〜10%",
    speed: "最短2営業日",
    amount: "数十万円〜数億円",
    target: "法人",
    feature: "マネーフォワードグループ連携の法人向けサービス",
    description:
      "マネーフォワードグループが提供する法人向けファクタリングサービスです。マネーフォワードの会計ソフトとの連携が可能で、既にマネーフォワードを利用している企業にとってはスムーズな申し込みが可能。手数料は1%〜10%で、大手IT企業グループの信頼性があります。審査にはやや時間がかかりますが、その分信頼性の高いサービスを提供しています。",
    merits: [
      "マネーフォワードグループの信頼性",
      "会計ソフトとの連携でスムーズな申し込み",
      "大手企業の売掛金なら低手数料が期待できる",
    ],
    demerits: [
      "最短2営業日と入金に時間がかかる",
      "個人事業主は利用できない",
    ],
    recommended:
      "マネーフォワードの会計ソフトを利用している法人。信頼性の高い大手グループのサービスを求める方。",
    online: "可能",
    passRate: "非公開",
  },
  {
    rank: 15,
    name: "GoodPlus（グッドプラス）",
    fee: "5%〜",
    speed: "最短90分",
    amount: "制限なし",
    target: "法人・個人事業主",
    feature: "最短90分入金のオンライン完結型",
    description:
      "オンライン完結型のファクタリングサービスで、最短90分での入金に対応しています。買取金額に制限がなく、柔軟な対応が特徴。非対面で契約が完結するため、全国どこからでも利用可能です。手数料は5%〜とやや高めですが、スピードとオンライン完結の利便性が魅力です。リピーターには手数料の優遇もあります。",
    merits: [
      "最短90分のスピード入金",
      "買取金額に制限なしで柔軟に対応",
      "リピーターへの手数料優遇制度あり",
    ],
    demerits: [
      "手数料5%〜と最安水準ではない",
      "知名度がまだ低く口コミ情報が少ない",
    ],
    recommended:
      "スピードとオンライン完結の利便性を重視する方。継続利用で手数料を下げたい方。",
    online: "完全オンライン",
    passRate: "非公開",
  },
];

const selectionPoints = [
  {
    title: "手数料の安さ",
    description:
      "ファクタリングの手数料は利益に直結します。2社間ファクタリングでは8%〜18%、3社間では1%〜9%が一般的な相場です。複数社から見積もりを取り、最も条件の良い会社を選びましょう。手数料の下限だけでなく上限も確認することが重要です。",
    icon: "💰",
  },
  {
    title: "入金速度",
    description:
      "急な資金需要に対応するには入金スピードが重要です。最短10分〜即日入金に対応する会社もあれば、2〜3営業日かかる会社もあります。必要な資金のタイミングに合わせて選びましょう。初回利用時は通常よりも時間がかかる点も考慮してください。",
    icon: "⚡",
  },
  {
    title: "審査通過率",
    description:
      "ファクタリングの審査は銀行融資と比べて柔軟ですが、会社によって基準は異なります。審査通過率を公開している会社（例：アクセルファクター93.3%）は透明性が高く安心です。赤字決算や税金滞納があっても利用できる会社もあります。",
    icon: "✅",
  },
  {
    title: "買取可能額",
    description:
      "売掛金の金額に合った買取可能額の会社を選びましょう。フリーランス向けは1万円から対応する一方、法人向けは数十万円〜数億円が一般的です。少額の場合は手数料率が高くなる傾向があるため、最低買取額と手数料のバランスも確認しましょう。",
    icon: "📊",
  },
  {
    title: "オンライン対応",
    description:
      "コロナ禍以降、オンライン完結型のファクタリングサービスが増えています。来店不要で全国から利用でき、手続きも迅速です。対面でのサポートを重視する方は、訪問対応や面談が可能な会社を選ぶと良いでしょう。",
    icon: "🌐",
  },
];

const typeRecommendations = [
  {
    type: "とにかく早く資金が必要な方",
    company: "ペイトナー",
    reason:
      "最短10分入金は業界最速クラス。請求書をアップロードするだけで、審査から入金まで圧倒的なスピードで完了します。急な支払いに最適です。",
    color: "border-accent",
    bg: "bg-orange-50",
  },
  {
    type: "手数料を最小限に抑えたい方",
    company: "QuQuMo",
    reason:
      "手数料1%〜と業界最安水準。オンライン完結で余計なコストもかからず、コストパフォーマンスに優れています。必要書類も2点のみで手続きも簡単です。",
    color: "border-secondary",
    bg: "bg-teal-50",
  },
  {
    type: "法人・大口の資金調達なら",
    company: "ビートレーディング",
    reason:
      "累計取引9.1万社超、買取額制限なし。数億円規模の大口案件にも対応でき、業界最大手の信頼性があります。建設業や運送業など大口取引の多い業種に特におすすめです。",
    color: "border-primary",
    bg: "bg-blue-50",
  },
  {
    type: "フリーランス・個人事業主なら",
    company: "ラボル",
    reason:
      "土日祝日含む24時間365日の即日振込に対応。1万円から利用可能で、少額の売掛金も現金化できます。休日に急な資金需要が生じた場合でも安心です。",
    color: "border-accent",
    bg: "bg-orange-50",
  },
  {
    type: "審査に不安がある方",
    company: "アクセルファクター",
    reason:
      "審査通過率93.3%を公表しており、他社で断られた方でも利用できる可能性が高いです。赤字決算や税金滞納がある場合でも柔軟に対応してくれます。",
    color: "border-secondary",
    bg: "bg-teal-50",
  },
];

const steps = [
  {
    step: 1,
    title: "ファクタリング会社を選ぶ",
    description:
      "手数料、入金速度、買取可能額、対応ターゲットなどを比較し、自分に合ったファクタリング会社を2〜3社ピックアップしましょう。複数社に見積もりを依頼することで、最良の条件を引き出せます。",
  },
  {
    step: 2,
    title: "申し込み・必要書類の提出",
    description:
      "公式サイトから申し込み、必要書類を提出します。一般的に必要な書類は、請求書（売掛金の証明）、本人確認書類、通帳コピー（入金確認用）、登記簿謄本（法人の場合）などです。オンライン完結型なら全てWebでアップロード可能です。",
  },
  {
    step: 3,
    title: "審査",
    description:
      "ファクタリング会社が売掛先の信用力や売掛金の内容を審査します。銀行融資とは異なり、利用者自身の信用情報よりも売掛先の信用力が重視されます。AI審査なら最短数分、通常でも即日〜2営業日で結果が出ます。",
  },
  {
    step: 4,
    title: "契約",
    description:
      "審査通過後、手数料や買取金額などの条件を確認し、契約を締結します。契約内容（手数料率、償還請求権の有無、支払い期日など）をしっかり確認しましょう。オンライン完結型ならクラウドサインなどの電子契約で完了します。",
  },
  {
    step: 5,
    title: "入金",
    description:
      "契約完了後、指定した口座に買取金額が入金されます。最短10分〜即日で入金される会社もあります。その後、売掛金の支払い期日が来たら、2社間の場合は売掛先から入金された代金をファクタリング会社に支払います。",
  },
];

const faqs = [
  {
    question: "ファクタリングとは何ですか？",
    answer:
      "ファクタリングとは、企業やフリーランスが保有する売掛債権（請求書）をファクタリング会社に売却し、支払い期日前に資金化するサービスです。銀行融資と異なり、負債にならないため、バランスシートに影響を与えません。",
  },
  {
    question: "ファクタリングの手数料相場はどれくらいですか？",
    answer:
      "2社間ファクタリングの場合は8%〜18%、3社間ファクタリングの場合は1%〜9%が一般的な相場です。ただし、売掛先の信用力、取引金額、利用回数などによって手数料は変動します。複数社から見積もりを取って比較することをおすすめします。",
  },
  {
    question: "即日入金は本当に可能ですか？",
    answer:
      "はい、多くのファクタリング会社が即日入金に対応しています。ペイトナーなら最短10分、ビートレーディングやQuQuMoなら最短2時間で入金が可能です。ただし、初回利用時は書類確認に時間がかかる場合があるため、余裕を持って申し込むことをおすすめします。",
  },
  {
    question: "個人事業主やフリーランスでも利用できますか？",
    answer:
      "はい、利用できます。ペイトナー、ラボル、FREENANCEなど、フリーランスや個人事業主に特化したサービスも多数あります。1万円から利用可能な会社もあり、少額の売掛金でも資金化が可能です。",
  },
  {
    question: "ファクタリングの審査では何を見られますか？",
    answer:
      "ファクタリングの審査では、主に売掛先（取引先）の信用力が重視されます。利用者自身の信用情報は二次的な要素です。そのため、赤字決算や税金滞納がある場合でも、売掛先の信用力が高ければ審査に通る可能性があります。",
  },
  {
    question: "2社間ファクタリングと3社間ファクタリングの違いは？",
    answer:
      "2社間ファクタリングは利用者とファクタリング会社の2者間で契約し、取引先に知られません。手数料は高めですが、スピーディに利用できます。3社間ファクタリングは取引先も含めた3者間で契約し、手数料は安いですが、取引先の承諾が必要です。",
  },
  {
    question: "ファクタリングは違法ではありませんか？",
    answer:
      "ファクタリング自体は合法的な資金調達手段です。民法第466条で債権譲渡は認められており、2020年の民法改正により債権譲渡禁止特約がある場合でも譲渡が有効になりました。ただし、実質的に貸付と同様のサービスを行う悪徳業者には注意が必要です。",
  },
  {
    question: "ファクタリングを利用すると信用情報に影響しますか？",
    answer:
      "いいえ、ファクタリングは融資ではなく売掛債権の売買（譲渡）であるため、信用情報機関への登録対象外です。そのため、信用情報に傷がつくことはなく、将来の銀行融資やクレジットカード審査にも影響しません。",
  },
  {
    question: "売掛先にファクタリングの利用が知られることはありますか？",
    answer:
      "2社間ファクタリングの場合、売掛先への通知や承諾は不要なため、取引先に知られることはありません。3社間ファクタリングの場合は、売掛先の承諾が必要なため、利用が知られます。取引先との関係を考慮して選択しましょう。",
  },
  {
    question: "悪徳ファクタリング業者の見分け方は？",
    answer:
      "悪徳業者の特徴として、手数料が極端に高い（30%以上）、契約書を作成しない、償還請求権ありの契約を強要する、事務所が存在しない・連絡先が携帯電話のみ、といった点があります。事前に会社情報を調べ、契約内容をしっかり確認しましょう。本記事で紹介している会社は全て実績のある信頼できる会社です。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】ファクタリング会社おすすめ15選を徹底比較！手数料・入金速度・審査で選ぶ",
  description:
    "ファクタリング会社おすすめ15社を手数料・入金速度・審査通過率・買取可能額・オンライン対応の5項目で徹底比較。",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  author: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://factoring-partner.pages.dev/ranking/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* ── Component ────────────────────────────────────── */

export default function RankingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "おすすめランキング" },
        ]}
      />

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-white">
            2026年4月最新
          </p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            ファクタリング会社おすすめ15選を徹底比較！
            <br className="hidden md:block" />
            手数料・入金速度・審査で選ぶ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            手数料・入金速度・審査通過率・買取可能額・オンライン対応の5つの基準で15社を徹底比較。あなたに最適なファクタリング会社が見つかります。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* ── 目次 ─── */}
        <nav className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <p className="mb-4 text-lg font-bold text-text-main">この記事の目次</p>
          <ol className="space-y-2 text-sm text-primary">
            <li>
              <a href="#selection-points" className="hover:underline">
                1. ファクタリング会社の選び方5つのポイント
              </a>
            </li>
            <li>
              <a href="#best15" className="hover:underline">
                2. おすすめファクタリング会社BEST15
              </a>
            </li>
            <li>
              <a href="#comparison" className="hover:underline">
                3. 15社を6つの基準で徹底比較
              </a>
            </li>
            <li>
              <a href="#type-recommendation" className="hover:underline">
                4. タイプ別おすすめファクタリング会社
              </a>
            </li>
            <li>
              <a href="#flow" className="hover:underline">
                5. ファクタリング利用の流れ
              </a>
            </li>
            <li>
              <a href="#industry" className="hover:underline">
                6. 業種別おすすめファクタリング会社
              </a>
            </li>
            <li>
              <a href="#cautions" className="hover:underline">
                7. ファクタリング利用時の注意点
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                8. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* ── 選び方5つのポイント ─── */}
        <section id="selection-points" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング会社の選び方5つのポイント
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリング会社を選ぶ際には、以下の5つのポイントを必ずチェックしましょう。手数料の安さだけでなく、入金スピードや審査通過率、買取可能額、オンライン対応の有無を総合的に比較することで、自分に最適な会社を見つけることができます。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            特に初めてファクタリングを利用する方は、1つの基準だけでなく複数の基準で総合的に判断することが大切です。
          </p>
          <div className="space-y-6">
            {selectionPoints.map((point, index) => (
              <div
                key={point.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      <span className="mr-2">{point.icon}</span>
                      {point.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-light">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BEST15 ─── */}
        <section id="best15" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            おすすめファクタリング会社BEST15
          </h2>

          {/* Quick comparison table */}
          <div className="mb-10 overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  <th className="whitespace-nowrap px-4 py-3 font-semibold">
                    順位
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-semibold">
                    会社名
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-semibold">
                    手数料
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-semibold">
                    入金速度
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-semibold">
                    買取可能額
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-semibold">
                    対応ターゲット
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-semibold">
                    特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c) => (
                  <tr
                    key={c.rank}
                    className="border-t border-border hover:bg-section-bg"
                  >
                    <td className="whitespace-nowrap px-4 py-3 font-bold text-primary">
                      {c.rank}位
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 font-semibold">
                      <a href={`#company-${c.rank}`} className="text-primary hover:underline">
                        {c.name}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">{c.fee}</td>
                    <td className="whitespace-nowrap px-4 py-3">{c.speed}</td>
                    <td className="whitespace-nowrap px-4 py-3">{c.amount}</td>
                    <td className="whitespace-nowrap px-4 py-3">{c.target}</td>
                    <td className="px-4 py-3">{c.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detailed company sections */}
          <div className="space-y-10">
            {companies.map((c) => (
              <article
                key={c.rank}
                id={`company-${c.rank}`}
                className="scroll-mt-8 rounded-lg border border-border bg-white"
              >
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-border bg-section-bg px-6 py-4 rounded-t-lg">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {c.rank}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-main md:text-xl">
                      {c.name}
                    </h3>
                    <p className="text-sm text-text-light">{c.feature}</p>
                  </div>
                </div>

                <div className="p-6">
                  {/* Description */}
                  <p className="mb-6 leading-relaxed text-text-light">
                    {c.description}
                  </p>

                  {/* Spec table */}
                  <div className="mb-6 overflow-hidden rounded-lg border border-border">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-border">
                          <th className="w-1/3 bg-section-bg px-4 py-3 text-left font-semibold text-text-main">
                            手数料
                          </th>
                          <td className="px-4 py-3">{c.fee}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <th className="bg-section-bg px-4 py-3 text-left font-semibold text-text-main">
                            入金速度
                          </th>
                          <td className="px-4 py-3">{c.speed}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <th className="bg-section-bg px-4 py-3 text-left font-semibold text-text-main">
                            買取可能額
                          </th>
                          <td className="px-4 py-3">{c.amount}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <th className="bg-section-bg px-4 py-3 text-left font-semibold text-text-main">
                            対応ターゲット
                          </th>
                          <td className="px-4 py-3">{c.target}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <th className="bg-section-bg px-4 py-3 text-left font-semibold text-text-main">
                            オンライン対応
                          </th>
                          <td className="px-4 py-3">{c.online}</td>
                        </tr>
                        <tr>
                          <th className="bg-section-bg px-4 py-3 text-left font-semibold text-text-main">
                            審査通過率
                          </th>
                          <td className="px-4 py-3">{c.passRate}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Merits / Demerits */}
                  <div className="mb-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-secondary/30 bg-teal-50 p-4">
                      <p className="mb-3 font-bold text-secondary">
                        メリット
                      </p>
                      <ul className="space-y-2 text-sm text-text-light">
                        {c.merits.map((m) => (
                          <li key={m} className="flex items-start gap-2">
                            <span className="mt-0.5 text-secondary">&#10003;</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg border border-accent/30 bg-orange-50 p-4">
                      <p className="mb-3 font-bold text-accent">
                        デメリット
                      </p>
                      <ul className="space-y-2 text-sm text-text-light">
                        {c.demerits.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <span className="mt-0.5 text-accent">&#9650;</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Recommended */}
                  <div className="rounded-lg bg-primary-light p-4">
                    <p className="mb-1 text-sm font-bold text-primary">
                      こんな人におすすめ
                    </p>
                    <p className="text-sm leading-relaxed text-text-light">
                      {c.recommended}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── 6つの基準で徹底比較 ─── */}
        <section id="comparison" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            15社を6つの基準で徹底比較
          </h2>

          {/* 手数料比較 */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-bold text-text-main">
              手数料で比較
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-text-light">
              手数料はファクタリングのコストに直結する最重要項目です。下記の比較表で各社の手数料を確認しましょう。下限が低いほど好条件で利用できる可能性がありますが、実際の手数料は売掛先の信用力や取引金額で変動します。
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-left text-white">
                    <th className="px-4 py-3 font-semibold">会社名</th>
                    <th className="px-4 py-3 font-semibold">手数料</th>
                    <th className="px-4 py-3 font-semibold">評価</th>
                  </tr>
                </thead>
                <tbody>
                  {companies
                    .slice()
                    .sort((a, b) => {
                      const getMin = (s: string) => {
                        const m = s.match(/[\d.]+/);
                        return m ? parseFloat(m[0]) : 99;
                      };
                      return getMin(a.fee) - getMin(b.fee);
                    })
                    .map((c) => (
                      <tr
                        key={c.rank}
                        className="border-t border-border hover:bg-section-bg"
                      >
                        <td className="px-4 py-3 font-semibold">{c.name}</td>
                        <td className="px-4 py-3">{c.fee}</td>
                        <td className="px-4 py-3">
                          {c.fee.startsWith("0") || c.fee.startsWith("1%")
                            ? "★★★★★"
                            : c.fee.startsWith("1")
                              ? "★★★★☆"
                              : c.fee.startsWith("2")
                                ? "★★★★☆"
                                : c.fee.startsWith("3")
                                  ? "★★★☆☆"
                                  : c.fee.includes("一律10%")
                                    ? "★★★☆☆"
                                    : c.fee.startsWith("5")
                                      ? "★★☆☆☆"
                                      : "★★★☆☆"}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 入金速度比較 */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-bold text-text-main">
              入金速度で比較
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-text-light">
              急な資金需要に対応するためには入金スピードが重要です。最短10分のペイトナーから最短2営業日のマネーフォワード アーリーペイメントまで、各社の対応速度に大きな差があります。
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-left text-white">
                    <th className="px-4 py-3 font-semibold">会社名</th>
                    <th className="px-4 py-3 font-semibold">入金速度</th>
                    <th className="px-4 py-3 font-semibold">評価</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "ペイトナー", speed: "最短10分", stars: "★★★★★" },
                    { name: "ラボル", speed: "最短30分", stars: "★★★★★" },
                    { name: "PAYTODAY", speed: "最短30分", stars: "★★★★★" },
                    { name: "GoodPlus", speed: "最短90分", stars: "★★★★☆" },
                    {
                      name: "ビートレーディング",
                      speed: "最短2時間",
                      stars: "★★★★☆",
                    },
                    { name: "QuQuMo", speed: "最短2時間", stars: "★★★★☆" },
                    {
                      name: "アクセルファクター",
                      speed: "最短即日",
                      stars: "★★★☆☆",
                    },
                    {
                      name: "日本中小企業金融サポート機構",
                      speed: "最短即日",
                      stars: "★★★☆☆",
                    },
                    { name: "OLTA", speed: "最短即日", stars: "★★★☆☆" },
                    { name: "PMG", speed: "最短即日", stars: "★★★☆☆" },
                    {
                      name: "ベストファクター",
                      speed: "最短即日",
                      stars: "★★★☆☆",
                    },
                    {
                      name: "トップ・マネジメント",
                      speed: "最短即日",
                      stars: "★★★☆☆",
                    },
                    { name: "FREENANCE", speed: "最短即日", stars: "★★★☆☆" },
                    {
                      name: "AGビジネスサポート",
                      speed: "最短2日",
                      stars: "★★☆☆☆",
                    },
                    {
                      name: "マネーフォワード アーリーペイメント",
                      speed: "最短2営業日",
                      stars: "★★☆☆☆",
                    },
                  ].map((c) => (
                    <tr
                      key={c.name}
                      className="border-t border-border hover:bg-section-bg"
                    >
                      <td className="px-4 py-3 font-semibold">{c.name}</td>
                      <td className="px-4 py-3">{c.speed}</td>
                      <td className="px-4 py-3">{c.stars}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 買取可能額比較 */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-bold text-text-main">
              買取可能額で比較
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-text-light">
              売掛金の金額によって選ぶべきファクタリング会社が変わります。大口案件ならビートレーディングやPMG、少額ならペイトナーやラボルが最適です。
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-left text-white">
                    <th className="px-4 py-3 font-semibold">会社名</th>
                    <th className="px-4 py-3 font-semibold">買取可能額</th>
                    <th className="px-4 py-3 font-semibold">対応ターゲット</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((c) => (
                    <tr
                      key={c.rank}
                      className="border-t border-border hover:bg-section-bg"
                    >
                      <td className="px-4 py-3 font-semibold">{c.name}</td>
                      <td className="px-4 py-3">{c.amount}</td>
                      <td className="px-4 py-3">{c.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 審査通過率比較 */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-bold text-text-main">
              審査通過率で比較
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-text-light">
              審査通過率を公開しているファクタリング会社は少数ですが、アクセルファクターは93.3%と高い通過率を公表しています。審査に不安がある方は、通過率の高い会社を優先して選びましょう。
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-left text-white">
                    <th className="px-4 py-3 font-semibold">会社名</th>
                    <th className="px-4 py-3 font-semibold">審査通過率</th>
                    <th className="px-4 py-3 font-semibold">備考</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border bg-teal-50">
                    <td className="px-4 py-3 font-semibold">
                      アクセルファクター
                    </td>
                    <td className="px-4 py-3 font-bold text-secondary">
                      93.3%
                    </td>
                    <td className="px-4 py-3">
                      業界トップクラスの通過率を公開
                    </td>
                  </tr>
                  {companies
                    .filter((c) => c.passRate === "非公開")
                    .map((c) => (
                      <tr
                        key={c.rank}
                        className="border-t border-border hover:bg-section-bg"
                      >
                        <td className="px-4 py-3 font-semibold">{c.name}</td>
                        <td className="px-4 py-3 text-text-light">非公開</td>
                        <td className="px-4 py-3 text-text-light">-</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* オンライン対応比較 */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-bold text-text-main">
              オンライン対応で比較
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-text-light">
              オンライン完結型のサービスなら来店不要で全国どこからでも利用可能です。忙しい経営者やフリーランスの方には完全オンライン対応の会社がおすすめです。
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-left text-white">
                    <th className="px-4 py-3 font-semibold">会社名</th>
                    <th className="px-4 py-3 font-semibold">オンライン対応</th>
                    <th className="px-4 py-3 font-semibold">来店</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((c) => (
                    <tr
                      key={c.rank}
                      className="border-t border-border hover:bg-section-bg"
                    >
                      <td className="px-4 py-3 font-semibold">{c.name}</td>
                      <td className="px-4 py-3">
                        {c.online === "完全オンライン" ? (
                          <span className="inline-block rounded-full bg-secondary/10 px-3 py-0.5 text-xs font-semibold text-secondary">
                            完全オンライン
                          </span>
                        ) : c.online === "可能" ? (
                          <span className="inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                            オンライン可
                          </span>
                        ) : (
                          <span className="inline-block rounded-full bg-gray-100 px-3 py-0.5 text-xs font-semibold text-text-light">
                            一部対応
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {c.online === "完全オンライン" ? "不要" : "場合により必要"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 対応ターゲット比較 */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-bold text-text-main">
              対応ターゲットで比較
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-text-light">
              ファクタリング会社によって、法人のみ対応、個人事業主も対応、フリーランス特化など対象が異なります。自分の事業形態に合った会社を選びましょう。
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-left text-white">
                    <th className="px-4 py-3 font-semibold">会社名</th>
                    <th className="px-4 py-3 font-semibold text-center">法人</th>
                    <th className="px-4 py-3 font-semibold text-center">
                      個人事業主
                    </th>
                    <th className="px-4 py-3 font-semibold text-center">
                      フリーランス
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((c) => {
                    const t = c.target;
                    const corp =
                      t.includes("法人") && !t.includes("フリーランス");
                    const sole = t.includes("個人事業主");
                    const free = t.includes("フリーランス");
                    const both = t === "法人・個人事業主";
                    return (
                      <tr
                        key={c.rank}
                        className="border-t border-border hover:bg-section-bg"
                      >
                        <td className="px-4 py-3 font-semibold">{c.name}</td>
                        <td className="px-4 py-3 text-center">
                          {corp || both ? (
                            <span className="text-secondary">&#9679;</span>
                          ) : free ? (
                            <span className="text-text-light">-</span>
                          ) : (
                            <span className="text-secondary">&#9679;</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-center">
                          {sole || both || free ? (
                            <span className="text-secondary">&#9679;</span>
                          ) : (
                            <span className="text-text-light">-</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-center">
                          {free ? (
                            <span className="text-secondary">&#9679;</span>
                          ) : (
                            <span className="text-text-light">-</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── タイプ別おすすめ ─── */}
        <section id="type-recommendation" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            タイプ別おすすめファクタリング会社
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリング会社は数多くありますが、利用目的やニーズによって最適な会社は異なります。以下では、よくある5つのニーズ別に最もおすすめの会社を紹介します。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            自分がどのタイプに当てはまるかを確認し、まずは該当する会社に相談してみましょう。
            複数社に見積もりを依頼して比較することで、より良い条件を引き出すことも可能です。
          </p>
          <div className="space-y-6">
            {typeRecommendations.map((rec) => (
              <div
                key={rec.type}
                className={`rounded-lg border-l-4 ${rec.color} ${rec.bg} p-6`}
              >
                <p className="mb-1 text-sm font-bold text-text-light">
                  {rec.type}
                </p>
                <p className="mb-3 text-xl font-bold text-text-main">
                  {rec.company}
                </p>
                <p className="text-sm leading-relaxed text-text-light">
                  {rec.reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 利用の流れ ─── */}
        <section id="flow" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング利用の流れ
          </h2>
          <p className="mb-4 leading-relaxed text-text-light">
            ファクタリングの利用は、以下の5つのステップで進みます。初めての方でも、流れを把握しておけばスムーズに手続きを進めることができます。
          </p>
          <p className="mb-6 leading-relaxed text-text-light">
            オンライン完結型のサービスであれば、申し込みから入金まで全てWeb上で完結します。
            対面型の場合は来店または訪問が必要になる場合がありますので、事前に確認しておきましょう。
          </p>
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div key={s.step} className="relative flex gap-4">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {s.step}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="h-full w-0.5 bg-border" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-text-main">
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-text-light">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 業種別おすすめ ─── */}
        <section id="industry" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            業種別おすすめファクタリング会社
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ファクタリングは業種によって売掛金の金額や支払いサイトが異なるため、業種に合った会社を選ぶことが重要です。以下では主要な業種別におすすめの会社を紹介します。
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-primary">
                建設業・土木業
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-text-light">
                建設業は支払いサイトが60日〜120日と長く、下請け・孫請け構造のため資金繰りが厳しくなりがちです。大口の売掛金が発生するため、買取上限額が大きい会社が適しています。
              </p>
              <div className="rounded bg-section-bg p-3">
                <p className="text-sm font-semibold text-text-main">
                  おすすめ：ビートレーディング、PMG、トップ・マネジメント
                </p>
                <p className="mt-1 text-xs text-text-light">
                  理由：買取金額に制限がない or 数億円対応。建設業の実績も豊富で、大口案件に強い。
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-primary">
                運送業・物流業
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-text-light">
                運送業は燃料費・車両維持費など固定費が高く、売掛金の回収までの間に資金繰りが悪化するケースが多い業種です。月次で安定した売掛金が発生するため、リピート利用で手数料が下がる会社が有利です。
              </p>
              <div className="rounded bg-section-bg p-3">
                <p className="text-sm font-semibold text-text-main">
                  おすすめ：ビートレーディング、アクセルファクター、OLTA
                </p>
                <p className="mt-1 text-xs text-text-light">
                  理由：継続利用で手数料優遇あり。審査通過率が高く安定した資金調達が可能。
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-primary">
                IT・Web制作業
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-text-light">
                IT業界はプロジェクト単位の売掛金が発生し、納品後の支払いまでに時間がかかることがあります。フリーランスのエンジニアやデザイナーも多く、個人でも利用しやすいサービスが求められます。
              </p>
              <div className="rounded bg-section-bg p-3">
                <p className="text-sm font-semibold text-text-main">
                  おすすめ：ペイトナー、ラボル、FREENANCE、QuQuMo
                </p>
                <p className="mt-1 text-xs text-text-light">
                  理由：フリーランス対応、少額から利用可能、オンライン完結で手軽に利用できる。
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-primary">
                製造業
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-text-light">
                製造業は原材料の仕入れや設備投資に多額の資金が必要で、売掛金の回収までの資金ギャップが大きくなりがちです。大口の売掛金を持つことが多いため、手数料の低い会社を選ぶことでコストを抑えられます。
              </p>
              <div className="rounded bg-section-bg p-3">
                <p className="text-sm font-semibold text-text-main">
                  おすすめ：日本中小企業金融サポート機構、PMG、マネーフォワード アーリーペイメント
                </p>
                <p className="mt-1 text-xs text-text-light">
                  理由：手数料が低く大口対応可能。非営利法人や大手グループの信頼性がある。
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-primary">
                医療・介護業
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-text-light">
                医療・介護業は診療報酬・介護報酬の入金まで約2ヶ月かかるため、その間の運転資金が課題となります。売掛先が国保連や社保基金など公的機関のため、信用リスクが低く手数料が安くなる傾向があります。
              </p>
              <div className="rounded bg-section-bg p-3">
                <p className="text-sm font-semibold text-text-main">
                  おすすめ：日本中小企業金融サポート機構、ビートレーディング
                </p>
                <p className="mt-1 text-xs text-text-light">
                  理由：医療報酬ファクタリングに対応。公的機関向け債権で低手数料が期待できる。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 利用時の注意点 ─── */}
        <section id="cautions" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            ファクタリング利用時の注意点
          </h2>
          <p className="mb-6 leading-relaxed text-text-light">
            ファクタリングを安全に利用するために、以下の注意点を必ず確認しましょう。悪徳業者を避け、適正な条件で契約するためのチェックポイントです。
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-text-main">
                1. 契約書の内容を必ず確認する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                契約前に手数料率、償還請求権の有無、支払い条件、遅延時のペナルティなどを必ず確認しましょう。特に「償還請求権あり（リコース）」の契約は、売掛先が支払わない場合に利用者が負担することになるため注意が必要です。正規のファクタリングは原則として「償還請求権なし（ノンリコース）」です。
              </p>
            </div>

            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-text-main">
                2. 複数社から見積もりを取る
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングの手数料は会社によって大きく異なります。同じ売掛債権でも、A社では5%、B社では15%という差が出ることも珍しくありません。必ず2〜3社から見積もりを取り、条件を比較してから契約しましょう。
              </p>
            </div>

            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-text-main">
                3. 悪徳業者の特徴を把握しておく
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリング業界には一部悪質な業者が存在します。手数料が30%以上と極端に高い、契約書を作成しない、事務所が実在しない、担保や保証人を求める、給与ファクタリングを勧めてくるなどの業者には注意しましょう。本記事で紹介している15社は全て実績のある信頼できる会社です。
              </p>
            </div>

            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-text-main">
                4. 利用頻度を見直す
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                ファクタリングは便利な資金調達手段ですが、毎月のように利用すると手数料が累積し、利益を圧迫します。一時的な資金繰りの改善には有効ですが、恒常的に利用する場合は根本的な資金繰りの見直しや銀行融資の検討も必要です。
              </p>
            </div>

            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-2 font-bold text-text-main">
                5. 売掛先との関係を考慮する
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                2社間ファクタリングなら取引先に知られませんが、3社間ファクタリングの場合は取引先の承諾が必要です。取引先によっては「資金繰りが厳しいのか」とネガティブに捉える場合もあるため、取引関係への影響を考慮して契約形態を選びましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ─── */}
        <section id="faq" className="mb-16">
          <h2 className="mb-8 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-text-main">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-text-light transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-text-light">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
          <h2 className="text-xl font-bold md:text-2xl">
            あなたに最適なファクタリング会社を見つけましょう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
            15社の中から、手数料・入金速度・審査通過率・買取可能額・オンライン対応を総合的に比較して、最適な1社を選びましょう。
          </p>
          <Link
            href="/articles/what-is-factoring/"
            className="btn-cta mt-6 text-base"
          >
            ファクタリングの基礎知識を学ぶ
          </Link>
        </section>
      </div>
    </>
  );
}
