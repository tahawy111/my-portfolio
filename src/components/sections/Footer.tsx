"use client";
import { toast } from "@/hooks/use-toast";
import { ChevronRight, Facebook, Github, Heart, Linkedin, Mail, MapPin, MoreHorizontal, Phone, Youtube } from "lucide-react";
import {} from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Separator } from "../ui/Separator";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/Button";

interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className="bg-neutral-900 text-white py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 container mx-auto md:justify-items-center">
        <div className="border-b sm:border-none">
          <h1 className="text-2xl">Amer Mohamed's Portfolio</h1>
          <br />
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
          <br />
          <p>Keep Rising 🚀. Connect with me over live chat!</p>
        </div>
        <div className="border-b sm:border-none">
          <h1 className="text-2xl">Quick Links</h1>
          <br />
          <ul>
            <li className="h-7 w-fit cursor-pointer py-1 md:py-0 hover:translate-x-2 transition-transform">
              <a href="#home" className="flex pr-2">
                <ChevronRight /> <span>Home</span>
              </a>
            </li>
            <li className="h-7 w-fit cursor-pointer py-1 md:py-0 hover:translate-x-2 transition-transform">
              <a href="#about" className="flex pr-2">
                <ChevronRight /> <span>About</span>
              </a>
            </li>
            <li className="h-7 w-fit cursor-pointer py-1 md:py-0 hover:translate-x-2 transition-transform">
              <a href="#skills" className="flex pr-2">
                <ChevronRight /> <span>Skills</span>
              </a>
            </li>
            <li className="h-7 w-fit cursor-pointer py-1 md:py-0 hover:translate-x-2 transition-transform">
              <a href="#projects" className="flex pr-2">
                <ChevronRight /> <span>Projects</span>
              </a>
            </li>
            {/* <li
              onClick={() => setIsMenuOpen(false)}
              className="h-7 w-fit cursor-pointer py-1 md:py-0"
            >
              <a href="#about">Education</a>
            </li> */}
            <li className="h-7 w-fit cursor-pointer py-1 md:py-0">
              <a href="#contact" className="flex pr-2">
                <ChevronRight /> <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-2xl">Contact Info</h1>
          <br />
          <CopyToClipboard
            text="+201102734657"
            onCopy={() => toast({ title: "✅ Phone Number Copied" })}
          >
            <div className="flex gap-x-2 w-fit cursor-pointer my-2">
              <Phone />
              <span>+20 110 273 4657</span>
            </div>
          </CopyToClipboard>
          <CopyToClipboard
            text="amertahawy111@gmail.com"
            onCopy={() => toast({ title: "✅ Email Copied" })}
          >
            <div className="flex gap-x-2 w-fit cursor-pointer my-2">
              <Mail />
              <span>amertahawy111@gmail.com</span>
            </div>
          </CopyToClipboard>
          <div className="flex gap-x-2 w-fit cursor-pointer my-2">
            <MapPin />
            <span>Alexandria, Egypt</span>
          </div>

          <div className="-translate-x-4">
            <a
  
              className={cn(
                buttonVariants({ size: "sm" }),
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
                buttonVariants({ size: "sm" }),
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
                buttonVariants({ size: "sm" }),
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
                buttonVariants({ size: "sm" }),
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
              <a
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "rounded-full py-6 cursor-pointer"
                )}
              >
                <Mail />
              </a>
            </CopyToClipboard>
            <a
              className={cn(
                buttonVariants({ size: "sm" }),
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
      </div>
      <Separator className="my-3 container" />
      <h6 className="flex items-center text-center justify-center gap-x-1 mt-10 font-bold"><span>Designed With</span> <span className="animate-bounce"><Heart className="fill-red-600 text-red-600 animate-bounce" /></span> <span className="text-sky-500">By Amer Mohamed</span></h6>
    </footer>
  );
}
