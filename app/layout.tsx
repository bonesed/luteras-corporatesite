
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );

import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP, Montserrat } from "next/font/google"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

import "./globals.css"

// フォントの設定
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "ルテラス | 健康とテクノロジーの融合",
  description:
    "ルテラスは、健康コミュニティアプリ「ウェルテラス」の運営からAIチャットボット導入支援まで、お客様の課題解決に貢献します。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`scroll-smooth ${notoSansJP.variable} ${montserrat.variable}`}>
      <body className="font-sans">
        <div className="scroll-indicator" id="scroll-indicator"></div>
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold premium-text font-heading">ルテラス</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/about" className="luxury-nav-item nav-hover-effect">
                企業情報
              </Link>
              <Link href="/services" className="luxury-nav-item nav-hover-effect">
                サービス
              </Link>
              <Link href="/careers" className="luxury-nav-item nav-hover-effect">
                採用情報
              </Link>
              <Link href="/blog" className="luxury-nav-item nav-hover-effect">
                ブログ
              </Link>
              <Link href="/contact" className="luxury-nav-item nav-hover-effect">
                お問い合わせ
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex h-10 items-center justify-center rounded-md gradient-button px-5 py-2 text-sm font-medium text-white shadow transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] button-pulse"
              >
                お問い合わせ
              </Link>
              <button className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="w-full border-t bg-gradient-to-b from-white to-gray-50 py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-30"></div>
          <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4 relative z-10">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold premium-text font-heading">ルテラス</span>
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed">
                経験と革新の力で、健康と自信を育み、社会に新たな価値を創造する
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-300 icon-hover-effect"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-300 icon-hover-effect"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-300 icon-hover-effect"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-300 icon-hover-effect"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium premium-text font-heading">サイトマップ</h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block link-hover-effect"
                >
                  ホーム
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block link-hover-effect"
                >
                  企業情報
                </Link>
                <Link
                  href="/services"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block link-hover-effect"
                >
                  サービス
                </Link>
                <Link
                  href="/careers"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block link-hover-effect"
                >
                  採用情報
                </Link>
                <Link
                  href="/blog"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block link-hover-effect"
                >
                  ブログ
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block link-hover-effect"
                >
                  お問い合わせ
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium premium-text font-heading">サービス</h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/services#wellteras"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block link-hover-effect"
                >
                  健康コミュニティアプリ「ウェルテラス」
                </Link>
                <Link
                  href="/services#ai-chatbot"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block link-hover-effect"
                >
                  AIチャットボット導入支援
                </Link>
                <Link
                  href="/services#app-development"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block link-hover-effect"
                >
                  アプリ開発
                </Link>
                <Link
                  href="/services#gym-teras"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block link-hover-effect"
                >
                  パーソナルジム総合情報メディア「GYM-TERAS」
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium premium-text font-heading">お問い合わせ</h3>
              <div className="flex flex-col gap-3 text-sm text-gray-500">
                <div className="flex items-start gap-3 group hover:text-blue-600 transition-colors duration-300 contact-hover-effect">
                  <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>〒000-0000 東京都○○区○○1-1-1</span>
                </div>
                <div className="flex items-center gap-3 group hover:text-blue-600 transition-colors duration-300 contact-hover-effect">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>03-0000-0000</span>
                </div>
                <div className="flex items-center gap-3 group hover:text-blue-600 transition-colors duration-300 contact-hover-effect">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>info@luteras.co.jp</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-10 border-t pt-6 px-4 md:px-6 relative z-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} ルテラス株式会社 All Rights Reserved.
              </p>
              <nav className="flex gap-6">
                <Link
                  href="/privacy-policy"
                  className="text-xs text-gray-500 hover:text-blue-600 transition-colors duration-300 link-hover-effect"
                >
                  プライバシーポリシー
                </Link>
                <Link
                  href="/terms"
                  className="text-xs text-gray-500 hover:text-blue-600 transition-colors duration-300 link-hover-effect"
                >
                  利用規約
                </Link>
              </nav>
            </div>
          </div>
        </footer>

        {/* スクロールアニメーション用のスクリプト */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // スクロールインジケーター
              const scrollIndicator = document.getElementById('scroll-indicator');
              window.addEventListener('scroll', () => {
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrollPercent = (scrollTop / scrollHeight) * 100;
                
                if (scrollIndicator) {
                  scrollIndicator.style.width = scrollPercent + '%';
                }
              });

              // スクロールアニメーション
              const scrollElements = document.querySelectorAll('.scroll-fade-in');
              
              const elementInView = (el, dividend = 1) => {
                const elementTop = el.getBoundingClientRect().top;
                return (
                  elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
                );
              };
              
              const displayScrollElement = (element) => {
                element.classList.add('fade-in-visible');
              };
              
              const handleScrollAnimation = () => {
                scrollElements.forEach((el) => {
                  if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                  }
                });
              };
              
              // 初期表示時にも実行
              setTimeout(handleScrollAnimation, 100);
              
              window.addEventListener('scroll', () => {
                handleScrollAnimation();
              });
            });
          `,
          }}
        />
      </body>
    </html>
  )
}

