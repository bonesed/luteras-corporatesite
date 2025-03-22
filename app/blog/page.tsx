import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">ブログ</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                健康とテクノロジーに関する最新情報やお役立ち情報をお届けします
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex w-full max-w-sm items-center space-x-2">
                <Input type="search" placeholder="キーワードで検索" className="flex-1" />
                <Button type="submit" size="icon">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">検索</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blog/category/health">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-300 hover:border-blue-400"
              >
                健康
              </Button>
            </Link>
            <Link href="/blog/category/technology">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-300 hover:border-blue-400"
              >
                テクノロジー
              </Button>
            </Link>
            <Link href="/blog/category/ai">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-300 hover:border-blue-400"
              >
                AI
              </Button>
            </Link>
            <Link href="/blog/category/fitness">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-300 hover:border-blue-400"
              >
                フィットネス
              </Button>
            </Link>
            <Link href="/blog/category/business">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-300 hover:border-blue-400"
              >
                ビジネス
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">注目記事</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">ピックアップ記事</h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="group space-y-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  width={800}
                  height={400}
                  alt="ブログ記事イメージ"
                  className="aspect-[2/1] object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                    健康
                  </span>
                  <span className="text-sm text-gray-500">2023年12月15日</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-700 group-hover:text-blue-600">
                  健康管理アプリの最新トレンドと今後の展望
                </h3>
                <p className="text-gray-500">
                  健康管理アプリの市場は急速に拡大しています。本記事では、最新のトレンドと今後の展望について解説します。
                  ウェアラブルデバイスとの連携、AIによるパーソナライズ、コミュニティ機能の重要性など、注目すべきポイントを紹介します。
                </p>
              </div>
              <Link href="/blog/health-app-trends" className="inline-flex items-center text-blue-600 hover:underline">
                続きを読む <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group space-y-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  width={800}
                  height={400}
                  alt="ブログ記事イメージ"
                  className="aspect-[2/1] object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                    AI
                  </span>
                  <span className="text-sm text-gray-500">2023年12月1日</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-700 group-hover:text-blue-600">
                  AIチャットボット導入で業務効率が30%向上した事例
                </h3>
                <p className="text-gray-500">
                  当社のAIチャットボット導入支援により、クライアント企業の業務効率が30%向上した事例をご紹介します。
                  導入の背景、課題、解決策、そして具体的な成果について詳しく解説します。
                </p>
              </div>
              <Link
                href="/blog/ai-chatbot-case-study"
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                続きを読む <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">最新記事</h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="group flex flex-col space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200 hover:translate-y-[-4px] card-hover">
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="ブログ記事イメージ"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                    フィットネス
                  </span>
                  <span className="text-xs text-gray-500">2023年11月15日</span>
                </div>
                <h3 className="text-xl font-bold text-blue-700 group-hover:text-blue-600">効果的なトレーニング方法</h3>
                <p className="text-gray-500 line-clamp-2">
                  パーソナルトレーナーが教える、効果的なトレーニング方法をご紹介します。
                </p>
              </div>
              <Link href="/blog/effective-training" className="text-blue-600 hover:underline mt-auto">
                続きを読む <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
            <div className="group flex flex-col space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200 hover:translate-y-[-4px] card-hover">
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="ブログ記事イメージ"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                    テクノロジー
                  </span>
                  <span className="text-xs text-gray-500">2023年11月1日</span>
                </div>
                <h3 className="text-xl font-bold text-blue-700 group-hover:text-blue-600">
                  モバイルアプリ開発の最新動向
                </h3>
                <p className="text-gray-500 line-clamp-2">
                  2023年のモバイルアプリ開発における最新動向と注目すべき技術をご紹介します。
                </p>
              </div>
              <Link href="/blog/mobile-app-trends" className="text-blue-600 hover:underline mt-auto">
                続きを読む <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
            <div className="group flex flex-col space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200 hover:translate-y-[-4px] card-hover">
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="ブログ記事イメージ"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                    ビジネス
                  </span>
                  <span className="text-xs text-gray-500">2023年10月15日</span>
                </div>
                <h3 className="text-xl font-bold text-blue-700 group-hover:text-blue-600">
                  健康産業におけるDXの重要性
                </h3>
                <p className="text-gray-500 line-clamp-2">
                  健康産業におけるデジタルトランスフォーメーション（DX）の重要性と成功事例を解説します。
                </p>
              </div>
              <Link href="/blog/health-industry-dx" className="text-blue-600 hover:underline mt-auto">
                続きを読む <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
            <div className="group flex flex-col space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200 hover:translate-y-[-4px] card-hover">
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="ブログ記事イメージ"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                    健康
                  </span>
                  <span className="text-xs text-gray-500">2023年10月1日</span>
                </div>
                <h3 className="text-xl font-bold text-blue-700 group-hover:text-blue-600">健康的な食習慣の基本</h3>
                <p className="text-gray-500 line-clamp-2">
                  栄養士が教える、健康的な食習慣の基本と簡単に実践できるコツをご紹介します。
                </p>
              </div>
              <Link href="/blog/healthy-eating-habits" className="text-blue-600 hover:underline mt-auto">
                続きを読む <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
            <div className="group flex flex-col space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200 hover:translate-y-[-4px] card-hover">
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="ブログ記事イメージ"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                    AI
                  </span>
                  <span className="text-xs text-gray-500">2023年9月15日</span>
                </div>
                <h3 className="text-xl font-bold text-blue-700 group-hover:text-blue-600">AIが変える健康管理の未来</h3>
                <p className="text-gray-500 line-clamp-2">
                  AIテクノロジーが健康管理の未来をどのように変えていくのか、最新の研究と事例から考察します。
                </p>
              </div>
              <Link href="/blog/ai-future-health" className="text-blue-600 hover:underline mt-auto">
                続きを読む <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
            <div className="group flex flex-col space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200 hover:translate-y-[-4px] card-hover">
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="ブログ記事イメージ"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-blue-700 border-blue-200 bg-blue-50">
                    フィットネス
                  </span>
                  <span className="text-xs text-gray-500">2023年9月1日</span>
                </div>
                <h3 className="text-xl font-bold text-blue-700 group-hover:text-blue-600">
                  在宅ワーク時代の運動不足解消法
                </h3>
                <p className="text-gray-500 line-clamp-2">
                  在宅ワークが増える中、運動不足を解消するための簡単なエクササイズと習慣づけのコツを紹介します。
                </p>
              </div>
              <Link href="/blog/remote-work-exercise" className="text-blue-600 hover:underline mt-auto">
                続きを読む <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700">
              もっと見る <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">ニュースレター登録</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                最新の記事や健康・テクノロジーに関する情報を定期的にお届けします
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2 sm:flex-row">
                <Input type="email" placeholder="メールアドレスを入力" className="flex-1" required />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  登録する
                </Button>
              </form>
              <p className="text-xs text-gray-500">
                ※登録することで、
                <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                  プライバシーポリシー
                </Link>
                に同意したことになります。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

