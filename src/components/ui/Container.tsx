import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("w-[92%] lg:max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
