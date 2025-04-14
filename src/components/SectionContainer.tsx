
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

const SectionContainer = ({ children, className, id, fullWidth = false }: SectionContainerProps) => {
  return (
    <section id={id} className={cn("py-16", className)}>
      <div className={cn(fullWidth ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
