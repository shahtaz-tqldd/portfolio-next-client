import { BiLogoRedux } from "react-icons/bi";
import { FaReact, FaNodeJs, FaGoogle, FaBuffer } from "react-icons/fa";
import {
  SiNextdotjs,
  SiSocketdotio,
  SiMongodb,
  SiDjango,
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiGoogleoptimize,
} from "react-icons/si";
import { TbAlphabetLatin } from "react-icons/tb";

export const workExperiences = [
  {
    id: 2,
    companyName: "EchoLogyx Ltd",
    logo: "https://echologyx.com/wp-content/uploads/2022/03/EchoLogyx_logo_RGB-white-1-6.png",
    logoClass: "h-12 w-[200px] object-contain -mb-2",
    website: "https://www.echologyx.com",
    duration: "March 2024 - Present",
    designation: "Software Engineer",
    about:
      "At EchoLogyx, I started working on A/B testing using Convert and Google Optimizely tools, helping to optimize user experiences and drive data-backed decision-making. Then I worked in an AI chatbot application as a frontend developer, ensuring smooth user interactions and integrations. Additionally, I worked as a full-stack developer on a Visual Testing Automation project, where I built and maintained both the frontend and backend systems, delivering a complete end-to-end solution.",
    techs: [
      { name: "React JS", icon: FaReact },
      { name: "Material UI", icon: SiMui },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "Node JS", icon: FaNodeJs },
      { name: "Django", icon: SiDjango },
      { name: "A/B Testing", icon: TbAlphabetLatin },
      { name: "Convert", icon: FaBuffer },
      { name: "Google Optimizely", icon: SiGoogleoptimize },
    ],
    projects: [
      { name: "ELX Chatbot", link: "" },
      { name: "Visual Automation", link: "" },
    ],
  },
  {
    id: 1,
    companyName: "AyyKori Digital",
    logo: "https://ayykori.net/static/media/AK-Horizontal-Logo.7aaf857302a2d343c6e7.png",
    logoClass: "h-10 w-[180px] object-cover -ml-5",
    website: "https://www.ayykori.net",
    duration: "July 2023 - December 2023",
    designation: "MERN Stack Developer",
    about:
      "During my time at AyyKori Digital, I worked as a full-stack developer using the MERN stack. I collaborated closely with a team of 4 other developers to deliver high-quality projects, including management and HRM software. My responsibilities spanned from creating responsive frontend interfaces using React and Tailwind CSS to designing robust backend APIs with Node.js and MongoDB, ensuring seamless integration and functionality across the board.",
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
];
