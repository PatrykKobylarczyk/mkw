import React from "react";
import { Playfair_Display } from "next/font/google";
import { navbarData } from "@/data/NavbarData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

const PageLink = ({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
}) => {
  const lowerCasePage = page?.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      className={`${selectedPage === lowerCasePage ? "text-[#BC9555]" : ""}
        hover:text-[#BC9555] transition duration-500 ${
          roboto.className
        } uppercase font-normal`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        // setIsMenuToggled(false);
      }}
    >
      {page}
    </Link>
  );
};

const Footer = () => {
  return (
    <section className="w-full h-[50vh] px-[10vw] py-[2vw] flex">
      <h4 className={`${playfair.className} text-3xl font-bold text-white`}>
        MK
      </h4>
    </section>
  );
};

export default Footer;
