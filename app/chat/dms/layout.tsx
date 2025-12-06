import { DmsSidebar } from "@/components/DmsSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import React from "react";

export default function DmsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SidebarProvider>
        <div className="flex h-screen">
          <DmsSidebar />
          <main className="flex-1">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
}
