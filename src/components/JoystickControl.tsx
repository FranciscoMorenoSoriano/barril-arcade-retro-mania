
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

const JoystickControl = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40">
        {/* Base */}
        <div className="absolute inset-0 bg-black border-4 border-white rounded-full"></div>
        
        {/* Stick */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-arcade-red border-2 border-white rounded-full z-10"></div>
        
        {/* Directions */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-white">
          <ArrowUp className="w-6 h-6" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white">
          <ArrowDown className="w-6 h-6" />
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white">
          <ArrowLeft className="w-6 h-6" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white">
          <ArrowRight className="w-6 h-6" />
        </div>
      </div>
      <p className="font-pixel text-white text-center mt-4">
        Joystick para mover al personaje en todas las direcciones
      </p>
    </div>
  );
};

export default JoystickControl;
