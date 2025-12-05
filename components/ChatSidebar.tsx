import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
} from "@/components/ui/sidebar";

import { Hashtag, Message, Message2 } from "iconsax-reactjs";
import { ChatSidebarItems } from "./ChatSidebarItems";

const channels = [
  {
    label: "General",
    icon: <Hashtag size={20} variant="Outline" color="#0F172A" />,
    defaultOpen: true,
    dropdownItems: ["# general", "# off-topic"],
  },
  {
    label: "Station",
    icon: <Message size={20} variant="Outline" color="#0F172A" />,
    defaultOpen: false,
    dropdownItems: ["Station 1", "Station 2"],
  },
  {
    label: "DMs",
    icon: <Message2 size={20} variant="Outline" color="#0F172A" />,
    defaultOpen: false,
    dropdownItems: ["Alice", "Bob"],
  },
];

export function ChatSidebar() {
  return (
    <Sidebar
      collapsible="none"
      className="  min-h-[85vh] m-4 bg-white border rounded-md w-[200px] "
    >
      <div className="w-full h-px bg-[#EBEBEB] " />
      <SidebarContent>
        <SidebarGroup>
          {channels.map((channel) => (
            <ChatSidebarItems
              key={channel.label}
              label={channel.label}
              defaultOpen={channel.defaultOpen}
              icon={channel.icon}
              dropdownItems={channel.dropdownItems}
            />
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="text-xs ">Footer area</div>
      </SidebarFooter>
    </Sidebar>
  );
}
