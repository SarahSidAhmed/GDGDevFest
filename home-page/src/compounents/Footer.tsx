import footerImage from './../images/footer_image.svg';
import Image from 'next/image';
import LinkedIn from './../images/LinkedIn.svg';
import X from './../images/X.svg';
import Instagram from './../images/Instagram.svg';
import Youtube from './../images/Youtube.svg';

export default function Footer() {
  return (
    <div className='grid grid-cols-1 justify-between items-center gap-8 m-auto bg-[#F9F4F1] w-full pt-8'>
      {/* Main Content */}
      <div className='grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-4 px-16'>
        {/* Footer Image */}
        <Image 
          src={footerImage}
          width={560} 
          height={350} 
          alt="Footer Image"
          className=''
        />
        
        {/* Newsletter Section */}
        <div className='grid grid-cols-1 justify-center gap-4 w-full lg:w-[80%] px-8 pt-8 lg:px-2'>
          <div className='grid grid-cols-1 justify-center gap-2'>
            <h1 className='font-bold font-outfit text-2xl text-[#001B66]'>Join Our Newsletter</h1>
            <p className='font-outfit text-xl text-[#001B66] '>Be up to date with everything new</p>
          </div>
          <input 
            type="email" 
            placeholder="Enter Your Email" 
            className="p-2 rounded-2xl w-full bg-[#001B66] placeholder-[#F9F4F1] text-[#F9F4F1]"
          />

          <div className='flex justify-center gap-8'>
            <Image src={X} width={23} height={23} alt="x Image" />
            <Image src={Instagram} width={24} height={24} alt="Instagram Image" />
            <Image src={Youtube} width={24} height={24} alt="YouTube Image" />
            <Image src={LinkedIn} width={24} height={24} alt="LinkedIn Image" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='bg-[#001B66] text-[#F9F4F1] text-lg text-center py-2'>
        © 2024 Team7. All rights reserved.
      </div>
    </div>  
  );
}
