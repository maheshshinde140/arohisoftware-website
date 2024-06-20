
import Feedform from '@/app/components/Feedform';
import React from 'react';

const Leadership = () => {
  const leaders = [
    { name: 'Julie Sweet', title: 'Chair & CEO', image: 'https://assets.lummi.ai/assets/QmUCnqpmmzbf83yWn2y7JXD5KKR7snJNZeQ2HFyoEFdg4H?auto=format&w=1500' },
    { name: 'Muqsit Ashraf', title: 'Lead - Strategy', image: 'https://assets.lummi.ai/assets/QmWJZv45tQLv5tSUGQczwVAm9BQ9gR342HfTbiESiPQrxP?auto=format&w=1500' },
    { name: 'Jack Azagury', title: 'Group Chief Executive – Strategy & Consulting', image: 'https://assets.lummi.ai/assets/QmPd9RX1fYobqxCP7Ekjrmc4w6Xkxm7Mmda4vqThnnV8as?auto=format&w=1500' },
    { name: 'Komal Bedi', title: 'Lead - Diamond Client Leadership Council', image: 'https://assets.lummi.ai/assets/QmRS65cvMHZeP3N7dkN31KwSdV7QhgVbb5ZreL9xbX72tH?auto=format&w=1500' },
    { name: 'Venkata Murthy Renduchintala', title: 'Leader', image: 'https://assets.lummi.ai/assets/Qmdz6yNiH5vgoKB5geofjqr6wtrQxwrJpYQSPph3GYBKuR?auto=format&w=1500' },
    { name: 'Arun Sarin', title: 'Leader', image: 'https://assets.lummi.ai/assets/QmRjs9qv8XBDBeLz5CsdPnNxnKP7ab4XPbqHHfyti94m3c?auto=format&w=1500' },
    { name: 'Tracey T. Travis', title: 'Leader', image: 'https://assets.lummi.ai/assets/QmW8UTmZkK2PxUjXjL67pdq3ztteBvVCbi7ZZK3Ho5EM3x?auto=format&w=1500' },
  ];

  return (
    <div>
      <div className='relative'>
        <img className='w-full h-screen object-cover' src='https://www.sienaheights.edu/wp-content/uploads/Leadership-team.jpg' alt='Leadership Background Image' />
        <h1 className='absolute top-1/3 left-4 sm:left-12 md:left-24 text-4xl sm:text-6xl md:text-8xl lg:text-[100px] px-2 font-semibold border bg-gradient-to-br from-violet-400/20 to-purple-500/20 backdrop-blur-xl border-r-[6px] sm:border-r-[8px] md:border-r-[10px] lg:border-r-[12px] border-b-[6px] sm:border-b-[8px] md:border-b-[10px] lg:border-b-[12px] text-black'>
          Leadership
        </h1>
      </div>



    

      <div className="container max-w-full lg:max-w-[900px] text-center mt-12 mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <p className="text-lg text-gray-600">Our executive leadership team averages 24 years of experience with ArohiSoftware.</p>
        </header>
        <section>
          <h2 className="text-3xl font-semibold mb-6">Our leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((leader, index) => (
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

      <section >
        <section className="text-center my-12">
          <p className=" w-fit mx-auto  text-white  py-2 px-4 rounded-full my-12 text-4xl ">Contact Us</p>
          <Feedform title="" />
        </section>

        <section className=''>

        </section>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto text-center">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Visit our Subscription and Preference Center</h3>
              <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200">Subscribe</button>
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="hover:underline">ABOUT US</a>
              <a href="#" className="hover:underline">CONTACT US</a>
              <a href="#" className="hover:underline">CAREERS</a>
              <a href="#" className="hover:underline">LOCATIONS</a>
            </div>
            <div className="flex justify-center space-x-4 text-sm">
              <a href="#" className="hover:underline">Privacy Statement</a>
              <a href="#" className="hover:underline">Terms & Conditions</a>
              <a href="#" className="hover:underline">Cookie Policy/Settings</a>
              <a href="#" className="hover:underline">Accessibility Statement</a>
              <a href="#" className="hover:underline">Sitemap</a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Leadership;
