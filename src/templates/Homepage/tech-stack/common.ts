import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiFirebase,
  SiSocketdotio,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiDjango,
  SiTailwindcss,
  SiMui,
  SiAngular,
} from "react-icons/si";

const techIcons = {
  "React JS": FaReact,
  "Next JS": SiNextdotjs,
  Typescript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Material UI": SiMui,
  "Node JS": FaNodeJs,
  Express: SiExpress,
  Firebase: SiFirebase,
  Docker: FaDocker,
  "Socket.io": SiSocketdotio,
  GraphQL: SiGraphql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Django: SiDjango,
  "Angular JS": SiAngular,
};
interface ITechs{
name: string;
icon: React.ComponentType
}

export const techs:ITechs = [
  "React JS",
  "Next JS",
  "Typescript",
  "Tailwind CSS",
  "Material UI",
  "Node JS",
  "Express",
  "Django",
  "Firebase",
  "Docker",
  "Socket.io",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Angular JS",
].map((tech) => ({
  name: tech,
  icon: techIcons[tech],
}));