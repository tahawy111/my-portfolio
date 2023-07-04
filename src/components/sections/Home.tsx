"use client";
import {} from "react";
import { TypeAnimation } from "react-type-animation";
import { Icons } from "../Icons";
import { Tilt } from "react-tilt";
import { Button, buttonVariants } from "../ui/Button";
import {
  ArrowDown,
  Facebook,
  Github,
  Linkedin,
  Mail,
  MoreHorizontal,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "@/lib/hooks/use-toast";
import { defaultTiltOptions } from "@/lib/config";

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <div
      id="home"
      className={`flex flex-col w-full justify-center h-[calc(100vh-63px)] mt-20`}
    >
      <div className="flex flex-wrap gap-y-16 xl:grid-cols-2 items-center justify-between gap-6 md:mx-32">
        <div className="flex flex-col justify-center ml-10 gap-y-3">
          <h1 className="text-4xl font-bold md:text-6xl justify-self-start">
            Hi There,
          </h1>
          <h1 className="text-4xl font-bold md:text-6xl justify-self-start">
            I'm Amer <span className="text-yellow-600">Mohamed</span>
          </h1>
          <h1 className="text-3xl font-bold mt-6 justify-self-start">
            I'm a{" "}
            <TypeAnimation
              className="text-rose-900"
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
          <Button className="justify-self-start w-fit group">
            About Me{" "}
            <ArrowDown className="w-4 h-4 bg-white rounded-full text-black group group-hover:translate-x-1 mx-1 transition-all" />
          </Button>

          <div className="flex gap-x-1 flex-wrap">
            <a
              className={cn(
                buttonVariants({ size: "sm", variant: "secondary" }),
                "rounded-full py-6"
              )}
              href="https://web.facebook.com/AmerEltahawy111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              className={cn(
                buttonVariants({ size: "sm", variant: "secondary" }),
                "rounded-full py-6"
              )}
              href="https://www.youtube.com/channel/UCqtt3IsT4M6byJ8E2PjiBrw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube />
            </a>
            <a
              className={cn(
                buttonVariants({ size: "sm", variant: "secondary" }),
                "rounded-full py-6"
              )}
              href="https://github.com/tahawy111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              className={cn(
                buttonVariants({ size: "sm", variant: "secondary" }),
                "rounded-full py-6"
              )}
              href="https://www.linkedin.com/in/amer-eltahawy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <CopyToClipboard
              text="amertahawy111@gmail.com"
              onCopy={() => toast({ title: "Email has been copied. ✔" })}
            >
              <Button
                className={"rounded-full py-6"}
                variant={"secondary"}
                size={"sm"}
              >
                <Mail />
              </Button>
            </CopyToClipboard>
            <a
              className={cn(
                buttonVariants({ size: "sm", variant: "secondary" }),
                "rounded-full py-6"
              )}
              href="https://tahawy.bio.link/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MoreHorizontal />
            </a>
          </div>
        </div>
        <div className="group mx-auto">
          <Tilt className="relative" options={defaultTiltOptions}>
            <div className="blur-xl w-full h-full absolute -z-10 bg-gray-100/100 hidden group group-hover:block transition-all" />
            <Icons.logo className="w-64 sm:w-96 md:w-[500px] z-[5]" />
          </Tilt>
        </div>
      </div>
    </div>
  );
}
