"use client";

import HeroSectionBgCarousel from "./heroSectionBgCarousal";
import type { StaticImageData } from 'next/image';

import imgUrl0 from '@/assets/Hero.png';
import imgUrl1 from '@/assets/Kathak.png';
import imgUrl2 from '@/assets/YtThumbnail.png';
import imgUrl3 from '@/assets/Productionimage.png';

const images: StaticImageData[] = [imgUrl0, imgUrl1, imgUrl2, imgUrl3];
const mobileImages: StaticImageData[] = [imgUrl0, imgUrl1, imgUrl2, imgUrl3];


export default function Hero() {
  return (
    <section
      aria-label="Hero Section"
      className="relative mx-auto w-full items-center justify-center overflow-hidden px-2 md:h-[calc(100vh-100px)] md:px-20"
    >
      <div className="absolute inset-0 z-0 hidden md:block">
        <HeroSectionBgCarousel images={images} interval={4000} />
      </div>

      <div className="px-2">
        <div className="mt-4 flex md:hidden">
          <HeroSectionBgCarousel
            images={mobileImages}
            interval={2000}
            className="relative h-[450px] rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
