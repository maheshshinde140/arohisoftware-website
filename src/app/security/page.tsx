import React from "react";
import SecurityCard from "@/app/components/SecurityCard";
import Footer from "@/app/components/Footer";

const page = () => {
  return (
    <div>
      <div className="bg-black h-24"></div>

      <div
        className="sm:h-[85vh] h-52 w-full pt-7"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/03/58/10/87/360_F_358108785_rNJtmort9m65M3pft5swd7lnKJcTCB8u.jpg')",
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

      <div className="bg-white sm:h-[70vh] w-full py-10">
        <div className="container sm:flex justify-around justify-items-center items-center mt-5">
          <div className="text-black">
            <div className="lg:container">
              <p className="font-normal text-lg text-justify">
                Effective security and compliance are crucial for safeguarding
                business assets, customer data, and reputation. Despite the
                relentless stream of attacks, Xoriant&apos;s extensive security
                expertise and continuous adoption of innovative tools empower us
                to shield your assets—be it legacy systems, cloud-native
                infrastructure, or mobile apps. Count on us to eliminate both
                existing and potential vulnerabilities, enabling your business
                to stay secure.
              </p>
            </div>
          </div>

          <div
            className="relative sm:h-[50vh] h-[40vh] mt-5 w-full"
            style={{
              backgroundImage:
                "url('https://media.istockphoto.com/id/1430232403/photo/cybersecurity-data-protection-digital-technology-concept-internet-network-connection-icons.jpg?s=612x612&w=0&k=20&c=-fhyHDA2mmWyTYjcANIxm2POetmVxtLlSZuu7jPtO1Q=')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="sm:h-[70vh] w-full bg-white text-black">
        <div className="container text-center">
          <p className="font-bold text-xl sm:text-5xl py-4">
            Differentiators of Advanced Cybersecurity
          </p>
          <div className="container mt-3 sm:flex justify-around">
            <div className="sm:w-[15vw] bg-gray-200 rounded-lg cursor-pointer">
              <div
                className="h-[10vh] w-24 ml-3 mt-3"
                style={{
                  backgroundImage:
                    "url('https://www.xoriant.com/cdn/ff/1-2a7dHkqwKpuu1b7Ar5go9mBq3LuUShw1JwUqpnums/1713168911/public/styles/webp/public/2023-08/01-Leverage-alliances.png.webp?itok=EjwDOShc')",
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
                  backgroundImage:
                    "url('https://www.xoriant.com/cdn/ff/c90A1IazLkijzEVc6adgd2SsFUdQr3zNIfZubez2TV4/1713168911/public/styles/webp/public/2023-08/02-Achieve-over.png.webp?itok=-M65aItf')",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
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
                  backgroundImage:
                    "url('https://www.xoriant.com/cdn/ff/6lzM9IdiEZfT5k2nVKWgpX6N3gzf5GYfOJEQqOCk1XI/1713168911/public/styles/webp/public/2023-08/03-Fortify-security.png.webp?itok=NrQAs7Bg')",
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

            <div className=" sm:w-[15vw] bg-gray-200 rounded-lg cursor-pointer">
              <div
                className="h-[10vh] w-24 ml-3 mt-3"
                style={{
                  backgroundImage:
                    "url('https://www.xoriant.com/cdn/ff/ZaNfY_tr0rSf5Dciv57w6BkrCB6OCoP6rl-tuYqeHDs/1713168911/public/styles/webp/public/2023-08/04-Evaluate-security.png.webp?itok=B3CieO5h')",
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

      <div className="bg-white w-full pt-5">
        <div className="container sm:w-8/12 text-black">
          <p className="font-bold text-lg">All That We Do</p>
          <p className="font-bold text-xl sm:text-4xl mt-3">
            Milestones to Cement Enterprise Cyber Security
          </p>
          <div className="mt-5 flex justify-around flex-wrap h-50">
            <SecurityCard
              images="https://www.xoriant.com/cdn/ff/tfQmLKCNCpNzud20vm4FyLBTJS3PJMKLCs8-z0-n9Y0/1713168911/public/styles/webp/public/2023-08/Security-1.png.webp?itok=z_slh30l"
              altText="this is img"
              text="Implement a strategic Security framework through a thorough security posture analysis, roadmap development, policy implementation, and BCP development."
              title="Enterprise Security Strategy"
              width={100}
              height={100}
            />

            <SecurityCard
              images="https://www.xoriant.com/cdn/ff/tfQmLKCNCpNzud20vm4FyLBTJS3PJMKLCs8-z0-n9Y0/1713168911/public/styles/webp/public/2023-08/Security-1.png.webp?itok=z_slh30l"
              altText="this is img"
              text="Implement a strategic Security framework through a thorough security posture analysis, roadmap development, policy implementation, and BCP development."
              title="Enterprise Security Strategy"
              width={100}
              height={100}
            
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
