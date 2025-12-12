import { ChatSidebar } from "@/components/chat/ChatSidebar";
import ConversationArea from "@/components/chat/ConversationArea";
import {} from "@/components/ui/button-group";

import { Separator } from "@/components/ui/separator";
import { AttachSquare } from "iconsax-reactjs";

import Image from "next/image";

export default function Chat() {
  return (
    <div className="flex">
      <ChatSidebar />
      <div className="m-4 flex min-h-[85vh] w-full flex-col rounded-md border bg-white">
        {/* header */}
        <div className="flex items-center justify-between p-4">
          {/* header-left */}
          <h1 className="text-[#191F38] font-semibold text-[20px]">#General</h1>
          {/* header-right */}
          <div>
            <div className="flex gap-2 text-[#697588]">
              <button className="cursor-pointer">
                <Image
                  src="/assets/svg/headphone.svg"
                  alt="call"
                  width={28}
                  height={28}
                />
              </button>
              <button className="cursor-pointer">
                <Image
                  src="/assets/svg/pin.svg"
                  alt="call"
                  width={28}
                  height={28}
                />
              </button>
              <button className="cursor-pointer">
                <Image
                  src="/assets/svg/notification-bell.svg"
                  alt="call"
                  width={28}
                  height={28}
                />
              </button>
              {/* separator */}
              <div className="h-7 w-px bg-[#EBEBEB]" />
              <button className="cursor-pointer">
                <Image
                  src="/assets/svg/group-avatar.svg"
                  alt="call"
                  width={64.13}
                  height={28}
                />
              </button>
              <button className="cursor-pointer">
                <Image
                  src="/assets/svg/three-dot.svg"
                  alt="call"
                  width={28}
                  height={28}
                />
              </button>
            </div>
          </div>
        </div>
        <Separator />

        {/* middle area */}
        <ConversationArea />

        {/* footer */}
        <div className="p-4">
          <div className="flex items-center gap-3 rounded-md border border-[#E5E9EB]  px-4 py-2">
            <button
              type="button"
              className="text-[#94A3B8] transition hover:text-[#4157FE]"
              aria-label="Attach file"
            >
              <AttachSquare size={18} variant="Outline" />
            </button>
            <input
              className="flex-1 border-0 bg-transparent text-sm text-[#697588] placeholder:text-[#94A3B8] focus:outline-none"
              placeholder="Type here..."
            />

            <button
              type="button"
              className=" text-[#4157FE]"
              aria-label="Send message"
            >
              <Image
                src={"/assets/svg/Send Button.svg"}
                alt="send-btn"
                height={18}
                width={18}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
