import type { NextPage } from "next";
import ProjectDetails from "@/templates/Projects/project-details";
import { StaticImageData } from "next/image";
import { ProjectData } from "@/templates/Projects/interface";

// Define the project type
interface IProjectDetails {
  project: ProjectData;
}

// Mock project data to pass as a prop
const mockProjectData: IProjectDetails["project"] = {
  name: "Awesome Portfolio Site",
  description: "A personal portfolio to showcase my projects and skills.",
  img: "/images/portfolio-screenshot.png",
  tags: ["Web Development", "Frontend", "Portfolio"],
  projectType: "Web Application",
  techs: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  features:
    "Responsive design, animated transitions, and dynamic content loading.",
  screens: ["/images/screen1.png", "/images/screen2.png"],
};

const ProjectDetailsPage: NextPage = () => {
  return <ProjectDetails project={mockProjectData} />;
};

export default ProjectDetailsPage;
