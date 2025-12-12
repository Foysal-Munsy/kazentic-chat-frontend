"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Search } from "lucide-react";

import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

import { ButtonGroup, ButtonGroupSeparator } from "../ui/button-group";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between bg-linear-to-r from-[#111953] to-[#4157FE] h-[38px] px-2 sm:px-2">
        {/* Left - Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-20 sm:w-24 md:w-[100px]"
          />
        </Link>

        {/* Middle - Search (hidden on small screens) */}
        <div className="hidden lg:flex items-center flex-1 justify-center mx-4">
          <ButtonGroup>
            <InputGroup className="w-[280px] xl:w-[364px] h-[27px] border-[#FFFFFF33] bg-[#E7E6E41A] rounded-md">
              <InputGroupInput
                placeholder="Search..."
                className="placeholder:text-[#FFFFFF] text-white"
              />
              <InputGroupAddon align="inline-start">
                <Search color="#FFFFFF" />
              </InputGroupAddon>
              <ButtonGroupSeparator />
              <span className="px-2">
                <Image
                  src="/assets/svg/ri_voice-ai-line.svg"
                  alt="Sort"
                  width={20}
                  height={20}
                />
              </span>
            </InputGroup>
          </ButtonGroup>
        </div>

        {/* Right - Actions & Profile */}
        <div className="text-white flex items-center gap-1.5 sm:gap-2">
          {/* Icons - visible on md+ */}
          <div className="hidden md:flex items-center gap-2">
            <Image
              src="/assets/svg/bell-dot.svg"
              alt="notifications"
              width={20}
              height={20}
            />
            <Image
              src="/assets/svg/ri_grid-fill.svg"
              alt="grid"
              width={20}
              height={20}
            />
            <ButtonGroupSeparator className="w-7" />
          </div>

          {/* Profile area - full on lg+, compact on md, dropdown on sm */}
          <div className="hidden lg:flex gap-2 items-center justify-center">
            <Image
              src="/assets/svg/Avatar2.svg"
              alt="profile"
              width={25}
              height={25}
            />
            <div>
              <h3 className="font-medium text-[13px] leading-none">Jhon Doe</h3>
              <p className="font-normal text-[12px] text-[#FFFFFFB2]">
                john@kazentic.com
              </p>
            </div>
            <span>
              <ChevronDown size={16} />
            </span>
          </div>

          {/* Compact profile on medium screens */}
          <div className="hidden md:flex lg:hidden items-center gap-2">
            <Image
              src="/assets/svg/Avatar2.svg"
              alt="profile"
              width={25}
              height={25}
            />
            <ChevronDown size={16} />
          </div>

          {/* Dropdown menu for small screens */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <button className="p-1">
                <Menu size={20} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-white">
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/svg/Avatar2.svg"
                    alt="profile"
                    width={25}
                    height={25}
                  />
                  <div>
                    <p className="font-medium text-xs">Jhon Doe</p>
                    <p className="text-[10px] text-gray-500">
                      john@kazentic.com
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Image
                  src="/assets/svg/bell-dot.svg"
                  alt="notifications"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                Notifications
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Image
                  src="/assets/svg/ri_grid-fill.svg"
                  alt="grid"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                Grid View
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
