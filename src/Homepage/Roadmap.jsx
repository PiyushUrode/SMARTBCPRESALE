import React, { useEffect } from 'react';
import "../App.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import str1img from "../Images/strategic/coincap.webp"
import str2img from "../Images/strategic/mask.webp"
import str3img from "../Images/strategic/panckae.webp"
import str4img from "../Images/strategic/twe.webp"

import arrowleft from "../Images/usecase/arrow1.svg"
// import arrowright from "../Images/usecase/arrow2.svg"


const Roadmap = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, easing: 'ease-out-cubic', once: true });
      }, []);
    return (
        <>
            <div className='flex flex-row tablet:flex-col justify-center py-5 p-2 phone:py-5   '>
                <div className='flex flex-col w-full justify-center align-middle phone:w-full gap-10 phone:gap-4 py-5 px-5 '>
                    <div className='flex flex-col gap-1 w-full justify-center align-middle  text-center '>
                        <h1   data-aos="fade-up"
            data-aos-delay="200" className=' text-h1 phone:text-h2 ibold -tracking-normal w-[100%] leading-tight tablet:align-middle '>
                            Road  <span className='text-gradient'> Map </span>
                        </h1>

                    </div>
                    <div className='w-full justify-center align-middle  text-center flex  '   data-aos="fade-up"
            data-aos-delay="400">
                        <p className='text-p font-p w-[50%]  tablet:w-full px-5 py-2 phone:py-1  '>
                            Step by step, our roadmap guides you through discovery, planning, design, development, deployment, and ongoing maintenance, ensuring transparency and progress every step of the way.
                        </p>
                    </div>

                </div>

            </div>




            {/* copy */}
            <section id="roadmap">
                <div
                    id="about-main"
                    className=" relative flex gap-16 flex-col min-h-[100vh] px-10 py-10 tablet:px-3 2xl:py-[3vw] 2xl:px-[3vw] 2xl:gap-[4vw]"
                >
                    <div>
                        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid 2xl:p-[1vw]">
                            {/* First Roadmap Item */}
         {/* First Roadmap Item */}
<div className="flex md:contents flex-row-reverse" data-aos="fade-up">
  <div className="h-fit relative flex tablet:flex-col max-w-[35rem] my-10 tablet:my-5 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal 2xl:max-w-[36.5vw] 2xl:my-[3vw] z-10">
    <div
      style={{
        background: 'linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)',
      }}
      className="h-fit w-fit text-4xl px-4 py-5 rounded-s-full tablet:rounded-t-full my-3 2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]"
     
    >
      01
    </div>
    <div className="h-fit flex flex-col gap-5 rounded-xl roadmap-shadow tracking-wider border-2 p-6 2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]">
      <p className="leading-6 font-bold text-xl 2xl:text-[1.3vw]" data-aos="fade-up" data-aos-delay="200">
        Phase 1: Pre-Launch (2024)
      </p>
      {/* List of steps */}
      <div className="flex gap-2" data-aos="fade-up" data-aos-delay="400">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">Conduct market research and finalize the tokenomics structure.</p>
      </div>
      <div className="flex gap-2" data-aos="fade-up" data-aos-delay="600">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">Develop and test the Smart BC Token on the BEP-20 network.</p>
      </div>
      <div className="flex gap-2" data-aos="fade-up" data-aos-delay="800">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">Build a dedicated project website and establish a social media presence.</p>
      </div>
      <div className="flex gap-2" data-aos="fade-up" data-aos-delay="1000">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">Assemble the core team and advisors.</p>
      </div>
      <div className="flex gap-2" data-aos="fade-up" data-aos-delay="1200">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">Conduct community outreach to generate interest and gather feedback.</p>
      </div>
    </div>
  </div>
  <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto" data-aos-delay="1400">
    <div className="flex items-center justify-center w-6 h-full">
      <div
        className="w-[0.4rem] h-full bg-indigo-300 rounded-t-full 2xl:w-[0.4vw]"
        style={{
          background: 'linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)',
        }}
      ></div>
    </div>
    <div className="absolute w-6 h-6 -mt-3 top-1/2 -left-4 rotate-180 tablet:left-4 tablet:rotate-0 2xl:w-[1.5vw] 2xl:h-[1.5vw] 2xl:left-[-1.3vw]">
      <img src={arrowleft} alt="" className="w-full h-full" />
    </div>
  </div>
</div>


                            {/* Second Roadmap Item */}
                        {/* Second Roadmap Item */}
<div className="flex md:contents" data-aos="fade-up">
  <div className="tablet:hidden relative flex my-10 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal">
    <img alt="" />
  </div>
  <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto" data-aos-delay="200">
    <div className="flex items-center justify-center w-6 h-full">
      <div className="w-[0.4rem] h-full bg-indigo-300 2xl:w-[0.4vw]" style={{
        background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
      }}></div>
    </div>
    <div className="absolute w-6 h-6 -mt-3 top-1/2 left-4 2xl:w-[1.5vw] 2xl:h-[1.5vw] 2xl:left-[1.3vw]">
      <img src={arrowleft} alt="" className="w-full h-full" />
    </div>
  </div>
  <div className="Sregular h-fit max-w-[35rem] flex flex-row-reverse tablet:flex-col relative my-10 tablet:my-5 rounded-xl col-start-6 col-end-10 mr-auto tracking-normal 2xl:max-w-[36.5vw] 2xl:my-[3vw] z-10" data-aos="fade-up" data-aos-delay="400">
    <div style={{
      background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
    }} className="h-fit w-fit text-4xl px-4 py-5 rounded-e-full tablet:rounded-t-full bg-gradient-to-tr ml-[1px] my-3 2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]">
      02
    </div>
    <div className="flex flex-col gap-5 rounded-xl roadmap-shadow border-2 tracking-wider p-6 2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]">
      <p className="leading-6 font-bold text-xl 2xl:text-[1.3vw]" data-aos="fade-up" data-aos-delay="600">Phase 2: Token Launch (2024)</p>
      {/* List of steps */}
      <div className="flex gap-2" data-aos="fade-up" data-aos-delay="800">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">Officially launch the Smart BC Token (SBC).</p>
      </div>
      <div className="flex gap-2" data-aos="fade-up" data-aos-delay="1000">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">Initiate the public sale of SBC tokens (40% allocation).</p>
      </div>
      <div className="flex gap-2" data-aos="fade-up" data-aos-delay="1200">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">Launch marketing campaigns to promote the token launch.</p>
      </div>
      <div className="flex gap-2" data-aos="fade-up" data-aos-delay="1400">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">Build strategic partnerships with crypto exchanges for listing.</p>
      </div>
      <div className="flex gap-2" data-aos="fade-up" data-aos-delay="1600">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">Expand community engagement with educational content and tutorials.</p>
      </div>
    </div>
  </div>
</div>


                            {/* Section 3 */}
                          {/* Section 3 */}
<div className="flex md:contents flex-row-reverse">
  <div className="h-fit relative flex tablet:flex-col max-w-[35rem] my-10 tablet:my-5 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal 2xl:max-w-[36.5vw] 2xl:my-[3vw] z-10">
    <div 
      style={{
        background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
      }} 
      className="h-fit w-fit text-4xl px-4 py-5 rounded-s-full tablet:rounded-t-full bg-gradient-to-bl my-3 2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      03
    </div>
    <div className="Sregular h-fit flex flex-col gap-5 rounded-xl roadmap-shadow tracking-wider border-2 p-6 2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]" data-aos="fade-up" data-aos-delay="400">
      <p className="leading-6 font-bold text-xl 2xl:text-[1.3vw]" data-aos="fade-up" data-aos-delay="600">Phase 3: Ecosystem Development (2024)</p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 " data-aos="fade-up" data-aos-delay="800">
          <p className="font-bold">✧</p>
          <p className="2xl:text-[1.12vw]">Launch staking platform, allowing users to earn rewards by staking SBC tokens.</p>
        </div>
        <div className="flex gap-2" data-aos="fade-up" data-aos-delay="1000">
          <p className="font-bold">✧</p>
          <p className="2xl:text-[1.12vw]">Develop and launch the NFT marketplace for creating and trading digital assets.</p>
        </div>
        <div className="flex gap-2" data-aos="fade-up" data-aos-delay="1200">
          <p className="font-bold">✧</p>
          <p className="2xl:text-[1.12vw]">Initiate community governance features to involve users in decision-making processes.</p>
        </div>
        <div className="flex gap-2" data-aos="fade-up" data-aos-delay="1400">
          <p className="font-bold">✧</p>
          <p className="2xl:text-[1.12vw]">Enhance the SBC community through engagement initiatives and educational content.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
    <div className="flex items-center justify-center w-6 h-full">
      <div className="w-[0.4rem] h-full bg-indigo-300 2xl:w-[0.4vw]" style={{
        background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
      }}></div>
    </div>
    <div className="absolute w-6 h-6 -mt-3 top-1/2 -left-4 rotate-180 tablet:left-4 tablet:rotate-0 2xl:w-[1.5vw] 2xl:h-[1.5vw] 2xl:left-[-1.3vw]" data-aos-delay="500">
      <img src={arrowleft} alt="" className="w-full h-full" />
    </div>
  </div>
</div>


                            {/* fouth */}
                     {/* Section 4 */}
<div className="flex md:contents">
  <div className="tablet:hidden relative flex my-10 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal">
    <img alt="" />
  </div>
  <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
    <div className="flex items-center justify-center w-6 h-full">
      <div className="w-[0.4rem] h-full bg-indigo-300 2xl:w-[0.4vw]" style={{
        background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
      }}></div>
    </div>
    <div className="absolute w-6 h-6 -mt-3 top-1/2 left-4 2xl:w-[1.5vw] 2xl:h-[1.5vw] 2xl:left-[1.3vw]" data-aos-delay="200">
      <img src={arrowleft} alt="" className="w-full h-full" />
    </div>
  </div>
  <div className="Sregular h-fit max-w-[35rem] flex flex-row-reverse tablet:flex-col relative my-10 tablet:my-5 rounded-xl col-start-6 col-end-10 mr-auto tracking-normal 2xl:max-w-[36.5vw] 2xl:my-[3vw] z-10">
    <div 
      style={{
        background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
      }} 
      className="h-fit w-fit text-4xl px-4 py-5 rounded-e-full tablet:rounded-t-full bg-gradient-to-tr ml-[1px] my-3 2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      04
    </div>
    <div className="flex flex-col gap-5 rounded-xl roadmap-shadow border-2 tracking-wider p-6 2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]" data-aos="fade-up" data-aos-delay="600">
      <p className="leading-6 font-bold text-xl 2xl:text-[1.3vw]">Phase 4: Expansion and Utility (2024)</p>
      <div className="flex gap-2" data-aos="fade-up" data-aos-delay="800">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">Officially launch the Smart BC Token (SBC).</p>
      </div>
      <div className="flex gap-2" data-aos="fade-up" data-aos-delay="1000">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">Initiate the public sale of SBC tokens (40% allocation).</p>
      </div>
      <div className="flex gap-2"data-aos="fade-up" data-aos-delay="1200">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">Launch marketing campaigns to raise awareness and attract investors.</p>
      </div>
      <div className="flex gap-2" data-aos="fade-up" data-aos-delay="1400">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">List SBC on select cryptocurrency exchanges for trading.</p>
      </div>
      <div className="flex gap-2" data-aos="fade-up" data-aos-delay="1600">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">Begin building partnerships within the blockchain and crypto space.</p>
      </div>
    </div>
  </div>
</div>
{/* fifth */}
<div className="flex md:contents flex-row-reverse">
    <div className="h-fit relative flex tablet:flex-col max-w-[35rem] my-10 tablet:my-5 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal 2xl:max-w-[36.5vw] 2xl:my-[3vw] z-10">
        <div
            style={{
                background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
            }}
            className="h-fit w-fit text-4xl px-4 py-5 rounded-s-full tablet:rounded-t-full bg-gradient-to-bl my-3 2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]"
        >
            05
        </div>
        <div className="Sregular h-fit flex flex-col gap-5 rounded-xl roadmap-shadow tracking-wider border-2 p-6 2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]">
            <p className="leading-6 font-bold text-xl 2xl:text-[1.3vw]" data-aos="fade-up" data-aos-delay="600">Phase 5: Own Blockchain Development (2025)</p>

{/* 1 */}
             
{/* 2 */}
<div className="flex gap-2" data-aos="fade-up" data-aos-delay="800">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">        Start the development of Smart BC Token’s proprietary blockchain..</p>
      </div>
{/* 3 */}
<div className="flex gap-2" data-aos="fade-up" data-aos-delay="1000">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]"> Focus on achieving scalability and speed to support high transaction volumes.</p>
      </div>
{/* 4 */}
<div className="flex gap-2" data-aos="fade-up" data-aos-delay="1200">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]"> Ensure compatibility with existing BEP-20 standards and interoperability with other blockchains.</p>
      </div>
{/* 5 */}
<div className="flex gap-2" data-aos="fade-up" data-aos-delay="1400">
        <p className="font-bold">✧</p>
        <p className="2xl:text-[1.12vw]">



Engage with the developer community to foster innovation and integration.
        </p>
      </div>
      {/* 6 */}
      

            
      

        </div>
    </div>
    <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
        <div className="flex items-center justify-center w-6 h-full">
            <div className="w-[0.4rem] h-full bg-indigo-300 2xl:w-[0.4vw]" style={{
                background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
            }}></div>
        </div>
        <div className="absolute w-6 h-6 -mt-3 top-1/2 -left-4 rotate-180 tablet:left-4 tablet:rotate-0 2xl:w-[1.5vw] 2xl:h-[1.5vw] 2xl:left-[-1.3vw]">
            <img src={arrowleft} alt="" className="w-full h-full" />
        </div>
    </div>
</div>

{/* sixth */}
<div className="flex md:contents">
    <div className="tablet:hidden relative flex my-10 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal">
        <img alt="" />
    </div>
    <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
        <div className="flex items-center justify-center w-6 h-full">
            <div className="w-[0.4rem] h-full bg-indigo-300 2xl:w-[0.4vw]" style={{
                background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
            }}></div>
        </div>
        <div className="absolute w-6 h-6 -mt-3 top-1/2 left-4 2xl:w-[1.5vw] 2xl:h-[1.5vw] 2xl:left-[1.3vw]">
            <img src={arrowleft} alt="" className="w-full h-full" />
        </div>
    </div>
    <div className="Sregular h-fit max-w-[35rem] flex flex-row-reverse tablet:flex-col relative my-10 tablet:my-5 rounded-xl col-start-6 col-end-10 mr-auto tracking-normal 2xl:max-w-[36.5vw] 2xl:my-[3vw] z-10">
        <div
            style={{
                background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
            }}
            className="h-fit w-fit text-4xl px-4 py-5 rounded-e-full tablet:rounded-t-full bg-gradient-to-tr ml-[1px] my-3 2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]"
        >
            06
        </div>
        <div className="flex flex-col gap-5 rounded-xl roadmap-shadow border-2 tracking-wider p-6 2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]">
            <p className="leading-6 font-bold text-xl 2xl:text-[1.3vw] " data-aos="fade-up" data-aos-delay="600">Phase 6: Long-term Growth and Sustainability (2026+)</p>
            <div className="flex gap-2" data-aos="fade-up" data-aos-delay="800">
                <p className="font-bold">✧</p>
                <p className="2xl:text-[1.12vw]">
                    Continuously improve and upgrade the SBC ecosystem based on user feedback and market trends.
                </p>
            </div>
            <div className="flex gap-2" data-aos="fade-up" data-aos-delay="1000">
                <p className="font-bold">✧</p>
                <p className="2xl:text-[1.12vw]">
                    Explore collaborations with other blockchain projects and enterprises to enhance utility.
                </p>
            </div>
            <div className="flex gap-2" data-aos="fade-up" data-aos-delay="1200">
                <p className="font-bold">✧</p>
                <p className="2xl:text-[1.12vw]">
                    Implement long-term sustainability practices to maintain the value of SBC.
                </p>
            </div>
            <div className="flex gap-2" data-aos="fade-up" data-aos-delay="1400">
                <p className="font-bold">✧</p>
                <p className="2xl:text-[1.12vw]">
                    Expand community outreach and educational initiatives to onboard new users into the ecosystem.
                </p>
            </div>
        </div>
    </div>
</div>

                        </div>
                    </div>
                </div>
            </section>


            <div className="flex flex-col items-center text-center py-5 px-2 md:px-20">
  <div className="text-3xl md:text-5xl font-bold tracking-normal w-full mb-6">
    <h1>Strategic Partners</h1>
  </div>
  <div className="flex justify-between align-middle phone:justify-center phone:gap-1  flex-wrap items-center gap-4 w-full overflow-x-auto px-24 tablet:px-12 phone:gap-5 phone:px-0 " id="img-section">
    <img src={str1img} alt="Strategic Partner 1" className="h-20 w-20 sm:h-36 sm:w-36 md:h-36 md:w-36 lg:h-52 lg:w-52 object-contain" />
    <img src={str2img} alt="Strategic Partner 2" className="h-20 w-20 sm:h-36 sm:w-36 md:h-36 md:w-36 lg:h-52 lg:w-52 object-contain" />
    <img src={str3img} alt="Strategic Partner 3" className="h-20 w-20 sm:h-36 sm:w-36 md:h-36 md:w-36 lg:h-52 lg:w-52 object-contain" />
    <img src={str4img} alt="Strategic Partner 4" className="h-20 w-20 sm:h-36 sm:w-36 md:h-36 md:w-36 lg:h-52 lg:w-52 object-contain" />
  </div>
</div>






        </>
    )
}

export default Roadmap