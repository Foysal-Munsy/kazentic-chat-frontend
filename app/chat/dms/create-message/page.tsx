import { Separator } from "@/components/ui/separator";
import { AttachSquare, Headphone, Notification, Send } from "iconsax-reactjs";
import { EllipsisVertical, PinIcon } from "lucide-react";
export default function CreateMessage() {
  return (
    <div className="m-4 flex min-h-[85vh]  flex-col rounded-md border bg-white">
      {/* header */}
      <div className="p-4">
        <div className="flex items-center justify-between ">
          <h1 className="text-[#191F38] font-semibold text-[20px]">
            New Message
          </h1>
          <div>
            <div className="flex gap-2 text-[#697588]">
              <button className="border p-2 rounded-md cursor-pointer">
                <Headphone size="16" variant="Outline" />
              </button>
              <button className="border p-2 rounded-md cursor-pointer">
                <Notification size={16} variant="Outline" />
              </button>
              <button className="border p-2 rounded-md cursor-pointer">
                <PinIcon size={16} />
              </button>
              <button className="border p-2 rounded-md cursor-pointer">
                <EllipsisVertical size={16} />
              </button>
            </div>
          </div>
        </div>
        <p className="text-[#7F899C]">To : #channel, @someone, @email</p>
      </div>
      <Separator />

      {/* middle area */}
      <div className="flex-1 p-4">
        <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-[#E2E8F0] text-sm text-[#94A3B8]">
          Conversation content goes here
        </div>
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
            <Send size={18} variant="Bold" />
          </button>
        </div>
      </div>
    </div>
  );
}
