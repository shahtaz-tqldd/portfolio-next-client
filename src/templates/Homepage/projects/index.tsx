import React from "react";
import ProjectCard from "@/templates/Projects/components/project-card";
import { projects } from "@/templates/Projects/common";
import AOS from "@/components/ui/aos";
import AccentButton from "@/components/buttons/accent-button";
import { ProjectData } from "@/templates/Projects/interface";

const Projects = () => {
  return (
    <section id="projects" className="container pt-24 pb-10">
      <h2 className="text-center text-5xl font-science mb-16">
        Featured Projects
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {projects?.map((project: ProjectData, index: number) => (
          <AOS key={index} delay={index * 0.1}>
            <ProjectCard data={project} index={index} />
          </AOS>
        ))}
      </div>
      <div className="flex justify-center mt-20">
        <AccentButton>See More Project</AccentButton>
      </div>
    </section>
  );
};

export default Projects;
