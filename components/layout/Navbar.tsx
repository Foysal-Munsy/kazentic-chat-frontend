import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";

import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

import { ButtonGroup, ButtonGroupSeparator } from "../ui/button-group";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between bg-linear-to-r from-[#111953] to-[#4157FE] h-[38px] ">
        {/* Right */}
        <Link href="/">
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
        </Link>
        {/* Middle */}
        <div className="flex items-center">
          <ButtonGroup>
            <InputGroup className="w-[364px] h-[27px] border-[#FFFFFF33] bg-[#E7E6E41A] rounded-md">
              <InputGroupInput
                placeholder="Search..."
                className="placeholder:text-[#FFFFFF] text-white"
              />
              <InputGroupAddon align="inline-start">
                <Search color="#FFFFFF" />
              </InputGroupAddon>
              <ButtonGroupSeparator />
              <span className="px-2">
                {/* <AudioLines className="h-4 w-4" color="#FFFFFF" /> */}
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
        {/* Left */}
        <div className="text-white flex items-center gap-2 mr-2">
          <Image
            src="/assets/svg/bell-dot.svg"
            alt="grid"
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
          {/* profile area */}
          <div className="flex gap-2 items-center justify-center">
            <Image
              src="/assets/svg/Avatar2.svg"
              alt="grid"
              width={25}
              height={25}
            />
            <div>
              <h3 className="font-medium text-[13px] leading-none">Jhon Doe</h3>
              <p className="font-normal text-[12px] text-[#FFFFFFB2] ">
                john@kazentic.com
              </p>
            </div>
            <span>
              <ChevronDown size={16} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
