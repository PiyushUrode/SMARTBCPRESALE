import React, { useState } from 'react';

const Presale = () => {
  const contractAddress = "0x5DDc0B083d65761d80b0401AB3Ce886dD69c0075";
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopyStatus('Copied to Clipboard !');
      setTimeout(() => setCopyStatus(''), 2000); // Clears the message after 2 seconds
    }).catch(() => {
      setCopyStatus('Copy failed');
    });
  };

  return (
    <>
      <div className="flex flex-col text-center gap-5 align-middle justify-center w-full px-5 py-20" id='contract'>
        <h1 className="text-4xl sm:text-5xl md:text-6xl py-5 font-bold tracking-normal break-words leading-tight">
          Contract <span className="text-gradient">Address</span>
        </h1>
        <p className="text-xl sm:text-3xl font-semibold w-full break-words leading-tight">
          {contractAddress}
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-md mx-auto">
          <button
            className="text-base sm:text-lg md:text-xl font-semibold border-customTeal rounded-2xl text-white px-4 py-2 border-2 hover:bg-customTealhover hover:text-black w-full md:w-1/2"
            onClick={handleCopy}
          >
            Copy Address
          </button>
          <a
            href="https://bscscan.com/token/0x5DDc0B083d65761d80b0401AB3Ce886dD69c0075"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg md:text-xl font-semibold border-customTeal rounded-2xl text-white px-4 py-2 border-2 hover:bg-customTealhover hover:text-black w-full md:w-1/2 text-center"
          >
            BSC Scan
          </a>
        </div>
        {copyStatus && (
          <p className="text-white text-center mt-4">
            {copyStatus}
          </p>
        )}
      </div>
    </>
  );
};

export default Presale;
