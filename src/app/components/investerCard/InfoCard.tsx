import React from 'react';

// Shared Tailwind CSS classes
const textWhite = 'text-white font-san';
const padding = 'p-6';
const marginTop = 'mt-2';
const largeText = 'text-lg';
const underline = 'underline';
const inlineBlock = 'inline-block';

interface GridItemProps {
  title: string;
  date?: string;
  image: string;
  description?: string;
  buttonText: string;
}

const GridItem: React.FC<GridItemProps> = ({ title, date, image, description, buttonText }) => {
  return (
    <div className={`relative ${textWhite} ${padding} h-[40vh] bg-cover bg-no-repeat`} style={{backgroundImage: `url(${image})`}}>
      <h2 className="text-xl font-bold">{title}</h2>
      {date && <h3 className="text-2xl font-bold mt-2">{date}</h3>}
      {description && <p className={marginTop}>{description}</p>}
      <a href="#" className={`${marginTop} ${inlineBlock} ${largeText} ${underline}`}>{buttonText}</a>
    </div>
  );
};

const InfoCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 mt-4 mx-auto w-[80vw]">
      <div className={` ${textWhite} ${padding}`} style={{
        backgroundImage: `url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiZB2B1EK5J90fvYHTe9dw2wwU5050fI3EeALYuHOWCAWuikn3")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <h2 className="text-2xl font-bold">SECOND QUARTER FISCAL 2024 EARNINGS RESULTS</h2>
        <a href="#" className={`${marginTop} ${inlineBlock} ${largeText} ${underline}`}>LEARN MORE →</a>
      </div>
      <div className={` ${textWhite} ${padding}`} style={{
        backgroundImage:"url('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6cR_yRocEbBd-h399BiwDj78GeHFTcIRSYUPyaXoFW9UwrU0Z')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <h2 className="text-2xl font-bold">INVESTOR BRIEFING</h2>
        <p className={marginTop}>November 2023</p>
        <a href="#" className={`${marginTop} ${inlineBlock} ${largeText} ${underline}`}>LEARN MORE →</a>
        <h2 className={`mt-6 text-2xl font-bold`}>INVESTOR ANALYST CONFERENCE</h2>
        <p className={marginTop}>April 7, 2022</p>
        <a href="#" className={`${marginTop} ${inlineBlock} ${largeText} ${underline} mr-8`}>WATCH THE REPLAY →</a>
        <a href="#" className={`${marginTop} ${inlineBlock} ${largeText} ${underline}`}>LEARN MORE →</a>
      </div>
      <GridItem
        title="Technology Vision 2024"
        description="How AI unleashes the next level of human potential"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCenyhH9eLu_CBAq4NqselG-cLcmkHd1OU4DT0kq-5dXZFx80X"
        buttonText="LEARN MORE →"
      />
      <GridItem
        title="DRIVING REINVENTION, DELIVERING 360° VALUE"
        image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT7BMtG1wIUk1Uy4Kz6JDmWcZ1u2gfrsxP_r1-XWmNw-miOBzFC"
        buttonText="VIEW OUR 2023 LETTER TO OUR SHAREHOLDERS→"
      />
    </div>


  );
};

export default InfoCard;
