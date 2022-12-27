/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
import Dynamic from 'next/dynamic'
import { IconType } from 'react-icons'

interface Data {
  tittle: string
  text: string
  url: string
}
interface RedSocial {
  Icon: IconType
  url: string
  color: string
}

interface IProps {
  MetaData: Data
  RedesSociales: RedSocial[]
  width?: string
  height?: string
  bg?: string
  colorIcon?: string
}

// Usamos en next/dynamic para que el Component ButtonShare solo este
// disponible en el cliente, ya que usamores el atributos navigator dentr de esta
const ButtonShare = Dynamic(
  () => import('./ButtonShare').then(({ ButtonShare }) => ButtonShare),
  { ssr: false }
)
export const WrapperButtonShares = ({
  MetaData,
  RedesSociales,
  width,
  height,
  bg,
  colorIcon
}: IProps) => {
  return (
    <div className="flex gap-3">
      {RedesSociales.map((obj, k) => (
        <ButtonShare
          key={k}
          width={width}
          height={height}
          bg={bg}
          colorIcon={colorIcon}
          MetaData={{
            text: MetaData.text,
            tittle: MetaData.tittle,
            url: MetaData.url
          }}
          color={obj.color}
          urlWeb={obj.url}
          Icon={obj.Icon}
        />
      ))}
    </div>
  )
}
