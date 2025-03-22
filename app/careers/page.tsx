import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-800">
                  私たちと一緒に、未来を創ろう
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  ルテラスでは、健康とテクノロジーの融合により、新たな価値を創造する仲間を募集しています。
                  あなたの経験と情熱を活かせる環境で、共に成長しませんか？
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#positions">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    募集職種を見る <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#culture">
                  <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    企業文化を知る
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="チームワークのイメージ"
                className="mx-auto aspect-square rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">企業文化</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">ルテラスで働く魅力</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                私たちが大切にしている価値観と働き方
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200 hover:translate-y-[-4px] card-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
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
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-blue-700">チームワーク</h3>
                <p className="text-gray-500">
                  多様なバックグラウンドを持つメンバーが、互いを尊重し、協力し合う文化を大切にしています。
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200 hover:translate-y-[-4px] card-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
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
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M18 6 7 17l-5-5" />
                  <path d="m22 10-7.5 7.5L13 16" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-blue-700">挑戦と成長</h3>
                <p className="text-gray-500">
                  新しいことに挑戦し、失敗から学び、常に成長し続ける姿勢を重視しています。
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200 hover:translate-y-[-4px] card-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
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
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-blue-700">信頼と自律</h3>
                <p className="text-gray-500">
                  互いを信頼し、自律的に働ける環境を整えています。リモートワークやフレックスタイム制度も導入しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">福利厚生</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">働きやすい環境づくり</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                社員一人ひとりが最大限に能力を発揮できる環境を整えています
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700">働き方</h3>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  フレックスタイム制度
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  リモートワーク可能
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  副業OK
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  服装自由
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700">休暇・保険</h3>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  完全週休2日制（土日祝休）
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  年次有給休暇
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  夏季・冬季休暇
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  各種社会保険完備
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700">手当・支援</h3>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  交通費全額支給
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  書籍購入支援
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  セミナー・勉強会参加費補助
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  資格取得支援
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700">オフィス環境</h3>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  最新設備のオフィス
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  フリードリンク
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  リフレッシュスペース
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                  オフィス近くに飲食店多数
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">募集職種</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">現在募集中のポジション</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                あなたのスキルと情熱を活かせるポジションを見つけてください
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <Tabs defaultValue="engineering" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="engineering">エンジニアリング</TabsTrigger>
                <TabsTrigger value="design">デザイン</TabsTrigger>
                <TabsTrigger value="business">ビジネス</TabsTrigger>
              </TabsList>
              <TabsContent value="engineering" className="space-y-4">
                <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-200 hover:translate-y-[-4px] card-hover">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">フロントエンドエンジニア</h3>
                  <p className="text-gray-500 mb-4">
                    ユーザー体験を重視した、魅力的なWebアプリケーションの開発を担当していただきます。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      React
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      TypeScript
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      Next.js
                    </span>
                  </div>
                  <Link href="/careers/frontend-engineer">
                    <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                      詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-200 hover:translate-y-[-4px] card-hover">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">バックエンドエンジニア</h3>
                  <p className="text-gray-500 mb-4">
                    安定性とパフォーマンスを重視したバックエンドシステムの設計・開発を担当していただきます。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      Node.js
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      Python
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      AWS
                    </span>
                  </div>
                  <Link href="/careers/backend-engineer">
                    <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                      詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-200 hover:translate-y-[-4px] card-hover">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">AIエンジニア</h3>
                  <p className="text-gray-500 mb-4">
                    AIチャットボットの開発や機械学習モデルの構築・改善を担当していただきます。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      Python
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      TensorFlow
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      自然言語処理
                    </span>
                  </div>
                  <Link href="/careers/ai-engineer">
                    <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                      詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="design" className="space-y-4">
                <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-200 hover:translate-y-[-4px] card-hover">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">UIデザイナー</h3>
                  <p className="text-gray-500 mb-4">
                    ユーザー中心の考え方で、使いやすく美しいインターフェースのデザインを担当していただきます。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      Figma
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      Adobe XD
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      UI/UX
                    </span>
                  </div>
                  <Link href="/careers/ui-designer">
                    <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                      詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="business" className="space-y-4">
                <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-200 hover:translate-y-[-4px] card-hover">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">マーケティングマネージャー</h3>
                  <p className="text-gray-500 mb-4">
                    当社サービスの認知度向上と顧客獲得のためのマーケティング戦略の立案・実行を担当していただきます。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      デジタルマーケティング
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      コンテンツマーケティング
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      SEO/SEM
                    </span>
                  </div>
                  <Link href="/careers/marketing-manager">
                    <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                      詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-200 hover:translate-y-[-4px] card-hover">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">営業担当</h3>
                  <p className="text-gray-500 mb-4">
                    企業向けのAIチャットボット導入支援やアプリ開発の提案・販売を担当していただきます。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      法人営業
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      ソリューション営業
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                      IT業界経験
                    </span>
                  </div>
                  <Link href="/careers/sales-representative">
                    <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                      詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">採用フロー</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">選考プロセス</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                応募から入社までの流れをご紹介します
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-8 py-12">
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                  1
                </div>
                <div className="h-full w-0.5 bg-blue-100"></div>
              </div>
              <div className="ml-4 space-y-2 pb-8">
                <h3 className="text-xl font-bold text-blue-700">応募</h3>
                <p className="text-gray-500">
                  各職種の詳細ページから応募フォームに必要事項を入力し、応募してください。
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                  2
                </div>
                <div className="h-full w-0.5 bg-blue-100"></div>
              </div>
              <div className="ml-4 space-y-2 pb-8">
                <h3 className="text-xl font-bold text-blue-700">書類選考</h3>
                <p className="text-gray-500">
                  提出いただいた履歴書・職務経歴書をもとに書類選考を行います。結果は1週間以内にメールでご連絡します。
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                  3
                </div>
                <div className="h-full w-0.5 bg-blue-100"></div>
              </div>
              <div className="ml-4 space-y-2 pb-8">
                <h3 className="text-xl font-bold text-blue-700">一次面接</h3>
                <p className="text-gray-500">
                  オンラインでの面接を行います。経験やスキル、志望動機などについてお聞きします。
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                  4
                </div>
                <div className="h-full w-0.5 bg-blue-100"></div>
              </div>
              <div className="ml-4 space-y-2 pb-8">
                <h3 className="text-xl font-bold text-blue-700">技術試験/課題（技術職のみ）</h3>
                <p className="text-gray-500">
                  エンジニアやデザイナーなどの技術職は、スキルを確認するための課題に取り組んでいただきます。
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                  5
                </div>
                <div className="h-full w-0.5 bg-blue-100"></div>
              </div>
              <div className="ml-4 space-y-2 pb-8">
                <h3 className="text-xl font-bold text-blue-700">最終面接</h3>
                <p className="text-gray-500">
                  役員との対面またはオンラインでの面接を行います。会社の文化や価値観との適合性も重視します。
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                  6
                </div>
              </div>
              <div className="ml-4 space-y-2">
                <h3 className="text-xl font-bold text-blue-700">内定・入社</h3>
                <p className="text-gray-500">選考通過後、内定のご連絡をします。条件面の調整後、入社日を決定します。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">よくあるご質問</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                採用に関するよくあるご質問にお答えします
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium">未経験でも応募できますか？</AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  職種によって異なりますが、基本的には関連する経験やスキルを持つ方を募集しています。
                  ただし、ポテンシャル採用も行っていますので、強い意欲と基礎的な知識があれば検討いたします。
                  詳細は各職種の募集要項をご確認ください。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium">選考の期間はどのくらいですか？</AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  応募から内定までは、通常2〜4週間程度です。ただし、応募状況や職種によって前後する場合があります。
                  各選考段階での結果は、できるだけ早くご連絡するよう心がけています。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium">
                  リモートワークはどの程度可能ですか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  基本的には週2〜3日のオフィス出社と、残りの日数はリモートワークという働き方が多いです。
                  ただし、職種や業務内容、プロジェクトの状況によって調整が必要な場合があります。
                  入社後は、チームと相談しながら最適な働き方を決めていきます。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-medium">入社後の研修制度はありますか？</AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  入社時にはオリエンテーションを実施し、会社の理念や業務の基本を学んでいただきます。
                  その後は、OJTを中心とした実践的な研修と、外部セミナーや勉強会への参加支援を通じて、
                  継続的なスキルアップをサポートしています。また、メンター制度も導入しており、
                  先輩社員が業務や会社生活のサポートをします。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-medium">
                  キャリアパスについて教えてください
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  当社では、専門性を高めるスペシャリストコースと、マネジメントスキルを磨くマネージャーコースの
                  2つのキャリアパスを用意しています。定期的な1on1面談を通じて、個人の希望や適性に合わせた
                  キャリア形成をサポートします。また、社内公募制度もあり、異なる職種にチャレンジする機会も提供しています。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                私たちと一緒に働きませんか？
              </h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                あなたの経験と情熱を活かせる環境で、共に成長しましょう
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="#positions">
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  募集職種を見る <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

