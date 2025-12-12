import Card from "@/components/chat/station/Card";
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";
import stationData from "@/public/station-data.json";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EmptyOutline } from "@/components/chat/station/EmptyOutline";

type Station = {
  id: number;
  title: string;
  description: string;
  logo: string;
};

export default async function page() {
  // const data = await fetch("http://localhost:3000/station-data.json");
  // const posts = await data.json();
  // console.log(posts);

  const posts = stationData as Station[];

  return (
    <div className="container mx-auto px-4 py-4">
      {/* header */}
      <div className="flex justify-between">
        {/* header-left */}
        <div>
          <h1 className="flex items-center font-semibold">My Station</h1>
        </div>
        {/* header-right */}
        <div className="flex gap-2">
          {/* btn-1 */}
          <Link
            href="#"
            className="border border-[#EBEBEB] text-[#4157FE]  gap-2 py-2 px-4 flex items-center rounded-md"
          >
            Browse Stations <ArrowUpRight size={16} />
          </Link>
          {/* btn-2 and related content */}
          <Sheet>
            <SheetTrigger className="bg-[#4157FE] text-white rounded-md gap-2 py-2 px-4 flex items-center cursor-pointer">
              <Plus size={16} /> Create New Station
            </SheetTrigger>
            <SheetContent className="w-[550px]">
              <SheetHeader className="">
                <SheetTitle>Create New Station</SheetTitle>
              </SheetHeader>
              <Separator className="-mt-3" />
              {/* sheet content from button  */}
              <div className="px-4">
                {/* 1st area */}
                <div className="flex flex-col gap-2">
                  <p className="text-[#191F38] font-medium text-[14px] mb-1">
                    Icon & Team Name...
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/assets/svg/elipse-r.svg"}
                      alt="logo"
                      width={39}
                      height={39}
                    />
                    <Input
                      placeholder="Name"
                      className="rounded-lg border-[#EBEBEB]"
                    />
                  </div>
                </div>

                {/* 2nd area */}
                <div className="flex gap-2 mt-3">
                  {/* left */}
                  <div className="flex flex-col gap-2">
                    <p className="text-[#191F38] font-medium text-[14px]">
                      Station Type
                    </p>
                    <Input
                      placeholder="Station Type"
                      className="rounded-lg border-[#EBEBEB]"
                    />
                  </div>
                  {/* right */}
                  <div className="flex flex-col gap-2">
                    <p className="text-[#191F38] font-medium text-[14px]">
                      Tags
                    </p>
                    <Input
                      placeholder="Enter Tags"
                      className="rounded-lg border-[#EBEBEB]"
                    />
                  </div>
                </div>
                {/* 3rd area */}
                <div className="mt-3 flex flex-col gap-2">
                  <p className="text-[#191F38] font-medium text-[14px]">
                    Description
                  </p>
                  <Textarea className="h-[130px] rounded-lg" />
                </div>
                {/* 4th area */}
                <div className="mt-3 flex flex-col gap-2">
                  <p className="text-[#191F38] font-medium text-[14px]">
                    Attachments
                  </p>
                  <EmptyOutline />

                  <p className="text-[#697588] font-normal text-[14px]">
                    Some data formats such as dates, colors, numbers may not be
                    recognized.
                  </p>
                </div>
                {/* 5th area - Footer */}
                <div className="grid grid-cols-2 gap-1 mt-3">
                  <Link
                    href="#2"
                    className=" border border-[#EBEBEB] text-[#191F38] text-center text-[14px] rounded-md py-1"
                  >
                    Cancel
                  </Link>
                  <Link
                    href={"#1"}
                    className="bg-[#4157FE] py-1 text-white  text-[14px] text-center rounded-md  cursor-pointer"
                  >
                    Create New Station
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {/* content */}
      <div className="mt-8 grid grid-cols-4 gap-4">
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post, idx) => (
            <Card
              key={post.id ?? idx}
              logo={post.logo ?? post.title?.[0] ?? "S"}
              title={post.title ?? "Station Title"}
              description={post.description ?? "Station Description"}
            />
          ))
        ) : (
          <p className="text-sm text-gray-500">No stations found.</p>
        )}
      </div>
    </div>
  );
}
