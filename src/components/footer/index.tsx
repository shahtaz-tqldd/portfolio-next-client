import React from "react";

import SparklesText from "../magicui/sparkles-text";
import { navItems } from "@/assets/data/navLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/20 py-10">
      <div className="container flex lg:flex-row flex-col lg:justify-between gap-6">
        <div>
          <SparklesText text="ALGOSTAR" />

          <p className="text-white/60 mt-4 text-sm max-w-[500px]">
            Algostar is a web development agancey specialized in building CRM,
            ERP and SaaS. We provide you web design and development solutions.
            From your ideas to UI/UX design and development, all in one place
          </p>
        </div>
        <div className="flex items-center gap-10">
          {navItems?.map((nav, i) => (
            <Link key={i} href={nav.href} className="text-white/75 hover:text-blue-500 tr text-sm">
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
      <span className="text-center mt-10 block text-sm font-science text-white/40">
        All rights reserved to &copy;2024 algostar.dev
      </span>
    </footer>
  );
};

export default Footer;
