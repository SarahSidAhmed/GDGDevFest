import React from 'react';
import Image from 'next/image';
import Vec1 from '../images/Vec1.svg';
import Vec2 from '../images/Vec2.svg';
import im2 from '../images/dash.png';

const Dash: React.FC = () => {
  return (
  
    <div className="flex flex-col justify-center items-center bg-[#001B66] px-16 py-28 pt-48 relative h-[350px] lg:h-[560px]">
    <h3 className="lg:text-2xl text-lg font-outfit text-[#F9F4F1] px-32 text-center pt-1 lg:pt-48 leading-tight md:leading-normal">
      We simplify financial management with real-time insights, automated reporting, and AI-driven recommendations. Empower your business with accurate, secure, and user-friendly tools to stay ahead financially.
    </h3>
    <Image
      className="absolute w-[55%] top-[-20%] right-[20%]"
      src={im2}
      alt="Dash"
      layout="fixed"
     
    />
 
   
    <Image
      className="absolute top-[50%] right-[0] hidden lg:block"
      src={Vec1}
      alt="Vec1"
      layout="fixed"
      width={180}
    />
    <Image
      className="absolute top-[10%] left-[0] lg:w-[300px] w-[180px]"
      src={Vec2}
      alt="Vec2"
      layout="fixed"
    />
  </div>
  );
};

export default Dash;
