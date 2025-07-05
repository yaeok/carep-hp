import Footer from '@/components/Footer/Footer'
import { Nav } from '@/components/nav'

export default function About() {
  const members = [
    {
      id: '01',
      name: '八重尾 立志',
      position: '代表取締役',
      introduction:
        '東京大学法学部卒業後、総務省を経て独立。\n自治体向けコンサル、就労継続支援B型事業所の経営を経て、2021年3月にCarep Technologies株式会社を創業。Flutterを好む。VueとReactとPythonを少々。',
    },
    {
      id: '02',
      name: '中條 剛',
      position: '開発技術顧問',
      introduction:
        'Javaを用いたソフトウェア開発などを経験し、近年はFlutter開発に注力。\n精力的に執筆活動やパッケージ開発を行っており、雑誌Software Designにも記事が掲載された実績を持つ。',
    },
    {
      id: '03',
      name: '寺嶋 誠',
      position: 'エンジニア',
      introduction:
        'Flutter, Swift, Nuxt.js, Goが得意。責任感◎。\n日々新しい技術を吸収し、研鑽を怠らない。和歌山出身の中日ファン。',
    },
    {
      id: '04',
      name: 'kohei',
      position: 'エンジニア',
      introduction:
        'Flutter, Next.js, Java, Salesforceが得意。細かい気配り◎。\nものづくりを愛するナイスガイ',
    },
    {
      id: '05',
      name: '濱中 祐',
      position: '社会福祉士・精神保健福祉士',
      introduction:
        '精神障害がある方の社会復帰支援施設に10年間勤務後、2020年からフリーランス。\nオンラインカウンセリングやコンサルティング、講師などをしながら、2021年3月からCarep Technologiesに参画。',
    },
  ]
  return (
    <>
      <Nav />
      <main className='mt-20'>
        <div className='w-full bg-gradient-custom'>
          <div className='w-full mx-auto px-4 pb-12'>
            <section className='py-24 flex flex-col justify-center items-center gap-4'>
              <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-semibold text-white'>ABOUT</h1>
                <div className='w-1/3 border-b-2 border-white' />
              </div>
            </section>

            <div className='flex flex-col justify-center items-center gap-8'>
              <div className='w-full lg:w-2/3 bg-white rounded-3xl shadow-xl shadow-gray-300 p-4 md:p-8'>
                <section className='w-full'>
                  <div className='w-full flex flex-col sm:flex-row sm:gap-4'>
                    <span className='w-full sm:w-2/6 text-lg font-bold text-gray-600 px-4 py-2 sm:py-8'>
                      社名
                    </span>
                    <span className='w-full text-lg pl-8 sm:px-4 py-2 sm:py-8'>
                      Carep Technologies株式会社
                    </span>
                  </div>
                  <div className='border-b-2 border-[#F3C64D]' />
                  <div className='w-full flex flex-col sm:flex-row sm:gap-4'>
                    <span className='w-full sm:w-2/6 text-lg font-bold text-gray-600 px-4 py-2 sm:py-8'>
                      所在地
                    </span>
                    <span className='w-full text-lg pl-8 sm:px-4 py-2 sm:py-8'>
                      沖縄県沖縄市美原1-25-9
                    </span>
                  </div>
                  <div className='border-b-2 border-[#F3C64D]' />
                  <div className='w-full flex flex-col sm:flex-row sm:gap-4'>
                    <span className='w-full sm:w-2/6 text-lg font-bold text-gray-600 px-4 py-2 sm:py-8'>
                      事業内容
                    </span>
                    <span className='w-full text-lg pl-8 sm:px-4 py-2 sm:py-8'>
                      WEB開発・スマホアプリ開発・AR開発・AI開発
                    </span>
                  </div>
                  <div className='border-b-2 border-[#F3C64D]' />
                  <div className='w-full flex flex-col sm:flex-row sm:gap-4'>
                    <span className='w-full sm:w-2/6 text-lg font-bold text-gray-600 px-4 py-2 sm:py-8'>
                      設立
                    </span>
                    <span className='w-full text-lg pl-8 sm:px-4 py-2 sm:py-8'>
                      2021年3月30日
                    </span>
                  </div>
                  <div className='border-b-2 border-[#F3C64D]' />
                </section>
              </div>
              <div className='w-full flex flex-col items-center justify-center'>
                <section className='py-24 flex flex-col justify-center items-center gap-4'>
                  <div className='flex flex-col items-center'>
                    <h1 className='text-3xl font-semibold text-[#F49E00]'>
                      MEMBER
                    </h1>
                    <div className='w-1/3 border-b-2 border-[#F49E00]' />
                  </div>
                  <h1 className='text-4xl font-bold text-[#F49E00]'>
                    メンバー紹介
                  </h1>
                </section>
                <section className='w-full lg:w-2/3 flex flex-col items-center gap-4'>
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className='w-full bg-white rounded-3xl shadow-xl shadow-gray-300 p-4 md:p-8'
                    >
                      <div className='flex flex-col md:flex-row gap-4 items-center'>
                        {/* <div className='w-1/6 rounded-full overflow-hidden'>
                          <Image
                            src={`/images/member-${member.id}.jpg`}
                            alt={m}
                            width={100}
                            height={100}
                            className='rounded-full bg-gray-200'
                          />
                        </div> */}
                        <div className='w-full flex flex-col gap-4 items-start'>
                          <div className='w-full flex flex-row gap-4 items-center justify-center md:justify-start'>
                            <div className='font-extrabold flex flex-col items-center justify-center text-[#F49E00]'>
                              <span className='text-5xl'>{member.id}</span>
                              <span className='text-sm'>member</span>
                            </div>
                            <div>
                              <h4 className='text-base font-semibold text-gray-500'>
                                {member.position}
                              </h4>
                              <h2 className='text-3xl font-bold'>
                                {member.name}
                              </h2>
                            </div>
                          </div>
                          <div className='flex flex-col justify-center items-start'>
                            {member.introduction
                              .split('\n')
                              .map((line, index) => (
                                <p
                                  key={index}
                                  className='text-lg text-gray-700'
                                >
                                  {line}
                                </p>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
