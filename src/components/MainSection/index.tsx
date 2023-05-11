import CreateTweet from "./CreateTweet"
import Feed from "./Feed"

const MainSection = () => {
  return (
    <div className="max-w-[37.5rem] border-x-[1px]">
    <section className="sticky top-0 px-4 py-6 bg-white ">
      <h1 className="text-[1.25rem] font-bold">Home</h1>
    </section>
    <CreateTweet />
    <Feed />
  </div>
  )
}

export default MainSection
