import Image from "next/image";
import React from "react";
import YtThumbnail from "@/assets/YtThumbnail.png";
import Kathak from "@/assets/Kathak.png";
function Statssection() {
  return (
    <div className="mx-auto w-11/12 min-h-screen py-20 font-sans space-y-5">
      <div className="text-5xl font-serif">Numbers That Shows What we Are!</div>
      <div className="flex gap-6">
        {[
          { label: "Students Trained", value: "1500+" },
          { label: "Core Team", value: "45+" },
          { label: "Productions", value: "5+" },
          { label: "Countries", value: "13+" },
        ].map((stat, index) => (
          <div
            key={index}
            className="text-center border rounded-lg h-fit space-y-5 py-10 px-5 items-start flex flex-col w-1/6 bg-[#e5c8f9]"
          >
            <p className=" font-semibold text-lg">{stat.label}</p>
            <h3 className="text-4xl font-bold text-blue-700">{stat.value}</h3>
          </div>
        ))}
      </div>
      <div className="text-wrap">
        Shivaleela Cultural Trust's 12+ years of excellence in innovative
        classical and folk productions like{" "}
        <span className="text-[#a93328]">Punyakoti</span>,{" "}
        <span className="text-[#a93328]">Prakruti</span>,{" "}
        <span className="text-[#a93328]">Jai Jaganmathe</span> and our recent{" "}
        <span className="text-[#a93328]">Sirigannadam Gelge</span> make it a
        Bengaluru cultural powerhouse, deserving a website that showcases
        artistry while driving enrollments and event attendance.
      </div>
      <div className="mt-20">
        <Image
          src={YtThumbnail}
          alt="YT Thumbnail"
          className="w-full"
          priority
        />
      </div>
      <div className="flex flex-col mt-20 space-y-5">
        <span className="text-5xl font-serif">
          Abhyasa - Kathak & Bharathantyam Classes
        </span>
        <p className="gap-2 leading-loose">
          Abhyasa offers professional Kathak and Bharatanatyam classes led by
          Shivaleela's expert artists in Bengaluru. Train in authentic
          techniques with over 12 years of troupe excellence behind every step.
          Beginners aged 8+ welcome-master mudras, tatkar, and abhinaya in
          small, supportive batches. Weekly sessions bier classical precision
          with innovative choreography from acclaimed productions like
          Punyakoti. First class free to experience our immersive environment.
          Build confidence, grace, and cultural depth while preparing for stage
          performances. Flexible timings suit students and professionals. Enroll
          today-spaces limited.
        </p>
        <div className="grid grid-cols-2 w-full rounded-lg">
          <div className="space-y-5">
            <Image src={Kathak} alt="Guru Shantala" className="" priority />{" "}
            <span>Kathak Advanced - Intermediate Beginners level</span>{" "}
          </div>
          <div className="space-y-5">
            <Image src={Kathak} alt="Guru Shantala" className="" priority />{" "}
            <span>Bharathanatyam Advanced - Intermediate Beginners level</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statssection;
