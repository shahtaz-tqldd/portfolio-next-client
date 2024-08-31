"use client";
import React from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { projects } from "../common";
import { X } from "lucide-react";

const imgFallback = "https://img.png";
const ProjectDetails = () => {
  const { name } = useParams();
  const router = useRouter();

  const selectedProject = projects.find(
    (proj) => proj.name.toLowerCase().split(" ").join("-") === name
  );

  return (
    <section className="container py-6">
      <button
        onClick={() => router.back()}
        className="border h-10 w-10 hover:bg-white/10 cursor-pointer tr rounded-full border-white/20 center"
      >
        <X />
      </button>
      <div className="grid grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-6xl font-science">{selectedProject?.name}</h2>
          <p className="text-lg mt-5 text-white/65">
            {selectedProject?.description}
          </p>
          <div className="flex gap-3 mt-8">
            {selectedProject?.tags?.map((tag, i) => (
              <span key={i} className="py-2 px-4 rounded-md bg-purple-500/15">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <Image
            src={selectedProject?.img || imgFallback}
            className="w-full h-[480px] object-cover rounded-2xl border border-white/10"
            height={400}
            width={600}
            alt={selectedProject?.name || "project image"}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
