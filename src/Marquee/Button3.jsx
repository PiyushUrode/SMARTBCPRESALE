import React from 'react';

const Button3 = ({ leftText, rightText }) => {
  return (
    <div className='flex flex-row align-middle w-full px-5 py-5'>
      {/* <button className="relative px-5 py-2 phone:px-1 phone:py-1 border-2 border-[#00ffbf92] text-base cursor-pointer bg-black/30 overflow-hidden shadow-[inset_0_0_15px_7px_rgba(0,255,192,0.5)]
 
        [clip-path:polygon(92%_0%,100%_33%,100%_100%,6%_100%,0%_75%,0%_0%)] flex justify-between items-center text-white w-[300px] h-[60px] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(0,255,192,0.5),inset_0_0_15px_15px_rgba(0,255,192,0.5)]">
          <div className='flex justify-center flex-row items-center gap-5 h-15 w-1/2 border border-white rounded-full'>  
        <div className='w-2/5 h-15 bg-gradient-to-r from-[#64b3f4] to-[#c2e59c] flex justify-center items-center rounded-full'>
        <span className="z-10">{leftText}</span>
          
           </div>
        <div className='w-3/5 h-20 flex justify-center items-center text-white'> 

        <span className="ml-auto z-10">{rightText}</span>

        </div>
        </div>
      </button> */}
      <button className="relative px-3 py-3 phone:px-1 phone:py-1  text-base cursor-pointer 
         flex items-center text-black w-[300px] h-[60px] transition-all duration-300 ease-in-out hover:rounded-full hover:shadow-[0_0_15px_rgba(0,255,192,0.8),inset_0_0_15px_15px_rgba(0,255,192,0.5)]">

        {/* Left side with gradient */}
        <div className="w-1/2 h-full bg-gradient-to-r from-[#88fade] to-[#88faddae] border-2 border-[#00fff736]  flex items-center justify-center rounded-l-full">
          <span className="text-black z-10">{leftText}</span>
        </div>

        {/* Right side with dark background */}
        <div className="w-1/2 h-full bg-black flex items-center justify-center rounded-r-full">
          <span className="text-white z-10">{rightText}</span>
        </div>

      </button>

    </div>
  );
};

export default Button3;
