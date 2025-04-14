
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className }: FeatureCardProps) => {
  return (
    <div className={cn("bg-white rounded-lg p-6 shadow-md border border-eco-100 hover:shadow-lg transition-shadow duration-300", className)}>
      <div className="flex flex-col h-full">
        <div className="p-3 rounded-full bg-eco-50 w-fit mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
