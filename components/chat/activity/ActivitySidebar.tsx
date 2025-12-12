import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import activityData from "@/public/activitydata.json";

import ActivityCard from "./ActivityCard";
import NavItem from "@/components/NavItem";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

type Post = {
  id: number;
  image: string;
  name: string;
  message: string;
  action: boolean;
};

type ActivitySidebarProps = {
  inSheet?: boolean;
};

const posts = activityData as Post[];
const menuItems = [
  {
    label: "All",
    href: "/chat/activity",
  },
  {
    label: "Mention",
    href: "#1",
  },
  {
    label: "Thread",
    href: "#2",
  },
  {
    label: "Reaction",
    href: "#3",
  },
];

export function ActivitySidebar({ inSheet = false }: ActivitySidebarProps) {
  if (inSheet) {
    return (
      <div className="flex flex-col h-full bg-[#FDFDFD]">
        <div className="p-4 text-[18px] font-semibold text-[#191F38]">
          Activity
        </div>
        <div>
          <div className="flex h-[50px] items-stretch text-[#697588] font-medium text-xs sm:text-[14px]">
            {menuItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={""}
              />
            ))}
          </div>
          <Separator />
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 grid grid-cols-1 gap-2">
            {posts.map((post) => (
              <ActivityCard
                key={post.id}
                image={post.image}
                name={post.name}
                message={post.message}
                action={post.action}
              />
            ))}
          </div>
        </div>
        <Separator />
        <div className="p-4">
          <div className="flex justify-between">
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
            <Image
              src={"/assets/svg-sidebar/ph_plus-bold.svg"}
              alt="plus"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Sidebar
      collapsible="none"
      className="hidden lg:flex min-h-[85vh] m-2 sm:m-4 bg-[#FDFDFD] border rounded-md w-[240px] xl:w-[291px] flex-col"
    >
      <SidebarHeader className="text-[18px] font-semibold text-[#191F38]">
        Activity
      </SidebarHeader>
      <div>
        <div className="flex h-[50px] items-stretch text-[#697588] font-medium text-xs sm:text-[14px]">
          {menuItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={""}
            />
          ))}
        </div>
        {/* separator */}
        <Separator />
      </div>
      <SidebarContent className="flex-1 overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupContent className="grid grid-cols-1 gap-2 ">
            {posts.map((post) => (
              <ActivityCard
                key={post.id}
                image={post.image}
                name={post.name}
                message={post.message}
                action={post.action}
              />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Separator />
      <SidebarFooter className="mt-auto">
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
