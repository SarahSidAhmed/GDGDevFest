'use client';
import React, { useState } from 'react';
import Menu from '../images/Menu.svg';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav 
      className="flex flex-row justify-between items-center gap-8 fixed w-full m-auto px-8 py-4 bg-[#F9F4F1]"
      style={{ boxShadow: '0 2px 4px rgba(0, 27, 102, 0.5)' }} 
    >
      <div className="text-xl">LOGO</div>
      
      <div className='lg:flex flex-row justify-between items-center gap-12 hidden font-outfit text-2xl'>
        <div className='flex flex-row justify-between items-center gap-4 text-[#001B66]'>
          <a href="#AboutUs" className='hover:text-[#E28C67]'>About us</a> 
          <a href="#Features" className='hover:text-[#E28C67]'>Features</a>
          <a href="#Testimonials" className='hover:text-[#E28C67]'>Testimonials</a>
          <a href="#Q&A" className='hover:text-[#E28C67]'>Q&A</a>
        </div>
        <div className='flex flex-row justify-between items-center gap-8 text-2xl'>
          <button className='text-[#001B66] border-2 border-[#001B66] px-8 py-2 rounded-xl hover:text-[#F9F4F1] hover:bg-[#001B66]'>Sign in</button>
          <button className='text-[#F9F4F1] bg-[#001B66] px-8 py-2 rounded-xl hover:text-[#001B66] hover:bg-[#F9F4F1] hover:border-2 hover:border-[#001B66]'>Sign up</button>
        </div>
      </div>

      {/* Mobile menu icon */}
      <Image
        src={Menu}
        alt="menu"
        className=" lg:hidden block  cursor-pointer" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></Image>

      {/* Mobile dropdown menu */}
      <div className={`lg:hidden absolute left-0 top-16 flex flex-col justify-between items-center gap-2 text-lg w-full bg-[#001B66] text-[#F9F4F1] text-center transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <li className='list-none hover:bg-[#E28C67] w-full cursor-pointer transition-all'>
          <a href="#AboutUs">About us</a>
        </li>
        <li className='list-none hover:bg-[#E28C67] w-full cursor-pointer transition-all'>
          <a href="#Features">Features</a>
        </li>
        <li className='list-none hover:bg-[#E28C67] w-full cursor-pointer transition-all'>
          <a href="#Testimonials">Testimonials</a>
        </li>
        <li className='list-none hover:bg-[#E28C67] w-full cursor-pointer transition-all'>
          <a href="#Q&A">Q&A</a>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
