import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
} from "@/components/ui/sidebar";

import { Hashtag, Message, Messages2 } from "iconsax-reactjs";
import { ChatSidebarItems } from "./ChatSidebarItems";
import { Separator } from "../ui/separator";
import Image from "next/image";

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
    icon: <Messages2 size={20} variant="Outline" color="#0F172A" />,
    defaultOpen: false,
    dropdownItems: ["Alice", "Bob"],
  },
];

export function ChatSidebar() {
  return (
    <Sidebar
      collapsible="none"
      className="  min-h-[85vh]  m-4 bg-white border rounded-md w-[340px] "
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
