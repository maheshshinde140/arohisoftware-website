import React from 'react';

import Footer from '../components/Footer';
import StayConnected from '../components/StayConnected';
const sharedButtonClasses = "py-2 bg-purple-800 text-white hover:bg-violet-800 rounded-lg transition duration-300";
const sharedInputClasses = "w-full max-w-md p-2 border border-zinc-700 rounded-lg";
const sharedTextClasses = "text-black";

const JobCard: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg job-card duration-300 ">
      <div className="flex justify-between items-center p-2 border-b-2 min-w">
        <span className={sharedTextClasses}>INDIA</span>
       
      </div>
      <h3 className="text-xl font-semibold text-black mt-2">Application Lead</h3>
      <p className="text-black mt-2">Software Engineering – Project Role: Application Lead</p>
      <p className="text-black mt-2">Business Area: Technology</p>
      <p className="text-black mt-2">Years of Experience: 2-5</p>
      <p className=" text-black mt-2">Posted within last 24 hours</p>
    </div>
  );
};

const jobs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center my-14">
          <h1 className="text-xl lg:text-4xl  font-bold text-black">Search Jobs at Arohi Software</h1>
          <div className="mt-4 flex flex-row justify-center items-center">
            <input type="text" placeholder="Use quotation marks for exact matches" className={sharedInputClasses} />
            <button className={`${sharedButtonClasses} px-2 sm:mt-0 ml-2`}>Search</button>
          </div>
        </div>
        <div className='bg-gray-200 p-5 rounded-lg '>
        <div className="my-8 lg:container">
          <h2 className="text-2xl font-semibold text-black">Latest Jobs (57020)</h2>
          <div className="mt-4 lg:flex">
          <span className={`min-w-fit font-semibold text-black content-center`}>Sort by:</span>
            <div className="mb-4 lg:mb-0 grid grid-cols-2 gap-2 lg:grid-cols-6">
          
              <button className={`${sharedButtonClasses} ml-2 mt-2 min-w-32 lg:mt-0`}>Most Recent</button>
              <button className={`${sharedButtonClasses} ml-2 mt-2 min-w-32 lg:mt-0`}>Most Relevant</button>
              <button className={`${sharedButtonClasses} ml-2 mt-2 min-w-32 lg:mt-0`}>New Job Search</button>
              <button className={`${sharedButtonClasses} ml-2 mt-2 min-w-32 sm:mt-0`}>List View</button>
              <button className={`${sharedButtonClasses} ml-2 mt-2 min-w-32 sm:mt-0`}>Filter Results</button>
            </div>

          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-12">
          <JobCard />
          <JobCard />
          <JobCard />
          {/* Add more JobCard components here if needed */}
        </div>
        </div>
        <div className="flex flex-row justify-between space-x-1 items-center mt-8">
          <button className={`${sharedButtonClasses}  w-20 mt-4 sm:mt-0`}>Previous</button>
          <div className="flex space-x-2 mt-4 ">
            <button className="px-4 py-2 bg-zinc-300 text-black rounded-lg">1</button>
            <button className="px-4 py-2 bg-zinc-300 text-black rounded-lg">2</button>
            <button className="px-4 py-2 bg-zinc-300 text-black rounded-lg">3</button>
          </div>
          <button className={`${sharedButtonClasses} w-20 mt-4 sm:mt-0`}>Next</button>
        </div>
       <StayConnected/>
      </div>
      <Footer/>
    </div>
  );
};

export default jobs;
