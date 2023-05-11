import { SearchIcon } from '@heroicons/react/outline'
import Trends from './Trending'

const RightSideBar  = () => {
  return (
    <div className="laptop:block hidden px-8 space-y-2">
      <section className="sticky top-0 py-3 bg-white z-10">
        <div className="flex items-center gap-4 px-4 py-2 bg-gray-100 rounded-full">
          <SearchIcon className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search Twitter"
            className="text-base placeholder:text-base focus:outline-none bg-transparent"
          />
        </div>
      </section>
      <Trends />
    </div>
  )
}

export default RightSideBar;