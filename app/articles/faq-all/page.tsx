import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ファクタリングのよくある質問50選｜総合FAQ",
  description:
    "ファクタリングに関するよくある質問50選を基本・手数料・審査・契約・会計・法律・業種別の7カテゴリで網羅的に解説。初心者から経験者まで、ファクタリングの疑問を全て解消します。",
  alternates: {
    canonical:
      "https://hyogo-shihoushoshi.jp/articles/faq-all/",
  },
  openGraph: {
    title: "ファクタリングのよくある質問50選｜総合FAQ",
    description:
      "ファクタリングに関するよくある質問50選を7カテゴリで網羅的に解説。疑問を全て解消します。",
    url: "https://hyogo-shihoushoshi.jp/articles/faq-all/",
    type: "article",
  },
};

/* ── Data ─────────────────────────────────────────── */

interface FaqItem {
  q: string;
  a: string;
  link?: { href: string; text: string };
}

interface FaqCategory {
  title: string;
  id: string;
  items: FaqItem[];
}

const faqCategories: FaqCategory[] = [
  {
    title: "基本",
    id: "basic",
    items: [
      { q: "ファクタリングとは何ですか？", a: "ファクタリングとは、企業が保有する売掛債権（請求書）をファクタリング会社に売却（譲渡）して、支払期日前に現金化する資金調達方法です。融資（借入）ではなく債権の売買なので、負債が増えないのが特徴です。", link: { href: "/articles/what-is-factoring/", text: "ファクタリングとは？" } },
      { q: "2社間ファクタリングと3社間ファクタリングの違いは？", a: "2社間ファクタリングは利用者とファクタリング会社の2者間で行い、売掛先に通知しません。3社間は売掛先も含めた3者間で行い、売掛先の承諾が必要です。2社間は手数料が高め（5〜18%）ですがスピーディー、3社間は手数料が低め（1〜9%）ですが時間がかかります。", link: { href: "/articles/2sha-vs-3sha/", text: "2社間vs3社間の詳細" } },
      { q: "ファクタリングは違法ではないのですか？", a: "ファクタリングは合法的な資金調達方法です。民法第466条で債権譲渡が認められており、2020年の民法改正で譲渡制限特約付きの債権も譲渡が原則有効となりました。ただし、給与ファクタリングは貸金業法に抵触する可能性があり、金融庁が注意喚起しています。", link: { href: "/articles/is-it-legal/", text: "ファクタリングの合法性" } },
      { q: "ファクタリングと融資の違いは何ですか？", a: "ファクタリングは売掛債権の売買（譲渡）で、融資は借入（貸付）です。ファクタリングは負債にならず、信用情報にも影響しません。審査は売掛先の信用力が重視されるため、赤字・債務超過でも利用可能です。一方、融資は金利が低く大口の資金調達に向いています。", link: { href: "/articles/vs-bank-loan/", text: "銀行融資との比較" } },
      { q: "どんな企業がファクタリングを利用していますか？", a: "建設業・運送業・医療・IT・製造業など幅広い業種の中小企業やフリーランスが利用しています。特に、支払いサイトが長い業種や、急な資金需要がある企業、銀行融資の審査に通りにくい創業間もない企業に多く利用されています。", link: { href: "/articles/industry-hub/", text: "業種別ガイド" } },
      { q: "ファクタリングのメリットは何ですか？", a: "主なメリットは、最短即日で資金化できる、審査が柔軟、負債にならない、信用情報に影響しない、担保・保証人が不要の5つです。特に急な資金繰りの改善や、銀行融資が難しい場合の代替手段として有効です。", link: { href: "/articles/what-is-factoring/", text: "メリットの詳細" } },
      { q: "ファクタリングのデメリットは何ですか？", a: "主なデメリットは、手数料がかかる（2〜18%）、売掛金の全額を受け取れない、売掛先の信用力が低いと利用できない場合がある、の3つです。手数料を年利換算すると銀行融資より高くなるため、長期的な資金調達には不向きです。" },
      { q: "ファクタリングは何回でも利用できますか？", a: "はい、売掛債権がある限り何度でも利用できます。リピーターには手数料を優遇する会社も多くあります。ただし、同じ売掛債権を複数のファクタリング会社に売却する「二重譲渡」は違法ですので注意してください。", link: { href: "/articles/double-assignment/", text: "二重譲渡の注意点" } },
    ],
  },
  {
    title: "手数料",
    id: "fee",
    items: [
      { q: "ファクタリングの手数料の相場はどれくらいですか？", a: "2社間ファクタリングの相場は5〜18%、3社間ファクタリングの相場は1〜9%です。売掛先の信用力、売掛金額、支払いサイトの長さ、利用回数などによって変動します。", link: { href: "/articles/fee-guide/", text: "手数料ガイド" } },
      { q: "手数料を安くする方法はありますか？", a: "複数社に見積もりを取る（相見積もり）、3社間ファクタリングを選ぶ、売掛先の信用力が高い請求書を使う、継続利用で交渉する、の4つが効果的です。相見積もりだけで2〜5%下がることもあります。", link: { href: "/articles/fee-negotiation/", text: "手数料交渉のコツ" } },
      { q: "手数料以外にかかる費用はありますか？", a: "会社によっては、審査手数料、事務手数料、登記費用（2社間の場合）、振込手数料、出張費などが別途かかることがあります。「手数料のみ」を明記している会社を選ぶか、総額を事前に確認しましょう。" },
      { q: "手数料の年利換算はどれくらいですか？", a: "例えば手数料10%で支払いサイト60日の場合、年利換算は約60%です。手数料5%で30日サイトなら約60%、手数料2%で60日サイトなら約12%です。銀行融資（年利1〜5%）と比べると高いですが、スピードと柔軟性がメリットです。", link: { href: "/articles/annual-rate/", text: "年利換算の詳細" } },
      { q: "少額のファクタリングは手数料が高くなりますか？", a: "一般的に、少額（10万円以下など）の場合は手数料率が高くなる傾向があります。ただし、ペイトナーやラボルなど少額特化型のサービスは手数料一律10%のため、金額に関わらず同じ料率で利用できます。", link: { href: "/articles/small-amount/", text: "少額ファクタリング" } },
      { q: "大口（1000万円以上）の場合の手数料は？", a: "大口の場合は手数料が1〜5%と低くなるのが一般的です。特に3社間ファクタリングを利用すれば1%台の手数料も可能です。ビートレーディングやPMGなど大手に相談し、必ず相見積もりを取りましょう。", link: { href: "/articles/large-amount/", text: "大口ファクタリング" } },
      { q: "手数料の支払いはいつですか？", a: "手数料は入金時に差し引かれるのが一般的です。例えば100万円の売掛金で手数料10%の場合、90万円が口座に入金されます。別途後払いの会社はほとんどありません。" },
    ],
  },
  {
    title: "審査",
    id: "screening",
    items: [
      { q: "ファクタリングの審査は何を見られますか？", a: "最も重要なのは売掛先（取引先）の信用力です。売掛先の業種・規模・支払い実績が審査の中心になります。利用者自身の信用力は二次的な判断材料で、赤字決算や税金滞納があっても売掛先が信頼できれば審査に通ります。", link: { href: "/articles/screening-criteria/", text: "審査基準の詳細" } },
      { q: "審査に落ちることはありますか？", a: "はい、売掛先の信用力が低い場合（設立間もない・零細企業・過去に支払い遅延がある等）や、売掛債権の実在性に疑いがある場合は審査に落ちることがあります。審査通過率が93%以上の会社もあるため、複数社に申し込むのも有効です。" },
      { q: "赤字決算でもファクタリングは利用できますか？", a: "はい、利用できます。ファクタリングの審査は売掛先の信用力が重視されるため、利用者自身が赤字決算でも問題ありません。実際に多くのファクタリング会社が「赤字OK」を明記しています。", link: { href: "/articles/deficit-ok/", text: "赤字決算での利用" } },
      { q: "税金を滞納していてもファクタリングは利用できますか？", a: "はい、税金滞納中でも利用できるファクタリング会社は多くあります。融資と異なり、納税状況は審査の主要項目ではありません。ただし、滞納額が大きい場合や差し押さえが入っている場合は難しいことがあります。", link: { href: "/articles/tax-arrears/", text: "税金滞納時の利用" } },
      { q: "創業したばかりでもファクタリングは利用できますか？", a: "はい、創業1ヶ月目でも利用できるファクタリング会社があります。売掛先の信用力が審査の中心なので、利用者の事業歴は問われません。ただし、取引実績（請求書の実績）が1件以上必要です。", link: { href: "/articles/startup/", text: "創業期の資金調達" } },
      { q: "審査にはどれくらい時間がかかりますか？", a: "最短10分〜即日が一般的です。オンライン完結型（ペイトナー・ラボル・OLTA等）は最短10分〜2時間、対面型（ビートレーディング・PMG等）は最短即日〜翌営業日です。大口案件や初回利用の場合はやや時間がかかることがあります。", link: { href: "/articles/easy-screening/", text: "審査が早い会社" } },
      { q: "個人事業主やフリーランスでも審査に通りますか？", a: "はい、個人事業主・フリーランス向けのファクタリングサービスが多数あります。ペイトナー・ラボル・フリーナンスなど、個人事業主特化型のサービスは審査も柔軟です。法人向けのサービスでも個人事業主に対応している会社があります。", link: { href: "/articles/for-freelance/", text: "フリーランス向け" } },
    ],
  },
  {
    title: "契約",
    id: "contract",
    items: [
      { q: "ファクタリングの契約に必要な書類は何ですか？", a: "一般的に、請求書（売掛債権の証拠）、身分証明書、通帳のコピー（入金口座確認用）、決算書（法人の場合）が必要です。オンライン型のサービスでは請求書と身分証明書だけで申し込めるものもあります。", link: { href: "/articles/required-documents/", text: "必要書類の詳細" } },
      { q: "契約書で確認すべきポイントは何ですか？", a: "償還請求権の有無（ノンリコースかどうか）、手数料以外の費用の有無、債権譲渡通知の有無、契約解除条件、支払い遅延時のペナルティ、の5点は必ず確認しましょう。不明点は契約前に質問してください。", link: { href: "/articles/contract-checklist/", text: "契約チェックリスト" } },
      { q: "償還請求権（リコース）とは何ですか？", a: "償還請求権とは、売掛先が支払いを行わなかった場合に、ファクタリング会社が利用者に代金を請求する権利です。償還請求権ありは「ウィズリコース」、なしは「ノンリコース」と呼ばれます。ノンリコースの場合、売掛先の倒産リスクはファクタリング会社が負います。", link: { href: "/articles/glossary/", text: "用語集で詳しく" } },
      { q: "債権譲渡登記は必要ですか？", a: "2社間ファクタリングの場合、債権譲渡登記が必要になるケースがあります。登記費用は数万円〜10万円程度です。3社間ファクタリングでは売掛先の承諾があるため、登記は不要な場合がほとんどです。", link: { href: "/articles/debt-registration/", text: "債権譲渡登記の詳細" } },
      { q: "売掛先に知られずにファクタリングを利用できますか？", a: "2社間ファクタリングであれば、売掛先に通知せずに利用できます。ただし、債権譲渡登記を行う場合は、登記簿を調べれば判明する可能性があります。完全に秘密にしたい場合は、登記不要のサービスを選びましょう。" },
      { q: "オンラインで契約は完結しますか？", a: "はい、多くのファクタリング会社がオンライン完結に対応しています。クラウドサイン等の電子契約サービスを使って、来店不要で契約まで完結します。ペイトナー・ラボル・OLTAなどは完全オンライン対応です。", link: { href: "/articles/online-factoring/", text: "オンラインファクタリング" } },
      { q: "契約後のキャンセルはできますか？", a: "ファクタリング会社によって対応が異なります。入金前であればキャンセル可能な会社が多いですが、入金後のキャンセルは原則として難しいです。契約前にキャンセルポリシーを確認しておきましょう。" },
    ],
  },
  {
    title: "会計",
    id: "accounting",
    items: [
      { q: "ファクタリングの仕訳はどうしますか？", a: "ファクタリング利用時の仕訳は、売掛金を減少させ、現金（預金）と売上債権売却損（手数料分）を計上します。例：100万円の売掛金を手数料10%で売却 → 預金90万円/売掛金100万円（差額10万円は売上債権売却損）。", link: { href: "/articles/accounting/", text: "会計処理の詳細" } },
      { q: "ファクタリングの手数料は経費になりますか？", a: "はい、ファクタリングの手数料は「売上債権売却損」として経費（損金）に計上できます。消費税は非課税取引に該当するため、手数料に消費税はかかりません。", link: { href: "/articles/expense/", text: "経費計上の詳細" } },
      { q: "ファクタリングに消費税はかかりますか？", a: "ファクタリング（債権譲渡）は非課税取引です。そのため、手数料に消費税は上乗せされません。もし手数料に消費税を加算している会社があれば、悪質な業者の可能性があるため注意してください。", link: { href: "/articles/consumption-tax/", text: "消費税の取り扱い" } },
      { q: "確定申告でファクタリングの利用はどう申告しますか？", a: "売上として計上した売掛金を現金化しただけなので、売上の二重計上は不要です。手数料分を「売上債権売却損」として経費計上します。個人事業主の場合、確定申告書の必要経費に含めます。" },
      { q: "ファクタリングは決算書にどう影響しますか？", a: "ファクタリングは負債ではなく売掛債権の売買なので、借入金が増えません。売掛金が減少し、現金が増加するため、流動比率が改善します。バランスシートをスリムにする効果があり、銀行融資の審査にもプラスに働きます。" },
      { q: "売掛金の入金期日前にファクタリングを利用した場合の税務処理は？", a: "売掛金の発生時点で売上を計上している場合、ファクタリングの利用は売掛金の回収手段の変更に過ぎないため、売上の再計上は不要です。手数料のみを売上債権売却損として計上します。" },
      { q: "決算期をまたぐファクタリングの処理はどうしますか？", a: "売掛金の売却時点で処理を行います。前期の売掛金を当期にファクタリングで売却した場合、当期の損益に売上債権売却損を計上します。売掛金の計上時期と売却時期が異なることは問題ありません。" },
    ],
  },
  {
    title: "法律",
    id: "law",
    items: [
      { q: "ファクタリングに関する法律は何がありますか？", a: "民法第466条（債権譲渡）が根拠法です。2020年4月施行の改正民法により、譲渡制限特約付きの債権も原則として譲渡が有効になりました。また、ファクタリング会社は貸金業登録は不要ですが、一部の形態は貸金業法の規制対象となる場合があります。" },
      { q: "悪質なファクタリング会社の見分け方は？", a: "手数料が30%以上、保証金や予約金を要求、契約書を渡さない、事務所の所在地が不明、電話番号がフリーダイヤルのみ、といった特徴がある場合は悪質業者の可能性があります。金融庁の注意喚起ページも参考にしてください。", link: { href: "/articles/troubles/", text: "トラブル事例と対策" } },
      { q: "給与ファクタリングは合法ですか？", a: "給与ファクタリングは実質的に貸付にあたるとされ、貸金業登録なしで行うことは違法です。2020年に金融庁が注意喚起を出しており、利用は推奨されません。通常の売掛債権ファクタリングとは全く異なりますのでご注意ください。", link: { href: "/articles/salary-factoring-illegal/", text: "給与ファクタリングの違法性" } },
      { q: "下請法とファクタリングの関係は？", a: "元請けが下請けの売掛債権をファクタリングすることを禁止する規定はありませんが、元請けが支払いを遅延させてファクタリングを強要することは下請法違反になる可能性があります。", link: { href: "/articles/subcontract-law/", text: "下請法との関係" } },
      { q: "二重譲渡するとどうなりますか？", a: "同じ売掛債権を複数のファクタリング会社に売却する「二重譲渡」は詐欺罪に該当する可能性があります。発覚した場合、刑事責任を問われるだけでなく、損害賠償請求を受けることもあります。絶対に行わないでください。", link: { href: "/articles/double-assignment/", text: "二重譲渡の注意点" } },
      { q: "ファクタリング会社が倒産したらどうなりますか？", a: "ファクタリング会社が倒産しても、利用者がすでに入金を受けている場合は返金義務は原則ありません。ただし、売掛先への回収業務が混乱する可能性があるため、信頼できる大手のファクタリング会社を選ぶことが重要です。" },
      { q: "ファクタリングの契約でトラブルが起きた場合の相談先は？", a: "弁護士、消費者ホットライン（188）、最寄りの消費生活センター、金融庁の相談窓口などに相談できます。契約書をしっかり保管し、やり取りの記録を残しておくことが重要です。", link: { href: "/articles/troubles/", text: "トラブル対策" } },
    ],
  },
  {
    title: "業種別",
    id: "industry",
    items: [
      { q: "建設業でファクタリングを利用するメリットは？", a: "建設業は支払いサイトが60〜120日と長く、材料費や外注費の先行支出が大きいため、ファクタリングとの相性が非常に良い業種です。出来高払いの売掛金や注文書段階でも利用できるサービスがあります。", link: { href: "/articles/construction/", text: "建設業向けガイド" } },
      { q: "医療・介護でファクタリングを利用する場合の特徴は？", a: "医療・介護では診療報酬債権・介護報酬債権をファクタリングに利用します。売掛先が国保連など公的機関のため信用力が高く、手数料が1〜5%と低めに設定されるのが大きなメリットです。", link: { href: "/articles/medical/", text: "医療向けガイド" } },
      { q: "IT業界・フリーランスエンジニアにおすすめのファクタリングは？", a: "IT業界ではオンライン完結型のサービスが人気です。ペイトナー・ラボル・フリーナンスなど、請求書をアップロードするだけで利用できるサービスが便利です。SES契約の請求書にも対応しています。", link: { href: "/articles/it-industry/", text: "IT業界向けガイド" } },
      { q: "製造業でファクタリングを利用する際の注意点は？", a: "製造業は取引単価が大きいため、大口対応のファクタリング会社を選ぶことが重要です。また、原材料費の仕入れサイクルに合わせて定期的にファクタリングを利用する場合は、継続利用割引がある会社がおすすめです。", link: { href: "/articles/manufacturing/", text: "製造業向けガイド" } },
      { q: "飲食業でもファクタリングは利用できますか？", a: "はい、クレジットカード決済の売上債権やケータリング・法人向け弁当などのBtoB取引の売掛金があれば利用可能です。ただし、個人消費者への現金売上はファクタリングの対象にならないため、BtoB取引がある飲食店に限られます。", link: { href: "/articles/restaurant/", text: "飲食業向けガイド" } },
      { q: "運送業でファクタリングを利用するメリットは？", a: "運送業は燃料費・車両維持費・人件費の先行支出が大きく、荷主からの入金まで30〜60日かかるため、ファクタリングが有効です。荷主が大手企業であれば手数料も低く抑えられます。", link: { href: "/articles/transport/", text: "運送業向けガイド" } },
      { q: "個人事業主でも法人向けファクタリングは利用できますか？", a: "法人向けのファクタリング会社でも個人事業主に対応しているケースが多くあります。ビートレーディング・アクセルファクター・日本中小企業金融サポート機構などは法人・個人事業主の両方に対応しています。", link: { href: "/articles/for-sole-proprietor/", text: "個人事業主向け" } },
    ],
  },
];

/* structured data用に最初の5件を使う */
const schemaFaqs = faqCategories.flatMap((c) => c.items).slice(0, 5);

/* ── Structured Data ──────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article", image: "https://hyogo-shihoushoshi.jp/og-image.png",
      headline: "ファクタリングのよくある質問50選｜総合FAQ",
      datePublished: "2026-04-28",
      dateModified: "2026-04-28",
      author: { "@type": "Person", name: "ファクタリングパートナー 編集部", url: "https://hyogo-shihoushoshi.jp/about/" },
      publisher: {
        "@type": "Organization",
        name: "ファクタリングパートナー",
        url: "https://hyogo-shihoushoshi.jp",
      },
      description:
        "ファクタリングに関するよくある質問50選を7カテゴリで網羅的に解説。",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://hyogo-shihoushoshi.jp/articles/faq-all/",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: schemaFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://hyogo-shihoushoshi.jp/" },
        { "@type": "ListItem", position: 2, name: "コラム", item: "https://hyogo-shihoushoshi.jp/articles/" },
        { "@type": "ListItem", position: 3, name: "ファクタリングのよくある質問50選" },
      ],
    },
  ],
};

/* ── Page ─────────────────────────────────────────── */

export default function FaqAllPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Breadcrumb
          items={[
            { href: "/", label: "ホーム" },
            { href: "/articles/", label: "コラム" },
            { label: "ファクタリングのよくある質問50選" },
          ]}
        />

        <h1 className="mb-6 text-2xl font-bold text-[#1e3a5f] md:text-3xl">
          ファクタリングのよくある質問50選
        </h1>

        <p className="mb-8 text-base leading-relaxed text-gray-700">
          ファクタリングについてよく寄せられる質問を50個厳選し、基本・手数料・審査・契約・会計・法律・業種別の7カテゴリに分けて回答しています。初めてファクタリングを検討する方から、すでに利用経験がある方まで、疑問を解消できる総合FAQページです。
        </p>

        {/* ── 目次 ─── */}
        <nav className="mb-10 rounded-lg border border-[#d4dbe6] bg-white p-6">
          <h2 className="mb-4 text-base font-bold text-[#1e3a5f]">カテゴリ別目次</h2>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex items-center gap-2 rounded-lg border border-[#d4dbe6] px-3 py-2 text-sm font-semibold text-[#1e3a5f] hover:bg-[#f7f9fc] transition-colors"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e87c3e] text-xs font-bold text-white">
                  {cat.items.length}
                </span>
                {cat.title}
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            全{faqCategories.reduce((sum, c) => sum + c.items.length, 0)}問のFAQを掲載しています。
          </p>
        </nav>

        {/* ── FAQ カテゴリ別 ─── */}
        {faqCategories.map((cat, catIdx) => (
          <section key={cat.id} id={cat.id} className="mb-12">
            <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
              {cat.title}に関する質問（{cat.items.length}問）
            </h2>
            <div className="space-y-3">
              {cat.items.map((faq, i) => {
                const num = faqCategories.slice(0, catIdx).reduce((s, c) => s + c.items.length, 0) + i + 1;
                return (
                  <details
                    key={i}
                    className="group rounded-lg border border-[#d4dbe6] bg-white"
                  >
                    <summary className="cursor-pointer px-5 py-4 text-sm font-bold text-[#1e3a5f] group-open:border-b group-open:border-[#d4dbe6]">
                      <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1e3a5f] text-xs text-white">
                        {num}
                      </span>
                      {faq.q}
                    </summary>
                    <div className="px-5 py-4">
                      <p className="text-sm leading-relaxed text-gray-700">
                        {faq.a}
                      </p>
                      {faq.link && (
                        <Link
                          href={faq.link.href}
                          className="mt-3 inline-block text-xs font-semibold text-[#e87c3e] hover:underline"
                        >
                          {faq.link.text} →
                        </Link>
                      )}
                    </div>
                  </details>
                );
              })}
            </div>
          </section>
        ))}

        {/* ── カテゴリ別まとめ ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            カテゴリ別のポイントまとめ
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-5">
              <h3 className="mb-2 font-bold text-[#2a7a6e]">基本について</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                ファクタリングは売掛債権の売買であり、融資ではありません。2社間と3社間の違いを理解し、自社に合った方式を選ぶことが重要です。民法で認められた合法的な資金調達方法であり、何度でも利用可能です。
              </p>
            </div>
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-5">
              <h3 className="mb-2 font-bold text-[#2a7a6e]">手数料について</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                手数料の相場は2社間で5〜18%、3社間で1〜9%です。相見積もりや3社間の活用で手数料を抑えられます。手数料以外の隠れた費用がないか事前に確認しましょう。年利換算すると銀行融資より高いため、長期的な利用は注意が必要です。
              </p>
            </div>
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-5">
              <h3 className="mb-2 font-bold text-[#2a7a6e]">審査について</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                審査の中心は売掛先の信用力です。自社が赤字・税金滞納・創業間もない状態でも、売掛先が信頼できれば審査に通ります。審査時間は最短10分〜即日が一般的です。個人事業主・フリーランスでも利用可能なサービスが多数あります。
              </p>
            </div>
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-5">
              <h3 className="mb-2 font-bold text-[#2a7a6e]">契約について</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                契約書では償還請求権の有無、手数料以外の費用、債権譲渡通知の有無を必ず確認しましょう。2社間なら売掛先に知られずに利用できます。オンライン完結型なら来店不要で契約まで可能です。
              </p>
            </div>
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-5">
              <h3 className="mb-2 font-bold text-[#2a7a6e]">会計・税務について</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                ファクタリングの手数料は「売上債権売却損」として経費計上可能です。消費税は非課税取引です。負債にならないためバランスシートに悪影響がなく、流動比率が改善するメリットもあります。
              </p>
            </div>
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-5">
              <h3 className="mb-2 font-bold text-[#2a7a6e]">法律について</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                ファクタリングは民法第466条に基づく合法的な取引です。ただし、給与ファクタリングは違法の可能性があります。二重譲渡は詐欺罪に該当するため絶対に避けてください。悪質業者の見分け方を知っておくことも重要です。
              </p>
            </div>
            <div className="rounded-lg border border-[#d4dbe6] bg-white p-5">
              <h3 className="mb-2 font-bold text-[#2a7a6e]">業種別について</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                業種によって最適なファクタリング会社は異なります。建設業や医療は業種特化型、IT業界はオンライン完結型がおすすめです。個人事業主でも法人向けサービスを利用できるケースが多いので確認しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── ファクタリング利用前チェックリスト ─── */}
      {/* ── 関連ツール・データ ─── */}
      <section className="mb-12">
        <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
          <p className="mb-3 font-bold text-primary">あわせて使いたいツール・データ</p>
          <ul className="space-y-2 text-sm text-text-light">
          <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
                    <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
          <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース（49社+）</Link>｜手数料・対応・オンラインで絞り込み（手数料は2026年6月に各社公式確認済み）。</li>
          <li><Link href="/ranking/" className="font-medium text-primary underline">おすすめファクタリング会社ランキング</Link>｜編集部が厳選した順位で比較できます。</li>
          </ul>
        </div>
      </section>

        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            ファクタリング利用前チェックリスト
          </h2>
          <div className="rounded-lg border-2 border-[#2a7a6e] bg-[#f0faf8] p-6">
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "売掛債権（請求書）を保有しているか確認する",
                "売掛先の信用力を確認する（大手・官公庁なら有利）",
                "必要な金額と希望する入金タイミングを明確にする",
                "2社間と3社間のどちらが適しているか検討する",
                "最低3社に見積もりを依頼する（相見積もり）",
                "手数料以外の費用（事務手数料・登記費用等）を確認する",
                "契約書の償還請求権の有無を確認する",
                "ファクタリングの仕訳・会計処理方法を確認する",
                "二重譲渡をしないよう管理体制を整える",
                "必要書類（請求書・身分証・通帳・決算書）を準備する",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#2a7a6e] bg-white text-xs font-bold text-[#2a7a6e]">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 関連ガイド ─── */}
        <section className="py-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">関連ガイド</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/articles/what-is-factoring/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">ファクタリングとは？ →</p>
              </Link>
              <Link href="/articles/glossary/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">ファクタリング用語集 →</p>
              </Link>
              <Link href="/articles/beginners-guide/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">初心者ガイド →</p>
              </Link>
              <Link href="/articles/industry-hub/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">業種別ファクタリングガイド一覧 →</p>
              </Link>
              <Link href="/articles/fee-guide/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">手数料ガイド →</p>
              </Link>
              <Link href="/ranking/" className="block p-3 border border-[#d4dbe6] rounded-lg hover:bg-[#f7f9fc] transition-colors">
                <p className="text-sm font-semibold text-[#1e3a5f]">ファクタリング会社おすすめランキング →</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ── まとめ ─── */}
        <section className="mb-12">
          <h2 className="mb-6 border-l-4 border-[#1e3a5f] pl-4 text-xl font-bold text-[#1e3a5f]">
            まとめ
          </h2>
          <div className="rounded-lg bg-[#f7f9fc] p-6">
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              ファクタリングは正しく理解して利用すれば、中小企業の資金繰りを大きく改善できる資金調達手段です。このFAQで疑問が解消されない場合は、各詳細記事も参考にしてください。
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              ファクタリングの利用を検討している方は、まず複数社に見積もりを取って比較することをおすすめします。
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              初めての方は「ファクタリングとは？」の基本解説や「用語集」もあわせてご覧ください。
            </p>
          </div>
        </section>

        {/* ── CTA ─── */}
        <div className="text-center">
          <Link
            href="/ranking/"
            className="inline-block rounded-lg bg-[#e87c3e] px-8 py-4 text-base font-bold text-white shadow-md transition-colors hover:bg-[#d06c2e]"
          >
            ファクタリング会社おすすめランキングを見る
          </Link>
        </div>
      </div>
    </>
  );
}
