import { FaFacebook } from 'react-icons/fa'
import NextLink from 'next/link'

interface Data {
  tittle: string
  text: string
  url: string
}
interface IProps {
  /** url para compartir en pc */
  urlWeb: string
  /** MetaData que se compartira para mobile */
  MetaData: Data
}
export const ButtonShare = ({ MetaData, urlWeb }: IProps) => {
  const isMobile =
    typeof window !== 'undefined' ? navigator.platform !== 'Win32' : true

  const ShareResponvie = (data: Data) => {
    if (typeof navigator.share === 'function') {
      navigator
        .share(data)
        .then(() => {
          console.log('res compartido con exito')
        })
        .catch(() => {
          console.log('hubo un error')
        })
    } else {
      console.log('no soportado')
    }
  }
  return (
    <>
      <NextLink
        className={isMobile ? 'hidden' : ''}
        href={urlWeb}
        // href={`https://www.facebook.com/sharer/sharer.php?u=${DOMAIN_URL}${Page}/${slug}`}
      >
        <a target={'_blank'} className={isMobile ? 'hidden' : ''}>
          <FaFacebook className="w-6 h-6 text-white" />
        </a>
      </NextLink>
      <FaFacebook
        className={`w-6 h-6 text-white ${isMobile ? '' : 'hidden'}`}
        onClick={() => ShareResponvie(MetaData)}
      />
    </>
  )
}
