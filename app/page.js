"use client";
import Projects from "@/components/Projects";
import SectionLogo from "@/components/SectionLogo";
import useMediaQuery from "@/hooks/useMediaQuery";
import { getBlogPosts } from "@/lib/getPosts";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutUs from "@/components/About";
// import { useEffect } from "react";
import Title from "@/components/Title";
import Contact from "@/components/Contact";
import GoogleMap from "@/components/GoogleMap";
import Title2 from "@/components/Titile2";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  // const posts = await getBlogPosts()
  // useEffect(()=>{console.log(posts)},[posts])

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full ">
      {/* Home */}
      <SectionLogo />

      {/* O nas */}
      <Title text="O Nas" />
      <AboutUs />

      {/* zakres spraw */}
      <div className="pt-[15vw] md:pt-[5vw]">
        {isAboveSmallScreens ? (
          <Title text="Zakres spraw" />
        ) : (
          <Title2 text="Zakres spraw" />
        )}
      </div>
      <div className="w-full mb-[10vw]">
        <motion.div onViewportEnter={() => setSelectedPage("projects")}>
          <Projects />
        </motion.div>
      </div>

      {/* kontakt */}
      <Title text="Kontakt" />
      <Contact />
      <div className="w-full h-[70vh] bg-black">
        <GoogleMap />
      </div>
    </main>
  );
}
