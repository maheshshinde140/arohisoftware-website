"use client";
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images from assets
import awsLogo from './../../../public/assets/partners/awsLogo.png';
import accentureLogo from './../../../public/assets/partners/accenturelogo.png';
import growAro from './../../../public/assets/partners/growAro.jpeg';
import courseraLogo from './../../../public/assets/partners/coursera-removebg-preview.png';
import samsungLogo from './../../../public/assets/partners/samsung-removebg-preview.png';
import twitterLogo from './../../../public/assets/partners/teiter-removebg-preview.png';
import abstractLogo from './../../../public/assets/partners/avstract-removebg-preview.png';

const Container = styled.div`
  padding: 56px 0;
  text-align: center;
  background: #63387C;

  h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #fff;
  }
`;

const LogoContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const logos = [
    { src: awsLogo.src, alt: 'AWS' },
    { src: accentureLogo.src, alt: 'Accenture' },
    { src: growAro.src, alt: 'GrowAro' },
    { src: courseraLogo.src, alt: 'Coursera' },
    { src: samsungLogo.src, alt: 'Samsung' },
    { src: twitterLogo.src, alt: 'Twitter' },
    { src: abstractLogo.src, alt: 'Abstract' },
  ];

  return (
    <Container>
      <h2>Our Partners</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <LogoContainer key={index}>
            <LogoBox>
              <Logo src={logo.src} alt={logo.alt} />
            </LogoBox>
          </LogoContainer>
        ))}
      </Slider>
    </Container>
  );
}

export default Partners;
