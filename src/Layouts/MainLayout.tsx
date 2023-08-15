import LeftSideBar from "@/components/LeftSideBar"
import MDialog from "@/components/ui/Dialog"
import MainSection from "@/components/MainSection"
import RightSideBar from "@/components/RightSideBar"

type Props = {
  children: React.ReactNode
}


const MainLayout = ({ children }: Props) => {
  return (
    <>
      <MDialog title="Twitter Clone Example" text="A frontend clone of Twitter's main feed page built by @skaparelos using NextJS + Typescript + Tailwind CSS. You can browse around."/>
      <div className="grid-cols-[auto,1fr] desktop:max-w-7xl laptop:max-w-5xl max-w-2xl mx-auto">
        <LeftSideBar />
        <div className="grid grid-cols-[auto,1fr] desktop:ml-72 tablet:ml-20 min-h-screen">
          <MainSection />
          <RightSideBar />
        </div>
      </div>
    </>
  )
}

export default MainLayout
