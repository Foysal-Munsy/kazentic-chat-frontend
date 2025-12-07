import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Sort } from "iconsax-reactjs";
import DmsCard from "./DmsCard";

// interface Post {
//   id: number;
//   image: string;
//   name: string;
//   message: string;
//   action: boolean;
// }
const posts = [
  {
    id: 1,
    image: "https://i.ibb.co.com/6c782gQh/dms-image.png",
    name: "Foysal Munsy",
    call: "in-coming",
    date: "31 Aug 2025",
    action: true,
  },
];
export default async function CallsContent() {
  //   const data = await fetch("http://localhost:3000/dms.json");
  //   const posts: Post[] = await data.json();
  return (
    <Sidebar
      collapsible="none"
      className=" min-h-[85vh] m-4 bg-white border rounded-md w-[827px] "
    >
      <SidebarHeader className="text-[18px] flex flex-row justify-between items-center font-semibold text-[#191F38]">
        History
        <div className="border p-1 rounded-md">
          <Sort size="16" color="#4157FE" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="grid grid-cols-1 gap-2 ">
            {posts.map((post) => (
              <DmsCard
                key={post.id}
                image={post.image}
                name={post.name}
                message={post.call}
                action={post.action}
              />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
