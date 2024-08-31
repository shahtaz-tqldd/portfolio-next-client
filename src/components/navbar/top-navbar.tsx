"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "../logo";
import Link from "next/link";
import { navItems } from "@/assets/data/navLinks";
import { Mail } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
  const [menuItemWidths, setMenuItemWidths] = useState<number[]>([]);
  const menuItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Update widths when refs change
    const updateWidths = () => {
      const widths = menuItemRefs.current.map((ref) => ref?.offsetWidth || 0);
      setMenuItemWidths(widths);
    };

    updateWidths();

    // Set active index based on current pathname
    const currentIndex = navItems.findIndex((item) => item.href === pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }

    // Recalculate widths on window resize to ensure proper width calculation
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, [pathname]);

  const calculateSliderPosition = (index: number) => {
    return menuItemRefs.current
      .slice(0, index)
      .reduce((acc, ref) => acc + (ref?.offsetWidth || 0), 0);
  };

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    index: number
  ) => {
    setActiveIndex(index);
    if (href.startsWith("#")) {
      event.preventDefault();
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="py-4 sticky top-0 bg-[#0e0c15] border-b border-b-white/10 z-50">
      <div className="container flex items-center justify-between">
        <Logo />

        <div className="relative flex border border-white/20 rounded-full p-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              ref={(el) => {
                menuItemRefs.current[index] = el;
              }}
              className={`relative block py-2 px-5 rounded-full text-center z-10 ${
                activeIndex === index ? "text-black" : "text-white/60"
              }`}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href, index)}
            >
              {item.name}
            </Link>
          ))}
          {menuItemWidths.length > 0 && (
            <motion.div
              initial={false}
              animate={{
                x: calculateSliderPosition(activeIndex),
                width: menuItemWidths[activeIndex],
                backgroundColor: "#fff",
                color: "#222",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute top-1 bottom-1 left-1 rounded-full pointer-events-none z-0"
            />
          )}
        </div>

        <div>
          <div className="py-1 text-sm flex items-center gap-2">
            <span className="ml-8 text-white/50">Reach out at</span>
          </div>
          <a
            href="mailto:shahtaz67@gmail.com"
            className="text-base flex items-center gap-2"
          >
            <Mail className="h-4" />{" "}
            <span className="text-white">shahtaz67@gmail.com</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
