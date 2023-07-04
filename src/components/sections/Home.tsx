"use client";
import Image from "next/image";
import {} from "react";
import { TypeAnimation } from "react-type-animation";
import { Icons } from "../Icons";

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <div
      className={`flex flex-col w-full justify-center h-[calc(100vh-63px)] mt-20`}
    >
      <div className="grid gap-y-16 place-items-center md:grid-cols-2 items-center justify-items-center gap-6 md:mx-32">
        <div className="w-full">
          <h1 className="text-3xl text-center">Hi There,</h1>
          <h1 className="text-3xl text-center">I'm Amer Mohamed</h1>
            <h1 className="text-3xl text-center">
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Frontend Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Full Stack Developer",
                  1000,
                  "Javascript Developer",
                  1000,
                  "Backend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
        </div>
        <div className="">
          <Icons.logo className="w-[500px]" />
        </div>
      </div>
    </div>
  );
}
