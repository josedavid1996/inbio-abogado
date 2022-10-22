import { SetStateAction, Dispatch } from 'react'
import NextLink from 'next/link'
import { FiMenu } from 'react-icons/fi'
import NextImage from 'next/image'
import { Container } from './container'

interface Iprops {
  ViewMenu: boolean
  setViewMenu: Dispatch<SetStateAction<boolean>>
}

export const HeaderMobile = ({ ViewMenu, setViewMenu }: Iprops) => {
  return (
    <header
      className={`z-50 bg-[#171A1D] lg:hidden w-full ${
        ViewMenu ? 'h-[468px]' : 'h-[90px]'
      } text-red-500 py-[27px] transition-all duration-700 ease-in-out `}
    >
      <Container Class="relative">
        <nav className="flex justify-between items-center">
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
          <div className="lg:hidden ">
            <FiMenu
              className="w-8 h-8 text-white"
              onClick={() => setViewMenu(!ViewMenu)}
            />
          </div>
        </nav>
        <div
          className="transition-opacity duration-300 ease-in-out text-[13px] font-semibold h-auto pt-10  text-white"
        >
          <div className="flex flex-col gap-5 ">
            <div>
              <h3>Home</h3>
              <span className="bg-[#999187] block w-full  h-[0.5px] mt-3" />
            </div>
            <div>
              <h3>About Me</h3>
              <span className="bg-[#999187] block w-full  h-[0.5px] mt-3" />
            </div>
            <div>
              <h3>My Services</h3>
              <span className="bg-[#999187] block w-full  h-[0.5px] mt-3" />
            </div>
            <div>
              <h3>Meet The Team</h3>
              <span className="bg-[#999187] block w-full  h-[0.5px] mt-3" />
            </div>
            <div>
              <h3>My Resumen</h3>
              <span className="bg-[#999187] block w-full  h-[0.5px] mt-3" />
            </div>
            <div>
              <h3>Blog</h3>
              <span className="bg-[#999187] block w-full  h-[0.5px] mt-3" />
            </div>
            <div>
              <h3>Contact</h3>
              <span className="bg-[#999187] block w-full  h-[0.5px] mt-3" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
