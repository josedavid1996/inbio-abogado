import { FadeUp } from '@components/animated'
import { History } from '@mock/dataResumen'

// interface IPropsBody {
//   history: History[]
// }

interface IPropsItem {
  item: History
  k: number
}
export const ItemResumen = ({ item, k }: IPropsItem) => (
  <FadeUp threshold={0.4}>
    <div
      className="flex flex-col"
      // data-aos="fade-up"
      // data-aos-anchor-placement="center-bottom"
    >
      <div className="flex flex-row relative">
        <div className="w-10 h-10 rounded-full bg-[#AD8E6D] flex items-center justify-center text-white z-30">
          {k + 1}
        </div>
        <div className="h-10 w-full absolute bg-gradient-to-r from-gradResumen1 to-gradResumen2 z-20 rounded-l-full flex items-center">
          <h4 className="ml-16 text-white">
            {item.RangeYear.initial || ''} - {item.RangeYear.finish || ''}
          </h4>
        </div>
      </div>
      <div className="flex flex-row  relative h-full ">
        <div className="w-[0.5px] bg-custon4 ml-5"></div>
        <div className="ml-11 flex flex-col gap-2 py-6">
          <h4 className="text-white text-lg font-semibold">
            {item.tittle || ''}
          </h4>
          <h5 className="text-custon3 text-base">{item.subtittle || ''}</h5>
          <p className="text-custon4 text-[16px]">{item.description || ''}</p>
        </div>
      </div>
    </div>
  </FadeUp>
)
