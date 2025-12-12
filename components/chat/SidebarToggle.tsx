"use client";

import { HamburgerMenu } from "iconsax-reactjs";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

type SidebarToggleProps = {
  children: React.ReactNode;
};

export default function SidebarToggle({ children }: SidebarToggleProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="lg:hidden flex items-center justify-center p-2 hover:bg-blue-50 rounded-md transition-colors border border-gray-200"
          aria-label="Toggle sidebar"
        >
          <HamburgerMenu size={28} color="#4157FE" variant="Bold" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[280px] sm:w-[320px] p-0 overflow-y-auto"
      >
        {children}
      </SheetContent>
    </Sheet>
  );
}
