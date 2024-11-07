import React from 'react';

const Presale = () => {
  const contractAddress = "0x5DDc0B083d65761d80b0401AB3Ce886dD69c0075";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).catch(() => {
      // Silently handle any error without displaying it
    });
  };

  return (
    <div className="flex flex-col text-center gap-5 align-middle justify-center w-full px-5 py-20 " id='contract' >
      <h1 className="text-4xl sm:text-5xl md:text-6xl py-5 font-bold tracking-normal  break-words leading-tight">
        Contract <span className="text-gradient">Address</span>
      </h1>
      <p className="text-xl flex-wrap sm:text-h3 md:text-3xl font-semibold w-fit break-words tracking-normal w-full leading-tight">
        {contractAddress}
      </p>
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
