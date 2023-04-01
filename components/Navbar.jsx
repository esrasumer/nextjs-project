import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src="/../public/assets/logo.png" alt="/" width='200' height='200'/>
        </div>
    </div>
  )
}

export default Navbar