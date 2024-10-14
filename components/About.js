"use client";

import Image from "next/image";
import person1 from "../assets/mk.jpg";
import person2 from "../assets/mk.jpg";
import Separator from "./Separator";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const AboutUs = () => {
  return (
    <section
      className={`w-full bg-[#2D2D2D] ${raleway.className} mt-[8vw] mb-[20vw]`}
    >
      {/* Person1 */}
      <div className="flex w-full">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="w-[60%]">
            <h1 className="font-black text-[3vw] wrap">
              <span className="block">Monika</span>
              <span className="block -translate-y-[28%]">Kujawa</span>
            </h1>
            <Separator />
            {/* <p>Adwokat</p> */}
            <p className="py-[2vw] font-thin">
              Jest <span className="text-[#BC9555] font-bold">adwokatem</span> z
              kilkunastoletnim stażem. Ukończyła studia prawnicze na Wydziale
              Prawa i Administracji Uniwersytetu Łódzkiego w 2005 roku. W latach
              2006 – 2010 odbyła aplikację adwokacką przy Okręgowej Radzie
              Adwokackiej w Łodzi, zakończoną pozytywnym wynikiem egzaminu
              zawodowego. Ma doświadczenie w pracy w działach prawnych banków,
              stąd doskonale czuje się w prowadzeniu negocjacji i rozmów
              ugodowych z tymi podmiotami. Jednak jako adwokat spełnia się
              przede wszystkim prowadząc sprawy rodzinne, zawsze kierując się
              zrozumieniem i empatią wobec swoich Klientów. Prowadzi również
              sprawy spadkowe, cywilne, karne i gospodarcze.
            </p>
          </div>
        </div>
        <Image
          src={person1}
          alt={`Zdjęcie Adwokat Moniki Kujawy`}
          width={1280}
          height={1920}
          className="object-cover shadow-lg w-1/2"
        />
      </div>

      {/* Person2 */}
      <div className="flex w-full">
        <Image
          src={person1}
          alt={`Zdjęcie Adwokat Moniki Kujawy`}
          width={1280}
          height={1920}
          className="object-cover shadow-lg w-1/2"
        />
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="w-[60%]">
            <h1 className="font-black text-[3vw] wrap">
              <span className="block">Magdalena </span>
              <span className="block -translate-y-[28%]">Kopera</span>
            </h1>
            <Separator />
            {/* <p>Adwokat</p> */}
            <p className="py-[2vw] font-thin">
              Jest{" "}
              <span className="text-[#BC9555] font-bold">radcą prawnym</span>
              prowadzącym działalność prawniczą od 2018 roku. Ukończyła studia
              prawnicze na Wydziale Prawa i Administracji Uniwersytetu Łódzkiego
              w 2005 roku 2014 roku. W latach 2015 – 2017 odbyła aplikację
              adwokacką przy Okręgowej Izbie Radców Prawnych w Łodzi, zakończoną
              pozytywnym wynikiem egzaminu zawodowego. Ma doświadczenie w
              obsłudze prawnej, jednak najlepiej czuje się jako prawnik
              procesowy, reprezentując swoich Klientów w sporach przed sądami.
              Najważniejsze w pracy radcy prawnego jest dla niej komunikacja z
              Klientem oraz osobiste zaangażowanie w każdą z prowadzonych spraw.
              Specjalizuje się w sprawach cywilnych i gospodarczych, w
              szczególności w zakresie dochodzenia należności, w sporach z
              bankami oraz w sprawach odszkodowawczych. Prowadzi również sprawy
              spadkowe, rodzinne i karne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
