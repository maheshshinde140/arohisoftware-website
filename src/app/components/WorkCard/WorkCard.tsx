import React from 'react'
import Image from 'next/image'
import './WorkCard.css'


const WorkCard = ({ images, altText, text, title }) => {
    return (
        <div className='work-card  lg:flex justify-around shadow-md rounded-xl w-[100%] mb-5 p-4'>
            <Image 
                src={images} 
                alt={altText} 
                width={480} // specify the width
                height={400} // specify the height
                className='work-card-image rounded-lg border-0' 
            />
            <div className='work-card-content lg:w-[40%] w-[100%] mt-5'>
            <p className="text-black lg:text-5xl text-3xl text-center work-card-title pt-6 font-bold ">{title}</p>
                <p className='work-card-text'>{text}</p>
            </div>
        </div>
    )
}

export default WorkCard
