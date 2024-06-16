"use client";

import React, { useState } from 'react';

import Footer from '../components/Footer';
import StayConnected from '../components/StayConnected';

const sharedButtonClasses = "py-2 bg-purple-800 text-white hover:bg-violet-800 rounded-lg transition duration-300";
const sharedInputClasses = "w-full max-w-md p-2 border border-zinc-700 rounded-lg";
const sharedTextClasses = "text-black";

interface JobCardProps {
  location: string;
  title: string;
  role: string;
  businessArea: string;
  experience: string;
  postedTime: string;
}

const JobCard: React.FC<JobCardProps> = ({ location, title, role, businessArea, experience, postedTime }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg job-card duration-300">
      <div className="flex justify-between items-center p-2 border-b-2 min-w">
        <span className={sharedTextClasses}>{location}</span>
      </div>
      <h3 className="text-xl font-semibold text-black mt-2">{title}</h3>
      <p className="text-black mt-2">{role}</p>
      <p className="text-black mt-2">{businessArea}</p>
      <p className="text-black mt-2">{experience}</p>
      <p className="text-black mt-2">{postedTime}</p>
    </div>
  );
};

const jobDetails = [
  {
    location: "INDIA",
    title: "Application Lead",
    role: "Software Engineering – Project Role: Application Lead",
    businessArea: "Technology",
    experience: "Years of Experience: 2-5",
    postedTime: "Posted within last 24 hours",
  },
  {
    location: "USA",
    title: "Senior Developer",
    role: "Software Engineering – Project Role: Senior Developer",
    businessArea: "Product Development",
    experience: "Years of Experience: 5-8",
    postedTime: "Posted 3 days ago",
  },
  {
    location: "UK",
    title: "Project Manager",
    role: "Project Management – Project Role: Project Manager",
    businessArea: "Operations",
    experience: "Years of Experience: 8-10",
    postedTime: "Posted 1 week ago",
  },
  // Add more job details as needed
];

const Jobs: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const filteredJobs = jobDetails.filter(job =>
    job.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white p-4 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center my-14">
          <h1 className="text-xl lg:text-4xl font-bold text-black">Search Jobs at Arohi Software</h1>
          <div className="mt-4 flex text-black flex-row justify-center items-center">
            <input
              type="text"
              placeholder="Use quotation marks for exact matches"
              className={sharedInputClasses}
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <button className={`${sharedButtonClasses} px-2 sm:mt-0 ml-2`}>Search</button>
          </div>
        </div>
        <div className='bg-gray-200 p-5 rounded-lg'>
          <div className="my-8 lg:container">
            <h2 className="text-2xl font-semibold text-black">Latest Jobs ({filteredJobs.length})</h2>
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
            {filteredJobs.map((job, index) => (
              <JobCard
                key={index}
                location={job.location}
                title={job.title}
                role={job.role}
                businessArea={job.businessArea}
                experience={job.experience}
                postedTime={job.postedTime}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between space-x-1 items-center mt-8">
          <button className={`${sharedButtonClasses} w-20 mt-4 sm:mt-0`}>Previous</button>
          <div className="flex space-x-2 mt-4">
            <button className="px-4 py-2 bg-zinc-300 text-black rounded-lg">1</button>
            <button className="px-4 py-2 bg-zinc-300 text-black rounded-lg">2</button>
            <button className="px-4 py-2 bg-zinc-300 text-black rounded-lg">3</button>
          </div>
          <button className={`${sharedButtonClasses} w-20 mt-4 sm:mt-0`}>Next</button>
        </div>
        <StayConnected />
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
