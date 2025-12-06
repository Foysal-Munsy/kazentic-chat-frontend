import Image from "next/image";

type DmsCardProps = {
  image: string;
  name: string;
  message: string;
  action: boolean;
};
export default function DmsCard({
  image,
  name,
  message,
  action,
}: DmsCardProps) {
  const status = "active";

  return (
    <div className={`p-2 rounded-md ${action ? "bg-[#F2F9FE]" : ""}`}>
      <div className="flex items-center gap-2 ">
        <div className="border-r-2 border-[#4157FE] h-[50px]"></div>
        <div className="relative h-11 w-11 shrink-0">
          <Image
            className="rounded-full object-cover"
            src={image}
            alt={name || "image"}
            fill
            sizes="44px"
          />
          {status === "active" && (
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border border-white bg-[#22C55E]" />
          )}
        </div>
        <div className="min-w-0">
          <div className="flex items-center justify-between">
            <h1 className="text-[#191F38] font-semibold text-[14px]">{name}</h1>
            <p className="text-[#697588]">Thu</p>
          </div>
          <p
            className="text-[#697588] font-normal text-[12px] truncate"
            title={message}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
