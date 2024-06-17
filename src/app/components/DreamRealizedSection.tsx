import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DreamRealizedSection = () => {
  const successStories = [
    {
      image: "./xbg1.png",
      title: "Success Story 1",
      description:
        "Description of success story one goes here. Highlighting top-notch solutions provided.",
    },
    {
      image: "./x.bg2.png",
      title: "Success Story 2",
      description:
        "Description of success story two goes here. Showcasing innovative solutions delivered.",
    },
    {
      image: "./xbg3.png",
      title: "Success Story 3",
      description:
        "Description of success story three goes here. Demonstrating excellence in every service.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4" style={{ maxWidth: "70vw" }}>
        <h2
          className="text-4xl font-semibold mb-6 text-center text-green-600"
          style={{ backgroundImage: "url('./Bottom Wave Desktop.png.webp')" }}
        >
          D.R.E.A.M Realized
        </h2>
        <p className="text-gray-600 mb-8 text-center">Success Stories</p>
        <div className="flex justify-center items-center">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            className="w-full"
          >
            {successStories.map((story, index) => (
              <div key={index} className="grid md:grid-cols-2 items-center">
                <div className="w-full h-full md:col-span-1">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover rounded-md"
                    style={{height:"40vh"}}
                    
                  />
                </div>
                <div className="flex flex-col justify-center items-center bg-white bg-opacity-90 p-6 rounded-md md:col-span-1">
                  <h3 className="text-2xl font-semibold  text-teal-900">
                    {story.title}
                  </h3>
                  <p className="text-gray-600">{story.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default DreamRealizedSection;
