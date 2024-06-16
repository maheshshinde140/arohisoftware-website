import React from "react";

interface FeedformProps {
  title: string;
}

const Feedform: React.FC<FeedformProps> = ({ title }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-1 bg-gradient-to-r from-purple-600 to-[#020817] p-10 text-white flex flex-col justify-center items-start">
        <h1 className="text-4xl font-bold mb-4">Think Tomorrow With Arohi Software</h1>
        <p className="mb-4">Is your digital roadmap adaptive to</p>
        <p className="mb-4">
          Generative AI, Hyper cloud, and Intelligent Automation?
        </p>
        <div className="flex space-x-4 mt-4">
          <button className="bg-white text-purple-600 px-4 py-2 rounded-lg">
            Absolutely Yes
          </button>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-lg">
            Not Completely
          </button>
        </div>
      </div>
      <div className="flex-1 bg-white p-10 flex flex-col justify-center">
        <h2 className="text-1xl font-black mb-4 text-gray-500">Get Started</h2>
        <h1 className="text-2xl md:text-3xl text-black lg:text-4xl font-bold mb-3">
          {title}
        </h1>
        <p className="text-md mb-5 font-sans text-black">Talk to our Client Experts</p>
        <form className="space-y-4 mb-5">
          <div className="lg:flex lg:space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 border-b-2 focus:border-purple-600 text-[#0a0a0a] border-gray-300 p-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 border-b-2 focus:border-purple-600 text-[#0a0a0a]  border-gray-300 p-2 focus:outline-none"
            />
          </div>
          <div className="lg:flex lg:space-x-4 ">
            <input
              type="text"
              placeholder="Phone"
              className="flex-1 border-b-2 focus:border-purple-600 text-[#0a0a0a] p-2 border-gray-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Company"
              className="flex-1 border-b-2 focus:border-purple-600 text-[#0a0a0a] border-gray-300 p-2 focus:outline-none"
            />
          </div>
          <div className="lg:flex lg:space-x-4 ">
          <input
            type="text"
            placeholder="We are looking for"
            className="flex-1 border-b-2 focus:border-purple-600 text-[#0a0a0a] border-gray-300 p-2 focus:outline-none"
          />
            <input
              type="text"
              placeholder="Message"
              className="flex-1 border-b-2 focus:border-purple-600 text-[#0a0a0a] border-gray-300 p-2 focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-2 pt-10 pb-4">
            <input type="checkbox" id="agree" className="form-checkbox" />
            <label htmlFor="agree" className="text-sm text-black">
              I agree to your{" "}
              <a href="#" className="text-blue-500">
                privacy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500">
                cookie
              </a>{" "}
              policies.
            </label>
          </div>
          <div className="flex items-center space-x-1 pb-4">
            <div className="bg-black text-white px-4 py-2">2 + 1 =</div>
            <input
              type="text"
              className="flex-1 border-2 focus:border-purple-600 text-[#0a0a0a] p-2 focus:outline-none border-gray-300"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedform;
