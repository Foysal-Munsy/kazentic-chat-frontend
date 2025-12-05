import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Messages } from "iconsax-reactjs";
import LinkItem from "../LinkItem";

export function AppSidebar() {
  const messagesCount = 12; // will be props later
  return (
    <Sidebar
      collapsible="none"
      className="  min-h-screen bg-white border-r rounded-tl-md w-[200px] "
    >
      <SidebarHeader className="flex flex-row items-center gap-1">
        <span className="bg-[#FDBF00] text-center rounded-[6px] h-6 w-6 text-white">
          C
        </span>
        <div className="text-sm font-semibold   ">Carbon Stream </div>
      </SidebarHeader>
      <div className="w-full h-px bg-[#EBEBEB] " />
      <SidebarContent>
        <SidebarGroup>
          <LinkItem href="/chat">
            <div className="flex items-center">
              <Messages size={18} color="#4157FE" variant="Bold" />
              <div className="rounded-md px-3 py-2 text-sm text-[#4157FE]">
                Chat
              </div>
            </div>
            <span className="bg-[#4157FE] text-center rounded-[6px] py-0 px-2.5 text-white">
              {messagesCount}
            </span>
          </LinkItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="text-xs ">Footer area</div>
      </SidebarFooter>
    </Sidebar>
  );
}
