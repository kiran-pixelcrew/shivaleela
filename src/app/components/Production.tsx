import Image from "next/image";
import React from "react";
import ProductionImage from "@/assets/Productionimage.png";
import { ArrowDownRight } from "lucide-react";

function Production() {
  const leftdetails = [
    { name: "Siri Gannadam Gelge", year: "2024 - 2025" },
    { name: "Jai Jaganmathe", year: "2007 - 2008" },
    { name: "Punyakoti", year: "2007 - 2008" },
    { name: "Prakruti", year: "2007 - 2008" },
    { name: "Colours Of India", year: "2007 - 2008" },
  ];

  const rightdetails = [
    "Captivates with rhythmic footwork and vibrant Karnataka folk energy",
    "Dynamic choreography blending Yakshagana vigor with classical finesse",
    "Infectious talas echo village festivities and heroic regional tales",
    "Professional artists weave intricate patterns of sound and movement",
    "Honors authentic heritage while thrilling modern audiences",
    "Rave reviews from prestigious national/international stages",
    "Experience folk rhythms brought alive by Bengaluru's finest troupe",
    "Video glimpses available below",
  ];

  return (
    <div className="min-h-screen w-full mx-auto pb-20 px-6 md:px-12">
      <div className="pt-10 md:pt-20">
        <h2 className="text-3xl md:text-5xl font-serif">Our Productions</h2>
        <p className="pt-5 leading-loose text-justify text-gray-700">
          Shivaleela Cultural Trust boasts a dedicated team of professional
          artists with over 12 years of national and international stage
          excellence. Led by our visionary founder and supported by esteemed
          board members, each performer brings specialized mastery in
          Bharatanatyam, Kathak, Yakshagana, and folk forms.
        </p>
      </div>

      <div className="pt-8">
        <Image
          src={ProductionImage}
          alt="Production Image"
          className="w-full h-[30vh] md:h-[40vh] object-cover rounded-lg"
          priority
        />
      </div>

      <div className="flex flex-col lg:flex-row w-full pt-10 gap-10 lg:gap-0">

        <div className="w-full lg:w-1/3 space-y-6 lg:pr-16">
          {leftdetails.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-end border-b-2 border-yellow-300 pb-2 hover:bg-yellow-50/50 transition-colors cursor-pointer group"
            >
              <div className="flex flex-col space-y-1">
                <span className="text-lg md:text-xl font-medium">{item.name}</span>
                <span className="text-sm text-gray-500">{item.year}</span>
              </div>
              <ArrowDownRight className="mb-1 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col lg:pl-16 lg:border-l-2 lg:border-gray-300 justify-center gap-y-4">
          <div className="flex flex-col pb-2 border-b lg:border-none">
            <span className="text-2xl font-serif font-semibold text-[#a93328]">Siri Gannadam Gelge</span>
            <span className="text-gray-500 font-medium">2024 - 2025</span>
          </div>
          <ul className="space-y-3 list-none">
            {rightdetails.map((val, idx) => (
              <li key={idx} className="text-gray-700 leading-relaxed flex items-start">
                <span className="mr-2 text-yellow-500">•</span>
                {val}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Production;