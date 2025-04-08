
import { cn } from "@/lib/utils";

interface ControlButtonProps {
  label: string;
  description: string;
  color: "red" | "blue" | "green" | "yellow";
  className?: string;
}

const ControlButton = ({ label, description, color, className }: ControlButtonProps) => {
  const colorClasses = {
    red: "bg-arcade-red text-white",
    blue: "bg-arcade-blue text-white",
    green: "bg-arcade-green text-black",
    yellow: "bg-arcade-yellow text-black"
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className={cn("w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-4 border-white font-arcade text-xl", colorClasses[color])}>
        {label}
      </div>
      <p className="font-pixel text-white text-center mt-2 max-w-[150px]">{description}</p>
    </div>
  );
};

export default ControlButton;
