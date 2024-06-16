import React from "react";
import Image from "next/image";
import "animate.css";
import "./WorkCard.css";

const WorkCard = ({ images, altText, text, title }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${images})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="card-content">
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
