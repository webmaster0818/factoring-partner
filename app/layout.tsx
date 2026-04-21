import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | ファクタリングパートナー",
    default:
      "ファクタリングパートナー | ファクタリング会社おすすめ比較【2026年最新】",
  },
  description:
    "ファクタリング会社49社以上を徹底比較。手数料・入金スピード・審査通過率など6項目で比較し、法人・個人事業主・フリーランスに最適なファクタリング会社が見つかります。",
  metadataBase: new URL("https://factoring-partner.pages.dev"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ファクタリングパートナー",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ファクタリングパートナー",
  url: "https://factoring-partner.pages.dev",
  description:
    "ファクタリング会社49社以上を徹底比較。手数料・入金スピード・審査通過率など6項目で比較し、最適なファクタリング会社が見つかります。",
  publisher: {
    "@type": "Organization",
    name: "ファクタリングパートナー",
    url: "https://factoring-partner.pages.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
