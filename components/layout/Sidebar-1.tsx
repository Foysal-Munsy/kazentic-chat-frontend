import Image from "next/image";

export default function Sidebar1() {
  return (
    <aside className="w-[38px] bg-[#111953]  text-white min-h-screen">
      <div className="flex  flex-col items-center gap-4 mt-1">
        <button className="bg-linear-to-b from-[#FF9F00] to-[#FDBF00] text-center rounded-[6px] h-6 w-6">
          C
        </button>
        <button className="text-[#4157FE] text-2xl text-center ">+</button>
        <div className="w-6 h-px bg-gray-500 my-1 rounded" aria-hidden="true" />
        <button className="bg-linear-to-b from-[#FF4B00] to-[#FF9F00] text-center rounded-[6px] h-6 w-6">
          D
        </button>

        <button className="bg-linear-to-b from-[#059669] to-[#15BD6D] text-center rounded-[6px] h-6 w-6">
          L
        </button>
        <button className="text-[#4157FE] text-2xl text-center ">+</button>
        <div className="w-6 h-px bg-gray-500 my-1 rounded" aria-hidden="true" />
        <button className="text-[#4157FE] text-2xl text-center ">+</button>
      </div>
    </aside>
  );
}
