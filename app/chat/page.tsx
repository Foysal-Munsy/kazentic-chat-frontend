import ChatNav from "@/components/ChatNav";
import { ChatSidebar } from "@/components/ChatSidebar";

import PageHeader from "@/components/PageHeader";

export default function Chat() {
  return (
    <div>
      <PageHeader first="Menu" second="Chats" />
      <ChatNav />
      <ChatSidebar />
    </div>
  );
}
