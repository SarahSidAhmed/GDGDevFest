"use client";

import React, { useState, useEffect } from 'react';
import { features } from '../data';

const Features = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  // Update the layout based on the window width
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Set breakpoint for large screens (768px and up)
    };

    // Initialize layout
    handleResize();

    // Listen for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
     <h1 className='font-bold text-7xl px-[200px] py-[60px] text-center leading-snug text-custom-blue sm:text-4xl sm:px-[50px] xs:text-3xl'>
  Explore Our Powerful <br/>Features That Drive Financial <br /> Success!
</h1>

      
      {/* Conditionally render layout based on screen size */}
      {isLargeScreen ? (
        // Grid layout for large screens
        <div className="grid grid-cols-3 gap-[20px] justify-items-center">
          {/* First Item */}
          <div className='col-span-1 flex justify-center my-[170px] sm:ml-20'>
            <div className='p-[20px] w-full sm:w-96 h-60 sm:h-72 text-custom-blue rounded-3xl' style={{ backgroundColor: features[0].color }}>
              <span className='w-[40px] h-[40px] sm:w-[47px] sm:h-[47px] inline-block rounded-full' style={{ backgroundColor: 'white' }}></span>
              <div className='px-[20px]'>
                <h2 className='font-bold text-xl sm:text-2xl pb-[10px]'>{features[0].title}</h2>
                <p className='text-sm sm:text-base font-medium'>{features[0].desc}</p>
              </div>
            </div>
          </div>

          {/* Second Column: Three Items */}
          <div className='col-span-1 flex flex-col items-center'>
            {features.slice(1, 4).map((feature, index) => (
              <div key={index} className='p-[20px] w-full sm:w-96 h-60 sm:h-72 text-custom-blue rounded-3xl mb-4' style={{ backgroundColor: feature.color }}>
                <span className='w-[40px] h-[40px] sm:w-[47px] sm:h-[47px] inline-block rounded-full' style={{ backgroundColor: 'white' }}></span>
                <div className='px-[20px]'>
                  <h2 className='font-bold text-xl sm:text-2xl pb-[10px]'>{feature.title}</h2>
                  <p className='text-sm sm:text-base font-medium'>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Third Column: Two Items */}
          <div className='col-span-1 flex flex-col items-center my-[80px]'>
            {features.slice(4, 6).map((feature, index) => (
              <div key={index} className='p-[20px] w-full sm:w-96 h-60 sm:h-72 text-custom-blue rounded-3xl mb-4 sm:mr-20' style={{ backgroundColor: feature.color }}>
                <span className='w-[40px] h-[40px] sm:w-[47px] sm:h-[47px] inline-block rounded-full' style={{ backgroundColor: 'white' }}></span>
                <div className='px-[20px]'>
                  <h2 className='font-bold text-xl sm:text-2xl pb-[10px]'>{feature.title}</h2>
                  <p className='text-sm sm:text-base font-medium'>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Flex layout for small screens
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center">
        {features.map((feature, index) => (
          <div key={index} className='p-[20px] w-full sm:w-96 h-60 sm:h-72 text-custom-blue rounded-3xl mb-4 sm:mr-4' style={{ backgroundColor: feature.color }}>
            <span className='w-[40px] h-[40px] sm:w-[47px] sm:h-[47px] inline-block rounded-full' style={{ backgroundColor: 'white' }}></span>
            <div className='px-[20px]'>
              <h2 className='font-bold text-xl sm:text-2xl pb-[10px]'>{feature.title}</h2>
              <p className='text-sm sm:text-base font-medium'>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
      )}

      {/* Image displayed only on larger screens */}
      <img className="relative hidden md:block" style={{ bottom: '430px' }} src="HandsPhone.png" alt="Phone in Hands" />
    </section>
  );
};

export default Features;
