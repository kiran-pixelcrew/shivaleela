import Image from "next/image";
import React from "react";
import Shanthala from "@/assets/Shantala.png";

function PerformingTeam() {
  return (
    <div id="events" className="py-10 md:py-20">
      <div className="w-full mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-serif">
          Talented Performing Team
        </h2>
        <p className="leading-loose text-justify pt-6 md:pt-8 text-base md:text-lg text-gray-700">
          Shivaleela Cultural Trust boasts a dedicated team of professional
          artists with over 12 years of national and international stage
          excellence. Led by our visionary founder and supported by esteemed
          board members, each performer brings specialized mastery in
          Bharatanatyam, Kathak, Yakshagana, and folk forms. Our choreographers
          craft innovative productions like Punyakoti and Jai Jaganmathe,
          blending tradition with fresh storytelling. Highly trained dancers
          ensure every mudra and expression resonates deeply with audiences.
          This talented collective not only performs but mentors the next
          generation through Abhyasa classes. Their credentials—prestigious
          festival appearances and critical acclaim—build unbreakable trust.
          Meet the faces behind the footwork that captivates rasikas worldwide.
        </p>
      </div>

      <div className="w-full px-6 md:px-12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pt-10">
        <Image src={Shanthala} alt="Guru Shantala" className="w-full h-auto rounded-lg" priority />
        <Image src={Shanthala} alt="Guru Shantala" className="w-full h-auto rounded-lg" priority />
        <Image src={Shanthala} alt="Guru Shantala" className="w-full h-auto rounded-lg" priority />
        <Image src={Shanthala} alt="Guru Shantala" className="w-full h-auto rounded-lg" priority />
        <Image src={Shanthala} alt="Guru Shantala" className="w-full h-auto rounded-lg" priority />
        <Image src={Shanthala} alt="Guru Shantala" className="w-full h-auto rounded-lg" priority />
        <Image src={Shanthala} alt="Guru Shantala" className="w-full h-auto rounded-lg" priority />
        <Image src={Shanthala} alt="Guru Shantala" className="w-full h-auto rounded-lg" priority />
      </div>
    </div>
  );
}

export default PerformingTeam;