import React from 'react';
import Image from 'next/image';
import pic from '../../../public/career.png';

const CareersPage: React.FC = () => {
  return (
    <div className="bg-black text-white  p-16 lg:min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Careers</h1>
      <div className="bg-gradient-to-r from-blue-300 to-purple-300 p-6 rounded-md flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-black text-2xl font-bold mb-2">Careers at Arohi Software</h2>
          <p className="text-black mb-4">We invite you to supercharge your potential. Find what inspires and drives you. Find your spark.</p>
          <a href="#" className="inline-block bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">Visit our careers page →</a>
        </div>
        <div className="md:w-1/2">
          <Image src={pic} alt="Person smiling" className="rounded-lg w-400 h-400 hidden lg:flex " />
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
