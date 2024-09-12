"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import project3 from "../assets/project-3.jpeg";
import { zakresSpraw } from "../data/ZakresSpraw";
import Link from "next/link";

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
  const overlayStyles = `absolute opacity-100 hover:opacity-70 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-deep-blue cursor-pointer w-full h-full p-4 box-border`; // Dodano p-4, aby dodać padding wewnątrz kontenera
  const link = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div
      className="relative w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] lg:w-[25vw] lg:h-[25vw] bg-white m-3 shadow-md flex justify-center items-center overflow-hidden"
      variants={projectVariant}
    >
      <div className={overlayStyles}>
        <p className="text-[4vw] md:text-lg lg:text-base font-playfair mb-3 max-w-full text-center truncate">
          {title}
        </p>
        <div className="max-w-full overflow-hidden text-center">
          {thumb.map((t, index) => (
            <p
              key={index}
              className="mt-2 text-[2vw] md:text-sm lg:text-xs max-w-full truncate"
            >
              - {t}
            </p>
          ))}
        </div>
        <Link href={link}>
          <p className="mt-4 text-[2vw] md:text-sm lg:text-xs text-blue-600 underline">
            więcej...
          </p>
        </Link>
      </div>
      {/* <Image src={image} alt={title} width={400} height={400}/> */}
    </motion.div>
  );
};

const Separator = () => (
  <div className="w-full h-[0.5px] bg-gray-100 my-4"></div>
);

const Projects = () => {
  return (
    <section id="projects" className="pt-32 pb-32 min-h-screen">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">Zakres spraw</p>
          <div className="flex justify-center mt-5"></div>
        </div>
        <p className="mt-10 mb-10 text-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
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
