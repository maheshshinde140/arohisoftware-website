
import React from 'react';

const Leadership = () => {
  const leaders = [
    { name: 'Julie Sweet', title: 'Chair & CEO' },
    { name: 'Muqsit Ashraf', title: 'Lead - Strategy' },
    { name: 'Jack Azagury', title: 'Group Chief Executive – Strategy & Consulting' },
    { name: 'Arjun Bedi', title: 'Lead - Diamond Client Leadership Council' },
    { name: 'Venkata "Murthy" Renduchintala', title: 'Leader' },
    { name: 'Arun Sarin', title: 'Leader' },
    { name: 'Tracey T. Travis', title: 'Leader' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Leadership</h1>
        <p className="text-lg text-gray-600">Our executive leadership team averages 24 years of experience with ArohiSoftware.</p>
      </header>
      <section>
        <h2 className="text-2xl font-semibold mb-6">Our leaders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
              <p className="text-gray-600">{leader.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="text-center my-12">
        <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">Contact Us</button>
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
    </div>
  );
};

export default Leadership;
