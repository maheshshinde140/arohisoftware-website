
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images from assets
import awsLogo from './../../../public/assets/partners/awsLogo.png' ;
import accenturelogo from "./../../../public/assets/partners/accenturelogo.png"
// import courseraLogo from './assets/logos/coursera.png';
// import googleCloudLogo from './assets/logos/google-cloud.png';
// import microsoftLogo from './assets/logos/microsoft.png';
// import pluralsightLogo from './assets/logos/pluralsight.png';
// import serviceNowLogo from './assets/logos/servicenow.png';
// import skillsoftLogo from './assets/logos/skillsoft.png';
// import udacityLogo from './assets/logos/udacity.png';
// import accentureLogo from './assets/logos/accenture.png';

const PartnersContainer = styled.div`
  padding: 56px 0;
  background: grey;
  text-align: center;

  h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
  }
`;

const PartnerLogoContainer = styled.div`
  padding: 10px;
`;

const PartnerLogo = styled.img`
  max-width: 150px;
  max-height: 100px;
  margin: 0 auto;
`;

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  const logos = [
    { src: awsLogo.src, alt: 'AWS' },
    { src: accenturelogo.src, alt: 'accenture' },
    { src: awsLogo.src, alt: 'AWS' },
    { src: awsLogo.src, alt: 'AWS' },
    // { src: courseraLogo, alt: 'Coursera' },
    // { src: googleCloudLogo, alt: 'Google Cloud' },
    // { src: microsoftLogo, alt: 'Microsoft' },
    // { src: pluralsightLogo, alt: 'Pluralsight' },
    // { src: serviceNowLogo, alt: 'ServiceNow' },
    // { src: skillsoftLogo, alt: 'Skillsoft' },
    // { src: udacityLogo, alt: 'Udacity' },
    // { src: accentureLogo, alt: 'Accenture' },
  ];

  return (
    <PartnersContainer>
      <h2>Our Partners</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <PartnerLogoContainer key={index}>
            <PartnerLogo src = {logo.src} alt={logo.alt} />
          </PartnerLogoContainer>
        ))}
      </Slider>
    </PartnersContainer>

  )}




export default Partners;
