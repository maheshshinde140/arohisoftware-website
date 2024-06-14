import Link from "next/link";
import Image from "next/image";
import { Vortex } from "./ui/vortex";
import logo from "../../public/logo.png";
import { Spotlight } from "./ui/Spotlight";
import { Meteors } from "./ui/meteors";
import { FlipWords } from "./ui/flip-words";
import { BackgroundBeams } from "./ui/background-beams";
import ContentSlider from "./ContentSlider";
// import { Button } from "./ui/moving-border";

const words = ["INNOVATE", "INTEGRATE", "INSPIRE"];

function HeroSection() {
  return (
    <div className="bg-black relative text-purple flex items-center justify-center h-[600px] w-screen">
      {/* Render the Vortex component as the background */}
      <Vortex
        className="absolute inset-0 z-0"
        backgroundColor="black"
        // Set the opacity of the Vortex component to 0.2 (adjust as needed)
      />
      <div className="absolute inset-0 flex  items-center justify-center z-10 text-center text-white px-4">
        <div className=" ">
          {/* <Image
            src={logo}
            alt="image"
            className="z- 10  flex items-center h-[600px] w-[600px] justify-center opacity-25 to-transparent"
          /> */}
          <div className=" relative flex transform px-[30px] items-center lg:flex-row lg:flex-nowrap flex-wrap sm:flex-col h-screen w-screen bg-black bg-transparent ">
            <div className=" lg:w-[900px] lg:h-[300px] flex lg:px-[50px]  flex-col justify-center items-center">
              <div className="lg:text-8xl text-4xl transition-transform mx-auto text-nowrap font-bold text-neutral-600 dark:text-neutral-400">
                Let&apos;s
                <FlipWords words={words} /> <br />
              </div>
              <code className=" font-semibold text-green-600 text-xl">
                welcome to AROHI SOFTWARE AND SOLUTIONS
              </code>
            </div>

            <div className=" hidden lg:h-[400px]  lg:w-[600px] md:h-[90px] sm:w-[100px] p-5">
                <ContentSlider />
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default HeroSection;
