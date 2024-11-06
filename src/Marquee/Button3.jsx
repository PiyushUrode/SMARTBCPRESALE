import React from 'react';

const Button3 = ({ leftText, rightText }) => {
  return (
    <div className='flex flex-row align-middle w-full px-5 py-5'>
      <button className="relative px-5 py-2 phone:px-1 phone:py-1 border-2 border-[#00ffbf92] text-base cursor-pointer bg-black/30 overflow-hidden shadow-[inset_0_0_15px_7px_rgba(0,255,192,0.5)]
 
        [clip-path:polygon(92%_0%,100%_33%,100%_100%,6%_100%,0%_75%,0%_0%)] flex justify-between items-center text-white w-[300px] h-[60px] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(0,255,192,0.5),inset_0_0_15px_15px_rgba(0,255,192,0.5)]">
        <span className="z-10">{leftText}</span>
        <span className="ml-auto z-10">{rightText}</span>
      </button>
    </div>
  );
};

export default Button3;
