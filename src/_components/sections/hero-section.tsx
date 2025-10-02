import Image from "next/image";

const optData = [
  {
    id: 1,
    label: "4-6 week Delivery",
  },
  {
    id: 2,
    label: "Transparent Pricing",
  },
  {
    id: 3,
    label: "100% Money-Back guarantee",
  },
];

export default function HeroSection() {
  return (
    <div className="h-dvh flex justify-center items-center">
      <MiddleSection />
    </div>
  );
}

function MiddleSection() {
  return (
    <div className="w-[854px] mx-auto flex justify-center items-center flex-col">
      <div className="border border-[#EDEDED] rounded-full min-w-[244px] flex flex-row gap-2 py-1.5 px-3.5">
        <figure>
          <Image
            src={"/assets/Avatar.png"}
            alt="avater-group"
            width={400}
            height={400}
            className="size-8 w-fit"
            quality={100}
            priority
          />
        </figure>
        <div className="flex flex-col gap-[2px]">
          <figure>
            <Image
              src={"/assets/star.png"}
              alt="avater-group"
              width={100}
              height={100}
              quality={100}
              priority
            />
          </figure>
          <p className="font-inter font-[500] text-[12px] leading-[14px]">
            150+ businesses scaled
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="font-bold text-[65px] leading-[65px] uppercase text-center">
          CRAFTING PREMIUM DESIGNS & DEVELOPMENT
        </h1>
        <div className="flex flex-row gap-5">
          {optData.map((item) => (
            <div
              key={item.id}
              className="flex flex-row gap-0 justify-start items-center"
            >
              <Image
                src={"/assets/Tick.png"}
                alt="tick"
                width={100}
                height={100}
                className="size-5"
              />
              <p className="text-[16px] leading-[26px] font-[400] text-[#434343]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <button
          className="px-10 py-[18px] rounded-[30px] relative text-white font-medium text-base transition-all duration-300 
         bg-gradient-to-b from-[#252525] to-[#8B8B8B] 
         border border-transparent 
         shadow-[inset_0_1px_3.9px_rgba(255,255,255,0.25),inset_0_4px_3.2px_rgba(255,255,255,0.25)]
         cursor-pointer hover:opacity-90"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
