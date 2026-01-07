import Image from "next/image";
import React from "react";
import Shanthala from "@/assets/Shantala.png"

function PerformingTeam() {
  return (
    <div id="events">
      {/* <div className="bg-sky-100 h-36 flex w-full justify-center">
        <div className="bg-red-100 w-4/5 h-full"></div>
      </div> */}
      <div className="w-11/12 pt-26 mx-auto">
        <span className=" text-5xl font-serif">Talented Performing Team</span>
        <p className="leading-loose pt-8">
          Shivaleela Cultural Trust boasts a dedicated team of professional
          artists with over 12 years of national and international stage
          excellence. Led by our visionary founder and supported by esteemed
          board members, each performer brings specialized mastery in
          Bharatanatyam, Kathak, Yakshagana, and folk forms. Our chatergraphers
          craft innovative productions like Punyakoti and Jai Jaganmathe,
          blending tradition with fresh storytelling. Highly trained dancers
          ensure every mudra and expression resonates deeply with audiences.
          This talented collective not only performs but mentors the next
          generation through Abhyasa classes. Their credentials-prestigious
          festival appearances and critical acclaim-build unbreakable trust.
          Meet the faces behind the footwork that captivates rasikas worldwide.
        </p>
      </div>
      <div className="grid grid-rows-2 grid-cols-4 mx-auto w-11/12 gap-x-4 gap-y-6 pt-6">
        <Image src={Shanthala} alt="Guru Shantala" priority />
        <Image src={Shanthala} alt="Guru Shantala" priority />
        <Image src={Shanthala} alt="Guru Shantala" priority />
        <Image src={Shanthala} alt="Guru Shantala" priority />
        <Image src={Shanthala} alt="Guru Shantala" priority />
        <Image src={Shanthala} alt="Guru Shantala" priority />
        <Image src={Shanthala} alt="Guru Shantala" priority />
        <Image src={Shanthala} alt="Guru Shantala" priority />
      </div>
    </div>
  );
}

export default PerformingTeam;
