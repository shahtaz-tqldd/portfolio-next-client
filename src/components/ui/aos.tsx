"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
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
  className="",
}) => {
  const controls = useAnimation();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false); 
    };
  }, []);

  useEffect(() => {
    if (!isMounted) return; 

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start("show");
        } else {
          controls.start("hidden");
        }
      });
    };

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
  }, [controls, isMounted]);

  return (
    <motion.div
      ref={scrollRef}
      className={`${className} ${
        direction === "down" ? "mb-5" : direction === "up" ? "mt-5" : "my-0"
      } ${
        direction === "right" ? "mr-5" : direction === "left" ? "ml-5" : "mx-0"
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
