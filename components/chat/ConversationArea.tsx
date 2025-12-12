"use client";
import { SmilePlus } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import Image from "next/image";
import { usePathname } from "next/navigation";

// const post = [
//   {
//     id: 1,
//     sender: "opponent",
//     senderName: "Riyad Ahsan",
//     senderImage: "/assets/svg/elipse-r.svg",
//     message: [
//       "Hello, I'm experiencing login issues with the dashboard. Can you please help?",
//       "I'm using Chrome version 123.0.6312. The issue started after the maintenance window yesterday.",
//     ],
//     time: "2:30 PM",
//     reactions: [],
//   },
//   {
//     id: 2,
//     sender: "user",
//     senderName: "Pat Cummins",
//     senderImage: "/assets/svg/elipse-p.svg",
//     message: [
//       "Hi John! I understand you're having trouble logging into the dashboard. Let me help you with that. Can you please tell me which browser you're using?",
//       "Thank you for the details. This seems to be related to a cache issue. Please try clearing your browser cache and cookies for our domain, then try logging in again.",
//     ],
//     time: "2:30 PM",
//     reactions: ["✅", "⭐️", <SmilePlus key={1} size={16} />],
//   },
// ];

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
export default function ConversationArea() {
  const pathname = usePathname();
  return (
    <ScrollArea className="h-[68vh]  p-4 ">
      {pathname === "/chat" && (
        <div className="leading-7 mb-10">
          <div className="flex items-center justify-center rounded-full w-11 h-11 bg-[#F2F9FE] mb-2">
            <Image
              src={"/assets/svg/hash.svg"}
              alt="hash"
              height={24}
              width={24}
            />
          </div>
          <h2 className="text-[#191F38] font-semibold text-[18px] leading-7">
            Welcome to #General!
          </h2>
          <p className="text-[#697588] font-medium text-[14px] leading-6">
            This is the start of the #General channel. This is the only channel
            that includes everyone. Its a great spot of announcement and
            team-wide Conversation.
          </p>
        </div>
      )}
      {posts.map((post) => (
        // root
        <div key={post.id} className="grid grid-cols-1 gap-3 mt-4">
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
          <div className="mb-3">
            <div
              className={`rounded-xl p-2 font-medium text-[14px] flex flex-col gap-2 ${
                post.sender === "opponent"
                  ? "bg-[#4157FE] text-white"
                  : "bg-[#F2F9FE] text-[#191F38]"
              }`}
            >
              <p className="wrap-break-word max-w-[518px]">{post.txt}</p>
              {post?.reactions && (
                <div className="flex gap-2">
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
        </div>
      ))}
    </ScrollArea>
  );
}
