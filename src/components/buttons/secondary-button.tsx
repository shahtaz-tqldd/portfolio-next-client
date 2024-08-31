import React, { ReactNode } from "react";

interface SecondaryButton {
  children: ReactNode;
}

const SecondaryButton = ({ children }: SecondaryButton) => {
  return (
    <button className="group relative overflow-hidden rounded-full bg-transparent py-3 px-5 text-sm transition-all w-48 text-black border border-green-300">
      <span className="z-0 absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-green-300/20 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
      <span className="relative z-10 font-medium text-green-300">
        {children}
      </span>
    </button>
  );
};

export default SecondaryButton;
