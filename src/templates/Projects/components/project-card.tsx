import AOS from "@/components/ui/aos";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ProjectDetailsDrawer } from "../project-details/project-drawer";

interface ProjectCardData {
  name: string;
  img: StaticImageData;
  description: string;
  tags?: string[];
  projectType: string;
  techs?: string[];
}

interface ProjectCardProps {
  data: ProjectCardData;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, index }) => {
  const { name, description, img, projectType, techs } = data;
  return (
    <div className="h-[512px] bg-white/[0.03] p-4 rounded-xl group flex flex-col justify-between">
      <div>
        <div className="h-[280px] w-full overflow-hidden rounded-lg">
          <Image
            src={img}
            className="h-full w-full object-cover rounded-lg group-hover:scale-110 transition duration-300"
            alt={name}
            height={300}
            width={500}
          />
        </div>
        <AOS delay={index * 0.2} className="mt-12">
          <span className="text-sm text-primary mt-9 mb-2 block">
            {projectType}
          </span>
          <h2 className="text-xl font-bold font-science -mb-2 text-white/80 group-hover:text-white tr">
            {name}
          </h2>
        </AOS>
        <AOS delay={index * 0.25}>
          <p className="text-white/50 group-hover:text-white/70 text-[15px] tr">
            {description}
          </p>
        </AOS>
      </div>

      <div className=" flex items-center justify-between">
        <div className="flex gap-1.5">
          {techs?.slice(0, 3)?.map((tag, i) => (
            <span
              key={i}
              className="text-xs py-1 px-2 bg-white/5 text-white/60 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <ProjectDetailsDrawer project={data}>
          <button className="flex items-center gap-1 cursor-pointer text-white/50 group-hover:text-primary tr">
            <span>See Details</span>
            <MdKeyboardArrowRight className="text-xl group-hover:translate-x-1 tr" />
          </button>
        </ProjectDetailsDrawer>
      </div>
    </div>
  );
};

export default ProjectCard;
