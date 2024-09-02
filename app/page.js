'use client'
import Projects from "@/components/Projects";
import SectionLogo from "@/components/SectionLogo";
import useMediaQuery from "@/hooks/useMediaQuery";
import { getBlogPosts } from "@/lib/getPosts";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { useEffect } from "react";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

// const posts = await getBlogPosts()
// useEffect(()=>{console.log(posts)},[posts])

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
      <SectionLogo/>
      <div className="w-5/6 mx-auto">
          <motion.div onViewportEnter={() => setSelectedPage("projects")}>
            <Projects />
          </motion.div>
        </div>
    </main>
  );
}
