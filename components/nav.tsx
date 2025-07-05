'use client'

import Image from 'next/image'
import Link from 'next/link'

import Drawer from './Drawer/Drawer'

export function Nav() {
  return (
    <header className='fixed top-0 left-0 right-0 bg-white z-50 shadow-md'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='w-32'>
          <Image
            src='/assets/logo.png'
            alt='logo'
            width={50}
            height={40}
            className='h-12'
          />
        </Link>

        {/* Hamburger Menu (visible on small screens) */}
        <div className='block md:hidden'>
          <Drawer />
        </div>
        {/* Navigation Menu */}
        <nav className='items-center gap-8 hidden md:block'>
          <ul className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
            <li>
              <Link href='/' className='hover:text-orange-500'>
                HOME
              </Link>
            </li>
            {/* <li>
              <Link href="/news" className="hover:text-orange-500">
                NEWS
              </Link>
            </li> */}
            <li>
              <Link href='/service' className='hover:text-orange-500'>
                SERVICE
              </Link>
            </li>
            <li>
              <Link href='/about' className='hover:text-orange-500'>
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
