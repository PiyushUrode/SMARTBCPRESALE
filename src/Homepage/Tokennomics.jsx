import React from 'react'
import Button3 from '../Marquee/Button3'
import img1 from "../Images/token.svg"



const Tokennomics = () => {
  return (
    <div className='flex flex-col align-middle justify-center text-center'>
      <div className='flex flex-row tablet:flex-col justify-center py-16 p-2 phone:py-5   '>
  <div className='flex flex-col w-full justify-center align-middle phone:w-full gap-10 phone:gap-4 py-5 px-5 '>
    <div className='flex flex-col gap-1 w-full justify-center align-middle  text-center '>
      <h1 className=' text-h1 phone:text-h3 ibold -tracking-normal w-[100%] leading-tight tablet:align-middle '>
        Tokenomics  <span className='text-gradient'> Case </span>
      </h1>

    </div>
    <div className='w-full justify-center align-middle  text-center flex '>
    <p className='text-p font-p w-[50%] phone:w-full px-5 py-2 phone:py-1  '>
    SMART BC Token (SMBC) is a BEP-20 token fueling staking, e-commerce, NFTs, and metaverse applications, with plans for its own Blitz Blockchain. Join SMBC to earn, trade, and thrive in a transparent, scalable blockchain ecosystem.
    </p>
    </div>

  </div>

</div>
      <div className='flex justify-center align-middle '> <img src={img1} alt="/" srcset="" /> </div>


      <div className="flex flex-1  flex-wrap justify-center gap-4  px-4  ">
  {/* Button instances */}
  <div className="w-[30%]  phone:w-56    tablet:flex-1 flex  justify-center               ">
    <Button3 leftText="TOKEN NAME" rightText="SMART BC" />
  </div>
  <div className="w-[30%]  phone:w-56     tablet:flex-1 flex  justify-center              ">
    <Button3 leftText="SYMBOL" rightText="SMBC" />
  </div>
  <div className="w-[30%]  phone:w-56    tablet:flex-1 flex  justify-center             ">
    <Button3 leftText="NETWORK" rightText="BEP-20" />
  </div>
  <div className="w-[30%]  phone:w-56    tablet:flex-1 flex  justify-center             ">
    <Button3 leftText="DECIMAL" rightText="18" />
  </div>
  <div className="w-[30%]  phone:w-56    tablet:flex-1 flex  justify-center             ">
    <Button3 leftText="TOTAL SUPPLY" rightText="15 CR" />
  </div>
</div>








    </div>
    
  )
}

export default Tokennomics