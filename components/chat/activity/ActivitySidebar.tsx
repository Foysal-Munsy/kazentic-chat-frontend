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

type Post = {
  id: number;
  image: string;
  name: string;
  message: string;
  action: boolean;
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
export function ActivitySidebar() {
  return (
    <Sidebar
      collapsible="none"
      className="  min-h-[85vh] m-4 bg-white border rounded-md w-[291px] "
    >
      <SidebarHeader className="text-[18px] font-semibold text-[#191F38]">
        Activity
      </SidebarHeader>
      <div>
        <div className="flex h-[50px]  items-stretch ">
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
      <SidebarContent>
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
      <SidebarFooter>
        <div className="text-xs ">Footer area</div>
      </SidebarFooter>
    </Sidebar>
  );
}
