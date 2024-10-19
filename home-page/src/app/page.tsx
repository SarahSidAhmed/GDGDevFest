"use client";


import FirstPage from '../compounents/FirstPage';
import Footer from '../compounents/Footer';
import QA from '../compounents/Q&A';
import Navbar from '../compounents/navbar';
import HeroSection from '../compounents/HeroSection';

import Dash from '../compounents/Dash';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Dash/>
      <FirstPage />
      <QA />
      <Footer />
   </div>
  );
};

export default HomePage;

