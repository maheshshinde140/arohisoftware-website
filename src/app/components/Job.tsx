"use client";

import React, { useState } from "react";
import Footer from "./Footer";
import StayConnected from "./StayConnected";
import CareersPage from "./CareersComponent";

const sharedButtonClasses =
  "py-2 bg-purple-800 text-white hover:bg-violet-800 rounded-lg transition duration-300";
const sharedInputClasses =
  "w-full max-w-md p-2 border border-zinc-700 rounded-lg text-black";
const sharedTextClasses = "text-black";

interface JobCardProps {
  location: string;
  title: string;
  role: string;
  businessArea: string;
  experience: string;
  postedTime: string;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  location,
  title,
  role,
  businessArea,
  experience,
  postedTime,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-gray-100 p-4 rounded-lg shadow-lg job-card duration-300"
    >
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
    experience: "Open to Freshers",
    postedTime: "Posted within last 24 hours",
  },
  {
    location: "INDIA",
    title: "Senior Developer",
    role: "Software Engineering – Project Role: Senior Developer",
    businessArea: "Product Development",
    experience: "Open to Freshers",
    postedTime: "Posted 3 days ago",
  },
  {
    location: "INDIA",
    title: "Project Manager",
    role: "Project Management – Project Role: Project Manager",
    businessArea: "Operations",
    experience: "Open to Freshers",
    postedTime: "Posted 1 week ago",
  },
  {
    location: "INDIA",
    title: "QA Engineer",
    role: "Software Engineering – Project Role: QA Engineer",
    businessArea: "Quality Assurance",
    experience: "Open to Freshers",
    postedTime: "Posted 2 days ago",
  },
  {
    location: "INDIA",
    title: "Product Owner",
    role: "Product Management – Project Role: Product Owner",
    businessArea: "Product Development",
    experience: "Open to Freshers",
    postedTime: "Posted 5 days ago",
  },
  {
    location: "INDIA",
    title: "Data Scientist",
    role: "Data Science – Project Role: Data Scientist",
    businessArea: "Analytics",
    experience: "Open to Freshers",
    postedTime: "Posted 4 days ago",
  },
  {
    location: "INDIA",
    title: "UX Designer",
    role: "Design – Project Role: UX Designer",
    businessArea: "Design",
    experience: "Open to Freshers",
    postedTime: "Posted 1 week ago",
  },
  {
    location: "INDIA",
    title: "Business Analyst",
    role: "Business Analysis – Project Role: Business Analyst",
    businessArea: "Business Intelligence",
    experience: "Open to Freshers",
    postedTime: "Posted 3 days ago",
  },
  {
    location: "INDIA",
    title: "DevOps Engineer",
    role: "Software Engineering – Project Role: DevOps Engineer",
    businessArea: "Technology",
    experience: "Open to Freshers",
    postedTime: "Posted 2 days ago",
  },
  {
    location: "INDIA",
    title: "IT Support Specialist",
    role: "IT Support – Project Role: IT Support Specialist",
    businessArea: "Support",
    experience: "Open to Freshers",
    postedTime: "Posted 5 days ago",
  },
  {
    location: "INDIA",
    title: "Network Engineer",
    role: "Network Engineering – Project Role: Network Engineer",
    businessArea: "Infrastructure",
    experience: "Open to Freshers",
    postedTime: "Posted 1 day ago",
  },
  {
    location: "INDIA",
    title: "Cybersecurity Analyst",
    role: "Cybersecurity – Project Role: Cybersecurity Analyst",
    businessArea: "Security",
    experience: "Open to Freshers",
    postedTime: "Posted 3 days ago",
  },
];

const Job: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("");
  const [selectedJob, setSelectedJob] = useState<JobCardProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const jobsPerPage = 6;

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleSort = (option: string) => {
    setSortOption(option);
    setCurrentPage(1); // Reset to first page on sort
  };

  const filteredJobs = jobDetails
    .filter((job) =>
      job.title.toLowerCase().includes(searchInput.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "Most Recent") {
        return (
          new Date(b.postedTime).getTime() - new Date(a.postedTime).getTime()
        );
      }
      if (sortOption === "Most Relevant") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleJobCardClick = (job: JobCardProps) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-white p-4 mt-20">
      <div className="max-w-7xl mx-auto mb-10">
        <div className="text-center my-14">
          <h1 className="text-xl lg:text-4xl font-bold text-black">
            Search Jobs at Arohi Software
          </h1>
          <div className="mt-4 flex text-black flex-row justify-center items-center">
            <input
              type="text"
              placeholder="Use quotation marks for exact matches"
              className={sharedInputClasses}
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <button className={`${sharedButtonClasses} px-2 sm:mt-0 ml-2`}>
              Search
            </button>
          </div>
        </div>
        <div className="bg-gray-200 p-5 rounded-lg">
          <div className="my-8 lg:container">
            <h2 className="text-2xl font-semibold text-black">
              Latest Jobs ({filteredJobs.length})
            </h2>
            <div className="mt-4 lg:flex">
              <span className={`min-w-fit font-semibold text-black content-center`}>
                Sort by:
              </span>
              <div className="mb-4 lg:mb-0 grid grid-cols-2 gap-2 lg:grid-cols-6">
                <button
                  className={`${sharedButtonClasses} ml-2 mt-2 min-w-32 lg:mt-0`}
                  onClick={() => handleSort("Most Recent")}
                >
                  Most Recent
                </button>
                <button
                  className={`${sharedButtonClasses} ml-2 mt-2 min-w-32 lg:mt-0`}
                  onClick={() => handleSort("Most Relevant")}
                >
                  Most Relevant
                </button>
                <button
                  className={`${sharedButtonClasses} ml-2 mt-2 min-w-32 lg:mt-0`}
                >
                  New Job Search
                </button>
                <button
                  className={`${sharedButtonClasses} ml-2 mt-2 min-w-32 lg:mt-0`}
                >
                  Save this search
                </button>
                <button
                  className={`${sharedButtonClasses} ml-2 mt-2 min-w-32 lg:mt-0`}
                >
                  Clear filters
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentJobs.map((job, index) => (
              <JobCard
                key={index}
                location={job.location}
                title={job.title}
                role={job.role}
                businessArea={job.businessArea}
                experience={job.experience}
                postedTime={job.postedTime}
                onClick={() => handleJobCardClick(job)}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`${sharedButtonClasses} mx-1 px-3`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`${sharedButtonClasses} mx-1 px-3`}
          >
            Next
          </button>
        </div>
        {isModalOpen && selectedJob && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h2 className="text-2xl font-bold mb-4">{selectedJob.title}</h2>
              <p><strong>Location:</strong> {selectedJob.location}</p>
              <p><strong>Role:</strong> {selectedJob.role}</p>
              <p><strong>Business Area:</strong> {selectedJob.businessArea}</p>
              <p><strong>Experience:</strong> {selectedJob.experience}</p>
              <p><strong>Posted:</strong> {selectedJob.postedTime}</p>
              <button
                onClick={closeModal}
                className={`${sharedButtonClasses} mt-4`}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    
     
    </div>
  );
};

export default Job;
