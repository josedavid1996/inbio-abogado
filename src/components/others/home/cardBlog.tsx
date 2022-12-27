import NextImage from 'next/image'
import { BlogDTO, CategoriaBlogDTO } from '../blog/interfaces'
import { useRouter } from 'next/router'
import moment from 'moment'
interface Iprops {
  data: BlogDTO | CategoriaBlogDTO
}

export const CardBlog = ({ data }: Iprops) => {
  const { push } = useRouter()

  const fechaCreada = moment(data.created_at)
  const fechaActual = moment(new Date())
  const CalculateTiempoPasado = (minutes: number) => {
    if (minutes < 60) return `Hace ${minutes} minutos`
    if (minutes >= 60 && minutes < 120) return `Hace 1 hora`
    if (minutes >= 120 && minutes < 1440)
      return `Hace ${Math.floor(minutes / 60)} horas`
    if (minutes >= 1440 && minutes < 2880) return `Hace ${minutes} dia`
    if (minutes >= 2880 && minutes < 10080)
      return `Hace ${Math.floor(minutes / 1440)} dias`
    if (minutes >= 10080 && minutes < 43800) return `Hace ${minutes} mes`
    if (minutes >= 43800 && minutes < 525960)
      return `Hace ${Math.floor(minutes / 10080)} meses`
    if (minutes >= 525960 && minutes < 1051920) return `Hace 1 año`
    if (minutes >= 1051920) return `Hace ${Math.floor(minutes / 525960)} años`
  }

  return (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => push('/blog/' + data.slug)}
    >
      <div className="aspect-video relative object-cover">
        <NextImage
          src={data.imagenPrincipal.url}
          layout="fill"
          className="absolute w-full h-full object-cover object-center rounded-lg  hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="flex flex-col justify-center gap-1 mt-6">
        <h3 className="text-custom1 font-bold text-[12px] uppercase">
          {data.CategoriaBlog?.titulo || ''}
        </h3>
        <h4 className="text-white font-bold  mt-2 text-base uppercase">
          {data.titulo || ''}
        </h4>
        <h6 className="text-custom1 text-[10px]">
          {CalculateTiempoPasado(fechaActual.diff(fechaCreada, 'minutes'))}
        </h6>
      </div>
    </div>
  )
}
