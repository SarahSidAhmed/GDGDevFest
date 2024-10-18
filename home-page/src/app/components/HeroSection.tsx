import React from 'react';
import './HeroSection.css';
import Image from 'next/image';
import im1 from './images/Hero.png';
import im2 from './images/dash.png';

const HeroSection = () => {
  return (
    <div className="Hero">
      <div className="main-container">
        <div className="container">
          <h1>
            Lead Your Finances to <span className="success">Success!</span>
          </h1>
          <Image src={im1} alt="Hero" layout="responsive" width={750} height={500} />
        </div>
      </div>
      <div className="discription">
        <Image  className="discription-img" src={im2} alt="Dash" layout="responsive" width={750} height={500} />
        <h3>
          We simplify financial management with real-time insights, automated reporting, and AI-driven recommendations. Empower your business with accurate, secure, and user-friendly tools to stay ahead financially.
        </h3>
      </div>
    </div>
  );
};

export default HeroSection;
