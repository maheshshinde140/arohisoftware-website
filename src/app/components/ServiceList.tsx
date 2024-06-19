import React from 'react';

const WhyReinventLearning: React.FC = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Reinvent Learning?</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="flex flex-col items-center">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-5xl font-bold mb-2">$10T</h3>
            <p className="text-gray-400">in economic growth is achievable with a people-centric approach to AI, driving innovation and productivity.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-5xl font-bold mb-2">70%</h3>
            <p className="text-gray-400">of jobs will require new skills by 2030. Investing in employee development now prepares your business for the future.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-5xl font-bold mb-2">85%</h3>
            <p className="text-gray-400">of employees are motivated to reskill. Harness this enthusiasm with targeted training programs.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-5xl font-bold mb-2">10%</h3>
            <p className="text-gray-400">of companies are leading in workforce reskilling. Be a part of this innovative group driving long-term success.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyReinventLearning;
