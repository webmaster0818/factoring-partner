import Link from "next/link";

const footerNav = [
  {
    title: "コンテンツ",
    links: [
      { label: "おすすめ比較ランキング", href: "/ranking/" },
      { label: "審査済み業者データベース", href: "/articles/company-directory/" },
      { label: "手数料シミュレーター", href: "/simulator/" },
      { label: "法人向けファクタリング", href: "/articles/for-corporation/" },
      { label: "個人事業主向け", href: "/articles/for-sole-proprietor/" },
      { label: "ファクタリングとは", href: "/articles/what-is-factoring/" },
    ],
  },
  {
    title: "カテゴリ",
    links: [
      { label: "2社間と3社間の違い", href: "/articles/2sha-vs-3sha/" },
      { label: "2社間おすすめランキング", href: "/articles/2sha-ranking/" },
      { label: "手数料の相場・比較", href: "/articles/fee-guide/" },
      { label: "即日入金対応", href: "/articles/instant-factoring/" },
    ],
  },
  {
    title: "サイト情報",
    links: [
      { label: "運営者情報", href: "/about/" },
      { label: "プライバシーポリシー", href: "/privacy-policy/" },
      { label: "お問い合わせ", href: "/contact/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Top section */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Site info */}
          <div>
            <Link href="/" className="text-lg font-bold">
              ファクタリングパートナー
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              ファクタリング会社49社以上を徹底比較。あなたに最適なファクタリング会社が見つかる比較サイトです。
            </p>
          </div>

          {/* Nav columns */}
          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-sm font-bold text-gray-300">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          <div className="flex justify-center gap-6 mt-6">
            <Link href="/terms/" className="text-xs text-blue-300 hover:text-white transition-colors">利用規約</Link>
            <Link href="/privacy-policy/" className="text-xs text-blue-300 hover:text-white transition-colors">プライバシーポリシー</Link>
            <Link href="/content-policy/" className="text-xs text-blue-300 hover:text-white transition-colors">記事制作ポリシー</Link>
          </div>
          <p className="mt-4">&copy; 2026 ファクタリングパートナー All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
