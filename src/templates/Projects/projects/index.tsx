import React from "react";
import ProjectCard from "../components/project-card";
import { projects } from "../common";
import { ProjectData } from "../interface";

const Projects = () => {
  return (
    <section id="projects" className="container pt-10 pb-24">
      <h2 className="text-center text-5xl font-science mb-10">
        Featured Projects
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {projects?.map((project: ProjectData, index: number) => (
          <ProjectCard key={index} data={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
