import NextLink from 'next/link'
import ToggleTheme from '../../shared/ToggleTheme'
import NextImage from 'next/image'
import { useState, useEffect } from 'react'
import { FiMenu } from 'react-icons/fi'
import { useRouter } from 'next/router'
const Navbar = () => {
  const [isTransparent, SetisTransparent] = useState(true)
  const { pathname } = useRouter()

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      SetisTransparent(false)
    } else {
      SetisTransparent(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, [])
  return (
    <header className={`shadow bg-[#171A1D] lg:sticky lg:top-0 ${pathname === '/' && isTransparent && 'lg:bg-transparent '} text-red-500 h-[90px]  transition-colors duration-300 ease-in-out`}>
      <nav className="container flex justify-between items-center h-full" >
        <div className=''>
          <NextLink href="/">
            <div className='relative w-[212px] h-[36px]'>
              <NextImage
                src='/images/logonavbar.png'
                layout='fill'
                className='absolute w-full h-full'
              />
            </div>
          </NextLink>
        </div>
        <div className=' hidden lg:flex flex-row justify-between w-[614px] '>
          <div>hola</div>
          <div>hola2</div>
          <div>hola3</div>
          <div>hola4</div>
        </div>

        <div className='lg:hidden '>
          <FiMenu className='w-8 h-8' />
        </div>
        {/* <ToggleTheme className="text-white" /> */}
      </nav >
    </header >
  )
}

export default Navbar
