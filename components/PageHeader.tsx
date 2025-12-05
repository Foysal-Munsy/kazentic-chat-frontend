import { SidebarHeader } from "./ui/sidebar";
type ItemsProps = {
  first: string;
  second: string;
};
export default function PageHeader({ first, second }: ItemsProps) {
  return (
    <div>
      <SidebarHeader className="flex flex-row items-center gap-2 ">
        <h2 className="font-medium text-sm text-[#8F97A2] h-6">{first}</h2>
        <span className="font-medium text-sm text-[#8F97A2] h-6">•</span>
        <h2 className="font-medium  text-sm h-6">{second}</h2>
      </SidebarHeader>
      {/* separator */}
      <div className="w-full h-px bg-[#EBEBEB] " />
    </div>
  );
}
