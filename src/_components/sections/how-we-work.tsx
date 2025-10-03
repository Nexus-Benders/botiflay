import { FaRegCircle } from "react-icons/fa";
import SectionHeader from "../headers/section-header";

function HowWeWork() {
  const phases = [
    {
      phase: "Discovery Phase",
      title: "Research and Strategy",
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
      title: "Design and Prototyping",
      items: ["Wireframing", "UI Design", "Prototyping", "Usability Testing"],
    },
    {
      phase: "Implementation Phase",
      title: "Development Handoff & Testing",
      items: [
        "Developer Handoff",
        "Front-End Development",
        "Quality Assurance (QA) & Testing",
        "Launch & Post-Launch Support",
      ],
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="mx-auto">
        <div className="flex justify-center items-center text-center">
          <SectionHeader
            headline={<p>How We Work</p>}
            description="Creative solutions, seamless collaboration, and impactful results."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
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
  title: string;
  items: string[];
}

function PhaseCard({ phase, title, items }: PhaseCardProps) {
  return (
    <div className="relative p-8 rounded-[24.5px] shadow-[0px_2px_8px_0px_#00000026,inset_0px_-1px_1.7px_0px_#0000002B]">
      <div className="mb-6">
        <p className="text-xs leading-3.5 text-[#434343] font-[500] border-[#F5F5F6] border-[1px] font-inter w-fit px-2 py-1 rounded-full">
          {phase}
        </p>
        <h3 className="text-3xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>
      </div>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <FaRegCircle className="w-2 h-2 mt-1 text-[#C4F82A] fill-[#C4F82A] flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
