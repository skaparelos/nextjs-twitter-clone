import twitterLogo from '../../assets/images/TwitterLogo.png'
import Image from 'next/image'

const TwitterLogo = () => {
  return (
    <div className='w-7 h-7'>
      <Image src={twitterLogo} alt="Logo" className="w-full" />
    </div>
  )
}

export default TwitterLogo
