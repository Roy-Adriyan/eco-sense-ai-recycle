
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const Badge = ({ children, variant = "primary", className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        {
          "bg-eco-100 text-eco-800": variant === "primary",
          "bg-tech-100 text-tech-800": variant === "secondary",
          "bg-white/20 text-white border border-white/30": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
