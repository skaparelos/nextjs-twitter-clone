import { DotsHorizontalIcon } from '@heroicons/react/outline'
import TrendType from '@/schemas/TrendType'

type Props = {
  trend: TrendType
}

const Trend = ({ trend }: Props) => {
  return (
    <div className="py-4 px-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer hover-transition">
      <div>
        <h5 className="font-semibold text-neutral-500">{trend.category}</h5>
        <h3 className="font-bold text-base ">{trend.title}</h3>
        <span className="font-semibold text-neutral-500">
          {trend.tweetCount} Tweets
        </span>
      </div>
      <div className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer hover-transition">
        <DotsHorizontalIcon className="w-4 h-4 text-neutral-500 group-hover:text-sky-500" />
      </div>
    </div>
  )
}

export default Trend
