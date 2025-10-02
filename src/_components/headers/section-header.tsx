export default function SectionHeader({
  headline,
  description = "Creative solutions, seamless collaboration, and impactful results.",
}: {
  headline: React.ReactNode;
  description: string;
}) {
  return (
    <div className="font-space-grotesk flex flex-col gap-[8px]">
      <div className="font-bold text-[56px] leading-[70px] uppercase text-[#262626]">
        {headline}
      </div>

      <div className="text-[18px] leading-[32px] text-[#434343]">
        {description}
      </div>
    </div>
  );
}
