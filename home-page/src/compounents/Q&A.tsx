'use client';
import { FaChevronDown } from 'react-icons/fa'; // Import an icon from react-icons
import Data from "../compounents/DataQA";
import { useState } from 'react';

export default function Footer() {

  const [selected, setSelected] = useState<number | null>(null); // Allow selected to be either a number or null

  const toggle = (i: number) => {
    if (selected === i) return setSelected(null);
    setSelected(i);
  };

  return (
    <div className='flex flex-col justify-between items-center gap-8 m-auto bg-[#F9F4F1] w-full pt-8'>
      <h1 className="text-[#001B66] font-bold text-outfit text-3xl lg:text-6xl text-center">Most Frequently Asked!</h1>
      
      <div className="flex flex-col items-center text-[#F9F4F1] text-outfit text-xl lg:text-2xl w-[70%]">
        {Data.map((item, i) => (
          <div key={i} className="flex flex-col justify-between items-start gap-2 rounded-2xl p-4 m-2 bg-[#001B66] w-full">
            <div className="flex justify-between items-center w-full">
              <span className="text-left font-bold text-white">{item.question}</span>
              <FaChevronDown 
                className="cursor-pointer text-white" 
                onClick={() => toggle(i)} 
              />
            </div>
            <div className={selected === i ? "flex mt-4 text-white text-lg" : "hidden"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
