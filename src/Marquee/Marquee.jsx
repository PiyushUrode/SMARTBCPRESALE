import React from "react";
import MarqueeItem from "../Marquee/Marqueeitem.jsx";
// Import images directly
import Logo1 from "../Images/headericon/Logo-a.svg";
import Logo2 from "../Images/headericon/Logo-b.svg";
import Logo3 from "../Images/headericon/Logo-c.svg";
import Logo4 from "../Images/headericon/Logo-d.svg";
import Logo5 from "../Images/headericon/Logo-e.svg";

const Marquee = () => {
  const upperMarquee = [
    Logo1, Logo2, Logo3, Logo4, Logo5,
    Logo1, Logo2, Logo3, Logo4, Logo5,


  ];

  return (
    <div className="container mx-auto   bg-custom-gradient overflow-hidden">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
    </div>
  );
};

export default Marquee;
