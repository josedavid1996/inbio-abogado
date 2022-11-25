/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable react-hooks/exhaustive-deps */
import NextLink from 'next/link'
import NextImage from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Container } from '@components/others/container'
import { IContext, NavbarContextConfig } from '@contexts/NavbarProvider'
import { DataNavbar } from '@mock/dataNavbar'
interface IpropsDivHref {
  id: string
  tittle: string
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
            ? 'text-custom1'
            : ''
          : SecctionView === id
          ? 'text-custom1'
          : ''
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
    setSecctionView(asPath.split('/')[1])
  }, [])
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
                  src="/images/logonavbar.webp"
                  layout="fill"
                  priority
                  className="absolute w-full h-full"
                />
              </div>
            </NextLink>
          </div>
          <div className="hidden lg:flex flex-row justify-between w-[568px] text-[13px]  mr-5 text-white font-semibold tracking-tight ">
            {DataNavbar.map((obj, k) => (
              <DivHref id={obj.id} tittle={obj.tittle} key={k} />
            ))}
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
