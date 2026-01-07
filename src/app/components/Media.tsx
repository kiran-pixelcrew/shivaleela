import Image from "next/image";
import ProductionImage from "@/assets/Productionimage.png";
import React from "react";

function Media() {
  return (
    <div className="w-11/12 h-screen mx-auto pt-24">
      <span className="font-serif text-5xl">Media Outreach</span>
      <p className="leading-loose pt-5">
        Shivaleela Cultural Trust boasts a dedicated team of professional
        artists with over 12 years of national and international stage
        excellence. Led by our visionary founder and supported by esteemed board
        members, each performer brings specialized mastery in Bharatanatyam,
        Kathak, Yakshagana, and folk forms. Our choreographers craft innovative
        productions like Punyakoti and Jai Jaganmathe, blending tradition with
        fresh storytelling. Highly trained dancers ensure every mudra and
        expression resonates deeply with audiences. This talented collective not
        only performs but mentors the next generation through Abhyasa classes.
        Their credentials—prestigious festival appearances and critical
        acclaim—build unbreakable trust. Meet the faces behind the footwork that
        captivates rasikas worldwide.
      </p>
      <div className="pt-8">
        <Image
          src={ProductionImage}
          alt="Production Image"
          className="w-full h-[30vh] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default Media;
