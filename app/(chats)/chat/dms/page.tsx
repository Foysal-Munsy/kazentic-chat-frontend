import DmsMessage from "@/components/chat/dms/DmsMessage";

import { DmsSidebar } from "@/components/chat/dms/DmsSidebar";
import { Separator } from "@/components/ui/separator";
import { AttachSquare } from "iconsax-reactjs";

import Image from "next/image";
export default function page() {
  const status = "active";
  return (
    <div className="flex">
      <DmsSidebar />
      <div className="m-4  min-h-[85vh] flex-1 flex-col rounded-md border bg-white">
        {/* header */}
        <div className="flex items-center justify-between p-4">
          {/* header-left */}
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                className="rounded-full object-cover"
                src={"https://i.ibb.co.com/6c782gQh/dms-image.png"}
                alt="profile"
                width={29}
                height={29}
              />
              {status === "active" && (
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white bg-[#22C55E]" />
              )}
            </div>
            <h1 className="text-[#191F38] font-semibold text-[15px]">
              Riyad Ahsan
            </h1>
          </div>
          {/* header-right */}
          <div>
            <div className="flex gap-2 text-[#697588]">
              <button className="cursor-pointer">
                <Image
                  src="/assets/svg/call.svg"
                  alt="call"
                  width={28}
                  height={28}
                />
              </button>
              <button className="cursor-pointer">
                <Image
                  src="/assets/svg/video.svg"
                  alt="call"
                  width={28}
                  height={28}
                />
              </button>
              <button className="cursor-pointer">
                <Image
                  src="/assets/svg/add.svg"
                  alt="call"
                  width={28}
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
        <div className="flex-1 ">
          <DmsMessage />
        </div>

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
