"use client";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { HTMLAttributes, ReactNode, useState } from "react";
import { Icons } from "./Icons";
import Loading from "./Loading";
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
    <div className={cn(className, "")} {...props}>
      <div className="bg-bgGray min-h-screen ">
        <div className="md:hidden flex items-center">
          <button
            className="mx-4 my-3"
            onClick={() => setShowNav((prev) => !prev)}
          >
            <Menu className="w-7 h-7" />
          </button>
          <div className="flex grow justify-center mr-8">
            <Icons.logo />
          </div>
        </div>
        <div className={cn(`flex`, className)} {...props}>
          <Sidebar show={showNav} />

          <div className="flex-grow">
            {children}
            {/* Signed in as {session.user.email} <br />
        <button className="bg-gray-100 p-2 rounded-lg px-4 cursor-pointer hover:bg-gray-200 active:bg-gray-500 transition-colors duration-75" onClick={() => signOut()}>Sign out</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}