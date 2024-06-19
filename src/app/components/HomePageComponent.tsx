import React from 'react';

const HomePageComponent: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold  text-center mb-6">
        Every day, we embrace change and create value for all our <br />
        stakeholders, in every part of the world.
      </h1>

      <div className="flex flex-wrap lg:justify-around lg:my-20 ">

        <div>
        <img 
          src="https://img.freepik.com/premium-photo/futuristic-virtual-reality-concept-vr-ar-technologies-man-glasses-with-3d-illustration_717906-1286.jpg" 
          alt="Accenture Image" 
          className=" lg:h-[60vh] lg:w-[80vh]"
        />
        </div>

        <div className=" lg:w-[33%] w-96 my-10 lg:mt-36 lg:ml-72">
          <h2 className="text-xl  font-semibold">Arohi Software Elevating Businesses with Expert IT Solutions</h2>
          <p className="mt-2">
          Arohi Software specializes in transformative IT solutions, offering bespoke web development, mobile app creation, and enterprise software services. Our innovative approach and commitment to excellence ensure tailored solutions that enhance efficiency and drive growth for businesses of all sizes. Partner with us for unparalleled digital success.
          </p>
          <a href="#" className="text-blue-500 mt-4 inline-block">Read more</a>
        </div>

      </div>
    </div>
  );
};

export default HomePageComponent;
