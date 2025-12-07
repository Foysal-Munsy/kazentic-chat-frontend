import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Setting, Setting2 } from "iconsax-reactjs";

export default function CallsSidebarTop() {
  return (
    <Sidebar
      collapsible="none"
      className=" h-[232px] m-4 bg-white border rounded-md w-[323px] "
    >
      <SidebarHeader className="text-[18px] font-semibold text-[#191F38]">
        Search Friends to call
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="grid grid-cols-1 gap-4 ">
            <Input placeholder="search..." />
            <Button className="bg-[#4157FE] rounded-md hover:bg-[#4135FE]">
              Call
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          className="w-[123px] text-[14px] rounded-md bg-[#EBEBEB] text-[#697588]"
          variant={"outline"}
        >
          <Setting2 />
          Default
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
