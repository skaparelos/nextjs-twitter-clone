
import Head from 'next/head'
import MainSection from '../components/MainSection'
import RightSideBar from '@/components/RightSideBar'


const Home = () => {
  return (
    <>
      <Head>
        <title>Twitter Clone @skaparelos</title>
      </Head>
      <MainSection />
      <RightSideBar />    
    </>
  )
}

export default Home
