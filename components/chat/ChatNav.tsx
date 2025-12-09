"use client";
import { usePathname } from "next/navigation";

import {
  Activity,
  Call,
  Edit2,
  Home,
  Message,
  Messages2,
} from "iconsax-reactjs";
import Link from "next/link";
import NavItem from "../NavItem";

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
  //   console.log(pathname);
  return (
    <div>
      <div className="">
        <nav className="flex justify-between  ml-4 mr-4 h-[52px]">
          <h1 className="flex items-center font-semibold">Chat</h1>
          <div className="flex gap-4 items-stretch">
            {menuItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </div>
          {/* blank always, only show button to the /chat/dms path*/}
          <div className="flex items-center">
            {(pathname === "/chat/dms" ||
              pathname === "/chat/dms/create-message") && (
              <Link
                href="/chat/dms/create-message"
                className="bg-[#4157FE] text-white rounded-md  flex flex-row items-center gap-2 py-2 px-4  "
              >
                <Edit2 size={16} variant="Outline" /> <p>Create Message</p>
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
