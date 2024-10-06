import React from "react";
import { navItems } from "@/assets/data/navLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/20 py-10">
      <div className="container flex lg:flex-row flex-col lg:justify-between gap-6">
        <div>
          <h2 className="font-science tracking-wider">FYI</h2>
          <p className="text-white/60 mt-3 text-sm max-w-[500px]">
            This portfolio is a personal creation, starting with a custom design
            on Figma and developed using Next.js, TypeScript, and Tailwind CSS.
            With a blend of ShadCN, Framer Motion, and Magic UI.
          </p>
        </div>
        <div className="flex items-center gap-10">
          {navItems?.map((nav, i) => (
            <Link
              key={i}
              href={nav.href}
              className="text-white/75 hover:text-primary tr text-sm"
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
