import React from "react";
import { HiOutlinePhone } from "react-icons/hi2";
import { IoMailOpenOutline } from "react-icons/io5";
import { Raleway } from "next/font/google";
import ContactForm from "./ContactForm";
import Map from "./GoogleMap";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Contact = () => {
  return (
    <section
      className={`w-full mt-[10vw] flex min-h-96 bg-[#2D2D2D] ${raleway.className}`}
    >
      <div className="w-1/2 p-[10vw]">
        <div className="mb-8">
          <p className="text-[#BC9555] text-[.9vw]">Kancelaria Adokacka</p>
          <span className="w-[16vw] h-[.5px] bg-[#BC9555] block my-3"></span>
          <h3 className="text-[#BFBEBE] text-[1.3vw] mb-2 font-medium">
            Monika Kujawa
          </h3>
          <div className="flex">
            <HiOutlinePhone className="translate-y-1 mr-3" />
            <a href="tel:+48513023684">+48 513023684 </a>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-[#BC9555] text-[.9vw]">
            Kancelaria Radcy Prawnego
          </p>
          <span className="w-[16vw] h-[.5px] bg-[#BC9555] block my-3"></span>
          <h3 className="text-[#BFBEBE] text-[1.3vw] mb-2 font-medium">
            Magdalena Kopera
          </h3>
          <div className="flex">
            <HiOutlinePhone className="translate-y-1 mr-3" />
            <a href="tel:+48513023684">+48 600709094 </a>
          </div>
        </div>
        <div className="flex">
          <IoMailOpenOutline className="translate-y-1 mr-3" />
          <a href="mailto:mk@gmail.com" className="mb-8 text-[.9vw]">
            mk@gmail.com
          </a>
        </div>
        <div className="text-[.9vw] mb-2 font-medium">
          <p>ul. Tuwima 71 lok. 7</p>
          <p>90-031 Łódź</p>
        </div>
      </div>
      <div className="w-1/2 p-[10vw]">
        <h2 className="text-[2vw] font-medium">Czekamy na Twoja wiadomość</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
