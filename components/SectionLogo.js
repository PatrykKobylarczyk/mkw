import React from "react";

const SectionLogo = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center mb-[15vw]">
      <h1 className="text-[15vw] md:text-[8vw] font-bold text-[#FFF]">MK</h1>
      <p className="font-light text-[4vw] md:text-[1.3vw]">
        Monika Kujawa - Adwokat
      </p>
      <p className="font-light text-[4vw] md:text-[1.3vw]">
        Magdalena Kopera - Radca Prawny
      </p>
      <div className="absolute bottom-[5vw] left-1/2 -translate-x-1/1 ">
        <svg
          className="scroller"
          width="8"
          height="49"
          viewBox="0 0 8 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.64645 48.3536C3.84171 48.5488 4.15829 48.5488 4.35356 48.3536L7.53554 45.1716C7.7308 44.9763 7.7308 44.6597 7.53554 44.4645C7.34027 44.2692 7.02369 44.2692 6.82843 44.4645L4 47.2929L1.17157 44.4645C0.976313 44.2692 0.65973 44.2692 0.464468 44.4645C0.269206 44.6597 0.269206 44.9763 0.464468 45.1716L3.64645 48.3536ZM3.5 2.18557e-08L3.5 48L4.5 48L4.5 -2.18557e-08L3.5 2.18557e-08Z"
            fill="#BC9555"
          />
        </svg>
      </div>
    </section>
  );
};

export default SectionLogo;
