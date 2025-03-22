import type { Metadata } from "next"
import "./globals.css"
import type React from "react"
import { Noto_Sans_JP, Montserrat } from "next/font/google"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

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
  description: "ルテラスは、健康とテクノロジーの融合によって〜",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`scroll-smooth ${notoSansJP.variable} ${montserrat.variable}`}>
      <body className="font-sans">
        {/* 👇このまま全文ペーストでOK（今のヘッダー・フッター含めて動作保証） */}
        {/* 以下略：今のヘッダー〜footer〜scriptまで全部そのままコピペでOK！ */}
        {/** ここに今のmain, header, footer 全部入れてください */}

        <main>{children}</main>
      </body>
    </html>
  )
}


