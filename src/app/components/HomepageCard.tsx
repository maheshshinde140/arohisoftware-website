import React from 'react';

const cardClasses = 'relative group';
const overlayClasses = 'absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300';
const textClasses = 'text-sm font-bold';
const titleClasses = 'text-lg font-semibold';

const Card: React.FC<{ imageUrl: string, altText: string, category: string, title: string, description?: string }> = ({ imageUrl, altText, category, title, description }) => {
  return (
    <div className={cardClasses}>
      <img src={imageUrl} alt={altText} className="w-full h-full object-cover" />
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
    <div className="flex justify-center items-center min-h-screen bg-black text-white mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card
          imageUrl="https://source.unsplash.com/random/300x400"
          altText="Card Image"
          category="CASE STUDY"
          title="Fighting poverty with technology and humanity: Gerando Falcões"
        />
        <Card
          imageUrl="https://source.unsplash.com/random/301x401"
          altText="Card Image"
          category="RESEARCH REPORT"
          title="Tap into new value with advanced supply chain capabilities"
        />
        <Card
          imageUrl="https://source.unsplash.com/random/302x402"
          altText="Card Image"
          category="CASE STUDY"
          title="Generative AI in the driver's seat: BMW"
        />
        <Card
          imageUrl="https://source.unsplash.com/random/303x403"
          altText="Card Image"
          category="RESEARCH REPORT"
          title="Reinventing M&A with generative AI"
        />
        <Card
          imageUrl="https://source.unsplash.com/random/304x404"
          altText="Card Image"
          category="RESEARCH REPORT"
          title="Turn disruption into value creation"
        />
        <Card
          imageUrl="https://source.unsplash.com/random/305x405"
          altText="Card Image"
          category="CASE STUDY"
          title="Banking on happy customers: BBVA"
        />
        <Card
          imageUrl="https://source.unsplash.com/random/306x406"
          altText="Card Image"
          category="ANNOUNCEMENT"
          title="Accenture takes new steps to help clients scale generative AI responsibly"
        />
        <Card
          imageUrl="https://source.unsplash.com/random/307x407"
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
