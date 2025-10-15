import {
  Layers,
  Clock,
  Calendar,
  RotateCcw,
  Maximize2,
  PauseCircle,
} from "lucide-react";

import BenefitCard from "./BenefitCard";

const benefits = [
  {
    icon: "/member/Icon.png",
    title: "DESIGN PANEL",
    description: "Add as many design requests to your board as you want.",
  },
  {
    icon: "/member/Icon-1.png",
    title: "QUICK DELIVERY",
    description:
      "Receive your design within a few days on average, one at a time.",
  },
  {
    icon: "/member/Icon-2.png",
    title: "FIXED MONTHLY RATE",
    description: "No surprises! Pay the same fixed price each month.",
  },
  {
    icon: "/member/Icon-3.png",
    title: "UNLIMITED REVISIONS",
    description:
      "Change it, swap it, until it's just right — as many times as you want",
  },
  {
    icon: "/member/Icon-4.png",
    title: "FLEXIBLE & SCALABLE",
    description:
      "Get more or less, pause or stop your plan anytime — you're in charge",
  },
  {
    icon: "/member/Icon-5.png",
    title: "PAUSE OR CANCEL ANYTIME",
    description:
      "Flexibility at your fingertips—pause or cancel your subscription anytime.",
  },
];

export default function MembershipBenefits() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
            MEMBERSHIP BENEFITS
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Choose the perfect plan for your business. Whether you need a simple
            landing page or a full-scale custom website, we&apos;ve got you
            covered!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
