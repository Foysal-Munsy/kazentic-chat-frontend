import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between bg-linear-to-r from-[#111953] to-[#4157FE] h-[38px]">
        <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
        <Input
          placeholder="Search..."
          className="w-[300px] h-[30px] rounded-md"
        />
        <div>
          <Button variant={"secondary"}>Click me</Button>
        </div>
      </div>
    </div>
  );
}
