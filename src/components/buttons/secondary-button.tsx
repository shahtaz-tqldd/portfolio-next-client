import React, { ReactNode } from "react";

interface SecondaryButton {
  children: ReactNode;
}

const SecondaryButton = ({ children }: SecondaryButton) => {
  return (
    <button className="group relative overflow-hidden rounded-full bg-transparent py-3 px-5 text-sm transition-all w-48 border border-primary/20 hover:shadow-[0_0_16px_1px_rgba(118,149,255,0.8)] tr">
      <span className="z-0 absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-primary/20 transition-all duration-300 ease-out group-hover:translate-y-20"></span>
      <span className="relative z-10 font-medium text-primary group-hover:text-white tr">
        {children}
      </span>
    </button>
  );
};

export default SecondaryButton;
