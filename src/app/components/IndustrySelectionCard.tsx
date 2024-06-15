"use client"
import React from 'react';

interface Industry {
  name: string;
  alt: string;
}

const industryData: Industry[] = [
  { name: 'Banking', alt: 'Banking' },
  { name: 'Communications, Media, and Information Services', alt: 'Communications, Media, and Information Services' },
  { name: 'Education', alt: 'Education' },
  { name: 'Healthcare', alt: 'Healthcare' },
  { name: 'Insurance', alt: 'Insurance' },
  { name: 'Manufacturing', alt: 'Manufacturing' },
  { name: 'Retail', alt: 'Retail' },
  { name: 'Capital Markets', alt: 'Capital Markets' },
  { name: 'Consumer Goods and Distribution', alt: 'Consumer Goods and Distribution' },
  { name: 'Energy, Resources, and Utilities', alt: 'Energy, Resources, and Utilities' },
  { name: 'High Tech', alt: 'High Tech' },
  { name: 'Life Sciences', alt: 'Life Sciences' },
  { name: 'Public Services', alt: 'Public Services' },
  { name: 'Travel and Logistics', alt: 'Travel and Logistics' }
];

const sharedClasses = {
  flexItemsCenter: 'flex items-center space-x-4',
  textClasses: 'text-lg text-black', // Ensure all text is black
  imageClasses: 'h-6 w-6'
};

interface IndustryCardProps {
  name: string;
  alt: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ name, alt }) => (
  <div className={sharedClasses.flexItemsCenter}>
    <img src={`https://placehold.co/24x24`} alt={alt} className={sharedClasses.imageClasses} />
    <span className={sharedClasses.textClasses}>{name}</span>
  </div>
);

const IndustrySelection: React.FC = () => (
  <div className="max-w-7xl mx-auto mt-10  py-12 px-4 sm:px-6 text-black ">
    <h2 className="text-3xl font-extrabold  text-black mb-8">Select your industry. Discover our impact.</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
      <div className="space-y-4">
        {industryData.slice(0, 7).map((industry, index) => (
          <IndustryCard key={index} name={industry.name} alt={industry.alt} />
        ))}
      </div>
      <div className="space-y-4">
        {industryData.slice(7).map((industry, index) => (
          <IndustryCard key={index} name={industry.name} alt={industry.alt} />
        ))}
      </div>
    </div>
  </div>
);

export default IndustrySelection;
