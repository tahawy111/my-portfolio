"use client";
import { useState } from "react";
import { Icons } from "./Icons";
interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div
      className={`font-mono fixed w-full bg-white ${
        isMenuOpen ? "h-screen md:h-16" : "h-16"
      }  border-b border-neutral-300 shadow-sm top-0 z-50`}
    >
      <header
        className={`p-5 flex justify-between container mx-auto md:items-center h-full md:p-0 ${
          isMenuOpen ? "items-start" : "items-center"
        }`}
      >
        <div className="block md:flex justify-between items-center w-full">
          <h1 className="text-xl font-semibold">
          <Icons.logo className="w-16 h-16" />
          </h1>

          <ul
            className={`md:flex font-bold gap-x-2 ${
              isMenuOpen ? "block" : "hidden"
            } mx-5`}
          >
            <li className="hover:underline cursor-pointer py-1 md:py-0">
              Home
            </li>
            <li className="hover:underline cursor-pointer py-1 md:py-0">
              About
            </li>
            <li className="hover:underline cursor-pointer py-1 md:py-0">
              Products
            </li>
            <li className="hover:underline cursor-pointer py-1 md:py-0">
              Services
            </li>
            <li className="hover:underline cursor-pointer py-1 md:py-0">
              Login
            </li>
            <li className="hover:underline cursor-pointer py-1 md:py-0">
              Register
            </li>
          </ul>
        </div>

        <svg
          onClick={() => setIsMenuOpen((prev) => !prev)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 block md:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </header>
    </div>
  );
}
