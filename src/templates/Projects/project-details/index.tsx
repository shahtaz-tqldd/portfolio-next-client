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
    liveLink,
  } = project;
  const bgColors = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-emerald-500",
    "bg-orange-500",
  ];
  return (
    <section className="container">
      <div className="container py-12 px-3">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div>
            <p className="text-white/60 text-sm mb-4">{projectType}</p>
            <h2 className="md:text-4xl text-3xl text-white font-semibold font-science">
              {name}
            </h2>
            <p className="mt-3 text-white/65 md:text-base text-sm">{description}</p>
            <div className="flex flex-wrap gap-4 mt-5 text-yellow-500">
              {tags?.map((tag: string, i: number) => (
                <span key={i} className="text-sm">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-12 fl">
              <a href={liveLink || ""} target="__blank">
                <TextButton>
                  <div className="fl gap-2 justify-center">
                    <span>Live Link</span>
                    <GoArrowUpRight className="text-lg" />
                  </div>
                </TextButton>
              </a>
            </div>
          </div>
          <div>
            <Image
              src={img}
              className="w-full lg:h-[420px] md:h-[340px] h-[280px] object-cover rounded-2xl border border-white/10"
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
              className="lg:py-2 py-1.5 lg:px-5 px-3.5 bg-white/5 border border-white/10 text-white/60 rounded-full lg:text-base text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="container py-12 px-3">
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {screens?.map((screen: string, index: number) => (
            <div className="md:h-[360px] h-[240px] w-full bg-gray-100 p-6 center overflow-hidden relative group">
              <img
                key={index}
                src={screen}
                className="w-full h-fill object-contain shadow-lg relative z-10 group-hover:scale-105 tr"
                alt=""
              />
              <div
                className={`h-80 w-80 absolute -top-40 rounded-full -left-44 z-0 ${bgColors[index]} bg-opacity-20`}
              ></div>
              <div
                className={`h-80 w-80 absolute -bottom-48 rounded-full -right-36 z-0 ${
                  bgColors[(index + 4) % bgColors?.length]
                } bg-opacity-20`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
