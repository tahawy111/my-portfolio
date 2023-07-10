import { Icons } from "@/components/Icons";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import GetInTouch from "@/components/sections/GetInTouch";
import Home from "@/components/sections/Home";
import MyEducation from "@/components/sections/MyEducation";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Image from "next/image";

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
    </div>
  );
}
