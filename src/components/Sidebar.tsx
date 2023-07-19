import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { signOut } from "next-auth/react";
import { Icons } from "./Icons";
import { Home, LogOut, Menu, Settings, X } from "lucide-react";

interface SidebarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  show: boolean;
  setShow: (param: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({
  className,
  show,
  setShow,
  ...props
}): any => {
  const pathname = usePathname();
  const inActiveLink = "flex gap-1 p-1 items-center pr-10";
  const activeLink = `${inActiveLink} bg-highlight text-black rounded-sm bg-pink-100`;
  const inActiveIcon = "w-6 h-6";
  const activeIcon = `${inActiveIcon} text-primary`;

  return (
    <aside
      className={cn(
        `text-gray-500 p-4 fixed w-full bg-gray-100 z-20 h-screen overflow-auto ${
          show ? "left-0" : "-left-full"
        } md:w-auto transition-all`,
        className
      )}
      {...props}
    >
      <div className="mb-4 mr-4 hidden sm:block">
        <Icons.logo className="w-8 h-8" />
      </div>
      <nav className="flex flex-col gap-2 overflow-auto">
        <div className="flex justify-between">
          <Link
            href={`/admin`}
            className={pathname === "/admin" ? activeLink : inActiveLink}
          >
            <Home
              className={pathname === "/admin" ? activeIcon : inActiveIcon}
            />
            Dashboard
          </Link>

          <button
            className="mx-4 my-3 hidden md:block"
            onClick={() => setShow(!show)}
          >
            {!show ? <Menu className="w-7 h-7" /> : <X className="w-7 h-7" />}
          </button>
        </div>
        <Link
          href={`/admin/skills`}
          className={
            pathname.includes("/admin/skills") ? activeLink : inActiveLink
          }
        >
          💪 Skills
        </Link>
        <Link
          href={`/admin/projects`}
          className={
            pathname.includes("/admin/projects") ? activeLink : inActiveLink
          }
        >
          <Icons.tools
            className={
              pathname.includes("/projects") ? activeIcon : inActiveIcon
            }
          />
          Projects
        </Link>
        {/* <Link
          href={`/orders`}
          className={pathname.includes("/orders") ? activeLink : inActiveLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={pathname.includes("/orders") ? activeIcon : inActiveIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
            />
          </svg>
          Orders
        </Link> */}
        {/* <Link
          href={`/settings`}
          className={pathname.includes("/settings") ? activeLink : inActiveLink}
        >
          <Settings
            className={
              pathname.includes("/settings") ? activeIcon : inActiveIcon
            }
          />
          Settings
        </Link> */}
        <button onClick={() => signOut()} className={inActiveLink}>
          <LogOut className="rotate-180" />
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
