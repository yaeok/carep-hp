import Image from 'next/image'
import Link from 'next/link'

import Footer from '@/components/Footer/Footer'
import { Nav } from '@/components/nav'

export default function Service() {
  const services = [
    {
      id: '01',
      name: 'AI学習コーチ',
      description:
        'AIがあなたの学習を応援、学習の優先順位をつけてくれるコーチのAIコーチを作っています。',
      imageUrl: '/assets/screenshot_ai_coach.jpg',
      evaluation: 4.9,
      link: '#',
      links: [
        {
          platform: 'Android',
          url: 'https://play.google.com/store/apps/details?id=com.carep.learningapp',
          imageUrl: '/assets/google-play-badge.png',
        },
        {
          platform: 'iOS',
          url: 'https://apps.apple.com/app/ai-coach/id6505083284',
          imageUrl: '/assets/app-store-badge.jpg',
        },
      ],
    },
    {
      id: '02',
      name: '論証暗記アプリ anki bar',
      description:
        '司法試験専用の論証暗記アプリ「anki bar」を開発、運営しています。司法試験・予備試験・ロースクール受験生向けに特化した論証用アプリで、OCRを利用して簡単に論証を入力できるようになっています！',
      imageUrl: '/assets/screenshot_anki_bar.jpg',
      link: '#',
      evaluation: 4.1,
      links: [
        {
          platform: 'Android',
          url: 'https://play.google.com/store/apps/details?id=com.carep.shikaron_anki',
          imageUrl: '/assets/google-play-badge.png',
        },
        {
          platform: 'iOS',
          url: 'https://apps.apple.com/jp/app/anki-bar/id6468968986',
          imageUrl: '/assets/app-store-badge.jpg',
        },
      ],
    },
    {
      id: '03',
      name: '音声学習アプリ 音勉 社労士',
      description:
        '音勉は、移動中や作業中に学習できる音声学習アプリです。試験対策やスキルアップに役立つコンテンツを提供しています。現在は社労士試験向けのみですが、今後順次拡大予定です。',
      imageUrl: '/assets/screen_shot_otoben_sharoshi.jpg',
      evaluation: 0,
      link: '#',
      links: [
        {
          platform: 'Android',
          url: 'https://play.google.com/store/apps/details?id=com.carep.voice_study',
          imageUrl: '/assets/google-play-badge.png',
        },
        {
          platform: 'iOS',
          url: 'https://apps.apple.com/jp/app/%E9%9F%B3%E5%8B%89-%E7%A4%BE%E5%8A%B4%E5%A3%AB/id6741039075',
          imageUrl: '/assets/app-store-badge.jpg',
        },
      ],
    },
    {
      id: '04',
      name: '音勉 司法試験・予備試験',
      description:
        '大好評音勉シリーズの司法試験・予備試験版です。通勤中でも、家事をしながらでも、音声を聞くだけで学習ができるアプリです。',
      imageUrl: '/assets/screenshot_otoben_law.jpg',
      evaluation: 0,
      link: '#',
      links: [
        {
          platform: 'iOS',
          url: 'https://apps.apple.com/jp/app/id6741192862',
          imageUrl: '/assets/app-store-badge.jpg',
        },
      ],
    },
    {
      id: '05',
      name: '小説で英語を学ぶ | novel english',
      description:
        '小説で楽しく英語を学ぶアプリです。クイズ機能や日本語訳機能など、いろんな機能で英語学習を支援します。',
      imageUrl: '/assets/screenshot_novel_english.jpg',
      link: '#',
      evaluation: 0,
      links: [
        {
          platform: 'iOS',
          url: 'https://apps.apple.com/jp/app/id6744064644',
          imageUrl: '/assets/app-store-badge.jpg',
        },
      ],
    },
    {
      id: '06',
      name: 'かけざん脳トレ',
      description:
        '2桁×2桁の掛け算を楽しく学びながら脳を鍛えるアプリです。ゲーム感覚で瞬時に計算できるようになり、記憶力・計算力を向上させます。',
      imageUrl: '/assets/screenshot_calculation.jpg',
      evaluation: 0,
      link: '#',
      links: [
        {
          platform: 'Android',
          url: 'https://play.google.com/store/apps/details?id=com.carep.calculation_training',
          imageUrl: '/assets/google-play-badge.png',
        },
        {
          platform: 'iOS',
          url: 'https://apps.apple.com/jp/app/%E6%8E%9B%E3%81%91%E7%AE%97%E8%84%B3%E3%83%88%E3%83%AC/id6741328485',
          imageUrl: '/assets/app-store-badge.jpg',
        },
      ],
    },
    {
      id: '07',
      name: '予備試験短答式試験管理アプリ',
      description:
        '短答式試験の自動採点と記録を行うアプリです。短答式試験記録を効率的に行うことができます。',
      imageUrl: '/assets/screenshot_tantou.jpg',
      link: '#',
      evaluation: 0,
      links: [
        {
          platform: 'iOS',
          url: 'https://apps.apple.com/jp/app/id6741149874',
          imageUrl: '/assets/app-store-badge.jpg',
        },
      ],
    },
    {
      id: '08',
      name: 'AI秘書マチコさん',
      description:
        '日常の相談相手にAI秘書のマチコさんを開発しました。掃除のこと、料理のこと、育児のこと、仕事のこと、何でも相談できます。AI秘書マチコさんはあなたの生活をサポートします。',
      imageUrl: '/assets/screenshot_legal_assistant.jpg',
      link: '#',
      evaluation: 0,
      links: [
        {
          platform: 'iOS',
          url: 'https://apps.apple.com/jp/app/id6744846781',
          imageUrl: '/assets/app-store-badge.jpg',
        },
      ],
    },
    {
      id: '09',
      name: 'ローカルラリー',
      description:
        '地元の良さをウォークラリーをしながら再発見！地域活性化アプリです。地元の観光スポットや飲食店を巡ることで、地域の魅力を再発見できます。',
      imageUrl: '/assets/coming_soon.jpg',
      link: '#',
      evaluation: 0,
      links: [
        {
          platform: 'iOS',
          url: '',
          imageUrl: '/assets/app-store-badge.jpg',
        },
      ],
    },
  ]

  const achievements = [
    {
      title: 'プライム市場上場、国内大手化学メーカーのスマホアプリ開発',
      imageUrl: '/assets/items_icon.png',
    },
    {
      title:
        'プライム市場上場、世界61ヶ国に約90の拠点を持つ大手総合商社の子会社のWEBアプリ開発',
      imageUrl: '/assets/group_icon.png',
    },
    {
      title: 'プライム市場上場、世界最大のハンバーガーチェーン店のWebAR開発',
      imageUrl: '/assets/hamburger_icon.png',
    },
  ]

  return (
    <>
      <Nav />
      <main className="mt-20">
        <div className="w-full bg-gradient-custom">
          <div className="w-full mx-auto px-4 pb-12">
            <section className="py-24 flex flex-col justify-center items-center gap-4">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold text-white">SERVICE</h1>
                <div className="w-1/3 border-b-2 border-white" />
              </div>
            </section>

            <div className="flex flex-col justify-center items-center gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-full lg:w-2/3 bg-white rounded-3xl shadow-xl shadow-gray-300 p-4 md:p-8 hover:shadow-none hover:translate-y-1 duration-300 transition-all"
                >
                  <section className="w-full flex flex-col gap-4 justify-center items-center">
                    {/* サービス名 */}
                    <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-16 items-center justify-start">
                      <div className="font-extrabold flex flex-col items-center justify-center text-[#F49E00]">
                        <span className="text-5xl">{service.id}</span>
                        <span className="text-sm">service</span>
                      </div>
                      <h2 className="text-2xl font-bold">{service.name}</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-start gap-4">
                      {/* 画像 */}
                      <div className="w-full lg:w-1/2 flex justify-center">
                        <Image
                          src={service.imageUrl}
                          alt={service.name}
                          width={500}
                          height={400}
                          className="rounded-lg"
                        />
                      </div>
                      {/* 説明 + ボタン */}
                      <div className="w-full lg:w-1/2 px-4 flex flex-col justify-between items-center gap-4">
                        <p className="text-lg text-gray-700 mb-4">
                          {service.description}
                        </p>
                        {/* 評価 */}
                        {service.evaluation > 0 && (
                          <div className="flex flex-col xl:flex-row justify-center items-center gap-2 xl:gap-4">
                            <span className="text-lg font-bold">
                              Apple Store Review：{service.evaluation}
                            </span>
                            <div>
                              <div className="relative inline-block text-gray-400 text-xl">
                                <span
                                  className="absolute left-0 text-yellow-500 overflow-hidden"
                                  style={{
                                    width: `${service.evaluation * 20}%`,
                                  }}
                                >
                                  ★★★★★
                                </span>
                                <span>★★★★★</span>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* 各プラットフォームへのリンク */}
                        <div className="flex flex-row gap-2">
                          {service.links.map((link) => (
                            <Link
                              key={link.url}
                              href={link.url}
                              className="inline-block"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={link.imageUrl}
                                alt={`${link.platform} Badge`}
                                width={200}
                                height={60}
                                className="rounded-lg"
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              ))}
              <div className="w-full lg:w-2/3 bg-white rounded-3xl shadow-xl shadow-gray-300 p-4 md:p-8 hover:shadow-none hover:translate-y-1 duration-300 transition-all">
                <section className="w-full flex flex-col gap-4 justify-center items-center">
                  {/* サービス名 */}
                  <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-16 items-center justify-start">
                    <div className="font-extrabold flex flex-col items-center justify-center text-[#F49E00]">
                      <span className="text-5xl">10</span>
                      <span className="text-sm">service</span>
                    </div>
                    <h2 className="text-2xl font-bold">
                      スマホアプリ・WEBアプリ・AI・AR開発
                    </h2>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-12">
                    {/* 説明 */}
                    <p className="text-lg text-gray-700">
                      スマホアプリはiOS・Androidのどちらでも開発可能です。WEBアプリはReact・Vueなどのフレームワークを利用して開発します。
                    </p>
                    <div className="border-b-2 border-[#F49E00] w-full" />
                    <section className="w-full flex flex-col gap-12 justify-center items-center">
                      <h3 className="text-2xl font-bold text-[#F49E00] text-center">
                        実績のご紹介
                      </h3>
                      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
                        {achievements.map((achievement, index) => (
                          <div
                            key={index}
                            className="w-full lg:w-1/3 relative flex flex-col items-center justify-center"
                          >
                            <Image
                              src="/assets/checkmark.png"
                              alt="check mark"
                              width={50}
                              height={50}
                              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                            />
                            <div className="w-full aspect-7/2 sm:aspect-7/1 lg:aspect-6/8 xl:aspect-7/6 2xl:aspect-7/4 border-2 border-[#F3C64D] rounded-xl px-4 pt-8 pb-4 bg-[#F3C64D]/5">
                              <p className="text-black">{achievement.title}</p>
                            </div>
                            <Image
                              src={achievement.imageUrl}
                              alt="check mark"
                              width={50}
                              height={50}
                              className="absolute bottom-4 right-6 transform -translate-x-1/2 hidden md:block"
                            />
                          </div>
                        ))}
                      </div>
                      <p className="text-xl font-bold text-[#F49E00]">
                        詳細はお問い合わせください。
                      </p>
                    </section>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
