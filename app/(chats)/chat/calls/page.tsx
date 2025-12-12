import CallsContent from "@/components/chat/calls/CallsContent";
import CallsSidebarBottom from "@/components/chat/calls/CallsSidebarBottom";
import CallsSidebarTop from "@/components/chat/calls/CallsSidebarTop";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <CallsContent />
        <div className="flex flex-col lg:flex-col">
          <CallsSidebarTop />
          <CallsSidebarBottom />
        </div>
      </div>
    </div>
  );
}
