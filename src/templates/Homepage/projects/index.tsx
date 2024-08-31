import React from "react";
import ProjectCard from "@/templates/Projects/project-card";
import ShinyButton from "@/components/magicui/shiny-button";
import { projects } from "@/templates/Projects/common";
import AOS from "@/components/ui/aos";
import AccentButton from "@/components/buttons/accent-button";

const Projects = () => {
  return (
    <section id="projects" className="container pt-28 pb-10">
      <h2 className="text-center text-7xl font-science mb-16">
        Featured Projects
      </h2>
      <div className="grid grid-cols-3 gap-10">
        {projects?.map((project, index) => (
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
