import { FaRegCircle } from "react-icons/fa";
import SectionHeader from "../headers/section-header";
import { ReactNode } from "react";

function HowWeWork() {
  const phases = [
    {
      phase: "Discovery Phase",
      title: (
        <p>
          Research and <br className="hidden lg:block" /> Strategy
        </p>
      ),
      items: [
        "Stakeholder Interviews",
        "User Research",
        "Competitive Analysis",
        "User Personas",
        "Information Architecture (IA)",
        "User Journey Mapping",
      ],
    },
    {
      phase: "Ideation Phase",
      title: (
        <p>
          Design and <br className="hidden lg:block" /> Prototyping
        </p>
      ),
      items: ["Wireframing", "UI Design", "Prototyping", "Usability Testing"],
    },
    {
      phase: "Implementation Phase",
      title: (
        <p>
          Development <br className="hidden lg:block" /> Handoff & Testing
        </p>
      ),
      items: [
        "Developer Handoff",
        "Front-End Development",
        "Quality Assurance (QA) & Testing",
        "Launch & Post-Launch Support",
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4">
      <div className="mx-auto">
        <div className="flex justify-center items-center text-center">
          <SectionHeader
            headline={<p>How We Work</p>}
            description="Creative solutions, seamless collaboration, and impactful results."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-8 sm:py-10 md:py-12">
          {phases.map((phase, index) => (
            <PhaseCard
              key={index}
              phase={phase.phase}
              title={phase.title}
              items={phase.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;

interface PhaseCardProps {
  phase: string;
  title: ReactNode;
  items: string[];
}

function PhaseCard({ phase, title, items }: PhaseCardProps) {
  return (
    <div className="relative p-6 sm:p-8 rounded-[24.5px] shadow-[0px_2px_8px_0px_#00000026,inset_0px_-1px_1.7px_0px_#0000002B] space-y-4 sm:space-y-5">
      <div className="space-y-4 sm:space-y-5">
        <p className="text-xs leading-3.5 text-[#434343] font-[500] border-[#F5F5F6] border-[1px] font-inter w-fit px-2 py-1 rounded-full">
          {phase}
        </p>
        <h3 className="font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] leading-[1.3] font-space-grotesk">
          {title}
        </h3>
      </div>

      <ul className="space-y-2 sm:space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 sm:gap-3">
            <FaRegCircle className="w-3 h-3 text-[#C4F82A] fill-[#C4F82A] flex-shrink-0" />
            <span className="font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[26px] text-[#434343]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
