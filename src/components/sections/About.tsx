"use client";
import { defaultTiltOptions } from "@/lib/config";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion, useScroll, useTransform } from "framer-motion";

interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <motion.div id="about" className={`flex flex-col w-full gap-5`}>
      <h1 className="text-5xl font-bold mx-auto mt-28">
        About{" "}
        <span className="text-sky-500 underline underline-offset-8">Me</span>
      </h1>
      <div className="flex justify-center gap-16 flex-wrap items-center md:m-20 overflow-hidden">
        <Tilt options={defaultTiltOptions}>
          <motion.div
            initial={{ x: "-20vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="w-64 md:w-72 grayscale hover:grayscale-0 group"
          >
            <Image
              alt="Personal Image"
              width={450}
              height={450}
              className="rounded-3xl border-2 border-neutral-500 shadow-2xl pt-5"
              src={`https://res.cloudinary.com/dzdqy3wfg/image/upload/v1686835848/bd54g7pbchj7fz8prdpp.jpg`}
            />
          </motion.div>
        </Tilt>
        <motion.div
          initial={{ x: "20vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="mx-3 text-center md:text-start mt-10"
        >
          <h1 className="text-3xl font-bold">I&apos;m Amer</h1>
          <h1 className="font-bold">Full Stack Developer</h1>
          <p className="max-w-md mt-5">
            I am a Full-Stack developer based in Alexandria, Egypt. I am very
            passionate about improving my coding skills & developing
            applications & websites. I build WebApps and Websites using MERN
            Stack. Working for myself to improve my skills. Love to build
            Full-Stack clones.
          </p>
          <p className="my-3">
            <span className="text-cyan-600 font-semibold">Email :</span>{" "}
            amertahawy111@gmail.com
          </p>
          <p>
            <span className="text-cyan-600 font-semibold">Place :</span>{" "}
            Alexandria, Egypt
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
