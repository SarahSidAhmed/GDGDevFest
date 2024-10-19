import React from 'react';
import './HeroSection.css';
import Image from 'next/image';
import im2 from '../images/dash.png';

const Dash: React.FC = () => {
  return (
  
    <div className="discription">
    <Image
      className="discription-img"
      src={im2}
      alt="Dash"
      layout="fixed"
    />
    <h3 className="discription-h3">
      We simplify financial management with real-time insights, automated reporting, and AI-driven recommendations. Empower your business with accurate, secure, and user-friendly tools to stay ahead financially.
    </h3>
  </div>
  );
};

export default Dash;
