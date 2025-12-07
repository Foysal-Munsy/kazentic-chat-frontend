import Image from "next/image";
import Link from "next/link";
import { AudioLines, LayoutDashboardIcon } from "lucide-react";
import { Notification } from "iconsax-reactjs";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Separator } from "../ui/separator";

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
          <div className="flex items-center bg-transparent rounded">
            <div className="relative">
              <input
                className="border border-[#FFFFFF33] bg-[rgba(255,255,255,0.1)] w-[364px] h-[27px] text-white placeholder-white pr-8 px-2 rounded-md"
                type="search"
                placeholder="Search..."
              />
              <div className="absolute right-2 top-0 bottom-0 border-l border-white/30 flex items-center px-1 text-white/90 pointer-events-none">
                <AudioLines className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
        {/* Left */}
        <div className="text-white flex items-center gap-2 mr-2">
          <Notification />
          <LayoutDashboardIcon />
          <Separator orientation="vertical" className="h-6 w-px bg-white/30" />
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage
                src="https://i.ibb.co/6c782gQh/dms-image.png"
                alt="avatar"
                className="h-8 w-8 rounded-full object-cover"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* <div>
              <h3 className=" font-semibold  ">Foysal Munsy</h3>
              <p className="text-[#FFFFFFB2] font-normal text-[12px] ">
                foysal613@outlook.com
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
