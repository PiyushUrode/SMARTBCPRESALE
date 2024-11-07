import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Marquee from '../Marquee/Marquee';
import arrow1 from "../Images/arrow.svg";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true }); // Initializes AOS with a custom duration and easing
  }, []);

  return (
    <div className='flex flex-row relative tablet:flex-col justify-center h-[95vh] ' id='home'>
      <div 
        className='flex flex-col w-full justify-center align-middle phone:w-full gap-10 phone:gap-2 phone:px-1 px-5' 
        data-aos="fade-up" 
        data-aos-delay="100"
      >
        <div className='flex flex-col gap-4 w-full justify-center align-middle text-center'>
          <h1 
            className='text-h1 tablet:text-h4  ibold -tracking-normal w-[100%] leading-tight tablet:align-middle'
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Experience the Power   <span className='text-gradient'> of Blockchain Technology </span>
          </h1>
          <h1 
            className='text-h1 tablet:text-h4     ibold -tracking-normal w-[100%] leading-tight tablet:align-middle'
            data-aos="fade-up"
            data-aos-delay="300"
          >
            The Future of <span className='text-gradient'>Blockchain with Smart BC</span>
          </h1>
        </div>

        <div 
          className='w-full justify-center align-middle text-center phone:text-center flex '
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className='w-[50%] tablet:w-[80%]  phone:text-p phone:w-[100vw] phone:px-1 px-5 py-2 phone:py-1'>
          Smart BC Token opens the door to secure, efficient, and transparent digital transactions. Designed as a blockchain-based asset, it’s reshaping the use and trust of digital currencies across industries, offering a reliable platform that supports the needs of businesses and individual investors alike.
          </p>
        </div>

        <div 
          className='flex flex-row phone:flex-col phone:gap-5 gap-10 w-full phone:px-10 px-5 py-2 justify-center align-middle text-center'
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <button className="text-h3 font-h2 tablet:text-[1rem] border-customTeal rounded-2xl text-white px-4 py-2 border-2 border-solid hover:bg-customTealhover hover:text-black">
            <a target="blank" href="https://smartbcconceepts-organization.gitbook.io/smart-bc-token/" className='rbtn h-fit rounded-full'>
              <span className="text rounded-full px-5 py-2 phone:py-1 phone:px-2 phone:text-sm">Whitepaper</span>
            </a>
          </button>
        </div>
      </div>

      <div 
        className="overflow-x-hidden w-[100vw] absolute bottom-10 tablet:bottom-5 phone:bottom-0 whitespace-nowrap bg-custom-gradient" 
        
      >
        <Marquee />
      </div>
    </div>
  );
}

export default Header;
