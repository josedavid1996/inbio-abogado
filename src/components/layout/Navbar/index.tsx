/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable react-hooks/exhaustive-deps */
import NextLink from 'next/link'
import NextImage from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Container } from '@components/others/container'
import { IContext, NavbarContextConfig } from '@contexts/NavbarProvider'

interface IpropsDivHref {
  id: string
  tittle: string
}

const ColorText = 'text-[#AD8E6D]'

const SwitchOption: any = {
  '#Home': ColorText,
  '#About': ColorText,
  '#Services': ColorText,
  '#Team': ColorText,
  '#Resumen': ColorText,
  '#Blog': ColorText,
  '#Contact': ColorText,
}

const Navbar = () => {
  const [isTransparent, SetisTransparent] = useState(true)
  const { ViewSecction } = NavbarContextConfig() as IContext
  const [SecctionView, setSecctionView] = useState('')
  const { pathname, asPath } = useRouter()

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      SetisTransparent(false)
    } else {
      SetisTransparent(true)
    }
  }
  // const ComparePathId = (id: string) =>
  const DivHref = ({ id, tittle }: IpropsDivHref) => (
    <div
      className={
        SecctionView === ''
          ? `#${ViewSecction}` === id
            ? SwitchOption[`#${ViewSecction}`]
            : ''
          : SecctionView === id
          ? SwitchOption[id]
          : ''
        // SecctionView === id
        //   ? 'text-[#AD8E6D]'
        //   : `#${ViewSecction}` === id
        //   ? 'text-[#AD8E6D]'
        //   : ''
      }
    >
      <a href={id} onClick={() => setSecctionView(id)}>
        {tittle}
      </a>
    </div>
  )

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, [])
  useEffect(() => {
    // console.log('change')
    setSecctionView(asPath.split('/')[1])
  }, [])
  // useEffect(() => {
  //   console.log('effect')
  // }, [SecctionView])
  return (
    <header
      className={`z-50 bg-[#171A1D] hidden lg:block lg:fixed w-full lg:top-0  ${
        pathname === '/' && isTransparent ? 'lg:bg-transparent ' : 'mb-[90px]'
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
            <DivHref id="#Home" tittle="Home" />
            <DivHref id="#About" tittle="About Me" />
            <DivHref id="#Services" tittle="My Services" />
            <DivHref id="#Team" tittle="Meet The Team" />
            <DivHref id="#Resumen" tittle="My Resume" />
            <DivHref id="#Blog" tittle="Blog" />
            <DivHref id="#Contact" tittle="Contact" />
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
