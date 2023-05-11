import LeftSideBar from "@/components/LeftSideBar"
import RightSideBar from "@/components/RightSideBar"

type Props = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="grid-cols-[auto,1fr] desktop:max-w-7xl laptop:max-w-5xl max-w-2xl mx-auto">
      <LeftSideBar />
      <main>
        <div className="grid grid-cols-[auto,1fr] desktop:ml-72 tablet:ml-20 min-h-screen">
          {children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout
