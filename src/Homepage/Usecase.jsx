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

<div className="flex flex-col gap-5 px-4 md:px-48">
  {/* 1 */}
  <div className="flex flex-row tablet:flex-col w-full gap-5">
    {/* Left side image */}
    <div className="z-40 w-[40%] h-[100%] flex tablet:w-[80%] tablet:phone:w-[100%] justify-end  tablet:justify-center ">
      <img src={usecase1} alt="" className="w-full tablet:w-auto max-w-full" />
    </div>
    
    {/* Right side content */}
    <div className="usecasecontent  w-[60%] flex flex-col justify-center   gap-4 tablet:w-[100%] tablet:text-center">
      <h1 className="  text-3xl md:text-4xl lg:text-5xl  tracking-tight leading-snug text-left w-full tablet:text-center">
        Staking Platform
      </h1>
      <p className="text-base text-slate-300 text-slate-200 md:text-lg lg:text-lg leading-relaxed text-left tablet:text-center">
      Staking within the SBC ecosystem involves users locking up their SBC tokens in a designated wallet to support network operations, such as transaction validation and enhancing security. This staking mechanism provides an incentive for users to retain their tokens, as they can earn rewards over time. These rewards can then be reinvested or used to unlock additional features within the ecosystem, creating a positive feedback loop that stabilizes the token’s price by encouraging long-term holding. SBC’s staking platform is designed with user-friendliness in mind, allowing participants to stake and unstake tokens easily through an intuitive interface </p>
    </div>
  </div>
  {/* 2 */}

  <div className="flex flex-row-reverse tablet:flex-col w-full gap-5">
    {/* Left side image */}
    <div className="flex tablet:w-full w-[30%]  justify-center items-center">
      <img src={usecase2} alt="" className="w-full tablet:w-auto max-w-full" />
    </div>
    
    {/* Right side content */}
    <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
      <h1 className="  text-3xl md:text-4xl lg:text-5xl  tracking-tight leading-snug text-left w-full tablet:text-center">
      NFT Marketplace
      </h1>
      <p className="text-base text-slate-300 text-slate-200 md:text-lg lg:text-lg leading-relaxed text-left tablet:text-center">
      SBC also features a dedicated NFT marketplace where users can create, buy, and sell non-fungible tokens (NFTs). This platform empowers artists, creators, and collectors to tokenize their work, offering a new revenue stream and boosting community engagement and visibility. The marketplace allows users to purchase NFTs with SBC tokens, giving the token practical utility and fostering demand within the ecosystem. This seamless integration of NFTs broadens SBC’s appeal to a wider audience interested in digital collectibles and asset ownership.
      </p>
    </div>
  </div>

{/* 3 */}
  <div className="flex flex-row tablet:flex-col w-full gap-5">
    {/* Left side image */}
    <div className="flex tablet:w-full w-[30%]  justify-center items-center">
      <img src={usecase3} alt="" className="w-full tablet:w-auto max-w-full" />
    </div>
    
    {/* Right side content */}
    <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
      <h1 className="  text-3xl md:text-4xl lg:text-5xl  tracking-tight leading-snug text-left w-full tablet:text-center">
        Exchange Launching
      </h1>
      <p className="text-base text-slate-300 text-slate-200 md:text-lg lg:text-lg leading-relaxed text-left tablet:text-center">
      SBC has plans to launch its own cryptocurrency exchange, which will allow users to trade SBC and other digital assets directly within the ecosystem. This in-house exchange would enhance liquidity for SBC, making it easier for users to buy and sell without relying on external platforms. The exchange will also provide lower trading fees for SBC token holders, encouraging trading within the community. Additional features, such as advanced trading options and a user-friendly interface, are planned to ensure a secure and convenient experience for all users. </p>
    </div>
  </div>

{/* 4 */}

  <div className="flex flex-row-reverse tablet:flex-col w-full gap-5">
    {/* Left side image */}
    <div className="flex tablet:w-full w-[30%]  justify-center items-center">
      <img src={usecase4} alt="" className="w-full tablet:w-auto max-w-full" />
    </div>
    
    {/* Right side content */}
    <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
      <h1 className="  text-3xl md:text-4xl lg:text-5xl  tracking-tight leading-snug text-left w-full tablet:text-center">
        Utility Program
      </h1>
      <p className="text-base text-slate-300 text-slate-200 md:text-lg lg:text-lg leading-relaxed text-left tablet:text-center">
      SBC will serve as the native currency on a utility platform designed to offer various decentralized services, such as payment processing and financial transactions. This platform could include peer-to-peer payments, remittances, and microtransactions, enabling users to carry out efficient and low-cost transactions. The user experience will be enhanced with a suite of tools for asset management, transaction processing, and interaction with decentralized applications (DApps), ensuring SBC’s practicality extends beyond just trading. </p>
    </div>
  </div>

{/* 5 */}

  <div className="flex flex-row tablet:flex-col w-full gap-5">
    {/* Left side image */}
    <div className="flex tablet:w-full w-[30%]  justify-center items-center">
      <img src={usecase5} alt="" className="w-full tablet:w-auto max-w-full" />
    </div>
    
    {/* Right side content */}
    <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
      <h1 className="  text-3xl md:text-4xl lg:text-5xl  tracking-tight leading-snug text-left w-full tablet:text-center">
        Own Wallet
      </h1>
      <p className="text-base text-slate-300 text-slate-200 md:text-lg lg:text-lg leading-relaxed text-left tablet:text-center">
      To support secure storage and management of SBC tokens, the SBC ecosystem will feature a proprietary wallet that allows users to store, send, and receive tokens seamlessly. This wallet will support multiple cryptocurrencies and tokens, making it a versatile tool for users. Enhanced security measures, including two-factor authentication and biometric access, will be implemented to protect users’ funds and personal information, ensuring a high level of trust and confidence in using SBC’s digital wallet for their assets
      </p>
    </div>
  </div>


{/* 6 */}
  <div className="flex flex-row-reverse tablet:flex-col w-full gap-5">
    {/* Left side image */}
    <div className="flex tablet:w-full w-[30%]  justify-center items-center">
      <img src={usecase6} alt="" className="w-full tablet:w-auto max-w-full" />
    </div>
    
    {/* Right side content */}
    <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
      <h1 className="  text-3xl md:text-4xl lg:text-5xl  tracking-tight leading-snug text-left w-full tablet:text-center">
        Own Blockchain
      </h1>
      <p className="text-base text-slate-300 text-slate-200 md:text-lg  lg:text-lg leading-relaxed text-left tablet:text-center">
      In the future, SBC aims to develop its own blockchain, which will host SBC and related projects. This dedicated blockchain will provide the ecosystem with increased scalability, enhanced security, and flexible customization options, enabling new features and applications. With its own blockchain, SBC can create a developer-friendly environment, attracting developers to build decentralized applications (DApps) within the SBC ecosystem. This addition will increase SBC’s utility and broaden its appeal as a versatile and scalable platform.   </p>
    </div>
  </div>



  

</div>

</>
  )
}

export default Usecase