"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import person1 from "../assets/mk.jpg";
import person2 from "../assets/mk.jpg";
import Separator from "./Separator";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Person = ({ name, title, description, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const isHoveredValue = useMotionValue(0); // Motion value for hover state
  const opacity = useTransform(isHoveredValue, [0, 1], [0, 0.8]); // Map hover state to opacity

  const handleMouseMove = (event) => {
    const imageSize = 200; // Połowa szerokości i wysokości obrazu (200px szerokości, 200px wysokości)
    x.set(event.clientX - 200);
    y.set(event.clientY - 300);
  };

  // Update isHoveredValue based on isHovered state
  useEffect(() => {
    isHoveredValue.set(isHovered ? 1 : 0);
  }, [isHovered, isHoveredValue]);

  return (
    <div
      className="relative flex flex-col md:flex-row items-start justify-between w-[65%] py-24 mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.h3
        className={`${playfair.className} text-2xl font-bold text-gray-900 md:text-left md:w-1/4`}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {name}
      </motion.h3>
      <motion.div
        className="text-gray-700 md:w-2/3 md:text-left"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="uppercase mb-8"
          //   initial={{ x: 50, opacity: 0 }}
          //   animate={{ x: 0, opacity: 1 }}
          //   transition={{ duration: 0.5 }}
        >
          {title}
        </motion.p>
        <motion.p
          className=""
          //   initial={{ x: 50, opacity: 0 }}
          //   animate={{ x: 0, opacity: 1 }}
          //   transition={{ duration: 0.5 }}
        >
          {description}
        </motion.p>
      </motion.div>

      {isHovered && (
        <motion.div
          className="absolute pointer-events-none"
          style={{ x, y, opacity }}
        >
          <Image
            src={imageSrc}
            alt={`Zdjęcie ${name}`}
            width={200}
            height={400}
            className="object-cover shadow-lg"
          />
        </motion.div>
      )}
    </div>
  );
};

const AboutUs = () => {
  return (
    <section className="max-w-[90vw] mx-auto py-20 ">
      <div className="w-full text-center uppercase my-24 space-y-7">
        <h2 className={`${playfair.className} w-full text-8xl`}>o nas</h2>
        <p className={` w-full text-[.7vw] `}>
          Adwokat i radca prawny to duet idealny.
        </p>
      </div>
      <Separator />
      <Person
        name="Monika Kujawa"
        title="Adwokat"
        description="Jest adwokatem z kilkunastoletnim stażem. Ukończyła studia prawnicze na Wydziale
Prawa i Administracji Uniwersytetu Łódzkiego w 2005 roku. W latach 2006 – 2010 odbyła aplikację
adwokacką przy Okręgowej Radzie Adwokackiej w Łodzi, zakończoną pozytywnym wynikiem egzaminu
zawodowego. Ma doświadczenie w pracy w działach prawnych banków, stąd doskonale czuje się w
prowadzeniu negocjacji i rozmów ugodowych z tymi podmiotami. Jednak jako adwokat spełnia się przede
wszystkim prowadząc sprawy rodzinne, zawsze kierując się zrozumieniem i empatią wobec swoich
Klientów. Prowadzi również sprawy spadkowe, cywilne, karne i gospodarcze."
        imageSrc={person1}
      />
      <Separator />
      <Person
        name="Magdalena Kopera"
        title="Radca prawny"
        description="Jest radcą prawnym prowadzącym działalność prawniczą od 2018 roku. Ukończyła
studia prawnicze na Wydziale Prawa i Administracji Uniwersytetu Łódzkiego w 2005 roku 2014 roku. W
latach 2015 – 2017 odbyła aplikację adwokacką przy Okręgowej Izbie Radców Prawnych w Łodzi,
zakończoną pozytywnym wynikiem egzaminu zawodowego. Ma doświadczenie w obsłudze prawnej,
jednak najlepiej czuje się jako prawnik procesowy, reprezentując swoich Klientów w sporach przed
sądami. Najważniejsze w pracy radcy prawnego jest dla niej komunikacja z Klientem oraz osobiste
zaangażowanie w każdą z prowadzonych spraw. Specjalizuje się w sprawach cywilnych i gospodarczych,
w szczególności w zakresie dochodzenia należności, w sporach z bankami oraz w sprawach
odszkodowawczych. Prowadzi również sprawy spadkowe, rodzinne i karne."
        imageSrc={person2}
      />
      <Separator />
    </section>
  );
};

export default AboutUs;
