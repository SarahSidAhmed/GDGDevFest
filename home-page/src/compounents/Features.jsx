"use client";

import React from 'react';
import { features } from './data';

const Features = () => {
  return (
    <section>
      <h1 className='font-bold text-6xl px-[200px] py-[60px] m text-center leading-snug text-custom-blue'>
        Explore Our Powerful <br/>Features That Drive Financial <br /> Success!
      </h1>
      <div className="grid grid-cols-3 gap-[20px] justify-items-center">
        {/* First Item: Centered in the First Column */}
        <div className='col-span-1 flex justify-center my-[170px] ml-20'>
          <div className='p-[20px] w-96 h-72 text-custom-blue rounded-3xl' style={{ backgroundColor: features[0].color }}>
            <span className='w-[47px] h-[47px] inline-block rounded-full' style={{ backgroundColor: 'white' }}></span>
            <div className='px-[20px]'>
              <h2 className='font-bold text-2xl pb-[10px]'>{features[0].title}</h2>
              <p className='text-base font-medium'>{features[0].desc}</p>
            </div>
          </div>
        </div>

        {/* Second Column: Three Items Centered */}
        <div className='col-span-1 flex flex-col items-center'>
          {features.slice(1, 4).map((feature, index) => (
            <div key={index} className='p-[20px] w-96 h-72 text-custom-blue rounded-3xl mb-4' style={{ backgroundColor: feature.color }}>
              <span className='w-[47px] h-[47px] inline-block rounded-full' style={{ backgroundColor: 'white' }}></span>
              <div className='px-[20px]'>
                <h2 className='font-bold text-2xl pb-[10px]'>{feature.title}</h2>
                <p className='text-base font-medium'>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Third Column: Two Items */}
        <div className='col-span-1 flex flex-col items-center my-[80px]'>
          {features.slice(4, 6).map((feature, index) => (
            <div key={index} className='p-[20px] w-96 h-72 text-custom-blue rounded-3xl mb-4 mr-20 ' style={{ backgroundColor: feature.color }}>
              <span className='w-[47px] h-[47px] inline-block rounded-full' style={{ backgroundColor: 'white' }}></span>
              <div className='px-[20px]'>
                <h2 className='font-bold text-2xl pb-[10px]'>{feature.title}</h2>
                <p className='text-base font-medium'>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img className="relative" style={{ bottom: '430px' }} src="HandsPhone.png" alt="Phone in Hands" />

    </section>
  );
};

export default Features;