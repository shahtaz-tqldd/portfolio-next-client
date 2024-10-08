"use client";
import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import TextButton from "@/components/buttons/text-button";
import { ProjectData } from "../interface";
import "./styles.css";

interface IProjectDetails {
  project: ProjectData;
}

const ProjectDetails = ({ project }: IProjectDetails) => {
  const {
    name,
    description,
    img,
    tags,
    projectType,
    techs,
    features,
    screens,
  } = project;
  return (
    <section className="container">
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-white/60 text-sm mb-4">{projectType}</p>
            <h2 className="text-4xl text-white font-semibold font-science">
              {name}
            </h2>
            <p className="mt-3 text-white/65">{description}</p>
            <div className="flex flex-wrap gap-4 mt-5">
              {tags?.map((tag: string, i: number) => (
                <span key={i} className="text-sm text-white/80">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-12 fl">
              <TextButton>
                <div className="fl gap-2 justify-center">
                  <span>Live Link</span>
                  <GoArrowUpRight className="text-lg" />
                </div>
              </TextButton>
            </div>
          </div>
          <div>
            <Image
              src={img}
              className="w-full h-[420px] object-cover rounded-2xl border border-white/10"
              height={400}
              width={600}
              alt={name || "project image"}
            />
          </div>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-center font-science text-4xl text-white mb-10">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {techs?.map((tech: string, i: number) => (
            <span
              key={i}
              className="py-2 px-5 bg-white/5 border border-white/10 text-white/60 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-center font-science text-4xl text-white mb-10">
          Project Features
        </h2>
        <div className="text-white/60">
          <div
            className="feature_des"
            dangerouslySetInnerHTML={{
              __html: features || "",
            }}
          ></div>
        </div>
      </div>
      <div className="container py-12">
        <h2 className="text-center font-science text-4xl text-white mb-10">
          Important Screens
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {screens?.map((screen: string, index: number) => (
            <img
              key={index}
              src={screen}
              className="w-full h-fill object-cover"
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
