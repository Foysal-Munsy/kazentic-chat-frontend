import { ScrollArea } from "@/components/ui/scroll-area";
import { SmilePlus } from "lucide-react";

import Image from "next/image";

const posts = [
  {
    id: 1,
    sender_id: 1,
    sender: "opponent",
    senderName: "Riyad Ahsan",
    senderImage: "/assets/svg/elipse-r.svg",
    txt: "Hello, I'm experiencing login issues with the dashboard. Can you please help?",
    time: "2:30 PM",
  },
  {
    id: 2,
    sender_id: 2,
    sender: "user",
    senderName: "Pat Cummins",
    senderImage: "/assets/svg/elipse-p.svg",
    txt: "Hi John! I understand you're having trouble logging into the dashboard. Let me help you with that. Can you please tell me which browser you're using?",
    time: "2:30 PM",
    reactions: ["✅", "⭐️", <SmilePlus key={1} size={16} />],
  },
  {
    id: 3,
    sender_id: 1,
    sender: "opponent",
    senderName: "Riyad Ahsan",
    senderImage: "/assets/svg/elipse-r.svg",
    txt: "I'm using Chrome version 123.0.6312. The issue started after the maintenance window yesterday.",
    time: "2:30 PM",
  },
  {
    id: 4,
    sender_id: 2,
    sender: "user",
    senderName: "Pat Cummins",
    senderImage: "/assets/svg/elipse-p.svg",
    txt: "Thank you for the details. This seems to be related to a cache issue. Please try clearing your browser cache and cookies for our domain, then try logging in again.",
    time: "2:30 PM",
  },
];
export default function DmsMessage() {
  return (
    <ScrollArea className="h-[68vh] ">
      {posts.map((post) => (
        // root
        <div
          key={post.id}
          className={`grid grid-cols-1  mt-4 px-4 py-2 ${
            post.sender === "user" && " bg-[#F2F9FE]"
          }`}
        >
          {/* user area */}
          <div className="flex items-center gap-2">
            <Image
              src={post.senderImage}
              alt="user-image"
              width={25}
              height={25}
            />
            <h3 className="text-[#191F38] font-medium text-[14px]">
              {post.senderName}
            </h3>
            <p className="text-[#697588] font-medium text-[14px]">
              {post.time}
            </p>
          </div>
          {/* message area */}
          <div className="mb-3 ml-8">
            <p className="wrap-break-word max-w-[518px]">{post.txt}</p>
            {post?.reactions && (
              <div className="flex gap-2 mt-2">
                <span className="rounded-[4.85px] bg-white border border-[#EBEBEB]text-center p-1 px-2">
                  1 ✅
                </span>
                <span className="rounded-[4.85px] bg-white border border-[#EBEBEB] text-center p-1 px-2">
                  1 ⭐️
                </span>
                <span className="flex items-center rounded-[4.85px] bg-white border border-[#EBEBEB]text-center p-1 px-2">
                  <SmilePlus key={1} size={16} />
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </ScrollArea>
  );
}
