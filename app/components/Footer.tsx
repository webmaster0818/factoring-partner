import Link from "next/link";

const footerNav = [
  {
    title: "コンテンツ",
    links: [
      { label: "おすすめ比較ランキング", href: "/ranking/" },
      { label: "法人向けファクタリング", href: "/corporation/" },
      { label: "個人事業主向け", href: "/sole-proprietor/" },
      { label: "基礎知識", href: "/knowledge/" },
    ],
  },
  {
    title: "カテゴリ",
    links: [
      { label: "2社間ファクタリング", href: "/knowledge/two-party/" },
      { label: "3社間ファクタリング", href: "/knowledge/three-party/" },
      { label: "手数料比較", href: "/knowledge/fees/" },
      { label: "即日入金対応", href: "/knowledge/same-day/" },
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
