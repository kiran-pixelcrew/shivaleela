import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Aboutus from "../components/About-us";
import Statssection from "../components/Statssection";
import PerformingTeam from "../components/PerformingTeam";
import Production from "../components/Production";
import Media from "../components/Media";
import Footer from "../components/Footer";
import SectionSeparator from "@/components/SectionSeparator";

function page() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <SectionSeparator title="Rhythms of Heritage" subtitle="Where Dance Awakens Souls" id="about-us" />
      <Aboutus />
      <Statssection />
      <PerformingTeam />
      <Production />
      <Media />
      <Footer />
    </div>
  );
}

export default page;
