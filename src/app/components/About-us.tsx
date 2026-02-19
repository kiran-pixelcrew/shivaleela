import Image from "next/image";
import Shantala from "@/assets/Shantala.png";
import Parimila from "@/assets/Parimila.png";

const About = () => {
  return (
    <div
      id="about-us"
      className="mx-auto flex flex-col max-w-full px-6 md:px-12 py-12 md:py-20"
    >
      <div className="w-full mb-12 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
          Shivaleela Cultural Trust That Speaks!
        </h1>
        <p className="font-medium text-lg md:text-xl text-gray-700 leading-relaxed text-pretty">
          Shivaleela Cultural Trust, Bengaluru's premier dance troupe, delivers 12+ years of performance excellence on national and international stages. Unique concepts, original music, and innovative choreography in classical (Bharatanatyam, Kathak) and folk forms convey profound messages. Meet our founder, board, and professional artists.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-16 md:mb-24">
        <div className="w-full lg:w-1/2">
          <Image
            src={Shantala}
            alt="Guru Shantala"
            priority
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-4 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            Guru. Shantala Mam
          </h2>
          <p className="text-lg md:text-xl font-semibold text-gray-600 italic">
            Founder Shantala Cultural Trust, Actress, Director.
          </p>
          <div className="text-gray-700 leading-relaxed md:leading-loose space-y-4 md:space-y-8 font-semibold text-lg md:text-xl text-justify">
            <p className="text-pretty md:text-pretty">
              Shivaleela Cultural Trust's 12+ years of excellence in innovative
              classical and folk productions like{" "}
              <span className="text-[#a93328]">Punyakoti</span>,{" "}
              <span className="text-[#a93328]">Prakruti</span>,{" "}
              <span className="text-[#a93328]">Jai Jaganmathe</span> and our
              recent <span className="text-[#a93328]">Sirigannadam Gelge</span>{" "}
              make it a Bengaluru cultural powerhouse, deserving a website that
              showcases artistry while driving enrollments and event attendance.
            </p>
            <p className="text-pretty">
              Excellence in innovative classical and folk productions like{" "}
              <span className="text-[#a93328]">Punyakoti</span>,{" "}
              <span className="text-[#a93328]">Prakruti</span>,{" "}
              <span className="text-[#a93328]">Jai Jaganmathe</span> and our
              recent <span className="text-[#a93328]">Sirigannadam Gelge</span>{" "}
              make it a Bengaluru cultural powerhouse, deserving a website that
              showcases artistry while driving enrollments and event attendance.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
        <div className="w-full lg:w-1/2">
          <Image
            src={Parimila}
            alt="Guru Parimila"
            priority
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-4 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            Guru. Parimila Mam
          </h2>
          <p className="text-lg md:text-xl font-semibold text-gray-600 italic">
            Co-Founder, Board Member Shivaleela Cultural Trust
          </p>
          <div className="text-gray-700 leading-relaxed md:leading-loose space-y-4 md:space-y-8 font-semibold text-lg md:text-xl text-justify">
            <div>
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
