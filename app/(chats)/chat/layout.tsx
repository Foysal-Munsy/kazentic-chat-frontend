import ChatNav from "@/components/chat/ChatNav";
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
      <main>{children}</main>
    </div>
  );
}
