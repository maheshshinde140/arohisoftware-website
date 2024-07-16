"use client";
import React from 'react';

const Leadership = () => {
  const leaders = [
    {
      name: 'Sanket Ghodake',
      title: 'Founder & CEO',
      image: '/assets/Leaders/sanketsir.jpg',
      bio: 'Sanket Ghodake is the Founder and CEO of Arohi Software. Founded in 2020, Arohi Software has grown under his leadership to become a prominent name in software development, known for its innovative solutions and customer-centric approach.',
    },
    {
      name: 'Poonam Digole',
      title: 'Project Manager',
      image: '/assets/Leaders/poonam.jpg',
    },
    {
      name: 'Vivek Shejole',
      title: 'Lead - Strategy',
      image: '/assets/Leaders/vivek.jpeg',
    },
  ];

  const ceo = leaders[0];
  const otherLeaders = leaders.slice(1);

  return (
    <div>
      <div className='relative flex justify-center items-center h-[75vh]'>
        <img
          className='w-96 object-cover'
          src='./leadreships.png'
          alt='Leadership Background Image'
        />
        <h1 className='absolute text-center lg:mt-[500px] text-4xl sm:text-6xl md:text-8xl lg:text-[50px] px-2 font-semibold border bg-gradient-to-br from-violet-400/20 to-purple-500/20 backdrop-blur-xl border-r-[6px] sm:border-r-[8px] md:border-r-[10px] lg:border-r-[12px] border-b-[6px] sm:border-b-[8px] md:border-b-[10px] lg:border-b-[12px] text-white'>
          Our Founder
        </h1>
      </div>

      <div className="container max-w-full lg:max-w-[900px] text-center mt-12 mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <p className="text-lg text-gray-200"></p>
        </header>
        
        <section className="mb-12 flex flex-col lg:flex-row-reverse items-center">
          <img
            src={ceo.image}
            className="lg:w-1/3 p-4 h-auto w-full object-cover rounded-lg"
            alt="CEO"
          />
          <div className="flex flex-col justify-center p-4 lg:w-2/3 text-left">
            <h3 className="text-white text-3xl font-semibold mb-4">
              {ceo.name}
            </h3>
            <p className="text-blue-400 font-semibold text-xl mb-2">{ceo.title}</p>
            <p className="mt-4 text-gray-300">{ceo.bio}</p>
            <p className="mt-4 text-gray-300">Under his leadership, Arohi Software has:</p>
            <ul className="mt-2 text-gray-300 list-disc text-xm list-inside">
              <li>Expanded its service offerings across multiple industries.</li>
              <li>Established a strong presence in the software development market.</li>
              <li>Achieved significant milestones in customer satisfaction.</li>
            </ul>
          </div>
        </section>


        <h2 className="text-5xl font-semibold text-white mb-6 ">Our Leaders</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
          {otherLeaders.map((leader, index) => (
            <div
              key={index}
              className="group bg-white overflow-hidden transition-all mt-12 relative shadow-md p-0 text-center mx-auto"
            >
              <img
                src={leader.image}
                className="p-0 grayscale group-hover:grayscale-0 transition-all group-hover:scale-105 h-[360px] w-full"
                alt={leader.name}
              />
              <div className="absolute hidden group-hover:transition-all group-hover:block pt-1 w-full h-24 pl-4 bottom-0 pb-6 bg-white/60 backdrop-blur-lg">
                <h3 className="text-left text-black text-xl font-semibold">
                  {leader.name}
                </h3>
                <p className="text-left text-gray-600">{leader.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;