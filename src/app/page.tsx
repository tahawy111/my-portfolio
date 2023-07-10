import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import GetInTouch from "@/components/sections/GetInTouch";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <MyEducation /> */}
      <Projects />
      <GetInTouch />
      <Footer />
    </div>
  );
}
