import React from "react";
import Image from "next/image";
import "animate.css";
import "./WorkCard.css";

const WorkCard = ({ images, altText, text, title }) => {
  return (
    <div
      className="card md:pt-[1rem] pt-[10rem]"
      style={{
        backgroundImage: `url(${images})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card-content h-[123%]">
        <h2 className="card-title my-5">{title}</h2>
        <p className="card-body my-5">{text}</p>
        <a href="#" className="button">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
