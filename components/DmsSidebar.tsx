import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import dmsData from "@/public/dms.json";
import DmsCard from "./chat/dms/DmsCard";

type Post = {
  id: number;
  image: string;
  name: string;
  message: string;
  action: boolean;
};

const posts = dmsData as Post[];

export function DmsSidebar() {
  return (
    <Sidebar
      collapsible="none"
      className="  min-h-auto m-4 bg-white border rounded-md w-[291px] "
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
      </SidebarContent>
      <SidebarFooter>
        <div className="text-xs ">Footer area</div>
      </SidebarFooter>
    </Sidebar>
  );
}
