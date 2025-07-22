'use client'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic' // dynamic をインポート

import Footer from '@/components/Footer/Footer'
import { Nav } from '@/components/nav'

// dynamic import を使って、クライアントサイドでのみコンポーネントを読み込む
const BubbleAnimation = dynamic(
  () => import('@/components/BubbleAnimation/BubbleAnimation'),
  { ssr: false }
)
// お知らせのダミーデータ
const newsItems = [
  {
    id: 1,
    date: '2025.07.04',
    title:
      'AI学習コーチアプリ、新機能「学習計画の自動最適化」をリリースしました。',
  },
  {
    id: 2,
    date: '2025.06.20',
    title:
      'メディア掲載：『Next Tech』に弊社代表のインタビューが掲載されました。',
  },
  {
    id: 3,
    date: '2025.06.01',
    title:
      '「論証暗記アプリ anki bar」がApp Storeの教育カテゴリでトップ10入りしました。',
  },
]

// 価値観のデータ
const values = [
  {
    number: '01',
    title: 'のびのびやる。',
    description:
      '迷うなら主張しよう。迷うならやってみよう。\nこの瞬間を、精一杯のびのびと。',
    icon: (
      <svg
        className='w-12 h-12 text-white'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
  },
  {
    number: '02',
    title: '勇気とは、重圧下での気品である。',
    description:
      '挑戦には重圧がつきもの。\n重圧がかかったときにこそ気品を持って取り組もう。',
    icon: (
      <svg
        className='w-12 h-12 text-white'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        />
      </svg>
    ),
  },
  {
    number: '03',
    title: '想像力を働かせよう。',
    description:
      'ユーザー、クライアント、隣で一緒に働く人。\n関わる人の頭の中を想像しながら仕事をしよう。',
    icon: (
      <svg
        className='w-12 h-12 text-white'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v4z'
        />
      </svg>
    ),
  },
]

// 事業内容のデータ
const businessItems = [
  {
    title: '自社開発事業',
    description:
      'AI技術を活用した学習アプリケーションの開発を行っています。\n「AI学習コーチ」や「論証暗記アプリ anki bar」など、ユーザーの学習体験を向上させる製品を提供しています。',
  },
  {
    title: '受託開発事業',
    description:
      '法人向けのシステム開発を行っています。\nAI・AR技術を活用したスマホアプリやWEBアプリの開発を得意とし、クライアントのニーズに合わせたカスタマイズが可能です。特に、AI技術を活用した学習支援アプリケーションの開発に注力しています。',
  },
]

// サービス紹介のデータ
const services = [
  {
    name: 'AI学習コーチ',
    description:
      'AIがあなたの学習を応援、学習の優先順位をつけてくれるコーチのAIコーチを作っています。',
    imageUrl: '/assets/screenshot_ai_coach.jpg',
  },
  {
    name: '論証暗記アプリ anki bar',
    description:
      '司法試験専用の論証暗記アプリ「anki bar」を開発、運営しています。',
    imageUrl: '/assets/screenshot_anki_bar.jpg',
  },
  {
    name: 'スマホアプリ・WEBアプリ開発',
    description:
      'iOS・Android、WEBアプリ、AI・AR開発など、お客様のニーズに合わせた開発を承ります。',
    imageUrl: '/assets/items_icon.png',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Carep Technologies株式会社 - 誰でも、いつでも、学びの可能性を。
        </title>
        <meta
          name='description'
          content='Carep Technologiesは「誰でも、いつでも、学びの可能性を。」を理念に、AI技術を活用した学習アプリケーションや法人向けのシステム開発を提供します。'
        />
        <meta property='og:title' content='Carep Technologies株式会社' />
        <meta
          property='og:description'
          content='誰でも、いつでも、学びの可能性を。'
        />
        <meta
          property='og:image'
          content='https://carep-tech.com/assets/ogp_image.png'
        />
        <meta property='og:url' content='https://carep-tech.com' />
        <meta property='og:type' content='website' />
      </Head>

      <BubbleAnimation />

      <Nav />

      <main className='relative z-10'>
        {/* Hero Section */}
        <section className='py-20 md:py-32 h-screen flex items-center justify-center'>
          <div className='container mx-auto px-4 flex flex-col items-center text-center flex-1 animate-fade-in-up gap-12'>
            <h1 className='text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight'>
              誰でも、いつでも、
              <span className='text-orange-500 block md:inline'>
                学びの可能性を。
              </span>
            </h1>
            <p className='text-lg text-gray-600 mx-auto md:mx-0'>
              私たちは、テクノロジーの力で、すべての人が持つ学習意欲を最大限に引き出し、自らの力で未来を切り拓くことを支援します。
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className='py-20 md:py-32 h-screen flex-row max-w-5xl mx-auto'>
          <div className='flex-1 px-4 mx-auto'>
            <div className=''>
              <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-6'>
                <span className='font-bold text-orange-600'>私たち</span>
                が目指す世界
              </h2>
              <div className='text-lg md:text-lg text-gray-700 leading-relaxed space-y-6'>
                <p>人生は産まれながらにして不平等だ。</p>
                <p>
                  しかし、
                  <span className='font-bold text-orange-600'>
                    「学びの可能性」
                  </span>
                  があれば平等に近づけられるはず。
                </p>
                <p>自分の意志さえあれば。</p>
                <p className='font-bold text-2xl pt-4'>
                  学ぶことは自立すること。
                  <br />
                  人生を豊かにすること。
                </p>
              </div>
            </div>
          </div>
          <div className='flex-1'></div>
        </section>

        {/* Values Section */}
        <section className='bg-white/30 backdrop-blur-sm md:h-screen flex items-center justify-center'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-sm font-bold uppercase text-orange-500 tracking-widest'>
                Our Values
              </h2>
              <p className='mt-2 text-3xl md:text-4xl font-extrabold text-gray-900'>
                私たちが大事にしていること
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
              {values.map((value, index) => (
                <div
                  key={value.number}
                  className='bg-orange-500 rounded-2xl p-8 text-white flex flex-col items-start shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate-scale-in'
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='bg-white/20 p-3 rounded-full'>
                      {value.icon}
                    </div>
                    <span className='text-5xl font-bold opacity-50'>
                      {value.number}
                    </span>
                  </div>
                  <h3 className='text-2xl font-bold mb-3'>{value.title}</h3>
                  {value.description.split('\n').map((line, index) => (
                    <p
                      key={index}
                      className='text-base text-orange-100 leading-relaxed'
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Section */}
        <section className='py-24'>
          <div className='container mx-auto px-4'>
            <div className='mb-16'>
              <p className='text-sm font-bold uppercase text-orange-500 tracking-widest'>
                Our Business
              </p>
              <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 mt-2'>
                私たちの事業
              </h2>
            </div>
            <div className='max-w-4xl mx-auto space-y-12'>
              {businessItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index > 0 ? 'pt-12 border-t border-gray-200' : ''
                  }`}
                >
                  <div className='flex-shrink-0 flex items-center gap-4 md:w-1/3'>
                    <div className='bg-orange-100 p-4 rounded-full'>
                      <svg
                        className='w-8 h-8 text-orange-500'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        ></path>
                      </svg>
                    </div>
                    <h3 className='text-2xl font-bold text-gray-800'>
                      {item.title}
                    </h3>
                  </div>
                  <div className='md:w-2/3'>
                    <p className='text-gray-600 leading-relaxed whitespace-pre-line'>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Service Section */}
        <section className='py-24 bg-white/70 backdrop-blur-sm'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-sm font-bold uppercase text-orange-500 tracking-widest'>
                Service
              </h2>
              <p className='mt-2 text-3xl md:text-4xl font-extrabold text-gray-900'>
                サービス事例
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {services.map((service, index) => (
                <div
                  key={index}
                  className='bg-white rounded-2xl shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300'
                >
                  <div className='relative'>
                    <Image
                      src={service.imageUrl}
                      alt={service.name}
                      width={600}
                      height={400}
                      className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-gray-800 mb-2'>
                      {service.name}
                    </h3>
                    <p className='text-gray-600 text-sm'>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='text-center mt-16'>
              <Link
                href='/service'
                className='inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-transform transform hover:scale-110'
              >
                全てのサービスを見る
              </Link>
            </div>
          </div>
        </section>
        {/* News Section */}
        <section className='py-24 bg-white/70 backdrop-blur-sm'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-12'>
              <h2 className='text-sm font-bold uppercase text-orange-500 tracking-widest'>
                News
              </h2>
              <p className='mt-2 text-3xl md:text-4xl font-extrabold text-gray-900'>
                お知らせ
              </p>
            </div>
            <div className='max-w-3xl mx-auto'>
              <ul className='space-y-4'>
                {newsItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/news/${item.id}`}
                      className='block p-6 bg-white hover:bg-orange-50 rounded-lg transition-colors group shadow-sm hover:shadow-md'
                    >
                      <div className='flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-2'>
                        <p className='text-sm text-gray-500'>{item.date}</p>
                        <h3 className='text-base font-semibold text-gray-800 group-hover:text-orange-600'>
                          {item.title}
                        </h3>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='text-center mt-12'>
                <Link
                  href='/news'
                  className='inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-transform transform hover:scale-105'
                >
                  お知らせ一覧へ
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
