import Head from 'next/head'
import Image from 'next/image'

import { Nav } from '@/components/nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Carep Technologies株式会社</title>
        <meta property="og:title" content="" />
        <meta
          property="og:description"
          content="誰でも、いつでも、学びの可能性を。"
        />
        <meta
          property="og:image"
          content="https://carep-tech.com/assets/ogp_image.png"
        />
        <meta property="og:url" content="https://carep-tech.com" />
        <meta property="og:type" content="website" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="学びの可能性 | サービス名" />
        <meta name="twitter:description" content="誰でも、いつでも、学びの可能性を。" />
        <meta name="twitter:image" content="https://yourdomain.com/assets/og-image.png" /> */}
      </Head>
      <Nav />
      <main className="pt-20">
        <section className="relative bg-[#FFFAE9]">
          <div className="container xl:w-2/3 mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 py-20">
            {/* Text Section */}
            <div className="flex-1 flex justify-center text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-orange-500 leading-relaxed flex flex-col gap-4">
                <span>誰でも、</span>
                <span>いつでも、</span>
                <span>学びの可能性を。</span>
              </h1>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/assets/image1.png"
                alt="Hero Illustration"
                width={400}
                height={400}
                className="w-100 h-auto"
              />
            </div>
          </div>
        </section>

        {/* Learning Steps Section */}
        <section className="relative bg-[#FFF3E0] py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/assets/image4.png"
                alt="Steps Illustration"
                width={400}
                height={300}
                className="w-full max-w-sm h-auto"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 text-left px-6">
              <p className="text-lg mb-4">人生は産まれながらにして不平等だ。</p>
              <p className="text-lg mb-4">
                けど、<span className="font-bold">「学びの可能性」</span>
                であれば平等に近づけられるはず。
              </p>
              <p className="text-lg mb-4">自分の意志さえあれば。</p>
              <h2 className="text-2xl font-bold mb-2">
                学ぶことは自立すること。
              </h2>
              <h2 className="text-2xl font-bold">人生を豊かにすること。</h2>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-[#FFFAE9] pt-24 pb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-[#F49E00] mb-12">
              こんなことを大事にしています。
            </h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              {[
                {
                  number: '01',
                  title: 'のびのびやる。',
                  description:
                    '迷うなら主張しよう。迷うならやってみよう。\nこの瞬間を、精一杯のびのびと。',
                  image: '/assets/image2.png',
                },
                {
                  number: '02',
                  title: '勇気とは、重圧下での気品である。',
                  description:
                    '挑戦には重圧がつきもの。\n重圧がかかったときにこそ気品を持って取り組もう。',
                  image: '/assets/image3.png',
                },
                {
                  number: '03',
                  title: '想像力を働かせよう。',
                  description:
                    'ユーザー、クライアント、隣で一緒に働く人。\n関わる人の頭の中を想像しながら仕事をしよう。',
                  image: '/assets/image2.png',
                },
              ].map((feature) => (
                <div
                  key={feature.number}
                  className="relative bg-[#F49E00] rounded-3xl px-2 py-12 text-white overflow-visible"
                >
                  <div className="flex flex-row gap-4 items-center">
                    {/* 大きな数字 */}
                    <div className="text-8xl font-semibold opacity-70">
                      {feature.number}
                    </div>

                    {/* テキストコンテンツ */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4">
                        {feature.title}
                      </h3>
                      {feature.description.split('\n').map((line, index) => (
                        <p key={index} className="text-lg mb-2">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* 画像（右上に重ねて配置） */}
                  {feature.image && (
                    <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 hidden sm:block">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={125}
                        height={125}
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
