import { EmojiIcon, GifIcon, LocationIcon, MediaIcon, PollIcon, ScheduleIcon } from '../../ui/Icons'
import TweetOption from './TweetOption'

const TweetOptions = () => {
  return (
    <>
      <div className="mobile:flex items-center hidden ">
        <TweetOption
          Icon={<MediaIcon className="text-blue-100 className-sky-500" />}
          color="hover:bg-sky-100"
        />
        <TweetOption Icon={<GifIcon className="className-sky-500" />} color="hover:bg-sky-100" />
        <TweetOption
          Icon={<PollIcon className="className-sky-500" />}
          color="hover:bg-sky-100"
        />
        <TweetOption
          Icon={<EmojiIcon className="className-sky-500" />}
          color="hover:bg-sky-100"
        />
        <TweetOption
          Icon={<ScheduleIcon className="className-sky-500" />}
          color="hover:bg-sky-100"
        />
        <TweetOption
          Icon={<LocationIcon className="className-sky-500" />}
          color="hover:bg-sky-100"
        />
      </div>
      <button className="bg-sky-500 hover:bg-sky-400 hover-transition px-5 py-2 text-white font-bold rounded-full w-full mobile:w-auto">
        Tweet
      </button>
    </>
  )
}

export default TweetOptions
