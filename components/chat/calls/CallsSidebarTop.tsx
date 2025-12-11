"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Setting2, TickCircle } from "iconsax-reactjs";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { InputGroup, InputGroupAddon } from "@/components/ui/input-group";

export default function CallsSidebarTop() {
  return (
    <Sidebar
      collapsible="none"
      className=" h-[232px] m-4 bg-[#FDFDFD] border rounded-[12px] w-[323px] p-[15px]"
    >
      <SidebarHeader className="text-[18px] font-semibold text-[#191F38]">
        Search Friends to call
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="grid grid-cols-1 gap-4 ">
            <InputGroup>
              <InputGroupAddon>
                <Search />
                <button className="w-[122px] h-[25px] border border-[#4157FE33] rounded-[6px] bg-[#F2F9FE] p-1.5 flex items-center gap-1 whitespace-nowrap">
                  <span className="bg-[#4157FE] w-[17px] h-[17px] rounded-full flex items-center justify-center text-white p-1.5 font-[400px] text-[10.2px] ">
                    F
                  </span>
                  <p className="text-[#191F38] font-medium text-[12px] truncate">
                    Foysal Munsy
                  </p>
                  <X size={16} color="#191F38" />
                </button>
              </InputGroupAddon>
            </InputGroup>
            <Button className="bg-[#4157FE] rounded-md hover:bg-[#4135FE]">
              Call
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="w-[130px] h-8 text-[14px] font-medium border-[#EBEBEB]  bg-white text-[#697588] p-1 rounded-md"
              variant={"outline"}
            >
              <Setting2 />
              Default Setup
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-[194px] min-h-[143px] rounded-xl border p-2 text-[#697588] font-medium text-[14px] "
          >
            <DropdownMenuLabel className="text-[16px] font-medium text-[#191F38] pl-[15px]">
              Audio Devices
            </DropdownMenuLabel>
            {/* <DropdownMenuSeparator /> */}

            <DropdownMenuItem
              className={`text-[14px] font-medium pl-[15px] py-2.5 rounded-none `}
            >
              Audio Devices 1
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`text-[14px] text-[#4157FE] font-medium pl-[15px] py-2.5 rounded-none flex justify-between`}
            >
              <span>Default Setup</span>
              <TickCircle size={16} color="#4157FE" />
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`text-[14px] font-medium pl-[15px] py-2.5 rounded-none cursor-pointer`}
              onClick={() => (window.location.href = "/dashboard")}
            >
              <Setting2 />
              Device Setting
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
