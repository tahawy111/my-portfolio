"use client";
import { defaultTiltOptions } from "@/lib/config";
import Image from "next/image";
import {} from "react";
import { Tilt } from "react-tilt";

interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <div className={`flex flex-col w-full h-[calc(100vh-63px)] mt-20`}>
      <h1 id="about" className="text-5xl font-bold mx-auto my-3">
        About <span className="text-sky-500">Me</span>
      </h1>
      <div className="flex justify-center gap-16 flex-wrap items-center h-full">
        <Tilt options={defaultTiltOptions}>
          <div className="w-72 h-72 grayscale hover:grayscale-0 group">
            <Image
              alt="Personal Image"
              width={450}
              height={450}
              className="rounded-3xl border-2 border-neutral-500 shadow-2xl"
              src={`https://res.cloudinary.com/dzdqy3wfg/image/upload/v1686835848/bd54g7pbchj7fz8prdpp.jpg`}
            />
          </div>
        </Tilt>
        <div className="">
          <h1 className="text-3xl font-bold">I'm Amer</h1>
          <h1 className="font-bold">Full Stack Developer</h1>
          <p className="max-w-md mt-5">
            I am a Full-Stack developer based in Alexandria, Egypt. I am very
            passionate about improving my coding skills & developing
            applications & websites. I build WebApps and Websites using MERN
            Stack. Working for myself to improve my skills. Love to build
            Full-Stack clones.
          </p>
        </div>
      </div>
    </div>
  );
}
