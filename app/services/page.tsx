import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">サービス</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ルテラスが提供する多様なソリューション
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1: Wellteras */}
      <section id="wellteras" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">健康アプリ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">
                  健康コミュニティアプリ「ウェルテラス」
                </h2>
                <p className="text-gray-500">
                  ダイエットやボディメイクなど、健康目標達成をサポートするコミュニティアプリ
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-blue-100 bg-white p-4 hover:border-blue-200 transition-all duration-300 hover:shadow-sm">
                  <h3 className="text-lg font-medium text-blue-700 mb-2">主な機能</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      目標設定と進捗管理
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      コミュニティサポート
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      専門家のアドバイス
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      食事・運動記録
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      モチベーション維持機能
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border border-blue-100 bg-white p-4 hover:border-blue-200 transition-all duration-300 hover:shadow-sm">
                  <h3 className="text-lg font-medium text-blue-700 mb-2">導入メリット</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      継続率の向上
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      コミュニティによる相互サポート
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      専門家のサポートによる効果的な取り組み
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      データに基づく健康管理
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#">
                  <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    アプリをダウンロード
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=500&width=400"
                width={400}
                height={500}
                alt="ウェルテラスアプリのイメージ"
                className="mx-auto aspect-[4/5] rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: AI Chatbot */}
      <section id="ai-chatbot" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[500px_1fr]">
            <div className="flex items-center justify-center order-last lg:order-first">
              <Image
                src="/placeholder.svg?height=500&width=400"
                width={400}
                height={500}
                alt="AIチャットボットのイメージ"
                className="mx-auto aspect-[4/5] rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">AI導入支援</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">
                  AIチャットボット導入支援
                </h2>
                <p className="text-gray-500">業務効率化と顧客体験向上のためのAIチャットボット導入をトータルサポート</p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-blue-100 bg-white p-4 hover:border-blue-200 transition-all duration-300 hover:shadow-sm">
                  <h3 className="text-lg font-medium text-blue-700 mb-2">サービス内容</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      要件定義・企画立案
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      AIチャットボット開発
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      既存システムとの連携
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      運用サポート・保守
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      効果測定・改善提案
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border border-blue-100 bg-white p-4 hover:border-blue-200 transition-all duration-300 hover:shadow-sm">
                  <h3 className="text-lg font-medium text-blue-700 mb-2">導入メリット</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      24時間365日の顧客対応
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      問い合わせ対応の効率化
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      人的リソースの最適化
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      顧客満足度の向上
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#">
                  <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    導入事例を見る
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: App Development */}
      <section id="app-development" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">アプリ開発</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">アプリ開発</h2>
                <p className="text-gray-500">お客様のニーズに合わせたカスタムアプリケーションの企画・開発</p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-blue-100 bg-white p-4 hover:border-blue-200 transition-all duration-300 hover:shadow-sm">
                  <h3 className="text-lg font-medium text-blue-700 mb-2">開発実績</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      健康管理アプリ
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      業務効率化システム
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      ECサイト・予約システム
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      コミュニティプラットフォーム
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border border-blue-100 bg-white p-4 hover:border-blue-200 transition-all duration-300 hover:shadow-sm">
                  <h3 className="text-lg font-medium text-blue-700 mb-2">開発プロセス</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      要件定義・企画立案
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      UI/UXデザイン
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      フロントエンド・バックエンド開発
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      テスト・品質保証
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      リリース・運用サポート
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#">
                  <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    開発事例を見る
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=500&width=400"
                width={400}
                height={500}
                alt="アプリ開発のイメージ"
                className="mx-auto aspect-[4/5] rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: GYM-TERAS */}
      <section id="gym-teras" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[500px_1fr]">
            <div className="flex items-center justify-center order-last lg:order-first">
              <Image
                src="/placeholder.svg?height=500&width=400"
                width={400}
                height={500}
                alt="GYM-TERASのイメージ"
                className="mx-auto aspect-[4/5] rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">情報メディア</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">
                  パーソナルジム総合情報メディア「GYM-TERAS」
                </h2>
                <p className="text-gray-500">パーソナルジムの情報を網羅的に提供する総合情報メディア</p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-blue-100 bg-white p-4 hover:border-blue-200 transition-all duration-300 hover:shadow-sm">
                  <h3 className="text-lg font-medium text-blue-700 mb-2">メディア特徴</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      全国のパーソナルジム情報
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      料金・サービス比較
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      利用者の口コミ・評価
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      トレーニング・栄養情報
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      専門家コラム
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border border-blue-100 bg-white p-4 hover:border-blue-200 transition-all duration-300 hover:shadow-sm">
                  <h3 className="text-lg font-medium text-blue-700 mb-2">ジム掲載メリット</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      新規顧客獲得
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      ブランド認知度向上
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      口コミによる信頼性向上
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-blue-500" />
                      専門メディアでの露出
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    掲載のお問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#">
                  <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    メディアを見る
                  </Button>
                </Link>
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
                サービスに関するよくあるご質問にお答えします
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            <Accordion type="single" collapsible className="w-full divide-y divide-blue-100">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium">
                  サービスの導入にはどのくらいの期間がかかりますか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  サービスの種類や規模によって異なりますが、一般的にAIチャットボットの導入は1〜3ヶ月、
                  アプリ開発は3〜6ヶ月程度を目安としています。詳細な期間については、
                  お客様の要件をヒアリングした上で、お見積りと共にご案内いたします。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium">
                  料金体系はどのようになっていますか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  各サービスごとに基本料金と、オプション料金を設定しています。
                  例えば、AIチャットボット導入支援では、初期費用と月額利用料に分かれており、
                  機能や規模によって料金が変動します。詳細な料金については、お問い合わせください。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium">
                  導入後のサポート体制はどうなっていますか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  すべてのサービスにおいて、導入後のサポートプランをご用意しています。
                  技術的なサポートだけでなく、運用アドバイスや定期的な改善提案も含まれています。
                  サポート内容や期間は、契約内容によって異なりますので、詳細はお問い合わせください。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-medium">
                  他社サービスとの連携は可能ですか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  はい、可能です。当社のサービスは、様々な外部サービスやAPIとの連携を前提に設計されています。
                  既存のシステムやサービスとの連携についても、技術的な検証を行った上で対応いたします。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-medium">
                  セキュリティ対策はどうなっていますか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  当社では、情報セキュリティを最重要課題の一つと位置づけ、厳格なセキュリティ対策を実施しています。
                  データの暗号化、アクセス制限、定期的なセキュリティ監査など、
                  多層的なセキュリティ対策を講じています。また、個人情報保護方針に基づき、
                  お客様の大切な情報を適切に管理しています。
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">お問い合わせ</h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                サービスについてのご質問や導入のご相談など、お気軽にお問い合わせください
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

