"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Messages } from "iconsax-reactjs";
import LinkItem from "../LinkItem";
import { cn } from "@/lib/utils";
import Image from "next/image";

const sidebarItems = [
  {
    id: 1,
    label: "Dashboard",
    href: "#1",
    icon: "/assets/svg-sidebar/dashboard.svg",
  },
  {
    id: 2,
    label: "Manage",
    href: "#2",
    icon: "/assets/svg-sidebar/manage.svg",
  },
  {
    id: 3,
    label: "Time Tracker",
    href: "#3",
    icon: "/assets/svg-sidebar/time-tracker.svg",
  },
  { id: 4, label: "Tasks", href: "#4", icon: "/assets/svg-sidebar/task.svg" },
  {
    id: 5,
    label: "Reports",
    href: "#5",
    icon: "/assets/svg-sidebar/report.svg",
  },
  { id: 6, label: "Email", href: "#6", icon: "/assets/svg-sidebar/email.svg" },
  {
    id: 7,
    label: "Storage",
    href: "#7",
    icon: "/assets/svg-sidebar/storage.svg",
  },
  {
    id: 8,
    label: "Calender",
    href: "#8",
    icon: "/assets/svg-sidebar/calender.svg",
  },
  { id: 9, label: "Notes", href: "#9", icon: "/assets/svg-sidebar/note.svg" },
  { id: 10, label: "HRM", href: "#10", icon: "/assets/svg-sidebar/hrm.svg" },
  { id: 11, label: "CRM", href: "#11", icon: "/assets/svg-sidebar/crm.svg" },
  { id: 12, label: "Chat", href: "/chat", icon: null, hasCount: true },
  { id: 13, label: "Forms", href: "#13", icon: "/assets/svg-sidebar/form.svg" },
];

export function AppSidebar() {
  const messagesCount = 12; // will be props later
  const { state, toggleSidebar, setOpen, isMobile } = useSidebar();
  const isCollapsed = state === "collapsed";
  const handleToggle = () => {
    if (isMobile) {
      setOpen((prev) => !prev);
    }
    toggleSidebar();
  };

  return (
    <Sidebar
      collapsible="none"
      className={cn(
        "min-h-screen rounded-tl-md border-r bg-white transition-[width] duration-300",
        isCollapsed ? "w-12 sm:w-14" : "w-[160px] sm:w-[180px] md:w-[200px]"
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
            <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-[6px] bg-[#FDBF00] text-xs sm:text-sm font-semibold text-white">
              C
            </span>
          )}
          {!isCollapsed && (
            <div className="text-xs sm:text-sm font-semibold text-[#1B2559] truncate">
              Carbon Stream
            </div>
          )}
          <button
            onClick={handleToggle}
            className="shrink-0 p-1.5 hover:bg-gray-100 rounded-md"
          >
            <Image
              src={"/assets/svg/expand-left.svg"}
              alt="toggle"
              width={16}
              height={16}
            />
          </button>
        </div>
      </SidebarHeader>
      <div className="w-full h-px bg-[#EBEBEB] " />
      <SidebarContent>
        <SidebarGroup>
          {sidebarItems.map((item) => {
            const isChat = item.label === "Chat";
            const textColor = isChat ? "#4157FE" : "#191F38";

            return (
              <LinkItem key={item.id} href={item.href}>
                <div
                  className={cn(
                    "flex items-center",
                    isCollapsed ? "justify-center w-full py-1" : "gap-2"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center shrink-0",
                      isCollapsed ? "w-full" : ""
                    )}
                  >
                    {item.icon ? (
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={18}
                        height={18}
                        className="shrink-0 w-[18px] h-[18px] sm:w-5 sm:h-5"
                        style={{
                          filter: isChat
                            ? "none"
                            : "brightness(0) saturate(100%)",
                        }}
                      />
                    ) : (
                      <Messages
                        size={18}
                        color={textColor}
                        variant="Bold"
                        className="shrink-0 sm:w-5 sm:h-5"
                      />
                    )}
                  </div>
                  {!isCollapsed && (
                    <div
                      className="rounded-md px-2 sm:px-3 py-1 text-xs sm:text-sm truncate"
                      style={{ color: textColor }}
                    >
                      {item.label}
                    </div>
                  )}
                </div>
                {!isCollapsed && item.hasCount && (
                  <span className="flex items-center justify-center rounded-[6px] bg-[#4157FE] px-2 sm:px-2.5 text-white text-[11px] sm:text-[13px] font-normal shrink-0">
                    {messagesCount}
                  </span>
                )}
              </LinkItem>
            );
          })}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {!isCollapsed && (
          <div className="mb-5 sm:mb-7 px-2">
            <Image
              src={"/assets/svg-sidebar/footer-frame.svg"}
              alt="image"
              width={200}
              height={150}
              className="w-full h-auto"
            />
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
