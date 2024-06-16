import React from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import images from "../../../public/assets/Invester/images1.jpg";
import PerformanceCard from "../components/PerformanceCard/PerformanceCard";
import InfoCard from "../components/investerCard/InfoCard";
import ImageGrid from "../components/investerCard/newupdate";
const page = () => {
  return (
    <div>
      <div
        className=" absolute inset-0 bg-cover opacity-45 "
        style={{
          backgroundImage: `url(https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak=)`,
        }}
      ></div>
      <div className="relative flex flex-col sm:p-[150px] p-[80px]  h-[97.8vh]">
        <h1
          className="pb-2 font-sans font-medium text-lg text-white"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          WHAT WE DO / INVESTOR RELATIONS
        </h1>
        <hr
          className=" bg-white h-[2px]"
          style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
        />
        <div
          className=" sm:h-[600px]   lg:w-[800px] sm:w-[500px] mt-10 p-8 "
          style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="sm:text-6xl text-3xl font-mono">
            Arohi 360° VALUE
          </h1>
          <p className="sm:pt-14 pt-5 font-normal text-1xl w-[60vw] sm:w-[500px]">
            We define 360° value as delivering the financial business case and
            unique value a client may be seeking, and striving to partner with
            our clients to achieve greater progress on inclusion and diversity,
            reskill and upskill our clients’ employees, help our clients achieve
            their sustainability goals, and create meaningful experiences, both
            with Accenture and for the customers and employees of our clients.
          </p>
          {/* <button className=' bg-white font-bold  text-black rounded-md p-2 mt-[60px]' >Let's Connect</button> */}
        </div>
      </div>
      <div className=" bg-white ">
        <InfoCard />
      </div>

      {/* preformance */}

      <div className="  text-black pt-5 bg-white xl:h-[60vh] h-fit">
        <div className=" w-[79vw] mx-auto  ">
          <h1 className="md:text-4xl text-2xl mb-3 font-san font-bold pt-6 ">
            FY2023 PERFORMANCE
          </h1>

          <div className="flex flex-col lg:flex-row items-center flex-wrap gap-2 mt-10 ">
            <PerformanceCard
              title="Compound annual total return to shareholders over the last 5 fiscal years"
              text="16%"
            />
            <PerformanceCard
              title="Total FY18 revenues, an increase of 10.3% in local currency"
              text="$64.1B"
            />

            <PerformanceCard
              title="FY19 EPS, a 9% increase on an adjusted basis"
              text="$11.67"
            />

            <PerformanceCard
              title="FY18 investment spend on research and development and training"
              text="$2.4B"
            />
            <PerformanceCard
              title="FY18 cash returned to shareholders"
              text="$7.2B"
            />
          </div>
        </div>
      </div>
      {/* overview */}

      <div className="bg-violet-400 text-black w-full p-5 lg:flex">
        <div className=" lg:w-[70%]  lg:py-8 m-auto ">
          <h1 className="font-bold text-2xl lg:text-4xl text-center">
            COMPANY OVERVIEW
          </h1>
          <p className="text-black font-normal  text-justify mt-6">
            Accenture is a leading global professional services company that
            helps the world’s leading businesses, governments and other
            organizations build their digital core, optimize their operations,
            accelerate revenue growth and enhance citizen services - creating
            tangible value at speed and scale. We are a talent- and
            innovation-led company with 742,000 people serving clients in more
            than 120 countries. Technology is at the core of change today, and
            we are one of the world’s leaders in helping drive that change, with
            strong ecosystem relationships. We combine our strength in
            technology and leadership in cloud, data and AI with unmatched
            industry experience, functional expertise and global delivery
            capability. We are uniquely able to deliver tangible outcomes
            because of our broad range of services, solutions and assets across
            Strategy & Consulting, Technology, Operations, Industry X and Song.
            These capabilities, together with our culture of shared success and
            commitment to creating 360° value, enable us to help our clients
            reinvent and build trusted, lasting relationships. We measure our
            success by the 360° value we create for our clients, each other, our
            shareholders, partners and communities. Learn more about how we are
            measuring value in all directions with Accenture’s 360° Value
            Integrated Reporting.
          </p>
          <a href="#"><button className="text-violet-700 font-bold rounded-lg hover:bg-violet-700 hover:text-white my-8 p-2 bg-white" >Expplore The Experience</button></a>
        </div>
        <div className="bg-white p-5 m-12 h-fit lg:w-[25%] w-[60vw] ">
          <h2 className="text-3xl font-extrabold">Stock Price</h2>
          <h6>NYSE:ASW</h6>
          <h1 className="text-5xl font-extrabold ">$120.54</h1>
          <h6>06/15/2024 04:00 PM (20 min delay)</h6>
        </div>
      </div>
      <ImageGrid/>

      <div className="bg-white   text-black lg:h-[50vh]  sm:h-[90vh] w-full py-10">
        <div className="bg-gray-200 text-black">
          <div className="flex justify-around gap-5 m-auto h-fit">
            <div className=" w-1/2 h-fit text-center py-10  ">
              <h1 className="font-bold lg:text-4xl text-md">IR Contacts</h1>
              <h1 className="text-blue-900 font-bold my-2 cursor-pointer ">
                9087907634
              </h1>
              <p className="cursor-pointer text-blue-800 font-bold">
                arohisoftware@gmail.com
              </p>
            </div>
            <div className="w-1/2 sm:w-[40vw] py-10">
              <h1 className="font-bold lg:text-4xl text-md ">
                Register for <br />
                Investor Email Alerts
              </h1>
              <a href="#"><button className="hover:text-violet-700 font-bold rounded-lg bg-violet-700 text-white m-2 p-2 hover:bg-white" >SignUp</button></a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
