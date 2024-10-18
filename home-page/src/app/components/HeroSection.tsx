import React from 'react';
import './HeroSection.css';
import Image from 'next/image';
import im1 from './images/Hero.png';


const HeroSection: React.FC = () => {
  return (
      <div className="container">
          <h1>
            Lead Your Finances to <span className="success">Success!</span>
          </h1>
          <Image className='container-img' src={im1} alt="Hero" layout="fixed" />
        </div>
    

    
  );
};

export default HeroSection;
