import ChatNav from "@/components/ChatNav";
import PageHeader from "@/components/PageHeader";
import React from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageHeader first="Menu" second="Chats" />
      <ChatNav />
      {children}
    </div>
  );
}
