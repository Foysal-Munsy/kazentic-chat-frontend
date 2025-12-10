import { CallIncoming, CallMinus, CallOutgoing } from "iconsax-reactjs";
import Image from "next/image";

type FilterType = "all" | "missed" | "in" | "out";

const posts = [
  {
    id: 1,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
    call: "Missed In-Coming Call",
    date: "31 Aug 2025",
    action: "missed",
    status: "green",
    line: "red",
  },
  {
    id: 2,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
    call: "Out-Going",
    duration: "3m 21s",
    date: "31 Aug 2025",
    action: "out",
    status: "gray",
    line: "green",
  },
  {
    id: 3,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
    call: "In-Coming",
    duration: "3m 21s",
    date: "31 Aug 2025",
    action: "in",
    status: "orange",
    line: "green",
  },
  {
    id: 4,
    image: "/assets/svg/groups-frame.svg",
    name: "Pat Cummins. Will Smith, Bruce Wayne",
    call: "In-Coming",
    duration: "3m 21s",
    date: "31 Aug 2025",
    action: "in",
    status: "",
    line: "violet",
  },
  {
    id: 5,
    image: "/assets/svg/groups-frame.svg",
    name: "Pat Cummins. Will Smith, Bruce Wayne",
    call: "In-Coming",
    duration: "3m 21s",
    date: "31 Aug 2025",
    action: "in",
    status: "",
    line: "violet",
  },
  {
    id: 6,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
    call: "In-Coming",
    duration: "3m 21s",
    date: "31 Aug 2025",
    action: "in",
    status: "orange",
    line: "green",
  },
];

export default function HistoryCard({ filter }: { filter: FilterType }) {
  const filteredPosts =
    filter === "all" ? posts : posts.filter((post) => post.action === filter);

  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={post.id} className="mb-2.5">
          <div className="flex gap-2 items-center border border-[#EBEBEB] rounded-md p-3 h-[68px]">
            {/* image */}
            <div className="flex gap-2">
              {post.line === "red" ? (
                <div className="border-r-2 border-[#DC2626] h-[50px]"></div>
              ) : post.line === "green" ? (
                <div className="border-r-2 border-[#059669] h-[50px]"></div>
              ) : (
                <div className="border-r-2 border-[#722BCC] h-[50px]"></div>
              )}

              <div className="relative h-11 w-11 shrink-0">
                <Image
                  className="rounded-full object-cover"
                  src={post.image}
                  alt={"image"}
                  fill
                  sizes="44px"
                />
                {post?.status === "green" && (
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border border-white bg-[#22C55E]" />
                )}
                {post?.status === "gray" && (
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border border-white bg-[#697588]" />
                )}
                {post?.status === "orange" && (
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border border-white bg-[#FF9F00]" />
                )}
              </div>
            </div>

            <div className="flex flex-1 justify-between">
              {/* left content */}
              <div className="flex flex-col items-start">
                <h3 className="text-[#191F38] font-semibold text-[14px]">
                  {post.name}
                </h3>
                {post.action === "missed" ? (
                  <p className="text-[#DC2626] font-medium text-[14px] flex gap-2 items-center">
                    {post.call} <CallMinus size={16} />
                  </p>
                ) : post.action === "out" ? (
                  <p className="text-[#059669] font-medium text-[14px] flex gap-2 items-center">
                    {post.call} <CallOutgoing size={16} />
                  </p>
                ) : (
                  <p className="text-[#722BCC] font-medium text-[14px] flex gap-2 items-center">
                    {post.call} <CallIncoming size={16} />
                  </p>
                )}
              </div>

              {/* right content */}
              <div className="text-[#697588] flex flex-col items-end">
                <p className="font-medium text-[14px] ">{post.date}</p>
                {post?.duration && (
                  <p className="font-medium text-[14px] ">{post.duration}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
