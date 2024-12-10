import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Title2 = ({ text }) => {
  return (
    <div
      className={`${raleway.className} relative pb-24 flex items-center ml-[10vw]`}
    >
      <h2 className="absolute text-[#BC9555] text-[16vw] md:text-[10vw] uppercase font-bold opacity-10">
        {text}
      </h2>
      <div className="h-full ml-[5vw] md:ml-[3vw]">
        <p className="text-[#BC9555] text-[5vw] md:text-[3.2vw] font-medium mt-[25vw]">
          {text}
        </p>
        <span className="w-[16vw] h-[.5px] bg-[#BC9555] block"></span>
      </div>
    </div>
  );
};

export default Title2;
