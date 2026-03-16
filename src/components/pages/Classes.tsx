"use client";

import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import Kathak from "@/assets/classes/Kathak.png";
import Music from "@/assets/classes/Music.png";
import Bharatanatyam from "@/assets/classes/Bharatanatyam.png";
const Classes = () => {
  const [isClassesVisible, setIsClassesVisible] = useState(false);

  const classesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observers = [
      { ref: classesRef, setter: setIsClassesVisible }
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

  const classList = [
    { title: "Bharatanatyam", image: Bharatanatyam },
    { title: "Kathak", image: Kathak },
    { title: "Hindustani & Carnatic Music", image: Music },
  ];
  return (
    <div className="h-auto mx-auto w-full max-w-7xl px-4  sm:px-6 lg:px-8 py-8">
      < div
        ref={classesRef}
        className={`flex flex-col space-y-6 sm:space-y-7 md:space-y-8 transition-all duration-700 ease-out ${isClassesVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
          }`
        }>
        <p className="">Bengaluru&apos;s Shivaleela Natyalaya offers Bharatanatyam, Kathak, Hindustani Music, Carnatic Vocal & Instrumental classes for all ages and levels.
          Master classical arts under the guidance of renowned gurus Kum. M.S. Shantala and Parimala Subodh along with her team. Flexible beginner-to-advanced batches fit busy schedules.

          Workshops feature finest guest artists occasionally for fusion dance, choreography, and cultural immersion. Follow & stay tuned to our Instagram for latest workshop news!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full">
          {classList.map((cls, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={cls.image}
                  alt={cls.title}
                  className="w-[504px] h-[450px] rounded-sm object-cover transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>
              <span className="text-base font-medium text-gray-800">{cls.title}</span>
            </div>
          ))}
        </div>
      </div >
    </div >
  )
}

export default Classes