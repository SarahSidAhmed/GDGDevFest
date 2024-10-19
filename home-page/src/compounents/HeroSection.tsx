import React from 'react';
import './HeroSection.css';
import Image from 'next/image';
import im1 from '../images/hero Image.svg';


const HeroSection: React.FC = () => {
  return (
      <div className=" m-auto px-8 lg:px-20 py-16 pb-36 bg-[#F9F4F1] w-full flex flex-col lg:flex-row justify-between items-center gap-4 ">
          <h1 className='text-4xl md:text-7xl leading-tight md:leading-normal'>
            Lead Your Finances to <span className="success">Success!</span>
          </h1>
          <Image className='container-img' src={im1} alt="Hero" layout="fixed" />
      </div>
    

    
  );
};

export default HeroSection;
