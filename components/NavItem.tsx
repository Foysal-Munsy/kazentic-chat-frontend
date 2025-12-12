"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type LinkItemProps = {
  href: string;
  label: ReactNode;
  icon: ReactNode;
};

export default function NavItem({ href, label, icon }: LinkItemProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <a
      href={href}
      className={`px-3 flex flex-row gap-2  cursor-pointer justify-between items-center ${
        active ? "border-b-[#4157FE] border-b-2 text-[#4157FE]" : ""
      }`}
    >
      {icon}
      {label}
    </a>
  );
}
