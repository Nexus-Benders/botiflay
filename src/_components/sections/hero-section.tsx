import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="min-h-dvh flex justify-center items-center">
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
      <div>
        <h1 className="font-bold text-[65px] leading-[65px] uppercase text-center">
          CRAFTING PREMIUM DESIGNS & DEVELOPMENT
        </h1>
      </div>
    </div>
  );
}
