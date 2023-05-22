import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex w-full h-full px-2 2xl:px-16'>
        <Image src="/../public/assets/logo.png" alt="/" width='200' height='200' />
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hove:border-b'>Home</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hove:border-b'>About</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hove:border-b'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hove:border-b'>Projects</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hove:border-b'>Contact</li>
            </Link>
          </ul>
          <div className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
        <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3]'>
          <div>
            <div>
              <Image src='/../public/assets/logo.png' width='200' height='200' alt='/' />
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}