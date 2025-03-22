import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">企業情報</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ルテラスの企業理念、ビジョン、そして私たちの歩み
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-700">ビジョン</h2>
              <p className="text-gray-500">
                健康とテクノロジーの融合により、すべての人が自分らしく輝ける社会を創造します。
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-700">ミッション</h2>
              <p className="text-gray-500">
                革新的なテクノロジーと専門知識を活用し、健康課題の解決と自己実現をサポートします。
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-700">バリュー</h2>
              <ul className="space-y-2 text-gray-500">
                <li>• 革新性：常に新しい価値を創造する</li>
                <li>• 専門性：深い知識と経験を活かす</li>
                <li>• 共創性：お客様と共に成長する</li>
                <li>• 誠実性：すべての関係者に誠実に向き合う</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">代表挨拶</h2>
                <div className="space-y-4 text-gray-500">
                  <p>ルテラス株式会社代表取締役の〇〇〇〇です。</p>
                  <p>
                    当社は、「経験と革新の力で、健康と自信を育み、社会に新たな価値を創造する」という企業理念のもと、
                    健康とテクノロジーの融合による新たな価値創造に取り組んでいます。
                  </p>
                  <p>
                    健康コミュニティアプリ「ウェルテラス」の運営を通じて、多くの方々の健康目標達成をサポートするとともに、
                    AIチャットボット導入支援やアプリ開発など、企業様の課題解決にも貢献しています。
                  </p>
                  <p>
                    私たちは、テクノロジーの力を活用しながらも、常に人間中心の価値創造を大切にしています。
                    これからも、お客様と共に成長し、社会に貢献できる企業であり続けたいと考えています。
                  </p>
                  <p className="font-medium">代表取締役 〇〇 〇〇</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=500&width=400"
                width={400}
                height={500}
                alt="代表取締役の写真"
                className="mx-auto aspect-[4/5] rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">企業沿革</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ルテラスの歩み
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-8 py-12">
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold shadow-md">
                  1
                </div>
                <div className="h-full w-0.5 bg-gradient-to-b from-blue-500 to-blue-100"></div>
              </div>
              <div className="ml-4 space-y-2 pb-8">
                <h3 className="text-xl font-bold text-blue-700">2020年4月</h3>
                <p className="text-gray-500">ルテラス株式会社設立</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold shadow-md">
                  2
                </div>
                <div className="h-full w-0.5 bg-gradient-to-b from-blue-500 to-blue-100"></div>
              </div>
              <div className="ml-4 space-y-2 pb-8">
                <h3 className="text-xl font-bold text-blue-700">2020年10月</h3>
                <p className="text-gray-500">健康コミュニティアプリ「ウェルテラス」β版リリース</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold shadow-md">
                  3
                </div>
                <div className="h-full w-0.5 bg-gradient-to-b from-blue-500 to-blue-100"></div>
              </div>
              <div className="ml-4 space-y-2 pb-8">
                <h3 className="text-xl font-bold text-blue-700">2021年4月</h3>
                <p className="text-gray-500">「ウェルテラス」正式版リリース</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold shadow-md">
                  4
                </div>
                <div className="h-full w-0.5 bg-gradient-to-b from-blue-500 to-blue-100"></div>
              </div>
              <div className="ml-4 space-y-2 pb-8">
                <h3 className="text-xl font-bold text-blue-700">2022年1月</h3>
                <p className="text-gray-500">AIチャットボット導入支援サービス開始</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold shadow-md">
                  5
                </div>
                <div className="h-full w-0.5 bg-gradient-to-b from-blue-500 to-blue-100"></div>
              </div>
              <div className="ml-4 space-y-2 pb-8">
                <h3 className="text-xl font-bold text-blue-700">2022年7月</h3>
                <p className="text-gray-500">パーソナルジム総合情報メディア「GYM-TERAS」リリース</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold shadow-md">
                  6
                </div>
              </div>
              <div className="ml-4 space-y-2">
                <h3 className="text-xl font-bold text-blue-700">2023年4月</h3>
                <p className="text-gray-500">東京本社オフィス移転、社員数20名達成</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">会社概要</h2>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            <div className="rounded-xl border border-blue-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-blue-100">
                    <th className="bg-blue-50 px-6 py-4 text-left font-medium text-blue-700 w-1/3">会社名</th>
                    <td className="px-6 py-4 text-gray-500">ルテラス株式会社</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <th className="bg-blue-50 px-6 py-4 text-left font-medium text-blue-700">設立</th>
                    <td className="px-6 py-4 text-gray-500">2020年4月</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <th className="bg-blue-50 px-6 py-4 text-left font-medium text-blue-700">代表者</th>
                    <td className="px-6 py-4 text-gray-500">代表取締役 〇〇 〇〇</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <th className="bg-blue-50 px-6 py-4 text-left font-medium text-blue-700">資本金</th>
                    <td className="px-6 py-4 text-gray-500">1,000万円</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <th className="bg-blue-50 px-6 py-4 text-left font-medium text-blue-700">従業員数</th>
                    <td className="px-6 py-4 text-gray-500">20名（2023年4月現在）</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <th className="bg-blue-50 px-6 py-4 text-left font-medium text-blue-700">事業内容</th>
                    <td className="px-6 py-4 text-gray-500">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>健康コミュニティアプリ「ウェルテラス」運営</li>
                        <li>AIチャットボット導入支援</li>
                        <li>アプリ開発</li>
                        <li>パーソナルジム総合情報メディア「GYM-TERAS」運営</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <th className="bg-blue-50 px-6 py-4 text-left font-medium text-blue-700">所在地</th>
                    <td className="px-6 py-4 text-gray-500">〒000-0000 東京都○○区○○1-1-1</td>
                  </tr>
                  <tr>
                    <th className="bg-blue-50 px-6 py-4 text-left font-medium text-blue-700">連絡先</th>
                    <td className="px-6 py-4 text-gray-500">
                      <p>TEL: 03-0000-0000</p>
                      <p>Email: info@luteras.co.jp</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">お問い合わせ</h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ご質問やご相談など、お気軽にお問い合わせください
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="/contact">
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  お問い合わせフォーム <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

