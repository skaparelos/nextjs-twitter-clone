import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from "../../ui/Icons"
import TweetOption from "../CreateTweet/TweetOption"

type Props = {
  replies: number,
  retweets: number,
  likes: number
}

const Footer = ({ replies, retweets, likes}: Props) => {
  return (
    <div className="flex justify-between mt-3 max-w-md cursor-pointer">
      <div className="flex items-center group tablet:pr-4">
        <TweetOption
          Icon={<ReplyIcon className=" group-hover:fill-sky-500" />}
          color="group-hover:bg-sky-100 text-red-300"
        />
        <p className="text-sm group-hover:text-sky-500">{replies}</p>
      </div>
      <div className="flex gap-1 items-center group tablet px-4">
        <TweetOption
          Icon={<RetweetIcon className="group-hover:fill-green-500" />}
          color="group-hover:bg-green-100"
        />
        <p className="text-sm group-hover:text-green-500">{retweets}</p>
      </div>
      <div className="flex gap-1 items-center group tablet px-4">
        <TweetOption
          Icon={<LikeIcon className="group-hover:fill-rose-500" />}
          color="group-hover:bg-rose-100"
        />
        <p className="text-sm group-hover:text-rose-500">{likes}</p>
      </div>
      <div className="flex gap-1 items-center group tablet pl-4">
        <TweetOption
          Icon={<ShareIcon className="group-hover:fill-sky-500" />}
          color="group-hover:bg-sky-100"
        />
      </div>
    </div>
  )
}

export default Footer
