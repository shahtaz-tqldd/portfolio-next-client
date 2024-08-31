import { BiLogoRedux } from "react-icons/bi";
import { FaReact, FaNodeJs, FaDocker, FaGoogle, FaBuffer } from "react-icons/fa";
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
  SiGoogleoptimize,
} from "react-icons/si";
import { TbAlphabetLatin } from "react-icons/tb";

// Mapping of tech names to icons
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

export const workExperiences = [
  {
    id: 3,
    companyName: "EchoLogyx Ltd",
    logo: "https://echologyx.com/wp-content/uploads/2022/03/EchoLogyx_logo_RGB-white-1-6.png",
    logoClass: "h-12 w-[200px] object-contain -mb-2",
    website: "https://www.echologyx.com",
    duration: "March 2024 - Present",
    designation: "Software Engineer",
    about:
      "EchoLogyx is a leading development and innovation firm, evolving from a small Camden hub to a team of 100+ experts. We partner with Fortune 500 companies to deliver cutting-edge solutions in development, design, and QA. I work here as a software engineer, focusing on chatbot projects and A/B testing to drive excellence and client success.",
    techs: [
      { name: "React JS", icon: FaReact },
      { name: "Material UI", icon: SiMui },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "Node JS", icon: FaNodeJs },
      { name: "A/B Testing", icon:  TbAlphabetLatin },
      { name: "Convert", icon: FaBuffer },
      { name: "Google Optimizely", icon: SiGoogleoptimize },
    ],
    projects: [{ name: "ELX Chatbot", link: "" }],
  },
  {
    id: 2,
    companyName: "AyyKori Digital",
    logo: "https://ayykori.net/static/media/AK-Horizontal-Logo.7aaf857302a2d343c6e7.png",
    logoClass: "h-10 w-[180px] object-cover -ml-5",
    website: "https://www.ayykori.net",
    duration: "July 2023 - December 2023",
    designation: "Junior MERN Stack Developer",
    about:
      "Ayykori is an affiliate and cashback site in Bangladesh. I started as an intern and later became a Junior MERN Stack Developer. I collaborated with a team of 5 developers on 6 projects.",
    techs: [
      { name: "React JS", icon: FaReact },
      { name: "Next JS", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Redux Toolkit", icon: BiLogoRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Material UI", icon: SiMui },
      { name: "Node JS", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Google API", icon: FaGoogle },
    ],
    projects: [
      { name: "Ayykori Management", link: "" },
      { name: "HRM Software", link: "" },
      { name: "Restaurant Management", link: "" },
    ],
  },
//   {
//     id: 1,
//     companyName: "Ishqool",
//     logo: "data:image/png;base64,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",
//     logoClass: "h-12 w-fit",
//     website: "https://www.ishqool.com",
//     duration: "April 2023 - November 2023",
//     designation: "IT Manager (Part-time)",
//     about:
//       "Ishqool is an ed-tech startup in Bangladesh. I joined as an IT manager to lead projects and manage a team of 4 developers. I also work on hand coding there.",
//     techs: [
//       { name: "React JS", icon: FaReact },
//       { name: "Redux", icon: FaReact },
//       { name: "Redux Toolkit", icon: FaReact },
//       { name: "Tailwind CSS", icon: SiTailwindcss },
//       { name: "Socket.io", icon: SiSocketdotio },
//       { name: "Node JS", icon: FaNodeJs },
//       { name: "MongoDB", icon: SiMongodb },
//       { name: "PostgreSQL", icon: SiPostgresql },
//     ],
//     projects: [
//       { name: "IQ Barter", link: "https://www.iqbarter.com" },
//       { name: "IQ Sonet", link: "https://www.iqsonet.com" },
//     ],
//   },
];
