"use client";
import { usePathname } from "next/navigation";

import {
  Activity,
  Call,
  Edit2,
  Home,
  Message,
  Messages2,
  More,
} from "iconsax-reactjs";
import Link from "next/link";
import NavItem from "../NavItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const menuItems = [
  {
    label: "Home",
    href: "/chat",
    icon: <Home color="#4157FE" size={20} variant="Bold" />,
  },
  {
    label: "DMs",
    href: "/chat/dms",
    icon: <Messages2 size={20} color="#4157FE" />,
  },
  {
    label: "Calls",
    href: "/chat/calls",
    icon: <Call size={20} color="#4157FE" />,
  },
  {
    label: "Activity",
    href: "/chat/activity",
    icon: <Activity size={20} color="#4157FE" />,
  },
  {
    label: "Station",
    href: "/chat/station",
    icon: <Message size={20} color="#4157FE" />,
  },
];

export default function ChatNav() {
  const pathname = usePathname();

  return (
    <div>
      <div className="">
        <nav className="flex justify-between ml-2 sm:ml-4 mr-2 sm:mr-4 h-[52px] items-center">
          <h1 className="flex items-center font-semibold text-sm sm:text-base">
            Chat
          </h1>

          {/* Desktop navigation */}
          <div className="hidden lg:flex gap-4 items-stretch">
            {menuItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </div>

          {/* Tablet navigation - show first 3 items + dropdown */}
          <div className="hidden md:flex lg:hidden gap-2 items-stretch">
            {menuItems.slice(0, 3).map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
              />
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center px-2 text-[#4157FE] hover:bg-[#F2F9FE] rounded-md">
                  <More size={20} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {menuItems.slice(3).map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    asChild
                    className={
                      pathname === item.href
                        ? "bg-[#F2F9FE] text-[#4157FE]"
                        : ""
                    }
                  >
                    <Link href={item.href} className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile navigation - dropdown only */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center px-2 py-1 text-[#4157FE] hover:bg-[#F2F9FE] rounded-md">
                  <More size={20} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {menuItems.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    asChild
                    className={
                      pathname === item.href
                        ? "bg-[#F2F9FE] text-[#4157FE]"
                        : ""
                    }
                  >
                    <Link href={item.href} className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Action button */}
          <div className="flex items-center">
            {(pathname === "/chat/dms" ||
              pathname === "/chat/dms/create-message") && (
              <Link
                href="/chat/dms/create-message"
                className="bg-[#4157FE] text-white rounded-md flex flex-row items-center gap-1 sm:gap-2 py-1.5 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm"
              >
                <Edit2 size={14} className="sm:w-4 sm:h-4" variant="Outline" />
                <p className="hidden sm:inline">Create Message</p>
                <p className="sm:hidden">Create</p>
              </Link>
            )}
          </div>
        </nav>
        {/* separator */}
        <div className="w-full h-px bg-[#EBEBEB] " />
      </div>
    </div>
  );
}
