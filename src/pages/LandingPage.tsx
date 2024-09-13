import About from "./sections/About";
import Contact from "./sections/Contact";
import HeroSection from "./sections/HeroSection";
import Service from "./sections/Service";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Service />
      <Contact />
    </div>
  );
};

export default LandingPage;
