import Feedform from '@/app/components/Feedform';
import React from 'react';
import Footer from '@/app/components/Footer';

const Leadership = () => {
  const leaders = [
    { name: 'Sanket Ghodake', title: 'Chair & CEO', image: 'https://assets.lummi.ai/assets/QmUCnqpmmzbf83yWn2y7JXD5KKR7snJNZeQ2HFyoEFdg4H?auto=format&w=1500' },
    { name: 'Poonam Digole', title: 'Project Manager', image: 'https://assets.lummi.ai/assets/QmWJZv45tQLv5tSUGQczwVAm9BQ9gR342HfTbiESiPQrxP?auto=format&w=1500' },
    { name: 'Vivek Shejole', title: 'Lead - Strategy', image: 'https://assets.lummi.ai/assets/QmPd9RX1fYobqxCP7Ekjrmc4w6Xkxm7Mmda4vqThnnV8as?auto=format&w=1500' },
    { name: 'Pooja', title: 'Team Leader', image: 'https://assets.lummi.ai/assets/QmRS65cvMHZeP3N7dkN31KwSdV7QhgVbb5ZreL9xbX72tH?auto=format&w=1500' },
  ];

  const ceo = leaders[0];
  const otherLeaders = leaders.slice(1);

  return (
    <div>
      <div className='relative flex justify-center items-center h-[75vh]'>
        <img className='w-96 object-cover' src='./leadreships.png' alt='Leadership Background Image' />
        <h1 className='absolute text-center lg:mt-[500px] text-4xl sm:text-6xl md:text-8xl lg:text-[50px] px-2 font-semibold border bg-gradient-to-br from-violet-400/20 to-purple-500/20 backdrop-blur-xl border-r-[6px] sm:border-r-[8px] md:border-r-[10px] lg:border-r-[12px] border-b-[6px] sm:border-b-[8px] md:border-b-[10px] lg:border-b-[12px] text-white'>
           Our Leaders
        </h1>
      </div>

      <div className="container max-w-full lg:max-w-[900px] text-center mt-12 mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <p className="text-lg text-gray-600"></p>
        </header>
        <section>
          <div className="grid grid-cols-3 mt-12">
            <div className="group bg-white overflow-hidden transition-all mt-12 relative shadow-md p-0 text-center mx-auto">
              <img src={ceo.image} className='p-0 grayscale group-hover:grayscale-0 transition-all group-hover:scale-105 h-[360px] w-full ' />
              <div className='absolute hidden group-hover:transition-all group-hover:block pt-1 w-full h-24 pl-4 bottom-0 pb-6 bg-white/60 backdrop-blur-lg'>
                <h3 className="text-left text-black text-xl font-semibold">{ceo.name}</h3>
                <p className="text-left text-gray-600">{ceo.title}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {otherLeaders.map((leader, index) => (
              <div key={index} className="group bg-white overflow-hidden transition-all mt-12 relative shadow-md p-0 text-center">
                <img src={leader.image} className='p-0 grayscale group-hover:grayscale-0 transition-all group-hover:scale-105 h-[360px] w-full' />
                <div className='absolute hidden group-hover:transition-all group-hover:block pt-1 w-full h-24 pl-4 bottom-0 pb-6 bg-white/60 backdrop-blur-lg'>
                  <h3 className="text-left text-black text-xl font-semibold">{leader.name}</h3>
                  <p className="text-left text-gray-600">{leader.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>


        
     <Footer/>
    </div>
  );
};

export default Leadership;
