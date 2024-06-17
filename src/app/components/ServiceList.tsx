import React from 'react';

const WhyReinventLearning: React.FC = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why reinvent learning?</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="flex flex-col items-center">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-5xl font-bold mb-2">$10.3T</h3>
            <p className="text-gray-400">of economic value can be created if enterprises across the globe take a responsible, people-centric approach to adopt gen AI</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-5xl font-bold mb-2">61%</h3>
            <p className="text-gray-400">of workers globally will need retraining by 2027</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-5xl font-bold mb-2">94%</h3>
            <p className="text-gray-400">of people around the world saying they are ready to learn new skills to work with gen AI</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-5xl font-bold mb-2">5%</h3>
            <p className="text-gray-400">of organizations only are actively reskilling their workforce at scale</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyReinventLearning;
