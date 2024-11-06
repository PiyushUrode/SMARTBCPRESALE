import React from 'react'
// import FlipSlider from './Flipslider'
import usecase1 from "../Images/usecase/img1.svg"
import usecase2 from "../Images/usecase/img2.svg"
import usecase3 from "../Images/usecase/img3.svg"
import usecase4 from "../Images/usecase/img4.svg"
import usecase5 from "../Images/usecase/img5.svg"
import usecase6 from "../Images/usecase/img6.svg"

const Usecase = () => {
  return (
<>
<div className='flex flex-row tablet:flex-col justify-center py-5 p-2 phone:py-5   '>
  <div className='flex flex-col w-full justify-center align-middle phone:w-full gap-10 phone:gap-4 py-5 px-5 '>
    <div className='flex flex-col gap-1 w-full justify-center align-middle  text-center '>
      <h1 className=' text-h1 phone:text-h3 ibold -tracking-normal w-[100%] leading-tight tablet:align-middle '>
        Use  <span className='text-gradient'> Case </span>
      </h1>

    </div>
    <div className='w-full justify-center align-middle  text-center flex '>
    <p className='text-p font-p w-[50%]  tablet:w-full px-5 py-2 phone:py-1  '>
    SMART BC Token (SMBC) is a BEP-20 token fueling staking, e-commerce, NFTs, and metaverse applications, with plans for its own Blitz Blockchain. Join SMBC to earn, trade, and thrive in a transparent, scalable blockchain ecosystem.
    </p>
    </div>

  </div>

</div>

{/* <div className='h-fit'>
  <FlipSlider/>
</div> */}

<div className="flex flex-col gap-5 px-4 md:px-36">
  <div className="flex flex-row tablet:flex-col w-full gap-5">
    {/* Left side image */}
    <div className="flex tablet:w-full w-[30%]  justify-center items-center">
      <img src={usecase1} alt="" className="w-full tablet:w-auto max-w-full" />
    </div>
    
    {/* Right side content */}
    <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
      <h1 className="  text-3xl md:text-4xl lg:text-5xl  leading-snug text-left w-full tablet:text-center">
        Staking Platform
      </h1>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-left tablet:text-center">
       Staking SBC tokens allows users to lock them in a secure wallet, supporting network operations and earning rewards over time. This incentivizes holding, promoting price stability within the ecosystem. Users can reinvest rewards or unlock special features, all through an intuitive, user-friendly interface that makes staking and unstaking easy. </p>
    </div>
  </div>

  <div className="flex flex-row-reverse tablet:flex-col w-full gap-5">
    {/* Left side image */}
    <div className="flex tablet:w-full w-[30%]  justify-center items-center">
      <img src={usecase2} alt="" className="w-full tablet:w-auto max-w-full" />
    </div>
    
    {/* Right side content */}
    <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
      <h1 className="  text-3xl md:text-4xl lg:text-5xl  leading-snug text-left w-full tablet:text-center">
      NFT Marketplace
      </h1>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-left tablet:text-center">
      Staking SBC tokens allows users to lock them in a secure wallet, supporting network operations and earning rewards over time. This incentivizes holding, promoting price stability within the ecosystem. Users can reinvest rewards or unlock special features, all through an intuitive, user-friendly interface that makes staking and unstaking easy.
      </p>
    </div>
  </div>


  <div className="flex flex-row tablet:flex-col w-full gap-5">
    {/* Left side image */}
    <div className="flex tablet:w-full w-[30%]  justify-center items-center">
      <img src={usecase3} alt="" className="w-full tablet:w-auto max-w-full" />
    </div>
    
    {/* Right side content */}
    <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
      <h1 className="  text-3xl md:text-4xl lg:text-5xl  leading-snug text-left w-full tablet:text-center">
        Exchange Launching
      </h1>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-left tablet:text-center">
      Staking SBC tokens allows users to lock them in a secure wallet, supporting network operations and earning rewards over time. This incentivizes holding, promoting price stability within the ecosystem. Users can reinvest rewards or unlock special features, all through an intuitive, user-friendly interface that makes staking and unstaking easy. </p>
    </div>
  </div>



  <div className="flex flex-row-reverse tablet:flex-col w-full gap-5">
    {/* Left side image */}
    <div className="flex tablet:w-full w-[30%]  justify-center items-center">
      <img src={usecase4} alt="" className="w-full tablet:w-auto max-w-full" />
    </div>
    
    {/* Right side content */}
    <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
      <h1 className="  text-3xl md:text-4xl lg:text-5xl  leading-snug text-left w-full tablet:text-center">
        Utility Program
      </h1>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-left tablet:text-center">
      Staking SBC tokens allows users to lock them in a secure wallet, supporting network operations and earning rewards over time. This incentivizes holding, promoting price stability within the ecosystem. Users can reinvest rewards or unlock special features, all through an intuitive, user-friendly interface that makes staking and unstaking easy. </p>
    </div>
  </div>



  <div className="flex flex-row tablet:flex-col w-full gap-5">
    {/* Left side image */}
    <div className="flex tablet:w-full w-[30%]  justify-center items-center">
      <img src={usecase5} alt="" className="w-full tablet:w-auto max-w-full" />
    </div>
    
    {/* Right side content */}
    <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
      <h1 className="  text-3xl md:text-4xl lg:text-5xl  leading-snug text-left w-full tablet:text-center">
        Own Platform
      </h1>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-left tablet:text-center">
      Staking SBC tokens allows users to lock them in a secure wallet, supporting network operations and earning rewards over time. This incentivizes holding, promoting price stability within the ecosystem. Users can reinvest rewards or unlock special features, all through an intuitive, user-friendly interface that makes staking and unstaking easy.
      </p>
    </div>
  </div>



  <div className="flex flex-row-reverse tablet:flex-col w-full gap-5">
    {/* Left side image */}
    <div className="flex tablet:w-full w-[30%]  justify-center items-center">
      <img src={usecase6} alt="" className="w-full tablet:w-auto max-w-full" />
    </div>
    
    {/* Right side content */}
    <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
      <h1 className="  text-3xl md:text-4xl lg:text-5xl  leading-snug text-left w-full tablet:text-center">
        Own Blockchain
      </h1>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-left tablet:text-center">
      Staking SBC tokens allows users to lock them in a secure wallet, supporting network operations and earning rewards over time. This incentivizes holding, promoting price stability within the ecosystem. Users can reinvest rewards or unlock special features, all through an intuitive, user-friendly interface that makes staking and unstaking easy.   </p>
    </div>
  </div>



  

</div>

</>
  )
}

export default Usecase