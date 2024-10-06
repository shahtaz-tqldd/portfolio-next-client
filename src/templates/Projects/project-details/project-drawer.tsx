"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "lucide-react";

import ProjectDetails from ".";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";

interface IProjectDrawer {
  children: ReactNode;
  project: {
    name: string;
    description: string;
    img: StaticImageData | string;
    tags: string[];
    projectType: string;
    techs: string[];
    features: string;
    screens: string[];
  };
}

export function ProjectDetailsDrawer({ children, project }: IProjectDrawer) {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="flex justify-end pr-10">
          <DrawerClose>
            <X className="text-white" />
          </DrawerClose>
        </div>
        <div
          className="overflow-y-auto max-h-[90vh]"
          style={{ scrollbarWidth: "thin" }}
        >
          <ProjectDetails project={project} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
