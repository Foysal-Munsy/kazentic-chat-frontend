"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import dmsData from "@/public/dms.json";
import DmsCard from "./DmsCard";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

type Post = {
  id: number;
  image: string;
  name: string;
  message: string;
  action: boolean;
};

const posts = dmsData as Post[];

export function DmsSidebar() {
  const path = usePathname();
  // console.log(path);
  return (
    <Sidebar
      collapsible="none"
      className="min-h-[85vh] m-4 bg-white border rounded-md w-[291px] "
    >
      <SidebarHeader className="text-[18px] font-semibold text-[#191F38]">
        DMs
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="grid grid-cols-1 gap-2 ">
            {posts.map((post) => (
              <DmsCard
                key={post.id}
                image={post.image}
                name={post.name}
                message={post.message}
                action={post.action}
              />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
        {path === "/chat/dms" && (
          <>
            <SidebarHeader className="text-[18px] font-semibold text-[#191F38]">
              Non-Organizational DMs
            </SidebarHeader>
            <SidebarGroup>
              <SidebarGroupContent className="grid grid-cols-1 gap-2 ">
                {posts.slice(0, 2).map((post) => (
                  <DmsCard
                    key={post.id}
                    image={post.image}
                    name={post.name}
                    message={post.message}
                    action={post.action}
                  />
                ))}
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        )}
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <div className="flex justify-between">
          {/* left */}
          <div className="flex items-center gap-2">
            <span className="bg-[#4157FE] w-[30px] h-[30px] rounded-full flex items-center justify-center text-white">
              A
            </span>
            <div>
              <h3 className="text-[#191F38] font-medium text-[14px]">
                Alif Hasan
              </h3>
              <p className="text-[#00000080] text-[12px] font-medium">
                alif@deepchainlabs.com
              </p>
            </div>
          </div>
          {/* right */}
          <Image
            src={"/assets/svg-sidebar/ph_plus-bold.svg"}
            alt="plus"
            width={16}
            height={16}
          />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
