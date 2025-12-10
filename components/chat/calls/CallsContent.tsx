"use client";

import { SidebarHeader } from "@/components/ui/sidebar";
import HistoryCard from "./HistoryCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import Image from "next/image";

type FilterType = "all" | "missed" | "in" | "out";

export default function CallsContent() {
  const [filter, setFilter] = useState<FilterType>("all");

  return (
    <div className=" min-h-[85vh] m-4 bg-[#FDFDFD] border rounded-md w-[827px] ">
      <div className="w-[796px] mx-auto">
        <SidebarHeader className="text-[18px] flex flex-row justify-between items-center font-semibold text-[#191F38] mb-[17px]">
          History
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="border p-2 rounded-md border-[#EBEBEB] flex items-center justify-center">
                <Image
                  src="/assets/svg/sort.svg"
                  alt="Sort"
                  width={16}
                  height={16}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[223px] min-h-52 rounded-lg border p-0"
            >
              <DropdownMenuLabel className="text-[16px] font-medium text-[#191F38] pl-[15px]">
                Sort By
              </DropdownMenuLabel>
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem
                onClick={() => setFilter("all")}
                className={`text-[14px] font-medium pl-[15px] py-2.5 rounded-none ${
                  filter === "all"
                    ? "bg-[#F2F9FE] text-[#4157FE]"
                    : "text-[#697588]"
                }`}
              >
                All
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setFilter("missed")}
                className={`text-[14px] font-medium pl-[15px] py-2.5 rounded-none ${
                  filter === "missed"
                    ? "bg-[#F2F9FE] text-[#4157FE]"
                    : "text-[#697588]"
                }`}
              >
                Missed Call
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setFilter("in")}
                className={`text-[14px] font-medium pl-[15px] py-2.5 rounded-none ${
                  filter === "in"
                    ? "bg-[#F2F9FE] text-[#4157FE]"
                    : "text-[#697588]"
                }`}
              >
                In-Coming Call
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setFilter("out")}
                className={`text-[14px] font-medium pl-[15px] py-2.5 rounded-none ${
                  filter === "out"
                    ? "bg-[#F2F9FE] text-[#4157FE]"
                    : "text-[#697588]"
                }`}
              >
                Out-Going Call
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarHeader>

        {/* card */}
        <HistoryCard filter={filter} />
      </div>
    </div>
  );
}
