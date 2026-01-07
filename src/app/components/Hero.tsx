"use client";
import React, { useCallback, useEffect, useState } from "react";
import Heroo from "@/assets/Hero.png";
import Image from "next/image";
import Kathak from "@/assets/Kathak.png";
import Production from "@/assets/Productionimage.png";
import Yt from "@/assets/YtThumbnail.png";

const Hero = () => {
  const [active, setActive] = useState(0);
  const images = [Heroo, Kathak, Production, Yt];

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleManualChange = (index: number) => {
    setActive(index);
  };
  return (
    <div className="">
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full">
              <Image
                src={img}
                alt="Heroo"
                className="object-fit w-full h-auto"
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => handleManualChange(i)}
              className={`h-3 w-3 rounded-full transition-all ${
                active === i ? "bg-cyan-400 scale-110" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="bg-zinc-800/95 w-full h-20 flex items-center justify-center text-white gap-1">
        Welcome to the
        <span className="text-yellow-400"> Kalaatatpha - 2025 </span> kannada
        dance drama production! Join us on 14th & 28th to celebrate!
        <span className="text-yellow-400">Click here for ticktes</span>
      </div>
    </div>
  );
};

export default Hero;
