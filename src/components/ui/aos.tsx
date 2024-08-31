"use client";

import React, { ReactNode, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";

interface AOSProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  direction?: string;
  className?: string;
}

const AOS: React.FC<AOSProps> = ({
  children,
  duration = 0.4,
  delay = 0,
  direction = "up",
  className,
}) => {
  const controls = useAnimation();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start("show");
        } else {
          controls.start("hidden");
        }
      });
    },
    [controls]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });

    const current = scrollRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [handleIntersection]);

  return (
    <motion.div
      ref={scrollRef}
      className={`${className} ${direction === "down" ? "mb-5" : "mt-5"} ${
        direction === "right" ? "mr-5" : "ml-5"
      }`}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          y: direction === "down" ? 20 : direction === "up" ? -20 : 0,
          x: direction === "right" ? 20 : direction === "left" ? -20 : 0,
        },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AOS;
