import React from "react";
import { pLanguages, techs } from "./common";
import AOS from "@/components/ui/aos";
import Marquee from "@/components/magicui/marquee";
import { FaStarOfLife } from "react-icons/fa";

const TechStack = () => {
  return (
    <section id="skills" className="pt-28 pb-10">
      <div className="max-w-5xl mx-auto">
        <AOS>
          <h2 className="text-center text-5xl font-science">My Tech Skills</h2>
          <p className="text-white/65 text-center mt-8 mb-10 text-lg">
            Over the years, I&apos;ve immersed myself in various technologies,
            constantly pushing to write optimized code that powers dynamic
            frontends and robust backends. Below is a snapshot of the tools that I
            have worked with, and I&apos;m always on the lookout for new technologies
            to explore and master.
          </p>
        </AOS>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          {techs?.map(({ icon: Icon, name }, index) => (
            <AOS
              key={index}
              className="flex items-center gap-2.5 text-primary bg-white/5 py-3 px-6 rounded-full hover:shadow-[0_0_16px_1px_rgba(118,149,255,0.8)] tr cursor-pointer"
              delay={index * 0.05}
            >
              <Icon />
              <span>{name}</span>
            </AOS>
          ))}
        </div>
      </div>
      <hr className="border-t border-b-none border-t-white/20 mb-4 mt-20" />
      <Marquee>
        {pLanguages?.map((lang, index) => (
          <div key={index} className="px-14 select-none text-white fl gap-3">
            <FaStarOfLife />
            <span>{lang.name}</span>
          </div>
        ))}
      </Marquee>
      <hr className="border-t border-b-none border-t-white/20 mt-4" />
    </section>
  );
};

export default TechStack;
