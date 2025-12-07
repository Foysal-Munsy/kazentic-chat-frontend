import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { CallMinus, Sort } from "iconsax-reactjs";

import Image from "next/image";

const posts = [
  {
    id: 1,
    image: "https://i.ibb.co.com/6c782gQh/dms-image.png",
    name: "Foysal Munsy",
    call: "Missed In-Coming Call",
    date: "31 Aug 2025",
    action: true,
    status: "active",
  },
];
export default async function CallsContent() {
  return (
    <div className=" min-h-[85vh] m-4 bg-white border rounded-md w-[827px] ">
      <SidebarHeader className="text-[18px] flex flex-row justify-between items-center font-semibold text-[#191F38]">
        History
        <div className="border p-1 rounded-md">
          <Sort size="16" color="#4157FE" />
        </div>
      </SidebarHeader>
      {/* <SidebarContent className="grid grid-cols-1 gap-2 "> */}
      {/* card */}
      <div className="px-2">
        <div className="flex border border-[#EBEBEB] p-2 rounded-md">
          {/* image */}
          <div className="flex gap-2">
            <div className="border-r-2 border-[#DC2626] h-[50px]"></div>
            <div className="relative h-11 w-11 shrink-0">
              <Image
                className="rounded-full object-cover"
                src={posts[0].image}
                alt={"image"}
                fill
                sizes="44px"
              />
              {posts[0].status === "active" && (
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border border-white bg-[#22C55E]" />
              )}
            </div>
          </div>

          {/* content */}
          <div className="flex-1 pl-2">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-[#191F38] font-semibold text-[14px]">
                {posts[0].name}
              </h3>
              <p className="font-medium text-[14px] text-[#697588]">
                {posts[0].date}
              </p>
            </div>
            {/* calls action */}
            <div>
              {posts[0].call === "Missed In-Coming Call" && (
                <p className="text-[#DC2626] font-medium text-[14px] flex gap-2 items-center">
                  Missed In-Coming Call <CallMinus size={16} />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* </SidebarContent> */}
    </div>
  );
}
