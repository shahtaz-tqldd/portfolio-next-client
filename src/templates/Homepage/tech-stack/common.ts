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
  SiRedux,
} from "react-icons/si";

const techIcons: { [key: string]: React.ComponentType } = {
  "React JS": FaReact,
  "Next JS": SiNextdotjs,
  Typescript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  Redux: SiRedux,
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

export interface ITech {
  name: string;
  icon: React.ComponentType;
}

export const techs: ITech[] = [
  "React JS",
  "Next JS",
  "Typescript",
  "Tailwind CSS",
  "Redux",
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
  icon: techIcons[tech as keyof typeof techIcons],
}));

export const pLanguages = [
  {
    id: 1,
    name: "C++",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    id: 2,
    name: "Python",
    img: "https://www.aadhavgroup.com/wp-content/uploads/elementor/thumbs/Aadhav_Group_Python_Development-qevsohtnjlo41cb2j09w15ejf7qqesvn437mzhhjyc.png",
  },
  {
    id: 3,
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    id: 4,
    name: "TypeScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  },
  {
    id: 5,
    name: "SQL",
    img: "https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png",
  },
];
