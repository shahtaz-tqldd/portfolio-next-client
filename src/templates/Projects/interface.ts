import { StaticImageData } from "next/image";

export interface ProjectData {
  name: string;
  img: StaticImageData | string;
  description: string;
  tags?: string[];
  projectType: string;
  techs?: string[];
  features?: string;
  screens?: string[];
  liveLink?: string;
}
