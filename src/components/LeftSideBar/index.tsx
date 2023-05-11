import SideBarOption from './SideBarOption'
import { HomeIcon } from '@heroicons/react/solid'
import {
  HashtagIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  ViewListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/outline'
import TwitterLogo from './TwitterLogo'
import TweetButton from './TweetButton'
import User from './User'

const SideBarOptions = [
  {
    icon: HomeIcon,
    name: "Home",
    active: true
  },
  {
    icon: HashtagIcon,
    name: "Explore",
    active: false
  },
  {
    icon: BellIcon,
    name: "Notifications",
    active: false
  },
  {
    icon: MailIcon,
    name: "Messages",
    active: false
  },
  {
    icon: BookmarkIcon,
    name: "Bookmarks",
    active: false
  },
  {
    icon: ViewListIcon,
    name: "Lists",
    active: false
  },
  {
    icon: UserIcon,
    name: "Profile",
    active: false
  },
  {
    icon: DotsCircleHorizontalIcon,
    name: "More",
    active: false
  },

]

const LeftSideBar = () => {
  return (
    <header className='fixed'>
      <div>
      <nav className="flex-col gap-5 px-2 py-4 min-h-screen justify-between items-center hidden tablet:flex">
        <div className="flex flex-col gap-5 items-center desktop:items-stretch w-full">
          <div className="px-4">
            <TwitterLogo />
          </div>
          <div className="space-y-3">
            {SideBarOptions.map((item) => (
              <SideBarOption Icon={item.icon} name={item.name} active={item.active} />
            ))}
          </div>
          <TweetButton />
        </div>
        <User />
      </nav>
    </div>
  </header>
  )
}

export default LeftSideBar
