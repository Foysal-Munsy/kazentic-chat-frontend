import Card from "@/components/Card";
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";
import stationData from "@/public/station-data.json";
export default async function page() {
  // const data = await fetch("http://localhost:3000/station-data.json");
  // const posts = await data.json();
  // console.log(posts);

  const posts = stationData;

  return (
    <div className="container mx-auto px-4 py-4">
      {/* header */}
      <div className="flex justify-between">
        <div>
          <h1 className="flex items-center font-semibold">My Station</h1>
        </div>
        <div className="flex gap-2">
          <Link
            href="#"
            className="border border-[#EBEBEB] text-[#4157FE]  gap-2 py-2 px-4 flex items-center rounded-md"
          >
            Browse Stations <ArrowUpRight size={16} />
          </Link>
          <Link
            href="#"
            className="bg-[#4157FE] text-white rounded-md gap-2 py-2 px-4 flex items-center "
          >
            <Plus size={16} /> Create New Station
          </Link>
        </div>
      </div>
      {/* content */}
      <div className="mt-8 grid grid-cols-4 gap-4">
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post: any, idx: number) => (
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
