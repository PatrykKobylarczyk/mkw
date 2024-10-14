"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import project3 from "../assets/project-3.jpeg";
import { zakresSpraw } from "../data/ZakresSpraw";
import Link from "next/link";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, thumb, image }) => {
  const overlayStyles = `absolute opacity-100 hover:opacity-70 transition duration-500 bg-grey z-30  text-deep-blue cursor-pointer w-full h-full p-12 box-border`; // Dodano p-4, aby dodać padding wewnątrz kontenera
  const link = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div
      className={`${raleway.className} relative w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] lg:w-[25vw] lg:h-[25vw] border-[#BC9555] border-[.5px] p-5 shadow-md  overflow-hidden`}
      variants={projectVariant}
    >
      <div className={overlayStyles}>
        <div className="w-[22%] h-[22%] bg-[#BC9555] flex justify-center items-center mb-10">
          {/* {image} */}
        </div>
        <p
          className={`text-[5vw] md:text-[2vw] lg:text-[1.2vw] font-bold mb-6 max-w-full text-[#BC9555]`}
        >
          {title}
        </p>
        <div className="max-w-full overflow-hidden ">
          {thumb.map((t, index) => (
            <p
              key={index}
              className=" text-[2vw] md:text-[1.2vw] lg:text-[.9vw] max-w-full font-extralight "
            >
              - {t}
            </p>
          ))}
        </div>
        <Link href={link}>
          <p className="mt-6 text-[2vw] md:text-[1.2vw] lg:text-[.9vw] text-[#BC9555] flex">
            <span>więcej</span>
            <svg
              className="ml-5 translate-y-2"
              width="49"
              height="8"
              viewBox="0 0 49 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48.3536 4.35355C48.5488 4.15829 48.5488 3.84171 48.3536 3.64645L45.1716 0.464466C44.9763 0.269204 44.6597 0.269204 44.4645 0.464466C44.2692 0.659728 44.2692 0.976311 44.4645 1.17157L47.2929 4L44.4645 6.82843C44.2692 7.02369 44.2692 7.34027 44.4645 7.53553C44.6597 7.7308 44.9763 7.7308 45.1716 7.53553L48.3536 4.35355ZM0 4.5L48 4.5V3.5L0 3.5L0 4.5Z"
                fill="#BC9555"
              />
            </svg>
          </p>
        </Link>
      </div>
      {/* <Image src={image} alt={title} width={400} height={400}/> */}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-32 pb-32 min-h-screen">
      {/* HEADINGS */}

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {zakresSpraw.map(({ title, thumb }, index) => (
            <Project key={index} title={title} image={project3} thumb={thumb} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
