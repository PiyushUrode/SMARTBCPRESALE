import React from 'react'
import "../App.css"
import arrowleft from "../Images/usecase/arrow1.svg"
import arrowright from "../Images/usecase/arrow2.svg"


const Roadmap = () => {
    return (
        <>
            <div className='flex flex-row tablet:flex-col justify-center py-5 p-2 phone:py-5   '>
                <div className='flex flex-col w-full justify-center align-middle phone:w-full gap-10 phone:gap-4 py-5 px-5 '>
                    <div className='flex flex-col gap-1 w-full justify-center align-middle  text-center '>
                        <h1 className=' text-h1 phone:text-h3 ibold -tracking-normal w-[100%] leading-tight tablet:align-middle '>
                            RoadMap  <span className='text-gradient'>  </span>
                        </h1>

                    </div>
                    <div className='w-full justify-center align-middle  text-center flex '>
                        <p className='text-p font-p w-[50%]  tablet:w-full px-5 py-2 phone:py-1  '>
                            Step by step, our roadmap guides you through discovery, planning, design, development, deployment, and ongoing maintenance, ensuring transparency and progress every step of the way.
                        </p>
                    </div>

                </div>

            </div>




            {/* copy */}
            <section id="Roadmap">
                <div
                    id="about-main"
                    className="bg-[url('/bgimgblackwave.svg')] bg-opacity-[0.8] relative flex gap-16 flex-col min-h-[100vh] px-10 py-10 tablet:px-3 2xl:py-[3vw] 2xl:px-[3vw] 2xl:gap-[4vw]"
                >
                    <div>
                        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid 2xl:p-[1vw]">
                            {/* First Roadmap Item */}
                            <div className="flex md:contents flex-row-reverse">
                                <div className="h-fit relative flex tablet:flex-col max-w-[35rem] my-10 tablet:my-5 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal 2xl:max-w-[36.5vw] 2xl:my-[3vw] z-10">
                                    <div style={{
                                        background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
                                    }} className="h-fit w-fit text-4xl px-4 py-5 rounded-s-full tablet:rounded-t-full  my-3 2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]">
                                        01
                                    </div>
                                    <div className="h-fit flex flex-col gap-5 rounded-xl roadmap-shadow tracking-wider border-2 p-6 2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]">
                                        <p className="leading-6 font-bold text-xl 2xl:text-[1.3vw]">Phase 1: Pre-Launch (2024) </p>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">Conduct market research and finalize the tokenomics structure.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">Develop and test the Smart BC Token on the BEP-20 network.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">Build a dedicated project website and establish a social media presence.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">Assemble the core team and advisors.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">Conduct community outreach to generate interest and gather feedback.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div className="w-[0.4rem] h-full bg-indigo-300 rounded-t-full 2xl:w-[0.4vw]" style={{
                                            background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
                                        }}></div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3 top-1/2 -left-4 rotate-180 tablet:left-4 tablet:rotate-0 2xl:w-[1.5vw] 2xl:h-[1.5vw] 2xl:left-[-1.3vw]">
                                        <img src={arrowleft} alt="" className="w-full h-full" />
                                    </div>
                                </div>
                            </div>

                            {/* Second Roadmap Item */}
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
                                    <div style={{
                                        background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
                                    }} className="h-fit w-fit text-4xl px-4 py-5 rounded-e-full tablet:rounded-t-full bg-gradient-to-tr    ml-[1px] my-3 2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]">
                                        02
                                    </div>
                                    <div className="flex flex-col gap-5 rounded-xl roadmap-shadow border-2 tracking-wider p-6 2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]">
                                        <p className="leading-6 font-bold text-xl 2xl:text-[1.3vw]">Phase 2: Token Launch (2024)</p>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">Officially launch the Smart BC Token (SBC).</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">Initiate the public sale of SBC tokens (40% allocation).</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">Launch marketing campaigns to raise awareness and attract investors.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">List SBC on select cryptocurrency exchanges for trading.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">Begin building partnerships within the blockchain and crypto space.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div className="flex md:contents flex-row-reverse">
                                <div className="h-fit relative flex tablet:flex-col max-w-[35rem] my-10 tablet:my-5 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal 2xl:max-w-[36.5vw] 2xl:my-[3vw] z-10">
                                    <div style={{
                                        background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
                                    }} className="h-fit w-fit text-4xl px-4 py-5 rounded-s-full tablet:rounded-t-full bg-gradient-to-bl  my-3 2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]">03</div>
                                    <div className="Sregular h-fit flex flex-col gap-5 rounded-xl roadmap-shadow tracking-wider border-2 p-6 2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]">
                                        <p className="leading-6 font-bold text-xl 2xl:text-[1.3vw]">Phase 3: Ecosystem Development (2024) </p>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex gap-2">
                                                <p className="font-bold">✧</p>
                                                <p className="2xl:text-[1.12vw]">Launch staking platform, allowing users to earn rewards by staking SBC tokens.</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <p className="font-bold">✧</p>
                                                <p className="2xl:text-[1.12vw]">Develop and launch the NFT marketplace for creating and trading digital assets.</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <p className="font-bold">✧</p>
                                                <p className="2xl:text-[1.12vw]">Initiate community governance features to involve users in decision-making processes.</p>
                                            </div>
                                            <div className="flex gap-2">
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
                                    <div className="absolute w-6 h-6 -mt-3 top-1/2 -left-4 rotate-180 tablet:left-4 tablet:rotate-0 2xl:w-[1.5vw] 2xl:h-[1.5vw] 2xl:left-[-1.3vw]">
                                        <img src={arrowleft} alt="" className="w-full h-full" />
                                    </div>
                                </div>
                            </div>

                            {/* fouth */}
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
                                    <div style={{
                                        background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
                                    }} className="h-fit w-fit text-4xl px-4 py-5 rounded-e-full tablet:rounded-t-full bg-gradient-to-tr    ml-[1px] my-3 2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]">
                                        04
                                    </div>
                                    <div className="flex flex-col gap-5 rounded-xl roadmap-shadow border-2 tracking-wider p-6 2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]">
                                        <p className="leading-6 font-bold text-xl 2xl:text-[1.3vw]">Phase 4: Expansion and Utility (2024) </p>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">Officially launch the Smart BC Token (SBC).</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">Initiate the public sale of SBC tokens (40% allocation).</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">Launch marketing campaigns to raise awareness and attract investors.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">List SBC on select cryptocurrency exchanges for trading.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">Begin building partnerships within the blockchain and crypto space.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* fifth */}
                            <div className="flex md:contents flex-row-reverse">
                                <div className="h-fit relative flex tablet:flex-col max-w-[35rem] my-10 tablet:my-5 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal 2xl:max-w-[36.5vw] 2xl:my-[3vw] z-10">
                                    <div style={{
                                        background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
                                    }} className="h-fit w-fit text-4xl px-4 py-5 rounded-s-full tablet:rounded-t-full bg-gradient-to-bl  my-3 2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]">05</div>
                                    <div className="Sregular h-fit flex flex-col gap-5 rounded-xl roadmap-shadow tracking-wider border-2 p-6 2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]">
                                        <p className="leading-6 font-bold text-xl 2xl:text-[1.3vw]">Phase 5: Own Blockchain Development (2025)</p>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <div><span className="uppercase Sbold">Crypto Exchange Launch :</span><span className="2xl:text-[1.12vw]">Launching a multi-feature Crypto Exchange with advanced AI technology.</span></div>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <div><span className="uppercase Sbold">App Platform Launch :</span><span className="2xl:text-[1.12vw]">Platform goes live with the initial phase, integrating blockchain-based solutions.</span></div>
                                        </div>
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
                                    <div style={{
    background: "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0 0 0) 7%, rgb(98, 196, 177) 25%, rgb(102, 189, 168) 29%, rgb(26, 49, 42) 94%, rgb(23, 41, 35) 100%)"
  }} className="h-fit w-fit text-4xl px-4 py-5 rounded-e-full tablet:rounded-t-full bg-gradient-to-tr    ml-[1px] my-3 2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]">
                                        06
                                    </div>
                                    <div className="flex flex-col gap-5 rounded-xl roadmap-shadow border-2 tracking-wider p-6 2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]">
                                        <p className="leading-6 font-bold text-xl 2xl:text-[1.3vw]">Phase 6: Long-term Growth and Sustainability
                                        (2026+) </p>
                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">
                                            Continuously improve and upgrade the SBC ecosystem based on user feedback and market trends.


</p>
                                        </div>

                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">
                                            Explore collaborations with other blockchain projects and enterprises to enhance utility.</p>
                                        </div>


                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">
                                            Implement long-term sustainability practices to maintain the value of SBC.</p>
                                        </div>



                                        <div className="flex gap-2">
                                            <p className="font-bold">✧</p>
                                            <p className="2xl:text-[1.12vw]">
                                            Expand community outreach and educational initiatives to onboard new users into the ecosystem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Roadmap