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
    <div className="font-space-grotesk flex flex-col gap-[8px]">
      <div
        className={`font-bold text-[56px] leading-[70px] uppercase ${
          hasBlackBg ? "text-white" : "text-[#262626]"
        }`}
      >
        {headline}
      </div>

      <div
        className={`text-[18px] leading-[32px] ${
          hasBlackBg ? "text-white" : "text-[#434343]"
        }`}
      >
        {description}
      </div>
    </div>
  );
}
