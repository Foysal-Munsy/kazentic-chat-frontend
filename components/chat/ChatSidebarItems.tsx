"use client";
import React, { useEffect, useState } from "react";
import { ArrowDown2, ArrowRight2 } from "iconsax-reactjs";
import { Plus } from "lucide-react";

type ChatSidebarItemProps = {
  label: string;
  icon: React.ReactNode;
  defaultOpen?: boolean;
  highlightColor?: string;
  dropdownItems?: string[];
};

export function ChatSidebarItems({
  label,
  icon,
  defaultOpen = false,
  highlightColor = "#4157FE",
  dropdownItems = [],
}: ChatSidebarItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  const textColor = open ? highlightColor : "#0F172A";

  return (
    <div
      className={`px-2 py-2 ${
        open ? "bg-[#F2F9FE]" : "hover:bg-gray-100"
      } rounded-md cursor-pointer`}
    >
      <div className="flex justify-between font-normal text-[14px]">
        <div className="flex items-center" style={{ color: textColor }}>
          <span className="flex items-center" style={{ color: textColor }}>
            {icon}
          </span>
          <span className="ml-2"> {label}</span>
        </div>

        <div className="flex items-center gap-4">
          <a className="cursor-pointer">
            <Plus size={16} color="#697588" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            className="cursor-pointer"
          >
            {open ? (
              <ArrowDown2 size={16} variant="Outline" color={highlightColor} />
            ) : (
              <ArrowRight2 size={16} variant="Outline" color="#0F172A" />
            )}
            <span className="sr-only">Toggle channel dropdown</span>
          </button>
        </div>
      </div>
      {open && dropdownItems.length > 0 && (
        <div className="mt-3 space-y-1 rounded-md border border-[#E2E8F0] bg-white px-3 py-2 text-sm text-[#0F172A]">
          {dropdownItems.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
}
