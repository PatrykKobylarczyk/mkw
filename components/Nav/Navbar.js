"use client";
import React, { useEffect, useState } from "react";
import Link from "react-anchor-link-smooth-scroll";
// import Link from "next/link";
import useMediaQuery from "../../hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import { navbarData } from "@/data/NavbarData";

import { Roboto, Playfair_Display } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});
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
      className={`${selectedPage === lowerCasePage ? "text-yellow-500" : ""}
        hover:text-yellow-500 transition duration-500 ${
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

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-pink";

  return (
    <div className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="mx-auto w-5/6 ">
        {/* DESKTOP NAV */}

        <div className="flex items-center justify-between mx-auto w-full ">
          <h4 className={`${playfair.className} text-3xl font-bold `}>MK</h4>

          {isAboveSmallScreens ? (
            <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
              {navbarData.map(({ page, id }) => (
                <PageLink
                  key={id}
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
          ) : (
            <button className="rounded-full bg-red p-2 z-50">
              <Hamburger
                toggled={isMenuToggled}
                toggle={() => setIsMenuToggled((prev) => !prev)}
                size={16}
              />
            </button>
          )}
        </div>

        {/* MOBILE MENU POPUP */}
        <AnimatePresence mode="wait">
          {!isAboveSmallScreens && isMenuToggled && (
            <motion.div
              className="fixed right-0 bottom-0 h-screen flex justify-center items-center bg-white w-full"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ ease: "easeInOut" }}
            >
              {/* MENU ITEMS */}
              <div className="flex flex-col gap-10 text-xl text-black">
                {navbarData.map(({ page, id }) => (
                  <PageLink
                    page={page}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
