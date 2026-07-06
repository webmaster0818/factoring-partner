import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "【47都道府県】中小企業の資金繰り 公的支援窓口マップ｜よろず支援拠点・信用保証協会 全一覧【2026年】",
  description:
    "47都道府県すべての公的な資金繰り相談窓口を一覧化。無料経営相談の「よろず支援拠点」と融資保証の「信用保証協会」の公式サイトを全県分掲載（2026年7月に全リンク到達確認）。日本政策金融公庫・セーフティネット保証などの全国共通制度もまとめて解説します。",
  alternates: {
    canonical: "https://hyogo-shihoushoshi.jp/articles/zenkoku-shikinguri-shien/",
  },
  openGraph: {
    title: "【47都道府県】中小企業の資金繰り 公的支援窓口マップ",
    description:
      "よろず支援拠点・信用保証協会の公式サイトを47都道府県すべて掲載。2026年7月に全リンク到達確認済み。",
    url: "https://hyogo-shihoushoshi.jp/articles/zenkoku-shikinguri-shien/",
    type: "article",
  },
};

/* ── Data（各URLは公式一覧・公式サイトで2026年7月確認） ─────────── */

type Org = { name: string; url: string };
type PrefRow = { pref: string; yorozu: Org; hosho: Org; extraHosho: Org[]; cities: { slug: string; name: string }[] };
type Region = { region: string; prefs: PrefRow[] };

const REGIONS: Region[] = [
  {
    "region": "北海道・東北",
    "prefs": [
      {
        "pref": "北海道",
        "yorozu": {
          "name": "北海道よろず支援拠点",
          "url": "https://yorozu-hokkaido.go.jp/"
        },
        "hosho": {
          "name": "北海道信用保証協会",
          "url": "http://www.cgc-hokkaido.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "sapporo",
            "name": "札幌"
          }
        ]
      },
      {
        "pref": "青森県",
        "yorozu": {
          "name": "青森県よろず支援拠点",
          "url": "https://www.21aomori.or.jp/yorozu"
        },
        "hosho": {
          "name": "青森県信用保証協会",
          "url": "http://www.cgc-aomori.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "岩手県",
        "yorozu": {
          "name": "岩手県よろず支援拠点",
          "url": "https://iwate-yorozu.jp/"
        },
        "hosho": {
          "name": "岩手県信用保証協会",
          "url": "http://www.cgc-iwate.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "宮城県",
        "yorozu": {
          "name": "宮城県よろず支援拠点",
          "url": "https://yorozu-miyagi.go.jp/"
        },
        "hosho": {
          "name": "宮城県信用保証協会",
          "url": "https://www.miyagi-shinpo.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "sendai",
            "name": "仙台"
          }
        ]
      },
      {
        "pref": "秋田県",
        "yorozu": {
          "name": "秋田県よろず支援拠点",
          "url": "https://akita-yorozu.go.jp/"
        },
        "hosho": {
          "name": "秋田県信用保証協会",
          "url": "https://www.cgc-akita.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "山形県",
        "yorozu": {
          "name": "山形県よろず支援拠点",
          "url": "https://yorozu-yamagata.com/"
        },
        "hosho": {
          "name": "山形県信用保証協会",
          "url": "http://www.ysh.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "福島県",
        "yorozu": {
          "name": "福島県よろず支援拠点",
          "url": "https://fukushima-yorozu.go.jp/"
        },
        "hosho": {
          "name": "福島県信用保証協会",
          "url": "http://www.fukushima-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      }
    ]
  },
  {
    "region": "関東",
    "prefs": [
      {
        "pref": "茨城県",
        "yorozu": {
          "name": "茨城県よろず支援拠点",
          "url": "https://www.ibaraki-yorozu.go.jp/"
        },
        "hosho": {
          "name": "茨城県信用保証協会",
          "url": "https://www.icgc.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "栃木県",
        "yorozu": {
          "name": "栃木県よろず支援拠点",
          "url": "https://tochigi-yorozu.go.jp"
        },
        "hosho": {
          "name": "栃木県信用保証協会",
          "url": "https://www.cgc-tochigi.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "utsunomiya",
            "name": "宇都宮"
          }
        ]
      },
      {
        "pref": "群馬県",
        "yorozu": {
          "name": "群馬県よろず支援拠点",
          "url": "https://www.yorozu-gunma.go.jp/"
        },
        "hosho": {
          "name": "群馬県信用保証協会",
          "url": "https://gunma-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "埼玉県",
        "yorozu": {
          "name": "埼玉県よろず支援拠点",
          "url": "https://saitama-yorozu.go.jp/"
        },
        "hosho": {
          "name": "埼玉県信用保証協会",
          "url": "https://www.cgc-saitama.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "saitama",
            "name": "さいたま"
          }
        ]
      },
      {
        "pref": "千葉県",
        "yorozu": {
          "name": "千葉県よろず支援拠点",
          "url": "https://chibayorozu.go.jp/"
        },
        "hosho": {
          "name": "千葉県信用保証協会",
          "url": "https://www.chiba-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "chiba",
            "name": "千葉"
          }
        ]
      },
      {
        "pref": "東京都",
        "yorozu": {
          "name": "東京都よろず支援拠点",
          "url": "https://tokyoyorozu.go.jp/"
        },
        "hosho": {
          "name": "東京信用保証協会",
          "url": "https://www.cgc-tokyo.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "tokyo",
            "name": "東京"
          }
        ]
      },
      {
        "pref": "神奈川県",
        "yorozu": {
          "name": "神奈川県よろず支援拠点",
          "url": "http://kanagawa-yorozu.go.jp/"
        },
        "hosho": {
          "name": "神奈川県信用保証協会",
          "url": "https://www.cgc-kanagawa.or.jp/"
        },
        "extraHosho": [
          {
            "name": "横浜市信用保証協会",
            "url": "https://www.sinpo-yokohama.or.jp/"
          },
          {
            "name": "川崎市信用保証協会",
            "url": "https://www.cgc-kawasaki.or.jp/"
          }
        ],
        "cities": [
          {
            "slug": "yokohama",
            "name": "横浜"
          },
          {
            "slug": "kawasaki",
            "name": "川崎"
          },
          {
            "slug": "sagamihara",
            "name": "相模原"
          }
        ]
      }
    ]
  },
  {
    "region": "中部",
    "prefs": [
      {
        "pref": "新潟県",
        "yorozu": {
          "name": "新潟県よろず支援拠点",
          "url": "https://www.nico.or.jp/yorozu/"
        },
        "hosho": {
          "name": "新潟県信用保証協会",
          "url": "http://www.niigata-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "niigata",
            "name": "新潟"
          }
        ]
      },
      {
        "pref": "富山県",
        "yorozu": {
          "name": "富山県よろず支援拠点",
          "url": "https://toyama-yorozushien.go.jp/"
        },
        "hosho": {
          "name": "富山県信用保証協会",
          "url": "https://www.cgc-toyama.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "石川県",
        "yorozu": {
          "name": "石川県よろず支援拠点",
          "url": "https://ishikawa-yorozushien.go.jp/"
        },
        "hosho": {
          "name": "石川県信用保証協会",
          "url": "https://www.cgc-ishikawa.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "kanazawa",
            "name": "金沢"
          }
        ]
      },
      {
        "pref": "福井県",
        "yorozu": {
          "name": "福井県よろず支援拠点",
          "url": "https://yorozu-fukui.go.jp/"
        },
        "hosho": {
          "name": "福井県信用保証協会",
          "url": "https://www.cgc-fukui.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "山梨県",
        "yorozu": {
          "name": "山梨県よろず支援拠点",
          "url": "https://yamanashiyorozu.go.jp/"
        },
        "hosho": {
          "name": "山梨県信用保証協会",
          "url": "https://cgc-yamanashi.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "長野県",
        "yorozu": {
          "name": "長野県よろず支援拠点",
          "url": "https://nagano-yorozu.go.jp/"
        },
        "hosho": {
          "name": "長野県信用保証協会",
          "url": "http://www.nagano-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "岐阜県",
        "yorozu": {
          "name": "岐阜県よろず支援拠点",
          "url": "https://www.gifu-yorozushien.go.jp/"
        },
        "hosho": {
          "name": "岐阜県信用保証協会",
          "url": "https://www.cgc-gifu.or.jp/"
        },
        "extraHosho": [
          {
            "name": "岐阜市信用保証協会",
            "url": "http://cgc-gifushi.or.jp/"
          }
        ],
        "cities": [
          {
            "slug": "gifu",
            "name": "岐阜"
          }
        ]
      },
      {
        "pref": "静岡県",
        "yorozu": {
          "name": "静岡県よろず支援拠点",
          "url": "https://shizuoka-yorozu.go.jp/"
        },
        "hosho": {
          "name": "静岡県信用保証協会",
          "url": "https://www.cgc-shizuoka.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "shizuoka",
            "name": "静岡"
          },
          {
            "slug": "hamamatsu",
            "name": "浜松"
          }
        ]
      },
      {
        "pref": "愛知県",
        "yorozu": {
          "name": "愛知県よろず支援拠点",
          "url": "https://www.aibsc.jp/"
        },
        "hosho": {
          "name": "愛知県信用保証協会",
          "url": "https://www.cgc-aichi.or.jp/"
        },
        "extraHosho": [
          {
            "name": "名古屋市信用保証協会",
            "url": "https://www.cgc-nagoya.or.jp/Front/index.aspx"
          }
        ],
        "cities": [
          {
            "slug": "nagoya",
            "name": "名古屋"
          }
        ]
      }
    ]
  },
  {
    "region": "近畿",
    "prefs": [
      {
        "pref": "三重県",
        "yorozu": {
          "name": "三重県よろず支援拠点",
          "url": "https://www.mie-yorozushien.go.jp/"
        },
        "hosho": {
          "name": "三重県信用保証協会",
          "url": "http://www.cgc-mie.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "滋賀県",
        "yorozu": {
          "name": "滋賀県よろず支援拠点",
          "url": "https://yorozushiga.jp/"
        },
        "hosho": {
          "name": "滋賀県信用保証協会",
          "url": "https://www.cgc-shiga.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "京都府",
        "yorozu": {
          "name": "京都府よろず支援拠点",
          "url": "https://kyoto-yorozu.jp/"
        },
        "hosho": {
          "name": "京都信用保証協会",
          "url": "https://kyosinpo.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "kyoto",
            "name": "京都"
          }
        ]
      },
      {
        "pref": "大阪府",
        "yorozu": {
          "name": "大阪府よろず支援拠点",
          "url": "https://www.yorozu-osaka.jp/"
        },
        "hosho": {
          "name": "大阪信用保証協会",
          "url": "https://www.cgc-osaka.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "osaka",
            "name": "大阪"
          },
          {
            "slug": "sakai",
            "name": "堺"
          }
        ]
      },
      {
        "pref": "兵庫県",
        "yorozu": {
          "name": "兵庫県よろず支援拠点",
          "url": "https://web.hyogo-iic.ne.jp/keiei/yorozu"
        },
        "hosho": {
          "name": "兵庫県信用保証協会",
          "url": "https://www.hosyokyokai-hyogo.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "kobe",
            "name": "神戸"
          }
        ]
      },
      {
        "pref": "奈良県",
        "yorozu": {
          "name": "奈良県よろず支援拠点",
          "url": "https://www.nara-sangyoshinko.or.jp/n-yorozu/"
        },
        "hosho": {
          "name": "奈良県信用保証協会",
          "url": "http://www.nara-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "和歌山県",
        "yorozu": {
          "name": "和歌山県よろず支援拠点",
          "url": "https://yorozuw.go.jp/"
        },
        "hosho": {
          "name": "和歌山県信用保証協会",
          "url": "http://www.cgc-wakayama.jp/"
        },
        "extraHosho": [],
        "cities": []
      }
    ]
  },
  {
    "region": "中国",
    "prefs": [
      {
        "pref": "鳥取県",
        "yorozu": {
          "name": "鳥取県よろず支援拠点",
          "url": "https://yorozu-tottori.go.jp/"
        },
        "hosho": {
          "name": "鳥取県信用保証協会",
          "url": "http://www.cgc-tottori.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "島根県",
        "yorozu": {
          "name": "島根県よろず支援拠点",
          "url": "https://www.yorozu-shimane.go.jp/"
        },
        "hosho": {
          "name": "島根県信用保証協会",
          "url": "https://www.shimane-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "岡山県",
        "yorozu": {
          "name": "岡山県よろず支援拠点",
          "url": "https://yorozu-okayama.go.jp/"
        },
        "hosho": {
          "name": "岡山県信用保証協会",
          "url": "https://okayama-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "okayama",
            "name": "岡山"
          }
        ]
      },
      {
        "pref": "広島県",
        "yorozu": {
          "name": "広島県よろず支援拠点",
          "url": "https://www.hiwave.or.jp/organization/yorozu/"
        },
        "hosho": {
          "name": "広島県信用保証協会",
          "url": "http://hiroshima-shinpo.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "hiroshima",
            "name": "広島"
          }
        ]
      },
      {
        "pref": "山口県",
        "yorozu": {
          "name": "山口県よろず支援拠点",
          "url": "https://yorozu-yamaguchi.go.jp/"
        },
        "hosho": {
          "name": "山口県信用保証協会",
          "url": "https://www.yamaguchi-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      }
    ]
  },
  {
    "region": "四国",
    "prefs": [
      {
        "pref": "徳島県",
        "yorozu": {
          "name": "徳島県よろず支援拠点",
          "url": "https://yorozu-tokushima.go.jp/"
        },
        "hosho": {
          "name": "徳島県信用保証協会",
          "url": "https://www.cgc-tokushima.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "香川県",
        "yorozu": {
          "name": "香川県よろず支援拠点",
          "url": "https://www.yorozu-kagawa.go.jp/"
        },
        "hosho": {
          "name": "香川県信用保証協会",
          "url": "https://www.kagawa-cgc.com/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "takamatsu",
            "name": "高松"
          }
        ]
      },
      {
        "pref": "愛媛県",
        "yorozu": {
          "name": "愛媛県よろず支援拠点",
          "url": "https://yorozu-ehime.go.jp/"
        },
        "hosho": {
          "name": "愛媛県信用保証協会",
          "url": "https://www.ehime-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "matsuyama",
            "name": "松山"
          }
        ]
      },
      {
        "pref": "高知県",
        "yorozu": {
          "name": "高知県よろず支援拠点",
          "url": "https://yorozu-kochi.go.jp/"
        },
        "hosho": {
          "name": "高知県信用保証協会",
          "url": "https://www.kochi-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      }
    ]
  },
  {
    "region": "九州・沖縄",
    "prefs": [
      {
        "pref": "福岡県",
        "yorozu": {
          "name": "福岡県よろず支援拠点",
          "url": "https://yorozu-fukuoka.go.jp/"
        },
        "hosho": {
          "name": "福岡県信用保証協会",
          "url": "https://www.fukuoka-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "fukuoka",
            "name": "福岡"
          },
          {
            "slug": "kitakyushu",
            "name": "北九州"
          }
        ]
      },
      {
        "pref": "佐賀県",
        "yorozu": {
          "name": "佐賀県よろず支援拠点",
          "url": "https://yorozu-saga.go.jp/"
        },
        "hosho": {
          "name": "佐賀県信用保証協会",
          "url": "https://www.saga-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "長崎県",
        "yorozu": {
          "name": "長崎県よろず支援拠点",
          "url": "https://www.yorozu-nagasaki.go.jp/"
        },
        "hosho": {
          "name": "長崎県信用保証協会",
          "url": "http://www.cgc-nagasaki.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "熊本県",
        "yorozu": {
          "name": "熊本県よろず支援拠点",
          "url": "https://yorozu-kumamoto.go.jp/"
        },
        "hosho": {
          "name": "熊本県信用保証協会",
          "url": "https://www.kumamoto-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "kumamoto",
            "name": "熊本"
          }
        ]
      },
      {
        "pref": "大分県",
        "yorozu": {
          "name": "大分県よろず支援拠点",
          "url": "https://www.yorozu-oita.go.jp/"
        },
        "hosho": {
          "name": "大分県信用保証協会",
          "url": "http://www.oita-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "宮崎県",
        "yorozu": {
          "name": "宮崎県よろず支援拠点",
          "url": "https://yorozu-miyazaki.go.jp/"
        },
        "hosho": {
          "name": "宮崎県信用保証協会",
          "url": "http://www.miyazaki-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": []
      },
      {
        "pref": "鹿児島県",
        "yorozu": {
          "name": "鹿児島県よろず支援拠点",
          "url": "https://yorozu-kagoshima.jp/"
        },
        "hosho": {
          "name": "鹿児島県信用保証協会",
          "url": "https://www.kagoshima-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "kagoshima",
            "name": "鹿児島"
          }
        ]
      },
      {
        "pref": "沖縄県",
        "yorozu": {
          "name": "沖縄県よろず支援拠点",
          "url": "https://yorozu-okinawa.go.jp/"
        },
        "hosho": {
          "name": "沖縄県信用保証協会",
          "url": "http://www.okinawa-cgc.or.jp/"
        },
        "extraHosho": [],
        "cities": [
          {
            "slug": "naha",
            "name": "那覇"
          }
        ]
      }
    ]
  }
];

const faqs = [
  {
    q: "資金繰りの相談を無料でできる公的窓口はどこですか？",
    a: "国（中小企業庁）が47都道府県すべてに設置している「よろず支援拠点」が代表的です。中小企業・小規模事業者・個人事業主なら何度でも無料で経営相談ができ、資金繰り・売上・創業などの相談に専門コーディネーターが対応します。お住まいの都道府県の拠点はこのページの一覧から公式サイトへ移動できます（各リンクは2026年7月確認）。",
  },
  {
    q: "信用保証協会は何をしてくれる機関ですか？",
    a: "中小企業が銀行など民間金融機関から融資を受ける際に、公的機関として保証人の役割を担う機関です。信用保証協会の保証が付くことで、担保や実績が十分でない中小企業でも融資を受けやすくなります。47都道府県すべてに協会があり、横浜市・川崎市・名古屋市・岐阜市には市の協会もあります（全国信用保証協会連合会の一覧に基づく・2026年7月確認）。",
  },
  {
    q: "公的支援とファクタリングはどう使い分ければよいですか？",
    a: "時間に余裕があるなら、まず金利の低い公的融資（日本政策金融公庫・信用保証協会の保証付き融資）やよろず支援拠点への相談を検討するのが基本です。一方、融資は申込みから入金まで数週間〜1か月程度かかるのが一般的なため、今週中の支払いなど時間がない場面では、売掛金を売却して数時間〜数日で資金化するファクタリングが選択肢になります。併用も可能です。",
  },
  {
    q: "セーフティネット保証とは何ですか？",
    a: "取引先の倒産や災害、業況の悪化など特定の事由で経営に支障が生じている中小企業を対象に、信用保証協会の保証枠を通常とは別枠で用意する制度です（中小企業信用保険法に基づく）。利用には市区町村での認定が必要です。詳細は中小企業庁の公式ページでご確認ください。",
  },
  {
    q: "このページの掲載リンクはどのように確認していますか？",
    a: "よろず支援拠点はよろず支援拠点全国本部（中小機構）の公式一覧、信用保証協会は全国信用保証協会連合会の公式一覧を出典とし、2026年7月に各公式サイトへの到達を個別に確認したうえで掲載しています。組織の統合やサイト移転が生じる場合があるため、リンク切れを見つけた場合は各一覧（出典）をご確認ください。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "【47都道府県】中小企業の資金繰り 公的支援窓口マップ｜よろず支援拠点・信用保証協会 全一覧",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  author: { "@type": "Organization", name: "ファクタリングパートナー編集部" },
  publisher: { "@type": "Organization", name: "ファクタリングパートナー" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hyogo-shihoushoshi.jp/articles/zenkoku-shikinguri-shien/" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section-primary-light py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">公的支援まとめ</p>
          <h1 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
            【47都道府県】中小企業の資金繰り
            <br className="hidden md:block" />
            公的支援窓口マップ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-light md:text-lg">
            無料経営相談の「よろず支援拠点」と融資保証の「信用保証協会」を、47都道府県すべて公式サイトつきで一覧化しました。全リンクは2026年7月に到達確認済みです。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <div className="mb-10 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
          <p className="mb-2 text-sm font-bold text-primary">結論</p>
          <p className="text-sm leading-relaxed text-text-main">
            資金繰りの相談は、<strong>①よろず支援拠点（無料の経営相談・全県設置）→②信用保証協会＋金融機関（保証付き融資）→③日本政策金融公庫（公的融資）</strong>の順で公的窓口をあたるのが基本です。融資までの時間が待てない緊急時は、売掛金を資金化する<Link href="/articles/what-is-factoring/" className="text-primary underline">ファクタリング</Link>が併用の選択肢になります。
          </p>
        </div>

        <p className="mb-10 text-xs text-text-light">
          当サイト（ファクタリングパートナー）は広告（PR）を含む比較情報メディアです。本ページの公的機関の掲載は広告ではなく、各公式一覧に基づいています。
        </p>

        {/* 全国共通の窓口 */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">まず知っておきたい全国共通の制度・窓口</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="font-bold text-text-main">日本政策金融公庫（日本公庫）</p>
              <p className="mt-1 text-sm text-text-light">国の政策金融機関。小規模事業者・中小企業向けの融資制度を全国の支店で取り扱っています。</p>
              <a href="https://www.jfc.go.jp/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-primary underline">公式サイト（2026年7月確認）</a>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="font-bold text-text-main">セーフティネット保証制度（中小企業庁）</p>
              <p className="mt-1 text-sm text-text-light">取引先倒産・災害・業況悪化時に保証枠を別枠で用意する制度。市区町村の認定が必要です。</p>
              <a href="https://www.chusho.meti.go.jp/kinyu/sefu_net_gaiyou.html" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-primary underline">制度概要（2026年7月確認）</a>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="font-bold text-text-main">よろず支援拠点 全国本部（中小機構）</p>
              <p className="mt-1 text-sm text-text-light">47都道府県の拠点一覧の大元。本ページのよろず支援拠点リンクの出典です。</p>
              <a href="https://yorozu.smrj.go.jp/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-primary underline">公式サイト（2026年7月確認）</a>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="font-bold text-text-main">全国信用保証協会連合会</p>
              <p className="mt-1 text-sm text-text-light">全国の信用保証協会の連合組織。本ページの協会リンクの出典です。</p>
              <a href="https://www.zenshinhoren.or.jp/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-primary underline">公式サイト（2026年7月確認）</a>
            </div>
          </div>
        </section>

        {/* 47都道府県マップ */}
        <section className="mb-12">
          <h2 className="mb-2 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">47都道府県の窓口一覧</h2>
          <p className="mb-6 text-sm text-text-light">各リンクは公式サイトに移動します（2026年7月に全リンク到達確認済み）。都市名リンクは当サイトの都市別ファクタリングガイド（各都市の公的支援窓口の詳細つき）です。</p>
          {REGIONS.map((r) => (
            <div key={r.region} className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-primary">{r.region}</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-section-bg text-left">
                      <th className="border border-border px-3 py-2 whitespace-nowrap">都道府県</th>
                      <th className="border border-border px-3 py-2">無料経営相談（よろず支援拠点）</th>
                      <th className="border border-border px-3 py-2">融資保証（信用保証協会）</th>
                      <th className="border border-border px-3 py-2 whitespace-nowrap">当サイトの都市別ガイド</th>
                    </tr>
                  </thead>
                  <tbody>
                    {r.prefs.map((p) => (
                      <tr key={p.pref}>
                        <td className="border border-border px-3 py-2 font-bold whitespace-nowrap">{p.pref}</td>
                        <td className="border border-border px-3 py-2">
                          <a href={p.yorozu.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">{p.yorozu.name}</a>
                        </td>
                        <td className="border border-border px-3 py-2">
                          <a href={p.hosho.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">{p.hosho.name}</a>
                          {p.extraHosho.map((e) => (
                            <span key={e.url}>
                              {" ／ "}
                              <a href={e.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">{e.name}</a>
                            </span>
                          ))}
                        </td>
                        <td className="border border-border px-3 py-2 whitespace-nowrap">
                          {p.cities.length === 0 ? <span className="text-text-light">—</span> : p.cities.map((c, i) => (
                            <span key={c.slug}>
                              {i > 0 && "・"}
                              <Link href={"/articles/" + c.slug + "/"} className="text-primary underline">{c.name}</Link>
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          <p className="text-xs text-text-light">
            出典: よろず支援拠点全国本部「全国のよろず支援拠点一覧」・全国信用保証協会連合会「お近くの信用保証協会」（いずれも2026年7月参照）。茨城県よろず支援拠点のサイトは一部環境からのアクセスを制限している場合があります（掲載URLは全国本部一覧の公式表記）。
          </p>
        </section>

        {/* 使い分け */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">公的支援とファクタリングの使い分け</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-section-bg text-left">
                  <th className="border border-border px-3 py-2">手段</th>
                  <th className="border border-border px-3 py-2">資金化までの目安</th>
                  <th className="border border-border px-3 py-2">向いている場面</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-bold">よろず支援拠点への相談</td>
                  <td className="border border-border px-3 py-2">—（無料相談）</td>
                  <td className="border border-border px-3 py-2">資金繰り改善の方針づくり・使える制度の整理</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-bold">保証付き融資・公庫融資</td>
                  <td className="border border-border px-3 py-2">数週間〜1か月程度が一般的</td>
                  <td className="border border-border px-3 py-2">低コストでまとまった運転資金を確保したい</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-bold">ファクタリング（売掛金の資金化）</td>
                  <td className="border border-border px-3 py-2">最短即日〜数日</td>
                  <td className="border border-border px-3 py-2">入金前の売掛金があり、支払いまで時間がない</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-text-light">
            ファクタリングの仕組みは<Link href="/articles/what-is-factoring/" className="text-primary underline">ファクタリングとは</Link>、緊急時の選択肢は<Link href="/articles/emergency-funding/" className="text-primary underline">即日の資金調達方法</Link>、業者選びは<Link href="/ranking/" className="text-primary underline">おすすめランキング</Link>と<Link href="/diagnosis/" className="text-primary underline">無料診断</Link>をご覧ください。
          </p>
        </section>

        {/* 引用・転載 */}
        <section className="mb-12 rounded-lg border border-border bg-section-bg p-6">
          <h2 className="mb-4 text-lg font-bold text-text-main">本ページの引用・転載について</h2>
          <p className="mb-3 text-sm text-text-light">
            本ページの一覧・図表は、出典リンクを明記いただければ、Webサイト・ブログ・自治体/支援機関の資料でご自由に引用いただけます（改変しての転載はご遠慮ください）。
          </p>
          <p className="mb-2 text-sm font-bold text-text-main">クレジット表記の例</p>
          <pre className="overflow-x-auto rounded bg-white p-3 text-xs text-text-main border border-border">{'出典: ファクタリングパートナー「【47都道府県】中小企業の資金繰り 公的支援窓口マップ」\nhttps://hyogo-shihoushoshi.jp/articles/zenkoku-shikinguri-shien/'}</pre>
          <p className="mb-2 mt-4 text-sm font-bold text-text-main">コピー用HTML</p>
          <pre className="overflow-x-auto rounded bg-white p-3 text-xs text-text-main border border-border">{'<a href="https://hyogo-shihoushoshi.jp/articles/zenkoku-shikinguri-shien/">【47都道府県】中小企業の資金繰り 公的支援窓口マップ（ファクタリングパートナー）</a>'}</pre>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-bold text-text-main">
                  <span className="pr-4">{f.q}</span>
                  <span className="text-primary transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-light">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 関連 */}
        <section className="mb-8">
          <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/articles/area-hub/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">エリア別ファクタリング会社一覧</p>
              <p className="mt-1 text-sm text-text-light">28都市の都市別ガイドへの入口</p>
            </Link>
            <Link href="/articles/vs-subsidy/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリング vs 補助金・助成金</p>
              <p className="mt-1 text-sm text-text-light">公的支援との違いと使い分け</p>
            </Link>
            <Link href="/articles/tsunagi-shikin/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">つなぎ資金の調達方法</p>
              <p className="mt-1 text-sm text-text-light">入金までの数週間を乗り切る選択肢</p>
            </Link>
            <Link href="/articles/factoring-fee-survey-2026/" className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
              <p className="font-bold text-primary">ファクタリング手数料 実態調査2026</p>
              <p className="mt-1 text-sm text-text-light">49社の公式確認値を集計した一次データ</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
