export default function SectionHeader({
  headline,
  description = "Creative solutions, seamless collaboration, and impactful results.",
  hasBlackBg = false,
}: {
  headline: React.ReactNode;
  description?: string;
  hasBlackBg?: boolean;
}) {
  return (
    <div className="font-space-grotesk flex flex-col gap-2 sm:gap-[8px] px-4">
      <div
        className={`font-bold text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-[1.2] sm:leading-[1.25] uppercase ${
          hasBlackBg ? "text-white" : "text-[#262626]"
        }`}
      >
        {headline}
      </div>

      <div
        className={`text-sm sm:text-base md:text-lg lg:text-[18px] leading-[1.6] sm:leading-[1.7] md:leading-[1.8] ${
          hasBlackBg ? "text-white" : "text-[#434343]"
        }`}
      >
        {description}
      </div>
    </div>
  );
}
