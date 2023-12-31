"use client";
import { Menu, X } from "lucide-react";
import { HTMLAttributes, ReactNode, useState } from "react";
import { Icons } from "./Icons";
import Sidebar from "./Sidebar";

interface AdminLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function AdminLayout({
  children,
  className,
  ...props
}: AdminLayoutProps) {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div>
      <div className="bg-bgGray min-h-screen">
        <div className="md:hidden flex items-center">
          <button
            className="mx-4 my-3"
            onClick={() => setShowNav((prev) => !prev)}
          >
            {!showNav ? (
              <Menu className="w-7 h-7" />
            ) : (
              <X className="w-7 h-7" />
            )}
          </button>
          <div className="flex grow justify-end mr-8">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <Icons.logo className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="">
          <Sidebar show={showNav} setShow={setShowNav} />
          <div className="">
            <button
              className="p-3 md:block hidden"
              onClick={() => setShowNav((prev) => !prev)}
            >
              {!showNav ? (
                <Menu className="w-7 h-7" />
              ) : (
                <X className="w-7 h-7" />
              )}
            </button>
            <div className={"flex-grow m-10"}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
