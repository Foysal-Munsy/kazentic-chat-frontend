import React from "react";
import NavItem from "./NavItem";
import { Activity, Call, Home, Message, Messages2 } from "iconsax-reactjs";

const menuItems = [
  {
    label: "Home",
    href: "/chat",
    icon: <Home color="#4157FE" size={20} variant="Bold" />,
  },
  { label: "DMs", href: "/dms", icon: <Messages2 size={20} color="#4157FE" /> },
  { label: "Calls", href: "/calls", icon: <Call size={20} color="#4157FE" /> },
  {
    label: "Activity",
    href: "/activity",
    icon: <Activity size={20} color="#4157FE" />,
  },
  {
    label: "Station",
    href: "/station",
    icon: <Message size={20} color="#4157FE" />,
  },
];
export default function ChatNav() {
  return (
    <div>
      <div className="">
        <nav className="flex justify-between  ml-2 h-[52px]">
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
          {/* blank */}
          <div></div>
        </nav>
        {/* separator */}
        <div className="w-full h-px bg-[#EBEBEB] " />
      </div>
    </div>
  );
}
