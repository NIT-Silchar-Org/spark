import Image from 'next/image'
import sparklogo1 from '../../public/home/sparklogo1.png'
import sparklogo2 from '../../public/home/sparklogo2.png'

const sparkObj = () => {
  return (
    <div className="relative overflow-y-hidden overflow-x-hidden">
      <div className="relative">
        <div
          className="relative"
        >
          <Image src={sparklogo1} />
        </div>
        <div
          className="relative w-20 h-20 md:w-32 md:h-32 top-[40vh] left-10"
        >
          <Image src={sparklogo2} />
        </div>
      </div>
    </div>
  )
}

export default sparkObj
