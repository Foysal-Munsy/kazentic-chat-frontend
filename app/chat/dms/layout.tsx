import { DmsSidebar } from "@/components/DmsSidebar";

import React from "react";

export default function DmsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <DmsSidebar />
      <main>{children}</main>
    </div>
  );
}
