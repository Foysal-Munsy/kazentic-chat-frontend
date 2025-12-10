import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Call, UserAdd, Video } from "iconsax-reactjs";
import Image from "next/image";

const posts = [
  {
    id: 1,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
    status: "green",
    behavior: "default",
  },
  {
    id: 2,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
    status: "orange",
  },
  {
    id: 3,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
    status: "gray",
  },
  {
    id: 4,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
  },
  {
    id: 5,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
    status: "green",
  },
  {
    id: 6,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
    status: "orange",
  },
  {
    id: 7,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
    status: "gray",
  },
  {
    id: 8,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
  },
  {
    id: 9,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
    status: "green",
  },
  {
    id: 10,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
    status: "orange",
  },
  {
    id: 11,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
    status: "gray",
  },
  {
    id: 12,
    image: "/assets/Avatar1.png",
    name: "Foysal Munsy",
  },
];
export default function SpeedDial() {
  const header = " Speed Dial";
  const btn = (
    <button className="border p-2 w-8 h-8 rounded-md flex items-center cursor-pointer">
      <UserAdd width={20} height={20} color="#4157FE" />
    </button>
  );
  return (
    <Sidebar
      collapsible="none"
      className=" h-[500px] m-4 bg-[#FDFDFD] border rounded-md w-[321px] flex flex-col"
    >
      <div className="w-[292px mx-auto] px-1.5 flex flex-col h-full">
        <SidebarHeader className="text-[18px]  flex flex-row justify-between items-center font-semibold text-[#191F38] shrink-0">
          {header}

          <Dialog>
            <form>
              <DialogTrigger asChild>{btn}</DialogTrigger>
              <DialogContent className="w-[347px] h-[177px] rounded-[12px]">
                <DialogHeader>
                  <DialogTitle>Add to speed dial</DialogTitle>
                </DialogHeader>

                <div>
                  <Input
                    className="placeholder:text-[#B3B3B3] placeholder:font-normal placeholder:text-[14px] placeholder:-tracking-[5%] h-10 "
                    placeholder="Type a name or number"
                  />
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      //   variant={"outline"}
                      className="bg-[#FDFEFE] text-[#6F6F6F] font-normal text-[14px] border border-[#EBEBEB] w-[69px] h-8 cursor-pointer hover:bg-[#FDFEFE]"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    // variant={"outline"}
                    className="bg-[#4157FE] w-[65px] h-8 font-normal cursor-pointer text-[14px] hover:bg-[#4157FE]"
                  >
                    Add
                  </Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </SidebarHeader>
        {/* className="w-[292px] mx-auto" */}
        <SidebarContent className="overflow-y-auto flex-1">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`flex items-center justify-between px-1.5 py-6 w-[292px] mx-auto h-[37px] ${
                post?.behavior === "default" &&
                "bg-[#F2F9FE] border border-[#4157FE33] rounded-xl"
              }`}
            >
              {/* image and name */}
              <div className="flex items-center gap-[9px] ">
                <div className="relative w-8 h-8">
                  <Image
                    className="rounded-full object-cover"
                    src={post.image}
                    alt="profile"
                    width={29}
                    height={29}
                  />
                  {post.status === "green" ? (
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white bg-[#22C55E]" />
                  ) : post.status === "gray" ? (
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white bg-[#697588]" />
                  ) : (
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white bg-[#FF9F00]" />
                  )}
                </div>
                <h1 className="text-[#191F38] font-normal text-[15px]">
                  {post.name}
                </h1>
              </div>
              {/* button  */}
              {post?.behavior === "default" && (
                <div className="flex items-center gap-[11px] pr-5">
                  <Call size="16" color="#4157FE" />
                  <Video size="16" color="#4157FE" />
                </div>
              )}
            </div>
          ))}
        </SidebarContent>
      </div>
    </Sidebar>
  );
}
