"use client";

import React from 'react';
import { opinions } from './data';

const Opinions = () => {
  return (
    <section className='py-[20px] md:py-[50px]' style={{ backgroundColor: "#001B66" }}>
   

      <h3 className='font-bold text-4xl sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-8 md:px-16 lg:px-[100px] pb-[30px] text-center leading-snug text-white'>
        Read What The <br /> Others Have To Say
      </h3>

      <div className='flex flex-col md:flex-row gap-[20px] md:gap-[50px] m-4 md:m-[20px]'>
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
