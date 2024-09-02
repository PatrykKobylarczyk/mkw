
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import project1 from "../assets/project-1.jpeg";
import project2 from "../assets/project-2.jpeg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";
import project5 from "../assets/project-5.jpeg";
import project6 from "../assets/project-6.jpeg";
import project7 from "../assets/project-7.jpeg";

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

const Project = ({ title, image }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue cursor-pointer`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div className="relative" variants={projectVariant}>
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7 text-xs sm:text-lg">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
      </div>
      <Image src={image} alt={title} width={400} height={400}/>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-32 pb-32 min-h-screen">
      {/* HEADINGS */}

      <motion.div
        className="md:w-2/5"
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
          <p className="font-playfair font-semibold text-4xl ">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
          </div>
        </div>
        <p className="mt-10 mb-10">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center ">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div className="flex justify-center items-center text-center p-10 bg-red max-w-[400px] aspect-square max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" image={project1}/>
          <Project title="Project 2" image={project2}/>

          {/* ROW 2 */}
          <Project title="Project 3" image={project3}/>
          <Project title="Project 4" image={project4}/>
          <Project title="Project 5" image={project5}/>

          {/* ROW 3 */}
          <Project title="Project 6" image={project6}/>
          <Project title="Project 7" image={project7}/>
          <div className="flex justify-center items-center text-center p-10 bg-blue max-w-[400px] aspect-square max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
