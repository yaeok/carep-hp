'use client'

import Image from 'next/image'
import Link from 'next/link'

import Drawer from './Drawer/Drawer'

export function Nav() {
  return (
    <header className='fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-white/80 backdrop-blur-sm rounded-full z-50 shadow-lg ring-1 ring-black ring-opacity-5'>
      <div className='container mx-auto px-6 py-3 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='w-28'>
          <Image src='/assets/logo.png' alt='logo' width={45} height={45} />
        </Link>

        {/* Hamburger Menu (visible on small screens) */}
        <div className='block md:hidden'>
          <Drawer />
        </div>
        {/* Navigation Menu */}
        <nav className='items-center gap-8 hidden md:block'>
          <ul className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
            <li>
              <Link
                href='/'
                className='text-gray-600 hover:text-orange-500 transition-colors'
              >
                HOME
              </Link>
            </li>
            {/* <li>
              <Link href="/news" className="hover:text-orange-500">
                NEWS
              </Link>
            </li> */}
            <li>
              <Link
                href='/service'
                className='text-gray-600 hover:text-orange-500 transition-colors'
              >
                SERVICE
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='text-gray-600 hover:text-orange-500 transition-colors'
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='bg-[#8B1F42] text-white px-6 py-2 rounded-full hover:bg-[#7A1B3A] transition-colors'
              >
                お問い合わせはこちら
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
