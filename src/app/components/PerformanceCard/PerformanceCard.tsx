import React from 'react'
import './PerformanceCard'
interface PerformanceProps {
  title:String,
  text:String
}
const PerformanceCard: React.FC<PerformanceProps>  = ({title,text}) => {
  return (
    <div className=' bg-white cursor-pointer text-black sm:h-[35vh] h-[30vh] xl:h-[30vh] xl:w-[15vw] p-5 w-[60vw] border sm:w-[30vw] perCard '>
      <h1 className='text-5xl font-bold text-center'>{text}</h1>
      <p className='font-midium '>{title}</p>
    </div>
  )
}

export default PerformanceCard
