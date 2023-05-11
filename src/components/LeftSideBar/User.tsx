import Avatar from '../ui/Avatar'
import { DotsHorizontalIcon } from '@heroicons/react/solid'

const User = () => {
  return (
    <div className="flex items-center justify-between desktop:w-[17rem] hover:bg-neutral-200 desktop:px-4 px-3 py-3 rounded-full hover-transition cursor-pointer">
      <div className="flex items-center gap-4">
        <Avatar
          src="https://avatars.githubusercontent.com/u/21146643?s=400&u=8f4932274619bcbee8f811f9e1dde0f2c6290af3&v=4"
          alt="Profile"
        />
        <div className='desktop:block hidden'>
          <h1 className="font-bold text-lg">Stavros</h1>
          <h2 className="text-neutral-500 -mt-1">@skaparelos</h2>
        </div>
      </div>
      <DotsHorizontalIcon className="w-4 h-4 text-neutral-500 desktop:block hidden" />
    </div>
  )
}

export default User
