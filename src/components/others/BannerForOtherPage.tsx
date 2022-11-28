/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from '@components/layout/Navbar'
import { useRouter } from 'next/router'
export const BannerForOtherPage = () => {
  const { pathname } = useRouter()
  return (
    <div className={pathname === '/' ? 'hidden' : 'lg:mt-[90px]'}>
      <Navbar />
    </div>
  )
}
