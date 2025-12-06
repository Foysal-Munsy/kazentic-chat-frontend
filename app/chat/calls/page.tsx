import CallsContent from "@/components/CallsContent";
import CallsSidebarBottom from "@/components/CallsSidebarBottom";
import CallsSidebarTop from "@/components/CallsSidebarTop";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex">
        {/* <div className="border rounded-md col-span-2">a</div> */}
        <CallsContent />
        {/* <div className="border flex flex-col gap-2 col-span-1">
          <div className="border rounded-md">1</div>
          <div className="border rounded-md">2</div>
        </div> */}
        <div>
          <CallsSidebarTop />
          <CallsSidebarBottom />
        </div>
      </div>
    </div>
  );
}
