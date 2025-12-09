"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Messages } from "iconsax-reactjs";
import LinkItem from "../LinkItem";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const messagesCount = 12; // will be props later
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar
      collapsible="none"
      className={cn(
        "min-h-screen rounded-tl-md border-r bg-white transition-[width] duration-300",
        isCollapsed ? "w-14" : "w-[200px]"
      )}
    >
      <SidebarHeader
        className={cn(
          "flex items-center gap-2",
          isCollapsed ? "justify-center" : "justify-between"
        )}
      >
        <div
          className={cn(
            "flex items-center gap-2",
            isCollapsed ? "justify-center" : ""
          )}
        >
          {!isCollapsed && (
            <span className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#FDBF00] text-sm font-semibold text-white">
              C
            </span>
          )}
          {!isCollapsed && (
            <div className="text-sm font-semibold text-[#1B2559]">
              Carbon Stream
            </div>
          )}
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <div className="w-full h-px bg-[#EBEBEB] " />
      <SidebarContent>
        <SidebarGroup>
          <LinkItem href="/chat">
            <div
              className={cn(
                "flex items-center gap-2",
                isCollapsed && "justify-center"
              )}
            >
              <Messages size={18} color="#4157FE" variant="Bold" />
              {!isCollapsed && (
                <div className="rounded-md px-3 py-2 text-sm text-[#4157FE]">
                  Chat
                </div>
              )}
            </div>
            {!isCollapsed && (
              <span className="rounded-[6px] bg-[#4157FE] px-2.5 py-0 text-white">
                {messagesCount}
              </span>
            )}
          </LinkItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {!isCollapsed && <div className="text-xs ">Footer area</div>}
      </SidebarFooter>
    </Sidebar>
  );
}
