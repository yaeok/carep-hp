import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className='w-full bg-white flex flex-col'>
      <div className='container py-12 flex flex-col items-center gap-4'>
        {/* ロゴ入れる */}
        <div>
          <Link href='/' className='w-32'>
            <Image
              src='/assets/logo.png'
              alt='logo'
              width={50}
              height={40}
              className=''
            />
          </Link>
        </div>

        {/* HOME */}

        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='flex flex-col gap-2'>
            <Link href='/'>
              <span className='hover:text-orange-500 hover:border-orange-500 hover:border-b-2'>
                HOME
              </span>
            </Link>

            <div className='flex flex-row items-center gap-1'>
              <span className='w-4 border-b-2 border-black' />
              <p>ミッション・ビジョン</p>
            </div>
          </div>

          {/* SERVICE */}

          <div className='flex flex-col gap-2 items-start'>
            <Link href='/service'>
              <span className='hover:text-orange-500 hover:border-orange-500 hover:border-b-2'>
                SERVICE
              </span>
            </Link>

            <div className='flex flex-row items-center gap-1'>
              <span className='w-4 border-b-2 border-black' />
              <p>論文学習サービス</p>
            </div>
            <div className='flex flex-row items-center gap-1'>
              <span className='w-4 border-b-2 border-black' />
              <p>スマホアプリ・WEBアプリ・AI・AR開発</p>
            </div>
          </div>

          {/* ABOUT */}

          <div className='flex flex-col gap-2'>
            <Link href='/about'>
              <span className='hover:text-orange-500 hover:border-orange-500 hover:border-b-2'>
                ABOUT
              </span>
            </Link>

            <div className='flex flex-row items-center gap-1'>
              <span className='w-4 border-b-2 border-black' />
              <p>会社概要</p>
            </div>
            <div className='flex flex-row items-center gap-1'>
              <span className='w-4 border-b-2 border-black' />
              <p>メンバー</p>
            </div>
          </div>

          {/* CONTACT */}

          <div className='flex flex-col gap-2'>
            <Link href='/contact'>
              <span className='hover:text-orange-500 hover:border-orange-500 hover:border-b-2'>
                CONTACT
              </span>
            </Link>

            <div className='flex flex-row items-center gap-1'>
              <span className='w-4 border-b-2 border-black' />
              <p>お問い合わせ</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full py-2 bg-gray-500 flex justify-center'>
        <Link href='/'>
          <span className='text-gray-800 border-b-2 border-gray-800 hover:text-white hover:border-white'>
            @2024 Carep Technologies inc.
          </span>
        </Link>
      </div>
    </section>
  )
}
