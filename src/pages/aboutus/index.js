import React from "react";
import Navbarr from "../../component/navbar";
import Gambar1 from "../../gambar/gambar1.jpeg";
import Gambar2 from "../../gambar/gambar2.jpeg";

const About = () => {
  return (
    <>
      <div>
        <Navbarr />
      </div>
      <div>
        <img className="w-full" src={Gambar1} alt="gambar1" />
      </div>
      <div className="text-center mt-10">
        <h1 className="text-4xl text-[#ea580c] font-bold">SINTELIS MUARA ENIM</h1>
        <h3 className="text-xl text-[#1e3a8a] font-semibold">Zero Accident !!!</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="ml-40 mt-20">
          <img className="w-72" src={Gambar2} alt="gambar2" />
        </div>
        <div className="mt-20 mr-40 col-span-2">
          <h1 className="text-2xl text-[#ea580c] font-bold">We Growth Together</h1>
          <h3 className="text-l text-[#1e3a8a] font-semibold">
            Kita mungkin bisa tumbuh sendiri-sendiri, tetapi tumbuh bersama adalah lebih baik. Saat kita berbagi pengalaman, kebahagiaan, dan kesulitan dengan orang lain, kita bisa belajar dan tumbuh bersama-sama. Jadilah seseorang yang
            selalu siap untuk tumbuh bersama dengan orang-orang di sekitarmu, dan bersama-sama kita bisa mencapai keberhasilan yang lebih besar daripada yang kita bisa lakukan sendirian
          </h3>
        </div>
      </div>
    </>
  );
};

export default About;
