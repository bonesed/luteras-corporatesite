import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

// ブログ記事のサンプルデータ（後でCMSから取得するように変更可能）
const blogPosts = [
  {
    title: "健康管理アプリの最新トレンド",
    excerpt: "健康管理アプリの最新トレンドと今後の展望について解説します。",
    image: "/images/blog-health-app.jpg",
    category: "健康",
    date: "2023年12月15日",
    url: "/blog/health-app-trends",
  },
  {
    title: "AIチャットボット導入事例",
    excerpt: "当社のAIチャットボット導入により業務効率が向上した事例をご紹介します。",
    image: "/images/blog-ai-chatbot.jpg",
    category: "AI",
    date: "2023年12月1日",
    url: "/blog/ai-chatbot-case-study",
  },
  {
    title: "効果的なトレーニング方法",
    excerpt: "パーソナルトレーナーが教える、効果的なトレーニング方法をご紹介します。",
    image: "/images/blog-fitness.jpg",
    category: "フィットネス",
    date: "2023年11月15日",
    url: "/blog/effective-training",
  },
]

// 導入企業ロゴ
const clientLogos = [
  { name: "企業A", logo: "/images/logo-company-1.png" },
  { name: "企業B", logo: "/images/logo-company-2.png" },
  { name: "企業C", logo: "/images/logo-company-3.png" },
  { name: "企業D", logo: "/images/logo-company-4.png" },
  { name: "企業E", logo: "/images/logo-company-5.png" },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* 背景アニメーション要素 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-10 left-10 w-[40vw] h-[40vw] rounded-full bg-blue-400 blur-[100px] animate-blob"></div>
            <div className="absolute top-40 right-10 w-[35vw] h-[35vw] rounded-full bg-blue-300 blur-[100px] animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-10 left-1/3 w-[45vw] h-[45vw] rounded-full bg-blue-500 blur-[100px] animate-blob animation-delay-4000"></div>
          </div>
          <div className="absolute inset-0 bg-[url('/grid-lines.svg')] bg-repeat opacity-10"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-blue-100 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-100"></span>
                  </span>
                  <span>健康とテクノロジーの融合</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tighter">
                  <span className="block animate-slide-up">研究DXによる</span>
                  <span className="block animate-slide-up animation-delay-300">革新的な材料創出を</span>
                  <span className="block animate-slide-up animation-delay-600 bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">
                    目指す企業
                  </span>
                </h1>
                <p className="text-xl text-blue-100 max-w-xl animate-fade-in animation-delay-900">
                  ルテラスは、健康とテクノロジーの融合により、新たな価値を創造します。豊富な経験と最新技術を組み合わせ、お客様のニーズに合わせたソリューションを提供します。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-1200">
                <Link href="/contact">
                  <Button className="bg-white hover:bg-blue-50 text-blue-700 px-8 py-6 rounded-md text-lg font-medium shadow-lg transform transition-all duration-500 hover:translate-y-[-4px] hover:shadow-xl">
                    お問い合わせ <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/20 px-8 py-6 rounded-md text-lg font-medium backdrop-blur-sm transform transition-all duration-500 hover:translate-y-[-4px]"
                  >
                    サービスを見る <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative z-10 w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-blue-500/20 hover:shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-blue-900/30 backdrop-blur-sm z-0"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-400 to-blue-600 blur-[60px] opacity-60 animate-pulse-slow"></div>
                    <div className="absolute top-[20%] left-[20%] w-[100px] h-[100px] rounded-full border-4 border-blue-300/50 flex items-center justify-center z-20">
                      <div className="w-[80px] h-[80px] rounded-full bg-blue-500/80 backdrop-blur-md flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-[60%] right-[30%] w-[120px] h-[120px] rounded-full border-4 border-purple-300/50 flex items-center justify-center z-20">
                      <div className="w-[100px] h-[100px] rounded-full bg-purple-500/80 backdrop-blur-md flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-[20%] left-[40%] w-[140px] h-[140px] rounded-full border-4 border-blue-300/50 flex items-center justify-center z-20">
                      <div className="w-[120px] h-[120px] rounded-full bg-blue-500/80 backdrop-blur-md flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60"
                          height="60"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                      <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
                        <div className="w-[180px] h-[180px] rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path>
                            <path d="M12 8v4l2 2"></path>
                            <path d="M12 2v2"></path>
                            <path d="M12 20v2"></path>
                            <path d="m4.9 4.9 1.4 1.4"></path>
                            <path d="m17.7 17.7 1.4 1.4"></path>
                            <path d="M2 12h2"></path>
                            <path d="M20 12h2"></path>
                            <path d="m6.3 17.7-1.4 1.4"></path>
                            <path d="m19.1 4.9-1.4 1.4"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[url('/grid-lines.svg')] bg-repeat opacity-10 z-10"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <p className="text-white text-2xl font-light italic">"いずれ、世の中の素になる知恵。"</p>
                </div>
              </div>
              <div className="absolute top-[-20px] right-[-20px] w-[200px] h-[200px] border-2 border-blue-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] border border-blue-300/20 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>

        {/* 装飾的な要素 */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
          <span className="text-sm mb-2">スクロールして詳細を見る</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full py-12 bg-white border-b border-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">導入企業</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {clientLogos.map((client, index) => (
                <div key={index} className="flex items-center justify-center group">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    width={120}
                    height={40}
                    alt={`${client.name}のロゴ`}
                    className="grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-blue-600">
                <span className="h-px w-8 bg-blue-600"></span>
                <span className="text-sm font-medium tracking-wider uppercase">代表メッセージ</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                経験と革新の力で、
                <br />
                健康と自信を育む
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                ルテラス株式会社代表取締役の〇〇〇〇です。当社は、「経験と革新の力で、健康と自信を育み、社会に新たな価値を創造する」という企業理念のもと、健康とテクノロジーの融合による新たな価値創造に取り組んでいます。
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                健康コミュニティアプリ「ウェルテラス」の運営を通じて、多くの方々の健康目標達成をサポートするとともに、AIチャットボット導入支援やアプリ開発など、企業様の課題解決にも貢献しています。
              </p>
              <p className="font-medium text-gray-900 text-lg">代表取締役 〇〇 〇〇</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-blue-300 blur-xl opacity-20 animate-pulse-slow"></div>
                <div className="relative rounded-full overflow-hidden w-72 h-72 border-4 border-white shadow-xl">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="代表取締役の写真"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="w-full py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-blue-600">
                <span className="h-px w-8 bg-blue-600"></span>
                <span className="text-sm font-medium tracking-wider uppercase">私たちの強み</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                お客様の課題を解決する
                <br />
                専門性と実績
              </h2>
              <p className="text-xl text-gray-600">
                ルテラスは、健康とテクノロジーの融合により、新たな価値を創造します。豊富な経験と最新技術を組み合わせ、お客様のニーズに合わせたソリューションを提供します。
              </p>
              <ul className="space-y-5 mt-8">
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">革新的なアプリ開発</h3>
                    <p className="text-gray-600 mt-1">
                      最新技術を活用した健康コミュニティアプリ「ウェルテラス」の開発・運営
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AIチャットボット導入支援</h3>
                    <p className="text-gray-600 mt-1">業務効率化と顧客体験向上のためのAIチャットボット導入をサポート</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">パーソナルジム情報メディア</h3>
                    <p className="text-gray-600 mt-1">「GYM-TERAS」を通じたパーソナルジムの総合情報提供</p>
                  </div>
                </li>
              </ul>
              <div className="pt-6">
                <Link href="/about">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    企業情報を見る <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                      <path d="M12 2a10 10 0 0 1 10 10h-10V2z"></path>
                      <path d="M12 12 2.1 12.5"></path>
                      <path d="m8.5 8.5-5 .7"></path>
                      <path d="m15.5 8.5 5 .7"></path>
                      <path d="M12 12v10"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">データ分析</h4>
                    <p className="text-sm text-gray-600">健康データの可視化</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <line x1="12" y1="22" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">AI技術</h4>
                    <p className="text-sm text-gray-600">最新AIの活用</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">コミュニティ</h4>
                    <p className="text-sm text-gray-600">健康目標の共有</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">健康サポート</h4>
                    <p className="text-sm text-gray-600">専門家のアドバイス</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-full opacity-70 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-70 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-sm font-medium tracking-wider uppercase">サービス</span>
              <span className="h-px w-8 bg-blue-600"></span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-4">
              お客様のニーズに合わせた多様なソリューション
            </h2>
            <p className="text-xl text-gray-600">
              健康とテクノロジーの融合により、お客様の課題解決と新たな価値創造をサポートします。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/health-app.jpg"
                  width={500}
                  height={300}
                  alt="健康コミュニティアプリ「ウェルテラス」"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">健康コミュニティアプリ「ウェルテラス」</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  ダイエットやボディメイクなど、健康目標達成をサポートするコミュニティアプリ
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    目標設定と進捗管理
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    コミュニティサポート
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    専門家のアドバイス
                  </li>
                </ul>
                <Link href="/services#wellteras">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
                    詳細を見る{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/ai-chatbot.jpg"
                  width={500}
                  height={300}
                  alt="AIチャットボット導入支援"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">AIチャットボット導入支援</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  業務効率化と顧客体験向上のためのAIチャットボット導入をトータルサポート
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    要件定義から実装まで
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    カスタマイズ対応
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    運用サポート
                  </li>
                </ul>
                <Link href="/services#ai-chatbot">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
                    詳細を見る{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/app-development.jpg"
                  width={500}
                  height={300}
                  alt="アプリ開発"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">アプリ開発</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  お客様のニーズに合わせたカスタムアプリケーションの企画・開発
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    要件定義・企画立案
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    UI/UXデザイン
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    開発・運用サポート
                  </li>
                </ul>
                <Link href="/services#app-development">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
                    詳細を見る{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Link href="/services">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md text-lg font-medium">
                すべてのサービスを見る <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 scroll-fade-in">
              <p className="text-5xl font-bold">
                <span className="count-element" data-target="20">
                  20
                </span>
                <span className="text-blue-200">+</span>
              </p>
              <p className="text-blue-100 text-lg">導入企業数</p>
            </div>
            <div className="space-y-2 scroll-fade-in" style={{ transitionDelay: "0.1s" }}>
              <p className="text-5xl font-bold">
                <span className="count-element" data-target="98">
                  98
                </span>
                <span className="text-blue-200">%</span>
              </p>
              <p className="text-blue-100 text-lg">顧客満足度</p>
            </div>
            <div className="space-y-2 scroll-fade-in" style={{ transitionDelay: "0.2s" }}>
              <p className="text-5xl font-bold">
                <span className="count-element" data-target="10000">
                  10,000
                </span>
                <span className="text-blue-200">+</span>
              </p>
              <p className="text-blue-100 text-lg">アプリユーザー数</p>
            </div>
            <div className="space-y-2 scroll-fade-in" style={{ transitionDelay: "0.3s" }}>
              <p className="text-5xl font-bold">
                <span className="count-element" data-target="3">
                  3
                </span>
                <span className="text-blue-200">年</span>
              </p>
              <p className="text-blue-100 text-lg">業界経験</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-sm font-medium tracking-wider uppercase">お客様の声</span>
              <span className="h-px w-8 bg-blue-600"></span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-4">実績とフィードバック</h2>
            <p className="text-xl text-gray-600">お客様からいただいた声をご紹介します</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="flex items-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#3b82f6"
                    stroke="#3b82f6"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 hover:scale-125"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-8 text-lg italic">
                「ウェルテラスを導入してから、トレーニングの継続率が大幅に向上しました。コミュニティの力は本当に素晴らしいです。」
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4 transition-transform duration-300 hover:scale-110 text-xl">
                  YK
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-lg">山田 健太郎様</p>
                  <p className="text-gray-600">フィットネスジム経営</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="flex items-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#3b82f6"
                    stroke="#3b82f6"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 hover:scale-125"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-8 text-lg italic">
                「AIチャットボットの導入により、問い合わせ対応の効率が格段に上がりました。スタッフの負担軽減と顧客満足度向上の両方を実現できています。」
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4 transition-transform duration-300 hover:scale-110 text-xl">
                  MS
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-lg">佐藤 美咲様</p>
                  <p className="text-gray-600">IT企業 マーケティング部長</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="flex items-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#3b82f6"
                    stroke="#3b82f6"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 hover:scale-125"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-8 text-lg italic">
                「GYM-TERASへの掲載により、新規顧客の獲得数が1.5倍になりました。専門的な情報メディアとしての信頼性が高く、質の高い見込み客の獲得につながっています。」
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4 transition-transform duration-300 hover:scale-110 text-xl">
                  TN
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-lg">田中 直樹様</p>
                  <p className="text-gray-600">パーソナルジム オーナー</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="w-full py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-sm font-medium tracking-wider uppercase">最新情報</span>
              <span className="h-px w-8 bg-blue-600"></span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-4">ニュース・ブログ</h2>
            <p className="text-xl text-gray-600">最新の情報やお役立ち情報をお届けします</p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {/* ここを動的データに置き換え可能 */}
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    width={500}
                    height={300}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <Link
                    href={post.url}
                    className="text-blue-600 font-medium hover:underline inline-flex items-center group"
                  >
                    続きを読む{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-6 rounded-md text-lg font-medium"
              >
                すべての記事を見る <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-10 left-10 w-[40vw] h-[40vw] rounded-full bg-blue-400 blur-[100px] animate-blob"></div>
            <div className="absolute bottom-10 right-10 w-[35vw] h-[35vw] rounded-full bg-blue-300 blur-[100px] animate-blob animation-delay-2000"></div>
          </div>
          <div className="absolute inset-0 bg-[url('/grid-lines.svg')] bg-repeat opacity-10"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">お問い合わせ</h2>
              <p className="text-xl text-blue-100">
                ご質問やご相談など、お気軽にお問い合わせください。専門スタッフが丁寧にご対応いたします。
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0 animate-pulse-slow" />
                  <span className="text-blue-50 text-lg">24時間以内に担当者からご連絡</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle
                    className="h-6 w-6 text-blue-300 flex-shrink-0 animate-pulse-slow"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <span className="text-blue-50 text-lg">無料相談・お見積り</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle
                    className="h-6 w-6 text-blue-300 flex-shrink-0 animate-pulse-slow"
                    style={{ animationDelay: "1s" }}
                  />
                  <span className="text-blue-50 text-lg">専門スタッフによる丁寧な対応</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-500 hover:shadow-blue-500/20 hover:shadow-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせフォーム</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-all duration-300"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-all duration-300"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-all duration-300"
                    placeholder="お問い合わせ内容をご記入ください"
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-lg font-medium btn-shine">
                  送信する <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  ※送信することで、
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                    プライバシーポリシー
                  </Link>
                  に同意したことになります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// スクロールアニメーション用のスクリプト
{
  /* スクロールアニメーション用のスクリプト */
}
;<script
  dangerouslySetInnerHTML={{
    __html: `
      document.addEventListener('DOMContentLoaded', function() {
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

        // カウントアップアニメーション
        const countElements = document.querySelectorAll('.count-element');
        
        countElements.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'), 10);
          const duration = 2000; // 2秒
          const step = target / (duration / 30); // 30msごとに更新
          let current = 0;
          
          const updateCount = () => {
            current += step;
            if (current < target) {
              el.textContent = Math.floor(current);
              setTimeout(updateCount, 30);
            } else {
              el.textContent = target;
            }
          };
          
          // スクロールが要素に到達したらカウントアップ開始
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                updateCount();
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.5 });
          
          observer.observe(el);
        });
      });
    `,
  }}
/>

