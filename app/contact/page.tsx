import Footer from '@/components/Footer/Footer'
import { Nav } from '@/components/nav'

export default function Contact() {
  return (
    <>
      {/* ヘッダー部分 */}
      <Nav />
      <main className='mt-20'>
        <div className='w-full bg-gradient-custom'>
          <div className='w-full mx-auto px-4 pb-12'>
            <section className='py-24 flex flex-col justify-center items-center gap-4'>
              <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-semibold text-white'>CONTACT</h1>
                <div className='w-1/3 border-b-2 border-white' />
              </div>
              <p className='text-white font-semibold'>
                ご連絡いただいた日から３営業日以内にご返信いたします。
              </p>
            </section>

            {/* フォーム部分 */}
            <div className='flex justify-center items-center w-full px-2'>
              <div
                className='w-full lg:w-2/3 h-screen bg-white rounded-3xl shadow-xl shadow-gray-300 p-4 md:p-8'
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                <iframe
                  src='https://tayori.com/form/ed38dfe67ba6a286f16bc8d91aa17a78236fe3b1/'
                  className='border-none w-full h-full'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
