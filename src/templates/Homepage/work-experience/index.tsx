import AOS from "@/components/ui/aos";
import React from "react";
import { workExperiences } from "./common";
import { GoArrowUpRight } from "react-icons/go";

const WorkExperiences = () => {
  return (
    <section id="experiences" className="container pt-28 pb-10">
      <h2 className="text-center md:text-5xl text-3xl font-science mb-10">
        Work Experiences
      </h2>

      <div className="flex flex-col">
        {workExperiences?.map(
          (
            {
              companyName,
              logo,
              logoClass,
              duration,
              designation,
              about,
              techs,
              projects,
            },
            index
          ) => (
            <div key={index} className="flex lg:flex-row flex-col gap-6 border-b border-b-white/10 py-12">
              <div className="lg:w-2/5 w-full -ml-4">
                <AOS direction="right">
                  <img src={logo} className={logoClass} />
                  <h2 className="mt-4">
                    {designation} at {companyName}
                  </h2>
                  <p className="text-sm text-white/50 mt-1">{duration}</p>
                </AOS>
              </div>
              <div className="lg:w-3/5 w-full">
                <AOS direction="left">
                  <p className="text-white/65">{about}</p>
                  <div className="mt-8">
                    <h2 className="text-primary">Tech Stack</h2>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {techs.map(({ icon: Icon, name }, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-white/80 bg-white/10 px-3 py-1 rounded-full"
                        >
                          <Icon />
                          {name}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 ">
                    <h2 className="text-primary">Projects</h2>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {projects.map(({ name, link }, index) => (
                        <a
                          key={index}
                          href={link}
                          target={link ? "_blank" : ""}
                          className="fl gap-1.5 text-sm text-white/80 py-2.5 pr-3 pl-4 rounded-full border border-white/10 bg-white/5 hover:shadow-[0_0_16px_1px_rgba(118,149,255,0.8)] tr"
                        >
                          {name} 
                          <GoArrowUpRight className="text-base mt-0.5"/>
                        </a>
                      ))}
                    </div>
                  </div>
                </AOS>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default WorkExperiences;
