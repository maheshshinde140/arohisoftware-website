import React from 'react';

const WhyReinventLearning: React.FC = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Reinvent Learning?</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="flex flex-col items-center">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-5xl font-bold mb-2"> 39%</h3>
            <p className="text-gray-400 text-justify">A LinkedIn Learning report found that employees who invest in developing new skills are more likely to receive promotions compared to those who do not.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-5xl font-bold mb-2">50%</h3>
            <p className="text-gray-400 text-justify"> The World Economic Forum reports that by 2025, 50% of all employees will need reskilling due to technological advancements. Those who continuously update their skills are more likely to remain employable and competitive in the job market.</p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-5xl font-bold mb-2">$30</h3>
            <p className="text-gray-400 text-justify">Companies that invest in employee learning and development see significant returns. A report by IBM found that every dollar invested in online training results in $30 in productivity gains.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-5xl font-bold mb-2">94%</h3>
            <p className="text-gray-400 text-justify">Continuous learning helps individuals stay relevant in their current roles. The same LinkedIn Learning report indicates that 94% of employees would stay at a company longer if it invested in their learning and development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyReinventLearning;
