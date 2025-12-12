import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import Image from "next/image";

export function EmptyOutline() {
  return (
    <Empty className="border border-dashed h-[197px]">
      <EmptyHeader>
        <EmptyMedia
          className="rounded-full bg-[#E6F2FE] w-[60px] h-[60px]"
          variant="icon"
        >
          <Image
            src={"/assets/svg/document-upload.svg"}
            alt="icon"
            width={33}
            height={33}
          />
        </EmptyMedia>
        <EmptyTitle>Drag and drop file here</EmptyTitle>
        <EmptyDescription className="text-[#697588]">
          or click to browse (4mb Max)
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
