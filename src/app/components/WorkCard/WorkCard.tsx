import React from 'react';
import Image from 'next/image';
import './WorkCard.css';

interface WorkBalanceProps {
    images: string;
    altText: string;
    title: string;
    text: string;
}

const WorkCard: React.FC<WorkBalanceProps> = ({ images, title, text, altText }) => {
    return (
        <div className='card'>
            <Image src={images} alt={altText} width={480} height={270} className='cardImag' />
            <h3>{title}</h3>
            <h4>{text}</h4>
        </div>
    );
};

export default WorkCard;
