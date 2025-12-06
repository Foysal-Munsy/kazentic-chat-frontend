import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { UserAdd } from "iconsax-reactjs";
import Image from "next/image";
export default function CallsSidebarBottom() {
  const status = "active";
  return (
    <Sidebar
      collapsible="none"
      className=" h-[500px] m-4 bg-white border rounded-md w-[323px] "
    >
      <SidebarHeader className="text-[18px] flex flex-row justify-between items-center font-semibold text-[#191F38]">
        Speed Dial
        <div className="border p-1 rounded-md">
          <UserAdd size="16" color="#4157FE" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="grid grid-cols-1 gap-2 ">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image
                    className="rounded-full object-cover"
                    src={"https://i.ibb.co.com/6c782gQh/dms-image.png"}
                    alt="profile"
                    width={29}
                    height={29}
                  />
                  {status === "active" && (
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white bg-[#22C55E]" />
                  )}
                </div>
                <h1 className="text-[#191F38] font-normal text-[15px]">
                  Riyad Ahsan
                </h1>
              </div>
            </div>
          </SidebarGroupContent>
          <SidebarGroupContent className="grid grid-cols-1 gap-2 ">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image
                    className="rounded-full object-cover"
                    src={"https://i.ibb.co.com/6c782gQh/dms-image.png"}
                    alt="profile"
                    width={29}
                    height={29}
                  />
                  {status === "active" && (
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white bg-[#22C55E]" />
                  )}
                </div>
                <h1 className="text-[#191F38] font-normal text-[15px]">
                  Riyad Ahsan
                </h1>
              </div>
            </div>
          </SidebarGroupContent>
          <SidebarGroupContent className="grid grid-cols-1 gap-2 ">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image
                    className="rounded-full object-cover"
                    src={"https://i.ibb.co.com/6c782gQh/dms-image.png"}
                    alt="profile"
                    width={29}
                    height={29}
                  />
                  {status === "active" && (
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white bg-[#22C55E]" />
                  )}
                </div>
                <h1 className="text-[#191F38] font-normal text-[15px]">
                  Riyad Ahsan
                </h1>
              </div>
            </div>
          </SidebarGroupContent>
          <SidebarGroupContent className="grid grid-cols-1 gap-2 ">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image
                    className="rounded-full object-cover"
                    src={"https://i.ibb.co.com/6c782gQh/dms-image.png"}
                    alt="profile"
                    width={29}
                    height={29}
                  />
                  {status === "active" && (
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white bg-[#22C55E]" />
                  )}
                </div>
                <h1 className="text-[#191F38] font-normal text-[15px]">
                  Riyad Ahsan
                </h1>
              </div>
            </div>
          </SidebarGroupContent>
          <SidebarGroupContent className="grid grid-cols-1 gap-2 ">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image
                    className="rounded-full object-cover"
                    src={"https://i.ibb.co.com/6c782gQh/dms-image.png"}
                    alt="profile"
                    width={29}
                    height={29}
                  />
                  {status === "active" && (
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white bg-[#22C55E]" />
                  )}
                </div>
                <h1 className="text-[#191F38] font-normal text-[15px]">
                  Riyad Ahsan
                </h1>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
