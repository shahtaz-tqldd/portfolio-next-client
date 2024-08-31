"use client";

import { useRouter } from "next/navigation";
import { motion, type AnimationProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const animationProps = {
  initial: { "--x": "100%", scale: 0.95 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;
interface ShinyButtonProps {
  children: ReactNode;
  className?: string;
  filled?: boolean;
  link?: string;
}
const MainButton = ({
  children = "Button Text",
  className,
  filled = false,
  link,
}: ShinyButtonProps) => {
  const router = useRouter();
  const handleButtonClick = (link?: string) => {
    if (link) {
      router.push(link);
    } else {
      return;
    }
  };
  return (
    <motion.button
      {...animationProps}
      className={cn(
        "group relative overflow-hidden rounded-full bg-green-300 py-3 px-5 text-sm transition-all w-40 text-black tr",
        filled && "bg-white",
        className
      )}
      onClick={() => handleButtonClick(link)}
    >
      <span
        className="relative z-10 font-semibold text-black group-hover:text-white tr"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
      ></span>
      <span className="z-0 absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-green-400 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
    </motion.button>
  );
};

export default MainButton;
