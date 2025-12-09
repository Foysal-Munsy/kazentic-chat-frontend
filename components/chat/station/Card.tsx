import { EllipsisVertical, Globe } from "lucide-react";
import Link from "next/link";

type PropsItem = {
  logo: string;
  title: string;
  description: string;
};
export default function Card({ logo, title, description }: PropsItem) {
  return (
    <div className=" border border-[#EBEBEB] p-4 w-[275px] rounded-[12px]">
      <div className="flex justify-between">
        <span className="bg-[#4157FE] w-[39px] h-[39px] text-white font-semibold text-[28.36px] rounded-[8.17px] text-center ">
          {logo}
        </span>
        <button type="button">
          <EllipsisVertical size={16} color="#697588" />
        </button>
      </div>
      <h2 className="font-semibold text-[16px] flex items-center gap-2">
        {title}{" "}
        <Link href="#">
          <Globe size={16} />
        </Link>
      </h2>
      <p className="text-[#7F899C] font-normal text-[14px] ">{description}</p>
    </div>
  );
}
