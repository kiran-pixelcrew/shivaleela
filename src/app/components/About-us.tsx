import Image from "next/image";
import Shantala from "@/assets/Shantala.png";
import Parimila from "@/assets/Parimila.png"

const About = () => {
  return (
    <div
      id="about-us"
      className="mx-auto flex flex-col w-11/12 min-h-screen py-20 font-sans"
    >
      <div className="w-full mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Shivaleela Cultural Trust That Speaks!
        </h1>
        <p className="font-medium text-xl text-gray-700 leading-relaxed max-w-full">
          Shivaleela Cultural Trust, Bengaluru's premier dance troupe, delivers
          12+ years of performance excellence on national and international
          stages. Unique concepts, original music, and innovative choreography
          in classical (Bharatanatyam, Kathak) and folk forms convey profound
          messages. Meet our founder, board, and professional artists.
        </p>
      </div>

      <div className="flex flex-row gap-12 justify-between mb-16">
        <Image src={Shantala} alt="Guru Shantala" priority />

        <div className="w-full md:w-1/2 space-y-4 pl-10 flex flex-col justify-center items-start">
          <h2 className="text-4xl font-bold font-serif">Guru. Shantala Mam</h2>
          <p className="text-xl font-semibold text-gray-600 italic">
            Founder Shantala Cultural Trust, Actress, Director.
          </p>
          <div className="text-gray-700 leading-loose space-y-8 font-semibold text-xl">
            <div className="">
              Shivaleela Cultural Trust's 12+ years of excellence in innovative
              classical and folk productions like{" "}
              <span className="text-[#a93328]">Punyakoti</span>,{" "}
              <span className="text-[#a93328]">Prakruti</span>,{" "}
              <span className="text-[#a93328]">Jai Jaganmathe</span> and our
              recent <span className="text-[#a93328]">Sirigannadam Gelge</span>{" "}
              make it a Bengaluru cultural powerhouse, deserving a website that
              showcases artistry while driving enrollments and event attendance.
            </div>
            <div>
              Excellence in innovative classical and folk productions like{" "}
              <span className="text-[#a93328]">Punyakoti</span>,{" "}
              <span className="text-[#a93328]">Prakruti</span>,{" "}
              <span className="text-[#a93328]">Jai Jaganmathe</span> and our
              recent <span className="text-[#a93328]">Sirigannadam Gelge</span>{" "}
              make it a Bengaluru cultural powerhouse, deserving a website that
              showcases artistry while driving enrollments and event attendance.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-12 mt-20 justify-between mb-16">
        <Image src={Parimila} alt="Guru Shantala" priority />

        <div className="w-full md:w-1/2 space-y-4 items-start flex justify-center flex-col">
          <h2 className="text-4xl font-bold font-serif">Guru. Parimila Mam</h2>
          <p className="text-xl font-semibold text-gray-600 italic">
            Co-Founder, Board Memer Shivaleela Cultural Trust
          </p>
          <div className="text-gray-700 leading-loose space-y-8 font-semibold text-xl">
            <div className="">
              Shivaleela Cultural Trust's 12+ years of excellence in innovative
              classical and folk productions like{" "}
              <span className="text-[#a93328]">Punyakoti</span>,{" "}
              <span className="text-[#a93328]">Prakruti</span>,{" "}
              <span className="text-[#a93328]">Jai Jaganmathe</span> and our
              recent <span className="text-[#a93328]">Sirigannadam Gelge</span>{" "}
              make it a Bengaluru cultural powerhouse, deserving a website that
              showcases artistry while driving enrollments and event attendance.
            </div>
            <div>
              Excellence in innovative classical and folk productions like{" "}
              <span className="text-[#a93328]">Punyakoti</span>,{" "}
              <span className="text-[#a93328]">Prakruti</span>,{" "}
              <span className="text-[#a93328]">Jai Jaganmathe</span> and our
              recent <span className="text-[#a93328]">Sirigannadam Gelge</span>{" "}
              make it a Bengaluru cultural powerhouse, deserving a website that
              showcases artistry while driving enrollments and event attendance.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
