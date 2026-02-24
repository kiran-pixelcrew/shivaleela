"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ProductionImage from "@/assets/Productionimage.png";
import { ArrowDownRight } from "lucide-react";

function Production() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observers = [
      { ref: headerRef, setter: setIsHeaderVisible },
      { ref: imageRef, setter: setIsImageVisible },
      { ref: contentRef, setter: setIsContentVisible },
    ];

    const observerInstances = observers.map(({ ref, setter }) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setter(true);
          }
        });
      }, observerOptions);

      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => {
      observerInstances.forEach((observer) => observer.disconnect());
    };
  }, []);

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
    <div className="w-full max-w-7xl mx-auto py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
      <div
        ref={headerRef}
        className={`transition-all duration-700 ease-out ${isHeaderVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
          }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Our Productions
        </h2>
        <p className="pt-4 sm:pt-5 leading-relaxed sm:leading-loose text-base sm:text-lg text-gray-700">
          Shivaleela Cultural Trust boasts a dedicated team of professional
          artists with over 12 years of national and international stage
          excellence. Led by our visionary founder and supported by esteemed
          board members, each performer brings specialized mastery in
          Bharatanatyam, Kathak, Yakshagana, and folk forms.
        </p>
      </div>

      <div
        ref={imageRef}
        className={`pt-8 sm:pt-10 md:pt-12 transition-all duration-700 ease-out ${isImageVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
      >
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
          <Image
            src={ProductionImage}
            alt="Production Image"
            className="w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
      </div>

      <div
        ref={contentRef}
        className={`flex flex-col lg:flex-row w-full pt-12 sm:pt-14 md:pt-16 gap-8 sm:gap-10 lg:gap-0 transition-all duration-700 ease-out ${isContentVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
          }`}
      >
        <div className="w-full lg:w-1/3 space-y-5 sm:space-y-6 lg:pr-12 xl:pr-16">
          {leftdetails.map((item, index) => (
            <div
              key={item.name}
              className="flex justify-between items-end border-b-2 border-yellow-300 pb-2 sm:pb-3 hover:bg-yellow-50/50 transition-all duration-300 cursor-pointer group"
              style={{
                transitionDelay: isContentVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="flex flex-col space-y-1">
                <span className="text-lg sm:text-xl font-medium text-gray-900 group-hover:text-[#a93328] transition-colors">
                  {item.name}
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  {item.year}
                </span>
              </div>
              <ArrowDownRight className="mb-1 w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#a93328] transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col lg:pl-12 xl:pl-16 lg:border-l-2 lg:border-gray-300 justify-center gap-y-4 sm:gap-y-5 md:gap-y-6">
          <div className="flex flex-col pb-3 sm:pb-4 border-b lg:border-none">
            <span className="text-2xl sm:text-3xl font-semibold text-[#a93328]">
              Siri Gannadam Gelge
            </span>
            <span className="text-sm sm:text-base text-gray-500 font-medium">
              2024 - 2025
            </span>
          </div>
          <ul className="space-y-3 sm:space-y-4 list-none">
            {rightdetails.map((val, idx) => (
              <li
                key={idx}
                className="text-gray-700 text-base sm:text-lg leading-relaxed flex items-start">
                <span className="mr-2 sm:mr-3 text-yellow-500 font-bold">•</span>
                <span>{val}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Production;