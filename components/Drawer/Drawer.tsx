'use client'

import Link from 'next/link'
import { useState } from 'react'

import DrawerButton from './DrawerButton/DrawerButton'

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div
        id='drawer-example'
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white w-80`}
        tabIndex={-1}
        aria-labelledby='drawer-label'
      >
        <button
          type='button'
          className='text-slate-800 bg-transparent rounded-lg text-sm w-8 h-8 absolute top-4 right-4 flex items-center justify-center'
          onClick={toggleDrawer}
        >
          ✕
        </button>
        <nav className='pl-4 pt-8'>
          <ul className='flex flex-col gap-8'>
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
      <DrawerButton toggleDrawer={toggleDrawer} />
    </div>
  )
}

export default Drawer
