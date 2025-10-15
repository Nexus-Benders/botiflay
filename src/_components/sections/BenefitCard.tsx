import Image from "next/image";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function BenefitCard({
  icon: icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-6">
        <Image
          src={icon}
          alt={title}
          width={100}
          height={100}
          className="size-16 lg:size-20"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  );
}
