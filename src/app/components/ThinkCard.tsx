import React from 'react';
import Image, { StaticImageData } from 'next/image';
import './ThinkCard.css';

interface thinkCardProps {
    images:String,
    altText: String,
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

}

export default ThinkCard;
