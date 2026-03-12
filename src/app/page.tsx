import Hero from "@/pages/Hero";
import Navbar from "@/components/Navbar";
import Aboutus from "@/pages/About-us";
import Statssection from "@/pages/Statssection";
import Production from "@/pages/Production";
import Media from "@/pages/Media";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";
import Classes from "@/pages/Classes";
import Gallery from "@/pages/Gallery";

function page() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <SectionSeparator title="Rhythms of Heritage" subtitle="Where Dance Awakens Souls" id="about-us" />
      <Aboutus />
      <SectionSeparator title="Abhyaasa: The Sacred Practice" subtitle="Mastery for Every Soul" id="classes" />
      <Classes />
      <SectionSeparator title="Productions" subtitle="Timeless Tales in Motion" id="productions" />
      <Production />
      <SectionSeparator title="Numbers That Shows What we Are!" subtitle="Transformative Journeys Through Dance" id="case-studies" />
      <Statssection />
      <SectionSeparator title="Gallery of Expression" subtitle="Masters of Movement and Expression" id="gallery" />
      <Gallery />
      <SectionSeparator title="Media" subtitle="Echoes of Applause: Our Dance in the Spotlight" id="media" />
      <Media />
      <Footer />
    </div>
  );
}

export default page;
