import { Icons } from "@/components/Icons";
import About from "@/components/sections/About";
import Home from "@/components/sections/Home";
import Skills from "@/components/sections/Skills";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
    </div>
  );
}
