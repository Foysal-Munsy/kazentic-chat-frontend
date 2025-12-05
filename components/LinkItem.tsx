"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type LinkItemProps = {
  href: string;
  children: ReactNode;
};

export default function LinkItem({ href, children }: LinkItemProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <a
      href={href}
      className={`px-3 flex flex-row items-center cursor-pointer justify-between ${
        active ? "bg-[#F2F9FE]" : ""
      }`}
    >
      {children}
    </a>
  );
}
