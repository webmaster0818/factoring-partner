import Link from "next/link";

/* 先払い買取（商品券・ギフト券現金化）検証記事の共通セクション。
   4つのブランド検証記事（シープ/タートル/リセ/チケットセンター）で共用。 */

export function AlternativesSection() {
  const consultWindows = [
    ["消費者ホットライン", "188（いやや）", "最寄りの消費生活センターにつながる全国共通番号。契約トラブル・生活資金の悩み全般"],
    ["警察相談専用電話", "#9110", "執拗な取り立て・脅迫めいた連絡など、犯罪被害につながるおそれがある場合"],
    ["金融庁 金融サービス利用者相談室", "0570-016811", "無登録業者・ヤミ金融に関する情報提供・相談（平日10:00〜17:00）"],
    ["日本貸金業協会 貸金業相談・紛争解決センター", "0570-051051", "借金・ヤミ金融に関する相談"],
  ];
  return (
    <section id="alternatives" className="mb-16">
      <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">
        どうしても現金が必要な場合の正規の選択肢
      </h2>
      <p className="mb-6 leading-relaxed text-text-light">
        いま現金が必要だという状況そのものは否定しません。だからこそ、危険なスキームではなく正規の選択肢を確認してください。立場によって取れる手段が異なります。
      </p>
      <div className="space-y-4">
        <div className="rounded-lg border border-border bg-white p-6">
          <h3 className="font-bold text-primary">事業者（法人・個人事業主・フリーランス）｜請求書があるなら正規のファクタリング</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-light">
            事業で発行した請求書（売掛金）があるなら、それを売却して資金化する
            <strong className="text-text-main">ファクタリング（民法にもとづく債権譲渡・貸金業登録不要の合法取引）</strong>
            が使えます。借入ではないため負債にならず、最短即日の資金化も可能です。短期の資金繰り全般は
            <Link href="/articles/tsunagi-shikin/" className="font-medium text-primary underline">つなぎ資金の調達方法</Link>
            で選択肢を比較できます。
          </p>
        </div>
        <div className="rounded-lg border border-border bg-white p-6">
          <h3 className="font-bold text-primary">個人（生活資金）｜まず公的窓口で支援制度を確認する</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-light">
            個人の生活資金にファクタリングは使えません（事業の売掛債権が対象のため）。危険な現金化に頼る前に、
            <strong className="text-text-main">消費者ホットライン（188）や市区町村の相談窓口</strong>
            で、公的な支援制度や債務整理を含めた選択肢を確認してください。すでに先払い買取を利用して違約金を請求されている場合の対処は、
            <Link href="/articles/sakibarai-kaitori-cancel/" className="font-medium text-primary underline">先払い買取のキャンセル料が払えない場合の対処法</Link>
            で解説しています。
          </p>
        </div>
      </div>
      <p className="mt-6 mb-4 leading-relaxed text-text-light">困ったときに使える公的窓口は次のとおりです（2026年7月確認）。</p>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-primary text-left text-white">
              <th className="px-4 py-3 font-semibold whitespace-nowrap">相談窓口</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">電話番号</th>
              <th className="px-4 py-3 font-semibold">こんなときに</th>
            </tr>
          </thead>
          <tbody>
            {consultWindows.map(([n, t, note]) => (
              <tr key={n} className="border-t border-border">
                <td className="bg-section-bg px-4 py-3 font-semibold text-text-main whitespace-nowrap">{n}</td>
                <td className="px-4 py-3 font-bold text-primary whitespace-nowrap">{t}</td>
                <td className="px-4 py-3 text-text-light">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function PrimarySources() {
  return (
    <section className="mb-12">
      <div className="rounded-lg border border-border bg-section-bg p-6">
        <p className="mb-3 font-bold text-text-main">この記事の一次情報（公的機関の公表資料）</p>
        <ul className="space-y-2 text-sm leading-relaxed text-text-light">
          <li>・金融庁「違法な金融業者にご注意！（いわゆる「先払い買取」現金化）」<a href="https://www.fsa.go.jp/ordinary/chuui/cashing_chuui2.html" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">fsa.go.jp</a></li>
          <li>・消費者庁「いわゆる「先払い買取現金化」に関する注意喚起」<a href="https://www.caa.go.jp/policies/policy/consumer_policy/caution/caution_026" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">caa.go.jp</a></li>
          <li>・警察庁・金融庁・消費者庁・財務局・日本貸金業協会 連名注意喚起資料「いわゆる『先払い買取』現金化に要注意！」<a href="https://www.npa.go.jp/bureau/safetylife/keizai/sakibaraikaitori.pdf" target="_blank" rel="noopener noreferrer" className="ml-1 break-all text-primary underline">npa.go.jp（PDF）</a></li>
        </ul>
        <p className="mt-3 text-xs text-text-light">いずれも2026年7月22日にリンク先への到達を確認。制度・注意喚起の内容は変更される場合があるため、最新情報は各機関の公式サイトをご確認ください。</p>
      </div>
    </section>
  );
}

export function ToolsSection() {
  return (
    <section className="mb-12">
      <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
        <p className="mb-3 font-bold text-primary">事業者の方へ｜正規の資金調達に使えるツール・データ</p>
        <ul className="space-y-2 text-sm text-text-light">
          <li><Link href="/articles/company-directory/" className="font-medium text-primary underline">審査済み業者データベース</Link>｜手数料・対応・オンラインで絞り込み（手数料は各社公式確認済み）。</li>
          <li><Link href="/diagnosis/" className="font-medium text-primary underline">無料診断（7つの質問・30秒）</Link>｜事業形態・金額・急ぎ度からあなたに合う1社を絞り込めます。</li>
          <li><Link href="/simulator/" className="font-medium text-primary underline">手数料シミュレーター</Link>｜売掛金額から手数料・入金額の目安を計算できます。</li>
        </ul>
      </div>
    </section>
  );
}

const ALL_BRANDS: Record<string, [string, string, string]> = {
  "sheep-ticket": ["/articles/sheep-ticket/", "シープチケットとは？仕組みと注意点", "商品券の現金化サービスを一次情報で検証"],
  "turtle-ticket": ["/articles/turtle-ticket/", "タートルチケットとは？仕組みと注意点", "商品券・ギフト券の現金化サービスを一次情報で検証"],
  "rese-ticket": ["/articles/rese-ticket/", "リセチケットとは？仕組みと注意点", "「振込が先・商品券は後」という先払い買取の構造を検証"],
  "ticket-center": ["/articles/ticket-center/", "チケットセンターとは？仕組みと注意点", "「商品券はあとで、振込は先に」の仕組みを検証"],
};

export function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const otherBrands = Object.entries(ALL_BRANDS)
    .filter(([slug]) => slug !== currentSlug)
    .map(([, v]) => v);
  const clusterTop: [string, string, string][] = [
    ["/articles/sakibarai-kaitori/", "先払い買取とは？違法性と危険な仕組み", "スキームの3ステップ・危険サイン・相談窓口を一次情報で解説したメイン記事"],
    ["/articles/sakibarai-kaitori-gyosha/", "先払い買取に「優良・おすすめ業者」は存在するか", "「優良店」表示でリスクが解消されない理由と紹介サイトの見方"],
    ["/articles/sakibarai-kaitori-cancel/", "先払い買取のキャンセル料が払えない場合の対処法", "すでに請求されて困っている場合の相談先と証拠保全"],
  ];
  const items = [...clusterTop, ...otherBrands];
  return (
    <section className="mb-16">
      <h2 className="mb-6 border-l-4 border-primary pl-4 text-xl font-bold text-text-main md:text-2xl">関連記事</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map(([href, title, desc]) => (
          <Link key={href} href={href} className="rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md">
            <p className="font-bold text-primary">{title}</p>
            <p className="mt-1 text-sm text-text-light">{desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function VerifyCTA() {
  return (
    <section className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
      <h2 className="text-xl font-bold md:text-2xl">売掛金があるなら、危険な現金化に頼る必要はありません</h2>
      <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
        事業で発行した請求書は、正規のファクタリングで最短即日に資金化できます。手数料を公式確認した会社から、あなたの状況に合う1社を比較して選びましょう。
      </p>
      <Link href="/ranking/" className="btn-cta mt-6 text-base">正規のファクタリング会社を比較する</Link>
    </section>
  );
}
