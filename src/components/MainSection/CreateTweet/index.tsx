import { ViewBoardsIcon } from '@heroicons/react/solid'
import Avatar from '../../ui/Avatar'
import Actions from './TweetOptions'
import TweetTextBox from './TweetTextBox'

const CreateTweet = () => {
  return (
    <div>
      <div className='flex w-full justify-around text-center text-md text-gray-600'>
        <div className='py-3 w-full hover:bg-gray-200 hover:cursor-pointer text-black font-bold underline decoration-blue-400 decoration-4 underline-offset-[0.8rem]'>For you</div>
        <div className='py-3 w-full hover:bg-gray-200 hover:cursor-pointer'>Following</div>
      </div>
      <section className="px-4 py-4 grid grid-cols-[auto,1fr] gap-4 border-t">
        <Avatar
          src="https://avatars.githubusercontent.com/u/21146643?s=400&u=8f4932274619bcbee8f811f9e1dde0f2c6290af3&v=4"
          alt="Profile"
        />
        <div className="space-y-10 w-full">
          <TweetTextBox />
          <div className="flex items-center justify-between gap-4">
            <div className="hover:bg-sky-100 p-2 rounded-full transition-colors duration-500 ease-out cursor-pointer mobile:hidden">
              <ViewBoardsIcon className="w-5 h-5 text-sky-500" />
            </div>
            <Actions />
          </div>
        </div>
      </section>
    </div>
  )
}

export default CreateTweet
