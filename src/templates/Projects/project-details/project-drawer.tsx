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
import { ProjectData } from "../interface";

interface IProjectDrawer {
  children: ReactNode;
  project: ProjectData;
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
