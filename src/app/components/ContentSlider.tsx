import React, { useState, useEffect } from 'react';

interface Content {
  title: string;
  description: string;
}

const CONTENTS: Content[] = [
  {
    title: "Accelerating Time to Value with Arohi Software AI Force",
    description: "GenAI-driven software development and engineering lifecycle management for greater productivity and improved quality"
  },
  {
    title: "Harnessing the Power of AI for Business Growth",
    description: "Empowering businesses with cutting-edge AI technologies for unparalleled growth"
  },
  {
    title: "Innovative AI Solutions for Modern Enterprises",
    description: "Delivering state-of-the-art AI solutions to drive innovation and efficiency"
  }
];

const contentStyles = "space-y-2";
const titleStyles = "text-4xl font-bold";
const descriptionStyles = "text-lg";

const ContentSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % CONTENTS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-transparent text-white p-8 space-y-4">
      <div id="content" className={contentStyles}>
        <h1 className={titleStyles}>{CONTENTS[index].title}</h1>
        <p className={descriptionStyles}>{CONTENTS[index].description}</p>
      </div>
      <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
        Explore our AI Force Solutions →
      </button>
    </div>
  );
};

export default ContentSlider;
