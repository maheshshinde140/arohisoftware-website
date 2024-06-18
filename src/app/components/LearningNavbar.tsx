import React from 'react';

const MainSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row p-8">
      <div className="md:w-1/2 flex justify-center items-center">
        <img src="https://dynamicmedia.accenture.com/is/content/accenture/Accenture%20education%20services%20hero%20image?ts=1718160472009&&fmt=webp-alpha&dpr=off" alt="Main Visual" className="max-w-full" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 md:ml-8">
        <h1 className="text-4xl font-bold mb-4">Become a talent creator</h1>
        <p className="text-lg mb-4">
          While technology plays a key role in business reinvention, it’s your people who determine its success.
          Accenture LearnVantage helps you build the skills they need, and you want, to grow faster.
        </p>
      </div>
    </section>
  );
}

export default MainSection;

