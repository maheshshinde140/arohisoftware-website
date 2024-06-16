import React from 'react';
import service1 from '../../../public/assets/Homepage/service1.avif';
import service2 from '../../../public/assets/Homepage/service2.avif';
import service3 from '../../../public/assets/Homepage/service3.avif';
import service4 from '../../../public/assets/Homepage/service4.avif';
import { StaticImageData } from 'next/image';

const cardClass = "relative group w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105";
const overlayClass = "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg";
const textClass = "text-xl font-semibold";

interface ServiceCardProps {
  src: string | StaticImageData; // Allow both string and StaticImageData
  alt: string;
  title: string;
}

const Servicecard: React.FC = () => {
  return (
    <div className="min-h-[600px] bg-zinc-900 text-white flex flex-col items-center justify-center p-8">
      <div className="text-center mb-[90px]">
        <h2 className="text-sm uppercase tracking-widest text-zinc-400 mb-5">Services</h2>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">Transform your business with advanced technologies</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mb-8">
        <ServiceCard src={service1} alt="Artificial Intelligence" title="Artificial Intelligence" />
        <ServiceCard src={service2} alt="Web Development" title="Web Development" />
        <ServiceCard src={service3} alt="Cognitive Business Operations" title="Cognitive Business Operations" />
        <ServiceCard src={service4} alt="Consulting" title="Consulting" />
      </div>
      <button className="mt-8 px-6 py-3 bg-zinc-700 text-white rounded-full hover:bg-zinc-600 transition-colors duration-300">
        View all topics
      </button>
    </div>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ src, alt, title }) => {
  // Check if src is a string or StaticImageData
  const imageSource = typeof src === 'string' ? src : src.src;

  return (
    <div className={cardClass}>
      {/* Render img tag conditionally */}
      {typeof src === 'string' ? (
        <img src={src} alt={alt} className={cardClass} />
      ) : (
        <img src={src.src} alt={alt} className={cardClass} />
      )}
      <div className={overlayClass}>
        <span className={textClass}>{title}</span>
      </div>
    </div>
  );
};

export default Servicecard;
