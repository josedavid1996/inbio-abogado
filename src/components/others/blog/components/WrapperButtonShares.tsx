/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
import Dynamic from 'next/dynamic'
import { IconType } from 'react-icons'

interface Data {
  tittle: string
  text: string
  //   url: string
}
interface RedSocial {
  Icon: IconType
  url: string
}

interface IProps {
  MetaData: Data
  RedesSociales: RedSocial[]
}

// Usamos en next/dynamic para que el Component ButtonShare solo este
// disponible en el cliente, ya que usamores el atributos navigator dentr de esta
const ButtonShare = Dynamic(
  () => import('./ButtonShare').then(({ ButtonShare }) => ButtonShare),
  { ssr: false },
)
export const WrapperButtonShares = ({ MetaData, RedesSociales }: IProps) => {
  return (
    <>
      {RedesSociales.map((obj, k) => (
        <ButtonShare
          key={k}
          MetaData={{
            text: MetaData.text,
            tittle: MetaData.tittle,
            url: obj.url,
          }}
          urlWeb={obj.url}
          Icon={obj.Icon}
        />
      ))}
    </>
  )
}
