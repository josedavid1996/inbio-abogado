import { useState } from 'react'
import NextLink from 'next/link'
import { FiMenu } from 'react-icons/fi'
import NextImage from 'next/image'
import { Container } from './container'

export const NavbarMobile = () => {
  const [ViewMenu, setViewMenu] = useState(false)

  return (
    <header
      className={` bg-[#171A1D]  lg:hidden w-full  ${
        ViewMenu ? 'h-[468px]' : 'h-[90px]'
      } text-red-500 py-[26px] transition-all duration-700 ease-in-out `}
    >
      <Container Class="relative  ">
        <nav className="flex flex-row justify-between items-center w-full">
          <div className="">
            <NextLink href="/">
              <div className="relative w-[212px] h-[36px] ">
                <NextImage
                  src="/images/logonavbar.webp"
                  layout="fill"
                  alt="Img_Navbar"
                  priority
                  className="absolute w-full h-full"
                />
              </div>
            </NextLink>
          </div>
          <div className="lg:hidden w-6 h-6 ">
            <FiMenu
              className="w-full h-full text-white"
              onClick={() => setViewMenu(!ViewMenu)}
            />
          </div>
        </nav>
        <div
          className={`${
            ViewMenu ? 'opacity-100' : 'opacity-0 hidden'
          }  text-[13px] font-semibold h-auto pt-10  text-white -z-20 min-w-full`}
        >
          <div className="flex flex-col gap-5  ">
            <div>
              <h3>
                <a href="#Home">Home</a>
              </h3>
              <span className="bg-[#999187] block w-full  h-[0.5px] mt-3" />
            </div>
            <div>
              <h3>
                <a href="#About">About Me</a>
              </h3>
              <span className="bg-[#999187] block w-full  h-[0.5px] mt-3" />
            </div>
            <div>
              <h3>
                <a href="#Services">My Services</a>
              </h3>
              <span className="bg-[#999187] block w-full  h-[0.5px] mt-3" />
            </div>
            <div>
              <h3>
                <a href="#Team">Meet The Team</a>
              </h3>
              <span className="bg-[#999187] block w-full  h-[0.5px] mt-3" />
            </div>
            <div>
              <h3>
                <a href="#Resumen">My Resume</a>
              </h3>
              <span className="bg-[#999187] block w-full  h-[0.5px] mt-3" />
            </div>
            <div>
              <h3>
                <a href="#Blog">Blog</a>
              </h3>
              <span className="bg-[#999187] block w-full  h-[0.5px] mt-3" />
            </div>
            <div>
              <h3>
                <a href="#Contact">Contact</a>
              </h3>
              <span className="bg-[#999187] block w-full  h-[0.5px] mt-3" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
