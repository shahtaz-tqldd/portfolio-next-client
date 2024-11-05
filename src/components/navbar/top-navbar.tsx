"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "../logo";
import Link from "next/link";
import { Moon, Palette, Sun } from "lucide-react";
import { genNavItems, navItems } from "./common";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
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

  const [navItemList, setNavItemList] = useState(navItems);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname == "") {
      setNavItemList(navItems);
    }
    if (pathname.includes("blogs") || pathname.includes("projects")) {
      setNavItemList(genNavItems);
    }
  }, [pathname]);
  return (
    <nav className="py-3 sticky top-0 bg-[#0e0c15] border-b border-b-white/10 z-50 md:block hidden">
      <div className="container flex items-center justify-between">
        <Logo />

        <div className="relative flex border border-white/20 rounded-full p-1">
          {navItemList.map((item, index) => (
            <Link
              key={index}
              ref={(el) => {
                menuItemRefs.current[index] = el;
              }}
              className={`relative block py-2 px-5 rounded-full text-center text-sm z-10 ${
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

        <div className="fl gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="h-9 w-9 border border-white/15 rounded-lg center hover:bg-white/10 tr"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <div className="relative">
            <button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="h-9 w-9 border border-white/15 rounded-lg center hover:bg-white/10 tr"
            >
              <Palette className="h-4 w-4" />
            </button>
            {isThemeMenuOpen && (
              <div className={`absolute right-0 top-12 bg-dark w-40 rounded-lg border border-white/15 shadow-lg tr ${!isThemeMenuOpen? "opacity-0":"opacity-100"}`}>
                <h2 className="text-sm p-3">Choose a Theme</h2>
                <hr className="border-t border-white/10 border-b-none" />
                <div className="p-1 flex flex-col gap-1">
                  <div className="fl gap-2 py-1 px-2 hover:bg-white/10 rounded tr cursor-pointer">
                    <span className="w-3 h-3 bg-[#3FA2F6] rounded-full border border-white/20"></span>
                    <span className="w-3 h-3 bg-[#CDE8E5] rounded-full border border-white/20"></span>
                    <span className="pl-2 text-sm text-white/70">Neptune</span>
                  </div>
                  <div className="fl gap-2 py-1 px-2 hover:bg-white/10 rounded tr cursor-pointer">
                    <span className="w-3 h-3 bg-[#40A578] rounded-full border border-white/20"></span>
                    <span className="w-3 h-3 bg-[#FDE49E] rounded-full border border-white/20"></span>
                    <span className="pl-2 text-sm text-white/70">Manuver</span>
                  </div>
                  <div className="fl gap-2 py-1 px-2 hover:bg-white/10 rounded tr cursor-pointer">
                    <span className="w-3 h-3 bg-[#FF5F00] rounded-full border border-white/20"></span>
                    <span className="w-3 h-3 bg-[#5AB2FF] rounded-full border border-white/20"></span>
                    <span className="pl-2 text-sm text-white/70">Nebula</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
