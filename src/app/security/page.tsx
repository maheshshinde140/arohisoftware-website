"use client"

import SecurityCard from "@/app/components/SecurityCard";
import Footer from "@/app/components/Footer";
import CyberSecurityCard from "../components/CyberSecurityCard";
import Image from "next/image";
import Partners from "../components/Partners";
import CareersPage from "../components/CareersComponent";
// Import your local images
import bgImage from "./../../../public/assets/security/360_F_358108785_rNJtmort9m65M3pft5swd7lnKJcTCB8u.jpg";
import insightImage from "./../../../public/assets/security/istockphoto-1430232403-612x612.jpg";
import allianceImage from "./../../../public/assets/security/01-Leverage-alliances.png.webp";
import zeroTrustImage from "./../../../public/assets/security/02-Achieve-over.png.webp";
import fortifySecurityImage from "./../../../public/assets/security/03-Fortify-security.png.webp";
import complianceImage from "./../../../public/assets/security/04-Evaluate-security.png.webp";


const page = () => {
  return (
    <div>
      <div className="bg-black h-24"></div>

      <div
        className="sm:h-[85vh] h-52 w-full pt-7"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="container lg:mx-10 mr-10 font-bold text-white-100 border-b-2 border-b-slate-300 py-3">
            <p>WHAT WE DO</p>
          </div>
          <div className="container mt-6">
            <p className="font-normal text-lg sm:text-6xl">
              Cyber Security Services
              <br />
              through technology.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white sm:h-[70vh] w-full py-10 ">
        <div className="container sm:flex justify-around justify-items-center items-center mt-5">
          <CyberSecurityCard /> 
        </div>
      </div>

      <div className="sm:h-[70vh] w-full bg-white lg:pt-56 text-black">
        <div className="container text-center">
          <p className="font-bold text-xl sm:text-5xl py-4">
            Differentiators of Advanced Cybersecurity
          </p>
          <div className="container mt-3 sm:flex justify-around">
            <div className="sm:w-[15vw] bg-gray-200 rounded-lg cursor-pointer">
              <div
                className="h-[10vh] w-24 ml-3 mt-3"
                style={{
                  backgroundImage: `url(${allianceImage.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              <div className="mt-5 text-left mx-3">
                Leverage alliances and partners to meet compliance, utilizing
                global security standards for comprehensive solutions.
              </div>
            </div>

            <div className="sm:w-[15vw] bg-gray-200 rounded-lg cursor-pointer">
              <div
                className="h-[10vh] w-24 ml-3 mt-3"
                style={{
                  backgroundImage: `url(${zeroTrustImage.src})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              <div className="mt-5 text-left mx-3">
                Fortify security with Zero Trust cloud services, ensuring
                comprehensive and resilient protection strategies.
              </div>
            </div>

            <div className="sm:w-[15vw] bg-gray-200 rounded-lg cursor-pointer">
              <div
                className="h-[10vh] w-24 ml-3 mt-3"
                style={{
                  backgroundImage: `url(${fortifySecurityImage.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              <div className="mt-5 text-left mx-3">
                Leverage alliances and partners to meet compliance, utilizing
                global security standards for comprehensive solutions.
              </div>
            </div>

            <div className="sm:w-[15vw] bg-gray-200 rounded-lg cursor-pointer">
              <div
                className="h-[10vh] w-24 ml-3 mt-3"
                style={{
                  backgroundImage: `url(${complianceImage.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              <div className="mt-5 text-left mx-3">
                Leverage alliances and partners to meet compliance, utilizing
                global security standards for comprehensive solutions.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full lg:pt-48">
        <div className="container sm:w-8/12 text-black">
          <p className="font-bold text-lg">All That We Do</p>
          <p className="font-bold text-xl sm:text-4xl mt-3">
            Milestones to Cement Enterprise Cyber Security
          </p>
          <div className="mt-5 flex justify-around flex-wrap h-50">
            <SecurityCard
              images={allianceImage.src}
              altText="this is img"
              text="Implement a strategic Security framework through a thorough security posture analysis, roadmap development, policy implementation, and BCP development."
              title="Enterprise Security Strategy"
              width={100}
              height={100}
            />

            <SecurityCard
              images={allianceImage.src}
              altText="this is img"
              text="Implement a strategic Security framework through a thorough security posture analysis, roadmap development, policy implementation, and BCP development."
              title="Enterprise Security Strategy"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className="sm:h-[70vh] w-full bg-white text-black">
        <div className="w-full max-w-screen-lg bg-gray-100 p-4 rounded-lg shadow-2xl transform transition-transform hover:scale-105 mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-4">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Featured Insight</h2>
              <p className="text-gray-700 mb-4">
                <strong>IDC Spotlight:</strong> Foundational Layers for Security Shifting Left and Shielding Right
              </p>
              <p className="text-blue-600 font-bold cursor-pointer">
                Let's Find Out
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <img
                className="w-full h-40 md:h-64 rounded-lg object-cover"
                src={insightImage.src}
                alt="Featured Insight"
              />
            </div>
          </div>
        </div>
      
      </div>
        <Partners/>
        <CareersPage/>
      <Footer />
    </div>
  );
};

export default page;
