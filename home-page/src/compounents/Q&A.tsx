'use client'; // Add this line at the top of your component file

import { FaChevronDown } from 'react-icons/fa'; // Import an icon from react-icons

export default function Footer() {
  return (
    <div className='flex flex-col justify-between items-center gap-8 m-auto bg-[#F9F4F1] w-full pt-8'>
      <h1 className="text-[#001B66] font-bold text-outfit text-6xl text-center">Most Frequently Asked!</h1>
      <div className="flex flex-col items-center text-[#F9F4F1] font-bold text-outfit text-2xl w-[70%]">
        <div className="flex justify-between items-center rounded-2xl p-2 m-2 mt-8 bg-[#001B66] pl-8 w-full">
          <span>Is this website free?</span>
          <FaChevronDown 
            className="cursor-pointer text-white" 
            onClick={() => alert('Response: Yes, this website is free!')} 
          />
        </div>
        <div className="flex justify-between items-center rounded-2xl p-2 m-2 bg-[#001B66] pl-8 w-full">
          <span>Is my data secure when I use this?</span>
          <FaChevronDown 
            className="cursor-pointer text-white" 
            onClick={() => alert('Response: Yes, your data is secure!')} 
          />
        </div>
        <div className="flex justify-between items-center rounded-2xl p-2 m-2 bg-[#001B66] pl-8 w-full">
          <span>Do you provide customer support?</span>
          <FaChevronDown 
            className="cursor-pointer text-white" 
            onClick={() => alert('Response: Yes, we provide customer support!')} 
          />
        </div>
      </div>
    </div>
  );
}
