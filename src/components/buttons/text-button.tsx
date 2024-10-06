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
const TextButton = ({
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
        "group relative overflow-hidden rounded-full bg-transparent transition-all tr",
        filled && "bg-white",
        className
      )}
      onClick={() => handleButtonClick(link)}
    >
      <span
        className="relative z-10 font-medium text-primary"
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
      
    </motion.button>
  );
};

export default TextButton;
