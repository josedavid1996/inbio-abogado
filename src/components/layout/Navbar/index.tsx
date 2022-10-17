import NextLink from 'next/link'
import ToggleTheme from '../../shared/ToggleTheme'
import NextImage from 'next/image'
const Navbar = () => {
  return (
    <header className="shadow bg-[#171A1D] lg:sticky lg:top-0 lg:bg-transparent text-red-500 h-[90px] z-99999">
      <nav className="container flex justify-between items-center h-full">
        <NextLink href="/">
          <div className='relative w-[212px] h-[36px]'>
            <NextImage
              src='/images/logonavbar.png'
              layout='fill'
              className='absolute w-full h-full'
            />
          </div>
        </NextLink>
        <div>hola</div>
        <div>hola2</div>
        <div>hola3</div>
        <div>hola4</div>

        <ToggleTheme className="text-white" />
      </nav>
    </header>
  )
}

export default Navbar
