import React from 'react';

const sharedButtonClasses = "px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg hover:from-yellow-500 hover:to-orange-600 transition duration-300";
const sharedInputClasses = "w-full max-w-md p-2 border border-zinc-700 rounded-lg";
const sharedTextClasses = "text-zinc-400";

const JobCard: React.FC = () => {
  return (
    <div className="bg-zinc-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="flex justify-between items-center">
        <span className={sharedTextClasses}>INDIA | BENGALURU</span>
        <button className="text-zinc-600 hover:text-zinc-300 transition duration-300">Save</button>
      </div>
      <h3 className="text-xl font-semibold text-zinc-300 mt-2">Application Lead</h3>
      <p className="text-zinc-400 mt-2">Software Engineering – Project Role: Application Lead</p>
      <p className="text-zinc-400 mt-2">Business Area: Technology</p>
      <p className="text-zinc-400 mt-2">Years of Experience: 2-5</p>
      <p className="text-zinc-300 mt-2">Posted within last 24 hours</p>
    </div>
  );
};

const jobs: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-900 p-4 sm:p-8 lg:p-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center my-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-300">Search Jobs at Arohi Software</h1>
          <div className="mt-4 flex flex-col sm:flex-row justify-center items-center">
            <input type="text" placeholder="Use quotation marks for exact matches" className={sharedInputClasses} />
            <button className={`${sharedButtonClasses} mt-2 sm:mt-0 sm:ml-2`}>Search</button>
          </div>
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-semibold text-zinc-300">Latest Jobs (57020)</h2>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-4">
            <div className="mb-4 lg:mb-0">
              <span className={sharedTextClasses}>Sort by:</span>
              <button className={`${sharedButtonClasses} ml-2 mt-2 lg:mt-0`}>Most Recent</button>
              <button className={`${sharedButtonClasses} ml-2 mt-2 lg:mt-0`}>Most Relevant</button>
            </div>
            <div className="flex flex-col sm:flex-row">
              <button className={`${sharedButtonClasses} mt-2 sm:mt-0`}>New Job Search</button>
              <button className={`${sharedButtonClasses} ml-2 mt-2 sm:mt-0`}>List View</button>
              <button className={`${sharedButtonClasses} ml-2 mt-2 sm:mt-0`}>Filter Results</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <JobCard />
          {/* Add more JobCard components here if needed */}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
          <button className={`${sharedButtonClasses} from-red-400 to-pink-500`}>Previous</button>
          <div className="flex space-x-2 mt-4 sm:mt-0">
            <button className="px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg">1</button>
            <button className="px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg">2</button>
            <button className="px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg">3</button>
          </div>
          <button className={`${sharedButtonClasses} from-red-400 to-pink-500 mt-4 sm:mt-0`}>Next</button>
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-semibold text-zinc-300">Stay connected</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-zinc-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img src="https://placehold.co/100x100" alt="Join Our Team" className="mx-auto" />
              <h3 className="text-xl font-semibold text-zinc-300 mt-2 text-center">Join Our Team</h3>
              <p className="text-zinc-400 mt-2 text-center">Search open positions that match your skills and interest.</p>
              <button className={`${sharedButtonClasses} mt-4 w-full`}>Search Accenture Jobs</button>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img src="https://placehold.co/100x100" alt="Keep Up to Date" className="mx-auto" />
              <h3 className="text-xl font-semibold text-zinc-300 mt-2 text-center">Keep Up to Date</h3>
              <p className="text-zinc-400 mt-2 text-center">Stay ahead with career tips, insider perspectives, and industry-leading insights.</p>
              <button className={`${sharedButtonClasses} mt-4 w-full`}>Read Careers Blog</button>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img src="https://placehold.co/100x100" alt="Job Alert Emails" className="mx-auto" />
              <h3 className="text-xl font-semibold text-zinc-300 mt-2 text-center">Job Alert Emails</h3>
              <p className="text-zinc-400 mt-2 text-center">Personalize your subscription to receive job alerts, latest news and insider tips.</p>
              <button className={`${sharedButtonClasses} mt-4 w-full`}>Register for Job Alerts</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default jobs;
