import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "../Style/FlipSlider.css"
// import { Link } from "react-router-dom";
import React from 'react'
import Slider1 from "../Images/logo.png"
import video1 from '../Images/video1.mp4'; // Replace with your video file path





const Flipslider = () => {
    return (
        <>

            <div className='w-full h-1/2 py-20 '  >

                <Swiper
                    // spaceBetween={50}
                    slidesPerView={2}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className='h-[40vh] '
                >




                    {/* here change */}
                   

                    <SwiperSlide>
                        <div className="flip-card-container flex justify-center   ">
                            <div className="flip-card   ">
                                {/* Image Side */}
                                <div className="flip-card-image ">
                                <video autoPlay muted loop >
                    <source src={video1} className='max-w-[100%] w-[100vw] h-[35vh]' type="video/mp4"  />
                    Your browser does not support the video tag.
                  </video>
                                </div>
                                {/* Content Side */}
                                <div className="flip-card-content   flex flex-col justify-center items-center bg-[#16151D] rounded-3xl p-5 space-y-5">
                                    <h2 className="text-5xl tablet:text-3xl font-bold">BitEdutech</h2>
                                    <p className="text-base tablet:text-sm">Platform for tech enthusiasts to shape their career with future technologies.</p>
                                    <p className="text-base tablet:text-sm">Platform for tech enthusiasts to shape their career with future technologies.</p>
                                    <button className="ourproduct-features1-btn">Explore</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="flip-card-container flex justify-center ">
                            <div className="flip-card   ">
                                {/* Image Side */}
                                <div className="flip-card-image ">
                                <video autoPlay muted loop >
                    <source src={video1} className='max-w-[100%] w-[100vw] h-[35vh]' type="video/mp4"  />
                    Your browser does not support the video tag.
                  </video>
                                </div>
                                {/* Content Side */}
                                <div className="flip-card-content   flex flex-col justify-center items-center bg-[#16151D] rounded-3xl p-5 space-y-5">
                                    <h2 className="text-5xl tablet:text-3xl font-bold">BitEdutech</h2>
                                    <p className="text-base tablet:text-sm">Platform for tech enthusiasts to shape their career with future technologies.</p>
                                    <p className="text-base tablet:text-sm">Platform for tech enthusiasts to shape their career with future technologies.</p>
                                    <button className="ourproduct-features1-btn">Explore</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>





                    <SwiperSlide>
                        <div className="flip-card-container flex justify-center ">
                            <div className="flip-card   ">
                                {/* Image Side */}
                                <div className="flip-card-image ">
                                <video autoPlay muted loop >
                    <source src={video1} className='max-w-[100%] w-[100vw] h-[35vh]' type="video/mp4"  />
                    Your browser does not support the video tag.
                  </video>
                                </div>
                                {/* Content Side */}
                                <div className="flip-card-content   flex flex-col justify-center items-center bg-[#16151D] rounded-3xl p-5 space-y-5">
                                    <h2 className="text-5xl tablet:text-3xl font-bold">BitEdutech</h2>
                                    <p className="text-base tablet:text-sm">Platform for tech enthusiasts to shape their career with future technologies.</p>
                                    <p className="text-base tablet:text-sm">Platform for tech enthusiasts to shape their career with future technologies.</p>
                                    <button className="ourproduct-features1-btn">Explore</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>






                    <SwiperSlide>
                        <div className="flip-card-container flex justify-center">
                            <div className="flip-card">
                                {/* Image Side */}
                                <div className="flip-card-image">
                                <video autoPlay muted loop>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                                </div>
                                {/* Content Side */}
                                <div className="flip-card-content flex flex-col justify-center items-center bg-[#16151D] rounded-3xl p-5 space-y-5">
                                    <h2 className="text-5xl tablet:text-3xl font-bold">BitEdutech</h2>
                                    <p className="text-base tablet:text-sm">Platform for tech enthusiasts to shape their career with future technologies.</p>
                                    <button className="ourproduct-features1-btn">Explore</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
















                </Swiper>
            </div>

        </>



    )
}

export default Flipslider