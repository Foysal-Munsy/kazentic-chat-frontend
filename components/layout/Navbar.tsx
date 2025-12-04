import { Button } from "@/components/ui/button";
import Image from "next/image";
import InputIconButton from "../shadcn-studio/input/input-32";

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between bg-linear-to-r from-[#111953] to-[#4157FE] h-[38px]">
        <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
        <div className="text-white">Input</div>
        <div className="text-white">Profile</div>
      </div>
    </div>
  );
}
