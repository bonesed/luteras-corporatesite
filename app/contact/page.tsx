"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setFormSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">お問い合わせ</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ご質問やご相談など、お気軽にお問い合わせください
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter text-blue-800">お問い合わせフォーム</h2>
                <p className="text-gray-500">
                  以下のフォームに必要事項をご入力の上、送信ボタンをクリックしてください。
                </p>
              </div>
              {formSubmitted ? (
                <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
                  <h3 className="text-xl font-bold text-green-700 mb-2">お問い合わせありがとうございます</h3>
                  <p className="text-green-600">内容を確認の上、担当者より折り返しご連絡いたします。</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 rounded-xl border border-blue-100 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="grid gap-2">
                    <Label htmlFor="name">
                      お名前 <span className="text-red-500">*</span>
                    </Label>
                    <Input id="name" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">
                      メールアドレス <span className="text-red-500">*</span>
                    </Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">
                      電話番号 <span className="text-red-500">*</span>
                    </Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company">
                      会社名 <span className="text-red-500">*</span>
                    </Label>
                    <Input id="company" required />
                  </div>
                  <div className="grid gap-2">
                    <Label>
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup defaultValue="service" className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="service" id="service" />
                        <Label htmlFor="service">サービスについて</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="business" id="business" />
                        <Label htmlFor="business">業務提携について</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="recruitment" id="recruitment" />
                        <Label htmlFor="recruitment">採用について</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">その他</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="grid gap-2">
                    <Label>ご興味のあるサービス</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wellteras">健康コミュニティアプリ「ウェルテラス」</SelectItem>
                        <SelectItem value="ai-chatbot">AIチャットボット導入支援</SelectItem>
                        <SelectItem value="app-development">アプリ開発</SelectItem>
                        <SelectItem value="gym-teras">パーソナルジム総合情報メディア「GYM-TERAS」</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </Label>
                    <Textarea id="message" rows={5} required />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="privacy" required />
                    <Label htmlFor="privacy" className="text-sm">
                      <a href="/privacy-policy" className="text-blue-600 hover:underline">
                        プライバシーポリシー
                      </a>
                      に同意します
                    </Label>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    送信する
                  </Button>
                </form>
              )}
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter text-blue-800">お問い合わせ先</h2>
                <p className="text-gray-500">お電話やメールでのお問い合わせも受け付けております。</p>
              </div>
              <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-blue-700">所在地</h3>
                      <p className="text-gray-500">〒000-0000</p>
                      <p className="text-gray-500">東京都○○区○○1-1-1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-blue-700">電話番号</h3>
                      <p className="text-gray-500">03-0000-0000</p>
                      <p className="text-gray-500">（平日 9:00〜18:00）</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-blue-700">メールアドレス</h3>
                      <p className="text-gray-500">info@luteras.co.jp</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-blue-100 bg-gray-100 p-6 shadow-sm">
                <h3 className="font-medium text-blue-700 mb-4">アクセスマップ</h3>
                <div className="aspect-video w-full bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500">Googleマップが表示されます</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

