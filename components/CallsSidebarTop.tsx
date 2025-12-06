import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";

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
          <SidebarGroupContent className="grid grid-cols-1 gap-2 ">
            g
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
