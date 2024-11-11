import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import LazyLoad from 'react-lazyload';
import aboutimg1 from "../Images/aboutimg.png";
import arrow1 from "../Images/arrow.svg";
import { Helmet } from 'react-helmet'; 

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-out-cubic', once: true });
  }, []);

  return (
    <div className='flex flex-col md:flex-row justify-center align-middle min-h-[90vh] py-4 px-20 tablet:py-10 tablet:px-2' id='about'>

      {/* start */}
       <Helmet>
        <title> Smart BC Token  </title>
        <meta name="description" content="Learn about Smart BC Token (SBC) - a BEP-20 token designed to transform the blockchain ecosystem with staking, e-commerce, NFTs, and a crypto exchange." />
        <meta property="og:title" content="About Smart BC Token | Revolutionizing Blockchain Technology" />
        <meta property="og:description" content="Learn about Smart BC Token (SBC) - a BEP-20 token designed to transform the blockchain ecosystem with staking, e-commerce, NFTs, and a crypto exchange." />
        <meta property="og:image" content="URL_to_image_or_logo" />
        <link rel="canonical" href="https://www.example.com/about" />
      </Helmet>

      {/* end */}
      {/* Image Section */}
      <div 
        className='flex justify-center w-full md:w-1/2 px-4 md:px-8' 
        data-aos="fade-right" 
        data-aos-delay="200"
      >
        <LazyLoad height={300} offset={100} once>
          <img 
            src={aboutimg1} 
            alt="About Image" 
            className='w-full max-w-2xl h-auto'
          />
        </LazyLoad>
      </div>

      {/* Text Content Section */}
      <div 
        className='flex flex-col w-full md:w-1/2 justify-center items-start md:px-8 px-4 py-6 space-y-6' 
        data-aos="fade-left" 
        data-aos-delay="400"
      >
        {/* Title */}
        <div 
          className='text-left md:text-left w-full' 
          data-aos="fade-up" 
          data-aos-delay="600"
        >
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-snug'>
            About <span className='text-gradient'>Smart BC Token</span>
          </h1>
        </div>

        {/* Paragraphs */}
        <p 
          className='text-base md:text-lg lg:text-xl leading-relaxed' 
          data-aos="fade-up" 
          data-aos-delay="800"
        >
          SMART BC Token (SBC) is a BEP-20 token that aims to transform the blockchain landscape through a comprehensive ecosystem for staking, e-commerce, NFTs, and a dedicated crypto exchange. Our mission is to empower users with decentralized financial solutions, enhancing transparency and inclusivity.
        </p>

        <p 
          className='text-base md:text-lg lg:text-xl leading-relaxed' 
          data-aos="fade-up" 
          data-aos-delay="1000"
        >
          We envision a future where blockchain technology simplifies everyday transactions, promoting security and efficiency. Join us as we drive innovation and create a vibrant community for digital finance.
        </p>
      </div>
    </div>
  );
}

export default About;
