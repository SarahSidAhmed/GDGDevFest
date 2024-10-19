"use client";

import React from 'react';
import { opinions } from '../data';

const Opinions = () => {
  return (
    <section className='mt-[-450px] py-[50px]' style={{ backgroundColor: "#001B66" }}>
      {/* Hide the image on small screens, display on medium screens and above */}
      <img src="shape.png" alt="" className='absolute mt-[-230px] hidden md:block' style={{ right: '0px' }} />
      
      <h1 className='font-bold text-6xl md:text-4xl px-[200px] pb-[60px] text-center leading-snug text-white sm:px-[50px]'>
        Read What The <br /> Others Have To Say
      </h1>
      
      <div className='flex flex-col md:flex-row gap-[50px] md:gap-[100px] m-[50px]'>
        {opinions.map((val, index) => {
          return (
            <div className='w-full md:w-[360px] h-[253px] rounded-3xl' style={{ backgroundColor: val.color }} key={index}>
              <img className='w-[117px] h-[117px] rounded-full relative text-center' style={{ bottom: '60px', left: '110px' }} src={val.img} alt="" />
              <div className='relative' style={{ bottom: '40px' }}>
                <h1 className='font-bold text-xl text-center text-white pb-[20px]'>{val.name}</h1>
                <p className='mx-[20px] text-center text-custom-blue text-base font-medium'>{val.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Opinions;
