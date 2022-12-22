import NextLink from 'next/link'
import { IconType } from 'react-icons'
interface Data {
  tittle: string
  text: string
  url: string
}
interface IProps {
  /** url para compartir en pc */
  urlWeb: string
  /** MetaData que se compartira */
  MetaData: Data
  /** Icono que usaremos */
  Icon: IconType
}
const Soported = ['Win32', 'MacIntel']
export const ButtonShare = ({ MetaData, urlWeb, Icon }: IProps) => {
  const isMobile =
    typeof window !== 'undefined'
      ? !Soported.includes(navigator.platform)
      : true

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
      alert('no soportado')
    }
  }
  return (
    <>
      <NextLink className={isMobile ? 'hidden' : ''} href={urlWeb}>
        <a target={'_blank'} className={isMobile ? 'hidden' : ''}>
          <Icon className="w-6 h-6 text-white" />
        </a>
      </NextLink>
      <Icon
        className={`w-6 h-6 text-white ${isMobile ? '' : 'hidden'}`}
        onClick={() => ShareResponvie(MetaData)}
      />
    </>
  )
}
