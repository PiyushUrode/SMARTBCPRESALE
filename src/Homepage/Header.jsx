import React from 'react'
import Marquee from '../Marquee/Marquee';
import arrow1 from "../Images/arrow.svg"

// import { motion } from 'framer-motion';
// import logo1 from "../Images/headericon/Logo-01.svg"
// import logo2 from "../Images/headericon/Logo-02.svg"
// import logo3 from "../Images/headericon/Logo-03.svg"
// import logo4 from "../Images/headericon/Logo-04.svg"
// import logo5 from "../Images/headericon/Logo-05.svg"


// const marqueeVariants = {
//   animate: {
//     x: [0, -1000], // Adjust -1000 based on the width of content
//     transition: {
//       x: {
//         repeat: Infinity,
//         repeatType: 'loop',
//         duration: 20, // Adjust for speed
//         ease: 'linear',
//       },
//     },
//   },
// };

const Header = () => {
  return (
    <>
<div className='flex flex-row relative tablet:flex-col justify-center h-[95vh]    '>
  <div className='flex flex-col w-full justify-center align-middle phone:w-full gap-10 phone:gap-4  px-5 '>
    <div className='flex flex-col gap-4 w-full justify-center align-middle  text-center '>
      <h1 className=' text-h1 phone:text-[28px] ibold -tracking-normal w-[100%] leading-tight tablet:align-middle '>
        Welcome to <span className='text-gradient'> SMART BC Token </span>
      </h1>
      <h1 className='text-h1 phone:text-[28px]  ibold -tracking-normal w-[100%] leading-tight tablet:align-middle '>
        Powering the Future of <span className='text-gradient'> Blockchain </span>
      </h1>
    </div>
    <div className='w-full justify-center   align-middle  text-center phone:text-center flex '>
    <p className=' w-[50%] tablet:w-[80%] phone:w-full phone:px-1   px-5 py-2 phone:py-1  '>
    SMART BC Token (SMBC) is a BEP-20 token fueling staking, e-commerce, NFTs, and metaverse applications, with plans for its own Blitz Blockchain. Join SMBC to earn, trade, and thrive in a transparent, scalable blockchain ecosystem.
    </p>
    </div>
    <div className='flex flex-row phone:flex-col phone:gap-5 gap-10 w-full phone:px-10 px-5 py-2  justify-center align-middle  text-center  '>
      <button className="text-h3 font-h2  border-customTeal rounded-2xl text-white px-4 py-2 border-2 border-solid hover:bg-customTealhover hover:text-black">
       
        <a target="blank" href="https://smartbcconceepts-organization.gitbook.io/smart-bc-token/" className='rbtn h-fit rounded-full'>
                                <span className="text rounded-full px-5 py-2 phone:py-1 phone:px-2 phone:text-sm ">Whitepaper</span>
                            </a>
      </button>

    </div>
  </div>

  <div className="overflow-x-hidden absolute bottom-10 tablet:bottom-3 phone:bottom-0  whitespace-nowrap  bg-custom-gradient">
      <Marquee />
    </div>

</div>



{/* <div className="overflow-hidden whitespace-nowrap px-5 py-5 bg-custom-gradient ">
  <motion.div
    className="flex space-x-8 align-middle justify-around"
    variants={marqueeVariants}
    animate="animate"
  >

    <div className="flex space-x-8">
      <img src={logo1} alt="logo1" className="w-fit" />
      <img src={logo2} alt="logo2" className="w-fit" />
      <img src={logo3} alt="logo3" className="w-fit" />
      <img src={logo4} alt="logo4" className="w-fit" />
      <img src={logo5} alt="logo5" className="w-fit" />
    </div>

  </motion.div>
  </div> */}

  {/* <div className="container mx-auto w-full  text-white flex justify-around items-center overflow-x-hidden"> */}
 
</>


  )
}

export default Header