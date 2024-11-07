import React from 'react';
import aboutimg1 from "../Images/aboutimg.png";
import arrow1 from "../Images/arrow.svg"

const About = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center align-middle min-h-[90vh] py-4 px-20 tablet:py-10 tablet:px-2'>
      {/* Image Section */}
      <div className='flex justify-center w-full md:w-1/2 px-4 md:px-8'>
        <img src={aboutimg1} alt="About Image" className='w-full max-w-2xl h-auto' />
      </div>

      {/* Text Content Section */}
      <div className='flex flex-col w-full md:w-1/2 justify-center items-start md:px-8 px-4 py-6 space-y-6'>
        {/* Title */}
        <div className='text-left md:text-left w-full'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-snug'>
            About <span className='text-gradient'>Smart BC Token</span>
          </h1>
        </div>

        {/* Paragraphs */}
        <p className='text-base md:text-lg lg:text-xl leading-relaxed'>
          SMART BC Token (SMBC) is a BEP-20 token that aims to transform the blockchain landscape through a comprehensive ecosystem for staking, e-commerce, NFTs, and a dedicated crypto exchange. Our mission is to empower users with decentralized financial solutions, enhancing transparency and inclusivity.
        </p>

        <p className='text-base md:text-lg lg:text-xl leading-relaxed'>
          We envision a future where blockchain technology simplifies everyday transactions, promoting security and efficiency. Join us as we drive innovation and create a vibrant community for digital finance.
        </p>

        {/* Button */}
        <div className='flex flex-col space-y-2'>
       
          <button class="text-h3 font-h2 flex flex-row text-white px-4 py-2 align-middle justify-center  gap-2  "><h1 class="border-b-2 border-slate-400 ">More</h1><img src={arrow1} alt="" class="mt-2"/></button>


        </div>
      </div>
    </div>
  );
}

export default About;
