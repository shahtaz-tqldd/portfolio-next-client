import React from "react";

import SparklesText from "../magicui/sparkles-text";
import { navItems } from "@/assets/data/navLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/20 py-10">
      <div className="container flex lg:flex-row flex-col lg:justify-between gap-6">
        <div>
          <h2 className="font-science tracking-wider">FYI</h2>
          <p className="text-white/60 mt-3 text-sm max-w-[500px]">
            This portfolio site is designed by myself slightly on Figma and then
            developed with Next JS, TypeScript, Tailwind CSS and Magic UI
          </p>
        </div>
        <div className="flex items-center gap-10">
          {navItems?.map((nav, i) => (
            <Link
              key={i}
              href={nav.href}
              className="text-white/75 hover:text-green-400 tr text-sm"
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
      <span className="text-center mt-10 block text-sm text-white/40">
        All rights reserved to &copy;{new Date().getFullYear()} Shahtaz Rahman
      </span>
    </footer>
  );
};

export default Footer;
