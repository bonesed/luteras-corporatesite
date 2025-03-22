"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { PlusCircle, Pencil, Trash2, Eye, Upload, Save, MoreHorizontal, Search } from "lucide-react"

export default function AdminPage() {
  const [selectedTab, setSelectedTab] = useState("dashboard")
  const [isEditing, setIsEditing] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)

  // ダミーデータ
  const blogPosts = [
    {
      id: 1,
      title: "健康管理アプリの最新トレンド",
      excerpt: "健康管理アプリの最新トレンドと今後の展望について解説します。",
      category: "健康",
      date: "2023年12月15日",
      status: "公開",
    },
    {
      id: 2,
      title: "AIチャットボット導入事例",
      excerpt: "当社のAIチャットボット導入により業務効率が向上した事例をご紹介します。",
      category: "AI",
      date: "2023年12月1日",
      status: "公開",
    },
    {
      id: 3,
      title: "効果的なトレーニング方法",
      excerpt: "パーソナルトレーナーが教える、効果的なトレーニング方法をご紹介します。",
      category: "フィットネス",
      date: "2023年11月15日",
      status: "公開",
    },
    {
      id: 4,
      title: "新サービス開発中",
      excerpt: "近日公開予定の新サービスについての情報をお届けします。",
      category: "お知らせ",
      date: "2023年12月20日",
      status: "下書き",
    },
  ]

  const recentInquiries = [
    {
      id: 1,
      name: "山田太郎",
      email: "yamada@example.com",
      subject: "サービスについての質問",
      date: "2023年12月18日",
      status: "未対応",
    },
    {
      id: 2,
      name: "佐藤花子",
      email: "sato@example.com",
      subject: "お見積り依頼",
      date: "2023年12月17日",
      status: "対応中",
    },
    {
      id: 3,
      name: "鈴木一郎",
      email: "suzuki@example.com",
      subject: "導入事例について",
      date: "2023年12月15日",
      status: "完了",
    },
  ]

  type Blog = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  status: string;
  content: string;
};


const handleEditBlog = (blog: Blog) => {
  setSelectedBlog(blog);
  setIsEditing(true);
};


  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">ルテラス管理画面</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">管理者：admin</span>
            <Button variant="outline" size="sm">
              ログアウト
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 border-r bg-gray-50 p-4">
          <nav className="space-y-2">
            <Button
              variant={selectedTab === "dashboard" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setSelectedTab("dashboard")}
            >
              ダッシュボード
            </Button>
            <Button
              variant={selectedTab === "blog" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setSelectedTab("blog")}
            >
              ブログ管理
            </Button>
            <Button
              variant={selectedTab === "inquiries" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setSelectedTab("inquiries")}
            >
              お問い合わせ管理
            </Button>
            <Button
              variant={selectedTab === "services" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setSelectedTab("services")}
            >
              サービス管理
            </Button>
            <Button
              variant={selectedTab === "users" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setSelectedTab("users")}
            >
              ユーザー管理
            </Button>
            <Button
              variant={selectedTab === "settings" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setSelectedTab("settings")}
            >
              設定
            </Button>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          {selectedTab === "dashboard" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">ダッシュボード</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>ブログ記事</CardTitle>
                    <CardDescription>公開済み記事数</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">3</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>お問い合わせ</CardTitle>
                    <CardDescription>未対応件数</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">1</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>アクセス数</CardTitle>
                    <CardDescription>今月の訪問者数</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">1,234</div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-bold mt-8">最近のブログ記事</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>タイトル</TableHead>
                    <TableHead>カテゴリ</TableHead>
                    <TableHead>公開日</TableHead>
                    <TableHead>ステータス</TableHead>
                    <TableHead className="text-right">操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogPosts.slice(0, 3).map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.category}</TableCell>
                      <TableCell>{post.date}</TableCell>
                      <TableCell>
                        <Badge variant={post.status === "公開" ? "default" : "secondary"}>{post.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => handleEditBlog(post)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <h3 className="text-xl font-bold mt-8">最近のお問い合わせ</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>名前</TableHead>
                    <TableHead>件名</TableHead>
                    <TableHead>受信日</TableHead>
                    <TableHead>ステータス</TableHead>
                    <TableHead className="text-right">操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentInquiries.map((inquiry) => (
                    <TableRow key={inquiry.id}>
                      <TableCell className="font-medium">{inquiry.name}</TableCell>
                      <TableCell>{inquiry.subject}</TableCell>
                      <TableCell>{inquiry.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            inquiry.status === "未対応"
                              ? "destructive"
                              : inquiry.status === "対応中"
                                ? "default"
                                : "outline"
                          }
                        >
                          {inquiry.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {selectedTab === "blog" && !isEditing && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">ブログ管理</h2>
                <Button
                  onClick={() => {
                    setSelectedBlog(null)
                    setIsEditing(true)
                  }}
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  新規作成
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input type="search" placeholder="記事を検索..." className="pl-8" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="ステータス" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="published">公開</SelectItem>
                    <SelectItem value="draft">下書き</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="カテゴリ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="health">健康</SelectItem>
                    <SelectItem value="ai">AI</SelectItem>
                    <SelectItem value="fitness">フィットネス</SelectItem>
                    <SelectItem value="news">お知らせ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>タイトル</TableHead>
                    <TableHead>カテゴリ</TableHead>
                    <TableHead>公開日</TableHead>
                    <TableHead>ステータス</TableHead>
                    <TableHead className="text-right">操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.category}</TableCell>
                      <TableCell>{post.date}</TableCell>
                      <TableCell>
                        <Badge variant={post.status === "公開" ? "default" : "secondary"}>{post.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleEditBlog(post)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {selectedTab === "blog" && isEditing && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{selectedBlog ? "記事を編集" : "新規記事作成"}</h2>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  キャンセル
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">タイトル</Label>
                    <Input id="title" defaultValue={selectedBlog?.title || ""} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">抜粋</Label>
                    <Textarea id="excerpt" defaultValue={selectedBlog?.excerpt || ""} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">本文</Label>
                    <Textarea id="content" rows={15} />
                  </div>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>公開設定</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="status">ステータス</Label>
                        <Select defaultValue={selectedBlog?.status === "公開" ? "published" : "draft"}>
                          <SelectTrigger>
                            <SelectValue placeholder="ステータスを選択" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="published">公開</SelectItem>
                            <SelectItem value="draft">下書き</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category">カテゴリ</Label>
                        <Select defaultValue={selectedBlog?.category?.toLowerCase() || ""}>
                          <SelectTrigger>
                            <SelectValue placeholder="カテゴリを選択" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="health">健康</SelectItem>
                            <SelectItem value="ai">AI</SelectItem>
                            <SelectItem value="fitness">フィットネス</SelectItem>
                            <SelectItem value="news">お知らせ</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="date">公開日</Label>
                        <Input id="date" type="date" defaultValue="2023-12-20" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Save className="mr-2 h-4 w-4" />
                        保存する
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>アイキャッチ画像</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border rounded-md p-4 flex flex-col items-center justify-center gap-4">
                        <div className="w-full aspect-video bg-gray-100 rounded-md flex items-center justify-center">
                          {selectedBlog ? (
                            <img
                              src="/placeholder.svg?height=200&width=300"
                              alt="アイキャッチ画像"
                              className="max-w-full max-h-full object-cover rounded-md"
                            />
                          ) : (
                            <div className="text-gray-400 text-center p-4">
                              <Upload className="mx-auto h-8 w-8 mb-2" />
                              <p>画像をアップロード</p>
                            </div>
                          )}
                        </div>
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" />
                          画像を選択
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "inquiries" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">お問い合わせ管理</h2>

              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input type="search" placeholder="お問い合わせを検索..." className="pl-8" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="ステータス" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="unread">未対応</SelectItem>
                    <SelectItem value="inprogress">対応中</SelectItem>
                    <SelectItem value="completed">完了</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>名前</TableHead>
                    <TableHead>メールアドレス</TableHead>
                    <TableHead>件名</TableHead>
                    <TableHead>受信日</TableHead>
                    <TableHead>ステータス</TableHead>
                    <TableHead className="text-right">操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentInquiries.map((inquiry) => (
                    <TableRow key={inquiry.id}>
                      <TableCell className="font-medium">{inquiry.name}</TableCell>
                      <TableCell>{inquiry.email}</TableCell>
                      <TableCell>{inquiry.subject}</TableCell>
                      <TableCell>{inquiry.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            inquiry.status === "未対応"
                              ? "destructive"
                              : inquiry.status === "対応中"
                                ? "default"
                                : "outline"
                          }
                        >
                          {inquiry.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {selectedTab === "services" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">サービス管理</h2>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  新規サービス
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>サービス名</TableHead>
                    <TableHead>説明</TableHead>
                    <TableHead>表示順</TableHead>
                    <TableHead>表示状態</TableHead>
                    <TableHead className="text-right">操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">健康コミュニティアプリ「ウェルテラス」</TableCell>
                    <TableCell>ダイエットやボディメイクなど、健康目標達成をサポートするコミュニティアプリ</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Switch id="service1" defaultChecked />
                        <Label htmlFor="service1">表示</Label>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AIチャットボット導入支援</TableCell>
                    <TableCell>業務効率化と顧客体験向上のためのAIチャットボット導入をトータルサポート</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Switch id="service2" defaultChecked />
                        <Label htmlFor="service2">表示</Label>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">アプリ開発</TableCell>
                    <TableCell>お客様のニーズに合わせたカスタムアプリケーションの企画・開発</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Switch id="service3" defaultChecked />
                        <Label htmlFor="service3">表示</Label>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

