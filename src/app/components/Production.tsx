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
    <div className="min-h-screen w-11/12 mx-auto">
      <div className="pt-20">
        <span className="text-5xl font-serif">Our Productions</span>
        <p className="pt-5 leading-loose">
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
          className="w-full h-[30vh] object-cover rounded-lg"
        />
      </div>

      <div className="flex w-full pt-10">
        <div className="w-1/3 space-y-6 mr-16">
          {leftdetails.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-end border-b-2 border-yellow-300 pb-2"
            >
              <div className="flex flex-col space-y-2">
                <span className="text-xl font-medium">{item.name}</span>
                <span className="text-sm text-gray-500">{item.year}</span>
              </div>
              <ArrowDownRight className="mb-1" />
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col pl-16 border-l-2 border-gray-300 justify-center gap-y-4">
          <div className="flex flex-col">
            <span>Siri Gannadam Gelge</span>
            <span>2024 - 2025</span>
          </div>
          {rightdetails.map((val, idx) => (
            <li key={idx} className="text-gray-700 leading-relaxed">
              {val}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Production;
