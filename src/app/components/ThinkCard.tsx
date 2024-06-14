import React from 'react'
import Image from 'next/image';

import './ThinkCard.css'
interface thinkCardProps {
    images:String,
    altText: string,
    title:String,
    text:String
   }
const ThinkCard: React.FC<thinkCardProps> = ({images,altText,title,text}) => {
  return (
    <div className='box' >
      <Image src={`${images}`} alt={altText}/>
      
      <div className='second-div'>
      <h1>Research report</h1>
      <p>{title}</p>
      </div>

      <div className='overlay'>
      
      <h2>{text}</h2>
      </div>
     
    </div>
  )
}

export default ThinkCard
