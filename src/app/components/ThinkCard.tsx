import React from 'react';
import Image, { StaticImageData } from 'next/image';
import './ThinkCard.css';

interface ThinkCardProps {
    images: StaticImageData;
    altText: string;
    title: string;
    text: string;
}

const ThinkCard: React.FC<ThinkCardProps> = ({ images, altText, title, text }) => {
    return (
        <div className='box'>
            <Image src={images} alt={altText} width={500} height={300} />
            <div className='second-div'>
                <h1>Research report</h1>
                <p>{title}</p>
            </div>
            <div className='overlay'>
                <h2>{text}</h2>
            </div>
        </div>
    );
}

export default ThinkCard;
