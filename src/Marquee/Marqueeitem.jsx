import React from "react";
import { motion } from "framer-motion";

// Import images directly
import Logo1 from "../Images/headericon/Logo-a.svg";
import Logo2 from "../Images/headericon/Logo-b.svg";
import Logo3 from "../Images/headericon/Logo-c.svg";
import Logo4 from "../Images/headericon/Logo-d.svg";
import Logo5 from "../Images/headericon/Logo-e.svg";

const images = [Logo1, Logo2, Logo3, Logo4, Logo5];

const MarqueeItem = () => {
  return (
    <div className="overflow-hidden bg-custom-gradient py-5">
      <motion.div
        className="flex justify-around gap-36 self-center"
        initial={{ x: 0 }}
        animate={{ x: -1000 }} // Adjust this based on the total width of images
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Duplicate the array to create a seamless loop */}
        {[...images, ...images].map((image, index) => (
          <img className="h-fit w-full align-middle justify-center" src={image} alt={`logo-${index}`} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
