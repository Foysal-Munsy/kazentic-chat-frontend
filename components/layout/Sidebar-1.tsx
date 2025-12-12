import Image from "next/image";

export default function Sidebar1() {
  return (
    <aside className="w-[32px] sm:w-[36px] md:w-[38px] bg-[#111953] text-white min-h-screen flex flex-col">
      <div className="flex flex-col items-center gap-3 md:gap-4 mt-1">
        <button className="bg-linear-to-b from-[#FF9F00] to-[#FDBF00] text-center rounded-[6px] h-5 w-5 sm:h-6 sm:w-6 text-xs sm:text-sm">
          C
        </button>
        <button className="text-[#4157FE] text-xl sm:text-2xl text-center">
          +
        </button>
        <div
          className="w-5 sm:w-6 h-px bg-gray-500 my-0.5 sm:my-1 rounded"
          aria-hidden="true"
        />
        <button className="bg-linear-to-b from-[#FF4B00] to-[#FF9F00] text-center rounded-[6px] h-5 w-5 sm:h-6 sm:w-6 text-xs sm:text-sm">
          D
        </button>

        <button className="bg-linear-to-b from-[#059669] to-[#15BD6D] text-center rounded-[6px] h-5 w-5 sm:h-6 sm:w-6 text-xs sm:text-sm">
          L
        </button>
        <button className="text-[#4157FE] text-xl sm:text-2xl text-center">
          +
        </button>
        <div
          className="w-5 sm:w-6 h-px bg-gray-500 my-0.5 sm:my-1 rounded"
          aria-hidden="true"
        />
        <button className="text-[#4157FE] text-xl sm:text-2xl text-center">
          +
        </button>
      </div>

      {/* Footer buttons */}
      <div className="mt-auto flex flex-col items-center mb-3 sm:mb-4">
        <button>
          <Image
            src="/assets/svg-sidebar/foot-1.svg"
            alt="footer-1"
            width={36}
            height={36}
            className="w-9 sm:w-10 md:w-[42px] h-9 sm:h-10 md:h-[42px]"
          />
        </button>
        <button className="-mt-6 sm:-mt-7">
          <Image
            src="/assets/svg-sidebar/foot-2.svg"
            alt="footer-2"
            width={36}
            height={36}
            className="w-9 sm:w-10 md:w-[42px] h-9 sm:h-10 md:h-[42px]"
          />
        </button>
        <button className="-mt-6 sm:-mt-7">
          <Image
            src="/assets/svg-sidebar/foot-3.svg"
            alt="footer-3"
            width={36}
            height={36}
            className="w-9 sm:w-10 md:w-[42px] h-9 sm:h-10 md:h-[42px]"
          />
        </button>
      </div>
    </aside>
  );
}
