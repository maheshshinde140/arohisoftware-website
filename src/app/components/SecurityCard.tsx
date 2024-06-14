// import React from 'react'
// import Image from 'next/image';

// interface securityCardProps {
//     images:String,
//     altText: string,
//     title:String,
//     text:String,
//     width={200}, // You need to provide actual width and height values here
//         height={200}
//    }
// const SecurityCard: React.FC<securityCardProps>= ({images,altText,title,text}) => {
//   return (
//     <div className=' h-[44vh]  w-60 mb-4 cursor-pointer'>
//       <Image src={`${images}`} alt={altText}  />
//       <p className='font-bold text-2xl my-4'>{title}</p>
//       <p className='font-normal '>{text}</p>

      
//     </div>
//   )
// }

// export default SecurityCard

import React from 'react';
import Image from 'next/image';

interface SecurityCardProps {
  images: string;
  altText: string;
  title: string;
  text: string;
  width: number;
  height: number;
}

const SecurityCard: React.FC<SecurityCardProps> = ({ images, altText, title, text, width, height }) => {
  return (
    <div className='lg:h-[90vh] w-60 mb-4 cursor-pointer'>
      <Image src={images} alt={altText} width={width} height={height} />
      <p className='font-bold text-2xl my-4'>{title}</p>
      <p className='font-normal'>{text}</p>
    </div>
  );
}

export default SecurityCard;




