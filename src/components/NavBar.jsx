import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'

export default function DefaultNavbar () {
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className='bg-black-medium text-xl flex justify-between items-center px-4 py-2'
    >
      <div className='hidden md:block text-white'>
        <a href='#' className='p-5'>
          Login
        </a>
        <a href='#' className='p-5'>
          Register
        </a>
        <a href='#' className='p-5'>
          Create Card
        </a>
        <a href='#' className='p-5'>
          Share Card
        </a>
      </div>
      <div className='md:hidden flex align-middle justify-center p-1'>
        <BiMenu onClick={(e) => setToggle(!toggle)} className='text-white text-6xl cursor-pointer' />
      </div>
      {toggle
        ? (
          <div className='bg-grey rounded-md absolute top-[80px] flex flex-col'>
            <a href='#' className='px-5 py-2 flex justify-center items-center text-center'>
              Login
            </a>
            <a href='#' className='px-5 py-2 flex justify-center items-center text-center'>
              Register
            </a>
            <a href='#' className='px-5 py-2 flex justify-center items-center text-center'>
              Create Card
            </a>
            <a href='#' className='px-5 py-2 flex justify-center items-center text-center'>
              Share Card
            </a>
          </div>
          )
        : null}
      <a href='#'>
        <img
          alt='Presskit Logo'
          className='mr-3 w-[55px]'
          src='./qr_logo.png'
        />
      </a>
    </nav>
  )
}