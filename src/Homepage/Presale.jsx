import React from 'react';

const Presale = () => {
  const contractAddress = "0x9c7D28286B936C69Da1642e7c5Ad12B4AF94FE07";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).catch(() => {
      // Silently handle any error without displaying it
    });
  };

  return (
    <div className="flex flex-col text-center gap-5 align-middle justify-center w-full px-5 py-20" id='contract' >
      <h1 className="text-4xl sm:text-5xl md:text-6xl py-5 font-bold tracking-normal w-full leading-tight">
        Contract <span className="text-gradient">Address</span>
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-normal w-full leading-tight">
        {contractAddress}
      </h2>
      <div className="w-full flex align-middle justify-center">
        <button
          className="text-base sm:text-lg md:text-xl font-semibold border-customTeal rounded-2xl text-white px-4 py-2 border-2 hover:bg-customTealhover hover:text-black"
          onClick={handleCopy}
        >
          Copy Address
        </button>
      </div>
    </div>
  );
};

export default Presale;
