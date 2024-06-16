import React from 'react';
import home1 from '../../../public/assets/Homepage/home1.avif';
import home2 from '../../../public/assets/Homepage/home2.avif';
import home3 from '../../../public/assets/Homepage/home3.avif';
import home4 from '../../../public/assets/Homepage/home4.avif';
import home5 from '../../../public/assets/Homepage/home5.avif';
import home6 from '../../../public/assets/Homepage/Home6.avif';
import home7 from '../../../public/assets/Homepage/home7.avif';
import home8 from '../../../public/assets/Homepage/home8.avif';
import { StaticImageData } from 'next/image';

const cardClasses = 'relative group';
const overlayClasses = 'absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300';
const textClasses = 'text-sm font-bold';
const titleClasses = 'text-lg font-semibold';

interface CardProps {
  imageUrl: StaticImageData | string; // Allow both StaticImageData and string
  altText: string;
  category: string;
  title: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, altText, category, title, description }) => {
  return (
    <div className={cardClasses}>
      <img src={typeof imageUrl === 'string' ? imageUrl : imageUrl.src} alt={altText} className="w-full h-full object-cover" />
      <div className={overlayClasses}>
        <p className={textClasses}>{category}</p>
        <h3 className={titleClasses}>{title}</h3>
        {description && <p className="text-sm mt-2">{description}</p>}
        {description && <button className="mt-4 bg-white text-black py-2 px-4 rounded">Expand</button>}
      </div>
    </div>
  );
};

const HomepageCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center px-6 min-h-screen bg-black text-white mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card
          imageUrl={home1}
          altText="Card Image"
          category="CASE STUDY"
          title="Fighting poverty with technology and humanity: Gerando Falcões"
        />
        <Card
         imageUrl={home2}
          altText="Card Image"
          category="RESEARCH REPORT"
          title="Tap into new value with advanced supply chain capabilities"
        />
        <Card
          imageUrl={home3}
          altText="Card Image"
          category="CASE STUDY"
          title="Generative AI in the driver's seat: BMW"
        />
        <Card
          imageUrl={home4}
          altText="Card Image"
          category="RESEARCH REPORT"
          title="Reinventing M&A with generative AI"
        />
        <Card
          imageUrl={home5}
          altText="Card Image"
          category="RESEARCH REPORT"
          title="Turn disruption into value creation"
        />
        <Card
         imageUrl={home6}
          altText="Card Image"
          category="CASE STUDY"
          title="Banking on happy customers: BBVA"
        />
        <Card
          imageUrl={home7}
          altText="Card Image"
          category="ANNOUNCEMENT"
          title="Accenture takes new steps to help clients scale generative AI responsibly"
        />
        <Card
          imageUrl={home8}
          altText="Card Image"
          category="CASE STUDY"
          title="Travel to the metaverse: Changi Airport Group"
          description="Changi Airport has been ranked the World's Best Airport twelve times. To take the traveler experience to new heights, we created ChangiVerse, an immersive metaverse experience."
        />
      </div>
    </div>
  );
};

export default HomepageCard;
