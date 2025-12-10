import { SidebarHeader } from "@/components/ui/sidebar";
import { Sort } from "iconsax-reactjs";
import HistoryCard from "./HistoryCard";

export default async function CallsContent() {
  return (
    <div className=" min-h-[85vh] m-4 bg-white border rounded-md w-[827px] ">
      <div className="w-[796px] mx-auto">
        <SidebarHeader className="text-[18px] flex flex-row justify-between items-center font-semibold text-[#191F38] mb-[17px]">
          History
          <div className="border p-1 rounded-md">
            <Sort size="16" color="#4157FE" />
          </div>
        </SidebarHeader>

        {/* card */}
        <HistoryCard />
      </div>
    </div>
  );
}
