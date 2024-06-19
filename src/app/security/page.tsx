// "use client"
// <<<<<<< HEAD

// =======
// import React from "react";
// >>>>>>> eb13b2a1d3cdf1c537645f91d33f6d1eb02c6ddb
// import SecurityCard from "@/app/components/SecurityCard";
// import Footer from "@/app/components/Footer";
// import CyberSecurityCard from "../components/CyberSecurityCard";
// import Image from "next/image";
// <<<<<<< HEAD
// import Partners from "../components/Partners";
// import CareersPage from "../components/CareersComponent";
// // Import your local images
// import bgImage from "./../../../public/assets/security/360_F_358108785_rNJtmort9m65M3pft5swd7lnKJcTCB8u.jpg";
// import insightImage from "./../../../public/assets/security/istockphoto-1430232403-612x612.jpg";
// import allianceImage from "./../../../public/assets/security/01-Leverage-alliances.png.webp";
// import zeroTrustImage from "./../../../public/assets/security/02-Achieve-over.png.webp";
// import fortifySecurityImage from "./../../../public/assets/security/03-Fortify-security.png.webp";
// import complianceImage from "./../../../public/assets/security/04-Evaluate-security.png.webp";
// =======
// import Feedform from "../components/Feedform";

// >>>>>>> eb13b2a1d3cdf1c537645f91d33f6d1eb02c6ddb


// const page = () => {
//   return (
//     <div className="overflow-x-hidden">
//       <div className="bg-black h-24"></div>

//       <div
//         className="sm:h-[85vh] h-52 w-full pt-7 relative"
//         style={{
// <<<<<<< HEAD
//           backgroundImage: `url(${bgImage.src})`,
// =======
//           backgroundImage:
//             "url('/sbg1.png')",
// >>>>>>> eb13b2a1d3cdf1c537645f91d33f6d1eb02c6ddb
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="container mx-auto relative z-10 px-4">
//           <div className="lg:mx-10 mr-10 font-bold text-white border-b-2 border-b-slate-300 py-3">
//             <p>WHAT WE DO</p>
//           </div>
//           <div className="mt-6">
//             <p className="font-normal text-lg sm:text-6xl text-white">
//               Cyber Security Services
//               <br />
//               through technology.
//             </p>
//           </div>
//         </div>
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//       </div>

// <<<<<<< HEAD
//       <div className="bg-white sm:h-[70vh] w-full py-10 ">
//         <div className="container sm:flex justify-around justify-items-center items-center mt-5">
//           <CyberSecurityCard /> 
// =======
//       <div className="bg-white sm:h-[70vh] w-full py-10">
//         <div className="container mx-auto sm:flex justify-around items-center mt-5 px-4">
//           <CyberSecurityCard />
// >>>>>>> eb13b2a1d3cdf1c537645f91d33f6d1eb02c6ddb
//         </div>
//       </div>

//       <div className="sm:h-[70vh] w-full bg-white lg:pt-56 text-black">
// <<<<<<< HEAD
//         <div className="container text-center">
// =======
//         <div className="container text-center mx-auto px-4">
// >>>>>>> eb13b2a1d3cdf1c537645f91d33f6d1eb02c6ddb
//           <p className="font-bold text-xl sm:text-5xl py-4">
//             Differentiators of Advanced Cybersecurity
//           </p>
//           <div className="mt-3 sm:flex justify-around space-y-6 sm:space-y-0">
//             <div className="sm:w-[15vw] bg-gray-200 rounded-lg cursor-pointer p-4 hover:shadow-lg transform transition-transform duration-300">
//               <div
//                 className="h-[10vh] w-24 mx-auto hover:translate-x-2 transition-transform duration-300"
//                 style={{
//                   backgroundImage: `url(${allianceImage.src})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   backgroundRepeat: "no-repeat",
//                 }}
//               ></div>
//               <div className="mt-5 text-left mx-3">
//                 Leverage alliances and partners to meet compliance, utilizing
//                 global security standards for comprehensive solutions.
//               </div>
//             </div>

//             <div className="sm:w-[15vw] bg-gray-200 rounded-lg cursor-pointer p-4 hover:shadow-lg transform transition-transform duration-300">
//               <div
//                 className="h-[10vh] w-24 mx-auto hover:translate-x-2 transition-transform duration-300"
//                 style={{
//                   backgroundImage: `url(${zeroTrustImage.src})`,
//                   backgroundPosition: "center",
//                   backgroundSize: "cover",
//                   backgroundRepeat: "no-repeat",
//                 }}
//               ></div>
//               <div className="mt-5 text-left mx-3">
//                 Fortify security with Zero Trust cloud services, ensuring
//                 comprehensive and resilient protection strategies.
//               </div>
//             </div>

//             <div className="sm:w-[15vw] bg-gray-200 rounded-lg cursor-pointer p-4 hover:shadow-lg transform transition-transform duration-300">
//               <div
//                 className="h-[10vh] w-24 mx-auto hover:translate-x-2 transition-transform duration-300"
//                 style={{
//                   backgroundImage: `url(${fortifySecurityImage.src})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   backgroundRepeat: "no-repeat",
//                 }}
//               ></div>
//               <div className="mt-5 text-left mx-3">
//                 Leverage alliances and partners to meet compliance, utilizing
//                 global security standards for comprehensive solutions.
//               </div>
//             </div>

// <<<<<<< HEAD
//             <div className="sm:w-[15vw] bg-gray-200 rounded-lg cursor-pointer">
// =======
//             <div className="sm:w-[15vw] bg-gray-200 rounded-lg cursor-pointer p-4 hover:shadow-lg transform transition-transform duration-300">
// >>>>>>> eb13b2a1d3cdf1c537645f91d33f6d1eb02c6ddb
//               <div
//                 className="h-[10vh] w-24 mx-auto hover:translate-x-2 transition-transform duration-300"
//                 style={{
//                   backgroundImage: `url(${complianceImage.src})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   backgroundRepeat: "no-repeat",
//                 }}
//               ></div>
//               <div className="mt-5 text-left mx-3">
//                 Leverage alliances and partners to meet compliance, utilizing
//                 global security standards for comprehensive solutions.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

// <<<<<<< HEAD
//       <div className="bg-white w-full lg:pt-48">
//         <div className="container sm:w-8/12 text-black">
// =======
//       <div className="bg-white w-full lg:pt-48 py-10">
//         <div className="container sm:w-8/12 text-black mx-auto text-center px-4 mt-10">
// >>>>>>> eb13b2a1d3cdf1c537645f91d33f6d1eb02c6ddb
//           <p className="font-bold text-lg">All That We Do</p>
//           <p className="font-bold text-xl sm:text-4xl mt-3">
//             Milestones to Cement Enterprise Cyber Security
//           </p>
//           <div className="mt-20 flex justify-between flex-wrap ">
//             <SecurityCard
// <<<<<<< HEAD
//               images={allianceImage.src}
// =======
//               images="/s1.png"
// >>>>>>> eb13b2a1d3cdf1c537645f91d33f6d1eb02c6ddb
//               altText="this is img"
//               text="Implement a strategic Security framework through a thorough security posture analysis, roadmap development, policy implementation, and BCP development."
//               title="Enterprise Security Strategy"
//               width={80}
//               height={80}
//             />

//             <SecurityCard
// <<<<<<< HEAD
//               images={allianceImage.src}
//               altText="this is img"
//               text="Implement a strategic Security framework through a thorough security posture analysis, roadmap development, policy implementation, and BCP development."
//               title="Enterprise Security Strategy"
//               width={100}
//               height={100}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="sm:h-[70vh] w-full bg-white text-black">
//         <div className="w-full max-w-screen-lg bg-gray-100 p-4 rounded-lg shadow-2xl transform transition-transform hover:scale-105 mx-auto">
//           <div className="flex flex-col md:flex-row">
//             <div className="flex-1 p-4">
//               <h2 className="text-3xl font-bold mb-4 text-gray-800">Featured Insight</h2>
//               <p className="text-gray-700 mb-4">
//                 <strong>IDC Spotlight:</strong> Foundational Layers for Security Shifting Left and Shielding Right
//               </p>
//               <p className="text-blue-600 font-bold cursor-pointer">
//                 Let's Find Out
//               </p>
//             </div>
//             <div className="flex-1 flex justify-center items-center">
//               <img
//                 className="w-full h-40 md:h-64 rounded-lg object-cover"
//                 src={insightImage.src}
//                 alt="Featured Insight"
//               />
//             </div>
//           </div>
//         </div>
      
//       </div>
//         <Partners/>
//         <CareersPage/>
// =======
//               images="/s2.png"
//               altText="this is img"
//               text="Leverage our vast experience in threat modelling, dynamic code assessments, VAPT, DLP, and CASB solutions for protection of your applications and data."
//               title="Data and Application Security"
//               width={80}
//               height={80}
//             />

//             <SecurityCard
//               images="/s3.png"
//               altText="this is img"
//               text="Deploy enhanced security mechanisms and expert teams for early threat detection, effective incident management, endpoint protection, patch management, and security awareness training."
//               title="Managed Security Services"
//               width={80}
//               height={80}
//             />
//             <SecurityCard
//               images="/s4.png"
//               altText="this is img"
//               text="Deliver end-to-end IAM from assessment to strategic roadmaps and execution. Xoriant provides comprehensive solutions in multi-factor authentication, authorization, identity protection, SOC2, and privilege access management"
//               title="Identity and Access Management"
//               width={80}
//               height={80}
//             />
//             <SecurityCard
//               images="/s5.png"
//               altText="this is img"
//               text="Automate implementation of security policies to eliminate manual interventions and enforce robust security through predefined configurations."
//               title="Zero Triust Security Implementation "
//               width={80}
//               height={80}
//             />
//             <SecurityCard
//               images="/s6.png"
//               altText="this is img"
//               text="Expertly Conduct risk assessment, implement security controls, ensure audit readiness, automate CIS benchmark assessment for compliance with ISO 27001, HIPAA and other compliance standards."
//               title="Risk And Compliance"
//               width={80}
//               height={80}
//             />
//             <SecurityCard
//               images="/s7.png"
//               altText="this is img"
//               text="Enhance threat detection and response with Xoriant's unified Security Operations Center, bolstering cybersecurity across technologies and compliance"
//               title="Security Operation Center"
//               width={80}
//               height={80}
//             />
//           </div>
//           <div className="text-left">
//   <h4 className="text-green-600 text-l">Accelators In The House</h4>
//   <h2 className="text-black-600 text-3xl">Frameworks for Robust Managed IT Security Services</h2>
  
//   <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//     <div className="card bg-pink-700 p-6 rounded-lg shadow-md transition-all duration-500">
//       <h3 className="text-xl font-bold mb-4 text-white">Security as Code</h3>
//       <p className="text-gray-100">involves embedding security practices within the software development lifecycle using code. </p>
//     </div>
//     <div className="card bg-green-500 p-6 rounded-lg shadow-md transition-all duration-500">
//       <h3 className="text-xl font-bold mb-4 text-white">Securing SDLC in Cloud</h3>
//       <p className="text-gray-100">Securing the Software Development Life Cycle (SDLC) in a cloud environment is crucial to </p>
//     </div>
//     <div className="card bg-sky-500 p-6 rounded-lg shadow-md transition-all duration-500">
//       <h3 className="text-xl font-bold mb-4 text-white">Roadmap Zero-Trust Access management</h3>
//       <p className="text-gray-100">Implementing a Zero Trust Access Management (ZTAM) roadmap involves a strategic  </p>
//     </div>
//     <div className="card bg-blue-900 text-white p-6 rounded-lg shadow-md transition-all duration-500">
//       <h3 className="text-xl font-bold mb-4 text-white">Learning Solutions</h3>
//       <p className="text-gray-300">When it comes to learning solutions, especially in the context of professional development or organizational training,

// </p>
//     </div>
//   </div>
// </div>

//         </div>
        
       
//       </div>
//       <Feedform title=""/>
// >>>>>>> eb13b2a1d3cdf1c537645f91d33f6d1eb02c6ddb
//       <Footer />


//       <style jsx>{`
//         .card {
//           position: relative;
//           overflow: hidden;
//         }

//         .card::before {
//           content: '';
//           position: absolute;
//           left: 0;
//           bottom: 0;
//           width: 100%;
//           height: 0;
//           background: rgba(0, 128, 0, 0.9); /* Green overlay */
//           z-index: 1;
//           transition: height 0.5s;
//         }

//         .card:hover::before {
//           height: 100%;
//         }

//         .card h3,
//         .card p {
//           position: relative;
//           z-index: 2;
//         }
//       `}</style>

      
//     </div>
//   );
// };

// export default page;

