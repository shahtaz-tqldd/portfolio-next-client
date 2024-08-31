import AOS from "@/components/ui/aos";
import React from "react";
import { workExperiences } from "./common";

const WorkExperiences = () => {
  return (
    <section id="experiences" className="container pt-28 pb-10">
      <h2 className="text-center text-7xl font-science mb-16">
        Work Experiences
      </h2>

      <div className="flex flex-col gap-20">
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
            <div key={index} className="flex gap-10">
              <div className="w-2/5">
                <AOS direction="right">
                  <img src={logo} className={logoClass} />
                  <h2 className="mt-4 font-science font-medium">
                    {designation} at {companyName}
                  </h2>
                  <p className="text-sm text-white/50">{duration}</p>
                </AOS>
              </div>
              <div className="w-3/5">
                <AOS direction="left">
                  <p className="text-white/60">{about}</p>
                  <div className="mt-8">
                    <h2 className="text-green-300">Tech Stack</h2>
                    <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                      {techs.map(({ icon: Icon, name }, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-white/80"
                        >
                          <Icon />
                          {name}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 ">
                    <h2 className="text-green-300">Projects</h2>
                    <div className="mt-2 flex flex-wrap gap-x-6 gap-y-4">
                      {projects.map(({ name, link }, index) => (
                        <a
                          key={index}
                          href={link}
                          target={link ? "_blank" : ""}
                          className="text-sm text-white/80"
                        >
                          {name}
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
