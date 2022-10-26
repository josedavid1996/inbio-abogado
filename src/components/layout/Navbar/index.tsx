import NextLink from 'next/link'
import NextImage from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Container } from '@components/others/container'

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
    <header
      className={`z-50 bg-[#171A1D] hidden lg:block lg:fixed w-full lg:top-0  ${
        pathname === '/' && isTransparent && 'lg:bg-transparent '
      } text-red-500 py-[27px] transition-colors duration-300 ease-in-out `}
    >
      <Container>
        <nav className="flex justify-between items-center  h-full">
          <div className="">
            <NextLink href="/">
              <div className="relative w-[212px] h-[36px]">
                <NextImage
                  src="/images/logonavbar.png"
                  layout="fill"
                  className="absolute w-full h-full"
                />
              </div>
            </NextLink>
          </div>
          <div className="hidden lg:flex flex-row justify-between w-[568px] text-[13px]  mr-5 text-white font-semibold tracking-tight ">
            <div className="text-[#AD8E6D]">
              <a href="#Home">Home</a>
            </div>
            <div>
              <a href="#About">About Me</a>
            </div>
            <div>
              <a href="#Services">My Services</a>
            </div>
            <div>
              <a href="#Team">Meet The Team</a>
            </div>
            <div>
              <a href="#Resumen">My Resume</a>
            </div>
            <div>
              <a href="#Blog">Blog</a>
            </div>
            <div>
              <a href="#Contact">Contact</a>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
