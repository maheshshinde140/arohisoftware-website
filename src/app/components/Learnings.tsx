import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#vision" className="hover:underline">Our Vision</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#trending" className="hover:underline">What's Trending</a></li>
          <li><a href="#leaders" className="hover:underline">Our Leaders</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
