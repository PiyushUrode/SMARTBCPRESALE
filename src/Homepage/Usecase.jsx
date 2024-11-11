import React from 'react';
import { motion } from 'framer-motion';
import usecase1 from "../Images/smartbcnewimg/1.webp";
import usecase2 from "../Images/smartbcnewimg/2.webp";
import usecase3 from "../Images/smartbcnewimg/3.webp";
import usecase4 from "../Images/smartbcnewimg/4.webp";
import usecase5 from "../Images/smartbcnewimg/5.webp";
import usecase6 from "../Images/smartbcnewimg/6.webp";

const Usecase = () => {
  return (
    <>
      <div className='flex flex-row tablet:flex-col justify-center py-5 p-2 phone:py-5' id='usecase'>
        <div className='flex flex-col w-full justify-center align-middle phone:w-full gap-10 phone:gap-4 py-5 px-5'>
          <div className='flex flex-col gap-1 w-full justify-center align-middle text-center'>
            <motion.h1
              className='text-h1 phone:text-h2 ibold -tracking-normal w-[100%] leading-tight tablet:align-middle'
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              Use <span className='text-gradient'> Case </span>
            </motion.h1>
          </div>
          <div className='w-full justify-center align-middle text-center flex'>
            <motion.p
              className='text-p font-p w-[50%] tablet:w-full px-5 py-2 phone:py-1'
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              SMART BC Token (SBC) is a BEP-20 token fueling staking, e-commerce, NFTs, and metaverse applications, with plans for its own Blitz Blockchain. Join SBC to earn, trade, and thrive in a transparent, scalable blockchain ecosystem.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 px-4 md:px-36">
        {/* 1 */}
        <motion.div
          className="flex flex-row tablet:flex-col w-full gap-5"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side image */}
          <div className="z-40 w-[40%] h-[100%] flex tablet:w-[80%] tablet:phone:w-[100%] justify-end tablet:justify-center">
            <img src={usecase1} alt="" className="w-full tablet:w-auto max-w-full" />
          </div>
          {/* Right side content */}
          <div className="usecasecontent w-[60%] flex flex-col justify-center gap-4 tablet:w-[100%] tablet:text-center">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug text-left w-full tablet:text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              Staking Platform
            </motion.h1>
            <motion.p
              className="text-base text-slate-300 text-slate-200 md:text-lg lg:text-lg leading-relaxed text-left tablet:text-center"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Staking within the SBC ecosystem involves users locking up their SBC tokens in a designated wallet to support network operations, such as transaction validation and enhancing security. This staking mechanism provides an incentive for users to retain their tokens, as they can earn rewards over time. These rewards can then be reinvested or used to unlock additional features within the ecosystem.
            </motion.p>
          </div>
        </motion.div>

        {/* 2 */}
        <motion.div
          className="flex flex-row-reverse tablet:flex-col w-full gap-5"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side image */}
          <div className="flex tablet:w-full w-[30%] justify-center items-center">
            <img src={usecase2} alt="" className="w-full tablet:w-auto max-w-full" />
          </div>
          {/* Right side content */}
          <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug text-left w-full tablet:text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              NFT Marketplace
            </motion.h1>
            <motion.p
              className="text-base text-slate-300 text-slate-200 md:text-lg lg:text-lg leading-relaxed text-left tablet:text-center"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              SBC also features a dedicated NFT marketplace where users can create, buy, and sell non-fungible tokens (NFTs). This platform empowers artists, creators, and collectors to tokenize their work, offering a new revenue stream and boosting community engagement and visibility. The marketplace allows users to purchase NFTs with SBC tokens, giving the token practical utility and fostering demand within the ecosystem.
            </motion.p>
          </div>
        </motion.div>

        {/* 3 */}
        <motion.div
          className="flex flex-row tablet:flex-col w-full gap-5"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side image */}
          <div className="flex tablet:w-full w-[30%] justify-center items-center">
            <img src={usecase3} alt="" className="w-full tablet:w-auto max-w-full" />
          </div>
          {/* Right side content */}
          <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug text-left w-full tablet:text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              Exchange Launching
            </motion.h1>
            <motion.p
              className="text-base text-slate-300 text-slate-200 md:text-lg lg:text-lg leading-relaxed text-left tablet:text-center"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              SBC has plans to launch its own cryptocurrency exchange, which will allow users to trade SBC and other digital assets directly within the ecosystem. This in-house exchange would enhance liquidity for SBC, making it easier for users to buy and sell without relying on external platforms. The exchange will also provide lower trading fees for SBC token holders, encouraging trading within the community.
            </motion.p>
          </div>
        </motion.div>

        {/* 4 */}
        <motion.div
          className="flex flex-row-reverse tablet:flex-col w-full gap-5"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side image */}
          <div className="flex tablet:w-full w-[30%] justify-center items-center">
            <img src={usecase4} alt="" className="w-full tablet:w-auto max-w-full" />
          </div>
          {/* Right side content */}
          <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug text-left w-full tablet:text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              Decentralized Finance (DeFi)
            </motion.h1>
            <motion.p
              className="text-base text-slate-300 text-slate-200 md:text-lg lg:text-lg leading-relaxed text-left tablet:text-center"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              SBC will soon integrate decentralized finance (DeFi) features, allowing users to access lending, borrowing, and yield farming opportunities. DeFi protocols empower users to earn passive income by providing liquidity to the platform while maintaining control of their funds, offering an alternative to traditional financial systems.
            </motion.p>
          </div>
        </motion.div>

        {/* 5 */}
        <motion.div
          className="flex flex-row tablet:flex-col w-full gap-5"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side image */}
          <div className="flex tablet:w-full w-[30%] justify-center items-center">
            <img src={usecase5} alt="" className="w-full tablet:w-auto max-w-full" />
          </div>
          {/* Right side content */}
          <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug text-left w-full tablet:text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              Metaverse Integration
            </motion.h1>
            <motion.p
              className="text-base text-slate-300 text-slate-200 md:text-lg lg:text-lg leading-relaxed text-left tablet:text-center"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              SBC is also preparing to integrate metaverse elements, where users can engage with virtual assets, explore digital worlds, and participate in virtual commerce. Through these immersive experiences, the SBC token will gain even more utility in the metaverse economy.
            </motion.p>
          </div>
        </motion.div>

        {/* 6 */}
        <motion.div
          className="flex flex-row-reverse tablet:flex-col w-full gap-5"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side image */}
          <div className="flex tablet:w-full w-[30%] justify-center items-center">
            <img src={usecase6} alt="" className="w-full tablet:w-auto max-w-full" />
          </div>
          {/* Right side content */}
          <div className="usecasecontent flex flex-col justify-center items-center tablet:items-start gap-4 tablet:w-full w-[70%] px-4 tablet:px-8">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug text-left w-full tablet:text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              E-commerce Solutions
            </motion.h1>
            <motion.p
              className="text-base text-slate-300 text-slate-200 md:text-lg lg:text-lg leading-relaxed text-left tablet:text-center"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              SBC also enables e-commerce solutions, where businesses can accept SBC tokens for goods and services. This creates a bridge between the traditional retail world and the blockchain ecosystem, allowing merchants to tap into a new and growing audience of crypto users.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Usecase;
