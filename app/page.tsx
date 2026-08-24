import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import DesignToCode from "@/components/sections/DesignToCode";
import TechStack from "@/components/sections/TechStack";
import Playground from "@/components/sections/Playground";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="w-full relative overflow-x-clip">
        <Hero />
        <About />
        <FeaturedProjects />
        <DesignToCode />
        <TechStack />
        <Playground />
        <Contact />
      </main>

      <Footer />
    </>
  );
}