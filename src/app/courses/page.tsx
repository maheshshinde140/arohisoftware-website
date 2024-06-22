"use client";
import Link from "next/link";
import Footer from "../components/Footer";

function Page() {
  return (
    <>
      <div className="w-full bg-white mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col text-center justify-around p-6">
            <h3 className="text-7xl font-bold text-black">Expand your edge</h3>
            <p className="text-black font-normal mt-16 text-xl max-w-lg mx-auto">
            Learning is in our DNA. We commit to offering our people opportunities to acquire new skills and strengthen their readiness to advance into new roles.            </p>
            <Link href="/jobs">
              <span className="text-blue-500 font-normal text-xl mt-8 cursor-pointer">
                SEARCH JOBS
              </span>
            </Link>
          </div>
          <div className="flex justify-center p-6">
            <img src="./training.webp" alt="" className="max-w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200">
        <h3 className="text-5xl font-semibold text-black px-10 py-8 ">Innovation never stops</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col  justify-around pb-8 px-8">
            <p className="text-black font-normal leading-6 tracking-wide pl-4">
            "Innovation never stops" encapsulates the relentless pursuit of progress and improvement. It signifies a commitment to continuous learning, adaptation, and the constant quest for new ideas and solutions. This mindset drives individuals and organizations to push boundaries, explore uncharted territories, and embrace change. By fostering a culture of perpetual innovation, we ensure that we remain at the forefront of advancements, consistently delivering value and staying ahead in a rapidly evolving world. Whether through small incremental improvements or groundbreaking discoveries, the spirit of ongoing innovation fuels growth, resilience, and success. 
              </p>
          </div>
        
        </div>
      </div>

      <div className="w-full bg-gray-300">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 justify-center  py-24 ">
          <div className="flex flex-col items-center text-center shadow p-4 bg-white mt-5">
            <img src="./Accenture-globe-clock-icon-150.png" alt="" className="max-w-full h-auto mt-[-4rem] sm:mt-[-6rem] md:mt-[-8rem]" />
            <h4 className="mt-4 text-xl font-semibold text-black">24/7 learning</h4>
            <p className="text-black font-normal text-left tracking-wide">
            The world is at your fingertips with unlimited access to leading mobile-friendly online training curated by Accenture subject matter experts to help you advance at every level of your career.
            </p>
          </div>
          <div className="flex flex-col items-center text-center shadow p-4 bg-white mt-5">
            <img src="./mind.png" alt="" className="max-w-full h-auto mt-[-4rem] sm:mt-[-6rem] md:mt-[-8rem]" />
            <h4 className="mt-4 text-xl font-semibold text-black">Feed your mind</h4>
            <p className="text-black font-normal text-left tracking-wide">
            Explore our award-winning learning from Accenture’s experts and leading external providers like Coursera, Percipio, Pluralsight, and Thrive Global as well as prestigious universities including INSEAD, MIT, Northwestern, and Oxford.
            </p>
          </div>
          <div className="flex flex-col items-center text-center shadow p-4 bg-white mt-5">
            <img src="./sun.png" alt="" className="max-w-full h-auto mt-[-4rem] sm:mt-[-6rem] md:mt-[-8rem]" />
            <h4 className="mt-4 text-xl font-semibold text-black">Go beyond your edge</h4>
            <p className="text-black font-normal text-left tracking-wide">
            No matter your function, industry or business expertise, take advantage of programs using our neuroscience-based learning principles and expansive educational opportunities that can help take you as far as your ambition.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200">
        <h3 className="text-5xl font-semibold text-black px-10 py-8 ">Follow your aspirations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col  justify-around pb-8 px-8">
            <p className="text-black font-normal leading-6 tracking-wide pl-4">
            Advance your skills through our state-of-the-art offerings that tie virtual learning directly back to your real-world career. Explore specialized development opportunities developed and delivered through academic partnerships. Key areas of learning include 
              </p>
          </div>
        
        </div>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  justify-center ">
          <div className="flex flex-col items-center text-center shadow p-4 bg-white">
            <img src="./Accenture-work-environment2.webp" alt="" className="max-w-full h-auto" />
            <h4 className="mt-4 text-xl font-semibold text-black">Technology</h4>
            <p className="text-black font-normal text-left tracking-wide">
            External credentials through certifications in technologies and platforms like Microsoft, Azure, Google, AWS, SAP, Salesforce, ServiceNow and others.
            </p>
          </div>
          <div className="flex flex-col items-center text-center shadow p-4 bg-white">
            <img src="./ind.png" alt="" className="max-w-full h-auto" />
            <h4 className="mt-4 text-xl font-semibold text-black">Industry
            </h4>
            <p className="text-black font-normal text-left tracking-wide">
            Learning across industries where we serve clients.            </p>
          </div>
          <div className="flex flex-col items-center text-center shadow p-4 bg-white">
            <img src="./function.png" alt="" className="max-w-full h-auto" />
            <h4 className="mt-4 text-xl font-semibold text-black">Function
            </h4>
            <p className="text-black font-normal text-left tracking-wide">
            Job-specific skills and expertise in what drives value across the business value chain, from supply chain to talent to finance and sales.
            </p>
          </div>
          <div className="flex flex-col items-center text-center shadow p-4 bg-white">
            <img src="./leadership.png" alt="" className="max-w-full h-auto" />
            <h4 className="mt-4 text-xl font-semibold text-black">Leadership</h4>
            <p className="text-black font-normal text-left tracking-wide">
            Grow your leadership abilities at all levels throughout your career, supported by industry leading tools like the CliftonStrengths assessment and wide-ranging, diverse and inclusive leadership development programs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center shadow p-4 bg-white">
            <img src="./tq.png" alt="" className="max-w-full h-auto" />
            <h4 className="mt-4 text-xl font-semibold text-black">TQ</h4>
            <p className="text-black font-normal text-left tracking-wide">
            Our unique Technology Quotient offering builds broad-based fluency around the hottest technology topics. Get a preview.
            </p>
          </div>
          <div className="flex flex-col items-center text-center shadow p-4 bg-white">
            <img src="./learn.png" alt="" className="max-w-full h-auto" />
            <h4 className="mt-4 text-xl font-semibold text-black">Learning to Learn</h4>
            <p className="text-black font-normal text-left tracking-wide">
            Become a better learner by improving your learning skills, starting now: check out our Brain Hacks series.
            </p>
          </div>
        </div>

      <div className="w-full bg-gray-300">
        <h3 className="text-3xl font-semibold text-black text-center py-10 px-8">Work your way</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 justify-center mt-12 py-12">
          <div className="flex flex-col items-center text-center shadow p-4 bg-white ">
            <img src="./Accenture-Join-our-Team-150x150.png" alt="" className="max-w-full h-auto mt-[-4rem] sm:mt-[-6rem] md:mt-[-8rem]" />
            <h4 className="mt-4 text-xl font-semibold text-black">Join Our Team</h4>
            <p className="text-black font-normal text-left tracking-wide">
              Search open positions that match your skills and interest. We look for passionate, curious, creative and solution-driven team players.
            </p>
          </div>
          <div className="flex flex-col items-center text-center shadow p-4 bg-white">
            <img src="./Accenture-Keep-up-to-Date-150x150.png" alt="" className="max-w-full h-auto mt-[-4rem] sm:mt-[-6rem] md:mt-[-8rem]" />
            <h4 className="mt-4 text-xl font-semibold text-black">Keep Up to Date</h4>
            <p className="text-black font-normal text-left tracking-wide">
              Stay ahead with careers tips, insider perspectives, and industry-leading insights you can put to use today–all from the people who work here.
            </p>
          </div>
          <div className="flex flex-col items-center text-center shadow p-4 bg-white">
            <img src="./Accenture-Stay-Connected-150x150.png" alt="" className="max-w-full h-auto mt-[-4rem] sm:mt-[-6rem] md:mt-[-8rem]" />
            <h4 className="mt-4 text-xl font-semibold text-black">Job Alert Emails</h4>
            <p className="text-black font-normal text-left tracking-wide">
              Personalize your subscription to receive job alerts, latest news and insider tips tailored to your preferences. See what exciting and rewarding opportunities await.
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Page;
