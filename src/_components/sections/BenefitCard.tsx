import { Video as LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-6">
        <Icon className="w-12 h-12 text-lime-500" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-gray-600 text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
}
