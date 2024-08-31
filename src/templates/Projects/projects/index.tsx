import React from "react";
import ProjectCard from "@/templates/Projects/project-card";
import ShinyButton from "@/components/magicui/shiny-button";
import { projects } from "../common";

const Projects = () => {
  return (
    <section id="projects" className="container py-20">
      <h2 className="text-center text-7xl font-science mb-16">Projects</h2>
      <div className="grid grid-cols-3 gap-10">
        {projects?.map((project, index) => (
          <ProjectCard key={index} data={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
